import ShinyButton from '@/components/testing'
import HoverBorderGradient from '@/components/testing'
import Testing from '@/components/testing'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <ShinyButton>
            <span>Glass UI</span>
        </ShinyButton>
    </div>
  )
}

export default page