import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ModalProps } from '../../../types';
import styles from './Modal.module.css';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	const nodeRef = useRef<HTMLDivElement>(null);

	return (
		<CSSTransition
			in={isOpen}
			timeout={300}
			classNames={{
				enter: styles.modalEnter,
				enterActive: styles.modalEnterActive,
				exit: styles.modalExit,
				exitActive: styles.modalExitActive,
			}}
			unmountOnExit
			nodeRef={nodeRef}
		>
			<div
				ref={nodeRef}
				className={styles.modal}
				onClick={e => {
					if (e.target === e.currentTarget) {
						onClose();
					}
				}}
			>
				<div className={styles.content}>{children}</div>
			</div>
		</CSSTransition>
	);
};
