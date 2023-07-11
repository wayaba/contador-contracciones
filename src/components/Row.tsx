import { type Interval } from '../types'
import { getFormatedShortTime } from '../utils/commonHelper'

export const Row: React.FC<Interval> = ({ interval }) => {
  return (
    <li
            key={interval.id}
            className="bg-white m-2 rounded-md p-2 grid grid-cols-3 items-center"
          >
            <div className="font-bold text-left">{props.duration}</div>
            <div className="font-bold text-center">{getFormatedShortTime(props.timeNumber)}</div>
            <div className="font-bold text-right">{props.time}</div>
            <div className="h-1 w-3/4 bg-pink-400 rounded-2xl"></div>
            <div className="h-1 w-3/4 bg-green-500 rounded-2xl m-auto"></div>
            <div className="text-xs text-right">{props.date}</div>
          </li>

  )
}
