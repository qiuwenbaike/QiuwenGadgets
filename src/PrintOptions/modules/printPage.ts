import type {PrintOptions} from './types';
import {applyPrintStyles} from './applyPrintStyles';

const printPage = ($body: JQuery<HTMLBodyElement>, options: PrintOptions): void => {
	applyPrintStyles(options);
	const $footerLink = $body.find('div.printfooter a');
	$footerLink.text(decodeURI($footerLink.text()));
	window.print();
};

export {printPage};
