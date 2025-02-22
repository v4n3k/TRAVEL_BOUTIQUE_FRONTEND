import { AdminPage } from '../pages/Admin/AdminPage';
import { HomePage } from '../pages/Home/HomePage';
import { SignInPage } from '../pages/SignIn/SignInPage';
import { Route, RouteName } from '../types/routes';

export const publicRoutes: Route[] = [
	{ path: RouteName.HOME, Component: HomePage },
	{ path: RouteName.SIGN_IN, Component: SignInPage },
];

export const privateRoutes: Route[] = [
	{ path: RouteName.ADMIN, Component: AdminPage },
];
