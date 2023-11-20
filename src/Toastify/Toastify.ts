import * as Toastify from 'toastify-js';

if (!window.toastify) {
	window.toastify = (
		options: Toastify.Options,
		type?: 'info' | 'success' | 'warning' | 'error'
	): {
		hideToast: () => void;
	} => {
		options ??= {};

		let className = 'gadget-toastify';
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
		// eslint-disable-next-line mediawiki/class-doc
		options.className = className;

		if (!options.gravity) {
			options.gravity = 'bottom';
		}
		if (!options.position) {
			options.position = 'center';
		}

		const instance = Toastify(options);
		instance.showToast();

		return {
			hideToast: instance.hideToast.bind(instance),
		};
	};
}
