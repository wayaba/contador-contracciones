import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type ListOfIntervals } from '../types'
import { getAllIntervals } from '../services/intervals'

interface State {
  items: ListOfIntervals
  currentItemId: number | null
  setCurrentItemId: (id: number) => void
  reset: () => void
  fetchAllItems: () => void
}

export const useIntervalStore = create<State>()(
  persist(
    (set) => {
      return {
        items: [],
        currentItemId: null,
        setCurrentItemId: (id: number) => {
          set({ currentItemId: id })
        },
        reset: () => {
          set({ currentItemId: null })
        },
        fetchAllItems: () => {
          const items = getAllIntervals()
          set({ items })
        }
      }
    },
    {
      name: 'intervals'
    }
  )
)
