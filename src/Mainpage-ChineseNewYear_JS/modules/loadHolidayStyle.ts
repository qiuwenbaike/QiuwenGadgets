import {getDayDetail} from 'ext.gadget.ChineseDays';

const loadHolidayStyle = () => {
	const today = new Date().toISOString().slice(0, 10);

	const {work, name} = getDayDetail(today);

	if (work === true) {
		return;
	}

	const holidays = [
		"New Year's Day",
		'Spring Festival',
		'Tomb-sweeping Day',
		'Labour Day',
		'Dragon Boat Festival',
		'National Day',
		'Mid-autumn Festival',
	];

	for (const holiday of holidays) {
		if (name.includes(holiday)) {
			mw.loader.using(['ext.gadget.Mainpage-ChineseNewYear']);
		}
	}
};

export {loadHolidayStyle};
