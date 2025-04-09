import { useModal } from '../../../../hooks/useModal';
import { Button } from '../../../ui';
import { TitledModal } from '../TitledModal/TitledModal';

export interface AdminPaneTitleProps {
	login: string;
}

export const AdminPanelTitle = ({ login }: AdminPaneTitleProps) => {
	const { isModalOpen, openModal, closeModal } = useModal();

	const handleClick = () => {
		openModal();
	};

	return (
		<div>
			<h2>Админ-панель</h2>
			<Button onClick={handleClick}>{login}</Button>

			<TitledModal
				title='Выход из аккаунта'
				isOpen={isModalOpen}
				onClose={closeModal}
			>
				<Button></Button>
			</TitledModal>
		</div>
	);
};
