import { ComponentProps, ReactNode } from 'react';
import { ImageEntity, TagEntity } from '../entities';

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
	backgroundColor?:
		| 'white-50'
		| 'white-100'
		| 'blue-300'
		| 'blue-500'
		| 'red-300';
	color?: 'white-50' | 'white-100' | 'blue-500' | 'black-900' | 'black-700';
	withBorder?: boolean;

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

export interface ImageUploaderProps extends ComponentProps<'label'> {
	onImageUpload: (image: ImageEntity, imagePreview: string | null) => void;
	selectedImage: ImageEntity;
}

export interface LabeledInputProps extends ComponentProps<'div'> {
	label: string;
	renderInput: () => ReactNode;
	direction?: 'row' | 'column';
}

export interface InputWrapperProps extends React.ComponentProps<'div'> {}

export interface NumberInputProps extends ComponentProps<'input'> {
	minWidth?: number;
	maxWidth?: number;
	fontSize?: number;
	paddingsBlock?: number;
}

export interface TextAreaProps extends ComponentProps<'textarea'> {}

export interface NumberInputProps extends ComponentProps<'input'> {}

export interface ModalProps extends ComponentProps<'div'> {
	isOpen: boolean;
	onClose: () => void;
}
