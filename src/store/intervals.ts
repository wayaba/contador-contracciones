import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Interval, type ListOfIntervals } from '../types'
import { addInterval, getAllIntervals, updateLastInterval } from '../services/intervals'

interface State {
  items: ListOfIntervals
  currentItemId: number | null
  currentTime: number
  intervalTimer: number
  setCurrentItemId: (id: number) => void
  setCurrentTime: (time: number) => void
  setIntervalTimer: (intervalTimer: number) => void
  reset: () => void
  fetchAllItems: () => void
  updateLastItervalValue: (interval: string) => void
  addItem: (item: Interval) => void
}

export const useIntervalStore = create<State>()(
  persist(
    (set) => {
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
        fetchAllItems: () => {
          const items = getAllIntervals()
          set({ items })
        },
        updateLastItervalValue: (interval: string) => {
          const items = updateLastInterval(interval)
          set({ items })
        },
        addItem: (interval: Interval) => {
          const items = addInterval({ interval })
          set({ items })
        }
      }
    },
    {
      name: 'intervals'
    }
  )
)
