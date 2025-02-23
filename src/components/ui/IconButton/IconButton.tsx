import { IconButtonProps } from '../../../types';
import styles from './IconButton.module.css';

export const IconButton = ({ Icon }: IconButtonProps) => {
	return <button className={styles.iconButton}>{Icon}</button>;
};
