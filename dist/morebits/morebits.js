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
//! src/morebits/morebits.js
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
var import_ext_gadget2 = require("ext.gadget.i18n");
/*! Twinkle.js - morebits.js */
(function morebits($) {
  const Morebits = {};
  window.Morebits = Morebits;
  Morebits.l10n = {
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
     *
     * @param {string} str
     * @returns {number[] | null}
     */
    signatureTimestampFormat: (str) => {
      const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/;
      const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/;
      const match = rgxUTC.exec(str) || rgxCST.exec(str);
      const matchCST = rgxCST.exec(str);
      if (!match) {
        return null;
      }
      const month = Morebits.date.localeData.months.indexOf(match[4]);
      if (month === -1) {
        return null;
      }
      return matchCST ? [match[1], match[2] - 1, match[3], match[4] - 8, match[5]] : [match[1], match[2] - 1, match[3], match[4], match[5]];
    }
  };
  Morebits.userIsInGroup = (group) => {
    return mw.config.get("wgUserGroups").includes(group) || mw.config.get("wgGlobalGroups").includes(group);
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
    const [firstChar] = pageName;
    const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
    if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
      return "[".concat(mw.Title.phpCharToUpper(firstChar)).concat(firstChar.toLowerCase(), "]").concat(remainder);
    }
    return Morebits.string.escapeRegExp(firstChar) + remainder;
  };
  Morebits.createHtml = (input) => {
    const fragment = document.createDocumentFragment();
    if (!input) {
      return fragment;
    }
    input = (0, import_ext_gadget.generateArray)(input);
    var _iterator = _createForOfIteratorHelper(input), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        if (element instanceof Node) {
          fragment.appendChild(element);
        } else {
          var _iterator2 = _createForOfIteratorHelper($.parseHTML(Morebits.createHtml.renderWikilinks(element))), _step2;
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
  Morebits.createHtml.renderWikilinks = (text) => {
    const ub = new Morebits.unbinder(text);
    ub.unbind("<code>", "</code>");
    ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
      target || (target = text_);
      return '<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl(target), '" title="').concat(target.replace(/"/g, "&#34;"), '">').concat(text_, "</a>");
    });
    return ub.rebind();
  };
  Morebits.namespaceRegex = (namespaces) => {
    namespaces = (0, import_ext_gadget.generateArray)(namespaces);
    const aliases = [];
    let regex;
    for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
      const [name, number] = _Object$entries[_i];
      if (namespaces.includes(number)) {
        aliases[aliases.length] = [...name].map((char) => {
          return Morebits.pageNameRegex(char);
        }).join("");
      }
    }
    switch (aliases.length) {
      case 0:
        regex = "";
        break;
      case 1:
        [regex] = aliases;
        break;
      default:
        regex = "(?:".concat(aliases.join("|"), ")");
        break;
    }
    return regex;
  };
  Morebits.quickForm = function(event, eventType) {
    this.root = new Morebits.quickForm.element({
      type: "form",
      event,
      eventType
    });
  };
  Morebits.quickForm.prototype.render = function() {
    const ret = this.root.render();
    ret.names = {};
    return ret;
  };
  Morebits.quickForm.prototype.append = function(data) {
    return this.root.append(data);
  };
  Morebits.quickForm.element = function(data) {
    this.data = data;
    this.childs = [];
  };
  Morebits.quickForm.element.id = 0;
  Morebits.quickForm.element.prototype.append = function(data) {
    let child;
    if (data instanceof Morebits.quickForm.element) {
      child = data;
    } else {
      child = new Morebits.quickForm.element(data);
    }
    this.childs[this.childs.length] = child;
    return child;
  };
  Morebits.quickForm.element.prototype.render = function(internalSubgroupId) {
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
  };
  Morebits.quickForm.element.prototype.compute = function(data, inId) {
    let node;
    let childContainer = null;
    let label;
    const id = "".concat(inId ? "".concat(inId, "_") : "", "node_").concat(Morebits.quickForm.element.id++);
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
      case "fragment":
        node = document.createDocumentFragment();
        return [node, node];
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
          select.setAttribute("size", data.size);
        }
        if (data.disabled) {
          select.disabled = true;
        }
        select.setAttribute("name", data.name);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
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
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
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
          for (i = 0; i < data.list.length; ++i) {
            const curId = "".concat(id, "_").concat(i);
            current = data.list[i];
            let curDiv;
            if (current.type === "header") {
              curDiv = node.appendChild(document.createElement("h6"));
              curDiv.appendChild(document.createTextNode(current.label));
              if (current.tooltip) {
                Morebits.quickForm.element.generateTooltip(curDiv, current);
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
              Morebits.quickForm.element.generateTooltip(label, current);
            }
            if (current.style) {
              label.setAttribute("style", current.style);
            }
            let event;
            if (current.subgroup) {
              let tmpgroup = current.subgroup;
              tmpgroup = (0, import_ext_gadget.generateArray)(tmpgroup);
              const subgroupRaw = new Morebits.quickForm.element({
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
                if (e.target.checked) {
                  e.target.parentNode.appendChild(e.target.subgroup);
                  if (e.target.type === "radio") {
                    const {
                      name
                    } = e.target;
                    if (e.target.form.names[name] !== void 0) {
                      e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                    }
                    e.target.form.names[name] = e.target;
                  }
                } else {
                  e.target.parentNode.removeChild(e.target.subgroup);
                }
              };
              subnode.addEventListener("change", event, true);
              if (current.checked) {
                subnode.parentNode.appendChild(subgroup);
              }
            } else if (data.type === "radio") {
              event = (e) => {
                if (e.target.checked) {
                  const {
                    name
                  } = e.target;
                  if (e.target.form.names[name] !== void 0) {
                    e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                  }
                  delete e.target.form.names[name];
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
          Morebits.checkboxShiftClickSupport(Morebits.quickForm.getElements(node, data.name));
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
              subnode.setAttribute(att, data[att]);
            }
          }
        }
        for (var _i3 = 0, _arr2 = ["value", "size", "placeholder", "maxlength"]; _i3 < _arr2.length; _i3++) {
          const att = _arr2[_i3];
          if (data[att]) {
            subnode.setAttribute(att, data[att]);
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
            const newNode = new Morebits.quickForm.element(e.target.sublist);
            e.target.area.appendChild(newNode.render());
            if (++e.target.counter >= e.target.max) {
              e.target.disabled = true;
            }
            e.stopPropagation();
          }
        });
        node.appendChild(more[0]);
        const [, moreButton] = more;
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
          const elem = new Morebits.quickForm.element(sublist);
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
          subnode.setAttribute("size", data.size);
        }
        if (data.maxlength) {
          subnode.setAttribute("maxlength", data.maxlength);
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        if (data.remove) {
          const remove = this.compute({
            type: "button",
            label: "移除",
            event: (e) => {
              const list = e.target.listnode;
              const node_ = e.target.inputnode;
              const more = e.target.morebutton;
              list.removeChild(node_);
              --more.counter;
              more.removeAttribute("disabled");
              e.stopPropagation();
            }
          });
          node.appendChild(remove[0]);
          const [, removeButton] = remove;
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
          subnode.setAttribute("cols", data.cols);
        }
        if (data.rows) {
          subnode.setAttribute("rows", data.rows);
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
      Morebits.quickForm.element.generateTooltip(label || node, data);
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
  };
  Morebits.quickForm.element.generateTooltip = (node, data) => {
    const tooltipButton = node.appendChild(document.createElement("span"));
    tooltipButton.className = "morebits-tooltipButton";
    tooltipButton.title = data.tooltip;
    tooltipButton.appendChild(document.createTextNode("?"));
    $(tooltipButton).tooltip({
      position: {
        my: "left top",
        at: "center bottom",
        collision: "flipfit"
      },
      // Deprecated in UI 1.12, but MW stuck on 1.9.2 indefinitely; see #398 and T71386
      tooltipClass: "morebits-ui-tooltip"
    });
  };
  Morebits.quickForm.getInputData = (form) => {
    const result = {};
    var _iterator5 = _createForOfIteratorHelper(form.elements), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const field = _step5.value;
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
            if (field.dataset.single) {
              result[fieldNameNorm] = field.checked;
            } else {
              result[fieldNameNorm] || (result[fieldNameNorm] = []);
              if (field.checked) {
                result[fieldNameNorm][result[fieldNameNorm].length] = field.value;
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
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return result;
  };
  Morebits.quickForm.getElements = (form, fieldName) => {
    const $form = $(form);
    fieldName = $.escapeSelector(fieldName);
    let $elements = $form.find('[name="'.concat(fieldName, '"]'));
    if ($elements.length > 0) {
      return $elements.toArray();
    }
    $elements = $form.find("#".concat(fieldName));
    return $elements.toArray();
  };
  Morebits.quickForm.getCheckboxOrRadio = (elementArray, value) => {
    const found = elementArray.filter((element) => {
      return element.value === value;
    });
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };
  Morebits.quickForm.getElementContainer = (element) => {
    if (element instanceof HTMLFieldSetElement || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    }
    return element.parentNode;
  };
  Morebits.quickForm.getElementLabelObject = (element) => {
    if (element.type === "button" || element.type === "submit" || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    } else if (element instanceof HTMLFieldSetElement) {
      return element.querySelector("legend");
    } else if (element instanceof HTMLTextAreaElement) {
      return element.parentNode.querySelector("h5");
    }
    return element.parentNode.querySelector("label");
  };
  Morebits.quickForm.getElementLabel = (element) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return null;
    }
    return labelElement.firstChild.textContent;
  };
  Morebits.quickForm.setElementLabel = (element, labelText) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return false;
    }
    labelElement.firstChild.textContent = labelText;
    return true;
  };
  Morebits.quickForm.overrideElementLabel = (element, temporaryLabelText) => {
    if (!element.hasAttribute("data-oldlabel")) {
      element.setAttribute("data-oldlabel", Morebits.quickForm.getElementLabel(element));
    }
    return Morebits.quickForm.setElementLabel(element, temporaryLabelText);
  };
  Morebits.quickForm.resetElementLabel = (element) => {
    if (element.hasAttribute("data-oldlabel")) {
      return Morebits.quickForm.setElementLabel(element, element.getAttribute("data-oldlabel"));
    }
    return null;
  };
  Morebits.quickForm.setElementVisibility = (element, visibility) => {
    $(element).toggle(visibility);
  };
  Morebits.quickForm.setElementTooltipVisibility = (element, visibility) => {
    $(Morebits.quickForm.getElementContainer(element)).find(".morebits-tooltipButton").toggle(visibility);
  };
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
        if (options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
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
        if (elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
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
        if (!options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
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
        if (!elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  Morebits.ip = {
    /**
     * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
     * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
     * function from the IPUtils library.  Addresses are verbose, uppercase,
     * normalized, and expanded to 8 words.
     *
     * @param {string} address - The IPv6 address, with or without CIDR.
     * @returns {string}
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
    isRange: (ip) => {
      return mw.util.isIPAddress(ip, true) && !mw.util.isIPAddress(ip);
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
    validCIDR: (ip) => {
      if (Morebits.ip.isRange(ip)) {
        const subnet = Number.parseInt(ip.match(/\/(\d{1,3})$/)[1], 10);
        if (subnet) {
          if (mw.util.isIPv6Address(ip, true)) {
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
  Morebits.string = {
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
        var _iterator6 = _createForOfIteratorHelper(skiplist), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const element = _step6.value;
            if (str.slice(i, i + element.length) === element) {
              i += element.length - 1;
              continue;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
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
    safeReplace: (string, pattern, replacement) => {
      return string.replace(pattern, replacement.replace(/\$/g, "$$$$"));
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
        return m[1] + (0, import_ext_gadget2.wgULS)("小时", "小時");
      }
      if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
        return "".concat(m[1], "天");
      }
      if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
        return m[1] + (0, import_ext_gadget2.wgULS)("周", "週");
      }
      if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
        return m[1] + (0, import_ext_gadget2.wgULS)("个月", "個月");
      }
      if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
        return "".concat(m[1], "年");
      }
      if (Morebits.string.isInfinity(time.trim())) {
        return (0, import_ext_gadget2.wgULS)("无限期", "無限期");
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
  Morebits.array = {
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
  Morebits.select2 = {
    matchers: {
      /**
       * Custom matcher in which if the optgroup name matches, all options in that
       * group are shown, like in jquery.chosen.
       *
       * @param {*} params
       * @param {*} data
       */
      optgroupFull: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (result && params.term && data.text.toUpperCase().includes(params.term.toUpperCase())) {
          result.children = data.children;
        }
        return result;
      },
      /**
       * Custom matcher that matches from the beginning of words only.
       *
       * @param {*} params
       * @param {*} data
       */
      wordBeginning: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (!params.term || result && new RegExp("\\b".concat(mw.util.escapeRegExp(params.term)), "i").test(result.text)) {
          return result;
        }
        return null;
      }
    },
    /**
     * Underline matched part of options.
     *
     * @param {*} data
     */
    highlightSearchMatches: (data) => {
      const searchTerm = Morebits.select2SearchQuery;
      if (!searchTerm || data.loading) {
        return data.text;
      }
      const idx = data.text.toUpperCase().indexOf(searchTerm.toUpperCase());
      if (idx === -1) {
        return data.text;
      }
      return $("<span>").append(data.text.slice(0, idx), $("<span>").css("text-decoration", "underline").text(data.text.slice(idx, idx + searchTerm.length)), data.text.slice(idx + searchTerm.length));
    },
    /**
     * Intercept query as it is happening, for use in highlightSearchMatches.
     *
     * @param {*} params
     */
    queryInterceptor: (params) => {
      Morebits.select2SearchQuery = params && params.term;
    },
    /**
     * Open dropdown and begin search when the `.select2-selection` has
     * focus and a key is pressed.
     *
     * @param {KeyboardEvent} ev
     * @see {@link https://github.com/select2/select2/issues/3279#issuecomment-442524147}
     */
    autoStart: (ev) => {
      if (ev.which < 48) {
        return;
      }
      let target = $(ev.target).closest(".select2-container");
      if (!target.length) {
        return;
      }
      target = target.prev();
      target.select2("open");
      const search = target.data("select2").dropdown.$search || target.data("select2").selection.$search;
      search[0].focus();
    }
  };
  Morebits.unbinder = function(string) {
    if (typeof string !== "string") {
      throw new TypeError("not a string");
    }
    this.content = string;
    this.counter = 0;
    this.history = {};
    this.prefix = "%UNIQ::".concat(Math.random(), "::");
    this.postfix = "::UNIQ%";
  };
  Morebits.unbinder.prototype = {
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
    },
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
    },
    prefix: null,
    // %UNIQ::0.5955981644938324::
    postfix: null,
    // ::UNIQ%
    content: null,
    // string
    counter: null,
    // 0++
    history: null
    // {}
  };
  Morebits.unbinder.getCallback = (self) => {
    return (match) => {
      const current = self.prefix + self.counter + self.postfix;
      self.history[current] = match;
      ++self.counter;
      return current;
    };
  };
  Morebits.date = function(...args) {
    var _this$_d;
    if (args.length === 1) {
      const [param] = args;
      if (/^\d{14}$/.test(param)) {
        const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(param);
        if (digitMatch) {
          this._d = new Date(Reflect.apply(Date.UTC, null, [digitMatch[1], digitMatch[2] - 1, digitMatch[3], digitMatch[4], digitMatch[5], digitMatch[6]]));
        }
      } else if (typeof param === "string") {
        const dateParts = Morebits.l10n.signatureTimestampFormat(param);
        if (dateParts) {
          this._d = new Date(Date.UTC.apply(null, dateParts));
        }
      }
    }
    (_this$_d = this._d) !== null && _this$_d !== void 0 ? _this$_d : this._d = new (Function.prototype.bind.apply(Date, [Date, ...(0, import_ext_gadget.generateArray)(args)]))();
    if (!this.isValid()) {
      mw.log.warn("Invalid Morebits.date initialisation:", args);
    }
  };
  Morebits.date.localeData = {
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
  Morebits.date.unitMap = {
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    days: "Date",
    weeks: "Week",
    // Not a function but handled in `add` through cunning use of multiplication
    months: "Month",
    years: "FullYear"
  };
  Morebits.date.prototype = {
    /** @returns {boolean} */
    isValid() {
      return !Number.isNaN(this.getTime());
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isBefore(date) {
      return this.getTime() < date.getTime();
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isAfter(date) {
      return this.getTime() > date.getTime();
    },
    /** @returns {string} */
    getUTCMonthName() {
      return Morebits.date.localeData.months[this.getUTCMonth()];
    },
    /** @returns {string} */
    getUTCMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getUTCMonth()];
    },
    /** @returns {string} */
    getMonthName() {
      return Morebits.date.localeData.months[this.getMonth()];
    },
    /** @returns {string} */
    getMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getMonth()];
    },
    /** @returns {string} */
    getUTCDayName() {
      return Morebits.date.localeData.days[this.getUTCDay()];
    },
    /** @returns {string} */
    getUTCDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getUTCDay()];
    },
    /** @returns {string} */
    getDayName() {
      return Morebits.date.localeData.days[this.getDay()];
    },
    /** @returns {string} */
    getDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getDay()];
    },
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
      let num = Number.parseInt(number, 10);
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
        this["set".concat(unitNorm)](this["get".concat(unitNorm)]() + num);
        return this;
      }
      throw new Error('Invalid unit "'.concat(unit, '": Only ').concat(Object.keys(unitMap).join(", "), " are allowed."));
    },
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
    },
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
          return replacementMap[match];
        }
      );
      return unbinder.rebind().replace(/\[(.*?)\]/g, "$1");
    },
    /**
     * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
     * Similar to `calendar` in moment.js, but with time zone support.
     *
     * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
     * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
     * @returns {string}
     */
    calendar(zone) {
      const dateDiff = ((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(this).setHours(0, 0, 0, 0)) / 864e5;
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
    },
    /**
     * Get a regular expression that matches wikitext section titles, such
     * as `==December 2019==` or `=== Jan 2018 ===`.
     *
     * @returns {RegExp}
     */
    monthHeaderRegex() {
      return new RegExp("^(==+)\\s*".concat(this.getUTCFullYear(), "年(?:").concat(this.getUTCMonthName(), "|").concat(this.getUTCMonthNameAbbrev(), ")\\s*\\1"), "mg");
    },
    /**
     * Creates a wikitext section header with the month and year.
     *
     * @param {number} [level=2] - Header level.  Pass 0 for just the text
     * with no wikitext markers (==).
     * @returns {string}
     */
    monthHeader(level) {
      level = Number.parseInt(level, 10);
      level = Number.isNaN(level) ? 2 : level;
      const header = "=".repeat(level);
      const text = "".concat(this.getUTCFullYear(), "年").concat(this.getUTCMonthName());
      if (header.length) {
        return "".concat(header, " ").concat(text, " ").concat(header);
      }
      return text;
    }
  };
  var _iterator7 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype)), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const func = _step7.value;
      if (!["add", "getDayName", "getMonthName"].includes(func)) {
        Morebits.date.prototype[func] = function(...args) {
          return this._d[func](...args);
        };
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
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
        location = Morebits.wiki.actionCompleted.redirect;
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
  Morebits.wiki.api = function(currentAction, query, onSuccess, statusElement, onError) {
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
    this.onSuccess = onSuccess;
    this.onError = onError;
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
  };
  Morebits.wiki.api.prototype = {
    currentAction: "",
    onSuccess: null,
    onError: null,
    parent: window,
    // use global context if there is no parent object
    query: null,
    response: null,
    responseXML: null,
    // use `response` instead; retained for backwards compatibility
    statelem: null,
    // this non-standard name kept for backwards compatibility
    statusText: null,
    // result received from the API, normally "success" or "error"
    errorCode: null,
    // short text error code, if any, as documented in the MediaWiki API
    errorText: null,
    // full error description, if any
    badtokenRetry: false,
    // set to true if this on a retry attempted after a badtoken error
    /**
     * Keep track of parent object for callbacks.
     *
     * @param {*} parent
     */
    setParent(parent) {
      this.parent = parent;
    },
    /** @param {Morebits.status} statusElement */
    setStatusElement(statusElement) {
      this.statelem = statusElement;
      this.statelem.status(this.currentAction);
    },
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
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.query); _i5 < _Object$entries2.length; _i5++) {
        const [i, val] = _Object$entries2[_i5];
        if (Array.isArray(val)) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(val.map(encodeURIComponent).join("|"));
        } else if (val !== void 0) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(val));
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
            this.errorCode = response.errors && response.errors[0].code;
            if (this.query.errorformat === "html") {
              this.errorText = response.errors && response.errors[0].html;
            } else if (this.query.errorformat === "wikitext" || this.query.errorformat === "plaintext") {
              this.errorText = response.errors && response.errors[0].text;
            }
          } else {
            this.errorCode = $(response).find("errors error").eq(0).attr("code");
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
          this.errorText = statusText + (0, import_ext_gadget2.wgULS)("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + (0, import_ext_gadget2.wgULS)("”。", "」。");
          return this.returnError();
        }
      );
    },
    returnError(callerAjaxParameters) {
      if (this.errorCode === "badtoken" && !this.badtokenRetry) {
        this.statelem.warn((0, import_ext_gadget2.wgULS)("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
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
    },
    getStatusElement() {
      return this.statelem;
    },
    getErrorCode() {
      return this.errorCode;
    },
    getErrorText() {
      return this.errorText;
    },
    getXML() {
      return this.responseXML;
    },
    getResponse() {
      return this.response;
    }
  };
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
      const wikitext = response.query.pages[0].revisions[0].slots.main.content;
      return JSON.parse(wikitext);
    });
  };
  let morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js)";
  Morebits.wiki.api.setApiUserAgent = (ua) => {
    morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js".concat(ua ? "; ".concat(ua) : "", ")");
  };
  const morebitsWikiChangeTag = "";
  Morebits.wiki.api.getToken = () => {
    const tokenApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("获取令牌", "取得權杖"), {
      action: "query",
      meta: "tokens",
      type: "csrf",
      format: "json"
    });
    return tokenApi.post().then((apiobj) => {
      return apiobj.response.query.tokens.csrftoken;
    });
  };
  Morebits.wiki.page = function(pageName, status) {
    status || (status = (0, import_ext_gadget2.wgULS)("打开页面“", "打開頁面「") + pageName + (0, import_ext_gadget2.wgULS)("”", "」"));
    const ctx = {
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
    const emptyFunction = () => {
    };
    this.load = function(onSuccess, onFailure) {
      ctx.onLoadSuccess = onSuccess;
      ctx.onLoadFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to load()!");
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadQuery = {
        action: "query",
        prop: "info|revisions",
        inprop: "watched",
        intestactions: "edit",
        // can be expanded
        curtimestamp: "",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        format: "json"
        // don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
      };
      if (ctx.editMode === "all") {
        ctx.loadQuery.rvprop = "content|timestamp";
      } else if (ctx.editMode === "revert") {
        ctx.loadQuery.rvprop = "timestamp";
        ctx.loadQuery.rvlimit = 1;
        ctx.loadQuery.rvstartid = ctx.revertOldID;
      }
      if (ctx.followRedirect) {
        ctx.loadQuery.redirects = "";
      }
      if (typeof ctx.pageSection === "number") {
        ctx.loadQuery.rvsection = ctx.pageSection;
      }
      if (Morebits.userIsSysop) {
        ctx.loadQuery.inprop += "|protection";
      }
      ctx.loadApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("抓取页面……", "抓取頁面……"), ctx.loadQuery, fnLoadSuccess, ctx.statusElement, ctx.onLoadFailure);
      ctx.loadApi.setParent(this);
      ctx.loadApi.post();
    };
    this.save = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      const canUseMwUserToken = fnCanUseMwUserToken("edit");
      if (!ctx.pageLoaded && !canUseMwUserToken) {
        ctx.statusElement.error("Internal error: attempt to save a page that has not been loaded!");
        ctx.onSaveFailure(this);
        return;
      }
      if (!ctx.editSummary) {
        if (ctx.editMode === "new" && ctx.newSectionTitle) {
          ctx.editSummary = "";
        } else {
          ctx.statusElement.error("Internal error: edit summary not set before save!");
          ctx.onSaveFailure(this);
          return;
        }
      }
      if (ctx.fullyProtected && !ctx.suppressProtectWarning && !confirm(ctx.fullyProtected === "infinity" ? (0, import_ext_gadget2.wgULS)("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + (0, import_ext_gadget2.wgULS)("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat((0, import_ext_gadget2.wgULS)("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + (0, import_ext_gadget2.wgULS)("”（到期：", "」（到期：") + new Morebits.date(ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat((0, import_ext_gadget2.wgULS)("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
        ctx.onSaveFailure(this);
        return;
      }
      ctx.retries = 0;
      const query = {
        action: "edit",
        title: ctx.pageName,
        summary: ctx.editSummary,
        token: canUseMwUserToken ? mw.user.tokens.get("csrfToken") : ctx.csrfToken,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (typeof ctx.pageSection === "number") {
        query.section = ctx.pageSection;
      }
      if (ctx.minorEdit) {
        query.minor = true;
      } else {
        query.notminor = true;
      }
      if (ctx.botEdit) {
        query.bot = true;
      }
      switch (ctx.editMode) {
        case "append":
          if (ctx.appendText === null) {
            ctx.statusElement.error("Internal error: append text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.appendtext = ctx.appendText;
          break;
        case "prepend":
          if (ctx.prependText === null) {
            ctx.statusElement.error("Internal error: prepend text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.prependtext = ctx.prependText;
          break;
        case "new":
          if (!ctx.newSectionText) {
            ctx.statusElement.error("Internal error: new section text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.section = "new";
          query.text = ctx.newSectionText;
          query.sectiontitle = ctx.newSectionTitle || ctx.editSummary;
          break;
        case "revert":
          query.undo = ctx.revertCurID;
          query.undoafter = ctx.revertOldID;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
        default:
          query.text = ctx.pageText;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
      }
      if (["recreate", "createonly", "nocreate"].includes(ctx.createOption)) {
        query[ctx.createOption] = "";
      }
      if (canUseMwUserToken && ctx.followRedirect) {
        query.redirect = true;
      }
      ctx.saveApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("保存页面……", "儲存頁面……"), query, fnSaveSuccess, ctx.statusElement, fnSaveError);
      ctx.saveApi.setParent(this);
      ctx.saveApi.post();
    };
    this.append = function(onSuccess, onFailure) {
      ctx.editMode = "append";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.prepend = function(onSuccess, onFailure) {
      ctx.editMode = "prepend";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.newSection = function(onSuccess, onFailure) {
      ctx.editMode = "new";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.getPageName = () => {
      return ctx.pageName;
    };
    this.getPageText = () => {
      return ctx.pageText;
    };
    this.setPageText = (pageText) => {
      ctx.editMode = "all";
      ctx.pageText = pageText;
    };
    this.setAppendText = (appendText) => {
      ctx.editMode = "append";
      ctx.appendText = appendText;
    };
    this.setPrependText = (prependText) => {
      ctx.editMode = "prepend";
      ctx.prependText = prependText;
    };
    this.setNewSectionText = (newSectionText) => {
      ctx.editMode = "new";
      ctx.newSectionText = newSectionText;
    };
    this.setNewSectionTitle = (newSectionTitle) => {
      ctx.editMode = "new";
      ctx.newSectionTitle = newSectionTitle;
    };
    this.setEditSummary = (summary) => {
      ctx.editSummary = summary;
    };
    this.setChangeTags = (tags) => {
      ctx.changeTags = tags;
    };
    this.setCreateOption = (createOption) => {
      ctx.createOption = createOption;
    };
    this.setMinorEdit = (minorEdit) => {
      ctx.minorEdit = minorEdit;
    };
    this.setBotEdit = (botEdit) => {
      ctx.botEdit = botEdit;
    };
    this.setPageSection = (pageSection) => {
      ctx.pageSection = pageSection;
    };
    this.setMaxConflictRetries = (maxConflictRetries) => {
      ctx.maxConflictRetries = maxConflictRetries;
    };
    this.setMaxRetries = (maxRetries) => {
      ctx.maxRetries = maxRetries;
    };
    this.setWatchlist = (watchlistOption, watchlistExpiry) => {
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
          ctx.watchlistOption = "nochange";
          ctx.watchlistExpiry = null;
          break;
        case "unwatch":
          ctx.watchlistOption = "unwatch";
          break;
        case "preferences":
        case "default":
          ctx.watchlistOption = "preferences";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        case "watch":
        case "yes":
        case true:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        default:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistOption;
          break;
      }
    };
    this.setWatchlistExpiry = (watchlistExpiry) => {
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      ctx.watchlistExpiry = watchlistExpiry;
    };
    this.setWatchlistFromPreferences = (watchlistOption) => {
      console.warn("[Morebits] NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
      if (watchlistOption) {
        ctx.watchlistOption = "preferences";
      } else {
        ctx.watchlistOption = "nochange";
      }
    };
    this.setFollowRedirect = (followRedirect, followCrossNsRedirect) => {
      if (ctx.pageLoaded) {
        ctx.statusElement.error("Internal error: cannot change redirect setting after the page has been loaded!");
        return;
      }
      ctx.followRedirect = followRedirect;
      ctx.followCrossNsRedirect = followCrossNsRedirect === void 0 ? ctx.followCrossNsRedirect : followCrossNsRedirect;
    };
    this.setLookupNonRedirectCreator = (flag) => {
      ctx.lookupNonRedirectCreator = flag;
    };
    this.setMoveDestination = (destination) => {
      ctx.moveDestination = destination;
    };
    this.setMoveTalkPage = (flag) => {
      ctx.moveTalkPage = !!flag;
    };
    this.setMoveSubpages = (flag) => {
      ctx.moveSubpages = !!flag;
    };
    this.setMoveSuppressRedirect = (flag) => {
      ctx.moveSuppressRedirect = !!flag;
    };
    this.setEditProtection = (level, expiry) => {
      ctx.protectEdit = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setMoveProtection = (level, expiry) => {
      ctx.protectMove = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCreateProtection = (level, expiry) => {
      ctx.protectCreate = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCascadingProtection = (flag) => {
      ctx.protectCascade = !!flag;
    };
    this.suppressProtectWarning = () => {
      ctx.suppressProtectWarning = true;
    };
    this.setOldID = (oldID) => {
      ctx.revertOldID = oldID;
    };
    this.getCurrentID = () => {
      return ctx.revertCurID;
    };
    this.getRevisionUser = () => {
      return ctx.revertUser;
    };
    this.getLastEditTime = () => {
      return ctx.lastEditTime;
    };
    this.setCallbackParameters = (callbackParameters) => {
      ctx.callbackParameters = callbackParameters;
    };
    this.getCallbackParameters = () => {
      return ctx.callbackParameters;
    };
    this.setStatusElement = (statusElement) => {
      ctx.statusElement = statusElement;
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.exists = () => {
      return ctx.pageExists;
    };
    this.getPageID = () => {
      return ctx.pageID;
    };
    this.getContentModel = () => {
      return ctx.contentModel;
    };
    this.getWatched = () => {
      return ctx.watched;
    };
    this.getLoadTime = () => {
      return ctx.loadTime;
    };
    this.getCreator = () => {
      return ctx.creator;
    };
    this.getCreationTimestamp = () => {
      return ctx.timestamp;
    };
    this.canEdit = () => {
      return !!ctx.testActions && ctx.testActions.includes("edit");
    };
    this.lookupCreation = function(onSuccess, onFailure) {
      ctx.onLookupCreationSuccess = onSuccess;
      ctx.onLookupCreationFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to lookupCreation()!");
        ctx.onLookupCreationFailure(this);
        return;
      }
      const query = {
        action: "query",
        prop: "revisions",
        titles: ctx.pageName,
        rvlimit: 1,
        rvprop: "user|timestamp",
        rvdir: "newer",
        format: "json"
      };
      if (ctx.lookupNonRedirectCreator) {
        query.rvsection = 0;
        query.rvprop += "|content";
      }
      if (ctx.followRedirect) {
        query.redirects = "";
      }
      ctx.lookupCreationApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("抓取页面创建者信息", "抓取頁面建立者資訊"), query, fnLookupCreationSuccess, ctx.statusElement, ctx.onLookupCreationFailure);
      ctx.lookupCreationApi.setParent(this);
      ctx.lookupCreationApi.post();
    };
    this.revert = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      if (!ctx.revertOldID) {
        ctx.statusElement.error("Internal error: revision ID to revert to was not set before revert!");
        ctx.onSaveFailure(this);
        return;
      }
      ctx.editMode = "revert";
      this.load(fnAutoSave, ctx.onSaveFailure);
    };
    this.move = function(onSuccess, onFailure) {
      ctx.onMoveSuccess = onSuccess;
      ctx.onMoveFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "move", ctx.onMoveFailure)) {
        return;
      }
      if (!ctx.moveDestination) {
        ctx.statusElement.error("Internal error: destination page name was not set before move!");
        ctx.onMoveFailure(this);
        return;
      }
      if (fnCanUseMwUserToken("move")) {
        fnProcessMove.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("move");
        ctx.moveApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("获取令牌……", "取得權杖……"), query, fnProcessMove, ctx.statusElement, ctx.onMoveFailure);
        ctx.moveApi.setParent(this);
        ctx.moveApi.post();
      }
    };
    this.patrol = function() {
      if (!Morebits.userIsSysop && !Morebits.userIsInGroup("patroller")) {
        return;
      }
      const $body = $("body");
      if ($body.find(".patrollink").length) {
        const patrolhref = $body.find(".patrollink a").attr("href");
        ctx.rcid = mw.util.getParamValue("rcid", patrolhref);
        fnProcessPatrol(this, this);
      } else {
        const patrolQuery = {
          action: "query",
          prop: "info",
          meta: "tokens",
          type: "patrol",
          // as long as we're querying, might as well get a token
          list: "recentchanges",
          // check if the page is unpatrolled
          titles: ctx.pageName,
          rcprop: "patrolled",
          rctitle: ctx.pageName,
          rclimit: 1,
          format: "json"
        };
        ctx.patrolApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("获取令牌……", "取得權杖……"), patrolQuery, fnProcessPatrol);
        ctx.patrolApi.setParent(this);
        ctx.patrolApi.post();
      }
    };
    this.deletePage = function(onSuccess, onFailure) {
      ctx.onDeleteSuccess = onSuccess;
      ctx.onDeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "delete", ctx.onDeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("delete")) {
        fnProcessDelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("delete");
        ctx.deleteApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("获取令牌……", "取得權杖……"), query, fnProcessDelete, ctx.statusElement, ctx.onDeleteFailure);
        ctx.deleteApi.setParent(this);
        ctx.deleteApi.post();
      }
    };
    this.undeletePage = function(onSuccess, onFailure) {
      ctx.onUndeleteSuccess = onSuccess;
      ctx.onUndeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "undelete", ctx.onUndeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("undelete")) {
        fnProcessUndelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("undelete");
        ctx.undeleteApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("获取令牌……", "取得權杖……"), query, fnProcessUndelete, ctx.statusElement, ctx.onUndeleteFailure);
        ctx.undeleteApi.setParent(this);
        ctx.undeleteApi.post();
      }
    };
    this.protect = function(onSuccess, onFailure) {
      ctx.onProtectSuccess = onSuccess;
      ctx.onProtectFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "protect", ctx.onProtectFailure)) {
        return;
      }
      if (!ctx.protectEdit && !ctx.protectMove && !ctx.protectCreate) {
        ctx.statusElement.error("Internal error: you must set edit and/or move and/or create protection before calling protect()!");
        ctx.onProtectFailure(this);
        return;
      }
      const query = fnNeedTokenInfoQuery("protect");
      ctx.protectApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("获取令牌……", "取得權杖……"), query, fnProcessProtect, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectApi.setParent(this);
      ctx.protectApi.post();
    };
    const fnCanUseMwUserToken = (action) => {
      action || (action = "edit");
      if (ctx.watchlistExpiry && !Morebits.string.isInfinity(ctx.watchlistExpiry)) {
        return false;
      }
      if (ctx.followRedirect) {
        if (!ctx.followCrossNsRedirect) {
          return false;
        }
        if (action !== "edit" || ctx.editMode === "all" || ctx.editMode === "revert") {
          return false;
        }
      }
      if (Morebits.userIsSysop && !ctx.suppressProtectWarning) {
        if (new mw.Title(Morebits.pageNameNorm).getPrefixedText() !== new mw.Title(ctx.pageName).getPrefixedText()) {
          return false;
        }
        const editRestriction = mw.config.get("wgRestrictionEdit");
        if (!editRestriction || editRestriction.includes("sysop")) {
          return false;
        }
      }
      return !!mw.user.tokens.get("csrfToken");
    };
    const fnNeedTokenInfoQuery = (action) => {
      const query = {
        action: "query",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        prop: "info",
        inprop: "watched",
        format: "json"
      };
      if (action !== "move" || Morebits.userIsSysop) {
        query.inprop += "|protection";
      }
      if (ctx.followRedirect && action !== "undelete") {
        query.redirects = "";
      }
      return query;
    };
    const fnAutoSave = (pageobj) => {
      pageobj.save(ctx.onSaveSuccess, ctx.onSaveFailure);
    };
    const fnLoadSuccess = function() {
      const response = ctx.loadApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLoadFailure)) {
        return;
      }
      const [page] = response.pages;
      let rev;
      ctx.pageExists = !page.missing;
      if (ctx.pageExists) {
        [rev] = page.revisions;
        ctx.lastEditTime = rev.timestamp;
        ctx.pageText = rev.content;
        ctx.pageID = page.pageid;
      } else {
        ctx.pageText = "";
        ctx.pageID = 0;
      }
      ctx.csrfToken = response.tokens.csrftoken;
      if (!ctx.csrfToken) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("未能获取编辑令牌。", "未能取得編輯權杖。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
      if (!ctx.loadTime) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("未能获取当前时间戳。", "未能取得當前時間戳。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.contentModel = page.contentmodel;
      ctx.watched = page.watchlistexpiry || page.watched;
      if (Morebits.userIsSysop) {
        const editProt = page.protection.findLast((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        });
        if (editProt) {
          ctx.fullyProtected = editProt.expiry;
        } else {
          ctx.fullyProtected = false;
        }
      }
      ctx.revertCurID = page.lastrevid;
      const testactions = page.actions;
      ctx.testActions = [];
      for (var _i6 = 0, _Object$keys = Object.keys(testactions); _i6 < _Object$keys.length; _i6++) {
        const action = _Object$keys[_i6];
        if (testactions[action]) {
          ctx.testActions[ctx.testActions.length] = action;
        }
      }
      if (ctx.editMode === "revert") {
        ctx.revertCurID = rev && rev.revid;
        if (!ctx.revertCurID) {
          ctx.statusElement.error((0, import_ext_gadget2.wgULS)("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
          ctx.onLoadFailure(this);
          return;
        }
        ctx.revertUser = rev && rev.user;
        if (!ctx.revertUser) {
          if (rev && rev.userhidden) {
            ctx.revertUser = (0, import_ext_gadget2.wgULS)("<用户名已隐藏>", "<使用者名稱已隱藏>");
          } else {
            ctx.statusElement.error((0, import_ext_gadget2.wgULS)("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
            ctx.onLoadFailure(this);
            return;
          }
        }
        ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat((0, import_ext_gadget2.wgULS)("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
      }
      ctx.pageLoaded = true;
      ctx.onLoadSuccess(this);
    };
    const fnCheckPageName = function(response, onFailure) {
      onFailure || (onFailure = emptyFunction);
      const page = response.pages && response.pages[0];
      if (page) {
        if (page.invalid) {
          ctx.statusElement.error((0, import_ext_gadget2.wgULS)("标题不合法：", "標題不合法：".concat(ctx.pageName)));
          onFailure(this);
          return false;
        }
        const resolvedName = page.title;
        if (response.redirects) {
          const origNs = new mw.Title(ctx.pageName).namespace;
          const newNs = new mw.Title(resolvedName).namespace;
          if (origNs !== newNs && !ctx.followCrossNsRedirect) {
            ctx.statusElement.error(ctx.pageName + (0, import_ext_gadget2.wgULS)("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + (0, import_ext_gadget2.wgULS)("，略过", "，略過"));
            onFailure(this);
            return false;
          }
          new Morebits.status((0, import_ext_gadget2.wgULS)("信息", "資訊"), (0, import_ext_gadget2.wgULS)("从 ", "從 ") + ctx.pageName + (0, import_ext_gadget2.wgULS)(" 重定向到 ", " 重新導向到 ") + resolvedName);
        }
        ctx.pageName = resolvedName;
      } else {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("不能解析页面的重定向：", "不能解析頁面的重新導向：") + ctx.pageName);
        onFailure(this);
        ++Morebits.wiki.numberOfActionsLeft;
        return false;
      }
      return true;
    };
    const fnApplyWatchlistExpiry = () => {
      if (ctx.watchlistExpiry) {
        if (!ctx.watched || Morebits.string.isInfinity(ctx.watchlistExpiry)) {
          return true;
        } else if (typeof ctx.watched === "string") {
          let newExpiry;
          const rel = ctx.watchlistExpiry.split(" ");
          try {
            newExpiry = new Morebits.date().add(rel[0], rel[1]);
          } catch {
            newExpiry = new Morebits.date(ctx.watchlistExpiry);
          }
          if (newExpiry.isValid()) {
            if (newExpiry.isAfter(new Morebits.date(ctx.watched))) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    };
    const fnSaveSuccess = function() {
      ctx.editMode = "all";
      const response = ctx.saveApi.getResponse();
      if (response.edit.result === "Success") {
        const link = document.createElement("a");
        link.setAttribute("href", mw.util.getUrl(ctx.pageName));
        link.appendChild(document.createTextNode(ctx.pageName));
        ctx.statusElement.info(["完成（", link, "）"]);
        if (ctx.onSaveSuccess) {
          ctx.onSaveSuccess(this);
        }
        return;
      }
      if (response.edit.captcha) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
      } else {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
      }
      ++Morebits.wiki.numberOfActionsLeft;
      ctx.onSaveFailure(this);
    };
    const fnSaveError = function() {
      const errorCode = ctx.saveApi.getErrorCode();
      if (errorCode === "editconflict" && ctx.conflictRetries++ < ctx.maxConflictRetries) {
        const purgeQuery = {
          action: "purge",
          titles: ctx.pageName
          // redirects are already resolved
        };
        const purgeApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
          --Morebits.wiki.numberOfActionsLeft;
          ctx.statusElement.info((0, import_ext_gadget2.wgULS)("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
          if (fnCanUseMwUserToken("edit")) {
            ctx.saveApi.post();
          } else {
            ctx.loadApi.post();
          }
        }, ctx.statusElement);
        purgeApi.post();
      } else if ((errorCode === null || errorCode === void 0) && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info((0, import_ext_gadget2.wgULS)("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
        --Morebits.wiki.numberOfActionsLeft;
        sleep(2e3).then(() => {
          ctx.saveApi.post();
        });
      } else {
        const response = ctx.saveApi.getResponse();
        const errorData = response.error || // bc error format
        response.errors[0].data;
        switch (errorCode) {
          case "protectedpage":
            ctx.statusElement.error((0, import_ext_gadget2.wgULS)("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
            break;
          case "abusefilter-disallowed":
            ctx.statusElement.error((0, import_ext_gadget2.wgULS)("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + (0, import_ext_gadget2.wgULS)("”阻止。若您认为您的该次编辑是有意义的，请至 Qiuwen_talk:管理员告示板 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Qiuwen_talk:管理員告示板 提報。"));
            break;
          case "abusefilter-warning":
            ctx.statusElement.error([(0, import_ext_gadget2.wgULS)("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, (0, import_ext_gadget2.wgULS)("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
            break;
          case "spamblacklist": {
            const [spam] = errorData.spamblacklist.matches;
            ctx.statusElement.error((0, import_ext_gadget2.wgULS)("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + (0, import_ext_gadget2.wgULS)(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
            break;
          }
          default:
            ctx.statusElement.error((0, import_ext_gadget2.wgULS)("不能保存修改：", "不能儲存修改：") + ctx.saveApi.getErrorText());
        }
        ctx.editMode = "all";
        if (ctx.onSaveFailure) {
          ctx.onSaveFailure(this);
        }
      }
    };
    const isTextRedirect = (text) => {
      if (!text) {
        return false;
      }
      return Morebits.l10n.redirectTagAliases.some((tag) => {
        return new RegExp("^\\s*".concat(tag, "\\W"), "i").test(text);
      });
    };
    const fnLookupCreationSuccess = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLookupCreationFailure)) {
        return;
      }
      const rev = response.pages[0].revisions && response.pages[0].revisions[0];
      if (!rev) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法找到", "無法找到") + ctx.pageName + (0, import_ext_gadget2.wgULS)("的任何修订版本", "的任何修訂版本"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
        ctx.creator = rev.user;
        if (!ctx.creator) {
          ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.timestamp = rev.timestamp;
        if (!ctx.timestamp) {
          ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法获取页面创建时间", "無法取得頁面建立時間"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.statusElement.info((0, import_ext_gadget2.wgULS)("已获取页面创建信息", "已取得頁面建立資訊"));
        ctx.onLookupCreationSuccess(this);
      } else {
        ctx.lookupCreationApi.query.rvlimit = 50;
        ctx.lookupCreationApi.query.titles = ctx.pageName;
        ctx.lookupCreationApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("获取页面创建信息", "取得頁面建立資訊"), ctx.lookupCreationApi.query, fnLookupNonRedirectCreator, ctx.statusElement, ctx.onLookupCreationFailure);
        ctx.lookupCreationApi.setParent(this);
        ctx.lookupCreationApi.post();
      }
    };
    const fnLookupNonRedirectCreator = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      const revs = response.pages[0].revisions;
      var _iterator8 = _createForOfIteratorHelper(revs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const rev = _step8.value;
          if (!isTextRedirect(rev.content)) {
            ctx.creator = rev.user;
            ctx.timestamp = rev.timestamp;
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      if (!ctx.creator) {
        ctx.creator = revs[0].user;
        ctx.timestamp = revs[0].timestamp;
        if (!ctx.creator) {
          ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
      }
      if (!ctx.timestamp) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法获取页面创建时间", "無法取得頁面建立時間"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      ctx.statusElement.info((0, import_ext_gadget2.wgULS)("已获取页面创建信息", "已取得頁面建立資訊"));
      ctx.onLookupCreationSuccess(this);
    };
    const fnPreflightChecks = function(action, onFailure) {
      if (!Morebits.userIsSysop && action !== "move") {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法对页面进行“", "無法對頁面進行「") + action + (0, import_ext_gadget2.wgULS)("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
        onFailure(this);
        return false;
      }
      if (!ctx.editSummary) {
        ctx.statusElement.error("Internal error: ".concat(action, " reason not set (use setEditSummary function)!"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessChecks = function(action, onFailure, response) {
      const [{
        missing
      }] = response.pages;
      const actionMissing = missing && ["delete", "move"].includes(action);
      const protectMissing = action === "protect" && missing && (ctx.protectEdit || ctx.protectMove);
      const saltMissing = action === "protect" && !missing && ctx.protectCreate;
      if (actionMissing || protectMissing || saltMissing) {
        ctx.statusElement.error("".concat((0, import_ext_gadget2.wgULS)("无法对页面进行“", "無法對頁面進行「") + action + (0, import_ext_gadget2.wgULS)("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : (0, import_ext_gadget2.wgULS)("已经", "已經")), "存在"));
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
      if (editprot && !ctx.suppressProtectWarning && !confirm((0, import_ext_gadget2.wgULS)("您即将对全保护页面“", "您即將對全保護頁面「") + ctx.pageName + (editprot.expiry === "infinity" ? (0, import_ext_gadget2.wgULS)("”（永久）", "」（永久）") : "".concat((0, import_ext_gadget2.wgULS)("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + (0, import_ext_gadget2.wgULS)("”进行“", "」進行「") + action + (0, import_ext_gadget2.wgULS)("”操作", "」操作") + (0, import_ext_gadget2.wgULS)("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
        onFailure(this);
        return false;
      }
      if (!response.tokens.csrftoken) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法获取令牌。", "無法取得權杖。"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessMove = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("move")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.moveApi.getResponse().query;
        if (!fnProcessChecks("move", ctx.onMoveFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "move",
        from: pageTitle,
        to: ctx.moveDestination,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.moveTalkPage) {
        query.movetalk = "true";
      }
      if (ctx.moveSubpages) {
        query.movesubpages = "true";
      }
      if (ctx.moveSuppressRedirect) {
        query.noredirect = "true";
      }
      ctx.moveProcessApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("移动页面……", "移動頁面……"), query, ctx.onMoveSuccess, ctx.statusElement, ctx.onMoveFailure);
      ctx.moveProcessApi.setParent(this);
      ctx.moveProcessApi.post();
    };
    const fnProcessPatrol = function() {
      const query = {
        action: "patrol",
        format: "json"
      };
      if (ctx.rcid) {
        query.rcid = ctx.rcid;
        query.token = mw.user.tokens.get("patrolToken");
      } else {
        const response = ctx.patrolApi.getResponse().query;
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
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      const patrolStat = new Morebits.status((0, import_ext_gadget2.wgULS)("标记页面为已巡查", "標記頁面為已巡查"));
      ctx.patrolProcessApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("巡查页面……", "巡查頁面……"), query, null, patrolStat);
      ctx.patrolProcessApi.setParent(this);
      ctx.patrolProcessApi.post();
    };
    const fnProcessDelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("delete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.deleteApi.getResponse().query;
        if (!fnProcessChecks("delete", ctx.onDeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "delete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.deleteProcessApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("删除页面……", "刪除頁面……"), query, ctx.onDeleteSuccess, ctx.statusElement, fnProcessDeleteError);
      ctx.deleteProcessApi.setParent(this);
      ctx.deleteProcessApi.post();
    };
    const fnProcessDeleteError = function() {
      const errorCode = ctx.deleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError" && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info((0, import_ext_gadget2.wgULS)("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        ctx.deleteProcessApi.post();
      } else if (errorCode === "missingtitle") {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      } else {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法删除页面：", "無法刪除頁面：") + ctx.deleteProcessApi.getErrorText());
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      }
    };
    const fnProcessUndelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("undelete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.undeleteApi.getResponse().query;
        if (!fnProcessChecks("undelete", ctx.onUndeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "undelete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.undeleteProcessApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("还原页面……", "還原頁面……"), query, ctx.onUndeleteSuccess, ctx.statusElement, fnProcessUndeleteError);
      ctx.undeleteProcessApi.setParent(this);
      ctx.undeleteProcessApi.post();
    };
    const fnProcessUndeleteError = function() {
      const errorCode = ctx.undeleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError") {
        if (ctx.retries++ < ctx.maxRetries) {
          ctx.statusElement.info((0, import_ext_gadget2.wgULS)("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
          --Morebits.wiki.numberOfActionsLeft;
          ctx.undeleteProcessApi.post();
        } else {
          ctx.statusElement.error((0, import_ext_gadget2.wgULS)("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
          if (ctx.onUndeleteFailure) {
            ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
          }
        }
      } else if (errorCode === "cantundelete") {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      } else {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("无法还原页面：", "無法還原頁面：") + ctx.undeleteProcessApi.getErrorText());
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      }
    };
    const fnProcessProtect = function() {
      const response = ctx.protectApi.getResponse().query;
      if (!fnProcessChecks("protect", ctx.onProtectFailure, response)) {
        return;
      }
      const token = response.tokens.csrftoken;
      const [page] = response.pages;
      const pageTitle = page.title;
      ctx.watched = page.watchlistexpiry || page.watched;
      const prs = response.pages[0].protection;
      let editprot;
      let moveprot;
      let createprot;
      var _iterator9 = _createForOfIteratorHelper(prs), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const pr = _step9.value;
          if (pr.type === "edit" && !pr.source) {
            editprot = pr;
          } else if (pr.type === "move") {
            moveprot = pr;
          } else if (pr.type === "create") {
            createprot = pr;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (!ctx.protectEdit && editprot) {
        ctx.protectEdit = {
          level: editprot.level,
          expiry: editprot.expiry
        };
      }
      if (!ctx.protectMove && moveprot) {
        ctx.protectMove = {
          level: moveprot.level,
          expiry: moveprot.expiry
        };
      }
      if (!ctx.protectCreate && createprot) {
        ctx.protectCreate = {
          level: createprot.level,
          expiry: createprot.expiry
        };
      }
      if (ctx.protectCascade === null) {
        ctx.protectCascade = !!prs.filter((pr) => {
          return pr.cascade;
        }).length;
      }
      if (ctx.protectCascade) {
        if ((!ctx.protectEdit || ctx.protectEdit.level !== "sysop" || !ctx.protectMove || ctx.protectMove.level !== "sysop") && !confirm((0, import_ext_gadget2.wgULS)("您已对“", "您已對「") + ctx.pageName + (0, import_ext_gadget2.wgULS)("”启用了连锁保护", "」啟用了連鎖保護") + (0, import_ext_gadget2.wgULS)("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + (0, import_ext_gadget2.wgULS)("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
          ctx.statusElement.error((0, import_ext_gadget2.wgULS)("连锁保护已取消。", "連鎖保護已取消。"));
          ctx.onProtectFailure(this);
          return;
        }
        ctx.protectEdit.level = "sysop";
        ctx.protectMove.level = "sysop";
      }
      const protections = [];
      const expirys = [];
      if (ctx.protectEdit) {
        protections[protections.length] = "edit=".concat(ctx.protectEdit.level);
        expirys[expirys.length] = ctx.protectEdit.expiry;
      }
      if (ctx.protectMove) {
        protections[protections.length] = "move=".concat(ctx.protectMove.level);
        expirys[expirys.length] = ctx.protectMove.expiry;
      }
      if (ctx.protectCreate) {
        protections[protections.length] = "create=".concat(ctx.protectCreate.level);
        expirys[expirys.length] = ctx.protectCreate.expiry;
      }
      const query = {
        action: "protect",
        title: pageTitle,
        token,
        protections: protections.join("|"),
        expiry: expirys.join("|"),
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.protectCascade) {
        query.cascade = "true";
      }
      ctx.protectProcessApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("保护页面……", "保護頁面……"), query, ctx.onProtectSuccess, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectProcessApi.setParent(this);
      ctx.protectProcessApi.post();
    };
    const sleep = (milliseconds) => {
      const deferred = $.Deferred();
      setTimeout(deferred.resolve, milliseconds);
      return deferred;
    };
  };
  Morebits.wiki.preview = function(previewbox) {
    this.previewbox = previewbox;
    $(previewbox).addClass("morebits-previewbox").hide();
    this.beginRender = (wikitext, pageTitle, sectionTitle) => {
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
        text: wikitext,
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
      const renderApi = new Morebits.wiki.api((0, import_ext_gadget2.wgULS)("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status((0, import_ext_gadget2.wgULS)("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error((0, import_ext_gadget2.wgULS)("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
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
  };
  Morebits.wikitext = {};
  Morebits.wikitext.parseTemplate = (text, start) => {
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
  Morebits.wikitext.page = function(text) {
    this.text = text;
  };
  Morebits.wikitext.page.prototype = {
    text: "",
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
    },
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
      var _iterator0 = _createForOfIteratorHelper(allLinks), _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
          const allLink = _step0.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      const galleryImageRegex = new RegExp("(^\\s*".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*(?:\\|.*?$|$))"), "mg");
      unbinder.content = unbinder.content.replace(galleryImageRegex, "<!-- ".concat(reason, "$1 -->"));
      unbinder.unbind("<!--", "-->");
      const freeImageRegex = new RegExp("(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:".concat(Morebits.namespaceRegex(6), ":\\s*)?").concat(imageRegexString, ")"), "mg");
      unbinder.content = unbinder.content.replace(freeImageRegex, "<!-- ".concat(reason, "$1 -->"));
      this.text = unbinder.rebind();
      return this;
    },
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
      var _iterator1 = _createForOfIteratorHelper(allLinks), _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
          let replacement = _step1.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      const galleryRegex = new RegExp("^(\\s*".concat(imageRegexString, ".*?)\\|?(.*?)$"), "mg");
      const newtext = "$1|$2 ".concat(data);
      this.text = this.text.replace(galleryRegex, newtext);
      return this;
    },
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
      var _iterator10 = _createForOfIteratorHelper(allTemplates), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const allTemplate = _step10.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return this;
    },
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
    },
    /**
     * Get the manipulated wikitext.
     *
     * @returns {string}
     */
    getText() {
      return this.text;
    }
  };
  Morebits.userspaceLogger = function(logPageName) {
    if (!logPageName) {
      throw new Error("no log page name specified");
    }
    this.initialText = "";
    this.headerLevel = 3;
    this.changeTags = "";
    this.log = function(logText, summaryText) {
      const def = $.Deferred();
      if (!logText) {
        return def.reject();
      }
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), (0, import_ext_gadget2.wgULS)("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
      page.load((pageobj) => {
        let text = pageobj.getPageText() || this.initialText;
        const date = new Morebits.date(pageobj.getLoadTime());
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
  };
  Morebits.status = function(text, stat, type) {
    this.textRaw = text;
    this.text = Morebits.createHtml(text);
    this.type = type || "status";
    this.generate();
    if (stat) {
      this.update(stat, type);
    }
  };
  Morebits.status.init = (root) => {
    if (!(root instanceof Element)) {
      throw new TypeError("object not an instance of Element");
    }
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild);
    }
    Morebits.status.root = root;
    Morebits.status.errorEvent = null;
  };
  Morebits.status.root = null;
  Morebits.status.onError = (handler) => {
    if (typeof handler === "function") {
      Morebits.status.errorEvent = handler;
    } else {
      throw new TypeError("Morebits.status.onError: handler is not a function");
    }
  };
  Morebits.status.prototype = {
    stat: null,
    statRaw: null,
    text: null,
    textRaw: null,
    type: "status",
    target: null,
    node: null,
    linked: false,
    /** Add the status element node to the DOM. */
    link() {
      if (!this.linked && Morebits.status.root) {
        Morebits.status.root.appendChild(this.node);
        this.linked = true;
      }
    },
    /** Remove the status element node from the DOM. */
    unlink() {
      if (this.linked) {
        Morebits.status.root.removeChild(this.node);
        this.linked = false;
      }
    },
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
    },
    /** Produce the html for first part of the status message. */
    generate() {
      this.node = document.createElement("div");
      this.node.appendChild(document.createElement("span")).appendChild(this.text);
      this.node.appendChild(document.createElement("span")).appendChild(document.createTextNode(": "));
      this.target = this.node.appendChild(document.createElement("span"));
      this.target.appendChild(document.createTextNode(""));
    },
    /** Complete the html, for the second part of the status message. */
    render() {
      this.node.className = "morebits_status_".concat(this.type);
      while (this.target.hasChildNodes()) {
        this.target.removeChild(this.target.firstChild);
      }
      this.target.appendChild(this.stat);
      this.link();
    },
    status(status) {
      this.update(status, "status");
    },
    info(status) {
      this.update(status, "info");
    },
    warn(status) {
      this.update(status, "warn");
    },
    error(status) {
      this.update(status, "error");
    }
  };
  Morebits.status.status = (text, status) => {
    return new Morebits.status(text, status);
  };
  Morebits.status.info = (text, status) => {
    return new Morebits.status(text, status, "info");
  };
  Morebits.status.warn = (text, status) => {
    return new Morebits.status(text, status, "warn");
  };
  Morebits.status.error = (text, status) => {
    return new Morebits.status(text, status, "error");
  };
  Morebits.status.actionCompleted = (text) => {
    const node = document.createElement("div");
    node.appendChild(document.createElement("b")).appendChild(document.createTextNode(text));
    node.className = "morebits_status_info morebits_action_complete";
    if (Morebits.status.root) {
      Morebits.status.root.appendChild(node);
    }
  };
  Morebits.status.printUserText = (comments, message) => {
    const p = document.createElement("p");
    p.innerHTML = message;
    const div = document.createElement("div");
    div.className = "morebits-usertext";
    div.style.marginTop = "0";
    div.style.whiteSpace = "pre-wrap";
    div.textContent = comments;
    p.appendChild(div);
    Morebits.status.root.appendChild(p);
  };
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
        const cbs = $(jQuerySelector, jQueryContext);
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
  Morebits.batchOperation = function(currentAction) {
    const ctx = {
      // backing fields for public properties
      pageList: null,
      options: {
        chunkSize: 50,
        preserveIndividualStatusLines: false
      },
      // internal counters, etc.
      statusElement: new Morebits.status(currentAction || (0, import_ext_gadget2.wgULS)("执行批量操作", "執行批次操作")),
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
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.setPageList = (pageList) => {
      ctx.pageList = pageList;
    };
    this.setOption = (optionName, optionValue) => {
      ctx.options[optionName] = optionValue;
    };
    this.run = (worker, postFinish) => {
      if (ctx.running) {
        ctx.statusElement.error((0, import_ext_gadget2.wgULS)("批量操作已在运行", "批次操作已在執行"));
        return;
      }
      ctx.running = true;
      ctx.worker = worker;
      ctx.postFinish = postFinish;
      ctx.countStarted = 0;
      ctx.countFinished = 0;
      ctx.countFinishedSuccess = 0;
      ctx.currentChunkIndex = -1;
      ctx.pageChunks = [];
      const total = ctx.pageList.length;
      if (!total) {
        ctx.statusElement.info((0, import_ext_gadget2.wgULS)("没有指定页面", "沒有指定頁面"));
        ctx.running = false;
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        return;
      }
      ctx.pageChunks = Morebits.array.chunk(ctx.pageList, ctx.options.chunkSize);
      Morebits.wiki.addCheckpoint();
      ctx.statusElement.status("0%");
      fnStartNewChunk();
    };
    this.workerSuccess = (arg) => {
      if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
        const statelem = arg.getStatusElement();
        if (ctx.options.preserveIndividualStatusLines) {
          if (arg.getPageName || arg.pageName || arg.query && arg.query.title) {
            const pageName = arg.getPageName ? arg.getPageName() : arg.pageName || arg.query.title;
            statelem.info("完成（[[".concat(pageName, "]]）"));
          } else {
            statelem.info("完成");
          }
        } else {
          statelem.unlink();
        }
      } else if (typeof arg === "string" && ctx.options.preserveIndividualStatusLines) {
        new Morebits.status(arg, "完成（[[".concat(arg, "]]）"));
      }
      ctx.countFinishedSuccess++;
      fnDoneOne();
    };
    this.workerFailure = () => {
      fnDoneOne();
    };
    const thisProxy = this;
    const fnStartNewChunk = () => {
      const chunk = ctx.pageChunks[++ctx.currentChunkIndex];
      if (!chunk) {
        return;
      }
      ctx.countStarted += chunk.length;
      var _iterator11 = _createForOfIteratorHelper(chunk), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          const page = _step11.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    };
    const fnDoneOne = () => {
      ctx.countFinished++;
      const total = ctx.pageList.length;
      if (ctx.countFinished < total) {
        const progress = Math.round(100 * ctx.countFinished / total);
        ctx.statusElement.status("".concat(progress, "%"));
        if (ctx.countFinished >= ctx.countStarted - Math.max(ctx.options.chunkSize / 10, 2) && Math.floor(ctx.countFinished / ctx.options.chunkSize) > ctx.currentChunkIndex) {
          fnStartNewChunk();
        }
      } else if (ctx.countFinished === total) {
        const statusString = "完成（".concat(ctx.countFinishedSuccess, "/").concat(ctx.countFinished, "操作成功完成）");
        if (ctx.countFinishedSuccess < ctx.countFinished) {
          ctx.statusElement.warn(statusString);
        } else {
          ctx.statusElement.info(statusString);
        }
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      } else {
        ctx.statusElement.warn("".concat((0, import_ext_gadget2.wgULS)("完成（多执行了", "完成（多執行了") + (ctx.countFinished - total), "次）"));
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      }
    };
  };
  Morebits.simpleWindow = function(width, height) {
    const content = document.createElement("div");
    this.content = content;
    content.className = "morebits-dialog-content";
    content.id = "morebits-dialog-content-".concat(Math.round(Math.random() * 1e15));
    this.height = height;
    $(this.content).dialog({
      autoOpen: false,
      buttons: {
        "Placeholder button": () => {
        }
      },
      dialogClass: "morebits-dialog",
      width: Math.min(Number.parseInt(window.innerWidth, 10), Number.parseInt(width || 800, 10)),
      // give jQuery the given height value (which represents the anticipated height of the dialog) here, so
      // it can position the dialog appropriately
      // the 20 pixels represents adjustment for the extra height of the jQuery dialog "chrome", compared
      // to that of the old SimpleWindow
      height: height + 20,
      close: (event) => {
        $(event.target).dialog("destroy").remove();
      },
      resizeStart() {
        [this.scrollbox] = $(this).find(".morebits-scrollbox");
        if (this.scrollbox) {
          this.scrollbox.style.maxHeight = "none";
        }
      },
      resizeStop() {
        this.scrollbox = null;
      },
      resize() {
        this.style.maxHeight = "";
        if (this.scrollbox) {
          this.scrollbox.style.width = "";
        }
      }
    });
    const $widget = $(this.content).dialog("widget");
    $widget.find("button").each((key, value) => {
      value.parentNode.removeChild(value);
    });
    const buttonspan = document.createElement("span");
    buttonspan.className = "morebits-dialog-buttons";
    const linksspan = document.createElement("span");
    linksspan.className = "morebits-dialog-footerlinks";
    $widget.find(".ui-dialog-buttonpane").append(buttonspan, linksspan);
    $widget.resizable("option", "alsoResize", "#".concat(this.content.id, " .morebits-scrollbox, #").concat(this.content.id));
  };
  Morebits.simpleWindow.prototype = {
    buttons: [],
    height: 600,
    hasFooterLinks: false,
    scriptName: null,
    /**
     * Focuses the dialog. This might work, or on the contrary, it might not.
     *
     * @returns {Morebits.simpleWindow}
     */
    focus() {
      $(this.content).dialog("moveToTop");
      return this;
    },
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
      $(this.content).dialog("close");
      return this;
    },
    /**
     * Shows the dialog. Calling display() on a dialog that has previously been closed
     * might work, but it is not guaranteed.
     *
     * @returns {Morebits.simpleWindow}
     */
    display() {
      if (this.scriptName) {
        const $widget = $(this.content).dialog("widget");
        $widget.find(".morebits-dialog-scriptname").remove();
        const scriptnamespan = document.createElement("span");
        scriptnamespan.className = "morebits-dialog-scriptname";
        scriptnamespan.textContent = "".concat(this.scriptName, " · ");
        $widget.find(".ui-dialog-title").prepend(scriptnamespan);
      }
      const dialog = $(this.content).dialog("open");
      if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
        dialog.parent()[0].ranSetupTooltipsAlready = false;
        window.setupTooltips(dialog.parent()[0]);
      }
      this.setHeight(this.height);
      return this;
    },
    /**
     * Sets the dialog title.
     *
     * @param {string} title
     * @returns {Morebits.simpleWindow}
     */
    setTitle(title) {
      $(this.content).dialog("option", "title", title);
      return this;
    },
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
    },
    /**
     * Sets the dialog width.
     *
     * @param {number} width
     * @returns {Morebits.simpleWindow}
     */
    setWidth(width) {
      $(this.content).dialog("option", "width", width);
      return this;
    },
    /**
     * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
     * but the content area will grow no larger than the height given here.
     *
     * @param {number} height
     * @returns {Morebits.simpleWindow}
     */
    setHeight(height) {
      this.height = height;
      if (Number.parseInt(getComputedStyle($(this.content).dialog("widget")[0], null).height, 10) > window.innerHeight) {
        $(this.content).dialog("option", "height", window.innerHeight - 2).dialog("option", "position", "top");
      } else {
        $(this.content).dialog("option", "height", "auto");
      }
      $(this.content).dialog("widget").find(".morebits-dialog-content")[0].style.maxHeight = "".concat(Number.parseInt(this.height - 30, 10), "px");
      return this;
    },
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
    },
    /**
     * Adds the given element node to the dialog content.
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    addContent(content) {
      this.content.appendChild(content);
      const self = this;
      $(this.content).find('input[type="submit"], button[type="submit"]').each((key, value) => {
        value.style.display = "none";
        const button = document.createElement("button");
        if (value.hasAttribute("value")) {
          button.textContent = value.getAttribute("value");
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
      if (this.buttons.length > 0) {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty().append(this.buttons)[0].removeAttribute("data-empty");
      } else {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons")[0].setAttribute("data-empty", "data-empty");
      }
      return this;
    },
    /**
     * Removes all contents from the dialog, barring any footer links.
     *
     * @returns {Morebits.simpleWindow}
     */
    purgeContent() {
      this.buttons = [];
      $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty();
      while (this.content.hasChildNodes()) {
        this.content.removeChild(this.content.firstChild);
      }
      return this;
    },
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
      const $footerlinks = $(this.content).dialog("widget").find(".morebits-dialog-footerlinks");
      if (this.hasFooterLinks) {
        const bullet = document.createElement("span");
        bullet.textContent = " • ";
        if (prep) {
          $footerlinks.prepend(bullet);
        } else {
          $footerlinks.append(bullet);
        }
      }
      const link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(wikiPage));
      link.setAttribute("title", wikiPage);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.textContent = text;
      if (prep) {
        $footerlinks.prepend(link);
      } else {
        $footerlinks.append(link);
      }
      this.hasFooterLinks = true;
      return this;
    },
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
      $(this.content).dialog("option", "modal", modal);
      return this;
    }
  };
  Morebits.simpleWindow.setButtonsEnabled = (enabled) => {
    const $body = $("body");
    $body.find(".morebits-dialog-buttons button").prop("disabled", !enabled);
  };
})(jQuery);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL21vcmViaXRzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuLyohIFR3aW5rbGUuanMgLSBtb3JlYml0cy5qcyAqL1xuXG4vKipcbiAqIEEgbGlicmFyeSBmdWxsIG9mIGxvdHMgb2YgZ29vZG5lc3MgZm9yIHVzZXIgc2NyaXB0cyBvbiBNZWRpYVdpa2kgd2lraXMuXG4gKlxuICogVGhlIGhpZ2hsaWdodHMgaW5jbHVkZTpcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSAtIG1ha2UgY2FsbHMgdG8gdGhlIE1lZGlhV2lraSBBUElcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gLSBtb2RpZnkgcGFnZXMgb24gdGhlIHdpa2kgKGVkaXQsIHJldmVydCwgZGVsZXRlLCBldGMuKVxuICogLSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gLSBlbmhhbmNlZCBkYXRlIG9iamVjdCBwcm9jZXNzaW5nLCBzb3J0IG9mIGEgbGlnaHQgbW9tZW50LmpzXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IC0gZ2VuZXJhdGUgcXVpY2sgSFRNTCBmb3JtcyBvbiB0aGUgZmx5XG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IC0gYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkgRGlhbG9nIHdpdGggYSBjdXN0b20gbG9vayBhbmQgZXh0cmEgZmVhdHVyZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gLSBhIHJvdWdoLWFuZC1yZWFkeSBzdGF0dXMgbWVzc2FnZSBkaXNwbGF5ZXIsIHVzZWQgYnkgdGhlIE1vcmViaXRzLndpa2kgY2xhc3Nlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHR9IC0gdXRpbGl0aWVzIGZvciBkZWFsaW5nIHdpdGggd2lraXRleHRcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0cmluZ30gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzXG4gKiAtIHtAbGluayBNb3JlYml0cy5hcnJheX0gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBhcnJheXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmlwfSAtIHV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogLSBUaGUgd2hvbGUgdGhpbmcgcmVsaWVzIG9uIGpRdWVyeS4gIEJ1dCBtb3N0IHdpa2lzIHNob3VsZCBwcm92aWRlIHRoaXMgYnkgZGVmYXVsdC5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0sIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9LCBhbmQge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gcmVseSBvbiB0aGUgXCJtb3JlYml0cy5jc3NcIiBmaWxlIGZvciB0aGVpciBzdHlsaW5nLlxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmQge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gdG9vbHRpcHMgcmVseSBvbiBqUXVlcnkgVUkgRGlhbG9nIChmcm9tIFJlc291cmNlTG9hZGVyIG1vZHVsZSBuYW1lICdqcXVlcnkudWknKS5cbiAqIC0gVG8gY3JlYXRlIGEgZ2FkZ2V0IGJhc2VkIG9uIG1vcmViaXRzLmpzLCB1c2UgdGhpcyBzeW50YXggaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqR2FkZ2V0TmFtZVtSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aV18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzfEdhZGdldE5hbWUuanNgXG4gKiAtIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gY29uZmlndXJlIG1vcmViaXRzLmpzIGFzIGEgaGlkZGVuIGdhZGdldCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCptb3JlYml0c1tSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aXxoaWRkZW5dfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc2BcbiAqICAgICBhbmQgdGhlbiBsb2FkIGV4dC5nYWRnZXQubW9yZWJpdHMgYXMgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBuZXcgZ2FkZ2V0LlxuICpcbiAqIEFsbCB0aGUgc3R1ZmYgaGVyZSB3b3JrcyBvbiBhbGwgYnJvd3NlcnMgZm9yIHdoaWNoIE1lZGlhV2lraSBwcm92aWRlcyBKYXZhU2NyaXB0IHN1cHBvcnQuXG4gKlxuICogVGhpcyBsaWJyYXJ5IGlzIG1haW50YWluZWQgYnkgdGhlIG1haW50YWluZXJzIG9mIFR3aW5rbGUuXG4gKiBGb3IgcXVlcmllcywgc3VnZ2VzdGlvbnMsIGhlbHAsIGV0Yy4sIGhlYWQgdG8gW0hlbHA6VHdpbmtsZV0oaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9IOlRXKS5cbiAqIFRoZSBsYXRlc3QgZGV2ZWxvcG1lbnQgc291cmNlIGlzIGF2YWlsYWJsZSBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL3R3aW5rbGUvYmxvYi9tYXN0ZXIvbW9yZWJpdHMuanN8R2l0SHVifS5cbiAqXG4gKiBAcGFyYW0ge0pRdWVyeX0gJFxuICogQG5hbWVzcGFjZSBNb3JlYml0c1xuICovXG5pbXBvcnQgJy4vbW9yZWJpdHMubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3dnVUxTfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG4oZnVuY3Rpb24gbW9yZWJpdHMoJCkge1xuXHQvLyBXcmFwIGVudGlyZSBmaWxlIHdpdGggYW5vbnltb3VzIGZ1bmN0aW9uXG5cdC8qKiBAbGVuZHMgTW9yZWJpdHMgKi9cblx0Y29uc3QgTW9yZWJpdHMgPSB7fTtcblx0d2luZG93Lk1vcmViaXRzID0gTW9yZWJpdHM7IC8vIGFsbG93IGdsb2JhbCBhY2Nlc3Ncblx0Ly8gTm8gTW9yZWJpdHMuaTE4biBhdCB0aGlzIHRpbWVcblx0LyoqXG5cdCAqIFdpa2ktc3BlY2lmaWMgY29uZmlndXJhdGlvbnMgZm9yIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5sMTBuID0ge1xuXHRcdC8qKlxuXHRcdCAqIExvY2FsIGFsaWFzZXMgZm9yIFwicmVkaXJlY3RcIiBtYWdpYyB3b3JkLlxuXHRcdCAqIENoZWNrIHVzaW5nIGFwaS5waHA/YWN0aW9uPXF1ZXJ5JmZvcm1hdD1qc29uJm1ldGE9c2l0ZWluZm8mZm9ybWF0dmVyc2lvbj0yJnNpcHJvcD1tYWdpY3dvcmRzXG5cdFx0ICovXG5cdFx0cmVkaXJlY3RUYWdBbGlhc2VzOiBbJyNSRURJUkVDVCcsICcj6YeN5a6a5ZCRJ10sXG5cdFx0LyoqXG5cdFx0ICogVGFrZXMgYSBzdHJpbmcgYXMgYXJndW1lbnQgYW5kIGNoZWNrcyBpZiBpdCBpcyBhIHRpbWVzdGFtcCBvciBub3Rcblx0XHQgKiBJZiBub3QsIGl0IHJldHVybnMgbnVsbC4gSWYgeWVzLCBpdCByZXR1cm5zIGFuIGFycmF5IG9mIGludGVnZXJzXG5cdFx0ICogaW4gdGhlIGZvcm1hdCBbeWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kXVxuXHRcdCAqIHdoaWNoIGNhbiBiZSBwYXNzZWQgdG8gRGF0ZS5VVEMoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJbXSB8IG51bGx9XG5cdFx0ICovXG5cdFx0c2lnbmF0dXJlVGltZXN0YW1wRm9ybWF0OiAoc3RyKSA9PiB7XG5cdFx0XHRjb25zdCByZ3hVVEMgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKFVUQ1xcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoVVRDKVxuXHRcdFx0Y29uc3Qgcmd4Q1NUID0gLyhcXGR7NH0p5bm0KFxcZHsxLDJ9KeaciChcXGR7MSwyfSnml6UgXFwoLlxcKSAoXFxkezJ9KTooXFxkezJ9KSBcXChDU1RcXCkvOyAvLyBZWVlZ5bm0TW9udGjmnIhEROaXpSAodykgSEg6bW0gKENTVClcblx0XHRcdGNvbnN0IG1hdGNoID0gcmd4VVRDLmV4ZWMoc3RyKSB8fCByZ3hDU1QuZXhlYyhzdHIpO1xuXHRcdFx0Y29uc3QgbWF0Y2hDU1QgPSByZ3hDU1QuZXhlYyhzdHIpO1xuXHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG1vbnRoID0gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRocy5pbmRleE9mKG1hdGNoWzRdKTtcblx0XHRcdGlmIChtb250aCA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHQvLyAuLi4uLiB5ZWFyIC4uLi4gbW9udGggLi4uIGRhdGUgLi4uLiBob3VyIC4uLiBtaW51dGVcblx0XHRcdHJldHVybiBtYXRjaENTVFxuXHRcdFx0XHQ/IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0gLSA4LCBtYXRjaFs1XV1cblx0XHRcdFx0OiBbbWF0Y2hbMV0sIG1hdGNoWzJdIC0gMSwgbWF0Y2hbM10sIG1hdGNoWzRdLCBtYXRjaFs1XV07XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFNpbXBsZSBoZWxwZXIgZnVuY3Rpb24gdG8gc2VlIHdoYXQgZ3JvdXBzIGEgdXNlciBtaWdodCBiZWxvbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBncm91cCAtIGUuZy4gYHN5c29wYCwgYGF1dG9jb25maXJtZWRgLCBldGMuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzSW5Hcm91cCA9IChncm91cCkgPT4ge1xuXHRcdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKS5pbmNsdWRlcyhncm91cCkgfHwgbXcuY29uZmlnLmdldCgnd2dHbG9iYWxHcm91cHMnKS5pbmNsdWRlcyhncm91cCk7XG5cdH07XG5cdC8qKlxuXHQgKiBIYXJkY29kZXMgd2hldGhlciB0aGUgdXNlciBpcyBhIHN5c29wLCB1c2VkIGEgbG90LlxuXHQgKlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLnVzZXJJc1N5c29wID1cblx0XHRNb3JlYml0cy51c2VySXNJbkdyb3VwKCdzeXNvcCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N0ZXdhcmQnKSB8fCBNb3JlYml0cy51c2VySXNJbkdyb3VwKCdxaXV3ZW4nKTtcblx0LyoqXG5cdCAqIERlcHJlY2F0ZWQgYXMgb2YgRmVicnVhcnkgMjAyMSwgdXNlIHtAbGluayBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjZ9LlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE1vcmViaXRzLmlwLnNhbml0aXplSVB2Nn0uXG5cdCAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cblx0ICogSmF2YVNjcmlwdCB0cmFuc2xhdGlvbiBvZiB0aGUge0BsaW5rIGh0dHBzOi8vZ2Vycml0Lndpa2ltZWRpYS5vcmcvci9wbHVnaW5zL2dpdGlsZXMvbWVkaWF3aWtpL2NvcmUvKy84ZWI2YWMzZTg0ZWEzMzEyZDM5MWNhOTZjMTJjNDllM2FkMDc1M2JiL2luY2x1ZGVzL3V0aWxzL0lQLnBocCMxMzF8YElQOjpzYW5pdGl6ZUlQKClgfVxuXHQgKiBmdW5jdGlvbiBmcm9tIHRoZSBJUFV0aWxzIGxpYnJhcnkuICBBZGRyZXNzZXMgYXJlIHZlcmJvc2UsIHVwcGVyY2FzZSxcblx0ICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IENJRFIuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5zYW5pdGl6ZUlQdjYgPSAoYWRkcmVzcykgPT4ge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLnNhbml0aXplSVB2NiB3YXMgcmVuYW1lZCB0byBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYgaW4gRmVicnVhcnkgMjAyMSwgcGxlYXNlIHVzZSB0aGF0IGluc3RlYWQnXG5cdFx0KTtcblx0XHRyZXR1cm4gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2KGFkZHJlc3MpO1xuXHR9O1xuXHQvKipcblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IHBhZ2UgaXMgYSByZWRpcmVjdCBvciBzb2Z0IHJlZGlyZWN0LiBGYWlsc1xuXHQgKiB0byBkZXRlY3Qgc29mdCByZWRpcmVjdHMgb24gZWRpdCwgaGlzdG9yeSwgZXRjLiBwYWdlcy4gIFdpbGwgYXR0ZW1wdCB0b1xuXHQgKiBkZXRlY3QgTW9kdWxlOlJmRCwgd2l0aCB0aGUgc2FtZSBmYWlsdXJlIHBvaW50cy5cblx0ICpcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gISEoXG5cdFx0XHRtdy5jb25maWcuZ2V0KCd3Z0lzUmVkaXJlY3QnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvZnRyZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94LVJmRCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94LVJlZGlyZWN0X2NhdGVnb3J5X3NoZWxsJylcblx0XHQpO1xuXHR9O1xuXHQvKipcblx0ICogU3RvcmVzIGEgbm9ybWFsaXplZCAodW5kZXJzY29yZXMgY29udmVydGVkIHRvIHNwYWNlcykgdmVyc2lvbiBvZiB0aGVcblx0ICogYHdnUGFnZU5hbWVgIHZhcmlhYmxlLlxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0TW9yZWJpdHMucGFnZU5hbWVOb3JtID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGEgcGFnZSBuYW1lLiAgQWNjb3VudHMgZm9yXG5cdCAqIGxlYWRpbmcgY2hhcmFjdGVyJ3MgY2FwaXRhbGl6YXRpb24sIHVuZGVyc2NvcmVzIGFzIHNwYWNlcywgYW5kIHNwZWNpYWxcblx0ICogY2hhcmFjdGVycyBiZWluZyBlc2NhcGVkLiAgU2VlIGFsc28ge0BsaW5rIE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4fS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VOYW1lIC0gUGFnZSBuYW1lIHdpdGhvdXQgbmFtZXNwYWNlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIEZvciBhIHBhZ2UgbmFtZSBgRm9vIGJhcmAsIHJldHVybnMgdGhlIHN0cmluZyBgW0ZmXW9vW18gXWJhcmAuXG5cdCAqL1xuXHRNb3JlYml0cy5wYWdlTmFtZVJlZ2V4ID0gKHBhZ2VOYW1lKSA9PiB7XG5cdFx0aWYgKHBhZ2VOYW1lID09PSAnJykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCBbZmlyc3RDaGFyXSA9IHBhZ2VOYW1lO1xuXHRcdGNvbnN0IHJlbWFpbmRlciA9IE1vcmViaXRzLnN0cmluZy5lc2NhcGVSZWdFeHAocGFnZU5hbWUuc2xpY2UoMSkpO1xuXHRcdGlmIChtdy5UaXRsZS5waHBDaGFyVG9VcHBlcihmaXJzdENoYXIpICE9PSBmaXJzdENoYXIudG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0cmV0dXJuIGBbJHttdy5UaXRsZS5waHBDaGFyVG9VcHBlcihmaXJzdENoYXIpfSR7Zmlyc3RDaGFyLnRvTG93ZXJDYXNlKCl9XSR7cmVtYWluZGVyfWA7XG5cdFx0fVxuXHRcdHJldHVybiBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKGZpcnN0Q2hhcikgKyByZW1haW5kZXI7XG5cdH07XG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBzdHJpbmcgb3IgYXJyYXkgb2YgRE9NIG5vZGVzIGludG8gYW4gSFRNTCBmcmFnbWVudC5cblx0ICogV2lraWxpbmsgc3ludGF4IChgW1suLi5dXWApIGlzIHRyYW5zZm9ybWVkIGludG8gSFRNTCBhbmNob3IuXG5cdCAqIFVzZWQgaW4gTW9yZWJpdHMucXVpY2tGb3JtIGFuZCBNb3JlYml0cy5zdGF0dXNcblx0ICpcblx0ICogQGludGVybmFsXG5cdCAqIEBwYXJhbSB7c3RyaW5nfE5vZGV8KHN0cmluZ3xOb2RlKVtdfSBpbnB1dFxuXHQgKiBAcmV0dXJucyB7RG9jdW1lbnRGcmFnbWVudH1cblx0ICovXG5cdE1vcmViaXRzLmNyZWF0ZUh0bWwgPSAoaW5wdXQpID0+IHtcblx0XHRjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRpZiAoIWlucHV0KSB7XG5cdFx0XHRyZXR1cm4gZnJhZ21lbnQ7XG5cdFx0fVxuXHRcdGlucHV0ID0gZ2VuZXJhdGVBcnJheShpbnB1dCk7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGlucHV0KSB7XG5cdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcblx0XHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgJC5wYXJzZUhUTUwoTW9yZWJpdHMuY3JlYXRlSHRtbC5yZW5kZXJXaWtpbGlua3MoZWxlbWVudCkpKSB7XG5cdFx0XHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZyYWdtZW50O1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydHMgd2lraWxpbmtzIHRvIEhUTUwgYW5jaG9yIHRhZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZXh0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0TW9yZWJpdHMuY3JlYXRlSHRtbC5yZW5kZXJXaWtpbGlua3MgPSAodGV4dCkgPT4ge1xuXHRcdGNvbnN0IHViID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHRleHQpO1xuXHRcdC8vIERvbid0IGNvbnZlcnQgd2lraWxpbmtzIHdpdGhpbiBjb2RlIHRhZ3MgYXMgdGhleSdyZSB1c2VkIGZvciBkaXNwbGF5aW5nIHdpa2ktY29kZVxuXHRcdHViLnVuYmluZCgnPGNvZGU+JywgJzwvY29kZT4nKTtcblx0XHR1Yi5jb250ZW50ID0gdWIuY29udGVudC5yZXBsYWNlKC9cXFtcXFs6Pyg/OihbXnxcXF1dKz8pXFx8KT8oW15cXF18XSs/KVxcXVxcXS9nLCAoXywgdGFyZ2V0LCB0ZXh0XykgPT4ge1xuXHRcdFx0dGFyZ2V0IHx8PSB0ZXh0Xztcblx0XHRcdHJldHVybiBgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHttdy51dGlsLmdldFVybCh0YXJnZXQpfVwiIHRpdGxlPVwiJHt0YXJnZXQucmVwbGFjZShcblx0XHRcdFx0L1wiL2csXG5cdFx0XHRcdCcmIzM0Oydcblx0XHRcdCl9XCI+JHt0ZXh0X308L2E+YDtcblx0XHR9KTtcblx0XHRyZXR1cm4gdWIucmViaW5kKCk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhbGwgbmFtZXNwYWNlIGFsaWFzZXMsIHJlZ2FyZGxlc3Ncblx0ICogb2YgdGhlIGNhcGl0YWxpemF0aW9uIGFuZCB1bmRlcnNjb3Jlcy9zcGFjZXMuICBEb2Vzbid0IGluY2x1ZGUgdGhlIG9wdGlvbmFsXG5cdCAqIGxlYWRpbmcgYDpgLCBidXQgaWYgdGhlcmUncyBtb3JlIHRoYW4gb25lIGl0ZW0sIHdyYXBzIHRoZSBsaXN0IGluIGFcblx0ICogbm9uLWNhcHR1cmluZyBncm91cC4gIFRoaXMgbWVhbnMgeW91IGNhbiBkbyBgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzRdKSArXG5cdCAqICc6JyArIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoJ1R3aW5rbGUnKWAgdG8gbWF0Y2ggYSBmdWxsIHBhZ2UuICBVc2VzXG5cdCAqIHtAbGluayBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4fS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJbXX0gbmFtZXNwYWNlcyAtIEFycmF5IG9mIG5hbWVzcGFjZSBudW1iZXJzLiAgVW51c2VkL2ludmFsaWRcblx0ICogbmFtZXNwYWNlIG51bWJlcnMgYXJlIHNpbGVudGx5IGRpc2NhcmRlZC5cblx0ICogQGV4YW1wbGVcblx0ICogLy8gcmV0dXJucyAnKD86W0ZmXVtJaV1bTGxdW0VlXXxbSWldW01tXVtBYV1bR2ddW0VlXSknXG5cdCAqIE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KFs2XSlcblx0ICogQHJldHVybnMge3N0cmluZ30gLSBSZWdleC1zdWl0YWJsZSBzdHJpbmcgb2YgYWxsIG5hbWVzcGFjZSBhbGlhc2VzLlxuXHQgKi9cblx0TW9yZWJpdHMubmFtZXNwYWNlUmVnZXggPSAobmFtZXNwYWNlcykgPT4ge1xuXHRcdG5hbWVzcGFjZXMgPSBnZW5lcmF0ZUFycmF5KG5hbWVzcGFjZXMpO1xuXHRcdGNvbnN0IGFsaWFzZXMgPSBbXTtcblx0XHRsZXQgcmVnZXg7XG5cdFx0Zm9yIChjb25zdCBbbmFtZSwgbnVtYmVyXSBvZiBPYmplY3QuZW50cmllcyhtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpKSkge1xuXHRcdFx0aWYgKG5hbWVzcGFjZXMuaW5jbHVkZXMobnVtYmVyKSkge1xuXHRcdFx0XHQvLyBOYW1lc3BhY2VzIGFyZSBjb21wbGV0ZWx5IGFnbm9zdGljIGFzIHRvIGNhc2UsXG5cdFx0XHRcdC8vIGFuZCBhIHJlZ2V4IHN0cmluZyBpcyBtb3JlIHVzZWZ1bC9jb21wYXRpYmxlIHRoYW4gYSBSZWdFeHAgb2JqZWN0LFxuXHRcdFx0XHQvLyBzbyB3ZSBhY2NlcHQgYW55IGNhc2luZyBmb3IgYW55IGxldHRlci5cblx0XHRcdFx0YWxpYXNlc1thbGlhc2VzLmxlbmd0aF0gPSBbLi4ubmFtZV1cblx0XHRcdFx0XHQubWFwKChjaGFyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gTW9yZWJpdHMucGFnZU5hbWVSZWdleChjaGFyKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5qb2luKCcnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3dpdGNoIChhbGlhc2VzLmxlbmd0aCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZWdleCA9ICcnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0W3JlZ2V4XSA9IGFsaWFzZXM7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmVnZXggPSBgKD86JHthbGlhc2VzLmpvaW4oJ3wnKX0pYDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiByZWdleDtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5xdWlja0Zvcm0gKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRpb24gb2Ygc2ltcGxlIGFuZCBzdGFuZGFyZCBmb3JtcyB3aXRob3V0IG11Y2ggc3BlY2lmaWMgY29kaW5nLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZvcm0gaXMgc3VibWl0dGVkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50VHlwZT1zdWJtaXRdIC0gVHlwZSBvZiB0aGUgZXZlbnQuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0gPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50VHlwZSkge1xuXHRcdHRoaXMucm9vdCA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdFx0XHR0eXBlOiAnZm9ybScsXG5cdFx0XHRldmVudCxcblx0XHRcdGV2ZW50VHlwZSxcblx0XHR9KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IG9mIHRoZSBxdWlja0Zvcm0uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgcmV0ID0gdGhpcy5yb290LnJlbmRlcigpO1xuXHRcdHJldC5uYW1lcyA9IHt9O1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBcHBlbmQgZWxlbWVudCB0byB0aGUgZm9ybS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhvYmplY3R8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBkYXRhIC0gQSBxdWlja2Zvcm0gZWxlbWVudCwgb3IgdGhlIG9iamVjdCB3aXRoIHdoaWNoXG5cdCAqIGEgcXVpY2tmb3JtIGVsZW1lbnQgaXMgY29uc3RydWN0ZWQuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gLSBTYW1lIGFzIHdoYXQgaXMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290LmFwcGVuZChkYXRhKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBlbGVtZW50IGZvciB0aGUgdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEluZGV4IHRvIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50IHR5cGVzOlxuXHQgKiAtIEdsb2JhbCBhdHRyaWJ1dGVzOiBpZCwgY2xhc3NOYW1lLCBzdHlsZSwgdG9vbHRpcCwgZXh0cmEsICRkYXRhLCBhZG1pbm9ubHlcblx0ICogLSBgc2VsZWN0YDogQSBjb21ibyBib3ggKGFrYSBkcm9wLWRvd24pLlxuXHQgKiAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbXVsdGlwbGUsIHNpemUsIGxpc3QsIGV2ZW50LCBkaXNhYmxlZFxuXHQgKiAgLSBgb3B0aW9uYDogQW4gZWxlbWVudCBmb3IgYSBjb21ibyBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiB2YWx1ZSwgbGFiZWwsIHNlbGVjdGVkLCBkaXNhYmxlZFxuXHQgKiAgLSBgb3B0Z3JvdXBgOiBBIGdyb3VwIG9mIFwib3B0aW9uXCJzLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbGFiZWwsIGxpc3Rcblx0ICogIC0gYGZpZWxkYDogQSBmaWVsZHNldCAoYWthIGdyb3VwIGJveCkuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWRcblx0ICogIC0gYGNoZWNrYm94YDogQSBjaGVja2JveC4gTXVzdCB1c2UgXCJsaXN0XCIgcGFyYW1ldGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcblx0ICogICAgICAtIEF0dHJpYnV0ZXMgKHdpdGhpbiBsaXN0KTogbmFtZSwgbGFiZWwsIHZhbHVlLCBjaGVja2VkLCBkaXNhYmxlZCwgZXZlbnQsIHN1Ymdyb3VwXG5cdCAqICAtIGByYWRpb2A6IEEgcmFkaW8gYnV0dG9uLiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuXHQgKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcblx0ICogIC0gYGlucHV0YDogQSB0ZXh0IGlucHV0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgc2l6ZSwgcGxhY2Vob2xkZXIsIG1heGxlbmd0aCwgZGlzYWJsZWQsIHJlcXVpcmVkLCByZWFkb25seSwgZXZlbnRcblx0ICogIC0gYG51bWJlcmA6IEEgbnVtYmVyIGlucHV0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IEV2ZXJ5dGhpbmcgdGhlIHRleHQgYGlucHV0YCBoYXMsIGFzIHdlbGwgYXM6IG1pbiwgbWF4LCBzdGVwLCBsaXN0XG5cdCAqICAtIGBkeW5pbnB1dGA6IEEgc2V0IG9mIHRleHQgYm94ZXMgd2l0aCBcIlJlbW92ZVwiIGJ1dHRvbnMgYW5kIGFuIFwiQWRkXCIgYnV0dG9uLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIG1pbiwgbWF4LCBzdWJsYWJlbCwgdmFsdWUsIHNpemUsIG1heGxlbmd0aCwgZXZlbnRcblx0ICogIC0gYGhpZGRlbmA6IEFuIGludmlzaWJsZSBmb3JtIGZpZWxkLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgdmFsdWVcblx0ICogIC0gYGhlYWRlcmA6IEEgbGV2ZWwgNSBoZWFkZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbFxuXHQgKiAgLSBgZGl2YDogQSBnZW5lcmljIHBsYWNlaG9sZGVyIGVsZW1lbnQgb3IgbGFiZWwuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbFxuXHQgKiAgLSBgc3VibWl0YDogQSBzdWJtaXQgYnV0dG9uLiBNb3JlYml0cy5zaW1wbGVXaW5kb3cgbW92ZXMgdGhlc2UgdG8gdGhlIGZvb3RlciBvZiB0aGUgZGlhbG9nLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG5cdCAqICAtIGBidXR0b25gOiBBIGdlbmVyaWMgYnV0dG9uLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkLCBldmVudFxuXHQgKiAgLSBgdGV4dGFyZWFgOiBBIGJpZywgbXVsdGktbGluZSB0ZXh0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY29scywgcm93cywgZGlzYWJsZWQsIHJlcXVpcmVkLCByZWFkb25seVxuXHQgKiAgLSBgZnJhZ21lbnRgOiBBIERvY3VtZW50RnJhZ21lbnQgb2JqZWN0LlxuXHQgKiAgICAgIC0gTm8gYXR0cmlidXRlcywgYW5kIG5vIGdsb2JhbCBhdHRyaWJ1dGVzIGV4Y2VwdCBhZG1pbm9ubHkuXG5cdCAqIFRoZXJlIGlzIHNvbWUgZGlmZmVyZW5jZSBvbiBob3cgdHlwZXMgaGFuZGxlIHRoZSBgbGFiZWxgIGF0dHJpYnV0ZTpcblx0ICogLSBgZGl2YCwgYHNlbGVjdGAsIGBmaWVsZGAsIGBjaGVja2JveGAvYHJhZGlvYCwgYGlucHV0YCwgYHRleHRhcmVhYCwgYGhlYWRlcmAsIGFuZCBgZHluaW5wdXRgIGNhbiBhY2NlcHQgYW4gYXJyYXkgb2YgaXRlbXMsXG5cdCAqIGFuZCB0aGUgbGFiZWwgaXRlbShzKSBjYW4gYmUgYEVsZW1lbnRgcy5cblx0ICogLSBgb3B0aW9uYCwgYG9wdGdyb3VwYCwgYF9keW5pbnB1dF9lbGVtZW50YCwgYHN1Ym1pdGAsIGFuZCBgYnV0dG9uYCBhY2NlcHQgb25seSBhIHNpbmdsZSBzdHJpbmcuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcXVpY2tmb3JtIGVsZW1lbnQuIFNob3VsZFxuXHQgKiBzcGVjaWZ5IG9uZSBvZiB0aGUgYXZhaWxhYmxlIHR5cGVzIGZyb20gdGhlIGluZGV4IGFib3ZlLCBhcyB3ZWxsIGFzIGFueVxuXHQgKiByZWxldmFudCBhbmQgYXZhaWxhYmxlIGF0dHJpYnV0ZXMuXG5cdCAqIEBleGFtcGxlIG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdCAqICAgICBuYW1lOiAndGFyZ2V0Jyxcblx0ICogICAgIHR5cGU6ICdpbnB1dCcsXG5cdCAqICAgICBsYWJlbDogJ1lvdXIgdGFyZ2V0OicsXG5cdCAqICAgICB0b29sdGlwOiAnRW50ZXIgeW91ciB0YXJnZXQuIFJlcXVpcmVkLicsXG5cdCAqICAgICByZXF1aXJlZDogdHJ1ZVxuXHQgKiB9KTtcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuY2hpbGRzID0gW107XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkID0gMDtcblx0LyoqXG5cdCAqIEFwcGVuZHMgYW4gZWxlbWVudCB0byBjdXJyZW50IGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAcGFyYW0ge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSBkYXRhIC0gQSBxdWlja0Zvcm0gZWxlbWVudCBvciB0aGUgb2JqZWN0IHJlcXVpcmVkIHRvXG5cdCAqIGNyZWF0ZSB0aGUgcXVpY2tGb3JtIGVsZW1lbnQuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gVGhlIHNhbWUgZWxlbWVudCBwYXNzZWQgaW4uXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRsZXQgY2hpbGQ7XG5cdFx0aWYgKGRhdGEgaW5zdGFuY2VvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCkge1xuXHRcdFx0Y2hpbGQgPSBkYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZCA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChkYXRhKTtcblx0XHR9XG5cdFx0dGhpcy5jaGlsZHNbdGhpcy5jaGlsZHMubGVuZ3RoXSA9IGNoaWxkO1xuXHRcdHJldHVybiBjaGlsZDtcblx0fTtcblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IGZvciB0aGUgcXVpY2tGb3JtIGVsZW1lbnQuICBUaGlzIHNob3VsZCBiZSBjYWxsZWRcblx0ICogd2l0aG91dCBwYXJhbWV0ZXJzOiBgZm9ybS5yZW5kZXIoKWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbFN1Ymdyb3VwSWRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoaW50ZXJuYWxTdWJncm91cElkKSB7XG5cdFx0Y29uc3QgY3VycmVudE5vZGUgPSB0aGlzLmNvbXB1dGUodGhpcy5kYXRhLCBpbnRlcm5hbFN1Ymdyb3VwSWQpO1xuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHMpIHtcblx0XHRcdC8vIGRvIG5vdCBwYXNzIGludGVybmFsX3N1Ymdyb3VwX2lkIHRvIHJlY3Vyc2l2ZSBjYWxsc1xuXHRcdFx0Y3VycmVudE5vZGVbMV0uYXBwZW5kQ2hpbGQoY2hpbGQucmVuZGVyKCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gY3VycmVudE5vZGVbMF07XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0geyp9IGRhdGFcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluSWRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChkYXRhLCBpbklkKSB7XG5cdFx0bGV0IG5vZGU7XG5cdFx0bGV0IGNoaWxkQ29udGFpbmVyID0gbnVsbDtcblx0XHRsZXQgbGFiZWw7XG5cdFx0Y29uc3QgaWQgPSBgJHtpbklkID8gYCR7aW5JZH1fYCA6ICcnfW5vZGVfJHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5pZCsrfWA7XG5cdFx0aWYgKGRhdGEuYWRtaW5vbmx5ICYmICFNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0Ly8gaGVsbCBoYWNrIGFscGhhXG5cdFx0XHRkYXRhLnR5cGUgPSAnaGlkZGVuJztcblx0XHR9XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGN1cnJlbnQ7XG5cdFx0bGV0IHN1Ym5vZGU7XG5cdFx0c3dpdGNoIChkYXRhLnR5cGUpIHtcblx0XHRcdGNhc2UgJ2Zvcm0nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXHRcdFx0XHRub2RlLmNsYXNzTmFtZSA9ICdxdWlja2Zvcm0nO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZGF0YS5ldmVudFR5cGUgfHwgJ3N1Ym1pdCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZyYWdtZW50Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcdFx0Ly8gZnJhZ21lbnRzIGNhbid0IGhhdmUgYW55IGF0dHJpYnV0ZXMsIHNvIGp1c3QgcmV0dXJuIGl0IHN0cmFpZ2h0IGF3YXlcblx0XHRcdFx0cmV0dXJuIFtub2RlLCBub2RlXTtcblx0XHRcdGNhc2UgJ3NlbGVjdCc6IHtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc2VsZWN0ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSk7XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tdWx0aXBsZSkge1xuXHRcdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLnNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5saXN0KSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRncm91cCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc2VsZWN0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ29wdGlvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0aWYgKGRhdGEuc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdG5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcHRncm91cCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJzsgLy8gbXVzdCBiZSBvcHRpb25zIGhlcmVcblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHN1Ym5vZGVbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZpZWxkJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKSk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRpZiAoZGF0YS5uYW1lKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cklkID0gYCR7aWR9XyR7aX1gO1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGxldCBjdXJEaXY7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50eXBlID09PSAnaGVhZGVyJykge1xuXHRcdFx0XHRcdFx0XHQvLyBpbmxpbmUgaGFja1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JykpO1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdFx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGN1ckRpdiwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjdXJEaXYgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuaGlkZGVuKSB7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSBjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnZhbHVlcyA9IGN1cnJlbnQudmFsdWU7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50LnZhbHVlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGN1cklkKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgY3VycmVudC5uYW1lIHx8IGRhdGEubmFtZSk7XG5cdFx0XHRcdFx0XHQvLyBJZiBuYW1lIGlzIHByb3ZpZGVkIG9uIHRoZSBpbmRpdmlkdWFsIGNoZWNrYm94LCBhZGQgYSBkYXRhLXNpbmdsZVxuXHRcdFx0XHRcdFx0Ly8gYXR0cmlidXRlIHdoaWNoIGluZGljYXRlcyBpdCBpc24ndCBwYXJ0IG9mIGEgbGlzdCBvZiBjaGVja2JveGVzIHdpdGhcblx0XHRcdFx0XHRcdC8vIHNhbWUgbmFtZS4gVXNlZCBpbiBnZXRJbnB1dERhdGEoKVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zaW5nbGUnLCAnZGF0YS1zaW5nbGUnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGFiZWwgPSBjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGN1cnJlbnQubGFiZWwpKTtcblx0XHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwsIGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gc3R5bGVzIGdvIG9uIHRoZSBsYWJlbCwgZG9lc24ndCBtYWtlIHNlbnNlIHRvIHN0eWxlIGEgY2hlY2tib3gvcmFkaW9cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnN0eWxlKSB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjdXJyZW50LnN0eWxlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxldCBldmVudDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnN1Ymdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdGxldCB0bXBncm91cCA9IGN1cnJlbnQuc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHRtcGdyb3VwID0gZ2VuZXJhdGVBcnJheSh0bXBncm91cCk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ymdyb3VwUmF3ID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHRpZDogYCR7aWR9XyR7aX1fc3ViZ3JvdXBgLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbCBvZiB0bXBncm91cCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IG5ld0VsID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4uZWwsXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRuZXdFbC50eXBlIHx8PSBkYXRhLnR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwubmFtZSA9IGAke2N1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWV9LiR7bmV3RWwubmFtZX1gO1xuXHRcdFx0XHRcdFx0XHRcdHN1Ymdyb3VwUmF3LmFwcGVuZChuZXdFbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXAgPSBzdWJncm91cFJhdy5yZW5kZXIoY3VySWQpO1xuXHRcdFx0XHRcdFx0XHRzdWJncm91cC5jbGFzc05hbWUgPSAncXVpY2tmb3JtU3ViZ3JvdXAnO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnN1Ymdyb3VwID0gc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2hvd24gPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3Vibm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhZGQgdXNlcnMnIGV2ZW50IGxhc3QsIHNvIGl0IGNhbiBpbnRlcmFjdCB3aXRoIHRoZSBzdWJncm91cFxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnQuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjdXJyZW50LmV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2hpZnRDbGlja1N1cHBvcnQgJiYgZGF0YS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMobm9kZSwgZGF0YS5uYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBpbnB1dCBpcyBhY3R1YWxseSBhIHRleHQtdHlwZSwgc28gbnVtYmVyIGhlcmUgaW5oZXJpdHMgdGhlIHNhbWUgc3R1ZmZcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdC8vIEFkZCB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgYXR0cnNcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGRhdGEucGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEudHlwZSA9PT0gJ2lucHV0Jykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ21pbicsICdtYXgnLCAnc3RlcCcsICdsaXN0J10pIHtcblx0XHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ3ZhbHVlJywgJ3NpemUnLCAncGxhY2Vob2xkZXInLCAnbWF4bGVuZ3RoJ10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnZGlzYWJsZWQnLCAncmVxdWlyZWQnLCAncmVhZG9ubHknXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgYXR0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkeW5pbnB1dCc6IHtcblx0XHRcdFx0Y29uc3QgbWluID0gZGF0YS5taW4gfHwgMTtcblx0XHRcdFx0Y29uc3QgbWF4ID0gZGF0YS5tYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGNvbnN0IGxpc3ROb2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdGxhYmVsOiAn5pu05aSaJyxcblx0XHRcdFx0XHRkaXNhYmxlZDogbWluID49IG1heCxcblx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZS50YXJnZXQuc3VibGlzdCk7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5hcmVhLmFwcGVuZENoaWxkKG5ld05vZGUucmVuZGVyKCkpO1xuXHRcdFx0XHRcdFx0aWYgKCsrZS50YXJnZXQuY291bnRlciA+PSBlLnRhcmdldC5tYXgpIHtcblx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChtb3JlWzBdKTtcblx0XHRcdFx0Y29uc3QgWywgbW9yZUJ1dHRvbl0gPSBtb3JlO1xuXHRcdFx0XHRjb25zdCBzdWJsaXN0ID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdfZHluaW5wdXRfZWxlbWVudCcsXG5cdFx0XHRcdFx0bGFiZWw6IGRhdGEuc3VibGFiZWwgfHwgZGF0YS5sYWJlbCxcblx0XHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGEudmFsdWUsXG5cdFx0XHRcdFx0c2l6ZTogZGF0YS5zaXplLFxuXHRcdFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiBkYXRhLm1heGxlbmd0aCxcblx0XHRcdFx0XHRldmVudDogZGF0YS5ldmVudCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1pbjsgKytpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChzdWJsaXN0KTtcblx0XHRcdFx0XHRsaXN0Tm9kZS5hcHBlbmRDaGlsZChlbGVtLnJlbmRlcigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJsaXN0LnJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdHN1Ymxpc3QubW9yZWJ1dHRvbiA9IG1vcmVCdXR0b247XG5cdFx0XHRcdHN1Ymxpc3QubGlzdG5vZGUgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5zdWJsaXN0ID0gc3VibGlzdDtcblx0XHRcdFx0bW9yZUJ1dHRvbi5hcmVhID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24ubWF4ID0gbWF4IC0gbWluO1xuXHRcdFx0XHRtb3JlQnV0dG9uLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ19keW5pbnB1dF9lbGVtZW50Jzpcblx0XHRcdFx0Ly8gUHJpdmF0ZSwgc2ltaWxhciB0byBub3JtYWwgaW5wdXRcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5zaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tYXhsZW5ndGgpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgZGF0YS5tYXhsZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZW1vdmUpIHtcblx0XHRcdFx0XHRjb25zdCByZW1vdmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpCcsXG5cdFx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGUudGFyZ2V0Lmxpc3Rub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBub2RlXyA9IGUudGFyZ2V0LmlucHV0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbW9yZSA9IGUudGFyZ2V0Lm1vcmVidXR0b247XG5cdFx0XHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobm9kZV8pO1xuXHRcdFx0XHRcdFx0XHQtLW1vcmUuY291bnRlcjtcblx0XHRcdFx0XHRcdFx0bW9yZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVtb3ZlWzBdKTtcblx0XHRcdFx0XHRjb25zdCBbLCByZW1vdmVCdXR0b25dID0gcmVtb3ZlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5pbnB1dG5vZGUgPSBub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5saXN0bm9kZSA9IGRhdGEubGlzdG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLm1vcmVidXR0b24gPSBkYXRhLm1vcmVidXR0b247XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaWRkZW4nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoZWFkZXInOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXYnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1EZXNjcmlwdGlvbic7XG5cdFx0XHRcdFx0cmVzdWx0LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgfHwgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5jb2xzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCBkYXRhLmNvbHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJvd3MpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncm93cycsIGRhdGEucm93cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZXF1aXJlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlYWRvbmx5KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnZhbHVlID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgcGxhY2Vob2xkZXIgYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUucGxhY2Vob2xkZXIgPSBkYXRhLnBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vcmViaXRzLnF1aWNrRm9ybTogdW5rbm93biBlbGVtZW50IHR5cGUgJHtkYXRhLnR5cGUudG9TdHJpbmcoKX1gKTtcblx0XHR9XG5cdFx0Y2hpbGRDb250YWluZXIgfHw9IG5vZGU7XG5cdFx0aWYgKGRhdGEudG9vbHRpcCkge1xuXHRcdFx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGxhYmVsIHx8IG5vZGUsIGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5leHRyYSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuZXh0cmEgPSBkYXRhLmV4dHJhO1xuXHRcdH1cblx0XHRpZiAoZGF0YS4kZGF0YSkge1xuXHRcdFx0JChjaGlsZENvbnRhaW5lcikuZGF0YShkYXRhLiRkYXRhKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuc3R5bGUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBkYXRhLnN0eWxlKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuY2xhc3NOYW1lKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5jbGFzc05hbWUgPSBjaGlsZENvbnRhaW5lci5jbGFzc05hbWVcblx0XHRcdFx0PyBgJHtjaGlsZENvbnRhaW5lci5jbGFzc05hbWV9ICR7ZGF0YS5jbGFzc05hbWV9YFxuXHRcdFx0XHQ6IGRhdGEuY2xhc3NOYW1lO1xuXHRcdH1cblx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0cmV0dXJuIFtub2RlLCBjaGlsZENvbnRhaW5lcl07XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBqUXVlcnkgVUktYmFzZWQgdG9vbHRpcC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEByZXF1aXJlcyBqcXVlcnkudWlcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFRoZSBIVE1MIGVsZW1lbnQgYmVzaWRlIHdoaWNoIGEgdG9vbHRpcCBpcyB0byBiZSBnZW5lcmF0ZWQuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVG9vbHRpcC1yZWxhdGVkIGNvbmZpZ3VyYXRpb24gZGF0YS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcCA9IChub2RlLCBkYXRhKSA9PiB7XG5cdFx0Y29uc3QgdG9vbHRpcEJ1dHRvbiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHR0b29sdGlwQnV0dG9uLmNsYXNzTmFtZSA9ICdtb3JlYml0cy10b29sdGlwQnV0dG9uJztcblx0XHR0b29sdGlwQnV0dG9uLnRpdGxlID0gZGF0YS50b29sdGlwOyAvLyBQcm92aWRlcyB0aGUgY29udGVudCBmb3IgalF1ZXJ5IFVJXG5cdFx0dG9vbHRpcEJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnPycpKTtcblx0XHQkKHRvb2x0aXBCdXR0b24pLnRvb2x0aXAoe1xuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0bXk6ICdsZWZ0IHRvcCcsXG5cdFx0XHRcdGF0OiAnY2VudGVyIGJvdHRvbScsXG5cdFx0XHRcdGNvbGxpc2lvbjogJ2ZsaXBmaXQnLFxuXHRcdFx0fSxcblx0XHRcdC8vIERlcHJlY2F0ZWQgaW4gVUkgMS4xMiwgYnV0IE1XIHN0dWNrIG9uIDEuOS4yIGluZGVmaW5pdGVseTsgc2VlICMzOTggYW5kIFQ3MTM4NlxuXHRcdFx0dG9vbHRpcENsYXNzOiAnbW9yZWJpdHMtdWktdG9vbHRpcCcsXG5cdFx0fSk7XG5cdH07XG5cdC8vIFNvbWUgdXRpbGl0eSBtZXRob2RzIGZvciBtYW5pcHVsYXRpbmcgcXVpY2tGb3JtcyBhZnRlciB0aGVpciBjcmVhdGlvbjpcblx0Ly8gKE5vbmUgb2YgdGhlc2Ugd29yayBmb3IgXCJkeW5pbnB1dFwiIHR5cGUgZmllbGRzIGF0IHByZXNlbnQpXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBmaWxsZWQgZm9ybSBkYXRhIGVudGVyZWQgYnkgdGhlIHVzZXIsIHdpdGggdGhlIG9iamVjdFxuXHQgKiBrZXlzIGJlaW5nIHRoZSBmb3JtIGVsZW1lbnQgbmFtZXMuIERpc2FibGVkIGZpZWxkcyB3aWxsIGJlIGlnbm9yZWQsIGJ1dCBub3QgaGlkZGVuIGZpZWxkcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBXaXRoIGZpZWxkIG5hbWVzIGFzIGtleXMsIGlucHV0IGRhdGEgYXMgdmFsdWVzLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldElucHV0RGF0YSA9IChmb3JtKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0ge307XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmVsZW1lbnRzKSB7XG5cdFx0XHRpZiAoZmllbGQuZGlzYWJsZWQgfHwgIWZpZWxkLm5hbWUgfHwgIWZpZWxkLnR5cGUgfHwgZmllbGQudHlwZSA9PT0gJ3N1Ym1pdCcgfHwgZmllbGQudHlwZSA9PT0gJ2J1dHRvbicpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBGb3IgZWxlbWVudHMgaW4gc3ViZ3JvdXBzLCBxdWlja2Zvcm0gcHJlcGVuZHMgZWxlbWVudCBuYW1lcyB3aXRoXG5cdFx0XHQvLyBuYW1lIG9mIHRoZSBwYXJlbnQgZ3JvdXAgZm9sbG93ZWQgYnkgYSBwZXJpb2QsIGdldCByaWQgb2YgdGhhdC5cblx0XHRcdGNvbnN0IGZpZWxkTmFtZU5vcm0gPSBmaWVsZC5uYW1lLnNsaWNlKGZpZWxkLm5hbWUuaW5kZXhPZignLicpICsgMSk7XG5cdFx0XHRzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcblx0XHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdFx0XHRpZiAoZmllbGQuZGF0YXNldC5zaW5nbGUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLmNoZWNrZWQ7IC8vIGJvb2xlYW5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dIHx8PSBbXTtcblx0XHRcdFx0XHRcdGlmIChmaWVsZC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXVtyZXN1bHRbZmllbGROYW1lTm9ybV0ubGVuZ3RoXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSAkKGZpZWxkKS52YWwoKTsgLy8gZmllbGQudmFsdWUgZG9lc24ndCB3b3JrXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RleHQnOiAvLyBmYWxscyB0aHJvdWdoXG5cdFx0XHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZS50cmltKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gY291bGQgYmUgc2VsZWN0LW9uZSwgZGF0ZSwgbnVtYmVyLCBlbWFpbCwgZXRjXG5cdFx0XHRcdFx0aWYgKGZpZWxkLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFsbCBmb3JtIGVsZW1lbnRzIHdpdGggYSBnaXZlbiBmaWVsZCBuYW1lIG9yIElELlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgLSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgZmllbGRzLlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX0gLSBBcnJheSBvZiBtYXRjaGluZyBmb3JtIGVsZW1lbnRzLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRzID0gKGZvcm0sIGZpZWxkTmFtZSkgPT4ge1xuXHRcdGNvbnN0ICRmb3JtID0gJChmb3JtKTtcblx0XHRmaWVsZE5hbWUgPSAkLmVzY2FwZVNlbGVjdG9yKGZpZWxkTmFtZSk7IC8vIHNhbml0aXplIGlucHV0XG5cdFx0bGV0ICRlbGVtZW50cyA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYCk7XG5cdFx0aWYgKCRlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW1lbnRzLnRvQXJyYXkoKTtcblx0XHR9XG5cdFx0JGVsZW1lbnRzID0gJGZvcm0uZmluZChgIyR7ZmllbGROYW1lfWApO1xuXHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHR9O1xuXHQvKipcblx0ICogU2VhcmNoZXMgdGhlIGFycmF5IG9mIGVsZW1lbnRzIGZvciBhIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbiB3aXRoIGEgY2VydGFpblxuXHQgKiBgdmFsdWVgIGF0dHJpYnV0ZSwgYW5kIHJldHVybnMgdGhlIGZpcnN0IHN1Y2ggZWxlbWVudC4gUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnRbXX0gZWxlbWVudEFycmF5IC0gQXJyYXkgb2YgY2hlY2tib3ggb3IgcmFkaW8gZWxlbWVudHMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbHVlIHRvIHNlYXJjaCBmb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldENoZWNrYm94T3JSYWRpbyA9IChlbGVtZW50QXJyYXksIHZhbHVlKSA9PiB7XG5cdFx0Y29uc3QgZm91bmQgPSBlbGVtZW50QXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC52YWx1ZSA9PT0gdmFsdWU7XG5cdFx0fSk7XG5cdFx0aWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmb3VuZFswXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSAmbHQ7ZGl2PiBjb250YWluaW5nIHRoZSBmb3JtIGVsZW1lbnQsIG9yIHRoZSBmb3JtIGVsZW1lbnQgaXRzZWxmXG5cdCAqIE1heSBub3Qgd29yayBhcyBleHBlY3RlZCBvbiBjaGVja2JveGVzIG9yIHJhZGlvcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyID0gKGVsZW1lbnQpID0+IHtcblx0XHQvLyBmb3IgZGl2cywgaGVhZGluZ3MgYW5kIGZpZWxkc2V0cywgdGhlIGNvbnRhaW5lciBpcyB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywganVzdCByZXR1cm4gdGhlIHBhcmVudCBub2RlXG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIEhUTUwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBsYWJlbCBvZiB0aGUgZ2l2ZW4gZm9ybSBlbGVtZW50XG5cdCAqIChtYWlubHkgZm9yIGludGVybmFsIHVzZSkuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBidXR0b25zLCBkaXZzIGFuZCBoZWFkZXJzLCB0aGUgbGFiZWwgaXMgb24gdGhlIGVsZW1lbnQgaXRzZWxmXG5cdFx0aWYgKFxuXHRcdFx0ZWxlbWVudC50eXBlID09PSAnYnV0dG9uJyB8fFxuXHRcdFx0ZWxlbWVudC50eXBlID09PSAnc3VibWl0JyB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdC8vIGZvciBmaWVsZHNldHMsIHRoZSBsYWJlbCBpcyB0aGUgY2hpbGQgPGxlZ2VuZD4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGaWVsZFNldEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xlZ2VuZCcpO1xuXHRcdFx0Ly8gZm9yIHRleHRhcmVhcywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxoNT4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaDUnKTtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxsYWJlbD4gZWxlbWVudFxuXHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIGxhYmVsIHRleHQgb2YgdGhlIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuXHR9O1xuXHQvKipcblx0ICogU2V0cyB0aGUgbGFiZWwgb2YgdGhlIGVsZW1lbnQgdG8gdGhlIGdpdmVuIHRleHQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFRleHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc3VjY2VlZGVkLCBmYWxzZSBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCwgbGFiZWxUZXh0KSA9PiB7XG5cdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdChlbGVtZW50KTtcblx0XHRpZiAoIWxhYmVsRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRsYWJlbEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyB0aGUgZWxlbWVudCdzIGN1cnJlbnQgbGFiZWwsIGFuZCB0ZW1wb3JhcmlseSBzZXRzIHRoZSBsYWJlbCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBvcmFyeUxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHN1Y2NlZWRlZCwgYGZhbHNlYCBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5vdmVycmlkZUVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCB0ZW1wb3JhcnlMYWJlbFRleHQpID0+IHtcblx0XHRpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJywgTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbChlbGVtZW50KSk7XG5cdFx0fVxuXHRcdHJldHVybiBNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCk7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXN0b3JlcyB0aGUgbGFiZWwgc3RvcmVkIGJ5IG92ZXJyaWRlRWxlbWVudExhYmVsLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnJlc2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQpID0+IHtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHQvKipcblx0ICogU2hvd3Mgb3IgaGlkZXMgYSBmb3JtIGVsZW1lbnQgcGx1cyBpdHMgbGFiZWwgYW5kIHRvb2x0aXAuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8alF1ZXJ5fHN0cmluZyl9IGVsZW1lbnQgLSBIVE1ML2pRdWVyeSBlbGVtZW50LCBvciBqUXVlcnkgc2VsZWN0b3Igc3RyaW5nLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt2aXNpYmlsaXR5XSAtIFNraXAgdGhpcyB0byB0b2dnbGUgdmlzaWJpbGl0eS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50VmlzaWJpbGl0eSA9IChlbGVtZW50LCB2aXNpYmlsaXR5KSA9PiB7XG5cdFx0JChlbGVtZW50KS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyB0aGUgcXVlc3Rpb24gbWFyayBpY29uICh3aGljaCBkaXNwbGF5cyB0aGUgdG9vbHRpcCkgbmV4dCB0byBhIGZvcm0gZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnkpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRUb29sdGlwVmlzaWJpbGl0eSA9IChlbGVtZW50LCB2aXNpYmlsaXR5KSA9PiB7XG5cdFx0JChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudENvbnRhaW5lcihlbGVtZW50KSkuZmluZCgnLm1vcmViaXRzLXRvb2x0aXBCdXR0b24nKS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cdC8qKlxuXHQgKiBAZXh0ZXJuYWwgSFRNTEZvcm1FbGVtZW50XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IGNoZWNrZWQgaXRlbXMgaW4gdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEBmdW5jdGlvbiBleHRlcm5hbDpIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRDaGVja2VkID0gZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcblx0XHRjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHNbbmFtZV07XG5cdFx0aWYgKCFlbGVtZW50cykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBlbGVtZW50cztcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudHMuY2hlY2tlZCkge1xuXHRcdFx0XHRyZXR1cm4gW2VsZW1lbnRzLnZhbHVlXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50c1tpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHNbaV0udHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbGVtZW50c1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50c1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50c1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9O1xuXHQvKipcblx0ICogRG9lcyB0aGUgc2FtZSBhcyB7QGxpbmsgSFRNTEZvcm1FbGVtZW50LmdldENoZWNrZWR8Z2V0Q2hlY2tlZH0sIGJ1dCB3aXRoIHVuY2hlY2tlZCBlbGVtZW50cy5cblx0ICpcblx0ICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRVbmNoZWNrZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaW5kIGNoZWNrZWQgcHJvcGVydHkgb2YgZWxlbWVudHMgKGkuZS4gYSBjaGVja2JveFxuXHQgKiBvciBhIHJhZGlvYnV0dG9uKSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBvciBzZWxlY3Qgb3B0aW9ucyB0aGF0IGhhdmUgc2VsZWN0ZWRcblx0ICogc2V0IHRvIHRydWUgKGRvbid0IHRyeSB0byBtaXggc2VsZWN0cyB3aXRoIHJhZGlvL2NoZWNrYm94ZXMpLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIC0gT3B0aW9uYWxseSBzcGVjaWZ5IGVpdGhlciByYWRpbyBvciBjaGVja2JveCAoZm9yXG5cdCAqIHRoZSBldmVudCB0aGF0IGJvdGggY2hlY2tib3hlcyBhbmQgcmFkaW9idXR0b25zIGhhdmUgdGhlIHNhbWUgbmFtZSkuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmdbXX0gLSBDb250YWlucyB0aGUgdmFsdWVzIG9mIGVsZW1lbnRzIHdpdGggdGhlIGdpdmVuIG5hbWVcblx0ICogY2hlY2tlZCBwcm9wZXJ0eSBzZXQgdG8gdHJ1ZS5cblx0ICovXG5cdEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuZ2V0VW5jaGVja2VkID0gZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcblx0XHRjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHNbbmFtZV07XG5cdFx0aWYgKCFlbGVtZW50cykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBlbGVtZW50cztcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmICghb3B0aW9uc1tpXS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdGlmIChvcHRpb25zW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2UgaWYgKCFlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFlbGVtZW50c1tpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHNbaV0udHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbGVtZW50c1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50c1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50c1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9O1xuXHQvKipcblx0ICogVXRpbGl0aWVzIHRvIGhlbHAgcHJvY2VzcyBJUCBhZGRyZXNzZXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuaXBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5pcCA9IHtcblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhbiBJUHY2IGFkZHJlc3MgdG8gdGhlIGNhbm9uaWNhbCBmb3JtIHN0b3JlZCBhbmQgdXNlZCBieSBNZWRpYVdpa2kuXG5cdFx0ICogSmF2YVNjcmlwdCB0cmFuc2xhdGlvbiBvZiB0aGUge0BsaW5rIGh0dHBzOi8vZ2Vycml0Lndpa2ltZWRpYS5vcmcvci9wbHVnaW5zL2dpdGlsZXMvbWVkaWF3aWtpL2NvcmUvKy84ZWI2YWMzZTg0ZWEzMzEyZDM5MWNhOTZjMTJjNDllM2FkMDc1M2JiL2luY2x1ZGVzL3V0aWxzL0lQLnBocCMxMzF8YElQOjpzYW5pdGl6ZUlQKClgfVxuXHRcdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHRcdCAqIG5vcm1hbGl6ZWQsIGFuZCBleHBhbmRlZCB0byA4IHdvcmRzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHNhbml0aXplSVB2NjogKGFkZHJlc3MpID0+IHtcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRyaW0oKTtcblx0XHRcdGlmIChhZGRyZXNzID09PSAnJykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjZBZGRyZXNzKGFkZHJlc3MsIHRydWUpKSB7XG5cdFx0XHRcdHJldHVybiBhZGRyZXNzOyAvLyBub3RoaW5nIGVsc2UgdG8gZG8gZm9yIElQdjQgYWRkcmVzc2VzIG9yIGludmFsaWQgb25lc1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIGFueSB3aGl0ZXNwYWNlcywgY29udmVydCB0byB1cHBlciBjYXNlXG5cdFx0XHRhZGRyZXNzID0gYWRkcmVzcy50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0Ly8gRXhwYW5kIHplcm8gYWJicmV2aWF0aW9uc1xuXHRcdFx0Y29uc3QgYWJicmV2UG9zID0gYWRkcmVzcy5pbmRleE9mKCc6OicpO1xuXHRcdFx0aWYgKGFiYnJldlBvcyAhPT0gLTEpIHtcblx0XHRcdFx0Ly8gV2Uga25vdyB0aGlzIGlzIHZhbGlkIElQdjYuIEZpbmQgdGhlIGxhc3QgaW5kZXggb2YgdGhlXG5cdFx0XHRcdC8vIGFkZHJlc3MgYmVmb3JlIGFueSBDSURSIG51bWJlciAoZS5nLiBcImE6YjpjOjovMjRcIikuXG5cdFx0XHRcdGNvbnN0IENJRFJTdGFydCA9IGFkZHJlc3MuaW5kZXhPZignLycpO1xuXHRcdFx0XHRjb25zdCBhZGRyZXNzRW5kID0gQ0lEUlN0YXJ0ID09PSAtMSA/IGFkZHJlc3MubGVuZ3RoIC0gMSA6IENJRFJTdGFydCAtIDE7XG5cdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBiZWdpbm5pbmcuLi5cblx0XHRcdFx0bGV0IHJlcGVhdDtcblx0XHRcdFx0bGV0IGV4dHJhO1xuXHRcdFx0XHRsZXQgcGFkO1xuXHRcdFx0XHRpZiAoYWJicmV2UG9zID09PSAwKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzA6Jztcblx0XHRcdFx0XHRleHRyYSA9IGFkZHJlc3MgPT09ICc6OicgPyAnMCcgOiAnJzsgLy8gZm9yIHRoZSBhZGRyZXNzICc6Oidcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBlbmQuLi5cblx0XHRcdFx0fSBlbHNlIGlmIChhYmJyZXZQb3MgPT09IGFkZHJlc3NFbmQgLSAxKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzowJztcblx0XHRcdFx0XHRleHRyYSA9ICcnO1xuXHRcdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgaW4gdGhlIG1pZGRsZS4uLlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnOic7XG5cdFx0XHRcdFx0cGFkID0gODsgLy8gNisyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCByZXBsYWNlbWVudCA9IHJlcGVhdDtcblx0XHRcdFx0cGFkIC09IGFkZHJlc3Muc3BsaXQoJzonKS5sZW5ndGggLSAxO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZDsgaSsrKSB7XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgKz0gcmVwZWF0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcGxhY2VtZW50ICs9IGV4dHJhO1xuXHRcdFx0XHRhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKCc6OicsIHJlcGxhY2VtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gZWFjaCBibG9jIGFzIG5lZWRlZFxuXHRcdFx0cmV0dXJuIGFkZHJlc3MucmVwbGFjZSgvKF58OikwKyhbMC05QS1GYS1mXXsxLDR9KS9nLCAnJDEkMicpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiBJUCBhZGRyZXNzIGlzIGEgcmFuZ2UuICBKdXN0IGNvbmpvaW5zXG5cdFx0ICogYG13LnV0aWwuaXNJUEFkZHJlc3NgIHdpdGggYW5kIHdpdGhvdXQgdGhlIGBhbGxvd0Jsb2NrYCBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIGdpdmVuIGEgdmFsaWQgSVAgYWRkcmVzcyByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHRcdCAqL1xuXHRcdGlzUmFuZ2U6IChpcCkgPT4ge1xuXHRcdFx0cmV0dXJuIG13LnV0aWwuaXNJUEFkZHJlc3MoaXAsIHRydWUpICYmICFtdy51dGlsLmlzSVBBZGRyZXNzKGlwKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIHRoYXQgYW4gSVAgcmFuZ2UgaXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cy4gIE1vc3QgbGlrZWx5IHRvIGJlIHVzZWZ1bFxuXHRcdCAqIGluIGNvbmp1bmN0aW9uIHdpdGggYHdnUmVsZXZhbnRVc2VyTmFtZWAuICBDSURSIGxpbWl0cyBhcmUgaGFyZGNvZGVkIGFzIC8xNlxuXHRcdCAqIGZvciBJUHY0IGFuZCAvMzIgZm9yIElQdjYuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGZvciB2YWxpZCByYW5nZXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cyxcblx0XHQgKiBvdGhlcndpc2UgZmFsc2UgKHJhbmdlcyBvdXRzaWRlIHRoZSBsaW1pdCwgc2luZ2xlIElQcywgbm9uLUlQcykuXG5cdFx0ICovXG5cdFx0dmFsaWRDSURSOiAoaXApID0+IHtcblx0XHRcdGlmIChNb3JlYml0cy5pcC5pc1JhbmdlKGlwKSkge1xuXHRcdFx0XHRjb25zdCBzdWJuZXQgPSBOdW1iZXIucGFyc2VJbnQoaXAubWF0Y2goL1xcLyhcXGR7MSwzfSkkLylbMV0sIDEwKTtcblx0XHRcdFx0aWYgKHN1Ym5ldCkge1xuXHRcdFx0XHRcdC8vIFNob3VsZCBiZSByZWR1bmRhbnRcblx0XHRcdFx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwLCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0aWYgKHN1Ym5ldCA+PSAzMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN1Ym5ldCA+PSAxNikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIC82NCBzdWJuZXQgZm9yIGFuIElQdjYgYWRkcmVzcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcHY2IC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IGEgc3VibmV0LlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBGYWxzZSBpZiBub3QgSVB2NiBvciBiaWdnZXIgdGhhbiBhIDY0LFxuXHRcdCAqIG90aGVyd2lzZSB0aGUgKHNhbml0aXplZCkgLzY0IGFkZHJlc3MuXG5cdFx0ICovXG5cdFx0Z2V0NjQ6IChpcHY2KSA9PiB7XG5cdFx0XHRpZiAoIWlwdjYgfHwgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcHY2LCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzdWJuZXRNYXRjaCA9IGlwdjYubWF0Y2goL1xcLyhcXGR7MSwzfSkkLyk7XG5cdFx0XHRpZiAoc3VibmV0TWF0Y2ggJiYgTnVtYmVyLnBhcnNlSW50KHN1Ym5ldE1hdGNoWzFdLCAxMCkgPCA2NCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpcHY2ID0gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2KGlwdjYpO1xuXHRcdFx0Y29uc3QgaXBSZWdleCA9IC9eKCg/OlswLTlBLUZdezEsNH06KXs0fSkoPzpbMC05QS1GXXsxLDR9Oil7M31bMC05QS1GXXsxLDR9KD86XFwvXFxkezEsM30pPyQvO1xuXHRcdFx0cmV0dXJuIGlwdjYucmVwbGFjZShpcFJlZ2V4LCAnJDEnLmNvbmNhdCgnMDowOjA6MC82NCcpKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIHN0cmluZ3MuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc3RyaW5nXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuc3RyaW5nID0ge1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvVXBwZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvTG93ZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdpdmVzIGFuIGFycmF5IG9mIHN1YnN0cmluZ3Mgb2YgYHN0cmAgLSBzdGFydGluZyB3aXRoIGBzdGFydGAgYW5kXG5cdFx0ICogZW5kaW5nIHdpdGggYGVuZGAgLSB3aGljaCBpcyBub3QgaW4gYHNraXBsaXN0YC4gIEludGVuZGVkIGZvciB1c2Vcblx0XHQgKiBvbiB3aWtpdGV4dCB3aXRoIHRlbXBsYXRlcyBvciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZW5kXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nW118c3RyaW5nKX0gW3NraXBsaXN0XVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmdbXX1cblx0XHQgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGBzdGFydGAgYW5kIGBlbmRgIHN0cmluZ3MgYXJlbid0IG9mIHRoZSBzYW1lIGxlbmd0aC5cblx0XHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGBza2lwbGlzdGAgaXNuJ3QgYW4gYXJyYXkgb3Igc3RyaW5nXG5cdFx0ICovXG5cdFx0c3BsaXRXZWlnaHRlZEJ5S2V5czogKHN0ciwgc3RhcnQsIGVuZCwgc2tpcGxpc3QpID0+IHtcblx0XHRcdGlmIChzdGFydC5sZW5ndGggIT09IGVuZC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdzdGFydCBtYXJrZXIgYW5kIGVuZCBtYXJrZXIgbXVzdCBiZSBvZiB0aGUgc2FtZSBsZW5ndGgnKTtcblx0XHRcdH1cblx0XHRcdGxldCBsZXZlbCA9IDA7XG5cdFx0XHRsZXQgaW5pdGlhbCA9IG51bGw7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShza2lwbGlzdCkpIHtcblx0XHRcdFx0aWYgKHNraXBsaXN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRza2lwbGlzdCA9IFtdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBza2lwbGlzdCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRza2lwbGlzdCA9IFtza2lwbGlzdF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm9uLWFwcGxpY2FibGUgc2tpcGxpc3QgcGFyYW1ldGVyJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBza2lwbGlzdCkge1xuXHRcdFx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIGVsZW1lbnQubGVuZ3RoKSA9PT0gZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aSArPSBlbGVtZW50Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgc3RhcnQubGVuZ3RoKSA9PT0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAoaW5pdGlhbCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aW5pdGlhbCA9IGk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCsrbGV2ZWw7XG5cdFx0XHRcdFx0aSArPSBzdGFydC5sZW5ndGggLSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0ci5zbGljZShpLCBpICsgZW5kLmxlbmd0aCkgPT09IGVuZCkge1xuXHRcdFx0XHRcdC0tbGV2ZWw7XG5cdFx0XHRcdFx0aSArPSBlbmQubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWxldmVsICYmIGluaXRpYWwgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzdHIuc2xpY2UoaW5pdGlhbCwgaSArIDEpO1xuXHRcdFx0XHRcdGluaXRpYWwgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBmcmVlZm9ybSBcInJlYXNvblwiIChmcm9tIGEgdGV4dGFyZWEpIGZvciBkZWxldGlvbi9vdGhlclxuXHRcdCAqIHRlbXBsYXRlcyB0aGF0IGFyZSBnb2luZyB0byBiZSBzdWJzdGl0dXRlZCwgKGUuZy4gUFJPRCwgWEZELCBSUFApLlxuXHRcdCAqIEhhbmRsZXMgYHxgIG91dHNpZGUgYSBub3dpa2kgdGFnLlxuXHRcdCAqIE9wdGlvbmFsbHksIGFsc28gYWRkcyBhIHNpZ25hdHVyZSBpZiBub3QgcHJlc2VudCBhbHJlYWR5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFNpZ11cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFJlYXNvblRleHQ6IChzdHIsIGFkZFNpZykgPT4ge1xuXHRcdFx0bGV0IHJlYXNvbiA9IChzdHIgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIocmVhc29uKTtcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpLCAnPC9ubycuY29uY2F0KCd3aWtpJywgJz4nKSk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKC9cXHwvZywgJ3t7Jy5jb25jYXQoJ3N1YnN0OicsICchfX0nKSk7XG5cdFx0XHRyZWFzb24gPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRcdGlmIChhZGRTaWcpIHtcblx0XHRcdFx0Y29uc3Qgc2lnID0gJ35+Jy5jb25jYXQoJ35+Jyk7XG5cdFx0XHRcdGNvbnN0IHNpZ0luZGV4ID0gcmVhc29uLmxhc3RJbmRleE9mKHNpZyk7XG5cdFx0XHRcdGlmIChzaWdJbmRleCA9PT0gLTEgfHwgc2lnSW5kZXggIT09IHJlYXNvbi5sZW5ndGggLSBzaWcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmVhc29uICs9IGAgJHtzaWd9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlYXNvbi50cmltKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBGb3JtYXRzIGEgXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgaW5jbHVzaW9uIGluIGEgdXNlcnNwYWNlXG5cdFx0ICogbG9nLiAgUmVwbGFjZXMgbmV3bGluZXMgd2l0aCB7e1BifX0sIGFuZCBhZGRzIGFuIGV4dHJhIGAjYCBiZWZvcmVcblx0XHQgKiBsaXN0IGl0ZW1zIGZvciBwcm9wZXIgZm9ybWF0dGluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFJlYXNvbkZvckxvZzogKHN0cikgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3RyXG5cdFx0XHRcdFx0Ly8gaGFuZGxlIGxpbmUgYnJlYWtzLCB3aGljaCBvdGhlcndpc2UgYnJlYWsgbnVtYmVyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcbisvZywgJ3t7cGJ9fScpXG5cdFx0XHRcdFx0Ly8gcHV0IGFuIGV4dHJhICMgaW4gZnJvbnQgYmVmb3JlIGJ1bGxldGVkIG9yIG51bWJlcmVkIGxpc3QgaXRlbXNcblx0XHRcdFx0XHQucmVwbGFjZSgvXigjKykvZ20sICcjJDEnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eKFxcKispL2dtLCAnIyQxJylcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBMaWtlIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UoKWAsIGJ1dCBlc2NhcGVzIGFueSBkb2xsYXIgc2lnbnMgaW5cblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nLiAgVXNlZnVsIHdoZW4gdGhlIHRoZSByZXBsYWNlbWVudCBzdHJpbmcgaXNcblx0XHQgKiBhcmJpdHJhcnksIHN1Y2ggYXMgYSB1c2VybmFtZSBvciBmcmVlZm9ybSB1c2VyIGlucHV0LCBhbmQgY291bGRcblx0XHQgKiBjb250YWluIGRvbGxhciBzaWducy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUZXh0IGluIHdoaWNoIHRvIHJlcGxhY2UuXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHBhdHRlcm5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHNhZmVSZXBsYWNlOiAoc3RyaW5nLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHBhdHRlcm4sIHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSBpZiB0aGUgdXNlci1wcm92aWRlZCBleHBpcmF0aW9uIHdpbGwgYmUgY29uc2lkZXJlZCBhblxuXHRcdCAqIGluZmluaXRlLWxlbmd0aCBieSBNVy5cblx0XHQgKlxuXHRcdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9UNjg2NDZ9XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZXhwaXJ5XG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNJbmZpbml0eTogKGV4cGlyeSkgPT4ge1xuXHRcdFx0cmV0dXJuIFsnaW5kZWZpbml0ZScsICdpbmZpbml0eScsICdpbmZpbml0ZScsICduZXZlciddLmluY2x1ZGVzKGV4cGlyeSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBFc2NhcGVzIGEgc3RyaW5nIHRvIGJlIHVzZWQgaW4gYSBSZWdFeHAsIHJlcGxhY2luZyBzcGFjZXMgYW5kXG5cdFx0ICogdW5kZXJzY29yZXMgd2l0aCBgW18gXWAgYXMgdGhleSBhcmUgb2Z0ZW4gZXF1aXZhbGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gU3RyaW5nIHRvIGJlIGVzY2FwZWQuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgZXNjYXBlZCB0ZXh0LlxuXHRcdCAqL1xuXHRcdGVzY2FwZVJlZ0V4cDogKHRleHQpID0+IHtcblx0XHRcdHJldHVybiBtdy51dGlsLmVzY2FwZVJlZ0V4cCh0ZXh0KS5yZXBsYWNlKC8gfF8vZywgJ1tfIF0nKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIGZvcm1hdFRpbWVcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gdGltZSBUaGUgc3RyaW5nIHRvIGZvcmFtdFxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0VGltZTogKHRpbWUpID0+IHtcblx0XHRcdGxldCBtO1xuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqc2VjKG9uZCk/cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3np5JgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbWluKHV0ZSk/cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3liIZgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqaG91cnM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqZGF5cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lpKlgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqd2Vla3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2dVTFMoJ+S4quaciCcsICflgIvmnIgnKTtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnllYXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeW5tGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkodGltZS50cmltKCkpKSB7XG5cdFx0XHRcdHJldHVybiB3Z1VMUygn5peg6ZmQ5pyfJywgJ+eEoemZkOacnycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBcHBlbmQgcHVuY3R1YXRpb24gdG8gYSBzdHJpbmcgd2hlbiBpdCdzIG1pc3Npbmdcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHVuY3R1YXRpb25cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGFwcGVuZFB1bmN0dWF0aW9uOiAoc3RyLCBwdW5jdHVhdGlvbikgPT4ge1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cHVuY3R1YXRpb24gPSAn44CCJztcblx0XHRcdH1cblx0XHRcdGlmIChzdHIuc2VhcmNoKC9bLj8hO+OAgu+8n++8ge+8m10kLykgPT09IC0xKSB7XG5cdFx0XHRcdHN0ciArPSBwdW5jdHVhdGlvbjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBhcnJheXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuYXJyYXlcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5hcnJheSA9IHtcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggZHVwbGljYXRlcyByZW1vdmVkLlxuXHRcdCAqIEB0aHJvd3Mge0FycmF5fSBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdHVuaXE6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkudW5pcScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG5vbi1kdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgZWFjaCB2YWx1ZVxuXHRcdCAqIHJlbW92ZWQ7IHN1YnNlcXVlbnQgaW5zdGFuY2VzIG9mIHRob3NlIHZhbHVlcyAoZHVwbGljYXRlcykgcmVtYWluLlxuXHRcdCAqIEB0aHJvd3Mge0FycmF5fSBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdGR1cHM6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuZHVwcycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgIT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQnJlYWsgdXAgYW4gYXJyYXkgaW50byBzbWFsbGVyIGFycmF5cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGFyclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gU2l6ZSBvZiBlYWNoIGNodW5rIChleGNlcHQgdGhlIGxhc3QsIHdoaWNoIGNvdWxkIGJlIGRpZmZlcmVudCkuXG5cdFx0ICogQHJldHVybnMge0FycmF5W119IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHNtYWxsZXIsIGNodW5rZWQgYXJyYXlzLlxuXHRcdCAqIEB0aHJvd3Mge0FycmF5fSBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdGNodW5rOiAoYXJyLCBzaXplKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmNodW5rJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInIHx8IHNpemUgPD0gMCkge1xuXHRcdFx0XHQvLyBwcmV0dHkgaW1wb3NzaWJsZSB0byBkbyBhbnl0aGluZyA6KVxuXHRcdFx0XHRyZXR1cm4gW2Fycl07IC8vIHdlIHJldHVybiBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHRoaXMgYXJyYXkuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG51bUNodW5rcyA9IE1hdGguY2VpbChhcnIubGVuZ3RoIC8gc2l6ZSk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHtcblx0XHRcdFx0bGVuZ3RoOiBudW1DaHVua3MsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2h1bmtzOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gYXJyLnNsaWNlKGkgKiBzaXplLCAoaSArIDEpICogc2l6ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gZW5oYW5jZSBzZWxlY3QyIG1lbnVzLiBTZWUgdHdpbmtsZXdhcm4sIHR3aW5rbGVibG9ja1xuXHQgKiBmb3Igc2FtcGxlIHVzYWdlcy5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zZWxlY3QyLm9yZy99XG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc2VsZWN0MlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQHJlcXVpcmVzIGpxdWVyeS5zZWxlY3QyXG5cdCAqL1xuXHRNb3JlYml0cy5zZWxlY3QyID0ge1xuXHRcdG1hdGNoZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIGluIHdoaWNoIGlmIHRoZSBvcHRncm91cCBuYW1lIG1hdGNoZXMsIGFsbCBvcHRpb25zIGluIHRoYXRcblx0XHRcdCAqIGdyb3VwIGFyZSBzaG93biwgbGlrZSBpbiBqcXVlcnkuY2hvc2VuLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0b3B0Z3JvdXBGdWxsOiAocGFyYW1zLCBkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsTWF0Y2hlciA9ICQuZm4uc2VsZWN0Mi5kZWZhdWx0cy5kZWZhdWx0cy5tYXRjaGVyO1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE1hdGNoZXIocGFyYW1zLCBkYXRhKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiBwYXJhbXMudGVybSAmJiBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhwYXJhbXMudGVybS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0XHRcdHJlc3VsdC5jaGlsZHJlbiA9IGRhdGEuY2hpbGRyZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIHRoYXQgbWF0Y2hlcyBmcm9tIHRoZSBiZWdpbm5pbmcgb2Ygd29yZHMgb25seS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHRcdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0XHQgKi9cblx0XHRcdHdvcmRCZWdpbm5pbmc6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IXBhcmFtcy50ZXJtIHx8XG5cdFx0XHRcdFx0KHJlc3VsdCAmJiBuZXcgUmVnRXhwKGBcXFxcYiR7bXcudXRpbC5lc2NhcGVSZWdFeHAocGFyYW1zLnRlcm0pfWAsICdpJykudGVzdChyZXN1bHQudGV4dCkpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVW5kZXJsaW5lIG1hdGNoZWQgcGFydCBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0U2VhcmNoTWF0Y2hlczogKGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHNlYXJjaFRlcm0gPSBNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnk7XG5cdFx0XHRpZiAoIXNlYXJjaFRlcm0gfHwgZGF0YS5sb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpZHggPSBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSk7XG5cdFx0XHRpZiAoaWR4ID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS50ZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKDAsIGlkeCksXG5cdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0LmNzcygndGV4dC1kZWNvcmF0aW9uJywgJ3VuZGVybGluZScpXG5cdFx0XHRcdFx0LnRleHQoZGF0YS50ZXh0LnNsaWNlKGlkeCwgaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpKSxcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKGlkeCArIHNlYXJjaFRlcm0ubGVuZ3RoKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEludGVyY2VwdCBxdWVyeSBhcyBpdCBpcyBoYXBwZW5pbmcsIGZvciB1c2UgaW4gaGlnaGxpZ2h0U2VhcmNoTWF0Y2hlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0ICovXG5cdFx0cXVlcnlJbnRlcmNlcHRvcjogKHBhcmFtcykgPT4ge1xuXHRcdFx0TW9yZWJpdHMuc2VsZWN0MlNlYXJjaFF1ZXJ5ID0gcGFyYW1zICYmIHBhcmFtcy50ZXJtO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogT3BlbiBkcm9wZG93biBhbmQgYmVnaW4gc2VhcmNoIHdoZW4gdGhlIGAuc2VsZWN0Mi1zZWxlY3Rpb25gIGhhc1xuXHRcdCAqIGZvY3VzIGFuZCBhIGtleSBpcyBwcmVzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldlxuXHRcdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzMyNzkjaXNzdWVjb21tZW50LTQ0MjUyNDE0N31cblx0XHQgKi9cblx0XHRhdXRvU3RhcnQ6IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LndoaWNoIDwgNDgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHRhcmdldCA9ICQoZXYudGFyZ2V0KS5jbG9zZXN0KCcuc2VsZWN0Mi1jb250YWluZXInKTtcblx0XHRcdGlmICghdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucHJldigpO1xuXHRcdFx0dGFyZ2V0LnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdGNvbnN0IHNlYXJjaCA9IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuZHJvcGRvd24uJHNlYXJjaCB8fCB0YXJnZXQuZGF0YSgnc2VsZWN0MicpLnNlbGVjdGlvbi4kc2VhcmNoO1xuXHRcdFx0Ly8gVXNlIERPTSAuZm9jdXMoKSB0byB3b3JrIGFyb3VuZCBhIGpRdWVyeSAzLjYuMCByZWdyZXNzaW9uIChodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2lzc3Vlcy81OTkzKVxuXHRcdFx0c2VhcmNoWzBdLmZvY3VzKCk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFRlbXBvcmFyaWx5IGhpZGUgYSBwYXJ0IG9mIGEgc3RyaW5nIHdoaWxlIHByb2Nlc3NpbmcgdGhlIHJlc3Qgb2YgaXQuXG5cdCAqIFVzZWQgYnkge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UjY29tbWVudE91dEltYWdlfE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UuY29tbWVudE91dEltYWdlfS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIGluaXRpYWwgdGV4dCB0byBwcm9jZXNzLlxuXHQgKiBAZXhhbXBsZSBjb25zdCB1ID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKCdIZWxsbyB3b3JsZCA8IS0tIHdvcmxkIC0tPiB3b3JsZCcpO1xuXHQgKiB1LnVuYmluZCgnPCEtLScsICctLT4nKTsgLy8gdGV4dCBpbnNpZGUgY29tbWVudCByZW1haW5zIGludGFjdFxuXHQgKiB1LmNvbnRlbnQgPSB1LmNvbnRlbnQucmVwbGFjZSgvd29ybGQvZywgJ2VhcnRoJyk7XG5cdCAqIHUucmViaW5kKCk7IC8vIGdpdmVzICdIZWxsbyBlYXJ0aCA8IS0tIHdvcmxkIC0tPiBlYXJ0aCdcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdC8qKiBUaGUgdGV4dCBiZWluZyBwcm9jZXNzZWQuICovXG5cdFx0dGhpcy5jb250ZW50ID0gc3RyaW5nO1xuXHRcdHRoaXMuY291bnRlciA9IDA7XG5cdFx0dGhpcy5oaXN0b3J5ID0ge307XG5cdFx0dGhpcy5wcmVmaXggPSBgJVVOSVE6OiR7TWF0aC5yYW5kb20oKX06OmA7XG5cdFx0dGhpcy5wb3N0Zml4ID0gJzo6VU5JUSUnO1xuXHR9O1xuXHRNb3JlYml0cy51bmJpbmRlci5wcm90b3R5cGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogSGlkZSB0aGUgcmVnaW9uIGVuY2Fwc3VsYXRlZCBieSB0aGUgYHByZWZpeGAgYW5kIGBwb3N0Zml4YCBmcm9tXG5cdFx0ICogc3RyaW5nIHByb2Nlc3NpbmcuICBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIHdpbGwgYmUgdXNlZCBpbiBhXG5cdFx0ICogUmVnRXhwLCBzbyBpdGVtcyB0aGF0IG5lZWQgZXNjYXBpbmcgc2hvdWxkIGJlIHVzZSBgXFxcXGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHBvc3RmaXhcblx0XHQgKiBAdGhyb3dzIHtFcnJvcn0gSWYgZWl0aGVyIGBwcmVmaXhgIG9yIGBwb3N0Zml4YCBpcyBtaXNzaW5nLlxuXHRcdCAqL1xuXHRcdHVuYmluZChwcmVmaXgsIHBvc3RmaXgpIHtcblx0XHRcdGlmICghcHJlZml4IHx8ICFwb3N0Zml4KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQm90aCBwcmVmaXggYW5kIHBvc3RmaXggbXVzdCBiZSBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAke3ByZWZpeH0oW1xcXFxzXFxcXFNdKj8pJHtwb3N0Zml4fWAsICdnJyk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyZSwgTW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sodGhpcykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVzdG9yZSB0aGUgaGlkZGVuIHBvcnRpb24gb2YgdGhlIGBjb250ZW50YCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIG91dHB1dC5cblx0XHQgKi9cblx0XHRyZWJpbmQoKSB7XG5cdFx0XHRsZXQge2NvbnRlbnR9ID0gdGhpcztcblx0XHRcdGZvciAoY29uc3QgY3VycmVudCBpbiB0aGlzLmhpc3RvcnkpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHRoaXMuaGlzdG9yeSwgY3VycmVudCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGN1cnJlbnQsIHRoaXMuaGlzdG9yeVtjdXJyZW50XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9LFxuXHRcdHByZWZpeDogbnVsbCxcblx0XHQvLyAlVU5JUTo6MC41OTU1OTgxNjQ0OTM4MzI0Ojpcblx0XHRwb3N0Zml4OiBudWxsLFxuXHRcdC8vIDo6VU5JUSVcblx0XHRjb250ZW50OiBudWxsLFxuXHRcdC8vIHN0cmluZ1xuXHRcdGNvdW50ZXI6IG51bGwsXG5cdFx0Ly8gMCsrXG5cdFx0aGlzdG9yeTogbnVsbCwgLy8ge31cblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy51bmJpbmRlclxuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sgPSAoc2VsZikgPT4ge1xuXHRcdHJldHVybiAobWF0Y2gpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzZWxmLnByZWZpeCArIHNlbGYuY291bnRlciArIHNlbGYucG9zdGZpeDtcblx0XHRcdHNlbGYuaGlzdG9yeVtjdXJyZW50XSA9IG1hdGNoO1xuXHRcdFx0KytzZWxmLmNvdW50ZXI7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmRhdGUgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGEgZGF0ZSBvYmplY3Qgd2l0aCBlbmhhbmNlZCBwcm9jZXNzaW5nIGNhcGFiaWxpdGllcywgYSBsYVxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vfG1vbWVudC5qc30uIE1lZGlhV2lraSB0aW1lc3RhbXAgZm9ybWF0IGlzIGFsc29cblx0ICogYWNjZXB0YWJsZSwgaW4gYWRkaXRpb24gdG8gZXZlcnl0aGluZyB0aGF0IEpTIERhdGUoKSBhY2NlcHRzLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHQvLyBDaGVjayBNZWRpYVdpa2kgZm9ybWF0c1xuXHRcdC8vIE11c3QgYmUgZmlyc3Qgc2luY2UgZmlyZWZveCBlcnJvbmVvdXNseSBhY2NlcHRzIHRoZSB0aW1lc3RhbXBcblx0XHQvLyBmb3JtYXQsIHNhbnMgdGltZXpvbmUgKFNlZSBhbHNvOiAjOTIxLCAjOTM2LCAjMTE3NCwgIzExODcpLCBhbmQgdGhlXG5cdFx0Ly8gMTQtZGlnaXQgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgZGlmZmVyZW50bHkuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjb25zdCBbcGFyYW1dID0gYXJncztcblx0XHRcdGlmICgvXlxcZHsxNH0kLy50ZXN0KHBhcmFtKSkge1xuXHRcdFx0XHQvLyBZWVlZTU1EREhIbW1zc1xuXHRcdFx0XHRjb25zdCBkaWdpdE1hdGNoID0gLyhcXGR7NH0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8uZXhlYyhwYXJhbSk7XG5cdFx0XHRcdGlmIChkaWdpdE1hdGNoKSB7XG5cdFx0XHRcdFx0Ly8gLi4uLi4geWVhciAuLi4gbW9udGggLi4gZGF0ZSAuLi4gaG91ciAuLi4uIG1pbnV0ZSAuLi4uLiBzZWNvbmRcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoXG5cdFx0XHRcdFx0XHRSZWZsZWN0LmFwcGx5KERhdGUuVVRDLCBudWxsLCBbXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMV0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMl0gLSAxLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzNdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzRdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzVdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzZdLFxuXHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gV2lraXRleHQgc2lnbmF0dXJlIHRpbWVzdGFtcFxuXHRcdFx0XHRjb25zdCBkYXRlUGFydHMgPSBNb3JlYml0cy5sMTBuLnNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdChwYXJhbSk7XG5cdFx0XHRcdGlmIChkYXRlUGFydHMpIHtcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgZGF0ZVBhcnRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gVHJ5IHN0YW5kYXJkIGRhdGVcblx0XHR0aGlzLl9kID8/PSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KERhdGUsIFtEYXRlLCAuLi5nZW5lcmF0ZUFycmF5KGFyZ3MpXSkpKCk7XG5cdFx0Ly8gU3RpbGwgbm8/XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0bXcubG9nLndhcm4oJ0ludmFsaWQgTW9yZWJpdHMuZGF0ZSBpbml0aWFsaXNhdGlvbjonLCBhcmdzKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBMb2NhbGl6ZWQgc3RyaW5ncyBmb3IgZGF0ZSBwcm9jZXNzaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNTaG9ydFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNTaG9ydFxuXHQgKiBAcHJvcGVydHkge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fSByZWxhdGl2ZVRpbWVzXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEgPSB7XG5cdFx0Ly8gbWVzc2FnZSBuYW1lcyBoZXJlIGNvcnJlc3BvbmQgdG8gTWVkaWFXaWtpIG1lc3NhZ2UgbmFtZXNcblx0XHQvLyBObyBpMThuIGF0IHRoaXMgdGltZVxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vbnRoc1Nob3J0OiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0ZGF5czogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcblx0XHRkYXlzU2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG5cdFx0cmVsYXRpdmVUaW1lczoge1xuXHRcdFx0dGhpc0RheTogJ1vku4rlpKldQSBoaDptbScsXG5cdFx0XHRwcmV2RGF5OiAnW+aYqOWkqV1BIGhoOm1tJyxcblx0XHRcdG5leHREYXk6ICdb5piO5aSpXUEgaGg6bW0nLFxuXHRcdFx0dGhpc1dlZWs6ICdkZGRkQSBoaDptbScsXG5cdFx0XHRwYXN0V2VlazogJ1vkuIpdZGRkZEEgaGg6bW0nLFxuXHRcdFx0b3RoZXI6ICdZWVlZLU1NLUREJyxcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogTWFwIHVuaXRzIHdpdGggZ2V0dGVyL3NldHRlciBmdW5jdGlvbiBuYW1lcywgZm9yIGBhZGRgIGFuZCBgc3VidHJhY3RgXG5cdCAqIG1ldGhvZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY29uZHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1pbnV0ZXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGhvdXJzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB3ZWVrc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB5ZWFyc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS51bml0TWFwID0ge1xuXHRcdHNlY29uZHM6ICdTZWNvbmRzJyxcblx0XHRtaW51dGVzOiAnTWludXRlcycsXG5cdFx0aG91cnM6ICdIb3VycycsXG5cdFx0ZGF5czogJ0RhdGUnLFxuXHRcdHdlZWtzOiAnV2VlaycsXG5cdFx0Ly8gTm90IGEgZnVuY3Rpb24gYnV0IGhhbmRsZWQgaW4gYGFkZGAgdGhyb3VnaCBjdW5uaW5nIHVzZSBvZiBtdWx0aXBsaWNhdGlvblxuXHRcdG1vbnRoczogJ01vbnRoJyxcblx0XHR5ZWFyczogJ0Z1bGxZZWFyJyxcblx0fTtcblx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGUgPSB7XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuXHRcdGlzVmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNCZWZvcmUoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNBZnRlcihkYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ01vbnRoTmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDRGF5TmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldERheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGQgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHRcdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdFx0ICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0YWRkKG51bWJlciwgdW5pdCkge1xuXHRcdFx0bGV0IG51bSA9IE51bWJlci5wYXJzZUludChudW1iZXIsIDEwKTsgLy8gbm9ybWFsaXplXG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBudW1iZXIgXCIke251bWJlcn1cIiBwcm92aWRlZC5gKTtcblx0XHRcdH1cblx0XHRcdHVuaXQgPSB1bml0LnRvTG93ZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0Y29uc3Qge3VuaXRNYXB9ID0gTW9yZWJpdHMuZGF0ZTtcblx0XHRcdGxldCB1bml0Tm9ybSA9IHVuaXRNYXBbdW5pdF0gfHwgdW5pdE1hcFtgJHt1bml0fXNgXTsgLy8gc28gdGhhdCBib3RoIHNpbmd1bGFyIGFuZCAgcGx1cmFsIGZvcm1zIHdvcmtcblx0XHRcdGlmICh1bml0Tm9ybSkge1xuXHRcdFx0XHQvLyBObyBidWlsdC1pbiB3ZWVrIGZ1bmN0aW9ucywgc28gcmF0aGVyIHRoYW4gYnVpbGQgb3V0IElTTydzIGdldFdlZWsvc2V0V2VlaywganVzdCBtdWx0aXBseVxuXHRcdFx0XHQvLyBQcm9iYWJseSBjYW4ndCBiZSB1c2VkIGZvciBKdWxpYW4tPkdyZWdvcmlhbiBjaGFuZ2VvdmVycywgZXRjLlxuXHRcdFx0XHRpZiAodW5pdE5vcm0gPT09ICdXZWVrJykge1xuXHRcdFx0XHRcdHVuaXROb3JtID0gJ0RhdGUnO1xuXHRcdFx0XHRcdG51bSAqPSA3O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbYHNldCR7dW5pdE5vcm19YF0odGhpc1tgZ2V0JHt1bml0Tm9ybX1gXSgpICsgbnVtKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBcIiR7dW5pdH1cIjogT25seSAke09iamVjdC5rZXlzKHVuaXRNYXApLmpvaW4oJywgJyl9IGFyZSBhbGxvd2VkLmApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU3VidHJhY3RzIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3Mge0Vycm9yfSBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0c3VidHJhY3QobnVtYmVyLCB1bml0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQoLW51bWJlciwgdW5pdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZyBwZXIgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG5cdFx0ICogUmVwbGFjZW1lbnQgc3ludGF4IGlzIGEgc3Vic2V0IG9mIHRoYXQgaW4gbW9tZW50LmpzOlxuXHRcdCAqXG5cdFx0ICogfCBTeW50YXggfCBPdXRwdXQgfFxuXHRcdCAqIHwtLS0tLS0tLXwtLS0tLS0tLXxcblx0XHQgKiB8IEggfCBIb3VycyAoMjQtaG91cikgfFxuXHRcdCAqIHwgSEggfCBIb3VycyAoMjQtaG91ciwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBoIHwgSG91cnMgKDEyLWhvdXIpIHxcblx0XHQgKiB8IGhoIHwgSG91cnMgKDEyLWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgQSB8IEFNIG9yIFBNIHxcblx0XHQgKiB8IG0gfCBNaW51dGVzIHxcblx0XHQgKiB8IG1tIHwgTWludXRlcyAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBzIHwgU2Vjb25kcyB8XG5cdFx0ICogfCBzcyB8IFNlY29uZHMgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgU1NTIHwgTWlsbGlzZWNvbmRzIGZyYWdtZW50LCAzIGRpZ2l0cyB8XG5cdFx0ICogfCBkIHwgRGF5IG51bWJlciBvZiB0aGUgd2VlayAoU3VuPTApIHxcblx0XHQgKiB8IGRkZCB8IEFiYnJldmlhdGVkIGRheSBuYW1lIHxcblx0XHQgKiB8IGRkZGQgfCBGdWxsIGRheSBuYW1lIHxcblx0XHQgKiB8IEQgfCBEYXRlIHxcblx0XHQgKiB8IEREIHwgRGF0ZSAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBNIHwgTW9udGggbnVtYmVyICgxLWluZGV4ZWQpIHxcblx0XHQgKiB8IE1NIHwgTW9udGggbnVtYmVyICgxLWluZGV4ZWQsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgTU1NIHwgQWJicmV2aWF0ZWQgbW9udGggbmFtZSB8XG5cdFx0ICogfCBNTU1NIHwgRnVsbCBtb250aCBuYW1lIHxcblx0XHQgKiB8IFkgfCBZZWFyIHxcblx0XHQgKiB8IFlZIHwgRmluYWwgdHdvIGRpZ2l0cyBvZiB5ZWFyICgyMCBmb3IgMjAyMCwgNDIgZm9yIDE5NDIpIHxcblx0XHQgKiB8IFlZWVkgfCBZZWFyIChzYW1lIGFzIGBZYCkgfFxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdHN0ciAtIEZvcm1hdCB0aGUgZGF0ZSBpbnRvIGEgc3RyaW5nLCB1c2luZ1xuXHRcdCAqIHRoZSByZXBsYWNlbWVudCBzeW50YXguICBVc2UgYFtgIGFuZCBgXWAgdG8gZXNjYXBlIGl0ZW1zLiAgSWYgbm90XG5cdFx0ICogcHJvdmlkZWQsIHdpbGwgcmV0dXJuIHRoZSBJU08tODYwMS1mb3JtYXR0ZWQgc3RyaW5nLlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gYHN5c3RlbWAgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0XHQgKiBgdXRjYCwgb3Igc3BlY2lmeSBhIHRpbWUgem9uZSBhcyBudW1iZXIgb2YgbWludXRlcyByZWxhdGl2ZSB0byBVVEMuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXQoZm9ybWF0c3RyLCB6b25lKSB7XG5cdFx0XHRpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdHJldHVybiAnSW52YWxpZCBkYXRlJzsgLy8gUHV0IHRoZSB0cnV0aCBvdXQsIHByZWZlcmFibGUgdG8gXCJOYU5OYU5OYW4gTmFOOk5hTlwiIG9yIHdoYXRldmVyXG5cdFx0XHR9XG5cblx0XHRcdGxldCB1ZGF0ZSA9IHRoaXM7XG5cdFx0XHQvLyBjcmVhdGUgYSBuZXcgZGF0ZSBvYmplY3QgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGRhdGUgdG8gZGlzcGxheSBhcyBzeXN0ZW0gdGltZVxuXHRcdFx0aWYgKHpvbmUgPT09ICd1dGMnKSB7XG5cdFx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCksICdtaW51dGVzJyk7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB6b25lID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHQvLyBjb252ZXJ0IHRvIHV0YywgdGhlbiBhZGQgdGhlIHV0YyBvZmZzZXQgZ2l2ZW5cblx0XHRcdFx0dWRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmdldFRpbWUoKSkuYWRkKHRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSArIHpvbmUsICdtaW51dGVzJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBkZWZhdWx0IHRvIElTT1N0cmluZ1xuXHRcdFx0aWYgKCFmb3JtYXRzdHIpIHtcblx0XHRcdFx0cmV0dXJuIHVkYXRlLnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWQgPSAobnVtLCBsZW4pID0+IHtcblx0XHRcdFx0bGVuIHx8PSAyOyAvLyBVcCB0byBsZW5ndGggb2YgMDAgKyAxXG5cdFx0XHRcdHJldHVybiBgMDAke251bX1gLnRvU3RyaW5nKCkuc2xpY2UoMCAtIGxlbik7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgaDI0ID0gdWRhdGUuZ2V0SG91cnMoKTtcblx0XHRcdGNvbnN0IG0gPSB1ZGF0ZS5nZXRNaW51dGVzKCk7XG5cdFx0XHRjb25zdCBzID0gdWRhdGUuZ2V0U2Vjb25kcygpO1xuXHRcdFx0Y29uc3QgbXMgPSB1ZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcblx0XHRcdGNvbnN0IEQgPSB1ZGF0ZS5nZXREYXRlKCk7XG5cdFx0XHRjb25zdCBNID0gdWRhdGUuZ2V0TW9udGgoKSArIDE7XG5cdFx0XHRjb25zdCBZID0gdWRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdGNvbnN0IGgxMiA9IGgyNCAlIDEyIHx8IDEyO1xuXHRcdFx0Y29uc3QgYW1PclBtID0gaDI0ID49IDEyID8gJ+S4i+WNiCcgOiAn5LiK5Y2IJztcblx0XHRcdGNvbnN0IHJlcGxhY2VtZW50TWFwID0ge1xuXHRcdFx0XHRISDogcGFkKGgyNCksXG5cdFx0XHRcdEg6IGgyNCxcblx0XHRcdFx0aGg6IHBhZChoMTIpLFxuXHRcdFx0XHRoOiBoMTIsXG5cdFx0XHRcdEE6IGFtT3JQbSxcblx0XHRcdFx0bW06IHBhZChtKSxcblx0XHRcdFx0bSxcblx0XHRcdFx0c3M6IHBhZChzKSxcblx0XHRcdFx0cyxcblx0XHRcdFx0U1NTOiBwYWQobXMsIDMpLFxuXHRcdFx0XHRkZGRkOiB1ZGF0ZS5nZXREYXlOYW1lKCksXG5cdFx0XHRcdGRkZDogdWRhdGUuZ2V0RGF5TmFtZUFiYnJldigpLFxuXHRcdFx0XHRkOiB1ZGF0ZS5nZXREYXkoKSxcblx0XHRcdFx0REQ6IHBhZChEKSxcblx0XHRcdFx0RCxcblx0XHRcdFx0TU1NTTogdWRhdGUuZ2V0TW9udGhOYW1lKCksXG5cdFx0XHRcdE1NTTogdWRhdGUuZ2V0TW9udGhOYW1lQWJicmV2KCksXG5cdFx0XHRcdE1NOiBwYWQoTSksXG5cdFx0XHRcdE0sXG5cdFx0XHRcdFlZWVk6IFksXG5cdFx0XHRcdFlZOiBwYWQoWSAlIDEwMCksXG5cdFx0XHRcdFksXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoZm9ybWF0c3RyKTsgLy8gZXNjYXBlIHN0dWZmIGJldHdlZW4gWy4uLl1cblx0XHRcdHVuYmluZGVyLnVuYmluZChTdHJpbmcucmF3YFxcW2AsIFN0cmluZy5yYXdgXFxdYCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvKiBSZWdleCBub3Rlczpcblx0XHRcdFx0ICogZChkezIsM30pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMyBvciA0IG9jY3VycmVuY2VzIG9mICdkJyAoJ2RkJyBpcyB0cmVhdGVkIGFzIGEgZG91YmxlIG1hdGNoIG9mICdkJylcblx0XHRcdFx0ICogWXsxLDJ9KFl7Mn0pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMiBvciA0IG9jY3VycmVuY2VzIG9mICdZJ1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0L0h7MSwyfXxoezEsMn18bXsxLDJ9fHN7MSwyfXxTU1N8ZChkezIsM30pP3xEezEsMn18TXsxLDR9fFl7MSwyfShZezJ9KT98QS9nLFxuXHRcdFx0XHQobWF0Y2gpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZW1lbnRNYXBbbWF0Y2hdO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHVuYmluZGVyLnJlYmluZCgpLnJlcGxhY2UoL1xcWyguKj8pXFxdL2csICckMScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYSByZWFkYWJsZSByZWxhdGl2ZSB0aW1lIHN0cmluZyBzdWNoIGFzIFwiWWVzdGVyZGF5IGF0IDY6NDMgUE1cIiBvciBcIkxhc3QgVGh1cnNkYXkgYXQgMTE6NDUgQU1cIi5cblx0XHQgKiBTaW1pbGFyIHRvIGBjYWxlbmRhcmAgaW4gbW9tZW50LmpzLCBidXQgd2l0aCB0aW1lIHpvbmUgc3VwcG9ydC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gJ3N5c3RlbScgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0XHQgKiAndXRjJyAoZm9yIFVUQyksIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcGFzdCBVVEMuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRjYWxlbmRhcih6b25lKSB7XG5cdFx0XHQvLyBaZXJvIG91dCB0aGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgYW5kIG1pbGxpc2Vjb25kcyAtIGtlZXBpbmcgb25seSB0aGUgZGF0ZTtcblx0XHRcdC8vIGZpbmQgdGhlIGRpZmZlcmVuY2UuIE5vdGUgdGhhdCBzZXRIb3VycygpIHJldHVybnMgdGhlIHNhbWUgdGhpbmcgYXMgZ2V0VGltZSgpLlxuXHRcdFx0Y29uc3QgZGF0ZURpZmYgPSAobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKHRoaXMpLnNldEhvdXJzKDAsIDAsIDAsIDApKSAvIDguNjRlNztcblx0XHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAwOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzRGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucHJldkRheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPiAwICYmIGRhdGVEaWZmIDwgNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucGFzdFdlZWssIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAtMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMubmV4dERheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPCAwICYmIGRhdGVEaWZmID4gLTc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNXZWVrLCB6b25lKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMub3RoZXIsIHpvbmUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgbWF0Y2hlcyB3aWtpdGV4dCBzZWN0aW9uIHRpdGxlcywgc3VjaFxuXHRcdCAqIGFzIGA9PURlY2VtYmVyIDIwMTk9PWAgb3IgYD09PSBKYW4gMjAxOCA9PT1gLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1JlZ0V4cH1cblx0XHQgKi9cblx0XHRtb250aEhlYWRlclJlZ2V4KCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBeKD09KylcXFxccyoke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQoPzoke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9fCR7dGhpcy5nZXRVVENNb250aE5hbWVBYmJyZXYoKX0pXFxcXHMqXFxcXDFgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIHdpa2l0ZXh0IHNlY3Rpb24gaGVhZGVyIHdpdGggdGhlIG1vbnRoIGFuZCB5ZWFyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtsZXZlbD0yXSAtIEhlYWRlciBsZXZlbC4gIFBhc3MgMCBmb3IganVzdCB0aGUgdGV4dFxuXHRcdCAqIHdpdGggbm8gd2lraXRleHQgbWFya2VycyAoPT0pLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXIobGV2ZWwpIHtcblx0XHRcdC8vIERlZmF1bHQgdG8gMiwgYnV0IGFsbG93IGZvciAwIG9yIHN0cmluZ3kgbnVtYmVyc1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIucGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0XHRcdGxldmVsID0gTnVtYmVyLmlzTmFOKGxldmVsKSA/IDIgOiBsZXZlbDtcblx0XHRcdGNvbnN0IGhlYWRlciA9ICc9Jy5yZXBlYXQobGV2ZWwpO1xuXHRcdFx0Y29uc3QgdGV4dCA9IGAke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9YDtcblx0XHRcdGlmIChoZWFkZXIubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHdpa2l0ZXh0LWZvcm1hdHRlZCBoZWFkZXJcblx0XHRcdFx0cmV0dXJuIGAke2hlYWRlcn0gJHt0ZXh0fSAke2hlYWRlcn1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRleHQ7IC8vIEp1c3QgdGhlIHN0cmluZ1xuXHRcdH0sXG5cdH07XG5cdC8vIEFsbG93IG5hdGl2ZSBEYXRlLnByb3RvdHlwZSBtZXRob2RzIHRvIGJlIHVzZWQgb24gTW9yZWJpdHMuZGF0ZSBvYmplY3RzXG5cdGZvciAoY29uc3QgZnVuYyBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhEYXRlLnByb3RvdHlwZSkpIHtcblx0XHQvLyBFeGNsdWRlIG1ldGhvZHMgdGhhdCBjb2xsaWRlIHdpdGggUGFnZVRyaWFnZSdzIERhdGUuanMgZXh0ZXJuYWwsIHdoaWNoIGNsb2JiZXJzIG5hdGl2ZSBEYXRlXG5cdFx0aWYgKCFbJ2FkZCcsICdnZXREYXlOYW1lJywgJ2dldE1vbnRoTmFtZSddLmluY2x1ZGVzKGZ1bmMpKSB7XG5cdFx0XHRNb3JlYml0cy5kYXRlLnByb3RvdHlwZVtmdW5jXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kW2Z1bmNdKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFZhcmlvdXMgb2JqZWN0cyBmb3Igd2lraSBlZGl0aW5nIGFuZCBBUEkgYWNjZXNzLCBpbmNsdWRpbmdcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2kgPSB7fTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGFzIG9mIE5vdmVtYmVyIDIwMjBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgaGFzIGJlZW4gZGVwcmVjYXRlZCwgdXNlIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGluc3RlYWQuJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0KCk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IG1lc3NhZ2UgYW5kL29yIHJlZGlyZWN0IHRvIHBhZ2UgdXBvbiBjb21wbGV0aW9uIG9mIHRhc2tzLlxuXHQgKlxuXHQgKiBFdmVyeSBjYWxsIHRvIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSByZXN1bHRzIGluIHRoZSBkaXNwYXRjaCBvZiBhblxuXHQgKiBhc3luY2hyb25vdXMgY2FsbGJhY2suIEVhY2ggY2FsbGJhY2sgY2FuIGluIHR1cm4gbWFrZSBhbiBhZGRpdGlvbmFsIGNhbGwgdG9cblx0ICogTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHRvIGNvbnRpbnVlIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZS4gQXQgdGhlXG5cdCAqIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrIG9mIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZSwgaXQgaXMgbm90XG5cdCAqIHBvc3NpYmxlIHRvIHNpbXBseSByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGNhbGxlciBiZWNhdXNlIHRoZXJlIGlzIG5vIGNhbGxcblx0ICogc3RhY2sgbGVhZGluZyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0LiBJbnN0ZWFkLFxuXHQgKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzIGNhbGxlZCB0byBkaXNwbGF5IHRoZSByZXN1bHQgdG9cblx0ICogdGhlIHVzZXIgYW5kIHRvIHBlcmZvcm0gYW4gb3B0aW9uYWwgcGFnZSByZWRpcmVjdC5cblx0ICpcblx0ICogVGhlIGRldGVybWluYXRpb24gb2Ygd2hlbiB0byBjYWxsIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXNcblx0ICogbWFuYWdlZCB0aHJvdWdoIHRoZSBnbG9iYWxzIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBhbmRcblx0ICogTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdC4gTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGlzXG5cdCAqIGluY3JlbWVudGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBNb3JlYml0cy53aWtpLmFwaSBjYWxsIGFuZCBkZWNyZW1lbnRlZFxuXHQgKiBhZnRlciB0aGUgY29tcGxldGlvbiBvZiBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGRvZXNcblx0ICogbm90IGNyZWF0ZSBhIG5ldyBNb3JlYml0cy53aWtpLmFwaSBvYmplY3QgYmVmb3JlIGV4aXRpbmcsIGl0IGlzIHRoZSBmaW5hbFxuXHQgKiBzdGVwIGluIHRoZSBwcm9jZXNzaW5nIGNoYWluIGFuZCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIHdpbGxcblx0ICogdGhlbiBiZSBjYWxsZWQuXG5cdCAqXG5cdCAqIE9wdGlvbmFsbHksIGNhbGxlcnMgbWF5IHVzZSBNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKSB0byBpbmRpY2F0ZSB0aGF0XG5cdCAqIHByb2Nlc3NpbmcgaXMgbm90IGNvbXBsZXRlIHVwb24gdGhlIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLiAgVGhpcyBpcyB1c2VkIGZvciBiYXRjaCBvcGVyYXRpb25zLiBUaGUgZW5kIG9mIGEgYmF0Y2ggaXNcblx0ICogc2lnbmFsZWQgYnkgY2FsbGluZyBNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKS5cblx0ICpcblx0ICogQHBhcmFtIHt0eXBlb2YgTW9yZWJpdHN9IHNlbGZcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkID0gKHNlbGYpID0+IHtcblx0XHRpZiAoLS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDApIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KHNlbGYpO1xuXHRcdH1cblx0fTtcblx0Ly8gQ2hhbmdlIHBlciBhY3Rpb24gd2FudGVkXG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCA9ICgpID0+IHtcblx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSk7XG5cdFx0fVxuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkge1xuXHRcdFx0Ly8gaWYgaXQgaXNuJ3QgYSBVUkwsIG1ha2UgaXQgb25lLiBUT0RPOiBUaGlzIGJyZWFrcyBvbiB0aGUgYXJ0aWNsZXMgJ2h0dHA6Ly8nLCAnZnRwOi8vJywgYW5kIHNpbWlsYXIgb25lcy5cblx0XHRcdGlmICghL15cXHcrOlxcL1xcLy8udGVzdChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkpIHtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBtdy51dGlsLmdldFVybChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCk7XG5cdFx0XHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5mb2xsb3dSZWRpcmVjdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCArPSAnP3JlZGlyZWN0PW5vJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uID0gTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3Q7XG5cdFx0XHR9LCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0KTtcblx0XHR9XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0ID1cblx0XHR3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0ID09PSB1bmRlZmluZWQgPyA1MDAwIDogd2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSA9IG51bGw7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0KytNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0O1xuXHR9O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKTtcblx0XHR9XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hcGkgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQW4gZWFzeSB3YXkgdG8gdGFsayB0byB0aGUgTWVkaWFXaWtpIEFQSS4gIEFjY2VwdHMgZWl0aGVyIGpzb24gb3IgeG1sXG5cdCAqIChkZWZhdWx0KSBmb3JtYXRzOyBpZiBqc29uIGlzIHNlbGVjdGVkLCB3aWxsIGRlZmF1bHQgdG8gYGZvcm1hdHZlcnNpb249MmBcblx0ICogdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuICBTaW1pbGFybHksIGVuZm9yY2VzIG5ld2VyIGBlcnJvcmZvcm1hdGBzLFxuXHQgKiBkZWZhdWx0aW5nIHRvIGBodG1sYCBpZiB1bnNwZWNpZmllZC4gIGB1c2VsYW5nYCBlbmZvcmNlZCB0byB0aGUgd2lraSdzXG5cdCAqIGNvbnRlbnQgbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEluIG5ldyBjb2RlLCB0aGUgdXNlIG9mIHRoZSBsYXN0IDMgcGFyYW1ldGVycyBzaG91bGQgYmUgYXZvaWRlZCwgaW5zdGVhZFxuXHQgKiB1c2Uge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpI3NldFN0YXR1c0VsZW1lbnR8c2V0U3RhdHVzRWxlbWVudCgpfSB0byBiaW5kXG5cdCAqIHRoZSBzdGF0dXMgZWxlbWVudCAoaWYgbmVlZGVkKSBhbmQgdXNlIGAudGhlbigpYCBvciBgLmNhdGNoKClgIG9uIHRoZVxuXHQgKiBwcm9taXNlIHJldHVybmVkIGJ5IGBwb3N0KClgLCByYXRoZXIgdGhhbiBzcGVjaWZ5IHRoZSBgb25TdWNjZXNzYCBvclxuXHQgKiBgb25GYWlsdXJlYCBjYWxsYmFja3MuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudEFjdGlvbiAtIFRoZSBjdXJyZW50IGFjdGlvbiAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgLSBUaGUgcXVlcnkgKHJlcXVpcmVkKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cblx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNFbGVtZW50XSAtIEEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdCB0byB1c2UgZm9yIHN0YXR1cyBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgaWYgYW4gZXJyb3Igb2NjdXJzLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkgPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbiwgcXVlcnksIG9uU3VjY2Vzcywgc3RhdHVzRWxlbWVudCwgb25FcnJvcikge1xuXHRcdHRoaXMuY3VycmVudEFjdGlvbiA9IGN1cnJlbnRBY3Rpb247XG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHRoaXMucXVlcnkuYXNzZXJ0ID0gJ3VzZXInO1xuXHRcdC8vIEVuZm9yY2UgbmV3ZXIgZXJyb3IgZm9ybWF0cywgcHJlZmVycmluZyBodG1sXG5cdFx0aWYgKCFxdWVyeS5lcnJvcmZvcm1hdCB8fCAhWyd3aWtpdGV4dCcsICdwbGFpbnRleHQnXS5pbmNsdWRlcyhxdWVyeS5lcnJvcmZvcm1hdCkpIHtcblx0XHRcdHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPSAnaHRtbCc7XG5cdFx0fVxuXHRcdC8vIEV4cGxpY2l0bHkgdXNlIHRoZSB3aWtpJ3MgY29udGVudCBsYW5ndWFnZSB0byBtaW5pbWl6ZSBjb25mdXNpb24sXG5cdFx0Ly8gc2VlICMxMTc5IGZvciBkaXNjdXNzaW9uXG5cdFx0dGhpcy5xdWVyeS51c2VsYW5nIHx8PSAnY29udGVudCc7IC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdHRoaXMucXVlcnkuZXJyb3JsYW5nID0gJ3VzZWxhbmcnO1xuXHRcdHRoaXMucXVlcnkuZXJyb3JzdXNlbG9jYWwgPSAxO1xuXHRcdHRoaXMub25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdHRoaXMub25FcnJvciA9IG9uRXJyb3I7XG5cdFx0aWYgKHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbik7XG5cdFx0fVxuXHRcdC8vIEpTT04gaXMgdXNlZCB0aHJvdWdob3V0IE1vcmViaXRzL1R3aW5rbGUsIGJ1dCB4bWwgcmVtYWlucyB0aGUgZGVmYXVsdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRpZiAoIXF1ZXJ5LmZvcm1hdCkge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXQgPSAneG1sJztcblx0XHR9IGVsc2UgaWYgKHF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nICYmICFxdWVyeS5mb3JtYXR2ZXJzaW9uKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdHZlcnNpb24gPSAnMic7XG5cdFx0fSBlbHNlIGlmICghWyd4bWwnLCAnanNvbiddLmluY2x1ZGVzKHF1ZXJ5LmZvcm1hdCkpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoJ0ludmFsaWQgQVBJIGZvcm1hdDogb25seSB4bWwgYW5kIGpzb24gYXJlIHN1cHBvcnRlZC4nKTtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIHRhZ3MgZm9yIHF1ZXJpZXMgYW5kIG1vc3QgY29tbW9uIHVuc3VwcG9ydGVkIGFjdGlvbnMsIHByb2R1Y2VzIHdhcm5pbmdzXG5cdFx0aWYgKHF1ZXJ5LmFjdGlvbiAmJiBbJ3F1ZXJ5JywgJ3dhdGNoJ10uaW5jbHVkZXMocXVlcnkuYWN0aW9uKSkge1xuXHRcdFx0ZGVsZXRlIHF1ZXJ5LnRhZ3M7XG5cdFx0fSBlbHNlIGlmICghcXVlcnkudGFncyAmJiBtb3JlYml0c1dpa2lDaGFuZ2VUYWcpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSBtb3JlYml0c1dpa2lDaGFuZ2VUYWc7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy53aWtpLmFwaS5wcm90b3R5cGUgPSB7XG5cdFx0Y3VycmVudEFjdGlvbjogJycsXG5cdFx0b25TdWNjZXNzOiBudWxsLFxuXHRcdG9uRXJyb3I6IG51bGwsXG5cdFx0cGFyZW50OiB3aW5kb3csXG5cdFx0Ly8gdXNlIGdsb2JhbCBjb250ZXh0IGlmIHRoZXJlIGlzIG5vIHBhcmVudCBvYmplY3Rcblx0XHRxdWVyeTogbnVsbCxcblx0XHRyZXNwb25zZTogbnVsbCxcblx0XHRyZXNwb25zZVhNTDogbnVsbCxcblx0XHQvLyB1c2UgYHJlc3BvbnNlYCBpbnN0ZWFkOyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0ZWxlbTogbnVsbCxcblx0XHQvLyB0aGlzIG5vbi1zdGFuZGFyZCBuYW1lIGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0c3RhdHVzVGV4dDogbnVsbCxcblx0XHQvLyByZXN1bHQgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJLCBub3JtYWxseSBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcblx0XHRlcnJvckNvZGU6IG51bGwsXG5cdFx0Ly8gc2hvcnQgdGV4dCBlcnJvciBjb2RlLCBpZiBhbnksIGFzIGRvY3VtZW50ZWQgaW4gdGhlIE1lZGlhV2lraSBBUElcblx0XHRlcnJvclRleHQ6IG51bGwsXG5cdFx0Ly8gZnVsbCBlcnJvciBkZXNjcmlwdGlvbiwgaWYgYW55XG5cdFx0YmFkdG9rZW5SZXRyeTogZmFsc2UsXG5cdFx0Ly8gc2V0IHRvIHRydWUgaWYgdGhpcyBvbiBhIHJldHJ5IGF0dGVtcHRlZCBhZnRlciBhIGJhZHRva2VuIGVycm9yXG5cdFx0LyoqXG5cdFx0ICogS2VlcCB0cmFjayBvZiBwYXJlbnQgb2JqZWN0IGZvciBjYWxsYmFja3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHBhcmVudFxuXHRcdCAqL1xuXHRcdHNldFBhcmVudChwYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdH0sXG5cdFx0LyoqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50ICovXG5cdFx0c2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gc3RhdHVzRWxlbWVudDtcblx0XHRcdHRoaXMuc3RhdGVsZW0uc3RhdHVzKHRoaXMuY3VycmVudEFjdGlvbik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDYXJyeSBvdXQgdGhlIHJlcXVlc3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGVyQWpheFBhcmFtZXRlcnMgLSBEbyBub3Qgc3BlY2lmeSBhIHBhcmFtZXRlciB1bmxlc3MgeW91IHJlYWxseVxuXHRcdCAqIHJlYWxseSB3YW50IHRvIGdpdmUgalF1ZXJ5IHNvbWUgZXh0cmEgcGFyYW1ldGVycy5cblx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gLSBBIGpRdWVyeSBwcm9taXNlIG9iamVjdCB0aGF0IGlzIHJlc29sdmVkIG9yIHJlamVjdGVkIHdpdGggdGhlIGFwaSBvYmplY3QuXG5cdFx0ICovXG5cdFx0cG9zdChjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZ0FyciA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBbaSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnF1ZXJ5KSkge1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRgJHtlbmNvZGVVUklDb21wb25lbnQoaSl9PSR7dmFsLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJ3wnKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nQXJyLmpvaW4oJyYnKS5yZXBsYWNlKC9eKC4qPykoXFxidG9rZW49W14mXSopJiguKikvLCAnJDEkMyYkMicpO1xuXHRcdFx0Ly8gdG9rZW4gc2hvdWxkIGFsd2F5cyBiZSB0aGUgbGFzdCBpdGVtIGluIHRoZSBxdWVyeSBzdHJpbmcgKGJ1ZyBUVy1CLTAwMTMpXG5cdFx0XHRjb25zdCBhamF4cGFyYW1zID0ge1xuXHRcdFx0XHRjb250ZXh0OiB0aGlzLFxuXHRcdFx0XHR0eXBlOiB0aGlzLnF1ZXJ5LmFjdGlvbiA9PT0gJ3F1ZXJ5JyA/ICdHRVQnIDogJ1BPU1QnLFxuXHRcdFx0XHR1cmw6IG13LnV0aWwud2lraVNjcmlwdCgnYXBpJyksXG5cdFx0XHRcdGRhdGE6IHF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRkYXRhVHlwZTogdGhpcy5xdWVyeS5mb3JtYXQsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLmNhbGxlckFqYXhQYXJhbWV0ZXJzLFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkLmFqYXgoYWpheHBhcmFtcykudGhlbihcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElzdWNjZXNzKHJlc3BvbnNlLCBzdGF0dXNUZXh0KSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZVhNTCA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdC8vIExpbWl0IHRvIGZpcnN0IGVycm9yXG5cdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZm9ybWF0ID09PSAnanNvbicpIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS5jb2RlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdodG1sJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uaHRtbDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3dpa2l0ZXh0JyB8fCB0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAncGxhaW50ZXh0Jykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0udGV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvckNvZGUgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS5hdHRyKCdjb2RlJyk7XG5cdFx0XHRcdFx0XHQvLyBTdWZmaWNpZW50IGZvciBodG1sLCB3aWtpdGV4dCwgb3IgcGxhaW50ZXh0IGVycm9yZm9ybWF0c1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS50ZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5lcnJvckNvZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHQvLyB0aGUgQVBJIGRpZG4ndCBsaWtlIHdoYXQgd2UgdG9sZCBpdCwgZS5nLiwgYmFkIGVkaXQgdG9rZW4gb3IgYW4gZXJyb3IgY3JlYXRpbmcgYSBwYWdlXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGludm9rZSBzdWNjZXNzIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdFx0XHRpZiAodGhpcy5vblN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayAoZm9yIGxlZ2FjeSBjb2RlKVxuXHRcdFx0XHRcdFx0dGhpcy5vblN1Y2Nlc3MuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkKCk7XG5cdFx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlV2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gb25seSBuZXR3b3JrIGFuZCBzZXJ2ZXIgZXJyb3JzIHJlYWNoIGhlcmUgLSBjb21wbGFpbnRzIGZyb20gdGhlIEFQSSBpdHNlbGYgYXJlIGNhdWdodCBpbiBzdWNjZXNzKClcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElmYWlsdXJlKGVycm9yLCBzdGF0dXNUZXh0LCBlcnJvclRocm93bikge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5lcnJvclRocm93biA9IGVycm9yVGhyb3duOyAvLyBmcmVxdWVudGx5IHVuZGVmaW5lZFxuXHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID1cblx0XHRcdFx0XHRcdHN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdFx0d2dVTFMoJ+WcqOiwg+eUqEFQSeaXtuWPkeeUn+S6humUmeivr+KAnCcsICflnKjlkbzlj6tBUEnmmYLnmbznlJ/kuobpjK/oqqTjgIwnKSArXG5cdFx0XHRcdFx0XHRlcnJvci5zdGF0dXNUZXh0ICtcblx0XHRcdFx0XHRcdHdnVUxTKCfigJ3jgIInLCAn44CN44CCJyk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdHJldHVybkVycm9yKGNhbGxlckFqYXhQYXJhbWV0ZXJzKSB7XG5cdFx0XHRpZiAodGhpcy5lcnJvckNvZGUgPT09ICdiYWR0b2tlbicgJiYgIXRoaXMuYmFkdG9rZW5SZXRyeSkge1xuXHRcdFx0XHR0aGlzLnN0YXRlbGVtLndhcm4od2dVTFMoJ+aXoOaViOS7pOeJjO+8jOiOt+WPluaWsOeahOS7pOeJjOW5tumHjeivleKApuKApicsICfnhKHmlYjmrIrmnZbvvIzlj5blvpfmlrDnmoTmrIrmnZbkuKbph43oqabigKbigKYnKSk7XG5cdFx0XHRcdHRoaXMuYmFkdG9rZW5SZXRyeSA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBhIG5ldyBDU1JGIHRva2VuIGFuZCByZXRyeS4gSWYgdGhlIG9yaWdpbmFsIGFjdGlvbiBuZWVkcyBhIGRpZmZlcmVudFxuXHRcdFx0XHQvLyB0eXBlIG9mIGFjdGlvbiB0aGFuIENTUkYsIHdlIGRvIG9uZSBwb2ludGxlc3MgcmV0cnkgYmVmb3JlIGJhaWxpbmcgb3V0XG5cdFx0XHRcdHJldHVybiBNb3JlYml0cy53aWtpLmFwaS5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5xdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoYCR7dGhpcy5lcnJvclRleHR977yIJHt0aGlzLmVycm9yQ29kZX3vvIlgKTtcblx0XHRcdC8vIGludm9rZSBmYWlsdXJlIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdGlmICh0aGlzLm9uRXJyb3IpIHtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgZm9yIGxlZ2FjeSBjb2RlXG5cdFx0XHRcdHRoaXMub25FcnJvci5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdC8vIGRvbid0IGNvbXBsZXRlIHRoZSBhY3Rpb24gc28gdGhhdCB0aGUgZXJyb3IgcmVtYWlucyBkaXNwbGF5ZWRcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0V2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHR9LFxuXHRcdGdldFN0YXR1c0VsZW1lbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZWxlbTtcblx0XHR9LFxuXHRcdGdldEVycm9yQ29kZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yQ29kZTtcblx0XHR9LFxuXHRcdGdldEVycm9yVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVGV4dDtcblx0XHR9LFxuXHRcdGdldFhNTCgpIHtcblx0XHRcdC8vIHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdXNlIGdldFJlc3BvbnNlKCkgaW5zdGVhZFxuXHRcdFx0cmV0dXJuIHRoaXMucmVzcG9uc2VYTUw7XG5cdFx0fSxcblx0XHRnZXRSZXNwb25zZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgd2lraXRleHQgZnJvbSBhIHBhZ2UuIENhY2hpbmcgZW5hYmxlZCwgZHVyYXRpb24gMSBkYXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5nZXRDYWNoZWRKc29uID0gKHRpdGxlKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMud2lraS5hcGkoJycsIHF1ZXJ5KS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRhcGlvYmouZ2V0U3RhdHVzRWxlbWVudCgpLnVubGluaygpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKTtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0ID0gcmVzcG9uc2UucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpa2l0ZXh0KTtcblx0XHR9KTtcblx0fTtcblx0bGV0IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9ICdRaXV3ZW4vMS4xIChtb3JlYml0cy5qcyknO1xuXHQvKipcblx0ICogU2V0IHRoZSBjdXN0b20gdXNlciBhZ2VudCBoZWFkZXIsIHdoaWNoIGlzIHVzZWQgZm9yIHNlcnZlci1zaWRlIGxvZ2dpbmcuXG5cdCAqIE5vdGUgdGhhdCBkb2luZyBzbyB3aWxsIHNldCB0aGUgdXNlcmFnZW50IGZvciBldmVyeSBgTW9yZWJpdHMud2lraS5hcGlgXG5cdCAqIHByb2Nlc3MgcGVyZm9ybWVkIHRoZXJlYWZ0ZXIuXG5cdCAqXG5cdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbGlzdHMud2lraW1lZGlhLm9yZy9waXBlcm1haWwvbWVkaWF3aWtpLWFwaS1hbm5vdW5jZS8yMDE0LU5vdmVtYmVyLzAwMDA3NS5odG1sfVxuXHQgKiBmb3Igb3JpZ2luYWwgYW5ub3VuY2VtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1YT1RaXV3ZW4vMS4xIChtb3JlYml0cy5qcyldIC0gVXNlciBhZ2VudC4gIFRoZSBkZWZhdWx0XG5cdCAqIHZhbHVlIG9mIGBtb3JlYml0cy5qc2Agd2lsbCBiZSBhcHBlbmRlZCB0byBhbnkgcHJvdmlkZWRcblx0ICogdmFsdWUuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaS5zZXRBcGlVc2VyQWdlbnQgPSAodWEpID0+IHtcblx0XHRtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSBgUWl1d2VuLzEuMSAobW9yZWJpdHMuanMke3VhID8gYDsgJHt1YX1gIDogJyd9KWA7XG5cdH07XG5cdC8qKlxuXHQgKiBDaGFuZ2UvcmV2aXNpb24gdGFnIGFwcGxpZWQgdG8gTW9yZWJpdHMgYWN0aW9ucyB3aGVuIG5vIG90aGVyIHRhZ3MgYXJlIHNwZWNpZmllZC5cblx0ICogVW51c2VkIGJ5IGRlZmF1bHQuXG5cdCAqXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdGNvbnN0IG1vcmViaXRzV2lraUNoYW5nZVRhZyA9ICcnO1xuXHQvKipcblx0ICogR2V0IGEgbmV3IENTUkYgdG9rZW4gb24gZW5jb3VudGVyaW5nIHRva2VuIGVycm9ycy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IE1lZGlhV2lraSBDU1JGIHRva2VuLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9rZW5BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkod2dVTFMoJ+iOt+WPluS7pOeJjCcsICflj5blvpfmrIrmnZYnKSwge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gdG9rZW5BcGkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0cmV0dXJuIGFwaW9iai5yZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdH0pO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kucGFnZSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBVc2UgdGhlIE1lZGlhV2lraSBBUEkgdG8gbG9hZCBhIHBhZ2UgYW5kIG9wdGlvbmFsbHkgZWRpdCBpdCwgbW92ZSBpdCwgZXRjLlxuXHQgKlxuXHQgKiBDYWxsZXJzIGFyZSBub3QgcGVybWl0dGVkIHRvIGRpcmVjdGx5IGFjY2VzcyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIGNsYXNzIVxuXHQgKiBBbGwgcHJvcGVydHkgYWNjZXNzIGlzIHRocm91Z2ggdGhlIGFwcHJvcHJpYXRlIGdldF9fXygpIG9yIHNldF9fXygpIG1ldGhvZC5cblx0ICpcblx0ICogQ2FsbGVycyBzaG91bGQgc2V0IHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2V9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3R9XG5cdCAqIGJlZm9yZSB0aGUgZmlyc3QgY2FsbCB0byB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlLmxvYWQoKX0uXG5cdCAqXG5cdCAqIEVhY2ggb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBhXG5cdCAqIHJlZmVyZW5jZSB0byB0aGUgTW9yZWJpdHMud2lraS5wYWdlIG9iamVjdCB0aGF0IHJlZ2lzdGVyZWQgdGhlIGNhbGxiYWNrLlxuXHQgKiBDYWxsYmFjayBmdW5jdGlvbnMgbWF5IGludm9rZSBhbnkgTW9yZWJpdHMud2lraS5wYWdlIHByb3RvdHlwZSBtZXRob2QgdXNpbmcgdGhpcyByZWZlcmVuY2UuXG5cdCAqXG5cdCAqXG5cdCAqIENhbGwgc2VxdWVuY2UgZm9yIGNvbW1vbiBvcGVyYXRpb25zIChvcHRpb25hbCBmaW5hbCB1c2VyIGNhbGxiYWNrcyBub3Qgc2hvd24pOlxuXHQgKlxuXHQgKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKG5vIGVkaXQgY29uZmxpY3QpOlxuXHQgKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cblx0ICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlICh3aXRoIGVkaXQgY29uZmxpY3QpOlxuXHQgKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cblx0ICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuU2F2ZUVycm9yKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPiAuc2F2ZSgpIC0+XG5cdCAqIGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiAtIEFwcGVuZCB0byBhIHBhZ2UgKHNpbWlsYXIgZm9yIHByZXBlbmQgYW5kIG5ld1NlY3Rpb24pOlxuXHQgKiBgLmFwcGVuZCgpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IGN0eC5mbkF1dG9TYXZlKCkgLT4gLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogTm90ZXM6XG5cdCAqIDEuIEFsbCBmdW5jdGlvbnMgZm9sbG93aW5nIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSBhcmUgaW52b2tlZCBhc3luY2hyb25vdXNseSBmcm9tIHRoZSBqUXVlcnkgQUpBWCBsaWJyYXJ5LlxuXHQgKiAyLiBUaGUgc2VxdWVuY2UgZm9yIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24gY291bGQgYmUgc2xpZ2h0bHkgc2hvcnRlbmVkLFxuXHQgKiBidXQgaXQgd291bGQgcmVxdWlyZSBzaWduaWZpY2FudCBkdXBsaWNhdGlvbiBvZiBjb2RlIGZvciBsaXR0bGUgYmVuZWZpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwYWdlLCBwcmVmaXhlZCBieSB0aGUgbmFtZXNwYWNlIChpZiBhbnkpLlxuXHQgKiBGb3IgdGhlIGN1cnJlbnQgcGFnZSwgdXNlIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNdIC0gQSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgYWN0aW9uIGFib3V0IHRvIGJlIHVuZGVydGFrZW4sXG5cdCAqIG9yIGEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdFxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5wYWdlID0gZnVuY3Rpb24gKHBhZ2VOYW1lLCBzdGF0dXMpIHtcblx0XHRzdGF0dXMgfHw9IHdnVUxTKCfmiZPlvIDpobXpnaLigJwnLCAn5omT6ZaL6aCB6Z2i44CMJykgKyBwYWdlTmFtZSArIHdnVUxTKCfigJ0nLCAn44CNJyk7XG5cdFx0LyoqXG5cdFx0ICogUHJpdmF0ZSBjb250ZXh0IHZhcmlhYmxlcy5cblx0XHQgKlxuXHRcdCAqIFRoaXMgY29udGV4dCBpcyBub3QgdmlzaWJsZSB0byB0aGUgb3V0c2lkZSwgdGh1cyBhbGwgdGhlIGRhdGEgaGVyZVxuXHRcdCAqIG11c3QgYmUgYWNjZXNzZWQgdmlhIGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Y29uc3QgY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTmFtZSxcblx0XHRcdHBhZ2VFeGlzdHM6IGZhbHNlLFxuXHRcdFx0ZWRpdFN1bW1hcnk6IG51bGwsXG5cdFx0XHRjaGFuZ2VUYWdzOiBudWxsLFxuXHRcdFx0dGVzdEFjdGlvbnM6IG51bGwsXG5cdFx0XHQvLyBhcnJheSBpZiBhbnkgdmFsaWQgYWN0aW9uc1xuXHRcdFx0Y2FsbGJhY2tQYXJhbWV0ZXJzOiBudWxsLFxuXHRcdFx0c3RhdHVzRWxlbWVudDogc3RhdHVzIGluc3RhbmNlb2YgTW9yZWJpdHMuc3RhdHVzID8gc3RhdHVzIDogbmV3IE1vcmViaXRzLnN0YXR1cyhzdGF0dXMpLFxuXHRcdFx0Ly8gLSBlZGl0XG5cdFx0XHRwYWdlVGV4dDogbnVsbCxcblx0XHRcdGVkaXRNb2RlOiAnYWxsJyxcblx0XHRcdC8vIHNhdmUoKSByZXBsYWNlcyBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2UgYnkgZGVmYXVsdFxuXHRcdFx0YXBwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRwcmVwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRuZXdTZWN0aW9uVGV4dDogbnVsbCxcblx0XHRcdG5ld1NlY3Rpb25UaXRsZTogbnVsbCxcblx0XHRcdGNyZWF0ZU9wdGlvbjogbnVsbCxcblx0XHRcdG1pbm9yRWRpdDogZmFsc2UsXG5cdFx0XHRib3RFZGl0OiBmYWxzZSxcblx0XHRcdHBhZ2VTZWN0aW9uOiBudWxsLFxuXHRcdFx0bWF4Q29uZmxpY3RSZXRyaWVzOiAyLFxuXHRcdFx0bWF4UmV0cmllczogMixcblx0XHRcdGZvbGxvd1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDogdHJ1ZSxcblx0XHRcdHdhdGNobGlzdE9wdGlvbjogJ25vY2hhbmdlJyxcblx0XHRcdHdhdGNobGlzdEV4cGlyeTogbnVsbCxcblx0XHRcdGNyZWF0b3I6IG51bGwsXG5cdFx0XHR0aW1lc3RhbXA6IG51bGwsXG5cdFx0XHQvLyAtIHJldmVydFxuXHRcdFx0cmV2ZXJ0T2xkSUQ6IG51bGwsXG5cdFx0XHQvLyAtIG1vdmVcblx0XHRcdG1vdmVEZXN0aW5hdGlvbjogbnVsbCxcblx0XHRcdG1vdmVUYWxrUGFnZTogZmFsc2UsXG5cdFx0XHRtb3ZlU3VicGFnZXM6IGZhbHNlLFxuXHRcdFx0bW92ZVN1cHByZXNzUmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0Ly8gLSBwcm90ZWN0XG5cdFx0XHRwcm90ZWN0RWRpdDogbnVsbCxcblx0XHRcdHByb3RlY3RNb3ZlOiBudWxsLFxuXHRcdFx0cHJvdGVjdENyZWF0ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDYXNjYWRlOiBudWxsLFxuXHRcdFx0Ly8gLSBjcmVhdGlvbiBsb29rdXBcblx0XHRcdGxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcjogZmFsc2UsXG5cdFx0XHQvLyBpbnRlcm5hbCBzdGF0dXNcblx0XHRcdHBhZ2VMb2FkZWQ6IGZhbHNlLFxuXHRcdFx0Y3NyZlRva2VuOiBudWxsLFxuXHRcdFx0bG9hZFRpbWU6IG51bGwsXG5cdFx0XHRsYXN0RWRpdFRpbWU6IG51bGwsXG5cdFx0XHRwYWdlSUQ6IG51bGwsXG5cdFx0XHRjb250ZW50TW9kZWw6IG51bGwsXG5cdFx0XHRyZXZlcnRDdXJJRDogbnVsbCxcblx0XHRcdHJldmVydFVzZXI6IG51bGwsXG5cdFx0XHR3YXRjaGVkOiBmYWxzZSxcblx0XHRcdGZ1bGx5UHJvdGVjdGVkOiBmYWxzZSxcblx0XHRcdHN1cHByZXNzUHJvdGVjdFdhcm5pbmc6IGZhbHNlLFxuXHRcdFx0Y29uZmxpY3RSZXRyaWVzOiAwLFxuXHRcdFx0cmV0cmllczogMCxcblx0XHRcdC8vIGNhbGxiYWNrc1xuXHRcdFx0b25Mb2FkU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9hZEZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblNhdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25TYXZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25TdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Mb29rdXBDcmVhdGlvbkZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbk1vdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Nb3ZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uRGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uRGVsZXRlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25VbmRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblByb3RlY3RTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0RmFpbHVyZTogbnVsbCxcblx0XHRcdC8vIGludGVybmFsIG9iamVjdHNcblx0XHRcdGxvYWRRdWVyeTogbnVsbCxcblx0XHRcdGxvYWRBcGk6IG51bGwsXG5cdFx0XHRzYXZlQXBpOiBudWxsLFxuXHRcdFx0bG9va3VwQ3JlYXRpb25BcGk6IG51bGwsXG5cdFx0XHRtb3ZlQXBpOiBudWxsLFxuXHRcdFx0bW92ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0dW5kZWxldGVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cHJvdGVjdEFwaTogbnVsbCxcblx0XHRcdHByb3RlY3RQcm9jZXNzQXBpOiBudWxsLFxuXHRcdH07XG5cdFx0Y29uc3QgZW1wdHlGdW5jdGlvbiA9ICgpID0+IHt9O1xuXHRcdC8qKlxuXHRcdCAqIExvYWRzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBsb2FkIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLmxvYWQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkxvYWRTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBkbyBzb21ldGhpbmcgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHNcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvYWQoKSEnKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkUXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ2luZm98cmV2aXNpb25zJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGludGVzdGFjdGlvbnM6ICdlZGl0Jyxcblx0XHRcdFx0Ly8gY2FuIGJlIGV4cGFuZGVkXG5cdFx0XHRcdGN1cnRpbWVzdGFtcDogJycsXG5cdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Ly8gZG9uJ3QgbmVlZCBydmxpbWl0PTEgYmVjYXVzZSB3ZSBkb24ndCBuZWVkIHJ2c3RhcnRpZCBoZXJlIGFuZCBvbmx5IG9uZSBhY3R1YWwgcmV2IGlzIHJldHVybmVkIGJ5IGRlZmF1bHRcblx0XHRcdH07XG5cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdhbGwnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ2NvbnRlbnR8dGltZXN0YW1wJzsgLy8gZ2V0IHRoZSBwYWdlIGNvbnRlbnQgYXQgdGhlIHNhbWUgdGltZSwgaWYgbmVlZGVkXG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnByb3AgPSAndGltZXN0YW1wJztcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydmxpbWl0ID0gMTtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnN0YXJ0aWQgPSBjdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2c2VjdGlvbiA9IGN0eC5wYWdlU2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdnVUxTKCfmipPlj5bpobXpnaLigKbigKYnLCAn5oqT5Y+W6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdGN0eC5sb2FkUXVlcnksXG5cdFx0XHRcdGZuTG9hZFN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5sb2FkQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5sb2FkQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNhdmVzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZSB0byBXaWtpcGVkaWEuXG5cdFx0ICogTXVzdCBiZSBwcmVjZWRlZCBieSBzdWNjZXNzZnVsbHkgY2FsbGluZyBgbG9hZCgpYC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6IENhbGxpbmcgYHNhdmUoKWAgY2FuIHJlc3VsdCBpbiBhZGRpdGlvbmFsIGNhbGxzIHRvIHRoZVxuXHRcdCAqIHByZXZpb3VzIGBsb2FkKClgIGNhbGxiYWNrcyB0byByZWNvdmVyIGZyb20gZWRpdCBjb25mbGljdHMhIEluIHRoaXNcblx0XHQgKiBjYXNlLCBjYWxsZXJzIG11c3QgbWFrZSB0aGUgc2FtZSBlZGl0IHRvIHRoZSBuZXcgcGFnZVRleHQgYW5kXG5cdFx0ICogcmUtaW52b2tlIGBzYXZlKClgLiAgVGhpcyBiZWhhdmlvciBjYW4gYmUgZGlzYWJsZWQgd2l0aFxuXHRcdCAqIGBzZXRNYXhDb25mbGljdFJldHJpZXMoMClgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5zYXZlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBhcmUgd2UgZ2V0dGluZyBvdXIgZWRpdGluZyB0b2tlbiBmcm9tIG13LnVzZXIudG9rZW5zP1xuXHRcdFx0Y29uc3QgY2FuVXNlTXdVc2VyVG9rZW4gPSBmbkNhblVzZU13VXNlclRva2VuKCdlZGl0Jyk7XG5cdFx0XHRpZiAoIWN0eC5wYWdlTG9hZGVkICYmICFjYW5Vc2VNd1VzZXJUb2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGF0dGVtcHQgdG8gc2F2ZSBhIHBhZ2UgdGhhdCBoYXMgbm90IGJlZW4gbG9hZGVkIScpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdFx0Ly8gbmV3IHNlY3Rpb24gbW9kZSBhbGxvd3MgKG5heSwgZW5jb3VyYWdlcykgdXNpbmcgdGhlXG5cdFx0XHRcdC8vIHRpdGxlIGFzIHRoZSBlZGl0IHN1bW1hcnksIGJ1dCB0aGUgcXVlcnkgbmVlZHNcblx0XHRcdFx0Ly8gZWRpdFN1bW1hcnkgdG8gYmUgdW5kZWZpbmVkIG9yICcnLCBub3QgbnVsbFxuXHRcdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnbmV3JyAmJiBjdHgubmV3U2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gJyc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBlZGl0IHN1bW1hcnkgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHNob3VsZG4ndCBoYXBwZW4gaWYgY2FuVXNlTXdVc2VyVG9rZW4gPT09IHRydWVcblx0XHRcdGlmIChcblx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkICYmXG5cdFx0XHRcdCFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHRcdD8gd2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3vvIjml6DpmZDmnJ/vvInjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdFx0J+OAje+8iOeEoemZkOacn++8ieOAglxcblxcbum7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdHdnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUoY3R4LmZ1bGx5UHJvdGVjdGVkKS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8ieOAglxcblxcbiR7d2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+m7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0KX1gXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE57yW6L6R44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOe3qOi8r+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5yZXRyaWVzID0gMDtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0c3VtbWFyeTogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR0b2tlbjogY2FuVXNlTXdVc2VyVG9rZW4gPyBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpIDogY3R4LmNzcmZUb2tlbixcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBjdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXQgbWlub3IgZWRpdCBhdHRyaWJ1dGUuIElmIHRoZXNlIHBhcmFtZXRlcnMgYXJlIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRcdGlmIChjdHgubWlub3JFZGl0KSB7XG5cdFx0XHRcdHF1ZXJ5Lm1pbm9yID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHF1ZXJ5Lm5vdG1pbm9yID0gdHJ1ZTsgLy8gZm9yY2UgVHdpbmtsZSBjb25maWcgdG8gb3ZlcnJpZGUgdXNlciBwcmVmZXJlbmNlIHNldHRpbmcgZm9yIFwiYWxsIGVkaXRzIGFyZSBtaW5vclwiXG5cdFx0XHR9XG5cdFx0XHQvLyBTZXQgYm90IGVkaXQgYXR0cmlidXRlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBwcmVzZW50IHdpdGggYW55IHZhbHVlLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0cnVlXG5cdFx0XHRpZiAoY3R4LmJvdEVkaXQpIHtcblx0XHRcdFx0cXVlcnkuYm90ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAoY3R4LmVkaXRNb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FwcGVuZCc6XG5cdFx0XHRcdFx0aWYgKGN0eC5hcHBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGFwcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkuYXBwZW5kdGV4dCA9IGN0eC5hcHBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBhcHBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3ByZXBlbmQnOlxuXHRcdFx0XHRcdGlmIChjdHgucHJlcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcHJlcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkucHJlcGVuZHRleHQgPSBjdHgucHJlcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIHByZXBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ldyc6XG5cdFx0XHRcdFx0aWYgKCFjdHgubmV3U2VjdGlvblRleHQpIHtcblx0XHRcdFx0XHRcdC8vIEFQSSBkb2Vzbid0IGFsbG93IGVtcHR5IG5ldyBzZWN0aW9uIHRleHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbmV3IHNlY3Rpb24gdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSAnbmV3Jztcblx0XHRcdFx0XHRxdWVyeS50ZXh0ID0gY3R4Lm5ld1NlY3Rpb25UZXh0OyAvLyBhZGQgYSBuZXcgc2VjdGlvbiB0byBjdXJyZW50IHBhZ2Vcblx0XHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBjdHgubmV3U2VjdGlvblRpdGxlIHx8IGN0eC5lZGl0U3VtbWFyeTsgLy8gZG9uZSBieSB0aGUgQVBJLCBidXQgbm9uLScnIHZhbHVlcyB3b3VsZCBnZXQgdHJlYXRlZCBhcyB0ZXh0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdFx0cXVlcnkudW5kbyA9IGN0eC5yZXZlcnRDdXJJRDtcblx0XHRcdFx0XHRxdWVyeS51bmRvYWZ0ZXIgPSBjdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHRcdFx0aWYgKGN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSBjdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRxdWVyeS5zdGFydHRpbWVzdGFtcCA9IGN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vICdhbGwnXG5cdFx0XHRcdFx0cXVlcnkudGV4dCA9IGN0eC5wYWdlVGV4dDsgLy8gcmVwbGFjZSBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2Vcblx0XHRcdFx0XHRpZiAoY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdFx0cXVlcnkuYmFzZXRpbWVzdGFtcCA9IGN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gY3R4LmxvYWRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZGVsZXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkIChkb24ndCByZWNyZWF0ZSBiYWQgc3R1ZmYpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoWydyZWNyZWF0ZScsICdjcmVhdGVvbmx5JywgJ25vY3JlYXRlJ10uaW5jbHVkZXMoY3R4LmNyZWF0ZU9wdGlvbikpIHtcblx0XHRcdFx0cXVlcnlbY3R4LmNyZWF0ZU9wdGlvbl0gPSAnJztcblx0XHRcdH1cblx0XHRcdGlmIChjYW5Vc2VNd1VzZXJUb2tlbiAmJiBjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnNhdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdnVUxTKCfkv53lrZjpobXpnaLigKbigKYnLCAn5YSy5a2Y6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblNhdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5TYXZlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguc2F2ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSB0ZXh0IHByb3ZpZGVkIHZpYSBgc2V0QXBwZW5kVGV4dCgpYCB0byB0aGUgZW5kIG9mIHRoZVxuXHRcdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHRcdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuYXBwZW5kID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldFByZXBlbmRUZXh0KClgIHRvIHRoZSBzdGFydCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJlcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgbmV3IHNlY3Rpb24gd2l0aCB0aGUgdGV4dCBwcm92aWRlZCBieSBgc2V0TmV3U2VjdGlvblRleHQoKWBcblx0XHQgKiBhbmQgc2VjdGlvbiB0aXRsZSBmcm9tIGBzZXROZXdTZWN0aW9uVGl0bGUoKWAuXG5cdFx0ICogSWYgYGVkaXRTdW1tYXJ5YCBpcyBwcm92aWRlZCwgdGhhdCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGVcblx0XHQgKiBhdXRvZ2VuZXJhdGVkIFwiLT5UaXRsZSAobmV3IHNlY3Rpb25cIiBlZGl0IHN1bW1hcnkuXG5cdFx0ICogRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3QgZXhwaXJ5XG5cdFx0ICogaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMubmV3U2VjdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVkIHBhZ2UsIGluY2x1ZGluZyB0aGUgbmFtZXNwYWNlICovXG5cdFx0dGhpcy5nZXRQYWdlTmFtZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZU5hbWU7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIHRleHQgb2YgdGhlIHBhZ2UgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvYWQoKSAqL1xuXHRcdHRoaXMuZ2V0UGFnZVRleHQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwYWdlVGV4dCAtIFVwZGF0ZWQgcGFnZSB0ZXh0IHRoYXQgd2lsbCBiZSBzYXZlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UGFnZVRleHQgPSAocGFnZVRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnO1xuXHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcGFnZVRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IGFwcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBhcHBlbmQoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRBcHBlbmRUZXh0ID0gKGFwcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdFx0Y3R4LmFwcGVuZFRleHQgPSBhcHBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwcmVwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIHByZXBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBwcmVwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UHJlcGVuZFRleHQgPSAocHJlcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGN0eC5wcmVwZW5kVGV4dCA9IHByZXBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGluIGEgbmV3IHNlY3Rpb24gb24gdGhlIHBhZ2Ugd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldE5ld1NlY3Rpb25UZXh0ID0gKG5ld1NlY3Rpb25UZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGV4dCA9IG5ld1NlY3Rpb25UZXh0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UaXRsZSAtIFRpdGxlIGZvciB0aGUgbmV3IHNlY3Rpb24gY3JlYXRlZCB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZFxuXHRcdCAqIElmIG1pc3NpbmcsIGBjdHguZWRpdFN1bW1hcnlgIHdpbGwgYmUgdXNlZC4gSXNzdWVzIG1heSBvY2N1ciBpZiBhIHN1YnN0aXR1dGVkIHRlbXBsYXRlIGlzIHVzZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGl0bGUgPSAobmV3U2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGl0bGUgPSBuZXdTZWN0aW9uVGl0bGU7XG5cdFx0fTtcblx0XHQvLyBFZGl0LXJlbGF0ZWQgc2V0dGVyIG1ldGhvZHM6XG5cdFx0LyoqXG5cdFx0ICogU2V0IHRoZSBlZGl0IHN1bW1hcnkgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogVW5uZWNlc3NhcnkgaWYgZWRpdE1vZGUgaXMgJ25ldycgYW5kIG5ld1NlY3Rpb25UaXRsZSBpcyBwcm92aWRlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRFZGl0U3VtbWFyeSA9IChzdW1tYXJ5KSA9PiB7XG5cdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBzdW1tYXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGFueSBjdXN0b20gdGFnKHMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIEFQSSBhY3Rpb24uXG5cdFx0ICogQSBudW1iZXIgb2YgYWN0aW9ucyBkb24ndCBzdXBwb3J0IGl0LCBtb3N0IG5vdGFibHkgd2F0Y2guXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFncyAtIFN0cmluZyBvciBhcnJheSBvZiB0YWcocykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDaGFuZ2VUYWdzID0gKHRhZ3MpID0+IHtcblx0XHRcdGN0eC5jaGFuZ2VUYWdzID0gdGFncztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3JlYXRlT3B0aW9uPW51bGxdIC0gQ2FuIHRha2UgdGhlIGZvbGxvd2luZyBmb3VyIHZhbHVlczpcblx0XHQgKiAtIHJlY3JlYXRlOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIG9yIGVkaXQgaXQgaWYgaXQgZXhpc3RzLlxuXHRcdCAqIC0gY3JlYXRlb25seTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBidXQgcmV0dXJuIGFuXG5cdFx0ICogZXJyb3IgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBub2NyZWF0ZTogZG9uJ3QgY3JlYXRlIHRoZSBwYWdlLCBvbmx5IGVkaXQgaXQgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBgbnVsbGA6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgdW5sZXNzIGl0IHdhcyBkZWxldGVkXG5cdFx0ICogaW4gdGhlIG1vbWVudCBiZXR3ZWVuIGxvYWRpbmcgdGhlIHBhZ2UgYW5kIHNhdmluZyB0aGUgZWRpdCAoZGVmYXVsdCkuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDcmVhdGVPcHRpb24gPSAoY3JlYXRlT3B0aW9uKSA9PiB7XG5cdFx0XHRjdHguY3JlYXRlT3B0aW9uID0gY3JlYXRlT3B0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gbWlub3JFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIG1pbm9yIGVkaXQuICovXG5cdFx0dGhpcy5zZXRNaW5vckVkaXQgPSAobWlub3JFZGl0KSA9PiB7XG5cdFx0XHRjdHgubWlub3JFZGl0ID0gbWlub3JFZGl0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gYm90RWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBib3QgZWRpdCAqL1xuXHRcdHRoaXMuc2V0Qm90RWRpdCA9IChib3RFZGl0KSA9PiB7XG5cdFx0XHRjdHguYm90RWRpdCA9IGJvdEVkaXQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gcGFnZVNlY3Rpb24gLSBJbnRlZ2VyIHNwZWNpZnlpbmcgdGhlIHNlY3Rpb24gbnVtYmVyIHRvIGxvYWQgb3Igc2F2ZS5cblx0XHQgKiBJZiBzcGVjaWZpZWQgYXMgYG51bGxgLCB0aGUgZW50aXJlIHBhZ2Ugd2lsbCBiZSByZXRyaWV2ZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlU2VjdGlvbiA9IChwYWdlU2VjdGlvbikgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VTZWN0aW9uID0gcGFnZVNlY3Rpb247XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4Q29uZmxpY3RSZXRyaWVzIC0gTnVtYmVyIG9mIHJldHJpZXMgZm9yIHNhdmUgZXJyb3JzIGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heENvbmZsaWN0UmV0cmllcyA9IChtYXhDb25mbGljdFJldHJpZXMpID0+IHtcblx0XHRcdGN0eC5tYXhDb25mbGljdFJldHJpZXMgPSBtYXhDb25mbGljdFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBub3QgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0XHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TWF4UmV0cmllcyA9IChtYXhSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4UmV0cmllcyA9IG1heFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgd2hldGhlciBhbmQgaG93IHRvIHdhdGNoIHRoZSBwYWdlLCBpbmNsdWRpbmcgc2V0dGluZyBhbiBleHBpcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIEJhc2ljYWxseSBhIG1peCBvZiBNVyBBUEkgYW5kIFR3aW5rbGV5IG9wdGlvbnMgYXZhaWxhYmxlIHByZS1leHBpcnk6XG5cdFx0ICogLSBgdHJ1ZWB8YCd5ZXMnYHxgJ3dhdGNoJ2A6IHBhZ2Ugd2lsbCBiZSBhZGRlZCB0byB0aGUgdXNlcidzXG5cdFx0ICogd2F0Y2hsaXN0IHdoZW4gdGhlIGFjdGlvbiBpcyBjYWxsZWQuIERlZmF1bHRzIHRvIGFuIGluZGVmaW5pdGVcblx0XHQgKiB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXMgcHJvdmlkZWQuXG5cdFx0ICogLSBgZmFsc2VgfGAnbm8nYHxgJ25vY2hhbmdlJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2UgKGluY2x1ZGluZyBleHBpcnkpIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICogLSBgJ2RlZmF1bHQnYHxgJ3ByZWZlcmVuY2VzJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2Ugd2lsbCBiZVxuXHRcdCAqIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiB0aGUgYWN0aW9uIGlzXG5cdFx0ICogY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpc1xuXHRcdCAqIHByb3ZpZGVkLlxuXHRcdCAqIC0gYCd1bndhdGNoJ2A6IGV4cGxpY2l0bHkgdW53YXRjaCB0aGUgcGFnZS5cblx0XHQgKiAtIEFueSBvdGhlciBgc3RyaW5nYCBvciBgbnVtYmVyYCwgb3IgYSBgTW9yZWJpdHMuZGF0ZWAgb3IgYERhdGVgXG5cdFx0ICogb2JqZWN0OiB3YXRjaCBwYWdlIHVudGlsIHRoZSBzcGVjaWZpZWQgdGltZSwgZGVmZXJyaW5nIHRvXG5cdFx0ICogYHdhdGNobGlzdEV4cGlyeWAgaWYgcHJvdmlkZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdCA9ICh3YXRjaGxpc3RPcHRpb24sIHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RPcHRpb24gPSB3YXRjaGxpc3RPcHRpb24udG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjYXNlICdub2NoYW5nZSc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSBmYWxzZTpcblx0XHRcdFx0Y2FzZSB1bmRlZmluZWQ6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHRcdFx0Ly8gVGhlIE1XIEFQSSBhbGxvd3MgZm9yIGNoYW5naW5nIGV4cGlyeSB3aXRoIG5vY2hhbmdlIChhcyBcIm5vY2hhbmdlXCIgcmVmZXJzIHRvIHRoZSBiaW5hcnkgc3RhdHVzKSxcblx0XHRcdFx0XHQvLyBidXQgYnkga2VlcGluZyB0aGlzIG51bGwgaXQgd2lsbCBkZWZhdWx0IHRvIGFueSBleGlzdGluZyBleHBpcnksIGVuc3VyZSB0aGVyZSBpcyBhY3R1YWxseSBcIm5vIGNoYW5nZS5cIlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSBudWxsO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0XHQvLyBleHBpcnkgdW5pbXBvcnRhbnRcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3Vud2F0Y2gnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVmZXJlbmNlcyc6XG5cdFx0XHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0XHRcdC8vIFRoZSBBUEkgYWxsb3dzIGFuIGV4cGlyeSBoZXJlLCBidXQgdGhlcmUgaXMgYXMgb2YgeWV0IChUMjY1NzE2KVxuXHRcdFx0XHRcdC8vIG5vIGV4cGlyeSBwcmVmZXJlbmNlIG9wdGlvbiwgc28gaXQncyBhIGJpdCBkZXZvaWQgb2YgY29udGV4dC5cblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd3YXRjaCc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIE5vdCByZWFsbHkgYSBcImRlZmF1bHRcIiBwZXIgc2UgYnV0IGNhdGNoZXMgXCJhbnkgb3RoZXIgc3RyaW5nXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0T3B0aW9uO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGEgd2F0Y2hsaXN0IGV4cGlyeS4gc2V0V2F0Y2hsaXN0IGNhbiBtb3N0bHkgaGFuZGxlIHRoaXMgYnlcblx0XHQgKiBpdHNlbGYsIHNvIHRoaXMgaXMgaGVyZSBsYXJnZWx5IGZvciBjb21wbGV0ZW5lc3MgYW5kIGNvbXBhdGliaWxpdHlcblx0XHQgKiB3aXRoIHRoZSBmdWxsIHN1aXRlIG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0RXhwaXJ5PWluZmluaXR5XSAtXG5cdFx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0XHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHRcdCAqIElTTyA4NjAxOiAyMDM4LTAxLTA5VDAzOjE0OjA3WlxuXHRcdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0XHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdFx0ICogU1FMOiAyMDM4LTAxLTA5IDAzOjE0OjA3XG5cdFx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0XHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0RXhwaXJ5ID0gKHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZCBBcyBvZiBEZWNlbWJlciAyMDIwLCB1c2Ugc2V0V2F0Y2hsaXN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIC0gYFRydWVgOiBwYWdlIHdhdGNobGlzdCBzdGF0dXMgd2lsbCBiZSBzZXQgYmFzZWQgb24gdGhlIHVzZXInc1xuXHRcdCAqIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogLSBgRmFsc2VgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICpcblx0XHQgKiBXYXRjaGxpc3Qgbm90ZXM6XG5cdFx0ICogMS4gVGhlIE1lZGlhV2lraSBBUEkgdmFsdWUgb2YgJ3Vud2F0Y2gnLCB3aGljaCBleHBsaWNpdGx5IHJlbW92ZXNcblx0XHQgKiB0aGUgcGFnZSBmcm9tIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LCBpcyBub3QgdXNlZC5cblx0XHQgKiAyLiBJZiBib3RoIGBzZXRXYXRjaGxpc3QoKWAgYW5kIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWAgYXJlXG5cdFx0ICogY2FsbGVkLCB0aGUgbGFzdCBjYWxsIHRha2VzIHByaW9yaXR5LlxuXHRcdCAqIDMuIFR3aW5rbGUgbW9kdWxlcyBzaG91bGQgdXNlIHRoZSBhcHByb3ByaWF0ZSBwcmVmZXJlbmNlIHRvIHNldCB0aGUgd2F0Y2hsaXN0IG9wdGlvbnMuXG5cdFx0ICogNC4gTW9zdCBUd2lua2xlIG1vZHVsZXMgdXNlIGBzZXRXYXRjaGxpc3QoKWAuIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWBcblx0XHQgKiBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIGZldyBUd2lua2xlIHdhdGNobGlzdCBwcmVmZXJlbmNlcyB0aGF0XG5cdFx0ICogYWNjZXB0IGEgc3RyaW5nIHZhbHVlIG9mIGBkZWZhdWx0YC5cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyA9ICh3YXRjaGxpc3RPcHRpb24pID0+IHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMud2lraS5wYWdlLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyB3YXMgZGVwcmVjYXRlZCBEZWNlbWJlciAyMDIwLCBwbGVhc2UgdXNlIHNldFdhdGNobGlzdCdcblx0XHRcdCk7XG5cdFx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb2xsb3dSZWRpcmVjdD1mYWxzZV0gLVxuXHRcdCAqIC0gYHRydWVgOiBhIG1heGltdW0gb2Ygb25lIHJlZGlyZWN0IHdpbGwgYmUgZm9sbG93ZWQuIEluIHRoZSBldmVudFxuXHRcdCAqIG9mIGEgcmVkaXJlY3QsIGEgbWVzc2FnZSBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgYW5kIHRoZSByZWRpcmVjdFxuXHRcdCAqIHRhcmdldCBjYW4gYmUgcmV0cmlldmVkIHdpdGggZ2V0UGFnZU5hbWUoKS5cblx0XHQgKiAtIGBmYWxzZWA6IChkZWZhdWx0KSB0aGUgcmVxdWVzdGVkIHBhZ2VOYW1lIHdpbGwgYmUgdXNlZCB3aXRob3V0IHJlZ2FyZCB0byBhbnkgcmVkaXJlY3QuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93Q3Jvc3NOc1JlZGlyZWN0PXRydWVdIC0gTm90IGFwcGxpY2FibGUgaWYgYGZvbGxvd1JlZGlyZWN0YCBpcyBub3Qgc2V0IHRydWUuXG5cdFx0ICogLSBgdHJ1ZWA6IChkZWZhdWx0KSBmb2xsb3cgcmVkaXJlY3QgZXZlbiBpZiBpdCBpcyBhIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdFxuXHRcdCAqIC0gYGZhbHNlYDogZG9uJ3QgZm9sbG93IHJlZGlyZWN0IGlmIGl0IGlzIGNyb3NzLW5hbWVzcGFjZSwgZWRpdCB0aGUgcmVkaXJlY3QgaXRzZWxmLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Rm9sbG93UmVkaXJlY3QgPSAoZm9sbG93UmVkaXJlY3QsIGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5wYWdlTG9hZGVkKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogY2Fubm90IGNoYW5nZSByZWRpcmVjdCBzZXR0aW5nIGFmdGVyIHRoZSBwYWdlIGhhcyBiZWVuIGxvYWRlZCEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5mb2xsb3dSZWRpcmVjdCA9IGZvbGxvd1JlZGlyZWN0O1xuXHRcdFx0Y3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9XG5cdFx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9PT0gdW5kZWZpbmVkID8gY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA6IGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDtcblx0XHR9O1xuXHRcdC8vIGxvb2t1cC1jcmVhdGlvbiBzZXR0ZXIgZnVuY3Rpb25cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgLSBJZiBzZXQgdHJ1ZSwgdGhlIGF1dGhvciBhbmQgdGltZXN0YW1wIG9mXG5cdFx0ICogdGhlIGZpcnN0IG5vbi1yZWRpcmVjdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIGlzIHJldHJpZXZlZC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6XG5cdFx0ICogMS4gSWYgdGhlcmUgYXJlIG5vIHJldmlzaW9ucyBhbW9uZyB0aGUgZmlyc3QgNTAgdGhhdCBhcmVcblx0XHQgKiBub24tcmVkaXJlY3RzLCBvciBpZiB0aGVyZSBhcmUgbGVzcyA1MCByZXZpc2lvbnMgYW5kIGFsbCBhcmVcblx0XHQgKiByZWRpcmVjdHMsIHRoZSBvcmlnaW5hbCBjcmVhdGlvbiBpcyByZXRyaWV2ZWQuXG5cdFx0ICogMi4gUmV2aXNpb25zIHRoYXQgdGhlIHVzZXIgaXMgbm90IHByaXZpbGVnZWQgdG8gYWNjZXNzXG5cdFx0ICogKHJldmRlbGVkL3N1cHByZXNzZWQpIHdpbGwgYmUgdHJlYXRlZCBhcyBub24tcmVkaXJlY3RzLlxuXHRcdCAqIDMuIE11c3Qgbm90IGJlIHVzZWQgd2hlbiB0aGUgcGFnZSBoYXMgYSBub24td2lraXRleHQgY29udGVudG1vZGVsXG5cdFx0ICogc3VjaCBhcyBNb2R1bGVzcGFjZSBMdWEgb3IgdXNlciBKYXZhU2NyaXB0L0NTUy5cblx0XHQgKi9cblx0XHR0aGlzLnNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZmxhZztcblx0XHR9O1xuXHRcdC8vIE1vdmUtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBkZXN0aW5hdGlvbiAqL1xuXHRcdHRoaXMuc2V0TW92ZURlc3RpbmF0aW9uID0gKGRlc3RpbmF0aW9uKSA9PiB7XG5cdFx0XHRjdHgubW92ZURlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlVGFsa1BhZ2UgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVUYWxrUGFnZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdWJwYWdlcyA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVN1YnBhZ2VzID0gISFmbGFnO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVN1cHByZXNzUmVkaXJlY3QgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gISFmbGFnO1xuXHRcdH07XG5cdFx0Ly8gUHJvdGVjdC1yZWxhdGVkIHNldHRlciBmdW5jdGlvbnNcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgLSBUaGUgcmlnaHQgcmVxdWlyZWQgZm9yIHRoZSBzcGVjaWZpYyBhY3Rpb25cblx0XHQgKiBlLmcuIHN5c29wLCB0ZW1wbGF0ZWVkaXRvciwgYXV0b2NvbmZpcm1lZFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwaXJ5PWluZmluaXR5XVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldE1vdmVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDcmVhdGVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldENhc2NhZGluZ1Byb3RlY3Rpb24gPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFmbGFnO1xuXHRcdH07XG5cdFx0dGhpcy5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gKCkgPT4ge1xuXHRcdFx0Y3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgPSB0cnVlO1xuXHRcdH07XG5cdFx0Ly8gUmV2ZXJ0LXJlbGF0ZWQgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdHRoaXMuc2V0T2xkSUQgPSAob2xkSUQpID0+IHtcblx0XHRcdGN0eC5yZXZlcnRPbGRJRCA9IG9sZElEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjdXJyZW50IHJldmlzaW9uIElEIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRDdXJyZW50SUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydEN1cklEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IExhc3QgZWRpdG9yIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRSZXZpc2lvblVzZXIgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydFVzZXI7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGVkaXRlZC4gKi9cblx0XHR0aGlzLmdldExhc3RFZGl0VGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubGFzdEVkaXRUaW1lO1xuXHRcdH07XG5cdFx0Ly8gTWlzY2VsbGFuZW91cyBnZXR0ZXJzL3NldHRlcnM6XG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lIGFuIG9iamVjdCBmb3IgdXNlIGluIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBgY2FsbGJhY2tQYXJhbWV0ZXJzYCBpcyBmb3IgdXNlIGJ5IHRoZSBjYWxsZXIgb25seS4gVGhlIHBhcmFtZXRlcnNcblx0XHQgKiBhbGxvdyBhIGNhbGxlciB0byBwYXNzIHRoZSBwcm9wZXIgY29udGV4dCBpbnRvIGl0cyBjYWxsYmFja1xuXHRcdCAqIGZ1bmN0aW9uLiAgQ2FsbGVycyBtdXN0IGVuc3VyZSB0aGF0IGFueSBjaGFuZ2VzIHRvIHRoZVxuXHRcdCAqIGNhbGxiYWNrUGFyYW1ldGVycyBvYmplY3Qgd2l0aGluIGEgYGxvYWQoKWAgY2FsbGJhY2sgc3RpbGwgcGVybWl0IGFcblx0XHQgKiBwcm9wZXIgcmUtZW50cnkgaW50byB0aGUgYGxvYWQoKWAgY2FsbGJhY2sgaWYgYW4gZWRpdCBjb25mbGljdCBpc1xuXHRcdCAqIGRldGVjdGVkIHVwb24gY2FsbGluZyBgc2F2ZSgpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFja1BhcmFtZXRlcnNcblx0XHQgKi9cblx0XHR0aGlzLnNldENhbGxiYWNrUGFyYW1ldGVycyA9IChjYWxsYmFja1BhcmFtZXRlcnMpID0+IHtcblx0XHRcdGN0eC5jYWxsYmFja1BhcmFtZXRlcnMgPSBjYWxsYmFja1BhcmFtZXRlcnM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBvYmplY3QgcHJldmlvdXNseSBzZXQgYnkgYHNldENhbGxiYWNrUGFyYW1ldGVycygpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENhbGxiYWNrUGFyYW1ldGVycyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLnNldFN0YXR1c0VsZW1lbnQgPSAoc3RhdHVzRWxlbWVudCkgPT4ge1xuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQgPSBzdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gU3RhdHVzIGVsZW1lbnQgY3JlYXRlZCBieSB0aGUgY29uc3RydWN0b3IuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRTdGF0dXNFbGVtZW50ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5zdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhZ2UgZXhpc3RlZCBvbiB0aGUgd2lraSB3aGVuIGl0IHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmV4aXN0cyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUV4aXN0cztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFBhZ2UgSUQgb2YgdGhlIHBhZ2UgbG9hZGVkLiAwIGlmIHRoZSBwYWdlIGRvZXNuJ3Rcblx0XHQgKiBleGlzdC5cblx0XHQgKi9cblx0XHR0aGlzLmdldFBhZ2VJRCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUlEO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gLSBDb250ZW50IG1vZGVsIG9mIHRoZSBwYWdlLiAgUG9zc2libGUgdmFsdWVzXG5cdFx0ICogaW5jbHVkZSAoYnV0IG1heSBub3QgYmUgbGltaXRlZCB0byk6IGB3aWtpdGV4dGAsIGBqYXZhc2NyaXB0YCxcblx0XHQgKiBgY3NzYCwgYGpzb25gLCBgU2NyaWJ1bnRvYCwgYHNhbml0aXplZC1jc3NgLCBgTWFzc01lc3NhZ2VMaXN0Q29udGVudGAuXG5cdFx0ICogQWxzbyBnZXR0YWJsZSB2aWEgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENvbnRlbnRNb2RlbCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY29udGVudE1vZGVsO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIFdhdGNoZWQgc3RhdHVzIG9mIHRoZSBwYWdlLiBCb29sZWFuXG5cdFx0ICogdW5sZXNzIGl0J3MgYmVpbmcgd2F0Y2hlZCB0ZW1wb3JhcmlseSwgaW4gd2hpY2ggY2FzZSByZXR1cm5zIHRoZVxuXHRcdCAqIGV4cGlyeSBzdHJpbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRXYXRjaGVkID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC53YXRjaGVkO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmdldExvYWRUaW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5sb2FkVGltZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBwYWdlIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDcmVhdG9yID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jcmVhdG9yO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIElTT1N0cmluZyB0aW1lc3RhbXAgb2YgcGFnZSBjcmVhdGlvbiBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRpb25UaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnRpbWVzdGFtcDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBvciBub3QgeW91IGNhbiBlZGl0IHRoZSBwYWdlICovXG5cdFx0dGhpcy5jYW5FZGl0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICEhY3R4LnRlc3RBY3Rpb25zICYmIGN0eC50ZXN0QWN0aW9ucy5pbmNsdWRlcygnZWRpdCcpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV0cmlldmVzIHRoZSB1c2VybmFtZSBvZiB0aGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBhcyB3ZWxsIGFzXG5cdFx0ICogdGhlIHRpbWVzdGFtcCBvZiBjcmVhdGlvbi4gIFRoZSB1c2VybmFtZSBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdG9yKClgIGZ1bmN0aW9uOyB0aGUgdGltZXN0YW1wIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdFx0ICogYGdldENyZWF0aW9uVGltZXN0YW1wKClgIGZ1bmN0aW9uLlxuXHRcdCAqIFByaW9yIHRvIEp1bmUgMjAxOSBrbm93biBhcyBgbG9va3VwQ3JlYXRvcigpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdFx0ICogdGhlIHVzZXJuYW1lIGFuZCB0aW1lc3RhbXAgYXJlIGZvdW5kIHdpdGhpbiB0aGUgY2FsbGJhY2suXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSBsb29rdXAgZmFpbHNcblx0XHQgKi9cblx0XHR0aGlzLmxvb2t1cENyZWF0aW9uID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvb2t1cENyZWF0aW9uKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0XHRydnByb3A6ICd1c2VyfHRpbWVzdGFtcCcsXG5cdFx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBPbmx5IHRoZSB3aWtpdGV4dCBjb250ZW50IG1vZGVsIGNhbiByZWxpYWJseSBoYW5kbGVcblx0XHRcdC8vIHJ2c2VjdGlvbiwgb3RoZXJzIHJldHVybiBhbiBlcnJvciB3aGVuIHBhaXJlZCB3aXRoIHRoZVxuXHRcdFx0Ly8gY29udGVudCBydnByb3AuIFJlbGF0ZWRseSwgbm9uLXdpa2l0ZXh0IG1vZGVscyBkb24ndFxuXHRcdFx0Ly8gdW5kZXJzdGFuZCB0aGUgI1JFRElSRUNUIGNvbmNlcHQsIHNvIHdlIHNob3VsZG4ndCBhdHRlbXB0XG5cdFx0XHQvLyB0aGUgcmVkaXJlY3QgcmVzb2x1dGlvbiBpbiBmbkxvb2t1cENyZWF0aW9uU3VjY2Vzc1xuXHRcdFx0aWYgKGN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IpIHtcblx0XHRcdFx0cXVlcnkucnZzZWN0aW9uID0gMDtcblx0XHRcdFx0cXVlcnkucnZwcm9wICs9ICd8Y29udGVudCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdnVUxTKCfmipPlj5bpobXpnaLliJvlu7rogIXkv6Hmga8nLCAn5oqT5Y+W6aCB6Z2i5bu656uL6ICF6LOH6KiKJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV2ZXJ0cyBhIHBhZ2UgdG8gYHJldmVydE9sZElEYCBzZXQgYnkgYHNldE9sZElEYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnJldmVydCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFjdHgucmV2ZXJ0T2xkSUQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiByZXZpc2lvbiBJRCB0byByZXZlcnQgdG8gd2FzIG5vdCBzZXQgYmVmb3JlIHJldmVydCEnKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdyZXZlcnQnO1xuXHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE1vdmVzIGEgcGFnZSB0byBhbm90aGVyIHRpdGxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMubW92ZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTW92ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Nb3ZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdtb3ZlJywgY3R4Lm9uTW92ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdHgubW92ZURlc3RpbmF0aW9uKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogZGVzdGluYXRpb24gcGFnZSBuYW1lIHdhcyBub3Qgc2V0IGJlZm9yZSBtb3ZlIScpO1xuXHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ21vdmUnKSkge1xuXHRcdFx0XHRmblByb2Nlc3NNb3ZlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdtb3ZlJyk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzTW92ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgubW92ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE1hcmtzIHRoZSBwYWdlIGFzIHBhdHJvbGxlZCwgdXNpbmcgYHJjaWRgIChpZiBhdmFpbGFibGUpIG9yIGByZXZpZGAuXG5cdFx0ICpcblx0XHQgKiBQYXRyb2xsaW5nIGFzIHN1Y2ggZG9lc24ndCBuZWVkIHRvIHJlbHkgb24gbG9hZGluZyB0aGUgcGFnZSBpblxuXHRcdCAqIHF1ZXN0aW9uOyBzaW1wbHkgcGFzc2luZyBhIHJldmlkIHRvIHRoZSBBUEkgaXMgc3VmZmljaWVudCwgc28gaW5cblx0XHQgKiB0aG9zZSBjYXNlcyBqdXN0IHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gaXMgcHJvYmFibHkgcHJlZmVyYWJsZS5cblx0XHQgKlxuXHRcdCAqIE5vIGVycm9yIGhhbmRsaW5nIHNpbmNlIHdlIGRvbid0IGFjdHVhbGx5IGNhcmUgYWJvdXQgdGhlIGVycm9ycy5cblx0XHQgKi9cblx0XHR0aGlzLnBhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIU1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0Ly8gSWYgYSBsaW5rIGlzIHByZXNlbnQsIGRvbid0IG5lZWQgdG8gY2hlY2sgaWYgaXQncyBwYXRyb2xsZWRcblx0XHRcdGlmICgkYm9keS5maW5kKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xocmVmID0gJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsgYScpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0Y3R4LnJjaWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JjaWQnLCBwYXRyb2xocmVmKTtcblx0XHRcdFx0Zm5Qcm9jZXNzUGF0cm9sKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcGF0cm9sUXVlcnkgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0XHQvLyBhcyBsb25nIGFzIHdlJ3JlIHF1ZXJ5aW5nLCBtaWdodCBhcyB3ZWxsIGdldCBhIHRva2VuXG5cdFx0XHRcdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBwYWdlIGlzIHVucGF0cm9sbGVkXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNwcm9wOiAncGF0cm9sbGVkJyxcblx0XHRcdFx0XHRyY3RpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNsaW1pdDogMSxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaSh3Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLCBwYXRyb2xRdWVyeSwgZm5Qcm9jZXNzUGF0cm9sKTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Ly8gfGRlbGV0ZXwgaXMgYSByZXNlcnZlZCB3b3JkIGluIHNvbWUgZmxhdm91cnMgb2YgSlNcblx0XHQvKipcblx0XHQgKiBEZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLmRlbGV0ZVBhZ2UgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25EZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NEZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBVbmRlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMudW5kZWxldGVQYWdlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3VuZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUHJvdGVjdHMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJvdGVjdCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uUHJvdGVjdFN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdwcm90ZWN0JywgY3R4Lm9uUHJvdGVjdEZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdEVkaXQgJiYgIWN0eC5wcm90ZWN0TW92ZSAmJiAhY3R4LnByb3RlY3RDcmVhdGUpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0J0ludGVybmFsIGVycm9yOiB5b3UgbXVzdCBzZXQgZWRpdCBhbmQvb3IgbW92ZSBhbmQvb3IgY3JlYXRlIHByb3RlY3Rpb24gYmVmb3JlIGNhbGxpbmcgcHJvdGVjdCgpISdcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGJlY2F1c2Ugb2YgdGhlIHdheSBNVyBBUEkgaW50ZXJwcmV0cyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdFx0Ly8gKGFic29sdXRlLCBub3QgZGlmZmVyZW50aWFsKSwgd2UgYWx3YXlzIG5lZWQgdG8gcmVxdWVzdFxuXHRcdFx0Ly8gcHJvdGVjdGlvbiBsZXZlbHMgZnJvbSB0aGUgc2VydmVyXG5cdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdwcm90ZWN0Jyk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUHJvY2Vzc1Byb3RlY3QsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qXG5cdFx0ICogUHJpdmF0ZSBtZW1iZXIgZnVuY3Rpb25zXG5cdFx0ICogVGhlc2UgYXJlIG5vdCBleHBvc2VkIG91dHNpZGVcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgd2UgY2FuIHNhdmUgYW4gQVBJIGNhbGwgYnkgdXNpbmcgdGhlIGNzcmYgdG9rZW5cblx0XHQgKiBzZW50IHdpdGggdGhlIHBhZ2UgSFRNTCwgb3Igd2hldGhlciB3ZSBuZWVkIHRvIGFzayB0aGUgc2VydmVyIGZvclxuXHRcdCAqIG1vcmUgaW5mbyAoZS5nLiBwcm90ZWN0aW9uIG9yIHdhdGNobGlzdCBleHBpcnkpLlxuXHRcdCAqXG5cdFx0ICogQ3VycmVudGx5IHVzZWQgZm9yIGBhcHBlbmRgLCBgcHJlcGVuZGAsIGBuZXdTZWN0aW9uYCwgYG1vdmVgLFxuXHRcdCAqIGBkZWxldGVQYWdlYCwgYW5kIGB1bmRlbGV0ZVBhZ2VgLiBOb3QgdXNlZCBmb3IgYHByb3RlY3RgXG5cdFx0ICogc2luY2UgaXQgYWx3YXlzIG5lZWRzIHRvIHJlcXVlc3QgcHJvdGVjdGlvbiBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2FjdGlvbj1lZGl0XSAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLlxuXHRcdCAqIFwiZWRpdFwiIG9yIFwiZGVsZXRlXCIuIEluIHByYWN0aWNlLCBvbmx5IFwiZWRpdFwiIG9yIFwibm90ZWRpdFwiIG1hdHRlcnMuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5DYW5Vc2VNd1VzZXJUb2tlbiA9IChhY3Rpb24pID0+IHtcblx0XHRcdGFjdGlvbiB8fD0gJ2VkaXQnO1xuXHRcdFx0Ly8gSWYgYSB3YXRjaGxpc3QgZXhwaXJ5IGlzIHNldCwgd2UgbXVzdCBhbHdheXMgbG9hZCB0aGUgcGFnZVxuXHRcdFx0Ly8gdG8gYXZvaWQgb3ZlcndyaXRpbmcgaW5kZWZpbml0ZSBwcm90ZWN0aW9uLiAgT2YgY291cnNlLCBub3Rcblx0XHRcdC8vIG5lZWRlZCBpZiBzZXR0aW5nIGluZGVmaW5pdGUgd2F0Y2hpbmchXG5cdFx0XHRpZiAoY3R4LndhdGNobGlzdEV4cGlyeSAmJiAhTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQVBJLWJhc2VkIHJlZGlyZWN0IHJlc29sdXRpb24gb25seSB3b3JrcyBmb3IgYWN0aW9uPXF1ZXJ5IGFuZFxuXHRcdFx0Ly8gYWN0aW9uPWVkaXQgaW4gYXBwZW5kL3ByZXBlbmQvbmV3IG1vZGVzXG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGlmICghY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gbXVzdCBsb2FkIHRoZSBwYWdlIHRvIGNoZWNrIGZvciBjcm9zcyBuYW1lc3BhY2UgcmVkaXJlY3RzXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWN0aW9uICE9PSAnZWRpdCcgfHwgY3R4LmVkaXRNb2RlID09PSAnYWxsJyB8fCBjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBkbyB3ZSBuZWVkIHRvIGZldGNoIHRoZSBlZGl0IHByb3RlY3Rpb24gZXhwaXJ5P1xuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wICYmICFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKE1vcmViaXRzLnBhZ2VOYW1lTm9ybSkuZ2V0UHJlZml4ZWRUZXh0KCkgIT09XG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHdnUmVzdHJpY3Rpb25FZGl0IGlzIG51bGwgb24gbm9uLWV4aXN0ZW50IHBhZ2VzLFxuXHRcdFx0XHQvLyBzbyB0aGlzIG5lYXRseSBoYW5kbGVzIG5vbmV4aXN0ZW50IHBhZ2VzXG5cdFx0XHRcdGNvbnN0IGVkaXRSZXN0cmljdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnUmVzdHJpY3Rpb25FZGl0Jyk7XG5cdFx0XHRcdGlmICghZWRpdFJlc3RyaWN0aW9uIHx8IGVkaXRSZXN0cmljdGlvbi5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICEhbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdoZW4gZnVuY3Rpb25zIGNhbid0IHVzZVxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V+Zm5DYW5Vc2VNd1VzZXJUb2tlbnxmbkNhblVzZU13VXNlclRva2VufVxuXHRcdCAqIG9yIHJlcXVpcmUgY2hlY2tpbmcgcHJvdGVjdGlvbiBvciB3YXRjaGVkIHN0YXR1cywgbWFpbnRhaW4gdGhlIHF1ZXJ5XG5cdFx0ICogaW4gb25lIHBsYWNlLiBVc2VkIGZvciB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2RlbGV0ZVBhZ2V8ZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI3VuZGVsZXRlUGFnZXx1bmRlbGV0ZX0sXG5cdFx0ICoge0BsaW5rKiBNb3JlYml0cy53aWtpLnBhZ2UjcHJvdGVjdHxwcm90ZWN0fSxcblx0XHQgKiBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNtb3ZlfG1vdmV9XG5cdFx0ICogKGJhc2ljYWxseSwganVzdCBub3Qge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNsb2FkfGxvYWR9KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy4gXCJlZGl0XCIgb3Jcblx0XHQgKiBcImRlbGV0ZVwiLlxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IEFwcHJvcHJpYXRlIHF1ZXJ5LlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuTmVlZFRva2VuSW5mb1F1ZXJ5ID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIFByb3RlY3Rpb24gbm90IGNoZWNrZWQgZm9yIG5vbi1zeXNvcCBtb3Zlc1xuXHRcdFx0aWYgKGFjdGlvbiAhPT0gJ21vdmUnIHx8IE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdHF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCAmJiBhY3Rpb24gIT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBxdWVyeTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZFN1Y2Nlc3MoKSBmb3IgYXBwZW5kKCksIHByZXBlbmQoKSwgYW5kIG5ld1NlY3Rpb24oKSB0aHJlYWRzXG5cdFx0Y29uc3QgZm5BdXRvU2F2ZSA9IChwYWdlb2JqKSA9PiB7XG5cdFx0XHRwYWdlb2JqLnNhdmUoY3R4Lm9uU2F2ZVN1Y2Nlc3MsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZEFwaS5wb3N0KClcblx0XHRjb25zdCBmbkxvYWRTdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIGN0eC5vbkxvYWRGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0bGV0IHJldjtcblx0XHRcdGN0eC5wYWdlRXhpc3RzID0gIXBhZ2UubWlzc2luZztcblx0XHRcdGlmIChjdHgucGFnZUV4aXN0cykge1xuXHRcdFx0XHRbcmV2XSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0XHRjdHgubGFzdEVkaXRUaW1lID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcmV2LmNvbnRlbnQ7XG5cdFx0XHRcdGN0eC5wYWdlSUQgPSBwYWdlLnBhZ2VpZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5wYWdlVGV4dCA9ICcnOyAvLyBhbGxvdyBmb3IgY29uY2F0ZW5hdGlvbiwgZXRjLlxuXHRcdFx0XHRjdHgucGFnZUlEID0gMDsgLy8gbm9uZXhpc3RlbnQgaW4gcmVzcG9uc2UsIG1hdGNoZXMgd2dBcnRpY2xlSWRcblx0XHRcdH1cblxuXHRcdFx0Y3R4LmNzcmZUb2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRpZiAoIWN0eC5jc3JmVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+acquiDveiOt+WPlue8lui+keS7pOeJjOOAgicsICfmnKrog73lj5blvpfnt6jovK/mrIrmnZbjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFRpbWUgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLmN1cnRpbWVzdGFtcDtcblx0XHRcdGlmICghY3R4LmxvYWRUaW1lKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfmnKrog73ojrflj5blvZPliY3ml7bpl7TmiLPjgIInLCAn5pyq6IO95Y+W5b6X55W25YmN5pmC6ZaT5oiz44CCJykpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNvbnRlbnRNb2RlbCA9IHBhZ2UuY29udGVudG1vZGVsO1xuXHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHQvLyBleHRyYWN0IHByb3RlY3Rpb24gaW5mbywgdG8gYWxlcnQgYWRtaW5zIHdoZW4gdGhleSBhcmUgYWJvdXQgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlXG5cdFx0XHQvLyBJbmNsdWRlcyBjYXNjYWRpbmcgcHJvdGVjdGlvblxuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQcm90ID0gcGFnZS5wcm90ZWN0aW9uLmZpbmRMYXN0KChwcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoZWRpdFByb3QpIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBlZGl0UHJvdC5leHBpcnk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHBhZ2UubGFzdHJldmlkO1xuXHRcdFx0Y29uc3QgdGVzdGFjdGlvbnMgPSBwYWdlLmFjdGlvbnM7XG5cdFx0XHRjdHgudGVzdEFjdGlvbnMgPSBbXTsgLy8gd2FzIG51bGxcblx0XHRcdGZvciAoY29uc3QgYWN0aW9uIG9mIE9iamVjdC5rZXlzKHRlc3RhY3Rpb25zKSkge1xuXHRcdFx0XHRpZiAodGVzdGFjdGlvbnNbYWN0aW9uXSkge1xuXHRcdFx0XHRcdGN0eC50ZXN0QWN0aW9uc1tjdHgudGVzdEFjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0Y3R4LnJldmVydEN1cklEID0gcmV2ICYmIHJldi5yZXZpZDtcblx0XHRcdFx0aWYgKCFjdHgucmV2ZXJ0Q3VySUQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5L+u6K6i54mI5pysSUTjgIInLCAn5pyq6IO95Y+W5b6X55uu5YmN5L+u6KiC54mI5pysSUTjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5yZXZlcnRVc2VyID0gcmV2ICYmIHJldi51c2VyO1xuXHRcdFx0XHRpZiAoIWN0eC5yZXZlcnRVc2VyKSB7XG5cdFx0XHRcdFx0aWYgKHJldiAmJiByZXYudXNlcmhpZGRlbikge1xuXHRcdFx0XHRcdFx0Ly8gdXNlcm5hbWUgd2FzIFJldkRlbCdkIG9yIG92ZXJzaWdodGVkXG5cdFx0XHRcdFx0XHRjdHgucmV2ZXJ0VXNlciA9IHdnVUxTKCc855So5oi35ZCN5bey6ZqQ6JePPicsICc85L2/55So6ICF5ZCN56ix5bey6Zqx6JePPicpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5pyq6IO96I635Y+W5q2k5L+u6K6i54mI5pys55qE57yW6L6R6ICF44CCJywgJ+acquiDveWPluW+l+atpOS/ruiogueJiOacrOeahOe3qOi8r+iAheOAgicpKTtcblx0XHRcdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBzZXQgcmV2ZXJ0IGVkaXQgc3VtbWFyeVxuXHRcdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBgW1tRVzpVTkRPfOaSpOmUgF1d55SxICR7Y3R4LnJldmVydFVzZXJ9IOaJgOWBmuWHuueahCR7d2dVTFMoJ+S/ruiuoiAnLCAn5L+u6KiCICcpfSR7XG5cdFx0XHRcdFx0Y3R4LnJldmVydE9sZElEXG5cdFx0XHRcdH3vvJoke2N0eC5lZGl0U3VtbWFyeX1gO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnBhZ2VMb2FkZWQgPSB0cnVlO1xuXHRcdFx0Ly8gbXcubm90aWZ5KFwiR2VuZXJhdGUgZWRpdCBjb25mbGljdCBub3dcIiwge3R5cGU6ICd3YXJuJywgdGFnOiAnbW9yZWJpdHMnfSk7ICAvLyBmb3IgdGVzdGluZyBlZGl0IGNvbmZsaWN0IHJlY292ZXJ5IGxvZ2ljXG5cdFx0XHRjdHgub25Mb2FkU3VjY2Vzcyh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0fTtcblx0XHQvLyBoZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIHBhZ2UgbmFtZSByZXR1cm5lZCBmcm9tIHRoZSBBUElcblx0XHRjb25zdCBmbkNoZWNrUGFnZU5hbWUgPSBmdW5jdGlvbiAocmVzcG9uc2UsIG9uRmFpbHVyZSkge1xuXHRcdFx0b25GYWlsdXJlIHx8PSBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Y29uc3QgcGFnZSA9IHJlc3BvbnNlLnBhZ2VzICYmIHJlc3BvbnNlLnBhZ2VzWzBdO1xuXHRcdFx0aWYgKHBhZ2UpIHtcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIGludmFsaWQgdGl0bGVzXG5cdFx0XHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5qCH6aKY5LiN5ZCI5rOV77yaJywgYOaomemhjOS4jeWQiOazle+8miR7Y3R4LnBhZ2VOYW1lfWApKTtcblx0XHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHJldHJpZXZlIGFjdHVhbCB0aXRsZSBvZiB0aGUgcGFnZSBhZnRlciBub3JtYWxpemF0aW9uIGFuZCByZWRpcmVjdHNcblx0XHRcdFx0Y29uc3QgcmVzb2x2ZWROYW1lID0gcGFnZS50aXRsZTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGZvciBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Q6XG5cdFx0XHRcdFx0Y29uc3Qgb3JpZ05zID0gbmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkubmFtZXNwYWNlO1xuXHRcdFx0XHRcdGNvbnN0IG5ld05zID0gbmV3IG13LlRpdGxlKHJlc29sdmVkTmFtZSkubmFtZXNwYWNlO1xuXHRcdFx0XHRcdGlmIChvcmlnTnMgIT09IG5ld05zICYmICFjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3Z1VMUygn5piv6Leo5ZG95ZCN56m66Ze06YeN5a6a5ZCR5YiwJywgJ+aYr+i3qOWRveWQjeepuumWk+mHjeaWsOWwjuWQkeWIsCcpICtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdnVUxTKCfvvIznlaXov4cnLCAn77yM55Wl6YGOJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIG9ubHkgbm90aWZ5IHVzZXIgZm9yIHJlZGlyZWN0cywgbm90IG5vcm1hbGl6YXRpb25cblx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKFxuXHRcdFx0XHRcdFx0d2dVTFMoJ+S/oeaBrycsICfos4foqIonKSxcblx0XHRcdFx0XHRcdHdnVUxTKCfku44gJywgJ+W+niAnKSArIGN0eC5wYWdlTmFtZSArIHdnVUxTKCcg6YeN5a6a5ZCR5YiwICcsICcg6YeN5paw5bCO5ZCR5YiwICcpICsgcmVzb2x2ZWROYW1lXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucGFnZU5hbWUgPSByZXNvbHZlZE5hbWU7IC8vIHVwZGF0ZSB0byByZWRpcmVjdCB0YXJnZXQgb3Igbm9ybWFsaXplZCBuYW1lXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjb3VsZCBiZSBhIGNpcmN1bGFyIHJlZGlyZWN0IG9yIG90aGVyIHByb2JsZW1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+S4jeiDveino+aekOmhtemdoueahOmHjeWumuWQke+8micsICfkuI3og73op6PmnpDpoIHpnaLnmoTph43mlrDlsI7lkJHvvJonKSArIGN0eC5wYWdlTmFtZSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSB3aGV0aGVyIHdlIHNob3VsZCBwcm92aWRlIGEgd2F0Y2hsaXN0IGV4cGlyeS4gIFdpbGwgbm90XG5cdFx0ICogZG8gc28gaWYgdGhlIHBhZ2UgaXMgY3VycmVudGx5IHBlcm1hbmVudGx5IHdhdGNoZWQsIG9yIHRoZSBjdXJyZW50XG5cdFx0ICogZXhwaXJ5IGlzICphZnRlciogdGhlIG5ldywgcHJvdmlkZWQgZXhwaXJ5LiAgT25seSBoYW5kbGVzIHN0cmluZ3Ncblx0XHQgKiByZWNvZ25pemVkIGJ5IHtAbGluayBNb3JlYml0cy5kYXRlfSBvciByZWxhdGl2ZSB0aW1lZnJhbWVzIHdpdGhcblx0XHQgKiB1bml0IGl0IGNhbiBwcm9jZXNzLiAgUmVsaWVzIG9uIHRoZSBmYWN0IHRoYXQgZm5DYW5Vc2VNd1VzZXJUb2tlblxuXHRcdCAqIHJlcXVpcmVzIHBhZ2UgbG9hZGluZyBpZiBhIHdhdGNobGlzdGV4cGlyeSBpcyBwcm92aWRlZCwgc28gd2UgYXJlXG5cdFx0ICogZW5zdXJlZCBvZiBrbm93aW5nIHRoZSB3YXRjaCBzdGF0dXMgYnkgdGhlIHVzZSBvZiB0aGlzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5BcHBseVdhdGNobGlzdEV4cGlyeSA9ICgpID0+IHtcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5KSB7XG5cdFx0XHRcdGlmICghY3R4LndhdGNoZWQgfHwgTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY3R4LndhdGNoZWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0bGV0IG5ld0V4cGlyeTtcblx0XHRcdFx0XHQvLyBBdHRlbXB0IHRvIGRldGVybWluZSBpZiB0aGUgbmV3IGV4cGlyeSBpcyBhXG5cdFx0XHRcdFx0Ly8gcmVsYXRpdmUgKGUuZy4gYDEgbW9udGhgKSBvciBhYnNvbHV0ZSBkYXRldGltZVxuXHRcdFx0XHRcdGNvbnN0IHJlbCA9IGN0eC53YXRjaGxpc3RFeHBpcnkuc3BsaXQoJyAnKTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoKS5hZGQocmVsWzBdLCByZWxbMV0pO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNobGlzdEV4cGlyeSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIElmIHRoZSBkYXRlIGlzIHZhbGlkLCBvbmx5IHVzZSBpdCBpZiBpdCBleHRlbmRzIHRoZSBjdXJyZW50IGV4cGlyeVxuXHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzQWZ0ZXIobmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNoZWQpKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgaXQncyBzdGlsbCBub3QgdmFsaWQsIGhvcGUgaXQncyBhIHZhbGlkIE1XIGV4cGlyeSBmb3JtYXQgdGhhdFxuXHRcdFx0XHRcdFx0Ly8gTW9yZWJpdHMuZGF0ZSBkb2Vzbid0IHJlY29nbml6ZSwgc28ganVzdCBkZWZhdWx0IHRvIHVzaW5nIGl0LlxuXHRcdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIGFsc28gaW5jbHVkZSBtaW5vciB0eXBvcy5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuU2F2ZVN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHQvLyBzZWUgaWYgdGhlIEFQSSB0aGlua3Mgd2Ugd2VyZSBzdWNjZXNzZnVsXG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHQvLyByZWFsIHN1Y2Nlc3Ncblx0XHRcdFx0Ly8gZGVmYXVsdCBvbiBzdWNjZXNzIGFjdGlvbiAtIGRpc3BsYXkgbGluayBmb3IgZWRpdGVkIHBhZ2Vcblx0XHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybChjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0bGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhbJ+WujOaIkO+8iCcsIGxpbmssICfvvIknXSk7XG5cdFx0XHRcdGlmIChjdHgub25TYXZlU3VjY2Vzcykge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGVycm9ycyBoZXJlIGFyZSBvbmx5IGdlbmVyYXRlZCBieSBleHRlbnNpb25zIHdoaWNoIGhvb2sgQVBJRWRpdEJlZm9yZVNhdmUgd2l0aGluIE1lZGlhV2lraSxcblx0XHRcdC8vIHdoaWNoIGFzIG9mIDEuMzQuMC13bWYuMjMgKFNlcHQgMjAxOSkgc2hvdWxkIG9ubHkgZW5jb21wYXNzIGNhcHRjaGEgbWVzc2FnZXNcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNhcHRjaGEpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboOacjeWKoeWZqOimgeaxguaCqOi+k+WFpemqjOivgeeggeOAgicsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6DkvLrmnI3lmajopoHmsYLmgqjovLjlhaXpqZforYnnorzjgIInKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+S/neWtmOmhtemdouaXtueUsUFQSeW+l+WIsOacquefpemUmeivrycsICflhLLlrZjpoIHpnaLmmYLnlLFBUEnlvpfliLDmnKrnn6XpjK/oqqQnKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5TYXZlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguc2F2ZUFwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBlZGl0IGNvbmZsaWN0XG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnZWRpdGNvbmZsaWN0JyAmJiBjdHguY29uZmxpY3RSZXRyaWVzKysgPCBjdHgubWF4Q29uZmxpY3RSZXRyaWVzKSB7XG5cdFx0XHRcdC8vIGVkaXQgY29uZmxpY3RzIGNhbiBvY2N1ciB3aGVuIHRoZSBwYWdlIG5lZWRzIHRvIGJlIHB1cmdlZCBmcm9tIHRoZSBzZXJ2ZXIgY2FjaGVcblx0XHRcdFx0Y29uc3QgcHVyZ2VRdWVyeSA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdwdXJnZScsXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsIC8vIHJlZGlyZWN0cyBhcmUgYWxyZWFkeSByZXNvbHZlZFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGNvbnN0IHB1cmdlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzmraPlnKjmm7TmlrDmnI3liqHlmajnvJPlrZgnLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM5q2j5Zyo5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyksXG5cdFx0XHRcdFx0cHVyZ2VRdWVyeSxcblx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzph43or5Xkv67mlLknLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM6YeN6Kmm5L+u5pS5JykpO1xuXHRcdFx0XHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHRcdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7IC8vIG5lY2Vzc2FyaWx5IGFwcGVuZCwgcHJlcGVuZCwgb3IgbmV3U2VjdGlvbiwgc28gdGhpcyBzaG91bGQgd29yayBhcyBkZXNpcmVkXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdHgubG9hZEFwaS5wb3N0KCk7IC8vIHJlbG9hZCB0aGUgcGFnZSBhbmQgcmVhcHBseSB0aGUgZWRpdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnRcblx0XHRcdFx0KTtcblx0XHRcdFx0cHVyZ2VBcGkucG9zdCgpO1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgbmV0d29yayBvciBzZXJ2ZXIgZXJyb3Jcblx0XHRcdH0gZWxzZSBpZiAoKGVycm9yQ29kZSA9PT0gbnVsbCB8fCBlcnJvckNvZGUgPT09IHVuZGVmaW5lZCkgJiYgY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdC8vIHRoZSBlcnJvciBtaWdodCBiZSB0cmFuc2llbnQsIHNvIHRyeSBhZ2FpblxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdnVUxTKCfkv53lrZjlpLHotKXvvIzlnKgy56eS5ZCO6YeN6K+V4oCm4oCmJywgJ+WEsuWtmOWkseaVl++8jOWcqDLnp5Llvozph43oqabigKbigKYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Ly8gd2FpdCBmb3Igc29tZXRpbWUgZm9yIGNsaWVudCB0byByZWdhaW4gY29ubmVjdGl2aXR5XG5cdFx0XHRcdHNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguc2F2ZUFwaS5nZXRSZXNwb25zZSgpO1xuXHRcdFx0XHRjb25zdCBlcnJvckRhdGEgPVxuXHRcdFx0XHRcdHJlc3BvbnNlLmVycm9yIHx8XG5cdFx0XHRcdFx0Ly8gYmMgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3JzWzBdLmRhdGE7IC8vIGh0bWwvd2lraXRleHQvcGxhaW50ZXh0IGVycm9yIGZvcm1hdFxuXHRcdFx0XHRzd2l0Y2ggKGVycm9yQ29kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ3Byb3RlY3RlZHBhZ2UnOlxuXHRcdFx0XHRcdFx0Ly8gbm9uLWFkbWluIGF0dGVtcHRpbmcgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlIC0gdGhpcyBnaXZlcyBhIGZyaWVuZGxpZXIgbWVzc2FnZSB0aGFuIHRoZSBkZWZhdWx0XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577ya6aG16Z2i6KKr5L+d5oqkJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8mumggemdouiiq+S/neittycpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLWRpc2FsbG93ZWQnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdnVUxTKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yRGF0YS5hYnVzZWZpbHRlci5kZXNjcmlwdGlvbiArXG5cdFx0XHRcdFx0XHRcdFx0d2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd6Zi75q2i44CC6Iul5oKo6K6k5Li65oKo55qE6K+l5qyh57yW6L6R5piv5pyJ5oSP5LmJ55qE77yM6K+36IezIFFpdXdlbl90YWxrOueuoeeQhuWRmOWRiuekuuadvyDmj5DmiqXjgIInLFxuXHRcdFx0XHRcdFx0XHRcdFx0J+OAjemYu+atouOAguiLpeaCqOiqjeeCuuaCqOeahOipsuasoee3qOi8r+aYr+acieaEj+e+qeeahO+8jOiri+iHsyBRaXV3ZW5fdGFsazrnrqHnkIblk6HlkYrnpLrmnb8g5o+Q5aCx44CCJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci13YXJuaW5nJzpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFtcblx0XHRcdFx0XHRcdFx0d2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSxcblx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHR3Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn4oCd6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66K+l57yW6L6R77yM6K+35bCd6K+V6YeN5paw5o+Q5Lqk77yM5qC55o2u6L+H5ruk5Zmo55qE6K6+572u5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57yW6L6R44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn44CN6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66Kmy57eo6Lyv77yM6KuL5ZiX6Kmm6YeN5paw5o+Q5Lqk77yM5qC55pOa6YGO5r++5Zmo55qE6Kit5a6a5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57eo6Lyv44CCJ1xuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0XHQvLyBXZSBzaG91bGQgcHJvdmlkZSB0aGUgdXNlciB3aXRoIGEgd2F5IHRvIGF1dG9tYXRpY2FsbHkgcmV0cnkgdGhlIGFjdGlvbiBpZiB0aGV5IHNvIGNob29zZSAtXG5cdFx0XHRcdFx0XHQvLyBJIGNhbid0IHNlZSBob3cgdG8gZG8gdGhpcyB3aXRob3V0IGNyZWF0aW5nIGEgVUkgZGVwZW5kZW5jeSBvbiBNb3JlYml0cy53aWtpLnBhZ2UgdGhvdWdoIC0tIFRUT1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnc3BhbWJsYWNrbGlzdCc6IHtcblx0XHRcdFx0XHRcdC8vIElmIG11bHRpcGxlIGl0ZW1zIGFyZSBibGFja2xpc3RlZCwgd2Ugb25seSByZXR1cm4gdGhlIGZpcnN0XG5cdFx0XHRcdFx0XHRjb25zdCBbc3BhbV0gPSBlcnJvckRhdGEuc3BhbWJsYWNrbGlzdC5tYXRjaGVzO1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6BVUkwgJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboFVSTCAnKSArXG5cdFx0XHRcdFx0XHRcdFx0c3BhbSArXG5cdFx0XHRcdFx0XHRcdFx0d2dVTFMoJyDlnKjlnoPlnL7pk77mjqXpu5HlkI3ljZXkuK3jgIInLCAnIOWcqOWeg+WcvumAo+e1kOm7keWQjeWWruS4reOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577yaJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8micpICsgY3R4LnNhdmVBcGkuZ2V0RXJyb3JUZXh0KCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzVGV4dFJlZGlyZWN0ID0gKHRleHQpID0+IHtcblx0XHRcdGlmICghdGV4dCkge1xuXHRcdFx0XHQvLyBubyB0ZXh0IC0gY29udGVudCBlbXB0eSBvciBpbmFjY2Vzc2libGUgKHJldmRlbGxlZCBvciBzdXBwcmVzc2VkKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMubDEwbi5yZWRpcmVjdFRhZ0FsaWFzZXMuc29tZSgodGFnKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXHMqJHt0YWd9XFxcXFdgLCAnaScpLnRlc3QodGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9va3VwQ3JlYXRpb25BcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCBjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmV2ID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zICYmIHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9uc1swXTtcblx0XHRcdGlmICghcmV2KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdnVUxTKCfml6Dms5Xmib7liLAnLCAn54Sh5rOV5om+5YiwJykgKyBjdHgucGFnZU5hbWUgKyB3Z1VMUygn55qE5Lu75L2V5L+u6K6i54mI5pysJywgJ+eahOS7u+S9leS/ruiogueJiOacrCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIHx8ICFpc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnJ2bGltaXQgPSA1MDsgLy8gbW9kaWZ5IHByZXZpb3VzIHF1ZXJ5IHRvIGZldGNoIG1vcmUgcmV2aXNpb25zXG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeS50aXRsZXMgPSBjdHgucGFnZU5hbWU7IC8vIHVwZGF0ZSBwYWdlTmFtZSBpZiByZWRpcmVjdCByZXNvbHV0aW9uIHRvb2sgcGxhY2UgaW4gZWFybGllciBxdWVyeVxuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2dVTFMoJ+iOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSxcblx0XHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnksXG5cdFx0XHRcdFx0Zm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRjb25zdCByZXZzID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zO1xuXHRcdFx0Zm9yIChjb25zdCByZXYgb2YgcmV2cykge1xuXHRcdFx0XHRpZiAoIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0Ly8gZmFsbGJhY2sgdG8gZ2l2ZSBmaXJzdCByZXZpc2lvbiBhdXRob3IgaWYgbm8gbm9uLXJlZGlyZWN0IHZlcnNpb24gaW4gdGhlIGZpcnN0IDUwXG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2c1swXS51c2VyO1xuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2c1swXS50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGFjdGlvbiBtZXRob2RzLiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLFxuXHRcdCAqIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJlZmxpZ2h0Q2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlKSB7XG5cdFx0XHQvLyBpZiBhIG5vbi1hZG1pbiB0cmllcyB0byBkbyB0aGlzLCBkb24ndCBib3RoZXJcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgYWN0aW9uICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2dVTFMoJ+KAneaTjeS9nO+8muWPquacieeuoeeQhuWRmOWPr+S7pei/m+ihjOatpOaTjeS9nCcsICfjgI3mk43kvZzvvJrlj6rmnInnrqHnkIblk6Hlj6/ku6XpgLLooYzmraTmk43kvZwnKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKGBJbnRlcm5hbCBlcnJvcjogJHthY3Rpb259IHJlYXNvbiBub3Qgc2V0ICh1c2Ugc2V0RWRpdFN1bW1hcnkgZnVuY3Rpb24pIWApO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGZuUHJvY2VzcyBmdW5jdGlvbnMgKGBmblByb2Nlc3NEZWxldGVgLCBgZm5Qcm9jZXNzTW92ZWAsIGV0Yy5cblx0XHQgKiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLCBwcm90ZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2UgLSBUaGUgcmVzcG9uc2UgZG9jdW1lbnQgZnJvbSB0aGUgQVBJIGNhbGwuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5Qcm9jZXNzQ2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlLCByZXNwb25zZSkge1xuXHRcdFx0Y29uc3QgW3ttaXNzaW5nfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdC8vIE5vIHVuZGVsZXRlIGFzIGFuIGV4aXN0aW5nIHBhZ2UgY291bGQgaGF2ZSBkZWxldGVkIHJldmlzaW9uc1xuXHRcdFx0Y29uc3QgYWN0aW9uTWlzc2luZyA9IG1pc3NpbmcgJiYgWydkZWxldGUnLCAnbW92ZSddLmluY2x1ZGVzKGFjdGlvbik7XG5cdFx0XHRjb25zdCBwcm90ZWN0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmIG1pc3NpbmcgJiYgKGN0eC5wcm90ZWN0RWRpdCB8fCBjdHgucHJvdGVjdE1vdmUpO1xuXHRcdFx0Y29uc3Qgc2FsdE1pc3NpbmcgPSBhY3Rpb24gPT09ICdwcm90ZWN0JyAmJiAhbWlzc2luZyAmJiBjdHgucHJvdGVjdENyZWF0ZTtcblx0XHRcdGlmIChhY3Rpb25NaXNzaW5nIHx8IHByb3RlY3RNaXNzaW5nIHx8IHNhbHRNaXNzaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdGAke1xuXHRcdFx0XHRcdFx0d2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2dVTFMoJ+KAneaTjeS9nO+8jOWboOS4uumhtemdoicsICfjgI3mk43kvZzvvIzlm6DngrrpoIHpnaInKSArXG5cdFx0XHRcdFx0XHQobWlzc2luZyA/ICflt7LkuI0nIDogd2dVTFMoJ+W3sue7jycsICflt7LntpMnKSlcblx0XHRcdFx0XHR95a2Y5ZyoYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIERlbGV0ZSwgdW5kZWxldGUsIG1vdmVcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvXG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAndW5kZWxldGUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbi5maW5kTGFzdCgocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2NyZWF0ZScgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICdkZWxldGUnIHx8IGFjdGlvbiA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbi5maW5kTGFzdCgocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0ZWRpdHByb3QgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdHdnVUxTKCfmgqjljbPlsIblr7nlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH5bCN5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdChlZGl0cHJvdC5leHBpcnkgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHRcdFx0PyB3Z1VMUygn4oCd77yI5rC45LmF77yJJywgJ+OAje+8iOawuOS5he+8iScpXG5cdFx0XHRcdFx0XHRcdDogYCR7XG5cdFx0XHRcdFx0XHRcdFx0XHR3Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGVkaXRwcm90LmV4cGlyeSkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8iWApICtcblx0XHRcdFx0XHRcdHdnVUxTKCfigJ3ov5vooYzigJwnLCAn44CN6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdnVUxTKCfigJ3mk43kvZwnLCAn44CN5pON5L2cJykgK1xuXHRcdFx0XHRcdFx0d2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnu6fnu63mk43kvZzvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu6bue5pOK56K65a6a5Lul57m857qM5pON5L2c77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOaTjeS9nOOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTmk43kvZzjgIInKSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFyZXNwb25zZS50b2tlbnMuY3NyZnRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfml6Dms5Xojrflj5bku6TniYzjgIInLCAn54Sh5rOV5Y+W5b6X5qyK5p2W44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzTW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubW92ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdtb3ZlJyxcblx0XHRcdFx0ZnJvbTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0bzogY3R4Lm1vdmVEZXN0aW5hdGlvbixcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVUYWxrUGFnZSkge1xuXHRcdFx0XHRxdWVyeS5tb3ZldGFsayA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVN1YnBhZ2VzKSB7XG5cdFx0XHRcdHF1ZXJ5Lm1vdmVzdWJwYWdlcyA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVN1cHByZXNzUmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkubm9yZWRpcmVjdCA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2dVTFMoJ+enu+WKqOmhtemdouKApuKApicsICfnp7vli5XpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc1BhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXRyb2wnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBEaWRuJ3QgbmVlZCB0byBsb2FkIHRoZSBwYWdlXG5cdFx0XHRpZiAoY3R4LnJjaWQpIHtcblx0XHRcdFx0cXVlcnkucmNpZCA9IGN0eC5yY2lkO1xuXHRcdFx0XHRxdWVyeS50b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgncGF0cm9sVG9rZW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnBhdHJvbEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHQvLyBEb24ndCBwYXRyb2wgaWYgbm90IHVucGF0cm9sbGVkXG5cdFx0XHRcdGlmICghcmVzcG9uc2UucmVjZW50Y2hhbmdlc1swXS51bnBhdHJvbGxlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBbe2xhc3RyZXZpZH1dID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdGlmICghbGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnJldmlkID0gbGFzdHJldmlkO1xuXHRcdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGlmICghdG9rZW4pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdH1cblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXRyb2xTdGF0ID0gbmV3IE1vcmViaXRzLnN0YXR1cyh3Z1VMUygn5qCH6K6w6aG16Z2i5Li65bey5beh5p+lJywgJ+aomeiomOmggemdoueCuuW3suW3oeafpScpKTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKHdnVUxTKCflt6Hmn6XpobXpnaLigKbigKYnLCAn5beh5p+l6aCB6Z2i4oCm4oCmJyksIHF1ZXJ5LCBudWxsLCBwYXRyb2xTdGF0KTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc0RlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5kZWxldGVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2RlbGV0ZScsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdnVUxTKCfliKDpmaTpobXpnaLigKbigKYnLCAn5Yiq6Zmk6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25EZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJyAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnbWlzc2luZ3RpdGxlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5LiN6IO95Yig6Zmk6aG16Z2i77yM5Zug5YW25bey5LiN5a2Y5ZyoJywgJ+S4jeiDveWIqumZpOmggemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcpKTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3Z1VMUygn5peg5rOV5Yig6Zmk6aG16Z2i77yaJywgJ+eEoeazleWIqumZpOmggemdou+8micpICsgY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbigndW5kZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnVuZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCd1bmRlbGV0ZScsIGN0eC5vblVuZGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAndW5kZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdnVUxTKCfov5jljp/pobXpnaLigKbigKYnLCAn6YKE5Y6f6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gdW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHgudW5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIFwiRGF0YWJhc2UgcXVlcnkgZXJyb3JcIlxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2ludGVybmFsX2FwaV9lcnJvcl9EQlF1ZXJ5RXJyb3InKSB7XG5cdFx0XHRcdGlmIChjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdnVUxTKCfmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43or5UnLCAn6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN6KmmJykpO1xuXHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0d2dVTFMoJ+aMgee7reeahOaVsOaNruW6k+afpeivoumUmeivr++8jOmHjeaWsOWKoOi9vemhtemdouW5tumHjeivlScsICfmjIHnuoznmoTos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43mlrDovInlhaXpoIHpnaLkuKbph43oqaYnKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvckNvZGUgPT09ICdjYW50dW5kZWxldGUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdnVUxTKFxuXHRcdFx0XHRcdFx0J+aXoOazlei/mOWOn+WIoOmZpOmhtemdou+8jOWboOayoeacieeJiOacrOS+m+i/mOWOn+aIluW3suiiq+i/mOWOnycsXG5cdFx0XHRcdFx0XHQn54Sh5rOV6YKE5Y6f5Yiq6Zmk6aCB6Z2i77yM5Zug5rKS5pyJ54mI5pys5L6b6YKE5Y6f5oiW5bey6KKr6YKE5Y6fJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3Z1VMUygn5peg5rOV6L+Y5Y6f6aG16Z2i77yaJywgJ+eEoeazlemChOWOn+mggemdou+8micpICsgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc1Byb3RlY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5wcm90ZWN0QXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdGNvbnN0IHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdC8vIEZldGNoIGV4aXN0aW5nIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0XHRjb25zdCBwcnMgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uO1xuXHRcdFx0bGV0IGVkaXRwcm90O1xuXHRcdFx0bGV0IG1vdmVwcm90O1xuXHRcdFx0bGV0IGNyZWF0ZXByb3Q7XG5cdFx0XHRmb3IgKGNvbnN0IHByIG9mIHBycykge1xuXHRcdFx0XHQvLyBGaWx0ZXIgb3V0IHByb3RlY3Rpb24gZnJvbSBjYXNjYWRpbmdcblx0XHRcdFx0aWYgKHByLnR5cGUgPT09ICdlZGl0JyAmJiAhcHIuc291cmNlKSB7XG5cdFx0XHRcdFx0ZWRpdHByb3QgPSBwcjtcblx0XHRcdFx0fSBlbHNlIGlmIChwci50eXBlID09PSAnbW92ZScpIHtcblx0XHRcdFx0XHRtb3ZlcHJvdCA9IHByO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdjcmVhdGUnKSB7XG5cdFx0XHRcdFx0Y3JlYXRlcHJvdCA9IHByO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGYWxsIGJhY2sgdG8gY3VycmVudCBsZXZlbHMgaWYgbm90IGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0RWRpdCAmJiBlZGl0cHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdEVkaXQgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IGVkaXRwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogZWRpdHByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdE1vdmUgJiYgbW92ZXByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlID0ge1xuXHRcdFx0XHRcdGxldmVsOiBtb3ZlcHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IG1vdmVwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnByb3RlY3RDcmVhdGUgJiYgY3JlYXRlcHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0XHRsZXZlbDogY3JlYXRlcHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IGNyZWF0ZXByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVmYXVsdCB0byBwcmUtZXhpc3RpbmcgY2FzY2FkaW5nIHByb3RlY3Rpb24gaWYgdW5jaGFuZ2VkIChzaW1pbGFyIHRvIGFib3ZlKVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdENhc2NhZGUgPSAhIXBycy5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHByLmNhc2NhZGU7XG5cdFx0XHRcdH0pLmxlbmd0aDtcblx0XHRcdH1cblx0XHRcdC8vIFdhcm4gaWYgY2FzY2FkaW5nIHByb3RlY3Rpb24gYmVpbmcgYXBwbGllZCB3aXRoIGFuIGludmFsaWQgcHJvdGVjdGlvbiBsZXZlbCxcblx0XHRcdC8vIHdoaWNoIGZvciBlZGl0IHByb3RlY3Rpb24gd2lsbCBjYXVzZSBjYXNjYWRpbmcgdG8gYmUgc2lsZW50bHkgc3RyaXBwZWRcblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0Ly8gT24gbW92ZSBwcm90ZWN0aW9uLCB0aGlzIGlzIHRlY2huaWNhbGx5IHN0cmljdGVyIHRoYW4gdGhlIE1XIEFQSSxcblx0XHRcdFx0Ly8gYnV0IHNlZW1zIHJlYXNvbmFibGUgdG8gYXZvaWQgZHVtYiB2YWx1ZXMgYW5kIG1pc2xlYWRpbmcgbG9nIGVudHJpZXMgKFQyNjU2MjYpXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQoIWN0eC5wcm90ZWN0RWRpdCB8fFxuXHRcdFx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0LmxldmVsICE9PSAnc3lzb3AnIHx8XG5cdFx0XHRcdFx0XHQhY3R4LnByb3RlY3RNb3ZlIHx8XG5cdFx0XHRcdFx0XHRjdHgucHJvdGVjdE1vdmUubGV2ZWwgIT09ICdzeXNvcCcpICYmXG5cdFx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0XHR3Z1VMUygn5oKo5bey5a+54oCcJywgJ+aCqOW3suWwjeOAjCcpICtcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0d2dVTFMoJ+KAneWQr+eUqOS6hui/numUgeS/neaKpCcsICfjgI3llZ/nlKjkuobpgKPpjpbkv53orbcnKSArXG5cdFx0XHRcdFx0XHRcdHdnVUxTKCfvvIzkvYbmsqHmnInorr7nva7ku4XnrqHnkIblkZjnmoTkv53miqTnuqfliKvjgIJcXG5cXG4nLCAn77yM5L2G5rKS5pyJ6Kit5a6a5YOF566h55CG5ZOh55qE5L+d6K2357Sa5Yil44CCXFxuXFxuJykgK1xuXHRcdFx0XHRcdFx0XHR3Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn5Y2V5Ye756Gu6K6k5Lul6Ieq5Yqo6LCD5pW05bm257un57ut6L+e6ZSB5YWo5L+d5oqk77yM5Y2V5Ye75Y+W5raI5Lul6Lez6L+H5q2k5pON5L2cJyxcblx0XHRcdFx0XHRcdFx0XHQn6bue5pOK56K66KqN5Lul6Ieq5YuV6Kq/5pW05Lim57m857qM6YCj6Y6W5YWo5L+d6K2377yM6bue5pOK5Y+W5raI5Lul6Lez6YGO5q2k5pON5L2cJ1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn6L+e6ZSB5L+d5oqk5bey5Y+W5raI44CCJywgJ+mAo+mOluS/neitt+W3suWPlua2iOOAgicpKTtcblx0XHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0LmxldmVsID0gJ3N5c29wJztcblx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlLmxldmVsID0gJ3N5c29wJztcblx0XHRcdH1cblx0XHRcdC8vIEJ1aWxkIHByb3RlY3Rpb24gbGV2ZWxzIGFuZCBleHBpcnlzIChleHBpcmllcz8pIGZvciBxdWVyeVxuXHRcdFx0Y29uc3QgcHJvdGVjdGlvbnMgPSBbXTtcblx0XHRcdGNvbnN0IGV4cGlyeXMgPSBbXTtcblx0XHRcdGlmIChjdHgucHJvdGVjdEVkaXQpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBlZGl0PSR7Y3R4LnByb3RlY3RFZGl0LmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RFZGl0LmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdE1vdmUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBtb3ZlPSR7Y3R4LnByb3RlY3RNb3ZlLmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RNb3ZlLmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYGNyZWF0ZT0ke2N0eC5wcm90ZWN0Q3JlYXRlLmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RDcmVhdGUuZXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3Byb3RlY3QnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cHJvdGVjdGlvbnM6IHByb3RlY3Rpb25zLmpvaW4oJ3wnKSxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnlzLmpvaW4oJ3wnKSxcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSBzaG93cyB1cCBpbiBsb2dzLCBub3QgcGFnZSBoaXN0b3J5XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSkge1xuXHRcdFx0XHRxdWVyeS5jYXNjYWRlID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3Z1VMUygn5L+d5oqk6aG16Z2i4oCm4oCmJywgJ+S/neitt+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdFN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgc2xlZXAgPSAobWlsbGlzZWNvbmRzKSA9PiB7XG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRcdHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSwgbWlsbGlzZWNvbmRzKTtcblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9O1xuXHR9OyAvLyBlbmQgTW9yZWJpdHMud2lraS5wYWdlXG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wcmV2aWV3ICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFVzZSB0aGUgQVBJIHRvIHBhcnNlIGEgZnJhZ21lbnQgb2Ygd2lraXRleHQgYW5kIHJlbmRlciBpdCBhcyBIVE1MLlxuXHQgKlxuXHQgKiBUaGUgc3VnZ2VzdGVkIGltcGxlbWVudGF0aW9uIHBhdHRlcm4gKGluIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IGFuZFxuXHQgKiB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSBzaXR1YXRpb25zKSBpcyB0byBjb25zdHJ1Y3QgYVxuXHQgKiBgTW9yZWJpdHMud2lraS5wcmV2aWV3YCBvYmplY3QgYWZ0ZXIgcmVuZGVyaW5nIGEgYE1vcmViaXRzLnF1aWNrRm9ybWAsIGFuZFxuXHQgKiBiaW5kIHRoZSBvYmplY3QgdG8gYW4gYXJiaXRyYXJ5IHByb3BlcnR5IG9mIHRoZSBmb3JtIChlLmcuIHxwcmV2aWV3ZXJ8KS5cblx0ICogRm9yIGFuIGV4YW1wbGUsIHNlZSB0d2lua2xld2Fybi5qcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdib3ggLSBUaGUgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgcmVuZGVyZWQgSFRNTCxcblx0ICogdXN1YWxseSBhIDxkaXY+IGVsZW1lbnQuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLnByZXZpZXcgPSBmdW5jdGlvbiAocHJldmlld2JveCkge1xuXHRcdHRoaXMucHJldmlld2JveCA9IHByZXZpZXdib3g7XG5cdFx0JChwcmV2aWV3Ym94KS5hZGRDbGFzcygnbW9yZWJpdHMtcHJldmlld2JveCcpLmhpZGUoKTtcblx0XHQvKipcblx0XHQgKiBEaXNwbGF5cyB0aGUgcHJldmlldyBib3gsIGFuZCBiZWdpbnMgYW4gYXN5bmNocm9ub3VzIGF0dGVtcHRcblx0XHQgKiB0byByZW5kZXIgdGhlIHNwZWNpZmllZCB3aWtpdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dCAtIFdpa2l0ZXh0IHRvIHJlbmRlcjsgbW9zdCB0aGluZ3Mgc2hvdWxkIHdvcmssIGluY2x1ZGluZyBgc3Vic3Q6YCBhbmQgYH5+fn5gLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbcGFnZVRpdGxlXSAtIE9wdGlvbmFsIHBhcmFtZXRlciBmb3IgdGhlIHBhZ2UgdGhpcyBzaG91bGQgYmUgcmVuZGVyZWQgYXMgYmVpbmcgb24sIGlmIG9taXR0ZWQgaXQgaXMgdGFrZW4gYXMgdGhlIGN1cnJlbnQgcGFnZS5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3NlY3Rpb25UaXRsZV0gLSBJZiBwcm92aWRlZCwgcmVuZGVyIHRoZSB0ZXh0IGFzIGEgbmV3IHNlY3Rpb24gdXNpbmcgdGhpcyBhcyB0aGUgdGl0bGUuXG5cdFx0ICogQHJldHVybnMge2pRdWVyeS5wcm9taXNlfVxuXHRcdCAqL1xuXHRcdHRoaXMuYmVnaW5SZW5kZXIgPSAod2lraXRleHQsIHBhZ2VUaXRsZSwgc2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLnNob3coKTtcblx0XHRcdGNvbnN0IHN0YXR1c3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwcmV2aWV3Ym94LmFwcGVuZENoaWxkKHN0YXR1c3NwYW4pO1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmluaXQoc3RhdHVzc3Bhbik7XG5cdFx0XHQvLyDoi6XpobXpnaLkuI3mmK93aWtpdGV4dO+8iOS+i+WmgkpT44CBQ1NT562J77yJ77yM6YKj5LmI5om+5LiA5Liqd2lraXRleHTpobXpnaLmnaXpooTop4jjgIJcblx0XHRcdGxldCBwYWdlTmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0Jykge1xuXHRcdFx0XHRwYWdlTmFtZSA9IGBEcmFmdDoke3BhZ2VOYW1lfWA7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiBbJ3RleHQnLCAnbW9kdWxlcyddLFxuXHRcdFx0XHRwc3Q6IHRydWUsXG5cdFx0XHRcdC8vIFBTVCA9IHByZS1zYXZlIHRyYW5zZm9ybTsgdGhpcyBtYWtlcyBzdWJzdGl0dXRpb24gd29yayBwcm9wZXJseVxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSB8fCBwYWdlTmFtZSxcblx0XHRcdFx0ZGlzYWJsZWxpbWl0cmVwb3J0OiB0cnVlLFxuXHRcdFx0XHRkaXNhYmxlZWRpdHNlY3Rpb246IHRydWUsXG5cdFx0XHRcdHVzZWxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0XHRcdC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoc2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSAnbmV3Jztcblx0XHRcdFx0cXVlcnkuc2VjdGlvbnRpdGxlID0gc2VjdGlvblRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVuZGVyQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3Z1VMUygn5Yqg6L295Lit4oCm4oCmJywgJ+i8ieWFpeS4reKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5SZW5kZXJTdWNjZXNzLFxuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKHdnVUxTKCfpooTop4gnLCAn6aCQ6Ka9JykpXG5cdFx0XHQpO1xuXHRcdFx0cmVuZGVyQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUmVuZGVyU3VjY2VzcyA9IChhcGlvYmopID0+IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXBpb2JqLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRjb25zdCBodG1sID0gcmVzcG9uc2UucGFyc2UudGV4dDtcblx0XHRcdGlmICghaHRtbCkge1xuXHRcdFx0XHRhcGlvYmouc3RhdGVsZW0uZXJyb3Iod2dVTFMoJ+WKoOi9vemihOiniOWksei0pe+8jOaIluaooeadv+S4uuepuicsICfovInlhaXpoJDopr3lpLHmlZfvvIzmiJbmqKHmnb/ngrrnqbonKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByZXZpZXdib3guaW5uZXJIVE1MID0gaHRtbDtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXN0eWxlcyk7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzKTtcblx0XHRcdC8vIHRoaXMgbWFrZXMgbGlua3Mgb3BlbiBpbiBuZXcgdGFiXG5cdFx0XHQkKHByZXZpZXdib3gpLmZpbmQoJ2EnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJykuYXR0cigncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHR9O1xuXHRcdC8qKiBIaWRlcyB0aGUgcHJldmlldyBib3ggYW5kIGNsZWFycyBpdC4gKi9cblx0XHR0aGlzLmNsb3NlUHJldmlldyA9ICgpID0+IHtcblx0XHRcdCQocHJldmlld2JveCkuZW1wdHkoKS5oaWRlKCk7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpdGV4dCAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBXaWtpdGV4dCBtYW5pcHVsYXRpb24uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraXRleHRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dCA9IHt9O1xuXHQvKipcblx0ICogR2V0IHRoZSB2YWx1ZSBvZiBldmVyeSBwYXJhbWV0ZXIgZm91bmQgaW4gdGhlIHdpa2l0ZXh0IG9mIGEgZ2l2ZW4gdGVtcGxhdGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IGNvbnRhaW5pbmcgYSB0ZW1wbGF0ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSAtIEluZGV4IG5vdGluZyB3aGVyZSBpbiB0aGUgdGV4dCB0aGUgdGVtcGxhdGUgYmVnaW5zLlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBge25hbWU6IHRlbXBsYXRlTmFtZSwgcGFyYW1ldGVyczoge2tleTogdmFsdWV9fWAuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYXJzZVRlbXBsYXRlID0gKHRleHQsIHN0YXJ0KSA9PiB7XG5cdFx0c3RhcnQgfHw9IDA7XG5cdFx0Y29uc3QgbGV2ZWwgPSBbXTsgLy8gVHJhY2sgb2YgaG93IGRlZXAgd2UgYXJlICh7eywge3t7LCBvciBbWylcblx0XHRsZXQgY291bnQgPSAtMTsgLy8gTnVtYmVyIG9mIHBhcmFtZXRlcnMgZm91bmRcblx0XHRsZXQgdW5uYW1lZCA9IDA7IC8vIEtlZXAgdHJhY2sgb2Ygd2hhdCBudW1iZXIgYW4gdW5uYW1lZCBwYXJhbWV0ZXIgc2hvdWxkIHJlY2VpdmVcblx0XHRsZXQgZXF1YWxzID0gLTE7IC8vIEFmdGVyIGZpbmRpbmcgXCI9XCIgYmVmb3JlIGEgcGFyYW1ldGVyLCB0aGUgaW5kZXg7IG90aGVyd2lzZSwgLTFcblx0XHRsZXQgY3VycmVudCA9ICcnO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0cGFyYW1ldGVyczoge30sXG5cdFx0fTtcblx0XHRsZXQga2V5O1xuXHRcdGxldCB2YWx1ZTtcblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiB0byBoYW5kbGUgZmluZGluZyBwYXJhbWV0ZXIgdmFsdWVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZmluYWw9ZmFsc2VdIC0gV2hldGhlciB0aGlzIGlzIHRoZSBmaW5hbFxuXHRcdCAqIHBhcmFtZXRlciBhbmQgd2UgbmVlZCB0byByZW1vdmUgdGhlIHRyYWlsaW5nIGB9fWAuXG5cdFx0ICovXG5cdFx0Y29uc3QgZmluZFBhcmFtID0gKGZpbmFsKSA9PiB7XG5cdFx0XHQvLyBOb3RoaW5nIGZvdW5kIHlldCwgdGhpcyBtdXN0IGJlIHRoZSB0ZW1wbGF0ZSBuYW1lXG5cdFx0XHRpZiAoY291bnQgPT09IC0xKSB7XG5cdFx0XHRcdHJlc3VsdC5uYW1lID0gY3VycmVudC5zbGljZSgyKS50cmltKCk7XG5cdFx0XHRcdCsrY291bnQ7XG5cdFx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEpIHtcblx0XHRcdFx0Ly8gSW4gYSBwYXJhbWV0ZXJcblx0XHRcdFx0Ly8gTm8gZXF1YWxzLCBzbyBpdCBtdXN0IGJlIHVubmFtZWQ7IG5vIHRyaW0gc2luY2Ugd2hpdGVzcGFjZSBhbGxvd2VkXG5cdFx0XHRcdGNvbnN0IHBhcmFtID0gZmluYWwgPyBjdXJyZW50LnNsaWNlKGVxdWFscyArIDEsIC0yKSA6IGN1cnJlbnQ7XG5cdFx0XHRcdGlmIChwYXJhbSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzWysrdW5uYW1lZF0gPSBwYXJhbTtcblx0XHRcdFx0XHQrK2NvdW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBXZSBmb3VuZCBhbiBlcXVhbHMsIHNvIHNhdmUgdGhlIHBhcmFtZXRlciBhcyBrZXk6IHZhbHVlXG5cdFx0XHRcdGtleSA9IGN1cnJlbnQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgZXF1YWxzKSkudHJpbSgpO1xuXHRcdFx0XHR2YWx1ZSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikudHJpbSgpIDogY3VycmVudC5zbGljZShNYXRoLm1heCgwLCBlcXVhbHMgKyAxKSkudHJpbSgpO1xuXHRcdFx0XHRyZXN1bHQucGFyYW1ldGVyc1trZXldID0gdmFsdWU7XG5cdFx0XHRcdGVxdWFscyA9IC0xO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgdGV4dC5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3QgdGVzdDMgPSB0ZXh0LnNsaWNlKGksIGkgKyAzKTtcblx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycgfHwgKHRlc3QzID09PSAnfX19JyAmJiBsZXZlbC5hdCgtMSkgPT09IDMpKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDM7XG5cdFx0XHRcdGkgKz0gMjtcblx0XHRcdFx0aWYgKHRlc3QzID09PSAne3t7Jykge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdGVzdDIgPSB0ZXh0LnNsaWNlKGksIGkgKyAyKTtcblx0XHRcdC8vIEVudGVyaW5nIGEgdGVtcGxhdGUgKG9yIGxpbmspXG5cdFx0XHRpZiAodGVzdDIgPT09ICd7eycgfHwgdGVzdDIgPT09ICdbWycpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd7eycpIHtcblx0XHRcdFx0XHRsZXZlbFtsZXZlbC5sZW5ndGhdID0gMjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXZlbFtsZXZlbC5sZW5ndGhdID0gJ3dsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEVpdGhlciBsZWF2aW5nIGEgbGluayBvciB0ZW1wbGF0ZS9wYXJzZXIgZnVuY3Rpb25cblx0XHRcdGlmICgodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwuYXQoLTEpID09PSAyKSB8fCAodGVzdDIgPT09ICddXScgJiYgbGV2ZWwuYXQoLTEpID09PSAnd2wnKSkge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBmaW5hbCBwYXJhbWV0ZXIgaWYgdGhpcyByZWFsbHkgaXMgdGhlIGVuZFxuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZmluZFBhcmFtKHRydWUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHQuY2hhckF0KGkpID09PSAnfCcgJiYgbGV2ZWwubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIEFub3RoZXIgcGlwZSBmb3VuZCwgdG9wbGV2ZWwsIHNvIHBhcmFtZXRlciBjb21pbmcgdXAhXG5cdFx0XHRcdGZpbmRQYXJhbSgpO1xuXHRcdFx0XHRjdXJyZW50ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEgJiYgdGV4dC5jaGFyQXQoaSkgPT09ICc9JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gRXF1YWxzIGZvdW5kLCB0b3BsZXZlbFxuXHRcdFx0XHRlcXVhbHMgPSBjdXJyZW50Lmxlbmd0aDtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEp1c3QgYWR2YW5jZSB0aGUgcG9zaXRpb25cblx0XHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIEFkanVzdCBhbmQgbWFuaXB1bGF0ZSB0aGUgd2lraXRleHQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAY2xhc3Ncblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgdG8gYmUgbWFuaXB1bGF0ZWQuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYWdlID0gZnVuY3Rpb24gKHRleHQpIHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9O1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYWdlLnByb3RvdHlwZSA9IHtcblx0XHR0ZXh0OiAnJyxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGxpbmtzIHRvIGBsaW5rX3RhcmdldGAgZnJvbSB0aGUgcGFnZSB0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxpbmtUYXJnZXRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRyZW1vdmVMaW5rKGxpbmtUYXJnZXQpIHtcblx0XHRcdGNvbnN0IG13VGl0bGUgPSBtdy5UaXRsZS5uZXdGcm9tVGV4dChsaW5rVGFyZ2V0KTtcblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlEID0gbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBtd1RpdGxlLmdldE1haW5UZXh0KCk7XG5cdFx0XHRsZXQgbGlua1JlZ2V4U3RyaW5nID0gJyc7XG5cdFx0XHRpZiAobmFtZXNwYWNlSUQgIT09IDApIHtcblx0XHRcdFx0bGlua1JlZ2V4U3RyaW5nID0gYCR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgobmFtZXNwYWNlSUQpfTpgO1xuXHRcdFx0fVxuXHRcdFx0bGlua1JlZ2V4U3RyaW5nICs9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGl0bGUpO1xuXHRcdFx0Ly8gRm9yIG1vc3QgbmFtZXNwYWNlcywgdW5saW5rIGJvdGggW1tVc2VyOlRlc3RdXSBhbmQgW1s6VXNlcjpUZXN0XV1cblx0XHRcdC8vIEZvciBmaWxlcyBhbmQgY2F0ZWdvcmllcywgb25seSB1bmxpbmsgW1s6Q2F0ZWdvcnk6VGVzdF1dLiBEbyBub3QgdW5saW5rIFtbQ2F0ZWdvcnk6VGVzdF1dXG5cdFx0XHRjb25zdCBpc0ZpbGVPckNhdGVnb3J5ID0gWzYsIDE0XS5pbmNsdWRlcyhuYW1lc3BhY2VJRCk7XG5cdFx0XHRjb25zdCBjb2xvbiA9IGlzRmlsZU9yQ2F0ZWdvcnkgPyAnOicgOiAnOj8nO1xuXHRcdFx0Y29uc3Qgc2ltcGxlTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259KCR7bGlua1JlZ2V4U3RyaW5nfSlcXFxcXVxcXFxdYCwgJ2cnKTtcblx0XHRcdGNvbnN0IHBpcGVkTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259JHtsaW5rUmVnZXhTdHJpbmd9XFxcXHwoLis/KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2Uoc2ltcGxlTGlua1JlZ2V4LCAnJDEnKS5yZXBsYWNlKHBpcGVkTGlua1JlZ2V4LCAnJDEnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29tbWVudHMgb3V0IGltYWdlcyBmcm9tIHBhZ2UgdGV4dDsgaWYgdXNlZCBpbiBhIGdhbGxlcnksIGRlbGV0ZXMgdGhlIHdob2xlIGxpbmUuXG5cdFx0ICogSWYgdXNlZCBhcyBhIHRlbXBsYXRlIGFyZ3VtZW50IChub3QgbmVjZXNzYXJpbHkgd2l0aCBgRmlsZTpgIHByZWZpeCksIHRoZSB0ZW1wbGF0ZSBwYXJhbWV0ZXIgaXMgY29tbWVudGVkIG91dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBgRmlsZTpgIHByZWZpeC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbl0gLSBSZWFzb24gdG8gYmUgaW5jbHVkZWQgaW4gY29tbWVudCwgYWxvbmdzaWRlIHRoZSBjb21tZW50ZWQtb3V0IGltYWdlLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGNvbW1lbnRPdXRJbWFnZShpbWFnZSwgcmVhc29uKSB7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZSgvLS0hPi9nLCAnLS0+Jyk7XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0aGlzLnRleHQpO1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0cmVhc29uID0gcmVhc29uID8gYCR7cmVhc29ufTogYCA6ICcnO1xuXHRcdFx0Y29uc3QgaW1hZ2VSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoaW1hZ2UpO1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIG5vcm1hbCBpbWFnZSBsaW5rcywgaS5lLiBbW0ZpbGU6Rm9vYmFyLnBuZ3wuLi5dXVxuXHRcdFx0Ly8gV2lsbCBlYXQgdGhlIHdob2xlIGxpbmtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcXVxcXFxdKV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh1bmJpbmRlci5jb250ZW50LCAnW1snLCAnXV0nKTtcblx0XHRcdGZvciAoY29uc3QgYWxsTGluayBvZiBhbGxMaW5rcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KGFsbExpbmspKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBgPCEtLSAke3JlYXNvbn0ke2FsbExpbmt9IC0tPmA7XG5cdFx0XHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShhbGxMaW5rLCByZXBsYWNlbWVudCk7XG5cdFx0XHRcdFx0Ly8gdW5iaW5kIHRoZSBuZXdseSBjcmVhdGVkIGNvbW1lbnRzXG5cdFx0XHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBDaGVjayBmb3IgZ2FsbGVyeSBpbWFnZXMsIGkuZS4gaW5zdGFuY2VzIHRoYXQgbXVzdCBzdGFydCBvbiBhIG5ldyBsaW5lLFxuXHRcdFx0Ly8gZXZlbnR1YWxseSBwcmVjZWRlZCB3aXRoIHNvbWUgc3BhY2UsIGFuZCBtdXN0IGluY2x1ZGUgRmlsZTogcHJlZml4XG5cdFx0XHQvLyBXaWxsIGVhdCB0aGUgd2hvbGUgbGluZS5cblx0XHRcdGNvbnN0IGdhbGxlcnlJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YCheXFxcXHMqJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKig/OlxcXFx8Lio/JHwkKSlgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShnYWxsZXJ5SW1hZ2VSZWdleCwgYDwhLS0gJHtyZWFzb259JDEgLS0+YCk7XG5cdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdC8vIENoZWNrIGZyZWUgaW1hZ2UgdXNhZ2VzLCBmb3IgZXhhbXBsZSBhcyB0ZW1wbGF0ZSBhcmd1bWVudHMsIG1pZ2h0IGhhdmUgdGhlIEZpbGU6IHByZWZpeCBleGNsdWRlZCwgYnV0IG11c3QgYmUgcHJlY2VkZWQgYnkgYW4gfFxuXHRcdFx0Ly8gV2lsbCBvbmx5IGVhdCB0aGUgaW1hZ2UgbmFtZSBhbmQgdGhlIHByZWNlZGluZyBiYXIgYW5kIGFuIGV2ZW50dWFsIG5hbWVkIHBhcmFtZXRlclxuXHRcdFx0Y29uc3QgZnJlZUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgKFxcXFx8XFxcXHMqKD86W1xcXFx3XFxcXHNdK1xcXFw9KT9cXFxccyooPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyopPyR7aW1hZ2VSZWdleFN0cmluZ30pYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZnJlZUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdFx0Ly8gUmViaW5kIHRoZSBjb250ZW50IG5vdywgd2UgYXJlIGRvbmUhXG5cdFx0XHR0aGlzLnRleHQgPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgdXNlcyBvZiBbW0ZpbGU6YGltYWdlYF1dIHRvIFtbRmlsZTpgaW1hZ2VgfGBkYXRhYF1dLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgbmFtZSB3aXRob3V0IEZpbGU6IHByZWZpeC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAtIFRoZSBkaXNwbGF5IG9wdGlvbnMuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0YWRkVG9JbWFnZUNvbW1lbnQoaW1hZ2UsIGRhdGEpIHtcblx0XHRcdGNvbnN0IGltYWdlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGltYWdlKTtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcXVxcXFxdKV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICdbWycsICddXScpO1xuXHRcdFx0Zm9yIChsZXQgcmVwbGFjZW1lbnQgb2YgYWxsTGlua3MpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChyZXBsYWNlbWVudCkpIHtcblx0XHRcdFx0XHQvLyBqdXN0IHB1dCBpdCBhdCB0aGUgZW5kP1xuXHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQucmVwbGFjZSgvXFxdXFxdJC8sIGB8JHtkYXRhfV1dYCk7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UocmVwbGFjZW1lbnQsIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZ2FsbGVyeVJlZ2V4ID0gbmV3IFJlZ0V4cChgXihcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9Lio/KVxcXFx8PyguKj8pJGAsICdtZycpO1xuXHRcdFx0Y29uc3QgbmV3dGV4dCA9IGAkMXwkMiAke2RhdGF9YDtcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGdhbGxlcnlSZWdleCwgbmV3dGV4dCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbGwgdHJhbnNjbHVzaW9ucyBvZiBhIHRlbXBsYXRlIGZyb20gcGFnZSB0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gUGFnZSBuYW1lIHdob3NlIHRyYW5zY2x1c2lvbnMgYXJlIHRvIGJlIHJlbW92ZWQsXG5cdFx0ICogaW5jbHVkZSBuYW1lc3BhY2UgcHJlZml4IG9ubHkgaWYgbm90IGluIHRlbXBsYXRlIG5hbWVzcGFjZS5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRyZW1vdmVUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGVtcGxhdGUpO1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7KD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCgxMCl9Oik/XFxcXHMqJHt0ZW1wbGF0ZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFx9XFxcXH0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxUZW1wbGF0ZXMgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICd7eycsICd9fScsIFsne3t7JywgJ319fSddKTtcblx0XHRcdGZvciAoY29uc3QgYWxsVGVtcGxhdGUgb2YgYWxsVGVtcGxhdGVzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsVGVtcGxhdGUpKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoYWxsVGVtcGxhdGUsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTbWFydGx5IGluc2VydCBhIHRhZyBhdG9wIHBhZ2UgdGV4dCBidXQgYWZ0ZXIgc3BlY2lmaWVkIHRlbXBsYXRlcyxcblx0XHQgKiBzdWNoIGFzIGhhdG5vdGVzLCBzaG9ydCBkZXNjcmlwdGlvbiwgb3IgZGVsZXRpb24gYW5kIHByb3RlY3Rpb24gdGVtcGxhdGVzLlxuXHRcdCAqIE5vdGFibHksIGRvZXMgKm5vdCogaW5zZXJ0IGEgbmV3bGluZSBhZnRlciB0aGUgdGFnLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSB0YWcgdG8gYmUgaW5zZXJ0ZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHJlZ2V4IC0gVGVtcGxhdGVzIGFmdGVyIHdoaWNoIHRvIGluc2VydCB0YWcsXG5cdFx0ICogZ2l2ZW4gYXMgZWl0aGVyIGFzIGEgKHJlZ2V4LXZhbGlkKSBzdHJpbmcgb3IgYW4gYXJyYXkgdG8gYmUgam9pbmVkIGJ5IHBpcGVzLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZmxhZ3M9aV0gLSBSZWdleCBmbGFncyB0byBhcHBseS4gIGAnJ2AgdG8gcHJvdmlkZSBubyBmbGFncztcblx0XHQgKiBvdGhlciBmYWxzZXkgdmFsdWVzIHdpbGwgZGVmYXVsdCB0byBgaWAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtwcmVSZWdleF0gLSBPcHRpb25hbCByZWdleCBzdHJpbmcgb3IgYXJyYXkgdG8gbWF0Y2hcblx0XHQgKiBiZWZvcmUgYW55IHRlbXBsYXRlIG1hdGNoZXMgKGkuZS4gYmVmb3JlIGB7e2ApLCBzdWNoIGFzIGh0bWwgY29tbWVudHMuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0aW5zZXJ0QWZ0ZXJUZW1wbGF0ZXModGFnLCByZWdleCwgZmxhZ3MsIHByZVJlZ2V4KSB7XG5cdFx0XHRpZiAodGFnID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gdGFnIHByb3ZpZGVkJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyAubGVuZ3RoIGlzIG9ubHkgYSBwcm9wZXJ0eSBvZiBzdHJpbmdzIGFuZCBhcnJheXMgc28gd2Vcblx0XHRcdC8vIHNob3VsZG4ndCBuZWVkIHRvIGNoZWNrIHR5cGVcblx0XHRcdGlmIChyZWdleCA9PT0gdW5kZWZpbmVkIHx8ICFyZWdleC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdObyByZWdleCBwcm92aWRlZCcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlZ2V4KSkge1xuXHRcdFx0XHRyZWdleCA9IHJlZ2V4LmpvaW4oJ3wnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgZmxhZ3MgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZsYWdzID0gJ2knO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFwcmVSZWdleCB8fCAhcHJlUmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRcdHByZVJlZ2V4ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJlUmVnZXgpKSB7XG5cdFx0XHRcdHByZVJlZ2V4ID0gcHJlUmVnZXguam9pbignfCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVnZXggaXMgZXh0cmEgY29tcGxpY2F0ZWQgdG8gYWxsb3cgZm9yIHRlbXBsYXRlcyB3aXRoXG5cdFx0XHQvLyBwYXJhbWV0ZXJzIGFuZCB0byBoYW5kbGUgd2hpdGVzcGFjZSBwcm9wZXJseVxuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0Ly8gbGVhZGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0Ly8gY2FwdHVyZSB0ZW1wbGF0ZShzKVxuXHRcdFx0XHRcdC8vIFByZS10ZW1wbGF0ZSByZWdleCwgc3VjaCBhcyBsZWFkaW5nIGh0bWwgY29tbWVudHNcblx0XHRcdFx0XHQvLyBiZWdpbiB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdC8vIGVuZCBtYWluIHRlbXBsYXRlIG5hbWUsIG9wdGlvbmFsbHkgd2l0aCBhIG51bWJlclxuXHRcdFx0XHRcdC8vIFByb2JhYmx5IHJlbW92ZSB0aGUgKD86KSB0aG91Z2hcblx0XHRcdFx0XHQvLyB0ZW1wbGF0ZSBwYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Ly8gZW5kIHRlbXBsYXRlIGZvcm1hdFxuXHRcdFx0XHRcdC8vIGVuZCBjYXB0dXJlXG5cdFx0XHRcdFx0Ly8gdHJhaWxpbmcgd2hpdGVzcGFjZVxuXHRcdFx0XHRcdGBeXFxcXHMqKD86KCg/OlxcXFxzKiR7XG5cdFx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0XHRwcmVSZWdleFxuXHRcdFx0XHRcdH18XFxcXHtcXFxce1xcXFxzKig/OiR7XG5cdFx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdFx0cmVnZXhcblx0XHRcdFx0XHR9KVxcXFxkKlxcXFxzKihcXFxcfCg/OlxcXFx7XFxcXHtbXnt9XSpcXFxcfVxcXFx9fFtee31dKSopP1xcXFx9XFxcXH0pKyg/OlxcXFxzKlxcXFxuKT8pXFxcXHMqKT9gLFxuXHRcdFx0XHRcdGZsYWdzXG5cdFx0XHRcdCksXG5cdFx0XHRcdGAkMSR7dGFnfWBcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCB0aGUgbWFuaXB1bGF0ZWQgd2lraXRleHQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGdldFRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXh0O1xuXHRcdH0sXG5cdH07XG5cdC8qICoqKioqKioqKioqIE1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciAqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEhhbmRsZXMgbG9nZ2luZyBhY3Rpb25zIHRvIGEgdXNlcnNwYWNlIGxvZy5cblx0ICogVXNlZCBpbiBDU0QsIFBST0QsIGFuZCBYRkQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1BhZ2VOYW1lIC0gVGl0bGUgb2YgdGhlIHN1YnBhZ2Ugb2YgdGhlIGN1cnJlbnQgdXNlcidzIGxvZy5cblx0ICovXG5cdE1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciA9IGZ1bmN0aW9uIChsb2dQYWdlTmFtZSkge1xuXHRcdGlmICghbG9nUGFnZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbm8gbG9nIHBhZ2UgbmFtZSBzcGVjaWZpZWQnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogVGhlIHRleHQgdG8gcHJlZml4IHRoZSBsb2cgd2l0aCB1cG9uIGNyZWF0aW9uLCBkZWZhdWx0cyB0byBlbXB0eS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5pbml0aWFsVGV4dCA9ICcnO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBoZWFkZXIgbGV2ZWwgdG8gdXNlIGZvciBtb250aHMsIGRlZmF1bHRzIHRvIDMgKGA9PT1gKS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5oZWFkZXJMZXZlbCA9IDM7XG5cdFx0dGhpcy5jaGFuZ2VUYWdzID0gJyc7XG5cdFx0LyoqXG5cdFx0ICogTG9nIHRoZSBlbnRyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2dUZXh0IC0gRG9lc24ndCBpbmNsdWRlIGxlYWRpbmcgYCNgIG9yIGAqYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVRleHQgLSBFZGl0IHN1bW1hcnkuXG5cdFx0ICogQHJldHVybnMge0pRdWVyeS5Qcm9taXNlfVxuXHRcdCAqL1xuXHRcdHRoaXMubG9nID0gZnVuY3Rpb24gKGxvZ1RleHQsIHN1bW1hcnlUZXh0KSB7XG5cdFx0XHRjb25zdCBkZWYgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRpZiAoIWxvZ1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIGRlZi5yZWplY3QoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZ2UgPSBuZXcgTW9yZWJpdHMud2lraS5wYWdlKFxuXHRcdFx0XHRgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vJHtsb2dQYWdlTmFtZX1gLFxuXHRcdFx0XHR3Z1VMUygn5bCG6aG555uu5Yqg5YWl5Yiw55So5oi356m66Ze05pel5b+XJywgJ+Wwh+mgheebruWKoOWFpeWIsOS9v+eUqOiAheepuumWk+aXpeiqjCcpXG5cdFx0XHQpOyAvLyBtYWtlIHRoaXMgJy4uLiB0byAnICsgbG9nUGFnZU5hbWUgP1xuXHRcdFx0cGFnZS5sb2FkKChwYWdlb2JqKSA9PiB7XG5cdFx0XHRcdC8vIGFkZCBibHVyYiBpZiBsb2cgcGFnZSBkb2Vzbid0IGV4aXN0IG9yIGlzIGJsYW5rXG5cdFx0XHRcdGxldCB0ZXh0ID0gcGFnZW9iai5nZXRQYWdlVGV4dCgpIHx8IHRoaXMuaW5pdGlhbFRleHQ7XG5cdFx0XHRcdC8vIGNyZWF0ZSBtb250aGx5IGhlYWRlciBpZiBpdCBkb2Vzbid0IGV4aXN0IGFscmVhZHlcblx0XHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHBhZ2VvYmouZ2V0TG9hZFRpbWUoKSk7XG5cdFx0XHRcdGlmICghZGF0ZS5tb250aEhlYWRlclJlZ2V4KCkuZXhlYyh0ZXh0KSkge1xuXHRcdFx0XHRcdHRleHQgKz0gYFxcblxcbiR7ZGF0ZS5tb250aEhlYWRlcih0aGlzLmhlYWRlckxldmVsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhZ2VvYmouc2V0UGFnZVRleHQoYCR7dGV4dH1cXG4ke2xvZ1RleHR9YCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0RWRpdFN1bW1hcnkoc3VtbWFyeVRleHQpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENoYW5nZVRhZ3ModGhpcy5jaGFuZ2VUYWdzKTtcblx0XHRcdFx0cGFnZW9iai5zZXRDcmVhdGVPcHRpb24oJ3JlY3JlYXRlJyk7XG5cdFx0XHRcdHBhZ2VvYmouc2F2ZShkZWYucmVzb2x2ZSwgZGVmLnJlamVjdCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5zdGF0dXMgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBzaG93IHN0YXR1cyBtZXNzYWdlcyBvZiB2YXJ5aW5nIHVyZ2VuY3kuXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdHxNb3JlYml0cy5zdGF0dXMuaW5pdCgpfSBtdXN0IGJlIGNhbGxlZCBiZWZvcmVcblx0ICogYW55IHN0YXR1cyBvYmplY3QgaXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRob3NlIHN0YXR1c2VzIHdvbid0IGJlIHZpc2libGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGJlZm9yZSB0aGUgdGhlIGNvbG9uIGA6YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXQgLSBUZXh0IGFmdGVyIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1zdGF0dXNdIC0gRGV0ZXJtaW5lIHRoZSBmb250IGNvbG9yIG9mIHRoZSBzdGF0dXNcblx0ICogbGluZSwgYWxsb3dhYmxlIHZhbHVlcyBhcmU6IGBzdGF0dXNgIChibHVlKSwgYGluZm9gIChncmVlbiksIGB3YXJuYCAocmVkKSxcblx0ICogb3IgYGVycm9yYCAoYm9sZCByZWQpLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzID0gZnVuY3Rpb24gKHRleHQsIHN0YXQsIHR5cGUpIHtcblx0XHR0aGlzLnRleHRSYXcgPSB0ZXh0O1xuXHRcdHRoaXMudGV4dCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwodGV4dCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZSB8fCAnc3RhdHVzJztcblx0XHR0aGlzLmdlbmVyYXRlKCk7XG5cdFx0aWYgKHN0YXQpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXQsIHR5cGUpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIFNwZWNpZnkgYW4gYXJlYSBmb3Igc3RhdHVzIG1lc3NhZ2UgZWxlbWVudHMgdG8gYmUgYWRkZWQgdG8uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIFVzdWFsbHkgYSBkaXYgZWxlbWVudC5cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBgcm9vdGAgaXMgbm90IGFuIGBIVE1MRWxlbWVudGAuXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuaW5pdCA9IChyb290KSA9PiB7XG5cdFx0aWYgKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdvYmplY3Qgbm90IGFuIGluc3RhbmNlIG9mIEVsZW1lbnQnKTtcblx0XHR9XG5cdFx0d2hpbGUgKHJvb3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRyb290LnJlbW92ZUNoaWxkKHJvb3QuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290ID0gcm9vdDtcblx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IG51bGw7XG5cdH07XG5cdE1vcmViaXRzLnN0YXR1cy5yb290ID0gbnVsbDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gZXJyb3IuXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gV2hlbiBgaGFuZGxlcmAgaXMgbm90IGEgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMub25FcnJvciA9IChoYW5kbGVyKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IGhhbmRsZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ01vcmViaXRzLnN0YXR1cy5vbkVycm9yOiBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucHJvdG90eXBlID0ge1xuXHRcdHN0YXQ6IG51bGwsXG5cdFx0c3RhdFJhdzogbnVsbCxcblx0XHR0ZXh0OiBudWxsLFxuXHRcdHRleHRSYXc6IG51bGwsXG5cdFx0dHlwZTogJ3N0YXR1cycsXG5cdFx0dGFyZ2V0OiBudWxsLFxuXHRcdG5vZGU6IG51bGwsXG5cdFx0bGlua2VkOiBmYWxzZSxcblx0XHQvKiogQWRkIHRoZSBzdGF0dXMgZWxlbWVudCBub2RlIHRvIHRoZSBET00uICovXG5cdFx0bGluaygpIHtcblx0XHRcdGlmICghdGhpcy5saW5rZWQgJiYgTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5saW5rZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqIFJlbW92ZSB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSBmcm9tIHRoZSBET00uICovXG5cdFx0dW5saW5rKCkge1xuXHRcdFx0aWYgKHRoaXMubGlua2VkKSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBQYXJ0IG9mIHN0YXR1cyBtZXNzYWdlIGFmdGVyIGNvbG9uLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gJ3N0YXR1cycgKGJsdWUpLCAnaW5mbycgKGdyZWVuKSwgJ3dhcm4nXG5cdFx0ICogKHJlZCksIG9yICdlcnJvcicgKGJvbGQgcmVkKS5cblx0XHQgKi9cblx0XHR1cGRhdGUoc3RhdHVzLCB0eXBlKSB7XG5cdFx0XHR0aGlzLnN0YXRSYXcgPSBzdGF0dXM7XG5cdFx0XHR0aGlzLnN0YXQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHN0YXR1cyk7XG5cdFx0XHRpZiAodHlwZSkge1xuXHRcdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuXHRcdFx0XHRcdC8vIGhhY2sgdG8gZm9yY2UgdGhlIHBhZ2Ugbm90IHRvIHJlbG9hZCB3aGVuIGFuIGVycm9yIGlzIG91dHB1dCAtIHNlZSBhbHNvIE1vcmViaXRzLnN0YXR1cygpIGFib3ZlXG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMTAwMDtcblx0XHRcdFx0XHQvLyBjYWxsIGVycm9yIGNhbGxiYWNrXG5cdFx0XHRcdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KSB7XG5cdFx0XHRcdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhbHNvIGxvZyBlcnJvciBtZXNzYWdlcyBpbiB0aGUgYnJvd3NlciBjb25zb2xlXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgW01vcmViaXRzXSAke3RoaXMudGV4dFJhd306ICR7dGhpcy5zdGF0UmF3fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdH0sXG5cdFx0LyoqIFByb2R1Y2UgdGhlIGh0bWwgZm9yIGZpcnN0IHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRcdGdlbmVyYXRlKCkge1xuXHRcdFx0dGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzogJykpO1xuXHRcdFx0dGhpcy50YXJnZXQgPSB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7IC8vIGR1bW15IG5vZGVcblx0XHR9LFxuXG5cdFx0LyoqIENvbXBsZXRlIHRoZSBodG1sLCBmb3IgdGhlIHNlY29uZCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRyZW5kZXIoKSB7XG5cdFx0XHR0aGlzLm5vZGUuY2xhc3NOYW1lID0gYG1vcmViaXRzX3N0YXR1c18ke3RoaXMudHlwZX1gO1xuXHRcdFx0d2hpbGUgKHRoaXMudGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldC5yZW1vdmVDaGlsZCh0aGlzLnRhcmdldC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuc3RhdCk7XG5cdFx0XHR0aGlzLmxpbmsoKTtcblx0XHR9LFxuXHRcdHN0YXR1cyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3N0YXR1cycpO1xuXHRcdH0sXG5cdFx0aW5mbyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2luZm8nKTtcblx0XHR9LFxuXHRcdHdhcm4oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICd3YXJuJyk7XG5cdFx0fSxcblx0XHRlcnJvcihzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2Vycm9yJyk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHN0YXR1c2AtdHlwZSAoYmx1ZSlcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5zdGF0dXMgPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGluZm9gLXR5cGUgKGdyZWVuKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluZm8gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnaW5mbycpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgd2FybmAtdHlwZSAocmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLndhcm4gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnd2FybicpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgZXJyb3JgLXR5cGUgKGJvbGQgcmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmVycm9yID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2Vycm9yJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBGb3IgdGhlIGFjdGlvbiBjb21wbGV0ZSBtZXNzYWdlIGF0IHRoZSBlbmQsIGNyZWF0ZSBhIHN0YXR1cyBsaW5lIHdpdGhvdXRcblx0ICogYSBjb2xvbiBzZXBhcmF0b3IuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQgPSAodGV4dCkgPT4ge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gJ21vcmViaXRzX3N0YXR1c19pbmZvIG1vcmViaXRzX2FjdGlvbl9jb21wbGV0ZSc7XG5cdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRoZSB1c2VyJ3MgcmF0aW9uYWxlLCBjb21tZW50cywgZXRjLiBCYWNrIHRvIHRoZW0gYWZ0ZXIgYSBmYWlsdXJlLFxuXHQgKiBzbyB0aGF0IHRoZXkgbWF5IHJlLXVzZSBpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudHNcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5wcmludFVzZXJUZXh0ID0gKGNvbW1lbnRzLCBtZXNzYWdlKSA9PiB7XG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRwLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTmFtZSA9ICdtb3JlYml0cy11c2VydGV4dCc7XG5cdFx0ZGl2LnN0eWxlLm1hcmdpblRvcCA9ICcwJztcblx0XHRkaXYuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XG5cdFx0ZGl2LnRleHRDb250ZW50ID0gY29tbWVudHM7XG5cdFx0cC5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHApO1xuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzaW1wbGUgbm9kZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUeXBlIG9mIEhUTUwgZWxlbWVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBUZXh0IGNvbnRlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3JdIC0gRm9udCBjb2xvci5cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuaHRtbE5vZGUgPSAodHlwZSwgY29udGVudCwgY29sb3IpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0XHRpZiAoY29sb3IpIHtcblx0XHRcdG5vZGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHR9XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSk7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGQgc2hpZnQtY2xpY2sgc3VwcG9ydCBmb3IgY2hlY2tib3hlcy4gVGhlIHdpa2liaXRzIHZlcnNpb25cblx0ICogKGB3aW5kb3cuYWRkQ2hlY2tib3hDbGlja0hhbmRsZXJzYCkgaGFzIHNvbWUgcmVzdHJpY3Rpb25zLCBhbmQgZG9lc24ndCB3b3JrXG5cdCAqIHdpdGggY2hlY2tib3hlcyBpbnNpZGUgYSBzb3J0YWJsZSB0YWJsZSwgc28gbGV0J3MgYnVpbGQgb3VyIG93bi5cblx0ICpcblx0ICogQHBhcmFtIGpRdWVyeVNlbGVjdG9yXG5cdCAqIEBwYXJhbSBqUXVlcnlDb250ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0ID0gKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KSA9PiB7XG5cdFx0bGV0IGxhc3RDaGVja2JveCA9IG51bGw7XG5cdFx0Y29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG5cdFx0XHRjb25zdCB0aGlzQ2IgPSB0aGlzO1xuXHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGxhc3RDaGVja2JveCAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBjYnMgPSAkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KTsgLy8gY2FuJ3QgY2FjaGUgdGhlbSwgb2J2aW91c2x5LCBpZiB3ZSB3YW50IHRvIHN1cHBvcnQgcmVzb3J0aW5nXG5cdFx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgbGFzdEluZGV4ID0gLTE7XG5cdFx0XHRcdGxldCBpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNic1tpXSA9PT0gdGhpc0NiKSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAobGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IGxhc3RDaGVja2JveCkge1xuXHRcdFx0XHRcdFx0bGFzdEluZGV4ID0gaTtcblx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSAmJiBsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdC8vIGluc3BpcmVkIGJ5IHdpa2liaXRzXG5cdFx0XHRcdFx0Y29uc3QgZW5kU3RhdGUgPSB0aGlzQ2IuY2hlY2tlZDtcblx0XHRcdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRcdFx0bGV0IGZpbmlzaDtcblx0XHRcdFx0XHRpZiAoaW5kZXggPCBsYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRcdHN0YXJ0ID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdFx0ZmluaXNoID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGluZGV4IC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChpID0gc3RhcnQ7IGkgPD0gZmluaXNoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChjYnNbaV0uY2hlY2tlZCAhPT0gZW5kU3RhdGUpIHtcblx0XHRcdFx0XHRcdFx0Y2JzW2ldLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsYXN0Q2hlY2tib3ggPSB0aGlzQ2I7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdCQoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSXRlcmF0ZXMgb3ZlciBhIGdyb3VwIG9mIHBhZ2VzIChvciBhcmJpdHJhcnkgb2JqZWN0cykgYW5kIGV4ZWN1dGVzIGEgd29ya2VyIGZ1bmN0aW9uXG5cdCAqIGZvciBlYWNoLlxuXHQgKlxuXHQgKiBgc2V0UGFnZUxpc3QocGFnZUxpc3QpYDogU2V0cyB0aGUgbGlzdCBvZiBwYWdlcyB0byB3b3JrIG9uLiBJdCBzaG91bGQgYmUgYW5cblx0ICogYXJyYXkgb2YgcGFnZSBuYW1lcyBzdHJpbmdzLlxuXHQgKlxuXHQgKiBgc2V0T3B0aW9uKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKWA6IFNldHMgYSBrbm93biBvcHRpb246XG5cdCAqIC0gYGNodW5rU2l6ZWAgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG8gKGRlZmF1bHRcblx0ICogNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0ICogLSBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXMgZWxlbWVudFxuXHQgKiB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlPyBTZWUgbm90ZSBiZWxvdy5cblx0ICpcblx0ICogYHJ1bih3b3JrZXIsIHBvc3RGaW5pc2gpYDogUnVucyB0aGUgY2FsbGJhY2sgYHdvcmtlcmAgZm9yIGVhY2ggcGFnZSBpbiB0aGVcblx0ICogbGlzdC4gIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgYHdvcmtlclN1Y2Nlc3NgIHdoZW4gc3VjY2VlZGluZywgb3Jcblx0ICogYHdvcmtlckZhaWx1cmVgIHdoZW4gZmFpbGluZy4gIElmIHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb3Jcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0sIHRoaXMgaXMgZWFzaWx5IGRvbmUgYnkgcGFzc2luZyB0aGVzZSB0d29cblx0ICogZnVuY3Rpb25zIGFzIHBhcmFtZXRlcnMgdG8gdGhlIG1ldGhvZHMgb24gdGhvc2Ugb2JqZWN0czogZm9yIGluc3RhbmNlLFxuXHQgKiBgcGFnZS5zYXZlKGJhdGNoT3Aud29ya2VyU3VjY2VzcywgYmF0Y2hPcC53b3JrZXJGYWlsdXJlKWAuICBNYWtlIHN1cmUgdGhlXG5cdCAqIG1ldGhvZHMgYXJlIGNhbGxlZCBkaXJlY3RseSBpZiBzcGVjaWFsIHN1Y2Nlc3MvZmFpbHVyZSBjYXNlcyBhcmlzZS4gIElmIHlvdVxuXHQgKiBvbWl0IHRvIGNhbGwgdGhlc2UgbWV0aG9kcywgdGhlIGJhdGNoIG9wZXJhdGlvbiB3aWxsIHN0YWxsIGFmdGVyIHRoZSBmaXJzdFxuXHQgKiBjaHVuayEgIEFsc28gZW5zdXJlIHRoYXQgZWl0aGVyIHdvcmtlclN1Y2Nlc3Mgb3Igd29ya2VyRmFpbHVyZSBpcyBjYWxsZWQgbm9cblx0ICogbW9yZSB0aGFuIG9uY2UuICBUaGUgc2Vjb25kIGNhbGxiYWNrIGBwb3N0RmluaXNoYCBpcyBleGVjdXRlZCB3aGVuIHRoZVxuXHQgKiBlbnRpcmUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHQgKlxuXHQgKiBJZiB1c2luZyBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgLCB5b3Ugc2hvdWxkIHRyeSB0byBlbnN1cmUgdGhhdCB0aGVcblx0ICogYHdvcmtlclN1Y2Nlc3NgIGNhbGxiYWNrIGhhcyBhY2Nlc3MgdG8gdGhlIHBhZ2UgdGl0bGUuICBUaGlzIGlzIG5vIHByb2JsZW0gZm9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IG9iamVjdHMuICBCdXQgd2hlbiB1c2luZyB0aGUgQVBJLCBwbGVhc2Ugc2V0IHRoZVxuXHQgKiB8cGFnZU5hbWV8IHByb3BlcnR5IG9uIHRoZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9iamVjdC5cblx0ICpcblx0ICogVGhlcmUgYXJlIHNhbXBsZSBiYXRjaE9wZXJhdGlvbiBpbXBsZW1lbnRhdGlvbnMgdXNpbmcgTW9yZWJpdHMud2lraS5wYWdlIGluXG5cdCAqIHR3aW5rbGViYXRjaGRlbGV0ZS5qcywgdHdpbmtsZWJhdGNodW5kZWxldGUuanMsIGFuZCB0d2lua2xlYmF0Y2hwcm90ZWN0LmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3VycmVudEFjdGlvbl1cblx0ICovXG5cdE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uID0gZnVuY3Rpb24gKGN1cnJlbnRBY3Rpb24pIHtcblx0XHRjb25zdCBjdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VMaXN0OiBudWxsLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRjaHVua1NpemU6IDUwLFxuXHRcdFx0XHRwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lczogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gaW50ZXJuYWwgY291bnRlcnMsIGV0Yy5cblx0XHRcdHN0YXR1c0VsZW1lbnQ6IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbiB8fCB3Z1VMUygn5omn6KGM5om56YeP5pON5L2cJywgJ+Wft+ihjOaJueasoeaTjeS9nCcpKSxcblx0XHRcdHdvcmtlcjogbnVsbCxcblx0XHRcdC8vIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgZm9yIGVhY2ggaXRlbSBpbiBwYWdlTGlzdFxuXHRcdFx0cG9zdEZpbmlzaDogbnVsbCxcblx0XHRcdC8vIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkXG5cdFx0XHRjb3VudFN0YXJ0ZWQ6IDAsXG5cdFx0XHRjb3VudEZpbmlzaGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZFN1Y2Nlc3M6IDAsXG5cdFx0XHRjdXJyZW50Q2h1bmtJbmRleDogLTEsXG5cdFx0XHRwYWdlQ2h1bmtzOiBbXSxcblx0XHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdH07XG5cdFx0Ly8gc2hvdWxkbid0IGJlIG5lZWRlZCBieSBleHRlcm5hbCB1c2VycywgYnV0IHByb3ZpZGVkIGFueXdheSBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eVxuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHBhZ2VMaXN0IC0gQXJyYXkgb2Ygb2JqZWN0cyBvdmVyIHdoaWNoIHlvdSB3aXNoIHRvIGV4ZWN1dGUgdGhlIHdvcmtlciBmdW5jdGlvblxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUgbGlzdCBvZiBwYWdlIG5hbWVzIChzdHJpbmdzKS5cblx0XHQgKi9cblx0XHR0aGlzLnNldFBhZ2VMaXN0ID0gKHBhZ2VMaXN0KSA9PiB7XG5cdFx0XHRjdHgucGFnZUxpc3QgPSBwYWdlTGlzdDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldHMgYSBrbm93biBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSAtIE5hbWUgb2YgdGhlIG9wdGlvbjpcblx0XHQgKiAtIGNodW5rU2l6ZSAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50b1xuXHRcdCAqIChkZWZhdWx0IDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG5cdFx0ICogLSBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzXG5cdFx0ICogZWxlbWVudCB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlP1xuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfGJvb2xlYW59IG9wdGlvblZhbHVlIC0gVmFsdWUgdG8gd2hpY2ggdGhlIG9wdGlvbiBpc1xuXHRcdCAqIHRvIGJlIHNldC4gU2hvdWxkIGJlIGFuIGludGVnZXIgZm9yIGNodW5rU2l6ZSBhbmQgYSBib29sZWFuIGZvclxuXHRcdCAqIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0T3B0aW9uID0gKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKSA9PiB7XG5cdFx0XHRjdHgub3B0aW9uc1tvcHRpb25OYW1lXSA9IG9wdGlvblZhbHVlO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUnVucyB0aGUgZmlyc3QgY2FsbGJhY2sgZm9yIGVhY2ggcGFnZSBpbiB0aGUgbGlzdC5cblx0XHQgKiBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIHdvcmtlclN1Y2Nlc3Mgd2hlbiBzdWNjZWVkaW5nLCBvciB3b3JrZXJGYWlsdXJlIHdoZW4gZmFpbGluZy5cblx0XHQgKiBSdW5zIHRoZSBvcHRpb25hbCBzZWNvbmQgY2FsbGJhY2sgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gd29ya2VyXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW3Bvc3RGaW5pc2hdXG5cdFx0ICovXG5cdFx0dGhpcy5ydW4gPSAod29ya2VyLCBwb3N0RmluaXNoKSA9PiB7XG5cdFx0XHRpZiAoY3R4LnJ1bm5pbmcpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+aJuemHj+aTjeS9nOW3suWcqOi/kOihjCcsICfmibnmrKHmk43kvZzlt7LlnKjln7fooYwnKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdGN0eC53b3JrZXIgPSB3b3JrZXI7XG5cdFx0XHRjdHgucG9zdEZpbmlzaCA9IHBvc3RGaW5pc2g7XG5cdFx0XHRjdHguY291bnRTdGFydGVkID0gMDtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkID0gMDtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA9IDA7XG5cdFx0XHRjdHguY3VycmVudENodW5rSW5kZXggPSAtMTtcblx0XHRcdGN0eC5wYWdlQ2h1bmtzID0gW107XG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoIXRvdGFsKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2dVTFMoJ+ayoeacieaMh+WumumhtemdoicsICfmspLmnInmjIflrprpoIHpnaInKSk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2h1bmsgcGFnZSBsaXN0IGludG8gbW9yZSBtYW5hZ2VhYmxlIHVuaXRzXG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IE1vcmViaXRzLmFycmF5LmNodW5rKGN0eC5wYWdlTGlzdCwgY3R4Lm9wdGlvbnMuY2h1bmtTaXplKTtcblx0XHRcdC8vIHN0YXJ0IHRoZSBwcm9jZXNzXG5cdFx0XHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKTtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cygnMCUnKTtcblx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVG8gYmUgY2FsbGVkIGJ5IHdvcmtlciBiZWZvcmUgaXQgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhNb3JlYml0cy53aWtpLnBhZ2V8TW9yZWJpdHMud2lraS5hcGl8c3RyaW5nKX0gYXJnIC1cblx0XHQgKiBUaGlzIHNob3VsZCBiZSB0aGUgYE1vcmViaXRzLndpa2kucGFnZWAgb3IgYE1vcmViaXRzLndpa2kuYXBpYCBvYmplY3QgdXNlZCBieSB3b3JrZXJcblx0XHQgKiAoZm9yIHRoZSBhZGp1c3RtZW50IG9mIHN0YXR1cyBsaW5lcyBlbWl0dGVkIGJ5IHRoZW0pLlxuXHRcdCAqIElmIG5vIE1vcmViaXRzLndpa2kuKiBvYmplY3QgaXMgdXNlZCAoZS5nLiB5b3UncmUgdXNpbmcgYG13LkFwaSgpYCBvciBzb21ldGhpbmcgZWxzZSksIGFuZFxuXHRcdCAqIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2Agb3B0aW9uIGlzIG9uLCBnaXZlIHRoZSBwYWdlIG5hbWUgKHN0cmluZykgYXMgYXJndW1lbnQuXG5cdFx0ICovXG5cdFx0dGhpcy53b3JrZXJTdWNjZXNzID0gKGFyZykgPT4ge1xuXHRcdFx0aWYgKGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kuYXBpIHx8IGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kucGFnZSkge1xuXHRcdFx0XHQvLyB1cGRhdGUgb3IgcmVtb3ZlIHN0YXR1cyBsaW5lXG5cdFx0XHRcdGNvbnN0IHN0YXRlbGVtID0gYXJnLmdldFN0YXR1c0VsZW1lbnQoKTtcblx0XHRcdFx0aWYgKGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5nZXRQYWdlTmFtZSB8fCBhcmcucGFnZU5hbWUgfHwgKGFyZy5xdWVyeSAmJiBhcmcucXVlcnkudGl0bGUpKSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBrbm93IHRoZSBwYWdlIHRpdGxlIC0gZGlzcGxheSBhIHJlbGV2YW50IG1lc3NhZ2Vcblx0XHRcdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gYXJnLmdldFBhZ2VOYW1lID8gYXJnLmdldFBhZ2VOYW1lKCkgOiBhcmcucGFnZU5hbWUgfHwgYXJnLnF1ZXJ5LnRpdGxlO1xuXHRcdFx0XHRcdFx0c3RhdGVsZW0uaW5mbyhg5a6M5oiQ77yIW1ske3BhZ2VOYW1lfV1d77yJYCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHdlIGRvbid0IGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBqdXN0IGRpc3BsYXkgYSBnZW5lcmljIG1lc3NhZ2Vcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIHN0YXR1cyBsaW5lIGF1dG9tYXRpY2FsbHkgcHJvZHVjZWQgYnkgTW9yZWJpdHMud2lraS4qXG5cdFx0XHRcdFx0c3RhdGVsZW0udW5saW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhhcmcsIGDlrozmiJDvvIhbWyR7YXJnfV1d77yJYCk7XG5cdFx0XHR9XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MrKztcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0dGhpcy53b3JrZXJGYWlsdXJlID0gKCkgPT4ge1xuXHRcdFx0Zm5Eb25lT25lKCk7XG5cdFx0fTtcblx0XHQvLyBwcml2YXRlIGZ1bmN0aW9uc1xuXHRcdGNvbnN0IHRoaXNQcm94eSA9IHRoaXM7XG5cdFx0Y29uc3QgZm5TdGFydE5ld0NodW5rID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2h1bmsgPSBjdHgucGFnZUNodW5rc1srK2N0eC5jdXJyZW50Q2h1bmtJbmRleF07XG5cdFx0XHRpZiAoIWNodW5rKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gZG9uZSEgeWF5XG5cdFx0XHR9XG5cdFx0XHQvLyBzdGFydCB3b3JrZXJzIGZvciB0aGUgY3VycmVudCBjaHVua1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgY2h1bmspIHtcblx0XHRcdFx0Y3R4LndvcmtlcihwYWdlLCB0aGlzUHJveHkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZm5Eb25lT25lID0gKCkgPT4ge1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQrKztcblx0XHRcdC8vIHVwZGF0ZSBvdmVyYWxsIHN0YXR1cyBsaW5lXG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWQgPCB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBwcm9ncmVzcyA9IE1hdGgucm91bmQoKDEwMCAqIGN0eC5jb3VudEZpbmlzaGVkKSAvIHRvdGFsKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKGAke3Byb2dyZXNzfSVgKTtcblx0XHRcdFx0Ly8gc3RhcnQgYSBuZXcgY2h1bmsgaWYgd2UncmUgY2xvc2UgZW5vdWdoIHRvIHRoZSBlbmQgb2YgdGhlIHByZXZpb3VzIGNodW5rLCBhbmRcblx0XHRcdFx0Ly8gd2UgaGF2ZW4ndCBhbHJlYWR5IHN0YXJ0ZWQgdGhlIG5leHQgb25lXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjdHguY291bnRGaW5pc2hlZCA+PSBjdHguY291bnRTdGFydGVkIC0gTWF0aC5tYXgoY3R4Lm9wdGlvbnMuY2h1bmtTaXplIC8gMTAsIDIpICYmXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihjdHguY291bnRGaW5pc2hlZCAvIGN0eC5vcHRpb25zLmNodW5rU2l6ZSkgPiBjdHguY3VycmVudENodW5rSW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zm5TdGFydE5ld0NodW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY3R4LmNvdW50RmluaXNoZWQgPT09IHRvdGFsKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXR1c1N0cmluZyA9IGDlrozmiJDvvIgke2N0eC5jb3VudEZpbmlzaGVkU3VjY2Vzc30vJHtjdHguY291bnRGaW5pc2hlZH3mk43kvZzmiJDlip/lrozmiJDvvIlgO1xuXHRcdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWRTdWNjZXNzIDwgY3R4LmNvdW50RmluaXNoZWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKHN0YXR1c1N0cmluZyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjdHguY291bnRGaW5pc2hlZCA+IHRvdGFsXG5cdFx0XHRcdC8vIGp1c3QgZm9yIGdpZ2dsZXMhICh3ZWxsLCBzZXJpb3VzIGRlYnVnZ2luZywgYWN0dWFsbHkpXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50Lndhcm4oXG5cdFx0XHRcdFx0YCR7d2dVTFMoJ+WujOaIkO+8iOWkmuaJp+ihjOS6hicsICflrozmiJDvvIjlpJrln7fooYzkuoYnKSArIChjdHguY291bnRGaW5pc2hlZCAtIHRvdGFsKX3mrKHvvIlgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBkcmFnZ2FibGUgd2luZG93LCBub3cgYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkncyBkaWFsb2cgZmVhdHVyZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnVpLmRpYWxvZ1xuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBtYXhpbXVtIGFsbG93YWJsZSBoZWlnaHQgZm9yIHRoZSBjb250ZW50IGFyZWEuXG5cdCAqL1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdGNvbnRlbnQuY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1jb250ZW50Jztcblx0XHRjb250ZW50LmlkID0gYG1vcmViaXRzLWRpYWxvZy1jb250ZW50LSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNSl9YDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKHtcblx0XHRcdGF1dG9PcGVuOiBmYWxzZSxcblx0XHRcdGJ1dHRvbnM6IHtcblx0XHRcdFx0J1BsYWNlaG9sZGVyIGJ1dHRvbic6ICgpID0+IHt9LFxuXHRcdFx0fSxcblx0XHRcdGRpYWxvZ0NsYXNzOiAnbW9yZWJpdHMtZGlhbG9nJyxcblx0XHRcdHdpZHRoOiBNYXRoLm1pbihOdW1iZXIucGFyc2VJbnQod2luZG93LmlubmVyV2lkdGgsIDEwKSwgTnVtYmVyLnBhcnNlSW50KHdpZHRoIHx8IDgwMCwgMTApKSxcblx0XHRcdC8vIGdpdmUgalF1ZXJ5IHRoZSBnaXZlbiBoZWlnaHQgdmFsdWUgKHdoaWNoIHJlcHJlc2VudHMgdGhlIGFudGljaXBhdGVkIGhlaWdodCBvZiB0aGUgZGlhbG9nKSBoZXJlLCBzb1xuXHRcdFx0Ly8gaXQgY2FuIHBvc2l0aW9uIHRoZSBkaWFsb2cgYXBwcm9wcmlhdGVseVxuXHRcdFx0Ly8gdGhlIDIwIHBpeGVscyByZXByZXNlbnRzIGFkanVzdG1lbnQgZm9yIHRoZSBleHRyYSBoZWlnaHQgb2YgdGhlIGpRdWVyeSBkaWFsb2cgXCJjaHJvbWVcIiwgY29tcGFyZWRcblx0XHRcdC8vIHRvIHRoYXQgb2YgdGhlIG9sZCBTaW1wbGVXaW5kb3dcblx0XHRcdGhlaWdodDogaGVpZ2h0ICsgMjAsXG5cdFx0XHRjbG9zZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdC8vIGRpYWxvZ3MgYW5kIHRoZWlyIGNvbnRlbnQgY2FuIGJlIGRlc3Ryb3llZCBvbmNlIGNsb3NlZFxuXHRcdFx0XHQkKGV2ZW50LnRhcmdldCkuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplU3RhcnQoKSB7XG5cdFx0XHRcdFt0aGlzLnNjcm9sbGJveF0gPSAkKHRoaXMpLmZpbmQoJy5tb3JlYml0cy1zY3JvbGxib3gnKTtcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYm94KSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxib3guc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplU3RvcCgpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxib3ggPSBudWxsO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZSgpIHtcblx0XHRcdFx0dGhpcy5zdHlsZS5tYXhIZWlnaHQgPSAnJztcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYm94KSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxib3guc3R5bGUud2lkdGggPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0Ly8gZGVsZXRlIHRoZSBwbGFjZWhvbGRlciBidXR0b24gKGl0J3Mgb25seSB0aGVyZSBzbyB0aGUgYnV0dG9ucGFuZSBnZXRzIGNyZWF0ZWQpXG5cdFx0JHdpZGdldC5maW5kKCdidXR0b24nKS5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHR2YWx1ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZhbHVlKTtcblx0XHR9KTtcblx0XHQvLyBhZGQgY29udGFpbmVyIGZvciB0aGUgYnV0dG9ucyB3ZSBhZGQsIGFuZCB0aGUgZm9vdGVyIGxpbmtzIChpZiBhbnkpXG5cdFx0Y29uc3QgYnV0dG9uc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRidXR0b25zcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctYnV0dG9ucyc7XG5cdFx0Y29uc3QgbGlua3NzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmtzc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJztcblx0XHQkd2lkZ2V0LmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZScpLmFwcGVuZChidXR0b25zcGFuLCBsaW5rc3NwYW4pO1xuXHRcdC8vIHJlc2l6ZSB0aGUgc2Nyb2xsYm94IHdpdGggdGhlIGRpYWxvZywgaWYgb25lIGlzIHByZXNlbnRcblx0XHQkd2lkZ2V0LnJlc2l6YWJsZSgnb3B0aW9uJywgJ2Fsc29SZXNpemUnLCBgIyR7dGhpcy5jb250ZW50LmlkfSAubW9yZWJpdHMtc2Nyb2xsYm94LCAjJHt0aGlzLmNvbnRlbnQuaWR9YCk7XG5cdH07XG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdy5wcm90b3R5cGUgPSB7XG5cdFx0YnV0dG9uczogW10sXG5cdFx0aGVpZ2h0OiA2MDAsXG5cdFx0aGFzRm9vdGVyTGlua3M6IGZhbHNlLFxuXHRcdHNjcmlwdE5hbWU6IG51bGwsXG5cdFx0LyoqXG5cdFx0ICogRm9jdXNlcyB0aGUgZGlhbG9nLiBUaGlzIG1pZ2h0IHdvcmssIG9yIG9uIHRoZSBjb250cmFyeSwgaXQgbWlnaHQgbm90LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRmb2N1cygpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ21vdmVUb1RvcCcpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDbG9zZXMgdGhlIGRpYWxvZy4gSWYgdGhpcyBpcyBzZXQgYXMgYW4gZXZlbnQgaGFuZGxlciwgaXQgd2lsbCBzdG9wIHRoZSBldmVudFxuXHRcdCAqIGZyb20gZG9pbmcgYW55dGhpbmcgbW9yZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZXZlbnR9IFtldmVudF1cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGNsb3NlKGV2ZW50KSB7XG5cdFx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNob3dzIHRoZSBkaWFsb2cuIENhbGxpbmcgZGlzcGxheSgpIG9uIGEgZGlhbG9nIHRoYXQgaGFzIHByZXZpb3VzbHkgYmVlbiBjbG9zZWRcblx0XHQgKiBtaWdodCB3b3JrLCBidXQgaXQgaXMgbm90IGd1YXJhbnRlZWQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGRpc3BsYXkoKSB7XG5cdFx0XHRpZiAodGhpcy5zY3JpcHROYW1lKSB7XG5cdFx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKTtcblx0XHRcdFx0JHdpZGdldC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2NyaXB0bmFtZXNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdHNjcmlwdG5hbWVzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctc2NyaXB0bmFtZSc7XG5cdFx0XHRcdHNjcmlwdG5hbWVzcGFuLnRleHRDb250ZW50ID0gYCR7dGhpcy5zY3JpcHROYW1lfSBcXHUwMEI3IGA7IC8vIFUrMDBCNyBNSURETEUgRE9UID0gJm1pZGRvdDtcblx0XHRcdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLXRpdGxlJykucHJlcGVuZChzY3JpcHRuYW1lc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBkaWFsb2cgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcGVuJyk7XG5cdFx0XHRpZiAod2luZG93LnNldHVwVG9vbHRpcHMgJiYgd2luZG93LnBnICYmIHdpbmRvdy5wZy5yZSAmJiB3aW5kb3cucGcucmUuZGlmZikge1xuXHRcdFx0XHQvLyB0aWUgaW4gd2l0aCBOQVZQT1Bcblx0XHRcdFx0ZGlhbG9nLnBhcmVudCgpWzBdLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gZmFsc2U7XG5cdFx0XHRcdHdpbmRvdy5zZXR1cFRvb2x0aXBzKGRpYWxvZy5wYXJlbnQoKVswXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldEhlaWdodCh0aGlzLmhlaWdodCk7IC8vIGluaXQgaGVpZ2h0IGFsZ29yaXRobVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cgdGl0bGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFRpdGxlKHRpdGxlKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCB0aXRsZSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIHNjcmlwdCBuYW1lLCBhcHBlYXJpbmcgYXMgYSBwcmVmaXggdG8gdGhlIHRpdGxlIHRvIGhlbHAgdXNlcnMgZGV0ZXJtaW5lIHdoaWNoXG5cdFx0ICogdXNlciBzY3JpcHQgaXMgcHJvZHVjaW5nIHdoaWNoIGRpYWxvZy4gRm9yIGluc3RhbmNlLCBUd2lua2xlIG1vZHVsZXMgc2V0IHRoaXMgdG8gXCJUd2lua2xlXCIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0U2NyaXB0TmFtZShuYW1lKSB7XG5cdFx0XHR0aGlzLnNjcmlwdE5hbWUgPSBuYW1lO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cgd2lkdGguXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFdpZHRoKHdpZHRoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnd2lkdGgnLCB3aWR0aCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZydzIG1heGltdW0gaGVpZ2h0LiBUaGUgZGlhbG9nIHdpbGwgYXV0by1zaXplIHRvIGZpdCBpdHMgY29udGVudHMsXG5cdFx0ICogYnV0IHRoZSBjb250ZW50IGFyZWEgd2lsbCBncm93IG5vIGxhcmdlciB0aGFuIHRoZSBoZWlnaHQgZ2l2ZW4gaGVyZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldEhlaWdodChoZWlnaHQpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdFx0Ly8gZnJvbSBkaXNwbGF5IHRpbWUgb253YXJkcywgbGV0IHRoZSBicm93c2VyIGRldGVybWluZSB0aGUgb3B0aW11bSBoZWlnaHQsXG5cdFx0XHQvLyBhbmQgaW5zdGVhZCBsaW1pdCB0aGUgaGVpZ2h0IGF0IHRoZSBnaXZlbiB2YWx1ZVxuXHRcdFx0Ly8gbm90ZSB0aGF0IHRoZSBnaXZlbiBoZWlnaHQgd2lsbCBleGNsdWRlIHRoZSBhcHByb3guIDIwcHggdGhhdCB0aGUgalF1ZXJ5IFVJXG5cdFx0XHQvLyBjaHJvbWUgaGFzIGluIGhlaWdodCBpbiBhZGRpdGlvbiB0byB0aGUgaGVpZ2h0IG9mIGFuIGVxdWl2YWxlbnQgXCJjbGFzc2ljXCJcblx0XHRcdC8vIE1vcmViaXRzLnNpbXBsZVdpbmRvd1xuXHRcdFx0aWYgKFxuXHRcdFx0XHROdW1iZXIucGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSgkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKVswXSwgbnVsbCkuaGVpZ2h0LCAxMCkgPlxuXHRcdFx0XHR3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCdvcHRpb24nLCAnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0IC0gMilcblx0XHRcdFx0XHQuZGlhbG9nKCdvcHRpb24nLCAncG9zaXRpb24nLCAndG9wJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnaGVpZ2h0JywgJ2F1dG8nKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctY29udGVudCcpWzBdLnN0eWxlLm1heEhlaWdodCA9IGAke051bWJlci5wYXJzZUludChcblx0XHRcdFx0dGhpcy5oZWlnaHQgLSAzMCxcblx0XHRcdFx0MTBcblx0XHRcdCl9cHhgO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGVsZW1lbnQgbm9kZSwgdXN1YWxseSBmcm9tIHJlbmRlcmluZ1xuXHRcdCAqIGEge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0uXG5cdFx0ICogUmUtZW51bWVyYXRlcyB0aGUgZm9vdGVyIGJ1dHRvbnMsIGJ1dCBsZWF2ZXMgdGhlIGZvb3RlciBsaW5rcyBhcyB0aGV5IGFyZS5cblx0XHQgKiBCZSBzdXJlIHRvIGNhbGwgdGhpcyBhdCBsZWFzdCBvbmNlIGJlZm9yZSB0aGUgZGlhbG9nIGlzIGRpc3BsYXllZC4uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0Q29udGVudChjb250ZW50KSB7XG5cdFx0XHR0aGlzLnB1cmdlQ29udGVudCgpO1xuXHRcdFx0dGhpcy5hZGRDb250ZW50KGNvbnRlbnQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUgdG8gdGhlIGRpYWxvZyBjb250ZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0YWRkQ29udGVudChjb250ZW50KSB7XG5cdFx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cdFx0XHQvLyBsb29rIGZvciBzdWJtaXQgYnV0dG9ucyBpbiB0aGUgY29udGVudCwgaGlkZSB0aGVtLCBhbmQgYWRkIGEgcHJveHkgYnV0dG9uIHRvIHRoZSBidXR0b24gcGFuZVxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJylcblx0XHRcdFx0LmVhY2goKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdFx0XHR2YWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlLnRleHRDb250ZW50KSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS50ZXh0Q29udGVudDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gJ+aPkOS6pCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc05hbWUgPSB2YWx1ZS5jbGFzc05hbWUgfHwgJ3N1Ym1pdEJ1dHRvblByb3h5Jztcblx0XHRcdFx0XHQvLyBoZXJlIGlzIGFuIGluc3RhbmNlIG9mIGNoZWFwIGNvZGluZywgcHJvYmFibHkgYSBtZW1vcnktdXNhZ2UgaGl0IGluIHVzaW5nIGEgY2xvc3VyZSBoZXJlXG5cdFx0XHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzZWxmLmJ1dHRvbnNbc2VsZi5idXR0b25zLmxlbmd0aF0gPSBidXR0b247XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly8gcmVtb3ZlIGFsbCBidXR0b25zIGZyb20gdGhlIGJ1dHRvbiBwYW5lIGFuZCByZS1hZGQgdGhlbVxuXHRcdFx0aWYgKHRoaXMuYnV0dG9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ3dpZGdldCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpXG5cdFx0XHRcdFx0LmVtcHR5KClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuYnV0dG9ucylbMF1cblx0XHRcdFx0XHQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWVtcHR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVswXVxuXHRcdFx0XHRcdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknLCAnZGF0YS1lbXB0eScpOyAvLyB1c2VkIGJ5IENTU1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgYWxsIGNvbnRlbnRzIGZyb20gdGhlIGRpYWxvZywgYmFycmluZyBhbnkgZm9vdGVyIGxpbmtzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRwdXJnZUNvbnRlbnQoKSB7XG5cdFx0XHR0aGlzLmJ1dHRvbnMgPSBbXTtcblx0XHRcdC8vIGRlbGV0ZSBhbGwgYnV0dG9ucyBpbiB0aGUgYnV0dG9ucGFuZVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJykuZW1wdHkoKTtcblx0XHRcdHdoaWxlICh0aGlzLmNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdHRoaXMuY29udGVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBsaW5rIGluIHRoZSBib3R0b20tcmlnaHQgY29ybmVyIG9mIHRoZSBkaWFsb2cuXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGhlbHAgb3IgcG9saWN5IGxpbmtzLlxuXHRcdCAqIEZvciBleGFtcGxlLCBUd2lua2xlJ3MgQ1NEIG1vZHVsZSBhZGRzIGEgbGluayB0byB0aGUgQ1NEIHBvbGljeSBwYWdlLFxuXHRcdCAqIGFzIHdlbGwgYXMgYSBsaW5rIHRvIFR3aW5rbGUncyBkb2N1bWVudGF0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBEaXNwbGF5IHRleHQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2lQYWdlIC0gTGluayB0YXJnZXQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcHJlcD1mYWxzZV0gLSBTZXQgdHJ1ZSB0byBwcmVwZW5kIHJhdGhlciB0aGFuIGFwcGVuZC5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZEZvb3RlckxpbmsodGV4dCwgd2lraVBhZ2UsIHByZXApIHtcblx0XHRcdGNvbnN0ICRmb290ZXJsaW5rcyA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctZm9vdGVybGlua3MnKTtcblx0XHRcdGlmICh0aGlzLmhhc0Zvb3RlckxpbmtzKSB7XG5cdFx0XHRcdGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0YnVsbGV0LnRleHRDb250ZW50ID0gJyBcXHUyMDIyICc7IC8vIFUrMjAyMiBCVUxMRVRcblx0XHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MucHJlcGVuZChidWxsZXQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRmb290ZXJsaW5rcy5hcHBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbXcudXRpbC5nZXRVcmwod2lraVBhZ2UpKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsIHdpa2lQYWdlKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHRcdGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQobGluayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5oYXNGb290ZXJMaW5rcyA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgd2hldGhlciB0aGUgd2luZG93IHNob3VsZCBiZSBtb2RhbCBvciBub3QuIE1vZGFsIGRpYWxvZ3MgY3JlYXRlXG5cdFx0ICogYW4gb3ZlcmxheSBiZWxvdyB0aGUgZGlhbG9nIGJ1dCBhYm92ZSBvdGhlciBwYWdlIGVsZW1lbnRzLiBUaGlzXG5cdFx0ICogbXVzdCBiZSB1c2VkIChpZiBuZWNlc3NhcnkpIGJlZm9yZSBjYWxsaW5nIGRpc3BsYXkoKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW21vZGFsPWZhbHNlXSAtIElmIHNldCB0byB0cnVlLCBvdGhlciBpdGVtcyBvbiB0aGVcblx0XHQgKiBwYWdlIHdpbGwgYmUgZGlzYWJsZWQsIGkuZS4sIGNhbm5vdCBiZSBpbnRlcmFjdGVkIHdpdGguXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRNb2RhbGl0eShtb2RhbCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ21vZGFsJywgbW9kYWwpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgYWxsIGZvb3RlciBidXR0b25zIG9uIGFsbCB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fXMgaW4gdGhlIGN1cnJlbnQgcGFnZS5cblx0ICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIHdpdGggYGZhbHNlYCB3aGVuIHRoZSBidXR0b24ocykgYmVjb21lIGlycmVsZXZhbnQgKGUuZy4ganVzdCBiZWZvcmVcblx0ICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fSBpcyBjYWxsZWQpLlxuXHQgKiBUaGlzIGlzIG5vdCBhbiBpbnN0YW5jZSBtZXRob2Qgc28gdGhhdCBjb25zdW1lcnMgZG9uJ3QgaGF2ZSB0byBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZVxuXHQgKiBvcmlnaW5hbCBgTW9yZWJpdHMuc2ltcGxlV2luZG93YCBvYmplY3Qgc2l0dGluZyBhcm91bmQgc29tZXdoZXJlLiBBbnl3YXksIG1vc3Qgb2YgdGhlIHRpbWVcblx0ICogdGhlcmUgd2lsbCBvbmx5IGJlIG9uZSBgTW9yZWJpdHMuc2ltcGxlV2luZG93YCBvcGVuLCBzbyB0aGlzIHNob3VsZG4ndCBtYXR0ZXIuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0ICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXG5cdCAqL1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cuc2V0QnV0dG9uc0VuYWJsZWQgPSAoZW5hYmxlZCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucyBidXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsICFlbmFibGVkKTtcblx0fTtcbn0pKGpRdWVyeSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0EsSUFBQUEsb0JBQTRCQyxRQUFBLGlCQUFBO0FBQzVC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ICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibW9yZWJpdHMiLCAiJCIsICJNb3JlYml0cyIsICJ3aW5kb3ciLCAibDEwbiIsICJyZWRpcmVjdFRhZ0FsaWFzZXMiLCAic2lnbmF0dXJlVGltZXN0YW1wRm9ybWF0IiwgInN0ciIsICJyZ3hVVEMiLCAicmd4Q1NUIiwgIm1hdGNoIiwgImV4ZWMiLCAibWF0Y2hDU1QiLCAibW9udGgiLCAiZGF0ZSIsICJsb2NhbGVEYXRhIiwgIm1vbnRocyIsICJpbmRleE9mIiwgInVzZXJJc0luR3JvdXAiLCAiZ3JvdXAiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbmNsdWRlcyIsICJ1c2VySXNTeXNvcCIsICJzYW5pdGl6ZUlQdjYiLCAiYWRkcmVzcyIsICJjb25zb2xlIiwgIndhcm4iLCAiaXAiLCAiaXNQYWdlUmVkaXJlY3QiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwYWdlTmFtZU5vcm0iLCAicmVwbGFjZSIsICJwYWdlTmFtZVJlZ2V4IiwgInBhZ2VOYW1lIiwgImZpcnN0Q2hhciIsICJyZW1haW5kZXIiLCAic3RyaW5nIiwgImVzY2FwZVJlZ0V4cCIsICJzbGljZSIsICJUaXRsZSIsICJwaHBDaGFyVG9VcHBlciIsICJ0b0xvd2VyQ2FzZSIsICJjb25jYXQiLCAiY3JlYXRlSHRtbCIsICJpbnB1dCIsICJmcmFnbWVudCIsICJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwgImdlbmVyYXRlQXJyYXkiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiTm9kZSIsICJhcHBlbmRDaGlsZCIsICJfaXRlcmF0b3IyIiwgInBhcnNlSFRNTCIsICJyZW5kZXJXaWtpbGlua3MiLCAiX3N0ZXAyIiwgIm5vZGUiLCAiZXJyIiwgImUiLCAiZiIsICJ0ZXh0IiwgInViIiwgInVuYmluZGVyIiwgInVuYmluZCIsICJjb250ZW50IiwgIl8iLCAidGFyZ2V0IiwgInRleHRfIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlYmluZCIsICJuYW1lc3BhY2VSZWdleCIsICJuYW1lc3BhY2VzIiwgImFsaWFzZXMiLCAicmVnZXgiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJuYW1lIiwgIm51bWJlciIsICJtYXAiLCAiY2hhciIsICJqb2luIiwgInF1aWNrRm9ybSIsICJldmVudCIsICJldmVudFR5cGUiLCAicm9vdCIsICJ0eXBlIiwgInByb3RvdHlwZSIsICJyZW5kZXIiLCAicmV0IiwgIm5hbWVzIiwgImFwcGVuZCIsICJkYXRhIiwgImNoaWxkcyIsICJpZCIsICJjaGlsZCIsICJpbnRlcm5hbFN1Ymdyb3VwSWQiLCAiY3VycmVudE5vZGUiLCAiY29tcHV0ZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJpbklkIiwgImNoaWxkQ29udGFpbmVyIiwgImxhYmVsIiwgImFkbWlub25seSIsICJpIiwgImN1cnJlbnQiLCAic3Vibm9kZSIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzZXRBdHRyaWJ1dGUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJzZWxlY3QiLCAibXVsdGlwbGUiLCAic2l6ZSIsICJkaXNhYmxlZCIsICJsaXN0IiwgInZhbHVlcyIsICJzZWxlY3RlZCIsICJoaWRkZW4iLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3VySWQiLCAiY3VyRGl2IiwgInRvb2x0aXAiLCAiZ2VuZXJhdGVUb29sdGlwIiwgImNoZWNrZWQiLCAic3R5bGUiLCAic3ViZ3JvdXAiLCAidG1wZ3JvdXAiLCAic3ViZ3JvdXBSYXciLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZWwiLCAibmV3RWwiLCAic2hvd24iLCAicGFyZW50Tm9kZSIsICJmb3JtIiwgInJlbW92ZUNoaWxkIiwgInNoaWZ0Q2xpY2tTdXBwb3J0IiwgImNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQiLCAiZ2V0RWxlbWVudHMiLCAicGxhY2Vob2xkZXIiLCAiX2kyIiwgIl9hcnIiLCAiYXR0IiwgIl9pMyIsICJfYXJyMiIsICJfaTQiLCAiX2FycjMiLCAibWluIiwgIm1heCIsICJOdW1iZXIiLCAiUE9TSVRJVkVfSU5GSU5JVFkiLCAibGlzdE5vZGUiLCAibW9yZSIsICJuZXdOb2RlIiwgInN1Ymxpc3QiLCAiYXJlYSIsICJjb3VudGVyIiwgInN0b3BQcm9wYWdhdGlvbiIsICJtb3JlQnV0dG9uIiwgInN1YmxhYmVsIiwgInJlbW92ZSIsICJtYXhsZW5ndGgiLCAiZWxlbSIsICJtb3JlYnV0dG9uIiwgImxpc3Rub2RlIiwgIm5vZGVfIiwgImlucHV0bm9kZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAicmVtb3ZlQnV0dG9uIiwgInJlc3VsdCIsICJsYWJlbEVsZW1lbnQiLCAiY29scyIsICJyb3dzIiwgInJlcXVpcmVkIiwgInJlYWRvbmx5IiwgIkVycm9yIiwgInRvU3RyaW5nIiwgImV4dHJhIiwgIiRkYXRhIiwgInRvb2x0aXBCdXR0b24iLCAidGl0bGUiLCAicG9zaXRpb24iLCAibXkiLCAiYXQiLCAiY29sbGlzaW9uIiwgInRvb2x0aXBDbGFzcyIsICJnZXRJbnB1dERhdGEiLCAiX2l0ZXJhdG9yNSIsICJlbGVtZW50cyIsICJfc3RlcDUiLCAiZmllbGQiLCAiZmllbGROYW1lTm9ybSIsICJkYXRhc2V0IiwgInNpbmdsZSIsICJ2YWwiLCAidHJpbSIsICJmaWVsZE5hbWUiLCAiJGZvcm0iLCAiZXNjYXBlU2VsZWN0b3IiLCAiJGVsZW1lbnRzIiwgImZpbmQiLCAidG9BcnJheSIsICJnZXRDaGVja2JveE9yUmFkaW8iLCAiZWxlbWVudEFycmF5IiwgImZvdW5kIiwgImZpbHRlciIsICJnZXRFbGVtZW50Q29udGFpbmVyIiwgIkhUTUxGaWVsZFNldEVsZW1lbnQiLCAiSFRNTERpdkVsZW1lbnQiLCAiSFRNTEhlYWRpbmdFbGVtZW50IiwgImdldEVsZW1lbnRMYWJlbE9iamVjdCIsICJIVE1MVGV4dEFyZWFFbGVtZW50IiwgImdldEVsZW1lbnRMYWJlbCIsICJmaXJzdENoaWxkIiwgInRleHRDb250ZW50IiwgInNldEVsZW1lbnRMYWJlbCIsICJsYWJlbFRleHQiLCAib3ZlcnJpZGVFbGVtZW50TGFiZWwiLCAidGVtcG9yYXJ5TGFiZWxUZXh0IiwgImhhc0F0dHJpYnV0ZSIsICJyZXNldEVsZW1lbnRMYWJlbCIsICJnZXRBdHRyaWJ1dGUiLCAic2V0RWxlbWVudFZpc2liaWxpdHkiLCAidmlzaWJpbGl0eSIsICJ0b2dnbGUiLCAic2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5IiwgIkhUTUxGb3JtRWxlbWVudCIsICJnZXRDaGVja2VkIiwgInJldHVybkFycmF5IiwgIkhUTUxTZWxlY3RFbGVtZW50IiwgIm9wdGlvbnMiLCAiSFRNTElucHV0RWxlbWVudCIsICJnZXRVbmNoZWNrZWQiLCAiaXNJUHY2QWRkcmVzcyIsICJ0b1VwcGVyQ2FzZSIsICJhYmJyZXZQb3MiLCAiQ0lEUlN0YXJ0IiwgImFkZHJlc3NFbmQiLCAicmVwZWF0IiwgInBhZCIsICJyZXBsYWNlbWVudCIsICJzcGxpdCIsICJpc1JhbmdlIiwgImlzSVBBZGRyZXNzIiwgInZhbGlkQ0lEUiIsICJzdWJuZXQiLCAicGFyc2VJbnQiLCAiZ2V0NjQiLCAiaXB2NiIsICJzdWJuZXRNYXRjaCIsICJpcFJlZ2V4IiwgInRvVXBwZXJDYXNlRmlyc3RDaGFyIiwgInRvTG93ZXJDYXNlRmlyc3RDaGFyIiwgInNwbGl0V2VpZ2h0ZWRCeUtleXMiLCAic3RhcnQiLCAiZW5kIiwgInNraXBsaXN0IiwgImxldmVsIiwgImluaXRpYWwiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJUeXBlRXJyb3IiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiZm9ybWF0UmVhc29uVGV4dCIsICJhZGRTaWciLCAicmVhc29uIiwgInNpZyIsICJzaWdJbmRleCIsICJsYXN0SW5kZXhPZiIsICJmb3JtYXRSZWFzb25Gb3JMb2ciLCAic2FmZVJlcGxhY2UiLCAicGF0dGVybiIsICJpc0luZmluaXR5IiwgImV4cGlyeSIsICJmb3JtYXRUaW1lIiwgInRpbWUiLCAibSIsICJ3Z1VMUyIsICJhcHBlbmRQdW5jdHVhdGlvbiIsICJwdW5jdHVhdGlvbiIsICJzZWFyY2giLCAiYXJyYXkiLCAidW5pcSIsICJhcnIiLCAiaXRlbSIsICJpZHgiLCAiZHVwcyIsICJjaHVuayIsICJudW1DaHVua3MiLCAiTWF0aCIsICJjZWlsIiwgImZyb20iLCAic2VsZWN0MiIsICJtYXRjaGVycyIsICJvcHRncm91cEZ1bGwiLCAicGFyYW1zIiwgIm9yaWdpbmFsTWF0Y2hlciIsICJmbiIsICJkZWZhdWx0cyIsICJtYXRjaGVyIiwgInRlcm0iLCAiY2hpbGRyZW4iLCAid29yZEJlZ2lubmluZyIsICJSZWdFeHAiLCAidGVzdCIsICJoaWdobGlnaHRTZWFyY2hNYXRjaGVzIiwgInNlYXJjaFRlcm0iLCAic2VsZWN0MlNlYXJjaFF1ZXJ5IiwgImxvYWRpbmciLCAiY3NzIiwgInF1ZXJ5SW50ZXJjZXB0b3IiLCAiYXV0b1N0YXJ0IiwgImV2IiwgIndoaWNoIiwgImNsb3Nlc3QiLCAicHJldiIsICJkcm9wZG93biIsICIkc2VhcmNoIiwgInNlbGVjdGlvbiIsICJmb2N1cyIsICJoaXN0b3J5IiwgInByZWZpeCIsICJyYW5kb20iLCAicG9zdGZpeCIsICJyZSIsICJnZXRDYWxsYmFjayIsICJoYXNPd24iLCAic2VsZiIsICJhcmdzIiwgIl90aGlzJF9kIiwgInBhcmFtIiwgImRpZ2l0TWF0Y2giLCAiX2QiLCAiRGF0ZSIsICJSZWZsZWN0IiwgImFwcGx5IiwgIlVUQyIsICJkYXRlUGFydHMiLCAiRnVuY3Rpb24iLCAiYmluZCIsICJpc1ZhbGlkIiwgImxvZyIsICJtb250aHNTaG9ydCIsICJkYXlzIiwgImRheXNTaG9ydCIsICJyZWxhdGl2ZVRpbWVzIiwgInRoaXNEYXkiLCAicHJldkRheSIsICJuZXh0RGF5IiwgInRoaXNXZWVrIiwgInBhc3RXZWVrIiwgIm90aGVyIiwgInVuaXRNYXAiLCAic2Vjb25kcyIsICJtaW51dGVzIiwgImhvdXJzIiwgIndlZWtzIiwgInllYXJzIiwgImlzTmFOIiwgImdldFRpbWUiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJnZXRVVENNb250aE5hbWUiLCAiZ2V0VVRDTW9udGgiLCAiZ2V0VVRDTW9udGhOYW1lQWJicmV2IiwgImdldE1vbnRoTmFtZSIsICJnZXRNb250aCIsICJnZXRNb250aE5hbWVBYmJyZXYiLCAiZ2V0VVRDRGF5TmFtZSIsICJnZXRVVENEYXkiLCAiZ2V0VVRDRGF5TmFtZUFiYnJldiIsICJnZXREYXlOYW1lIiwgImdldERheSIsICJnZXREYXlOYW1lQWJicmV2IiwgImFkZCIsICJ1bml0IiwgIm51bSIsICJ1bml0Tm9ybSIsICJrZXlzIiwgInN1YnRyYWN0IiwgImZvcm1hdCIsICJmb3JtYXRzdHIiLCAiem9uZSIsICJ1ZGF0ZSIsICJnZXRUaW1lem9uZU9mZnNldCIsICJ0b0lTT1N0cmluZyIsICJsZW4iLCAiaDI0IiwgImdldEhvdXJzIiwgImdldE1pbnV0ZXMiLCAiZ2V0U2Vjb25kcyIsICJtcyIsICJnZXRNaWxsaXNlY29uZHMiLCAiRCIsICJnZXREYXRlIiwgIk0iLCAiWSIsICJnZXRGdWxsWWVhciIsICJoMTIiLCAiYW1PclBtIiwgInJlcGxhY2VtZW50TWFwIiwgIkhIIiwgIkgiLCAiaGgiLCAiaCIsICJBIiwgIm1tIiwgInNzIiwgIlNTUyIsICJkZGRkIiwgImRkZCIsICJkIiwgIkREIiwgIk1NTU0iLCAiTU1NIiwgIk1NIiwgIllZWVkiLCAiWVkiLCAiU3RyaW5nIiwgInJhdyIsICJfdGVtcGxhdGVPYmplY3QiLCAiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsICJfdGVtcGxhdGVPYmplY3QyIiwgImNhbGVuZGFyIiwgImRhdGVEaWZmIiwgInNldEhvdXJzIiwgIm1vbnRoSGVhZGVyUmVnZXgiLCAiZ2V0VVRDRnVsbFllYXIiLCAibW9udGhIZWFkZXIiLCAiaGVhZGVyIiwgIl9pdGVyYXRvcjciLCAiZ2V0T3duUHJvcGVydHlOYW1lcyIsICJfc3RlcDciLCAiZnVuYyIsICJ3aWtpIiwgIm51bWJlck9mQWN0aW9uc0xlZnQiLCAibmJyT2ZDaGVja3BvaW50c0xlZnQiLCAiYWN0aW9uQ29tcGxldGVkIiwgIm5vdGljZSIsICJzdGF0dXMiLCAicmVkaXJlY3QiLCAiZm9sbG93UmVkaXJlY3QiLCAic2V0VGltZW91dCIsICJsb2NhdGlvbiIsICJ0aW1lT3V0IiwgIndwQWN0aW9uQ29tcGxldGVkVGltZU91dCIsICJhZGRDaGVja3BvaW50IiwgInJlbW92ZUNoZWNrcG9pbnQiLCAiYXBpIiwgImN1cnJlbnRBY3Rpb24iLCAicXVlcnkiLCAib25TdWNjZXNzIiwgInN0YXR1c0VsZW1lbnQiLCAib25FcnJvciIsICJfdGhpcyRxdWVyeSIsICJhc3NlcnQiLCAiZXJyb3Jmb3JtYXQiLCAidXNlbGFuZyIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAic2V0U3RhdHVzRWxlbWVudCIsICJzdGF0ZWxlbSIsICJmb3JtYXR2ZXJzaW9uIiwgImVycm9yIiwgImFjdGlvbiIsICJ0YWdzIiwgIm1vcmViaXRzV2lraUNoYW5nZVRhZyIsICJwYXJlbnQiLCAicmVzcG9uc2UiLCAicmVzcG9uc2VYTUwiLCAic3RhdHVzVGV4dCIsICJlcnJvckNvZGUiLCAiZXJyb3JUZXh0IiwgImJhZHRva2VuUmV0cnkiLCAic2V0UGFyZW50IiwgInBvc3QiLCAiY2FsbGVyQWpheFBhcmFtZXRlcnMiLCAicXVlcnlTdHJpbmdBcnIiLCAiX2k1IiwgIl9PYmplY3QkZW50cmllczIiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgInF1ZXJ5U3RyaW5nIiwgImFqYXhwYXJhbXMiLCAiY29udGV4dCIsICJ1cmwiLCAid2lraVNjcmlwdCIsICJkYXRhVHlwZSIsICJoZWFkZXJzIiwgIm1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCIsICJhamF4IiwgInRoZW4iLCAib25BUElzdWNjZXNzIiwgImVycm9ycyIsICJjb2RlIiwgImh0bWwiLCAiZXEiLCAiYXR0ciIsICJyZXR1cm5FcnJvciIsICJjYWxsIiwgImluZm8iLCAiRGVmZXJyZWQiLCAicmVzb2x2ZVdpdGgiLCAib25BUElmYWlsdXJlIiwgImVycm9yVGhyb3duIiwgImdldFRva2VuIiwgInRva2VuIiwgInJlamVjdFdpdGgiLCAiZ2V0U3RhdHVzRWxlbWVudCIsICJnZXRFcnJvckNvZGUiLCAiZ2V0RXJyb3JUZXh0IiwgImdldFhNTCIsICJnZXRSZXNwb25zZSIsICJnZXRDYWNoZWRKc29uIiwgInByb3AiLCAidGl0bGVzIiwgInJ2c2xvdHMiLCAicnZwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgImFwaW9iaiIsICJ1bmxpbmsiLCAid2lraXRleHQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiSlNPTiIsICJwYXJzZSIsICJzZXRBcGlVc2VyQWdlbnQiLCAidWEiLCAidG9rZW5BcGkiLCAibWV0YSIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgInBhZ2UiLCAiY3R4IiwgInBhZ2VFeGlzdHMiLCAiZWRpdFN1bW1hcnkiLCAiY2hhbmdlVGFncyIsICJ0ZXN0QWN0aW9ucyIsICJjYWxsYmFja1BhcmFtZXRlcnMiLCAicGFnZVRleHQiLCAiZWRpdE1vZGUiLCAiYXBwZW5kVGV4dCIsICJwcmVwZW5kVGV4dCIsICJuZXdTZWN0aW9uVGV4dCIsICJuZXdTZWN0aW9uVGl0bGUiLCAiY3JlYXRlT3B0aW9uIiwgIm1pbm9yRWRpdCIsICJib3RFZGl0IiwgInBhZ2VTZWN0aW9uIiwgIm1heENvbmZsaWN0UmV0cmllcyIsICJtYXhSZXRyaWVzIiwgImZvbGxvd0Nyb3NzTnNSZWRpcmVjdCIsICJ3YXRjaGxpc3RPcHRpb24iLCAid2F0Y2hsaXN0RXhwaXJ5IiwgImNyZWF0b3IiLCAidGltZXN0YW1wIiwgInJldmVydE9sZElEIiwgIm1vdmVEZXN0aW5hdGlvbiIsICJtb3ZlVGFsa1BhZ2UiLCAibW92ZVN1YnBhZ2VzIiwgIm1vdmVTdXBwcmVzc1JlZGlyZWN0IiwgInByb3RlY3RFZGl0IiwgInByb3RlY3RNb3ZlIiwgInByb3RlY3RDcmVhdGUiLCAicHJvdGVjdENhc2NhZGUiLCAibG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgInBhZ2VMb2FkZWQiLCAiY3NyZlRva2VuIiwgImxvYWRUaW1lIiwgImxhc3RFZGl0VGltZSIsICJwYWdlSUQiLCAiY29udGVudE1vZGVsIiwgInJldmVydEN1cklEIiwgInJldmVydFVzZXIiLCAid2F0Y2hlZCIsICJmdWxseVByb3RlY3RlZCIsICJzdXBwcmVzc1Byb3RlY3RXYXJuaW5nIiwgImNvbmZsaWN0UmV0cmllcyIsICJyZXRyaWVzIiwgIm9uTG9hZFN1Y2Nlc3MiLCAib25Mb2FkRmFpbHVyZSIsICJvblNhdmVTdWNjZXNzIiwgIm9uU2F2ZUZhaWx1cmUiLCAib25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MiLCAib25Mb29rdXBDcmVhdGlvbkZhaWx1cmUiLCAib25Nb3ZlU3VjY2VzcyIsICJvbk1vdmVGYWlsdXJlIiwgIm9uRGVsZXRlU3VjY2VzcyIsICJvbkRlbGV0ZUZhaWx1cmUiLCAib25VbmRlbGV0ZVN1Y2Nlc3MiLCAib25VbmRlbGV0ZUZhaWx1cmUiLCAib25Qcm90ZWN0U3VjY2VzcyIsICJvblByb3RlY3RGYWlsdXJlIiwgImxvYWRRdWVyeSIsICJsb2FkQXBpIiwgInNhdmVBcGkiLCAibG9va3VwQ3JlYXRpb25BcGkiLCAibW92ZUFwaSIsICJtb3ZlUHJvY2Vzc0FwaSIsICJwYXRyb2xBcGkiLCAicGF0cm9sUHJvY2Vzc0FwaSIsICJkZWxldGVBcGkiLCAiZGVsZXRlUHJvY2Vzc0FwaSIsICJ1bmRlbGV0ZUFwaSIsICJ1bmRlbGV0ZVByb2Nlc3NBcGkiLCAicHJvdGVjdEFwaSIsICJwcm90ZWN0UHJvY2Vzc0FwaSIsICJlbXB0eUZ1bmN0aW9uIiwgImxvYWQiLCAib25GYWlsdXJlIiwgImlucHJvcCIsICJpbnRlc3RhY3Rpb25zIiwgImN1cnRpbWVzdGFtcCIsICJydmxpbWl0IiwgInJ2c3RhcnRpZCIsICJyZWRpcmVjdHMiLCAicnZzZWN0aW9uIiwgImZuTG9hZFN1Y2Nlc3MiLCAic2F2ZSIsICJjYW5Vc2VNd1VzZXJUb2tlbiIsICJmbkNhblVzZU13VXNlclRva2VuIiwgImNvbmZpcm0iLCAic3VtbWFyeSIsICJ1c2VyIiwgIndhdGNobGlzdCIsICJmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5IiwgIndhdGNobGlzdGV4cGlyeSIsICJzZWN0aW9uIiwgIm1pbm9yIiwgIm5vdG1pbm9yIiwgImJvdCIsICJhcHBlbmR0ZXh0IiwgInByZXBlbmR0ZXh0IiwgInNlY3Rpb250aXRsZSIsICJ1bmRvIiwgInVuZG9hZnRlciIsICJiYXNldGltZXN0YW1wIiwgInN0YXJ0dGltZXN0YW1wIiwgImZuU2F2ZVN1Y2Nlc3MiLCAiZm5TYXZlRXJyb3IiLCAiZm5BdXRvU2F2ZSIsICJwcmVwZW5kIiwgIm5ld1NlY3Rpb24iLCAiZ2V0UGFnZU5hbWUiLCAiZ2V0UGFnZVRleHQiLCAic2V0UGFnZVRleHQiLCAic2V0QXBwZW5kVGV4dCIsICJzZXRQcmVwZW5kVGV4dCIsICJzZXROZXdTZWN0aW9uVGV4dCIsICJzZXROZXdTZWN0aW9uVGl0bGUiLCAic2V0RWRpdFN1bW1hcnkiLCAic2V0Q2hhbmdlVGFncyIsICJzZXRDcmVhdGVPcHRpb24iLCAic2V0TWlub3JFZGl0IiwgInNldEJvdEVkaXQiLCAic2V0UGFnZVNlY3Rpb24iLCAic2V0TWF4Q29uZmxpY3RSZXRyaWVzIiwgInNldE1heFJldHJpZXMiLCAic2V0V2F0Y2hsaXN0IiwgInNldFdhdGNobGlzdEV4cGlyeSIsICJzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMiLCAic2V0Rm9sbG93UmVkaXJlY3QiLCAic2V0TG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgImZsYWciLCAic2V0TW92ZURlc3RpbmF0aW9uIiwgImRlc3RpbmF0aW9uIiwgInNldE1vdmVUYWxrUGFnZSIsICJzZXRNb3ZlU3VicGFnZXMiLCAic2V0TW92ZVN1cHByZXNzUmVkaXJlY3QiLCAic2V0RWRpdFByb3RlY3Rpb24iLCAic2V0TW92ZVByb3RlY3Rpb24iLCAic2V0Q3JlYXRlUHJvdGVjdGlvbiIsICJzZXRDYXNjYWRpbmdQcm90ZWN0aW9uIiwgInNldE9sZElEIiwgIm9sZElEIiwgImdldEN1cnJlbnRJRCIsICJnZXRSZXZpc2lvblVzZXIiLCAiZ2V0TGFzdEVkaXRUaW1lIiwgInNldENhbGxiYWNrUGFyYW1ldGVycyIsICJnZXRDYWxsYmFja1BhcmFtZXRlcnMiLCAiZXhpc3RzIiwgImdldFBhZ2VJRCIsICJnZXRDb250ZW50TW9kZWwiLCAiZ2V0V2F0Y2hlZCIsICJnZXRMb2FkVGltZSIsICJnZXRDcmVhdG9yIiwgImdldENyZWF0aW9uVGltZXN0YW1wIiwgImNhbkVkaXQiLCAibG9va3VwQ3JlYXRpb24iLCAicnZkaXIiLCAiZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MiLCAicmV2ZXJ0IiwgIm1vdmUiLCAiZm5QcmVmbGlnaHRDaGVja3MiLCAiZm5Qcm9jZXNzTW92ZSIsICJmbk5lZWRUb2tlbkluZm9RdWVyeSIsICJwYXRyb2wiLCAiJGJvZHkiLCAicGF0cm9saHJlZiIsICJyY2lkIiwgImdldFBhcmFtVmFsdWUiLCAiZm5Qcm9jZXNzUGF0cm9sIiwgInBhdHJvbFF1ZXJ5IiwgInJjcHJvcCIsICJyY3RpdGxlIiwgInJjbGltaXQiLCAiZGVsZXRlUGFnZSIsICJmblByb2Nlc3NEZWxldGUiLCAidW5kZWxldGVQYWdlIiwgImZuUHJvY2Vzc1VuZGVsZXRlIiwgInByb3RlY3QiLCAiZm5Qcm9jZXNzUHJvdGVjdCIsICJnZXRQcmVmaXhlZFRleHQiLCAiZWRpdFJlc3RyaWN0aW9uIiwgInBhZ2VvYmoiLCAiZm5DaGVja1BhZ2VOYW1lIiwgInJldiIsICJtaXNzaW5nIiwgInBhZ2VpZCIsICJjb250ZW50bW9kZWwiLCAiZWRpdFByb3QiLCAicHJvdGVjdGlvbiIsICJmaW5kTGFzdCIsICJwciIsICJsYXN0cmV2aWQiLCAidGVzdGFjdGlvbnMiLCAiYWN0aW9ucyIsICJfaTYiLCAiX09iamVjdCRrZXlzIiwgInJldmlkIiwgInVzZXJoaWRkZW4iLCAiaW52YWxpZCIsICJyZXNvbHZlZE5hbWUiLCAib3JpZ05zIiwgIm5hbWVzcGFjZSIsICJuZXdOcyIsICJuZXdFeHBpcnkiLCAicmVsIiwgImVkaXQiLCAibGluayIsICJjYXB0Y2hhIiwgInB1cmdlUXVlcnkiLCAicHVyZ2VBcGkiLCAic2xlZXAiLCAiZXJyb3JEYXRhIiwgImFidXNlZmlsdGVyIiwgImRlc2NyaXB0aW9uIiwgInNwYW0iLCAic3BhbWJsYWNrbGlzdCIsICJtYXRjaGVzIiwgImlzVGV4dFJlZGlyZWN0IiwgInNvbWUiLCAidGFnIiwgImZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgInJldnMiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiZm5Qcm9jZXNzQ2hlY2tzIiwgImFjdGlvbk1pc3NpbmciLCAicHJvdGVjdE1pc3NpbmciLCAic2FsdE1pc3NpbmciLCAiZWRpdHByb3QiLCAicGFnZVRpdGxlIiwgInRvIiwgIm1vdmV0YWxrIiwgIm1vdmVzdWJwYWdlcyIsICJub3JlZGlyZWN0IiwgInJlY2VudGNoYW5nZXMiLCAidW5wYXRyb2xsZWQiLCAicGF0cm9sU3RhdCIsICJmblByb2Nlc3NEZWxldGVFcnJvciIsICJmblByb2Nlc3NVbmRlbGV0ZUVycm9yIiwgInBycyIsICJtb3ZlcHJvdCIsICJjcmVhdGVwcm90IiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgInNvdXJjZSIsICJjYXNjYWRlIiwgInByb3RlY3Rpb25zIiwgImV4cGlyeXMiLCAibWlsbGlzZWNvbmRzIiwgImRlZmVycmVkIiwgInJlc29sdmUiLCAicHJldmlldyIsICJwcmV2aWV3Ym94IiwgImFkZENsYXNzIiwgImhpZGUiLCAiYmVnaW5SZW5kZXIiLCAic2VjdGlvblRpdGxlIiwgInNob3ciLCAic3RhdHVzc3BhbiIsICJpbml0IiwgInBzdCIsICJkaXNhYmxlbGltaXRyZXBvcnQiLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgInJlbmRlckFwaSIsICJmblJlbmRlclN1Y2Nlc3MiLCAiaW5uZXJIVE1MIiwgImxvYWRlciIsICJtb2R1bGVzdHlsZXMiLCAibW9kdWxlcyIsICJjbG9zZVByZXZpZXciLCAiZW1wdHkiLCAicGFyc2VUZW1wbGF0ZSIsICJjb3VudCIsICJ1bm5hbWVkIiwgImVxdWFscyIsICJwYXJhbWV0ZXJzIiwgImtleSIsICJmaW5kUGFyYW0iLCAiZmluYWwiLCAidGVzdDMiLCAicG9wIiwgInRlc3QyIiwgImNoYXJBdCIsICJyZW1vdmVMaW5rIiwgImxpbmtUYXJnZXQiLCAibXdUaXRsZSIsICJuZXdGcm9tVGV4dCIsICJuYW1lc3BhY2VJRCIsICJnZXROYW1lc3BhY2VJZCIsICJnZXRNYWluVGV4dCIsICJsaW5rUmVnZXhTdHJpbmciLCAiaXNGaWxlT3JDYXRlZ29yeSIsICJjb2xvbiIsICJzaW1wbGVMaW5rUmVnZXgiLCAicGlwZWRMaW5rUmVnZXgiLCAiY29tbWVudE91dEltYWdlIiwgImltYWdlIiwgImltYWdlUmVnZXhTdHJpbmciLCAibGlua3NSZWdleCIsICJhbGxMaW5rcyIsICJfaXRlcmF0b3IwIiwgIl9zdGVwMCIsICJhbGxMaW5rIiwgImdhbGxlcnlJbWFnZVJlZ2V4IiwgImZyZWVJbWFnZVJlZ2V4IiwgImFkZFRvSW1hZ2VDb21tZW50IiwgIl9pdGVyYXRvcjEiLCAiX3N0ZXAxIiwgImdhbGxlcnlSZWdleCIsICJuZXd0ZXh0IiwgInJlbW92ZVRlbXBsYXRlIiwgInRlbXBsYXRlIiwgInRlbXBsYXRlUmVnZXhTdHJpbmciLCAiYWxsVGVtcGxhdGVzIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAiYWxsVGVtcGxhdGUiLCAiaW5zZXJ0QWZ0ZXJUZW1wbGF0ZXMiLCAiZmxhZ3MiLCAicHJlUmVnZXgiLCAiZ2V0VGV4dCIsICJ1c2Vyc3BhY2VMb2dnZXIiLCAibG9nUGFnZU5hbWUiLCAiaW5pdGlhbFRleHQiLCAiaGVhZGVyTGV2ZWwiLCAibG9nVGV4dCIsICJzdW1tYXJ5VGV4dCIsICJkZWYiLCAicmVqZWN0IiwgInN0YXQiLCAidGV4dFJhdyIsICJnZW5lcmF0ZSIsICJ1cGRhdGUiLCAiRWxlbWVudCIsICJoYXNDaGlsZE5vZGVzIiwgImVycm9yRXZlbnQiLCAiaGFuZGxlciIsICJzdGF0UmF3IiwgImxpbmtlZCIsICJwcmludFVzZXJUZXh0IiwgImNvbW1lbnRzIiwgIm1lc3NhZ2UiLCAicCIsICJkaXYiLCAibWFyZ2luVG9wIiwgIndoaXRlU3BhY2UiLCAiaHRtbE5vZGUiLCAiY29sb3IiLCAialF1ZXJ5U2VsZWN0b3IiLCAialF1ZXJ5Q29udGV4dCIsICJsYXN0Q2hlY2tib3giLCAiY2xpY2tIYW5kbGVyIiwgImNsaWNrSGFuZGxlcjIiLCAidGhpc0NiIiwgInNoaWZ0S2V5IiwgImNicyIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAiZW5kU3RhdGUiLCAiZmluaXNoIiwgImNsaWNrIiwgIm9uIiwgImJhdGNoT3BlcmF0aW9uIiwgInBhZ2VMaXN0IiwgImNodW5rU2l6ZSIsICJwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyIsICJ3b3JrZXIiLCAicG9zdEZpbmlzaCIsICJjb3VudFN0YXJ0ZWQiLCAiY291bnRGaW5pc2hlZCIsICJjb3VudEZpbmlzaGVkU3VjY2VzcyIsICJjdXJyZW50Q2h1bmtJbmRleCIsICJwYWdlQ2h1bmtzIiwgInJ1bm5pbmciLCAic2V0UGFnZUxpc3QiLCAic2V0T3B0aW9uIiwgIm9wdGlvbk5hbWUiLCAib3B0aW9uVmFsdWUiLCAicnVuIiwgInRvdGFsIiwgImZuU3RhcnROZXdDaHVuayIsICJ3b3JrZXJTdWNjZXNzIiwgImFyZyIsICJmbkRvbmVPbmUiLCAid29ya2VyRmFpbHVyZSIsICJ0aGlzUHJveHkiLCAiX2l0ZXJhdG9yMTEiLCAiX3N0ZXAxMSIsICJwcm9ncmVzcyIsICJyb3VuZCIsICJmbG9vciIsICJzdGF0dXNTdHJpbmciLCAic2ltcGxlV2luZG93IiwgIndpZHRoIiwgImhlaWdodCIsICJkaWFsb2ciLCAiYXV0b09wZW4iLCAiYnV0dG9ucyIsICJQbGFjZWhvbGRlciBidXR0b24iLCAiZGlhbG9nQ2xhc3MiLCAiaW5uZXJXaWR0aCIsICJjbG9zZSIsICJyZXNpemVTdGFydCIsICJzY3JvbGxib3giLCAibWF4SGVpZ2h0IiwgInJlc2l6ZVN0b3AiLCAicmVzaXplIiwgIiR3aWRnZXQiLCAiZWFjaCIsICJidXR0b25zcGFuIiwgImxpbmtzc3BhbiIsICJyZXNpemFibGUiLCAiaGFzRm9vdGVyTGlua3MiLCAic2NyaXB0TmFtZSIsICJwcmV2ZW50RGVmYXVsdCIsICJkaXNwbGF5IiwgInNjcmlwdG5hbWVzcGFuIiwgInNldHVwVG9vbHRpcHMiLCAicGciLCAiZGlmZiIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJzZXRIZWlnaHQiLCAic2V0VGl0bGUiLCAic2V0U2NyaXB0TmFtZSIsICJzZXRXaWR0aCIsICJnZXRDb21wdXRlZFN0eWxlIiwgImlubmVySGVpZ2h0IiwgInNldENvbnRlbnQiLCAicHVyZ2VDb250ZW50IiwgImFkZENvbnRlbnQiLCAiYnV0dG9uIiwgImFkZEZvb3RlckxpbmsiLCAid2lraVBhZ2UiLCAicHJlcCIsICIkZm9vdGVybGlua3MiLCAiYnVsbGV0IiwgInNldE1vZGFsaXR5IiwgIm1vZGFsIiwgInNldEJ1dHRvbnNFbmFibGVkIiwgImVuYWJsZWQiLCAialF1ZXJ5Il0KfQo=
