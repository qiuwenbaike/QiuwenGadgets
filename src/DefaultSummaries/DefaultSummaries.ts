import {WG_ACTION} from './modules/constant';
import {addHook} from './modules/addHook';
import {addVisualEditorPlugin} from './modules/addVisualEditorPlugin';

if (['edit', 'submit'].includes(WG_ACTION)) {
	addHook();
} else {
	addVisualEditorPlugin();
}
