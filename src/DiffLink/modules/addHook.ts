import {checkDiffPage} from './util/checkDiffPage';
import {checkRevisionPage} from './util/checkRevisionPage';
import {processId} from './processId';

const addHook = (): void => {
	mw.hook('wikipage.content').add(($content: JQuery): void => {
		if ($content.attr('id') !== 'mw-content-text') {
			return;
		}

		const isDiffPage: boolean = checkDiffPage($content);
		const isRevisionPage: boolean = checkRevisionPage($content);
		if (!isDiffPage && !isRevisionPage) {
			return;
		}

		const runInit = () => {
			processId(isRevisionPage, {
				diffId: mw.config.get('wgDiffNewId'),
				oldId: mw.config.get('wgDiffOldId'),
				revisionId: mw.config.get('wgRevisionId'),
			});
		};

		// add listener
		window.addEventListener('onpopstate', runInit);

		// add Proxy
		/*! https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-3.0>*/
		if (!window.pushReplaceRun) {
			window.pushReplaceRun = [];
		}
		Array.prototype.push(window.pushReplaceRun, runInit);

		if (!window.history.pushState) {
			window.history.pushState = new Proxy(window.history.pushState, {
				apply: (
					target,
					thisArg,
					argArray: [data: unknown, unused: string, url?: string | URL | null | undefined]
				) => {
					for (const subFunc of window.pushReplaceRun) {
						subFunc();
					}
					return target.apply(thisArg, argArray);
				},
			});
		}

		if (!window.history.replaceState) {
			window.history.replaceState = new Proxy(window.history.replaceState, {
				apply: (
					target,
					thisArg,
					argArray: [data: unknown, unused: string, url?: string | URL | null | undefined]
				) => {
					for (const subFunc of window.pushReplaceRun) {
						subFunc();
					}
					return target.apply(thisArg, argArray);
				},
			});
		}
	});
};

export {addHook};
