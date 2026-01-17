import LineBarAreaComposedChart from '@/components/charts/EmployeeTaskCompletionChart'
import { Button } from '@/components/ui/button'
import { ListPlus, Rocket, BarChart3 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500 pt-24 pb-10 px-4 md:px-10">

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">

        <div className="w-full md:w-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Admin <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Dashboard</span>
          </h1>
          <p className="text-slate-400 flex items-center gap-2 text-sm sm:text-base">
            Manage employees and track real-time performance
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button
            onClick={() => navigate('/admin/task/assign')}
            className="w-full sm:w-auto group relative overflow-hidden bg-white text-slate-950 hover:bg-slate-200 font-bold   border-0 transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <ListPlus size={18} className="text-purple-600" />
              Assign Task
            </span>
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate('/admin/employees/tasks')}
            className="w-full sm:w-auto group border-slate-700 bg-slate-900/50 backdrop-blur-md text-slate-300 hover:text-white hover:bg-slate-800 hover:scale-105"
          >
            <Rocket size={18} className="mr-2 text-orange-500 " />
            Manage Tasks
          </Button>
        </div>
      </div>

      <main className="grid grid-cols-1 gap-8">
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl">
          <div className="p-4 sm:p-6 md:p-8 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                  <BarChart3 className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Task Analytics</h3>
              </div>

              <div className="self-start sm:self-auto text-xs font-medium text-slate-500 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full">
                Last 7 Days
              </div>
            </div>

            <div className="h-75 sm:h-100 w-full min-w-0 ">
              <LineBarAreaComposedChart />
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Dashboard