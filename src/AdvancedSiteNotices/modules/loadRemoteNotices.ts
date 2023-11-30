import {type RemoteNotices, queryApi} from './util/queryApi';

const loadRemoteNotices = async (): Promise<RemoteNotices> => {
	const response: Awaited<ReturnType<typeof queryApi>> = await queryApi();
	if (!response['parse']?.text) {
		return {};
	}

	const $remoteNotices: NonNullable<RemoteNotices['$notices']> = $('<div>')
		.html(response['parse'].text)
		.find('ul.sitents li');

	const remoteNoticesVersion: NonNullable<RemoteNotices['version']> = $remoteNotices.data('asn-version').toString();

	return {
		$notices: $remoteNotices,
		version: remoteNoticesVersion,
	};
};

export {loadRemoteNotices};
