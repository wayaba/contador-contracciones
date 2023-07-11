import { type ListOfIntervals } from '../types'
import { getFormatedShortTime } from '../utils/commonHelper'

interface Props {
  intervals: ListOfIntervals
  currentTime: number
}

export const Grid: React.FC<Props> = ({ intervals, currentTime }) => {
  const intervalsCopy = [...intervals]
  const lastInterval = intervalsCopy.shift()
  return (
    <section>
      <ul className="gap-3">
        {lastInterval != null && (

          <li
            key={lastInterval.id}
            className="bg-white m-2 rounded-md p-2 grid grid-cols-3 items-center"
          >
            <div className="font-bold text-left">{lastInterval.duration}</div>
            <div className="font-bold text-center">{getFormatedShortTime(currentTime)}</div>
            <div className="font-bold text-right">{lastInterval.time}</div>
            <div className="h-1 w-3/4 bg-pink-400 rounded-2xl"></div>
            <div className="h-1 w-3/4 bg-green-500 rounded-2xl m-auto"></div>
            <div className="text-xs text-right">{lastInterval.date}</div>
          </li>
        )}
        {intervalsCopy.map((item) => (
          <li
            key={item.id}
            className="bg-white m-2 rounded-md p-2 grid grid-cols-3 items-center"
          >
            <div className="font-bold text-left">{item.duration}</div>
            <div className="font-bold text-center">{item.interval}</div>
            <div className="font-bold text-right">{item.time}</div>
            <div className="h-1 w-3/4 bg-pink-400 rounded-2xl"></div>
            <div className="h-1 w-3/4 bg-green-500 rounded-2xl m-auto"></div>
            <div className="text-xs text-right">{item.date}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
