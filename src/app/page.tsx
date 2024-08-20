'use client'

import { DarkModeWrapper } from '@/components/DarkModeWrapper'
import { LightEffect } from '@/components/LightEffect'
import { Links } from '@/components/Links'

import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "start start"]
  });
  
  return (
    <DarkModeWrapper>
      <LightEffect count={50} />

      <motion.h1
        ref={ref}
        className="font-bold flex justify-center items-center h-screen text-transparent"
        style={{ 
          background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
          backgroundClip: 'text',
          fontSize: '6vw',
          opacity: scrollYProgress
         }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
      >
        Moncef Hassani
      </motion.h1>


      <Links />
      <div style={{ height: '200vh' }} />
    </DarkModeWrapper>
  )
}
