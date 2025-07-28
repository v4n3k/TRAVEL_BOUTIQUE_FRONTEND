import React from 'react';
import { FormProps } from '../../../types/props';

export const Form = ({ onSubmit, ...props }: FormProps) => {
	const handleInternalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (onSubmit) {
			onSubmit(e);
		}
	};

	return <form onSubmit={handleInternalSubmit} {...props} />;
};
