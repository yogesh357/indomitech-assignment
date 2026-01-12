import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal, Plus, Search, Filter, Download } from 'lucide-react'
import axios from '@/lib/axios'
import { toast } from 'sonner'

interface Employee {
    _id: string
    employeeId: string
    userId: {
        _id: string
        name: string
        email: string
        role: string
    }
    department: string
    position: string
    salary: number
    status: 'active' | 'on-leave' | 'terminated'
    hireDate: string
}

const EmployeeList = () => {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState<Employee[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [departmentFilter, setDepartmentFilter] = useState('')
    const [statusFilter, setStatusFilter] = useState('')

    const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations']

    useEffect(() => {
        fetchEmployees()
    }, [])

    const fetchEmployees = async () => {
        try {
            const params = new URLSearchParams()
            if (searchTerm) params.append('search', searchTerm)
            if (departmentFilter) params.append('department', departmentFilter)
            if (statusFilter) params.append('status', statusFilter)

            const response = await axios.get(`/employees?${params.toString()}`)
            setEmployees(response.data.data)
        } catch (error) {
            toast.error('Failed to fetch employees')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this employee?')) return

        try {
            await axios.delete(`/employees/${id}`)
            // toast({
            //     title: 'Success',
            //     description: 'Employee deleted successfully',
            // })
            toast.success('Employee deleted successfully')
            fetchEmployees()
        } catch (error) {
            // toast({
            //     title: 'Error',
            //     description: 'Failed to delete employee',
            //     variant: 'destructive',
            // })
            toast.error('Failed to delete employee')
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800'
            case 'on-leave':
                return 'bg-yellow-100 text-yellow-800'
            case 'terminated':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const exportToCSV = () => {
        const headers = ['Employee ID', 'Name', 'Email', 'Department', 'Position', 'Salary', 'Status', 'Hire Date']
        const data = employees.map(emp => [
            emp.employeeId,
            emp.userId.name,
            emp.userId.email,
            emp.department,
            emp.position,
            `$${emp.salary.toLocaleString()}`,
            emp.status,
            new Date(emp.hireDate).toLocaleDateString(),
        ])

        const csvContent = [
            headers.join(','),
            ...data.map(row => row.join(','))
        ].join('\n')

        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'employees.csv'
        a.click()
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Employees</h2>
                    <p className="text-muted-foreground">
                        Manage your organization's employees and their details.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" onClick={exportToCSV}>
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <Button onClick={() => navigate('/admin/employees/create')}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Employee
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <CardTitle>Employee Directory</CardTitle>
                            <CardDescription>
                                View and manage all employees in your organization
                            </CardDescription>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search employees..."
                                    className="pl-8"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && fetchEmployees()}
                                />
                            </div>
                            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="Department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="">All Departments</SelectItem>
                                    {departments.map(dept => (
                                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="">All Status</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="on-leave">On Leave</SelectItem>
                                    <SelectItem value="terminated">Terminated</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" size="icon" onClick={fetchEmployees}>
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="flex justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Employee ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Department</TableHead>
                                    <TableHead>Position</TableHead>
                                    <TableHead>Salary</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Hire Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {employees.map((employee) => (
                                    <TableRow key={employee._id}>
                                        <TableCell className="font-medium">{employee.employeeId}</TableCell>
                                        <TableCell>
                                            <div>
                                                <div className="font-medium">{employee.userId.name}</div>
                                                <div className="text-sm text-muted-foreground">{employee.userId.email}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{employee.department}</TableCell>
                                        <TableCell>{employee.position}</TableCell>
                                        <TableCell>${employee.salary.toLocaleString()}</TableCell>
                                        <TableCell>
                                            <Badge className={getStatusColor(employee.status)}>
                                                {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {new Date(employee.hireDate).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem onClick={() => navigate(`/admin/employees/${employee._id}/edit`)}>
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => navigator.clipboard.writeText(employee.employeeId)}>
                                                        Copy Employee ID
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        className="text-red-600"
                                                        onClick={() => handleDelete(employee._id)}
                                                    >
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default EmployeeList