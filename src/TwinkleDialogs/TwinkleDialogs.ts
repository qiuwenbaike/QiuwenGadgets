/*! TwinkleDialogs - Vue dialog components for Twinkle, loaded on demand by Gadget-Twinkle */

import TwArvDialog from './modules/ui/TwArvDialog.vue';
import TwBatchDeleteDialog from './modules/ui/TwBatchDeleteDialog.vue';
import TwBatchProtectDialog from './modules/ui/TwBatchProtectDialog.vue';
import TwBatchUndeleteDialog from './modules/ui/TwBatchUndeleteDialog.vue';
import TwBlockDialog from './modules/ui/TwBlockDialog.vue';
import TwCloseDialog from './modules/ui/TwCloseDialog.vue';
import TwConfigPanel from './modules/ui/TwConfigPanel.vue';
import TwCopyvioDialog from './modules/ui/TwCopyvioDialog.vue';
import TwImageDialog from './modules/ui/TwImageDialog.vue';
import TwProtectDialog from './modules/ui/TwProtectDialog.vue';
import TwSpeedyDialog from './modules/ui/TwSpeedyDialog.vue';
import TwStubDialog from './modules/ui/TwStubDialog.vue';
import TwTagDialog from './modules/ui/TwTagDialog.vue';
import TwTalkbackDialog from './modules/ui/TwTalkbackDialog.vue';
import TwUnlinkDialog from './modules/ui/TwUnlinkDialog.vue';
import TwWarnDialog from './modules/ui/TwWarnDialog.vue';
import TwXfdDialog from './modules/ui/TwXfdDialog.vue';

const dialogs: Record<string, unknown> = {
	TwArvDialog,
	TwBatchDeleteDialog,
	TwBatchProtectDialog,
	TwBatchUndeleteDialog,
	TwBlockDialog,
	TwCloseDialog,
	TwConfigPanel,
	TwCopyvioDialog,
	TwImageDialog,
	TwProtectDialog,
	TwSpeedyDialog,
	TwStubDialog,
	TwTagDialog,
	TwTalkbackDialog,
	TwUnlinkDialog,
	TwWarnDialog,
	TwXfdDialog,
};

(window as unknown as {TwinkleDialogs?: Record<string, unknown>}).TwinkleDialogs = dialogs;

export {};
