"use client"
import { calculateDiscountedPrice, cn, formatter } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

const CurrencyItem = ({value, percentage, isDiscount}: {
    value?: string | number
    percentage?: string | number,
    isDiscount?: boolean
}) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if(!isMounted) return null
  return (
    <div>
    {
        percentage && (
            <div className={cn(
                `font-semibold text-small-regular`,
                // percentage ? "line-through text-gray-500" : ""
            )}>
                {formatter.format(Number(calculateDiscountedPrice(value as number, percentage as number, isDiscount)))}
            </div>
        )
    }
    <div className={cn(
        `font-semibold`,
        percentage ? "line-through !text-brandblu text-tiny-medium sm:text-small-regular" : ""
    )}>
        {formatter.format(Number(value))}
    </div>
    </div>
  )
}

export default CurrencyItem