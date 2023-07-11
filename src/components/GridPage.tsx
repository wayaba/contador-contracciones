import { type ListOfIntervals } from '../types'
import { Grid } from './Grid'

interface Props {
  items: ListOfIntervals
  currentTime: number
  handleStart: () => void
}
export const GridPage: React.FC<Props> = ({ items, currentTime, handleStart }) => {
  return (
    <>
    {' '}
    <div className="flex-grow overflow-y-auto">
      <Grid intervals={items} currentTime={currentTime} />
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
  )
}
