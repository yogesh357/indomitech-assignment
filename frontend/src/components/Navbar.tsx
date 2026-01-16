import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
    Home, Contact,
    ClipboardList, Menu, X, LogOut,
    Settings, Bell, ChevronDown,
    Building, BarChart,
    ClipboardEdit,
    Users
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
    {
        name: "Home",
        link: "/",
        image: Home
    },
    {
        name: "Employees",
        link: "/employees",
        image: Users
    },
    {
        name: "Contact",
        link: "/contact",
        image: Contact
    },
    {
        name: "Add Task",
        link: "/admin/task/assign",
        image: ClipboardEdit

    },
    {
        name: "Tasks List",
        link: "/admin/employees/tasks",
        image: ClipboardList
    },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    const isActiveLink = (link: string) => {
        console.log("link :", link, "pathname : ", location.pathname)
        return location.pathname === link

    }

    const handleNavClick = (link: string) => {
        navigate(link)
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-backdrop-filter:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    <div className="flex items-center"
                    >
                        <div className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => handleNavClick('/')}>
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary to-purple-600">
                                <Building className="h-6 w-6 text-white" />
                            </div>
                            <div className='text-xl bg-linear-to-bl from-violet-600 to-gray-800 bg-clip-text text-transparent font-bold '>
                                <span className=" ">
                                    Task</span>
                                <span className=" ">Manager</span>
                            </div>
                        </div>

                        {/* NAV items */}
                        <div className="hidden lg:ml-10 lg:flex lg:items-center lg:space-x-1">
                            {navItems.map((item) => {
                                const Icon = item.image
                                const isActive = isActiveLink(item.link)

                                return (
                                    <Button
                                        key={item.name}
                                        variant={isActive ? "default" : "ghost"}
                                        className={`relative px-4 ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'}`}
                                        onClick={() => handleNavClick(item.link)}
                                    >
                                        <Icon className="mr-2 h-4 w-4" />
                                        {item.name}
                                        {isActive && (
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                                        )}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {user &&
                            <>
                                <Button variant="ghost" size="icon" className="relative">
                                    <Bell className="h-5 w-5" />
                                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                        3
                                    </span>
                                </Button>

                                <div className="hidden lg:flex items-center space-x-4 border-l pl-4">
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">Active Projects</p>
                                        <p className="text-xs text-gray-500">12 running</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">Team Members</p>
                                        <p className="text-xs text-gray-500">45 online</p>
                                    </div>
                                </div>
                            </>

                        }

                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center space-x-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-primary/10">
                                            <span className="font-semibold text-primary">
                                                {user.name?.charAt(0).toUpperCase() || 'U'}
                                            </span>
                                        </div>
                                        <div className="hidden md:block text-left">
                                            <p className="text-sm font-medium">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.role}</p>
                                        </div>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => navigate('/admin')}>
                                        <BarChart className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('/admin/employees/tasks')}>
                                        <ClipboardList className="mr-2 h-4 w-4" />
                                        Manage Task
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('/admin/task/assign')}>
                                        <ClipboardEdit className="mr-2 h-4 w-4" />
                                        Add New Task
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        className="text-red-600"
                                        onClick={() => {
                                            logout()
                                            setIsMobileMenuOpen(false)
                                        }}
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="ghost"
                                    onClick={() => navigate('/admin/login')}
                                >
                                    Login
                                </Button>
                                <Button onClick={() => navigate('/')}>
                                    Get Started
                                </Button>
                            </div>
                        )}

                        {/* MObile view navbar */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>


                {/*: for Mobile screen */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t mt-2 py-4">

                        {/* Mobile Navigation Items */}
                        <div className="space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.image
                                const isActive = isActiveLink(item.link)

                                return (
                                    <Button
                                        key={item.name}
                                        variant="ghost"
                                        className={`w-full justify-start ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-700'}`}
                                        onClick={() => handleNavClick(item.link)}
                                    >
                                        <Icon className="mr-3 h-4 w-4" />
                                        {item.name}
                                    </Button>
                                )
                            })}

                            {user && (
                                <>
                                    <div className="pt-4 border-t">
                                        <div className="flex items-center space-x-3 px-4 py-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-primary/10">
                                                <span className="font-semibold text-primary text-lg">
                                                    {user.name?.charAt(0).toUpperCase() || 'U'}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-medium">{user.name}</p>
                                                <p className="text-sm text-gray-500">{user.email}</p>
                                                <p className="text-xs text-primary">{user.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-red-600"
                                        onClick={() => {
                                            logout()
                                            setIsMobileMenuOpen(false)
                                        }}
                                    >
                                        <LogOut className="mr-3 h-4 w-4" />
                                        Logout
                                    </Button>
                                </>
                            )}
                        </div>

                        {user &&
                            <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">12</p>
                                    <p className="text-xs text-gray-500">Active Projects</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">48</p>
                                    <p className="text-xs text-gray-500">Team Members</p>
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar