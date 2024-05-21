'use client'

import { useState, useEffect } from 'react'

const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useState('light') // Default to 'light' initially

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme)
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
  }, []) // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
      document.body.classList.remove(theme === 'light' ? 'dark' : 'light')
      document.body.classList.add(theme)
    }
  }, [theme]) // Runs every time theme changes

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return [theme, toggleTheme]
}

export default useDarkMode
