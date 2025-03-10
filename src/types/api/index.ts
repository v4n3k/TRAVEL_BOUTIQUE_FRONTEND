import { ExcursionEntity } from '../entities';

export interface ExcursionApi {
	getAll: () => Promise<ExcursionEntity[]>;
	getById: (id: number) => Promise<ExcursionEntity>;
	create: (newExcursion: FormData) => Promise<ExcursionEntity>;
}
