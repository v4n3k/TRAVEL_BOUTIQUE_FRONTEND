import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { feedbackApi } from '../../../../api/feedback/feedbackApi';
import { TextArea } from '../../../../components/admin/ui/TextArea/TextArea';
import { Button } from '../../../../components/ui/Button/Button';
import { Form } from '../../../../components/ui/Form/Form';
import { TextInput } from '../../../../components/ui/TextInput/TextInput';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { IconArrowTopRight } from '../../../../icons/IconArrowTopRight';
import { FeedbackEntity } from '../../../../types/entities';
import { FeedbackFormProps } from '../../../../types/props';
import styles from './FeedbackForm.module.css';

export const FeedbackForm = ({ ref }: FeedbackFormProps) => {
	const [feedback, setFeedback] = useState({
		name: '',
		phone: '',
		comment: '',
	});
	const isIconVisible = useMediaQuery('(min-width: 560px)');

	const handleFormFieldChange = (
		field: keyof typeof feedback,
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFeedback({ ...feedback, [field]: e.target.value });
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleFormFieldChange('name', e);
	};
	const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleFormFieldChange('phone', e);
	};
	const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		handleFormFieldChange('comment', e);
	};

	const { name, phone, comment } = feedback;

	const mutation = useMutation({
		mutationFn: (feedback: FeedbackEntity) =>
			feedbackApi.sendToTelegramBot(feedback),

		onSuccess: () => console.log('Feedback sent successfully'),

		onError: (error: unknown) => console.error(error),
	});

	const handleSendFeedbackToTelegramBot = () => {
		if (!name || !phone || !comment) return;

		mutation.mutate(feedback);
	};

	return (
		<div className={styles.feedbackFormContainer} ref={ref}>
			<h2 className={styles.title}>Форма обратной связи</h2>
			<span>С удовольствием проконсультируем вас детально!</span>
			<Form className={styles.form}>
				<div className={styles.fieldsContainer}>
					<div className={styles.inputsContainer}>
						<TextInput
							value={name}
							onChange={handleNameChange}
							placeholder='Имя'
						/>
						<TextInput
							type='tel'
							value={phone}
							onChange={handlePhoneChange}
							placeholder='+7 (900) 000 00 00'
						/>
					</div>
					<TextArea
						className={styles.textArea}
						value={comment}
						onChange={handleCommentChange}
						placeholder='Добавить комментарий'
						rows={3}
					/>
				</div>

				<Button
					className={styles.button}
					rootClassName={styles.buttonRoot}
					color='black-900'
					cornerIcon={isIconVisible && <IconArrowTopRight />}
					onClick={handleSendFeedbackToTelegramBot}
				>
					Отправить
				</Button>
			</Form>
		</div>
	);
};
