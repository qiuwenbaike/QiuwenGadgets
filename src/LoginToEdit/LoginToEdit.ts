import {WG_USER_NAME} from './modules/constant';
import {loginToEdit} from './modules/core';

if (!WG_USER_NAME) {
	$(loginToEdit);
}
