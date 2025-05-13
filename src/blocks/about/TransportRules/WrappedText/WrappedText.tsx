import { WrappedTextProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import styles from './WrappedText.module.css';

export const WrappedText = ({
	children,
	className,
	textColor = 'blue-500',
	italic = false,
	...props
}: WrappedTextProps) => {
	return (
		<div className={cn(styles.wrappedText, className)} {...props}>
			<p
				className={styles.text}
				style={{
					color: `var(--${textColor})`,
					fontStyle: italic ? 'italic' : 'normal',
				}}
			>
				{children}
			</p>
		</div>
	);
};
