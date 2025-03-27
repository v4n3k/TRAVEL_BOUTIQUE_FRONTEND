import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { categoryApi } from '../../api/category/categoryApi';
import {
	BreadcrumbsWithNavButton,
	ImageUploader,
} from '../../components/admin';
import { Button, Form, Page, Section, TextInput } from '../../components/ui';
import { useNavHistory } from '../../hooks/useNavHistory';
import { useAdminStore } from '../../stores/useAdminSrore';
import { ImageEntity } from '../../types';
import styles from './AdminCreateNewCategory.module.css';

export const AdminCreateNewCategoryPage = () => {
	const navHistory = useNavHistory();

	const newCategory = useAdminStore(state => state.newCategory);
	const setNewCategory = useAdminStore(state => state.setNewCategory);

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

		mutation.mutate(formData);
	};

	const handleDeleteCategory = () => {
		setNewCategory({ name: '', uploadedImage: null });
	};

	const handleImageChange = (newImage: ImageEntity) => {
		setNewCategory(prev => ({ ...prev, uploadedImage: newImage }));
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewCategory(prev => ({ ...prev, name: e.target.value }));
	};

	useEffect(() => {
		console.log(navHistory);
	}, [navHistory]);

	useEffect(() => {
		console.log(name, uploadedImage);
	}, [name, uploadedImage]);

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
								className={styles.deleteButton}
								backgroundColor='red-300'
								onClick={handleDeleteCategory}
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

			{isError && <p>error!</p>}
		</Page>
	);
};
