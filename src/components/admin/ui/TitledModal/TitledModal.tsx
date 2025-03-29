import { Modal } from '../..';
import { TitledModalProps } from '../../../../types';
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
