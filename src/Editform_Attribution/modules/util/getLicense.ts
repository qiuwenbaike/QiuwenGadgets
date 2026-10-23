import {LICENSES} from '../constant';
import {getLink} from './getLink';

const getLicense = (license: string): string => {
	const selected = LICENSES.find(({data}) => data === license);
	return selected ? getLink({link: selected.data, text: selected.label}) : '';
};

const updateWpLicense = ({$body, license}: {$body: JQuery<HTMLElement>; license: string}): void => {
	const $wpLicense =
		$body.find<HTMLInputElement>('input[name=wpLicense]') ??
		$('<input>')
			.attr({
				id: 'wpLicense',
				name: 'wpLicense',
				type: 'hidden',
				value: '',
			})
			.prependTo($body);
	$wpLicense.val(getLicense(license));
};

export {getLicense, updateWpLicense};
