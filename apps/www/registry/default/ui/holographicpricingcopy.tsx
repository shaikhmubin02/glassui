import React from 'react'
import { CheckIcon } from 'lucide-react'
import { LampComponent } from './lamp'
import { CardBody, CardContainer, CardItem } from './3d-card'

const HolographicPricing = () => {
  return (
    <section className="bg-neutral-950">
      <LampComponent />
      <div className="flex items-center justify-center -mt-72 mb-10">
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
          {/* Hobby Plan */}
          <CardContainer className="inter-var">
            <CardBody className="relative group/card bg-black border-white/[0.2] w-[280px] h-auto rounded-xl p-4 border">
              <CardItem translateZ="50" className="text-lg font-bold text-white">
                Hobby
                <h2 className="text-4xl">$0</h2>
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-300 text-xs max-w-sm mt-2">
                Get a glimpse of what our software is capable of.
                <ul className="my-3 flex flex-col gap-1">
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />3 Free automations
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />100 tasks per month
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem translateZ={20} as="button" className="px-3 py-1 rounded-lg text-[10px] font-normal text-white">
                  Try now →
                </CardItem>
                <CardItem translateZ={20} as="button" className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">
                  Get Started
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Pro Plan */}
          <CardContainer className="inter-var">
            <CardBody className="relative group/card bg-black border-[#E2CBFF] w-[280px] h-auto rounded-xl p-4 border">
              <CardItem translateZ="50" className="text-lg font-bold text-white">
                Pro
                <h2 className="text-4xl">$29</h2>
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-300 text-xs max-w-sm mt-2">
                Unlock advanced features for power users.
                <ul className="my-3 flex flex-col gap-1">
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />Unlimited automations
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />1000 tasks per month
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />Multi-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem translateZ={20} as="button" className="px-3 py-1 rounded-lg text-[10px] font-normal text-white">
                  Learn more →
                </CardItem>
                <CardItem translateZ={20} as="button" className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">
                  Upgrade
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Unlimited Plan */}
          <CardContainer className="inter-var">
            <CardBody className="relative group/card bg-black border-white/[0.2] w-[280px] h-auto rounded-xl p-4 border">
              <CardItem translateZ="50" className="text-lg font-bold text-white">
                Unlimited
                <h2 className="text-4xl">$99</h2>
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-300 text-xs max-w-sm mt-2">
                For businesses that need unlimited power.
                <ul className="my-3 flex flex-col gap-1">
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />Unlimited everything
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />Priority support
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckIcon className="text-white w-3 h-3" />Custom integrations
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem translateZ={20} as="button" className="px-3 py-1 rounded-lg text-[10px] font-normal text-white">
                  Contact sales →
                </CardItem>
                <CardItem translateZ={20} as="button" className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">
                  Get Started
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  )
}

export default HolographicPricing