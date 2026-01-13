import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { type ReactNode } from 'react'



const ProtectedRoute = () => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/admin/login" replace />
    }

    // if (requiredRole && user.role !== requiredRole) {
    //     // return <Navigate to="/admin" replace />
    //     return <div>You Don't have permission to acces this route</div>
    // }

    return <Outlet />
}

export default ProtectedRoute