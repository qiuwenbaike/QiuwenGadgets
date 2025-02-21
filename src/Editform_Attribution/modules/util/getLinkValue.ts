import {VALID_INTERWIKI_PREFIX} from '../constant';

const getLinkValue = (value: string): string => {
	const VALID_INTERWIKI_LINK_REGEX = new RegExp(`^:?(${VALID_INTERWIKI_PREFIX.join('|')})`, 'i');

	if (VALID_INTERWIKI_LINK_REGEX.test(value)) {
		return `[[${value}]]`;
	}

	return encodeURI(decodeURI(value));
};

export {getLinkValue};
