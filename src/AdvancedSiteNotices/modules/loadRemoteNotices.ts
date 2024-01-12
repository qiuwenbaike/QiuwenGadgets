import {type RemoteNotices, queryApi} from './util/queryApi';

type ApiResponse = {
	parse: {
		text?: string;
	};
};

const loadRemoteNotices = async (): Promise<RemoteNotices> => {
	const response: Awaited<ReturnType<typeof queryApi>> = await queryApi();
	const responseParse = response['parse'] as ApiResponse['parse'];

	if (!responseParse?.text) {
		return {};
	}

	const $remoteNotices: NonNullable<RemoteNotices['$notices']> = $('<div>')
		.html(responseParse.text)
		.find('ul.sitents');

	const $notices: JQuery = $remoteNotices.find('li');
	const remoteNoticesVersion: NonNullable<RemoteNotices['version']> = (
		$remoteNotices.data('asn-version') as number
	).toString();

	return {
		$notices,
		version: remoteNoticesVersion,
	};
};

export {loadRemoteNotices};
