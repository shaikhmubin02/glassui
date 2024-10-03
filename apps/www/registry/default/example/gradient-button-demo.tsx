import Image from 'next/image'
import React from 'react'
import GradientButton from '../ui/gradient-button'
import { Card } from '@/components/ui/card'

const page = () => {
  return (
    <Card className='relative w-full h-[300px] shadow-md dark:bg-gray-950 dark:text-white'>
      <div className='flex justify-center items-center h-full'>
        <GradientButton
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <Image src="/glassui.png" alt="logo" width={16} height={16} />
          <span>Glass UI</span>
        </GradientButton>
      </div>
    </Card>
  )
}

export default page