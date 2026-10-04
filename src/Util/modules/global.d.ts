type AddEventListenerWithRemover = import('./addEventListenerWithRemover').AddEventListenerWithRemover;
type ChangeOpacityWhenMouseEnterOrLeave =
	import('./changeOpacityWhenMouseEnterOrLeave').ChangeOpacityWhenMouseEnterOrLeave;
type CheckA11yConfirmKey = import('./checkA11yConfirmKey').CheckA11yConfirmKey;
type CheckDependencies = import('./checkDependencies').CheckDependencies;
type Delay = import('./delay').Delay;
type FindVariants = import('./findVariants').FindVariants;
type GenerateArray = import('./generateArray').GenerateArray;
type GetBody = import('./getBody').GetBody;
type InitMwApi = import('./initMwApi').InitMwApi;
type ClassMwUri = import('./mwUri').ClassMwUri;
type OouiConfirmWithStyle = import('./oouiConfirmWithStyle').OouiConfirmWithStyle;
type QueryGlobalUserGroups = import('./queryGlobalUserGroups').QueryGlobalUserGroups;
type QueryUserGroups = import('./queryUserGroups').QueryUserGroups;
type ScrollTop = import('./scrollTop').ScrollTop;
type UserIsInGroup = import('./userIsInGroup').UserIsInGroup;
type UniqueArray = import('./uniqueArray').UniqueArray;

declare module 'ext.gadget.Util' {
	export const addEventListenerWithRemover: AddEventListenerWithRemover;
	export const changeOpacityWhenMouseEnterOrLeave: ChangeOpacityWhenMouseEnterOrLeave;
	export const checkA11yConfirmKey: CheckA11yConfirmKey;
	export const checkDependencies: CheckDependencies;
	export const delay: Delay;
	export const findVariants: FindVariants;
	export const generateArray: GenerateArray;
	export const getBody: GetBody;
	export const initMwApi: InitMwApi;
	export const MwUri: ClassMwUri;
	export const oouiConfirmWithStyle: OouiConfirmWithStyle;
	export const queryGlobalUserGroups: QueryGlobalUserGroups;
	export const queryUserGroups: QueryUserGroups;
	export const scrollTop: ScrollTop;
	export const userIsInGroup: UserIsInGroup;
	export const uniqueArray: UniqueArray;
}
