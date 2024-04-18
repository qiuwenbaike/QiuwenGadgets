import {api} from './api';

const edit = ({
	title,
	section,
	text,
	summary,
	callback,
}: {
	title: string;
	section: string | undefined;
	text: string;
	summary: string;
	callback: () => void;
}) => {
	const param: ApiEditPageParams = {
		action: 'edit',
		format: 'json',
		formatversion: '2',
		title,
		summary,
		text,
	};
	if (section) {
		param.section = section;
	}
	void api.postWithToken('csrf', param).then(callback);
};

const editAppend = ({
	title,
	addedContent,
	summary,
	callback,
}: {
	title: string;
	addedContent: string;
	summary: string;
	callback?: () => void;
}) => {
	const param: ApiQueryRevisionsParams = {
		action: 'query',
		prop: ['revisions'],
		rvprop: ['ids', 'flags', 'timestamp', 'user', 'userid', 'size', 'comment', 'tags', 'content'],
		format: 'json',
		formatversion: '2',
		titles: title,
	};

	void api.postWithToken('csrf', param).then((data) => {
		edit({
			title,
			section: undefined,
			text: `${(data['query'].pages[0].revisions[0].content ?? '') + addedContent}`,
			summary,
			callback: callback ?? (() => {}),
		});
	});
};

export {edit, editAppend};
