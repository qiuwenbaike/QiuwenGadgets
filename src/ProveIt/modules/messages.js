export const messages = () => {
	mw.config.set({
		'proveit-tag': 'ProveIt_edit',
		'proveit-summary': '使用[[MediaWiki:Gadget-ProveIt.js|ProveIt]]编辑参考文献',
		'proveit-templates': [
			'Citation',
			'Cite arXiv',
			'Cite AV media',
			'Cite AV media notes',
			'Cite book',
			'Cite bioRxiv',
			'Cite conference',
			'Cite comic',
			'Cite encyclopedia',
			'Cite episode',
			'Cite interview',
			'Cite journal',
			'Cite magazine',
			'Cite mailing list',
			'Cite map',
			'Cite news',
			'Cite newsgroup',
			'Cite paper',
			'Cite podcast',
			'Cite press release',
			'Cite report',
			'Cite serial',
			'Cite sign',
			'Cite speech',
			'Cite techreport',
			'Cite thesis',
			'Cite tweet',
			'Cite video',
			'Cite video game',
			'Cite ssrn',
			'Cite web',
		],
		'proveit-namespaces': [
			0, // Main
			2, // User
			4, // Project
			12, // Help
			118, // Draft namespace
		],
	});
};
