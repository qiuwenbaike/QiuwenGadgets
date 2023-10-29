(function translateVariants() {
	const TranslateVariantsSummary =
		'自动转换变体自[[$1]]（[[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]]）';
	const main = () => {
		const langs = new Set(['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw']);
		const langname = {
			zh: '原始',
			'zh-hans': '简体',
			'zh-cn': '中国大陆简体',
			'zh-my': '马来西亚简体',
			'zh-sg': '新加坡简体',
			'zh-hant': '繁體',
			'zh-hk': '中國香港繁體',
			'zh-mo': '中國澳門繁體',
			'zh-tw': '中國臺灣繁體',
		};
		const result = {};
		const api = new mw.Api({
			ajax: {
				headers: {
					'Api-User-Agent': `Qiuwen/1.1 (TranslateVariants/1.1; ${mw.config.get('wgWikiID')})`,
				},
			},
		});
		let basepagetext = '';
		const table = $('<div>').attr('id', 'TranslateVariants').prependTo('#bodyContent');
		const $submitAll = $('<button>').text(window.wgULS('发布所有更改', '發佈所有變更'));
		$submitAll.on('click', () => {
			const $buttons = $('.TranslateVariants-publish-changes');
			if ($buttons.length === 0) {
				mw.notify(window.wgULS('没有任何可以发布的更改', '沒有任何變更可發佈'), {
					tag: 'TranslateVariants',
					type: 'error',
				});
				return;
			}
			if (!confirm(`${window.wgULS('更改', '發佈')}${$buttons.length}${window.wgULS('个更改', '個變更')}？`)) {
				mw.notify(window.wgULS('已取消更改', '已取消發佈'), {tag: 'TranslateVariants', type: 'warn'});
				return;
			}
			$buttons.each((_index, element) => {
				$(element).trigger('click');
			});
		});
		table.append($('<div>').css('text-align', 'right').append($submitAll));
		$('<div>')
			.css('color', '#f00')
			.text(
				window.wgULS(
					'提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！',
					'提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！'
				)
			)
			.appendTo(table);
		const defaultlangs = 'zh,zh-hans,zh-cn,zh-my,zh-sg,zh-hant,zh-hk,zh-mo,zh-tw';
		let runlangs = prompt(
			window.wgULS('转换以下语言（以逗号隔开）：', '轉換以下語言（以逗號隔開）：'),
			defaultlangs
		);
		if (runlangs === null) {
			runlangs = defaultlangs;
		}
		const langqueue = runlangs
			.split(',')
			.map((lang) => {
				return lang.trim();
			})
			.filter((lang) => {
				return langs.has(lang);
			});
		const process = () => {
			if (langqueue.length === 0) {
				return;
			}
			const lang = langqueue.shift();
			const diffTable = $('<div>').attr('id', `TranslateVariants-diff-${lang}`).appendTo(table);
			$('<hr>').appendTo(table);
			const basename = mw.config.get('wgPageName').replace(/\/zh$/, '');
			const targetTitle = lang === 'zh' ? String(basename) : `${basename}/${lang}`;
			let newtext: string;
			if (lang !== undefined) {
				api.parse(`{{NoteTA|G1=IT|G2=MediaWiki}}<div id="TVcontent">${basepagetext}</div>`, {
					uselang: lang,
					prop: 'text',
				})
					.then(
						(data) => {
							newtext = $('<div>').html(data).find('#TVcontent').text();
							const _params: ApiQueryRevisionsParams = {
								action: 'query',
								prop: 'revisions',
								titles: [targetTitle],
								rvdifftotext: newtext,
								formatversion: '2',
							};
							return api.post(_params);
						},
						(error) => {
							mw.notify(`解析${lang}${window.wgULS('时发生错误：', '時發生錯誤：')}${error}`, {
								type: 'error',
								tag: 'TranslateVariant',
							});
							return null;
						}
					)
					.then(
						(data) => {
							if (data !== null) {
								const tool = $(
									`<div><a href="${mw.util.getUrl(targetTitle)}">${lang}（${
										langname[lang as never]
									}）</a>（<a href="${mw.util.getUrl(targetTitle, {
										action: 'edit',
									})}">${window.wgULS('编', '編')}</a>）</div>`
								).appendTo(diffTable);
								const [page] = data['query'].pages;
								if (page.missing) {
									const $submit = $('<button>')
										.addClass('TranslateVariants-publish-changes')
										.css('float', 'right')
										.text(window.wgULS('发布页面', '發佈頁面'))
										.appendTo(tool);
									$submit.on('click', function () {
										this.remove();
										api.create(
											targetTitle,
											{
												summary: TranslateVariantsSummary.replace(
													/\$1/g,
													mw.config.get('wgPageName')
												),
											},
											newtext
										).then(
											() => {
												mw.notify(window.wgULS('已编辑 ', '已編輯 ') + targetTitle, {
													type: 'success',
													tag: 'TranslateVariant',
												});
											},
											(error) => {
												mw.notify(
													window.wgULS('编辑', '編輯 ') +
														targetTitle +
														window.wgULS(' 发生错误：', ' 發生錯誤：') +
														error,
													{
														type: 'error',
														tag: 'TranslateVariant',
													}
												);
											}
										);
									});
									$('<pre>')
										.html(
											newtext.replace(/[&<>]/gim, (s) => {
												return `&#${s.codePointAt(0)};`;
											})
										)
										.appendTo(diffTable);
									return;
								}
								const diff = page.revisions[0].diff.body;
								if (diff === '') {
									$('<span>')
										.css('float', 'right')
										.text(window.wgULS('无更改', '無變更'))
										.appendTo(tool);
								} else {
									const $submit = $('<button>')
										.addClass('TranslateVariants-publish-changes')
										.css('float', 'right')
										.text(window.wgULS('发布更改', '發佈變更'))
										.appendTo(tool);
									$submit.on('click', function () {
										this.remove();
										api.edit(targetTitle, () => {
											return {
												text: newtext,
												summary: TranslateVariantsSummary.replace(
													/\$1/g,
													mw.config.get('wgPageName')
												),
												nocreate: false,
											};
										}).then(
											() => {
												mw.notify(window.wgULS('已编辑', '已編輯 ') + targetTitle, {
													type: 'success',
													tag: 'TranslateVariant',
												});
											},
											(error) => {
												mw.notify(
													window.wgULS('编辑', '編輯 ') +
														targetTitle +
														window.wgULS(' 发生错误：', ' 發生錯誤：') +
														error,
													{
														type: 'error',
														tag: 'TranslateVariant',
													}
												);
											}
										);
									});
									$('<table>')
										.addClass('diff')
										.html(diff)
										.prepend(
											'<colgroup><col class="diff-marker"><col class="diff-content"><col class="diff-marker"><col class="diff-content"></colgroup>'
										)
										.appendTo(diffTable);
								}
							}
						},
						(error) => {
							mw.notify(
								window.wgULS('获取', '取得') +
									lang +
									window.wgULS('差异时发生错误：', '差異時發生錯誤：') +
									error,
								{
									type: 'error',
									tag: 'TranslateVariant',
								}
							);
						}
					)
					.always(() => {
						process();
					});
			}
		};
		const params: ApiQueryRevisionsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: 'revisions',
			titles: [mw.config.get('wgPageName')],
			curtimestamp: true,
			rvprop: ['content', 'timestamp'],
		};
		api.get(params)
			.then((data) => {
				if (!data['query'] || !data['query'].pages) {
					return $.Deferred().reject('unknown');
				}
				const [page] = data['query'].pages;
				if (!page || page.invalid) {
					return $.Deferred().reject('invalidtitle');
				}
				if (page.missing) {
					return $.Deferred().reject('nocreate-missing');
				}
				const [revision] = page.revisions;
				return {
					content: revision.content,
				};
			})
			.then(({content}) => {
				let text = content;
				Object.defineProperty(result, 'zh', {
					value: text,
					writable: true,
				});
				text = text.replace(/[\s#&'*:<>[\]_{|}]/gim, (string: string) => {
					return `&#${string.codePointAt(0)};`;
				});
				text = text.replace(
					/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g,
					'$1-{$2}-$3'
				);
				text = text.replace(/-&#123;(.+?)&#125;-/g, (string: string) => {
					string = string
						.replace('-&#123;', '-{')
						.replace('-&#123;', '-{')
						.replace('&#125;-', '}-')
						.replace(/&#124;/g, '|')
						.replace(/&#32;/g, ' ')
						.replace(/&#61;/g, '=')
						.replace(/&#62;/g, '>')
						.replace(/&#58;/g, ':');
					return string;
				});
				basepagetext = text;
				process();
			});
	};
	if (/^MediaWiki:[^/]+(\/zh)?$/.test(mw.config.get('wgPageName'))) {
		const link: HTMLLIElement | null = mw.util.addPortletLink(
			document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
			'#',
			window.wgULS('转换变体', '轉換變體')
		);
		if (link) {
			$(link).on('click', function () {
				this.remove();
				main();
			});
		}
	}
})();
