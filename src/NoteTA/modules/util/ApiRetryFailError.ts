class ApiRetryFailError extends Error {
	public readonly errors: string[];

	public constructor(errors: string[]) {
		super(`Api calls failed ${errors.length} time(s) in a row.`);
		this.name = 'ApiRetryFailError';
		this.errors = [...errors];
	}
}

export {ApiRetryFailError};
