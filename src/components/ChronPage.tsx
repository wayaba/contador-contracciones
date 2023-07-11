interface Props {
  timeToShow: string
  handleStop: () => void
}

export const ChronPage: React.FC<Props> = ({ timeToShow, handleStop }) => {
  return (
        <>
        <div className="flex-grow relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gray-100 z-10 flex items-center justify-center">
            <div className="text-center text-purple-400 text-xl">{timeToShow}</div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gray-200 animate-pulse transform hover:scale-100 transition-transform duration-500"></div>
        </div>
        <div>
          <button
            className="bg-purple-400 shadow-2xl text-white font-bold m-2 w-2/3 rounded-lg p-2"
            onClick={handleStop}
          >
            Parar
          </button>
        </div>
      </>
  )
}
