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
	name: string;
	personsAmount: number;
	accompanistsAmount: number;
	info: string;
	city: string;
	excursionEvents: ExcursionEventEntity[];
	price: number;
}

export interface ExcursionBase extends Omit<ExcursionEntity, 'id'> {}

export interface ExcursionWithImage extends Omit<ExcursionEntity, 'imgSrc'> {
	uploadedImage: ImageEntity;
}

export interface ExcursionBaseWithImage
	extends Omit<ExcursionWithImage, 'id'> {}

export interface BreadcrumbEntity {
	id: number;
	label: string;
}
