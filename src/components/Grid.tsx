import { useEffect, useRef } from 'react'
import { useIntervalStore } from '../store/intervals'
import { getFormatedShortTime } from '../utils/commonHelper'
import { GridRow } from './GridRow'

export const Grid: React.FC = () => {
  const items = useIntervalStore((store) => store.items)
  const currentTime = useIntervalStore((store) => store.currentTime)
  const setCurrentTime = useIntervalStore((store) => store.setCurrentTime)
  const intervalTimer = useIntervalStore((store) => store.intervalTimer)
  const setIntervalTimer = useIntervalStore((store) => store.setIntervalTimer)
  const currentTimeRef = useRef(currentTime)

  const intervalsCopy = [...items]
  const lastInterval = intervalsCopy.length > 0 ? intervalsCopy.shift() : null

  const setTimer = (): void => {
    if (items.length > 0) {
      currentTimeRef.current = items[0].timeNumber
      setCurrentTime(items[0].timeNumber)
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
    setTimer()
    return () => {
      clearInterval(intervalTimer)
    }
  }, [])

  return (
    <section>
      <ul className="gap-3">
        {lastInterval != null && (
          <GridRow interval={lastInterval} currentInterval={getFormatedShortTime(currentTime)} />
        )}
        {intervalsCopy.map((item) => (
          <GridRow key={item.id} interval={item} currentInterval={item.interval} />
        ))}
      </ul>
    </section>
  )
}
