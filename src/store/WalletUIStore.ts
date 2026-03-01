import { create } from 'zustand'

interface WalletUIState {
    isModalOpen: boolean
    modalType: 'income' | 'expense' | null

    openModal: (type: 'income' | 'expense') => void
    closeModal: () => void
}

export const useWalletUIStore = create<WalletUIState>((set) => ({
    isModalOpen: false,
    modalType: null,

    openModal: (type: 'income' | 'expense') => {
        set({ isModalOpen: true, modalType: type })
    },
    closeModal: () => {
        set({ isModalOpen: false, modalType: null })
    },
}))
