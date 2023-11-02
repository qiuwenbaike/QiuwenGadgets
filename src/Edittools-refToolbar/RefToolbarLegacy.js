/* eslint-disable @typescript-eslint/no-unused-vars */
export const refToolbarLegacy = function refToolbarLegacy() {
	let numforms = 0;
	let citeUserDateFormat;
	let refTagURL;
	const defaultRefTagURL = '';
	let refToolDebug;
	const easyCiteMain = () => {
		document.querySelector('#citeselect').style.display = '';
		document.querySelector('#citemore').style.display = 'none';
	};
	const addOption = (script, text) => {
		const option = document.createElement('input');
		option.setAttribute('type', 'button');
		option.setAttribute('onclick', script);
		option.setAttribute('value', text);
		return option;
	};
	const refbuttons = () => {
		if (mw.toolbar) {
			mw.toolbar.addButton({
				imageFile: 'https://tu.zhongwen.wiki/images/qiuwen/e/ea/Button_easy_cite.png',
				speedTip: 'Insert citation',
				onClick: easyCiteMain,
				imageId: 'mw-toolbar-editbutton',
			});
			const citemain = document.createElement('div');
			citemain.style.display = 'none';
			citemain.style.margin = '0 0 6px';
			citemain.style.clear = 'both';
			citemain.style.height = 'auto';
			citemain.setAttribute('Id', 'citeselect');
			citemain.append(addOption('citeWeb()', 'Web'));
			citemain.append(addOption('citeNews()', 'News'));
			citemain.append(addOption('citeBook()', 'Book'));
			citemain.append(addOption('citeJournal()', 'Journal'));
			citemain.append(addOption('citeNamedRef()', 'Named references'));
			citemain.append(addOption('dispErrors()', 'Error check'));
			citemain.append(addOption('showMore()', 'More'));
			citemain.append(addOption('hideInitial()', 'Cancel'));
			const citemore = document.createElement('div');
			citemore.style.display = 'none';
			citemore.setAttribute('Id', 'citemore');
			citemore.append(addOption('citeEncyclopedia()', 'Encyclopedia'));
			citemore.append(addOption('citePressRelease()', 'Press release'));
			citemore.append(addOption('citeMap()', 'Map'));
			citemore.append(addOption('showRefSectionOptions()', 'Ref Section'));
			citemain.append(citemore);
			$(citemain).insertAfter($('#toolbar'));
			const reftoolformarea = document.createElement('span');
			reftoolformarea.id = 'refToolFormArea';
			$('#citeselect').append(reftoolformarea);
		}
		if ((typeof EditTools === 'undefined' ? 'undefined' : typeof EditTools) === 'object') {
			const placeholder = document.querySelector('#editpage-specialchars');
			EditTools.createEditTools(placeholder);
		}
	};
	const oldFormHide = () => {
		// if (numforms !== 0) {
		//  document..querySelector(`#citediv${numforms}`).style.display = 'none';
		// }
		document.querySelector('#refToolFormArea').innerHTML = '';
		if (document.querySelector('#errorform') !== null) {
			document.querySelector('#errorform').remove();
		}
	};
	const hideInitial = () => {
		document.querySelector('#citeselect').style.display = 'none';
		oldFormHide();
	};
	const showMore = () => {
		document.querySelector('#citemore').style.display = '';
	};
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const citeGlobalDateFormat = '<date> <monthname> <year>';
	const getTime = () => {
		let datestr = '';
		datestr = citeUserDateFormat ?? citeGlobalDateFormat;
		const DT = new Date();
		let zmonth = '';
		let month = DT.getUTCMonth() + 1;
		zmonth = month < 10 ? `0${month.toString()}` : month.toString();
		month = month.toString();
		let zdate = '';
		let date = DT.getUTCDate();
		zdate = date < 10 ? `0${date.toString()}` : date.toString();
		date = date.toString();
		datestr = datestr.replace('<date>', date);
		datestr = datestr.replace('<month>', month);
		datestr = datestr.replace('<zdate>', zdate);
		datestr = datestr.replace('<zmonth>', zmonth);
		datestr = datestr.replace('<monthname>', months[DT.getUTCMonth()]);
		datestr = datestr.replace('<year>', DT.getUTCFullYear().toString());
		return datestr;
	};
	const lastNameToRefname = () => {
		// Note: This only works if field 'refname' comes after field 'last', but it always does
		let lastName;
		const fields = document.querySelector(`#citediv${numforms}`).querySelectorAll('input');
		for (const field of fields) {
			if (field.id === 'last') {
				lastName = field.value;
			} else if (field.id === 'refname') {
				field.value = lastName.replace(/^\s*(.*?)\s*$/, '$1');
				return;
			}
		}
	};
	const setAccessDateToday = () => {
		document.querySelector('#access-date').value = getTime();
	};
	const getLastName = (authornum) => {
		if (/\S/.test(document.querySelector(`#last${authornum}`).value)) {
			return document.querySelector(`#last${authornum}`).value;
		}
		const author = document.querySelector(`#author${authornum}`).value;
		const match = /(\S+)\s*$/.exec(author);
		if (match) {
			return match[1];
		}
	};
	const makeRefname = () => {
		let refname;
		refname = document.querySelector('#last1')
			? document.querySelector('#last1').value + document.querySelector('#last2').value
			: document.querySelector('#last').value;
		if (/\S/.test(refname)) {
			const date = document.querySelector('#date').value;
			const match = /\d{4}/.exec(date);
			if (match) {
				refname += match[0];
			}
		} else {
			refname = document.querySelector('#title').value;
		}
		document.querySelector('#refname').value = refname;
	};
	const citeNewsWeb = (templatename) => {
		oldFormHide();
		const template = templatename;
		const legend = template === 'cite web' ? 'Cite web source' : 'Cite news source';
		const newtime = getTime();
		numforms++;
		let form = `<div id="citediv${numforms}">
	<fieldset>
		<legend>${legend}</legend>
		<table cellspacing="5">
			<input type="hidden" value="${template}" id="template">
			<tr>
				<td width="120"><label for="url">URL: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="url"></td>
				<td width="120"><label for="title">&nbsp;Title: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="title"></td>
			</tr>
			<tr>
				<td width="120"><label for="last">Last name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="last"></td>
				<td width="120"><label for="first">&nbsp;First name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="first"></td>
			</tr>
			<tr>
				<td width="120"><!-- <label for="coauthors"><s>Coauthors: </s></label> --></td>
				<td width="400"><span style="color:#696969;font-style:italic">Co-author parameter no longer supported</span><!-- <input type="text" tabindex=1 style="width:100%" id="coauthors" placeholder="this parameter no longer supported"> --></td>
				<td width="120"><label for="date">&nbsp;Publication date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="date"></td>
			</tr>
			<tr>
				<td width="120"><label for="work">${
					template === 'cite news' ? 'Newspaper or&nbsp;work' : 'Website or&nbsp;work'
				}: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="work"></td>
				<td width="120"><label for="publisher">&nbsp;Publisher: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="publisher"></td>
			</tr>
			<tr>
				<td width="120"><label for="pages">Pages: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="pages"></td>
				<td width="120"><label for="language">&nbsp;Language: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="language"></td>
			</tr>
			<tr>
				<td width="120"><label for="access-date">Access date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="access-date" value="${newtime}"></td>
`;
		form +=
			template === 'cite news'
				? `				<td width="120"><label for="location">&nbsp;Location: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="location"></td></tr>`
				: `				<td width="120"></td><td width="400"></td>
			</tr>
`;
		if (template === 'cite web') {
			form += `			<tr>
				<td width="120"><label for="archive-url">Archive URL: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="archive-url"></td>
				<td width="120"><label for="archive-date">&nbsp;Archive date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="archive-date"></td>
			</tr>
`;
		}
		form += `			<tr>
				<td width="120"><label for="refname">Reference name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:60%" id="refname"><input type="button" value="<Last name" onClick="lastNameToRefname()"></td>
			</tr>
		</table>
		<input type="button" value="Add citation" onClick="addcites()">
		<input type="button" value="Preview citation" onClick="previewCitationDefault()">
		<img id="progress" src="https://tu.zhongwen.wiki/images/qiuwen/d/de/Ajax-loader.gif" style="visibility:hidden" />
		<input type="checkbox" tabindex=1 name="verbose" id="verbose" value="verbose">
		<label for="verbose">Vertical form</label>
		<span style="float:right"><a href="//www.qiuwenbaike.cn/wiki/Template:${template.replace(
			/ /g,
			'_'
		)}" rel="noopener" target="_blank">[Template documentation]</a></span>
	</fieldset>
	<span id="previewSpan"></span>
</div>
`;
		document.querySelector('#refToolFormArea').innerHTML = form;
	};
	const citeWeb = () => {
		citeNewsWeb('cite web');
	};
	const citeNews = () => {
		citeNewsWeb('cite news');
	};
	const citeBook = () => {
		oldFormHide();
		const template = 'cite book';
		numforms++;
		let form = `<div id="citediv${numforms}">
	<fieldset>
		<legend>Cite book source</legend>
`;
		form += `		<table cellspacing="5" width="100%">
			<tr>
				<td><label for="title">Title: </label></td>
				<td colspan=5><input type="text" tabindex=1 style="width:100%" id="title"></td>
			</tr>
`;
		for (let i = 1; i <= 3; i++) {
			const i_str = i === 1 ? '' : ` ${i}`;
			form += `			<tr>
				<td width="130"><label for="last${i}">Author${i_str} last&nbsp;name: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="last${i}"></td>
				<td><label for="first${i}">&nbsp;first&nbsp;name: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="first${i}"></td>
				<td><label for="author-link${i}">&nbsp;Author link: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="author-link${i}">
				</td>
			</tr>
`;
		}
		form += `			<tr>
				<td><!-- <label for="coauthors"><s>Coauthors: </s></label> --></td>
				<td><span style="color:#696969;font-style:italic">Co-author parameter no longer supported</span><!-- <input type="text" tabindex=1 style="width:100%" id="coauthors" placeholder="this parameter no longer supported"> --></td>
				<td><label for="editor">&nbsp;Editor: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="editor"></td>
				<td><label for="others">&nbsp;Others: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="others"></td>
			</tr>
		</table>
		<table cellspacing="5" width="100%">
			<tr>
				<td width="130"><label for="publisher">Publisher: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="publisher"></td>
				<td><label for="location">&nbsp;Location: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="location"></td>
			</tr>
			<tr>
				<td><label for="date">Publication&nbsp;date or&nbsp;year: </label></td>
				<td><input type="text" tabindex=1 style="width:140px" id="date">
					<input id="dmy" name="dateformat" value="dmy" type="radio" tabindex=1 onclick="reformatDates()"><label for="dmy">dmy</label>
					<input id="mdy" name="dateformat" value="mdy" type="radio" tabindex=1 onclick="reformatDates()"><label for="mdy">md, y</label>
					<input id="ymd" name="dateformat" value="ymd" type="radio" tabindex=1 onclick="reformatDates()"><label for="ymd">y-m-d</label>
				</td>
				<td><label for="edition">&nbsp;Edition: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="edition"></td>
			</tr>
			<tr>
				<td><label for="series">Series: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="series"></td>
				<td><label for="volume">&nbsp;Volume: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="volume"></td>
			</tr>
			<tr>
				<td><label for="pages">Page number(s):</label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="pages" name="pages" onFocus="this.style.backgroundColor=''"></td>
				<td><label for="chapter">&nbsp;Chapter: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="chapter"></td>
			</tr>
			<tr>
				<td><label for="isbn">ISBN: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="isbn"></td>
				<td><label for="language">&nbsp;Language: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="language"></td>
			</tr>
			<tr>
				<td><label for="url">URL: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="url"></td>
				<td><label for="access-date">&nbsp;Access&nbsp;date:</label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="access-date"></td>
			</tr>
			<tr>
				<td><label for="otherfields">Other&nbsp;fields:</label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="otherfields"></td>
				<td><label for="refname">&nbsp;Ref&nbsp;name: </label></td>
				<td><input type="text" tabindex=1 style="width:100%" id="refname"></td>
			</tr>
		</table>
		<input type="radio" tabindex=1 name="template" id="cite_book" value="cite_book" checked="1">
		<label for="cite_book">{{cite book}}</label>
		<sup><a href="//www.qiuwenbaike.cn/wiki/Template:Cite_book" rel="noopener" target="_blank">[doc]</a></sup>
		<input type="radio" tabindex=1 name="template" id="citation" value="citation">
		<label for="citation">{{citation}}</label> <sup><a href="//www.qiuwenbaike.cn/wiki/Template:Citation" rel="noopener" target="_blank">[doc]</a></sup>
		<input type="radio" tabindex=1 name="template" id="plain" value="plain"><label for="plain">plain wikicode (experimental)</label>
		<input type="checkbox" tabindex=1 name="verbose" id="verbose" value="verbose"><label for="verbose">Vertical form</label>
		<input type="checkbox" tabindex=1 name="extraparams" id="extraparams" value="extraparams"><label for="extraparams">Extra parameters</label>
		<br>
		<input type="button" value="Add citation" onClick="makeCiteBook()">
		<input type="button" value="Preview citation" onClick="previewCitationBook()">
		<img id="progress" src="https://tu.zhongwen.wiki/images/qiuwen/d/de/Ajax-loader.gif" style="visibility:hidden" />
 	</fieldset>
	<span id="previewSpan"></span>
</div>
`;
		document.querySelector('#refToolFormArea').innerHTML = form;
	};
	const citeJournal = () => {
		oldFormHide();
		const template = 'cite journal';
		numforms++;
		const form = `<div id="citediv${numforms}">
	<fieldset>
		<legend>Cite journal</legend>
		<table cellspacing="5">
			<input type="hidden" value="${template}" id="template">
			<tr>
				<td width="120"><label for="last">Last name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="last"></td>
				<td width="120"><label for="first">&nbsp;First name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="first"></td>
			</tr>
			<tr>
				<td width="120"><!-- <label for="coauthors"><s>Coauthors: </s></label> --></td>
				<td width="400"><span style="color:#696969;font-style:italic">Co-author parameter no longer supported</span><!-- <input type="text" tabindex=1 style="width:100%" id="coauthors" placeholder="this parameter no longer supported"> --></td>
				<td width="120"><label for="date">&nbsp;Publication date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="date"></td>
			</tr>
			<tr>
				<td width="120"><label for="title">Title: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="title"></td>
				<td width="120"><label for="journal">&nbsp;Journal: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="journal"></td>
			</tr>
			<tr>
				<td width="120"><label for="publisher">Publisher: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="publisher"></td>
				<td width="120"><label for="location">&nbsp;Location: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="location"></td>
			</tr>
			<tr>
				<td width="120"><label for="volume">Volume: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="volume"></td>
				<td width="120"><label for="issue">&nbsp;Issue: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="issue"></td>
			</tr>
			<tr>
				<td width="120"><label for="pages">Pages: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="pages"></td>
				<td width="120"><label for="issn">&nbsp;ISSN: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="issn"></td>
			</tr>
			<tr>
				<td width="120"><label for="oclc">OCLC: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="oclc"></td>
				<td width="120"><label for="doi">&nbsp;DOI: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="doi"></td>
			</tr>
			<tr>
				<td width="120"><label for="pmid">PMID: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="pmid"></td>
				<td width="120"><label for="quote">&nbsp;Quote: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="quote"></td>
			</tr>
			<tr>
				<td width="120"><label for="url">URL: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="url"></td>
				<td width="120"><label for="access-date">&nbsp;Access date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="access-date"></td>
			</tr>
			<tr>
				<td width="120"><label for="language">Language: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="language"></td>
				<td width="120"><label for="refname">&nbsp;Reference name: </label></td>
				<td width="400">
					<input type="text" tabindex=1 style="width:60%" id="refname">
					<input type="button" value="<Last name" onClick="lastNameToRefname()">
				</td>
			</tr>
		</table>
		<input type="button" value="Add citation" onClick="addcites()">
		<input type="button" value="Preview citation" onClick="previewCitationDefault()">
		<img id="progress" src="https://tu.zhongwen.wiki/images/qiuwen/d/de/Ajax-loader.gif" style="visibility:hidden" />
		<input type="checkbox" tabindex=1 name="verbose" id="verbose" value="verbose">
		<label for="verbose">Vertical form</label>
		<span style="float:right"><a href="//www.qiuwenbaike.cn/wiki/Template:${template.replace(
			/ /g,
			'_'
		)}" rel="noopener" target="_blank">[Template documentation]</a></span>
	</fieldset>
	<span id="previewSpan"></span>
</div>
`;
		document.querySelector('#refToolFormArea').innerHTML = form;
	};
	const citeEncyclopedia = () => {
		oldFormHide();
		const template = 'cite encyclopedia';
		numforms++;
		const form = `<div id="citediv${numforms}">
	<fieldset>
		<legend>Cite encyclopedia source</legend>
		<table cellspacing="5">
			<input type="hidden" value="${template}" id="template">
			<tr>
				<td width="120"><label for="last">Last name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="last"></td>
				<td width="120"><label for="first">&nbsp;First name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="first"></td>
			</tr>
			<tr>
				<td width="120"><!-- <label for="coauthors"><s>Coauthors: </s></label> --></td>
				<td width="400"><span style="color:#696969;font-style:italic">Co-author parameter no longer supported</span><!-- <input type="text" tabindex=1 style="width:100%" id="coauthors" placeholder="this parameter no longer supported"> --></td>
				<td width="120"><label for="editor">&nbsp;Editor: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="editor"></td>
			</tr>
			<tr>
				<td width="120"><label for="title">Entry title: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="title"></td>
				<td width="120"><label for="encyclopedia">&nbsp;Encyclopedia: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="encyclopedia"></td>
			</tr>
			<tr>
				<td width="120"><label for="publisher">Publisher: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="publisher"></td>
				<td width="120"><label for="location">&nbsp;Location: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="location"></td>
			</tr>
			<tr>
				<td width="120"><label for="year">Year: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="year"></td>
				<td width="120"><label for="volume">&nbsp;Volume: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="volume"></td>
			</tr>
			<tr>
				<td width="120"><label for="pages">Pages: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="pages"></td>
				<td width="120"><label for="isbn">&nbsp;ISBN: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="isbn"></td>
			</tr>
			<tr>
				<td width="120"><label for="url">URL: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="url"></td>
				<td width="120"><label for="access-date">&nbsp;Access date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="access-date"></td>
			</tr>
			<tr>
				<td width="120"><label for="language">Language: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="language"></td>
				<td width="120"><label for="refname">&nbsp;Reference name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="refname"></td>
			</tr>
		</table>
		<input type="button" value="Add citation" onClick="addcites()">
		<input type="button" value="Preview citation" onClick="previewCitationDefault()">
		<img id="progress" src="https://tu.zhongwen.wiki/images/qiuwen/d/de/Ajax-loader.gif" style="visibility:hidden" />
		<input type="checkbox" tabindex=1 name="verbose" id="verbose" value="verbose">
		<label for="verbose">Vertical form</label>
		<span style="float:right"><a href="//www.qiuwenbaike.cn/wiki/Template:${template.replace(
			/ /g,
			'_'
		)}" rel="noopener" target="_blank">[Template documentation]</a></span>
	</fieldset>
	<span id="previewSpan"></span>
</div>
`;
		document.querySelector('#refToolFormArea').innerHTML = form;
	};
	const citePressRelease = () => {
		oldFormHide();
		const template = 'cite press release';
		numforms++;
		const form = `<div id="citediv${numforms}">
	<fieldset>
		<legend>Cite press release</legend>
		<table cellspacing="5">
			<input type="hidden" value="${template}" id="template">
			<tr>
				<td width="120"><label for="title">Title: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="title"></td>
				<td width="120"><label for="publisher">&nbsp;Publisher: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="publisher"></td>
			</tr>
			<tr>
				<td width="120"><label for="date">Date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="date"></td>
				<td width="120"><label for="language">&nbsp;Language: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="language"></td>
			</tr>
			<tr>
				<td width="120"><label for="url">URL: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="url"></td>
				<td width="120"><label for="access-date">&nbsp;Access date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="access-date" value="${getTime()}"></td>
			</tr>
			<tr>
				<td width="120"><label for="refname">Reference name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="refname"></td>
			</tr>
		</table>
		<input type="button" value="Add citation" onClick="addcites()">
		<input type="button" value="Preview citation" onClick="previewCitationDefault()">
		<img id="progress" src="https://tu.zhongwen.wiki/images/qiuwen/d/de/Ajax-loader.gif" style="visibility:hidden" />
		<input type="checkbox" tabindex=1 name="verbose" id="verbose" value="verbose">
		<label for="verbose">Vertical form</label>
		<span style="float:right"><a href="//www.qiuwenbaike.cn/wiki/Template:${template.replace(
			/ /g,
			'_'
		)}" rel="noopener" target="_blank">[Template documentation]</a></span>
	</fieldset>
	<span id="previewSpan"></span>
</div>
`;
		document.querySelector('#refToolFormArea').innerHTML = form;
	};
	const citeMap = () => {
		oldFormHide();
		const template = 'cite map';
		numforms++;
		const form = `<div id="citediv${numforms}">
	<fieldset>
		<legend>Cite map</legend>
		<table cellspacing="5">
			<input type="hidden" value="${template}" id="template">
			<tr>
				<td width="120"><label for="publisher">Publisher: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="publisher"></td>
				<td width="120"><label for="title">&nbsp;Title: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="title"></td>
			</tr>
			<tr>
				<td width="120"><label for="url">URL: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="url"></td>
				<td width="120"><label for="access-date">&nbsp;Access date: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="access-date"></td>
			</tr>
			<tr>
				<td width="120"><label for="edition">Edition: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="edition"></td>
				<td width="120"><label for="date">&nbsp;Date or year: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="date"></td>
			</tr>
			<tr>
				<td width="120"><label for="cartography">Cartography: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="cartography"></td>
				<td width="120"><label for="scale">&nbsp;Scale: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="scale"></td>
			</tr>
			<tr>
				<td width="120"><label for="series">Series: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="series"></td>
				<td width="120"><label for="page">&nbsp;Page: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="page"></td>
			</tr>
			<tr>
				<td width="120"><label for="section">Section: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="section"></td>
				<td width="120"><label for="inset">&nbsp;Inset: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="inset"></td>
			</tr>
			<tr>
				<td width="120"><label for="isbn">ISBN: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="isbn"></td>
				<td width="120"><label for="refname">&nbsp;Reference name: </label></td>
				<td width="400"><input type="text" tabindex=1 style="width:100%" id="refname"></td>
			</tr>
		</table>
		<input type="button" value="Add citation" onClick="addcites()">
		<input type="button" value="Preview citation" onClick="previewCitationDefault()">
		<img id="progress" src="https://tu.zhongwen.wiki/images/qiuwen/d/de/Ajax-loader.gif" style="visibility:hidden" />
		<input type="checkbox" tabindex=1 name="verbose" id="verbose" value="verbose">
		<label for="verbose">Vertical form</label>
		<span style="float:right"><a href="//www.qiuwenbaike.cn/wiki/Template:${template.replace(
			/ /g,
			'_'
		)}" rel="noopener" target="_blank">[Template documentation]</a></span>
	</fieldset>
	<span id="previewSpan"></span>
</div>
`;
		document.querySelector('#refToolFormArea').innerHTML = form;
	};
	const showRefSectionOptions = () => {
		oldFormHide();
		const template = 'cite encyclopedia';
		numforms++;
		const form = `<div id="citediv${numforms}">
	<fieldset>
		<legend>Add references section</legend>Headline:<br>
		<input id="references" name="headline" type="radio" tabindex=1 checked="checked">
		<label for="references">== References ==</label>
		<br>
		<input id="notes" name="headline" type="radio" tabindex=1>
		<label for="notes">== Notes ==</label>
		<br>Type:<br>
		<input id="type-references" name="type" type="radio" tabindex=1>
		<label for="type-references">&lt;references/&gt;</label>
		<br>
		<input id="type-reflist" name="type" type="radio" tabindex=1 checked="checked">
		<label for="type-reflist">{{Reflist}}</label>
		<br>
		<input type="checkbox" tabindex=1 id="ldr">
		<label for="ldr">List-defined references</label> (<a href="//www.qiuwenbaike.cn/wiki/Help:%E5%BC%95%E7%94%A8" rel="noopener" target="_blank">Info 1</a>, <a href="//en.wikipedia.org/wiki/Help:Footnotes#List-defined_references" rel="noopener" target="_blank">Info 2</a>)<br>
		<input type="button" value="Add references section" onClick="addRefSection()">
	</fieldset>
</div>
`;
		document.querySelector('#refToolFormArea').innerHTML = form;
	};
	const makeCiteCode = () => {
		const cites = document.querySelector(`#citediv${numforms}`).querySelectorAll('input');
		let template = '';
		let citebegin = '<ref';
		let citename = '';
		let citeinner = '';
		for (const cite of cites) {
			let citeid = cite.id;
			let citevalue = cite.value;
			citevalue = citevalue.trim(); // Trim leading and trailing whitespace
			if (citeid === 'verbose') {
				if (cite.checked) {
					citeinner = citeinner.replace(/\|/g, '\n|');
				}
			} else if (citevalue !== '' && cite.type !== 'button' && cite.type !== 'image') {
				if (citeid === 'refname') {
					citebegin += ` name="${citevalue}"`;
				} else if (citeid === 'template') {
					citename = `>{{${citevalue}`;
					template = citevalue;
				} else {
					if (citeid === 'pages') {
						if (/^\w+$/.test(citevalue) && template !== 'cite encyclopedia') {
							citeid = 'page'; // Use page= instead of pages= if only one page. Makes p. 5 instead of pp. 5.
						} else {
							citevalue = citevalue.replace(/-/g, '–'); // Replace hyphens with en dashes
						}
					} else if (citeid === 'date' && /^\d{4}$/.test(citevalue)) {
						citeid = 'year'; // Use year= instead of date= if only the year is specified
					}
					citeinner += `|${citeid}=${citevalue}`;
				}
			}
		}
		const full_cite = `${citebegin + citename + citeinner}}}</ref>`;
		return full_cite;
	};
	const addcites = (_template) => {
		const cite = makeCiteCode();
		$('#wpTextbox1').trigger('focus');
		mw.toolbar.insertTags(cite, '', '');
		// document.querySelector(`#citediv${numforms}`).style.display = 'none';
		oldFormHide();
	};
	const addRefSection = () => {
		let wikicode = '\n';
		if (document.querySelector('#references').checked) {
			wikicode += '== References ==\n';
		} else if (document.querySelector('#notes').checked) {
			wikicode += '== Notes ==\n';
		} else {
			mw.notify('No headline selected!', {tag: 'RefToolbarLegacy', type: 'error'});
		}
		if (document.querySelector('#type-references').checked) {
			wikicode += document.querySelector('#ldr').checked ? '<references>\n\n</references>\n' : '<references />\n';
		} else if (document.querySelector('#type-reflist').checked) {
			wikicode += document.querySelector('#ldr').checked ? '{{Reflist|refs=\n\n}}\n' : '{{Reflist}}\n';
		} else {
			mw.notify('No type selected!', {tag: 'RefToolbarLegacy', type: 'error'});
		}
		$('#wpTextbox1').trigger('focus');
		mw.toolbar.insertTags(wikicode, '', '');
		document.querySelector(`#citediv${numforms}`).innerHTML = '';
	};
	const getNamedRefs = (calls) => {
		const text = document.querySelector('#wpTextbox1').value;
		const regex = calls
			? /< *?ref +?name *?= *?(('([^']*?)')|("([^"]*?)")|([^\s"']*?[^/]\b)) *?\/ *?>/gi // '
			: /< *?ref +?name *?= *?(('([^']*?)')|("([^"]*?)")|([^\s"']*?[^/]\b)) *?>/gi; // '
		const namedrefs = [];
		let i = 0;
		let nr = true;
		do {
			const ref = regex.exec(text);
			if (ref === null) {
				nr = false;
			} else {
				if (ref[5]) {
					[, , , , , namedrefs[i]] = ref;
				} else if (ref[3]) {
					[, , , namedrefs[i]] = ref;
				} else {
					[, , , , , , namedrefs[i]] = ref;
				}
				i++;
			}
		} while (nr === true);
		return namedrefs;
	};
	const citeNamedRef = () => {
		const namedrefs = getNamedRefs(false);
		if (namedrefs === '') {
			oldFormHide();
			numforms++;
			const out = `<div id="citediv${numforms}"><fieldset><legend>References in text</legend>There are no named refs (<tt>&lt;ref name="Name"&gt;</tt>) in the text</fieldset></div>`;
			document.querySelector('#refToolFormArea').innerHTML = out;
		} else {
			oldFormHide();
			numforms++;
			let form = `<div id="citediv${numforms}"><fieldset><legend>References in article</legend><table cellspacing="5"><tr><td><label for="namedrefs">&nbsp;Named references in text</label></td><td><select name="namedrefs" id="namedrefs">`;
			for (const namedref of namedrefs) {
				form += `<option value="${namedref}">${namedref}</option>`;
			}
			form +=
				'</select></td></tr></table><input type="button" value="Add citation" onClick="addnamedcite()"></fieldset></div>';
			document.querySelector('#refToolFormArea').innerHTML = form;
		}
	};
	const addnamedcite = () => {
		const name = document.querySelector(`#citediv${numforms}`).querySelectorAll('select')[0].value;
		const ref = `<ref name="${name}" />`;
		$('#wpTextbox1').trigger('focus');
		mw.toolbar.insertTags(ref, '', '');
		document.querySelector(`#citediv${numforms}`).style.display = 'none';
	};
	const getAllRefs = () => {
		const text = document.querySelector('#wpTextbox1').value;
		const regex =
			/< *?ref( +?name *?= *?(('([^']*?)')|("([^"]*?)")|([^\s"']*?[^/]\b)))? *?>((.|\n)*?)< *?\/? *?ref *?>/gim; // "
		const allrefs = [];
		let i = 0;
		let nr = true;
		do {
			const ref = regex.exec(text);
			if (ref === null) {
				nr = false;
			} else {
				if (ref[0].search(/\S{150}/) !== -1) {
					ref[0] = ref[0].replace(/\|(\S)/g, '| $1');
				}
				ref[0] = ref[0].replace(/</g, '&lt;');
				ref[0] = ref[0].replace(/>/g, '&gt;');
				[allrefs[i]] = ref;
				i++;
			}
		} while (nr === true);
		return allrefs;
	};
	const NRcallError = (namedrefs, refname) => {
		for (const namedref of namedrefs) {
			if (namedref === refname) {
				return true;
			}
		}
		return false;
	};
	const errorCheck = () => {
		const allrefs = getAllRefs();
		const allrefscontent = [];
		const samecontentexclude = [];
		let sx = 0;
		const templateexclude = [];
		let tx = 0;
		let skipcheck = false;
		const namedrefcalls = getNamedRefs(true);
		for (const [i, allref] of allrefs.entries()) {
			allrefscontent[i] = allref.replace(
				/&lt; *?ref( +?name *?= *?(('([^']*?)')|("([^"]*?)")|([^\s"']*?[^/]\b)))? *?&gt;((.|\n)*?)&lt; *?\/? *?ref *?&gt;/gim,
				'$8'
			); // "
		}
		const namedrefs = getNamedRefs(false);
		const errorlist = [];
		let q = 0;
		const unclosed = document.querySelector('#unclosed').checked;
		const samecontent = document.querySelector('#samecontent').checked;
		const templates = document.querySelector('#templates').checked;
		const repeated = document.querySelector('#repeated').checked;
		const undef = document.querySelector('#undef').checked;
		for (let i = 0; i < allrefs.length; i++) {
			if (allrefs[i].search(/&lt; *?\/ *?ref *?&gt;/) === -1 && unclosed) {
				errorlist[q] = `<tr><td width="75%"><tt>${allrefs[i]}</tt></td>`;
				errorlist[q] += '<td width="25%">Unclosed <tt>&lt;ref&gt;</tt> tag</td></tr>';
				q++;
			}
			if (samecontent) {
				for (const element of samecontentexclude) {
					if (allrefscontent[i] === element) {
						skipcheck = true;
					}
				}
				let p = 0;
				if (!skipcheck) {
					while (p < allrefs.length) {
						if (allrefscontent[i] === allrefscontent[p] && i !== p) {
							errorlist[q] = `<tr><td width="75%"><tt>${allrefscontent[i]}</tt></td>`;
							errorlist[q] +=
								'<td width="25%">Multiple refs contain this content, a <a href="https://www.qiuwenbaike.cn/wiki/Help:%E5%BC%95%E7%94%A8">named reference</a> should be used instead</td></tr>';
							q++;
							samecontentexclude[sx] = allrefscontent[i];
							sx++;
							break;
						}
						p++;
					}
				}
				skipcheck = false;
			}
			if (
				templates &&
				allrefscontent[i].search(/{{cite/i) === -1 &&
				allrefscontent[i].search(/{{citation/i) === -1 &&
				allrefscontent[i].search(/{{comic (book|strip) reference/i) === -1 &&
				allrefscontent[i].search(/{{editorial cartoon reference/i) === -1 &&
				allrefscontent[i].search(/{{harv/i) === -1
			) {
				for (const element of templateexclude) {
					if (allrefscontent[i] === element) {
						skipcheck = true;
					}
				}
				if (!skipcheck) {
					errorlist[q] = `<tr><td width="75%"><tt>${allrefs[i]}</tt></td>`;
					errorlist[q] +=
						'<td width="25%">Does not use a <a href="//www.qiuwenbaike.cn/wiki/Category:%E5%BC%95%E7%94%A8%E6%A8%A1%E6%9D%BF">citation template</a></td></tr>';
					q++;
					templateexclude[tx] = allrefscontent[i];
					tx++;
				}
				skipcheck = false;
			}
		}
		if (repeated) {
			const repeatnameexclude = [];
			let rx = 0;
			for (let k = 0; k < namedrefs.length; k++) {
				for (const element of repeatnameexclude) {
					if (namedrefs[k] === element) {
						skipcheck = true;
					}
				}
				let z = 0;
				if (!skipcheck) {
					while (z < namedrefs.length) {
						if (namedrefs[k] === namedrefs[z] && k !== z) {
							errorlist[q] = `<tr><td width="75%"><tt>${namedrefs[k]}</tt></td>`;
							errorlist[q] +=
								'<td width="25%">Multiple references are given the same <a href="https://www.qiuwenbaike.cn/wiki/Help:%E5%BC%95%E7%94%A8">name</a></td></tr>';
							q++;
							repeatnameexclude[rx] = namedrefs[z];
							rx++;
							break;
						}
						z++;
					}
				}
				skipcheck = false;
			}
		}
		if (undef) {
			const undefexclude = [];
			let ux = 0;
			for (const [p, namedrefcall] of namedrefcalls.entries()) {
				for (const element of undefexclude) {
					let i;
					if (allrefscontent[i] === element) {
						skipcheck = true;
					}
				}
				if (!skipcheck && !NRcallError(namedrefs, namedrefcall)) {
					errorlist[q] = `<tr><td width="75%"><tt>${namedrefcall}</tt></td>`;
					errorlist[q] +=
						'<td width="25%">A <a href="https://www.qiuwenbaike.cn/wiki/Help:%E5%BC%95%E7%94%A8">named reference</a> is used but not defined</td></tr>';
					q++;
					undefexclude[ux] = namedrefs[p];
					ux++;
				}
				skipcheck = false;
			}
		}
		if (q > 0) {
			return errorlist;
		}
		return 0;
	};
	const dispErrors = () => {
		oldFormHide();
		const form = `<div id="errorform">
	<fieldset>
		<legend>Error checking</legend>
		<strong>Check for:</strong>
		<br>
		<input type="checkbox" id="unclosed"> Unclosed <tt>&lt;ref&gt;</tt> tags<br>
		<input type="checkbox" id="samecontent"> References with the same content<br>
		<input type="checkbox" id="templates"> References not using a <a href="//www.qiuwenbaike.cn/wiki/Category:%E5%BC%95%E7%94%A8%E6%A8%A1%E6%9D%BF">citation template</a>
		<br>
		<input type="checkbox" id="repeated"> Multiple references with the same name<br>
		<input type="checkbox" id="undef"> Usage of undefined named references<br>
		<input type="button" id="errorchecksubmit" value="Check for selected errors" onclick="doErrorCheck()"/>
	</fieldset>
</div>
`;
		document.querySelector('#citeselect').innerHTML += form;
	};
	const doErrorCheck = () => {
		const errors = errorCheck();
		document.querySelector('#errorform').remove();
		if (errors === 0) {
			if (numforms !== 0) {
				document.querySelector(`#citediv${numforms}`).style.display = 'none';
			}
			numforms++;
			const out = `<div id="citediv${numforms}"><fieldset><legend>Error checking</legend>No errors found.</fieldset></div>`;
			document.querySelector('#citeselect').innerHTML += out;
		} else {
			if (numforms !== 0) {
				document.querySelector(`#citediv${numforms}`).style.display = 'none';
			}
			numforms++;
			let form = `<div id="citediv${numforms}"><fieldset><legend>Error checking</legend><table border="1px">`;
			for (const error of errors) {
				form += error;
			}
			form += '</table></fieldset></div>';
			document.querySelector('#citeselect').innerHTML += form;
		}
	};
	const makeBookCitationCode = (callback) => {
		let cite = '<ref';
		const refname = document.querySelector('#refname').value;
		if (/\S/.test(refname)) {
			cite += ` name="${refname}"`;
		}
		cite += '>{{';
		if (document.querySelector('#cite_book').checked || document.querySelector('#plain').checked) {
			cite += 'cite book';
		} else if (document.querySelector('#citation').checked) {
			cite += 'citation';
		} else {
			mw.notify('No template selected.', {tag: 'RefToolbarLegacy', type: 'error'});
		}
		let authorcite = '';
		let prevauthor = 0;
		for (let i = 3; i >= 1; i--) {
			// const author = document.querySelector(`#author${i}`).value;
			const last = document.querySelector(`#last${i}`).value;
			const first = document.querySelector(`#first${i}`).value;
			const authorlink = document.querySelector(`#author-link${i}`).value;
			if (i === 1 && !prevauthor) {
				i = '';
			}
			if (/\S/.test(authorlink)) {
				authorcite = `|author-link${i}=${authorlink}${authorcite}`;
			}
			if (/\S/.test(last)) {
				authorcite = `|last${i}=${last}|first${i}=${first}${authorcite}`;
				prevauthor = 1;
			}
		}
		cite += authorcite;
		const simplefields = [
			'editor',
			'others',
			'title',
			'url',
			'access-date',
			'edition',
			'series',
			'volume',
			'date',
			'publisher',
			'location',
			'language',
			'isbn',
			'pages',
			'chapter',
		];
		for (let fieldname of simplefields) {
			let {value} = document.querySelector(`#${fieldname}`);
			if (/\S/.test(value) || fieldname === 'title') {
				if (fieldname === 'pages') {
					if (/^\w+$/.test(value)) {
						fieldname = 'page'; // Use page= instead of pages= if only one page. Makes p. 5 instead of pp. 5.
					} else {
						value = value.replace(/-/g, '–'); // Replace hyphens with en dashes
						value = value.replace(/,\s*/g, ', '); // One space after each comma
					}
				} else if (fieldname === 'date' && /^\d{4}$/.test(value)) {
					fieldname = 'year'; // Use year= instead of date= if only the year is specified
				}
				cite += `|${fieldname}=${value}`;
			}
		}
		const otherfields = document.querySelector('#otherfields').value;
		if (/\S/.test(otherfields)) {
			cite += `|${otherfields}`;
		}
		if (document.querySelector('#extraparams').checked) {
			cite += '|author-mask=';
			if (!document.querySelector('#citation').checked) {
				cite += '|trans-title=';
			}
			cite += '|format=';
			cite += '|orig-date=';
			cite += '|oclc=';
			cite += '|doi=';
			cite += '|bibcode=';
			cite += '|id=';
			if (/\S/.test(document.querySelector('#chapter').value)) {
				if (!document.querySelector('#citation').checked) {
					cite += '|trans-chapter=';
				}
				cite += '|chapter-url=';
			}
			cite += '|quote=';
			cite += '|lay-url=';
			cite += '|lay-date=';
		}
		cite += '}}</ref>';
		if (document.querySelector('#plain').checked) {
			const match = /^(.*?)({{.*}})(.*?)$/.exec(cite);
			if (match) {
				let [, , citemid] = match;
				const [, citebeg, , citeend] = match;
				citemid = citemid.replace(/cite book/, 'Vancite book');
				// mw.notify(`${citebeg}:::${citemid}:::${citeend}`, {tag: 'RefToolbarLegacy', type: 'warn'});
				// document.querySelector('#fullcite').value = 'Updating...';
				const url = `api.php?action=expandtemplates&format=xml&text=${encodeURIComponent(citemid)}`;
				document.querySelector('#progress').style.visibility = 'visible';
				const xmlhttpExpand = new XMLHttpRequest();
				xmlhttpExpand.addEventListener('readystatechange', () => {
					if (xmlhttpExpand.readyState === 4) {
						if (xmlhttpExpand.status === 200) {
							document.querySelector('#progress').style.visibility = 'hidden';
							const xmlDoc = xmlhttpExpand.responseXML.documentElement;
							let expanded = xmlDoc.querySelectorAll('expandtemplates')[0].textContent;
							if (expanded === undefined) {
								expanded = xmlDoc.querySelectorAll('expandtemplates')[0].childNodes[0].nodeValue;
							}
							expanded = expanded.replace(/<span.*?>/gi, '');
							expanded = expanded.replace(/<\/span>/gi, '');
							expanded = expanded.replace(/<nowiki\/?>/gi, '');
							expanded = expanded.replace(/&#32;/gi, ' ');
							expanded = expanded.replace(/&#59;/gi, ';');
							expanded = expanded.replace(/&#91;/gi, '[');
							expanded = expanded.replace(/&#93;/gi, ']');
							const plaincite = citebeg + expanded + citeend;
							// mw.notify(plaincite, {tag: 'RefToolbarLegacy', type: 'warn'});
							callback(plaincite);
						} else {
							mw.notify('The query returned an error.', {tag: 'RefToolbarLegacy', type: 'error'});
						}
					}
				});
				xmlhttpExpand.open('GET', url, true);
				xmlhttpExpand.send(null);
			} else {
				mw.notify('Error A1', {tag: 'RefToolbarLegacy', type: 'error'});
			}
		} else {
			if (document.querySelector('#verbose').checked) {
				cite = cite.replace(/\|/g, '\n|');
			}
			callback(cite);
		}
	};
	const makeCiteBook = () => {
		makeBookCitationCode((cite) => {
			$('#wpTextbox1').trigger('focus');
			mw.toolbar.insertTags(cite, '', '');
			if (!refToolDebug) {
				oldFormHide();
			}
		});
	};
	const formatDate = (datein, dateformat) => {
		if (dateformat === '') {
			return datein;
		}
		datein = datein.replace(/^\s*(.*?)\s*$/, '$1'); // Trim whitespace
		let year = -1;
		let month = -1;
		let date = -1;
		const match = /^(\d\d\d\d)-(\d\d?)(-(\d\d?))?$/.exec(datein);
		if (match) {
			// mw.notify(` match[1]=${match[1]} match[2]=#${match[2]}# match[3]=${match[3]} match[4]=${match[4]}`, {tag: 'RefToolbarLegacy', type: 'warn'});
			year = Number.parseInt(match[1], 10); // 10 forces decimal conversion
			month = Number.parseInt(match[2], 10);
			if (match[4]) {
				date = Number.parseInt(match[4], 10);
			}
		} else if (/^\d{1,2} \w+ \d{4}$/.test(datein) || /^\w+ \d{1,2}, \d{4}$/.test(datein)) {
			const DT = new Date(datein);
			year = DT.getFullYear();
			month = DT.getMonth() + 1;
			date = DT.getDate();
		} else if (datein === 'today') {
			const DT = new Date();
			year = DT.getUTCFullYear();
			month = DT.getUTCMonth() + 1;
			date = DT.getUTCDate();
		} else {
			return datein;
		}
		// mw.notify(`datein=${datein}, y=${year}, m=${month}, d=${date}`, {tag: 'RefToolbarLegacy', type: 'warn'});
		let zmonth = '';
		zmonth = month < 10 ? `0${month.toString()}` : month.toString();
		month = month.toString();
		let zdate = '';
		if (date > -1) {
			zdate = date < 10 ? `0${date.toString()}` : date.toString();
			date = date.toString();
		} else {
			date = '';
		}
		let datestr = dateformat;
		datestr = datestr.replace('<date>', date);
		datestr = datestr.replace('<month>', month);
		datestr = datestr.replace('<zdate>', zdate);
		datestr = datestr.replace('<zmonth>', zmonth);
		datestr = datestr.replace('<monthname>', months[month - 1]);
		datestr = datestr.replace('<year>', year.toString());
		datestr = datestr.replace(/\s+/, ' ').replace(/^\s+/, '').replace(/(\D),/, '$1').replace(/-$/, '');
		return datestr;
	};
	const getDateFormat = () => {
		let dateformat = '';
		if (document.querySelector('#dmy')) {
			if (document.querySelector('#dmy').checked) {
				dateformat = '<date> <monthname> <year>';
			} else if (document.querySelector('#mdy').checked) {
				dateformat = '<monthname> <date>, <year>';
			} else if (document.querySelector('#ymd').checked) {
				dateformat = '<year>-<zmonth>-<zdate>';
			}
		} else if (citeUserDateFormat) {
			dateformat = citeUserDateFormat;
		} else {
			dateformat = citeGlobalDateFormat;
		}
		return dateformat;
	};
	const reformatDates = () => {
		const dateformat = getDateFormat();
		// mw.notify(`:${dateformat}:`, {tag: 'RefToolbarLegacy', type: 'warn'});
		document.querySelector('#access-date').value = formatDate(
			document.querySelector('#access-date').value,
			dateformat
		);
		document.querySelector('#date').value = formatDate(document.querySelector('#date').value, dateformat);
		// document.querySelector('#dateformat_hidden').value = getDateFormatShort();
	};
	/* const updateGetButton = () => {
	document.querySelector('#urlget').disabled = document.querySelector('#url').value === '';
} */
	const preview = (wikitext) => {
		document.querySelector('#progress').style.visibility = 'visible';
		wikitext += '<references />';
		const url = `api.php?action=parse&format=xml&prop=text&text=${encodeURIComponent(wikitext)}`;
		const xmlhttp = new XMLHttpRequest();
		xmlhttp.addEventListener('readystatechange', () => {
			if (xmlhttp.readyState === 4) {
				if (xmlhttp.status === 200) {
					document.querySelector('#progress').style.visibility = 'hidden';
					const xmlDoc = xmlhttp.responseXML.documentElement;
					let previewHTML = xmlDoc.querySelectorAll('text')[0].textContent;
					if (previewHTML === undefined) {
						previewHTML = xmlDoc.querySelectorAll('text')[0].childNodes[0].nodeValue;
					}
					// mw.notify(previewHTML, {tag: 'RefToolbarLegacy', type: 'warn'});
					previewHTML = previewHTML.replace(/href="\//gi, 'href="//www.qiuwenbaike.cn/');
					document.querySelector(
						'#previewSpan'
					).innerHTML = `<fieldset><legend>Citation preview</legend>${previewHTML}</fieldset>`;
				} else {
					mw.notify('The query returned an error.', {tag: 'RefToolbarLegacy', type: 'error'});
				}
			}
		});
		xmlhttp.open('GET', url, true);
		xmlhttp.send(null);
	};
	const previewCitationBook = () => {
		makeBookCitationCode(preview);
	};
	const previewCitationDefault = () => {
		const wikitext = makeCiteCode();
		preview(wikitext);
	};
	const JsonRequest = (url) => {
		const script = document.createElement('script');
		script.setAttribute('src', url);
		script.setAttribute('type', 'text/javascript');
		document.querySelectorAll('head')[0].append(script);
	};
	const pullURL = () => {
		let url = document.querySelector('#url').value;
		if (url) {
			document.querySelector('#progress').style.visibility = 'visible';
			if (!refTagURL) {
				refTagURL = defaultRefTagURL;
			}
			const baseurl = `${refTagURL}urlfetchjs.py`;
			url = `${baseurl}?url=${encodeURIComponent(url)}&callback=useUrlData`;
			JsonRequest(url);
		} else {
			mw.notify('No URL.', {tag: 'RefToolbarLegacy', type: 'error'});
		}
	};
	const pullISBN = () => {
		let isbn = document.querySelector('#isbn').value;
		isbn = isbn.replace(/\D/g, ''); // Digits only
		if (isbn) {
			document.querySelector('#progress').style.visibility = 'visible';
			if (!refTagURL) {
				refTagURL = defaultRefTagURL;
			}
			const baseurl = `${refTagURL}getdiberri.py`;
			const url = `${baseurl}?isbn=${isbn}&callback=useDiberriData`;
			JsonRequest(url);
		} else {
			mw.notify('No ISBN.', {tag: 'RefToolbarLegacy', type: 'error'});
		}
	};
	const pullDOI = () => {
		const doi = document.querySelector('#doi').value;
		if (doi) {
			document.querySelector('#progress').style.visibility = 'visible';
			if (!refTagURL) {
				refTagURL = defaultRefTagURL;
			}
			const baseurl = `${refTagURL}doifetchjs.py`;
			const url = `${baseurl}?doi=${encodeURIComponent(doi)}&callback=useDoiData`;
			JsonRequest(url);
		} else {
			mw.notify('No DOI.', {tag: 'RefToolbarLegacy', type: 'error'});
		}
	};
	const pullJs = () => {
		const book_url = document.querySelector('#url').value;
		if (book_url) {
			document.querySelector('#progress').style.visibility = 'visible';
			const book_url_enc = encodeURIComponent(book_url);
			if (!refTagURL) {
				refTagURL = defaultRefTagURL;
			}
			const baseurl = `${refTagURL}googlebooksjs.py`;
			const url = `${baseurl}?book_url=${book_url_enc}&callback=setFormValues`;
			JsonRequest(url);
		} else {
			mw.notify('No URL.', {tag: 'RefToolbarLegacy', type: 'error'});
		}
	};
	const pullPMID = () => {
		mw.notify('Not implemented yet...', {tag: 'RefToolbarLegacy', type: 'error'});
	};
	const setFormValues = (bookdata) => {
		document.querySelector('#progress').style.visibility = 'hidden';
		// mw.notify(bookdata, {tag: 'RefToolbarLegacy', type: 'warn'});
		// mw.notify(bookdata.page, {tag: 'RefToolbarLegacy', type: 'warn'});
		if (bookdata.title.length > 0) {
			document.querySelector('#title').value = bookdata.title;
		}
		if (bookdata.isbn.length > 0) {
			document.querySelector('#isbn').value = bookdata.isbn;
		}
		if (bookdata.publisher.length > 0) {
			document.querySelector('#publisher').value = bookdata.publisher;
		}
		if (bookdata.pages.length > 0) {
			document.querySelector('#pages').value = bookdata.pages;
			document.querySelector('#pages').style.backgroundColor = '#ffff99';
		}
		if (bookdata.url.length > 0) {
			document.querySelector('#url').value = bookdata.url;
		}
		if (bookdata.date.length > 0) {
			document.querySelector('#date').value = bookdata.date;
		}
		for (let i = 0; i < bookdata.authors.length && i <= 2; i++) {
			const authorn = i + 1;
			const author = bookdata.authors[i];
			const match = /(.+)\s+(.+)/.exec(author);
			if (match) {
				[, document.querySelector(`#first${authorn}`).value] = match;
				[, , document.querySelector(`#last${authorn}`).value] = match;
			} else {
				document.querySelector(`#last${authorn}`).value = author;
			}
		}
		document.querySelector('#coauthors').value = bookdata.authors.splice(3).join(', ');
		setAccessDateToday();
		makeRefname();
	};
	const useDiberriData = (bookdata) => {
		document.querySelector('#progress').style.visibility = 'hidden';
		if (bookdata.title.length > 0) {
			document.querySelector('#title').value = bookdata.title;
		}
		if (bookdata.isbn.length > 0) {
			document.querySelector('#isbn').value = bookdata.isbn;
		}
		if (bookdata.publisher.length > 0) {
			document.querySelector('#publisher').value = bookdata.publisher;
		}
		if (bookdata.location.length > 0) {
			document.querySelector('#location').value = bookdata.location;
		}
		if (bookdata.year.length > 0) {
			document.querySelector('#date').value = bookdata.year;
		}
		if (bookdata.authors.length > 0) {
			const authors = bookdata.authors.split(';', 4);
			for (let i = 0; i < authors.length && i <= 2; i++) {
				const authorn = i + 1;
				const nameparts = authors[i].split(',', 2);
				document.querySelector(`#last${authorn}`).value = nameparts[0].trim();
				if (nameparts.length === 2) {
					document.querySelector(`#first${authorn}`).value = nameparts[1].trim();
				}
			}
			if (authors[3]) {
				document.querySelector('#coauthors').value = authors[3].trim();
			}
		}
		makeRefname();
	};
	const useDoiData = (bookdata) => {
		document.querySelector('#progress').style.visibility = 'hidden';
		if (bookdata.title) {
			document.querySelector('#title').value = bookdata.title;
		}
		// if (bookdata.isbn.length !== 0) {
		//   document..querySelector('#isbn').value = bookdata.isbn;
		// }
		// if (bookdata.publisher.length !== 0) {
		//   document..querySelector('#publisher').value = bookdata.publisher;
		// }
		// if (bookdata.location.length !== 0) {
		//   document..querySelector('#location').value = bookdata.location;
		// }
		if (bookdata.year) {
			document.querySelector('#date').value = bookdata.year;
		}
		if (bookdata.issn) {
			document.querySelector('#issn').value = bookdata.issn;
		}
		if (bookdata.journal) {
			document.querySelector('#journal').value = bookdata.journal;
		}
		if (bookdata.volume) {
			document.querySelector('#volume').value = bookdata.volume;
		}
		if (bookdata.issue) {
			document.querySelector('#issue').value = bookdata.issue;
		}
		if (bookdata.pages) {
			document.querySelector('#pages').value = bookdata.pages;
		}
		if (bookdata.authors) {
			const coauthors = [];
			for (const [i, author] of bookdata.authors.entries()) {
				const authorn = i + 1;
				if (authorn === 1) {
					if (author.last) {
						document.querySelector('#last').value = author.last.trim();
					}
					if (author.first) {
						document.querySelector('#first').value = author.first.trim();
					}
				} else {
					const authorparts = [];
					if (author.first) {
						authorparts.push(author.first.trim());
					}
					if (author.last) {
						authorparts.push(author.last.trim());
					}
					coauthors.push(authorparts.join(' '));
				}
			}
			if (coauthors[0]) {
				document.querySelector('#coauthors').value = coauthors.join(', ');
			}
		}
		makeRefname();
	};
	const useUrlData = (data) => {
		document.querySelector('#progress').style.visibility = 'hidden';
		if (data.title) {
			document.querySelector('#title').value = data.title;
		}
		if (data.work) {
			document.querySelector('#work').value = data.work;
		}
		if (data.page) {
			document.querySelector('#pages').value = data.page;
		}
		if (data.date) {
			document.querySelector('#date').value = formatDate(data.date, getDateFormat());
		}
		if (data.authors) {
			const coauthors = [];
			for (const [i, author] of data.authors.entries()) {
				const authorn = i + 1;
				if (authorn === 1) {
					const match = /(.+)\s+(.+)/.exec(author);
					if (match) {
						document.querySelector('#first').value = match[1].trim();
						document.querySelector('#last').value = match[2].trim();
					} else {
						document.querySelector('#last').value = author.trim();
					}
				} else {
					coauthors.push(author);
				}
			}
			if (coauthors[0]) {
				document.querySelector('#coauthors').value = coauthors.join(', ');
			}
		}
	};
	mw.hook('mw.toolbar').add(() => {
		refbuttons();
	});
};
