import {VARIANTS} from './constant';

const generateVariantResult = (result: Document): VariantResult =>
	Object.fromEntries([
		...VARIANTS.map((variant) => [variant, result.querySelector(`#${variant}`)?.textContent ?? '']),
	]);

export {generateVariantResult};
