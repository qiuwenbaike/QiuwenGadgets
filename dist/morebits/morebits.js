/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/twinkle-core/tree/master/morebits}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/morebits}
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

// dist/morebits/morebits.js
//! src/morebits/utils/useUls.ts
var _templateObject;
var _templateObject2;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var import_ext_gadget = require("ext.gadget.i18n");
var uls = (simplified, traditional) => {
  return typeof import_ext_gadget.wgULS === "function" ? (0, import_ext_gadget.wgULS)(simplified, traditional) : simplified;
};
//! src/morebits/morebits.ts
/*! Twinkle.js - morebits.ts */
var Morebits = {};
window.Morebits = Morebits;
var l10n = {
  /**
   * Local aliases for "redirect" magic word.
   * Check using api.php?action=query&format=json&meta=siteinfo&formatversion=2&siprop=magicwords
   */
  redirectTagAliases: ["#REDIRECT", "#重定向"],
  /**
   * Takes a string as argument and checks if it is a timestamp or not
   * If not, it returns null. If yes, it returns an array of integers
   * in the format [year, month, date, hour, minute, second]
   * which can be passed to Date.UTC()
   */
  signatureTimestampFormat: (str) => {
    var _rgxUTC$exec;
    const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/;
    const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/;
    const match = (_rgxUTC$exec = rgxUTC.exec(str)) !== null && _rgxUTC$exec !== void 0 ? _rgxUTC$exec : rgxCST.exec(str);
    const matchCST = rgxCST.exec(str);
    if (!match) {
      return null;
    }
    const month = Morebits.date.localeData.months.indexOf(match[4]);
    if (month === -1) {
      return null;
    }
    return matchCST ? [Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]) - 8, Number(match[5])] : [Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]), Number(match[5])];
  }
};
Morebits.l10n = l10n;
Morebits.userIsInGroup = (group) => {
  var _mw$config$get, _mw$config$get2;
  const userGroups = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
  const globalGroups = (_mw$config$get2 = mw.config.get("wgGlobalGroups")) !== null && _mw$config$get2 !== void 0 ? _mw$config$get2 : [];
  return userGroups.includes(group) || globalGroups.includes(group);
};
Morebits.userIsSysop = Morebits.userIsInGroup("sysop") || Morebits.userIsInGroup("steward") || Morebits.userIsInGroup("qiuwen");
Morebits.sanitizeIPv6 = (address) => {
  console.warn("[Morebits] NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
  return Morebits.ip.sanitizeIPv6(address);
};
Morebits.isPageRedirect = () => {
  return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || document.querySelector(".box-RfD") || document.querySelector(".box-Redirect_category_shell"));
};
Morebits.pageNameNorm = mw.config.get("wgPageName").replace(/_/g, " ");
Morebits.pageNameRegex = (pageName) => {
  if (pageName === "") {
    return "";
  }
  const firstChar = pageName.charAt(0);
  const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
  if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
    return "[".concat(mw.Title.phpCharToUpper(firstChar)).concat(firstChar.toLowerCase(), "]").concat(remainder);
  }
  return Morebits.string.escapeRegExp(firstChar) + remainder;
};
var createHtml = (input) => {
  const fragment = document.createDocumentFragment();
  if (!input) {
    return fragment;
  }
  const elements = [].concat(input);
  var _iterator = _createForOfIteratorHelper(elements), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      if (element instanceof Node) {
        fragment.appendChild(element);
      } else {
        var _$$parseHTML;
        var _iterator2 = _createForOfIteratorHelper((_$$parseHTML = $.parseHTML(createHtml.renderWikilinks(element))) !== null && _$$parseHTML !== void 0 ? _$$parseHTML : []), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const node = _step2.value;
            fragment.appendChild(node);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return fragment;
};
Morebits.createHtml = createHtml;
createHtml.renderWikilinks = (text) => {
  const ub = new Morebits.unbinder(text);
  ub.unbind("<code>", "</code>");
  ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
    target || (target = text_);
    return '<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl(target), '" title="').concat(target.replace(/"/g, "&#34;"), '">').concat(text_, "</a>");
  });
  return ub.rebind();
};
Morebits.namespaceRegex = (namespaces) => {
  var _aliases$;
  const namespaceList = [].concat(namespaces);
  const aliases = [];
  let regex;
  for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
    const [name, number] = _Object$entries[_i];
    if (namespaceList.includes(number)) {
      aliases[aliases.length] = [...name].map((char) => Morebits.pageNameRegex(char)).join("");
    }
  }
  switch (aliases.length) {
    case 0:
      regex = "";
      break;
    case 1:
      regex = (_aliases$ = aliases[0]) !== null && _aliases$ !== void 0 ? _aliases$ : "";
      break;
    default:
      regex = "(?:".concat(aliases.join("|"), ")");
      break;
  }
  return regex;
};
var QuickFormElement = class _QuickFormElement {
  data;
  childs;
  /**
   * @memberof Morebits.quickForm.element
   * @type {number}
   */
  static id = 0;
  constructor(data) {
    this.data = data;
    this.childs = [];
  }
  /**
   * Appends an element to current element.
   *
   * @param {QuickFormData | QuickFormElement} data - A quickForm element or the object required to
   * create the quickForm element.
   * @returns {QuickFormElement} The same element passed in.
   */
  append(data) {
    let child;
    if (data instanceof _QuickFormElement) {
      child = data;
    } else {
      child = new _QuickFormElement(data);
    }
    this.childs[this.childs.length] = child;
    return child;
  }
  /**
   * Renders the HTML output for the quickForm element.  This should be called
   * without parameters: `form.render()`.
   *
   * @param {number | string} internalSubgroupId
   * @returns {HTMLElement}
   */
  render(internalSubgroupId) {
    const currentNode = this.compute(this.data, internalSubgroupId);
    var _iterator3 = _createForOfIteratorHelper(this.childs), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const child = _step3.value;
        currentNode[1].appendChild(child.render());
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return currentNode[0];
  }
  /**
   * @param {QuickFormData} data
   * @param {number | string} inId
   * @returns {[Node, Node]}
   */
  compute(data, inId) {
    let node;
    let childContainer = null;
    let label;
    const id = "".concat(inId ? "".concat(inId, "_") : "", "node_").concat(_QuickFormElement.id++);
    if (data.adminonly && !Morebits.userIsSysop) {
      data.type = "hidden";
    }
    let i;
    let current;
    let subnode;
    switch (data.type) {
      case "form":
        node = document.createElement("form");
        node.className = "quickform";
        node.setAttribute("action", "javascript:void(0);");
        if (data.event) {
          node.addEventListener(data.eventType || "submit", data.event, false);
        }
        break;
      case "fragment": {
        const fragmentNode = document.createDocumentFragment();
        return [fragmentNode, fragmentNode];
      }
      case "select": {
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.setAttribute("for", id);
          label.appendChild(Morebits.createHtml(data.label));
        }
        const select = node.appendChild(document.createElement("select"));
        if (data.event) {
          select.addEventListener("change", data.event, false);
        }
        if (data.multiple) {
          select.setAttribute("multiple", "multiple");
        }
        if (data.size) {
          select.setAttribute("size", String(data.size));
        }
        if (data.disabled) {
          select.disabled = true;
        }
        select.setAttribute("name", data.name);
        if (data.list) {
          const list = data.list;
          for (i = 0; i < list.length; ++i) {
            current = list[i];
            if (current.list) {
              current.type = "optgroup";
            } else {
              current.type = "option";
            }
            subnode = this.compute(current);
            select.appendChild(subnode[0]);
          }
        }
        childContainer = select;
        break;
      }
      case "option":
        node = document.createElement("option");
        node.values = data.value;
        node.setAttribute("value", data.value);
        if (data.selected) {
          node.setAttribute("selected", "selected");
        }
        if (data.disabled) {
          node.disabled = true;
        }
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        node.setAttribute("label", data.label);
        node.appendChild(document.createTextNode(data.label));
        break;
      case "optgroup":
        node = document.createElement("optgroup");
        node.setAttribute("label", data.label);
        if (data.list) {
          const list = data.list;
          for (i = 0; i < list.length; ++i) {
            current = list[i];
            current.type = "option";
            subnode = this.compute(current);
            node.appendChild(subnode[0]);
          }
        }
        break;
      case "field":
        node = document.createElement("fieldset");
        label = node.appendChild(document.createElement("legend"));
        label.appendChild(Morebits.createHtml(data.label));
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.disabled) {
          node.disabled = true;
        }
        break;
      case "checkbox":
      case "radio":
        node = document.createElement("div");
        if (data.list) {
          const list = data.list;
          for (i = 0; i < list.length; ++i) {
            const curId = "".concat(id, "_").concat(i);
            current = list[i];
            let curDiv;
            if (current.type === "header") {
              curDiv = node.appendChild(document.createElement("h6"));
              curDiv.appendChild(document.createTextNode(current.label));
              if (current.tooltip) {
                _QuickFormElement.generateTooltip(curDiv, current);
              }
              continue;
            }
            curDiv = node.appendChild(document.createElement("div"));
            if (current.hidden) {
              curDiv.setAttribute("hidden", "");
            }
            subnode = curDiv.appendChild(document.createElement("input"));
            subnode.values = current.value;
            subnode.setAttribute("value", current.value);
            subnode.setAttribute("type", data.type);
            subnode.setAttribute("id", curId);
            subnode.setAttribute("name", current.name || data.name);
            if (current.name) {
              subnode.setAttribute("data-single", "data-single");
            }
            if (current.checked) {
              subnode.checked = true;
            }
            if (current.disabled) {
              subnode.disabled = true;
            }
            label = curDiv.appendChild(document.createElement("label"));
            label.appendChild(Morebits.createHtml(current.label));
            label.setAttribute("for", curId);
            if (current.tooltip) {
              _QuickFormElement.generateTooltip(label, current);
            }
            if (current.style) {
              label.setAttribute("style", current.style);
            }
            let event;
            if (current.subgroup) {
              let tmpgroup = current.subgroup;
              tmpgroup = [].concat(tmpgroup);
              const subgroupRaw = new _QuickFormElement({
                type: "div",
                id: "".concat(id, "_").concat(i, "_subgroup")
              });
              var _iterator4 = _createForOfIteratorHelper(tmpgroup), _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  const el = _step4.value;
                  const newEl = {
                    ...el
                  };
                  newEl.type || (newEl.type = data.type);
                  newEl.name = "".concat(current.name || data.name, ".").concat(newEl.name);
                  subgroupRaw.append(newEl);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              const subgroup = subgroupRaw.render(curId);
              subgroup.className = "quickformSubgroup";
              subnode.subgroup = subgroup;
              subnode.shown = false;
              event = (e) => {
                const target = e.target;
                if (target.checked) {
                  var _target$parentNode;
                  (_target$parentNode = target.parentNode) === null || _target$parentNode === void 0 || _target$parentNode.appendChild(target.subgroup);
                  if (target.type === "radio") {
                    const {
                      name
                    } = target;
                    const form = target.form;
                    const previous = form.names[name];
                    if (previous !== void 0) {
                      var _previous$parentNode;
                      (_previous$parentNode = previous.parentNode) === null || _previous$parentNode === void 0 || _previous$parentNode.removeChild(previous.subgroup);
                    }
                    form.names[name] = target;
                  }
                } else {
                  var _target$parentNode2;
                  (_target$parentNode2 = target.parentNode) === null || _target$parentNode2 === void 0 || _target$parentNode2.removeChild(target.subgroup);
                }
              };
              subnode.addEventListener("change", event, true);
              if (current.checked) {
                var _subnode$parentNode;
                (_subnode$parentNode = subnode.parentNode) === null || _subnode$parentNode === void 0 || _subnode$parentNode.appendChild(subgroup);
              }
            } else if (data.type === "radio") {
              event = (e) => {
                const target = e.target;
                if (target.checked) {
                  const {
                    name
                  } = target;
                  const form = target.form;
                  const previous = form.names[name];
                  if (previous !== void 0) {
                    var _previous$parentNode2;
                    (_previous$parentNode2 = previous.parentNode) === null || _previous$parentNode2 === void 0 || _previous$parentNode2.removeChild(previous.subgroup);
                  }
                  delete form.names[name];
                }
              };
              subnode.addEventListener("change", event, true);
            }
            if (data.event) {
              subnode.addEventListener("change", data.event, false);
            } else if (current.event) {
              subnode.addEventListener("change", current.event, true);
            }
          }
        }
        if (data.shiftClickSupport && data.type === "checkbox") {
          Morebits.checkboxShiftClickSupport(QuickForm.getElements(node, data.name));
        }
        break;
      // input is actually a text-type, so number here inherits the same stuff
      case "number":
      case "input":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(Morebits.createHtml(data.label));
          label.setAttribute("for", data.id || id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        if (data.placeholder) {
          subnode.setAttribute("placeholder", data.placeholder);
        }
        subnode.setAttribute("name", data.name);
        if (data.type === "input") {
          subnode.setAttribute("type", "text");
        } else {
          subnode.setAttribute("type", "number");
          for (var _i2 = 0, _arr = ["min", "max", "step", "list"]; _i2 < _arr.length; _i2++) {
            const att = _arr[_i2];
            if (data[att]) {
              subnode.setAttribute(att, String(data[att]));
            }
          }
        }
        for (var _i3 = 0, _arr2 = ["value", "size", "placeholder", "maxlength"]; _i3 < _arr2.length; _i3++) {
          const att = _arr2[_i3];
          if (data[att]) {
            subnode.setAttribute(att, String(data[att]));
          }
        }
        for (var _i4 = 0, _arr3 = ["disabled", "required", "readonly"]; _i4 < _arr3.length; _i4++) {
          const att = _arr3[_i4];
          if (data[att]) {
            subnode.setAttribute(att, att);
          }
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        childContainer = subnode;
        break;
      case "dyninput": {
        const min = data.min || 1;
        const max = data.max || Number.POSITIVE_INFINITY;
        node = document.createElement("div");
        label = node.appendChild(document.createElement("h5"));
        label.appendChild(Morebits.createHtml(data.label));
        const listNode = node.appendChild(document.createElement("div"));
        const more = this.compute({
          type: "button",
          label: "更多",
          disabled: min >= max,
          event: (e) => {
            const target = e.target;
            const newNode = new _QuickFormElement(target.sublist);
            target.area.appendChild(newNode.render());
            if (++target.counter >= target.max) {
              target.disabled = true;
            }
            e.stopPropagation();
          }
        });
        node.appendChild(more[0]);
        const moreButton = more[1];
        const sublist = {
          type: "_dyninput_element",
          label: data.sublabel || data.label,
          name: data.name,
          value: data.value,
          size: data.size,
          remove: false,
          maxlength: data.maxlength,
          event: data.event
        };
        for (i = 0; i < min; ++i) {
          const elem = new _QuickFormElement(sublist);
          listNode.appendChild(elem.render());
        }
        sublist.remove = true;
        sublist.morebutton = moreButton;
        sublist.listnode = listNode;
        moreButton.sublist = sublist;
        moreButton.area = listNode;
        moreButton.max = max - min;
        moreButton.counter = 0;
        break;
      }
      case "_dyninput_element":
        node = document.createElement("div");
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(document.createTextNode(data.label));
          label.setAttribute("for", id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        subnode.setAttribute("name", data.name);
        subnode.setAttribute("type", "text");
        if (data.size) {
          subnode.setAttribute("size", String(data.size));
        }
        if (data.maxlength) {
          subnode.setAttribute("maxlength", String(data.maxlength));
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        if (data.remove) {
          const remove = this.compute({
            type: "button",
            label: "移除",
            event: (e) => {
              const target = e.target;
              const list = target.listnode;
              const node_ = target.inputnode;
              const more = target.morebutton;
              list.removeChild(node_);
              --more.counter;
              more.removeAttribute("disabled");
              e.stopPropagation();
            }
          });
          node.appendChild(remove[0]);
          const removeButton = remove[1];
          removeButton.inputnode = node;
          removeButton.listnode = data.listnode;
          removeButton.morebutton = data.morebutton;
        }
        break;
      case "hidden":
        node = document.createElement("input");
        node.setAttribute("type", "hidden");
        node.values = data.value;
        node.setAttribute("value", data.value);
        node.setAttribute("name", data.name);
        break;
      case "header":
        node = document.createElement("h5");
        node.appendChild(Morebits.createHtml(data.label));
        break;
      case "div":
        node = document.createElement("div");
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.label) {
          const result = document.createElement("span");
          result.className = "quickformDescription";
          result.appendChild(Morebits.createHtml(data.label));
          node.appendChild(result);
        }
        break;
      case "submit":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "submit");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name || "submit");
        if (data.disabled) {
          childContainer.disabled = true;
        }
        break;
      case "button":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "button");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name);
        if (data.disabled) {
          childContainer.disabled = true;
        }
        if (data.event) {
          childContainer.addEventListener("click", data.event, false);
        }
        break;
      case "textarea":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("h5"));
          const labelElement = document.createElement("label");
          labelElement.appendChild(Morebits.createHtml(data.label));
          labelElement.setAttribute("for", data.id || id);
          label.appendChild(labelElement);
        }
        subnode = node.appendChild(document.createElement("textarea"));
        subnode.setAttribute("name", data.name);
        if (data.cols) {
          subnode.setAttribute("cols", String(data.cols));
        }
        if (data.rows) {
          subnode.setAttribute("rows", String(data.rows));
        }
        if (data.disabled) {
          subnode.disabled = true;
        }
        if (data.required) {
          subnode.setAttribute("required", "required");
        }
        if (data.readonly) {
          subnode.setAttribute("readonly", "readonly");
        }
        if (data.value) {
          subnode.value = data.value;
        }
        if (data.placeholder) {
          subnode.placeholder = data.placeholder;
        }
        childContainer = subnode;
        break;
      default:
        throw new Error("Morebits.quickForm: unknown element type ".concat(data.type.toString()));
    }
    childContainer || (childContainer = node);
    if (data.tooltip) {
      _QuickFormElement.generateTooltip(label || node, data);
    }
    if (data.extra) {
      childContainer.extra = data.extra;
    }
    if (data.$data) {
      $(childContainer).data(data.$data);
    }
    if (data.style) {
      childContainer.setAttribute("style", data.style);
    }
    if (data.className) {
      childContainer.className = childContainer.className ? "".concat(childContainer.className, " ").concat(data.className) : data.className;
    }
    childContainer.setAttribute("id", data.id || id);
    return [node, childContainer];
  }
  /**
   * Create a tooltip, implemented in plain jQuery (formerly jQuery UI tooltip).
   *
   * @param {HTMLElement} node - The HTML element beside which a tooltip is to be generated.
   * @param {QuickFormData} data - Tooltip-related configuration data.
   */
  static generateTooltip = (node, data) => {
    const tooltipText = data.tooltip;
    if (!tooltipText) {
      return;
    }
    const tooltipButton = node.appendChild(document.createElement("span"));
    tooltipButton.className = "morebits-tooltipButton";
    tooltipButton.setAttribute("aria-label", tooltipText);
    tooltipButton.appendChild(document.createTextNode("?"));
    let timer = 0;
    let tooltip = null;
    const removeTooltip = () => {
      window.clearTimeout(timer);
      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }
    };
    const showTooltip = () => {
      removeTooltip();
      const element = document.createElement("div");
      element.className = "morebits-ui-tooltip";
      element.textContent = tooltipText;
      document.body.appendChild(element);
      const buttonRect = tooltipButton.getBoundingClientRect();
      const tooltipRect = element.getBoundingClientRect();
      let top = buttonRect.bottom + 4;
      if (top + tooltipRect.height > window.innerHeight - 5) {
        top = Math.max(5, buttonRect.top - tooltipRect.height - 4);
      }
      const left = Math.min(Math.max(5, buttonRect.left + buttonRect.width / 2), window.innerWidth - tooltipRect.width - 5);
      element.style.left = "".concat(left, "px");
      element.style.top = "".concat(top, "px");
      tooltip = element;
    };
    $(tooltipButton).on({
      mouseenter: () => {
        timer = window.setTimeout(showTooltip, 400);
      },
      mouseleave: removeTooltip,
      click: removeTooltip
    });
  };
};
var QuickForm = class _QuickForm {
  root;
  constructor(event, eventType) {
    this.root = new QuickFormElement({
      type: "form",
      event,
      eventType
    });
  }
  /**
   * Renders the HTML output of the quickForm.
   *
   * @returns {HTMLElement}
   */
  render() {
    const ret = this.root.render();
    ret.names = {};
    return ret;
  }
  /**
   * Append element to the form.
   *
   * @param {(QuickFormData | QuickFormElement)} data - A quickform element, or the object with which
   * a quickform element is constructed.
   * @returns {QuickFormElement} - Same as what is passed to the function.
   */
  append(data) {
    return this.root.append(data);
  }
  static element = QuickFormElement;
  // Some utility methods for manipulating quickForms after their creation:
  // (None of these work for "dyninput" type fields at present)
  /**
   * Returns an object containing all filled form data entered by the user, with the object
   * keys being the form element names. Disabled fields will be ignored, but not hidden fields.
   *
   * @param {HTMLFormElement} form
   * @returns {Record<string, string | boolean | string[]>} With field names as keys, input data as values.
   */
  static getInputData = (form) => {
    const result = {};
    for (var _i5 = 0, _Array$from = Array.from(form.elements); _i5 < _Array$from.length; _i5++) {
      const field = _Array$from[_i5];
      if (field.disabled || !field.name || !field.type || field.type === "submit" || field.type === "button") {
        continue;
      }
      const fieldNameNorm = field.name.slice(field.name.indexOf(".") + 1);
      switch (field.type) {
        case "radio":
          if (field.checked) {
            result[fieldNameNorm] = field.value;
          }
          break;
        case "checkbox":
          if (field.dataset["single"]) {
            result[fieldNameNorm] = field.checked;
          } else {
            result[fieldNameNorm] || (result[fieldNameNorm] = []);
            if (field.checked) {
              const group = result[fieldNameNorm];
              group[group.length] = field.value;
            }
          }
          break;
        case "select-multiple":
          result[fieldNameNorm] = $(field).val();
          break;
        case "text":
        // falls through
        case "textarea":
          result[fieldNameNorm] = field.value.trim();
          break;
        default:
          if (field.value) {
            result[fieldNameNorm] = field.value;
          }
          break;
      }
    }
    return result;
  };
  /**
   * Returns all form elements with a given field name or ID.
   *
   * @param {HTMLElement} form
   * @param {string} fieldName - The name or id of the fields.
   * @returns {HTMLElement[]} - Array of matching form elements.
   */
  static getElements = (form, fieldName) => {
    const $form = $(form);
    fieldName = $.escapeSelector(fieldName);
    let $elements = $form.find('[name="'.concat(fieldName, '"]'));
    if ($elements.length > 0) {
      return $elements.toArray();
    }
    $elements = $form.find("#".concat(fieldName));
    return $elements.toArray();
  };
  /**
   * Searches the array of elements for a checkbox or radio button with a certain
   * `value` attribute, and returns the first such element. Returns null if not found.
   *
   * @param {HTMLInputElement[]} elementArray - Array of checkbox or radio elements.
   * @param {string} value - Value to search for.
   * @returns {HTMLInputElement | null}
   */
  static getCheckboxOrRadio = (elementArray, value) => {
    const found = elementArray.filter((element) => {
      return element.value === value;
    });
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };
  /**
   * Returns the &lt;div> containing the form element, or the form element itself
   * May not work as expected on checkboxes or radios.
   *
   * @param {HTMLElement} element
   * @returns {HTMLElement}
   */
  static getElementContainer = (element) => {
    if (element instanceof HTMLFieldSetElement || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    }
    return element.parentNode;
  };
  /**
   * Gets the HTML element that contains the label of the given form element
   * (mainly for internal use).
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @returns {HTMLElement | null}
   */
  static getElementLabelObject = (element) => {
    if (element.type === "button" || element.type === "submit" || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    } else if (element instanceof HTMLFieldSetElement) {
      return element.querySelector("legend");
    } else if (element instanceof HTMLTextAreaElement) {
      return element.parentNode.querySelector("h5");
    }
    return element.parentNode.querySelector("label");
  };
  /**
   * Gets the label text of the element.
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @returns {string | null}
   */
  static getElementLabel = (element) => {
    const labelElement = _QuickForm.getElementLabelObject(element);
    if (!labelElement) {
      return null;
    }
    return labelElement.firstChild.textContent;
  };
  /**
   * Sets the label of the element to the given text.
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @param {string} labelText
   * @returns {boolean} True if succeeded, false if the label element is unavailable.
   */
  static setElementLabel = (element, labelText) => {
    const labelElement = _QuickForm.getElementLabelObject(element);
    if (!labelElement) {
      return false;
    }
    labelElement.firstChild.textContent = labelText;
    return true;
  };
  /**
   * Stores the element's current label, and temporarily sets the label to the given text.
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @param {string} temporaryLabelText
   * @returns {boolean} `true` if succeeded, `false` if the label element is unavailable.
   */
  static overrideElementLabel = (element, temporaryLabelText) => {
    if (!element.hasAttribute("data-oldlabel")) {
      element.setAttribute("data-oldlabel", _QuickForm.getElementLabel(element));
    }
    return _QuickForm.setElementLabel(element, temporaryLabelText);
  };
  /**
   * Restores the label stored by overrideElementLabel.
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @returns {boolean | null} True if succeeded, false if the label element is unavailable.
   */
  static resetElementLabel = (element) => {
    if (element.hasAttribute("data-oldlabel")) {
      return _QuickForm.setElementLabel(element, element.getAttribute("data-oldlabel"));
    }
    return null;
  };
  /**
   * Shows or hides a form element plus its label and tooltip.
   *
   * @param {(HTMLElement | JQuery | string)} element - HTML/jQuery element, or jQuery selector string.
   * @param {boolean} [visibility] - Skip this to toggle visibility.
   */
  static setElementVisibility = (element, visibility) => {
    $(element).toggle(visibility);
  };
  /**
   * Shows or hides the question mark icon (which displays the tooltip) next to a form element.
   *
   * @param {(HTMLElement | JQuery)} element
   * @param {boolean} [visibility] - Skip this to toggle visibility.
   */
  static setElementTooltipVisibility = (element, visibility) => {
    $(_QuickForm.getElementContainer(element)).find(".morebits-tooltipButton").toggle(visibility);
  };
};
Morebits.quickForm = QuickForm;
HTMLFormElement.prototype.getChecked = function(name, type) {
  const elements = this.elements[name];
  if (!elements) {
    return [];
  }
  const returnArray = [];
  let i;
  if (elements instanceof HTMLSelectElement) {
    const {
      options
    } = elements;
    for (i = 0; i < options.length; ++i) {
      const option = options[i];
      if (option.selected) {
        if (option.values) {
          returnArray[returnArray.length] = option.values;
        } else {
          returnArray[returnArray.length] = option.value;
        }
      }
    }
  } else if (elements instanceof HTMLInputElement) {
    if (type && elements.type !== type) {
      return [];
    } else if (elements.checked) {
      return [elements.value];
    }
  } else {
    for (i = 0; i < elements.length; ++i) {
      const element = elements[i];
      if (element.checked) {
        if (type && element.type !== type) {
          continue;
        }
        if (element.values) {
          returnArray[returnArray.length] = element.values;
        } else {
          returnArray[returnArray.length] = element.value;
        }
      }
    }
  }
  return returnArray;
};
HTMLFormElement.prototype.getUnchecked = function(name, type) {
  const elements = this.elements[name];
  if (!elements) {
    return [];
  }
  const returnArray = [];
  let i;
  if (elements instanceof HTMLSelectElement) {
    const {
      options
    } = elements;
    for (i = 0; i < options.length; ++i) {
      const option = options[i];
      if (!option.selected) {
        if (option.values) {
          returnArray[returnArray.length] = option.values;
        } else {
          returnArray[returnArray.length] = option.value;
        }
      }
    }
  } else if (elements instanceof HTMLInputElement) {
    if (type && elements.type !== type) {
      return [];
    } else if (!elements.checked) {
      return [elements.value];
    }
  } else {
    for (i = 0; i < elements.length; ++i) {
      const element = elements[i];
      if (!element.checked) {
        if (type && element.type !== type) {
          continue;
        }
        if (element.values) {
          returnArray[returnArray.length] = element.values;
        } else {
          returnArray[returnArray.length] = element.value;
        }
      }
    }
  }
  return returnArray;
};
var ip = {
  /**
   * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
   * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
   * function from the IPUtils library.  Addresses are verbose, uppercase,
   * normalized, and expanded to 8 words.
   *
   * @param {string} address - The IPv6 address, with or without CIDR.
   * @returns {string | null}
   */
  sanitizeIPv6: (address) => {
    address = address.trim();
    if (address === "") {
      return null;
    }
    if (!mw.util.isIPv6Address(address, true)) {
      return address;
    }
    address = address.toUpperCase();
    const abbrevPos = address.indexOf("::");
    if (abbrevPos !== -1) {
      const CIDRStart = address.indexOf("/");
      const addressEnd = CIDRStart === -1 ? address.length - 1 : CIDRStart - 1;
      let repeat;
      let extra;
      let pad;
      if (abbrevPos === 0) {
        repeat = "0:";
        extra = address === "::" ? "0" : "";
        pad = 9;
      } else if (abbrevPos === addressEnd - 1) {
        repeat = ":0";
        extra = "";
        pad = 9;
      } else {
        repeat = ":0";
        extra = ":";
        pad = 8;
      }
      let replacement = repeat;
      pad -= address.split(":").length - 1;
      for (let i = 1; i < pad; i++) {
        replacement += repeat;
      }
      replacement += extra;
      address = address.replace("::", replacement);
    }
    return address.replace(/(^|:)0+([0-9A-Fa-f]{1,4})/g, "$1$2");
  },
  /**
   * Determine if the given IP address is a range.  Just conjoins
   * `mw.util.isIPAddress` with and without the `allowBlock` option.
   *
   * @param {string} ip
   * @returns {boolean} - True if given a valid IP address range, false otherwise.
   */
  isRange: (ip2) => {
    return mw.util.isIPAddress(ip2, true) && !mw.util.isIPAddress(ip2);
  },
  /**
   * Check that an IP range is within the CIDR limits.  Most likely to be useful
   * in conjunction with `wgRelevantUserName`.  CIDR limits are hardcoded as /16
   * for IPv4 and /32 for IPv6.
   *
   * @param {string} ip
   * @returns {boolean} - True for valid ranges within the CIDR limits,
   * otherwise false (ranges outside the limit, single IPs, non-IPs).
   */
  validCIDR: (ip2) => {
    if (Morebits.ip.isRange(ip2)) {
      const match = ip2.match(/\/(\d{1,3})$/);
      const subnet = Number.parseInt(match[1], 10);
      if (subnet) {
        if (mw.util.isIPv6Address(ip2, true)) {
          if (subnet >= 32) {
            return true;
          }
        } else if (subnet >= 16) {
          return true;
        }
      }
    }
    return false;
  },
  /**
   * Get the /64 subnet for an IPv6 address.
   *
   * @param {string} ipv6 - The IPv6 address, with or without a subnet.
   * @returns {boolean|string} - False if not IPv6 or bigger than a 64,
   * otherwise the (sanitized) /64 address.
   */
  get64: (ipv6) => {
    if (!ipv6 || !mw.util.isIPv6Address(ipv6, true)) {
      return false;
    }
    const subnetMatch = ipv6.match(/\/(\d{1,3})$/);
    if (subnetMatch && Number.parseInt(subnetMatch[1], 10) < 64) {
      return false;
    }
    ipv6 = Morebits.ip.sanitizeIPv6(ipv6);
    const ipRegex = /^((?:[0-9A-F]{1,4}:){4})(?:[0-9A-F]{1,4}:){3}[0-9A-F]{1,4}(?:\/\d{1,3})?$/;
    return ipv6.replace(ipRegex, "$1".concat("0:0:0:0/64"));
  }
};
Morebits.ip = ip;
var string = {
  /**
   * @param {string} str
   * @returns {string}
   */
  toUpperCaseFirstChar: (str) => {
    str = str.toString();
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  },
  /**
   * @param {string} str
   * @returns {string}
   */
  toLowerCaseFirstChar: (str) => {
    str = str.toString();
    return str.slice(0, 1).toLowerCase() + str.slice(1);
  },
  /**
   * Gives an array of substrings of `str` - starting with `start` and
   * ending with `end` - which is not in `skiplist`.  Intended for use
   * on wikitext with templates or links.
   *
   * @param {string} str
   * @param {string} start
   * @param {string} end
   * @param {(string[]|string)} [skiplist]
   * @returns {string[]}
   * @throws {Error} If the `start` and `end` strings aren't of the same length.
   * @throws {TypeError} If `skiplist` isn't an array or string
   */
  splitWeightedByKeys: (str, start, end, skiplist) => {
    if (start.length !== end.length) {
      throw new Error("start marker and end marker must be of the same length");
    }
    let level = 0;
    let initial = null;
    const result = [];
    if (!Array.isArray(skiplist)) {
      if (skiplist === void 0) {
        skiplist = [];
      } else if (typeof skiplist === "string") {
        skiplist = [skiplist];
      } else {
        throw new TypeError("non-applicable skiplist parameter");
      }
    }
    for (let i = 0; i < str.length; ++i) {
      var _iterator5 = _createForOfIteratorHelper(skiplist), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          const element = _step5.value;
          if (str.slice(i, i + element.length) === element) {
            i += element.length - 1;
            continue;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (str.slice(i, i + start.length) === start) {
        if (initial === null) {
          initial = i;
        }
        ++level;
        i += start.length - 1;
      } else if (str.slice(i, i + end.length) === end) {
        --level;
        i += end.length - 1;
      }
      if (!level && initial !== null) {
        result[result.length] = str.slice(initial, i + 1);
        initial = null;
      }
    }
    return result;
  },
  /**
   * Formats freeform "reason" (from a textarea) for deletion/other
   * templates that are going to be substituted, (e.g. PROD, XFD, RPP).
   * Handles `|` outside a nowiki tag.
   * Optionally, also adds a signature if not present already.
   *
   * @param {string} str
   * @param {boolean} [addSig]
   * @returns {string}
   */
  formatReasonText: (str, addSig) => {
    let reason = (str || "").toString().trim();
    const unbinder = new Morebits.unbinder(reason);
    unbinder.unbind("<no".concat("wiki", ">"), "</no".concat("wiki", ">"));
    unbinder.content = unbinder.content.replace(/\|/g, "{{".concat("subst:", "!}}"));
    reason = unbinder.rebind();
    if (addSig) {
      const sig = "~~".concat("~~");
      const sigIndex = reason.lastIndexOf(sig);
      if (sigIndex === -1 || sigIndex !== reason.length - sig.length) {
        reason += " ".concat(sig);
      }
    }
    return reason.trim();
  },
  /**
   * Formats a "reason" (from a textarea) for inclusion in a userspace
   * log.  Replaces newlines with {{Pb}}, and adds an extra `#` before
   * list items for proper formatting.
   *
   * @param {string} str
   * @returns {string}
   */
  formatReasonForLog: (str) => {
    return str.replace(/\n+/g, "{{pb}}").replace(/^(#+)/gm, "#$1").replace(/^(\*+)/gm, "#$1");
  },
  /**
   * Like `String.prototype.replace()`, but escapes any dollar signs in
   * the replacement string.  Useful when the the replacement string is
   * arbitrary, such as a username or freeform user input, and could
   * contain dollar signs.
   *
   * @param {string} string - Text in which to replace.
   * @param {(string|RegExp)} pattern
   * @param {string} replacement
   * @returns {string}
   */
  safeReplace: (string2, pattern, replacement) => {
    return string2.replace(pattern, replacement.replace(/\$/g, "$$$$"));
  },
  /**
   * Determine if the user-provided expiration will be considered an
   * infinite-length by MW.
   *
   * @see {@link https://phabricator.wikimedia.org/T68646}
   *
   * @param {string} expiry
   * @returns {boolean}
   */
  isInfinity: (expiry) => {
    return ["indefinite", "infinity", "infinite", "never"].includes(expiry);
  },
  /**
   * Escapes a string to be used in a RegExp, replacing spaces and
   * underscores with `[_ ]` as they are often equivalent.
   *
   * @param {string} text - String to be escaped.
   * @returns {string} - The escaped text.
   */
  escapeRegExp: (text) => {
    return mw.util.escapeRegExp(text).replace(/ |_/g, "[_ ]");
  },
  /**
   * formatTime
   *
   * @param {*} time The string to foramt
   * @returns {string}
   */
  formatTime: (time) => {
    let m;
    if ((m = time.match(/^\s*(\d+)\s*sec(ond)?s?\s*$/)) !== null) {
      return "".concat(m[1], "秒");
    }
    if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
      return "".concat(m[1], "分");
    }
    if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
      return m[1] + uls("小时", "小時");
    }
    if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
      return "".concat(m[1], "天");
    }
    if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
      return m[1] + uls("周", "週");
    }
    if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
      return m[1] + uls("个月", "個月");
    }
    if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
      return "".concat(m[1], "年");
    }
    if (Morebits.string.isInfinity(time.trim())) {
      return uls("无限期", "無限期");
    }
    return time;
  },
  /**
   * Append punctuation to a string when it's missing
   *
   * @param {string} str
   * @param {string} punctuation
   * @returns {string}
   */
  appendPunctuation: (str, punctuation) => {
    if (punctuation === void 0) {
      punctuation = "。";
    }
    if (str.search(/[.?!;。？！；]$/) === -1) {
      str += punctuation;
    }
    return str;
  }
};
Morebits.string = string;
var array = {
  /**
   * Remove duplicated items from an array.
   *
   * @param {Array} arr
   * @returns {Array} A copy of the array with duplicates removed.
   * @throws {Array} When provided a non-array.
   */
  uniq: (arr) => {
    if (!Array.isArray(arr)) {
      throw new TypeError("A non-array object passed to Morebits.array.uniq");
    }
    return arr.filter((item, idx) => {
      return arr.indexOf(item) === idx;
    });
  },
  /**
   * Remove non-duplicated items from an array.
   *
   * @param {Array} arr
   * @returns {Array} A copy of the array with the first instance of each value
   * removed; subsequent instances of those values (duplicates) remain.
   * @throws {Array} When provided a non-array.
   */
  dups: (arr) => {
    if (!Array.isArray(arr)) {
      throw new TypeError("A non-array object passed to Morebits.array.dups");
    }
    return arr.filter((item, idx) => {
      return arr.indexOf(item) !== idx;
    });
  },
  /**
   * Break up an array into smaller arrays.
   *
   * @param {Array} arr
   * @param {number} size - Size of each chunk (except the last, which could be different).
   * @returns {Array[]} An array containing the smaller, chunked arrays.
   * @throws {Array} When provided a non-array.
   */
  chunk: (arr, size) => {
    if (!Array.isArray(arr)) {
      throw new TypeError("A non-array object passed to Morebits.array.chunk");
    }
    if (typeof size !== "number" || size <= 0) {
      return [arr];
    }
    const numChunks = Math.ceil(arr.length / size);
    const result = Array.from({
      length: numChunks
    });
    for (let i = 0; i < numChunks; i++) {
      result[i] = arr.slice(i * size, (i + 1) * size);
    }
    return result;
  }
};
Morebits.array = array;
var Unbinder = class {
  /** The text being processed. */
  content;
  prefix;
  // %UNIQ::0.5955981644938324::
  postfix;
  // ::UNIQ%
  counter;
  // 0++
  history;
  // {}
  constructor(string2) {
    if (typeof string2 !== "string") {
      throw new TypeError("not a string");
    }
    this.content = string2;
    this.counter = 0;
    this.history = {};
    this.prefix = "%UNIQ::".concat(Math.random(), "::");
    this.postfix = "::UNIQ%";
  }
  /**
   * Hide the region encapsulated by the `prefix` and `postfix` from
   * string processing.  `prefix` and `postfix` will be used in a
   * RegExp, so items that need escaping should be use `\\`.
   *
   * @param {string} prefix
   * @param {string} postfix
   * @throws {Error} If either `prefix` or `postfix` is missing.
   */
  unbind(prefix, postfix) {
    if (!prefix || !postfix) {
      throw new Error("Both prefix and postfix must be provided");
    }
    const re = new RegExp("".concat(prefix, "([\\s\\S]*?)").concat(postfix), "g");
    this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
  }
  /**
   * Restore the hidden portion of the `content` string.
   *
   * @returns {string} The processed output.
   */
  rebind() {
    let {
      content
    } = this;
    for (const current in this.history) {
      if (!Object.hasOwn(this.history, current)) {
        continue;
      }
      content = content.replace(current, this.history[current]);
    }
    return content;
  }
  /**
   * @param {typeof Morebits} self
   * @memberof Morebits.unbinder
   */
  static getCallback(self) {
    return (match) => {
      const current = self.prefix + self.counter + self.postfix;
      self.history[current] = match;
      ++self.counter;
      return current;
    };
  }
};
Morebits.unbinder = Unbinder;
var MorebitsDate = class {
  _d;
  /**
   * Localized strings for date processing.
   *
   * @memberof Morebits.date
   * @type {object.<string, string>}
   * @property {string[]} months
   * @property {string[]} monthsShort
   * @property {string[]} days
   * @property {string[]} daysShort
   * @property {object.<string, string>} relativeTimes
   * @private
   */
  static localeData = {
    // message names here correspond to MediaWiki message names
    // No i18n at this time
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    relativeTimes: {
      thisDay: "[今天]A hh:mm",
      prevDay: "[昨天]A hh:mm",
      nextDay: "[明天]A hh:mm",
      thisWeek: "ddddA hh:mm",
      pastWeek: "[上]ddddA hh:mm",
      other: "YYYY-MM-DD"
    }
  };
  /**
   * Map units with getter/setter function names, for `add` and `subtract`
   * methods.
   *
   * @memberof Morebits.date
   * @type {object.<string, string>}
   * @property {string} seconds
   * @property {string} minutes
   * @property {string} hours
   * @property {string} days
   * @property {string} weeks
   * @property {string} months
   * @property {string} years
   */
  static unitMap = {
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    days: "Date",
    weeks: "Week",
    // Not a function but handled in `add` through cunning use of multiplication
    months: "Month",
    years: "FullYear"
  };
  constructor(...args) {
    var _this$_d;
    if (args.length === 1) {
      const [param] = args;
      if (/^\d{14}$/.test(String(param))) {
        const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(String(param));
        if (digitMatch) {
          this._d = new Date(Date.UTC(Number(digitMatch[1]), Number(digitMatch[2]) - 1, Number(digitMatch[3]), Number(digitMatch[4]), Number(digitMatch[5]), Number(digitMatch[6])));
        }
      } else if (typeof param === "string") {
        const dateParts = Morebits.l10n.signatureTimestampFormat(param);
        if (dateParts) {
          this._d = new Date(Reflect.apply(Date.UTC, void 0, dateParts));
        }
      }
    }
    (_this$_d = this._d) !== null && _this$_d !== void 0 ? _this$_d : this._d = new Date(...args);
    if (!this.isValid()) {
      mw.log.warn("Invalid Morebits.date initialisation:", args);
    }
  }
  /** @returns {boolean} */
  isValid() {
    return !Number.isNaN(this.getTime());
  }
  /**
   * @param {(Date|Morebits.date)} date
   * @returns {boolean}
   */
  isBefore(date) {
    return this.getTime() < date.getTime();
  }
  /**
   * @param {(Date|Morebits.date)} date
   * @returns {boolean}
   */
  isAfter(date) {
    return this.getTime() > date.getTime();
  }
  /** @returns {string} */
  getUTCMonthName() {
    var _Morebits$date$locale;
    return (_Morebits$date$locale = Morebits.date.localeData.months[this.getUTCMonth()]) !== null && _Morebits$date$locale !== void 0 ? _Morebits$date$locale : "";
  }
  /** @returns {string} */
  getUTCMonthNameAbbrev() {
    var _Morebits$date$locale2;
    return (_Morebits$date$locale2 = Morebits.date.localeData.monthsShort[this.getUTCMonth()]) !== null && _Morebits$date$locale2 !== void 0 ? _Morebits$date$locale2 : "";
  }
  /** @returns {string} */
  getMonthName() {
    var _Morebits$date$locale3;
    return (_Morebits$date$locale3 = Morebits.date.localeData.months[this.getMonth()]) !== null && _Morebits$date$locale3 !== void 0 ? _Morebits$date$locale3 : "";
  }
  /** @returns {string} */
  getMonthNameAbbrev() {
    var _Morebits$date$locale4;
    return (_Morebits$date$locale4 = Morebits.date.localeData.monthsShort[this.getMonth()]) !== null && _Morebits$date$locale4 !== void 0 ? _Morebits$date$locale4 : "";
  }
  /** @returns {string} */
  getUTCDayName() {
    var _Morebits$date$locale5;
    return (_Morebits$date$locale5 = Morebits.date.localeData.days[this.getUTCDay()]) !== null && _Morebits$date$locale5 !== void 0 ? _Morebits$date$locale5 : "";
  }
  /** @returns {string} */
  getUTCDayNameAbbrev() {
    var _Morebits$date$locale6;
    return (_Morebits$date$locale6 = Morebits.date.localeData.daysShort[this.getUTCDay()]) !== null && _Morebits$date$locale6 !== void 0 ? _Morebits$date$locale6 : "";
  }
  /** @returns {string} */
  getDayName() {
    var _Morebits$date$locale7;
    return (_Morebits$date$locale7 = Morebits.date.localeData.days[this.getDay()]) !== null && _Morebits$date$locale7 !== void 0 ? _Morebits$date$locale7 : "";
  }
  /** @returns {string} */
  getDayNameAbbrev() {
    var _Morebits$date$locale8;
    return (_Morebits$date$locale8 = Morebits.date.localeData.daysShort[this.getDay()]) !== null && _Morebits$date$locale8 !== void 0 ? _Morebits$date$locale8 : "";
  }
  /**
   * Add a given number of minutes, hours, days, weeks, months, or years to the date.
   * This is done in-place. The modified date object is also returned, allowing chaining.
   *
   * @param {number} number - Should be an integer.
   * @param {string} unit
   * @throws {TypeError} If invalid or unsupported unit is given.
   * @returns {Morebits.date}
   */
  add(number, unit) {
    let num = Number.parseInt(String(number), 10);
    if (Number.isNaN(num)) {
      throw new TypeError('Invalid number "'.concat(number, '" provided.'));
    }
    unit = unit.toLowerCase();
    const {
      unitMap
    } = Morebits.date;
    let unitNorm = unitMap[unit] || unitMap["".concat(unit, "s")];
    if (unitNorm) {
      if (unitNorm === "Week") {
        unitNorm = "Date";
        num *= 7;
      }
      const getter = "get".concat(unitNorm);
      const setter = "set".concat(unitNorm);
      this[setter](this[getter]() + num);
      return this;
    }
    throw new Error('Invalid unit "'.concat(unit, '": Only ').concat(Object.keys(unitMap).join(", "), " are allowed."));
  }
  /**
   * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
   * This is done in-place. The modified date object is also returned, allowing chaining.
   *
   * @param {number} number - Should be an integer.
   * @param {string} unit
   * @throws {Error} If invalid or unsupported unit is given.
   * @returns {Morebits.date}
   */
  subtract(number, unit) {
    return this.add(-number, unit);
  }
  /**
   * Format the date into a string per the given format string.
   * Replacement syntax is a subset of that in moment.js:
   *
   * | Syntax | Output |
   * |--------|--------|
   * | H | Hours (24-hour) |
   * | HH | Hours (24-hour, padded to 2 digits) |
   * | h | Hours (12-hour) |
   * | hh | Hours (12-hour, padded to 2 digits) |
   * | A | AM or PM |
   * | m | Minutes |
   * | mm | Minutes (padded to 2 digits) |
   * | s | Seconds |
   * | ss | Seconds (padded to 2 digits) |
   * | SSS | Milliseconds fragment, 3 digits |
   * | d | Day number of the week (Sun=0) |
   * | ddd | Abbreviated day name |
   * | dddd | Full day name |
   * | D | Date |
   * | DD | Date (padded to 2 digits) |
   * | M | Month number (1-indexed) |
   * | MM | Month number (1-indexed, padded to 2 digits) |
   * | MMM | Abbreviated month name |
   * | MMMM | Full month name |
   * | Y | Year |
   * | YY | Final two digits of year (20 for 2020, 42 for 1942) |
   * | YYYY | Year (same as `Y`) |
   *
   * @param {string} formatstr - Format the date into a string, using
   * the replacement syntax.  Use `[` and `]` to escape items.  If not
   * provided, will return the ISO-8601-formatted string.
   * @param {(string|number)} [zone=system] - `system` (for browser-default time zone),
   * `utc`, or specify a time zone as number of minutes relative to UTC.
   * @returns {string}
   */
  format(formatstr, zone) {
    if (!this.isValid()) {
      return "Invalid date";
    }
    let udate = this;
    if (zone === "utc") {
      udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset(), "minutes");
    } else if (typeof zone === "number") {
      udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset() + zone, "minutes");
    }
    if (!formatstr) {
      return udate.toISOString();
    }
    const pad = (num, len) => {
      len || (len = 2);
      return "00".concat(num).toString().slice(0 - len);
    };
    const h24 = udate.getHours();
    const m = udate.getMinutes();
    const s = udate.getSeconds();
    const ms = udate.getMilliseconds();
    const D = udate.getDate();
    const M = udate.getMonth() + 1;
    const Y = udate.getFullYear();
    const h12 = h24 % 12 || 12;
    const amOrPm = h24 >= 12 ? "下午" : "上午";
    const replacementMap = {
      HH: pad(h24),
      H: h24,
      hh: pad(h12),
      h: h12,
      A: amOrPm,
      mm: pad(m),
      m,
      ss: pad(s),
      s,
      SSS: pad(ms, 3),
      dddd: udate.getDayName(),
      ddd: udate.getDayNameAbbrev(),
      d: udate.getDay(),
      DD: pad(D),
      D,
      MMMM: udate.getMonthName(),
      MMM: udate.getMonthNameAbbrev(),
      MM: pad(M),
      M,
      YYYY: Y,
      YY: pad(Y % 100),
      Y
    };
    const unbinder = new Morebits.unbinder(formatstr);
    unbinder.unbind(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["["], ["\\["]))), String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["]"], ["\\]"]))));
    unbinder.content = unbinder.content.replace(
      /* Regex notes:
       * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
       * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
       */
      /H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
      (match) => {
        var _replacementMap$match;
        return String((_replacementMap$match = replacementMap[match]) !== null && _replacementMap$match !== void 0 ? _replacementMap$match : match);
      }
    );
    return unbinder.rebind().replace(/\[(.*?)\]/g, "$1");
  }
  /**
   * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
   * Similar to `calendar` in moment.js, but with time zone support.
   *
   * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
   * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
   * @returns {string}
   */
  calendar(zone) {
    const dateDiff = ((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(this.getTime()).setHours(0, 0, 0, 0)) / 864e5;
    switch (true) {
      case dateDiff === 0:
        return this.format(Morebits.date.localeData.relativeTimes.thisDay, zone);
      case dateDiff === 1:
        return this.format(Morebits.date.localeData.relativeTimes.prevDay, zone);
      case (dateDiff > 0 && dateDiff < 7):
        return this.format(Morebits.date.localeData.relativeTimes.pastWeek, zone);
      case dateDiff === -1:
        return this.format(Morebits.date.localeData.relativeTimes.nextDay, zone);
      case (dateDiff < 0 && dateDiff > -7):
        return this.format(Morebits.date.localeData.relativeTimes.thisWeek, zone);
      default:
        return this.format(Morebits.date.localeData.relativeTimes.other, zone);
    }
  }
  /**
   * Get a regular expression that matches wikitext section titles, such
   * as `==December 2019==` or `=== Jan 2018 ===`.
   *
   * @returns {RegExp}
   */
  monthHeaderRegex() {
    return new RegExp("^(==+)\\s*".concat(this.getUTCFullYear(), "年(?:").concat(this.getUTCMonthName(), "|").concat(this.getUTCMonthNameAbbrev(), ")\\s*\\1"), "mg");
  }
  /**
   * Creates a wikitext section header with the month and year.
   *
   * @param {number} [level=2] - Header level.  Pass 0 for just the text
   * with no wikitext markers (==).
   * @returns {string}
   */
  monthHeader(level) {
    level = Number.parseInt(String(level), 10);
    level = Number.isNaN(level) ? 2 : level;
    const header = "=".repeat(level);
    const text = "".concat(this.getUTCFullYear(), "年").concat(this.getUTCMonthName());
    if (header.length) {
      return "".concat(header, " ").concat(text, " ").concat(header);
    }
    return text;
  }
};
var delegatedDateProto = {};
var _iterator6 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype));
var _step6;
try {
  for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
    const func = _step6.value;
    if (func !== "constructor" && !["add", "getDayName", "getMonthName"].includes(func)) {
      delegatedDateProto[func] = function(...args) {
        return this._d[func](...args);
      };
    }
  }
} catch (err) {
  _iterator6.e(err);
} finally {
  _iterator6.f();
}
Object.assign(MorebitsDate.prototype, delegatedDateProto);
Morebits.date = MorebitsDate;
Morebits.wiki = {};
Morebits.wiki.isPageRedirect = () => {
  console.warn("[Morebits] NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.");
  return Morebits.isPageRedirect();
};
Morebits.wiki.numberOfActionsLeft = 0;
Morebits.wiki.nbrOfCheckpointsLeft = 0;
Morebits.wiki.actionCompleted = (self) => {
  if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
    Morebits.wiki.actionCompleted.event(self);
  }
};
Morebits.wiki.actionCompleted.event = () => {
  if (Morebits.wiki.actionCompleted.notice) {
    Morebits.status.actionCompleted(Morebits.wiki.actionCompleted.notice);
  }
  if (Morebits.wiki.actionCompleted.redirect) {
    if (!/^\w+:\/\//.test(Morebits.wiki.actionCompleted.redirect)) {
      Morebits.wiki.actionCompleted.redirect = mw.util.getUrl(Morebits.wiki.actionCompleted.redirect);
      if (Morebits.wiki.actionCompleted.followRedirect === false) {
        Morebits.wiki.actionCompleted.redirect += "?redirect=no";
      }
    }
    setTimeout(() => {
      location.href = Morebits.wiki.actionCompleted.redirect;
    }, Morebits.wiki.actionCompleted.timeOut);
  }
};
Morebits.wiki.actionCompleted.timeOut = window.wpActionCompletedTimeOut === void 0 ? 5e3 : window.wpActionCompletedTimeOut;
Morebits.wiki.actionCompleted.redirect = null;
Morebits.wiki.actionCompleted.notice = null;
Morebits.wiki.addCheckpoint = () => {
  ++Morebits.wiki.nbrOfCheckpointsLeft;
};
Morebits.wiki.removeCheckpoint = () => {
  if (--Morebits.wiki.nbrOfCheckpointsLeft <= 0 && Morebits.wiki.numberOfActionsLeft <= 0) {
    Morebits.wiki.actionCompleted.event();
  }
};
var WikiApi = class {
  currentAction;
  onSuccess;
  onError;
  parent = window;
  // use global context if there is no parent object
  query;
  response = null;
  responseXML = null;
  // use `response` instead; retained for backwards compatibility
  statelem;
  // this non-standard name kept for backwards compatibility
  statusText = null;
  // result received from the API, normally "success" or "error"
  errorCode = null;
  // short text error code, if any, as documented in the MediaWiki API
  errorText = null;
  // full error description, if any
  badtokenRetry = false;
  constructor(currentAction, query, onSuccess, statusElement, onError) {
    var _this$query;
    this.currentAction = currentAction;
    this.query = query;
    this.query.assert = "user";
    if (!query.errorformat || !["wikitext", "plaintext"].includes(query.errorformat)) {
      this.query.errorformat = "html";
    }
    (_this$query = this.query).uselang || (_this$query.uselang = "content");
    this.query.errorlang = "uselang";
    this.query.errorsuselocal = 1;
    this.onSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.onError = onError !== null && onError !== void 0 ? onError : null;
    if (statusElement) {
      this.setStatusElement(statusElement);
    } else {
      this.statelem = new Morebits.status(currentAction);
    }
    if (!query.format) {
      this.query.format = "xml";
    } else if (query.format === "json" && !query.formatversion) {
      this.query.formatversion = "2";
    } else if (!["xml", "json"].includes(query.format)) {
      this.statelem.error("Invalid API format: only xml and json are supported.");
    }
    if (query.action && ["query", "watch"].includes(query.action)) {
      delete query.tags;
    } else if (!query.tags && morebitsWikiChangeTag) {
      query.tags = morebitsWikiChangeTag;
    }
  }
  /**
   * Keep track of parent object for callbacks.
   *
   * @param {*} parent
   */
  setParent(parent) {
    this.parent = parent;
  }
  /** @param {Morebits.status} statusElement */
  setStatusElement(statusElement) {
    this.statelem = statusElement;
    this.statelem.status(this.currentAction);
  }
  /**
   * Carry out the request.
   *
   * @param {Object} callerAjaxParameters - Do not specify a parameter unless you really
   * really want to give jQuery some extra parameters.
   * @returns {promise} - A jQuery promise object that is resolved or rejected with the api object.
   */
  post(callerAjaxParameters) {
    ++Morebits.wiki.numberOfActionsLeft;
    const queryStringArr = [];
    for (var _i6 = 0, _Object$entries2 = Object.entries(this.query); _i6 < _Object$entries2.length; _i6++) {
      const [i, val] = _Object$entries2[_i6];
      if (Array.isArray(val)) {
        queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(val.map(encodeURIComponent).join("|"));
      } else if (val !== void 0) {
        queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(String(val)));
      }
    }
    const queryString = queryStringArr.join("&").replace(/^(.*?)(\btoken=[^&]*)&(.*)/, "$1$3&$2");
    const ajaxparams = {
      context: this,
      type: this.query.action === "query" ? "GET" : "POST",
      url: mw.util.wikiScript("api"),
      data: queryString,
      dataType: this.query.format,
      headers: {
        "Api-User-Agent": morebitsWikiApiUserAgent
      },
      ...callerAjaxParameters
    };
    return $.ajax(ajaxparams).then(
      function onAPIsuccess(response, statusText) {
        this.statusText = statusText;
        this.response = response;
        this.responseXML = response;
        if (this.query.format === "json") {
          var _jsonResponse$errors$, _jsonResponse$errors;
          const jsonResponse = response;
          this.errorCode = (_jsonResponse$errors$ = (_jsonResponse$errors = jsonResponse.errors) === null || _jsonResponse$errors === void 0 || (_jsonResponse$errors = _jsonResponse$errors[0]) === null || _jsonResponse$errors === void 0 ? void 0 : _jsonResponse$errors.code) !== null && _jsonResponse$errors$ !== void 0 ? _jsonResponse$errors$ : null;
          if (this.query.errorformat === "html") {
            var _jsonResponse$errors$2, _jsonResponse$errors2;
            this.errorText = (_jsonResponse$errors$2 = (_jsonResponse$errors2 = jsonResponse.errors) === null || _jsonResponse$errors2 === void 0 || (_jsonResponse$errors2 = _jsonResponse$errors2[0]) === null || _jsonResponse$errors2 === void 0 ? void 0 : _jsonResponse$errors2.html) !== null && _jsonResponse$errors$2 !== void 0 ? _jsonResponse$errors$2 : null;
          } else if (this.query.errorformat === "wikitext" || this.query.errorformat === "plaintext") {
            var _jsonResponse$errors$3, _jsonResponse$errors3;
            this.errorText = (_jsonResponse$errors$3 = (_jsonResponse$errors3 = jsonResponse.errors) === null || _jsonResponse$errors3 === void 0 || (_jsonResponse$errors3 = _jsonResponse$errors3[0]) === null || _jsonResponse$errors3 === void 0 ? void 0 : _jsonResponse$errors3.text) !== null && _jsonResponse$errors$3 !== void 0 ? _jsonResponse$errors$3 : null;
          }
        } else {
          var _$$find$eq$attr;
          this.errorCode = (_$$find$eq$attr = $(response).find("errors error").eq(0).attr("code")) !== null && _$$find$eq$attr !== void 0 ? _$$find$eq$attr : null;
          this.errorText = $(response).find("errors error").eq(0).text();
        }
        if (typeof this.errorCode === "string") {
          return this.returnError(callerAjaxParameters);
        }
        if (this.onSuccess) {
          this.onSuccess.call(this.parent, this);
        } else {
          this.statelem.info("完成");
        }
        Morebits.wiki.actionCompleted();
        return $.Deferred().resolveWith(this.parent, [this]);
      },
      // only network and server errors reach here - complaints from the API itself are caught in success()
      function onAPIfailure(error, statusText, errorThrown) {
        this.statusText = statusText;
        this.errorThrown = errorThrown;
        this.errorText = statusText + uls("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + uls("”。", "」。");
        return this.returnError();
      }
    );
  }
  returnError(callerAjaxParameters) {
    if (this.errorCode === "badtoken" && !this.badtokenRetry) {
      this.statelem.warn(uls("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
      this.badtokenRetry = true;
      return Morebits.wiki.api.getToken().then((token) => {
        this.query.token = token;
        return this.post(callerAjaxParameters);
      });
    }
    this.statelem.error("".concat(this.errorText, "（").concat(this.errorCode, "）"));
    if (this.onError) {
      this.onError.call(this.parent, this);
    }
    return $.Deferred().rejectWith(this.parent, [this]);
  }
  getStatusElement() {
    return this.statelem;
  }
  getErrorCode() {
    return this.errorCode;
  }
  getErrorText() {
    return this.errorText;
  }
  getXML() {
    return this.responseXML;
  }
  getResponse() {
    return this.response;
  }
  /**
   * Set the custom user agent header, which is used for server-side logging.
   * Note that doing so will set the useragent for every `Morebits.wiki.api`
   * process performed thereafter.
   *
   * @see {@link https://lists.wikimedia.org/pipermail/mediawiki-api-announce/2014-November/000075.html}
   * for original announcement.
   *
   * @memberof Morebits.wiki.api
   * @param {string} [ua=Qiuwen/1.1 (morebits.js)] - User agent.  The default
   * value of `morebits.js` will be appended to any provided
   * value.
   */
  static setApiUserAgent(ua) {
    morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js".concat(ua ? "; ".concat(ua) : "", ")");
  }
  /**
   * Get a new CSRF token on encountering token errors.
   *
   * @memberof Morebits.wiki.api
   * @returns {string} MediaWiki CSRF token.
   */
  static getToken() {
    const tokenApi = new Morebits.wiki.api(uls("获取令牌", "取得權杖"), {
      action: "query",
      meta: "tokens",
      type: "csrf",
      format: "json"
    });
    return tokenApi.post().then((apiobj) => {
      return apiobj.response.query.tokens.csrftoken;
    });
  }
};
Morebits.wiki.api = WikiApi;
Morebits.wiki.getCachedJson = (title) => {
  const query = {
    action: "query",
    prop: "revisions",
    titles: title,
    rvslots: "main",
    rvprop: "content",
    format: "json",
    smaxage: "3600",
    maxage: "3600"
  };
  return new Morebits.wiki.api("", query).post().then((apiobj) => {
    apiobj.getStatusElement().unlink();
    const response = apiobj.getResponse();
    const wikitext2 = response.query.pages[0].revisions[0].slots.main.content;
    return JSON.parse(wikitext2);
  });
};
var morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js)";
var morebitsWikiChangeTag = "";
var emptyFunction = () => {
};
var WikiPage = class {
  ctx;
  constructor(pageName, status) {
    status || (status = uls("打开页面“", "打開頁面「") + pageName + uls("”", "」"));
    this.ctx = {
      // backing fields for public properties
      pageName,
      pageExists: false,
      editSummary: null,
      changeTags: null,
      testActions: null,
      // array if any valid actions
      callbackParameters: null,
      statusElement: status instanceof Morebits.status ? status : new Morebits.status(status),
      // - edit
      pageText: null,
      editMode: "all",
      // save() replaces entire contents of the page by default
      appendText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      prependText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      newSectionText: null,
      newSectionTitle: null,
      createOption: null,
      minorEdit: false,
      botEdit: false,
      pageSection: null,
      maxConflictRetries: 2,
      maxRetries: 2,
      followRedirect: false,
      followCrossNsRedirect: true,
      watchlistOption: "nochange",
      watchlistExpiry: null,
      creator: null,
      timestamp: null,
      // - revert
      revertOldID: null,
      // - move
      moveDestination: null,
      moveTalkPage: false,
      moveSubpages: false,
      moveSuppressRedirect: false,
      // - protect
      protectEdit: null,
      protectMove: null,
      protectCreate: null,
      protectCascade: null,
      // - creation lookup
      lookupNonRedirectCreator: false,
      // internal status
      pageLoaded: false,
      csrfToken: null,
      loadTime: null,
      lastEditTime: null,
      pageID: null,
      contentModel: null,
      revertCurID: null,
      revertUser: null,
      watched: false,
      fullyProtected: false,
      suppressProtectWarning: false,
      conflictRetries: 0,
      retries: 0,
      // callbacks
      onLoadSuccess: null,
      onLoadFailure: null,
      onSaveSuccess: null,
      onSaveFailure: null,
      onLookupCreationSuccess: null,
      onLookupCreationFailure: null,
      onMoveSuccess: null,
      onMoveFailure: null,
      onDeleteSuccess: null,
      onDeleteFailure: null,
      onUndeleteSuccess: null,
      onUndeleteFailure: null,
      onProtectSuccess: null,
      onProtectFailure: null,
      // internal objects
      loadQuery: null,
      loadApi: null,
      saveApi: null,
      lookupCreationApi: null,
      moveApi: null,
      moveProcessApi: null,
      patrolApi: null,
      patrolProcessApi: null,
      deleteApi: null,
      deleteProcessApi: null,
      undeleteApi: null,
      undeleteProcessApi: null,
      protectApi: null,
      protectProcessApi: null
    };
  }
  /**
   * Loads the text for the page.
   *
   * @param {Function} onSuccess - Callback function which is called when the load has succeeded.
   * @param {Function} [onFailure] - Callback function which is called when the load fails.
   */
  load(onSuccess, onFailure) {
    this.ctx.onLoadSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.ctx.onLoadFailure = onFailure || emptyFunction;
    if (!onSuccess) {
      this.ctx.statusElement.error("Internal error: no onSuccess callback provided to load()!");
      this.ctx.onLoadFailure(this);
      return;
    }
    this.ctx.loadQuery = {
      action: "query",
      prop: "info|revisions",
      inprop: "watched",
      intestactions: "edit",
      // can be expanded
      curtimestamp: "",
      meta: "tokens",
      type: "csrf",
      titles: this.ctx.pageName,
      format: "json"
      // don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
    };
    if (this.ctx.editMode === "all") {
      this.ctx.loadQuery.rvprop = "content|timestamp";
    } else if (this.ctx.editMode === "revert") {
      this.ctx.loadQuery.rvprop = "timestamp";
      this.ctx.loadQuery.rvlimit = 1;
      this.ctx.loadQuery.rvstartid = this.ctx.revertOldID;
    }
    if (this.ctx.followRedirect) {
      this.ctx.loadQuery.redirects = "";
    }
    if (typeof this.ctx.pageSection === "number") {
      this.ctx.loadQuery.rvsection = this.ctx.pageSection;
    }
    if (Morebits.userIsSysop) {
      this.ctx.loadQuery.inprop += "|protection";
    }
    this.ctx.loadApi = new Morebits.wiki.api(uls("抓取页面……", "抓取頁面……"), this.ctx.loadQuery, this.fnLoadSuccess, this.ctx.statusElement, this.ctx.onLoadFailure);
    this.ctx.loadApi.setParent(this);
    this.ctx.loadApi.post();
  }
  /**
   * Saves the text for the page to Wikipedia.
   * Must be preceded by successfully calling `load()`.
   *
   * Warning: Calling `save()` can result in additional calls to the
   * previous `load()` callbacks to recover from edit conflicts! In this
   * case, callers must make the same edit to the new pageText and
   * re-invoke `save()`.  This behavior can be disabled with
   * `setMaxConflictRetries(0)`.
   *
   * @param {Function} [onSuccess] - Callback function which is called when the save has succeeded.
   * @param {Function} [onFailure] - Callback function which is called when the save fails.
   */
  save(onSuccess, onFailure) {
    this.ctx.onSaveSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.ctx.onSaveFailure = onFailure || emptyFunction;
    const canUseMwUserToken = this.fnCanUseMwUserToken("edit");
    if (!this.ctx.pageLoaded && !canUseMwUserToken) {
      this.ctx.statusElement.error("Internal error: attempt to save a page that has not been loaded!");
      this.ctx.onSaveFailure(this);
      return;
    }
    if (!this.ctx.editSummary) {
      if (this.ctx.editMode === "new" && this.ctx.newSectionTitle) {
        this.ctx.editSummary = "";
      } else {
        this.ctx.statusElement.error("Internal error: edit summary not set before save!");
        this.ctx.onSaveFailure(this);
        return;
      }
    }
    if (this.ctx.fullyProtected && !this.ctx.suppressProtectWarning && !confirm(this.ctx.fullyProtected === "infinity" ? uls("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + this.ctx.pageName + uls("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(uls("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + this.ctx.pageName + uls("”（到期：", "」（到期：") + new Morebits.date(this.ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(uls("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
      this.ctx.statusElement.error(uls("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
      this.ctx.onSaveFailure(this);
      return;
    }
    this.ctx.retries = 0;
    const query = {
      action: "edit",
      title: this.ctx.pageName,
      summary: this.ctx.editSummary,
      token: canUseMwUserToken ? mw.user.tokens.get("csrfToken") : this.ctx.csrfToken,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    if (typeof this.ctx.pageSection === "number") {
      query.section = this.ctx.pageSection;
    }
    if (this.ctx.minorEdit) {
      query.minor = true;
    } else {
      query.notminor = true;
    }
    if (this.ctx.botEdit) {
      query.bot = true;
    }
    switch (this.ctx.editMode) {
      case "append":
        if (this.ctx.appendText === null) {
          this.ctx.statusElement.error("Internal error: append text not set before save!");
          this.ctx.onSaveFailure(this);
          return;
        }
        query.appendtext = this.ctx.appendText;
        break;
      case "prepend":
        if (this.ctx.prependText === null) {
          this.ctx.statusElement.error("Internal error: prepend text not set before save!");
          this.ctx.onSaveFailure(this);
          return;
        }
        query.prependtext = this.ctx.prependText;
        break;
      case "new":
        if (!this.ctx.newSectionText) {
          this.ctx.statusElement.error("Internal error: new section text not set before save!");
          this.ctx.onSaveFailure(this);
          return;
        }
        query.section = "new";
        query.text = this.ctx.newSectionText;
        query.sectiontitle = this.ctx.newSectionTitle || this.ctx.editSummary;
        break;
      case "revert":
        query.undo = this.ctx.revertCurID;
        query.undoafter = this.ctx.revertOldID;
        if (this.ctx.lastEditTime) {
          query.basetimestamp = this.ctx.lastEditTime;
        }
        query.starttimestamp = this.ctx.loadTime;
        break;
      default:
        query.text = this.ctx.pageText;
        if (this.ctx.lastEditTime) {
          query.basetimestamp = this.ctx.lastEditTime;
        }
        query.starttimestamp = this.ctx.loadTime;
        break;
    }
    if (this.ctx.createOption !== null && ["recreate", "createonly", "nocreate"].includes(this.ctx.createOption)) {
      query[this.ctx.createOption] = "";
    }
    if (canUseMwUserToken && this.ctx.followRedirect) {
      query.redirect = true;
    }
    this.ctx.saveApi = new Morebits.wiki.api(uls("保存页面……", "儲存頁面……"), query, this.fnSaveSuccess, this.ctx.statusElement, this.fnSaveError);
    this.ctx.saveApi.setParent(this);
    this.ctx.saveApi.post();
  }
  /**
   * Adds the text provided via `setAppendText()` to the end of the
   * page.  Does not require calling `load()` first, unless a watchlist
   * expiry is used.
   *
   * @param {Function} [onSuccess] - Callback function which is called when the method has succeeded.
   * @param {Function} [onFailure] - Callback function which is called when the method fails.
   */
  append(onSuccess, onFailure) {
    this.ctx.editMode = "append";
    if (this.fnCanUseMwUserToken("edit")) {
      this.save(onSuccess, onFailure);
    } else {
      this.ctx.onSaveSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
      this.ctx.onSaveFailure = onFailure || emptyFunction;
      this.load(this.fnAutoSave, this.ctx.onSaveFailure);
    }
  }
  /**
   * Adds the text provided via `setPrependText()` to the start of the
   * page.  Does not require calling `load()` first, unless a watchlist
   * expiry is used.
   *
   * @param {Function}  [onSuccess] - Callback function which is called when the method has succeeded.
   * @param {Function}  [onFailure] - Callback function which is called when the method fails.
   */
  prepend(onSuccess, onFailure) {
    this.ctx.editMode = "prepend";
    if (this.fnCanUseMwUserToken("edit")) {
      this.save(onSuccess, onFailure);
    } else {
      this.ctx.onSaveSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
      this.ctx.onSaveFailure = onFailure || emptyFunction;
      this.load(this.fnAutoSave, this.ctx.onSaveFailure);
    }
  }
  /**
   * Creates a new section with the text provided by `setNewSectionText()`
   * and section title from `setNewSectionTitle()`.
   * If `editSummary` is provided, that will be used instead of the
   * autogenerated "->Title (new section" edit summary.
   * Does not require calling `load()` first, unless a watchlist expiry
   * is used.
   *
   * @param {Function}  [onSuccess] - Callback function which is called when the method has succeeded.
   * @param {Function}  [onFailure] - Callback function which is called when the method fails.
   */
  newSection(onSuccess, onFailure) {
    this.ctx.editMode = "new";
    if (this.fnCanUseMwUserToken("edit")) {
      this.save(onSuccess, onFailure);
    } else {
      this.ctx.onSaveSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
      this.ctx.onSaveFailure = onFailure || emptyFunction;
      this.load(this.fnAutoSave, this.ctx.onSaveFailure);
    }
  }
  /** @returns {string} The name of the loaded page, including the namespace */
  getPageName() {
    return this.ctx.pageName;
  }
  /** @returns {string} The text of the page after a successful load() */
  getPageText() {
    return this.ctx.pageText;
  }
  /** @param {string} pageText - Updated page text that will be saved when `save()` is called */
  setPageText(pageText) {
    this.ctx.editMode = "all";
    this.ctx.pageText = pageText;
  }
  /** @param {string} appendText - Text that will be appended to the page when `append()` is called */
  setAppendText(appendText) {
    this.ctx.editMode = "append";
    this.ctx.appendText = appendText;
  }
  /** @param {string} prependText - Text that will be prepended to the page when `prepend()` is called */
  setPrependText(prependText) {
    this.ctx.editMode = "prepend";
    this.ctx.prependText = prependText;
  }
  /** @param {string} newSectionText - Text that will be added in a new section on the page when `newSection()` is called */
  setNewSectionText(newSectionText) {
    this.ctx.editMode = "new";
    this.ctx.newSectionText = newSectionText;
  }
  /**
   * @param {string} newSectionTitle - Title for the new section created when `newSection()` is called
   * If missing, `ctx.editSummary` will be used. Issues may occur if a substituted template is used.
   */
  setNewSectionTitle(newSectionTitle) {
    this.ctx.editMode = "new";
    this.ctx.newSectionTitle = newSectionTitle;
  }
  // Edit-related setter methods:
  /**
   * Set the edit summary that will be used when `save()` is called.
   * Unnecessary if editMode is 'new' and newSectionTitle is provided.
   *
   * @param {string} summary
   */
  setEditSummary(summary) {
    this.ctx.editSummary = summary;
  }
  /**
   * Set any custom tag(s) to be applied to the API action.
   * A number of actions don't support it, most notably watch.
   *
   * @param {string|string[]} tags - String or array of tag(s).
   */
  setChangeTags(tags) {
    this.ctx.changeTags = tags;
  }
  /**
   * @param {string} [createOption=null] - Can take the following four values:
   * - recreate: create the page if it does not exist, or edit it if it exists.
   * - createonly: create the page if it does not exist, but return an
   * error if it already exists.
   * - nocreate: don't create the page, only edit it if it already exists.
   * - `null`: create the page if it does not exist, unless it was deleted
   * in the moment between loading the page and saving the edit (default).
   */
  setCreateOption(createOption) {
    this.ctx.createOption = createOption !== null && createOption !== void 0 ? createOption : null;
  }
  /** @param {boolean} minorEdit - Set true to mark the edit as a minor edit. */
  setMinorEdit(minorEdit) {
    this.ctx.minorEdit = minorEdit;
  }
  /** @param {boolean} botEdit - Set true to mark the edit as a bot edit */
  setBotEdit(botEdit) {
    this.ctx.botEdit = botEdit;
  }
  /**
   * @param {number} pageSection - Integer specifying the section number to load or save.
   * If specified as `null`, the entire page will be retrieved.
   */
  setPageSection(pageSection) {
    this.ctx.pageSection = pageSection;
  }
  /**
   * @param {number} maxConflictRetries - Number of retries for save errors involving an edit conflict or
   * loss of token. Default: 2.
   */
  setMaxConflictRetries(maxConflictRetries) {
    this.ctx.maxConflictRetries = maxConflictRetries;
  }
  /**
   * @param {number} maxRetries - Number of retries for save errors not involving an edit conflict or
   * loss of token. Default: 2.
   */
  setMaxRetries(maxRetries) {
    this.ctx.maxRetries = maxRetries;
  }
  /**
   * Set whether and how to watch the page, including setting an expiry.
   *
   * @param {boolean|string|Morebits.date|Date} [watchlistOption=false] -
   * Basically a mix of MW API and Twinkley options available pre-expiry:
   * - `true`|`'yes'`|`'watch'`: page will be added to the user's
   * watchlist when the action is called. Defaults to an indefinite
   * watch unless `watchlistExpiry` is provided.
   * - `false`|`'no'`|`'nochange'`: watchlist status of the page (including expiry) will not be changed.
   * - `'default'`|`'preferences'`: watchlist status of the page will be
   * set based on the user's preference settings when the action is
   * called. Defaults to an indefinite watch unless `watchlistExpiry` is
   * provided.
   * - `'unwatch'`: explicitly unwatch the page.
   * - Any other `string` or `number`, or a `Morebits.date` or `Date`
   * object: watch page until the specified time, deferring to
   * `watchlistExpiry` if provided.
   * @param {string|number|Morebits.date|Date} [watchlistExpiry=infinity] -
   * A date-like string or number, or a date object.  If a string or number,
   * can be relative (2 weeks) or other similarly date-like (i.e. NOT "potato"):
   * ISO 8601: 2038-01-09T03:14:07Z
   * MediaWiki: 20380109031407
   * UNIX: 2147483647
   * SQL: 2038-01-09 03:14:07
   * Can also be `infinity` or infinity-like (`infinite`, `indefinite`, and `never`).
   * See {@link https://phabricator.wikimedia.org/source/mediawiki-libs-Timestamp/browse/master/src/ConvertibleTimestamp.php;4e53b859a9580c55958078f46dd4f3a44d0fcaa0$57-109?as=source&blame=off}
   */
  setWatchlist(watchlistOption, watchlistExpiry) {
    if (watchlistOption instanceof Morebits.date || watchlistOption instanceof Date) {
      watchlistOption = watchlistOption.toISOString();
    }
    if (watchlistExpiry === void 0) {
      watchlistExpiry = "infinity";
    } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
      watchlistExpiry = watchlistExpiry.toISOString();
    }
    switch (watchlistOption) {
      case "nochange":
      case "no":
      case false:
      case void 0:
        this.ctx.watchlistOption = "nochange";
        this.ctx.watchlistExpiry = null;
        break;
      case "unwatch":
        this.ctx.watchlistOption = "unwatch";
        break;
      case "preferences":
      case "default":
        this.ctx.watchlistOption = "preferences";
        this.ctx.watchlistExpiry = watchlistExpiry;
        break;
      case "watch":
      case "yes":
      case true:
        this.ctx.watchlistOption = "watch";
        this.ctx.watchlistExpiry = watchlistExpiry;
        break;
      default:
        this.ctx.watchlistOption = "watch";
        this.ctx.watchlistExpiry = watchlistOption;
        break;
    }
  }
  /**
   * Set a watchlist expiry. setWatchlist can mostly handle this by
   * itself, so this is here largely for completeness and compatibility
   * with the full suite of options.
   *
   * @param {string|number|Morebits.date|Date} [watchlistExpiry=infinity] -
   * A date-like string or number, or a date object.  If a string or number,
   * can be relative (2 weeks) or other similarly date-like (i.e. NOT "potato"):
   * ISO 8601: 2038-01-09T03:14:07Z
   * MediaWiki: 20380109031407
   * UNIX: 2147483647
   * SQL: 2038-01-09 03:14:07
   * Can also be `infinity` or infinity-like (`infinite`, `indefinite`, and `never`).
   * See {@link https://phabricator.wikimedia.org/source/mediawiki-libs-Timestamp/browse/master/src/ConvertibleTimestamp.php;4e53b859a9580c55958078f46dd4f3a44d0fcaa0$57-109?as=source&blame=off}
   */
  setWatchlistExpiry(watchlistExpiry) {
    if (watchlistExpiry === void 0) {
      watchlistExpiry = "infinity";
    } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
      watchlistExpiry = watchlistExpiry.toISOString();
    }
    this.ctx.watchlistExpiry = watchlistExpiry;
  }
  /**
   * @deprecated As of December 2020, use setWatchlist.
   * @param {boolean} [watchlistOption=false] -
   * - `True`: page watchlist status will be set based on the user's
   * preference settings when `save()` is called.
   * - `False`: watchlist status of the page will not be changed.
   *
   * Watchlist notes:
   * 1. The MediaWiki API value of 'unwatch', which explicitly removes
   * the page from the user's watchlist, is not used.
   * 2. If both `setWatchlist()` and `setWatchlistFromPreferences()` are
   * called, the last call takes priority.
   * 3. Twinkle modules should use the appropriate preference to set the watchlist options.
   * 4. Most Twinkle modules use `setWatchlist()`. `setWatchlistFromPreferences()`
   * is only needed for the few Twinkle watchlist preferences that
   * accept a string value of `default`.
   */
  setWatchlistFromPreferences(watchlistOption) {
    console.warn("[Morebits] NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
    if (watchlistOption) {
      this.ctx.watchlistOption = "preferences";
    } else {
      this.ctx.watchlistOption = "nochange";
    }
  }
  /**
   * @param {boolean} [followRedirect=false] -
   * - `true`: a maximum of one redirect will be followed. In the event
   * of a redirect, a message is displayed to the user and the redirect
   * target can be retrieved with getPageName().
   * - `false`: (default) the requested pageName will be used without regard to any redirect.
   * @param {boolean} [followCrossNsRedirect=true] - Not applicable if `followRedirect` is not set true.
   * - `true`: (default) follow redirect even if it is a cross-namespace redirect
   * - `false`: don't follow redirect if it is cross-namespace, edit the redirect itself.
   */
  setFollowRedirect(followRedirect, followCrossNsRedirect) {
    if (this.ctx.pageLoaded) {
      this.ctx.statusElement.error("Internal error: cannot change redirect setting after the page has been loaded!");
      return;
    }
    this.ctx.followRedirect = followRedirect !== null && followRedirect !== void 0 ? followRedirect : false;
    this.ctx.followCrossNsRedirect = followCrossNsRedirect === void 0 ? this.ctx.followCrossNsRedirect : followCrossNsRedirect;
  }
  // lookup-creation setter function
  /**
   * @param {boolean} flag - If set true, the author and timestamp of
   * the first non-redirect version of the page is retrieved.
   *
   * Warning:
   * 1. If there are no revisions among the first 50 that are
   * non-redirects, or if there are less 50 revisions and all are
   * redirects, the original creation is retrieved.
   * 2. Revisions that the user is not privileged to access
   * (revdeled/suppressed) will be treated as non-redirects.
   * 3. Must not be used when the page has a non-wikitext contentmodel
   * such as Modulespace Lua or user JavaScript/CSS.
   */
  setLookupNonRedirectCreator(flag) {
    this.ctx.lookupNonRedirectCreator = flag;
  }
  // Move-related setter functions
  /** @param {string} destination */
  setMoveDestination(destination) {
    this.ctx.moveDestination = destination;
  }
  /** @param {boolean} flag */
  setMoveTalkPage(flag) {
    this.ctx.moveTalkPage = !!flag;
  }
  /** @param {boolean} flag */
  setMoveSubpages(flag) {
    this.ctx.moveSubpages = !!flag;
  }
  /** @param {boolean} flag */
  setMoveSuppressRedirect(flag) {
    this.ctx.moveSuppressRedirect = !!flag;
  }
  // Protect-related setter functions
  /**
   * @param {string} level - The right required for the specific action
   * e.g. sysop, templateeditor, autoconfirmed
   * @param {string} [expiry=infinity]
   */
  setEditProtection(level, expiry) {
    this.ctx.protectEdit = {
      level,
      expiry: expiry || "infinity"
    };
  }
  setMoveProtection(level, expiry) {
    this.ctx.protectMove = {
      level,
      expiry: expiry || "infinity"
    };
  }
  setCreateProtection(level, expiry) {
    this.ctx.protectCreate = {
      level,
      expiry: expiry || "infinity"
    };
  }
  setCascadingProtection(flag) {
    this.ctx.protectCascade = !!flag;
  }
  suppressProtectWarning() {
    this.ctx.suppressProtectWarning = true;
  }
  // Revert-related getters/setters:
  setOldID(oldID) {
    this.ctx.revertOldID = oldID;
  }
  /** @returns {string} The current revision ID of the page */
  getCurrentID() {
    return this.ctx.revertCurID;
  }
  /** @returns {string} Last editor of the page */
  getRevisionUser() {
    return this.ctx.revertUser;
  }
  /** @returns {string} ISO 8601 timestamp at which the page was last edited. */
  getLastEditTime() {
    return this.ctx.lastEditTime;
  }
  // Miscellaneous getters/setters:
  /**
   * Define an object for use in a callback function.
   *
   * `callbackParameters` is for use by the caller only. The parameters
   * allow a caller to pass the proper context into its callback
   * function.  Callers must ensure that any changes to the
   * callbackParameters object within a `load()` callback still permit a
   * proper re-entry into the `load()` callback if an edit conflict is
   * detected upon calling `save()`.
   *
   * @param {Object} callbackParameters
   */
  setCallbackParameters(callbackParameters) {
    this.ctx.callbackParameters = callbackParameters;
  }
  /**
   * @returns {Object} - The object previously set by `setCallbackParameters()`.
   */
  getCallbackParameters() {
    return this.ctx.callbackParameters;
  }
  /**
   * @param {Morebits.status} statusElement
   */
  setStatusElement(statusElement) {
    this.ctx.statusElement = statusElement;
  }
  /**
   * @returns {Morebits.status} Status element created by the constructor.
   */
  getStatusElement() {
    return this.ctx.statusElement;
  }
  /**
   * @returns {boolean} True if the page existed on the wiki when it was last loaded.
   */
  exists() {
    return this.ctx.pageExists;
  }
  /**
   * @returns {string} Page ID of the page loaded. 0 if the page doesn't
   * exist.
   */
  getPageID() {
    return this.ctx.pageID;
  }
  /**
   * @returns {string} - Content model of the page.  Possible values
   * include (but may not be limited to): `wikitext`, `javascript`,
   * `css`, `json`, `Scribunto`, `sanitized-css`, `MassMessageListContent`.
   * Also gettable via `mw.config.get('wgPageContentModel')`.
   */
  getContentModel() {
    return this.ctx.contentModel;
  }
  /**
   * @returns {boolean|string} - Watched status of the page. Boolean
   * unless it's being watched temporarily, in which case returns the
   * expiry string.
   */
  getWatched() {
    return this.ctx.watched;
  }
  /**
   * @returns {string} ISO 8601 timestamp at which the page was last loaded.
   */
  getLoadTime() {
    return this.ctx.loadTime;
  }
  /**
   * @returns {string} The user who created the page following `lookupCreation()`.
   */
  getCreator() {
    return this.ctx.creator;
  }
  /**
   * @returns {string} The ISOString timestamp of page creation following `lookupCreation()`.
   */
  getCreationTimestamp() {
    return this.ctx.timestamp;
  }
  /** @returns {boolean} whether or not you can edit the page */
  canEdit() {
    return !!this.ctx.testActions && this.ctx.testActions.includes("edit");
  }
  /**
   * Retrieves the username of the user who created the page as well as
   * the timestamp of creation.  The username can be retrieved using the
   * `getCreator()` function; the timestamp can be retrieved using the
   * `getCreationTimestamp()` function.
   * Prior to June 2019 known as `lookupCreator()`.
   *
   * @param {Function} onSuccess - Callback function to be called when
   * the username and timestamp are found within the callback.
   * @param {Function} [onFailure] - Callback function to be called when
   * the lookup fails
   */
  lookupCreation(onSuccess, onFailure) {
    this.ctx.onLookupCreationSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.ctx.onLookupCreationFailure = onFailure || emptyFunction;
    if (!onSuccess) {
      this.ctx.statusElement.error("Internal error: no onSuccess callback provided to lookupCreation()!");
      this.ctx.onLookupCreationFailure(this);
      return;
    }
    const query = {
      action: "query",
      prop: "revisions",
      titles: this.ctx.pageName,
      rvlimit: 1,
      rvprop: "user|timestamp",
      rvdir: "newer",
      format: "json"
    };
    if (this.ctx.lookupNonRedirectCreator) {
      query.rvsection = 0;
      query.rvprop += "|content";
    }
    if (this.ctx.followRedirect) {
      query.redirects = "";
    }
    this.ctx.lookupCreationApi = new Morebits.wiki.api(uls("抓取页面创建者信息", "抓取頁面建立者資訊"), query, this.fnLookupCreationSuccess, this.ctx.statusElement, this.ctx.onLookupCreationFailure);
    this.ctx.lookupCreationApi.setParent(this);
    this.ctx.lookupCreationApi.post();
  }
  /**
   * Reverts a page to `revertOldID` set by `setOldID`.
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  revert(onSuccess, onFailure) {
    this.ctx.onSaveSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.ctx.onSaveFailure = onFailure || emptyFunction;
    if (!this.ctx.revertOldID) {
      this.ctx.statusElement.error("Internal error: revision ID to revert to was not set before revert!");
      this.ctx.onSaveFailure(this);
      return;
    }
    this.ctx.editMode = "revert";
    this.load(this.fnAutoSave, this.ctx.onSaveFailure);
  }
  /**
   * Moves a page to another title.
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  move(onSuccess, onFailure) {
    this.ctx.onMoveSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.ctx.onMoveFailure = onFailure || emptyFunction;
    if (!this.fnPreflightChecks("move", this.ctx.onMoveFailure)) {
      return;
    }
    if (!this.ctx.moveDestination) {
      this.ctx.statusElement.error("Internal error: destination page name was not set before move!");
      this.ctx.onMoveFailure(this);
      return;
    }
    if (this.fnCanUseMwUserToken("move")) {
      this.fnProcessMove();
    } else {
      const query = this.fnNeedTokenInfoQuery("move");
      this.ctx.moveApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), query, this.fnProcessMove, this.ctx.statusElement, this.ctx.onMoveFailure);
      this.ctx.moveApi.setParent(this);
      this.ctx.moveApi.post();
    }
  }
  /**
   * Marks the page as patrolled, using `rcid` (if available) or `revid`.
   *
   * Patrolling as such doesn't need to rely on loading the page in
   * question; simply passing a revid to the API is sufficient, so in
   * those cases just using {@link Morebits.wiki.api} is probably preferable.
   *
   * No error handling since we don't actually care about the errors.
   */
  patrol() {
    if (!Morebits.userIsSysop && !Morebits.userIsInGroup("patroller")) {
      return;
    }
    const $body = $("body");
    if ($body.find(".patrollink").length) {
      const patrolhref = $body.find(".patrollink a").attr("href");
      this.ctx.rcid = mw.util.getParamValue("rcid", patrolhref);
      this.fnProcessPatrol();
    } else {
      const patrolQuery = {
        action: "query",
        prop: "info",
        meta: "tokens",
        type: "patrol",
        // as long as we're querying, might as well get a token
        list: "recentchanges",
        // check if the page is unpatrolled
        titles: this.ctx.pageName,
        rcprop: "patrolled",
        rctitle: this.ctx.pageName,
        rclimit: 1,
        format: "json"
      };
      this.ctx.patrolApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), patrolQuery, this.fnProcessPatrol);
      this.ctx.patrolApi.setParent(this);
      this.ctx.patrolApi.post();
    }
  }
  // |delete| is a reserved word in some flavours of JS
  /**
   * Deletes a page (for admins only).
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  deletePage(onSuccess, onFailure) {
    this.ctx.onDeleteSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.ctx.onDeleteFailure = onFailure || emptyFunction;
    if (!this.fnPreflightChecks("delete", this.ctx.onDeleteFailure)) {
      return;
    }
    if (this.fnCanUseMwUserToken("delete")) {
      this.fnProcessDelete();
    } else {
      const query = this.fnNeedTokenInfoQuery("delete");
      this.ctx.deleteApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), query, this.fnProcessDelete, this.ctx.statusElement, this.ctx.onDeleteFailure);
      this.ctx.deleteApi.setParent(this);
      this.ctx.deleteApi.post();
    }
  }
  /**
   * Undeletes a page (for admins only).
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  undeletePage(onSuccess, onFailure) {
    this.ctx.onUndeleteSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.ctx.onUndeleteFailure = onFailure || emptyFunction;
    if (!this.fnPreflightChecks("undelete", this.ctx.onUndeleteFailure)) {
      return;
    }
    if (this.fnCanUseMwUserToken("undelete")) {
      this.fnProcessUndelete();
    } else {
      const query = this.fnNeedTokenInfoQuery("undelete");
      this.ctx.undeleteApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), query, this.fnProcessUndelete, this.ctx.statusElement, this.ctx.onUndeleteFailure);
      this.ctx.undeleteApi.setParent(this);
      this.ctx.undeleteApi.post();
    }
  }
  /**
   * Protects a page (for admins only).
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  protect(onSuccess, onFailure) {
    this.ctx.onProtectSuccess = onSuccess !== null && onSuccess !== void 0 ? onSuccess : null;
    this.ctx.onProtectFailure = onFailure || emptyFunction;
    if (!this.fnPreflightChecks("protect", this.ctx.onProtectFailure)) {
      return;
    }
    if (!this.ctx.protectEdit && !this.ctx.protectMove && !this.ctx.protectCreate) {
      this.ctx.statusElement.error("Internal error: you must set edit and/or move and/or create protection before calling protect()!");
      this.ctx.onProtectFailure(this);
      return;
    }
    const query = this.fnNeedTokenInfoQuery("protect");
    this.ctx.protectApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), query, this.fnProcessProtect, this.ctx.statusElement, this.ctx.onProtectFailure);
    this.ctx.protectApi.setParent(this);
    this.ctx.protectApi.post();
  }
  /*
   * Private member functions
   * These are not exposed outside
   */
  /**
   * Determines whether we can save an API call by using the csrf token
   * sent with the page HTML, or whether we need to ask the server for
   * more info (e.g. protection or watchlist expiry).
   *
   * Currently used for `append`, `prepend`, `newSection`, `move`,
   * `deletePage`, and `undeletePage`. Not used for `protect`
   * since it always needs to request protection status.
   *
   * @param {string} [action=edit] - The action being undertaken, e.g.
   * "edit" or "delete". In practice, only "edit" or "notedit" matters.
   * @returns {boolean}
   */
  fnCanUseMwUserToken = (action) => {
    action || (action = "edit");
    if (this.ctx.watchlistExpiry && !Morebits.string.isInfinity(String(this.ctx.watchlistExpiry))) {
      return false;
    }
    if (this.ctx.followRedirect) {
      if (!this.ctx.followCrossNsRedirect) {
        return false;
      }
      if (action !== "edit" || this.ctx.editMode === "all" || this.ctx.editMode === "revert") {
        return false;
      }
    }
    if (Morebits.userIsSysop && !this.ctx.suppressProtectWarning) {
      if (new mw.Title(Morebits.pageNameNorm).getPrefixedText() !== new mw.Title(this.ctx.pageName).getPrefixedText()) {
        return false;
      }
      const editRestriction = mw.config.get("wgRestrictionEdit");
      if (!editRestriction || editRestriction.includes("sysop")) {
        return false;
      }
    }
    return !!mw.user.tokens.get("csrfToken");
  };
  /**
   * When functions can't use
   * {@link Morebits.wiki.page~fnCanUseMwUserToken|fnCanUseMwUserToken}
   * or require checking protection or watched status, maintain the query
   * in one place. Used for {@link Morebits.wiki.page#deletePage|delete},
   * {@link Morebits.wiki.page#undeletePage|undelete},
   * {@link* Morebits.wiki.page#protect|protect},
   * and {@link Morebits.wiki.page#move|move}
   * (basically, just not {@link Morebits.wiki.page#load|load}).
   *
   * @param {string} action - The action being undertaken, e.g. "edit" or
   * "delete".
   * @returns {Object} Appropriate query.
   */
  fnNeedTokenInfoQuery = (action) => {
    const query = {
      action: "query",
      meta: "tokens",
      type: "csrf",
      titles: this.ctx.pageName,
      prop: "info",
      inprop: "watched",
      format: "json"
    };
    if (action !== "move" || Morebits.userIsSysop) {
      query.inprop += "|protection";
    }
    if (this.ctx.followRedirect && action !== "undelete") {
      query.redirects = "";
    }
    return query;
  };
  // callback from loadSuccess() for append(), prepend(), and newSection() threads
  fnAutoSave = (pageobj) => {
    pageobj.save(this.ctx.onSaveSuccess, this.ctx.onSaveFailure);
  };
  // callback from loadApi.post()
  fnLoadSuccess = () => {
    var _page$lastrevid;
    const response = this.ctx.loadApi.getResponse().query;
    if (!this.fnCheckPageName(response, this.ctx.onLoadFailure)) {
      return;
    }
    const [page] = response.pages;
    let rev;
    this.ctx.pageExists = !page.missing;
    if (this.ctx.pageExists) {
      [rev] = page.revisions;
      this.ctx.lastEditTime = rev.timestamp;
      this.ctx.pageText = rev.content;
      this.ctx.pageID = page.pageid;
    } else {
      this.ctx.pageText = "";
      this.ctx.pageID = 0;
    }
    this.ctx.csrfToken = response.tokens.csrftoken;
    if (!this.ctx.csrfToken) {
      this.ctx.statusElement.error(uls("未能获取编辑令牌。", "未能取得編輯權杖。"));
      this.ctx.onLoadFailure(this);
      return;
    }
    this.ctx.loadTime = this.ctx.loadApi.getResponse().curtimestamp;
    if (!this.ctx.loadTime) {
      this.ctx.statusElement.error(uls("未能获取当前时间戳。", "未能取得當前時間戳。"));
      this.ctx.onLoadFailure(this);
      return;
    }
    this.ctx.contentModel = page.contentmodel;
    this.ctx.watched = page.watchlistexpiry || page.watched || false;
    if (Morebits.userIsSysop) {
      const editProt = page.protection.findLast((pr) => {
        return pr.type === "edit" && pr.level === "sysop";
      });
      if (editProt) {
        this.ctx.fullyProtected = editProt.expiry;
      } else {
        this.ctx.fullyProtected = false;
      }
    }
    this.ctx.revertCurID = (_page$lastrevid = page.lastrevid) !== null && _page$lastrevid !== void 0 ? _page$lastrevid : null;
    const testactions = page.actions;
    this.ctx.testActions = [];
    for (var _i7 = 0, _Object$keys = Object.keys(testactions !== null && testactions !== void 0 ? testactions : {}); _i7 < _Object$keys.length; _i7++) {
      const action = _Object$keys[_i7];
      if (testactions !== null && testactions !== void 0 && testactions[action]) {
        this.ctx.testActions[this.ctx.testActions.length] = action;
      }
    }
    if (this.ctx.editMode === "revert") {
      this.ctx.revertCurID = rev && rev.revid || null;
      if (!this.ctx.revertCurID) {
        this.ctx.statusElement.error(uls("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
        this.ctx.onLoadFailure(this);
        return;
      }
      this.ctx.revertUser = rev && rev.user || null;
      if (!this.ctx.revertUser) {
        if (rev && rev.userhidden) {
          this.ctx.revertUser = uls("<用户名已隐藏>", "<使用者名稱已隱藏>");
        } else {
          this.ctx.statusElement.error(uls("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
          this.ctx.onLoadFailure(this);
          return;
        }
      }
      this.ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(this.ctx.revertUser, " 所做出的").concat(uls("修订 ", "修訂 ")).concat(this.ctx.revertOldID, "：").concat(this.ctx.editSummary);
    }
    this.ctx.pageLoaded = true;
    this.ctx.onLoadSuccess(this);
  };
  // helper function to parse the page name returned from the API
  fnCheckPageName = (response, onFailure) => {
    const page = response.pages && response.pages[0];
    if (page) {
      if (page.invalid) {
        this.ctx.statusElement.error(uls("标题不合法：", "標題不合法：".concat(this.ctx.pageName)));
        onFailure(this);
        return false;
      }
      const resolvedName = page.title;
      if (response.redirects) {
        const origNs = new mw.Title(this.ctx.pageName).getNamespaceId();
        const newNs = new mw.Title(resolvedName).getNamespaceId();
        if (origNs !== newNs && !this.ctx.followCrossNsRedirect) {
          this.ctx.statusElement.error(this.ctx.pageName + uls("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + uls("，略过", "，略過"));
          onFailure(this);
          return false;
        }
        new Morebits.status(uls("信息", "資訊"), uls("从 ", "從 ") + this.ctx.pageName + uls(" 重定向到 ", " 重新導向到 ") + resolvedName);
      }
      this.ctx.pageName = resolvedName;
    } else {
      this.ctx.statusElement.error(uls("不能解析页面的重定向：", "不能解析頁面的重新導向：") + this.ctx.pageName);
      onFailure(this);
      ++Morebits.wiki.numberOfActionsLeft;
      return false;
    }
    return true;
  };
  /**
   * Determine whether we should provide a watchlist expiry.  Will not
   * do so if the page is currently permanently watched, or the current
   * expiry is *after* the new, provided expiry.  Only handles strings
   * recognized by {@link Morebits.date} or relative timeframes with
   * unit it can process.  Relies on the fact that fnCanUseMwUserToken
   * requires page loading if a watchlistexpiry is provided, so we are
   * ensured of knowing the watch status by the use of this.
   *
   * @returns {boolean}
   */
  fnApplyWatchlistExpiry = () => {
    if (this.ctx.watchlistExpiry) {
      if (!this.ctx.watched || Morebits.string.isInfinity(String(this.ctx.watchlistExpiry))) {
        return true;
      } else if (typeof this.ctx.watched === "string") {
        let newExpiry;
        const rel = String(this.ctx.watchlistExpiry).split(" ");
        try {
          var _rel$, _rel$2;
          newExpiry = new Morebits.date().add((_rel$ = rel[0]) !== null && _rel$ !== void 0 ? _rel$ : "", (_rel$2 = rel[1]) !== null && _rel$2 !== void 0 ? _rel$2 : "");
        } catch {
          newExpiry = new Morebits.date(this.ctx.watchlistExpiry);
        }
        if (newExpiry.isValid()) {
          if (newExpiry.isAfter(new Morebits.date(this.ctx.watched))) {
            return true;
          }
        } else {
          return true;
        }
      }
    }
    return false;
  };
  // callback from saveApi.post()
  fnSaveSuccess = () => {
    this.ctx.editMode = "all";
    const response = this.ctx.saveApi.getResponse();
    if (response.edit.result === "Success") {
      const link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(this.ctx.pageName));
      link.appendChild(document.createTextNode(this.ctx.pageName));
      this.ctx.statusElement.info(["完成（", link, "）"]);
      if (this.ctx.onSaveSuccess) {
        this.ctx.onSaveSuccess(this);
      }
      return;
    }
    if (response.edit.captcha) {
      this.ctx.statusElement.error(uls("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
    } else {
      this.ctx.statusElement.error(uls("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
    }
    ++Morebits.wiki.numberOfActionsLeft;
    this.ctx.onSaveFailure(this);
  };
  // callback from saveApi.post()
  fnSaveError = () => {
    const errorCode = this.ctx.saveApi.getErrorCode();
    if (errorCode === "editconflict" && this.ctx.conflictRetries++ < this.ctx.maxConflictRetries) {
      const purgeQuery = {
        action: "purge",
        titles: this.ctx.pageName
        // redirects are already resolved
      };
      const purgeApi = new Morebits.wiki.api(uls("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
        --Morebits.wiki.numberOfActionsLeft;
        this.ctx.statusElement.info(uls("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
        if (this.fnCanUseMwUserToken("edit")) {
          this.ctx.saveApi.post();
        } else {
          this.ctx.loadApi.post();
        }
      }, this.ctx.statusElement);
      purgeApi.post();
    } else if ((errorCode === null || errorCode === void 0) && this.ctx.retries++ < this.ctx.maxRetries) {
      this.ctx.statusElement.info(uls("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
      --Morebits.wiki.numberOfActionsLeft;
      this.sleep(2e3).then(() => {
        this.ctx.saveApi.post();
      });
    } else {
      const response = this.ctx.saveApi.getResponse();
      const errorData = response.error || // bc error format
      response.errors[0].data;
      switch (errorCode) {
        case "protectedpage":
          this.ctx.statusElement.error(uls("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
          break;
        case "abusefilter-disallowed":
          this.ctx.statusElement.error(uls("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + uls("”阻止。若您认为您的该次编辑是有意义的，请至 Qiuwen_talk:管理员告示板 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Qiuwen_talk:管理員告示板 提報。"));
          break;
        case "abusefilter-warning":
          this.ctx.statusElement.error([uls("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, uls("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
          break;
        case "spamblacklist": {
          const [spam] = errorData.spamblacklist.matches;
          this.ctx.statusElement.error(uls("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + uls(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
          break;
        }
        default:
          this.ctx.statusElement.error(uls("不能保存修改：", "不能儲存修改：") + this.ctx.saveApi.getErrorText());
      }
      this.ctx.editMode = "all";
      if (this.ctx.onSaveFailure) {
        this.ctx.onSaveFailure(this);
      }
    }
  };
  isTextRedirect = (text) => {
    if (!text) {
      return false;
    }
    return Morebits.l10n.redirectTagAliases.some((tag) => {
      return new RegExp("^\\s*".concat(tag, "\\W"), "i").test(text);
    });
  };
  fnLookupCreationSuccess = () => {
    const response = this.ctx.lookupCreationApi.getResponse().query;
    if (!this.fnCheckPageName(response, this.ctx.onLookupCreationFailure)) {
      return;
    }
    const rev = response.pages[0].revisions && response.pages[0].revisions[0];
    if (!rev) {
      this.ctx.statusElement.error(uls("无法找到", "無法找到") + this.ctx.pageName + uls("的任何修订版本", "的任何修訂版本"));
      this.ctx.onLookupCreationFailure(this);
      return;
    }
    if (!this.ctx.lookupNonRedirectCreator || !this.isTextRedirect(rev.content)) {
      this.ctx.creator = rev.user;
      if (!this.ctx.creator) {
        this.ctx.statusElement.error(uls("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
      this.ctx.timestamp = rev.timestamp;
      if (!this.ctx.timestamp) {
        this.ctx.statusElement.error(uls("无法获取页面创建时间", "無法取得頁面建立時間"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
      this.ctx.statusElement.info(uls("已获取页面创建信息", "已取得頁面建立資訊"));
      this.ctx.onLookupCreationSuccess(this);
    } else {
      this.ctx.lookupCreationApi.query["rvlimit"] = 50;
      this.ctx.lookupCreationApi.query["titles"] = this.ctx.pageName;
      this.ctx.lookupCreationApi = new Morebits.wiki.api(uls("获取页面创建信息", "取得頁面建立資訊"), this.ctx.lookupCreationApi.query, this.fnLookupNonRedirectCreator, this.ctx.statusElement, this.ctx.onLookupCreationFailure);
      this.ctx.lookupCreationApi.setParent(this);
      this.ctx.lookupCreationApi.post();
    }
  };
  fnLookupNonRedirectCreator = () => {
    const response = this.ctx.lookupCreationApi.getResponse().query;
    const revs = response.pages[0].revisions;
    var _iterator7 = _createForOfIteratorHelper(revs), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        const rev = _step7.value;
        if (!this.isTextRedirect(rev.content)) {
          this.ctx.creator = rev.user;
          this.ctx.timestamp = rev.timestamp;
          break;
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (!this.ctx.creator) {
      this.ctx.creator = revs[0].user;
      this.ctx.timestamp = revs[0].timestamp;
      if (!this.ctx.creator) {
        this.ctx.statusElement.error(uls("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
    }
    if (!this.ctx.timestamp) {
      this.ctx.statusElement.error(uls("无法获取页面创建时间", "無法取得頁面建立時間"));
      this.ctx.onLookupCreationFailure(this);
      return;
    }
    this.ctx.statusElement.info(uls("已获取页面创建信息", "已取得頁面建立資訊"));
    this.ctx.onLookupCreationSuccess(this);
  };
  /**
   * Common checks for action methods. Used for move, undelete, delete,
   * protect.
   *
   * @param {string} action - The action being checked.
   * @param {string} onFailure - Failure callback.
   * @returns {boolean}
   */
  fnPreflightChecks = (action, onFailure) => {
    if (!Morebits.userIsSysop && action !== "move") {
      this.ctx.statusElement.error(uls("无法对页面进行“", "無法對頁面進行「") + action + uls("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
      onFailure(this);
      return false;
    }
    if (!this.ctx.editSummary) {
      this.ctx.statusElement.error("Internal error: ".concat(action, " reason not set (use setEditSummary function)!"));
      onFailure(this);
      return false;
    }
    return true;
  };
  /**
   * Common checks for fnProcess functions (`fnProcessDelete`, `fnProcessMove`, etc.
   * Used for move, undelete, delete, protect.
   *
   * @param {string} action - The action being checked.
   * @param {string} onFailure - Failure callback.
   * @param {string} response - The response document from the API call.
   * @returns {boolean}
   */
  fnProcessChecks = (action, onFailure, response) => {
    const [{
      missing
    }] = response.pages;
    const actionMissing = missing && ["delete", "move"].includes(action);
    const protectMissing = action === "protect" && missing && (this.ctx.protectEdit || this.ctx.protectMove);
    const saltMissing = action === "protect" && !missing && this.ctx.protectCreate;
    if (actionMissing || protectMissing || saltMissing) {
      this.ctx.statusElement.error("".concat(uls("无法对页面进行“", "無法對頁面進行「") + action + uls("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : uls("已经", "已經")), "存在"));
      onFailure(this);
      return false;
    }
    let editprot;
    if (action === "undelete") {
      editprot = response.pages[0].protection.findLast((pr) => {
        return pr.type === "create" && pr.level === "sysop";
      });
    } else if (action === "delete" || action === "move") {
      editprot = response.pages[0].protection.findLast((pr) => {
        return pr.type === "edit" && pr.level === "sysop";
      });
    }
    if (editprot && !this.ctx.suppressProtectWarning && !confirm(uls("您即将对全保护页面“", "您即將對全保護頁面「") + this.ctx.pageName + (editprot.expiry === "infinity" ? uls("”（永久）", "」（永久）") : "".concat(uls("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + uls("”进行“", "」進行「") + action + uls("”操作", "」操作") + uls("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
      this.ctx.statusElement.error(uls("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
      onFailure(this);
      return false;
    }
    if (!response.tokens.csrftoken) {
      this.ctx.statusElement.error(uls("无法获取令牌。", "無法取得權杖。"));
      onFailure(this);
      return false;
    }
    return true;
  };
  fnProcessMove = () => {
    let pageTitle;
    let token;
    if (this.fnCanUseMwUserToken("move")) {
      token = mw.user.tokens.get("csrfToken");
      pageTitle = this.ctx.pageName;
    } else {
      const response = this.ctx.moveApi.getResponse().query;
      if (!this.fnProcessChecks("move", this.ctx.onMoveFailure, response)) {
        return;
      }
      token = response.tokens.csrftoken;
      const [page] = response.pages;
      pageTitle = page.title;
      this.ctx.watched = page.watchlistexpiry || page.watched || false;
    }
    const query = {
      action: "move",
      from: pageTitle,
      to: this.ctx.moveDestination,
      token,
      reason: this.ctx.editSummary,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    if (this.ctx.moveTalkPage) {
      query.movetalk = "true";
    }
    if (this.ctx.moveSubpages) {
      query.movesubpages = "true";
    }
    if (this.ctx.moveSuppressRedirect) {
      query.noredirect = "true";
    }
    this.ctx.moveProcessApi = new Morebits.wiki.api(uls("移动页面……", "移動頁面……"), query, this.ctx.onMoveSuccess, this.ctx.statusElement, this.ctx.onMoveFailure);
    this.ctx.moveProcessApi.setParent(this);
    this.ctx.moveProcessApi.post();
  };
  fnProcessPatrol = () => {
    const query = {
      action: "patrol",
      format: "json"
    };
    if (this.ctx.rcid) {
      query.rcid = this.ctx.rcid;
      query.token = mw.user.tokens.get("patrolToken");
    } else {
      const response = this.ctx.patrolApi.getResponse().query;
      if (!response.recentchanges[0].unpatrolled) {
        return;
      }
      const [{
        lastrevid
      }] = response.pages;
      if (!lastrevid) {
        return;
      }
      query.revid = lastrevid;
      const token = response.tokens.csrftoken;
      if (!token) {
        return;
      }
      query.token = token;
    }
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    const patrolStat = new Morebits.status(uls("标记页面为已巡查", "標記頁面為已巡查"));
    this.ctx.patrolProcessApi = new Morebits.wiki.api(uls("巡查页面……", "巡查頁面……"), query, null, patrolStat);
    this.ctx.patrolProcessApi.setParent(this);
    this.ctx.patrolProcessApi.post();
  };
  fnProcessDelete = () => {
    let pageTitle;
    let token;
    if (this.fnCanUseMwUserToken("delete")) {
      token = mw.user.tokens.get("csrfToken");
      pageTitle = this.ctx.pageName;
    } else {
      const response = this.ctx.deleteApi.getResponse().query;
      if (!this.fnProcessChecks("delete", this.ctx.onDeleteFailure, response)) {
        return;
      }
      token = response.tokens.csrftoken;
      const [page] = response.pages;
      pageTitle = page.title;
      this.ctx.watched = page.watchlistexpiry || page.watched || false;
    }
    const query = {
      action: "delete",
      title: pageTitle,
      token,
      reason: this.ctx.editSummary,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    this.ctx.deleteProcessApi = new Morebits.wiki.api(uls("删除页面……", "刪除頁面……"), query, this.ctx.onDeleteSuccess, this.ctx.statusElement, this.fnProcessDeleteError);
    this.ctx.deleteProcessApi.setParent(this);
    this.ctx.deleteProcessApi.post();
  };
  // callback from deleteProcessApi.post()
  fnProcessDeleteError = () => {
    const errorCode = this.ctx.deleteProcessApi.getErrorCode();
    if (errorCode === "internal_api_error_DBQueryError" && this.ctx.retries++ < this.ctx.maxRetries) {
      this.ctx.statusElement.info(uls("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
      --Morebits.wiki.numberOfActionsLeft;
      this.ctx.deleteProcessApi.post();
    } else if (errorCode === "missingtitle") {
      this.ctx.statusElement.error(uls("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
      if (this.ctx.onDeleteFailure) {
        this.ctx.onDeleteFailure.call(this, this.ctx.deleteProcessApi);
      }
    } else {
      this.ctx.statusElement.error(uls("无法删除页面：", "無法刪除頁面：") + this.ctx.deleteProcessApi.getErrorText());
      if (this.ctx.onDeleteFailure) {
        this.ctx.onDeleteFailure.call(this, this.ctx.deleteProcessApi);
      }
    }
  };
  fnProcessUndelete = () => {
    let pageTitle;
    let token;
    if (this.fnCanUseMwUserToken("undelete")) {
      token = mw.user.tokens.get("csrfToken");
      pageTitle = this.ctx.pageName;
    } else {
      const response = this.ctx.undeleteApi.getResponse().query;
      if (!this.fnProcessChecks("undelete", this.ctx.onUndeleteFailure, response)) {
        return;
      }
      token = response.tokens.csrftoken;
      const [page] = response.pages;
      pageTitle = page.title;
      this.ctx.watched = page.watchlistexpiry || page.watched || false;
    }
    const query = {
      action: "undelete",
      title: pageTitle,
      token,
      reason: this.ctx.editSummary,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    this.ctx.undeleteProcessApi = new Morebits.wiki.api(uls("还原页面……", "還原頁面……"), query, this.ctx.onUndeleteSuccess, this.ctx.statusElement, this.fnProcessUndeleteError);
    this.ctx.undeleteProcessApi.setParent(this);
    this.ctx.undeleteProcessApi.post();
  };
  // callback from undeleteProcessApi.post()
  fnProcessUndeleteError = () => {
    const errorCode = this.ctx.undeleteProcessApi.getErrorCode();
    if (errorCode === "internal_api_error_DBQueryError") {
      if (this.ctx.retries++ < this.ctx.maxRetries) {
        this.ctx.statusElement.info(uls("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        this.ctx.undeleteProcessApi.post();
      } else {
        this.ctx.statusElement.error(uls("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
        if (this.ctx.onUndeleteFailure) {
          this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi);
        }
      }
    } else if (errorCode === "cantundelete") {
      this.ctx.statusElement.error(uls("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
      if (this.ctx.onUndeleteFailure) {
        this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi);
      }
    } else {
      this.ctx.statusElement.error(uls("无法还原页面：", "無法還原頁面：") + this.ctx.undeleteProcessApi.getErrorText());
      if (this.ctx.onUndeleteFailure) {
        this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi);
      }
    }
  };
  fnProcessProtect = () => {
    const response = this.ctx.protectApi.getResponse().query;
    if (!this.fnProcessChecks("protect", this.ctx.onProtectFailure, response)) {
      return;
    }
    const token = response.tokens.csrftoken;
    const [page] = response.pages;
    const pageTitle = page.title;
    this.ctx.watched = page.watchlistexpiry || page.watched || false;
    const prs = response.pages[0].protection;
    let editprot;
    let moveprot;
    let createprot;
    var _iterator8 = _createForOfIteratorHelper(prs), _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
        const pr = _step8.value;
        if (pr.type === "edit" && !pr.source) {
          editprot = pr;
        } else if (pr.type === "move") {
          moveprot = pr;
        } else if (pr.type === "create") {
          createprot = pr;
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    if (!this.ctx.protectEdit && editprot) {
      this.ctx.protectEdit = {
        level: editprot.level,
        expiry: editprot.expiry
      };
    }
    if (!this.ctx.protectMove && moveprot) {
      this.ctx.protectMove = {
        level: moveprot.level,
        expiry: moveprot.expiry
      };
    }
    if (!this.ctx.protectCreate && createprot) {
      this.ctx.protectCreate = {
        level: createprot.level,
        expiry: createprot.expiry
      };
    }
    if (this.ctx.protectCascade === null) {
      this.ctx.protectCascade = !!prs.filter((pr) => {
        return pr.cascade;
      }).length;
    }
    if (this.ctx.protectCascade) {
      if ((!this.ctx.protectEdit || this.ctx.protectEdit.level !== "sysop" || !this.ctx.protectMove || this.ctx.protectMove.level !== "sysop") && !confirm(uls("您已对“", "您已對「") + this.ctx.pageName + uls("”启用了连锁保护", "」啟用了連鎖保護") + uls("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + uls("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
        this.ctx.statusElement.error(uls("连锁保护已取消。", "連鎖保護已取消。"));
        this.ctx.onProtectFailure(this);
        return;
      }
      this.ctx.protectEdit.level = "sysop";
      this.ctx.protectMove.level = "sysop";
    }
    const protections = [];
    const expirys = [];
    if (this.ctx.protectEdit) {
      protections[protections.length] = "edit=".concat(this.ctx.protectEdit.level);
      expirys[expirys.length] = this.ctx.protectEdit.expiry;
    }
    if (this.ctx.protectMove) {
      protections[protections.length] = "move=".concat(this.ctx.protectMove.level);
      expirys[expirys.length] = this.ctx.protectMove.expiry;
    }
    if (this.ctx.protectCreate) {
      protections[protections.length] = "create=".concat(this.ctx.protectCreate.level);
      expirys[expirys.length] = this.ctx.protectCreate.expiry;
    }
    const query = {
      action: "protect",
      title: pageTitle,
      token,
      protections: protections.join("|"),
      expiry: expirys.join("|"),
      reason: this.ctx.editSummary,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    if (this.ctx.protectCascade) {
      query.cascade = "true";
    }
    this.ctx.protectProcessApi = new Morebits.wiki.api(uls("保护页面……", "保護頁面……"), query, this.ctx.onProtectSuccess, this.ctx.statusElement, this.ctx.onProtectFailure);
    this.ctx.protectProcessApi.setParent(this);
    this.ctx.protectProcessApi.post();
  };
  sleep = (milliseconds) => {
    const deferred = $.Deferred();
    setTimeout(deferred.resolve, milliseconds);
    return deferred;
  };
};
Morebits.wiki.page = WikiPage;
var WikiPreview = class {
  previewbox;
  /**
   * Displays the preview box, and begins an asynchronous attempt
   * to render the specified wikitext.
   *
   * @param {string} wikitext - Wikitext to render; most things should work, including `subst:` and `~~~~`.
   * @param {string} [pageTitle] - Optional parameter for the page this should be rendered as being on, if omitted it is taken as the current page.
   * @param {string} [sectionTitle] - If provided, render the text as a new section using this as the title.
   * @returns {jQuery.promise}
   */
  beginRender;
  /** Hides the preview box and clears it. */
  closePreview;
  constructor(previewbox) {
    this.previewbox = previewbox;
    $(previewbox).addClass("morebits-previewbox").hide();
    this.beginRender = (wikitext2, pageTitle, sectionTitle) => {
      $(previewbox).show();
      const statusspan = document.createElement("span");
      previewbox.appendChild(statusspan);
      Morebits.status.init(statusspan);
      let pageName = mw.config.get("wgPageName");
      if (mw.config.get("wgPageContentModel") !== "wikitext") {
        pageName = "Draft:".concat(pageName);
      }
      const query = {
        action: "parse",
        prop: ["text", "modules"],
        pst: true,
        // PST = pre-save transform; this makes substitution work properly
        preview: true,
        text: wikitext2,
        title: pageTitle || pageName,
        disablelimitreport: true,
        disableeditsection: true,
        uselang: mw.config.get("wgUserLanguage"),
        // Use wgUserLanguage for preview
        format: "json"
      };
      if (sectionTitle) {
        query.section = "new";
        query.sectiontitle = sectionTitle;
      }
      const renderApi = new Morebits.wiki.api(uls("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(uls("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(uls("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
        return;
      }
      previewbox.innerHTML = html;
      mw.loader.load(response.parse.modulestyles);
      mw.loader.load(response.parse.modules);
      $(previewbox).find("a").attr("target", "_blank").attr("rel", "noopener noreferrer");
    };
    this.closePreview = () => {
      $(previewbox).empty().hide();
    };
  }
};
Morebits.wiki.preview = WikiPreview;
var parseTemplate = (text, start) => {
  start || (start = 0);
  const level = [];
  let count = -1;
  let unnamed = 0;
  let equals = -1;
  let current = "";
  const result = {
    name: "",
    parameters: {}
  };
  let key;
  let value;
  const findParam = (final) => {
    if (count === -1) {
      result.name = current.slice(2).trim();
      ++count;
    } else if (equals === -1) {
      const param = final ? current.slice(equals + 1, -2) : current;
      if (param) {
        result.parameters[++unnamed] = param;
        ++count;
      }
    } else {
      key = current.slice(0, Math.max(0, equals)).trim();
      value = final ? current.slice(equals + 1, -2).trim() : current.slice(Math.max(0, equals + 1)).trim();
      result.parameters[key] = value;
      equals = -1;
    }
  };
  for (let i = start; i < text.length; ++i) {
    const test3 = text.slice(i, i + 3);
    if (test3 === "{{{" || test3 === "}}}" && level.at(-1) === 3) {
      current += test3;
      i += 2;
      if (test3 === "{{{") {
        level[level.length] = 3;
      } else {
        level.pop();
      }
      continue;
    }
    const test2 = text.slice(i, i + 2);
    if (test2 === "{{" || test2 === "[[") {
      current += test2;
      ++i;
      if (test2 === "{{") {
        level[level.length] = 2;
      } else {
        level[level.length] = "wl";
      }
      continue;
    }
    if (test2 === "}}" && level.at(-1) === 2 || test2 === "]]" && level.at(-1) === "wl") {
      current += test2;
      ++i;
      level.pop();
      if (test2 === "}}" && level.length === 0) {
        findParam(true);
        break;
      }
      continue;
    }
    if (text.charAt(i) === "|" && level.length === 1) {
      findParam();
      current = "";
    } else if (equals === -1 && text.charAt(i) === "=" && level.length === 1) {
      equals = current.length;
      current += text.charAt(i);
    } else {
      current += text.charAt(i);
    }
  }
  return result;
};
var WikiTextPage = class {
  text;
  constructor(text) {
    this.text = text;
  }
  /**
   * Removes links to `link_target` from the page text.
   *
   * @param {string} linkTarget
   * @returns {Morebits.wikitext.page}
   */
  removeLink(linkTarget) {
    const mwTitle = mw.Title.newFromText(linkTarget);
    const namespaceID = mwTitle.getNamespaceId();
    const title = mwTitle.getMainText();
    let linkRegexString = "";
    if (namespaceID !== 0) {
      linkRegexString = "".concat(Morebits.namespaceRegex(namespaceID), ":");
    }
    linkRegexString += Morebits.pageNameRegex(title);
    const isFileOrCategory = [6, 14].includes(namespaceID);
    const colon = isFileOrCategory ? ":" : ":?";
    const simpleLinkRegex = new RegExp("\\[\\[".concat(colon, "(").concat(linkRegexString, ")\\]\\]"), "g");
    const pipedLinkRegex = new RegExp("\\[\\[".concat(colon).concat(linkRegexString, "\\|(.+?)\\]\\]"), "g");
    this.text = this.text.replace(simpleLinkRegex, "$1").replace(pipedLinkRegex, "$1");
    return this;
  }
  /**
   * Comments out images from page text; if used in a gallery, deletes the whole line.
   * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
   *
   * @param {string} image - Image name without `File:` prefix.
   * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
   * @returns {Morebits.wikitext.page}
   */
  commentOutImage(image, reason) {
    this.text = this.text.replace(/--!>/g, "-->");
    const unbinder = new Morebits.unbinder(this.text);
    unbinder.unbind("<!--", "-->");
    reason = reason ? "".concat(reason, ": ") : "";
    const imageRegexString = Morebits.pageNameRegex(image);
    const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
    const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, "[[", "]]");
    var _iterator9 = _createForOfIteratorHelper(allLinks), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        const allLink = _step9.value;
        if (linksRegex.test(allLink)) {
          const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
          unbinder.content = unbinder.content.replace(allLink, replacement);
          unbinder.unbind("<!--", "-->");
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    const galleryImageRegex = new RegExp("(^\\s*".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*(?:\\|.*?$|$))"), "mg");
    unbinder.content = unbinder.content.replace(galleryImageRegex, "<!-- ".concat(reason, "$1 -->"));
    unbinder.unbind("<!--", "-->");
    const freeImageRegex = new RegExp("(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:".concat(Morebits.namespaceRegex(6), ":\\s*)?").concat(imageRegexString, ")"), "mg");
    unbinder.content = unbinder.content.replace(freeImageRegex, "<!-- ".concat(reason, "$1 -->"));
    this.text = unbinder.rebind();
    return this;
  }
  /**
   * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
   *
   * @param {string} image - Image name without File: prefix.
   * @param {string} data - The display options.
   * @returns {Morebits.wikitext.page}
   */
  addToImageComment(image, data) {
    const imageRegexString = Morebits.pageNameRegex(image);
    const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
    const allLinks = Morebits.string.splitWeightedByKeys(this.text, "[[", "]]");
    var _iterator0 = _createForOfIteratorHelper(allLinks), _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
        let replacement = _step0.value;
        if (linksRegex.test(replacement)) {
          replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
          this.text = this.text.replace(replacement, replacement);
        }
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    const galleryRegex = new RegExp("^(\\s*".concat(imageRegexString, ".*?)\\|?(.*?)$"), "mg");
    const newtext = "$1|$2 ".concat(data);
    this.text = this.text.replace(galleryRegex, newtext);
    return this;
  }
  /**
   * Remove all transclusions of a template from page text.
   *
   * @param {string} template - Page name whose transclusions are to be removed,
   * include namespace prefix only if not in template namespace.
   * @returns {Morebits.wikitext.page}
   */
  removeTemplate(template) {
    const templateRegexString = Morebits.pageNameRegex(template);
    const linksRegex = new RegExp("\\{\\{(?:".concat(Morebits.namespaceRegex(10), ":)?\\s*").concat(templateRegexString, "\\s*[\\|(?:\\}\\})]"));
    const allTemplates = Morebits.string.splitWeightedByKeys(this.text, "{{", "}}", ["{{{", "}}}"]);
    var _iterator1 = _createForOfIteratorHelper(allTemplates), _step1;
    try {
      for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
        const allTemplate = _step1.value;
        if (linksRegex.test(allTemplate)) {
          this.text = this.text.replace(allTemplate, "");
        }
      }
    } catch (err) {
      _iterator1.e(err);
    } finally {
      _iterator1.f();
    }
    return this;
  }
  /**
   * Smartly insert a tag atop page text but after specified templates,
   * such as hatnotes, short description, or deletion and protection templates.
   * Notably, does *not* insert a newline after the tag.
   *
   * @param {string} tag - The tag to be inserted.
   * @param {string|string[]} regex - Templates after which to insert tag,
   * given as either as a (regex-valid) string or an array to be joined by pipes.
   * @param {string} [flags=i] - Regex flags to apply.  `''` to provide no flags;
   * other falsey values will default to `i`.
   * @param {string|string[]} [preRegex] - Optional regex string or array to match
   * before any template matches (i.e. before `{{`), such as html comments.
   * @returns {Morebits.wikitext.page}
   */
  insertAfterTemplates(tag, regex, flags, preRegex) {
    if (tag === void 0) {
      throw new TypeError("No tag provided");
    }
    if (regex === void 0 || !regex.length) {
      throw new Error("No regex provided");
    } else if (Array.isArray(regex)) {
      regex = regex.join("|");
    }
    if (typeof flags !== "string") {
      flags = "i";
    }
    if (!preRegex || !preRegex.length) {
      preRegex = "";
    } else if (Array.isArray(preRegex)) {
      preRegex = preRegex.join("|");
    }
    this.text = this.text.replace(new RegExp(
      // leading whitespace
      // capture template(s)
      // Pre-template regex, such as leading html comments
      // begin template format
      // Template regex
      // end main template name, optionally with a number
      // Probably remove the (?:) though
      // template parameters
      // end template format
      // end capture
      // trailing whitespace
      "^\\s*(?:((?:\\s*".concat(
        // Pre-template regex, such as leading html comments
        preRegex,
        "|\\{\\{\\s*(?:"
      ).concat(
        // Template regex
        regex,
        ")\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?"
      ),
      flags
    ), "$1".concat(tag));
    return this;
  }
  /**
   * Get the manipulated wikitext.
   *
   * @returns {string}
   */
  getText() {
    return this.text;
  }
};
var wikitext = {
  parseTemplate,
  page: WikiTextPage
};
Morebits.wikitext = wikitext;
var UserspaceLogger = class {
  /**
   * The text to prefix the log with upon creation, defaults to empty.
   *
   * @type {string}
   */
  initialText;
  /**
   * The header level to use for months, defaults to 3 (`===`).
   *
   * @type {number}
   */
  headerLevel;
  changeTags;
  /**
   * Log the entry.
   *
   * @param {string} logText - Doesn't include leading `#` or `*`.
   * @param {string} summaryText - Edit summary.
   * @returns {JQuery.Promise}
   */
  log;
  constructor(logPageName) {
    if (!logPageName) {
      throw new Error("no log page name specified");
    }
    this.initialText = "";
    this.headerLevel = 3;
    this.changeTags = "";
    this.log = (logText, summaryText) => {
      const def = $.Deferred();
      if (!logText) {
        return def.reject();
      }
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), uls("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
      page.load((pageobj) => {
        var _pageobj$getLoadTime;
        let text = pageobj.getPageText() || this.initialText;
        const date = new Morebits.date((_pageobj$getLoadTime = pageobj.getLoadTime()) !== null && _pageobj$getLoadTime !== void 0 ? _pageobj$getLoadTime : "");
        if (!date.monthHeaderRegex().exec(text)) {
          text += "\n\n".concat(date.monthHeader(this.headerLevel));
        }
        pageobj.setPageText("".concat(text, "\n").concat(logText));
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(this.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.save(def.resolve, def.reject);
      });
      return def;
    };
  }
};
Morebits.userspaceLogger = UserspaceLogger;
var Status = class _Status {
  stat = null;
  statRaw = null;
  text;
  textRaw;
  type;
  target;
  node;
  linked = false;
  constructor(text, stat, type) {
    this.textRaw = text;
    this.text = Morebits.createHtml(text);
    this.type = type || "status";
    this.generate();
    if (stat) {
      this.update(stat, type);
    }
  }
  /**
   * Specify an area for status message elements to be added to.
   *
   * @memberof Morebits.status
   * @param {HTMLElement} root - Usually a div element.
   * @throws {TypeError} If `root` is not an `HTMLElement`.
   */
  static init(root) {
    if (!(root instanceof Element)) {
      throw new TypeError("object not an instance of Element");
    }
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild);
    }
    Morebits.status.root = root;
    Morebits.status.errorEvent = null;
  }
  static root = null;
  /**
   * @memberof Morebits.status
   * @param {Function} handler - Function to execute on error.
   * @throws {TypeError} When `handler` is not a function.
   */
  static onError(handler) {
    if (typeof handler === "function") {
      Morebits.status.errorEvent = handler;
    } else {
      throw new TypeError("Morebits.status.onError: handler is not a function");
    }
  }
  static errorEvent = null;
  /** Add the status element node to the DOM. */
  link() {
    if (!this.linked && Morebits.status.root) {
      Morebits.status.root.appendChild(this.node);
      this.linked = true;
    }
  }
  /** Remove the status element node from the DOM. */
  unlink() {
    if (this.linked) {
      Morebits.status.root.removeChild(this.node);
      this.linked = false;
    }
  }
  /**
   * Update the status.
   *
   * @param {string} status - Part of status message after colon.
   * @param {string} type - 'status' (blue), 'info' (green), 'warn'
   * (red), or 'error' (bold red).
   */
  update(status, type) {
    this.statRaw = status;
    this.stat = Morebits.createHtml(status);
    if (type) {
      this.type = type;
      if (type === "error") {
        Morebits.wiki.numberOfActionsLeft = 1e3;
        if (Morebits.status.errorEvent) {
          Morebits.status.errorEvent();
        }
        console.error("[Morebits] ".concat(this.textRaw, ": ").concat(this.statRaw));
      }
    }
    this.render();
  }
  /** Produce the html for first part of the status message. */
  generate() {
    this.node = document.createElement("div");
    this.node.appendChild(document.createElement("span")).appendChild(this.text);
    this.node.appendChild(document.createElement("span")).appendChild(document.createTextNode(": "));
    this.target = this.node.appendChild(document.createElement("span"));
    this.target.appendChild(document.createTextNode(""));
  }
  /** Complete the html, for the second part of the status message. */
  render() {
    this.node.className = "morebits_status_".concat(this.type);
    while (this.target.hasChildNodes()) {
      this.target.removeChild(this.target.firstChild);
    }
    this.target.appendChild(this.stat);
    this.link();
  }
  status(status) {
    this.update(status, "status");
  }
  info(status) {
    this.update(status, "info");
  }
  warn(status) {
    this.update(status, "warn");
  }
  error(status) {
    this.update(status, "error");
  }
  /**
   * @memberof Morebits.status
   * @param {string} text - Before colon
   * @param {string} status - After colon
   * @returns {Morebits.status} - `status`-type (blue)
   */
  static status(text, status) {
    return new _Status(text, status);
  }
  /**
   * @memberof Morebits.status
   * @param {string} text - Before colon
   * @param {string} status - After colon
   * @returns {Morebits.status} - `info`-type (green)
   */
  static info(text, status) {
    return new _Status(text, status, "info");
  }
  /**
   * @memberof Morebits.status
   * @param {string} text - Before colon
   * @param {string} status - After colon
   * @returns {Morebits.status} - `warn`-type (red)
   */
  static warn(text, status) {
    return new _Status(text, status, "warn");
  }
  /**
   * @memberof Morebits.status
   * @param {string} text - Before colon
   * @param {string} status - After colon
   * @returns {Morebits.status} - `error`-type (bold red)
   */
  static error(text, status) {
    return new _Status(text, status, "error");
  }
  /**
   * For the action complete message at the end, create a status line without
   * a colon separator.
   *
   * @memberof Morebits.status
   * @param {string} text
   */
  static actionCompleted(text) {
    const node = document.createElement("div");
    node.appendChild(document.createElement("b")).appendChild(document.createTextNode(text));
    node.className = "morebits_status_info morebits_action_complete";
    if (Morebits.status.root) {
      Morebits.status.root.appendChild(node);
    }
  }
  /**
   * Display the user's rationale, comments, etc. Back to them after a failure,
   * so that they may re-use it.
   *
   * @memberof Morebits.status
   * @param {string} comments
   * @param {string} message
   */
  static printUserText(comments, message) {
    const p = document.createElement("p");
    p.innerHTML = message;
    const div = document.createElement("div");
    div.className = "morebits-usertext";
    div.style.marginTop = "0";
    div.style.whiteSpace = "pre-wrap";
    div.textContent = comments;
    p.appendChild(div);
    Morebits.status.root.appendChild(p);
  }
};
Morebits.status = Status;
Morebits.htmlNode = (type, content, color) => {
  const node = document.createElement(type);
  if (color) {
    node.style.color = color;
  }
  node.appendChild(document.createTextNode(content));
  return node;
};
Morebits.checkboxShiftClickSupport = (jQuerySelector, jQueryContext) => {
  let lastCheckbox = null;
  const clickHandler = function clickHandler2(event) {
    const thisCb = this;
    if (event.shiftKey && lastCheckbox !== null) {
      const cbs = $(jQuerySelector, jQueryContext).toArray();
      let index = -1;
      let lastIndex = -1;
      let i;
      for (i = 0; i < cbs.length; i++) {
        if (cbs[i] === thisCb) {
          index = i;
          if (lastIndex > -1) {
            break;
          }
        }
        if (cbs[i] === lastCheckbox) {
          lastIndex = i;
          if (index > -1) {
            break;
          }
        }
      }
      if (index > -1 && lastIndex > -1) {
        const endState = thisCb.checked;
        let start;
        let finish;
        if (index < lastIndex) {
          start = index + 1;
          finish = lastIndex;
        } else {
          start = lastIndex;
          finish = index - 1;
        }
        for (i = start; i <= finish; i++) {
          if (cbs[i].checked !== endState) {
            cbs[i].click();
          }
        }
      }
    }
    lastCheckbox = thisCb;
    return true;
  };
  $(jQuerySelector, jQueryContext).on("click", clickHandler);
};
var BatchOperation = class {
  ctx;
  constructor(currentAction) {
    this.ctx = {
      // backing fields for public properties
      pageList: null,
      options: {
        chunkSize: 50,
        preserveIndividualStatusLines: false
      },
      // internal counters, etc.
      statusElement: new Morebits.status(currentAction || uls("执行批量操作", "執行批次操作")),
      worker: null,
      // function that executes for each item in pageList
      postFinish: null,
      // function that executes when the whole batch has been processed
      countStarted: 0,
      countFinished: 0,
      countFinishedSuccess: 0,
      currentChunkIndex: -1,
      pageChunks: [],
      running: false
    };
  }
  // shouldn't be needed by external users, but provided anyway for maximum flexibility
  getStatusElement = () => {
    return this.ctx.statusElement;
  };
  /**
   * Sets the list of pages to work on.
   *
   * @param {Array} pageList - Array of objects over which you wish to execute the worker function
   * This is usually the list of page names (strings).
   */
  setPageList = (pageList) => {
    this.ctx.pageList = pageList;
  };
  /**
   * Sets a known option.
   *
   * @param {string} optionName - Name of the option:
   * - chunkSize (integer): The size of chunks to break the array into
   * (default 50). Setting this to a small value (<5) can cause problems.
   * - preserveIndividualStatusLines (boolean): Keep each page's status
   * element visible when worker is complete?
   * @param {number|boolean} optionValue - Value to which the option is
   * to be set. Should be an integer for chunkSize and a boolean for
   * preserveIndividualStatusLines.
   */
  setOption = (optionName, optionValue) => {
    const options = this.ctx.options;
    options[optionName] = optionValue;
  };
  /**
   * Runs the first callback for each page in the list.
   * The callback must call workerSuccess when succeeding, or workerFailure when failing.
   * Runs the optional second callback when the whole batch has been processed.
   *
   * @param {Function} worker
   * @param {Function} [postFinish]
   */
  run = (worker, postFinish) => {
    if (this.ctx.running) {
      this.ctx.statusElement.error(uls("批量操作已在运行", "批次操作已在執行"));
      return;
    }
    this.ctx.running = true;
    this.ctx.worker = worker;
    this.ctx.postFinish = postFinish;
    this.ctx.countStarted = 0;
    this.ctx.countFinished = 0;
    this.ctx.countFinishedSuccess = 0;
    this.ctx.currentChunkIndex = -1;
    this.ctx.pageChunks = [];
    const total = this.ctx.pageList.length;
    if (!total) {
      this.ctx.statusElement.info(uls("没有指定页面", "沒有指定頁面"));
      this.ctx.running = false;
      if (this.ctx.postFinish) {
        this.ctx.postFinish();
      }
      return;
    }
    this.ctx.pageChunks = Morebits.array.chunk(this.ctx.pageList, this.ctx.options.chunkSize);
    Morebits.wiki.addCheckpoint();
    this.ctx.statusElement.status("0%");
    this.fnStartNewChunk();
  };
  /**
   * To be called by worker before it terminates successfully.
   *
   * @param {(Morebits.wiki.page|Morebits.wiki.api|string)} arg -
   * This should be the `Morebits.wiki.page` or `Morebits.wiki.api` object used by worker
   * (for the adjustment of status lines emitted by them).
   * If no Morebits.wiki.* object is used (e.g. you're using `mw.Api()` or something else), and
   * `preserveIndividualStatusLines` option is on, give the page name (string) as argument.
   */
  workerSuccess = (arg) => {
    if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
      const statelem = arg.getStatusElement();
      if (this.ctx.options.preserveIndividualStatusLines) {
        const argWithPageInfo = arg;
        if (argWithPageInfo.getPageName || argWithPageInfo.pageName || argWithPageInfo.query && argWithPageInfo.query.title) {
          const pageName = argWithPageInfo.getPageName ? argWithPageInfo.getPageName() : argWithPageInfo.pageName || argWithPageInfo.query.title;
          statelem.info("完成（[[".concat(pageName, "]]）"));
        } else {
          statelem.info("完成");
        }
      } else {
        statelem.unlink();
      }
    } else if (typeof arg === "string" && this.ctx.options.preserveIndividualStatusLines) {
      new Morebits.status(arg, "完成（[[".concat(arg, "]]）"));
    }
    this.ctx.countFinishedSuccess++;
    this.fnDoneOne();
  };
  workerFailure = () => {
    this.fnDoneOne();
  };
  // private functions
  fnStartNewChunk = () => {
    const chunk = this.ctx.pageChunks[++this.ctx.currentChunkIndex];
    if (!chunk) {
      return;
    }
    this.ctx.countStarted += chunk.length;
    var _iterator10 = _createForOfIteratorHelper(chunk), _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
        const page = _step10.value;
        this.ctx.worker(page, this);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  };
  fnDoneOne = () => {
    this.ctx.countFinished++;
    const total = this.ctx.pageList.length;
    if (this.ctx.countFinished < total) {
      const progress = Math.round(100 * this.ctx.countFinished / total);
      this.ctx.statusElement.status("".concat(progress, "%"));
      if (this.ctx.countFinished >= this.ctx.countStarted - Math.max(this.ctx.options.chunkSize / 10, 2) && Math.floor(this.ctx.countFinished / this.ctx.options.chunkSize) > this.ctx.currentChunkIndex) {
        this.fnStartNewChunk();
      }
    } else if (this.ctx.countFinished === total) {
      const statusString = "完成（".concat(this.ctx.countFinishedSuccess, "/").concat(this.ctx.countFinished, "操作成功完成）");
      if (this.ctx.countFinishedSuccess < this.ctx.countFinished) {
        this.ctx.statusElement.warn(statusString);
      } else {
        this.ctx.statusElement.info(statusString);
      }
      if (this.ctx.postFinish) {
        this.ctx.postFinish();
      }
      Morebits.wiki.removeCheckpoint();
      this.ctx.running = false;
    } else {
      this.ctx.statusElement.warn("".concat(uls("完成（多执行了", "完成（多執行了") + (this.ctx.countFinished - total), "次）"));
      Morebits.wiki.removeCheckpoint();
      this.ctx.running = false;
    }
  };
};
Morebits.batchOperation = BatchOperation;
var SimpleWindow = class _SimpleWindow {
  content;
  buttons = [];
  height;
  hasFooterLinks = false;
  scriptName = null;
  frame;
  overlay = null;
  modal = false;
  static zIndexCounter = 200;
  static setButtonsEnabled = (enabled) => {
    const $body = $("body");
    $body.find(".morebits-dialog-buttons button").prop("disabled", !enabled);
  };
  constructor(width, height) {
    const content = document.createElement("div");
    this.content = content;
    content.className = "morebits-dialog-content";
    content.id = "morebits-dialog-content-".concat(Math.round(Math.random() * 1e15));
    this.height = height !== null && height !== void 0 ? height : 600;
    const widthNum = Math.min(window.innerWidth, Number.parseInt(String(width || 800), 10));
    this.frame = this.buildFrame();
    this.frame.style.width = "".concat(widthNum, "px");
    document.body.append(this.frame);
  }
  /** Build the dialog frame: titlebar (draggable), content and button pane. */
  buildFrame() {
    const frame = document.createElement("div");
    frame.className = "morebits-dialog";
    frame.tabIndex = -1;
    frame.style.display = "none";
    const titlebar = document.createElement("div");
    titlebar.className = "morebits-dialog-titlebar";
    const title = document.createElement("span");
    title.className = "morebits-dialog-title";
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "morebits-dialog-close";
    closeButton.setAttribute("aria-label", uls("关闭", "關閉"));
    closeButton.textContent = "×";
    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.close();
    });
    titlebar.append(title, closeButton);
    titlebar.addEventListener("mousedown", (event) => {
      if (event.button !== 0) {
        return;
      }
      const target = event.target;
      if (target instanceof Element && target.closest(".morebits-dialog-close")) {
        return;
      }
      event.preventDefault();
      const rect = this.frame.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const onMove = (moveEvent) => {
        this.frame.style.left = "".concat(moveEvent.clientX - offsetX, "px");
        this.frame.style.top = "".concat(moveEvent.clientY - offsetY, "px");
      };
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
    const buttonpane = document.createElement("div");
    buttonpane.className = "morebits-dialog-buttonpane";
    const buttonspan = document.createElement("span");
    buttonspan.className = "morebits-dialog-buttons";
    const linksspan = document.createElement("span");
    linksspan.className = "morebits-dialog-footerlinks";
    buttonpane.append(buttonspan, linksspan);
    frame.append(titlebar, this.content, buttonpane);
    frame.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    });
    return frame;
  }
  /**
   * Focuses the dialog. This might work, or on the contrary, it might not.
   *
   * @returns {Morebits.simpleWindow}
   */
  focus() {
    _SimpleWindow.zIndexCounter += 1;
    this.frame.style.zIndex = String(_SimpleWindow.zIndexCounter);
    if (this.overlay) {
      this.overlay.style.zIndex = String(_SimpleWindow.zIndexCounter - 1);
    }
    return this;
  }
  /**
   * Closes the dialog. If this is set as an event handler, it will stop the event
   * from doing anything more.
   *
   * @param {event} [event]
   * @returns {Morebits.simpleWindow}
   */
  close(event) {
    if (event) {
      event.preventDefault();
    }
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
    this.frame.remove();
    return this;
  }
  /**
   * Shows the dialog. Calling display() on a dialog that has previously been closed
   * might work, but it is not guaranteed.
   *
   * @returns {Morebits.simpleWindow}
   */
  display() {
    if (!this.frame.isConnected) {
      this.frame = this.buildFrame();
      const buttonspan = $(this.frame).find(".morebits-dialog-buttons").get(0);
      if (buttonspan) {
        if (this.buttons.length > 0) {
          $(buttonspan).empty().append(this.buttons);
          buttonspan.removeAttribute("data-empty");
        } else {
          buttonspan.setAttribute("data-empty", "data-empty");
        }
      }
      document.body.append(this.frame);
    }
    if (this.scriptName) {
      const titleSpan = $(this.frame).find(".morebits-dialog-title").get(0);
      $(this.frame).find(".morebits-dialog-scriptname").remove();
      const scriptnamespan = document.createElement("span");
      scriptnamespan.className = "morebits-dialog-scriptname";
      scriptnamespan.textContent = "".concat(this.scriptName, " · ");
      if (titleSpan) {
        $(titleSpan).prepend(scriptnamespan);
      }
    }
    if (this.modal && !this.overlay) {
      this.overlay = document.createElement("div");
      this.overlay.className = "morebits-dialog-overlay";
      document.body.append(this.overlay);
    }
    this.focus();
    this.frame.focus();
    if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
      this.frame.ranSetupTooltipsAlready = false;
      window.setupTooltips(this.frame);
    }
    this.center();
    this.setHeight(this.height);
    return this;
  }
  /** Center the dialog (horizontally and vertically, or at the top when requested). */
  center(positionTop = false) {
    const rect = this.frame.getBoundingClientRect();
    const left = Math.max(0, (window.innerWidth - rect.width) / 2);
    const top = positionTop ? 0 : Math.max(0, (window.innerHeight - rect.height) / 2);
    this.frame.style.left = "".concat(left, "px");
    this.frame.style.top = "".concat(top, "px");
  }
  /**
   * Sets the dialog title.
   *
   * @param {string} title
   * @returns {Morebits.simpleWindow}
   */
  setTitle(title) {
    const titleSpan = $(this.frame).find(".morebits-dialog-title").get(0);
    if (titleSpan) {
      titleSpan.textContent = title;
    }
    return this;
  }
  /**
   * Sets the script name, appearing as a prefix to the title to help users determine which
   * user script is producing which dialog. For instance, Twinkle modules set this to "Twinkle".
   *
   * @param {string} name
   * @returns {Morebits.simpleWindow}
   */
  setScriptName(name) {
    this.scriptName = name;
    return this;
  }
  /**
   * Sets the dialog width.
   *
   * @param {number} width
   * @returns {Morebits.simpleWindow}
   */
  setWidth(width) {
    this.frame.style.width = "".concat(width, "px");
    return this;
  }
  /**
   * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
   * but the content area will grow no larger than the height given here.
   *
   * @param {number} height
   * @returns {Morebits.simpleWindow}
   */
  setHeight(height) {
    this.height = height;
    if (this.frame.getBoundingClientRect().height > window.innerHeight) {
      this.frame.style.height = "".concat(window.innerHeight - 2, "px");
      this.center(true);
    } else {
      this.frame.style.height = "auto";
    }
    this.content.style.maxHeight = "".concat(Number.parseInt(String(this.height - 30), 10), "px");
    return this;
  }
  /**
   * Sets the content of the dialog to the given element node, usually from rendering
   * a {@link Morebits.quickForm}.
   * Re-enumerates the footer buttons, but leaves the footer links as they are.
   * Be sure to call this at least once before the dialog is displayed...
   *
   * @param {HTMLElement} content
   * @returns {Morebits.simpleWindow}
   */
  setContent(content) {
    this.purgeContent();
    this.addContent(content);
    return this;
  }
  /**
   * Adds the given element node to the dialog content.
   *
   * @param {HTMLElement} content
   * @returns {Morebits.simpleWindow}
   */
  addContent(content) {
    this.content.appendChild(content);
    const self = this;
    $(this.content).find('input[type="submit"], button[type="submit"]').each((_key, value) => {
      value.style.display = "none";
      const button = document.createElement("button");
      if (value.hasAttribute("value")) {
        var _value$getAttribute;
        button.textContent = (_value$getAttribute = value.getAttribute("value")) !== null && _value$getAttribute !== void 0 ? _value$getAttribute : "";
      } else if (value.textContent) {
        button.textContent = value.textContent;
      } else {
        button.textContent = "提交";
      }
      button.className = value.className || "submitButtonProxy";
      button.addEventListener("click", () => {
        value.click();
      }, false);
      self.buttons[self.buttons.length] = button;
    });
    const buttonspan = $(this.frame).find(".morebits-dialog-buttons").get(0);
    if (buttonspan) {
      if (this.buttons.length > 0) {
        $(buttonspan).empty().append(this.buttons);
        buttonspan.removeAttribute("data-empty");
      } else {
        buttonspan.setAttribute("data-empty", "data-empty");
      }
    }
    return this;
  }
  /**
   * Removes all contents from the dialog, barring any footer links.
   *
   * @returns {Morebits.simpleWindow}
   */
  purgeContent() {
    this.buttons = [];
    $(this.frame).find(".morebits-dialog-buttons").empty();
    while (this.content.hasChildNodes()) {
      const [firstChild] = this.content.childNodes;
      if (!firstChild) {
        break;
      }
      this.content.removeChild(firstChild);
    }
    return this;
  }
  /**
   * Adds a link in the bottom-right corner of the dialog.
   * This can be used to provide help or policy links.
   * For example, Twinkle's CSD module adds a link to the CSD policy page,
   * as well as a link to Twinkle's documentation.
   *
   * @param {string} text - Display text.
   * @param {string} wikiPage - Link target.
   * @param {boolean} [prep=false] - Set true to prepend rather than append.
   * @returns {Morebits.simpleWindow}
   */
  addFooterLink(text, wikiPage, prep) {
    const footerlinks = $(this.frame).find(".morebits-dialog-footerlinks");
    if (this.hasFooterLinks) {
      const bullet = document.createElement("span");
      bullet.textContent = " • ";
      if (prep) {
        footerlinks.prepend(bullet);
      } else {
        footerlinks.append(bullet);
      }
    }
    const link = document.createElement("a");
    link.setAttribute("href", mw.util.getUrl(wikiPage));
    link.setAttribute("title", wikiPage);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    link.textContent = text;
    if (prep) {
      footerlinks.prepend(link);
    } else {
      footerlinks.append(link);
    }
    this.hasFooterLinks = true;
    return this;
  }
  /**
   * Sets whether the window should be modal or not. Modal dialogs create
   * an overlay below the dialog but above other page elements. This
   * must be used (if necessary) before calling display().
   *
   * @param {boolean} [modal=false] - If set to true, other items on the
   * page will be disabled, i.e., cannot be interacted with.
   * @returns {Morebits.simpleWindow}
   */
  setModality(modal) {
    this.modal = modal;
    return this;
  }
};
Morebits.simpleWindow = SimpleWindow;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL3V0aWxzL3VzZVVscy50cyIsICJzcmMvbW9yZWJpdHMvbW9yZWJpdHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7d2dVTFN9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG4vKipcbiAqIEJyaWRnZSBmb3IgYHdnVUxTYCAoc2ltcGxpZmllZC90cmFkaXRpb25hbCBDaGluZXNlIGludGVyZmFjZSBzd2l0Y2gpXG4gKiBpbnNpZGUgVnVlIGNvbXBvbmVudHMuXG4gKlxuICogYHdnVUxTYCBpcyBwcm92aWRlZCBieSB0aGUgdGFyZ2V0IHdpa2kncyBnYWRnZXQgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdFxuICogZGVjbGFyZWQgYnkgdHlwZXMtbWVkaWF3aWtpLCBzbyBpdCBpcyBkZWNsYXJlZCBnbG9iYWxseSBoZXJlLiBUaGUgdmFyaWFudFxuICogaXMgZml4ZWQgYXQgcGFnZSBsb2FkIChzd2l0Y2hpbmcgdmFyaWFudHMgcmVsb2FkcyB0aGUgcGFnZSksIHNvIG5vXG4gKiByZWFjdGl2aXR5IGlzIHJlcXVpcmVkOiBjYWxsIGB1bHMoKWAgZHVyaW5nIGBzZXR1cCgpYC5cbiAqL1xuXG5leHBvcnQgY29uc3QgdWxzID0gKHNpbXBsaWZpZWQ6IHVua25vd24sIHRyYWRpdGlvbmFsOiB1bmtub3duKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHR5cGVvZiB3Z1VMUyA9PT0gJ2Z1bmN0aW9uJyA/IHdnVUxTKHNpbXBsaWZpZWQsIHRyYWRpdGlvbmFsKSA6IChzaW1wbGlmaWVkIGFzIHN0cmluZyk7XG59O1xuIiwgIi8qISBUd2lua2xlLmpzIC0gbW9yZWJpdHMudHMgKi9cblxuLyoqXG4gKiBBIGxpYnJhcnkgZnVsbCBvZiBsb3RzIG9mIGdvb2RuZXNzIGZvciB1c2VyIHNjcmlwdHMgb24gTWVkaWFXaWtpIHdpa2lzLlxuICpcbiAqIFRoZSBoaWdobGlnaHRzIGluY2x1ZGU6XG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gLSBtYWtlIGNhbGxzIHRvIHRoZSBNZWRpYVdpa2kgQVBJXG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IC0gbW9kaWZ5IHBhZ2VzIG9uIHRoZSB3aWtpIChlZGl0LCByZXZlcnQsIGRlbGV0ZSwgZXRjLilcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmRhdGV9IC0gZW5oYW5jZWQgZGF0ZSBvYmplY3QgcHJvY2Vzc2luZywgc29ydCBvZiBhIGxpZ2h0IG1vbWVudC5qc1xuICogLSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSAtIGdlbmVyYXRlIHF1aWNrIEhUTUwgZm9ybXMgb24gdGhlIGZseVxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSAtIGEgZHJhZ2dhYmxlIGRpYWxvZyB3aW5kb3cgaW1wbGVtZW50ZWQgd2l0aCBwbGFpbiBqUXVlcnksIHdpdGggYSBjdXN0b20gbG9vayBhbmQgZXh0cmEgZmVhdHVyZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gLSBhIHJvdWdoLWFuZC1yZWFkeSBzdGF0dXMgbWVzc2FnZSBkaXNwbGF5ZXIsIHVzZWQgYnkgdGhlIE1vcmViaXRzLndpa2kgY2xhc3Nlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHR9IC0gdXRpbGl0aWVzIGZvciBkZWFsaW5nIHdpdGggd2lraXRleHRcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0cmluZ30gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzXG4gKiAtIHtAbGluayBNb3JlYml0cy5hcnJheX0gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBhcnJheXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmlwfSAtIHV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogLSBUaGUgd2hvbGUgdGhpbmcgcmVsaWVzIG9uIGpRdWVyeS4gIEJ1dCBtb3N0IHdpa2lzIHNob3VsZCBwcm92aWRlIHRoaXMgYnkgZGVmYXVsdC5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0sIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9LCBhbmQge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gcmVseSBvbiB0aGUgXCJtb3JlYml0cy5jc3NcIiBmaWxlIGZvciB0aGVpciBzdHlsaW5nLlxuICogLSBUbyBjcmVhdGUgYSBnYWRnZXQgYmFzZWQgb24gbW9yZWJpdHMsIHVzZSB0aGlzIHN5bnRheCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCpHYWRnZXROYW1lW1Jlc291cmNlTG9hZGVyfGRlcGVuZGVuY2llcz1tZWRpYXdpa2kudXNlcixtZWRpYXdpa2kudXRpbCxtZWRpYXdpa2kuVGl0bGVdfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc3xHYWRnZXROYW1lLmpzYFxuICogLSBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGNvbmZpZ3VyZSBtb3JlYml0cyBhcyBhIGhpZGRlbiBnYWRnZXQgaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqbW9yZWJpdHNbUmVzb3VyY2VMb2FkZXJ8ZGVwZW5kZW5jaWVzPW1lZGlhd2lraS51c2VyLG1lZGlhd2lraS51dGlsLG1lZGlhd2lraS5UaXRsZXxoaWRkZW5dfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc2BcbiAqICAgICBhbmQgdGhlbiBsb2FkIGV4dC5nYWRnZXQubW9yZWJpdHMgYXMgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBuZXcgZ2FkZ2V0LlxuICpcbiAqIEFsbCB0aGUgc3R1ZmYgaGVyZSB3b3JrcyBvbiBhbGwgYnJvd3NlcnMgZm9yIHdoaWNoIE1lZGlhV2lraSBwcm92aWRlcyBKYXZhU2NyaXB0IHN1cHBvcnQuXG4gKlxuICogVGhpcyBsaWJyYXJ5IGlzIG1haW50YWluZWQgYnkgdGhlIG1haW50YWluZXJzIG9mIFR3aW5rbGUuXG4gKiBGb3IgcXVlcmllcywgc3VnZ2VzdGlvbnMsIGhlbHAsIGV0Yy4sIGhlYWQgdG8gW0hlbHA6VHdpbmtsZV0oaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9IOlRXKS5cbiAqIFRoZSBsYXRlc3QgZGV2ZWxvcG1lbnQgc291cmNlIGlzIGF2YWlsYWJsZSBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL3R3aW5rbGUvYmxvYi9tYXN0ZXIvbW9yZWJpdHMuanN8R2l0SHVifS5cbiAqXG4gKiBAbmFtZXNwYWNlIE1vcmViaXRzXG4gKi9cbmltcG9ydCAnLi9tb3JlYml0cy5sZXNzJztcbmltcG9ydCB7dWxzfSBmcm9tICcuL3V0aWxzL3VzZVVscyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0TW9yZWJpdHM6IE1vcmViaXRzTmFtZXNwYWNlO1xuXHR9XG59XG5cbi8qKiBJbnB1dCBhY2NlcHRlZCBieSB7QGxpbmsgTW9yZWJpdHMuY3JlYXRlSHRtbH06IGEgc3RyaW5nLCBhIE5vZGUsIG9yIGFuIGFycmF5IHRoZXJlb2YuICovXG50eXBlIE1vcmViaXRzSHRtbElucHV0ID0gc3RyaW5nIHwgTm9kZSB8IChzdHJpbmcgfCBOb2RlKVtdIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuLyoqIFRoZSBjYWxsYWJsZSB7QGxpbmsgTW9yZWJpdHMuY3JlYXRlSHRtbH0sIHdpdGgge0BsaW5rIE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzfSBhdHRhY2hlZC4gKi9cbnR5cGUgTW9yZWJpdHNDcmVhdGVIdG1sID0gKChpbnB1dDogTW9yZWJpdHNIdG1sSW5wdXQpID0+IERvY3VtZW50RnJhZ21lbnQpICYge1xuXHRyZW5kZXJXaWtpbGlua3M6ICh0ZXh0OiBzdHJpbmcpID0+IHN0cmluZztcbn07XG5cbi8qKlxuICogVGhlIHNoYXBlIG9mIHRoZSBnbG9iYWwgYE1vcmViaXRzYCBuYW1lc3BhY2UuXG4gKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgZGVjbGFyYXRpb24tbWVyZ2VkOiBlYWNoIHNlY3Rpb24gb2YgdGhpcyBmaWxlIGNvbnRyaWJ1dGVzXG4gKiB0aGUgbWVtYmVycyBpdCBkZWZpbmVzLlxuICovXG5pbnRlcmZhY2UgTW9yZWJpdHNOYW1lc3BhY2Uge1xuXHQvKiogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHMuICovXG5cdGwxMG46IHR5cGVvZiBsMTBuO1xuXHQvKiogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy4gKi9cblx0dXNlcklzSW5Hcm91cDogKGdyb3VwOiBzdHJpbmcpID0+IGJvb2xlYW47XG5cdC8qKiBIYXJkY29kZXMgd2hldGhlciB0aGUgdXNlciBpcyBhIHN5c29wLCB1c2VkIGEgbG90LiAqL1xuXHR1c2VySXNTeXNvcDogYm9vbGVhbjtcblx0LyoqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS4gKi9cblx0c2FuaXRpemVJUHY2OiAoYWRkcmVzczogc3RyaW5nKSA9PiBzdHJpbmcgfCBudWxsO1xuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IHBhZ2UgaXMgYSByZWRpcmVjdCBvciBzb2Z0IHJlZGlyZWN0LiAqL1xuXHRpc1BhZ2VSZWRpcmVjdDogKCkgPT4gYm9vbGVhbjtcblx0LyoqIEEgbm9ybWFsaXplZCAodW5kZXJzY29yZXMgY29udmVydGVkIHRvIHNwYWNlcykgdmVyc2lvbiBvZiB0aGUgYHdnUGFnZU5hbWVgIHZhcmlhYmxlLiAqL1xuXHRwYWdlTmFtZU5vcm06IHN0cmluZztcblx0LyoqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGEgcGFnZSBuYW1lLiAqL1xuXHRwYWdlTmFtZVJlZ2V4OiAocGFnZU5hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuXHQvKiogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuICovXG5cdGNyZWF0ZUh0bWw6IE1vcmViaXRzQ3JlYXRlSHRtbDtcblx0LyoqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcy4gKi9cblx0bmFtZXNwYWNlUmVnZXg6IChuYW1lc3BhY2VzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBNb3JlYml0cyA9IHt9IGFzIE1vcmViaXRzTmFtZXNwYWNlO1xud2luZG93Lk1vcmViaXRzID0gTW9yZWJpdHM7IC8vIGFsbG93IGdsb2JhbCBhY2Nlc3Ncbi8vIE5vIE1vcmViaXRzLmkxOG4gYXQgdGhpcyB0aW1lXG5cbi8qKlxuICogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHNcbiAqL1xuY29uc3QgbDEwbiA9IHtcblx0LyoqXG5cdCAqIExvY2FsIGFsaWFzZXMgZm9yIFwicmVkaXJlY3RcIiBtYWdpYyB3b3JkLlxuXHQgKiBDaGVjayB1c2luZyBhcGkucGhwP2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZtZXRhPXNpdGVpbmZvJmZvcm1hdHZlcnNpb249MiZzaXByb3A9bWFnaWN3b3Jkc1xuXHQgKi9cblx0cmVkaXJlY3RUYWdBbGlhc2VzOiBbJyNSRURJUkVDVCcsICcj6YeN5a6a5ZCRJ10sXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHN0cmluZyBhcyBhcmd1bWVudCBhbmQgY2hlY2tzIGlmIGl0IGlzIGEgdGltZXN0YW1wIG9yIG5vdFxuXHQgKiBJZiBub3QsIGl0IHJldHVybnMgbnVsbC4gSWYgeWVzLCBpdCByZXR1cm5zIGFuIGFycmF5IG9mIGludGVnZXJzXG5cdCAqIGluIHRoZSBmb3JtYXQgW3llYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGUsIHNlY29uZF1cblx0ICogd2hpY2ggY2FuIGJlIHBhc3NlZCB0byBEYXRlLlVUQygpXG5cdCAqL1xuXHRzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQ6IChzdHI6IHN0cmluZyk6IG51bWJlcltdIHwgbnVsbCA9PiB7XG5cdFx0Y29uc3Qgcmd4VVRDID0gLyhcXGR7NH0p5bm0KFxcZHsxLDJ9KeaciChcXGR7MSwyfSnml6UgXFwoLlxcKSAoXFxkezJ9KTooXFxkezJ9KSBcXChVVENcXCkvOyAvLyBZWVlZ5bm0TW9udGjmnIhEROaXpSAodykgSEg6bW0gKFVUQylcblx0XHRjb25zdCByZ3hDU1QgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKENTVFxcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoQ1NUKVxuXHRcdGNvbnN0IG1hdGNoID0gKHJneFVUQy5leGVjKHN0cikgPz8gcmd4Q1NULmV4ZWMoc3RyKSkgYXMgW3N0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmddIHwgbnVsbDtcblx0XHRjb25zdCBtYXRjaENTVCA9IHJneENTVC5leGVjKHN0cik7XG5cdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IG1vbnRoID0gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRocy5pbmRleE9mKG1hdGNoWzRdKTtcblx0XHRpZiAobW9udGggPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Ly8gLi4uLi4geWVhciAuLi4uIG1vbnRoIC4uLiBkYXRlIC4uLi4gaG91ciAuLi4gbWludXRlXG5cdFx0cmV0dXJuIG1hdGNoQ1NUXG5cdFx0XHQ/IFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pIC0gMSwgTnVtYmVyKG1hdGNoWzNdKSwgTnVtYmVyKG1hdGNoWzRdKSAtIDgsIE51bWJlcihtYXRjaFs1XSldXG5cdFx0XHQ6IFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pIC0gMSwgTnVtYmVyKG1hdGNoWzNdKSwgTnVtYmVyKG1hdGNoWzRdKSwgTnVtYmVyKG1hdGNoWzVdKV07XG5cdH0sXG59O1xuTW9yZWJpdHMubDEwbiA9IGwxMG47XG5cbi8qKlxuICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXAgLSBlLmcuIGBzeXNvcGAsIGBhdXRvY29uZmlybWVkYCwgZXRjLlxuICovXG5Nb3JlYml0cy51c2VySXNJbkdyb3VwID0gKGdyb3VwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0Y29uc3QgdXNlckdyb3VwcyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuXHRjb25zdCBnbG9iYWxHcm91cHMgPSAobXcuY29uZmlnLmdldCgnd2dHbG9iYWxHcm91cHMnKSBhcyBzdHJpbmdbXSB8IHVuZGVmaW5lZCkgPz8gW107XG5cdHJldHVybiB1c2VyR3JvdXBzLmluY2x1ZGVzKGdyb3VwKSB8fCBnbG9iYWxHcm91cHMuaW5jbHVkZXMoZ3JvdXApO1xufTtcblxuLyoqXG4gKiBIYXJkY29kZXMgd2hldGhlciB0aGUgdXNlciBpcyBhIHN5c29wLCB1c2VkIGEgbG90LlxuICovXG5Nb3JlYml0cy51c2VySXNTeXNvcCA9XG5cdE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N5c29wJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3FpdXdlbicpO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cbiAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cbiAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cbiAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cbiAqL1xuTW9yZWJpdHMuc2FuaXRpemVJUHY2ID0gKGFkZHJlc3MpID0+IHtcblx0Y29uc29sZS53YXJuKFxuXHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLnNhbml0aXplSVB2NiB3YXMgcmVuYW1lZCB0byBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYgaW4gRmVicnVhcnkgMjAyMSwgcGxlYXNlIHVzZSB0aGF0IGluc3RlYWQnXG5cdCk7XG5cdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBwYWdlIGlzIGEgcmVkaXJlY3Qgb3Igc29mdCByZWRpcmVjdC4gRmFpbHNcbiAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG4gKiBkZXRlY3QgTW9kdWxlOlJmRCwgd2l0aCB0aGUgc2FtZSBmYWlsdXJlIHBvaW50cy5cbiAqL1xuTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgPSAoKSA9PiB7XG5cdHJldHVybiAhIShcblx0XHRtdy5jb25maWcuZ2V0KCd3Z0lzUmVkaXJlY3QnKSB8fFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2Z0cmVkaXJlY3QnKSB8fFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtUmZEJykgfHxcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94LVJlZGlyZWN0X2NhdGVnb3J5X3NoZWxsJylcblx0KTtcbn07XG5cbi8qKlxuICogQSBub3JtYWxpemVkICh1bmRlcnNjb3JlcyBjb252ZXJ0ZWQgdG8gc3BhY2VzKSB2ZXJzaW9uIG9mIHRoZVxuICogYHdnUGFnZU5hbWVgIHZhcmlhYmxlLlxuICovXG5Nb3JlYml0cy5wYWdlTmFtZU5vcm0gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGEgcGFnZSBuYW1lLiAgQWNjb3VudHMgZm9yXG4gKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG4gKiBjaGFyYWN0ZXJzIGJlaW5nIGVzY2FwZWQuICBTZWUgYWxzbyB7QGxpbmsgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXh9LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRm9yIGEgcGFnZSBuYW1lIGBGb28gYmFyYCwgcmV0dXJucyB0aGUgc3RyaW5nIGBbRmZdb29bXyBdYmFyYC5cbiAqL1xuTW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRpZiAocGFnZU5hbWUgPT09ICcnKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGNvbnN0IGZpcnN0Q2hhciA9IHBhZ2VOYW1lLmNoYXJBdCgwKTtcblx0Y29uc3QgcmVtYWluZGVyID0gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChwYWdlTmFtZS5zbGljZSgxKSk7XG5cdGlmIChtdy5UaXRsZS5waHBDaGFyVG9VcHBlcihmaXJzdENoYXIpICE9PSBmaXJzdENoYXIudG9Mb3dlckNhc2UoKSkge1xuXHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHR9XG5cdHJldHVybiBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKGZpcnN0Q2hhcikgKyByZW1haW5kZXI7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHN0cmluZyBvciBhcnJheSBvZiBET00gbm9kZXMgaW50byBhbiBIVE1MIGZyYWdtZW50LlxuICogV2lraWxpbmsgc3ludGF4IChgW1suLi5dXWApIGlzIHRyYW5zZm9ybWVkIGludG8gSFRNTCBhbmNob3IuXG4gKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IGNyZWF0ZUh0bWwgPSAoKGlucHV0OiBNb3JlYml0c0h0bWxJbnB1dCk6IERvY3VtZW50RnJhZ21lbnQgPT4ge1xuXHRjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0aWYgKCFpbnB1dCkge1xuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fVxuXHRjb25zdCBlbGVtZW50cyA9IChbXSBhcyAoc3RyaW5nIHwgTm9kZSlbXSkuY29uY2F0KGlucHV0KTtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mICQucGFyc2VIVE1MKGNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzKGVsZW1lbnQpKSA/PyBbXSkge1xuXHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGZyYWdtZW50O1xufSkgYXMgTW9yZWJpdHNDcmVhdGVIdG1sO1xuXG5Nb3JlYml0cy5jcmVhdGVIdG1sID0gY3JlYXRlSHRtbDtcblxuLyoqXG4gKiBDb252ZXJ0cyB3aWtpbGlua3MgdG8gSFRNTCBhbmNob3IgdGFncy5cbiAqL1xuY3JlYXRlSHRtbC5yZW5kZXJXaWtpbGlua3MgPSAodGV4dCkgPT4ge1xuXHRjb25zdCB1YiA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0ZXh0KTtcblx0Ly8gRG9uJ3QgY29udmVydCB3aWtpbGlua3Mgd2l0aGluIGNvZGUgdGFncyBhcyB0aGV5J3JlIHVzZWQgZm9yIGRpc3BsYXlpbmcgd2lraS1jb2RlXG5cdHViLnVuYmluZCgnPGNvZGU+JywgJzwvY29kZT4nKTtcblx0dWIuY29udGVudCA9IHViLmNvbnRlbnQucmVwbGFjZSgvXFxbXFxbOj8oPzooW158XFxdXSs/KVxcfCk/KFteXFxdfF0rPylcXF1cXF0vZywgKF8sIHRhcmdldDogc3RyaW5nLCB0ZXh0Xzogc3RyaW5nKSA9PiB7XG5cdFx0dGFyZ2V0IHx8PSB0ZXh0Xztcblx0XHRyZXR1cm4gYDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0KX1cIiB0aXRsZT1cIiR7dGFyZ2V0LnJlcGxhY2UoXG5cdFx0XHQvXCIvZyxcblx0XHRcdCcmIzM0Oydcblx0XHQpfVwiPiR7dGV4dF99PC9hPmA7XG5cdH0pO1xuXHRyZXR1cm4gdWIucmViaW5kKCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcywgcmVnYXJkbGVzc1xuICogb2YgdGhlIGNhcGl0YWxpemF0aW9uIGFuZCB1bmRlcnNjb3Jlcy9zcGFjZXMuICBEb2Vzbid0IGluY2x1ZGUgdGhlIG9wdGlvbmFsXG4gKiBsZWFkaW5nIGA6YCwgYnV0IGlmIHRoZXJlJ3MgbW9yZSB0aGFuIG9uZSBpdGVtLCB3cmFwcyB0aGUgbGlzdCBpbiBhXG4gKiBub24tY2FwdHVyaW5nIGdyb3VwLiAgVGhpcyBtZWFucyB5b3UgY2FuIGRvIGBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNF0pICtcbiAqICc6JyArIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoJ1R3aW5rbGUnKWAgdG8gbWF0Y2ggYSBmdWxsIHBhZ2UuICBVc2VzXG4gKiB7QGxpbmsgTW9yZWJpdHMucGFnZU5hbWVSZWdleH0uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgJyg/OltGZl1bSWldW0xsXVtFZV18W0lpXVtNbV1bQWFdW0dnXVtFZV0pJ1xuICogTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzZdKVxuICogQHBhcmFtIHtudW1iZXJbXX0gbmFtZXNwYWNlcyAtIEFycmF5IG9mIG5hbWVzcGFjZSBudW1iZXJzLiAgVW51c2VkL2ludmFsaWRcbiAqIG5hbWVzcGFjZSBudW1iZXJzIGFyZSBzaWxlbnRseSBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJlZ2V4LXN1aXRhYmxlIHN0cmluZyBvZiBhbGwgbmFtZXNwYWNlIGFsaWFzZXMuXG4gKi9cbk1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4ID0gKG5hbWVzcGFjZXMpID0+IHtcblx0Y29uc3QgbmFtZXNwYWNlTGlzdCA9IChbXSBhcyBudW1iZXJbXSkuY29uY2F0KG5hbWVzcGFjZXMpO1xuXHRjb25zdCBhbGlhc2VzOiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgcmVnZXg6IHN0cmluZztcblx0Zm9yIChjb25zdCBbbmFtZSwgbnVtYmVyXSBvZiBPYmplY3QuZW50cmllcyhtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpKSkge1xuXHRcdGlmIChuYW1lc3BhY2VMaXN0LmluY2x1ZGVzKG51bWJlcikpIHtcblx0XHRcdC8vIE5hbWVzcGFjZXMgYXJlIGNvbXBsZXRlbHkgYWdub3N0aWMgYXMgdG8gY2FzZSxcblx0XHRcdC8vIGFuZCBhIHJlZ2V4IHN0cmluZyBpcyBtb3JlIHVzZWZ1bC9jb21wYXRpYmxlIHRoYW4gYSBSZWdFeHAgb2JqZWN0LFxuXHRcdFx0Ly8gc28gd2UgYWNjZXB0IGFueSBjYXNpbmcgZm9yIGFueSBsZXR0ZXIuXG5cdFx0XHRhbGlhc2VzW2FsaWFzZXMubGVuZ3RoXSA9IFsuLi5uYW1lXS5tYXAoKGNoYXIpID0+IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoY2hhcikpLmpvaW4oJycpO1xuXHRcdH1cblx0fVxuXHRzd2l0Y2ggKGFsaWFzZXMubGVuZ3RoKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmVnZXggPSAnJztcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVnZXggPSBhbGlhc2VzWzBdID8/ICcnO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmVnZXggPSBgKD86JHthbGlhc2VzLmpvaW4oJ3wnKX0pYDtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiByZWdleDtcbn07XG5cbi8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMucXVpY2tGb3JtICoqKioqKioqKioqKioqKiogKi9cbmludGVyZmFjZSBNb3JlYml0c05hbWVzcGFjZSB7XG5cdC8qKiBDcmVhdGlvbiBvZiBzaW1wbGUgYW5kIHN0YW5kYXJkIGZvcm1zIHdpdGhvdXQgbXVjaCBzcGVjaWZpYyBjb2RpbmcuICovXG5cdHF1aWNrRm9ybTogdHlwZW9mIFF1aWNrRm9ybTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgSFRNTEZvcm1FbGVtZW50IHtcblx0XHRuYW1lczogUmVjb3JkPHN0cmluZywgSFRNTElucHV0RWxlbWVudD47XG5cdFx0Z2V0Q2hlY2tlZDogKG5hbWU6IHN0cmluZywgdHlwZT86IHN0cmluZykgPT4gc3RyaW5nW107XG5cdFx0Z2V0VW5jaGVja2VkOiAobmFtZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSA9PiBzdHJpbmdbXTtcblx0fVxuXHRpbnRlcmZhY2UgSFRNTElucHV0RWxlbWVudCB7XG5cdFx0dmFsdWVzPzogc3RyaW5nO1xuXHRcdHN1Ymdyb3VwPzogSFRNTEVsZW1lbnQ7XG5cdFx0c2hvd24/OiBib29sZWFuO1xuXHRcdHN1Ymxpc3Q/OiBRdWlja0Zvcm1EYXRhO1xuXHRcdGFyZWE/OiBIVE1MRWxlbWVudDtcblx0XHRjb3VudGVyPzogbnVtYmVyO1xuXHRcdGxpc3Rub2RlPzogSFRNTEVsZW1lbnQ7XG5cdFx0aW5wdXRub2RlPzogSFRNTEVsZW1lbnQ7XG5cdFx0bW9yZWJ1dHRvbj86IEhUTUxFbGVtZW50O1xuXHR9XG5cdGludGVyZmFjZSBIVE1MT3B0aW9uRWxlbWVudCB7XG5cdFx0dmFsdWVzPzogc3RyaW5nO1xuXHR9XG5cdGludGVyZmFjZSBIVE1MRWxlbWVudCB7XG5cdFx0ZXh0cmE/OiB1bmtub3duO1xuXHRcdC8qKiBVc2VkIGJ5IG1vcmViaXRzLnF1aWNrRm9ybSBvbiBnZW5lcmF0ZWQgZWxlbWVudHMgKG1pcnJvcnMgdGhlIG5hdGl2ZSBgZGlzYWJsZWRgIG9mIGNvbmNyZXRlIGVsZW1lbnQgdHlwZXMpLiAqL1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0XHQvKiogVXNlZCBieSBtb3JlYml0cy5xdWlja0Zvcm0gdG8gY2FycnkgdGhlIGB2YWx1ZWAgb2YgZ2VuZXJhdGVkIGlucHV0cy9vcHRpb25zLiAqL1xuXHRcdHZhbHVlcz86IHN0cmluZztcblx0fVxufVxuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRpbmcgYSBxdWlja2Zvcm0gZWxlbWVudC4gU2hvdWxkIHNwZWNpZnkgb25lIG9mIHRoZSBhdmFpbGFibGVcbiAqIHR5cGVzIGZyb20gdGhlIGluZGV4IG9uIHtAbGluayBRdWlja0Zvcm1FbGVtZW50fSwgYXMgd2VsbCBhcyBhbnkgcmVsZXZhbnQgYW5kXG4gKiBhdmFpbGFibGUgYXR0cmlidXRlcy5cbiAqL1xuaW50ZXJmYWNlIFF1aWNrRm9ybURhdGEge1xuXHQvKiogVGhlIHR5cGUgb2YgdGhlIHF1aWNrZm9ybSBlbGVtZW50LCBlLmcuIGBmb3JtYCwgYGlucHV0YCwgYGNoZWNrYm94YCwgYHNlbGVjdGAsIC4uLiAqL1xuXHR0eXBlOiBzdHJpbmc7XG5cdC8qKiBHbG9iYWwgYXR0cmlidXRlOiBpZCAqL1xuXHRpZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqIEdsb2JhbCBhdHRyaWJ1dGU6IGNsYXNzTmFtZSAqL1xuXHRjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKiBHbG9iYWwgYXR0cmlidXRlOiBzdHlsZSAqL1xuXHRzdHlsZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqIEdsb2JhbCBhdHRyaWJ1dGU6IHRvb2x0aXAgKi9cblx0dG9vbHRpcD86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqIEdsb2JhbCBhdHRyaWJ1dGU6IGV4dHJhICovXG5cdGV4dHJhPzogdW5rbm93bjtcblx0LyoqIEdsb2JhbCBhdHRyaWJ1dGU6ICRkYXRhICovXG5cdCRkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQ7XG5cdC8qKiBHbG9iYWwgYXR0cmlidXRlOiBhZG1pbm9ubHkgKi9cblx0YWRtaW5vbmx5PzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gdGhlIHJlbGV2YW50IGV2ZW50LiAqL1xuXHRldmVudD86ICgoZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duKSB8IHVuZGVmaW5lZDtcblx0LyoqIFR5cGUgb2YgdGhlIGV2ZW50IChmb3IgYGZvcm1gIGVsZW1lbnRzKS4gKi9cblx0ZXZlbnRUeXBlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKiogTmFtZSBvZiB0aGUgZWxlbWVudC4gKi9cblx0bmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIExhYmVsIG9mIHRoZSBlbGVtZW50LiBgZGl2YCwgYHNlbGVjdGAsIGBmaWVsZGAsIGBjaGVja2JveGAvYHJhZGlvYCwgYGlucHV0YCxcblx0ICogYHRleHRhcmVhYCwgYGhlYWRlcmAsIGFuZCBgZHluaW5wdXRgIGNhbiBhY2NlcHQgYW4gYXJyYXkgb2YgaXRlbXMsIGFuZCB0aGVcblx0ICogbGFiZWwgaXRlbShzKSBjYW4gYmUgYEVsZW1lbnRgczsgYG9wdGlvbmAsIGBvcHRncm91cGAsIGBfZHluaW5wdXRfZWxlbWVudGAsXG5cdCAqIGBzdWJtaXRgLCBhbmQgYGJ1dHRvbmAgYWNjZXB0IG9ubHkgYSBzaW5nbGUgc3RyaW5nLlxuXHQgKi9cblx0bGFiZWw/OiBzdHJpbmcgfCAoc3RyaW5nIHwgTm9kZSlbXSB8IHVuZGVmaW5lZDtcblx0LyoqIFZhbHVlIG9mIHRoZSBlbGVtZW50LiAqL1xuXHR2YWx1ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqIExpc3Qgb2YgY2hpbGQgaXRlbXMgKGZvciBgc2VsZWN0YCwgYG9wdGdyb3VwYCwgYGNoZWNrYm94YCwgYHJhZGlvYCwgYG51bWJlcmApLiAqL1xuXHRsaXN0PzogUXVpY2tGb3JtRGF0YVtdIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKiogV2hldGhlciB0aGUgYHNlbGVjdGAgaXMgYSBtdWx0aXBsZSBzZWxlY3QuICovXG5cdG11bHRpcGxlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqIFNpemUgYXR0cmlidXRlIG9mIHRoZSBlbGVtZW50LiAqL1xuXHRzaXplPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXHQvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBkaXNhYmxlZC4gKi9cblx0ZGlzYWJsZWQ/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKiogV2hldGhlciB0aGUgYG9wdGlvbmAgaXMgc2VsZWN0ZWQuICovXG5cdHNlbGVjdGVkPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgaGlkZGVuLiAqL1xuXHRoaWRkZW4/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKiogV2hldGhlciB0aGUgYGNoZWNrYm94YC9gcmFkaW9gIChvciBpdHMgbGlzdCBpdGVtKSBpcyBjaGVja2VkLiAqL1xuXHRjaGVja2VkPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqIFN1Ymdyb3VwKHMpIG9mIGEgYGNoZWNrYm94YC9gcmFkaW9gIGl0ZW0uICovXG5cdHN1Ymdyb3VwPzogUXVpY2tGb3JtRGF0YSB8IFF1aWNrRm9ybURhdGFbXSB8IHVuZGVmaW5lZDtcblx0LyoqIFdoZXRoZXIgdG8gYWRkIHNoaWZ0LWNsaWNrIHN1cHBvcnQgZm9yIGBjaGVja2JveGAgbGlzdHMuICovXG5cdHNoaWZ0Q2xpY2tTdXBwb3J0PzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqIFBsYWNlaG9sZGVyIGF0dHJpYnV0ZS4gKi9cblx0cGxhY2Vob2xkZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKiBNYXhsZW5ndGggYXR0cmlidXRlLiAqL1xuXHRtYXhsZW5ndGg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cdC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkLiAqL1xuXHRyZXF1aXJlZD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIHJlYWRvbmx5LiAqL1xuXHRyZWFkb25seT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKiBNaW4gYXR0cmlidXRlIChmb3IgYG51bWJlcmAgYW5kIGBkeW5pbnB1dGApLiAqL1xuXHRtaW4/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cdC8qKiBNYXggYXR0cmlidXRlIChmb3IgYG51bWJlcmAgYW5kIGBkeW5pbnB1dGApLiAqL1xuXHRtYXg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cdC8qKiBTdGVwIGF0dHJpYnV0ZSAoZm9yIGBudW1iZXJgKS4gKi9cblx0c3RlcD86IG51bWJlciB8IHVuZGVmaW5lZDtcblx0LyoqIFN1YmxhYmVsIG9mIHRoZSBgZHluaW5wdXRgIHJvd3MuICovXG5cdHN1YmxhYmVsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKiogQ29scyBhdHRyaWJ1dGUgb2YgYSBgdGV4dGFyZWFgLiAqL1xuXHRjb2xzPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXHQvKiogUm93cyBhdHRyaWJ1dGUgb2YgYSBgdGV4dGFyZWFgLiAqL1xuXHRyb3dzPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXHQvLyBkeW5pbnB1dCBpbnRlcm5hbHMgKGBfZHluaW5wdXRfZWxlbWVudGApOlxuXHQvKiogQGludGVybmFsIFdoZXRoZXIgdGhlIGR5bmlucHV0IHJvdyBoYXMgYSBcInJlbW92ZVwiIGJ1dHRvbi4gKi9cblx0cmVtb3ZlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqIEBpbnRlcm5hbCBUaGUgXCJhZGRcIiBidXR0b24gb2YgdGhlIGR5bmlucHV0IGdyb3VwLiAqL1xuXHRtb3JlYnV0dG9uPzogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdC8qKiBAaW50ZXJuYWwgVGhlIGNvbnRhaW5lciBvZiB0aGUgZHluaW5wdXQgcm93cy4gKi9cblx0bGlzdG5vZGU/OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcbn1cblxuLyoqIEEgZm9ybSBjb250cm9sIChvciBsaXN0IG9mIGNvbnRyb2xzKSByZXRyaWV2ZWQgYnkgbmFtZSBmcm9tIGEgZm9ybS4gKi9cbnR5cGUgRm9ybUNvbnRyb2xPckxpc3QgPSBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQgfCBSYWRpb05vZGVMaXN0O1xuXG4vKipcbiAqIFRoZSBcImFkZFwiIGJ1dHRvbiBvZiBhIGBkeW5pbnB1dGAgZ3JvdXAsIGNhcnJ5aW5nIGJvb2trZWVwaW5nIHN0YXRlLlxuICpcbiAqIChgbWF4YCBpcyBvbWl0dGVkIGFuZCByZS1kZWNsYXJlZCBzaW5jZSBgSFRNTElucHV0RWxlbWVudC5tYXhgIGlzIGEgc3RyaW5nXG4gKiBhdHRyaWJ1dGUgcmVmbGVjdGlvbiwgd2hpbGUgZHluaW5wdXQgc3RvcmVzIGEgbnVtZXJpYyBsaW1pdCBoZXJlLilcbiAqL1xudHlwZSBEeW5pbnB1dE1vcmVCdXR0b24gPSBPbWl0PEhUTUxJbnB1dEVsZW1lbnQsICdtYXgnPiAmIHtcblx0bWF4OiBudW1iZXI7XG5cdGNvdW50ZXI6IG51bWJlcjtcblx0c3VibGlzdDogUXVpY2tGb3JtRGF0YTtcblx0YXJlYTogSFRNTEVsZW1lbnQ7XG59O1xuXG4vKiogVGhlIFwicmVtb3ZlXCIgYnV0dG9uIG9mIGEgYGR5bmlucHV0YCByb3cgZWxlbWVudC4gKi9cbnR5cGUgRHluaW5wdXRSZW1vdmVCdXR0b24gPSBIVE1MSW5wdXRFbGVtZW50ICYge1xuXHRpbnB1dG5vZGU6IEhUTUxFbGVtZW50O1xuXHRsaXN0bm9kZTogSFRNTEVsZW1lbnQ7XG5cdG1vcmVidXR0b246IER5bmlucHV0TW9yZUJ1dHRvbjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIHRoZSB0aGUgZm9ybS5cbiAqXG4gKiBJbmRleCB0byBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCB0eXBlczpcbiAqIC0gR2xvYmFsIGF0dHJpYnV0ZXM6IGlkLCBjbGFzc05hbWUsIHN0eWxlLCB0b29sdGlwLCBleHRyYSwgJGRhdGEsIGFkbWlub25seVxuICogLSBgc2VsZWN0YDogQSBjb21ibyBib3ggKGFrYSBkcm9wLWRvd24pLlxuICogICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIG11bHRpcGxlLCBzaXplLCBsaXN0LCBldmVudCwgZGlzYWJsZWRcbiAqICAtIGBvcHRpb25gOiBBbiBlbGVtZW50IGZvciBhIGNvbWJvIGJveC5cbiAqICAgICAgLSBBdHRyaWJ1dGVzOiB2YWx1ZSwgbGFiZWwsIHNlbGVjdGVkLCBkaXNhYmxlZFxuICogIC0gYG9wdGdyb3VwYDogQSBncm91cCBvZiBcIm9wdGlvblwicy5cbiAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbCwgbGlzdFxuICogIC0gYGZpZWxkYDogQSBmaWVsZHNldCAoYWthIGdyb3VwIGJveCkuXG4gKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG4gKiAgLSBgY2hlY2tib3hgOiBBIGNoZWNrYm94LiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG4gKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcbiAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuICogIC0gYHJhZGlvYDogQSByYWRpbyBidXR0b24uIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cbiAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuICogICAgICAtIEF0dHJpYnV0ZXMgKHdpdGhpbiBsaXN0KTogbmFtZSwgbGFiZWwsIHZhbHVlLCBjaGVja2VkLCBkaXNhYmxlZCwgZXZlbnQsIHN1Ymdyb3VwXG4gKiAgLSBgaW5wdXRgOiBBIHRleHQgaW5wdXQgYm94LlxuICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgc2l6ZSwgcGxhY2Vob2xkZXIsIG1heGxlbmd0aCwgZGlzYWJsZWQsIHJlcXVpcmVkLCByZWFkb25seSwgZXZlbnRcbiAqICAtIGBudW1iZXJgOiBBIG51bWJlciBpbnB1dCBib3guXG4gKiAgICAgIC0gQXR0cmlidXRlczogRXZlcnl0aGluZyB0aGUgdGV4dCBgaW5wdXRgIGhhcywgYXMgd2VsbCBhczogbWluLCBtYXgsIHN0ZXAsIGxpc3RcbiAqICAtIGBkeW5pbnB1dGA6IEEgc2V0IG9mIHRleHQgYm94ZXMgd2l0aCBcIlJlbW92ZVwiIGJ1dHRvbnMgYW5kIGFuIFwiQWRkXCIgYnV0dG9uLlxuICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtaW4sIG1heCwgc3VibGFiZWwsIHZhbHVlLCBzaXplLCBtYXhsZW5ndGgsIGV2ZW50XG4gKiAgLSBgaGlkZGVuYDogQW4gaW52aXNpYmxlIGZvcm0gZmllbGQuXG4gKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgdmFsdWVcbiAqICAtIGBoZWFkZXJgOiBBIGxldmVsIDUgaGVhZGVyLlxuICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsXG4gKiAgLSBgZGl2YDogQSBnZW5lcmljIHBsYWNlaG9sZGVyIGVsZW1lbnQgb3IgbGFiZWwuXG4gKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWxcbiAqICAtIGBzdWJtaXRgOiBBIHN1Ym1pdCBidXR0b24uIE1vcmViaXRzLnNpbXBsZVdpbmRvdyBtb3ZlcyB0aGVzZSB0byB0aGUgZm9vdGVyIG9mIHRoZSBkaWFsb2cuXG4gKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG4gKiAgLSBgYnV0dG9uYDogQSBnZW5lcmljIGJ1dHRvbi5cbiAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWQsIGV2ZW50XG4gKiAgLSBgdGV4dGFyZWFgOiBBIGJpZywgbXVsdGktbGluZSB0ZXh0IGJveC5cbiAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNvbHMsIHJvd3MsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHlcbiAqICAtIGBmcmFnbWVudGA6IEEgRG9jdW1lbnRGcmFnbWVudCBvYmplY3QuXG4gKiAgICAgIC0gTm8gYXR0cmlidXRlcywgYW5kIG5vIGdsb2JhbCBhdHRyaWJ1dGVzIGV4Y2VwdCBhZG1pbm9ubHkuXG4gKiBUaGVyZSBpcyBzb21lIGRpZmZlcmVuY2Ugb24gaG93IHR5cGVzIGhhbmRsZSB0aGUgYGxhYmVsYCBhdHRyaWJ1dGU6XG4gKiAtIGBkaXZgLCBgc2VsZWN0YCwgYGZpZWxkYCwgYGNoZWNrYm94YC9gcmFkaW9gLCBgaW5wdXRgLCBgdGV4dGFyZWFgLCBgaGVhZGVyYCwgYW5kIGBkeW5pbnB1dGAgY2FuIGFjY2VwdCBhbiBhcnJheSBvZiBpdGVtcyxcbiAqIGFuZCB0aGUgbGFiZWwgaXRlbShzKSBjYW4gYmUgYEVsZW1lbnRgcy5cbiAqIC0gYG9wdGlvbmAsIGBvcHRncm91cGAsIGBfZHluaW5wdXRfZWxlbWVudGAsIGBzdWJtaXRgLCBhbmQgYGJ1dHRvbmAgYWNjZXB0IG9ubHkgYSBzaW5nbGUgc3RyaW5nLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtRdWlja0Zvcm1EYXRhfSBkYXRhIC0gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcXVpY2tmb3JtIGVsZW1lbnQuIFNob3VsZFxuICogc3BlY2lmeSBvbmUgb2YgdGhlIGF2YWlsYWJsZSB0eXBlcyBmcm9tIHRoZSBpbmRleCBhYm92ZSwgYXMgd2VsbCBhcyBhbnlcbiAqIHJlbGV2YW50IGFuZCBhdmFpbGFibGUgYXR0cmlidXRlcy5cbiAqIEBleGFtcGxlIG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG4gKiAgICAgbmFtZTogJ3RhcmdldCcsXG4gKiAgICAgdHlwZTogJ2lucHV0JyxcbiAqICAgICBsYWJlbDogJ1lvdXIgdGFyZ2V0OicsXG4gKiAgICAgdG9vbHRpcDogJ0VudGVyIHlvdXIgdGFyZ2V0LiBSZXF1aXJlZC4nLFxuICogICAgIHJlcXVpcmVkOiB0cnVlXG4gKiB9KTtcbiAqL1xuY2xhc3MgUXVpY2tGb3JtRWxlbWVudCB7XG5cdGRhdGE6IFF1aWNrRm9ybURhdGE7XG5cdGNoaWxkczogUXVpY2tGb3JtRWxlbWVudFtdO1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRzdGF0aWMgaWQgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IFF1aWNrRm9ybURhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuY2hpbGRzID0gW107XG5cdH1cblxuXHQvKipcblx0ICogQXBwZW5kcyBhbiBlbGVtZW50IHRvIGN1cnJlbnQgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtRdWlja0Zvcm1EYXRhIHwgUXVpY2tGb3JtRWxlbWVudH0gZGF0YSAtIEEgcXVpY2tGb3JtIGVsZW1lbnQgb3IgdGhlIG9iamVjdCByZXF1aXJlZCB0b1xuXHQgKiBjcmVhdGUgdGhlIHF1aWNrRm9ybSBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7UXVpY2tGb3JtRWxlbWVudH0gVGhlIHNhbWUgZWxlbWVudCBwYXNzZWQgaW4uXG5cdCAqL1xuXHRhcHBlbmQoZGF0YTogUXVpY2tGb3JtRGF0YSB8IFF1aWNrRm9ybUVsZW1lbnQpOiBRdWlja0Zvcm1FbGVtZW50IHtcblx0XHRsZXQgY2hpbGQ6IFF1aWNrRm9ybUVsZW1lbnQ7XG5cdFx0aWYgKGRhdGEgaW5zdGFuY2VvZiBRdWlja0Zvcm1FbGVtZW50KSB7XG5cdFx0XHRjaGlsZCA9IGRhdGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkID0gbmV3IFF1aWNrRm9ybUVsZW1lbnQoZGF0YSk7XG5cdFx0fVxuXHRcdHRoaXMuY2hpbGRzW3RoaXMuY2hpbGRzLmxlbmd0aF0gPSBjaGlsZDtcblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH1cblxuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgZm9yIHRoZSBxdWlja0Zvcm0gZWxlbWVudC4gIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHQgKiB3aXRob3V0IHBhcmFtZXRlcnM6IGBmb3JtLnJlbmRlcigpYC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IGludGVybmFsU3ViZ3JvdXBJZFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRyZW5kZXIoaW50ZXJuYWxTdWJncm91cElkPzogbnVtYmVyIHwgc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuXHRcdGNvbnN0IGN1cnJlbnROb2RlID0gdGhpcy5jb21wdXRlKHRoaXMuZGF0YSwgaW50ZXJuYWxTdWJncm91cElkKTtcblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRzKSB7XG5cdFx0XHQvLyBkbyBub3QgcGFzcyBpbnRlcm5hbF9zdWJncm91cF9pZCB0byByZWN1cnNpdmUgY2FsbHNcblx0XHRcdGN1cnJlbnROb2RlWzFdLmFwcGVuZENoaWxkKGNoaWxkLnJlbmRlcigpKTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnROb2RlWzBdIGFzIEhUTUxFbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UXVpY2tGb3JtRGF0YX0gZGF0YVxuXHQgKiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gaW5JZFxuXHQgKiBAcmV0dXJucyB7W05vZGUsIE5vZGVdfVxuXHQgKi9cblx0Y29tcHV0ZShkYXRhOiBRdWlja0Zvcm1EYXRhLCBpbklkPzogbnVtYmVyIHwgc3RyaW5nKTogW05vZGUsIE5vZGVdIHtcblx0XHRsZXQgbm9kZTogSFRNTEVsZW1lbnQ7XG5cdFx0bGV0IGNoaWxkQ29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGxldCBsYWJlbDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgaWQgPSBgJHtpbklkID8gYCR7aW5JZH1fYCA6ICcnfW5vZGVfJHtRdWlja0Zvcm1FbGVtZW50LmlkKyt9YDtcblx0XHRpZiAoZGF0YS5hZG1pbm9ubHkgJiYgIU1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHQvLyBoZWxsIGhhY2sgYWxwaGFcblx0XHRcdGRhdGEudHlwZSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0XHRsZXQgaTogbnVtYmVyO1xuXHRcdGxldCBjdXJyZW50OiBRdWlja0Zvcm1EYXRhO1xuXHRcdGxldCBzdWJub2RlOiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCB8IFtOb2RlLCBOb2RlXTtcblx0XHRzd2l0Y2ggKGRhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAnZm9ybSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdFx0XHRcdG5vZGUuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybSc7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnamF2YXNjcmlwdDp2b2lkKDApOycpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLmV2ZW50VHlwZSB8fCAnc3VibWl0JywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnJhZ21lbnQnOiB7XG5cdFx0XHRcdGNvbnN0IGZyYWdtZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcdFx0Ly8gZnJhZ21lbnRzIGNhbid0IGhhdmUgYW55IGF0dHJpYnV0ZXMsIHNvIGp1c3QgcmV0dXJuIGl0IHN0cmFpZ2h0IGF3YXlcblx0XHRcdFx0cmV0dXJuIFtmcmFnbWVudE5vZGUsIGZyYWdtZW50Tm9kZV07XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdzZWxlY3QnOiB7XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHNlbGVjdCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubXVsdGlwbGUpIHtcblx0XHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnNpemUpIHtcblx0XHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCdzaXplJywgU3RyaW5nKGRhdGEuc2l6ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lIGFzIHN0cmluZyk7XG5cdFx0XHRcdGlmIChkYXRhLmxpc3QpIHtcblx0XHRcdFx0XHRjb25zdCBsaXN0ID0gZGF0YS5saXN0IGFzIFF1aWNrRm9ybURhdGFbXTtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGxpc3RbaV0gYXMgUXVpY2tGb3JtRGF0YTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lmxpc3QpIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGdyb3VwJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdHNlbGVjdC5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzZWxlY3Q7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWUgYXMgc3RyaW5nO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlIGFzIHN0cmluZyk7XG5cdFx0XHRcdGlmIChkYXRhLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBkYXRhLmxhYmVsIGFzIHN0cmluZyk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCBhcyBzdHJpbmcpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcHRncm91cCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBkYXRhLmxhYmVsIGFzIHN0cmluZyk7XG5cdFx0XHRcdGlmIChkYXRhLmxpc3QpIHtcblx0XHRcdFx0XHRjb25zdCBsaXN0ID0gZGF0YS5saXN0IGFzIFF1aWNrRm9ybURhdGFbXTtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGxpc3RbaV0gYXMgUXVpY2tGb3JtRGF0YTtcblx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nOyAvLyBtdXN0IGJlIG9wdGlvbnMgaGVyZVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGRhdGEubGlzdCBhcyBRdWlja0Zvcm1EYXRhW107XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cklkID0gYCR7aWR9XyR7aX1gO1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGxpc3RbaV0gYXMgUXVpY2tGb3JtRGF0YTtcblx0XHRcdFx0XHRcdGxldCBjdXJEaXY6IEhUTUxFbGVtZW50O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudHlwZSA9PT0gJ2hlYWRlcicpIHtcblx0XHRcdFx0XHRcdFx0Ly8gaW5saW5lIGhhY2tcblx0XHRcdFx0XHRcdFx0Y3VyRGl2ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpKTtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN1cnJlbnQubGFiZWwgYXMgc3RyaW5nKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0XHRRdWlja0Zvcm1FbGVtZW50LmdlbmVyYXRlVG9vbHRpcChjdXJEaXYsIGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y3VyRGl2ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmhpZGRlbikge1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJub2RlID0gY3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS52YWx1ZXMgPSBjdXJyZW50LnZhbHVlIGFzIHN0cmluZztcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnQudmFsdWUgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGN1cklkKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgKGN1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWUpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHQvLyBJZiBuYW1lIGlzIHByb3ZpZGVkIG9uIHRoZSBpbmRpdmlkdWFsIGNoZWNrYm94LCBhZGQgYSBkYXRhLXNpbmdsZVxuXHRcdFx0XHRcdFx0Ly8gYXR0cmlidXRlIHdoaWNoIGluZGljYXRlcyBpdCBpc24ndCBwYXJ0IG9mIGEgbGlzdCBvZiBjaGVja2JveGVzIHdpdGhcblx0XHRcdFx0XHRcdC8vIHNhbWUgbmFtZS4gVXNlZCBpbiBnZXRJbnB1dERhdGEoKVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zaW5nbGUnLCAnZGF0YS1zaW5nbGUnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGFiZWwgPSBjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGN1cnJlbnQubGFiZWwpKTtcblx0XHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0XHRRdWlja0Zvcm1FbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBzdHlsZXMgZ28gb24gdGhlIGxhYmVsLCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3R5bGUgYSBjaGVja2JveC9yYWRpb1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGN1cnJlbnQuc3R5bGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IGV2ZW50OiAoKGU6IEV2ZW50KSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnN1Ymdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdGxldCB0bXBncm91cDogUXVpY2tGb3JtRGF0YSB8IFF1aWNrRm9ybURhdGFbXSA9IGN1cnJlbnQuc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHRtcGdyb3VwID0gKFtdIGFzIFF1aWNrRm9ybURhdGFbXSkuY29uY2F0KHRtcGdyb3VwKTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXBSYXcgPSBuZXcgUXVpY2tGb3JtRWxlbWVudCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGAke2lkfV8ke2l9X3N1Ymdyb3VwYCxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWwgb2YgdG1wZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBuZXdFbDogUXVpY2tGb3JtRGF0YSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmVsLFxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwudHlwZSB8fD0gZGF0YS50eXBlO1xuXHRcdFx0XHRcdFx0XHRcdG5ld0VsLm5hbWUgPSBgJHtjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lfS4ke25ld0VsLm5hbWV9YDtcblx0XHRcdFx0XHRcdFx0XHRzdWJncm91cFJhdy5hcHBlbmQobmV3RWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ymdyb3VwID0gc3ViZ3JvdXBSYXcucmVuZGVyKGN1cklkKTtcblx0XHRcdFx0XHRcdFx0c3ViZ3JvdXAuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybVN1Ymdyb3VwJztcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zdWJncm91cCA9IHN1Ymdyb3VwO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNob3duID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGV2ZW50ID0gKGU6IEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldC5wYXJlbnROb2RlPy5hcHBlbmRDaGlsZCh0YXJnZXQuc3ViZ3JvdXAgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IHRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybSA9IHRhcmdldC5mb3JtIGFzIEhUTUxGb3JtRWxlbWVudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgcHJldmlvdXMgPSBmb3JtLm5hbWVzW25hbWVdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocHJldmlvdXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByZXZpb3VzLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHByZXZpb3VzLnN1Ymdyb3VwIGFzIEhUTUxFbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3JtLm5hbWVzW25hbWVdID0gdGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQodGFyZ2V0LnN1Ymdyb3VwIGFzIEhUTUxFbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3Vibm9kZS5wYXJlbnROb2RlPy5hcHBlbmRDaGlsZChzdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50ID0gKGU6IEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IHRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm0gPSB0YXJnZXQuZm9ybSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwcmV2aW91cyA9IGZvcm0ubmFtZXNbbmFtZV07XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocHJldmlvdXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcmV2aW91cy5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChwcmV2aW91cy5zdWJncm91cCBhcyBIVE1MRWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGUgZm9ybS5uYW1lc1tuYW1lXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gYWRkIHVzZXJzJyBldmVudCBsYXN0LCBzbyBpdCBjYW4gaW50ZXJhY3Qgd2l0aCB0aGUgc3ViZ3JvdXBcblx0XHRcdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjdXJyZW50LmV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY3VycmVudC5ldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnNoaWZ0Q2xpY2tTdXBwb3J0ICYmIGRhdGEudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdE1vcmViaXRzLmNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQoUXVpY2tGb3JtLmdldEVsZW1lbnRzKG5vZGUsIGRhdGEubmFtZSBhcyBzdHJpbmcpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gaW5wdXQgaXMgYWN0dWFsbHkgYSB0ZXh0LXR5cGUsIHNvIG51bWJlciBoZXJlIGluaGVyaXRzIHRoZSBzYW1lIHN0dWZmXG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHQvLyBBZGQgdmFsdWUgYW5kIHBsYWNlaG9sZGVyIGF0dHJzXG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBkYXRhLnBsYWNlaG9sZGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRpZiAoZGF0YS50eXBlID09PSAnaW5wdXQnKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnbWluJywgJ21heCcsICdzdGVwJywgJ2xpc3QnXSBhcyBjb25zdCkge1xuXHRcdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIFN0cmluZyhkYXRhW2F0dF0pKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWyd2YWx1ZScsICdzaXplJywgJ3BsYWNlaG9sZGVyJywgJ21heGxlbmd0aCddIGFzIGNvbnN0KSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBTdHJpbmcoZGF0YVthdHRdKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnZGlzYWJsZWQnLCAncmVxdWlyZWQnLCAncmVhZG9ubHknXSBhcyBjb25zdCkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgYXR0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkeW5pbnB1dCc6IHtcblx0XHRcdFx0Y29uc3QgbWluID0gZGF0YS5taW4gfHwgMTtcblx0XHRcdFx0Y29uc3QgbWF4ID0gZGF0YS5tYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGNvbnN0IGxpc3ROb2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdGxhYmVsOiAn5pu05aSaJyxcblx0XHRcdFx0XHRkaXNhYmxlZDogbWluID49IG1heCxcblx0XHRcdFx0XHRldmVudDogKGU6IEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBEeW5pbnB1dE1vcmVCdXR0b247XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdOb2RlID0gbmV3IFF1aWNrRm9ybUVsZW1lbnQodGFyZ2V0LnN1Ymxpc3QpO1xuXHRcdFx0XHRcdFx0dGFyZ2V0LmFyZWEuYXBwZW5kQ2hpbGQobmV3Tm9kZS5yZW5kZXIoKSk7XG5cdFx0XHRcdFx0XHRpZiAoKyt0YXJnZXQuY291bnRlciA+PSB0YXJnZXQubWF4KSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKG1vcmVbMF0pO1xuXHRcdFx0XHRjb25zdCBtb3JlQnV0dG9uID0gbW9yZVsxXSBhcyBEeW5pbnB1dE1vcmVCdXR0b247XG5cdFx0XHRcdGNvbnN0IHN1Ymxpc3Q6IFF1aWNrRm9ybURhdGEgPSB7XG5cdFx0XHRcdFx0dHlwZTogJ19keW5pbnB1dF9lbGVtZW50Jyxcblx0XHRcdFx0XHRsYWJlbDogZGF0YS5zdWJsYWJlbCB8fCBkYXRhLmxhYmVsLFxuXHRcdFx0XHRcdG5hbWU6IGRhdGEubmFtZSxcblx0XHRcdFx0XHR2YWx1ZTogZGF0YS52YWx1ZSxcblx0XHRcdFx0XHRzaXplOiBkYXRhLnNpemUsXG5cdFx0XHRcdFx0cmVtb3ZlOiBmYWxzZSxcblx0XHRcdFx0XHRtYXhsZW5ndGg6IGRhdGEubWF4bGVuZ3RoLFxuXHRcdFx0XHRcdGV2ZW50OiBkYXRhLmV2ZW50LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWluOyArK2kpIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtID0gbmV3IFF1aWNrRm9ybUVsZW1lbnQoc3VibGlzdCk7XG5cdFx0XHRcdFx0bGlzdE5vZGUuYXBwZW5kQ2hpbGQoZWxlbS5yZW5kZXIoKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3VibGlzdC5yZW1vdmUgPSB0cnVlO1xuXHRcdFx0XHRzdWJsaXN0Lm1vcmVidXR0b24gPSBtb3JlQnV0dG9uO1xuXHRcdFx0XHRzdWJsaXN0Lmxpc3Rub2RlID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24uc3VibGlzdCA9IHN1Ymxpc3Q7XG5cdFx0XHRcdG1vcmVCdXR0b24uYXJlYSA9IGxpc3ROb2RlO1xuXHRcdFx0XHRtb3JlQnV0dG9uLm1heCA9IG1heCAtIG1pbjtcblx0XHRcdFx0bW9yZUJ1dHRvbi5jb3VudGVyID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdfZHluaW5wdXRfZWxlbWVudCc6XG5cdFx0XHRcdC8vIFByaXZhdGUsIHNpbWlsYXIgdG8gbm9ybWFsIGlucHV0XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCBhcyBzdHJpbmcpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lIGFzIHN0cmluZyk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdzaXplJywgU3RyaW5nKGRhdGEuc2l6ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm1heGxlbmd0aCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBTdHJpbmcoZGF0YS5tYXhsZW5ndGgpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVtb3ZlKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlID0gdGhpcy5jb21wdXRlKHtcblx0XHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0bGFiZWw6ICfnp7vpmaQnLFxuXHRcdFx0XHRcdFx0ZXZlbnQ6IChlOiBFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBEeW5pbnB1dFJlbW92ZUJ1dHRvbjtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbGlzdCA9IHRhcmdldC5saXN0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgbm9kZV8gPSB0YXJnZXQuaW5wdXRub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtb3JlID0gdGFyZ2V0Lm1vcmVidXR0b247XG5cdFx0XHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobm9kZV8pO1xuXHRcdFx0XHRcdFx0XHQtLW1vcmUuY291bnRlcjtcblx0XHRcdFx0XHRcdFx0bW9yZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVtb3ZlWzBdKTtcblx0XHRcdFx0XHRjb25zdCByZW1vdmVCdXR0b24gPSByZW1vdmVbMV0gYXMgRHluaW5wdXRSZW1vdmVCdXR0b247XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLmlucHV0bm9kZSA9IG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLmxpc3Rub2RlID0gZGF0YS5saXN0bm9kZSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24ubW9yZWJ1dHRvbiA9IGRhdGEubW9yZWJ1dHRvbiBhcyBEeW5pbnB1dE1vcmVCdXR0b247XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaWRkZW4nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZSBhcyBzdHJpbmc7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUgYXMgc3RyaW5nKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgYXMgc3RyaW5nKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoZWFkZXInOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXYnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1EZXNjcmlwdGlvbic7XG5cdFx0XHRcdFx0cmVzdWx0LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsIGFzIHN0cmluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lIHx8ICdzdWJtaXQnKTtcblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdidXR0b24nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS5sYWJlbCBhcyBzdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgYXMgc3RyaW5nKTtcblx0XHRcdFx0aWYgKGRhdGEuY29scykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdjb2xzJywgU3RyaW5nKGRhdGEuY29scykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJvd3MpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncm93cycsIFN0cmluZyhkYXRhLnJvd3MpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlcXVpcmVkKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVhZG9ubHkpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUudmFsdWUgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCBwbGFjZWhvbGRlciBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5wbGFjZWhvbGRlciA9IGRhdGEucGxhY2Vob2xkZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzdWJub2RlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTW9yZWJpdHMucXVpY2tGb3JtOiB1bmtub3duIGVsZW1lbnQgdHlwZSAke2RhdGEudHlwZS50b1N0cmluZygpfWApO1xuXHRcdH1cblx0XHRjaGlsZENvbnRhaW5lciB8fD0gbm9kZTtcblx0XHRpZiAoZGF0YS50b29sdGlwKSB7XG5cdFx0XHRRdWlja0Zvcm1FbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCB8fCBub2RlLCBkYXRhKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuZXh0cmEpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmV4dHJhID0gZGF0YS5leHRyYTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuJGRhdGEpIHtcblx0XHRcdCQoY2hpbGRDb250YWluZXIpLmRhdGEoZGF0YS4kZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLnN0eWxlKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZGF0YS5zdHlsZSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmNsYXNzTmFtZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuY2xhc3NOYW1lID0gY2hpbGRDb250YWluZXIuY2xhc3NOYW1lXG5cdFx0XHRcdD8gYCR7Y2hpbGRDb250YWluZXIuY2xhc3NOYW1lfSAke2RhdGEuY2xhc3NOYW1lfWBcblx0XHRcdFx0OiBkYXRhLmNsYXNzTmFtZTtcblx0XHR9XG5cdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdHJldHVybiBbbm9kZSwgY2hpbGRDb250YWluZXJdO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHRvb2x0aXAsIGltcGxlbWVudGVkIGluIHBsYWluIGpRdWVyeSAoZm9ybWVybHkgalF1ZXJ5IFVJIHRvb2x0aXApLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIEhUTUwgZWxlbWVudCBiZXNpZGUgd2hpY2ggYSB0b29sdGlwIGlzIHRvIGJlIGdlbmVyYXRlZC5cblx0ICogQHBhcmFtIHtRdWlja0Zvcm1EYXRhfSBkYXRhIC0gVG9vbHRpcC1yZWxhdGVkIGNvbmZpZ3VyYXRpb24gZGF0YS5cblx0ICovXG5cdHN0YXRpYyBnZW5lcmF0ZVRvb2x0aXAgPSAobm9kZTogSFRNTEVsZW1lbnQsIGRhdGE6IFF1aWNrRm9ybURhdGEpOiB2b2lkID0+IHtcblx0XHRjb25zdCB0b29sdGlwVGV4dCA9IGRhdGEudG9vbHRpcDtcblx0XHRpZiAoIXRvb2x0aXBUZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRvb2x0aXBCdXR0b24gPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0dG9vbHRpcEJ1dHRvbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtdG9vbHRpcEJ1dHRvbic7XG5cdFx0dG9vbHRpcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0b29sdGlwVGV4dCk7XG5cdFx0dG9vbHRpcEJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnPycpKTtcblx0XHRsZXQgdGltZXIgPSAwO1xuXHRcdGxldCB0b29sdGlwOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGNvbnN0IHJlbW92ZVRvb2x0aXAgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHRcdGlmICh0b29sdGlwKSB7XG5cdFx0XHRcdHRvb2x0aXAucmVtb3ZlKCk7XG5cdFx0XHRcdHRvb2x0aXAgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3Qgc2hvd1Rvb2x0aXAgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRyZW1vdmVUb29sdGlwKCk7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9ICdtb3JlYml0cy11aS10b29sdGlwJztcblx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSB0b29sdGlwVGV4dDtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHRjb25zdCBidXR0b25SZWN0ID0gdG9vbHRpcEJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGNvbnN0IHRvb2x0aXBSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGxldCB0b3AgPSBidXR0b25SZWN0LmJvdHRvbSArIDQ7XG5cdFx0XHRpZiAodG9wICsgdG9vbHRpcFJlY3QuaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0IC0gNSkge1xuXHRcdFx0XHQvLyBmbGlwIGFib3ZlIHRoZSBidXR0b24gaWYgaXQgd291bGQgb3ZlcmZsb3cgdGhlIHZpZXdwb3J0XG5cdFx0XHRcdHRvcCA9IE1hdGgubWF4KDUsIGJ1dHRvblJlY3QudG9wIC0gdG9vbHRpcFJlY3QuaGVpZ2h0IC0gNCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsZWZ0ID0gTWF0aC5taW4oXG5cdFx0XHRcdE1hdGgubWF4KDUsIGJ1dHRvblJlY3QubGVmdCArIGJ1dHRvblJlY3Qud2lkdGggLyAyKSxcblx0XHRcdFx0d2luZG93LmlubmVyV2lkdGggLSB0b29sdGlwUmVjdC53aWR0aCAtIDVcblx0XHRcdCk7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcblx0XHRcdGVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcblx0XHRcdHRvb2x0aXAgPSBlbGVtZW50O1xuXHRcdH07XG5cdFx0JCh0b29sdGlwQnV0dG9uKS5vbih7XG5cdFx0XHRtb3VzZWVudGVyOiAoKSA9PiB7XG5cdFx0XHRcdHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoc2hvd1Rvb2x0aXAsIDQwMCk7XG5cdFx0XHR9LFxuXHRcdFx0bW91c2VsZWF2ZTogcmVtb3ZlVG9vbHRpcCxcblx0XHRcdGNsaWNrOiByZW1vdmVUb29sdGlwLFxuXHRcdH0pO1xuXHR9O1xufVxuXG4vKipcbiAqIENyZWF0aW9uIG9mIHNpbXBsZSBhbmQgc3RhbmRhcmQgZm9ybXMgd2l0aG91dCBtdWNoIHNwZWNpZmljIGNvZGluZy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZvcm0gaXMgc3VibWl0dGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFtldmVudFR5cGU9c3VibWl0XSAtIFR5cGUgb2YgdGhlIGV2ZW50LlxuICovXG5jbGFzcyBRdWlja0Zvcm0ge1xuXHRyb290OiBRdWlja0Zvcm1FbGVtZW50O1xuXG5cdGNvbnN0cnVjdG9yKGV2ZW50OiAoZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duLCBldmVudFR5cGU/OiBzdHJpbmcpIHtcblx0XHR0aGlzLnJvb3QgPSBuZXcgUXVpY2tGb3JtRWxlbWVudCh7XG5cdFx0XHR0eXBlOiAnZm9ybScsXG5cdFx0XHRldmVudCxcblx0XHRcdGV2ZW50VHlwZSxcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRoZSBIVE1MIG91dHB1dCBvZiB0aGUgcXVpY2tGb3JtLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRyZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuXHRcdGNvbnN0IHJldCA9IHRoaXMucm9vdC5yZW5kZXIoKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cdFx0cmV0Lm5hbWVzID0ge307XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBlbmQgZWxlbWVudCB0byB0aGUgZm9ybS5cblx0ICpcblx0ICogQHBhcmFtIHsoUXVpY2tGb3JtRGF0YSB8IFF1aWNrRm9ybUVsZW1lbnQpfSBkYXRhIC0gQSBxdWlja2Zvcm0gZWxlbWVudCwgb3IgdGhlIG9iamVjdCB3aXRoIHdoaWNoXG5cdCAqIGEgcXVpY2tmb3JtIGVsZW1lbnQgaXMgY29uc3RydWN0ZWQuXG5cdCAqIEByZXR1cm5zIHtRdWlja0Zvcm1FbGVtZW50fSAtIFNhbWUgYXMgd2hhdCBpcyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxuXHQgKi9cblx0YXBwZW5kKGRhdGE6IFF1aWNrRm9ybURhdGEgfCBRdWlja0Zvcm1FbGVtZW50KTogUXVpY2tGb3JtRWxlbWVudCB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdC5hcHBlbmQoZGF0YSk7XG5cdH1cblxuXHRzdGF0aWMgZWxlbWVudCA9IFF1aWNrRm9ybUVsZW1lbnQ7XG5cblx0Ly8gU29tZSB1dGlsaXR5IG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBxdWlja0Zvcm1zIGFmdGVyIHRoZWlyIGNyZWF0aW9uOlxuXHQvLyAoTm9uZSBvZiB0aGVzZSB3b3JrIGZvciBcImR5bmlucHV0XCIgdHlwZSBmaWVsZHMgYXQgcHJlc2VudClcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZpbGxlZCBmb3JtIGRhdGEgZW50ZXJlZCBieSB0aGUgdXNlciwgd2l0aCB0aGUgb2JqZWN0XG5cdCAqIGtleXMgYmVpbmcgdGhlIGZvcm0gZWxlbWVudCBuYW1lcy4gRGlzYWJsZWQgZmllbGRzIHdpbGwgYmUgaWdub3JlZCwgYnV0IG5vdCBoaWRkZW4gZmllbGRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuXHQgKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IHN0cmluZ1tdPn0gV2l0aCBmaWVsZCBuYW1lcyBhcyBrZXlzLCBpbnB1dCBkYXRhIGFzIHZhbHVlcy5cblx0ICovXG5cdHN0YXRpYyBnZXRJbnB1dERhdGEgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KTogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IHN0cmluZ1tdPiA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgc3RyaW5nW10+ID0ge307XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiBBcnJheS5mcm9tKGZvcm0uZWxlbWVudHMpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXSkge1xuXHRcdFx0aWYgKGZpZWxkLmRpc2FibGVkIHx8ICFmaWVsZC5uYW1lIHx8ICFmaWVsZC50eXBlIHx8IGZpZWxkLnR5cGUgPT09ICdzdWJtaXQnIHx8IGZpZWxkLnR5cGUgPT09ICdidXR0b24nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRm9yIGVsZW1lbnRzIGluIHN1Ymdyb3VwcywgcXVpY2tmb3JtIHByZXBlbmRzIGVsZW1lbnQgbmFtZXMgd2l0aFxuXHRcdFx0Ly8gbmFtZSBvZiB0aGUgcGFyZW50IGdyb3VwIGZvbGxvd2VkIGJ5IGEgcGVyaW9kLCBnZXQgcmlkIG9mIHRoYXQuXG5cdFx0XHRjb25zdCBmaWVsZE5hbWVOb3JtID0gZmllbGQubmFtZS5zbGljZShmaWVsZC5uYW1lLmluZGV4T2YoJy4nKSArIDEpO1xuXHRcdFx0c3dpdGNoIChmaWVsZC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmRhdGFzZXRbJ3NpbmdsZSddKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC5jaGVja2VkOyAvLyBib29sZWFuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSB8fD0gW107XG5cdFx0XHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBncm91cCA9IHJlc3VsdFtmaWVsZE5hbWVOb3JtXSBhcyBzdHJpbmdbXTtcblx0XHRcdFx0XHRcdFx0Z3JvdXBbZ3JvdXAubGVuZ3RoXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSAkKGZpZWxkKS52YWwoKSBhcyBzdHJpbmcgfCBzdHJpbmdbXTtcblx0XHRcdFx0XHQvLyBmaWVsZC52YWx1ZSBkb2Vzbid0IHdvcmtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGV4dCc6IC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlLnRyaW0oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBjb3VsZCBiZSBzZWxlY3Qtb25lLCBkYXRlLCBudW1iZXIsIGVtYWlsLCBldGNcblx0XHRcdFx0XHRpZiAoZmllbGQudmFsdWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyBhbGwgZm9ybSBlbGVtZW50cyB3aXRoIGEgZ2l2ZW4gZmllbGQgbmFtZSBvciBJRC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIC0gVGhlIG5hbWUgb3IgaWQgb2YgdGhlIGZpZWxkcy5cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50W119IC0gQXJyYXkgb2YgbWF0Y2hpbmcgZm9ybSBlbGVtZW50cy5cblx0ICovXG5cdHN0YXRpYyBnZXRFbGVtZW50cyA9IChmb3JtOiBIVE1MRWxlbWVudCwgZmllbGROYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtdID0+IHtcblx0XHRjb25zdCAkZm9ybSA9ICQoZm9ybSk7XG5cdFx0ZmllbGROYW1lID0gJC5lc2NhcGVTZWxlY3RvcihmaWVsZE5hbWUpOyAvLyBzYW5pdGl6ZSBpbnB1dFxuXHRcdGxldCAkZWxlbWVudHMgPSAkZm9ybS5maW5kKGBbbmFtZT1cIiR7ZmllbGROYW1lfVwiXWApO1xuXHRcdGlmICgkZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdFx0fVxuXHRcdCRlbGVtZW50cyA9ICRmb3JtLmZpbmQoYCMke2ZpZWxkTmFtZX1gKTtcblx0XHRyZXR1cm4gJGVsZW1lbnRzLnRvQXJyYXkoKTtcblx0fTtcblxuXHQvKipcblx0ICogU2VhcmNoZXMgdGhlIGFycmF5IG9mIGVsZW1lbnRzIGZvciBhIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbiB3aXRoIGEgY2VydGFpblxuXHQgKiBgdmFsdWVgIGF0dHJpYnV0ZSwgYW5kIHJldHVybnMgdGhlIGZpcnN0IHN1Y2ggZWxlbWVudC4gUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50W119IGVsZW1lbnRBcnJheSAtIEFycmF5IG9mIGNoZWNrYm94IG9yIHJhZGlvIGVsZW1lbnRzLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBWYWx1ZSB0byBzZWFyY2ggZm9yLlxuXHQgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudCB8IG51bGx9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0Q2hlY2tib3hPclJhZGlvID0gKGVsZW1lbnRBcnJheTogSFRNTElucHV0RWxlbWVudFtdLCB2YWx1ZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPT4ge1xuXHRcdGNvbnN0IGZvdW5kID0gZWxlbWVudEFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQudmFsdWUgPT09IHZhbHVlO1xuXHRcdH0pO1xuXHRcdGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZm91bmRbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlICZsdDtkaXY+IGNvbnRhaW5pbmcgdGhlIGZvcm0gZWxlbWVudCwgb3IgdGhlIGZvcm0gZWxlbWVudCBpdHNlbGZcblx0ICogTWF5IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIGNoZWNrYm94ZXMgb3IgcmFkaW9zLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdHN0YXRpYyBnZXRFbGVtZW50Q29udGFpbmVyID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgPT4ge1xuXHRcdC8vIGZvciBkaXZzLCBoZWFkaW5ncyBhbmQgZmllbGRzZXRzLCB0aGUgY29udGFpbmVyIGlzIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCBqdXN0IHJldHVybiB0aGUgcGFyZW50IG5vZGVcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBIVE1MIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbGFiZWwgb2YgdGhlIGdpdmVuIGZvcm0gZWxlbWVudFxuXHQgKiAobWFpbmx5IGZvciBpbnRlcm5hbCB1c2UpLlxuXHQgKlxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IFF1aWNrRm9ybUVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0RWxlbWVudExhYmVsT2JqZWN0ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgUXVpY2tGb3JtRWxlbWVudCk6IEhUTUxFbGVtZW50IHwgbnVsbCA9PiB7XG5cdFx0Ly8gZm9yIGJ1dHRvbnMsIGRpdnMgYW5kIGhlYWRlcnMsIHRoZSBsYWJlbCBpcyBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHQoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlID09PSAnYnV0dG9uJyB8fFxuXHRcdFx0KGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSA9PT0gJ3N1Ym1pdCcgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRGl2RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxIZWFkaW5nRWxlbWVudFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHQvLyBmb3IgZmllbGRzZXRzLCB0aGUgbGFiZWwgaXMgdGhlIGNoaWxkIDxsZWdlbmQ+IGVsZW1lbnRcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsZWdlbmQnKTtcblx0XHRcdC8vIGZvciB0ZXh0YXJlYXMsIHRoZSBsYWJlbCBpcyB0aGUgc2libGluZyA8aDU+IGVsZW1lbnRcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gKGVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignaDUnKTtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxsYWJlbD4gZWxlbWVudFxuXHRcdHJldHVybiAoKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGxhYmVsIHRleHQgb2YgdGhlIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50IHwgUXVpY2tGb3JtRWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgUXVpY2tGb3JtRWxlbWVudCk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IFF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKGxhYmVsRWxlbWVudC5maXJzdENoaWxkIGFzIE5vZGUpLnRleHRDb250ZW50O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnQgfCBRdWlja0Zvcm1FbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRzdGF0aWMgc2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgUXVpY2tGb3JtRWxlbWVudCwgbGFiZWxUZXh0OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBRdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdChsYWJlbEVsZW1lbnQuZmlyc3RDaGlsZCBhcyBOb2RlKS50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogU3RvcmVzIHRoZSBlbGVtZW50J3MgY3VycmVudCBsYWJlbCwgYW5kIHRlbXBvcmFyaWx5IHNldHMgdGhlIGxhYmVsIHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IFF1aWNrRm9ybUVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wb3JhcnlMYWJlbFRleHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBzdWNjZWVkZWQsIGBmYWxzZWAgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRzdGF0aWMgb3ZlcnJpZGVFbGVtZW50TGFiZWwgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBRdWlja0Zvcm1FbGVtZW50LCB0ZW1wb3JhcnlMYWJlbFRleHQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdGlmICghKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHQoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc2V0QXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJywgUXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbChlbGVtZW50KSBhcyBzdHJpbmcpO1xuXHRcdH1cblx0XHRyZXR1cm4gUXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCB0ZW1wb3JhcnlMYWJlbFRleHQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXN0b3JlcyB0aGUgbGFiZWwgc3RvcmVkIGJ5IG92ZXJyaWRlRWxlbWVudExhYmVsLlxuXHQgKlxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IFF1aWNrRm9ybUVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFuIHwgbnVsbH0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0c3RhdGljIHJlc2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgUXVpY2tGb3JtRWxlbWVudCk6IGJvb2xlYW4gfCBudWxsID0+IHtcblx0XHRpZiAoKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRyZXR1cm4gUXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykgYXMgc3RyaW5nKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIGEgZm9ybSBlbGVtZW50IHBsdXMgaXRzIGxhYmVsIGFuZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IEpRdWVyeSB8IHN0cmluZyl9IGVsZW1lbnQgLSBIVE1ML2pRdWVyeSBlbGVtZW50LCBvciBqUXVlcnkgc2VsZWN0b3Igc3RyaW5nLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt2aXNpYmlsaXR5XSAtIFNraXAgdGhpcyB0byB0b2dnbGUgdmlzaWJpbGl0eS5cblx0ICovXG5cdHN0YXRpYyBzZXRFbGVtZW50VmlzaWJpbGl0eSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEpRdWVyeTxIVE1MRWxlbWVudD4gfCBzdHJpbmcsIHZpc2liaWxpdHk/OiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0JChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIHRoZSBxdWVzdGlvbiBtYXJrIGljb24gKHdoaWNoIGRpc3BsYXlzIHRoZSB0b29sdGlwKSBuZXh0IHRvIGEgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IEpRdWVyeSl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRzdGF0aWMgc2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiwgdmlzaWJpbGl0eT86IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHQkKFF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpKVxuXHRcdFx0LmZpbmQoJy5tb3JlYml0cy10b29sdGlwQnV0dG9uJylcblx0XHRcdC50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG59XG5cbk1vcmViaXRzLnF1aWNrRm9ybSA9IFF1aWNrRm9ybTtcblxuLyoqXG4gKiBAZXh0ZXJuYWwgSFRNTEZvcm1FbGVtZW50XG4gKi9cbi8qKlxuICogR2V0IGNoZWNrZWQgaXRlbXMgaW4gdGhlIGZvcm0uXG4gKlxuICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG4gKiBvciBhIHJhZGlvYnV0dG9uKSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBvciBzZWxlY3Qgb3B0aW9ucyB0aGF0IGhhdmUgc2VsZWN0ZWRcbiAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3JcbiAqIHRoZSBldmVudCB0aGF0IGJvdGggY2hlY2tib3hlcyBhbmQgcmFkaW9idXR0b25zIGhhdmUgdGhlIHNhbWUgbmFtZSkuXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuICovXG5IVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldENoZWNrZWQgPSBmdW5jdGlvbiAodGhpczogSFRNTEZvcm1FbGVtZW50LCBuYW1lOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG5cdGNvbnN0IGVsZW1lbnRzID0gKHRoaXMuZWxlbWVudHMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCBGb3JtQ29udHJvbE9yTGlzdD4pW25hbWVdO1xuXHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cdGNvbnN0IHJldHVybkFycmF5OiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgaTogbnVtYmVyO1xuXHRpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCBvcHRpb24gPSBvcHRpb25zW2ldIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuXHRcdFx0aWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuXHRcdFx0XHRpZiAob3B0aW9uLnZhbHVlcykge1xuXHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb24udmFsdWVzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb24udmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMuY2hlY2tlZCkge1xuXHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0XHRpZiAoZWxlbWVudC5jaGVja2VkKSB7XG5cdFx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnQudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtZW50LnZhbHVlcykge1xuXHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50LnZhbHVlcztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudC52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmV0dXJuQXJyYXk7XG59O1xuXG4vKipcbiAqIERvZXMgdGhlIHNhbWUgYXMge0BsaW5rIEhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkfGdldENoZWNrZWR9LCBidXQgd2l0aCB1bmNoZWNrZWQgZWxlbWVudHMuXG4gKlxuICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRVbmNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcbiAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuICogc2V0IHRvIHRydWUgKGRvbid0IHRyeSB0byBtaXggc2VsZWN0cyB3aXRoIHJhZGlvL2NoZWNrYm94ZXMpLlxuICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gLSBDb250YWlucyB0aGUgdmFsdWVzIG9mIGVsZW1lbnRzIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG4gKi9cbkhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuZ2V0VW5jaGVja2VkID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxGb3JtRWxlbWVudCwgbmFtZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nKTogc3RyaW5nW10ge1xuXHRjb25zdCBlbGVtZW50cyA9ICh0aGlzLmVsZW1lbnRzIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgRm9ybUNvbnRyb2xPckxpc3Q+KVtuYW1lXTtcblx0aWYgKCFlbGVtZW50cykge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXHRjb25zdCByZXR1cm5BcnJheTogc3RyaW5nW10gPSBbXTtcblx0bGV0IGk6IG51bWJlcjtcblx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRjb25zdCB7b3B0aW9uc30gPSBlbGVtZW50cztcblx0XHRmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0gb3B0aW9uc1tpXSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcblx0XHRcdGlmICghb3B0aW9uLnNlbGVjdGVkKSB7XG5cdFx0XHRcdGlmIChvcHRpb24udmFsdWVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbi52YWx1ZXM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbi52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fSBlbHNlIGlmICghZWxlbWVudHMuY2hlY2tlZCkge1xuXHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0XHRpZiAoIWVsZW1lbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50LnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWxlbWVudC52YWx1ZXMpIHtcblx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudC52YWx1ZXM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnQudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJldHVybkFycmF5O1xufTtcblxuaW50ZXJmYWNlIE1vcmViaXRzTmFtZXNwYWNlIHtcblx0aXA6IHR5cGVvZiBpcDtcblx0c3RyaW5nOiB0eXBlb2Ygc3RyaW5nO1xuXHRhcnJheTogdHlwZW9mIGFycmF5O1xuXHR1bmJpbmRlcjogdHlwZW9mIFVuYmluZGVyO1xuXHRkYXRlOiB0eXBlb2YgTW9yZWJpdHNEYXRlO1xufVxuLyoqXG4gKiBVdGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlcy5cbiAqXG4gKiBAbmFtZXNwYWNlIE1vcmViaXRzLmlwXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHNcbiAqL1xuY29uc3QgaXAgPSB7XG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhbiBJUHY2IGFkZHJlc3MgdG8gdGhlIGNhbm9uaWNhbCBmb3JtIHN0b3JlZCBhbmQgdXNlZCBieSBNZWRpYVdpa2kuXG5cdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdCAqIG5vcm1hbGl6ZWQsIGFuZCBleHBhbmRlZCB0byA4IHdvcmRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cblx0ICovXG5cdHNhbml0aXplSVB2NjogKGFkZHJlc3M6IHN0cmluZyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRyaW0oKTtcblx0XHRpZiAoYWRkcmVzcyA9PT0gJycpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhhZGRyZXNzLCB0cnVlKSkge1xuXHRcdFx0cmV0dXJuIGFkZHJlc3M7IC8vIG5vdGhpbmcgZWxzZSB0byBkbyBmb3IgSVB2NCBhZGRyZXNzZXMgb3IgaW52YWxpZCBvbmVzXG5cdFx0fVxuXHRcdC8vIFJlbW92ZSBhbnkgd2hpdGVzcGFjZXMsIGNvbnZlcnQgdG8gdXBwZXIgY2FzZVxuXHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRvVXBwZXJDYXNlKCk7XG5cdFx0Ly8gRXhwYW5kIHplcm8gYWJicmV2aWF0aW9uc1xuXHRcdGNvbnN0IGFiYnJldlBvcyA9IGFkZHJlc3MuaW5kZXhPZignOjonKTtcblx0XHRpZiAoYWJicmV2UG9zICE9PSAtMSkge1xuXHRcdFx0Ly8gV2Uga25vdyB0aGlzIGlzIHZhbGlkIElQdjYuIEZpbmQgdGhlIGxhc3QgaW5kZXggb2YgdGhlXG5cdFx0XHQvLyBhZGRyZXNzIGJlZm9yZSBhbnkgQ0lEUiBudW1iZXIgKGUuZy4gXCJhOmI6Yzo6LzI0XCIpLlxuXHRcdFx0Y29uc3QgQ0lEUlN0YXJ0ID0gYWRkcmVzcy5pbmRleE9mKCcvJyk7XG5cdFx0XHRjb25zdCBhZGRyZXNzRW5kID0gQ0lEUlN0YXJ0ID09PSAtMSA/IGFkZHJlc3MubGVuZ3RoIC0gMSA6IENJRFJTdGFydCAtIDE7XG5cdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgYmVnaW5uaW5nLi4uXG5cdFx0XHRsZXQgcmVwZWF0OiBzdHJpbmc7XG5cdFx0XHRsZXQgZXh0cmE6IHN0cmluZztcblx0XHRcdGxldCBwYWQ6IG51bWJlcjtcblx0XHRcdGlmIChhYmJyZXZQb3MgPT09IDApIHtcblx0XHRcdFx0cmVwZWF0ID0gJzA6Jztcblx0XHRcdFx0ZXh0cmEgPSBhZGRyZXNzID09PSAnOjonID8gJzAnIDogJyc7IC8vIGZvciB0aGUgYWRkcmVzcyAnOjonXG5cdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBlbmQuLi5cblx0XHRcdH0gZWxzZSBpZiAoYWJicmV2UG9zID09PSBhZGRyZXNzRW5kIC0gMSkge1xuXHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRleHRyYSA9ICcnO1xuXHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBpbiB0aGUgbWlkZGxlLi4uXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRleHRyYSA9ICc6Jztcblx0XHRcdFx0cGFkID0gODsgLy8gNisyIChkdWUgdG8gJzo6Jylcblx0XHRcdH1cblxuXHRcdFx0bGV0IHJlcGxhY2VtZW50ID0gcmVwZWF0O1xuXHRcdFx0cGFkIC09IGFkZHJlc3Muc3BsaXQoJzonKS5sZW5ndGggLSAxO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYWQ7IGkrKykge1xuXHRcdFx0XHRyZXBsYWNlbWVudCArPSByZXBlYXQ7XG5cdFx0XHR9XG5cdFx0XHRyZXBsYWNlbWVudCArPSBleHRyYTtcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnJlcGxhY2UoJzo6JywgcmVwbGFjZW1lbnQpO1xuXHRcdH1cblx0XHQvLyBSZW1vdmUgbGVhZGluZyB6ZXJvcyBmcm9tIGVhY2ggYmxvYyBhcyBuZWVkZWRcblx0XHRyZXR1cm4gYWRkcmVzcy5yZXBsYWNlKC8oXnw6KTArKFswLTlBLUZhLWZdezEsNH0pL2csICckMSQyJyk7XG5cdH0sXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgdGhlIGdpdmVuIElQIGFkZHJlc3MgaXMgYSByYW5nZS4gIEp1c3QgY29uam9pbnNcblx0ICogYG13LnV0aWwuaXNJUEFkZHJlc3NgIHdpdGggYW5kIHdpdGhvdXQgdGhlIGBhbGxvd0Jsb2NrYCBvcHRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpcFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIGdpdmVuIGEgdmFsaWQgSVAgYWRkcmVzcyByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQgKi9cblx0aXNSYW5nZTogKGlwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gbXcudXRpbC5pc0lQQWRkcmVzcyhpcCwgdHJ1ZSkgJiYgIW13LnV0aWwuaXNJUEFkZHJlc3MoaXApO1xuXHR9LFxuXHQvKipcblx0ICogQ2hlY2sgdGhhdCBhbiBJUCByYW5nZSBpcyB3aXRoaW4gdGhlIENJRFIgbGltaXRzLiAgTW9zdCBsaWtlbHkgdG8gYmUgdXNlZnVsXG5cdCAqIGluIGNvbmp1bmN0aW9uIHdpdGggYHdnUmVsZXZhbnRVc2VyTmFtZWAuICBDSURSIGxpbWl0cyBhcmUgaGFyZGNvZGVkIGFzIC8xNlxuXHQgKiBmb3IgSVB2NCBhbmQgLzMyIGZvciBJUHY2LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBmb3IgdmFsaWQgcmFuZ2VzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMsXG5cdCAqIG90aGVyd2lzZSBmYWxzZSAocmFuZ2VzIG91dHNpZGUgdGhlIGxpbWl0LCBzaW5nbGUgSVBzLCBub24tSVBzKS5cblx0ICovXG5cdHZhbGlkQ0lEUjogKGlwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRpZiAoTW9yZWJpdHMuaXAuaXNSYW5nZShpcCkpIHtcblx0XHRcdGNvbnN0IG1hdGNoID0gaXAubWF0Y2goL1xcLyhcXGR7MSwzfSkkLykgYXMgW3N0cmluZywgc3RyaW5nXTtcblx0XHRcdGNvbnN0IHN1Ym5ldCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSwgMTApO1xuXHRcdFx0aWYgKHN1Ym5ldCkge1xuXHRcdFx0XHQvLyBTaG91bGQgYmUgcmVkdW5kYW50XG5cdFx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoaXAsIHRydWUpKSB7XG5cdFx0XHRcdFx0aWYgKHN1Ym5ldCA+PSAzMikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHN1Ym5ldCA+PSAxNikge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0LyoqXG5cdCAqIEdldCB0aGUgLzY0IHN1Ym5ldCBmb3IgYW4gSVB2NiBhZGRyZXNzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaXB2NiAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBhIHN1Ym5ldC5cblx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIEZhbHNlIGlmIG5vdCBJUHY2IG9yIGJpZ2dlciB0aGFuIGEgNjQsXG5cdCAqIG90aGVyd2lzZSB0aGUgKHNhbml0aXplZCkgLzY0IGFkZHJlc3MuXG5cdCAqL1xuXHRnZXQ2NDogKGlwdjY6IHN0cmluZyk6IHN0cmluZyB8IGZhbHNlID0+IHtcblx0XHRpZiAoIWlwdjYgfHwgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcHY2LCB0cnVlKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBzdWJuZXRNYXRjaCA9IGlwdjYubWF0Y2goL1xcLyhcXGR7MSwzfSkkLykgYXMgW3N0cmluZywgc3RyaW5nXSB8IG51bGw7XG5cdFx0aWYgKHN1Ym5ldE1hdGNoICYmIE51bWJlci5wYXJzZUludChzdWJuZXRNYXRjaFsxXSwgMTApIDwgNjQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aXB2NiA9IE1vcmViaXRzLmlwLnNhbml0aXplSVB2NihpcHY2KSBhcyBzdHJpbmc7XG5cdFx0Y29uc3QgaXBSZWdleCA9IC9eKCg/OlswLTlBLUZdezEsNH06KXs0fSkoPzpbMC05QS1GXXsxLDR9Oil7M31bMC05QS1GXXsxLDR9KD86XFwvXFxkezEsM30pPyQvO1xuXHRcdHJldHVybiBpcHY2LnJlcGxhY2UoaXBSZWdleCwgJyQxJy5jb25jYXQoJzA6MDowOjAvNjQnKSk7XG5cdH0sXG59O1xuTW9yZWJpdHMuaXAgPSBpcDtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIHN0cmluZ3MuXG4gKlxuICogQG5hbWVzcGFjZSBNb3JlYml0cy5zdHJpbmdcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICovXG5jb25zdCBzdHJpbmcgPSB7XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHR0b1VwcGVyQ2FzZUZpcnN0Q2hhcjogKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHR0b0xvd2VyQ2FzZUZpcnN0Q2hhcjogKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH0sXG5cdC8qKlxuXHQgKiBHaXZlcyBhbiBhcnJheSBvZiBzdWJzdHJpbmdzIG9mIGBzdHJgIC0gc3RhcnRpbmcgd2l0aCBgc3RhcnRgIGFuZFxuXHQgKiBlbmRpbmcgd2l0aCBgZW5kYCAtIHdoaWNoIGlzIG5vdCBpbiBgc2tpcGxpc3RgLiAgSW50ZW5kZWQgZm9yIHVzZVxuXHQgKiBvbiB3aWtpdGV4dCB3aXRoIHRlbXBsYXRlcyBvciBsaW5rcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVuZFxuXHQgKiBAcGFyYW0geyhzdHJpbmdbXXxzdHJpbmcpfSBbc2tpcGxpc3RdXG5cdCAqIEByZXR1cm5zIHtzdHJpbmdbXX1cblx0ICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBgc3RhcnRgIGFuZCBgZW5kYCBzdHJpbmdzIGFyZW4ndCBvZiB0aGUgc2FtZSBsZW5ndGguXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYHNraXBsaXN0YCBpc24ndCBhbiBhcnJheSBvciBzdHJpbmdcblx0ICovXG5cdHNwbGl0V2VpZ2h0ZWRCeUtleXM6IChzdHI6IHN0cmluZywgc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcsIHNraXBsaXN0Pzogc3RyaW5nW10gfCBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG5cdFx0aWYgKHN0YXJ0Lmxlbmd0aCAhPT0gZW5kLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdzdGFydCBtYXJrZXIgYW5kIGVuZCBtYXJrZXIgbXVzdCBiZSBvZiB0aGUgc2FtZSBsZW5ndGgnKTtcblx0XHR9XG5cdFx0bGV0IGxldmVsID0gMDtcblx0XHRsZXQgaW5pdGlhbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cdFx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShza2lwbGlzdCkpIHtcblx0XHRcdGlmIChza2lwbGlzdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHNraXBsaXN0ID0gW107XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBza2lwbGlzdCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0c2tpcGxpc3QgPSBbc2tpcGxpc3RdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm9uLWFwcGxpY2FibGUgc2tpcGxpc3QgcGFyYW1ldGVyJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2tpcGxpc3QpIHtcblx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgZWxlbWVudC5sZW5ndGgpID09PSBlbGVtZW50KSB7XG5cdFx0XHRcdFx0aSArPSBlbGVtZW50Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIHN0YXJ0Lmxlbmd0aCkgPT09IHN0YXJ0KSB7XG5cdFx0XHRcdGlmIChpbml0aWFsID09PSBudWxsKSB7XG5cdFx0XHRcdFx0aW5pdGlhbCA9IGk7XG5cdFx0XHRcdH1cblx0XHRcdFx0KytsZXZlbDtcblx0XHRcdFx0aSArPSBzdGFydC5sZW5ndGggLSAxO1xuXHRcdFx0fSBlbHNlIGlmIChzdHIuc2xpY2UoaSwgaSArIGVuZC5sZW5ndGgpID09PSBlbmQpIHtcblx0XHRcdFx0LS1sZXZlbDtcblx0XHRcdFx0aSArPSBlbmQubGVuZ3RoIC0gMTtcblx0XHRcdH1cblx0XHRcdGlmICghbGV2ZWwgJiYgaW5pdGlhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzdHIuc2xpY2UoaW5pdGlhbCwgaSArIDEpO1xuXHRcdFx0XHRpbml0aWFsID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblx0LyoqXG5cdCAqIEZvcm1hdHMgZnJlZWZvcm0gXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgZGVsZXRpb24vb3RoZXJcblx0ICogdGVtcGxhdGVzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHN1YnN0aXR1dGVkLCAoZS5nLiBQUk9ELCBYRkQsIFJQUCkuXG5cdCAqIEhhbmRsZXMgYHxgIG91dHNpZGUgYSBub3dpa2kgdGFnLlxuXHQgKiBPcHRpb25hbGx5LCBhbHNvIGFkZHMgYSBzaWduYXR1cmUgaWYgbm90IHByZXNlbnQgYWxyZWFkeS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRTaWddXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRmb3JtYXRSZWFzb25UZXh0OiAoc3RyOiBzdHJpbmcsIGFkZFNpZz86IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuXHRcdGxldCByZWFzb24gPSAoc3RyIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihyZWFzb24pO1xuXHRcdHVuYmluZGVyLnVuYmluZCgnPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpLCAnPC9ubycuY29uY2F0KCd3aWtpJywgJz4nKSk7XG5cdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZSgvXFx8L2csICd7eycuY29uY2F0KCdzdWJzdDonLCAnIX19JykpO1xuXHRcdHJlYXNvbiA9IHVuYmluZGVyLnJlYmluZCgpO1xuXHRcdGlmIChhZGRTaWcpIHtcblx0XHRcdGNvbnN0IHNpZyA9ICd+ficuY29uY2F0KCd+ficpO1xuXHRcdFx0Y29uc3Qgc2lnSW5kZXggPSByZWFzb24ubGFzdEluZGV4T2Yoc2lnKTtcblx0XHRcdGlmIChzaWdJbmRleCA9PT0gLTEgfHwgc2lnSW5kZXggIT09IHJlYXNvbi5sZW5ndGggLSBzaWcubGVuZ3RoKSB7XG5cdFx0XHRcdHJlYXNvbiArPSBgICR7c2lnfWA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZWFzb24udHJpbSgpO1xuXHR9LFxuXHQvKipcblx0ICogRm9ybWF0cyBhIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGluY2x1c2lvbiBpbiBhIHVzZXJzcGFjZVxuXHQgKiBsb2cuICBSZXBsYWNlcyBuZXdsaW5lcyB3aXRoIHt7UGJ9fSwgYW5kIGFkZHMgYW4gZXh0cmEgYCNgIGJlZm9yZVxuXHQgKiBsaXN0IGl0ZW1zIGZvciBwcm9wZXIgZm9ybWF0dGluZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Zm9ybWF0UmVhc29uRm9yTG9nOiAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRzdHJcblx0XHRcdFx0Ly8gaGFuZGxlIGxpbmUgYnJlYWtzLCB3aGljaCBvdGhlcndpc2UgYnJlYWsgbnVtYmVyaW5nXG5cdFx0XHRcdC5yZXBsYWNlKC9cXG4rL2csICd7e3BifX0nKVxuXHRcdFx0XHQvLyBwdXQgYW4gZXh0cmEgIyBpbiBmcm9udCBiZWZvcmUgYnVsbGV0ZWQgb3IgbnVtYmVyZWQgbGlzdCBpdGVtc1xuXHRcdFx0XHQucmVwbGFjZSgvXigjKykvZ20sICcjJDEnKVxuXHRcdFx0XHQucmVwbGFjZSgvXihcXCorKS9nbSwgJyMkMScpXG5cdFx0KTtcblx0fSxcblx0LyoqXG5cdCAqIExpa2UgYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSgpYCwgYnV0IGVzY2FwZXMgYW55IGRvbGxhciBzaWducyBpblxuXHQgKiB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nLiAgVXNlZnVsIHdoZW4gdGhlIHRoZSByZXBsYWNlbWVudCBzdHJpbmcgaXNcblx0ICogYXJiaXRyYXJ5LCBzdWNoIGFzIGEgdXNlcm5hbWUgb3IgZnJlZWZvcm0gdXNlciBpbnB1dCwgYW5kIGNvdWxkXG5cdCAqIGNvbnRhaW4gZG9sbGFyIHNpZ25zLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGV4dCBpbiB3aGljaCB0byByZXBsYWNlLlxuXHQgKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHNhZmVSZXBsYWNlOiAoc3RyaW5nOiBzdHJpbmcsIHBhdHRlcm46IHN0cmluZyB8IFJlZ0V4cCwgcmVwbGFjZW1lbnQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHBhdHRlcm4sIHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpKTtcblx0fSxcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiB0aGUgdXNlci1wcm92aWRlZCBleHBpcmF0aW9uIHdpbGwgYmUgY29uc2lkZXJlZCBhblxuXHQgKiBpbmZpbml0ZS1sZW5ndGggYnkgTVcuXG5cdCAqXG5cdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9UNjg2NDZ9XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBleHBpcnlcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRpc0luZmluaXR5OiAoZXhwaXJ5OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gWydpbmRlZmluaXRlJywgJ2luZmluaXR5JywgJ2luZmluaXRlJywgJ25ldmVyJ10uaW5jbHVkZXMoZXhwaXJ5KTtcblx0fSxcblx0LyoqXG5cdCAqIEVzY2FwZXMgYSBzdHJpbmcgdG8gYmUgdXNlZCBpbiBhIFJlZ0V4cCwgcmVwbGFjaW5nIHNwYWNlcyBhbmRcblx0ICogdW5kZXJzY29yZXMgd2l0aCBgW18gXWAgYXMgdGhleSBhcmUgb2Z0ZW4gZXF1aXZhbGVudC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBTdHJpbmcgdG8gYmUgZXNjYXBlZC5cblx0ICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgZXNjYXBlZCB0ZXh0LlxuXHQgKi9cblx0ZXNjYXBlUmVnRXhwOiAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gbXcudXRpbC5lc2NhcGVSZWdFeHAodGV4dCkucmVwbGFjZSgvIHxfL2csICdbXyBdJyk7XG5cdH0sXG5cdC8qKlxuXHQgKiBmb3JtYXRUaW1lXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gdGltZSBUaGUgc3RyaW5nIHRvIGZvcmFtdFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Zm9ybWF0VGltZTogKHRpbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0bGV0IG06IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsO1xuXHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnNlYyhvbmQpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiBgJHttWzFdfeenkmA7XG5cdFx0fVxuXHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1pbih1dGUpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiBgJHttWzFdfeWIhmA7XG5cdFx0fVxuXHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmhvdXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gKG1bMV0gYXMgc3RyaW5nKSArIHVscygn5bCP5pe2JywgJ+Wwj+aZgicpO1xuXHRcdH1cblx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypkYXlzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYCR7bVsxXX3lpKlgO1xuXHRcdH1cblx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp3ZWVrcz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIChtWzFdIGFzIHN0cmluZykgKyB1bHMoJ+WRqCcsICfpgLEnKTtcblx0XHR9XG5cdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gKG1bMV0gYXMgc3RyaW5nKSArIHVscygn5Liq5pyIJywgJ+WAi+aciCcpO1xuXHRcdH1cblx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp5ZWFycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGAke21bMV195bm0YDtcblx0XHR9XG5cdFx0aWYgKE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KHRpbWUudHJpbSgpKSkge1xuXHRcdFx0cmV0dXJuIHVscygn5peg6ZmQ5pyfJywgJ+eEoemZkOacnycpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGltZTtcblx0fSxcblx0LyoqXG5cdCAqIEFwcGVuZCBwdW5jdHVhdGlvbiB0byBhIHN0cmluZyB3aGVuIGl0J3MgbWlzc2luZ1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwdW5jdHVhdGlvblxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0YXBwZW5kUHVuY3R1YXRpb246IChzdHI6IHN0cmluZywgcHVuY3R1YXRpb24/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdGlmIChwdW5jdHVhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRwdW5jdHVhdGlvbiA9ICfjgIInO1xuXHRcdH1cblx0XHRpZiAoc3RyLnNlYXJjaCgvWy4/ITvjgILvvJ/vvIHvvJtdJC8pID09PSAtMSkge1xuXHRcdFx0c3RyICs9IHB1bmN0dWF0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9LFxufTtcbk1vcmViaXRzLnN0cmluZyA9IHN0cmluZztcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIGFycmF5cy5cbiAqXG4gKiBAbmFtZXNwYWNlIE1vcmViaXRzLmFycmF5XG4gKiBAbWVtYmVyb2YgTW9yZWJpdHNcbiAqL1xuY29uc3QgYXJyYXkgPSB7XG5cdC8qKlxuXHQgKiBSZW1vdmUgZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggZHVwbGljYXRlcyByZW1vdmVkLlxuXHQgKiBAdGhyb3dzIHtBcnJheX0gV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0ICovXG5cdHVuaXE6IDxUPihhcnI6IFRbXSk6IFRbXSA9PiB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkudW5pcScpO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGlkeDtcblx0XHR9KTtcblx0fSxcblx0LyoqXG5cdCAqIFJlbW92ZSBub24tZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggdGhlIGZpcnN0IGluc3RhbmNlIG9mIGVhY2ggdmFsdWVcblx0ICogcmVtb3ZlZDsgc3Vic2VxdWVudCBpbnN0YW5jZXMgb2YgdGhvc2UgdmFsdWVzIChkdXBsaWNhdGVzKSByZW1haW4uXG5cdCAqIEB0aHJvd3Mge0FycmF5fSBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHQgKi9cblx0ZHVwczogPFQ+KGFycjogVFtdKTogVFtdID0+IHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS5kdXBzJyk7XG5cdFx0fVxuXHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSAhPT0gaWR4O1xuXHRcdH0pO1xuXHR9LFxuXHQvKipcblx0ICogQnJlYWsgdXAgYW4gYXJyYXkgaW50byBzbWFsbGVyIGFycmF5cy5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gU2l6ZSBvZiBlYWNoIGNodW5rIChleGNlcHQgdGhlIGxhc3QsIHdoaWNoIGNvdWxkIGJlIGRpZmZlcmVudCkuXG5cdCAqIEByZXR1cm5zIHtBcnJheVtdfSBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzbWFsbGVyLCBjaHVua2VkIGFycmF5cy5cblx0ICogQHRocm93cyB7QXJyYXl9IFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdCAqL1xuXHRjaHVuazogPFQ+KGFycjogVFtdLCBzaXplOiBudW1iZXIpOiBUW11bXSA9PiB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuY2h1bmsnKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJyB8fCBzaXplIDw9IDApIHtcblx0XHRcdC8vIHByZXR0eSBpbXBvc3NpYmxlIHRvIGRvIGFueXRoaW5nIDopXG5cdFx0XHRyZXR1cm4gW2Fycl07IC8vIHdlIHJldHVybiBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHRoaXMgYXJyYXkuXG5cdFx0fVxuXG5cdFx0Y29uc3QgbnVtQ2h1bmtzID0gTWF0aC5jZWlsKGFyci5sZW5ndGggLyBzaXplKTtcblx0XHRjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tPFRbXT4oe2xlbmd0aDogbnVtQ2h1bmtzfSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaHVua3M7IGkrKykge1xuXHRcdFx0cmVzdWx0W2ldID0gYXJyLnNsaWNlKGkgKiBzaXplLCAoaSArIDEpICogc2l6ZSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG59O1xuTW9yZWJpdHMuYXJyYXkgPSBhcnJheTtcbi8qKlxuICogVGVtcG9yYXJpbHkgaGlkZSBhIHBhcnQgb2YgYSBzdHJpbmcgd2hpbGUgcHJvY2Vzc2luZyB0aGUgcmVzdCBvZiBpdC5cbiAqIFVzZWQgYnkge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UjY29tbWVudE91dEltYWdlfE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UuY29tbWVudE91dEltYWdlfS5cbiAqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHNcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBpbml0aWFsIHRleHQgdG8gcHJvY2Vzcy5cbiAqIEBleGFtcGxlIGNvbnN0IHUgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoJ0hlbGxvIHdvcmxkIDwhLS0gd29ybGQgLS0+IHdvcmxkJyk7XG4gKiB1LnVuYmluZCgnPCEtLScsICctLT4nKTsgLy8gdGV4dCBpbnNpZGUgY29tbWVudCByZW1haW5zIGludGFjdFxuICogdS5jb250ZW50ID0gdS5jb250ZW50LnJlcGxhY2UoL3dvcmxkL2csICdlYXJ0aCcpO1xuICogdS5yZWJpbmQoKTsgLy8gZ2l2ZXMgJ0hlbGxvIGVhcnRoIDwhLS0gd29ybGQgLS0+IGVhcnRoJ1xuICovXG5jbGFzcyBVbmJpbmRlciB7XG5cdC8qKiBUaGUgdGV4dCBiZWluZyBwcm9jZXNzZWQuICovXG5cdGNvbnRlbnQ6IHN0cmluZztcblx0cHJlZml4OiBzdHJpbmc7IC8vICVVTklROjowLjU5NTU5ODE2NDQ5MzgzMjQ6OlxuXHRwb3N0Zml4OiBzdHJpbmc7IC8vIDo6VU5JUSVcblx0Y291bnRlcjogbnVtYmVyOyAvLyAwKytcblx0aGlzdG9yeTogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgLy8ge31cblx0Y29uc3RydWN0b3Ioc3RyaW5nOiBzdHJpbmcpIHtcblx0XHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIHN0cmluZycpO1xuXHRcdH1cblx0XHR0aGlzLmNvbnRlbnQgPSBzdHJpbmc7XG5cdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHR0aGlzLmhpc3RvcnkgPSB7fTtcblx0XHR0aGlzLnByZWZpeCA9IGAlVU5JUTo6JHtNYXRoLnJhbmRvbSgpfTo6YDtcblx0XHR0aGlzLnBvc3RmaXggPSAnOjpVTklRJSc7XG5cdH1cblx0LyoqXG5cdCAqIEhpZGUgdGhlIHJlZ2lvbiBlbmNhcHN1bGF0ZWQgYnkgdGhlIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgZnJvbVxuXHQgKiBzdHJpbmcgcHJvY2Vzc2luZy4gIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgd2lsbCBiZSB1c2VkIGluIGFcblx0ICogUmVnRXhwLCBzbyBpdGVtcyB0aGF0IG5lZWQgZXNjYXBpbmcgc2hvdWxkIGJlIHVzZSBgXFxcXGAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBvc3RmaXhcblx0ICogQHRocm93cyB7RXJyb3J9IElmIGVpdGhlciBgcHJlZml4YCBvciBgcG9zdGZpeGAgaXMgbWlzc2luZy5cblx0ICovXG5cdHVuYmluZChwcmVmaXg6IHN0cmluZywgcG9zdGZpeDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCFwcmVmaXggfHwgIXBvc3RmaXgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQm90aCBwcmVmaXggYW5kIHBvc3RmaXggbXVzdCBiZSBwcm92aWRlZCcpO1xuXHRcdH1cblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYCR7cHJlZml4fShbXFxcXHNcXFxcU10qPykke3Bvc3RmaXh9YCwgJ2cnKTtcblx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyZSwgTW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sodGhpcykpO1xuXHR9XG5cdC8qKlxuXHQgKiBSZXN0b3JlIHRoZSBoaWRkZW4gcG9ydGlvbiBvZiB0aGUgYGNvbnRlbnRgIHN0cmluZy5cblx0ICpcblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHByb2Nlc3NlZCBvdXRwdXQuXG5cdCAqL1xuXHRyZWJpbmQoKTogc3RyaW5nIHtcblx0XHRsZXQge2NvbnRlbnR9ID0gdGhpcztcblx0XHRmb3IgKGNvbnN0IGN1cnJlbnQgaW4gdGhpcy5oaXN0b3J5KSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24odGhpcy5oaXN0b3J5LCBjdXJyZW50KSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoY3VycmVudCwgdGhpcy5oaXN0b3J5W2N1cnJlbnRdIGFzIHN0cmluZyk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMudW5iaW5kZXJcblx0ICovXG5cdHN0YXRpYyBnZXRDYWxsYmFjayhzZWxmOiBVbmJpbmRlcik6IChtYXRjaDogc3RyaW5nKSA9PiBzdHJpbmcge1xuXHRcdHJldHVybiAobWF0Y2gpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzZWxmLnByZWZpeCArIHNlbGYuY291bnRlciArIHNlbGYucG9zdGZpeDtcblx0XHRcdHNlbGYuaGlzdG9yeVtjdXJyZW50XSA9IG1hdGNoO1xuXHRcdFx0KytzZWxmLmNvdW50ZXI7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9XG59XG5Nb3JlYml0cy51bmJpbmRlciA9IFVuYmluZGVyO1xuLyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5kYXRlICoqKioqKioqKioqKioqKiogKi9cbi8qKiBOb3JtYWxpemVkIHVuaXQgbmFtZXMgd2l0aCBjb3JyZXNwb25kaW5nIGBEYXRlLnByb3RvdHlwZWAgZ2V0dGVyL3NldHRlciBuYW1lcy4gKi9cbnR5cGUgTWJEYXRlVW5pdE5vcm0gPSAnU2Vjb25kcycgfCAnTWludXRlcycgfCAnSG91cnMnIHwgJ0RhdGUnIHwgJ01vbnRoJyB8ICdGdWxsWWVhcic7XG4vKiogVGhlIGFyZ3VtZW50IGxpc3RzIGFjY2VwdGVkIGJ5IHRoZSBzdGFuZGFyZCBgRGF0ZWAgY29uc3RydWN0b3Igb3ZlcmxvYWRzLiAqL1xudHlwZSBNb3JlYml0c0RhdGVBcmdzID1cblx0fCBbXVxuXHR8IFt2YWx1ZTogbnVtYmVyIHwgc3RyaW5nXVxuXHR8IFtcblx0XHRcdHllYXI6IG51bWJlcixcblx0XHRcdG1vbnRoSW5kZXg6IG51bWJlcixcblx0XHRcdGRhdGU/OiBudW1iZXIsXG5cdFx0XHRob3Vycz86IG51bWJlcixcblx0XHRcdG1pbnV0ZXM/OiBudW1iZXIsXG5cdFx0XHRzZWNvbmRzPzogbnVtYmVyLFxuXHRcdFx0bXM/OiBudW1iZXIsXG5cdCAgXTtcbi8qKlxuICogQ3JlYXRlIGEgZGF0ZSBvYmplY3Qgd2l0aCBlbmhhbmNlZCBwcm9jZXNzaW5nIGNhcGFiaWxpdGllcywgYSBsYVxuICoge0BsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL3xtb21lbnQuanN9LiBNZWRpYVdpa2kgdGltZXN0YW1wIGZvcm1hdCBpcyBhbHNvXG4gKiBhY2NlcHRhYmxlLCBpbiBhZGRpdGlvbiB0byBldmVyeXRoaW5nIHRoYXQgSlMgRGF0ZSgpIGFjY2VwdHMuXG4gKlxuICogQHBhcmFtIHsuLi5hbnl9IGFyZ3NcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICogQGNsYXNzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWRlY2xhcmF0aW9uLW1lcmdpbmcgLS0gRGF0ZSDmlrnms5XnlLEgT2JqZWN0LmFzc2lnbiDlnKjov5DooYzml7blp5TmiZjmjILovb3vvIzpnIDopoHnsbsv5o6l5Y+j5aOw5piO5ZCI5bm25Lul6KGl5YWo57G75Z6LXG5jbGFzcyBNb3JlYml0c0RhdGUge1xuXHRfZDogRGF0ZTtcblx0LyoqXG5cdCAqIExvY2FsaXplZCBzdHJpbmdzIGZvciBkYXRlIHByb2Nlc3NpbmcuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1Nob3J0XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZGF5c1Nob3J0XG5cdCAqIEBwcm9wZXJ0eSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHJlbGF0aXZlVGltZXNcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHN0YXRpYyBsb2NhbGVEYXRhID0ge1xuXHRcdC8vIG1lc3NhZ2UgbmFtZXMgaGVyZSBjb3JyZXNwb25kIHRvIE1lZGlhV2lraSBtZXNzYWdlIG5hbWVzXG5cdFx0Ly8gTm8gaTE4biBhdCB0aGlzIHRpbWVcblx0XHRtb250aHM6IFsnMeaciCcsICcy5pyIJywgJzPmnIgnLCAnNOaciCcsICc15pyIJywgJzbmnIgnLCAnN+aciCcsICc45pyIJywgJznmnIgnLCAnMTDmnIgnLCAnMTHmnIgnLCAnMTLmnIgnXSxcblx0XHRtb250aHNTaG9ydDogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdGRheXM6IFsn5pif5pyf5pelJywgJ+aYn+acn+S4gCcsICfmmJ/mnJ/kuownLCAn5pif5pyf5LiJJywgJ+aYn+acn+WbmycsICfmmJ/mnJ/kupQnLCAn5pif5pyf5YWtJ10sXG5cdFx0ZGF5c1Nob3J0OiBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddLFxuXHRcdHJlbGF0aXZlVGltZXM6IHtcblx0XHRcdHRoaXNEYXk6ICdb5LuK5aSpXUEgaGg6bW0nLFxuXHRcdFx0cHJldkRheTogJ1vmmKjlpKldQSBoaDptbScsXG5cdFx0XHRuZXh0RGF5OiAnW+aYjuWkqV1BIGhoOm1tJyxcblx0XHRcdHRoaXNXZWVrOiAnZGRkZEEgaGg6bW0nLFxuXHRcdFx0cGFzdFdlZWs6ICdb5LiKXWRkZGRBIGhoOm1tJyxcblx0XHRcdG90aGVyOiAnWVlZWS1NTS1ERCcsXG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIE1hcCB1bml0cyB3aXRoIGdldHRlci9zZXR0ZXIgZnVuY3Rpb24gbmFtZXMsIGZvciBgYWRkYCBhbmQgYHN1YnRyYWN0YFxuXHQgKiBtZXRob2RzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWNvbmRzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtaW51dGVzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob3Vyc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gd2Vla3Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30geWVhcnNcblx0ICovXG5cdHN0YXRpYyB1bml0TWFwOiBSZWNvcmQ8c3RyaW5nLCBNYkRhdGVVbml0Tm9ybSB8ICdXZWVrJz4gPSB7XG5cdFx0c2Vjb25kczogJ1NlY29uZHMnLFxuXHRcdG1pbnV0ZXM6ICdNaW51dGVzJyxcblx0XHRob3VyczogJ0hvdXJzJyxcblx0XHRkYXlzOiAnRGF0ZScsXG5cdFx0d2Vla3M6ICdXZWVrJyxcblx0XHQvLyBOb3QgYSBmdW5jdGlvbiBidXQgaGFuZGxlZCBpbiBgYWRkYCB0aHJvdWdoIGN1bm5pbmcgdXNlIG9mIG11bHRpcGxpY2F0aW9uXG5cdFx0bW9udGhzOiAnTW9udGgnLFxuXHRcdHllYXJzOiAnRnVsbFllYXInLFxuXHR9O1xuXHRjb25zdHJ1Y3RvciguLi5hcmdzOiBNb3JlYml0c0RhdGVBcmdzKSB7XG5cdFx0Ly8gQ2hlY2sgTWVkaWFXaWtpIGZvcm1hdHNcblx0XHQvLyBNdXN0IGJlIGZpcnN0IHNpbmNlIGZpcmVmb3ggZXJyb25lb3VzbHkgYWNjZXB0cyB0aGUgdGltZXN0YW1wXG5cdFx0Ly8gZm9ybWF0LCBzYW5zIHRpbWV6b25lIChTZWUgYWxzbzogIzkyMSwgIzkzNiwgIzExNzQsICMxMTg3KSwgYW5kIHRoZVxuXHRcdC8vIDE0LWRpZ2l0IHN0cmluZyB3aWxsIGJlIGludGVycHJldGVkIGRpZmZlcmVudGx5LlxuXHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y29uc3QgW3BhcmFtXSA9IGFyZ3M7XG5cdFx0XHRpZiAoL15cXGR7MTR9JC8udGVzdChTdHJpbmcocGFyYW0pKSkge1xuXHRcdFx0XHQvLyBZWVlZTU1EREhIbW1zc1xuXHRcdFx0XHRjb25zdCBkaWdpdE1hdGNoID0gLyhcXGR7NH0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8uZXhlYyhTdHJpbmcocGFyYW0pKSBhc1xuXHRcdFx0XHRcdFtzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmddIHwgbnVsbDtcblx0XHRcdFx0aWYgKGRpZ2l0TWF0Y2gpIHtcblx0XHRcdFx0XHQvLyAuLi4uLiB5ZWFyIC4uLiBtb250aCAuLiBkYXRlIC4uLiBob3VyIC4uLi4gbWludXRlIC4uLi4uIHNlY29uZFxuXHRcdFx0XHRcdHRoaXMuX2QgPSBuZXcgRGF0ZShcblx0XHRcdFx0XHRcdERhdGUuVVRDKFxuXHRcdFx0XHRcdFx0XHROdW1iZXIoZGlnaXRNYXRjaFsxXSksXG5cdFx0XHRcdFx0XHRcdE51bWJlcihkaWdpdE1hdGNoWzJdKSAtIDEsXG5cdFx0XHRcdFx0XHRcdE51bWJlcihkaWdpdE1hdGNoWzNdKSxcblx0XHRcdFx0XHRcdFx0TnVtYmVyKGRpZ2l0TWF0Y2hbNF0pLFxuXHRcdFx0XHRcdFx0XHROdW1iZXIoZGlnaXRNYXRjaFs1XSksXG5cdFx0XHRcdFx0XHRcdE51bWJlcihkaWdpdE1hdGNoWzZdKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBXaWtpdGV4dCBzaWduYXR1cmUgdGltZXN0YW1wXG5cdFx0XHRcdGNvbnN0IGRhdGVQYXJ0cyA9IE1vcmViaXRzLmwxMG4uc2lnbmF0dXJlVGltZXN0YW1wRm9ybWF0KHBhcmFtKTtcblx0XHRcdFx0aWYgKGRhdGVQYXJ0cykge1xuXHRcdFx0XHRcdHRoaXMuX2QgPSBuZXcgRGF0ZShSZWZsZWN0LmFwcGx5KERhdGUuVVRDLCB1bmRlZmluZWQsIGRhdGVQYXJ0cykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIFRyeSBzdGFuZGFyZCBkYXRlXG5cdFx0dGhpcy5fZCA/Pz0gbmV3IERhdGUoLi4uKGFyZ3MgYXMgQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBEYXRlPikpO1xuXHRcdC8vIFN0aWxsIG5vP1xuXHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdG13LmxvZy53YXJuKCdJbnZhbGlkIE1vcmViaXRzLmRhdGUgaW5pdGlhbGlzYXRpb246JywgYXJncyk7XG5cdFx0fVxuXHR9XG5cdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cblx0aXNWYWxpZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7KERhdGV8TW9yZWJpdHMuZGF0ZSl9IGRhdGVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRpc0JlZm9yZShkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCk7XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7KERhdGV8TW9yZWJpdHMuZGF0ZSl9IGRhdGVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRpc0FmdGVyKGRhdGU6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0Z2V0VVRDTW9udGhOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNbdGhpcy5nZXRVVENNb250aCgpXSA/PyAnJztcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0Z2V0VVRDTW9udGhOYW1lQWJicmV2KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldFVUQ01vbnRoKCldID8/ICcnO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRnZXRNb250aE5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldE1vbnRoKCldID8/ICcnO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRnZXRNb250aE5hbWVBYmJyZXYoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0TW9udGgoKV0gPz8gJyc7XG5cdH1cblx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdGdldFVUQ0RheU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXRVVENEYXkoKV0gPz8gJyc7XG5cdH1cblx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdGdldFVUQ0RheU5hbWVBYmJyZXYoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldFVUQ0RheSgpXSA/PyAnJztcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0Z2V0RGF5TmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldERheSgpXSA/PyAnJztcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0Z2V0RGF5TmFtZUFiYnJldigpOiBzdHJpbmcge1xuXHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1Nob3J0W3RoaXMuZ2V0RGF5KCldID8/ICcnO1xuXHR9XG5cdC8qKlxuXHQgKiBBZGQgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGludmFsaWQgb3IgdW5zdXBwb3J0ZWQgdW5pdCBpcyBnaXZlbi5cblx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdCAqL1xuXHRhZGQobnVtYmVyOiBudW1iZXIgfCBzdHJpbmcsIHVuaXQ6IHN0cmluZyk6IE1vcmViaXRzRGF0ZSB7XG5cdFx0bGV0IG51bSA9IE51bWJlci5wYXJzZUludChTdHJpbmcobnVtYmVyKSwgMTApOyAvLyBub3JtYWxpemVcblx0XHRpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgbnVtYmVyIFwiJHtudW1iZXJ9XCIgcHJvdmlkZWQuYCk7XG5cdFx0fVxuXHRcdHVuaXQgPSB1bml0LnRvTG93ZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxuXHRcdGNvbnN0IHt1bml0TWFwfSA9IE1vcmViaXRzLmRhdGU7XG5cdFx0bGV0IHVuaXROb3JtOiBNYkRhdGVVbml0Tm9ybSB8ICdXZWVrJyB8IHVuZGVmaW5lZCA9IHVuaXRNYXBbdW5pdF0gfHwgdW5pdE1hcFtgJHt1bml0fXNgXTsgLy8gc28gdGhhdCBib3RoIHNpbmd1bGFyIGFuZCAgcGx1cmFsIGZvcm1zIHdvcmtcblx0XHRpZiAodW5pdE5vcm0pIHtcblx0XHRcdC8vIE5vIGJ1aWx0LWluIHdlZWsgZnVuY3Rpb25zLCBzbyByYXRoZXIgdGhhbiBidWlsZCBvdXQgSVNPJ3MgZ2V0V2Vlay9zZXRXZWVrLCBqdXN0IG11bHRpcGx5XG5cdFx0XHQvLyBQcm9iYWJseSBjYW4ndCBiZSB1c2VkIGZvciBKdWxpYW4tPkdyZWdvcmlhbiBjaGFuZ2VvdmVycywgZXRjLlxuXHRcdFx0aWYgKHVuaXROb3JtID09PSAnV2VlaycpIHtcblx0XHRcdFx0dW5pdE5vcm0gPSAnRGF0ZSc7XG5cdFx0XHRcdG51bSAqPSA3O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZ2V0dGVyID0gYGdldCR7dW5pdE5vcm19YCBhcyBgZ2V0JHtNYkRhdGVVbml0Tm9ybX1gO1xuXHRcdFx0Y29uc3Qgc2V0dGVyID0gYHNldCR7dW5pdE5vcm19YCBhcyBgc2V0JHtNYkRhdGVVbml0Tm9ybX1gO1xuXHRcdFx0dGhpc1tzZXR0ZXJdKHRoaXNbZ2V0dGVyXSgpICsgbnVtKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBcIiR7dW5pdH1cIjogT25seSAke09iamVjdC5rZXlzKHVuaXRNYXApLmpvaW4oJywgJyl9IGFyZSBhbGxvd2VkLmApO1xuXHR9XG5cdC8qKlxuXHQgKiBTdWJ0cmFjdHMgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuZGF0ZX1cblx0ICovXG5cdHN1YnRyYWN0KG51bWJlcjogbnVtYmVyLCB1bml0OiBzdHJpbmcpOiBNb3JlYml0c0RhdGUge1xuXHRcdHJldHVybiB0aGlzLmFkZCgtbnVtYmVyLCB1bml0KTtcblx0fVxuXHQvKipcblx0ICogRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcgcGVyIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuXHQgKiBSZXBsYWNlbWVudCBzeW50YXggaXMgYSBzdWJzZXQgb2YgdGhhdCBpbiBtb21lbnQuanM6XG5cdCAqXG5cdCAqIHwgU3ludGF4IHwgT3V0cHV0IHxcblx0ICogfC0tLS0tLS0tfC0tLS0tLS0tfFxuXHQgKiB8IEggfCBIb3VycyAoMjQtaG91cikgfFxuXHQgKiB8IEhIIHwgSG91cnMgKDI0LWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHQgKiB8IGggfCBIb3VycyAoMTItaG91cikgfFxuXHQgKiB8IGhoIHwgSG91cnMgKDEyLWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHQgKiB8IEEgfCBBTSBvciBQTSB8XG5cdCAqIHwgbSB8IE1pbnV0ZXMgfFxuXHQgKiB8IG1tIHwgTWludXRlcyAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdCAqIHwgcyB8IFNlY29uZHMgfFxuXHQgKiB8IHNzIHwgU2Vjb25kcyAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdCAqIHwgU1NTIHwgTWlsbGlzZWNvbmRzIGZyYWdtZW50LCAzIGRpZ2l0cyB8XG5cdCAqIHwgZCB8IERheSBudW1iZXIgb2YgdGhlIHdlZWsgKFN1bj0wKSB8XG5cdCAqIHwgZGRkIHwgQWJicmV2aWF0ZWQgZGF5IG5hbWUgfFxuXHQgKiB8IGRkZGQgfCBGdWxsIGRheSBuYW1lIHxcblx0ICogfCBEIHwgRGF0ZSB8XG5cdCAqIHwgREQgfCBEYXRlIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0ICogfCBNIHwgTW9udGggbnVtYmVyICgxLWluZGV4ZWQpIHxcblx0ICogfCBNTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0ICogfCBNTU0gfCBBYmJyZXZpYXRlZCBtb250aCBuYW1lIHxcblx0ICogfCBNTU1NIHwgRnVsbCBtb250aCBuYW1lIHxcblx0ICogfCBZIHwgWWVhciB8XG5cdCAqIHwgWVkgfCBGaW5hbCB0d28gZGlnaXRzIG9mIHllYXIgKDIwIGZvciAyMDIwLCA0MiBmb3IgMTk0MikgfFxuXHQgKiB8IFlZWVkgfCBZZWFyIChzYW1lIGFzIGBZYCkgfFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0c3RyIC0gRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcsIHVzaW5nXG5cdCAqIHRoZSByZXBsYWNlbWVudCBzeW50YXguICBVc2UgYFtgIGFuZCBgXWAgdG8gZXNjYXBlIGl0ZW1zLiAgSWYgbm90XG5cdCAqIHByb3ZpZGVkLCB3aWxsIHJldHVybiB0aGUgSVNPLTg2MDEtZm9ybWF0dGVkIHN0cmluZy5cblx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSBgc3lzdGVtYCAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHQgKiBgdXRjYCwgb3Igc3BlY2lmeSBhIHRpbWUgem9uZSBhcyBudW1iZXIgb2YgbWludXRlcyByZWxhdGl2ZSB0byBVVEMuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRmb3JtYXQoZm9ybWF0c3RyPzogc3RyaW5nLCB6b25lPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcblx0XHRpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG5cdFx0XHRyZXR1cm4gJ0ludmFsaWQgZGF0ZSc7IC8vIFB1dCB0aGUgdHJ1dGggb3V0LCBwcmVmZXJhYmxlIHRvIFwiTmFOTmFOTmFuIE5hTjpOYU5cIiBvciB3aGF0ZXZlclxuXHRcdH1cblxuXHRcdGxldCB1ZGF0ZTogTW9yZWJpdHNEYXRlID0gdGhpcztcblx0XHQvLyBjcmVhdGUgYSBuZXcgZGF0ZSBvYmplY3QgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGRhdGUgdG8gZGlzcGxheSBhcyBzeXN0ZW0gdGltZVxuXHRcdGlmICh6b25lID09PSAndXRjJykge1xuXHRcdFx0dWRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmdldFRpbWUoKSkuYWRkKHRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB6b25lID09PSAnbnVtYmVyJykge1xuXHRcdFx0Ly8gY29udmVydCB0byB1dGMsIHRoZW4gYWRkIHRoZSB1dGMgb2Zmc2V0IGdpdmVuXG5cdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpICsgem9uZSwgJ21pbnV0ZXMnKTtcblx0XHR9XG5cdFx0Ly8gZGVmYXVsdCB0byBJU09TdHJpbmdcblx0XHRpZiAoIWZvcm1hdHN0cikge1xuXHRcdFx0cmV0dXJuIHVkYXRlLnRvSVNPU3RyaW5nKCk7XG5cdFx0fVxuXHRcdGNvbnN0IHBhZCA9IChudW06IG51bWJlciwgbGVuPzogbnVtYmVyKSA9PiB7XG5cdFx0XHRsZW4gfHw9IDI7IC8vIFVwIHRvIGxlbmd0aCBvZiAwMCArIDFcblx0XHRcdHJldHVybiBgMDAke251bX1gLnRvU3RyaW5nKCkuc2xpY2UoMCAtIGxlbik7XG5cdFx0fTtcblx0XHRjb25zdCBoMjQgPSB1ZGF0ZS5nZXRIb3VycygpO1xuXHRcdGNvbnN0IG0gPSB1ZGF0ZS5nZXRNaW51dGVzKCk7XG5cdFx0Y29uc3QgcyA9IHVkYXRlLmdldFNlY29uZHMoKTtcblx0XHRjb25zdCBtcyA9IHVkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXHRcdGNvbnN0IEQgPSB1ZGF0ZS5nZXREYXRlKCk7XG5cdFx0Y29uc3QgTSA9IHVkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdGNvbnN0IFkgPSB1ZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdGNvbnN0IGgxMiA9IGgyNCAlIDEyIHx8IDEyO1xuXHRcdGNvbnN0IGFtT3JQbSA9IGgyNCA+PSAxMiA/ICfkuIvljYgnIDogJ+S4iuWNiCc7XG5cdFx0Y29uc3QgcmVwbGFjZW1lbnRNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4gPSB7XG5cdFx0XHRISDogcGFkKGgyNCksXG5cdFx0XHRIOiBoMjQsXG5cdFx0XHRoaDogcGFkKGgxMiksXG5cdFx0XHRoOiBoMTIsXG5cdFx0XHRBOiBhbU9yUG0sXG5cdFx0XHRtbTogcGFkKG0pLFxuXHRcdFx0bSxcblx0XHRcdHNzOiBwYWQocyksXG5cdFx0XHRzLFxuXHRcdFx0U1NTOiBwYWQobXMsIDMpLFxuXHRcdFx0ZGRkZDogdWRhdGUuZ2V0RGF5TmFtZSgpLFxuXHRcdFx0ZGRkOiB1ZGF0ZS5nZXREYXlOYW1lQWJicmV2KCksXG5cdFx0XHRkOiB1ZGF0ZS5nZXREYXkoKSxcblx0XHRcdEREOiBwYWQoRCksXG5cdFx0XHRELFxuXHRcdFx0TU1NTTogdWRhdGUuZ2V0TW9udGhOYW1lKCksXG5cdFx0XHRNTU06IHVkYXRlLmdldE1vbnRoTmFtZUFiYnJldigpLFxuXHRcdFx0TU06IHBhZChNKSxcblx0XHRcdE0sXG5cdFx0XHRZWVlZOiBZLFxuXHRcdFx0WVk6IHBhZChZICUgMTAwKSxcblx0XHRcdFksXG5cdFx0fTtcblx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihmb3JtYXRzdHIpOyAvLyBlc2NhcGUgc3R1ZmYgYmV0d2VlbiBbLi4uXVxuXHRcdHVuYmluZGVyLnVuYmluZChTdHJpbmcucmF3YFxcW2AsIFN0cmluZy5yYXdgXFxdYCk7XG5cdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShcblx0XHRcdC8qIFJlZ2V4IG5vdGVzOlxuXHRcdFx0ICogZChkezIsM30pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMyBvciA0IG9jY3VycmVuY2VzIG9mICdkJyAoJ2RkJyBpcyB0cmVhdGVkIGFzIGEgZG91YmxlIG1hdGNoIG9mICdkJylcblx0XHRcdCAqIFl7MSwyfShZezJ9KT8gbWF0Y2hlcyBleGFjdGx5IDEsIDIgb3IgNCBvY2N1cnJlbmNlcyBvZiAnWSdcblx0XHRcdCAqL1xuXHRcdFx0L0h7MSwyfXxoezEsMn18bXsxLDJ9fHN7MSwyfXxTU1N8ZChkezIsM30pP3xEezEsMn18TXsxLDR9fFl7MSwyfShZezJ9KT98QS9nLFxuXHRcdFx0KG1hdGNoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBTdHJpbmcocmVwbGFjZW1lbnRNYXBbbWF0Y2hdID8/IG1hdGNoKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiB1bmJpbmRlci5yZWJpbmQoKS5yZXBsYWNlKC9cXFsoLio/KVxcXS9nLCAnJDEnKTtcblx0fVxuXHQvKipcblx0ICogR2l2ZXMgYSByZWFkYWJsZSByZWxhdGl2ZSB0aW1lIHN0cmluZyBzdWNoIGFzIFwiWWVzdGVyZGF5IGF0IDY6NDMgUE1cIiBvciBcIkxhc3QgVGh1cnNkYXkgYXQgMTE6NDUgQU1cIi5cblx0ICogU2ltaWxhciB0byBgY2FsZW5kYXJgIGluIG1vbWVudC5qcywgYnV0IHdpdGggdGltZSB6b25lIHN1cHBvcnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gJ3N5c3RlbScgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0ICogJ3V0YycgKGZvciBVVEMpLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHBhc3QgVVRDLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Y2FsZW5kYXIoem9uZT86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG5cdFx0Ly8gWmVybyBvdXQgdGhlIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIGFuZCBtaWxsaXNlY29uZHMgLSBrZWVwaW5nIG9ubHkgdGhlIGRhdGU7XG5cdFx0Ly8gZmluZCB0aGUgZGlmZmVyZW5jZS4gTm90ZSB0aGF0IHNldEhvdXJzKCkgcmV0dXJucyB0aGUgc2FtZSB0aGluZyBhcyBnZXRUaW1lKCkuXG5cdFx0Y29uc3QgZGF0ZURpZmYgPSAobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKHRoaXMuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSkgLyA4LjY0ZTc7XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIGRhdGVEaWZmID09PSAwOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMudGhpc0RheSwgem9uZSk7XG5cdFx0XHRjYXNlIGRhdGVEaWZmID09PSAxOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucHJldkRheSwgem9uZSk7XG5cdFx0XHRjYXNlIGRhdGVEaWZmID4gMCAmJiBkYXRlRGlmZiA8IDc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5wYXN0V2Vlaywgem9uZSk7XG5cdFx0XHRjYXNlIGRhdGVEaWZmID09PSAtMTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLm5leHREYXksIHpvbmUpO1xuXHRcdFx0Y2FzZSBkYXRlRGlmZiA8IDAgJiYgZGF0ZURpZmYgPiAtNzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNXZWVrLCB6b25lKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5vdGhlciwgem9uZSk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBHZXQgYSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIHdpa2l0ZXh0IHNlY3Rpb24gdGl0bGVzLCBzdWNoXG5cdCAqIGFzIGA9PURlY2VtYmVyIDIwMTk9PWAgb3IgYD09PSBKYW4gMjAxOCA9PT1gLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UmVnRXhwfVxuXHQgKi9cblx0bW9udGhIZWFkZXJSZWdleCgpOiBSZWdFeHAge1xuXHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0YF4oPT0rKVxcXFxzKiR7dGhpcy5nZXRVVENGdWxsWWVhcigpfeW5tCg/OiR7dGhpcy5nZXRVVENNb250aE5hbWUoKX18JHt0aGlzLmdldFVUQ01vbnRoTmFtZUFiYnJldigpfSlcXFxccypcXFxcMWAsXG5cdFx0XHQnbWcnXG5cdFx0KTtcblx0fVxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHdpa2l0ZXh0IHNlY3Rpb24gaGVhZGVyIHdpdGggdGhlIG1vbnRoIGFuZCB5ZWFyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2xldmVsPTJdIC0gSGVhZGVyIGxldmVsLiAgUGFzcyAwIGZvciBqdXN0IHRoZSB0ZXh0XG5cdCAqIHdpdGggbm8gd2lraXRleHQgbWFya2VycyAoPT0pLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0bW9udGhIZWFkZXIobGV2ZWw/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdC8vIERlZmF1bHQgdG8gMiwgYnV0IGFsbG93IGZvciAwIG9yIHN0cmluZ3kgbnVtYmVyc1xuXHRcdGxldmVsID0gTnVtYmVyLnBhcnNlSW50KFN0cmluZyhsZXZlbCksIDEwKTtcblx0XHRsZXZlbCA9IE51bWJlci5pc05hTihsZXZlbCkgPyAyIDogbGV2ZWw7XG5cdFx0Y29uc3QgaGVhZGVyID0gJz0nLnJlcGVhdChsZXZlbCk7XG5cdFx0Y29uc3QgdGV4dCA9IGAke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9YDtcblx0XHRpZiAoaGVhZGVyLmxlbmd0aCkge1xuXHRcdFx0Ly8gd2lraXRleHQtZm9ybWF0dGVkIGhlYWRlclxuXHRcdFx0cmV0dXJuIGAke2hlYWRlcn0gJHt0ZXh0fSAke2hlYWRlcn1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGV4dDsgLy8gSnVzdCB0aGUgc3RyaW5nXG5cdH1cbn1cbi8vIEFsbG93IG5hdGl2ZSBEYXRlLnByb3RvdHlwZSBtZXRob2RzIHRvIGJlIHVzZWQgb24gTW9yZWJpdHMuZGF0ZSBvYmplY3RzXG4vLyBFeGNsdWRlIG1ldGhvZHMgdGhhdCBjb2xsaWRlIHdpdGggUGFnZVRyaWFnZSdzIERhdGUuanMgZXh0ZXJuYWwsIHdoaWNoIGNsb2JiZXJzIG5hdGl2ZSBEYXRlXG5jb25zdCBkZWxlZ2F0ZWREYXRlUHJvdG86IFJlY29yZDxzdHJpbmcsICh0aGlzOiBNb3JlYml0c0RhdGUsIC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdW5rbm93bj4gPSB7fTtcbmZvciAoY29uc3QgZnVuYyBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhEYXRlLnByb3RvdHlwZSkpIHtcblx0aWYgKGZ1bmMgIT09ICdjb25zdHJ1Y3RvcicgJiYgIVsnYWRkJywgJ2dldERheU5hbWUnLCAnZ2V0TW9udGhOYW1lJ10uaW5jbHVkZXMoZnVuYykpIHtcblx0XHRkZWxlZ2F0ZWREYXRlUHJvdG9bZnVuY10gPSBmdW5jdGlvbiAodGhpczogTW9yZWJpdHNEYXRlLCAuLi5hcmdzOiB1bmtub3duW10pOiB1bmtub3duIHtcblx0XHRcdHJldHVybiAodGhpcy5fZCBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsICguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd24+KVtmdW5jXSEoLi4uYXJncyk7XG5cdFx0fTtcblx0fVxufVxuT2JqZWN0LmFzc2lnbihNb3JlYml0c0RhdGUucHJvdG90eXBlLCBkZWxlZ2F0ZWREYXRlUHJvdG8pO1xuLyoqXG4gKiBOYXRpdmUgRGF0ZS5wcm90b3R5cGUgbWV0aG9kcyBkZWxlZ2F0ZWQgdG8gdGhlIHdyYXBwZWQgRGF0ZSBpbnN0YW5jZS5cbiAqIEBzZWUgZGVsZWdhdGVkRGF0ZVByb3RvIGFib3ZlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWRlY2xhcmF0aW9uLW1lcmdpbmcgLS0g5ZCM5LiK77ya5aOw5piO5aeU5omY57uZ5Y6f5Z6L5a6e5L6L55qEIERhdGUg5pa55rOVXG5pbnRlcmZhY2UgTW9yZWJpdHNEYXRlIGV4dGVuZHMgRGF0ZSB7fVxuTW9yZWJpdHMuZGF0ZSA9IE1vcmViaXRzRGF0ZTtcblxuaW50ZXJmYWNlIE1vcmViaXRzTmFtZXNwYWNlIHtcblx0d2lraTogV2lraU5hbWVzcGFjZTtcbn1cbmludGVyZmFjZSBXaWtpTmFtZXNwYWNlIHt9XG5pbnRlcmZhY2UgV2lraU5hbWVzcGFjZSB7XG5cdC8qKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCBhcyBvZiBOb3ZlbWJlciAyMDIwICovXG5cdGlzUGFnZVJlZGlyZWN0OiAoKSA9PiBib29sZWFuO1xuXHQvKiogQ291bnRlciBpbmNyZW1lbnRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgTW9yZWJpdHMud2lraS5hcGkgY2FsbC4gKi9cblx0bnVtYmVyT2ZBY3Rpb25zTGVmdDogbnVtYmVyO1xuXHQvKiogQ291bnRlciB1c2VkIGZvciBiYXRjaCBvcGVyYXRpb25zLCBtYW5hZ2VkIGJ5IGFkZENoZWNrcG9pbnQvcmVtb3ZlQ2hlY2twb2ludC4gKi9cblx0bmJyT2ZDaGVja3BvaW50c0xlZnQ6IG51bWJlcjtcblx0LyoqIERpc3BsYXkgbWVzc2FnZSBhbmQvb3IgcmVkaXJlY3QgdG8gcGFnZSB1cG9uIGNvbXBsZXRpb24gb2YgdGFza3MuICovXG5cdGFjdGlvbkNvbXBsZXRlZDogV2lraUFjdGlvbkNvbXBsZXRlZDtcblx0LyoqIEluZGljYXRlIHRoYXQgcHJvY2Vzc2luZyBpcyBub3QgY29tcGxldGUgdXBvbiB0aGUgY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2sgZnVuY3Rpb24uICovXG5cdGFkZENoZWNrcG9pbnQ6ICgpID0+IHZvaWQ7XG5cdC8qKiBTaWduYWwgdGhlIGVuZCBvZiBhIGJhdGNoLiAqL1xuXHRyZW1vdmVDaGVja3BvaW50OiAoKSA9PiB2b2lkO1xuXHQvKiogQW4gZWFzeSB3YXkgdG8gdGFsayB0byB0aGUgTWVkaWFXaWtpIEFQSS4gKi9cblx0YXBpOiB0eXBlb2YgV2lraUFwaTtcblx0LyoqIFJldHJpZXZlcyB3aWtpdGV4dCBmcm9tIGEgcGFnZS4gQ2FjaGluZyBlbmFibGVkLCBkdXJhdGlvbiAxIGRheS4gKi9cblx0Z2V0Q2FjaGVkSnNvbjogKHRpdGxlOiBzdHJpbmcpID0+IEpRdWVyeS5Qcm9taXNlPHVua25vd24+O1xufVxuXG4vKipcbiAqIFRoZSBjYWxsYWJsZSBgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWRgLCB3aXRoIGl0cyBwZXItYWN0aW9uXG4gKiBjb25maWd1cmF0aW9uIHByb3BlcnRpZXMgYXR0YWNoZWQuXG4gKi9cbnR5cGUgV2lraUFjdGlvbkNvbXBsZXRlZCA9ICgoc2VsZj86IHVua25vd24pID0+IHZvaWQpICYge1xuXHRldmVudDogKHNlbGY/OiB1bmtub3duKSA9PiB2b2lkO1xuXHR0aW1lT3V0OiBudW1iZXI7XG5cdHJlZGlyZWN0OiBzdHJpbmcgfCBudWxsO1xuXHRub3RpY2U6IHN0cmluZyB8IG51bGw7XG5cdC8qKiBBc3NpZ25lZCBieSBjb25zdW1lcnMgYmVmb3JlIHRoZSBmaXJzdCBjYWxsLCBzZWUgTW9yZWJpdHMud2lraS5wYWdlLiAqL1xuXHRmb2xsb3dSZWRpcmVjdD86IGJvb2xlYW47XG59O1xuXG4vKiogQSBNb3JlYml0cy5zdGF0dXMgaW5zdGFuY2UgKGRlZmluZWQgYnkgYSBsYXRlciBmcmFnbWVudCBvZiB0aGlzIG1vZHVsZSkuICovXG50eXBlIFN0YXR1c0VsZW1lbnQgPSBJbnN0YW5jZVR5cGU8TW9yZWJpdHNOYW1lc3BhY2VbJ3N0YXR1cyddPjtcblxuLyoqXG4gKiBUaGUgSlNPTiByZXNwb25zZSBvZiBhIE1lZGlhV2lraSBBUEkgcmVxdWVzdCwgaW4gdGhlIHBhcnRpYWwgc2hhcGUgdXNlZFxuICogYnkgTW9yZWJpdHMuXG4gKi9cbmludGVyZmFjZSBNd0FwaVJlc3BvbnNlIHtcblx0LyoqIEFQSSBlcnJvcnMsIGxpbWl0ZWQgdG8gdGhlIGZpcnN0IG9uZS4gKi9cblx0ZXJyb3JzPzoge2NvZGU6IHN0cmluZzsgaHRtbD86IHN0cmluZzsgdGV4dD86IHN0cmluZ31bXTtcblx0W2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuLyoqIFRoZSBxdWVyeSBwYXlsb2FkIG9mIGEgTW9yZWJpdHMud2lraS5hcGkgcmVxdWVzdC4gKi9cbmludGVyZmFjZSBXaWtpQXBpUXVlcnkge1xuXHRhY3Rpb24/OiBzdHJpbmc7XG5cdGFzc2VydD86IHN0cmluZztcblx0ZXJyb3Jmb3JtYXQ/OiBzdHJpbmc7XG5cdHVzZWxhbmc/OiBzdHJpbmc7XG5cdGVycm9ybGFuZz86IHN0cmluZztcblx0ZXJyb3JzdXNlbG9jYWw/OiBudW1iZXI7XG5cdGZvcm1hdD86IHN0cmluZztcblx0Zm9ybWF0dmVyc2lvbj86IHN0cmluZyB8IG51bWJlcjtcblx0dGFncz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXHR0b2tlbj86IHN0cmluZyB8IG51bGw7XG5cdFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0LyoqIFVzZWQgYnkgY29uc3VtZXJzIHRvIG92ZXJyaWRlIHRoZSBhY3Rpb25Db21wbGV0ZWQgcmVkaXJlY3QgdGltZW91dCAobXMpLiAqL1xuXHRcdHdwQWN0aW9uQ29tcGxldGVkVGltZU91dD86IG51bWJlcjtcblx0fVxufVxuXG4vKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kgKioqKioqKioqKioqKioqKiAqL1xuLyoqXG4gKiBWYXJpb3VzIG9iamVjdHMgZm9yIHdpa2kgZWRpdGluZyBhbmQgQVBJIGFjY2VzcywgaW5jbHVkaW5nXG4gKiB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfS5cbiAqXG4gKiBAbmFtZXNwYWNlIE1vcmViaXRzLndpa2lcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICovXG5Nb3JlYml0cy53aWtpID0ge30gYXMgV2lraU5hbWVzcGFjZTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgYXMgb2YgTm92ZW1iZXIgMjAyMFxuICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Nb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRjb25zb2xlLndhcm4oXG5cdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMud2lraS5pc1BhZ2VSZWRpcmVjdCBoYXMgYmVlbiBkZXByZWNhdGVkLCB1c2UgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgaW5zdGVhZC4nXG5cdCk7XG5cdHJldHVybiBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCgpO1xufTtcbi8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgKioqKioqKioqKioqKioqKiAqL1xuLyoqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuICogQHR5cGUge251bWJlcn1cbiAqL1xuTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMDtcbi8qKlxuICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbk1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPSAwO1xuLyoqXG4gKiBEaXNwbGF5IG1lc3NhZ2UgYW5kL29yIHJlZGlyZWN0IHRvIHBhZ2UgdXBvbiBjb21wbGV0aW9uIG9mIHRhc2tzLlxuICpcbiAqIEV2ZXJ5IGNhbGwgdG8gTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHJlc3VsdHMgaW4gdGhlIGRpc3BhdGNoIG9mIGFuXG4gKiBhc3luY2hyb25vdXMgY2FsbGJhY2suIEVhY2ggY2FsbGJhY2sgY2FuIGluIHR1cm4gbWFrZSBhbiBhZGRpdGlvbmFsIGNhbGwgdG9cbiAqIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSB0byBjb250aW51ZSBhIHByb2Nlc3Npbmcgc2VxdWVuY2UuIEF0IHRoZVxuICogY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2sgb2YgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLCBpdCBpcyBub3RcbiAqIHBvc3NpYmxlIHRvIHNpbXBseSByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGNhbGxlciBiZWNhdXNlIHRoZXJlIGlzIG5vIGNhbGxcbiAqIHN0YWNrIGxlYWRpbmcgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dC4gSW5zdGVhZCxcbiAqIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXMgY2FsbGVkIHRvIGRpc3BsYXkgdGhlIHJlc3VsdCB0b1xuICogdGhlIHVzZXIgYW5kIHRvIHBlcmZvcm0gYW4gb3B0aW9uYWwgcGFnZSByZWRpcmVjdC5cbiAqXG4gKiBUaGUgZGV0ZXJtaW5hdGlvbiBvZiB3aGVuIHRvIGNhbGwgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSBpc1xuICogbWFuYWdlZCB0aHJvdWdoIHRoZSBnbG9iYWxzIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBhbmRcbiAqIE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQuIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBpc1xuICogaW5jcmVtZW50ZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IE1vcmViaXRzLndpa2kuYXBpIGNhbGwgYW5kIGRlY3JlbWVudGVkXG4gKiBhZnRlciB0aGUgY29tcGxldGlvbiBvZiBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGRvZXNcbiAqIG5vdCBjcmVhdGUgYSBuZXcgTW9yZWJpdHMud2lraS5hcGkgb2JqZWN0IGJlZm9yZSBleGl0aW5nLCBpdCBpcyB0aGUgZmluYWxcbiAqIHN0ZXAgaW4gdGhlIHByb2Nlc3NpbmcgY2hhaW4gYW5kIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgd2lsbFxuICogdGhlbiBiZSBjYWxsZWQuXG4gKlxuICogT3B0aW9uYWxseSwgY2FsbGVycyBtYXkgdXNlIE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpIHRvIGluZGljYXRlIHRoYXRcbiAqIHByb2Nlc3NpbmcgaXMgbm90IGNvbXBsZXRlIHVwb24gdGhlIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrXG4gKiBmdW5jdGlvbi4gIFRoaXMgaXMgdXNlZCBmb3IgYmF0Y2ggb3BlcmF0aW9ucy4gVGhlIGVuZCBvZiBhIGJhdGNoIGlzXG4gKiBzaWduYWxlZCBieSBjYWxsaW5nIE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpLlxuICpcbiAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuICovXG5Nb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCA9ICgoc2VsZj86IHVua25vd24pID0+IHtcblx0aWYgKC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IDw9IDAgJiYgTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA8PSAwKSB7XG5cdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoc2VsZik7XG5cdH1cbn0pIGFzIFdpa2lBY3Rpb25Db21wbGV0ZWQ7XG4vLyBDaGFuZ2UgcGVyIGFjdGlvbiB3YW50ZWRcbi8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQgPSAoKSA9PiB7XG5cdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UpIHtcblx0XHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSk7XG5cdH1cblx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSB7XG5cdFx0Ly8gaWYgaXQgaXNuJ3QgYSBVUkwsIG1ha2UgaXQgb25lLiBUT0RPOiBUaGlzIGJyZWFrcyBvbiB0aGUgYXJ0aWNsZXMgJ2h0dHA6Ly8nLCAnZnRwOi8vJywgYW5kIHNpbWlsYXIgb25lcy5cblx0XHRpZiAoIS9eXFx3KzpcXC9cXC8vLnRlc3QoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpKSB7XG5cdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCA9IG13LnV0aWwuZ2V0VXJsKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KTtcblx0XHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5mb2xsb3dSZWRpcmVjdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgKz0gJz9yZWRpcmVjdD1ubyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9IE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0IGFzIHN0cmluZztcblx0XHR9LCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0KTtcblx0fVxufTtcbi8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQudGltZU91dCA9XG5cdHdpbmRvdy53cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQgPT09IHVuZGVmaW5lZCA/IDUwMDAgOiB3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0O1xuLyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5Nb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCA9IG51bGw7XG4vKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cbk1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSA9IG51bGw7XG4vKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cbk1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCA9ICgpID0+IHtcblx0KytNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0O1xufTtcbi8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuTW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRpZiAoLS1Nb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDAgJiYgTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IDw9IDApIHtcblx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpO1xuXHR9XG59O1xuLyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFwaSAqKioqKioqKioqKioqKioqICovXG4vKipcbiAqIEFuIGVhc3kgd2F5IHRvIHRhbGsgdG8gdGhlIE1lZGlhV2lraSBBUEkuICBBY2NlcHRzIGVpdGhlciBqc29uIG9yIHhtbFxuICogKGRlZmF1bHQpIGZvcm1hdHM7IGlmIGpzb24gaXMgc2VsZWN0ZWQsIHdpbGwgZGVmYXVsdCB0byBgZm9ybWF0dmVyc2lvbj0yYFxuICogdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuICBTaW1pbGFybHksIGVuZm9yY2VzIG5ld2VyIGBlcnJvcmZvcm1hdGBzLFxuICogZGVmYXVsdGluZyB0byBgaHRtbGAgaWYgdW5zcGVjaWZpZWQuICBgdXNlbGFuZ2AgZW5mb3JjZWQgdG8gdGhlIHdpa2knc1xuICogY29udGVudCBsYW5ndWFnZS5cbiAqXG4gKiBJbiBuZXcgY29kZSwgdGhlIHVzZSBvZiB0aGUgbGFzdCAzIHBhcmFtZXRlcnMgc2hvdWxkIGJlIGF2b2lkZWQsIGluc3RlYWRcbiAqIHVzZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGkjc2V0U3RhdHVzRWxlbWVudHxzZXRTdGF0dXNFbGVtZW50KCl9IHRvIGJpbmRcbiAqIHRoZSBzdGF0dXMgZWxlbWVudCAoaWYgbmVlZGVkKSBhbmQgdXNlIGAudGhlbigpYCBvciBgLmNhdGNoKClgIG9uIHRoZVxuICogcHJvbWlzZSByZXR1cm5lZCBieSBgcG9zdCgpYCwgcmF0aGVyIHRoYW4gc3BlY2lmeSB0aGUgYG9uU3VjY2Vzc2Agb3JcbiAqIGBvbkZhaWx1cmVgIGNhbGxiYWNrcy5cbiAqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudEFjdGlvbiAtIFRoZSBjdXJyZW50IGFjdGlvbiAocmVxdWlyZWQpLlxuICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5IC0gVGhlIHF1ZXJ5IChyZXF1aXJlZCkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVxdWVzdCBpcyBzdWNjZXNzZnVsLlxuICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNFbGVtZW50XSAtIEEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdCB0byB1c2UgZm9yIHN0YXR1cyBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkVycm9yXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGlmIGFuIGVycm9yIG9jY3Vycy5cbiAqL1xuY2xhc3MgV2lraUFwaSB7XG5cdGN1cnJlbnRBY3Rpb246IHN0cmluZztcblx0b25TdWNjZXNzOiAoKGFwaW9iajogV2lraUFwaSkgPT4gdm9pZCkgfCBudWxsO1xuXHRvbkVycm9yOiAoKGFwaW9iajogV2lraUFwaSkgPT4gdm9pZCkgfCBudWxsO1xuXHRwYXJlbnQ6IG9iamVjdCA9IHdpbmRvdzsgLy8gdXNlIGdsb2JhbCBjb250ZXh0IGlmIHRoZXJlIGlzIG5vIHBhcmVudCBvYmplY3Rcblx0cXVlcnk6IFdpa2lBcGlRdWVyeTtcblx0cmVzcG9uc2U6IE13QXBpUmVzcG9uc2UgfCBYTUxEb2N1bWVudCB8IG51bGwgPSBudWxsO1xuXHRyZXNwb25zZVhNTDogTXdBcGlSZXNwb25zZSB8IFhNTERvY3VtZW50IHwgbnVsbCA9IG51bGw7IC8vIHVzZSBgcmVzcG9uc2VgIGluc3RlYWQ7IHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRzdGF0ZWxlbSE6IFN0YXR1c0VsZW1lbnQ7IC8vIHRoaXMgbm9uLXN0YW5kYXJkIG5hbWUga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0c3RhdHVzVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGw7IC8vIHJlc3VsdCByZWNlaXZlZCBmcm9tIHRoZSBBUEksIG5vcm1hbGx5IFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuXHRlcnJvckNvZGU6IHN0cmluZyB8IG51bGwgPSBudWxsOyAvLyBzaG9ydCB0ZXh0IGVycm9yIGNvZGUsIGlmIGFueSwgYXMgZG9jdW1lbnRlZCBpbiB0aGUgTWVkaWFXaWtpIEFQSVxuXHRlcnJvclRleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsOyAvLyBmdWxsIGVycm9yIGRlc2NyaXB0aW9uLCBpZiBhbnlcblx0YmFkdG9rZW5SZXRyeTogYm9vbGVhbiA9IGZhbHNlOyAvLyBzZXQgdG8gdHJ1ZSBpZiB0aGlzIG9uIGEgcmV0cnkgYXR0ZW1wdGVkIGFmdGVyIGEgYmFkdG9rZW4gZXJyb3Jcblx0Ly8gYXNzaWduZWQgaW4gb25BUElmYWlsdXJlOyBmcmVxdWVudGx5IHVuZGVmaW5lZFxuXHRkZWNsYXJlIGVycm9yVGhyb3duPzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGN1cnJlbnRBY3Rpb246IHN0cmluZyxcblx0XHRxdWVyeTogV2lraUFwaVF1ZXJ5LFxuXHRcdG9uU3VjY2Vzcz86ICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGwsXG5cdFx0c3RhdHVzRWxlbWVudD86IFN0YXR1c0VsZW1lbnQsXG5cdFx0b25FcnJvcj86ICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0KSB7XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gY3VycmVudEFjdGlvbjtcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XG5cdFx0dGhpcy5xdWVyeS5hc3NlcnQgPSAndXNlcic7XG5cdFx0Ly8gRW5mb3JjZSBuZXdlciBlcnJvciBmb3JtYXRzLCBwcmVmZXJyaW5nIGh0bWxcblx0XHRpZiAoIXF1ZXJ5LmVycm9yZm9ybWF0IHx8ICFbJ3dpa2l0ZXh0JywgJ3BsYWludGV4dCddLmluY2x1ZGVzKHF1ZXJ5LmVycm9yZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9ICdodG1sJztcblx0XHR9XG5cdFx0Ly8gRXhwbGljaXRseSB1c2UgdGhlIHdpa2kncyBjb250ZW50IGxhbmd1YWdlIHRvIG1pbmltaXplIGNvbmZ1c2lvbixcblx0XHQvLyBzZWUgIzExNzkgZm9yIGRpc2N1c3Npb25cblx0XHR0aGlzLnF1ZXJ5LnVzZWxhbmcgfHw9ICdjb250ZW50JzsgLy8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0dGhpcy5xdWVyeS5lcnJvcmxhbmcgPSAndXNlbGFuZyc7XG5cdFx0dGhpcy5xdWVyeS5lcnJvcnN1c2Vsb2NhbCA9IDE7XG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHR0aGlzLm9uRXJyb3IgPSBvbkVycm9yID8/IG51bGw7XG5cdFx0aWYgKHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbik7XG5cdFx0fVxuXHRcdC8vIEpTT04gaXMgdXNlZCB0aHJvdWdob3V0IE1vcmViaXRzL1R3aW5rbGUsIGJ1dCB4bWwgcmVtYWlucyB0aGUgZGVmYXVsdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRpZiAoIXF1ZXJ5LmZvcm1hdCkge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXQgPSAneG1sJztcblx0XHR9IGVsc2UgaWYgKHF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nICYmICFxdWVyeS5mb3JtYXR2ZXJzaW9uKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdHZlcnNpb24gPSAnMic7XG5cdFx0fSBlbHNlIGlmICghWyd4bWwnLCAnanNvbiddLmluY2x1ZGVzKHF1ZXJ5LmZvcm1hdCkpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoJ0ludmFsaWQgQVBJIGZvcm1hdDogb25seSB4bWwgYW5kIGpzb24gYXJlIHN1cHBvcnRlZC4nKTtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIHRhZ3MgZm9yIHF1ZXJpZXMgYW5kIG1vc3QgY29tbW9uIHVuc3VwcG9ydGVkIGFjdGlvbnMsIHByb2R1Y2VzIHdhcm5pbmdzXG5cdFx0aWYgKHF1ZXJ5LmFjdGlvbiAmJiBbJ3F1ZXJ5JywgJ3dhdGNoJ10uaW5jbHVkZXMocXVlcnkuYWN0aW9uKSkge1xuXHRcdFx0ZGVsZXRlIHF1ZXJ5LnRhZ3M7XG5cdFx0fSBlbHNlIGlmICghcXVlcnkudGFncyAmJiBtb3JlYml0c1dpa2lDaGFuZ2VUYWcpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSBtb3JlYml0c1dpa2lDaGFuZ2VUYWc7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEtlZXAgdHJhY2sgb2YgcGFyZW50IG9iamVjdCBmb3IgY2FsbGJhY2tzLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHBhcmVudFxuXHQgKi9cblx0c2V0UGFyZW50KHBhcmVudDogb2JqZWN0KSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50ICovXG5cdHNldFN0YXR1c0VsZW1lbnQoc3RhdHVzRWxlbWVudDogU3RhdHVzRWxlbWVudCkge1xuXHRcdHRoaXMuc3RhdGVsZW0gPSBzdGF0dXNFbGVtZW50O1xuXHRcdHRoaXMuc3RhdGVsZW0uc3RhdHVzKHRoaXMuY3VycmVudEFjdGlvbik7XG5cdH1cblx0LyoqXG5cdCAqIENhcnJ5IG91dCB0aGUgcmVxdWVzdC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNhbGxlckFqYXhQYXJhbWV0ZXJzIC0gRG8gbm90IHNwZWNpZnkgYSBwYXJhbWV0ZXIgdW5sZXNzIHlvdSByZWFsbHlcblx0ICogcmVhbGx5IHdhbnQgdG8gZ2l2ZSBqUXVlcnkgc29tZSBleHRyYSBwYXJhbWV0ZXJzLlxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gLSBBIGpRdWVyeSBwcm9taXNlIG9iamVjdCB0aGF0IGlzIHJlc29sdmVkIG9yIHJlamVjdGVkIHdpdGggdGhlIGFwaSBvYmplY3QuXG5cdCAqL1xuXHRwb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzPzogSlF1ZXJ5LkFqYXhTZXR0aW5ncyk6IEpRdWVyeS5Qcm9taXNlPFdpa2lBcGk+IHtcblx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRjb25zdCBxdWVyeVN0cmluZ0Fycjogc3RyaW5nW10gPSBbXTtcblx0XHRmb3IgKGNvbnN0IFtpLCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucXVlcnkpKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdHF1ZXJ5U3RyaW5nQXJyW3F1ZXJ5U3RyaW5nQXJyLmxlbmd0aF0gPVxuXHRcdFx0XHRcdGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHt2YWwubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignfCcpfWA7XG5cdFx0XHR9IGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHF1ZXJ5U3RyaW5nQXJyW3F1ZXJ5U3RyaW5nQXJyLmxlbmd0aF0gPSBgJHtlbmNvZGVVUklDb21wb25lbnQoaSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWwpKX1gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nQXJyLmpvaW4oJyYnKS5yZXBsYWNlKC9eKC4qPykoXFxidG9rZW49W14mXSopJiguKikvLCAnJDEkMyYkMicpO1xuXHRcdC8vIHRva2VuIHNob3VsZCBhbHdheXMgYmUgdGhlIGxhc3QgaXRlbSBpbiB0aGUgcXVlcnkgc3RyaW5nIChidWcgVFctQi0wMDEzKVxuXHRcdGNvbnN0IGFqYXhwYXJhbXMgPSB7XG5cdFx0XHRjb250ZXh0OiB0aGlzLFxuXHRcdFx0dHlwZTogdGhpcy5xdWVyeS5hY3Rpb24gPT09ICdxdWVyeScgPyAnR0VUJyA6ICdQT1NUJyxcblx0XHRcdHVybDogbXcudXRpbC53aWtpU2NyaXB0KCdhcGknKSxcblx0XHRcdGRhdGE6IHF1ZXJ5U3RyaW5nLFxuXHRcdFx0ZGF0YVR5cGU6IHRoaXMucXVlcnkuZm9ybWF0LFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdFx0Li4uY2FsbGVyQWpheFBhcmFtZXRlcnMsXG5cdFx0fTtcblx0XHRyZXR1cm4gJC5hamF4KGFqYXhwYXJhbXMpLnRoZW4oXG5cdFx0XHRmdW5jdGlvbiBvbkFQSXN1Y2Nlc3MoXG5cdFx0XHRcdHRoaXM6IFdpa2lBcGksXG5cdFx0XHRcdHJlc3BvbnNlOiBNd0FwaVJlc3BvbnNlIHwgWE1MRG9jdW1lbnQsXG5cdFx0XHRcdHN0YXR1c1RleHQ6IEpRdWVyeS5BamF4LlN1Y2Nlc3NUZXh0U3RhdHVzXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0dGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXHRcdFx0XHR0aGlzLnJlc3BvbnNlWE1MID0gcmVzcG9uc2U7XG5cdFx0XHRcdC8vIExpbWl0IHRvIGZpcnN0IGVycm9yXG5cdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QganNvblJlc3BvbnNlID0gcmVzcG9uc2UgYXMgTXdBcGlSZXNwb25zZTtcblx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9IGpzb25SZXNwb25zZS5lcnJvcnM/LlswXT8uY29kZSA/PyBudWxsO1xuXHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnaHRtbCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0ganNvblJlc3BvbnNlLmVycm9ycz8uWzBdPy5odG1sID8/IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnd2lraXRleHQnIHx8IHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdwbGFpbnRleHQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IGpzb25SZXNwb25zZS5lcnJvcnM/LlswXT8udGV4dCA/PyBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9XG5cdFx0XHRcdFx0XHQkKHJlc3BvbnNlIGFzIFhNTERvY3VtZW50KVxuXHRcdFx0XHRcdFx0XHQuZmluZCgnZXJyb3JzIGVycm9yJylcblx0XHRcdFx0XHRcdFx0LmVxKDApXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdjb2RlJykgPz8gbnVsbDtcblx0XHRcdFx0XHQvLyBTdWZmaWNpZW50IGZvciBodG1sLCB3aWtpdGV4dCwgb3IgcGxhaW50ZXh0IGVycm9yZm9ybWF0c1xuXHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gJChyZXNwb25zZSBhcyBYTUxEb2N1bWVudClcblx0XHRcdFx0XHRcdC5maW5kKCdlcnJvcnMgZXJyb3InKVxuXHRcdFx0XHRcdFx0LmVxKDApXG5cdFx0XHRcdFx0XHQudGV4dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5lcnJvckNvZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Ly8gdGhlIEFQSSBkaWRuJ3QgbGlrZSB3aGF0IHdlIHRvbGQgaXQsIGUuZy4sIGJhZCBlZGl0IHRva2VuIG9yIGFuIGVycm9yIGNyZWF0aW5nIGEgcGFnZVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpbnZva2Ugc3VjY2VzcyBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRcdGlmICh0aGlzLm9uU3VjY2Vzcykge1xuXHRcdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGZvciBsZWdhY3kgY29kZSlcblx0XHRcdFx0XHR0aGlzLm9uU3VjY2Vzcy5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkKCk7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPFdpa2lBcGk+KCkucmVzb2x2ZVdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8gb25seSBuZXR3b3JrIGFuZCBzZXJ2ZXIgZXJyb3JzIHJlYWNoIGhlcmUgLSBjb21wbGFpbnRzIGZyb20gdGhlIEFQSSBpdHNlbGYgYXJlIGNhdWdodCBpbiBzdWNjZXNzKClcblx0XHRcdGZ1bmN0aW9uIG9uQVBJZmFpbHVyZShcblx0XHRcdFx0dGhpczogV2lraUFwaSxcblx0XHRcdFx0ZXJyb3I6IEpRdWVyeS5qcVhIUixcblx0XHRcdFx0c3RhdHVzVGV4dDogSlF1ZXJ5LkFqYXguRXJyb3JUZXh0U3RhdHVzLFxuXHRcdFx0XHRlcnJvclRocm93bjogc3RyaW5nXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0dGhpcy5lcnJvclRocm93biA9IGVycm9yVGhyb3duOyAvLyBmcmVxdWVudGx5IHVuZGVmaW5lZFxuXHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0dWxzKCflnKjosIPnlKhBUEnml7blj5HnlJ/kuobplJnor6/igJwnLCAn5Zyo5ZG85Y+rQVBJ5pmC55m855Sf5LqG6Yyv6Kqk44CMJykgK1xuXHRcdFx0XHRcdGVycm9yLnN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdHVscygn4oCd44CCJywgJ+OAjeOAgicpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcigpO1xuXHRcdFx0fVxuXHRcdCkgYXMgSlF1ZXJ5LlByb21pc2U8V2lraUFwaT47XG5cdH1cblx0cmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnM/OiBKUXVlcnkuQWpheFNldHRpbmdzKTogSlF1ZXJ5LlByb21pc2U8V2lraUFwaT4ge1xuXHRcdGlmICh0aGlzLmVycm9yQ29kZSA9PT0gJ2JhZHRva2VuJyAmJiAhdGhpcy5iYWR0b2tlblJldHJ5KSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtLndhcm4odWxzKCfml6DmlYjku6TniYzvvIzojrflj5bmlrDnmoTku6TniYzlubbph43or5XigKbigKYnLCAn54Sh5pWI5qyK5p2W77yM5Y+W5b6X5paw55qE5qyK5p2W5Lim6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0dGhpcy5iYWR0b2tlblJldHJ5ID0gdHJ1ZTtcblx0XHRcdC8vIEdldCBhIG5ldyBDU1JGIHRva2VuIGFuZCByZXRyeS4gSWYgdGhlIG9yaWdpbmFsIGFjdGlvbiBuZWVkcyBhIGRpZmZlcmVudFxuXHRcdFx0Ly8gdHlwZSBvZiBhY3Rpb24gdGhhbiBDU1JGLCB3ZSBkbyBvbmUgcG9pbnRsZXNzIHJldHJ5IGJlZm9yZSBiYWlsaW5nIG91dFxuXHRcdFx0cmV0dXJuIE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuKCkudGhlbigodG9rZW4pID0+IHtcblx0XHRcdFx0dGhpcy5xdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlbGVtLmVycm9yKGAke3RoaXMuZXJyb3JUZXh0fe+8iCR7dGhpcy5lcnJvckNvZGV977yJYCk7XG5cdFx0Ly8gaW52b2tlIGZhaWx1cmUgY2FsbGJhY2sgaWYgb25lIHdhcyBzdXBwbGllZFxuXHRcdGlmICh0aGlzLm9uRXJyb3IpIHtcblx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayBmb3IgbGVnYWN5IGNvZGVcblx0XHRcdHRoaXMub25FcnJvci5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHR9XG5cdFx0Ly8gZG9uJ3QgY29tcGxldGUgdGhlIGFjdGlvbiBzbyB0aGF0IHRoZSBlcnJvciByZW1haW5zIGRpc3BsYXllZFxuXHRcdHJldHVybiAkLkRlZmVycmVkPFdpa2lBcGk+KCkucmVqZWN0V2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0fVxuXHRnZXRTdGF0dXNFbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlbGVtO1xuXHR9XG5cdGdldEVycm9yQ29kZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5lcnJvckNvZGU7XG5cdH1cblx0Z2V0RXJyb3JUZXh0KCkge1xuXHRcdHJldHVybiB0aGlzLmVycm9yVGV4dDtcblx0fVxuXHRnZXRYTUwoKSB7XG5cdFx0Ly8gcmV0YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB1c2UgZ2V0UmVzcG9uc2UoKSBpbnN0ZWFkXG5cdFx0cmV0dXJuIHRoaXMucmVzcG9uc2VYTUw7XG5cdH1cblx0Z2V0UmVzcG9uc2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVzcG9uc2U7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSBjdXN0b20gdXNlciBhZ2VudCBoZWFkZXIsIHdoaWNoIGlzIHVzZWQgZm9yIHNlcnZlci1zaWRlIGxvZ2dpbmcuXG5cdCAqIE5vdGUgdGhhdCBkb2luZyBzbyB3aWxsIHNldCB0aGUgdXNlcmFnZW50IGZvciBldmVyeSBgTW9yZWJpdHMud2lraS5hcGlgXG5cdCAqIHByb2Nlc3MgcGVyZm9ybWVkIHRoZXJlYWZ0ZXIuXG5cdCAqXG5cdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbGlzdHMud2lraW1lZGlhLm9yZy9waXBlcm1haWwvbWVkaWF3aWtpLWFwaS1hbm5vdW5jZS8yMDE0LU5vdmVtYmVyLzAwMDA3NS5odG1sfVxuXHQgKiBmb3Igb3JpZ2luYWwgYW5ub3VuY2VtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1YT1RaXV3ZW4vMS4xIChtb3JlYml0cy5qcyldIC0gVXNlciBhZ2VudC4gIFRoZSBkZWZhdWx0XG5cdCAqIHZhbHVlIG9mIGBtb3JlYml0cy5qc2Agd2lsbCBiZSBhcHBlbmRlZCB0byBhbnkgcHJvdmlkZWRcblx0ICogdmFsdWUuXG5cdCAqL1xuXHRzdGF0aWMgc2V0QXBpVXNlckFnZW50KHVhPzogc3RyaW5nKSB7XG5cdFx0bW9yZWJpdHNXaWtpQXBpVXNlckFnZW50ID0gYFFpdXdlbi8xLjEgKG1vcmViaXRzLmpzJHt1YSA/IGA7ICR7dWF9YCA6ICcnfSlgO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIG5ldyBDU1JGIHRva2VuIG9uIGVuY291bnRlcmluZyB0b2tlbiBlcnJvcnMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBNZWRpYVdpa2kgQ1NSRiB0b2tlbi5cblx0ICovXG5cdHN0YXRpYyBnZXRUb2tlbigpOiBKUXVlcnkuUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRjb25zdCB0b2tlbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaSh1bHMoJ+iOt+WPluS7pOeJjCcsICflj5blvpfmrIrmnZYnKSwge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gdG9rZW5BcGkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0cmV0dXJuIChhcGlvYmoucmVzcG9uc2UgYXMge3F1ZXJ5OiB7dG9rZW5zOiB7Y3NyZnRva2VuOiBzdHJpbmd9fX0pLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fSk7XG5cdH1cbn1cbk1vcmViaXRzLndpa2kuYXBpID0gV2lraUFwaTtcbi8qKlxuICogUmV0cmlldmVzIHdpa2l0ZXh0IGZyb20gYSBwYWdlLiBDYWNoaW5nIGVuYWJsZWQsIGR1cmF0aW9uIDEgZGF5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuICovXG5Nb3JlYml0cy53aWtpLmdldENhY2hlZEpzb24gPSAodGl0bGU6IHN0cmluZyk6IEpRdWVyeS5Qcm9taXNlPHVua25vd24+ID0+IHtcblx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRtYXhhZ2U6ICczNjAwJyxcblx0fTtcblxuXHRyZXR1cm4gbmV3IE1vcmViaXRzLndpa2kuYXBpKCcnLCBxdWVyeSkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdGFwaW9iai5nZXRTdGF0dXNFbGVtZW50KCkudW5saW5rKCk7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKSBhcyB7XG5cdFx0XHRxdWVyeToge1xuXHRcdFx0XHRwYWdlczogW3tyZXZpc2lvbnM6IFt7c2xvdHM6IHttYWluOiB7Y29udGVudDogc3RyaW5nfX19XX1dO1xuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IHdpa2l0ZXh0ID0gcmVzcG9uc2UucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aWtpdGV4dCk7XG5cdH0pO1xufTtcbmxldCBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSAnUWl1d2VuLzEuMSAobW9yZWJpdHMuanMpJztcbi8qKlxuICogQ2hhbmdlL3JldmlzaW9uIHRhZyBhcHBsaWVkIHRvIE1vcmViaXRzIGFjdGlvbnMgd2hlbiBubyBvdGhlciB0YWdzIGFyZSBzcGVjaWZpZWQuXG4gKiBVbnVzZWQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgbW9yZWJpdHNXaWtpQ2hhbmdlVGFnOiBzdHJpbmcgPSAnJztcbi8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wYWdlICoqKioqKioqKioqKioqKiogKi9cbi8qKlxuICogVXNlIHRoZSBNZWRpYVdpa2kgQVBJIHRvIGxvYWQgYSBwYWdlIGFuZCBvcHRpb25hbGx5IGVkaXQgaXQsIG1vdmUgaXQsIGV0Yy5cbiAqXG4gKiBDYWxsZXJzIGFyZSBub3QgcGVybWl0dGVkIHRvIGRpcmVjdGx5IGFjY2VzcyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIGNsYXNzIVxuICogQWxsIHByb3BlcnR5IGFjY2VzcyBpcyB0aHJvdWdoIHRoZSBhcHByb3ByaWF0ZSBnZXRfX18oKSBvciBzZXRfX18oKSBtZXRob2QuXG4gKlxuICogQ2FsbGVycyBzaG91bGQgc2V0IHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2V9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3R9XG4gKiBiZWZvcmUgdGhlIGZpcnN0IGNhbGwgdG8ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZS5sb2FkKCl9LlxuICpcbiAqIEVhY2ggb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBhXG4gKiByZWZlcmVuY2UgdG8gdGhlIE1vcmViaXRzLndpa2kucGFnZSBvYmplY3QgdGhhdCByZWdpc3RlcmVkIHRoZSBjYWxsYmFjay5cbiAqIENhbGxiYWNrIGZ1bmN0aW9ucyBtYXkgaW52b2tlIGFueSBNb3JlYml0cy53aWtpLnBhZ2UgcHJvdG90eXBlIG1ldGhvZCB1c2luZyB0aGlzIHJlZmVyZW5jZS5cbiAqXG4gKlxuICogQ2FsbCBzZXF1ZW5jZSBmb3IgY29tbW9uIG9wZXJhdGlvbnMgKG9wdGlvbmFsIGZpbmFsIHVzZXIgY2FsbGJhY2tzIG5vdCBzaG93bik6XG4gKlxuICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlIChubyBlZGl0IGNvbmZsaWN0KTpcbiAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG4gKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cbiAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG4gKlxuICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlICh3aXRoIGVkaXQgY29uZmxpY3QpOlxuICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cbiAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cbiAqIGN0eC5mblNhdmVFcnJvcigpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+IC5zYXZlKCkgLT5cbiAqIGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuICpcbiAqIC0gQXBwZW5kIHRvIGEgcGFnZSAoc2ltaWxhciBmb3IgcHJlcGVuZCBhbmQgbmV3U2VjdGlvbik6XG4gKiBgLmFwcGVuZCgpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiBjdHguZm5BdXRvU2F2ZSgpIC0+IC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+XG4gKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuICpcbiAqIE5vdGVzOlxuICogMS4gQWxsIGZ1bmN0aW9ucyBmb2xsb3dpbmcgTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIGFyZSBpbnZva2VkIGFzeW5jaHJvbm91c2x5IGZyb20gdGhlIGpRdWVyeSBBSkFYIGxpYnJhcnkuXG4gKiAyLiBUaGUgc2VxdWVuY2UgZm9yIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24gY291bGQgYmUgc2xpZ2h0bHkgc2hvcnRlbmVkLFxuICogYnV0IGl0IHdvdWxkIHJlcXVpcmUgc2lnbmlmaWNhbnQgZHVwbGljYXRpb24gb2YgY29kZSBmb3IgbGl0dGxlIGJlbmVmaXQuXG4gKlxuICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBhZ2UsIHByZWZpeGVkIGJ5IHRoZSBuYW1lc3BhY2UgKGlmIGFueSkuXG4gKiBGb3IgdGhlIGN1cnJlbnQgcGFnZSwgdXNlIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylgLlxuICogQHBhcmFtIHtzdHJpbmd8TW9yZWJpdHMuc3RhdHVzfSBbc3RhdHVzXSAtIEEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGFjdGlvbiBhYm91dCB0byBiZSB1bmRlcnRha2VuLFxuICogb3IgYSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0XG4gKi9cblxuaW50ZXJmYWNlIFdpa2lOYW1lc3BhY2Uge1xuXHRwYWdlOiB0eXBlb2YgV2lraVBhZ2U7XG59XG4vLyDntKLlvJXorr/pl67liKvlkI3vvIjkuI3lvpflvJXnlKjlhbbku5bniYfmrrXlhoXpg6jnsbvlkI3vvJtTdGF0dXNFbGVtZW50IOW3sueUsSB3aWtpLWFwaSDniYfmrrXlrprkuYnvvIlcbnR5cGUgV2lraUFwaUluc3RhbmNlID0gSW5zdGFuY2VUeXBlPFdpa2lOYW1lc3BhY2VbJ2FwaSddPjtcbi8vIOWOnyAyNjU4IOihjOeahOmXreWMheW4uOmHj++8jOaPkOWNh+S4uuaooeWdl+e6p++8iOaXoOeKtuaAgeOAgei3qOWunuS+i+WFseS6q++8jOivreS5ieS4jeWPmO+8iVxuY29uc3QgZW1wdHlGdW5jdGlvbiA9ICgpOiB2b2lkID0+IHt9O1xuXG5pbnRlcmZhY2UgV2lraVBhZ2VQcm90ZWN0aW9uIHtcblx0bGV2ZWw6IHN0cmluZztcblx0ZXhwaXJ5OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBXaWtpUGFnZUxvYWRRdWVyeSB7XG5cdGFjdGlvbjogc3RyaW5nO1xuXHRwcm9wOiBzdHJpbmc7XG5cdGlucHJvcDogc3RyaW5nO1xuXHRpbnRlc3RhY3Rpb25zOiBzdHJpbmc7XG5cdGN1cnRpbWVzdGFtcDogc3RyaW5nO1xuXHRtZXRhOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcblx0dGl0bGVzOiBzdHJpbmc7XG5cdGZvcm1hdDogc3RyaW5nO1xuXHRydnByb3A/OiBzdHJpbmc7XG5cdHJ2bGltaXQ/OiBudW1iZXI7XG5cdHJ2c3RhcnRpZD86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG5cdHJlZGlyZWN0cz86IHN0cmluZztcblx0cnZzZWN0aW9uPzogbnVtYmVyO1xuXHRba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgV2lraVBhZ2VTYXZlUXVlcnkge1xuXHRhY3Rpb246IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nO1xuXHR0b2tlbjogc3RyaW5nIHwgbnVsbDtcblx0d2F0Y2hsaXN0OiBzdHJpbmc7XG5cdGZvcm1hdDogc3RyaW5nO1xuXHR0YWdzPzogc3RyaW5nIHwgc3RyaW5nW107XG5cdHdhdGNobGlzdGV4cGlyeT86IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cdHNlY3Rpb24/OiBzdHJpbmcgfCBudW1iZXI7XG5cdG1pbm9yPzogYm9vbGVhbjtcblx0bm90bWlub3I/OiBib29sZWFuO1xuXHRib3Q/OiBib29sZWFuO1xuXHRhcHBlbmR0ZXh0Pzogc3RyaW5nO1xuXHRwcmVwZW5kdGV4dD86IHN0cmluZztcblx0dGV4dD86IHN0cmluZyB8IG51bGw7XG5cdHNlY3Rpb250aXRsZT86IHN0cmluZztcblx0dW5kbz86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG5cdHVuZG9hZnRlcj86IHN0cmluZyB8IG51bGw7XG5cdGJhc2V0aW1lc3RhbXA/OiBzdHJpbmcgfCBudWxsO1xuXHRzdGFydHRpbWVzdGFtcD86IHN0cmluZyB8IG51bGw7XG5cdHJlZGlyZWN0PzogYm9vbGVhbjtcblx0cmVjcmVhdGU/OiBzdHJpbmc7XG5cdGNyZWF0ZW9ubHk/OiBzdHJpbmc7XG5cdG5vY3JlYXRlPzogc3RyaW5nO1xuXHRba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgV2lraVBhZ2VMb29rdXBDcmVhdGlvblF1ZXJ5IHtcblx0YWN0aW9uOiBzdHJpbmc7XG5cdHByb3A6IHN0cmluZztcblx0dGl0bGVzOiBzdHJpbmc7XG5cdHJ2bGltaXQ6IG51bWJlcjtcblx0cnZwcm9wOiBzdHJpbmc7XG5cdHJ2ZGlyOiBzdHJpbmc7XG5cdGZvcm1hdDogc3RyaW5nO1xuXHRydnNlY3Rpb24/OiBudW1iZXI7XG5cdHJlZGlyZWN0cz86IHN0cmluZztcblx0W2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuLy8g5L6d5o2u5Y6fIDI1NjctMjY1NyDnmoQgY3R4IOWIneWni+WMluWtl+mdoumHj+WGmeWHuueahOeyvuehruaOpeWPo1xuaW50ZXJmYWNlIFdpa2lQYWdlQ3R4IHtcblx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdHBhZ2VOYW1lOiBzdHJpbmc7XG5cdHBhZ2VFeGlzdHM6IGJvb2xlYW47XG5cdGVkaXRTdW1tYXJ5OiBzdHJpbmcgfCBudWxsO1xuXHRjaGFuZ2VUYWdzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGw7XG5cdHRlc3RBY3Rpb25zOiBzdHJpbmdbXSB8IG51bGw7XG5cdC8vIGFycmF5IGlmIGFueSB2YWxpZCBhY3Rpb25zXG5cdGNhbGxiYWNrUGFyYW1ldGVyczogdW5rbm93bjtcblx0c3RhdHVzRWxlbWVudDogU3RhdHVzRWxlbWVudDtcblx0Ly8gLSBlZGl0XG5cdHBhZ2VUZXh0OiBzdHJpbmcgfCBudWxsO1xuXHRlZGl0TW9kZTogJ2FsbCcgfCAnYXBwZW5kJyB8ICdwcmVwZW5kJyB8ICduZXcnIHwgJ3JldmVydCc7XG5cdC8vIHNhdmUoKSByZXBsYWNlcyBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2UgYnkgZGVmYXVsdFxuXHRhcHBlbmRUZXh0OiBzdHJpbmcgfCBudWxsO1xuXHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRwcmVwZW5kVGV4dDogc3RyaW5nIHwgbnVsbDtcblx0Ly8gY2FuJ3QgcmV1c2UgcGFnZVRleHQgZm9yIHRoaXMgYmVjYXVzZSBwYWdlVGV4dCBpcyBuZWVkZWQgdG8gZm9sbG93IGEgcmVkaXJlY3Rcblx0bmV3U2VjdGlvblRleHQ6IHN0cmluZyB8IG51bGw7XG5cdG5ld1NlY3Rpb25UaXRsZTogc3RyaW5nIHwgbnVsbDtcblx0Y3JlYXRlT3B0aW9uOiAncmVjcmVhdGUnIHwgJ2NyZWF0ZW9ubHknIHwgJ25vY3JlYXRlJyB8IG51bGw7XG5cdG1pbm9yRWRpdDogYm9vbGVhbjtcblx0Ym90RWRpdDogYm9vbGVhbjtcblx0cGFnZVNlY3Rpb246IG51bWJlciB8IG51bGw7XG5cdG1heENvbmZsaWN0UmV0cmllczogbnVtYmVyO1xuXHRtYXhSZXRyaWVzOiBudW1iZXI7XG5cdGZvbGxvd1JlZGlyZWN0OiBib29sZWFuO1xuXHRmb2xsb3dDcm9zc05zUmVkaXJlY3Q6IGJvb2xlYW47XG5cdHdhdGNobGlzdE9wdGlvbjogJ25vY2hhbmdlJyB8ICd1bndhdGNoJyB8ICdwcmVmZXJlbmNlcycgfCAnd2F0Y2gnO1xuXHR3YXRjaGxpc3RFeHBpcnk6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cdGNyZWF0b3I6IHN0cmluZyB8IG51bGw7XG5cdHRpbWVzdGFtcDogc3RyaW5nIHwgbnVsbDtcblx0Ly8gLSByZXZlcnRcblx0cmV2ZXJ0T2xkSUQ6IHN0cmluZyB8IG51bGw7XG5cdC8vIC0gbW92ZVxuXHRtb3ZlRGVzdGluYXRpb246IHN0cmluZyB8IG51bGw7XG5cdG1vdmVUYWxrUGFnZTogYm9vbGVhbjtcblx0bW92ZVN1YnBhZ2VzOiBib29sZWFuO1xuXHRtb3ZlU3VwcHJlc3NSZWRpcmVjdDogYm9vbGVhbjtcblx0Ly8gLSBwcm90ZWN0XG5cdHByb3RlY3RFZGl0OiBXaWtpUGFnZVByb3RlY3Rpb24gfCBudWxsO1xuXHRwcm90ZWN0TW92ZTogV2lraVBhZ2VQcm90ZWN0aW9uIHwgbnVsbDtcblx0cHJvdGVjdENyZWF0ZTogV2lraVBhZ2VQcm90ZWN0aW9uIHwgbnVsbDtcblx0cHJvdGVjdENhc2NhZGU6IGJvb2xlYW4gfCBudWxsO1xuXHQvLyAtIGNyZWF0aW9uIGxvb2t1cFxuXHRsb29rdXBOb25SZWRpcmVjdENyZWF0b3I6IGJvb2xlYW47XG5cdC8vIGludGVybmFsIHN0YXR1c1xuXHRwYWdlTG9hZGVkOiBib29sZWFuO1xuXHRjc3JmVG9rZW46IHN0cmluZyB8IG51bGw7XG5cdGxvYWRUaW1lOiBzdHJpbmcgfCBudWxsO1xuXHRsYXN0RWRpdFRpbWU6IHN0cmluZyB8IG51bGw7XG5cdHBhZ2VJRDogbnVtYmVyIHwgbnVsbDtcblx0Y29udGVudE1vZGVsOiBzdHJpbmcgfCBudWxsO1xuXHRyZXZlcnRDdXJJRDogbnVtYmVyIHwgbnVsbDtcblx0cmV2ZXJ0VXNlcjogc3RyaW5nIHwgbnVsbDtcblx0d2F0Y2hlZDogYm9vbGVhbiB8IHN0cmluZztcblx0ZnVsbHlQcm90ZWN0ZWQ6IGJvb2xlYW4gfCBzdHJpbmc7XG5cdHN1cHByZXNzUHJvdGVjdFdhcm5pbmc6IGJvb2xlYW47XG5cdGNvbmZsaWN0UmV0cmllczogbnVtYmVyO1xuXHRyZXRyaWVzOiBudW1iZXI7XG5cdC8vIGNhbGxiYWNrc1xuXHRvbkxvYWRTdWNjZXNzOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uTG9hZEZhaWx1cmU6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25TYXZlU3VjY2VzczogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsO1xuXHRvblNhdmVGYWlsdXJlOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uTG9va3VwQ3JlYXRpb25TdWNjZXNzOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uTG9va3VwQ3JlYXRpb25GYWlsdXJlOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uTW92ZVN1Y2Nlc3M6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25Nb3ZlRmFpbHVyZTogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsO1xuXHRvbkRlbGV0ZVN1Y2Nlc3M6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25EZWxldGVGYWlsdXJlOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uVW5kZWxldGVTdWNjZXNzOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uVW5kZWxldGVGYWlsdXJlOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uUHJvdGVjdFN1Y2Nlc3M6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25Qcm90ZWN0RmFpbHVyZTogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsO1xuXHQvLyBpbnRlcm5hbCBvYmplY3RzXG5cdGxvYWRRdWVyeTogV2lraVBhZ2VMb2FkUXVlcnkgfCBudWxsO1xuXHRsb2FkQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRzYXZlQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRsb29rdXBDcmVhdGlvbkFwaTogV2lraUFwaUluc3RhbmNlIHwgbnVsbDtcblx0bW92ZUFwaTogV2lraUFwaUluc3RhbmNlIHwgbnVsbDtcblx0bW92ZVByb2Nlc3NBcGk6IFdpa2lBcGlJbnN0YW5jZSB8IG51bGw7XG5cdHBhdHJvbEFwaTogV2lraUFwaUluc3RhbmNlIHwgbnVsbDtcblx0cGF0cm9sUHJvY2Vzc0FwaTogV2lraUFwaUluc3RhbmNlIHwgbnVsbDtcblx0ZGVsZXRlQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRkZWxldGVQcm9jZXNzQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHR1bmRlbGV0ZUFwaTogV2lraUFwaUluc3RhbmNlIHwgbnVsbDtcblx0dW5kZWxldGVQcm9jZXNzQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRwcm90ZWN0QXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRwcm90ZWN0UHJvY2Vzc0FwaTogV2lraUFwaUluc3RhbmNlIHwgbnVsbDtcblx0Ly8gc2V0IGR5bmFtaWNhbGx5IGluIHBhdHJvbCgpXG5cdHJjaWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5jbGFzcyBXaWtpUGFnZSB7XG5cdGN0eDogV2lraVBhZ2VDdHg7XG5cdGNvbnN0cnVjdG9yKHBhZ2VOYW1lOiBzdHJpbmcsIHN0YXR1cz86IHN0cmluZyB8IFN0YXR1c0VsZW1lbnQpIHtcblx0XHRzdGF0dXMgfHw9IHVscygn5omT5byA6aG16Z2i4oCcJywgJ+aJk+mWi+mggemdouOAjCcpICsgcGFnZU5hbWUgKyB1bHMoJ+KAnScsICfjgI0nKTtcblx0XHQvKipcblx0XHQgKiBQcml2YXRlIGNvbnRleHQgdmFyaWFibGVzLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBjb250ZXh0IGlzIG5vdCB2aXNpYmxlIHRvIHRoZSBvdXRzaWRlLCB0aHVzIGFsbCB0aGUgZGF0YSBoZXJlXG5cdFx0ICogbXVzdCBiZSBhY2Nlc3NlZCB2aWEgZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLmN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZU5hbWUsXG5cdFx0XHRwYWdlRXhpc3RzOiBmYWxzZSxcblx0XHRcdGVkaXRTdW1tYXJ5OiBudWxsLFxuXHRcdFx0Y2hhbmdlVGFnczogbnVsbCxcblx0XHRcdHRlc3RBY3Rpb25zOiBudWxsLFxuXHRcdFx0Ly8gYXJyYXkgaWYgYW55IHZhbGlkIGFjdGlvbnNcblx0XHRcdGNhbGxiYWNrUGFyYW1ldGVyczogbnVsbCxcblx0XHRcdHN0YXR1c0VsZW1lbnQ6IHN0YXR1cyBpbnN0YW5jZW9mIE1vcmViaXRzLnN0YXR1cyA/IHN0YXR1cyA6IG5ldyBNb3JlYml0cy5zdGF0dXMoc3RhdHVzKSxcblx0XHRcdC8vIC0gZWRpdFxuXHRcdFx0cGFnZVRleHQ6IG51bGwsXG5cdFx0XHRlZGl0TW9kZTogJ2FsbCcsXG5cdFx0XHQvLyBzYXZlKCkgcmVwbGFjZXMgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGJ5IGRlZmF1bHRcblx0XHRcdGFwcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0cHJlcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0bmV3U2VjdGlvblRleHQ6IG51bGwsXG5cdFx0XHRuZXdTZWN0aW9uVGl0bGU6IG51bGwsXG5cdFx0XHRjcmVhdGVPcHRpb246IG51bGwsXG5cdFx0XHRtaW5vckVkaXQ6IGZhbHNlLFxuXHRcdFx0Ym90RWRpdDogZmFsc2UsXG5cdFx0XHRwYWdlU2VjdGlvbjogbnVsbCxcblx0XHRcdG1heENvbmZsaWN0UmV0cmllczogMixcblx0XHRcdG1heFJldHJpZXM6IDIsXG5cdFx0XHRmb2xsb3dSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3Q6IHRydWUsXG5cdFx0XHR3YXRjaGxpc3RPcHRpb246ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaGxpc3RFeHBpcnk6IG51bGwsXG5cdFx0XHRjcmVhdG9yOiBudWxsLFxuXHRcdFx0dGltZXN0YW1wOiBudWxsLFxuXHRcdFx0Ly8gLSByZXZlcnRcblx0XHRcdHJldmVydE9sZElEOiBudWxsLFxuXHRcdFx0Ly8gLSBtb3ZlXG5cdFx0XHRtb3ZlRGVzdGluYXRpb246IG51bGwsXG5cdFx0XHRtb3ZlVGFsa1BhZ2U6IGZhbHNlLFxuXHRcdFx0bW92ZVN1YnBhZ2VzOiBmYWxzZSxcblx0XHRcdG1vdmVTdXBwcmVzc1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdC8vIC0gcHJvdGVjdFxuXHRcdFx0cHJvdGVjdEVkaXQ6IG51bGwsXG5cdFx0XHRwcm90ZWN0TW92ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDcmVhdGU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q2FzY2FkZTogbnVsbCxcblx0XHRcdC8vIC0gY3JlYXRpb24gbG9va3VwXG5cdFx0XHRsb29rdXBOb25SZWRpcmVjdENyZWF0b3I6IGZhbHNlLFxuXHRcdFx0Ly8gaW50ZXJuYWwgc3RhdHVzXG5cdFx0XHRwYWdlTG9hZGVkOiBmYWxzZSxcblx0XHRcdGNzcmZUb2tlbjogbnVsbCxcblx0XHRcdGxvYWRUaW1lOiBudWxsLFxuXHRcdFx0bGFzdEVkaXRUaW1lOiBudWxsLFxuXHRcdFx0cGFnZUlEOiBudWxsLFxuXHRcdFx0Y29udGVudE1vZGVsOiBudWxsLFxuXHRcdFx0cmV2ZXJ0Q3VySUQ6IG51bGwsXG5cdFx0XHRyZXZlcnRVc2VyOiBudWxsLFxuXHRcdFx0d2F0Y2hlZDogZmFsc2UsXG5cdFx0XHRmdWxseVByb3RlY3RlZDogZmFsc2UsXG5cdFx0XHRzdXBwcmVzc1Byb3RlY3RXYXJuaW5nOiBmYWxzZSxcblx0XHRcdGNvbmZsaWN0UmV0cmllczogMCxcblx0XHRcdHJldHJpZXM6IDAsXG5cdFx0XHQvLyBjYWxsYmFja3Ncblx0XHRcdG9uTG9hZFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvYWRGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25TYXZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uU2F2ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25GYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Nb3ZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTW92ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0U3VjY2VzczogbnVsbCxcblx0XHRcdG9uUHJvdGVjdEZhaWx1cmU6IG51bGwsXG5cdFx0XHQvLyBpbnRlcm5hbCBvYmplY3RzXG5cdFx0XHRsb2FkUXVlcnk6IG51bGwsXG5cdFx0XHRsb2FkQXBpOiBudWxsLFxuXHRcdFx0c2F2ZUFwaTogbnVsbCxcblx0XHRcdGxvb2t1cENyZWF0aW9uQXBpOiBudWxsLFxuXHRcdFx0bW92ZUFwaTogbnVsbCxcblx0XHRcdG1vdmVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdGRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdGRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHByb3RlY3RBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0UHJvY2Vzc0FwaTogbnVsbCxcblx0XHR9O1xuXHR9XG5cdC8qKlxuXHQgKiBMb2FkcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBsb2FkIGhhcyBzdWNjZWVkZWQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgZmFpbHMuXG5cdCAqL1xuXHRsb2FkKG9uU3VjY2Vzcz86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCwgb25GYWlsdXJlPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgub25Mb2FkU3VjY2VzcyA9IG9uU3VjY2VzcyA/PyBudWxsO1xuXHRcdHRoaXMuY3R4Lm9uTG9hZEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gZG8gc29tZXRoaW5nIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5cdFx0aWYgKCFvblN1Y2Nlc3MpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBubyBvblN1Y2Nlc3MgY2FsbGJhY2sgcHJvdmlkZWQgdG8gbG9hZCgpIScpO1xuXHRcdFx0dGhpcy5jdHgub25Mb2FkRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY3R4LmxvYWRRdWVyeSA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHByb3A6ICdpbmZvfHJldmlzaW9ucycsXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdGludGVzdGFjdGlvbnM6ICdlZGl0Jyxcblx0XHRcdC8vIGNhbiBiZSBleHBhbmRlZFxuXHRcdFx0Y3VydGltZXN0YW1wOiAnJyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dGl0bGVzOiB0aGlzLmN0eC5wYWdlTmFtZSxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Ly8gZG9uJ3QgbmVlZCBydmxpbWl0PTEgYmVjYXVzZSB3ZSBkb24ndCBuZWVkIHJ2c3RhcnRpZCBoZXJlIGFuZCBvbmx5IG9uZSBhY3R1YWwgcmV2IGlzIHJldHVybmVkIGJ5IGRlZmF1bHRcblx0XHR9O1xuXG5cdFx0aWYgKHRoaXMuY3R4LmVkaXRNb2RlID09PSAnYWxsJykge1xuXHRcdFx0dGhpcy5jdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICdjb250ZW50fHRpbWVzdGFtcCc7IC8vIGdldCB0aGUgcGFnZSBjb250ZW50IGF0IHRoZSBzYW1lIHRpbWUsIGlmIG5lZWRlZFxuXHRcdH0gZWxzZSBpZiAodGhpcy5jdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHR0aGlzLmN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ3RpbWVzdGFtcCc7XG5cdFx0XHR0aGlzLmN0eC5sb2FkUXVlcnkucnZsaW1pdCA9IDE7XG5cdFx0XHR0aGlzLmN0eC5sb2FkUXVlcnkucnZzdGFydGlkID0gdGhpcy5jdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0dGhpcy5jdHgubG9hZFF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5jdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHR0aGlzLmN0eC5sb2FkUXVlcnkucnZzZWN0aW9uID0gdGhpcy5jdHgucGFnZVNlY3Rpb247XG5cdFx0fVxuXHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0dGhpcy5jdHgubG9hZFF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5sb2FkQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0dWxzKCfmipPlj5bpobXpnaLigKbigKYnLCAn5oqT5Y+W6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHR0aGlzLmN0eC5sb2FkUXVlcnksXG5cdFx0XHR0aGlzLmZuTG9hZFN1Y2Nlc3MsXG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0dGhpcy5jdHgub25Mb2FkRmFpbHVyZSBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0XHQpO1xuXHRcdHRoaXMuY3R4LmxvYWRBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdHRoaXMuY3R4LmxvYWRBcGkucG9zdCgpO1xuXHR9XG5cdC8qKlxuXHQgKiBTYXZlcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UgdG8gV2lraXBlZGlhLlxuXHQgKiBNdXN0IGJlIHByZWNlZGVkIGJ5IHN1Y2Nlc3NmdWxseSBjYWxsaW5nIGBsb2FkKClgLlxuXHQgKlxuXHQgKiBXYXJuaW5nOiBDYWxsaW5nIGBzYXZlKClgIGNhbiByZXN1bHQgaW4gYWRkaXRpb25hbCBjYWxscyB0byB0aGVcblx0ICogcHJldmlvdXMgYGxvYWQoKWAgY2FsbGJhY2tzIHRvIHJlY292ZXIgZnJvbSBlZGl0IGNvbmZsaWN0cyEgSW4gdGhpc1xuXHQgKiBjYXNlLCBjYWxsZXJzIG11c3QgbWFrZSB0aGUgc2FtZSBlZGl0IHRvIHRoZSBuZXcgcGFnZVRleHQgYW5kXG5cdCAqIHJlLWludm9rZSBgc2F2ZSgpYC4gIFRoaXMgYmVoYXZpb3IgY2FuIGJlIGRpc2FibGVkIHdpdGhcblx0ICogYHNldE1heENvbmZsaWN0UmV0cmllcygwKWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgaGFzIHN1Y2NlZWRlZC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBmYWlscy5cblx0ICovXG5cdHNhdmUob25TdWNjZXNzPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsLCBvbkZhaWx1cmU/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0dGhpcy5jdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdC8vIGFyZSB3ZSBnZXR0aW5nIG91ciBlZGl0aW5nIHRva2VuIGZyb20gbXcudXNlci50b2tlbnM/XG5cdFx0Y29uc3QgY2FuVXNlTXdVc2VyVG9rZW4gPSB0aGlzLmZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKTtcblx0XHRpZiAoIXRoaXMuY3R4LnBhZ2VMb2FkZWQgJiYgIWNhblVzZU13VXNlclRva2VuKSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXR0ZW1wdCB0byBzYXZlIGEgcGFnZSB0aGF0IGhhcyBub3QgYmVlbiBsb2FkZWQhJyk7XG5cdFx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlISh0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmN0eC5lZGl0U3VtbWFyeSkge1xuXHRcdFx0Ly8gbmV3IHNlY3Rpb24gbW9kZSBhbGxvd3MgKG5heSwgZW5jb3VyYWdlcykgdXNpbmcgdGhlXG5cdFx0XHQvLyB0aXRsZSBhcyB0aGUgZWRpdCBzdW1tYXJ5LCBidXQgdGhlIHF1ZXJ5IG5lZWRzXG5cdFx0XHQvLyBlZGl0U3VtbWFyeSB0byBiZSB1bmRlZmluZWQgb3IgJycsIG5vdCBudWxsXG5cdFx0XHRpZiAodGhpcy5jdHguZWRpdE1vZGUgPT09ICduZXcnICYmIHRoaXMuY3R4Lm5ld1NlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHR0aGlzLmN0eC5lZGl0U3VtbWFyeSA9ICcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGVkaXQgc3VtbWFyeSBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlISh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBzaG91bGRuJ3QgaGFwcGVuIGlmIGNhblVzZU13VXNlclRva2VuID09PSB0cnVlXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jdHguZnVsbHlQcm90ZWN0ZWQgJiZcblx0XHRcdCF0aGlzLmN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHQhY29uZmlybShcblx0XHRcdFx0dGhpcy5jdHguZnVsbHlQcm90ZWN0ZWQgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHQ/IHVscygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0dGhpcy5jdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHR1bHMoXG5cdFx0XHRcdFx0XHRcdFx0J+KAne+8iOaXoOmZkOacn++8ieOAglxcblxcbuWNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+OAje+8iOeEoemZkOacn++8ieOAglxcblxcbum7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdDogYCR7XG5cdFx0XHRcdFx0XHRcdHVscygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0dGhpcy5jdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHR1bHMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuY3R4LmZ1bGx5UHJvdGVjdGVkIGFzIHN0cmluZykuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHR9IChVVEMp77yJ44CCXFxuXFxuJHt1bHMoXG5cdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHQn6bue5pOK56K65a6a5Lul56K65a6a77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0KX1gXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHVscygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE57yW6L6R44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOe3qOi8r+OAgicpKTtcblx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5yZXRyaWVzID0gMDtcblx0XHRjb25zdCBxdWVyeTogV2lraVBhZ2VTYXZlUXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdHRpdGxlOiB0aGlzLmN0eC5wYWdlTmFtZSxcblx0XHRcdHN1bW1hcnk6IHRoaXMuY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0dG9rZW46IGNhblVzZU13VXNlclRva2VuID8gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSA6IHRoaXMuY3R4LmNzcmZUb2tlbixcblx0XHRcdHdhdGNobGlzdDogdGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fTtcblx0XHRpZiAodGhpcy5jdHguY2hhbmdlVGFncykge1xuXHRcdFx0cXVlcnkudGFncyA9IHRoaXMuY3R4LmNoYW5nZVRhZ3M7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gdGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHRoaXMuY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0cXVlcnkuc2VjdGlvbiA9IHRoaXMuY3R4LnBhZ2VTZWN0aW9uO1xuXHRcdH1cblx0XHQvLyBTZXQgbWlub3IgZWRpdCBhdHRyaWJ1dGUuIElmIHRoZXNlIHBhcmFtZXRlcnMgYXJlIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRpZiAodGhpcy5jdHgubWlub3JFZGl0KSB7XG5cdFx0XHRxdWVyeS5taW5vciA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHF1ZXJ5Lm5vdG1pbm9yID0gdHJ1ZTsgLy8gZm9yY2UgVHdpbmtsZSBjb25maWcgdG8gb3ZlcnJpZGUgdXNlciBwcmVmZXJlbmNlIHNldHRpbmcgZm9yIFwiYWxsIGVkaXRzIGFyZSBtaW5vclwiXG5cdFx0fVxuXHRcdC8vIFNldCBib3QgZWRpdCBhdHRyaWJ1dGUuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRpZiAodGhpcy5jdHguYm90RWRpdCkge1xuXHRcdFx0cXVlcnkuYm90ID0gdHJ1ZTtcblx0XHR9XG5cdFx0c3dpdGNoICh0aGlzLmN0eC5lZGl0TW9kZSkge1xuXHRcdFx0Y2FzZSAnYXBwZW5kJzpcblx0XHRcdFx0aWYgKHRoaXMuY3R4LmFwcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXBwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlISh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkuYXBwZW5kdGV4dCA9IHRoaXMuY3R4LmFwcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIGFwcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwcmVwZW5kJzpcblx0XHRcdFx0aWYgKHRoaXMuY3R4LnByZXBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHByZXBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS5wcmVwZW5kdGV4dCA9IHRoaXMuY3R4LnByZXBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBwcmVwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ25ldyc6XG5cdFx0XHRcdGlmICghdGhpcy5jdHgubmV3U2VjdGlvblRleHQpIHtcblx0XHRcdFx0XHQvLyBBUEkgZG9lc24ndCBhbGxvdyBlbXB0eSBuZXcgc2VjdGlvbiB0ZXh0XG5cdFx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5ldyBzZWN0aW9uIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlISh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRxdWVyeS50ZXh0ID0gdGhpcy5jdHgubmV3U2VjdGlvblRleHQ7IC8vIGFkZCBhIG5ldyBzZWN0aW9uIHRvIGN1cnJlbnQgcGFnZVxuXHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSB0aGlzLmN0eC5uZXdTZWN0aW9uVGl0bGUgfHwgdGhpcy5jdHguZWRpdFN1bW1hcnk7IC8vIGRvbmUgYnkgdGhlIEFQSSwgYnV0IG5vbi0nJyB2YWx1ZXMgd291bGQgZ2V0IHRyZWF0ZWQgYXMgdGV4dFxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdHF1ZXJ5LnVuZG8gPSB0aGlzLmN0eC5yZXZlcnRDdXJJRDtcblx0XHRcdFx0cXVlcnkudW5kb2FmdGVyID0gdGhpcy5jdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHRcdGlmICh0aGlzLmN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gdGhpcy5jdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gdGhpcy5jdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHQvLyAnYWxsJ1xuXHRcdFx0XHRxdWVyeS50ZXh0ID0gdGhpcy5jdHgucGFnZVRleHQ7IC8vIHJlcGxhY2UgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlXG5cdFx0XHRcdGlmICh0aGlzLmN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gdGhpcy5jdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gdGhpcy5jdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5jcmVhdGVPcHRpb24gIT09IG51bGwgJiYgWydyZWNyZWF0ZScsICdjcmVhdGVvbmx5JywgJ25vY3JlYXRlJ10uaW5jbHVkZXModGhpcy5jdHguY3JlYXRlT3B0aW9uKSkge1xuXHRcdFx0cXVlcnlbdGhpcy5jdHguY3JlYXRlT3B0aW9uXSA9ICcnO1xuXHRcdH1cblx0XHRpZiAoY2FuVXNlTXdVc2VyVG9rZW4gJiYgdGhpcy5jdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdHF1ZXJ5LnJlZGlyZWN0ID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5jdHguc2F2ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdHVscygn5L+d5a2Y6aG16Z2i4oCm4oCmJywgJ+WEsuWtmOmggemdouKApuKApicpLFxuXHRcdFx0cXVlcnksXG5cdFx0XHR0aGlzLmZuU2F2ZVN1Y2Nlc3MsXG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0dGhpcy5mblNhdmVFcnJvclxuXHRcdCk7XG5cdFx0dGhpcy5jdHguc2F2ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jdHguc2F2ZUFwaS5wb3N0KCk7XG5cdH1cblx0LyoqXG5cdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRBcHBlbmRUZXh0KClgIHRvIHRoZSBlbmQgb2YgdGhlXG5cdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHQgKiBleHBpcnkgaXMgdXNlZC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0ICovXG5cdGFwcGVuZChvblN1Y2Nlc3M/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwsIG9uRmFpbHVyZT86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0aWYgKHRoaXMuZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHR0aGlzLmxvYWQodGhpcy5mbkF1dG9TYXZlLCB0aGlzLmN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRQcmVwZW5kVGV4dCgpYCB0byB0aGUgc3RhcnQgb2YgdGhlXG5cdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHQgKiBleHBpcnkgaXMgdXNlZC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHQgKi9cblx0cHJlcGVuZChvblN1Y2Nlc3M/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwsIG9uRmFpbHVyZT86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdGlmICh0aGlzLmZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2VzcyA/PyBudWxsO1xuXHRcdFx0dGhpcy5jdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0dGhpcy5sb2FkKHRoaXMuZm5BdXRvU2F2ZSwgdGhpcy5jdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IHNlY3Rpb24gd2l0aCB0aGUgdGV4dCBwcm92aWRlZCBieSBgc2V0TmV3U2VjdGlvblRleHQoKWBcblx0ICogYW5kIHNlY3Rpb24gdGl0bGUgZnJvbSBgc2V0TmV3U2VjdGlvblRpdGxlKClgLlxuXHQgKiBJZiBgZWRpdFN1bW1hcnlgIGlzIHByb3ZpZGVkLCB0aGF0IHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZVxuXHQgKiBhdXRvZ2VuZXJhdGVkIFwiLT5UaXRsZSAobmV3IHNlY3Rpb25cIiBlZGl0IHN1bW1hcnkuXG5cdCAqIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0IGV4cGlyeVxuXHQgKiBpcyB1c2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdCAqL1xuXHRuZXdTZWN0aW9uKG9uU3VjY2Vzcz86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCwgb25GYWlsdXJlPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRpZiAodGhpcy5mbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdHRoaXMubG9hZCh0aGlzLmZuQXV0b1NhdmUsIHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH1cblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGxvYWRlZCBwYWdlLCBpbmNsdWRpbmcgdGhlIG5hbWVzcGFjZSAqL1xuXHRnZXRQYWdlTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmN0eC5wYWdlTmFtZTtcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIHRleHQgb2YgdGhlIHBhZ2UgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvYWQoKSAqL1xuXHRnZXRQYWdlVGV4dCgpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5jdHgucGFnZVRleHQ7XG5cdH1cblx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwYWdlVGV4dCAtIFVwZGF0ZWQgcGFnZSB0ZXh0IHRoYXQgd2lsbCBiZSBzYXZlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZCAqL1xuXHRzZXRQYWdlVGV4dChwYWdlVGV4dDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAnYWxsJztcblx0XHR0aGlzLmN0eC5wYWdlVGV4dCA9IHBhZ2VUZXh0O1xuXHR9XG5cdC8qKiBAcGFyYW0ge3N0cmluZ30gYXBwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBwYWdlIHdoZW4gYGFwcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0c2V0QXBwZW5kVGV4dChhcHBlbmRUZXh0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdHRoaXMuY3R4LmFwcGVuZFRleHQgPSBhcHBlbmRUZXh0O1xuXHR9XG5cdC8qKiBAcGFyYW0ge3N0cmluZ30gcHJlcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBwcmVwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgcHJlcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0c2V0UHJlcGVuZFRleHQocHJlcGVuZFRleHQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdHRoaXMuY3R4LnByZXBlbmRUZXh0ID0gcHJlcGVuZFRleHQ7XG5cdH1cblx0LyoqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGluIGEgbmV3IHNlY3Rpb24gb24gdGhlIHBhZ2Ugd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWQgKi9cblx0c2V0TmV3U2VjdGlvblRleHQobmV3U2VjdGlvblRleHQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0dGhpcy5jdHgubmV3U2VjdGlvblRleHQgPSBuZXdTZWN0aW9uVGV4dDtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UaXRsZSAtIFRpdGxlIGZvciB0aGUgbmV3IHNlY3Rpb24gY3JlYXRlZCB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZFxuXHQgKiBJZiBtaXNzaW5nLCBgY3R4LmVkaXRTdW1tYXJ5YCB3aWxsIGJlIHVzZWQuIElzc3VlcyBtYXkgb2NjdXIgaWYgYSBzdWJzdGl0dXRlZCB0ZW1wbGF0ZSBpcyB1c2VkLlxuXHQgKi9cblx0c2V0TmV3U2VjdGlvblRpdGxlKG5ld1NlY3Rpb25UaXRsZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHR0aGlzLmN0eC5uZXdTZWN0aW9uVGl0bGUgPSBuZXdTZWN0aW9uVGl0bGU7XG5cdH1cblx0Ly8gRWRpdC1yZWxhdGVkIHNldHRlciBtZXRob2RzOlxuXHQvKipcblx0ICogU2V0IHRoZSBlZGl0IHN1bW1hcnkgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdCAqIFVubmVjZXNzYXJ5IGlmIGVkaXRNb2RlIGlzICduZXcnIGFuZCBuZXdTZWN0aW9uVGl0bGUgaXMgcHJvdmlkZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5XG5cdCAqL1xuXHRzZXRFZGl0U3VtbWFyeShzdW1tYXJ5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5lZGl0U3VtbWFyeSA9IHN1bW1hcnk7XG5cdH1cblx0LyoqXG5cdCAqIFNldCBhbnkgY3VzdG9tIHRhZyhzKSB0byBiZSBhcHBsaWVkIHRvIHRoZSBBUEkgYWN0aW9uLlxuXHQgKiBBIG51bWJlciBvZiBhY3Rpb25zIGRvbid0IHN1cHBvcnQgaXQsIG1vc3Qgbm90YWJseSB3YXRjaC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3MgLSBTdHJpbmcgb3IgYXJyYXkgb2YgdGFnKHMpLlxuXHQgKi9cblx0c2V0Q2hhbmdlVGFncyh0YWdzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmNoYW5nZVRhZ3MgPSB0YWdzO1xuXHR9XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NyZWF0ZU9wdGlvbj1udWxsXSAtIENhbiB0YWtlIHRoZSBmb2xsb3dpbmcgZm91ciB2YWx1ZXM6XG5cdCAqIC0gcmVjcmVhdGU6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgb3IgZWRpdCBpdCBpZiBpdCBleGlzdHMuXG5cdCAqIC0gY3JlYXRlb25seTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBidXQgcmV0dXJuIGFuXG5cdCAqIGVycm9yIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHQgKiAtIG5vY3JlYXRlOiBkb24ndCBjcmVhdGUgdGhlIHBhZ2UsIG9ubHkgZWRpdCBpdCBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cblx0ICogLSBgbnVsbGA6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgdW5sZXNzIGl0IHdhcyBkZWxldGVkXG5cdCAqIGluIHRoZSBtb21lbnQgYmV0d2VlbiBsb2FkaW5nIHRoZSBwYWdlIGFuZCBzYXZpbmcgdGhlIGVkaXQgKGRlZmF1bHQpLlxuXHQgKi9cblx0c2V0Q3JlYXRlT3B0aW9uKGNyZWF0ZU9wdGlvbj86ICdyZWNyZWF0ZScgfCAnY3JlYXRlb25seScgfCAnbm9jcmVhdGUnIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmNyZWF0ZU9wdGlvbiA9IGNyZWF0ZU9wdGlvbiA/PyBudWxsO1xuXHR9XG5cdC8qKiBAcGFyYW0ge2Jvb2xlYW59IG1pbm9yRWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBtaW5vciBlZGl0LiAqL1xuXHRzZXRNaW5vckVkaXQobWlub3JFZGl0OiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgubWlub3JFZGl0ID0gbWlub3JFZGl0O1xuXHR9XG5cdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGJvdEVkaXQgLSBTZXQgdHJ1ZSB0byBtYXJrIHRoZSBlZGl0IGFzIGEgYm90IGVkaXQgKi9cblx0c2V0Qm90RWRpdChib3RFZGl0OiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguYm90RWRpdCA9IGJvdEVkaXQ7XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlU2VjdGlvbiAtIEludGVnZXIgc3BlY2lmeWluZyB0aGUgc2VjdGlvbiBudW1iZXIgdG8gbG9hZCBvciBzYXZlLlxuXHQgKiBJZiBzcGVjaWZpZWQgYXMgYG51bGxgLCB0aGUgZW50aXJlIHBhZ2Ugd2lsbCBiZSByZXRyaWV2ZWQuXG5cdCAqL1xuXHRzZXRQYWdlU2VjdGlvbihwYWdlU2VjdGlvbjogbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LnBhZ2VTZWN0aW9uID0gcGFnZVNlY3Rpb247XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhDb25mbGljdFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0ICovXG5cdHNldE1heENvbmZsaWN0UmV0cmllcyhtYXhDb25mbGljdFJldHJpZXM6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm1heENvbmZsaWN0UmV0cmllcyA9IG1heENvbmZsaWN0UmV0cmllcztcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgbm90IGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdCAqIGxvc3Mgb2YgdG9rZW4uIERlZmF1bHQ6IDIuXG5cdCAqL1xuXHRzZXRNYXhSZXRyaWVzKG1heFJldHJpZXM6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm1heFJldHJpZXMgPSBtYXhSZXRyaWVzO1xuXHR9XG5cdC8qKlxuXHQgKiBTZXQgd2hldGhlciBhbmQgaG93IHRvIHdhdGNoIHRoZSBwYWdlLCBpbmNsdWRpbmcgc2V0dGluZyBhbiBleHBpcnkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0T3B0aW9uPWZhbHNlXSAtXG5cdCAqIEJhc2ljYWxseSBhIG1peCBvZiBNVyBBUEkgYW5kIFR3aW5rbGV5IG9wdGlvbnMgYXZhaWxhYmxlIHByZS1leHBpcnk6XG5cdCAqIC0gYHRydWVgfGAneWVzJ2B8YCd3YXRjaCdgOiBwYWdlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHVzZXInc1xuXHQgKiB3YXRjaGxpc3Qgd2hlbiB0aGUgYWN0aW9uIGlzIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZVxuXHQgKiB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXMgcHJvdmlkZWQuXG5cdCAqIC0gYGZhbHNlYHxgJ25vJ2B8YCdub2NoYW5nZSdgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIChpbmNsdWRpbmcgZXhwaXJ5KSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHQgKiAtIGAnZGVmYXVsdCdgfGAncHJlZmVyZW5jZXMnYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIGJlXG5cdCAqIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiB0aGUgYWN0aW9uIGlzXG5cdCAqIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZSB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXNcblx0ICogcHJvdmlkZWQuXG5cdCAqIC0gYCd1bndhdGNoJ2A6IGV4cGxpY2l0bHkgdW53YXRjaCB0aGUgcGFnZS5cblx0ICogLSBBbnkgb3RoZXIgYHN0cmluZ2Agb3IgYG51bWJlcmAsIG9yIGEgYE1vcmViaXRzLmRhdGVgIG9yIGBEYXRlYFxuXHQgKiBvYmplY3Q6IHdhdGNoIHBhZ2UgdW50aWwgdGhlIHNwZWNpZmllZCB0aW1lLCBkZWZlcnJpbmcgdG9cblx0ICogYHdhdGNobGlzdEV4cGlyeWAgaWYgcHJvdmlkZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0ICovXG5cdHNldFdhdGNobGlzdChcblx0XHR3YXRjaGxpc3RPcHRpb24/OiBib29sZWFuIHwgc3RyaW5nIHwgbnVtYmVyIHwgSW5zdGFuY2VUeXBlPE1vcmViaXRzTmFtZXNwYWNlWydkYXRlJ10+IHwgRGF0ZSxcblx0XHR3YXRjaGxpc3RFeHBpcnk/OiBzdHJpbmcgfCBudW1iZXIgfCBJbnN0YW5jZVR5cGU8TW9yZWJpdHNOYW1lc3BhY2VbJ2RhdGUnXT4gfCBEYXRlXG5cdCk6IHZvaWQge1xuXHRcdGlmICh3YXRjaGxpc3RPcHRpb24gaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdHdhdGNobGlzdE9wdGlvbiA9IHdhdGNobGlzdE9wdGlvbi50b0lTT1N0cmluZygpO1xuXHRcdH1cblx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdH1cblx0XHRzd2l0Y2ggKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0Y2FzZSAnbm9jaGFuZ2UnOlxuXHRcdFx0Y2FzZSAnbm8nOlxuXHRcdFx0Y2FzZSBmYWxzZTpcblx0XHRcdGNhc2UgdW5kZWZpbmVkOlxuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0XHQvLyBUaGUgTVcgQVBJIGFsbG93cyBmb3IgY2hhbmdpbmcgZXhwaXJ5IHdpdGggbm9jaGFuZ2UgKGFzIFwibm9jaGFuZ2VcIiByZWZlcnMgdG8gdGhlIGJpbmFyeSBzdGF0dXMpLFxuXHRcdFx0XHQvLyBidXQgYnkga2VlcGluZyB0aGlzIG51bGwgaXQgd2lsbCBkZWZhdWx0IHRvIGFueSBleGlzdGluZyBleHBpcnksIGVuc3VyZSB0aGVyZSBpcyBhY3R1YWxseSBcIm5vIGNoYW5nZS5cIlxuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkgPSBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3Vud2F0Y2gnOlxuXHRcdFx0XHQvLyBleHBpcnkgdW5pbXBvcnRhbnRcblx0XHRcdFx0dGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3Vud2F0Y2gnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ByZWZlcmVuY2VzJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0XHQvLyBUaGUgQVBJIGFsbG93cyBhbiBleHBpcnkgaGVyZSwgYnV0IHRoZXJlIGlzIGFzIG9mIHlldCAoVDI2NTcxNilcblx0XHRcdFx0Ly8gbm8gZXhwaXJ5IHByZWZlcmVuY2Ugb3B0aW9uLCBzbyBpdCdzIGEgYml0IGRldm9pZCBvZiBjb250ZXh0LlxuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0Y2FzZSAneWVzJzpcblx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0dGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0dGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdC8vIE5vdCByZWFsbHkgYSBcImRlZmF1bHRcIiBwZXIgc2UgYnV0IGNhdGNoZXMgXCJhbnkgb3RoZXIgc3RyaW5nXCJcblx0XHRcdFx0dGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0dGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0T3B0aW9uO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFNldCBhIHdhdGNobGlzdCBleHBpcnkuIHNldFdhdGNobGlzdCBjYW4gbW9zdGx5IGhhbmRsZSB0aGlzIGJ5XG5cdCAqIGl0c2VsZiwgc28gdGhpcyBpcyBoZXJlIGxhcmdlbHkgZm9yIGNvbXBsZXRlbmVzcyBhbmQgY29tcGF0aWJpbGl0eVxuXHQgKiB3aXRoIHRoZSBmdWxsIHN1aXRlIG9mIG9wdGlvbnMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0ICovXG5cdHNldFdhdGNobGlzdEV4cGlyeSh3YXRjaGxpc3RFeHBpcnk/OiBzdHJpbmcgfCBudW1iZXIgfCBJbnN0YW5jZVR5cGU8TW9yZWJpdHNOYW1lc3BhY2VbJ2RhdGUnXT4gfCBEYXRlKTogdm9pZCB7XG5cdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdH0gZWxzZSBpZiAod2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHR9XG5cdFx0dGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHR9XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCBBcyBvZiBEZWNlbWJlciAyMDIwLCB1c2Ugc2V0V2F0Y2hsaXN0LlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0ICogLSBgVHJ1ZWA6IHBhZ2Ugd2F0Y2hsaXN0IHN0YXR1cyB3aWxsIGJlIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzXG5cdCAqIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdCAqIC0gYEZhbHNlYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBXYXRjaGxpc3Qgbm90ZXM6XG5cdCAqIDEuIFRoZSBNZWRpYVdpa2kgQVBJIHZhbHVlIG9mICd1bndhdGNoJywgd2hpY2ggZXhwbGljaXRseSByZW1vdmVzXG5cdCAqIHRoZSBwYWdlIGZyb20gdGhlIHVzZXIncyB3YXRjaGxpc3QsIGlzIG5vdCB1c2VkLlxuXHQgKiAyLiBJZiBib3RoIGBzZXRXYXRjaGxpc3QoKWAgYW5kIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWAgYXJlXG5cdCAqIGNhbGxlZCwgdGhlIGxhc3QgY2FsbCB0YWtlcyBwcmlvcml0eS5cblx0ICogMy4gVHdpbmtsZSBtb2R1bGVzIHNob3VsZCB1c2UgdGhlIGFwcHJvcHJpYXRlIHByZWZlcmVuY2UgdG8gc2V0IHRoZSB3YXRjaGxpc3Qgb3B0aW9ucy5cblx0ICogNC4gTW9zdCBUd2lua2xlIG1vZHVsZXMgdXNlIGBzZXRXYXRjaGxpc3QoKWAuIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWBcblx0ICogaXMgb25seSBuZWVkZWQgZm9yIHRoZSBmZXcgVHdpbmtsZSB3YXRjaGxpc3QgcHJlZmVyZW5jZXMgdGhhdFxuXHQgKiBhY2NlcHQgYSBzdHJpbmcgdmFsdWUgb2YgYGRlZmF1bHRgLlxuXHQgKi9cblx0c2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKHdhdGNobGlzdE9wdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHQnW01vcmViaXRzXSBOT1RFOiBNb3JlYml0cy53aWtpLnBhZ2Uuc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzIHdhcyBkZXByZWNhdGVkIERlY2VtYmVyIDIwMjAsIHBsZWFzZSB1c2Ugc2V0V2F0Y2hsaXN0J1xuXHRcdCk7XG5cdFx0aWYgKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0dGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uID0gJ25vY2hhbmdlJztcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd1JlZGlyZWN0PWZhbHNlXSAtXG5cdCAqIC0gYHRydWVgOiBhIG1heGltdW0gb2Ygb25lIHJlZGlyZWN0IHdpbGwgYmUgZm9sbG93ZWQuIEluIHRoZSBldmVudFxuXHQgKiBvZiBhIHJlZGlyZWN0LCBhIG1lc3NhZ2UgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGFuZCB0aGUgcmVkaXJlY3Rcblx0ICogdGFyZ2V0IGNhbiBiZSByZXRyaWV2ZWQgd2l0aCBnZXRQYWdlTmFtZSgpLlxuXHQgKiAtIGBmYWxzZWA6IChkZWZhdWx0KSB0aGUgcmVxdWVzdGVkIHBhZ2VOYW1lIHdpbGwgYmUgdXNlZCB3aXRob3V0IHJlZ2FyZCB0byBhbnkgcmVkaXJlY3QuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd0Nyb3NzTnNSZWRpcmVjdD10cnVlXSAtIE5vdCBhcHBsaWNhYmxlIGlmIGBmb2xsb3dSZWRpcmVjdGAgaXMgbm90IHNldCB0cnVlLlxuXHQgKiAtIGB0cnVlYDogKGRlZmF1bHQpIGZvbGxvdyByZWRpcmVjdCBldmVuIGlmIGl0IGlzIGEgY3Jvc3MtbmFtZXNwYWNlIHJlZGlyZWN0XG5cdCAqIC0gYGZhbHNlYDogZG9uJ3QgZm9sbG93IHJlZGlyZWN0IGlmIGl0IGlzIGNyb3NzLW5hbWVzcGFjZSwgZWRpdCB0aGUgcmVkaXJlY3QgaXRzZWxmLlxuXHQgKi9cblx0c2V0Rm9sbG93UmVkaXJlY3QoZm9sbG93UmVkaXJlY3Q/OiBib29sZWFuLCBmb2xsb3dDcm9zc05zUmVkaXJlY3Q/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY3R4LnBhZ2VMb2FkZWQpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogY2Fubm90IGNoYW5nZSByZWRpcmVjdCBzZXR0aW5nIGFmdGVyIHRoZSBwYWdlIGhhcyBiZWVuIGxvYWRlZCEnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5mb2xsb3dSZWRpcmVjdCA9IGZvbGxvd1JlZGlyZWN0ID8/IGZhbHNlO1xuXHRcdHRoaXMuY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9XG5cdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3QgPT09IHVuZGVmaW5lZCA/IHRoaXMuY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA6IGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDtcblx0fVxuXHQvLyBsb29rdXAtY3JlYXRpb24gc2V0dGVyIGZ1bmN0aW9uXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgLSBJZiBzZXQgdHJ1ZSwgdGhlIGF1dGhvciBhbmQgdGltZXN0YW1wIG9mXG5cdCAqIHRoZSBmaXJzdCBub24tcmVkaXJlY3QgdmVyc2lvbiBvZiB0aGUgcGFnZSBpcyByZXRyaWV2ZWQuXG5cdCAqXG5cdCAqIFdhcm5pbmc6XG5cdCAqIDEuIElmIHRoZXJlIGFyZSBubyByZXZpc2lvbnMgYW1vbmcgdGhlIGZpcnN0IDUwIHRoYXQgYXJlXG5cdCAqIG5vbi1yZWRpcmVjdHMsIG9yIGlmIHRoZXJlIGFyZSBsZXNzIDUwIHJldmlzaW9ucyBhbmQgYWxsIGFyZVxuXHQgKiByZWRpcmVjdHMsIHRoZSBvcmlnaW5hbCBjcmVhdGlvbiBpcyByZXRyaWV2ZWQuXG5cdCAqIDIuIFJldmlzaW9ucyB0aGF0IHRoZSB1c2VyIGlzIG5vdCBwcml2aWxlZ2VkIHRvIGFjY2Vzc1xuXHQgKiAocmV2ZGVsZWQvc3VwcHJlc3NlZCkgd2lsbCBiZSB0cmVhdGVkIGFzIG5vbi1yZWRpcmVjdHMuXG5cdCAqIDMuIE11c3Qgbm90IGJlIHVzZWQgd2hlbiB0aGUgcGFnZSBoYXMgYSBub24td2lraXRleHQgY29udGVudG1vZGVsXG5cdCAqIHN1Y2ggYXMgTW9kdWxlc3BhY2UgTHVhIG9yIHVzZXIgSmF2YVNjcmlwdC9DU1MuXG5cdCAqL1xuXHRzZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IoZmxhZzogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZsYWc7XG5cdH1cblx0Ly8gTW92ZS1yZWxhdGVkIHNldHRlciBmdW5jdGlvbnNcblx0LyoqIEBwYXJhbSB7c3RyaW5nfSBkZXN0aW5hdGlvbiAqL1xuXHRzZXRNb3ZlRGVzdGluYXRpb24oZGVzdGluYXRpb246IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm1vdmVEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuXHR9XG5cdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0c2V0TW92ZVRhbGtQYWdlKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5tb3ZlVGFsa1BhZ2UgPSAhIWZsYWc7XG5cdH1cblx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRzZXRNb3ZlU3VicGFnZXMoZmxhZzogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm1vdmVTdWJwYWdlcyA9ICEhZmxhZztcblx0fVxuXHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdHNldE1vdmVTdXBwcmVzc1JlZGlyZWN0KGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCA9ICEhZmxhZztcblx0fVxuXHQvLyBQcm90ZWN0LXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIC0gVGhlIHJpZ2h0IHJlcXVpcmVkIGZvciB0aGUgc3BlY2lmaWMgYWN0aW9uXG5cdCAqIGUuZy4gc3lzb3AsIHRlbXBsYXRlZWRpdG9yLCBhdXRvY29uZmlybWVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwaXJ5PWluZmluaXR5XVxuXHQgKi9cblx0c2V0RWRpdFByb3RlY3Rpb24obGV2ZWw6IHN0cmluZywgZXhwaXJ5Pzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgucHJvdGVjdEVkaXQgPSB7XG5cdFx0XHRsZXZlbCxcblx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0fTtcblx0fVxuXHRzZXRNb3ZlUHJvdGVjdGlvbihsZXZlbDogc3RyaW5nLCBleHBpcnk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHR9O1xuXHR9XG5cdHNldENyZWF0ZVByb3RlY3Rpb24obGV2ZWw6IHN0cmluZywgZXhwaXJ5Pzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHR9O1xuXHR9XG5cdHNldENhc2NhZGluZ1Byb3RlY3Rpb24oZmxhZzogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY3R4LnByb3RlY3RDYXNjYWRlID0gISFmbGFnO1xuXHR9XG5cdHN1cHByZXNzUHJvdGVjdFdhcm5pbmcoKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyA9IHRydWU7XG5cdH1cblx0Ly8gUmV2ZXJ0LXJlbGF0ZWQgZ2V0dGVycy9zZXR0ZXJzOlxuXHRzZXRPbGRJRChvbGRJRDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgucmV2ZXJ0T2xkSUQgPSBvbGRJRDtcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIGN1cnJlbnQgcmV2aXNpb24gSUQgb2YgdGhlIHBhZ2UgKi9cblx0Z2V0Q3VycmVudElEKCk6IG51bWJlciB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmN0eC5yZXZlcnRDdXJJRDtcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gTGFzdCBlZGl0b3Igb2YgdGhlIHBhZ2UgKi9cblx0Z2V0UmV2aXNpb25Vc2VyKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmN0eC5yZXZlcnRVc2VyO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBJU08gODYwMSB0aW1lc3RhbXAgYXQgd2hpY2ggdGhlIHBhZ2Ugd2FzIGxhc3QgZWRpdGVkLiAqL1xuXHRnZXRMYXN0RWRpdFRpbWUoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4Lmxhc3RFZGl0VGltZTtcblx0fVxuXHQvLyBNaXNjZWxsYW5lb3VzIGdldHRlcnMvc2V0dGVyczpcblx0LyoqXG5cdCAqIERlZmluZSBhbiBvYmplY3QgZm9yIHVzZSBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBgY2FsbGJhY2tQYXJhbWV0ZXJzYCBpcyBmb3IgdXNlIGJ5IHRoZSBjYWxsZXIgb25seS4gVGhlIHBhcmFtZXRlcnNcblx0ICogYWxsb3cgYSBjYWxsZXIgdG8gcGFzcyB0aGUgcHJvcGVyIGNvbnRleHQgaW50byBpdHMgY2FsbGJhY2tcblx0ICogZnVuY3Rpb24uICBDYWxsZXJzIG11c3QgZW5zdXJlIHRoYXQgYW55IGNoYW5nZXMgdG8gdGhlXG5cdCAqIGNhbGxiYWNrUGFyYW1ldGVycyBvYmplY3Qgd2l0aGluIGEgYGxvYWQoKWAgY2FsbGJhY2sgc3RpbGwgcGVybWl0IGFcblx0ICogcHJvcGVyIHJlLWVudHJ5IGludG8gdGhlIGBsb2FkKClgIGNhbGxiYWNrIGlmIGFuIGVkaXQgY29uZmxpY3QgaXNcblx0ICogZGV0ZWN0ZWQgdXBvbiBjYWxsaW5nIGBzYXZlKClgLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2tQYXJhbWV0ZXJzXG5cdCAqL1xuXHRzZXRDYWxsYmFja1BhcmFtZXRlcnMoY2FsbGJhY2tQYXJhbWV0ZXJzOiB1bmtub3duKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguY2FsbGJhY2tQYXJhbWV0ZXJzID0gY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHR9XG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBvYmplY3QgcHJldmlvdXNseSBzZXQgYnkgYHNldENhbGxiYWNrUGFyYW1ldGVycygpYC5cblx0ICovXG5cdGdldENhbGxiYWNrUGFyYW1ldGVycygpOiB1bmtub3duIHtcblx0XHRyZXR1cm4gdGhpcy5jdHguY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHR9XG5cdC8qKlxuXHQgKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gc3RhdHVzRWxlbWVudFxuXHQgKi9cblx0c2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50OiBTdGF0dXNFbGVtZW50KTogdm9pZCB7XG5cdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudCA9IHN0YXR1c0VsZW1lbnQ7XG5cdH1cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IFN0YXR1cyBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGNvbnN0cnVjdG9yLlxuXHQgKi9cblx0Z2V0U3RhdHVzRWxlbWVudCgpOiBTdGF0dXNFbGVtZW50IHtcblx0XHRyZXR1cm4gdGhpcy5jdHguc3RhdHVzRWxlbWVudDtcblx0fVxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhZ2UgZXhpc3RlZCBvbiB0aGUgd2lraSB3aGVuIGl0IHdhcyBsYXN0IGxvYWRlZC5cblx0ICovXG5cdGV4aXN0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jdHgucGFnZUV4aXN0cztcblx0fVxuXHQvKipcblx0ICogQHJldHVybnMge3N0cmluZ30gUGFnZSBJRCBvZiB0aGUgcGFnZSBsb2FkZWQuIDAgaWYgdGhlIHBhZ2UgZG9lc24ndFxuXHQgKiBleGlzdC5cblx0ICovXG5cdGdldFBhZ2VJRCgpOiBudW1iZXIgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5jdHgucGFnZUlEO1xuXHR9XG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnRlbnQgbW9kZWwgb2YgdGhlIHBhZ2UuICBQb3NzaWJsZSB2YWx1ZXNcblx0ICogaW5jbHVkZSAoYnV0IG1heSBub3QgYmUgbGltaXRlZCB0byk6IGB3aWtpdGV4dGAsIGBqYXZhc2NyaXB0YCxcblx0ICogYGNzc2AsIGBqc29uYCwgYFNjcmlidW50b2AsIGBzYW5pdGl6ZWQtY3NzYCwgYE1hc3NNZXNzYWdlTGlzdENvbnRlbnRgLlxuXHQgKiBBbHNvIGdldHRhYmxlIHZpYSBgbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJylgLlxuXHQgKi9cblx0Z2V0Q29udGVudE1vZGVsKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmN0eC5jb250ZW50TW9kZWw7XG5cdH1cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBXYXRjaGVkIHN0YXR1cyBvZiB0aGUgcGFnZS4gQm9vbGVhblxuXHQgKiB1bmxlc3MgaXQncyBiZWluZyB3YXRjaGVkIHRlbXBvcmFyaWx5LCBpbiB3aGljaCBjYXNlIHJldHVybnMgdGhlXG5cdCAqIGV4cGlyeSBzdHJpbmcuXG5cdCAqL1xuXHRnZXRXYXRjaGVkKCk6IGJvb2xlYW4gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmN0eC53YXRjaGVkO1xuXHR9XG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBJU08gODYwMSB0aW1lc3RhbXAgYXQgd2hpY2ggdGhlIHBhZ2Ugd2FzIGxhc3QgbG9hZGVkLlxuXHQgKi9cblx0Z2V0TG9hZFRpbWUoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4LmxvYWRUaW1lO1xuXHR9XG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHQgKi9cblx0Z2V0Q3JlYXRvcigpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5jdHguY3JlYXRvcjtcblx0fVxuXHQvKipcblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIElTT1N0cmluZyB0aW1lc3RhbXAgb2YgcGFnZSBjcmVhdGlvbiBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHQgKi9cblx0Z2V0Q3JlYXRpb25UaW1lc3RhbXAoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4LnRpbWVzdGFtcDtcblx0fVxuXHQvKiogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgb3Igbm90IHlvdSBjYW4gZWRpdCB0aGUgcGFnZSAqL1xuXHRjYW5FZGl0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuY3R4LnRlc3RBY3Rpb25zICYmIHRoaXMuY3R4LnRlc3RBY3Rpb25zLmluY2x1ZGVzKCdlZGl0Jyk7XG5cdH1cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIHBhZ2UgYXMgd2VsbCBhc1xuXHQgKiB0aGUgdGltZXN0YW1wIG9mIGNyZWF0aW9uLiAgVGhlIHVzZXJuYW1lIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdCAqIGBnZXRDcmVhdG9yKClgIGZ1bmN0aW9uOyB0aGUgdGltZXN0YW1wIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdCAqIGBnZXRDcmVhdGlvblRpbWVzdGFtcCgpYCBmdW5jdGlvbi5cblx0ICogUHJpb3IgdG8gSnVuZSAyMDE5IGtub3duIGFzIGBsb29rdXBDcmVhdG9yKClgLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHQgKiB0aGUgdXNlcm5hbWUgYW5kIHRpbWVzdGFtcCBhcmUgZm91bmQgd2l0aGluIHRoZSBjYWxsYmFjay5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHQgKiB0aGUgbG9va3VwIGZhaWxzXG5cdCAqL1xuXHRsb29rdXBDcmVhdGlvbihvblN1Y2Nlc3M/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwsIG9uRmFpbHVyZT86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0dGhpcy5jdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb29rdXBDcmVhdGlvbigpIScpO1xuXHRcdFx0dGhpcy5jdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBxdWVyeTogV2lraVBhZ2VMb29rdXBDcmVhdGlvblF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IHRoaXMuY3R4LnBhZ2VOYW1lLFxuXHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdHJ2cHJvcDogJ3VzZXJ8dGltZXN0YW1wJyxcblx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fTtcblx0XHQvLyBPbmx5IHRoZSB3aWtpdGV4dCBjb250ZW50IG1vZGVsIGNhbiByZWxpYWJseSBoYW5kbGVcblx0XHQvLyBydnNlY3Rpb24sIG90aGVycyByZXR1cm4gYW4gZXJyb3Igd2hlbiBwYWlyZWQgd2l0aCB0aGVcblx0XHQvLyBjb250ZW50IHJ2cHJvcC4gUmVsYXRlZGx5LCBub24td2lraXRleHQgbW9kZWxzIGRvbid0XG5cdFx0Ly8gdW5kZXJzdGFuZCB0aGUgI1JFRElSRUNUIGNvbmNlcHQsIHNvIHdlIHNob3VsZG4ndCBhdHRlbXB0XG5cdFx0Ly8gdGhlIHJlZGlyZWN0IHJlc29sdXRpb24gaW4gZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3Ncblx0XHRpZiAodGhpcy5jdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yKSB7XG5cdFx0XHRxdWVyeS5ydnNlY3Rpb24gPSAwO1xuXHRcdFx0cXVlcnkucnZwcm9wICs9ICd8Y29udGVudCc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0fVxuXG5cdFx0dGhpcy5jdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHR1bHMoJ+aKk+WPlumhtemdouWIm+W7uuiAheS/oeaBrycsICfmipPlj5bpoIHpnaLlu7rnq4vogIXos4foqIonKSxcblx0XHRcdHF1ZXJ5LFxuXHRcdFx0dGhpcy5mbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0XHQpO1xuXHRcdHRoaXMuY3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdH1cblx0LyoqXG5cdCAqIFJldmVydHMgYSBwYWdlIHRvIGByZXZlcnRPbGRJRGAgc2V0IGJ5IGBzZXRPbGRJRGAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdCAqL1xuXHRyZXZlcnQob25TdWNjZXNzPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsLCBvbkZhaWx1cmU/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0dGhpcy5jdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdGlmICghdGhpcy5jdHgucmV2ZXJ0T2xkSUQpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiByZXZpc2lvbiBJRCB0byByZXZlcnQgdG8gd2FzIG5vdCBzZXQgYmVmb3JlIHJldmVydCEnKTtcblx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5lZGl0TW9kZSA9ICdyZXZlcnQnO1xuXHRcdHRoaXMubG9hZCh0aGlzLmZuQXV0b1NhdmUsIHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHR9XG5cdC8qKlxuXHQgKiBNb3ZlcyBhIHBhZ2UgdG8gYW5vdGhlciB0aXRsZS5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0ICovXG5cdG1vdmUob25TdWNjZXNzPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsLCBvbkZhaWx1cmU/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5vbk1vdmVTdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0dGhpcy5jdHgub25Nb3ZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdGlmICghdGhpcy5mblByZWZsaWdodENoZWNrcygnbW92ZScsIHRoaXMuY3R4Lm9uTW92ZUZhaWx1cmUpKSB7XG5cdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmN0eC5tb3ZlRGVzdGluYXRpb24pIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBkZXN0aW5hdGlvbiBwYWdlIG5hbWUgd2FzIG5vdCBzZXQgYmVmb3JlIG1vdmUhJyk7XG5cdFx0XHR0aGlzLmN0eC5vbk1vdmVGYWlsdXJlISh0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHR0aGlzLmZuUHJvY2Vzc01vdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdtb3ZlJyk7XG5cdFx0XHR0aGlzLmN0eC5tb3ZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR1bHMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdHRoaXMuZm5Qcm9jZXNzTW92ZSxcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0dGhpcy5jdHgub25Nb3ZlRmFpbHVyZSBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0XHRcdCk7XG5cdFx0XHR0aGlzLmN0eC5tb3ZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVBcGkucG9zdCgpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogTWFya3MgdGhlIHBhZ2UgYXMgcGF0cm9sbGVkLCB1c2luZyBgcmNpZGAgKGlmIGF2YWlsYWJsZSkgb3IgYHJldmlkYC5cblx0ICpcblx0ICogUGF0cm9sbGluZyBhcyBzdWNoIGRvZXNuJ3QgbmVlZCB0byByZWx5IG9uIGxvYWRpbmcgdGhlIHBhZ2UgaW5cblx0ICogcXVlc3Rpb247IHNpbXBseSBwYXNzaW5nIGEgcmV2aWQgdG8gdGhlIEFQSSBpcyBzdWZmaWNpZW50LCBzbyBpblxuXHQgKiB0aG9zZSBjYXNlcyBqdXN0IHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gaXMgcHJvYmFibHkgcHJlZmVyYWJsZS5cblx0ICpcblx0ICogTm8gZXJyb3IgaGFuZGxpbmcgc2luY2Ugd2UgZG9uJ3QgYWN0dWFsbHkgY2FyZSBhYm91dCB0aGUgZXJyb3JzLlxuXHQgKi9cblx0cGF0cm9sKCk6IHZvaWQge1xuXHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIU1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdC8vIElmIGEgbGluayBpcyBwcmVzZW50LCBkb24ndCBuZWVkIHRvIGNoZWNrIGlmIGl0J3MgcGF0cm9sbGVkXG5cdFx0aWYgKCRib2R5LmZpbmQoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBwYXRyb2xocmVmID0gJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsgYScpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdHRoaXMuY3R4LnJjaWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JjaWQnLCBwYXRyb2xocmVmKTtcblx0XHRcdHRoaXMuZm5Qcm9jZXNzUGF0cm9sKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHBhdHJvbFF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0XHQvLyBhcyBsb25nIGFzIHdlJ3JlIHF1ZXJ5aW5nLCBtaWdodCBhcyB3ZWxsIGdldCBhIHRva2VuXG5cdFx0XHRcdGxpc3Q6ICdyZWNlbnRjaGFuZ2VzJyxcblx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgdW5wYXRyb2xsZWRcblx0XHRcdFx0dGl0bGVzOiB0aGlzLmN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cmNwcm9wOiAncGF0cm9sbGVkJyxcblx0XHRcdFx0cmN0aXRsZTogdGhpcy5jdHgucGFnZU5hbWUsXG5cdFx0XHRcdHJjbGltaXQ6IDEsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuY3R4LnBhdHJvbEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0dWxzKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdHBhdHJvbFF1ZXJ5LFxuXHRcdFx0XHR0aGlzLmZuUHJvY2Vzc1BhdHJvbFxuXHRcdFx0KTtcblx0XHRcdHRoaXMuY3R4LnBhdHJvbEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHR0aGlzLmN0eC5wYXRyb2xBcGkucG9zdCgpO1xuXHRcdH1cblx0fVxuXHQvLyB8ZGVsZXRlfCBpcyBhIHJlc2VydmVkIHdvcmQgaW4gc29tZSBmbGF2b3VycyBvZiBKU1xuXHQvKipcblx0ICogRGVsZXRlcyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdCAqL1xuXHRkZWxldGVQYWdlKG9uU3VjY2Vzcz86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCwgb25GYWlsdXJlPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgub25EZWxldGVTdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0dGhpcy5jdHgub25EZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0aWYgKCF0aGlzLmZuUHJlZmxpZ2h0Q2hlY2tzKCdkZWxldGUnLCB0aGlzLmN0eC5vbkRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdHRoaXMuZm5Qcm9jZXNzRGVsZXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdGhpcy5mbk5lZWRUb2tlbkluZm9RdWVyeSgnZGVsZXRlJyk7XG5cdFx0XHR0aGlzLmN0eC5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHVscygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0dGhpcy5mblByb2Nlc3NEZWxldGUsXG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdHRoaXMuY3R4Lm9uRGVsZXRlRmFpbHVyZSBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0XHRcdCk7XG5cdFx0XHR0aGlzLmN0eC5kZWxldGVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0dGhpcy5jdHguZGVsZXRlQXBpLnBvc3QoKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFVuZGVsZXRlcyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdCAqL1xuXHR1bmRlbGV0ZVBhZ2Uob25TdWNjZXNzPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsLCBvbkZhaWx1cmU/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5vblVuZGVsZXRlU3VjY2VzcyA9IG9uU3VjY2VzcyA/PyBudWxsO1xuXHRcdHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0aWYgKCF0aGlzLmZuUHJlZmxpZ2h0Q2hlY2tzKCd1bmRlbGV0ZScsIHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdHRoaXMuZm5Qcm9jZXNzVW5kZWxldGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmZuTmVlZFRva2VuSW5mb1F1ZXJ5KCd1bmRlbGV0ZScpO1xuXHRcdFx0dGhpcy5jdHgudW5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHVscygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0dGhpcy5mblByb2Nlc3NVbmRlbGV0ZSxcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0dGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUgYXMgdW5rbm93biBhcyAoKGFwaW9iajogV2lraUFwaSkgPT4gdm9pZCkgfCBudWxsXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5jdHgudW5kZWxldGVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0dGhpcy5jdHgudW5kZWxldGVBcGkucG9zdCgpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogUHJvdGVjdHMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHQgKi9cblx0cHJvdGVjdChvblN1Y2Nlc3M/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwsIG9uRmFpbHVyZT86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm9uUHJvdGVjdFN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHR0aGlzLmN0eC5vblByb3RlY3RGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0aWYgKCF0aGlzLmZuUHJlZmxpZ2h0Q2hlY2tzKCdwcm90ZWN0JywgdGhpcy5jdHgub25Qcm90ZWN0RmFpbHVyZSkpIHtcblx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuY3R4LnByb3RlY3RFZGl0ICYmICF0aGlzLmN0eC5wcm90ZWN0TW92ZSAmJiAhdGhpcy5jdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0J0ludGVybmFsIGVycm9yOiB5b3UgbXVzdCBzZXQgZWRpdCBhbmQvb3IgbW92ZSBhbmQvb3IgY3JlYXRlIHByb3RlY3Rpb24gYmVmb3JlIGNhbGxpbmcgcHJvdGVjdCgpISdcblx0XHRcdCk7XG5cdFx0XHR0aGlzLmN0eC5vblByb3RlY3RGYWlsdXJlISh0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gYmVjYXVzZSBvZiB0aGUgd2F5IE1XIEFQSSBpbnRlcnByZXRzIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0Ly8gKGFic29sdXRlLCBub3QgZGlmZmVyZW50aWFsKSwgd2UgYWx3YXlzIG5lZWQgdG8gcmVxdWVzdFxuXHRcdC8vIHByb3RlY3Rpb24gbGV2ZWxzIGZyb20gdGhlIHNlcnZlclxuXHRcdGNvbnN0IHF1ZXJ5ID0gdGhpcy5mbk5lZWRUb2tlbkluZm9RdWVyeSgncHJvdGVjdCcpO1xuXHRcdHRoaXMuY3R4LnByb3RlY3RBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHR1bHMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdHF1ZXJ5LFxuXHRcdFx0dGhpcy5mblByb2Nlc3NQcm90ZWN0LFxuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdHRoaXMuY3R4Lm9uUHJvdGVjdEZhaWx1cmUgYXMgdW5rbm93biBhcyAoKGFwaW9iajogV2lraUFwaSkgPT4gdm9pZCkgfCBudWxsXG5cdFx0KTtcblx0XHR0aGlzLmN0eC5wcm90ZWN0QXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmN0eC5wcm90ZWN0QXBpLnBvc3QoKTtcblx0fVxuXG5cdC8qXG5cdCAqIFByaXZhdGUgbWVtYmVyIGZ1bmN0aW9uc1xuXHQgKiBUaGVzZSBhcmUgbm90IGV4cG9zZWQgb3V0c2lkZVxuXHQgKi9cblx0LyoqXG5cdCAqIERldGVybWluZXMgd2hldGhlciB3ZSBjYW4gc2F2ZSBhbiBBUEkgY2FsbCBieSB1c2luZyB0aGUgY3NyZiB0b2tlblxuXHQgKiBzZW50IHdpdGggdGhlIHBhZ2UgSFRNTCwgb3Igd2hldGhlciB3ZSBuZWVkIHRvIGFzayB0aGUgc2VydmVyIGZvclxuXHQgKiBtb3JlIGluZm8gKGUuZy4gcHJvdGVjdGlvbiBvciB3YXRjaGxpc3QgZXhwaXJ5KS5cblx0ICpcblx0ICogQ3VycmVudGx5IHVzZWQgZm9yIGBhcHBlbmRgLCBgcHJlcGVuZGAsIGBuZXdTZWN0aW9uYCwgYG1vdmVgLFxuXHQgKiBgZGVsZXRlUGFnZWAsIGFuZCBgdW5kZWxldGVQYWdlYC4gTm90IHVzZWQgZm9yIGBwcm90ZWN0YFxuXHQgKiBzaW5jZSBpdCBhbHdheXMgbmVlZHMgdG8gcmVxdWVzdCBwcm90ZWN0aW9uIHN0YXR1cy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFthY3Rpb249ZWRpdF0gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy5cblx0ICogXCJlZGl0XCIgb3IgXCJkZWxldGVcIi4gSW4gcHJhY3RpY2UsIG9ubHkgXCJlZGl0XCIgb3IgXCJub3RlZGl0XCIgbWF0dGVycy5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwcml2YXRlIGZuQ2FuVXNlTXdVc2VyVG9rZW4gPSAoYWN0aW9uPzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0YWN0aW9uIHx8PSAnZWRpdCc7XG5cdFx0Ly8gSWYgYSB3YXRjaGxpc3QgZXhwaXJ5IGlzIHNldCwgd2UgbXVzdCBhbHdheXMgbG9hZCB0aGUgcGFnZVxuXHRcdC8vIHRvIGF2b2lkIG92ZXJ3cml0aW5nIGluZGVmaW5pdGUgcHJvdGVjdGlvbi4gIE9mIGNvdXJzZSwgbm90XG5cdFx0Ly8gbmVlZGVkIGlmIHNldHRpbmcgaW5kZWZpbml0ZSB3YXRjaGluZyFcblx0XHRpZiAodGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ICYmICFNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShTdHJpbmcodGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5KSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gQVBJLWJhc2VkIHJlZGlyZWN0IHJlc29sdXRpb24gb25seSB3b3JrcyBmb3IgYWN0aW9uPXF1ZXJ5IGFuZFxuXHRcdC8vIGFjdGlvbj1lZGl0IGluIGFwcGVuZC9wcmVwZW5kL25ldyBtb2Rlc1xuXHRcdGlmICh0aGlzLmN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0aWYgKCF0aGlzLmN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBtdXN0IGxvYWQgdGhlIHBhZ2UgdG8gY2hlY2sgZm9yIGNyb3NzIG5hbWVzcGFjZSByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFjdGlvbiAhPT0gJ2VkaXQnIHx8IHRoaXMuY3R4LmVkaXRNb2RlID09PSAnYWxsJyB8fCB0aGlzLmN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBkbyB3ZSBuZWVkIHRvIGZldGNoIHRoZSBlZGl0IHByb3RlY3Rpb24gZXhwaXJ5P1xuXHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhdGhpcy5jdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXcgbXcuVGl0bGUoTW9yZWJpdHMucGFnZU5hbWVOb3JtKS5nZXRQcmVmaXhlZFRleHQoKSAhPT1cblx0XHRcdFx0bmV3IG13LlRpdGxlKHRoaXMuY3R4LnBhZ2VOYW1lKS5nZXRQcmVmaXhlZFRleHQoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIHdnUmVzdHJpY3Rpb25FZGl0IGlzIG51bGwgb24gbm9uLWV4aXN0ZW50IHBhZ2VzLFxuXHRcdFx0Ly8gc28gdGhpcyBuZWF0bHkgaGFuZGxlcyBub25leGlzdGVudCBwYWdlc1xuXHRcdFx0Y29uc3QgZWRpdFJlc3RyaWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dSZXN0cmljdGlvbkVkaXQnKTtcblx0XHRcdGlmICghZWRpdFJlc3RyaWN0aW9uIHx8IGVkaXRSZXN0cmljdGlvbi5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAhIW13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBXaGVuIGZ1bmN0aW9ucyBjYW4ndCB1c2Vcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX5mbkNhblVzZU13VXNlclRva2VufGZuQ2FuVXNlTXdVc2VyVG9rZW59XG5cdCAqIG9yIHJlcXVpcmUgY2hlY2tpbmcgcHJvdGVjdGlvbiBvciB3YXRjaGVkIHN0YXR1cywgbWFpbnRhaW4gdGhlIHF1ZXJ5XG5cdCAqIGluIG9uZSBwbGFjZS4gVXNlZCBmb3Ige0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNkZWxldGVQYWdlfGRlbGV0ZX0sXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjdW5kZWxldGVQYWdlfHVuZGVsZXRlfSxcblx0ICoge0BsaW5rKiBNb3JlYml0cy53aWtpLnBhZ2UjcHJvdGVjdHxwcm90ZWN0fSxcblx0ICogYW5kIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjbW92ZXxtb3ZlfVxuXHQgKiAoYmFzaWNhbGx5LCBqdXN0IG5vdCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2xvYWR8bG9hZH0pLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyB1bmRlcnRha2VuLCBlLmcuIFwiZWRpdFwiIG9yXG5cdCAqIFwiZGVsZXRlXCIuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IEFwcHJvcHJpYXRlIHF1ZXJ5LlxuXHQgKi9cblx0cHJpdmF0ZSBmbk5lZWRUb2tlbkluZm9RdWVyeSA9IChhY3Rpb246IHN0cmluZyk6IFdpa2lQYWdlUHJpdmF0ZVF1ZXJ5ID0+IHtcblx0XHRjb25zdCBxdWVyeTogV2lraVBhZ2VQcml2YXRlUXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdHRpdGxlczogdGhpcy5jdHgucGFnZU5hbWUsXG5cdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH07XG5cdFx0Ly8gUHJvdGVjdGlvbiBub3QgY2hlY2tlZCBmb3Igbm9uLXN5c29wIG1vdmVzXG5cdFx0aWYgKGFjdGlvbiAhPT0gJ21vdmUnIHx8IE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRxdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4LmZvbGxvd1JlZGlyZWN0ICYmIGFjdGlvbiAhPT0gJ3VuZGVsZXRlJykge1xuXHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHF1ZXJ5O1xuXHR9O1xuXHQvLyBjYWxsYmFjayBmcm9tIGxvYWRTdWNjZXNzKCkgZm9yIGFwcGVuZCgpLCBwcmVwZW5kKCksIGFuZCBuZXdTZWN0aW9uKCkgdGhyZWFkc1xuXHRwcml2YXRlIGZuQXV0b1NhdmUgPSAocGFnZW9iajogV2lraVBhZ2UpOiB2b2lkID0+IHtcblx0XHRwYWdlb2JqLnNhdmUodGhpcy5jdHgub25TYXZlU3VjY2VzcyEsIHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKTtcblx0fTtcblx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkQXBpLnBvc3QoKVxuXHRwcml2YXRlIGZuTG9hZFN1Y2Nlc3MgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHgubG9hZEFwaSEuZ2V0UmVzcG9uc2UoKSBhcyBXaWtpUGFnZUFwaVJlc3BvbnNlKS5xdWVyeTtcblx0XHRpZiAoIXRoaXMuZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCB0aGlzLmN0eC5vbkxvYWRGYWlsdXJlISkpIHtcblx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHR9XG5cblx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRsZXQgcmV2OiBXaWtpUGFnZUFwaVJldmlzaW9uIHwgdW5kZWZpbmVkO1xuXHRcdHRoaXMuY3R4LnBhZ2VFeGlzdHMgPSAhcGFnZS5taXNzaW5nO1xuXHRcdGlmICh0aGlzLmN0eC5wYWdlRXhpc3RzKSB7XG5cdFx0XHRbcmV2XSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0dGhpcy5jdHgubGFzdEVkaXRUaW1lID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdHRoaXMuY3R4LnBhZ2VUZXh0ID0gcmV2LmNvbnRlbnQ7XG5cdFx0XHR0aGlzLmN0eC5wYWdlSUQgPSBwYWdlLnBhZ2VpZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHgucGFnZVRleHQgPSAnJzsgLy8gYWxsb3cgZm9yIGNvbmNhdGVuYXRpb24sIGV0Yy5cblx0XHRcdHRoaXMuY3R4LnBhZ2VJRCA9IDA7IC8vIG5vbmV4aXN0ZW50IGluIHJlc3BvbnNlLCBtYXRjaGVzIHdnQXJ0aWNsZUlkXG5cdFx0fVxuXG5cdFx0dGhpcy5jdHguY3NyZlRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRpZiAoIXRoaXMuY3R4LmNzcmZUb2tlbikge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+acquiDveiOt+WPlue8lui+keS7pOeJjOOAgicsICfmnKrog73lj5blvpfnt6jovK/mrIrmnZbjgIInKSk7XG5cdFx0XHR0aGlzLmN0eC5vbkxvYWRGYWlsdXJlISh0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jdHgubG9hZFRpbWUgPSAodGhpcy5jdHgubG9hZEFwaSEuZ2V0UmVzcG9uc2UoKSBhcyBXaWtpUGFnZUFwaVJlc3BvbnNlKS5jdXJ0aW1lc3RhbXA7XG5cdFx0aWYgKCF0aGlzLmN0eC5sb2FkVGltZSkge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+acquiDveiOt+WPluW9k+WJjeaXtumXtOaIs+OAgicsICfmnKrog73lj5blvpfnlbbliY3mmYLplpPmiLPjgIInKSk7XG5cdFx0XHR0aGlzLmN0eC5vbkxvYWRGYWlsdXJlISh0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jdHguY29udGVudE1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0dGhpcy5jdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZCB8fCBmYWxzZTtcblx0XHQvLyBleHRyYWN0IHByb3RlY3Rpb24gaW5mbywgdG8gYWxlcnQgYWRtaW5zIHdoZW4gdGhleSBhcmUgYWJvdXQgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlXG5cdFx0Ly8gSW5jbHVkZXMgY2FzY2FkaW5nIHByb3RlY3Rpb25cblx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdGNvbnN0IGVkaXRQcm90ID0gcGFnZS5wcm90ZWN0aW9uLmZpbmRMYXN0KChwcikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoZWRpdFByb3QpIHtcblx0XHRcdFx0dGhpcy5jdHguZnVsbHlQcm90ZWN0ZWQgPSBlZGl0UHJvdC5leHBpcnk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmN0eC5mdWxseVByb3RlY3RlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmN0eC5yZXZlcnRDdXJJRCA9IHBhZ2UubGFzdHJldmlkID8/IG51bGw7XG5cdFx0Y29uc3QgdGVzdGFjdGlvbnMgPSBwYWdlLmFjdGlvbnM7XG5cdFx0dGhpcy5jdHgudGVzdEFjdGlvbnMgPSBbXTsgLy8gd2FzIG51bGxcblx0XHRmb3IgKGNvbnN0IGFjdGlvbiBvZiBPYmplY3Qua2V5cyh0ZXN0YWN0aW9ucyA/PyB7fSkpIHtcblx0XHRcdGlmICh0ZXN0YWN0aW9ucz8uW2FjdGlvbl0pIHtcblx0XHRcdFx0dGhpcy5jdHgudGVzdEFjdGlvbnNbdGhpcy5jdHgudGVzdEFjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0dGhpcy5jdHgucmV2ZXJ0Q3VySUQgPSAocmV2ICYmIHJldi5yZXZpZCkgfHwgbnVsbDtcblx0XHRcdGlmICghdGhpcy5jdHgucmV2ZXJ0Q3VySUQpIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+acquiDveiOt+WPluW9k+WJjeS/ruiuoueJiOacrElE44CCJywgJ+acquiDveWPluW+l+ebruWJjeS/ruiogueJiOacrElE44CCJykpO1xuXHRcdFx0XHR0aGlzLmN0eC5vbkxvYWRGYWlsdXJlISh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdHgucmV2ZXJ0VXNlciA9IChyZXYgJiYgcmV2LnVzZXIpIHx8IG51bGw7XG5cdFx0XHRpZiAoIXRoaXMuY3R4LnJldmVydFVzZXIpIHtcblx0XHRcdFx0aWYgKHJldiAmJiByZXYudXNlcmhpZGRlbikge1xuXHRcdFx0XHRcdC8vIHVzZXJuYW1lIHdhcyBSZXZEZWwnZCBvciBvdmVyc2lnaHRlZFxuXHRcdFx0XHRcdHRoaXMuY3R4LnJldmVydFVzZXIgPSB1bHMoJzznlKjmiLflkI3lt7LpmpDol48+JywgJzzkvb/nlKjogIXlkI3nqLHlt7LpmrHol48+Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+acquiDveiOt+WPluatpOS/ruiuoueJiOacrOeahOe8lui+keiAheOAgicsICfmnKrog73lj5blvpfmraTkv67oqILniYjmnKznmoTnt6jovK/ogIXjgIInKSk7XG5cdFx0XHRcdFx0dGhpcy5jdHgub25Mb2FkRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBzZXQgcmV2ZXJ0IGVkaXQgc3VtbWFyeVxuXHRcdFx0dGhpcy5jdHguZWRpdFN1bW1hcnkgPSBgW1tRVzpVTkRPfOaSpOmUgF1d55SxICR7dGhpcy5jdHgucmV2ZXJ0VXNlcn0g5omA5YGa5Ye655qEJHt1bHMoJ+S/ruiuoiAnLCAn5L+u6KiCICcpfSR7XG5cdFx0XHRcdHRoaXMuY3R4LnJldmVydE9sZElEXG5cdFx0XHR977yaJHt0aGlzLmN0eC5lZGl0U3VtbWFyeX1gO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5wYWdlTG9hZGVkID0gdHJ1ZTtcblx0XHQvLyBtdy5ub3RpZnkoXCJHZW5lcmF0ZSBlZGl0IGNvbmZsaWN0IG5vd1wiLCB7dHlwZTogJ3dhcm4nLCB0YWc6ICdtb3JlYml0cyd9KTsgIC8vIGZvciB0ZXN0aW5nIGVkaXQgY29uZmxpY3QgcmVjb3ZlcnkgbG9naWNcblx0XHR0aGlzLmN0eC5vbkxvYWRTdWNjZXNzISh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdH07XG5cdC8vIGhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSB0aGUgcGFnZSBuYW1lIHJldHVybmVkIGZyb20gdGhlIEFQSVxuXHRwcml2YXRlIGZuQ2hlY2tQYWdlTmFtZSA9IChyZXNwb25zZTogV2lraVBhZ2VBcGlRdWVyeSwgb25GYWlsdXJlOiAocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBwYWdlID0gcmVzcG9uc2UucGFnZXMgJiYgcmVzcG9uc2UucGFnZXNbMF07XG5cdFx0aWYgKHBhZ2UpIHtcblx0XHRcdC8vIGNoZWNrIGZvciBpbnZhbGlkIHRpdGxlc1xuXHRcdFx0aWYgKHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHVscygn5qCH6aKY5LiN5ZCI5rOV77yaJywgYOaomemhjOS4jeWQiOazle+8miR7dGhpcy5jdHgucGFnZU5hbWV9YCkpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHRcdH1cblx0XHRcdC8vIHJldHJpZXZlIGFjdHVhbCB0aXRsZSBvZiB0aGUgcGFnZSBhZnRlciBub3JtYWxpemF0aW9uIGFuZCByZWRpcmVjdHNcblx0XHRcdGNvbnN0IHJlc29sdmVkTmFtZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRpZiAocmVzcG9uc2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Q6XG5cdFx0XHRcdGNvbnN0IG9yaWdOcyA9IG5ldyBtdy5UaXRsZSh0aGlzLmN0eC5wYWdlTmFtZSkuZ2V0TmFtZXNwYWNlSWQoKTtcblx0XHRcdFx0Y29uc3QgbmV3TnMgPSBuZXcgbXcuVGl0bGUocmVzb2x2ZWROYW1lKS5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdFx0XHRpZiAob3JpZ05zICE9PSBuZXdOcyAmJiAhdGhpcy5jdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdHRoaXMuY3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0dWxzKCfmmK/ot6jlkb3lkI3nqbrpl7Tph43lrprlkJHliLAnLCAn5piv6Leo5ZG95ZCN56m66ZaT6YeN5paw5bCO5ZCR5YiwJykgK1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWUgK1xuXHRcdFx0XHRcdFx0XHR1bHMoJ++8jOeVpei/hycsICfvvIznlaXpgY4nKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBvbmx5IG5vdGlmeSB1c2VyIGZvciByZWRpcmVjdHMsIG5vdCBub3JtYWxpemF0aW9uXG5cdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoXG5cdFx0XHRcdFx0dWxzKCfkv6Hmga8nLCAn6LOH6KiKJyksXG5cdFx0XHRcdFx0dWxzKCfku44gJywgJ+W+niAnKSArIHRoaXMuY3R4LnBhZ2VOYW1lICsgdWxzKCcg6YeN5a6a5ZCR5YiwICcsICcg6YeN5paw5bCO5ZCR5YiwICcpICsgcmVzb2x2ZWROYW1lXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN0eC5wYWdlTmFtZSA9IHJlc29sdmVkTmFtZTsgLy8gdXBkYXRlIHRvIHJlZGlyZWN0IHRhcmdldCBvciBub3JtYWxpemVkIG5hbWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gY291bGQgYmUgYSBjaXJjdWxhciByZWRpcmVjdCBvciBvdGhlciBwcm9ibGVtXG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHVscygn5LiN6IO96Kej5p6Q6aG16Z2i55qE6YeN5a6a5ZCR77yaJywgJ+S4jeiDveino+aekOmggemdoueahOmHjeaWsOWwjuWQke+8micpICsgdGhpcy5jdHgucGFnZU5hbWUpO1xuXHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciB3ZSBzaG91bGQgcHJvdmlkZSBhIHdhdGNobGlzdCBleHBpcnkuICBXaWxsIG5vdFxuXHQgKiBkbyBzbyBpZiB0aGUgcGFnZSBpcyBjdXJyZW50bHkgcGVybWFuZW50bHkgd2F0Y2hlZCwgb3IgdGhlIGN1cnJlbnRcblx0ICogZXhwaXJ5IGlzICphZnRlciogdGhlIG5ldywgcHJvdmlkZWQgZXhwaXJ5LiAgT25seSBoYW5kbGVzIHN0cmluZ3Ncblx0ICogcmVjb2duaXplZCBieSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gb3IgcmVsYXRpdmUgdGltZWZyYW1lcyB3aXRoXG5cdCAqIHVuaXQgaXQgY2FuIHByb2Nlc3MuICBSZWxpZXMgb24gdGhlIGZhY3QgdGhhdCBmbkNhblVzZU13VXNlclRva2VuXG5cdCAqIHJlcXVpcmVzIHBhZ2UgbG9hZGluZyBpZiBhIHdhdGNobGlzdGV4cGlyeSBpcyBwcm92aWRlZCwgc28gd2UgYXJlXG5cdCAqIGVuc3VyZWQgb2Yga25vd2luZyB0aGUgd2F0Y2ggc3RhdHVzIGJ5IHRoZSB1c2Ugb2YgdGhpcy5cblx0ICpcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwcml2YXRlIGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0aWYgKHRoaXMuY3R4LndhdGNobGlzdEV4cGlyeSkge1xuXHRcdFx0aWYgKCF0aGlzLmN0eC53YXRjaGVkIHx8IE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KFN0cmluZyh0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkpKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY3R4LndhdGNoZWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGxldCBuZXdFeHBpcnk6IE1vcmViaXRzRGF0ZTtcblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBkZXRlcm1pbmUgaWYgdGhlIG5ldyBleHBpcnkgaXMgYVxuXHRcdFx0XHQvLyByZWxhdGl2ZSAoZS5nLiBgMSBtb250aGApIG9yIGFic29sdXRlIGRhdGV0aW1lXG5cdFx0XHRcdGNvbnN0IHJlbCA9IFN0cmluZyh0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkpLnNwbGl0KCcgJyk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoKS5hZGQocmVsWzBdID8/ICcnLCByZWxbMV0gPz8gJycpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIElmIHRoZSBkYXRlIGlzIHZhbGlkLCBvbmx5IHVzZSBpdCBpZiBpdCBleHRlbmRzIHRoZSBjdXJyZW50IGV4cGlyeVxuXHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNBZnRlcihuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmN0eC53YXRjaGVkKSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBJZiBpdCdzIHN0aWxsIG5vdCB2YWxpZCwgaG9wZSBpdCdzIGEgdmFsaWQgTVcgZXhwaXJ5IGZvcm1hdCB0aGF0XG5cdFx0XHRcdFx0Ly8gTW9yZWJpdHMuZGF0ZSBkb2Vzbid0IHJlY29nbml6ZSwgc28ganVzdCBkZWZhdWx0IHRvIHVzaW5nIGl0LlxuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCBhbHNvIGluY2x1ZGUgbWlub3IgdHlwb3MuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdHByaXZhdGUgZm5TYXZlU3VjY2VzcyA9ICgpOiB2b2lkID0+IHtcblx0XHR0aGlzLmN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRjb25zdCByZXNwb25zZSA9IHRoaXMuY3R4LnNhdmVBcGkhLmdldFJlc3BvbnNlKCkgYXMgdW5rbm93biBhcyB7ZWRpdDoge3Jlc3VsdDogc3RyaW5nOyBjYXB0Y2hhPzogdW5rbm93bn19O1xuXHRcdC8vIHNlZSBpZiB0aGUgQVBJIHRoaW5rcyB3ZSB3ZXJlIHN1Y2Nlc3NmdWxcblx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0Ly8gcmVhbCBzdWNjZXNzXG5cdFx0XHQvLyBkZWZhdWx0IG9uIHN1Y2Nlc3MgYWN0aW9uIC0gZGlzcGxheSBsaW5rIGZvciBlZGl0ZWQgcGFnZVxuXHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbXcudXRpbC5nZXRVcmwodGhpcy5jdHgucGFnZU5hbWUpKTtcblx0XHRcdGxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jdHgucGFnZU5hbWUpKTtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhbJ+WujOaIkO+8iCcsIGxpbmssICfvvIknXSk7XG5cdFx0XHRpZiAodGhpcy5jdHgub25TYXZlU3VjY2Vzcykge1xuXHRcdFx0XHR0aGlzLmN0eC5vblNhdmVTdWNjZXNzISh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gZXJyb3JzIGhlcmUgYXJlIG9ubHkgZ2VuZXJhdGVkIGJ5IGV4dGVuc2lvbnMgd2hpY2ggaG9vayBBUElFZGl0QmVmb3JlU2F2ZSB3aXRoaW4gTWVkaWFXaWtpLFxuXHRcdC8vIHdoaWNoIGFzIG9mIDEuMzQuMC13bWYuMjMgKFNlcHQgMjAxOSkgc2hvdWxkIG9ubHkgZW5jb21wYXNzIGNhcHRjaGEgbWVzc2FnZXNcblx0XHRpZiAocmVzcG9uc2UuZWRpdC5jYXB0Y2hhKSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHR1bHMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboOacjeWKoeWZqOimgeaxguaCqOi+k+WFpemqjOivgeeggeOAgicsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6DkvLrmnI3lmajopoHmsYLmgqjovLjlhaXpqZforYnnorzjgIInKVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+S/neWtmOmhtemdouaXtueUsUFQSeW+l+WIsOacquefpemUmeivrycsICflhLLlrZjpoIHpnaLmmYLnlLFBUEnlvpfliLDmnKrnn6XpjK/oqqQnKSk7XG5cdFx0fVxuXHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpO1xuXHR9O1xuXHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdHByaXZhdGUgZm5TYXZlRXJyb3IgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgZXJyb3JDb2RlID0gdGhpcy5jdHguc2F2ZUFwaSEuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0Ly8gY2hlY2sgZm9yIGVkaXQgY29uZmxpY3Rcblx0XHRpZiAoZXJyb3JDb2RlID09PSAnZWRpdGNvbmZsaWN0JyAmJiB0aGlzLmN0eC5jb25mbGljdFJldHJpZXMrKyA8IHRoaXMuY3R4Lm1heENvbmZsaWN0UmV0cmllcykge1xuXHRcdFx0Ly8gZWRpdCBjb25mbGljdHMgY2FuIG9jY3VyIHdoZW4gdGhlIHBhZ2UgbmVlZHMgdG8gYmUgcHVyZ2VkIGZyb20gdGhlIHNlcnZlciBjYWNoZVxuXHRcdFx0Y29uc3QgcHVyZ2VRdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0XHR0aXRsZXM6IHRoaXMuY3R4LnBhZ2VOYW1lLCAvLyByZWRpcmVjdHMgYXJlIGFscmVhZHkgcmVzb2x2ZWRcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHB1cmdlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR1bHMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOato+WcqOabtOaWsOacjeWKoeWZqOe8k+WtmCcsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzmraPlnKjmm7TmlrDkvLrmnI3lmajlv6vlj5YnKSxcblx0XHRcdFx0cHVyZ2VRdWVyeSxcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmluZm8odWxzKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzph43or5Xkv67mlLknLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM6YeN6Kmm5L+u5pS5JykpO1xuXHRcdFx0XHRcdGlmICh0aGlzLmZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5jdHguc2F2ZUFwaSEucG9zdCgpOyAvLyBuZWNlc3NhcmlseSBhcHBlbmQsIHByZXBlbmQsIG9yIG5ld1NlY3Rpb24sIHNvIHRoaXMgc2hvdWxkIHdvcmsgYXMgZGVzaXJlZFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmN0eC5sb2FkQXBpIS5wb3N0KCk7IC8vIHJlbG9hZCB0aGUgcGFnZSBhbmQgcmVhcHBseSB0aGUgZWRpdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudFxuXHRcdFx0KTtcblx0XHRcdHB1cmdlQXBpLnBvc3QoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBuZXR3b3JrIG9yIHNlcnZlciBlcnJvclxuXHRcdH0gZWxzZSBpZiAoKGVycm9yQ29kZSA9PT0gbnVsbCB8fCBlcnJvckNvZGUgPT09IHVuZGVmaW5lZCkgJiYgdGhpcy5jdHgucmV0cmllcysrIDwgdGhpcy5jdHgubWF4UmV0cmllcykge1xuXHRcdFx0Ly8gdGhlIGVycm9yIG1pZ2h0IGJlIHRyYW5zaWVudCwgc28gdHJ5IGFnYWluXG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmluZm8odWxzKCfkv53lrZjlpLHotKXvvIzlnKgy56eS5ZCO6YeN6K+V4oCm4oCmJywgJ+WEsuWtmOWkseaVl++8jOWcqDLnp5Llvozph43oqabigKbigKYnKSk7XG5cdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHQvLyB3YWl0IGZvciBzb21ldGltZSBmb3IgY2xpZW50IHRvIHJlZ2FpbiBjb25uZWN0aXZpdHlcblx0XHRcdHRoaXMuc2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY3R4LnNhdmVBcGkhLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gdGhpcy5jdHguc2F2ZUFwaSEuZ2V0UmVzcG9uc2UoKSBhcyB1bmtub3duIGFzIHtcblx0XHRcdFx0ZXJyb3I/OiBXaWtpUGFnZUFwaUVycm9yRGF0YSB8IG51bGw7XG5cdFx0XHRcdGVycm9yczoge2RhdGE6IFdpa2lQYWdlQXBpRXJyb3JEYXRhfVtdO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVycm9yRGF0YSA9XG5cdFx0XHRcdHJlc3BvbnNlLmVycm9yIHx8XG5cdFx0XHRcdC8vIGJjIGVycm9yIGZvcm1hdFxuXHRcdFx0XHRyZXNwb25zZS5lcnJvcnNbMF0hLmRhdGE7IC8vIGh0bWwvd2lraXRleHQvcGxhaW50ZXh0IGVycm9yIGZvcm1hdFxuXHRcdFx0c3dpdGNoIChlcnJvckNvZGUpIHtcblx0XHRcdFx0Y2FzZSAncHJvdGVjdGVkcGFnZSc6XG5cdFx0XHRcdFx0Ly8gbm9uLWFkbWluIGF0dGVtcHRpbmcgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlIC0gdGhpcyBnaXZlcyBhIGZyaWVuZGxpZXIgbWVzc2FnZSB0aGFuIHRoZSBkZWZhdWx0XG5cdFx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+S4jeiDveS/neWtmOS/ruaUue+8mumhtemdouiiq+S/neaKpCcsICfkuI3og73lhLLlrZjkv67mlLnvvJrpoIHpnaLooqvkv53orbcnKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLWRpc2FsbG93ZWQnOlxuXHRcdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHR1bHMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSArXG5cdFx0XHRcdFx0XHRcdGVycm9yRGF0YS5hYnVzZWZpbHRlci5kZXNjcmlwdGlvbiArXG5cdFx0XHRcdFx0XHRcdHVscyhcblx0XHRcdFx0XHRcdFx0XHQn4oCd6Zi75q2i44CC6Iul5oKo6K6k5Li65oKo55qE6K+l5qyh57yW6L6R5piv5pyJ5oSP5LmJ55qE77yM6K+36IezIFFpdXdlbl90YWxrOueuoeeQhuWRmOWRiuekuuadvyDmj5DmiqXjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfjgI3pmLvmraLjgILoi6Xmgqjoqo3ngrrmgqjnmoToqbLmrKHnt6jovK/mmK/mnInmhI/nvqnnmoTvvIzoq4voh7MgUWl1d2VuX3RhbGs6566h55CG5ZOh5ZGK56S65p2/IOaPkOWgseOAgidcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLXdhcm5pbmcnOlxuXHRcdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoW1xuXHRcdFx0XHRcdFx0dWxzKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJyksXG5cdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0XHR1bHMoXG5cdFx0XHRcdFx0XHRcdCfigJ3orablkYrvvIzoi6Xmgqjku43luIzmnJvlgZrlh7ror6XnvJbovpHvvIzor7flsJ3or5Xph43mlrDmj5DkuqTvvIzmoLnmja7ov4fmu6TlmajnmoTorr7nva7mgqjlj6/og73lj6/ku6XkvZzlh7rmraTnvJbovpHjgIInLFxuXHRcdFx0XHRcdFx0XHQn44CN6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66Kmy57eo6Lyv77yM6KuL5ZiX6Kmm6YeN5paw5o+Q5Lqk77yM5qC55pOa6YGO5r++5Zmo55qE6Kit5a6a5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57eo6Lyv44CCJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHQvLyBXZSBzaG91bGQgcHJvdmlkZSB0aGUgdXNlciB3aXRoIGEgd2F5IHRvIGF1dG9tYXRpY2FsbHkgcmV0cnkgdGhlIGFjdGlvbiBpZiB0aGV5IHNvIGNob29zZSAtXG5cdFx0XHRcdFx0Ly8gSSBjYW4ndCBzZWUgaG93IHRvIGRvIHRoaXMgd2l0aG91dCBjcmVhdGluZyBhIFVJIGRlcGVuZGVuY3kgb24gTW9yZWJpdHMud2lraS5wYWdlIHRob3VnaCAtLSBUVE9cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc3BhbWJsYWNrbGlzdCc6IHtcblx0XHRcdFx0XHQvLyBJZiBtdWx0aXBsZSBpdGVtcyBhcmUgYmxhY2tsaXN0ZWQsIHdlIG9ubHkgcmV0dXJuIHRoZSBmaXJzdFxuXHRcdFx0XHRcdGNvbnN0IFtzcGFtXSA9IGVycm9yRGF0YS5zcGFtYmxhY2tsaXN0Lm1hdGNoZXM7XG5cdFx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdHVscygn5LiN6IO95L+d5a2Y6aG16Z2i77yM5ZugVVJMICcsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6BVUkwgJykgK1xuXHRcdFx0XHRcdFx0XHRzcGFtICtcblx0XHRcdFx0XHRcdFx0dWxzKCcg5Zyo5Z6D5Zy+6ZO+5o6l6buR5ZCN5Y2V5Lit44CCJywgJyDlnKjlnoPlnL7pgKPntZDpu5HlkI3llq7kuK3jgIInKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0dWxzKCfkuI3og73kv53lrZjkv67mlLnvvJonLCAn5LiN6IO95YSy5a2Y5L+u5pS577yaJykgKyB0aGlzLmN0eC5zYXZlQXBpIS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdGlmICh0aGlzLmN0eC5vblNhdmVGYWlsdXJlKSB7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBpc1RleHRSZWRpcmVjdCA9ICh0ZXh0OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRpZiAoIXRleHQpIHtcblx0XHRcdC8vIG5vIHRleHQgLSBjb250ZW50IGVtcHR5IG9yIGluYWNjZXNzaWJsZSAocmV2ZGVsbGVkIG9yIHN1cHByZXNzZWQpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBNb3JlYml0cy5sMTBuLnJlZGlyZWN0VGFnQWxpYXNlcy5zb21lKCh0YWcpID0+IHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXHMqJHt0YWd9XFxcXFdgLCAnaScpLnRlc3QodGV4dCk7XG5cdFx0fSk7XG5cdH07XG5cdHByaXZhdGUgZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHgubG9va3VwQ3JlYXRpb25BcGkhLmdldFJlc3BvbnNlKCkgYXMgV2lraVBhZ2VBcGlSZXNwb25zZSkucXVlcnk7XG5cdFx0aWYgKCF0aGlzLmZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgdGhpcy5jdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUhKSkge1xuXHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdH1cblxuXHRcdGNvbnN0IHJldiA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucyAmJiByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnNbMF07XG5cdFx0aWYgKCFyZXYpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdHVscygn5peg5rOV5om+5YiwJywgJ+eEoeazleaJvuWIsCcpICsgdGhpcy5jdHgucGFnZU5hbWUgKyB1bHMoJ+eahOS7u+S9leS/ruiuoueJiOacrCcsICfnmoTku7vkvZXkv67oqILniYjmnKwnKVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlISh0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IgfHwgIXRoaXMuaXNUZXh0UmVkaXJlY3QocmV2LmNvbnRlbnQpKSB7XG5cdFx0XHR0aGlzLmN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRpZiAoIXRoaXMuY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlISh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdHgudGltZXN0YW1wID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdGlmICghdGhpcy5jdHgudGltZXN0YW1wKSB7XG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IodWxzKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHR0aGlzLmN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh1bHMoJ+W3suiOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflt7Llj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSk7XG5cdFx0XHR0aGlzLmN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2VzcyEodGhpcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3R4Lmxvb2t1cENyZWF0aW9uQXBpIS5xdWVyeVsncnZsaW1pdCddID0gNTA7IC8vIG1vZGlmeSBwcmV2aW91cyBxdWVyeSB0byBmZXRjaCBtb3JlIHJldmlzaW9uc1xuXHRcdFx0dGhpcy5jdHgubG9va3VwQ3JlYXRpb25BcGkhLnF1ZXJ5Wyd0aXRsZXMnXSA9IHRoaXMuY3R4LnBhZ2VOYW1lOyAvLyB1cGRhdGUgcGFnZU5hbWUgaWYgcmVkaXJlY3QgcmVzb2x1dGlvbiB0b29rIHBsYWNlIGluIGVhcmxpZXIgcXVlcnlcblx0XHRcdHRoaXMuY3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR1bHMoJ+iOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSxcblx0XHRcdFx0dGhpcy5jdHgubG9va3VwQ3JlYXRpb25BcGkhLnF1ZXJ5LFxuXHRcdFx0XHR0aGlzLmZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yLFxuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHR0aGlzLmN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0XHRcdCk7XG5cdFx0XHR0aGlzLmN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHR0aGlzLmN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0fVxuXHR9O1xuXHRwcml2YXRlIGZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gKHRoaXMuY3R4Lmxvb2t1cENyZWF0aW9uQXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdGNvbnN0IHJldnMgPSByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnM7XG5cdFx0Zm9yIChjb25zdCByZXYgb2YgcmV2cykge1xuXHRcdFx0aWYgKCF0aGlzLmlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHR0aGlzLmN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdHRoaXMuY3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIXRoaXMuY3R4LmNyZWF0b3IpIHtcblx0XHRcdC8vIGZhbGxiYWNrIHRvIGdpdmUgZmlyc3QgcmV2aXNpb24gYXV0aG9yIGlmIG5vIG5vbi1yZWRpcmVjdCB2ZXJzaW9uIGluIHRoZSBmaXJzdCA1MFxuXHRcdFx0dGhpcy5jdHguY3JlYXRvciA9IHJldnNbMF0udXNlcjtcblx0XHRcdHRoaXMuY3R4LnRpbWVzdGFtcCA9IHJldnNbMF0udGltZXN0YW1wO1xuXHRcdFx0aWYgKCF0aGlzLmN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IodWxzKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHR0aGlzLmN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLmN0eC50aW1lc3RhbXApIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IodWxzKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0dGhpcy5jdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmluZm8odWxzKCflt7Lojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5bey5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJykpO1xuXHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzISh0aGlzKTtcblx0fTtcblx0LyoqXG5cdCAqIENvbW1vbiBjaGVja3MgZm9yIGFjdGlvbiBtZXRob2RzLiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLFxuXHQgKiBwcm90ZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwcml2YXRlIGZuUHJlZmxpZ2h0Q2hlY2tzID0gKGFjdGlvbjogc3RyaW5nLCBvbkZhaWx1cmU6IChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCk6IGJvb2xlYW4gPT4ge1xuXHRcdC8vIGlmIGEgbm9uLWFkbWluIHRyaWVzIHRvIGRvIHRoaXMsIGRvbid0IGJvdGhlclxuXHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgYWN0aW9uICE9PSAnbW92ZScpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdHVscygn5peg5rOV5a+56aG16Z2i6L+b6KGM4oCcJywgJ+eEoeazleWwjemggemdoumAsuihjOOAjCcpICtcblx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdHVscygn4oCd5pON5L2c77ya5Y+q5pyJ566h55CG5ZGY5Y+v5Lul6L+b6KGM5q2k5pON5L2cJywgJ+OAjeaTjeS9nO+8muWPquacieeuoeeQhuWToeWPr+S7pemAsuihjOatpOaTjeS9nCcpXG5cdFx0XHQpO1xuXHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKGBJbnRlcm5hbCBlcnJvcjogJHthY3Rpb259IHJlYXNvbiBub3Qgc2V0ICh1c2Ugc2V0RWRpdFN1bW1hcnkgZnVuY3Rpb24pIWApO1xuXHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdH07XG5cdC8qKlxuXHQgKiBDb21tb24gY2hlY2tzIGZvciBmblByb2Nlc3MgZnVuY3Rpb25zIChgZm5Qcm9jZXNzRGVsZXRlYCwgYGZuUHJvY2Vzc01vdmVgLCBldGMuXG5cdCAqIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsIHByb3RlY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIGNoZWNrZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2UgLSBUaGUgcmVzcG9uc2UgZG9jdW1lbnQgZnJvbSB0aGUgQVBJIGNhbGwuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cHJpdmF0ZSBmblByb2Nlc3NDaGVja3MgPSAoXG5cdFx0YWN0aW9uOiBzdHJpbmcsXG5cdFx0b25GYWlsdXJlOiAocGFnZTogV2lraVBhZ2UpID0+IHZvaWQsXG5cdFx0cmVzcG9uc2U6IFdpa2lQYWdlQXBpUXVlcnlcblx0KTogYm9vbGVhbiA9PiB7XG5cdFx0Y29uc3QgW3ttaXNzaW5nfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHQvLyBObyB1bmRlbGV0ZSBhcyBhbiBleGlzdGluZyBwYWdlIGNvdWxkIGhhdmUgZGVsZXRlZCByZXZpc2lvbnNcblx0XHRjb25zdCBhY3Rpb25NaXNzaW5nID0gbWlzc2luZyAmJiBbJ2RlbGV0ZScsICdtb3ZlJ10uaW5jbHVkZXMoYWN0aW9uKTtcblx0XHRjb25zdCBwcm90ZWN0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmIG1pc3NpbmcgJiYgKHRoaXMuY3R4LnByb3RlY3RFZGl0IHx8IHRoaXMuY3R4LnByb3RlY3RNb3ZlKTtcblx0XHRjb25zdCBzYWx0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmICFtaXNzaW5nICYmIHRoaXMuY3R4LnByb3RlY3RDcmVhdGU7XG5cdFx0aWYgKGFjdGlvbk1pc3NpbmcgfHwgcHJvdGVjdE1pc3NpbmcgfHwgc2FsdE1pc3NpbmcpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdGAke1xuXHRcdFx0XHRcdHVscygn5peg5rOV5a+56aG16Z2i6L+b6KGM4oCcJywgJ+eEoeazleWwjemggemdoumAsuihjOOAjCcpICtcblx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdHVscygn4oCd5pON5L2c77yM5Zug5Li66aG16Z2iJywgJ+OAjeaTjeS9nO+8jOWboOeCuumggemdoicpICtcblx0XHRcdFx0XHQobWlzc2luZyA/ICflt7LkuI0nIDogdWxzKCflt7Lnu48nLCAn5bey57aTJykpXG5cdFx0XHRcdH3lrZjlnKhgXG5cdFx0XHQpO1xuXHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyBEZWxldGUsIHVuZGVsZXRlLCBtb3ZlXG5cdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm9cblx0XHRsZXQgZWRpdHByb3Q6IFdpa2lQYWdlQXBpUHJvdGVjdGlvbiB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYWN0aW9uID09PSAndW5kZWxldGUnKSB7XG5cdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb24uZmluZExhc3QoKHByKSA9PiB7XG5cdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnY3JlYXRlJyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAnZGVsZXRlJyB8fCBhY3Rpb24gPT09ICdtb3ZlJykge1xuXHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uLmZpbmRMYXN0KChwcikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdGVkaXRwcm90ICYmXG5cdFx0XHQhdGhpcy5jdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdHVscygn5oKo5Y2z5bCG5a+55YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+WwjeWFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHR0aGlzLmN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0KGVkaXRwcm90LmV4cGlyeSA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdFx0PyB1bHMoJ+KAne+8iOawuOS5he+8iScsICfjgI3vvIjmsLjkuYXvvIknKVxuXHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHR1bHMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArIG5ldyBNb3JlYml0cy5kYXRlKGVkaXRwcm90LmV4cGlyeSkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdH0gKFVUQynvvIlgKSArXG5cdFx0XHRcdFx0dWxzKCfigJ3ov5vooYzigJwnLCAn44CN6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0dWxzKCfigJ3mk43kvZwnLCAn44CN5pON5L2cJykgK1xuXHRcdFx0XHRcdHVscyhcblx0XHRcdFx0XHRcdCfjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnu6fnu63mk43kvZzvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0J+OAglxcblxcbum7nuaTiueiuuWumuS7pee5vOe6jOaTjeS9nO+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHVscygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE5pON5L2c44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOaTjeS9nOOAgicpKTtcblx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFyZXNwb25zZS50b2tlbnMuY3NyZnRva2VuKSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHVscygn5peg5rOV6I635Y+W5Luk54mM44CCJywgJ+eEoeazleWPluW+l+asiuadluOAgicpKTtcblx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHR9O1xuXG5cdHByaXZhdGUgZm5Qcm9jZXNzTW92ZSA9ICgpOiB2b2lkID0+IHtcblx0XHRsZXQgcGFnZVRpdGxlOiBzdHJpbmc7XG5cdFx0bGV0IHRva2VuOiBzdHJpbmc7XG5cdFx0aWYgKHRoaXMuZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRwYWdlVGl0bGUgPSB0aGlzLmN0eC5wYWdlTmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHgubW92ZUFwaSEuZ2V0UmVzcG9uc2UoKSBhcyBXaWtpUGFnZUFwaVJlc3BvbnNlKS5xdWVyeTtcblx0XHRcdGlmICghdGhpcy5mblByb2Nlc3NDaGVja3MoJ21vdmUnLCB0aGlzLmN0eC5vbk1vdmVGYWlsdXJlISwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0dGhpcy5jdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZCB8fCBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgcXVlcnk6IFdpa2lQYWdlUHJpdmF0ZVF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAnbW92ZScsXG5cdFx0XHRmcm9tOiBwYWdlVGl0bGUsXG5cdFx0XHR0bzogdGhpcy5jdHgubW92ZURlc3RpbmF0aW9uISxcblx0XHRcdHRva2VuLFxuXHRcdFx0cmVhc29uOiB0aGlzLmN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdHdhdGNobGlzdDogdGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fTtcblx0XHRpZiAodGhpcy5jdHguY2hhbmdlVGFncykge1xuXHRcdFx0cXVlcnkudGFncyA9IHRoaXMuY3R4LmNoYW5nZVRhZ3M7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gdGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ITtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4Lm1vdmVUYWxrUGFnZSkge1xuXHRcdFx0cXVlcnkubW92ZXRhbGsgPSAndHJ1ZSc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5tb3ZlU3VicGFnZXMpIHtcblx0XHRcdHF1ZXJ5Lm1vdmVzdWJwYWdlcyA9ICd0cnVlJztcblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0KSB7XG5cdFx0XHRxdWVyeS5ub3JlZGlyZWN0ID0gJ3RydWUnO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5tb3ZlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdHVscygn56e75Yqo6aG16Z2i4oCm4oCmJywgJ+enu+WLlemggemdouKApuKApicpLFxuXHRcdFx0cXVlcnksXG5cdFx0XHR0aGlzLmN0eC5vbk1vdmVTdWNjZXNzIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbCxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmN0eC5vbk1vdmVGYWlsdXJlIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHRcdCk7XG5cdFx0dGhpcy5jdHgubW92ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdHRoaXMuY3R4Lm1vdmVQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0cHJpdmF0ZSBmblByb2Nlc3NQYXRyb2wgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgcXVlcnk6IFdpa2lQYWdlUHJpdmF0ZVF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAncGF0cm9sJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH07XG5cdFx0Ly8gRGlkbid0IG5lZWQgdG8gbG9hZCB0aGUgcGFnZVxuXHRcdGlmICh0aGlzLmN0eC5yY2lkKSB7XG5cdFx0XHRxdWVyeS5yY2lkID0gdGhpcy5jdHgucmNpZDtcblx0XHRcdHF1ZXJ5LnRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdwYXRyb2xUb2tlbicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9ICh0aGlzLmN0eC5wYXRyb2xBcGkhLmdldFJlc3BvbnNlKCkgYXMgV2lraVBhZ2VBcGlSZXNwb25zZSkucXVlcnk7XG5cdFx0XHQvLyBEb24ndCBwYXRyb2wgaWYgbm90IHVucGF0cm9sbGVkXG5cdFx0XHRpZiAoIXJlc3BvbnNlLnJlY2VudGNoYW5nZXNbMF0udW5wYXRyb2xsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW3tsYXN0cmV2aWR9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0aWYgKCFsYXN0cmV2aWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cXVlcnkucmV2aWQgPSBsYXN0cmV2aWQ7XG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRxdWVyeS50YWdzID0gdGhpcy5jdHguY2hhbmdlVGFncztcblx0XHR9XG5cdFx0Y29uc3QgcGF0cm9sU3RhdCA9IG5ldyBNb3JlYml0cy5zdGF0dXModWxzKCfmoIforrDpobXpnaLkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6aCB6Z2i54K65bey5beh5p+lJykpO1xuXHRcdHRoaXMuY3R4LnBhdHJvbFByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkodWxzKCflt6Hmn6XpobXpnaLigKbigKYnLCAn5beh5p+l6aCB6Z2i4oCm4oCmJyksIHF1ZXJ5LCBudWxsLCBwYXRyb2xTdGF0KTtcblx0XHR0aGlzLmN0eC5wYXRyb2xQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmN0eC5wYXRyb2xQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0cHJpdmF0ZSBmblByb2Nlc3NEZWxldGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nO1xuXHRcdGxldCB0b2tlbjogc3RyaW5nO1xuXHRcdGlmICh0aGlzLmZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRwYWdlVGl0bGUgPSB0aGlzLmN0eC5wYWdlTmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHguZGVsZXRlQXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdFx0aWYgKCF0aGlzLmZuUHJvY2Vzc0NoZWNrcygnZGVsZXRlJywgdGhpcy5jdHgub25EZWxldGVGYWlsdXJlISwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0dGhpcy5jdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZCB8fCBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgcXVlcnk6IFdpa2lQYWdlUHJpdmF0ZVF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAnZGVsZXRlJyxcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHR0b2tlbixcblx0XHRcdHJlYXNvbjogdGhpcy5jdHguZWRpdFN1bW1hcnksXG5cdFx0XHR3YXRjaGxpc3Q6IHRoaXMuY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH07XG5cdFx0aWYgKHRoaXMuY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSB0aGlzLmN0eC5jaGFuZ2VUYWdzO1xuXHRcdH1cblx0XHRpZiAodGhpcy5mbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IHRoaXMuY3R4LndhdGNobGlzdEV4cGlyeSE7XG5cdFx0fVxuXHRcdHRoaXMuY3R4LmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHR1bHMoJ+WIoOmZpOmhtemdouKApuKApicsICfliKrpmaTpoIHpnaLigKbigKYnKSxcblx0XHRcdHF1ZXJ5LFxuXHRcdFx0dGhpcy5jdHgub25EZWxldGVTdWNjZXNzIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbCxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmZuUHJvY2Vzc0RlbGV0ZUVycm9yXG5cdFx0KTtcblx0XHR0aGlzLmN0eC5kZWxldGVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmN0eC5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0Ly8gY2FsbGJhY2sgZnJvbSBkZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRwcml2YXRlIGZuUHJvY2Vzc0RlbGV0ZUVycm9yID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGVycm9yQ29kZSA9IHRoaXMuY3R4LmRlbGV0ZVByb2Nlc3NBcGkhLmdldEVycm9yQ29kZSgpO1xuXHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicgJiYgdGhpcy5jdHgucmV0cmllcysrIDwgdGhpcy5jdHgubWF4UmV0cmllcykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5pbmZvKHVscygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdHRoaXMuY3R4LmRlbGV0ZVByb2Nlc3NBcGkhLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnbWlzc2luZ3RpdGxlJykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+S4jeiDveWIoOmZpOmhtemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcsICfkuI3og73liKrpmaTpoIHpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnKSk7XG5cdFx0XHRpZiAodGhpcy5jdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIHRoaXMuY3R4LmRlbGV0ZVByb2Nlc3NBcGkhIGFzIHVua25vd24gYXMgV2lraVBhZ2UpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdH1cblx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0dWxzKCfml6Dms5XliKDpmaTpobXpnaLvvJonLCAn54Sh5rOV5Yiq6Zmk6aCB6Z2i77yaJykgKyB0aGlzLmN0eC5kZWxldGVQcm9jZXNzQXBpIS5nZXRFcnJvclRleHQoKVxuXHRcdFx0KTtcblx0XHRcdGlmICh0aGlzLmN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0dGhpcy5jdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgdGhpcy5jdHguZGVsZXRlUHJvY2Vzc0FwaSEgYXMgdW5rbm93biBhcyBXaWtpUGFnZSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIGZuUHJvY2Vzc1VuZGVsZXRlID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBwYWdlVGl0bGU6IHN0cmluZztcblx0XHRsZXQgdG9rZW46IHN0cmluZztcblx0XHRpZiAodGhpcy5mbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRwYWdlVGl0bGUgPSB0aGlzLmN0eC5wYWdlTmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHgudW5kZWxldGVBcGkhLmdldFJlc3BvbnNlKCkgYXMgV2lraVBhZ2VBcGlSZXNwb25zZSkucXVlcnk7XG5cdFx0XHRpZiAoIXRoaXMuZm5Qcm9jZXNzQ2hlY2tzKCd1bmRlbGV0ZScsIHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlISwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0dGhpcy5jdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZCB8fCBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgcXVlcnk6IFdpa2lQYWdlUHJpdmF0ZVF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAndW5kZWxldGUnLFxuXHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdHRva2VuLFxuXHRcdFx0cmVhc29uOiB0aGlzLmN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdHdhdGNobGlzdDogdGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fTtcblx0XHRpZiAodGhpcy5jdHguY2hhbmdlVGFncykge1xuXHRcdFx0cXVlcnkudGFncyA9IHRoaXMuY3R4LmNoYW5nZVRhZ3M7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gdGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ITtcblx0XHR9XG5cdFx0dGhpcy5jdHgudW5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0dWxzKCfov5jljp/pobXpnaLigKbigKYnLCAn6YKE5Y6f6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRxdWVyeSxcblx0XHRcdHRoaXMuY3R4Lm9uVW5kZWxldGVTdWNjZXNzIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbCxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmZuUHJvY2Vzc1VuZGVsZXRlRXJyb3Jcblx0XHQpO1xuXHRcdHRoaXMuY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0Ly8gY2FsbGJhY2sgZnJvbSB1bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdHByaXZhdGUgZm5Qcm9jZXNzVW5kZWxldGVFcnJvciA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBlcnJvckNvZGUgPSB0aGlzLmN0eC51bmRlbGV0ZVByb2Nlc3NBcGkhLmdldEVycm9yQ29kZSgpO1xuXHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicpIHtcblx0XHRcdGlmICh0aGlzLmN0eC5yZXRyaWVzKysgPCB0aGlzLmN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh1bHMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0dGhpcy5jdHgudW5kZWxldGVQcm9jZXNzQXBpIS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0dWxzKCfmjIHnu63nmoTmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43mlrDliqDovb3pobXpnaLlubbph43or5UnLCAn5oyB57qM55qE6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN5paw6LyJ5YWl6aCB6Z2i5Lim6YeN6KmmJylcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0dGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCB0aGlzLmN0eC51bmRlbGV0ZVByb2Nlc3NBcGkhIGFzIHVua25vd24gYXMgV2lraVBhZ2UpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnY2FudHVuZGVsZXRlJykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0dWxzKCfml6Dms5Xov5jljp/liKDpmaTpobXpnaLvvIzlm6DmsqHmnInniYjmnKzkvpvov5jljp/miJblt7Looqvov5jljp8nLCAn54Sh5rOV6YKE5Y6f5Yiq6Zmk6aCB6Z2i77yM5Zug5rKS5pyJ54mI5pys5L6b6YKE5Y6f5oiW5bey6KKr6YKE5Y6fJylcblx0XHRcdCk7XG5cdFx0XHRpZiAodGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0dGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCB0aGlzLmN0eC51bmRlbGV0ZVByb2Nlc3NBcGkhIGFzIHVua25vd24gYXMgV2lraVBhZ2UpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdH1cblx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0dWxzKCfml6Dms5Xov5jljp/pobXpnaLvvJonLCAn54Sh5rOV6YKE5Y6f6aCB6Z2i77yaJykgKyB0aGlzLmN0eC51bmRlbGV0ZVByb2Nlc3NBcGkhLmdldEVycm9yVGV4dCgpXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgdGhpcy5jdHgudW5kZWxldGVQcm9jZXNzQXBpISBhcyB1bmtub3duIGFzIFdpa2lQYWdlKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgZm5Qcm9jZXNzUHJvdGVjdCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCByZXNwb25zZSA9ICh0aGlzLmN0eC5wcm90ZWN0QXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdGlmICghdGhpcy5mblByb2Nlc3NDaGVja3MoJ3Byb3RlY3QnLCB0aGlzLmN0eC5vblByb3RlY3RGYWlsdXJlISwgcmVzcG9uc2UpKSB7XG5cdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdGNvbnN0IHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0dGhpcy5jdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZCB8fCBmYWxzZTtcblx0XHQvLyBGZXRjaCBleGlzdGluZyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdGNvbnN0IHBycyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb247XG5cdFx0bGV0IGVkaXRwcm90OiBXaWtpUGFnZUFwaVByb3RlY3Rpb24gfCB1bmRlZmluZWQ7XG5cdFx0bGV0IG1vdmVwcm90OiBXaWtpUGFnZUFwaVByb3RlY3Rpb24gfCB1bmRlZmluZWQ7XG5cdFx0bGV0IGNyZWF0ZXByb3Q6IFdpa2lQYWdlQXBpUHJvdGVjdGlvbiB8IHVuZGVmaW5lZDtcblx0XHRmb3IgKGNvbnN0IHByIG9mIHBycykge1xuXHRcdFx0Ly8gRmlsdGVyIG91dCBwcm90ZWN0aW9uIGZyb20gY2FzY2FkaW5nXG5cdFx0XHRpZiAocHIudHlwZSA9PT0gJ2VkaXQnICYmICFwci5zb3VyY2UpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSBwcjtcblx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdG1vdmVwcm90ID0gcHI7XG5cdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdjcmVhdGUnKSB7XG5cdFx0XHRcdGNyZWF0ZXByb3QgPSBwcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRmFsbCBiYWNrIHRvIGN1cnJlbnQgbGV2ZWxzIGlmIG5vdCBleHBsaWNpdGx5IHNldFxuXHRcdGlmICghdGhpcy5jdHgucHJvdGVjdEVkaXQgJiYgZWRpdHByb3QpIHtcblx0XHRcdHRoaXMuY3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRsZXZlbDogZWRpdHByb3QubGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZWRpdHByb3QuZXhwaXJ5LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmN0eC5wcm90ZWN0TW92ZSAmJiBtb3ZlcHJvdCkge1xuXHRcdFx0dGhpcy5jdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdGxldmVsOiBtb3ZlcHJvdC5sZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBtb3ZlcHJvdC5leHBpcnksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuY3R4LnByb3RlY3RDcmVhdGUgJiYgY3JlYXRlcHJvdCkge1xuXHRcdFx0dGhpcy5jdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0bGV2ZWw6IGNyZWF0ZXByb3QubGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogY3JlYXRlcHJvdC5leHBpcnksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHQvLyBEZWZhdWx0IHRvIHByZS1leGlzdGluZyBjYXNjYWRpbmcgcHJvdGVjdGlvbiBpZiB1bmNoYW5nZWQgKHNpbWlsYXIgdG8gYWJvdmUpXG5cdFx0aWYgKHRoaXMuY3R4LnByb3RlY3RDYXNjYWRlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLmN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhcHJzLmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0cmV0dXJuIHByLmNhc2NhZGU7XG5cdFx0XHR9KS5sZW5ndGg7XG5cdFx0fVxuXHRcdC8vIFdhcm4gaWYgY2FzY2FkaW5nIHByb3RlY3Rpb24gYmVpbmcgYXBwbGllZCB3aXRoIGFuIGludmFsaWQgcHJvdGVjdGlvbiBsZXZlbCxcblx0XHQvLyB3aGljaCBmb3IgZWRpdCBwcm90ZWN0aW9uIHdpbGwgY2F1c2UgY2FzY2FkaW5nIHRvIGJlIHNpbGVudGx5IHN0cmlwcGVkXG5cdFx0aWYgKHRoaXMuY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHQvLyBPbiBtb3ZlIHByb3RlY3Rpb24sIHRoaXMgaXMgdGVjaG5pY2FsbHkgc3RyaWN0ZXIgdGhhbiB0aGUgTVcgQVBJLFxuXHRcdFx0Ly8gYnV0IHNlZW1zIHJlYXNvbmFibGUgdG8gYXZvaWQgZHVtYiB2YWx1ZXMgYW5kIG1pc2xlYWRpbmcgbG9nIGVudHJpZXMgKFQyNjU2MjYpXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCghdGhpcy5jdHgucHJvdGVjdEVkaXQgfHxcblx0XHRcdFx0XHR0aGlzLmN0eC5wcm90ZWN0RWRpdC5sZXZlbCAhPT0gJ3N5c29wJyB8fFxuXHRcdFx0XHRcdCF0aGlzLmN0eC5wcm90ZWN0TW92ZSB8fFxuXHRcdFx0XHRcdHRoaXMuY3R4LnByb3RlY3RNb3ZlLmxldmVsICE9PSAnc3lzb3AnKSAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHR1bHMoJ+aCqOW3suWvueKAnCcsICfmgqjlt7LlsI3jgIwnKSArXG5cdFx0XHRcdFx0XHR0aGlzLmN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHR1bHMoJ+KAneWQr+eUqOS6hui/numUgeS/neaKpCcsICfjgI3llZ/nlKjkuobpgKPpjpbkv53orbcnKSArXG5cdFx0XHRcdFx0XHR1bHMoJ++8jOS9huayoeacieiuvue9ruS7heeuoeeQhuWRmOeahOS/neaKpOe6p+WIq+OAglxcblxcbicsICfvvIzkvYbmspLmnInoqK3lrprlg4XnrqHnkIblk6HnmoTkv53orbfntJrliKXjgIJcXG5cXG4nKSArXG5cdFx0XHRcdFx0XHR1bHMoXG5cdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7orqTku6Xoh6rliqjosIPmlbTlubbnu6fnu63ov57plIHlhajkv53miqTvvIzljZXlh7vlj5bmtojku6Xot7Pov4fmraTmk43kvZwnLFxuXHRcdFx0XHRcdFx0XHQn6bue5pOK56K66KqN5Lul6Ieq5YuV6Kq/5pW05Lim57m857qM6YCj6Y6W5YWo5L+d6K2377yM6bue5pOK5Y+W5raI5Lul6Lez6YGO5q2k5pON5L2cJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+i/numUgeS/neaKpOW3suWPlua2iOOAgicsICfpgKPpjpbkv53orbflt7Llj5bmtojjgIInKSk7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uUHJvdGVjdEZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN0eC5wcm90ZWN0RWRpdCEubGV2ZWwgPSAnc3lzb3AnO1xuXHRcdFx0dGhpcy5jdHgucHJvdGVjdE1vdmUhLmxldmVsID0gJ3N5c29wJztcblx0XHR9XG5cdFx0Ly8gQnVpbGQgcHJvdGVjdGlvbiBsZXZlbHMgYW5kIGV4cGlyeXMgKGV4cGlyaWVzPykgZm9yIHF1ZXJ5XG5cdFx0Y29uc3QgcHJvdGVjdGlvbnMgPSBbXTtcblx0XHRjb25zdCBleHBpcnlzID0gW107XG5cdFx0aWYgKHRoaXMuY3R4LnByb3RlY3RFZGl0KSB7XG5cdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYGVkaXQ9JHt0aGlzLmN0eC5wcm90ZWN0RWRpdC5sZXZlbH1gO1xuXHRcdFx0ZXhwaXJ5c1tleHBpcnlzLmxlbmd0aF0gPSB0aGlzLmN0eC5wcm90ZWN0RWRpdC5leHBpcnk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5wcm90ZWN0TW92ZSkge1xuXHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBtb3ZlPSR7dGhpcy5jdHgucHJvdGVjdE1vdmUubGV2ZWx9YDtcblx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gdGhpcy5jdHgucHJvdGVjdE1vdmUuZXhwaXJ5O1xuXHRcdH1cblx0XHRpZiAodGhpcy5jdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBjcmVhdGU9JHt0aGlzLmN0eC5wcm90ZWN0Q3JlYXRlLmxldmVsfWA7XG5cdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IHRoaXMuY3R4LnByb3RlY3RDcmVhdGUuZXhwaXJ5O1xuXHRcdH1cblx0XHRjb25zdCBxdWVyeTogV2lraVBhZ2VQcml2YXRlUXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHR0b2tlbixcblx0XHRcdHByb3RlY3Rpb25zOiBwcm90ZWN0aW9ucy5qb2luKCd8JyksXG5cdFx0XHRleHBpcnk6IGV4cGlyeXMuam9pbignfCcpLFxuXHRcdFx0cmVhc29uOiB0aGlzLmN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdHdhdGNobGlzdDogdGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fTtcblx0XHQvLyBPbmx5IHNob3dzIHVwIGluIGxvZ3MsIG5vdCBwYWdlIGhpc3Rvcnlcblx0XHRpZiAodGhpcy5jdHguY2hhbmdlVGFncykge1xuXHRcdFx0cXVlcnkudGFncyA9IHRoaXMuY3R4LmNoYW5nZVRhZ3M7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gdGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ITtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRxdWVyeS5jYXNjYWRlID0gJ3RydWUnO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5wcm90ZWN0UHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdHVscygn5L+d5oqk6aG16Z2i4oCm4oCmJywgJ+S/neitt+mggemdouKApuKApicpLFxuXHRcdFx0cXVlcnksXG5cdFx0XHR0aGlzLmN0eC5vblByb3RlY3RTdWNjZXNzIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbCxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmN0eC5vblByb3RlY3RGYWlsdXJlIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHRcdCk7XG5cdFx0dGhpcy5jdHgucHJvdGVjdFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdHRoaXMuY3R4LnByb3RlY3RQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0cHJpdmF0ZSBzbGVlcCA9IChtaWxsaXNlY29uZHM6IG51bWJlcik6IEpRdWVyeS5EZWZlcnJlZDx1bmtub3duPiA9PiB7XG5cdFx0Y29uc3QgZGVmZXJyZWQ6IEpRdWVyeS5EZWZlcnJlZDx1bmtub3duPiA9ICQuRGVmZXJyZWQoKTtcblx0XHRzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUsIG1pbGxpc2Vjb25kcyk7XG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9O1xufSAvLyBlbmQgTW9yZWJpdHMud2lraS5wYWdlXG5Nb3JlYml0cy53aWtpLnBhZ2UgPSBXaWtpUGFnZTtcblxuLyogUHJpdmF0ZSBoZWxwZXIgdHlwZXMgZm9yIE1vcmViaXRzLndpa2kucGFnZSBBUEkgcmVzcG9uc2VzICovXG50eXBlIFdpa2lQYWdlQXBpUHJvdGVjdGlvbiA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRsZXZlbDogc3RyaW5nO1xuXHRleHBpcnk6IHN0cmluZztcblx0Y2FzY2FkZT86IGJvb2xlYW47XG5cdHNvdXJjZT86IHN0cmluZztcbn07XG50eXBlIFdpa2lQYWdlQXBpUmV2aXNpb24gPSB7XG5cdHJldmlkOiBudW1iZXI7XG5cdHVzZXI6IHN0cmluZztcblx0dXNlcmhpZGRlbj86IGJvb2xlYW47XG5cdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRjb250ZW50OiBzdHJpbmc7XG59O1xudHlwZSBXaWtpUGFnZUFwaVBhZ2UgPSB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHBhZ2VpZDogbnVtYmVyO1xuXHRpbnZhbGlkPzogYm9vbGVhbjtcblx0bWlzc2luZz86IGJvb2xlYW47XG5cdGxhc3RyZXZpZD86IG51bWJlcjtcblx0Y29udGVudG1vZGVsOiBzdHJpbmc7XG5cdHdhdGNobGlzdGV4cGlyeT86IHN0cmluZyB8IG51bGw7XG5cdHdhdGNoZWQ/OiBib29sZWFuO1xuXHRwcm90ZWN0aW9uOiBXaWtpUGFnZUFwaVByb3RlY3Rpb25bXTtcblx0cmV2aXNpb25zOiBbV2lraVBhZ2VBcGlSZXZpc2lvbiwgLi4uV2lraVBhZ2VBcGlSZXZpc2lvbltdXTtcblx0YWN0aW9ucz86IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+O1xufTtcbnR5cGUgV2lraVBhZ2VBcGlRdWVyeSA9IHtcblx0cGFnZXM6IFtXaWtpUGFnZUFwaVBhZ2UsIC4uLldpa2lQYWdlQXBpUGFnZVtdXTtcblx0dG9rZW5zOiB7Y3NyZnRva2VuOiBzdHJpbmd9O1xuXHRyZWNlbnRjaGFuZ2VzOiBbe3VucGF0cm9sbGVkPzogYm9vbGVhbn0sIC4uLnt1bnBhdHJvbGxlZD86IGJvb2xlYW59W11dO1xuXHRyZWRpcmVjdHM/OiB1bmtub3duW107XG59O1xudHlwZSBXaWtpUGFnZUFwaVJlc3BvbnNlID0ge1xuXHRxdWVyeTogV2lraVBhZ2VBcGlRdWVyeTtcblx0Y3VydGltZXN0YW1wOiBzdHJpbmc7XG59O1xudHlwZSBXaWtpUGFnZUFwaUVycm9yRGF0YSA9IHtcblx0YWJ1c2VmaWx0ZXI6IHtkZXNjcmlwdGlvbjogc3RyaW5nfTtcblx0c3BhbWJsYWNrbGlzdDoge21hdGNoZXM6IFtzdHJpbmcsIC4uLnN0cmluZ1tdXX07XG59O1xudHlwZSBXaWtpUGFnZVByaXZhdGVRdWVyeSA9IHtcblx0YWN0aW9uOiBzdHJpbmc7XG5cdGZvcm1hdDogc3RyaW5nO1xuXHRtZXRhPzogc3RyaW5nO1xuXHR0eXBlPzogc3RyaW5nO1xuXHR0aXRsZXM/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRwcm9wPzogc3RyaW5nO1xuXHRpbnByb3A/OiBzdHJpbmc7XG5cdHJlZGlyZWN0cz86IHN0cmluZztcblx0cnZsaW1pdD86IG51bWJlcjtcblx0ZnJvbT86IHN0cmluZztcblx0dG8/OiBzdHJpbmc7XG5cdHRva2VuPzogc3RyaW5nO1xuXHRyZWFzb24/OiBzdHJpbmcgfCBudWxsO1xuXHR3YXRjaGxpc3Q/OiBzdHJpbmc7XG5cdHdhdGNobGlzdGV4cGlyeT86IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cdHRhZ3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblx0bW92ZXRhbGs/OiBzdHJpbmc7XG5cdG1vdmVzdWJwYWdlcz86IHN0cmluZztcblx0bm9yZWRpcmVjdD86IHN0cmluZztcblx0cmNpZD86IHN0cmluZztcblx0cmV2aWQ/OiBudW1iZXI7XG5cdHByb3RlY3Rpb25zPzogc3RyaW5nO1xuXHRleHBpcnk/OiBzdHJpbmc7XG5cdGNhc2NhZGU/OiBzdHJpbmc7XG59O1xuXG4vKiBjdHggZmllbGRzIHVzZWQgaGVyZSBidXQgbm90IGluaXRpYWxpemVkIGluIHRoZSBjb25zdHJ1Y3RvciBsaXRlcmFsICovXG5pbnRlcmZhY2UgV2lraVBhZ2VDdHgge1xuXHRyY2lkPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFdpa2lOYW1lc3BhY2Uge1xuXHRwcmV2aWV3OiB0eXBlb2YgV2lraVByZXZpZXc7XG59XG5pbnRlcmZhY2UgTW9yZWJpdHNOYW1lc3BhY2Uge1xuXHR3aWtpdGV4dDogdHlwZW9mIHdpa2l0ZXh0O1xuXHR1c2Vyc3BhY2VMb2dnZXI6IHR5cGVvZiBVc2Vyc3BhY2VMb2dnZXI7XG59XG5cbi8qKiBUaGUgYGFjdGlvbj1wYXJzZWAgcXVlcnkgYnVpbHQgYnkge0BsaW5rIE1vcmViaXRzLndpa2kucHJldmlld30gdG8gcmVuZGVyIGEgZnJhZ21lbnQgb2Ygd2lraXRleHQuICovXG50eXBlIFByZXZpZXdBcGlRdWVyeSA9IHtcblx0YWN0aW9uOiBzdHJpbmc7XG5cdHByb3A6IHN0cmluZ1tdO1xuXHRwc3Q6IGJvb2xlYW47XG5cdHByZXZpZXc6IGJvb2xlYW47XG5cdHRleHQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0ZGlzYWJsZWxpbWl0cmVwb3J0OiBib29sZWFuO1xuXHRkaXNhYmxlZWRpdHNlY3Rpb246IGJvb2xlYW47XG5cdHVzZWxhbmc6IHN0cmluZztcblx0Zm9ybWF0OiBzdHJpbmc7XG5cdHNlY3Rpb24/OiBzdHJpbmc7XG5cdHNlY3Rpb250aXRsZT86IHN0cmluZztcbn07XG5cbi8qKiBUaGUgcG9ydGlvbiBvZiB0aGUgYGFjdGlvbj1wYXJzZWAgQVBJIHJlc3BvbnNlIGNvbnN1bWVkIGJ5IHRoZSBwcmV2aWV3IHN1Y2Nlc3MgY2FsbGJhY2suICovXG50eXBlIFByZXZpZXdBcGlSZXNwb25zZSA9IHtcblx0cGFyc2U6IHtcblx0XHR0ZXh0OiBzdHJpbmc7XG5cdFx0bW9kdWxlczogc3RyaW5nW107XG5cdFx0bW9kdWxlc3R5bGVzOiBzdHJpbmdbXTtcblx0fTtcbn07XG5cbi8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wcmV2aWV3ICoqKioqKioqKioqKioqKiogKi9cbi8qKlxuICogVXNlIHRoZSBBUEkgdG8gcGFyc2UgYSBmcmFnbWVudCBvZiB3aWtpdGV4dCBhbmQgcmVuZGVyIGl0IGFzIEhUTUwuXG4gKlxuICogVGhlIHN1Z2dlc3RlZCBpbXBsZW1lbnRhdGlvbiBwYXR0ZXJuIChpbiB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmRcbiAqIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHNpdHVhdGlvbnMpIGlzIHRvIGNvbnN0cnVjdCBhXG4gKiBgTW9yZWJpdHMud2lraS5wcmV2aWV3YCBvYmplY3QgYWZ0ZXIgcmVuZGVyaW5nIGEgYE1vcmViaXRzLnF1aWNrRm9ybWAsIGFuZFxuICogYmluZCB0aGUgb2JqZWN0IHRvIGFuIGFyYml0cmFyeSBwcm9wZXJ0eSBvZiB0aGUgZm9ybSAoZS5nLiB8cHJldmlld2VyfCkuXG4gKiBGb3IgYW4gZXhhbXBsZSwgc2VlIHR3aW5rbGV3YXJuLmpzLlxuICpcbiAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdib3ggLSBUaGUgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgcmVuZGVyZWQgSFRNTCxcbiAqIHVzdWFsbHkgYSA8ZGl2PiBlbGVtZW50LlxuICovXG5jbGFzcyBXaWtpUHJldmlldyB7XG5cdHByZXZpZXdib3g6IEhUTUxFbGVtZW50O1xuXHQvKipcblx0ICogRGlzcGxheXMgdGhlIHByZXZpZXcgYm94LCBhbmQgYmVnaW5zIGFuIGFzeW5jaHJvbm91cyBhdHRlbXB0XG5cdCAqIHRvIHJlbmRlciB0aGUgc3BlY2lmaWVkIHdpa2l0ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgLSBXaWtpdGV4dCB0byByZW5kZXI7IG1vc3QgdGhpbmdzIHNob3VsZCB3b3JrLCBpbmNsdWRpbmcgYHN1YnN0OmAgYW5kIGB+fn5+YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtwYWdlVGl0bGVdIC0gT3B0aW9uYWwgcGFyYW1ldGVyIGZvciB0aGUgcGFnZSB0aGlzIHNob3VsZCBiZSByZW5kZXJlZCBhcyBiZWluZyBvbiwgaWYgb21pdHRlZCBpdCBpcyB0YWtlbiBhcyB0aGUgY3VycmVudCBwYWdlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3NlY3Rpb25UaXRsZV0gLSBJZiBwcm92aWRlZCwgcmVuZGVyIHRoZSB0ZXh0IGFzIGEgbmV3IHNlY3Rpb24gdXNpbmcgdGhpcyBhcyB0aGUgdGl0bGUuXG5cdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX1cblx0ICovXG5cdGJlZ2luUmVuZGVyOiAod2lraXRleHQ6IHN0cmluZywgcGFnZVRpdGxlPzogc3RyaW5nLCBzZWN0aW9uVGl0bGU/OiBzdHJpbmcpID0+IHZvaWQ7XG5cdC8qKiBIaWRlcyB0aGUgcHJldmlldyBib3ggYW5kIGNsZWFycyBpdC4gKi9cblx0Y2xvc2VQcmV2aWV3OiAoKSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKHByZXZpZXdib3g6IEhUTUxFbGVtZW50KSB7XG5cdFx0dGhpcy5wcmV2aWV3Ym94ID0gcHJldmlld2JveDtcblx0XHQkKHByZXZpZXdib3gpLmFkZENsYXNzKCdtb3JlYml0cy1wcmV2aWV3Ym94JykuaGlkZSgpO1xuXHRcdHRoaXMuYmVnaW5SZW5kZXIgPSAod2lraXRleHQsIHBhZ2VUaXRsZSwgc2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLnNob3coKTtcblx0XHRcdGNvbnN0IHN0YXR1c3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwcmV2aWV3Ym94LmFwcGVuZENoaWxkKHN0YXR1c3NwYW4pO1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmluaXQoc3RhdHVzc3Bhbik7XG5cdFx0XHQvLyDoi6XpobXpnaLkuI3mmK93aWtpdGV4dO+8iOS+i+WmgkpT44CBQ1NT562J77yJ77yM6YKj5LmI5om+5LiA5Liqd2lraXRleHTpobXpnaLmnaXpooTop4jjgIJcblx0XHRcdGxldCBwYWdlTmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0Jykge1xuXHRcdFx0XHRwYWdlTmFtZSA9IGBEcmFmdDoke3BhZ2VOYW1lfWA7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeTogUHJldmlld0FwaVF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6IFsndGV4dCcsICdtb2R1bGVzJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0Ly8gUFNUID0gcHJlLXNhdmUgdHJhbnNmb3JtOyB0aGlzIG1ha2VzIHN1YnN0aXR1dGlvbiB3b3JrIHByb3Blcmx5XG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlIHx8IHBhZ2VOYW1lLFxuXHRcdFx0XHRkaXNhYmxlbGltaXRyZXBvcnQ6IHRydWUsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0dXNlbGFuZzogbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKSxcblx0XHRcdFx0Ly8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBzZWN0aW9uVGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZW5kZXJBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHVscygn5Yqg6L295Lit4oCm4oCmJywgJ+i8ieWFpeS4reKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5SZW5kZXJTdWNjZXNzLFxuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKHVscygn6aKE6KeIJywgJ+mgkOimvScpKVxuXHRcdFx0KTtcblx0XHRcdHJlbmRlckFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblJlbmRlclN1Y2Nlc3MgPSAoYXBpb2JqOiBJbnN0YW5jZVR5cGU8V2lraU5hbWVzcGFjZVsnYXBpJ10+KSA9PiB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpIGFzIFByZXZpZXdBcGlSZXNwb25zZTtcblx0XHRcdGNvbnN0IGh0bWwgPSByZXNwb25zZS5wYXJzZS50ZXh0O1xuXHRcdFx0aWYgKCFodG1sKSB7XG5cdFx0XHRcdGFwaW9iai5zdGF0ZWxlbS5lcnJvcih1bHMoJ+WKoOi9vemihOiniOWksei0pe+8jOaIluaooeadv+S4uuepuicsICfovInlhaXpoJDopr3lpLHmlZfvvIzmiJbmqKHmnb/ngrrnqbonKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByZXZpZXdib3guaW5uZXJIVE1MID0gaHRtbDtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXN0eWxlcyk7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzKTtcblx0XHRcdC8vIHRoaXMgbWFrZXMgbGlua3Mgb3BlbiBpbiBuZXcgdGFiXG5cdFx0XHQkKHByZXZpZXdib3gpLmZpbmQoJ2EnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJykuYXR0cigncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHR9O1xuXHRcdHRoaXMuY2xvc2VQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5lbXB0eSgpLmhpZGUoKTtcblx0XHR9O1xuXHR9XG59XG5cbk1vcmViaXRzLndpa2kucHJldmlldyA9IFdpa2lQcmV2aWV3O1xuXG4vKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2l0ZXh0ICoqKioqKioqKioqKioqKiogKi9cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBldmVyeSBwYXJhbWV0ZXIgZm91bmQgaW4gdGhlIHdpa2l0ZXh0IG9mIGEgZ2l2ZW4gdGVtcGxhdGUuXG4gKlxuICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IGNvbnRhaW5pbmcgYSB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gLSBJbmRleCBub3Rpbmcgd2hlcmUgaW4gdGhlIHRleHQgdGhlIHRlbXBsYXRlIGJlZ2lucy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGB7bmFtZTogdGVtcGxhdGVOYW1lLCBwYXJhbWV0ZXJzOiB7a2V5OiB2YWx1ZX19YC5cbiAqL1xuY29uc3QgcGFyc2VUZW1wbGF0ZSA9ICh0ZXh0OiBzdHJpbmcsIHN0YXJ0PzogbnVtYmVyKToge25hbWU6IHN0cmluZzsgcGFyYW1ldGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPn0gPT4ge1xuXHRzdGFydCB8fD0gMDtcblx0Y29uc3QgbGV2ZWw6IChudW1iZXIgfCBzdHJpbmcpW10gPSBbXTsgLy8gVHJhY2sgb2YgaG93IGRlZXAgd2UgYXJlICh7eywge3t7LCBvciBbWylcblx0bGV0IGNvdW50ID0gLTE7IC8vIE51bWJlciBvZiBwYXJhbWV0ZXJzIGZvdW5kXG5cdGxldCB1bm5hbWVkID0gMDsgLy8gS2VlcCB0cmFjayBvZiB3aGF0IG51bWJlciBhbiB1bm5hbWVkIHBhcmFtZXRlciBzaG91bGQgcmVjZWl2ZVxuXHRsZXQgZXF1YWxzID0gLTE7IC8vIEFmdGVyIGZpbmRpbmcgXCI9XCIgYmVmb3JlIGEgcGFyYW1ldGVyLCB0aGUgaW5kZXg7IG90aGVyd2lzZSwgLTFcblx0bGV0IGN1cnJlbnQgPSAnJztcblx0Y29uc3QgcmVzdWx0OiB7bmFtZTogc3RyaW5nOyBwYXJhbWV0ZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSA9IHtcblx0XHRuYW1lOiAnJyxcblx0XHRwYXJhbWV0ZXJzOiB7fSxcblx0fTtcblx0bGV0IGtleTogc3RyaW5nO1xuXHRsZXQgdmFsdWU6IHN0cmluZztcblx0LyoqXG5cdCAqIEZ1bmN0aW9uIHRvIGhhbmRsZSBmaW5kaW5nIHBhcmFtZXRlciB2YWx1ZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmFsPWZhbHNlXSAtIFdoZXRoZXIgdGhpcyBpcyB0aGUgZmluYWxcblx0ICogcGFyYW1ldGVyIGFuZCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgdHJhaWxpbmcgYH19YC5cblx0ICovXG5cdGNvbnN0IGZpbmRQYXJhbSA9IChmaW5hbD86IGJvb2xlYW4pID0+IHtcblx0XHQvLyBOb3RoaW5nIGZvdW5kIHlldCwgdGhpcyBtdXN0IGJlIHRoZSB0ZW1wbGF0ZSBuYW1lXG5cdFx0aWYgKGNvdW50ID09PSAtMSkge1xuXHRcdFx0cmVzdWx0Lm5hbWUgPSBjdXJyZW50LnNsaWNlKDIpLnRyaW0oKTtcblx0XHRcdCsrY291bnQ7XG5cdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xKSB7XG5cdFx0XHQvLyBJbiBhIHBhcmFtZXRlclxuXHRcdFx0Ly8gTm8gZXF1YWxzLCBzbyBpdCBtdXN0IGJlIHVubmFtZWQ7IG5vIHRyaW0gc2luY2Ugd2hpdGVzcGFjZSBhbGxvd2VkXG5cdFx0XHRjb25zdCBwYXJhbSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikgOiBjdXJyZW50O1xuXHRcdFx0aWYgKHBhcmFtKSB7XG5cdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzWysrdW5uYW1lZF0gPSBwYXJhbTtcblx0XHRcdFx0Kytjb3VudDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gV2UgZm91bmQgYW4gZXF1YWxzLCBzbyBzYXZlIHRoZSBwYXJhbWV0ZXIgYXMga2V5OiB2YWx1ZVxuXHRcdFx0a2V5ID0gY3VycmVudC5zbGljZSgwLCBNYXRoLm1heCgwLCBlcXVhbHMpKS50cmltKCk7XG5cdFx0XHR2YWx1ZSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikudHJpbSgpIDogY3VycmVudC5zbGljZShNYXRoLm1heCgwLCBlcXVhbHMgKyAxKSkudHJpbSgpO1xuXHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlO1xuXHRcdFx0ZXF1YWxzID0gLTE7XG5cdFx0fVxuXHR9O1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSB7XG5cdFx0Y29uc3QgdGVzdDMgPSB0ZXh0LnNsaWNlKGksIGkgKyAzKTtcblx0XHRpZiAodGVzdDMgPT09ICd7e3snIHx8ICh0ZXN0MyA9PT0gJ319fScgJiYgbGV2ZWwuYXQoLTEpID09PSAzKSkge1xuXHRcdFx0Y3VycmVudCArPSB0ZXN0Mztcblx0XHRcdGkgKz0gMjtcblx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycpIHtcblx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9IDM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXZlbC5wb3AoKTtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCB0ZXN0MiA9IHRleHQuc2xpY2UoaSwgaSArIDIpO1xuXHRcdC8vIEVudGVyaW5nIGEgdGVtcGxhdGUgKG9yIGxpbmspXG5cdFx0aWYgKHRlc3QyID09PSAne3snIHx8IHRlc3QyID09PSAnW1snKSB7XG5cdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0KytpO1xuXHRcdFx0aWYgKHRlc3QyID09PSAne3snKSB7XG5cdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9ICd3bCc7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gRWl0aGVyIGxlYXZpbmcgYSBsaW5rIG9yIHRlbXBsYXRlL3BhcnNlciBmdW5jdGlvblxuXHRcdGlmICgodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwuYXQoLTEpID09PSAyKSB8fCAodGVzdDIgPT09ICddXScgJiYgbGV2ZWwuYXQoLTEpID09PSAnd2wnKSkge1xuXHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdCsraTtcblx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0Ly8gRmluZCB0aGUgZmluYWwgcGFyYW1ldGVyIGlmIHRoaXMgcmVhbGx5IGlzIHRoZSBlbmRcblx0XHRcdGlmICh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0ZmluZFBhcmFtKHRydWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAodGV4dC5jaGFyQXQoaSkgPT09ICd8JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdC8vIEFub3RoZXIgcGlwZSBmb3VuZCwgdG9wbGV2ZWwsIHNvIHBhcmFtZXRlciBjb21pbmcgdXAhXG5cdFx0XHRmaW5kUGFyYW0oKTtcblx0XHRcdGN1cnJlbnQgPSAnJztcblx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEgJiYgdGV4dC5jaGFyQXQoaSkgPT09ICc9JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdC8vIEVxdWFscyBmb3VuZCwgdG9wbGV2ZWxcblx0XHRcdGVxdWFscyA9IGN1cnJlbnQubGVuZ3RoO1xuXHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSnVzdCBhZHZhbmNlIHRoZSBwb3NpdGlvblxuXHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQWRqdXN0IGFuZCBtYW5pcHVsYXRlIHRoZSB3aWtpdGV4dCBvZiBhIHBhZ2UuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKi9cbmNsYXNzIFdpa2lUZXh0UGFnZSB7XG5cdHRleHQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgbGlua3MgdG8gYGxpbmtfdGFyZ2V0YCBmcm9tIHRoZSBwYWdlIHRleHQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsaW5rVGFyZ2V0XG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHQgKi9cblx0cmVtb3ZlTGluayhsaW5rVGFyZ2V0OiBzdHJpbmcpOiB0aGlzIHtcblx0XHRjb25zdCBtd1RpdGxlID0gbXcuVGl0bGUubmV3RnJvbVRleHQobGlua1RhcmdldCkhO1xuXHRcdGNvbnN0IG5hbWVzcGFjZUlEID0gbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdGNvbnN0IHRpdGxlID0gbXdUaXRsZS5nZXRNYWluVGV4dCgpO1xuXHRcdGxldCBsaW5rUmVnZXhTdHJpbmcgPSAnJztcblx0XHRpZiAobmFtZXNwYWNlSUQgIT09IDApIHtcblx0XHRcdGxpbmtSZWdleFN0cmluZyA9IGAke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KG5hbWVzcGFjZUlEKX06YDtcblx0XHR9XG5cdFx0bGlua1JlZ2V4U3RyaW5nICs9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGl0bGUpO1xuXHRcdC8vIEZvciBtb3N0IG5hbWVzcGFjZXMsIHVubGluayBib3RoIFtbVXNlcjpUZXN0XV0gYW5kIFtbOlVzZXI6VGVzdF1dXG5cdFx0Ly8gRm9yIGZpbGVzIGFuZCBjYXRlZ29yaWVzLCBvbmx5IHVubGluayBbWzpDYXRlZ29yeTpUZXN0XV0uIERvIG5vdCB1bmxpbmsgW1tDYXRlZ29yeTpUZXN0XV1cblx0XHRjb25zdCBpc0ZpbGVPckNhdGVnb3J5ID0gWzYsIDE0XS5pbmNsdWRlcyhuYW1lc3BhY2VJRCk7XG5cdFx0Y29uc3QgY29sb24gPSBpc0ZpbGVPckNhdGVnb3J5ID8gJzonIDogJzo/Jztcblx0XHRjb25zdCBzaW1wbGVMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0oJHtsaW5rUmVnZXhTdHJpbmd9KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdGNvbnN0IHBpcGVkTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259JHtsaW5rUmVnZXhTdHJpbmd9XFxcXHwoLis/KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHNpbXBsZUxpbmtSZWdleCwgJyQxJykucmVwbGFjZShwaXBlZExpbmtSZWdleCwgJyQxJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQ29tbWVudHMgb3V0IGltYWdlcyBmcm9tIHBhZ2UgdGV4dDsgaWYgdXNlZCBpbiBhIGdhbGxlcnksIGRlbGV0ZXMgdGhlIHdob2xlIGxpbmUuXG5cdCAqIElmIHVzZWQgYXMgYSB0ZW1wbGF0ZSBhcmd1bWVudCAobm90IG5lY2Vzc2FyaWx5IHdpdGggYEZpbGU6YCBwcmVmaXgpLCB0aGUgdGVtcGxhdGUgcGFyYW1ldGVyIGlzIGNvbW1lbnRlZCBvdXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBgRmlsZTpgIHByZWZpeC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIC0gUmVhc29uIHRvIGJlIGluY2x1ZGVkIGluIGNvbW1lbnQsIGFsb25nc2lkZSB0aGUgY29tbWVudGVkLW91dCBpbWFnZS5cblx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdCAqL1xuXHRjb21tZW50T3V0SW1hZ2UoaW1hZ2U6IHN0cmluZywgcmVhc29uPzogc3RyaW5nKTogdGhpcyB7XG5cdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoLy0tIT4vZywgJy0tPicpO1xuXHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHRoaXMudGV4dCk7XG5cdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdHJlYXNvbiA9IHJlYXNvbiA/IGAke3JlYXNvbn06IGAgOiAnJztcblx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0Ly8gQ2hlY2sgZm9yIG5vcm1hbCBpbWFnZSBsaW5rcywgaS5lLiBbW0ZpbGU6Rm9vYmFyLnBuZ3wuLi5dXVxuXHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5rXG5cdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYCk7XG5cdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh1bmJpbmRlci5jb250ZW50LCAnW1snLCAnXV0nKTtcblx0XHRmb3IgKGNvbnN0IGFsbExpbmsgb2YgYWxsTGlua3MpIHtcblx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsTGluaykpIHtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBgPCEtLSAke3JlYXNvbn0ke2FsbExpbmt9IC0tPmA7XG5cdFx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoYWxsTGluaywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDaGVjayBmb3IgZ2FsbGVyeSBpbWFnZXMsIGkuZS4gaW5zdGFuY2VzIHRoYXQgbXVzdCBzdGFydCBvbiBhIG5ldyBsaW5lLFxuXHRcdC8vIGV2ZW50dWFsbHkgcHJlY2VkZWQgd2l0aCBzb21lIHNwYWNlLCBhbmQgbXVzdCBpbmNsdWRlIEZpbGU6IHByZWZpeFxuXHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5lLlxuXHRcdGNvbnN0IGdhbGxlcnlJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoXlxcXFxzKiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccyooPzpcXFxcfC4qPyR8JCkpYCxcblx0XHRcdCdtZydcblx0XHQpO1xuXHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZ2FsbGVyeUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHQvLyBDaGVjayBmcmVlIGltYWdlIHVzYWdlcywgZm9yIGV4YW1wbGUgYXMgdGVtcGxhdGUgYXJndW1lbnRzLCBtaWdodCBoYXZlIHRoZSBGaWxlOiBwcmVmaXggZXhjbHVkZWQsIGJ1dCBtdXN0IGJlIHByZWNlZGVkIGJ5IGFuIHxcblx0XHQvLyBXaWxsIG9ubHkgZWF0IHRoZSBpbWFnZSBuYW1lIGFuZCB0aGUgcHJlY2VkaW5nIGJhciBhbmQgYW4gZXZlbnR1YWwgbmFtZWQgcGFyYW1ldGVyXG5cdFx0Y29uc3QgZnJlZUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0YChcXFxcfFxcXFxzKig/OltcXFxcd1xcXFxzXStcXFxcPSk/XFxcXHMqKD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqKT8ke2ltYWdlUmVnZXhTdHJpbmd9KWAsXG5cdFx0XHQnbWcnXG5cdFx0KTtcblx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGZyZWVJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHQvLyBSZWJpbmQgdGhlIGNvbnRlbnQgbm93LCB3ZSBhcmUgZG9uZSFcblx0XHR0aGlzLnRleHQgPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB1c2VzIG9mIFtbRmlsZTpgaW1hZ2VgXV0gdG8gW1tGaWxlOmBpbWFnZWB8YGRhdGFgXV0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBGaWxlOiBwcmVmaXguXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIC0gVGhlIGRpc3BsYXkgb3B0aW9ucy5cblx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdCAqL1xuXHRhZGRUb0ltYWdlQ29tbWVudChpbWFnZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB0aGlzIHtcblx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYCk7XG5cdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICdbWycsICddXScpO1xuXHRcdGZvciAobGV0IHJlcGxhY2VtZW50IG9mIGFsbExpbmtzKSB7XG5cdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KHJlcGxhY2VtZW50KSkge1xuXHRcdFx0XHQvLyBqdXN0IHB1dCBpdCBhdCB0aGUgZW5kP1xuXHRcdFx0XHRyZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcXVxcXSQvLCBgfCR7ZGF0YX1dXWApO1xuXHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShyZXBsYWNlbWVudCwgcmVwbGFjZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBnYWxsZXJ5UmVnZXggPSBuZXcgUmVnRXhwKGBeKFxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ30uKj8pXFxcXHw/KC4qPykkYCwgJ21nJyk7XG5cdFx0Y29uc3QgbmV3dGV4dCA9IGAkMXwkMiAke2RhdGF9YDtcblx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShnYWxsZXJ5UmVnZXgsIG5ld3RleHQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgdHJhbnNjbHVzaW9ucyBvZiBhIHRlbXBsYXRlIGZyb20gcGFnZSB0ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBQYWdlIG5hbWUgd2hvc2UgdHJhbnNjbHVzaW9ucyBhcmUgdG8gYmUgcmVtb3ZlZCxcblx0ICogaW5jbHVkZSBuYW1lc3BhY2UgcHJlZml4IG9ubHkgaWYgbm90IGluIHRlbXBsYXRlIG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdCAqL1xuXHRyZW1vdmVUZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nKTogdGhpcyB7XG5cdFx0Y29uc3QgdGVtcGxhdGVSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGVtcGxhdGUpO1xuXHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0YFxcXFx7XFxcXHsoPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDEwKX06KT9cXFxccyoke3RlbXBsYXRlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXH1cXFxcfSldYFxuXHRcdCk7XG5cdFx0Y29uc3QgYWxsVGVtcGxhdGVzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAne3snLCAnfX0nLCBbJ3t7eycsICd9fX0nXSk7XG5cdFx0Zm9yIChjb25zdCBhbGxUZW1wbGF0ZSBvZiBhbGxUZW1wbGF0ZXMpIHtcblx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsVGVtcGxhdGUpKSB7XG5cdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGFsbFRlbXBsYXRlLCAnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNtYXJ0bHkgaW5zZXJ0IGEgdGFnIGF0b3AgcGFnZSB0ZXh0IGJ1dCBhZnRlciBzcGVjaWZpZWQgdGVtcGxhdGVzLFxuXHQgKiBzdWNoIGFzIGhhdG5vdGVzLCBzaG9ydCBkZXNjcmlwdGlvbiwgb3IgZGVsZXRpb24gYW5kIHByb3RlY3Rpb24gdGVtcGxhdGVzLlxuXHQgKiBOb3RhYmx5LCBkb2VzICpub3QqIGluc2VydCBhIG5ld2xpbmUgYWZ0ZXIgdGhlIHRhZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSB0YWcgdG8gYmUgaW5zZXJ0ZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSByZWdleCAtIFRlbXBsYXRlcyBhZnRlciB3aGljaCB0byBpbnNlcnQgdGFnLFxuXHQgKiBnaXZlbiBhcyBlaXRoZXIgYXMgYSAocmVnZXgtdmFsaWQpIHN0cmluZyBvciBhbiBhcnJheSB0byBiZSBqb2luZWQgYnkgcGlwZXMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZmxhZ3M9aV0gLSBSZWdleCBmbGFncyB0byBhcHBseS4gIGAnJ2AgdG8gcHJvdmlkZSBubyBmbGFncztcblx0ICogb3RoZXIgZmFsc2V5IHZhbHVlcyB3aWxsIGRlZmF1bHQgdG8gYGlgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3ByZVJlZ2V4XSAtIE9wdGlvbmFsIHJlZ2V4IHN0cmluZyBvciBhcnJheSB0byBtYXRjaFxuXHQgKiBiZWZvcmUgYW55IHRlbXBsYXRlIG1hdGNoZXMgKGkuZS4gYmVmb3JlIGB7e2ApLCBzdWNoIGFzIGh0bWwgY29tbWVudHMuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHQgKi9cblx0aW5zZXJ0QWZ0ZXJUZW1wbGF0ZXModGFnPzogc3RyaW5nLCByZWdleD86IHN0cmluZyB8IHN0cmluZ1tdLCBmbGFncz86IHN0cmluZywgcHJlUmVnZXg/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IHRoaXMge1xuXHRcdGlmICh0YWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gdGFnIHByb3ZpZGVkJyk7XG5cdFx0fVxuXHRcdC8vIC5sZW5ndGggaXMgb25seSBhIHByb3BlcnR5IG9mIHN0cmluZ3MgYW5kIGFycmF5cyBzbyB3ZVxuXHRcdC8vIHNob3VsZG4ndCBuZWVkIHRvIGNoZWNrIHR5cGVcblx0XHRpZiAocmVnZXggPT09IHVuZGVmaW5lZCB8fCAhcmVnZXgubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJlZ2V4IHByb3ZpZGVkJyk7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlZ2V4KSkge1xuXHRcdFx0cmVnZXggPSByZWdleC5qb2luKCd8Jyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZmxhZ3MgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRmbGFncyA9ICdpJztcblx0XHR9XG5cdFx0aWYgKCFwcmVSZWdleCB8fCAhcHJlUmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRwcmVSZWdleCA9ICcnO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcmVSZWdleCkpIHtcblx0XHRcdHByZVJlZ2V4ID0gcHJlUmVnZXguam9pbignfCcpO1xuXHRcdH1cblx0XHQvLyBSZWdleCBpcyBleHRyYSBjb21wbGljYXRlZCB0byBhbGxvdyBmb3IgdGVtcGxhdGVzIHdpdGhcblx0XHQvLyBwYXJhbWV0ZXJzIGFuZCB0byBoYW5kbGUgd2hpdGVzcGFjZSBwcm9wZXJseVxuXHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKFxuXHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0Ly8gbGVhZGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdC8vIGNhcHR1cmUgdGVtcGxhdGUocylcblx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHQvLyBiZWdpbiB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0Ly8gZW5kIG1haW4gdGVtcGxhdGUgbmFtZSwgb3B0aW9uYWxseSB3aXRoIGEgbnVtYmVyXG5cdFx0XHRcdC8vIFByb2JhYmx5IHJlbW92ZSB0aGUgKD86KSB0aG91Z2hcblx0XHRcdFx0Ly8gdGVtcGxhdGUgcGFyYW1ldGVyc1xuXHRcdFx0XHQvLyBlbmQgdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdC8vIGVuZCBjYXB0dXJlXG5cdFx0XHRcdC8vIHRyYWlsaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0YF5cXFxccyooPzooKD86XFxcXHMqJHtcblx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0cHJlUmVnZXhcblx0XHRcdFx0fXxcXFxce1xcXFx7XFxcXHMqKD86JHtcblx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdHJlZ2V4XG5cdFx0XHRcdH0pXFxcXGQqXFxcXHMqKFxcXFx8KD86XFxcXHtcXFxce1tee31dKlxcXFx9XFxcXH18W157fV0pKik/XFxcXH1cXFxcfSkrKD86XFxcXHMqXFxcXG4pPylcXFxccyopP2AsXG5cdFx0XHRcdGZsYWdzXG5cdFx0XHQpLFxuXHRcdFx0YCQxJHt0YWd9YFxuXHRcdCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBtYW5pcHVsYXRlZCB3aWtpdGV4dC5cblx0ICpcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldFRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy50ZXh0O1xuXHR9XG59XG5cbi8qKlxuICogV2lraXRleHQgbWFuaXB1bGF0aW9uLlxuICpcbiAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraXRleHRcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICovXG5jb25zdCB3aWtpdGV4dCA9IHtcblx0cGFyc2VUZW1wbGF0ZSxcblx0cGFnZTogV2lraVRleHRQYWdlLFxufTtcblxuTW9yZWJpdHMud2lraXRleHQgPSB3aWtpdGV4dDtcblxuLyogKioqKioqKioqKiogTW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyICoqKioqKioqKioqKiAqL1xuLyoqXG4gKiBIYW5kbGVzIGxvZ2dpbmcgYWN0aW9ucyB0byBhIHVzZXJzcGFjZSBsb2cuXG4gKiBVc2VkIGluIENTRCwgUFJPRCwgYW5kIFhGRC5cbiAqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHNcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IGxvZ1BhZ2VOYW1lIC0gVGl0bGUgb2YgdGhlIHN1YnBhZ2Ugb2YgdGhlIGN1cnJlbnQgdXNlcidzIGxvZy5cbiAqL1xuY2xhc3MgVXNlcnNwYWNlTG9nZ2VyIHtcblx0LyoqXG5cdCAqIFRoZSB0ZXh0IHRvIHByZWZpeCB0aGUgbG9nIHdpdGggdXBvbiBjcmVhdGlvbiwgZGVmYXVsdHMgdG8gZW1wdHkuXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRpbml0aWFsVGV4dDogc3RyaW5nO1xuXHQvKipcblx0ICogVGhlIGhlYWRlciBsZXZlbCB0byB1c2UgZm9yIG1vbnRocywgZGVmYXVsdHMgdG8gMyAoYD09PWApLlxuXHQgKlxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0aGVhZGVyTGV2ZWw6IG51bWJlcjtcblx0Y2hhbmdlVGFnczogc3RyaW5nIHwgc3RyaW5nW107XG5cdC8qKlxuXHQgKiBMb2cgdGhlIGVudHJ5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nVGV4dCAtIERvZXNuJ3QgaW5jbHVkZSBsZWFkaW5nIGAjYCBvciBgKmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5VGV4dCAtIEVkaXQgc3VtbWFyeS5cblx0ICogQHJldHVybnMge0pRdWVyeS5Qcm9taXNlfVxuXHQgKi9cblx0bG9nOiAobG9nVGV4dDogc3RyaW5nLCBzdW1tYXJ5VGV4dDogc3RyaW5nKSA9PiBKUXVlcnkuRGVmZXJyZWQ8dW5rbm93biwgdW5rbm93biwgdW5rbm93bj47XG5cblx0Y29uc3RydWN0b3IobG9nUGFnZU5hbWU6IHN0cmluZykge1xuXHRcdGlmICghbG9nUGFnZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbm8gbG9nIHBhZ2UgbmFtZSBzcGVjaWZpZWQnKTtcblx0XHR9XG5cdFx0dGhpcy5pbml0aWFsVGV4dCA9ICcnO1xuXHRcdHRoaXMuaGVhZGVyTGV2ZWwgPSAzO1xuXHRcdHRoaXMuY2hhbmdlVGFncyA9ICcnO1xuXHRcdHRoaXMubG9nID0gKGxvZ1RleHQsIHN1bW1hcnlUZXh0KSA9PiB7XG5cdFx0XHRjb25zdCBkZWYgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRpZiAoIWxvZ1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIGRlZi5yZWplY3QoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZ2UgPSBuZXcgTW9yZWJpdHMud2lraS5wYWdlKFxuXHRcdFx0XHRgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vJHtsb2dQYWdlTmFtZX1gLFxuXHRcdFx0XHR1bHMoJ+WwhumhueebruWKoOWFpeWIsOeUqOaIt+epuumXtOaXpeW/lycsICflsIfpoIXnm67liqDlhaXliLDkvb/nlKjogIXnqbrplpPml6XoqownKVxuXHRcdFx0KTsgLy8gbWFrZSB0aGlzICcuLi4gdG8gJyArIGxvZ1BhZ2VOYW1lID9cblx0XHRcdHBhZ2UubG9hZCgocGFnZW9iaikgPT4ge1xuXHRcdFx0XHQvLyBhZGQgYmx1cmIgaWYgbG9nIHBhZ2UgZG9lc24ndCBleGlzdCBvciBpcyBibGFua1xuXHRcdFx0XHRsZXQgdGV4dCA9IHBhZ2VvYmouZ2V0UGFnZVRleHQoKSB8fCB0aGlzLmluaXRpYWxUZXh0O1xuXHRcdFx0XHQvLyBjcmVhdGUgbW9udGhseSBoZWFkZXIgaWYgaXQgZG9lc24ndCBleGlzdCBhbHJlYWR5XG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZShwYWdlb2JqLmdldExvYWRUaW1lKCkgPz8gJycpO1xuXHRcdFx0XHRpZiAoIWRhdGUubW9udGhIZWFkZXJSZWdleCgpLmV4ZWModGV4dCkpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5cXG4ke2RhdGUubW9udGhIZWFkZXIodGhpcy5oZWFkZXJMZXZlbCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYWdlb2JqLnNldFBhZ2VUZXh0KGAke3RleHR9XFxuJHtsb2dUZXh0fWApO1xuXHRcdFx0XHRwYWdlb2JqLnNldEVkaXRTdW1tYXJ5KHN1bW1hcnlUZXh0KTtcblx0XHRcdFx0cGFnZW9iai5zZXRDaGFuZ2VUYWdzKHRoaXMuY2hhbmdlVGFncyk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q3JlYXRlT3B0aW9uKCdyZWNyZWF0ZScpO1xuXHRcdFx0XHRwYWdlb2JqLnNhdmUoZGVmLnJlc29sdmUsIGRlZi5yZWplY3QpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdH07XG5cdH1cbn1cblxuTW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyID0gVXNlcnNwYWNlTG9nZ2VyO1xuXG4vKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnN0YXR1cyAqKioqKioqKioqKioqKioqICovXG4vKipcbiAqIENyZWF0ZSBhbmQgc2hvdyBzdGF0dXMgbWVzc2FnZXMgb2YgdmFyeWluZyB1cmdlbmN5LlxuICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fE1vcmViaXRzLnN0YXR1cy5pbml0KCl9IG11c3QgYmUgY2FsbGVkIGJlZm9yZVxuICogYW55IHN0YXR1cyBvYmplY3QgaXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRob3NlIHN0YXR1c2VzIHdvbid0IGJlIHZpc2libGUuXG4gKlxuICogQG1lbWJlcm9mIE1vcmViaXRzXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBiZWZvcmUgdGhlIHRoZSBjb2xvbiBgOmAuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdCAtIFRleHQgYWZ0ZXIgdGhlIGNvbG9uIGA6YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1zdGF0dXNdIC0gRGV0ZXJtaW5lIHRoZSBmb250IGNvbG9yIG9mIHRoZSBzdGF0dXNcbiAqIGxpbmUsIGFsbG93YWJsZSB2YWx1ZXMgYXJlOiBgc3RhdHVzYCAoYmx1ZSksIGBpbmZvYCAoZ3JlZW4pLCBgd2FybmAgKHJlZCksXG4gKiBvciBgZXJyb3JgIChib2xkIHJlZCkuXG4gKi9cblxuaW50ZXJmYWNlIE1vcmViaXRzTmFtZXNwYWNlIHtcblx0c3RhdHVzOiB0eXBlb2YgU3RhdHVzO1xuXHRodG1sTm9kZTogKHR5cGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBjb2xvcj86IHN0cmluZykgPT4gSFRNTEVsZW1lbnQ7XG5cdGNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQ6IChcblx0XHRqUXVlcnlTZWxlY3Rvcjogc3RyaW5nIHwgSFRNTEVsZW1lbnRbXSxcblx0XHRqUXVlcnlDb250ZXh0Pzogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+XG5cdCkgPT4gdm9pZDtcblx0YmF0Y2hPcGVyYXRpb246IHR5cGVvZiBCYXRjaE9wZXJhdGlvbjtcbn1cblxudHlwZSBXaWtpUGFnZUluc3RhbmNlID0gSW5zdGFuY2VUeXBlPFdpa2lOYW1lc3BhY2VbJ3BhZ2UnXT47XG50eXBlIEJhdGNoT3BlcmF0aW9uV29ya2VyID0gKHBhZ2U6IHN0cmluZywgYmF0Y2hPcGVyYXRpb246IEJhdGNoT3BlcmF0aW9uKSA9PiB2b2lkO1xuXG4vKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnN0YXR1cyAqKioqKioqKioqKioqKioqICovXG4vKipcbiAqIENyZWF0ZSBhbmQgc2hvdyBzdGF0dXMgbWVzc2FnZXMgb2YgdmFyeWluZyB1cmdlbmN5LlxuICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fE1vcmViaXRzLnN0YXR1cy5pbml0KCl9IG11c3QgYmUgY2FsbGVkIGJlZm9yZVxuICogYW55IHN0YXR1cyBvYmplY3QgaXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRob3NlIHN0YXR1c2VzIHdvbid0IGJlIHZpc2libGUuXG4gKlxuICogQG1lbWJlcm9mIE1vcmViaXRzXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBiZWZvcmUgdGhlIHRoZSBjb2xvbiBgOmAuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdCAtIFRleHQgYWZ0ZXIgdGhlIGNvbG9uIGA6YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1zdGF0dXNdIC0gRGV0ZXJtaW5lIHRoZSBmb250IGNvbG9yIG9mIHRoZSBzdGF0dXNcbiAqIGxpbmUsIGFsbG93YWJsZSB2YWx1ZXMgYXJlOiBgc3RhdHVzYCAoYmx1ZSksIGBpbmZvYCAoZ3JlZW4pLCBgd2FybmAgKHJlZCksXG4gKiBvciBgZXJyb3JgIChib2xkIHJlZCkuXG4gKi9cbmNsYXNzIFN0YXR1cyB7XG5cdHN0YXQ6IE5vZGUgfCBudWxsID0gbnVsbDtcblx0c3RhdFJhdzogTW9yZWJpdHNIdG1sSW5wdXQgfCBudWxsID0gbnVsbDtcblx0dGV4dCE6IE5vZGU7XG5cdHRleHRSYXchOiBzdHJpbmc7XG5cdHR5cGUhOiBzdHJpbmc7XG5cdHRhcmdldCE6IEhUTUxTcGFuRWxlbWVudDtcblx0bm9kZSE6IEhUTUxEaXZFbGVtZW50O1xuXHRsaW5rZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHN0YXQ/OiBNb3JlYml0c0h0bWxJbnB1dCwgdHlwZT86IHN0cmluZykge1xuXHRcdHRoaXMudGV4dFJhdyA9IHRleHQ7XG5cdFx0dGhpcy50ZXh0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbCh0ZXh0KTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlIHx8ICdzdGF0dXMnO1xuXHRcdHRoaXMuZ2VuZXJhdGUoKTtcblx0XHRpZiAoc3RhdCkge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdCwgdHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZnkgYW4gYXJlYSBmb3Igc3RhdHVzIG1lc3NhZ2UgZWxlbWVudHMgdG8gYmUgYWRkZWQgdG8uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIFVzdWFsbHkgYSBkaXYgZWxlbWVudC5cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBgcm9vdGAgaXMgbm90IGFuIGBIVE1MRWxlbWVudGAuXG5cdCAqL1xuXHRzdGF0aWMgaW5pdChyb290OiBIVE1MRWxlbWVudCB8IG51bGwpOiB2b2lkIHtcblx0XHRpZiAoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ29iamVjdCBub3QgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudCcpO1xuXHRcdH1cblx0XHR3aGlsZSAocm9vdC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdHJvb3QucmVtb3ZlQ2hpbGQocm9vdC5maXJzdENoaWxkISk7XG5cdFx0fVxuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290ID0gcm9vdDtcblx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IG51bGw7XG5cdH1cblxuXHRzdGF0aWMgcm9vdDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlcnJvci5cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSBXaGVuIGBoYW5kbGVyYCBpcyBub3QgYSBmdW5jdGlvbi5cblx0ICovXG5cdHN0YXRpYyBvbkVycm9yKGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50ID0gaGFuZGxlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTW9yZWJpdHMuc3RhdHVzLm9uRXJyb3I6IGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZXJyb3JFdmVudDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cblx0LyoqIEFkZCB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSB0byB0aGUgRE9NLiAqL1xuXHRsaW5rKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5saW5rZWQgJiYgTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHR0aGlzLmxpbmtlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0LyoqIFJlbW92ZSB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSBmcm9tIHRoZSBET00uICovXG5cdHVubGluaygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5saW5rZWQpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290IS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0dGhpcy5saW5rZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBzdGF0dXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBQYXJ0IG9mIHN0YXR1cyBtZXNzYWdlIGFmdGVyIGNvbG9uLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtICdzdGF0dXMnIChibHVlKSwgJ2luZm8nIChncmVlbiksICd3YXJuJ1xuXHQgKiAocmVkKSwgb3IgJ2Vycm9yJyAoYm9sZCByZWQpLlxuXHQgKi9cblx0dXBkYXRlKHN0YXR1czogTW9yZWJpdHNIdG1sSW5wdXQsIHR5cGU/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRSYXcgPSBzdGF0dXM7XG5cdFx0dGhpcy5zdGF0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbChzdGF0dXMpO1xuXHRcdGlmICh0eXBlKSB7XG5cdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0aWYgKHR5cGUgPT09ICdlcnJvcicpIHtcblx0XHRcdFx0Ly8gaGFjayB0byBmb3JjZSB0aGUgcGFnZSBub3QgdG8gcmVsb2FkIHdoZW4gYW4gZXJyb3IgaXMgb3V0cHV0IC0gc2VlIGFsc28gTW9yZWJpdHMuc3RhdHVzKCkgYWJvdmVcblx0XHRcdFx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMTAwMDtcblx0XHRcdFx0Ly8gY2FsbCBlcnJvciBjYWxsYmFja1xuXHRcdFx0XHRpZiAoTW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQpIHtcblx0XHRcdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGFsc28gbG9nIGVycm9yIG1lc3NhZ2VzIGluIHRoZSBicm93c2VyIGNvbnNvbGVcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgW01vcmViaXRzXSAke3RoaXMudGV4dFJhd306ICR7dGhpcy5zdGF0UmF3fWApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0LyoqIFByb2R1Y2UgdGhlIGh0bWwgZm9yIGZpcnN0IHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRnZW5lcmF0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xuXHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc6ICcpKTtcblx0XHR0aGlzLnRhcmdldCA9IHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7IC8vIGR1bW15IG5vZGVcblx0fVxuXG5cdC8qKiBDb21wbGV0ZSB0aGUgaHRtbCwgZm9yIHRoZSBzZWNvbmQgcGFydCBvZiB0aGUgc3RhdHVzIG1lc3NhZ2UuICovXG5cdHJlbmRlcigpOiB2b2lkIHtcblx0XHR0aGlzLm5vZGUuY2xhc3NOYW1lID0gYG1vcmViaXRzX3N0YXR1c18ke3RoaXMudHlwZX1gO1xuXHRcdHdoaWxlICh0aGlzLnRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdHRoaXMudGFyZ2V0LnJlbW92ZUNoaWxkKHRoaXMudGFyZ2V0LmZpcnN0Q2hpbGQhKTtcblx0XHR9XG5cdFx0dGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5zdGF0ISk7XG5cdFx0dGhpcy5saW5rKCk7XG5cdH1cblxuXHRzdGF0dXMoc3RhdHVzOiBNb3JlYml0c0h0bWxJbnB1dCk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3N0YXR1cycpO1xuXHR9XG5cblx0aW5mbyhzdGF0dXM6IE1vcmViaXRzSHRtbElucHV0KTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnaW5mbycpO1xuXHR9XG5cblx0d2FybihzdGF0dXM6IE1vcmViaXRzSHRtbElucHV0KTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnd2FybicpO1xuXHR9XG5cblx0ZXJyb3Ioc3RhdHVzOiBNb3JlYml0c0h0bWxJbnB1dCk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2Vycm9yJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgc3RhdHVzYC10eXBlIChibHVlKVxuXHQgKi9cblx0c3RhdGljIHN0YXR1cyh0ZXh0OiBzdHJpbmcsIHN0YXR1cz86IHN0cmluZyk6IFN0YXR1cyB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0dXModGV4dCwgc3RhdHVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBpbmZvYC10eXBlIChncmVlbilcblx0ICovXG5cdHN0YXRpYyBpbmZvKHRleHQ6IHN0cmluZywgc3RhdHVzPzogc3RyaW5nKTogU3RhdHVzIHtcblx0XHRyZXR1cm4gbmV3IFN0YXR1cyh0ZXh0LCBzdGF0dXMsICdpbmZvJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgd2FybmAtdHlwZSAocmVkKVxuXHQgKi9cblx0c3RhdGljIHdhcm4odGV4dDogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcpOiBTdGF0dXMge1xuXHRcdHJldHVybiBuZXcgU3RhdHVzKHRleHQsIHN0YXR1cywgJ3dhcm4nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBlcnJvcmAtdHlwZSAoYm9sZCByZWQpXG5cdCAqL1xuXHRzdGF0aWMgZXJyb3IodGV4dDogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcpOiBTdGF0dXMge1xuXHRcdHJldHVybiBuZXcgU3RhdHVzKHRleHQsIHN0YXR1cywgJ2Vycm9yJyk7XG5cdH1cblxuXHQvKipcblx0ICogRm9yIHRoZSBhY3Rpb24gY29tcGxldGUgbWVzc2FnZSBhdCB0aGUgZW5kLCBjcmVhdGUgYSBzdGF0dXMgbGluZSB3aXRob3V0XG5cdCAqIGEgY29sb24gc2VwYXJhdG9yLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG5cdCAqL1xuXHRzdGF0aWMgYWN0aW9uQ29tcGxldGVkKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gJ21vcmViaXRzX3N0YXR1c19pbmZvIG1vcmViaXRzX2FjdGlvbl9jb21wbGV0ZSc7XG5cdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGlzcGxheSB0aGUgdXNlcidzIHJhdGlvbmFsZSwgY29tbWVudHMsIGV0Yy4gQmFjayB0byB0aGVtIGFmdGVyIGEgZmFpbHVyZSxcblx0ICogc28gdGhhdCB0aGV5IG1heSByZS11c2UgaXQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnRzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCAqL1xuXHRzdGF0aWMgcHJpbnRVc2VyVGV4dChjb21tZW50czogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHAuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkaXYuY2xhc3NOYW1lID0gJ21vcmViaXRzLXVzZXJ0ZXh0Jztcblx0XHRkaXYuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuXHRcdGRpdi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS13cmFwJztcblx0XHRkaXYudGV4dENvbnRlbnQgPSBjb21tZW50cztcblx0XHRwLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QhLmFwcGVuZENoaWxkKHApO1xuXHR9XG59XG5cbk1vcmViaXRzLnN0YXR1cyA9IFN0YXR1cztcblxuLyoqXG4gKiBTaW1wbGUgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNpbXBsZSBub2RlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVHlwZSBvZiBIVE1MIGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIFRleHQgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3JdIC0gRm9udCBjb2xvci5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuTW9yZWJpdHMuaHRtbE5vZGUgPSAodHlwZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xuXHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0aWYgKGNvbG9yKSB7XG5cdFx0bm9kZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXHR9XG5cdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCkpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG4vKipcbiAqIEFkZCBzaGlmdC1jbGljayBzdXBwb3J0IGZvciBjaGVja2JveGVzLiBUaGUgd2lraWJpdHMgdmVyc2lvblxuICogKGB3aW5kb3cuYWRkQ2hlY2tib3hDbGlja0hhbmRsZXJzYCkgaGFzIHNvbWUgcmVzdHJpY3Rpb25zLCBhbmQgZG9lc24ndCB3b3JrXG4gKiB3aXRoIGNoZWNrYm94ZXMgaW5zaWRlIGEgc29ydGFibGUgdGFibGUsIHNvIGxldCdzIGJ1aWxkIG91ciBvd24uXG4gKlxuICogQHBhcmFtIGpRdWVyeVNlbGVjdG9yXG4gKiBAcGFyYW0galF1ZXJ5Q29udGV4dFxuICovXG5Nb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0ID0gKFxuXHRqUXVlcnlTZWxlY3Rvcjogc3RyaW5nIHwgSFRNTEVsZW1lbnRbXSxcblx0alF1ZXJ5Q29udGV4dD86IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgSlF1ZXJ5PEhUTUxFbGVtZW50PlxuKTogdm9pZCA9PiB7XG5cdGxldCBsYXN0Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0Y29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gY2xpY2tIYW5kbGVyKFxuXHRcdHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsXG5cdFx0ZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuXHQpOiBib29sZWFuIHtcblx0XHRjb25zdCB0aGlzQ2IgPSB0aGlzO1xuXHRcdGlmIChldmVudC5zaGlmdEtleSAmJiBsYXN0Q2hlY2tib3ggIT09IG51bGwpIHtcblx0XHRcdC8vIGNhbid0IGNhY2hlIHRoZW0sIG9idmlvdXNseSwgaWYgd2Ugd2FudCB0byBzdXBwb3J0IHJlc29ydGluZ1xuXHRcdFx0Y29uc3QgY2JzID0gJDxIVE1MSW5wdXRFbGVtZW50PihqUXVlcnlTZWxlY3RvciBhcyBzdHJpbmcsIGpRdWVyeUNvbnRleHQpLnRvQXJyYXkoKTtcblx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0bGV0IGxhc3RJbmRleCA9IC0xO1xuXHRcdFx0bGV0IGk6IG51bWJlcjtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGNic1tpXSA9PT0gdGhpc0NiKSB7XG5cdFx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0XHRcdGlmIChsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjYnNbaV0gPT09IGxhc3RDaGVja2JveCkge1xuXHRcdFx0XHRcdGxhc3RJbmRleCA9IGk7XG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGluZGV4ID4gLTEgJiYgbGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0Ly8gaW5zcGlyZWQgYnkgd2lraWJpdHNcblx0XHRcdFx0Y29uc3QgZW5kU3RhdGUgPSB0aGlzQ2IuY2hlY2tlZDtcblx0XHRcdFx0bGV0IHN0YXJ0OiBudW1iZXI7XG5cdFx0XHRcdGxldCBmaW5pc2g6IG51bWJlcjtcblx0XHRcdFx0aWYgKGluZGV4IDwgbGFzdEluZGV4KSB7XG5cdFx0XHRcdFx0c3RhcnQgPSBpbmRleCArIDE7XG5cdFx0XHRcdFx0ZmluaXNoID0gbGFzdEluZGV4O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0YXJ0ID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdGZpbmlzaCA9IGluZGV4IC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSBzdGFydDsgaSA8PSBmaW5pc2g7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjYnNbaV0hLmNoZWNrZWQgIT09IGVuZFN0YXRlKSB7XG5cdFx0XHRcdFx0XHRjYnNbaV0hLmNsaWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxhc3RDaGVja2JveCA9IHRoaXNDYjtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0JDxIVE1MSW5wdXRFbGVtZW50PihqUXVlcnlTZWxlY3RvciBhcyBzdHJpbmcsIGpRdWVyeUNvbnRleHQpLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG59O1xuLyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5iYXRjaE9wZXJhdGlvbiAqKioqKioqKioqKioqKioqICovXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgYSBncm91cCBvZiBwYWdlcyAob3IgYXJiaXRyYXJ5IG9iamVjdHMpIGFuZCBleGVjdXRlcyBhIHdvcmtlciBmdW5jdGlvblxuICogZm9yIGVhY2guXG4gKlxuICogYHNldFBhZ2VMaXN0KHBhZ2VMaXN0KWA6IFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi4gSXQgc2hvdWxkIGJlIGFuXG4gKiBhcnJheSBvZiBwYWdlIG5hbWVzIHN0cmluZ3MuXG4gKlxuICogYHNldE9wdGlvbihvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSlgOiBTZXRzIGEga25vd24gb3B0aW9uOlxuICogLSBgY2h1bmtTaXplYCAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50byAoZGVmYXVsdFxuICogNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cbiAqIC0gYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzIGVsZW1lbnRcbiAqIHZpc2libGUgd2hlbiB3b3JrZXIgaXMgY29tcGxldGU/IFNlZSBub3RlIGJlbG93LlxuICpcbiAqIGBydW4od29ya2VyLCBwb3N0RmluaXNoKWA6IFJ1bnMgdGhlIGNhbGxiYWNrIGB3b3JrZXJgIGZvciBlYWNoIHBhZ2UgaW4gdGhlXG4gKiBsaXN0LiAgVGhlIGNhbGxiYWNrIG11c3QgY2FsbCBgd29ya2VyU3VjY2Vzc2Agd2hlbiBzdWNjZWVkaW5nLCBvclxuICogYHdvcmtlckZhaWx1cmVgIHdoZW4gZmFpbGluZy4gIElmIHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb3JcbiAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LCB0aGlzIGlzIGVhc2lseSBkb25lIGJ5IHBhc3NpbmcgdGhlc2UgdHdvXG4gKiBmdW5jdGlvbnMgYXMgcGFyYW1ldGVycyB0byB0aGUgbWV0aG9kcyBvbiB0aG9zZSBvYmplY3RzOiBmb3IgaW5zdGFuY2UsXG4gKiBgcGFnZS5zYXZlKGJhdGNoT3Aud29ya2VyU3VjY2VzcywgYmF0Y2hPcC53b3JrZXJGYWlsdXJlKWAuICBNYWtlIHN1cmUgdGhlXG4gKiBtZXRob2RzIGFyZSBjYWxsZWQgZGlyZWN0bHkgaWYgc3BlY2lhbCBzdWNjZXNzL2ZhaWx1cmUgY2FzZXMgYXJpc2UuICBJZiB5b3VcbiAqIG9taXQgdG8gY2FsbCB0aGVzZSBtZXRob2RzLCB0aGUgYmF0Y2ggb3BlcmF0aW9uIHdpbGwgc3RhbGwgYWZ0ZXIgdGhlIGZpcnN0XG4gKiBjaHVuayEgIEFsc28gZW5zdXJlIHRoYXQgZWl0aGVyIHdvcmtlclN1Y2Nlc3Mgb3Igd29ya2VyRmFpbHVyZSBpcyBjYWxsZWQgbm9cbiAqIG1vcmUgdGhhbiBvbmNlLiAgVGhlIHNlY29uZCBjYWxsYmFjayBgcG9zdEZpbmlzaGAgaXMgZXhlY3V0ZWQgd2hlbiB0aGVcbiAqIGVudGlyZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWQuXG4gKlxuICogSWYgdXNpbmcgYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCwgeW91IHNob3VsZCB0cnkgdG8gZW5zdXJlIHRoYXQgdGhlXG4gKiBgd29ya2VyU3VjY2Vzc2AgY2FsbGJhY2sgaGFzIGFjY2VzcyB0byB0aGUgcGFnZSB0aXRsZS4gIFRoaXMgaXMgbm8gcHJvYmxlbSBmb3JcbiAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IG9iamVjdHMuICBCdXQgd2hlbiB1c2luZyB0aGUgQVBJLCBwbGVhc2Ugc2V0IHRoZVxuICogfHBhZ2VOYW1lfCBwcm9wZXJ0eSBvbiB0aGUge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBvYmplY3QuXG4gKlxuICogVGhlcmUgYXJlIHNhbXBsZSBiYXRjaE9wZXJhdGlvbiBpbXBsZW1lbnRhdGlvbnMgdXNpbmcgTW9yZWJpdHMud2lraS5wYWdlIGluXG4gKiB0d2lua2xlYmF0Y2hkZWxldGUuanMsIHR3aW5rbGViYXRjaHVuZGVsZXRlLmpzLCBhbmQgdHdpbmtsZWJhdGNocHJvdGVjdC5qcy5cbiAqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHNcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IFtjdXJyZW50QWN0aW9uXVxuICovXG5jbGFzcyBCYXRjaE9wZXJhdGlvbiB7XG5cdHByaXZhdGUgY3R4OiB7XG5cdFx0cGFnZUxpc3Q6IHN0cmluZ1tdIHwgbnVsbDtcblx0XHRvcHRpb25zOiB7Y2h1bmtTaXplOiBudW1iZXI7IHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzOiBib29sZWFufTtcblx0XHRzdGF0dXNFbGVtZW50OiBTdGF0dXM7XG5cdFx0d29ya2VyOiBCYXRjaE9wZXJhdGlvbldvcmtlciB8IG51bGw7XG5cdFx0cG9zdEZpbmlzaDogKCgpID0+IHZvaWQpIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0XHRjb3VudFN0YXJ0ZWQ6IG51bWJlcjtcblx0XHRjb3VudEZpbmlzaGVkOiBudW1iZXI7XG5cdFx0Y291bnRGaW5pc2hlZFN1Y2Nlc3M6IG51bWJlcjtcblx0XHRjdXJyZW50Q2h1bmtJbmRleDogbnVtYmVyO1xuXHRcdHBhZ2VDaHVua3M6IHN0cmluZ1tdW107XG5cdFx0cnVubmluZzogYm9vbGVhbjtcblx0fTtcblxuXHRjb25zdHJ1Y3RvcihjdXJyZW50QWN0aW9uPzogc3RyaW5nKSB7XG5cdFx0dGhpcy5jdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VMaXN0OiBudWxsLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRjaHVua1NpemU6IDUwLFxuXHRcdFx0XHRwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lczogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gaW50ZXJuYWwgY291bnRlcnMsIGV0Yy5cblx0XHRcdHN0YXR1c0VsZW1lbnQ6IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbiB8fCB1bHMoJ+aJp+ihjOaJuemHj+aTjeS9nCcsICfln7fooYzmibnmrKHmk43kvZwnKSksXG5cdFx0XHR3b3JrZXI6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGZvciBlYWNoIGl0ZW0gaW4gcGFnZUxpc3Rcblx0XHRcdHBvc3RGaW5pc2g6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZFxuXHRcdFx0Y291bnRTdGFydGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWRTdWNjZXNzOiAwLFxuXHRcdFx0Y3VycmVudENodW5rSW5kZXg6IC0xLFxuXHRcdFx0cGFnZUNodW5rczogW10sXG5cdFx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHR9O1xuXHR9XG5cblx0Ly8gc2hvdWxkbid0IGJlIG5lZWRlZCBieSBleHRlcm5hbCB1c2VycywgYnV0IHByb3ZpZGVkIGFueXdheSBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eVxuXHRnZXRTdGF0dXNFbGVtZW50ID0gKCk6IFN0YXR1cyA9PiB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gcGFnZUxpc3QgLSBBcnJheSBvZiBvYmplY3RzIG92ZXIgd2hpY2ggeW91IHdpc2ggdG8gZXhlY3V0ZSB0aGUgd29ya2VyIGZ1bmN0aW9uXG5cdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUgbGlzdCBvZiBwYWdlIG5hbWVzIChzdHJpbmdzKS5cblx0ICovXG5cdHNldFBhZ2VMaXN0ID0gKHBhZ2VMaXN0OiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRcdHRoaXMuY3R4LnBhZ2VMaXN0ID0gcGFnZUxpc3Q7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgYSBrbm93biBvcHRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIC0gTmFtZSBvZiB0aGUgb3B0aW9uOlxuXHQgKiAtIGNodW5rU2l6ZSAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50b1xuXHQgKiAoZGVmYXVsdCA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHQgKiAtIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXNcblx0ICogZWxlbWVudCB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlP1xuXHQgKiBAcGFyYW0ge251bWJlcnxib29sZWFufSBvcHRpb25WYWx1ZSAtIFZhbHVlIHRvIHdoaWNoIHRoZSBvcHRpb24gaXNcblx0ICogdG8gYmUgc2V0LiBTaG91bGQgYmUgYW4gaW50ZWdlciBmb3IgY2h1bmtTaXplIGFuZCBhIGJvb2xlYW4gZm9yXG5cdCAqIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzLlxuXHQgKi9cblx0c2V0T3B0aW9uID0gKG9wdGlvbk5hbWU6ICdjaHVua1NpemUnIHwgJ3ByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzJywgb3B0aW9uVmFsdWU6IG51bWJlciB8IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5jdHgub3B0aW9ucyBhcyBSZWNvcmQ8J2NodW5rU2l6ZScgfCAncHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMnLCBudW1iZXIgfCBib29sZWFuPjtcblx0XHRvcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJ1bnMgdGhlIGZpcnN0IGNhbGxiYWNrIGZvciBlYWNoIHBhZ2UgaW4gdGhlIGxpc3QuXG5cdCAqIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgd29ya2VyU3VjY2VzcyB3aGVuIHN1Y2NlZWRpbmcsIG9yIHdvcmtlckZhaWx1cmUgd2hlbiBmYWlsaW5nLlxuXHQgKiBSdW5zIHRoZSBvcHRpb25hbCBzZWNvbmQgY2FsbGJhY2sgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSB3b3JrZXJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW3Bvc3RGaW5pc2hdXG5cdCAqL1xuXHRydW4gPSAod29ya2VyOiBCYXRjaE9wZXJhdGlvbldvcmtlciwgcG9zdEZpbmlzaD86ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRpZiAodGhpcy5jdHgucnVubmluZykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih1bHMoJ+aJuemHj+aTjeS9nOW3suWcqOi/kOihjCcsICfmibnmrKHmk43kvZzlt7LlnKjln7fooYwnKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY3R4LnJ1bm5pbmcgPSB0cnVlO1xuXHRcdHRoaXMuY3R4LndvcmtlciA9IHdvcmtlcjtcblx0XHR0aGlzLmN0eC5wb3N0RmluaXNoID0gcG9zdEZpbmlzaDtcblx0XHR0aGlzLmN0eC5jb3VudFN0YXJ0ZWQgPSAwO1xuXHRcdHRoaXMuY3R4LmNvdW50RmluaXNoZWQgPSAwO1xuXHRcdHRoaXMuY3R4LmNvdW50RmluaXNoZWRTdWNjZXNzID0gMDtcblx0XHR0aGlzLmN0eC5jdXJyZW50Q2h1bmtJbmRleCA9IC0xO1xuXHRcdHRoaXMuY3R4LnBhZ2VDaHVua3MgPSBbXTtcblx0XHRjb25zdCB0b3RhbCA9IHRoaXMuY3R4LnBhZ2VMaXN0IS5sZW5ndGg7XG5cdFx0aWYgKCF0b3RhbCkge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5pbmZvKHVscygn5rKh5pyJ5oyH5a6a6aG16Z2iJywgJ+aykuacieaMh+WumumggemdoicpKTtcblx0XHRcdHRoaXMuY3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdGlmICh0aGlzLmN0eC5wb3N0RmluaXNoKSB7XG5cdFx0XHRcdHRoaXMuY3R4LnBvc3RGaW5pc2goKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gY2h1bmsgcGFnZSBsaXN0IGludG8gbW9yZSBtYW5hZ2VhYmxlIHVuaXRzXG5cdFx0dGhpcy5jdHgucGFnZUNodW5rcyA9IE1vcmViaXRzLmFycmF5LmNodW5rKHRoaXMuY3R4LnBhZ2VMaXN0ISwgdGhpcy5jdHgub3B0aW9ucy5jaHVua1NpemUpO1xuXHRcdC8vIHN0YXJ0IHRoZSBwcm9jZXNzXG5cdFx0TW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50KCk7XG5cdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5zdGF0dXMoJzAlJyk7XG5cdFx0dGhpcy5mblN0YXJ0TmV3Q2h1bmsoKTtcblx0fTtcblxuXHQvKipcblx0ICogVG8gYmUgY2FsbGVkIGJ5IHdvcmtlciBiZWZvcmUgaXQgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KE1vcmViaXRzLndpa2kucGFnZXxNb3JlYml0cy53aWtpLmFwaXxzdHJpbmcpfSBhcmcgLVxuXHQgKiBUaGlzIHNob3VsZCBiZSB0aGUgYE1vcmViaXRzLndpa2kucGFnZWAgb3IgYE1vcmViaXRzLndpa2kuYXBpYCBvYmplY3QgdXNlZCBieSB3b3JrZXJcblx0ICogKGZvciB0aGUgYWRqdXN0bWVudCBvZiBzdGF0dXMgbGluZXMgZW1pdHRlZCBieSB0aGVtKS5cblx0ICogSWYgbm8gTW9yZWJpdHMud2lraS4qIG9iamVjdCBpcyB1c2VkIChlLmcuIHlvdSdyZSB1c2luZyBgbXcuQXBpKClgIG9yIHNvbWV0aGluZyBlbHNlKSwgYW5kXG5cdCAqIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2Agb3B0aW9uIGlzIG9uLCBnaXZlIHRoZSBwYWdlIG5hbWUgKHN0cmluZykgYXMgYXJndW1lbnQuXG5cdCAqL1xuXHR3b3JrZXJTdWNjZXNzID0gKGFyZzogc3RyaW5nIHwgV2lraUFwaUluc3RhbmNlIHwgV2lraVBhZ2VJbnN0YW5jZSk6IHZvaWQgPT4ge1xuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLmFwaSB8fCBhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLnBhZ2UpIHtcblx0XHRcdC8vIHVwZGF0ZSBvciByZW1vdmUgc3RhdHVzIGxpbmVcblx0XHRcdGNvbnN0IHN0YXRlbGVtID0gYXJnLmdldFN0YXR1c0VsZW1lbnQoKSE7XG5cdFx0XHRpZiAodGhpcy5jdHgub3B0aW9ucy5wcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcykge1xuXHRcdFx0XHRjb25zdCBhcmdXaXRoUGFnZUluZm8gPSBhcmcgYXMgdW5rbm93biBhcyB7XG5cdFx0XHRcdFx0Z2V0UGFnZU5hbWU/OiAoKSA9PiBzdHJpbmc7XG5cdFx0XHRcdFx0cGFnZU5hbWU/OiBzdHJpbmc7XG5cdFx0XHRcdFx0cXVlcnk/OiB7dGl0bGU/OiBzdHJpbmd9O1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0YXJnV2l0aFBhZ2VJbmZvLmdldFBhZ2VOYW1lIHx8XG5cdFx0XHRcdFx0YXJnV2l0aFBhZ2VJbmZvLnBhZ2VOYW1lIHx8XG5cdFx0XHRcdFx0KGFyZ1dpdGhQYWdlSW5mby5xdWVyeSAmJiBhcmdXaXRoUGFnZUluZm8ucXVlcnkudGl0bGUpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIHdlIGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBkaXNwbGF5IGEgcmVsZXZhbnQgbWVzc2FnZVxuXHRcdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gYXJnV2l0aFBhZ2VJbmZvLmdldFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHQ/IGFyZ1dpdGhQYWdlSW5mby5nZXRQYWdlTmFtZSgpXG5cdFx0XHRcdFx0XHQ6IGFyZ1dpdGhQYWdlSW5mby5wYWdlTmFtZSB8fCBhcmdXaXRoUGFnZUluZm8ucXVlcnkhLnRpdGxlO1xuXHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oYOWujOaIkO+8iFtbJHtwYWdlTmFtZX1dXe+8iWApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHdlIGRvbid0IGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBqdXN0IGRpc3BsYXkgYSBnZW5lcmljIG1lc3NhZ2Vcblx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKCflrozmiJAnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBzdGF0dXMgbGluZSBhdXRvbWF0aWNhbGx5IHByb2R1Y2VkIGJ5IE1vcmViaXRzLndpa2kuKlxuXHRcdFx0XHRzdGF0ZWxlbS51bmxpbmsoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIHRoaXMuY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoYXJnLCBg5a6M5oiQ77yIW1ske2FyZ31dXe+8iWApO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcysrO1xuXHRcdHRoaXMuZm5Eb25lT25lKCk7XG5cdH07XG5cblx0d29ya2VyRmFpbHVyZSA9ICgpOiB2b2lkID0+IHtcblx0XHR0aGlzLmZuRG9uZU9uZSgpO1xuXHR9O1xuXG5cdC8vIHByaXZhdGUgZnVuY3Rpb25zXG5cdHByaXZhdGUgZm5TdGFydE5ld0NodW5rID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGNodW5rID0gdGhpcy5jdHgucGFnZUNodW5rc1srK3RoaXMuY3R4LmN1cnJlbnRDaHVua0luZGV4XTtcblx0XHRpZiAoIWNodW5rKSB7XG5cdFx0XHRyZXR1cm47IC8vIGRvbmUhIHlheVxuXHRcdH1cblx0XHQvLyBzdGFydCB3b3JrZXJzIGZvciB0aGUgY3VycmVudCBjaHVua1xuXHRcdHRoaXMuY3R4LmNvdW50U3RhcnRlZCArPSBjaHVuay5sZW5ndGg7XG5cdFx0Zm9yIChjb25zdCBwYWdlIG9mIGNodW5rKSB7XG5cdFx0XHR0aGlzLmN0eC53b3JrZXIhKHBhZ2UsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIGZuRG9uZU9uZSA9ICgpOiB2b2lkID0+IHtcblx0XHR0aGlzLmN0eC5jb3VudEZpbmlzaGVkKys7XG5cdFx0Ly8gdXBkYXRlIG92ZXJhbGwgc3RhdHVzIGxpbmVcblx0XHRjb25zdCB0b3RhbCA9IHRoaXMuY3R4LnBhZ2VMaXN0IS5sZW5ndGg7XG5cdFx0aWYgKHRoaXMuY3R4LmNvdW50RmluaXNoZWQgPCB0b3RhbCkge1xuXHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKCgxMDAgKiB0aGlzLmN0eC5jb3VudEZpbmlzaGVkKSAvIHRvdGFsKTtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKGAke3Byb2dyZXNzfSVgKTtcblx0XHRcdC8vIHN0YXJ0IGEgbmV3IGNodW5rIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byB0aGUgZW5kIG9mIHRoZSBwcmV2aW91cyBjaHVuaywgYW5kXG5cdFx0XHQvLyB3ZSBoYXZlbid0IGFscmVhZHkgc3RhcnRlZCB0aGUgbmV4dCBvbmVcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5jdHguY291bnRGaW5pc2hlZCA+PSB0aGlzLmN0eC5jb3VudFN0YXJ0ZWQgLSBNYXRoLm1heCh0aGlzLmN0eC5vcHRpb25zLmNodW5rU2l6ZSAvIDEwLCAyKSAmJlxuXHRcdFx0XHRNYXRoLmZsb29yKHRoaXMuY3R4LmNvdW50RmluaXNoZWQgLyB0aGlzLmN0eC5vcHRpb25zLmNodW5rU2l6ZSkgPiB0aGlzLmN0eC5jdXJyZW50Q2h1bmtJbmRleFxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuZm5TdGFydE5ld0NodW5rKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLmN0eC5jb3VudEZpbmlzaGVkID09PSB0b3RhbCkge1xuXHRcdFx0Y29uc3Qgc3RhdHVzU3RyaW5nID0gYOWujOaIkO+8iCR7dGhpcy5jdHguY291bnRGaW5pc2hlZFN1Y2Nlc3N9LyR7dGhpcy5jdHguY291bnRGaW5pc2hlZH3mk43kvZzmiJDlip/lrozmiJDvvIlgO1xuXHRcdFx0aWYgKHRoaXMuY3R4LmNvdW50RmluaXNoZWRTdWNjZXNzIDwgdGhpcy5jdHguY291bnRGaW5pc2hlZCkge1xuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50Lndhcm4oc3RhdHVzU3RyaW5nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhzdGF0dXNTdHJpbmcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0dGhpcy5jdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0fVxuXHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHR0aGlzLmN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGN0eC5jb3VudEZpbmlzaGVkID4gdG90YWxcblx0XHRcdC8vIGp1c3QgZm9yIGdpZ2dsZXMhICh3ZWxsLCBzZXJpb3VzIGRlYnVnZ2luZywgYWN0dWFsbHkpXG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50Lndhcm4oXG5cdFx0XHRcdGAke3Vscygn5a6M5oiQ77yI5aSa5omn6KGM5LqGJywgJ+WujOaIkO+8iOWkmuWft+ihjOS6hicpICsgKHRoaXMuY3R4LmNvdW50RmluaXNoZWQgLSB0b3RhbCl95qyh77yJYFxuXHRcdFx0KTtcblx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0dGhpcy5jdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdH1cblx0fTtcbn1cblxuTW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gPSBCYXRjaE9wZXJhdGlvbjtcblxuLyoqXG4gKiBBIHNpbXBsZSBkcmFnZ2FibGUgd2luZG93LCBub3cgaW1wbGVtZW50ZWQgaW4gcGxhaW4galF1ZXJ5IChmb3JtZXJseSBqUXVlcnkgVUkncyBkaWFsb2cgZmVhdHVyZSkuXG4gKiBUaGUgZGlhbG9nIGNvbnNpc3RzIG9mIGEgZml4ZWQtcG9zaXRpb24gZnJhbWUgd2l0aCBhIHRpdGxlYmFyIChkcmFnZ2FibGUpLFxuICogYSBjb250ZW50IGFyZWEgKHRoZSBlbGVtZW50IGFjY2Vzc2libGUgYXMge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvdyNjb250ZW50fSksXG4gKiBhbmQgYSBidXR0b24gcGFuZSBhdCB0aGUgYm90dG9tLlxuICpcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICogQGNsYXNzXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgbWF4aW11bSBhbGxvd2FibGUgaGVpZ2h0IGZvciB0aGUgY29udGVudCBhcmVhLlxuICovXG5pbnRlcmZhY2UgTW9yZWJpdHNOYW1lc3BhY2Uge1xuXHRzaW1wbGVXaW5kb3c6IHR5cGVvZiBTaW1wbGVXaW5kb3c7XG59XG5cbmNsYXNzIFNpbXBsZVdpbmRvdyB7XG5cdGNvbnRlbnQ6IEhUTUxFbGVtZW50O1xuXHRidXR0b25zOiBIVE1MRWxlbWVudFtdID0gW107XG5cdGhlaWdodDogbnVtYmVyO1xuXHRoYXNGb290ZXJMaW5rcyA9IGZhbHNlO1xuXHRzY3JpcHROYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBmcmFtZTogSFRNTEVsZW1lbnQ7XG5cdHByaXZhdGUgb3ZlcmxheTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBtb2RhbCA9IGZhbHNlO1xuXHRwcml2YXRlIHN0YXRpYyB6SW5kZXhDb3VudGVyID0gMjAwO1xuXHRzdGF0aWMgc2V0QnV0dG9uc0VuYWJsZWQgPSAoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucyBidXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsICFlbmFibGVkKTtcblx0fTtcblxuXHRjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpIHtcblx0XHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHRjb250ZW50LmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctY29udGVudCc7XG5cdFx0Y29udGVudC5pZCA9IGBtb3JlYml0cy1kaWFsb2ctY29udGVudC0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTUpfWA7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQgPz8gNjAwO1xuXHRcdC8vIGdpdmUgdGhlIGRpYWxvZyB0aGUgZ2l2ZW4gd2lkdGggdmFsdWUgKGNsYW1wZWQgdG8gdGhlIHZpZXdwb3J0KSwgc28gaXQgY2FuIHBvc2l0aW9uIGFwcHJvcHJpYXRlbHlcblx0XHRjb25zdCB3aWR0aE51bSA9IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBOdW1iZXIucGFyc2VJbnQoU3RyaW5nKHdpZHRoIHx8IDgwMCksIDEwKSk7XG5cdFx0dGhpcy5mcmFtZSA9IHRoaXMuYnVpbGRGcmFtZSgpO1xuXHRcdHRoaXMuZnJhbWUuc3R5bGUud2lkdGggPSBgJHt3aWR0aE51bX1weGA7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5mcmFtZSk7XG5cdH1cblxuXHQvKiogQnVpbGQgdGhlIGRpYWxvZyBmcmFtZTogdGl0bGViYXIgKGRyYWdnYWJsZSksIGNvbnRlbnQgYW5kIGJ1dHRvbiBwYW5lLiAqL1xuXHRwcml2YXRlIGJ1aWxkRnJhbWUoKTogSFRNTEVsZW1lbnQge1xuXHRcdGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZnJhbWUuY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZyc7XG5cdFx0ZnJhbWUudGFiSW5kZXggPSAtMTsgLy8gZm9jdXNhYmxlLCBzbyB0aGUgRVNDIGtleWRvd24gbGlzdGVuZXIgcmVjZWl2ZXMgZXZlbnRzXG5cdFx0ZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRjb25zdCB0aXRsZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRpdGxlYmFyLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctdGl0bGViYXInO1xuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdHRpdGxlLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctdGl0bGUnO1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0Y2xvc2VCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctY2xvc2UnO1xuXHRcdGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHVscygn5YWz6ZetJywgJ+mXnOmWiScpKTtcblx0XHRjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdcXHUwMEQ3Jztcblx0XHRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9KTtcblx0XHR0aXRsZWJhci5hcHBlbmQodGl0bGUsIGNsb3NlQnV0dG9uKTtcblx0XHQvLyBkcmFnIHRoZSBkaWFsb2cgYnkgaXRzIHRpdGxlYmFyXG5cdFx0dGl0bGViYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRcdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHRhcmdldC5jbG9zZXN0KCcubW9yZWJpdHMtZGlhbG9nLWNsb3NlJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHJlY3QgPSB0aGlzLmZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3Qgb2Zmc2V0WCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG5cdFx0XHRjb25zdCBvZmZzZXRZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuXHRcdFx0Y29uc3Qgb25Nb3ZlID0gKG1vdmVFdmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR0aGlzLmZyYW1lLnN0eWxlLmxlZnQgPSBgJHttb3ZlRXZlbnQuY2xpZW50WCAtIG9mZnNldFh9cHhgO1xuXHRcdFx0XHR0aGlzLmZyYW1lLnN0eWxlLnRvcCA9IGAke21vdmVFdmVudC5jbGllbnRZIC0gb2Zmc2V0WX1weGA7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgb25VcCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3ZlKTtcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uVXApO1xuXHRcdFx0fTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW92ZSk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25VcCk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgYnV0dG9ucGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJ1dHRvbnBhbmUuY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1idXR0b25wYW5lJztcblx0XHRjb25zdCBidXR0b25zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGJ1dHRvbnNwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1idXR0b25zJztcblx0XHRjb25zdCBsaW5rc3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0bGlua3NzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctZm9vdGVybGlua3MnO1xuXHRcdGJ1dHRvbnBhbmUuYXBwZW5kKGJ1dHRvbnNwYW4sIGxpbmtzc3Bhbik7XG5cdFx0ZnJhbWUuYXBwZW5kKHRpdGxlYmFyLCB0aGlzLmNvbnRlbnQsIGJ1dHRvbnBhbmUpO1xuXHRcdC8vIEVTQyBjbG9zZXMgdGhlIGRpYWxvZyAoZm9ybWVybHkgalF1ZXJ5IFVJJ3MgY2xvc2VPbkVzY2FwZSBkZWZhdWx0KVxuXHRcdGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gZnJhbWU7XG5cdH1cblxuXHQvKipcblx0ICogRm9jdXNlcyB0aGUgZGlhbG9nLiBUaGlzIG1pZ2h0IHdvcmssIG9yIG9uIHRoZSBjb250cmFyeSwgaXQgbWlnaHQgbm90LlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0Zm9jdXMoKTogU2ltcGxlV2luZG93IHtcblx0XHRTaW1wbGVXaW5kb3cuekluZGV4Q291bnRlciArPSAxO1xuXHRcdHRoaXMuZnJhbWUuc3R5bGUuekluZGV4ID0gU3RyaW5nKFNpbXBsZVdpbmRvdy56SW5kZXhDb3VudGVyKTtcblx0XHRpZiAodGhpcy5vdmVybGF5KSB7XG5cdFx0XHR0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gU3RyaW5nKFNpbXBsZVdpbmRvdy56SW5kZXhDb3VudGVyIC0gMSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlcyB0aGUgZGlhbG9nLiBJZiB0aGlzIGlzIHNldCBhcyBhbiBldmVudCBoYW5kbGVyLCBpdCB3aWxsIHN0b3AgdGhlIGV2ZW50XG5cdCAqIGZyb20gZG9pbmcgYW55dGhpbmcgbW9yZS5cblx0ICpcblx0ICogQHBhcmFtIHtldmVudH0gW2V2ZW50XVxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0Y2xvc2UoZXZlbnQ/OiBFdmVudCk6IFNpbXBsZVdpbmRvdyB7XG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5vdmVybGF5KSB7XG5cdFx0XHR0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLm92ZXJsYXkgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmZyYW1lLnJlbW92ZSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNob3dzIHRoZSBkaWFsb2cuIENhbGxpbmcgZGlzcGxheSgpIG9uIGEgZGlhbG9nIHRoYXQgaGFzIHByZXZpb3VzbHkgYmVlbiBjbG9zZWRcblx0ICogbWlnaHQgd29yaywgYnV0IGl0IGlzIG5vdCBndWFyYW50ZWVkLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0ZGlzcGxheSgpOiBTaW1wbGVXaW5kb3cge1xuXHRcdC8vIHRoZSBmcmFtZSBpcyByZW1vdmVkIGZyb20gdGhlIERPTSBvbiBjbG9zZSgpOyByZWJ1aWxkIGl0IGlmIG5lZWRlZFxuXHRcdGlmICghdGhpcy5mcmFtZS5pc0Nvbm5lY3RlZCkge1xuXHRcdFx0dGhpcy5mcmFtZSA9IHRoaXMuYnVpbGRGcmFtZSgpO1xuXHRcdFx0Y29uc3QgYnV0dG9uc3BhbiA9ICQodGhpcy5mcmFtZSkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJykuZ2V0KDApO1xuXHRcdFx0aWYgKGJ1dHRvbnNwYW4pIHtcblx0XHRcdFx0aWYgKHRoaXMuYnV0dG9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0JChidXR0b25zcGFuKS5lbXB0eSgpLmFwcGVuZCh0aGlzLmJ1dHRvbnMpO1xuXHRcdFx0XHRcdGJ1dHRvbnNwYW4ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWVtcHR5Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnV0dG9uc3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknLCAnZGF0YS1lbXB0eScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmZyYW1lKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuc2NyaXB0TmFtZSkge1xuXHRcdFx0Y29uc3QgdGl0bGVTcGFuID0gJCh0aGlzLmZyYW1lKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLXRpdGxlJykuZ2V0KDApO1xuXHRcdFx0JCh0aGlzLmZyYW1lKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnKS5yZW1vdmUoKTtcblx0XHRcdGNvbnN0IHNjcmlwdG5hbWVzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0c2NyaXB0bmFtZXNwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJztcblx0XHRcdHNjcmlwdG5hbWVzcGFuLnRleHRDb250ZW50ID0gYCR7dGhpcy5zY3JpcHROYW1lfSBcXHUwMEI3IGA7IC8vIFUrMDBCNyBNSURETEUgRE9UID0gJm1pZGRvdDtcblx0XHRcdGlmICh0aXRsZVNwYW4pIHtcblx0XHRcdFx0JCh0aXRsZVNwYW4pLnByZXBlbmQoc2NyaXB0bmFtZXNwYW4pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5tb2RhbCAmJiAhdGhpcy5vdmVybGF5KSB7XG5cdFx0XHR0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRoaXMub3ZlcmxheS5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLW92ZXJsYXknO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5vdmVybGF5KTtcblx0XHR9XG5cdFx0dGhpcy5mb2N1cygpO1xuXHRcdHRoaXMuZnJhbWUuZm9jdXMoKTsgLy8gZm9jdXMgdGhlIGRpYWxvZywgc28ga2V5Ym9hcmQgZXZlbnRzIChFU0MpIHJlYWNoIGl0XG5cdFx0aWYgKHdpbmRvdy5zZXR1cFRvb2x0aXBzICYmIHdpbmRvdy5wZyAmJiB3aW5kb3cucGcucmUgJiYgd2luZG93LnBnLnJlLmRpZmYpIHtcblx0XHRcdC8vIHRpZSBpbiB3aXRoIE5BVlBPUFxuXHRcdFx0dGhpcy5mcmFtZS5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdFx0d2luZG93LnNldHVwVG9vbHRpcHModGhpcy5mcmFtZSk7XG5cdFx0fVxuXHRcdC8vIGNlbnRlciB0aGUgZGlhbG9nIGJlZm9yZSB0aGUgaGVpZ2h0IGFsZ29yaXRobSBtYXkgcmVwb3NpdGlvbiBpdFxuXHRcdHRoaXMuY2VudGVyKCk7XG5cdFx0dGhpcy5zZXRIZWlnaHQodGhpcy5oZWlnaHQpOyAvLyBpbml0IGhlaWdodCBhbGdvcml0aG1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKiBDZW50ZXIgdGhlIGRpYWxvZyAoaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LCBvciBhdCB0aGUgdG9wIHdoZW4gcmVxdWVzdGVkKS4gKi9cblx0cHJpdmF0ZSBjZW50ZXIocG9zaXRpb25Ub3AgPSBmYWxzZSk6IHZvaWQge1xuXHRcdGNvbnN0IHJlY3QgPSB0aGlzLmZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGNvbnN0IGxlZnQgPSBNYXRoLm1heCgwLCAod2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoKSAvIDIpO1xuXHRcdGNvbnN0IHRvcCA9IHBvc2l0aW9uVG9wID8gMCA6IE1hdGgubWF4KDAsICh3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodCkgLyAyKTtcblx0XHR0aGlzLmZyYW1lLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcblx0XHR0aGlzLmZyYW1lLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgZGlhbG9nIHRpdGxlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0ICovXG5cdHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBTaW1wbGVXaW5kb3cge1xuXHRcdGNvbnN0IHRpdGxlU3BhbiA9ICQodGhpcy5mcmFtZSkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy10aXRsZScpLmdldCgwKTtcblx0XHRpZiAodGl0bGVTcGFuKSB7XG5cdFx0XHR0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0aXRsZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgc2NyaXB0IG5hbWUsIGFwcGVhcmluZyBhcyBhIHByZWZpeCB0byB0aGUgdGl0bGUgdG8gaGVscCB1c2VycyBkZXRlcm1pbmUgd2hpY2hcblx0ICogdXNlciBzY3JpcHQgaXMgcHJvZHVjaW5nIHdoaWNoIGRpYWxvZy4gRm9yIGluc3RhbmNlLCBUd2lua2xlIG1vZHVsZXMgc2V0IHRoaXMgdG8gXCJUd2lua2xlXCIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdCAqL1xuXHRzZXRTY3JpcHROYW1lKG5hbWU6IHN0cmluZyk6IFNpbXBsZVdpbmRvdyB7XG5cdFx0dGhpcy5zY3JpcHROYW1lID0gbmFtZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBkaWFsb2cgd2lkdGguXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IFNpbXBsZVdpbmRvdyB7XG5cdFx0dGhpcy5mcmFtZS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBkaWFsb2cncyBtYXhpbXVtIGhlaWdodC4gVGhlIGRpYWxvZyB3aWxsIGF1dG8tc2l6ZSB0byBmaXQgaXRzIGNvbnRlbnRzLFxuXHQgKiBidXQgdGhlIGNvbnRlbnQgYXJlYSB3aWxsIGdyb3cgbm8gbGFyZ2VyIHRoYW4gdGhlIGhlaWdodCBnaXZlbiBoZXJlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdCAqL1xuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiBTaW1wbGVXaW5kb3cge1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdC8vIGZyb20gZGlzcGxheSB0aW1lIG9ud2FyZHMsIGxldCB0aGUgYnJvd3NlciBkZXRlcm1pbmUgdGhlIG9wdGltdW0gaGVpZ2h0LFxuXHRcdC8vIGFuZCBpbnN0ZWFkIGxpbWl0IHRoZSBoZWlnaHQgYXQgdGhlIGdpdmVuIHZhbHVlXG5cdFx0Ly8gbm90ZSB0aGF0IHRoZSBnaXZlbiBoZWlnaHQgd2lsbCBleGNsdWRlIHRoZSBhcHByb3guIDIwcHggdGhhdCB0aGUgalF1ZXJ5IFVJXG5cdFx0Ly8gY2hyb21lIGhhcyBpbiBoZWlnaHQgaW4gYWRkaXRpb24gdG8gdGhlIGhlaWdodCBvZiBhbiBlcXVpdmFsZW50IFwiY2xhc3NpY1wiXG5cdFx0Ly8gTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdFx0aWYgKHRoaXMuZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmZyYW1lLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodCAtIDJ9cHhgO1xuXHRcdFx0dGhpcy5jZW50ZXIodHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdH1cblx0XHR0aGlzLmNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7TnVtYmVyLnBhcnNlSW50KFN0cmluZyh0aGlzLmhlaWdodCAtIDMwKSwgMTApfXB4YDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGVsZW1lbnQgbm9kZSwgdXN1YWxseSBmcm9tIHJlbmRlcmluZ1xuXHQgKiBhIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LlxuXHQgKiBSZS1lbnVtZXJhdGVzIHRoZSBmb290ZXIgYnV0dG9ucywgYnV0IGxlYXZlcyB0aGUgZm9vdGVyIGxpbmtzIGFzIHRoZXkgYXJlLlxuXHQgKiBCZSBzdXJlIHRvIGNhbGwgdGhpcyBhdCBsZWFzdCBvbmNlIGJlZm9yZSB0aGUgZGlhbG9nIGlzIGRpc3BsYXllZC4uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50XG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdCAqL1xuXHRzZXRDb250ZW50KGNvbnRlbnQ6IEhUTUxFbGVtZW50KTogU2ltcGxlV2luZG93IHtcblx0XHR0aGlzLnB1cmdlQ29udGVudCgpO1xuXHRcdHRoaXMuYWRkQ29udGVudChjb250ZW50KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUgdG8gdGhlIGRpYWxvZyBjb250ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50XG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdCAqL1xuXHRhZGRDb250ZW50KGNvbnRlbnQ6IEhUTUxFbGVtZW50KTogU2ltcGxlV2luZG93IHtcblx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cdFx0Ly8gbG9vayBmb3Igc3VibWl0IGJ1dHRvbnMgaW4gdGhlIGNvbnRlbnQsIGhpZGUgdGhlbSwgYW5kIGFkZCBhIHByb3h5IGJ1dHRvbiB0byB0aGUgYnV0dG9uIHBhbmVcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpXG5cdFx0XHQuZWFjaCgoX2tleSwgdmFsdWUpID0+IHtcblx0XHRcdFx0dmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdGlmICh2YWx1ZS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcblx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPz8gJyc7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUudGV4dENvbnRlbnQpIHtcblx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS50ZXh0Q29udGVudDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSAn5o+Q5LqkJztcblx0XHRcdFx0fVxuXHRcdFx0XHRidXR0b24uY2xhc3NOYW1lID0gdmFsdWUuY2xhc3NOYW1lIHx8ICdzdWJtaXRCdXR0b25Qcm94eSc7XG5cdFx0XHRcdC8vIGhlcmUgaXMgYW4gaW5zdGFuY2Ugb2YgY2hlYXAgY29kaW5nLCBwcm9iYWJseSBhIG1lbW9yeS11c2FnZSBoaXQgaW4gdXNpbmcgYSBjbG9zdXJlIGhlcmVcblx0XHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHR2YWx1ZS5jbGljaygpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0KTtcblx0XHRcdFx0c2VsZi5idXR0b25zW3NlbGYuYnV0dG9ucy5sZW5ndGhdID0gYnV0dG9uO1xuXHRcdFx0fSk7XG5cdFx0Ly8gcmVtb3ZlIGFsbCBidXR0b25zIGZyb20gdGhlIGJ1dHRvbiBwYW5lIGFuZCByZS1hZGQgdGhlbVxuXHRcdGNvbnN0IGJ1dHRvbnNwYW4gPSAkKHRoaXMuZnJhbWUpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpLmdldCgwKTtcblx0XHRpZiAoYnV0dG9uc3Bhbikge1xuXHRcdFx0aWYgKHRoaXMuYnV0dG9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCQoYnV0dG9uc3BhbikuZW1wdHkoKS5hcHBlbmQodGhpcy5idXR0b25zKTtcblx0XHRcdFx0YnV0dG9uc3Bhbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJ1dHRvbnNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5JywgJ2RhdGEtZW1wdHknKTsgLy8gdXNlZCBieSBDU1Ncblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGFsbCBjb250ZW50cyBmcm9tIHRoZSBkaWFsb2csIGJhcnJpbmcgYW55IGZvb3RlciBsaW5rcy5cblx0ICpcblx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0ICovXG5cdHB1cmdlQ29udGVudCgpOiBTaW1wbGVXaW5kb3cge1xuXHRcdHRoaXMuYnV0dG9ucyA9IFtdO1xuXHRcdC8vIGRlbGV0ZSBhbGwgYnV0dG9ucyBpbiB0aGUgYnV0dG9ucGFuZVxuXHRcdCQodGhpcy5mcmFtZSkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJykuZW1wdHkoKTtcblx0XHR3aGlsZSAodGhpcy5jb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0Y29uc3QgW2ZpcnN0Q2hpbGRdID0gdGhpcy5jb250ZW50LmNoaWxkTm9kZXM7XG5cdFx0XHRpZiAoIWZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNvbnRlbnQucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYSBsaW5rIGluIHRoZSBib3R0b20tcmlnaHQgY29ybmVyIG9mIHRoZSBkaWFsb2cuXG5cdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBoZWxwIG9yIHBvbGljeSBsaW5rcy5cblx0ICogRm9yIGV4YW1wbGUsIFR3aW5rbGUncyBDU0QgbW9kdWxlIGFkZHMgYSBsaW5rIHRvIHRoZSBDU0QgcG9saWN5IHBhZ2UsXG5cdCAqIGFzIHdlbGwgYXMgYSBsaW5rIHRvIFR3aW5rbGUncyBkb2N1bWVudGF0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIERpc3BsYXkgdGV4dC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2lQYWdlIC0gTGluayB0YXJnZXQuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXA9ZmFsc2VdIC0gU2V0IHRydWUgdG8gcHJlcGVuZCByYXRoZXIgdGhhbiBhcHBlbmQuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdCAqL1xuXHRhZGRGb290ZXJMaW5rKHRleHQ6IHN0cmluZywgd2lraVBhZ2U6IHN0cmluZywgcHJlcD86IGJvb2xlYW4pOiBTaW1wbGVXaW5kb3cge1xuXHRcdGNvbnN0IGZvb3RlcmxpbmtzID0gJCh0aGlzLmZyYW1lKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJyk7XG5cdFx0aWYgKHRoaXMuaGFzRm9vdGVyTGlua3MpIHtcblx0XHRcdGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdGJ1bGxldC50ZXh0Q29udGVudCA9ICcgXFx1MjAyMiAnOyAvLyBVKzIwMjIgQlVMTEVUXG5cdFx0XHRpZiAocHJlcCkge1xuXHRcdFx0XHRmb290ZXJsaW5rcy5wcmVwZW5kKGJ1bGxldCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb290ZXJsaW5rcy5hcHBlbmQoYnVsbGV0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKHdpa2lQYWdlKSk7XG5cdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgd2lraVBhZ2UpO1xuXHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0bGluay50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0aWYgKHByZXApIHtcblx0XHRcdGZvb3RlcmxpbmtzLnByZXBlbmQobGluayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvb3RlcmxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHR9XG5cdFx0dGhpcy5oYXNGb290ZXJMaW5rcyA9IHRydWU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB3aGV0aGVyIHRoZSB3aW5kb3cgc2hvdWxkIGJlIG1vZGFsIG9yIG5vdC4gTW9kYWwgZGlhbG9ncyBjcmVhdGVcblx0ICogYW4gb3ZlcmxheSBiZWxvdyB0aGUgZGlhbG9nIGJ1dCBhYm92ZSBvdGhlciBwYWdlIGVsZW1lbnRzLiBUaGlzXG5cdCAqIG11c3QgYmUgdXNlZCAoaWYgbmVjZXNzYXJ5KSBiZWZvcmUgY2FsbGluZyBkaXNwbGF5KCkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW21vZGFsPWZhbHNlXSAtIElmIHNldCB0byB0cnVlLCBvdGhlciBpdGVtcyBvbiB0aGVcblx0ICogcGFnZSB3aWxsIGJlIGRpc2FibGVkLCBpLmUuLCBjYW5ub3QgYmUgaW50ZXJhY3RlZCB3aXRoLlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0c2V0TW9kYWxpdHkobW9kYWw6IGJvb2xlYW4pOiBTaW1wbGVXaW5kb3cge1xuXHRcdHRoaXMubW9kYWwgPSBtb2RhbDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5Nb3JlYml0cy5zaW1wbGVXaW5kb3cgPSBTaW1wbGVXaW5kb3c7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0LyoqIFByb3ZpZGVkIGJ5IHRoZSBOQVZQT1AgZ2FkZ2V0LCBpZiBwcmVzZW50ICh1c2VkIGZvciB0b29sdGlwcykuICovXG5cdFx0c2V0dXBUb29sdGlwcz86IChjb250ZW50OiBIVE1MRWxlbWVudCwgY29tcGxleD86IGJvb2xlYW4pID0+IHVua25vd247XG5cdFx0LyoqIFByb3ZpZGVkIGJ5IHRoZSBOQVZQT1AgZ2FkZ2V0LCBpZiBwcmVzZW50LiAqL1xuXHRcdHBnPzoge1xuXHRcdFx0cmU/OiB7XG5cdFx0XHRcdGRpZmY/OiB1bmtub3duO1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9XG5cdGludGVyZmFjZSBIVE1MRWxlbWVudCB7XG5cdFx0LyoqIFNldCBieSBOQVZQT1AgdG8gYXZvaWQgZG91YmxlLXByb2Nlc3Npbmcgb2YgYSBub2RlLiAqL1xuXHRcdHJhblNldHVwVG9vbHRpcHNBbHJlYWR5PzogYm9vbGVhbjtcblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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cjZCLE9BQU8ycUIsSUFBSTtJQUN4QjtBQUNBLFNBQUtrTSxpQkFBaUI7QUFDdEIsV0FBTztFQUNSOzs7Ozs7Ozs7O0VBV0EwRCxZQUFZdEQsT0FBOEI7QUFDekMsU0FBS0EsUUFBUUE7QUFDYixXQUFPO0VBQ1I7QUFDRDtBQUVBOTlCLFNBQVNxaEMsZUFBZTlEOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInVscyIsICJzaW1wbGlmaWVkIiwgInRyYWRpdGlvbmFsIiwgIndnVUxTIiwgIk1vcmViaXRzIiwgIndpbmRvdyIsICJsMTBuIiwgInJlZGlyZWN0VGFnQWxpYXNlcyIsICJzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQiLCAic3RyIiwgIl9yZ3hVVEMkZXhlYyIsICJyZ3hVVEMiLCAicmd4Q1NUIiwgIm1hdGNoIiwgImV4ZWMiLCAibWF0Y2hDU1QiLCAibW9udGgiLCAiZGF0ZSIsICJsb2NhbGVEYXRhIiwgIm1vbnRocyIsICJpbmRleE9mIiwgIk51bWJlciIsICJ1c2VySXNJbkdyb3VwIiwgImdyb3VwIiwgIl9tdyRjb25maWckZ2V0IiwgIl9tdyRjb25maWckZ2V0MiIsICJ1c2VyR3JvdXBzIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZ2xvYmFsR3JvdXBzIiwgImluY2x1ZGVzIiwgInVzZXJJc1N5c29wIiwgInNhbml0aXplSVB2NiIsICJhZGRyZXNzIiwgImNvbnNvbGUiLCAid2FybiIsICJpcCIsICJpc1BhZ2VSZWRpcmVjdCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBhZ2VOYW1lTm9ybSIsICJyZXBsYWNlIiwgInBhZ2VOYW1lUmVnZXgiLCAicGFnZU5hbWUiLCAiZmlyc3RDaGFyIiwgImNoYXJBdCIsICJyZW1haW5kZXIiLCAic3RyaW5nIiwgImVzY2FwZVJlZ0V4cCIsICJzbGljZSIsICJUaXRsZSIsICJwaHBDaGFyVG9VcHBlciIsICJ0b0xvd2VyQ2FzZSIsICJjb25jYXQiLCAiY3JlYXRlSHRtbCIsICJpbnB1dCIsICJmcmFnbWVudCIsICJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwgImVsZW1lbnRzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIk5vZGUiLCAiYXBwZW5kQ2hpbGQiLCAiXyQkcGFyc2VIVE1MIiwgIl9pdGVyYXRvcjIiLCAiJCIsICJwYXJzZUhUTUwiLCAicmVuZGVyV2lraWxpbmtzIiwgIl9zdGVwMiIsICJub2RlIiwgImVyciIsICJlIiwgImYiLCAidGV4dCIsICJ1YiIsICJ1bmJpbmRlciIsICJ1bmJpbmQiLCAiY29udGVudCIsICJfIiwgInRhcmdldCIsICJ0ZXh0XyIsICJ1dGlsIiwgImdldFVybCIsICJyZWJpbmQiLCAibmFtZXNwYWNlUmVnZXgiLCAibmFtZXNwYWNlcyIsICJfYWxpYXNlcyQiLCAibmFtZXNwYWNlTGlzdCIsICJhbGlhc2VzIiwgInJlZ2V4IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZSIsICJudW1iZXIiLCAibWFwIiwgImNoYXIiLCAiam9pbiIsICJRdWlja0Zvcm1FbGVtZW50IiwgIl9RdWlja0Zvcm1FbGVtZW50IiwgImRhdGEiLCAiY2hpbGRzIiwgImlkIiwgImNvbnN0cnVjdG9yIiwgImFwcGVuZCIsICJjaGlsZCIsICJyZW5kZXIiLCAiaW50ZXJuYWxTdWJncm91cElkIiwgImN1cnJlbnROb2RlIiwgImNvbXB1dGUiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiaW5JZCIsICJjaGlsZENvbnRhaW5lciIsICJsYWJlbCIsICJhZG1pbm9ubHkiLCAidHlwZSIsICJpIiwgImN1cnJlbnQiLCAic3Vibm9kZSIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzZXRBdHRyaWJ1dGUiLCAiZXZlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudFR5cGUiLCAiZnJhZ21lbnROb2RlIiwgInNlbGVjdCIsICJtdWx0aXBsZSIsICJzaXplIiwgIlN0cmluZyIsICJkaXNhYmxlZCIsICJsaXN0IiwgInZhbHVlcyIsICJzZWxlY3RlZCIsICJoaWRkZW4iLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3VySWQiLCAiY3VyRGl2IiwgInRvb2x0aXAiLCAiZ2VuZXJhdGVUb29sdGlwIiwgImNoZWNrZWQiLCAic3R5bGUiLCAic3ViZ3JvdXAiLCAidG1wZ3JvdXAiLCAic3ViZ3JvdXBSYXciLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZWwiLCAibmV3RWwiLCAic2hvd24iLCAiX3RhcmdldCRwYXJlbnROb2RlIiwgInBhcmVudE5vZGUiLCAiZm9ybSIsICJwcmV2aW91cyIsICJuYW1lcyIsICJfcHJldmlvdXMkcGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJfdGFyZ2V0JHBhcmVudE5vZGUyIiwgIl9zdWJub2RlJHBhcmVudE5vZGUiLCAiX3ByZXZpb3VzJHBhcmVudE5vZGUyIiwgInNoaWZ0Q2xpY2tTdXBwb3J0IiwgImNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQiLCAiUXVpY2tGb3JtIiwgImdldEVsZW1lbnRzIiwgInBsYWNlaG9sZGVyIiwgIl9pMiIsICJfYXJyIiwgImF0dCIsICJfaTMiLCAiX2FycjIiLCAiX2k0IiwgIl9hcnIzIiwgIm1pbiIsICJtYXgiLCAiUE9TSVRJVkVfSU5GSU5JVFkiLCAibGlzdE5vZGUiLCAibW9yZSIsICJuZXdOb2RlIiwgInN1Ymxpc3QiLCAiYXJlYSIsICJjb3VudGVyIiwgInN0b3BQcm9wYWdhdGlvbiIsICJtb3JlQnV0dG9uIiwgInN1YmxhYmVsIiwgInJlbW92ZSIsICJtYXhsZW5ndGgiLCAiZWxlbSIsICJtb3JlYnV0dG9uIiwgImxpc3Rub2RlIiwgIm5vZGVfIiwgImlucHV0bm9kZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAicmVtb3ZlQnV0dG9uIiwgInJlc3VsdCIsICJsYWJlbEVsZW1lbnQiLCAiY29scyIsICJyb3dzIiwgInJlcXVpcmVkIiwgInJlYWRvbmx5IiwgIkVycm9yIiwgInRvU3RyaW5nIiwgImV4dHJhIiwgIiRkYXRhIiwgInRvb2x0aXBUZXh0IiwgInRvb2x0aXBCdXR0b24iLCAidGltZXIiLCAicmVtb3ZlVG9vbHRpcCIsICJjbGVhclRpbWVvdXQiLCAic2hvd1Rvb2x0aXAiLCAidGV4dENvbnRlbnQiLCAiYm9keSIsICJidXR0b25SZWN0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJ0b29sdGlwUmVjdCIsICJ0b3AiLCAiYm90dG9tIiwgImhlaWdodCIsICJpbm5lckhlaWdodCIsICJNYXRoIiwgImxlZnQiLCAid2lkdGgiLCAiaW5uZXJXaWR0aCIsICJvbiIsICJtb3VzZWVudGVyIiwgInNldFRpbWVvdXQiLCAibW91c2VsZWF2ZSIsICJjbGljayIsICJfUXVpY2tGb3JtIiwgInJvb3QiLCAicmV0IiwgImdldElucHV0RGF0YSIsICJfaTUiLCAiX0FycmF5JGZyb20iLCAiQXJyYXkiLCAiZnJvbSIsICJmaWVsZCIsICJmaWVsZE5hbWVOb3JtIiwgImRhdGFzZXQiLCAidmFsIiwgInRyaW0iLCAiZmllbGROYW1lIiwgIiRmb3JtIiwgImVzY2FwZVNlbGVjdG9yIiwgIiRlbGVtZW50cyIsICJmaW5kIiwgInRvQXJyYXkiLCAiZ2V0Q2hlY2tib3hPclJhZGlvIiwgImVsZW1lbnRBcnJheSIsICJmb3VuZCIsICJmaWx0ZXIiLCAiZ2V0RWxlbWVudENvbnRhaW5lciIsICJIVE1MRmllbGRTZXRFbGVtZW50IiwgIkhUTUxEaXZFbGVtZW50IiwgIkhUTUxIZWFkaW5nRWxlbWVudCIsICJnZXRFbGVtZW50TGFiZWxPYmplY3QiLCAiSFRNTFRleHRBcmVhRWxlbWVudCIsICJnZXRFbGVtZW50TGFiZWwiLCAiZmlyc3RDaGlsZCIsICJzZXRFbGVtZW50TGFiZWwiLCAibGFiZWxUZXh0IiwgIm92ZXJyaWRlRWxlbWVudExhYmVsIiwgInRlbXBvcmFyeUxhYmVsVGV4dCIsICJoYXNBdHRyaWJ1dGUiLCAicmVzZXRFbGVtZW50TGFiZWwiLCAiZ2V0QXR0cmlidXRlIiwgInNldEVsZW1lbnRWaXNpYmlsaXR5IiwgInZpc2liaWxpdHkiLCAidG9nZ2xlIiwgInNldEVsZW1lbnRUb29sdGlwVmlzaWJpbGl0eSIsICJxdWlja0Zvcm0iLCAiSFRNTEZvcm1FbGVtZW50IiwgInByb3RvdHlwZSIsICJnZXRDaGVja2VkIiwgInJldHVybkFycmF5IiwgIkhUTUxTZWxlY3RFbGVtZW50IiwgIm9wdGlvbnMiLCAib3B0aW9uIiwgIkhUTUxJbnB1dEVsZW1lbnQiLCAiZ2V0VW5jaGVja2VkIiwgImlzSVB2NkFkZHJlc3MiLCAidG9VcHBlckNhc2UiLCAiYWJicmV2UG9zIiwgIkNJRFJTdGFydCIsICJhZGRyZXNzRW5kIiwgInJlcGVhdCIsICJwYWQiLCAicmVwbGFjZW1lbnQiLCAic3BsaXQiLCAiaXNSYW5nZSIsICJpcDIiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJpc0FycmF5IiwgIlR5cGVFcnJvciIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJzdHJpbmcyIiwgInBhdHRlcm4iLCAiaXNJbmZpbml0eSIsICJleHBpcnkiLCAiZm9ybWF0VGltZSIsICJ0aW1lIiwgIm0iLCAiYXBwZW5kUHVuY3R1YXRpb24iLCAicHVuY3R1YXRpb24iLCAic2VhcmNoIiwgImFycmF5IiwgInVuaXEiLCAiYXJyIiwgIml0ZW0iLCAiaWR4IiwgImR1cHMiLCAiY2h1bmsiLCAibnVtQ2h1bmtzIiwgImNlaWwiLCAiVW5iaW5kZXIiLCAicHJlZml4IiwgInBvc3RmaXgiLCAiaGlzdG9yeSIsICJyYW5kb20iLCAicmUiLCAiUmVnRXhwIiwgImdldENhbGxiYWNrIiwgImhhc093biIsICJzZWxmIiwgIk1vcmViaXRzRGF0ZSIsICJfZCIsICJtb250aHNTaG9ydCIsICJkYXlzIiwgImRheXNTaG9ydCIsICJyZWxhdGl2ZVRpbWVzIiwgInRoaXNEYXkiLCAicHJldkRheSIsICJuZXh0RGF5IiwgInRoaXNXZWVrIiwgInBhc3RXZWVrIiwgIm90aGVyIiwgInVuaXRNYXAiLCAic2Vjb25kcyIsICJtaW51dGVzIiwgImhvdXJzIiwgIndlZWtzIiwgInllYXJzIiwgImFyZ3MiLCAiX3RoaXMkX2QiLCAicGFyYW0iLCAidGVzdCIsICJkaWdpdE1hdGNoIiwgIkRhdGUiLCAiVVRDIiwgImRhdGVQYXJ0cyIsICJSZWZsZWN0IiwgImFwcGx5IiwgImlzVmFsaWQiLCAibG9nIiwgImlzTmFOIiwgImdldFRpbWUiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJnZXRVVENNb250aE5hbWUiLCAiX01vcmViaXRzJGRhdGUkbG9jYWxlIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ01vbnRoTmFtZUFiYnJldiIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGUyIiwgImdldE1vbnRoTmFtZSIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGUzIiwgImdldE1vbnRoIiwgImdldE1vbnRoTmFtZUFiYnJldiIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGU0IiwgImdldFVUQ0RheU5hbWUiLCAiX01vcmViaXRzJGRhdGUkbG9jYWxlNSIsICJnZXRVVENEYXkiLCAiZ2V0VVRDRGF5TmFtZUFiYnJldiIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGU2IiwgImdldERheU5hbWUiLCAiX01vcmViaXRzJGRhdGUkbG9jYWxlNyIsICJnZXREYXkiLCAiZ2V0RGF5TmFtZUFiYnJldiIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGU4IiwgImFkZCIsICJ1bml0IiwgIm51bSIsICJ1bml0Tm9ybSIsICJnZXR0ZXIiLCAic2V0dGVyIiwgImtleXMiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgImZvcm1hdHN0ciIsICJ6b25lIiwgInVkYXRlIiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInRvSVNPU3RyaW5nIiwgImxlbiIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJfcmVwbGFjZW1lbnRNYXAkbWF0Y2giLCAiY2FsZW5kYXIiLCAiZGF0ZURpZmYiLCAic2V0SG91cnMiLCAibW9udGhIZWFkZXJSZWdleCIsICJnZXRVVENGdWxsWWVhciIsICJtb250aEhlYWRlciIsICJoZWFkZXIiLCAiZGVsZWdhdGVkRGF0ZVByb3RvIiwgIl9pdGVyYXRvcjYiLCAiZ2V0T3duUHJvcGVydHlOYW1lcyIsICJfc3RlcDYiLCAiZnVuYyIsICJhc3NpZ24iLCAid2lraSIsICJudW1iZXJPZkFjdGlvbnNMZWZ0IiwgIm5ick9mQ2hlY2twb2ludHNMZWZ0IiwgImFjdGlvbkNvbXBsZXRlZCIsICJub3RpY2UiLCAic3RhdHVzIiwgInJlZGlyZWN0IiwgImZvbGxvd1JlZGlyZWN0IiwgImxvY2F0aW9uIiwgImhyZWYiLCAidGltZU91dCIsICJ3cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQiLCAiYWRkQ2hlY2twb2ludCIsICJyZW1vdmVDaGVja3BvaW50IiwgIldpa2lBcGkiLCAiY3VycmVudEFjdGlvbiIsICJvblN1Y2Nlc3MiLCAib25FcnJvciIsICJwYXJlbnQiLCAicXVlcnkiLCAicmVzcG9uc2UiLCAicmVzcG9uc2VYTUwiLCAic3RhdGVsZW0iLCAic3RhdHVzVGV4dCIsICJlcnJvckNvZGUiLCAiZXJyb3JUZXh0IiwgImJhZHRva2VuUmV0cnkiLCAic3RhdHVzRWxlbWVudCIsICJfdGhpcyRxdWVyeSIsICJhc3NlcnQiLCAiZXJyb3Jmb3JtYXQiLCAidXNlbGFuZyIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAic2V0U3RhdHVzRWxlbWVudCIsICJmb3JtYXR2ZXJzaW9uIiwgImVycm9yIiwgImFjdGlvbiIsICJ0YWdzIiwgIm1vcmViaXRzV2lraUNoYW5nZVRhZyIsICJzZXRQYXJlbnQiLCAicG9zdCIsICJjYWxsZXJBamF4UGFyYW1ldGVycyIsICJxdWVyeVN0cmluZ0FyciIsICJfaTYiLCAiX09iamVjdCRlbnRyaWVzMiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicXVlcnlTdHJpbmciLCAiYWpheHBhcmFtcyIsICJjb250ZXh0IiwgInVybCIsICJ3aWtpU2NyaXB0IiwgImRhdGFUeXBlIiwgImhlYWRlcnMiLCAibW9yZWJpdHNXaWtpQXBpVXNlckFnZW50IiwgImFqYXgiLCAidGhlbiIsICJvbkFQSXN1Y2Nlc3MiLCAiX2pzb25SZXNwb25zZSRlcnJvcnMkIiwgIl9qc29uUmVzcG9uc2UkZXJyb3JzIiwgImpzb25SZXNwb25zZSIsICJlcnJvcnMiLCAiY29kZSIsICJfanNvblJlc3BvbnNlJGVycm9ycyQyIiwgIl9qc29uUmVzcG9uc2UkZXJyb3JzMiIsICJodG1sIiwgIl9qc29uUmVzcG9uc2UkZXJyb3JzJDMiLCAiX2pzb25SZXNwb25zZSRlcnJvcnMzIiwgIl8kJGZpbmQkZXEkYXR0ciIsICJlcSIsICJhdHRyIiwgInJldHVybkVycm9yIiwgImNhbGwiLCAiaW5mbyIsICJEZWZlcnJlZCIsICJyZXNvbHZlV2l0aCIsICJvbkFQSWZhaWx1cmUiLCAiZXJyb3JUaHJvd24iLCAiYXBpIiwgImdldFRva2VuIiwgInRva2VuIiwgInJlamVjdFdpdGgiLCAiZ2V0U3RhdHVzRWxlbWVudCIsICJnZXRFcnJvckNvZGUiLCAiZ2V0RXJyb3JUZXh0IiwgImdldFhNTCIsICJnZXRSZXNwb25zZSIsICJzZXRBcGlVc2VyQWdlbnQiLCAidWEiLCAidG9rZW5BcGkiLCAibWV0YSIsICJhcGlvYmoiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRDYWNoZWRKc29uIiwgInRpdGxlIiwgInByb3AiLCAidGl0bGVzIiwgInJ2c2xvdHMiLCAicnZwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInVubGluayIsICJ3aWtpdGV4dDIiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiSlNPTiIsICJwYXJzZSIsICJlbXB0eUZ1bmN0aW9uIiwgIldpa2lQYWdlIiwgImN0eCIsICJwYWdlRXhpc3RzIiwgImVkaXRTdW1tYXJ5IiwgImNoYW5nZVRhZ3MiLCAidGVzdEFjdGlvbnMiLCAiY2FsbGJhY2tQYXJhbWV0ZXJzIiwgInBhZ2VUZXh0IiwgImVkaXRNb2RlIiwgImFwcGVuZFRleHQiLCAicHJlcGVuZFRleHQiLCAibmV3U2VjdGlvblRleHQiLCAibmV3U2VjdGlvblRpdGxlIiwgImNyZWF0ZU9wdGlvbiIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJwYWdlU2VjdGlvbiIsICJtYXhDb25mbGljdFJldHJpZXMiLCAibWF4UmV0cmllcyIsICJmb2xsb3dDcm9zc05zUmVkaXJlY3QiLCAid2F0Y2hsaXN0T3B0aW9uIiwgIndhdGNobGlzdEV4cGlyeSIsICJjcmVhdG9yIiwgInRpbWVzdGFtcCIsICJyZXZlcnRPbGRJRCIsICJtb3ZlRGVzdGluYXRpb24iLCAibW92ZVRhbGtQYWdlIiwgIm1vdmVTdWJwYWdlcyIsICJtb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJwcm90ZWN0RWRpdCIsICJwcm90ZWN0TW92ZSIsICJwcm90ZWN0Q3JlYXRlIiwgInByb3RlY3RDYXNjYWRlIiwgImxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJwYWdlTG9hZGVkIiwgImNzcmZUb2tlbiIsICJsb2FkVGltZSIsICJsYXN0RWRpdFRpbWUiLCAicGFnZUlEIiwgImNvbnRlbnRNb2RlbCIsICJyZXZlcnRDdXJJRCIsICJyZXZlcnRVc2VyIiwgIndhdGNoZWQiLCAiZnVsbHlQcm90ZWN0ZWQiLCAic3VwcHJlc3NQcm90ZWN0V2FybmluZyIsICJjb25mbGljdFJldHJpZXMiLCAicmV0cmllcyIsICJvbkxvYWRTdWNjZXNzIiwgIm9uTG9hZEZhaWx1cmUiLCAib25TYXZlU3VjY2VzcyIsICJvblNhdmVGYWlsdXJlIiwgIm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgIm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIiwgIm9uTW92ZVN1Y2Nlc3MiLCAib25Nb3ZlRmFpbHVyZSIsICJvbkRlbGV0ZVN1Y2Nlc3MiLCAib25EZWxldGVGYWlsdXJlIiwgIm9uVW5kZWxldGVTdWNjZXNzIiwgIm9uVW5kZWxldGVGYWlsdXJlIiwgIm9uUHJvdGVjdFN1Y2Nlc3MiLCAib25Qcm90ZWN0RmFpbHVyZSIsICJsb2FkUXVlcnkiLCAibG9hZEFwaSIsICJzYXZlQXBpIiwgImxvb2t1cENyZWF0aW9uQXBpIiwgIm1vdmVBcGkiLCAibW92ZVByb2Nlc3NBcGkiLCAicGF0cm9sQXBpIiwgInBhdHJvbFByb2Nlc3NBcGkiLCAiZGVsZXRlQXBpIiwgImRlbGV0ZVByb2Nlc3NBcGkiLCAidW5kZWxldGVBcGkiLCAidW5kZWxldGVQcm9jZXNzQXBpIiwgInByb3RlY3RBcGkiLCAicHJvdGVjdFByb2Nlc3NBcGkiLCAibG9hZCIsICJvbkZhaWx1cmUiLCAiaW5wcm9wIiwgImludGVzdGFjdGlvbnMiLCAiY3VydGltZXN0YW1wIiwgInJ2bGltaXQiLCAicnZzdGFydGlkIiwgInJlZGlyZWN0cyIsICJydnNlY3Rpb24iLCAiZm5Mb2FkU3VjY2VzcyIsICJzYXZlIiwgImNhblVzZU13VXNlclRva2VuIiwgImZuQ2FuVXNlTXdVc2VyVG9rZW4iLCAiY29uZmlybSIsICJzdW1tYXJ5IiwgInVzZXIiLCAid2F0Y2hsaXN0IiwgImZuQXBwbHlXYXRjaGxpc3RFeHBpcnkiLCAid2F0Y2hsaXN0ZXhwaXJ5IiwgInNlY3Rpb24iLCAibWlub3IiLCAibm90bWlub3IiLCAiYm90IiwgImFwcGVuZHRleHQiLCAicHJlcGVuZHRleHQiLCAic2VjdGlvbnRpdGxlIiwgInVuZG8iLCAidW5kb2FmdGVyIiwgImJhc2V0aW1lc3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZm5TYXZlU3VjY2VzcyIsICJmblNhdmVFcnJvciIsICJmbkF1dG9TYXZlIiwgInByZXBlbmQiLCAibmV3U2VjdGlvbiIsICJnZXRQYWdlTmFtZSIsICJnZXRQYWdlVGV4dCIsICJzZXRQYWdlVGV4dCIsICJzZXRBcHBlbmRUZXh0IiwgInNldFByZXBlbmRUZXh0IiwgInNldE5ld1NlY3Rpb25UZXh0IiwgInNldE5ld1NlY3Rpb25UaXRsZSIsICJzZXRFZGl0U3VtbWFyeSIsICJzZXRDaGFuZ2VUYWdzIiwgInNldENyZWF0ZU9wdGlvbiIsICJzZXRNaW5vckVkaXQiLCAic2V0Qm90RWRpdCIsICJzZXRQYWdlU2VjdGlvbiIsICJzZXRNYXhDb25mbGljdFJldHJpZXMiLCAic2V0TWF4UmV0cmllcyIsICJzZXRXYXRjaGxpc3QiLCAic2V0V2F0Y2hsaXN0RXhwaXJ5IiwgInNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyIsICJzZXRGb2xsb3dSZWRpcmVjdCIsICJzZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAiZmxhZyIsICJzZXRNb3ZlRGVzdGluYXRpb24iLCAiZGVzdGluYXRpb24iLCAic2V0TW92ZVRhbGtQYWdlIiwgInNldE1vdmVTdWJwYWdlcyIsICJzZXRNb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJzZXRFZGl0UHJvdGVjdGlvbiIsICJzZXRNb3ZlUHJvdGVjdGlvbiIsICJzZXRDcmVhdGVQcm90ZWN0aW9uIiwgInNldENhc2NhZGluZ1Byb3RlY3Rpb24iLCAic2V0T2xkSUQiLCAib2xkSUQiLCAiZ2V0Q3VycmVudElEIiwgImdldFJldmlzaW9uVXNlciIsICJnZXRMYXN0RWRpdFRpbWUiLCAic2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImdldENhbGxiYWNrUGFyYW1ldGVycyIsICJleGlzdHMiLCAiZ2V0UGFnZUlEIiwgImdldENvbnRlbnRNb2RlbCIsICJnZXRXYXRjaGVkIiwgImdldExvYWRUaW1lIiwgImdldENyZWF0b3IiLCAiZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCAiY2FuRWRpdCIsICJsb29rdXBDcmVhdGlvbiIsICJydmRpciIsICJmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJyZXZlcnQiLCAibW92ZSIsICJmblByZWZsaWdodENoZWNrcyIsICJmblByb2Nlc3NNb3ZlIiwgImZuTmVlZFRva2VuSW5mb1F1ZXJ5IiwgInBhdHJvbCIsICIkYm9keSIsICJwYXRyb2xocmVmIiwgInJjaWQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJmblByb2Nlc3NQYXRyb2wiLCAicGF0cm9sUXVlcnkiLCAicmNwcm9wIiwgInJjdGl0bGUiLCAicmNsaW1pdCIsICJkZWxldGVQYWdlIiwgImZuUHJvY2Vzc0RlbGV0ZSIsICJ1bmRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzVW5kZWxldGUiLCAicHJvdGVjdCIsICJmblByb2Nlc3NQcm90ZWN0IiwgImdldFByZWZpeGVkVGV4dCIsICJlZGl0UmVzdHJpY3Rpb24iLCAicGFnZW9iaiIsICJfcGFnZSRsYXN0cmV2aWQiLCAiZm5DaGVja1BhZ2VOYW1lIiwgInBhZ2UiLCAicmV2IiwgIm1pc3NpbmciLCAicGFnZWlkIiwgImNvbnRlbnRtb2RlbCIsICJlZGl0UHJvdCIsICJwcm90ZWN0aW9uIiwgImZpbmRMYXN0IiwgInByIiwgImxhc3RyZXZpZCIsICJ0ZXN0YWN0aW9ucyIsICJhY3Rpb25zIiwgIl9pNyIsICJfT2JqZWN0JGtleXMiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJpbnZhbGlkIiwgInJlc29sdmVkTmFtZSIsICJvcmlnTnMiLCAiZ2V0TmFtZXNwYWNlSWQiLCAibmV3TnMiLCAibmV3RXhwaXJ5IiwgInJlbCIsICJfcmVsJCIsICJfcmVsJDIiLCAiZWRpdCIsICJsaW5rIiwgImNhcHRjaGEiLCAicHVyZ2VRdWVyeSIsICJwdXJnZUFwaSIsICJzbGVlcCIsICJlcnJvckRhdGEiLCAiYWJ1c2VmaWx0ZXIiLCAiZGVzY3JpcHRpb24iLCAic3BhbSIsICJzcGFtYmxhY2tsaXN0IiwgIm1hdGNoZXMiLCAiaXNUZXh0UmVkaXJlY3QiLCAic29tZSIsICJ0YWciLCAiZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicmV2cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJmblByb2Nlc3NDaGVja3MiLCAiYWN0aW9uTWlzc2luZyIsICJwcm90ZWN0TWlzc2luZyIsICJzYWx0TWlzc2luZyIsICJlZGl0cHJvdCIsICJwYWdlVGl0bGUiLCAidG8iLCAibW92ZXRhbGsiLCAibW92ZXN1YnBhZ2VzIiwgIm5vcmVkaXJlY3QiLCAicmVjZW50Y2hhbmdlcyIsICJ1bnBhdHJvbGxlZCIsICJwYXRyb2xTdGF0IiwgImZuUHJvY2Vzc0RlbGV0ZUVycm9yIiwgImZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IiLCAicHJzIiwgIm1vdmVwcm90IiwgImNyZWF0ZXByb3QiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAic291cmNlIiwgImNhc2NhZGUiLCAicHJvdGVjdGlvbnMiLCAiZXhwaXJ5cyIsICJtaWxsaXNlY29uZHMiLCAiZGVmZXJyZWQiLCAicmVzb2x2ZSIsICJXaWtpUHJldmlldyIsICJwcmV2aWV3Ym94IiwgImJlZ2luUmVuZGVyIiwgImNsb3NlUHJldmlldyIsICJhZGRDbGFzcyIsICJoaWRlIiwgInNlY3Rpb25UaXRsZSIsICJzaG93IiwgInN0YXR1c3NwYW4iLCAiaW5pdCIsICJwc3QiLCAicHJldmlldyIsICJkaXNhYmxlbGltaXRyZXBvcnQiLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgInJlbmRlckFwaSIsICJmblJlbmRlclN1Y2Nlc3MiLCAiaW5uZXJIVE1MIiwgImxvYWRlciIsICJtb2R1bGVzdHlsZXMiLCAibW9kdWxlcyIsICJlbXB0eSIsICJwYXJzZVRlbXBsYXRlIiwgImNvdW50IiwgInVubmFtZWQiLCAiZXF1YWxzIiwgInBhcmFtZXRlcnMiLCAia2V5IiwgImZpbmRQYXJhbSIsICJmaW5hbCIsICJ0ZXN0MyIsICJhdCIsICJwb3AiLCAidGVzdDIiLCAiV2lraVRleHRQYWdlIiwgInJlbW92ZUxpbmsiLCAibGlua1RhcmdldCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm5hbWVzcGFjZUlEIiwgImdldE1haW5UZXh0IiwgImxpbmtSZWdleFN0cmluZyIsICJpc0ZpbGVPckNhdGVnb3J5IiwgImNvbG9uIiwgInNpbXBsZUxpbmtSZWdleCIsICJwaXBlZExpbmtSZWdleCIsICJjb21tZW50T3V0SW1hZ2UiLCAiaW1hZ2UiLCAiaW1hZ2VSZWdleFN0cmluZyIsICJsaW5rc1JlZ2V4IiwgImFsbExpbmtzIiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgImFsbExpbmsiLCAiZ2FsbGVyeUltYWdlUmVnZXgiLCAiZnJlZUltYWdlUmVnZXgiLCAiYWRkVG9JbWFnZUNvbW1lbnQiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAiZ2FsbGVyeVJlZ2V4IiwgIm5ld3RleHQiLCAicmVtb3ZlVGVtcGxhdGUiLCAidGVtcGxhdGUiLCAidGVtcGxhdGVSZWdleFN0cmluZyIsICJhbGxUZW1wbGF0ZXMiLCAiX2l0ZXJhdG9yMSIsICJfc3RlcDEiLCAiYWxsVGVtcGxhdGUiLCAiaW5zZXJ0QWZ0ZXJUZW1wbGF0ZXMiLCAiZmxhZ3MiLCAicHJlUmVnZXgiLCAiZ2V0VGV4dCIsICJ3aWtpdGV4dCIsICJVc2Vyc3BhY2VMb2dnZXIiLCAiaW5pdGlhbFRleHQiLCAiaGVhZGVyTGV2ZWwiLCAibG9nUGFnZU5hbWUiLCAibG9nVGV4dCIsICJzdW1tYXJ5VGV4dCIsICJkZWYiLCAicmVqZWN0IiwgIl9wYWdlb2JqJGdldExvYWRUaW1lIiwgInVzZXJzcGFjZUxvZ2dlciIsICJTdGF0dXMiLCAiX1N0YXR1cyIsICJzdGF0IiwgInN0YXRSYXciLCAidGV4dFJhdyIsICJsaW5rZWQiLCAiZ2VuZXJhdGUiLCAidXBkYXRlIiwgIkVsZW1lbnQiLCAiaGFzQ2hpbGROb2RlcyIsICJlcnJvckV2ZW50IiwgImhhbmRsZXIiLCAicHJpbnRVc2VyVGV4dCIsICJjb21tZW50cyIsICJtZXNzYWdlIiwgInAiLCAiZGl2IiwgIm1hcmdpblRvcCIsICJ3aGl0ZVNwYWNlIiwgImh0bWxOb2RlIiwgImNvbG9yIiwgImpRdWVyeVNlbGVjdG9yIiwgImpRdWVyeUNvbnRleHQiLCAibGFzdENoZWNrYm94IiwgImNsaWNrSGFuZGxlciIsICJjbGlja0hhbmRsZXIyIiwgInRoaXNDYiIsICJzaGlmdEtleSIsICJjYnMiLCAiaW5kZXgiLCAibGFzdEluZGV4IiwgImVuZFN0YXRlIiwgImZpbmlzaCIsICJCYXRjaE9wZXJhdGlvbiIsICJwYWdlTGlzdCIsICJjaHVua1NpemUiLCAicHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMiLCAid29ya2VyIiwgInBvc3RGaW5pc2giLCAiY291bnRTdGFydGVkIiwgImNvdW50RmluaXNoZWQiLCAiY291bnRGaW5pc2hlZFN1Y2Nlc3MiLCAiY3VycmVudENodW5rSW5kZXgiLCAicGFnZUNodW5rcyIsICJydW5uaW5nIiwgInNldFBhZ2VMaXN0IiwgInNldE9wdGlvbiIsICJvcHRpb25OYW1lIiwgIm9wdGlvblZhbHVlIiwgInJ1biIsICJ0b3RhbCIsICJmblN0YXJ0TmV3Q2h1bmsiLCAid29ya2VyU3VjY2VzcyIsICJhcmciLCAiYXJnV2l0aFBhZ2VJbmZvIiwgImZuRG9uZU9uZSIsICJ3b3JrZXJGYWlsdXJlIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAicHJvZ3Jlc3MiLCAicm91bmQiLCAiZmxvb3IiLCAic3RhdHVzU3RyaW5nIiwgImJhdGNoT3BlcmF0aW9uIiwgIlNpbXBsZVdpbmRvdyIsICJfU2ltcGxlV2luZG93IiwgImJ1dHRvbnMiLCAiaGFzRm9vdGVyTGlua3MiLCAic2NyaXB0TmFtZSIsICJmcmFtZSIsICJvdmVybGF5IiwgIm1vZGFsIiwgInpJbmRleENvdW50ZXIiLCAic2V0QnV0dG9uc0VuYWJsZWQiLCAiZW5hYmxlZCIsICJ3aWR0aE51bSIsICJidWlsZEZyYW1lIiwgInRhYkluZGV4IiwgImRpc3BsYXkiLCAidGl0bGViYXIiLCAiY2xvc2VCdXR0b24iLCAicHJldmVudERlZmF1bHQiLCAiY2xvc2UiLCAiYnV0dG9uIiwgImNsb3Nlc3QiLCAicmVjdCIsICJvZmZzZXRYIiwgImNsaWVudFgiLCAib2Zmc2V0WSIsICJjbGllbnRZIiwgIm9uTW92ZSIsICJtb3ZlRXZlbnQiLCAib25VcCIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImJ1dHRvbnBhbmUiLCAiYnV0dG9uc3BhbiIsICJsaW5rc3NwYW4iLCAiZm9jdXMiLCAiekluZGV4IiwgImlzQ29ubmVjdGVkIiwgInRpdGxlU3BhbiIsICJzY3JpcHRuYW1lc3BhbiIsICJzZXR1cFRvb2x0aXBzIiwgInBnIiwgImRpZmYiLCAicmFuU2V0dXBUb29sdGlwc0FscmVhZHkiLCAiY2VudGVyIiwgInNldEhlaWdodCIsICJwb3NpdGlvblRvcCIsICJzZXRUaXRsZSIsICJzZXRTY3JpcHROYW1lIiwgInNldFdpZHRoIiwgIm1heEhlaWdodCIsICJzZXRDb250ZW50IiwgInB1cmdlQ29udGVudCIsICJhZGRDb250ZW50IiwgImVhY2giLCAiX2tleSIsICJfdmFsdWUkZ2V0QXR0cmlidXRlIiwgImNoaWxkTm9kZXMiLCAiYWRkRm9vdGVyTGluayIsICJ3aWtpUGFnZSIsICJwcmVwIiwgImZvb3RlcmxpbmtzIiwgImJ1bGxldCIsICJzZXRNb2RhbGl0eSIsICJzaW1wbGVXaW5kb3ciXQp9Cg==
