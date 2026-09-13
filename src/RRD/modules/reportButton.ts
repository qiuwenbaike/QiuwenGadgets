import * as OPTIONS from '../options.json';
import {getMessage} from './i18n';
import {isSpecialLog} from './isSpecialLog';

const reportButton = document.createElement('button');
reportButton.type = 'button';
reportButton.className = ['rrd__report', 'cdx-button', 'cdx-button--weight-primary'].join(' ');
reportButton.title = getMessage('reportButtonTitle') + OPTIONS.rrdPage;
reportButton.innerText = isSpecialLog() ? getMessage('reportButtonLogText') : getMessage('reportButtonText');
export {reportButton};
