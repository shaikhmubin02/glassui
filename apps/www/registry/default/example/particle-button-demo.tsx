
import React from 'react'
import ParticleButton from '../ui/particle-button'
import { Card } from '@/components/ui/card'

const page = () => {
  return (
    <Card className='relative w-full h-[300px] shadow-md dark:bg-gray-950 dark:text-white'>
      <div className='flex justify-center items-center h-full'>
        <ParticleButton>
          Glass UI
        </ParticleButton>
      </div>
    </Card>
  )
}

export default page