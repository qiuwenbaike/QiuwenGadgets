import {foreignApi} from './modules/api';

(async function loadRNRSCredentials() {
	const userRights = await mw.user.getRights();

	if (userRights.includes('rnrsverify-confirmed')) {
		return;
	}

	try {
		const foreignUserdata = await foreignApi.get({
			action: 'query',
			meta: 'userinfo',
			uiprop: '*',
			formatversion: '2',
		});

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const {groups, options}: {groups: string[]; options: {rnrsverifyhash?: string; rnrsverifytime?: string}} =
			foreignUserdata?.['query']?.userinfo ?? {groups: [], options: {}};

		if (!groups || !options) {
			return;
		}

		if (!groups.includes('rnrsverify-confirmed')) {
			return;
		}

		if (!options.rnrsverifyhash || !options.rnrsverifytime) {
			return;
		}

		const {rnrsverifyhash, rnrsverifytime} = options;

		void (await foreignApi.postWithToken('csrf', {
			action: 'options',
			change: [`rnrsverifyhash=${rnrsverifyhash}`, `rnrsverifytime=${rnrsverifytime}`],
			global: 'update',
		}));
	} catch {}
})();
