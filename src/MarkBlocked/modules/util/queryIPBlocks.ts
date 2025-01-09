import {ApiQueryGlobalBlocksParamsRedefined} from '../types';
import {api} from './api';

const queryIPBlocks = async (bkip: string) => {
	const params: ApiQueryBlocksParams & ApiQueryGlobalBlocksParamsRedefined = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: ['blocks', 'globalblocks'],
		bkip,
		bklimit: 100,
		bkprop: ['by', 'expiry', 'reason', 'restrictions', 'timestamp', 'user'],
		bgip: bkip,
		bglimit: 100,
		bgprop: ['by', 'expiry', 'reason', 'timestamp', 'target'],
		smaxage: 600,
		maxage: 600,
	};

	return await api.get(params);
};

export {queryIPBlocks};
