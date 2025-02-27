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

export interface ExcursionEntity {
	id: number;
	imgSrc: string;
	title: string;
	personsAmount: number | '';
	accompanistsAmount: number | '';
	info: string;
	excursionEvents: ExcursionEventEntity[];
	price: number | '';
}
