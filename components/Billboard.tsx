
import { Billboard as BillboardType } from '@/types'
import React from 'react'

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps>= ({
    data
}) => {
  return (
    <div className='p-6 rounded-xl overflow-hidden flex flex-col md:flex-row items-start w-full'>
        <div 
        style={{backgroundImage: `url(${data.imageUrl})`}} 
         className="rounded-xl relative h-80 w-full overflow-hidden ">
            <div className="h-full w-full flex flex-col items-center justify-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                    {data.label}
                </div>
            </div>
        </div>
        {/* <div 
         className="rounded-xl relative h-80 overflow-hidden">
            <div className="h-full w-full flex flex-col items-center justify-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                    {data.label}
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Billboard