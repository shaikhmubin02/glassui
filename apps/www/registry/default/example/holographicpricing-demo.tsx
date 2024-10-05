import { Card } from "@/components/ui/card"
import HolographicPricing from "../ui/holographicpricingcopy"

export default function HolographicPricingDemo() {
  return (
    <Card className="relative w-full overflow-hidden shadow-md">
      <div className="relative w-full h-[500px]">
        <HolographicPricing />
      </div>
    </Card>
  )
}