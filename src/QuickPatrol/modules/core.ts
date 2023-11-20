import {getMessage} from './i18n';

export const QuickPatrol = () => {
	const $body = $('body');

	/* Patrol single page */
	$body.find('.not-patrolled').each((index, element): void => {
		const $patrolBtn = $('<a>')
			.addClass('gadget-quick_patrol__patrolbtn')
			.text(getMessage('[') + getMessage('Patrol') + getMessage(']'))
			.attr({
				id: `gadget-quick_patrol__${index}`,
				'data-btnid': index,
				'data-revid': element['dataset']['mwRevid'],
			});
		$patrolBtn.on('click', function (): void {
			const self = this;
			const {btnid, revid} = self.dataset;
			$.ajax({
				type: 'POST',
				url: `${mw.config.get('wgScriptPath')}/api.php`,
				data: {
					action: 'patrol',
					format: 'json',
					token: mw.user.tokens.get('patrolToken'),
					revid,
				},
				success: (data) => {
					if (data.error) {
						mw.notify(`${getMessage('API')}${data.error.info}`, {type: 'error', tag: 'QuickPatrol'});
						$(`#gadget-quick_patrol__${btnid}`).css('color', '#f00');
					} else {
						$(`#gadget-quick_patrol__${btnid}`)
							.css({
								pointerEvents: 'none',
								color: '#888',
							})
							.text(getMessage('Patrolled'));
					}
				},
				error: (error) => {
					mw.notify(getMessage('AJAX'), {type: 'error', tag: 'QuickPatrol'});
					console.error(`[QuickPatrol] Ajax error: ${error}`);
					$(`#gadget-quick_patrol__${btnid}`).css('color', '#f00');
				},
			});
		});
		$patrolBtn.appendTo(element);
	});
	/* Patrol all pages */
	const $patrolAllBtn = $('<li>').append(
		$('<a>')
			.attr('id', 'gadget-quick_patrol__all')
			.text(getMessage('[') + getMessage('Patrol all pages') + getMessage(']'))
	);
	$patrolAllBtn.on('click', () => {
		if (!confirm(getMessage('Patrol all pages?'))) {
			return;
		}
		$body.find('.not-patrolled').each((index: number): void => {
			if ($(`#gadget-quick_patrol__${index}`).css('pointer-events') !== 'none') {
				$(`#gadget-quick_patrol__${index}`).trigger('click');
			}
		});
	});
	$patrolAllBtn.appendTo($body.find('#mw-content-text ul'));
};
