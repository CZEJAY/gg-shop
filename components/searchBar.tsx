import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className='relative flex items-center'>
        <Search className='absolute text-muted-foreground left-3 cursor-pointer' size={20} />
        <Input placeholder='Iphone 14' className='sm:w-[350px] md:w-[500px] h-12 rounded-2xl pl-10  border-[3px] outline-brandblu focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none ' />
    </div>
  )
}

export default SearchBar