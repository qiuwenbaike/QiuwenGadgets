const resizeWikiplus = ($body: JQuery<HTMLBodyElement>): void => {
	$(window).on('resize', (): void => {
		const windowWidth = $(window).width();
		const $wikiplusInterbox = $body.find('.Wikiplus-InterBox');
		if ($wikiplusInterbox) {
			const clientWidth = window.innerWidth;
			const clientHeight = window.innerHeight;
			const dialogWidth = Math.min(clientWidth, 600);
			const scrollTop = $(document).scrollTop() || 0;
			$wikiplusInterbox.css('margin-left', clientWidth / 2 - dialogWidth / 2);
			$wikiplusInterbox.css('top', scrollTop + clientHeight * 0.2);
			$wikiplusInterbox.css('max-width', `calc(${windowWidth}px - 2em)`);
		}
	});
};

export {resizeWikiplus};
