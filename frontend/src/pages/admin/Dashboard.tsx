import TaskAnalysis from '@/components/TaskAnalysis'
import { Button } from '@/components/ui/button'
import { ListPlus, Rocket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center  gap-7 mt-10 h-screen'>
      <div className='text-center '>
        <h1 className='font-bold text-2xl '> Welcome to Admin Dashboard</h1>
        {/* <h4 className='text-gray-600 font-semibold'>Manage your all Employees and assigned tasks</h4> */}
      </div>
      <div className='flex gap-8'>
        <Button onClick={() => navigate('/admin/task/assign')}>
          Assign New task
          <ListPlus />
        </Button>
        <Button onClick={() => navigate('/admin/employees/tasks')}>
          Manage Task
          <Rocket />
        </Button>
      </div>
      <div>
        <TaskAnalysis />
      </div>
    </div>
  )
}

export default Dashboard
