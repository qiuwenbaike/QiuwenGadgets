const styles = `.skin-citizen .mw-body,
.skin-vector .mw-body,
.skin-gongbi #mw-content {
	-webkit-filter: grayscale(1) !important;
	-moz-filter: grayscale(1) !important;
	-o-filter: grayscale(1) !important;
	filter: grayscale(1) !important;
}`;

const addStyleTag = () => {
	mw.loader.addStyleTag(styles);
};

export {addStyleTag};
