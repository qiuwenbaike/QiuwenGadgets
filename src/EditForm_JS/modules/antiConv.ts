import {$body} from '../../util';
import {getMessage} from './i18n';

export const antiConv = (): void => {
	// 检测客户端繁简转换
	$body.find('#antispam-container').append(
		$('<input>').attr({
			id: 'wpAntiConv',
			type: 'text',
			value: '\u6C49\u6F22',
		})
	);
	const checkAntiConv = (): void => {
		const $wpAntiConv = $body.find('#wpAntiConv');
		if ($wpAntiConv.length > 0 && $wpAntiConv.val() !== '\u6C49\u6F22') {
			$body.find('#editform :input').attr({disabled: 'disabled', readonly: 'readonly'});
			OO.ui.alert(getMessage('ConversionSoftware'), {size: 'medium'});
		} else {
			setTimeout(checkAntiConv, 1000);
		}
	};
	setTimeout(checkAntiConv, 1000);
};
