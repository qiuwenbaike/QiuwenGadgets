// https://www.mediawiki.org/wiki/Manual:Coding_conventions/SVG#Exemplified_safe_configuration
module.exports = {
	js2svg: {
		eol: 'lf',
		finalNewline: true,
		indent: '\t',
		pretty: true,
	},
	multipass: true,
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					cleanupNumericValues: false,
					collapseGroups: false,
					convertPathData: false,
					convertTransform: false,
					inlineStyles: false,
					minifyStyles: false,
					removeComments: false,
					removeDesc: false,
					removeEditorsNSData: false,
					removeEmptyContainers: false,
					removeHiddenElems: false,
					removeMetadata: false,
					removeTitle: false,
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
