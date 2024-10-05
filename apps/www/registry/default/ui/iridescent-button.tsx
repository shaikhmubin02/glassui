import React from 'react'
import { motion } from 'framer-motion'
import styles from './iridescent-button.module.css'

const IridescentButton: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <motion.button
      className={`${styles.iridescentButton} w-full py-2 px-6 text-gray-900 font-bold rounded-md transition-all duration-500 relative z-10`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

export default IridescentButton