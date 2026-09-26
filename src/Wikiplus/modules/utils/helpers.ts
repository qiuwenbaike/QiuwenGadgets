/**
 * 解析URL参数列表
 * Parse URL query.
 *
 * @param {string} url
 * @param url
 */
export function parseQuery(url: string) {
	const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
	const params: Record<string, string> = {};
	let match: RegExpExecArray | null;
	while ((match = reg.exec(url))) {
		try {
			params[match[2] as string] = decodeURIComponent(match[3] as string);
		} catch {
			params[match[2] as string] = match[3] as string;
		}
	}
	return params;
}
