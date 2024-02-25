// 合并多个wikitext字符串，并以换行分隔
const luaAddText = (inputString: string, newString: string, isEscape: boolean = false): string => {
	if (newString) {
		if (inputString) {
			inputString += '\n';
		}

		if (isEscape) {
			const [escapeString] = JSON.parse(
				`[${JSON.stringify(
					// Lua不支持\u、\x转义字符；排除相关转换
					newString.replace(/\\([ux])/gi, '$1')
				).replace(/\\\\/g, '\\')}]`
			) as [string];
			newString = escapeString;
		}

		inputString += newString;
	}

	return inputString;
};

export {luaAddText};
