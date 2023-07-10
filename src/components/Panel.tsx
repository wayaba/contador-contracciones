import { useState } from 'react'
import { Intervals } from './Interval'
import { useChronometer } from '../hooks/useChronometer'

const oldItems = [
  {
    id: 1,
    time: '19:56',
    date: '07/07/23',
    interval: '00:18',
    duration: '00:10'
  },
  {
    id: 2,
    time: '19:55',
    date: '07/07/23',
    interval: '00:19',
    duration: '00:12'
  },
  {
    id: 3,
    time: '19:54',
    date: '07/07/23',
    interval: '00:15',
    duration: '00:20'
  }
]

export const Panel: React.FC = () => {
  const [items] = useState(oldItems)
  const [isChronPage, setIsChronePage] = useState(false)
  const { run, stop, getFormatedTime } = useChronometer()

  const handleStart = (): void => {
    setIsChronePage(true)
    run()
  }
  const handleStop = (): void => {
    setIsChronePage(false)
    stop()
  }
  return (
    <section className="h-[80vh] bg-gradient-to-b from-red-200 via-pink-200  to-white m-4 rounded-lg justify-center text-center flex flex-col">
      {isChronPage
        ? (
        <>
          <div className="flex justify-center items-center m-6">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gray-100 z-10 flex items-center justify-center">
                <div className='text-center'>{getFormatedTime()}</div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gray-200 animate-pulse transform hover:scale-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div>
            <button
              className="bg-purple-400 shadow-2xl text-white font-bold m-2 w-2/3 rounded-lg p-2 mt-10"
              onClick={handleStop}
            >
              Parar
            </button>
          </div>
        </>
          )
        : (
        <>
          {' '}
          <div className="flex-grow">
            <Intervals intervals={items} />
          </div>
          <div>
            <button
              className="bg-pink-400 shadow-2xl text-white font-bold m-2 w-2/3 rounded-lg p-2"
              onClick={handleStart}
            >
              Iniciar
            </button>
          </div>
        </>
          )}
    </section>
  )
}
