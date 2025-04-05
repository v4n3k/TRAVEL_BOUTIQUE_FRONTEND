import { Button, Form, Page, Section, TextInput } from '../../components/ui';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { IconRotatedLogo } from '../../icons/IconRotatedLogo';
import { cn } from '../../utils/cn';
import styles from './SignInPage.module.css';

export const SignInPage = () => {
	const isLargeScreen = useMediaQuery('(min-width: 1481px)');

	return (
		<Page className={styles.signInPage}>
			<Section className={styles.signInSection}>
				<div className={styles.halfWidth}>
					<div className={styles.formWrapper}>
						<h2 className={styles.title}>Вход</h2>
						<Form className={styles.form}>
							<div className={styles.inputsContainer}>
								<TextInput className={styles.input} placeholder='Логин' />
								<TextInput className={styles.input} placeholder='Пароль' />
							</div>
							<Button
								className={styles.button}
								rootClassName={styles.buttonRoot}
								backgroundColor='blue-500'
							>
								Войти
							</Button>
						</Form>
					</div>
				</div>
				<div className={cn(styles.halfWidth, styles.icons)}>
					<IconRotatedLogo top={55} left={102} rotation={60} hideable />
					<IconRotatedLogo
						top={111}
						left={isLargeScreen ? 325 : 83}
						width={98.8}
						rotation={-45}
					/>
					<IconRotatedLogo top={36} right={80} width={98.8} rotation={60} />

					<IconRotatedLogo
						top={287}
						left={29}
						rotation={-45}
						width={98.8}
						hideable
					/>
					<IconRotatedLogo
						top={446}
						left={isLargeScreen ? 325 : 83}
						width={98.8}
						rotation={-140}
						mirrorY
					/>
					<IconRotatedLogo top={272} right={196} width={127.5} rotation={75} />

					<IconRotatedLogo
						bottom={61}
						left={129}
						width={127.5}
						rotation={75}
						hideable
					/>
					<IconRotatedLogo
						bottom={69}
						left={isLargeScreen ? 473 : 231}
						rotation={-105}
						width={127.5}
						mirrorY
					/>
					<IconRotatedLogo
						bottom={188}
						right={67}
						width={98.8}
						rotation={140}
						mirrorY
					/>
				</div>
			</Section>
		</Page>
	);
};
