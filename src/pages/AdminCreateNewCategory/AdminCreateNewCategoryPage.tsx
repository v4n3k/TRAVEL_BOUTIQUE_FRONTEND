import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { categoryApi } from '../../api/category/categoryApi';
import { BreadcrumbsWithNavButton } from '../../components/admin/ui/BreadcrumbsWithNavButton/BreadcrumbsWithNavButton';
import { ImageUploader } from '../../components/admin/ui/ImageUploader/ImageUploader';
import { ModalButton } from '../../components/admin/ui/ModalButton/ModalButton';
import { TitledModal } from '../../components/admin/ui/TitledModal/TitledModal';
import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { Page } from '../../components/ui/Page/Page';
import { Section } from '../../components/ui/Section/Section';
import { TextInput } from '../../components/ui/TextInput/TextInput';
import { useModal } from '../../hooks/useModal';
import { useNavHistory } from '../../hooks/useNavHistory';
import { useAdminStore } from '../../stores/useAdminSrore';
import { CategoryType, ImageEntity } from '../../types/entities';
import { RouteName } from '../../types/routes';
import styles from './AdminCreateNewCategory.module.css';

const AdminCreateNewCategoryPage = () => {
	const navigate = useNavigate();
	const navHistory = useNavHistory();

	const newCategory = useAdminStore(state => state.newCategory);
	const setNewCategory = useAdminStore(state => state.setNewCategory);

	const { isModalOpen, openModal, closeModal } = useModal();

	const mutation = useMutation({
		mutationFn: (formData: FormData) => categoryApi.create(formData),

		onSuccess: () => {
			handleDeleteCategory();
			navigate(RouteName.ADMIN);
		},

		onError: (error: unknown) => {
			console.error('Error creating new Category: ', error);
		},
	});

	const { isError } = mutation;
	const { name, uploadedImage } = newCategory;

	const categoryType = localStorage.getItem('categoryType') as CategoryType;

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

export default AdminCreateNewCategoryPage;
