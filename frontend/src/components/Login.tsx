import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { ArrowRight, Building, Loader2, Lock, Mail } from "lucide-react"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

type LoginForm = z.infer<typeof loginSchema>

export default function Login() {
    const [loading, setLoading] = useState(false)

    const form = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const { login, user } = useAuth()
    const onSubmit = async (data: LoginForm) => {
        console.log("userdata :: ", data)
        setLoading(true)
        await login(data.email, data.password)
        setLoading(false)
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/admin", { replace: true })
        }
    }, [user])


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4  overflow-hidden ">
            <div className=" w-full max-w-md z-10 mt-12">


                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl">

                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-slate-800 mb-4 border border-slate-700 shadow-lg shadow-purple-500/10">
                            <Building className="h-6 w-6 text-orange-500" />
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                            Admin  Portal
                        </h1>
                        <p className="text-sm text-slate-400">
                            Enter your credentials to access the dashboard
                        </p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

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
                                                    className="pl-10 bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 h-11 "
                                                    placeholder="admin@company.com"
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

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
                                                    className="pl-10 bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 h-11  transition-all"
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
                                        Login .. <Loader2 className="animate-spin" />
                                    </>

                                ) : (
                                    <>
                                        Login
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>

                    <div className="text-center mt-8 pt-6 border-t border-slate-800">
                        <p className="text-sm text-slate-500">
                            Don't have an account?{' '}
                            <span
                                onClick={() => navigate('/admin/signup')}
                                className="cursor-pointer font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
