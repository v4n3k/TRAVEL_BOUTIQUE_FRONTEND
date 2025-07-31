import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { categoryApi } from '../../api/category/categoryApi';
import { Categories } from '../../components/category/Categories/Categories';
import { Page } from '../../components/ui/Page/Page';

const CategoriesPage = () => {
	const { data: categories } = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryApi.getAll(),
	});

	if (!categories) return;

	return (
		<Page>
			<Helmet>
				<title>Категории экскурсий | Выберите свою идеальную экскурсию</title>
				<meta
					name='description'
					content='Обзор всех категорий экскурсий: города, профориентационные экскурсии, туры выходного дня. Найдите идеальную экскурсию для себя и своих близких!'
				/>
				<meta
					name='keywords'
					content='категории экскурсий, города, профориентационные экскурсии, туры выходного дня, выбор экскурсий'
				/>
				<link
					rel='canonical'
					href='https://xn----9sbelapeid5cyafedff1g.xn--p1ai/categories'
				/>
			</Helmet>

			<Categories
				renderTitle={() => <>Города</>}
				categories={categories?.cities}
			/>
			<Categories
				renderTitle={() => <>Профориентационные экскурсии</>}
				categories={categories?.careerGuidance}
				withName={false}
				canAutoScroll
			/>
			<Categories
				renderTitle={() => (
					<>
						Туры выходного дня <span>для семей</span>
					</>
				)}
				categories={categories?.weekends}
				withIcon={false}
				textUnderImage
			/>
		</Page>
	);
};

export default CategoriesPage;
