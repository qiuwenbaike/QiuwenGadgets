import {ding} from '../../util';
import {getMessage} from './i18n';

export const editConflict = (): void => {
	const expose = ((): ((title: string) => Promise<number>) => {
		const asyncPost = (url: string, body: string, callback: (XMLHttpRequest: XMLHttpRequest) => void): void => {
			const xhr: XMLHttpRequest = new XMLHttpRequest();
			xhr.addEventListener('readystatechange', () => {
				return callback(xhr);
			});
			xhr.open('POST', url, true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(body);
		};
		const getPage = (title: string, callback: (XMLHttpRequest: XMLHttpRequest) => void): void => {
			return asyncPost(
				`${mw.config.get('wgScriptPath')}/api.php`,
				`action=query&prop=revisions&rvprop=ids|flags|timestamp|user|userid|size&format=json&titles=${encodeURIComponent(
					title
				)}`,
				callback
			);
		};
		const pickPageRevisionId = (responseText: string | null): number => {
			if (typeof responseText === 'string') {
				try {
					const data = JSON.parse(responseText);
					for (const id in data.query.pages) {
						if (!Object.hasOwn(data.query.pages, id)) {
							continue;
						}
						const page = data.query.pages[id];
						return page.revisions[0].revid;
					}
				} catch {
					return 0;
				}
			}
			return 0;
		};
		const tellPageExist = (responseText: string | null): boolean => {
			if (typeof responseText !== 'string') {
				return false;
			}
			let responseObject;
			try {
				responseObject = JSON.parse(responseText);
			} catch {
				return false;
			}
			if (responseObject.query?.pages !== -1) {
				return true;
			}
			return false;
		};
		const checkPageRevisionId = (title: string): Promise<number> => {
			return new Promise((resolve): void => {
				getPage(title, ({readyState, responseText}: XMLHttpRequest): void => {
					if (readyState !== 4) {
						resolve(0);
					}
					if (tellPageExist(responseText)) {
						resolve(pickPageRevisionId(responseText));
					} else {
						resolve(0);
					}
				});
			});
		};
		return checkPageRevisionId;
	})();
	let isInit = false;
	let timer: ReturnType<typeof setInterval> | null = null;
	const mainLoop = async (): Promise<void> => {
		if (isInit) {
			return;
		}
		const pageRevisionId: number = await expose(mw.config.get('wgPageName'));
		if (pageRevisionId === 0) {
			isInit = true;
			if (timer !== null) {
				clearInterval(timer);
			}
		} else if (pageRevisionId > mw.config.get('wgCurRevisionId')) {
			isInit = true;
			ding(getMessage('Notice'), false, 'info');
			if (timer !== null) {
				clearInterval(timer);
			}
		}
	};
	timer = setInterval(mainLoop, 2000);
	document.querySelector('#wpSave')?.addEventListener('click', (): void => {
		isInit = true;
		if (timer !== null) {
			clearInterval(timer);
		}
	});
};
