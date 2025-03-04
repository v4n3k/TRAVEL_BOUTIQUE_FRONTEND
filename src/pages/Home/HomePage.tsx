import {
	Advantages,
	ChildrenAmount,
	FormAndCareerGuidanceExcursions,
	SchoolExcursions,
} from '../../blocks/home';
import { ExcursionsList } from '../../components/excursion';
import { IconButton, Page } from '../../components/ui';
import { IconPhone } from '../../icons/IconPhone';
import styles from './HomePage.module.css';

export const HomePage = () => {
	return (
		<Page>
			<SchoolExcursions />
			<ExcursionsList />
			<FormAndCareerGuidanceExcursions />
			<div className={styles.iconPhoneWrapper}>
				<IconButton className={styles.iconButton} Icon={<IconPhone />} />
			</div>

			<Advantages />
			<ChildrenAmount />
		</Page>
	);
};
