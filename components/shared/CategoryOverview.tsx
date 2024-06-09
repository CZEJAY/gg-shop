import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Category } from "@/types"
import Image from "next/image"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

interface CategoryOverviewProps {
    data: Category[]
}

const CategoryOverview: React.FC<CategoryOverviewProps> = ({
    data
}) => {
  return (
    <ScrollArea className="w-full lg:w-[200px] h-52 md:h-80 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-heading4-medium text-center leading-none">Categories Overview</h4>
        <div className="flex w-full items-center flex-wrap gap-6">
        {data.map((item, i) => (
            <div key={i} className=" rounded-t-lg p-1 border ">
              <Image src={item?.billboard?.imageUrl} alt="C T" className="rounded-t-lg" width={150} height={110}/>
              <p className="text-center text-small-semibold">{item.name}</p>
            </div>
        ))}
        </div>
      </div>
    </ScrollArea>
  )
}
export default CategoryOverview
