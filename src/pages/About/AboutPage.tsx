import {
	About,
	PaymentMethod,
	QualityGuarantees,
	Services,
	TransportRules,
} from '../../blocks/about';
import { Reviews } from '../../blocks/home';
import { Page } from '../../components/ui';

export const AboutPage = () => {
	return (
		<Page>
			<About />
			<Reviews />
			<QualityGuarantees />
			<TransportRules />
			<PaymentMethod />
			<Services />
		</Page>
	);
};
