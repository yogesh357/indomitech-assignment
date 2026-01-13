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
import { useContext, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import api from "@/lib/axios"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

type LoginForm = z.infer<typeof loginSchema>

export default function Login() {

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
        await login(data.email, data.password)

    }
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/admin", { replace: true })
        }
    }, [user])


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md  h-[60vh]  rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">

                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-serif">
                        Admin Login
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Sign in to manage employees and tasks
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="admin@company.com"
                                            className="h-11"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700">Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="******"
                                            className="h-11"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full h-11 rounded-lg text-base font-medium bg-linear-to-bl from-black/90 to-gray-500"
                        >
                            Sign In
                        </Button>
                    </form>
                </Form>
                <div className="text-center mt-6 cursor-pointer"
                    onClick={() => navigate('/admin/signup')}
                >
                    Don't have account? <span className="text-blue-500">  Signup</span>
                </div>
            </div>
        </div>

    )
}
