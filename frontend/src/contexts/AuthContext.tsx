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
            const response = await api.get('/auth/me')
            setUser(response.data.user)
        } catch (error) {
            console.error('[Failed to fetch user]', error)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);


    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/login', { email, password })
            const { user: userData } = response.data
            setUser(userData)
            navigate('/admin')
            toast.success(response?.data?.message || "Admin Logged in succesfully")
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Login failed')
            throw new Error(error.response?.data?.message || 'Login failed')
        }
    }

    const register = async (name: string, email: string, password: string,) => {
        try {
            const response = await api.post('/auth/register', { name, email, password })
            const { user: userData } = response.data
            setUser(userData)
            navigate('/admin')
            toast.success(response?.data?.message || "Admin signup succesfully")
        } catch (error: any) {
            console.log(error, "3333333333333333");

            const message =
                error.response?.data?.message || "Registration failed"
            toast.error(message)

            throw new Error(message)
        }
    }

    const logout = async () => {
        setUser(null)
        console.log("user logged out");

        const res = await api.post('/auth/logout')
        console.log("[after user logged out]");
        // toast.success("Logged out !!")
        console.log("[logout res is :: ]", res);

        toast.success(res.data?.message || "Logged out !!")
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