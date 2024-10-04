import GlassyBackground from '@/components/testing'
import React from 'react'

const Page = () => {
  return (
    <GlassyBackground>
      <div className="relative z-10 flex min-h-screen items-center justify-center text-black dark:text-white">
        <div className="rounded-lg bg-white bg-opacity-20 p-8 backdrop-blur-md">
          <h1 className="flex items-center justify-center mb-8 text-2xl font-semibold">Glassy Background</h1>
          <div className="space-y-4">
            <p className="italic">"In the game of glassy UIs, you design or you crash."</p>
            <p className="italic">"A Lannister always pays his UI debts."</p>
            <p className="italic">"Winter is coming... and so is our new transparent interface."</p>
          </div>
        </div>
      </div>
    </GlassyBackground>
  )
}

export default Page