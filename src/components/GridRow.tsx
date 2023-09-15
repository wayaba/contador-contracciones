import { type Interval } from '../types'
import { useIntervalStore } from '../store/intervals'

interface Props {
  interval: Interval
  currentInterval: string
}

export const GridRow: React.FC<Props> = ({ interval, currentInterval }) => {
  const setCurrentItemId = useIntervalStore((store) => store.setCurrentItemId)
  const currentItemId = useIntervalStore((store) => store.currentItemId)

  const handleLongPress = (id: number): void => {
    setCurrentItemId(id)
  }

  return (
    <li
      key={interval.id}
      className={`bg-white m-2 rounded-md p-2 grid grid-cols-3 items-center
      ${currentItemId === interval.id ? 'opacity-70' : ''}`}
    >

      <div className="flex font-bold text-left gap-2"><img onTouchEnd={() => {
        handleLongPress(interval.id)
      }}
      onMouseDown={() => {
        handleLongPress(interval.id)
      }} className='cursor-pointer' src='./images/remove.svg'/>{interval.duration}</div>
      <div className="font-bold text-center">{currentInterval}</div>
      <div className="font-bold text-right">{interval.time}</div>
      <div className="h-1 w-3/4 bg-pink-400 rounded-2xl"></div>
      <div className="h-1 w-3/4 bg-green-500 rounded-2xl m-auto"></div>
      <div className="text-xs text-right">{interval.date}</div>
    </li>
  )
}
