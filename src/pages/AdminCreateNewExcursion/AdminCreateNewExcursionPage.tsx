import { useState } from 'react';
import {
	ExcursionEventsList,
	ImageUploader,
	LabeledInput,
	NumberInput,
} from '../../components/admin';
import { InputWrapper, TextArea } from '../../components/admin/';
import { Button, TextInput } from '../../components/ui';
import { useExcursionEventsStore } from '../../stores/useExcursionEventsSrore';
import { ImageEntity } from '../../types';
import styles from './AdminCreateNewExcursionPage.module.css';

export const AdminCreateNewExcursionPage = () => {
	const setExcursionEvents = useExcursionEventsStore(
		state => state.setExcursionEvents
	);

	const [selectedImage, setSelectedImage] = useState<ImageEntity>(null);

	const [value, setValue] = useState('');

	const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	const handleImageUpload = (image: ImageEntity) => {
		setSelectedImage(image);
	};

	const handleAddEvent = () => {
		setExcursionEvents(prev => [
			...prev,
			{
				id: new Date().getTime(),
				time: '00:00',
				name: '',
			},
		]);
	};

	return (
		<div className={styles.AdminCreateNewExcursionPage}>
			<section className={styles.createContainer}>
				<div className={styles.imageUploaderAndButton}>
					<ImageUploader
						selectedImage={selectedImage}
						onImageUpload={image => handleImageUpload(image)}
					/>
					<Button>Удалить экскурсию</Button>
				</div>
				<div className={styles.mainInfoContainer}>
					<TextInput
						className={styles.titleInput}
						placeholder='Название экскурсии'
					/>

					<InputWrapper className={styles.amountsWrapper}>
						<LabeledInput
							label='Количество сопровождающих'
							renderInput={() => <NumberInput />}
						/>
						<LabeledInput
							label='Количество человек в группе'
							renderInput={() => <NumberInput />}
						/>
					</InputWrapper>

					<InputWrapper className={styles.infoWrapper}>
						<LabeledInput
							label='В стоимость входит'
							renderInput={() => (
								<TextArea
									value={value}
									onChange={e => handleValueChange(e)}
									placeholder='Информация'
								/>
							)}
							direction='column'
						/>
					</InputWrapper>

					<div className={styles.eventsContainer}>
						<ExcursionEventsList />

						<Button className={styles.addButton} onClick={handleAddEvent}>
							Добавить +
						</Button>
					</div>
				</div>
				<div className={styles.priceContainer}>
					<NumberInput />
					<label>₽</label>
				</div>
			</section>
		</div>
	);
};
