/**
 * @description 于[[Special:Listusers]]显示使用者最后编辑时间
 */

const addLeadingZero = (number: number | string): string => {
	const numberString: string =
		typeof number === 'number' && number < 10 ? `0${number.toString()}` : number.toString();
	return numberString;
};

const adjustTime = (time: Date): string => {
	let date: string;
	let today: Date = new Date();
	const yesterday: Date = new Date();
	const tomorrow: Date = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	tomorrow.setDate(tomorrow.getDate() + 1);
	// determine the time offset
	const utcOffset: number = (-1 * time.getTimezoneOffset()) / 60;
	const utcOffsetToString: string = utcOffset >= 0 ? `+${utcOffset}` : `−${Math.abs(utcOffset)}`;
	// set the date bits to output
	const year: number = time.getFullYear();
	const month: string = addLeadingZero(time.getMonth() + 1);
	const day: number = time.getDate();
	const hour: number = Number.parseInt(time.getHours().toString(), 10);
	const minute: string = addLeadingZero(time.getMinutes());
	// return 'today' or 'yesterday' if that is the case
	if (year === today.getFullYear() && month === addLeadingZero(today.getMonth() + 1) && day === today.getDate()) {
		date = '今天';
	} else if (
		year === yesterday.getFullYear() &&
		month === addLeadingZero(yesterday.getMonth() + 1) &&
		day === yesterday.getDate()
	) {
		date = '昨天';
	} else if (
		year === tomorrow.getFullYear() &&
		month === addLeadingZero(tomorrow.getMonth() + 1) &&
		day === tomorrow.getDate()
	) {
		date = '明天';
	} else {
		today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
		time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
		date = `${year}年${addLeadingZero(month)}月${addLeadingZero(day)}日`;
	}
	const hourMinute = `${addLeadingZero(hour)}:${minute} `;
	const returnDate = `${date}, ${hourMinute} (UTC${utcOffsetToString})`;
	return returnDate;
};

export const checkLastActive = (name: string, element: HTMLElement): void => {
	const api: mw.Api = new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': `Qiuwen/1.1 (ListUsersLastActive/1.1; ${mw.config.get('wgWikiID')})`,
			},
		},
	});
	const params: ApiQueryUserContribsParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'usercontribs',
		ucuser: name,
		ucdir: 'older',
		uclimit: 1,
		ucprop: 'timestamp',
	};
	api.get(params).done((usercontribs) => {
		let maxdate: number | Date | null = null;
		if (usercontribs['query'].usercontribs[0] !== undefined) {
			maxdate = new Date(usercontribs['query'].usercontribs[0].timestamp);
		}
		const _params: ApiQueryLogEventsParams = {
			action: 'query',
			formatversion: '2',
			list: 'logevents',
			leuser: name,
			lelimit: 1,
			leprop: 'timestamp',
		};
		api.get(_params).done((logevents) => {
			if (logevents['query'].logevents[0] !== undefined) {
				const date = new Date(logevents['query'].logevents[0].timestamp);
				if (maxdate === null) {
					maxdate = date;
				} else if (date > maxdate) {
					maxdate = date;
				}
			}
		});
		const message: string =
			maxdate === null
				? `（${window.wgULS('从未有操作', '從未有動作')}）`
				: `（${window.wgULS('最后操作于', '最後動作於')}${adjustTime(maxdate)}）`;
		$(element).append(message);
	});
};
