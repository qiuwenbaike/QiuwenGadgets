type UniqueArray = typeof uniqueArray;

const uniqueArray = function uniqueArray<T>(args: T[]): T[] {
	/**
	 * @see {@link https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/922982}
	 * @license CC-BY-SA-4.0
	 */
	return args.filter((item, index) => {
		return args.indexOf(item) === index;
	});
};

export {type UniqueArray, uniqueArray};
