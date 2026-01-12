import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import LandingPage from '@/pages/LandingPage'
import AdminLayout from '@/components/layouts/AdminLayout'
import EmployeeList from '@/pages/admin/employees/EmployeeList'
import EmployeeCreate from '@/pages/admin/employees/EmployeeCreate' 
import ProtectedRoute from '@/components/ProtectedRoute'
import { Toaster } from 'sonner'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/admin/Dashboard'
import UnderDevelopment from './components/UnderDevelopment'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin/login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute requiredRole='ADMIN' />
            }>
              <Route index element={<Dashboard />} />
              <Route path="/admin/employees" element={<EmployeeList />} />
              <Route path="/admin/employees/create" element={<EmployeeCreate />} />
            </Route>


            <Route path='/pricing' element={<UnderDevelopment />} />
            <Route path='/tasks' element={<UnderDevelopment />} />
            <Route path='/contact' element={<UnderDevelopment />}></Route>
            <Route path='/features' element={<UnderDevelopment />} />
            <Route path='/*' element={<div>route not found</div>} />

          </Routes>
          <Toaster />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App