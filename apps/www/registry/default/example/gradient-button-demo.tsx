import Image from 'next/image'
import React from 'react'
import GradientButton from '../ui/gradient-button'

const page = () => {
  return (
    <div className='flex justify-center items-center'>
       <GradientButton
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <Image src="/glassui.png" alt="logo" width={16} height={16} />
        <span>Glass UI</span>
      </GradientButton>
    </div>
  )
}

export default page