import { ComponentProps, ReactNode, RefObject, SVGProps } from 'react';
import {
	BreadcrumbEntity,
	ExcursionEntity,
	ExcursionEventEntity,
	ExcursionWithImage,
	ImageEntity,
	ReviewEntity,
	TagEntity,
} from '../entities';

export interface Children {
	children: ReactNode;
}

export interface LayoutProps extends Children {}

export interface MainProps extends Children {}

export interface PageProps extends ComponentProps<'div'> {}

export interface SectionProps extends ComponentProps<'section'> {}

export interface BoxProps extends ComponentProps<'div'> {}

export interface ImageProps extends ComponentProps<'img'> {}

export interface TagProps extends ComponentProps<'li'> {
	size?: 's' | 'm';
}

export interface FeedbackFormRef {
	ref: React.RefObject<HTMLDivElement | null>;
}

export interface FeedbackFormProps extends FeedbackFormRef {}

export interface SchoolExcursionsProps extends FeedbackFormRef {}

export interface FormAndCareerGuidanceExcursionsProps extends FeedbackFormRef {}

export interface ListSliderProps extends ComponentProps<'div'> {
	buttonOffset?: number;
	listRef: RefObject<HTMLUListElement | null>;
	buttonClassName?: string;
	widthOnGradientHide?: number;
	gradientWidth?: number;
}

export interface ExpandableProps extends ComponentProps<'div'> {
	collapsedHeight?: number;
}

export interface ReviewsListProps {
	reviews: ReviewEntity[];
}

export interface IconButtonProps extends ComponentProps<'button'> {
	Icon: ReactNode;
}

export interface ButtonProps extends ComponentProps<'button'> {
	rootClassName?: string;
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
	cornerIcon?: ReactNode | null;
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

export interface ExcursionListProps extends ComponentProps<'ul'> {}

export interface ExcursionEventsListProps extends ComponentProps<'ul'> {
	excursionEvents: ExcursionEventEntity[];
	setExcursion: (
		updater:
			| ExcursionWithImage
			| ((prevExcursion: ExcursionWithImage) => ExcursionWithImage)
	) => void;
}

export interface ExcursionEventProps {
	event: ExcursionEventEntity;
}

export interface ExcursionEventsInputsListProps
	extends Pick<ExcursionEntity, 'excursionEvents'> {}

export interface ExcursionEventInputsProps extends ExcursionEventEntity {
	setExcursion: (
		updater:
			| ExcursionWithImage
			| ((prevExcursion: ExcursionWithImage) => ExcursionWithImage)
	) => void;
}

export interface PriceProps extends ComponentProps<'div'> {
	price: number | string;
}

export interface ManagerButtonProps extends ButtonProps {}

export interface TagsListProps {
	tags: TagEntity[];
	size?: 's' | 'm';
}

export interface ImageUploaderProps extends ComponentProps<'label'> {
	onImageUpload: (image: ImageEntity, imagePreview: string | null) => void;
	selectedImage: ImageEntity;
	initialPreviewUrl?: string | null;
}

export interface LabeledInputProps extends ComponentProps<'div'> {
	label: string;
	renderInput: () => ReactNode;
	direction?: 'row' | 'column';
	size?: 'm' | 'l';
}

export interface InputWrapperProps extends React.ComponentProps<'div'> {
	size?: 'm' | 'l';
}

export interface NumberInputProps extends ComponentProps<'input'> {
	minWidth?: number;
	maxWidth?: number;
	fontSize?: number;
	paddingBlock?: number;
}

export interface TextAreaProps extends ComponentProps<'textarea'> {}

export interface NumberInputProps extends ComponentProps<'input'> {}

export interface ModalProps extends ComponentProps<'div'> {
	isOpen: boolean;
	onClose: () => void;
}

export interface TitledModalProps extends ModalProps {
	title: string;
}

export interface ModalButtonProps extends ButtonProps {}

export interface BreadcrumbsProps extends ComponentProps<'ul'> {
	crumbs: BreadcrumbEntity[];
}

export interface BreadcrumbsWithNavButtonProps extends ComponentProps<'div'> {
	crumbs: BreadcrumbEntity[];
}

export interface TitleProps extends ComponentProps<'h2'> {
	as?: 'h1' | 'h2' | 'h3';
}

export interface TextContainerProps extends ComponentProps<'div'> {}

export interface ServiceProps {
	name: string;
}

export interface IconArrowProps {
	direction: 'left' | 'right' | 'top' | 'bottom';
}

export interface IconArrowRightProps extends SVGProps<SVGSVGElement> {}

export interface TransportVariantProps {
	title: string;
	Icon: ReactNode;
	renderDescription: () => ReactNode;
}

export interface TextItemProps extends ComponentProps<'li'> {}

export interface WrappedTextProps extends ComponentProps<'div'> {
	textColor?: 'blue-500' | 'red-300';
	italic?: boolean;
}
