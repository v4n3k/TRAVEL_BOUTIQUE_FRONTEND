import { useMutation } from '@tanstack/react-query';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Page } from '../../components/ui/Page/Page';
import { Section } from '../../components/ui/Section/Section';
import { TextInput } from '../../components/ui/TextInput/TextInput';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useModal } from '../../hooks/useModal';
import { useAdminStore } from '../../stores/useAdminSrore';
import {
	ExcursionBaseWithImage,
	ExcursionWithImage,
	ImageEntity,
} from '../../types/entities';
import { RouteName } from '../../types/routes';
import styles from './AdminCreateNewExcursionPage.module.css';

const AdminCreateNewExcursionPage = () => {
	const navigate = useNavigate();

	const newExcursion = useAdminStore(state => state.newExcursion);
	const setNewExcursion = useAdminStore(state => state.setNewExcursion);

	const { isModalOpen, openModal, closeModal } = useModal();
	const isSmallScreen = useMediaQuery('(max-width: 550px)');

	const categoryName = localStorage.getItem('categoryName');

	const mutation = useMutation({
		mutationFn: (formData: FormData) => excursionApi.create(formData),

		onSuccess: () => {
			navigate(RouteName.ADMIN_CATEGORY);
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

	const handleCreateExcursion = () => {
		const formData = new FormData();

		formData.append('name', name);
		formData.append('personsAmount', String(personsAmount));
		formData.append('accompanistsAmount', String(accompanistsAmount));
		formData.append('info', info);
		formData.append('price', String(price));
		formData.append('uploadedImage', uploadedImage as File);
		formData.append('categoryName', String(categoryName));
		formData.append(
			'excursionEvents',
			JSON.stringify(excursionEvents[0].name ? excursionEvents : [])
		);

		mutation.mutate(formData);
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
				{ id: Date.now(), time: '', name: '' },
			],
		}));
	};

	const handleDeleteExcursion = () => {
		setNewExcursion({
			excursionEvents: [{ id: Date.now(), time: '', name: '' }],
			name: '',
			personsAmount: 0,
			accompanistsAmount: 0,
			info: '',
			price: 0,
			uploadedImage: null,
		} as ExcursionWithImage);

		closeModal();
	};

	return (
		<Page>
			<BreadcrumbsWithNavButton />
			<Section className={styles.createContainer}>
				<Form className={styles.form}>
					<div className={styles.imageUploaderAndButton}>
						<ImageUploader
							selectedImage={uploadedImage}
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
							className={styles.createButton}
							backgroundColor='blue-500'
							onClick={handleCreateExcursion}
						>
							Создать
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
											maxWidth={62}
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
											maxWidth={62}
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
									setExcursion={setNewExcursion}
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
							className={styles.createButtonOnMediumScreen}
							rootClassName={styles.createButtonOnMediumScreenRoot}
							backgroundColor='blue-500'
							onClick={handleCreateExcursion}
						>
							Создать
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

			{isError && <p>error!</p>}
		</Page>
	);
};

export default AdminCreateNewExcursionPage;
