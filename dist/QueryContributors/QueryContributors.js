/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|license2=Qiuwen License}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QueryContributors}
 * @author WaitSpring <me@waitspring.com>
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 * @license Qiuwen License {@link https://www.qiuwenbaike.cn/wiki/QW:QWL}
 */

/**
 * Copyright 2024 WaitSpring <me@waitspring.com>
 * Licensed under the "Qiuwen License" (the "License");
 * You may obtain a copy of the License at
 *
 *     http://www.qiuwenbaike.cn/wiki/QW:QWL
 *
 * See the License for details.
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

// dist/QueryContributors/QueryContributors.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
//! src/QueryContributors/QueryContributors.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/QueryContributors/options.json
var version = "1.0";
//! src/QueryContributors/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QueryContributors/".concat(version));
//! src/QueryContributors/modules/getContributors.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var queryContributors = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles, pccontinue) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "contributors",
      pcexcludegroup: ["bot"],
      pclimit: 5e3,
      titles
    };
    if (pccontinue) {
      params.pccontinue = pccontinue;
    }
    const data = yield api.post(params);
    return data;
  });
  return function queryContributors2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getContributors = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (titles) {
    const pclist = [];
    let pccontinue;
    while (true) {
      const data = yield queryContributors(titles, pccontinue);
      var _iterator = _createForOfIteratorHelper(data["query"].pages), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const page = _step.value;
          const {
            contributors
          } = page;
          var _iterator2 = _createForOfIteratorHelper(contributors), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const {
                name
              } = _step2.value;
              pclist[pclist.length] = name;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data["continue"] && data["continue"].pccontinue) {
        ({
          pccontinue
        } = data["continue"]);
      } else {
        break;
      }
    }
    return (0, import_ext_gadget2.uniqueArray)(pclist);
  });
  return function getContributors2(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/QueryContributors/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Based on contributions of": (0, import_ext_gadget3.localize)({
      en: "Based on contributions of",
      "zh-hans": "基于下列用户的贡献：",
      "zh-hant": "基于下列使用者的貢獻："
    }),
    Seperator: (0, import_ext_gadget3.localize)({
      en: ", ",
      "zh-hans": "、",
      "zh-hant": "、"
    }),
    Period: (0, import_ext_gadget3.localize)({
      en: ".",
      zh: "。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QueryContributors/modules/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&lt;").replace(/"/g, "&quot;");
};
//! src/QueryContributors/QueryContributors.ts
void (0, import_ext_gadget4.getBody)().then(/* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($body) {
    const {
      wgAction,
      wgArticleId,
      wgCurRevisionId,
      wgPageName,
      wgRevisionId
    } = mw.config.get();
    if (wgAction !== "view" || !wgArticleId || !wgPageName) {
      return;
    }
    if (wgCurRevisionId > wgRevisionId) {
      return;
    }
    const contributors = yield getContributors(wgPageName);
    const $contributorsList = contributors.map((userName, index) => {
      return $("<span>").append($("<a>").attr("href", userName.includes(">") ? mw.util.getUrl("User:".concat(sanitize(userName))) : mw.util.getUrl("Special:GoToInterWiki/".concat(sanitize(userName.replace(">", ":User:"))))).text(userName), index < contributors.length - 1 ? getMessage("Seperator") : "");
    });
    const lastMod = $body.find("#footer-info-lastmod");
    if (lastMod) {
      lastMod.append($("<span>").append(getMessage("Based on contributions of")), $contributorsList, getMessage("Period"));
    }
  });
  return function(_x4) {
    return _ref3.apply(this, arguments);
  };
}());

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL1F1ZXJ5Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9vcHRpb25zLmpzb24iLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL2dldENvbnRyaWJ1dG9ycy50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3Nhbml0aXplLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldENvbnRyaWJ1dG9yc30gZnJvbSAnLi9tb2R1bGVzL2dldENvbnRyaWJ1dG9ycyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4vbW9kdWxlcy9zYW5pdGl6ZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oYXN5bmMgKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PikgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnQXJ0aWNsZUlkIHx8ICF3Z1BhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnQ3VyUmV2aXNpb25JZCA+IHdnUmV2aXNpb25JZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRyaWJ1dG9yczogc3RyaW5nW10gPSBhd2FpdCBnZXRDb250cmlidXRvcnMod2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgJGNvbnRyaWJ1dG9yc0xpc3Q6IEpRdWVyeVtdID0gY29udHJpYnV0b3JzLm1hcCgodXNlck5hbWUsIGluZGV4KSA9PiB7XG5cdFx0cmV0dXJuICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdocmVmJyxcblx0XHRcdFx0XHR1c2VyTmFtZS5pbmNsdWRlcygnPicpXG5cdFx0XHRcdFx0XHQ/IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApXG5cdFx0XHRcdFx0XHQ6IG13LnV0aWwuZ2V0VXJsKGBTcGVjaWFsOkdvVG9JbnRlcldpa2kvJHtzYW5pdGl6ZSh1c2VyTmFtZS5yZXBsYWNlKCc+JywgJzpVc2VyOicpKX1gKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50ZXh0KHVzZXJOYW1lKSxcblx0XHRcdGluZGV4IDwgY29udHJpYnV0b3JzLmxlbmd0aCAtIDEgPyBnZXRNZXNzYWdlKCdTZXBlcmF0b3InKSA6ICcnXG5cdFx0KTtcblx0fSk7XG5cblx0Y29uc3QgbGFzdE1vZCA9ICRib2R5LmZpbmQoJyNmb290ZXItaW5mby1sYXN0bW9kJyk7XG5cblx0aWYgKGxhc3RNb2QpIHtcblx0XHRsYXN0TW9kLmFwcGVuZChcblx0XHRcdCQoJzxzcGFuPicpLmFwcGVuZChnZXRNZXNzYWdlKCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJykpLFxuXHRcdFx0JGNvbnRyaWJ1dG9yc0xpc3QsXG5cdFx0XHRnZXRNZXNzYWdlKCdQZXJpb2QnKVxuXHRcdCk7XG5cdH1cbn0pO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1ZXJ5Q29udHJpYnV0b3JzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHF1ZXJ5Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nLCBwY2NvbnRpbnVlPzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlDb250cmlidXRvcnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnY29udHJpYnV0b3JzJyxcblx0XHRwY2V4Y2x1ZGVncm91cDogWydib3QnXSxcblx0XHRwY2xpbWl0OiA1MDAwLFxuXHRcdHRpdGxlcyxcblx0fTtcblxuXHRpZiAocGNjb250aW51ZSkge1xuXHRcdHBhcmFtcy5wY2NvbnRpbnVlID0gcGNjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZ2V0Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBjbGlzdDogc3RyaW5nW10gPSBbXTtcblx0bGV0IHBjY29udGludWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBxdWVyeUNvbnRyaWJ1dG9ycyh0aXRsZXMsIHBjY29udGludWUpO1xuXG5cdFx0Zm9yIChjb25zdCBwYWdlIG9mIGRhdGFbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdGNvbnN0IHtjb250cmlidXRvcnN9ID0gcGFnZSBhcyB7XG5cdFx0XHRcdGNvbnRyaWJ1dG9yczoge3VzZXJpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmd9W107XG5cdFx0XHR9O1xuXG5cdFx0XHRmb3IgKGNvbnN0IHtuYW1lfSBvZiBjb250cmlidXRvcnMpIHtcblx0XHRcdFx0cGNsaXN0W3BjbGlzdC5sZW5ndGhdID0gbmFtZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGF0YVsnY29udGludWUnXSAmJiBkYXRhWydjb250aW51ZSddLnBjY29udGludWUpIHtcblx0XHRcdCh7cGNjb250aW51ZX0gPSBkYXRhWydjb250aW51ZSddIGFzIHtwY2NvbnRpbnVlOiBzdHJpbmd9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KHBjbGlzdCk7XG59O1xuXG5leHBvcnQge2dldENvbnRyaWJ1dG9yc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WfuuS6juS4i+WIl+eUqOaIt+eahOi0oeeMru+8micsXG5cdFx0XHQnemgtaGFudCc6ICfln7rkuo7kuIvliJfkvb/nlKjogIXnmoTosqLnjbvvvJonLFxuXHRcdH0pLFxuXHRcdFNlcGVyYXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcsICcsXG5cdFx0XHQnemgtaGFucyc6ICfjgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn44CBJyxcblx0XHR9KSxcblx0XHRQZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmx0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JGLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUcsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxxQkFBQUMsT0FBdUNKLE9BQU8sQ0FBRTs7QUNGcEUsSUFBQUsscUJBQTBCTixRQUFBLGlCQUFBO0FBRTFCLElBQU1PLG9CQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQW9CLFdBQU9DLFFBQWdCQyxZQUF3QjtBQUN4RSxVQUFNQyxTQUFxQztNQUMxQ0MsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQ3RCQyxTQUFTO01BQ1RSO0lBQ0Q7QUFFQSxRQUFJQyxZQUFZO0FBQ2ZDLGFBQU9ELGFBQWFBO0lBQ3JCO0FBRUEsVUFBTVEsT0FBQSxNQUFhaEIsSUFBSWlCLEtBQUtSLE1BQU07QUFFbEMsV0FBT087RUFDUixDQUFBO0FBQUEsU0FBQSxTQWxCTVosbUJBQUFjLElBQUFDLEtBQUE7QUFBQSxXQUFBZCxLQUFBZSxNQUFBLE1BQUFDLFNBQUE7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S0FDQSxRQUNBSixTQUFTSyxTQUFTLEdBQUcsSUFDbEJWLEdBQUdXLEtBQUtDLE9BQUEsUUFBQTVFLE9BQWVvRCxTQUFTaUIsUUFBUSxDQUFDLENBQUUsSUFDM0NMLEdBQUdXLEtBQUtDLE9BQUEseUJBQUE1RSxPQUFnQ29ELFNBQVNpQixTQUFTZixRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBRSxDQUN2RixFQUNDdUIsS0FBS1IsUUFBUSxHQUNmQyxRQUFRdEMsYUFBYUksU0FBUyxJQUFJYyxXQUFXLFdBQVcsSUFBSSxFQUM3RDtJQUNELENBQUM7QUFFRCxVQUFNNEIsVUFBVXBCLE1BQU1xQixLQUFLLHNCQUFzQjtBQUVqRCxRQUFJRCxTQUFTO0FBQ1pBLGNBQVFOLE9BQ1BELEVBQUUsUUFBUSxFQUFFQyxPQUFPdEIsV0FBVywyQkFBMkIsQ0FBQyxHQUMxRGlCLG1CQUNBakIsV0FBVyxRQUFRLENBQ3BCO0lBQ0Q7RUFDRCxDQUFDO0FBQUEsU0FBQSxTQUFBOEIsS0FBQTtBQUFBLFdBQUF2QixNQUFBdkMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBLENBQUE7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInF1ZXJ5Q29udHJpYnV0b3JzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBjY29udGludWUiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBjZXhjbHVkZWdyb3VwIiwgInBjbGltaXQiLCAiZGF0YSIsICJwb3N0IiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0Q29udHJpYnV0b3JzIiwgIl9yZWYyIiwgInBjbGlzdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicGFnZSIsICJ2YWx1ZSIsICJjb250cmlidXRvcnMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAibmFtZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJ1bmlxdWVBcnJheSIsICJfeDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJTZXBlcmF0b3IiLCAiUGVyaW9kIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiX3JlZjMiLCAiJGJvZHkiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJGNvbnRyaWJ1dG9yc0xpc3QiLCAibWFwIiwgInVzZXJOYW1lIiwgImluZGV4IiwgIiQiLCAiYXBwZW5kIiwgImF0dHIiLCAiaW5jbHVkZXMiLCAidXRpbCIsICJnZXRVcmwiLCAidGV4dCIsICJsYXN0TW9kIiwgImZpbmQiLCAiX3g0Il0KfQo=
