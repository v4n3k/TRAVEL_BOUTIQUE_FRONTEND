export interface Route {
	path: string;
	Component: React.ComponentType;
}

export enum RouteBase {
	HOME = '/',
	SIGN_IN = '/sign_in',
	ADMIN = '/admin',
	EXCURSIONS = '/excursions',
	ABOUT = '/about',
}

export enum RouteName {
	HOME = RouteBase.HOME,
	SIGN_IN = RouteBase.SIGN_IN,
	ADMIN = RouteBase.ADMIN,
	EXCURSIONS = RouteBase.EXCURSIONS,
	ABOUT = RouteBase.ABOUT,
}
