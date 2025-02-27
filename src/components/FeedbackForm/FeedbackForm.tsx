import { IconArrowTopRight } from '../../icons/IconArrowTopRight';
import { Button, TextInput } from '../ui';
import { Form } from '../ui/Form/Form';
import styles from './FeedbackForm.module.css';

export const FeedbackForm = () => {
	return (
		<div className={styles.feedbackFormContainer}>
			<h2 className={styles.title}>Форма обратной связи</h2>
			<span>С удовольствием проконсультируем вас детально!</span>
			<Form className={styles.form}>
				<div className={styles.inputsContainer}>
					<TextInput placeholder='Имя' />
					<TextInput placeholder='+7 (900) 000 00 00' />
				</div>
				<Button
					className={styles.button}
					color='black-900'
					cornerIcon={<IconArrowTopRight />}
				>
					Отправить
				</Button>
			</Form>
		</div>
	);
};
