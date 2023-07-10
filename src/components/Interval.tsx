import { type ListOfIntervals } from '../types'

interface Props {
  intervals: ListOfIntervals
}

export const Intervals: React.FC<Props> = ({ intervals }) => {
  return (
    <section>
      <ul className="gap-3">
        {intervals.map((item) => (
          <li
            key={item.id}
            className="bg-white m-2 rounded-md p-2 grid grid-cols-3 items-center"
          >
            <div className='font-bold text-left'>{item.duration}</div>
            <div className='font-bold text-center'>{item.interval}</div>
            <div className='font-bold text-right'>{item.time}</div>
            <div className="h-1 w-3/4 bg-pink-400 rounded-2xl"></div>
            <div className="h-1 w-3/4 bg-green-500 rounded-2xl m-auto"></div>
            <div className='text-xs text-right'>{item.date}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
