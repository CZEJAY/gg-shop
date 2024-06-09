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
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))
  return (
    <div className='p-3 lg:py-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 sticky z-10 top-[10rem] w-full lg:top-24 flex items-center space-x-6'>
        <div className=" px-1 lg:px-24  mx-auto flex w-full items-center justify-between">
        {
            routes.map((route) => (
                <Link
                key={route.href}
                className={cn(
                    " font-medium transition-colors hover:text-black !text-small-regular",
                    route.active ? "text-black" : "text-white"
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