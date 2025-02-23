import styles from './Tag.module.css';

export const Tag = ({ children }: any) => {
	return (
		<li className={styles.tag}>
			<span>{children}</span>
		</li>
	);
};
