import 'toastify-js/src/toastify.css';
import './custom.less';
import Toastify from 'toastify-js';
import type {ToastifyWithHideToast} from './modules/types';

const toastify: ToastifyWithHideToast = (options, type) => {
	options ??= {};

	let className: string = 'gadget-toastify';
	if (type) {
		switch (type) {
			case 'error':
				className += ` ${className}--error`;
				break;
			case 'success':
				className += ` ${className}--success`;
				break;
			case 'warning':
				className += ` ${className}--warning`;
				break;
			default:
				className += ` ${className}--info`;
		}
	}
	// Messages that can be used here:
	// * see above code
	// * for more information
	options.className = className;

	options.gravity ||= 'bottom';
	options.position ||= 'center';

	const instance = Toastify(options);
	instance.showToast();

	return {
		hideToast: instance.hideToast.bind(instance),
	};
};

export {toastify};
