import LineBarAreaComposedChart from '@/components/charts/EmployeeTaskCompletionChart'
import { Button } from '@/components/ui/button'
import { ListPlus, Rocket, BarChart3, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500 pt-24 pb-10 px-4 md:px-10">

      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">

        <div className="w-full md:w-auto">
          {/* Title with Gradient Text */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Admin <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Dashboard</span>
          </h1>
          <p className="text-slate-400 flex items-center gap-2 text-sm sm:text-base">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Manage employees and track real-time performance
          </p>
        </div>

        {/* Action Buttons */}
        {/* 2. Changed to flex-col (stacked) on mobile, flex-row on SM screens */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button
            onClick={() => navigate('/admin/task/assign')}
            className="w-full sm:w-auto group relative overflow-hidden bg-white text-slate-950 hover:bg-slate-200 font-bold shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)] border-0 transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <ListPlus size={18} className="text-purple-600" />
              Assign Task
            </span>
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate('/admin/employees/tasks')}
            className="w-full sm:w-auto group border-slate-700 bg-slate-900/50 backdrop-blur-md text-slate-300 hover:text-white hover:bg-slate-800 hover:border-orange-500/50 transition-all"
          >
            <Rocket size={18} className="mr-2 text-orange-500 group-hover:-translate-y-1 transition-transform" />
            Manage Tasks
          </Button>
        </div>
      </div>

      {/* --- Main Content --- */}
      <main className="grid grid-cols-1 gap-8">

        {/* Chart Card Container */}
        {/* 3. Reduced padding on mobile (p-4) vs desktop (p-8) */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl">

          {/* Inner Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-50"></div>

          <div className="p-4 sm:p-6 md:p-8 relative z-10">

            {/* Chart Header - Stacked on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                  <BarChart3 className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Task Analytics</h3>
              </div>

              {/* Time Filter Pill */}
              <div className="self-start sm:self-auto text-xs font-medium text-slate-500 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full">
                Last 7 Days
              </div>
            </div>

            {/* Chart Container - Responsive Height */}
            {/* 4. h-[300px] on mobile, h-[400px] on larger screens */}
            <div className="h-[300px] sm:h-[400px] w-full min-w-0">
              {/* Added responsive container wrapper to prevent chart overflow */}
              <LineBarAreaComposedChart />
            </div>
          </div>

          {/* Background Decor inside the card */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-purple-500/5 blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-orange-500/5 blur-[80px] pointer-events-none"></div>
        </section>

      </main>
    </div>
  )
}

export default Dashboard