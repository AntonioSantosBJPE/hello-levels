import { BookOpen } from 'lucide-react'
import Link from 'next/link'

import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Logo = ({ size = 'md', className }: LogoProps) => {
  const sizeClasses = {
    sm: {
      iconContainer: 'w-6 h-6',
      icon: 'w-4 h-4',
      text: 'text-lg',
    },
    md: {
      iconContainer: 'w-8 h-8',
      icon: 'w-5 h-5',
      text: 'text-2xl',
    },
    lg: {
      iconContainer: 'w-10 h-10',
      icon: 'w-6 h-6',
      text: 'text-3xl',
    },
  }

  const selectedSize = sizeClasses[size]

  return (
    <Link
      href={ROUTES.HOME}
      className={cn('flex items-center space-x-2', className)}
    >
      <div
        className={cn(
          'bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center',
          selectedSize.iconContainer
        )}
      >
        <BookOpen className={cn('text-white', selectedSize.icon)} />
      </div>
      <span
        className={cn(
          'font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
          selectedSize.text
        )}
      >
        Hello Levels
      </span>
    </Link>
  )
}
