import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
    Home, Contact,
    ClipboardList, Menu, X, LogOut,
    Settings, Bell, ChevronDown,
    BarChart,
    ClipboardEdit,
    Users,
    Command,
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
    { name: "Home", link: "/", image: Home },
    { name: "Employees", link: "/employees", image: Users },
    { name: "Contact", link: "/contact", image: Contact },
    { name: "Add Task", link: "/admin/task/assign", image: ClipboardEdit },
    { name: "Tasks List", link: "/admin/employees/tasks", image: ClipboardList },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    const isActiveLink = (link: any) => location.pathname === link

    const handleNavClick = (link: any) => {
        navigate(link)
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 rounded-2xl z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md supports-backdrop-filter:bg-slate-950/60 ">
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-700 to-transparent opacity-40"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* --- Logo Section --- */}
                    <div className="flex items-center gap-8">
                        <div
                            className="flex items-center space-x-3 cursor-pointer group"
                            onClick={() => handleNavClick('/')}
                        >
                            {/* Logo Icon */}
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 shadow-lg group-hover:border-orange-500/50 transition-colors">
                                <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Command className="relative h-5 w-5 text-orange-500 group-hover:text-white transition-colors" />
                            </div>

                            {/* Logo Text */}
                            <div className="text-xl font-bold tracking-tight">
                                <span className="text-white">Task</span>
                                <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">Manager</span>
                            </div>
                        </div>

                        {/* --- Desktop Navigation --- */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-1">
                            {navItems.map((item) => {
                                const Icon = item.image
                                const isActive = isActiveLink(item.link)

                                return (
                                    <Button
                                        key={item.name}
                                        variant="ghost"
                                        className={`
                                            relative h-9 px-4 text-sm font-medium transition-all duration-200
                                            ${isActive
                                                ? 'text-white bg-slate-800/50'
                                                : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                                            }
                                        `}
                                        onClick={() => handleNavClick(item.link)}
                                    >
                                        <Icon className={`mr-2 h-4 w-4 ${isActive ? 'text-orange-400' : 'text-slate-500'}`} />
                                        {item.name}

                                        {/* Active Indicator Line */}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"></span>
                                        )}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>

                    {/* --- Right Side Actions --- */}
                    <div className="flex items-center space-x-5">
                        {user && (
                            <>
                                {/* Notification Bell */}
                                <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white hover:bg-slate-800 rounded-full">
                                    <Bell className="h-5 w-5" />
                                    <span className="absolute top-2 right-2 flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                    </span>
                                </Button>

                                {/* Stats (Desktop Only) */}
                                <div className="hidden xl:flex items-center space-x-6 border-l border-slate-800 pl-6 h-8">
                                    <div className="text-right">
                                        <p className="text-xs font-medium text-slate-400">Active Projects</p>
                                        <p className="text-[10px] text-green-400 font-mono tracking-wide">12 RUNNING</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-medium text-slate-400">Team Members</p>
                                        <p className="text-[10px] text-blue-400 font-mono tracking-wide">45 ONLINE</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center space-x-3 px-2 hover:bg-slate-900 rounded-full border border-transparent hover:border-slate-800 transition-all">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-purple-600 text-white shadow-md ring-2 ring-slate-950">
                                            <span className="font-bold text-sm">
                                                {user.name?.charAt(0).toUpperCase() || 'U'}
                                            </span>
                                        </div>
                                        <div className="hidden md:block text-left mr-1">
                                            <p className="text-sm font-medium text-slate-200">{user.name}</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-wider">{user.role}</p>
                                        </div>
                                        <ChevronDown className="h-4 w-4 text-slate-500" />
                                    </Button>
                                </DropdownMenuTrigger>

                                {/* Dark Mode Dropdown Content */}
                                <DropdownMenuContent align="end" className="w-60 bg-slate-950 border border-slate-800 text-slate-300 shadow-2xl shadow-black/50 p-2">
                                    <DropdownMenuLabel className="text-slate-500 text-xs uppercase tracking-wider">My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-slate-800" />
                                    <DropdownMenuItem className="cursor-pointer focus:bg-slate-900 focus:text-white" onClick={() => navigate('/admin')}>
                                        <BarChart className="mr-2 h-4 w-4 text-blue-500" />
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer focus:bg-slate-900 focus:text-white" onClick={() => navigate('/admin/employees/tasks')}>
                                        <ClipboardList className="mr-2 h-4 w-4 text-purple-500" />
                                        Manage Task
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer focus:bg-slate-900 focus:text-white" onClick={() => navigate('/admin/task/assign')}>
                                        <ClipboardEdit className="mr-2 h-4 w-4 text-orange-500" />
                                        Add New Task
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-slate-800" />
                                    <DropdownMenuItem className="cursor-pointer focus:bg-slate-900 focus:text-white">
                                        <Settings className="mr-2 h-4 w-4 text-slate-400" />
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-slate-800" />
                                    <DropdownMenuItem
                                        className="text-red-400 focus:text-red-300 focus:bg-red-500/10 cursor-pointer"
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
                            <div className="flex items-center space-x-3">
                                <Button
                                    variant="ghost"
                                    className="text-slate-300 hover:text-white hover:bg-slate-800"
                                    onClick={() => navigate('/admin/login')}
                                >
                                    Login
                                </Button>
                                <Button
                                    className="bg-white text-slate-950 hover:bg-slate-200 font-semibold shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]"
                                    onClick={() => navigate('/')}
                                >
                                    Get Started
                                </Button>
                            </div>
                        )}

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden text-slate-300 hover:text-white hover:bg-slate-800"
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

                {/* --- Mobile View --- */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 absolute left-0 w-full px-4 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-5">

                        <div className="space-y-1 pt-4">
                            {navItems.map((item) => {
                                const Icon = item.image
                                const isActive = isActiveLink(item.link)

                                return (
                                    <Button
                                        key={item.name}
                                        variant="ghost"
                                        className={`w-full justify-start h-12 text-base ${isActive
                                            ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                                            : 'text-slate-400 hover:text-white hover:bg-slate-900'
                                            }`}
                                        onClick={() => handleNavClick(item.link)}
                                    >
                                        <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-orange-400' : 'text-slate-500'}`} />
                                        {item.name}
                                    </Button>
                                )
                            })}

                            {user && (
                                <>
                                    <div className="my-4 border-t border-slate-800/50"></div>
                                    <div className="flex items-center space-x-4 px-2 py-3 bg-slate-900/50 rounded-lg border border-slate-800">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-purple-600 text-white">
                                            <span className="font-bold text-lg">
                                                {user.name?.charAt(0).toUpperCase() || 'U'}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-white">{user.name}</p>
                                            <p className="text-xs text-slate-500">{user.email}</p>
                                        </div>
                                        <div className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300 uppercase font-bold tracking-wider">
                                            {user.role}
                                        </div>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10 mt-2"
                                        onClick={() => {
                                            logout()
                                            setIsMobileMenuOpen(false)
                                        }}
                                    >
                                        <LogOut className="mr-3 h-5 w-5" />
                                        Logout
                                    </Button>
                                </>
                            )}
                        </div>

                        {user &&
                            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                                <div className="text-center p-3 rounded-xl bg-slate-900 border border-slate-800">
                                    <p className="text-2xl font-bold text-white">12</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Active Projects</p>
                                </div>
                                <div className="text-center p-3 rounded-xl bg-slate-900 border border-slate-800">
                                    <p className="text-2xl font-bold text-white">48</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Team Members</p>
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