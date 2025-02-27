import {VALID_INTERWIKI_PREFIX} from '../constant';

const getLink = ({link, text}: {link: string; text?: string}): string => {
	const VALID_INTERWIKI_LINK_REGEX = new RegExp(`^:?(${VALID_INTERWIKI_PREFIX.join('|')})`, 'i');

	if (VALID_INTERWIKI_LINK_REGEX.test(link)) {
		link = `:${link.replace(/^:/, '')}`;
		if (text) {
			return `[[${link}|${text}]]`;
		}
		return `[[${link}]]`;
	}

	return encodeURI(decodeURI(link));
};

export {getLink};
