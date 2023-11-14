export const userVariant = mw.config.get('wgUserVariant');

export const preserveVariant = () => {
	$(document).on('keydown mousedown touchstart', 'a', function (): void {
		const originalHref = $(this).attr('href');
		let uri;
		if (!originalHref) return;
		try {
			uri = new mw.Uri(originalHref);
		} catch {
			return;
		}
		if (!('variant' in uri.query)) {
			if (originalHref.indexOf('/wiki/') === 0) {
				this.href = `/${userVariant}${originalHref.slice(5)}`;
			} else if (originalHref.indexOf('/index.php?') === 0) {
				this.href = uri.extend({variant: userVariant}).getRelativePath();
			}
		}
	});
};
