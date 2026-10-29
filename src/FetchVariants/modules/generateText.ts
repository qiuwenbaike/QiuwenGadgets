import {VARIANTS} from './constant';

const generateText = (string: string) =>
	`<ul id="fetchvariants">${VARIANTS.map((variant) => `<li id="${variant}">-{${variant}|${string}}-</li>`)}</ul>`;

export {generateText};
