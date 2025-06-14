import { GridListProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import styles from './GridList.module.css';

export const GridList = ({ children, gapSize = 'l' }: GridListProps) => {
	return <ul className={cn(styles.gridList, styles[gapSize])}>{children}</ul>;
};
