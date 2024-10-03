'use client'

import { Card } from '@/components/ui/card'
import NetworkBackground from '@/registry/default/ui/network-background'
import React from 'react'

const NetworkBackgroundDemo = () => {
  return (
    <Card className='relative w-full shadow-md'>
      <div className='relative w-full h-[400px]'>
        <NetworkBackground className="z-0" />
        <div className='relative z-10 flex flex-col justify-center items-center h-full text-black dark:text-white'>
          <h1 className="text-4xl font-bold mb-4 text-gradient from-blue-500 to-purple-500">Glass UI</h1>
          <div className="text-center max-w-md">
            <p className="mb-2">"I am the one who designs."</p>
            <p className="mb-2">"You're darn right."</p>
            <p className="italic text-sm">- Heisenberg, Engineer</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default NetworkBackgroundDemo