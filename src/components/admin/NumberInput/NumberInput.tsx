import { TextInput } from '../../ui';
import styles from './NumberInput.module.css';

export const NumberInput = () => {
	return (
		<TextInput className={styles.numberInput} type='number' placeholder='0' />
	);
};
