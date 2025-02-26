import { create } from 'zustand';
import { ExcursionEventsStore } from '../types/stores';

export const useExcursionEventsStore = create<ExcursionEventsStore>(set => ({
	excursionEvents: [{ id: 0, time: '00:00', name: '' }],
	setExcursionEvents: updater =>
		set(state => ({
			excursionEvents:
				typeof updater === 'function'
					? updater(state.excursionEvents)
					: updater,
		})),
}));
