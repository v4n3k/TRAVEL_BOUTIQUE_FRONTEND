import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { CategoryWithImage, ImageEntity } from '../../types/entities';
import { RouteName } from '../../types/routes';
import styles from './AdminEditCategory.module.css';

const AdminEditCategoryPage = () => {
	const id = Number(useParams().id);
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { isModalOpen, openModal, closeModal } = useModal();

	const [editedCategory, setEditedCategory] = useState<CategoryWithImage>(
		{} as CategoryWithImage
	);

	const [initialPreviewUrl, setInitialPreviewUrl] = useState<string | null>(
		null
	);

	const { data: category, isError: isGetError, error: getError } = useQuery({
		queryKey: ['category'],
		queryFn: () => categoryApi.getById(id),
	});

	useEffect(() => {
		if (category) {
			const categoryWithImage: CategoryWithImage = {
				...category,
				uploadedImage: null,
			};

			setEditedCategory(categoryWithImage);
			setInitialPreviewUrl(category.imgSrc);
		}
	}, [category?.imgSrc]);

	const editMutation = useMutation({
		mutationFn: ({ name, uploadedImage }: CategoryWithImage) => {
			const formData = new FormData();

			formData.append('name', name);
			formData.append('uploadedImage', uploadedImage as File);

			return categoryApi.update(id, formData);
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['category', id] });

			navigate(RouteName.ADMIN);
		},
	});

	const deleteMutation = useMutation({
		mutationFn: () => categoryApi.delete(id),

		onSuccess: () => {
			navigate(RouteName.ADMIN);

			queryClient.invalidateQueries({ queryKey: ['categories'] });
		},
	});

	const handleImageChange = (image: ImageEntity) => {
		setEditedCategory(prev => ({
			...prev,
			uploadedImage: image,
		}));
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditedCategory(prev => ({
			...prev,
			name: e.target.value,
		}));
	};

	const handleEditCategory = () => {
		editMutation.mutate(editedCategory);
	};

	const handleDeleteCategory = () => {
		deleteMutation.mutate();
	};

	if (isGetError || editMutation.isError || deleteMutation.isError) {
		return (
			<div>
				<p>error!</p>
				<p>{getError?.message}</p>
				<p>{editMutation.error?.message}</p>
				<p>{deleteMutation.error?.message}</p>
			</div>
		);
	}

	return (
		<Page>
			<BreadcrumbsWithNavButton />
			<Section className={styles.section}>
				<Form className={styles.form}>
					<div className={styles.imageUploaderWrapper}>
						<ImageUploader
							initialPreviewUrl={initialPreviewUrl}
							selectedImage={editedCategory.uploadedImage}
							onImageUpload={handleImageChange}
						/>
					</div>
					<div className={styles.inputAndButton}>
						<TextInput
							className={styles.input}
							value={editedCategory.name}
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
								onClick={handleEditCategory}
							>
								Сохранить
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
		</Page>
	);
};

export default AdminEditCategoryPage;
