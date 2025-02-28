import React, { useRef } from 'react';
import { ButtonProps } from '../../../types';
import styles from './Button.module.css';
import { cn } from '../../../utils/cn';

export const Button = ({
	className,
	backgroundColor = 'blue-300',
	color = 'white-50',
	withBorder = false,
	...props
}: ButtonProps) => {
	const { children, leftIcon, rightIcon, cornerIcon } = props;
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
		const button = buttonRef.current;
		if (!button) return;

		const ripple = document.createElement('span');
		ripple.className = styles.ripple;

		const rect = button.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		ripple.style.left = `${x}px`;
		ripple.style.top = `${y}px`;

		const rippleContainer = button.querySelector(`.${styles.rippleContainer}`);
		if (rippleContainer) {
			rippleContainer.appendChild(ripple);
		}

		requestAnimationFrame(() => {
			ripple.classList.add(styles.rippleAnimate);
		});

		ripple.addEventListener('transitionend', () => {
			ripple.remove();
		});
	};

	return (
		<div className={styles.buttonWrapper}>
			<button
				className={cn(styles.button, className)}
				style={{
					backgroundColor: `var(--${backgroundColor})`,
					color: `var(--${color})`,
					border: withBorder ? '0.2px solid var(--blue-500)' : 'none',
				}}
				ref={buttonRef}
				onMouseDown={handleMouseDown}
				{...props}
			>
				<div className={styles.rippleContainer} />
				{leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
				{children}
				{rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
			</button>
			{cornerIcon && <div className={styles.cornerIcon}>{cornerIcon}</div>}
		</div>
	);
};
