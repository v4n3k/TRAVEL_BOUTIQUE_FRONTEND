export interface TagEntity {
	id: number;
	name: string;
}

export type ImageEntity = File | null;

export interface ExcursionEventEntity {
	id: number;
	time: string;
	name: string;
}
