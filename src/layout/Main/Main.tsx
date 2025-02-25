import { MainProps } from '../../types/props';
import styles from './Main.module.css';

export const Main = ({ children }: MainProps) => {
	return <main className={styles.main}>{children}</main>;
};
