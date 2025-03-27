import { RouteName } from '..';

export interface WindowSize {
	width: number | undefined;
	height: number | undefined;
}

export interface NavHistoryLink {
	id: number;
	label: string;
	to: RouteName;
}
