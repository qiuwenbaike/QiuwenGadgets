// minified code dependency functions
class Pare_str {
	str: string;
	left: string | undefined;
	delim: string | undefined;
	right: string | undefined;

	constructor(pare_string: string, config: string | string[]) {
		this.str = pare_string;
		this.left = '(';
		this.delim = ':';
		this.right = ')';
		if (typeof config !== 'string') {
			config = String(config);
		}
		if (
			pare_string.length > 6 &&
			/[#%@][Ss][Ee][Tt]/.test(pare_string.slice(0, 4)) &&
			!config.includes('ignore-set')
		) {
			[, , , , this.left, this.delim, this.right] = pare_string;
			if (this.left === this.right || this.left === this.delim || this.right === this.delim) {
				throw new SyntaxError("Pound set statement has repetitive characters. E.g. '#set|:|' is illegal.");
			}
		}
	}

	find(key: string): string | null | undefined {
		key = this.left + key + this.delim;
		if (!this.str.includes(key)) {
			return null;
		}
		return this.str.split(key)[1]?.split(this.right as string)[0];
	}
}

export {Pare_str};
