import { CategoryEntity, ExcursionEntity } from '../entities';

export interface ExcursionApi {
	getAll: () => Promise<ExcursionEntity[] | undefined>;
	getById: (id: number) => Promise<ExcursionEntity | undefined>;
	create: (newExcursion: FormData) => Promise<ExcursionEntity | undefined>;
	edit: (
		id: number,
		updatedFields: FormData
	) => Promise<ExcursionEntity | undefined>;
	delete: (id: number) => Promise<void | undefined>;
	generateKey: (id: number) => Promise<string | undefined>;
}

export interface CategoryApi {
	create: (newCategory: FormData) => Promise<CategoryEntity>;
}
