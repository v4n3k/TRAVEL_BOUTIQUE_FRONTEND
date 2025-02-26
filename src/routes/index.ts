import {
	AboutPage,
	AdminCreateNewExcursionPage,
	AdminPage,
	ExcursionsPage,
	HomePage,
	SignInPage,
} from '../pages';
import { Route, RouteName } from '../types/routes';

export const publicRoutes: Route[] = [
	{ path: RouteName.HOME, Component: HomePage },
	{ path: RouteName.EXCURSIONS, Component: ExcursionsPage },
	{ path: RouteName.ABOUT, Component: AboutPage },
	{ path: RouteName.SIGN_IN, Component: SignInPage },
];

export const privateRoutes: Route[] = [
	{ path: RouteName.ADMIN, Component: AdminPage },
	{
		path: RouteName.ADMIN_CREATE_NEW_EXCURSION,
		Component: AdminCreateNewExcursionPage,
	},
];
