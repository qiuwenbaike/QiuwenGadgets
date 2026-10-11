/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HistoryDisclaimer}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/HistoryDisclaimer/HistoryDisclaimer.js
//! src/HistoryDisclaimer/HistoryDisclaimer.module.less
var disclaimer = "HistoryDisclaimer-module__disclaimer_W9SYoG__4100";
//! src/HistoryDisclaimer/modules/getBackground.ts
var background = () => {
  const element = document.createElement("div");
  element.className = disclaimer;
  return element;
};
//! src/HistoryDisclaimer/HistoryDisclaimer.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(function historyDisclaimer() {
  const {
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
    return;
  }
  if (document.querySelector(".".concat(disclaimer))) {
    return;
  }
  document.body.append(background());
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLm1vZHVsZS5sZXNzIiwgInNyYy9IaXN0b3J5RGlzY2xhaW1lci9tb2R1bGVzL2dldEJhY2tncm91bmQudHMiLCAic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZGlzY2xhaW1lciA9IFwiSGlzdG9yeURpc2NsYWltZXItbW9kdWxlX19kaXNjbGFpbWVyX1c5U1lvR19fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZGlzY2xhaW1lclwiOiBkaXNjbGFpbWVyXG59O1xuICAgICAgIiwgImltcG9ydCB7ZGlzY2xhaW1lcn0gZnJvbSAnLi4vSGlzdG9yeURpc2NsYWltZXIubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVsZW1lbnQuY2xhc3NOYW1lID0gZGlzY2xhaW1lcjtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQge2JhY2tncm91bmR9O1xuIiwgImltcG9ydCB7YmFja2dyb3VuZH0gZnJvbSAnLi9tb2R1bGVzL2dldEJhY2tncm91bmQnO1xuaW1wb3J0IHtkaXNjbGFpbWVyfSBmcm9tICcuL0hpc3RvcnlEaXNjbGFpbWVyLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBoaXN0b3J5RGlzY2xhaW1lcigpOiB2b2lkIHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXdnQ3VyUmV2aXNpb25JZCB8fCAhd2dSZXZpc2lvbklkIHx8IHdnQ3VyUmV2aXNpb25JZCA8PSB3Z1JldmlzaW9uSWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGlzY2xhaW1lcn1gKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhY2tncm91bmQoKSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsYUFBYTs7QUNDMUIsSUFBTUMsYUFBYUEsTUFBTTtBQUN4QixRQUFNQyxVQUFVQyxTQUFTQyxjQUFjLEtBQUs7QUFDNUNGLFVBQVFHLFlBQVlMO0FBQ3BCLFNBQU9FO0FBQ1I7O0FDSkEsSUFBQUksb0JBQXNCQyxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS0Qsa0JBQUFFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxvQkFBMEI7QUFDdEQsUUFBTTtJQUFDQztJQUFpQkM7RUFBWSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXRELE1BQUksQ0FBQ0osbUJBQW1CLENBQUNDLGdCQUFnQkQsbUJBQW1CQyxjQUFjO0FBQ3pFO0VBQ0Q7QUFFQSxNQUFJVCxTQUFTYSxjQUFBLElBQUFDLE9BQWtCakIsVUFBVSxDQUFFLEdBQUc7QUFDN0M7RUFDRDtBQUVBRyxXQUFTZSxLQUFLQyxPQUFPbEIsV0FBVyxDQUFDO0FBQ2xDLENBQUM7IiwKICAibmFtZXMiOiBbImRpc2NsYWltZXIiLCAiYmFja2dyb3VuZCIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImhpc3RvcnlEaXNjbGFpbWVyIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJxdWVyeVNlbGVjdG9yIiwgImNvbmNhdCIsICJib2R5IiwgImFwcGVuZCJdCn0K
