import 'reflect-metadata';
import { HttpRequestMethod, MetadataKeys, RouteDecoratorFactory } from '../types';

/**
 * @description Decorator factory function that returns a decorator function
 * @param {HttpRequestMethod} method
 * @returns {MethodDecorator}
 */
export const routeMapper = (method: HttpRequestMethod): RouteDecoratorFactory => {
	return (path: string = '/') => {
		return (target: Object, propertyKey: string | symbol, desc: PropertyDescriptor) => {
			Reflect.defineMetadata(MetadataKeys.PATH, path, target, propertyKey)
			Reflect.defineMetadata(MetadataKeys.METHOD, method, target, propertyKey)
		};
	};
}