/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

export default function LoginForm() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (values: FieldValues) => {
        setLoading(true)
        setError(null)

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })

            if (!res.ok) {
                const { message } = await res.json()
                throw new Error(message || 'Invalid credentials')
            }

            router.push('/admin/dashboard')
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="px-4 py-16 md:py-32 w-full">
            <Card className="w-[350px] shadow-md bg-card/40">
                <CardHeader className="text-center">
                    <Link href="/" aria-label="Go home" className="mx-auto block w-fit">
                        <Logo />
                    </Link>
                    <CardTitle className="mt-4 text-xl">Admin Login</CardTitle>
                    <CardDescription>
                        Enter your credentials to access the dashboard
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Separator className="my-4" />

                    {error && (
                        <p className="mb-4 rounded-md bg-destructive/15 p-2 text-sm text-destructive">
                            {error}
                        </p>
                    )}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                id="email"
                                                placeholder="admin@example.com"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Password</FormLabel>
                                            {/* <Button variant="link" size="sm" asChild>
                                                <Link href="#">Forgot password?</Link>
                                            </Button> */}
                                        </div>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                id="password"
                                                placeholder="••••••••"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit */}
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? 'Signing in...' : 'Sign In'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </section>
    )
}
