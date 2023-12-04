// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const ProveIt = {
	/**
	 * Template data of the templates
	 * Populated on ProveIt.realInit()
	 *
	 * @type {Object} Map from template name to template data
	 */
	templateData: {},
	/**
	 * Convenience method to get a ProveIt configuration option
	 * Configuration options are set from the loader of the wiki, not here
	 *
	 * @param {string} key Option key without the "proveit-" prefix
	 * @return {string} Option value
	 */
	getOption: (key) => {
		return mw.config.get(`proveit-${key}`);
	},
	/**
	 * Convenience method to get a ProveIt interface message
	 * Interface messages are set on ProveIt.init()
	 *
	 * @param {string} key Message key without the "proveit-" prefix
	 * @return {string} Message value
	 */
	getMessage: (key) => {
		// Messages that can be used here:
		// * see messages.js and <https://gitcdn.qiuwen.net.cn/Mirror/mediawiki-gadgets-ProveIt/>
		// * for more information
		return mw.msg(`proveit-${key}`);
	},
	getEditor: () => {
		if (window.ve && ve.init && ve.init.target && ve.init.target.active) {
			if (ve.init.target.getSurface().getMode() === 'source') {
				return '2017';
			}
			return 'visualeditor';
		}
		const action = mw.config.get('wgAction');
		if (['edit', 'submit'].includes(action)) {
			if (mw.user.options.get('usebetatoolbar') === 1) {
				const $body = $('body');
				if ($body.find('.CodeMirror').length > 0) {
					return 'codemirror';
				}
				return 'wikieditor';
			}
			return 'core';
		}
	},
	/**
	 * Convenience method to get the wikitext of the current page
	 *
	 * @return {string} Wikitext of the current page
	 */
	getWikitext() {
		const $body = $('body');
		return $body.find('#wpTextbox1').textSelection('getContents');
	},
	/**
	 * Initialization script
	 */
	init: () => {
		const $body = $('body');
		// Remove any previous instance
		$body.find('#proveit').remove();

		// Only continue on wikitext pages
		const contentModel = mw.config.get('wgPageContentModel');
		if (contentModel !== 'wikitext') {
			return;
		}

		// Only continue on supported namespaces
		const namespace = mw.config.get('wgNamespaceNumber'),
			namespaces = ProveIt.getOption('namespaces');
		if (namespaces && !namespaces.includes(namespace)) {
			return;
		}

		// Only continue on wikitext editors
		if (ProveIt.getEditor() === 'visualeditor') {
			return;
		}

		// Add the basic GUI
		ProveIt.buildGUI();

		// Remove ProveIt when switching out from the source editor
		mw.hook('ve.deactivationComplete').add(() => {
			$body.find('#proveit').remove();
		});

		// When previewing, re-add the ProveIt tag (T154357)
		if (mw.config.get('wgAction') === 'submit') {
			const currentSummary = $body.find('#wpSummary').val(),
				proveitSummary = ProveIt.getOption('summary');
			if (proveitSummary && currentSummary.includes(proveitSummary)) {
				ProveIt.addTag();
			}
		}
	},

	/**
	 * Build the basic GUI and add it to the DOM
	 */
	buildGUI() {
		// Define the basic elements
		const $gui = $('<div>').attr('id', 'proveit'),
			$header = $('<div>').attr('id', 'proveit-header'),
			$main = $('<div>').attr('id', 'proveit-body'),
			$footer = $('<div>').attr('id', 'proveit-footer'),
			$logo = $('<span>').attr('id', 'proveit-logo'),
			$logoText = $('<span>').attr('id', 'proveit-logo-text').text('P'),
			$logoLeftBracket = $('<span>').addClass('proveit-logo-bracket').text('['),
			$logoRightBracket = $('<span>').addClass('proveit-logo-bracket').text(']');

		// Put everything together and add it to the DOM
		$logo.append($logoLeftBracket, $logoText, $logoRightBracket);
		$header.append($logo);
		$gui.append($header, $main, $footer);
		const $body = $('body');
		$body.append($gui);

		// Make the GUI draggable
		$gui.draggable({
			handle: $header,
			containment: 'window',
			start() {
				$gui.css({right: 'auto', bottom: 'auto'});
			},
		});

		// Toggle the GUI when the logo is clicked
		let minimized = true;
		$logo.on('click', () => {
			if (minimized) {
				minimized = false;
				$body.find('#proveit-logo-text').text('ProveIt');
				$body.find('#proveit-header button, #proveit-body, #proveit-footer').show();
				if (Object.keys(ProveIt.templateData).length === 0) {
					ProveIt.realInit();
				} else if ($body.find('#proveit-list').length) {
					ProveIt.buildList(); // Make sure the list is updated
				}
			} else {
				minimized = true;
				$body.find('#proveit-logo-text').text('P');
				$body.find('#proveit-header button, #proveit-body, #proveit-footer').hide();
			}
			$gui.css({top: 'auto', left: 'auto', right: 0, bottom: 0}); // Reset the position of the gadget
		});
	},

	/**
	 * Get the template data, redirects and interface messages, then build the reference list
	 */
	realInit() {
		const $body = $('body');
		$body.find('#proveit-logo-text').text('.'); // Start loading

		// Get the list of template names and prepend the namespace
		const templates = ProveIt.getOption('templates') ?? [],
			formattedNamespaces = mw.config.get('wgFormattedNamespaces'),
			{10: templateNamespace} = formattedNamespaces,
			titles = [];
		for (const templateName_ of templates) {
			titles.push(`${templateNamespace}:${templateName_}`);
		}

		// Get the template data
		const api = new mw.Api({
			ajax: {
				headers: {
					'Api-User-Agent': `Qiuwen/1.1 (ProveIt/2.0; ${mw.config.get('wgWikiID')})`,
				},
			},
		});

		api.get({
			titles: titles.join('|'),
			action: 'templatedata',
			redirects: true,
			includeMissingTitles: true,
			format: 'json',
			formatversion: 2,
		}).done(({pages}) => {
			$body.find('#proveit-logo-text').text('..'); // Still loading

			// Extract and set the template data
			let templateData, templateTitle, templateName;
			for (const id in pages) {
				if (!Object.hasOwn(pages, id)) {
					continue;
				}
				templateData = pages[id];
				if ('missing' in templateData) {
					continue;
				}
				templateTitle = templateData.title;
				templateName = templateTitle.slice(Math.max(0, templateTitle.indexOf(':') + 1)); // Remove the namespace
				ProveIt.templateData[templateName] = templateData;
			}

			// Get all the redirects to the citaton templates
			api.get({
				titles: titles.join('|'),
				action: 'query',
				prop: 'redirects',
				rdlimit: 'max',
				rdnamespace: 10,
				format: 'json',
				formatversion: 2,
			}).done(({query}) => {
				$body.find('#proveit-logo-text').text('...'); // Still loading

				// Map the redirects to the cannonical names
				let redirects, redirectTitle, redirectName;
				for (const templateData_ of query.pages) {
					templateTitle = templateData_.title;
					templateName = templateTitle.slice(Math.max(0, templateTitle.indexOf(':') + 1)); // Remove the namespace
					if ('redirects' in templateData_) {
						({redirects} = templateData_);
						for (const redirect of redirects) {
							redirectTitle = redirect.title;
							redirectName = redirectTitle.slice(Math.max(0, redirectTitle.indexOf(':') + 1)); // Remove the namespace
							ProveIt.templateData[redirectName] = templateName;
						}
					}
				}

				// Get the latest English messages
				$.get(
					'https://gitcdn.qiuwen.net.cn/Mirror/mediawiki-gadgets-ProveIt/raw/branch/master/i18n/en.json'
				).done((enJson) => {
					const englishMessages = JSON.parse(enJson);
					delete englishMessages['@metadata'];

					// Get the latest translations to the preferred user language
					const userLanguage = ['zh-cn', 'zh-my', 'zh-sg'].includes(mw.config.get('wgUserLanguage'))
						? 'zh-hans'
						: ['zh-hk', 'zh-mo', 'zh-tw'].includes(mw.config.get('wgUserLanguage'))
						  ? 'zh-hant'
						  : mw.config.get('wgUserLanguage');
					$.get(
						`https://gitcdn.qiuwen.net.cn/Mirror/mediawiki-gadgets-ProveIt/raw/branch/master/i18n/${userLanguage}.json`
					).always((userLangJson, status) => {
						$body.find('#proveit-logo-text').text('ProveIt'); // Finish loading

						let translatedMessages = {};
						if (status === 'success') {
							translatedMessages = JSON.parse(userLangJson);
							delete translatedMessages['@metadata'];
						}

						// Merge and set the messages
						const messages = {...englishMessages, ...translatedMessages};
						mw.messages.set(messages);

						// Finally, build the list
						ProveIt.buildList();
					});
				});
			});
		});
	},

	/**
	 * Build the reference list and add it to the GUI
	 */
	buildList() {
		const $list = $('<ol>').attr('id', 'proveit-list');
		let $item, $span, $link;

		// Build a list item for each reference
		let wikitext = ProveIt.getWikitext();
		const references = ProveIt.getReferences(wikitext);
		for (const [index, reference] of references.entries()) {
			$item = $('<li>').addClass('proveit-item');
			$item.on('click', reference, (event) => {
				const reference_ = event.data;
				ProveIt.highlight(reference_);
				ProveIt.buildForm(reference_);
			});

			// Add the number
			$span = $('<span>')
				.addClass('proveit-number')
				.text(index + 1);
			$item.append($span);

			// Add the arrow and letters
			$link = $('<a>').addClass('proveit-arrow').text('↑');
			$link.on('click', reference, ProveIt.highlight);
			$item.append($link);

			// Add the letters
			if (reference.citations.length) {
				$link = $('<a>').addClass('proveit-letter').text('a');
				$link.on('click', reference, ProveIt.highlight);
				$item.append($link);

				for (const [i, citation] of reference.citations.entries()) {
					const letter = String.fromCodePoint(98 + i); // 97 is the ASCII code for 'b'
					$link = $('<a>').addClass('proveit-letter').text(letter);
					$link.on('click', citation, ProveIt.highlight);
					$item.append($link);
				}
			}

			// Add the reference template, if any
			if (reference.template.name) {
				$span = $('<span>').addClass('proveit-template').text(reference.template.name);
				$item.append($span);
			}

			// Add the reference snippet
			$item.append(reference.snippet);

			// Add to the list
			$list.append($item);
		}

		// Build a list item for each template
		// First remove the references from the wikitext to avoid matching the templates again
		for (const reference of references) {
			wikitext = wikitext.replace(reference.wikitext, '');
		}
		const templates = ProveIt.getTemplates(wikitext);
		for (const template of templates) {
			$item = $('<li>').addClass('proveit-item');
			$item.on('click', template, (event) => {
				const template_ = event.data;
				ProveIt.highlight(template_);
				ProveIt.buildForm(template_);
			});

			$link = $('<a>').addClass('proveit-arrow').text('↓');
			$link.on('click', template, ProveIt.highlight);
			$item.append($link);

			// Add the template name
			$span = $('<span>').addClass('proveit-template').text(template.name);
			$item.append($span);

			// Add the template snippet
			$item.append(template.snippet);

			// Add to the list
			$list.append($item);
		}

		const $body = $('body');

		if (references.length || templates.length) {
			// Add the list to the GUI and make sure we're at the top
			$body.find('#proveit-body').html($list).scrollTop(0);
		} else {
			const $div = $('<div>')
				.attr('id', 'proveit-no-references-message')
				.text(ProveIt.getMessage('no-references'));
			$body.find('#proveit-body').html($div);
		}

		// Build the footer
		const $footer = $body.find('#proveit-footer');
		$footer.empty();
		if (references.length || templates.length) {
			const $normalizeButton = $('<button>')
				.attr('id', 'proveit-normalize-button')
				.text(ProveIt.getMessage('normalize-button'));
			$footer.append($normalizeButton);
			$normalizeButton.on('click', function () {
				const warning = ProveIt.getOption('normalize-warning');
				if (warning) {
					const $warning = $(`<div>${warning}</div>`);
					OO.ui.confirm($warning).done(function (confirm) {
						if (confirm) {
							$(this).remove();
							ProveIt.normalizeAll(references, templates);
						}
					});
				} else {
					$(this).remove();
					ProveIt.normalizeAll(references, templates);
				}
			});
			const $filterReferences = $('<input>').attr('placeholder', ProveIt.getMessage('filter-references'));
			$footer.prepend($filterReferences);
			$filterReferences.on('keyup', function () {
				const filter = $(this).val().toLowerCase();
				$('li', $list)
					.show()
					.filter(function () {
						return !$(this).text().toLowerCase().includes(filter);
					})
					.hide();
			});
		}

		// Build the header
		const $header = $body.find('#proveit-header'),
			$addReferenceButton = $('<button>')
				.text(ProveIt.getMessage('add-reference-button'))
				.addClass('progressive'),
			$addBibliographyButton = $('<button>').text(ProveIt.getMessage('add-bibliography-button'));
		$('button', $header).remove();
		$header.prepend($addReferenceButton, $addBibliographyButton);

		// Bind events
		$addReferenceButton.on('click', () => {
			const templateName = $.cookie('proveit-last-template'), // Remember the last choice
				wrappedWikitext = templateName ? `<ref>{{${templateName}}}</ref>` : '<ref></ref>',
				reference = new ProveIt.Reference(wrappedWikitext);
			ProveIt.buildForm(reference);
		});
		$addBibliographyButton.on('click', () => {
			const templateName = $.cookie('proveit-last-template'), // Remember the last choice
				wrappedWikitext = templateName ? `{{${templateName}}}` : '',
				template = new ProveIt.Template(wrappedWikitext);
			ProveIt.buildForm(template);
		});
	},

	/**
	 * Normalize all references
	 *
	 * @param {ProveIt.Reference[]} references Array of Reference objects
	 * @param {ProveIt.Template[]} templates Array of Template objects
	 */
	normalizeAll(references, templates) {
		mw.notify(ProveIt.getMessage('normalize-message'));
		setTimeout(() => {
			for (const reference of references) {
				ProveIt.buildForm(reference); // There's no current way to avoid going through the interface, but the user doesn't notice
				ProveIt.update(reference);
			}
			for (const template of templates) {
				ProveIt.buildForm(template);
				ProveIt.update(template);
			}
			ProveIt.buildList();
		}, 100);
	},

	/**
	 * Build the form and add it to the GUI
	 *
	 * @param {ProveIt.Reference|ProveIt.Template} object Reference or Template object to fill the form
	 */
	buildForm(object) {
		const $form = $('<div>').attr('id', 'proveit-form'); // Yea it's not a <form>, for easier styling

		// Add the form to the GUI and make sure we're at the top
		const $body = $('body');
		$body.find('#proveit-body').html($form).scrollTop(0);

		// Build the header
		const $header = $body.find('#proveit-header'),
			$backButton = $('<button>').text(ProveIt.getMessage('back-button'));
		$('button', $header).remove();
		$header.prepend($backButton);
		$backButton.on('click', ProveIt.buildList);

		// Build the footer
		const $footer = $body.find('#proveit-footer'),
			$insertButton = $('<button>')
				.attr('id', 'proveit-insert-button')
				.text(ProveIt.getMessage('insert-button'))
				.on('click', object, ProveIt.insert)
				.addClass('progressive'),
			$updateButton = $('<button>')
				.attr('id', 'proveit-update-button')
				.text(ProveIt.getMessage('update-button'))
				.on('click', object, ProveIt.update)
				.addClass('progressive'),
			$removeButton = $('<button>')
				.attr('id', 'proveit-remove-button')
				.text(ProveIt.getMessage('remove-button'))
				.on('click', object, ProveIt.remove);
		$footer.empty();

		// Add the Insert button or the Remove and Update buttons
		if (ProveIt.getWikitext().includes(object.wikitext)) {
			$footer.append($removeButton, $updateButton);
		} else {
			$footer.append($insertButton);
		}

		// Add the relevant fields and buttons
		if (object instanceof ProveIt.Reference) {
			ProveIt.buildReferenceFields(object);
			ProveIt.buildTemplateFields(object.template);
		} else {
			ProveIt.buildTemplateFields(object);
		}
	},

	/**
	 * Build the reference fields and add them to the form
	 *
	 * @param {ProveIt.Reference} reference Reference object to fill the fields
	 */
	buildReferenceFields(reference) {
		const $fields = $('<div>').attr('id', 'proveit-reference-fields');
		let $label, $input, $div;

		// Add the reference name field
		$label = $('<label>').text(ProveIt.getMessage('reference-name-label'));
		$input = $('<input>').attr('id', 'proveit-reference-name').val(reference.name);
		$div = $('<div>').append($label, $input);
		$fields.append($div);

		// Add the reference group field
		$label = $('<label>').text(ProveIt.getMessage('reference-group-label'));
		$input = $('<input>').attr('id', 'proveit-reference-group').val(reference.group);
		$div = $('<div>').append($label, $input);
		$fields.append($div);

		// Add the reference content field
		$label = $('<label>').text(ProveIt.getMessage('reference-content-label'));
		$input = $('<textarea>').attr('id', 'proveit-reference-content').val(reference.content);
		$div = $('<div>').append($label, $input);
		$fields.append($div);

		// When the reference content changes, update the template fields
		$input.on('change', function () {
			const content = $(this).val(),
				dummy = new ProveIt.Reference(`<ref>${content}</ref>`);
			ProveIt.buildTemplateFields(dummy.template);
		});

		// Add the fields to the form
		const $body = $('body');
		$body.find('#proveit-reference-fields').remove();
		$body.find('#proveit-form').prepend($fields);

		// Add the footer buttons
		const $buttons = $('<span>').attr('id', 'proveit-reference-buttons'),
			$citeButton = $('<button>')
				.attr('id', 'proveit-cite-button')
				.text(ProveIt.getMessage('cite-button'))
				.on('click', reference, reference.cite);
		$buttons.append($citeButton);
		$body.find('#proveit-reference-buttons').remove();
		$body.find('#proveit-footer').prepend($buttons);
	},

	/**
	 * Build the fields for the template parameters and add them to the reference form
	 *
	 * @param {ProveIt.Template} template Template object to fill the fields, if any
	 */
	buildTemplateFields(template) {
		const $fields = $('<div>').attr('id', 'proveit-template-fields');
		let $label, $input, $option, $button, $div;

		// Add the template select menu
		$label = $('<label>').text(ProveIt.getMessage('reference-template-label'));
		$input = $('<select>').attr('id', 'proveit-template-select');
		$div = $('<div>').append($label, $input);
		$fields.append($div);

		// Add the empty option
		$option = $('<option>').text(ProveIt.getMessage('no-template')).val('');
		$input.append($option);

		// Add an option for each template
		const templateNames = Object.keys(ProveIt.templateData).sort();
		for (const templateName of templateNames) {
			if (typeof ProveIt.templateData[templateName] === 'string') {
				continue;
			}
			$option = $('<option>').text(templateName).val(templateName);
			if (template.name === templateName) {
				$option.prop('selected', true);
			}
			$input.append($option);
		}

		// When the template select changes, update the template fields
		$input.on('change', template, function (event) {
			const template_ = event.data;
			template_.name = $(this).val();
			template_.data = template_.getData();
			template_.params = template_.getParams();
			template_.paramOrder = template_.getParamOrder();
			$.cookie('proveit-last-template', template_.name); // Remember the new choice
			ProveIt.buildTemplateFields(template_);
		});

		if ('maps' in template.data && 'citoid' in template.data.maps) {
			// Add the Citoid field
			$button = $('<button>').text(ProveIt.getMessage('citoid-load'));
			$label = $('<label>')
				.text(ProveIt.getMessage('citoid-label'))
				.attr('data-tooltip', ProveIt.getMessage('citoid-tooltip'));
			$input = $('<input>').attr('placeholder', ProveIt.getMessage('citoid-placeholder'));
			$div = $('<div>').append($button, $label, $input);
			$fields.append($div);

			// When the Citoid button is clicked, try to extract the reference data automatically via the Citoid service
			$button.on('click', function () {
				const $button_ = $(this),
					query = $button_.siblings('input').val();

				// We need a query
				if (!query) {
					return;
				}

				// Show the loading message
				$button_.text(ProveIt.getMessage('citoid-loading')).prop('disabled', true);

				// Get the data
				$.get(`//citoid.qiuwen.net.cn/api?action=query&format=mediawiki&search=${encodeURIComponent(query)}`)
					.done((data) => {
						// Recursive helper function
						const setParamValue = function setParamValue(paramName_, paramValue_) {
							if (typeof paramName_ === 'string' && typeof paramValue_ === 'string') {
								$(`.proveit-template-param [name="${paramName_}"]`).val(paramValue_);
							} else if (Array.isArray(paramName_) && Array.isArray(paramValue_)) {
								for (const i in paramName_) {
									if (!Object.hasOwn(paramName_, i)) {
										continue;
									}
									setParamValue(paramName_[i], paramValue_[i]);
								}
							}
						};

						// Fill the template fields
						const citoidMap = template.data.maps.citoid;
						const [citoidData] = data;
						let paramName, paramValue;
						for (const citoidKey in citoidData) {
							if (!Object.hasOwn(citoidData, citoidKey)) {
								continue;
							}
							paramName = citoidMap[citoidKey];
							paramValue = citoidData[citoidKey];
							setParamValue(paramName, paramValue);
						}

						// Reset the button
						$button_.text(ProveIt.getMessage('citoid-load')).prop('disabled', false);

						// Update the reference content too
						if ($body.find('#proveit-reference-content').length) {
							let content = $body.find('#proveit-reference-content').val();
							const dummy = new ProveIt.Reference(`<ref>${content}</ref>`);
							content = dummy.buildContent();
							$body.find('#proveit-reference-content').val(content);
						}

						// @todo For some reason this isn't firing
					})
					.fail(() => {
						$button_.text(ProveIt.getMessage('citoid-error'));
						setTimeout(() => {
							$button_.text(ProveIt.getMessage('citoid-load')).prop('disabled', false);
						}, 3000);
					});
			});
		}

		// Add a field for each parameter
		const userLanguage = mw.config.get('wgUserLanguage'),
			contentLanguage = mw.config.get('wgContentLanguage');
		let paramData, labelText, labelTooltip, inputValue, inputPlaceholder;
		for (const inputName of template.paramOrder) {
			// Reset defaults
			paramData = {
				label: null,
				description: null,
				required: false,
				suggested: false,
				deprecated: false,
			};
			labelText = inputName;
			labelTooltip = null;
			inputValue = null;
			inputPlaceholder = null;

			// Override with template data
			if ('params' in template.data && inputName in template.data.params) {
				paramData = template.data.params[inputName];
			}
			if (paramData.label) {
				if (userLanguage in paramData.label) {
					labelText = paramData.label[userLanguage];
				} else if (contentLanguage in paramData.label) {
					labelText = paramData.label[contentLanguage];
				}
			}
			if (paramData.description) {
				if (userLanguage in paramData.description) {
					labelTooltip = paramData.description[userLanguage];
				} else if (contentLanguage in paramData.description) {
					labelTooltip = paramData.description[contentLanguage];
				}
			}

			// Extract the parameter value
			if (inputName in template.params) {
				inputValue = template.params[inputName];
			} else if (paramData.aliases) {
				for (const paramAlias of paramData.aliases) {
					if (paramAlias in template.params) {
						inputValue = template.params[paramAlias];
						continue;
					}
				}
			}

			// Build the label, input and div
			$label = $('<label>').text(labelText);
			if (labelTooltip) {
				$label.attr('data-tooltip', labelTooltip);
			}
			$input = paramData.type === 'content' ? $('<textarea>') : $('<input>');
			$input.val(inputValue).attr({
				name: inputName,
				placeholder: inputPlaceholder,
			});
			$div = $('<div>').addClass('proveit-template-param').append($label, $input);

			// If the parameter is of the page type, search the wiki
			if (paramData.type === 'wiki-page-name') {
				$input.attr('list', `${inputName}-list`);
				const $list = $('<datalist>').attr('id', `${inputName}-list`);
				$div.prepend($list);
				$input.on('keyup', function () {
					const search = $(this).val();
					const api = new mw.Api({
						ajax: {
							headers: {
								'Api-User-Agent': `Qiuwen/1.1 (ProveIt/2.0; ${mw.config.get('wgWikiID')})`,
							},
						},
					});
					api.get({
						action: 'opensearch',
						search,
						limit: 5,
						redirects: 'resolve',
						format: 'json',
						formatversion: 2,
					}).done((data) => {
						$list.empty();
						const [, titles] = data;
						for (const title of titles) {
							const $option_ = $('<option>').val(title);
							$list.append($option_);
						}
					});
				});
			}
			// If the parameter is of the URL type, add the Archive button
			if (paramData.type === 'url') {
				$button = $('<button>').text(ProveIt.getMessage('archive-button'));
				$div.prepend($button);
				$button.on('click', $input, function (event) {
					const url = event.data.val().trim();
					if (!url) {
						return;
					}
					const $button_ = $(this);
					$button_.text(ProveIt.getMessage('archive-fetching')).prop('disabled', true);
					$.getJSON(`https://archive.org/wayback/available?url=${encodeURIComponent(url)}`)
						.done((data) => {
							if (data.archived_snapshots.closest) {
								const snapshot = data.archived_snapshots.closest;
								const archive = snapshot.url.replace(/^http:\/\//, 'https://');
								OO.ui.alert(archive, {
									size: 'large',
									title: ProveIt.getMessage('archive-title').text(),
								});
							} else {
								OO.ui.alert(ProveIt.getMessage('archive-no-url').text());
							}
						})
						.fail(() => {
							OO.ui.alert(ProveIt.getMessage('archive-error').text());
						})
						.always(() => {
							$button_.text(ProveIt.getMessage('archive-button')).prop('disabled', false);
						});
				});
			}

			// If the parameter is of the date type, add the Today button
			if (paramData.type === 'date') {
				$button = $('<button>').text(ProveIt.getMessage('today-button'));
				$div.prepend($button);
				$button.on('click', $input, (event) => {
					const input = event.data,
						date = new Date(),
						yyyy = date.getFullYear(),
						mm = `0${date.getMonth() + 1}`.slice(-2),
						dd = `0${date.getDate()}`.slice(-2);
					input.val(`${yyyy}-${mm}-${dd}`);
				});
			}

			// Mark the div according to the parameter status
			if (paramData.required) {
				$div.addClass('proveit-required');
			} else if (paramData.suggested) {
				$div.addClass('proveit-suggested');
			} else if (paramData.deprecated) {
				$div.addClass('proveit-deprecated');
			} else {
				$div.addClass('proveit-optional');
			}

			// Hide all optional and deprecated parameters, unless they are filled
			if (!inputValue && ($div.hasClass('proveit-optional') || $div.hasClass('proveit-deprecated'))) {
				$div.hide();
			}

			// Add the div to the table
			$fields.append($div);
		}

		// Some reference templates may have no template data
		if (!template.data || 'notemplatedata' in template.data) {
			$div = $('<div>')
				.attr('id', 'proveit-no-template-data-message')
				.text(ProveIt.getMessage('no-template-data'));
			$fields.append($div);
		}

		// Add the fields to the form
		const $body = $('body');
		$body.find('#proveit-template-fields').remove();
		$body.find('#proveit-form').append($fields);

		// Add the footer buttons
		const $buttons = $('<span>').attr('id', 'proveit-template-buttons'),
			$filterFields = $('<input>').attr('placeholder', ProveIt.getMessage('filter-fields')),
			$showAllButton = $('<button>')
				.attr('id', 'proveit-show-all-button')
				.text(ProveIt.getMessage('show-all-button'));
		if (template.paramOrder.length) {
			$buttons.append($filterFields);
		}
		if (
			$body.find('.proveit-required, .proveit-suggested').length &&
			$body.find('.proveit-deprecated, .proveit-optional').length
		) {
			$buttons.append($showAllButton);
		} else {
			$body.find('.proveit-deprecated, .proveit-optional').show();
		}
		$body.find('#proveit-template-buttons').remove();
		$body.find('#proveit-footer').prepend($buttons);

		// Bind events
		$showAllButton.on('click', function () {
			$body.find('.proveit-deprecated, .proveit-optional').show();
			$(this).remove();
		});
		$filterFields.on('keyup', function () {
			const filter = $(this).val().toLowerCase();
			$('div', $fields)
				.show()
				.filter(function () {
					return !$(this).text().toLowerCase().includes(filter);
				})
				.hide();
			$body.find('#proveit-show-all-button').remove();
		});

		// When a template parameter changes, update the reference content
		if ($body.find('#proveit-reference-content').length) {
			$body.find('select, input, textarea', '#proveit-template-fields').on('change', () => {
				let content = $body.find('#proveit-reference-content').val();
				const dummy = new ProveIt.Reference(`<ref>${content}</ref>`);
				content = dummy.buildContent();
				$body.find('#proveit-reference-content').val(content);
			});
		}
	},

	/**
	 * Parse the given wikitext in search for references and return an array of Reference objects
	 *
	 * @param {string} wikitext
	 * @return {ProveIt.Reference[]} Array of Reference objects
	 */
	getReferences(wikitext) {
		const references = [],
			matches = wikitext.match(/<\s*ref[^>]*>[^<]*<\s*\/\s*ref\s*>/gi);
		if (matches) {
			for (const match of matches) {
				const reference = new ProveIt.Reference(match);
				references.push(reference);
			}
		}
		return references;
	},

	/**
	 * Parse the given wikitext in search for templates and return an array of Template objects
	 *
	 * @param {string} wikitext
	 * @return {ProveIt.Template[]} Array of Template objects
	 */
	getTemplates(wikitext) {
		const templates = [];
		let templateName,
			templateRegex,
			templateMatch,
			templateWikitext,
			templateStart,
			templateEnd,
			templateDepth,
			template;

		for (templateName in ProveIt.templateData) {
			if (!Object.hasOwn(ProveIt.templateData, templateName)) {
				continue;
			}
			templateRegex = new RegExp(`{{\\s*${templateName}\\s*[|}]`, 'ig');
			while ((templateMatch = templateRegex.exec(wikitext)) !== null) {
				[templateWikitext] = templateMatch;
				templateStart = templateMatch.index;
				// Figure out the templateEnd by searching for the closing "}}"
				// knowing that there may be subtemplates, like so:
				// {{Cite book |title=Foo |year={{BC|123}} |author=Bar}}
				templateEnd = wikitext.length;
				templateDepth = 0;
				for (let i = templateStart; i < templateEnd; i++) {
					if (wikitext[i] + wikitext[i + 1] === '{{') {
						templateDepth++;
						i++; // We speed up the loop to avoid multiple matches when two or more templates are found together
					} else if (wikitext[i] + wikitext[i + 1] === '}}') {
						templateDepth--;
						i++;
					}
					if (templateDepth === 0) {
						templateEnd = i + 1;
						break;
					}
				}
				// eslint-disable-next-line unicorn/prefer-string-slice
				templateWikitext = wikitext.substring(templateStart, templateEnd);
				template = new ProveIt.Template(templateWikitext);
				templates.push(template);
			}
		}
		return templates;
	},

	/**
	 * Add the ProveIt revision tag
	 */
	addTag() {
		const tag = ProveIt.getOption('tag');
		if (!tag) {
			return; // No tag defined
		}
		switch (ProveIt.getEditor()) {
			case 'core':
			case 'wikieditor':
			case 'codemirror': {
				const $body = $('body');
				let $tagInput = $body.find('#wpChangeTags');
				// Don't add it twice
				if (!$tagInput.data('proveit')) {
					if ($tagInput.length) {
						$tagInput.val(`${$tagInput.val()},${tag}`);
					} else {
						$tagInput = $('<input>').attr({
							id: 'wpChangeTags',
							type: 'hidden',
							name: 'wpChangeTags',
							value: tag,
						});
						$body.find('#editform').prepend($tagInput);
					}
					$tagInput.data('proveit', true);
				}
				break;
			}
			// case '2017':
			// 	ve.init.target.saveFields.wpChangeTags = function () {
			// 		return tag;
			// 	};
			// 	break;
		}
	},

	/**
	 * Add the ProveIt edit summary
	 */
	addSummary() {
		let proveitSummary = ProveIt.getOption('summary');
		if (!proveitSummary) {
			return; // No summary defined
		}
		proveitSummary += ' #proveit'; // For tracking via https://hashtags.wmcloud.org/
		switch (ProveIt.getEditor()) {
			case 'core':
			case 'wikieditor':
			case 'codemirror': {
				const $body = $('body');
				const $summaryTextarea = $body.find('#wpSummary'),
					currentSummary = $summaryTextarea.val();
				if (!currentSummary) {
					$summaryTextarea.val(proveitSummary);
				}
				break;
			}
			// case '2017':
			//	$(document).on('focus', '.ve-ui-mwSaveDialog-summary textarea', function () {
			// 		const $summaryTextarea = $(this),
			// 			currentSummary = $summaryTextarea.val();
			// 		if (!currentSummary) {
			// 			$summaryTextarea.val(proveitSummary);
			// 		}
			// 	});
			// 	break;
		}
	},

	/**
	 * Insert the given object in the wikitext
	 *
	 * @param {jQuery.Event|ProveIt.Reference|ProveIt.Template|ProveIt.Citation} object Reference, template or citation, or a jQuery event containing one
	 */
	insert(object) {
		if (object instanceof $.Event) {
			object = object.data;
		}

		const wikitext = object.buildWikitext();

		const $body = $('body');
		if (object instanceof ProveIt.Citation) {
			object.index = $body.find('#wpTextbox1').textSelection('getCaretPosition');
		}
		$body.find('#wpTextbox1').textSelection('encapsulateSelection', {
			peri: wikitext,
			replace: true,
		});

		if (object instanceof ProveIt.Reference) {
			const reference = new ProveIt.Reference(wikitext);
			ProveIt.buildForm(reference); // Changes the Insert button for Update
		}
		if (object instanceof ProveIt.Template) {
			const template = new ProveIt.Template(wikitext);
			ProveIt.buildForm(template); // Changes the Insert button for Update
		}
		ProveIt.addTag();
		ProveIt.addSummary();
	},

	/**
	 * Update the given object in the wikitext
	 *
	 * @param {jQuery.Event|ProveIt.Reference|ProveIt.Template|ProveIt.Citation} object Reference, template or citation, or a jQuery event containing one
	 */
	update(object) {
		if (object instanceof $.Event) {
			object = object.data;
		}
		const wikitext = object.buildWikitext();

		// If the object is a reference, update the citations too
		if (object instanceof ProveIt.Reference) {
			for (const citation of object.citations) {
				ProveIt.update(citation);
			}
		}

		ProveIt.replace(object.wikitext, wikitext);

		object.wikitext = wikitext;
		ProveIt.highlight(object);
		ProveIt.addTag();
		ProveIt.addSummary();
	},

	/**
	 * Remove the given object from the wikitext
	 *
	 * @param {jQuery.Event|ProveIt.Reference|ProveIt.Template|ProveIt.Citation} object Reference, template or citation, or a jQuery event containing one
	 */
	remove(object) {
		if (object instanceof $.Event) {
			object = object.data;
		}

		// If the object is a reference, remove the citations too
		if (
			object instanceof ProveIt.Reference &&
			object.citations.length &&
			confirm(ProveIt.getMessage('confirm-remove'))
		) {
			for (const citation of object.citations) {
				ProveIt.remove(citation);
			}
		}

		ProveIt.replace(object.wikitext, '');

		ProveIt.addTag();
		ProveIt.addSummary();
		ProveIt.buildList();
	},

	/**
	 * Highlight the given object in the wikitext
	 *
	 * @param {jQuery.Event|ProveIt.Reference|ProveIt.Template|ProveIt.Citation} object Reference, template or citation, or a jQuery event containing one
	 */
	highlight(object) {
		if (object instanceof $.Event) {
			object.stopPropagation();
			object = object.data;
		}

		const wikitext = ProveIt.getWikitext();
		let index = wikitext.indexOf(object.wikitext);

		// Make sure we're highlighting the right occurrence
		if (object.index) {
			index = wikitext.indexOf(object.wikitext, object.index);
		}

		const $body = $('body');
		$body
			.find('#wpTextbox1')
			// Focus for wikieditor
			.trigger('focus')
			.textSelection('setSelection', {
				start: index,
				end: index + object.wikitext.length,
			})
			.textSelection('scrollToCaretPosition');
	},

	/**
	 * Helper function to search and replace a string in the editor (first match only)
	 *
	 * @param {string} search String to search
	 * @param {string} replace Replacement string
	 */
	replace(search, replace) {
		const wikitext = ProveIt.getWikitext(),
			start = wikitext.indexOf(search);

		if (start !== -1) {
			const $body = $('body');
			$body
				.find('#wpTextbox1')
				.textSelection('setSelection', {
					start,
					end: start + search.length,
				})
				.textSelection('replaceSelection', replace);
		}
	},

	/**
	 * Citation class
	 *
	 * @class
	 * @param {string} wikitext Citation wikitext
	 * @param {number} index Citation index in the page wikitext
	 */
	Citation(wikitext, index) {
		/**
		 * Citation wikitext
		 */
		this.wikitext = wikitext;

		/**
		 * Citation index in the page wikitext
		 */
		this.index = index;

		/**
		 * Get the name out of the wikitext
		 *
		 * @return {string|undefined} citation name
		 */
		this.getName = function () {
			// Match <ref name="Foo">, <ref name="Foo's">
			let match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*"([^">]+)"[^>]*>/i);
			if (!match) {
				// Match <ref name='Foo'>, <ref name='The "Foo"'>
				match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*'([^'>]+)'[^>]*>/i);
			}
			if (!match) {
				// Match <ref name=Foo>, <ref name=Foo's> and <ref name=The"Foo">
				match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*([^ >]+)[^>]*>/i);
			}
			if (match) {
				return match[1];
			}
		};

		/**
		 * Get the group out of the wikitext
		 *
		 * @return {string|undefined} citation group
		 */
		this.getGroup = function () {
			// Match <ref group="Foo">, <ref group="Foo's">
			let match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*"([^">]+)"[^>]*>/i);
			if (!match) {
				// Match <ref group='Foo'>, <ref group='The "Foo"'>
				match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*'([^'>]+)'[^>]*>/i);
			}
			if (!match) {
				// Match <ref group=Foo>, <ref group=Foo's> and <ref group=The"Foo">
				match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*([^ >]+)[^>]*>/i);
			}
			if (match) {
				return match[1];
			}
		};

		/**
		 * Build the wikitext out of the form
		 *
		 * @return {string} citation wikitext
		 */
		this.buildWikitext = function () {
			const $body = $('body');
			const name = $body.find('#proveit-reference-name').val();
			const group = $body.find('#proveit-reference-group').val();
			let wrappedWikitext = '<ref';
			if (name) {
				wrappedWikitext += ` name="${name}"`;
			}
			if (group) {
				wrappedWikitext += ` group="${group}"`;
			}
			wrappedWikitext += ' />';
			return wrappedWikitext;
		};

		/**
		 * Set the properties
		 */
		this.name = this.getName();
		this.group = this.getGroup();
	},

	/**
	 * Template class
	 *
	 * @class
	 * @param {string} wikitext Template wikitext
	 */
	Template(wikitext) {
		/**
		 * Template wikitext
		 */
		this.wikitext = wikitext;

		/**
		 * Extract the normalized template name from the reference wikitext
		 *
		 * @return {string} normalized template name
		 */
		this.getName = function () {
			let name = '',
				regex,
				index;
			for (const templateName in ProveIt.templateData) {
				if (!Object.hasOwn(ProveIt.templateData, templateName)) {
					continue;
				}
				regex = new RegExp(`{{\\s*${templateName}\\s*[|}]`, 'i');
				index = this.wikitext.search(regex);
				if (index > -1) {
					name = templateName;
					if (typeof ProveIt.templateData[name] === 'string') {
						name = ProveIt.templateData[name];
						break;
					}
					break;
				}
			}
			return name;
		};

		/**
		 * Extract the normalized template parameters from the reference wikitext
		 *
		 * A complex template wikitext may be:
		 * {{Cite book
		 * | anonymous parameter
		 * | param1 = value
		 * | param2 = http://example.com?query=string
		 * | param3 = [[Some|link]]
		 * | param4 = {{Subtemplate|anon|param=value}}
		 * }}
		 *
		 * @return {Object} Map from parameter name to parameter value
		 */
		this.getParams = function () {
			const params = {};

			// Remove the outer braces and split by pipe
			// knowing that we may match pipes inside complex titles, wikilinks or subtemplates, like so:
			// {{Cite book |title=Some|Title |author=[[Foo|Bar]] |year={{AD|123}} }}
			// eslint-disable-next-line unicorn/prefer-string-slice
			const paramArray = this.wikitext.substring(2, this.wikitext.length - 2).split('|');

			// Drop the template name
			paramArray.shift();

			let paramString,
				linkDepth = 0,
				subtemplateDepth = 0,
				indexOfEqual,
				paramNumber = 0,
				paramName,
				paramValue;
			for (const element of paramArray) {
				paramString = element.trim();

				// If we're inside a link or subtemplate, don't disturb it
				if (linkDepth || subtemplateDepth) {
					params[paramName] += `|${paramString}`;
					if (paramString.includes(']]') && !paramString.includes('[[')) {
						linkDepth--;
					}
					if (paramString.includes('}}') && !paramString.includes('{{')) {
						subtemplateDepth--;
					}
					continue;
				}

				// If we reach this point and there's no equal sign, it's an anonymous parameter
				indexOfEqual = paramString.indexOf('=');
				if (indexOfEqual === -1) {
					paramNumber++;
					paramName = paramNumber;
					paramValue = paramString;
					params[paramName] = paramValue;
					continue;
				}

				paramName = paramString.slice(0, Math.max(0, indexOfEqual)).trim();
				paramValue = paramString.slice(Math.max(0, indexOfEqual + 1)).trim();

				// Check if there's an unclosed link or subtemplate
				if (paramValue.lastIndexOf('[[') > paramValue.lastIndexOf(']]')) {
					linkDepth++;
				}
				if (paramValue.lastIndexOf('{{') > paramValue.lastIndexOf('}}')) {
					subtemplateDepth++;
				}

				// Normalize the parameter name
				if (this.data && 'params' in this.data && !(paramName in this.data.params)) {
					let paramAliases;
					for (const param in this.data.params) {
						if (!Object.hasOwn(this.data.params, param)) {
							continue;
						}
						paramAliases = this.data.params[param].aliases;
						if (paramAliases.includes(paramName)) {
							paramName = param;
							break;
						}
					}
				}
				params[paramName] = paramValue;
			}
			return params;
		};

		/**
		 * Get the template data for this template
		 *
		 * @return {Object} Template data
		 */
		this.getData = function () {
			let data = {};
			if (this.name in ProveIt.templateData) {
				data = ProveIt.templateData[this.name];
			}
			return data;
		};

		/**
		 * Get the parameter order for this template
		 *
		 * @return {Array}
		 */
		this.getParamOrder = function () {
			let paramOrder = [];
			if ('paramOrder' in this.data) {
				({paramOrder} = this.data);
			} else if ('params' in this.data) {
				paramOrder = Object.keys(this.data.params);
			}
			const paramNames = Object.keys(this.params);
			paramOrder = [...paramOrder, ...paramNames];
			paramOrder = paramOrder.filter((item, index) => {
				return paramOrder.indexOf(item) === index; // Remove duplicates
			});
			return paramOrder;
		};

		/**
		 * Get the snippet for this reference
		 *
		 * @return {string} Snippet for this reference
		 */
		this.getSnippet = function () {
			for (const param in this.params) {
				if (
					'params' in this.data &&
					param in this.data.params &&
					this.data.params[param].required &&
					(this.data.params[param].type === 'string' || this.data.params[param].type === 'content')
				) {
					return this.params[param];
				}
			}
			if (this.wikitext.length > 100) {
				return `${this.wikitext.slice(0, 100).trim()}...`;
			}
			return this.wikitext;
		};

		/**
		 * Build the template wikitext out of the template form
		 *
		 * @return {string} template wikitext
		 */
		this.buildWikitext = function () {
			let templateWikitext = '';
			const $body = $('body');
			const templateName = $body.find('#proveit-template-select').val();
			if (templateName) {
				let paramName, paramValue;
				templateWikitext = `{{${templateName}`;
				$body.find('input, textarea', '.proveit-template-param').each(function () {
					paramName = $(this).attr('name');
					paramValue = $(this).val();
					if (paramName && paramValue) {
						templateWikitext += this.data && this.data.format === 'block' ? '\r\n| ' : ' |';
						templateWikitext += typeof paramName === 'number' ? paramValue : `${paramName}=${paramValue}`;
					}
				});
				if (this.data && this.data.format === 'block') {
					templateWikitext += '\r\n}}';
				} else {
					templateWikitext += '}}';
				}
			}
			return templateWikitext;
		};

		/**
		 * Set the properties
		 */
		this.name = this.getName();
		this.data = this.getData();
		this.params = this.getParams();
		this.paramOrder = this.getParamOrder();
		this.snippet = this.getSnippet();
	},

	/**
	 * Reference class
	 *
	 * @class
	 * @param {string} wikitext Reference wikitext
	 * @param {number} index Reference index
	 */
	Reference(wikitext, index) {
		/**
		 * Reference wikitext
		 */
		this.wikitext = wikitext;

		/**
		 * Reference index
		 */
		this.index = index;

		/**
		 * Insert a <ref> for this reference
		 *
		 * @param {jQuery.Event} event
		 */
		this.cite = function (event) {
			const $body = $('body');
			const reference = event.data;
			let name = $body.find('#proveit-reference-name').val();

			if (!name) {
				name = reference.snippet;
				name = name.replace('"', '');
				name = `${name.slice(0, 30).trim()}...`;
				$body.find('#proveit-reference-name').val(name);
			}

			const citationWikitext = `<ref name="${this.name}" ${reference.group ? ` group="${this.group}"` : ''} />`,
				citation = new ProveIt.Citation(citationWikitext);

			// Insert the citation first, update the reference name, and highlight the citation again
			ProveIt.insert(citation);
			ProveIt.update(reference);
			ProveIt.highlight(citation);
		};

		/**
		 * Get the snippet for this reference
		 *
		 * @return {string} snippet of this reference
		 */
		this.getSnippet = function () {
			if (this.template.snippet) {
				return this.template.snippet;
			}
			if (this.content.length > 100) {
				return `${this.content.slice(0, 100).trim()}...`;
			}
			return this.content;
		};

		/**
		 * Get the content out of the reference wikitext
		 *
		 * @return {string} reference content
		 */
		this.getContent = function () {
			const match = this.wikitext.match(/>([\s\S]*)<\s*\/\s*ref\s*>/i);
			return match[1];
		};

		/**
		 * Get the name out of the wikitext
		 *
		 * @return {string|undefined} New reference
		 */
		this.getName = function () {
			// Match <ref name="Foo">, <ref name="Foo's">
			let match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*"([^">]+)"[^>]*>/i);
			if (!match) {
				// Match <ref name='Foo'>, <ref name='The "Foo"'>
				match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*'([^'>]+)'[^>]*>/i);
			}
			if (!match) {
				// Match <ref name=Foo>, <ref name=Foo's> and <ref name=The"Foo">
				match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*([^ >]+)[^>]*>/i);
			}
			if (match) {
				return match[1];
			}
		};

		/**
		 * Get the group out of the wikitext
		 *
		 * @return {string|undefined} New reference
		 */
		this.getGroup = function () {
			// Match <ref group="Foo">, <ref group="Foo's">
			let match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*"([^">]+)"[^>]*>/i);
			if (!match) {
				// Match <ref group='Foo'>, <ref group='The "Foo"'>
				match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*'([^'>]+)'[^>]*>/i);
			}
			if (!match) {
				// Match <ref group=Foo>, <ref group=Foo's> and <ref group=The"Foo">
				match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*([^ >]+)[^>]*>/i);
			}
			if (match) {
				return match[1];
			}
		};

		/**
		 * Get the reference template
		 *
		 * @return {ProveIt.Template} Reference template
		 */
		this.getTemplate = function () {
			let template = new ProveIt.Template('');
			const templates = ProveIt.getTemplates(this.wikitext);
			if (templates.length) {
				[template] = templates;
			}
			return template;
		};

		/**
		 * Get all the citations to this reference
		 *
		 * @return {ProveIt.Citation[]} Array of Citation objects
		 */
		this.getCitations = function () {
			const citations = [];
			const wikitext_ = ProveIt.getWikitext();
			const citationRegex = /<ref[^/]*\/>/gi;
			let citationMatch, citationWikitext, citationIndex, citationNameMatch, citationName, citation;
			while ((citationMatch = citationRegex.exec(wikitext_)) !== null) {
				[citationWikitext] = citationMatch;
				citationIndex = citationMatch.index;
				citationNameMatch = citationWikitext.match(/name\s*=\s*"([^">]+)"/i);
				if (!citationNameMatch) {
					citationNameMatch = citationWikitext.match(/name\s*=\s*'([^'>]+)'/i);
				}
				if (!citationNameMatch) {
					citationNameMatch = citationWikitext.match(/name\s*=\s*([^ >]+)/i);
				}
				if (citationNameMatch) {
					[, citationName] = citationNameMatch;
					if (citationName === this.name) {
						citation = new ProveIt.Citation(citationWikitext, citationIndex);
						citations.push(citation);
					}
				}
			}
			return citations;
		};

		/**
		 * Build the wikitext out of the form
		 *
		 * @return {string} Reference wikitext
		 */
		this.buildWikitext = function () {
			const $body = $('body');
			const name = $body.find('#proveit-reference-name').val();
			const group = $body.find('#proveit-reference-group').val();
			const content = this.buildContent();
			let wrappedWikitext = '<ref';
			if (name) {
				wrappedWikitext += ` name="${name}"`;
			}
			if (group) {
				wrappedWikitext += ` group="${group}"`;
			}
			wrappedWikitext += `>${content}</ref>`;
			return wrappedWikitext;
		};

		/**
		 * Build the content out of the form
		 *
		 * @return {string} Reference content
		 */
		this.buildContent = function () {
			const $body = $('body');
			let content = $body.find('#proveit-reference-content').val();
			const dummy = new ProveIt.Reference(`<ref>${content}</ref>`);
			content = content.replace(dummy.template.wikitext, this.template.buildWikitext());
			content = content.trim();
			return content;
		};

		/**
		 * Set the properties
		 */
		this.name = this.getName();
		this.group = this.getGroup();
		this.content = this.getContent();
		this.template = this.getTemplate();
		this.snippet = this.getSnippet();
		this.citations = this.getCitations();
	},
};
