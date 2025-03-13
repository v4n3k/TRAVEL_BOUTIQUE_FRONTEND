import React, { useEffect, useRef } from 'react';
import { TextAreaProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import styles from './TextArea.module.css';

export const TextArea = ({
	className,
	value,
	onChange,
	...props
}: TextAreaProps) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		adjustHeight();
	}, [value]);

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
		onChange && onChange(e);
		adjustHeight();
	};

	return (
		<textarea
			className={cn(styles.textArea, className)}
			ref={textAreaRef}
			value={value}
			onChange={handleChange}
			rows={1}
			{...props}
		/>
	);
};
