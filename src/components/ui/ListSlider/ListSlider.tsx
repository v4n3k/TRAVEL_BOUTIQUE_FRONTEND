import { IconArrowRight } from '../../../icons/IconArrowRight';
import { ListSliderProps } from '../../../types';
import { Button } from '../Button/Button';
import styles from './ListSlider.module.css';

export const ListSlider = ({
	children,
	buttonOffset = 100,
	onClick,
}: ListSliderProps) => {
	const wrapperStyle = {
		'--button-offset': `${buttonOffset}px`,
	} as React.CSSProperties;

	return (
		<div className={styles.maskedListWrapper} style={wrapperStyle}>
			{children}
			<Button
				className={styles.iconButton}
				rootClassName={styles.iconButtonRoot}
				backgroundColor='white-100'
				onClick={onClick}
			>
				<IconArrowRight />
			</Button>
		</div>
	);
};
