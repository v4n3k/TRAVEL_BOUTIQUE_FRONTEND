import {
	CategoriesByType,
	CategoryEntity,
	CategoryType,
	ExcursionEntity,
	ExcursionWithCity,
	FeedbackEntity,
	SearchTipEntity,
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
	getSearchTips: (searchQuery: string) => OptionalPromise<SearchTipEntity[]>;
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
	getById: (id: number) => OptionalPromise<CategoryEntity>;
	create: (newCategory: FormData) => OptionalPromise<CategoryEntity>;
	update: (
		id: number,
		updatedFields: FormData
	) => OptionalPromise<CategoryEntity>;
	delete: (id: number) => OptionalPromise<CategoryEntity>;
}

export interface AuthApi {
	signIn: (credentials: SignInCredentials) => OptionalPromise<signInResponse>;
	signOut: () => Promise<void>;
	checkIsAuth: () => OptionalPromise<CheckIsAuthResponse>;
}

interface CheckIsAuthResponse {
	isAuth: boolean;
	error: string;
}

export interface FeedbackApi {
	sendToTelegramBot: (feedback: FeedbackEntity) => Promise<void>;
}

export interface SignInCredentials {
	login: string;
	password: string;
}

export interface signInResponse {
	message: string;
	login: string;
	error: string;
	errorRu: string;
}

export interface PaymentApi {
	create: (paymentData: PaymentData) => Promise<CreatePaymentResponse>;
}

export interface PaymentData {
	amount: number;
	phone: string;
	excursionId: number;
	excursionKey: string;
}

interface CreatePaymentResponse {
	confirmationUrl: string;
}
