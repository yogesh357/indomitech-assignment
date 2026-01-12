import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

const navigator = useNavigate()
type LoginForm = z.infer<typeof loginSchema>

export default function Login() {
    const form = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: LoginForm) => {
        console.log("userdata :: ", data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md  h-[60vh]  rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">

                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
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
                            className="w-full h-11 rounded-lg text-base font-medium"
                        >
                            Sign In
                        </Button>
                    </form>
                </Form>
                <div
                    onClick={() => navigator('/admin/signup')}
                >
                    Don't have account?  Signup
                </div>
            </div>
        </div>

    )
}
