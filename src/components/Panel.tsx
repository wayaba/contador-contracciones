import { useState } from 'react'
import { ChronPage } from './ChronPage'
import { GridPage } from './GridPage'
import { useIntervalStore } from '../store/intervals'

export const Panel: React.FC = () => {
  const [isChronPage, setIsChronePage] = useState(false)
  const intervalTimer = useIntervalStore((store) => store.intervalTimer)

  const handleStart = (): void => {
    setIsChronePage(true)
    clearInterval(intervalTimer)
  }
  const handleStop = (): void => {
    setIsChronePage(false)
  }

  return (
    <section className="h-[80vh] mx-auto w-[50vh] bg-gradient-to-b from-red-200 via-pink-200  to-white rounded-lg justify-center text-center flex flex-col">
      {isChronPage
        ? (
        <ChronPage
          handleStop={handleStop}
        />
          )
        : (
        <GridPage handleStart={handleStart}
        />
          )}
    </section>
  )
}
