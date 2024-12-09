import { HttpRequestMethod } from './methods';

export type RouteMetadata = {
		route: string;
		method: HttpRequestMethod;
		handler: Function;
}

export enum MetadataKeys {
	METHOD = 'method',
	PATH = 'path',
	ROUTES = 'routes',
	MIDDLEWARE = 'middleware',
	VALIDATOR = 'validator',
	AUTHENTICATOR = 'authenticator'
}