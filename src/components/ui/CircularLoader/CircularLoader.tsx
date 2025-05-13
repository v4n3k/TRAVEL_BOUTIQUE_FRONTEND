import { CircularLoaderProps } from '../../../types/props';
import { cn } from '../../../utils/cn';
import styles from './CircularLoader.module.css';

export const CircularLoader = ({
	onFullScreen = true,
	className,
}: CircularLoaderProps) => {
	return (
		<div
			className={cn(
				styles.circularLoader,
				onFullScreen ? styles.onFullScreen : '',
				className
			)}
			role='progressbar'
		>
			<svg
				className={styles.loaderSvg}
				viewBox='22 22 44 44'
				width='32'
				height='32'
			>
				<circle
					className={styles.loaderCircle}
					cx='44'
					cy='44'
					r='20'
					fill='none'
					strokeWidth='3.6'
				/>
			</svg>
		</div>
	);
};
