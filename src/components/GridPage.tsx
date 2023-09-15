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
    <header className="m-2 flex flex-row justify-between text-gray-500 font-bold">
      <div className='ml-2'>Duración</div>
      <div className=''>Intervalo</div>
      <div className='mr-2'>Tiempo</div>
    </header>
    <div className=" relative flex-grow overflow-y-auto z-20">
      <Grid />
    </div>
    {currentItemId !== null && (<ModalDelete/>)}
    <footer className='align-bottom z-40'>
      <button
        className="bg-pink-400 shadow-2xl text-white font-bold m-2 w-2/3 rounded-lg p-2"
        onClick={handleStartChron}
      >
        Iniciar
      </button>
    </footer>
  </>
  )
}
