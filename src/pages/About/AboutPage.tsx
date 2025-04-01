import {
	About,
	PaymentMethod,
	QualityGuarantees,
	Services,
	TransportRules,
} from '../../blocks/about';
import { Reviews } from '../../blocks/home';
import { Page } from '../../components/ui';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
	return (
		<Page className={styles.aboutPage}>
			<About />
			<Reviews />
			<QualityGuarantees />
			<TransportRules />
			<PaymentMethod />
			<Services />
		</Page>
	);
};
