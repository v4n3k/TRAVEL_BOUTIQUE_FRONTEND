import { CategoryBaseWithImage, ExcursionWithImage, UserId } from '../entities';

export interface UseAuthStore {
	token: string | null;
	setToken: (token: string | null) => void;
	userId: UserId;
	setUserId: (userId: UserId) => void;
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

	editedExcursion: ExcursionWithImage;
	setEditedExcursion: (
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

	key: string;
	setKey: (key: string) => void;
}
