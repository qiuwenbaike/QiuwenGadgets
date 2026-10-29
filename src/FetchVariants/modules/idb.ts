import * as OPTIONS from '../options.json';
import {IDBPlus} from 'ext.gadget.idb-plus';

const variants = new IDBPlus<string, VariantRecord>(OPTIONS.storageKey, 'variants');

export {variants};
