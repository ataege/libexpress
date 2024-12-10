// @ts-nocheck
import 'reflect-metadata';
import { MetadataKeys, HttpRequestMethod, routeMapper } from '../lib';
const Get = routeMapper(HttpRequestMethod.GET);
const Post = routeMapper(HttpRequestMethod.POST);
const Put = routeMapper(HttpRequestMethod.PUT);
const Delete = routeMapper(HttpRequestMethod.DELETE);
const Patch = routeMapper(HttpRequestMethod.PATCH);

describe('routeMapper', () => {
  it('should set path and method metadata for GET', () => {
    class TestController {
      @Get('/some-path')
      someMethod() {}
    }

    const path = Reflect.getMetadata(MetadataKeys.PATH, TestController.prototype, 'someMethod');
    const method = Reflect.getMetadata(MetadataKeys.METHOD, TestController.prototype, 'someMethod');
    expect(path).toBe('/some-path');
    expect(method).toBe(HttpRequestMethod.GET);
  });

  it('should set path and method metadata for POST', () => {
    class TestController {
      @Post('/some-path')
      someMethod() {}
    }

    const path = Reflect.getMetadata(MetadataKeys.PATH, TestController.prototype, 'someMethod');
    const method = Reflect.getMetadata(MetadataKeys.METHOD, TestController.prototype, 'someMethod');
    expect(path).toBe('/some-path');
    expect(method).toBe(HttpRequestMethod.POST);
  });

  it('should set path and method metadata for PUT', () => {
    class TestController {
      @Put('/some-path')
      someMethod() {}
    }

    const path = Reflect.getMetadata(MetadataKeys.PATH, TestController.prototype, 'someMethod');
    const method = Reflect.getMetadata(MetadataKeys.METHOD, TestController.prototype, 'someMethod');
    expect(path).toBe('/some-path');
    expect(method).toBe(HttpRequestMethod.PUT);
  });

  it('should set path and method metadata for DELETE', () => {
    class TestController {
      @Delete('/some-path')
      someMethod() {}
    }

    const path = Reflect.getMetadata(MetadataKeys.PATH, TestController.prototype, 'someMethod');
    const method = Reflect.getMetadata(MetadataKeys.METHOD, TestController.prototype, 'someMethod');
    expect(path).toBe('/some-path');
    expect(method).toBe(HttpRequestMethod.DELETE);
  });

  it('should set path and method metadata for PATCH', () => {
    class TestController {
      @Patch('/some-path')
      someMethod() {}
    }

    const path = Reflect.getMetadata(MetadataKeys.PATH, TestController.prototype, 'someMethod');
    const method = Reflect.getMetadata(MetadataKeys.METHOD, TestController.prototype, 'someMethod');
    expect(path).toBe('/some-path');
    expect(method).toBe(HttpRequestMethod.PATCH);
  });

  it('should default path to "/" if not provided', () => {
    class TestController {
      @Get()
      defaultMethod() {}
    }

    const path = Reflect.getMetadata(MetadataKeys.PATH, TestController.prototype, 'defaultMethod');
    const method = Reflect.getMetadata(MetadataKeys.METHOD, TestController.prototype, 'defaultMethod');
    expect(path).toBe('/');
    expect(method).toBe(HttpRequestMethod.GET);
  });

  it('should handle the return value of the function and use it to send response', async () => {
    const mockResponse = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    class TestController {
      @(routeMapper(HttpRequestMethod.GET)('/test'))
      async someMethod(_req: any, _res: any) {
        return 'test response';
      }
    }

    const controller = new TestController();
    await controller.someMethod({}, mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith('test response');
  });

  it('should handle promise rejection and send error response', async () => {
    const mockResponse = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    class TestController {
      @(routeMapper(HttpRequestMethod.GET)('/test'))
      async someMethod(_req: any, _res: any) {
        throw new Error('test error');
      }
    }

    const controller = new TestController();
    await controller.someMethod({}, mockResponse);
    
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith(new Error('test error'));
  });
});

