import React from 'react'
import { CheckIcon } from 'lucide-react'
import { CardBody, CardContainer, CardItem } from '@/registry/default/ui/3d-card'
import { LampComponent } from '@/registry/default/ui/lamp'

const HolographicPricing = () => {
  return (
    <section className="bg-neutral-950">
      <LampComponent />
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72 mb-10">
        <CardContainer className="inter-var mb-8">
          <CardBody className="relative group/card bg-black border-white/[0.2] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Hobby
              <h2 className="text-6xl">$0</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-300 text-sm max-w-sm mt-2"
            >
              Get a glimpse of what our software is capable of. Just a heads
              up {"you'll"} never leave us after this!
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />3 Free automations
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />
                  100 tasks per month
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />
                  Two-step Actions
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                Get Started Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        
        <CardContainer className="inter-var mb-8">
          <CardBody className="relative group/card bg-black border-[#E2CBFF] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Pro Plan
              <h2 className="text-6xl">$29</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-300 text-sm max-w-sm mt-2"
            >
              Get a glimpse of what our software is capable of. Just a heads
              up {"you'll"} never leave us after this!
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />3 Free automations
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />
                  100 tasks per month
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />
                  Two-step Actions
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                Get Started Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        
        <CardContainer className="inter-var mb-8">
          <CardBody className="relative group/card bg-black border-white/[0.2] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Unlimited
              <h2 className="text-6xl">$99</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-300 text-sm max-w-sm mt-2"
            >
              Get a glimpse of what our software is capable of. Just a heads
              up {"you'll"} never leave us after this!
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />3 Free automations
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />
                  100 tasks per month
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-white" />
                  Two-step Actions
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                Get Started Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  )
}

export default HolographicPricing