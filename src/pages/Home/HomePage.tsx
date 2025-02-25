import {
	FormAndCareerGuidanceExcursions,
	SchoolExcursions,
} from '../../blocks/home';
import { ExcursionsList } from '../../components/excursion';
import styles from './HomePage.module.css';

export const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<SchoolExcursions />
			<ExcursionsList />
			<FormAndCareerGuidanceExcursions />
		</div>
	);
};
