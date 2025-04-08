export interface RouteEntity {
	path: string;
	Component: React.ComponentType;
	isPrivate?: boolean;
}

export enum RouteBase {
	HOME = '/',
	EXCURSION = '/excursion',
	ABOUT = '/about',
	CATEGORIES = '/categories',
	CATEGORY = '/category',
	BLOG = '/blog',
	INFO = '/info',
	SERVICE = '/service',
	SIGN_IN = '/sign_in',
	ADMIN = '/admin',
	ADMIN_CREATE_NEW_EXCURSION = '/admin_create_new_excursion',
	ADMIN_EDIT_EXCURSION = '/admin_edit_excursion',
	ADMIN_CREATE_NEW_CATEGORY = '/admin_create_new_category',
}

const idParam = '/:id';

export enum RouteName {
	HOME = RouteBase.HOME,
	EXCURSION = RouteBase.EXCURSION + idParam,
	ABOUT = RouteBase.ABOUT,
	CATEGORIES = RouteBase.CATEGORIES,
	CATEGORY = RouteBase.CATEGORY,
	BLOG = RouteBase.BLOG,
	INFO = RouteBase.INFO,
	SERVICE = RouteBase.SERVICE,
	SIGN_IN = RouteBase.SIGN_IN,
	ADMIN = RouteBase.ADMIN,
	ADMIN_CREATE_NEW_EXCURSION = RouteBase.ADMIN_CREATE_NEW_EXCURSION,
	ADMIN_EDIT_EXCURSION = RouteBase.ADMIN_EDIT_EXCURSION + idParam,
	ADMIN_CREATE_NEW_CATEGORY = RouteBase.ADMIN_CREATE_NEW_CATEGORY,
}
