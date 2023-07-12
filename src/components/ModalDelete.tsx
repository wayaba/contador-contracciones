import { useIntervalStore } from '../store/intervals'

export const ModalDelete: React.FC = () => {
  const items = useIntervalStore((store) => store.items)
  const currentItemId = useIntervalStore((store) => store.currentItemId)
  const deleteItem = useIntervalStore((store) => store.deleteItem)
  const intervalTimer = useIntervalStore((store) => store.intervalTimer)
  const reset = useIntervalStore((store) => store.reset)

  const handleConfirmDelete = (): void => {
    if (currentItemId != null) {
      deleteItem(currentItemId)
      if (items.length === 0) clearInterval(intervalTimer)
    }
    reset()
  }
  const handleCancelDelete = (): void => {
    reset()
  }

  return (
    <div className="fixed inset-5 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className=" flex flex-col">
        <div className="gird grid-col-1 items-center text-gray-200 text-center bg-slate-800 p-2 rounded-lg m-6">
          <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-lg m-2">
           🚨 !Elminar! 🚨
          </h1>

          <small className="lg:text-2xl md:text-2xl sm:text-2xl text-lg m-4 ">
            ¿Seguro queres elminar el intervalo?
          </small>
          <div className="grid grid-cols-2 gap-2 m-2">
          <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleConfirmDelete}
              >
                Si
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                onClick={handleCancelDelete}
              >
                No
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
