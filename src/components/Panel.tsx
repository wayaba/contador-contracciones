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
    <section className="min-section-screen mx-auto mt-2 w-80 bg-gradient-to-b from-red-200 via-pink-200 to-white rounded-lg justify-center text-center flex flex-col">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg-grid bg-no-repeat z-10 opacity-50 rounded-full  h-64 w-64 m-auto"></div>

      {isChronPage
        ? <ChronPage handleStop={handleStop} />
        : <GridPage handleStart={handleStart}/>
      }

    </section>
  )
}
