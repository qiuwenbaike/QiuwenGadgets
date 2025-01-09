type QueryUserGroups = typeof import('./util/query').queryUserGroups;
type QueryGlobalUserGroups = typeof import('./util/query').queryGlobalUserGroups;

declare module 'ext.gadget.MarkRights' {
	export const queryUserGroups: QueryUserGroups;
	export const queryGlobalUserGroups: QueryGlobalUserGroups;
}
