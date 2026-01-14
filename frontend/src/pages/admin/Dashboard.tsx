import LineBarAreaComposedChart from '@/components/charts/EmployeeTaskCompletionChart'
import { Button } from '@/components/ui/button'
import { ListPlus, Rocket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex  gap-4  items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-sm text-slate-600">
              Manage employees and track task performance
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => navigate('/admin/task/assign')}
              className="flex items-center gap-2"
            >
              <ListPlus size={18} />
              Assign Task
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate('/admin/employees/tasks')}
              className="flex items-center gap-2"
            >
              <Rocket size={18} />
              Manage Tasks
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">


        <section>
          <LineBarAreaComposedChart />
        </section>
      </main>
    </div>
  )
}

export default Dashboard
