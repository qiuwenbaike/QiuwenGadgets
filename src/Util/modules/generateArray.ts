type GenerateArray = (...args: unknown[]) => unknown[];

const generateArray: GenerateArray = (...args) => {
	const array: unknown[] = [];
	for (const arg of args) {
		if (Array.isArray(arg)) {
			for (const element of arg) {
				array[array.length] = element; // Replace `array.push()` to avoid polyfilling core-js
			}
		} else {
			array[array.length] = arg; // Replace `array.push()` to avoid polyfilling core-js
		}
	}
	return array;
};

export {type GenerateArray, generateArray};
