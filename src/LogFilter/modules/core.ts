export const filterLists = {
	i18n: {
		'filter-portlet-text': '过滤',
		'filter-portlet-description': '打开交互式日志正则过滤器',
		'filter-gadget-page': 'MediaWiki:Gadget-LogFilter.js',
		'filter-rights-list-instructions': '正则表达式过滤以空格分隔的权限列表。',
		'filter-other-list-instructions': '正则表达式过滤本列表的纯文本样式。',
		'filter-legend': '过滤列表',
		'filter-option-added': '添加权限',
		'filter-option-removed': '删除权限',
		'filter-option-added-or-removed': '添加或删除权限',
		'filter-option-added-removed-static': '已添加/已移除/保持不变',
		'filter-regex-label': '正则表达式：',
		'filter-invert-label': '反选',
		'filter-case-label': '大小写敏感',
		'filter-filter-button': '过滤',
		'filter-highlight-button': '高亮',
	},
	rightsLogOnly: location.href.includes('type=rights') || location.href.includes('Log/rights'),
	lastClicked: false,
	load(): void {
		$.extend(true, filterLists.i18n);
		// Define interface messages
		mw.messages.set(filterLists.i18n);
		// Create portlet link
		const portletlink: HTMLLIElement | null = mw.util.addPortletLink(
			document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb',
			'#',
			mw.msg('filter-portlet-text'),
			'ca-rxfilter',
			mw.msg('filter-portlet-description')
		);
		// Bind click listener
		if (portletlink) {
			$(portletlink).on('click', (event: JQuery.ClickEvent<HTMLLIElement>): void => {
				event.preventDefault();
				filterLists.buildForm();
			});
		}
		// Display form direclty ?
		if (mw.util.getParamValue('lifilter') || mw.util.getParamValue('lifilterexpr')) {
			filterLists.buildForm();
		}
	},
	buildForm(): void {
		let fieldsetHtml: string;
		let oldInput: string;
		const instructions: string = this.rightsLogOnly
			? mw.msg('filter-rights-list-instructions')
			: mw.msg('filter-other-list-instructions');
		const $body = $('body');
		$body.find('#ca-rxfilter').hide();
		const $pageTop: JQuery = $body.find('#contentSub, #topbar');
		if (!$pageTop.length) {
			return;
		}
		// Set up config
		const value: string | null = mw.util.getParamValue('lifilterexpr');
		const casing = mw.util.getParamValue('lifiltercase') === '1';
		const inverted = mw.util.getParamValue('lifilterinv') === '1';
		// Generate the form
		const $fieldSet: JQuery = $('<fieldset>').attr('id', 'rightsFilter').text(instructions);
		const $legend: JQuery = $('<legend>').text(mw.msg('filter-legend'));
		$fieldSet.append($legend);
		fieldsetHtml = '';
		if (this.rightsLogOnly) {
			fieldsetHtml += '<select id="rfSelect">';
			fieldsetHtml += `<option>${mw.html.escape(mw.msg('filter-option-added'))}</option>`;
			fieldsetHtml += `<option>${mw.html.escape(mw.msg('filter-option-removed'))}</option>`;
			fieldsetHtml += `<option>${mw.html.escape(mw.msg('filter-option-added-or-removed'))}</option>`;
			fieldsetHtml += `<option>${mw.html.escape(mw.msg('filter-option-added-removed-static'))}</option>`;
			fieldsetHtml += '</select>';
		}
		fieldsetHtml += `<label for="rfRegex">${mw.html.escape(
			mw.msg('filter-regex-label')
		)}</label><input id="rfRegex">`;
		fieldsetHtml += `<input id="rfInvert" type="checkbox"><label for="rfInvert">${mw.html.escape(
			mw.msg('filter-invert-label')
		)}</label>`;
		fieldsetHtml += `<input id="rfCase" type="checkbox"><label for="rfCase">${mw.html.escape(
			mw.msg('filter-case-label')
		)}</label>`;
		fieldsetHtml += `<button type="button" value="0">${mw.html.escape(mw.msg('filter-filter-button'))}</button>`;
		fieldsetHtml += `<button type="button" value="1">${mw.html.escape(mw.msg('filter-highlight-button'))}</button>`;
		// Inject the html into the fieldset
		$fieldSet.append(fieldsetHtml);
		$pageTop.after($fieldSet);
		// Set passed values
		$body.find('#rfRegex').val(value ?? '');
		$body.find('#rfCase').prop('checked', !casing);
		$body.find('#rfInvert').prop('checked', inverted);
		$body.find('#rfRegex').trigger('focus');
		// Bind click and change listeners
		$body
			.find('#rightsFilter')
			.find('input')
			.on('keyup change', function (): void {
				const $this = $(this);
				if ($this.attr('id') !== 'rfRegex') {
					filterLists.filterLi();
					return;
				}
				const curInput: string = $this.val() as string;
				if (oldInput !== curInput) {
					oldInput = curInput;
					filterLists.filterLi();
				}
			});
		$fieldSet.find('button').on('click', function (): void {
			filterLists.lastClicked = Boolean($(this).val());
			filterLists.filterLi();
		});
		if (value) {
			this.filterLi(mw.util.getParamValue('lifilterhilight') === '1');
		}
	},
	filterLi(hilight?: boolean) {
		let type: string | undefined;
		let rx: RegExp;
		const $body = $('body');
		// Grab options from form
		if (this.rightsLogOnly) {
			type = $body.find('#rfSelect').attr('selectedIndex');
		}
		const invert: boolean = $body.find('#rfInvert').prop('checked');
		const search = String($body.find('#rfRegex').val());
		const flags: 'ig' | 'g' = $body.find('#rfCase').prop('checked') ? 'ig' : 'g';
		hilight = !!(hilight || this.lastClicked.toString() === '1');
		try {
			rx = new RegExp(`${search}`, `${flags}`);
		} catch (error) {
			console.log(error);
		}
		// Grab the list of all <li> in the content
		const $listItems: JQuery = $body.find('#bodyContent').find('li');
		if (!$listItems.length) {
			return;
		}
		// The regex used to grab the Special:Log/rights changes
		const rightrx = /^.*?user:.*? from (.*?) to (.*?) \u200E.*?$/i;
		// Iterate
		$listItems.each((_index: number, element: HTMLElement): void => {
			let look = '';
			let oldr: string;
			let newr: string;
			let oldrl: string[];
			let newrl: string[];
			let remr: string;
			let addr: string;
			const $element: JQuery = $(element);
			// if (this.rightsLogOnly) {
			if (location.href.includes('type=rights') || location.href.includes('Log/rights')) {
				// Special:Log/rights
				oldr = $element.text().replace(rightrx, '$1');
				newr = $element.text().replace(rightrx, '$2');
				oldrl = oldr.split(', ');
				newrl = newr.split(', ');
				for (let j = 0; j < oldrl.length; j++) {
					for (let k = 0; k < newrl.length; k++) {
						if (oldrl[j] === newrl[k]) {
							oldrl[j] = '';
							newrl[k] = '';
						}
					}
				}
				remr = oldrl.join(',');
				addr = newrl.join(',');
				switch (type) {
					case '0':
						look = addr;
						break;
					case '1':
						look = remr;
						break;
					case '2':
						look = `${remr} ${addr}`;
						break;
					case '3':
						look = `${oldr} ${newr}`;
						break;
				}
			} else {
				// Any other list of <li> objects
				look = $element.text();
			}
			$element.show();
			$element.css('background-color', '');
			if ((look?.search(rx) !== -1 && !invert) || (look?.search(rx) === -1 && invert)) {
				if (hilight) {
					$element.css('background-color', '#ffff99');
				}
			} else if (!hilight) {
				$element.hide();
			}
		});
	},
};
