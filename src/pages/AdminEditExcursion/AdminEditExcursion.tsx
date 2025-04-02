import { useMutation, useQuery } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import {
	BreadcrumbsWithNavButton,
	ExcursionEventsList,
	ImageUploader,
	InputWrapper,
	LabeledInput,
	ModalButton,
	NumberInput,
	TextArea,
	TitledModal,
} from '../../components/admin';
import { Button, Form, Page, Section, TextInput } from '../../components/ui';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useModal } from '../../hooks/useModal';
import { useNavHistory } from '../../hooks/useNavHistory';
import { useAdminStore } from '../../stores/useAdminSrore';
import {
	ExcursionBaseWithImage,
	ExcursionEntity,
	ExcursionWithImage,
	ImageEntity,
} from '../../types';
import styles from './AdminEditExcursion.module.css';

export const AdminEditExcursion = () => {
	const editedExcursion = useAdminStore(state => state.editedExcursion);
	const setEditedExcursion = useAdminStore(state => state.setEditedExcursion);

	const id = Number(useParams().id);
	const navHistory = useNavHistory();
	const { isModalOpen, openModal, closeModal } = useModal();
	const isSmallScreen = useMediaQuery('(max-width: 550px)');

	const { data: excursion, isError: isGetError } = useQuery({
		queryKey: ['excursion', id],
		queryFn: () => excursionApi.getById(id),
		retry: true,
	});

	const [initialPreviewUrl, setInitialPreviewUrl] = useState<string | null>(
		excursion?.imgSrc || null
	);

	useEffect(() => {
		if (excursion) {
			const { imgSrc, ...rest } = excursion as ExcursionEntity;

			const updatedExcursion = {
				...rest,
				uploadedImage: null,
			};

			setEditedExcursion(updatedExcursion);
			setInitialPreviewUrl(excursion.imgSrc);
		}
	}, [excursion]);

	const editMutation = useMutation({
		mutationFn: (formData: FormData) => excursionApi.edit(id, formData),

		onSuccess: () => handleClearExcursion(),

		onError: (error: unknown) => {
			console.error('Error creating new Excursion: ', error);
		},
	});

	const deleteMutaton = useMutation({
		mutationFn: (id: number) => excursionApi.delete(id),

		onError: (error: unknown) => {
			console.error('Error creating new Excursion: ', error);
		},
	});

	const { isError: isEditError } = editMutation;
	const { isError: isDeleteError } = deleteMutaton;

	const {
		uploadedImage,
		name,
		accompanistsAmount,
		personsAmount,
		info,
		price,
		excursionEvents,
	} = editedExcursion;

	const handleEditExcursion = () => {
		const formData = new FormData();

		formData.append('name', name);
		formData.append('personsAmount', String(personsAmount));
		formData.append('accompanistsAmount', String(accompanistsAmount));
		formData.append('info', info);
		formData.append('price', String(price));
		formData.append('excursionEvents', JSON.stringify(excursionEvents));
		formData.append('uploadedImage', uploadedImage as File);

		editMutation.mutate(formData);
	};

	const handleDeleteExcursion = () => {
		deleteMutaton.mutate(id);
		handleClearExcursion();
		closeModal();
	};

	useEffect(() => {
		console.log(isGetError, isEditError, isDeleteError);
	}, [isGetError, isEditError, isDeleteError]);

	const handleeditedExcursionChange = (
		key: keyof ExcursionBaseWithImage,
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setEditedExcursion(prev => ({
			...prev,
			[key]: e.target.value,
		}));
	};

	const handleImageChange = (image: ImageEntity) => {
		setEditedExcursion(prev => ({
			...prev,
			uploadedImage: image,
		}));
	};

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleeditedExcursionChange('name', e);
	};

	const handlePersonsAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleeditedExcursionChange('personsAmount', e);
	};

	const handleAccompanistsAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleeditedExcursionChange('accompanistsAmount', e);
	};

	const handleInfoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		handleeditedExcursionChange('info', e);
	};

	const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleeditedExcursionChange('price', e);
	};

	const handleAddEvent = () => {
		setEditedExcursion(prev => ({
			...prev,
			excursionEvents: [
				...prev.excursionEvents,
				{ id: Date.now(), time: '00:00', name: '' },
			],
		}));
	};

	const handleClearExcursion = () => {
		setEditedExcursion({
			excursionEvents: [{ id: Date.now(), time: '00:00', name: '' }],
			name: '',
			personsAmount: 0,
			accompanistsAmount: 0,
			info: '',
			price: 0,
			uploadedImage: null,
		} as ExcursionWithImage);

		setInitialPreviewUrl(null);

		closeModal();
	};

	return (
		<Page>
			<BreadcrumbsWithNavButton crumbs={navHistory} />
			<Section className={styles.createContainer}>
				<Form className={styles.form}>
					<div className={styles.imageUploaderAndButton}>
						<ImageUploader
							initialPreviewUrl={initialPreviewUrl}
							selectedImage={editedExcursion.uploadedImage}
							onImageUpload={handleImageChange}
						/>
						<Button
							className={styles.triggerModalButton}
							backgroundColor='red-300'
							color='white-100'
							onClick={openModal}
						>
							Удалить экскурсию
						</Button>
						<Button
							className={styles.editButton}
							backgroundColor='blue-500'
							onClick={handleEditExcursion}
						>
							Сохранить
						</Button>
					</div>
					<div className={styles.mainInfoContainer}>
						<div className={styles.titleAndPrice}>
							<TextInput
								className={styles.titleInput}
								value={name}
								onChange={handleTitleChange}
								placeholder='Название экскурсии'
							/>
							<div className={styles.priceContainer}>
								<NumberInput
									className={styles.priceInput}
									value={price || ''}
									onChange={handlePriceChange}
									minWidth={isSmallScreen ? 45 : 53}
									maxWidth={155}
								/>
								<label>₽</label>
							</div>
						</div>
						<div className={styles.inner}>
							<InputWrapper className={styles.amountsWrapper}>
								<LabeledInput
									label='Количество сопровождающих'
									renderInput={() => (
										<NumberInput
											className={styles.amountInput}
											value={accompanistsAmount || ''}
											onChange={handleAccompanistsAmountChange}
										/>
									)}
								/>
								<LabeledInput
									label='Количество человек в группе'
									renderInput={() => (
										<NumberInput
											className={styles.amountInput}
											value={personsAmount || ''}
											onChange={handlePersonsAmountChange}
										/>
									)}
								/>
							</InputWrapper>

							<InputWrapper className={styles.infoWrapper} size='l'>
								<LabeledInput
									className={styles.infoInput}
									label='В стоимость входит'
									renderInput={() => (
										<TextArea
											className={styles.infoTextArea}
											value={info}
											onChange={handleInfoChange}
											placeholder='Информация'
											rows={1}
										/>
									)}
									direction='column'
									size='l'
								/>
							</InputWrapper>

							<div className={styles.eventsContainer}>
								<ExcursionEventsList
									setExcursion={setEditedExcursion}
									excursionEvents={excursionEvents}
								/>

								<Button
									className={styles.addButton}
									rootClassName={styles.addButtonRoot}
									onClick={handleAddEvent}
									backgroundColor='white-50'
									color='blue-500'
									withBorder
								>
									Добавить<span>+</span>
								</Button>
							</div>
						</div>
					</div>
					<div className={styles.buttonsOnMediumScreen}>
						<Button
							className={styles.triggerModalButtonOnMediumScreen}
							backgroundColor='red-300'
							color='white-100'
							onClick={openModal}
						>
							Удалить экскурсию
						</Button>
						<Button
							className={styles.editButtonOnMediumScreen}
							rootClassName={styles.editButtonOnMediumScreenRoot}
							backgroundColor='blue-500'
							onClick={handleEditExcursion}
						>
							Сохранить
						</Button>
					</div>
				</Form>
			</Section>

			<TitledModal
				isOpen={isModalOpen}
				onClose={closeModal}
				title='Удаление карточки экскурсии'
			>
				<ModalButton
					backgroundColor='red-300'
					color='white-100'
					onClick={handleDeleteExcursion}
				>
					Удалить
				</ModalButton>
			</TitledModal>

			{(isGetError || isEditError || isDeleteError) && <p>error!</p>}
		</Page>
	);
};
