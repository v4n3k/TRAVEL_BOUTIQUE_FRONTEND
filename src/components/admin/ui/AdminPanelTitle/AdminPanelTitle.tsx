import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../../../api/auth/authApi';
import { useModal } from '../../../../hooks/useModal';
import { TitledModal } from '../TitledModal/TitledModal';
import styles from './AdminPanelTitle.module.css';
import { RouteName } from '../../../../types/routes';
import { Button } from '../../../ui/Button/Button';
import { Title } from '../../../ui/Title/Title';

export const AdminPanelTitle = () => {
	const navigate = useNavigate();
	const { isModalOpen, openModal, closeModal } = useModal();

	const login = localStorage.getItem('login');

	const mutation = useMutation({
		mutationFn: () => authApi.signOut(),

		onSuccess: () => {
			localStorage.removeItem('login');
			navigate(RouteName.HOME);
		},

		onError: (error: unknown) => {
			console.error('Error signing out: ', error);
		},
	});

	const handleSignOut = () => {
		mutation.mutate();
		closeModal();
	};

	return (
		<div className={styles.adminPanelTitle}>
			<Title className={styles.title}>Админ-панель</Title>
			<Button
				className={styles.triggerModalButton}
				onClick={openModal}
				backgroundColor='white-50'
				color='black-900'
			>
				{login}
			</Button>

			<TitledModal
				title='Выход из аккаунта'
				isOpen={isModalOpen}
				onClose={closeModal}
			>
				<Button
					className={styles.signOutButton}
					rootClassName={styles.signOutButtonRoot}
					backgroundColor='blue-500'
					onClick={handleSignOut}
				>
					Выход
				</Button>
			</TitledModal>
		</div>
	);
};
