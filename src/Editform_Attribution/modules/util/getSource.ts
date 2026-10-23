import {getLink} from './getLink';

const getSource = (source: string): string => (source ? getLink({link: source}) : '');

const updateWpSource = ({$body, source}: {$body: JQuery<HTMLElement>; source: string}): void => {
	const $wpSource =
		$body.find<HTMLInputElement>('input[name=wpSource]') ??
		$('<input>')
			.attr({
				id: 'wpSource',
				name: 'wpSource',
				type: 'hidden',
				value: '',
			})
			.prependTo($body);
	$wpSource.val(getSource(source));
};

export {getSource, updateWpSource};
