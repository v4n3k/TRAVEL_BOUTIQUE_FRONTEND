import styles from './HomePage.module.css';

export const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<h1 className={styles.title}>
				Школьные<span>экскурсии</span>
			</h1>
		</div>
	);
};
