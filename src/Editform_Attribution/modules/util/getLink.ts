import {VALID_INTERNAL_PREFIX, VALID_INTERWIKI_PREFIX} from '../constant';
import {getMessage} from '../i18n';

const getLink = ({link, text}: {link: string; text?: string}): string => {
	const VALID_INTERWIKI_LINK_REGEX = new RegExp(`^:?(${VALID_INTERWIKI_PREFIX.join('|')})`, 'i');
	const VALID_INTERNAL_PREFIX_REGEX = new RegExp(`^:?(${VALID_INTERNAL_PREFIX.join('|')})`, 'i');

	// 当许可证选择“自定义”，返回占位符
	if (
		[getMessage('Replace With License'), getMessage('Other License')].includes(link) ||
		(text && [getMessage('Replace With License'), getMessage('Other License')].includes(text))
	) {
		return getMessage('Replace With License');
	}

	// 当链接本身就是有效的内部链接，但不是Interwiki链接时
	if (link.startsWith('[[') && link.endsWith(']]')) {
		return link;
	}

	// 当链接本身就是有效的URL时
	if (link.startsWith('http://') || link.startsWith('https://')) {
		return `[${encodeURI(decodeURI(link))} ]`; // 当链接不是有效的Interwiki链接时，返回编码后的链接
	}

	if (VALID_INTERWIKI_LINK_REGEX.test(link)) {
		link = `:${link.replace(/^:/, '')}`; // 如果链接是有效的Interwiki链接，则在开头添加冒号以防止它被解析为内部链接
		if (text) {
			return `[[${link}|${text}]]`;
		}
		return `[[${link}]]`;
	}

	if (VALID_INTERNAL_PREFIX_REGEX.test(link)) {
		link = `:${link.replace(/^:/, '')}`; // 如果链接是有效的内部链接，则在开头添加冒号以防止它被解析为内部链接
		if (text) {
			return `[[${link}|${text}]]`;
		}
		return `[[${link}]]`;
	}

	return link; // 当链接不是链接时，返回原文
};

export {getLink};
