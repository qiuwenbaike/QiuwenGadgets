import {HotCatMwConfig} from './types';

// Don't use mw.config.get() as that takes a copy of the config, and so doesn't
// account for values changing, e.g. wgCurRevisionId after a VE edit
const conf: HotCatMwConfig = mw.config['values'];

export {conf};
