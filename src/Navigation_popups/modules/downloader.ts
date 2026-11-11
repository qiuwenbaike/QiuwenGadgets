// 本文件由 Navigation_popups 原版 core.js 的 downloader.js 段落拆分而来，保留原有实现。
import {pg} from './pg';

class Downloader {
	http?: XMLHttpRequest;
	url: string | undefined;
	id: any = null;
	lastModified: Date | string | null = null;
	callbackFunction: any = null;
	onFailure: any = null;
	aborted = false;
	method = 'GET';
	async = true;
	data: any;
	owner: any;
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
	send(x: any) {
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
		pg.misc.downloadsInProgress[this.id] = self;
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
	setCallback(f: any) {
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
const newDownload = function newDownload(url: string, id?: any, callback?: any, onfailure?: any): any {
	const d = new Downloader(url);
	if (!d.http) {
		return 'ohdear';
	}
	d.id = id;
	d.setTarget();
	onfailure ||= 2;
	const f = function (this: any) {
		if (d.getReadyState() === 4) {
			delete pg.misc.downloadsInProgress[this.id];
			try {
				if (d.getStatus() === 200) {
					d.data = d.getData();
					d.lastModified = d.getLastModifiedDate();
					callback(d);
				} else if (typeof onfailure === typeof 1) {
					if (onfailure > 0) {
						// retry
						newDownload(url, id, callback, onfailure - 1);
					}
				} else if (typeof onfailure === 'function') {
					onfailure(d, url, id, callback);
				}
			} catch {
				/* ignore it */
			}
		}
	};
	d.setCallback(f);
	return d;
};
const fakeDownload = (url: string, id: any, callback: any, data: any, lastModified: any, owner: any) => {
	const d = newDownload(url, callback) as Downloader;
	d.owner = owner;
	d.id = id;
	d.data = data;
	d.lastModified = lastModified;
	return callback(d);
};
const startDownload = (url: string, id: any, callback: any): any => {
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
			pg.misc.downloadsInProgress[x].aborted = true;
			pg.misc.downloadsInProgress[x].abort();
			delete pg.misc.downloadsInProgress[x];
		} catch {
			/* empty */
		}
	}
};

export {Downloader, abortAllDownloads, fakeDownload, newDownload, startDownload};
