import { create } from 'zustand';

type PulldownStore = {
  openPulldown: string | null;
  open: (name: string) => void;
  close: () => void;
};

export const usePulldownStore = create<PulldownStore>((set) => ({
  openPulldown: null,
  open: (name) => set({ openPulldown: name }),
  close: () => set({ openPulldown: null }),
}));