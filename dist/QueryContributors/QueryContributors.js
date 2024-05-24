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
      en: "Based on contributions of $1.",
      "zh-hans": "基于$1的贡献。",
      "zh-hant": "基于$1的貢獻。"
    }),
    Seperator: (0, import_ext_gadget3.localize)({
      en: ", ",
      "zh-hans": "、",
      "zh-hant": "、"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QueryContributors/QueryContributors.ts
void (0, import_ext_gadget4.getBody)().then(/* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($body) {
    const {
      wgAction,
      wgArticleId,
      wgPageName
    } = mw.config.get();
    if (!wgPageName) {
      return;
    }
    if (wgAction !== "view" || !wgArticleId) {
      return;
    }
    const contributors = yield getContributors(wgPageName);
    $body.find("#footer-info-lastmod").append($("<span>").text(getMessage("Based on contributions of").replace("$1", contributors.join(getMessage("Seperator")))));
  });
  return function(_x4) {
    return _ref3.apply(this, arguments);
  };
}());

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL1F1ZXJ5Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9vcHRpb25zLmpzb24iLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL2dldENvbnRyaWJ1dG9ycy50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldENvbnRyaWJ1dG9yc30gZnJvbSAnLi9tb2R1bGVzL2dldENvbnRyaWJ1dG9ycyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihhc3luYyAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0FydGljbGVJZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRyaWJ1dG9ycyA9IGF3YWl0IGdldENvbnRyaWJ1dG9ycyh3Z1BhZ2VOYW1lKTtcblxuXHQkYm9keVxuXHRcdC5maW5kKCcjZm9vdGVyLWluZm8tbGFzdG1vZCcpXG5cdFx0LmFwcGVuZChcblx0XHRcdCQoJzxzcGFuPicpLnRleHQoXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnKS5yZXBsYWNlKCckMScsIGNvbnRyaWJ1dG9ycy5qb2luKGdldE1lc3NhZ2UoJ1NlcGVyYXRvcicpKSlcblx0XHRcdClcblx0XHQpO1xufSk7XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVlcnlDb250cmlidXRvcnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcXVlcnlDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcsIHBjY29udGludWU/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUNvbnRyaWJ1dG9yc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdjb250cmlidXRvcnMnLFxuXHRcdHBjZXhjbHVkZWdyb3VwOiBbJ2JvdCddLFxuXHRcdHBjbGltaXQ6IDUwMDAsXG5cdFx0dGl0bGVzLFxuXHR9O1xuXG5cdGlmIChwY2NvbnRpbnVlKSB7XG5cdFx0cGFyYW1zLnBjY29udGludWUgPSBwY2NvbnRpbnVlO1xuXHR9XG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBnZXRDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGNsaXN0OiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgcGNjb250aW51ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5Q29udHJpYnV0b3JzKHRpdGxlcywgcGNjb250aW51ZSk7XG5cblx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgZGF0YVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0Y29uc3Qge2NvbnRyaWJ1dG9yc30gPSBwYWdlIGFzIHtcblx0XHRcdFx0Y29udHJpYnV0b3JzOiB7dXNlcmlkOiBudW1iZXI7IG5hbWU6IHN0cmluZ31bXTtcblx0XHRcdH07XG5cblx0XHRcdGZvciAoY29uc3Qge25hbWV9IG9mIGNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRwY2xpc3RbcGNsaXN0Lmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChkYXRhWydjb250aW51ZSddICYmIGRhdGFbJ2NvbnRpbnVlJ10ucGNjb250aW51ZSkge1xuXHRcdFx0KHtwY2NvbnRpbnVlfSA9IGRhdGFbJ2NvbnRpbnVlJ10gYXMge3BjY29udGludWU6IHN0cmluZ30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkocGNsaXN0KTtcbn07XG5cbmV4cG9ydCB7Z2V0Q29udHJpYnV0b3JzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YgJDEuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WfuuS6jiQx55qE6LSh54yu44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+WfuuS6jiQx55qE6LKi542744CCJyxcblx0XHR9KSxcblx0XHRTZXBlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLCAnLFxuXHRcdFx0J3poLWhhbnMnOiAn44CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+OAgScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JGLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUcsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxxQkFBQUMsT0FBdUNKLE9BQU8sQ0FBRTs7QUNGcEUsSUFBQUsscUJBQTBCTixRQUFBLGlCQUFBO0FBRTFCLElBQU1PLG9CQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQW9CLFdBQU9DLFFBQWdCQyxZQUF3QjtBQUN4RSxVQUFNQyxTQUFxQztNQUMxQ0MsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQ3RCQyxTQUFTO01BQ1RSO0lBQ0Q7QUFFQSxRQUFJQyxZQUFZO0FBQ2ZDLGFBQU9ELGFBQWFBO0lBQ3JCO0FBRUEsVUFBTVEsT0FBQSxNQUFhaEIsSUFBSWlCLEtBQUtSLE1BQU07QUFFbEMsV0FBT087RUFDUixDQUFBO0FBQUEsU0FBQSxTQWxCTVosbUJBQUFjLElBQUFDLEtBQUE7QUFBQSxXQUFBZCxLQUFBZSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFvQk4sSUFBTUMsa0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBakIsa0JBQWtCLFdBQU9DLFFBQW1CO0FBQ2pELFVBQU1pQixTQUFtQixDQUFBO0FBQ3pCLFFBQUloQjtBQUVKLFdBQU8sTUFBTTtBQUNaLFlBQU1RLE9BQUEsTUFBYVosa0JBQWtCRyxRQUFRQyxVQUFVO0FBQUEsVUFBQWlCLFlBQUFDLDJCQUVwQ1YsS0FBSyxPQUFPLEVBQUVXLEtBQUEsR0FBQUM7QUFBQSxVQUFBO0FBQWpDLGFBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQXdDO0FBQUEsZ0JBQTdCQyxPQUFBSixNQUFBSztBQUNWLGdCQUFNO1lBQUNDO1VBQVksSUFBSUY7QUFBQSxjQUFBRyxhQUFBVCwyQkFJRlEsWUFBQSxHQUFBRTtBQUFBLGNBQUE7QUFBckIsaUJBQUFELFdBQUFOLEVBQUEsR0FBQSxFQUFBTyxTQUFBRCxXQUFBTCxFQUFBLEdBQUFDLFFBQW1DO0FBQUEsb0JBQXhCO2dCQUFDTTtjQUFJLElBQUFELE9BQUFIO0FBQ2ZULHFCQUFPQSxPQUFPYyxNQUFNLElBQUlEO1lBQ3pCO1VBQUEsU0FBQUUsS0FBQTtBQUFBSix1QkFBQUssRUFBQUQsR0FBQTtVQUFBLFVBQUE7QUFBQUosdUJBQUFNLEVBQUE7VUFBQTtRQUNEO01BQUEsU0FBQUYsS0FBQTtBQUFBZCxrQkFBQWUsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQWQsa0JBQUFnQixFQUFBO01BQUE7QUFFQSxVQUFJekIsS0FBSyxVQUFVLEtBQUtBLEtBQUssVUFBVSxFQUFFUixZQUFZO0FBQ3BELFNBQUM7VUFBQ0E7UUFBVSxJQUFJUSxLQUFLLFVBQVU7TUFDaEMsT0FBTztBQUNOO01BQ0Q7SUFDRDtBQUVBLFlBQUEsR0FBT2IsbUJBQUF1QyxhQUFZbEIsTUFBTTtFQUMxQixDQUFBO0FBQUEsU0FBQSxTQXpCTUYsaUJBQUFxQixLQUFBO0FBQUEsV0FBQXBCLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUN2Qk4sSUFBQXVCLHFCQUF1Qi9DLFFBQUEsaUJBQUE7QUFFdkIsSUFBTWdELGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sOEJBQUEsR0FBNkJELG1CQUFBRSxVQUFTO01BQ3JDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFlBQUEsR0FBV0osbUJBQUFFLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZUosZ0JBQWdCO0FBRXJDLElBQU1LLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FKakJBLE1BQUEsR0FBS3ZELG1CQUFBd0QsU0FBUSxFQUFFQyxLQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQWhELGtCQUFLLFdBQU9pRCxPQUFtQztBQUM3RCxVQUFNO01BQUNDO01BQVVDO01BQWFDO0lBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUUxRCxRQUFJLENBQUNILFlBQVk7QUFDaEI7SUFDRDtBQUVBLFFBQUlGLGFBQWEsVUFBVSxDQUFDQyxhQUFhO0FBQ3hDO0lBQ0Q7QUFFQSxVQUFNdkIsZUFBQSxNQUFxQlosZ0JBQWdCb0MsVUFBVTtBQUVyREgsVUFDRU8sS0FBSyxzQkFBc0IsRUFDM0JDLE9BQ0FDLEVBQUUsUUFBUSxFQUFFQyxLQUNYZixXQUFXLDJCQUEyQixFQUFFZ0IsUUFBUSxNQUFNaEMsYUFBYWlDLEtBQUtqQixXQUFXLFdBQVcsQ0FBQyxDQUFDLENBQ2pHLENBQ0Q7RUFDRixDQUFDO0FBQUEsU0FBQSxTQUFBa0IsS0FBQTtBQUFBLFdBQUFkLE1BQUFsQyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUEsQ0FBQTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicXVlcnlDb250cmlidXRvcnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGNjb250aW51ZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicGNleGNsdWRlZ3JvdXAiLCAicGNsaW1pdCIsICJkYXRhIiwgInBvc3QiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRDb250cmlidXRvcnMiLCAiX3JlZjIiLCAicGNsaXN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgImNvbnRyaWJ1dG9ycyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJuYW1lIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgInVuaXF1ZUFycmF5IiwgIl94MyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNlcGVyYXRvciIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIl9yZWYzIiwgIiRib2R5IiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJmaW5kIiwgImFwcGVuZCIsICIkIiwgInRleHQiLCAicmVwbGFjZSIsICJqb2luIiwgIl94NCJdCn0K
