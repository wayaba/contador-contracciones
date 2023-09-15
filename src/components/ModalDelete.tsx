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
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className=" flex flex-col items-center">
        <div className="w-2/3 items-center text-gray-200 text-center bg-slate-800 p-2 rounded-lg ">
        <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            🚨 !Elminar! 🚨
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            ¿Seguro queres elminar el intervalo?
            </p>
          </div>

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
