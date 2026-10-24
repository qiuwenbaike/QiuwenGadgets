import {processElement} from './util/processElement';
import {refarea} from './FoldRef.module.less';

const foldRef = (): void => {
	// for articles using <references />, {{Reflist}}s or similar templates
	const $foldRef = document.querySelectorAll('.mw-references-wrap,.refbegin');
	for (const element of $foldRef) {
		if (
			element.parentElement?.classList.contains(refarea as string) ||
			element.parentElement?.parentElement?.classList.contains(refarea as string)
		) {
			continue;
		}

		const height: number = element.clientHeight ?? 0;
		if (!height || height <= window.innerHeight * 0.9) {
			continue;
		}

		// if greater than 90% of the viewport height, fold the references list
		processElement(element);
	}
};

export {foldRef};
