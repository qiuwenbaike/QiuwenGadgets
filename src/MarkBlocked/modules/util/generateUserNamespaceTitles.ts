import * as OPTIONS from '../../options.json';
import {WG_NAMESPACE_IDS} from '../constant';

const generateUserNamespaceTitles = (): string[] => {
	const userNamespaceTitles: string[] = [];

	for (const [namespace, id] of Object.entries(WG_NAMESPACE_IDS)) {
		if (!OPTIONS.userNamespaceNumbers.includes(id)) {
			continue;
		}

		userNamespaceTitles.push(`${mw.util.escapeRegExp(namespace.replace(/_/g, ' '))}:`);
	}

	return userNamespaceTitles;
};

export {generateUserNamespaceTitles};
