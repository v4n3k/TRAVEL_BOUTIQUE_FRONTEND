import { useQuery } from '@tanstack/react-query';
import { categoryApi } from '../../api/category/categoryApi';
import { Categories } from '../../components/category';
import { Page } from '../../components/ui';
import { CategoriesByType, CategoryEntity } from '../../types';

export const mockCategories: CategoriesByType = {
	cities: [
		{
			id: 1,
			name: 'London',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 2,
			name: 'Paris',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 3,
			name: 'New York',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 4,
			name: 'Tokyo',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 5,
			name: 'Rome',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 1,
			name: 'London',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 2,
			name: 'Paris',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 3,
			name: 'New York',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 4,
			name: 'Tokyo',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 5,
			name: 'Rome',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 1,
			name: 'London',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 2,
			name: 'Paris',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 3,
			name: 'New York',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 4,
			name: 'Tokyo',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
		{
			id: 5,
			name: 'Rome',
			imgSrc: '../../../assets/images/Rectangle 27.png',
			type: 'cities',
		},
	],
	careerGuidance: [
		{
			id: 6,
			name: 'Software Engineering',
			imgSrc: '../../../assets/images/Rectangle 25.png',
			type: 'careerGuidance',
		},
	],
	weekends: [
		{
			id: 11,
			name: 'Hiking Trip',
			imgSrc: '../../../assets/images/Rectangle 33.png',
			type: 'weekends',
		},
		{
			id: 12,
			name: 'Beach Getaway',
			imgSrc: '../../../assets/images/Rectangle 33.png',
			type: 'weekends',
		},
		{
			id: 13,
			name: 'Camping Adventure',
			imgSrc: '../../../assets/images/Rectangle 33.png',
			type: 'weekends',
		},
		{
			id: 14,
			name: 'City Exploration',
			imgSrc: '../../../assets/images/Rectangle 33.png',
			type: 'weekends',
		},
	],
};

export const CategoriesPage = () => {
	const { data: categories, isLoading } = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryApi.getAll(),
	});

	console.log(categories, isLoading);

	if (!categories) return <></>;

	return (
		<Page>
			<Categories
				renderTitle={() => <>Города</>}
				categories={categories?.cities}
				expandable
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
