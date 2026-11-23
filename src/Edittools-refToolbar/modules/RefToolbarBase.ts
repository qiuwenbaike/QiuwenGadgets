import {addIcon, calendarIcon, searchIcon} from './util/images';
import {citeFormTd} from '../Edittools-refToolbar.module.less';
import {getMessage} from './util/getMessage';

const refToolbarBase = (): void => {
	window.CiteTB ||= {
		Templates: {}, // All templates
		Options: {}, // Global options
		UserOptions: {}, // User options
		DefaultOptions: {}, // Script defaults
	} as CiteTB;

	// Class for cite templates
	window.CiteTemplate = class CiteTemplate implements CiteTemplateInstance {
		templatename: string;
		shortform: string;
		basic: CiteField[];
		extra: CiteField[];
		incrementables: Record<string, CiteIncrementable>;

		constructor(templatename: string, shortform: string, basicfields: CiteField[], expandedfields: CiteField[]) {
			// Properties
			this.templatename = templatename; // The template name - "cite web", "cite book", etc.
			this.shortform = shortform; // A short form, used for the dropdown box
			this.basic = basicfields; // Basic fields - author, title, publisher...

			// Less common - quote, archiveurl - should be everything the template supports minus the basic ones
			this.extra = expandedfields;
			this.incrementables = {};

			// Add it to the list
			CiteTB.Templates[this.templatename] = this;
		}
		makeFormInner(fields: CiteField[], incrsetup: boolean): JQuery<HTMLElement>[] {
			const trs: JQuery<HTMLElement>[] = [];
			const autofills: string[] = [];
			let tr = $('<tr>');
			for (const [i, fieldobj] of fields.entries()) {
				let {field} = fieldobj;
				let labelfield = fieldobj.field;
				let ad: JQuery<HTMLElement> | undefined;
				let im: JQuery<HTMLElement> | undefined;
				if (incrsetup && fieldobj.increment_group) {
					field = fieldobj.field.replace('<N>', '1');
					labelfield = fieldobj.field.replace('<N>', '');
					const incrementable = this.incrementables[fieldobj.increment_group];
					if (incrementable) {
						if (incrementable.setup) {
							// Fully initialized from a previous invocation of this function, just resetting the number
							incrementable.val = 1;
						} else {
							// The object has been created, but not fully initialized
							incrementable.fields.push(fieldobj);
						}
					} else {
						// Object not yet created
						this.incrementables[fieldobj.increment_group] = {
							fields: [fieldobj],
							val: 1,
							setup: false,
						};
					}
				} else if (fieldobj.increment_group) {
					// Adding a new row
					const incrementable = this.incrementables[fieldobj.increment_group];
					if (incrementable) {
						field = fieldobj.field.replace('<N>', incrementable.val.toString());
						labelfield = fieldobj.field.replace('<N>', '');
					}
				}
				const autodateFields = CiteTB.getOption('autodate fields');
				if (autodateFields.includes(field)) {
					im = $('<img>').attr('src', calendarIcon);
					im.attr('alt', getMessage('cite-insert-date')).attr('title', getMessage('cite-insert-date'));
					ad = $('<a>').attr('href', '#');
					ad.append(im);
					ad.attr('id', `cite-date-${CiteTB.escStr(this.shortform)}-${field}`);
					$(document).on(
						'click',
						`#cite-date-${CiteTB.escStr(this.shortform)}-${field}`,
						CiteTB.fillAccessdate
					);
				}
				if (fieldobj.autofillid) {
					const autotype = fieldobj.autofillid;
					im = $('<img>').attr('src', searchIcon);
					im.attr('alt', getMessage('cite-autofill-alt')).attr('title', getMessage('cite-autofill-alt'));
					ad = $('<a>').attr('href', '#');
					ad.append(im);
					ad.attr('id', `cite-auto-${CiteTB.escStr(this.shortform)}-${field}-${autotype}`);
					autofills.push(`#cite-auto-${CiteTB.escStr(this.shortform)}-${field}-${autotype}`);
				}
				if (fieldobj.increment_button) {
					const incrtype = fieldobj.increment_group;
					im = $('<img>').attr('src', addIcon);
					im.attr('alt', getMessage('cite-increment-alt')).attr('title', getMessage('cite-increment-alt'));
					ad = $('<a>').attr('href', '#');
					ad.append(im);
					ad.attr('id', `cite-incr-${CiteTB.escStr(this.shortform)}-${incrtype}`);
				}

				const display = getMessage(`cite-${labelfield}-label`);
				const tooltip = fieldobj.tooltip
					? $('<abbr>').attr('title', getMessage(fieldobj.tooltip)).append($('<sup>').text('?'))
					: false;
				const input = $('<input>').attr({
					tabindex: '1',
					style: ad ? 'width: 85%' : 'width: 100%',
					type: 'text',
				});
				input.attr('id', `cite-${CiteTB.escStr(this.shortform)}-${field}`);
				if (fieldobj.autofillprop) {
					let classname = `cite-${CiteTB.escStr(this.shortform)}-${fieldobj.autofillprop}`;
					if (fieldobj.increment_group) {
						input.addClass(`cite-${CiteTB.escStr(this.shortform)}-incr-${fieldobj.increment_group}`);
						classname += `-${(this.incrementables[fieldobj.increment_group] as CiteIncrementable).val.toString()}`;
					}
					input.addClass(classname);
				}
				const label = $('<label>');
				label.attr('for', `cite-${CiteTB.escStr(this.shortform)}-${field}`).text(display);
				if (tooltip) {
					label.append(tooltip);
				}
				let style = 'text-align: right; width: 20%;';
				if (i % 2 === 1) {
					style += ' padding-left: 1em;';
				} else {
					tr = $('<tr>');
				}
				const td1 = $('<td>').addClass(citeFormTd).attr({
					style,
				});
				td1.append(label);
				tr.append(td1);
				const td2 = $('<td>').addClass(citeFormTd).css('width', '30%');
				td2.append(input);
				if (ad) {
					td2.append(ad);
				}
				tr.append(td2);
				if (i % 2 === 0) {
					trs.push(tr);
				}
			}
			let needsetup = false;
			for (const g of Object.keys(this.incrementables)) {
				const incrementable = this.incrementables[g];
				if (incrementable && !incrementable.setup) {
					needsetup = true;
					$(document).on('click', `#cite-incr-${CiteTB.escStr(this.shortform)}-${g}`, CiteTB.incrementFields);
					incrementable.setup = true;
				}
			}
			if (needsetup || Object.keys(this.incrementables).length === 0) {
				for (const autofill of autofills) {
					$(document).on('click', autofill, CiteTB.initAutofill);
				}
			}
			return trs;
		}
		// gives a little bit of HTML so the open form can be identified
		getInitial(): JQuery<HTMLElement> {
			const hidden = $('<input>').addClass('cite-template').attr({
				type: 'hidden',
				value: this.templatename,
			});
			return hidden;
		}
		// makes the form used in the dialog boxes
		getForm(): JQuery<HTMLElement> {
			const main = $('<div>').addClass('cite-form-container');
			const form1 = $('<table>').addClass('cite-basic-fields').css({
				width: '100%',
				'background-color': 'transparent',
			});
			let trs = this.makeFormInner(this.basic, true);
			for (const tr of trs) {
				form1.append(tr);
			}
			const form2 = $('<table>').addClass('cite-extra-fields').css({
				width: '100%',
				'background-color': 'transparent',
				display: 'none',
			});
			trs = this.makeFormInner(this.extra, true);
			for (const tr of trs) {
				form2.append(tr);
			}
			main.append(form1).append(form2);
			const form3 = $('<table>').addClass('cite-other-fields').css({
				width: '100%',
				'background-color': 'transparent',
				'padding-top': '1em',
			});
			const $tr = $('<tr>');
			const $td1 = $('<td>').addClass(citeFormTd).css({
				'text-align': 'right',
				width: '20%',
			});
			const $label1 = $('<label>');
			$label1.attr('for', `cite-${CiteTB.escStr(this.shortform)}-name`).text(getMessage('cite-name-label'));
			$td1.append($label1);
			const td2 = $('<td>').addClass(citeFormTd).css('width', '30%');
			const input1 = $('<input>').attr({
				tabindex: '1',
				style: 'width: 100%',
				type: 'text',
			});
			input1.attr('id', `cite-${CiteTB.escStr(this.shortform)}-name`);
			td2.append(input1);
			const td3 = $('<td>').addClass(citeFormTd).css({
				'text-align': 'right',
				'padding-left': '1em',
				width: '20%',
			});
			const label2 = $('<label>');
			label2.attr('for', `cite-${CiteTB.escStr(this.shortform)}-group`).text(getMessage('cite-group-label'));
			td3.append(label2);
			const td4 = $('<td>').addClass(citeFormTd).css('width', '30%');
			const input2 = $('<input>').attr({
				tabindex: '1',
				style: 'width: 100%',
				type: 'text',
			});
			input2.attr('id', `cite-${CiteTB.escStr(this.shortform)}-group`);
			td4.append(input2);
			$tr.append($td1).append(td2).append(td3).append(td4);
			form3.append($tr);
			main.append(form3);
			const extras = $('<div>');
			extras.append(
				$('<input>').addClass('cite-form-status').attr({
					type: 'hidden',
					value: 'closed',
				})
			);
			const hidden = $('<input>').addClass('cite-template').attr('type', 'hidden');
			hidden.val(this.templatename);
			extras.append(hidden);
			const span1 = $('<span>').addClass('cite-preview-label').css('display', 'none');
			span1.text(getMessage('cite-raw-preview'));
			extras.append(span1).append(
				$('<div>').addClass('cite-ref-preview').css({
					padding: '0.5em',
					'font-size': '110%',
				})
			);
			const span2 = $('<span>').addClass('cite-prev-parsed-label').css('display', 'none');
			span2.text(getMessage('cite-parsed-label'));
			extras.append(span2).append(
				$('<div>').addClass('cite-preview-parsed').css({
					'padding-bottom': '0.5em',
					'font-size': '110%',
				})
			);
			const link = $('<a>').addClass('cite-prev-parse').attr('href', '#').css({
				margin: '0 1em',
				display: 'none',
				color: '#00008b',
			});
			link.text(getMessage('cite-form-parse'));
			extras.append(link);
			main.append(extras);
			return main;
		}
	};

	$(document).find('head').trigger('reftoolbarbase');
};

export {refToolbarBase};
