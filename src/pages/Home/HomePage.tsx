import {
	Advantages,
	ChildrenAmount,
	Excursions,
	FormAndCareerGuidanceExcursions,
	Reviews,
	SchoolExcursions,
} from '../../blocks/home';
import { PaymentMethod } from '../../blocks/home/PaymentMethod/PaymentMethod';
import { Button, IconButton, Page } from '../../components/ui';
import { IconArrowTopRight } from '../../icons/IconArrowTopRight';
import { IconPhone } from '../../icons/IconPhone';
import styles from './HomePage.module.css';

export const HomePage = () => {
	return (
		<Page>
			<SchoolExcursions />
			<Excursions />
			<FormAndCareerGuidanceExcursions />
			<div className={styles.iconPhoneWrapper}>
				<IconButton className={styles.iconButton} Icon={<IconPhone />} />
			</div>
			<Advantages />
			<ChildrenAmount />
			<PaymentMethod />
			<Reviews />
			<div className={styles.chooseButtonWrapper}>
				<Button
					backgroundColor='blue-500'
					cornerIcon={<IconArrowTopRight fill='#BDD4E2' />}
				>
					Выбрать экскурсию
				</Button>
			</div>
		</Page>
	);
};
