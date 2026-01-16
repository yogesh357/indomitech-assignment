import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import LandingPage from '@/pages/LandingPage'
import ProtectedRoute from '@/components/ProtectedRoute'
import { Toaster } from 'sonner'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/admin/Dashboard'
import UnderDevelopment from './components/UnderDevelopment'
import Signup from './components/Signup'
import { Button } from './components/ui/button'
import { ArrowLeft } from 'lucide-react'
import TaskList from '@/pages/admin/task/TaskList'
import TaskCreate from '@/pages/admin/task/TaskCreate'
import Contact from './components/Contact'

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
              <Route path="/admin/employees/tasks" element={<TaskList />} />
              <Route path="/admin/task/assign" element={<TaskCreate />} />
            </Route>


            <Route path='/employees' element={<UnderDevelopment />} />
            <Route path='/tasks' element={<UnderDevelopment />} />
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/features' element={<UnderDevelopment />} />3
            <Route path='/*' element={<div className='h-[90vh] flex flex-col gap-5 justify-center items-center text-2xl font-semibold'>
              route not found
              <Button onClick={() => window.location.replace('/')}>
                <ArrowLeft />
                Go To Home Page
              </Button>
            </div>} />

          </Routes>
          <Toaster />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App