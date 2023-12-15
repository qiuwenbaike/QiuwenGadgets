export const pagePatroller = async (): Promise<void> => {
	const weekdays: string[] = ['日', '一', '二', '三', '四', '五', '六'];
	const loading: string = window.wgULS('正在加载此页面的巡查者……', '正在加載此頁面的巡查者……');
	let $patroller: JQuery;
	if (mw.config.get('skin') === 'citizen') {
		$patroller = $('<section>').attr('id', 'footer-info-patroller').addClass('page-info__item').text(loading);
	} else if (document.querySelector('#footer-info')) {
		$patroller = $('<li>').attr('id', 'footer-info-patroller').text(loading);
	} else {
		$patroller = $('<div>').attr('id', 'footer-info-patroller').text(loading);
	}
	const $body: JQuery<HTMLBodyElement> = $('body');
	$body.find('#footer-info, .page-info').prepend($patroller);
	// 针对有巡查权限的用户优化。若页面上能看到巡查按钮，那一定没被巡查过。
	if (document.querySelectorAll('.patrollink').length) {
		$patroller.text(window.wgULS('此页面尚未被巡查。', '此頁面尚未被巡查。'));
		return;
	}
	try {
		const params: ApiQueryRevisionsParams & ApiQueryLogEventsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: ['revisions'],
			titles: mw.config.get('wgPageName'),
			list: 'logevents',
			letype: 'patrol',
			letitle: mw.config.get('wgPageName'),
			rvprop: 'timestamp',
			rvlimit: 1,
			rvdir: 'newer',
		};
		const {query} = await $.ajax({
			url: mw.util.wikiScript('api'),
			data: params,
		});
		let cts: string = '';
		let html: string = '';
		if (query && query.logevents && query.logevents.length) {
			const [log]: [
				{
					user: string;
					timestamp: string;
					action: string;
				},
			] = query.logevents;
			const {action} = log;
			let {user, timestamp: ts} = log;
			const date: Date = new Date(ts);
			if (query.pages) {
				for (const id in query.pages) {
					if (!Object.hasOwn(query.pages, id)) {
						continue;
					}
					const page = query.pages[id];
					if (page && page.revisions && page.revisions.length) {
						cts = page.revisions[0].timestamp;
						break;
					}
				}
			}
			if (cts && new Date(cts) > date) {
				html = '';
			} else {
				ts = `${date.getUTCFullYear()}年${date.getUTCMonth() + 1}月${date.getUTCDate()}日 (星期${
					weekdays[date.getUTCDay()]
				}) ${`0${date.getUTCHours()}`.slice(-2)}:${`0${date.getUTCMinutes()}`.slice(-2)} (UTC)`;
				const p: string = mw.config.get('wgArticlePath');
				user = `<a href="${p.replace('$1', `User:${user}`)}">${user}</a>`;
				if (action === 'patrol') {
					html = `${window.wgULS('此页面于', '此頁面於') + ts}由${user}巡查。`;
				}
			}
		}
		if (html === '') {
			$patroller.text(
				window.wgULS('此页面尚未被巡查，或已自动标为已巡查。', '此頁面尚未被巡查，或已自動標爲已巡查。')
			);
		} else {
			$patroller.html(html);
		}
	} catch (error: unknown) {
		console.error(`[PagePatroller]: ${error}`);
		$patroller.text(window.wgULS('查找巡查者时出现错误。', '查找巡查者時出現錯誤。'));
	}
};
