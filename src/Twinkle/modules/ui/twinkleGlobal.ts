/** Methods consistently provided by the Twinkle core global. */
export interface TwinkleGlobalBase {
	addInitCallback(func: () => void, name?: string): void;
	addPortletLink(task: string | (() => void), text: string, id: string, tooltip?: string): HTMLLIElement | null;
}

/**
 * Typed access to the Twinkle global object.
 *
 * Twinkle is provided at runtime by the bundled gadget script and has no
 * ambient type declarations; components should access it through this
 * single wrapper instead of inline `window as unknown as {...}` casts.
 */
export interface TwinkleGlobal extends TwinkleGlobalBase {
	getPref(name: string): string[] | string | boolean | number | undefined;
	speedy: {
		normalizeHash: Record<string, string>;
	};
}

export const twinkle = (window as unknown as {Twinkle: TwinkleGlobal}).Twinkle;
