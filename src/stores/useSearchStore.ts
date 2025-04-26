import { create } from 'zustand';
import { UseSearchStore } from '../types/stores';

export const useSearchStore = create<UseSearchStore>(set => ({
	searchQuery: '',
	setSearchQuery: searchQuery => set({ searchQuery }),
}));
