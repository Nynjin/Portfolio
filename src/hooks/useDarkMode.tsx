'use client'

import { useEffect, useState } from 'react'

const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      console.log('savedTheme', savedTheme)
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme)
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
      console.log('initial theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'

      if (typeof window !== 'undefined') {
        console.log('prev theme', prevTheme)
        localStorage.setItem('theme', newTheme)
        console.log('new theme', newTheme)
        document.body.classList.remove(prevTheme)
        document.body.classList.add(newTheme)
      }

      return newTheme
    })
  }

  return [theme, toggleTheme]
}

export default useDarkMode
