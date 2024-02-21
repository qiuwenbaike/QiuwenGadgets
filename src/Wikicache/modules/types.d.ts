interface AutoSaveObject {
	_path: string;
	_date: Date;
	'input[name=wpTextbox1]'?: string;
	'input[name=wpSummary]'?: string;
}

export type {AutoSaveObject};
