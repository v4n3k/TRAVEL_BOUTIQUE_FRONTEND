import React from 'react';
import { FormProps } from '../../../types';

export const Form = ({ ...props }: FormProps) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return <form onSubmit={handleSubmit} {...props} />;
};
