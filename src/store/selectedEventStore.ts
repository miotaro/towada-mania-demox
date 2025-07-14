import { create } from 'zustand';

type EventDateStore = {
  selectedEventDate: string | null;
  setEventDate: (date: string) => void;
  clearEventDate: () => void;
};

export const useEventDateStore = create<EventDateStore>((set) => ({
  selectedEventDate: null, //初期状態
  setEventDate: (date) => set({ selectedEventDate: date }), //日付を更新
  clearEventDate: () => set({ selectedEventDate: null }), 
}));
