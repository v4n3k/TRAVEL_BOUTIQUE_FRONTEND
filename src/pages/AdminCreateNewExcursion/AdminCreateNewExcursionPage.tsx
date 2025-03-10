import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import {
	ExcursionEventsList,
	ImageUploader,
	LabeledInput,
	Modal,
	NumberInput,
} from '../../components/admin';
import { InputWrapper, TextArea } from '../../components/admin/';
import { BreadcrumbsWithNavButton } from '../../components/admin/ui/BreadcrumbsWithNavButton/BreadcrumbsWithNavButton';
import { Button, Page, Section, TextInput } from '../../components/ui';
import { useAdminStore } from '../../stores/useAdminSrore';
import {
	ExcursionBaseWithImage,
	ExcursionWithImage,
	ImageEntity,
} from '../../types';
import styles from './AdminCreateNewExcursionPage.module.css';

export const AdminCreateNewExcursionPage = () => {
	const newExcursion = useAdminStore(state => state.newExcursion);
	const setNewExcursion = useAdminStore(state => state.setNewExcursion);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const mutation = useMutation({
		mutationFn: (formData: FormData) => excursionApi.create(formData),

		onSuccess: () => {
			handleDeleteExcursion();
		},

		onError: (error: unknown) => {
			console.error('Error creating new Excursion: ', error);
		},
	});

	const { isError } = mutation;

	const {
		uploadedImage,
		name,
		accompanistsAmount,
		personsAmount,
		info,
		price,
		excursionEvents,
	} = newExcursion;

	const navigate = useNavigate();

	const handleCreateExcursion = () => {
		const formData = new FormData();

		formData.append('name', name);
		formData.append('personsAmount', String(personsAmount));
		formData.append('accompanistsAmount', String(accompanistsAmount));
		formData.append('info', info);
		formData.append('price', String(price));
		formData.append('uploadedImage', uploadedImage as File);
		formData.append('city', 'Тюмень');
		formData.append('excursionEvents', JSON.stringify(excursionEvents));

		mutation.mutate(formData);
	};

	const handleGoBack = () => {
		navigate(-1);
	};

	const handleNewExcursionChange = (
		key: keyof ExcursionBaseWithImage,
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setNewExcursion(prev => ({
			...prev,
			[key]: e.target.value,
		}));
	};

	const handleImageChange = (image: ImageEntity) => {
		setNewExcursion(prev => ({
			...prev,
			uploadedImage: image,
		}));
	};

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleNewExcursionChange('name', e);
	};

	const handlePersonsAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleNewExcursionChange('personsAmount', e);
	};

	const handleAccompanistsAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleNewExcursionChange('accompanistsAmount', e);
	};

	const handleInfoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		handleNewExcursionChange('info', e);
	};

	const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleNewExcursionChange('price', e);
	};

	const handleAddEvent = () => {
		setNewExcursion(prev => ({
			...prev,
			excursionEvents: [
				...prev.excursionEvents,
				{ id: Date.now(), time: '00:00', name: '' },
			],
		}));
	};

	const handleDeleteExcursion = () => {
		setNewExcursion({
			excursionEvents: [{ id: Date.now(), time: '00:00', name: '' }],
			name: '',
			personsAmount: 0,
			accompanistsAmount: 0,
			info: '',
			price: 0,
			uploadedImage: null,
		} as ExcursionWithImage);

		setIsModalOpen(false);
	};

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	return (
		<Page>
			<BreadcrumbsWithNavButton
				crumbs={[
					{ id: 1, label: 'Админ-панель' },
					{ id: 2, label: 'Экскурсии Тюмени' },
					{ id: 3, label: 'Создание нового мероприятия' },
				]}
			/>
			<Section className={styles.createContainer}>
				<div className={styles.imageUploaderAndButton}>
					<ImageUploader
						selectedImage={uploadedImage}
						onImageUpload={handleImageChange}
					/>
					<Button
						className={styles.triggerModalButton}
						backgroundColor='red-300'
						color='white-100'
						onClick={handleModalOpen}
					>
						Удалить экскурсию
					</Button>
					<Button onClick={handleCreateExcursion}>Создать</Button>
				</div>
				<div className={styles.mainInfoContainer}>
					<TextInput
						className={styles.titleInput}
						value={name}
						onChange={handleTitleChange}
						placeholder='Название экскурсии'
					/>

					<InputWrapper className={styles.amountsWrapper}>
						<LabeledInput
							label='Количество сопровождающих'
							renderInput={() => (
								<NumberInput
									value={accompanistsAmount || ''}
									onChange={handleAccompanistsAmountChange}
								/>
							)}
						/>
						<LabeledInput
							label='Количество человек в группе'
							renderInput={() => (
								<NumberInput
									value={personsAmount || ''}
									onChange={handlePersonsAmountChange}
								/>
							)}
						/>
					</InputWrapper>

					<InputWrapper className={styles.infoWrapper}>
						<LabeledInput
							label='В стоимость входит'
							renderInput={() => (
								<TextArea
									value={info}
									onChange={handleInfoChange}
									placeholder='Информация'
								/>
							)}
							direction='column'
						/>
					</InputWrapper>

					<div className={styles.eventsContainer}>
						<ExcursionEventsList />

						<Button
							className={styles.addButton}
							onClick={handleAddEvent}
							backgroundColor='white-50'
							color='blue-500'
							withBorder
						>
							Добавить<span>+</span>
						</Button>
					</div>
				</div>
				<div className={styles.priceContainer}>
					<NumberInput
						className={styles.priceInput}
						value={price || ''}
						onChange={handlePriceChange}
						minWidth={50}
						maxWidth={140}
						fontSize={32}
						paddingsBlock={32}
					/>
					<label>₽</label>
				</div>
			</Section>

			<Modal isOpen={isModalOpen} onClose={handleModalClose}>
				<div className={styles.modalContainer}>
					<h2>Удаление карточки экскурсии</h2>
					<Button
						backgroundColor='red-300'
						color='white-100'
						onClick={handleDeleteExcursion}
					>
						Удалить
					</Button>
				</div>
			</Modal>

			{isError && <p>error!</p>}
		</Page>
	);
};
