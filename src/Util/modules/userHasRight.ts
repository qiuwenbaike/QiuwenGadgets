type UserHasRight = typeof userHasRight;

const userHasRight = (right: string) => {
	const {wgUserRights} = mw.config.get();
	return !!Object.values(wgUserRights as {[key: number]: string})?.includes(right);
};

export {type UserHasRight, userHasRight};
