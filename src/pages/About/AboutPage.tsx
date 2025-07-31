import { Helmet } from 'react-helmet-async';
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
			<Helmet>
				<title>О нас | Узнайте больше о нашей компании экскурсий</title>
				<meta
					name='description'
					content='Узнайте больше о нашей компании, наших ценностях, гарантиях качества, методах оплаты и услугах. Мы предлагаем широкий выбор экскурсий для школьников и взрослых.'
				/>
				<meta
					name='keywords'
					content='о нас, о компании, экскурсии, школьники, взрослые, гарантии, оплата, услуги'
				/>
				<link
					rel='canonical'
					href='https://xn----9sbelapeid5cyafedff1g.xn--p1ai/about'
				/>
			</Helmet>

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
