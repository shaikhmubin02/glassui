import React from 'react'
import IridescentButton from '../ui/iridescent-button'
import { Card } from '@/components/ui/card'

const IridescentButtonDemo = () => {
  return (
    <Card className="relative w-full h-[300px] shadow-md dark:bg-gray-950 dark:text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <IridescentButton>
            <span>Glass UI</span>
          </IridescentButton>
        </div>
      </div>
    </Card>
  )
}

export default IridescentButtonDemo