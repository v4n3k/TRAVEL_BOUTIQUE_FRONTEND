export interface Route {
	path: string;
	Component: React.ComponentType;
}

export enum RouteBase {
	HOME = '/',
	EXCURSIONS = '/excursions',
	EXCURSION = '/excursion',
	ABOUT = '/about',
	CATEGORIES = '/categories',
	BLOG = '/blog',
	INFO = '/info',
	SERVICE = '/service',
	SIGN_IN = '/sign_in',
	ADMIN = '/admin',
	ADMIN_CREATE_NEW_EXCURSION = '/admin_create_new_excursion',
	ADMIN_CREATE_NEW_CATEGORY = '/admin_create_new_category',
}

const idParam = '/:id';

export enum RouteName {
	HOME = RouteBase.HOME,
	EXCURSIONS = RouteBase.EXCURSIONS,
	EXCURSION = RouteBase.EXCURSION + idParam,
	ABOUT = RouteBase.ABOUT,
	CATEGORIES = RouteBase.CATEGORIES,
	BLOG = RouteBase.BLOG,
	INFO = RouteBase.INFO,
	SERVICE = RouteBase.SERVICE,
	SIGN_IN = RouteBase.SIGN_IN,
	ADMIN = RouteBase.ADMIN,
	ADMIN_CREATE_NEW_EXCURSION = RouteBase.ADMIN_CREATE_NEW_EXCURSION,
	ADMIN_CREATE_NEW_CATEGORY = RouteBase.ADMIN_CREATE_NEW_CATEGORY,
}
