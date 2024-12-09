import { RequestHandler } from 'express';
import { MetadataKeys } from '../types';

export const Use = (middleware: RequestHandler): MethodDecorator => {
	return function (target: Object, propertyKey: string | symbol, _desc: TypedPropertyDescriptor<any>) {
		Reflect.defineMetadata(MetadataKeys.MIDDLEWARE, middleware, target, propertyKey);
	}
};