import {Langs} from './constant';

interface TranslationResult {
	lang: Langs;
	targetTitle: string;
	pageName: string;
	editLabel: string;
	completed: boolean;
	missing: boolean;
	noChanges: boolean;
	content?: string;
	diff?: string;
	publishLabel?: string;
	successMessage?: string;
	errorMessage?: (error: unknown) => string;
	save?: () => Promise<void>;
}

export {type TranslationResult};
