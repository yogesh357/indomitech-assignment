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
  ArrowRight
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
    <div className="min-h-screen flex flex-col ">

      {/* 1. HERO SECTION */}
      <section className="relative  w-full pt-24 pb-20 md:pt-32 md:pb-32 lg:pb-40 px-4">
        <div className="container mx-auto text-center">


          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl  font-extrabold tracking-normal text-slate-900 sm:text-6xl md:text-7xl mb-8 drop-shadow-sm">
            Streamline Your Workflow with{' '}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              TaskManager
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed">
            A modern HR platform for forward-thinking companies. Manage staff,
            assign tasks, and track productivity—all in one secure dashboard.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {user ? (
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 transition-all hover:scale-105" asChild>
                <Link to={'/admin'}>
                  Go to Dashboard
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <>
                <Button size="lg" className="h-12 min-w-40 text-base font-semibold shadow-xl shadow-orange-500/10 bg-slate-900 hover:bg-slate-800 transition-all hover:-translate-y-1" asChild>
                  <Link to="/admin/login">Admin Login</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 min-w-40 border-slate-300 bg-white/50 backdrop-blur-sm text-base hover:bg-white hover:text-orange-600 transition-all" asChild>
                  <Link to="/employe/task">
                    <Rocket className="mr-2 h-5 w-5" />
                    Task Module
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm bg-orange-50 px-3 py-1 rounded-full mb-4 inline-block">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Powerful features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600">modern teams</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Everything you need to manage your team — designed for clarity, security, and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-6 inline-flex items-center justify-center h-14 w-14 rounded-2xl ${feature.bg} text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-slate-900 group/link cursor-pointer">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform text-orange-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* 3. CTA SECTION */}
      <section className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl">

          {/* Decorative background circle inside the card */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl"></div>

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to modernize your HR process?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join admin users managing tasks efficiently. Experience the secure,
              real-time dashboard today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold h-12 px-8" asChild>
                <Link to="/admin/login">
                  Login as Admin
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white h-12 px-8" asChild>
                <Link to="/employe/task">Open Task Module</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <div className="relative z-10 mt-auto border-t border-slate-200/60 bg-white/40 backdrop-blur-md">
        <Footer />
      </div>

    </div>
  )
}

export default LandingPage