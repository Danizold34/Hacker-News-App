import {useEffect, useState} from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Record<string, number | undefined>>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.screen.width,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      return window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}
