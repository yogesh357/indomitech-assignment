import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Rocket, Shield, Users, BarChart, Zap, ClipboardList, Server, UserCog, Layers, ShieldCheck } from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const features = [
    {
      title: "Secure Admin Authentication",
      description:
        "Role-based login system that ensures only authorized administrators can access and manage employee data.",
      icon: <ShieldCheck className="h-8 w-8" />,
    },
    {
      title: "Employee Management",
      description:
        "Create, view, update, and manage employees directly from the admin dashboard.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Task Assignment",
      description:
        "Assign tasks to employees and track their progress in real time.",
      icon: <ClipboardList className="h-8 w-8" />,
    },
    {
      title: "Backend API Integration",
      description:
        "All data is powered by a REST API with secure authentication and persistent storage.",
      icon: <Server className="h-8 w-8" />,
    },
    {
      title: "Role-Based Access",
      description:
        "Admins and employees only see what they are allowed to access.",
      icon: <UserCog className="h-8 w-8" />,
    },
    {
      title: "Scalable Architecture",
      description:
        "Built with React, Node.js, and modern best practices to scale with your business.",
      icon: <Layers className="h-8 w-8" />,
    },
  ]



  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/30 ">
      {/* <Navbar /> */}
      <div className=''>

        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Streamline Your Workflow with{' '}
            <span className="bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              TaskManager
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            A modern HR and employee management platform that helps businesses
            manage staff, assign tasks, and track productivity through a secure
            admin dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Link to="/admin/login">Admin Login</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 " asChild>
              <Link to="/admin/employees">
                <Rocket className="mr-2 h-5 w-5" />
                View Employee Module
              </Link>
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Built for businesses that need security, structure, and scalability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-gray-600 bg-linear-to-bl from-white to-gray-200">
                <CardHeader>
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        <section className="container mx-auto px-4 py-20 text-center">
          <Card className="max-w-4xl mx-auto bg-linear-to-r from-primary/10 to-purple-500/10">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-4xl font-bold mb-6">
                Try the Admin Dashboard Live
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Log in as an admin and explore the employee management system with
                real Backend Integration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/admin/login">Login as Admin</Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link to="/admin/employees">Open Employee Module</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default LandingPage