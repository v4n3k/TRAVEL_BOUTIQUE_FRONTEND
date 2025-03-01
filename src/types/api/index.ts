import { ExcursionEntity } from '../entities';

export interface ExcursionApi {
	getAll: () => Promise<ExcursionEntity[]>;
	create: ({ data }: { data: ExcursionEntity }) => Promise<void>;
}
