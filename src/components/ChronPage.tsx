import { useEffect } from 'react'
import { useChronometer } from '../hooks/useChronometer'
import { getFormatedShortTime } from '../utils/commonHelper'
import moment from 'moment'
import { type Interval } from '../types'
import { useIntervalStore } from '../store/intervals'

interface Props {
  handleStop: () => void
}

export const ChronPage: React.FC<Props> = ({ handleStop }) => {
  const { time, run, stop } = useChronometer()
  const setCurrentTime = useIntervalStore((store) => store.setCurrentTime)
  const addItem = useIntervalStore((store) => store.addItem)

  useEffect(() => {
    run()
  }, [])

  const handleStoptChron = (): void => {
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
    setCurrentTime(time)
    addItem(interval)
    handleStop()
  }

  return (
        <>
        <div className="flex-grow relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gray-100 z-10 flex items-center justify-center">
            <div className="text-center text-purple-400 text-xl">{getFormatedShortTime(time)}</div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gray-200 animate-pulse transform hover:scale-100 transition-transform duration-500"></div>
        </div>
        <div>
          <button
            className="bg-purple-400 shadow-2xl text-white font-bold m-2 w-2/3 rounded-lg p-2"
            onClick={handleStoptChron}
          >
            Parar
          </button>
        </div>
      </>
  )
}
