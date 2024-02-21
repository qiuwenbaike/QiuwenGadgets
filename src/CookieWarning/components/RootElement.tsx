import AgreeButton from './AgreeButton';
import {CLASS_NAME} from '../modules/constant';
import ConsentNotice from './ConsentNotice';
import React from 'ext.gadget.React';

const RootElement = (agreeButtonOnClick: () => void) => (
	<div className={[CLASS_NAME, 'noprint']}>
		<ConsentNotice />
		<AgreeButton onClick={agreeButtonOnClick} />
	</div>
);

export {RootElement};
