import {
	ComponentProps,
	Dispatch,
	ReactNode,
	RefObject,
	SetStateAction,
	SVGProps,
} from 'react';
import {
	BreadcrumbEntity,
	CategoryEntity,
	ExcursionEntity,
	ExcursionEventEntity,
	ExcursionWithCity,
	ExcursionWithImage,
	ImageEntity,
	SearchTipEntity,
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

export interface ListSliderProps<T> extends ComponentProps<'div'> {
	buttonOffset?: number;
	listRef: RefObject<HTMLUListElement | null>;
	buttonClassName?: string;
	widthOnGradientHide?: number;
	gradientWidth?: number;
	items?: T[];
	setItems?: Dispatch<SetStateAction<T[]>>;
}

export interface ExpandableProps extends ComponentProps<'div'> {
	collapsedHeight?: number;
	transitionDuration?: number;
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
	gap?: number;
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
		ExcursionWithCity,
		| 'id'
		| 'name'
		| 'city'
		| 'imgSrc'
		| 'categoryName'
		| 'accompanistsAmount'
		| 'personsAmount'
		| 'price'
	> {}

export interface ExcursionListProps extends ComponentProps<'ul'> {
	excursions: ExcursionWithCity[] | undefined;
}

export interface ExcursionEventsListProps extends ComponentProps<'ul'> {
	excursionEvents: ExcursionEventEntity[];
}

export interface ExcursionEventProps {
	event: ExcursionEventEntity;
}

export interface ExcursionEventsInputsListProps
	extends Pick<ExcursionEntity, 'excursionEvents'> {
	setExcursion: (
		updater:
			| ExcursionWithImage
			| ((prevExcursion: ExcursionWithImage) => ExcursionWithImage)
	) => void;
}

export interface ExcursionEventInputsListProps extends ExcursionEventEntity {
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
	rowsAmount?: number;
	onTagClick?: (city: string) => void;
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

export type PositionProperty = number | 'auto';

export interface IconRotatedLogoProps {
	rotation?: number;
	width?: 68.7 | 98.8 | 127.5;
	mirrorY?: boolean;
	hideable?: boolean;
	top?: PositionProperty;
	right?: PositionProperty;
	bottom?: PositionProperty;
	left?: PositionProperty;
}

export interface SearchableCategoriesProps<T>
	extends Pick<CategoriesProps, 'withName' | 'withIcon'>,
		Pick<ImageCardProps, 'nameSize'>,
		Pick<SearchableListProps<T>, 'searchQuery' | 'setSearchQuery'> {
	categories: CategoryEntity[];
	expandable?: boolean;
	collapsedHeight?: number;
	onAdd: () => void;
}

export interface SearchableExcursionsProps {
	className?: string;
}

export interface SearchableListProps<T> {
	className?: string;
	title: string;
	buttonText: string;
	children: ReactNode;
	withBackButton?: boolean;
	searchQuery: string;
	setSearchQuery: T;
	onAdd: () => void;
}

export interface CategoriesProps {
	renderTitle: () => ReactNode;
	categories: CategoryEntity[];
	expandable?: boolean;
	withName?: boolean;
	withIcon?: boolean;
	textUnderImage?: boolean;
	canAutoScroll?: boolean;
}

export interface CategoriesListProps
	extends Pick<
		CategoriesProps,
		'categories' | 'withName' | 'withIcon' | 'textUnderImage'
	> {}

export interface CategoryCardProps
	extends Pick<CategoryEntity, 'id' | 'name' | 'imgSrc'>,
		Pick<CategoriesProps, 'withName' | 'withIcon' | 'textUnderImage'>,
		Pick<ImageCardProps, 'nameSize' | 'radiusSize' | 'onClick'> {}

export interface GridListProps extends ComponentProps<'ul'> {
	gapSize?: 'm' | 'l';
}

export interface ImageCardProps {
	imgSrc: string;
	name: string;
	withIcon?: boolean;
	withName?: boolean;
	textUnderImage?: boolean;
	nameSize?: 's' | 'm' | 'l';
	radiusSize?: 'm' | 'l';
	onClick?: () => void;
}

export interface SearchTipsProps {
	tips: SearchTipEntity[] | undefined;
	areOpen: boolean;
	mountingDelay?: number;
	onTipClick: () => void;
}

export interface SliderArrowProps {
	className?: string;
	onClick?: () => void;
}

export interface CircularLoaderProps {
	onFullScreen?: boolean;
	className?: string;
}

export interface LazyComponentProps {
	loader: () => Promise<any>;
}

export interface IconSearchProps {
	resizable?: boolean;
}
