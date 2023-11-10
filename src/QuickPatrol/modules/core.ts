import {getMessage} from './i18n';

export const QuickPatrol = () => {
	/* Patrol single page */
	$('.not-patrolled').each((index, element): void => {
		const $patrolBtn = $('<a>')
			.addClass('patrolbtn')
			.text(getMessage('Patrol'))
			.attr({
				id: `patrol_${index}`,
				'data-btnid': index,
				'data-revid': element.dataset['mwRevid'],
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
						$(`#patrol_${btnid}`).css('color', '#f00');
					} else {
						$(`#patrol_${btnid}`)
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
					$(`#patrol_${btnid}`).css('color', '#f00');
				},
			});
		});
		$patrolBtn.appendTo(element);
	});
	/* Patrol all pages */
	const $patrolAllBtn = $('<li>').append($('<a>').attr('id', 'patrol_all').text(getMessage('Patrol all pages')));
	$patrolAllBtn.on('click', () => {
		if (!confirm(getMessage('Patrol all pages?'))) {
			return;
		}
		$('.not-patrolled').each((index): void => {
			if ($(`#patrol_${index}`).css('pointer-events') !== 'none') {
				$(`#patrol_${index}`).trigger('click');
			}
		});
	});
	$patrolAllBtn.appendTo($('#mw-content-text ul'));
};
