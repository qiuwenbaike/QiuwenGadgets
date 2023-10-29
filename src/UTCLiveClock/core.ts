import {getMessage} from './i18n';

const padWithZeroes = (number: number) => {
	// Pad a number with zeroes. The number must be an integer where
	// 0 <= number < 100.
	return number < 10 ? `0${number.toString()}` : number.toString();
};

const showTime = ($target: JQuery): void => {
	const now: Date = new Date();
	const windowUTCLiveClockTimeZone: typeof window.UTCLiveClockTimeZone = window.UTCLiveClockTimeZone;
	let timezone: string = (windowUTCLiveClockTimeZone ? windowUTCLiveClockTimeZone.toString() : '') || 'Asia/Shanghai';
	// Set the time.
	let hh: number;
	let mm: number;
	let ss: number;
	if (timezone === 'UTC') {
		hh = now.getUTCHours();
		mm = now.getUTCMinutes();
		ss = now.getUTCSeconds();
	} else if (timezone === 'local') {
		hh = now.getHours();
		mm = now.getMinutes();
		ss = now.getSeconds();
	} else {
		let newNow: Date;
		try {
			newNow = new Date(
				now.toLocaleString('en-US', {
					timeZone: timezone,
				})
			);
			hh = newNow.getHours();
			mm = newNow.getMinutes();
			ss = newNow.getSeconds();
		} catch {
			console.log(`[UTCLiveClock]: error creating Date object with timezone '${timezone}'`);
			timezone = 'UTC';
			newNow = now;
			hh = now.getUTCHours();
			mm = now.getUTCMinutes();
			ss = now.getUTCSeconds();
		}
	}
	const time = `${padWithZeroes(hh)}:${padWithZeroes(mm)}:${padWithZeroes(ss)}`;
	$target.text(time);
	// Schedule the next time change.
	//
	// We schedule the change for 100 ms _after_ the next clock tick. The delay
	// from setTimeout is not precise, and if we aim exactly for the tick, there
	// is a chance that the function will run slightly before it. If this
	// happens, we will display the same time for two seconds in a row - not
	// good. By scheduling 100 ms after the tick, we will always be about 100 ms
	// late, but we are also very likely to display a new time every second.
	const ms: number = now.getUTCMilliseconds();
	setTimeout((): void => {
		showTime($target);
	}, 1100 - ms);
};

export const liveClock = (): void => {
	// Reset whitespace that was set in the peer CSS gadget; this prevents the
	// effect of the p-personal menu jumping to the left when the JavaScript
	// loads.
	$('.client-js > body.skin-vector #p-personal ul').css('margin-right', 'initial');
	// Add the portlet link.
	const element: HTMLLIElement | null = mw.util.addPortletLink('p-personal', '#', '', 'utcdate');
	if (!element) {
		return;
	}
	const $element: JQuery<HTMLLIElement> = $(element);
	// Purge the page when the clock is clicked. We have to do this through the
	// API, as purge URLs now make people click through a confirmation screen.
	$element.on('click', (event: JQuery.ClickEvent<HTMLLIElement>): void => {
		event.preventDefault();
		const api: mw.Api = new mw.Api({
			ajax: {
				headers: {
					'Api-User-Agent': `Qiuwen/1.1 (UTCLiveClock/1.1; ${mw.config.get('wgWikiID')})`,
				},
			},
		});
		const params: ApiPurgeParams = {
			action: 'purge',
			titles: mw.config.get('wgPageName'),
		};
		api.post(params)
			.done(() => {
				mw.notify(getMessage('Success'), {tag: 'UTCLiveClock', type: 'success'});
				location.reload();
			})
			.fail(() => {
				mw.notify(getMessage('Failed'), {tag: 'UTCLiveClock', type: 'error'});
			});
	});
	// Show the clock.
	showTime($element.find('a:first'));
};
