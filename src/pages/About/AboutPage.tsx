import { About } from '../../blocks/about/About/About';
import { PaymentMethod } from '../../blocks/about/PaymentMethod/PaymentMethod';
import { QualityGuarantees } from '../../blocks/about/QualityGuarantees/QualityGuarantees';
import { Services } from '../../blocks/about/Services/Services';
import { TransportRules } from '../../blocks/about/TransportRules/TransportRules';
import { Reviews } from '../../blocks/home/Reviews/Reviews';
import { Page } from '../../components/ui/Page/Page';

const AboutPage = () => {
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

export default AboutPage;
