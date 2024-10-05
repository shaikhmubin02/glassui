import React from 'react'
import PremiumGlass from '../ui/premiumglass'
import { Card } from '@/components/ui/card'

const PremiumGlassDemo = () => {
  return (
    <Card className="relative w-full overflow-hidden shadow-md">
      <div className="relative w-full h-[700px]">
        <PremiumGlass />
      </div>
    </Card>
  )
}

export default PremiumGlassDemo