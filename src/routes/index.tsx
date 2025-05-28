import { privateRoute } from '../hocs/privateRoute';
import { withLazy } from '../hocs/withLazy';
import { BlogPage } from '../pages/Blog/BlogPage';
import HomePage from '../pages/Home/HomePage';
import { InfoPage } from '../pages/Info/InfoPage';
import { ServicePage } from '../pages/Service/ServicePage';
import { RouteEntity, RouteName } from '../types/routes';

export const publicRoutes: RouteEntity[] = [
	{
		path: RouteName.HOME,
		Component: HomePage,
	},
	{
		path: RouteName.CATEGORIES,
		Component: withLazy('../pages/Categories/CategoriesPage'),
	},
	{
		path: RouteName.CATEGORY,
		Component: withLazy('../pages/Category/CategoryPage'),
	},
	{
		path: RouteName.ABOUT,
		Component: withLazy('../pages/About/AboutPage'),
	},
	{
		path: RouteName.EXCURSION,
		Component: withLazy('../pages/Excursion/ExcursionPage'),
	},
	{
		path: RouteName.SEARCHED_EXCURSIONS,
		Component: withLazy('../pages/SearchedExcursions/SearchedExcursionsPage'),
	},
	{
		path: RouteName.SIGN_IN,
		Component: withLazy('../pages/SignIn/SignInPage'),
	},
	{ path: RouteName.BLOG, Component: BlogPage },
	{ path: RouteName.INFO, Component: InfoPage },
	{ path: RouteName.SERVICE, Component: ServicePage },
];

export const privateRoutes: RouteEntity[] = [
	{
		path: RouteName.ADMIN,
		Component: privateRoute(withLazy('../pages/Admin/AdminPage')),
	},
	{
		path: RouteName.ADMIN_CATEGORY,
		Component: privateRoute(
			withLazy('../pages/AdminCategory/AdminCategoryPage')
		),
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_EXCURSION,
		Component: privateRoute(
			withLazy('../pages/AdminCreateNewExcursion/AdminCreateNewExcursionPage')
		),
	},
	{
		path: RouteName.ADMIN_EDIT_EXCURSION,
		Component: privateRoute(
			withLazy('../pages/AdminEditExcursion/AdminEditExcursionPage')
		),
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_CATEGORY,
		Component: privateRoute(
			withLazy('../pages/AdminCreateNewCategory/AdminCreateNewCategoryPage')
		),
	},
];

export const allRoutes = [...publicRoutes, ...privateRoutes];
