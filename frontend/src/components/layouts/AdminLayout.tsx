import { Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import Sidebar from '../Sidebar'
import Header from '../Header'

const AdminLayout = () => {
    const { user } = useAuth()

    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <div className="lg:pl-72">
                {/* <Header user={user} /> */}
                <Header />
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout