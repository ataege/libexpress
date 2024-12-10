import { RequestHandler } from 'express';
import { MetadataKeys } from '../types';
import { defineMetadata } from '../managers/metadataManager';

export const Use = (...middlewares: RequestHandler[]): MethodDecorator => {
	return function (target: Object, propertyKey: string | symbol, _descriptor: TypedPropertyDescriptor<any>) {
		defineMetadata<RequestHandler[]>(MetadataKeys.MIDDLEWARE, middlewares, target, propertyKey);
	}
};