import { create } from "zustand"

export interface UseDropdown {
  isOpen: boolean
  dropdownId: string| null
  setDropdownId: (id: string) => void
  toggleDropdown: () => void
  openDropdown: () => void
  closeDropdown: () => void
}

export const createDropdownStore = () =>
  create<UseDropdown>((set) => ({
    isOpen: false,
    dropdownId: null,
    setDropdownId: (id: string) => set({ dropdownId: id }),
    toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
    openDropdown: () => set({ isOpen: true }),
    closeDropdown: () => set({ isOpen: false }),
  }))
