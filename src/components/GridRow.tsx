import { type Interval } from '../types'

interface Props {
  interval: Interval
  currentInterval: string
}

export const GridRow: React.FC<Props> = ({ interval, currentInterval }) => {
  return (
    <li
            key={interval.id}
            className="bg-white m-2 rounded-md p-2 grid grid-cols-3 items-center"
          >
            <div className="font-bold text-left">{interval.duration}</div>
            <div className="font-bold text-center">{currentInterval}</div>
            <div className="font-bold text-right">{interval.time}</div>
            <div className="h-1 w-3/4 bg-pink-400 rounded-2xl"></div>
            <div className="h-1 w-3/4 bg-green-500 rounded-2xl m-auto"></div>
            <div className="text-xs text-right">{interval.date}</div>
          </li>

  )
}
