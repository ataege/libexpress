import { RequestHandler } from 'express';
import { MetadataKeys } from '../lib';
import { Use } from '../lib/decorators/middleware';

describe('middleware', () => {
  it('should set middleware metadata', () => {
    const middleware1: RequestHandler = (_req, _res, next) => next();
    const middleware2: RequestHandler = (_req, _res, next) => next();

    class TestController {
      @Use(middleware1, middleware2)
      someMethod() {}
    }

    const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, TestController.prototype, 'someMethod');
    expect(middlewares).toEqual([middleware1, middleware2]);
  });
});