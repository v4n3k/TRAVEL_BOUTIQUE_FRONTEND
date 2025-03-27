import { CategoryBaseWithImage, ExcursionWithImage } from '../entities';

export interface UseAuthStore {
	isAuth: boolean;
	setIsAuth: (isAuth: boolean) => void;
}

export interface UseAdminStore {
	newExcursion: ExcursionWithImage;
	setNewExcursion: (
		updater:
			| ExcursionWithImage
			| ((prevExcursion: ExcursionWithImage) => ExcursionWithImage)
	) => void;

	newCategory: CategoryBaseWithImage;
	setNewCategory: (
		updater:
			| CategoryBaseWithImage
			| ((prevCategory: CategoryBaseWithImage) => CategoryBaseWithImage)
	) => void;
}
