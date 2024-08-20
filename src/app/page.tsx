'use client'

import { DarkModeWrapper } from '@/components/DarkModeWrapper'
import { LightEffect } from '@/components/LightEffect'

export default function Home() {
  return (
    <DarkModeWrapper>
      <h1 className="mix-blend-difference">Home</h1>
      <h2 className="mix-blend-difference">Welcome to my porfolio !</h2>
      <LightEffect count={50} />
      // Add a bunch of padding to test scrolling
      <div style={{ height: '200vh' }} />
    </DarkModeWrapper>
  )
}
