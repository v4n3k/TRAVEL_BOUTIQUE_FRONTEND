import { ExcursionEntity } from '../entities';

export interface ExcursionApi {
	getAll: () => Promise<ExcursionEntity[]>;
	create: (newExcursion: FormData) => Promise<ExcursionEntity>;
}
