import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center  h-screen'>
      <div className='text-center '>
        <h1 className='font-bold text-2xl '> Welcome to Admin Dashboard</h1>
        <h4 className='text-gray-600 font-semibold'>Manage your all Employees and assigned tasks</h4>
      </div>
      <div>
        <Button onClick={() => navigate('/admin/task/assign')}>
          Assign New task
        </Button>
        <Button onClick={() => navigate('/admin/employees/tasks')}>
          Manage Task
        </Button>
      </div>
    </div>
  )
}

export default Dashboard
