import { useIntervalStore } from '../store/intervals'
import { getFormatedShortTime } from '../utils/commonHelper'
import { Grid } from './Grid'
import { ModalDelete } from './ModalDelete'

interface Props {
  handleStart: () => void
}

export const GridPage: React.FC<Props> = ({ handleStart }) => {
  const currentItemId = useIntervalStore((store) => store.currentItemId)
  const currentTime = useIntervalStore((store) => store.currentTime)
  const updateLastItervalValue = useIntervalStore((store) => store.updateLastItervalValue)
  const handleStartChron = (): void => {
    updateLastItervalValue(getFormatedShortTime(currentTime))
    handleStart()
  }

  return (
    <>
    {' '}
    <div className="flex-grow overflow-y-auto z-20">
      <Grid />
    </div>
    {currentItemId !== null && (<ModalDelete/>)}
    <div>
      <button
        className="bg-pink-400 shadow-2xl text-white font-bold m-2 w-2/3 rounded-lg p-2"
        onClick={handleStartChron}
      >
        Iniciar
      </button>
    </div>
  </>
  )
}
