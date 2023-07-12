import { useState, useEffect, useRef } from 'react'
import { ChronPage } from './ChronPage'
import { GridPage } from './GridPage'
import { useIntervalStore } from '../store/intervals'

export const Panel: React.FC = () => {
  const fetchAllItems = useIntervalStore((store) => store.fetchAllItems)
  // const [items, setItems] = useState([] as ListOfIntervals)
  const [isChronPage, setIsChronePage] = useState(false)
  const items = useIntervalStore((store) => store.items)
  const currentTime = useIntervalStore((store) => store.currentTime)
  const setCurrentTime = useIntervalStore((store) => store.setCurrentTime)
  const intervalTimer = useIntervalStore((store) => store.intervalTimer)
  const setIntervalTimer = useIntervalStore((store) => store.setIntervalTimer)
  const currentTimeRef = useRef(currentTime)

  const setTimer = (): void => {
    console.log('items', items)
    if (items.length > 0) {
      currentTimeRef.current = items[0].timeNumber
      setCurrentTime(items[0].timeNumber)
      const idInterval = setInterval(() => {
        const currentValue = currentTimeRef.current
        const newValue = currentValue + 1
        setCurrentTime(newValue)
        currentTimeRef.current = newValue
        if (newValue > 3600) clearInterval(intervalTimer)
      }, 1000)
      setIntervalTimer(idInterval)
    }
  }

  useEffect(() => {
    fetchAllItems()
  }, [])

  const handleStart = (): void => {
    setIsChronePage(true)
    clearInterval(intervalTimer)
  }
  const handleStop = (): void => {
    setIsChronePage(false)
    setTimer()
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
