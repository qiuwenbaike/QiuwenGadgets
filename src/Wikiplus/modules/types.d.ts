// Params
type OnClickParams = {
	sectionNumber: number;
	sectionName?: string;
	targetPageName: string;
};
type OnEditParams = {
	title: string;
	summary: string;
	forceOverwrite?: boolean;
};
type OnSuccessParams = {title: string};
type EditParams = Partial<ApiEditParmas> & {
	config: Partial<ApiEditPageParams>;
	additionalConfig: Partial<ApiEditPageParams>;
};
type OnClick = (arg0: OnClickParams) => Promise<void> | void;
type OnEdit = (arg0: OnEditParams) => Promise<void>;
type OnSuccess = (arg0: OnSuccessParams) => void;
// Return values
type PageInfoCacheItem = {timestamp?: string; revid?: number; contentmodel: string};
type PageInfo = {timestamp?: string; revisionId?: number; contentmodel: string};
