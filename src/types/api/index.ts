import { CategoryEntity, ExcursionEntity } from '../entities';

export interface ExcursionApi {
	getAll: () => Promise<ExcursionEntity[]>;
	getById: (id: number) => Promise<ExcursionEntity>;
	create: (newExcursion: FormData) => Promise<ExcursionEntity>;
	edit: (id: number, updatedFields: FormData) => Promise<ExcursionEntity>;
}

export interface CategoryApi {
	create: (newCategory: FormData) => Promise<CategoryEntity>;
}
