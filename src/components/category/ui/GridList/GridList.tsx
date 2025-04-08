import { ComponentProps } from 'react';
import styles from './GridList.module.css';

export interface GridListProps extends ComponentProps<'ul'> {}

export const GridList = ({ children }: GridListProps) => {
	return <ul className={styles.gridList}>{children}</ul>;
};
