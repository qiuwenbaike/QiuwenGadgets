/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js}
 * @base {@link https://zh.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CodeLinks}
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

// dist/CodeLinks/CodeLinks.js
//! src/CodeLinks/modules/addLink.ts
var addLink = (element, targetTitle) => {
  if (!(element instanceof Element)) {
    throw new TypeError("Expected Element interface");
  }
  const link = document.createElement("a");
  link.href = mw.util.getUrl(targetTitle);
  const {
    firstChild
  } = element;
  if (!(firstChild instanceof Text)) {
    throw new TypeError("Expected Text interface");
  }
  link.append(firstChild);
  element.append(link);
};
//! src/CodeLinks/CodeLinks.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/CodeLinks/modules/constant.ts
/*!
 * @author John Gruber
 * @copyright 2002–2023 The Daring Fireball Company LLC.
 * @see {@link https://daringfireball.net/2010/07/improved_regex_for_matching_urls}
 */
var REGEX_URL = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i;
//! src/CodeLinks/modules/processComment.ts
var processComment = (element) => {
  var _ref;
  const {
    firstChild
  } = element;
  if (!(firstChild instanceof Text)) {
    throw new TypeError("Expected Text interface");
  }
  const {
    textContent
  } = firstChild;
  if (!textContent) {
    return;
  }
  const templateMatch = /(\{\{(?:#invoke:)?)([^|{}[\]\n#]+)(?=\||}})/i.exec(textContent);
  const wikilinkMatch = /\[\[([^|{}[\]\n]+)?(?:\|.*?)?]]/.exec(textContent);
  const urlMatch = REGEX_URL.exec(textContent);
  if (!(templateMatch || wikilinkMatch || urlMatch)) {
    return;
  }
  const link = document.createElement("a");
  link.className = "code-link";
  let linkText = "";
  let start = ((_ref = wikilinkMatch || templateMatch || urlMatch) === null || _ref === void 0 ? void 0 : _ref.index) ?? 0;
  if (urlMatch) {
    const [url] = urlMatch;
    linkText = url;
    link.href = url;
  } else {
    let fullPageName = "";
    if (wikilinkMatch) {
      [linkText] = wikilinkMatch;
      fullPageName = wikilinkMatch[1];
    } else if (templateMatch) {
      const prefix = templateMatch[1];
      const pageName = templateMatch[2];
      fullPageName = `${prefix === "{{#invoke:" ? "Module:" : "Template:"}${pageName}`;
      linkText = pageName;
      link.title = fullPageName;
      start += prefix.length;
    }
    link.href = mw.util.getUrl(fullPageName);
  }
  link.append(document.createTextNode(linkText));
  firstChild.before(link);
  const afterLink = textContent.slice(Math.max(0, start + linkText.length));
  firstChild.textContent = afterLink;
  const beforeLink = textContent.slice(0, Math.max(0, start));
  element.insertBefore(document.createTextNode(beforeLink), link);
};
//! src/CodeLinks/CodeLinks.ts
void (0, import_ext_gadget.getBody)().then(function codeLinks($body) {
  for (const codeBlock of $body.find(".mw-highlight")) {
    for (const commentClass of ["c", "c1", "cm"]) {
      for (const comment of codeBlock.querySelectorAll(`.${commentClass}`)) {
        processComment(comment);
      }
    }
  }
  const classes = {
    identifier: "n",
    functionName: "nb",
    singleQuoteString: "s1",
    doubleQuoteString: "s2"
  };
  const moduleNameElementArray = [];
  for (const functionNameElement of $body.find(`.${classes.functionName}`)) {
    var _functionNameElement$, _nextElement$firstChi, _nextElement$firstChi3, _nextElementFirstValu;
    const text = (_functionNameElement$ = functionNameElement.firstChild) === null || _functionNameElement$ === void 0 ? void 0 : _functionNameElement$.nodeValue;
    if (text !== "require") {
      continue;
    }
    let nextElement = functionNameElement.nextElementSibling;
    if (!nextElement) {
      continue;
    }
    let nextElementFirstValue = (_nextElement$firstChi = nextElement.firstChild) === null || _nextElement$firstChi === void 0 ? void 0 : _nextElement$firstChi.nodeValue;
    const hasParenthesis = nextElementFirstValue === "(";
    if (hasParenthesis) {
      var _nextElement$firstChi2;
      nextElement = nextElement.nextElementSibling;
      if (!nextElement) {
        continue;
      }
      nextElementFirstValue = (_nextElement$firstChi2 = nextElement.firstChild) === null || _nextElement$firstChi2 === void 0 ? void 0 : _nextElement$firstChi2.nodeValue;
    }
    const {
      classList
    } = nextElement;
    if (!(classList.contains(classes.singleQuoteString) || classList.contains(classes.doubleQuoteString))) {
      continue;
    }
    const element = nextElement;
    const elementValue = nextElementFirstValue;
    if (!elementValue) {
      continue;
    }
    nextElement = nextElement.nextElementSibling;
    if (!nextElement) {
      continue;
    }
    nextElementFirstValue = (_nextElement$firstChi3 = nextElement.firstChild) === null || _nextElement$firstChi3 === void 0 ? void 0 : _nextElement$firstChi3.nodeValue;
    if (hasParenthesis && ((_nextElementFirstValu = nextElementFirstValue) === null || _nextElementFirstValu === void 0 ? void 0 : _nextElementFirstValu[0]) !== ")") {
      continue;
    }
    moduleNameElementArray[moduleNameElementArray.length] = element;
  }
  const dataModuleNameElementArray = [];
  for (const element of $body.find(`.${classes.singleQuoteString},.${classes.doubleQuoteString}`)) {
    var _element$firstChild, _prevElement$firstChi, _prevElement$firstChi3, _prevElement$firstChi4;
    if (moduleNameElementArray.includes(element)) {
      continue;
    }
    const elementFirstValue = (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 ? void 0 : _element$firstChild.nodeValue;
    if (!elementFirstValue || !/^["'](?:module|模[组組块]):/i.test(elementFirstValue)) {
      continue;
    }
    let prevElement = element.previousElementSibling;
    if (!prevElement) {
      continue;
    }
    let prevElementFirstValue = (_prevElement$firstChi = prevElement.firstChild) === null || _prevElement$firstChi === void 0 ? void 0 : _prevElement$firstChi.nodeValue;
    if (prevElementFirstValue === "(") {
      var _nextElement$firstChi4, _prevElement$firstChi2;
      const nextElement = element.nextElementSibling;
      if (!nextElement) {
        continue;
      }
      const nextElementFirstValue = (_nextElement$firstChi4 = nextElement.firstChild) === null || _nextElement$firstChi4 === void 0 ? void 0 : _nextElement$firstChi4.nodeValue;
      if ((nextElementFirstValue === null || nextElementFirstValue === void 0 ? void 0 : nextElementFirstValue[0]) !== ")") {
        continue;
      }
      prevElement = prevElement.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      prevElementFirstValue = (_prevElement$firstChi2 = prevElement.firstChild) === null || _prevElement$firstChi2 === void 0 ? void 0 : _prevElement$firstChi2.nodeValue;
    }
    if (prevElementFirstValue !== "loadData") {
      continue;
    }
    prevElement = prevElement.previousElementSibling;
    if (!prevElement) {
      continue;
    }
    prevElementFirstValue = (_prevElement$firstChi3 = prevElement.firstChild) === null || _prevElement$firstChi3 === void 0 ? void 0 : _prevElement$firstChi3.nodeValue;
    if (prevElementFirstValue !== ".") {
      continue;
    }
    prevElement = prevElement.previousElementSibling;
    if (!prevElement) {
      continue;
    }
    prevElementFirstValue = (_prevElement$firstChi4 = prevElement.firstChild) === null || _prevElement$firstChi4 === void 0 ? void 0 : _prevElement$firstChi4.nodeValue;
    if (prevElementFirstValue !== "mw") {
      continue;
    }
    dataModuleNameElementArray[dataModuleNameElementArray.length] = element;
  }
  for (const element of [...moduleNameElementArray, ...dataModuleNameElementArray]) {
    var _element$firstChild2;
    const elementFirstValue = (_element$firstChild2 = element.firstChild) === null || _element$firstChild2 === void 0 ? void 0 : _element$firstChild2.nodeValue;
    if (!elementFirstValue) {
      continue;
    }
    const moduleName = elementFirstValue.slice(1, -1);
    const targetTitle = /^(?:module|模[组組块])?:/i.test(moduleName) ? moduleName : `Help:Lua#${moduleName}`;
    addLink(element, targetTitle);
  }
});

})();

/* </nowiki> */

