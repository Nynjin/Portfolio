'use client'

import { DarkModeWrapper } from '@/components/DarkModeWrapper'

export default function Home() {
  return (
    <DarkModeWrapper>
      <h1 className="mix-blend-difference text-2xl">Home</h1>
      <h2 className="mix-blend-difference">Welcome to my porfolio !</h2>
    </DarkModeWrapper>
  )
}
