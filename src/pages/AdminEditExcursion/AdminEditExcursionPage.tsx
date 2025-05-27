import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import { ExcursionEventInputsList } from '../../components/admin/ExcursionEventsList/ExcursionEventsList';
import { BreadcrumbsWithNavButton } from '../../components/admin/ui/BreadcrumbsWithNavButton/BreadcrumbsWithNavButton';
import { ImageUploader } from '../../components/admin/ui/ImageUploader/ImageUploader';
import { InputWrapper } from '../../components/admin/ui/InputWrapper/InputWrapper';
import { LabeledInput } from '../../components/admin/ui/LabeledInput/LabeledInput';
import { ModalButton } from '../../components/admin/ui/ModalButton/ModalButton';
import { NumberInput } from '../../components/admin/ui/NumberInput/NumberInput';
import { TextArea } from '../../components/admin/ui/TextArea/TextArea';
import { TitledModal } from '../../components/admin/ui/TitledModal/TitledModal';
import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { IconButton } from '../../components/ui/IconButton/IconButton';
import { Page } from '../../components/ui/Page/Page';
import { Section } from '../../components/ui/Section/Section';
import { TextInput } from '../../components/ui/TextInput/TextInput';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useModal } from '../../hooks/useModal';
import { IconCopy } from '../../icons/IconCopy';
import { IconKey } from '../../icons/IconKey';
import { useAdminStore } from '../../stores/useAdminSrore';
import {
	ExcursionBaseWithImage,
	ExcursionWithImage,
	ImageEntity,
} from '../../types/entities';
import styles from './AdminEditExcursion.module.css';

const AdminEditExcursionPage = () => {
	const editedExcursion = useAdminStore(state => state.editedExcursion);
	const setEditedExcursion = useAdminStore(state => state.setEditedExcursion);

	const queryClient = useQueryClient();
	const id = Number(useParams().id);
	const { isModalOpen, openModal, closeModal } = useModal();
	const isSmallScreen = useMediaQuery('(max-width: 550px)');
	const { copy } = useCopyToClipboard();

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
			const { imgSrc, ...rest } = excursion;

			const excursionWithImage = {
				...rest,
				uploadedImage: null,
			};

			setEditedExcursion(excursionWithImage);
			setInitialPreviewUrl(excursion.imgSrc);
		}
	}, [excursion]);

	const editMutation = useMutation({
		mutationFn: (formData: FormData) => excursionApi.edit(id, formData),

		onSuccess: () => handleClearExcursion(),

		onError: (error: unknown) => {
			console.error('Error editing Excursion: ', error);
		},
	});

	const deleteMutaton = useMutation({
		mutationFn: (id: number) => excursionApi.delete(id),

		onError: (error: unknown) => {
			console.error('Error deleting Excursion: ', error);
		},
	});

	const generateMutation = useMutation({
		mutationFn: (id: number) => excursionApi.generateKey(id),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['excursion', id] });
		},

		onError: (error: unknown) => {
			console.error('Error generating Unique key: ', error);
		},
	});

	const { isError: isEditError } = editMutation;
	const { isError: isDeleteError } = deleteMutaton;
	const { isError: isGenerateError } = generateMutation;

	const {
		uploadedImage,
		name,
		accompanistsAmount,
		personsAmount,
		info,
		price,
		excursionEvents,
		key,
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

	const handleGenerateKey = () => {
		generateMutation.mutate(id);
	};

	const handleCopyKey = () => {
		copy(key);
	};

	const handleEditedExcursionChange = (
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
		handleEditedExcursionChange('name', e);
	};

	const handlePersonsAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleEditedExcursionChange('personsAmount', e);
	};

	const handleAccompanistsAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleEditedExcursionChange('accompanistsAmount', e);
	};

	const handleInfoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		handleEditedExcursionChange('info', e);
	};

	const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleEditedExcursionChange('price', e);
	};

	const handleAddEvent = () => {
		setEditedExcursion(prev => ({
			...prev,
			excursionEvents: [
				...prev.excursionEvents,
				{ id: Date.now(), time: '', name: '' },
			],
		}));
	};

	const handleClearExcursion = () => {
		setEditedExcursion({
			excursionEvents: [{ id: Date.now(), time: '', name: '' }],
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
			<BreadcrumbsWithNavButton />
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

						<div className={styles.keyGeneration}>
							<Button
								className={styles.generateButton}
								rootClassName={styles.generateButtonRoot}
								color='black-900'
								rightIcon={<IconKey />}
								onClick={handleGenerateKey}
							>
								Сгенерировать ключ
							</Button>
							<div className={styles.copyContainer}>
								<TextInput
									className={styles.output}
									value={key}
									placeholder='0000'
									disabled
								/>
								<IconButton
									className={styles.copyButton}
									Icon={<IconCopy />}
									onClick={handleCopyKey}
								/>
							</div>
						</div>
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
								<ExcursionEventInputsList
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
					<div className={styles.keyGenerationOnSmallScreen}>
						<Button
							className={styles.generateButton}
							rootClassName={styles.generateButtonRoot}
							color='black-900'
							rightIcon={<IconKey />}
							onClick={handleGenerateKey}
						>
							Сгенерировать ключ
						</Button>
						<div className={styles.copyContainer}>
							<TextInput
								className={styles.output}
								value={key}
								placeholder='0000'
								disabled
							/>
							<IconButton
								className={styles.copyButton}
								Icon={<IconCopy />}
								onClick={handleCopyKey}
							/>
						</div>
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

			{(isGetError || isEditError || isDeleteError || isGenerateError) && (
				<p>error!</p>
			)}
		</Page>
	);
};

export default AdminEditExcursionPage;
