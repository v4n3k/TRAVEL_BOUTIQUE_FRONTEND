import { TitledModalProps } from '../../../../types/props';
import { Modal } from '../Modal/Modal';
import styles from './TitledModal.module.css';

export const TitledModal = ({
	isOpen,
	onClose,
	title,
	children,
}: TitledModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles.modalContainer}>
				<h2 className={styles.title}>{title}</h2>
				{children}
			</div>
		</Modal>
	);
};
