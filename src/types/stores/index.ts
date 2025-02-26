import { ExcursionEventEntity } from '../entities';

export interface UseAuthStore {
	isAuth: boolean;
	setIsAuth: (isAuth: boolean) => void;
}

export interface ExcursionEventsStore {
	excursionEvents: ExcursionEventEntity[];
	setExcursionEvents: (
		updater:
			| ExcursionEventEntity[]
			| ((prevEvents: ExcursionEventEntity[]) => ExcursionEventEntity[])
	) => void;
}
