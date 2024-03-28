/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EditCount}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/EditCount/EditCount.js
//! src/EditCount/EditCount.ts
var {
  wgUserEditCount
} = mw.config.get();
mw.loader.addStyleTag('#pt-mycontris > a::after,\n	.menu__item--userContributions > span > span::after {\n		content:" ('.concat(wgUserEditCount !== null && wgUserEditCount !== void 0 ? wgUserEditCount : 0, ')"\n	}'));

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb3VudC9FZGl0Q291bnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IHt3Z1VzZXJFZGl0Q291bnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5tdy5sb2FkZXIuYWRkU3R5bGVUYWcoXG5cdGAjcHQtbXljb250cmlzID4gYTo6YWZ0ZXIsXG5cdC5tZW51X19pdGVtLS11c2VyQ29udHJpYnV0aW9ucyA+IHNwYW4gPiBzcGFuOjphZnRlciB7XG5cdFx0Y29udGVudDpcIiAoJHt3Z1VzZXJFZGl0Q291bnQgPz8gMH0pXCJcblx0fWBcbik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNO0VBQUNBO0FBQWUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV4Q0YsR0FBR0csT0FBT0MsWUFBQSxtR0FBQUMsT0FHS04sb0JBQUEsUUFBQUEsb0JBQUEsU0FBQUEsa0JBQW1CLEdBQUMsUUFBQSxDQUVuQzsiLAogICJuYW1lcyI6IFsid2dVc2VyRWRpdENvdW50IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibG9hZGVyIiwgImFkZFN0eWxlVGFnIiwgImNvbmNhdCJdCn0K
