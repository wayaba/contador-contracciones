import { useState, useEffect, useRef } from 'react'
import { useChronometer } from '../hooks/useChronometer'
import moment from 'moment'
import {
  addInterval,
  getAllIntervals,
  updateLastInterval
} from '../services/intervals'
import { type ListOfIntervals, type Interval } from '../types'
import { getFormatedShortTime } from '../utils/commonHelper'
import { ChronPage } from './ChronPage'
import { GridPage } from './GridPage'

export const Panel: React.FC = () => {
  const [items, setItems] = useState([] as ListOfIntervals)
  const [isChronPage, setIsChronePage] = useState(false)
  const { time, run, stop } = useChronometer()
  const [currentTime, setCurrentTime] = useState(0)
  const [intervalTimer, setIntervalTimer] = useState(0)
  const currentTimeRef = useRef(currentTime)

  const setTimer = ({ intervals }: { intervals: ListOfIntervals }): void => {
    setItems(intervals)
    if (intervals.length > 0) {
      currentTimeRef.current = intervals[0].timeNumber
      setCurrentTime(intervals[0].timeNumber)
      const intervalTimer = setInterval(() => {
        const currentValue = currentTimeRef.current
        const newValue = currentValue + 1
        setCurrentTime(newValue)
        currentTimeRef.current = newValue
        if (newValue > 3600) clearInterval(intervalTimer)
      }, 1000)
      setIntervalTimer(intervalTimer)
    }
  }

  useEffect(() => {
    const intervals = getAllIntervals()
    setTimer({ intervals })

    return () => {
      clearInterval(intervalTimer)
    }
  }, [])

  const handleStart = (): void => {
    updateLastInterval(getFormatedShortTime(currentTime))
      .then((intervals) => {
        setItems(intervals)
      })
      .catch((err) => {
        console.error(err)
      })

    setIsChronePage(true)
    clearInterval(intervalTimer)
    run()
  }
  const handleStop = (): void => {
    setIsChronePage(false)
    stop()
    const now = moment()
    const interval: Interval = {
      id: 0,
      time: now.format('HH:mm'),
      timeNumber: time,
      date: now.format('DD/MM/YY'),
      interval: getFormatedShortTime(time),
      duration: getFormatedShortTime(time)
    }
    addInterval({ interval })
      .then((intervals) => {
        setTimer({ intervals })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <section className="h-[80vh] mx-auto w-[50vh] bg-gradient-to-b from-red-200 via-pink-200  to-white rounded-lg justify-center text-center flex flex-col">
      {isChronPage
        ? (
        <ChronPage
          handleStop={handleStop}
          timeToShow={getFormatedShortTime(time)}
        />
          )
        : (
        <GridPage
          items={items}
          currentTime={currentTime}
          handleStart={handleStart}
        />
          )}
    </section>
  )
}
