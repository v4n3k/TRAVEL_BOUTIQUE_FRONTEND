import { ExcursionEntity } from '../entities';

export interface UseAuthStore {
	isAuth: boolean;
	setIsAuth: (isAuth: boolean) => void;
}

export interface UseAdminStore {
	newExcursion: ExcursionEntity;
	setNewExcursion: (
		updater:
			| ExcursionEntity
			| ((prevExcursion: ExcursionEntity) => ExcursionEntity)
	) => void;
}
