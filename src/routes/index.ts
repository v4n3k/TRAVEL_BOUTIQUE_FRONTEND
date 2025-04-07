import {
	AboutPage,
	AdminCreateNewCategoryPage,
	AdminCreateNewExcursionPage,
	AdminEditExcursion,
	AdminPage,
	BlogPage,
	CategoriesPage,
	ExcursionPage,
	ExcursionsPage,
	HomePage,
	InfoPage,
	ServicePage,
	SignInPage,
} from '../pages';
import { RouteEntity, RouteName } from '../types/routes';

export const publicRoutes: RouteEntity[] = [
	{ path: RouteName.HOME, Component: HomePage },
	{ path: RouteName.EXCURSIONS, Component: ExcursionsPage },
	{ path: RouteName.EXCURSION, Component: ExcursionPage },
	{ path: RouteName.ABOUT, Component: AboutPage },
	{ path: RouteName.CATEGORIES, Component: CategoriesPage },
	{ path: RouteName.BLOG, Component: BlogPage },
	{ path: RouteName.INFO, Component: InfoPage },
	{ path: RouteName.SERVICE, Component: ServicePage },
	{ path: RouteName.SIGN_IN, Component: SignInPage },
];

export const privateRoutes: RouteEntity[] = [
	{ path: RouteName.ADMIN, Component: AdminPage },
	{
		path: RouteName.ADMIN_CREATE_NEW_EXCURSION,
		Component: AdminCreateNewExcursionPage,
	},
	{
		path: RouteName.ADMIN_EDIT_EXCURSION,
		Component: AdminEditExcursion,
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_CATEGORY,
		Component: AdminCreateNewCategoryPage,
	},
];
