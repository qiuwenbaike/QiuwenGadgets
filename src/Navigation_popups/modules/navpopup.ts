// 本文件由 Navigation_popups 原版 core.js 的 navpopup.js 段落拆分而来，保留原有实现。
import type {DiffData, Dow} from './types';
import {Drag} from './domdrag';
import type {Title} from './titles';

type MousetrackerHook = (x?: number, y?: number) => boolean | void;

class Mousetracker {
	loopDelay: number;
	timer: ReturnType<typeof setInterval> | null;
	active: boolean;
	dirty: boolean;
	hooks: MousetrackerHook[];
	x?: number;
	y?: number;
	lastHook_x?: number;
	lastHook_y?: number;
	savedListener?: typeof document.onmousemove;
	constructor() {
		/**
		 * Interval to regularly run the hooks anyway, in milliseconds.
		 *
		 * @type Integer
		 */
		this.loopDelay = 400;
		/**
		 * Timer for the loop.
		 *
		 * @type Timer
		 */
		this.timer = null;
		/**
		 * Flag - are we switched on?
		 *
		 * @type Boolean
		 */
		this.active = false;
		/**
		 * Flag - are we probably inaccurate, i.e. not reflecting the actual mouse position?
		 */
		this.dirty = true;
		/**
		 * Array of hook functions.
		 *
		 * @private
		 * @type Array
		 */
		this.hooks = [];
	}
	/**
	 * Adds a hook, to be called when we get events.
	 *
	 * @param {Function} f A function which is called as
	 * <code>f(x,y)</code>. It should return <code>true</code> when it
	 * wants to be removed, and <code>false</code> otherwise.
	 */
	addHook(f: MousetrackerHook) {
		this.hooks.push(f);
	}
	/**
	 * Runs hooks, passing them the x
	 * and y coords of the mouse.  Hook functions that return true are
	 * passed to {@source Mousetracker#removeHooks} for removal.
	 *
	 * @private
	 */
	runHooks() {
		if (!this.hooks || this.hooks.length === 0) {
			return;
		}
		// log('Mousetracker.runHooks; we got some hooks to run');
		let remove = false;
		const removeObj: Record<number, boolean> = {};
		// this method gets called a LOT -
		// pre-cache some variables
		const {x} = this;
		const {y} = this;
		const len = this.hooks.length;
		for (let i = 0; i < len; ++i) {
			// ~ run the hook function, and remove it if it returns true
			if (this.hooks[i]!(x, y) === true) {
				remove = true;
				removeObj[i] = true;
			}
		}
		if (remove) {
			this.removeHooks(removeObj);
		}
	}
	/**
	 * Removes hooks.
	 *
	 * @private
	 * @param {Object} removeObj An object whose keys are the index
	 * numbers of functions for removal, with values that evaluate to true
	 */
	removeHooks(removeObj: Record<number, boolean>) {
		const newHooks: MousetrackerHook[] = [];
		const len = this.hooks.length;
		for (let i = 0; i < len; ++i) {
			if (!removeObj[i]) {
				newHooks.push(this.hooks[i]!);
			}
		}
		this.hooks = newHooks;
	}
	/**
	 * Event listener for mouse wiggles.
	 * We simply grab the event, set x and y and run the hooks.
	 * This makes the cpu all hot and bothered :-(
	 *
	 * @private
	 * @param {Event} e Mousemove event
	 */
	track(e?: MouseEvent) {
		if (e) {
			this.setPosition(e.pageX, e.pageY);
		}
	}
	/**
	 * Sets the x and y coordinates stored and takes appropriate action,
	 * running hooks as appropriate.
	 *
	 * @param {Integer} x, y Screen coordinates to set
	 * @param {number} x
	 * @param {number} y
	 */
	setPosition(x: number, y: number) {
		this.x = x;
		this.y = y;
		if (this.dirty || this.hooks.length === 0) {
			this.dirty = false;
			return;
		}
		if (typeof this.lastHook_x !== 'number') {
			this.lastHook_x = -100;
			this.lastHook_y = -100;
		}
		let diff = (this.lastHook_x! - x) * (this.lastHook_y! - y);
		diff = diff >= 0 ? diff : -diff;
		if (diff > 1) {
			this.lastHook_x = x;
			this.lastHook_y = y;
			if (this.dirty) {
				this.dirty = false;
			} else {
				this.runHooks();
			}
		}
	}
	/**
	 * Sets things in motion, unless they are already that is, registering an event listener on
	 * <code>document.onmousemove</code>. A half-hearted attempt is made to preserve the old event
	 * listener if there is one.
	 */
	enable() {
		if (this.active) {
			return;
		}
		this.active = true;
		// ~ Save the current listener for mousemove events. This isn't too
		// ~ robust, of course.
		this.savedListener = document.onmousemove;
		// ~ Gotta save @tt{this} again for the closure, and use apply for
		// ~ the member function.
		const self = this;
		document.onmousemove = (e) => {
			self.track(e);
		};
		if (this.loopDelay) {
			this.timer = setInterval(() => {
				// log('loop delay in mousetracker is working');
				self.runHooks();
			}, this.loopDelay);
		}
	}
	/**
	 * Disables the tracker, removing the event listener.
	 */
	disable() {
		if (!this.active) {
			return;
		}
		if (typeof this.savedListener === 'function') {
			document.onmousemove = this.savedListener;
		} else {
			document.onmousemove = null;
		}
		if (this.timer) {
			clearInterval(this.timer);
		}
		this.active = false;
	}
}
type NavpopupHook = {
	// hook 以无参形态被 Reflect.apply 调用，返回 true 表示移除
	hook: () => boolean | void;
	when: string;
	hookId?: string | undefined;
};

