export function defineMetadata<T = any>(metadataKey: any, metadataValue: T, target: Object, propertyKey: string | symbol): void {
	Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
}

export function getMetadata<T = any>(target: object, key: string | symbol): T {
	return Reflect.getMetadata(key, target) as T;
}