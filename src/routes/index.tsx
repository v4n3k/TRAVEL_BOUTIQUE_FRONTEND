import { withLazy } from '../hocs/withLazy';
import { BlogPage } from '../pages/Blog/BlogPage';
import { InfoPage } from '../pages/Info/InfoPage';
import { ServicePage } from '../pages/Service/ServicePage';
import { RouteEntity, RouteName } from '../types/routes';

export const publicRoutes: RouteEntity[] = [
	{
		path: RouteName.HOME,
		Component: withLazy('../pages/Home/HomePage'),
		isPrivate: false,
	},
	{
		path: RouteName.CATEGORIES,
		Component: withLazy('../pages/Categories/CategoriesPage'),
		isPrivate: false,
	},
	{
		path: RouteName.CATEGORY,
		Component: withLazy('../pages/Category/CategoryPage'),
		isPrivate: false,
	},
	{
		path: RouteName.ABOUT,
		Component: withLazy('../pages/About/boutPage'),
		isPrivate: false,
	},
	{
		path: RouteName.EXCURSION,
		Component: withLazy('../pages/Excursion/ExcursionPage'),
		isPrivate: false,
	},
	{
		path: RouteName.SEARCHED_EXCURSIONS,
		Component: withLazy('../pages/SearchedExcursions/SearchedExcursionsPage'),
		isPrivate: false,
	},
	{
		path: RouteName.SIGN_IN,
		Component: withLazy('../pages/SignIn/SignInPage'),
		isPrivate: false,
	},
	{ path: RouteName.BLOG, Component: BlogPage, isPrivate: false },
	{ path: RouteName.INFO, Component: InfoPage, isPrivate: false },
	{ path: RouteName.SERVICE, Component: ServicePage, isPrivate: false },
];

export const privateRoutes: RouteEntity[] = [
	{
		path: RouteName.ADMIN,
		Component: withLazy('../pages/Admin/AdminPage'),
		isPrivate: true,
	},
	{
		path: RouteName.ADMIN_CATEGORY,
		Component: withLazy('../pages/AdminCategory/AdminCategoryPage'),
		isPrivate: true,
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_EXCURSION,
		Component: withLazy(
			'../pages/AdminCreateNewExcursion/AdminCreateNewExcursionPage'
		),
		isPrivate: true,
	},
	{
		path: RouteName.ADMIN_EDIT_EXCURSION,
		Component: withLazy('../pages/AdminEditExcursion/AdminEditExcursionPage'),
		isPrivate: true,
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_CATEGORY,
		Component: withLazy(
			'../pages/AdminCreateNewCategory/AdminCreateNewCategoryPage'
		),
		isPrivate: true,
	},
];
