'use client'

import useDarkMode from '@/hooks/useDarkMode'
import { motion } from 'framer-motion'
import React from 'react'

export default function Home() {
  const [theme, toggleTheme] = useDarkMode()
  console.log(theme)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="bg-white text-black dark:bg-black dark:text-white"
        onClick={toggleTheme}
        initial={{ scale: 1 }}
        whileHover={{ scale: 3 }}
      >
        Toggle Theme
      </motion.div>

      <p className="mix-blend-difference text-white">Hello World</p>
    </motion.div>
  )
}
