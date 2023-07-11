import { type ListOfIntervals } from '../types'
import { getFormatedShortTime } from '../utils/commonHelper'
import { GridRow } from './GridRow'

interface Props {
  intervals: ListOfIntervals
  currentTime: number
}

export const Grid: React.FC<Props> = ({ intervals, currentTime }) => {
  const intervalsCopy = [...intervals]
  const lastInterval = intervalsCopy.shift()
  return (
    <section>
      <ul className="gap-3">
        {lastInterval != null && (
          <GridRow interval={lastInterval} currentInterval={getFormatedShortTime(currentTime)} />
        )}
        {intervalsCopy.map((item) => (
          <GridRow key={item.id} interval={item} currentInterval={item.interval} />
        ))}
      </ul>
    </section>
  )
}
