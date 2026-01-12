import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import axiosInstance from '@/lib/axios.ts'

const employeeSchema = z.object({
    userId: z.string().min(1, 'User is required'),
    department: z.string().min(1, 'Department is required'),
    position: z.string().min(1, 'Position is required'),
    salary: z.number().min(0, 'Salary must be positive'),
    hireDate: z.string().min(1, 'Hire date is required'),
    phone: z.string().min(10, 'Phone number is required'),
    address: z.string().min(1, 'Address is required'),
    skills: z.string(),
    status: z.enum(['active', 'on-leave', 'terminated']),
    managerId: z.string().optional(),
    emergencyContact: z.object({
        name: z.string().min(1, 'Emergency contact name is required'),
        phone: z.string().min(10, 'Emergency contact phone is required'),
        relationship: z.string().min(1, 'Relationship is required'),
    }),
})

type EmployeeFormData = z.infer<typeof employeeSchema>

const EmployeeCreate = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<any[]>([])
    const [managers, setManagers] = useState<any[]>([])

    const form = useForm<EmployeeFormData>({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
            skills: '',
            status: 'active',
            emergencyContact: {
                name: '',
                phone: '',
                relationship: '',
            },
        },
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            // In a real app, you would have an API endpoint to get users without employee records
            const response = await axiosInstance.get('/users')
            setUsers(response.data)

            // Filter managers
            setManagers(response.data.filter((user: any) =>
                ['admin', 'manager'].includes(user.role)
            ))
        } catch (error) {
            console.error('Failed to fetch users:', error)
        }
    }

    const onSubmit = async (data: EmployeeFormData) => {
        setLoading(true)
        try {
            const employeeData = {
                ...data,
                skills: data.skills.split(',').map(skill => skill.trim()).filter(skill => skill),
            }

            await axiosInstance.post('/employees', employeeData)
            toast.success("'Employee created successfully'")
            navigate('/admin/employees')
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to create employee')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add New Employee</h2>
                <p className="text-muted-foreground">
                    Fill in the details to add a new employee to your organization.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Basic Information</CardTitle>
                                <CardDescription>
                                    Employee's basic information and contact details
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="userId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>User *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a user" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {users.map((user) => (
                                                            <SelectItem key={user._id} value={user._id}>
                                                                {user.name} ({user.email})
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="department"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Department *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select department" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Engineering">Engineering</SelectItem>
                                                        <SelectItem value="Marketing">Marketing</SelectItem>
                                                        <SelectItem value="Sales">Sales</SelectItem>
                                                        <SelectItem value="HR">HR</SelectItem>
                                                        <SelectItem value="Finance">Finance</SelectItem>
                                                        <SelectItem value="Operations">Operations</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="position"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Position *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g., Software Engineer" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="salary"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Salary *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="e.g., 75000"
                                                        {...field}
                                                        onChange={e => field.onChange(parseFloat(e.target.value) || 0)}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="hireDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Hire Date *</FormLabel>
                                                <FormControl>
                                                    <Input type="date" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Status *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select status" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="active">Active</SelectItem>
                                                        <SelectItem value="on-leave">On Leave</SelectItem>
                                                        <SelectItem value="terminated">Terminated</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+1 (555) 123-4567" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address *</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Full address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="skills"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Skills</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="e.g., JavaScript, React, Node.js (comma separated)"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Enter skills separated by commas
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Emergency Contact</CardTitle>
                                <CardDescription>
                                    Emergency contact information for the employee
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="emergencyContact.name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contact Name *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Full name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="emergencyContact.phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contact Phone *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Phone number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="emergencyContact.relationship"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Relationship *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select relationship" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Spouse">Spouse</SelectItem>
                                                        <SelectItem value="Parent">Parent</SelectItem>
                                                        <SelectItem value="Sibling">Sibling</SelectItem>
                                                        <SelectItem value="Child">Child</SelectItem>
                                                        <SelectItem value="Friend">Friend</SelectItem>
                                                        <SelectItem value="Other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="managerId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Manager</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select manager (optional)" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {managers.map((manager) => (
                                                            <SelectItem key={manager._id} value={manager._id}>
                                                                {manager.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormDescription>
                                                    Optional - assign a manager to this employee
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => navigate('/admin/employees')}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={loading}>
                                {loading ? 'Creating...' : 'Create Employee'}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default EmployeeCreate