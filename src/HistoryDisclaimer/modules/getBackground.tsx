import React from 'ext.gadget.React';
import {disclaimer} from '../HistoryDisclaimer.module.less';

const Background = () => <div className={disclaimer} />;

const getBackground = () => <Background />;

export {Background, getBackground};
