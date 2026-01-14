import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '@/lib/axios'
import { toast } from 'sonner'

interface User {
    id: string
    name: string
    email: string
    role: string
}

interface AuthContextType {
    user: User | null
    isLoading: boolean
    login: (email: string, password: string) => Promise<void>
    register: (name: string, email: string, password: string, role?: string) => Promise<void>
    logout: () => void
    updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

const demoUser: User = {
    id: '1',
    name: 'Demo User',
    email: ' yp@gmail.com',
    role: "ADMIN"
}


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const fetchUser = async () => {
        try {
            const response = await api.get('/auth/me') //:
            setUser(response.data.user)
        } catch (error) {
            console.error('Failed to fetch user:', error)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchUser()
            .finally(() => setIsLoading(false))
    }, [])

    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/login', { email, password })
            const { user: userData } = response.data

            setUser(userData)
            navigate('/admin')
            toast.success("Admin Logged in succesfully")
        } catch (error: any) {
            toast.error("Admin Logged in error")
            throw new Error(error.response?.data?.message || 'Login failed')
        }
    }

    const register = async (name: string, email: string, password: string,) => {
        try {
            const response = await api.post('/auth/register', { name, email, password })
            const { user: userData } = response.data

            setUser(userData)
            navigate('/admin')
            toast.success("Admin signup succesfully")
        } catch (error: any) {
            toast.error("Admin signup error")
            throw new Error(error.response?.data?.message || 'Registration failed')
        }
    }

    const logout = async () => {
        setUser(null)
        await api.post('/auth/logout')
        toast.success("Logged out !!")
        navigate('/admin/login')
    }

    const updateUser = (userData: Partial<User>) => {
        setUser(prev => prev ? { ...prev, ...userData } : null)
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}