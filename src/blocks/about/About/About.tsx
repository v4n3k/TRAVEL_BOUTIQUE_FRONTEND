import img from '../../../../assets/images/WhatsAppImage.png';
import { Image, Section, TextContainer, Title } from '../../../components/ui';
import styles from './About.module.css';

export const About = () => {
	return (
		<Section>
			<Title>О нас</Title>
			<div className={styles.container}>
				<div className={styles.texts}>
					<TextContainer>
						<p className={styles.text}>
							Наша компания является туроператором, мы сами создаем
							экскурсионные туры в Москве и по регионам России (Казань, Тюмень,
							Екатеринбург, Невьянск, Реж, Калининград, Карелия, Золотое Кольцо,
							Сочи, Санкт-Петербург и другие), а это значит, что мы знаем о них
							все!
						</p>
					</TextContainer>
					<TextContainer>
						<p className={styles.text}>
							С уверенностью можем сказать, что мы готовы удовлетворить самые
							разнообразные запросы, а наши опытные специалисты всегда готовы
							проконсультировать вас, ведь главная головная боль человека,
							который собирается в путешествие: как выбрать тур и организовать
							маршрут?!
						</p>
					</TextContainer>
				</div>
				<div>
					<Image className={styles.image} src={img} />
				</div>
			</div>
		</Section>
	);
};
