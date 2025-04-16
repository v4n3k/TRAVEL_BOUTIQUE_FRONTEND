import { useMutation } from '@tanstack/react-query';
import { categoryApi } from '../../api/category/categoryApi';
import {
	BreadcrumbsWithNavButton,
	ImageUploader,
	ModalButton,
	TitledModal,
} from '../../components/admin';
import { Button, Form, Page, Section, TextInput } from '../../components/ui';
import { useModal } from '../../hooks/useModal';
import { useNavHistory } from '../../hooks/useNavHistory';
import { useAdminStore } from '../../stores/useAdminSrore';
import { CategoryType, ImageEntity } from '../../types';
import styles from './AdminCreateNewCategory.module.css';

export const AdminCreateNewCategoryPage = () => {
	localStorage.setItem('categoryType', 'cities');
	const categoryType = localStorage.getItem('categoryType') as CategoryType;

	const newCategory = useAdminStore(state => state.newCategory);
	const setNewCategory = useAdminStore(state => state.setNewCategory);

	const navHistory = useNavHistory();
	const { isModalOpen, openModal, closeModal } = useModal();

	const mutation = useMutation({
		mutationFn: (formData: FormData) => categoryApi.create(formData),

		onSuccess: () => handleDeleteCategory(),

		onError: (error: unknown) => {
			console.error('Error creating new Category: ', error);
		},
	});

	const { isError } = mutation;

	const { name, uploadedImage } = newCategory;

	const handleCreateCategory = () => {
		const formData = new FormData();

		formData.append('name', name);
		formData.append('uploadedImage', uploadedImage as File);
		formData.append('type', categoryType);

		mutation.mutate(formData);
	};

	const handleDeleteCategory = () => {
		setNewCategory({ name: '', uploadedImage: null, type: categoryType });
	};

	const handleImageChange = (newImage: ImageEntity) => {
		setNewCategory(prev => ({ ...prev, uploadedImage: newImage }));
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewCategory(prev => ({ ...prev, name: e.target.value }));
	};

	return (
		<Page>
			<BreadcrumbsWithNavButton crumbs={navHistory} />
			<Section className={styles.section}>
				<Form className={styles.form}>
					<div className={styles.imageUploaderWrapper}>
						<ImageUploader
							selectedImage={uploadedImage}
							onImageUpload={handleImageChange}
						/>
					</div>
					<div className={styles.inputAndButton}>
						<TextInput
							className={styles.input}
							value={name}
							onChange={handleNameChange}
							placeholder='Название категории'
						/>
						<div className={styles.buttonsContainer}>
							<Button
								className={styles.triggerModalButton}
								backgroundColor='red-300'
								onClick={openModal}
							>
								Удалить категорию
							</Button>
							<Button
								className={styles.createButton}
								rootClassName={styles.createButtonRoot}
								backgroundColor='blue-500'
								onClick={handleCreateCategory}
							>
								Создать
							</Button>
						</div>
					</div>
				</Form>
			</Section>

			<TitledModal
				isOpen={isModalOpen}
				onClose={closeModal}
				title='Удаление карточки категории'
			>
				<ModalButton
					className={styles.deleteButton}
					rootClassName={styles.deleteButtonRoot}
					backgroundColor='red-300'
					color='white-100'
					onClick={handleDeleteCategory}
				>
					Удалить
				</ModalButton>
			</TitledModal>

			{isError && <p>error!</p>}
		</Page>
	);
};
