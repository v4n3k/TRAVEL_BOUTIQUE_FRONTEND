import React, { useImperativeHandle, useRef } from 'react';
import { ButtonProps } from '../../../types/props';
import { cn } from '../../../utils/cn';
import styles from './Button.module.css';

export const Button = ({
	className,
	rootClassName,
	backgroundColor = 'blue-300',
	color = 'white-50',
	withBorder = false,
	fullWidth = false,
	children,
	leftIcon,
	rightIcon,
	cornerIcon,
	gap = 20,
	ref,
	...props
}: ButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useImperativeHandle(
		ref,
		() => {
			return buttonRef.current as HTMLButtonElement;
		},
		[buttonRef]
	);

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

	const iconGap = {
		'--icon-gap': `${gap}px`,
	} as React.CSSProperties;

	return (
		<div
			className={cn(styles.buttonWrapper, rootClassName)}
			style={{
				width: fullWidth ? '100%' : 'fit-content',
				...iconGap,
			}}
		>
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
