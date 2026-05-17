type ClassMwUri = typeof MwUri;

class MwUri extends URL {
	public extend(object: {[key: string]: string}) {
		for (const [key, value] of Object.entries(object)) {
			this.searchParams.set(key, value);
		}
		return this;
	}
	public getRelativePath() {
		return this.pathname + this.search + this.hash;
	}
}

export {type ClassMwUri, MwUri};
