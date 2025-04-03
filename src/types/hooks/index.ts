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

export interface UseCopyToClipboard {
	value: string | null;
	copy: (text: string) => Promise<boolean>;
	reset: () => void;
	error: Error | null;
	isCopied: boolean;
}
