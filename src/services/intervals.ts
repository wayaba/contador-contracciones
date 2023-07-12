import { type ListOfIntervals, type Interval } from '../types'

export const getAllIntervals = (): ListOfIntervals => {
  let items: ListOfIntervals = []
  const itemsString = localStorage.getItem('intervalos')
  if (itemsString !== null) {
    items = JSON.parse(itemsString)
  }
  return items
}

export const addInterval = async ({ interval }: { interval: Interval }): Promise<ListOfIntervals> => {
  let items = [{ ...interval, id: 1 }]
  const itemsString = localStorage.getItem('intervalos')

  if (itemsString !== null) {
    items = JSON.parse(itemsString)
    const newInterval = { ...interval, id: items.length + 1 }
    items.unshift(newInterval)
  }

  localStorage.setItem('intervalos', JSON.stringify(items))

  return items
}

export const updateLastInterval = async (interval: string): Promise<ListOfIntervals> => {
  let items: ListOfIntervals = []
  const itemsString = localStorage.getItem('intervalos')

  if (itemsString !== null) {
    items = JSON.parse(itemsString)

    const updatedItems = [
      { ...items[0], interval },
      ...items.slice(1)
    ]

    // const updatedItems = items.map(item => {
    //   if (item.id === interval.id) {
    //     return { ...item, interval: interval.interval }
    //   }
    //   return item
    // })

    localStorage.setItem('intervalos', JSON.stringify(updatedItems))
    return updatedItems
  }

  return items
}
