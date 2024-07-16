'use client'

import useDarkMode from '@/hooks/useDarkMode'

import { FC, ReactNode, useState } from 'react'

import { motion } from 'framer-motion'

interface DarkModeWrapperProps {
  children: ReactNode
}

export const DarkModeWrapper: FC<DarkModeWrapperProps> = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()

  // Spreading speed for light/dark mode transition
  const transitionDuration = 0.5

  // State to track the initial render
  const [isInitialRender, setIsInitialRender] = useState(true)

  const handleAnimationComplete = () => {
    if (isInitialRender) {
      setIsInitialRender(false)
    }
  }

  if (theme === '') {
    return <div>Loading...</div>
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div
        className={
          'right-0 bottom-0 bg-white text-black fixed mix-blend-difference w-screen origin-bottom-right'
        }
        style={{
          zIndex: -1,
          borderTopLeftRadius: '100%',
          aspectRatio: '1/1',
        }}
        initial={{ scale: theme === 'dark' ? 0 : 1.75 }}
        animate={{
          scale: theme === 'dark' ? 0 : 1.75,
          transition: { duration: isInitialRender ? 0 : transitionDuration },
        }}
        onAnimationComplete={handleAnimationComplete}
      />

      <motion.img
        src={theme === 'light' ? '/sun.png' : '/moon.png'}
        alt="Toggle Theme"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 1,
          rotate: 270,
          transition: { duration: 0.4 },
          borderRadius: '100%',
        }}
        onClick={toggleTheme}
        className="right-3 bottom-3 fixed w-12 h-12 mix-blend-difference cursor-pointer"
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </motion.div>
    </motion.div>
  )
}
