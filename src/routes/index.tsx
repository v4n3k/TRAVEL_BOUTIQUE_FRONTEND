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
		Component: withLazy(() => import('../pages/Categories/CategoriesPage')),
	},
	{
		path: RouteName.CATEGORY,
		Component: withLazy(() => import('../pages/Category/CategoryPage')),
	},
	{
		path: RouteName.ABOUT,
		Component: withLazy(() => import('../pages/About/AboutPage')),
	},
	{
		path: RouteName.EXCURSION,
		Component: withLazy(() => import('../pages/Excursion/ExcursionPage')),
	},
	{
		path: RouteName.SEARCHED_EXCURSIONS,
		Component: withLazy(() =>
			import('../pages/SearchedExcursions/SearchedExcursionsPage')
		),
	},
	{
		path: RouteName.SIGN_IN,
		Component: withLazy(() => import('../pages/SignIn/SignInPage')),
	},
	{ path: RouteName.BLOG, Component: BlogPage }, // Этот компонент не lazy
	{ path: RouteName.INFO, Component: InfoPage }, // Этот компонент не lazy
	{ path: RouteName.SERVICE, Component: ServicePage }, // Этот компонент не lazy
];

export const privateRoutes: RouteEntity[] = [
	{
		path: RouteName.ADMIN,
		Component: privateRoute(withLazy(() => import('../pages/Admin/AdminPage'))),
	},
	{
		path: RouteName.ADMIN_CATEGORY,
		Component: privateRoute(
			withLazy(() => import('../pages/AdminCategory/AdminCategoryPage'))
		),
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_EXCURSION,
		Component: privateRoute(
			withLazy(() =>
				import('../pages/AdminCreateNewExcursion/AdminCreateNewExcursionPage')
			)
		),
	},
	{
		path: RouteName.ADMIN_EDIT_EXCURSION,
		Component: privateRoute(
			withLazy(() =>
				import('../pages/AdminEditExcursion/AdminEditExcursionPage')
			)
		),
	},
	{
		path: RouteName.ADMIN_CREATE_NEW_CATEGORY,
		Component: privateRoute(
			withLazy(() =>
				import('../pages/AdminCreateNewCategory/AdminCreateNewCategoryPage')
			)
		),
	},
];

export const allRoutes = [...publicRoutes, ...privateRoutes];
