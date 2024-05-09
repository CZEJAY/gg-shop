import React from 'react'
import Image from 'next/image'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react"
import { Image as ImageType } from '@/types'
import GalleryTab from './GalleryTab'
type Props = {
    images: ImageType[]
}

const Gallery = ({
    images
}: Props) => {
  return (
    <TabGroup as="div" className={`flex flex-col-reverse`}>
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList className={`grid grid-cols-4 gap-6`}>
                {
                    images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))
                }
            </TabList>
        </div>
        <TabPanels className={`w-full`}>
            {
                images.map((image) => (
                    <TabPanel key={image.id} className={`aspect-square relative h-full w-full sm:h-80  sm:rounded-lg overflow-hidden `}>
                        <Image 
                            fill
                            src={image.url}
                            alt='Image'
                            className='object-scale-down'
                        />
                    </TabPanel>
                ))
            }
        </TabPanels>
    </TabGroup>
  )
}

export default Gallery