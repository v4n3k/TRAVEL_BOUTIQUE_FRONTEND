import { PageProps } from '../../../types';
import styles from './Page.module.css';

export const Page = ({ children }: PageProps) => {
	return <div className={styles.page}>{children}</div>;
};
