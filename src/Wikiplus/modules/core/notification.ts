/* eslint-disable class-methods-use-this */
class Notification {
	constructor() {
		this.init();
	}
	init() {
		$('body').append('<div id="MoeNotification"></div>');
	}
	display(text = '喵~', type = 'success', callback: (ele?: JQuery<HTMLElement>) => void = () => {}): void {
		$('#MoeNotification').append(
			$('<div>')
				.addClass('MoeNotification-notice')
				.addClass(`MoeNotification-notice-${type}`)
				.append(`<span>${text}</span>`)
		);
		$('#MoeNotification').find('.MoeNotification-notice').last().fadeIn(300);
		this.bind();
		this.clear();
		if (callback && typeof callback === 'function') {
			callback($('#MoeNotification').find('.MoeNotification-notice').last());
		}
	}
	bind() {
		const self = this;
		$('.MoeNotification-notice').on('mouseover', function () {
			self.slideLeft($(this));
		});
	}
	success(text: string, callback?: () => void) {
		this.display(text, 'success', callback);
	}
	warning(text: string, callback?: () => void) {
		this.display(text, 'warning', callback);
	}
	error(text: string, callback?: () => void) {
		this.display(text, 'error', callback);
	}
	clear() {
		if ($('.MoeNotification-notice').length >= 10) {
			$('#MoeNotification')
				.children()
				.first()
				.fadeOut(150, function () {
					$(this).remove();
				});
			setTimeout(this.clear, 300);
		}
	}
	empty(f: JQuery<HTMLElement> | ((ele: JQuery<HTMLElement>) => void)) {
		$('.MoeNotification-notice').each(function (i) {
			if (typeof f === 'function') {
				const ele = $(this);
				setTimeout(() => {
					f(ele);
				}, 200 * i);
			} else {
				$(this)
					.delay(i * 200)
					.fadeOut('fast', function () {
						$(this).remove();
					});
			}
		});
	}
	slideLeft(ele: JQuery<HTMLElement>, speed = 150) {
		ele.css('position', 'relative');
		ele.animate(
			{
				left: '-200%',
			},
			speed,
			function () {
				$(this).fadeOut('fast', function () {
					$(this).remove();
				});
			}
		);
	}
}

export default new Notification();
