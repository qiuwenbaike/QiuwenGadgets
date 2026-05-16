import {defineConfig, globalIgnores} from 'eslint/config';
import {FlatCompat} from '@eslint/eslintrc';
import {fileURLToPath} from 'node:url';
import {fixupConfigRules} from '@eslint/compat';
import js from '@eslint/js';
import vueParser from 'vue-eslint-parser';
import path from 'node:path';
import tsEslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	globalIgnores([
		'**/dist/',
		'**/*.json',
		'**/*.yml',
		'**/*.yaml',
		'**/*.cjs',
		'**/*.mjs',
		'**/scripts/**',
		'**/Navigation_popups/*.js',
		'**/Navigation_popups/**/*.js',
		'**/select2/select2.js',
		'**/Wikiplus/**/*.js',
	]),
	{
		extends: [
			...fixupConfigRules(
				compat.extends(
					'wikimedia/client/common',
					'wikimedia/language/es2024',
					'wikimedia/mediawiki',
					'wikimedia/jquery',
					'plugin:@typescript-eslint/recommended-type-checked',
					'plugin:unicorn/all',
					'prettier'
				)
			),
		],

		languageOptions: {
			globals: {},
			parser: tsEslint.parser,
			ecmaVersion: 'latest',
			sourceType: 'script',

			parserOptions: {
				projectService: true,
			},
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			'array-callback-return': [
				'error',
				{
					allowImplicit: true,
				},
			],

			'no-await-in-loop': 'off',
			'no-duplicate-imports': 'error',
			'no-new-native-nonconstructor': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unreachable-loop': 'error',
			'no-unused-private-class-members': 'error',
			'no-use-before-define': 'off',
			'require-atomic-updates': 'off',
			'accessor-pairs': 'error',
			'arrow-body-style': ['error', 'always'],
			'capitalized-comments': 'off',
			'class-methods-use-this': 'error',
			complexity: 'off',
			'consistent-return': 'off',
			'consistent-this': 'off',
			'default-case': 'off',
			'default-case-last': 'error',
			'dot-notation': 'off',
			eqeqeq: 'error',
			'func-name-matching': 'error',
			'func-names': 'off',
			'func-style': 'error',
			'grouped-accessor-pairs': 'error',
			'guard-for-in': 'error',
			'id-denylist': 'error',
			'id-length': 'off',
			'id-match': 'error',
			'implicit-arrow-linebreak': 'off',
			'init-declarations': 'off',
			'lines-between-class-members': 'off',

			'logical-assignment-operators': [
				'error',
				'always',
				{
					enforceForIfStatements: true,
				},
			],

			'max-classes-per-file': 'off',
			'max-depth': 'off',
			'max-lines': 'off',
			'max-lines-per-function': 'off',
			'max-nested-callbacks': 'error',
			'max-params': 'off',
			'max-statements': 'off',
			'multiline-comment-style': 'off',
			'no-alert': 'off',
			'no-console': 'off',
			'no-continue': 'off',
			'no-div-regex': 'error',
			'no-else-return': 'error',
			'no-empty-function': 'off',
			'no-empty-static-block': 'error',
			'no-eq-null': 'error',
			'no-inline-comments': 'off',
			'no-invalid-this': 'off',
			'no-iterator': 'error',
			'no-labels': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-magic-numbers': 'off',
			'no-multi-assign': 'error',
			'no-multi-str': 'error',
			'no-negated-condition': 'error',
			'no-nested-ternary': 'off',
			'no-object-constructor': 'error',
			'no-param-reassign': 'off',
			'no-plusplus': 'off',
			'no-restricted-exports': 'error',
			'no-restricted-globals': 'error',
			'no-restricted-imports': 'error',
			'no-restricted-properties': 'error',
			'no-restricted-syntax': 'error',
			'no-ternary': 'off',
			'no-undefined': 'off',
			'no-underscore-dangle': 'off',
			'no-unused-expressions': 'off',
			'no-useless-constructor': 'error',
			'no-useless-rename': 'error',
			'no-useless-return': 'error',

			'no-void': [
				'error',
				{
					allowAsStatement: true,
				},
			],

			'no-warning-comments': 'off',
			'object-shorthand': 'error',
			'operator-assignment': 'error',

			'prefer-arrow-callback': [
				'error',
				{
					allowNamedFunctions: true,
				},
			],

			'prefer-exponentiation-operator': 'error',
			'prefer-named-capture-group': 'off',
			'prefer-object-has-own': 'error',
			'prefer-object-spread': 'error',
			'prefer-promise-reject-errors': 'off',
			'prefer-template': 'error',
			radix: 'error',
			'require-await': 'error',
			'require-unicode-regexp': 'off',
			'sort-imports': 'error',
			'sort-keys': 'off',
			'sort-vars': 'off',
			'spaced-comment': 'off',
			strict: 'off',
			'symbol-description': 'error',
			'template-curly-spacing': ['error', 'never'],
			'@typescript-eslint/ban-ts-comment': 'off',

			'@typescript-eslint/no-empty-function': [
				'error',
				{
					allow: ['arrowFunctions'],
				},
			],

			'@typescript-eslint/no-empty-object-type': [
				'error',
				{
					allowInterfaces: 'always',
				},
			],

			'@typescript-eslint/no-explicit-any': 'warn',

			'@typescript-eslint/no-floating-promises': [
				'warn',
				{
					ignoreIIFE: true,
				},
			],

			'@typescript-eslint/no-misused-promises': 'warn',
			'@typescript-eslint/no-redundant-type-constituents': 'off',

			'@typescript-eslint/no-this-alias': [
				'error',
				{
					allowedNames: ['self'],
				},
			],

			'@typescript-eslint/no-unnecessary-template-expression': 'error',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			'@typescript-eslint/no-unsafe-assignment': 'warn',
			'@typescript-eslint/no-unsafe-call': 'warn',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'warn',

			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					varsIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/no-use-before-define': 'off',

			'@typescript-eslint/prefer-destructuring': [
				'error',
				{
					VariableDeclarator: {
						array: true,
						object: true,
					},

					AssignmentExpression: {
						array: false,
						object: false,
					},
				},
			],

			'@typescript-eslint/prefer-find': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'compat/compat': 'off',
			'jsdoc/check-tag-names': 'off',
			'jsdoc/no-undefined-types': 'off',

			'mediawiki/class-doc': 'warn',
			'mediawiki/no-nodelist-unsupported-methods': 'off',

			'no-jquery/no-animate': [
				'warn',
				{
					allowScroll: true,
				},
			],

			'no-jquery/no-class-state': 'off',
			'no-jquery/no-done-fail': 'off',
			'no-jquery/no-fade': 'off',

			'no-jquery/no-global-selector': [
				'warn',
				{
					allowBody: true,
				},
			],

			'no-jquery/no-sizzle': 'off',
			'no-jquery/no-slide': 'off',
			'no-jquery/variable-pattern': 'off',

			'unicorn/better-regex': 'off',
			'unicorn/consistent-destructuring': 'off',
			'unicorn/consistent-function-scoping': 'off',
			'unicorn/error-message': 'off',
			'unicorn/escape-case': 'off',
			'unicorn/explicit-length-check': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/no-abusive-eslint-disable': 'off',
			'unicorn/no-array-callback-reference': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-document-cookie': 'off',
			'unicorn/no-hex-escape': 'off',
			'unicorn/no-keyword-prefix': 'off',
			'unicorn/no-nested-ternary': 'off',
			'unicorn/no-null': 'off',
			'unicorn/no-this-assignment': 'off',
			'unicorn/no-unreadable-array-destructuring': 'off',
			'unicorn/no-unsafe-regex': 'off',
			'unicorn/no-unused-properties': 'off',
			'unicorn/prefer-array-find': 'off',
			'unicorn/prefer-global-this': 'off',
			'unicorn/prefer-regexp-test': 'off',
			'unicorn/prefer-set-has': 'off',
			'unicorn/prefer-string-replace-all': 'off',
			'unicorn/prefer-ternary': 'off',
			'unicorn/prefer-top-level-await': 'off',
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/require-post-message-target-origin': 'off',
			'unicorn/string-content': 'off',
			'unicorn/switch-case-braces': ['error', 'avoid'],

			'getter-return': [
				'error',
				{
					allowImplicit: true,
				},
			],

			'no-control-regex': 'off',

			quotes: [
				'error',
				'single',
				{
					avoidEscape: true,
				},
			],
			'no-implicit-globals': 'off',
		},
	},
	{
		files: ['src/*.js', 'src/**/*.js', 'src/*.cjs', 'src/**/*.cjs'],
		extends: [...fixupConfigRules(compat.extends('plugin:@typescript-eslint/disable-type-checked'))],
	},
	{
		files: ['src/*.jsx', 'src/**/*.jsx', 'src/*.tsx', 'src/**/*.tsx'],
		extends: [...fixupConfigRules(compat.extends('plugin:react/recommended', 'plugin:react/jsx-runtime'))],

		rules: {
			'arrow-body-style': ['error', 'as-needed'],

			'class-methods-use-this': [
				'error',
				{
					exceptMethods: [
						'forceUpdate',
						'getDefaultProps',
						'getInitialState',
						'isMounted',
						'render',
						'replaceState',
						'setState',
					],
				},
			],

			'func-style': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',

			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					varsIgnorePattern: '^_|^React$',
				},
			],

			'react/no-unknown-property': 'off',
		},
	},
	{
		files: ['src/*.vue', 'src/**/*.vue'],

		extends: [
			...fixupConfigRules(
				compat.extends(
					'plugin:@typescript-eslint/disable-type-checked',
					'plugin:vue/vue3-strongly-recommended',
					'@vue/eslint-config-typescript',
					'@vue/eslint-config-prettier'
				)
			),
		],

		languageOptions: {
			parser: vueParser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.vue'],
			},
		},

		rules: {
			'vue/multi-word-component-names': 'off',
			'func-style': 'off',
			'sort-imports': 'off',
			'jsdoc/require-param': 'off',
			'jsdoc/require-param-type': 'off',
			'jsdoc/require-returns': 'off',
			'jsdoc/require-returns-type': 'off',
			'no-redeclare': 'warn',
		},
	},
	{
		files: ['src/Cat-a-lot/*', 'src/Cat-a-lot/**/*'],

		rules: {
			'mediawiki/class-doc': 'off',
		},
	},
	{
		files: ['src/Edittools-refToolbar/*', 'src/Edittools-refToolbar/**/*'],

		languageOptions: {
			globals: {
				CiteTB: 'writable',
			},
		},

		rules: {
			camelcase: 'off',
			'no-new': 'off',
			'mediawiki/class-doc': 'off',
		},
	},
	{
		files: ['src/HideLongSummaries/*'],

		rules: {
			'mediawiki/class-doc': 'off',
		},
	},
	{
		files: ['src/HotCat/*', 'src/HotCat/**/*'],

		languageOptions: {
			globals: {
				HotCat: 'readonly',
				UploadForm: 'readonly',
			},
		},

		rules: {
			camelcase: 'off',

			'@typescript-eslint/no-this-alias': [
				'error',
				{
					allowDestructuring: true,
					allowedNames: ['self'],
				},
			],

			'no-new': 'off',
		},
	},
	{
		files: ['src/LogFilter/*', 'src/LogFilter/**/*'],

		rules: {
			'mediawiki/class-doc': 'off',
		},
	},
	{
		files: ['src/Navigation_popups/*', 'src/Navigation_popups/**/*'],

		languageOptions: {
			globals: {
				log: 'readonly',
				errlog: 'readonly',
				message: 'readonly',
				wgULS: 'readonly',
			},
		},

		rules: {
			camelcase: 'off',
			'@typescript-eslint/no-unused-vars': 'off',

			'@typescript-eslint/no-this-alias': [
				'error',
				{
					allowDestructuring: true,
					allowedNames: ['self', 'navpopup'],
				},
			],

			'jsdoc/check-param-names': 'off',
			'jsdoc/valid-types': 'off',
			'jsdoc/require-returns': 'off',
			'jsdoc/require-returns-type': 'off',
			'mediawiki/class-doc': 'off',
			'new-cap': 'off',
			'no-extend-native': 'off',
			'no-new': 'off',
			'no-shadow': 'off',
			'no-unused-vars': 'off',
			'no-use-before-define': 'off',
			'unicorn/prefer-query-selector': 'off',
			'unicorn/prefer-add-event-listener': 'off',
			'unicorn/prefer-string-slice': 'off',
		},
	},
	{
		files: ['src/NoteTA/*', 'src/NoteTA/**/*'],

		rules: {
			'mediawiki/class-doc': 'off',
		},
	},
	{
		files: ['src/Util/*', 'src/Util/**/*'],

		rules: {
			'mediawiki/class-doc': 'off',
			'no-implicit-globals': 'off',
		},
	},
	{
		files: ['src/VariantAlly/*', 'src/VariantAlly/**/*', 'src/VariantAllyDialog/*', 'src/VariantAllyDialog/**/*'],

		rules: {
			'no-implicit-globals': 'off',
			'func-style': 'off',
			'sort-imports': 'off',

			'jsdoc/require-param': 'off',
			'jsdoc/require-param-type': 'off',
			'jsdoc/require-returns': 'off',
		},
	},
	{
		files: ['src/TextSpacing/*', 'src/TextSpacing/**/*'],

		rules: {
			'@typescript-eslint/no-unsafe-unary-minus': 'off',
		},
	},
	{
		files: ['src/ToolsRedirect/*', 'src/ToolsRedirect/**/*'],

		rules: {
			camelcase: 'off',
			'mediawiki/class-doc': 'off',

			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
		},
	},
	{
		files: ['src/Twinkle/*', 'src/Twinkle/**/*', 'src/Morebits/*', 'src/morebits/**/*'],

		languageOptions: {
			globals: {
				Morebits: 'readonly',
				Twinkle: 'writable',
				wgULS: 'readonly',
				jQuery: 'readonly',
			},
		},

		rules: {
			camelcase: 'off',

			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-this-alias': [
				'error',
				{
					allowDestructuring: true,
					allowedNames: ['self', 'udate', 'thisCb', 'thisProxy'],
				},
			],
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/unbound-method': 'off',

			'jsdoc/require-returns': 'off',
			'jsdoc/require-returns-type': 'off',
			'jsdoc/require-throws-type': 'off',
			'jsdoc/valid-types': 'off',
			'jsdoc/require-param-type': 'off',
			'mediawiki/class-doc': 'off',
			'new-cap': 'off',
			'no-new': 'off',
			'unicorn/prefer-dom-node-append': 'off',
			'unicorn/prefer-dom-node-remove': 'off',
			'unicorn/prefer-modern-dom-apis': 'off',
			'unicorn/prefer-dom-node-dataset': 'off',
		},
	},
	{
		files: ['src/Wikiplus/*', 'src/Wikiplus/**/*'],

		rules: {
			'jsdoc/implements-on-classes': 'off',
			'jsdoc/require-param-name': 'off',
			'jsdoc/require-returns': 'off',
			'jsdoc/valid-types': 'off',
			'mediawiki/msg-doc': 'off',
			'no-use-before-define': 'off',
		},
	},
	{
		files: ['src/Wikiplus-highlight/*', 'src/Wikiplus-highlight/**/*'],

		languageOptions: {
			globals: {
				CodeMirror: 'readonly',
				CodeMirror6: 'readonly',
			},
		},

		rules: {
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'jsdoc/require-returns': 'off',
			'jsdoc/require-param-type': 'off',
			'no-shadow': 'off',
			'unicorn/no-await-expression-member': 'off',
		},
	},
	{
		files: ['scripts/modules/utils/*', 'scripts/modules/utils/**/*'],

		rules: {
			'security/detect-non-literal-fs-filename': 'off',
		},
	},
]);
