/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wiktionary.org/wiki/User:Erutuon/scripts/gadgets-definition.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GadgetsDefinition}
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

// dist/GadgetsDefinition/GadgetsDefinition.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
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
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
//! src/GadgetsDefinition/modules/util/generateGadgetId.ts
var generateGadgetId = (gadgetName) => {
  return "Gadget-".concat(gadgetName);
};
//! src/GadgetsDefinition/GadgetsDefinition.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/GadgetsDefinition/modules/constant.ts
var REXEX_GADGET_NAME = /^(\s*)([\w_-]+)\s*/;
//! src/GadgetsDefinition/modules/util/matchGadgetName.ts
var matchGadgetName = (innerHTML) => {
  var _ref;
  const regExpExecArray = REXEX_GADGET_NAME.exec(innerHTML);
  return (_ref = regExpExecArray ? regExpExecArray[2] : null) !== null && _ref !== void 0 ? _ref : "";
};
//! src/GadgetsDefinition/modules/util/makeLink.ts
var makeLink = (href, text) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  return link.outerHTML;
};
var makeWikilink = (page, text) => {
  return makeLink(mw.util.getUrl(page), text || page);
};
//! src/GadgetsDefinition/modules/processGadgetDefinition.ts
var linkGadgetSource = (sourcePage) => {
  return makeWikilink("MediaWiki:Gadget-".concat(sourcePage), sourcePage);
};
var linkGadgetAnchor = (gadgetName, text) => {
  return makeLink("#".concat(generateGadgetId(gadgetName)), text || gadgetName);
};
var processGadgetDefinition = (innerHTML) => {
  return innerHTML.replace(REXEX_GADGET_NAME, (_wholeMatch, whitespace, gadgetName) => {
    return "".concat(whitespace + linkGadgetSource(gadgetName), " ");
  }).replace(/([\w_\-.]+\.(?:css|js(?:on)?))/g, linkGadgetSource).replace(/\s*\|\s*/g, " | ").replace(/([a-z]+)\s*=\s*(.+?)(?=\s*[|\]])/g, (_wholeMatch, key, value) => {
    let splitValue = value.split(/\s*,\s*/g);
    switch (key) {
      case "dependencies":
        splitValue = splitValue.map((dependency) => {
          const gadgetName = /^ext\.gadget\.(.+)$/.exec(dependency);
          if (gadgetName) {
            var _gadgetName$;
            const _gadgetName = (_gadgetName$ = gadgetName[1]) !== null && _gadgetName$ !== void 0 ? _gadgetName$ : "";
            return linkGadgetAnchor(_gadgetName, dependency);
          }
          return makeWikilink("Special:GoToInterwiki/mw:ResourceLoader/Core_modules#".concat(dependency), dependency);
        });
        break;
      case "rights":
        key = makeWikilink("Special:GoToInterwiki/mw:Manual:User_rights#List_of_permissions", key);
        break;
      case "peers":
        splitValue = splitValue.map((gadgetName) => {
          return linkGadgetAnchor(gadgetName);
        });
    }
    return "".concat(key, " = ").concat(splitValue.join(", "));
  });
};
//! src/GadgetsDefinition/GadgetsDefinition.ts
void (0, import_ext_gadget.getBody)().then(function gadgetsDefinition($body) {
  const {
    wgCanonicalNamespace,
    wgTitle
  } = mw.config.get();
  const isDefinitionPage = wgCanonicalNamespace === "MediaWiki" && wgTitle === "Gadgets-definition";
  const $parserOutput = $body.find(".mw-parser-output");
  if (!isDefinitionPage || !$parserOutput.length) {
    return;
  }
  var _iterator = _createForOfIteratorHelper($parserOutput.find("li")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const gadgetName = matchGadgetName(element.innerHTML);
      if (gadgetName) {
        element.id = generateGadgetId(gadgetName);
      }
      element.innerHTML = processGadgetDefinition(element.innerHTML);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper($parserOutput.find("pre")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      element.innerHTML = element.innerHTML.replace(/[^\n]+/g, processGadgetDefinition);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dhZGdldHNEZWZpbml0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUdhZGdldElkLnRzIiwgInNyYy9HYWRnZXRzRGVmaW5pdGlvbi9HYWRnZXRzRGVmaW5pdGlvbi50cyIsICJzcmMvR2FkZ2V0c0RlZmluaXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2FkZ2V0c0RlZmluaXRpb24vbW9kdWxlcy91dGlsL21hdGNoR2FkZ2V0TmFtZS50cyIsICJzcmMvR2FkZ2V0c0RlZmluaXRpb24vbW9kdWxlcy91dGlsL21ha2VMaW5rLnRzIiwgInNyYy9HYWRnZXRzRGVmaW5pdGlvbi9tb2R1bGVzL3Byb2Nlc3NHYWRnZXREZWZpbml0aW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBnZW5lcmF0ZUdhZGdldElkID0gKGdhZGdldE5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgR2FkZ2V0LSR7Z2FkZ2V0TmFtZX1gO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUdhZGdldElkfTtcbiIsICIvKipcbiAqIEBkZXNjcmlwdGlvbiBBZGRzIGxpbmtzIHRvIGdhZGdldCBkZWZpbml0aW9ucyBpbiBbW01lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb25dXSBhbmRcbiAqIHByZXR0aWZpZXMgdGhlbSBieSBhZGRpbmcgd2hpdGVzcGFjZS5cbiAqIEFkZHMgYW5jaG9ycyB0byBnYWRnZXQgZGVmaW5pdGlvbnMgYXMgd2VsbCBhcyBDU1MgdG8gaGlnaGxpZ2h0IHRoZW0gd2hlbiB3ZVxuICogY2xpY2sgYSBsaW5rIHRvIHRoZW0uXG4gKi9cbi8vIFRlY2huaXF1ZSBnbGVhbmVkIGZyb20gW1tlbndpa2k6ZnI6VXRpbGlzYXRldXI6T2Qxbi9BZGRMaW5rc0dhZGdldHNEZWZpbml0aW9uLmpzXV0uXG5pbXBvcnQgJy4vR2FkZ2V0c0RlZmluaXRpb24ubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlR2FkZ2V0SWR9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlR2FkZ2V0SWQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttYXRjaEdhZGdldE5hbWV9IGZyb20gJy4vbW9kdWxlcy91dGlsL21hdGNoR2FkZ2V0TmFtZSc7XG5pbXBvcnQge3Byb2Nlc3NHYWRnZXREZWZpbml0aW9ufSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0dhZGdldERlZmluaXRpb24nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGdhZGdldHNEZWZpbml0aW9uKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxOYW1lc3BhY2UsIHdnVGl0bGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0RlZmluaXRpb25QYWdlOiBib29sZWFuID0gd2dDYW5vbmljYWxOYW1lc3BhY2UgPT09ICdNZWRpYVdpa2knICYmIHdnVGl0bGUgPT09ICdHYWRnZXRzLWRlZmluaXRpb24nO1xuXHRjb25zdCAkcGFyc2VyT3V0cHV0OiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctcGFyc2VyLW91dHB1dCcpO1xuXG5cdC8vIE9ubHkgb3BlcmF0ZSBvbiBbW01lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb25dXSB3aGVuIHRoZSB0ZXh0IGlzIHZpc2libGUuXG5cdGlmICghaXNEZWZpbml0aW9uUGFnZSB8fCAhJHBhcnNlck91dHB1dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBQcm9jZXNzIGdhZGdldCBkZWZpbml0aW9ucyBpbiBsaXN0cy5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRwYXJzZXJPdXRwdXQuZmluZCgnbGknKSkge1xuXHRcdC8vIEFkZCBpZCBzbyB0aGF0IGdhZGdldCBkZWZpbml0aW9ucyBjYW4gYmUgaGlnaGxpZ2h0ZWQgd2hlbiB3ZSBjbGljayBhIGxpbmsgdG8gdGhlbS5cblx0XHRjb25zdCBnYWRnZXROYW1lOiBzdHJpbmcgPSBtYXRjaEdhZGdldE5hbWUoZWxlbWVudC5pbm5lckhUTUwpO1xuXHRcdGlmIChnYWRnZXROYW1lKSB7XG5cdFx0XHRlbGVtZW50LmlkID0gZ2VuZXJhdGVHYWRnZXRJZChnYWRnZXROYW1lKTtcblx0XHR9XG5cblx0XHRlbGVtZW50LmlubmVySFRNTCA9IHByb2Nlc3NHYWRnZXREZWZpbml0aW9uKGVsZW1lbnQuaW5uZXJIVE1MKTtcblx0fVxuXG5cdC8vIFByb2Nlc3MgZ2FkZ2V0IGRlZmluaXRpb25zIGluIHByZSB0YWdzLlxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHBhcnNlck91dHB1dC5maW5kKCdwcmUnKSkge1xuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gZWxlbWVudC5pbm5lckhUTUwucmVwbGFjZSgvW15cXG5dKy9nLCBwcm9jZXNzR2FkZ2V0RGVmaW5pdGlvbik7XG5cdH1cbn0pO1xuIiwgImNvbnN0IFJFWEVYX0dBREdFVF9OQU1FOiBSZWdFeHAgPSAvXihcXHMqKShbXFx3Xy1dKylcXHMqLztcblxuZXhwb3J0IHtSRVhFWF9HQURHRVRfTkFNRX07XG4iLCAiaW1wb3J0IHtSRVhFWF9HQURHRVRfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5jb25zdCBtYXRjaEdhZGdldE5hbWUgPSAoaW5uZXJIVE1MOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCByZWdFeHBFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBSRVhFWF9HQURHRVRfTkFNRS5leGVjKGlubmVySFRNTCk7XG5cblx0cmV0dXJuIChyZWdFeHBFeGVjQXJyYXkgPyByZWdFeHBFeGVjQXJyYXlbMl0gOiBudWxsKSA/PyAnJztcbn07XG5cbmV4cG9ydCB7bWF0Y2hHYWRnZXROYW1lfTtcbiIsICJjb25zdCBtYWtlTGluayA9IChocmVmOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgPT4ge1xuXHQvLyBUaGlzIGFuY2hvciBlbGVtZW50IGlzIHVzZWQgdG8gZ2VuZXJhdGUgbGlua3MgYW5kIGlzIG5vdCBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQuXG5cdGNvbnN0IGxpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5cdGxpbmsuaHJlZiA9IGhyZWY7XG5cdGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdHJldHVybiBsaW5rLm91dGVySFRNTDtcbn07XG5cbmNvbnN0IG1ha2VXaWtpbGluayA9IChwYWdlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBtYWtlTGluayhtdy51dGlsLmdldFVybChwYWdlKSwgdGV4dCB8fCBwYWdlKTtcbn07XG5cbmV4cG9ydCB7bWFrZUxpbmssIG1ha2VXaWtpbGlua307XG4iLCAiaW1wb3J0IHttYWtlTGluaywgbWFrZVdpa2lsaW5rfSBmcm9tICcuL3V0aWwvbWFrZUxpbmsnO1xuaW1wb3J0IHtSRVhFWF9HQURHRVRfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dlbmVyYXRlR2FkZ2V0SWR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUdhZGdldElkJztcblxuY29uc3QgbGlua0dhZGdldFNvdXJjZSA9IChzb3VyY2VQYWdlOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIG1ha2VXaWtpbGluayhgTWVkaWFXaWtpOkdhZGdldC0ke3NvdXJjZVBhZ2V9YCwgc291cmNlUGFnZSk7XG59O1xuXG5jb25zdCBsaW5rR2FkZ2V0QW5jaG9yID0gKGdhZGdldE5hbWU6IHN0cmluZywgdGV4dD86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gbWFrZUxpbmsoYCMke2dlbmVyYXRlR2FkZ2V0SWQoZ2FkZ2V0TmFtZSl9YCwgdGV4dCB8fCBnYWRnZXROYW1lKTtcbn07XG5cbmNvbnN0IHByb2Nlc3NHYWRnZXREZWZpbml0aW9uID0gKGlubmVySFRNTDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIChcblx0XHRpbm5lckhUTUxcblx0XHRcdC8vIGxpbmsgZ2FkZ2V0IG5hbWUgdG8gc3lzdGVtIG1lc3NhZ2UgcGFnZSBhbmQgYWRkIHNwYWNlIGFmdGVyIGl0XG5cdFx0XHQucmVwbGFjZShSRVhFWF9HQURHRVRfTkFNRSwgKF93aG9sZU1hdGNoOiBzdHJpbmcsIHdoaXRlc3BhY2U6IHN0cmluZywgZ2FkZ2V0TmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIGAke3doaXRlc3BhY2UgKyBsaW5rR2FkZ2V0U291cmNlKGdhZGdldE5hbWUpfSBgO1xuXHRcdFx0fSlcblx0XHRcdC5yZXBsYWNlKC8oW1xcd19cXC0uXStcXC4oPzpjc3N8anMoPzpvbik/KSkvZywgbGlua0dhZGdldFNvdXJjZSkgLy8gbGluayBzY3JpcHQgbmFtZXNcblx0XHRcdC5yZXBsYWNlKC9cXHMqXFx8XFxzKi9nLCAnIHwgJykgLy8gc3BhY2VzIGFyb3VuZCBwaXBlc1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBwcm9jZXNzIG9wdGlvbnNcblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIGRlcGVuZGVuY2llczogZXh0LmdhZGdldC5uYW1lIHRvIGVudHJ5IG9uIHRoaXMgcGFnZSwgb3RoZXJzIHRvXG5cdFx0XHQgKiBbW213OlJlc291cmNlTG9hZGVyL0NvcmUgbW9kdWxlc11dIChldmVuIHRob3VnaCBub3QgYWxsIGhhdmUgYW4gZW50cnlcblx0XHRcdCAqIHRoZXJlKS5cblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIHBlZXJzIHRvIGVudHJ5IG9uIHRoaXMgcGFnZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIHJpZ2h0cyB0byBbW213Ok1hbnVhbDpVc2VyX3JpZ2h0cyNMaXN0X29mX3Blcm1pc3Npb25zXV0uIFRoZXJlXG5cdFx0XHQgKiBhcmUgdW5mb3J0dW5hdGVseSBubyBhbmNob3JzIGZvciBpbmRpdmlkdWFsIHJpZ2h0cy5cblx0XHRcdCAqL1xuXHRcdFx0LnJlcGxhY2UoLyhbYS16XSspXFxzKj1cXHMqKC4rPykoPz1cXHMqW3xcXF1dKS9nLCAoX3dob2xlTWF0Y2g6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0bGV0IHNwbGl0VmFsdWU6IHN0cmluZ1tdID0gdmFsdWUuc3BsaXQoL1xccyosXFxzKi9nKTtcblx0XHRcdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdFx0XHRjYXNlICdkZXBlbmRlbmNpZXMnOlxuXHRcdFx0XHRcdFx0c3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWUubWFwKChkZXBlbmRlbmN5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZ2FkZ2V0TmFtZTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC9eZXh0XFwuZ2FkZ2V0XFwuKC4rKSQvLmV4ZWMoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChnYWRnZXROYW1lKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgX2dhZGdldE5hbWU6IHN0cmluZyA9IGdhZGdldE5hbWVbMV0gPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGxpbmtHYWRnZXRBbmNob3IoX2dhZGdldE5hbWUsIGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYWtlV2lraWxpbmsoXG5cdFx0XHRcdFx0XHRcdFx0YFNwZWNpYWw6R29Ub0ludGVyd2lraS9tdzpSZXNvdXJjZUxvYWRlci9Db3JlX21vZHVsZXMjJHtkZXBlbmRlbmN5fWAsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyaWdodHMnOlxuXHRcdFx0XHRcdFx0a2V5ID0gbWFrZVdpa2lsaW5rKCdTcGVjaWFsOkdvVG9JbnRlcndpa2kvbXc6TWFudWFsOlVzZXJfcmlnaHRzI0xpc3Rfb2ZfcGVybWlzc2lvbnMnLCBrZXkpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAncGVlcnMnOlxuXHRcdFx0XHRcdFx0c3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWUubWFwKChnYWRnZXROYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbGlua0dhZGdldEFuY2hvcihnYWRnZXROYW1lKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBgJHtrZXl9ID0gJHtzcGxpdFZhbHVlLmpvaW4oJywgJyl9YDtcblx0XHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NHYWRnZXREZWZpbml0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsbUJBQW9CQyxnQkFBK0I7QUFDeEQsU0FBQSxVQUFBQyxPQUFpQkQsVUFBVTtBQUM1Qjs7QUNPQSxJQUFBRSxvQkFBc0JDLFFBQUEsaUJBQUE7O0FDVHRCLElBQU1DLG9CQUE0Qjs7QUNFbEMsSUFBTUMsa0JBQW1CQyxlQUE4QjtBQUFBLE1BQUFDO0FBQ3RELFFBQU1DLGtCQUEwQ0osa0JBQWtCSyxLQUFLSCxTQUFTO0FBRWhGLFVBQUFDLE9BQVFDLGtCQUFrQkEsZ0JBQWdCLENBQUMsSUFBSSxVQUFBLFFBQUFELFNBQUEsU0FBQUEsT0FBUztBQUN6RDs7QUNOQSxJQUFNRyxXQUFXQSxDQUFDQyxNQUFjQyxTQUFnQztBQUUvRCxRQUFNQyxPQUEwQkMsU0FBU0MsY0FBYyxHQUFHO0FBRTFERixPQUFLRixPQUFPQTtBQUNaRSxPQUFLRyxjQUFjSjtBQUVuQixTQUFPQyxLQUFLSTtBQUNiO0FBRUEsSUFBTUMsZUFBZUEsQ0FBQ0MsTUFBY1AsU0FBeUI7QUFDNUQsU0FBT0YsU0FBU1UsR0FBR0MsS0FBS0MsT0FBT0gsSUFBSSxHQUFHUCxRQUFRTyxJQUFJO0FBQ25E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QXVCO0lBQ2pGO0VBQUEsU0FBQWlDLEtBQUE7QUFBQUcsZUFBQUYsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQUcsZUFBQUQsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiZ2VuZXJhdGVHYWRnZXRJZCIsICJnYWRnZXROYW1lIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIlJFWEVYX0dBREdFVF9OQU1FIiwgIm1hdGNoR2FkZ2V0TmFtZSIsICJpbm5lckhUTUwiLCAiX3JlZiIsICJyZWdFeHBFeGVjQXJyYXkiLCAiZXhlYyIsICJtYWtlTGluayIsICJocmVmIiwgInRleHQiLCAibGluayIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgInRleHRDb250ZW50IiwgIm91dGVySFRNTCIsICJtYWtlV2lraWxpbmsiLCAicGFnZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJsaW5rR2FkZ2V0U291cmNlIiwgInNvdXJjZVBhZ2UiLCAibGlua0dhZGdldEFuY2hvciIsICJwcm9jZXNzR2FkZ2V0RGVmaW5pdGlvbiIsICJyZXBsYWNlIiwgIl93aG9sZU1hdGNoIiwgIndoaXRlc3BhY2UiLCAia2V5IiwgInZhbHVlIiwgInNwbGl0VmFsdWUiLCAic3BsaXQiLCAibWFwIiwgImRlcGVuZGVuY3kiLCAiX2dhZGdldE5hbWUkIiwgIl9nYWRnZXROYW1lIiwgImpvaW4iLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImdhZGdldHNEZWZpbml0aW9uIiwgIiRib2R5IiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIndnVGl0bGUiLCAiY29uZmlnIiwgImdldCIsICJpc0RlZmluaXRpb25QYWdlIiwgIiRwYXJzZXJPdXRwdXQiLCAiZmluZCIsICJsZW5ndGgiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAiaWQiLCAiZXJyIiwgImUiLCAiZiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiJdCn0K
