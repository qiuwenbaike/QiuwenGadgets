type QueryUserGroups = typeof import('./core').queryUserGroups;
type QueryGlobalUserGroups = typeof import('./core').queryGlobalUserGroups;

declare module 'ext.gadget.MarkRights' {
	export const queryUserGroups: QueryUserGroups;
	export const queryGlobalUserGroups: QueryGlobalUserGroups;
}
