type OouiConfirmWithStyle = (message: string) => JQuery.Promise<boolean>;

/**
 * @requires oojs-ui-windows
 * @param {string} [message]
 * @return {JQuery.Promise<boolean>}
 */
const oouiConfirmWithStyle: OouiConfirmWithStyle = (message) => {
	return OO.ui
		.confirm(
			$('<div>')
				.addClass('oo-ui-window-foot')
				.css({
					border: '.1rem solid #0645ad',
					display: 'flex',
					'justify-content': 'space-evenly',
				})
				.append(
					$('<span>')
						.css({
							'font-size': '1.2rem',
							'font-weight': '500',
							'line-height': '1.8',
							padding: '.4em 0',
						})
						.text(message)
				)
		)
		.then((isConfirm: boolean): boolean => {
			return isConfirm;
		});
};

export {type OouiConfirmWithStyle, oouiConfirmWithStyle};
