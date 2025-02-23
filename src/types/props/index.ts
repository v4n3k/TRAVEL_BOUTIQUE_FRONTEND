import { ComponentProps, ReactNode } from 'react';
import { TagEntity } from '../entities';

export interface Children {
	children: ReactNode;
}

export interface LayoutProps extends Children {}

export interface MainProps extends Children {}

export interface ImageProps extends ComponentProps<'img'> {}

export interface IconButtonProps extends ComponentProps<'button'> {
	Icon: ReactNode;
}

export interface ExcursionImageProps
	extends Pick<ComponentProps<'img'>, 'src'> {}

export interface TagsListProps {
	tags: TagEntity[];
}