class Navpopup {
	uid: number;
	visible: boolean;
	noshow: boolean;
	hooks: {create: NavpopupHook[]; unhide: NavpopupHook[]; hide: NavpopupHook[]};
	hookIds: Record<string, boolean>;
	downloads: Dow[];
	pending: number | null;
	fuzz: number;
	constrained: boolean;
	width: number;
	height: number;
	mainDiv: HTMLDivElement;

	/* 由外部代码动态附加的属性 */
	left?: number;
	top?: number;
	tooWide?: boolean;
	maxWidth?: number;
	stable_x?: number;
	stable_y?: number;
	showSoonStableTimer?: ReturnType<typeof setInterval>;
	className?: string;
	idNumber?: number;
	delay?: number;
	hasPopupMenu?: boolean;
	parentAnchor?: HTMLAnchorElement;
	parentPopup?: Navpopup | undefined;
	article!: Title;
	redir!: number;
	originalArticle!: Title;
	redirTarget!: Title;
	mouseLeavingTime?: number | null;
	stopPopupTimer?: ReturnType<typeof setInterval>;
	diffData!: DiffData;

	static uid = 0;
	static highest = 1000;
	static tracker = new Mousetracker();
	constructor() {
		// mw.notify('new Navpopup(init)', {tag: 'popups', type: 'warn'});
		/**
		 * UID for each Navpopup instance.
		 * Read-only.
		 *
		 * @type integer
		 */
		this.uid = Navpopup.uid++;
		/**
		 * Read-only flag for current visibility of the popup.
		 *
		 * @type boolean
		 * @private
		 */
		this.visible = false;
		/**
		 * Flag to be set when we want to cancel a previous request to
		 * show the popup in a little while.
		 *
		 * @private
		 * @type boolean
		 */
		this.noshow = false;
		/**
		 * Categorised list of hooks.
		 *
		 * @see #runHooks
		 * @see #addHook
		 * @private
		 * @type Object
		 */
		this.hooks = {
			create: [],
			unhide: [],
			hide: [],
		};
		/**
		 * list of unique IDs of hook functions, to avoid duplicates
		 *
		 * @private
		 */
		this.hookIds = {};
		/**
		 * List of downloads associated with the popup.
		 *
		 * @private
		 * @type Array
		 */
		this.downloads = [];
		/**
		 * Number of uncompleted downloads.
		 *
		 * @type integer
		 */
		this.pending = null;
		/**
		 * Tolerance in pixels when detecting whether the mouse has left the popup.
		 *
		 * @type integer
		 */
		this.fuzz = 5;
		/**
		 * Flag to toggle running {@source #limitHorizontalPosition} to regulate the popup's position.
		 *
		 * @type boolean
		 */
		this.constrained = true;
		/**
		 * The popup width in pixels.
		 *
		 * @private
		 * @type integer
		 */
		this.width = 0;
		/**
		 * The popup width in pixels.
		 *
		 * @private
		 * @type integer
		 */
		this.height = 0;
		/**
		 * The main content DIV element.
		 *
		 * @type HTMLDivElement
		 */
		this.mainDiv = null as unknown as HTMLDivElement;
		this.createMainDiv();
		//	if (!init || typeof init.popups_draggable=='undefined' || init.popups_draggable) {
		//		this.makeDraggable(true);
		//	}
	}
	/**
	 * Retrieves the {@source #visible} attribute, indicating whether the popup is currently visible.
	 *
	 * @type boolean
	 */
	isVisible() {
		return this.visible;
	}
	/**
	 * Repositions popup using CSS style.
	 *
	 * @private
	 * @param {integer} x x-coordinate (px)
	 * @param {integer} y y-coordinate (px)
	 * @param {boolean} noLimitHor Don't call {@source #limitHorizontalPosition}
	 */
	reposition(x?: number | null, y?: number | null, noLimitHor?: boolean) {
		log(`reposition(${x},${y},${noLimitHor})`);
		if (x !== undefined && x !== null) {
			this.left = x;
		}
		if (y !== undefined && y !== null) {
			this.top = y;
		}
		if (this.left !== undefined && this.top !== undefined) {
			this.mainDiv.style.left = `${this.left}px`;
			this.mainDiv.style.top = `${this.top}px`;
		}
		if (!noLimitHor) {
			this.limitHorizontalPosition();
		}
	}
	/**
	 * Prevents popups from being in silly locations. Hopefully.
	 * Should not be run if {@source #constrained} is true.
	 *
	 * @private
	 */
	limitHorizontalPosition() {
		if (!this.constrained || this.tooWide) {
			return;
		}
		this.updateDimensions();
		const x = this.left!;
		const w = this.width;
		const cWidth = document.querySelector('body')!.clientWidth;
		//	log('limitHorizontalPosition: x='+x+
		//			', this.left=' + this.left +
		//			', this.width=' + this.width +
		//			', cWidth=' + cWidth);
		if (
			x + w >= cWidth ||
			(x > 0 &&
				this.maxWidth &&
				this.width < this.maxWidth &&
				this.height > this.width &&
				x > cWidth - this.maxWidth)
		) {
			// This is a very nasty hack. There has to be a better way!
			// We find the "natural" width of the div by positioning it at the far left
			// then reset it so that it should be flush right (well, nearly)
			this.mainDiv.style.left = '-10000px';
			this.mainDiv.style.width = `${this.maxWidth}px`;
			const naturalWidth = this.mainDiv.offsetWidth;
			let newLeft = cWidth - naturalWidth - 1;
			if (newLeft < 0) {
				newLeft = 0;
				this.tooWide = true;
			} // still unstable for really wide popups?
			log(
				`limitHorizontalPosition: moving to (${newLeft},${this.top});` +
					` naturalWidth=${naturalWidth}, clientWidth=${cWidth}`
			);
			this.reposition(newLeft, null, true);
		}
	}
	/**
	 * Brings popup to the top of the z-order.
	 * We increment the {@source #highest} property of the contructor here.
	 *
	 * @private
	 */
	raise() {
		this.mainDiv.style.zIndex = `${Navpopup.highest + 1}`;
		++Navpopup.highest;
	}
	/**
	 * Shows the popup provided {@source #noshow} is not true.
	 * Updates the position, brings the popup to the top of the z-order and unhides it.
	 */
	show() {
		// document.title+='s';
		if (this.noshow) {
			return;
		}
		// document.title+='t';
		this.reposition();
		this.raise();
		this.unhide();
	}
	/**
	 * Checks to see if the mouse pointer has
	 * stabilised (checking every <code>time</code>/2 milliseconds) and runs the
	 * {@source #show} method if it has.
	 *
	 * @param {integer} time The minimum time (ms) before the popup may be shown.
	 */
	showSoonIfStable(time: number) {
		log(`showSoonIfStable, time=${time}`);
		if (this.visible) {
			return;
		}
		this.noshow = false;
		// ~ initialize these variables so that we never run @tt{show} after
		// ~ just half the time
		this.stable_x = -1e4;
		this.stable_y = -1e4;
		const stableShow = () => {
			log('stableShow called');
			const new_x = Navpopup.tracker.x!;
			const new_y = Navpopup.tracker.y!;
			const dx = self.stable_x! - new_x;
			const dy = self.stable_y! - new_y;
			const fuzz2 = 0; // savedThis.fuzz * savedThis.fuzz;
			// document.title += '[' + [savedThis.stable_x,new_x, savedThis.stable_y,new_y, dx, dy, fuzz2].join(',') + '] ';
			if (dx * dx <= fuzz2 && dy * dy <= fuzz2) {
				log('mouse is stable');
				clearInterval(self.showSoonStableTimer);
				self.reposition(new_x + 2, new_y + 2);
				self.show();
				self.limitHorizontalPosition();
				return;
			}
			self.stable_x = new_x;
			self.stable_y = new_y;
		};
		const self = this;
		this.showSoonStableTimer = setInterval(stableShow, time / 2);
	}
	/**
	 * Sets the {@source #noshow} flag and hides the popup. This should be called
	 * when the mouse leaves the link before
	 * (or after) it's actually been displayed.
	 */
	banish() {
		log('banish called');
		// hide and prevent showing with showSoon in the future
		this.noshow = true;
		if (this.showSoonStableTimer) {
			log('clearing showSoonStableTimer');
			clearInterval(this.showSoonStableTimer);
		}
		this.hide();
	}
	/**
	 * Runs hooks added with {@source #addHook}.
	 *
	 * @private
	 * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
	 * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
	 */
	runHooks(key: 'create' | 'unhide' | 'hide', when: string) {
		if (!this.hooks[key]) {
			return;
		}
		const keyHooks = this.hooks[key] as (NavpopupHook | null)[];
		const len = keyHooks.length;
		for (let i = 0; i < len; ++i) {
			const entry = keyHooks[i]!;
			if (entry && entry.when === when && Reflect.apply(entry.hook, this, [])) {
				// remove the hook
				if (entry.hookId) {
					delete this.hookIds[entry.hookId];
				}
				keyHooks[i] = null;
			}
		}
	}
	/**
	 * Adds a hook to the popup. Hook functions are run with <code>this</code> set to refer to the
	 * Navpopup instance, and no arguments.
	 *
	 * @param {Function} hook The hook function. Functions that return true are deleted.
	 * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
	 * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
	 * @param {string} uid A truthy string identifying the hook function; if it matches another hook
	 * in this position, it won't be added again.
	 */
	addHook(hook: () => boolean | void, key: 'create' | 'unhide' | 'hide', when?: string, uid?: string) {
		when ||= 'after';
		if (!this.hooks[key]) {
			return;
		}
		// if uid is specified, don't add duplicates
		let hookId;
		if (uid) {
			hookId = [key, when, uid].join('|');
			if (this.hookIds[hookId]) {
				return;
			}
			this.hookIds[hookId] = true;
		}
		this.hooks[key].push({
			hook,
			when,
			hookId,
		});
	}
	/**
	 * Creates the main DIV element, which contains all the actual popup content.
	 * Runs hooks with key 'create'.
	 *
	 * @private
	 */
	createMainDiv() {
		if (this.mainDiv) {
			return;
		}
		this.runHooks('create', 'before');
		const mainDiv = document.createElement('div');
		const self = this;
		mainDiv.onclick = () => {
			self.onclickListener();
		};
		mainDiv.className = this.className ?? 'navpopup_maindiv';
		mainDiv.id = mainDiv.className + this.uid;
		mainDiv.style.position = 'absolute';
		mainDiv.style.minWidth = '350px';
		mainDiv.style.display = 'none';
		mainDiv.className = 'navpopup';
		// easy access to javascript object through DOM functions
		mainDiv.navpopup = this;
		this.mainDiv = mainDiv;
		document.querySelector('body')!.append(mainDiv);
		this.runHooks('create', 'after');
	}
	/**
	 * Calls the {@source #raise} method.
	 *
	 * @private
	 */
	onclickListener() {
		this.raise();
	}
	/**
	 * Makes the popup draggable, using a {@source Drag} object.
	 *
	 * @param {string} handleName
	 * @private
	 */
	makeDraggable(handleName?: string) {
		if (!this.mainDiv) {
			this.createMainDiv();
		}
		const drag = new Drag();
		if (!handleName) {
			drag.startCondition = (e: MouseEvent) => {
				try {
					if (!e.shiftKey) {
						return false;
					}
				} catch {
					return false;
				}
				return true;
			};
		}
		let dragHandle;
		if (handleName) {
			dragHandle = document.getElementById(`${handleName}`);
		}
		dragHandle ||= this.mainDiv;
		const self = this;
		drag.endHook = (x: number, y: number) => {
			Navpopup.tracker.dirty = true;
			self.reposition(x, y);
		};
		drag.init(dragHandle, this.mainDiv);
	}
	/**
	 * Hides the popup using CSS. Runs hooks with key 'hide'.
	 * Sets {@source #visible} appropriately.
	 * {@source #banish} should be called externally instead of this method.
	 *
	 * @private
	 */
	hide() {
		this.runHooks('hide', 'before');
		this.abortDownloads();
		if (this.visible !== undefined && this.visible) {
			this.mainDiv.style.display = 'none';
			this.visible = false;
		}
		this.runHooks('hide', 'after');
	}
	/**
	 * Shows the popup using CSS. Runs hooks with key 'unhide'.
	 * Sets {@source #visible} appropriately.   {@source #show} should be called externally instead of this method.
	 *
	 * @private
	 */
	unhide() {
		this.runHooks('unhide', 'before');
		if (this.visible !== undefined && !this.visible) {
			this.mainDiv.style.display = 'inline';
			this.visible = true;
		}
		this.runHooks('unhide', 'after');
	}
	/**
	 * Sets the <code>innerHTML</code> attribute of the main div containing the popup content.
	 *
	 * @param {string} html The HTML to set.
	 */
	setInnerHTML(html: string) {
		this.mainDiv.innerHTML = html;
	}
	/**
	 * Updates the {@source #width} and {@source #height} attributes with the CSS properties.
	 *
	 * @private
	 */
	updateDimensions() {
		this.width = this.mainDiv.offsetWidth;
		this.height = this.mainDiv.offsetHeight;
	}
	/**
	 * Checks if the point (x,y) is within {@source #fuzz} of the
	 * {@source #mainDiv}.
	 *
	 * @param {integer} x x-coordinate (px)
	 * @param {integer} y y-coordinate (px)
	 * @type boolean
	 */
	isWithin(x: number, y: number, fuzzArg?: number) {
		// ~ If we're not even visible, no point should be considered as
		// ~ being within the popup.
		if (!this.visible) {
			return false;
		}
		this.updateDimensions();
		const fuzz = fuzzArg || 0;
		// ~ Use a simple box metric here.
		return (
			x + fuzz >= this.left! &&
			x - fuzz <= this.left! + this.width &&
			y + fuzz >= this.top! &&
			y - fuzz <= this.top! + this.height
		);
	}
	/**
	 * Adds a download to {@source #downloads}.
	 *
	 * @param {Downloader} download
	 */
	addDownload(download: Dow) {
		if (!download) {
			return;
		}
		this.downloads.push(download);
	}
	/**
	 * Aborts the downloads listed in {@source #downloads}.
	 *
	 * @see Downloader#abort
	 */
	abortDownloads() {
		for (const d of this.downloads) {
			if (d && d.abort) {
				d.abort();
			}
		}
		this.downloads = [];
	}
}
export {Mousetracker, Navpopup};
