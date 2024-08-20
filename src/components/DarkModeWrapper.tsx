'use client'

import useDarkMode from '@/hooks/useDarkMode'
import useLoading from '@/hooks/useLoading'
import { Loading } from '@/utils/Loading'

import { FC, ReactNode, useEffect, useState } from 'react'

import { motion } from 'framer-motion'

interface DarkModeWrapperProps {
  children: ReactNode
}

export const DarkModeWrapper: FC<DarkModeWrapperProps> = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()
  const { loading, finishLoading } = useLoading()
  const [isInitialRender, setIsInitialRender] = useState(true)

  // Spreading speed for light/dark mode transition
  const transitionDuration = 0.5

  const handleAnimationComplete = () => {
    if (isInitialRender) {
      setIsInitialRender(false)
    }
  }

  useEffect(() => {
    if (theme === 'dark' || theme === 'light') {
      finishLoading()
    }
  }, [theme, finishLoading])

  if (loading) {
    return <Loading />
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div
        className={
          'right-0 top-0 fixed bg-white mix-blend-difference w-screen origin-top-right'
        }
        style={{
          zIndex: -1,
          borderBottomLeftRadius: '100%',
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
        className="right-3 top-3 fixed w-10 h-10 mix-blend-difference cursor-pointer z-50"
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </motion.div>
    </motion.div>
  )
}
