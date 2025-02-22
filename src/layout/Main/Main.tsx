import { MainProps } from '../../types/props';
import styles from './Main.module.css';

export const Main = ({ children }: MainProps) => {
	return <div className={styles.main}>{children}</div>;
};
