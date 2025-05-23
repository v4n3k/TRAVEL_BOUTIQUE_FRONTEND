import { useQuery } from '@tanstack/react-query';
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
