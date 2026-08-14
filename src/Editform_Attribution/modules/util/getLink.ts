import {VALID_INTERWIKI_PREFIX} from '../constant';

const getLink = ({link, text}: {link: string; text?: string}): string => {
	const VALID_INTERWIKI_LINK_REGEX = new RegExp(`^:?(${VALID_INTERWIKI_PREFIX.join('|')})`, 'i');

	if (VALID_INTERWIKI_LINK_REGEX.test(link)) {
		link = `:${link.replace(/^:/, '')}`; // 如果链接是有效的Interwiki链接，则在开头添加冒号以防止它被解析为内部链接
		if (text) {
			return `[[${link}|${text}]]`;
		}
		return `[[${link}]]`;
	}

	// 当链接本身就是有效的内部链接，但不是Interwiki链接时
	if (link.startsWith('[[') && link.endsWith(']]')) {
		return link;
	}

	return encodeURI(decodeURI(link)); // 当链接不是有效的Interwiki链接时，返回编码后的链接
};

export {getLink};
