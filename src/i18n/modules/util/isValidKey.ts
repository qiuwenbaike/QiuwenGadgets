const isValidKey = (object: object, key: string | number | symbol): key is keyof typeof object => {
	return Object.hasOwn(object, key);
};

export {isValidKey};
