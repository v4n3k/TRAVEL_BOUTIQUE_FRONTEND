import React, { useEffect, useRef } from 'react';
import { TextAreaProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import styles from './TextArea.module.css';

export const TextArea = ({
	className,
	value,
	onChange,
	rows = 2,
	...props
}: TextAreaProps) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		adjustHeight();
	}, [value, window.innerWidth]);

	const adjustHeight = () => {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = 'auto';
			textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;

			if (!textAreaRef.current.value) {
				const minHeight = parseInt(
					window.getComputedStyle(textAreaRef.current).height
				);

				if (textAreaRef.current.scrollHeight < minHeight) {
					textAreaRef.current.style.height = `${minHeight}px`;
				} else {
					textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
				}
			}
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(e);
		adjustHeight();
	};

	return (
		<textarea
			className={cn(styles.textArea, className)}
			ref={textAreaRef}
			value={value}
			onChange={handleChange}
			rows={rows}
			{...props}
		/>
	);
};
