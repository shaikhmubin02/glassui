"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  { name: "Essential", price: "99", items: ["Core Features", "24/7 Support", "1 User"] },
  { name: "Professional", price: "199", items: ["Advanced Features", "Priority Support", "5 Users", "Analytics"] },
  { name: "Enterprise", price: "399", items: ["All Features", "Dedicated Support", "Unlimited Users", "Advanced Analytics", "Custom Integration"] },
]

const BokehBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  )
}

const PricingCard = ({ tier, index }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      className="premium-glass p-8 flex flex-col relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 pointer-events-none" />
      <h2 className="text-2xl font-bold text-white mb-2 font-serif relative z-10">{tier.name}</h2>
      <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent font-serif relative z-10">
        ${tier.price}
        <span className="text-lg font-normal text-white/75 font-sans">/month</span>
      </div>
      <ul className="text-white/90 space-y-4 mb-8 flex-grow relative z-10">
        {tier.items.map((item, i) => (
          <motion.li
            key={i}
            className="flex items-center text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
          >
            <Check className="w-5 h-5 mr-2 text-yellow-400" />
            {item}
          </motion.li>
        ))}
      </ul>
      <motion.button
        className="w-full py-3 px-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-bold rounded-md transition-all duration-300 premium-button relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose {tier.name}
      </motion.button>
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  )
}

export default function PremiumGlassPricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 flex items-center justify-center font-sans relative overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400&display=swap');

        .premium-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .premium-glass::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%);
          transform: rotate(30deg);
          pointer-events: none;
        }

        .premium-button {
          position: relative;
          overflow: hidden;
        }

        .premium-button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0)
          );
          transform: rotate(-30deg);
          animation: shimmer 3s infinite linear;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(-30deg);
          }
          100% {
            transform: translateX(100%) rotate(-30deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
      <BokehBackground />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {features.map((tier, index) => (
          <PricingCard key={tier.name} tier={tier} index={index} />
        ))}
      </div>
    </div>
  )
}