import {getMessage} from './i18n';

export const fullWidthSearchFix = (): void => {
	// don't be too aggresive. just fix some obvious typos
	const searchTerm: string | null = mw.util.getParamValue('search');
	if (searchTerm === null || mw.util.getParamValue('fulltext') !== null) {
		return;
	}

	// namespace names
	const colonIndex: number = searchTerm.indexOf('：');
	if (colonIndex === -1) {
		return;
	}

	// if namespace is valid
	const nameSpace: string = searchTerm.slice(0, Math.max(0, colonIndex));
	const pageName: string = searchTerm.slice(Math.max(0, colonIndex + 1));
	if (!mw.config.get('wgNamespaceIds')[nameSpace.toLowerCase()]) {
		return;
	}

	// redirect
	const url: string = `${mw.config.get('wgScript')}?search=${encodeURIComponent(`${nameSpace}:${pageName}`)}`;
	mw.notify(`${getMessage('Redirecting to')}${nameSpace}:${pageName}`, {
		tag: 'fullWidthSearchFix',
		type: 'success',
	});
	location.href = url;
};
