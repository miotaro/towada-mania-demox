import { create } from 'zustand';

type EventDateStore = {
  selectedEventDate: string | null;
  setEventDate: (date: string) => void;
  clearEventDate: () => void;
};

export const useEventDateStore = create<EventDateStore>((set) => ({
  selectedEventDate: null,
  setEventDate: (date) => set({ selectedEventDate: date }),
  clearEventDate: () => set({ selectedEventDate: null }),
}));
