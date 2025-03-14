import { useEffect, useState } from 'react';
import { TextArea } from '../../../../components/admin';
import { Button, Form, TextInput } from '../../../../components/ui';
import { IconArrowTopRight } from '../../../../icons/IconArrowTopRight';
import { FeedbackFormProps } from '../../../../types';
import styles from './FeedbackForm.module.css';

export const FeedbackForm = ({ ref }: FeedbackFormProps) => {
	const [isIconVisible, setIsIconVisible] = useState(window.innerWidth >= 560);

	useEffect(() => {
		const handleResize = () => {
			setIsIconVisible(window.innerWidth >= 560);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [window.innerWidth]);

	return (
		<div className={styles.feedbackFormContainer} ref={ref}>
			<h2 className={styles.title}>Форма обратной связи</h2>
			<span>С удовольствием проконсультируем вас детально!</span>
			<Form className={styles.form}>
				<div className={styles.fieldsContainer}>
					<div className={styles.inputsContainer}>
						<TextInput placeholder='Имя' />
						<TextInput placeholder='+7 (900) 000 00 00' />
					</div>
					<TextArea
						className={styles.textArea}
						placeholder='Добавить комментарий'
						rows={3}
					/>
				</div>

				<Button
					className={styles.button}
					rootClassName={styles.buttonRoot}
					color='black-900'
					cornerIcon={isIconVisible && <IconArrowTopRight />}
				>
					Отправить
				</Button>
			</Form>
		</div>
	);
};
