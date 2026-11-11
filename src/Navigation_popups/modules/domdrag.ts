// 本文件由 Navigation_popups 原版 core.js 的 domdrag.js 段落拆分而来，保留原有实现。
class Drag {
	obj: HTMLElement = null as unknown as HTMLElement;
	startCondition: ((e: MouseEvent) => boolean) | null;
	endHook: ((x: number, y: number) => void) | null;
	constructor() {
		/**
		 * Condition to determine whether or not to drag. This function should take one parameter,
		 * an Event.  To disable this, set it to <code>null</code>.
		 *
		 * @type Function
		 */
		this.startCondition = null;
		/**
		 * Hook to be run when the drag finishes. This is passed the final coordinates of the
		 * dragged object (two integers, x and y). To disables this, set it to <code>null</code>.
		 *
		 * @type Function
		 */
		this.endHook = null;
	}
	/**
	 * Initialises the Drag instance by telling it which object you want to be draggable, and what
	 * you want to drag it by.
	 *
	 * @param {DOMElement} o The "handle" by which <code>oRoot</code> is dragged.
	 * @param {DOMElement} oRoot The object which moves when <code>o</code> is dragged, or <code>o</code> if omitted.
	 */
	init(o: HTMLElement, oRoot?: HTMLElement) {
		const self = this;
		this.obj = o;
		o.onmousedown = (e: MouseEvent) => {
			self.start(e);
		};
		o.dragging = false;
		o.popups_draggable = true;
		o.hmode = true;
		o.vmode = true;
		o.root = oRoot || o;
		if (Number.isNaN(Number.parseInt(o.root.style.left, 10))) {
			o.root.style.left = '0px';
		}
		if (Number.isNaN(Number.parseInt(o.root.style.top, 10))) {
			o.root.style.top = '0px';
		}
		o.root.onthisStart = () => {};
		o.root.onthisEnd = () => {};
		o.root.onthis = () => {};
	}
	/**
	 * Starts the drag.
	 *
	 * @private
	 * @param {Event} e
	 */
	start(e: MouseEvent): false | undefined {
		const o = this.obj; // = this;
		if (this.startCondition && !this.startCondition(e)) {
			return undefined;
		}
		const root = o.root!;
		const y = Number.parseInt(o.vmode ? root.style.top : root.style.bottom, 10);
		const x = Number.parseInt(o.hmode ? root.style.left : root.style.right, 10);
		root.onthisStart!(x, y);
		o.lastMouseX = e.clientX;
		o.lastMouseY = e.clientY;
		const self = this;
		o.onmousemoveDefault = document.onmousemove;
		o.dragging = true;
		document.onmousemove = (e) => {
			self.drag(e);
		};
		document.onmouseup = () => {
			self.end();
		};
		return false;
	}
	/**
	 * Does the drag.
	 *
	 * @param {Event} e
	 * @private
	 */
	drag(e: MouseEvent): false {
		const o = this.obj;
		const root = o.root!;
		const ey = e.clientY;
		const ex = e.clientX;
		const y = Number.parseInt(o.vmode ? root.style.top : root.style.bottom, 10);
		const x = Number.parseInt(o.hmode ? root.style.left : root.style.right, 10);
		const nx = x + (ex - o.lastMouseX!) * (o.hmode ? 1 : -1);
		const ny = y + (ey - o.lastMouseY!) * (o.vmode ? 1 : -1);
		root.style[o.hmode ? 'left' : 'right'] = `${nx}px`;
		root.style[o.vmode ? 'top' : 'bottom'] = `${ny}px`;
		o.lastMouseX = ex;
		o.lastMouseY = ey;
		root.onthis!(nx, ny);
		return false;
	}
	/**
	 * Ends the drag.
	 *
	 * @private
	 */
	end() {
		document.onmousemove = this.obj.onmousemoveDefault as any;
		document.onmouseup = null;
		this.obj.dragging = false;
		if (this.endHook) {
			this.endHook(
				Number.parseInt(this.obj.root!.style[this.obj.hmode ? 'left' : 'right'], 10),
				Number.parseInt(this.obj.root!.style[this.obj.vmode ? 'top' : 'bottom'], 10)
			);
		}
	}
}

export {Drag};
