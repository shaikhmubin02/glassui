'use client'

import NetworkBackground from '@/components/testing'
import React from 'react'

const page = () => {
  return (
    <div className='relative min-h-screen'>
      <NetworkBackground className="z-0" />
      <div className='relative z-10 flex flex-col justify-center items-center min-h-screen text-black dark:text-white'>
        <h1 className="text-4xl font-bold mb-4">Hello</h1>
        <p className="text-lg">gneiorg geig nero rgongo</p>
      </div>
    </div>
  )
}

export default page