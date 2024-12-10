import 'reflect-metadata';
import { HttpRequestMethod, MetadataKeys } from '../types';
import { defineMetadata } from '../managers/metadataManager';
import { Request, Response } from 'express';
import { HttpError } from '../types/errors/HttpError';
import { isEmpty } from 'lodash'

/**
 * @description Decorator factory function that returns a decorator function
 * @param {HttpRequestMethod} method
 * @returns {MethodDecorator}
 */
export const routeMapper = (method: HttpRequestMethod) => {
  return (path: string = '/') => {
    return function (
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<any>
    ) {

    const originalMethod = descriptor.value as Function;

		// Handle the return value of the function and use it to send response
		descriptor.value = function(...args: [Request, Response, ...any]) {
			const res = args[1];
      try {
			  const returnValue = originalMethod.apply(this, args);
      	
        if (returnValue instanceof Promise) {
          return returnValue.then((data) => res.send(data)).catch((err) => res.status(500).send(err));
        } else {
          return res.send(returnValue);
        }
      } catch (err: any) {
        if (err instanceof HttpError) {
          return res.status(err.status).send(isEmpty(err.payload) ? err : err.payload);
        } else {
          return res.status(500).send({ message: err.message || 'Internal Server Error' });
        }
      }

      // TODO Add optional error handler to handle errors

		}

    defineMetadata(MetadataKeys.PATH, path, target, propertyKey);
    defineMetadata(MetadataKeys.METHOD, method, target, propertyKey);
    };
  };
};
