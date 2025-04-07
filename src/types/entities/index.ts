import { ReactNode } from 'react';
import { RouteName } from '../routes';

export type UserId = number | null;

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
	key: string;
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
	to: RouteName;
}

export interface AdvantageEntity {
	id: number;
	text: string;
	Icon: ReactNode;
}

export interface ReviewEntity {
	id: number;
	author: string;
	text: string;
}

export interface CategoryEntity {
	id: number;
	name: string;
	imgSrc: string;
}

export interface CategoryBase extends Omit<CategoryEntity, 'id'> {}

export interface CategoryWithImage extends Omit<CategoryEntity, 'imgSrc'> {
	uploadedImage: ImageEntity;
}

export interface CategoryBaseWithImage extends Omit<CategoryWithImage, 'id'> {}
