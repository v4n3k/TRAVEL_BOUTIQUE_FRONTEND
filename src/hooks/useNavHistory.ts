import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteBase, RouteName } from '../types';
import { NavHistoryLink } from '../types/hooks';

export const useNavHistory = () => {
	const { pathname } = useLocation();
	const [navHistory, setNavHistory] = useState<NavHistoryLink[]>([]);

	const [category, setCategory] = useState<string | null>(
		localStorage.getItem('categoryName')
	);

	useEffect(() => {
		if (pathname === RouteBase.CATEGORY) {
			const storedCategory = localStorage.getItem('categoryName');
			if (storedCategory !== category) {
				setCategory(storedCategory);
			}
		}
	}, [pathname, category, setCategory]);

	useEffect(() => {
		const navConfig = [
			{
				condition: pathname.includes(RouteBase.EXCURSION),
				link: { label: 'Категории', to: RouteName.CATEGORIES },
			},
			{
				condition: pathname.includes(RouteName.ADMIN),
				link: { label: 'Админ-панель', to: RouteName.ADMIN },
			},
			{
				condition: pathname.includes(RouteBase.CATEGORY),
				link: { label: 'Экскурсии', to: RouteName.CATEGORIES },
			},
			{
				condition: category,
				link: { label: String(category), to: RouteName.CATEGORY },
			},
			{
				condition: pathname.includes(RouteName.ADMIN_CREATE_NEW_CATEGORY),
				link: {
					label: 'Создание новой категории',
					to: RouteName.ADMIN_CREATE_NEW_CATEGORY,
				},
			},
			{
				condition: pathname.includes(RouteName.ADMIN_CREATE_NEW_EXCURSION),
				link: {
					label: 'Создание нового мероприятния',
					to: RouteName.ADMIN_CREATE_NEW_EXCURSION,
				},
			},
			{
				condition: pathname.includes(RouteBase.ADMIN_EDIT_EXCURSION),
				link: {
					label: 'Редактировать карточку экскурсии',
					to: pathname as RouteName,
				},
			},
		];

		const newNavHistory = navConfig
			.filter(item => item.condition)
			.map((item, index) => ({ ...item.link, id: index + 1 }));

		setNavHistory(newNavHistory);
	}, [pathname, category]);

	return navHistory;
};
