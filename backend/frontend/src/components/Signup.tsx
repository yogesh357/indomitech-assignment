import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useAuth } from '@/contexts/AuthContext'


const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
})

type SignupForm = z.infer<typeof signupSchema>

function Signup() {
    const form = useForm<SignupForm>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })
    const onSubmit = () => { }
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/admin", { replace: true })
        }
    }, [user])


    return (
        <div className="max-h-screen h-[90vh] flex items-center justify-center bg-slate-50  overflow-y-hidden">
            <div className="w-full max-w-md  h-[75vh]  rounded-2xl border border-slate-200 bg-white px-8 py-3 shadow-xl">

                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-serif">
                        Admin Signup
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Register to manage employees and tasks
                    </p>
                </div>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="jonny deep"
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
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="jonnydeep@gmail.com"
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
                    onClick={() => navigate('/admin/login')}
                >
                    Already have account? <span className="text-blue-500">  Login</span>
                </div>
            </div>
        </div>
    )
}

export default Signup
