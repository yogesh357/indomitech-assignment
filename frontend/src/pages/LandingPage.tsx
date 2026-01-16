import { Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Rocket,
  Users,
  ClipboardList,
  Server,
  UserCog,
  Layers,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  LayoutDashboard,
  Sparkles
} from 'lucide-react'
import Footer from '@/components/Footer'

const LandingPage = () => {
  const { user } = useAuth()

  const features = [
    {
      title: "Secure Authentication",
      description: "Enterprise-grade role-based login ensuring only authorized personnel access sensitive data.",
      icon: <ShieldCheck className="h-6 w-6 text-orange-600" />,
      bg: "bg-orange-100/50"
    },
    {
      title: "Employee Management",
      description: "Centralized hub to create, update, and manage staff profiles efficiently.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      bg: "bg-blue-100/50"
    },
    {
      title: "Task Tracking",
      description: "Real-time task assignment and progress monitoring to keep your team aligned.",
      icon: <ClipboardList className="h-6 w-6 text-green-600" />,
      bg: "bg-green-100/50"
    },
    {
      title: "Robust API",
      description: "Powered by a secure REST API architecture ensuring fast data retrieval.",
      icon: <Server className="h-6 w-6 text-purple-600" />,
      bg: "bg-purple-100/50"
    },
    {
      title: "Role-Based Access",
      description: "Granular permission settings. Admins manage the system; employees focus on tasks.",
      icon: <UserCog className="h-6 w-6 text-pink-600" />,
      bg: "bg-pink-100/50"
    },
    {
      title: "Scalable Architecture",
      description: "Built on React and Node.js, designed to grow seamlessly with your business.",
      icon: <Layers className="h-6 w-6 text-indigo-600" />,
      bg: "bg-indigo-100/50"
    },
  ]


  return (
    <div className=" min-h-screen flex flex-col">

      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">


        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Top Center Glow (Spotlight) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

        {/* Bottom Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none"></div>

        <div className="relative z-10 container mx-auto text-center px-4">

          {/* Optional: Tech Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-sm mb-8 text-xs font-medium text-slate-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            v2.0 Now Available
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl mb-8 drop-shadow-2xl">
            Streamline Your Workflow with{' '}
            <span className="relative whitespace-nowrap">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-20 blur-lg"></span>
              <span className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                TaskManager
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed">
            A modern HR platform for forward-thinking companies. Manage staff,
            assign tasks, and track productivity—all in one secure dashboard.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            {user ? (
              <Button
                size="lg"
                className="group h-14 px-8 text-base font-semibold bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 text-white shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] border-0 transition-all hover:scale-105"
                asChild
              >
                <Link to={'/admin'}>
                  Go to Dashboard
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  size="lg"
                  className="group h-12 min-w-[160px] text-base font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] border border-transparent"
                  asChild
                >
                  <Link to="/admin/login">
                    Admin Login
                    <ChevronRight className="ml-1 h-4 w-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group h-12 min-w-[160px] text-base border-slate-700 bg-slate-900/50 backdrop-blur-md text-slate-300 hover:text-white hover:bg-slate-800 hover:border-orange-500/50 transition-all"
                  asChild
                >
                  <Link to="/employe/task">
                    <Rocket className="mr-2 h-5 w-5 text-orange-500 group-hover:text-orange-400 group-hover:-translate-y-1 transition-all" />
                    Task Module
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* featurs section */}
      <section className="bg-slate-950 py-24 text-slate-100">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Engineered for <span className="text-indigo-400">Perfomance</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Unleash the full potential of your workflow with tools built for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden"
              >
                {/* Glowing Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative h-full bg-slate-900 rounded-2xl p-8 transition-colors hover:bg-slate-800/50">
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
                    <span className="text-indigo-400 group-hover:text-indigo-300">
                      {feature.icon}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. CTA SECTION */}
      <section className="relative py-24 px-4 bg-slate-950">

        {/* Container - Constrained width */}
        <div className="container mx-auto max-w-5xl">

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl group">

            {/* --- Background Effects --- */}

            {/* Subtle Grid Pattern inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            {/* Top highlight glow (The "Glass Edge" look) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent"></div>

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[80px] group-hover:bg-orange-500/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[80px] group-hover:bg-purple-600/20 transition-all duration-700"></div>

            {/* --- Content --- */}
            <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 text-center">

              {/* Icon Floating */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 border border-slate-700 shadow-lg shadow-purple-500/10 rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-orange-400" />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
                Ready to modernize your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  HR Architecture?
                </span>
              </h2>

              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of admin users managing tasks efficiently.
                Experience the secure, real-time dashboard built for scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">

                {/* Primary Button */}
                <Button
                  size="lg"
                  className="h-14 px-8 text-base font-bold bg-white text-slate-950 hover:bg-slate-200 hover:scale-105 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                  asChild
                >
                  <Link to="/admin/login">
                    Login as Admin
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                {/* Secondary Button */}
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 transition-all backdrop-blur-md"
                  asChild
                >
                  <Link to="/employe/task">
                    <LayoutDashboard className="mr-2 h-5 w-5 text-slate-400" />
                    Open Task Module
                  </Link>
                </Button>
              </div>

              <p className="mt-8 text-xs text-slate-600 font-medium tracking-wider uppercase">
                No credit card required • Setup in 2 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <Footer />

    </div>
  )
}

export default LandingPage