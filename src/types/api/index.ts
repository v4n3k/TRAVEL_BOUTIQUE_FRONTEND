import {
	CategoriesByType,
	CategoryEntity,
	CategoryType,
	ExcursionEntity,
	ExcursionWithCity,
	TagEntity,
} from '../entities';

export type OptionalPromise<T> = Promise<T | undefined>;

export interface ExcursionApi {
	getAllWithCities: () => OptionalPromise<ExcursionWithCity[]>;
	getById: (id: number) => OptionalPromise<ExcursionEntity>;
	getByCategoryName: (
		categoryName: string
	) => OptionalPromise<ExcursionEntity[]>;
	getBySearch: (searchQuery: string) => OptionalPromise<ExcursionEntity[]>;
	getBySearchWithCities: (
		searchQuery: string
	) => OptionalPromise<ExcursionWithCity[]>;
	getExcursionsCities: () => OptionalPromise<TagEntity[]>;
	getSearchTips: (searchQuery: string) => OptionalPromise<string[]>;
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
