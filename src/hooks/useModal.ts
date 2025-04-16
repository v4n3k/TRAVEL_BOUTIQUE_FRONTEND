import { useState } from 'react';

export const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = 'auto';
	};

	const toggleModal = () => {
		setIsModalOpen(prev => !prev);
		document.body.style.overflow = isModalOpen ? 'auto' : 'hidden';
	};

	return { isModalOpen, openModal, closeModal, toggleModal };
};
