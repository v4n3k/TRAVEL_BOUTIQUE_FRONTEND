import React, { useEffect, useRef, useState } from 'react';
import { NumberInputProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import { TextInput } from '../../../ui';
import styles from './NumberInput.module.css';

export const NumberInput = ({
	className,
	value,
	onChange,
	minWidth = 37,
	maxWidth = 100,
	...props
}: NumberInputProps) => {
	const [width, setWidth] = useState(minWidth);
	const [inputValue, setInputValue] = useState(String(value));
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setInputValue(String(value));
	}, [value]);

	useEffect(() => {
		const inputElement = inputRef.current;

		if (!inputElement) {
			return;
		}

		const tempElement = document.createElement('span');
		tempElement.style.fontSize = getComputedStyle(inputElement).fontSize;
		tempElement.style.fontWeight = getComputedStyle(inputElement).fontWeight; // Or a default if not defined
		tempElement.style.lineHeight = getComputedStyle(inputElement).lineHeight; // Or a default if not defined
		tempElement.style.position = 'absolute';
		tempElement.style.left = '-9999px';
		tempElement.textContent = inputValue || '';
		document.body.appendChild(tempElement);

		// Calculate padding from the input element
		const paddingBlock =
			parseFloat(getComputedStyle(inputElement).paddingLeft) +
			parseFloat(getComputedStyle(inputElement).paddingRight);

		const newWidth = Math.max(minWidth, tempElement.offsetWidth + paddingBlock);
		document.body.removeChild(tempElement);

		setWidth(Math.min(maxWidth, newWidth));
	}, [inputValue, minWidth, maxWidth]);

	const isNumber = (value: string) => {
		return /^\d*$/.test(value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		if (!isNumber(newValue) && newValue !== '') return;

		setInputValue(newValue);

		onChange &&
			onChange({
				...e,
				target: { ...e.target, value: newValue },
			});
	};

	return (
		<TextInput
			ref={inputRef}
			className={cn(styles.numberInput, className)}
			type='text'
			placeholder='0'
			value={inputValue}
			onChange={handleChange}
			style={{ width, minWidth, maxWidth }} // Remove fontSize
			{...props}
		/>
	);
};
