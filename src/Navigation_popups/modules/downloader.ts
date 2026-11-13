// 本文件由 Navigation_popups 原版 core.js 的 downloader.js 段落拆分而来，保留原有实现。
import type {Dow} from './types';
import type {Navpopup} from './navpopup';
import {pg} from './pg';

// 下载完成回调（以 Dow 形态回调）
type DownloadCallback = (d: Dow) => void;
// 失败处理：剩余重试次数，或失败回调（原版 newDownload 的 onfailure 形参）
type OnFailure =
	| number
	| ((d: Dow, url: string, id: string | number | null | undefined, callback: DownloadCallback | undefined) => void);

class Downloader {
	http?: XMLHttpRequest;
	url: string | undefined;
	id: string | number | null = null;
	lastModified?: Date | string | null | undefined;
	callbackFunction: ((d: Downloader) => void) | null = null;
	onFailure: OnFailure | null = null;
	aborted = false;
	method = 'GET';
	async = true;
	// f 回调路径中 http 恒存在，getData 的 null 分支运行时不可达，故以 undefined 归一
	data: string | undefined;
	owner?: Navpopup | undefined;
	constructor(url?: string) {
		this.http = new XMLHttpRequest();
		/**
		 * The url to download
		 *
		 * @type String
		 */
		this.url = url;
		/**
		 * A universally unique ID number
		 *
		 * @type integer
		 */
		this.id = null;
		/**
		 * Modification date, to be culled from the incoming headers
		 *
		 * @type Date
		 * @private
		 */
		this.lastModified = null;
		/**
		 * What to do when the download completes successfully
		 *
		 * @type Function
		 * @private
		 */
		this.callbackFunction = null;
		/**
		 * What to do on failure
		 *
		 * @type Function
		 * @private
		 */
		this.onFailure = null;
		/**
		 * Flag set on <code>abort</code>
		 *
		 * @type boolean
		 */
		this.aborted = false;
		/**
		 * HTTP method. See https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html for
		 * possibilities.
		 *
		 * @type String
		 */
		this.method = 'GET';
		/**
		 * Async flag.
		 *
		 * @type boolean
		 */
		this.async = true;
	}
	/**
	 * Submits the http request.
	 *
	 * @param {*} x
	 */
	send(x?: XMLHttpRequestBodyInit | null) {
		if (!this.http) {
			return null;
		}
		return this.http.send(x);
	}
	/* Aborts the download, setting the <code>aborted</code> field to true. */
	abort() {
		if (!this.http) {
			return null;
		}
		this.aborted = true;
		return this.http.abort();
	}
	/** Returns the downloaded data. */
	getData() {
		if (!this.http) {
			return null;
		}
		return this.http.responseText;
	}
	/** Prepares the download. */
	setTarget() {
		if (!this.http) {
			return;
		}
		this.http.open(this.method, this.url!, this.async);
		this.http.setRequestHeader('Api-User-Agent', pg.api.userAgent);
	}
	/** Gets the state of the download. */
	getReadyState() {
		if (!this.http) {
			return null;
		}
		return this.http.readyState;
	}
	/**
	 * Starts the download.
	 * Note that setTarget {@source Downloader#setTarget} must be run first
	 */
	start() {
		if (!this.http) {
			return;
		}
		const self = this;
		pg.misc.downloadsInProgress[this.id!] = self;
		this.http.send(null);
	}
	/**
	 * Gets the 'Last-Modified' date from the download headers.
	 * Should be run after the download completes.
	 * Returns <code>null</code> on failure.
	 *
	 * @return {Date}
	 */
	getLastModifiedDate() {
		if (!this.http) {
			return null;
		}
		let lastmod;
		try {
			lastmod = this.http.getResponseHeader('Last-Modified');
		} catch {
			/* empty */
		}
		if (lastmod) {
			return new Date(lastmod);
		}
		return null;
	}
	/**
	 * Sets the callback function.
	 *
	 * @param {Function} f callback function, called as <code>f(this)</code> on success
	 */
	setCallback(f: (this: XMLHttpRequest, ev: Event) => unknown) {
		if (!this.http) {
			return;
		}
		this.http.onreadystatechange = f;
	}
	getStatus() {
		if (!this.http) {
			return null;
		}
		return this.http.status;
	}
}
new Downloader();
pg.misc.downloadsInProgress = {};
const newDownload = function newDownload(
	url: string,
	id?: string | number | null | undefined,
	callback?: DownloadCallback,
	onfailure?: OnFailure
): Downloader | 'ohdear' {
	const d = new Downloader(url);
	if (!d.http) {
		return 'ohdear';
	}
	d.id = id ?? null;
	d.setTarget();
	onfailure ||= 2;
	const f = function f(this: XMLHttpRequest) {
		if (d.getReadyState() === 4) {
			// 原版 this 指向 xhr（无 id 字段），此 delete 实为无害 no-op，保持等价
			delete pg.misc.downloadsInProgress[(this as unknown as {id?: string | number | null}).id ?? ''];
			try {
				if (d.getStatus() === 200) {
					// d.http 恒存在，getData 的 null 分支不可达
					d.data = d.getData() ?? undefined;
					d.lastModified = d.getLastModifiedDate();
					callback?.(d);
				} else if (typeof onfailure === 'number') {
					if (onfailure > 0) {
						// retry
						newDownload(url, id, callback, onfailure - 1);
					}
				} else if (typeof onfailure === 'function') {
					onfailure(d, url, id ?? null, callback);
				}
			} catch {
				/* ignore it */
			}
		}
	};
	d.setCallback(f);
	return d;
};
const fakeDownload = (
	url: string,
	id: string | number | null | undefined,
	callback: DownloadCallback,
	data: string | undefined,
	lastModified: Date | string | null | undefined,
	owner?: Navpopup
): void => {
	// 原版将 callback 误传至 id 形参（无副作用：id 随后被覆盖，且回调由 setCallback 绑定），以 undefined 等价
	const d = newDownload(url, undefined, callback) as Downloader;
	d.owner = owner;
	d.id = id ?? null;
	d.data = data;
	d.lastModified = lastModified;
	return callback(d);
};
const startDownload = (
	url: string,
	id: string | number | null | undefined,
	callback: DownloadCallback
): Downloader | 'ohdear' => {
	const d = newDownload(url, id, callback);
	if (typeof d === 'string') {
		return d;
	}
	d.start();
	return d;
};
const abortAllDownloads = () => {
	for (const x in pg.misc.downloadsInProgress) {
		if (!Object.hasOwn(pg.misc.downloadsInProgress, x)) {
			continue;
		}
		try {
			pg.misc.downloadsInProgress[x]!.aborted = true;
			pg.misc.downloadsInProgress[x]!.abort();
			delete pg.misc.downloadsInProgress[x];
		} catch {
			/* empty */
		}
	}
};

export {Downloader, abortAllDownloads, fakeDownload, newDownload, startDownload};
