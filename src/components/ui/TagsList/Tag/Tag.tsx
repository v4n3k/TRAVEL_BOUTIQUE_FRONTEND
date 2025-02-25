import { TagProps } from '../../../../types';
import styles from './Tag.module.css';

export const Tag = ({ children, size = 'm' }: TagProps) => {
	return (
		<li className={[styles.tag, styles[size]].join(' ')}>
			<span>{children}</span>
		</li>
	);
};
