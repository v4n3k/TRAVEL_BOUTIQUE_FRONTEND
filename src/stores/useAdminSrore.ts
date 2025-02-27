import { create } from 'zustand';
import { ExcursionEntity } from '../types';
import { UseAdminStore } from '../types/stores';

export const useAdminStore = create<UseAdminStore>(set => ({
	newExcursion: {
		excursionEvents: [{ id: Date.now(), time: '00:00', name: '' }],
	} as ExcursionEntity,

	setNewExcursion: updater =>
		set(state => ({
			newExcursion:
				typeof updater === 'function' ? updater(state.newExcursion) : updater,
		})),
}));
