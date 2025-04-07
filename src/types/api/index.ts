import { CategoryEntity, ExcursionEntity } from '../entities';

export type OptionalPromise<T> = Promise<T | undefined>;

export interface ExcursionApi {
	getAll: () => OptionalPromise<ExcursionEntity[]>;
	getById: (id: number) => OptionalPromise<ExcursionEntity>;
	create: (newExcursion: FormData) => OptionalPromise<ExcursionEntity>;
	edit: (
		id: number,
		updatedFields: FormData
	) => OptionalPromise<ExcursionEntity>;
	delete: (id: number) => OptionalPromise<void>;
	generateKey: (id: number) => OptionalPromise<string>;
}

export interface CategoryApi {
	create: (newCategory: FormData) => OptionalPromise<CategoryEntity>;
}

export interface AuthApi {
	signIn: (credentials: SignInCredentials) => any; // TODO
	checkIsAuth: () => OptionalPromise<boolean>;
}

export interface SignInCredentials {
	login: string;
	password: string;
}
