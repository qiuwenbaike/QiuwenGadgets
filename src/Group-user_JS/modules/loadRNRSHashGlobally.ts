import {initMwApi} from 'ext.gadget.Util';

const loadRNRSHashGlobally = async () => {
	const optionnames = ['rnrsverify', 'rnrsverifytime', 'rnrsverifyhash'];

	await mw.loader.using(['mediawiki.api', 'mediawiki.ForeignApi']);
	const localApi = initMwApi('loadRNRSHashGlobally');
	const foreignApi = initMwApi('loadRNRSHashGlobally', 'https://www.qiuwenbaike.cn/api.php');

	// Get user data
	const localData = await localApi.get({action: 'query', meta: 'userinfo', uiprop: 'options'});
	const foreignData = await foreignApi.get({action: 'query', meta: 'userinfo', uiprop: 'options'});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
	const localOptions = localData['query'].userinfo.options;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
	const foreignOptions = foreignData['query'].userinfo.options;

	// Update global preferences
	for (const optionname of optionnames) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (!localOptions[optionname] && foreignOptions[optionname]) {
			await foreignApi.postWithToken('csrf', {
				action: 'globalpreferences',
				optionname,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				optionvalue: foreignOptions[optionname] as string,
			});
		}
	}
};

export {loadRNRSHashGlobally};
