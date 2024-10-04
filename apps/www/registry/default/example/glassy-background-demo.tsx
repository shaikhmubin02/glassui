import React from 'react'
import GlassyBackground from '../ui/glassy-background'
import { Card } from '@/components/ui/card'

const GlassyBackgroundDemo = () => {
  return (
    <Card className='relative w-full overflow-hidden shadow-md'>
      <div className='relative w-full h-[400px]'>
        <GlassyBackground>
          <div className="flex h-full items-center justify-center text-black dark:text-white">
            <div className="rounded-lg bg-white bg-opacity-20 p-6 backdrop-blur-md mt-24">
              <h1 className="mb-4 text-xl font-semibold text-center">Glassy Background</h1>
              <div className="space-y-2 text-sm">
                <p className="italic">"In the game of glassy UIs, you design or you crash."</p>
                <p className="italic">"A Lannister always pays his UI debts."</p>
                <p className="italic">"Winter is coming... and so is our new transparent interface."</p>
              </div>
            </div>
          </div>
        </GlassyBackground>
      </div>
    </Card>
  )
}

export default GlassyBackgroundDemo