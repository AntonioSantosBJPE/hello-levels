'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { BookOpen, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v4'

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

const formSchema = z.object({
  name: z.string().min(3, {
    error: 'O nome deve ter pelo menos 3 caracteres.',
  }),
  email: z.email({
    error: 'Por favor, insira um email válido.',
  }),
  password: z.string().min(8, {
    error: 'A senha deve ter pelo menos 8 caracteres.',
  }),
})

export default function SignUp() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await authClient.signUp.email(
        {
          email: values.email,
          password: values.password,
          name: values.name,
        },
        {
          onSuccess: () => {
            router.push(ROUTES.DASHBOARD.ROOT)
          },
          onError: error => {
            console.error('Erro ao criar conta:', error)
          },
        }
      )
    } catch (error) {
      console.error('Erro ao criar conta:', error)
      // Adicionar feedback de erro para o usuário
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
            Crie sua conta
          </h1>
          <p className='text-center text-gray-500 mb-6'>
            Comece sua jornada de aprendizado de inglês.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder='Seu nome completo' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                {form.formState.isSubmitting
                  ? 'Criando conta...'
                  : 'Criar conta'}
              </Button>
            </form>
          </Form>

          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600'>
              Já tem uma conta?{' '}
              <Link
                href='/sign-in'
                className='font-semibold text-blue-600 hover:underline'
              >
                Entrar
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
