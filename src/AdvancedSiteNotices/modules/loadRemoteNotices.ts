import {RemoteNotices, queryApi} from './util/queryApi';

const loadRemoteNotices = async (): Promise<RemoteNotices> => {
	const response: Awaited<ReturnType<typeof queryApi>> = await queryApi();
	if (!response['parse']?.text) {
		return {};
	}

	const $remoteNotices: NonNullable<RemoteNotices['$notices']> = $('<div>')
		.html(response['parse'].text)
		.find('ul.sitents');
	const remoteNoticesVersion: NonNullable<RemoteNotices['version']> = $remoteNotices.data('asn-version').toString();
	const $notices: JQuery = $('li', $remoteNotices);

	return {
		$notices,
		version: remoteNoticesVersion,
	};
};

export {loadRemoteNotices};
