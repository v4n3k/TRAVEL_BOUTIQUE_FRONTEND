import React, { useRef, useState } from 'react';
import { NumberInputProps } from '../../../types';
import { TextInput } from '../../ui';
import styles from './NumberInput.module.css';

export const NumberInput = ({
	value,
	onChange,
	minWidth = 37,
	maxWidth = 100,
	fontSize = 22,
	paddingsBlock = 24,
}: NumberInputProps) => {
	const [width, setWidth] = useState(minWidth);
	const inputRef = useRef(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		if (typeof newValue !== 'number') return;

		onChange && onChange(e);

		const tempElement = document.createElement('span');
		tempElement.style.fontSize = `${fontSize}px`;
		tempElement.style.fontWeight = '400';
		tempElement.style.lineHeight = '30px';
		tempElement.style.position = 'absolute';
		tempElement.style.left = '-9999px';
		tempElement.textContent = String(newValue) || '';
		document.body.appendChild(tempElement);
		const newWidth = Math.max(
			minWidth,
			tempElement.offsetWidth + paddingsBlock
		);
		document.body.removeChild(tempElement);

		setWidth(Math.min(maxWidth, newWidth));
	};

	return (
		<TextInput
			ref={inputRef}
			className={styles.numberInput}
			type='number'
			placeholder='0'
			value={value}
			onChange={handleChange}
			style={{ width, minWidth, maxWidth, fontSize }}
		/>
	);
};
