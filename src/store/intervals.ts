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
  resetItems: () => void
  updateLastItervalValue: (interval: string) => void
  addItem: (item: Interval) => void
  deleteItem: (id: number) => void
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
        resetItems: () => {
          set({ items: [] })
        },
        updateLastItervalValue: (interval: string) => {
          const { items } = get()
          if (items.length > 0) {
            const updatedItems = [
              { ...items[0], interval },
              ...items.slice(1)
            ]
            set({ items: updatedItems })
          }
        },
        addItem: (item: Interval) => {
          const { items } = get()
          const newItem = { ...item, id: new Date().getTime() }
          items.unshift(newItem)
          set({ items })
        },
        deleteItem: (id: number) => {
          const { items } = get()
          const updatedItems = items.filter(item => item.id !== id)
          set({ items: updatedItems })
        }
      }
    },
    {
      name: 'intervals-app'
    }
  )
)
