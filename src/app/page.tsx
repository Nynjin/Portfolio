'use client'

import useDarkMode from '@/hooks/useDarkMode'
import React from 'react'

export default function Home() {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    </div>
  )
}
