import { create } from 'zustand';
import { ExcursionWithImage } from '../types';
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
}));
