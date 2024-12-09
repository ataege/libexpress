const metadataStorage: WeakMap<object, Map<string | symbol, any>> = new WeakMap();

export function defineMetadata(metadataKey: any, metadataValue: any, target: Object, _propertyKey: string | symbol) {
	let metadata = metadataStorage.get(target);
	if (!metadata) {
		metadata = new Map();
		metadataStorage.set(target, metadata);
	}

	metadata.set(metadataKey, metadataValue);
}

export function getMetadata(target: object, key: string | symbol) {
	return metadataStorage.get(target)?.get(key);
}