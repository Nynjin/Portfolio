import { useState } from 'react'

const useLoading = () => {
  const [loading, setLoading] = useState(true)

  const finishLoading = () => {
    setLoading(false)
  }

  return { loading, finishLoading }
}

export default useLoading
