import styles from './ChildrenAmount.module.css';

export const ChildrenAmount = () => {
	return (
		<section className={styles.childrenAmount}>
			<p className={styles.description}>
				количество детей, которые
				<br />
				<span> посетили наши экскурсии</span>
			</p>

			<div className={styles.amountContainer}>
				<span className={styles.amount}>
					<span>1</span>
					<span>0</span>
					<span>5</span>
					<span>6</span>
					<span>8</span>
				</span>
			</div>
		</section>
	);
};
