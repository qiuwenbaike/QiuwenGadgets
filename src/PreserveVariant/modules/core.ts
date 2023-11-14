import {userVariant} from './constant';

export const preserveVariant = () => {
	$(document).on('keydown mousedown touchstart', 'a', function (): void {
		const originalHref = $(this).attr('href');
		let uri;
		if (!originalHref) {
			return;
		}
		try {
			uri = new mw.Uri(originalHref);
		} catch {
			return;
		}
		if (!('variant' in uri.query)) {
			if (originalHref.includes('/wiki/')) {
				this.href = `/${userVariant}${originalHref.slice(5)}`;
			} else if (originalHref.includes('/index.php?')) {
				this.href = uri.extend({variant: userVariant}).getRelativePath();
			}
		}
	});
};
