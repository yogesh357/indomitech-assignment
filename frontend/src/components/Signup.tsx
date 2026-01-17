import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { ArrowRight, Building, Loader2, Lock, Mail, User } from 'lucide-react'


const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
})

type SignupForm = z.infer<typeof signupSchema>

function Signup() {
    const [loading, setLoading] = useState(false)
    const form = useForm<SignupForm>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })
    const { user, register } = useAuth()
    const onSubmit = async (data: SignupForm) => {
        console.log(data)
        await register(data.name, data.email, data.password)
        setLoading(false)

    }
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/admin/dashboard", { replace: true })
        }
    }, [user])


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4  overflow-hidden py-10 mt-10">

            <div className="w-full max-w-md ">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60  px-8 py-10 ">
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-slate-800 mb-4 border border-slate-700 shadow-lg shadow-purple-500/10">
                            <Building className="h-6 w-6 text-orange-500" />
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                            Create Account
                        </h1>
                        <p className="text-sm text-slate-400 italic">
                            Register to manage employees and tasks
                        </p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-300 font-medium text-sm">Full Name</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                                                <Input
                                                    placeholder="Johnny Depp"
                                                    className="pl-10 bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 h-11 "
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-300 font-medium text-sm">Email Address</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                                                <Input
                                                    placeholder="johnny@company.com"
                                                    className="pl-10 bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 h-11  "
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            {/* Password Field */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-300 font-medium text-sm">Password</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                                                <Input
                                                    type="password"
                                                    placeholder="••••••••"
                                                    className="pl-10 bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 h-11  "
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full h-11 rounded-lg text-base font-bold text-white bg-linear-to-r from-orange-600 to-purple-600 hover:scale-102 "
                            >
                                {loading ? (
                                    <>
                                        Siggning .. <Loader2 className="animate-spin" />
                                    </>

                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>

                    {/* Footer / Login Link */}
                    <div className="text-center mt-8 pt-6 border-t border-slate-800">
                        <p className="text-sm text-slate-500">
                            Already have an account?{' '}
                            <span
                                onClick={() => navigate('/admin/login')}
                                className="cursor-pointer font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                            >
                                Login here
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
