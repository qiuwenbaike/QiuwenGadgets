/*! TwinkleDialogs - Vue dialog components for Twinkle, loaded on demand by Gadget-Twinkle */

import TwArvDialog from '../Twinkle/modules/ui/TwArvDialog.vue';
import TwBatchDeleteDialog from '../Twinkle/modules/ui/TwBatchDeleteDialog.vue';
import TwBatchProtectDialog from '../Twinkle/modules/ui/TwBatchProtectDialog.vue';
import TwBatchUndeleteDialog from '../Twinkle/modules/ui/TwBatchUndeleteDialog.vue';
import TwBlockDialog from '../Twinkle/modules/ui/TwBlockDialog.vue';
import TwCloseDialog from '../Twinkle/modules/ui/TwCloseDialog.vue';
import TwConfigPanel from '../Twinkle/modules/ui/TwConfigPanel.vue';
import TwCopyvioDialog from '../Twinkle/modules/ui/TwCopyvioDialog.vue';
import TwImageDialog from '../Twinkle/modules/ui/TwImageDialog.vue';
import TwProtectDialog from '../Twinkle/modules/ui/TwProtectDialog.vue';
import TwSpeedyDialog from '../Twinkle/modules/ui/TwSpeedyDialog.vue';
import TwStubDialog from '../Twinkle/modules/ui/TwStubDialog.vue';
import TwTagDialog from '../Twinkle/modules/ui/TwTagDialog.vue';
import TwTalkbackDialog from '../Twinkle/modules/ui/TwTalkbackDialog.vue';
import TwUnlinkDialog from '../Twinkle/modules/ui/TwUnlinkDialog.vue';
import TwWarnDialog from '../Twinkle/modules/ui/TwWarnDialog.vue';
import TwXfdDialog from '../Twinkle/modules/ui/TwXfdDialog.vue';

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
