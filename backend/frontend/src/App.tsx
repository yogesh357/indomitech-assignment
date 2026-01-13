import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import LandingPage from '@/pages/LandingPage'
import EmployeeList from '@/pages/admin/employees/TaskList'
import EmployeeCreate from '@/pages/admin/employees/TaskCreate'
import ProtectedRoute from '@/components/ProtectedRoute'
import { Toaster } from 'sonner'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/admin/Dashboard'
import UnderDevelopment from './components/UnderDevelopment'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/signup" element={<Signup />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute />
            }>
              <Route index element={<Dashboard />} />
              <Route path="/admin/employees/tasks" element={<EmployeeList />} />
              <Route path="/admin/task/assign" element={<EmployeeCreate />} />
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