"use client"
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MainNavProps {
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname()
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        // @ts-ignore
        label: route.label,
        active: pathname === `/category/${route.id}`
    }))
  return (
    <div className='bg-gradient-to-b from-brandblu/5 to-brandblu/10 sticky z-10 top-[10rem] w-full lg:top-24 p-5 flex items-center space-x-6'>
        <div className="px-6 lg:px-24  mx-auto flex w-full items-center justify-between">
        {
            routes.map((route) => (
                <Link
                key={route.href}
                className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                )}
                 href={route.href}>
                    {route.label}
                </Link>
            ))
        }
        </div>
    </div>
  )
}

export default MainNav