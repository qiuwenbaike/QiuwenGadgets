import {getLink} from './getLink';

const getSource = (source: string): string => (source ? getLink({link: source}) : '');

const updateWpSource = ({$body, source}: {$body: JQuery<HTMLElement>; source: string}): void => {
	let $wpSource = $body.find<HTMLInputElement>('input[name=wpSource]');
	if (!$wpSource.length) {
		$wpSource = $<HTMLInputElement>('<input>')
			.attr({
				id: 'wpSource',
				name: 'wpSource',
				type: 'hidden',
				value: '',
			})
			.prependTo($body);
	}
	$wpSource.val(getSource(source));
};

export {getSource, updateWpSource};
