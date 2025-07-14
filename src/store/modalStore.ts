import { create } from 'zustand';

type ModalStore = {
  modals: {
    [key: string]: boolean;
  };
  //引数に文字列を受け取って、何も返さない
  open: (modalName: string) => void;
  close: (modalName: string) => void;
  toggle: (modalName: string) => void; //モーダルが開くきっかけは何か
};

export const useModalStore = create<ModalStore>((set) => ({
  modals: {
    koremite: false,
    more: false,
    event: false,
  },
  //setはzustandの関数、setStateに近い
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
