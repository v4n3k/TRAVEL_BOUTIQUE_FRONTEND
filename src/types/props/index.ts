import { ComponentProps, ReactNode } from 'react';
import { TagEntity } from '../entities';

export interface Children {
	children: ReactNode;
}

export interface LayoutProps extends Children {}

export interface MainProps extends Children {}

export interface ImageProps extends ComponentProps<'img'> {}

export interface TagProps extends ComponentProps<'li'> {
	size?: 's' | 'm';
}

export interface IconButtonProps extends ComponentProps<'button'> {
	Icon: ReactNode;
}

export interface ButtonProps extends ComponentProps<'button'> {
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	cornerIcon?: ReactNode;
}

export interface TextInputProps extends ComponentProps<'input'> {}

export interface FormProps extends ComponentProps<'form'> {}

export interface ExcursionImageProps extends ComponentProps<'img'> {}

export interface FieldProps {
	fieldKey: string;
	fieldValue: string | number;
}

export interface ExcursionCardProps {
	id: number;
	title: string;
	imgSrc: string;
	city: string;
	accompanistsAmount: number;
	personsAmount: number;
	price: number;
}

export interface TagsListProps {
	tags: TagEntity[];
	size?: 's' | 'm';
}
