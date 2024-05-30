/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-opt-bolds.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-opt-bolds}
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

// dist/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
//! src/ToolsRedirect-opt-bolds/options.json
var version = "2.0";
//! src/ToolsRedirect-opt-bolds/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect-opt-bolds-names/".concat(version));
//! src/ToolsRedirect-opt-bolds/modules/checkDependencies.ts
var checkDependencies = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    if (!mw.user.options.get("gadget-ToolsRedirect")) {
      void api.postWithEditToken({
        action: "options",
        change: "gadget-ToolsRedirect=1"
      });
      yield mw.loader.using("ext.gadget.ToolsRedirect");
    }
  });
  return function checkDependencies2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/ToolsRedirect-opt-bolds/modules/opt-bolds.ts
var import_ext_gadget2 = require("ext.gadget.ToolsRedirect");
var checkRedirect = () => {
  (0, import_ext_gadget2.findRedirectBySelector)("div#mw-content-text p > b");
};
//! src/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.ts
(function toolsRedirectCourtesyAndArtNames() {
  void checkDependencies();
  checkRedirect();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzL29wdGlvbnMuanNvbiIsICJzcmMvVG9vbHNSZWRpcmVjdC1vcHQtYm9sZHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzL21vZHVsZXMvb3B0LWJvbGRzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0LW9wdC1ib2xkcy9Ub29sc1JlZGlyZWN0LW9wdC1ib2xkcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVG9vbHNSZWRpcmVjdC1vcHQtYm9sZHMtbmFtZXMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBjaGVja0RlcGVuZGVuY2llcyA9IGFzeW5jICgpID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdCcpKSB7XG5cdFx0dm9pZCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9O1xuIiwgImltcG9ydCB7ZmluZFJlZGlyZWN0QnlTZWxlY3Rvcn0gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcblxuY29uc3QgY2hlY2tSZWRpcmVjdCA9ICgpOiB2b2lkID0+IHtcblx0ZmluZFJlZGlyZWN0QnlTZWxlY3RvcignZGl2I213LWNvbnRlbnQtdGV4dCBwID4gYicpO1xufTtcblxuZXhwb3J0IHtjaGVja1JlZGlyZWN0fTtcbiIsICJpbXBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfSBmcm9tICcuL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMnO1xuaW1wb3J0IHtjaGVja1JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvb3B0LWJvbGRzJztcblxuKGZ1bmN0aW9uIHRvb2xzUmVkaXJlY3RDb3VydGVzeUFuZEFydE5hbWVzKCkge1xuXHR2b2lkIGNoZWNrRGVwZW5kZW5jaWVzKCk7XG5cdGNoZWNrUmVkaXJlY3QoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsaUNBQUFDLE9BQW1ETCxPQUFPLENBQUU7O0FDRGhGLElBQU1NLG9CQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQW9CLGFBQVk7QUFDckMsUUFBSSxDQUFDQyxHQUFHQyxLQUFLQyxRQUFRQyxJQUFJLHNCQUFzQixHQUFHO0FBQ2pELFdBQUtULElBQUlVLGtCQUFrQjtRQUMxQkMsUUFBUTtRQUNSQyxRQUFRO01BQ1QsQ0FBcUI7QUFDckIsWUFBTU4sR0FBR08sT0FBT0MsTUFBTSwwQkFBMEI7SUFDakQ7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQVJNWCxxQkFBQTtBQUFBLFdBQUFDLEtBQUFXLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNGTixJQUFBQyxxQkFBcUNsQixRQUFBLDBCQUFBO0FBRXJDLElBQU1tQixnQkFBZ0JBLE1BQVk7QUFDakMsR0FBQSxHQUFBRCxtQkFBQUUsd0JBQXVCLDJCQUEyQjtBQUNuRDs7Q0NEQyxTQUFTQyxtQ0FBbUM7QUFDNUMsT0FBS2pCLGtCQUFrQjtBQUN2QmUsZ0JBQWM7QUFDZixHQUFHOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJtdyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiY2hlY2tSZWRpcmVjdCIsICJmaW5kUmVkaXJlY3RCeVNlbGVjdG9yIiwgInRvb2xzUmVkaXJlY3RDb3VydGVzeUFuZEFydE5hbWVzIl0KfQo=
