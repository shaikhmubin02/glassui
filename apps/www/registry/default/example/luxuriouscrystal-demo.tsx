import React from 'react'
import LuxuriousCrystalPricing from '../ui/luxuriouscrystal'
import { Card } from '@/components/ui/card'

const LuxuriousCrystalDemo = () => {
  return (
    <Card className="relative w-full overflow-hidden shadow-md">
      <div className="relative w-full h-[700px]">
        <LuxuriousCrystalPricing />
      </div>
    </Card>
  )
}

export default LuxuriousCrystalDemo