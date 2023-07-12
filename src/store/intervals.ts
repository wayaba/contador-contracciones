import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Interval, type ListOfIntervals } from '../types'

interface State {
  items: ListOfIntervals
  currentItemId: number | null
  currentTime: number
  intervalTimer: number
  setCurrentItemId: (id: number) => void
  setCurrentTime: (time: number) => void
  setIntervalTimer: (intervalTimer: number) => void
  reset: () => void
  updateLastItervalValue: (interval: string) => void
  addItem: (item: Interval) => void
}

export const useIntervalStore = create<State>()(
  persist(
    (set, get) => {
      return {
        items: [],
        currentItemId: null,
        currentTime: 0,
        intervalTimer: 0,
        setCurrentItemId: (id: number) => {
          set({ currentItemId: id })
        },
        setCurrentTime: (time: number) => {
          set({ currentTime: time })
        },
        setIntervalTimer: (intervalTimer: number) => {
          set({ intervalTimer })
        },
        reset: () => {
          set({ currentItemId: null })
        },
        updateLastItervalValue: (interval: string) => {
          const { items } = get()
          const updatedItems = [
            { ...items[0], interval },
            ...items.slice(1)
          ]
          set({ items: updatedItems })
        },
        addItem: (item: Interval) => {
          const { items } = get()
          const newItem = { ...item, id: items.length + 1 }
          items.unshift(newItem)
          set({ items })
        }
      }
    },
    {
      name: 'intervals'
    }
  )
)
