import { AboutPage } from '../pages/About/AboutPage';
import { AdminPage } from '../pages/Admin/AdminPage';
import { ExcursionPage } from '../pages/ExcursionsPage/ExcursionPage';
import { HomePage } from '../pages/Home/HomePage';
import { SignInPage } from '../pages/SignIn/SignInPage';
import { Route, RouteName } from '../types/routes';

export const publicRoutes: Route[] = [
	{ path: RouteName.HOME, Component: HomePage },
	{ path: RouteName.EXCURSIONS, Component: ExcursionPage },
	{ path: RouteName.ABOUT, Component: AboutPage },

	{ path: RouteName.SIGN_IN, Component: SignInPage },
];

export const privateRoutes: Route[] = [
	{ path: RouteName.ADMIN, Component: AdminPage },
];
