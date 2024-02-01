// eslint-disable-next-line func-style
function assert(value: string | OO.ui.ProcessDialog | undefined, valueName: string): asserts value {
	if (!value) {
		throw new Error(`Assert Fail, ${valueName} == null.`);
	}
}

export {assert};
