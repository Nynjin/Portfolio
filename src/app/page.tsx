'use client'

import { DarkModeWrapper } from '@/components/DarkModeWrapper'
import { LightEffect } from '@/components/LightEffect'
import { Links } from '@/components/Links'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <DarkModeWrapper>
      <motion.h1
        className="text-4xl font-bold "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Hello, World!
      </motion.h1>
      <LightEffect count={50} />

      <Links />
      // Add a bunch of padding to test scrolling
      <div style={{ height: '200vh' }} />
    </DarkModeWrapper>
  )
}
