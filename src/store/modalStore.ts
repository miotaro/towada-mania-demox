import { create } from 'zustand';

type ModalStore = {
  modals: {
    [key: string]: boolean;
  };
  open: (modalName: string) => void;
  close: (modalName: string) => void;
  toggle: (modalName: string) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modals: {
    koremite: false,
    more: false,
    event: false,
  },

  open: (modalName) => set((state) => ({
    modals: { ...state.modals, [modalName]: true }
  })),
  close: (modalName) => set((state) => ({
    modals: { ...state.modals, [modalName]: false }
  })),
  toggle: (modalName) => set((state) => ({
    modals: { ...state.modals, [modalName]: !state.modals[modalName] }
  }))
}));
