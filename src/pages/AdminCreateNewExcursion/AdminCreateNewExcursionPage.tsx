import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	ExcursionEventsList,
	ImageUploader,
	LabeledInput,
	Modal,
	NumberInput,
} from '../../components/admin';
import { InputWrapper, TextArea } from '../../components/admin/';
import { Breadcrumbs } from '../../components/admin/ui/Breadcrumbs/BreadCrumbs';
import { Button, IconButton, Page, TextInput } from '../../components/ui';
import { IconArrowLeft } from '../../icons/IconArrowLeft';
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

	const navigate = useNavigate();

	const {
		uploadedImage,
		title,
		accompanistsAmount,
		personsAmount,
		info,
		price,
	} = newExcursion;

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
		handleNewExcursionChange('title', e);
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

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleDeleteExcursion = () => {
		setNewExcursion({
			excursionEvents: [{ id: Date.now(), time: '00:00', name: '' }],
			title: '',
			personsAmount: 0,
			accompanistsAmount: 0,
			info: '',
			price: 0,
			uploadedImage: null,
		} as ExcursionWithImage);

		setIsModalOpen(false);
	};

	useEffect(() => {
		console.log(newExcursion);
	}, [newExcursion]);

	return (
		<Page>
			<div className={styles.breadcrumbsWrapper}>
				<IconButton Icon={<IconArrowLeft />} onClick={handleGoBack} />

				<Breadcrumbs
					crumbs={[
						{ id: 1, label: 'Админ-панель' },
						{ id: 2, label: 'Экскурсии Тюмени' },
						{ id: 3, label: 'Создание нового мероприятия' },
					]}
				/>
			</div>
			<section className={styles.createContainer}>
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
				</div>
				<div className={styles.mainInfoContainer}>
					<TextInput
						className={styles.titleInput}
						value={title}
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
			</section>

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
		</Page>
	);
};
