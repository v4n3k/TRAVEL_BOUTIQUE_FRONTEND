import { Button } from '../../../../components/ui/Button/Button';
import { TextContainer } from '../../../../components/ui/TextContainer/TextContainer';
import { ServiceProps } from '../../../../types/props';
import styles from './Service.module.css';

export const Service = ({ name }: ServiceProps) => {
	const handleOrder = () => {};

	return (
		<li className={styles.service}>
			<TextContainer className={styles.container}>
				<p className={styles.text}>{name}</p>
				<Button
					className={styles.button}
					rootClassName={styles.buttonRoot}
					backgroundColor='blue-500'
					onClick={handleOrder}
				>
					Заказать
				</Button>
			</TextContainer>
		</li>
	);
};
