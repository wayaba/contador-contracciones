import { useEffect, useState, useRef } from 'react'

interface ChronometerReturn {
  time: number
  run: () => void
  stop: () => void
}

export function useChronometer ({ startTime = 0 } = {}): ChronometerReturn {
  const [time, setTime] = useState(startTime)
  const [isRunning, setIsRunning] = useState(false)
  const currentTimeRef = useRef(time)

  useEffect(() => {
    let interval: number = 0
    if (isRunning) {
      interval = setInterval(() => {
        const currentValue = currentTimeRef.current
        const newValue = currentValue + 1
        setTime(newValue)
        currentTimeRef.current = newValue
        if (newValue > 3600) clearInterval(interval)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning])

  const run = (): void => {
    setIsRunning(true)
  }
  const stop = (): void => {
    setTime(0)
    setIsRunning(false)
    currentTimeRef.current = 0
  }

  return { time, run, stop }
}
