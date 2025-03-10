import { PriceProps } from '../../../types';
import { cn } from '../../../utils/cn';
import styles from './Price.module.css';

export const Price = ({ price, className, ...props }: PriceProps) => {
	return (
		<div className={cn(styles.price, className)} {...props}>
			<span className={styles.priceValue}>{price}</span>
			<span>₽</span>
		</div>
	);
};
