import { create } from 'zustand';
import { CategoryBaseWithImage, ExcursionWithImage } from '../types/entities';
import { UseAdminStore } from '../types/stores';

export const useAdminStore = create<UseAdminStore>(set => ({
	newExcursion: {
		excursionEvents: [{ id: Date.now(), time: '', name: '' }],
	} as ExcursionWithImage,
	setNewExcursion: updater =>
		set(state => ({
			newExcursion:
				typeof updater === 'function' ? updater(state.newExcursion) : updater,
		})),

	editedExcursion: {
		excursionEvents: [{ id: Date.now(), time: '', name: '' }],
	} as ExcursionWithImage,
	setEditedExcursion: updater =>
		set(state => ({
			editedExcursion:
				typeof updater === 'function'
					? updater(state.editedExcursion)
					: updater,
		})),

	newCategory: {} as CategoryBaseWithImage,
	setNewCategory: updater =>
		set(state => ({
			newCategory:
				typeof updater === 'function' ? updater(state.newCategory) : updater,
		})),

	key: 'some key',
	setKey: key => set({ key }),
}));
