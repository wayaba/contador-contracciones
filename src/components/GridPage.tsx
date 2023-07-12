import { useIntervalStore } from '../store/intervals'
import { type ListOfIntervals } from '../types'
import { Grid } from './Grid'
import { ModalDelete } from './ModalDelete'

interface Props {
  items: ListOfIntervals
  currentTime: number
  handleStart: () => void
}
export const GridPage: React.FC<Props> = ({ items, currentTime, handleStart }) => {
  const currentItemId = useIntervalStore((store) => store.currentItemId)

  return (
    <>
    {' '}
    <div className="flex-grow overflow-y-auto">
      <Grid intervals={items} currentTime={currentTime} />
    </div>
    {currentItemId !== null && (<ModalDelete/>)}
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
