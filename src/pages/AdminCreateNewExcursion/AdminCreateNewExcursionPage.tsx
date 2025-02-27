import { ChangeEvent, useEffect, useState } from 'react';
import {
	ExcursionEventsList,
	ImageUploader,
	LabeledInput,
	Modal,
	NumberInput,
} from '../../components/admin';
import { InputWrapper, TextArea } from '../../components/admin/';
import { Button, TextInput } from '../../components/ui';
import { useAdminStore } from '../../stores/useAdminSrore';
import { ImageEntity } from '../../types';
import styles from './AdminCreateNewExcursionPage.module.css';

export const AdminCreateNewExcursionPage = () => {
	const newExcursion = useAdminStore(state => state.newExcursion);
	const setNewExcursion = useAdminStore(state => state.setNewExcursion);

	const {
		title,
		personsAmount,
		accompanistsAmount,
		info,
		price,
	} = newExcursion;

	const handleNewExcursionChange = (
		key: string,
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setNewExcursion(prev => ({
			...prev,
			[key]: e.target.value,
		}));
	};

	const [selectedImage, setSelectedImage] = useState<ImageEntity>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleInfoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		handleNewExcursionChange('info', e);
	};

	const handleAccompanistsAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleNewExcursionChange('accompanists', e);
	};

	const handlePersonsAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleNewExcursionChange('persons', e);
	};

	const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleNewExcursionChange('price', e);
	};

	const handleImageUpload = (image: ImageEntity) => {
		setSelectedImage(image);
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

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleDeleteExcursion = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		console.log(newExcursion);
	}, [newExcursion]);

	return (
		<div className={styles.AdminCreateNewExcursionPage}>
			<section className={styles.createContainer}>
				<div className={styles.imageUploaderAndButton}>
					<ImageUploader
						selectedImage={selectedImage}
						onImageUpload={image => handleImageUpload(image)}
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
						onChange={e => handleNewExcursionChange('title', e)}
						placeholder='Название экскурсии'
					/>

					<InputWrapper className={styles.amountsWrapper}>
						<LabeledInput
							label='Количество сопровождающих'
							renderInput={() => (
								<NumberInput
									value={accompanistsAmount}
									onChange={handleAccompanistsAmountChange}
								/>
							)}
						/>
						<LabeledInput
							label='Количество человек в группе'
							renderInput={() => (
								<NumberInput
									value={personsAmount}
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
						value={price}
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
		</div>
	);
};
