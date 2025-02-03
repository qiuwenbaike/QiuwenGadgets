import React from 'ext.gadget.JSX';
import {disclaimer} from '../HistoryDisclaimer.module.less';

const Background = () => <div className={disclaimer} />;

const getBackground = () => <Background />;

export {Background, getBackground};
