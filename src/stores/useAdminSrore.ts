import { create } from 'zustand';
import { CategoryBaseWithImage, ExcursionWithImage } from '../types';
import { UseAdminStore } from '../types/stores';

export const useAdminStore = create<UseAdminStore>(set => ({
	newExcursion: {
		excursionEvents: [{ id: Date.now(), time: '00:00', name: '' }],
	} as ExcursionWithImage,
	setNewExcursion: updater =>
		set(state => ({
			newExcursion:
				typeof updater === 'function' ? updater(state.newExcursion) : updater,
		})),

	newCategory: {} as CategoryBaseWithImage,
	setNewCategory: updater =>
		set(state => ({
			newCategory:
				typeof updater === 'function' ? updater(state.newCategory) : updater,
		})),
}));
