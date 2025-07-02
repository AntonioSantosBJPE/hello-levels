'use client'

import { ArrowRight, BookOpen, CheckCircle, Target, Video } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ROUTES } from '@/constants/routes'
import { authClient } from '@/lib/auth-client'

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await authClient.getSession()
        if (session && 'user' in session && session.user) {
          setUser(session.user)
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const handleGetStarted = () => {
    if (user) {
      router.push(ROUTES.DASHBOARD.ROOT)
    } else {
      router.push(ROUTES.SIGN_UP)
    }
  }

  const handleSignIn = () => {
    router.push(ROUTES.SIGN_IN)
  }

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600' />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {/* Header */}
      <header className='container mx-auto px-4 py-6'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <BookOpen className='w-5 h-5 text-white' />
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Hello Levels
            </span>
          </div>

          <div className='flex items-center space-x-4'>
            {user ? (
              <Button
                onClick={() => router.push(ROUTES.DASHBOARD.ROOT)}
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Button variant='ghost' onClick={handleSignIn}>
                  Entrar
                </Button>
                <Button
                  onClick={handleGetStarted}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                >
                  Começar
                </Button>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          <Badge variant='secondary' className='mb-6'>
            🚀 Plataforma de Trilhas de Estudo de Inglês
          </Badge>

          <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent'>
            Transforme seu inglês com trilhas personalizadas
          </h1>

          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Aprenda inglês de forma estruturada e eficaz com vídeos, apostilas e
            exercícios organizados por níveis de proficiência CEFR.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              onClick={handleGetStarted}
              className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6'
            >
              Começar Agora
              <ArrowRight className='ml-2 w-5 h-5' />
            </Button>

            {!user && (
              <Button
                size='lg'
                variant='outline'
                onClick={handleSignIn}
                className='text-lg px-8 py-6'
              >
                Já tenho conta
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='container mx-auto px-4 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Por que escolher o Hello Levels?
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Uma experiência de aprendizado completa e personalizada para todos
            os níveis
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
            <CardHeader>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                <Target className='w-6 h-6 text-blue-600' />
              </div>
              <CardTitle>Níveis CEFR</CardTitle>
              <CardDescription>
                Trilhas estruturadas seguindo o padrão internacional CEFR
                (A1-C2)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>A1 (Iniciante) - Disponível</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>A2-C2 - Em desenvolvimento</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
            <CardHeader>
              <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                <BookOpen className='w-6 h-6 text-purple-600' />
              </div>
              <CardTitle>Eixos de Aprendizado</CardTitle>
              <CardDescription>
                Conteúdo organizado em três áreas fundamentais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>Gramática</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>Vocabulário</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>Tópicos Gerais</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
            <CardHeader>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
                <Video className='w-6 h-6 text-green-600' />
              </div>
              <CardTitle>Recursos Multimídia</CardTitle>
              <CardDescription>
                Diversos tipos de conteúdo para maximizar o aprendizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>Vídeos do YouTube</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>Apostilas em PDF</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>Questionários</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-500' />
                  <span className='text-sm'>Simulados</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 py-20'>
        <Card className='border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
          <CardContent className='p-12 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Pronto para transformar seu inglês?
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Junte-se a milhares de estudantes que já estão evoluindo com
              nossas trilhas personalizadas
            </p>
            <Button
              size='lg'
              variant='secondary'
              onClick={handleGetStarted}
              className='text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100'
            >
              Começar Gratuitamente
              <ArrowRight className='ml-2 w-5 h-5' />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className='container mx-auto px-4 py-12 border-t border-gray-200'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='flex items-center space-x-2 mb-4 md:mb-0'>
            <div className='w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center'>
              <BookOpen className='w-4 h-4 text-white' />
            </div>
            <span className='text-lg font-semibold'>Hello Levels</span>
          </div>

          <div className='flex items-center space-x-6 text-sm text-gray-600'>
            <span>
              © {new Date().getFullYear()} Hello Levels. Todos os direitos
              reservados.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
