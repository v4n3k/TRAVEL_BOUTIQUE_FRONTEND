import { ComponentProps, ReactNode, SVGProps } from 'react';
import {
	BreadcrumbEntity,
	ExcursionEntity,
	ExcursionEventEntity,
	ImageEntity,
	TagEntity,
} from '../entities';

export interface Children {
	children: ReactNode;
}

export interface LayoutProps extends Children {}

export interface MainProps extends Children {}

export interface PageProps extends ComponentProps<'div'> {}

export interface SectionProps extends ComponentProps<'section'> {}

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
	color?: 'white-50' | 'white-100' | 'blue-500' | 'black-700' | 'black-900';
	withBorder?: boolean;
	fullWidth?: boolean;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	cornerIcon?: ReactNode;
}

export interface TextInputProps extends ComponentProps<'input'> {}

export interface FormProps extends ComponentProps<'form'> {}

export interface ExcursionImageProps extends ComponentProps<'img'> {}

export interface FieldProps extends ComponentProps<'li'> {
	fieldKey: string;
	fieldValue: string | number;
	width?: 'fitContent' | 'fullWidth';
	valueBackground?: 'transparent' | 'white-50';
}

export interface ExcursionCardProps
	extends Pick<
		ExcursionEntity,
		| 'id'
		| 'name'
		| 'imgSrc'
		| 'city'
		| 'accompanistsAmount'
		| 'personsAmount'
		| 'price'
	> {}

export interface ExcursionEventsListProps extends ComponentProps<'ul'> {
	excursionEvents: ExcursionEventEntity[];
}

export interface ExcursionEventProps {
	event: ExcursionEventEntity;
}

export interface PriceProps extends ComponentProps<'div'> {
	price: number;
}

export interface ManagerButtonProps extends ButtonProps {}

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

export interface BreadcrumbsProps extends ComponentProps<'ul'> {
	crumbs: BreadcrumbEntity[];
}

export interface BreadcrumbsWithNavButtonProps extends ComponentProps<'div'> {
	crumbs: BreadcrumbEntity[];
}

export interface TitleProps extends ComponentProps<'h2'> {
	as: 'h1' | 'h2' | 'h3';
}

export interface IconArrowRightProps extends SVGProps<SVGSVGElement> {}
