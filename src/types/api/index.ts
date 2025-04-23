import {
	CategoriesByType,
	CategoryEntity,
	CategoryType,
	ExcursionEntity,
	TagEntity,
} from '../entities';

export type OptionalPromise<T> = Promise<T | undefined>;

export interface ExcursionApi {
	getAll: () => OptionalPromise<ExcursionEntity[]>;
	getById: (id: number) => OptionalPromise<ExcursionEntity>;
	getByCategoryName: (
		categoryName: string
	) => OptionalPromise<ExcursionEntity[]>;
	getBySearch: (searchQuery: string) => OptionalPromise<ExcursionEntity[]>;
	getExcursionsCities: () => OptionalPromise<TagEntity[]>;
	create: (newExcursion: FormData) => OptionalPromise<ExcursionEntity>;
	edit: (
		id: number,
		updatedFields: FormData
	) => OptionalPromise<ExcursionEntity>;
	delete: (id: number) => OptionalPromise<void>;
	generateKey: (id: number) => OptionalPromise<string>;
}

export interface CategoryApi {
	getAll: () => OptionalPromise<CategoriesByType>;
	getBySearch: (
		categoryType: CategoryType,
		searchQuery: string
	) => OptionalPromise<CategoryEntity[]>;
	create: (newCategory: FormData) => OptionalPromise<CategoryEntity>;
}

export interface AuthApi {
	signIn: (credentials: SignInCredentials) => OptionalPromise<signInResponse>;
	signOut: () => Promise<void>;
	checkIsAuth: () => OptionalPromise<boolean>;
}

export interface SignInCredentials {
	login: string;
	password: string;
}

export interface signInResponse {
	message: string;
	login: string;
}
