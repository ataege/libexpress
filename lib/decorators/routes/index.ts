import { routeMapper } from '../routeMapper';
import { HttpRequestMethod } from '../../types/methods';

/**
 * @description Decorator that maps a route to a GET request
 * @param {string} path
 * @returns {MethodDecorator}
 */
export const Get = routeMapper(HttpRequestMethod.GET);

/**
 * @description Decorator that maps a route to a POST request
 * @param {string} path
 * @returns {MethodDecorator}
 */
export const Post = routeMapper(HttpRequestMethod.POST);

/**
 * @description Decorator that maps a route to a PUT request
 * @param {string} path
 * @returns {MethodDecorator}
 */
export const Put = routeMapper(HttpRequestMethod.PUT);

/**
 * @description Decorator that maps a route to a DELETE request
 * @param {string} path
 * @returns {MethodDecorator}
 */
export const Delete = routeMapper(HttpRequestMethod.DELETE);

/**
 * @description Decorator that maps a route to a PATCH request
 * @param {string} path
 * @returns {MethodDecorator}
 */
export const Patch = routeMapper(HttpRequestMethod.PATCH);