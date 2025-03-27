import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteName } from '../types';
import { NavHistoryLink } from '../types/hooks';

export const useNavHistory = () => {
	const { pathname } = useLocation();
	const [navHistory, setNavHistory] = useState<NavHistoryLink[]>([]);

	const category = localStorage.getItem('category');

	useEffect(() => {
		const navConfig = [
			{
				condition: pathname.includes(RouteName.EXCURSIONS),
				link: { label: 'Категории', to: RouteName.EXCURSIONS },
			},
			{
				condition: pathname.includes('admin'),
				link: { label: 'Админ-панель', to: RouteName.ADMIN },
			},
			{
				condition: category,
				link: { label: String(category), to: RouteName.EXCURSIONS },
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
		];

		const newNavHistory = navConfig
			.filter(item => item.condition)
			.map((item, index) => ({ ...item.link, id: index + 1 }));

		setNavHistory(newNavHistory);
	}, [pathname, category]);

	return navHistory;
};
