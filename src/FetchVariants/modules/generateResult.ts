import {VARIANTS} from './constant';

const generateResult = (result: Document): VariantResult =>
	Object.fromEntries([
		...VARIANTS.map((variant) => [variant, result.querySelector(`#${variant}`)?.textContent ?? '']),
	]);

export {generateResult};
