import {ding} from './modules/shims';

(window as unknown as {DingExposedInterface: typeof ding}).DingExposedInterface = ding;
