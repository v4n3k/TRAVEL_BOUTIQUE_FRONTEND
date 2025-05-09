import {
	AboutPage,
	AdminCategoryPage,
	AdminCreateNewCategoryPage,
	AdminCreateNewExcursionPage,
	AdminEditExcursion,
	AdminPage,
	BlogPage,
	CategoriesPage,
	CategoryPage,
	ExcursionPage,
	HomePage,
	InfoPage,
	SearchedExcursionsPage,
	ServicePage,
	SignInPage,
} from '../pages';
import { RouteEntity, RouteName } from '../types/routes';

export const publicRoutes: RouteEntity[] = [
	{ path: RouteName.HOME, Component: HomePage, isPrivate: false },
	{ path: RouteName.CATEGORIES, Component: CategoriesPage, isPrivate: false },
	{ path: RouteName.CATEGORY, Component: CategoryPage, isPrivate: false },
	{ path: RouteName.ABOUT, Component: AboutPage, isPrivate: false },
	{ path: RouteName.EXCURSION, Component: ExcursionPage, isPrivate: false },
	{
		path: RouteName.SEARCHED_EXCURSIONS,
		Component: SearchedExcursionsPage,
		isPrivate: false,
	},
	{ path: RouteName.BLOG, Component: BlogPage, isPrivate: false },
	{ path: RouteName.INFO, Component: InfoPage, isPrivate: false },
	{ path: RouteName.SERVICE, Component: ServicePage, isPrivate: false },
	{ path: RouteName.SIGN_IN, Component: SignInPage, isPrivate: false },
];

export const privateRoutes: RouteEntity[] = [
	{ path: RouteName.ADMIN, Component: AdminPage, isPrivate: true },
	{
		path: RouteName.ADMIN_CATEGORY,
		Component: AdminCategoryPage,
		isPrivate: true,
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_EXCURSION,
		Component: AdminCreateNewExcursionPage,
		isPrivate: true,
	},
	{
		path: RouteName.ADMIN_EDIT_EXCURSION,
		Component: AdminEditExcursion,
		isPrivate: true,
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_CATEGORY,
		Component: AdminCreateNewCategoryPage,
		isPrivate: true,
	},
];
