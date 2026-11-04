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
//! src/morebits/morebits.ts
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
var import_ext_gadget = require("ext.gadget.Util");
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
  const elements = (0, import_ext_gadget.generateArray)(input);
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
  const namespaceList = (0, import_ext_gadget.generateArray)(namespaces);
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
              tmpgroup = (0, import_ext_gadget.generateArray)(tmpgroup);
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
      return m[1] + window.wgULS("小时", "小時");
    }
    if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
      return "".concat(m[1], "天");
    }
    if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
      return m[1] + window.wgULS("周", "週");
    }
    if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
      return m[1] + window.wgULS("个月", "個月");
    }
    if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
      return "".concat(m[1], "年");
    }
    if (Morebits.string.isInfinity(time.trim())) {
      return window.wgULS("无限期", "無限期");
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
        this.errorText = statusText + window.wgULS("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + window.wgULS("”。", "」。");
        return this.returnError();
      }
    );
  }
  returnError(callerAjaxParameters) {
    if (this.errorCode === "badtoken" && !this.badtokenRetry) {
      this.statelem.warn(window.wgULS("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
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
    const tokenApi = new Morebits.wiki.api(window.wgULS("获取令牌", "取得權杖"), {
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
    status || (status = window.wgULS("打开页面“", "打開頁面「") + pageName + window.wgULS("”", "」"));
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
    this.ctx.loadApi = new Morebits.wiki.api(window.wgULS("抓取页面……", "抓取頁面……"), this.ctx.loadQuery, this.fnLoadSuccess, this.ctx.statusElement, this.ctx.onLoadFailure);
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
    if (this.ctx.fullyProtected && !this.ctx.suppressProtectWarning && !confirm(this.ctx.fullyProtected === "infinity" ? window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + this.ctx.pageName + window.wgULS("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + this.ctx.pageName + window.wgULS("”（到期：", "」（到期：") + new Morebits.date(this.ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(window.wgULS("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
      this.ctx.statusElement.error(window.wgULS("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
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
    this.ctx.saveApi = new Morebits.wiki.api(window.wgULS("保存页面……", "儲存頁面……"), query, this.fnSaveSuccess, this.ctx.statusElement, this.fnSaveError);
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
    this.ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("抓取页面创建者信息", "抓取頁面建立者資訊"), query, this.fnLookupCreationSuccess, this.ctx.statusElement, this.ctx.onLookupCreationFailure);
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
      this.ctx.moveApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, this.fnProcessMove, this.ctx.statusElement, this.ctx.onMoveFailure);
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
      this.ctx.patrolApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), patrolQuery, this.fnProcessPatrol);
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
      this.ctx.deleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, this.fnProcessDelete, this.ctx.statusElement, this.ctx.onDeleteFailure);
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
      this.ctx.undeleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, this.fnProcessUndelete, this.ctx.statusElement, this.ctx.onUndeleteFailure);
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
    this.ctx.protectApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, this.fnProcessProtect, this.ctx.statusElement, this.ctx.onProtectFailure);
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
      this.ctx.statusElement.error(window.wgULS("未能获取编辑令牌。", "未能取得編輯權杖。"));
      this.ctx.onLoadFailure(this);
      return;
    }
    this.ctx.loadTime = this.ctx.loadApi.getResponse().curtimestamp;
    if (!this.ctx.loadTime) {
      this.ctx.statusElement.error(window.wgULS("未能获取当前时间戳。", "未能取得當前時間戳。"));
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
        this.ctx.statusElement.error(window.wgULS("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
        this.ctx.onLoadFailure(this);
        return;
      }
      this.ctx.revertUser = rev && rev.user || null;
      if (!this.ctx.revertUser) {
        if (rev && rev.userhidden) {
          this.ctx.revertUser = window.wgULS("<用户名已隐藏>", "<使用者名稱已隱藏>");
        } else {
          this.ctx.statusElement.error(window.wgULS("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
          this.ctx.onLoadFailure(this);
          return;
        }
      }
      this.ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(this.ctx.revertUser, " 所做出的").concat(window.wgULS("修订 ", "修訂 ")).concat(this.ctx.revertOldID, "：").concat(this.ctx.editSummary);
    }
    this.ctx.pageLoaded = true;
    this.ctx.onLoadSuccess(this);
  };
  // helper function to parse the page name returned from the API
  fnCheckPageName = (response, onFailure) => {
    const page = response.pages && response.pages[0];
    if (page) {
      if (page.invalid) {
        this.ctx.statusElement.error(window.wgULS("标题不合法：", "標題不合法：".concat(this.ctx.pageName)));
        onFailure(this);
        return false;
      }
      const resolvedName = page.title;
      if (response.redirects) {
        const origNs = new mw.Title(this.ctx.pageName).getNamespaceId();
        const newNs = new mw.Title(resolvedName).getNamespaceId();
        if (origNs !== newNs && !this.ctx.followCrossNsRedirect) {
          this.ctx.statusElement.error(this.ctx.pageName + window.wgULS("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + window.wgULS("，略过", "，略過"));
          onFailure(this);
          return false;
        }
        new Morebits.status(window.wgULS("信息", "資訊"), window.wgULS("从 ", "從 ") + this.ctx.pageName + window.wgULS(" 重定向到 ", " 重新導向到 ") + resolvedName);
      }
      this.ctx.pageName = resolvedName;
    } else {
      this.ctx.statusElement.error(window.wgULS("不能解析页面的重定向：", "不能解析頁面的重新導向：") + this.ctx.pageName);
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
      this.ctx.statusElement.error(window.wgULS("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
    } else {
      this.ctx.statusElement.error(window.wgULS("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
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
      const purgeApi = new Morebits.wiki.api(window.wgULS("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
        --Morebits.wiki.numberOfActionsLeft;
        this.ctx.statusElement.info(window.wgULS("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
        if (this.fnCanUseMwUserToken("edit")) {
          this.ctx.saveApi.post();
        } else {
          this.ctx.loadApi.post();
        }
      }, this.ctx.statusElement);
      purgeApi.post();
    } else if ((errorCode === null || errorCode === void 0) && this.ctx.retries++ < this.ctx.maxRetries) {
      this.ctx.statusElement.info(window.wgULS("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
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
          this.ctx.statusElement.error(window.wgULS("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
          break;
        case "abusefilter-disallowed":
          this.ctx.statusElement.error(window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + window.wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 Qiuwen_talk:管理员告示板 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Qiuwen_talk:管理員告示板 提報。"));
          break;
        case "abusefilter-warning":
          this.ctx.statusElement.error([window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, window.wgULS("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
          break;
        case "spamblacklist": {
          const [spam] = errorData.spamblacklist.matches;
          this.ctx.statusElement.error(window.wgULS("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + window.wgULS(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
          break;
        }
        default:
          this.ctx.statusElement.error(window.wgULS("不能保存修改：", "不能儲存修改：") + this.ctx.saveApi.getErrorText());
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
      this.ctx.statusElement.error(window.wgULS("无法找到", "無法找到") + this.ctx.pageName + window.wgULS("的任何修订版本", "的任何修訂版本"));
      this.ctx.onLookupCreationFailure(this);
      return;
    }
    if (!this.ctx.lookupNonRedirectCreator || !this.isTextRedirect(rev.content)) {
      this.ctx.creator = rev.user;
      if (!this.ctx.creator) {
        this.ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
      this.ctx.timestamp = rev.timestamp;
      if (!this.ctx.timestamp) {
        this.ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
      this.ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
      this.ctx.onLookupCreationSuccess(this);
    } else {
      this.ctx.lookupCreationApi.query["rvlimit"] = 50;
      this.ctx.lookupCreationApi.query["titles"] = this.ctx.pageName;
      this.ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("获取页面创建信息", "取得頁面建立資訊"), this.ctx.lookupCreationApi.query, this.fnLookupNonRedirectCreator, this.ctx.statusElement, this.ctx.onLookupCreationFailure);
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
        this.ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
    }
    if (!this.ctx.timestamp) {
      this.ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
      this.ctx.onLookupCreationFailure(this);
      return;
    }
    this.ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
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
      this.ctx.statusElement.error(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
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
      this.ctx.statusElement.error("".concat(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : window.wgULS("已经", "已經")), "存在"));
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
    if (editprot && !this.ctx.suppressProtectWarning && !confirm(window.wgULS("您即将对全保护页面“", "您即將對全保護頁面「") + this.ctx.pageName + (editprot.expiry === "infinity" ? window.wgULS("”（永久）", "」（永久）") : "".concat(window.wgULS("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + window.wgULS("”进行“", "」進行「") + action + window.wgULS("”操作", "」操作") + window.wgULS("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
      this.ctx.statusElement.error(window.wgULS("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
      onFailure(this);
      return false;
    }
    if (!response.tokens.csrftoken) {
      this.ctx.statusElement.error(window.wgULS("无法获取令牌。", "無法取得權杖。"));
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
    this.ctx.moveProcessApi = new Morebits.wiki.api(window.wgULS("移动页面……", "移動頁面……"), query, this.ctx.onMoveSuccess, this.ctx.statusElement, this.ctx.onMoveFailure);
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
    const patrolStat = new Morebits.status(window.wgULS("标记页面为已巡查", "標記頁面為已巡查"));
    this.ctx.patrolProcessApi = new Morebits.wiki.api(window.wgULS("巡查页面……", "巡查頁面……"), query, null, patrolStat);
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
    this.ctx.deleteProcessApi = new Morebits.wiki.api(window.wgULS("删除页面……", "刪除頁面……"), query, this.ctx.onDeleteSuccess, this.ctx.statusElement, this.fnProcessDeleteError);
    this.ctx.deleteProcessApi.setParent(this);
    this.ctx.deleteProcessApi.post();
  };
  // callback from deleteProcessApi.post()
  fnProcessDeleteError = () => {
    const errorCode = this.ctx.deleteProcessApi.getErrorCode();
    if (errorCode === "internal_api_error_DBQueryError" && this.ctx.retries++ < this.ctx.maxRetries) {
      this.ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
      --Morebits.wiki.numberOfActionsLeft;
      this.ctx.deleteProcessApi.post();
    } else if (errorCode === "missingtitle") {
      this.ctx.statusElement.error(window.wgULS("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
      if (this.ctx.onDeleteFailure) {
        this.ctx.onDeleteFailure.call(this, this.ctx.deleteProcessApi);
      }
    } else {
      this.ctx.statusElement.error(window.wgULS("无法删除页面：", "無法刪除頁面：") + this.ctx.deleteProcessApi.getErrorText());
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
    this.ctx.undeleteProcessApi = new Morebits.wiki.api(window.wgULS("还原页面……", "還原頁面……"), query, this.ctx.onUndeleteSuccess, this.ctx.statusElement, this.fnProcessUndeleteError);
    this.ctx.undeleteProcessApi.setParent(this);
    this.ctx.undeleteProcessApi.post();
  };
  // callback from undeleteProcessApi.post()
  fnProcessUndeleteError = () => {
    const errorCode = this.ctx.undeleteProcessApi.getErrorCode();
    if (errorCode === "internal_api_error_DBQueryError") {
      if (this.ctx.retries++ < this.ctx.maxRetries) {
        this.ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        this.ctx.undeleteProcessApi.post();
      } else {
        this.ctx.statusElement.error(window.wgULS("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
        if (this.ctx.onUndeleteFailure) {
          this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi);
        }
      }
    } else if (errorCode === "cantundelete") {
      this.ctx.statusElement.error(window.wgULS("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
      if (this.ctx.onUndeleteFailure) {
        this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi);
      }
    } else {
      this.ctx.statusElement.error(window.wgULS("无法还原页面：", "無法還原頁面：") + this.ctx.undeleteProcessApi.getErrorText());
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
      if ((!this.ctx.protectEdit || this.ctx.protectEdit.level !== "sysop" || !this.ctx.protectMove || this.ctx.protectMove.level !== "sysop") && !confirm(window.wgULS("您已对“", "您已對「") + this.ctx.pageName + window.wgULS("”启用了连锁保护", "」啟用了連鎖保護") + window.wgULS("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + window.wgULS("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
        this.ctx.statusElement.error(window.wgULS("连锁保护已取消。", "連鎖保護已取消。"));
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
    this.ctx.protectProcessApi = new Morebits.wiki.api(window.wgULS("保护页面……", "保護頁面……"), query, this.ctx.onProtectSuccess, this.ctx.statusElement, this.ctx.onProtectFailure);
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
      const renderApi = new Morebits.wiki.api(window.wgULS("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(window.wgULS("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(window.wgULS("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
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
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), window.wgULS("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
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
      statusElement: new Morebits.status(currentAction || window.wgULS("执行批量操作", "執行批次操作")),
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
      this.ctx.statusElement.error(window.wgULS("批量操作已在运行", "批次操作已在執行"));
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
      this.ctx.statusElement.info(window.wgULS("没有指定页面", "沒有指定頁面"));
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
      this.ctx.statusElement.warn("".concat(window.wgULS("完成（多执行了", "完成（多執行了") + (this.ctx.countFinished - total), "次）"));
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
    closeButton.setAttribute("aria-label", window.wgULS("关闭", "關閉"));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL21vcmViaXRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiEgVHdpbmtsZS5qcyAtIG1vcmViaXRzLnRzICovXG5cbi8qKlxuICogQSBsaWJyYXJ5IGZ1bGwgb2YgbG90cyBvZiBnb29kbmVzcyBmb3IgdXNlciBzY3JpcHRzIG9uIE1lZGlhV2lraSB3aWtpcy5cbiAqXG4gKiBUaGUgaGlnaGxpZ2h0cyBpbmNsdWRlOlxuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IC0gbWFrZSBjYWxscyB0byB0aGUgTWVkaWFXaWtpIEFQSVxuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSAtIG1vZGlmeSBwYWdlcyBvbiB0aGUgd2lraSAoZWRpdCwgcmV2ZXJ0LCBkZWxldGUsIGV0Yy4pXG4gKiAtIHtAbGluayBNb3JlYml0cy5kYXRlfSAtIGVuaGFuY2VkIGRhdGUgb2JqZWN0IHByb2Nlc3NpbmcsIHNvcnQgb2YgYSBsaWdodCBtb21lbnQuanNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gLSBnZW5lcmF0ZSBxdWljayBIVE1MIGZvcm1zIG9uIHRoZSBmbHlcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gLSBhIGRyYWdnYWJsZSBkaWFsb2cgd2luZG93IGltcGxlbWVudGVkIHdpdGggcGxhaW4galF1ZXJ5LCB3aXRoIGEgY3VzdG9tIGxvb2sgYW5kIGV4dHJhIGZlYXR1cmVzXG4gKiAtIHtAbGluayBNb3JlYml0cy5zdGF0dXN9IC0gYSByb3VnaC1hbmQtcmVhZHkgc3RhdHVzIG1lc3NhZ2UgZGlzcGxheWVyLCB1c2VkIGJ5IHRoZSBNb3JlYml0cy53aWtpIGNsYXNzZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0fSAtIHV0aWxpdGllcyBmb3IgZGVhbGluZyB3aXRoIHdpa2l0ZXh0XG4gKiAtIHtAbGluayBNb3JlYml0cy5zdHJpbmd9IC0gdXRpbGl0aWVzIGZvciBtYW5pcHVsYXRpbmcgc3RyaW5nc1xuICogLSB7QGxpbmsgTW9yZWJpdHMuYXJyYXl9IC0gdXRpbGl0aWVzIGZvciBtYW5pcHVsYXRpbmcgYXJyYXlzXG4gKiAtIHtAbGluayBNb3JlYml0cy5pcH0gLSB1dGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlc1xuICpcbiAqIERlcGVuZGVuY2llczpcbiAqIC0gVGhlIHdob2xlIHRoaW5nIHJlbGllcyBvbiBqUXVlcnkuICBCdXQgbW9zdCB3aWtpcyBzaG91bGQgcHJvdmlkZSB0aGlzIGJ5IGRlZmF1bHQuXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LCB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSwgYW5kIHtAbGluayBNb3JlYml0cy5zdGF0dXN9IHJlbHkgb24gdGhlIFwibW9yZWJpdHMuY3NzXCIgZmlsZSBmb3IgdGhlaXIgc3R5bGluZy5cbiAqIC0gVG8gY3JlYXRlIGEgZ2FkZ2V0IGJhc2VkIG9uIG1vcmViaXRzLCB1c2UgdGhpcyBzeW50YXggaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqR2FkZ2V0TmFtZVtSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlXXxtb3JlYml0cy5qc3xtb3JlYml0cy5jc3N8R2FkZ2V0TmFtZS5qc2BcbiAqIC0gQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBjb25maWd1cmUgbW9yZWJpdHMgYXMgYSBoaWRkZW4gZ2FkZ2V0IGluIE1lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb246XG4gKiAgICAgLSBgKm1vcmViaXRzW1Jlc291cmNlTG9hZGVyfGRlcGVuZGVuY2llcz1tZWRpYXdpa2kudXNlcixtZWRpYXdpa2kudXRpbCxtZWRpYXdpa2kuVGl0bGV8aGlkZGVuXXxtb3JlYml0cy5qc3xtb3JlYml0cy5jc3NgXG4gKiAgICAgYW5kIHRoZW4gbG9hZCBleHQuZ2FkZ2V0Lm1vcmViaXRzIGFzIG9uZSBvZiB0aGUgZGVwZW5kZW5jaWVzIGZvciB0aGUgbmV3IGdhZGdldC5cbiAqXG4gKiBBbGwgdGhlIHN0dWZmIGhlcmUgd29ya3Mgb24gYWxsIGJyb3dzZXJzIGZvciB3aGljaCBNZWRpYVdpa2kgcHJvdmlkZXMgSmF2YVNjcmlwdCBzdXBwb3J0LlxuICpcbiAqIFRoaXMgbGlicmFyeSBpcyBtYWludGFpbmVkIGJ5IHRoZSBtYWludGFpbmVycyBvZiBUd2lua2xlLlxuICogRm9yIHF1ZXJpZXMsIHN1Z2dlc3Rpb25zLCBoZWxwLCBldGMuLCBoZWFkIHRvIFtIZWxwOlR3aW5rbGVdKGh0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvSDpUVykuXG4gKiBUaGUgbGF0ZXN0IGRldmVsb3BtZW50IHNvdXJjZSBpcyBhdmFpbGFibGUgYXQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbWVkaWEtZ2FkZ2V0cy90d2lua2xlL2Jsb2IvbWFzdGVyL21vcmViaXRzLmpzfEdpdEh1Yn0uXG4gKlxuICogQG5hbWVzcGFjZSBNb3JlYml0c1xuICovXG5pbXBvcnQgJy4vbW9yZWJpdHMubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0TW9yZWJpdHM6IE1vcmViaXRzTmFtZXNwYWNlO1xuXHR9XG59XG5cbi8qKiBJbnB1dCBhY2NlcHRlZCBieSB7QGxpbmsgTW9yZWJpdHMuY3JlYXRlSHRtbH06IGEgc3RyaW5nLCBhIE5vZGUsIG9yIGFuIGFycmF5IHRoZXJlb2YuICovXG50eXBlIE1vcmViaXRzSHRtbElucHV0ID0gc3RyaW5nIHwgTm9kZSB8IChzdHJpbmcgfCBOb2RlKVtdIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuLyoqIFRoZSBjYWxsYWJsZSB7QGxpbmsgTW9yZWJpdHMuY3JlYXRlSHRtbH0sIHdpdGgge0BsaW5rIE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzfSBhdHRhY2hlZC4gKi9cbnR5cGUgTW9yZWJpdHNDcmVhdGVIdG1sID0gKChpbnB1dDogTW9yZWJpdHNIdG1sSW5wdXQpID0+IERvY3VtZW50RnJhZ21lbnQpICYge1xuXHRyZW5kZXJXaWtpbGlua3M6ICh0ZXh0OiBzdHJpbmcpID0+IHN0cmluZztcbn07XG5cbi8qKlxuICogVGhlIHNoYXBlIG9mIHRoZSBnbG9iYWwgYE1vcmViaXRzYCBuYW1lc3BhY2UuXG4gKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgZGVjbGFyYXRpb24tbWVyZ2VkOiBlYWNoIHNlY3Rpb24gb2YgdGhpcyBmaWxlIGNvbnRyaWJ1dGVzXG4gKiB0aGUgbWVtYmVycyBpdCBkZWZpbmVzLlxuICovXG5pbnRlcmZhY2UgTW9yZWJpdHNOYW1lc3BhY2Uge1xuXHQvKiogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHMuICovXG5cdGwxMG46IHR5cGVvZiBsMTBuO1xuXHQvKiogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy4gKi9cblx0dXNlcklzSW5Hcm91cDogKGdyb3VwOiBzdHJpbmcpID0+IGJvb2xlYW47XG5cdC8qKiBIYXJkY29kZXMgd2hldGhlciB0aGUgdXNlciBpcyBhIHN5c29wLCB1c2VkIGEgbG90LiAqL1xuXHR1c2VySXNTeXNvcDogYm9vbGVhbjtcblx0LyoqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS4gKi9cblx0c2FuaXRpemVJUHY2OiAoYWRkcmVzczogc3RyaW5nKSA9PiBzdHJpbmcgfCBudWxsO1xuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IHBhZ2UgaXMgYSByZWRpcmVjdCBvciBzb2Z0IHJlZGlyZWN0LiAqL1xuXHRpc1BhZ2VSZWRpcmVjdDogKCkgPT4gYm9vbGVhbjtcblx0LyoqIEEgbm9ybWFsaXplZCAodW5kZXJzY29yZXMgY29udmVydGVkIHRvIHNwYWNlcykgdmVyc2lvbiBvZiB0aGUgYHdnUGFnZU5hbWVgIHZhcmlhYmxlLiAqL1xuXHRwYWdlTmFtZU5vcm06IHN0cmluZztcblx0LyoqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGEgcGFnZSBuYW1lLiAqL1xuXHRwYWdlTmFtZVJlZ2V4OiAocGFnZU5hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuXHQvKiogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuICovXG5cdGNyZWF0ZUh0bWw6IE1vcmViaXRzQ3JlYXRlSHRtbDtcblx0LyoqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcy4gKi9cblx0bmFtZXNwYWNlUmVnZXg6IChuYW1lc3BhY2VzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBNb3JlYml0cyA9IHt9IGFzIE1vcmViaXRzTmFtZXNwYWNlO1xud2luZG93Lk1vcmViaXRzID0gTW9yZWJpdHM7IC8vIGFsbG93IGdsb2JhbCBhY2Nlc3Ncbi8vIE5vIE1vcmViaXRzLmkxOG4gYXQgdGhpcyB0aW1lXG5cbi8qKlxuICogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHNcbiAqL1xuY29uc3QgbDEwbiA9IHtcblx0LyoqXG5cdCAqIExvY2FsIGFsaWFzZXMgZm9yIFwicmVkaXJlY3RcIiBtYWdpYyB3b3JkLlxuXHQgKiBDaGVjayB1c2luZyBhcGkucGhwP2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZtZXRhPXNpdGVpbmZvJmZvcm1hdHZlcnNpb249MiZzaXByb3A9bWFnaWN3b3Jkc1xuXHQgKi9cblx0cmVkaXJlY3RUYWdBbGlhc2VzOiBbJyNSRURJUkVDVCcsICcj6YeN5a6a5ZCRJ10sXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHN0cmluZyBhcyBhcmd1bWVudCBhbmQgY2hlY2tzIGlmIGl0IGlzIGEgdGltZXN0YW1wIG9yIG5vdFxuXHQgKiBJZiBub3QsIGl0IHJldHVybnMgbnVsbC4gSWYgeWVzLCBpdCByZXR1cm5zIGFuIGFycmF5IG9mIGludGVnZXJzXG5cdCAqIGluIHRoZSBmb3JtYXQgW3llYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGUsIHNlY29uZF1cblx0ICogd2hpY2ggY2FuIGJlIHBhc3NlZCB0byBEYXRlLlVUQygpXG5cdCAqL1xuXHRzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQ6IChzdHI6IHN0cmluZyk6IG51bWJlcltdIHwgbnVsbCA9PiB7XG5cdFx0Y29uc3Qgcmd4VVRDID0gLyhcXGR7NH0p5bm0KFxcZHsxLDJ9KeaciChcXGR7MSwyfSnml6UgXFwoLlxcKSAoXFxkezJ9KTooXFxkezJ9KSBcXChVVENcXCkvOyAvLyBZWVlZ5bm0TW9udGjmnIhEROaXpSAodykgSEg6bW0gKFVUQylcblx0XHRjb25zdCByZ3hDU1QgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKENTVFxcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoQ1NUKVxuXHRcdGNvbnN0IG1hdGNoID0gKHJneFVUQy5leGVjKHN0cikgPz8gcmd4Q1NULmV4ZWMoc3RyKSkgYXMgW3N0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmddIHwgbnVsbDtcblx0XHRjb25zdCBtYXRjaENTVCA9IHJneENTVC5leGVjKHN0cik7XG5cdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IG1vbnRoID0gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRocy5pbmRleE9mKG1hdGNoWzRdKTtcblx0XHRpZiAobW9udGggPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Ly8gLi4uLi4geWVhciAuLi4uIG1vbnRoIC4uLiBkYXRlIC4uLi4gaG91ciAuLi4gbWludXRlXG5cdFx0cmV0dXJuIG1hdGNoQ1NUXG5cdFx0XHQ/IFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pIC0gMSwgTnVtYmVyKG1hdGNoWzNdKSwgTnVtYmVyKG1hdGNoWzRdKSAtIDgsIE51bWJlcihtYXRjaFs1XSldXG5cdFx0XHQ6IFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pIC0gMSwgTnVtYmVyKG1hdGNoWzNdKSwgTnVtYmVyKG1hdGNoWzRdKSwgTnVtYmVyKG1hdGNoWzVdKV07XG5cdH0sXG59O1xuTW9yZWJpdHMubDEwbiA9IGwxMG47XG5cbi8qKlxuICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXAgLSBlLmcuIGBzeXNvcGAsIGBhdXRvY29uZmlybWVkYCwgZXRjLlxuICovXG5Nb3JlYml0cy51c2VySXNJbkdyb3VwID0gKGdyb3VwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0Y29uc3QgdXNlckdyb3VwcyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuXHRjb25zdCBnbG9iYWxHcm91cHMgPSAobXcuY29uZmlnLmdldCgnd2dHbG9iYWxHcm91cHMnKSBhcyBzdHJpbmdbXSB8IHVuZGVmaW5lZCkgPz8gW107XG5cdHJldHVybiB1c2VyR3JvdXBzLmluY2x1ZGVzKGdyb3VwKSB8fCBnbG9iYWxHcm91cHMuaW5jbHVkZXMoZ3JvdXApO1xufTtcblxuLyoqXG4gKiBIYXJkY29kZXMgd2hldGhlciB0aGUgdXNlciBpcyBhIHN5c29wLCB1c2VkIGEgbG90LlxuICovXG5Nb3JlYml0cy51c2VySXNTeXNvcCA9XG5cdE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N5c29wJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3FpdXdlbicpO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cbiAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cbiAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cbiAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cbiAqL1xuTW9yZWJpdHMuc2FuaXRpemVJUHY2ID0gKGFkZHJlc3MpID0+IHtcblx0Y29uc29sZS53YXJuKFxuXHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLnNhbml0aXplSVB2NiB3YXMgcmVuYW1lZCB0byBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYgaW4gRmVicnVhcnkgMjAyMSwgcGxlYXNlIHVzZSB0aGF0IGluc3RlYWQnXG5cdCk7XG5cdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBwYWdlIGlzIGEgcmVkaXJlY3Qgb3Igc29mdCByZWRpcmVjdC4gRmFpbHNcbiAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG4gKiBkZXRlY3QgTW9kdWxlOlJmRCwgd2l0aCB0aGUgc2FtZSBmYWlsdXJlIHBvaW50cy5cbiAqL1xuTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgPSAoKSA9PiB7XG5cdHJldHVybiAhIShcblx0XHRtdy5jb25maWcuZ2V0KCd3Z0lzUmVkaXJlY3QnKSB8fFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2Z0cmVkaXJlY3QnKSB8fFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtUmZEJykgfHxcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94LVJlZGlyZWN0X2NhdGVnb3J5X3NoZWxsJylcblx0KTtcbn07XG5cbi8qKlxuICogQSBub3JtYWxpemVkICh1bmRlcnNjb3JlcyBjb252ZXJ0ZWQgdG8gc3BhY2VzKSB2ZXJzaW9uIG9mIHRoZVxuICogYHdnUGFnZU5hbWVgIHZhcmlhYmxlLlxuICovXG5Nb3JlYml0cy5wYWdlTmFtZU5vcm0gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGEgcGFnZSBuYW1lLiAgQWNjb3VudHMgZm9yXG4gKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG4gKiBjaGFyYWN0ZXJzIGJlaW5nIGVzY2FwZWQuICBTZWUgYWxzbyB7QGxpbmsgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXh9LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRm9yIGEgcGFnZSBuYW1lIGBGb28gYmFyYCwgcmV0dXJucyB0aGUgc3RyaW5nIGBbRmZdb29bXyBdYmFyYC5cbiAqL1xuTW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRpZiAocGFnZU5hbWUgPT09ICcnKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGNvbnN0IGZpcnN0Q2hhciA9IHBhZ2VOYW1lLmNoYXJBdCgwKTtcblx0Y29uc3QgcmVtYWluZGVyID0gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChwYWdlTmFtZS5zbGljZSgxKSk7XG5cdGlmIChtdy5UaXRsZS5waHBDaGFyVG9VcHBlcihmaXJzdENoYXIpICE9PSBmaXJzdENoYXIudG9Mb3dlckNhc2UoKSkge1xuXHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHR9XG5cdHJldHVybiBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKGZpcnN0Q2hhcikgKyByZW1haW5kZXI7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHN0cmluZyBvciBhcnJheSBvZiBET00gbm9kZXMgaW50byBhbiBIVE1MIGZyYWdtZW50LlxuICogV2lraWxpbmsgc3ludGF4IChgW1suLi5dXWApIGlzIHRyYW5zZm9ybWVkIGludG8gSFRNTCBhbmNob3IuXG4gKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IGNyZWF0ZUh0bWwgPSAoKGlucHV0OiBNb3JlYml0c0h0bWxJbnB1dCk6IERvY3VtZW50RnJhZ21lbnQgPT4ge1xuXHRjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0aWYgKCFpbnB1dCkge1xuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fVxuXHRjb25zdCBlbGVtZW50cyA9IGdlbmVyYXRlQXJyYXk8c3RyaW5nIHwgTm9kZT4oaW5wdXQpO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcblx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgJC5wYXJzZUhUTUwoY3JlYXRlSHRtbC5yZW5kZXJXaWtpbGlua3MoZWxlbWVudCkpID8/IFtdKSB7XG5cdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZnJhZ21lbnQ7XG59KSBhcyBNb3JlYml0c0NyZWF0ZUh0bWw7XG5cbk1vcmViaXRzLmNyZWF0ZUh0bWwgPSBjcmVhdGVIdG1sO1xuXG4vKipcbiAqIENvbnZlcnRzIHdpa2lsaW5rcyB0byBIVE1MIGFuY2hvciB0YWdzLlxuICovXG5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyA9ICh0ZXh0KSA9PiB7XG5cdGNvbnN0IHViID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHRleHQpO1xuXHQvLyBEb24ndCBjb252ZXJ0IHdpa2lsaW5rcyB3aXRoaW4gY29kZSB0YWdzIGFzIHRoZXkncmUgdXNlZCBmb3IgZGlzcGxheWluZyB3aWtpLWNvZGVcblx0dWIudW5iaW5kKCc8Y29kZT4nLCAnPC9jb2RlPicpO1xuXHR1Yi5jb250ZW50ID0gdWIuY29udGVudC5yZXBsYWNlKC9cXFtcXFs6Pyg/OihbXnxcXF1dKz8pXFx8KT8oW15cXF18XSs/KVxcXVxcXS9nLCAoXywgdGFyZ2V0OiBzdHJpbmcsIHRleHRfOiBzdHJpbmcpID0+IHtcblx0XHR0YXJnZXQgfHw9IHRleHRfO1xuXHRcdHJldHVybiBgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHttdy51dGlsLmdldFVybCh0YXJnZXQpfVwiIHRpdGxlPVwiJHt0YXJnZXQucmVwbGFjZShcblx0XHRcdC9cIi9nLFxuXHRcdFx0JyYjMzQ7J1xuXHRcdCl9XCI+JHt0ZXh0X308L2E+YDtcblx0fSk7XG5cdHJldHVybiB1Yi5yZWJpbmQoKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGZvciB1c2UgaW4gcmVnZXggbWF0Y2hpbmcgYWxsIG5hbWVzcGFjZSBhbGlhc2VzLCByZWdhcmRsZXNzXG4gKiBvZiB0aGUgY2FwaXRhbGl6YXRpb24gYW5kIHVuZGVyc2NvcmVzL3NwYWNlcy4gIERvZXNuJ3QgaW5jbHVkZSB0aGUgb3B0aW9uYWxcbiAqIGxlYWRpbmcgYDpgLCBidXQgaWYgdGhlcmUncyBtb3JlIHRoYW4gb25lIGl0ZW0sIHdyYXBzIHRoZSBsaXN0IGluIGFcbiAqIG5vbi1jYXB0dXJpbmcgZ3JvdXAuICBUaGlzIG1lYW5zIHlvdSBjYW4gZG8gYE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KFs0XSkgK1xuICogJzonICsgTW9yZWJpdHMucGFnZU5hbWVSZWdleCgnVHdpbmtsZScpYCB0byBtYXRjaCBhIGZ1bGwgcGFnZS4gIFVzZXNcbiAqIHtAbGluayBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4fS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyAnKD86W0ZmXVtJaV1bTGxdW0VlXXxbSWldW01tXVtBYV1bR2ddW0VlXSknXG4gKiBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNl0pXG4gKiBAcGFyYW0ge251bWJlcltdfSBuYW1lc3BhY2VzIC0gQXJyYXkgb2YgbmFtZXNwYWNlIG51bWJlcnMuICBVbnVzZWQvaW52YWxpZFxuICogbmFtZXNwYWNlIG51bWJlcnMgYXJlIHNpbGVudGx5IGRpc2NhcmRlZC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gUmVnZXgtc3VpdGFibGUgc3RyaW5nIG9mIGFsbCBuYW1lc3BhY2UgYWxpYXNlcy5cbiAqL1xuTW9yZWJpdHMubmFtZXNwYWNlUmVnZXggPSAobmFtZXNwYWNlcykgPT4ge1xuXHRjb25zdCBuYW1lc3BhY2VMaXN0ID0gZ2VuZXJhdGVBcnJheShuYW1lc3BhY2VzKTtcblx0Y29uc3QgYWxpYXNlczogc3RyaW5nW10gPSBbXTtcblx0bGV0IHJlZ2V4OiBzdHJpbmc7XG5cdGZvciAoY29uc3QgW25hbWUsIG51bWJlcl0gb2YgT2JqZWN0LmVudHJpZXMobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKSkpIHtcblx0XHRpZiAobmFtZXNwYWNlTGlzdC5pbmNsdWRlcyhudW1iZXIpKSB7XG5cdFx0XHQvLyBOYW1lc3BhY2VzIGFyZSBjb21wbGV0ZWx5IGFnbm9zdGljIGFzIHRvIGNhc2UsXG5cdFx0XHQvLyBhbmQgYSByZWdleCBzdHJpbmcgaXMgbW9yZSB1c2VmdWwvY29tcGF0aWJsZSB0aGFuIGEgUmVnRXhwIG9iamVjdCxcblx0XHRcdC8vIHNvIHdlIGFjY2VwdCBhbnkgY2FzaW5nIGZvciBhbnkgbGV0dGVyLlxuXHRcdFx0YWxpYXNlc1thbGlhc2VzLmxlbmd0aF0gPSBbLi4ubmFtZV0ubWFwKChjaGFyKSA9PiBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGNoYXIpKS5qb2luKCcnKTtcblx0XHR9XG5cdH1cblx0c3dpdGNoIChhbGlhc2VzLmxlbmd0aCkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlZ2V4ID0gJyc7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgMTpcblx0XHRcdHJlZ2V4ID0gYWxpYXNlc1swXSA/PyAnJztcblx0XHRcdGJyZWFrO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJlZ2V4ID0gYCg/OiR7YWxpYXNlcy5qb2luKCd8Jyl9KWA7XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gcmVnZXg7XG59O1xuXG4vKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnF1aWNrRm9ybSAqKioqKioqKioqKioqKioqICovXG5pbnRlcmZhY2UgTW9yZWJpdHNOYW1lc3BhY2Uge1xuXHQvKiogQ3JlYXRpb24gb2Ygc2ltcGxlIGFuZCBzdGFuZGFyZCBmb3JtcyB3aXRob3V0IG11Y2ggc3BlY2lmaWMgY29kaW5nLiAqL1xuXHRxdWlja0Zvcm06IHR5cGVvZiBRdWlja0Zvcm07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIEhUTUxGb3JtRWxlbWVudCB7XG5cdFx0bmFtZXM6IFJlY29yZDxzdHJpbmcsIEhUTUxJbnB1dEVsZW1lbnQ+O1xuXHRcdGdldENoZWNrZWQ6IChuYW1lOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpID0+IHN0cmluZ1tdO1xuXHRcdGdldFVuY2hlY2tlZDogKG5hbWU6IHN0cmluZywgdHlwZT86IHN0cmluZykgPT4gc3RyaW5nW107XG5cdH1cblx0aW50ZXJmYWNlIEhUTUxJbnB1dEVsZW1lbnQge1xuXHRcdHZhbHVlcz86IHN0cmluZztcblx0XHRzdWJncm91cD86IEhUTUxFbGVtZW50O1xuXHRcdHNob3duPzogYm9vbGVhbjtcblx0XHRzdWJsaXN0PzogUXVpY2tGb3JtRGF0YTtcblx0XHRhcmVhPzogSFRNTEVsZW1lbnQ7XG5cdFx0Y291bnRlcj86IG51bWJlcjtcblx0XHRsaXN0bm9kZT86IEhUTUxFbGVtZW50O1xuXHRcdGlucHV0bm9kZT86IEhUTUxFbGVtZW50O1xuXHRcdG1vcmVidXR0b24/OiBIVE1MRWxlbWVudDtcblx0fVxuXHRpbnRlcmZhY2UgSFRNTE9wdGlvbkVsZW1lbnQge1xuXHRcdHZhbHVlcz86IHN0cmluZztcblx0fVxuXHRpbnRlcmZhY2UgSFRNTEVsZW1lbnQge1xuXHRcdGV4dHJhPzogdW5rbm93bjtcblx0XHQvKiogVXNlZCBieSBtb3JlYml0cy5xdWlja0Zvcm0gb24gZ2VuZXJhdGVkIGVsZW1lbnRzIChtaXJyb3JzIHRoZSBuYXRpdmUgYGRpc2FibGVkYCBvZiBjb25jcmV0ZSBlbGVtZW50IHR5cGVzKS4gKi9cblx0XHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdFx0LyoqIFVzZWQgYnkgbW9yZWJpdHMucXVpY2tGb3JtIHRvIGNhcnJ5IHRoZSBgdmFsdWVgIG9mIGdlbmVyYXRlZCBpbnB1dHMvb3B0aW9ucy4gKi9cblx0XHR2YWx1ZXM/OiBzdHJpbmc7XG5cdH1cbn1cblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50aW5nIGEgcXVpY2tmb3JtIGVsZW1lbnQuIFNob3VsZCBzcGVjaWZ5IG9uZSBvZiB0aGUgYXZhaWxhYmxlXG4gKiB0eXBlcyBmcm9tIHRoZSBpbmRleCBvbiB7QGxpbmsgUXVpY2tGb3JtRWxlbWVudH0sIGFzIHdlbGwgYXMgYW55IHJlbGV2YW50IGFuZFxuICogYXZhaWxhYmxlIGF0dHJpYnV0ZXMuXG4gKi9cbmludGVyZmFjZSBRdWlja0Zvcm1EYXRhIHtcblx0LyoqIFRoZSB0eXBlIG9mIHRoZSBxdWlja2Zvcm0gZWxlbWVudCwgZS5nLiBgZm9ybWAsIGBpbnB1dGAsIGBjaGVja2JveGAsIGBzZWxlY3RgLCAuLi4gKi9cblx0dHlwZTogc3RyaW5nO1xuXHQvKiogR2xvYmFsIGF0dHJpYnV0ZTogaWQgKi9cblx0aWQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKiBHbG9iYWwgYXR0cmlidXRlOiBjbGFzc05hbWUgKi9cblx0Y2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKiogR2xvYmFsIGF0dHJpYnV0ZTogc3R5bGUgKi9cblx0c3R5bGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKiBHbG9iYWwgYXR0cmlidXRlOiB0b29sdGlwICovXG5cdHRvb2x0aXA/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKiBHbG9iYWwgYXR0cmlidXRlOiBleHRyYSAqL1xuXHRleHRyYT86IHVua25vd247XG5cdC8qKiBHbG9iYWwgYXR0cmlidXRlOiAkZGF0YSAqL1xuXHQkZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkO1xuXHQvKiogR2xvYmFsIGF0dHJpYnV0ZTogYWRtaW5vbmx5ICovXG5cdGFkbWlub25seT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKiBGdW5jdGlvbiB0byBleGVjdXRlIG9uIHRoZSByZWxldmFudCBldmVudC4gKi9cblx0ZXZlbnQ/OiAoKGV2ZW50OiBFdmVudCkgPT4gdW5rbm93bikgfCB1bmRlZmluZWQ7XG5cdC8qKiBUeXBlIG9mIHRoZSBldmVudCAoZm9yIGBmb3JtYCBlbGVtZW50cykuICovXG5cdGV2ZW50VHlwZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqIE5hbWUgb2YgdGhlIGVsZW1lbnQuICovXG5cdG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBMYWJlbCBvZiB0aGUgZWxlbWVudC4gYGRpdmAsIGBzZWxlY3RgLCBgZmllbGRgLCBgY2hlY2tib3hgL2ByYWRpb2AsIGBpbnB1dGAsXG5cdCAqIGB0ZXh0YXJlYWAsIGBoZWFkZXJgLCBhbmQgYGR5bmlucHV0YCBjYW4gYWNjZXB0IGFuIGFycmF5IG9mIGl0ZW1zLCBhbmQgdGhlXG5cdCAqIGxhYmVsIGl0ZW0ocykgY2FuIGJlIGBFbGVtZW50YHM7IGBvcHRpb25gLCBgb3B0Z3JvdXBgLCBgX2R5bmlucHV0X2VsZW1lbnRgLFxuXHQgKiBgc3VibWl0YCwgYW5kIGBidXR0b25gIGFjY2VwdCBvbmx5IGEgc2luZ2xlIHN0cmluZy5cblx0ICovXG5cdGxhYmVsPzogc3RyaW5nIHwgKHN0cmluZyB8IE5vZGUpW10gfCB1bmRlZmluZWQ7XG5cdC8qKiBWYWx1ZSBvZiB0aGUgZWxlbWVudC4gKi9cblx0dmFsdWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKiBMaXN0IG9mIGNoaWxkIGl0ZW1zIChmb3IgYHNlbGVjdGAsIGBvcHRncm91cGAsIGBjaGVja2JveGAsIGByYWRpb2AsIGBudW1iZXJgKS4gKi9cblx0bGlzdD86IFF1aWNrRm9ybURhdGFbXSB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqIFdoZXRoZXIgdGhlIGBzZWxlY3RgIGlzIGEgbXVsdGlwbGUgc2VsZWN0LiAqL1xuXHRtdWx0aXBsZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKiBTaXplIGF0dHJpYnV0ZSBvZiB0aGUgZWxlbWVudC4gKi9cblx0c2l6ZT86IG51bWJlciB8IHVuZGVmaW5lZDtcblx0LyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZGlzYWJsZWQuICovXG5cdGRpc2FibGVkPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqIFdoZXRoZXIgdGhlIGBvcHRpb25gIGlzIHNlbGVjdGVkLiAqL1xuXHRzZWxlY3RlZD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGhpZGRlbi4gKi9cblx0aGlkZGVuPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqIFdoZXRoZXIgdGhlIGBjaGVja2JveGAvYHJhZGlvYCAob3IgaXRzIGxpc3QgaXRlbSkgaXMgY2hlY2tlZC4gKi9cblx0Y2hlY2tlZD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKiBTdWJncm91cChzKSBvZiBhIGBjaGVja2JveGAvYHJhZGlvYCBpdGVtLiAqL1xuXHRzdWJncm91cD86IFF1aWNrRm9ybURhdGEgfCBRdWlja0Zvcm1EYXRhW10gfCB1bmRlZmluZWQ7XG5cdC8qKiBXaGV0aGVyIHRvIGFkZCBzaGlmdC1jbGljayBzdXBwb3J0IGZvciBgY2hlY2tib3hgIGxpc3RzLiAqL1xuXHRzaGlmdENsaWNrU3VwcG9ydD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKiBQbGFjZWhvbGRlciBhdHRyaWJ1dGUuICovXG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKiogTWF4bGVuZ3RoIGF0dHJpYnV0ZS4gKi9cblx0bWF4bGVuZ3RoPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXHQvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyByZXF1aXJlZC4gKi9cblx0cmVxdWlyZWQ/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyByZWFkb25seS4gKi9cblx0cmVhZG9ubHk/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKiogTWluIGF0dHJpYnV0ZSAoZm9yIGBudW1iZXJgIGFuZCBgZHluaW5wdXRgKS4gKi9cblx0bWluPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXHQvKiogTWF4IGF0dHJpYnV0ZSAoZm9yIGBudW1iZXJgIGFuZCBgZHluaW5wdXRgKS4gKi9cblx0bWF4PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXHQvKiogU3RlcCBhdHRyaWJ1dGUgKGZvciBgbnVtYmVyYCkuICovXG5cdHN0ZXA/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cdC8qKiBTdWJsYWJlbCBvZiB0aGUgYGR5bmlucHV0YCByb3dzLiAqL1xuXHRzdWJsYWJlbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqIENvbHMgYXR0cmlidXRlIG9mIGEgYHRleHRhcmVhYC4gKi9cblx0Y29scz86IG51bWJlciB8IHVuZGVmaW5lZDtcblx0LyoqIFJvd3MgYXR0cmlidXRlIG9mIGEgYHRleHRhcmVhYC4gKi9cblx0cm93cz86IG51bWJlciB8IHVuZGVmaW5lZDtcblx0Ly8gZHluaW5wdXQgaW50ZXJuYWxzIChgX2R5bmlucHV0X2VsZW1lbnRgKTpcblx0LyoqIEBpbnRlcm5hbCBXaGV0aGVyIHRoZSBkeW5pbnB1dCByb3cgaGFzIGEgXCJyZW1vdmVcIiBidXR0b24uICovXG5cdHJlbW92ZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKiBAaW50ZXJuYWwgVGhlIFwiYWRkXCIgYnV0dG9uIG9mIHRoZSBkeW5pbnB1dCBncm91cC4gKi9cblx0bW9yZWJ1dHRvbj86IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHQvKiogQGludGVybmFsIFRoZSBjb250YWluZXIgb2YgdGhlIGR5bmlucHV0IHJvd3MuICovXG5cdGxpc3Rub2RlPzogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG59XG5cbi8qKiBBIGZvcm0gY29udHJvbCAob3IgbGlzdCBvZiBjb250cm9scykgcmV0cmlldmVkIGJ5IG5hbWUgZnJvbSBhIGZvcm0uICovXG50eXBlIEZvcm1Db250cm9sT3JMaXN0ID0gSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgUmFkaW9Ob2RlTGlzdDtcblxuLyoqXG4gKiBUaGUgXCJhZGRcIiBidXR0b24gb2YgYSBgZHluaW5wdXRgIGdyb3VwLCBjYXJyeWluZyBib29ra2VlcGluZyBzdGF0ZS5cbiAqXG4gKiAoYG1heGAgaXMgb21pdHRlZCBhbmQgcmUtZGVjbGFyZWQgc2luY2UgYEhUTUxJbnB1dEVsZW1lbnQubWF4YCBpcyBhIHN0cmluZ1xuICogYXR0cmlidXRlIHJlZmxlY3Rpb24sIHdoaWxlIGR5bmlucHV0IHN0b3JlcyBhIG51bWVyaWMgbGltaXQgaGVyZS4pXG4gKi9cbnR5cGUgRHluaW5wdXRNb3JlQnV0dG9uID0gT21pdDxIVE1MSW5wdXRFbGVtZW50LCAnbWF4Jz4gJiB7XG5cdG1heDogbnVtYmVyO1xuXHRjb3VudGVyOiBudW1iZXI7XG5cdHN1Ymxpc3Q6IFF1aWNrRm9ybURhdGE7XG5cdGFyZWE6IEhUTUxFbGVtZW50O1xufTtcblxuLyoqIFRoZSBcInJlbW92ZVwiIGJ1dHRvbiBvZiBhIGBkeW5pbnB1dGAgcm93IGVsZW1lbnQuICovXG50eXBlIER5bmlucHV0UmVtb3ZlQnV0dG9uID0gSFRNTElucHV0RWxlbWVudCAmIHtcblx0aW5wdXRub2RlOiBIVE1MRWxlbWVudDtcblx0bGlzdG5vZGU6IEhUTUxFbGVtZW50O1xuXHRtb3JlYnV0dG9uOiBEeW5pbnB1dE1vcmVCdXR0b247XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBlbGVtZW50IGZvciB0aGUgdGhlIGZvcm0uXG4gKlxuICogSW5kZXggdG8gTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgdHlwZXM6XG4gKiAtIEdsb2JhbCBhdHRyaWJ1dGVzOiBpZCwgY2xhc3NOYW1lLCBzdHlsZSwgdG9vbHRpcCwgZXh0cmEsICRkYXRhLCBhZG1pbm9ubHlcbiAqIC0gYHNlbGVjdGA6IEEgY29tYm8gYm94IChha2EgZHJvcC1kb3duKS5cbiAqICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtdWx0aXBsZSwgc2l6ZSwgbGlzdCwgZXZlbnQsIGRpc2FibGVkXG4gKiAgLSBgb3B0aW9uYDogQW4gZWxlbWVudCBmb3IgYSBjb21ibyBib3guXG4gKiAgICAgIC0gQXR0cmlidXRlczogdmFsdWUsIGxhYmVsLCBzZWxlY3RlZCwgZGlzYWJsZWRcbiAqICAtIGBvcHRncm91cGA6IEEgZ3JvdXAgb2YgXCJvcHRpb25cInMuXG4gKiAgICAgIC0gQXR0cmlidXRlczogbGFiZWwsIGxpc3RcbiAqICAtIGBmaWVsZGA6IEEgZmllbGRzZXQgKGFrYSBncm91cCBib3gpLlxuICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuICogIC0gYGNoZWNrYm94YDogQSBjaGVja2JveC4gTXVzdCB1c2UgXCJsaXN0XCIgcGFyYW1ldGVyLlxuICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG4gKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcbiAqICAtIGByYWRpb2A6IEEgcmFkaW8gYnV0dG9uLiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG4gKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcbiAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuICogIC0gYGlucHV0YDogQSB0ZXh0IGlucHV0IGJveC5cbiAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIHNpemUsIHBsYWNlaG9sZGVyLCBtYXhsZW5ndGgsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHksIGV2ZW50XG4gKiAgLSBgbnVtYmVyYDogQSBudW1iZXIgaW5wdXQgYm94LlxuICogICAgICAtIEF0dHJpYnV0ZXM6IEV2ZXJ5dGhpbmcgdGhlIHRleHQgYGlucHV0YCBoYXMsIGFzIHdlbGwgYXM6IG1pbiwgbWF4LCBzdGVwLCBsaXN0XG4gKiAgLSBgZHluaW5wdXRgOiBBIHNldCBvZiB0ZXh0IGJveGVzIHdpdGggXCJSZW1vdmVcIiBidXR0b25zIGFuZCBhbiBcIkFkZFwiIGJ1dHRvbi5cbiAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbWluLCBtYXgsIHN1YmxhYmVsLCB2YWx1ZSwgc2l6ZSwgbWF4bGVuZ3RoLCBldmVudFxuICogIC0gYGhpZGRlbmA6IEFuIGludmlzaWJsZSBmb3JtIGZpZWxkLlxuICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIHZhbHVlXG4gKiAgLSBgaGVhZGVyYDogQSBsZXZlbCA1IGhlYWRlci5cbiAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbFxuICogIC0gYGRpdmA6IEEgZ2VuZXJpYyBwbGFjZWhvbGRlciBlbGVtZW50IG9yIGxhYmVsLlxuICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsXG4gKiAgLSBgc3VibWl0YDogQSBzdWJtaXQgYnV0dG9uLiBNb3JlYml0cy5zaW1wbGVXaW5kb3cgbW92ZXMgdGhlc2UgdG8gdGhlIGZvb3RlciBvZiB0aGUgZGlhbG9nLlxuICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuICogIC0gYGJ1dHRvbmA6IEEgZ2VuZXJpYyBidXR0b24uXG4gKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkLCBldmVudFxuICogIC0gYHRleHRhcmVhYDogQSBiaWcsIG11bHRpLWxpbmUgdGV4dCBib3guXG4gKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBjb2xzLCByb3dzLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5XG4gKiAgLSBgZnJhZ21lbnRgOiBBIERvY3VtZW50RnJhZ21lbnQgb2JqZWN0LlxuICogICAgICAtIE5vIGF0dHJpYnV0ZXMsIGFuZCBubyBnbG9iYWwgYXR0cmlidXRlcyBleGNlcHQgYWRtaW5vbmx5LlxuICogVGhlcmUgaXMgc29tZSBkaWZmZXJlbmNlIG9uIGhvdyB0eXBlcyBoYW5kbGUgdGhlIGBsYWJlbGAgYXR0cmlidXRlOlxuICogLSBgZGl2YCwgYHNlbGVjdGAsIGBmaWVsZGAsIGBjaGVja2JveGAvYHJhZGlvYCwgYGlucHV0YCwgYHRleHRhcmVhYCwgYGhlYWRlcmAsIGFuZCBgZHluaW5wdXRgIGNhbiBhY2NlcHQgYW4gYXJyYXkgb2YgaXRlbXMsXG4gKiBhbmQgdGhlIGxhYmVsIGl0ZW0ocykgY2FuIGJlIGBFbGVtZW50YHMuXG4gKiAtIGBvcHRpb25gLCBgb3B0Z3JvdXBgLCBgX2R5bmlucHV0X2VsZW1lbnRgLCBgc3VibWl0YCwgYW5kIGBidXR0b25gIGFjY2VwdCBvbmx5IGEgc2luZ2xlIHN0cmluZy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7UXVpY2tGb3JtRGF0YX0gZGF0YSAtIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIHF1aWNrZm9ybSBlbGVtZW50LiBTaG91bGRcbiAqIHNwZWNpZnkgb25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZXMgZnJvbSB0aGUgaW5kZXggYWJvdmUsIGFzIHdlbGwgYXMgYW55XG4gKiByZWxldmFudCBhbmQgYXZhaWxhYmxlIGF0dHJpYnV0ZXMuXG4gKiBAZXhhbXBsZSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuICogICAgIG5hbWU6ICd0YXJnZXQnLFxuICogICAgIHR5cGU6ICdpbnB1dCcsXG4gKiAgICAgbGFiZWw6ICdZb3VyIHRhcmdldDonLFxuICogICAgIHRvb2x0aXA6ICdFbnRlciB5b3VyIHRhcmdldC4gUmVxdWlyZWQuJyxcbiAqICAgICByZXF1aXJlZDogdHJ1ZVxuICogfSk7XG4gKi9cbmNsYXNzIFF1aWNrRm9ybUVsZW1lbnQge1xuXHRkYXRhOiBRdWlja0Zvcm1EYXRhO1xuXHRjaGlsZHM6IFF1aWNrRm9ybUVsZW1lbnRbXTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0c3RhdGljIGlkID0gMDtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBRdWlja0Zvcm1EYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLmNoaWxkcyA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGVuZHMgYW4gZWxlbWVudCB0byBjdXJyZW50IGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7UXVpY2tGb3JtRGF0YSB8IFF1aWNrRm9ybUVsZW1lbnR9IGRhdGEgLSBBIHF1aWNrRm9ybSBlbGVtZW50IG9yIHRoZSBvYmplY3QgcmVxdWlyZWQgdG9cblx0ICogY3JlYXRlIHRoZSBxdWlja0Zvcm0gZWxlbWVudC5cblx0ICogQHJldHVybnMge1F1aWNrRm9ybUVsZW1lbnR9IFRoZSBzYW1lIGVsZW1lbnQgcGFzc2VkIGluLlxuXHQgKi9cblx0YXBwZW5kKGRhdGE6IFF1aWNrRm9ybURhdGEgfCBRdWlja0Zvcm1FbGVtZW50KTogUXVpY2tGb3JtRWxlbWVudCB7XG5cdFx0bGV0IGNoaWxkOiBRdWlja0Zvcm1FbGVtZW50O1xuXHRcdGlmIChkYXRhIGluc3RhbmNlb2YgUXVpY2tGb3JtRWxlbWVudCkge1xuXHRcdFx0Y2hpbGQgPSBkYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZCA9IG5ldyBRdWlja0Zvcm1FbGVtZW50KGRhdGEpO1xuXHRcdH1cblx0XHR0aGlzLmNoaWxkc1t0aGlzLmNoaWxkcy5sZW5ndGhdID0gY2hpbGQ7XG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IGZvciB0aGUgcXVpY2tGb3JtIGVsZW1lbnQuICBUaGlzIHNob3VsZCBiZSBjYWxsZWRcblx0ICogd2l0aG91dCBwYXJhbWV0ZXJzOiBgZm9ybS5yZW5kZXIoKWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSBpbnRlcm5hbFN1Ymdyb3VwSWRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0cmVuZGVyKGludGVybmFsU3ViZ3JvdXBJZD86IG51bWJlciB8IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcblx0XHRjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuY29tcHV0ZSh0aGlzLmRhdGEsIGludGVybmFsU3ViZ3JvdXBJZCk7XG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcykge1xuXHRcdFx0Ly8gZG8gbm90IHBhc3MgaW50ZXJuYWxfc3ViZ3JvdXBfaWQgdG8gcmVjdXJzaXZlIGNhbGxzXG5cdFx0XHRjdXJyZW50Tm9kZVsxXS5hcHBlbmRDaGlsZChjaGlsZC5yZW5kZXIoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50Tm9kZVswXSBhcyBIVE1MRWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1F1aWNrRm9ybURhdGF9IGRhdGFcblx0ICogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IGluSWRcblx0ICogQHJldHVybnMge1tOb2RlLCBOb2RlXX1cblx0ICovXG5cdGNvbXB1dGUoZGF0YTogUXVpY2tGb3JtRGF0YSwgaW5JZD86IG51bWJlciB8IHN0cmluZyk6IFtOb2RlLCBOb2RlXSB7XG5cdFx0bGV0IG5vZGU6IEhUTUxFbGVtZW50O1xuXHRcdGxldCBjaGlsZENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0XHRsZXQgbGFiZWw6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdGNvbnN0IGlkID0gYCR7aW5JZCA/IGAke2luSWR9X2AgOiAnJ31ub2RlXyR7UXVpY2tGb3JtRWxlbWVudC5pZCsrfWA7XG5cdFx0aWYgKGRhdGEuYWRtaW5vbmx5ICYmICFNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0Ly8gaGVsbCBoYWNrIGFscGhhXG5cdFx0XHRkYXRhLnR5cGUgPSAnaGlkZGVuJztcblx0XHR9XG5cdFx0bGV0IGk6IG51bWJlcjtcblx0XHRsZXQgY3VycmVudDogUXVpY2tGb3JtRGF0YTtcblx0XHRsZXQgc3Vibm9kZTogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBbTm9kZSwgTm9kZV07XG5cdFx0c3dpdGNoIChkYXRhLnR5cGUpIHtcblx0XHRcdGNhc2UgJ2Zvcm0nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXHRcdFx0XHRub2RlLmNsYXNzTmFtZSA9ICdxdWlja2Zvcm0nO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZGF0YS5ldmVudFR5cGUgfHwgJ3N1Ym1pdCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZyYWdtZW50Jzoge1xuXHRcdFx0XHRjb25zdCBmcmFnbWVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XHRcdC8vIGZyYWdtZW50cyBjYW4ndCBoYXZlIGFueSBhdHRyaWJ1dGVzLCBzbyBqdXN0IHJldHVybiBpdCBzdHJhaWdodCBhd2F5XG5cdFx0XHRcdHJldHVybiBbZnJhZ21lbnROb2RlLCBmcmFnbWVudE5vZGVdO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnc2VsZWN0Jzoge1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBzZWxlY3QgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnc2l6ZScsIFN0cmluZyhkYXRhLnNpemUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGRhdGEubGlzdCBhcyBRdWlja0Zvcm1EYXRhW107XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBsaXN0W2ldIGFzIFF1aWNrRm9ybURhdGE7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5saXN0KSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRncm91cCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc2VsZWN0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ29wdGlvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlIGFzIHN0cmluZztcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRpZiAoZGF0YS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCBhcyBzdHJpbmcpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubGFiZWwgYXMgc3RyaW5nKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnb3B0Z3JvdXAnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCBhcyBzdHJpbmcpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGRhdGEubGlzdCBhcyBRdWlja0Zvcm1EYXRhW107XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBsaXN0W2ldIGFzIFF1aWNrRm9ybURhdGE7XG5cdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJzsgLy8gbXVzdCBiZSBvcHRpb25zIGhlcmVcblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHN1Ym5vZGVbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZpZWxkJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKSk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRpZiAoZGF0YS5uYW1lKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBkYXRhLmxpc3QgYXMgUXVpY2tGb3JtRGF0YVtdO1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJJZCA9IGAke2lkfV8ke2l9YDtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBsaXN0W2ldIGFzIFF1aWNrRm9ybURhdGE7XG5cdFx0XHRcdFx0XHRsZXQgY3VyRGl2OiBIVE1MRWxlbWVudDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnR5cGUgPT09ICdoZWFkZXInKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlubGluZSBoYWNrXG5cdFx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKSk7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50LmxhYmVsIGFzIHN0cmluZykpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdFx0UXVpY2tGb3JtRWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAoY3VyRGl2LCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5oaWRkZW4pIHtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUudmFsdWVzID0gY3VycmVudC52YWx1ZSBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50LnZhbHVlIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsIGRhdGEudHlwZSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIChjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0Ly8gSWYgbmFtZSBpcyBwcm92aWRlZCBvbiB0aGUgaW5kaXZpZHVhbCBjaGVja2JveCwgYWRkIGEgZGF0YS1zaW5nbGVcblx0XHRcdFx0XHRcdC8vIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXMgaXQgaXNuJ3QgcGFydCBvZiBhIGxpc3Qgb2YgY2hlY2tib3hlcyB3aXRoXG5cdFx0XHRcdFx0XHQvLyBzYW1lIG5hbWUuIFVzZWQgaW4gZ2V0SW5wdXREYXRhKClcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lm5hbWUpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2luZ2xlJywgJ2RhdGEtc2luZ2xlJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxhYmVsID0gY3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGN1cklkKTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0UXVpY2tGb3JtRWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwsIGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gc3R5bGVzIGdvIG9uIHRoZSBsYWJlbCwgZG9lc24ndCBtYWtlIHNlbnNlIHRvIHN0eWxlIGEgY2hlY2tib3gvcmFkaW9cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnN0eWxlKSB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjdXJyZW50LnN0eWxlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxldCBldmVudDogKChlOiBFdmVudCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5zdWJncm91cCkge1xuXHRcdFx0XHRcdFx0XHRsZXQgdG1wZ3JvdXA6IFF1aWNrRm9ybURhdGEgfCBRdWlja0Zvcm1EYXRhW10gPSBjdXJyZW50LnN1Ymdyb3VwO1xuXHRcdFx0XHRcdFx0XHR0bXBncm91cCA9IGdlbmVyYXRlQXJyYXk8UXVpY2tGb3JtRGF0YT4odG1wZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJncm91cFJhdyA9IG5ldyBRdWlja0Zvcm1FbGVtZW50KHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHRpZDogYCR7aWR9XyR7aX1fc3ViZ3JvdXBgLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbCBvZiB0bXBncm91cCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IG5ld0VsOiBRdWlja0Zvcm1EYXRhID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4uZWwsXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRuZXdFbC50eXBlIHx8PSBkYXRhLnR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwubmFtZSA9IGAke2N1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWV9LiR7bmV3RWwubmFtZX1gO1xuXHRcdFx0XHRcdFx0XHRcdHN1Ymdyb3VwUmF3LmFwcGVuZChuZXdFbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXAgPSBzdWJncm91cFJhdy5yZW5kZXIoY3VySWQpO1xuXHRcdFx0XHRcdFx0XHRzdWJncm91cC5jbGFzc05hbWUgPSAncXVpY2tmb3JtU3ViZ3JvdXAnO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnN1Ymdyb3VwID0gc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2hvd24gPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZTogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0LnBhcmVudE5vZGU/LmFwcGVuZENoaWxkKHRhcmdldC5zdWJncm91cCBhcyBIVE1MRWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge25hbWV9ID0gdGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtID0gdGFyZ2V0LmZvcm0gYXMgSFRNTEZvcm1FbGVtZW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwcmV2aW91cyA9IGZvcm0ubmFtZXNbbmFtZV07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChwcmV2aW91cyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJldmlvdXMucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQocHJldmlvdXMuc3ViZ3JvdXAgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvcm0ubmFtZXNbbmFtZV0gPSB0YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldC5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZCh0YXJnZXQuc3ViZ3JvdXAgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRzdWJub2RlLnBhcmVudE5vZGU/LmFwcGVuZENoaWxkKHN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZTogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge25hbWV9ID0gdGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybSA9IHRhcmdldC5mb3JtIGFzIEhUTUxGb3JtRWxlbWVudDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHByZXZpb3VzID0gZm9ybS5uYW1lc1tuYW1lXTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChwcmV2aW91cyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByZXZpb3VzLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHByZXZpb3VzLnN1Ymdyb3VwIGFzIEhUTUxFbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBmb3JtLm5hbWVzW25hbWVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhZGQgdXNlcnMnIGV2ZW50IGxhc3QsIHNvIGl0IGNhbiBpbnRlcmFjdCB3aXRoIHRoZSBzdWJncm91cFxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnQuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjdXJyZW50LmV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2hpZnRDbGlja1N1cHBvcnQgJiYgZGF0YS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydChRdWlja0Zvcm0uZ2V0RWxlbWVudHMobm9kZSwgZGF0YS5uYW1lIGFzIHN0cmluZykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyBpbnB1dCBpcyBhY3R1YWxseSBhIHRleHQtdHlwZSwgc28gbnVtYmVyIGhlcmUgaW5oZXJpdHMgdGhlIHNhbWUgc3R1ZmZcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdC8vIEFkZCB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgYXR0cnNcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGRhdGEucGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lIGFzIHN0cmluZyk7XG5cdFx0XHRcdGlmIChkYXRhLnR5cGUgPT09ICdpbnB1dCcpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWydtaW4nLCAnbWF4JywgJ3N0ZXAnLCAnbGlzdCddIGFzIGNvbnN0KSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgU3RyaW5nKGRhdGFbYXR0XSkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ3ZhbHVlJywgJ3NpemUnLCAncGxhY2Vob2xkZXInLCAnbWF4bGVuZ3RoJ10gYXMgY29uc3QpIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIFN0cmluZyhkYXRhW2F0dF0pKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWydkaXNhYmxlZCcsICdyZXF1aXJlZCcsICdyZWFkb25seSddIGFzIGNvbnN0KSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBhdHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzdWJub2RlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2R5bmlucHV0Jzoge1xuXHRcdFx0XHRjb25zdCBtaW4gPSBkYXRhLm1pbiB8fCAxO1xuXHRcdFx0XHRjb25zdCBtYXggPSBkYXRhLm1heCB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JykpO1xuXHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0Y29uc3QgbGlzdE5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdFx0Y29uc3QgbW9yZSA9IHRoaXMuY29tcHV0ZSh7XG5cdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0bGFiZWw6ICfmm7TlpJonLFxuXHRcdFx0XHRcdGRpc2FibGVkOiBtaW4gPj0gbWF4LFxuXHRcdFx0XHRcdGV2ZW50OiAoZTogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIER5bmlucHV0TW9yZUJ1dHRvbjtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgUXVpY2tGb3JtRWxlbWVudCh0YXJnZXQuc3VibGlzdCk7XG5cdFx0XHRcdFx0XHR0YXJnZXQuYXJlYS5hcHBlbmRDaGlsZChuZXdOb2RlLnJlbmRlcigpKTtcblx0XHRcdFx0XHRcdGlmICgrK3RhcmdldC5jb3VudGVyID49IHRhcmdldC5tYXgpIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQobW9yZVswXSk7XG5cdFx0XHRcdGNvbnN0IG1vcmVCdXR0b24gPSBtb3JlWzFdIGFzIER5bmlucHV0TW9yZUJ1dHRvbjtcblx0XHRcdFx0Y29uc3Qgc3VibGlzdDogUXVpY2tGb3JtRGF0YSA9IHtcblx0XHRcdFx0XHR0eXBlOiAnX2R5bmlucHV0X2VsZW1lbnQnLFxuXHRcdFx0XHRcdGxhYmVsOiBkYXRhLnN1YmxhYmVsIHx8IGRhdGEubGFiZWwsXG5cdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0XHRcdHZhbHVlOiBkYXRhLnZhbHVlLFxuXHRcdFx0XHRcdHNpemU6IGRhdGEuc2l6ZSxcblx0XHRcdFx0XHRyZW1vdmU6IGZhbHNlLFxuXHRcdFx0XHRcdG1heGxlbmd0aDogZGF0YS5tYXhsZW5ndGgsXG5cdFx0XHRcdFx0ZXZlbnQ6IGRhdGEuZXZlbnQsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtaW47ICsraSkge1xuXHRcdFx0XHRcdGNvbnN0IGVsZW0gPSBuZXcgUXVpY2tGb3JtRWxlbWVudChzdWJsaXN0KTtcblx0XHRcdFx0XHRsaXN0Tm9kZS5hcHBlbmRDaGlsZChlbGVtLnJlbmRlcigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJsaXN0LnJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdHN1Ymxpc3QubW9yZWJ1dHRvbiA9IG1vcmVCdXR0b247XG5cdFx0XHRcdHN1Ymxpc3QubGlzdG5vZGUgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5zdWJsaXN0ID0gc3VibGlzdDtcblx0XHRcdFx0bW9yZUJ1dHRvbi5hcmVhID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24ubWF4ID0gbWF4IC0gbWluO1xuXHRcdFx0XHRtb3JlQnV0dG9uLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ19keW5pbnB1dF9lbGVtZW50Jzpcblx0XHRcdFx0Ly8gUHJpdmF0ZSwgc2ltaWxhciB0byBub3JtYWwgaW5wdXRcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsIGFzIHN0cmluZykpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgYXMgc3RyaW5nKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBTdHJpbmcoZGF0YS5zaXplKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubWF4bGVuZ3RoKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIFN0cmluZyhkYXRhLm1heGxlbmd0aCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZW1vdmUpIHtcblx0XHRcdFx0XHRjb25zdCByZW1vdmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpCcsXG5cdFx0XHRcdFx0XHRldmVudDogKGU6IEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIER5bmlucHV0UmVtb3ZlQnV0dG9uO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBsaXN0ID0gdGFyZ2V0Lmxpc3Rub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBub2RlXyA9IHRhcmdldC5pbnB1dG5vZGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1vcmUgPSB0YXJnZXQubW9yZWJ1dHRvbjtcblx0XHRcdFx0XHRcdFx0bGlzdC5yZW1vdmVDaGlsZChub2RlXyk7XG5cdFx0XHRcdFx0XHRcdC0tbW9yZS5jb3VudGVyO1xuXHRcdFx0XHRcdFx0XHRtb3JlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChyZW1vdmVbMF0pO1xuXHRcdFx0XHRcdGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHJlbW92ZVsxXSBhcyBEeW5pbnB1dFJlbW92ZUJ1dHRvbjtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24uaW5wdXRub2RlID0gbm9kZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24ubGlzdG5vZGUgPSBkYXRhLmxpc3Rub2RlIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5tb3JlYnV0dG9uID0gZGF0YS5tb3JlYnV0dG9uIGFzIER5bmlucHV0TW9yZUJ1dHRvbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hpZGRlbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlIGFzIHN0cmluZztcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hlYWRlcic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Rpdic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubmFtZSkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0XHRyZXN1bHQuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybURlc2NyaXB0aW9uJztcblx0XHRcdFx0XHRyZXN1bHQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEubGFiZWwgYXMgc3RyaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgfHwgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsIGFzIHN0cmluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lIGFzIHN0cmluZyk7XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdFx0XHRcdGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpO1xuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRpZiAoZGF0YS5jb2xzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCBTdHJpbmcoZGF0YS5jb2xzKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucm93cykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyb3dzJywgU3RyaW5nKGRhdGEucm93cykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVxdWlyZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZWFkb25seSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS52YWx1ZSA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIHBsYWNlaG9sZGVyIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRzdWJub2RlLnBsYWNlaG9sZGVyID0gZGF0YS5wbGFjZWhvbGRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHN1Ym5vZGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNb3JlYml0cy5xdWlja0Zvcm06IHVua25vd24gZWxlbWVudCB0eXBlICR7ZGF0YS50eXBlLnRvU3RyaW5nKCl9YCk7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyIHx8PSBub2RlO1xuXHRcdGlmIChkYXRhLnRvb2x0aXApIHtcblx0XHRcdFF1aWNrRm9ybUVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGxhYmVsIHx8IG5vZGUsIGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5leHRyYSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuZXh0cmEgPSBkYXRhLmV4dHJhO1xuXHRcdH1cblx0XHRpZiAoZGF0YS4kZGF0YSkge1xuXHRcdFx0JChjaGlsZENvbnRhaW5lcikuZGF0YShkYXRhLiRkYXRhKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuc3R5bGUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBkYXRhLnN0eWxlKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuY2xhc3NOYW1lKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5jbGFzc05hbWUgPSBjaGlsZENvbnRhaW5lci5jbGFzc05hbWVcblx0XHRcdFx0PyBgJHtjaGlsZENvbnRhaW5lci5jbGFzc05hbWV9ICR7ZGF0YS5jbGFzc05hbWV9YFxuXHRcdFx0XHQ6IGRhdGEuY2xhc3NOYW1lO1xuXHRcdH1cblx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0cmV0dXJuIFtub2RlLCBjaGlsZENvbnRhaW5lcl07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgdG9vbHRpcCwgaW1wbGVtZW50ZWQgaW4gcGxhaW4galF1ZXJ5IChmb3JtZXJseSBqUXVlcnkgVUkgdG9vbHRpcCkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgLSBUaGUgSFRNTCBlbGVtZW50IGJlc2lkZSB3aGljaCBhIHRvb2x0aXAgaXMgdG8gYmUgZ2VuZXJhdGVkLlxuXHQgKiBAcGFyYW0ge1F1aWNrRm9ybURhdGF9IGRhdGEgLSBUb29sdGlwLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBkYXRhLlxuXHQgKi9cblx0c3RhdGljIGdlbmVyYXRlVG9vbHRpcCA9IChub2RlOiBIVE1MRWxlbWVudCwgZGF0YTogUXVpY2tGb3JtRGF0YSk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHRvb2x0aXBUZXh0ID0gZGF0YS50b29sdGlwO1xuXHRcdGlmICghdG9vbHRpcFRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdG9vbHRpcEJ1dHRvbiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHR0b29sdGlwQnV0dG9uLmNsYXNzTmFtZSA9ICdtb3JlYml0cy10b29sdGlwQnV0dG9uJztcblx0XHR0b29sdGlwQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRvb2x0aXBUZXh0KTtcblx0XHR0b29sdGlwQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc/JykpO1xuXHRcdGxldCB0aW1lciA9IDA7XG5cdFx0bGV0IHRvb2x0aXA6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0Y29uc3QgcmVtb3ZlVG9vbHRpcCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdFx0aWYgKHRvb2x0aXApIHtcblx0XHRcdFx0dG9vbHRpcC5yZW1vdmUoKTtcblx0XHRcdFx0dG9vbHRpcCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBzaG93VG9vbHRpcCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdHJlbW92ZVRvb2x0aXAoKTtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gJ21vcmViaXRzLXVpLXRvb2x0aXAnO1xuXHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IHRvb2x0aXBUZXh0O1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdGNvbnN0IGJ1dHRvblJlY3QgPSB0b29sdGlwQnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3QgdG9vbHRpcFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0bGV0IHRvcCA9IGJ1dHRvblJlY3QuYm90dG9tICsgNDtcblx0XHRcdGlmICh0b3AgKyB0b29sdGlwUmVjdC5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1KSB7XG5cdFx0XHRcdC8vIGZsaXAgYWJvdmUgdGhlIGJ1dHRvbiBpZiBpdCB3b3VsZCBvdmVyZmxvdyB0aGUgdmlld3BvcnRcblx0XHRcdFx0dG9wID0gTWF0aC5tYXgoNSwgYnV0dG9uUmVjdC50b3AgLSB0b29sdGlwUmVjdC5oZWlnaHQgLSA0KTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGxlZnQgPSBNYXRoLm1pbihcblx0XHRcdFx0TWF0aC5tYXgoNSwgYnV0dG9uUmVjdC5sZWZ0ICsgYnV0dG9uUmVjdC53aWR0aCAvIDIpLFxuXHRcdFx0XHR3aW5kb3cuaW5uZXJXaWR0aCAtIHRvb2x0aXBSZWN0LndpZHRoIC0gNVxuXHRcdFx0KTtcblx0XHRcdGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xuXHRcdFx0dG9vbHRpcCA9IGVsZW1lbnQ7XG5cdFx0fTtcblx0XHQkKHRvb2x0aXBCdXR0b24pLm9uKHtcblx0XHRcdG1vdXNlZW50ZXI6ICgpID0+IHtcblx0XHRcdFx0dGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChzaG93VG9vbHRpcCwgNDAwKTtcblx0XHRcdH0sXG5cdFx0XHRtb3VzZWxlYXZlOiByZW1vdmVUb29sdGlwLFxuXHRcdFx0Y2xpY2s6IHJlbW92ZVRvb2x0aXAsXG5cdFx0fSk7XG5cdH07XG59XG5cbi8qKlxuICogQ3JlYXRpb24gb2Ygc2ltcGxlIGFuZCBzdGFuZGFyZCBmb3JtcyB3aXRob3V0IG11Y2ggc3BlY2lmaWMgY29kaW5nLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtldmVudH0gZXZlbnQgLSBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50VHlwZT1zdWJtaXRdIC0gVHlwZSBvZiB0aGUgZXZlbnQuXG4gKi9cbmNsYXNzIFF1aWNrRm9ybSB7XG5cdHJvb3Q6IFF1aWNrRm9ybUVsZW1lbnQ7XG5cblx0Y29uc3RydWN0b3IoZXZlbnQ6IChldmVudDogRXZlbnQpID0+IHVua25vd24sIGV2ZW50VHlwZT86IHN0cmluZykge1xuXHRcdHRoaXMucm9vdCA9IG5ldyBRdWlja0Zvcm1FbGVtZW50KHtcblx0XHRcdHR5cGU6ICdmb3JtJyxcblx0XHRcdGV2ZW50LFxuXHRcdFx0ZXZlbnRUeXBlLFxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IG9mIHRoZSBxdWlja0Zvcm0uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG5cdFx0Y29uc3QgcmV0ID0gdGhpcy5yb290LnJlbmRlcigpIGFzIEhUTUxGb3JtRWxlbWVudDtcblx0XHRyZXQubmFtZXMgPSB7fTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGVuZCBlbGVtZW50IHRvIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBAcGFyYW0geyhRdWlja0Zvcm1EYXRhIHwgUXVpY2tGb3JtRWxlbWVudCl9IGRhdGEgLSBBIHF1aWNrZm9ybSBlbGVtZW50LCBvciB0aGUgb2JqZWN0IHdpdGggd2hpY2hcblx0ICogYSBxdWlja2Zvcm0gZWxlbWVudCBpcyBjb25zdHJ1Y3RlZC5cblx0ICogQHJldHVybnMge1F1aWNrRm9ybUVsZW1lbnR9IC0gU2FtZSBhcyB3aGF0IGlzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG5cdCAqL1xuXHRhcHBlbmQoZGF0YTogUXVpY2tGb3JtRGF0YSB8IFF1aWNrRm9ybUVsZW1lbnQpOiBRdWlja0Zvcm1FbGVtZW50IHtcblx0XHRyZXR1cm4gdGhpcy5yb290LmFwcGVuZChkYXRhKTtcblx0fVxuXG5cdHN0YXRpYyBlbGVtZW50ID0gUXVpY2tGb3JtRWxlbWVudDtcblxuXHQvLyBTb21lIHV0aWxpdHkgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW5nIHF1aWNrRm9ybXMgYWZ0ZXIgdGhlaXIgY3JlYXRpb246XG5cdC8vIChOb25lIG9mIHRoZXNlIHdvcmsgZm9yIFwiZHluaW5wdXRcIiB0eXBlIGZpZWxkcyBhdCBwcmVzZW50KVxuXHQvKipcblx0ICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZmlsbGVkIGZvcm0gZGF0YSBlbnRlcmVkIGJ5IHRoZSB1c2VyLCB3aXRoIHRoZSBvYmplY3Rcblx0ICoga2V5cyBiZWluZyB0aGUgZm9ybSBlbGVtZW50IG5hbWVzLiBEaXNhYmxlZCBmaWVsZHMgd2lsbCBiZSBpZ25vcmVkLCBidXQgbm90IGhpZGRlbiBmaWVsZHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgc3RyaW5nW10+fSBXaXRoIGZpZWxkIG5hbWVzIGFzIGtleXMsIGlucHV0IGRhdGEgYXMgdmFsdWVzLlxuXHQgKi9cblx0c3RhdGljIGdldElucHV0RGF0YSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgc3RyaW5nW10+ID0+IHtcblx0XHRjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBzdHJpbmdbXT4gPSB7fTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIEFycmF5LmZyb20oZm9ybS5lbGVtZW50cykgYXMgSFRNTElucHV0RWxlbWVudFtdKSB7XG5cdFx0XHRpZiAoZmllbGQuZGlzYWJsZWQgfHwgIWZpZWxkLm5hbWUgfHwgIWZpZWxkLnR5cGUgfHwgZmllbGQudHlwZSA9PT0gJ3N1Ym1pdCcgfHwgZmllbGQudHlwZSA9PT0gJ2J1dHRvbicpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBGb3IgZWxlbWVudHMgaW4gc3ViZ3JvdXBzLCBxdWlja2Zvcm0gcHJlcGVuZHMgZWxlbWVudCBuYW1lcyB3aXRoXG5cdFx0XHQvLyBuYW1lIG9mIHRoZSBwYXJlbnQgZ3JvdXAgZm9sbG93ZWQgYnkgYSBwZXJpb2QsIGdldCByaWQgb2YgdGhhdC5cblx0XHRcdGNvbnN0IGZpZWxkTmFtZU5vcm0gPSBmaWVsZC5uYW1lLnNsaWNlKGZpZWxkLm5hbWUuaW5kZXhPZignLicpICsgMSk7XG5cdFx0XHRzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcblx0XHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdFx0XHRpZiAoZmllbGQuZGF0YXNldFsnc2luZ2xlJ10pIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLmNoZWNrZWQ7IC8vIGJvb2xlYW5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dIHx8PSBbXTtcblx0XHRcdFx0XHRcdGlmIChmaWVsZC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGdyb3VwID0gcmVzdWx0W2ZpZWxkTmFtZU5vcm1dIGFzIHN0cmluZ1tdO1xuXHRcdFx0XHRcdFx0XHRncm91cFtncm91cC5sZW5ndGhdID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QtbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9ICQoZmllbGQpLnZhbCgpIGFzIHN0cmluZyB8IHN0cmluZ1tdO1xuXHRcdFx0XHRcdC8vIGZpZWxkLnZhbHVlIGRvZXNuJ3Qgd29ya1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0ZXh0JzogLy8gZmFsbHMgdGhyb3VnaFxuXHRcdFx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWUudHJpbSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGNvdWxkIGJlIHNlbGVjdC1vbmUsIGRhdGUsIG51bWJlciwgZW1haWwsIGV0Y1xuXHRcdFx0XHRcdGlmIChmaWVsZC52YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFsbCBmb3JtIGVsZW1lbnRzIHdpdGggYSBnaXZlbiBmaWVsZCBuYW1lIG9yIElELlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgLSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgZmllbGRzLlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX0gLSBBcnJheSBvZiBtYXRjaGluZyBmb3JtIGVsZW1lbnRzLlxuXHQgKi9cblx0c3RhdGljIGdldEVsZW1lbnRzID0gKGZvcm06IEhUTUxFbGVtZW50LCBmaWVsZE5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W10gPT4ge1xuXHRcdGNvbnN0ICRmb3JtID0gJChmb3JtKTtcblx0XHRmaWVsZE5hbWUgPSAkLmVzY2FwZVNlbGVjdG9yKGZpZWxkTmFtZSk7IC8vIHNhbml0aXplIGlucHV0XG5cdFx0bGV0ICRlbGVtZW50cyA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYCk7XG5cdFx0aWYgKCRlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW1lbnRzLnRvQXJyYXkoKTtcblx0XHR9XG5cdFx0JGVsZW1lbnRzID0gJGZvcm0uZmluZChgIyR7ZmllbGROYW1lfWApO1xuXHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB0aGUgYXJyYXkgb2YgZWxlbWVudHMgZm9yIGEgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uIHdpdGggYSBjZXJ0YWluXG5cdCAqIGB2YWx1ZWAgYXR0cmlidXRlLCBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgc3VjaCBlbGVtZW50LiBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnRbXX0gZWxlbWVudEFycmF5IC0gQXJyYXkgb2YgY2hlY2tib3ggb3IgcmFkaW8gZWxlbWVudHMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbHVlIHRvIHNlYXJjaCBmb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50IHwgbnVsbH1cblx0ICovXG5cdHN0YXRpYyBnZXRDaGVja2JveE9yUmFkaW8gPSAoZWxlbWVudEFycmF5OiBIVE1MSW5wdXRFbGVtZW50W10sIHZhbHVlOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9PiB7XG5cdFx0Y29uc3QgZm91bmQgPSBlbGVtZW50QXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC52YWx1ZSA9PT0gdmFsdWU7XG5cdFx0fSk7XG5cdFx0aWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmb3VuZFswXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgJmx0O2Rpdj4gY29udGFpbmluZyB0aGUgZm9ybSBlbGVtZW50LCBvciB0aGUgZm9ybSBlbGVtZW50IGl0c2VsZlxuXHQgKiBNYXkgbm90IHdvcmsgYXMgZXhwZWN0ZWQgb24gY2hlY2tib3hlcyBvciByYWRpb3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0c3RhdGljIGdldEVsZW1lbnRDb250YWluZXIgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCA9PiB7XG5cdFx0Ly8gZm9yIGRpdnMsIGhlYWRpbmdzIGFuZCBmaWVsZHNldHMsIHRoZSBjb250YWluZXIgaXMgdGhlIGVsZW1lbnQgaXRzZWxmXG5cdFx0aWYgKFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGaWVsZFNldEVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRGl2RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxIZWFkaW5nRWxlbWVudFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXHRcdC8vIGZvciBvdGhlcnMsIGp1c3QgcmV0dXJuIHRoZSBwYXJlbnQgbm9kZVxuXHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEhUTUwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBsYWJlbCBvZiB0aGUgZ2l2ZW4gZm9ybSBlbGVtZW50XG5cdCAqIChtYWlubHkgZm9yIGludGVybmFsIHVzZSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50IHwgUXVpY2tGb3JtRWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cblx0ICovXG5cdHN0YXRpYyBnZXRFbGVtZW50TGFiZWxPYmplY3QgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBRdWlja0Zvcm1FbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcblx0XHQvLyBmb3IgYnV0dG9ucywgZGl2cyBhbmQgaGVhZGVycywgdGhlIGxhYmVsIGlzIG9uIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdChlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09ICdidXR0b24nIHx8XG5cdFx0XHQoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlID09PSAnc3VibWl0JyB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblx0XHRcdC8vIGZvciBmaWVsZHNldHMsIHRoZSBsYWJlbCBpcyB0aGUgY2hpbGQgPGxlZ2VuZD4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGaWVsZFNldEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xlZ2VuZCcpO1xuXHRcdFx0Ly8gZm9yIHRleHRhcmVhcywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxoNT4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcblx0XHRcdHJldHVybiAoZWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdoNScpO1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGxhYmVsPiBlbGVtZW50XG5cdFx0cmV0dXJuICgoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgbGFiZWwgdGV4dCBvZiB0aGUgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnQgfCBRdWlja0Zvcm1FbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cblx0ICovXG5cdHN0YXRpYyBnZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBRdWlja0Zvcm1FbGVtZW50KTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gUXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdChlbGVtZW50KTtcblx0XHRpZiAoIWxhYmVsRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAobGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQgYXMgTm9kZSkudGV4dENvbnRlbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGxhYmVsIG9mIHRoZSBlbGVtZW50IHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IFF1aWNrRm9ybUVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFRleHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc3VjY2VlZGVkLCBmYWxzZSBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdHN0YXRpYyBzZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBRdWlja0Zvcm1FbGVtZW50LCBsYWJlbFRleHQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IFF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0KGxhYmVsRWxlbWVudC5maXJzdENoaWxkIGFzIE5vZGUpLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdG9yZXMgdGhlIGVsZW1lbnQncyBjdXJyZW50IGxhYmVsLCBhbmQgdGVtcG9yYXJpbHkgc2V0cyB0aGUgbGFiZWwgdG8gdGhlIGdpdmVuIHRleHQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50IHwgUXVpY2tGb3JtRWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBvcmFyeUxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHN1Y2NlZWRlZCwgYGZhbHNlYCBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdHN0YXRpYyBvdmVycmlkZUVsZW1lbnRMYWJlbCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCB8IFF1aWNrRm9ybUVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0aWYgKCEoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaGFzQXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpIHtcblx0XHRcdChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnLCBRdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsKGVsZW1lbnQpIGFzIHN0cmluZyk7XG5cdFx0fVxuXHRcdHJldHVybiBRdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlc3RvcmVzIHRoZSBsYWJlbCBzdG9yZWQgYnkgb3ZlcnJpZGVFbGVtZW50TGFiZWwuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50IHwgUXVpY2tGb3JtRWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW4gfCBudWxsfSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRzdGF0aWMgcmVzZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBRdWlja0Zvcm1FbGVtZW50KTogYm9vbGVhbiB8IG51bGwgPT4ge1xuXHRcdGlmICgoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaGFzQXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpIHtcblx0XHRcdHJldHVybiBRdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsKGVsZW1lbnQsIChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSBhcyBzdHJpbmcpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblxuXHQvKipcblx0ICogU2hvd3Mgb3IgaGlkZXMgYSBmb3JtIGVsZW1lbnQgcGx1cyBpdHMgbGFiZWwgYW5kIHRvb2x0aXAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50IHwgSlF1ZXJ5IHwgc3RyaW5nKX0gZWxlbWVudCAtIEhUTUwvalF1ZXJ5IGVsZW1lbnQsIG9yIGpRdWVyeSBzZWxlY3RvciBzdHJpbmcuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0c3RhdGljIHNldEVsZW1lbnRWaXNpYmlsaXR5ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiB8IHN0cmluZywgdmlzaWJpbGl0eT86IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHQkKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblxuXHQvKipcblx0ICogU2hvd3Mgb3IgaGlkZXMgdGhlIHF1ZXN0aW9uIG1hcmsgaWNvbiAod2hpY2ggZGlzcGxheXMgdGhlIHRvb2x0aXApIG5leHQgdG8gYSBmb3JtIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50IHwgSlF1ZXJ5KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt2aXNpYmlsaXR5XSAtIFNraXAgdGhpcyB0byB0b2dnbGUgdmlzaWJpbGl0eS5cblx0ICovXG5cdHN0YXRpYyBzZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+LCB2aXNpYmlsaXR5PzogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRcdCQoUXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkpXG5cdFx0XHQuZmluZCgnLm1vcmViaXRzLXRvb2x0aXBCdXR0b24nKVxuXHRcdFx0LnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcbn1cblxuTW9yZWJpdHMucXVpY2tGb3JtID0gUXVpY2tGb3JtO1xuXG4vKipcbiAqIEBleHRlcm5hbCBIVE1MRm9ybUVsZW1lbnRcbiAqL1xuLyoqXG4gKiBHZXQgY2hlY2tlZCBpdGVtcyBpbiB0aGUgZm9ybS5cbiAqXG4gKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldENoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcbiAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuICogc2V0IHRvIHRydWUgKGRvbid0IHRyeSB0byBtaXggc2VsZWN0cyB3aXRoIHJhZGlvL2NoZWNrYm94ZXMpLlxuICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gLSBDb250YWlucyB0aGUgdmFsdWVzIG9mIGVsZW1lbnRzIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG4gKi9cbkhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuZ2V0Q2hlY2tlZCA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRm9ybUVsZW1lbnQsIG5hbWU6IHN0cmluZywgdHlwZT86IHN0cmluZyk6IHN0cmluZ1tdIHtcblx0Y29uc3QgZWxlbWVudHMgPSAodGhpcy5lbGVtZW50cyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIEZvcm1Db250cm9sT3JMaXN0PilbbmFtZV07XG5cdGlmICghZWxlbWVudHMpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblx0Y29uc3QgcmV0dXJuQXJyYXk6IHN0cmluZ1tdID0gW107XG5cdGxldCBpOiBudW1iZXI7XG5cdGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG5cdFx0Y29uc3Qge29wdGlvbnN9ID0gZWxlbWVudHM7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNbaV0gYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG5cdFx0XHRpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG5cdFx0XHRcdGlmIChvcHRpb24udmFsdWVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbi52YWx1ZXM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbi52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRyZXR1cm4gW2VsZW1lbnRzLnZhbHVlXTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV0gYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdGlmIChlbGVtZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudC50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVsZW1lbnQudmFsdWVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnQudmFsdWVzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50LnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXR1cm5BcnJheTtcbn07XG5cbi8qKlxuICogRG9lcyB0aGUgc2FtZSBhcyB7QGxpbmsgSFRNTEZvcm1FbGVtZW50LmdldENoZWNrZWR8Z2V0Q2hlY2tlZH0sIGJ1dCB3aXRoIHVuY2hlY2tlZCBlbGVtZW50cy5cbiAqXG4gKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldFVuY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaW5kIGNoZWNrZWQgcHJvcGVydHkgb2YgZWxlbWVudHMgKGkuZS4gYSBjaGVja2JveFxuICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG4gKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIC0gT3B0aW9uYWxseSBzcGVjaWZ5IGVpdGhlciByYWRpbyBvciBjaGVja2JveCAoZm9yXG4gKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICogY2hlY2tlZCBwcm9wZXJ0eSBzZXQgdG8gdHJ1ZS5cbiAqL1xuSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRVbmNoZWNrZWQgPSBmdW5jdGlvbiAodGhpczogSFRNTEZvcm1FbGVtZW50LCBuYW1lOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG5cdGNvbnN0IGVsZW1lbnRzID0gKHRoaXMuZWxlbWVudHMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCBGb3JtQ29udHJvbE9yTGlzdD4pW25hbWVdO1xuXHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cdGNvbnN0IHJldHVybkFycmF5OiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgaTogbnVtYmVyO1xuXHRpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCBvcHRpb24gPSBvcHRpb25zW2ldIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuXHRcdFx0aWYgKCFvcHRpb24uc2VsZWN0ZWQpIHtcblx0XHRcdFx0aWYgKG9wdGlvbi52YWx1ZXMpIHtcblx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uLnZhbHVlcztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdGlmICh0eXBlICYmIGVsZW1lbnRzLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9IGVsc2UgaWYgKCFlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRyZXR1cm4gW2VsZW1lbnRzLnZhbHVlXTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV0gYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdGlmICghZWxlbWVudC5jaGVja2VkKSB7XG5cdFx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnQudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtZW50LnZhbHVlcykge1xuXHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50LnZhbHVlcztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudC52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmV0dXJuQXJyYXk7XG59O1xuXG5pbnRlcmZhY2UgTW9yZWJpdHNOYW1lc3BhY2Uge1xuXHRpcDogdHlwZW9mIGlwO1xuXHRzdHJpbmc6IHR5cGVvZiBzdHJpbmc7XG5cdGFycmF5OiB0eXBlb2YgYXJyYXk7XG5cdHVuYmluZGVyOiB0eXBlb2YgVW5iaW5kZXI7XG5cdGRhdGU6IHR5cGVvZiBNb3JlYml0c0RhdGU7XG59XG4vKipcbiAqIFV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzLlxuICpcbiAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuaXBcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICovXG5jb25zdCBpcCA9IHtcblx0LyoqXG5cdCAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cblx0ICogSmF2YVNjcmlwdCB0cmFuc2xhdGlvbiBvZiB0aGUge0BsaW5rIGh0dHBzOi8vZ2Vycml0Lndpa2ltZWRpYS5vcmcvci9wbHVnaW5zL2dpdGlsZXMvbWVkaWF3aWtpL2NvcmUvKy84ZWI2YWMzZTg0ZWEzMzEyZDM5MWNhOTZjMTJjNDllM2FkMDc1M2JiL2luY2x1ZGVzL3V0aWxzL0lQLnBocCMxMzF8YElQOjpzYW5pdGl6ZUlQKClgfVxuXHQgKiBmdW5jdGlvbiBmcm9tIHRoZSBJUFV0aWxzIGxpYnJhcnkuICBBZGRyZXNzZXMgYXJlIHZlcmJvc2UsIHVwcGVyY2FzZSxcblx0ICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IENJRFIuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuXHQgKi9cblx0c2FuaXRpemVJUHY2OiAoYWRkcmVzczogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdFx0YWRkcmVzcyA9IGFkZHJlc3MudHJpbSgpO1xuXHRcdGlmIChhZGRyZXNzID09PSAnJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghbXcudXRpbC5pc0lQdjZBZGRyZXNzKGFkZHJlc3MsIHRydWUpKSB7XG5cdFx0XHRyZXR1cm4gYWRkcmVzczsgLy8gbm90aGluZyBlbHNlIHRvIGRvIGZvciBJUHY0IGFkZHJlc3NlcyBvciBpbnZhbGlkIG9uZXNcblx0XHR9XG5cdFx0Ly8gUmVtb3ZlIGFueSB3aGl0ZXNwYWNlcywgY29udmVydCB0byB1cHBlciBjYXNlXG5cdFx0YWRkcmVzcyA9IGFkZHJlc3MudG9VcHBlckNhc2UoKTtcblx0XHQvLyBFeHBhbmQgemVybyBhYmJyZXZpYXRpb25zXG5cdFx0Y29uc3QgYWJicmV2UG9zID0gYWRkcmVzcy5pbmRleE9mKCc6OicpO1xuXHRcdGlmIChhYmJyZXZQb3MgIT09IC0xKSB7XG5cdFx0XHQvLyBXZSBrbm93IHRoaXMgaXMgdmFsaWQgSVB2Ni4gRmluZCB0aGUgbGFzdCBpbmRleCBvZiB0aGVcblx0XHRcdC8vIGFkZHJlc3MgYmVmb3JlIGFueSBDSURSIG51bWJlciAoZS5nLiBcImE6YjpjOjovMjRcIikuXG5cdFx0XHRjb25zdCBDSURSU3RhcnQgPSBhZGRyZXNzLmluZGV4T2YoJy8nKTtcblx0XHRcdGNvbnN0IGFkZHJlc3NFbmQgPSBDSURSU3RhcnQgPT09IC0xID8gYWRkcmVzcy5sZW5ndGggLSAxIDogQ0lEUlN0YXJ0IC0gMTtcblx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBiZWdpbm5pbmcuLi5cblx0XHRcdGxldCByZXBlYXQ6IHN0cmluZztcblx0XHRcdGxldCBleHRyYTogc3RyaW5nO1xuXHRcdFx0bGV0IHBhZDogbnVtYmVyO1xuXHRcdFx0aWYgKGFiYnJldlBvcyA9PT0gMCkge1xuXHRcdFx0XHRyZXBlYXQgPSAnMDonO1xuXHRcdFx0XHRleHRyYSA9IGFkZHJlc3MgPT09ICc6OicgPyAnMCcgOiAnJzsgLy8gZm9yIHRoZSBhZGRyZXNzICc6Oidcblx0XHRcdFx0cGFkID0gOTsgLy8gNysyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgYXQgdGhlIGVuZC4uLlxuXHRcdFx0fSBlbHNlIGlmIChhYmJyZXZQb3MgPT09IGFkZHJlc3NFbmQgLSAxKSB7XG5cdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdGV4dHJhID0gJyc7XG5cdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGluIHRoZSBtaWRkbGUuLi5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdGV4dHJhID0gJzonO1xuXHRcdFx0XHRwYWQgPSA4OyAvLyA2KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcmVwbGFjZW1lbnQgPSByZXBlYXQ7XG5cdFx0XHRwYWQgLT0gYWRkcmVzcy5zcGxpdCgnOicpLmxlbmd0aCAtIDE7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZDsgaSsrKSB7XG5cdFx0XHRcdHJlcGxhY2VtZW50ICs9IHJlcGVhdDtcblx0XHRcdH1cblx0XHRcdHJlcGxhY2VtZW50ICs9IGV4dHJhO1xuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MucmVwbGFjZSgnOjonLCByZXBsYWNlbWVudCk7XG5cdFx0fVxuXHRcdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gZWFjaCBibG9jIGFzIG5lZWRlZFxuXHRcdHJldHVybiBhZGRyZXNzLnJlcGxhY2UoLyhefDopMCsoWzAtOUEtRmEtZl17MSw0fSkvZywgJyQxJDInKTtcblx0fSxcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiB0aGUgZ2l2ZW4gSVAgYWRkcmVzcyBpcyBhIHJhbmdlLiAgSnVzdCBjb25qb2luc1xuXHQgKiBgbXcudXRpbC5pc0lQQWRkcmVzc2Agd2l0aCBhbmQgd2l0aG91dCB0aGUgYGFsbG93QmxvY2tgIG9wdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgaWYgZ2l2ZW4gYSB2YWxpZCBJUCBhZGRyZXNzIHJhbmdlLCBmYWxzZSBvdGhlcndpc2UuXG5cdCAqL1xuXHRpc1JhbmdlOiAoaXA6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBtdy51dGlsLmlzSVBBZGRyZXNzKGlwLCB0cnVlKSAmJiAhbXcudXRpbC5pc0lQQWRkcmVzcyhpcCk7XG5cdH0sXG5cdC8qKlxuXHQgKiBDaGVjayB0aGF0IGFuIElQIHJhbmdlIGlzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMuICBNb3N0IGxpa2VseSB0byBiZSB1c2VmdWxcblx0ICogaW4gY29uanVuY3Rpb24gd2l0aCBgd2dSZWxldmFudFVzZXJOYW1lYC4gIENJRFIgbGltaXRzIGFyZSBoYXJkY29kZWQgYXMgLzE2XG5cdCAqIGZvciBJUHY0IGFuZCAvMzIgZm9yIElQdjYuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpcFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGZvciB2YWxpZCByYW5nZXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cyxcblx0ICogb3RoZXJ3aXNlIGZhbHNlIChyYW5nZXMgb3V0c2lkZSB0aGUgbGltaXQsIHNpbmdsZSBJUHMsIG5vbi1JUHMpLlxuXHQgKi9cblx0dmFsaWRDSURSOiAoaXA6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdGlmIChNb3JlYml0cy5pcC5pc1JhbmdlKGlwKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2ggPSBpcC5tYXRjaCgvXFwvKFxcZHsxLDN9KSQvKSBhcyBbc3RyaW5nLCBzdHJpbmddO1xuXHRcdFx0Y29uc3Qgc3VibmV0ID0gTnVtYmVyLnBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG5cdFx0XHRpZiAoc3VibmV0KSB7XG5cdFx0XHRcdC8vIFNob3VsZCBiZSByZWR1bmRhbnRcblx0XHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRpZiAoc3VibmV0ID49IDMyKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3VibmV0ID49IDE2KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHQvKipcblx0ICogR2V0IHRoZSAvNjQgc3VibmV0IGZvciBhbiBJUHY2IGFkZHJlc3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpcHY2IC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IGEgc3VibmV0LlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd9IC0gRmFsc2UgaWYgbm90IElQdjYgb3IgYmlnZ2VyIHRoYW4gYSA2NCxcblx0ICogb3RoZXJ3aXNlIHRoZSAoc2FuaXRpemVkKSAvNjQgYWRkcmVzcy5cblx0ICovXG5cdGdldDY0OiAoaXB2Njogc3RyaW5nKTogc3RyaW5nIHwgZmFsc2UgPT4ge1xuXHRcdGlmICghaXB2NiB8fCAhbXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwdjYsIHRydWUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHN1Ym5ldE1hdGNoID0gaXB2Ni5tYXRjaCgvXFwvKFxcZHsxLDN9KSQvKSBhcyBbc3RyaW5nLCBzdHJpbmddIHwgbnVsbDtcblx0XHRpZiAoc3VibmV0TWF0Y2ggJiYgTnVtYmVyLnBhcnNlSW50KHN1Ym5ldE1hdGNoWzFdLCAxMCkgPCA2NCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpcHY2ID0gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2KGlwdjYpIGFzIHN0cmluZztcblx0XHRjb25zdCBpcFJlZ2V4ID0gL14oKD86WzAtOUEtRl17MSw0fTopezR9KSg/OlswLTlBLUZdezEsNH06KXszfVswLTlBLUZdezEsNH0oPzpcXC9cXGR7MSwzfSk/JC87XG5cdFx0cmV0dXJuIGlwdjYucmVwbGFjZShpcFJlZ2V4LCAnJDEnLmNvbmNhdCgnMDowOjA6MC82NCcpKTtcblx0fSxcbn07XG5Nb3JlYml0cy5pcCA9IGlwO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIHRvIG1hbmlwdWxhdGUgc3RyaW5ncy5cbiAqXG4gKiBAbmFtZXNwYWNlIE1vcmViaXRzLnN0cmluZ1xuICogQG1lbWJlcm9mIE1vcmViaXRzXG4gKi9cbmNvbnN0IHN0cmluZyA9IHtcblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHRvVXBwZXJDYXNlRmlyc3RDaGFyOiAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHRvTG93ZXJDYXNlRmlyc3RDaGFyOiAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fSxcblx0LyoqXG5cdCAqIEdpdmVzIGFuIGFycmF5IG9mIHN1YnN0cmluZ3Mgb2YgYHN0cmAgLSBzdGFydGluZyB3aXRoIGBzdGFydGAgYW5kXG5cdCAqIGVuZGluZyB3aXRoIGBlbmRgIC0gd2hpY2ggaXMgbm90IGluIGBza2lwbGlzdGAuICBJbnRlbmRlZCBmb3IgdXNlXG5cdCAqIG9uIHdpa2l0ZXh0IHdpdGggdGVtcGxhdGVzIG9yIGxpbmtzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZW5kXG5cdCAqIEBwYXJhbSB7KHN0cmluZ1tdfHN0cmluZyl9IFtza2lwbGlzdF1cblx0ICogQHJldHVybnMge3N0cmluZ1tdfVxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGBzdGFydGAgYW5kIGBlbmRgIHN0cmluZ3MgYXJlbid0IG9mIHRoZSBzYW1lIGxlbmd0aC5cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBgc2tpcGxpc3RgIGlzbid0IGFuIGFycmF5IG9yIHN0cmluZ1xuXHQgKi9cblx0c3BsaXRXZWlnaHRlZEJ5S2V5czogKHN0cjogc3RyaW5nLCBzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZywgc2tpcGxpc3Q/OiBzdHJpbmdbXSB8IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcblx0XHRpZiAoc3RhcnQubGVuZ3RoICE9PSBlbmQubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3N0YXJ0IG1hcmtlciBhbmQgZW5kIG1hcmtlciBtdXN0IGJlIG9mIHRoZSBzYW1lIGxlbmd0aCcpO1xuXHRcdH1cblx0XHRsZXQgbGV2ZWwgPSAwO1xuXHRcdGxldCBpbml0aWFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblx0XHRjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHNraXBsaXN0KSkge1xuXHRcdFx0aWYgKHNraXBsaXN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0c2tpcGxpc3QgPSBbXTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNraXBsaXN0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRza2lwbGlzdCA9IFtza2lwbGlzdF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub24tYXBwbGljYWJsZSBza2lwbGlzdCBwYXJhbWV0ZXInKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBza2lwbGlzdCkge1xuXHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBlbGVtZW50Lmxlbmd0aCkgPT09IGVsZW1lbnQpIHtcblx0XHRcdFx0XHRpICs9IGVsZW1lbnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgc3RhcnQubGVuZ3RoKSA9PT0gc3RhcnQpIHtcblx0XHRcdFx0aWYgKGluaXRpYWwgPT09IG51bGwpIHtcblx0XHRcdFx0XHRpbml0aWFsID0gaTtcblx0XHRcdFx0fVxuXHRcdFx0XHQrK2xldmVsO1xuXHRcdFx0XHRpICs9IHN0YXJ0Lmxlbmd0aCAtIDE7XG5cdFx0XHR9IGVsc2UgaWYgKHN0ci5zbGljZShpLCBpICsgZW5kLmxlbmd0aCkgPT09IGVuZCkge1xuXHRcdFx0XHQtLWxldmVsO1xuXHRcdFx0XHRpICs9IGVuZC5sZW5ndGggLSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFsZXZlbCAmJiBpbml0aWFsICE9PSBudWxsKSB7XG5cdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHN0ci5zbGljZShpbml0aWFsLCBpICsgMSk7XG5cdFx0XHRcdGluaXRpYWwgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXHQvKipcblx0ICogRm9ybWF0cyBmcmVlZm9ybSBcInJlYXNvblwiIChmcm9tIGEgdGV4dGFyZWEpIGZvciBkZWxldGlvbi9vdGhlclxuXHQgKiB0ZW1wbGF0ZXMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgc3Vic3RpdHV0ZWQsIChlLmcuIFBST0QsIFhGRCwgUlBQKS5cblx0ICogSGFuZGxlcyBgfGAgb3V0c2lkZSBhIG5vd2lraSB0YWcuXG5cdCAqIE9wdGlvbmFsbHksIGFsc28gYWRkcyBhIHNpZ25hdHVyZSBpZiBub3QgcHJlc2VudCBhbHJlYWR5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFNpZ11cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZvcm1hdFJlYXNvblRleHQ6IChzdHI6IHN0cmluZywgYWRkU2lnPzogYm9vbGVhbik6IHN0cmluZyA9PiB7XG5cdFx0bGV0IHJlYXNvbiA9IChzdHIgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHJlYXNvbik7XG5cdFx0dW5iaW5kZXIudW5iaW5kKCc8bm8nLmNvbmNhdCgnd2lraScsICc+JyksICc8L25vJy5jb25jYXQoJ3dpa2knLCAnPicpKTtcblx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKC9cXHwvZywgJ3t7Jy5jb25jYXQoJ3N1YnN0OicsICchfX0nKSk7XG5cdFx0cmVhc29uID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0aWYgKGFkZFNpZykge1xuXHRcdFx0Y29uc3Qgc2lnID0gJ35+Jy5jb25jYXQoJ35+Jyk7XG5cdFx0XHRjb25zdCBzaWdJbmRleCA9IHJlYXNvbi5sYXN0SW5kZXhPZihzaWcpO1xuXHRcdFx0aWYgKHNpZ0luZGV4ID09PSAtMSB8fCBzaWdJbmRleCAhPT0gcmVhc29uLmxlbmd0aCAtIHNpZy5sZW5ndGgpIHtcblx0XHRcdFx0cmVhc29uICs9IGAgJHtzaWd9YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlYXNvbi50cmltKCk7XG5cdH0sXG5cdC8qKlxuXHQgKiBGb3JtYXRzIGEgXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgaW5jbHVzaW9uIGluIGEgdXNlcnNwYWNlXG5cdCAqIGxvZy4gIFJlcGxhY2VzIG5ld2xpbmVzIHdpdGgge3tQYn19LCBhbmQgYWRkcyBhbiBleHRyYSBgI2AgYmVmb3JlXG5cdCAqIGxpc3QgaXRlbXMgZm9yIHByb3BlciBmb3JtYXR0aW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRmb3JtYXRSZWFzb25Gb3JMb2c6IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdHN0clxuXHRcdFx0XHQvLyBoYW5kbGUgbGluZSBicmVha3MsIHdoaWNoIG90aGVyd2lzZSBicmVhayBudW1iZXJpbmdcblx0XHRcdFx0LnJlcGxhY2UoL1xcbisvZywgJ3t7cGJ9fScpXG5cdFx0XHRcdC8vIHB1dCBhbiBleHRyYSAjIGluIGZyb250IGJlZm9yZSBidWxsZXRlZCBvciBudW1iZXJlZCBsaXN0IGl0ZW1zXG5cdFx0XHRcdC5yZXBsYWNlKC9eKCMrKS9nbSwgJyMkMScpXG5cdFx0XHRcdC5yZXBsYWNlKC9eKFxcKispL2dtLCAnIyQxJylcblx0XHQpO1xuXHR9LFxuXHQvKipcblx0ICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKClgLCBidXQgZXNjYXBlcyBhbnkgZG9sbGFyIHNpZ25zIGluXG5cdCAqIHRoZSByZXBsYWNlbWVudCBzdHJpbmcuICBVc2VmdWwgd2hlbiB0aGUgdGhlIHJlcGxhY2VtZW50IHN0cmluZyBpc1xuXHQgKiBhcmJpdHJhcnksIHN1Y2ggYXMgYSB1c2VybmFtZSBvciBmcmVlZm9ybSB1c2VyIGlucHV0LCBhbmQgY291bGRcblx0ICogY29udGFpbiBkb2xsYXIgc2lnbnMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUZXh0IGluIHdoaWNoIHRvIHJlcGxhY2UuXG5cdCAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlbWVudFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c2FmZVJlcGxhY2U6IChzdHJpbmc6IHN0cmluZywgcGF0dGVybjogc3RyaW5nIHwgUmVnRXhwLCByZXBsYWNlbWVudDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQucmVwbGFjZSgvXFwkL2csICckJCQkJykpO1xuXHR9LFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIHRoZSB1c2VyLXByb3ZpZGVkIGV4cGlyYXRpb24gd2lsbCBiZSBjb25zaWRlcmVkIGFuXG5cdCAqIGluZmluaXRlLWxlbmd0aCBieSBNVy5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL1Q2ODY0Nn1cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV4cGlyeVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGlzSW5maW5pdHk6IChleHBpcnk6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBbJ2luZGVmaW5pdGUnLCAnaW5maW5pdHknLCAnaW5maW5pdGUnLCAnbmV2ZXInXS5pbmNsdWRlcyhleHBpcnkpO1xuXHR9LFxuXHQvKipcblx0ICogRXNjYXBlcyBhIHN0cmluZyB0byBiZSB1c2VkIGluIGEgUmVnRXhwLCByZXBsYWNpbmcgc3BhY2VzIGFuZFxuXHQgKiB1bmRlcnNjb3JlcyB3aXRoIGBbXyBdYCBhcyB0aGV5IGFyZSBvZnRlbiBlcXVpdmFsZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFN0cmluZyB0byBiZSBlc2NhcGVkLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBlc2NhcGVkIHRleHQuXG5cdCAqL1xuXHRlc2NhcGVSZWdFeHA6ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBtdy51dGlsLmVzY2FwZVJlZ0V4cCh0ZXh0KS5yZXBsYWNlKC8gfF8vZywgJ1tfIF0nKTtcblx0fSxcblx0LyoqXG5cdCAqIGZvcm1hdFRpbWVcblx0ICpcblx0ICogQHBhcmFtIHsqfSB0aW1lIFRoZSBzdHJpbmcgdG8gZm9yYW10XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRmb3JtYXRUaW1lOiAodGltZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRsZXQgbTogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw7XG5cdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqc2VjKG9uZCk/cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGAke21bMV1956eSYDtcblx0XHR9XG5cdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbWluKHV0ZSk/cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGAke21bMV195YiGYDtcblx0XHR9XG5cdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqaG91cnM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiAobVsxXSBhcyBzdHJpbmcpICsgd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyk7XG5cdFx0fVxuXHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmRheXM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiBgJHttWzFdfeWkqWA7XG5cdFx0fVxuXHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKndlZWtzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gKG1bMV0gYXMgc3RyaW5nKSArIHdpbmRvdy53Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdH1cblx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyptb250aHM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiAobVsxXSBhcyBzdHJpbmcpICsgd2luZG93LndnVUxTKCfkuKrmnIgnLCAn5YCL5pyIJyk7XG5cdFx0fVxuXHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnllYXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYCR7bVsxXX3lubRgO1xuXHRcdH1cblx0XHRpZiAoTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkodGltZS50cmltKCkpKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LndnVUxTKCfml6DpmZDmnJ8nLCAn54Sh6ZmQ5pyfJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aW1lO1xuXHR9LFxuXHQvKipcblx0ICogQXBwZW5kIHB1bmN0dWF0aW9uIHRvIGEgc3RyaW5nIHdoZW4gaXQncyBtaXNzaW5nXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHB1bmN0dWF0aW9uXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRhcHBlbmRQdW5jdHVhdGlvbjogKHN0cjogc3RyaW5nLCBwdW5jdHVhdGlvbj86IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0aWYgKHB1bmN0dWF0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHB1bmN0dWF0aW9uID0gJ+OAgic7XG5cdFx0fVxuXHRcdGlmIChzdHIuc2VhcmNoKC9bLj8hO+OAgu+8n++8ge+8m10kLykgPT09IC0xKSB7XG5cdFx0XHRzdHIgKz0gcHVuY3R1YXRpb247XG5cdFx0fVxuXHRcdHJldHVybiBzdHI7XG5cdH0sXG59O1xuTW9yZWJpdHMuc3RyaW5nID0gc3RyaW5nO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIHRvIG1hbmlwdWxhdGUgYXJyYXlzLlxuICpcbiAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuYXJyYXlcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICovXG5jb25zdCBhcnJheSA9IHtcblx0LyoqXG5cdCAqIFJlbW92ZSBkdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFyclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBkdXBsaWNhdGVzIHJlbW92ZWQuXG5cdCAqIEB0aHJvd3Mge0FycmF5fSBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHQgKi9cblx0dW5pcTogPFQ+KGFycjogVFtdKTogVFtdID0+IHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS51bmlxJyk7XG5cdFx0fVxuXHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSA9PT0gaWR4O1xuXHRcdH0pO1xuXHR9LFxuXHQvKipcblx0ICogUmVtb3ZlIG5vbi1kdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFyclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgZWFjaCB2YWx1ZVxuXHQgKiByZW1vdmVkOyBzdWJzZXF1ZW50IGluc3RhbmNlcyBvZiB0aG9zZSB2YWx1ZXMgKGR1cGxpY2F0ZXMpIHJlbWFpbi5cblx0ICogQHRocm93cyB7QXJyYXl9IFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdCAqL1xuXHRkdXBzOiA8VD4oYXJyOiBUW10pOiBUW10gPT4ge1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmR1cHMnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG5cdFx0fSk7XG5cdH0sXG5cdC8qKlxuXHQgKiBCcmVhayB1cCBhbiBhcnJheSBpbnRvIHNtYWxsZXIgYXJyYXlzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSBTaXplIG9mIGVhY2ggY2h1bmsgKGV4Y2VwdCB0aGUgbGFzdCwgd2hpY2ggY291bGQgYmUgZGlmZmVyZW50KS5cblx0ICogQHJldHVybnMge0FycmF5W119IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHNtYWxsZXIsIGNodW5rZWQgYXJyYXlzLlxuXHQgKiBAdGhyb3dzIHtBcnJheX0gV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0ICovXG5cdGNodW5rOiA8VD4oYXJyOiBUW10sIHNpemU6IG51bWJlcik6IFRbXVtdID0+IHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS5jaHVuaycpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInIHx8IHNpemUgPD0gMCkge1xuXHRcdFx0Ly8gcHJldHR5IGltcG9zc2libGUgdG8gZG8gYW55dGhpbmcgOilcblx0XHRcdHJldHVybiBbYXJyXTsgLy8gd2UgcmV0dXJuIGFuIGFycmF5IGNvbnNpc3Rpbmcgb2YgdGhpcyBhcnJheS5cblx0XHR9XG5cblx0XHRjb25zdCBudW1DaHVua3MgPSBNYXRoLmNlaWwoYXJyLmxlbmd0aCAvIHNpemUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb208VFtdPih7bGVuZ3RoOiBudW1DaHVua3N9KTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bUNodW5rczsgaSsrKSB7XG5cdFx0XHRyZXN1bHRbaV0gPSBhcnIuc2xpY2UoaSAqIHNpemUsIChpICsgMSkgKiBzaXplKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcbn07XG5Nb3JlYml0cy5hcnJheSA9IGFycmF5O1xuLyoqXG4gKiBUZW1wb3JhcmlseSBoaWRlIGEgcGFydCBvZiBhIHN0cmluZyB3aGlsZSBwcm9jZXNzaW5nIHRoZSByZXN0IG9mIGl0LlxuICogVXNlZCBieSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHQucGFnZSNjb21tZW50T3V0SW1hZ2V8TW9yZWJpdHMud2lraXRleHQucGFnZS5jb21tZW50T3V0SW1hZ2V9LlxuICpcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIGluaXRpYWwgdGV4dCB0byBwcm9jZXNzLlxuICogQGV4YW1wbGUgY29uc3QgdSA9IG5ldyBNb3JlYml0cy51bmJpbmRlcignSGVsbG8gd29ybGQgPCEtLSB3b3JsZCAtLT4gd29ybGQnKTtcbiAqIHUudW5iaW5kKCc8IS0tJywgJy0tPicpOyAvLyB0ZXh0IGluc2lkZSBjb21tZW50IHJlbWFpbnMgaW50YWN0XG4gKiB1LmNvbnRlbnQgPSB1LmNvbnRlbnQucmVwbGFjZSgvd29ybGQvZywgJ2VhcnRoJyk7XG4gKiB1LnJlYmluZCgpOyAvLyBnaXZlcyAnSGVsbG8gZWFydGggPCEtLSB3b3JsZCAtLT4gZWFydGgnXG4gKi9cbmNsYXNzIFVuYmluZGVyIHtcblx0LyoqIFRoZSB0ZXh0IGJlaW5nIHByb2Nlc3NlZC4gKi9cblx0Y29udGVudDogc3RyaW5nO1xuXHRwcmVmaXg6IHN0cmluZzsgLy8gJVVOSVE6OjAuNTk1NTk4MTY0NDkzODMyNDo6XG5cdHBvc3RmaXg6IHN0cmluZzsgLy8gOjpVTklRJVxuXHRjb3VudGVyOiBudW1iZXI7IC8vIDArK1xuXHRoaXN0b3J5OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+OyAvLyB7fVxuXHRjb25zdHJ1Y3RvcihzdHJpbmc6IHN0cmluZykge1xuXHRcdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdHRoaXMuY29udGVudCA9IHN0cmluZztcblx0XHR0aGlzLmNvdW50ZXIgPSAwO1xuXHRcdHRoaXMuaGlzdG9yeSA9IHt9O1xuXHRcdHRoaXMucHJlZml4ID0gYCVVTklROjoke01hdGgucmFuZG9tKCl9OjpgO1xuXHRcdHRoaXMucG9zdGZpeCA9ICc6OlVOSVElJztcblx0fVxuXHQvKipcblx0ICogSGlkZSB0aGUgcmVnaW9uIGVuY2Fwc3VsYXRlZCBieSB0aGUgYHByZWZpeGAgYW5kIGBwb3N0Zml4YCBmcm9tXG5cdCAqIHN0cmluZyBwcm9jZXNzaW5nLiAgYHByZWZpeGAgYW5kIGBwb3N0Zml4YCB3aWxsIGJlIHVzZWQgaW4gYVxuXHQgKiBSZWdFeHAsIHNvIGl0ZW1zIHRoYXQgbmVlZCBlc2NhcGluZyBzaG91bGQgYmUgdXNlIGBcXFxcYC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcG9zdGZpeFxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gSWYgZWl0aGVyIGBwcmVmaXhgIG9yIGBwb3N0Zml4YCBpcyBtaXNzaW5nLlxuXHQgKi9cblx0dW5iaW5kKHByZWZpeDogc3RyaW5nLCBwb3N0Zml4OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoIXByZWZpeCB8fCAhcG9zdGZpeCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCb3RoIHByZWZpeCBhbmQgcG9zdGZpeCBtdXN0IGJlIHByb3ZpZGVkJyk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgJHtwcmVmaXh9KFtcXFxcc1xcXFxTXSo/KSR7cG9zdGZpeH1gLCAnZycpO1xuXHRcdHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5yZXBsYWNlKHJlLCBNb3JlYml0cy51bmJpbmRlci5nZXRDYWxsYmFjayh0aGlzKSk7XG5cdH1cblx0LyoqXG5cdCAqIFJlc3RvcmUgdGhlIGhpZGRlbiBwb3J0aW9uIG9mIHRoZSBgY29udGVudGAgc3RyaW5nLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIG91dHB1dC5cblx0ICovXG5cdHJlYmluZCgpOiBzdHJpbmcge1xuXHRcdGxldCB7Y29udGVudH0gPSB0aGlzO1xuXHRcdGZvciAoY29uc3QgY3VycmVudCBpbiB0aGlzLmhpc3RvcnkpIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bih0aGlzLmhpc3RvcnksIGN1cnJlbnQpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShjdXJyZW50LCB0aGlzLmhpc3RvcnlbY3VycmVudF0gYXMgc3RyaW5nKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy51bmJpbmRlclxuXHQgKi9cblx0c3RhdGljIGdldENhbGxiYWNrKHNlbGY6IFVuYmluZGVyKTogKG1hdGNoOiBzdHJpbmcpID0+IHN0cmluZyB7XG5cdFx0cmV0dXJuIChtYXRjaCkgPT4ge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHNlbGYucHJlZml4ICsgc2VsZi5jb3VudGVyICsgc2VsZi5wb3N0Zml4O1xuXHRcdFx0c2VsZi5oaXN0b3J5W2N1cnJlbnRdID0gbWF0Y2g7XG5cdFx0XHQrK3NlbGYuY291bnRlcjtcblx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdH07XG5cdH1cbn1cbk1vcmViaXRzLnVuYmluZGVyID0gVW5iaW5kZXI7XG4vKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmRhdGUgKioqKioqKioqKioqKioqKiAqL1xuLyoqIE5vcm1hbGl6ZWQgdW5pdCBuYW1lcyB3aXRoIGNvcnJlc3BvbmRpbmcgYERhdGUucHJvdG90eXBlYCBnZXR0ZXIvc2V0dGVyIG5hbWVzLiAqL1xudHlwZSBNYkRhdGVVbml0Tm9ybSA9ICdTZWNvbmRzJyB8ICdNaW51dGVzJyB8ICdIb3VycycgfCAnRGF0ZScgfCAnTW9udGgnIHwgJ0Z1bGxZZWFyJztcbi8qKiBUaGUgYXJndW1lbnQgbGlzdHMgYWNjZXB0ZWQgYnkgdGhlIHN0YW5kYXJkIGBEYXRlYCBjb25zdHJ1Y3RvciBvdmVybG9hZHMuICovXG50eXBlIE1vcmViaXRzRGF0ZUFyZ3MgPVxuXHR8IFtdXG5cdHwgW3ZhbHVlOiBudW1iZXIgfCBzdHJpbmddXG5cdHwgW1xuXHRcdFx0eWVhcjogbnVtYmVyLFxuXHRcdFx0bW9udGhJbmRleDogbnVtYmVyLFxuXHRcdFx0ZGF0ZT86IG51bWJlcixcblx0XHRcdGhvdXJzPzogbnVtYmVyLFxuXHRcdFx0bWludXRlcz86IG51bWJlcixcblx0XHRcdHNlY29uZHM/OiBudW1iZXIsXG5cdFx0XHRtcz86IG51bWJlcixcblx0ICBdO1xuLyoqXG4gKiBDcmVhdGUgYSBkYXRlIG9iamVjdCB3aXRoIGVuaGFuY2VkIHByb2Nlc3NpbmcgY2FwYWJpbGl0aWVzLCBhIGxhXG4gKiB7QGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vfG1vbWVudC5qc30uIE1lZGlhV2lraSB0aW1lc3RhbXAgZm9ybWF0IGlzIGFsc29cbiAqIGFjY2VwdGFibGUsIGluIGFkZGl0aW9uIHRvIGV2ZXJ5dGhpbmcgdGhhdCBKUyBEYXRlKCkgYWNjZXB0cy5cbiAqXG4gKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuICogQG1lbWJlcm9mIE1vcmViaXRzXG4gKiBAY2xhc3NcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtZGVjbGFyYXRpb24tbWVyZ2luZyAtLSBEYXRlIOaWueazleeUsSBPYmplY3QuYXNzaWduIOWcqOi/kOihjOaXtuWnlOaJmOaMgui9ve+8jOmcgOimgeexuy/mjqXlj6Plo7DmmI7lkIjlubbku6XooaXlhajnsbvlnotcbmNsYXNzIE1vcmViaXRzRGF0ZSB7XG5cdF9kOiBEYXRlO1xuXHQvKipcblx0ICogTG9jYWxpemVkIHN0cmluZ3MgZm9yIGRhdGUgcHJvY2Vzc2luZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLmRhdGVcblx0ICogQHR5cGUge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbW9udGhzU2hvcnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzU2hvcnRcblx0ICogQHByb3BlcnR5IHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn0gcmVsYXRpdmVUaW1lc1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0c3RhdGljIGxvY2FsZURhdGEgPSB7XG5cdFx0Ly8gbWVzc2FnZSBuYW1lcyBoZXJlIGNvcnJlc3BvbmQgdG8gTWVkaWFXaWtpIG1lc3NhZ2UgbmFtZXNcblx0XHQvLyBObyBpMThuIGF0IHRoaXMgdGltZVxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vbnRoc1Nob3J0OiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0ZGF5czogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcblx0XHRkYXlzU2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG5cdFx0cmVsYXRpdmVUaW1lczoge1xuXHRcdFx0dGhpc0RheTogJ1vku4rlpKldQSBoaDptbScsXG5cdFx0XHRwcmV2RGF5OiAnW+aYqOWkqV1BIGhoOm1tJyxcblx0XHRcdG5leHREYXk6ICdb5piO5aSpXUEgaGg6bW0nLFxuXHRcdFx0dGhpc1dlZWs6ICdkZGRkQSBoaDptbScsXG5cdFx0XHRwYXN0V2VlazogJ1vkuIpdZGRkZEEgaGg6bW0nLFxuXHRcdFx0b3RoZXI6ICdZWVlZLU1NLUREJyxcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogTWFwIHVuaXRzIHdpdGggZ2V0dGVyL3NldHRlciBmdW5jdGlvbiBuYW1lcywgZm9yIGBhZGRgIGFuZCBgc3VidHJhY3RgXG5cdCAqIG1ldGhvZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY29uZHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1pbnV0ZXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGhvdXJzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB3ZWVrc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB5ZWFyc1xuXHQgKi9cblx0c3RhdGljIHVuaXRNYXA6IFJlY29yZDxzdHJpbmcsIE1iRGF0ZVVuaXROb3JtIHwgJ1dlZWsnPiA9IHtcblx0XHRzZWNvbmRzOiAnU2Vjb25kcycsXG5cdFx0bWludXRlczogJ01pbnV0ZXMnLFxuXHRcdGhvdXJzOiAnSG91cnMnLFxuXHRcdGRheXM6ICdEYXRlJyxcblx0XHR3ZWVrczogJ1dlZWsnLFxuXHRcdC8vIE5vdCBhIGZ1bmN0aW9uIGJ1dCBoYW5kbGVkIGluIGBhZGRgIHRocm91Z2ggY3VubmluZyB1c2Ugb2YgbXVsdGlwbGljYXRpb25cblx0XHRtb250aHM6ICdNb250aCcsXG5cdFx0eWVhcnM6ICdGdWxsWWVhcicsXG5cdH07XG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3M6IE1vcmViaXRzRGF0ZUFyZ3MpIHtcblx0XHQvLyBDaGVjayBNZWRpYVdpa2kgZm9ybWF0c1xuXHRcdC8vIE11c3QgYmUgZmlyc3Qgc2luY2UgZmlyZWZveCBlcnJvbmVvdXNseSBhY2NlcHRzIHRoZSB0aW1lc3RhbXBcblx0XHQvLyBmb3JtYXQsIHNhbnMgdGltZXpvbmUgKFNlZSBhbHNvOiAjOTIxLCAjOTM2LCAjMTE3NCwgIzExODcpLCBhbmQgdGhlXG5cdFx0Ly8gMTQtZGlnaXQgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgZGlmZmVyZW50bHkuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjb25zdCBbcGFyYW1dID0gYXJncztcblx0XHRcdGlmICgvXlxcZHsxNH0kLy50ZXN0KFN0cmluZyhwYXJhbSkpKSB7XG5cdFx0XHRcdC8vIFlZWVlNTURESEhtbXNzXG5cdFx0XHRcdGNvbnN0IGRpZ2l0TWF0Y2ggPSAvKFxcZHs0fSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLy5leGVjKFN0cmluZyhwYXJhbSkpIGFzXG5cdFx0XHRcdFx0W3N0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ10gfCBudWxsO1xuXHRcdFx0XHRpZiAoZGlnaXRNYXRjaCkge1xuXHRcdFx0XHRcdC8vIC4uLi4uIHllYXIgLi4uIG1vbnRoIC4uIGRhdGUgLi4uIGhvdXIgLi4uLiBtaW51dGUgLi4uLi4gc2Vjb25kXG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKFxuXHRcdFx0XHRcdFx0RGF0ZS5VVEMoXG5cdFx0XHRcdFx0XHRcdE51bWJlcihkaWdpdE1hdGNoWzFdKSxcblx0XHRcdFx0XHRcdFx0TnVtYmVyKGRpZ2l0TWF0Y2hbMl0pIC0gMSxcblx0XHRcdFx0XHRcdFx0TnVtYmVyKGRpZ2l0TWF0Y2hbM10pLFxuXHRcdFx0XHRcdFx0XHROdW1iZXIoZGlnaXRNYXRjaFs0XSksXG5cdFx0XHRcdFx0XHRcdE51bWJlcihkaWdpdE1hdGNoWzVdKSxcblx0XHRcdFx0XHRcdFx0TnVtYmVyKGRpZ2l0TWF0Y2hbNl0pXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIFdpa2l0ZXh0IHNpZ25hdHVyZSB0aW1lc3RhbXBcblx0XHRcdFx0Y29uc3QgZGF0ZVBhcnRzID0gTW9yZWJpdHMubDEwbi5zaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGF0ZVBhcnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKFJlZmxlY3QuYXBwbHkoRGF0ZS5VVEMsIHVuZGVmaW5lZCwgZGF0ZVBhcnRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gVHJ5IHN0YW5kYXJkIGRhdGVcblx0XHR0aGlzLl9kID8/PSBuZXcgRGF0ZSguLi4oYXJncyBhcyBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIERhdGU+KSk7XG5cdFx0Ly8gU3RpbGwgbm8/XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0bXcubG9nLndhcm4oJ0ludmFsaWQgTW9yZWJpdHMuZGF0ZSBpbml0aWFsaXNhdGlvbjonLCBhcmdzKTtcblx0XHR9XG5cdH1cblx0LyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuXHRpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhTnVtYmVyLmlzTmFOKHRoaXMuZ2V0VGltZSgpKTtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGlzQmVmb3JlKGRhdGU6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPCBkYXRlLmdldFRpbWUoKTtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGlzQWZ0ZXIoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRnZXRVVENNb250aE5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldFVUQ01vbnRoKCldID8/ICcnO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRnZXRVVENNb250aE5hbWVBYmJyZXYoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0VVRDTW9udGgoKV0gPz8gJyc7XG5cdH1cblx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdGdldE1vbnRoTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0TW9udGgoKV0gPz8gJyc7XG5cdH1cblx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdGdldE1vbnRoTmFtZUFiYnJldigpOiBzdHJpbmcge1xuXHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzU2hvcnRbdGhpcy5nZXRNb250aCgpXSA/PyAnJztcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0Z2V0VVRDRGF5TmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldFVUQ0RheSgpXSA/PyAnJztcblx0fVxuXHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0Z2V0VVRDRGF5TmFtZUFiYnJldigpOiBzdHJpbmcge1xuXHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1Nob3J0W3RoaXMuZ2V0VVRDRGF5KCldID8/ICcnO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRnZXREYXlOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzW3RoaXMuZ2V0RGF5KCldID8/ICcnO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRnZXREYXlOYW1lQWJicmV2KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXREYXkoKV0gPz8gJyc7XG5cdH1cblx0LyoqXG5cdCAqIEFkZCBhIGdpdmVuIG51bWJlciBvZiBtaW51dGVzLCBob3VycywgZGF5cywgd2Vla3MsIG1vbnRocywgb3IgeWVhcnMgdG8gdGhlIGRhdGUuXG5cdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gU2hvdWxkIGJlIGFuIGludGVnZXIuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuZGF0ZX1cblx0ICovXG5cdGFkZChudW1iZXI6IG51bWJlciB8IHN0cmluZywgdW5pdDogc3RyaW5nKTogTW9yZWJpdHNEYXRlIHtcblx0XHRsZXQgbnVtID0gTnVtYmVyLnBhcnNlSW50KFN0cmluZyhudW1iZXIpLCAxMCk7IC8vIG5vcm1hbGl6ZVxuXHRcdGlmIChOdW1iZXIuaXNOYU4obnVtKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBudW1iZXIgXCIke251bWJlcn1cIiBwcm92aWRlZC5gKTtcblx0XHR9XG5cdFx0dW5pdCA9IHVuaXQudG9Mb3dlckNhc2UoKTsgLy8gbm9ybWFsaXplXG5cdFx0Y29uc3Qge3VuaXRNYXB9ID0gTW9yZWJpdHMuZGF0ZTtcblx0XHRsZXQgdW5pdE5vcm06IE1iRGF0ZVVuaXROb3JtIHwgJ1dlZWsnIHwgdW5kZWZpbmVkID0gdW5pdE1hcFt1bml0XSB8fCB1bml0TWFwW2Ake3VuaXR9c2BdOyAvLyBzbyB0aGF0IGJvdGggc2luZ3VsYXIgYW5kICBwbHVyYWwgZm9ybXMgd29ya1xuXHRcdGlmICh1bml0Tm9ybSkge1xuXHRcdFx0Ly8gTm8gYnVpbHQtaW4gd2VlayBmdW5jdGlvbnMsIHNvIHJhdGhlciB0aGFuIGJ1aWxkIG91dCBJU08ncyBnZXRXZWVrL3NldFdlZWssIGp1c3QgbXVsdGlwbHlcblx0XHRcdC8vIFByb2JhYmx5IGNhbid0IGJlIHVzZWQgZm9yIEp1bGlhbi0+R3JlZ29yaWFuIGNoYW5nZW92ZXJzLCBldGMuXG5cdFx0XHRpZiAodW5pdE5vcm0gPT09ICdXZWVrJykge1xuXHRcdFx0XHR1bml0Tm9ybSA9ICdEYXRlJztcblx0XHRcdFx0bnVtICo9IDc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBnZXR0ZXIgPSBgZ2V0JHt1bml0Tm9ybX1gIGFzIGBnZXQke01iRGF0ZVVuaXROb3JtfWA7XG5cdFx0XHRjb25zdCBzZXR0ZXIgPSBgc2V0JHt1bml0Tm9ybX1gIGFzIGBzZXQke01iRGF0ZVVuaXROb3JtfWA7XG5cdFx0XHR0aGlzW3NldHRlcl0odGhpc1tnZXR0ZXJdKCkgKyBudW0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IFwiJHt1bml0fVwiOiBPbmx5ICR7T2JqZWN0LmtleXModW5pdE1hcCkuam9pbignLCAnKX0gYXJlIGFsbG93ZWQuYCk7XG5cdH1cblx0LyoqXG5cdCAqIFN1YnRyYWN0cyBhIGdpdmVuIG51bWJlciBvZiBtaW51dGVzLCBob3VycywgZGF5cywgd2Vla3MsIG1vbnRocywgb3IgeWVhcnMgdG8gdGhlIGRhdGUuXG5cdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gU2hvdWxkIGJlIGFuIGludGVnZXIuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHQgKi9cblx0c3VidHJhY3QobnVtYmVyOiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IE1vcmViaXRzRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkKC1udW1iZXIsIHVuaXQpO1xuXHR9XG5cdC8qKlxuXHQgKiBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZyBwZXIgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG5cdCAqIFJlcGxhY2VtZW50IHN5bnRheCBpcyBhIHN1YnNldCBvZiB0aGF0IGluIG1vbWVudC5qczpcblx0ICpcblx0ICogfCBTeW50YXggfCBPdXRwdXQgfFxuXHQgKiB8LS0tLS0tLS18LS0tLS0tLS18XG5cdCAqIHwgSCB8IEhvdXJzICgyNC1ob3VyKSB8XG5cdCAqIHwgSEggfCBIb3VycyAoMjQtaG91ciwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdCAqIHwgaCB8IEhvdXJzICgxMi1ob3VyKSB8XG5cdCAqIHwgaGggfCBIb3VycyAoMTItaG91ciwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdCAqIHwgQSB8IEFNIG9yIFBNIHxcblx0ICogfCBtIHwgTWludXRlcyB8XG5cdCAqIHwgbW0gfCBNaW51dGVzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0ICogfCBzIHwgU2Vjb25kcyB8XG5cdCAqIHwgc3MgfCBTZWNvbmRzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0ICogfCBTU1MgfCBNaWxsaXNlY29uZHMgZnJhZ21lbnQsIDMgZGlnaXRzIHxcblx0ICogfCBkIHwgRGF5IG51bWJlciBvZiB0aGUgd2VlayAoU3VuPTApIHxcblx0ICogfCBkZGQgfCBBYmJyZXZpYXRlZCBkYXkgbmFtZSB8XG5cdCAqIHwgZGRkZCB8IEZ1bGwgZGF5IG5hbWUgfFxuXHQgKiB8IEQgfCBEYXRlIHxcblx0ICogfCBERCB8IERhdGUgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHQgKiB8IE0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCkgfFxuXHQgKiB8IE1NIHwgTW9udGggbnVtYmVyICgxLWluZGV4ZWQsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHQgKiB8IE1NTSB8IEFiYnJldmlhdGVkIG1vbnRoIG5hbWUgfFxuXHQgKiB8IE1NTU0gfCBGdWxsIG1vbnRoIG5hbWUgfFxuXHQgKiB8IFkgfCBZZWFyIHxcblx0ICogfCBZWSB8IEZpbmFsIHR3byBkaWdpdHMgb2YgeWVhciAoMjAgZm9yIDIwMjAsIDQyIGZvciAxOTQyKSB8XG5cdCAqIHwgWVlZWSB8IFllYXIgKHNhbWUgYXMgYFlgKSB8XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRzdHIgLSBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZywgdXNpbmdcblx0ICogdGhlIHJlcGxhY2VtZW50IHN5bnRheC4gIFVzZSBgW2AgYW5kIGBdYCB0byBlc2NhcGUgaXRlbXMuICBJZiBub3Rcblx0ICogcHJvdmlkZWQsIHdpbGwgcmV0dXJuIHRoZSBJU08tODYwMS1mb3JtYXR0ZWQgc3RyaW5nLlxuXHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtIGBzeXN0ZW1gIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdCAqIGB1dGNgLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHJlbGF0aXZlIHRvIFVUQy5cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZvcm1hdChmb3JtYXRzdHI/OiBzdHJpbmcsIHpvbmU/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuXHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdHJldHVybiAnSW52YWxpZCBkYXRlJzsgLy8gUHV0IHRoZSB0cnV0aCBvdXQsIHByZWZlcmFibGUgdG8gXCJOYU5OYU5OYW4gTmFOOk5hTlwiIG9yIHdoYXRldmVyXG5cdFx0fVxuXG5cdFx0bGV0IHVkYXRlOiBNb3JlYml0c0RhdGUgPSB0aGlzO1xuXHRcdC8vIGNyZWF0ZSBhIG5ldyBkYXRlIG9iamVjdCB0aGF0IHdpbGwgY29udGFpbiB0aGUgZGF0ZSB0byBkaXNwbGF5IGFzIHN5c3RlbSB0aW1lXG5cdFx0aWYgKHpvbmUgPT09ICd1dGMnKSB7XG5cdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHpvbmUgPT09ICdudW1iZXInKSB7XG5cdFx0XHQvLyBjb252ZXJ0IHRvIHV0YywgdGhlbiBhZGQgdGhlIHV0YyBvZmZzZXQgZ2l2ZW5cblx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkgKyB6b25lLCAnbWludXRlcycpO1xuXHRcdH1cblx0XHQvLyBkZWZhdWx0IHRvIElTT1N0cmluZ1xuXHRcdGlmICghZm9ybWF0c3RyKSB7XG5cdFx0XHRyZXR1cm4gdWRhdGUudG9JU09TdHJpbmcoKTtcblx0XHR9XG5cdFx0Y29uc3QgcGFkID0gKG51bTogbnVtYmVyLCBsZW4/OiBudW1iZXIpID0+IHtcblx0XHRcdGxlbiB8fD0gMjsgLy8gVXAgdG8gbGVuZ3RoIG9mIDAwICsgMVxuXHRcdFx0cmV0dXJuIGAwMCR7bnVtfWAudG9TdHJpbmcoKS5zbGljZSgwIC0gbGVuKTtcblx0XHR9O1xuXHRcdGNvbnN0IGgyNCA9IHVkYXRlLmdldEhvdXJzKCk7XG5cdFx0Y29uc3QgbSA9IHVkYXRlLmdldE1pbnV0ZXMoKTtcblx0XHRjb25zdCBzID0gdWRhdGUuZ2V0U2Vjb25kcygpO1xuXHRcdGNvbnN0IG1zID0gdWRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdFx0Y29uc3QgRCA9IHVkYXRlLmdldERhdGUoKTtcblx0XHRjb25zdCBNID0gdWRhdGUuZ2V0TW9udGgoKSArIDE7XG5cdFx0Y29uc3QgWSA9IHVkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0Y29uc3QgaDEyID0gaDI0ICUgMTIgfHwgMTI7XG5cdFx0Y29uc3QgYW1PclBtID0gaDI0ID49IDEyID8gJ+S4i+WNiCcgOiAn5LiK5Y2IJztcblx0XHRjb25zdCByZXBsYWNlbWVudE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPiA9IHtcblx0XHRcdEhIOiBwYWQoaDI0KSxcblx0XHRcdEg6IGgyNCxcblx0XHRcdGhoOiBwYWQoaDEyKSxcblx0XHRcdGg6IGgxMixcblx0XHRcdEE6IGFtT3JQbSxcblx0XHRcdG1tOiBwYWQobSksXG5cdFx0XHRtLFxuXHRcdFx0c3M6IHBhZChzKSxcblx0XHRcdHMsXG5cdFx0XHRTU1M6IHBhZChtcywgMyksXG5cdFx0XHRkZGRkOiB1ZGF0ZS5nZXREYXlOYW1lKCksXG5cdFx0XHRkZGQ6IHVkYXRlLmdldERheU5hbWVBYmJyZXYoKSxcblx0XHRcdGQ6IHVkYXRlLmdldERheSgpLFxuXHRcdFx0REQ6IHBhZChEKSxcblx0XHRcdEQsXG5cdFx0XHRNTU1NOiB1ZGF0ZS5nZXRNb250aE5hbWUoKSxcblx0XHRcdE1NTTogdWRhdGUuZ2V0TW9udGhOYW1lQWJicmV2KCksXG5cdFx0XHRNTTogcGFkKE0pLFxuXHRcdFx0TSxcblx0XHRcdFlZWVk6IFksXG5cdFx0XHRZWTogcGFkKFkgJSAxMDApLFxuXHRcdFx0WSxcblx0XHR9O1xuXHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKGZvcm1hdHN0cik7IC8vIGVzY2FwZSBzdHVmZiBiZXR3ZWVuIFsuLi5dXG5cdFx0dW5iaW5kZXIudW5iaW5kKFN0cmluZy5yYXdgXFxbYCwgU3RyaW5nLnJhd2BcXF1gKTtcblx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKFxuXHRcdFx0LyogUmVnZXggbm90ZXM6XG5cdFx0XHQgKiBkKGR7MiwzfSk/IG1hdGNoZXMgZXhhY3RseSAxLCAzIG9yIDQgb2NjdXJyZW5jZXMgb2YgJ2QnICgnZGQnIGlzIHRyZWF0ZWQgYXMgYSBkb3VibGUgbWF0Y2ggb2YgJ2QnKVxuXHRcdFx0ICogWXsxLDJ9KFl7Mn0pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMiBvciA0IG9jY3VycmVuY2VzIG9mICdZJ1xuXHRcdFx0ICovXG5cdFx0XHQvSHsxLDJ9fGh7MSwyfXxtezEsMn18c3sxLDJ9fFNTU3xkKGR7MiwzfSk/fER7MSwyfXxNezEsNH18WXsxLDJ9KFl7Mn0pP3xBL2csXG5cdFx0XHQobWF0Y2gpID0+IHtcblx0XHRcdFx0cmV0dXJuIFN0cmluZyhyZXBsYWNlbWVudE1hcFttYXRjaF0gPz8gbWF0Y2gpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHVuYmluZGVyLnJlYmluZCgpLnJlcGxhY2UoL1xcWyguKj8pXFxdL2csICckMScpO1xuXHR9XG5cdC8qKlxuXHQgKiBHaXZlcyBhIHJlYWRhYmxlIHJlbGF0aXZlIHRpbWUgc3RyaW5nIHN1Y2ggYXMgXCJZZXN0ZXJkYXkgYXQgNjo0MyBQTVwiIG9yIFwiTGFzdCBUaHVyc2RheSBhdCAxMTo0NSBBTVwiLlxuXHQgKiBTaW1pbGFyIHRvIGBjYWxlbmRhcmAgaW4gbW9tZW50LmpzLCBidXQgd2l0aCB0aW1lIHpvbmUgc3VwcG9ydC5cblx0ICpcblx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSAnc3lzdGVtJyAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHQgKiAndXRjJyAoZm9yIFVUQyksIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcGFzdCBVVEMuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRjYWxlbmRhcih6b25lPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcblx0XHQvLyBaZXJvIG91dCB0aGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgYW5kIG1pbGxpc2Vjb25kcyAtIGtlZXBpbmcgb25seSB0aGUgZGF0ZTtcblx0XHQvLyBmaW5kIHRoZSBkaWZmZXJlbmNlLiBOb3RlIHRoYXQgc2V0SG91cnMoKSByZXR1cm5zIHRoZSBzYW1lIHRoaW5nIGFzIGdldFRpbWUoKS5cblx0XHRjb25zdCBkYXRlRGlmZiA9IChuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApIC0gbmV3IERhdGUodGhpcy5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApKSAvIDguNjRlNztcblx0XHRzd2l0Y2ggKHRydWUpIHtcblx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IDA6XG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzRGF5LCB6b25lKTtcblx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IDE6XG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5wcmV2RGF5LCB6b25lKTtcblx0XHRcdGNhc2UgZGF0ZURpZmYgPiAwICYmIGRhdGVEaWZmIDwgNzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnBhc3RXZWVrLCB6b25lKTtcblx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IC0xOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMubmV4dERheSwgem9uZSk7XG5cdFx0XHRjYXNlIGRhdGVEaWZmIDwgMCAmJiBkYXRlRGlmZiA+IC03OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMudGhpc1dlZWssIHpvbmUpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLm90aGVyLCB6b25lKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIEdldCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgd2lraXRleHQgc2VjdGlvbiB0aXRsZXMsIHN1Y2hcblx0ICogYXMgYD09RGVjZW1iZXIgMjAxOT09YCBvciBgPT09IEphbiAyMDE4ID09PWAuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtSZWdFeHB9XG5cdCAqL1xuXHRtb250aEhlYWRlclJlZ2V4KCk6IFJlZ0V4cCB7XG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAoXG5cdFx0XHRgXig9PSspXFxcXHMqJHt0aGlzLmdldFVUQ0Z1bGxZZWFyKCl95bm0KD86JHt0aGlzLmdldFVUQ01vbnRoTmFtZSgpfXwke3RoaXMuZ2V0VVRDTW9udGhOYW1lQWJicmV2KCl9KVxcXFxzKlxcXFwxYCxcblx0XHRcdCdtZydcblx0XHQpO1xuXHR9XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgd2lraXRleHQgc2VjdGlvbiBoZWFkZXIgd2l0aCB0aGUgbW9udGggYW5kIHllYXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbbGV2ZWw9Ml0gLSBIZWFkZXIgbGV2ZWwuICBQYXNzIDAgZm9yIGp1c3QgdGhlIHRleHRcblx0ICogd2l0aCBubyB3aWtpdGV4dCBtYXJrZXJzICg9PSkuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRtb250aEhlYWRlcihsZXZlbD86IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Ly8gRGVmYXVsdCB0byAyLCBidXQgYWxsb3cgZm9yIDAgb3Igc3RyaW5neSBudW1iZXJzXG5cdFx0bGV2ZWwgPSBOdW1iZXIucGFyc2VJbnQoU3RyaW5nKGxldmVsKSwgMTApO1xuXHRcdGxldmVsID0gTnVtYmVyLmlzTmFOKGxldmVsKSA/IDIgOiBsZXZlbDtcblx0XHRjb25zdCBoZWFkZXIgPSAnPScucmVwZWF0KGxldmVsKTtcblx0XHRjb25zdCB0ZXh0ID0gYCR7dGhpcy5nZXRVVENGdWxsWWVhcigpfeW5tCR7dGhpcy5nZXRVVENNb250aE5hbWUoKX1gO1xuXHRcdGlmIChoZWFkZXIubGVuZ3RoKSB7XG5cdFx0XHQvLyB3aWtpdGV4dC1mb3JtYXR0ZWQgaGVhZGVyXG5cdFx0XHRyZXR1cm4gYCR7aGVhZGVyfSAke3RleHR9ICR7aGVhZGVyfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0ZXh0OyAvLyBKdXN0IHRoZSBzdHJpbmdcblx0fVxufVxuLy8gQWxsb3cgbmF0aXZlIERhdGUucHJvdG90eXBlIG1ldGhvZHMgdG8gYmUgdXNlZCBvbiBNb3JlYml0cy5kYXRlIG9iamVjdHNcbi8vIEV4Y2x1ZGUgbWV0aG9kcyB0aGF0IGNvbGxpZGUgd2l0aCBQYWdlVHJpYWdlJ3MgRGF0ZS5qcyBleHRlcm5hbCwgd2hpY2ggY2xvYmJlcnMgbmF0aXZlIERhdGVcbmNvbnN0IGRlbGVnYXRlZERhdGVQcm90bzogUmVjb3JkPHN0cmluZywgKHRoaXM6IE1vcmViaXRzRGF0ZSwgLi4uYXJnczogdW5rbm93bltdKSA9PiB1bmtub3duPiA9IHt9O1xuZm9yIChjb25zdCBmdW5jIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKERhdGUucHJvdG90eXBlKSkge1xuXHRpZiAoZnVuYyAhPT0gJ2NvbnN0cnVjdG9yJyAmJiAhWydhZGQnLCAnZ2V0RGF5TmFtZScsICdnZXRNb250aE5hbWUnXS5pbmNsdWRlcyhmdW5jKSkge1xuXHRcdGRlbGVnYXRlZERhdGVQcm90b1tmdW5jXSA9IGZ1bmN0aW9uICh0aGlzOiBNb3JlYml0c0RhdGUsIC4uLmFyZ3M6IHVua25vd25bXSk6IHVua25vd24ge1xuXHRcdFx0cmV0dXJuICh0aGlzLl9kIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdW5rbm93bj4pW2Z1bmNdISguLi5hcmdzKTtcblx0XHR9O1xuXHR9XG59XG5PYmplY3QuYXNzaWduKE1vcmViaXRzRGF0ZS5wcm90b3R5cGUsIGRlbGVnYXRlZERhdGVQcm90byk7XG4vKipcbiAqIE5hdGl2ZSBEYXRlLnByb3RvdHlwZSBtZXRob2RzIGRlbGVnYXRlZCB0byB0aGUgd3JhcHBlZCBEYXRlIGluc3RhbmNlLlxuICogQHNlZSBkZWxlZ2F0ZWREYXRlUHJvdG8gYWJvdmVcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtZGVjbGFyYXRpb24tbWVyZ2luZyAtLSDlkIzkuIrvvJrlo7DmmI7lp5TmiZjnu5nljp/lnovlrp7kvovnmoQgRGF0ZSDmlrnms5VcbmludGVyZmFjZSBNb3JlYml0c0RhdGUgZXh0ZW5kcyBEYXRlIHt9XG5Nb3JlYml0cy5kYXRlID0gTW9yZWJpdHNEYXRlO1xuXG5pbnRlcmZhY2UgTW9yZWJpdHNOYW1lc3BhY2Uge1xuXHR3aWtpOiBXaWtpTmFtZXNwYWNlO1xufVxuaW50ZXJmYWNlIFdpa2lOYW1lc3BhY2Uge31cbmludGVyZmFjZSBXaWtpTmFtZXNwYWNlIHtcblx0LyoqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGFzIG9mIE5vdmVtYmVyIDIwMjAgKi9cblx0aXNQYWdlUmVkaXJlY3Q6ICgpID0+IGJvb2xlYW47XG5cdC8qKiBDb3VudGVyIGluY3JlbWVudGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBNb3JlYml0cy53aWtpLmFwaSBjYWxsLiAqL1xuXHRudW1iZXJPZkFjdGlvbnNMZWZ0OiBudW1iZXI7XG5cdC8qKiBDb3VudGVyIHVzZWQgZm9yIGJhdGNoIG9wZXJhdGlvbnMsIG1hbmFnZWQgYnkgYWRkQ2hlY2twb2ludC9yZW1vdmVDaGVja3BvaW50LiAqL1xuXHRuYnJPZkNoZWNrcG9pbnRzTGVmdDogbnVtYmVyO1xuXHQvKiogRGlzcGxheSBtZXNzYWdlIGFuZC9vciByZWRpcmVjdCB0byBwYWdlIHVwb24gY29tcGxldGlvbiBvZiB0YXNrcy4gKi9cblx0YWN0aW9uQ29tcGxldGVkOiBXaWtpQWN0aW9uQ29tcGxldGVkO1xuXHQvKiogSW5kaWNhdGUgdGhhdCBwcm9jZXNzaW5nIGlzIG5vdCBjb21wbGV0ZSB1cG9uIHRoZSBjb25jbHVzaW9uIG9mIHRoZSBmaW5hbCBjYWxsYmFjayBmdW5jdGlvbi4gKi9cblx0YWRkQ2hlY2twb2ludDogKCkgPT4gdm9pZDtcblx0LyoqIFNpZ25hbCB0aGUgZW5kIG9mIGEgYmF0Y2guICovXG5cdHJlbW92ZUNoZWNrcG9pbnQ6ICgpID0+IHZvaWQ7XG5cdC8qKiBBbiBlYXN5IHdheSB0byB0YWxrIHRvIHRoZSBNZWRpYVdpa2kgQVBJLiAqL1xuXHRhcGk6IHR5cGVvZiBXaWtpQXBpO1xuXHQvKiogUmV0cmlldmVzIHdpa2l0ZXh0IGZyb20gYSBwYWdlLiBDYWNoaW5nIGVuYWJsZWQsIGR1cmF0aW9uIDEgZGF5LiAqL1xuXHRnZXRDYWNoZWRKc29uOiAodGl0bGU6IHN0cmluZykgPT4gSlF1ZXJ5LlByb21pc2U8dW5rbm93bj47XG59XG5cbi8qKlxuICogVGhlIGNhbGxhYmxlIGBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZGAsIHdpdGggaXRzIHBlci1hY3Rpb25cbiAqIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBhdHRhY2hlZC5cbiAqL1xudHlwZSBXaWtpQWN0aW9uQ29tcGxldGVkID0gKChzZWxmPzogdW5rbm93bikgPT4gdm9pZCkgJiB7XG5cdGV2ZW50OiAoc2VsZj86IHVua25vd24pID0+IHZvaWQ7XG5cdHRpbWVPdXQ6IG51bWJlcjtcblx0cmVkaXJlY3Q6IHN0cmluZyB8IG51bGw7XG5cdG5vdGljZTogc3RyaW5nIHwgbnVsbDtcblx0LyoqIEFzc2lnbmVkIGJ5IGNvbnN1bWVycyBiZWZvcmUgdGhlIGZpcnN0IGNhbGwsIHNlZSBNb3JlYml0cy53aWtpLnBhZ2UuICovXG5cdGZvbGxvd1JlZGlyZWN0PzogYm9vbGVhbjtcbn07XG5cbi8qKiBBIE1vcmViaXRzLnN0YXR1cyBpbnN0YW5jZSAoZGVmaW5lZCBieSBhIGxhdGVyIGZyYWdtZW50IG9mIHRoaXMgbW9kdWxlKS4gKi9cbnR5cGUgU3RhdHVzRWxlbWVudCA9IEluc3RhbmNlVHlwZTxNb3JlYml0c05hbWVzcGFjZVsnc3RhdHVzJ10+O1xuXG4vKipcbiAqIFRoZSBKU09OIHJlc3BvbnNlIG9mIGEgTWVkaWFXaWtpIEFQSSByZXF1ZXN0LCBpbiB0aGUgcGFydGlhbCBzaGFwZSB1c2VkXG4gKiBieSBNb3JlYml0cy5cbiAqL1xuaW50ZXJmYWNlIE13QXBpUmVzcG9uc2Uge1xuXHQvKiogQVBJIGVycm9ycywgbGltaXRlZCB0byB0aGUgZmlyc3Qgb25lLiAqL1xuXHRlcnJvcnM/OiB7Y29kZTogc3RyaW5nOyBodG1sPzogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nfVtdO1xuXHRba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG4vKiogVGhlIHF1ZXJ5IHBheWxvYWQgb2YgYSBNb3JlYml0cy53aWtpLmFwaSByZXF1ZXN0LiAqL1xuaW50ZXJmYWNlIFdpa2lBcGlRdWVyeSB7XG5cdGFjdGlvbj86IHN0cmluZztcblx0YXNzZXJ0Pzogc3RyaW5nO1xuXHRlcnJvcmZvcm1hdD86IHN0cmluZztcblx0dXNlbGFuZz86IHN0cmluZztcblx0ZXJyb3JsYW5nPzogc3RyaW5nO1xuXHRlcnJvcnN1c2Vsb2NhbD86IG51bWJlcjtcblx0Zm9ybWF0Pzogc3RyaW5nO1xuXHRmb3JtYXR2ZXJzaW9uPzogc3RyaW5nIHwgbnVtYmVyO1xuXHR0YWdzPzogc3RyaW5nIHwgc3RyaW5nW107XG5cdHRva2VuPzogc3RyaW5nIHwgbnVsbDtcblx0W2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgV2luZG93IHtcblx0XHQvKiogVXNlZCBieSBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgdGhlIGFjdGlvbkNvbXBsZXRlZCByZWRpcmVjdCB0aW1lb3V0IChtcykuICovXG5cdFx0d3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0PzogbnVtYmVyO1xuXHR9XG59XG5cbi8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraSAqKioqKioqKioqKioqKioqICovXG4vKipcbiAqIFZhcmlvdXMgb2JqZWN0cyBmb3Igd2lraSBlZGl0aW5nIGFuZCBBUEkgYWNjZXNzLCBpbmNsdWRpbmdcbiAqIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LlxuICpcbiAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraVxuICogQG1lbWJlcm9mIE1vcmViaXRzXG4gKi9cbk1vcmViaXRzLndpa2kgPSB7fSBhcyBXaWtpTmFtZXNwYWNlO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCBhcyBvZiBOb3ZlbWJlciAyMDIwXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbk1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgPSAoKSA9PiB7XG5cdGNvbnNvbGUud2Fybihcblx0XHQnW01vcmViaXRzXSBOT1RFOiBNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0IGhhcyBiZWVuIGRlcHJlY2F0ZWQsIHVzZSBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCBpbnN0ZWFkLidcblx0KTtcblx0cmV0dXJuIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0KCk7XG59O1xuLyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCAqKioqKioqKioqKioqKioqICovXG4vKipcbiAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPSAwO1xuLyoqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuICogQHR5cGUge251bWJlcn1cbiAqL1xuTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA9IDA7XG4vKipcbiAqIERpc3BsYXkgbWVzc2FnZSBhbmQvb3IgcmVkaXJlY3QgdG8gcGFnZSB1cG9uIGNvbXBsZXRpb24gb2YgdGFza3MuXG4gKlxuICogRXZlcnkgY2FsbCB0byBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgcmVzdWx0cyBpbiB0aGUgZGlzcGF0Y2ggb2YgYW5cbiAqIGFzeW5jaHJvbm91cyBjYWxsYmFjay4gRWFjaCBjYWxsYmFjayBjYW4gaW4gdHVybiBtYWtlIGFuIGFkZGl0aW9uYWwgY2FsbCB0b1xuICogTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHRvIGNvbnRpbnVlIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZS4gQXQgdGhlXG4gKiBjb25jbHVzaW9uIG9mIHRoZSBmaW5hbCBjYWxsYmFjayBvZiBhIHByb2Nlc3Npbmcgc2VxdWVuY2UsIGl0IGlzIG5vdFxuICogcG9zc2libGUgdG8gc2ltcGx5IHJldHVybiB0byB0aGUgb3JpZ2luYWwgY2FsbGVyIGJlY2F1c2UgdGhlcmUgaXMgbm8gY2FsbFxuICogc3RhY2sgbGVhZGluZyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0LiBJbnN0ZWFkLFxuICogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSBpcyBjYWxsZWQgdG8gZGlzcGxheSB0aGUgcmVzdWx0IHRvXG4gKiB0aGUgdXNlciBhbmQgdG8gcGVyZm9ybSBhbiBvcHRpb25hbCBwYWdlIHJlZGlyZWN0LlxuICpcbiAqIFRoZSBkZXRlcm1pbmF0aW9uIG9mIHdoZW4gdG8gY2FsbCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzXG4gKiBtYW5hZ2VkIHRocm91Z2ggdGhlIGdsb2JhbHMgTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGFuZFxuICogTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdC4gTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGlzXG4gKiBpbmNyZW1lbnRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgTW9yZWJpdHMud2lraS5hcGkgY2FsbCBhbmQgZGVjcmVtZW50ZWRcbiAqIGFmdGVyIHRoZSBjb21wbGV0aW9uIG9mIGEgY2FsbGJhY2sgZnVuY3Rpb24uIElmIGEgY2FsbGJhY2sgZnVuY3Rpb24gZG9lc1xuICogbm90IGNyZWF0ZSBhIG5ldyBNb3JlYml0cy53aWtpLmFwaSBvYmplY3QgYmVmb3JlIGV4aXRpbmcsIGl0IGlzIHRoZSBmaW5hbFxuICogc3RlcCBpbiB0aGUgcHJvY2Vzc2luZyBjaGFpbiBhbmQgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSB3aWxsXG4gKiB0aGVuIGJlIGNhbGxlZC5cbiAqXG4gKiBPcHRpb25hbGx5LCBjYWxsZXJzIG1heSB1c2UgTW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50KCkgdG8gaW5kaWNhdGUgdGhhdFxuICogcHJvY2Vzc2luZyBpcyBub3QgY29tcGxldGUgdXBvbiB0aGUgY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uLiAgVGhpcyBpcyB1c2VkIGZvciBiYXRjaCBvcGVyYXRpb25zLiBUaGUgZW5kIG9mIGEgYmF0Y2ggaXNcbiAqIHNpZ25hbGVkIGJ5IGNhbGxpbmcgTW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCkuXG4gKlxuICogQHBhcmFtIHt0eXBlb2YgTW9yZWJpdHN9IHNlbGZcbiAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG4gKi9cbk1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkID0gKChzZWxmPzogdW5rbm93bikgPT4ge1xuXHRpZiAoLS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDApIHtcblx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudChzZWxmKTtcblx0fVxufSkgYXMgV2lraUFjdGlvbkNvbXBsZXRlZDtcbi8vIENoYW5nZSBwZXIgYWN0aW9uIHdhbnRlZFxuLyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5Nb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCA9ICgpID0+IHtcblx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSkge1xuXHRcdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKTtcblx0fVxuXHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpIHtcblx0XHQvLyBpZiBpdCBpc24ndCBhIFVSTCwgbWFrZSBpdCBvbmUuIFRPRE86IFRoaXMgYnJlYWtzIG9uIHRoZSBhcnRpY2xlcyAnaHR0cDovLycsICdmdHA6Ly8nLCBhbmQgc2ltaWxhciBvbmVzLlxuXHRcdGlmICghL15cXHcrOlxcL1xcLy8udGVzdChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkpIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbXcudXRpbC5nZXRVcmwoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpO1xuXHRcdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmZvbGxvd1JlZGlyZWN0ID09PSBmYWxzZSkge1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCArPSAnP3JlZGlyZWN0PW5vJztcblx0XHRcdH1cblx0XHR9XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgYXMgc3RyaW5nO1xuXHRcdH0sIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQpO1xuXHR9XG59O1xuLyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5Nb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0ID1cblx0d2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dCA9PT0gdW5kZWZpbmVkID8gNTAwMCA6IHdpbmRvdy53cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQ7XG4vKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cbk1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbnVsbDtcbi8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlID0gbnVsbDtcbi8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuTW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50ID0gKCkgPT4ge1xuXHQrK01vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQ7XG59O1xuLyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5Nb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdGlmICgtLU1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCkge1xuXHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCk7XG5cdH1cbn07XG4vKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kuYXBpICoqKioqKioqKioqKioqKiogKi9cbi8qKlxuICogQW4gZWFzeSB3YXkgdG8gdGFsayB0byB0aGUgTWVkaWFXaWtpIEFQSS4gIEFjY2VwdHMgZWl0aGVyIGpzb24gb3IgeG1sXG4gKiAoZGVmYXVsdCkgZm9ybWF0czsgaWYganNvbiBpcyBzZWxlY3RlZCwgd2lsbCBkZWZhdWx0IHRvIGBmb3JtYXR2ZXJzaW9uPTJgXG4gKiB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC4gIFNpbWlsYXJseSwgZW5mb3JjZXMgbmV3ZXIgYGVycm9yZm9ybWF0YHMsXG4gKiBkZWZhdWx0aW5nIHRvIGBodG1sYCBpZiB1bnNwZWNpZmllZC4gIGB1c2VsYW5nYCBlbmZvcmNlZCB0byB0aGUgd2lraSdzXG4gKiBjb250ZW50IGxhbmd1YWdlLlxuICpcbiAqIEluIG5ldyBjb2RlLCB0aGUgdXNlIG9mIHRoZSBsYXN0IDMgcGFyYW1ldGVycyBzaG91bGQgYmUgYXZvaWRlZCwgaW5zdGVhZFxuICogdXNlIHtAbGluayBNb3JlYml0cy53aWtpLmFwaSNzZXRTdGF0dXNFbGVtZW50fHNldFN0YXR1c0VsZW1lbnQoKX0gdG8gYmluZFxuICogdGhlIHN0YXR1cyBlbGVtZW50IChpZiBuZWVkZWQpIGFuZCB1c2UgYC50aGVuKClgIG9yIGAuY2F0Y2goKWAgb24gdGhlXG4gKiBwcm9taXNlIHJldHVybmVkIGJ5IGBwb3N0KClgLCByYXRoZXIgdGhhbiBzcGVjaWZ5IHRoZSBgb25TdWNjZXNzYCBvclxuICogYG9uRmFpbHVyZWAgY2FsbGJhY2tzLlxuICpcbiAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50QWN0aW9uIC0gVGhlIGN1cnJlbnQgYWN0aW9uIChyZXF1aXJlZCkuXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgLSBUaGUgcXVlcnkgKHJlcXVpcmVkKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gW3N0YXR1c0VsZW1lbnRdIC0gQSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0IHRvIHVzZSBmb3Igc3RhdHVzIG1lc3NhZ2VzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgaWYgYW4gZXJyb3Igb2NjdXJzLlxuICovXG5jbGFzcyBXaWtpQXBpIHtcblx0Y3VycmVudEFjdGlvbjogc3RyaW5nO1xuXHRvblN1Y2Nlc3M6ICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uRXJyb3I6ICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGw7XG5cdHBhcmVudDogb2JqZWN0ID0gd2luZG93OyAvLyB1c2UgZ2xvYmFsIGNvbnRleHQgaWYgdGhlcmUgaXMgbm8gcGFyZW50IG9iamVjdFxuXHRxdWVyeTogV2lraUFwaVF1ZXJ5O1xuXHRyZXNwb25zZTogTXdBcGlSZXNwb25zZSB8IFhNTERvY3VtZW50IHwgbnVsbCA9IG51bGw7XG5cdHJlc3BvbnNlWE1MOiBNd0FwaVJlc3BvbnNlIHwgWE1MRG9jdW1lbnQgfCBudWxsID0gbnVsbDsgLy8gdXNlIGByZXNwb25zZWAgaW5zdGVhZDsgcmV0YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdHN0YXRlbGVtITogU3RhdHVzRWxlbWVudDsgLy8gdGhpcyBub24tc3RhbmRhcmQgbmFtZSBrZXB0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRzdGF0dXNUZXh0OiBzdHJpbmcgfCBudWxsID0gbnVsbDsgLy8gcmVzdWx0IHJlY2VpdmVkIGZyb20gdGhlIEFQSSwgbm9ybWFsbHkgXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG5cdGVycm9yQ29kZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7IC8vIHNob3J0IHRleHQgZXJyb3IgY29kZSwgaWYgYW55LCBhcyBkb2N1bWVudGVkIGluIHRoZSBNZWRpYVdpa2kgQVBJXG5cdGVycm9yVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGw7IC8vIGZ1bGwgZXJyb3IgZGVzY3JpcHRpb24sIGlmIGFueVxuXHRiYWR0b2tlblJldHJ5OiBib29sZWFuID0gZmFsc2U7IC8vIHNldCB0byB0cnVlIGlmIHRoaXMgb24gYSByZXRyeSBhdHRlbXB0ZWQgYWZ0ZXIgYSBiYWR0b2tlbiBlcnJvclxuXHQvLyBhc3NpZ25lZCBpbiBvbkFQSWZhaWx1cmU7IGZyZXF1ZW50bHkgdW5kZWZpbmVkXG5cdGRlY2xhcmUgZXJyb3JUaHJvd24/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0Y3VycmVudEFjdGlvbjogc3RyaW5nLFxuXHRcdHF1ZXJ5OiBXaWtpQXBpUXVlcnksXG5cdFx0b25TdWNjZXNzPzogKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbCxcblx0XHRzdGF0dXNFbGVtZW50PzogU3RhdHVzRWxlbWVudCxcblx0XHRvbkVycm9yPzogKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHQpIHtcblx0XHR0aGlzLmN1cnJlbnRBY3Rpb24gPSBjdXJyZW50QWN0aW9uO1xuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcblx0XHR0aGlzLnF1ZXJ5LmFzc2VydCA9ICd1c2VyJztcblx0XHQvLyBFbmZvcmNlIG5ld2VyIGVycm9yIGZvcm1hdHMsIHByZWZlcnJpbmcgaHRtbFxuXHRcdGlmICghcXVlcnkuZXJyb3Jmb3JtYXQgfHwgIVsnd2lraXRleHQnLCAncGxhaW50ZXh0J10uaW5jbHVkZXMocXVlcnkuZXJyb3Jmb3JtYXQpKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID0gJ2h0bWwnO1xuXHRcdH1cblx0XHQvLyBFeHBsaWNpdGx5IHVzZSB0aGUgd2lraSdzIGNvbnRlbnQgbGFuZ3VhZ2UgdG8gbWluaW1pemUgY29uZnVzaW9uLFxuXHRcdC8vIHNlZSAjMTE3OSBmb3IgZGlzY3Vzc2lvblxuXHRcdHRoaXMucXVlcnkudXNlbGFuZyB8fD0gJ2NvbnRlbnQnOyAvLyBVc2Ugd2dVc2VyTGFuZ3VhZ2UgZm9yIHByZXZpZXdcblx0XHR0aGlzLnF1ZXJ5LmVycm9ybGFuZyA9ICd1c2VsYW5nJztcblx0XHR0aGlzLnF1ZXJ5LmVycm9yc3VzZWxvY2FsID0gMTtcblx0XHR0aGlzLm9uU3VjY2VzcyA9IG9uU3VjY2VzcyA/PyBudWxsO1xuXHRcdHRoaXMub25FcnJvciA9IG9uRXJyb3IgPz8gbnVsbDtcblx0XHRpZiAoc3RhdHVzRWxlbWVudCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gbmV3IE1vcmViaXRzLnN0YXR1cyhjdXJyZW50QWN0aW9uKTtcblx0XHR9XG5cdFx0Ly8gSlNPTiBpcyB1c2VkIHRocm91Z2hvdXQgTW9yZWJpdHMvVHdpbmtsZSwgYnV0IHhtbCByZW1haW5zIHRoZSBkZWZhdWx0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdGlmICghcXVlcnkuZm9ybWF0KSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdCA9ICd4bWwnO1xuXHRcdH0gZWxzZSBpZiAocXVlcnkuZm9ybWF0ID09PSAnanNvbicgJiYgIXF1ZXJ5LmZvcm1hdHZlcnNpb24pIHtcblx0XHRcdHRoaXMucXVlcnkuZm9ybWF0dmVyc2lvbiA9ICcyJztcblx0XHR9IGVsc2UgaWYgKCFbJ3htbCcsICdqc29uJ10uaW5jbHVkZXMocXVlcnkuZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5lcnJvcignSW52YWxpZCBBUEkgZm9ybWF0OiBvbmx5IHhtbCBhbmQganNvbiBhcmUgc3VwcG9ydGVkLicpO1xuXHRcdH1cblx0XHQvLyBJZ25vcmUgdGFncyBmb3IgcXVlcmllcyBhbmQgbW9zdCBjb21tb24gdW5zdXBwb3J0ZWQgYWN0aW9ucywgcHJvZHVjZXMgd2FybmluZ3Ncblx0XHRpZiAocXVlcnkuYWN0aW9uICYmIFsncXVlcnknLCAnd2F0Y2gnXS5pbmNsdWRlcyhxdWVyeS5hY3Rpb24pKSB7XG5cdFx0XHRkZWxldGUgcXVlcnkudGFncztcblx0XHR9IGVsc2UgaWYgKCFxdWVyeS50YWdzICYmIG1vcmViaXRzV2lraUNoYW5nZVRhZykge1xuXHRcdFx0cXVlcnkudGFncyA9IG1vcmViaXRzV2lraUNoYW5nZVRhZztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogS2VlcCB0cmFjayBvZiBwYXJlbnQgb2JqZWN0IGZvciBjYWxsYmFja3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gcGFyZW50XG5cdCAqL1xuXHRzZXRQYXJlbnQocGFyZW50OiBvYmplY3QpIHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXHQvKiogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnQgKi9cblx0c2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50OiBTdGF0dXNFbGVtZW50KSB7XG5cdFx0dGhpcy5zdGF0ZWxlbSA9IHN0YXR1c0VsZW1lbnQ7XG5cdFx0dGhpcy5zdGF0ZWxlbS5zdGF0dXModGhpcy5jdXJyZW50QWN0aW9uKTtcblx0fVxuXHQvKipcblx0ICogQ2Fycnkgb3V0IHRoZSByZXF1ZXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGVyQWpheFBhcmFtZXRlcnMgLSBEbyBub3Qgc3BlY2lmeSBhIHBhcmFtZXRlciB1bmxlc3MgeW91IHJlYWxseVxuXHQgKiByZWFsbHkgd2FudCB0byBnaXZlIGpRdWVyeSBzb21lIGV4dHJhIHBhcmFtZXRlcnMuXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSAtIEEgalF1ZXJ5IHByb21pc2Ugb2JqZWN0IHRoYXQgaXMgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgd2l0aCB0aGUgYXBpIG9iamVjdC5cblx0ICovXG5cdHBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnM/OiBKUXVlcnkuQWpheFNldHRpbmdzKTogSlF1ZXJ5LlByb21pc2U8V2lraUFwaT4ge1xuXHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nQXJyOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgW2ksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5xdWVyeSkpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9XG5cdFx0XHRcdFx0YCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke3ZhbC5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCd8Jyl9YDtcblx0XHRcdH0gZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbCkpfWA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdBcnIuam9pbignJicpLnJlcGxhY2UoL14oLio/KShcXGJ0b2tlbj1bXiZdKikmKC4qKS8sICckMSQzJiQyJyk7XG5cdFx0Ly8gdG9rZW4gc2hvdWxkIGFsd2F5cyBiZSB0aGUgbGFzdCBpdGVtIGluIHRoZSBxdWVyeSBzdHJpbmcgKGJ1ZyBUVy1CLTAwMTMpXG5cdFx0Y29uc3QgYWpheHBhcmFtcyA9IHtcblx0XHRcdGNvbnRleHQ6IHRoaXMsXG5cdFx0XHR0eXBlOiB0aGlzLnF1ZXJ5LmFjdGlvbiA9PT0gJ3F1ZXJ5JyA/ICdHRVQnIDogJ1BPU1QnLFxuXHRcdFx0dXJsOiBtdy51dGlsLndpa2lTY3JpcHQoJ2FwaScpLFxuXHRcdFx0ZGF0YTogcXVlcnlTdHJpbmcsXG5cdFx0XHRkYXRhVHlwZTogdGhpcy5xdWVyeS5mb3JtYXQsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0XHQuLi5jYWxsZXJBamF4UGFyYW1ldGVycyxcblx0XHR9O1xuXHRcdHJldHVybiAkLmFqYXgoYWpheHBhcmFtcykudGhlbihcblx0XHRcdGZ1bmN0aW9uIG9uQVBJc3VjY2Vzcyhcblx0XHRcdFx0dGhpczogV2lraUFwaSxcblx0XHRcdFx0cmVzcG9uc2U6IE13QXBpUmVzcG9uc2UgfCBYTUxEb2N1bWVudCxcblx0XHRcdFx0c3RhdHVzVGV4dDogSlF1ZXJ5LkFqYXguU3VjY2Vzc1RleHRTdGF0dXNcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0XHRcdHRoaXMucmVzcG9uc2VYTUwgPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gTGltaXQgdG8gZmlyc3QgZXJyb3Jcblx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZm9ybWF0ID09PSAnanNvbicpIHtcblx0XHRcdFx0XHRjb25zdCBqc29uUmVzcG9uc2UgPSByZXNwb25zZSBhcyBNd0FwaVJlc3BvbnNlO1xuXHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0ganNvblJlc3BvbnNlLmVycm9ycz8uWzBdPy5jb2RlID8/IG51bGw7XG5cdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdodG1sJykge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSBqc29uUmVzcG9uc2UuZXJyb3JzPy5bMF0/Lmh0bWwgPz8gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICd3aWtpdGV4dCcgfHwgdGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3BsYWludGV4dCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0ganNvblJlc3BvbnNlLmVycm9ycz8uWzBdPy50ZXh0ID8/IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID1cblx0XHRcdFx0XHRcdCQocmVzcG9uc2UgYXMgWE1MRG9jdW1lbnQpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCdlcnJvcnMgZXJyb3InKVxuXHRcdFx0XHRcdFx0XHQuZXEoMClcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NvZGUnKSA/PyBudWxsO1xuXHRcdFx0XHRcdC8vIFN1ZmZpY2llbnQgZm9yIGh0bWwsIHdpa2l0ZXh0LCBvciBwbGFpbnRleHQgZXJyb3Jmb3JtYXRzXG5cdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSAkKHJlc3BvbnNlIGFzIFhNTERvY3VtZW50KVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2Vycm9ycyBlcnJvcicpXG5cdFx0XHRcdFx0XHQuZXEoMClcblx0XHRcdFx0XHRcdC50ZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLmVycm9yQ29kZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHQvLyB0aGUgQVBJIGRpZG4ndCBsaWtlIHdoYXQgd2UgdG9sZCBpdCwgZS5nLiwgYmFkIGVkaXQgdG9rZW4gb3IgYW4gZXJyb3IgY3JlYXRpbmcgYSBwYWdlXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGludm9rZSBzdWNjZXNzIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdFx0aWYgKHRoaXMub25TdWNjZXNzKSB7XG5cdFx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayAoZm9yIGxlZ2FjeSBjb2RlKVxuXHRcdFx0XHRcdHRoaXMub25TdWNjZXNzLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQoKTtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8V2lraUFwaT4oKS5yZXNvbHZlV2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHRcdH0sXG5cdFx0XHQvLyBvbmx5IG5ldHdvcmsgYW5kIHNlcnZlciBlcnJvcnMgcmVhY2ggaGVyZSAtIGNvbXBsYWludHMgZnJvbSB0aGUgQVBJIGl0c2VsZiBhcmUgY2F1Z2h0IGluIHN1Y2Nlc3MoKVxuXHRcdFx0ZnVuY3Rpb24gb25BUElmYWlsdXJlKFxuXHRcdFx0XHR0aGlzOiBXaWtpQXBpLFxuXHRcdFx0XHRlcnJvcjogSlF1ZXJ5LmpxWEhSLFxuXHRcdFx0XHRzdGF0dXNUZXh0OiBKUXVlcnkuQWpheC5FcnJvclRleHRTdGF0dXMsXG5cdFx0XHRcdGVycm9yVGhyb3duOiBzdHJpbmdcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHR0aGlzLmVycm9yVGhyb3duID0gZXJyb3JUaHJvd247IC8vIGZyZXF1ZW50bHkgdW5kZWZpbmVkXG5cdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID1cblx0XHRcdFx0XHRzdGF0dXNUZXh0ICtcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WcqOiwg+eUqEFQSeaXtuWPkeeUn+S6humUmeivr+KAnCcsICflnKjlkbzlj6tBUEnmmYLnmbznlJ/kuobpjK/oqqTjgIwnKSArXG5cdFx0XHRcdFx0ZXJyb3Iuc3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3jgIInLCAn44CN44CCJyk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKCk7XG5cdFx0XHR9XG5cdFx0KSBhcyBKUXVlcnkuUHJvbWlzZTxXaWtpQXBpPjtcblx0fVxuXHRyZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycz86IEpRdWVyeS5BamF4U2V0dGluZ3MpOiBKUXVlcnkuUHJvbWlzZTxXaWtpQXBpPiB7XG5cdFx0aWYgKHRoaXMuZXJyb3JDb2RlID09PSAnYmFkdG9rZW4nICYmICF0aGlzLmJhZHRva2VuUmV0cnkpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0ud2Fybih3aW5kb3cud2dVTFMoJ+aXoOaViOS7pOeJjO+8jOiOt+WPluaWsOeahOS7pOeJjOW5tumHjeivleKApuKApicsICfnhKHmlYjmrIrmnZbvvIzlj5blvpfmlrDnmoTmrIrmnZbkuKbph43oqabigKbigKYnKSk7XG5cdFx0XHR0aGlzLmJhZHRva2VuUmV0cnkgPSB0cnVlO1xuXHRcdFx0Ly8gR2V0IGEgbmV3IENTUkYgdG9rZW4gYW5kIHJldHJ5LiBJZiB0aGUgb3JpZ2luYWwgYWN0aW9uIG5lZWRzIGEgZGlmZmVyZW50XG5cdFx0XHQvLyB0eXBlIG9mIGFjdGlvbiB0aGFuIENTUkYsIHdlIGRvIG9uZSBwb2ludGxlc3MgcmV0cnkgYmVmb3JlIGJhaWxpbmcgb3V0XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuXHRcdFx0XHR0aGlzLnF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0XHRcdHJldHVybiB0aGlzLnBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoYCR7dGhpcy5lcnJvclRleHR977yIJHt0aGlzLmVycm9yQ29kZX3vvIlgKTtcblx0XHQvLyBpbnZva2UgZmFpbHVyZSBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0aWYgKHRoaXMub25FcnJvcikge1xuXHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHQvLyBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIGZvciBsZWdhY3kgY29kZVxuXHRcdFx0dGhpcy5vbkVycm9yLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdH1cblx0XHQvLyBkb24ndCBjb21wbGV0ZSB0aGUgYWN0aW9uIHNvIHRoYXQgdGhlIGVycm9yIHJlbWFpbnMgZGlzcGxheWVkXG5cdFx0cmV0dXJuICQuRGVmZXJyZWQ8V2lraUFwaT4oKS5yZWplY3RXaXRoKHRoaXMucGFyZW50LCBbdGhpc10pO1xuXHR9XG5cdGdldFN0YXR1c0VsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVsZW07XG5cdH1cblx0Z2V0RXJyb3JDb2RlKCkge1xuXHRcdHJldHVybiB0aGlzLmVycm9yQ29kZTtcblx0fVxuXHRnZXRFcnJvclRleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JUZXh0O1xuXHR9XG5cdGdldFhNTCgpIHtcblx0XHQvLyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHVzZSBnZXRSZXNwb25zZSgpIGluc3RlYWRcblx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZVhNTDtcblx0fVxuXHRnZXRSZXNwb25zZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGN1c3RvbSB1c2VyIGFnZW50IGhlYWRlciwgd2hpY2ggaXMgdXNlZCBmb3Igc2VydmVyLXNpZGUgbG9nZ2luZy5cblx0ICogTm90ZSB0aGF0IGRvaW5nIHNvIHdpbGwgc2V0IHRoZSB1c2VyYWdlbnQgZm9yIGV2ZXJ5IGBNb3JlYml0cy53aWtpLmFwaWBcblx0ICogcHJvY2VzcyBwZXJmb3JtZWQgdGhlcmVhZnRlci5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9saXN0cy53aWtpbWVkaWEub3JnL3BpcGVybWFpbC9tZWRpYXdpa2ktYXBpLWFubm91bmNlLzIwMTQtTm92ZW1iZXIvMDAwMDc1Lmh0bWx9XG5cdCAqIGZvciBvcmlnaW5hbCBhbm5vdW5jZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3VhPVFpdXdlbi8xLjEgKG1vcmViaXRzLmpzKV0gLSBVc2VyIGFnZW50LiAgVGhlIGRlZmF1bHRcblx0ICogdmFsdWUgb2YgYG1vcmViaXRzLmpzYCB3aWxsIGJlIGFwcGVuZGVkIHRvIGFueSBwcm92aWRlZFxuXHQgKiB2YWx1ZS5cblx0ICovXG5cdHN0YXRpYyBzZXRBcGlVc2VyQWdlbnQodWE/OiBzdHJpbmcpIHtcblx0XHRtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSBgUWl1d2VuLzEuMSAobW9yZWJpdHMuanMke3VhID8gYDsgJHt1YX1gIDogJyd9KWA7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgbmV3IENTUkYgdG9rZW4gb24gZW5jb3VudGVyaW5nIHRva2VuIGVycm9ycy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IE1lZGlhV2lraSBDU1JGIHRva2VuLlxuXHQgKi9cblx0c3RhdGljIGdldFRva2VuKCk6IEpRdWVyeS5Qcm9taXNlPHN0cmluZz4ge1xuXHRcdGNvbnN0IHRva2VuQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mMJywgJ+WPluW+l+asiuadlicpLCB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdHJldHVybiB0b2tlbkFwaS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRyZXR1cm4gKGFwaW9iai5yZXNwb25zZSBhcyB7cXVlcnk6IHt0b2tlbnM6IHtjc3JmdG9rZW46IHN0cmluZ319fSkucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9KTtcblx0fVxufVxuTW9yZWJpdHMud2lraS5hcGkgPSBXaWtpQXBpO1xuLyoqXG4gKiBSZXRyaWV2ZXMgd2lraXRleHQgZnJvbSBhIHBhZ2UuIENhY2hpbmcgZW5hYmxlZCwgZHVyYXRpb24gMSBkYXkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gKi9cbk1vcmViaXRzLndpa2kuZ2V0Q2FjaGVkSnNvbiA9ICh0aXRsZTogc3RyaW5nKTogSlF1ZXJ5LlByb21pc2U8dW5rbm93bj4gPT4ge1xuXHRjb25zdCBxdWVyeSA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdG1heGFnZTogJzM2MDAnLFxuXHR9O1xuXG5cdHJldHVybiBuZXcgTW9yZWJpdHMud2lraS5hcGkoJycsIHF1ZXJ5KS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0YXBpb2JqLmdldFN0YXR1c0VsZW1lbnQoKS51bmxpbmsoKTtcblx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpIGFzIHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHBhZ2VzOiBbe3JldmlzaW9uczogW3tzbG90czoge21haW46IHtjb250ZW50OiBzdHJpbmd9fX1dfV07XG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3Qgd2lraXRleHQgPSByZXNwb25zZS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdHJldHVybiBKU09OLnBhcnNlKHdpa2l0ZXh0KTtcblx0fSk7XG59O1xubGV0IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9ICdRaXV3ZW4vMS4xIChtb3JlYml0cy5qcyknO1xuLyoqXG4gKiBDaGFuZ2UvcmV2aXNpb24gdGFnIGFwcGxpZWQgdG8gTW9yZWJpdHMgYWN0aW9ucyB3aGVuIG5vIG90aGVyIHRhZ3MgYXJlIHNwZWNpZmllZC5cbiAqIFVudXNlZCBieSBkZWZhdWx0LlxuICpcbiAqIEBjb25zdGFudFxuICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBtb3JlYml0c1dpa2lDaGFuZ2VUYWc6IHN0cmluZyA9ICcnO1xuLyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnBhZ2UgKioqKioqKioqKioqKioqKiAqL1xuLyoqXG4gKiBVc2UgdGhlIE1lZGlhV2lraSBBUEkgdG8gbG9hZCBhIHBhZ2UgYW5kIG9wdGlvbmFsbHkgZWRpdCBpdCwgbW92ZSBpdCwgZXRjLlxuICpcbiAqIENhbGxlcnMgYXJlIG5vdCBwZXJtaXR0ZWQgdG8gZGlyZWN0bHkgYWNjZXNzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3MhXG4gKiBBbGwgcHJvcGVydHkgYWNjZXNzIGlzIHRocm91Z2ggdGhlIGFwcHJvcHJpYXRlIGdldF9fXygpIG9yIHNldF9fXygpIG1ldGhvZC5cbiAqXG4gKiBDYWxsZXJzIHNob3VsZCBzZXQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdH1cbiAqIGJlZm9yZSB0aGUgZmlyc3QgY2FsbCB0byB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlLmxvYWQoKX0uXG4gKlxuICogRWFjaCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zIHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGFcbiAqIHJlZmVyZW5jZSB0byB0aGUgTW9yZWJpdHMud2lraS5wYWdlIG9iamVjdCB0aGF0IHJlZ2lzdGVyZWQgdGhlIGNhbGxiYWNrLlxuICogQ2FsbGJhY2sgZnVuY3Rpb25zIG1heSBpbnZva2UgYW55IE1vcmViaXRzLndpa2kucGFnZSBwcm90b3R5cGUgbWV0aG9kIHVzaW5nIHRoaXMgcmVmZXJlbmNlLlxuICpcbiAqXG4gKiBDYWxsIHNlcXVlbmNlIGZvciBjb21tb24gb3BlcmF0aW9ucyAob3B0aW9uYWwgZmluYWwgdXNlciBjYWxsYmFja3Mgbm90IHNob3duKTpcbiAqXG4gKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKG5vIGVkaXQgY29uZmxpY3QpOlxuICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cbiAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcbiAqXG4gKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKHdpdGggZWRpdCBjb25mbGljdCk6XG4gKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG4gKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuICogY3R4LmZuU2F2ZUVycm9yKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG4gKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT4gLnNhdmUoKSAtPlxuICogY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG4gKlxuICogLSBBcHBlbmQgdG8gYSBwYWdlIChzaW1pbGFyIGZvciBwcmVwZW5kIGFuZCBuZXdTZWN0aW9uKTpcbiAqIGAuYXBwZW5kKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG4gKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IGN0eC5mbkF1dG9TYXZlKCkgLT4gLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT5cbiAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG4gKlxuICogTm90ZXM6XG4gKiAxLiBBbGwgZnVuY3Rpb25zIGZvbGxvd2luZyBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgYXJlIGludm9rZWQgYXN5bmNocm9ub3VzbHkgZnJvbSB0aGUgalF1ZXJ5IEFKQVggbGlicmFyeS5cbiAqIDIuIFRoZSBzZXF1ZW5jZSBmb3IgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbiBjb3VsZCBiZSBzbGlnaHRseSBzaG9ydGVuZWQsXG4gKiBidXQgaXQgd291bGQgcmVxdWlyZSBzaWduaWZpY2FudCBkdXBsaWNhdGlvbiBvZiBjb2RlIGZvciBsaXR0bGUgYmVuZWZpdC5cbiAqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGFnZSwgcHJlZml4ZWQgYnkgdGhlIG5hbWVzcGFjZSAoaWYgYW55KS5cbiAqIEZvciB0aGUgY3VycmVudCBwYWdlLCB1c2UgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKWAuXG4gKiBAcGFyYW0ge3N0cmluZ3xNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNdIC0gQSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgYWN0aW9uIGFib3V0IHRvIGJlIHVuZGVydGFrZW4sXG4gKiBvciBhIE1vcmViaXRzLnN0YXR1cyBvYmplY3RcbiAqL1xuXG5pbnRlcmZhY2UgV2lraU5hbWVzcGFjZSB7XG5cdHBhZ2U6IHR5cGVvZiBXaWtpUGFnZTtcbn1cbi8vIOe0ouW8leiuv+mXruWIq+WQje+8iOS4jeW+l+W8leeUqOWFtuS7lueJh+auteWGhemDqOexu+WQje+8m1N0YXR1c0VsZW1lbnQg5bey55SxIHdpa2ktYXBpIOeJh+auteWumuS5ie+8iVxudHlwZSBXaWtpQXBpSW5zdGFuY2UgPSBJbnN0YW5jZVR5cGU8V2lraU5hbWVzcGFjZVsnYXBpJ10+O1xuLy8g5Y6fIDI2NTgg6KGM55qE6Zet5YyF5bi46YeP77yM5o+Q5Y2H5Li65qih5Z2X57qn77yI5peg54q25oCB44CB6Leo5a6e5L6L5YWx5Lqr77yM6K+t5LmJ5LiN5Y+Y77yJXG5jb25zdCBlbXB0eUZ1bmN0aW9uID0gKCk6IHZvaWQgPT4ge307XG5cbmludGVyZmFjZSBXaWtpUGFnZVByb3RlY3Rpb24ge1xuXHRsZXZlbDogc3RyaW5nO1xuXHRleHBpcnk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFdpa2lQYWdlTG9hZFF1ZXJ5IHtcblx0YWN0aW9uOiBzdHJpbmc7XG5cdHByb3A6IHN0cmluZztcblx0aW5wcm9wOiBzdHJpbmc7XG5cdGludGVzdGFjdGlvbnM6IHN0cmluZztcblx0Y3VydGltZXN0YW1wOiBzdHJpbmc7XG5cdG1ldGE6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xuXHR0aXRsZXM6IHN0cmluZztcblx0Zm9ybWF0OiBzdHJpbmc7XG5cdHJ2cHJvcD86IHN0cmluZztcblx0cnZsaW1pdD86IG51bWJlcjtcblx0cnZzdGFydGlkPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcblx0cmVkaXJlY3RzPzogc3RyaW5nO1xuXHRydnNlY3Rpb24/OiBudW1iZXI7XG5cdFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmludGVyZmFjZSBXaWtpUGFnZVNhdmVRdWVyeSB7XG5cdGFjdGlvbjogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG5cdHRva2VuOiBzdHJpbmcgfCBudWxsO1xuXHR3YXRjaGxpc3Q6IHN0cmluZztcblx0Zm9ybWF0OiBzdHJpbmc7XG5cdHRhZ3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblx0d2F0Y2hsaXN0ZXhwaXJ5Pzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblx0c2VjdGlvbj86IHN0cmluZyB8IG51bWJlcjtcblx0bWlub3I/OiBib29sZWFuO1xuXHRub3RtaW5vcj86IGJvb2xlYW47XG5cdGJvdD86IGJvb2xlYW47XG5cdGFwcGVuZHRleHQ/OiBzdHJpbmc7XG5cdHByZXBlbmR0ZXh0Pzogc3RyaW5nO1xuXHR0ZXh0Pzogc3RyaW5nIHwgbnVsbDtcblx0c2VjdGlvbnRpdGxlPzogc3RyaW5nO1xuXHR1bmRvPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcblx0dW5kb2FmdGVyPzogc3RyaW5nIHwgbnVsbDtcblx0YmFzZXRpbWVzdGFtcD86IHN0cmluZyB8IG51bGw7XG5cdHN0YXJ0dGltZXN0YW1wPzogc3RyaW5nIHwgbnVsbDtcblx0cmVkaXJlY3Q/OiBib29sZWFuO1xuXHRyZWNyZWF0ZT86IHN0cmluZztcblx0Y3JlYXRlb25seT86IHN0cmluZztcblx0bm9jcmVhdGU/OiBzdHJpbmc7XG5cdFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmludGVyZmFjZSBXaWtpUGFnZUxvb2t1cENyZWF0aW9uUXVlcnkge1xuXHRhY3Rpb246IHN0cmluZztcblx0cHJvcDogc3RyaW5nO1xuXHR0aXRsZXM6IHN0cmluZztcblx0cnZsaW1pdDogbnVtYmVyO1xuXHRydnByb3A6IHN0cmluZztcblx0cnZkaXI6IHN0cmluZztcblx0Zm9ybWF0OiBzdHJpbmc7XG5cdHJ2c2VjdGlvbj86IG51bWJlcjtcblx0cmVkaXJlY3RzPzogc3RyaW5nO1xuXHRba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG4vLyDkvp3mja7ljp8gMjU2Ny0yNjU3IOeahCBjdHgg5Yid5aeL5YyW5a2X6Z2i6YeP5YaZ5Ye655qE57K+56Gu5o6l5Y+jXG5pbnRlcmZhY2UgV2lraVBhZ2VDdHgge1xuXHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0cGFnZU5hbWU6IHN0cmluZztcblx0cGFnZUV4aXN0czogYm9vbGVhbjtcblx0ZWRpdFN1bW1hcnk6IHN0cmluZyB8IG51bGw7XG5cdGNoYW5nZVRhZ3M6IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbDtcblx0dGVzdEFjdGlvbnM6IHN0cmluZ1tdIHwgbnVsbDtcblx0Ly8gYXJyYXkgaWYgYW55IHZhbGlkIGFjdGlvbnNcblx0Y2FsbGJhY2tQYXJhbWV0ZXJzOiB1bmtub3duO1xuXHRzdGF0dXNFbGVtZW50OiBTdGF0dXNFbGVtZW50O1xuXHQvLyAtIGVkaXRcblx0cGFnZVRleHQ6IHN0cmluZyB8IG51bGw7XG5cdGVkaXRNb2RlOiAnYWxsJyB8ICdhcHBlbmQnIHwgJ3ByZXBlbmQnIHwgJ25ldycgfCAncmV2ZXJ0Jztcblx0Ly8gc2F2ZSgpIHJlcGxhY2VzIGVudGlyZSBjb250ZW50cyBvZiB0aGUgcGFnZSBieSBkZWZhdWx0XG5cdGFwcGVuZFRleHQ6IHN0cmluZyB8IG51bGw7XG5cdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdHByZXBlbmRUZXh0OiBzdHJpbmcgfCBudWxsO1xuXHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRuZXdTZWN0aW9uVGV4dDogc3RyaW5nIHwgbnVsbDtcblx0bmV3U2VjdGlvblRpdGxlOiBzdHJpbmcgfCBudWxsO1xuXHRjcmVhdGVPcHRpb246ICdyZWNyZWF0ZScgfCAnY3JlYXRlb25seScgfCAnbm9jcmVhdGUnIHwgbnVsbDtcblx0bWlub3JFZGl0OiBib29sZWFuO1xuXHRib3RFZGl0OiBib29sZWFuO1xuXHRwYWdlU2VjdGlvbjogbnVtYmVyIHwgbnVsbDtcblx0bWF4Q29uZmxpY3RSZXRyaWVzOiBudW1iZXI7XG5cdG1heFJldHJpZXM6IG51bWJlcjtcblx0Zm9sbG93UmVkaXJlY3Q6IGJvb2xlYW47XG5cdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDogYm9vbGVhbjtcblx0d2F0Y2hsaXN0T3B0aW9uOiAnbm9jaGFuZ2UnIHwgJ3Vud2F0Y2gnIHwgJ3ByZWZlcmVuY2VzJyB8ICd3YXRjaCc7XG5cdHdhdGNobGlzdEV4cGlyeTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblx0Y3JlYXRvcjogc3RyaW5nIHwgbnVsbDtcblx0dGltZXN0YW1wOiBzdHJpbmcgfCBudWxsO1xuXHQvLyAtIHJldmVydFxuXHRyZXZlcnRPbGRJRDogc3RyaW5nIHwgbnVsbDtcblx0Ly8gLSBtb3ZlXG5cdG1vdmVEZXN0aW5hdGlvbjogc3RyaW5nIHwgbnVsbDtcblx0bW92ZVRhbGtQYWdlOiBib29sZWFuO1xuXHRtb3ZlU3VicGFnZXM6IGJvb2xlYW47XG5cdG1vdmVTdXBwcmVzc1JlZGlyZWN0OiBib29sZWFuO1xuXHQvLyAtIHByb3RlY3Rcblx0cHJvdGVjdEVkaXQ6IFdpa2lQYWdlUHJvdGVjdGlvbiB8IG51bGw7XG5cdHByb3RlY3RNb3ZlOiBXaWtpUGFnZVByb3RlY3Rpb24gfCBudWxsO1xuXHRwcm90ZWN0Q3JlYXRlOiBXaWtpUGFnZVByb3RlY3Rpb24gfCBudWxsO1xuXHRwcm90ZWN0Q2FzY2FkZTogYm9vbGVhbiB8IG51bGw7XG5cdC8vIC0gY3JlYXRpb24gbG9va3VwXG5cdGxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcjogYm9vbGVhbjtcblx0Ly8gaW50ZXJuYWwgc3RhdHVzXG5cdHBhZ2VMb2FkZWQ6IGJvb2xlYW47XG5cdGNzcmZUb2tlbjogc3RyaW5nIHwgbnVsbDtcblx0bG9hZFRpbWU6IHN0cmluZyB8IG51bGw7XG5cdGxhc3RFZGl0VGltZTogc3RyaW5nIHwgbnVsbDtcblx0cGFnZUlEOiBudW1iZXIgfCBudWxsO1xuXHRjb250ZW50TW9kZWw6IHN0cmluZyB8IG51bGw7XG5cdHJldmVydEN1cklEOiBudW1iZXIgfCBudWxsO1xuXHRyZXZlcnRVc2VyOiBzdHJpbmcgfCBudWxsO1xuXHR3YXRjaGVkOiBib29sZWFuIHwgc3RyaW5nO1xuXHRmdWxseVByb3RlY3RlZDogYm9vbGVhbiB8IHN0cmluZztcblx0c3VwcHJlc3NQcm90ZWN0V2FybmluZzogYm9vbGVhbjtcblx0Y29uZmxpY3RSZXRyaWVzOiBudW1iZXI7XG5cdHJldHJpZXM6IG51bWJlcjtcblx0Ly8gY2FsbGJhY2tzXG5cdG9uTG9hZFN1Y2Nlc3M6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25Mb2FkRmFpbHVyZTogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsO1xuXHRvblNhdmVTdWNjZXNzOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uU2F2ZUZhaWx1cmU6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25Mb29rdXBDcmVhdGlvblN1Y2Nlc3M6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25Mb29rdXBDcmVhdGlvbkZhaWx1cmU6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25Nb3ZlU3VjY2VzczogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsO1xuXHRvbk1vdmVGYWlsdXJlOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdG9uRGVsZXRlU3VjY2VzczogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsO1xuXHRvbkRlbGV0ZUZhaWx1cmU6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25VbmRlbGV0ZVN1Y2Nlc3M6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25VbmRlbGV0ZUZhaWx1cmU6ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbDtcblx0b25Qcm90ZWN0U3VjY2VzczogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsO1xuXHRvblByb3RlY3RGYWlsdXJlOiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGw7XG5cdC8vIGludGVybmFsIG9iamVjdHNcblx0bG9hZFF1ZXJ5OiBXaWtpUGFnZUxvYWRRdWVyeSB8IG51bGw7XG5cdGxvYWRBcGk6IFdpa2lBcGlJbnN0YW5jZSB8IG51bGw7XG5cdHNhdmVBcGk6IFdpa2lBcGlJbnN0YW5jZSB8IG51bGw7XG5cdGxvb2t1cENyZWF0aW9uQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRtb3ZlQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRtb3ZlUHJvY2Vzc0FwaTogV2lraUFwaUluc3RhbmNlIHwgbnVsbDtcblx0cGF0cm9sQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRwYXRyb2xQcm9jZXNzQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHRkZWxldGVBcGk6IFdpa2lBcGlJbnN0YW5jZSB8IG51bGw7XG5cdGRlbGV0ZVByb2Nlc3NBcGk6IFdpa2lBcGlJbnN0YW5jZSB8IG51bGw7XG5cdHVuZGVsZXRlQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHR1bmRlbGV0ZVByb2Nlc3NBcGk6IFdpa2lBcGlJbnN0YW5jZSB8IG51bGw7XG5cdHByb3RlY3RBcGk6IFdpa2lBcGlJbnN0YW5jZSB8IG51bGw7XG5cdHByb3RlY3RQcm9jZXNzQXBpOiBXaWtpQXBpSW5zdGFuY2UgfCBudWxsO1xuXHQvLyBzZXQgZHluYW1pY2FsbHkgaW4gcGF0cm9sKClcblx0cmNpZD86IHN0cmluZyB8IG51bGw7XG59XG5cbmNsYXNzIFdpa2lQYWdlIHtcblx0Y3R4OiBXaWtpUGFnZUN0eDtcblx0Y29uc3RydWN0b3IocGFnZU5hbWU6IHN0cmluZywgc3RhdHVzPzogc3RyaW5nIHwgU3RhdHVzRWxlbWVudCkge1xuXHRcdHN0YXR1cyB8fD0gd2luZG93LndnVUxTKCfmiZPlvIDpobXpnaLigJwnLCAn5omT6ZaL6aCB6Z2i44CMJykgKyBwYWdlTmFtZSArIHdpbmRvdy53Z1VMUygn4oCdJywgJ+OAjScpO1xuXHRcdC8qKlxuXHRcdCAqIFByaXZhdGUgY29udGV4dCB2YXJpYWJsZXMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGNvbnRleHQgaXMgbm90IHZpc2libGUgdG8gdGhlIG91dHNpZGUsIHRodXMgYWxsIHRoZSBkYXRhIGhlcmVcblx0XHQgKiBtdXN0IGJlIGFjY2Vzc2VkIHZpYSBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTmFtZSxcblx0XHRcdHBhZ2VFeGlzdHM6IGZhbHNlLFxuXHRcdFx0ZWRpdFN1bW1hcnk6IG51bGwsXG5cdFx0XHRjaGFuZ2VUYWdzOiBudWxsLFxuXHRcdFx0dGVzdEFjdGlvbnM6IG51bGwsXG5cdFx0XHQvLyBhcnJheSBpZiBhbnkgdmFsaWQgYWN0aW9uc1xuXHRcdFx0Y2FsbGJhY2tQYXJhbWV0ZXJzOiBudWxsLFxuXHRcdFx0c3RhdHVzRWxlbWVudDogc3RhdHVzIGluc3RhbmNlb2YgTW9yZWJpdHMuc3RhdHVzID8gc3RhdHVzIDogbmV3IE1vcmViaXRzLnN0YXR1cyhzdGF0dXMpLFxuXHRcdFx0Ly8gLSBlZGl0XG5cdFx0XHRwYWdlVGV4dDogbnVsbCxcblx0XHRcdGVkaXRNb2RlOiAnYWxsJyxcblx0XHRcdC8vIHNhdmUoKSByZXBsYWNlcyBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2UgYnkgZGVmYXVsdFxuXHRcdFx0YXBwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRwcmVwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRuZXdTZWN0aW9uVGV4dDogbnVsbCxcblx0XHRcdG5ld1NlY3Rpb25UaXRsZTogbnVsbCxcblx0XHRcdGNyZWF0ZU9wdGlvbjogbnVsbCxcblx0XHRcdG1pbm9yRWRpdDogZmFsc2UsXG5cdFx0XHRib3RFZGl0OiBmYWxzZSxcblx0XHRcdHBhZ2VTZWN0aW9uOiBudWxsLFxuXHRcdFx0bWF4Q29uZmxpY3RSZXRyaWVzOiAyLFxuXHRcdFx0bWF4UmV0cmllczogMixcblx0XHRcdGZvbGxvd1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDogdHJ1ZSxcblx0XHRcdHdhdGNobGlzdE9wdGlvbjogJ25vY2hhbmdlJyxcblx0XHRcdHdhdGNobGlzdEV4cGlyeTogbnVsbCxcblx0XHRcdGNyZWF0b3I6IG51bGwsXG5cdFx0XHR0aW1lc3RhbXA6IG51bGwsXG5cdFx0XHQvLyAtIHJldmVydFxuXHRcdFx0cmV2ZXJ0T2xkSUQ6IG51bGwsXG5cdFx0XHQvLyAtIG1vdmVcblx0XHRcdG1vdmVEZXN0aW5hdGlvbjogbnVsbCxcblx0XHRcdG1vdmVUYWxrUGFnZTogZmFsc2UsXG5cdFx0XHRtb3ZlU3VicGFnZXM6IGZhbHNlLFxuXHRcdFx0bW92ZVN1cHByZXNzUmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0Ly8gLSBwcm90ZWN0XG5cdFx0XHRwcm90ZWN0RWRpdDogbnVsbCxcblx0XHRcdHByb3RlY3RNb3ZlOiBudWxsLFxuXHRcdFx0cHJvdGVjdENyZWF0ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDYXNjYWRlOiBudWxsLFxuXHRcdFx0Ly8gLSBjcmVhdGlvbiBsb29rdXBcblx0XHRcdGxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcjogZmFsc2UsXG5cdFx0XHQvLyBpbnRlcm5hbCBzdGF0dXNcblx0XHRcdHBhZ2VMb2FkZWQ6IGZhbHNlLFxuXHRcdFx0Y3NyZlRva2VuOiBudWxsLFxuXHRcdFx0bG9hZFRpbWU6IG51bGwsXG5cdFx0XHRsYXN0RWRpdFRpbWU6IG51bGwsXG5cdFx0XHRwYWdlSUQ6IG51bGwsXG5cdFx0XHRjb250ZW50TW9kZWw6IG51bGwsXG5cdFx0XHRyZXZlcnRDdXJJRDogbnVsbCxcblx0XHRcdHJldmVydFVzZXI6IG51bGwsXG5cdFx0XHR3YXRjaGVkOiBmYWxzZSxcblx0XHRcdGZ1bGx5UHJvdGVjdGVkOiBmYWxzZSxcblx0XHRcdHN1cHByZXNzUHJvdGVjdFdhcm5pbmc6IGZhbHNlLFxuXHRcdFx0Y29uZmxpY3RSZXRyaWVzOiAwLFxuXHRcdFx0cmV0cmllczogMCxcblx0XHRcdC8vIGNhbGxiYWNrc1xuXHRcdFx0b25Mb2FkU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9hZEZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblNhdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25TYXZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25TdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Mb29rdXBDcmVhdGlvbkZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbk1vdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Nb3ZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uRGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uRGVsZXRlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25VbmRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblByb3RlY3RTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0RmFpbHVyZTogbnVsbCxcblx0XHRcdC8vIGludGVybmFsIG9iamVjdHNcblx0XHRcdGxvYWRRdWVyeTogbnVsbCxcblx0XHRcdGxvYWRBcGk6IG51bGwsXG5cdFx0XHRzYXZlQXBpOiBudWxsLFxuXHRcdFx0bG9va3VwQ3JlYXRpb25BcGk6IG51bGwsXG5cdFx0XHRtb3ZlQXBpOiBudWxsLFxuXHRcdFx0bW92ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0dW5kZWxldGVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cHJvdGVjdEFwaTogbnVsbCxcblx0XHRcdHByb3RlY3RQcm9jZXNzQXBpOiBudWxsLFxuXHRcdH07XG5cdH1cblx0LyoqXG5cdCAqIExvYWRzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gb25TdWNjZXNzIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgaGFzIHN1Y2NlZWRlZC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBmYWlscy5cblx0ICovXG5cdGxvYWQob25TdWNjZXNzPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsLCBvbkZhaWx1cmU/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5vbkxvYWRTdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0dGhpcy5jdHgub25Mb2FkRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBkbyBzb21ldGhpbmcgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHNcblx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb2FkKCkhJyk7XG5cdFx0XHR0aGlzLmN0eC5vbkxvYWRGYWlsdXJlISh0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jdHgubG9hZFF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ2luZm98cmV2aXNpb25zJyxcblx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0aW50ZXN0YWN0aW9uczogJ2VkaXQnLFxuXHRcdFx0Ly8gY2FuIGJlIGV4cGFuZGVkXG5cdFx0XHRjdXJ0aW1lc3RhbXA6ICcnLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHR0aXRsZXM6IHRoaXMuY3R4LnBhZ2VOYW1lLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHQvLyBkb24ndCBuZWVkIHJ2bGltaXQ9MSBiZWNhdXNlIHdlIGRvbid0IG5lZWQgcnZzdGFydGlkIGhlcmUgYW5kIG9ubHkgb25lIGFjdHVhbCByZXYgaXMgcmV0dXJuZWQgYnkgZGVmYXVsdFxuXHRcdH07XG5cblx0XHRpZiAodGhpcy5jdHguZWRpdE1vZGUgPT09ICdhbGwnKSB7XG5cdFx0XHR0aGlzLmN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ2NvbnRlbnR8dGltZXN0YW1wJzsgLy8gZ2V0IHRoZSBwYWdlIGNvbnRlbnQgYXQgdGhlIHNhbWUgdGltZSwgaWYgbmVlZGVkXG5cdFx0fSBlbHNlIGlmICh0aGlzLmN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdHRoaXMuY3R4LmxvYWRRdWVyeS5ydnByb3AgPSAndGltZXN0YW1wJztcblx0XHRcdHRoaXMuY3R4LmxvYWRRdWVyeS5ydmxpbWl0ID0gMTtcblx0XHRcdHRoaXMuY3R4LmxvYWRRdWVyeS5ydnN0YXJ0aWQgPSB0aGlzLmN0eC5yZXZlcnRPbGRJRDtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHR0aGlzLmN0eC5sb2FkUXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuY3R4LmxvYWRRdWVyeS5ydnNlY3Rpb24gPSB0aGlzLmN0eC5wYWdlU2VjdGlvbjtcblx0XHR9XG5cdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHR0aGlzLmN0eC5sb2FkUXVlcnkuaW5wcm9wICs9ICd8cHJvdGVjdGlvbic7XG5cdFx0fVxuXHRcdHRoaXMuY3R4LmxvYWRBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouKApuKApicsICfmipPlj5bpoIHpnaLigKbigKYnKSxcblx0XHRcdHRoaXMuY3R4LmxvYWRRdWVyeSxcblx0XHRcdHRoaXMuZm5Mb2FkU3VjY2Vzcyxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmN0eC5vbkxvYWRGYWlsdXJlIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHRcdCk7XG5cdFx0dGhpcy5jdHgubG9hZEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jdHgubG9hZEFwaS5wb3N0KCk7XG5cdH1cblx0LyoqXG5cdCAqIFNhdmVzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZSB0byBXaWtpcGVkaWEuXG5cdCAqIE11c3QgYmUgcHJlY2VkZWQgYnkgc3VjY2Vzc2Z1bGx5IGNhbGxpbmcgYGxvYWQoKWAuXG5cdCAqXG5cdCAqIFdhcm5pbmc6IENhbGxpbmcgYHNhdmUoKWAgY2FuIHJlc3VsdCBpbiBhZGRpdGlvbmFsIGNhbGxzIHRvIHRoZVxuXHQgKiBwcmV2aW91cyBgbG9hZCgpYCBjYWxsYmFja3MgdG8gcmVjb3ZlciBmcm9tIGVkaXQgY29uZmxpY3RzISBJbiB0aGlzXG5cdCAqIGNhc2UsIGNhbGxlcnMgbXVzdCBtYWtlIHRoZSBzYW1lIGVkaXQgdG8gdGhlIG5ldyBwYWdlVGV4dCBhbmRcblx0ICogcmUtaW52b2tlIGBzYXZlKClgLiAgVGhpcyBiZWhhdmlvciBjYW4gYmUgZGlzYWJsZWQgd2l0aFxuXHQgKiBgc2V0TWF4Q29uZmxpY3RSZXRyaWVzKDApYC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBoYXMgc3VjY2VlZGVkLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGZhaWxzLlxuXHQgKi9cblx0c2F2ZShvblN1Y2Nlc3M/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwsIG9uRmFpbHVyZT86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0Ly8gYXJlIHdlIGdldHRpbmcgb3VyIGVkaXRpbmcgdG9rZW4gZnJvbSBtdy51c2VyLnRva2Vucz9cblx0XHRjb25zdCBjYW5Vc2VNd1VzZXJUb2tlbiA9IHRoaXMuZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpO1xuXHRcdGlmICghdGhpcy5jdHgucGFnZUxvYWRlZCAmJiAhY2FuVXNlTXdVc2VyVG9rZW4pIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhdHRlbXB0IHRvIHNhdmUgYSBwYWdlIHRoYXQgaGFzIG5vdCBiZWVuIGxvYWRlZCEnKTtcblx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHQvLyBuZXcgc2VjdGlvbiBtb2RlIGFsbG93cyAobmF5LCBlbmNvdXJhZ2VzKSB1c2luZyB0aGVcblx0XHRcdC8vIHRpdGxlIGFzIHRoZSBlZGl0IHN1bW1hcnksIGJ1dCB0aGUgcXVlcnkgbmVlZHNcblx0XHRcdC8vIGVkaXRTdW1tYXJ5IHRvIGJlIHVuZGVmaW5lZCBvciAnJywgbm90IG51bGxcblx0XHRcdGlmICh0aGlzLmN0eC5lZGl0TW9kZSA9PT0gJ25ldycgJiYgdGhpcy5jdHgubmV3U2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdHRoaXMuY3R4LmVkaXRTdW1tYXJ5ID0gJyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogZWRpdCBzdW1tYXJ5IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHNob3VsZG4ndCBoYXBwZW4gaWYgY2FuVXNlTXdVc2VyVG9rZW4gPT09IHRydWVcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmN0eC5mdWxseVByb3RlY3RlZCAmJlxuXHRcdFx0IXRoaXMuY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgJiZcblx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHR0aGlzLmN0eC5mdWxseVByb3RlY3RlZCA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdD8gd2luZG93LndnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHR0aGlzLmN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn4oCd77yI5peg6ZmQ5pyf77yJ44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn44CN77yI54Sh6ZmQ5pyf77yJ44CCXFxuXFxu6bue5pOK56K65a6a5Lul56K65a6a77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHR0aGlzLmN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUodGhpcy5jdHguZnVsbHlQcm90ZWN0ZWQgYXMgc3RyaW5nKS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdH0gKFVUQynvvInjgIJcXG5cXG4ke3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdCfpu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHQpfWBcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTnvJbovpHjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE57eo6Lyv44CCJykpO1xuXHRcdFx0dGhpcy5jdHgub25TYXZlRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY3R4LnJldHJpZXMgPSAwO1xuXHRcdGNvbnN0IHF1ZXJ5OiBXaWtpUGFnZVNhdmVRdWVyeSA9IHtcblx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0dGl0bGU6IHRoaXMuY3R4LnBhZ2VOYW1lLFxuXHRcdFx0c3VtbWFyeTogdGhpcy5jdHguZWRpdFN1bW1hcnksXG5cdFx0XHR0b2tlbjogY2FuVXNlTXdVc2VyVG9rZW4gPyBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpIDogdGhpcy5jdHguY3NyZlRva2VuLFxuXHRcdFx0d2F0Y2hsaXN0OiB0aGlzLmN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9O1xuXHRcdGlmICh0aGlzLmN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRxdWVyeS50YWdzID0gdGhpcy5jdHguY2hhbmdlVGFncztcblx0XHR9XG5cdFx0aWYgKHRoaXMuZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSB0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdGhpcy5jdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHRxdWVyeS5zZWN0aW9uID0gdGhpcy5jdHgucGFnZVNlY3Rpb247XG5cdFx0fVxuXHRcdC8vIFNldCBtaW5vciBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhlc2UgcGFyYW1ldGVycyBhcmUgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdGlmICh0aGlzLmN0eC5taW5vckVkaXQpIHtcblx0XHRcdHF1ZXJ5Lm1pbm9yID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnkubm90bWlub3IgPSB0cnVlOyAvLyBmb3JjZSBUd2lua2xlIGNvbmZpZyB0byBvdmVycmlkZSB1c2VyIHByZWZlcmVuY2Ugc2V0dGluZyBmb3IgXCJhbGwgZWRpdHMgYXJlIG1pbm9yXCJcblx0XHR9XG5cdFx0Ly8gU2V0IGJvdCBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdGlmICh0aGlzLmN0eC5ib3RFZGl0KSB7XG5cdFx0XHRxdWVyeS5ib3QgPSB0cnVlO1xuXHRcdH1cblx0XHRzd2l0Y2ggKHRoaXMuY3R4LmVkaXRNb2RlKSB7XG5cdFx0XHRjYXNlICdhcHBlbmQnOlxuXHRcdFx0XHRpZiAodGhpcy5jdHguYXBwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhcHBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS5hcHBlbmR0ZXh0ID0gdGhpcy5jdHguYXBwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gYXBwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ByZXBlbmQnOlxuXHRcdFx0XHRpZiAodGhpcy5jdHgucHJlcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcHJlcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0dGhpcy5jdHgub25TYXZlRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnByZXBlbmR0ZXh0ID0gdGhpcy5jdHgucHJlcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIHByZXBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbmV3Jzpcblx0XHRcdFx0aWYgKCF0aGlzLmN0eC5uZXdTZWN0aW9uVGV4dCkge1xuXHRcdFx0XHRcdC8vIEFQSSBkb2Vzbid0IGFsbG93IGVtcHR5IG5ldyBzZWN0aW9uIHRleHRcblx0XHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbmV3IHNlY3Rpb24gdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdHF1ZXJ5LnRleHQgPSB0aGlzLmN0eC5uZXdTZWN0aW9uVGV4dDsgLy8gYWRkIGEgbmV3IHNlY3Rpb24gdG8gY3VycmVudCBwYWdlXG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IHRoaXMuY3R4Lm5ld1NlY3Rpb25UaXRsZSB8fCB0aGlzLmN0eC5lZGl0U3VtbWFyeTsgLy8gZG9uZSBieSB0aGUgQVBJLCBidXQgbm9uLScnIHZhbHVlcyB3b3VsZCBnZXQgdHJlYXRlZCBhcyB0ZXh0XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2ZXJ0Jzpcblx0XHRcdFx0cXVlcnkudW5kbyA9IHRoaXMuY3R4LnJldmVydEN1cklEO1xuXHRcdFx0XHRxdWVyeS51bmRvYWZ0ZXIgPSB0aGlzLmN0eC5yZXZlcnRPbGRJRDtcblx0XHRcdFx0aWYgKHRoaXMuY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSB0aGlzLmN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSB0aGlzLmN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdC8vICdhbGwnXG5cdFx0XHRcdHF1ZXJ5LnRleHQgPSB0aGlzLmN0eC5wYWdlVGV4dDsgLy8gcmVwbGFjZSBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2Vcblx0XHRcdFx0aWYgKHRoaXMuY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSB0aGlzLmN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSB0aGlzLmN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4LmNyZWF0ZU9wdGlvbiAhPT0gbnVsbCAmJiBbJ3JlY3JlYXRlJywgJ2NyZWF0ZW9ubHknLCAnbm9jcmVhdGUnXS5pbmNsdWRlcyh0aGlzLmN0eC5jcmVhdGVPcHRpb24pKSB7XG5cdFx0XHRxdWVyeVt0aGlzLmN0eC5jcmVhdGVPcHRpb25dID0gJyc7XG5cdFx0fVxuXHRcdGlmIChjYW5Vc2VNd1VzZXJUb2tlbiAmJiB0aGlzLmN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0cXVlcnkucmVkaXJlY3QgPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5zYXZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0d2luZG93LndnVUxTKCfkv53lrZjpobXpnaLigKbigKYnLCAn5YSy5a2Y6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRxdWVyeSxcblx0XHRcdHRoaXMuZm5TYXZlU3VjY2Vzcyxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmZuU2F2ZUVycm9yXG5cdFx0KTtcblx0XHR0aGlzLmN0eC5zYXZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmN0eC5zYXZlQXBpLnBvc3QoKTtcblx0fVxuXHQvKipcblx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldEFwcGVuZFRleHQoKWAgdG8gdGhlIGVuZCBvZiB0aGVcblx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHQgKi9cblx0YXBwZW5kKG9uU3VjY2Vzcz86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCwgb25GYWlsdXJlPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRpZiAodGhpcy5mbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHRcdHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdHRoaXMubG9hZCh0aGlzLmZuQXV0b1NhdmUsIHRoaXMuY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldFByZXBlbmRUZXh0KClgIHRvIHRoZSBzdGFydCBvZiB0aGVcblx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdCAqL1xuXHRwcmVwZW5kKG9uU3VjY2Vzcz86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCwgb25GYWlsdXJlPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0aWYgKHRoaXMuZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHR0aGlzLmxvYWQodGhpcy5mbkF1dG9TYXZlLCB0aGlzLmN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgc2VjdGlvbiB3aXRoIHRoZSB0ZXh0IHByb3ZpZGVkIGJ5IGBzZXROZXdTZWN0aW9uVGV4dCgpYFxuXHQgKiBhbmQgc2VjdGlvbiB0aXRsZSBmcm9tIGBzZXROZXdTZWN0aW9uVGl0bGUoKWAuXG5cdCAqIElmIGBlZGl0U3VtbWFyeWAgaXMgcHJvdmlkZWQsIHRoYXQgd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlXG5cdCAqIGF1dG9nZW5lcmF0ZWQgXCItPlRpdGxlIChuZXcgc2VjdGlvblwiIGVkaXQgc3VtbWFyeS5cblx0ICogRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3QgZXhwaXJ5XG5cdCAqIGlzIHVzZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0ICovXG5cdG5ld1NlY3Rpb24ob25TdWNjZXNzPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsLCBvbkZhaWx1cmU/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdGlmICh0aGlzLmZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2VzcyA/PyBudWxsO1xuXHRcdFx0dGhpcy5jdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0dGhpcy5sb2FkKHRoaXMuZm5BdXRvU2F2ZSwgdGhpcy5jdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fVxuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVkIHBhZ2UsIGluY2x1ZGluZyB0aGUgbmFtZXNwYWNlICovXG5cdGdldFBhZ2VOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4LnBhZ2VOYW1lO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdGV4dCBvZiB0aGUgcGFnZSBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9hZCgpICovXG5cdGdldFBhZ2VUZXh0KCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmN0eC5wYWdlVGV4dDtcblx0fVxuXHQvKiogQHBhcmFtIHtzdHJpbmd9IHBhZ2VUZXh0IC0gVXBkYXRlZCBwYWdlIHRleHQgdGhhdCB3aWxsIGJlIHNhdmVkIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkICovXG5cdHNldFBhZ2VUZXh0KHBhZ2VUZXh0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5lZGl0TW9kZSA9ICdhbGwnO1xuXHRcdHRoaXMuY3R4LnBhZ2VUZXh0ID0gcGFnZVRleHQ7XG5cdH1cblx0LyoqIEBwYXJhbSB7c3RyaW5nfSBhcHBlbmRUZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgYXBwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRzZXRBcHBlbmRUZXh0KGFwcGVuZFRleHQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0dGhpcy5jdHguYXBwZW5kVGV4dCA9IGFwcGVuZFRleHQ7XG5cdH1cblx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwcmVwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIHByZXBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBwcmVwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRzZXRQcmVwZW5kVGV4dChwcmVwZW5kVGV4dDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0dGhpcy5jdHgucHJlcGVuZFRleHQgPSBwcmVwZW5kVGV4dDtcblx0fVxuXHQvKiogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYWRkZWQgaW4gYSBuZXcgc2VjdGlvbiBvbiB0aGUgcGFnZSB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZCAqL1xuXHRzZXROZXdTZWN0aW9uVGV4dChuZXdTZWN0aW9uVGV4dDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHR0aGlzLmN0eC5uZXdTZWN0aW9uVGV4dCA9IG5ld1NlY3Rpb25UZXh0O1xuXHR9XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmV3U2VjdGlvblRpdGxlIC0gVGl0bGUgZm9yIHRoZSBuZXcgc2VjdGlvbiBjcmVhdGVkIHdoZW4gYG5ld1NlY3Rpb24oKWAgaXMgY2FsbGVkXG5cdCAqIElmIG1pc3NpbmcsIGBjdHguZWRpdFN1bW1hcnlgIHdpbGwgYmUgdXNlZC4gSXNzdWVzIG1heSBvY2N1ciBpZiBhIHN1YnN0aXR1dGVkIHRlbXBsYXRlIGlzIHVzZWQuXG5cdCAqL1xuXHRzZXROZXdTZWN0aW9uVGl0bGUobmV3U2VjdGlvblRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdHRoaXMuY3R4Lm5ld1NlY3Rpb25UaXRsZSA9IG5ld1NlY3Rpb25UaXRsZTtcblx0fVxuXHQvLyBFZGl0LXJlbGF0ZWQgc2V0dGVyIG1ldGhvZHM6XG5cdC8qKlxuXHQgKiBTZXQgdGhlIGVkaXQgc3VtbWFyeSB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZC5cblx0ICogVW5uZWNlc3NhcnkgaWYgZWRpdE1vZGUgaXMgJ25ldycgYW5kIG5ld1NlY3Rpb25UaXRsZSBpcyBwcm92aWRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN1bW1hcnlcblx0ICovXG5cdHNldEVkaXRTdW1tYXJ5KHN1bW1hcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmVkaXRTdW1tYXJ5ID0gc3VtbWFyeTtcblx0fVxuXHQvKipcblx0ICogU2V0IGFueSBjdXN0b20gdGFnKHMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIEFQSSBhY3Rpb24uXG5cdCAqIEEgbnVtYmVyIG9mIGFjdGlvbnMgZG9uJ3Qgc3VwcG9ydCBpdCwgbW9zdCBub3RhYmx5IHdhdGNoLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFncyAtIFN0cmluZyBvciBhcnJheSBvZiB0YWcocykuXG5cdCAqL1xuXHRzZXRDaGFuZ2VUYWdzKHRhZ3M6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguY2hhbmdlVGFncyA9IHRhZ3M7XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3JlYXRlT3B0aW9uPW51bGxdIC0gQ2FuIHRha2UgdGhlIGZvbGxvd2luZyBmb3VyIHZhbHVlczpcblx0ICogLSByZWNyZWF0ZTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBvciBlZGl0IGl0IGlmIGl0IGV4aXN0cy5cblx0ICogLSBjcmVhdGVvbmx5OiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIGJ1dCByZXR1cm4gYW5cblx0ICogZXJyb3IgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdCAqIC0gbm9jcmVhdGU6IGRvbid0IGNyZWF0ZSB0aGUgcGFnZSwgb25seSBlZGl0IGl0IGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHQgKiAtIGBudWxsYDogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCB1bmxlc3MgaXQgd2FzIGRlbGV0ZWRcblx0ICogaW4gdGhlIG1vbWVudCBiZXR3ZWVuIGxvYWRpbmcgdGhlIHBhZ2UgYW5kIHNhdmluZyB0aGUgZWRpdCAoZGVmYXVsdCkuXG5cdCAqL1xuXHRzZXRDcmVhdGVPcHRpb24oY3JlYXRlT3B0aW9uPzogJ3JlY3JlYXRlJyB8ICdjcmVhdGVvbmx5JyB8ICdub2NyZWF0ZScgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguY3JlYXRlT3B0aW9uID0gY3JlYXRlT3B0aW9uID8/IG51bGw7XG5cdH1cblx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gbWlub3JFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIG1pbm9yIGVkaXQuICovXG5cdHNldE1pbm9yRWRpdChtaW5vckVkaXQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5taW5vckVkaXQgPSBtaW5vckVkaXQ7XG5cdH1cblx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gYm90RWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBib3QgZWRpdCAqL1xuXHRzZXRCb3RFZGl0KGJvdEVkaXQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5ib3RFZGl0ID0gYm90RWRpdDtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTZWN0aW9uIC0gSW50ZWdlciBzcGVjaWZ5aW5nIHRoZSBzZWN0aW9uIG51bWJlciB0byBsb2FkIG9yIHNhdmUuXG5cdCAqIElmIHNwZWNpZmllZCBhcyBgbnVsbGAsIHRoZSBlbnRpcmUgcGFnZSB3aWxsIGJlIHJldHJpZXZlZC5cblx0ICovXG5cdHNldFBhZ2VTZWN0aW9uKHBhZ2VTZWN0aW9uOiBudW1iZXIgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgucGFnZVNlY3Rpb24gPSBwYWdlU2VjdGlvbjtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1heENvbmZsaWN0UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBpbnZvbHZpbmcgYW4gZWRpdCBjb25mbGljdCBvclxuXHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHQgKi9cblx0c2V0TWF4Q29uZmxpY3RSZXRyaWVzKG1heENvbmZsaWN0UmV0cmllczogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgubWF4Q29uZmxpY3RSZXRyaWVzID0gbWF4Q29uZmxpY3RSZXRyaWVzO1xuXHR9XG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWF4UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBub3QgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0ICovXG5cdHNldE1heFJldHJpZXMobWF4UmV0cmllczogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgubWF4UmV0cmllcyA9IG1heFJldHJpZXM7XG5cdH1cblx0LyoqXG5cdCAqIFNldCB3aGV0aGVyIGFuZCBob3cgdG8gd2F0Y2ggdGhlIHBhZ2UsIGluY2x1ZGluZyBzZXR0aW5nIGFuIGV4cGlyeS5cblx0ICpcblx0ICogQHBhcmFtIHtib29sZWFufHN0cmluZ3xNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0ICogQmFzaWNhbGx5IGEgbWl4IG9mIE1XIEFQSSBhbmQgVHdpbmtsZXkgb3B0aW9ucyBhdmFpbGFibGUgcHJlLWV4cGlyeTpcblx0ICogLSBgdHJ1ZWB8YCd5ZXMnYHxgJ3dhdGNoJ2A6IHBhZ2Ugd2lsbCBiZSBhZGRlZCB0byB0aGUgdXNlcidzXG5cdCAqIHdhdGNobGlzdCB3aGVuIHRoZSBhY3Rpb24gaXMgY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlXG5cdCAqIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpcyBwcm92aWRlZC5cblx0ICogLSBgZmFsc2VgfGAnbm8nYHxgJ25vY2hhbmdlJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2UgKGluY2x1ZGluZyBleHBpcnkpIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdCAqIC0gYCdkZWZhdWx0J2B8YCdwcmVmZXJlbmNlcydgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgYmVcblx0ICogc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3MgcHJlZmVyZW5jZSBzZXR0aW5ncyB3aGVuIHRoZSBhY3Rpb24gaXNcblx0ICogY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpc1xuXHQgKiBwcm92aWRlZC5cblx0ICogLSBgJ3Vud2F0Y2gnYDogZXhwbGljaXRseSB1bndhdGNoIHRoZSBwYWdlLlxuXHQgKiAtIEFueSBvdGhlciBgc3RyaW5nYCBvciBgbnVtYmVyYCwgb3IgYSBgTW9yZWJpdHMuZGF0ZWAgb3IgYERhdGVgXG5cdCAqIG9iamVjdDogd2F0Y2ggcGFnZSB1bnRpbCB0aGUgc3BlY2lmaWVkIHRpbWUsIGRlZmVycmluZyB0b1xuXHQgKiBgd2F0Y2hsaXN0RXhwaXJ5YCBpZiBwcm92aWRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHQgKi9cblx0c2V0V2F0Y2hsaXN0KFxuXHRcdHdhdGNobGlzdE9wdGlvbj86IGJvb2xlYW4gfCBzdHJpbmcgfCBudW1iZXIgfCBJbnN0YW5jZVR5cGU8TW9yZWJpdHNOYW1lc3BhY2VbJ2RhdGUnXT4gfCBEYXRlLFxuXHRcdHdhdGNobGlzdEV4cGlyeT86IHN0cmluZyB8IG51bWJlciB8IEluc3RhbmNlVHlwZTxNb3JlYml0c05hbWVzcGFjZVsnZGF0ZSddPiB8IERhdGVcblx0KTogdm9pZCB7XG5cdFx0aWYgKHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0d2F0Y2hsaXN0T3B0aW9uID0gd2F0Y2hsaXN0T3B0aW9uLnRvSVNPU3RyaW5nKCk7XG5cdFx0fVxuXHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gJ2luZmluaXR5Jztcblx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0fVxuXHRcdHN3aXRjaCAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRjYXNlICdub2NoYW5nZSc6XG5cdFx0XHRjYXNlICdubyc6XG5cdFx0XHRjYXNlIGZhbHNlOlxuXHRcdFx0Y2FzZSB1bmRlZmluZWQ6XG5cdFx0XHRcdHRoaXMuY3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHRcdC8vIFRoZSBNVyBBUEkgYWxsb3dzIGZvciBjaGFuZ2luZyBleHBpcnkgd2l0aCBub2NoYW5nZSAoYXMgXCJub2NoYW5nZVwiIHJlZmVycyB0byB0aGUgYmluYXJ5IHN0YXR1cyksXG5cdFx0XHRcdC8vIGJ1dCBieSBrZWVwaW5nIHRoaXMgbnVsbCBpdCB3aWxsIGRlZmF1bHQgdG8gYW55IGV4aXN0aW5nIGV4cGlyeSwgZW5zdXJlIHRoZXJlIGlzIGFjdHVhbGx5IFwibm8gY2hhbmdlLlwiXG5cdFx0XHRcdHRoaXMuY3R4LndhdGNobGlzdEV4cGlyeSA9IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndW53YXRjaCc6XG5cdFx0XHRcdC8vIGV4cGlyeSB1bmltcG9ydGFudFxuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RPcHRpb24gPSAndW53YXRjaCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncHJlZmVyZW5jZXMnOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdCc6XG5cdFx0XHRcdHRoaXMuY3R4LndhdGNobGlzdE9wdGlvbiA9ICdwcmVmZXJlbmNlcyc7XG5cdFx0XHRcdC8vIFRoZSBBUEkgYWxsb3dzIGFuIGV4cGlyeSBoZXJlLCBidXQgdGhlcmUgaXMgYXMgb2YgeWV0IChUMjY1NzE2KVxuXHRcdFx0XHQvLyBubyBleHBpcnkgcHJlZmVyZW5jZSBvcHRpb24sIHNvIGl0J3MgYSBiaXQgZGV2b2lkIG9mIGNvbnRleHQuXG5cdFx0XHRcdHRoaXMuY3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3YXRjaCc6XG5cdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RPcHRpb24gPSAnd2F0Y2gnO1xuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Ly8gTm90IHJlYWxseSBhIFwiZGVmYXVsdFwiIHBlciBzZSBidXQgY2F0Y2hlcyBcImFueSBvdGhlciBzdHJpbmdcIlxuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RPcHRpb24gPSAnd2F0Y2gnO1xuXHRcdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RPcHRpb247XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogU2V0IGEgd2F0Y2hsaXN0IGV4cGlyeS4gc2V0V2F0Y2hsaXN0IGNhbiBtb3N0bHkgaGFuZGxlIHRoaXMgYnlcblx0ICogaXRzZWxmLCBzbyB0aGlzIGlzIGhlcmUgbGFyZ2VseSBmb3IgY29tcGxldGVuZXNzIGFuZCBjb21wYXRpYmlsaXR5XG5cdCAqIHdpdGggdGhlIGZ1bGwgc3VpdGUgb2Ygb3B0aW9ucy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHQgKi9cblx0c2V0V2F0Y2hsaXN0RXhwaXJ5KHdhdGNobGlzdEV4cGlyeT86IHN0cmluZyB8IG51bWJlciB8IEluc3RhbmNlVHlwZTxNb3JlYml0c05hbWVzcGFjZVsnZGF0ZSddPiB8IERhdGUpOiB2b2lkIHtcblx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdH1cblx0XHR0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdH1cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIEFzIG9mIERlY2VtYmVyIDIwMjAsIHVzZSBzZXRXYXRjaGxpc3QuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHQgKiAtIGBUcnVlYDogcGFnZSB3YXRjaGxpc3Qgc3RhdHVzIHdpbGwgYmUgc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3Ncblx0ICogcHJlZmVyZW5jZSBzZXR0aW5ncyB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZC5cblx0ICogLSBgRmFsc2VgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdCAqXG5cdCAqIFdhdGNobGlzdCBub3Rlczpcblx0ICogMS4gVGhlIE1lZGlhV2lraSBBUEkgdmFsdWUgb2YgJ3Vud2F0Y2gnLCB3aGljaCBleHBsaWNpdGx5IHJlbW92ZXNcblx0ICogdGhlIHBhZ2UgZnJvbSB0aGUgdXNlcidzIHdhdGNobGlzdCwgaXMgbm90IHVzZWQuXG5cdCAqIDIuIElmIGJvdGggYHNldFdhdGNobGlzdCgpYCBhbmQgYHNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcygpYCBhcmVcblx0ICogY2FsbGVkLCB0aGUgbGFzdCBjYWxsIHRha2VzIHByaW9yaXR5LlxuXHQgKiAzLiBUd2lua2xlIG1vZHVsZXMgc2hvdWxkIHVzZSB0aGUgYXBwcm9wcmlhdGUgcHJlZmVyZW5jZSB0byBzZXQgdGhlIHdhdGNobGlzdCBvcHRpb25zLlxuXHQgKiA0LiBNb3N0IFR3aW5rbGUgbW9kdWxlcyB1c2UgYHNldFdhdGNobGlzdCgpYC4gYHNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcygpYFxuXHQgKiBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIGZldyBUd2lua2xlIHdhdGNobGlzdCBwcmVmZXJlbmNlcyB0aGF0XG5cdCAqIGFjY2VwdCBhIHN0cmluZyB2YWx1ZSBvZiBgZGVmYXVsdGAuXG5cdCAqL1xuXHRzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMod2F0Y2hsaXN0T3B0aW9uPzogYm9vbGVhbik6IHZvaWQge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kucGFnZS5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgd2FzIGRlcHJlY2F0ZWQgRGVjZW1iZXIgMjAyMCwgcGxlYXNlIHVzZSBzZXRXYXRjaGxpc3QnXG5cdFx0KTtcblx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93UmVkaXJlY3Q9ZmFsc2VdIC1cblx0ICogLSBgdHJ1ZWA6IGEgbWF4aW11bSBvZiBvbmUgcmVkaXJlY3Qgd2lsbCBiZSBmb2xsb3dlZC4gSW4gdGhlIGV2ZW50XG5cdCAqIG9mIGEgcmVkaXJlY3QsIGEgbWVzc2FnZSBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgYW5kIHRoZSByZWRpcmVjdFxuXHQgKiB0YXJnZXQgY2FuIGJlIHJldHJpZXZlZCB3aXRoIGdldFBhZ2VOYW1lKCkuXG5cdCAqIC0gYGZhbHNlYDogKGRlZmF1bHQpIHRoZSByZXF1ZXN0ZWQgcGFnZU5hbWUgd2lsbCBiZSB1c2VkIHdpdGhvdXQgcmVnYXJkIHRvIGFueSByZWRpcmVjdC5cblx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93Q3Jvc3NOc1JlZGlyZWN0PXRydWVdIC0gTm90IGFwcGxpY2FibGUgaWYgYGZvbGxvd1JlZGlyZWN0YCBpcyBub3Qgc2V0IHRydWUuXG5cdCAqIC0gYHRydWVgOiAoZGVmYXVsdCkgZm9sbG93IHJlZGlyZWN0IGV2ZW4gaWYgaXQgaXMgYSBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Rcblx0ICogLSBgZmFsc2VgOiBkb24ndCBmb2xsb3cgcmVkaXJlY3QgaWYgaXQgaXMgY3Jvc3MtbmFtZXNwYWNlLCBlZGl0IHRoZSByZWRpcmVjdCBpdHNlbGYuXG5cdCAqL1xuXHRzZXRGb2xsb3dSZWRpcmVjdChmb2xsb3dSZWRpcmVjdD86IGJvb2xlYW4sIGZvbGxvd0Nyb3NzTnNSZWRpcmVjdD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jdHgucGFnZUxvYWRlZCkge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0J0ludGVybmFsIGVycm9yOiBjYW5ub3QgY2hhbmdlIHJlZGlyZWN0IHNldHRpbmcgYWZ0ZXIgdGhlIHBhZ2UgaGFzIGJlZW4gbG9hZGVkISdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY3R4LmZvbGxvd1JlZGlyZWN0ID0gZm9sbG93UmVkaXJlY3QgPz8gZmFsc2U7XG5cdFx0dGhpcy5jdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0ID1cblx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9PT0gdW5kZWZpbmVkID8gdGhpcy5jdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0IDogZm9sbG93Q3Jvc3NOc1JlZGlyZWN0O1xuXHR9XG5cdC8vIGxvb2t1cC1jcmVhdGlvbiBzZXR0ZXIgZnVuY3Rpb25cblx0LyoqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAtIElmIHNldCB0cnVlLCB0aGUgYXV0aG9yIGFuZCB0aW1lc3RhbXAgb2Zcblx0ICogdGhlIGZpcnN0IG5vbi1yZWRpcmVjdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIGlzIHJldHJpZXZlZC5cblx0ICpcblx0ICogV2FybmluZzpcblx0ICogMS4gSWYgdGhlcmUgYXJlIG5vIHJldmlzaW9ucyBhbW9uZyB0aGUgZmlyc3QgNTAgdGhhdCBhcmVcblx0ICogbm9uLXJlZGlyZWN0cywgb3IgaWYgdGhlcmUgYXJlIGxlc3MgNTAgcmV2aXNpb25zIGFuZCBhbGwgYXJlXG5cdCAqIHJlZGlyZWN0cywgdGhlIG9yaWdpbmFsIGNyZWF0aW9uIGlzIHJldHJpZXZlZC5cblx0ICogMi4gUmV2aXNpb25zIHRoYXQgdGhlIHVzZXIgaXMgbm90IHByaXZpbGVnZWQgdG8gYWNjZXNzXG5cdCAqIChyZXZkZWxlZC9zdXBwcmVzc2VkKSB3aWxsIGJlIHRyZWF0ZWQgYXMgbm9uLXJlZGlyZWN0cy5cblx0ICogMy4gTXVzdCBub3QgYmUgdXNlZCB3aGVuIHRoZSBwYWdlIGhhcyBhIG5vbi13aWtpdGV4dCBjb250ZW50bW9kZWxcblx0ICogc3VjaCBhcyBNb2R1bGVzcGFjZSBMdWEgb3IgdXNlciBKYXZhU2NyaXB0L0NTUy5cblx0ICovXG5cdHNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcihmbGFnOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZmxhZztcblx0fVxuXHQvLyBNb3ZlLXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHQvKiogQHBhcmFtIHtzdHJpbmd9IGRlc3RpbmF0aW9uICovXG5cdHNldE1vdmVEZXN0aW5hdGlvbihkZXN0aW5hdGlvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgubW92ZURlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG5cdH1cblx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRzZXRNb3ZlVGFsa1BhZ2UoZmxhZzogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm1vdmVUYWxrUGFnZSA9ICEhZmxhZztcblx0fVxuXHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdHNldE1vdmVTdWJwYWdlcyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgubW92ZVN1YnBhZ2VzID0gISFmbGFnO1xuXHR9XG5cdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0c2V0TW92ZVN1cHByZXNzUmVkaXJlY3QoZmxhZzogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gISFmbGFnO1xuXHR9XG5cdC8vIFByb3RlY3QtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgLSBUaGUgcmlnaHQgcmVxdWlyZWQgZm9yIHRoZSBzcGVjaWZpYyBhY3Rpb25cblx0ICogZS5nLiBzeXNvcCwgdGVtcGxhdGVlZGl0b3IsIGF1dG9jb25maXJtZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtleHBpcnk9aW5maW5pdHldXG5cdCAqL1xuXHRzZXRFZGl0UHJvdGVjdGlvbihsZXZlbDogc3RyaW5nLCBleHBpcnk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHR9O1xuXHR9XG5cdHNldE1vdmVQcm90ZWN0aW9uKGxldmVsOiBzdHJpbmcsIGV4cGlyeT86IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LnByb3RlY3RNb3ZlID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdH07XG5cdH1cblx0c2V0Q3JlYXRlUHJvdGVjdGlvbihsZXZlbDogc3RyaW5nLCBleHBpcnk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdH07XG5cdH1cblx0c2V0Q2FzY2FkaW5nUHJvdGVjdGlvbihmbGFnOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgucHJvdGVjdENhc2NhZGUgPSAhIWZsYWc7XG5cdH1cblx0c3VwcHJlc3NQcm90ZWN0V2FybmluZygpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gdHJ1ZTtcblx0fVxuXHQvLyBSZXZlcnQtcmVsYXRlZCBnZXR0ZXJzL3NldHRlcnM6XG5cdHNldE9sZElEKG9sZElEOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5yZXZlcnRPbGRJRCA9IG9sZElEO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY3VycmVudCByZXZpc2lvbiBJRCBvZiB0aGUgcGFnZSAqL1xuXHRnZXRDdXJyZW50SUQoKTogbnVtYmVyIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4LnJldmVydEN1cklEO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBMYXN0IGVkaXRvciBvZiB0aGUgcGFnZSAqL1xuXHRnZXRSZXZpc2lvblVzZXIoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4LnJldmVydFVzZXI7XG5cdH1cblx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBlZGl0ZWQuICovXG5cdGdldExhc3RFZGl0VGltZSgpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5jdHgubGFzdEVkaXRUaW1lO1xuXHR9XG5cdC8vIE1pc2NlbGxhbmVvdXMgZ2V0dGVycy9zZXR0ZXJzOlxuXHQvKipcblx0ICogRGVmaW5lIGFuIG9iamVjdCBmb3IgdXNlIGluIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIGBjYWxsYmFja1BhcmFtZXRlcnNgIGlzIGZvciB1c2UgYnkgdGhlIGNhbGxlciBvbmx5LiBUaGUgcGFyYW1ldGVyc1xuXHQgKiBhbGxvdyBhIGNhbGxlciB0byBwYXNzIHRoZSBwcm9wZXIgY29udGV4dCBpbnRvIGl0cyBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi4gIENhbGxlcnMgbXVzdCBlbnN1cmUgdGhhdCBhbnkgY2hhbmdlcyB0byB0aGVcblx0ICogY2FsbGJhY2tQYXJhbWV0ZXJzIG9iamVjdCB3aXRoaW4gYSBgbG9hZCgpYCBjYWxsYmFjayBzdGlsbCBwZXJtaXQgYVxuXHQgKiBwcm9wZXIgcmUtZW50cnkgaW50byB0aGUgYGxvYWQoKWAgY2FsbGJhY2sgaWYgYW4gZWRpdCBjb25mbGljdCBpc1xuXHQgKiBkZXRlY3RlZCB1cG9uIGNhbGxpbmcgYHNhdmUoKWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFja1BhcmFtZXRlcnNcblx0ICovXG5cdHNldENhbGxiYWNrUGFyYW1ldGVycyhjYWxsYmFja1BhcmFtZXRlcnM6IHVua25vd24pOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5jYWxsYmFja1BhcmFtZXRlcnMgPSBjYWxsYmFja1BhcmFtZXRlcnM7XG5cdH1cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIG9iamVjdCBwcmV2aW91c2x5IHNldCBieSBgc2V0Q2FsbGJhY2tQYXJhbWV0ZXJzKClgLlxuXHQgKi9cblx0Z2V0Q2FsbGJhY2tQYXJhbWV0ZXJzKCk6IHVua25vd24ge1xuXHRcdHJldHVybiB0aGlzLmN0eC5jYWxsYmFja1BhcmFtZXRlcnM7XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50XG5cdCAqL1xuXHRzZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQ6IFN0YXR1c0VsZW1lbnQpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbWVudDtcblx0fVxuXHQvKipcblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gU3RhdHVzIGVsZW1lbnQgY3JlYXRlZCBieSB0aGUgY29uc3RydWN0b3IuXG5cdCAqL1xuXHRnZXRTdGF0dXNFbGVtZW50KCk6IFN0YXR1c0VsZW1lbnQge1xuXHRcdHJldHVybiB0aGlzLmN0eC5zdGF0dXNFbGVtZW50O1xuXHR9XG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFnZSBleGlzdGVkIG9uIHRoZSB3aWtpIHdoZW4gaXQgd2FzIGxhc3QgbG9hZGVkLlxuXHQgKi9cblx0ZXhpc3RzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmN0eC5wYWdlRXhpc3RzO1xuXHR9XG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBQYWdlIElEIG9mIHRoZSBwYWdlIGxvYWRlZC4gMCBpZiB0aGUgcGFnZSBkb2Vzbid0XG5cdCAqIGV4aXN0LlxuXHQgKi9cblx0Z2V0UGFnZUlEKCk6IG51bWJlciB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmN0eC5wYWdlSUQ7XG5cdH1cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udGVudCBtb2RlbCBvZiB0aGUgcGFnZS4gIFBvc3NpYmxlIHZhbHVlc1xuXHQgKiBpbmNsdWRlIChidXQgbWF5IG5vdCBiZSBsaW1pdGVkIHRvKTogYHdpa2l0ZXh0YCwgYGphdmFzY3JpcHRgLFxuXHQgKiBgY3NzYCwgYGpzb25gLCBgU2NyaWJ1bnRvYCwgYHNhbml0aXplZC1jc3NgLCBgTWFzc01lc3NhZ2VMaXN0Q29udGVudGAuXG5cdCAqIEFsc28gZ2V0dGFibGUgdmlhIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKWAuXG5cdCAqL1xuXHRnZXRDb250ZW50TW9kZWwoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4LmNvbnRlbnRNb2RlbDtcblx0fVxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIFdhdGNoZWQgc3RhdHVzIG9mIHRoZSBwYWdlLiBCb29sZWFuXG5cdCAqIHVubGVzcyBpdCdzIGJlaW5nIHdhdGNoZWQgdGVtcG9yYXJpbHksIGluIHdoaWNoIGNhc2UgcmV0dXJucyB0aGVcblx0ICogZXhwaXJ5IHN0cmluZy5cblx0ICovXG5cdGdldFdhdGNoZWQoKTogYm9vbGVhbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY3R4LndhdGNoZWQ7XG5cdH1cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBsb2FkZWQuXG5cdCAqL1xuXHRnZXRMb2FkVGltZSgpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5jdHgubG9hZFRpbWU7XG5cdH1cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBwYWdlIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdCAqL1xuXHRnZXRDcmVhdG9yKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmN0eC5jcmVhdG9yO1xuXHR9XG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgSVNPU3RyaW5nIHRpbWVzdGFtcCBvZiBwYWdlIGNyZWF0aW9uIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdCAqL1xuXHRnZXRDcmVhdGlvblRpbWVzdGFtcCgpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5jdHgudGltZXN0YW1wO1xuXHR9XG5cdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBvciBub3QgeW91IGNhbiBlZGl0IHRoZSBwYWdlICovXG5cdGNhbkVkaXQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy5jdHgudGVzdEFjdGlvbnMgJiYgdGhpcy5jdHgudGVzdEFjdGlvbnMuaW5jbHVkZXMoJ2VkaXQnKTtcblx0fVxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB1c2VybmFtZSBvZiB0aGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBhcyB3ZWxsIGFzXG5cdCAqIHRoZSB0aW1lc3RhbXAgb2YgY3JlYXRpb24uICBUaGUgdXNlcm5hbWUgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0ICogYGdldENyZWF0b3IoKWAgZnVuY3Rpb247IHRoZSB0aW1lc3RhbXAgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0ICogYGdldENyZWF0aW9uVGltZXN0YW1wKClgIGZ1bmN0aW9uLlxuXHQgKiBQcmlvciB0byBKdW5lIDIwMTkga25vd24gYXMgYGxvb2t1cENyZWF0b3IoKWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdCAqIHRoZSB1c2VybmFtZSBhbmQgdGltZXN0YW1wIGFyZSBmb3VuZCB3aXRoaW4gdGhlIGNhbGxiYWNrLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdCAqIHRoZSBsb29rdXAgZmFpbHNcblx0ICovXG5cdGxvb2t1cENyZWF0aW9uKG9uU3VjY2Vzcz86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCwgb25GYWlsdXJlPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHR0aGlzLmN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvb2t1cENyZWF0aW9uKCkhJyk7XG5cdFx0XHR0aGlzLmN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHF1ZXJ5OiBXaWtpUGFnZUxvb2t1cENyZWF0aW9uUXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHRpdGxlczogdGhpcy5jdHgucGFnZU5hbWUsXG5cdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0cnZwcm9wOiAndXNlcnx0aW1lc3RhbXAnLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9O1xuXHRcdC8vIE9ubHkgdGhlIHdpa2l0ZXh0IGNvbnRlbnQgbW9kZWwgY2FuIHJlbGlhYmx5IGhhbmRsZVxuXHRcdC8vIHJ2c2VjdGlvbiwgb3RoZXJzIHJldHVybiBhbiBlcnJvciB3aGVuIHBhaXJlZCB3aXRoIHRoZVxuXHRcdC8vIGNvbnRlbnQgcnZwcm9wLiBSZWxhdGVkbHksIG5vbi13aWtpdGV4dCBtb2RlbHMgZG9uJ3Rcblx0XHQvLyB1bmRlcnN0YW5kIHRoZSAjUkVESVJFQ1QgY29uY2VwdCwgc28gd2Ugc2hvdWxkbid0IGF0dGVtcHRcblx0XHQvLyB0aGUgcmVkaXJlY3QgcmVzb2x1dGlvbiBpbiBmbkxvb2t1cENyZWF0aW9uU3VjY2Vzc1xuXHRcdGlmICh0aGlzLmN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IpIHtcblx0XHRcdHF1ZXJ5LnJ2c2VjdGlvbiA9IDA7XG5cdFx0XHRxdWVyeS5ydnByb3AgKz0gJ3xjb250ZW50Jztcblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHR9XG5cblx0XHR0aGlzLmN0eC5sb29rdXBDcmVhdGlvbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdHdpbmRvdy53Z1VMUygn5oqT5Y+W6aG16Z2i5Yib5bu66ICF5L+h5oGvJywgJ+aKk+WPlumggemdouW7uueri+iAheizh+ioiicpLFxuXHRcdFx0cXVlcnksXG5cdFx0XHR0aGlzLmZuTG9va3VwQ3JlYXRpb25TdWNjZXNzLFxuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHRcdCk7XG5cdFx0dGhpcy5jdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdHRoaXMuY3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0fVxuXHQvKipcblx0ICogUmV2ZXJ0cyBhIHBhZ2UgdG8gYHJldmVydE9sZElEYCBzZXQgYnkgYHNldE9sZElEYC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0ICovXG5cdHJldmVydChvblN1Y2Nlc3M/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwsIG9uRmFpbHVyZT86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0aWYgKCF0aGlzLmN0eC5yZXZlcnRPbGRJRCkge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHJldmlzaW9uIElEIHRvIHJldmVydCB0byB3YXMgbm90IHNldCBiZWZvcmUgcmV2ZXJ0IScpO1xuXHRcdFx0dGhpcy5jdHgub25TYXZlRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY3R4LmVkaXRNb2RlID0gJ3JldmVydCc7XG5cdFx0dGhpcy5sb2FkKHRoaXMuZm5BdXRvU2F2ZSwgdGhpcy5jdHgub25TYXZlRmFpbHVyZSk7XG5cdH1cblx0LyoqXG5cdCAqIE1vdmVzIGEgcGFnZSB0byBhbm90aGVyIHRpdGxlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHQgKi9cblx0bW92ZShvblN1Y2Nlc3M/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwsIG9uRmFpbHVyZT86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm9uTW92ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHR0aGlzLmN0eC5vbk1vdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0aWYgKCF0aGlzLmZuUHJlZmxpZ2h0Q2hlY2tzKCdtb3ZlJywgdGhpcy5jdHgub25Nb3ZlRmFpbHVyZSkpIHtcblx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuY3R4Lm1vdmVEZXN0aW5hdGlvbikge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGRlc3RpbmF0aW9uIHBhZ2UgbmFtZSB3YXMgbm90IHNldCBiZWZvcmUgbW92ZSEnKTtcblx0XHRcdHRoaXMuY3R4Lm9uTW92ZUZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5mbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdHRoaXMuZm5Qcm9jZXNzTW92ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHRoaXMuZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ21vdmUnKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0dGhpcy5mblByb2Nlc3NNb3ZlLFxuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHR0aGlzLmN0eC5vbk1vdmVGYWlsdXJlIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHRcdFx0KTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0dGhpcy5jdHgubW92ZUFwaS5wb3N0KCk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBNYXJrcyB0aGUgcGFnZSBhcyBwYXRyb2xsZWQsIHVzaW5nIGByY2lkYCAoaWYgYXZhaWxhYmxlKSBvciBgcmV2aWRgLlxuXHQgKlxuXHQgKiBQYXRyb2xsaW5nIGFzIHN1Y2ggZG9lc24ndCBuZWVkIHRvIHJlbHkgb24gbG9hZGluZyB0aGUgcGFnZSBpblxuXHQgKiBxdWVzdGlvbjsgc2ltcGx5IHBhc3NpbmcgYSByZXZpZCB0byB0aGUgQVBJIGlzIHN1ZmZpY2llbnQsIHNvIGluXG5cdCAqIHRob3NlIGNhc2VzIGp1c3QgdXNpbmcge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBpcyBwcm9iYWJseSBwcmVmZXJhYmxlLlxuXHQgKlxuXHQgKiBObyBlcnJvciBoYW5kbGluZyBzaW5jZSB3ZSBkb24ndCBhY3R1YWxseSBjYXJlIGFib3V0IHRoZSBlcnJvcnMuXG5cdCAqL1xuXHRwYXRyb2woKTogdm9pZCB7XG5cdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhTW9yZWJpdHMudXNlcklzSW5Hcm91cCgncGF0cm9sbGVyJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Ly8gSWYgYSBsaW5rIGlzIHByZXNlbnQsIGRvbid0IG5lZWQgdG8gY2hlY2sgaWYgaXQncyBwYXRyb2xsZWRcblx0XHRpZiAoJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsnKS5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IHBhdHJvbGhyZWYgPSAkYm9keS5maW5kKCcucGF0cm9sbGluayBhJykuYXR0cignaHJlZicpO1xuXHRcdFx0dGhpcy5jdHgucmNpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmNpZCcsIHBhdHJvbGhyZWYpO1xuXHRcdFx0dGhpcy5mblByb2Nlc3NQYXRyb2woKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGF0cm9sUXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRcdC8vIGFzIGxvbmcgYXMgd2UncmUgcXVlcnlpbmcsIG1pZ2h0IGFzIHdlbGwgZ2V0IGEgdG9rZW5cblx0XHRcdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgcGFnZSBpcyB1bnBhdHJvbGxlZFxuXHRcdFx0XHR0aXRsZXM6IHRoaXMuY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRyY3Byb3A6ICdwYXRyb2xsZWQnLFxuXHRcdFx0XHRyY3RpdGxlOiB0aGlzLmN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cmNsaW1pdDogMSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5jdHgucGF0cm9sQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0cGF0cm9sUXVlcnksXG5cdFx0XHRcdHRoaXMuZm5Qcm9jZXNzUGF0cm9sXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5jdHgucGF0cm9sQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdHRoaXMuY3R4LnBhdHJvbEFwaS5wb3N0KCk7XG5cdFx0fVxuXHR9XG5cdC8vIHxkZWxldGV8IGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBzb21lIGZsYXZvdXJzIG9mIEpTXG5cdC8qKlxuXHQgKiBEZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0ICovXG5cdGRlbGV0ZVBhZ2Uob25TdWNjZXNzPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsLCBvbkZhaWx1cmU/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5vbkRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3MgPz8gbnVsbDtcblx0XHR0aGlzLmN0eC5vbkRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRpZiAoIXRoaXMuZm5QcmVmbGlnaHRDaGVja3MoJ2RlbGV0ZScsIHRoaXMuY3R4Lm9uRGVsZXRlRmFpbHVyZSkpIHtcblx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHR9XG5cblx0XHRpZiAodGhpcy5mbkNhblVzZU13VXNlclRva2VuKCdkZWxldGUnKSkge1xuXHRcdFx0dGhpcy5mblByb2Nlc3NEZWxldGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdkZWxldGUnKTtcblx0XHRcdHRoaXMuY3R4LmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHR0aGlzLmZuUHJvY2Vzc0RlbGV0ZSxcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0dGhpcy5jdHgub25EZWxldGVGYWlsdXJlIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHRcdFx0KTtcblx0XHRcdHRoaXMuY3R4LmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHR0aGlzLmN0eC5kZWxldGVBcGkucG9zdCgpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogVW5kZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0ICovXG5cdHVuZGVsZXRlUGFnZShvblN1Y2Nlc3M/OiAoKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKSB8IG51bGwsIG9uRmFpbHVyZT86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4Lm9uVW5kZWxldGVTdWNjZXNzID0gb25TdWNjZXNzID8/IG51bGw7XG5cdFx0dGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRpZiAoIXRoaXMuZm5QcmVmbGlnaHRDaGVja3MoJ3VuZGVsZXRlJywgdGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZm5DYW5Vc2VNd1VzZXJUb2tlbigndW5kZWxldGUnKSkge1xuXHRcdFx0dGhpcy5mblByb2Nlc3NVbmRlbGV0ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHRoaXMuZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3VuZGVsZXRlJyk7XG5cdFx0XHR0aGlzLmN0eC51bmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHR0aGlzLmZuUHJvY2Vzc1VuZGVsZXRlLFxuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHR0aGlzLmN0eC5vblVuZGVsZXRlRmFpbHVyZSBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0XHRcdCk7XG5cdFx0XHR0aGlzLmN0eC51bmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHR0aGlzLmN0eC51bmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBQcm90ZWN0cyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdCAqL1xuXHRwcm90ZWN0KG9uU3VjY2Vzcz86ICgocGFnZTogV2lraVBhZ2UpID0+IHZvaWQpIHwgbnVsbCwgb25GYWlsdXJlPzogKChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCkgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5jdHgub25Qcm90ZWN0U3VjY2VzcyA9IG9uU3VjY2VzcyA/PyBudWxsO1xuXHRcdHRoaXMuY3R4Lm9uUHJvdGVjdEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRpZiAoIXRoaXMuZm5QcmVmbGlnaHRDaGVja3MoJ3Byb3RlY3QnLCB0aGlzLmN0eC5vblByb3RlY3RGYWlsdXJlKSkge1xuXHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5jdHgucHJvdGVjdEVkaXQgJiYgIXRoaXMuY3R4LnByb3RlY3RNb3ZlICYmICF0aGlzLmN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IHlvdSBtdXN0IHNldCBlZGl0IGFuZC9vciBtb3ZlIGFuZC9vciBjcmVhdGUgcHJvdGVjdGlvbiBiZWZvcmUgY2FsbGluZyBwcm90ZWN0KCkhJ1xuXHRcdFx0KTtcblx0XHRcdHRoaXMuY3R4Lm9uUHJvdGVjdEZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBiZWNhdXNlIG9mIHRoZSB3YXkgTVcgQVBJIGludGVycHJldHMgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHQvLyAoYWJzb2x1dGUsIG5vdCBkaWZmZXJlbnRpYWwpLCB3ZSBhbHdheXMgbmVlZCB0byByZXF1ZXN0XG5cdFx0Ly8gcHJvdGVjdGlvbiBsZXZlbHMgZnJvbSB0aGUgc2VydmVyXG5cdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdwcm90ZWN0Jyk7XG5cdFx0dGhpcy5jdHgucHJvdGVjdEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0cXVlcnksXG5cdFx0XHR0aGlzLmZuUHJvY2Vzc1Byb3RlY3QsXG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0dGhpcy5jdHgub25Qcm90ZWN0RmFpbHVyZSBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0XHQpO1xuXHRcdHRoaXMuY3R4LnByb3RlY3RBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdHRoaXMuY3R4LnByb3RlY3RBcGkucG9zdCgpO1xuXHR9XG5cblx0Lypcblx0ICogUHJpdmF0ZSBtZW1iZXIgZnVuY3Rpb25zXG5cdCAqIFRoZXNlIGFyZSBub3QgZXhwb3NlZCBvdXRzaWRlXG5cdCAqL1xuXHQvKipcblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHdlIGNhbiBzYXZlIGFuIEFQSSBjYWxsIGJ5IHVzaW5nIHRoZSBjc3JmIHRva2VuXG5cdCAqIHNlbnQgd2l0aCB0aGUgcGFnZSBIVE1MLCBvciB3aGV0aGVyIHdlIG5lZWQgdG8gYXNrIHRoZSBzZXJ2ZXIgZm9yXG5cdCAqIG1vcmUgaW5mbyAoZS5nLiBwcm90ZWN0aW9uIG9yIHdhdGNobGlzdCBleHBpcnkpLlxuXHQgKlxuXHQgKiBDdXJyZW50bHkgdXNlZCBmb3IgYGFwcGVuZGAsIGBwcmVwZW5kYCwgYG5ld1NlY3Rpb25gLCBgbW92ZWAsXG5cdCAqIGBkZWxldGVQYWdlYCwgYW5kIGB1bmRlbGV0ZVBhZ2VgLiBOb3QgdXNlZCBmb3IgYHByb3RlY3RgXG5cdCAqIHNpbmNlIGl0IGFsd2F5cyBuZWVkcyB0byByZXF1ZXN0IHByb3RlY3Rpb24gc3RhdHVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2FjdGlvbj1lZGl0XSAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLlxuXHQgKiBcImVkaXRcIiBvciBcImRlbGV0ZVwiLiBJbiBwcmFjdGljZSwgb25seSBcImVkaXRcIiBvciBcIm5vdGVkaXRcIiBtYXR0ZXJzLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHByaXZhdGUgZm5DYW5Vc2VNd1VzZXJUb2tlbiA9IChhY3Rpb24/OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRhY3Rpb24gfHw9ICdlZGl0Jztcblx0XHQvLyBJZiBhIHdhdGNobGlzdCBleHBpcnkgaXMgc2V0LCB3ZSBtdXN0IGFsd2F5cyBsb2FkIHRoZSBwYWdlXG5cdFx0Ly8gdG8gYXZvaWQgb3ZlcndyaXRpbmcgaW5kZWZpbml0ZSBwcm90ZWN0aW9uLiAgT2YgY291cnNlLCBub3Rcblx0XHQvLyBuZWVkZWQgaWYgc2V0dGluZyBpbmRlZmluaXRlIHdhdGNoaW5nIVxuXHRcdGlmICh0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkgJiYgIU1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KFN0cmluZyh0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkpKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyBBUEktYmFzZWQgcmVkaXJlY3QgcmVzb2x1dGlvbiBvbmx5IHdvcmtzIGZvciBhY3Rpb249cXVlcnkgYW5kXG5cdFx0Ly8gYWN0aW9uPWVkaXQgaW4gYXBwZW5kL3ByZXBlbmQvbmV3IG1vZGVzXG5cdFx0aWYgKHRoaXMuY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRpZiAoIXRoaXMuY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIG11c3QgbG9hZCB0aGUgcGFnZSB0byBjaGVjayBmb3IgY3Jvc3MgbmFtZXNwYWNlIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWN0aW9uICE9PSAnZWRpdCcgfHwgdGhpcy5jdHguZWRpdE1vZGUgPT09ICdhbGwnIHx8IHRoaXMuY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGRvIHdlIG5lZWQgdG8gZmV0Y2ggdGhlIGVkaXQgcHJvdGVjdGlvbiBleHBpcnk/XG5cdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wICYmICF0aGlzLmN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ldyBtdy5UaXRsZShNb3JlYml0cy5wYWdlTmFtZU5vcm0pLmdldFByZWZpeGVkVGV4dCgpICE9PVxuXHRcdFx0XHRuZXcgbXcuVGl0bGUodGhpcy5jdHgucGFnZU5hbWUpLmdldFByZWZpeGVkVGV4dCgpXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gd2dSZXN0cmljdGlvbkVkaXQgaXMgbnVsbCBvbiBub24tZXhpc3RlbnQgcGFnZXMsXG5cdFx0XHQvLyBzbyB0aGlzIG5lYXRseSBoYW5kbGVzIG5vbmV4aXN0ZW50IHBhZ2VzXG5cdFx0XHRjb25zdCBlZGl0UmVzdHJpY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z1Jlc3RyaWN0aW9uRWRpdCcpO1xuXHRcdFx0aWYgKCFlZGl0UmVzdHJpY3Rpb24gfHwgZWRpdFJlc3RyaWN0aW9uLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICEhbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0fTtcblx0LyoqXG5cdCAqIFdoZW4gZnVuY3Rpb25zIGNhbid0IHVzZVxuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfmZuQ2FuVXNlTXdVc2VyVG9rZW58Zm5DYW5Vc2VNd1VzZXJUb2tlbn1cblx0ICogb3IgcmVxdWlyZSBjaGVja2luZyBwcm90ZWN0aW9uIG9yIHdhdGNoZWQgc3RhdHVzLCBtYWludGFpbiB0aGUgcXVlcnlcblx0ICogaW4gb25lIHBsYWNlLiBVc2VkIGZvciB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2RlbGV0ZVBhZ2V8ZGVsZXRlfSxcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSN1bmRlbGV0ZVBhZ2V8dW5kZWxldGV9LFxuXHQgKiB7QGxpbmsqIE1vcmViaXRzLndpa2kucGFnZSNwcm90ZWN0fHByb3RlY3R9LFxuXHQgKiBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNtb3ZlfG1vdmV9XG5cdCAqIChiYXNpY2FsbHksIGp1c3Qgbm90IHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjbG9hZHxsb2FkfSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy4gXCJlZGl0XCIgb3Jcblx0ICogXCJkZWxldGVcIi5cblx0ICogQHJldHVybnMge09iamVjdH0gQXBwcm9wcmlhdGUgcXVlcnkuXG5cdCAqL1xuXHRwcml2YXRlIGZuTmVlZFRva2VuSW5mb1F1ZXJ5ID0gKGFjdGlvbjogc3RyaW5nKTogV2lraVBhZ2VQcml2YXRlUXVlcnkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5OiBXaWtpUGFnZVByaXZhdGVRdWVyeSA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dGl0bGVzOiB0aGlzLmN0eC5wYWdlTmFtZSxcblx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fTtcblx0XHQvLyBQcm90ZWN0aW9uIG5vdCBjaGVja2VkIGZvciBub24tc3lzb3AgbW92ZXNcblx0XHRpZiAoYWN0aW9uICE9PSAnbW92ZScgfHwgTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdHF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jdHguZm9sbG93UmVkaXJlY3QgJiYgYWN0aW9uICE9PSAndW5kZWxldGUnKSB7XG5cdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHR9XG5cblx0XHRyZXR1cm4gcXVlcnk7XG5cdH07XG5cdC8vIGNhbGxiYWNrIGZyb20gbG9hZFN1Y2Nlc3MoKSBmb3IgYXBwZW5kKCksIHByZXBlbmQoKSwgYW5kIG5ld1NlY3Rpb24oKSB0aHJlYWRzXG5cdHByaXZhdGUgZm5BdXRvU2F2ZSA9IChwYWdlb2JqOiBXaWtpUGFnZSk6IHZvaWQgPT4ge1xuXHRcdHBhZ2VvYmouc2F2ZSh0aGlzLmN0eC5vblNhdmVTdWNjZXNzISwgdGhpcy5jdHgub25TYXZlRmFpbHVyZSEpO1xuXHR9O1xuXHQvLyBjYWxsYmFjayBmcm9tIGxvYWRBcGkucG9zdCgpXG5cdHByaXZhdGUgZm5Mb2FkU3VjY2VzcyA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCByZXNwb25zZSA9ICh0aGlzLmN0eC5sb2FkQXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdGlmICghdGhpcy5mbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIHRoaXMuY3R4Lm9uTG9hZEZhaWx1cmUhKSkge1xuXHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdH1cblxuXHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdGxldCByZXY6IFdpa2lQYWdlQXBpUmV2aXNpb24gfCB1bmRlZmluZWQ7XG5cdFx0dGhpcy5jdHgucGFnZUV4aXN0cyA9ICFwYWdlLm1pc3Npbmc7XG5cdFx0aWYgKHRoaXMuY3R4LnBhZ2VFeGlzdHMpIHtcblx0XHRcdFtyZXZdID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHR0aGlzLmN0eC5sYXN0RWRpdFRpbWUgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0dGhpcy5jdHgucGFnZVRleHQgPSByZXYuY29udGVudDtcblx0XHRcdHRoaXMuY3R4LnBhZ2VJRCA9IHBhZ2UucGFnZWlkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN0eC5wYWdlVGV4dCA9ICcnOyAvLyBhbGxvdyBmb3IgY29uY2F0ZW5hdGlvbiwgZXRjLlxuXHRcdFx0dGhpcy5jdHgucGFnZUlEID0gMDsgLy8gbm9uZXhpc3RlbnQgaW4gcmVzcG9uc2UsIG1hdGNoZXMgd2dBcnRpY2xlSWRcblx0XHR9XG5cblx0XHR0aGlzLmN0eC5jc3JmVG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdGlmICghdGhpcy5jdHguY3NyZlRva2VuKSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W57yW6L6R5Luk54mM44CCJywgJ+acquiDveWPluW+l+e3qOi8r+asiuadluOAgicpKTtcblx0XHRcdHRoaXMuY3R4Lm9uTG9hZEZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5sb2FkVGltZSA9ICh0aGlzLmN0eC5sb2FkQXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLmN1cnRpbWVzdGFtcDtcblx0XHRpZiAoIXRoaXMuY3R4LmxvYWRUaW1lKSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5pe26Ze05oiz44CCJywgJ+acquiDveWPluW+l+eVtuWJjeaZgumWk+aIs+OAgicpKTtcblx0XHRcdHRoaXMuY3R4Lm9uTG9hZEZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5jb250ZW50TW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHR0aGlzLmN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkIHx8IGZhbHNlO1xuXHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvLCB0byBhbGVydCBhZG1pbnMgd2hlbiB0aGV5IGFyZSBhYm91dCB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2Vcblx0XHQvLyBJbmNsdWRlcyBjYXNjYWRpbmcgcHJvdGVjdGlvblxuXHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0Y29uc3QgZWRpdFByb3QgPSBwYWdlLnByb3RlY3Rpb24uZmluZExhc3QoKHByKSA9PiB7XG5cdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChlZGl0UHJvdCkge1xuXHRcdFx0XHR0aGlzLmN0eC5mdWxseVByb3RlY3RlZCA9IGVkaXRQcm90LmV4cGlyeTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3R4LmZ1bGx5UHJvdGVjdGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY3R4LnJldmVydEN1cklEID0gcGFnZS5sYXN0cmV2aWQgPz8gbnVsbDtcblx0XHRjb25zdCB0ZXN0YWN0aW9ucyA9IHBhZ2UuYWN0aW9ucztcblx0XHR0aGlzLmN0eC50ZXN0QWN0aW9ucyA9IFtdOyAvLyB3YXMgbnVsbFxuXHRcdGZvciAoY29uc3QgYWN0aW9uIG9mIE9iamVjdC5rZXlzKHRlc3RhY3Rpb25zID8/IHt9KSkge1xuXHRcdFx0aWYgKHRlc3RhY3Rpb25zPy5bYWN0aW9uXSkge1xuXHRcdFx0XHR0aGlzLmN0eC50ZXN0QWN0aW9uc1t0aGlzLmN0eC50ZXN0QWN0aW9ucy5sZW5ndGhdID0gYWN0aW9uO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5jdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHR0aGlzLmN0eC5yZXZlcnRDdXJJRCA9IChyZXYgJiYgcmV2LnJldmlkKSB8fCBudWxsO1xuXHRcdFx0aWYgKCF0aGlzLmN0eC5yZXZlcnRDdXJJRCkge1xuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5L+u6K6i54mI5pysSUTjgIInLCAn5pyq6IO95Y+W5b6X55uu5YmN5L+u6KiC54mI5pysSUTjgIInKSk7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uTG9hZEZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN0eC5yZXZlcnRVc2VyID0gKHJldiAmJiByZXYudXNlcikgfHwgbnVsbDtcblx0XHRcdGlmICghdGhpcy5jdHgucmV2ZXJ0VXNlcikge1xuXHRcdFx0XHRpZiAocmV2ICYmIHJldi51c2VyaGlkZGVuKSB7XG5cdFx0XHRcdFx0Ly8gdXNlcm5hbWUgd2FzIFJldkRlbCdkIG9yIG92ZXJzaWdodGVkXG5cdFx0XHRcdFx0dGhpcy5jdHgucmV2ZXJ0VXNlciA9IHdpbmRvdy53Z1VMUygnPOeUqOaIt+WQjeW3sumakOiXjz4nLCAnPOS9v+eUqOiAheWQjeeoseW3sumaseiXjz4nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmnKrog73ojrflj5bmraTkv67orqLniYjmnKznmoTnvJbovpHogIXjgIInLCAn5pyq6IO95Y+W5b6X5q2k5L+u6KiC54mI5pys55qE57eo6Lyv6ICF44CCJylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuY3R4Lm9uTG9hZEZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gc2V0IHJldmVydCBlZGl0IHN1bW1hcnlcblx0XHRcdHRoaXMuY3R4LmVkaXRTdW1tYXJ5ID0gYFtbUVc6VU5ET3zmkqTplIBdXeeUsSAke3RoaXMuY3R4LnJldmVydFVzZXJ9IOaJgOWBmuWHuueahCR7d2luZG93LndnVUxTKCfkv67orqIgJywgJ+S/ruiogiAnKX0ke1xuXHRcdFx0XHR0aGlzLmN0eC5yZXZlcnRPbGRJRFxuXHRcdFx0fe+8miR7dGhpcy5jdHguZWRpdFN1bW1hcnl9YDtcblx0XHR9XG5cdFx0dGhpcy5jdHgucGFnZUxvYWRlZCA9IHRydWU7XG5cdFx0Ly8gbXcubm90aWZ5KFwiR2VuZXJhdGUgZWRpdCBjb25mbGljdCBub3dcIiwge3R5cGU6ICd3YXJuJywgdGFnOiAnbW9yZWJpdHMnfSk7ICAvLyBmb3IgdGVzdGluZyBlZGl0IGNvbmZsaWN0IHJlY292ZXJ5IGxvZ2ljXG5cdFx0dGhpcy5jdHgub25Mb2FkU3VjY2VzcyEodGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHR9O1xuXHQvLyBoZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIHBhZ2UgbmFtZSByZXR1cm5lZCBmcm9tIHRoZSBBUElcblx0cHJpdmF0ZSBmbkNoZWNrUGFnZU5hbWUgPSAocmVzcG9uc2U6IFdpa2lQYWdlQXBpUXVlcnksIG9uRmFpbHVyZTogKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKTogYm9vbGVhbiA9PiB7XG5cdFx0Y29uc3QgcGFnZSA9IHJlc3BvbnNlLnBhZ2VzICYmIHJlc3BvbnNlLnBhZ2VzWzBdO1xuXHRcdGlmIChwYWdlKSB7XG5cdFx0XHQvLyBjaGVjayBmb3IgaW52YWxpZCB0aXRsZXNcblx0XHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+agh+mimOS4jeWQiOazle+8micsIGDmqJnpoYzkuI3lkIjms5XvvJoke3RoaXMuY3R4LnBhZ2VOYW1lfWApKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHR9XG5cdFx0XHQvLyByZXRyaWV2ZSBhY3R1YWwgdGl0bGUgb2YgdGhlIHBhZ2UgYWZ0ZXIgbm9ybWFsaXphdGlvbiBhbmQgcmVkaXJlY3RzXG5cdFx0XHRjb25zdCByZXNvbHZlZE5hbWUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnJlZGlyZWN0cykge1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgY3Jvc3MtbmFtZXNwYWNlIHJlZGlyZWN0OlxuXHRcdFx0XHRjb25zdCBvcmlnTnMgPSBuZXcgbXcuVGl0bGUodGhpcy5jdHgucGFnZU5hbWUpLmdldE5hbWVzcGFjZUlkKCk7XG5cdFx0XHRcdGNvbnN0IG5ld05zID0gbmV3IG13LlRpdGxlKHJlc29sdmVkTmFtZSkuZ2V0TmFtZXNwYWNlSWQoKTtcblx0XHRcdFx0aWYgKG9yaWdOcyAhPT0gbmV3TnMgJiYgIXRoaXMuY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHR0aGlzLmN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5piv6Leo5ZG95ZCN56m66Ze06YeN5a6a5ZCR5YiwJywgJ+aYr+i3qOWRveWQjeepuumWk+mHjeaWsOWwjuWQkeWIsCcpICtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZWROYW1lICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfvvIznlaXov4cnLCAn77yM55Wl6YGOJylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gb25seSBub3RpZnkgdXNlciBmb3IgcmVkaXJlY3RzLCBub3Qgbm9ybWFsaXphdGlvblxuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+h5oGvJywgJ+izh+ioiicpLFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LuOICcsICflvp4gJykgK1xuXHRcdFx0XHRcdFx0dGhpcy5jdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg6YeN5a6a5ZCR5YiwICcsICcg6YeN5paw5bCO5ZCR5YiwICcpICtcblx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdHgucGFnZU5hbWUgPSByZXNvbHZlZE5hbWU7IC8vIHVwZGF0ZSB0byByZWRpcmVjdCB0YXJnZXQgb3Igbm9ybWFsaXplZCBuYW1lXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNvdWxkIGJlIGEgY2lyY3VsYXIgcmVkaXJlY3Qgb3Igb3RoZXIgcHJvYmxlbVxuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73op6PmnpDpobXpnaLnmoTph43lrprlkJHvvJonLCAn5LiN6IO96Kej5p6Q6aCB6Z2i55qE6YeN5paw5bCO5ZCR77yaJykgKyB0aGlzLmN0eC5wYWdlTmFtZVxuXHRcdFx0KTtcblx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHR9O1xuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHByb3ZpZGUgYSB3YXRjaGxpc3QgZXhwaXJ5LiAgV2lsbCBub3Rcblx0ICogZG8gc28gaWYgdGhlIHBhZ2UgaXMgY3VycmVudGx5IHBlcm1hbmVudGx5IHdhdGNoZWQsIG9yIHRoZSBjdXJyZW50XG5cdCAqIGV4cGlyeSBpcyAqYWZ0ZXIqIHRoZSBuZXcsIHByb3ZpZGVkIGV4cGlyeS4gIE9ubHkgaGFuZGxlcyBzdHJpbmdzXG5cdCAqIHJlY29nbml6ZWQgYnkge0BsaW5rIE1vcmViaXRzLmRhdGV9IG9yIHJlbGF0aXZlIHRpbWVmcmFtZXMgd2l0aFxuXHQgKiB1bml0IGl0IGNhbiBwcm9jZXNzLiAgUmVsaWVzIG9uIHRoZSBmYWN0IHRoYXQgZm5DYW5Vc2VNd1VzZXJUb2tlblxuXHQgKiByZXF1aXJlcyBwYWdlIGxvYWRpbmcgaWYgYSB3YXRjaGxpc3RleHBpcnkgaXMgcHJvdmlkZWQsIHNvIHdlIGFyZVxuXHQgKiBlbnN1cmVkIG9mIGtub3dpbmcgdGhlIHdhdGNoIHN0YXR1cyBieSB0aGUgdXNlIG9mIHRoaXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cHJpdmF0ZSBmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdGlmICh0aGlzLmN0eC53YXRjaGxpc3RFeHBpcnkpIHtcblx0XHRcdGlmICghdGhpcy5jdHgud2F0Y2hlZCB8fCBNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShTdHJpbmcodGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5KSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmN0eC53YXRjaGVkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRsZXQgbmV3RXhwaXJ5OiBNb3JlYml0c0RhdGU7XG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBuZXcgZXhwaXJ5IGlzIGFcblx0XHRcdFx0Ly8gcmVsYXRpdmUgKGUuZy4gYDEgbW9udGhgKSBvciBhYnNvbHV0ZSBkYXRldGltZVxuXHRcdFx0XHRjb25zdCByZWwgPSBTdHJpbmcodGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5KS5zcGxpdCgnICcpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG5ld0V4cGlyeSA9IG5ldyBNb3JlYml0cy5kYXRlKCkuYWRkKHJlbFswXSA/PyAnJywgcmVsWzFdID8/ICcnKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiB0aGUgZGF0ZSBpcyB2YWxpZCwgb25seSB1c2UgaXQgaWYgaXQgZXh0ZW5kcyB0aGUgY3VycmVudCBleHBpcnlcblx0XHRcdFx0aWYgKG5ld0V4cGlyeS5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzQWZ0ZXIobmV3IE1vcmViaXRzLmRhdGUodGhpcy5jdHgud2F0Y2hlZCkpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gSWYgaXQncyBzdGlsbCBub3QgdmFsaWQsIGhvcGUgaXQncyBhIHZhbGlkIE1XIGV4cGlyeSBmb3JtYXQgdGhhdFxuXHRcdFx0XHRcdC8vIE1vcmViaXRzLmRhdGUgZG9lc24ndCByZWNvZ25pemUsIHNvIGp1c3QgZGVmYXVsdCB0byB1c2luZyBpdC5cblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgYWxzbyBpbmNsdWRlIG1pbm9yIHR5cG9zLlxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRwcml2YXRlIGZuU2F2ZVN1Y2Nlc3MgPSAoKTogdm9pZCA9PiB7XG5cdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB0aGlzLmN0eC5zYXZlQXBpIS5nZXRSZXNwb25zZSgpIGFzIHVua25vd24gYXMge2VkaXQ6IHtyZXN1bHQ6IHN0cmluZzsgY2FwdGNoYT86IHVua25vd259fTtcblx0XHQvLyBzZWUgaWYgdGhlIEFQSSB0aGlua3Mgd2Ugd2VyZSBzdWNjZXNzZnVsXG5cdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdC8vIHJlYWwgc3VjY2Vzc1xuXHRcdFx0Ly8gZGVmYXVsdCBvbiBzdWNjZXNzIGFjdGlvbiAtIGRpc3BsYXkgbGluayBmb3IgZWRpdGVkIHBhZ2Vcblx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKHRoaXMuY3R4LnBhZ2VOYW1lKSk7XG5cdFx0XHRsaW5rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY3R4LnBhZ2VOYW1lKSk7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmluZm8oWyflrozmiJDvvIgnLCBsaW5rLCAn77yJJ10pO1xuXHRcdFx0aWYgKHRoaXMuY3R4Lm9uU2F2ZVN1Y2Nlc3MpIHtcblx0XHRcdFx0dGhpcy5jdHgub25TYXZlU3VjY2VzcyEodGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIGVycm9ycyBoZXJlIGFyZSBvbmx5IGdlbmVyYXRlZCBieSBleHRlbnNpb25zIHdoaWNoIGhvb2sgQVBJRWRpdEJlZm9yZVNhdmUgd2l0aGluIE1lZGlhV2lraSxcblx0XHQvLyB3aGljaCBhcyBvZiAxLjM0LjAtd21mLjIzIChTZXB0IDIwMTkpIHNob3VsZCBvbmx5IGVuY29tcGFzcyBjYXB0Y2hhIG1lc3NhZ2VzXG5cdFx0aWYgKHJlc3BvbnNlLmVkaXQuY2FwdGNoYSkge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6DmnI3liqHlmajopoHmsYLmgqjovpPlhaXpqozor4HnoIHjgIInLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5Zug5Ly65pyN5Zmo6KaB5rGC5oKo6Ly45YWl6amX6K2J56K844CCJylcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkv53lrZjpobXpnaLml7bnlLFBUEnlvpfliLDmnKrnn6XplJnor68nLCAn5YSy5a2Y6aCB6Z2i5pmC55SxQVBJ5b6X5Yiw5pyq55+l6Yyv6KqkJykpO1xuXHRcdH1cblx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlISh0aGlzKTtcblx0fTtcblx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRwcml2YXRlIGZuU2F2ZUVycm9yID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGVycm9yQ29kZSA9IHRoaXMuY3R4LnNhdmVBcGkhLmdldEVycm9yQ29kZSgpO1xuXHRcdC8vIGNoZWNrIGZvciBlZGl0IGNvbmZsaWN0XG5cdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2VkaXRjb25mbGljdCcgJiYgdGhpcy5jdHguY29uZmxpY3RSZXRyaWVzKysgPCB0aGlzLmN0eC5tYXhDb25mbGljdFJldHJpZXMpIHtcblx0XHRcdC8vIGVkaXQgY29uZmxpY3RzIGNhbiBvY2N1ciB3aGVuIHRoZSBwYWdlIG5lZWRzIHRvIGJlIHB1cmdlZCBmcm9tIHRoZSBzZXJ2ZXIgY2FjaGVcblx0XHRcdGNvbnN0IHB1cmdlUXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0dGl0bGVzOiB0aGlzLmN0eC5wYWdlTmFtZSwgLy8gcmVkaXJlY3RzIGFyZSBhbHJlYWR5IHJlc29sdmVkXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBwdXJnZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzmraPlnKjmm7TmlrDmnI3liqHlmajnvJPlrZgnLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM5q2j5Zyo5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyksXG5cdFx0XHRcdHB1cmdlUXVlcnksXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5qOA5rWL5Yiw57yW6L6R5Yay56qB77yM6YeN6K+V5L+u5pS5JywgJ+aqoua4rOWIsOe3qOi8r+ihneeqge+8jOmHjeippuS/ruaUuScpKTtcblx0XHRcdFx0XHRpZiAodGhpcy5mbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0XHRcdHRoaXMuY3R4LnNhdmVBcGkhLnBvc3QoKTsgLy8gbmVjZXNzYXJpbHkgYXBwZW5kLCBwcmVwZW5kLCBvciBuZXdTZWN0aW9uLCBzbyB0aGlzIHNob3VsZCB3b3JrIGFzIGRlc2lyZWRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5jdHgubG9hZEFwaSEucG9zdCgpOyAvLyByZWxvYWQgdGhlIHBhZ2UgYW5kIHJlYXBwbHkgdGhlIGVkaXRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnRcblx0XHRcdCk7XG5cdFx0XHRwdXJnZUFwaS5wb3N0KCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgbmV0d29yayBvciBzZXJ2ZXIgZXJyb3Jcblx0XHR9IGVsc2UgaWYgKChlcnJvckNvZGUgPT09IG51bGwgfHwgZXJyb3JDb2RlID09PSB1bmRlZmluZWQpICYmIHRoaXMuY3R4LnJldHJpZXMrKyA8IHRoaXMuY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdC8vIHRoZSBlcnJvciBtaWdodCBiZSB0cmFuc2llbnQsIHNvIHRyeSBhZ2FpblxuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5L+d5a2Y5aSx6LSl77yM5ZyoMuenkuWQjumHjeivleKApuKApicsICflhLLlrZjlpLHmlZfvvIzlnKgy56eS5b6M6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0Ly8gd2FpdCBmb3Igc29tZXRpbWUgZm9yIGNsaWVudCB0byByZWdhaW4gY29ubmVjdGl2aXR5XG5cdFx0XHR0aGlzLnNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmN0eC5zYXZlQXBpIS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdH0pO1xuXHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHRoaXMuY3R4LnNhdmVBcGkhLmdldFJlc3BvbnNlKCkgYXMgdW5rbm93biBhcyB7XG5cdFx0XHRcdGVycm9yPzogV2lraVBhZ2VBcGlFcnJvckRhdGEgfCBudWxsO1xuXHRcdFx0XHRlcnJvcnM6IHtkYXRhOiBXaWtpUGFnZUFwaUVycm9yRGF0YX1bXTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlcnJvckRhdGEgPVxuXHRcdFx0XHRyZXNwb25zZS5lcnJvciB8fFxuXHRcdFx0XHQvLyBiYyBlcnJvciBmb3JtYXRcblx0XHRcdFx0cmVzcG9uc2UuZXJyb3JzWzBdIS5kYXRhOyAvLyBodG1sL3dpa2l0ZXh0L3BsYWludGV4dCBlcnJvciBmb3JtYXRcblx0XHRcdHN3aXRjaCAoZXJyb3JDb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ3Byb3RlY3RlZHBhZ2UnOlxuXHRcdFx0XHRcdC8vIG5vbi1hZG1pbiBhdHRlbXB0aW5nIHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZSAtIHRoaXMgZ2l2ZXMgYSBmcmllbmRsaWVyIG1lc3NhZ2UgdGhhbiB0aGUgZGVmYXVsdFxuXHRcdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJrpobXpnaLooqvkv53miqQnLCAn5LiN6IO95YSy5a2Y5L+u5pS577ya6aCB6Z2i6KKr5L+d6K23JykpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci1kaXNhbGxvd2VkJzpcblx0XHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJykgK1xuXHRcdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24gK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+KAnemYu+atouOAguiLpeaCqOiupOS4uuaCqOeahOivpeasoee8lui+keaYr+acieaEj+S5ieeahO+8jOivt+iHsyBRaXV3ZW5fdGFsazrnrqHnkIblkZjlkYrnpLrmnb8g5o+Q5oql44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn44CN6Zi75q2i44CC6Iul5oKo6KqN54K65oKo55qE6Kmy5qyh57eo6Lyv5piv5pyJ5oSP576p55qE77yM6KuL6IezIFFpdXdlbl90YWxrOueuoeeQhuWToeWRiuekuuadvyDmj5DloLHjgIInXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci13YXJuaW5nJzpcblx0XHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6R6KKr6Ziy5rul55So6L+H5ruk5Zmo6KeE5YiZ4oCcJywgJ+e3qOi8r+iiq+mYsua/q+eUqOmBjua/vuWZqOimj+WJh+OAjCcpLFxuXHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHQn4oCd6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66K+l57yW6L6R77yM6K+35bCd6K+V6YeN5paw5o+Q5Lqk77yM5qC55o2u6L+H5ruk5Zmo55qE6K6+572u5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57yW6L6R44CCJyxcblx0XHRcdFx0XHRcdFx0J+OAjeitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuipsue3qOi8r++8jOiri+WYl+ippumHjeaWsOaPkOS6pO+8jOagueaTmumBjua/vuWZqOeahOioreWumuaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe3qOi8r+OAgidcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBhIHdheSB0byBhdXRvbWF0aWNhbGx5IHJldHJ5IHRoZSBhY3Rpb24gaWYgdGhleSBzbyBjaG9vc2UgLVxuXHRcdFx0XHRcdC8vIEkgY2FuJ3Qgc2VlIGhvdyB0byBkbyB0aGlzIHdpdGhvdXQgY3JlYXRpbmcgYSBVSSBkZXBlbmRlbmN5IG9uIE1vcmViaXRzLndpa2kucGFnZSB0aG91Z2ggLS0gVFRPXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NwYW1ibGFja2xpc3QnOiB7XG5cdFx0XHRcdFx0Ly8gSWYgbXVsdGlwbGUgaXRlbXMgYXJlIGJsYWNrbGlzdGVkLCB3ZSBvbmx5IHJldHVybiB0aGUgZmlyc3Rcblx0XHRcdFx0XHRjb25zdCBbc3BhbV0gPSBlcnJvckRhdGEuc3BhbWJsYWNrbGlzdC5tYXRjaGVzO1xuXHRcdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboFVSTCAnLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5ZugVVJMICcpICtcblx0XHRcdFx0XHRcdFx0c3BhbSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWcqOWeg+WcvumTvuaOpem7keWQjeWNleS4reOAgicsICcg5Zyo5Z6D5Zy+6YCj57WQ6buR5ZCN5Zau5Lit44CCJylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577yaJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8micpICsgdGhpcy5jdHguc2F2ZUFwaSEuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRpZiAodGhpcy5jdHgub25TYXZlRmFpbHVyZSkge1xuXHRcdFx0XHR0aGlzLmN0eC5vblNhdmVGYWlsdXJlISh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgaXNUZXh0UmVkaXJlY3QgPSAodGV4dDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0aWYgKCF0ZXh0KSB7XG5cdFx0XHQvLyBubyB0ZXh0IC0gY29udGVudCBlbXB0eSBvciBpbmFjY2Vzc2libGUgKHJldmRlbGxlZCBvciBzdXBwcmVzc2VkKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMubDEwbi5yZWRpcmVjdFRhZ0FsaWFzZXMuc29tZSgodGFnKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxzKiR7dGFnfVxcXFxXYCwgJ2knKS50ZXN0KHRleHQpO1xuXHRcdH0pO1xuXHR9O1xuXHRwcml2YXRlIGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gKHRoaXMuY3R4Lmxvb2t1cENyZWF0aW9uQXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdGlmICghdGhpcy5mbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlISkpIHtcblx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHR9XG5cblx0XHRjb25zdCByZXYgPSByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnMgJiYgcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zWzBdO1xuXHRcdGlmICghcmV2KSB7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleaJvuWIsCcsICfnhKHms5Xmib7liLAnKSArXG5cdFx0XHRcdFx0dGhpcy5jdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn55qE5Lu75L2V5L+u6K6i54mI5pysJywgJ+eahOS7u+S9leS/ruiogueJiOacrCcpXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5jdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuY3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciB8fCAhdGhpcy5pc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdHRoaXMuY3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdGlmICghdGhpcy5jdHguY3JlYXRvcikge1xuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0dGhpcy5jdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN0eC50aW1lc3RhbXAgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0aWYgKCF0aGlzLmN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlISh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzISh0aGlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHgubG9va3VwQ3JlYXRpb25BcGkhLnF1ZXJ5WydydmxpbWl0J10gPSA1MDsgLy8gbW9kaWZ5IHByZXZpb3VzIHF1ZXJ5IHRvIGZldGNoIG1vcmUgcmV2aXNpb25zXG5cdFx0XHR0aGlzLmN0eC5sb29rdXBDcmVhdGlvbkFwaSEucXVlcnlbJ3RpdGxlcyddID0gdGhpcy5jdHgucGFnZU5hbWU7IC8vIHVwZGF0ZSBwYWdlTmFtZSBpZiByZWRpcmVjdCByZXNvbHV0aW9uIHRvb2sgcGxhY2UgaW4gZWFybGllciBxdWVyeVxuXHRcdFx0dGhpcy5jdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+WPluW+l+mggemdouW7uueri+izh+ioiicpLFxuXHRcdFx0XHR0aGlzLmN0eC5sb29rdXBDcmVhdGlvbkFwaSEucXVlcnksXG5cdFx0XHRcdHRoaXMuZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IsXG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHRcdFx0KTtcblx0XHRcdHRoaXMuY3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdHRoaXMuY3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHR9XG5cdH07XG5cdHByaXZhdGUgZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHgubG9va3VwQ3JlYXRpb25BcGkhLmdldFJlc3BvbnNlKCkgYXMgV2lraVBhZ2VBcGlSZXNwb25zZSkucXVlcnk7XG5cdFx0Y29uc3QgcmV2cyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucztcblx0XHRmb3IgKGNvbnN0IHJldiBvZiByZXZzKSB7XG5cdFx0XHRpZiAoIXRoaXMuaXNUZXh0UmVkaXJlY3QocmV2LmNvbnRlbnQpKSB7XG5cdFx0XHRcdHRoaXMuY3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0dGhpcy5jdHgudGltZXN0YW1wID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghdGhpcy5jdHguY3JlYXRvcikge1xuXHRcdFx0Ly8gZmFsbGJhY2sgdG8gZ2l2ZSBmaXJzdCByZXZpc2lvbiBhdXRob3IgaWYgbm8gbm9uLXJlZGlyZWN0IHZlcnNpb24gaW4gdGhlIGZpcnN0IDUwXG5cdFx0XHR0aGlzLmN0eC5jcmVhdG9yID0gcmV2c1swXS51c2VyO1xuXHRcdFx0dGhpcy5jdHgudGltZXN0YW1wID0gcmV2c1swXS50aW1lc3RhbXA7XG5cdFx0XHRpZiAoIXRoaXMuY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlISh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIXRoaXMuY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHR0aGlzLmN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSEodGhpcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+W3suiOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflt7Llj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSk7XG5cdFx0dGhpcy5jdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MhKHRoaXMpO1xuXHR9O1xuXHQvKipcblx0ICogQ29tbW9uIGNoZWNrcyBmb3IgYWN0aW9uIG1ldGhvZHMuIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsXG5cdCAqIHByb3RlY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIGNoZWNrZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHByaXZhdGUgZm5QcmVmbGlnaHRDaGVja3MgPSAoYWN0aW9uOiBzdHJpbmcsIG9uRmFpbHVyZTogKHBhZ2U6IFdpa2lQYWdlKSA9PiB2b2lkKTogYm9vbGVhbiA9PiB7XG5cdFx0Ly8gaWYgYSBub24tYWRtaW4gdHJpZXMgdG8gZG8gdGhpcywgZG9uJ3QgYm90aGVyXG5cdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiBhY3Rpb24gIT09ICdtb3ZlJykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvJrlj6rmnInnrqHnkIblkZjlj6/ku6Xov5vooYzmraTmk43kvZwnLCAn44CN5pON5L2c77ya5Y+q5pyJ566h55CG5ZOh5Y+v5Lul6YCy6KGM5q2k5pON5L2cJylcblx0XHRcdCk7XG5cdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5jdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoYEludGVybmFsIGVycm9yOiAke2FjdGlvbn0gcmVhc29uIG5vdCBzZXQgKHVzZSBzZXRFZGl0U3VtbWFyeSBmdW5jdGlvbikhYCk7XG5cdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0fTtcblx0LyoqXG5cdCAqIENvbW1vbiBjaGVja3MgZm9yIGZuUHJvY2VzcyBmdW5jdGlvbnMgKGBmblByb2Nlc3NEZWxldGVgLCBgZm5Qcm9jZXNzTW92ZWAsIGV0Yy5cblx0ICogVXNlZCBmb3IgbW92ZSwgdW5kZWxldGUsIGRlbGV0ZSwgcHJvdGVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG9uRmFpbHVyZSAtIEZhaWx1cmUgY2FsbGJhY2suXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZSAtIFRoZSByZXNwb25zZSBkb2N1bWVudCBmcm9tIHRoZSBBUEkgY2FsbC5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwcml2YXRlIGZuUHJvY2Vzc0NoZWNrcyA9IChcblx0XHRhY3Rpb246IHN0cmluZyxcblx0XHRvbkZhaWx1cmU6IChwYWdlOiBXaWtpUGFnZSkgPT4gdm9pZCxcblx0XHRyZXNwb25zZTogV2lraVBhZ2VBcGlRdWVyeVxuXHQpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBbe21pc3Npbmd9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdC8vIE5vIHVuZGVsZXRlIGFzIGFuIGV4aXN0aW5nIHBhZ2UgY291bGQgaGF2ZSBkZWxldGVkIHJldmlzaW9uc1xuXHRcdGNvbnN0IGFjdGlvbk1pc3NpbmcgPSBtaXNzaW5nICYmIFsnZGVsZXRlJywgJ21vdmUnXS5pbmNsdWRlcyhhY3Rpb24pO1xuXHRcdGNvbnN0IHByb3RlY3RNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgbWlzc2luZyAmJiAodGhpcy5jdHgucHJvdGVjdEVkaXQgfHwgdGhpcy5jdHgucHJvdGVjdE1vdmUpO1xuXHRcdGNvbnN0IHNhbHRNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgIW1pc3NpbmcgJiYgdGhpcy5jdHgucHJvdGVjdENyZWF0ZTtcblx0XHRpZiAoYWN0aW9uTWlzc2luZyB8fCBwcm90ZWN0TWlzc2luZyB8fCBzYWx0TWlzc2luZykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0YCR7XG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvIzlm6DkuLrpobXpnaInLCAn44CN5pON5L2c77yM5Zug54K66aCB6Z2iJykgK1xuXHRcdFx0XHRcdChtaXNzaW5nID8gJ+W3suS4jScgOiB3aW5kb3cud2dVTFMoJ+W3sue7jycsICflt7LntpMnKSlcblx0XHRcdFx0feWtmOWcqGBcblx0XHRcdCk7XG5cdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdC8vIERlbGV0ZSwgdW5kZWxldGUsIG1vdmVcblx0XHQvLyBleHRyYWN0IHByb3RlY3Rpb24gaW5mb1xuXHRcdGxldCBlZGl0cHJvdDogV2lraVBhZ2VBcGlQcm90ZWN0aW9uIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhY3Rpb24gPT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbi5maW5kTGFzdCgocHIpID0+IHtcblx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdjcmVhdGUnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICdkZWxldGUnIHx8IGFjdGlvbiA9PT0gJ21vdmUnKSB7XG5cdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb24uZmluZExhc3QoKHByKSA9PiB7XG5cdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0ZWRpdHByb3QgJiZcblx0XHRcdCF0aGlzLmN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHQhY29uZmlybShcblx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjljbPlsIblr7nlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH5bCN5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdHRoaXMuY3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHQoZWRpdHByb3QuZXhwaXJ5ID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHQ/IHdpbmRvdy53Z1VMUygn4oCd77yI5rC45LmF77yJJywgJ+OAje+8iOawuOS5he+8iScpXG5cdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuZGF0ZShlZGl0cHJvdC5leHBpcnkpLmNhbGVuZGFyKCd1dGMnKVxuXHRcdFx0XHRcdFx0XHR9IChVVEMp77yJYCkgK1xuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd6L+b6KGM4oCcJywgJ+OAjemAsuihjOOAjCcpICtcblx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2cJywgJ+OAjeaTjeS9nCcpICtcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHQn44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul57un57ut5pON5L2c77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdCfjgIJcXG5cXG7pu57mk4rnorrlrprku6Xnubznuozmk43kvZzvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOaTjeS9nOOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTmk43kvZzjgIInKSk7XG5cdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbikge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPluS7pOeJjOOAgicsICfnhKHms5Xlj5blvpfmrIrmnZbjgIInKSk7XG5cdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0fTtcblxuXHRwcml2YXRlIGZuUHJvY2Vzc01vdmUgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nO1xuXHRcdGxldCB0b2tlbjogc3RyaW5nO1xuXHRcdGlmICh0aGlzLmZuQ2FuVXNlTXdVc2VyVG9rZW4oJ21vdmUnKSkge1xuXHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0cGFnZVRpdGxlID0gdGhpcy5jdHgucGFnZU5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKHRoaXMuY3R4Lm1vdmVBcGkhLmdldFJlc3BvbnNlKCkgYXMgV2lraVBhZ2VBcGlSZXNwb25zZSkucXVlcnk7XG5cdFx0XHRpZiAoIXRoaXMuZm5Qcm9jZXNzQ2hlY2tzKCdtb3ZlJywgdGhpcy5jdHgub25Nb3ZlRmFpbHVyZSEsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdHRoaXMuY3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQgfHwgZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHF1ZXJ5OiBXaWtpUGFnZVByaXZhdGVRdWVyeSA9IHtcblx0XHRcdGFjdGlvbjogJ21vdmUnLFxuXHRcdFx0ZnJvbTogcGFnZVRpdGxlLFxuXHRcdFx0dG86IHRoaXMuY3R4Lm1vdmVEZXN0aW5hdGlvbiEsXG5cdFx0XHR0b2tlbixcblx0XHRcdHJlYXNvbjogdGhpcy5jdHguZWRpdFN1bW1hcnksXG5cdFx0XHR3YXRjaGxpc3Q6IHRoaXMuY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH07XG5cdFx0aWYgKHRoaXMuY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSB0aGlzLmN0eC5jaGFuZ2VUYWdzO1xuXHRcdH1cblx0XHRpZiAodGhpcy5mbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IHRoaXMuY3R4LndhdGNobGlzdEV4cGlyeSE7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5tb3ZlVGFsa1BhZ2UpIHtcblx0XHRcdHF1ZXJ5Lm1vdmV0YWxrID0gJ3RydWUnO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jdHgubW92ZVN1YnBhZ2VzKSB7XG5cdFx0XHRxdWVyeS5tb3Zlc3VicGFnZXMgPSAndHJ1ZSc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCkge1xuXHRcdFx0cXVlcnkubm9yZWRpcmVjdCA9ICd0cnVlJztcblx0XHR9XG5cdFx0dGhpcy5jdHgubW92ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHR3aW5kb3cud2dVTFMoJ+enu+WKqOmhtemdouKApuKApicsICfnp7vli5XpoIHpnaLigKbigKYnKSxcblx0XHRcdHF1ZXJ5LFxuXHRcdFx0dGhpcy5jdHgub25Nb3ZlU3VjY2VzcyBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGwsXG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0dGhpcy5jdHgub25Nb3ZlRmFpbHVyZSBhcyB1bmtub3duIGFzICgoYXBpb2JqOiBXaWtpQXBpKSA9PiB2b2lkKSB8IG51bGxcblx0XHQpO1xuXHRcdHRoaXMuY3R4Lm1vdmVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmN0eC5tb3ZlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdH07XG5cdHByaXZhdGUgZm5Qcm9jZXNzUGF0cm9sID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5OiBXaWtpUGFnZVByaXZhdGVRdWVyeSA9IHtcblx0XHRcdGFjdGlvbjogJ3BhdHJvbCcsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9O1xuXHRcdC8vIERpZG4ndCBuZWVkIHRvIGxvYWQgdGhlIHBhZ2Vcblx0XHRpZiAodGhpcy5jdHgucmNpZCkge1xuXHRcdFx0cXVlcnkucmNpZCA9IHRoaXMuY3R4LnJjaWQ7XG5cdFx0XHRxdWVyeS50b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgncGF0cm9sVG9rZW4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHgucGF0cm9sQXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdFx0Ly8gRG9uJ3QgcGF0cm9sIGlmIG5vdCB1bnBhdHJvbGxlZFxuXHRcdFx0aWYgKCFyZXNwb25zZS5yZWNlbnRjaGFuZ2VzWzBdLnVucGF0cm9sbGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFt7bGFzdHJldmlkfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdGlmICghbGFzdHJldmlkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHF1ZXJ5LnJldmlkID0gbGFzdHJldmlkO1xuXHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRxdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jdHguY2hhbmdlVGFncykge1xuXHRcdFx0cXVlcnkudGFncyA9IHRoaXMuY3R4LmNoYW5nZVRhZ3M7XG5cdFx0fVxuXHRcdGNvbnN0IHBhdHJvbFN0YXQgPSBuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn5qCH6K6w6aG16Z2i5Li65bey5beh5p+lJywgJ+aomeiomOmggemdoueCuuW3suW3oeafpScpKTtcblx0XHR0aGlzLmN0eC5wYXRyb2xQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0d2luZG93LndnVUxTKCflt6Hmn6XpobXpnaLigKbigKYnLCAn5beh5p+l6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRxdWVyeSxcblx0XHRcdG51bGwsXG5cdFx0XHRwYXRyb2xTdGF0XG5cdFx0KTtcblx0XHR0aGlzLmN0eC5wYXRyb2xQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmN0eC5wYXRyb2xQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0cHJpdmF0ZSBmblByb2Nlc3NEZWxldGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nO1xuXHRcdGxldCB0b2tlbjogc3RyaW5nO1xuXHRcdGlmICh0aGlzLmZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRwYWdlVGl0bGUgPSB0aGlzLmN0eC5wYWdlTmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHguZGVsZXRlQXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdFx0aWYgKCF0aGlzLmZuUHJvY2Vzc0NoZWNrcygnZGVsZXRlJywgdGhpcy5jdHgub25EZWxldGVGYWlsdXJlISwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0dGhpcy5jdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZCB8fCBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgcXVlcnk6IFdpa2lQYWdlUHJpdmF0ZVF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAnZGVsZXRlJyxcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHR0b2tlbixcblx0XHRcdHJlYXNvbjogdGhpcy5jdHguZWRpdFN1bW1hcnksXG5cdFx0XHR3YXRjaGxpc3Q6IHRoaXMuY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH07XG5cdFx0aWYgKHRoaXMuY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSB0aGlzLmN0eC5jaGFuZ2VUYWdzO1xuXHRcdH1cblx0XHRpZiAodGhpcy5mbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IHRoaXMuY3R4LndhdGNobGlzdEV4cGlyeSE7XG5cdFx0fVxuXHRcdHRoaXMuY3R4LmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHR3aW5kb3cud2dVTFMoJ+WIoOmZpOmhtemdouKApuKApicsICfliKrpmaTpoIHpnaLigKbigKYnKSxcblx0XHRcdHF1ZXJ5LFxuXHRcdFx0dGhpcy5jdHgub25EZWxldGVTdWNjZXNzIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbCxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmZuUHJvY2Vzc0RlbGV0ZUVycm9yXG5cdFx0KTtcblx0XHR0aGlzLmN0eC5kZWxldGVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmN0eC5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0Ly8gY2FsbGJhY2sgZnJvbSBkZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRwcml2YXRlIGZuUHJvY2Vzc0RlbGV0ZUVycm9yID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGVycm9yQ29kZSA9IHRoaXMuY3R4LmRlbGV0ZVByb2Nlc3NBcGkhLmdldEVycm9yQ29kZSgpO1xuXHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicgJiYgdGhpcy5jdHgucmV0cmllcysrIDwgdGhpcy5jdHgubWF4UmV0cmllcykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdHRoaXMuY3R4LmRlbGV0ZVByb2Nlc3NBcGkhLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnbWlzc2luZ3RpdGxlJykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S4jeiDveWIoOmZpOmhtemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcsICfkuI3og73liKrpmaTpoIHpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnKSk7XG5cdFx0XHRpZiAodGhpcy5jdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIHRoaXMuY3R4LmRlbGV0ZVByb2Nlc3NBcGkhIGFzIHVua25vd24gYXMgV2lraVBhZ2UpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdH1cblx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5XliKDpmaTpobXpnaLvvJonLCAn54Sh5rOV5Yiq6Zmk6aCB6Z2i77yaJykgKyB0aGlzLmN0eC5kZWxldGVQcm9jZXNzQXBpIS5nZXRFcnJvclRleHQoKVxuXHRcdFx0KTtcblx0XHRcdGlmICh0aGlzLmN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0dGhpcy5jdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgdGhpcy5jdHguZGVsZXRlUHJvY2Vzc0FwaSEgYXMgdW5rbm93biBhcyBXaWtpUGFnZSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIGZuUHJvY2Vzc1VuZGVsZXRlID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBwYWdlVGl0bGU6IHN0cmluZztcblx0XHRsZXQgdG9rZW46IHN0cmluZztcblx0XHRpZiAodGhpcy5mbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRwYWdlVGl0bGUgPSB0aGlzLmN0eC5wYWdlTmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAodGhpcy5jdHgudW5kZWxldGVBcGkhLmdldFJlc3BvbnNlKCkgYXMgV2lraVBhZ2VBcGlSZXNwb25zZSkucXVlcnk7XG5cdFx0XHRpZiAoIXRoaXMuZm5Qcm9jZXNzQ2hlY2tzKCd1bmRlbGV0ZScsIHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlISwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0dGhpcy5jdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZCB8fCBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgcXVlcnk6IFdpa2lQYWdlUHJpdmF0ZVF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAndW5kZWxldGUnLFxuXHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdHRva2VuLFxuXHRcdFx0cmVhc29uOiB0aGlzLmN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdHdhdGNobGlzdDogdGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fTtcblx0XHRpZiAodGhpcy5jdHguY2hhbmdlVGFncykge1xuXHRcdFx0cXVlcnkudGFncyA9IHRoaXMuY3R4LmNoYW5nZVRhZ3M7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gdGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ITtcblx0XHR9XG5cdFx0dGhpcy5jdHgudW5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0d2luZG93LndnVUxTKCfov5jljp/pobXpnaLigKbigKYnLCAn6YKE5Y6f6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRxdWVyeSxcblx0XHRcdHRoaXMuY3R4Lm9uVW5kZWxldGVTdWNjZXNzIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbCxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmZuUHJvY2Vzc1VuZGVsZXRlRXJyb3Jcblx0XHQpO1xuXHRcdHRoaXMuY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0Ly8gY2FsbGJhY2sgZnJvbSB1bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdHByaXZhdGUgZm5Qcm9jZXNzVW5kZWxldGVFcnJvciA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBlcnJvckNvZGUgPSB0aGlzLmN0eC51bmRlbGV0ZVByb2Nlc3NBcGkhLmdldEVycm9yQ29kZSgpO1xuXHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicpIHtcblx0XHRcdGlmICh0aGlzLmN0eC5yZXRyaWVzKysgPCB0aGlzLmN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0dGhpcy5jdHgudW5kZWxldGVQcm9jZXNzQXBpIS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfmjIHnu63nmoTmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43mlrDliqDovb3pobXpnaLlubbph43or5UnLCAn5oyB57qM55qE6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN5paw6LyJ5YWl6aCB6Z2i5Lim6YeN6KmmJylcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0dGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCB0aGlzLmN0eC51bmRlbGV0ZVByb2Nlc3NBcGkhIGFzIHVua25vd24gYXMgV2lraVBhZ2UpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnY2FudHVuZGVsZXRlJykge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfml6Dms5Xov5jljp/liKDpmaTpobXpnaLvvIzlm6DmsqHmnInniYjmnKzkvpvov5jljp/miJblt7Looqvov5jljp8nLFxuXHRcdFx0XHRcdCfnhKHms5XpgoTljp/liKrpmaTpoIHpnaLvvIzlm6DmspLmnInniYjmnKzkvpvpgoTljp/miJblt7LooqvpgoTljp8nXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0XHRpZiAodGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0dGhpcy5jdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCB0aGlzLmN0eC51bmRlbGV0ZVByb2Nlc3NBcGkhIGFzIHVua25vd24gYXMgV2lraVBhZ2UpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdH1cblx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xov5jljp/pobXpnaLvvJonLCAn54Sh5rOV6YKE5Y6f6aCB6Z2i77yaJykgKyB0aGlzLmN0eC51bmRlbGV0ZVByb2Nlc3NBcGkhLmdldEVycm9yVGV4dCgpXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgdGhpcy5jdHgudW5kZWxldGVQcm9jZXNzQXBpISBhcyB1bmtub3duIGFzIFdpa2lQYWdlKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgZm5Qcm9jZXNzUHJvdGVjdCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCByZXNwb25zZSA9ICh0aGlzLmN0eC5wcm90ZWN0QXBpIS5nZXRSZXNwb25zZSgpIGFzIFdpa2lQYWdlQXBpUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdGlmICghdGhpcy5mblByb2Nlc3NDaGVja3MoJ3Byb3RlY3QnLCB0aGlzLmN0eC5vblByb3RlY3RGYWlsdXJlISwgcmVzcG9uc2UpKSB7XG5cdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdGNvbnN0IHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0dGhpcy5jdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZCB8fCBmYWxzZTtcblx0XHQvLyBGZXRjaCBleGlzdGluZyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdGNvbnN0IHBycyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb247XG5cdFx0bGV0IGVkaXRwcm90OiBXaWtpUGFnZUFwaVByb3RlY3Rpb24gfCB1bmRlZmluZWQ7XG5cdFx0bGV0IG1vdmVwcm90OiBXaWtpUGFnZUFwaVByb3RlY3Rpb24gfCB1bmRlZmluZWQ7XG5cdFx0bGV0IGNyZWF0ZXByb3Q6IFdpa2lQYWdlQXBpUHJvdGVjdGlvbiB8IHVuZGVmaW5lZDtcblx0XHRmb3IgKGNvbnN0IHByIG9mIHBycykge1xuXHRcdFx0Ly8gRmlsdGVyIG91dCBwcm90ZWN0aW9uIGZyb20gY2FzY2FkaW5nXG5cdFx0XHRpZiAocHIudHlwZSA9PT0gJ2VkaXQnICYmICFwci5zb3VyY2UpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSBwcjtcblx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdG1vdmVwcm90ID0gcHI7XG5cdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdjcmVhdGUnKSB7XG5cdFx0XHRcdGNyZWF0ZXByb3QgPSBwcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRmFsbCBiYWNrIHRvIGN1cnJlbnQgbGV2ZWxzIGlmIG5vdCBleHBsaWNpdGx5IHNldFxuXHRcdGlmICghdGhpcy5jdHgucHJvdGVjdEVkaXQgJiYgZWRpdHByb3QpIHtcblx0XHRcdHRoaXMuY3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRsZXZlbDogZWRpdHByb3QubGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZWRpdHByb3QuZXhwaXJ5LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmN0eC5wcm90ZWN0TW92ZSAmJiBtb3ZlcHJvdCkge1xuXHRcdFx0dGhpcy5jdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdGxldmVsOiBtb3ZlcHJvdC5sZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBtb3ZlcHJvdC5leHBpcnksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuY3R4LnByb3RlY3RDcmVhdGUgJiYgY3JlYXRlcHJvdCkge1xuXHRcdFx0dGhpcy5jdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0bGV2ZWw6IGNyZWF0ZXByb3QubGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogY3JlYXRlcHJvdC5leHBpcnksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHQvLyBEZWZhdWx0IHRvIHByZS1leGlzdGluZyBjYXNjYWRpbmcgcHJvdGVjdGlvbiBpZiB1bmNoYW5nZWQgKHNpbWlsYXIgdG8gYWJvdmUpXG5cdFx0aWYgKHRoaXMuY3R4LnByb3RlY3RDYXNjYWRlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLmN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhcHJzLmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0cmV0dXJuIHByLmNhc2NhZGU7XG5cdFx0XHR9KS5sZW5ndGg7XG5cdFx0fVxuXHRcdC8vIFdhcm4gaWYgY2FzY2FkaW5nIHByb3RlY3Rpb24gYmVpbmcgYXBwbGllZCB3aXRoIGFuIGludmFsaWQgcHJvdGVjdGlvbiBsZXZlbCxcblx0XHQvLyB3aGljaCBmb3IgZWRpdCBwcm90ZWN0aW9uIHdpbGwgY2F1c2UgY2FzY2FkaW5nIHRvIGJlIHNpbGVudGx5IHN0cmlwcGVkXG5cdFx0aWYgKHRoaXMuY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHQvLyBPbiBtb3ZlIHByb3RlY3Rpb24sIHRoaXMgaXMgdGVjaG5pY2FsbHkgc3RyaWN0ZXIgdGhhbiB0aGUgTVcgQVBJLFxuXHRcdFx0Ly8gYnV0IHNlZW1zIHJlYXNvbmFibGUgdG8gYXZvaWQgZHVtYiB2YWx1ZXMgYW5kIG1pc2xlYWRpbmcgbG9nIGVudHJpZXMgKFQyNjU2MjYpXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCghdGhpcy5jdHgucHJvdGVjdEVkaXQgfHxcblx0XHRcdFx0XHR0aGlzLmN0eC5wcm90ZWN0RWRpdC5sZXZlbCAhPT0gJ3N5c29wJyB8fFxuXHRcdFx0XHRcdCF0aGlzLmN0eC5wcm90ZWN0TW92ZSB8fFxuXHRcdFx0XHRcdHRoaXMuY3R4LnByb3RlY3RNb3ZlLmxldmVsICE9PSAnc3lzb3AnKSAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOW3suWvueKAnCcsICfmgqjlt7LlsI3jgIwnKSArXG5cdFx0XHRcdFx0XHR0aGlzLmN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneWQr+eUqOS6hui/numUgeS/neaKpCcsICfjgI3llZ/nlKjkuobpgKPpjpbkv53orbcnKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ++8jOS9huayoeacieiuvue9ruS7heeuoeeQhuWRmOeahOS/neaKpOe6p+WIq+OAglxcblxcbicsICfvvIzkvYbmspLmnInoqK3lrprlg4XnrqHnkIblk6HnmoTkv53orbfntJrliKXjgIJcXG5cXG4nKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7orqTku6Xoh6rliqjosIPmlbTlubbnu6fnu63ov57plIHlhajkv53miqTvvIzljZXlh7vlj5bmtojku6Xot7Pov4fmraTmk43kvZwnLFxuXHRcdFx0XHRcdFx0XHQn6bue5pOK56K66KqN5Lul6Ieq5YuV6Kq/5pW05Lim57m857qM6YCj6Y6W5YWo5L+d6K2377yM6bue5pOK5Y+W5raI5Lul6Lez6YGO5q2k5pON5L2cJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+i/numUgeS/neaKpOW3suWPlua2iOOAgicsICfpgKPpjpbkv53orbflt7Llj5bmtojjgIInKSk7XG5cdFx0XHRcdHRoaXMuY3R4Lm9uUHJvdGVjdEZhaWx1cmUhKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN0eC5wcm90ZWN0RWRpdCEubGV2ZWwgPSAnc3lzb3AnO1xuXHRcdFx0dGhpcy5jdHgucHJvdGVjdE1vdmUhLmxldmVsID0gJ3N5c29wJztcblx0XHR9XG5cdFx0Ly8gQnVpbGQgcHJvdGVjdGlvbiBsZXZlbHMgYW5kIGV4cGlyeXMgKGV4cGlyaWVzPykgZm9yIHF1ZXJ5XG5cdFx0Y29uc3QgcHJvdGVjdGlvbnMgPSBbXTtcblx0XHRjb25zdCBleHBpcnlzID0gW107XG5cdFx0aWYgKHRoaXMuY3R4LnByb3RlY3RFZGl0KSB7XG5cdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYGVkaXQ9JHt0aGlzLmN0eC5wcm90ZWN0RWRpdC5sZXZlbH1gO1xuXHRcdFx0ZXhwaXJ5c1tleHBpcnlzLmxlbmd0aF0gPSB0aGlzLmN0eC5wcm90ZWN0RWRpdC5leHBpcnk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN0eC5wcm90ZWN0TW92ZSkge1xuXHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBtb3ZlPSR7dGhpcy5jdHgucHJvdGVjdE1vdmUubGV2ZWx9YDtcblx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gdGhpcy5jdHgucHJvdGVjdE1vdmUuZXhwaXJ5O1xuXHRcdH1cblx0XHRpZiAodGhpcy5jdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBjcmVhdGU9JHt0aGlzLmN0eC5wcm90ZWN0Q3JlYXRlLmxldmVsfWA7XG5cdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IHRoaXMuY3R4LnByb3RlY3RDcmVhdGUuZXhwaXJ5O1xuXHRcdH1cblx0XHRjb25zdCBxdWVyeTogV2lraVBhZ2VQcml2YXRlUXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHR0b2tlbixcblx0XHRcdHByb3RlY3Rpb25zOiBwcm90ZWN0aW9ucy5qb2luKCd8JyksXG5cdFx0XHRleHBpcnk6IGV4cGlyeXMuam9pbignfCcpLFxuXHRcdFx0cmVhc29uOiB0aGlzLmN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdHdhdGNobGlzdDogdGhpcy5jdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fTtcblx0XHQvLyBPbmx5IHNob3dzIHVwIGluIGxvZ3MsIG5vdCBwYWdlIGhpc3Rvcnlcblx0XHRpZiAodGhpcy5jdHguY2hhbmdlVGFncykge1xuXHRcdFx0cXVlcnkudGFncyA9IHRoaXMuY3R4LmNoYW5nZVRhZ3M7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gdGhpcy5jdHgud2F0Y2hsaXN0RXhwaXJ5ITtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRxdWVyeS5jYXNjYWRlID0gJ3RydWUnO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5wcm90ZWN0UHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdHdpbmRvdy53Z1VMUygn5L+d5oqk6aG16Z2i4oCm4oCmJywgJ+S/neitt+mggemdouKApuKApicpLFxuXHRcdFx0cXVlcnksXG5cdFx0XHR0aGlzLmN0eC5vblByb3RlY3RTdWNjZXNzIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbCxcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHR0aGlzLmN0eC5vblByb3RlY3RGYWlsdXJlIGFzIHVua25vd24gYXMgKChhcGlvYmo6IFdpa2lBcGkpID0+IHZvaWQpIHwgbnVsbFxuXHRcdCk7XG5cdFx0dGhpcy5jdHgucHJvdGVjdFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdHRoaXMuY3R4LnByb3RlY3RQcm9jZXNzQXBpLnBvc3QoKTtcblx0fTtcblx0cHJpdmF0ZSBzbGVlcCA9IChtaWxsaXNlY29uZHM6IG51bWJlcik6IEpRdWVyeS5EZWZlcnJlZDx1bmtub3duPiA9PiB7XG5cdFx0Y29uc3QgZGVmZXJyZWQ6IEpRdWVyeS5EZWZlcnJlZDx1bmtub3duPiA9ICQuRGVmZXJyZWQoKTtcblx0XHRzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUsIG1pbGxpc2Vjb25kcyk7XG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9O1xufSAvLyBlbmQgTW9yZWJpdHMud2lraS5wYWdlXG5Nb3JlYml0cy53aWtpLnBhZ2UgPSBXaWtpUGFnZTtcblxuLyogUHJpdmF0ZSBoZWxwZXIgdHlwZXMgZm9yIE1vcmViaXRzLndpa2kucGFnZSBBUEkgcmVzcG9uc2VzICovXG50eXBlIFdpa2lQYWdlQXBpUHJvdGVjdGlvbiA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRsZXZlbDogc3RyaW5nO1xuXHRleHBpcnk6IHN0cmluZztcblx0Y2FzY2FkZT86IGJvb2xlYW47XG5cdHNvdXJjZT86IHN0cmluZztcbn07XG50eXBlIFdpa2lQYWdlQXBpUmV2aXNpb24gPSB7XG5cdHJldmlkOiBudW1iZXI7XG5cdHVzZXI6IHN0cmluZztcblx0dXNlcmhpZGRlbj86IGJvb2xlYW47XG5cdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRjb250ZW50OiBzdHJpbmc7XG59O1xudHlwZSBXaWtpUGFnZUFwaVBhZ2UgPSB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHBhZ2VpZDogbnVtYmVyO1xuXHRpbnZhbGlkPzogYm9vbGVhbjtcblx0bWlzc2luZz86IGJvb2xlYW47XG5cdGxhc3RyZXZpZD86IG51bWJlcjtcblx0Y29udGVudG1vZGVsOiBzdHJpbmc7XG5cdHdhdGNobGlzdGV4cGlyeT86IHN0cmluZyB8IG51bGw7XG5cdHdhdGNoZWQ/OiBib29sZWFuO1xuXHRwcm90ZWN0aW9uOiBXaWtpUGFnZUFwaVByb3RlY3Rpb25bXTtcblx0cmV2aXNpb25zOiBbV2lraVBhZ2VBcGlSZXZpc2lvbiwgLi4uV2lraVBhZ2VBcGlSZXZpc2lvbltdXTtcblx0YWN0aW9ucz86IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+O1xufTtcbnR5cGUgV2lraVBhZ2VBcGlRdWVyeSA9IHtcblx0cGFnZXM6IFtXaWtpUGFnZUFwaVBhZ2UsIC4uLldpa2lQYWdlQXBpUGFnZVtdXTtcblx0dG9rZW5zOiB7Y3NyZnRva2VuOiBzdHJpbmd9O1xuXHRyZWNlbnRjaGFuZ2VzOiBbe3VucGF0cm9sbGVkPzogYm9vbGVhbn0sIC4uLnt1bnBhdHJvbGxlZD86IGJvb2xlYW59W11dO1xuXHRyZWRpcmVjdHM/OiB1bmtub3duW107XG59O1xudHlwZSBXaWtpUGFnZUFwaVJlc3BvbnNlID0ge1xuXHRxdWVyeTogV2lraVBhZ2VBcGlRdWVyeTtcblx0Y3VydGltZXN0YW1wOiBzdHJpbmc7XG59O1xudHlwZSBXaWtpUGFnZUFwaUVycm9yRGF0YSA9IHtcblx0YWJ1c2VmaWx0ZXI6IHtkZXNjcmlwdGlvbjogc3RyaW5nfTtcblx0c3BhbWJsYWNrbGlzdDoge21hdGNoZXM6IFtzdHJpbmcsIC4uLnN0cmluZ1tdXX07XG59O1xudHlwZSBXaWtpUGFnZVByaXZhdGVRdWVyeSA9IHtcblx0YWN0aW9uOiBzdHJpbmc7XG5cdGZvcm1hdDogc3RyaW5nO1xuXHRtZXRhPzogc3RyaW5nO1xuXHR0eXBlPzogc3RyaW5nO1xuXHR0aXRsZXM/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRwcm9wPzogc3RyaW5nO1xuXHRpbnByb3A/OiBzdHJpbmc7XG5cdHJlZGlyZWN0cz86IHN0cmluZztcblx0cnZsaW1pdD86IG51bWJlcjtcblx0ZnJvbT86IHN0cmluZztcblx0dG8/OiBzdHJpbmc7XG5cdHRva2VuPzogc3RyaW5nO1xuXHRyZWFzb24/OiBzdHJpbmcgfCBudWxsO1xuXHR3YXRjaGxpc3Q/OiBzdHJpbmc7XG5cdHdhdGNobGlzdGV4cGlyeT86IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cdHRhZ3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblx0bW92ZXRhbGs/OiBzdHJpbmc7XG5cdG1vdmVzdWJwYWdlcz86IHN0cmluZztcblx0bm9yZWRpcmVjdD86IHN0cmluZztcblx0cmNpZD86IHN0cmluZztcblx0cmV2aWQ/OiBudW1iZXI7XG5cdHByb3RlY3Rpb25zPzogc3RyaW5nO1xuXHRleHBpcnk/OiBzdHJpbmc7XG5cdGNhc2NhZGU/OiBzdHJpbmc7XG59O1xuXG4vKiBjdHggZmllbGRzIHVzZWQgaGVyZSBidXQgbm90IGluaXRpYWxpemVkIGluIHRoZSBjb25zdHJ1Y3RvciBsaXRlcmFsICovXG5pbnRlcmZhY2UgV2lraVBhZ2VDdHgge1xuXHRyY2lkPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFdpa2lOYW1lc3BhY2Uge1xuXHRwcmV2aWV3OiB0eXBlb2YgV2lraVByZXZpZXc7XG59XG5pbnRlcmZhY2UgTW9yZWJpdHNOYW1lc3BhY2Uge1xuXHR3aWtpdGV4dDogdHlwZW9mIHdpa2l0ZXh0O1xuXHR1c2Vyc3BhY2VMb2dnZXI6IHR5cGVvZiBVc2Vyc3BhY2VMb2dnZXI7XG59XG5cbi8qKiBUaGUgYGFjdGlvbj1wYXJzZWAgcXVlcnkgYnVpbHQgYnkge0BsaW5rIE1vcmViaXRzLndpa2kucHJldmlld30gdG8gcmVuZGVyIGEgZnJhZ21lbnQgb2Ygd2lraXRleHQuICovXG50eXBlIFByZXZpZXdBcGlRdWVyeSA9IHtcblx0YWN0aW9uOiBzdHJpbmc7XG5cdHByb3A6IHN0cmluZ1tdO1xuXHRwc3Q6IGJvb2xlYW47XG5cdHByZXZpZXc6IGJvb2xlYW47XG5cdHRleHQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0ZGlzYWJsZWxpbWl0cmVwb3J0OiBib29sZWFuO1xuXHRkaXNhYmxlZWRpdHNlY3Rpb246IGJvb2xlYW47XG5cdHVzZWxhbmc6IHN0cmluZztcblx0Zm9ybWF0OiBzdHJpbmc7XG5cdHNlY3Rpb24/OiBzdHJpbmc7XG5cdHNlY3Rpb250aXRsZT86IHN0cmluZztcbn07XG5cbi8qKiBUaGUgcG9ydGlvbiBvZiB0aGUgYGFjdGlvbj1wYXJzZWAgQVBJIHJlc3BvbnNlIGNvbnN1bWVkIGJ5IHRoZSBwcmV2aWV3IHN1Y2Nlc3MgY2FsbGJhY2suICovXG50eXBlIFByZXZpZXdBcGlSZXNwb25zZSA9IHtcblx0cGFyc2U6IHtcblx0XHR0ZXh0OiBzdHJpbmc7XG5cdFx0bW9kdWxlczogc3RyaW5nW107XG5cdFx0bW9kdWxlc3R5bGVzOiBzdHJpbmdbXTtcblx0fTtcbn07XG5cbi8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wcmV2aWV3ICoqKioqKioqKioqKioqKiogKi9cbi8qKlxuICogVXNlIHRoZSBBUEkgdG8gcGFyc2UgYSBmcmFnbWVudCBvZiB3aWtpdGV4dCBhbmQgcmVuZGVyIGl0IGFzIEhUTUwuXG4gKlxuICogVGhlIHN1Z2dlc3RlZCBpbXBsZW1lbnRhdGlvbiBwYXR0ZXJuIChpbiB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmRcbiAqIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHNpdHVhdGlvbnMpIGlzIHRvIGNvbnN0cnVjdCBhXG4gKiBgTW9yZWJpdHMud2lraS5wcmV2aWV3YCBvYmplY3QgYWZ0ZXIgcmVuZGVyaW5nIGEgYE1vcmViaXRzLnF1aWNrRm9ybWAsIGFuZFxuICogYmluZCB0aGUgb2JqZWN0IHRvIGFuIGFyYml0cmFyeSBwcm9wZXJ0eSBvZiB0aGUgZm9ybSAoZS5nLiB8cHJldmlld2VyfCkuXG4gKiBGb3IgYW4gZXhhbXBsZSwgc2VlIHR3aW5rbGV3YXJuLmpzLlxuICpcbiAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdib3ggLSBUaGUgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgcmVuZGVyZWQgSFRNTCxcbiAqIHVzdWFsbHkgYSA8ZGl2PiBlbGVtZW50LlxuICovXG5jbGFzcyBXaWtpUHJldmlldyB7XG5cdHByZXZpZXdib3g6IEhUTUxFbGVtZW50O1xuXHQvKipcblx0ICogRGlzcGxheXMgdGhlIHByZXZpZXcgYm94LCBhbmQgYmVnaW5zIGFuIGFzeW5jaHJvbm91cyBhdHRlbXB0XG5cdCAqIHRvIHJlbmRlciB0aGUgc3BlY2lmaWVkIHdpa2l0ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgLSBXaWtpdGV4dCB0byByZW5kZXI7IG1vc3QgdGhpbmdzIHNob3VsZCB3b3JrLCBpbmNsdWRpbmcgYHN1YnN0OmAgYW5kIGB+fn5+YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtwYWdlVGl0bGVdIC0gT3B0aW9uYWwgcGFyYW1ldGVyIGZvciB0aGUgcGFnZSB0aGlzIHNob3VsZCBiZSByZW5kZXJlZCBhcyBiZWluZyBvbiwgaWYgb21pdHRlZCBpdCBpcyB0YWtlbiBhcyB0aGUgY3VycmVudCBwYWdlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3NlY3Rpb25UaXRsZV0gLSBJZiBwcm92aWRlZCwgcmVuZGVyIHRoZSB0ZXh0IGFzIGEgbmV3IHNlY3Rpb24gdXNpbmcgdGhpcyBhcyB0aGUgdGl0bGUuXG5cdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX1cblx0ICovXG5cdGJlZ2luUmVuZGVyOiAod2lraXRleHQ6IHN0cmluZywgcGFnZVRpdGxlPzogc3RyaW5nLCBzZWN0aW9uVGl0bGU/OiBzdHJpbmcpID0+IHZvaWQ7XG5cdC8qKiBIaWRlcyB0aGUgcHJldmlldyBib3ggYW5kIGNsZWFycyBpdC4gKi9cblx0Y2xvc2VQcmV2aWV3OiAoKSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKHByZXZpZXdib3g6IEhUTUxFbGVtZW50KSB7XG5cdFx0dGhpcy5wcmV2aWV3Ym94ID0gcHJldmlld2JveDtcblx0XHQkKHByZXZpZXdib3gpLmFkZENsYXNzKCdtb3JlYml0cy1wcmV2aWV3Ym94JykuaGlkZSgpO1xuXHRcdHRoaXMuYmVnaW5SZW5kZXIgPSAod2lraXRleHQsIHBhZ2VUaXRsZSwgc2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLnNob3coKTtcblx0XHRcdGNvbnN0IHN0YXR1c3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwcmV2aWV3Ym94LmFwcGVuZENoaWxkKHN0YXR1c3NwYW4pO1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmluaXQoc3RhdHVzc3Bhbik7XG5cdFx0XHQvLyDoi6XpobXpnaLkuI3mmK93aWtpdGV4dO+8iOS+i+WmgkpT44CBQ1NT562J77yJ77yM6YKj5LmI5om+5LiA5Liqd2lraXRleHTpobXpnaLmnaXpooTop4jjgIJcblx0XHRcdGxldCBwYWdlTmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0Jykge1xuXHRcdFx0XHRwYWdlTmFtZSA9IGBEcmFmdDoke3BhZ2VOYW1lfWA7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeTogUHJldmlld0FwaVF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6IFsndGV4dCcsICdtb2R1bGVzJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0Ly8gUFNUID0gcHJlLXNhdmUgdHJhbnNmb3JtOyB0aGlzIG1ha2VzIHN1YnN0aXR1dGlvbiB3b3JrIHByb3Blcmx5XG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlIHx8IHBhZ2VOYW1lLFxuXHRcdFx0XHRkaXNhYmxlbGltaXRyZXBvcnQ6IHRydWUsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0dXNlbGFuZzogbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKSxcblx0XHRcdFx0Ly8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBzZWN0aW9uVGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZW5kZXJBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5Yqg6L295Lit4oCm4oCmJywgJ+i8ieWFpeS4reKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5SZW5kZXJTdWNjZXNzLFxuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn6aKE6KeIJywgJ+mgkOimvScpKVxuXHRcdFx0KTtcblx0XHRcdHJlbmRlckFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblJlbmRlclN1Y2Nlc3MgPSAoYXBpb2JqOiBJbnN0YW5jZVR5cGU8V2lraU5hbWVzcGFjZVsnYXBpJ10+KSA9PiB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpIGFzIFByZXZpZXdBcGlSZXNwb25zZTtcblx0XHRcdGNvbnN0IGh0bWwgPSByZXNwb25zZS5wYXJzZS50ZXh0O1xuXHRcdFx0aWYgKCFodG1sKSB7XG5cdFx0XHRcdGFwaW9iai5zdGF0ZWxlbS5lcnJvcih3aW5kb3cud2dVTFMoJ+WKoOi9vemihOiniOWksei0pe+8jOaIluaooeadv+S4uuepuicsICfovInlhaXpoJDopr3lpLHmlZfvvIzmiJbmqKHmnb/ngrrnqbonKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByZXZpZXdib3guaW5uZXJIVE1MID0gaHRtbDtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXN0eWxlcyk7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzKTtcblx0XHRcdC8vIHRoaXMgbWFrZXMgbGlua3Mgb3BlbiBpbiBuZXcgdGFiXG5cdFx0XHQkKHByZXZpZXdib3gpLmZpbmQoJ2EnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJykuYXR0cigncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHR9O1xuXHRcdHRoaXMuY2xvc2VQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5lbXB0eSgpLmhpZGUoKTtcblx0XHR9O1xuXHR9XG59XG5cbk1vcmViaXRzLndpa2kucHJldmlldyA9IFdpa2lQcmV2aWV3O1xuXG4vKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2l0ZXh0ICoqKioqKioqKioqKioqKiogKi9cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBldmVyeSBwYXJhbWV0ZXIgZm91bmQgaW4gdGhlIHdpa2l0ZXh0IG9mIGEgZ2l2ZW4gdGVtcGxhdGUuXG4gKlxuICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IGNvbnRhaW5pbmcgYSB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gLSBJbmRleCBub3Rpbmcgd2hlcmUgaW4gdGhlIHRleHQgdGhlIHRlbXBsYXRlIGJlZ2lucy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGB7bmFtZTogdGVtcGxhdGVOYW1lLCBwYXJhbWV0ZXJzOiB7a2V5OiB2YWx1ZX19YC5cbiAqL1xuY29uc3QgcGFyc2VUZW1wbGF0ZSA9ICh0ZXh0OiBzdHJpbmcsIHN0YXJ0PzogbnVtYmVyKToge25hbWU6IHN0cmluZzsgcGFyYW1ldGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPn0gPT4ge1xuXHRzdGFydCB8fD0gMDtcblx0Y29uc3QgbGV2ZWw6IChudW1iZXIgfCBzdHJpbmcpW10gPSBbXTsgLy8gVHJhY2sgb2YgaG93IGRlZXAgd2UgYXJlICh7eywge3t7LCBvciBbWylcblx0bGV0IGNvdW50ID0gLTE7IC8vIE51bWJlciBvZiBwYXJhbWV0ZXJzIGZvdW5kXG5cdGxldCB1bm5hbWVkID0gMDsgLy8gS2VlcCB0cmFjayBvZiB3aGF0IG51bWJlciBhbiB1bm5hbWVkIHBhcmFtZXRlciBzaG91bGQgcmVjZWl2ZVxuXHRsZXQgZXF1YWxzID0gLTE7IC8vIEFmdGVyIGZpbmRpbmcgXCI9XCIgYmVmb3JlIGEgcGFyYW1ldGVyLCB0aGUgaW5kZXg7IG90aGVyd2lzZSwgLTFcblx0bGV0IGN1cnJlbnQgPSAnJztcblx0Y29uc3QgcmVzdWx0OiB7bmFtZTogc3RyaW5nOyBwYXJhbWV0ZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSA9IHtcblx0XHRuYW1lOiAnJyxcblx0XHRwYXJhbWV0ZXJzOiB7fSxcblx0fTtcblx0bGV0IGtleTogc3RyaW5nO1xuXHRsZXQgdmFsdWU6IHN0cmluZztcblx0LyoqXG5cdCAqIEZ1bmN0aW9uIHRvIGhhbmRsZSBmaW5kaW5nIHBhcmFtZXRlciB2YWx1ZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmFsPWZhbHNlXSAtIFdoZXRoZXIgdGhpcyBpcyB0aGUgZmluYWxcblx0ICogcGFyYW1ldGVyIGFuZCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgdHJhaWxpbmcgYH19YC5cblx0ICovXG5cdGNvbnN0IGZpbmRQYXJhbSA9IChmaW5hbD86IGJvb2xlYW4pID0+IHtcblx0XHQvLyBOb3RoaW5nIGZvdW5kIHlldCwgdGhpcyBtdXN0IGJlIHRoZSB0ZW1wbGF0ZSBuYW1lXG5cdFx0aWYgKGNvdW50ID09PSAtMSkge1xuXHRcdFx0cmVzdWx0Lm5hbWUgPSBjdXJyZW50LnNsaWNlKDIpLnRyaW0oKTtcblx0XHRcdCsrY291bnQ7XG5cdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xKSB7XG5cdFx0XHQvLyBJbiBhIHBhcmFtZXRlclxuXHRcdFx0Ly8gTm8gZXF1YWxzLCBzbyBpdCBtdXN0IGJlIHVubmFtZWQ7IG5vIHRyaW0gc2luY2Ugd2hpdGVzcGFjZSBhbGxvd2VkXG5cdFx0XHRjb25zdCBwYXJhbSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikgOiBjdXJyZW50O1xuXHRcdFx0aWYgKHBhcmFtKSB7XG5cdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzWysrdW5uYW1lZF0gPSBwYXJhbTtcblx0XHRcdFx0Kytjb3VudDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gV2UgZm91bmQgYW4gZXF1YWxzLCBzbyBzYXZlIHRoZSBwYXJhbWV0ZXIgYXMga2V5OiB2YWx1ZVxuXHRcdFx0a2V5ID0gY3VycmVudC5zbGljZSgwLCBNYXRoLm1heCgwLCBlcXVhbHMpKS50cmltKCk7XG5cdFx0XHR2YWx1ZSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikudHJpbSgpIDogY3VycmVudC5zbGljZShNYXRoLm1heCgwLCBlcXVhbHMgKyAxKSkudHJpbSgpO1xuXHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlO1xuXHRcdFx0ZXF1YWxzID0gLTE7XG5cdFx0fVxuXHR9O1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSB7XG5cdFx0Y29uc3QgdGVzdDMgPSB0ZXh0LnNsaWNlKGksIGkgKyAzKTtcblx0XHRpZiAodGVzdDMgPT09ICd7e3snIHx8ICh0ZXN0MyA9PT0gJ319fScgJiYgbGV2ZWwuYXQoLTEpID09PSAzKSkge1xuXHRcdFx0Y3VycmVudCArPSB0ZXN0Mztcblx0XHRcdGkgKz0gMjtcblx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycpIHtcblx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9IDM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXZlbC5wb3AoKTtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCB0ZXN0MiA9IHRleHQuc2xpY2UoaSwgaSArIDIpO1xuXHRcdC8vIEVudGVyaW5nIGEgdGVtcGxhdGUgKG9yIGxpbmspXG5cdFx0aWYgKHRlc3QyID09PSAne3snIHx8IHRlc3QyID09PSAnW1snKSB7XG5cdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0KytpO1xuXHRcdFx0aWYgKHRlc3QyID09PSAne3snKSB7XG5cdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9ICd3bCc7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gRWl0aGVyIGxlYXZpbmcgYSBsaW5rIG9yIHRlbXBsYXRlL3BhcnNlciBmdW5jdGlvblxuXHRcdGlmICgodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwuYXQoLTEpID09PSAyKSB8fCAodGVzdDIgPT09ICddXScgJiYgbGV2ZWwuYXQoLTEpID09PSAnd2wnKSkge1xuXHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdCsraTtcblx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0Ly8gRmluZCB0aGUgZmluYWwgcGFyYW1ldGVyIGlmIHRoaXMgcmVhbGx5IGlzIHRoZSBlbmRcblx0XHRcdGlmICh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0ZmluZFBhcmFtKHRydWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAodGV4dC5jaGFyQXQoaSkgPT09ICd8JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdC8vIEFub3RoZXIgcGlwZSBmb3VuZCwgdG9wbGV2ZWwsIHNvIHBhcmFtZXRlciBjb21pbmcgdXAhXG5cdFx0XHRmaW5kUGFyYW0oKTtcblx0XHRcdGN1cnJlbnQgPSAnJztcblx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEgJiYgdGV4dC5jaGFyQXQoaSkgPT09ICc9JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdC8vIEVxdWFscyBmb3VuZCwgdG9wbGV2ZWxcblx0XHRcdGVxdWFscyA9IGN1cnJlbnQubGVuZ3RoO1xuXHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSnVzdCBhZHZhbmNlIHRoZSBwb3NpdGlvblxuXHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQWRqdXN0IGFuZCBtYW5pcHVsYXRlIHRoZSB3aWtpdGV4dCBvZiBhIHBhZ2UuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKi9cbmNsYXNzIFdpa2lUZXh0UGFnZSB7XG5cdHRleHQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgbGlua3MgdG8gYGxpbmtfdGFyZ2V0YCBmcm9tIHRoZSBwYWdlIHRleHQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsaW5rVGFyZ2V0XG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHQgKi9cblx0cmVtb3ZlTGluayhsaW5rVGFyZ2V0OiBzdHJpbmcpOiB0aGlzIHtcblx0XHRjb25zdCBtd1RpdGxlID0gbXcuVGl0bGUubmV3RnJvbVRleHQobGlua1RhcmdldCkhO1xuXHRcdGNvbnN0IG5hbWVzcGFjZUlEID0gbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdGNvbnN0IHRpdGxlID0gbXdUaXRsZS5nZXRNYWluVGV4dCgpO1xuXHRcdGxldCBsaW5rUmVnZXhTdHJpbmcgPSAnJztcblx0XHRpZiAobmFtZXNwYWNlSUQgIT09IDApIHtcblx0XHRcdGxpbmtSZWdleFN0cmluZyA9IGAke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KG5hbWVzcGFjZUlEKX06YDtcblx0XHR9XG5cdFx0bGlua1JlZ2V4U3RyaW5nICs9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGl0bGUpO1xuXHRcdC8vIEZvciBtb3N0IG5hbWVzcGFjZXMsIHVubGluayBib3RoIFtbVXNlcjpUZXN0XV0gYW5kIFtbOlVzZXI6VGVzdF1dXG5cdFx0Ly8gRm9yIGZpbGVzIGFuZCBjYXRlZ29yaWVzLCBvbmx5IHVubGluayBbWzpDYXRlZ29yeTpUZXN0XV0uIERvIG5vdCB1bmxpbmsgW1tDYXRlZ29yeTpUZXN0XV1cblx0XHRjb25zdCBpc0ZpbGVPckNhdGVnb3J5ID0gWzYsIDE0XS5pbmNsdWRlcyhuYW1lc3BhY2VJRCk7XG5cdFx0Y29uc3QgY29sb24gPSBpc0ZpbGVPckNhdGVnb3J5ID8gJzonIDogJzo/Jztcblx0XHRjb25zdCBzaW1wbGVMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0oJHtsaW5rUmVnZXhTdHJpbmd9KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdGNvbnN0IHBpcGVkTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259JHtsaW5rUmVnZXhTdHJpbmd9XFxcXHwoLis/KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHNpbXBsZUxpbmtSZWdleCwgJyQxJykucmVwbGFjZShwaXBlZExpbmtSZWdleCwgJyQxJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQ29tbWVudHMgb3V0IGltYWdlcyBmcm9tIHBhZ2UgdGV4dDsgaWYgdXNlZCBpbiBhIGdhbGxlcnksIGRlbGV0ZXMgdGhlIHdob2xlIGxpbmUuXG5cdCAqIElmIHVzZWQgYXMgYSB0ZW1wbGF0ZSBhcmd1bWVudCAobm90IG5lY2Vzc2FyaWx5IHdpdGggYEZpbGU6YCBwcmVmaXgpLCB0aGUgdGVtcGxhdGUgcGFyYW1ldGVyIGlzIGNvbW1lbnRlZCBvdXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBgRmlsZTpgIHByZWZpeC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIC0gUmVhc29uIHRvIGJlIGluY2x1ZGVkIGluIGNvbW1lbnQsIGFsb25nc2lkZSB0aGUgY29tbWVudGVkLW91dCBpbWFnZS5cblx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdCAqL1xuXHRjb21tZW50T3V0SW1hZ2UoaW1hZ2U6IHN0cmluZywgcmVhc29uPzogc3RyaW5nKTogdGhpcyB7XG5cdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoLy0tIT4vZywgJy0tPicpO1xuXHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHRoaXMudGV4dCk7XG5cdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdHJlYXNvbiA9IHJlYXNvbiA/IGAke3JlYXNvbn06IGAgOiAnJztcblx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0Ly8gQ2hlY2sgZm9yIG5vcm1hbCBpbWFnZSBsaW5rcywgaS5lLiBbW0ZpbGU6Rm9vYmFyLnBuZ3wuLi5dXVxuXHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5rXG5cdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYCk7XG5cdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh1bmJpbmRlci5jb250ZW50LCAnW1snLCAnXV0nKTtcblx0XHRmb3IgKGNvbnN0IGFsbExpbmsgb2YgYWxsTGlua3MpIHtcblx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsTGluaykpIHtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBgPCEtLSAke3JlYXNvbn0ke2FsbExpbmt9IC0tPmA7XG5cdFx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoYWxsTGluaywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDaGVjayBmb3IgZ2FsbGVyeSBpbWFnZXMsIGkuZS4gaW5zdGFuY2VzIHRoYXQgbXVzdCBzdGFydCBvbiBhIG5ldyBsaW5lLFxuXHRcdC8vIGV2ZW50dWFsbHkgcHJlY2VkZWQgd2l0aCBzb21lIHNwYWNlLCBhbmQgbXVzdCBpbmNsdWRlIEZpbGU6IHByZWZpeFxuXHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5lLlxuXHRcdGNvbnN0IGdhbGxlcnlJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoXlxcXFxzKiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccyooPzpcXFxcfC4qPyR8JCkpYCxcblx0XHRcdCdtZydcblx0XHQpO1xuXHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZ2FsbGVyeUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHQvLyBDaGVjayBmcmVlIGltYWdlIHVzYWdlcywgZm9yIGV4YW1wbGUgYXMgdGVtcGxhdGUgYXJndW1lbnRzLCBtaWdodCBoYXZlIHRoZSBGaWxlOiBwcmVmaXggZXhjbHVkZWQsIGJ1dCBtdXN0IGJlIHByZWNlZGVkIGJ5IGFuIHxcblx0XHQvLyBXaWxsIG9ubHkgZWF0IHRoZSBpbWFnZSBuYW1lIGFuZCB0aGUgcHJlY2VkaW5nIGJhciBhbmQgYW4gZXZlbnR1YWwgbmFtZWQgcGFyYW1ldGVyXG5cdFx0Y29uc3QgZnJlZUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0YChcXFxcfFxcXFxzKig/OltcXFxcd1xcXFxzXStcXFxcPSk/XFxcXHMqKD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqKT8ke2ltYWdlUmVnZXhTdHJpbmd9KWAsXG5cdFx0XHQnbWcnXG5cdFx0KTtcblx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGZyZWVJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHQvLyBSZWJpbmQgdGhlIGNvbnRlbnQgbm93LCB3ZSBhcmUgZG9uZSFcblx0XHR0aGlzLnRleHQgPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB1c2VzIG9mIFtbRmlsZTpgaW1hZ2VgXV0gdG8gW1tGaWxlOmBpbWFnZWB8YGRhdGFgXV0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBGaWxlOiBwcmVmaXguXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIC0gVGhlIGRpc3BsYXkgb3B0aW9ucy5cblx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdCAqL1xuXHRhZGRUb0ltYWdlQ29tbWVudChpbWFnZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB0aGlzIHtcblx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYCk7XG5cdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICdbWycsICddXScpO1xuXHRcdGZvciAobGV0IHJlcGxhY2VtZW50IG9mIGFsbExpbmtzKSB7XG5cdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KHJlcGxhY2VtZW50KSkge1xuXHRcdFx0XHQvLyBqdXN0IHB1dCBpdCBhdCB0aGUgZW5kP1xuXHRcdFx0XHRyZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcXVxcXSQvLCBgfCR7ZGF0YX1dXWApO1xuXHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShyZXBsYWNlbWVudCwgcmVwbGFjZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBnYWxsZXJ5UmVnZXggPSBuZXcgUmVnRXhwKGBeKFxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ30uKj8pXFxcXHw/KC4qPykkYCwgJ21nJyk7XG5cdFx0Y29uc3QgbmV3dGV4dCA9IGAkMXwkMiAke2RhdGF9YDtcblx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShnYWxsZXJ5UmVnZXgsIG5ld3RleHQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgdHJhbnNjbHVzaW9ucyBvZiBhIHRlbXBsYXRlIGZyb20gcGFnZSB0ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBQYWdlIG5hbWUgd2hvc2UgdHJhbnNjbHVzaW9ucyBhcmUgdG8gYmUgcmVtb3ZlZCxcblx0ICogaW5jbHVkZSBuYW1lc3BhY2UgcHJlZml4IG9ubHkgaWYgbm90IGluIHRlbXBsYXRlIG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdCAqL1xuXHRyZW1vdmVUZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nKTogdGhpcyB7XG5cdFx0Y29uc3QgdGVtcGxhdGVSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGVtcGxhdGUpO1xuXHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0YFxcXFx7XFxcXHsoPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDEwKX06KT9cXFxccyoke3RlbXBsYXRlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXH1cXFxcfSldYFxuXHRcdCk7XG5cdFx0Y29uc3QgYWxsVGVtcGxhdGVzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAne3snLCAnfX0nLCBbJ3t7eycsICd9fX0nXSk7XG5cdFx0Zm9yIChjb25zdCBhbGxUZW1wbGF0ZSBvZiBhbGxUZW1wbGF0ZXMpIHtcblx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsVGVtcGxhdGUpKSB7XG5cdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGFsbFRlbXBsYXRlLCAnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNtYXJ0bHkgaW5zZXJ0IGEgdGFnIGF0b3AgcGFnZSB0ZXh0IGJ1dCBhZnRlciBzcGVjaWZpZWQgdGVtcGxhdGVzLFxuXHQgKiBzdWNoIGFzIGhhdG5vdGVzLCBzaG9ydCBkZXNjcmlwdGlvbiwgb3IgZGVsZXRpb24gYW5kIHByb3RlY3Rpb24gdGVtcGxhdGVzLlxuXHQgKiBOb3RhYmx5LCBkb2VzICpub3QqIGluc2VydCBhIG5ld2xpbmUgYWZ0ZXIgdGhlIHRhZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSB0YWcgdG8gYmUgaW5zZXJ0ZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSByZWdleCAtIFRlbXBsYXRlcyBhZnRlciB3aGljaCB0byBpbnNlcnQgdGFnLFxuXHQgKiBnaXZlbiBhcyBlaXRoZXIgYXMgYSAocmVnZXgtdmFsaWQpIHN0cmluZyBvciBhbiBhcnJheSB0byBiZSBqb2luZWQgYnkgcGlwZXMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZmxhZ3M9aV0gLSBSZWdleCBmbGFncyB0byBhcHBseS4gIGAnJ2AgdG8gcHJvdmlkZSBubyBmbGFncztcblx0ICogb3RoZXIgZmFsc2V5IHZhbHVlcyB3aWxsIGRlZmF1bHQgdG8gYGlgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3ByZVJlZ2V4XSAtIE9wdGlvbmFsIHJlZ2V4IHN0cmluZyBvciBhcnJheSB0byBtYXRjaFxuXHQgKiBiZWZvcmUgYW55IHRlbXBsYXRlIG1hdGNoZXMgKGkuZS4gYmVmb3JlIGB7e2ApLCBzdWNoIGFzIGh0bWwgY29tbWVudHMuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHQgKi9cblx0aW5zZXJ0QWZ0ZXJUZW1wbGF0ZXModGFnPzogc3RyaW5nLCByZWdleD86IHN0cmluZyB8IHN0cmluZ1tdLCBmbGFncz86IHN0cmluZywgcHJlUmVnZXg/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IHRoaXMge1xuXHRcdGlmICh0YWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gdGFnIHByb3ZpZGVkJyk7XG5cdFx0fVxuXHRcdC8vIC5sZW5ndGggaXMgb25seSBhIHByb3BlcnR5IG9mIHN0cmluZ3MgYW5kIGFycmF5cyBzbyB3ZVxuXHRcdC8vIHNob3VsZG4ndCBuZWVkIHRvIGNoZWNrIHR5cGVcblx0XHRpZiAocmVnZXggPT09IHVuZGVmaW5lZCB8fCAhcmVnZXgubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJlZ2V4IHByb3ZpZGVkJyk7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlZ2V4KSkge1xuXHRcdFx0cmVnZXggPSByZWdleC5qb2luKCd8Jyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZmxhZ3MgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRmbGFncyA9ICdpJztcblx0XHR9XG5cdFx0aWYgKCFwcmVSZWdleCB8fCAhcHJlUmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRwcmVSZWdleCA9ICcnO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcmVSZWdleCkpIHtcblx0XHRcdHByZVJlZ2V4ID0gcHJlUmVnZXguam9pbignfCcpO1xuXHRcdH1cblx0XHQvLyBSZWdleCBpcyBleHRyYSBjb21wbGljYXRlZCB0byBhbGxvdyBmb3IgdGVtcGxhdGVzIHdpdGhcblx0XHQvLyBwYXJhbWV0ZXJzIGFuZCB0byBoYW5kbGUgd2hpdGVzcGFjZSBwcm9wZXJseVxuXHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKFxuXHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0Ly8gbGVhZGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdC8vIGNhcHR1cmUgdGVtcGxhdGUocylcblx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHQvLyBiZWdpbiB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0Ly8gZW5kIG1haW4gdGVtcGxhdGUgbmFtZSwgb3B0aW9uYWxseSB3aXRoIGEgbnVtYmVyXG5cdFx0XHRcdC8vIFByb2JhYmx5IHJlbW92ZSB0aGUgKD86KSB0aG91Z2hcblx0XHRcdFx0Ly8gdGVtcGxhdGUgcGFyYW1ldGVyc1xuXHRcdFx0XHQvLyBlbmQgdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdC8vIGVuZCBjYXB0dXJlXG5cdFx0XHRcdC8vIHRyYWlsaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0YF5cXFxccyooPzooKD86XFxcXHMqJHtcblx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0cHJlUmVnZXhcblx0XHRcdFx0fXxcXFxce1xcXFx7XFxcXHMqKD86JHtcblx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdHJlZ2V4XG5cdFx0XHRcdH0pXFxcXGQqXFxcXHMqKFxcXFx8KD86XFxcXHtcXFxce1tee31dKlxcXFx9XFxcXH18W157fV0pKik/XFxcXH1cXFxcfSkrKD86XFxcXHMqXFxcXG4pPylcXFxccyopP2AsXG5cdFx0XHRcdGZsYWdzXG5cdFx0XHQpLFxuXHRcdFx0YCQxJHt0YWd9YFxuXHRcdCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBtYW5pcHVsYXRlZCB3aWtpdGV4dC5cblx0ICpcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldFRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy50ZXh0O1xuXHR9XG59XG5cbi8qKlxuICogV2lraXRleHQgbWFuaXB1bGF0aW9uLlxuICpcbiAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraXRleHRcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICovXG5jb25zdCB3aWtpdGV4dCA9IHtcblx0cGFyc2VUZW1wbGF0ZSxcblx0cGFnZTogV2lraVRleHRQYWdlLFxufTtcblxuTW9yZWJpdHMud2lraXRleHQgPSB3aWtpdGV4dDtcblxuLyogKioqKioqKioqKiogTW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyICoqKioqKioqKioqKiAqL1xuLyoqXG4gKiBIYW5kbGVzIGxvZ2dpbmcgYWN0aW9ucyB0byBhIHVzZXJzcGFjZSBsb2cuXG4gKiBVc2VkIGluIENTRCwgUFJPRCwgYW5kIFhGRC5cbiAqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHNcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IGxvZ1BhZ2VOYW1lIC0gVGl0bGUgb2YgdGhlIHN1YnBhZ2Ugb2YgdGhlIGN1cnJlbnQgdXNlcidzIGxvZy5cbiAqL1xuY2xhc3MgVXNlcnNwYWNlTG9nZ2VyIHtcblx0LyoqXG5cdCAqIFRoZSB0ZXh0IHRvIHByZWZpeCB0aGUgbG9nIHdpdGggdXBvbiBjcmVhdGlvbiwgZGVmYXVsdHMgdG8gZW1wdHkuXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRpbml0aWFsVGV4dDogc3RyaW5nO1xuXHQvKipcblx0ICogVGhlIGhlYWRlciBsZXZlbCB0byB1c2UgZm9yIG1vbnRocywgZGVmYXVsdHMgdG8gMyAoYD09PWApLlxuXHQgKlxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0aGVhZGVyTGV2ZWw6IG51bWJlcjtcblx0Y2hhbmdlVGFnczogc3RyaW5nO1xuXHQvKipcblx0ICogTG9nIHRoZSBlbnRyeS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1RleHQgLSBEb2Vzbid0IGluY2x1ZGUgbGVhZGluZyBgI2Agb3IgYCpgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVRleHQgLSBFZGl0IHN1bW1hcnkuXG5cdCAqIEByZXR1cm5zIHtKUXVlcnkuUHJvbWlzZX1cblx0ICovXG5cdGxvZzogKGxvZ1RleHQ6IHN0cmluZywgc3VtbWFyeVRleHQ6IHN0cmluZykgPT4gSlF1ZXJ5LkRlZmVycmVkPHVua25vd24sIHVua25vd24sIHVua25vd24+O1xuXG5cdGNvbnN0cnVjdG9yKGxvZ1BhZ2VOYW1lOiBzdHJpbmcpIHtcblx0XHRpZiAoIWxvZ1BhZ2VOYW1lKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ25vIGxvZyBwYWdlIG5hbWUgc3BlY2lmaWVkJyk7XG5cdFx0fVxuXHRcdHRoaXMuaW5pdGlhbFRleHQgPSAnJztcblx0XHR0aGlzLmhlYWRlckxldmVsID0gMztcblx0XHR0aGlzLmNoYW5nZVRhZ3MgPSAnJztcblx0XHR0aGlzLmxvZyA9IChsb2dUZXh0LCBzdW1tYXJ5VGV4dCkgPT4ge1xuXHRcdFx0Y29uc3QgZGVmID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0aWYgKCFsb2dUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBkZWYucmVqZWN0KCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWdlID0gbmV3IE1vcmViaXRzLndpa2kucGFnZShcblx0XHRcdFx0YFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9LyR7bG9nUGFnZU5hbWV9YCxcblx0XHRcdFx0d2luZG93LndnVUxTKCflsIbpobnnm67liqDlhaXliLDnlKjmiLfnqbrpl7Tml6Xlv5cnLCAn5bCH6aCF55uu5Yqg5YWl5Yiw5L2/55So6ICF56m66ZaT5pel6KqMJylcblx0XHRcdCk7IC8vIG1ha2UgdGhpcyAnLi4uIHRvICcgKyBsb2dQYWdlTmFtZSA/XG5cdFx0XHRwYWdlLmxvYWQoKHBhZ2VvYmopID0+IHtcblx0XHRcdFx0Ly8gYWRkIGJsdXJiIGlmIGxvZyBwYWdlIGRvZXNuJ3QgZXhpc3Qgb3IgaXMgYmxhbmtcblx0XHRcdFx0bGV0IHRleHQgPSBwYWdlb2JqLmdldFBhZ2VUZXh0KCkgfHwgdGhpcy5pbml0aWFsVGV4dDtcblx0XHRcdFx0Ly8gY3JlYXRlIG1vbnRobHkgaGVhZGVyIGlmIGl0IGRvZXNuJ3QgZXhpc3QgYWxyZWFkeVxuXHRcdFx0XHRjb25zdCBkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUocGFnZW9iai5nZXRMb2FkVGltZSgpID8/ICcnKTtcblx0XHRcdFx0aWYgKCFkYXRlLm1vbnRoSGVhZGVyUmVnZXgoKS5leGVjKHRleHQpKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuXFxuJHtkYXRlLm1vbnRoSGVhZGVyKHRoaXMuaGVhZGVyTGV2ZWwpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFnZW9iai5zZXRQYWdlVGV4dChgJHt0ZXh0fVxcbiR7bG9nVGV4dH1gKTtcblx0XHRcdFx0cGFnZW9iai5zZXRFZGl0U3VtbWFyeShzdW1tYXJ5VGV4dCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q2hhbmdlVGFncyh0aGlzLmNoYW5nZVRhZ3MpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENyZWF0ZU9wdGlvbigncmVjcmVhdGUnKTtcblx0XHRcdFx0cGFnZW9iai5zYXZlKGRlZi5yZXNvbHZlLCBkZWYucmVqZWN0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGRlZjtcblx0XHR9O1xuXHR9XG59XG5cbk1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciA9IFVzZXJzcGFjZUxvZ2dlcjtcblxuLyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5zdGF0dXMgKioqKioqKioqKioqKioqKiAqL1xuLyoqXG4gKiBDcmVhdGUgYW5kIHNob3cgc3RhdHVzIG1lc3NhZ2VzIG9mIHZhcnlpbmcgdXJnZW5jeS5cbiAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdHxNb3JlYml0cy5zdGF0dXMuaW5pdCgpfSBtdXN0IGJlIGNhbGxlZCBiZWZvcmVcbiAqIGFueSBzdGF0dXMgb2JqZWN0IGlzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aG9zZSBzdGF0dXNlcyB3b24ndCBiZSB2aXNpYmxlLlxuICpcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgYmVmb3JlIHRoZSB0aGUgY29sb24gYDpgLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXQgLSBUZXh0IGFmdGVyIHRoZSBjb2xvbiBgOmAuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9c3RhdHVzXSAtIERldGVybWluZSB0aGUgZm9udCBjb2xvciBvZiB0aGUgc3RhdHVzXG4gKiBsaW5lLCBhbGxvd2FibGUgdmFsdWVzIGFyZTogYHN0YXR1c2AgKGJsdWUpLCBgaW5mb2AgKGdyZWVuKSwgYHdhcm5gIChyZWQpLFxuICogb3IgYGVycm9yYCAoYm9sZCByZWQpLlxuICovXG5cbmludGVyZmFjZSBNb3JlYml0c05hbWVzcGFjZSB7XG5cdHN0YXR1czogdHlwZW9mIFN0YXR1cztcblx0aHRtbE5vZGU6ICh0eXBlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgY29sb3I/OiBzdHJpbmcpID0+IEhUTUxFbGVtZW50O1xuXHRjaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0OiAoXG5cdFx0alF1ZXJ5U2VsZWN0b3I6IHN0cmluZyB8IEhUTUxFbGVtZW50W10sXG5cdFx0alF1ZXJ5Q29udGV4dD86IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgSlF1ZXJ5PEhUTUxFbGVtZW50PlxuXHQpID0+IHZvaWQ7XG5cdGJhdGNoT3BlcmF0aW9uOiB0eXBlb2YgQmF0Y2hPcGVyYXRpb247XG59XG5cbnR5cGUgV2lraVBhZ2VJbnN0YW5jZSA9IEluc3RhbmNlVHlwZTxXaWtpTmFtZXNwYWNlWydwYWdlJ10+O1xudHlwZSBCYXRjaE9wZXJhdGlvbldvcmtlciA9IChwYWdlOiBzdHJpbmcsIGJhdGNoT3BlcmF0aW9uOiBCYXRjaE9wZXJhdGlvbikgPT4gdm9pZDtcblxuLyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5zdGF0dXMgKioqKioqKioqKioqKioqKiAqL1xuLyoqXG4gKiBDcmVhdGUgYW5kIHNob3cgc3RhdHVzIG1lc3NhZ2VzIG9mIHZhcnlpbmcgdXJnZW5jeS5cbiAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdHxNb3JlYml0cy5zdGF0dXMuaW5pdCgpfSBtdXN0IGJlIGNhbGxlZCBiZWZvcmVcbiAqIGFueSBzdGF0dXMgb2JqZWN0IGlzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aG9zZSBzdGF0dXNlcyB3b24ndCBiZSB2aXNpYmxlLlxuICpcbiAqIEBtZW1iZXJvZiBNb3JlYml0c1xuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgYmVmb3JlIHRoZSB0aGUgY29sb24gYDpgLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXQgLSBUZXh0IGFmdGVyIHRoZSBjb2xvbiBgOmAuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9c3RhdHVzXSAtIERldGVybWluZSB0aGUgZm9udCBjb2xvciBvZiB0aGUgc3RhdHVzXG4gKiBsaW5lLCBhbGxvd2FibGUgdmFsdWVzIGFyZTogYHN0YXR1c2AgKGJsdWUpLCBgaW5mb2AgKGdyZWVuKSwgYHdhcm5gIChyZWQpLFxuICogb3IgYGVycm9yYCAoYm9sZCByZWQpLlxuICovXG5jbGFzcyBTdGF0dXMge1xuXHRzdGF0OiBOb2RlIHwgbnVsbCA9IG51bGw7XG5cdHN0YXRSYXc6IE1vcmViaXRzSHRtbElucHV0IHwgbnVsbCA9IG51bGw7XG5cdHRleHQhOiBOb2RlO1xuXHR0ZXh0UmF3ITogc3RyaW5nO1xuXHR0eXBlITogc3RyaW5nO1xuXHR0YXJnZXQhOiBIVE1MU3BhbkVsZW1lbnQ7XG5cdG5vZGUhOiBIVE1MRGl2RWxlbWVudDtcblx0bGlua2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBzdGF0PzogTW9yZWJpdHNIdG1sSW5wdXQsIHR5cGU/OiBzdHJpbmcpIHtcblx0XHR0aGlzLnRleHRSYXcgPSB0ZXh0O1xuXHRcdHRoaXMudGV4dCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwodGV4dCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZSB8fCAnc3RhdHVzJztcblx0XHR0aGlzLmdlbmVyYXRlKCk7XG5cdFx0aWYgKHN0YXQpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXQsIHR5cGUpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZ5IGFuIGFyZWEgZm9yIHN0YXR1cyBtZXNzYWdlIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3QgLSBVc3VhbGx5IGEgZGl2IGVsZW1lbnQuXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYHJvb3RgIGlzIG5vdCBhbiBgSFRNTEVsZW1lbnRgLlxuXHQgKi9cblx0c3RhdGljIGluaXQocm9vdDogSFRNTEVsZW1lbnQgfCBudWxsKTogdm9pZCB7XG5cdFx0aWYgKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdvYmplY3Qgbm90IGFuIGluc3RhbmNlIG9mIEVsZW1lbnQnKTtcblx0XHR9XG5cdFx0d2hpbGUgKHJvb3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRyb290LnJlbW92ZUNoaWxkKHJvb3QuZmlyc3RDaGlsZCEpO1xuXHRcdH1cblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IHJvb3Q7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBudWxsO1xuXHR9XG5cblx0c3RhdGljIHJvb3Q6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gZXJyb3IuXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gV2hlbiBgaGFuZGxlcmAgaXMgbm90IGEgZnVuY3Rpb24uXG5cdCAqL1xuXHRzdGF0aWMgb25FcnJvcihoYW5kbGVyOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0aWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IGhhbmRsZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ01vcmViaXRzLnN0YXR1cy5vbkVycm9yOiBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGVycm9yRXZlbnQ6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXG5cdC8qKiBBZGQgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgdG8gdGhlIERPTS4gKi9cblx0bGluaygpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMubGlua2VkICYmIE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0dGhpcy5saW5rZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBSZW1vdmUgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgZnJvbSB0aGUgRE9NLiAqL1xuXHR1bmxpbmsoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMubGlua2VkKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdCEucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdHRoaXMubGlua2VkID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgc3RhdHVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gUGFydCBvZiBzdGF0dXMgbWVzc2FnZSBhZnRlciBjb2xvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSAnc3RhdHVzJyAoYmx1ZSksICdpbmZvJyAoZ3JlZW4pLCAnd2Fybidcblx0ICogKHJlZCksIG9yICdlcnJvcicgKGJvbGQgcmVkKS5cblx0ICovXG5cdHVwZGF0ZShzdGF0dXM6IE1vcmViaXRzSHRtbElucHV0LCB0eXBlPzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0UmF3ID0gc3RhdHVzO1xuXHRcdHRoaXMuc3RhdCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwoc3RhdHVzKTtcblx0XHRpZiAodHlwZSkge1xuXHRcdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHRcdGlmICh0eXBlID09PSAnZXJyb3InKSB7XG5cdFx0XHRcdC8vIGhhY2sgdG8gZm9yY2UgdGhlIHBhZ2Ugbm90IHRvIHJlbG9hZCB3aGVuIGFuIGVycm9yIGlzIG91dHB1dCAtIHNlZSBhbHNvIE1vcmViaXRzLnN0YXR1cygpIGFib3ZlXG5cdFx0XHRcdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDEwMDA7XG5cdFx0XHRcdC8vIGNhbGwgZXJyb3IgY2FsbGJhY2tcblx0XHRcdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBhbHNvIGxvZyBlcnJvciBtZXNzYWdlcyBpbiB0aGUgYnJvd3NlciBjb25zb2xlXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtNb3JlYml0c10gJHt0aGlzLnRleHRSYXd9OiAke3RoaXMuc3RhdFJhd31gKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdC8qKiBQcm9kdWNlIHRoZSBodG1sIGZvciBmaXJzdCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0Z2VuZXJhdGUoKTogdm9pZCB7XG5cdFx0dGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcblx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnOiAnKSk7XG5cdFx0dGhpcy50YXJnZXQgPSB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpOyAvLyBkdW1teSBub2RlXG5cdH1cblxuXHQvKiogQ29tcGxldGUgdGhlIGh0bWwsIGZvciB0aGUgc2Vjb25kIHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRyZW5kZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5ub2RlLmNsYXNzTmFtZSA9IGBtb3JlYml0c19zdGF0dXNfJHt0aGlzLnR5cGV9YDtcblx0XHR3aGlsZSAodGhpcy50YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHR0aGlzLnRhcmdldC5yZW1vdmVDaGlsZCh0aGlzLnRhcmdldC5maXJzdENoaWxkISk7XG5cdFx0fVxuXHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuc3RhdCEpO1xuXHRcdHRoaXMubGluaygpO1xuXHR9XG5cblx0c3RhdHVzKHN0YXR1czogTW9yZWJpdHNIdG1sSW5wdXQpOiB2b2lkIHtcblx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdzdGF0dXMnKTtcblx0fVxuXG5cdGluZm8oc3RhdHVzOiBNb3JlYml0c0h0bWxJbnB1dCk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2luZm8nKTtcblx0fVxuXG5cdHdhcm4oc3RhdHVzOiBNb3JlYml0c0h0bWxJbnB1dCk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3dhcm4nKTtcblx0fVxuXG5cdGVycm9yKHN0YXR1czogTW9yZWJpdHNIdG1sSW5wdXQpOiB2b2lkIHtcblx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdlcnJvcicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHN0YXR1c2AtdHlwZSAoYmx1ZSlcblx0ICovXG5cdHN0YXRpYyBzdGF0dXModGV4dDogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcpOiBTdGF0dXMge1xuXHRcdHJldHVybiBuZXcgU3RhdHVzKHRleHQsIHN0YXR1cyk7XG5cdH1cblxuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgaW5mb2AtdHlwZSAoZ3JlZW4pXG5cdCAqL1xuXHRzdGF0aWMgaW5mbyh0ZXh0OiBzdHJpbmcsIHN0YXR1cz86IHN0cmluZyk6IFN0YXR1cyB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0dXModGV4dCwgc3RhdHVzLCAnaW5mbycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHdhcm5gLXR5cGUgKHJlZClcblx0ICovXG5cdHN0YXRpYyB3YXJuKHRleHQ6IHN0cmluZywgc3RhdHVzPzogc3RyaW5nKTogU3RhdHVzIHtcblx0XHRyZXR1cm4gbmV3IFN0YXR1cyh0ZXh0LCBzdGF0dXMsICd3YXJuJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgZXJyb3JgLXR5cGUgKGJvbGQgcmVkKVxuXHQgKi9cblx0c3RhdGljIGVycm9yKHRleHQ6IHN0cmluZywgc3RhdHVzPzogc3RyaW5nKTogU3RhdHVzIHtcblx0XHRyZXR1cm4gbmV3IFN0YXR1cyh0ZXh0LCBzdGF0dXMsICdlcnJvcicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZvciB0aGUgYWN0aW9uIGNvbXBsZXRlIG1lc3NhZ2UgYXQgdGhlIGVuZCwgY3JlYXRlIGEgc3RhdHVzIGxpbmUgd2l0aG91dFxuXHQgKiBhIGNvbG9uIHNlcGFyYXRvci5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKi9cblx0c3RhdGljIGFjdGlvbkNvbXBsZXRlZCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblx0XHRub2RlLmNsYXNzTmFtZSA9ICdtb3JlYml0c19zdGF0dXNfaW5mbyBtb3JlYml0c19hY3Rpb25fY29tcGxldGUnO1xuXHRcdGlmIChNb3JlYml0cy5zdGF0dXMucm9vdCkge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXkgdGhlIHVzZXIncyByYXRpb25hbGUsIGNvbW1lbnRzLCBldGMuIEJhY2sgdG8gdGhlbSBhZnRlciBhIGZhaWx1cmUsXG5cdCAqIHNvIHRoYXQgdGhleSBtYXkgcmUtdXNlIGl0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuXHQgKi9cblx0c3RhdGljIHByaW50VXNlclRleHQoY29tbWVudHM6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRwLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTmFtZSA9ICdtb3JlYml0cy11c2VydGV4dCc7XG5cdFx0ZGl2LnN0eWxlLm1hcmdpblRvcCA9ICcwJztcblx0XHRkaXYuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XG5cdFx0ZGl2LnRleHRDb250ZW50ID0gY29tbWVudHM7XG5cdFx0cC5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290IS5hcHBlbmRDaGlsZChwKTtcblx0fVxufVxuXG5Nb3JlYml0cy5zdGF0dXMgPSBTdGF0dXM7XG5cbi8qKlxuICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzaW1wbGUgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFR5cGUgb2YgSFRNTCBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBUZXh0IGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yXSAtIEZvbnQgY29sb3IuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbk1vcmViaXRzLmh0bWxOb2RlID0gKHR5cGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBjb2xvcj86IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcblx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdGlmIChjb2xvcikge1xuXHRcdG5vZGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0fVxuXHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpKTtcblx0cmV0dXJuIG5vZGU7XG59O1xuLyoqXG4gKiBBZGQgc2hpZnQtY2xpY2sgc3VwcG9ydCBmb3IgY2hlY2tib3hlcy4gVGhlIHdpa2liaXRzIHZlcnNpb25cbiAqIChgd2luZG93LmFkZENoZWNrYm94Q2xpY2tIYW5kbGVyc2ApIGhhcyBzb21lIHJlc3RyaWN0aW9ucywgYW5kIGRvZXNuJ3Qgd29ya1xuICogd2l0aCBjaGVja2JveGVzIGluc2lkZSBhIHNvcnRhYmxlIHRhYmxlLCBzbyBsZXQncyBidWlsZCBvdXIgb3duLlxuICpcbiAqIEBwYXJhbSBqUXVlcnlTZWxlY3RvclxuICogQHBhcmFtIGpRdWVyeUNvbnRleHRcbiAqL1xuTW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCA9IChcblx0alF1ZXJ5U2VsZWN0b3I6IHN0cmluZyB8IEhUTUxFbGVtZW50W10sXG5cdGpRdWVyeUNvbnRleHQ/OiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEpRdWVyeTxIVE1MRWxlbWVudD5cbik6IHZvaWQgPT4ge1xuXHRsZXQgbGFzdENoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihcblx0XHR0aGlzOiBIVE1MSW5wdXRFbGVtZW50LFxuXHRcdGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cblx0KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdGhpc0NiID0gdGhpcztcblx0XHRpZiAoZXZlbnQuc2hpZnRLZXkgJiYgbGFzdENoZWNrYm94ICE9PSBudWxsKSB7XG5cdFx0XHQvLyBjYW4ndCBjYWNoZSB0aGVtLCBvYnZpb3VzbHksIGlmIHdlIHdhbnQgdG8gc3VwcG9ydCByZXNvcnRpbmdcblx0XHRcdGNvbnN0IGNicyA9ICQ8SFRNTElucHV0RWxlbWVudD4oalF1ZXJ5U2VsZWN0b3IgYXMgc3RyaW5nLCBqUXVlcnlDb250ZXh0KS50b0FycmF5KCk7XG5cdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdGxldCBsYXN0SW5kZXggPSAtMTtcblx0XHRcdGxldCBpOiBudW1iZXI7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjYnNbaV0gPT09IHRoaXNDYikge1xuXHRcdFx0XHRcdGluZGV4ID0gaTtcblx0XHRcdFx0XHRpZiAobGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2JzW2ldID09PSBsYXN0Q2hlY2tib3gpIHtcblx0XHRcdFx0XHRsYXN0SW5kZXggPSBpO1xuXHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA+IC0xICYmIGxhc3RJbmRleCA+IC0xKSB7XG5cdFx0XHRcdC8vIGluc3BpcmVkIGJ5IHdpa2liaXRzXG5cdFx0XHRcdGNvbnN0IGVuZFN0YXRlID0gdGhpc0NiLmNoZWNrZWQ7XG5cdFx0XHRcdGxldCBzdGFydDogbnVtYmVyO1xuXHRcdFx0XHRsZXQgZmluaXNoOiBudW1iZXI7XG5cdFx0XHRcdGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuXHRcdFx0XHRcdHN0YXJ0ID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdGZpbmlzaCA9IGxhc3RJbmRleDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGFydCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHRmaW5pc2ggPSBpbmRleCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gc3RhcnQ7IGkgPD0gZmluaXNoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoY2JzW2ldIS5jaGVja2VkICE9PSBlbmRTdGF0ZSkge1xuXHRcdFx0XHRcdFx0Y2JzW2ldIS5jbGljaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRsYXN0Q2hlY2tib3ggPSB0aGlzQ2I7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdCQ8SFRNTElucHV0RWxlbWVudD4oalF1ZXJ5U2VsZWN0b3IgYXMgc3RyaW5nLCBqUXVlcnlDb250ZXh0KS5vbignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xufTtcbi8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gKioqKioqKioqKioqKioqKiAqL1xuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGEgZ3JvdXAgb2YgcGFnZXMgKG9yIGFyYml0cmFyeSBvYmplY3RzKSBhbmQgZXhlY3V0ZXMgYSB3b3JrZXIgZnVuY3Rpb25cbiAqIGZvciBlYWNoLlxuICpcbiAqIGBzZXRQYWdlTGlzdChwYWdlTGlzdClgOiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uIEl0IHNob3VsZCBiZSBhblxuICogYXJyYXkgb2YgcGFnZSBuYW1lcyBzdHJpbmdzLlxuICpcbiAqIGBzZXRPcHRpb24ob3B0aW9uTmFtZSwgb3B0aW9uVmFsdWUpYDogU2V0cyBhIGtub3duIG9wdGlvbjpcbiAqIC0gYGNodW5rU2l6ZWAgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG8gKGRlZmF1bHRcbiAqIDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG4gKiAtIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2AgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1cyBlbGVtZW50XG4gKiB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlPyBTZWUgbm90ZSBiZWxvdy5cbiAqXG4gKiBgcnVuKHdvcmtlciwgcG9zdEZpbmlzaClgOiBSdW5zIHRoZSBjYWxsYmFjayBgd29ya2VyYCBmb3IgZWFjaCBwYWdlIGluIHRoZVxuICogbGlzdC4gIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgYHdvcmtlclN1Y2Nlc3NgIHdoZW4gc3VjY2VlZGluZywgb3JcbiAqIGB3b3JrZXJGYWlsdXJlYCB3aGVuIGZhaWxpbmcuICBJZiB1c2luZyB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9yXG4gKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSwgdGhpcyBpcyBlYXNpbHkgZG9uZSBieSBwYXNzaW5nIHRoZXNlIHR3b1xuICogZnVuY3Rpb25zIGFzIHBhcmFtZXRlcnMgdG8gdGhlIG1ldGhvZHMgb24gdGhvc2Ugb2JqZWN0czogZm9yIGluc3RhbmNlLFxuICogYHBhZ2Uuc2F2ZShiYXRjaE9wLndvcmtlclN1Y2Nlc3MsIGJhdGNoT3Aud29ya2VyRmFpbHVyZSlgLiAgTWFrZSBzdXJlIHRoZVxuICogbWV0aG9kcyBhcmUgY2FsbGVkIGRpcmVjdGx5IGlmIHNwZWNpYWwgc3VjY2Vzcy9mYWlsdXJlIGNhc2VzIGFyaXNlLiAgSWYgeW91XG4gKiBvbWl0IHRvIGNhbGwgdGhlc2UgbWV0aG9kcywgdGhlIGJhdGNoIG9wZXJhdGlvbiB3aWxsIHN0YWxsIGFmdGVyIHRoZSBmaXJzdFxuICogY2h1bmshICBBbHNvIGVuc3VyZSB0aGF0IGVpdGhlciB3b3JrZXJTdWNjZXNzIG9yIHdvcmtlckZhaWx1cmUgaXMgY2FsbGVkIG5vXG4gKiBtb3JlIHRoYW4gb25jZS4gIFRoZSBzZWNvbmQgY2FsbGJhY2sgYHBvc3RGaW5pc2hgIGlzIGV4ZWN1dGVkIHdoZW4gdGhlXG4gKiBlbnRpcmUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuICpcbiAqIElmIHVzaW5nIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2AsIHlvdSBzaG91bGQgdHJ5IHRvIGVuc3VyZSB0aGF0IHRoZVxuICogYHdvcmtlclN1Y2Nlc3NgIGNhbGxiYWNrIGhhcyBhY2Nlc3MgdG8gdGhlIHBhZ2UgdGl0bGUuICBUaGlzIGlzIG5vIHByb2JsZW0gZm9yXG4gKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSBvYmplY3RzLiAgQnV0IHdoZW4gdXNpbmcgdGhlIEFQSSwgcGxlYXNlIHNldCB0aGVcbiAqIHxwYWdlTmFtZXwgcHJvcGVydHkgb24gdGhlIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb2JqZWN0LlxuICpcbiAqIFRoZXJlIGFyZSBzYW1wbGUgYmF0Y2hPcGVyYXRpb24gaW1wbGVtZW50YXRpb25zIHVzaW5nIE1vcmViaXRzLndpa2kucGFnZSBpblxuICogdHdpbmtsZWJhdGNoZGVsZXRlLmpzLCB0d2lua2xlYmF0Y2h1bmRlbGV0ZS5qcywgYW5kIHR3aW5rbGViYXRjaHByb3RlY3QuanMuXG4gKlxuICogQG1lbWJlcm9mIE1vcmViaXRzXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY3VycmVudEFjdGlvbl1cbiAqL1xuY2xhc3MgQmF0Y2hPcGVyYXRpb24ge1xuXHRwcml2YXRlIGN0eDoge1xuXHRcdHBhZ2VMaXN0OiBzdHJpbmdbXSB8IG51bGw7XG5cdFx0b3B0aW9uczoge2NodW5rU2l6ZTogbnVtYmVyOyBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lczogYm9vbGVhbn07XG5cdFx0c3RhdHVzRWxlbWVudDogU3RhdHVzO1xuXHRcdHdvcmtlcjogQmF0Y2hPcGVyYXRpb25Xb3JrZXIgfCBudWxsO1xuXHRcdHBvc3RGaW5pc2g6ICgoKSA9PiB2b2lkKSB8IG51bGwgfCB1bmRlZmluZWQ7XG5cdFx0Y291bnRTdGFydGVkOiBudW1iZXI7XG5cdFx0Y291bnRGaW5pc2hlZDogbnVtYmVyO1xuXHRcdGNvdW50RmluaXNoZWRTdWNjZXNzOiBudW1iZXI7XG5cdFx0Y3VycmVudENodW5rSW5kZXg6IG51bWJlcjtcblx0XHRwYWdlQ2h1bmtzOiBzdHJpbmdbXVtdO1xuXHRcdHJ1bm5pbmc6IGJvb2xlYW47XG5cdH07XG5cblx0Y29uc3RydWN0b3IoY3VycmVudEFjdGlvbj86IHN0cmluZykge1xuXHRcdHRoaXMuY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTGlzdDogbnVsbCxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0Y2h1bmtTaXplOiA1MCxcblx0XHRcdFx0cHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXM6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdC8vIGludGVybmFsIGNvdW50ZXJzLCBldGMuXG5cdFx0XHRzdGF0dXNFbGVtZW50OiBuZXcgTW9yZWJpdHMuc3RhdHVzKGN1cnJlbnRBY3Rpb24gfHwgd2luZG93LndnVUxTKCfmiafooYzmibnph4/mk43kvZwnLCAn5Z+36KGM5om55qyh5pON5L2cJykpLFxuXHRcdFx0d29ya2VyOiBudWxsLFxuXHRcdFx0Ly8gZnVuY3Rpb24gdGhhdCBleGVjdXRlcyBmb3IgZWFjaCBpdGVtIGluIHBhZ2VMaXN0XG5cdFx0XHRwb3N0RmluaXNoOiBudWxsLFxuXHRcdFx0Ly8gZnVuY3Rpb24gdGhhdCBleGVjdXRlcyB3aGVuIHRoZSB3aG9sZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWRcblx0XHRcdGNvdW50U3RhcnRlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWQ6IDAsXG5cdFx0XHRjb3VudEZpbmlzaGVkU3VjY2VzczogMCxcblx0XHRcdGN1cnJlbnRDaHVua0luZGV4OiAtMSxcblx0XHRcdHBhZ2VDaHVua3M6IFtdLFxuXHRcdFx0cnVubmluZzogZmFsc2UsXG5cdFx0fTtcblx0fVxuXG5cdC8vIHNob3VsZG4ndCBiZSBuZWVkZWQgYnkgZXh0ZXJuYWwgdXNlcnMsIGJ1dCBwcm92aWRlZCBhbnl3YXkgZm9yIG1heGltdW0gZmxleGliaWxpdHlcblx0Z2V0U3RhdHVzRWxlbWVudCA9ICgpOiBTdGF0dXMgPT4ge1xuXHRcdHJldHVybiB0aGlzLmN0eC5zdGF0dXNFbGVtZW50O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHBhZ2VMaXN0IC0gQXJyYXkgb2Ygb2JqZWN0cyBvdmVyIHdoaWNoIHlvdSB3aXNoIHRvIGV4ZWN1dGUgdGhlIHdvcmtlciBmdW5jdGlvblxuXHQgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGxpc3Qgb2YgcGFnZSBuYW1lcyAoc3RyaW5ncykuXG5cdCAqL1xuXHRzZXRQYWdlTGlzdCA9IChwYWdlTGlzdDogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0XHR0aGlzLmN0eC5wYWdlTGlzdCA9IHBhZ2VMaXN0O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIGEga25vd24gb3B0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSAtIE5hbWUgb2YgdGhlIG9wdGlvbjpcblx0ICogLSBjaHVua1NpemUgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG9cblx0ICogKGRlZmF1bHQgNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0ICogLSBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzXG5cdCAqIGVsZW1lbnQgdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT9cblx0ICogQHBhcmFtIHtudW1iZXJ8Ym9vbGVhbn0gb3B0aW9uVmFsdWUgLSBWYWx1ZSB0byB3aGljaCB0aGUgb3B0aW9uIGlzXG5cdCAqIHRvIGJlIHNldC4gU2hvdWxkIGJlIGFuIGludGVnZXIgZm9yIGNodW5rU2l6ZSBhbmQgYSBib29sZWFuIGZvclxuXHQgKiBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcy5cblx0ICovXG5cdHNldE9wdGlvbiA9IChvcHRpb25OYW1lOiAnY2h1bmtTaXplJyB8ICdwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcycsIG9wdGlvblZhbHVlOiBudW1iZXIgfCBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuY3R4Lm9wdGlvbnMgYXMgUmVjb3JkPCdjaHVua1NpemUnIHwgJ3ByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzJywgbnVtYmVyIHwgYm9vbGVhbj47XG5cdFx0b3B0aW9uc1tvcHRpb25OYW1lXSA9IG9wdGlvblZhbHVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSdW5zIHRoZSBmaXJzdCBjYWxsYmFjayBmb3IgZWFjaCBwYWdlIGluIHRoZSBsaXN0LlxuXHQgKiBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIHdvcmtlclN1Y2Nlc3Mgd2hlbiBzdWNjZWVkaW5nLCBvciB3b3JrZXJGYWlsdXJlIHdoZW4gZmFpbGluZy5cblx0ICogUnVucyB0aGUgb3B0aW9uYWwgc2Vjb25kIGNhbGxiYWNrIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gd29ya2VyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtwb3N0RmluaXNoXVxuXHQgKi9cblx0cnVuID0gKHdvcmtlcjogQmF0Y2hPcGVyYXRpb25Xb3JrZXIsIHBvc3RGaW5pc2g/OiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0aWYgKHRoaXMuY3R4LnJ1bm5pbmcpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmibnph4/mk43kvZzlt7LlnKjov5DooYwnLCAn5om55qyh5pON5L2c5bey5Zyo5Z+36KGMJykpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmN0eC5ydW5uaW5nID0gdHJ1ZTtcblx0XHR0aGlzLmN0eC53b3JrZXIgPSB3b3JrZXI7XG5cdFx0dGhpcy5jdHgucG9zdEZpbmlzaCA9IHBvc3RGaW5pc2g7XG5cdFx0dGhpcy5jdHguY291bnRTdGFydGVkID0gMDtcblx0XHR0aGlzLmN0eC5jb3VudEZpbmlzaGVkID0gMDtcblx0XHR0aGlzLmN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA9IDA7XG5cdFx0dGhpcy5jdHguY3VycmVudENodW5rSW5kZXggPSAtMTtcblx0XHR0aGlzLmN0eC5wYWdlQ2h1bmtzID0gW107XG5cdFx0Y29uc3QgdG90YWwgPSB0aGlzLmN0eC5wYWdlTGlzdCEubGVuZ3RoO1xuXHRcdGlmICghdG90YWwpIHtcblx0XHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+ayoeacieaMh+WumumhtemdoicsICfmspLmnInmjIflrprpoIHpnaInKSk7XG5cdFx0XHR0aGlzLmN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy5jdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHR0aGlzLmN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIGNodW5rIHBhZ2UgbGlzdCBpbnRvIG1vcmUgbWFuYWdlYWJsZSB1bml0c1xuXHRcdHRoaXMuY3R4LnBhZ2VDaHVua3MgPSBNb3JlYml0cy5hcnJheS5jaHVuayh0aGlzLmN0eC5wYWdlTGlzdCEsIHRoaXMuY3R4Lm9wdGlvbnMuY2h1bmtTaXplKTtcblx0XHQvLyBzdGFydCB0aGUgcHJvY2Vzc1xuXHRcdE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpO1xuXHRcdHRoaXMuY3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKCcwJScpO1xuXHRcdHRoaXMuZm5TdGFydE5ld0NodW5rKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRvIGJlIGNhbGxlZCBieSB3b3JrZXIgYmVmb3JlIGl0IHRlcm1pbmF0ZXMgc3VjY2Vzc2Z1bGx5LlxuXHQgKlxuXHQgKiBAcGFyYW0geyhNb3JlYml0cy53aWtpLnBhZ2V8TW9yZWJpdHMud2lraS5hcGl8c3RyaW5nKX0gYXJnIC1cblx0ICogVGhpcyBzaG91bGQgYmUgdGhlIGBNb3JlYml0cy53aWtpLnBhZ2VgIG9yIGBNb3JlYml0cy53aWtpLmFwaWAgb2JqZWN0IHVzZWQgYnkgd29ya2VyXG5cdCAqIChmb3IgdGhlIGFkanVzdG1lbnQgb2Ygc3RhdHVzIGxpbmVzIGVtaXR0ZWQgYnkgdGhlbSkuXG5cdCAqIElmIG5vIE1vcmViaXRzLndpa2kuKiBvYmplY3QgaXMgdXNlZCAoZS5nLiB5b3UncmUgdXNpbmcgYG13LkFwaSgpYCBvciBzb21ldGhpbmcgZWxzZSksIGFuZFxuXHQgKiBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIG9wdGlvbiBpcyBvbiwgZ2l2ZSB0aGUgcGFnZSBuYW1lIChzdHJpbmcpIGFzIGFyZ3VtZW50LlxuXHQgKi9cblx0d29ya2VyU3VjY2VzcyA9IChhcmc6IHN0cmluZyB8IFdpa2lBcGlJbnN0YW5jZSB8IFdpa2lQYWdlSW5zdGFuY2UpOiB2b2lkID0+IHtcblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTW9yZWJpdHMud2lraS5hcGkgfHwgYXJnIGluc3RhbmNlb2YgTW9yZWJpdHMud2lraS5wYWdlKSB7XG5cdFx0XHQvLyB1cGRhdGUgb3IgcmVtb3ZlIHN0YXR1cyBsaW5lXG5cdFx0XHRjb25zdCBzdGF0ZWxlbSA9IGFyZy5nZXRTdGF0dXNFbGVtZW50KCkhO1xuXHRcdFx0aWYgKHRoaXMuY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0Y29uc3QgYXJnV2l0aFBhZ2VJbmZvID0gYXJnIGFzIHVua25vd24gYXMge1xuXHRcdFx0XHRcdGdldFBhZ2VOYW1lPzogKCkgPT4gc3RyaW5nO1xuXHRcdFx0XHRcdHBhZ2VOYW1lPzogc3RyaW5nO1xuXHRcdFx0XHRcdHF1ZXJ5Pzoge3RpdGxlPzogc3RyaW5nfTtcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGFyZ1dpdGhQYWdlSW5mby5nZXRQYWdlTmFtZSB8fFxuXHRcdFx0XHRcdGFyZ1dpdGhQYWdlSW5mby5wYWdlTmFtZSB8fFxuXHRcdFx0XHRcdChhcmdXaXRoUGFnZUluZm8ucXVlcnkgJiYgYXJnV2l0aFBhZ2VJbmZvLnF1ZXJ5LnRpdGxlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyB3ZSBrbm93IHRoZSBwYWdlIHRpdGxlIC0gZGlzcGxheSBhIHJlbGV2YW50IG1lc3NhZ2Vcblx0XHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGFyZ1dpdGhQYWdlSW5mby5nZXRQYWdlTmFtZVxuXHRcdFx0XHRcdFx0PyBhcmdXaXRoUGFnZUluZm8uZ2V0UGFnZU5hbWUoKVxuXHRcdFx0XHRcdFx0OiBhcmdXaXRoUGFnZUluZm8ucGFnZU5hbWUgfHwgYXJnV2l0aFBhZ2VJbmZvLnF1ZXJ5IS50aXRsZTtcblx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKGDlrozmiJDvvIhbWyR7cGFnZU5hbWV9XV3vvIlgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyB3ZSBkb24ndCBrbm93IHRoZSBwYWdlIHRpdGxlIC0ganVzdCBkaXNwbGF5IGEgZ2VuZXJpYyBtZXNzYWdlXG5cdFx0XHRcdFx0c3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJlbW92ZSB0aGUgc3RhdHVzIGxpbmUgYXV0b21hdGljYWxseSBwcm9kdWNlZCBieSBNb3JlYml0cy53aWtpLipcblx0XHRcdFx0c3RhdGVsZW0udW5saW5rKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiB0aGlzLmN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKGFyZywgYOWujOaIkO+8iFtbJHthcmd9XV3vvIlgKTtcblx0XHR9XG5cdFx0dGhpcy5jdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MrKztcblx0XHR0aGlzLmZuRG9uZU9uZSgpO1xuXHR9O1xuXG5cdHdvcmtlckZhaWx1cmUgPSAoKTogdm9pZCA9PiB7XG5cdFx0dGhpcy5mbkRvbmVPbmUoKTtcblx0fTtcblxuXHQvLyBwcml2YXRlIGZ1bmN0aW9uc1xuXHRwcml2YXRlIGZuU3RhcnROZXdDaHVuayA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBjaHVuayA9IHRoaXMuY3R4LnBhZ2VDaHVua3NbKyt0aGlzLmN0eC5jdXJyZW50Q2h1bmtJbmRleF07XG5cdFx0aWYgKCFjaHVuaykge1xuXHRcdFx0cmV0dXJuOyAvLyBkb25lISB5YXlcblx0XHR9XG5cdFx0Ly8gc3RhcnQgd29ya2VycyBmb3IgdGhlIGN1cnJlbnQgY2h1bmtcblx0XHR0aGlzLmN0eC5jb3VudFN0YXJ0ZWQgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdGZvciAoY29uc3QgcGFnZSBvZiBjaHVuaykge1xuXHRcdFx0dGhpcy5jdHgud29ya2VyIShwYWdlLCB0aGlzKTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBmbkRvbmVPbmUgPSAoKTogdm9pZCA9PiB7XG5cdFx0dGhpcy5jdHguY291bnRGaW5pc2hlZCsrO1xuXHRcdC8vIHVwZGF0ZSBvdmVyYWxsIHN0YXR1cyBsaW5lXG5cdFx0Y29uc3QgdG90YWwgPSB0aGlzLmN0eC5wYWdlTGlzdCEubGVuZ3RoO1xuXHRcdGlmICh0aGlzLmN0eC5jb3VudEZpbmlzaGVkIDwgdG90YWwpIHtcblx0XHRcdGNvbnN0IHByb2dyZXNzID0gTWF0aC5yb3VuZCgoMTAwICogdGhpcy5jdHguY291bnRGaW5pc2hlZCkgLyB0b3RhbCk7XG5cdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cyhgJHtwcm9ncmVzc30lYCk7XG5cdFx0XHQvLyBzdGFydCBhIG5ldyBjaHVuayBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8gdGhlIGVuZCBvZiB0aGUgcHJldmlvdXMgY2h1bmssIGFuZFxuXHRcdFx0Ly8gd2UgaGF2ZW4ndCBhbHJlYWR5IHN0YXJ0ZWQgdGhlIG5leHQgb25lXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuY3R4LmNvdW50RmluaXNoZWQgPj0gdGhpcy5jdHguY291bnRTdGFydGVkIC0gTWF0aC5tYXgodGhpcy5jdHgub3B0aW9ucy5jaHVua1NpemUgLyAxMCwgMikgJiZcblx0XHRcdFx0TWF0aC5mbG9vcih0aGlzLmN0eC5jb3VudEZpbmlzaGVkIC8gdGhpcy5jdHgub3B0aW9ucy5jaHVua1NpemUpID4gdGhpcy5jdHguY3VycmVudENodW5rSW5kZXhcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmZuU3RhcnROZXdDaHVuaygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5jdHguY291bnRGaW5pc2hlZCA9PT0gdG90YWwpIHtcblx0XHRcdGNvbnN0IHN0YXR1c1N0cmluZyA9IGDlrozmiJDvvIgke3RoaXMuY3R4LmNvdW50RmluaXNoZWRTdWNjZXNzfS8ke3RoaXMuY3R4LmNvdW50RmluaXNoZWR95pON5L2c5oiQ5Yqf5a6M5oiQ77yJYDtcblx0XHRcdGlmICh0aGlzLmN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA8IHRoaXMuY3R4LmNvdW50RmluaXNoZWQpIHtcblx0XHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC53YXJuKHN0YXR1c1N0cmluZyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmN0eC5zdGF0dXNFbGVtZW50LmluZm8oc3RhdHVzU3RyaW5nKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmN0eC5wb3N0RmluaXNoKSB7XG5cdFx0XHRcdHRoaXMuY3R4LnBvc3RGaW5pc2goKTtcblx0XHRcdH1cblx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0dGhpcy5jdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjdHguY291bnRGaW5pc2hlZCA+IHRvdGFsXG5cdFx0XHQvLyBqdXN0IGZvciBnaWdnbGVzISAod2VsbCwgc2VyaW91cyBkZWJ1Z2dpbmcsIGFjdHVhbGx5KVxuXHRcdFx0dGhpcy5jdHguc3RhdHVzRWxlbWVudC53YXJuKFxuXHRcdFx0XHRgJHt3aW5kb3cud2dVTFMoJ+WujOaIkO+8iOWkmuaJp+ihjOS6hicsICflrozmiJDvvIjlpJrln7fooYzkuoYnKSArICh0aGlzLmN0eC5jb3VudEZpbmlzaGVkIC0gdG90YWwpfeasoe+8iWBcblx0XHRcdCk7XG5cdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdHRoaXMuY3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG59XG5cbk1vcmViaXRzLmJhdGNoT3BlcmF0aW9uID0gQmF0Y2hPcGVyYXRpb247XG5cbi8qKlxuICogQSBzaW1wbGUgZHJhZ2dhYmxlIHdpbmRvdywgbm93IGltcGxlbWVudGVkIGluIHBsYWluIGpRdWVyeSAoZm9ybWVybHkgalF1ZXJ5IFVJJ3MgZGlhbG9nIGZlYXR1cmUpLlxuICogVGhlIGRpYWxvZyBjb25zaXN0cyBvZiBhIGZpeGVkLXBvc2l0aW9uIGZyYW1lIHdpdGggYSB0aXRsZWJhciAoZHJhZ2dhYmxlKSxcbiAqIGEgY29udGVudCBhcmVhICh0aGUgZWxlbWVudCBhY2Nlc3NpYmxlIGFzIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3cjY29udGVudH0pLFxuICogYW5kIGEgYnV0dG9uIHBhbmUgYXQgdGhlIGJvdHRvbS5cbiAqXG4gKiBAbWVtYmVyb2YgTW9yZWJpdHNcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gVGhlIG1heGltdW0gYWxsb3dhYmxlIGhlaWdodCBmb3IgdGhlIGNvbnRlbnQgYXJlYS5cbiAqL1xuaW50ZXJmYWNlIE1vcmViaXRzTmFtZXNwYWNlIHtcblx0c2ltcGxlV2luZG93OiB0eXBlb2YgU2ltcGxlV2luZG93O1xufVxuXG5jbGFzcyBTaW1wbGVXaW5kb3cge1xuXHRjb250ZW50OiBIVE1MRWxlbWVudDtcblx0YnV0dG9uczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXHRoZWlnaHQ6IG51bWJlcjtcblx0aGFzRm9vdGVyTGlua3MgPSBmYWxzZTtcblx0c2NyaXB0TmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgZnJhbWU6IEhUTUxFbGVtZW50O1xuXHRwcml2YXRlIG92ZXJsYXk6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgbW9kYWwgPSBmYWxzZTtcblx0cHJpdmF0ZSBzdGF0aWMgekluZGV4Q291bnRlciA9IDIwMDtcblx0c3RhdGljIHNldEJ1dHRvbnNFbmFibGVkID0gKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMgYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlZCk7XG5cdH07XG5cblx0Y29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSB7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0Y29udGVudC5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnO1xuXHRcdGNvbnRlbnQuaWQgPSBgbW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQtJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE1KX1gO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ID8/IDYwMDtcblx0XHQvLyBnaXZlIHRoZSBkaWFsb2cgdGhlIGdpdmVuIHdpZHRoIHZhbHVlIChjbGFtcGVkIHRvIHRoZSB2aWV3cG9ydCksIHNvIGl0IGNhbiBwb3NpdGlvbiBhcHByb3ByaWF0ZWx5XG5cdFx0Y29uc3Qgd2lkdGhOdW0gPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgTnVtYmVyLnBhcnNlSW50KFN0cmluZyh3aWR0aCB8fCA4MDApLCAxMCkpO1xuXHRcdHRoaXMuZnJhbWUgPSB0aGlzLmJ1aWxkRnJhbWUoKTtcblx0XHR0aGlzLmZyYW1lLnN0eWxlLndpZHRoID0gYCR7d2lkdGhOdW19cHhgO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuZnJhbWUpO1xuXHR9XG5cblx0LyoqIEJ1aWxkIHRoZSBkaWFsb2cgZnJhbWU6IHRpdGxlYmFyIChkcmFnZ2FibGUpLCBjb250ZW50IGFuZCBidXR0b24gcGFuZS4gKi9cblx0cHJpdmF0ZSBidWlsZEZyYW1lKCk6IEhUTUxFbGVtZW50IHtcblx0XHRjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGZyYW1lLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2cnO1xuXHRcdGZyYW1lLnRhYkluZGV4ID0gLTE7IC8vIGZvY3VzYWJsZSwgc28gdGhlIEVTQyBrZXlkb3duIGxpc3RlbmVyIHJlY2VpdmVzIGV2ZW50c1xuXHRcdGZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0Y29uc3QgdGl0bGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aXRsZWJhci5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLXRpdGxlYmFyJztcblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHR0aXRsZS5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLXRpdGxlJztcblx0XHRjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGNsb3NlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcblx0XHRjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWNsb3NlJztcblx0XHRjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB3aW5kb3cud2dVTFMoJ+WFs+mXrScsICfpl5zploknKSk7XG5cdFx0Y2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnXFx1MDBENyc7XG5cdFx0Y2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSk7XG5cdFx0dGl0bGViYXIuYXBwZW5kKHRpdGxlLCBjbG9zZUJ1dHRvbik7XG5cdFx0Ly8gZHJhZyB0aGUgZGlhbG9nIGJ5IGl0cyB0aXRsZWJhclxuXHRcdHRpdGxlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCAmJiB0YXJnZXQuY2xvc2VzdCgnLm1vcmViaXRzLWRpYWxvZy1jbG9zZScpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCByZWN0ID0gdGhpcy5mcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGNvbnN0IG9mZnNldFggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuXHRcdFx0Y29uc3Qgb2Zmc2V0WSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcblx0XHRcdGNvbnN0IG9uTW92ZSA9IChtb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0dGhpcy5mcmFtZS5zdHlsZS5sZWZ0ID0gYCR7bW92ZUV2ZW50LmNsaWVudFggLSBvZmZzZXRYfXB4YDtcblx0XHRcdFx0dGhpcy5mcmFtZS5zdHlsZS50b3AgPSBgJHttb3ZlRXZlbnQuY2xpZW50WSAtIG9mZnNldFl9cHhgO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IG9uVXAgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW92ZSk7XG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvblVwKTtcblx0XHRcdH07XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdmUpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uVXApO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGJ1dHRvbnBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRidXR0b25wYW5lLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctYnV0dG9ucGFuZSc7XG5cdFx0Y29uc3QgYnV0dG9uc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRidXR0b25zcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctYnV0dG9ucyc7XG5cdFx0Y29uc3QgbGlua3NzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmtzc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJztcblx0XHRidXR0b25wYW5lLmFwcGVuZChidXR0b25zcGFuLCBsaW5rc3NwYW4pO1xuXHRcdGZyYW1lLmFwcGVuZCh0aXRsZWJhciwgdGhpcy5jb250ZW50LCBidXR0b25wYW5lKTtcblx0XHQvLyBFU0MgY2xvc2VzIHRoZSBkaWFsb2cgKGZvcm1lcmx5IGpRdWVyeSBVSSdzIGNsb3NlT25Fc2NhcGUgZGVmYXVsdClcblx0XHRmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZyYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZvY3VzZXMgdGhlIGRpYWxvZy4gVGhpcyBtaWdodCB3b3JrLCBvciBvbiB0aGUgY29udHJhcnksIGl0IG1pZ2h0IG5vdC5cblx0ICpcblx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0ICovXG5cdGZvY3VzKCk6IFNpbXBsZVdpbmRvdyB7XG5cdFx0U2ltcGxlV2luZG93LnpJbmRleENvdW50ZXIgKz0gMTtcblx0XHR0aGlzLmZyYW1lLnN0eWxlLnpJbmRleCA9IFN0cmluZyhTaW1wbGVXaW5kb3cuekluZGV4Q291bnRlcik7XG5cdFx0aWYgKHRoaXMub3ZlcmxheSkge1xuXHRcdFx0dGhpcy5vdmVybGF5LnN0eWxlLnpJbmRleCA9IFN0cmluZyhTaW1wbGVXaW5kb3cuekluZGV4Q291bnRlciAtIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZXMgdGhlIGRpYWxvZy4gSWYgdGhpcyBpcyBzZXQgYXMgYW4gZXZlbnQgaGFuZGxlciwgaXQgd2lsbCBzdG9wIHRoZSBldmVudFxuXHQgKiBmcm9tIGRvaW5nIGFueXRoaW5nIG1vcmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7ZXZlbnR9IFtldmVudF1cblx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0ICovXG5cdGNsb3NlKGV2ZW50PzogRXZlbnQpOiBTaW1wbGVXaW5kb3cge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub3ZlcmxheSkge1xuXHRcdFx0dGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5vdmVybGF5ID0gbnVsbDtcblx0XHR9XG5cdFx0dGhpcy5mcmFtZS5yZW1vdmUoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93cyB0aGUgZGlhbG9nLiBDYWxsaW5nIGRpc3BsYXkoKSBvbiBhIGRpYWxvZyB0aGF0IGhhcyBwcmV2aW91c2x5IGJlZW4gY2xvc2VkXG5cdCAqIG1pZ2h0IHdvcmssIGJ1dCBpdCBpcyBub3QgZ3VhcmFudGVlZC5cblx0ICpcblx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0ICovXG5cdGRpc3BsYXkoKTogU2ltcGxlV2luZG93IHtcblx0XHQvLyB0aGUgZnJhbWUgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gb24gY2xvc2UoKTsgcmVidWlsZCBpdCBpZiBuZWVkZWRcblx0XHRpZiAoIXRoaXMuZnJhbWUuaXNDb25uZWN0ZWQpIHtcblx0XHRcdHRoaXMuZnJhbWUgPSB0aGlzLmJ1aWxkRnJhbWUoKTtcblx0XHRcdGNvbnN0IGJ1dHRvbnNwYW4gPSAkKHRoaXMuZnJhbWUpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpLmdldCgwKTtcblx0XHRcdGlmIChidXR0b25zcGFuKSB7XG5cdFx0XHRcdGlmICh0aGlzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdCQoYnV0dG9uc3BhbikuZW1wdHkoKS5hcHBlbmQodGhpcy5idXR0b25zKTtcblx0XHRcdFx0XHRidXR0b25zcGFuLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJ1dHRvbnNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5JywgJ2RhdGEtZW1wdHknKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5mcmFtZSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnNjcmlwdE5hbWUpIHtcblx0XHRcdGNvbnN0IHRpdGxlU3BhbiA9ICQodGhpcy5mcmFtZSkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy10aXRsZScpLmdldCgwKTtcblx0XHRcdCQodGhpcy5mcmFtZSkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJykucmVtb3ZlKCk7XG5cdFx0XHRjb25zdCBzY3JpcHRuYW1lc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHNjcmlwdG5hbWVzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctc2NyaXB0bmFtZSc7XG5cdFx0XHRzY3JpcHRuYW1lc3Bhbi50ZXh0Q29udGVudCA9IGAke3RoaXMuc2NyaXB0TmFtZX0gXFx1MDBCNyBgOyAvLyBVKzAwQjcgTUlERExFIERPVCA9ICZtaWRkb3Q7XG5cdFx0XHRpZiAodGl0bGVTcGFuKSB7XG5cdFx0XHRcdCQodGl0bGVTcGFuKS5wcmVwZW5kKHNjcmlwdG5hbWVzcGFuKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMubW9kYWwgJiYgIXRoaXMub3ZlcmxheSkge1xuXHRcdFx0dGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm92ZXJsYXkuY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1vdmVybGF5Jztcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMub3ZlcmxheSk7XG5cdFx0fVxuXHRcdHRoaXMuZm9jdXMoKTtcblx0XHR0aGlzLmZyYW1lLmZvY3VzKCk7IC8vIGZvY3VzIHRoZSBkaWFsb2csIHNvIGtleWJvYXJkIGV2ZW50cyAoRVNDKSByZWFjaCBpdFxuXHRcdGlmICh3aW5kb3cuc2V0dXBUb29sdGlwcyAmJiB3aW5kb3cucGcgJiYgd2luZG93LnBnLnJlICYmIHdpbmRvdy5wZy5yZS5kaWZmKSB7XG5cdFx0XHQvLyB0aWUgaW4gd2l0aCBOQVZQT1Bcblx0XHRcdHRoaXMuZnJhbWUucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRcdHdpbmRvdy5zZXR1cFRvb2x0aXBzKHRoaXMuZnJhbWUpO1xuXHRcdH1cblx0XHQvLyBjZW50ZXIgdGhlIGRpYWxvZyBiZWZvcmUgdGhlIGhlaWdodCBhbGdvcml0aG0gbWF5IHJlcG9zaXRpb24gaXRcblx0XHR0aGlzLmNlbnRlcigpO1xuXHRcdHRoaXMuc2V0SGVpZ2h0KHRoaXMuaGVpZ2h0KTsgLy8gaW5pdCBoZWlnaHQgYWxnb3JpdGhtXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKiogQ2VudGVyIHRoZSBkaWFsb2cgKGhvcml6b250YWxseSBhbmQgdmVydGljYWxseSwgb3IgYXQgdGhlIHRvcCB3aGVuIHJlcXVlc3RlZCkuICovXG5cdHByaXZhdGUgY2VudGVyKHBvc2l0aW9uVG9wID0gZmFsc2UpOiB2b2lkIHtcblx0XHRjb25zdCByZWN0ID0gdGhpcy5mcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCBsZWZ0ID0gTWF0aC5tYXgoMCwgKHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC53aWR0aCkgLyAyKTtcblx0XHRjb25zdCB0b3AgPSBwb3NpdGlvblRvcCA/IDAgOiBNYXRoLm1heCgwLCAod2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQpIC8gMik7XG5cdFx0dGhpcy5mcmFtZS5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG5cdFx0dGhpcy5mcmFtZS5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGRpYWxvZyB0aXRsZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdCAqL1xuXHRzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogU2ltcGxlV2luZG93IHtcblx0XHRjb25zdCB0aXRsZVNwYW4gPSAkKHRoaXMuZnJhbWUpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctdGl0bGUnKS5nZXQoMCk7XG5cdFx0aWYgKHRpdGxlU3Bhbikge1xuXHRcdFx0dGl0bGVTcGFuLnRleHRDb250ZW50ID0gdGl0bGU7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIHNjcmlwdCBuYW1lLCBhcHBlYXJpbmcgYXMgYSBwcmVmaXggdG8gdGhlIHRpdGxlIHRvIGhlbHAgdXNlcnMgZGV0ZXJtaW5lIHdoaWNoXG5cdCAqIHVzZXIgc2NyaXB0IGlzIHByb2R1Y2luZyB3aGljaCBkaWFsb2cuIEZvciBpbnN0YW5jZSwgVHdpbmtsZSBtb2R1bGVzIHNldCB0aGlzIHRvIFwiVHdpbmtsZVwiLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0c2V0U2NyaXB0TmFtZShuYW1lOiBzdHJpbmcpOiBTaW1wbGVXaW5kb3cge1xuXHRcdHRoaXMuc2NyaXB0TmFtZSA9IG5hbWU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgZGlhbG9nIHdpZHRoLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0ICovXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiBTaW1wbGVXaW5kb3cge1xuXHRcdHRoaXMuZnJhbWUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgZGlhbG9nJ3MgbWF4aW11bSBoZWlnaHQuIFRoZSBkaWFsb2cgd2lsbCBhdXRvLXNpemUgdG8gZml0IGl0cyBjb250ZW50cyxcblx0ICogYnV0IHRoZSBjb250ZW50IGFyZWEgd2lsbCBncm93IG5vIGxhcmdlciB0aGFuIHRoZSBoZWlnaHQgZ2l2ZW4gaGVyZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogU2ltcGxlV2luZG93IHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHQvLyBmcm9tIGRpc3BsYXkgdGltZSBvbndhcmRzLCBsZXQgdGhlIGJyb3dzZXIgZGV0ZXJtaW5lIHRoZSBvcHRpbXVtIGhlaWdodCxcblx0XHQvLyBhbmQgaW5zdGVhZCBsaW1pdCB0aGUgaGVpZ2h0IGF0IHRoZSBnaXZlbiB2YWx1ZVxuXHRcdC8vIG5vdGUgdGhhdCB0aGUgZ2l2ZW4gaGVpZ2h0IHdpbGwgZXhjbHVkZSB0aGUgYXBwcm94LiAyMHB4IHRoYXQgdGhlIGpRdWVyeSBVSVxuXHRcdC8vIGNocm9tZSBoYXMgaW4gaGVpZ2h0IGluIGFkZGl0aW9uIHRvIHRoZSBoZWlnaHQgb2YgYW4gZXF1aXZhbGVudCBcImNsYXNzaWNcIlxuXHRcdC8vIE1vcmViaXRzLnNpbXBsZVdpbmRvd1xuXHRcdGlmICh0aGlzLmZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuXHRcdFx0dGhpcy5mcmFtZS5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSAyfXB4YDtcblx0XHRcdHRoaXMuY2VudGVyKHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZyYW1lLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0XHR9XG5cdFx0dGhpcy5jb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke051bWJlci5wYXJzZUludChTdHJpbmcodGhpcy5oZWlnaHQgLSAzMCksIDEwKX1weGA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUsIHVzdWFsbHkgZnJvbSByZW5kZXJpbmdcblx0ICogYSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfS5cblx0ICogUmUtZW51bWVyYXRlcyB0aGUgZm9vdGVyIGJ1dHRvbnMsIGJ1dCBsZWF2ZXMgdGhlIGZvb3RlciBsaW5rcyBhcyB0aGV5IGFyZS5cblx0ICogQmUgc3VyZSB0byBjYWxsIHRoaXMgYXQgbGVhc3Qgb25jZSBiZWZvcmUgdGhlIGRpYWxvZyBpcyBkaXNwbGF5ZWQuLi5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0c2V0Q29udGVudChjb250ZW50OiBIVE1MRWxlbWVudCk6IFNpbXBsZVdpbmRvdyB7XG5cdFx0dGhpcy5wdXJnZUNvbnRlbnQoKTtcblx0XHR0aGlzLmFkZENvbnRlbnQoY29udGVudCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlIHRvIHRoZSBkaWFsb2cgY29udGVudC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0YWRkQ29udGVudChjb250ZW50OiBIVE1MRWxlbWVudCk6IFNpbXBsZVdpbmRvdyB7XG5cdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXHRcdC8vIGxvb2sgZm9yIHN1Ym1pdCBidXR0b25zIGluIHRoZSBjb250ZW50LCBoaWRlIHRoZW0sIGFuZCBhZGQgYSBwcm94eSBidXR0b24gdG8gdGhlIGJ1dHRvbiBwYW5lXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKVxuXHRcdFx0LmVhY2goKF9rZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRcdHZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRpZiAodmFsdWUuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG5cdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUuZ2V0QXR0cmlidXRlKCd2YWx1ZScpID8/ICcnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlLnRleHRDb250ZW50KSB7XG5cdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUudGV4dENvbnRlbnQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gJ+aPkOS6pCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnV0dG9uLmNsYXNzTmFtZSA9IHZhbHVlLmNsYXNzTmFtZSB8fCAnc3VibWl0QnV0dG9uUHJveHknO1xuXHRcdFx0XHQvLyBoZXJlIGlzIGFuIGluc3RhbmNlIG9mIGNoZWFwIGNvZGluZywgcHJvYmFibHkgYSBtZW1vcnktdXNhZ2UgaGl0IGluIHVzaW5nIGEgY2xvc3VyZSBoZXJlXG5cdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0dmFsdWUuY2xpY2soKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHNlbGYuYnV0dG9uc1tzZWxmLmJ1dHRvbnMubGVuZ3RoXSA9IGJ1dHRvbjtcblx0XHRcdH0pO1xuXHRcdC8vIHJlbW92ZSBhbGwgYnV0dG9ucyBmcm9tIHRoZSBidXR0b24gcGFuZSBhbmQgcmUtYWRkIHRoZW1cblx0XHRjb25zdCBidXR0b25zcGFuID0gJCh0aGlzLmZyYW1lKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKS5nZXQoMCk7XG5cdFx0aWYgKGJ1dHRvbnNwYW4pIHtcblx0XHRcdGlmICh0aGlzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkKGJ1dHRvbnNwYW4pLmVtcHR5KCkuYXBwZW5kKHRoaXMuYnV0dG9ucyk7XG5cdFx0XHRcdGJ1dHRvbnNwYW4ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWVtcHR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRidXR0b25zcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eScsICdkYXRhLWVtcHR5Jyk7IC8vIHVzZWQgYnkgQ1NTXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyBhbGwgY29udGVudHMgZnJvbSB0aGUgZGlhbG9nLCBiYXJyaW5nIGFueSBmb290ZXIgbGlua3MuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdCAqL1xuXHRwdXJnZUNvbnRlbnQoKTogU2ltcGxlV2luZG93IHtcblx0XHR0aGlzLmJ1dHRvbnMgPSBbXTtcblx0XHQvLyBkZWxldGUgYWxsIGJ1dHRvbnMgaW4gdGhlIGJ1dHRvbnBhbmVcblx0XHQkKHRoaXMuZnJhbWUpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpLmVtcHR5KCk7XG5cdFx0d2hpbGUgKHRoaXMuY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdGNvbnN0IFtmaXJzdENoaWxkXSA9IHRoaXMuY29udGVudC5jaGlsZE5vZGVzO1xuXHRcdFx0aWYgKCFmaXJzdENoaWxkKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb250ZW50LnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGEgbGluayBpbiB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgZGlhbG9nLlxuXHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgaGVscCBvciBwb2xpY3kgbGlua3MuXG5cdCAqIEZvciBleGFtcGxlLCBUd2lua2xlJ3MgQ1NEIG1vZHVsZSBhZGRzIGEgbGluayB0byB0aGUgQ1NEIHBvbGljeSBwYWdlLFxuXHQgKiBhcyB3ZWxsIGFzIGEgbGluayB0byBUd2lua2xlJ3MgZG9jdW1lbnRhdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBEaXNwbGF5IHRleHQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpUGFnZSAtIExpbmsgdGFyZ2V0LlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwPWZhbHNlXSAtIFNldCB0cnVlIHRvIHByZXBlbmQgcmF0aGVyIHRoYW4gYXBwZW5kLlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHQgKi9cblx0YWRkRm9vdGVyTGluayh0ZXh0OiBzdHJpbmcsIHdpa2lQYWdlOiBzdHJpbmcsIHByZXA/OiBib29sZWFuKTogU2ltcGxlV2luZG93IHtcblx0XHRjb25zdCBmb290ZXJsaW5rcyA9ICQodGhpcy5mcmFtZSkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcycpO1xuXHRcdGlmICh0aGlzLmhhc0Zvb3RlckxpbmtzKSB7XG5cdFx0XHRjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRidWxsZXQudGV4dENvbnRlbnQgPSAnIFxcdTIwMjIgJzsgLy8gVSsyMDIyIEJVTExFVFxuXHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0Zm9vdGVybGlua3MucHJlcGVuZChidWxsZXQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9vdGVybGlua3MuYXBwZW5kKGJ1bGxldCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybCh3aWtpUGFnZSkpO1xuXHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsIHdpa2lQYWdlKTtcblx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXHRcdGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdGlmIChwcmVwKSB7XG5cdFx0XHRmb290ZXJsaW5rcy5wcmVwZW5kKGxpbmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb290ZXJsaW5rcy5hcHBlbmQobGluayk7XG5cdFx0fVxuXHRcdHRoaXMuaGFzRm9vdGVyTGlua3MgPSB0cnVlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgd2hldGhlciB0aGUgd2luZG93IHNob3VsZCBiZSBtb2RhbCBvciBub3QuIE1vZGFsIGRpYWxvZ3MgY3JlYXRlXG5cdCAqIGFuIG92ZXJsYXkgYmVsb3cgdGhlIGRpYWxvZyBidXQgYWJvdmUgb3RoZXIgcGFnZSBlbGVtZW50cy4gVGhpc1xuXHQgKiBtdXN0IGJlIHVzZWQgKGlmIG5lY2Vzc2FyeSkgYmVmb3JlIGNhbGxpbmcgZGlzcGxheSgpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFttb2RhbD1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSwgb3RoZXIgaXRlbXMgb24gdGhlXG5cdCAqIHBhZ2Ugd2lsbCBiZSBkaXNhYmxlZCwgaS5lLiwgY2Fubm90IGJlIGludGVyYWN0ZWQgd2l0aC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0ICovXG5cdHNldE1vZGFsaXR5KG1vZGFsOiBib29sZWFuKTogU2ltcGxlV2luZG93IHtcblx0XHR0aGlzLm1vZGFsID0gbW9kYWw7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuTW9yZWJpdHMuc2ltcGxlV2luZG93ID0gU2ltcGxlV2luZG93O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBXaW5kb3cge1xuXHRcdC8qKiBQcm92aWRlZCBieSB0aGUgTkFWUE9QIGdhZGdldCwgaWYgcHJlc2VudCAodXNlZCBmb3IgdG9vbHRpcHMpLiAqL1xuXHRcdHNldHVwVG9vbHRpcHM/OiAoY29udGVudDogSFRNTEVsZW1lbnQsIGNvbXBsZXg/OiBib29sZWFuKSA9PiB1bmtub3duO1xuXHRcdC8qKiBQcm92aWRlZCBieSB0aGUgTkFWUE9QIGdhZGdldCwgaWYgcHJlc2VudC4gKi9cblx0XHRwZz86IHtcblx0XHRcdHJlPzoge1xuXHRcdFx0XHRkaWZmPzogdW5rbm93bjtcblx0XHRcdH07XG5cdFx0fTtcblx0fVxuXHRpbnRlcmZhY2UgSFRNTEVsZW1lbnQge1xuXHRcdC8qKiBTZXQgYnkgTkFWUE9QIHRvIGF2b2lkIGRvdWJsZS1wcm9jZXNzaW5nIG9mIGEgbm9kZS4gKi9cblx0XHRyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeT86IGJvb2xlYW47XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSxJQUFBQSxvQkFBNEJDLFFBQUEsaUJBQUE7QUFuQzVCO0FBOEVBLElBQU1DLFdBQVcsQ0FBQztBQUNsQkMsT0FBT0QsV0FBV0E7QUFNbEIsSUFBTUUsT0FBTzs7Ozs7RUFLWkMsb0JBQW9CLENBQUMsYUFBYSxNQUFNOzs7Ozs7O0VBT3hDQywwQkFBMkJDLFNBQWlDO0FBQUEsUUFBQUM7QUFDM0QsVUFBTUMsU0FBUztBQUNmLFVBQU1DLFNBQVM7QUFDZixVQUFNQyxTQUFBSCxlQUFTQyxPQUFPRyxLQUFLTCxHQUFHLE9BQUEsUUFBQUMsaUJBQUEsU0FBQUEsZUFBS0UsT0FBT0UsS0FBS0wsR0FBRztBQUNsRCxVQUFNTSxXQUFXSCxPQUFPRSxLQUFLTCxHQUFHO0FBQ2hDLFFBQUksQ0FBQ0ksT0FBTztBQUNYLGFBQU87SUFDUjtBQUNBLFVBQU1HLFFBQVFaLFNBQVNhLEtBQUtDLFdBQVdDLE9BQU9DLFFBQVFQLE1BQU0sQ0FBQyxDQUFDO0FBQzlELFFBQUlHLFVBQVUsSUFBSTtBQUNq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VEMsa0JBQVloVyxRQUFRc0csSUFBSTtJQUN6QixPQUFPO0FBQ04wUCxrQkFBWXQ2QixPQUFPNHFCLElBQUk7SUFDeEI7QUFDQSxTQUFLa00saUJBQWlCO0FBQ3RCLFdBQU87RUFDUjs7Ozs7Ozs7OztFQVdBMEQsWUFBWXRELE9BQThCO0FBQ3pDLFNBQUtBLFFBQVFBO0FBQ2IsV0FBTztFQUNSO0FBQ0Q7QUFFQWgrQixTQUFTdWhDLGVBQWU5RDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJNb3JlYml0cyIsICJ3aW5kb3ciLCAibDEwbiIsICJyZWRpcmVjdFRhZ0FsaWFzZXMiLCAic2lnbmF0dXJlVGltZXN0YW1wRm9ybWF0IiwgInN0ciIsICJfcmd4VVRDJGV4ZWMiLCAicmd4VVRDIiwgInJneENTVCIsICJtYXRjaCIsICJleGVjIiwgIm1hdGNoQ1NUIiwgIm1vbnRoIiwgImRhdGUiLCAibG9jYWxlRGF0YSIsICJtb250aHMiLCAiaW5kZXhPZiIsICJOdW1iZXIiLCAidXNlcklzSW5Hcm91cCIsICJncm91cCIsICJfbXckY29uZmlnJGdldCIsICJfbXckY29uZmlnJGdldDIiLCAidXNlckdyb3VwcyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImdsb2JhbEdyb3VwcyIsICJpbmNsdWRlcyIsICJ1c2VySXNTeXNvcCIsICJzYW5pdGl6ZUlQdjYiLCAiYWRkcmVzcyIsICJjb25zb2xlIiwgIndhcm4iLCAiaXAiLCAiaXNQYWdlUmVkaXJlY3QiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwYWdlTmFtZU5vcm0iLCAicmVwbGFjZSIsICJwYWdlTmFtZVJlZ2V4IiwgInBhZ2VOYW1lIiwgImZpcnN0Q2hhciIsICJjaGFyQXQiLCAicmVtYWluZGVyIiwgInN0cmluZyIsICJlc2NhcGVSZWdFeHAiLCAic2xpY2UiLCAiVGl0bGUiLCAicGhwQ2hhclRvVXBwZXIiLCAidG9Mb3dlckNhc2UiLCAiY29uY2F0IiwgImNyZWF0ZUh0bWwiLCAiaW5wdXQiLCAiZnJhZ21lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJlbGVtZW50cyIsICJnZW5lcmF0ZUFycmF5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIk5vZGUiLCAiYXBwZW5kQ2hpbGQiLCAiXyQkcGFyc2VIVE1MIiwgIl9pdGVyYXRvcjIiLCAiJCIsICJwYXJzZUhUTUwiLCAicmVuZGVyV2lraWxpbmtzIiwgIl9zdGVwMiIsICJub2RlIiwgImVyciIsICJlIiwgImYiLCAidGV4dCIsICJ1YiIsICJ1bmJpbmRlciIsICJ1bmJpbmQiLCAiY29udGVudCIsICJfIiwgInRhcmdldCIsICJ0ZXh0XyIsICJ1dGlsIiwgImdldFVybCIsICJyZWJpbmQiLCAibmFtZXNwYWNlUmVnZXgiLCAibmFtZXNwYWNlcyIsICJfYWxpYXNlcyQiLCAibmFtZXNwYWNlTGlzdCIsICJhbGlhc2VzIiwgInJlZ2V4IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZSIsICJudW1iZXIiLCAibWFwIiwgImNoYXIiLCAiam9pbiIsICJRdWlja0Zvcm1FbGVtZW50IiwgIl9RdWlja0Zvcm1FbGVtZW50IiwgImRhdGEiLCAiY2hpbGRzIiwgImlkIiwgImNvbnN0cnVjdG9yIiwgImFwcGVuZCIsICJjaGlsZCIsICJyZW5kZXIiLCAiaW50ZXJuYWxTdWJncm91cElkIiwgImN1cnJlbnROb2RlIiwgImNvbXB1dGUiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiaW5JZCIsICJjaGlsZENvbnRhaW5lciIsICJsYWJlbCIsICJhZG1pbm9ubHkiLCAidHlwZSIsICJpIiwgImN1cnJlbnQiLCAic3Vibm9kZSIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzZXRBdHRyaWJ1dGUiLCAiZXZlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudFR5cGUiLCAiZnJhZ21lbnROb2RlIiwgInNlbGVjdCIsICJtdWx0aXBsZSIsICJzaXplIiwgIlN0cmluZyIsICJkaXNhYmxlZCIsICJsaXN0IiwgInZhbHVlcyIsICJzZWxlY3RlZCIsICJoaWRkZW4iLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3VySWQiLCAiY3VyRGl2IiwgInRvb2x0aXAiLCAiZ2VuZXJhdGVUb29sdGlwIiwgImNoZWNrZWQiLCAic3R5bGUiLCAic3ViZ3JvdXAiLCAidG1wZ3JvdXAiLCAic3ViZ3JvdXBSYXciLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZWwiLCAibmV3RWwiLCAic2hvd24iLCAiX3RhcmdldCRwYXJlbnROb2RlIiwgInBhcmVudE5vZGUiLCAiZm9ybSIsICJwcmV2aW91cyIsICJuYW1lcyIsICJfcHJldmlvdXMkcGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJfdGFyZ2V0JHBhcmVudE5vZGUyIiwgIl9zdWJub2RlJHBhcmVudE5vZGUiLCAiX3ByZXZpb3VzJHBhcmVudE5vZGUyIiwgInNoaWZ0Q2xpY2tTdXBwb3J0IiwgImNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQiLCAiUXVpY2tGb3JtIiwgImdldEVsZW1lbnRzIiwgInBsYWNlaG9sZGVyIiwgIl9pMiIsICJfYXJyIiwgImF0dCIsICJfaTMiLCAiX2FycjIiLCAiX2k0IiwgIl9hcnIzIiwgIm1pbiIsICJtYXgiLCAiUE9TSVRJVkVfSU5GSU5JVFkiLCAibGlzdE5vZGUiLCAibW9yZSIsICJuZXdOb2RlIiwgInN1Ymxpc3QiLCAiYXJlYSIsICJjb3VudGVyIiwgInN0b3BQcm9wYWdhdGlvbiIsICJtb3JlQnV0dG9uIiwgInN1YmxhYmVsIiwgInJlbW92ZSIsICJtYXhsZW5ndGgiLCAiZWxlbSIsICJtb3JlYnV0dG9uIiwgImxpc3Rub2RlIiwgIm5vZGVfIiwgImlucHV0bm9kZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAicmVtb3ZlQnV0dG9uIiwgInJlc3VsdCIsICJsYWJlbEVsZW1lbnQiLCAiY29scyIsICJyb3dzIiwgInJlcXVpcmVkIiwgInJlYWRvbmx5IiwgIkVycm9yIiwgInRvU3RyaW5nIiwgImV4dHJhIiwgIiRkYXRhIiwgInRvb2x0aXBUZXh0IiwgInRvb2x0aXBCdXR0b24iLCAidGltZXIiLCAicmVtb3ZlVG9vbHRpcCIsICJjbGVhclRpbWVvdXQiLCAic2hvd1Rvb2x0aXAiLCAidGV4dENvbnRlbnQiLCAiYm9keSIsICJidXR0b25SZWN0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJ0b29sdGlwUmVjdCIsICJ0b3AiLCAiYm90dG9tIiwgImhlaWdodCIsICJpbm5lckhlaWdodCIsICJNYXRoIiwgImxlZnQiLCAid2lkdGgiLCAiaW5uZXJXaWR0aCIsICJvbiIsICJtb3VzZWVudGVyIiwgInNldFRpbWVvdXQiLCAibW91c2VsZWF2ZSIsICJjbGljayIsICJfUXVpY2tGb3JtIiwgInJvb3QiLCAicmV0IiwgImdldElucHV0RGF0YSIsICJfaTUiLCAiX0FycmF5JGZyb20iLCAiQXJyYXkiLCAiZnJvbSIsICJmaWVsZCIsICJmaWVsZE5hbWVOb3JtIiwgImRhdGFzZXQiLCAidmFsIiwgInRyaW0iLCAiZmllbGROYW1lIiwgIiRmb3JtIiwgImVzY2FwZVNlbGVjdG9yIiwgIiRlbGVtZW50cyIsICJmaW5kIiwgInRvQXJyYXkiLCAiZ2V0Q2hlY2tib3hPclJhZGlvIiwgImVsZW1lbnRBcnJheSIsICJmb3VuZCIsICJmaWx0ZXIiLCAiZ2V0RWxlbWVudENvbnRhaW5lciIsICJIVE1MRmllbGRTZXRFbGVtZW50IiwgIkhUTUxEaXZFbGVtZW50IiwgIkhUTUxIZWFkaW5nRWxlbWVudCIsICJnZXRFbGVtZW50TGFiZWxPYmplY3QiLCAiSFRNTFRleHRBcmVhRWxlbWVudCIsICJnZXRFbGVtZW50TGFiZWwiLCAiZmlyc3RDaGlsZCIsICJzZXRFbGVtZW50TGFiZWwiLCAibGFiZWxUZXh0IiwgIm92ZXJyaWRlRWxlbWVudExhYmVsIiwgInRlbXBvcmFyeUxhYmVsVGV4dCIsICJoYXNBdHRyaWJ1dGUiLCAicmVzZXRFbGVtZW50TGFiZWwiLCAiZ2V0QXR0cmlidXRlIiwgInNldEVsZW1lbnRWaXNpYmlsaXR5IiwgInZpc2liaWxpdHkiLCAidG9nZ2xlIiwgInNldEVsZW1lbnRUb29sdGlwVmlzaWJpbGl0eSIsICJxdWlja0Zvcm0iLCAiSFRNTEZvcm1FbGVtZW50IiwgInByb3RvdHlwZSIsICJnZXRDaGVja2VkIiwgInJldHVybkFycmF5IiwgIkhUTUxTZWxlY3RFbGVtZW50IiwgIm9wdGlvbnMiLCAib3B0aW9uIiwgIkhUTUxJbnB1dEVsZW1lbnQiLCAiZ2V0VW5jaGVja2VkIiwgImlzSVB2NkFkZHJlc3MiLCAidG9VcHBlckNhc2UiLCAiYWJicmV2UG9zIiwgIkNJRFJTdGFydCIsICJhZGRyZXNzRW5kIiwgInJlcGVhdCIsICJwYWQiLCAicmVwbGFjZW1lbnQiLCAic3BsaXQiLCAiaXNSYW5nZSIsICJpcDIiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJpc0FycmF5IiwgIlR5cGVFcnJvciIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJzdHJpbmcyIiwgInBhdHRlcm4iLCAiaXNJbmZpbml0eSIsICJleHBpcnkiLCAiZm9ybWF0VGltZSIsICJ0aW1lIiwgIm0iLCAid2dVTFMiLCAiYXBwZW5kUHVuY3R1YXRpb24iLCAicHVuY3R1YXRpb24iLCAic2VhcmNoIiwgImFycmF5IiwgInVuaXEiLCAiYXJyIiwgIml0ZW0iLCAiaWR4IiwgImR1cHMiLCAiY2h1bmsiLCAibnVtQ2h1bmtzIiwgImNlaWwiLCAiVW5iaW5kZXIiLCAicHJlZml4IiwgInBvc3RmaXgiLCAiaGlzdG9yeSIsICJyYW5kb20iLCAicmUiLCAiUmVnRXhwIiwgImdldENhbGxiYWNrIiwgImhhc093biIsICJzZWxmIiwgIk1vcmViaXRzRGF0ZSIsICJfZCIsICJtb250aHNTaG9ydCIsICJkYXlzIiwgImRheXNTaG9ydCIsICJyZWxhdGl2ZVRpbWVzIiwgInRoaXNEYXkiLCAicHJldkRheSIsICJuZXh0RGF5IiwgInRoaXNXZWVrIiwgInBhc3RXZWVrIiwgIm90aGVyIiwgInVuaXRNYXAiLCAic2Vjb25kcyIsICJtaW51dGVzIiwgImhvdXJzIiwgIndlZWtzIiwgInllYXJzIiwgImFyZ3MiLCAiX3RoaXMkX2QiLCAicGFyYW0iLCAidGVzdCIsICJkaWdpdE1hdGNoIiwgIkRhdGUiLCAiVVRDIiwgImRhdGVQYXJ0cyIsICJSZWZsZWN0IiwgImFwcGx5IiwgImlzVmFsaWQiLCAibG9nIiwgImlzTmFOIiwgImdldFRpbWUiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJnZXRVVENNb250aE5hbWUiLCAiX01vcmViaXRzJGRhdGUkbG9jYWxlIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ01vbnRoTmFtZUFiYnJldiIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGUyIiwgImdldE1vbnRoTmFtZSIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGUzIiwgImdldE1vbnRoIiwgImdldE1vbnRoTmFtZUFiYnJldiIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGU0IiwgImdldFVUQ0RheU5hbWUiLCAiX01vcmViaXRzJGRhdGUkbG9jYWxlNSIsICJnZXRVVENEYXkiLCAiZ2V0VVRDRGF5TmFtZUFiYnJldiIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGU2IiwgImdldERheU5hbWUiLCAiX01vcmViaXRzJGRhdGUkbG9jYWxlNyIsICJnZXREYXkiLCAiZ2V0RGF5TmFtZUFiYnJldiIsICJfTW9yZWJpdHMkZGF0ZSRsb2NhbGU4IiwgImFkZCIsICJ1bml0IiwgIm51bSIsICJ1bml0Tm9ybSIsICJnZXR0ZXIiLCAic2V0dGVyIiwgImtleXMiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgImZvcm1hdHN0ciIsICJ6b25lIiwgInVkYXRlIiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInRvSVNPU3RyaW5nIiwgImxlbiIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJfcmVwbGFjZW1lbnRNYXAkbWF0Y2giLCAiY2FsZW5kYXIiLCAiZGF0ZURpZmYiLCAic2V0SG91cnMiLCAibW9udGhIZWFkZXJSZWdleCIsICJnZXRVVENGdWxsWWVhciIsICJtb250aEhlYWRlciIsICJoZWFkZXIiLCAiZGVsZWdhdGVkRGF0ZVByb3RvIiwgIl9pdGVyYXRvcjYiLCAiZ2V0T3duUHJvcGVydHlOYW1lcyIsICJfc3RlcDYiLCAiZnVuYyIsICJhc3NpZ24iLCAid2lraSIsICJudW1iZXJPZkFjdGlvbnNMZWZ0IiwgIm5ick9mQ2hlY2twb2ludHNMZWZ0IiwgImFjdGlvbkNvbXBsZXRlZCIsICJub3RpY2UiLCAic3RhdHVzIiwgInJlZGlyZWN0IiwgImZvbGxvd1JlZGlyZWN0IiwgImxvY2F0aW9uIiwgImhyZWYiLCAidGltZU91dCIsICJ3cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQiLCAiYWRkQ2hlY2twb2ludCIsICJyZW1vdmVDaGVja3BvaW50IiwgIldpa2lBcGkiLCAiY3VycmVudEFjdGlvbiIsICJvblN1Y2Nlc3MiLCAib25FcnJvciIsICJwYXJlbnQiLCAicXVlcnkiLCAicmVzcG9uc2UiLCAicmVzcG9uc2VYTUwiLCAic3RhdGVsZW0iLCAic3RhdHVzVGV4dCIsICJlcnJvckNvZGUiLCAiZXJyb3JUZXh0IiwgImJhZHRva2VuUmV0cnkiLCAic3RhdHVzRWxlbWVudCIsICJfdGhpcyRxdWVyeSIsICJhc3NlcnQiLCAiZXJyb3Jmb3JtYXQiLCAidXNlbGFuZyIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAic2V0U3RhdHVzRWxlbWVudCIsICJmb3JtYXR2ZXJzaW9uIiwgImVycm9yIiwgImFjdGlvbiIsICJ0YWdzIiwgIm1vcmViaXRzV2lraUNoYW5nZVRhZyIsICJzZXRQYXJlbnQiLCAicG9zdCIsICJjYWxsZXJBamF4UGFyYW1ldGVycyIsICJxdWVyeVN0cmluZ0FyciIsICJfaTYiLCAiX09iamVjdCRlbnRyaWVzMiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicXVlcnlTdHJpbmciLCAiYWpheHBhcmFtcyIsICJjb250ZXh0IiwgInVybCIsICJ3aWtpU2NyaXB0IiwgImRhdGFUeXBlIiwgImhlYWRlcnMiLCAibW9yZWJpdHNXaWtpQXBpVXNlckFnZW50IiwgImFqYXgiLCAidGhlbiIsICJvbkFQSXN1Y2Nlc3MiLCAiX2pzb25SZXNwb25zZSRlcnJvcnMkIiwgIl9qc29uUmVzcG9uc2UkZXJyb3JzIiwgImpzb25SZXNwb25zZSIsICJlcnJvcnMiLCAiY29kZSIsICJfanNvblJlc3BvbnNlJGVycm9ycyQyIiwgIl9qc29uUmVzcG9uc2UkZXJyb3JzMiIsICJodG1sIiwgIl9qc29uUmVzcG9uc2UkZXJyb3JzJDMiLCAiX2pzb25SZXNwb25zZSRlcnJvcnMzIiwgIl8kJGZpbmQkZXEkYXR0ciIsICJlcSIsICJhdHRyIiwgInJldHVybkVycm9yIiwgImNhbGwiLCAiaW5mbyIsICJEZWZlcnJlZCIsICJyZXNvbHZlV2l0aCIsICJvbkFQSWZhaWx1cmUiLCAiZXJyb3JUaHJvd24iLCAiYXBpIiwgImdldFRva2VuIiwgInRva2VuIiwgInJlamVjdFdpdGgiLCAiZ2V0U3RhdHVzRWxlbWVudCIsICJnZXRFcnJvckNvZGUiLCAiZ2V0RXJyb3JUZXh0IiwgImdldFhNTCIsICJnZXRSZXNwb25zZSIsICJzZXRBcGlVc2VyQWdlbnQiLCAidWEiLCAidG9rZW5BcGkiLCAibWV0YSIsICJhcGlvYmoiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRDYWNoZWRKc29uIiwgInRpdGxlIiwgInByb3AiLCAidGl0bGVzIiwgInJ2c2xvdHMiLCAicnZwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInVubGluayIsICJ3aWtpdGV4dDIiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiSlNPTiIsICJwYXJzZSIsICJlbXB0eUZ1bmN0aW9uIiwgIldpa2lQYWdlIiwgImN0eCIsICJwYWdlRXhpc3RzIiwgImVkaXRTdW1tYXJ5IiwgImNoYW5nZVRhZ3MiLCAidGVzdEFjdGlvbnMiLCAiY2FsbGJhY2tQYXJhbWV0ZXJzIiwgInBhZ2VUZXh0IiwgImVkaXRNb2RlIiwgImFwcGVuZFRleHQiLCAicHJlcGVuZFRleHQiLCAibmV3U2VjdGlvblRleHQiLCAibmV3U2VjdGlvblRpdGxlIiwgImNyZWF0ZU9wdGlvbiIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJwYWdlU2VjdGlvbiIsICJtYXhDb25mbGljdFJldHJpZXMiLCAibWF4UmV0cmllcyIsICJmb2xsb3dDcm9zc05zUmVkaXJlY3QiLCAid2F0Y2hsaXN0T3B0aW9uIiwgIndhdGNobGlzdEV4cGlyeSIsICJjcmVhdG9yIiwgInRpbWVzdGFtcCIsICJyZXZlcnRPbGRJRCIsICJtb3ZlRGVzdGluYXRpb24iLCAibW92ZVRhbGtQYWdlIiwgIm1vdmVTdWJwYWdlcyIsICJtb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJwcm90ZWN0RWRpdCIsICJwcm90ZWN0TW92ZSIsICJwcm90ZWN0Q3JlYXRlIiwgInByb3RlY3RDYXNjYWRlIiwgImxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJwYWdlTG9hZGVkIiwgImNzcmZUb2tlbiIsICJsb2FkVGltZSIsICJsYXN0RWRpdFRpbWUiLCAicGFnZUlEIiwgImNvbnRlbnRNb2RlbCIsICJyZXZlcnRDdXJJRCIsICJyZXZlcnRVc2VyIiwgIndhdGNoZWQiLCAiZnVsbHlQcm90ZWN0ZWQiLCAic3VwcHJlc3NQcm90ZWN0V2FybmluZyIsICJjb25mbGljdFJldHJpZXMiLCAicmV0cmllcyIsICJvbkxvYWRTdWNjZXNzIiwgIm9uTG9hZEZhaWx1cmUiLCAib25TYXZlU3VjY2VzcyIsICJvblNhdmVGYWlsdXJlIiwgIm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgIm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIiwgIm9uTW92ZVN1Y2Nlc3MiLCAib25Nb3ZlRmFpbHVyZSIsICJvbkRlbGV0ZVN1Y2Nlc3MiLCAib25EZWxldGVGYWlsdXJlIiwgIm9uVW5kZWxldGVTdWNjZXNzIiwgIm9uVW5kZWxldGVGYWlsdXJlIiwgIm9uUHJvdGVjdFN1Y2Nlc3MiLCAib25Qcm90ZWN0RmFpbHVyZSIsICJsb2FkUXVlcnkiLCAibG9hZEFwaSIsICJzYXZlQXBpIiwgImxvb2t1cENyZWF0aW9uQXBpIiwgIm1vdmVBcGkiLCAibW92ZVByb2Nlc3NBcGkiLCAicGF0cm9sQXBpIiwgInBhdHJvbFByb2Nlc3NBcGkiLCAiZGVsZXRlQXBpIiwgImRlbGV0ZVByb2Nlc3NBcGkiLCAidW5kZWxldGVBcGkiLCAidW5kZWxldGVQcm9jZXNzQXBpIiwgInByb3RlY3RBcGkiLCAicHJvdGVjdFByb2Nlc3NBcGkiLCAibG9hZCIsICJvbkZhaWx1cmUiLCAiaW5wcm9wIiwgImludGVzdGFjdGlvbnMiLCAiY3VydGltZXN0YW1wIiwgInJ2bGltaXQiLCAicnZzdGFydGlkIiwgInJlZGlyZWN0cyIsICJydnNlY3Rpb24iLCAiZm5Mb2FkU3VjY2VzcyIsICJzYXZlIiwgImNhblVzZU13VXNlclRva2VuIiwgImZuQ2FuVXNlTXdVc2VyVG9rZW4iLCAiY29uZmlybSIsICJzdW1tYXJ5IiwgInVzZXIiLCAid2F0Y2hsaXN0IiwgImZuQXBwbHlXYXRjaGxpc3RFeHBpcnkiLCAid2F0Y2hsaXN0ZXhwaXJ5IiwgInNlY3Rpb24iLCAibWlub3IiLCAibm90bWlub3IiLCAiYm90IiwgImFwcGVuZHRleHQiLCAicHJlcGVuZHRleHQiLCAic2VjdGlvbnRpdGxlIiwgInVuZG8iLCAidW5kb2FmdGVyIiwgImJhc2V0aW1lc3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZm5TYXZlU3VjY2VzcyIsICJmblNhdmVFcnJvciIsICJmbkF1dG9TYXZlIiwgInByZXBlbmQiLCAibmV3U2VjdGlvbiIsICJnZXRQYWdlTmFtZSIsICJnZXRQYWdlVGV4dCIsICJzZXRQYWdlVGV4dCIsICJzZXRBcHBlbmRUZXh0IiwgInNldFByZXBlbmRUZXh0IiwgInNldE5ld1NlY3Rpb25UZXh0IiwgInNldE5ld1NlY3Rpb25UaXRsZSIsICJzZXRFZGl0U3VtbWFyeSIsICJzZXRDaGFuZ2VUYWdzIiwgInNldENyZWF0ZU9wdGlvbiIsICJzZXRNaW5vckVkaXQiLCAic2V0Qm90RWRpdCIsICJzZXRQYWdlU2VjdGlvbiIsICJzZXRNYXhDb25mbGljdFJldHJpZXMiLCAic2V0TWF4UmV0cmllcyIsICJzZXRXYXRjaGxpc3QiLCAic2V0V2F0Y2hsaXN0RXhwaXJ5IiwgInNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyIsICJzZXRGb2xsb3dSZWRpcmVjdCIsICJzZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAiZmxhZyIsICJzZXRNb3ZlRGVzdGluYXRpb24iLCAiZGVzdGluYXRpb24iLCAic2V0TW92ZVRhbGtQYWdlIiwgInNldE1vdmVTdWJwYWdlcyIsICJzZXRNb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJzZXRFZGl0UHJvdGVjdGlvbiIsICJzZXRNb3ZlUHJvdGVjdGlvbiIsICJzZXRDcmVhdGVQcm90ZWN0aW9uIiwgInNldENhc2NhZGluZ1Byb3RlY3Rpb24iLCAic2V0T2xkSUQiLCAib2xkSUQiLCAiZ2V0Q3VycmVudElEIiwgImdldFJldmlzaW9uVXNlciIsICJnZXRMYXN0RWRpdFRpbWUiLCAic2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImdldENhbGxiYWNrUGFyYW1ldGVycyIsICJleGlzdHMiLCAiZ2V0UGFnZUlEIiwgImdldENvbnRlbnRNb2RlbCIsICJnZXRXYXRjaGVkIiwgImdldExvYWRUaW1lIiwgImdldENyZWF0b3IiLCAiZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCAiY2FuRWRpdCIsICJsb29rdXBDcmVhdGlvbiIsICJydmRpciIsICJmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJyZXZlcnQiLCAibW92ZSIsICJmblByZWZsaWdodENoZWNrcyIsICJmblByb2Nlc3NNb3ZlIiwgImZuTmVlZFRva2VuSW5mb1F1ZXJ5IiwgInBhdHJvbCIsICIkYm9keSIsICJwYXRyb2xocmVmIiwgInJjaWQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJmblByb2Nlc3NQYXRyb2wiLCAicGF0cm9sUXVlcnkiLCAicmNwcm9wIiwgInJjdGl0bGUiLCAicmNsaW1pdCIsICJkZWxldGVQYWdlIiwgImZuUHJvY2Vzc0RlbGV0ZSIsICJ1bmRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzVW5kZWxldGUiLCAicHJvdGVjdCIsICJmblByb2Nlc3NQcm90ZWN0IiwgImdldFByZWZpeGVkVGV4dCIsICJlZGl0UmVzdHJpY3Rpb24iLCAicGFnZW9iaiIsICJfcGFnZSRsYXN0cmV2aWQiLCAiZm5DaGVja1BhZ2VOYW1lIiwgInBhZ2UiLCAicmV2IiwgIm1pc3NpbmciLCAicGFnZWlkIiwgImNvbnRlbnRtb2RlbCIsICJlZGl0UHJvdCIsICJwcm90ZWN0aW9uIiwgImZpbmRMYXN0IiwgInByIiwgImxhc3RyZXZpZCIsICJ0ZXN0YWN0aW9ucyIsICJhY3Rpb25zIiwgIl9pNyIsICJfT2JqZWN0JGtleXMiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJpbnZhbGlkIiwgInJlc29sdmVkTmFtZSIsICJvcmlnTnMiLCAiZ2V0TmFtZXNwYWNlSWQiLCAibmV3TnMiLCAibmV3RXhwaXJ5IiwgInJlbCIsICJfcmVsJCIsICJfcmVsJDIiLCAiZWRpdCIsICJsaW5rIiwgImNhcHRjaGEiLCAicHVyZ2VRdWVyeSIsICJwdXJnZUFwaSIsICJzbGVlcCIsICJlcnJvckRhdGEiLCAiYWJ1c2VmaWx0ZXIiLCAiZGVzY3JpcHRpb24iLCAic3BhbSIsICJzcGFtYmxhY2tsaXN0IiwgIm1hdGNoZXMiLCAiaXNUZXh0UmVkaXJlY3QiLCAic29tZSIsICJ0YWciLCAiZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicmV2cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJmblByb2Nlc3NDaGVja3MiLCAiYWN0aW9uTWlzc2luZyIsICJwcm90ZWN0TWlzc2luZyIsICJzYWx0TWlzc2luZyIsICJlZGl0cHJvdCIsICJwYWdlVGl0bGUiLCAidG8iLCAibW92ZXRhbGsiLCAibW92ZXN1YnBhZ2VzIiwgIm5vcmVkaXJlY3QiLCAicmVjZW50Y2hhbmdlcyIsICJ1bnBhdHJvbGxlZCIsICJwYXRyb2xTdGF0IiwgImZuUHJvY2Vzc0RlbGV0ZUVycm9yIiwgImZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IiLCAicHJzIiwgIm1vdmVwcm90IiwgImNyZWF0ZXByb3QiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAic291cmNlIiwgImNhc2NhZGUiLCAicHJvdGVjdGlvbnMiLCAiZXhwaXJ5cyIsICJtaWxsaXNlY29uZHMiLCAiZGVmZXJyZWQiLCAicmVzb2x2ZSIsICJXaWtpUHJldmlldyIsICJwcmV2aWV3Ym94IiwgImJlZ2luUmVuZGVyIiwgImNsb3NlUHJldmlldyIsICJhZGRDbGFzcyIsICJoaWRlIiwgInNlY3Rpb25UaXRsZSIsICJzaG93IiwgInN0YXR1c3NwYW4iLCAiaW5pdCIsICJwc3QiLCAicHJldmlldyIsICJkaXNhYmxlbGltaXRyZXBvcnQiLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgInJlbmRlckFwaSIsICJmblJlbmRlclN1Y2Nlc3MiLCAiaW5uZXJIVE1MIiwgImxvYWRlciIsICJtb2R1bGVzdHlsZXMiLCAibW9kdWxlcyIsICJlbXB0eSIsICJwYXJzZVRlbXBsYXRlIiwgImNvdW50IiwgInVubmFtZWQiLCAiZXF1YWxzIiwgInBhcmFtZXRlcnMiLCAia2V5IiwgImZpbmRQYXJhbSIsICJmaW5hbCIsICJ0ZXN0MyIsICJhdCIsICJwb3AiLCAidGVzdDIiLCAiV2lraVRleHRQYWdlIiwgInJlbW92ZUxpbmsiLCAibGlua1RhcmdldCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm5hbWVzcGFjZUlEIiwgImdldE1haW5UZXh0IiwgImxpbmtSZWdleFN0cmluZyIsICJpc0ZpbGVPckNhdGVnb3J5IiwgImNvbG9uIiwgInNpbXBsZUxpbmtSZWdleCIsICJwaXBlZExpbmtSZWdleCIsICJjb21tZW50T3V0SW1hZ2UiLCAiaW1hZ2UiLCAiaW1hZ2VSZWdleFN0cmluZyIsICJsaW5rc1JlZ2V4IiwgImFsbExpbmtzIiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgImFsbExpbmsiLCAiZ2FsbGVyeUltYWdlUmVnZXgiLCAiZnJlZUltYWdlUmVnZXgiLCAiYWRkVG9JbWFnZUNvbW1lbnQiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAiZ2FsbGVyeVJlZ2V4IiwgIm5ld3RleHQiLCAicmVtb3ZlVGVtcGxhdGUiLCAidGVtcGxhdGUiLCAidGVtcGxhdGVSZWdleFN0cmluZyIsICJhbGxUZW1wbGF0ZXMiLCAiX2l0ZXJhdG9yMSIsICJfc3RlcDEiLCAiYWxsVGVtcGxhdGUiLCAiaW5zZXJ0QWZ0ZXJUZW1wbGF0ZXMiLCAiZmxhZ3MiLCAicHJlUmVnZXgiLCAiZ2V0VGV4dCIsICJ3aWtpdGV4dCIsICJVc2Vyc3BhY2VMb2dnZXIiLCAiaW5pdGlhbFRleHQiLCAiaGVhZGVyTGV2ZWwiLCAibG9nUGFnZU5hbWUiLCAibG9nVGV4dCIsICJzdW1tYXJ5VGV4dCIsICJkZWYiLCAicmVqZWN0IiwgIl9wYWdlb2JqJGdldExvYWRUaW1lIiwgInVzZXJzcGFjZUxvZ2dlciIsICJTdGF0dXMiLCAiX1N0YXR1cyIsICJzdGF0IiwgInN0YXRSYXciLCAidGV4dFJhdyIsICJsaW5rZWQiLCAiZ2VuZXJhdGUiLCAidXBkYXRlIiwgIkVsZW1lbnQiLCAiaGFzQ2hpbGROb2RlcyIsICJlcnJvckV2ZW50IiwgImhhbmRsZXIiLCAicHJpbnRVc2VyVGV4dCIsICJjb21tZW50cyIsICJtZXNzYWdlIiwgInAiLCAiZGl2IiwgIm1hcmdpblRvcCIsICJ3aGl0ZVNwYWNlIiwgImh0bWxOb2RlIiwgImNvbG9yIiwgImpRdWVyeVNlbGVjdG9yIiwgImpRdWVyeUNvbnRleHQiLCAibGFzdENoZWNrYm94IiwgImNsaWNrSGFuZGxlciIsICJjbGlja0hhbmRsZXIyIiwgInRoaXNDYiIsICJzaGlmdEtleSIsICJjYnMiLCAiaW5kZXgiLCAibGFzdEluZGV4IiwgImVuZFN0YXRlIiwgImZpbmlzaCIsICJCYXRjaE9wZXJhdGlvbiIsICJwYWdlTGlzdCIsICJjaHVua1NpemUiLCAicHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMiLCAid29ya2VyIiwgInBvc3RGaW5pc2giLCAiY291bnRTdGFydGVkIiwgImNvdW50RmluaXNoZWQiLCAiY291bnRGaW5pc2hlZFN1Y2Nlc3MiLCAiY3VycmVudENodW5rSW5kZXgiLCAicGFnZUNodW5rcyIsICJydW5uaW5nIiwgInNldFBhZ2VMaXN0IiwgInNldE9wdGlvbiIsICJvcHRpb25OYW1lIiwgIm9wdGlvblZhbHVlIiwgInJ1biIsICJ0b3RhbCIsICJmblN0YXJ0TmV3Q2h1bmsiLCAid29ya2VyU3VjY2VzcyIsICJhcmciLCAiYXJnV2l0aFBhZ2VJbmZvIiwgImZuRG9uZU9uZSIsICJ3b3JrZXJGYWlsdXJlIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAicHJvZ3Jlc3MiLCAicm91bmQiLCAiZmxvb3IiLCAic3RhdHVzU3RyaW5nIiwgImJhdGNoT3BlcmF0aW9uIiwgIlNpbXBsZVdpbmRvdyIsICJfU2ltcGxlV2luZG93IiwgImJ1dHRvbnMiLCAiaGFzRm9vdGVyTGlua3MiLCAic2NyaXB0TmFtZSIsICJmcmFtZSIsICJvdmVybGF5IiwgIm1vZGFsIiwgInpJbmRleENvdW50ZXIiLCAic2V0QnV0dG9uc0VuYWJsZWQiLCAiZW5hYmxlZCIsICJ3aWR0aE51bSIsICJidWlsZEZyYW1lIiwgInRhYkluZGV4IiwgImRpc3BsYXkiLCAidGl0bGViYXIiLCAiY2xvc2VCdXR0b24iLCAicHJldmVudERlZmF1bHQiLCAiY2xvc2UiLCAiYnV0dG9uIiwgImNsb3Nlc3QiLCAicmVjdCIsICJvZmZzZXRYIiwgImNsaWVudFgiLCAib2Zmc2V0WSIsICJjbGllbnRZIiwgIm9uTW92ZSIsICJtb3ZlRXZlbnQiLCAib25VcCIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImJ1dHRvbnBhbmUiLCAiYnV0dG9uc3BhbiIsICJsaW5rc3NwYW4iLCAiZm9jdXMiLCAiekluZGV4IiwgImlzQ29ubmVjdGVkIiwgInRpdGxlU3BhbiIsICJzY3JpcHRuYW1lc3BhbiIsICJzZXR1cFRvb2x0aXBzIiwgInBnIiwgImRpZmYiLCAicmFuU2V0dXBUb29sdGlwc0FscmVhZHkiLCAiY2VudGVyIiwgInNldEhlaWdodCIsICJwb3NpdGlvblRvcCIsICJzZXRUaXRsZSIsICJzZXRTY3JpcHROYW1lIiwgInNldFdpZHRoIiwgIm1heEhlaWdodCIsICJzZXRDb250ZW50IiwgInB1cmdlQ29udGVudCIsICJhZGRDb250ZW50IiwgImVhY2giLCAiX2tleSIsICJfdmFsdWUkZ2V0QXR0cmlidXRlIiwgImNoaWxkTm9kZXMiLCAiYWRkRm9vdGVyTGluayIsICJ3aWtpUGFnZSIsICJwcmVwIiwgImZvb3RlcmxpbmtzIiwgImJ1bGxldCIsICJzZXRNb2RhbGl0eSIsICJzaW1wbGVXaW5kb3ciXQp9Cg==
