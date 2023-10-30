import {getMessage} from './i18n';

export const fullWidthSearchFix = (): void => {
	// don't be too aggresive. just fix some obvious typos
	const searchTerm: string | null = mw.util.getParamValue('search');
	if (searchTerm !== null && mw.util.getParamValue('fulltext') === null) {
		// namespace names
		const colonIndex: number = searchTerm.indexOf('：');
		if (colonIndex !== -1) {
			const namespace: string = searchTerm.slice(0, Math.max(0, colonIndex));
			const pageName: string = searchTerm.slice(Math.max(0, colonIndex + 1));
			if (mw.config.get('wgNamespaceIds')[namespace.toLowerCase()]) {
				// valid namespace
				const url = `${mw.config.get('wgScript')}?search=${encodeURIComponent(`${namespace}:${pageName}`)}`;
				mw.notify(`${getMessage('Redirecting to')}${namespace}:${pageName}`, {
					tag: 'fullWidthSearchFix',
					type: 'success',
				});
				location.href = url;
			}
		}
	}
};
