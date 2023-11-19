/**
 * @param {string} message message here should be safe html, beacuse you can write <button>Buttons</button> in this
 * @param {string} type "info": dark blue/white, "success": green/white, "warning": brown/white, "error": red/white, "default" = "info" (background/text)
 * @param {number|'long'} ttl number of microseconds before ding element disappears, "long" if the ding should not disappear after a timeout
 * @param {boolean} persist If the element should go away when user clicks anywhere on it. If persist= true && ttl= long, make sure to include a button to allow the user to remove the banner
 */
type DingExposedInterface = (
	message: string,
	type?: 'default' | 'info' | 'success' | 'warning' | 'error',
	ttl?: number | 'long',
	persist?: boolean
) => void;

export type {DingExposedInterface};
