const sleep = (time: number) => {
	return new Promise((resolve) => {
		return setTimeout(resolve, time);
	});
};
export default sleep;
