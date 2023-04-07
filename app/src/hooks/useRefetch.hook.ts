import {useEffect} from 'react'

export const useRefetch = (refetchFunction: () => void, interval: number) => {
  useEffect(() => {
    const timeout = setInterval(refetchFunction, interval * 1000)

    return () => {
      clearInterval(timeout)
    }
  }, [refetchFunction, interval])
}
