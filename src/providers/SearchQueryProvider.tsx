import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchStore } from '../stores/useSearchStore';
import { SearchQueryProviderProps } from '../types/props';
import { RouteBase } from '../types/routes';

const { EXCURSION, SEARCHED_EXCURSIONS } = RouteBase;

export const SearchQueryProvider = ({ children }: SearchQueryProviderProps) => {
	const { pathname } = useLocation();
	const setSearchQuery = useSearchStore(state => state.setSearchQuery);

	useEffect(() => {
		const isNotOnExcursionPages =
			!pathname?.includes(EXCURSION) &&
			!pathname?.includes(SEARCHED_EXCURSIONS);

		if (isNotOnExcursionPages) {
			setSearchQuery('');
		}
	}, [pathname, setSearchQuery]);

	return <>{children}</>;
};
