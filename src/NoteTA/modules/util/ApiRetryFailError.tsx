import React from 'ext.gadget.React';
import {getMessage} from '../i18n';

class ApiRetryFailError extends Error {
	private errors: string[];

	constructor(errors: string[]) {
		super(`Api calls failed ${errors.length} time(s) in a row.`);
		this.name = 'ApiRetryFailError';
		this.errors = errors;
	}

	toJQuery(): JQuery {
		const errorCount: number = this.errors.length;
		const element = (
			<div className="error">
				<p>{getMessage('ApiRetryFailError').replace(/\$1/g, errorCount.toString())}</p>
				<ol>
					{this.errors.reduce(
						(errors, error, index) => [
							...errors,
							<li key={index}>
								{error
									.split('\n')
									.reduce(
										(accumulator, line, number) => [...accumulator, <p key={number}>{line}</p>],
										[] as React.ReactElement[]
									)}
							</li>,
						],
						[] as React.ReactElement[]
					)}
				</ol>
			</div>
		);

		return $(element) as JQuery;
	}
}

export {ApiRetryFailError};
