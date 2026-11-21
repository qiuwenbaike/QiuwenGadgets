import {getBody} from 'ext.gadget.Util';

void getBody().then(function inPageEditLoader(): void {
	const {wgNamespaceNumber} = mw.config.get();

	// Special pages (namespace -1) are read-only lists: InPageEdit cannot edit them, but injecting it
	// would pull CodeMirror, Codex and Vue (several MB) and decorate every link on the page.
	if (wgNamespaceNumber < 0) {
		return;
	}

	/**!
	 * SPDX-License-Identifier: MIT
	 *
	 * @name InPageEdit NEXT
	 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/src/branch/master}
	 * @author 机智的小鱼君 Dragon-Fish <dragon-fish@qq.com>
	 * @license MIT {@link https://git.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/src/branch/master/LICENSE}
	 */
	// InPageEdit NEXT
	document.body.append(
		Object.assign(document.createElement('script'), {
			src: 'https://gitcdn.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/raw/branch/master/packages/core/dist/index.js?ver=20261117',
			type: 'module',
		})
	);
});
