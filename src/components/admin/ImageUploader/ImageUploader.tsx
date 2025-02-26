import React, { useEffect, useState } from 'react';
import { IconImage } from '../../../icons/IconImage';
import { ImageUploaderProps } from '../../../types';
import styles from './ImageUploader.module.css';

export const ImageUploader = ({
	onImageUpload,
	selectedImage,
	...props
}: ImageUploaderProps) => {
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [inputId] = useState(
		`image-upload-${Math.random().toString(36).substring(2, 9)}`
	); // Unique ID

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null;

		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result as string);
				onImageUpload(file, reader.result as string);
			};
			reader.readAsDataURL(file);
		} else {
			setPreviewUrl(null);
			onImageUpload(null, null);
		}
	};

	useEffect(() => {
		if (selectedImage) {
			if (typeof selectedImage === 'string') {
				setPreviewUrl(selectedImage);
			} else {
				const reader = new FileReader();
				reader.onloadend = () => {
					setPreviewUrl(reader.result as string);
				};
				reader.readAsDataURL(selectedImage);
			}
		} else {
			setPreviewUrl(null);
		}
	}, [selectedImage]);

	return (
		<label className={styles.imageUploader} htmlFor={inputId} {...props}>
			<input
				className={styles.input}
				type='file'
				accept='image/*'
				onChange={handleImageChange}
				id={inputId}
			/>
			{previewUrl ? (
				<img className={styles.imagePreview} src={previewUrl} alt='Preview' />
			) : (
				<div className={styles.upload}>
					<IconImage />
				</div>
			)}
		</label>
	);
};
