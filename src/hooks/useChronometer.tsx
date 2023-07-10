import { useEffect, useState } from 'react'

interface ChronometerReturn {
  time: number
  run: () => void
  stop: () => void
  getFormatedTime: () => string
}

export function useChronometer (): ChronometerReturn {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: number = 0
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }

    return () => {
      clearInterval(interval ?? undefined)
    }
  }, [isRunning])

  const run = (): void => {
    setIsRunning(true)
  }
  const stop = (): void => {
    setTime(0)
    setIsRunning(false)
  }

  const getTwoDigits = (value: number): string => {
    return value.toString().padStart(2, '0')
  }

  const getFormatedTime = (): string => {
    const hours: number = Math.floor(time / 3600)
    const minutes: number = Math.floor((time % 3600) / 60)
    const seconds: number = time % 60

    return `${getTwoDigits(hours)}:${getTwoDigits(minutes)}:${getTwoDigits(seconds)}`
  }

  return { time, run, stop, getFormatedTime }
}
