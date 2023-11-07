// https://www.mediawiki.org/wiki/Manual:Coding_conventions/SVG#Exemplified_safe_configuration
module.exports = {
	js2svg: {
		eol: 'lf',
		finalNewline: false,
		indent: '\t',
	},
	multipass: true,
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					collapseGroups: false,
					convertPathData: false,
					convertTransform: false,
					inlineStyles: false,
					minifyStyles: false,
					removeUnknownsAndDefaults: false,
					removeViewBox: false,
					removeXMLProcInst: false,
				},
			},
		},
		'removeRasterImages',
		'sortAttrs',
	],
};
