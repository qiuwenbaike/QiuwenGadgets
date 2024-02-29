import React from 'ext.gadget.React';
import {api} from './modules/api';
import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';

void getBody().then(function quickPatrol($body: JQuery<HTMLBodyElement>): void {
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'Newpages') {
		return;
	}

	/* Patrol single page */
	$body.find('.not-patrolled').each((index, element): void => {
		const $element: JQuery = $(element);

		const $time: JQuery = $element.find('a');
		if (!$time.length) {
			return;
		}
		const timeHref: string | undefined = $time.attr('href');
		if (!timeHref) {
			return;
		}
		const revIds: RegExpMatchArray | null = timeHref?.match(/oldid=([0-9]+)/);
		if (!revIds || !revIds[1]) {
			return;
		}

		$element.append(
			<a
				className="gadget-quick_patrol__patrolbtn"
				id={`gadget-quick_patrol__${index}`}
				dataset={{
					btnid: index.toString(),
					revid: revIds[1],
				}}
				onClick={(event): void => {
					const {btnid, revid} = event.currentTarget.dataset;
					const params: ApiPatrolParams = {
						action: 'patrol',
						format: 'json',
						revid: Number(revid),
					};
					void api
						.postWithToken('patrol', params)
						.done(({error}): void => {
							if (error) {
								void mw.notify(getMessage('API') + error['info'], {
									tag: 'QuickPatrol',
									type: 'error',
								});
								$(`#gadget-quick_patrol__${btnid}`).css('color', '#f00');
							} else {
								$(`#gadget-quick_patrol__${btnid}`)
									.css({
										pointerEvents: 'none',
										color: '#888',
									})
									.text(getMessage('Patrolled'));
							}
						})
						.fail((error): void => {
							void mw.notify(getMessage('AJAX'), {
								tag: 'QuickPatrol',
								type: 'error',
							});
							$(`#gadget-quick_patrol__${btnid}`).css('color', '#f00');
							console.error('[QuickPatrol] Ajax error:', error);
						});
				}}
			>
				{`[${getMessage('Patrol')}]`}
			</a>
		);
	});

	/* Patrol all pages */
	$body.find('#mw-content-text ul').append(
		<li>
			<a
				id="gadget-quick_patrol__all"
				onClick={(): void => {
					if (!confirm(getMessage('Patrol all pages?'))) {
						return;
					}
					$body.find('.not-patrolled').each((index): void => {
						const $element: JQuery = $(`#gadget-quick_patrol__${index}`);
						if ($element.css('pointer-events') !== 'none') {
							$element.trigger('click');
						}
					});
				}}
			>
				{`[${getMessage('Patrol all pages')}]`}
			</a>
		</li>
	);
});
