import HoverBorderGradient from '@/components/testing'
import Testing from '@/components/testing'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
       <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <Image src="/glassui.png" alt="logo" width={16} height={16} />
        <span>Glass UI</span>
      </HoverBorderGradient>
    </div>
  )
}

export default page