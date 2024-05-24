const sanitize = (string: string) => {
	return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&lt;').replace(/"/g, '&quot;');
};

export {sanitize};
