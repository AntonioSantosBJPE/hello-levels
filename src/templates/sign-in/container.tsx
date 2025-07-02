'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { BookOpen, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ROUTES } from '@/constants/routes'
import { authClient } from '@/lib/auth-client'

import { translateMessageApi } from '../../utils/tranlate-message-api'

const formSchema = z.object({
  email: z.string().email({
    message: 'Por favor, insira um email válido.',
  }),
  password: z.string().min(1, {
    message: 'A senha é obrigatória.',
  }),
})

export const SignInContainer = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess: () => {
            toast.success('Login realizado com sucesso')
            router.push(ROUTES.DASHBOARD.ROOT)
          },
          onError: async error => {
            const translatedMessage = await translateMessageApi({
              message: error.error.message,
            })
            toast.error('Erro ao fazer login', {
              description: translatedMessage,
            })
          },
        }
      )
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error('Erro ao fazer login', {
        description: 'Por favor, tente novamente.',
      })
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4'>
      <div className='w-full max-w-md'>
        <div className='flex justify-center mb-8'>
          <Link href={ROUTES.HOME} className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <BookOpen className='w-6 h-6 text-white' />
            </div>
            <span className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Hello Levels
            </span>
          </Link>
        </div>

        <div className='bg-white p-8 rounded-xl shadow-lg'>
          <h1 className='text-2xl font-bold text-center mb-2'>
            Acesse sua conta
          </h1>
          <p className='text-center text-gray-500 mb-6'>
            Continue sua jornada de aprendizado de inglês.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='seu@email.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='Sua senha'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>
          </Form>

          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600'>
              Não tem uma conta?{' '}
              <Link
                href='/sign-up'
                className='font-semibold text-blue-600 hover:underline'
              >
                Criar conta
              </Link>
            </p>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <Link
            href={ROUTES.HOME}
            className='inline-flex items-center text-sm text-gray-600 hover:text-blue-600'
          >
            <ChevronLeft className='w-4 h-4 mr-1' />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}
