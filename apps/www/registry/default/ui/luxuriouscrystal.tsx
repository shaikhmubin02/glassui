"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  { name: "Opulent", price: "299", items: ["Exclusive Features", "24/7 Concierge", "1 VIP User"] },
  { name: "Majestic", price: "599", items: ["Premium Features", "Priority Concierge", "5 VIP Users", "Advanced Insights"] },
  { name: "Imperial", price: "999", items: ["All Luxury Features", "Dedicated Concierge", "Unlimited VIP Users", "Bespoke Analytics", "Custom Integration"] },
]

const OrganicBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
        <path d="M0,1000 C200,800 350,50 500,100 C650,150 700,0 1000,0 L1000,1000 Z" fill="url(#grad)" />
      </svg>
    </div>
  )
}

const PricingCard = ({ tier, index }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  return (
    <motion.div
      ref={ref}
      className="crystal-glass p-8 flex flex-col relative overflow-hidden"
      initial="hidden"
      animate={controls}
      style={{ y }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 pointer-events-none crystal-surface" />
      <h2 className="text-3xl font-bold mb-2 font-serif relative z-10 gold-foil">{tier.name}</h2>
      <div className="text-6xl font-bold mb-6 font-serif relative z-10 platinum-foil">
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
            <Check className="w-5 h-5 mr-2 text-amber-400" />
            {item}
          </motion.li>
        ))}
      </ul>
      <motion.button
        className="w-full py-4 px-6 text-gray-900 font-bold rounded-md transition-all duration-500 iridescent-button relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose {tier.name}
      </motion.button>
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </motion.div>
  )
}

export default function LuxuriousCrystalPricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 flex items-center justify-center font-sans relative overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cormorant:wght@300;400;700&display=swap');

        .crystal-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .crystal-surface {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 25%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            rgba(255, 255, 255, 0.15) 100%
          );
        }

        .gold-foil {
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
        }

        .platinum-foil {
          background: linear-gradient(to right, #e5e5e5, #ffffff, #e5e5e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
        }

        .iridescent-button {
          background: linear-gradient(
            90deg,
            rgba(255, 0, 0, 0.8) 0%,
            rgba(255, 154, 0, 0.8) 10%,
            rgba(208, 222, 33, 0.8) 20%,
            rgba(79, 220, 74, 0.8) 30%,
            rgba(63, 218, 216, 0.8) 40%,
            rgba(47, 201, 226, 0.8) 50%,
            rgba(28, 127, 238, 0.8) 60%,
            rgba(95, 21, 242, 0.8) 70%,
            rgba(186, 12, 248, 0.8) 80%,
            rgba(251, 7, 217, 0.8) 90%,
            rgba(255, 0, 0, 0.8) 100%
          );
          background-size: 200% 100%;
          animation: iridescent 6s linear infinite;
        }

        @keyframes iridescent {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .iridescent-button::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: inherit;
          filter: blur(10px);
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease-in-out;
        }

        .iridescent-button:hover::before {
          opacity: 1;
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
      <OrganicBackground />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {features.map((tier, index) => (
          <PricingCard key={tier.name} tier={tier} index={index} />
        ))}
      </div>
    </div>
  )
}