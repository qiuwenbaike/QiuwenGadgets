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
//! src/morebits/morebits.js
var import_ext_gadget = require("ext.gadget.Util");
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
    const $body = $("body");
    return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || $body.find(".box-RfD").length || $body.find(".box-Redirect_category_shell").length);
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
      if (!target) {
        target = text_;
      }
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
                  if (!newEl.type) {
                    newEl.type = data.type;
                  }
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
    if (!childContainer) {
      childContainer = node;
    }
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
      if (abbrevPos > -1) {
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
     * @throws If the `start` and `end` strings aren't of the same length.
     * @throws If `skiplist` isn't an array or string
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
  Morebits.array = {
    /**
     * Remove duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with duplicates removed.
     * @throws When provided a non-array.
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
     * @throws When provided a non-array.
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
     * @throws When provided a non-array.
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
      if (idx < 0) {
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
     * @throws If either `prefix` or `postfix` is missing.
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
    if (!this._d) {
      this._d = new (Function.prototype.bind.apply(Date, [Date, ...(0, import_ext_gadget.generateArray)(args)]))();
    }
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
     * @throws If invalid or unsupported unit is given.
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
     * @throws If invalid or unsupported unit is given.
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
          this.errorText = statusText + window.wgULS("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + window.wgULS("”。", "」。");
          return this.returnError();
        }
      );
    },
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
    const tokenApi = new Morebits.wiki.api(window.wgULS("获取令牌", "取得權杖"), {
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
    if (!status) {
      status = window.wgULS("打开页面“", "打開頁面「") + pageName + window.wgULS("”", "」");
    }
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
      ctx.loadApi = new Morebits.wiki.api(window.wgULS("抓取页面……", "抓取頁面……"), ctx.loadQuery, fnLoadSuccess, ctx.statusElement, ctx.onLoadFailure);
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
      if (ctx.fullyProtected && !ctx.suppressProtectWarning && !confirm(ctx.fullyProtected === "infinity" ? window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（到期：", "」（到期：") + new Morebits.date(ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(window.wgULS("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
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
      ctx.saveApi = new Morebits.wiki.api(window.wgULS("保存页面……", "儲存頁面……"), query, fnSaveSuccess, ctx.statusElement, fnSaveError);
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
      ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("抓取页面创建者信息", "抓取頁面建立者資訊"), query, fnLookupCreationSuccess, ctx.statusElement, ctx.onLookupCreationFailure);
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
        ctx.moveApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessMove, ctx.statusElement, ctx.onMoveFailure);
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
        ctx.patrolApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), patrolQuery, fnProcessPatrol);
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
        ctx.deleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessDelete, ctx.statusElement, ctx.onDeleteFailure);
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
        ctx.undeleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessUndelete, ctx.statusElement, ctx.onUndeleteFailure);
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
      ctx.protectApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessProtect, ctx.statusElement, ctx.onProtectFailure);
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
        ctx.statusElement.error(window.wgULS("未能获取编辑令牌。", "未能取得編輯權杖。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
      if (!ctx.loadTime) {
        ctx.statusElement.error(window.wgULS("未能获取当前时间戳。", "未能取得當前時間戳。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.contentModel = page.contentmodel;
      ctx.watched = page.watchlistexpiry || page.watched;
      if (Morebits.userIsSysop) {
        const editProt = page.protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
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
          ctx.statusElement.error(window.wgULS("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
          ctx.onLoadFailure(this);
          return;
        }
        ctx.revertUser = rev && rev.user;
        if (!ctx.revertUser) {
          if (rev && rev.userhidden) {
            ctx.revertUser = window.wgULS("<用户名已隐藏>", "<使用者名稱已隱藏>");
          } else {
            ctx.statusElement.error(window.wgULS("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
            ctx.onLoadFailure(this);
            return;
          }
        }
        ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat(window.wgULS("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
      }
      ctx.pageLoaded = true;
      ctx.onLoadSuccess(this);
    };
    const fnCheckPageName = function(response, onFailure) {
      if (!onFailure) {
        onFailure = emptyFunction;
      }
      const page = response.pages && response.pages[0];
      if (page) {
        if (page.invalid) {
          ctx.statusElement.error(window.wgULS("标题不合法：", "標題不合法：".concat(ctx.pageName)));
          onFailure(this);
          return false;
        }
        const resolvedName = page.title;
        if (response.redirects) {
          const origNs = new mw.Title(ctx.pageName).namespace;
          const newNs = new mw.Title(resolvedName).namespace;
          if (origNs !== newNs && !ctx.followCrossNsRedirect) {
            ctx.statusElement.error(ctx.pageName + window.wgULS("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + window.wgULS("，略过", "，略過"));
            onFailure(this);
            return false;
          }
          new Morebits.status(window.wgULS("信息", "資訊"), window.wgULS("从 ", "從 ") + ctx.pageName + window.wgULS(" 重定向到 ", " 重新導向到 ") + resolvedName);
        }
        ctx.pageName = resolvedName;
      } else {
        ctx.statusElement.error(window.wgULS("不能解析页面的重定向：", "不能解析頁面的重新導向：") + ctx.pageName);
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
        ctx.statusElement.error(window.wgULS("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
      } else {
        ctx.statusElement.error(window.wgULS("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
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
        const purgeApi = new Morebits.wiki.api(window.wgULS("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
          --Morebits.wiki.numberOfActionsLeft;
          ctx.statusElement.info(window.wgULS("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
          if (fnCanUseMwUserToken("edit")) {
            ctx.saveApi.post();
          } else {
            ctx.loadApi.post();
          }
        }, ctx.statusElement);
        purgeApi.post();
      } else if ((errorCode === null || errorCode === void 0) && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
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
            ctx.statusElement.error(window.wgULS("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
            break;
          case "abusefilter-disallowed":
            ctx.statusElement.error(window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + window.wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 Wikipedia:防滥用过滤器/错误报告 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Wikipedia:防濫用過濾器/錯誤報告 提報。"));
            break;
          case "abusefilter-warning":
            ctx.statusElement.error([window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, window.wgULS("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
            break;
          case "spamblacklist": {
            const [spam] = errorData.spamblacklist.matches;
            ctx.statusElement.error(window.wgULS("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + window.wgULS(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
            break;
          }
          default:
            ctx.statusElement.error(window.wgULS("不能保存修改：", "不能儲存修改：") + ctx.saveApi.getErrorText());
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
        ctx.statusElement.error(window.wgULS("无法找到", "無法找到") + ctx.pageName + window.wgULS("的任何修订版本", "的任何修訂版本"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
        ctx.creator = rev.user;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.timestamp = rev.timestamp;
        if (!ctx.timestamp) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
        ctx.onLookupCreationSuccess(this);
      } else {
        ctx.lookupCreationApi.query.rvlimit = 50;
        ctx.lookupCreationApi.query.titles = ctx.pageName;
        ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("获取页面创建信息", "取得頁面建立資訊"), ctx.lookupCreationApi.query, fnLookupNonRedirectCreator, ctx.statusElement, ctx.onLookupCreationFailure);
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
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
      }
      if (!ctx.timestamp) {
        ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
      ctx.onLookupCreationSuccess(this);
    };
    const fnPreflightChecks = function(action, onFailure) {
      if (!Morebits.userIsSysop && action !== "move") {
        ctx.statusElement.error(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
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
        ctx.statusElement.error("".concat(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : window.wgULS("已经", "已經")), "存在"));
        onFailure(this);
        return false;
      }
      let editprot;
      if (action === "undelete") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "create" && pr.level === "sysop";
        }).pop();
      } else if (action === "delete" || action === "move") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
      }
      if (editprot && !ctx.suppressProtectWarning && !confirm(window.wgULS("您即将对全保护页面“", "您即將對全保護頁面「") + ctx.pageName + (editprot.expiry === "infinity" ? window.wgULS("”（永久）", "」（永久）") : "".concat(window.wgULS("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + window.wgULS("”进行“", "」進行「") + action + window.wgULS("”操作", "」操作") + window.wgULS("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
        onFailure(this);
        return false;
      }
      if (!response.tokens.csrftoken) {
        ctx.statusElement.error(window.wgULS("无法获取令牌。", "無法取得權杖。"));
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
      ctx.moveProcessApi = new Morebits.wiki.api(window.wgULS("移动页面……", "移動頁面……"), query, ctx.onMoveSuccess, ctx.statusElement, ctx.onMoveFailure);
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
      const patrolStat = new Morebits.status(window.wgULS("标记页面为已巡查", "標記頁面為已巡查"));
      ctx.patrolProcessApi = new Morebits.wiki.api(window.wgULS("巡查页面……", "巡查頁面……"), query, null, patrolStat);
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
      ctx.deleteProcessApi = new Morebits.wiki.api(window.wgULS("删除页面……", "刪除頁面……"), query, ctx.onDeleteSuccess, ctx.statusElement, fnProcessDeleteError);
      ctx.deleteProcessApi.setParent(this);
      ctx.deleteProcessApi.post();
    };
    const fnProcessDeleteError = function() {
      const errorCode = ctx.deleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError" && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        ctx.deleteProcessApi.post();
      } else if (errorCode === "missingtitle") {
        ctx.statusElement.error(window.wgULS("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法删除页面：", "無法刪除頁面：") + ctx.deleteProcessApi.getErrorText());
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
      ctx.undeleteProcessApi = new Morebits.wiki.api(window.wgULS("还原页面……", "還原頁面……"), query, ctx.onUndeleteSuccess, ctx.statusElement, fnProcessUndeleteError);
      ctx.undeleteProcessApi.setParent(this);
      ctx.undeleteProcessApi.post();
    };
    const fnProcessUndeleteError = function() {
      const errorCode = ctx.undeleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError") {
        if (ctx.retries++ < ctx.maxRetries) {
          ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
          --Morebits.wiki.numberOfActionsLeft;
          ctx.undeleteProcessApi.post();
        } else {
          ctx.statusElement.error(window.wgULS("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
          if (ctx.onUndeleteFailure) {
            ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
          }
        }
      } else if (errorCode === "cantundelete") {
        ctx.statusElement.error(window.wgULS("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法还原页面：", "無法還原頁面：") + ctx.undeleteProcessApi.getErrorText());
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
        if ((!ctx.protectEdit || ctx.protectEdit.level !== "sysop" || !ctx.protectMove || ctx.protectMove.level !== "sysop") && !confirm(window.wgULS("您已对“", "您已對「") + ctx.pageName + window.wgULS("”启用了连锁保护", "」啟用了連鎖保護") + window.wgULS("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + window.wgULS("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
          ctx.statusElement.error(window.wgULS("连锁保护已取消。", "連鎖保護已取消。"));
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
      ctx.protectProcessApi = new Morebits.wiki.api(window.wgULS("保护页面……", "保護頁面……"), query, ctx.onProtectSuccess, ctx.statusElement, ctx.onProtectFailure);
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
      const unbinder = new Morebits.unbinder(this.text);
      unbinder.unbind("<!--", "-->");
      reason = reason ? "".concat(reason, ": ") : "";
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, "[[", "]]");
      var _iterator10 = _createForOfIteratorHelper(allLinks), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const allLink = _step10.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
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
      var _iterator11 = _createForOfIteratorHelper(allLinks), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          let replacement = _step11.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
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
      var _iterator12 = _createForOfIteratorHelper(allTemplates), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          const allTemplate = _step12.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
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
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), window.wgULS("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
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
        ctx.statusElement.error(window.wgULS("批量操作已在运行", "批次操作已在執行"));
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
        ctx.statusElement.info(window.wgULS("没有指定页面", "沒有指定頁面"));
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
      var _iterator13 = _createForOfIteratorHelper(chunk), _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
          const page = _step13.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
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
        ctx.statusElement.warn("".concat(window.wgULS("完成（多执行了", "完成（多執行了") + (ctx.countFinished - total), "次）"));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL21vcmViaXRzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuLyohIFR3aW5rbGUuanMgLSBtb3JlYml0cy5qcyAqL1xuXG4vKipcbiAqIEEgbGlicmFyeSBmdWxsIG9mIGxvdHMgb2YgZ29vZG5lc3MgZm9yIHVzZXIgc2NyaXB0cyBvbiBNZWRpYVdpa2kgd2lraXMuXG4gKlxuICogVGhlIGhpZ2hsaWdodHMgaW5jbHVkZTpcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSAtIG1ha2UgY2FsbHMgdG8gdGhlIE1lZGlhV2lraSBBUElcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gLSBtb2RpZnkgcGFnZXMgb24gdGhlIHdpa2kgKGVkaXQsIHJldmVydCwgZGVsZXRlLCBldGMuKVxuICogLSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gLSBlbmhhbmNlZCBkYXRlIG9iamVjdCBwcm9jZXNzaW5nLCBzb3J0IG9mIGEgbGlnaHQgbW9tZW50LmpzXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IC0gZ2VuZXJhdGUgcXVpY2sgSFRNTCBmb3JtcyBvbiB0aGUgZmx5XG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IC0gYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkgRGlhbG9nIHdpdGggYSBjdXN0b20gbG9vayBhbmQgZXh0cmEgZmVhdHVyZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gLSBhIHJvdWdoLWFuZC1yZWFkeSBzdGF0dXMgbWVzc2FnZSBkaXNwbGF5ZXIsIHVzZWQgYnkgdGhlIE1vcmViaXRzLndpa2kgY2xhc3Nlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHR9IC0gdXRpbGl0aWVzIGZvciBkZWFsaW5nIHdpdGggd2lraXRleHRcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0cmluZ30gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzXG4gKiAtIHtAbGluayBNb3JlYml0cy5hcnJheX0gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBhcnJheXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmlwfSAtIHV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogLSBUaGUgd2hvbGUgdGhpbmcgcmVsaWVzIG9uIGpRdWVyeS4gIEJ1dCBtb3N0IHdpa2lzIHNob3VsZCBwcm92aWRlIHRoaXMgYnkgZGVmYXVsdC5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0sIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9LCBhbmQge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gcmVseSBvbiB0aGUgXCJtb3JlYml0cy5jc3NcIiBmaWxlIGZvciB0aGVpciBzdHlsaW5nLlxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmQge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gdG9vbHRpcHMgcmVseSBvbiBqUXVlcnkgVUkgRGlhbG9nIChmcm9tIFJlc291cmNlTG9hZGVyIG1vZHVsZSBuYW1lICdqcXVlcnkudWknKS5cbiAqIC0gVG8gY3JlYXRlIGEgZ2FkZ2V0IGJhc2VkIG9uIG1vcmViaXRzLmpzLCB1c2UgdGhpcyBzeW50YXggaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqR2FkZ2V0TmFtZVtSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aV18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzfEdhZGdldE5hbWUuanNgXG4gKiAtIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gY29uZmlndXJlIG1vcmViaXRzLmpzIGFzIGEgaGlkZGVuIGdhZGdldCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCptb3JlYml0c1tSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aXxoaWRkZW5dfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc2BcbiAqICAgICBhbmQgdGhlbiBsb2FkIGV4dC5nYWRnZXQubW9yZWJpdHMgYXMgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBuZXcgZ2FkZ2V0LlxuICpcbiAqIEFsbCB0aGUgc3R1ZmYgaGVyZSB3b3JrcyBvbiBhbGwgYnJvd3NlcnMgZm9yIHdoaWNoIE1lZGlhV2lraSBwcm92aWRlcyBKYXZhU2NyaXB0IHN1cHBvcnQuXG4gKlxuICogVGhpcyBsaWJyYXJ5IGlzIG1haW50YWluZWQgYnkgdGhlIG1haW50YWluZXJzIG9mIFR3aW5rbGUuXG4gKiBGb3IgcXVlcmllcywgc3VnZ2VzdGlvbnMsIGhlbHAsIGV0Yy4sIGhlYWQgdG8gW0hlbHA6VHdpbmtsZV0oaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9IOlRXKS5cbiAqIFRoZSBsYXRlc3QgZGV2ZWxvcG1lbnQgc291cmNlIGlzIGF2YWlsYWJsZSBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL3R3aW5rbGUvYmxvYi9tYXN0ZXIvbW9yZWJpdHMuanN8R2l0SHVifS5cbiAqXG4gKiBAcGFyYW0ge0pRdWVyeX0gJFxuICogQG5hbWVzcGFjZSBNb3JlYml0c1xuICovXG5pbXBvcnQgJy4vbW9yZWJpdHMubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBtb3JlYml0cygkKSB7XG5cdC8vIFdyYXAgZW50aXJlIGZpbGUgd2l0aCBhbm9ueW1vdXMgZnVuY3Rpb25cblx0LyoqIEBsZW5kcyBNb3JlYml0cyAqL1xuXHRjb25zdCBNb3JlYml0cyA9IHt9O1xuXHR3aW5kb3cuTW9yZWJpdHMgPSBNb3JlYml0czsgLy8gYWxsb3cgZ2xvYmFsIGFjY2Vzc1xuXHQvLyBObyBNb3JlYml0cy5pMThuIGF0IHRoaXMgdGltZVxuXHQvKipcblx0ICogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmwxMG4gPSB7XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgYWxpYXNlcyBmb3IgXCJyZWRpcmVjdFwiIG1hZ2ljIHdvcmQuXG5cdFx0ICogQ2hlY2sgdXNpbmcgYXBpLnBocD9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mbWV0YT1zaXRlaW5mbyZmb3JtYXR2ZXJzaW9uPTImc2lwcm9wPW1hZ2ljd29yZHNcblx0XHQgKi9cblx0XHRyZWRpcmVjdFRhZ0FsaWFzZXM6IFsnI1JFRElSRUNUJywgJyPph43lrprlkJEnXSxcblx0XHQvKipcblx0XHQgKiBUYWtlcyBhIHN0cmluZyBhcyBhcmd1bWVudCBhbmQgY2hlY2tzIGlmIGl0IGlzIGEgdGltZXN0YW1wIG9yIG5vdFxuXHRcdCAqIElmIG5vdCwgaXQgcmV0dXJucyBudWxsLiBJZiB5ZXMsIGl0IHJldHVybnMgYW4gYXJyYXkgb2YgaW50ZWdlcnNcblx0XHQgKiBpbiB0aGUgZm9ybWF0IFt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmRdXG5cdFx0ICogd2hpY2ggY2FuIGJlIHBhc3NlZCB0byBEYXRlLlVUQygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge251bWJlcltdIHwgbnVsbH1cblx0XHQgKi9cblx0XHRzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQ6IChzdHIpID0+IHtcblx0XHRcdGNvbnN0IHJneFVUQyA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoVVRDXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChVVEMpXG5cdFx0XHRjb25zdCByZ3hDU1QgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKENTVFxcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoQ1NUKVxuXHRcdFx0Y29uc3QgbWF0Y2ggPSByZ3hVVEMuZXhlYyhzdHIpIHx8IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRjb25zdCBtYXRjaENTVCA9IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbW9udGggPSBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzLmluZGV4T2YobWF0Y2hbNF0pO1xuXHRcdFx0aWYgKG1vbnRoID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIC4uLi4uIHllYXIgLi4uLiBtb250aCAuLi4gZGF0ZSAuLi4uIGhvdXIgLi4uIG1pbnV0ZVxuXHRcdFx0cmV0dXJuIG1hdGNoQ1NUXG5cdFx0XHRcdD8gW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSAtIDgsIG1hdGNoWzVdXVxuXHRcdFx0XHQ6IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0sIG1hdGNoWzVdXTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwIC0gZS5nLiBgc3lzb3BgLCBgYXV0b2NvbmZpcm1lZGAsIGV0Yy5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNJbkdyb3VwID0gKGdyb3VwKSA9PiB7XG5cdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpLmluY2x1ZGVzKGdyb3VwKSB8fCBtdy5jb25maWcuZ2V0KCd3Z0dsb2JhbEdyb3VwcycpLmluY2x1ZGVzKGdyb3VwKTtcblx0fTtcblx0LyoqXG5cdCAqIEhhcmRjb2RlcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgc3lzb3AsIHVzZWQgYSBsb3QuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzU3lzb3AgPVxuXHRcdE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N5c29wJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3FpdXdlbicpO1xuXHQvKipcblx0ICogRGVwcmVjYXRlZCBhcyBvZiBGZWJydWFyeSAyMDIxLCB1c2Uge0BsaW5rIE1vcmViaXRzLmlwLnNhbml0aXplSVB2Nn0uXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnNhbml0aXplSVB2NiA9IChhZGRyZXNzKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMuc2FuaXRpemVJUHY2IHdhcyByZW5hbWVkIHRvIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NiBpbiBGZWJydWFyeSAyMDIxLCBwbGVhc2UgdXNlIHRoYXQgaW5zdGVhZCdcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGFnZSBpcyBhIHJlZGlyZWN0IG9yIHNvZnQgcmVkaXJlY3QuIEZhaWxzXG5cdCAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG5cdCAqIGRldGVjdCBNb2R1bGU6UmZELCB3aXRoIHRoZSBzYW1lIGZhaWx1cmUgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdHJldHVybiAhIShcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnSXNSZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHJlZGlyZWN0JykgfHxcblx0XHRcdCRib2R5LmZpbmQoJy5ib3gtUmZEJykubGVuZ3RoIHx8XG5cdFx0XHQkYm9keS5maW5kKCcuYm94LVJlZGlyZWN0X2NhdGVnb3J5X3NoZWxsJykubGVuZ3RoXG5cdFx0KTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyBhIG5vcm1hbGl6ZWQgKHVuZGVyc2NvcmVzIGNvbnZlcnRlZCB0byBzcGFjZXMpIHZlcnNpb24gb2YgdGhlXG5cdCAqIGB3Z1BhZ2VOYW1lYCB2YXJpYWJsZS5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lTm9ybSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhIHBhZ2UgbmFtZS4gIEFjY291bnRzIGZvclxuXHQgKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG5cdCAqIGNoYXJhY3RlcnMgYmVpbmcgZXNjYXBlZC4gIFNlZSBhbHNvIHtAbGluayBNb3JlYml0cy5uYW1lc3BhY2VSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gLSBGb3IgYSBwYWdlIG5hbWUgYEZvbyBiYXJgLCByZXR1cm5zIHRoZSBzdHJpbmcgYFtGZl1vb1tfIF1iYXJgLlxuXHQgKi9cblx0TW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdGlmIChwYWdlTmFtZSA9PT0gJycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgW2ZpcnN0Q2hhcl0gPSBwYWdlTmFtZTtcblx0XHRjb25zdCByZW1haW5kZXIgPSBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKHBhZ2VOYW1lLnNsaWNlKDEpKTtcblx0XHRpZiAobXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKSAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChmaXJzdENoYXIpICsgcmVtYWluZGVyO1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuXG5cdCAqIFdpa2lsaW5rIHN5bnRheCAoYFtbLi4uXV1gKSBpcyB0cmFuc2Zvcm1lZCBpbnRvIEhUTUwgYW5jaG9yLlxuXHQgKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG5cdCAqXG5cdCAqIEBpbnRlcm5hbFxuXHQgKiBAcGFyYW0ge3N0cmluZ3xOb2RlfChzdHJpbmd8Tm9kZSlbXX0gaW5wdXRcblx0ICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sID0gKGlucHV0KSA9PiB7XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH1cblx0XHRpbnB1dCA9IGdlbmVyYXRlQXJyYXkoaW5wdXQpO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mICQucGFyc2VIVE1MKE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHdpa2lsaW5rcyB0byBIVE1MIGFuY2hvciB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0gdGV4dFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB1YiA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0ZXh0KTtcblx0XHQvLyBEb24ndCBjb252ZXJ0IHdpa2lsaW5rcyB3aXRoaW4gY29kZSB0YWdzIGFzIHRoZXkncmUgdXNlZCBmb3IgZGlzcGxheWluZyB3aWtpLWNvZGVcblx0XHR1Yi51bmJpbmQoJzxjb2RlPicsICc8L2NvZGU+Jyk7XG5cdFx0dWIuY29udGVudCA9IHViLmNvbnRlbnQucmVwbGFjZSgvXFxbXFxbOj8oPzooW158XFxdXSs/KVxcfCk/KFteXFxdfF0rPylcXF1cXF0vZywgKF8sIHRhcmdldCwgdGV4dF8pID0+IHtcblx0XHRcdGlmICghdGFyZ2V0KSB7XG5cdFx0XHRcdHRhcmdldCA9IHRleHRfO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldCl9XCIgdGl0bGU9XCIke3RhcmdldC5yZXBsYWNlKFxuXHRcdFx0XHQvXCIvZyxcblx0XHRcdFx0JyYjMzQ7J1xuXHRcdFx0KX1cIj4ke3RleHRffTwvYT5gO1xuXHRcdH0pO1xuXHRcdHJldHVybiB1Yi5yZWJpbmQoKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcywgcmVnYXJkbGVzc1xuXHQgKiBvZiB0aGUgY2FwaXRhbGl6YXRpb24gYW5kIHVuZGVyc2NvcmVzL3NwYWNlcy4gIERvZXNuJ3QgaW5jbHVkZSB0aGUgb3B0aW9uYWxcblx0ICogbGVhZGluZyBgOmAsIGJ1dCBpZiB0aGVyZSdzIG1vcmUgdGhhbiBvbmUgaXRlbSwgd3JhcHMgdGhlIGxpc3QgaW4gYVxuXHQgKiBub24tY2FwdHVyaW5nIGdyb3VwLiAgVGhpcyBtZWFucyB5b3UgY2FuIGRvIGBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNF0pICtcblx0ICogJzonICsgTW9yZWJpdHMucGFnZU5hbWVSZWdleCgnVHdpbmtsZScpYCB0byBtYXRjaCBhIGZ1bGwgcGFnZS4gIFVzZXNcblx0ICoge0BsaW5rIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcltdfSBuYW1lc3BhY2VzIC0gQXJyYXkgb2YgbmFtZXNwYWNlIG51bWJlcnMuICBVbnVzZWQvaW52YWxpZFxuXHQgKiBuYW1lc3BhY2UgbnVtYmVycyBhcmUgc2lsZW50bHkgZGlzY2FyZGVkLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyByZXR1cm5zICcoPzpbRmZdW0lpXVtMbF1bRWVdfFtJaV1bTW1dW0FhXVtHZ11bRWVdKSdcblx0ICogTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzZdKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJlZ2V4LXN1aXRhYmxlIHN0cmluZyBvZiBhbGwgbmFtZXNwYWNlIGFsaWFzZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5uYW1lc3BhY2VSZWdleCA9IChuYW1lc3BhY2VzKSA9PiB7XG5cdFx0bmFtZXNwYWNlcyA9IGdlbmVyYXRlQXJyYXkobmFtZXNwYWNlcyk7XG5cdFx0Y29uc3QgYWxpYXNlcyA9IFtdO1xuXHRcdGxldCByZWdleDtcblx0XHRmb3IgKGNvbnN0IFtuYW1lLCBudW1iZXJdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRpZiAobmFtZXNwYWNlcy5pbmNsdWRlcyhudW1iZXIpKSB7XG5cdFx0XHRcdC8vIE5hbWVzcGFjZXMgYXJlIGNvbXBsZXRlbHkgYWdub3N0aWMgYXMgdG8gY2FzZSxcblx0XHRcdFx0Ly8gYW5kIGEgcmVnZXggc3RyaW5nIGlzIG1vcmUgdXNlZnVsL2NvbXBhdGlibGUgdGhhbiBhIFJlZ0V4cCBvYmplY3QsXG5cdFx0XHRcdC8vIHNvIHdlIGFjY2VwdCBhbnkgY2FzaW5nIGZvciBhbnkgbGV0dGVyLlxuXHRcdFx0XHRhbGlhc2VzW2FsaWFzZXMubGVuZ3RoXSA9IFsuLi5uYW1lXVxuXHRcdFx0XHRcdC5tYXAoKGNoYXIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGNoYXIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmpvaW4oJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzd2l0Y2ggKGFsaWFzZXMubGVuZ3RoKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJlZ2V4ID0gJyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRbcmVnZXhdID0gYWxpYXNlcztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZWdleCA9IGAoPzoke2FsaWFzZXMuam9pbignfCcpfSlgO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnF1aWNrRm9ybSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGlvbiBvZiBzaW1wbGUgYW5kIHN0YW5kYXJkIGZvcm1zIHdpdGhvdXQgbXVjaCBzcGVjaWZpYyBjb2RpbmcuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtldmVudH0gZXZlbnQgLSBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRUeXBlPXN1Ym1pdF0gLSBUeXBlIG9mIHRoZSBldmVudC5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybSA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRUeXBlKSB7XG5cdFx0dGhpcy5yb290ID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0XHRcdHR5cGU6ICdmb3JtJyxcblx0XHRcdGV2ZW50LFxuXHRcdFx0ZXZlbnRUeXBlLFxuXHRcdH0pO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgb2YgdGhlIHF1aWNrRm9ybS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCByZXQgPSB0aGlzLnJvb3QucmVuZGVyKCk7XG5cdFx0cmV0Lm5hbWVzID0ge307XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0LyoqXG5cdCAqIEFwcGVuZCBlbGVtZW50IHRvIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KG9iamVjdHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGRhdGEgLSBBIHF1aWNrZm9ybSBlbGVtZW50LCBvciB0aGUgb2JqZWN0IHdpdGggd2hpY2hcblx0ICogYSBxdWlja2Zvcm0gZWxlbWVudCBpcyBjb25zdHJ1Y3RlZC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSAtIFNhbWUgYXMgd2hhdCBpcyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiB0aGlzLnJvb3QuYXBwZW5kKGRhdGEpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIHRoZSB0aGUgZm9ybS5cblx0ICpcblx0ICogSW5kZXggdG8gTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgdHlwZXM6XG5cdCAqIC0gR2xvYmFsIGF0dHJpYnV0ZXM6IGlkLCBjbGFzc05hbWUsIHN0eWxlLCB0b29sdGlwLCBleHRyYSwgJGRhdGEsIGFkbWlub25seVxuXHQgKiAtIGBzZWxlY3RgOiBBIGNvbWJvIGJveCAoYWthIGRyb3AtZG93bikuXG5cdCAqICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtdWx0aXBsZSwgc2l6ZSwgbGlzdCwgZXZlbnQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRpb25gOiBBbiBlbGVtZW50IGZvciBhIGNvbWJvIGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IHZhbHVlLCBsYWJlbCwgc2VsZWN0ZWQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRncm91cGA6IEEgZ3JvdXAgb2YgXCJvcHRpb25cInMuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbCwgbGlzdFxuXHQgKiAgLSBgZmllbGRgOiBBIGZpZWxkc2V0IChha2EgZ3JvdXAgYm94KS5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgY2hlY2tib3hgOiBBIGNoZWNrYm94LiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuXHQgKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcblx0ICogIC0gYHJhZGlvYDogQSByYWRpbyBidXR0b24uIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgaW5wdXRgOiBBIHRleHQgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBzaXplLCBwbGFjZWhvbGRlciwgbWF4bGVuZ3RoLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5LCBldmVudFxuXHQgKiAgLSBgbnVtYmVyYDogQSBudW1iZXIgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogRXZlcnl0aGluZyB0aGUgdGV4dCBgaW5wdXRgIGhhcywgYXMgd2VsbCBhczogbWluLCBtYXgsIHN0ZXAsIGxpc3Rcblx0ICogIC0gYGR5bmlucHV0YDogQSBzZXQgb2YgdGV4dCBib3hlcyB3aXRoIFwiUmVtb3ZlXCIgYnV0dG9ucyBhbmQgYW4gXCJBZGRcIiBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbWluLCBtYXgsIHN1YmxhYmVsLCB2YWx1ZSwgc2l6ZSwgbWF4bGVuZ3RoLCBldmVudFxuXHQgKiAgLSBgaGlkZGVuYDogQW4gaW52aXNpYmxlIGZvcm0gZmllbGQuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCB2YWx1ZVxuXHQgKiAgLSBgaGVhZGVyYDogQSBsZXZlbCA1IGhlYWRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsXG5cdCAqICAtIGBkaXZgOiBBIGdlbmVyaWMgcGxhY2Vob2xkZXIgZWxlbWVudCBvciBsYWJlbC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsXG5cdCAqICAtIGBzdWJtaXRgOiBBIHN1Ym1pdCBidXR0b24uIE1vcmViaXRzLnNpbXBsZVdpbmRvdyBtb3ZlcyB0aGVzZSB0byB0aGUgZm9vdGVyIG9mIHRoZSBkaWFsb2cuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWRcblx0ICogIC0gYGJ1dHRvbmA6IEEgZ2VuZXJpYyBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWQsIGV2ZW50XG5cdCAqICAtIGB0ZXh0YXJlYWA6IEEgYmlnLCBtdWx0aS1saW5lIHRleHQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBjb2xzLCByb3dzLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5XG5cdCAqICAtIGBmcmFnbWVudGA6IEEgRG9jdW1lbnRGcmFnbWVudCBvYmplY3QuXG5cdCAqICAgICAgLSBObyBhdHRyaWJ1dGVzLCBhbmQgbm8gZ2xvYmFsIGF0dHJpYnV0ZXMgZXhjZXB0IGFkbWlub25seS5cblx0ICogVGhlcmUgaXMgc29tZSBkaWZmZXJlbmNlIG9uIGhvdyB0eXBlcyBoYW5kbGUgdGhlIGBsYWJlbGAgYXR0cmlidXRlOlxuXHQgKiAtIGBkaXZgLCBgc2VsZWN0YCwgYGZpZWxkYCwgYGNoZWNrYm94YC9gcmFkaW9gLCBgaW5wdXRgLCBgdGV4dGFyZWFgLCBgaGVhZGVyYCwgYW5kIGBkeW5pbnB1dGAgY2FuIGFjY2VwdCBhbiBhcnJheSBvZiBpdGVtcyxcblx0ICogYW5kIHRoZSBsYWJlbCBpdGVtKHMpIGNhbiBiZSBgRWxlbWVudGBzLlxuXHQgKiAtIGBvcHRpb25gLCBgb3B0Z3JvdXBgLCBgX2R5bmlucHV0X2VsZW1lbnRgLCBgc3VibWl0YCwgYW5kIGBidXR0b25gIGFjY2VwdCBvbmx5IGEgc2luZ2xlIHN0cmluZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBxdWlja2Zvcm0gZWxlbWVudC4gU2hvdWxkXG5cdCAqIHNwZWNpZnkgb25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZXMgZnJvbSB0aGUgaW5kZXggYWJvdmUsIGFzIHdlbGwgYXMgYW55XG5cdCAqIHJlbGV2YW50IGFuZCBhdmFpbGFibGUgYXR0cmlidXRlcy5cblx0ICogQGV4YW1wbGUgbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0ICogICAgIG5hbWU6ICd0YXJnZXQnLFxuXHQgKiAgICAgdHlwZTogJ2lucHV0Jyxcblx0ICogICAgIGxhYmVsOiAnWW91ciB0YXJnZXQ6Jyxcblx0ICogICAgIHRvb2x0aXA6ICdFbnRlciB5b3VyIHRhcmdldC4gUmVxdWlyZWQuJyxcblx0ICogICAgIHJlcXVpcmVkOiB0cnVlXG5cdCAqIH0pO1xuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5jaGlsZHMgPSBbXTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuaWQgPSAwO1xuXHQvKipcblx0ICogQXBwZW5kcyBhbiBlbGVtZW50IHRvIGN1cnJlbnQgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEBwYXJhbSB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IGRhdGEgLSBBIHF1aWNrRm9ybSBlbGVtZW50IG9yIHRoZSBvYmplY3QgcmVxdWlyZWQgdG9cblx0ICogY3JlYXRlIHRoZSBxdWlja0Zvcm0gZWxlbWVudC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSBUaGUgc2FtZSBlbGVtZW50IHBhc3NlZCBpbi5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGxldCBjaGlsZDtcblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KSB7XG5cdFx0XHRjaGlsZCA9IGRhdGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KGRhdGEpO1xuXHRcdH1cblx0XHR0aGlzLmNoaWxkc1t0aGlzLmNoaWxkcy5sZW5ndGhdID0gY2hpbGQ7XG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgZm9yIHRoZSBxdWlja0Zvcm0gZWxlbWVudC4gIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHQgKiB3aXRob3V0IHBhcmFtZXRlcnM6IGBmb3JtLnJlbmRlcigpYC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsU3ViZ3JvdXBJZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChpbnRlcm5hbFN1Ymdyb3VwSWQpIHtcblx0XHRjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuY29tcHV0ZSh0aGlzLmRhdGEsIGludGVybmFsU3ViZ3JvdXBJZCk7XG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcykge1xuXHRcdFx0Ly8gZG8gbm90IHBhc3MgaW50ZXJuYWxfc3ViZ3JvdXBfaWQgdG8gcmVjdXJzaXZlIGNhbGxzXG5cdFx0XHRjdXJyZW50Tm9kZVsxXS5hcHBlbmRDaGlsZChjaGlsZC5yZW5kZXIoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50Tm9kZVswXTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5JZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKGRhdGEsIGluSWQpIHtcblx0XHRsZXQgbm9kZTtcblx0XHRsZXQgY2hpbGRDb250YWluZXIgPSBudWxsO1xuXHRcdGxldCBsYWJlbDtcblx0XHRjb25zdCBpZCA9IGAke2luSWQgPyBgJHtpbklkfV9gIDogJyd9bm9kZV8ke01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkKyt9YDtcblx0XHRpZiAoZGF0YS5hZG1pbm9ubHkgJiYgIU1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHQvLyBoZWxsIGhhY2sgYWxwaGFcblx0XHRcdGRhdGEudHlwZSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0XHRsZXQgaTtcblx0XHRsZXQgY3VycmVudDtcblx0XHRsZXQgc3Vibm9kZTtcblx0XHRzd2l0Y2ggKGRhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAnZm9ybSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdFx0XHRcdG5vZGUuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybSc7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnamF2YXNjcmlwdDp2b2lkKDApOycpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLmV2ZW50VHlwZSB8fCAnc3VibWl0JywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnJhZ21lbnQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFx0XHQvLyBmcmFnbWVudHMgY2FuJ3QgaGF2ZSBhbnkgYXR0cmlidXRlcywgc28ganVzdCByZXR1cm4gaXQgc3RyYWlnaHQgYXdheVxuXHRcdFx0XHRyZXR1cm4gW25vZGUsIG5vZGVdO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzoge1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBzZWxlY3QgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lmxpc3QpIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGdyb3VwJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdHNlbGVjdC5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzZWxlY3Q7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29wdGdyb3VwJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nOyAvLyBtdXN0IGJlIG9wdGlvbnMgaGVyZVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VySWQgPSBgJHtpZH1fJHtpfWA7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0bGV0IGN1ckRpdjtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnR5cGUgPT09ICdoZWFkZXInKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlubGluZSBoYWNrXG5cdFx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKSk7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAoY3VyRGl2LCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5oaWRkZW4pIHtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUudmFsdWVzID0gY3VycmVudC52YWx1ZTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnQudmFsdWUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lKTtcblx0XHRcdFx0XHRcdC8vIElmIG5hbWUgaXMgcHJvdmlkZWQgb24gdGhlIGluZGl2aWR1YWwgY2hlY2tib3gsIGFkZCBhIGRhdGEtc2luZ2xlXG5cdFx0XHRcdFx0XHQvLyBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzIGl0IGlzbid0IHBhcnQgb2YgYSBsaXN0IG9mIGNoZWNrYm94ZXMgd2l0aFxuXHRcdFx0XHRcdFx0Ly8gc2FtZSBuYW1lLiBVc2VkIGluIGdldElucHV0RGF0YSgpXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNpbmdsZScsICdkYXRhLXNpbmdsZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBzdHlsZXMgZ28gb24gdGhlIGxhYmVsLCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3R5bGUgYSBjaGVja2JveC9yYWRpb1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGN1cnJlbnQuc3R5bGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IGV2ZW50O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3ViZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0bGV0IHRtcGdyb3VwID0gY3VycmVudC5zdWJncm91cDtcblx0XHRcdFx0XHRcdFx0dG1wZ3JvdXAgPSBnZW5lcmF0ZUFycmF5KHRtcGdyb3VwKTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXBSYXcgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHtpZH1fJHtpfV9zdWJncm91cGAsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHRtcGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3RWwgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5lbCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGlmICghbmV3RWwudHlwZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RWwudHlwZSA9IGRhdGEudHlwZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwubmFtZSA9IGAke2N1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWV9LiR7bmV3RWwubmFtZX1gO1xuXHRcdFx0XHRcdFx0XHRcdHN1Ymdyb3VwUmF3LmFwcGVuZChuZXdFbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXAgPSBzdWJncm91cFJhdy5yZW5kZXIoY3VySWQpO1xuXHRcdFx0XHRcdFx0XHRzdWJncm91cC5jbGFzc05hbWUgPSAncXVpY2tmb3JtU3ViZ3JvdXAnO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnN1Ymdyb3VwID0gc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2hvd24gPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3Vibm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhZGQgdXNlcnMnIGV2ZW50IGxhc3QsIHNvIGl0IGNhbiBpbnRlcmFjdCB3aXRoIHRoZSBzdWJncm91cFxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnQuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjdXJyZW50LmV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2hpZnRDbGlja1N1cHBvcnQgJiYgZGF0YS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMobm9kZSwgZGF0YS5uYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBpbnB1dCBpcyBhY3R1YWxseSBhIHRleHQtdHlwZSwgc28gbnVtYmVyIGhlcmUgaW5oZXJpdHMgdGhlIHNhbWUgc3R1ZmZcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdC8vIEFkZCB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgYXR0cnNcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGRhdGEucGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEudHlwZSA9PT0gJ2lucHV0Jykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ21pbicsICdtYXgnLCAnc3RlcCcsICdsaXN0J10pIHtcblx0XHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ3ZhbHVlJywgJ3NpemUnLCAncGxhY2Vob2xkZXInLCAnbWF4bGVuZ3RoJ10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnZGlzYWJsZWQnLCAncmVxdWlyZWQnLCAncmVhZG9ubHknXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgYXR0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkeW5pbnB1dCc6IHtcblx0XHRcdFx0Y29uc3QgbWluID0gZGF0YS5taW4gfHwgMTtcblx0XHRcdFx0Y29uc3QgbWF4ID0gZGF0YS5tYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGNvbnN0IGxpc3ROb2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdGxhYmVsOiAn5pu05aSaJyxcblx0XHRcdFx0XHRkaXNhYmxlZDogbWluID49IG1heCxcblx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZS50YXJnZXQuc3VibGlzdCk7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5hcmVhLmFwcGVuZENoaWxkKG5ld05vZGUucmVuZGVyKCkpO1xuXHRcdFx0XHRcdFx0aWYgKCsrZS50YXJnZXQuY291bnRlciA+PSBlLnRhcmdldC5tYXgpIHtcblx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChtb3JlWzBdKTtcblx0XHRcdFx0Y29uc3QgWywgbW9yZUJ1dHRvbl0gPSBtb3JlO1xuXHRcdFx0XHRjb25zdCBzdWJsaXN0ID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdfZHluaW5wdXRfZWxlbWVudCcsXG5cdFx0XHRcdFx0bGFiZWw6IGRhdGEuc3VibGFiZWwgfHwgZGF0YS5sYWJlbCxcblx0XHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGEudmFsdWUsXG5cdFx0XHRcdFx0c2l6ZTogZGF0YS5zaXplLFxuXHRcdFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiBkYXRhLm1heGxlbmd0aCxcblx0XHRcdFx0XHRldmVudDogZGF0YS5ldmVudCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1pbjsgKytpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChzdWJsaXN0KTtcblx0XHRcdFx0XHRsaXN0Tm9kZS5hcHBlbmRDaGlsZChlbGVtLnJlbmRlcigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJsaXN0LnJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdHN1Ymxpc3QubW9yZWJ1dHRvbiA9IG1vcmVCdXR0b247XG5cdFx0XHRcdHN1Ymxpc3QubGlzdG5vZGUgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5zdWJsaXN0ID0gc3VibGlzdDtcblx0XHRcdFx0bW9yZUJ1dHRvbi5hcmVhID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24ubWF4ID0gbWF4IC0gbWluO1xuXHRcdFx0XHRtb3JlQnV0dG9uLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ19keW5pbnB1dF9lbGVtZW50Jzpcblx0XHRcdFx0Ly8gUHJpdmF0ZSwgc2ltaWxhciB0byBub3JtYWwgaW5wdXRcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5zaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tYXhsZW5ndGgpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgZGF0YS5tYXhsZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZW1vdmUpIHtcblx0XHRcdFx0XHRjb25zdCByZW1vdmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpCcsXG5cdFx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGUudGFyZ2V0Lmxpc3Rub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBub2RlXyA9IGUudGFyZ2V0LmlucHV0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbW9yZSA9IGUudGFyZ2V0Lm1vcmVidXR0b247XG5cdFx0XHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobm9kZV8pO1xuXHRcdFx0XHRcdFx0XHQtLW1vcmUuY291bnRlcjtcblx0XHRcdFx0XHRcdFx0bW9yZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVtb3ZlWzBdKTtcblx0XHRcdFx0XHRjb25zdCBbLCByZW1vdmVCdXR0b25dID0gcmVtb3ZlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5pbnB1dG5vZGUgPSBub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5saXN0bm9kZSA9IGRhdGEubGlzdG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLm1vcmVidXR0b24gPSBkYXRhLm1vcmVidXR0b247XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaWRkZW4nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoZWFkZXInOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXYnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1EZXNjcmlwdGlvbic7XG5cdFx0XHRcdFx0cmVzdWx0LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgfHwgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5jb2xzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCBkYXRhLmNvbHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJvd3MpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncm93cycsIGRhdGEucm93cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZXF1aXJlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlYWRvbmx5KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnZhbHVlID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgcGxhY2Vob2xkZXIgYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUucGxhY2Vob2xkZXIgPSBkYXRhLnBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vcmViaXRzLnF1aWNrRm9ybTogdW5rbm93biBlbGVtZW50IHR5cGUgJHtkYXRhLnR5cGUudG9TdHJpbmcoKX1gKTtcblx0XHR9XG5cdFx0aWYgKCFjaGlsZENvbnRhaW5lcikge1xuXHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlO1xuXHRcdH1cblx0XHRpZiAoZGF0YS50b29sdGlwKSB7XG5cdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwgfHwgbm9kZSwgZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmV4dHJhKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5leHRyYSA9IGRhdGEuZXh0cmE7XG5cdFx0fVxuXHRcdGlmIChkYXRhLiRkYXRhKSB7XG5cdFx0XHQkKGNoaWxkQ29udGFpbmVyKS5kYXRhKGRhdGEuJGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5zdHlsZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGRhdGEuc3R5bGUpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZVxuXHRcdFx0XHQ/IGAke2NoaWxkQ29udGFpbmVyLmNsYXNzTmFtZX0gJHtkYXRhLmNsYXNzTmFtZX1gXG5cdFx0XHRcdDogZGF0YS5jbGFzc05hbWU7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRyZXR1cm4gW25vZGUsIGNoaWxkQ29udGFpbmVyXTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGpRdWVyeSBVSS1iYXNlZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIEhUTUwgZWxlbWVudCBiZXNpZGUgd2hpY2ggYSB0b29sdGlwIGlzIHRvIGJlIGdlbmVyYXRlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUb29sdGlwLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBkYXRhLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwID0gKG5vZGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCB0b29sdGlwQnV0dG9uID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdHRvb2x0aXBCdXR0b24uY2xhc3NOYW1lID0gJ21vcmViaXRzLXRvb2x0aXBCdXR0b24nO1xuXHRcdHRvb2x0aXBCdXR0b24udGl0bGUgPSBkYXRhLnRvb2x0aXA7IC8vIFByb3ZpZGVzIHRoZSBjb250ZW50IGZvciBqUXVlcnkgVUlcblx0XHR0b29sdGlwQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc/JykpO1xuXHRcdCQodG9vbHRpcEJ1dHRvbikudG9vbHRpcCh7XG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRteTogJ2xlZnQgdG9wJyxcblx0XHRcdFx0YXQ6ICdjZW50ZXIgYm90dG9tJyxcblx0XHRcdFx0Y29sbGlzaW9uOiAnZmxpcGZpdCcsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gRGVwcmVjYXRlZCBpbiBVSSAxLjEyLCBidXQgTVcgc3R1Y2sgb24gMS45LjIgaW5kZWZpbml0ZWx5OyBzZWUgIzM5OCBhbmQgVDcxMzg2XG5cdFx0XHR0b29sdGlwQ2xhc3M6ICdtb3JlYml0cy11aS10b29sdGlwJyxcblx0XHR9KTtcblx0fTtcblx0Ly8gU29tZSB1dGlsaXR5IG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBxdWlja0Zvcm1zIGFmdGVyIHRoZWlyIGNyZWF0aW9uOlxuXHQvLyAoTm9uZSBvZiB0aGVzZSB3b3JrIGZvciBcImR5bmlucHV0XCIgdHlwZSBmaWVsZHMgYXQgcHJlc2VudClcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZpbGxlZCBmb3JtIGRhdGEgZW50ZXJlZCBieSB0aGUgdXNlciwgd2l0aCB0aGUgb2JqZWN0XG5cdCAqIGtleXMgYmVpbmcgdGhlIGZvcm0gZWxlbWVudCBuYW1lcy4gRGlzYWJsZWQgZmllbGRzIHdpbGwgYmUgaWdub3JlZCwgYnV0IG5vdCBoaWRkZW4gZmllbGRzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFdpdGggZmllbGQgbmFtZXMgYXMga2V5cywgaW5wdXQgZGF0YSBhcyB2YWx1ZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0SW5wdXREYXRhID0gKGZvcm0pID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZWxlbWVudHMpIHtcblx0XHRcdGlmIChmaWVsZC5kaXNhYmxlZCB8fCAhZmllbGQubmFtZSB8fCAhZmllbGQudHlwZSB8fCBmaWVsZC50eXBlID09PSAnc3VibWl0JyB8fCBmaWVsZC50eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEZvciBlbGVtZW50cyBpbiBzdWJncm91cHMsIHF1aWNrZm9ybSBwcmVwZW5kcyBlbGVtZW50IG5hbWVzIHdpdGhcblx0XHRcdC8vIG5hbWUgb2YgdGhlIHBhcmVudCBncm91cCBmb2xsb3dlZCBieSBhIHBlcmlvZCwgZ2V0IHJpZCBvZiB0aGF0LlxuXHRcdFx0Y29uc3QgZmllbGROYW1lTm9ybSA9IGZpZWxkLm5hbWUuc2xpY2UoZmllbGQubmFtZS5pbmRleE9mKCcuJykgKyAxKTtcblx0XHRcdHN3aXRjaCAoZmllbGQudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5kYXRhc2V0LnNpbmdsZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQuY2hlY2tlZDsgLy8gYm9vbGVhblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gfHw9IFtdO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dW3Jlc3VsdFtmaWVsZE5hbWVOb3JtXS5sZW5ndGhdID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QtbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9ICQoZmllbGQpLnZhbCgpOyAvLyBmaWVsZC52YWx1ZSBkb2Vzbid0IHdvcmtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGV4dCc6IC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlLnRyaW0oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBjb3VsZCBiZSBzZWxlY3Qtb25lLCBkYXRlLCBudW1iZXIsIGVtYWlsLCBldGNcblx0XHRcdFx0XHRpZiAoZmllbGQudmFsdWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIGZvcm0gZWxlbWVudHMgd2l0aCBhIGdpdmVuIGZpZWxkIG5hbWUgb3IgSUQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBmaWVsZHMuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfSAtIEFycmF5IG9mIG1hdGNoaW5nIGZvcm0gZWxlbWVudHMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMgPSAoZm9ybSwgZmllbGROYW1lKSA9PiB7XG5cdFx0Y29uc3QgJGZvcm0gPSAkKGZvcm0pO1xuXHRcdGZpZWxkTmFtZSA9ICQuZXNjYXBlU2VsZWN0b3IoZmllbGROYW1lKTsgLy8gc2FuaXRpemUgaW5wdXRcblx0XHRsZXQgJGVsZW1lbnRzID0gJGZvcm0uZmluZChgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcblx0XHRpZiAoJGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHRcdH1cblx0XHQkZWxlbWVudHMgPSAkZm9ybS5maW5kKGAjJHtmaWVsZE5hbWV9YCk7XG5cdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB0aGUgYXJyYXkgb2YgZWxlbWVudHMgZm9yIGEgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uIHdpdGggYSBjZXJ0YWluXG5cdCAqIGB2YWx1ZWAgYXR0cmlidXRlLCBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgc3VjaCBlbGVtZW50LiBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudFtdfSBlbGVtZW50QXJyYXkgLSBBcnJheSBvZiBjaGVja2JveCBvciByYWRpbyBlbGVtZW50cy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgdG8gc2VhcmNoIGZvci5cblx0ICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0Q2hlY2tib3hPclJhZGlvID0gKGVsZW1lbnRBcnJheSwgdmFsdWUpID0+IHtcblx0XHRjb25zdCBmb3VuZCA9IGVsZW1lbnRBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcblx0XHR9KTtcblx0XHRpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZvdW5kWzBdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlICZsdDtkaXY+IGNvbnRhaW5pbmcgdGhlIGZvcm0gZWxlbWVudCwgb3IgdGhlIGZvcm0gZWxlbWVudCBpdHNlbGZcblx0ICogTWF5IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIGNoZWNrYm94ZXMgb3IgcmFkaW9zLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBkaXZzLCBoZWFkaW5ncyBhbmQgZmllbGRzZXRzLCB0aGUgY29udGFpbmVyIGlzIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCBqdXN0IHJldHVybiB0aGUgcGFyZW50IG5vZGVcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgSFRNTCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGxhYmVsIG9mIHRoZSBnaXZlbiBmb3JtIGVsZW1lbnRcblx0ICogKG1haW5seSBmb3IgaW50ZXJuYWwgdXNlKS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gZm9yIGJ1dHRvbnMsIGRpdnMgYW5kIGhlYWRlcnMsIHRoZSBsYWJlbCBpcyBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdidXR0b24nIHx8XG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnIHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0Ly8gZm9yIGZpZWxkc2V0cywgdGhlIGxhYmVsIGlzIHRoZSBjaGlsZCA8bGVnZW5kPiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJyk7XG5cdFx0XHQvLyBmb3IgdGV4dGFyZWFzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGg1PiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdoNScpO1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGxhYmVsPiBlbGVtZW50XG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgbGFiZWwgdGV4dCBvZiB0aGUgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCBsYWJlbFRleHQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHQvKipcblx0ICogU3RvcmVzIHRoZSBlbGVtZW50J3MgY3VycmVudCBsYWJlbCwgYW5kIHRlbXBvcmFyaWx5IHNldHMgdGhlIGxhYmVsIHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcG9yYXJ5TGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgc3VjY2VlZGVkLCBgZmFsc2VgIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLm92ZXJyaWRlRWxlbWVudExhYmVsID0gKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCkgPT4ge1xuXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnLCBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsKGVsZW1lbnQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgdGVtcG9yYXJ5TGFiZWxUZXh0KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlc3RvcmVzIHRoZSBsYWJlbCBzdG9yZWQgYnkgb3ZlcnJpZGVFbGVtZW50TGFiZWwuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucmVzZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyBhIGZvcm0gZWxlbWVudCBwbHVzIGl0cyBsYWJlbCBhbmQgdG9vbHRpcC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnl8c3RyaW5nKX0gZWxlbWVudCAtIEhUTUwvalF1ZXJ5IGVsZW1lbnQsIG9yIGpRdWVyeSBzZWxlY3RvciBzdHJpbmcuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKGVsZW1lbnQpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIHRoZSBxdWVzdGlvbiBtYXJrIGljb24gKHdoaWNoIGRpc3BsYXlzIHRoZSB0b29sdGlwKSBuZXh0IHRvIGEgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGpRdWVyeSl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyKGVsZW1lbnQpKS5maW5kKCcubW9yZWJpdHMtdG9vbHRpcEJ1dHRvbicpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIEBleHRlcm5hbCBIVE1MRm9ybUVsZW1lbnRcblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgY2hlY2tlZCBpdGVtcyBpbiB0aGUgZm9ybS5cblx0ICpcblx0ICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldENoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKG9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBEb2VzIHRoZSBzYW1lIGFzIHtAbGluayBIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZHxnZXRDaGVja2VkfSwgYnV0IHdpdGggdW5jaGVja2VkIGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldFVuY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRVbmNoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoIWVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIWVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlcy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5pcFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmlwID0ge1xuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cblx0XHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdFx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdFx0ICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0c2FuaXRpemVJUHY2OiAoYWRkcmVzcykgPT4ge1xuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudHJpbSgpO1xuXHRcdFx0aWYgKGFkZHJlc3MgPT09ICcnKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYWRkcmVzcywgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGFkZHJlc3M7IC8vIG5vdGhpbmcgZWxzZSB0byBkbyBmb3IgSVB2NCBhZGRyZXNzZXMgb3IgaW52YWxpZCBvbmVzXG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgYW55IHdoaXRlc3BhY2VzLCBjb252ZXJ0IHRvIHVwcGVyIGNhc2Vcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHQvLyBFeHBhbmQgemVybyBhYmJyZXZpYXRpb25zXG5cdFx0XHRjb25zdCBhYmJyZXZQb3MgPSBhZGRyZXNzLmluZGV4T2YoJzo6Jyk7XG5cdFx0XHRpZiAoYWJicmV2UG9zID4gLTEpIHtcblx0XHRcdFx0Ly8gV2Uga25vdyB0aGlzIGlzIHZhbGlkIElQdjYuIEZpbmQgdGhlIGxhc3QgaW5kZXggb2YgdGhlXG5cdFx0XHRcdC8vIGFkZHJlc3MgYmVmb3JlIGFueSBDSURSIG51bWJlciAoZS5nLiBcImE6YjpjOjovMjRcIikuXG5cdFx0XHRcdGNvbnN0IENJRFJTdGFydCA9IGFkZHJlc3MuaW5kZXhPZignLycpO1xuXHRcdFx0XHRjb25zdCBhZGRyZXNzRW5kID0gQ0lEUlN0YXJ0ID09PSAtMSA/IGFkZHJlc3MubGVuZ3RoIC0gMSA6IENJRFJTdGFydCAtIDE7XG5cdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBiZWdpbm5pbmcuLi5cblx0XHRcdFx0bGV0IHJlcGVhdDtcblx0XHRcdFx0bGV0IGV4dHJhO1xuXHRcdFx0XHRsZXQgcGFkO1xuXHRcdFx0XHRpZiAoYWJicmV2UG9zID09PSAwKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzA6Jztcblx0XHRcdFx0XHRleHRyYSA9IGFkZHJlc3MgPT09ICc6OicgPyAnMCcgOiAnJzsgLy8gZm9yIHRoZSBhZGRyZXNzICc6Oidcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBlbmQuLi5cblx0XHRcdFx0fSBlbHNlIGlmIChhYmJyZXZQb3MgPT09IGFkZHJlc3NFbmQgLSAxKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzowJztcblx0XHRcdFx0XHRleHRyYSA9ICcnO1xuXHRcdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgaW4gdGhlIG1pZGRsZS4uLlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnOic7XG5cdFx0XHRcdFx0cGFkID0gODsgLy8gNisyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCByZXBsYWNlbWVudCA9IHJlcGVhdDtcblx0XHRcdFx0cGFkIC09IGFkZHJlc3Muc3BsaXQoJzonKS5sZW5ndGggLSAxO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZDsgaSsrKSB7XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgKz0gcmVwZWF0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcGxhY2VtZW50ICs9IGV4dHJhO1xuXHRcdFx0XHRhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKCc6OicsIHJlcGxhY2VtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gZWFjaCBibG9jIGFzIG5lZWRlZFxuXHRcdFx0cmV0dXJuIGFkZHJlc3MucmVwbGFjZSgvKF58OikwKyhbMC05QS1GYS1mXXsxLDR9KS9nLCAnJDEkMicpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiBJUCBhZGRyZXNzIGlzIGEgcmFuZ2UuICBKdXN0IGNvbmpvaW5zXG5cdFx0ICogYG13LnV0aWwuaXNJUEFkZHJlc3NgIHdpdGggYW5kIHdpdGhvdXQgdGhlIGBhbGxvd0Jsb2NrYCBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIGdpdmVuIGEgdmFsaWQgSVAgYWRkcmVzcyByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHRcdCAqL1xuXHRcdGlzUmFuZ2U6IChpcCkgPT4ge1xuXHRcdFx0cmV0dXJuIG13LnV0aWwuaXNJUEFkZHJlc3MoaXAsIHRydWUpICYmICFtdy51dGlsLmlzSVBBZGRyZXNzKGlwKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIHRoYXQgYW4gSVAgcmFuZ2UgaXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cy4gIE1vc3QgbGlrZWx5IHRvIGJlIHVzZWZ1bFxuXHRcdCAqIGluIGNvbmp1bmN0aW9uIHdpdGggYHdnUmVsZXZhbnRVc2VyTmFtZWAuICBDSURSIGxpbWl0cyBhcmUgaGFyZGNvZGVkIGFzIC8xNlxuXHRcdCAqIGZvciBJUHY0IGFuZCAvMzIgZm9yIElQdjYuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGZvciB2YWxpZCByYW5nZXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cyxcblx0XHQgKiBvdGhlcndpc2UgZmFsc2UgKHJhbmdlcyBvdXRzaWRlIHRoZSBsaW1pdCwgc2luZ2xlIElQcywgbm9uLUlQcykuXG5cdFx0ICovXG5cdFx0dmFsaWRDSURSOiAoaXApID0+IHtcblx0XHRcdGlmIChNb3JlYml0cy5pcC5pc1JhbmdlKGlwKSkge1xuXHRcdFx0XHRjb25zdCBzdWJuZXQgPSBOdW1iZXIucGFyc2VJbnQoaXAubWF0Y2goL1xcLyhcXGR7MSwzfSkkLylbMV0sIDEwKTtcblx0XHRcdFx0aWYgKHN1Ym5ldCkge1xuXHRcdFx0XHRcdC8vIFNob3VsZCBiZSByZWR1bmRhbnRcblx0XHRcdFx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwLCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0aWYgKHN1Ym5ldCA+PSAzMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN1Ym5ldCA+PSAxNikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIC82NCBzdWJuZXQgZm9yIGFuIElQdjYgYWRkcmVzcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcHY2IC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IGEgc3VibmV0LlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBGYWxzZSBpZiBub3QgSVB2NiBvciBiaWdnZXIgdGhhbiBhIDY0LFxuXHRcdCAqIG90aGVyd2lzZSB0aGUgKHNhbml0aXplZCkgLzY0IGFkZHJlc3MuXG5cdFx0ICovXG5cdFx0Z2V0NjQ6IChpcHY2KSA9PiB7XG5cdFx0XHRpZiAoIWlwdjYgfHwgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcHY2LCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzdWJuZXRNYXRjaCA9IGlwdjYubWF0Y2goL1xcLyhcXGR7MSwzfSkkLyk7XG5cdFx0XHRpZiAoc3VibmV0TWF0Y2ggJiYgTnVtYmVyLnBhcnNlSW50KHN1Ym5ldE1hdGNoWzFdLCAxMCkgPCA2NCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpcHY2ID0gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2KGlwdjYpO1xuXHRcdFx0Y29uc3QgaXBSZWdleCA9IC9eKCg/OlswLTlBLUZdezEsNH06KXs0fSkoPzpbMC05QS1GXXsxLDR9Oil7M31bMC05QS1GXXsxLDR9KD86XFwvXFxkezEsM30pPyQvO1xuXHRcdFx0cmV0dXJuIGlwdjYucmVwbGFjZShpcFJlZ2V4LCAnJDEnLmNvbmNhdCgnMDowOjA6MC82NCcpKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIHN0cmluZ3MuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc3RyaW5nXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuc3RyaW5nID0ge1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvVXBwZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvTG93ZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdpdmVzIGFuIGFycmF5IG9mIHN1YnN0cmluZ3Mgb2YgYHN0cmAgLSBzdGFydGluZyB3aXRoIGBzdGFydGAgYW5kXG5cdFx0ICogZW5kaW5nIHdpdGggYGVuZGAgLSB3aGljaCBpcyBub3QgaW4gYHNraXBsaXN0YC4gIEludGVuZGVkIGZvciB1c2Vcblx0XHQgKiBvbiB3aWtpdGV4dCB3aXRoIHRlbXBsYXRlcyBvciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZW5kXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nW118c3RyaW5nKX0gW3NraXBsaXN0XVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmdbXX1cblx0XHQgKiBAdGhyb3dzIElmIHRoZSBgc3RhcnRgIGFuZCBgZW5kYCBzdHJpbmdzIGFyZW4ndCBvZiB0aGUgc2FtZSBsZW5ndGguXG5cdFx0ICogQHRocm93cyBJZiBgc2tpcGxpc3RgIGlzbid0IGFuIGFycmF5IG9yIHN0cmluZ1xuXHRcdCAqL1xuXHRcdHNwbGl0V2VpZ2h0ZWRCeUtleXM6IChzdHIsIHN0YXJ0LCBlbmQsIHNraXBsaXN0KSA9PiB7XG5cdFx0XHRpZiAoc3RhcnQubGVuZ3RoICE9PSBlbmQubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignc3RhcnQgbWFya2VyIGFuZCBlbmQgbWFya2VyIG11c3QgYmUgb2YgdGhlIHNhbWUgbGVuZ3RoJyk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGV2ZWwgPSAwO1xuXHRcdFx0bGV0IGluaXRpYWwgPSBudWxsO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc2tpcGxpc3QpKSB7XG5cdFx0XHRcdGlmIChza2lwbGlzdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0c2tpcGxpc3QgPSBbXTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2tpcGxpc3QgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0c2tpcGxpc3QgPSBbc2tpcGxpc3RdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ25vbi1hcHBsaWNhYmxlIHNraXBsaXN0IHBhcmFtZXRlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2tpcGxpc3QpIHtcblx0XHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBlbGVtZW50Lmxlbmd0aCkgPT09IGVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdGkgKz0gZWxlbWVudC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIHN0YXJ0Lmxlbmd0aCkgPT09IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKGluaXRpYWwgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGluaXRpYWwgPSBpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQrK2xldmVsO1xuXHRcdFx0XHRcdGkgKz0gc3RhcnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChzdHIuc2xpY2UoaSwgaSArIGVuZC5sZW5ndGgpID09PSBlbmQpIHtcblx0XHRcdFx0XHQtLWxldmVsO1xuXHRcdFx0XHRcdGkgKz0gZW5kLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFsZXZlbCAmJiBpbml0aWFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gc3RyLnNsaWNlKGluaXRpYWwsIGkgKyAxKTtcblx0XHRcdFx0XHRpbml0aWFsID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgZnJlZWZvcm0gXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgZGVsZXRpb24vb3RoZXJcblx0XHQgKiB0ZW1wbGF0ZXMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgc3Vic3RpdHV0ZWQsIChlLmcuIFBST0QsIFhGRCwgUlBQKS5cblx0XHQgKiBIYW5kbGVzIGB8YCBvdXRzaWRlIGEgbm93aWtpIHRhZy5cblx0XHQgKiBPcHRpb25hbGx5LCBhbHNvIGFkZHMgYSBzaWduYXR1cmUgaWYgbm90IHByZXNlbnQgYWxyZWFkeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRTaWddXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25UZXh0OiAoc3RyLCBhZGRTaWcpID0+IHtcblx0XHRcdGxldCByZWFzb24gPSAoc3RyIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHJlYXNvbik7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgJzwvbm8nLmNvbmNhdCgnd2lraScsICc+JykpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZSgvXFx8L2csICd7eycuY29uY2F0KCdzdWJzdDonLCAnIX19JykpO1xuXHRcdFx0cmVhc29uID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRpZiAoYWRkU2lnKSB7XG5cdFx0XHRcdGNvbnN0IHNpZyA9ICd+ficuY29uY2F0KCd+ficpO1xuXHRcdFx0XHRjb25zdCBzaWdJbmRleCA9IHJlYXNvbi5sYXN0SW5kZXhPZihzaWcpO1xuXHRcdFx0XHRpZiAoc2lnSW5kZXggPT09IC0xIHx8IHNpZ0luZGV4ICE9PSByZWFzb24ubGVuZ3RoIC0gc2lnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJlYXNvbiArPSBgICR7c2lnfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZWFzb24udHJpbSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBhIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGluY2x1c2lvbiBpbiBhIHVzZXJzcGFjZVxuXHRcdCAqIGxvZy4gIFJlcGxhY2VzIG5ld2xpbmVzIHdpdGgge3tQYn19LCBhbmQgYWRkcyBhbiBleHRyYSBgI2AgYmVmb3JlXG5cdFx0ICogbGlzdCBpdGVtcyBmb3IgcHJvcGVyIGZvcm1hdHRpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25Gb3JMb2c6IChzdHIpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0clxuXHRcdFx0XHRcdC8vIGhhbmRsZSBsaW5lIGJyZWFrcywgd2hpY2ggb3RoZXJ3aXNlIGJyZWFrIG51bWJlcmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXG4rL2csICd7e3BifX0nKVxuXHRcdFx0XHRcdC8vIHB1dCBhbiBleHRyYSAjIGluIGZyb250IGJlZm9yZSBidWxsZXRlZCBvciBudW1iZXJlZCBsaXN0IGl0ZW1zXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oIyspL2dtLCAnIyQxJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXihcXCorKS9nbSwgJyMkMScpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKClgLCBidXQgZXNjYXBlcyBhbnkgZG9sbGFyIHNpZ25zIGluXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gIFVzZWZ1bCB3aGVuIHRoZSB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nIGlzXG5cdFx0ICogYXJiaXRyYXJ5LCBzdWNoIGFzIGEgdXNlcm5hbWUgb3IgZnJlZWZvcm0gdXNlciBpbnB1dCwgYW5kIGNvdWxkXG5cdFx0ICogY29udGFpbiBkb2xsYXIgc2lnbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGV4dCBpbiB3aGljaCB0byByZXBsYWNlLlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYWZlUmVwbGFjZTogKHN0cmluZywgcGF0dGVybiwgcmVwbGFjZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudC5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXItcHJvdmlkZWQgZXhwaXJhdGlvbiB3aWxsIGJlIGNvbnNpZGVyZWQgYW5cblx0XHQgKiBpbmZpbml0ZS1sZW5ndGggYnkgTVcuXG5cdFx0ICpcblx0XHQgKiBAc2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDY4NjQ2fVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV4cGlyeVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzSW5maW5pdHk6IChleHBpcnkpID0+IHtcblx0XHRcdHJldHVybiBbJ2luZGVmaW5pdGUnLCAnaW5maW5pdHknLCAnaW5maW5pdGUnLCAnbmV2ZXInXS5pbmNsdWRlcyhleHBpcnkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRXNjYXBlcyBhIHN0cmluZyB0byBiZSB1c2VkIGluIGEgUmVnRXhwLCByZXBsYWNpbmcgc3BhY2VzIGFuZFxuXHRcdCAqIHVuZGVyc2NvcmVzIHdpdGggYFtfIF1gIGFzIHRoZXkgYXJlIG9mdGVuIGVxdWl2YWxlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFN0cmluZyB0byBiZSBlc2NhcGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGVzY2FwZWQgdGV4dC5cblx0XHQgKi9cblx0XHRlc2NhcGVSZWdFeHA6ICh0ZXh0KSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5lc2NhcGVSZWdFeHAodGV4dCkucmVwbGFjZSgvIHxfL2csICdbXyBdJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBmb3JtYXRUaW1lXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHRpbWUgVGhlIHN0cmluZyB0byBmb3JhbXRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFRpbWU6ICh0aW1lKSA9PiB7XG5cdFx0XHRsZXQgbTtcblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnNlYyhvbmQpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV1956eSYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1pbih1dGUpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195YiGYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmhvdXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypkYXlzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWkqWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp3ZWVrcz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCfkuKrmnIgnLCAn5YCL5pyIJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp5ZWFycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lubRgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KHRpbWUudHJpbSgpKSkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LndnVUxTKCfml6DpmZDmnJ8nLCAn54Sh6ZmQ5pyfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGltZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFwcGVuZCBwdW5jdHVhdGlvbiB0byBhIHN0cmluZyB3aGVuIGl0J3MgbWlzc2luZ1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwdW5jdHVhdGlvblxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0YXBwZW5kUHVuY3R1YXRpb246IChzdHIsIHB1bmN0dWF0aW9uKSA9PiB7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwdW5jdHVhdGlvbiA9ICfjgIInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5zZWFyY2goL1suPyE744CC77yf77yB77ybXSQvKSA9PT0gLTEpIHtcblx0XHRcdFx0c3RyICs9IHB1bmN0dWF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIGFycmF5cy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5hcnJheVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmFycmF5ID0ge1xuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBkdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBkdXBsaWNhdGVzIHJlbW92ZWQuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdHVuaXE6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkudW5pcScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG5vbi1kdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgZWFjaCB2YWx1ZVxuXHRcdCAqIHJlbW92ZWQ7IHN1YnNlcXVlbnQgaW5zdGFuY2VzIG9mIHRob3NlIHZhbHVlcyAoZHVwbGljYXRlcykgcmVtYWluLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHRkdXBzOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmR1cHMnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEJyZWFrIHVwIGFuIGFycmF5IGludG8gc21hbGxlciBhcnJheXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIFNpemUgb2YgZWFjaCBjaHVuayAoZXhjZXB0IHRoZSBsYXN0LCB3aGljaCBjb3VsZCBiZSBkaWZmZXJlbnQpLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheVtdfSBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzbWFsbGVyLCBjaHVua2VkIGFycmF5cy5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0Y2h1bms6IChhcnIsIHNpemUpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuY2h1bmsnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicgfHwgc2l6ZSA8PSAwKSB7XG5cdFx0XHRcdC8vIHByZXR0eSBpbXBvc3NpYmxlIHRvIGRvIGFueXRoaW5nIDopXG5cdFx0XHRcdHJldHVybiBbYXJyXTsgLy8gd2UgcmV0dXJuIGFuIGFycmF5IGNvbnNpc3Rpbmcgb2YgdGhpcyBhcnJheS5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbnVtQ2h1bmtzID0gTWF0aC5jZWlsKGFyci5sZW5ndGggLyBzaXplKTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IG51bUNodW5rcyxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaHVua3M7IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBhcnIuc2xpY2UoaSAqIHNpemUsIChpICsgMSkgKiBzaXplKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBlbmhhbmNlIHNlbGVjdDIgbWVudXMuIFNlZSB0d2lua2xld2FybiwgdHdpbmtsZWJsb2NrXG5cdCAqIGZvciBzYW1wbGUgdXNhZ2VzLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL3NlbGVjdDIub3JnL31cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zZWxlY3QyXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnNlbGVjdDJcblx0ICovXG5cdE1vcmViaXRzLnNlbGVjdDIgPSB7XG5cdFx0bWF0Y2hlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgaW4gd2hpY2ggaWYgdGhlIG9wdGdyb3VwIG5hbWUgbWF0Y2hlcywgYWxsIG9wdGlvbnMgaW4gdGhhdFxuXHRcdFx0ICogZ3JvdXAgYXJlIHNob3duLCBsaWtlIGluIGpxdWVyeS5jaG9zZW4uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHRcdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHRcdFx0ICovXG5cdFx0XHRvcHRncm91cEZ1bGw6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHBhcmFtcy50ZXJtICYmIGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHBhcmFtcy50ZXJtLnRvVXBwZXJDYXNlKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0LmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgdGhhdCBtYXRjaGVzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB3b3JkcyBvbmx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0d29yZEJlZ2lubmluZzogKHBhcmFtcywgZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbE1hdGNoZXIgPSAkLmZuLnNlbGVjdDIuZGVmYXVsdHMuZGVmYXVsdHMubWF0Y2hlcjtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNYXRjaGVyKHBhcmFtcywgZGF0YSk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhcGFyYW1zLnRlcm0gfHxcblx0XHRcdFx0XHQocmVzdWx0ICYmIG5ldyBSZWdFeHAoYFxcXFxiJHttdy51dGlsLmVzY2FwZVJlZ0V4cChwYXJhbXMudGVybSl9YCwgJ2knKS50ZXN0KHJlc3VsdC50ZXh0KSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVbmRlcmxpbmUgbWF0Y2hlZCBwYXJ0IG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHQgKi9cblx0XHRoaWdobGlnaHRTZWFyY2hNYXRjaGVzOiAoZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VhcmNoVGVybSA9IE1vcmViaXRzLnNlbGVjdDJTZWFyY2hRdWVyeTtcblx0XHRcdGlmICghc2VhcmNoVGVybSB8fCBkYXRhLmxvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEudGV4dDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlkeCA9IGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpKTtcblx0XHRcdGlmIChpZHggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoMCwgaWR4KSxcblx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHQuY3NzKCd0ZXh0LWRlY29yYXRpb24nLCAndW5kZXJsaW5lJylcblx0XHRcdFx0XHQudGV4dChkYXRhLnRleHQuc2xpY2UoaWR4LCBpZHggKyBzZWFyY2hUZXJtLmxlbmd0aCkpLFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogSW50ZXJjZXB0IHF1ZXJ5IGFzIGl0IGlzIGhhcHBlbmluZywgZm9yIHVzZSBpbiBoaWdobGlnaHRTZWFyY2hNYXRjaGVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHQgKi9cblx0XHRxdWVyeUludGVyY2VwdG9yOiAocGFyYW1zKSA9PiB7XG5cdFx0XHRNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnkgPSBwYXJhbXMgJiYgcGFyYW1zLnRlcm07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBPcGVuIGRyb3Bkb3duIGFuZCBiZWdpbiBzZWFyY2ggd2hlbiB0aGUgYC5zZWxlY3QyLXNlbGVjdGlvbmAgaGFzXG5cdFx0ICogZm9jdXMgYW5kIGEga2V5IGlzIHByZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2XG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9pc3N1ZXMvMzI3OSNpc3N1ZWNvbW1lbnQtNDQyNTI0MTQ3fVxuXHRcdCAqL1xuXHRcdGF1dG9TdGFydDogKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYud2hpY2ggPCA0OCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGFyZ2V0ID0gJChldi50YXJnZXQpLmNsb3Nlc3QoJy5zZWxlY3QyLWNvbnRhaW5lcicpO1xuXHRcdFx0aWYgKCF0YXJnZXQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wcmV2KCk7XG5cdFx0XHR0YXJnZXQuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0Y29uc3Qgc2VhcmNoID0gdGFyZ2V0LmRhdGEoJ3NlbGVjdDInKS5kcm9wZG93bi4kc2VhcmNoIHx8IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuc2VsZWN0aW9uLiRzZWFyY2g7XG5cdFx0XHQvLyBVc2UgRE9NIC5mb2N1cygpIHRvIHdvcmsgYXJvdW5kIGEgalF1ZXJ5IDMuNi4wIHJlZ3Jlc3Npb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzU5OTMpXG5cdFx0XHRzZWFyY2hbMF0uZm9jdXMoKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogVGVtcG9yYXJpbHkgaGlkZSBhIHBhcnQgb2YgYSBzdHJpbmcgd2hpbGUgcHJvY2Vzc2luZyB0aGUgcmVzdCBvZiBpdC5cblx0ICogVXNlZCBieSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHQucGFnZSNjb21tZW50T3V0SW1hZ2V8TW9yZWJpdHMud2lraXRleHQucGFnZS5jb21tZW50T3V0SW1hZ2V9LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgaW5pdGlhbCB0ZXh0IHRvIHByb2Nlc3MuXG5cdCAqIEBleGFtcGxlIGNvbnN0IHUgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoJ0hlbGxvIHdvcmxkIDwhLS0gd29ybGQgLS0+IHdvcmxkJyk7XG5cdCAqIHUudW5iaW5kKCc8IS0tJywgJy0tPicpOyAvLyB0ZXh0IGluc2lkZSBjb21tZW50IHJlbWFpbnMgaW50YWN0XG5cdCAqIHUuY29udGVudCA9IHUuY29udGVudC5yZXBsYWNlKC93b3JsZC9nLCAnZWFydGgnKTtcblx0ICogdS5yZWJpbmQoKTsgLy8gZ2l2ZXMgJ0hlbGxvIGVhcnRoIDwhLS0gd29ybGQgLS0+IGVhcnRoJ1xuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0LyoqIFRoZSB0ZXh0IGJlaW5nIHByb2Nlc3NlZC4gKi9cblx0XHR0aGlzLmNvbnRlbnQgPSBzdHJpbmc7XG5cdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHR0aGlzLmhpc3RvcnkgPSB7fTtcblx0XHR0aGlzLnByZWZpeCA9IGAlVU5JUTo6JHtNYXRoLnJhbmRvbSgpfTo6YDtcblx0XHR0aGlzLnBvc3RmaXggPSAnOjpVTklRJSc7XG5cdH07XG5cdE1vcmViaXRzLnVuYmluZGVyLnByb3RvdHlwZSA9IHtcblx0XHQvKipcblx0XHQgKiBIaWRlIHRoZSByZWdpb24gZW5jYXBzdWxhdGVkIGJ5IHRoZSBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIGZyb21cblx0XHQgKiBzdHJpbmcgcHJvY2Vzc2luZy4gIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgd2lsbCBiZSB1c2VkIGluIGFcblx0XHQgKiBSZWdFeHAsIHNvIGl0ZW1zIHRoYXQgbmVlZCBlc2NhcGluZyBzaG91bGQgYmUgdXNlIGBcXFxcYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcG9zdGZpeFxuXHRcdCAqIEB0aHJvd3MgSWYgZWl0aGVyIGBwcmVmaXhgIG9yIGBwb3N0Zml4YCBpcyBtaXNzaW5nLlxuXHRcdCAqL1xuXHRcdHVuYmluZChwcmVmaXgsIHBvc3RmaXgpIHtcblx0XHRcdGlmICghcHJlZml4IHx8ICFwb3N0Zml4KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQm90aCBwcmVmaXggYW5kIHBvc3RmaXggbXVzdCBiZSBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAke3ByZWZpeH0oW1xcXFxzXFxcXFNdKj8pJHtwb3N0Zml4fWAsICdnJyk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyZSwgTW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sodGhpcykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVzdG9yZSB0aGUgaGlkZGVuIHBvcnRpb24gb2YgdGhlIGBjb250ZW50YCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIG91dHB1dC5cblx0XHQgKi9cblx0XHRyZWJpbmQoKSB7XG5cdFx0XHRsZXQge2NvbnRlbnR9ID0gdGhpcztcblx0XHRcdGZvciAoY29uc3QgY3VycmVudCBpbiB0aGlzLmhpc3RvcnkpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHRoaXMuaGlzdG9yeSwgY3VycmVudCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGN1cnJlbnQsIHRoaXMuaGlzdG9yeVtjdXJyZW50XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9LFxuXHRcdHByZWZpeDogbnVsbCxcblx0XHQvLyAlVU5JUTo6MC41OTU1OTgxNjQ0OTM4MzI0Ojpcblx0XHRwb3N0Zml4OiBudWxsLFxuXHRcdC8vIDo6VU5JUSVcblx0XHRjb250ZW50OiBudWxsLFxuXHRcdC8vIHN0cmluZ1xuXHRcdGNvdW50ZXI6IG51bGwsXG5cdFx0Ly8gMCsrXG5cdFx0aGlzdG9yeTogbnVsbCwgLy8ge31cblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy51bmJpbmRlclxuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sgPSAoc2VsZikgPT4ge1xuXHRcdHJldHVybiAobWF0Y2gpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzZWxmLnByZWZpeCArIHNlbGYuY291bnRlciArIHNlbGYucG9zdGZpeDtcblx0XHRcdHNlbGYuaGlzdG9yeVtjdXJyZW50XSA9IG1hdGNoO1xuXHRcdFx0KytzZWxmLmNvdW50ZXI7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmRhdGUgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGEgZGF0ZSBvYmplY3Qgd2l0aCBlbmhhbmNlZCBwcm9jZXNzaW5nIGNhcGFiaWxpdGllcywgYSBsYVxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vfG1vbWVudC5qc30uIE1lZGlhV2lraSB0aW1lc3RhbXAgZm9ybWF0IGlzIGFsc29cblx0ICogYWNjZXB0YWJsZSwgaW4gYWRkaXRpb24gdG8gZXZlcnl0aGluZyB0aGF0IEpTIERhdGUoKSBhY2NlcHRzLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHQvLyBDaGVjayBNZWRpYVdpa2kgZm9ybWF0c1xuXHRcdC8vIE11c3QgYmUgZmlyc3Qgc2luY2UgZmlyZWZveCBlcnJvbmVvdXNseSBhY2NlcHRzIHRoZSB0aW1lc3RhbXBcblx0XHQvLyBmb3JtYXQsIHNhbnMgdGltZXpvbmUgKFNlZSBhbHNvOiAjOTIxLCAjOTM2LCAjMTE3NCwgIzExODcpLCBhbmQgdGhlXG5cdFx0Ly8gMTQtZGlnaXQgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgZGlmZmVyZW50bHkuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjb25zdCBbcGFyYW1dID0gYXJncztcblx0XHRcdGlmICgvXlxcZHsxNH0kLy50ZXN0KHBhcmFtKSkge1xuXHRcdFx0XHQvLyBZWVlZTU1EREhIbW1zc1xuXHRcdFx0XHRjb25zdCBkaWdpdE1hdGNoID0gLyhcXGR7NH0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8uZXhlYyhwYXJhbSk7XG5cdFx0XHRcdGlmIChkaWdpdE1hdGNoKSB7XG5cdFx0XHRcdFx0Ly8gLi4uLi4geWVhciAuLi4gbW9udGggLi4gZGF0ZSAuLi4gaG91ciAuLi4uIG1pbnV0ZSAuLi4uLiBzZWNvbmRcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoXG5cdFx0XHRcdFx0XHRSZWZsZWN0LmFwcGx5KERhdGUuVVRDLCBudWxsLCBbXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMV0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMl0gLSAxLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzNdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzRdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzVdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzZdLFxuXHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gV2lraXRleHQgc2lnbmF0dXJlIHRpbWVzdGFtcFxuXHRcdFx0XHRjb25zdCBkYXRlUGFydHMgPSBNb3JlYml0cy5sMTBuLnNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdChwYXJhbSk7XG5cdFx0XHRcdGlmIChkYXRlUGFydHMpIHtcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgZGF0ZVBhcnRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLl9kKSB7XG5cdFx0XHQvLyBUcnkgc3RhbmRhcmQgZGF0ZVxuXHRcdFx0dGhpcy5fZCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRGF0ZSwgW0RhdGUsIC4uLmdlbmVyYXRlQXJyYXkoYXJncyldKSkoKTtcblx0XHR9XG5cdFx0Ly8gU3RpbGwgbm8/XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0bXcubG9nLndhcm4oJ0ludmFsaWQgTW9yZWJpdHMuZGF0ZSBpbml0aWFsaXNhdGlvbjonLCBhcmdzKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBMb2NhbGl6ZWQgc3RyaW5ncyBmb3IgZGF0ZSBwcm9jZXNzaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNTaG9ydFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNTaG9ydFxuXHQgKiBAcHJvcGVydHkge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fSByZWxhdGl2ZVRpbWVzXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEgPSB7XG5cdFx0Ly8gbWVzc2FnZSBuYW1lcyBoZXJlIGNvcnJlc3BvbmQgdG8gTWVkaWFXaWtpIG1lc3NhZ2UgbmFtZXNcblx0XHQvLyBObyBpMThuIGF0IHRoaXMgdGltZVxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vbnRoc1Nob3J0OiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0ZGF5czogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcblx0XHRkYXlzU2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG5cdFx0cmVsYXRpdmVUaW1lczoge1xuXHRcdFx0dGhpc0RheTogJ1vku4rlpKldQSBoaDptbScsXG5cdFx0XHRwcmV2RGF5OiAnW+aYqOWkqV1BIGhoOm1tJyxcblx0XHRcdG5leHREYXk6ICdb5piO5aSpXUEgaGg6bW0nLFxuXHRcdFx0dGhpc1dlZWs6ICdkZGRkQSBoaDptbScsXG5cdFx0XHRwYXN0V2VlazogJ1vkuIpdZGRkZEEgaGg6bW0nLFxuXHRcdFx0b3RoZXI6ICdZWVlZLU1NLUREJyxcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogTWFwIHVuaXRzIHdpdGggZ2V0dGVyL3NldHRlciBmdW5jdGlvbiBuYW1lcywgZm9yIGBhZGRgIGFuZCBgc3VidHJhY3RgXG5cdCAqIG1ldGhvZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY29uZHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1pbnV0ZXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGhvdXJzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB3ZWVrc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB5ZWFyc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS51bml0TWFwID0ge1xuXHRcdHNlY29uZHM6ICdTZWNvbmRzJyxcblx0XHRtaW51dGVzOiAnTWludXRlcycsXG5cdFx0aG91cnM6ICdIb3VycycsXG5cdFx0ZGF5czogJ0RhdGUnLFxuXHRcdHdlZWtzOiAnV2VlaycsXG5cdFx0Ly8gTm90IGEgZnVuY3Rpb24gYnV0IGhhbmRsZWQgaW4gYGFkZGAgdGhyb3VnaCBjdW5uaW5nIHVzZSBvZiBtdWx0aXBsaWNhdGlvblxuXHRcdG1vbnRoczogJ01vbnRoJyxcblx0XHR5ZWFyczogJ0Z1bGxZZWFyJyxcblx0fTtcblx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGUgPSB7XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuXHRcdGlzVmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNCZWZvcmUoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNBZnRlcihkYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ01vbnRoTmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDRGF5TmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldERheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGQgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHRcdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdFx0ICogQHRocm93cyBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0YWRkKG51bWJlciwgdW5pdCkge1xuXHRcdFx0bGV0IG51bSA9IE51bWJlci5wYXJzZUludChudW1iZXIsIDEwKTsgLy8gbm9ybWFsaXplXG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBudW1iZXIgXCIke251bWJlcn1cIiBwcm92aWRlZC5gKTtcblx0XHRcdH1cblx0XHRcdHVuaXQgPSB1bml0LnRvTG93ZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0Y29uc3Qge3VuaXRNYXB9ID0gTW9yZWJpdHMuZGF0ZTtcblx0XHRcdGxldCB1bml0Tm9ybSA9IHVuaXRNYXBbdW5pdF0gfHwgdW5pdE1hcFtgJHt1bml0fXNgXTsgLy8gc28gdGhhdCBib3RoIHNpbmd1bGFyIGFuZCAgcGx1cmFsIGZvcm1zIHdvcmtcblx0XHRcdGlmICh1bml0Tm9ybSkge1xuXHRcdFx0XHQvLyBObyBidWlsdC1pbiB3ZWVrIGZ1bmN0aW9ucywgc28gcmF0aGVyIHRoYW4gYnVpbGQgb3V0IElTTydzIGdldFdlZWsvc2V0V2VlaywganVzdCBtdWx0aXBseVxuXHRcdFx0XHQvLyBQcm9iYWJseSBjYW4ndCBiZSB1c2VkIGZvciBKdWxpYW4tPkdyZWdvcmlhbiBjaGFuZ2VvdmVycywgZXRjLlxuXHRcdFx0XHRpZiAodW5pdE5vcm0gPT09ICdXZWVrJykge1xuXHRcdFx0XHRcdHVuaXROb3JtID0gJ0RhdGUnO1xuXHRcdFx0XHRcdG51bSAqPSA3O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbYHNldCR7dW5pdE5vcm19YF0odGhpc1tgZ2V0JHt1bml0Tm9ybX1gXSgpICsgbnVtKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBcIiR7dW5pdH1cIjogT25seSAke09iamVjdC5rZXlzKHVuaXRNYXApLmpvaW4oJywgJyl9IGFyZSBhbGxvd2VkLmApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU3VidHJhY3RzIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdHN1YnRyYWN0KG51bWJlciwgdW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKC1udW1iZXIsIHVuaXQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcgcGVyIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuXHRcdCAqIFJlcGxhY2VtZW50IHN5bnRheCBpcyBhIHN1YnNldCBvZiB0aGF0IGluIG1vbWVudC5qczpcblx0XHQgKlxuXHRcdCAqIHwgU3ludGF4IHwgT3V0cHV0IHxcblx0XHQgKiB8LS0tLS0tLS18LS0tLS0tLS18XG5cdFx0ICogfCBIIHwgSG91cnMgKDI0LWhvdXIpIHxcblx0XHQgKiB8IEhIIHwgSG91cnMgKDI0LWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgaCB8IEhvdXJzICgxMi1ob3VyKSB8XG5cdFx0ICogfCBoaCB8IEhvdXJzICgxMi1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IEEgfCBBTSBvciBQTSB8XG5cdFx0ICogfCBtIHwgTWludXRlcyB8XG5cdFx0ICogfCBtbSB8IE1pbnV0ZXMgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgcyB8IFNlY29uZHMgfFxuXHRcdCAqIHwgc3MgfCBTZWNvbmRzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IFNTUyB8IE1pbGxpc2Vjb25kcyBmcmFnbWVudCwgMyBkaWdpdHMgfFxuXHRcdCAqIHwgZCB8IERheSBudW1iZXIgb2YgdGhlIHdlZWsgKFN1bj0wKSB8XG5cdFx0ICogfCBkZGQgfCBBYmJyZXZpYXRlZCBkYXkgbmFtZSB8XG5cdFx0ICogfCBkZGRkIHwgRnVsbCBkYXkgbmFtZSB8XG5cdFx0ICogfCBEIHwgRGF0ZSB8XG5cdFx0ICogfCBERCB8IERhdGUgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkKSB8XG5cdFx0ICogfCBNTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE1NTSB8IEFiYnJldmlhdGVkIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgTU1NTSB8IEZ1bGwgbW9udGggbmFtZSB8XG5cdFx0ICogfCBZIHwgWWVhciB8XG5cdFx0ICogfCBZWSB8IEZpbmFsIHR3byBkaWdpdHMgb2YgeWVhciAoMjAgZm9yIDIwMjAsIDQyIGZvciAxOTQyKSB8XG5cdFx0ICogfCBZWVlZIHwgWWVhciAoc2FtZSBhcyBgWWApIHxcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRzdHIgLSBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZywgdXNpbmdcblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3ludGF4LiAgVXNlIGBbYCBhbmQgYF1gIHRvIGVzY2FwZSBpdGVtcy4gIElmIG5vdFxuXHRcdCAqIHByb3ZpZGVkLCB3aWxsIHJldHVybiB0aGUgSVNPLTg2MDEtZm9ybWF0dGVkIHN0cmluZy5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtIGBzeXN0ZW1gIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogYHV0Y2AsIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcmVsYXRpdmUgdG8gVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0KGZvcm1hdHN0ciwgem9uZSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRyZXR1cm4gJ0ludmFsaWQgZGF0ZSc7IC8vIFB1dCB0aGUgdHJ1dGggb3V0LCBwcmVmZXJhYmxlIHRvIFwiTmFOTmFOTmFuIE5hTjpOYU5cIiBvciB3aGF0ZXZlclxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdWRhdGUgPSB0aGlzO1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGRhdGUgb2JqZWN0IHRoYXQgd2lsbCBjb250YWluIHRoZSBkYXRlIHRvIGRpc3BsYXkgYXMgc3lzdGVtIHRpbWVcblx0XHRcdGlmICh6b25lID09PSAndXRjJykge1xuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygem9uZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Ly8gY29udmVydCB0byB1dGMsIHRoZW4gYWRkIHRoZSB1dGMgb2Zmc2V0IGdpdmVuXG5cdFx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkgKyB6b25lLCAnbWludXRlcycpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZGVmYXVsdCB0byBJU09TdHJpbmdcblx0XHRcdGlmICghZm9ybWF0c3RyKSB7XG5cdFx0XHRcdHJldHVybiB1ZGF0ZS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFkID0gKG51bSwgbGVuKSA9PiB7XG5cdFx0XHRcdGxlbiB8fD0gMjsgLy8gVXAgdG8gbGVuZ3RoIG9mIDAwICsgMVxuXHRcdFx0XHRyZXR1cm4gYDAwJHtudW19YC50b1N0cmluZygpLnNsaWNlKDAgLSBsZW4pO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGgyNCA9IHVkYXRlLmdldEhvdXJzKCk7XG5cdFx0XHRjb25zdCBtID0gdWRhdGUuZ2V0TWludXRlcygpO1xuXHRcdFx0Y29uc3QgcyA9IHVkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdGNvbnN0IG1zID0gdWRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBEID0gdWRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0Y29uc3QgTSA9IHVkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0Y29uc3QgWSA9IHVkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRjb25zdCBoMTIgPSBoMjQgJSAxMiB8fCAxMjtcblx0XHRcdGNvbnN0IGFtT3JQbSA9IGgyNCA+PSAxMiA/ICfkuIvljYgnIDogJ+S4iuWNiCc7XG5cdFx0XHRjb25zdCByZXBsYWNlbWVudE1hcCA9IHtcblx0XHRcdFx0SEg6IHBhZChoMjQpLFxuXHRcdFx0XHRIOiBoMjQsXG5cdFx0XHRcdGhoOiBwYWQoaDEyKSxcblx0XHRcdFx0aDogaDEyLFxuXHRcdFx0XHRBOiBhbU9yUG0sXG5cdFx0XHRcdG1tOiBwYWQobSksXG5cdFx0XHRcdG0sXG5cdFx0XHRcdHNzOiBwYWQocyksXG5cdFx0XHRcdHMsXG5cdFx0XHRcdFNTUzogcGFkKG1zLCAzKSxcblx0XHRcdFx0ZGRkZDogdWRhdGUuZ2V0RGF5TmFtZSgpLFxuXHRcdFx0XHRkZGQ6IHVkYXRlLmdldERheU5hbWVBYmJyZXYoKSxcblx0XHRcdFx0ZDogdWRhdGUuZ2V0RGF5KCksXG5cdFx0XHRcdEREOiBwYWQoRCksXG5cdFx0XHRcdEQsXG5cdFx0XHRcdE1NTU06IHVkYXRlLmdldE1vbnRoTmFtZSgpLFxuXHRcdFx0XHRNTU06IHVkYXRlLmdldE1vbnRoTmFtZUFiYnJldigpLFxuXHRcdFx0XHRNTTogcGFkKE0pLFxuXHRcdFx0XHRNLFxuXHRcdFx0XHRZWVlZOiBZLFxuXHRcdFx0XHRZWTogcGFkKFkgJSAxMDApLFxuXHRcdFx0XHRZLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKGZvcm1hdHN0cik7IC8vIGVzY2FwZSBzdHVmZiBiZXR3ZWVuIFsuLi5dXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoU3RyaW5nLnJhd2BcXFtgLCBTdHJpbmcucmF3YFxcXWApO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0LyogUmVnZXggbm90ZXM6XG5cdFx0XHRcdCAqIGQoZHsyLDN9KT8gbWF0Y2hlcyBleGFjdGx5IDEsIDMgb3IgNCBvY2N1cnJlbmNlcyBvZiAnZCcgKCdkZCcgaXMgdHJlYXRlZCBhcyBhIGRvdWJsZSBtYXRjaCBvZiAnZCcpXG5cdFx0XHRcdCAqIFl7MSwyfShZezJ9KT8gbWF0Y2hlcyBleGFjdGx5IDEsIDIgb3IgNCBvY2N1cnJlbmNlcyBvZiAnWSdcblx0XHRcdFx0ICovXG5cdFx0XHRcdC9IezEsMn18aHsxLDJ9fG17MSwyfXxzezEsMn18U1NTfGQoZHsyLDN9KT98RHsxLDJ9fE17MSw0fXxZezEsMn0oWXsyfSk/fEEvZyxcblx0XHRcdFx0KG1hdGNoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2VtZW50TWFwW21hdGNoXTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB1bmJpbmRlci5yZWJpbmQoKS5yZXBsYWNlKC9cXFsoLio/KVxcXS9nLCAnJDEnKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdpdmVzIGEgcmVhZGFibGUgcmVsYXRpdmUgdGltZSBzdHJpbmcgc3VjaCBhcyBcIlllc3RlcmRheSBhdCA2OjQzIFBNXCIgb3IgXCJMYXN0IFRodXJzZGF5IGF0IDExOjQ1IEFNXCIuXG5cdFx0ICogU2ltaWxhciB0byBgY2FsZW5kYXJgIGluIG1vbWVudC5qcywgYnV0IHdpdGggdGltZSB6b25lIHN1cHBvcnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtICdzeXN0ZW0nIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogJ3V0YycgKGZvciBVVEMpLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHBhc3QgVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Y2FsZW5kYXIoem9uZSkge1xuXHRcdFx0Ly8gWmVybyBvdXQgdGhlIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIGFuZCBtaWxsaXNlY29uZHMgLSBrZWVwaW5nIG9ubHkgdGhlIGRhdGU7XG5cdFx0XHQvLyBmaW5kIHRoZSBkaWZmZXJlbmNlLiBOb3RlIHRoYXQgc2V0SG91cnMoKSByZXR1cm5zIHRoZSBzYW1lIHRoaW5nIGFzIGdldFRpbWUoKS5cblx0XHRcdGNvbnN0IGRhdGVEaWZmID0gKG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkgLSBuZXcgRGF0ZSh0aGlzKS5zZXRIb3VycygwLCAwLCAwLCAwKSkgLyA4LjY0ZTc7XG5cdFx0XHRzd2l0Y2ggKHRydWUpIHtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMudGhpc0RheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IDE6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnByZXZEYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID4gMCAmJiBkYXRlRGlmZiA8IDc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnBhc3RXZWVrLCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gLTE6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLm5leHREYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmIDwgMCAmJiBkYXRlRGlmZiA+IC03OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzV2Vlaywgem9uZSk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLm90aGVyLCB6b25lKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgd2lraXRleHQgc2VjdGlvbiB0aXRsZXMsIHN1Y2hcblx0XHQgKiBhcyBgPT1EZWNlbWJlciAyMDE5PT1gIG9yIGA9PT0gSmFuIDIwMTggPT09YC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtSZWdFeHB9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXJSZWdleCgpIHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXig9PSspXFxcXHMqJHt0aGlzLmdldFVUQ0Z1bGxZZWFyKCl95bm0KD86JHt0aGlzLmdldFVUQ01vbnRoTmFtZSgpfXwke3RoaXMuZ2V0VVRDTW9udGhOYW1lQWJicmV2KCl9KVxcXFxzKlxcXFwxYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSB3aWtpdGV4dCBzZWN0aW9uIGhlYWRlciB3aXRoIHRoZSBtb250aCBhbmQgeWVhci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbbGV2ZWw9Ml0gLSBIZWFkZXIgbGV2ZWwuICBQYXNzIDAgZm9yIGp1c3QgdGhlIHRleHRcblx0XHQgKiB3aXRoIG5vIHdpa2l0ZXh0IG1hcmtlcnMgKD09KS5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdG1vbnRoSGVhZGVyKGxldmVsKSB7XG5cdFx0XHQvLyBEZWZhdWx0IHRvIDIsIGJ1dCBhbGxvdyBmb3IgMCBvciBzdHJpbmd5IG51bWJlcnNcblx0XHRcdGxldmVsID0gTnVtYmVyLnBhcnNlSW50KGxldmVsLCAxMCk7XG5cdFx0XHRsZXZlbCA9IE51bWJlci5pc05hTihsZXZlbCkgPyAyIDogbGV2ZWw7XG5cdFx0XHRjb25zdCBoZWFkZXIgPSAnPScucmVwZWF0KGxldmVsKTtcblx0XHRcdGNvbnN0IHRleHQgPSBgJHt0aGlzLmdldFVUQ0Z1bGxZZWFyKCl95bm0JHt0aGlzLmdldFVUQ01vbnRoTmFtZSgpfWA7XG5cdFx0XHRpZiAoaGVhZGVyLmxlbmd0aCkge1xuXHRcdFx0XHQvLyB3aWtpdGV4dC1mb3JtYXR0ZWQgaGVhZGVyXG5cdFx0XHRcdHJldHVybiBgJHtoZWFkZXJ9ICR7dGV4dH0gJHtoZWFkZXJ9YDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0ZXh0OyAvLyBKdXN0IHRoZSBzdHJpbmdcblx0XHR9LFxuXHR9O1xuXHQvLyBBbGxvdyBuYXRpdmUgRGF0ZS5wcm90b3R5cGUgbWV0aG9kcyB0byBiZSB1c2VkIG9uIE1vcmViaXRzLmRhdGUgb2JqZWN0c1xuXHRmb3IgKGNvbnN0IGZ1bmMgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoRGF0ZS5wcm90b3R5cGUpKSB7XG5cdFx0Ly8gRXhjbHVkZSBtZXRob2RzIHRoYXQgY29sbGlkZSB3aXRoIFBhZ2VUcmlhZ2UncyBEYXRlLmpzIGV4dGVybmFsLCB3aGljaCBjbG9iYmVycyBuYXRpdmUgRGF0ZVxuXHRcdGlmICghWydhZGQnLCAnZ2V0RGF5TmFtZScsICdnZXRNb250aE5hbWUnXS5pbmNsdWRlcyhmdW5jKSkge1xuXHRcdFx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGVbZnVuY10gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZFtmdW5jXSguLi5hcmdzKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBWYXJpb3VzIG9iamVjdHMgZm9yIHdpa2kgZWRpdGluZyBhbmQgQVBJIGFjY2VzcywgaW5jbHVkaW5nXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLndpa2lcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpID0ge307XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCBhcyBvZiBOb3ZlbWJlciAyMDIwXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5pc1BhZ2VSZWRpcmVjdCA9ICgpID0+IHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHQnW01vcmViaXRzXSBOT1RFOiBNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0IGhhcyBiZWVuIGRlcHJlY2F0ZWQsIHVzZSBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCBpbnN0ZWFkLidcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCgpO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPSAwO1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPSAwO1xuXHQvKipcblx0ICogRGlzcGxheSBtZXNzYWdlIGFuZC9vciByZWRpcmVjdCB0byBwYWdlIHVwb24gY29tcGxldGlvbiBvZiB0YXNrcy5cblx0ICpcblx0ICogRXZlcnkgY2FsbCB0byBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgcmVzdWx0cyBpbiB0aGUgZGlzcGF0Y2ggb2YgYW5cblx0ICogYXN5bmNocm9ub3VzIGNhbGxiYWNrLiBFYWNoIGNhbGxiYWNrIGNhbiBpbiB0dXJuIG1ha2UgYW4gYWRkaXRpb25hbCBjYWxsIHRvXG5cdCAqIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSB0byBjb250aW51ZSBhIHByb2Nlc3Npbmcgc2VxdWVuY2UuIEF0IHRoZVxuXHQgKiBjb25jbHVzaW9uIG9mIHRoZSBmaW5hbCBjYWxsYmFjayBvZiBhIHByb2Nlc3Npbmcgc2VxdWVuY2UsIGl0IGlzIG5vdFxuXHQgKiBwb3NzaWJsZSB0byBzaW1wbHkgcmV0dXJuIHRvIHRoZSBvcmlnaW5hbCBjYWxsZXIgYmVjYXVzZSB0aGVyZSBpcyBubyBjYWxsXG5cdCAqIHN0YWNrIGxlYWRpbmcgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dC4gSW5zdGVhZCxcblx0ICogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSBpcyBjYWxsZWQgdG8gZGlzcGxheSB0aGUgcmVzdWx0IHRvXG5cdCAqIHRoZSB1c2VyIGFuZCB0byBwZXJmb3JtIGFuIG9wdGlvbmFsIHBhZ2UgcmVkaXJlY3QuXG5cdCAqXG5cdCAqIFRoZSBkZXRlcm1pbmF0aW9uIG9mIHdoZW4gdG8gY2FsbCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzXG5cdCAqIG1hbmFnZWQgdGhyb3VnaCB0aGUgZ2xvYmFscyBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgYW5kXG5cdCAqIE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQuIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBpc1xuXHQgKiBpbmNyZW1lbnRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgTW9yZWJpdHMud2lraS5hcGkgY2FsbCBhbmQgZGVjcmVtZW50ZWRcblx0ICogYWZ0ZXIgdGhlIGNvbXBsZXRpb24gb2YgYSBjYWxsYmFjayBmdW5jdGlvbi4gSWYgYSBjYWxsYmFjayBmdW5jdGlvbiBkb2VzXG5cdCAqIG5vdCBjcmVhdGUgYSBuZXcgTW9yZWJpdHMud2lraS5hcGkgb2JqZWN0IGJlZm9yZSBleGl0aW5nLCBpdCBpcyB0aGUgZmluYWxcblx0ICogc3RlcCBpbiB0aGUgcHJvY2Vzc2luZyBjaGFpbiBhbmQgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSB3aWxsXG5cdCAqIHRoZW4gYmUgY2FsbGVkLlxuXHQgKlxuXHQgKiBPcHRpb25hbGx5LCBjYWxsZXJzIG1heSB1c2UgTW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50KCkgdG8gaW5kaWNhdGUgdGhhdFxuXHQgKiBwcm9jZXNzaW5nIGlzIG5vdCBjb21wbGV0ZSB1cG9uIHRoZSBjb25jbHVzaW9uIG9mIHRoZSBmaW5hbCBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi4gIFRoaXMgaXMgdXNlZCBmb3IgYmF0Y2ggb3BlcmF0aW9ucy4gVGhlIGVuZCBvZiBhIGJhdGNoIGlzXG5cdCAqIHNpZ25hbGVkIGJ5IGNhbGxpbmcgTW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCA9IChzZWxmKSA9PiB7XG5cdFx0aWYgKC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IDw9IDAgJiYgTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA8PSAwKSB7XG5cdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudChzZWxmKTtcblx0XHR9XG5cdH07XG5cdC8vIENoYW5nZSBwZXIgYWN0aW9uIHdhbnRlZFxuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQgPSAoKSA9PiB7XG5cdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSkge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmFjdGlvbkNvbXBsZXRlZChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UpO1xuXHRcdH1cblx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpIHtcblx0XHRcdC8vIGlmIGl0IGlzbid0IGEgVVJMLCBtYWtlIGl0IG9uZS4gVE9ETzogVGhpcyBicmVha3Mgb24gdGhlIGFydGljbGVzICdodHRwOi8vJywgJ2Z0cDovLycsIGFuZCBzaW1pbGFyIG9uZXMuXG5cdFx0XHRpZiAoIS9eXFx3KzpcXC9cXC8vLnRlc3QoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpKSB7XG5cdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbXcudXRpbC5nZXRVcmwoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpO1xuXHRcdFx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZm9sbG93UmVkaXJlY3QgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgKz0gJz9yZWRpcmVjdD1ubyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRsb2NhdGlvbiA9IE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0O1xuXHRcdFx0fSwgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQudGltZU91dCk7XG5cdFx0fVxuXHR9O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQudGltZU91dCA9XG5cdFx0d2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dCA9PT0gdW5kZWZpbmVkID8gNTAwMCA6IHdpbmRvdy53cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQ7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCA9IG51bGw7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UgPSBudWxsO1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRcdCsrTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdDtcblx0fTtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCA9ICgpID0+IHtcblx0XHRpZiAoLS1Nb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDAgJiYgTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IDw9IDApIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCk7XG5cdFx0fVxuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kuYXBpICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEFuIGVhc3kgd2F5IHRvIHRhbGsgdG8gdGhlIE1lZGlhV2lraSBBUEkuICBBY2NlcHRzIGVpdGhlciBqc29uIG9yIHhtbFxuXHQgKiAoZGVmYXVsdCkgZm9ybWF0czsgaWYganNvbiBpcyBzZWxlY3RlZCwgd2lsbCBkZWZhdWx0IHRvIGBmb3JtYXR2ZXJzaW9uPTJgXG5cdCAqIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLiAgU2ltaWxhcmx5LCBlbmZvcmNlcyBuZXdlciBgZXJyb3Jmb3JtYXRgcyxcblx0ICogZGVmYXVsdGluZyB0byBgaHRtbGAgaWYgdW5zcGVjaWZpZWQuICBgdXNlbGFuZ2AgZW5mb3JjZWQgdG8gdGhlIHdpa2knc1xuXHQgKiBjb250ZW50IGxhbmd1YWdlLlxuXHQgKlxuXHQgKiBJbiBuZXcgY29kZSwgdGhlIHVzZSBvZiB0aGUgbGFzdCAzIHBhcmFtZXRlcnMgc2hvdWxkIGJlIGF2b2lkZWQsIGluc3RlYWRcblx0ICogdXNlIHtAbGluayBNb3JlYml0cy53aWtpLmFwaSNzZXRTdGF0dXNFbGVtZW50fHNldFN0YXR1c0VsZW1lbnQoKX0gdG8gYmluZFxuXHQgKiB0aGUgc3RhdHVzIGVsZW1lbnQgKGlmIG5lZWRlZCkgYW5kIHVzZSBgLnRoZW4oKWAgb3IgYC5jYXRjaCgpYCBvbiB0aGVcblx0ICogcHJvbWlzZSByZXR1cm5lZCBieSBgcG9zdCgpYCwgcmF0aGVyIHRoYW4gc3BlY2lmeSB0aGUgYG9uU3VjY2Vzc2Agb3Jcblx0ICogYG9uRmFpbHVyZWAgY2FsbGJhY2tzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnRBY3Rpb24gLSBUaGUgY3VycmVudCBhY3Rpb24gKHJlcXVpcmVkKS5cblx0ICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5IC0gVGhlIHF1ZXJ5IChyZXF1aXJlZCkuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwuXG5cdCAqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBbc3RhdHVzRWxlbWVudF0gLSBBIE1vcmViaXRzLnN0YXR1cyBvYmplY3QgdG8gdXNlIGZvciBzdGF0dXMgbWVzc2FnZXMuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkVycm9yXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGlmIGFuIGVycm9yIG9jY3Vycy5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpID0gZnVuY3Rpb24gKGN1cnJlbnRBY3Rpb24sIHF1ZXJ5LCBvblN1Y2Nlc3MsIHN0YXR1c0VsZW1lbnQsIG9uRXJyb3IpIHtcblx0XHR0aGlzLmN1cnJlbnRBY3Rpb24gPSBjdXJyZW50QWN0aW9uO1xuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcblx0XHR0aGlzLnF1ZXJ5LmFzc2VydCA9ICd1c2VyJztcblx0XHQvLyBFbmZvcmNlIG5ld2VyIGVycm9yIGZvcm1hdHMsIHByZWZlcnJpbmcgaHRtbFxuXHRcdGlmICghcXVlcnkuZXJyb3Jmb3JtYXQgfHwgIVsnd2lraXRleHQnLCAncGxhaW50ZXh0J10uaW5jbHVkZXMocXVlcnkuZXJyb3Jmb3JtYXQpKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID0gJ2h0bWwnO1xuXHRcdH1cblx0XHQvLyBFeHBsaWNpdGx5IHVzZSB0aGUgd2lraSdzIGNvbnRlbnQgbGFuZ3VhZ2UgdG8gbWluaW1pemUgY29uZnVzaW9uLFxuXHRcdC8vIHNlZSAjMTE3OSBmb3IgZGlzY3Vzc2lvblxuXHRcdHRoaXMucXVlcnkudXNlbGFuZyB8fD0gJ2NvbnRlbnQnOyAvLyBVc2Ugd2dVc2VyTGFuZ3VhZ2UgZm9yIHByZXZpZXdcblx0XHR0aGlzLnF1ZXJ5LmVycm9ybGFuZyA9ICd1c2VsYW5nJztcblx0XHR0aGlzLnF1ZXJ5LmVycm9yc3VzZWxvY2FsID0gMTtcblx0XHR0aGlzLm9uU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHR0aGlzLm9uRXJyb3IgPSBvbkVycm9yO1xuXHRcdGlmIChzdGF0dXNFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnNldFN0YXR1c0VsZW1lbnQoc3RhdHVzRWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0gPSBuZXcgTW9yZWJpdHMuc3RhdHVzKGN1cnJlbnRBY3Rpb24pO1xuXHRcdH1cblx0XHQvLyBKU09OIGlzIHVzZWQgdGhyb3VnaG91dCBNb3JlYml0cy9Ud2lua2xlLCBidXQgeG1sIHJlbWFpbnMgdGhlIGRlZmF1bHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0aWYgKCFxdWVyeS5mb3JtYXQpIHtcblx0XHRcdHRoaXMucXVlcnkuZm9ybWF0ID0gJ3htbCc7XG5cdFx0fSBlbHNlIGlmIChxdWVyeS5mb3JtYXQgPT09ICdqc29uJyAmJiAhcXVlcnkuZm9ybWF0dmVyc2lvbikge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXR2ZXJzaW9uID0gJzInO1xuXHRcdH0gZWxzZSBpZiAoIVsneG1sJywgJ2pzb24nXS5pbmNsdWRlcyhxdWVyeS5mb3JtYXQpKSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtLmVycm9yKCdJbnZhbGlkIEFQSSBmb3JtYXQ6IG9ubHkgeG1sIGFuZCBqc29uIGFyZSBzdXBwb3J0ZWQuJyk7XG5cdFx0fVxuXHRcdC8vIElnbm9yZSB0YWdzIGZvciBxdWVyaWVzIGFuZCBtb3N0IGNvbW1vbiB1bnN1cHBvcnRlZCBhY3Rpb25zLCBwcm9kdWNlcyB3YXJuaW5nc1xuXHRcdGlmIChxdWVyeS5hY3Rpb24gJiYgWydxdWVyeScsICd3YXRjaCddLmluY2x1ZGVzKHF1ZXJ5LmFjdGlvbikpIHtcblx0XHRcdGRlbGV0ZSBxdWVyeS50YWdzO1xuXHRcdH0gZWxzZSBpZiAoIXF1ZXJ5LnRhZ3MgJiYgbW9yZWJpdHNXaWtpQ2hhbmdlVGFnKSB7XG5cdFx0XHRxdWVyeS50YWdzID0gbW9yZWJpdHNXaWtpQ2hhbmdlVGFnO1xuXHRcdH1cblx0fTtcblx0TW9yZWJpdHMud2lraS5hcGkucHJvdG90eXBlID0ge1xuXHRcdGN1cnJlbnRBY3Rpb246ICcnLFxuXHRcdG9uU3VjY2VzczogbnVsbCxcblx0XHRvbkVycm9yOiBudWxsLFxuXHRcdHBhcmVudDogd2luZG93LFxuXHRcdC8vIHVzZSBnbG9iYWwgY29udGV4dCBpZiB0aGVyZSBpcyBubyBwYXJlbnQgb2JqZWN0XG5cdFx0cXVlcnk6IG51bGwsXG5cdFx0cmVzcG9uc2U6IG51bGwsXG5cdFx0cmVzcG9uc2VYTUw6IG51bGwsXG5cdFx0Ly8gdXNlIGByZXNwb25zZWAgaW5zdGVhZDsgcmV0YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0c3RhdGVsZW06IG51bGwsXG5cdFx0Ly8gdGhpcyBub24tc3RhbmRhcmQgbmFtZSBrZXB0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdHN0YXR1c1RleHQ6IG51bGwsXG5cdFx0Ly8gcmVzdWx0IHJlY2VpdmVkIGZyb20gdGhlIEFQSSwgbm9ybWFsbHkgXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG5cdFx0ZXJyb3JDb2RlOiBudWxsLFxuXHRcdC8vIHNob3J0IHRleHQgZXJyb3IgY29kZSwgaWYgYW55LCBhcyBkb2N1bWVudGVkIGluIHRoZSBNZWRpYVdpa2kgQVBJXG5cdFx0ZXJyb3JUZXh0OiBudWxsLFxuXHRcdC8vIGZ1bGwgZXJyb3IgZGVzY3JpcHRpb24sIGlmIGFueVxuXHRcdGJhZHRva2VuUmV0cnk6IGZhbHNlLFxuXHRcdC8vIHNldCB0byB0cnVlIGlmIHRoaXMgb24gYSByZXRyeSBhdHRlbXB0ZWQgYWZ0ZXIgYSBiYWR0b2tlbiBlcnJvclxuXHRcdC8qKlxuXHRcdCAqIEtlZXAgdHJhY2sgb2YgcGFyZW50IG9iamVjdCBmb3IgY2FsbGJhY2tzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBwYXJlbnRcblx0XHQgKi9cblx0XHRzZXRQYXJlbnQocGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR9LFxuXHRcdC8qKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gc3RhdHVzRWxlbWVudCAqL1xuXHRcdHNldFN0YXR1c0VsZW1lbnQoc3RhdHVzRWxlbWVudCkge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IHN0YXR1c0VsZW1lbnQ7XG5cdFx0XHR0aGlzLnN0YXRlbGVtLnN0YXR1cyh0aGlzLmN1cnJlbnRBY3Rpb24pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2Fycnkgb3V0IHRoZSByZXF1ZXN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNhbGxlckFqYXhQYXJhbWV0ZXJzIC0gRG8gbm90IHNwZWNpZnkgYSBwYXJhbWV0ZXIgdW5sZXNzIHlvdSByZWFsbHlcblx0XHQgKiByZWFsbHkgd2FudCB0byBnaXZlIGpRdWVyeSBzb21lIGV4dHJhIHBhcmFtZXRlcnMuXG5cdFx0ICogQHJldHVybnMge3Byb21pc2V9IC0gQSBqUXVlcnkgcHJvbWlzZSBvYmplY3QgdGhhdCBpcyByZXNvbHZlZCBvciByZWplY3RlZCB3aXRoIHRoZSBhcGkgb2JqZWN0LlxuXHRcdCAqL1xuXHRcdHBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnMpIHtcblx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0Y29uc3QgcXVlcnlTdHJpbmdBcnIgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgW2ksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5xdWVyeSkpIHtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0XHRcdHF1ZXJ5U3RyaW5nQXJyW3F1ZXJ5U3RyaW5nQXJyLmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0YCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke3ZhbC5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCd8Jyl9YDtcblx0XHRcdFx0fSBlbHNlIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHF1ZXJ5U3RyaW5nQXJyW3F1ZXJ5U3RyaW5nQXJyLmxlbmd0aF0gPSBgJHtlbmNvZGVVUklDb21wb25lbnQoaSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Fyci5qb2luKCcmJykucmVwbGFjZSgvXiguKj8pKFxcYnRva2VuPVteJl0qKSYoLiopLywgJyQxJDMmJDInKTtcblx0XHRcdC8vIHRva2VuIHNob3VsZCBhbHdheXMgYmUgdGhlIGxhc3QgaXRlbSBpbiB0aGUgcXVlcnkgc3RyaW5nIChidWcgVFctQi0wMDEzKVxuXHRcdFx0Y29uc3QgYWpheHBhcmFtcyA9IHtcblx0XHRcdFx0Y29udGV4dDogdGhpcyxcblx0XHRcdFx0dHlwZTogdGhpcy5xdWVyeS5hY3Rpb24gPT09ICdxdWVyeScgPyAnR0VUJyA6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiBtdy51dGlsLndpa2lTY3JpcHQoJ2FwaScpLFxuXHRcdFx0XHRkYXRhOiBxdWVyeVN0cmluZyxcblx0XHRcdFx0ZGF0YVR5cGU6IHRoaXMucXVlcnkuZm9ybWF0LFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogbW9yZWJpdHNXaWtpQXBpVXNlckFnZW50LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5jYWxsZXJBamF4UGFyYW1ldGVycyxcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gJC5hamF4KGFqYXhwYXJhbXMpLnRoZW4oXG5cdFx0XHRcdGZ1bmN0aW9uIG9uQVBJc3VjY2VzcyhyZXNwb25zZSwgc3RhdHVzVGV4dCkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2VYTUwgPSByZXNwb25zZTtcblx0XHRcdFx0XHQvLyBMaW1pdCB0byBmaXJzdCBlcnJvclxuXHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uY29kZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnaHRtbCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLmh0bWw7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICd3aWtpdGV4dCcgfHwgdGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3BsYWludGV4dCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLnRleHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gJChyZXNwb25zZSkuZmluZCgnZXJyb3JzIGVycm9yJykuZXEoMCkuYXR0cignY29kZScpO1xuXHRcdFx0XHRcdFx0Ly8gU3VmZmljaWVudCBmb3IgaHRtbCwgd2lraXRleHQsIG9yIHBsYWludGV4dCBlcnJvcmZvcm1hdHNcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gJChyZXNwb25zZSkuZmluZCgnZXJyb3JzIGVycm9yJykuZXEoMCkudGV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuZXJyb3JDb2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0Ly8gdGhlIEFQSSBkaWRuJ3QgbGlrZSB3aGF0IHdlIHRvbGQgaXQsIGUuZy4sIGJhZCBlZGl0IHRva2VuIG9yIGFuIGVycm9yIGNyZWF0aW5nIGEgcGFnZVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBpbnZva2Ugc3VjY2VzcyBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRcdFx0aWYgKHRoaXMub25TdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHQvLyBzZXQgdGhlIGNhbGxiYWNrIGNvbnRleHQgdG8gdGhpcy5wYXJlbnQgZm9yIG5ldyBjb2RlIGFuZCBzdXBwbHkgdGhlIEFQSSBvYmplY3Rcblx0XHRcdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGZvciBsZWdhY3kgY29kZSlcblx0XHRcdFx0XHRcdHRoaXMub25TdWNjZXNzLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCgpO1xuXHRcdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZVdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIG9ubHkgbmV0d29yayBhbmQgc2VydmVyIGVycm9ycyByZWFjaCBoZXJlIC0gY29tcGxhaW50cyBmcm9tIHRoZSBBUEkgaXRzZWxmIGFyZSBjYXVnaHQgaW4gc3VjY2VzcygpXG5cdFx0XHRcdGZ1bmN0aW9uIG9uQVBJZmFpbHVyZShlcnJvciwgc3RhdHVzVGV4dCwgZXJyb3JUaHJvd24pIHtcblx0XHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRcdHRoaXMuZXJyb3JUaHJvd24gPSBlcnJvclRocm93bjsgLy8gZnJlcXVlbnRseSB1bmRlZmluZWRcblx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9XG5cdFx0XHRcdFx0XHRzdGF0dXNUZXh0ICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5Zyo6LCD55SoQVBJ5pe25Y+R55Sf5LqG6ZSZ6K+v4oCcJywgJ+WcqOWRvOWPq0FQSeaZgueZvOeUn+S6humMr+iqpOOAjCcpICtcblx0XHRcdFx0XHRcdGVycm9yLnN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3jgIInLCAn44CN44CCJyk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdHJldHVybkVycm9yKGNhbGxlckFqYXhQYXJhbWV0ZXJzKSB7XG5cdFx0XHRpZiAodGhpcy5lcnJvckNvZGUgPT09ICdiYWR0b2tlbicgJiYgIXRoaXMuYmFkdG9rZW5SZXRyeSkge1xuXHRcdFx0XHR0aGlzLnN0YXRlbGVtLndhcm4od2luZG93LndnVUxTKCfml6DmlYjku6TniYzvvIzojrflj5bmlrDnmoTku6TniYzlubbph43or5XigKbigKYnLCAn54Sh5pWI5qyK5p2W77yM5Y+W5b6X5paw55qE5qyK5p2W5Lim6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0XHR0aGlzLmJhZHRva2VuUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgYSBuZXcgQ1NSRiB0b2tlbiBhbmQgcmV0cnkuIElmIHRoZSBvcmlnaW5hbCBhY3Rpb24gbmVlZHMgYSBkaWZmZXJlbnRcblx0XHRcdFx0Ly8gdHlwZSBvZiBhY3Rpb24gdGhhbiBDU1JGLCB3ZSBkbyBvbmUgcG9pbnRsZXNzIHJldHJ5IGJlZm9yZSBiYWlsaW5nIG91dFxuXHRcdFx0XHRyZXR1cm4gTW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlbGVtLmVycm9yKGAke3RoaXMuZXJyb3JUZXh0fe+8iCR7dGhpcy5lcnJvckNvZGV977yJYCk7XG5cdFx0XHQvLyBpbnZva2UgZmFpbHVyZSBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRpZiAodGhpcy5vbkVycm9yKSB7XG5cdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHQvLyBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIGZvciBsZWdhY3kgY29kZVxuXHRcdFx0XHR0aGlzLm9uRXJyb3IuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBkb24ndCBjb21wbGV0ZSB0aGUgYWN0aW9uIHNvIHRoYXQgdGhlIGVycm9yIHJlbWFpbnMgZGlzcGxheWVkXG5cdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdFdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0fSxcblx0XHRnZXRTdGF0dXNFbGVtZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVsZW07XG5cdFx0fSxcblx0XHRnZXRFcnJvckNvZGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvckNvZGU7XG5cdFx0fSxcblx0XHRnZXRFcnJvclRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvclRleHQ7XG5cdFx0fSxcblx0XHRnZXRYTUwoKSB7XG5cdFx0XHQvLyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHVzZSBnZXRSZXNwb25zZSgpIGluc3RlYWRcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlWE1MO1xuXHRcdH0sXG5cdFx0Z2V0UmVzcG9uc2UoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogUmV0cmlldmVzIHdpa2l0ZXh0IGZyb20gYSBwYWdlLiBDYWNoaW5nIGVuYWJsZWQsIGR1cmF0aW9uIDEgZGF5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0ICovXG5cdE1vcmViaXRzLndpa2kuZ2V0Q2FjaGVkSnNvbiA9ICh0aXRsZSkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLndpa2kuYXBpKCcnLCBxdWVyeSkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0YXBpb2JqLmdldFN0YXR1c0VsZW1lbnQoKS51bmxpbmsoKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXBpb2JqLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRjb25zdCB3aWtpdGV4dCA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aWtpdGV4dCk7XG5cdFx0fSk7XG5cdH07XG5cdGxldCBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSAnUWl1d2VuLzEuMSAobW9yZWJpdHMuanMpJztcblx0LyoqXG5cdCAqIFNldCB0aGUgY3VzdG9tIHVzZXIgYWdlbnQgaGVhZGVyLCB3aGljaCBpcyB1c2VkIGZvciBzZXJ2ZXItc2lkZSBsb2dnaW5nLlxuXHQgKiBOb3RlIHRoYXQgZG9pbmcgc28gd2lsbCBzZXQgdGhlIHVzZXJhZ2VudCBmb3IgZXZlcnkgYE1vcmViaXRzLndpa2kuYXBpYFxuXHQgKiBwcm9jZXNzIHBlcmZvcm1lZCB0aGVyZWFmdGVyLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL2xpc3RzLndpa2ltZWRpYS5vcmcvcGlwZXJtYWlsL21lZGlhd2lraS1hcGktYW5ub3VuY2UvMjAxNC1Ob3ZlbWJlci8wMDAwNzUuaHRtbH1cblx0ICogZm9yIG9yaWdpbmFsIGFubm91bmNlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdWE9UWl1d2VuLzEuMSAobW9yZWJpdHMuanMpXSAtIFVzZXIgYWdlbnQuICBUaGUgZGVmYXVsdFxuXHQgKiB2YWx1ZSBvZiBgbW9yZWJpdHMuanNgIHdpbGwgYmUgYXBwZW5kZWQgdG8gYW55IHByb3ZpZGVkXG5cdCAqIHZhbHVlLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkuc2V0QXBpVXNlckFnZW50ID0gKHVhKSA9PiB7XG5cdFx0bW9yZWJpdHNXaWtpQXBpVXNlckFnZW50ID0gYFFpdXdlbi8xLjEgKG1vcmViaXRzLmpzJHt1YSA/IGA7ICR7dWF9YCA6ICcnfSlgO1xuXHR9O1xuXHQvKipcblx0ICogQ2hhbmdlL3JldmlzaW9uIHRhZyBhcHBsaWVkIHRvIE1vcmViaXRzIGFjdGlvbnMgd2hlbiBubyBvdGhlciB0YWdzIGFyZSBzcGVjaWZpZWQuXG5cdCAqIFVudXNlZCBieSBkZWZhdWx0LlxuXHQgKlxuXHQgKiBAY29uc3RhbnRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRjb25zdCBtb3JlYml0c1dpa2lDaGFuZ2VUYWcgPSAnJztcblx0LyoqXG5cdCAqIEdldCBhIG5ldyBDU1JGIHRva2VuIG9uIGVuY291bnRlcmluZyB0b2tlbiBlcnJvcnMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBNZWRpYVdpa2kgQ1NSRiB0b2tlbi5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRva2VuQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mMJywgJ+WPluW+l+asiuadlicpLCB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdHJldHVybiB0b2tlbkFwaS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXBpb2JqLnJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fSk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wYWdlICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFVzZSB0aGUgTWVkaWFXaWtpIEFQSSB0byBsb2FkIGEgcGFnZSBhbmQgb3B0aW9uYWxseSBlZGl0IGl0LCBtb3ZlIGl0LCBldGMuXG5cdCAqXG5cdCAqIENhbGxlcnMgYXJlIG5vdCBwZXJtaXR0ZWQgdG8gZGlyZWN0bHkgYWNjZXNzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3MhXG5cdCAqIEFsbCBwcm9wZXJ0eSBhY2Nlc3MgaXMgdGhyb3VnaCB0aGUgYXBwcm9wcmlhdGUgZ2V0X19fKCkgb3Igc2V0X19fKCkgbWV0aG9kLlxuXHQgKlxuXHQgKiBDYWxsZXJzIHNob3VsZCBzZXQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdH1cblx0ICogYmVmb3JlIHRoZSBmaXJzdCBjYWxsIHRvIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UubG9hZCgpfS5cblx0ICpcblx0ICogRWFjaCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zIHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGFcblx0ICogcmVmZXJlbmNlIHRvIHRoZSBNb3JlYml0cy53aWtpLnBhZ2Ugb2JqZWN0IHRoYXQgcmVnaXN0ZXJlZCB0aGUgY2FsbGJhY2suXG5cdCAqIENhbGxiYWNrIGZ1bmN0aW9ucyBtYXkgaW52b2tlIGFueSBNb3JlYml0cy53aWtpLnBhZ2UgcHJvdG90eXBlIG1ldGhvZCB1c2luZyB0aGlzIHJlZmVyZW5jZS5cblx0ICpcblx0ICpcblx0ICogQ2FsbCBzZXF1ZW5jZSBmb3IgY29tbW9uIG9wZXJhdGlvbnMgKG9wdGlvbmFsIGZpbmFsIHVzZXIgY2FsbGJhY2tzIG5vdCBzaG93bik6XG5cdCAqXG5cdCAqIC0gRWRpdCBjdXJyZW50IGNvbnRlbnRzIG9mIGEgcGFnZSAobm8gZWRpdCBjb25mbGljdCk6XG5cdCAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuXHQgKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKHdpdGggZWRpdCBjb25mbGljdCk6XG5cdCAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuXHQgKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5TYXZlRXJyb3IoKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+IC5zYXZlKCkgLT5cblx0ICogY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIC0gQXBwZW5kIHRvIGEgcGFnZSAoc2ltaWxhciBmb3IgcHJlcGVuZCBhbmQgbmV3U2VjdGlvbik6XG5cdCAqIGAuYXBwZW5kKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gY3R4LmZuQXV0b1NhdmUoKSAtPiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiBOb3Rlczpcblx0ICogMS4gQWxsIGZ1bmN0aW9ucyBmb2xsb3dpbmcgTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIGFyZSBpbnZva2VkIGFzeW5jaHJvbm91c2x5IGZyb20gdGhlIGpRdWVyeSBBSkFYIGxpYnJhcnkuXG5cdCAqIDIuIFRoZSBzZXF1ZW5jZSBmb3IgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbiBjb3VsZCBiZSBzbGlnaHRseSBzaG9ydGVuZWQsXG5cdCAqIGJ1dCBpdCB3b3VsZCByZXF1aXJlIHNpZ25pZmljYW50IGR1cGxpY2F0aW9uIG9mIGNvZGUgZm9yIGxpdHRsZSBiZW5lZml0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBhZ2UsIHByZWZpeGVkIGJ5IHRoZSBuYW1lc3BhY2UgKGlmIGFueSkuXG5cdCAqIEZvciB0aGUgY3VycmVudCBwYWdlLCB1c2UgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKWAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfE1vcmViaXRzLnN0YXR1c30gW3N0YXR1c10gLSBBIHN0cmluZyBkZXNjcmliaW5nIHRoZSBhY3Rpb24gYWJvdXQgdG8gYmUgdW5kZXJ0YWtlbixcblx0ICogb3IgYSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLnBhZ2UgPSBmdW5jdGlvbiAocGFnZU5hbWUsIHN0YXR1cykge1xuXHRcdGlmICghc3RhdHVzKSB7XG5cdFx0XHRzdGF0dXMgPSB3aW5kb3cud2dVTFMoJ+aJk+W8gOmhtemdouKAnCcsICfmiZPplovpoIHpnaLjgIwnKSArIHBhZ2VOYW1lICsgd2luZG93LndnVUxTKCfigJ0nLCAn44CNJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFByaXZhdGUgY29udGV4dCB2YXJpYWJsZXMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGNvbnRleHQgaXMgbm90IHZpc2libGUgdG8gdGhlIG91dHNpZGUsIHRodXMgYWxsIHRoZSBkYXRhIGhlcmVcblx0XHQgKiBtdXN0IGJlIGFjY2Vzc2VkIHZpYSBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZU5hbWUsXG5cdFx0XHRwYWdlRXhpc3RzOiBmYWxzZSxcblx0XHRcdGVkaXRTdW1tYXJ5OiBudWxsLFxuXHRcdFx0Y2hhbmdlVGFnczogbnVsbCxcblx0XHRcdHRlc3RBY3Rpb25zOiBudWxsLFxuXHRcdFx0Ly8gYXJyYXkgaWYgYW55IHZhbGlkIGFjdGlvbnNcblx0XHRcdGNhbGxiYWNrUGFyYW1ldGVyczogbnVsbCxcblx0XHRcdHN0YXR1c0VsZW1lbnQ6IHN0YXR1cyBpbnN0YW5jZW9mIE1vcmViaXRzLnN0YXR1cyA/IHN0YXR1cyA6IG5ldyBNb3JlYml0cy5zdGF0dXMoc3RhdHVzKSxcblx0XHRcdC8vIC0gZWRpdFxuXHRcdFx0cGFnZVRleHQ6IG51bGwsXG5cdFx0XHRlZGl0TW9kZTogJ2FsbCcsXG5cdFx0XHQvLyBzYXZlKCkgcmVwbGFjZXMgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGJ5IGRlZmF1bHRcblx0XHRcdGFwcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0cHJlcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0bmV3U2VjdGlvblRleHQ6IG51bGwsXG5cdFx0XHRuZXdTZWN0aW9uVGl0bGU6IG51bGwsXG5cdFx0XHRjcmVhdGVPcHRpb246IG51bGwsXG5cdFx0XHRtaW5vckVkaXQ6IGZhbHNlLFxuXHRcdFx0Ym90RWRpdDogZmFsc2UsXG5cdFx0XHRwYWdlU2VjdGlvbjogbnVsbCxcblx0XHRcdG1heENvbmZsaWN0UmV0cmllczogMixcblx0XHRcdG1heFJldHJpZXM6IDIsXG5cdFx0XHRmb2xsb3dSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3Q6IHRydWUsXG5cdFx0XHR3YXRjaGxpc3RPcHRpb246ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaGxpc3RFeHBpcnk6IG51bGwsXG5cdFx0XHRjcmVhdG9yOiBudWxsLFxuXHRcdFx0dGltZXN0YW1wOiBudWxsLFxuXHRcdFx0Ly8gLSByZXZlcnRcblx0XHRcdHJldmVydE9sZElEOiBudWxsLFxuXHRcdFx0Ly8gLSBtb3ZlXG5cdFx0XHRtb3ZlRGVzdGluYXRpb246IG51bGwsXG5cdFx0XHRtb3ZlVGFsa1BhZ2U6IGZhbHNlLFxuXHRcdFx0bW92ZVN1YnBhZ2VzOiBmYWxzZSxcblx0XHRcdG1vdmVTdXBwcmVzc1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdC8vIC0gcHJvdGVjdFxuXHRcdFx0cHJvdGVjdEVkaXQ6IG51bGwsXG5cdFx0XHRwcm90ZWN0TW92ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDcmVhdGU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q2FzY2FkZTogbnVsbCxcblx0XHRcdC8vIC0gY3JlYXRpb24gbG9va3VwXG5cdFx0XHRsb29rdXBOb25SZWRpcmVjdENyZWF0b3I6IGZhbHNlLFxuXHRcdFx0Ly8gaW50ZXJuYWwgc3RhdHVzXG5cdFx0XHRwYWdlTG9hZGVkOiBmYWxzZSxcblx0XHRcdGNzcmZUb2tlbjogbnVsbCxcblx0XHRcdGxvYWRUaW1lOiBudWxsLFxuXHRcdFx0bGFzdEVkaXRUaW1lOiBudWxsLFxuXHRcdFx0cGFnZUlEOiBudWxsLFxuXHRcdFx0Y29udGVudE1vZGVsOiBudWxsLFxuXHRcdFx0cmV2ZXJ0Q3VySUQ6IG51bGwsXG5cdFx0XHRyZXZlcnRVc2VyOiBudWxsLFxuXHRcdFx0d2F0Y2hlZDogZmFsc2UsXG5cdFx0XHRmdWxseVByb3RlY3RlZDogZmFsc2UsXG5cdFx0XHRzdXBwcmVzc1Byb3RlY3RXYXJuaW5nOiBmYWxzZSxcblx0XHRcdGNvbmZsaWN0UmV0cmllczogMCxcblx0XHRcdHJldHJpZXM6IDAsXG5cdFx0XHQvLyBjYWxsYmFja3Ncblx0XHRcdG9uTG9hZFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvYWRGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25TYXZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uU2F2ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25GYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Nb3ZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTW92ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0U3VjY2VzczogbnVsbCxcblx0XHRcdG9uUHJvdGVjdEZhaWx1cmU6IG51bGwsXG5cdFx0XHQvLyBpbnRlcm5hbCBvYmplY3RzXG5cdFx0XHRsb2FkUXVlcnk6IG51bGwsXG5cdFx0XHRsb2FkQXBpOiBudWxsLFxuXHRcdFx0c2F2ZUFwaTogbnVsbCxcblx0XHRcdGxvb2t1cENyZWF0aW9uQXBpOiBudWxsLFxuXHRcdFx0bW92ZUFwaTogbnVsbCxcblx0XHRcdG1vdmVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdGRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdGRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHByb3RlY3RBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0UHJvY2Vzc0FwaTogbnVsbCxcblx0XHR9O1xuXHRcdGNvbnN0IGVtcHR5RnVuY3Rpb24gPSAoKSA9PiB7fTtcblx0XHQvKipcblx0XHQgKiBMb2FkcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5sb2FkID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb2FkU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gZG8gc29tZXRoaW5nIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb2FkKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdpbmZvfHJldmlzaW9ucycsXG5cdFx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0XHRpbnRlc3RhY3Rpb25zOiAnZWRpdCcsXG5cdFx0XHRcdC8vIGNhbiBiZSBleHBhbmRlZFxuXHRcdFx0XHRjdXJ0aW1lc3RhbXA6ICcnLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdC8vIGRvbid0IG5lZWQgcnZsaW1pdD0xIGJlY2F1c2Ugd2UgZG9uJ3QgbmVlZCBydnN0YXJ0aWQgaGVyZSBhbmQgb25seSBvbmUgYWN0dWFsIHJldiBpcyByZXR1cm5lZCBieSBkZWZhdWx0XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnYWxsJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICdjb250ZW50fHRpbWVzdGFtcCc7IC8vIGdldCB0aGUgcGFnZSBjb250ZW50IGF0IHRoZSBzYW1lIHRpbWUsIGlmIG5lZWRlZFxuXHRcdFx0fSBlbHNlIGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ3RpbWVzdGFtcCc7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZsaW1pdCA9IDE7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZzdGFydGlkID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouKApuKApicsICfmipPlj5bpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeSxcblx0XHRcdFx0Zm5Mb2FkU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LmxvYWRBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LmxvYWRBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2F2ZXMgdGhlIHRleHQgZm9yIHRoZSBwYWdlIHRvIFdpa2lwZWRpYS5cblx0XHQgKiBNdXN0IGJlIHByZWNlZGVkIGJ5IHN1Y2Nlc3NmdWxseSBjYWxsaW5nIGBsb2FkKClgLlxuXHRcdCAqXG5cdFx0ICogV2FybmluZzogQ2FsbGluZyBgc2F2ZSgpYCBjYW4gcmVzdWx0IGluIGFkZGl0aW9uYWwgY2FsbHMgdG8gdGhlXG5cdFx0ICogcHJldmlvdXMgYGxvYWQoKWAgY2FsbGJhY2tzIHRvIHJlY292ZXIgZnJvbSBlZGl0IGNvbmZsaWN0cyEgSW4gdGhpc1xuXHRcdCAqIGNhc2UsIGNhbGxlcnMgbXVzdCBtYWtlIHRoZSBzYW1lIGVkaXQgdG8gdGhlIG5ldyBwYWdlVGV4dCBhbmRcblx0XHQgKiByZS1pbnZva2UgYHNhdmUoKWAuICBUaGlzIGJlaGF2aW9yIGNhbiBiZSBkaXNhYmxlZCB3aXRoXG5cdFx0ICogYHNldE1heENvbmZsaWN0UmV0cmllcygwKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLnNhdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdC8vIGFyZSB3ZSBnZXR0aW5nIG91ciBlZGl0aW5nIHRva2VuIGZyb20gbXcudXNlci50b2tlbnM/XG5cdFx0XHRjb25zdCBjYW5Vc2VNd1VzZXJUb2tlbiA9IGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKTtcblx0XHRcdGlmICghY3R4LnBhZ2VMb2FkZWQgJiYgIWNhblVzZU13VXNlclRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXR0ZW1wdCB0byBzYXZlIGEgcGFnZSB0aGF0IGhhcyBub3QgYmVlbiBsb2FkZWQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5lZGl0U3VtbWFyeSkge1xuXHRcdFx0XHQvLyBuZXcgc2VjdGlvbiBtb2RlIGFsbG93cyAobmF5LCBlbmNvdXJhZ2VzKSB1c2luZyB0aGVcblx0XHRcdFx0Ly8gdGl0bGUgYXMgdGhlIGVkaXQgc3VtbWFyeSwgYnV0IHRoZSBxdWVyeSBuZWVkc1xuXHRcdFx0XHQvLyBlZGl0U3VtbWFyeSB0byBiZSB1bmRlZmluZWQgb3IgJycsIG5vdCBudWxsXG5cdFx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICduZXcnICYmIGN0eC5uZXdTZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0XHRjdHguZWRpdFN1bW1hcnkgPSAnJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGVkaXQgc3VtbWFyeSBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gc2hvdWxkbid0IGhhcHBlbiBpZiBjYW5Vc2VNd1VzZXJUb2tlbiA9PT0gdHJ1ZVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdFx0PyB3aW5kb3cud2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd77yI5peg6ZmQ5pyf77yJ44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3vvIjnhKHpmZDmnJ/vvInjgIJcXG5cXG7pu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUoY3R4LmZ1bGx5UHJvdGVjdGVkKS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8ieOAglxcblxcbiR7d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfpu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdCl9YFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTnvJbovpHjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE57eo6Lyv44CCJykpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnJldHJpZXMgPSAwO1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHR0aXRsZTogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRzdW1tYXJ5OiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHRva2VuOiBjYW5Vc2VNd1VzZXJUb2tlbiA/IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgOiBjdHguY3NyZlRva2VuLFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9IGN0eC5wYWdlU2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdC8vIFNldCBtaW5vciBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhlc2UgcGFyYW1ldGVycyBhcmUgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdFx0aWYgKGN0eC5taW5vckVkaXQpIHtcblx0XHRcdFx0cXVlcnkubWlub3IgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cXVlcnkubm90bWlub3IgPSB0cnVlOyAvLyBmb3JjZSBUd2lua2xlIGNvbmZpZyB0byBvdmVycmlkZSB1c2VyIHByZWZlcmVuY2Ugc2V0dGluZyBmb3IgXCJhbGwgZWRpdHMgYXJlIG1pbm9yXCJcblx0XHRcdH1cblx0XHRcdC8vIFNldCBib3QgZWRpdCBhdHRyaWJ1dGUuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRcdGlmIChjdHguYm90RWRpdCkge1xuXHRcdFx0XHRxdWVyeS5ib3QgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChjdHguZWRpdE1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYXBwZW5kJzpcblx0XHRcdFx0XHRpZiAoY3R4LmFwcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXBwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5hcHBlbmR0ZXh0ID0gY3R4LmFwcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIGFwcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncHJlcGVuZCc6XG5cdFx0XHRcdFx0aWYgKGN0eC5wcmVwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBwcmVwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5wcmVwZW5kdGV4dCA9IGN0eC5wcmVwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gcHJlcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbmV3Jzpcblx0XHRcdFx0XHRpZiAoIWN0eC5uZXdTZWN0aW9uVGV4dCkge1xuXHRcdFx0XHRcdFx0Ly8gQVBJIGRvZXNuJ3QgYWxsb3cgZW1wdHkgbmV3IHNlY3Rpb24gdGV4dFxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBuZXcgc2VjdGlvbiB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRcdHF1ZXJ5LnRleHQgPSBjdHgubmV3U2VjdGlvblRleHQ7IC8vIGFkZCBhIG5ldyBzZWN0aW9uIHRvIGN1cnJlbnQgcGFnZVxuXHRcdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IGN0eC5uZXdTZWN0aW9uVGl0bGUgfHwgY3R4LmVkaXRTdW1tYXJ5OyAvLyBkb25lIGJ5IHRoZSBBUEksIGJ1dCBub24tJycgdmFsdWVzIHdvdWxkIGdldCB0cmVhdGVkIGFzIHRleHRcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmV2ZXJ0Jzpcblx0XHRcdFx0XHRxdWVyeS51bmRvID0gY3R4LnJldmVydEN1cklEO1xuXHRcdFx0XHRcdHF1ZXJ5LnVuZG9hZnRlciA9IGN0eC5yZXZlcnRPbGRJRDtcblx0XHRcdFx0XHRpZiAoY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdFx0cXVlcnkuYmFzZXRpbWVzdGFtcCA9IGN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gY3R4LmxvYWRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZGVsZXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkIChkb24ndCByZWNyZWF0ZSBiYWQgc3R1ZmYpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gJ2FsbCdcblx0XHRcdFx0XHRxdWVyeS50ZXh0ID0gY3R4LnBhZ2VUZXh0OyAvLyByZXBsYWNlIGVudGlyZSBjb250ZW50cyBvZiB0aGUgcGFnZVxuXHRcdFx0XHRcdGlmIChjdHgubGFzdEVkaXRUaW1lKSB7XG5cdFx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gY3R4Lmxhc3RFZGl0VGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGVkaXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSBjdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChbJ3JlY3JlYXRlJywgJ2NyZWF0ZW9ubHknLCAnbm9jcmVhdGUnXS5pbmNsdWRlcyhjdHguY3JlYXRlT3B0aW9uKSkge1xuXHRcdFx0XHRxdWVyeVtjdHguY3JlYXRlT3B0aW9uXSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNhblVzZU13VXNlclRva2VuICYmIGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjdHguc2F2ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfkv53lrZjpobXpnaLigKbigKYnLCAn5YSy5a2Y6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblNhdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5TYXZlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguc2F2ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSB0ZXh0IHByb3ZpZGVkIHZpYSBgc2V0QXBwZW5kVGV4dCgpYCB0byB0aGUgZW5kIG9mIHRoZVxuXHRcdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHRcdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuYXBwZW5kID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldFByZXBlbmRUZXh0KClgIHRvIHRoZSBzdGFydCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJlcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgbmV3IHNlY3Rpb24gd2l0aCB0aGUgdGV4dCBwcm92aWRlZCBieSBgc2V0TmV3U2VjdGlvblRleHQoKWBcblx0XHQgKiBhbmQgc2VjdGlvbiB0aXRsZSBmcm9tIGBzZXROZXdTZWN0aW9uVGl0bGUoKWAuXG5cdFx0ICogSWYgYGVkaXRTdW1tYXJ5YCBpcyBwcm92aWRlZCwgdGhhdCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGVcblx0XHQgKiBhdXRvZ2VuZXJhdGVkIFwiLT5UaXRsZSAobmV3IHNlY3Rpb25cIiBlZGl0IHN1bW1hcnkuXG5cdFx0ICogRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3QgZXhwaXJ5XG5cdFx0ICogaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMubmV3U2VjdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVkIHBhZ2UsIGluY2x1ZGluZyB0aGUgbmFtZXNwYWNlICovXG5cdFx0dGhpcy5nZXRQYWdlTmFtZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZU5hbWU7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIHRleHQgb2YgdGhlIHBhZ2UgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvYWQoKSAqL1xuXHRcdHRoaXMuZ2V0UGFnZVRleHQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwYWdlVGV4dCAtIFVwZGF0ZWQgcGFnZSB0ZXh0IHRoYXQgd2lsbCBiZSBzYXZlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UGFnZVRleHQgPSAocGFnZVRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnO1xuXHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcGFnZVRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IGFwcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBhcHBlbmQoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRBcHBlbmRUZXh0ID0gKGFwcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdFx0Y3R4LmFwcGVuZFRleHQgPSBhcHBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwcmVwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIHByZXBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBwcmVwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UHJlcGVuZFRleHQgPSAocHJlcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGN0eC5wcmVwZW5kVGV4dCA9IHByZXBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGluIGEgbmV3IHNlY3Rpb24gb24gdGhlIHBhZ2Ugd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldE5ld1NlY3Rpb25UZXh0ID0gKG5ld1NlY3Rpb25UZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGV4dCA9IG5ld1NlY3Rpb25UZXh0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UaXRsZSAtIFRpdGxlIGZvciB0aGUgbmV3IHNlY3Rpb24gY3JlYXRlZCB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZFxuXHRcdCAqIElmIG1pc3NpbmcsIGBjdHguZWRpdFN1bW1hcnlgIHdpbGwgYmUgdXNlZC4gSXNzdWVzIG1heSBvY2N1ciBpZiBhIHN1YnN0aXR1dGVkIHRlbXBsYXRlIGlzIHVzZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGl0bGUgPSAobmV3U2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGl0bGUgPSBuZXdTZWN0aW9uVGl0bGU7XG5cdFx0fTtcblx0XHQvLyBFZGl0LXJlbGF0ZWQgc2V0dGVyIG1ldGhvZHM6XG5cdFx0LyoqXG5cdFx0ICogU2V0IHRoZSBlZGl0IHN1bW1hcnkgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogVW5uZWNlc3NhcnkgaWYgZWRpdE1vZGUgaXMgJ25ldycgYW5kIG5ld1NlY3Rpb25UaXRsZSBpcyBwcm92aWRlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRFZGl0U3VtbWFyeSA9IChzdW1tYXJ5KSA9PiB7XG5cdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBzdW1tYXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGFueSBjdXN0b20gdGFnKHMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIEFQSSBhY3Rpb24uXG5cdFx0ICogQSBudW1iZXIgb2YgYWN0aW9ucyBkb24ndCBzdXBwb3J0IGl0LCBtb3N0IG5vdGFibHkgd2F0Y2guXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFncyAtIFN0cmluZyBvciBhcnJheSBvZiB0YWcocykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDaGFuZ2VUYWdzID0gKHRhZ3MpID0+IHtcblx0XHRcdGN0eC5jaGFuZ2VUYWdzID0gdGFncztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3JlYXRlT3B0aW9uPW51bGxdIC0gQ2FuIHRha2UgdGhlIGZvbGxvd2luZyBmb3VyIHZhbHVlczpcblx0XHQgKiAtIHJlY3JlYXRlOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIG9yIGVkaXQgaXQgaWYgaXQgZXhpc3RzLlxuXHRcdCAqIC0gY3JlYXRlb25seTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBidXQgcmV0dXJuIGFuXG5cdFx0ICogZXJyb3IgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBub2NyZWF0ZTogZG9uJ3QgY3JlYXRlIHRoZSBwYWdlLCBvbmx5IGVkaXQgaXQgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBgbnVsbGA6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgdW5sZXNzIGl0IHdhcyBkZWxldGVkXG5cdFx0ICogaW4gdGhlIG1vbWVudCBiZXR3ZWVuIGxvYWRpbmcgdGhlIHBhZ2UgYW5kIHNhdmluZyB0aGUgZWRpdCAoZGVmYXVsdCkuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDcmVhdGVPcHRpb24gPSAoY3JlYXRlT3B0aW9uKSA9PiB7XG5cdFx0XHRjdHguY3JlYXRlT3B0aW9uID0gY3JlYXRlT3B0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gbWlub3JFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIG1pbm9yIGVkaXQuICovXG5cdFx0dGhpcy5zZXRNaW5vckVkaXQgPSAobWlub3JFZGl0KSA9PiB7XG5cdFx0XHRjdHgubWlub3JFZGl0ID0gbWlub3JFZGl0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gYm90RWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBib3QgZWRpdCAqL1xuXHRcdHRoaXMuc2V0Qm90RWRpdCA9IChib3RFZGl0KSA9PiB7XG5cdFx0XHRjdHguYm90RWRpdCA9IGJvdEVkaXQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gcGFnZVNlY3Rpb24gLSBJbnRlZ2VyIHNwZWNpZnlpbmcgdGhlIHNlY3Rpb24gbnVtYmVyIHRvIGxvYWQgb3Igc2F2ZS5cblx0XHQgKiBJZiBzcGVjaWZpZWQgYXMgYG51bGxgLCB0aGUgZW50aXJlIHBhZ2Ugd2lsbCBiZSByZXRyaWV2ZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlU2VjdGlvbiA9IChwYWdlU2VjdGlvbikgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VTZWN0aW9uID0gcGFnZVNlY3Rpb247XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4Q29uZmxpY3RSZXRyaWVzIC0gTnVtYmVyIG9mIHJldHJpZXMgZm9yIHNhdmUgZXJyb3JzIGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heENvbmZsaWN0UmV0cmllcyA9IChtYXhDb25mbGljdFJldHJpZXMpID0+IHtcblx0XHRcdGN0eC5tYXhDb25mbGljdFJldHJpZXMgPSBtYXhDb25mbGljdFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBub3QgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0XHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TWF4UmV0cmllcyA9IChtYXhSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4UmV0cmllcyA9IG1heFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgd2hldGhlciBhbmQgaG93IHRvIHdhdGNoIHRoZSBwYWdlLCBpbmNsdWRpbmcgc2V0dGluZyBhbiBleHBpcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIEJhc2ljYWxseSBhIG1peCBvZiBNVyBBUEkgYW5kIFR3aW5rbGV5IG9wdGlvbnMgYXZhaWxhYmxlIHByZS1leHBpcnk6XG5cdFx0ICogLSBgdHJ1ZWB8YCd5ZXMnYHxgJ3dhdGNoJ2A6IHBhZ2Ugd2lsbCBiZSBhZGRlZCB0byB0aGUgdXNlcidzXG5cdFx0ICogd2F0Y2hsaXN0IHdoZW4gdGhlIGFjdGlvbiBpcyBjYWxsZWQuIERlZmF1bHRzIHRvIGFuIGluZGVmaW5pdGVcblx0XHQgKiB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXMgcHJvdmlkZWQuXG5cdFx0ICogLSBgZmFsc2VgfGAnbm8nYHxgJ25vY2hhbmdlJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2UgKGluY2x1ZGluZyBleHBpcnkpIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICogLSBgJ2RlZmF1bHQnYHxgJ3ByZWZlcmVuY2VzJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2Ugd2lsbCBiZVxuXHRcdCAqIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiB0aGUgYWN0aW9uIGlzXG5cdFx0ICogY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpc1xuXHRcdCAqIHByb3ZpZGVkLlxuXHRcdCAqIC0gYCd1bndhdGNoJ2A6IGV4cGxpY2l0bHkgdW53YXRjaCB0aGUgcGFnZS5cblx0XHQgKiAtIEFueSBvdGhlciBgc3RyaW5nYCBvciBgbnVtYmVyYCwgb3IgYSBgTW9yZWJpdHMuZGF0ZWAgb3IgYERhdGVgXG5cdFx0ICogb2JqZWN0OiB3YXRjaCBwYWdlIHVudGlsIHRoZSBzcGVjaWZpZWQgdGltZSwgZGVmZXJyaW5nIHRvXG5cdFx0ICogYHdhdGNobGlzdEV4cGlyeWAgaWYgcHJvdmlkZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdCA9ICh3YXRjaGxpc3RPcHRpb24sIHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RPcHRpb24gPSB3YXRjaGxpc3RPcHRpb24udG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjYXNlICdub2NoYW5nZSc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSBmYWxzZTpcblx0XHRcdFx0Y2FzZSB1bmRlZmluZWQ6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHRcdFx0Ly8gVGhlIE1XIEFQSSBhbGxvd3MgZm9yIGNoYW5naW5nIGV4cGlyeSB3aXRoIG5vY2hhbmdlIChhcyBcIm5vY2hhbmdlXCIgcmVmZXJzIHRvIHRoZSBiaW5hcnkgc3RhdHVzKSxcblx0XHRcdFx0XHQvLyBidXQgYnkga2VlcGluZyB0aGlzIG51bGwgaXQgd2lsbCBkZWZhdWx0IHRvIGFueSBleGlzdGluZyBleHBpcnksIGVuc3VyZSB0aGVyZSBpcyBhY3R1YWxseSBcIm5vIGNoYW5nZS5cIlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSBudWxsO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0XHQvLyBleHBpcnkgdW5pbXBvcnRhbnRcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3Vud2F0Y2gnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVmZXJlbmNlcyc6XG5cdFx0XHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0XHRcdC8vIFRoZSBBUEkgYWxsb3dzIGFuIGV4cGlyeSBoZXJlLCBidXQgdGhlcmUgaXMgYXMgb2YgeWV0IChUMjY1NzE2KVxuXHRcdFx0XHRcdC8vIG5vIGV4cGlyeSBwcmVmZXJlbmNlIG9wdGlvbiwgc28gaXQncyBhIGJpdCBkZXZvaWQgb2YgY29udGV4dC5cblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd3YXRjaCc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIE5vdCByZWFsbHkgYSBcImRlZmF1bHRcIiBwZXIgc2UgYnV0IGNhdGNoZXMgXCJhbnkgb3RoZXIgc3RyaW5nXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0T3B0aW9uO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGEgd2F0Y2hsaXN0IGV4cGlyeS4gc2V0V2F0Y2hsaXN0IGNhbiBtb3N0bHkgaGFuZGxlIHRoaXMgYnlcblx0XHQgKiBpdHNlbGYsIHNvIHRoaXMgaXMgaGVyZSBsYXJnZWx5IGZvciBjb21wbGV0ZW5lc3MgYW5kIGNvbXBhdGliaWxpdHlcblx0XHQgKiB3aXRoIHRoZSBmdWxsIHN1aXRlIG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0RXhwaXJ5PWluZmluaXR5XSAtXG5cdFx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0XHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHRcdCAqIElTTyA4NjAxOiAyMDM4LTAxLTA5VDAzOjE0OjA3WlxuXHRcdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0XHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdFx0ICogU1FMOiAyMDM4LTAxLTA5IDAzOjE0OjA3XG5cdFx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0XHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0RXhwaXJ5ID0gKHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZCBBcyBvZiBEZWNlbWJlciAyMDIwLCB1c2Ugc2V0V2F0Y2hsaXN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIC0gYFRydWVgOiBwYWdlIHdhdGNobGlzdCBzdGF0dXMgd2lsbCBiZSBzZXQgYmFzZWQgb24gdGhlIHVzZXInc1xuXHRcdCAqIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogLSBgRmFsc2VgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICpcblx0XHQgKiBXYXRjaGxpc3Qgbm90ZXM6XG5cdFx0ICogMS4gVGhlIE1lZGlhV2lraSBBUEkgdmFsdWUgb2YgJ3Vud2F0Y2gnLCB3aGljaCBleHBsaWNpdGx5IHJlbW92ZXNcblx0XHQgKiB0aGUgcGFnZSBmcm9tIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LCBpcyBub3QgdXNlZC5cblx0XHQgKiAyLiBJZiBib3RoIGBzZXRXYXRjaGxpc3QoKWAgYW5kIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWAgYXJlXG5cdFx0ICogY2FsbGVkLCB0aGUgbGFzdCBjYWxsIHRha2VzIHByaW9yaXR5LlxuXHRcdCAqIDMuIFR3aW5rbGUgbW9kdWxlcyBzaG91bGQgdXNlIHRoZSBhcHByb3ByaWF0ZSBwcmVmZXJlbmNlIHRvIHNldCB0aGUgd2F0Y2hsaXN0IG9wdGlvbnMuXG5cdFx0ICogNC4gTW9zdCBUd2lua2xlIG1vZHVsZXMgdXNlIGBzZXRXYXRjaGxpc3QoKWAuIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWBcblx0XHQgKiBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIGZldyBUd2lua2xlIHdhdGNobGlzdCBwcmVmZXJlbmNlcyB0aGF0XG5cdFx0ICogYWNjZXB0IGEgc3RyaW5nIHZhbHVlIG9mIGBkZWZhdWx0YC5cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyA9ICh3YXRjaGxpc3RPcHRpb24pID0+IHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMud2lraS5wYWdlLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyB3YXMgZGVwcmVjYXRlZCBEZWNlbWJlciAyMDIwLCBwbGVhc2UgdXNlIHNldFdhdGNobGlzdCdcblx0XHRcdCk7XG5cdFx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb2xsb3dSZWRpcmVjdD1mYWxzZV0gLVxuXHRcdCAqIC0gYHRydWVgOiBhIG1heGltdW0gb2Ygb25lIHJlZGlyZWN0IHdpbGwgYmUgZm9sbG93ZWQuIEluIHRoZSBldmVudFxuXHRcdCAqIG9mIGEgcmVkaXJlY3QsIGEgbWVzc2FnZSBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgYW5kIHRoZSByZWRpcmVjdFxuXHRcdCAqIHRhcmdldCBjYW4gYmUgcmV0cmlldmVkIHdpdGggZ2V0UGFnZU5hbWUoKS5cblx0XHQgKiAtIGBmYWxzZWA6IChkZWZhdWx0KSB0aGUgcmVxdWVzdGVkIHBhZ2VOYW1lIHdpbGwgYmUgdXNlZCB3aXRob3V0IHJlZ2FyZCB0byBhbnkgcmVkaXJlY3QuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93Q3Jvc3NOc1JlZGlyZWN0PXRydWVdIC0gTm90IGFwcGxpY2FibGUgaWYgYGZvbGxvd1JlZGlyZWN0YCBpcyBub3Qgc2V0IHRydWUuXG5cdFx0ICogLSBgdHJ1ZWA6IChkZWZhdWx0KSBmb2xsb3cgcmVkaXJlY3QgZXZlbiBpZiBpdCBpcyBhIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdFxuXHRcdCAqIC0gYGZhbHNlYDogZG9uJ3QgZm9sbG93IHJlZGlyZWN0IGlmIGl0IGlzIGNyb3NzLW5hbWVzcGFjZSwgZWRpdCB0aGUgcmVkaXJlY3QgaXRzZWxmLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Rm9sbG93UmVkaXJlY3QgPSAoZm9sbG93UmVkaXJlY3QsIGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5wYWdlTG9hZGVkKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogY2Fubm90IGNoYW5nZSByZWRpcmVjdCBzZXR0aW5nIGFmdGVyIHRoZSBwYWdlIGhhcyBiZWVuIGxvYWRlZCEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5mb2xsb3dSZWRpcmVjdCA9IGZvbGxvd1JlZGlyZWN0O1xuXHRcdFx0Y3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9XG5cdFx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9PT0gdW5kZWZpbmVkID8gY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA6IGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDtcblx0XHR9O1xuXHRcdC8vIGxvb2t1cC1jcmVhdGlvbiBzZXR0ZXIgZnVuY3Rpb25cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgLSBJZiBzZXQgdHJ1ZSwgdGhlIGF1dGhvciBhbmQgdGltZXN0YW1wIG9mXG5cdFx0ICogdGhlIGZpcnN0IG5vbi1yZWRpcmVjdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIGlzIHJldHJpZXZlZC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6XG5cdFx0ICogMS4gSWYgdGhlcmUgYXJlIG5vIHJldmlzaW9ucyBhbW9uZyB0aGUgZmlyc3QgNTAgdGhhdCBhcmVcblx0XHQgKiBub24tcmVkaXJlY3RzLCBvciBpZiB0aGVyZSBhcmUgbGVzcyA1MCByZXZpc2lvbnMgYW5kIGFsbCBhcmVcblx0XHQgKiByZWRpcmVjdHMsIHRoZSBvcmlnaW5hbCBjcmVhdGlvbiBpcyByZXRyaWV2ZWQuXG5cdFx0ICogMi4gUmV2aXNpb25zIHRoYXQgdGhlIHVzZXIgaXMgbm90IHByaXZpbGVnZWQgdG8gYWNjZXNzXG5cdFx0ICogKHJldmRlbGVkL3N1cHByZXNzZWQpIHdpbGwgYmUgdHJlYXRlZCBhcyBub24tcmVkaXJlY3RzLlxuXHRcdCAqIDMuIE11c3Qgbm90IGJlIHVzZWQgd2hlbiB0aGUgcGFnZSBoYXMgYSBub24td2lraXRleHQgY29udGVudG1vZGVsXG5cdFx0ICogc3VjaCBhcyBNb2R1bGVzcGFjZSBMdWEgb3IgdXNlciBKYXZhU2NyaXB0L0NTUy5cblx0XHQgKi9cblx0XHR0aGlzLnNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZmxhZztcblx0XHR9O1xuXHRcdC8vIE1vdmUtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBkZXN0aW5hdGlvbiAqL1xuXHRcdHRoaXMuc2V0TW92ZURlc3RpbmF0aW9uID0gKGRlc3RpbmF0aW9uKSA9PiB7XG5cdFx0XHRjdHgubW92ZURlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlVGFsa1BhZ2UgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVUYWxrUGFnZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdWJwYWdlcyA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVN1YnBhZ2VzID0gISFmbGFnO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVN1cHByZXNzUmVkaXJlY3QgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gISFmbGFnO1xuXHRcdH07XG5cdFx0Ly8gUHJvdGVjdC1yZWxhdGVkIHNldHRlciBmdW5jdGlvbnNcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgLSBUaGUgcmlnaHQgcmVxdWlyZWQgZm9yIHRoZSBzcGVjaWZpYyBhY3Rpb25cblx0XHQgKiBlLmcuIHN5c29wLCB0ZW1wbGF0ZWVkaXRvciwgYXV0b2NvbmZpcm1lZFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwaXJ5PWluZmluaXR5XVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldE1vdmVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDcmVhdGVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldENhc2NhZGluZ1Byb3RlY3Rpb24gPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFmbGFnO1xuXHRcdH07XG5cdFx0dGhpcy5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gKCkgPT4ge1xuXHRcdFx0Y3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgPSB0cnVlO1xuXHRcdH07XG5cdFx0Ly8gUmV2ZXJ0LXJlbGF0ZWQgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdHRoaXMuc2V0T2xkSUQgPSAob2xkSUQpID0+IHtcblx0XHRcdGN0eC5yZXZlcnRPbGRJRCA9IG9sZElEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjdXJyZW50IHJldmlzaW9uIElEIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRDdXJyZW50SUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydEN1cklEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IExhc3QgZWRpdG9yIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRSZXZpc2lvblVzZXIgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydFVzZXI7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGVkaXRlZC4gKi9cblx0XHR0aGlzLmdldExhc3RFZGl0VGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubGFzdEVkaXRUaW1lO1xuXHRcdH07XG5cdFx0Ly8gTWlzY2VsbGFuZW91cyBnZXR0ZXJzL3NldHRlcnM6XG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lIGFuIG9iamVjdCBmb3IgdXNlIGluIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBgY2FsbGJhY2tQYXJhbWV0ZXJzYCBpcyBmb3IgdXNlIGJ5IHRoZSBjYWxsZXIgb25seS4gVGhlIHBhcmFtZXRlcnNcblx0XHQgKiBhbGxvdyBhIGNhbGxlciB0byBwYXNzIHRoZSBwcm9wZXIgY29udGV4dCBpbnRvIGl0cyBjYWxsYmFja1xuXHRcdCAqIGZ1bmN0aW9uLiAgQ2FsbGVycyBtdXN0IGVuc3VyZSB0aGF0IGFueSBjaGFuZ2VzIHRvIHRoZVxuXHRcdCAqIGNhbGxiYWNrUGFyYW1ldGVycyBvYmplY3Qgd2l0aGluIGEgYGxvYWQoKWAgY2FsbGJhY2sgc3RpbGwgcGVybWl0IGFcblx0XHQgKiBwcm9wZXIgcmUtZW50cnkgaW50byB0aGUgYGxvYWQoKWAgY2FsbGJhY2sgaWYgYW4gZWRpdCBjb25mbGljdCBpc1xuXHRcdCAqIGRldGVjdGVkIHVwb24gY2FsbGluZyBgc2F2ZSgpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFja1BhcmFtZXRlcnNcblx0XHQgKi9cblx0XHR0aGlzLnNldENhbGxiYWNrUGFyYW1ldGVycyA9IChjYWxsYmFja1BhcmFtZXRlcnMpID0+IHtcblx0XHRcdGN0eC5jYWxsYmFja1BhcmFtZXRlcnMgPSBjYWxsYmFja1BhcmFtZXRlcnM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBvYmplY3QgcHJldmlvdXNseSBzZXQgYnkgYHNldENhbGxiYWNrUGFyYW1ldGVycygpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENhbGxiYWNrUGFyYW1ldGVycyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLnNldFN0YXR1c0VsZW1lbnQgPSAoc3RhdHVzRWxlbWVudCkgPT4ge1xuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQgPSBzdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gU3RhdHVzIGVsZW1lbnQgY3JlYXRlZCBieSB0aGUgY29uc3RydWN0b3IuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRTdGF0dXNFbGVtZW50ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5zdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhZ2UgZXhpc3RlZCBvbiB0aGUgd2lraSB3aGVuIGl0IHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmV4aXN0cyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUV4aXN0cztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFBhZ2UgSUQgb2YgdGhlIHBhZ2UgbG9hZGVkLiAwIGlmIHRoZSBwYWdlIGRvZXNuJ3Rcblx0XHQgKiBleGlzdC5cblx0XHQgKi9cblx0XHR0aGlzLmdldFBhZ2VJRCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUlEO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gLSBDb250ZW50IG1vZGVsIG9mIHRoZSBwYWdlLiAgUG9zc2libGUgdmFsdWVzXG5cdFx0ICogaW5jbHVkZSAoYnV0IG1heSBub3QgYmUgbGltaXRlZCB0byk6IGB3aWtpdGV4dGAsIGBqYXZhc2NyaXB0YCxcblx0XHQgKiBgY3NzYCwgYGpzb25gLCBgU2NyaWJ1bnRvYCwgYHNhbml0aXplZC1jc3NgLCBgTWFzc01lc3NhZ2VMaXN0Q29udGVudGAuXG5cdFx0ICogQWxzbyBnZXR0YWJsZSB2aWEgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENvbnRlbnRNb2RlbCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY29udGVudE1vZGVsO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIFdhdGNoZWQgc3RhdHVzIG9mIHRoZSBwYWdlLiBCb29sZWFuXG5cdFx0ICogdW5sZXNzIGl0J3MgYmVpbmcgd2F0Y2hlZCB0ZW1wb3JhcmlseSwgaW4gd2hpY2ggY2FzZSByZXR1cm5zIHRoZVxuXHRcdCAqIGV4cGlyeSBzdHJpbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRXYXRjaGVkID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC53YXRjaGVkO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmdldExvYWRUaW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5sb2FkVGltZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBwYWdlIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDcmVhdG9yID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jcmVhdG9yO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIElTT1N0cmluZyB0aW1lc3RhbXAgb2YgcGFnZSBjcmVhdGlvbiBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRpb25UaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnRpbWVzdGFtcDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBvciBub3QgeW91IGNhbiBlZGl0IHRoZSBwYWdlICovXG5cdFx0dGhpcy5jYW5FZGl0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICEhY3R4LnRlc3RBY3Rpb25zICYmIGN0eC50ZXN0QWN0aW9ucy5pbmNsdWRlcygnZWRpdCcpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV0cmlldmVzIHRoZSB1c2VybmFtZSBvZiB0aGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBhcyB3ZWxsIGFzXG5cdFx0ICogdGhlIHRpbWVzdGFtcCBvZiBjcmVhdGlvbi4gIFRoZSB1c2VybmFtZSBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdG9yKClgIGZ1bmN0aW9uOyB0aGUgdGltZXN0YW1wIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdFx0ICogYGdldENyZWF0aW9uVGltZXN0YW1wKClgIGZ1bmN0aW9uLlxuXHRcdCAqIFByaW9yIHRvIEp1bmUgMjAxOSBrbm93biBhcyBgbG9va3VwQ3JlYXRvcigpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdFx0ICogdGhlIHVzZXJuYW1lIGFuZCB0aW1lc3RhbXAgYXJlIGZvdW5kIHdpdGhpbiB0aGUgY2FsbGJhY2suXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSBsb29rdXAgZmFpbHNcblx0XHQgKi9cblx0XHR0aGlzLmxvb2t1cENyZWF0aW9uID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvb2t1cENyZWF0aW9uKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0XHRydnByb3A6ICd1c2VyfHRpbWVzdGFtcCcsXG5cdFx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBPbmx5IHRoZSB3aWtpdGV4dCBjb250ZW50IG1vZGVsIGNhbiByZWxpYWJseSBoYW5kbGVcblx0XHRcdC8vIHJ2c2VjdGlvbiwgb3RoZXJzIHJldHVybiBhbiBlcnJvciB3aGVuIHBhaXJlZCB3aXRoIHRoZVxuXHRcdFx0Ly8gY29udGVudCBydnByb3AuIFJlbGF0ZWRseSwgbm9uLXdpa2l0ZXh0IG1vZGVscyBkb24ndFxuXHRcdFx0Ly8gdW5kZXJzdGFuZCB0aGUgI1JFRElSRUNUIGNvbmNlcHQsIHNvIHdlIHNob3VsZG4ndCBhdHRlbXB0XG5cdFx0XHQvLyB0aGUgcmVkaXJlY3QgcmVzb2x1dGlvbiBpbiBmbkxvb2t1cENyZWF0aW9uU3VjY2Vzc1xuXHRcdFx0aWYgKGN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IpIHtcblx0XHRcdFx0cXVlcnkucnZzZWN0aW9uID0gMDtcblx0XHRcdFx0cXVlcnkucnZwcm9wICs9ICd8Y29udGVudCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5oqT5Y+W6aG16Z2i5Yib5bu66ICF5L+h5oGvJywgJ+aKk+WPlumggemdouW7uueri+iAheizh+ioiicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldmVydHMgYSBwYWdlIHRvIGByZXZlcnRPbGRJRGAgc2V0IGJ5IGBzZXRPbGRJRGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5yZXZlcnQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghY3R4LnJldmVydE9sZElEKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcmV2aXNpb24gSUQgdG8gcmV2ZXJ0IHRvIHdhcyBub3Qgc2V0IGJlZm9yZSByZXZlcnQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncmV2ZXJ0Jztcblx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBNb3ZlcyBhIHBhZ2UgdG8gYW5vdGhlciB0aXRsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLm1vdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4Lm1vdmVEZXN0aW5hdGlvbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGRlc3RpbmF0aW9uIHBhZ2UgbmFtZSB3YXMgbm90IHNldCBiZWZvcmUgbW92ZSEnKTtcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzTW92ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnbW92ZScpO1xuXHRcdFx0XHRjdHgubW92ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NNb3ZlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogTWFya3MgdGhlIHBhZ2UgYXMgcGF0cm9sbGVkLCB1c2luZyBgcmNpZGAgKGlmIGF2YWlsYWJsZSkgb3IgYHJldmlkYC5cblx0XHQgKlxuXHRcdCAqIFBhdHJvbGxpbmcgYXMgc3VjaCBkb2Vzbid0IG5lZWQgdG8gcmVseSBvbiBsb2FkaW5nIHRoZSBwYWdlIGluXG5cdFx0ICogcXVlc3Rpb247IHNpbXBseSBwYXNzaW5nIGEgcmV2aWQgdG8gdGhlIEFQSSBpcyBzdWZmaWNpZW50LCBzbyBpblxuXHRcdCAqIHRob3NlIGNhc2VzIGp1c3QgdXNpbmcge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBpcyBwcm9iYWJseSBwcmVmZXJhYmxlLlxuXHRcdCAqXG5cdFx0ICogTm8gZXJyb3IgaGFuZGxpbmcgc2luY2Ugd2UgZG9uJ3QgYWN0dWFsbHkgY2FyZSBhYm91dCB0aGUgZXJyb3JzLlxuXHRcdCAqL1xuXHRcdHRoaXMucGF0cm9sID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhTW9yZWJpdHMudXNlcklzSW5Hcm91cCgncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHQvLyBJZiBhIGxpbmsgaXMgcHJlc2VudCwgZG9uJ3QgbmVlZCB0byBjaGVjayBpZiBpdCdzIHBhdHJvbGxlZFxuXHRcdFx0aWYgKCRib2R5LmZpbmQoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IHBhdHJvbGhyZWYgPSAkYm9keS5maW5kKCcucGF0cm9sbGluayBhJykuYXR0cignaHJlZicpO1xuXHRcdFx0XHRjdHgucmNpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmNpZCcsIHBhdHJvbGhyZWYpO1xuXHRcdFx0XHRmblByb2Nlc3NQYXRyb2wodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xRdWVyeSA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHRcdHR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0XHRcdC8vIGFzIGxvbmcgYXMgd2UncmUgcXVlcnlpbmcsIG1pZ2h0IGFzIHdlbGwgZ2V0IGEgdG9rZW5cblx0XHRcdFx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgdW5wYXRyb2xsZWRcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0XHRyY3Byb3A6ICdwYXRyb2xsZWQnLFxuXHRcdFx0XHRcdHJjdGl0bGU6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0XHRyY2xpbWl0OiAxLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHBhdHJvbFF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc1BhdHJvbFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvLyB8ZGVsZXRlfCBpcyBhIHJlc2VydmVkIHdvcmQgaW4gc29tZSBmbGF2b3VycyBvZiBKU1xuXHRcdC8qKlxuXHRcdCAqIERlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uRGVsZXRlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnZGVsZXRlJywgY3R4Lm9uRGVsZXRlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdkZWxldGUnKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NEZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBVbmRlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMudW5kZWxldGVQYWdlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3VuZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFByb3RlY3RzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnByb3RlY3QgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmICFjdHgucHJvdGVjdE1vdmUgJiYgIWN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogeW91IG11c3Qgc2V0IGVkaXQgYW5kL29yIG1vdmUgYW5kL29yIGNyZWF0ZSBwcm90ZWN0aW9uIGJlZm9yZSBjYWxsaW5nIHByb3RlY3QoKSEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBiZWNhdXNlIG9mIHRoZSB3YXkgTVcgQVBJIGludGVycHJldHMgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdC8vIChhYnNvbHV0ZSwgbm90IGRpZmZlcmVudGlhbCksIHdlIGFsd2F5cyBuZWVkIHRvIHJlcXVlc3Rcblx0XHRcdC8vIHByb3RlY3Rpb24gbGV2ZWxzIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgncHJvdGVjdCcpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Qcm9jZXNzUHJvdGVjdCxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Lypcblx0XHQgKiBQcml2YXRlIG1lbWJlciBmdW5jdGlvbnNcblx0XHQgKiBUaGVzZSBhcmUgbm90IGV4cG9zZWQgb3V0c2lkZVxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZXMgd2hldGhlciB3ZSBjYW4gc2F2ZSBhbiBBUEkgY2FsbCBieSB1c2luZyB0aGUgY3NyZiB0b2tlblxuXHRcdCAqIHNlbnQgd2l0aCB0aGUgcGFnZSBIVE1MLCBvciB3aGV0aGVyIHdlIG5lZWQgdG8gYXNrIHRoZSBzZXJ2ZXIgZm9yXG5cdFx0ICogbW9yZSBpbmZvIChlLmcuIHByb3RlY3Rpb24gb3Igd2F0Y2hsaXN0IGV4cGlyeSkuXG5cdFx0ICpcblx0XHQgKiBDdXJyZW50bHkgdXNlZCBmb3IgYGFwcGVuZGAsIGBwcmVwZW5kYCwgYG5ld1NlY3Rpb25gLCBgbW92ZWAsXG5cdFx0ICogYGRlbGV0ZVBhZ2VgLCBhbmQgYHVuZGVsZXRlUGFnZWAuIE5vdCB1c2VkIGZvciBgcHJvdGVjdGBcblx0XHQgKiBzaW5jZSBpdCBhbHdheXMgbmVlZHMgdG8gcmVxdWVzdCBwcm90ZWN0aW9uIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbYWN0aW9uPWVkaXRdIC0gVGhlIGFjdGlvbiBiZWluZyB1bmRlcnRha2VuLCBlLmcuXG5cdFx0ICogXCJlZGl0XCIgb3IgXCJkZWxldGVcIi4gSW4gcHJhY3RpY2UsIG9ubHkgXCJlZGl0XCIgb3IgXCJub3RlZGl0XCIgbWF0dGVycy5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmbkNhblVzZU13VXNlclRva2VuID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0YWN0aW9uIHx8PSAnZWRpdCc7XG5cdFx0XHQvLyBJZiBhIHdhdGNobGlzdCBleHBpcnkgaXMgc2V0LCB3ZSBtdXN0IGFsd2F5cyBsb2FkIHRoZSBwYWdlXG5cdFx0XHQvLyB0byBhdm9pZCBvdmVyd3JpdGluZyBpbmRlZmluaXRlIHByb3RlY3Rpb24uICBPZiBjb3Vyc2UsIG5vdFxuXHRcdFx0Ly8gbmVlZGVkIGlmIHNldHRpbmcgaW5kZWZpbml0ZSB3YXRjaGluZyFcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5ICYmICFNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShjdHgud2F0Y2hsaXN0RXhwaXJ5KSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBBUEktYmFzZWQgcmVkaXJlY3QgcmVzb2x1dGlvbiBvbmx5IHdvcmtzIGZvciBhY3Rpb249cXVlcnkgYW5kXG5cdFx0XHQvLyBhY3Rpb249ZWRpdCBpbiBhcHBlbmQvcHJlcGVuZC9uZXcgbW9kZXNcblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0aWYgKCFjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBtdXN0IGxvYWQgdGhlIHBhZ2UgdG8gY2hlY2sgZm9yIGNyb3NzIG5hbWVzcGFjZSByZWRpcmVjdHNcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY3Rpb24gIT09ICdlZGl0JyB8fCBjdHguZWRpdE1vZGUgPT09ICdhbGwnIHx8IGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIGRvIHdlIG5lZWQgdG8gZmV0Y2ggdGhlIGVkaXQgcHJvdGVjdGlvbiBleHBpcnk/XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXcgbXcuVGl0bGUoTW9yZWJpdHMucGFnZU5hbWVOb3JtKS5nZXRQcmVmaXhlZFRleHQoKSAhPT1cblx0XHRcdFx0XHRuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5nZXRQcmVmaXhlZFRleHQoKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gd2dSZXN0cmljdGlvbkVkaXQgaXMgbnVsbCBvbiBub24tZXhpc3RlbnQgcGFnZXMsXG5cdFx0XHRcdC8vIHNvIHRoaXMgbmVhdGx5IGhhbmRsZXMgbm9uZXhpc3RlbnQgcGFnZXNcblx0XHRcdFx0Y29uc3QgZWRpdFJlc3RyaWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dSZXN0cmljdGlvbkVkaXQnKTtcblx0XHRcdFx0aWYgKCFlZGl0UmVzdHJpY3Rpb24gfHwgZWRpdFJlc3RyaWN0aW9uLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gISFtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV2hlbiBmdW5jdGlvbnMgY2FuJ3QgdXNlXG5cdFx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX5mbkNhblVzZU13VXNlclRva2VufGZuQ2FuVXNlTXdVc2VyVG9rZW59XG5cdFx0ICogb3IgcmVxdWlyZSBjaGVja2luZyBwcm90ZWN0aW9uIG9yIHdhdGNoZWQgc3RhdHVzLCBtYWludGFpbiB0aGUgcXVlcnlcblx0XHQgKiBpbiBvbmUgcGxhY2UuIFVzZWQgZm9yIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjZGVsZXRlUGFnZXxkZWxldGV9LFxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjdW5kZWxldGVQYWdlfHVuZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsqIE1vcmViaXRzLndpa2kucGFnZSNwcm90ZWN0fHByb3RlY3R9LFxuXHRcdCAqIGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI21vdmV8bW92ZX1cblx0XHQgKiAoYmFzaWNhbGx5LCBqdXN0IG5vdCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2xvYWR8bG9hZH0pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLiBcImVkaXRcIiBvclxuXHRcdCAqIFwiZGVsZXRlXCIuXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gQXBwcm9wcmlhdGUgcXVlcnkuXG5cdFx0ICovXG5cdFx0Y29uc3QgZm5OZWVkVG9rZW5JbmZvUXVlcnkgPSAoYWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gUHJvdGVjdGlvbiBub3QgY2hlY2tlZCBmb3Igbm9uLXN5c29wIG1vdmVzXG5cdFx0XHRpZiAoYWN0aW9uICE9PSAnbW92ZScgfHwgTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0cXVlcnkuaW5wcm9wICs9ICd8cHJvdGVjdGlvbic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0ICYmIGFjdGlvbiAhPT0gJ3VuZGVsZXRlJykge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHF1ZXJ5O1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkU3VjY2VzcygpIGZvciBhcHBlbmQoKSwgcHJlcGVuZCgpLCBhbmQgbmV3U2VjdGlvbigpIHRocmVhZHNcblx0XHRjb25zdCBmbkF1dG9TYXZlID0gKHBhZ2VvYmopID0+IHtcblx0XHRcdHBhZ2VvYmouc2F2ZShjdHgub25TYXZlU3VjY2VzcywgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuTG9hZFN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb2FkQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgY3R4Lm9uTG9hZEZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRsZXQgcmV2O1xuXHRcdFx0Y3R4LnBhZ2VFeGlzdHMgPSAhcGFnZS5taXNzaW5nO1xuXHRcdFx0aWYgKGN0eC5wYWdlRXhpc3RzKSB7XG5cdFx0XHRcdFtyZXZdID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRcdGN0eC5sYXN0RWRpdFRpbWUgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRjdHgucGFnZVRleHQgPSByZXYuY29udGVudDtcblx0XHRcdFx0Y3R4LnBhZ2VJRCA9IHBhZ2UucGFnZWlkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gJyc7IC8vIGFsbG93IGZvciBjb25jYXRlbmF0aW9uLCBldGMuXG5cdFx0XHRcdGN0eC5wYWdlSUQgPSAwOyAvLyBub25leGlzdGVudCBpbiByZXNwb25zZSwgbWF0Y2hlcyB3Z0FydGljbGVJZFxuXHRcdFx0fVxuXG5cdFx0XHRjdHguY3NyZlRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGlmICghY3R4LmNzcmZUb2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPlue8lui+keS7pOeJjOOAgicsICfmnKrog73lj5blvpfnt6jovK/mrIrmnZbjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFRpbWUgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLmN1cnRpbWVzdGFtcDtcblx0XHRcdGlmICghY3R4LmxvYWRUaW1lKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5pe26Ze05oiz44CCJywgJ+acquiDveWPluW+l+eVtuWJjeaZgumWk+aIs+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5jb250ZW50TW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm8sIHRvIGFsZXJ0IGFkbWlucyB3aGVuIHRoZXkgYXJlIGFib3V0IHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZVxuXHRcdFx0Ly8gSW5jbHVkZXMgY2FzY2FkaW5nIHByb3RlY3Rpb25cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjb25zdCBlZGl0UHJvdCA9IHBhZ2UucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnBvcCgpO1xuXHRcdFx0XHRpZiAoZWRpdFByb3QpIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBlZGl0UHJvdC5leHBpcnk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHBhZ2UubGFzdHJldmlkO1xuXHRcdFx0Y29uc3QgdGVzdGFjdGlvbnMgPSBwYWdlLmFjdGlvbnM7XG5cdFx0XHRjdHgudGVzdEFjdGlvbnMgPSBbXTsgLy8gd2FzIG51bGxcblx0XHRcdGZvciAoY29uc3QgYWN0aW9uIG9mIE9iamVjdC5rZXlzKHRlc3RhY3Rpb25zKSkge1xuXHRcdFx0XHRpZiAodGVzdGFjdGlvbnNbYWN0aW9uXSkge1xuXHRcdFx0XHRcdGN0eC50ZXN0QWN0aW9uc1tjdHgudGVzdEFjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0Y3R4LnJldmVydEN1cklEID0gcmV2ICYmIHJldi5yZXZpZDtcblx0XHRcdFx0aWYgKCFjdHgucmV2ZXJ0Q3VySUQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluW9k+WJjeS/ruiuoueJiOacrElE44CCJywgJ+acquiDveWPluW+l+ebruWJjeS/ruiogueJiOacrElE44CCJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucmV2ZXJ0VXNlciA9IHJldiAmJiByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHgucmV2ZXJ0VXNlcikge1xuXHRcdFx0XHRcdGlmIChyZXYgJiYgcmV2LnVzZXJoaWRkZW4pIHtcblx0XHRcdFx0XHRcdC8vIHVzZXJuYW1lIHdhcyBSZXZEZWwnZCBvciBvdmVyc2lnaHRlZFxuXHRcdFx0XHRcdFx0Y3R4LnJldmVydFVzZXIgPSB3aW5kb3cud2dVTFMoJzznlKjmiLflkI3lt7LpmpDol48+JywgJzzkvb/nlKjogIXlkI3nqLHlt7LpmrHol48+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluatpOS/ruiuoueJiOacrOeahOe8lui+keiAheOAgicsICfmnKrog73lj5blvpfmraTkv67oqILniYjmnKznmoTnt6jovK/ogIXjgIInKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBzZXQgcmV2ZXJ0IGVkaXQgc3VtbWFyeVxuXHRcdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBgW1tRVzpVTkRPfOaSpOmUgF1d55SxICR7Y3R4LnJldmVydFVzZXJ9IOaJgOWBmuWHuueahCR7d2luZG93LndnVUxTKCfkv67orqIgJywgJ+S/ruiogiAnKX0ke1xuXHRcdFx0XHRcdGN0eC5yZXZlcnRPbGRJRFxuXHRcdFx0XHR977yaJHtjdHguZWRpdFN1bW1hcnl9YDtcblx0XHRcdH1cblx0XHRcdGN0eC5wYWdlTG9hZGVkID0gdHJ1ZTtcblx0XHRcdC8vIG13Lm5vdGlmeShcIkdlbmVyYXRlIGVkaXQgY29uZmxpY3Qgbm93XCIsIHt0eXBlOiAnd2FybicsIHRhZzogJ21vcmViaXRzJ30pOyAgLy8gZm9yIHRlc3RpbmcgZWRpdCBjb25mbGljdCByZWNvdmVyeSBsb2dpY1xuXHRcdFx0Y3R4Lm9uTG9hZFN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdH07XG5cdFx0Ly8gaGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIHRoZSBwYWdlIG5hbWUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJXG5cdFx0Y29uc3QgZm5DaGVja1BhZ2VOYW1lID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBvbkZhaWx1cmUpIHtcblx0XHRcdGlmICghb25GYWlsdXJlKSB7XG5cdFx0XHRcdG9uRmFpbHVyZSA9IGVtcHR5RnVuY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWdlID0gcmVzcG9uc2UucGFnZXMgJiYgcmVzcG9uc2UucGFnZXNbMF07XG5cdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgaW52YWxpZCB0aXRsZXNcblx0XHRcdFx0aWYgKHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5qCH6aKY5LiN5ZCI5rOV77yaJywgYOaomemhjOS4jeWQiOazle+8miR7Y3R4LnBhZ2VOYW1lfWApKTtcblx0XHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHJldHJpZXZlIGFjdHVhbCB0aXRsZSBvZiB0aGUgcGFnZSBhZnRlciBub3JtYWxpemF0aW9uIGFuZCByZWRpcmVjdHNcblx0XHRcdFx0Y29uc3QgcmVzb2x2ZWROYW1lID0gcGFnZS50aXRsZTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGZvciBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Q6XG5cdFx0XHRcdFx0Y29uc3Qgb3JpZ05zID0gbmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkubmFtZXNwYWNlO1xuXHRcdFx0XHRcdGNvbnN0IG5ld05zID0gbmV3IG13LlRpdGxlKHJlc29sdmVkTmFtZSkubmFtZXNwYWNlO1xuXHRcdFx0XHRcdGlmIChvcmlnTnMgIT09IG5ld05zICYmICFjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aYr+i3qOWRveWQjeepuumXtOmHjeWumuWQkeWIsCcsICfmmK/ot6jlkb3lkI3nqbrplpPph43mlrDlsI7lkJHliLAnKSArXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZWROYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ++8jOeVpei/hycsICfvvIznlaXpgY4nKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gb25seSBub3RpZnkgdXNlciBmb3IgcmVkaXJlY3RzLCBub3Qgbm9ybWFsaXphdGlvblxuXHRcdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/oeaBrycsICfos4foqIonKSxcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LuOICcsICflvp4gJykgK1xuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDph43lrprlkJHliLAgJywgJyDph43mlrDlsI7lkJHliLAgJykgK1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wYWdlTmFtZSA9IHJlc29sdmVkTmFtZTsgLy8gdXBkYXRlIHRvIHJlZGlyZWN0IHRhcmdldCBvciBub3JtYWxpemVkIG5hbWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvdWxkIGJlIGEgY2lyY3VsYXIgcmVkaXJlY3Qgb3Igb3RoZXIgcHJvYmxlbVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveino+aekOmhtemdoueahOmHjeWumuWQke+8micsICfkuI3og73op6PmnpDpoIHpnaLnmoTph43mlrDlsI7lkJHvvJonKSArIGN0eC5wYWdlTmFtZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgd2hldGhlciB3ZSBzaG91bGQgcHJvdmlkZSBhIHdhdGNobGlzdCBleHBpcnkuICBXaWxsIG5vdFxuXHRcdCAqIGRvIHNvIGlmIHRoZSBwYWdlIGlzIGN1cnJlbnRseSBwZXJtYW5lbnRseSB3YXRjaGVkLCBvciB0aGUgY3VycmVudFxuXHRcdCAqIGV4cGlyeSBpcyAqYWZ0ZXIqIHRoZSBuZXcsIHByb3ZpZGVkIGV4cGlyeS4gIE9ubHkgaGFuZGxlcyBzdHJpbmdzXG5cdFx0ICogcmVjb2duaXplZCBieSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gb3IgcmVsYXRpdmUgdGltZWZyYW1lcyB3aXRoXG5cdFx0ICogdW5pdCBpdCBjYW4gcHJvY2Vzcy4gIFJlbGllcyBvbiB0aGUgZmFjdCB0aGF0IGZuQ2FuVXNlTXdVc2VyVG9rZW5cblx0XHQgKiByZXF1aXJlcyBwYWdlIGxvYWRpbmcgaWYgYSB3YXRjaGxpc3RleHBpcnkgaXMgcHJvdmlkZWQsIHNvIHdlIGFyZVxuXHRcdCAqIGVuc3VyZWQgb2Yga25vd2luZyB0aGUgd2F0Y2ggc3RhdHVzIGJ5IHRoZSB1c2Ugb2YgdGhpcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkgPSAoKSA9PiB7XG5cdFx0XHRpZiAoY3R4LndhdGNobGlzdEV4cGlyeSkge1xuXHRcdFx0XHRpZiAoIWN0eC53YXRjaGVkIHx8IE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KGN0eC53YXRjaGxpc3RFeHBpcnkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGN0eC53YXRjaGVkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGxldCBuZXdFeHBpcnk7XG5cdFx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBkZXRlcm1pbmUgaWYgdGhlIG5ldyBleHBpcnkgaXMgYVxuXHRcdFx0XHRcdC8vIHJlbGF0aXZlIChlLmcuIGAxIG1vbnRoYCkgb3IgYWJzb2x1dGUgZGF0ZXRpbWVcblx0XHRcdFx0XHRjb25zdCByZWwgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5LnNwbGl0KCcgJyk7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdG5ld0V4cGlyeSA9IG5ldyBNb3JlYml0cy5kYXRlKCkuYWRkKHJlbFswXSwgcmVsWzFdKTtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdG5ld0V4cGlyeSA9IG5ldyBNb3JlYml0cy5kYXRlKGN0eC53YXRjaGxpc3RFeHBpcnkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJZiB0aGUgZGF0ZSBpcyB2YWxpZCwgb25seSB1c2UgaXQgaWYgaXQgZXh0ZW5kcyB0aGUgY3VycmVudCBleHBpcnlcblx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdFx0aWYgKG5ld0V4cGlyeS5pc0FmdGVyKG5ldyBNb3JlYml0cy5kYXRlKGN0eC53YXRjaGVkKSkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIElmIGl0J3Mgc3RpbGwgbm90IHZhbGlkLCBob3BlIGl0J3MgYSB2YWxpZCBNVyBleHBpcnkgZm9ybWF0IHRoYXRcblx0XHRcdFx0XHRcdC8vIE1vcmViaXRzLmRhdGUgZG9lc24ndCByZWNvZ25pemUsIHNvIGp1c3QgZGVmYXVsdCB0byB1c2luZyBpdC5cblx0XHRcdFx0XHRcdC8vIFRoaXMgd2lsbCBhbHNvIGluY2x1ZGUgbWlub3IgdHlwb3MuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gc2F2ZUFwaS5wb3N0KClcblx0XHRjb25zdCBmblNhdmVTdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7IC8vIGNhbmNlbCBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uL3JldmVydCBtb2Rlc1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguc2F2ZUFwaS5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Ly8gc2VlIGlmIHRoZSBBUEkgdGhpbmtzIHdlIHdlcmUgc3VjY2Vzc2Z1bFxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0Ly8gcmVhbCBzdWNjZXNzXG5cdFx0XHRcdC8vIGRlZmF1bHQgb24gc3VjY2VzcyBhY3Rpb24gLSBkaXNwbGF5IGxpbmsgZm9yIGVkaXRlZCBwYWdlXG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbXcudXRpbC5nZXRVcmwoY3R4LnBhZ2VOYW1lKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3R4LnBhZ2VOYW1lKSk7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8oWyflrozmiJDvvIgnLCBsaW5rLCAn77yJJ10pO1xuXHRcdFx0XHRpZiAoY3R4Lm9uU2F2ZVN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRjdHgub25TYXZlU3VjY2Vzcyh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBlcnJvcnMgaGVyZSBhcmUgb25seSBnZW5lcmF0ZWQgYnkgZXh0ZW5zaW9ucyB3aGljaCBob29rIEFQSUVkaXRCZWZvcmVTYXZlIHdpdGhpbiBNZWRpYVdpa2ksXG5cdFx0XHQvLyB3aGljaCBhcyBvZiAxLjM0LjAtd21mLjIzIChTZXB0IDIwMTkpIHNob3VsZCBvbmx5IGVuY29tcGFzcyBjYXB0Y2hhIG1lc3NhZ2VzXG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5jYXB0Y2hhKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y6aG16Z2i77yM5Zug5pyN5Yqh5Zmo6KaB5rGC5oKo6L6T5YWl6aqM6K+B56CB44CCJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboOS8uuacjeWZqOimgeaxguaCqOi8uOWFpempl+itieeivOOAgicpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S/neWtmOmhtemdouaXtueUsUFQSeW+l+WIsOacquefpemUmeivrycsICflhLLlrZjpoIHpnaLmmYLnlLFBUEnlvpfliLDmnKrnn6XpjK/oqqQnKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5TYXZlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguc2F2ZUFwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBlZGl0IGNvbmZsaWN0XG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnZWRpdGNvbmZsaWN0JyAmJiBjdHguY29uZmxpY3RSZXRyaWVzKysgPCBjdHgubWF4Q29uZmxpY3RSZXRyaWVzKSB7XG5cdFx0XHRcdC8vIGVkaXQgY29uZmxpY3RzIGNhbiBvY2N1ciB3aGVuIHRoZSBwYWdlIG5lZWRzIHRvIGJlIHB1cmdlZCBmcm9tIHRoZSBzZXJ2ZXIgY2FjaGVcblx0XHRcdFx0Y29uc3QgcHVyZ2VRdWVyeSA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdwdXJnZScsXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsIC8vIHJlZGlyZWN0cyBhcmUgYWxyZWFkeSByZXNvbHZlZFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGNvbnN0IHB1cmdlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5qOA5rWL5Yiw57yW6L6R5Yay56qB77yM5q2j5Zyo5pu05paw5pyN5Yqh5Zmo57yT5a2YJywgJ+aqoua4rOWIsOe3qOi8r+ihneeqge+8jOato+WcqOabtOaWsOS8uuacjeWZqOW/q+WPlicpLFxuXHRcdFx0XHRcdHB1cmdlUXVlcnksXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOmHjeivleS/ruaUuScsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzph43oqabkv67mlLknKSk7XG5cdFx0XHRcdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTsgLy8gbmVjZXNzYXJpbHkgYXBwZW5kLCBwcmVwZW5kLCBvciBuZXdTZWN0aW9uLCBzbyB0aGlzIHNob3VsZCB3b3JrIGFzIGRlc2lyZWRcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5sb2FkQXBpLnBvc3QoKTsgLy8gcmVsb2FkIHRoZSBwYWdlIGFuZCByZWFwcGx5IHRoZSBlZGl0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRwdXJnZUFwaS5wb3N0KCk7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBuZXR3b3JrIG9yIHNlcnZlciBlcnJvclxuXHRcdFx0fSBlbHNlIGlmICgoZXJyb3JDb2RlID09PSBudWxsIHx8IGVycm9yQ29kZSA9PT0gdW5kZWZpbmVkKSAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gdGhlIGVycm9yIG1pZ2h0IGJlIHRyYW5zaWVudCwgc28gdHJ5IGFnYWluXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfkv53lrZjlpLHotKXvvIzlnKgy56eS5ZCO6YeN6K+V4oCm4oCmJywgJ+WEsuWtmOWkseaVl++8jOWcqDLnp5Llvozph43oqabigKbigKYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Ly8gd2FpdCBmb3Igc29tZXRpbWUgZm9yIGNsaWVudCB0byByZWdhaW4gY29ubmVjdGl2aXR5XG5cdFx0XHRcdHNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguc2F2ZUFwaS5nZXRSZXNwb25zZSgpO1xuXHRcdFx0XHRjb25zdCBlcnJvckRhdGEgPVxuXHRcdFx0XHRcdHJlc3BvbnNlLmVycm9yIHx8XG5cdFx0XHRcdFx0Ly8gYmMgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3JzWzBdLmRhdGE7IC8vIGh0bWwvd2lraXRleHQvcGxhaW50ZXh0IGVycm9yIGZvcm1hdFxuXHRcdFx0XHRzd2l0Y2ggKGVycm9yQ29kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ3Byb3RlY3RlZHBhZ2UnOlxuXHRcdFx0XHRcdFx0Ly8gbm9uLWFkbWluIGF0dGVtcHRpbmcgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlIC0gdGhpcyBnaXZlcyBhIGZyaWVuZGxpZXIgbWVzc2FnZSB0aGFuIHRoZSBkZWZhdWx0XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOS/ruaUue+8mumhtemdouiiq+S/neaKpCcsICfkuI3og73lhLLlrZjkv67mlLnvvJrpoIHpnaLooqvkv53orbcnKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci1kaXNhbGxvd2VkJzpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd6Zi75q2i44CC6Iul5oKo6K6k5Li65oKo55qE6K+l5qyh57yW6L6R5piv5pyJ5oSP5LmJ55qE77yM6K+36IezIFdpa2lwZWRpYTrpmLLmu6XnlKjov4fmu6Tlmagv6ZSZ6K+v5oql5ZGKIOaPkOaKpeOAgicsXG5cdFx0XHRcdFx0XHRcdFx0XHQn44CN6Zi75q2i44CC6Iul5oKo6KqN54K65oKo55qE6Kmy5qyh57eo6Lyv5piv5pyJ5oSP576p55qE77yM6KuL6IezIFdpa2lwZWRpYTrpmLLmv6vnlKjpgY7mv77lmagv6Yyv6Kqk5aCx5ZGKIOaPkOWgseOAgidcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnYWJ1c2VmaWx0ZXItd2FybmluZyc6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihbXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6R6KKr6Ziy5rul55So6L+H5ruk5Zmo6KeE5YiZ4oCcJywgJ+e3qOi8r+iiq+mYsua/q+eUqOmBjua/vuWZqOimj+WJh+OAjCcpLFxuXHRcdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn4oCd6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66K+l57yW6L6R77yM6K+35bCd6K+V6YeN5paw5o+Q5Lqk77yM5qC55o2u6L+H5ruk5Zmo55qE6K6+572u5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57yW6L6R44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn44CN6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66Kmy57eo6Lyv77yM6KuL5ZiX6Kmm6YeN5paw5o+Q5Lqk77yM5qC55pOa6YGO5r++5Zmo55qE6Kit5a6a5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57eo6Lyv44CCJ1xuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0XHQvLyBXZSBzaG91bGQgcHJvdmlkZSB0aGUgdXNlciB3aXRoIGEgd2F5IHRvIGF1dG9tYXRpY2FsbHkgcmV0cnkgdGhlIGFjdGlvbiBpZiB0aGV5IHNvIGNob29zZSAtXG5cdFx0XHRcdFx0XHQvLyBJIGNhbid0IHNlZSBob3cgdG8gZG8gdGhpcyB3aXRob3V0IGNyZWF0aW5nIGEgVUkgZGVwZW5kZW5jeSBvbiBNb3JlYml0cy53aWtpLnBhZ2UgdGhvdWdoIC0tIFRUT1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnc3BhbWJsYWNrbGlzdCc6IHtcblx0XHRcdFx0XHRcdC8vIElmIG11bHRpcGxlIGl0ZW1zIGFyZSBibGFja2xpc3RlZCwgd2Ugb25seSByZXR1cm4gdGhlIGZpcnN0XG5cdFx0XHRcdFx0XHRjb25zdCBbc3BhbV0gPSBlcnJvckRhdGEuc3BhbWJsYWNrbGlzdC5tYXRjaGVzO1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y6aG16Z2i77yM5ZugVVJMICcsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6BVUkwgJykgK1xuXHRcdFx0XHRcdFx0XHRcdHNwYW0gK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWcqOWeg+WcvumTvuaOpem7keWQjeWNleS4reOAgicsICcg5Zyo5Z6D5Zy+6YCj57WQ6buR5ZCN5Zau5Lit44CCJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOS/ruaUue+8micsICfkuI3og73lhLLlrZjkv67mlLnvvJonKSArIGN0eC5zYXZlQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzVGV4dFJlZGlyZWN0ID0gKHRleHQpID0+IHtcblx0XHRcdGlmICghdGV4dCkge1xuXHRcdFx0XHQvLyBubyB0ZXh0IC0gY29udGVudCBlbXB0eSBvciBpbmFjY2Vzc2libGUgKHJldmRlbGxlZCBvciBzdXBwcmVzc2VkKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMubDEwbi5yZWRpcmVjdFRhZ0FsaWFzZXMuc29tZSgodGFnKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXHMqJHt0YWd9XFxcXFdgLCAnaScpLnRlc3QodGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9va3VwQ3JlYXRpb25BcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCBjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmV2ID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zICYmIHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9uc1swXTtcblx0XHRcdGlmICghcmV2KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5om+5YiwJywgJ+eEoeazleaJvuWIsCcpICtcblx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+eahOS7u+S9leS/ruiuoueJiOacrCcsICfnmoTku7vkvZXkv67oqILniYjmnKwnKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciB8fCAhaXNUZXh0UmVkaXJlY3QocmV2LmNvbnRlbnQpKSB7XG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0aWYgKCFjdHgudGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+W3suiOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflt7Llj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeS5ydmxpbWl0ID0gNTA7IC8vIG1vZGlmeSBwcmV2aW91cyBxdWVyeSB0byBmZXRjaCBtb3JlIHJldmlzaW9uc1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnkudGl0bGVzID0gY3R4LnBhZ2VOYW1lOyAvLyB1cGRhdGUgcGFnZU5hbWUgaWYgcmVkaXJlY3QgcmVzb2x1dGlvbiB0b29rIHBsYWNlIGluIGVhcmxpZXIgcXVlcnlcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+WPluW+l+mggemdouW7uueri+izh+ioiicpLFxuXHRcdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeSxcblx0XHRcdFx0XHRmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcixcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9va3VwQ3JlYXRpb25BcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGNvbnN0IHJldnMgPSByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnM7XG5cdFx0XHRmb3IgKGNvbnN0IHJldiBvZiByZXZzKSB7XG5cdFx0XHRcdGlmICghaXNUZXh0UmVkaXJlY3QocmV2LmNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHQvLyBmYWxsYmFjayB0byBnaXZlIGZpcnN0IHJldmlzaW9uIGF1dGhvciBpZiBubyBub24tcmVkaXJlY3QgdmVyc2lvbiBpbiB0aGUgZmlyc3QgNTBcblx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXZzWzBdLnVzZXI7XG5cdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXZzWzBdLnRpbWVzdGFtcDtcblx0XHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCflt7Lojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5bey5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJykpO1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzKHRoaXMpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ29tbW9uIGNoZWNrcyBmb3IgYWN0aW9uIG1ldGhvZHMuIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsXG5cdFx0ICogcHJvdGVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIGNoZWNrZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9uRmFpbHVyZSAtIEZhaWx1cmUgY2FsbGJhY2suXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5QcmVmbGlnaHRDaGVja3MgPSBmdW5jdGlvbiAoYWN0aW9uLCBvbkZhaWx1cmUpIHtcblx0XHRcdC8vIGlmIGEgbm9uLWFkbWluIHRyaWVzIHRvIGRvIHRoaXMsIGRvbid0IGJvdGhlclxuXHRcdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiBhY3Rpb24gIT09ICdtb3ZlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvJrlj6rmnInnrqHnkIblkZjlj6/ku6Xov5vooYzmraTmk43kvZwnLCAn44CN5pON5L2c77ya5Y+q5pyJ566h55CG5ZOh5Y+v5Lul6YCy6KGM5q2k5pON5L2cJylcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5lZGl0U3VtbWFyeSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihgSW50ZXJuYWwgZXJyb3I6ICR7YWN0aW9ufSByZWFzb24gbm90IHNldCAodXNlIHNldEVkaXRTdW1tYXJ5IGZ1bmN0aW9uKSFgKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDb21tb24gY2hlY2tzIGZvciBmblByb2Nlc3MgZnVuY3Rpb25zIChgZm5Qcm9jZXNzRGVsZXRlYCwgYGZuUHJvY2Vzc01vdmVgLCBldGMuXG5cdFx0ICogVXNlZCBmb3IgbW92ZSwgdW5kZWxldGUsIGRlbGV0ZSwgcHJvdGVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIGNoZWNrZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9uRmFpbHVyZSAtIEZhaWx1cmUgY2FsbGJhY2suXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlIC0gVGhlIHJlc3BvbnNlIGRvY3VtZW50IGZyb20gdGhlIEFQSSBjYWxsLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJvY2Vzc0NoZWNrcyA9IGZ1bmN0aW9uIChhY3Rpb24sIG9uRmFpbHVyZSwgcmVzcG9uc2UpIHtcblx0XHRcdGNvbnN0IFt7bWlzc2luZ31dID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHQvLyBObyB1bmRlbGV0ZSBhcyBhbiBleGlzdGluZyBwYWdlIGNvdWxkIGhhdmUgZGVsZXRlZCByZXZpc2lvbnNcblx0XHRcdGNvbnN0IGFjdGlvbk1pc3NpbmcgPSBtaXNzaW5nICYmIFsnZGVsZXRlJywgJ21vdmUnXS5pbmNsdWRlcyhhY3Rpb24pO1xuXHRcdFx0Y29uc3QgcHJvdGVjdE1pc3NpbmcgPSBhY3Rpb24gPT09ICdwcm90ZWN0JyAmJiBtaXNzaW5nICYmIChjdHgucHJvdGVjdEVkaXQgfHwgY3R4LnByb3RlY3RNb3ZlKTtcblx0XHRcdGNvbnN0IHNhbHRNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgIW1pc3NpbmcgJiYgY3R4LnByb3RlY3RDcmVhdGU7XG5cdFx0XHRpZiAoYWN0aW9uTWlzc2luZyB8fCBwcm90ZWN0TWlzc2luZyB8fCBzYWx0TWlzc2luZykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRgJHtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5a+56aG16Z2i6L+b6KGM4oCcJywgJ+eEoeazleWwjemggemdoumAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nO+8jOWboOS4uumhtemdoicsICfjgI3mk43kvZzvvIzlm6DngrrpoIHpnaInKSArXG5cdFx0XHRcdFx0XHQobWlzc2luZyA/ICflt7LkuI0nIDogd2luZG93LndnVUxTKCflt7Lnu48nLCAn5bey57aTJykpXG5cdFx0XHRcdFx0feWtmOWcqGBcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBEZWxldGUsIHVuZGVsZXRlLCBtb3ZlXG5cdFx0XHQvLyBleHRyYWN0IHByb3RlY3Rpb24gaW5mb1xuXHRcdFx0bGV0IGVkaXRwcm90O1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3VuZGVsZXRlJykge1xuXHRcdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb25cblx0XHRcdFx0XHQuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdjcmVhdGUnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnBvcCgpO1xuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICdkZWxldGUnIHx8IGFjdGlvbiA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnBvcCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRlZGl0cHJvdCAmJlxuXHRcdFx0XHQhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgJiZcblx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjljbPlsIblr7nlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH5bCN5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdChlZGl0cHJvdC5leHBpcnkgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHRcdFx0PyB3aW5kb3cud2dVTFMoJ+KAne+8iOawuOS5he+8iScsICfjgI3vvIjmsLjkuYXvvIknKVxuXHRcdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3vvIjliLDmnJ/vvJonLCAn44CN77yI5Yiw5pyf77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUoZWRpdHByb3QuZXhwaXJ5KS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdFx0XHR9IChVVEMp77yJYCkgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3ov5vooYzigJwnLCAn44CN6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2cJywgJ+OAjeaTjeS9nCcpICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0J+OAglxcblxcbuWNleWHu+ehruWumuS7pee7p+e7reaTjeS9nO+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdCfjgIJcXG5cXG7pu57mk4rnorrlrprku6Xnubznuozmk43kvZzvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOaTjeS9nOOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTmk43kvZzjgIInKSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFyZXNwb25zZS50b2tlbnMuY3NyZnRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W5Luk54mM44CCJywgJ+eEoeazleWPluW+l+asiuadluOAgicpKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc01vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ21vdmUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lm1vdmVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ21vdmUnLCBjdHgub25Nb3ZlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnbW92ZScsXG5cdFx0XHRcdGZyb206IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG86IGN0eC5tb3ZlRGVzdGluYXRpb24sXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlVGFsa1BhZ2UpIHtcblx0XHRcdFx0cXVlcnkubW92ZXRhbGsgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVTdWJwYWdlcykge1xuXHRcdFx0XHRxdWVyeS5tb3Zlc3VicGFnZXMgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5Lm5vcmVkaXJlY3QgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn56e75Yqo6aG16Z2i4oCm4oCmJywgJ+enu+WLlemggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uTW92ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Qcm9jZXNzUGF0cm9sID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhdHJvbCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIERpZG4ndCBuZWVkIHRvIGxvYWQgdGhlIHBhZ2Vcblx0XHRcdGlmIChjdHgucmNpZCkge1xuXHRcdFx0XHRxdWVyeS5yY2lkID0gY3R4LnJjaWQ7XG5cdFx0XHRcdHF1ZXJ5LnRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdwYXRyb2xUb2tlbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgucGF0cm9sQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdC8vIERvbid0IHBhdHJvbCBpZiBub3QgdW5wYXRyb2xsZWRcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5yZWNlbnRjaGFuZ2VzWzBdLnVucGF0cm9sbGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IFt7bGFzdHJldmlkfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0aWYgKCFsYXN0cmV2aWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkucmV2aWQgPSBsYXN0cmV2aWQ7XG5cdFx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhdHJvbFN0YXQgPSBuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn5qCH6K6w6aG16Z2i5Li65bey5beh5p+lJywgJ+aomeiomOmggemdoueCuuW3suW3oeafpScpKTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+W3oeafpemhtemdouKApuKApicsICflt6Hmn6XpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHBhdHJvbFN0YXRcblx0XHRcdCk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblByb2Nlc3NEZWxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdkZWxldGUnLCBjdHgub25EZWxldGVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdkZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WIoOmZpOmhtemdouKApuKApicsICfliKrpmaTpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vbkRlbGV0ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblByb2Nlc3NEZWxldGVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KClcblx0XHRjb25zdCBmblByb2Nlc3NEZWxldGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIFwiRGF0YWJhc2UgcXVlcnkgZXJyb3JcIlxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2ludGVybmFsX2FwaV9lcnJvcl9EQlF1ZXJ5RXJyb3InICYmIGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnbWlzc2luZ3RpdGxlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S4jeiDveWIoOmZpOmhtemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcsICfkuI3og73liKrpmaTpoIHpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnKSk7XG5cdFx0XHRcdGlmIChjdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5XliKDpmaTpobXpnaLvvJonLCAn54Sh5rOV5Yiq6Zmk6aCB6Z2i77yaJykgKyBjdHguZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uRGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHguZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc1VuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgudW5kZWxldGVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ3VuZGVsZXRlJywgY3R4Lm9uVW5kZWxldGVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICd1bmRlbGV0ZScsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfov5jljp/pobXpnaLigKbigKYnLCAn6YKE5Y6f6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gdW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHgudW5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIFwiRGF0YWJhc2UgcXVlcnkgZXJyb3JcIlxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2ludGVybmFsX2FwaV9lcnJvcl9EQlF1ZXJ5RXJyb3InKSB7XG5cdFx0XHRcdGlmIChjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0J+aMgee7reeahOaVsOaNruW6k+afpeivoumUmeivr++8jOmHjeaWsOWKoOi9vemhtemdouW5tumHjeivlScsXG5cdFx0XHRcdFx0XHRcdCfmjIHnuoznmoTos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43mlrDovInlhaXpoIHpnaLkuKbph43oqaYnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yQ29kZSA9PT0gJ2NhbnR1bmRlbGV0ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0J+aXoOazlei/mOWOn+WIoOmZpOmhtemdou+8jOWboOayoeacieeJiOacrOS+m+i/mOWOn+aIluW3suiiq+i/mOWOnycsXG5cdFx0XHRcdFx0XHQn54Sh5rOV6YKE5Y6f5Yiq6Zmk6aCB6Z2i77yM5Zug5rKS5pyJ54mI5pys5L6b6YKE5Y6f5oiW5bey6KKr6YKE5Y6fJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazlei/mOWOn+mhtemdou+8micsICfnhKHms5XpgoTljp/poIHpnaLvvJonKSArIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NQcm90ZWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgucHJvdGVjdEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ3Byb3RlY3QnLCBjdHgub25Qcm90ZWN0RmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRjb25zdCBwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHQvLyBGZXRjaCBleGlzdGluZyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdFx0Y29uc3QgcHJzID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbjtcblx0XHRcdGxldCBlZGl0cHJvdDtcblx0XHRcdGxldCBtb3ZlcHJvdDtcblx0XHRcdGxldCBjcmVhdGVwcm90O1xuXHRcdFx0Zm9yIChjb25zdCBwciBvZiBwcnMpIHtcblx0XHRcdFx0Ly8gRmlsdGVyIG91dCBwcm90ZWN0aW9uIGZyb20gY2FzY2FkaW5nXG5cdFx0XHRcdGlmIChwci50eXBlID09PSAnZWRpdCcgJiYgIXByLnNvdXJjZSkge1xuXHRcdFx0XHRcdGVkaXRwcm90ID0gcHI7XG5cdFx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdFx0bW92ZXByb3QgPSBwcjtcblx0XHRcdFx0fSBlbHNlIGlmIChwci50eXBlID09PSAnY3JlYXRlJykge1xuXHRcdFx0XHRcdGNyZWF0ZXByb3QgPSBwcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIGN1cnJlbnQgbGV2ZWxzIGlmIG5vdCBleHBsaWNpdGx5IHNldFxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdEVkaXQgJiYgZWRpdHByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRcdGxldmVsOiBlZGl0cHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IGVkaXRwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnByb3RlY3RNb3ZlICYmIG1vdmVwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0XHRsZXZlbDogbW92ZXByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBtb3ZlcHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0Q3JlYXRlICYmIGNyZWF0ZXByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RDcmVhdGUgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IGNyZWF0ZXByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBjcmVhdGVwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIERlZmF1bHQgdG8gcHJlLWV4aXN0aW5nIGNhc2NhZGluZyBwcm90ZWN0aW9uIGlmIHVuY2hhbmdlZCAoc2ltaWxhciB0byBhYm92ZSlcblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFwcnMuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBwci5jYXNjYWRlO1xuXHRcdFx0XHR9KS5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0XHQvLyBXYXJuIGlmIGNhc2NhZGluZyBwcm90ZWN0aW9uIGJlaW5nIGFwcGxpZWQgd2l0aCBhbiBpbnZhbGlkIHByb3RlY3Rpb24gbGV2ZWwsXG5cdFx0XHQvLyB3aGljaCBmb3IgZWRpdCBwcm90ZWN0aW9uIHdpbGwgY2F1c2UgY2FzY2FkaW5nIHRvIGJlIHNpbGVudGx5IHN0cmlwcGVkXG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRcdC8vIE9uIG1vdmUgcHJvdGVjdGlvbiwgdGhpcyBpcyB0ZWNobmljYWxseSBzdHJpY3RlciB0aGFuIHRoZSBNVyBBUEksXG5cdFx0XHRcdC8vIGJ1dCBzZWVtcyByZWFzb25hYmxlIHRvIGF2b2lkIGR1bWIgdmFsdWVzIGFuZCBtaXNsZWFkaW5nIGxvZyBlbnRyaWVzIChUMjY1NjI2KVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KCFjdHgucHJvdGVjdEVkaXQgfHxcblx0XHRcdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCAhPT0gJ3N5c29wJyB8fFxuXHRcdFx0XHRcdFx0IWN0eC5wcm90ZWN0TW92ZSB8fFxuXHRcdFx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlLmxldmVsICE9PSAnc3lzb3AnKSAmJlxuXHRcdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjlt7Llr7nigJwnLCAn5oKo5bey5bCN44CMJykgK1xuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneWQr+eUqOS6hui/numUgeS/neaKpCcsICfjgI3llZ/nlKjkuobpgKPpjpbkv53orbcnKSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn77yM5L2G5rKh5pyJ6K6+572u5LuF566h55CG5ZGY55qE5L+d5oqk57qn5Yir44CCXFxuXFxuJyxcblx0XHRcdFx0XHRcdFx0XHQn77yM5L2G5rKS5pyJ6Kit5a6a5YOF566h55CG5ZOh55qE5L+d6K2357Sa5Yil44CCXFxuXFxuJ1xuXHRcdFx0XHRcdFx0XHQpICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7orqTku6Xoh6rliqjosIPmlbTlubbnu6fnu63ov57plIHlhajkv53miqTvvIzljZXlh7vlj5bmtojku6Xot7Pov4fmraTmk43kvZwnLFxuXHRcdFx0XHRcdFx0XHRcdCfpu57mk4rnorroqo3ku6Xoh6rli5Xoqr/mlbTkuKbnubznuozpgKPpjpblhajkv53orbfvvIzpu57mk4rlj5bmtojku6Xot7PpgY7mraTmk43kvZwnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn6L+e6ZSB5L+d5oqk5bey5Y+W5raI44CCJywgJ+mAo+mOluS/neitt+W3suWPlua2iOOAgicpKTtcblx0XHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0LmxldmVsID0gJ3N5c29wJztcblx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlLmxldmVsID0gJ3N5c29wJztcblx0XHRcdH1cblx0XHRcdC8vIEJ1aWxkIHByb3RlY3Rpb24gbGV2ZWxzIGFuZCBleHBpcnlzIChleHBpcmllcz8pIGZvciBxdWVyeVxuXHRcdFx0Y29uc3QgcHJvdGVjdGlvbnMgPSBbXTtcblx0XHRcdGNvbnN0IGV4cGlyeXMgPSBbXTtcblx0XHRcdGlmIChjdHgucHJvdGVjdEVkaXQpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBlZGl0PSR7Y3R4LnByb3RlY3RFZGl0LmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RFZGl0LmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdE1vdmUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBtb3ZlPSR7Y3R4LnByb3RlY3RNb3ZlLmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RNb3ZlLmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYGNyZWF0ZT0ke2N0eC5wcm90ZWN0Q3JlYXRlLmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RDcmVhdGUuZXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3Byb3RlY3QnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cHJvdGVjdGlvbnM6IHByb3RlY3Rpb25zLmpvaW4oJ3wnKSxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnlzLmpvaW4oJ3wnKSxcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSBzaG93cyB1cCBpbiBsb2dzLCBub3QgcGFnZSBoaXN0b3J5XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSkge1xuXHRcdFx0XHRxdWVyeS5jYXNjYWRlID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/neaKpOmhtemdouKApuKApicsICfkv53orbfpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IHNsZWVwID0gKG1pbGxpc2Vjb25kcykgPT4ge1xuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUsIG1pbGxpc2Vjb25kcyk7XG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fTtcblx0fTsgLy8gZW5kIE1vcmViaXRzLndpa2kucGFnZVxuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kucHJldmlldyAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBVc2UgdGhlIEFQSSB0byBwYXJzZSBhIGZyYWdtZW50IG9mIHdpa2l0ZXh0IGFuZCByZW5kZXIgaXQgYXMgSFRNTC5cblx0ICpcblx0ICogVGhlIHN1Z2dlc3RlZCBpbXBsZW1lbnRhdGlvbiBwYXR0ZXJuIChpbiB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmRcblx0ICoge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gc2l0dWF0aW9ucykgaXMgdG8gY29uc3RydWN0IGFcblx0ICogYE1vcmViaXRzLndpa2kucHJldmlld2Agb2JqZWN0IGFmdGVyIHJlbmRlcmluZyBhIGBNb3JlYml0cy5xdWlja0Zvcm1gLCBhbmRcblx0ICogYmluZCB0aGUgb2JqZWN0IHRvIGFuIGFyYml0cmFyeSBwcm9wZXJ0eSBvZiB0aGUgZm9ybSAoZS5nLiB8cHJldmlld2VyfCkuXG5cdCAqIEZvciBhbiBleGFtcGxlLCBzZWUgdHdpbmtsZXdhcm4uanMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3Ym94IC0gVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIHJlbmRlcmVkIEhUTUwsXG5cdCAqIHVzdWFsbHkgYSA8ZGl2PiBlbGVtZW50LlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5wcmV2aWV3ID0gZnVuY3Rpb24gKHByZXZpZXdib3gpIHtcblx0XHR0aGlzLnByZXZpZXdib3ggPSBwcmV2aWV3Ym94O1xuXHRcdCQocHJldmlld2JveCkuYWRkQ2xhc3MoJ21vcmViaXRzLXByZXZpZXdib3gnKS5oaWRlKCk7XG5cdFx0LyoqXG5cdFx0ICogRGlzcGxheXMgdGhlIHByZXZpZXcgYm94LCBhbmQgYmVnaW5zIGFuIGFzeW5jaHJvbm91cyBhdHRlbXB0XG5cdFx0ICogdG8gcmVuZGVyIHRoZSBzcGVjaWZpZWQgd2lraXRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgLSBXaWtpdGV4dCB0byByZW5kZXI7IG1vc3QgdGhpbmdzIHNob3VsZCB3b3JrLCBpbmNsdWRpbmcgYHN1YnN0OmAgYW5kIGB+fn5+YC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3BhZ2VUaXRsZV0gLSBPcHRpb25hbCBwYXJhbWV0ZXIgZm9yIHRoZSBwYWdlIHRoaXMgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIGJlaW5nIG9uLCBpZiBvbWl0dGVkIGl0IGlzIHRha2VuIGFzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtzZWN0aW9uVGl0bGVdIC0gSWYgcHJvdmlkZWQsIHJlbmRlciB0aGUgdGV4dCBhcyBhIG5ldyBzZWN0aW9uIHVzaW5nIHRoaXMgYXMgdGhlIHRpdGxlLlxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX1cblx0XHQgKi9cblx0XHR0aGlzLmJlZ2luUmVuZGVyID0gKHdpa2l0ZXh0LCBwYWdlVGl0bGUsIHNlY3Rpb25UaXRsZSkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5zaG93KCk7XG5cdFx0XHRjb25zdCBzdGF0dXNzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0cHJldmlld2JveC5hcHBlbmRDaGlsZChzdGF0dXNzcGFuKTtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5pbml0KHN0YXR1c3NwYW4pO1xuXHRcdFx0Ly8g6Iul6aG16Z2i5LiN5pivd2lraXRleHTvvIjkvovlpoJKU+OAgUNTU+etie+8ie+8jOmCo+S5iOaJvuS4gOS4qndpa2l0ZXh06aG16Z2i5p2l6aKE6KeI44CCXG5cdFx0XHRsZXQgcGFnZU5hbWUgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJykgIT09ICd3aWtpdGV4dCcpIHtcblx0XHRcdFx0cGFnZU5hbWUgPSBgRHJhZnQ6JHtwYWdlTmFtZX1gO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ21vZHVsZXMnXSxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHQvLyBQU1QgPSBwcmUtc2F2ZSB0cmFuc2Zvcm07IHRoaXMgbWFrZXMgc3Vic3RpdHV0aW9uIHdvcmsgcHJvcGVybHlcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUgfHwgcGFnZU5hbWUsXG5cdFx0XHRcdGRpc2FibGVsaW1pdHJlcG9ydDogdHJ1ZSxcblx0XHRcdFx0ZGlzYWJsZWVkaXRzZWN0aW9uOiB0cnVlLFxuXHRcdFx0XHR1c2VsYW5nOiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLFxuXHRcdFx0XHQvLyBVc2Ugd2dVc2VyTGFuZ3VhZ2UgZm9yIHByZXZpZXdcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IHNlY3Rpb25UaXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlbmRlckFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfliqDovb3kuK3igKbigKYnLCAn6LyJ5YWl5Lit4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblJlbmRlclN1Y2Nlc3MsXG5cdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMod2luZG93LndnVUxTKCfpooTop4gnLCAn6aCQ6Ka9JykpXG5cdFx0XHQpO1xuXHRcdFx0cmVuZGVyQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUmVuZGVyU3VjY2VzcyA9IChhcGlvYmopID0+IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXBpb2JqLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRjb25zdCBodG1sID0gcmVzcG9uc2UucGFyc2UudGV4dDtcblx0XHRcdGlmICghaHRtbCkge1xuXHRcdFx0XHRhcGlvYmouc3RhdGVsZW0uZXJyb3Iod2luZG93LndnVUxTKCfliqDovb3pooTop4jlpLHotKXvvIzmiJbmqKHmnb/kuLrnqbonLCAn6LyJ5YWl6aCQ6Ka95aSx5pWX77yM5oiW5qih5p2/54K656m6JykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwcmV2aWV3Ym94LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzdHlsZXMpO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQocmVzcG9uc2UucGFyc2UubW9kdWxlcyk7XG5cdFx0XHQvLyB0aGlzIG1ha2VzIGxpbmtzIG9wZW4gaW4gbmV3IHRhYlxuXHRcdFx0JChwcmV2aWV3Ym94KS5maW5kKCdhJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpLmF0dHIoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0fTtcblx0XHQvKiogSGlkZXMgdGhlIHByZXZpZXcgYm94IGFuZCBjbGVhcnMgaXQuICovXG5cdFx0dGhpcy5jbG9zZVByZXZpZXcgPSAoKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLmVtcHR5KCkuaGlkZSgpO1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraXRleHQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogV2lraXRleHQgbWFuaXB1bGF0aW9uLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQgPSB7fTtcblx0LyoqXG5cdCAqIEdldCB0aGUgdmFsdWUgb2YgZXZlcnkgcGFyYW1ldGVyIGZvdW5kIGluIHRoZSB3aWtpdGV4dCBvZiBhIGdpdmVuIHRlbXBsYXRlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBXaWtpdGV4dCBjb250YWluaW5nIGEgdGVtcGxhdGUuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gLSBJbmRleCBub3Rpbmcgd2hlcmUgaW4gdGhlIHRleHQgdGhlIHRlbXBsYXRlIGJlZ2lucy5cblx0ICogQHJldHVybnMge09iamVjdH0gYHtuYW1lOiB0ZW1wbGF0ZU5hbWUsIHBhcmFtZXRlcnM6IHtrZXk6IHZhbHVlfX1gLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQucGFyc2VUZW1wbGF0ZSA9ICh0ZXh0LCBzdGFydCkgPT4ge1xuXHRcdHN0YXJ0IHx8PSAwO1xuXHRcdGNvbnN0IGxldmVsID0gW107IC8vIFRyYWNrIG9mIGhvdyBkZWVwIHdlIGFyZSAoe3ssIHt7eywgb3IgW1spXG5cdFx0bGV0IGNvdW50ID0gLTE7IC8vIE51bWJlciBvZiBwYXJhbWV0ZXJzIGZvdW5kXG5cdFx0bGV0IHVubmFtZWQgPSAwOyAvLyBLZWVwIHRyYWNrIG9mIHdoYXQgbnVtYmVyIGFuIHVubmFtZWQgcGFyYW1ldGVyIHNob3VsZCByZWNlaXZlXG5cdFx0bGV0IGVxdWFscyA9IC0xOyAvLyBBZnRlciBmaW5kaW5nIFwiPVwiIGJlZm9yZSBhIHBhcmFtZXRlciwgdGhlIGluZGV4OyBvdGhlcndpc2UsIC0xXG5cdFx0bGV0IGN1cnJlbnQgPSAnJztcblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdHBhcmFtZXRlcnM6IHt9LFxuXHRcdH07XG5cdFx0bGV0IGtleTtcblx0XHRsZXQgdmFsdWU7XG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gdG8gaGFuZGxlIGZpbmRpbmcgcGFyYW1ldGVyIHZhbHVlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmFsPWZhbHNlXSAtIFdoZXRoZXIgdGhpcyBpcyB0aGUgZmluYWxcblx0XHQgKiBwYXJhbWV0ZXIgYW5kIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSB0cmFpbGluZyBgfX1gLlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZpbmRQYXJhbSA9IChmaW5hbCkgPT4ge1xuXHRcdFx0Ly8gTm90aGluZyBmb3VuZCB5ZXQsIHRoaXMgbXVzdCBiZSB0aGUgdGVtcGxhdGUgbmFtZVxuXHRcdFx0aWYgKGNvdW50ID09PSAtMSkge1xuXHRcdFx0XHRyZXN1bHQubmFtZSA9IGN1cnJlbnQuc2xpY2UoMikudHJpbSgpO1xuXHRcdFx0XHQrK2NvdW50O1xuXHRcdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xKSB7XG5cdFx0XHRcdC8vIEluIGEgcGFyYW1ldGVyXG5cdFx0XHRcdC8vIE5vIGVxdWFscywgc28gaXQgbXVzdCBiZSB1bm5hbWVkOyBubyB0cmltIHNpbmNlIHdoaXRlc3BhY2UgYWxsb3dlZFxuXHRcdFx0XHRjb25zdCBwYXJhbSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikgOiBjdXJyZW50O1xuXHRcdFx0XHRpZiAocGFyYW0pIHtcblx0XHRcdFx0XHRyZXN1bHQucGFyYW1ldGVyc1srK3VubmFtZWRdID0gcGFyYW07XG5cdFx0XHRcdFx0Kytjb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gV2UgZm91bmQgYW4gZXF1YWxzLCBzbyBzYXZlIHRoZSBwYXJhbWV0ZXIgYXMga2V5OiB2YWx1ZVxuXHRcdFx0XHRrZXkgPSBjdXJyZW50LnNsaWNlKDAsIE1hdGgubWF4KDAsIGVxdWFscykpLnRyaW0oKTtcblx0XHRcdFx0dmFsdWUgPSBmaW5hbCA/IGN1cnJlbnQuc2xpY2UoZXF1YWxzICsgMSwgLTIpLnRyaW0oKSA6IGN1cnJlbnQuc2xpY2UoTWF0aC5tYXgoMCwgZXF1YWxzICsgMSkpLnRyaW0oKTtcblx0XHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRlcXVhbHMgPSAtMTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHRleHQubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IHRlc3QzID0gdGV4dC5zbGljZShpLCBpICsgMyk7XG5cdFx0XHRpZiAodGVzdDMgPT09ICd7e3snIHx8ICh0ZXN0MyA9PT0gJ319fScgJiYgbGV2ZWwuYXQoLTEpID09PSAzKSkge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QzO1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycpIHtcblx0XHRcdFx0XHRsZXZlbFtsZXZlbC5sZW5ndGhdID0gMztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXZlbC5wb3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHRlc3QyID0gdGV4dC5zbGljZShpLCBpICsgMik7XG5cdFx0XHQvLyBFbnRlcmluZyBhIHRlbXBsYXRlIChvciBsaW5rKVxuXHRcdFx0aWYgKHRlc3QyID09PSAne3snIHx8IHRlc3QyID09PSAnW1snKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDI7XG5cdFx0XHRcdCsraTtcblx0XHRcdFx0aWYgKHRlc3QyID09PSAne3snKSB7XG5cdFx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9IDI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9ICd3bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBFaXRoZXIgbGVhdmluZyBhIGxpbmsgb3IgdGVtcGxhdGUvcGFyc2VyIGZ1bmN0aW9uXG5cdFx0XHRpZiAoKHRlc3QyID09PSAnfX0nICYmIGxldmVsLmF0KC0xKSA9PT0gMikgfHwgKHRlc3QyID09PSAnXV0nICYmIGxldmVsLmF0KC0xKSA9PT0gJ3dsJykpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRsZXZlbC5wb3AoKTtcblx0XHRcdFx0Ly8gRmluZCB0aGUgZmluYWwgcGFyYW1ldGVyIGlmIHRoaXMgcmVhbGx5IGlzIHRoZSBlbmRcblx0XHRcdFx0aWYgKHRlc3QyID09PSAnfX0nICYmIGxldmVsLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGZpbmRQYXJhbSh0cnVlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0LmNoYXJBdChpKSA9PT0gJ3wnICYmIGxldmVsLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBBbm90aGVyIHBpcGUgZm91bmQsIHRvcGxldmVsLCBzbyBwYXJhbWV0ZXIgY29taW5nIHVwIVxuXHRcdFx0XHRmaW5kUGFyYW0oKTtcblx0XHRcdFx0Y3VycmVudCA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xICYmIHRleHQuY2hhckF0KGkpID09PSAnPScgJiYgbGV2ZWwubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIEVxdWFscyBmb3VuZCwgdG9wbGV2ZWxcblx0XHRcdFx0ZXF1YWxzID0gY3VycmVudC5sZW5ndGg7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBKdXN0IGFkdmFuY2UgdGhlIHBvc2l0aW9uXG5cdFx0XHRcdGN1cnJlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGp1c3QgYW5kIG1hbmlwdWxhdGUgdGhlIHdpa2l0ZXh0IG9mIGEgcGFnZS5cblx0ICpcblx0ICogQGNsYXNzXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IHRvIGJlIG1hbmlwdWxhdGVkLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQucGFnZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0fTtcblx0TW9yZWJpdHMud2lraXRleHQucGFnZS5wcm90b3R5cGUgPSB7XG5cdFx0dGV4dDogJycsXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBsaW5rcyB0byBgbGlua190YXJnZXRgIGZyb20gdGhlIHBhZ2UgdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsaW5rVGFyZ2V0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0cmVtb3ZlTGluayhsaW5rVGFyZ2V0KSB7XG5cdFx0XHRjb25zdCBtd1RpdGxlID0gbXcuVGl0bGUubmV3RnJvbVRleHQobGlua1RhcmdldCk7XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJRCA9IG13VGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gbXdUaXRsZS5nZXRNYWluVGV4dCgpO1xuXHRcdFx0bGV0IGxpbmtSZWdleFN0cmluZyA9ICcnO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlEICE9PSAwKSB7XG5cdFx0XHRcdGxpbmtSZWdleFN0cmluZyA9IGAke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KG5hbWVzcGFjZUlEKX06YDtcblx0XHRcdH1cblx0XHRcdGxpbmtSZWdleFN0cmluZyArPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KHRpdGxlKTtcblx0XHRcdC8vIEZvciBtb3N0IG5hbWVzcGFjZXMsIHVubGluayBib3RoIFtbVXNlcjpUZXN0XV0gYW5kIFtbOlVzZXI6VGVzdF1dXG5cdFx0XHQvLyBGb3IgZmlsZXMgYW5kIGNhdGVnb3JpZXMsIG9ubHkgdW5saW5rIFtbOkNhdGVnb3J5OlRlc3RdXS4gRG8gbm90IHVubGluayBbW0NhdGVnb3J5OlRlc3RdXVxuXHRcdFx0Y29uc3QgaXNGaWxlT3JDYXRlZ29yeSA9IFs2LCAxNF0uaW5jbHVkZXMobmFtZXNwYWNlSUQpO1xuXHRcdFx0Y29uc3QgY29sb24gPSBpc0ZpbGVPckNhdGVnb3J5ID8gJzonIDogJzo/Jztcblx0XHRcdGNvbnN0IHNpbXBsZUxpbmtSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske2NvbG9ufSgke2xpbmtSZWdleFN0cmluZ30pXFxcXF1cXFxcXWAsICdnJyk7XG5cdFx0XHRjb25zdCBwaXBlZExpbmtSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske2NvbG9ufSR7bGlua1JlZ2V4U3RyaW5nfVxcXFx8KC4rPylcXFxcXVxcXFxdYCwgJ2cnKTtcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHNpbXBsZUxpbmtSZWdleCwgJyQxJykucmVwbGFjZShwaXBlZExpbmtSZWdleCwgJyQxJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENvbW1lbnRzIG91dCBpbWFnZXMgZnJvbSBwYWdlIHRleHQ7IGlmIHVzZWQgaW4gYSBnYWxsZXJ5LCBkZWxldGVzIHRoZSB3aG9sZSBsaW5lLlxuXHRcdCAqIElmIHVzZWQgYXMgYSB0ZW1wbGF0ZSBhcmd1bWVudCAobm90IG5lY2Vzc2FyaWx5IHdpdGggYEZpbGU6YCBwcmVmaXgpLCB0aGUgdGVtcGxhdGUgcGFyYW1ldGVyIGlzIGNvbW1lbnRlZCBvdXQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSBuYW1lIHdpdGhvdXQgYEZpbGU6YCBwcmVmaXguXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIC0gUmVhc29uIHRvIGJlIGluY2x1ZGVkIGluIGNvbW1lbnQsIGFsb25nc2lkZSB0aGUgY29tbWVudGVkLW91dCBpbWFnZS5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRjb21tZW50T3V0SW1hZ2UoaW1hZ2UsIHJlYXNvbikge1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIodGhpcy50ZXh0KTtcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdHJlYXNvbiA9IHJlYXNvbiA/IGAke3JlYXNvbn06IGAgOiAnJztcblx0XHRcdGNvbnN0IGltYWdlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGltYWdlKTtcblx0XHRcdC8vIENoZWNrIGZvciBub3JtYWwgaW1hZ2UgbGlua3MsIGkuZS4gW1tGaWxlOkZvb2Jhci5wbmd8Li4uXV1cblx0XHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5rXG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbExpbmtzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModW5iaW5kZXIuY29udGVudCwgJ1tbJywgJ11dJyk7XG5cdFx0XHRmb3IgKGNvbnN0IGFsbExpbmsgb2YgYWxsTGlua3MpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChhbGxMaW5rKSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gYDwhLS0gJHtyZWFzb259JHthbGxMaW5rfSAtLT5gO1xuXHRcdFx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoYWxsTGluaywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdFx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQ2hlY2sgZm9yIGdhbGxlcnkgaW1hZ2VzLCBpLmUuIGluc3RhbmNlcyB0aGF0IG11c3Qgc3RhcnQgb24gYSBuZXcgbGluZSxcblx0XHRcdC8vIGV2ZW50dWFsbHkgcHJlY2VkZWQgd2l0aCBzb21lIHNwYWNlLCBhbmQgbXVzdCBpbmNsdWRlIEZpbGU6IHByZWZpeFxuXHRcdFx0Ly8gV2lsbCBlYXQgdGhlIHdob2xlIGxpbmUuXG5cdFx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGAoXlxcXFxzKiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccyooPzpcXFxcfC4qPyR8JCkpYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZ2FsbGVyeUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdFx0Ly8gdW5iaW5kIHRoZSBuZXdseSBjcmVhdGVkIGNvbW1lbnRzXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHQvLyBDaGVjayBmcmVlIGltYWdlIHVzYWdlcywgZm9yIGV4YW1wbGUgYXMgdGVtcGxhdGUgYXJndW1lbnRzLCBtaWdodCBoYXZlIHRoZSBGaWxlOiBwcmVmaXggZXhjbHVkZWQsIGJ1dCBtdXN0IGJlIHByZWNlZGVkIGJ5IGFuIHxcblx0XHRcdC8vIFdpbGwgb25seSBlYXQgdGhlIGltYWdlIG5hbWUgYW5kIHRoZSBwcmVjZWRpbmcgYmFyIGFuZCBhbiBldmVudHVhbCBuYW1lZCBwYXJhbWV0ZXJcblx0XHRcdGNvbnN0IGZyZWVJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YChcXFxcfFxcXFxzKig/OltcXFxcd1xcXFxzXStcXFxcPSk/XFxcXHMqKD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqKT8ke2ltYWdlUmVnZXhTdHJpbmd9KWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGZyZWVJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHRcdC8vIFJlYmluZCB0aGUgY29udGVudCBub3csIHdlIGFyZSBkb25lIVxuXHRcdFx0dGhpcy50ZXh0ID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIHVzZXMgb2YgW1tGaWxlOmBpbWFnZWBdXSB0byBbW0ZpbGU6YGltYWdlYHxgZGF0YWBdXS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBGaWxlOiBwcmVmaXguXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGlzcGxheSBvcHRpb25zLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGFkZFRvSW1hZ2VDb21tZW50KGltYWdlLCBkYXRhKSB7XG5cdFx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbExpbmtzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAnW1snLCAnXV0nKTtcblx0XHRcdGZvciAobGV0IHJlcGxhY2VtZW50IG9mIGFsbExpbmtzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QocmVwbGFjZW1lbnQpKSB7XG5cdFx0XHRcdFx0Ly8ganVzdCBwdXQgaXQgYXQgdGhlIGVuZD9cblx0XHRcdFx0XHRyZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcXVxcXSQvLCBgfCR7ZGF0YX1dXWApO1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHJlcGxhY2VtZW50LCByZXBsYWNlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGdhbGxlcnlSZWdleCA9IG5ldyBSZWdFeHAoYF4oXFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfS4qPylcXFxcfD8oLio/KSRgLCAnbWcnKTtcblx0XHRcdGNvbnN0IG5ld3RleHQgPSBgJDF8JDIgJHtkYXRhfWA7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShnYWxsZXJ5UmVnZXgsIG5ld3RleHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYWxsIHRyYW5zY2x1c2lvbnMgb2YgYSB0ZW1wbGF0ZSBmcm9tIHBhZ2UgdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFBhZ2UgbmFtZSB3aG9zZSB0cmFuc2NsdXNpb25zIGFyZSB0byBiZSByZW1vdmVkLFxuXHRcdCAqIGluY2x1ZGUgbmFtZXNwYWNlIHByZWZpeCBvbmx5IGlmIG5vdCBpbiB0ZW1wbGF0ZSBuYW1lc3BhY2UuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0cmVtb3ZlVGVtcGxhdGUodGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KHRlbXBsYXRlKTtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyg/OiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoMTApfTopP1xcXFxzKiR7dGVtcGxhdGVSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcfVxcXFx9KV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsVGVtcGxhdGVzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAne3snLCAnfX0nLCBbJ3t7eycsICd9fX0nXSk7XG5cdFx0XHRmb3IgKGNvbnN0IGFsbFRlbXBsYXRlIG9mIGFsbFRlbXBsYXRlcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KGFsbFRlbXBsYXRlKSkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGFsbFRlbXBsYXRlLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU21hcnRseSBpbnNlcnQgYSB0YWcgYXRvcCBwYWdlIHRleHQgYnV0IGFmdGVyIHNwZWNpZmllZCB0ZW1wbGF0ZXMsXG5cdFx0ICogc3VjaCBhcyBoYXRub3Rlcywgc2hvcnQgZGVzY3JpcHRpb24sIG9yIGRlbGV0aW9uIGFuZCBwcm90ZWN0aW9uIHRlbXBsYXRlcy5cblx0XHQgKiBOb3RhYmx5LCBkb2VzICpub3QqIGluc2VydCBhIG5ld2xpbmUgYWZ0ZXIgdGhlIHRhZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgdGFnIHRvIGJlIGluc2VydGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSByZWdleCAtIFRlbXBsYXRlcyBhZnRlciB3aGljaCB0byBpbnNlcnQgdGFnLFxuXHRcdCAqIGdpdmVuIGFzIGVpdGhlciBhcyBhIChyZWdleC12YWxpZCkgc3RyaW5nIG9yIGFuIGFycmF5IHRvIGJlIGpvaW5lZCBieSBwaXBlcy5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2ZsYWdzPWldIC0gUmVnZXggZmxhZ3MgdG8gYXBwbHkuICBgJydgIHRvIHByb3ZpZGUgbm8gZmxhZ3M7XG5cdFx0ICogb3RoZXIgZmFsc2V5IHZhbHVlcyB3aWxsIGRlZmF1bHQgdG8gYGlgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbcHJlUmVnZXhdIC0gT3B0aW9uYWwgcmVnZXggc3RyaW5nIG9yIGFycmF5IHRvIG1hdGNoXG5cdFx0ICogYmVmb3JlIGFueSB0ZW1wbGF0ZSBtYXRjaGVzIChpLmUuIGJlZm9yZSBge3tgKSwgc3VjaCBhcyBodG1sIGNvbW1lbnRzLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGluc2VydEFmdGVyVGVtcGxhdGVzKHRhZywgcmVnZXgsIGZsYWdzLCBwcmVSZWdleCkge1xuXHRcdFx0aWYgKHRhZyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIHRhZyBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gLmxlbmd0aCBpcyBvbmx5IGEgcHJvcGVydHkgb2Ygc3RyaW5ncyBhbmQgYXJyYXlzIHNvIHdlXG5cdFx0XHQvLyBzaG91bGRuJ3QgbmVlZCB0byBjaGVjayB0eXBlXG5cdFx0XHRpZiAocmVnZXggPT09IHVuZGVmaW5lZCB8fCAhcmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcmVnZXggcHJvdmlkZWQnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZWdleCkpIHtcblx0XHRcdFx0cmVnZXggPSByZWdleC5qb2luKCd8Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGZsYWdzICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmbGFncyA9ICdpJztcblx0XHRcdH1cblx0XHRcdGlmICghcHJlUmVnZXggfHwgIXByZVJlZ2V4Lmxlbmd0aCkge1xuXHRcdFx0XHRwcmVSZWdleCA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHByZVJlZ2V4KSkge1xuXHRcdFx0XHRwcmVSZWdleCA9IHByZVJlZ2V4LmpvaW4oJ3wnKTtcblx0XHRcdH1cblx0XHRcdC8vIFJlZ2V4IGlzIGV4dHJhIGNvbXBsaWNhdGVkIHRvIGFsbG93IGZvciB0ZW1wbGF0ZXMgd2l0aFxuXHRcdFx0Ly8gcGFyYW1ldGVycyBhbmQgdG8gaGFuZGxlIHdoaXRlc3BhY2UgcHJvcGVybHlcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdC8vIGxlYWRpbmcgd2hpdGVzcGFjZVxuXHRcdFx0XHRcdC8vIGNhcHR1cmUgdGVtcGxhdGUocylcblx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0Ly8gYmVnaW4gdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0XHQvLyBlbmQgbWFpbiB0ZW1wbGF0ZSBuYW1lLCBvcHRpb25hbGx5IHdpdGggYSBudW1iZXJcblx0XHRcdFx0XHQvLyBQcm9iYWJseSByZW1vdmUgdGhlICg/OikgdGhvdWdoXG5cdFx0XHRcdFx0Ly8gdGVtcGxhdGUgcGFyYW1ldGVyc1xuXHRcdFx0XHRcdC8vIGVuZCB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0XHQvLyBlbmQgY2FwdHVyZVxuXHRcdFx0XHRcdC8vIHRyYWlsaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHRgXlxcXFxzKig/OigoPzpcXFxccyoke1xuXHRcdFx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHRcdFx0cHJlUmVnZXhcblx0XHRcdFx0XHR9fFxcXFx7XFxcXHtcXFxccyooPzoke1xuXHRcdFx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0XHRcdHJlZ2V4XG5cdFx0XHRcdFx0fSlcXFxcZCpcXFxccyooXFxcXHwoPzpcXFxce1xcXFx7W157fV0qXFxcXH1cXFxcfXxbXnt9XSkqKT9cXFxcfVxcXFx9KSsoPzpcXFxccypcXFxcbik/KVxcXFxzKik/YCxcblx0XHRcdFx0XHRmbGFnc1xuXHRcdFx0XHQpLFxuXHRcdFx0XHRgJDEke3RhZ31gXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIG1hbmlwdWxhdGVkIHdpa2l0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRnZXRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4dDtcblx0XHR9LFxuXHR9O1xuXHQvKiAqKioqKioqKioqKiBNb3JlYml0cy51c2Vyc3BhY2VMb2dnZXIgKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGxvZ2dpbmcgYWN0aW9ucyB0byBhIHVzZXJzcGFjZSBsb2cuXG5cdCAqIFVzZWQgaW4gQ1NELCBQUk9ELCBhbmQgWEZELlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2dQYWdlTmFtZSAtIFRpdGxlIG9mIHRoZSBzdWJwYWdlIG9mIHRoZSBjdXJyZW50IHVzZXIncyBsb2cuXG5cdCAqL1xuXHRNb3JlYml0cy51c2Vyc3BhY2VMb2dnZXIgPSBmdW5jdGlvbiAobG9nUGFnZU5hbWUpIHtcblx0XHRpZiAoIWxvZ1BhZ2VOYW1lKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ25vIGxvZyBwYWdlIG5hbWUgc3BlY2lmaWVkJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFRoZSB0ZXh0IHRvIHByZWZpeCB0aGUgbG9nIHdpdGggdXBvbiBjcmVhdGlvbiwgZGVmYXVsdHMgdG8gZW1wdHkuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuaW5pdGlhbFRleHQgPSAnJztcblx0XHQvKipcblx0XHQgKiBUaGUgaGVhZGVyIGxldmVsIHRvIHVzZSBmb3IgbW9udGhzLCBkZWZhdWx0cyB0byAzIChgPT09YCkuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuaGVhZGVyTGV2ZWwgPSAzO1xuXHRcdHRoaXMuY2hhbmdlVGFncyA9ICcnO1xuXHRcdC8qKlxuXHRcdCAqIExvZyB0aGUgZW50cnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nVGV4dCAtIERvZXNuJ3QgaW5jbHVkZSBsZWFkaW5nIGAjYCBvciBgKmAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN1bW1hcnlUZXh0IC0gRWRpdCBzdW1tYXJ5LlxuXHRcdCAqIEByZXR1cm5zIHtKUXVlcnkuUHJvbWlzZX1cblx0XHQgKi9cblx0XHR0aGlzLmxvZyA9IGZ1bmN0aW9uIChsb2dUZXh0LCBzdW1tYXJ5VGV4dCkge1xuXHRcdFx0Y29uc3QgZGVmID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0aWYgKCFsb2dUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBkZWYucmVqZWN0KCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWdlID0gbmV3IE1vcmViaXRzLndpa2kucGFnZShcblx0XHRcdFx0YFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9LyR7bG9nUGFnZU5hbWV9YCxcblx0XHRcdFx0d2luZG93LndnVUxTKCflsIbpobnnm67liqDlhaXliLDnlKjmiLfnqbrpl7Tml6Xlv5cnLCAn5bCH6aCF55uu5Yqg5YWl5Yiw5L2/55So6ICF56m66ZaT5pel6KqMJylcblx0XHRcdCk7IC8vIG1ha2UgdGhpcyAnLi4uIHRvICcgKyBsb2dQYWdlTmFtZSA/XG5cdFx0XHRwYWdlLmxvYWQoKHBhZ2VvYmopID0+IHtcblx0XHRcdFx0Ly8gYWRkIGJsdXJiIGlmIGxvZyBwYWdlIGRvZXNuJ3QgZXhpc3Qgb3IgaXMgYmxhbmtcblx0XHRcdFx0bGV0IHRleHQgPSBwYWdlb2JqLmdldFBhZ2VUZXh0KCkgfHwgdGhpcy5pbml0aWFsVGV4dDtcblx0XHRcdFx0Ly8gY3JlYXRlIG1vbnRobHkgaGVhZGVyIGlmIGl0IGRvZXNuJ3QgZXhpc3QgYWxyZWFkeVxuXHRcdFx0XHRjb25zdCBkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUocGFnZW9iai5nZXRMb2FkVGltZSgpKTtcblx0XHRcdFx0aWYgKCFkYXRlLm1vbnRoSGVhZGVyUmVnZXgoKS5leGVjKHRleHQpKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuXFxuJHtkYXRlLm1vbnRoSGVhZGVyKHRoaXMuaGVhZGVyTGV2ZWwpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFnZW9iai5zZXRQYWdlVGV4dChgJHt0ZXh0fVxcbiR7bG9nVGV4dH1gKTtcblx0XHRcdFx0cGFnZW9iai5zZXRFZGl0U3VtbWFyeShzdW1tYXJ5VGV4dCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q2hhbmdlVGFncyh0aGlzLmNoYW5nZVRhZ3MpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENyZWF0ZU9wdGlvbigncmVjcmVhdGUnKTtcblx0XHRcdFx0cGFnZW9iai5zYXZlKGRlZi5yZXNvbHZlLCBkZWYucmVqZWN0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGRlZjtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnN0YXR1cyAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW5kIHNob3cgc3RhdHVzIG1lc3NhZ2VzIG9mIHZhcnlpbmcgdXJnZW5jeS5cblx0ICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fE1vcmViaXRzLnN0YXR1cy5pbml0KCl9IG11c3QgYmUgY2FsbGVkIGJlZm9yZVxuXHQgKiBhbnkgc3RhdHVzIG9iamVjdCBpcyBjcmVhdGVkLCBvdGhlcndpc2UgdGhvc2Ugc3RhdHVzZXMgd29uJ3QgYmUgdmlzaWJsZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgYmVmb3JlIHRoZSB0aGUgY29sb24gYDpgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdCAtIFRleHQgYWZ0ZXIgdGhlIGNvbG9uIGA6YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlPXN0YXR1c10gLSBEZXRlcm1pbmUgdGhlIGZvbnQgY29sb3Igb2YgdGhlIHN0YXR1c1xuXHQgKiBsaW5lLCBhbGxvd2FibGUgdmFsdWVzIGFyZTogYHN0YXR1c2AgKGJsdWUpLCBgaW5mb2AgKGdyZWVuKSwgYHdhcm5gIChyZWQpLFxuXHQgKiBvciBgZXJyb3JgIChib2xkIHJlZCkuXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMgPSBmdW5jdGlvbiAodGV4dCwgc3RhdCwgdHlwZSkge1xuXHRcdHRoaXMudGV4dFJhdyA9IHRleHQ7XG5cdFx0dGhpcy50ZXh0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbCh0ZXh0KTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlIHx8ICdzdGF0dXMnO1xuXHRcdHRoaXMuZ2VuZXJhdGUoKTtcblx0XHRpZiAoc3RhdCkge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdCwgdHlwZSk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogU3BlY2lmeSBhbiBhcmVhIGZvciBzdGF0dXMgbWVzc2FnZSBlbGVtZW50cyB0byBiZSBhZGRlZCB0by5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290IC0gVXN1YWxseSBhIGRpdiBlbGVtZW50LlxuXHQgKiBAdGhyb3dzIElmIGByb290YCBpcyBub3QgYW4gYEhUTUxFbGVtZW50YC5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5pbml0ID0gKHJvb3QpID0+IHtcblx0XHRpZiAoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ29iamVjdCBub3QgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudCcpO1xuXHRcdH1cblx0XHR3aGlsZSAocm9vdC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdHJvb3QucmVtb3ZlQ2hpbGQocm9vdC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QgPSByb290O1xuXHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50ID0gbnVsbDtcblx0fTtcblx0TW9yZWJpdHMuc3RhdHVzLnJvb3QgPSBudWxsO1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlcnJvci5cblx0ICogQHRocm93cyBXaGVuIGBoYW5kbGVyYCBpcyBub3QgYSBmdW5jdGlvbi5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5vbkVycm9yID0gKGhhbmRsZXIpID0+IHtcblx0XHRpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50ID0gaGFuZGxlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTW9yZWJpdHMuc3RhdHVzLm9uRXJyb3I6IGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdH07XG5cdE1vcmViaXRzLnN0YXR1cy5wcm90b3R5cGUgPSB7XG5cdFx0c3RhdDogbnVsbCxcblx0XHRzdGF0UmF3OiBudWxsLFxuXHRcdHRleHQ6IG51bGwsXG5cdFx0dGV4dFJhdzogbnVsbCxcblx0XHR0eXBlOiAnc3RhdHVzJyxcblx0XHR0YXJnZXQ6IG51bGwsXG5cdFx0bm9kZTogbnVsbCxcblx0XHRsaW5rZWQ6IGZhbHNlLFxuXHRcdC8qKiBBZGQgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgdG8gdGhlIERPTS4gKi9cblx0XHRsaW5rKCkge1xuXHRcdFx0aWYgKCF0aGlzLmxpbmtlZCAmJiBNb3JlYml0cy5zdGF0dXMucm9vdCkge1xuXHRcdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0XHR0aGlzLmxpbmtlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiogUmVtb3ZlIHRoZSBzdGF0dXMgZWxlbWVudCBub2RlIGZyb20gdGhlIERPTS4gKi9cblx0XHR1bmxpbmsoKSB7XG5cdFx0XHRpZiAodGhpcy5saW5rZWQpIHtcblx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5saW5rZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSB0aGUgc3RhdHVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIFBhcnQgb2Ygc3RhdHVzIG1lc3NhZ2UgYWZ0ZXIgY29sb24uXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSAnc3RhdHVzJyAoYmx1ZSksICdpbmZvJyAoZ3JlZW4pLCAnd2Fybidcblx0XHQgKiAocmVkKSwgb3IgJ2Vycm9yJyAoYm9sZCByZWQpLlxuXHRcdCAqL1xuXHRcdHVwZGF0ZShzdGF0dXMsIHR5cGUpIHtcblx0XHRcdHRoaXMuc3RhdFJhdyA9IHN0YXR1cztcblx0XHRcdHRoaXMuc3RhdCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwoc3RhdHVzKTtcblx0XHRcdGlmICh0eXBlKSB7XG5cdFx0XHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnZXJyb3InKSB7XG5cdFx0XHRcdFx0Ly8gaGFjayB0byBmb3JjZSB0aGUgcGFnZSBub3QgdG8gcmVsb2FkIHdoZW4gYW4gZXJyb3IgaXMgb3V0cHV0IC0gc2VlIGFsc28gTW9yZWJpdHMuc3RhdHVzKCkgYWJvdmVcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPSAxMDAwO1xuXHRcdFx0XHRcdC8vIGNhbGwgZXJyb3IgY2FsbGJhY2tcblx0XHRcdFx0XHRpZiAoTW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQpIHtcblx0XHRcdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFsc28gbG9nIGVycm9yIG1lc3NhZ2VzIGluIHRoZSBicm93c2VyIGNvbnNvbGVcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBbTW9yZWJpdHNdICR7dGhpcy50ZXh0UmF3fTogJHt0aGlzLnN0YXRSYXd9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0fSxcblx0XHQvKiogUHJvZHVjZSB0aGUgaHRtbCBmb3IgZmlyc3QgcGFydCBvZiB0aGUgc3RhdHVzIG1lc3NhZ2UuICovXG5cdFx0Z2VuZXJhdGUoKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XG5cdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnOiAnKSk7XG5cdFx0XHR0aGlzLnRhcmdldCA9IHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdFx0dGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTsgLy8gZHVtbXkgbm9kZVxuXHRcdH0sXG5cblx0XHQvKiogQ29tcGxldGUgdGhlIGh0bWwsIGZvciB0aGUgc2Vjb25kIHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRcdHJlbmRlcigpIHtcblx0XHRcdHRoaXMubm9kZS5jbGFzc05hbWUgPSBgbW9yZWJpdHNfc3RhdHVzXyR7dGhpcy50eXBlfWA7XG5cdFx0XHR3aGlsZSAodGhpcy50YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdHRoaXMudGFyZ2V0LnJlbW92ZUNoaWxkKHRoaXMudGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5zdGF0KTtcblx0XHRcdHRoaXMubGluaygpO1xuXHRcdH0sXG5cdFx0c3RhdHVzKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnc3RhdHVzJyk7XG5cdFx0fSxcblx0XHRpbmZvKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnaW5mbycpO1xuXHRcdH0sXG5cdFx0d2FybihzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3dhcm4nKTtcblx0XHR9LFxuXHRcdGVycm9yKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnZXJyb3InKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgc3RhdHVzYC10eXBlIChibHVlKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLnN0YXR1cyA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgaW5mb2AtdHlwZSAoZ3JlZW4pXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuaW5mbyA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICdpbmZvJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGB3YXJuYC10eXBlIChyZWQpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMud2FybiA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICd3YXJuJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBlcnJvcmAtdHlwZSAoYm9sZCByZWQpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuZXJyb3IgPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnZXJyb3InKTtcblx0fTtcblx0LyoqXG5cdCAqIEZvciB0aGUgYWN0aW9uIGNvbXBsZXRlIG1lc3NhZ2UgYXQgdGhlIGVuZCwgY3JlYXRlIGEgc3RhdHVzIGxpbmUgd2l0aG91dFxuXHQgKiBhIGNvbG9uIHNlcGFyYXRvci5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmFjdGlvbkNvbXBsZXRlZCA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG5cdFx0bm9kZS5jbGFzc05hbWUgPSAnbW9yZWJpdHNfc3RhdHVzX2luZm8gbW9yZWJpdHNfYWN0aW9uX2NvbXBsZXRlJztcblx0XHRpZiAoTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGhlIHVzZXIncyByYXRpb25hbGUsIGNvbW1lbnRzLCBldGMuIEJhY2sgdG8gdGhlbSBhZnRlciBhIGZhaWx1cmUsXG5cdCAqIHNvIHRoYXQgdGhleSBtYXkgcmUtdXNlIGl0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLnByaW50VXNlclRleHQgPSAoY29tbWVudHMsIG1lc3NhZ2UpID0+IHtcblx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHAuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkaXYuY2xhc3NOYW1lID0gJ21vcmViaXRzLXVzZXJ0ZXh0Jztcblx0XHRkaXYuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuXHRcdGRpdi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS13cmFwJztcblx0XHRkaXYudGV4dENvbnRlbnQgPSBjb21tZW50cztcblx0XHRwLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQocCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTaW1wbGUgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNpbXBsZSBub2RlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFR5cGUgb2YgSFRNTCBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIFRleHQgY29udGVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvcl0gLSBGb250IGNvbG9yLlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5odG1sTm9kZSA9ICh0eXBlLCBjb250ZW50LCBjb2xvcikgPT4ge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHRcdGlmIChjb2xvcikge1xuXHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXHRcdH1cblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fTtcblx0LyoqXG5cdCAqIEFkZCBzaGlmdC1jbGljayBzdXBwb3J0IGZvciBjaGVja2JveGVzLiBUaGUgd2lraWJpdHMgdmVyc2lvblxuXHQgKiAoYHdpbmRvdy5hZGRDaGVja2JveENsaWNrSGFuZGxlcnNgKSBoYXMgc29tZSByZXN0cmljdGlvbnMsIGFuZCBkb2Vzbid0IHdvcmtcblx0ICogd2l0aCBjaGVja2JveGVzIGluc2lkZSBhIHNvcnRhYmxlIHRhYmxlLCBzbyBsZXQncyBidWlsZCBvdXIgb3duLlxuXHQgKlxuXHQgKiBAcGFyYW0galF1ZXJ5U2VsZWN0b3Jcblx0ICogQHBhcmFtIGpRdWVyeUNvbnRleHRcblx0ICovXG5cdE1vcmViaXRzLmNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQgPSAoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpID0+IHtcblx0XHRsZXQgbGFzdENoZWNrYm94ID0gbnVsbDtcblx0XHRjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZXZlbnQpIHtcblx0XHRcdGNvbnN0IHRoaXNDYiA9IHRoaXM7XG5cdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkgJiYgbGFzdENoZWNrYm94ICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IGNicyA9ICQoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpOyAvLyBjYW4ndCBjYWNoZSB0aGVtLCBvYnZpb3VzbHksIGlmIHdlIHdhbnQgdG8gc3VwcG9ydCByZXNvcnRpbmdcblx0XHRcdFx0bGV0IGluZGV4ID0gLTE7XG5cdFx0XHRcdGxldCBsYXN0SW5kZXggPSAtMTtcblx0XHRcdFx0bGV0IGk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoY2JzW2ldID09PSB0aGlzQ2IpIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gaTtcblx0XHRcdFx0XHRcdGlmIChsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNic1tpXSA9PT0gbGFzdENoZWNrYm94KSB7XG5cdFx0XHRcdFx0XHRsYXN0SW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpbmRleCA+IC0xICYmIGxhc3RJbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0Ly8gaW5zcGlyZWQgYnkgd2lraWJpdHNcblx0XHRcdFx0XHRjb25zdCBlbmRTdGF0ZSA9IHRoaXNDYi5jaGVja2VkO1xuXHRcdFx0XHRcdGxldCBzdGFydDtcblx0XHRcdFx0XHRsZXQgZmluaXNoO1xuXHRcdFx0XHRcdGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuXHRcdFx0XHRcdFx0c3RhcnQgPSBpbmRleCArIDE7XG5cdFx0XHRcdFx0XHRmaW5pc2ggPSBsYXN0SW5kZXg7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN0YXJ0ID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdFx0ZmluaXNoID0gaW5kZXggLSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGkgPSBzdGFydDsgaSA8PSBmaW5pc2g7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKGNic1tpXS5jaGVja2VkICE9PSBlbmRTdGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRjYnNbaV0uY2xpY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxhc3RDaGVja2JveCA9IHRoaXNDYjtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0JChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCkub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5iYXRjaE9wZXJhdGlvbiAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBJdGVyYXRlcyBvdmVyIGEgZ3JvdXAgb2YgcGFnZXMgKG9yIGFyYml0cmFyeSBvYmplY3RzKSBhbmQgZXhlY3V0ZXMgYSB3b3JrZXIgZnVuY3Rpb25cblx0ICogZm9yIGVhY2guXG5cdCAqXG5cdCAqIGBzZXRQYWdlTGlzdChwYWdlTGlzdClgOiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uIEl0IHNob3VsZCBiZSBhblxuXHQgKiBhcnJheSBvZiBwYWdlIG5hbWVzIHN0cmluZ3MuXG5cdCAqXG5cdCAqIGBzZXRPcHRpb24ob3B0aW9uTmFtZSwgb3B0aW9uVmFsdWUpYDogU2V0cyBhIGtub3duIG9wdGlvbjpcblx0ICogLSBgY2h1bmtTaXplYCAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50byAoZGVmYXVsdFxuXHQgKiA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHQgKiAtIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2AgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1cyBlbGVtZW50XG5cdCAqIHZpc2libGUgd2hlbiB3b3JrZXIgaXMgY29tcGxldGU/IFNlZSBub3RlIGJlbG93LlxuXHQgKlxuXHQgKiBgcnVuKHdvcmtlciwgcG9zdEZpbmlzaClgOiBSdW5zIHRoZSBjYWxsYmFjayBgd29ya2VyYCBmb3IgZWFjaCBwYWdlIGluIHRoZVxuXHQgKiBsaXN0LiAgVGhlIGNhbGxiYWNrIG11c3QgY2FsbCBgd29ya2VyU3VjY2Vzc2Agd2hlbiBzdWNjZWVkaW5nLCBvclxuXHQgKiBgd29ya2VyRmFpbHVyZWAgd2hlbiBmYWlsaW5nLiAgSWYgdXNpbmcge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBvclxuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSwgdGhpcyBpcyBlYXNpbHkgZG9uZSBieSBwYXNzaW5nIHRoZXNlIHR3b1xuXHQgKiBmdW5jdGlvbnMgYXMgcGFyYW1ldGVycyB0byB0aGUgbWV0aG9kcyBvbiB0aG9zZSBvYmplY3RzOiBmb3IgaW5zdGFuY2UsXG5cdCAqIGBwYWdlLnNhdmUoYmF0Y2hPcC53b3JrZXJTdWNjZXNzLCBiYXRjaE9wLndvcmtlckZhaWx1cmUpYC4gIE1ha2Ugc3VyZSB0aGVcblx0ICogbWV0aG9kcyBhcmUgY2FsbGVkIGRpcmVjdGx5IGlmIHNwZWNpYWwgc3VjY2Vzcy9mYWlsdXJlIGNhc2VzIGFyaXNlLiAgSWYgeW91XG5cdCAqIG9taXQgdG8gY2FsbCB0aGVzZSBtZXRob2RzLCB0aGUgYmF0Y2ggb3BlcmF0aW9uIHdpbGwgc3RhbGwgYWZ0ZXIgdGhlIGZpcnN0XG5cdCAqIGNodW5rISAgQWxzbyBlbnN1cmUgdGhhdCBlaXRoZXIgd29ya2VyU3VjY2VzcyBvciB3b3JrZXJGYWlsdXJlIGlzIGNhbGxlZCBub1xuXHQgKiBtb3JlIHRoYW4gb25jZS4gIFRoZSBzZWNvbmQgY2FsbGJhY2sgYHBvc3RGaW5pc2hgIGlzIGV4ZWN1dGVkIHdoZW4gdGhlXG5cdCAqIGVudGlyZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWQuXG5cdCAqXG5cdCAqIElmIHVzaW5nIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2AsIHlvdSBzaG91bGQgdHJ5IHRvIGVuc3VyZSB0aGF0IHRoZVxuXHQgKiBgd29ya2VyU3VjY2Vzc2AgY2FsbGJhY2sgaGFzIGFjY2VzcyB0byB0aGUgcGFnZSB0aXRsZS4gIFRoaXMgaXMgbm8gcHJvYmxlbSBmb3Jcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gb2JqZWN0cy4gIEJ1dCB3aGVuIHVzaW5nIHRoZSBBUEksIHBsZWFzZSBzZXQgdGhlXG5cdCAqIHxwYWdlTmFtZXwgcHJvcGVydHkgb24gdGhlIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb2JqZWN0LlxuXHQgKlxuXHQgKiBUaGVyZSBhcmUgc2FtcGxlIGJhdGNoT3BlcmF0aW9uIGltcGxlbWVudGF0aW9ucyB1c2luZyBNb3JlYml0cy53aWtpLnBhZ2UgaW5cblx0ICogdHdpbmtsZWJhdGNoZGVsZXRlLmpzLCB0d2lua2xlYmF0Y2h1bmRlbGV0ZS5qcywgYW5kIHR3aW5rbGViYXRjaHByb3RlY3QuanMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjdXJyZW50QWN0aW9uXVxuXHQgKi9cblx0TW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbikge1xuXHRcdGNvbnN0IGN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZUxpc3Q6IG51bGwsXG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdGNodW5rU2l6ZTogNTAsXG5cdFx0XHRcdHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzOiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHQvLyBpbnRlcm5hbCBjb3VudGVycywgZXRjLlxuXHRcdFx0c3RhdHVzRWxlbWVudDogbmV3IE1vcmViaXRzLnN0YXR1cyhjdXJyZW50QWN0aW9uIHx8IHdpbmRvdy53Z1VMUygn5omn6KGM5om56YeP5pON5L2cJywgJ+Wft+ihjOaJueasoeaTjeS9nCcpKSxcblx0XHRcdHdvcmtlcjogbnVsbCxcblx0XHRcdC8vIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgZm9yIGVhY2ggaXRlbSBpbiBwYWdlTGlzdFxuXHRcdFx0cG9zdEZpbmlzaDogbnVsbCxcblx0XHRcdC8vIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkXG5cdFx0XHRjb3VudFN0YXJ0ZWQ6IDAsXG5cdFx0XHRjb3VudEZpbmlzaGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZFN1Y2Nlc3M6IDAsXG5cdFx0XHRjdXJyZW50Q2h1bmtJbmRleDogLTEsXG5cdFx0XHRwYWdlQ2h1bmtzOiBbXSxcblx0XHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdH07XG5cdFx0Ly8gc2hvdWxkbid0IGJlIG5lZWRlZCBieSBleHRlcm5hbCB1c2VycywgYnV0IHByb3ZpZGVkIGFueXdheSBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eVxuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHBhZ2VMaXN0IC0gQXJyYXkgb2Ygb2JqZWN0cyBvdmVyIHdoaWNoIHlvdSB3aXNoIHRvIGV4ZWN1dGUgdGhlIHdvcmtlciBmdW5jdGlvblxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUgbGlzdCBvZiBwYWdlIG5hbWVzIChzdHJpbmdzKS5cblx0XHQgKi9cblx0XHR0aGlzLnNldFBhZ2VMaXN0ID0gKHBhZ2VMaXN0KSA9PiB7XG5cdFx0XHRjdHgucGFnZUxpc3QgPSBwYWdlTGlzdDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldHMgYSBrbm93biBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSAtIE5hbWUgb2YgdGhlIG9wdGlvbjpcblx0XHQgKiAtIGNodW5rU2l6ZSAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50b1xuXHRcdCAqIChkZWZhdWx0IDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG5cdFx0ICogLSBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzXG5cdFx0ICogZWxlbWVudCB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlP1xuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfGJvb2xlYW59IG9wdGlvblZhbHVlIC0gVmFsdWUgdG8gd2hpY2ggdGhlIG9wdGlvbiBpc1xuXHRcdCAqIHRvIGJlIHNldC4gU2hvdWxkIGJlIGFuIGludGVnZXIgZm9yIGNodW5rU2l6ZSBhbmQgYSBib29sZWFuIGZvclxuXHRcdCAqIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0T3B0aW9uID0gKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKSA9PiB7XG5cdFx0XHRjdHgub3B0aW9uc1tvcHRpb25OYW1lXSA9IG9wdGlvblZhbHVlO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUnVucyB0aGUgZmlyc3QgY2FsbGJhY2sgZm9yIGVhY2ggcGFnZSBpbiB0aGUgbGlzdC5cblx0XHQgKiBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIHdvcmtlclN1Y2Nlc3Mgd2hlbiBzdWNjZWVkaW5nLCBvciB3b3JrZXJGYWlsdXJlIHdoZW4gZmFpbGluZy5cblx0XHQgKiBSdW5zIHRoZSBvcHRpb25hbCBzZWNvbmQgY2FsbGJhY2sgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gd29ya2VyXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW3Bvc3RGaW5pc2hdXG5cdFx0ICovXG5cdFx0dGhpcy5ydW4gPSAod29ya2VyLCBwb3N0RmluaXNoKSA9PiB7XG5cdFx0XHRpZiAoY3R4LnJ1bm5pbmcpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmibnph4/mk43kvZzlt7LlnKjov5DooYwnLCAn5om55qyh5pON5L2c5bey5Zyo5Z+36KGMJykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgucnVubmluZyA9IHRydWU7XG5cdFx0XHRjdHgud29ya2VyID0gd29ya2VyO1xuXHRcdFx0Y3R4LnBvc3RGaW5pc2ggPSBwb3N0RmluaXNoO1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCA9IDA7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZCA9IDA7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MgPSAwO1xuXHRcdFx0Y3R4LmN1cnJlbnRDaHVua0luZGV4ID0gLTE7XG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgdG90YWwgPSBjdHgucGFnZUxpc3QubGVuZ3RoO1xuXHRcdFx0aWYgKCF0b3RhbCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5rKh5pyJ5oyH5a6a6aG16Z2iJywgJ+aykuacieaMh+WumumggemdoicpKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdFx0aWYgKGN0eC5wb3N0RmluaXNoKSB7XG5cdFx0XHRcdFx0Y3R4LnBvc3RGaW5pc2goKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBjaHVuayBwYWdlIGxpc3QgaW50byBtb3JlIG1hbmFnZWFibGUgdW5pdHNcblx0XHRcdGN0eC5wYWdlQ2h1bmtzID0gTW9yZWJpdHMuYXJyYXkuY2h1bmsoY3R4LnBhZ2VMaXN0LCBjdHgub3B0aW9ucy5jaHVua1NpemUpO1xuXHRcdFx0Ly8gc3RhcnQgdGhlIHByb2Nlc3Ncblx0XHRcdE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpO1xuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKCcwJScpO1xuXHRcdFx0Zm5TdGFydE5ld0NodW5rKCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBUbyBiZSBjYWxsZWQgYnkgd29ya2VyIGJlZm9yZSBpdCB0ZXJtaW5hdGVzIHN1Y2Nlc3NmdWxseS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KE1vcmViaXRzLndpa2kucGFnZXxNb3JlYml0cy53aWtpLmFwaXxzdHJpbmcpfSBhcmcgLVxuXHRcdCAqIFRoaXMgc2hvdWxkIGJlIHRoZSBgTW9yZWJpdHMud2lraS5wYWdlYCBvciBgTW9yZWJpdHMud2lraS5hcGlgIG9iamVjdCB1c2VkIGJ5IHdvcmtlclxuXHRcdCAqIChmb3IgdGhlIGFkanVzdG1lbnQgb2Ygc3RhdHVzIGxpbmVzIGVtaXR0ZWQgYnkgdGhlbSkuXG5cdFx0ICogSWYgbm8gTW9yZWJpdHMud2lraS4qIG9iamVjdCBpcyB1c2VkIChlLmcuIHlvdSdyZSB1c2luZyBgbXcuQXBpKClgIG9yIHNvbWV0aGluZyBlbHNlKSwgYW5kXG5cdFx0ICogYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCBvcHRpb24gaXMgb24sIGdpdmUgdGhlIHBhZ2UgbmFtZSAoc3RyaW5nKSBhcyBhcmd1bWVudC5cblx0XHQgKi9cblx0XHR0aGlzLndvcmtlclN1Y2Nlc3MgPSAoYXJnKSA9PiB7XG5cdFx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTW9yZWJpdHMud2lraS5hcGkgfHwgYXJnIGluc3RhbmNlb2YgTW9yZWJpdHMud2lraS5wYWdlKSB7XG5cdFx0XHRcdC8vIHVwZGF0ZSBvciByZW1vdmUgc3RhdHVzIGxpbmVcblx0XHRcdFx0Y29uc3Qgc3RhdGVsZW0gPSBhcmcuZ2V0U3RhdHVzRWxlbWVudCgpO1xuXHRcdFx0XHRpZiAoY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmdldFBhZ2VOYW1lIHx8IGFyZy5wYWdlTmFtZSB8fCAoYXJnLnF1ZXJ5ICYmIGFyZy5xdWVyeS50aXRsZSkpIHtcblx0XHRcdFx0XHRcdC8vIHdlIGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBkaXNwbGF5IGEgcmVsZXZhbnQgbWVzc2FnZVxuXHRcdFx0XHRcdFx0Y29uc3QgcGFnZU5hbWUgPSBhcmcuZ2V0UGFnZU5hbWUgPyBhcmcuZ2V0UGFnZU5hbWUoKSA6IGFyZy5wYWdlTmFtZSB8fCBhcmcucXVlcnkudGl0bGU7XG5cdFx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKGDlrozmiJDvvIhbWyR7cGFnZU5hbWV9XV3vvIlgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gd2UgZG9uJ3Qga25vdyB0aGUgcGFnZSB0aXRsZSAtIGp1c3QgZGlzcGxheSBhIGdlbmVyaWMgbWVzc2FnZVxuXHRcdFx0XHRcdFx0c3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgc3RhdHVzIGxpbmUgYXV0b21hdGljYWxseSBwcm9kdWNlZCBieSBNb3JlYml0cy53aWtpLipcblx0XHRcdFx0XHRzdGF0ZWxlbS51bmxpbmsoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBjdHgub3B0aW9ucy5wcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcykge1xuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKGFyZywgYOWujOaIkO+8iFtbJHthcmd9XV3vvIlgKTtcblx0XHRcdH1cblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcysrO1xuXHRcdFx0Zm5Eb25lT25lKCk7XG5cdFx0fTtcblx0XHR0aGlzLndvcmtlckZhaWx1cmUgPSAoKSA9PiB7XG5cdFx0XHRmbkRvbmVPbmUoKTtcblx0XHR9O1xuXHRcdC8vIHByaXZhdGUgZnVuY3Rpb25zXG5cdFx0Y29uc3QgdGhpc1Byb3h5ID0gdGhpcztcblx0XHRjb25zdCBmblN0YXJ0TmV3Q2h1bmsgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjaHVuayA9IGN0eC5wYWdlQ2h1bmtzWysrY3R4LmN1cnJlbnRDaHVua0luZGV4XTtcblx0XHRcdGlmICghY2h1bmspIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBkb25lISB5YXlcblx0XHRcdH1cblx0XHRcdC8vIHN0YXJ0IHdvcmtlcnMgZm9yIHRoZSBjdXJyZW50IGNodW5rXG5cdFx0XHRjdHguY291bnRTdGFydGVkICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBjaHVuaykge1xuXHRcdFx0XHRjdHgud29ya2VyKHBhZ2UsIHRoaXNQcm94eSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkRvbmVPbmUgPSAoKSA9PiB7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZCsrO1xuXHRcdFx0Ly8gdXBkYXRlIG92ZXJhbGwgc3RhdHVzIGxpbmVcblx0XHRcdGNvbnN0IHRvdGFsID0gY3R4LnBhZ2VMaXN0Lmxlbmd0aDtcblx0XHRcdGlmIChjdHguY291bnRGaW5pc2hlZCA8IHRvdGFsKSB7XG5cdFx0XHRcdGNvbnN0IHByb2dyZXNzID0gTWF0aC5yb3VuZCgoMTAwICogY3R4LmNvdW50RmluaXNoZWQpIC8gdG90YWwpO1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5zdGF0dXMoYCR7cHJvZ3Jlc3N9JWApO1xuXHRcdFx0XHQvLyBzdGFydCBhIG5ldyBjaHVuayBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8gdGhlIGVuZCBvZiB0aGUgcHJldmlvdXMgY2h1bmssIGFuZFxuXHRcdFx0XHQvLyB3ZSBoYXZlbid0IGFscmVhZHkgc3RhcnRlZCB0aGUgbmV4dCBvbmVcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGN0eC5jb3VudEZpbmlzaGVkID49IGN0eC5jb3VudFN0YXJ0ZWQgLSBNYXRoLm1heChjdHgub3B0aW9ucy5jaHVua1NpemUgLyAxMCwgMikgJiZcblx0XHRcdFx0XHRNYXRoLmZsb29yKGN0eC5jb3VudEZpbmlzaGVkIC8gY3R4Lm9wdGlvbnMuY2h1bmtTaXplKSA+IGN0eC5jdXJyZW50Q2h1bmtJbmRleFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmblN0YXJ0TmV3Q2h1bmsoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjdHguY291bnRGaW5pc2hlZCA9PT0gdG90YWwpIHtcblx0XHRcdFx0Y29uc3Qgc3RhdHVzU3RyaW5nID0gYOWujOaIkO+8iCR7Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzfS8ke2N0eC5jb3VudEZpbmlzaGVkfeaTjeS9nOaIkOWKn+WujOaIkO+8iWA7XG5cdFx0XHRcdGlmIChjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MgPCBjdHguY291bnRGaW5pc2hlZCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50Lndhcm4oc3RhdHVzU3RyaW5nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHN0YXR1c1N0cmluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGN0eC5wb3N0RmluaXNoKSB7XG5cdFx0XHRcdFx0Y3R4LnBvc3RGaW5pc2goKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGN0eC5jb3VudEZpbmlzaGVkID4gdG90YWxcblx0XHRcdFx0Ly8ganVzdCBmb3IgZ2lnZ2xlcyEgKHdlbGwsIHNlcmlvdXMgZGVidWdnaW5nLCBhY3R1YWxseSlcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQud2Fybihcblx0XHRcdFx0XHRgJHt3aW5kb3cud2dVTFMoJ+WujOaIkO+8iOWkmuaJp+ihjOS6hicsICflrozmiJDvvIjlpJrln7fooYzkuoYnKSArIChjdHguY291bnRGaW5pc2hlZCAtIHRvdGFsKX3mrKHvvIlgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBkcmFnZ2FibGUgd2luZG93LCBub3cgYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkncyBkaWFsb2cgZmVhdHVyZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnVpLmRpYWxvZ1xuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBtYXhpbXVtIGFsbG93YWJsZSBoZWlnaHQgZm9yIHRoZSBjb250ZW50IGFyZWEuXG5cdCAqL1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdGNvbnRlbnQuY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1jb250ZW50Jztcblx0XHRjb250ZW50LmlkID0gYG1vcmViaXRzLWRpYWxvZy1jb250ZW50LSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNSl9YDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKHtcblx0XHRcdGF1dG9PcGVuOiBmYWxzZSxcblx0XHRcdGJ1dHRvbnM6IHtcblx0XHRcdFx0J1BsYWNlaG9sZGVyIGJ1dHRvbic6ICgpID0+IHt9LFxuXHRcdFx0fSxcblx0XHRcdGRpYWxvZ0NsYXNzOiAnbW9yZWJpdHMtZGlhbG9nJyxcblx0XHRcdHdpZHRoOiBNYXRoLm1pbihOdW1iZXIucGFyc2VJbnQod2luZG93LmlubmVyV2lkdGgsIDEwKSwgTnVtYmVyLnBhcnNlSW50KHdpZHRoIHx8IDgwMCwgMTApKSxcblx0XHRcdC8vIGdpdmUgalF1ZXJ5IHRoZSBnaXZlbiBoZWlnaHQgdmFsdWUgKHdoaWNoIHJlcHJlc2VudHMgdGhlIGFudGljaXBhdGVkIGhlaWdodCBvZiB0aGUgZGlhbG9nKSBoZXJlLCBzb1xuXHRcdFx0Ly8gaXQgY2FuIHBvc2l0aW9uIHRoZSBkaWFsb2cgYXBwcm9wcmlhdGVseVxuXHRcdFx0Ly8gdGhlIDIwIHBpeGVscyByZXByZXNlbnRzIGFkanVzdG1lbnQgZm9yIHRoZSBleHRyYSBoZWlnaHQgb2YgdGhlIGpRdWVyeSBkaWFsb2cgXCJjaHJvbWVcIiwgY29tcGFyZWRcblx0XHRcdC8vIHRvIHRoYXQgb2YgdGhlIG9sZCBTaW1wbGVXaW5kb3dcblx0XHRcdGhlaWdodDogaGVpZ2h0ICsgMjAsXG5cdFx0XHRjbG9zZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdC8vIGRpYWxvZ3MgYW5kIHRoZWlyIGNvbnRlbnQgY2FuIGJlIGRlc3Ryb3llZCBvbmNlIGNsb3NlZFxuXHRcdFx0XHQkKGV2ZW50LnRhcmdldCkuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplU3RhcnQoKSB7XG5cdFx0XHRcdFt0aGlzLnNjcm9sbGJveF0gPSAkKHRoaXMpLmZpbmQoJy5tb3JlYml0cy1zY3JvbGxib3gnKTtcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYm94KSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxib3guc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplU3RvcCgpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxib3ggPSBudWxsO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZSgpIHtcblx0XHRcdFx0dGhpcy5zdHlsZS5tYXhIZWlnaHQgPSAnJztcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYm94KSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxib3guc3R5bGUud2lkdGggPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0Ly8gZGVsZXRlIHRoZSBwbGFjZWhvbGRlciBidXR0b24gKGl0J3Mgb25seSB0aGVyZSBzbyB0aGUgYnV0dG9ucGFuZSBnZXRzIGNyZWF0ZWQpXG5cdFx0JHdpZGdldC5maW5kKCdidXR0b24nKS5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHR2YWx1ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZhbHVlKTtcblx0XHR9KTtcblx0XHQvLyBhZGQgY29udGFpbmVyIGZvciB0aGUgYnV0dG9ucyB3ZSBhZGQsIGFuZCB0aGUgZm9vdGVyIGxpbmtzIChpZiBhbnkpXG5cdFx0Y29uc3QgYnV0dG9uc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRidXR0b25zcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctYnV0dG9ucyc7XG5cdFx0Y29uc3QgbGlua3NzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmtzc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJztcblx0XHQkd2lkZ2V0LmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZScpLmFwcGVuZChidXR0b25zcGFuLCBsaW5rc3NwYW4pO1xuXHRcdC8vIHJlc2l6ZSB0aGUgc2Nyb2xsYm94IHdpdGggdGhlIGRpYWxvZywgaWYgb25lIGlzIHByZXNlbnRcblx0XHQkd2lkZ2V0LnJlc2l6YWJsZSgnb3B0aW9uJywgJ2Fsc29SZXNpemUnLCBgIyR7dGhpcy5jb250ZW50LmlkfSAubW9yZWJpdHMtc2Nyb2xsYm94LCAjJHt0aGlzLmNvbnRlbnQuaWR9YCk7XG5cdH07XG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdy5wcm90b3R5cGUgPSB7XG5cdFx0YnV0dG9uczogW10sXG5cdFx0aGVpZ2h0OiA2MDAsXG5cdFx0aGFzRm9vdGVyTGlua3M6IGZhbHNlLFxuXHRcdHNjcmlwdE5hbWU6IG51bGwsXG5cdFx0LyoqXG5cdFx0ICogRm9jdXNlcyB0aGUgZGlhbG9nLiBUaGlzIG1pZ2h0IHdvcmssIG9yIG9uIHRoZSBjb250cmFyeSwgaXQgbWlnaHQgbm90LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRmb2N1cygpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ21vdmVUb1RvcCcpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDbG9zZXMgdGhlIGRpYWxvZy4gSWYgdGhpcyBpcyBzZXQgYXMgYW4gZXZlbnQgaGFuZGxlciwgaXQgd2lsbCBzdG9wIHRoZSBldmVudFxuXHRcdCAqIGZyb20gZG9pbmcgYW55dGhpbmcgbW9yZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZXZlbnR9IFtldmVudF1cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGNsb3NlKGV2ZW50KSB7XG5cdFx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNob3dzIHRoZSBkaWFsb2cuIENhbGxpbmcgZGlzcGxheSgpIG9uIGEgZGlhbG9nIHRoYXQgaGFzIHByZXZpb3VzbHkgYmVlbiBjbG9zZWRcblx0XHQgKiBtaWdodCB3b3JrLCBidXQgaXQgaXMgbm90IGd1YXJhbnRlZWQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGRpc3BsYXkoKSB7XG5cdFx0XHRpZiAodGhpcy5zY3JpcHROYW1lKSB7XG5cdFx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKTtcblx0XHRcdFx0JHdpZGdldC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2NyaXB0bmFtZXNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdHNjcmlwdG5hbWVzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctc2NyaXB0bmFtZSc7XG5cdFx0XHRcdHNjcmlwdG5hbWVzcGFuLnRleHRDb250ZW50ID0gYCR7dGhpcy5zY3JpcHROYW1lfSBcXHUwMEI3IGA7IC8vIFUrMDBCNyBNSURETEUgRE9UID0gJm1pZGRvdDtcblx0XHRcdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLXRpdGxlJykucHJlcGVuZChzY3JpcHRuYW1lc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBkaWFsb2cgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcGVuJyk7XG5cdFx0XHRpZiAod2luZG93LnNldHVwVG9vbHRpcHMgJiYgd2luZG93LnBnICYmIHdpbmRvdy5wZy5yZSAmJiB3aW5kb3cucGcucmUuZGlmZikge1xuXHRcdFx0XHQvLyB0aWUgaW4gd2l0aCBOQVZQT1Bcblx0XHRcdFx0ZGlhbG9nLnBhcmVudCgpWzBdLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gZmFsc2U7XG5cdFx0XHRcdHdpbmRvdy5zZXR1cFRvb2x0aXBzKGRpYWxvZy5wYXJlbnQoKVswXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldEhlaWdodCh0aGlzLmhlaWdodCk7IC8vIGluaXQgaGVpZ2h0IGFsZ29yaXRobVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cgdGl0bGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFRpdGxlKHRpdGxlKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCB0aXRsZSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIHNjcmlwdCBuYW1lLCBhcHBlYXJpbmcgYXMgYSBwcmVmaXggdG8gdGhlIHRpdGxlIHRvIGhlbHAgdXNlcnMgZGV0ZXJtaW5lIHdoaWNoXG5cdFx0ICogdXNlciBzY3JpcHQgaXMgcHJvZHVjaW5nIHdoaWNoIGRpYWxvZy4gRm9yIGluc3RhbmNlLCBUd2lua2xlIG1vZHVsZXMgc2V0IHRoaXMgdG8gXCJUd2lua2xlXCIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0U2NyaXB0TmFtZShuYW1lKSB7XG5cdFx0XHR0aGlzLnNjcmlwdE5hbWUgPSBuYW1lO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cgd2lkdGguXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFdpZHRoKHdpZHRoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnd2lkdGgnLCB3aWR0aCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZydzIG1heGltdW0gaGVpZ2h0LiBUaGUgZGlhbG9nIHdpbGwgYXV0by1zaXplIHRvIGZpdCBpdHMgY29udGVudHMsXG5cdFx0ICogYnV0IHRoZSBjb250ZW50IGFyZWEgd2lsbCBncm93IG5vIGxhcmdlciB0aGFuIHRoZSBoZWlnaHQgZ2l2ZW4gaGVyZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldEhlaWdodChoZWlnaHQpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdFx0Ly8gZnJvbSBkaXNwbGF5IHRpbWUgb253YXJkcywgbGV0IHRoZSBicm93c2VyIGRldGVybWluZSB0aGUgb3B0aW11bSBoZWlnaHQsXG5cdFx0XHQvLyBhbmQgaW5zdGVhZCBsaW1pdCB0aGUgaGVpZ2h0IGF0IHRoZSBnaXZlbiB2YWx1ZVxuXHRcdFx0Ly8gbm90ZSB0aGF0IHRoZSBnaXZlbiBoZWlnaHQgd2lsbCBleGNsdWRlIHRoZSBhcHByb3guIDIwcHggdGhhdCB0aGUgalF1ZXJ5IFVJXG5cdFx0XHQvLyBjaHJvbWUgaGFzIGluIGhlaWdodCBpbiBhZGRpdGlvbiB0byB0aGUgaGVpZ2h0IG9mIGFuIGVxdWl2YWxlbnQgXCJjbGFzc2ljXCJcblx0XHRcdC8vIE1vcmViaXRzLnNpbXBsZVdpbmRvd1xuXHRcdFx0aWYgKFxuXHRcdFx0XHROdW1iZXIucGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSgkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKVswXSwgbnVsbCkuaGVpZ2h0LCAxMCkgPlxuXHRcdFx0XHR3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCdvcHRpb24nLCAnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0IC0gMilcblx0XHRcdFx0XHQuZGlhbG9nKCdvcHRpb24nLCAncG9zaXRpb24nLCAndG9wJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnaGVpZ2h0JywgJ2F1dG8nKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctY29udGVudCcpWzBdLnN0eWxlLm1heEhlaWdodCA9IGAke051bWJlci5wYXJzZUludChcblx0XHRcdFx0dGhpcy5oZWlnaHQgLSAzMCxcblx0XHRcdFx0MTBcblx0XHRcdCl9cHhgO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGVsZW1lbnQgbm9kZSwgdXN1YWxseSBmcm9tIHJlbmRlcmluZ1xuXHRcdCAqIGEge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0uXG5cdFx0ICogUmUtZW51bWVyYXRlcyB0aGUgZm9vdGVyIGJ1dHRvbnMsIGJ1dCBsZWF2ZXMgdGhlIGZvb3RlciBsaW5rcyBhcyB0aGV5IGFyZS5cblx0XHQgKiBCZSBzdXJlIHRvIGNhbGwgdGhpcyBhdCBsZWFzdCBvbmNlIGJlZm9yZSB0aGUgZGlhbG9nIGlzIGRpc3BsYXllZC4uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0Q29udGVudChjb250ZW50KSB7XG5cdFx0XHR0aGlzLnB1cmdlQ29udGVudCgpO1xuXHRcdFx0dGhpcy5hZGRDb250ZW50KGNvbnRlbnQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUgdG8gdGhlIGRpYWxvZyBjb250ZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0YWRkQ29udGVudChjb250ZW50KSB7XG5cdFx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cdFx0XHQvLyBsb29rIGZvciBzdWJtaXQgYnV0dG9ucyBpbiB0aGUgY29udGVudCwgaGlkZSB0aGVtLCBhbmQgYWRkIGEgcHJveHkgYnV0dG9uIHRvIHRoZSBidXR0b24gcGFuZVxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJylcblx0XHRcdFx0LmVhY2goKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdFx0XHR2YWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlLnRleHRDb250ZW50KSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS50ZXh0Q29udGVudDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gJ+aPkOS6pCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc05hbWUgPSB2YWx1ZS5jbGFzc05hbWUgfHwgJ3N1Ym1pdEJ1dHRvblByb3h5Jztcblx0XHRcdFx0XHQvLyBoZXJlIGlzIGFuIGluc3RhbmNlIG9mIGNoZWFwIGNvZGluZywgcHJvYmFibHkgYSBtZW1vcnktdXNhZ2UgaGl0IGluIHVzaW5nIGEgY2xvc3VyZSBoZXJlXG5cdFx0XHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzZWxmLmJ1dHRvbnNbc2VsZi5idXR0b25zLmxlbmd0aF0gPSBidXR0b247XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly8gcmVtb3ZlIGFsbCBidXR0b25zIGZyb20gdGhlIGJ1dHRvbiBwYW5lIGFuZCByZS1hZGQgdGhlbVxuXHRcdFx0aWYgKHRoaXMuYnV0dG9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ3dpZGdldCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpXG5cdFx0XHRcdFx0LmVtcHR5KClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuYnV0dG9ucylbMF1cblx0XHRcdFx0XHQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWVtcHR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVswXVxuXHRcdFx0XHRcdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknLCAnZGF0YS1lbXB0eScpOyAvLyB1c2VkIGJ5IENTU1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgYWxsIGNvbnRlbnRzIGZyb20gdGhlIGRpYWxvZywgYmFycmluZyBhbnkgZm9vdGVyIGxpbmtzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRwdXJnZUNvbnRlbnQoKSB7XG5cdFx0XHR0aGlzLmJ1dHRvbnMgPSBbXTtcblx0XHRcdC8vIGRlbGV0ZSBhbGwgYnV0dG9ucyBpbiB0aGUgYnV0dG9ucGFuZVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJykuZW1wdHkoKTtcblx0XHRcdHdoaWxlICh0aGlzLmNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdHRoaXMuY29udGVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBsaW5rIGluIHRoZSBib3R0b20tcmlnaHQgY29ybmVyIG9mIHRoZSBkaWFsb2cuXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGhlbHAgb3IgcG9saWN5IGxpbmtzLlxuXHRcdCAqIEZvciBleGFtcGxlLCBUd2lua2xlJ3MgQ1NEIG1vZHVsZSBhZGRzIGEgbGluayB0byB0aGUgQ1NEIHBvbGljeSBwYWdlLFxuXHRcdCAqIGFzIHdlbGwgYXMgYSBsaW5rIHRvIFR3aW5rbGUncyBkb2N1bWVudGF0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBEaXNwbGF5IHRleHQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2lQYWdlIC0gTGluayB0YXJnZXQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcHJlcD1mYWxzZV0gLSBTZXQgdHJ1ZSB0byBwcmVwZW5kIHJhdGhlciB0aGFuIGFwcGVuZC5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZEZvb3RlckxpbmsodGV4dCwgd2lraVBhZ2UsIHByZXApIHtcblx0XHRcdGNvbnN0ICRmb290ZXJsaW5rcyA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctZm9vdGVybGlua3MnKTtcblx0XHRcdGlmICh0aGlzLmhhc0Zvb3RlckxpbmtzKSB7XG5cdFx0XHRcdGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0YnVsbGV0LnRleHRDb250ZW50ID0gJyBcXHUyMDIyICc7IC8vIFUrMjAyMiBCVUxMRVRcblx0XHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MucHJlcGVuZChidWxsZXQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRmb290ZXJsaW5rcy5hcHBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbXcudXRpbC5nZXRVcmwod2lraVBhZ2UpKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsIHdpa2lQYWdlKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHRcdGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQobGluayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5oYXNGb290ZXJMaW5rcyA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgd2hldGhlciB0aGUgd2luZG93IHNob3VsZCBiZSBtb2RhbCBvciBub3QuIE1vZGFsIGRpYWxvZ3MgY3JlYXRlXG5cdFx0ICogYW4gb3ZlcmxheSBiZWxvdyB0aGUgZGlhbG9nIGJ1dCBhYm92ZSBvdGhlciBwYWdlIGVsZW1lbnRzLiBUaGlzXG5cdFx0ICogbXVzdCBiZSB1c2VkIChpZiBuZWNlc3NhcnkpIGJlZm9yZSBjYWxsaW5nIGRpc3BsYXkoKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW21vZGFsPWZhbHNlXSAtIElmIHNldCB0byB0cnVlLCBvdGhlciBpdGVtcyBvbiB0aGVcblx0XHQgKiBwYWdlIHdpbGwgYmUgZGlzYWJsZWQsIGkuZS4sIGNhbm5vdCBiZSBpbnRlcmFjdGVkIHdpdGguXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRNb2RhbGl0eShtb2RhbCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ21vZGFsJywgbW9kYWwpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgYWxsIGZvb3RlciBidXR0b25zIG9uIGFsbCB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fXMgaW4gdGhlIGN1cnJlbnQgcGFnZS5cblx0ICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIHdpdGggYGZhbHNlYCB3aGVuIHRoZSBidXR0b24ocykgYmVjb21lIGlycmVsZXZhbnQgKGUuZy4ganVzdCBiZWZvcmVcblx0ICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fSBpcyBjYWxsZWQpLlxuXHQgKiBUaGlzIGlzIG5vdCBhbiBpbnN0YW5jZSBtZXRob2Qgc28gdGhhdCBjb25zdW1lcnMgZG9uJ3QgaGF2ZSB0byBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZVxuXHQgKiBvcmlnaW5hbCBgTW9yZWJpdHMuc2ltcGxlV2luZG93YCBvYmplY3Qgc2l0dGluZyBhcm91bmQgc29tZXdoZXJlLiBBbnl3YXksIG1vc3Qgb2YgdGhlIHRpbWVcblx0ICogdGhlcmUgd2lsbCBvbmx5IGJlIG9uZSBgTW9yZWJpdHMuc2ltcGxlV2luZG93YCBvcGVuLCBzbyB0aGlzIHNob3VsZG4ndCBtYXR0ZXIuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0ICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXG5cdCAqL1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cuc2V0QnV0dG9uc0VuYWJsZWQgPSAoZW5hYmxlZCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucyBidXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsICFlbmFibGVkKTtcblx0fTtcbn0pKGpRdWVyeSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0EsSUFBQUEsb0JBQTRCQyxRQUFBLGlCQUFBO0FBckM1QjtDQXVDQyxTQUFTQyxTQUFTQyxHQUFHO0FBR3JCLFFBQU1DLFdBQVcsQ0FBQztBQUNsQkMsU0FBT0QsV0FBV0E7QUFLbEJBLFdBQVNFLE9BQU87Ozs7O0lBS2ZDLG9CQUFvQixDQUFDLGFBQWEsTUFBTTs7Ozs7Ozs7OztJQVV4Q0MsMEJBQTJCQyxTQUFRO0FBQ2xDLFlBQU1DLFNBQVM7QUFDZixZQUFNQyxTQUFTO0FBQ2YsWUFBTUMsUUFBUUYsT0FBT0csS0FBS0osR0FBRyxLQUFLRSxPQUFPRSxLQUFLSixHQUFHO0FBQ2pELFlBQU1LLFdBQVdILE9BQU9FLEtBQUtKLEdBQUc7QUFDaEMsVUFBSSxDQUFDRyxPQUFPO0FBQ1gsZUFBTztNQUNSO0FBQ0EsWUFBTUcsUUFBUVgsU0FBU1ksS0FBS0MsV0FBV0MsT0FBT0MsUUFBUVAsTUFBTSxDQUFDLENBQUM7QUFDOUQsVUFBSUcsVUFBVSxJQUFJO0FBQ2pCLGVBQU87TUFDUjtBQUVBLGFBQU9ELFdBQ0osQ0FBQ0YsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxJQUFJLEdBQUdBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsSUFBSSxHQUFHQSxNQUFNLENBQUMsQ0FBQyxJQUN6RCxDQUFDQSxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLElBQUksR0FBR0EsTUFB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LGNBQWM7QUFDckIsWUFBSWd2QixNQUFNO0FBQ1RDLHVCQUFhcFUsUUFBUXFVLE1BQU07UUFDNUIsT0FBTztBQUNORCx1QkFBYTcyQixPQUFPODJCLE1BQU07UUFDM0I7TUFDRDtBQUNBLFlBQU1wTyxPQUFPbnRCLFNBQVMwRixjQUFjLEdBQUc7QUFDdkN5bkIsV0FBS3ZuQixhQUFhLFFBQVF4RyxHQUFHNEQsS0FBS0MsT0FBT200QixRQUFRLENBQUM7QUFDbERqTyxXQUFLdm5CLGFBQWEsU0FBU3cxQixRQUFRO0FBQ25Dak8sV0FBS3ZuQixhQUFhLFVBQVUsUUFBUTtBQUNwQ3VuQixXQUFLdm5CLGFBQWEsT0FBTyxxQkFBcUI7QUFDOUN1bkIsV0FBSzlnQixjQUFjN0o7QUFDbkIsVUFBSTY0QixNQUFNO0FBQ1RDLHFCQUFhcFUsUUFBUWlHLElBQUk7TUFDMUIsT0FBTztBQUNObU8scUJBQWE3MkIsT0FBTzBvQixJQUFJO01BQ3pCO0FBQ0EsV0FBSzZNLGlCQUFpQjtBQUN0QixhQUFPO0lBQ1I7Ozs7Ozs7Ozs7SUFVQXdCLFlBQVlDLE9BQU87QUFDbEJ4OUIsUUFBRSxLQUFLMkUsT0FBTyxFQUFFbTJCLE9BQU8sVUFBVSxTQUFTMEMsS0FBSztBQUMvQyxhQUFPO0lBQ1I7RUFDRDtBQVlBdjlCLFdBQVMwNkIsYUFBYThDLG9CQUFxQkMsYUFBWTtBQUN0RCxVQUFNNTdCLFFBQVE5QixFQUFFLE1BQU07QUFDdEI4QixVQUFNRyxLQUFLLGlDQUFpQyxFQUFFOGUsS0FBSyxZQUFZLENBQUMyYyxPQUFPO0VBQ3hFO0FBQ0QsR0FBR0MsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtb3JlYml0cyIsICIkIiwgIk1vcmViaXRzIiwgIndpbmRvdyIsICJsMTBuIiwgInJlZGlyZWN0VGFnQWxpYXNlcyIsICJzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQiLCAic3RyIiwgInJneFVUQyIsICJyZ3hDU1QiLCAibWF0Y2giLCAiZXhlYyIsICJtYXRjaENTVCIsICJtb250aCIsICJkYXRlIiwgImxvY2FsZURhdGEiLCAibW9udGhzIiwgImluZGV4T2YiLCAidXNlcklzSW5Hcm91cCIsICJncm91cCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInVzZXJJc1N5c29wIiwgInNhbml0aXplSVB2NiIsICJhZGRyZXNzIiwgImNvbnNvbGUiLCAid2FybiIsICJpcCIsICJpc1BhZ2VSZWRpcmVjdCIsICIkYm9keSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImZpbmQiLCAibGVuZ3RoIiwgInBhZ2VOYW1lTm9ybSIsICJyZXBsYWNlIiwgInBhZ2VOYW1lUmVnZXgiLCAicGFnZU5hbWUiLCAiZmlyc3RDaGFyIiwgInJlbWFpbmRlciIsICJzdHJpbmciLCAiZXNjYXBlUmVnRXhwIiwgInNsaWNlIiwgIlRpdGxlIiwgInBocENoYXJUb1VwcGVyIiwgInRvTG93ZXJDYXNlIiwgImNvbmNhdCIsICJjcmVhdGVIdG1sIiwgImlucHV0IiwgImZyYWdtZW50IiwgImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJOb2RlIiwgImFwcGVuZENoaWxkIiwgIl9pdGVyYXRvcjIiLCAicGFyc2VIVE1MIiwgInJlbmRlcldpa2lsaW5rcyIsICJfc3RlcDIiLCAibm9kZSIsICJlcnIiLCAiZSIsICJmIiwgInRleHQiLCAidWIiLCAidW5iaW5kZXIiLCAidW5iaW5kIiwgImNvbnRlbnQiLCAiXyIsICJ0YXJnZXQiLCAidGV4dF8iLCAidXRpbCIsICJnZXRVcmwiLCAicmViaW5kIiwgIm5hbWVzcGFjZVJlZ2V4IiwgIm5hbWVzcGFjZXMiLCAiYWxpYXNlcyIsICJyZWdleCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibmFtZSIsICJudW1iZXIiLCAibWFwIiwgImNoYXIiLCAiam9pbiIsICJxdWlja0Zvcm0iLCAiZXZlbnQiLCAiZXZlbnRUeXBlIiwgInJvb3QiLCAidHlwZSIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgInJldCIsICJuYW1lcyIsICJhcHBlbmQiLCAiZGF0YSIsICJjaGlsZHMiLCAiaWQiLCAiY2hpbGQiLCAiaW50ZXJuYWxTdWJncm91cElkIiwgImN1cnJlbnROb2RlIiwgImNvbXB1dGUiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiaW5JZCIsICJjaGlsZENvbnRhaW5lciIsICJsYWJlbCIsICJhZG1pbm9ubHkiLCAiaSIsICJjdXJyZW50IiwgInN1Ym5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic2V0QXR0cmlidXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic2VsZWN0IiwgIm11bHRpcGxlIiwgInNpemUiLCAiZGlzYWJsZWQiLCAibGlzdCIsICJ2YWx1ZXMiLCAic2VsZWN0ZWQiLCAiaGlkZGVuIiwgImNyZWF0ZVRleHROb2RlIiwgImN1cklkIiwgImN1ckRpdiIsICJ0b29sdGlwIiwgImdlbmVyYXRlVG9vbHRpcCIsICJjaGVja2VkIiwgInN0eWxlIiwgInN1Ymdyb3VwIiwgInRtcGdyb3VwIiwgInN1Ymdyb3VwUmF3IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsIiwgIm5ld0VsIiwgInNob3duIiwgInBhcmVudE5vZGUiLCAiZm9ybSIsICJyZW1vdmVDaGlsZCIsICJzaGlmdENsaWNrU3VwcG9ydCIsICJjaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0IiwgImdldEVsZW1lbnRzIiwgInBsYWNlaG9sZGVyIiwgIl9pMiIsICJfYXJyIiwgImF0dCIsICJfaTMiLCAiX2FycjIiLCAiX2k0IiwgIl9hcnIzIiwgIm1pbiIsICJtYXgiLCAiTnVtYmVyIiwgIlBPU0lUSVZFX0lORklOSVRZIiwgImxpc3ROb2RlIiwgIm1vcmUiLCAibmV3Tm9kZSIsICJzdWJsaXN0IiwgImFyZWEiLCAiY291bnRlciIsICJzdG9wUHJvcGFnYXRpb24iLCAibW9yZUJ1dHRvbiIsICJzdWJsYWJlbCIsICJyZW1vdmUiLCAibWF4bGVuZ3RoIiwgImVsZW0iLCAibW9yZWJ1dHRvbiIsICJsaXN0bm9kZSIsICJub2RlXyIsICJpbnB1dG5vZGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInJlbW92ZUJ1dHRvbiIsICJyZXN1bHQiLCAibGFiZWxFbGVtZW50IiwgImNvbHMiLCAicm93cyIsICJyZXF1aXJlZCIsICJyZWFkb25seSIsICJFcnJvciIsICJ0b1N0cmluZyIsICJleHRyYSIsICIkZGF0YSIsICJ0b29sdGlwQnV0dG9uIiwgInRpdGxlIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgImNvbGxpc2lvbiIsICJ0b29sdGlwQ2xhc3MiLCAiZ2V0SW5wdXREYXRhIiwgIl9pdGVyYXRvcjUiLCAiZWxlbWVudHMiLCAiX3N0ZXA1IiwgImZpZWxkIiwgImZpZWxkTmFtZU5vcm0iLCAiZGF0YXNldCIsICJzaW5nbGUiLCAidmFsIiwgInRyaW0iLCAiZmllbGROYW1lIiwgIiRmb3JtIiwgImVzY2FwZVNlbGVjdG9yIiwgIiRlbGVtZW50cyIsICJ0b0FycmF5IiwgImdldENoZWNrYm94T3JSYWRpbyIsICJlbGVtZW50QXJyYXkiLCAiZm91bmQiLCAiZmlsdGVyIiwgImdldEVsZW1lbnRDb250YWluZXIiLCAiSFRNTEZpZWxkU2V0RWxlbWVudCIsICJIVE1MRGl2RWxlbWVudCIsICJIVE1MSGVhZGluZ0VsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsT2JqZWN0IiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsIiwgImZpcnN0Q2hpbGQiLCAidGV4dENvbnRlbnQiLCAic2V0RWxlbWVudExhYmVsIiwgImxhYmVsVGV4dCIsICJvdmVycmlkZUVsZW1lbnRMYWJlbCIsICJ0ZW1wb3JhcnlMYWJlbFRleHQiLCAiaGFzQXR0cmlidXRlIiwgInJlc2V0RWxlbWVudExhYmVsIiwgImdldEF0dHJpYnV0ZSIsICJzZXRFbGVtZW50VmlzaWJpbGl0eSIsICJ2aXNpYmlsaXR5IiwgInRvZ2dsZSIsICJzZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkiLCAiSFRNTEZvcm1FbGVtZW50IiwgImdldENoZWNrZWQiLCAicmV0dXJuQXJyYXkiLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAib3B0aW9ucyIsICJIVE1MSW5wdXRFbGVtZW50IiwgImdldFVuY2hlY2tlZCIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgImFiYnJldlBvcyIsICJDSURSU3RhcnQiLCAiYWRkcmVzc0VuZCIsICJyZXBlYXQiLCAicGFkIiwgInJlcGxhY2VtZW50IiwgInNwbGl0IiwgImlzUmFuZ2UiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJBcnJheSIsICJpc0FycmF5IiwgIlR5cGVFcnJvciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJwYXR0ZXJuIiwgImlzSW5maW5pdHkiLCAiZXhwaXJ5IiwgImZvcm1hdFRpbWUiLCAidGltZSIsICJtIiwgIndnVUxTIiwgImFwcGVuZFB1bmN0dWF0aW9uIiwgInB1bmN0dWF0aW9uIiwgInNlYXJjaCIsICJhcnJheSIsICJ1bmlxIiwgImFyciIsICJpdGVtIiwgImlkeCIsICJkdXBzIiwgImNodW5rIiwgIm51bUNodW5rcyIsICJNYXRoIiwgImNlaWwiLCAiZnJvbSIsICJzZWxlY3QyIiwgIm1hdGNoZXJzIiwgIm9wdGdyb3VwRnVsbCIsICJwYXJhbXMiLCAib3JpZ2luYWxNYXRjaGVyIiwgImZuIiwgImRlZmF1bHRzIiwgIm1hdGNoZXIiLCAidGVybSIsICJjaGlsZHJlbiIsICJ3b3JkQmVnaW5uaW5nIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImhpZ2hsaWdodFNlYXJjaE1hdGNoZXMiLCAic2VhcmNoVGVybSIsICJzZWxlY3QyU2VhcmNoUXVlcnkiLCAibG9hZGluZyIsICJjc3MiLCAicXVlcnlJbnRlcmNlcHRvciIsICJhdXRvU3RhcnQiLCAiZXYiLCAid2hpY2giLCAiY2xvc2VzdCIsICJwcmV2IiwgImRyb3Bkb3duIiwgIiRzZWFyY2giLCAic2VsZWN0aW9uIiwgImZvY3VzIiwgImhpc3RvcnkiLCAicHJlZml4IiwgInJhbmRvbSIsICJwb3N0Zml4IiwgInJlIiwgImdldENhbGxiYWNrIiwgImhhc093biIsICJzZWxmIiwgImFyZ3MiLCAicGFyYW0iLCAiZGlnaXRNYXRjaCIsICJfZCIsICJEYXRlIiwgIlJlZmxlY3QiLCAiYXBwbHkiLCAiVVRDIiwgImRhdGVQYXJ0cyIsICJGdW5jdGlvbiIsICJiaW5kIiwgImlzVmFsaWQiLCAibG9nIiwgIm1vbnRoc1Nob3J0IiwgImRheXMiLCAiZGF5c1Nob3J0IiwgInJlbGF0aXZlVGltZXMiLCAidGhpc0RheSIsICJwcmV2RGF5IiwgIm5leHREYXkiLCAidGhpc1dlZWsiLCAicGFzdFdlZWsiLCAib3RoZXIiLCAidW5pdE1hcCIsICJzZWNvbmRzIiwgIm1pbnV0ZXMiLCAiaG91cnMiLCAid2Vla3MiLCAieWVhcnMiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJpc0JlZm9yZSIsICJpc0FmdGVyIiwgImdldFVUQ01vbnRoTmFtZSIsICJnZXRVVENNb250aCIsICJnZXRVVENNb250aE5hbWVBYmJyZXYiLCAiZ2V0TW9udGhOYW1lIiwgImdldE1vbnRoIiwgImdldE1vbnRoTmFtZUFiYnJldiIsICJnZXRVVENEYXlOYW1lIiwgImdldFVUQ0RheSIsICJnZXRVVENEYXlOYW1lQWJicmV2IiwgImdldERheU5hbWUiLCAiZ2V0RGF5IiwgImdldERheU5hbWVBYmJyZXYiLCAiYWRkIiwgInVuaXQiLCAibnVtIiwgInVuaXROb3JtIiwgImtleXMiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgImZvcm1hdHN0ciIsICJ6b25lIiwgInVkYXRlIiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInRvSVNPU3RyaW5nIiwgImxlbiIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiY2FsZW5kYXIiLCAiZGF0ZURpZmYiLCAic2V0SG91cnMiLCAibW9udGhIZWFkZXJSZWdleCIsICJnZXRVVENGdWxsWWVhciIsICJtb250aEhlYWRlciIsICJoZWFkZXIiLCAiX2l0ZXJhdG9yNyIsICJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwgIl9zdGVwNyIsICJmdW5jIiwgIndpa2kiLCAibnVtYmVyT2ZBY3Rpb25zTGVmdCIsICJuYnJPZkNoZWNrcG9pbnRzTGVmdCIsICJhY3Rpb25Db21wbGV0ZWQiLCAibm90aWNlIiwgInN0YXR1cyIsICJyZWRpcmVjdCIsICJmb2xsb3dSZWRpcmVjdCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInRpbWVPdXQiLCAid3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0IiwgImFkZENoZWNrcG9pbnQiLCAicmVtb3ZlQ2hlY2twb2ludCIsICJhcGkiLCAiY3VycmVudEFjdGlvbiIsICJxdWVyeSIsICJvblN1Y2Nlc3MiLCAic3RhdHVzRWxlbWVudCIsICJvbkVycm9yIiwgIl90aGlzJHF1ZXJ5IiwgImFzc2VydCIsICJlcnJvcmZvcm1hdCIsICJ1c2VsYW5nIiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJzZXRTdGF0dXNFbGVtZW50IiwgInN0YXRlbGVtIiwgImZvcm1hdHZlcnNpb24iLCAiZXJyb3IiLCAiYWN0aW9uIiwgInRhZ3MiLCAibW9yZWJpdHNXaWtpQ2hhbmdlVGFnIiwgInBhcmVudCIsICJyZXNwb25zZSIsICJyZXNwb25zZVhNTCIsICJzdGF0dXNUZXh0IiwgImVycm9yQ29kZSIsICJlcnJvclRleHQiLCAiYmFkdG9rZW5SZXRyeSIsICJzZXRQYXJlbnQiLCAicG9zdCIsICJjYWxsZXJBamF4UGFyYW1ldGVycyIsICJxdWVyeVN0cmluZ0FyciIsICJfaTUiLCAiX09iamVjdCRlbnRyaWVzMiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicXVlcnlTdHJpbmciLCAiYWpheHBhcmFtcyIsICJjb250ZXh0IiwgInVybCIsICJ3aWtpU2NyaXB0IiwgImRhdGFUeXBlIiwgImhlYWRlcnMiLCAibW9yZWJpdHNXaWtpQXBpVXNlckFnZW50IiwgImFqYXgiLCAidGhlbiIsICJvbkFQSXN1Y2Nlc3MiLCAiZXJyb3JzIiwgImNvZGUiLCAiaHRtbCIsICJlcSIsICJhdHRyIiwgInJldHVybkVycm9yIiwgImNhbGwiLCAiaW5mbyIsICJEZWZlcnJlZCIsICJyZXNvbHZlV2l0aCIsICJvbkFQSWZhaWx1cmUiLCAiZXJyb3JUaHJvd24iLCAiZ2V0VG9rZW4iLCAidG9rZW4iLCAicmVqZWN0V2l0aCIsICJnZXRTdGF0dXNFbGVtZW50IiwgImdldEVycm9yQ29kZSIsICJnZXRFcnJvclRleHQiLCAiZ2V0WE1MIiwgImdldFJlc3BvbnNlIiwgImdldENhY2hlZEpzb24iLCAicHJvcCIsICJ0aXRsZXMiLCAicnZzbG90cyIsICJydnByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiYXBpb2JqIiwgInVubGluayIsICJ3aWtpdGV4dCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJKU09OIiwgInBhcnNlIiwgInNldEFwaVVzZXJBZ2VudCIsICJ1YSIsICJ0b2tlbkFwaSIsICJtZXRhIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZSIsICJjdHgiLCAicGFnZUV4aXN0cyIsICJlZGl0U3VtbWFyeSIsICJjaGFuZ2VUYWdzIiwgInRlc3RBY3Rpb25zIiwgImNhbGxiYWNrUGFyYW1ldGVycyIsICJwYWdlVGV4dCIsICJlZGl0TW9kZSIsICJhcHBlbmRUZXh0IiwgInByZXBlbmRUZXh0IiwgIm5ld1NlY3Rpb25UZXh0IiwgIm5ld1NlY3Rpb25UaXRsZSIsICJjcmVhdGVPcHRpb24iLCAibWlub3JFZGl0IiwgImJvdEVkaXQiLCAicGFnZVNlY3Rpb24iLCAibWF4Q29uZmxpY3RSZXRyaWVzIiwgIm1heFJldHJpZXMiLCAiZm9sbG93Q3Jvc3NOc1JlZGlyZWN0IiwgIndhdGNobGlzdE9wdGlvbiIsICJ3YXRjaGxpc3RFeHBpcnkiLCAiY3JlYXRvciIsICJ0aW1lc3RhbXAiLCAicmV2ZXJ0T2xkSUQiLCAibW92ZURlc3RpbmF0aW9uIiwgIm1vdmVUYWxrUGFnZSIsICJtb3ZlU3VicGFnZXMiLCAibW92ZVN1cHByZXNzUmVkaXJlY3QiLCAicHJvdGVjdEVkaXQiLCAicHJvdGVjdE1vdmUiLCAicHJvdGVjdENyZWF0ZSIsICJwcm90ZWN0Q2FzY2FkZSIsICJsb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicGFnZUxvYWRlZCIsICJjc3JmVG9rZW4iLCAibG9hZFRpbWUiLCAibGFzdEVkaXRUaW1lIiwgInBhZ2VJRCIsICJjb250ZW50TW9kZWwiLCAicmV2ZXJ0Q3VySUQiLCAicmV2ZXJ0VXNlciIsICJ3YXRjaGVkIiwgImZ1bGx5UHJvdGVjdGVkIiwgInN1cHByZXNzUHJvdGVjdFdhcm5pbmciLCAiY29uZmxpY3RSZXRyaWVzIiwgInJldHJpZXMiLCAib25Mb2FkU3VjY2VzcyIsICJvbkxvYWRGYWlsdXJlIiwgIm9uU2F2ZVN1Y2Nlc3MiLCAib25TYXZlRmFpbHVyZSIsICJvbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJvbkxvb2t1cENyZWF0aW9uRmFpbHVyZSIsICJvbk1vdmVTdWNjZXNzIiwgIm9uTW92ZUZhaWx1cmUiLCAib25EZWxldGVTdWNjZXNzIiwgIm9uRGVsZXRlRmFpbHVyZSIsICJvblVuZGVsZXRlU3VjY2VzcyIsICJvblVuZGVsZXRlRmFpbHVyZSIsICJvblByb3RlY3RTdWNjZXNzIiwgIm9uUHJvdGVjdEZhaWx1cmUiLCAibG9hZFF1ZXJ5IiwgImxvYWRBcGkiLCAic2F2ZUFwaSIsICJsb29rdXBDcmVhdGlvbkFwaSIsICJtb3ZlQXBpIiwgIm1vdmVQcm9jZXNzQXBpIiwgInBhdHJvbEFwaSIsICJwYXRyb2xQcm9jZXNzQXBpIiwgImRlbGV0ZUFwaSIsICJkZWxldGVQcm9jZXNzQXBpIiwgInVuZGVsZXRlQXBpIiwgInVuZGVsZXRlUHJvY2Vzc0FwaSIsICJwcm90ZWN0QXBpIiwgInByb3RlY3RQcm9jZXNzQXBpIiwgImVtcHR5RnVuY3Rpb24iLCAibG9hZCIsICJvbkZhaWx1cmUiLCAiaW5wcm9wIiwgImludGVzdGFjdGlvbnMiLCAiY3VydGltZXN0YW1wIiwgInJ2bGltaXQiLCAicnZzdGFydGlkIiwgInJlZGlyZWN0cyIsICJydnNlY3Rpb24iLCAiZm5Mb2FkU3VjY2VzcyIsICJzYXZlIiwgImNhblVzZU13VXNlclRva2VuIiwgImZuQ2FuVXNlTXdVc2VyVG9rZW4iLCAiY29uZmlybSIsICJzdW1tYXJ5IiwgInVzZXIiLCAid2F0Y2hsaXN0IiwgImZuQXBwbHlXYXRjaGxpc3RFeHBpcnkiLCAid2F0Y2hsaXN0ZXhwaXJ5IiwgInNlY3Rpb24iLCAibWlub3IiLCAibm90bWlub3IiLCAiYm90IiwgImFwcGVuZHRleHQiLCAicHJlcGVuZHRleHQiLCAic2VjdGlvbnRpdGxlIiwgInVuZG8iLCAidW5kb2FmdGVyIiwgImJhc2V0aW1lc3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZm5TYXZlU3VjY2VzcyIsICJmblNhdmVFcnJvciIsICJmbkF1dG9TYXZlIiwgInByZXBlbmQiLCAibmV3U2VjdGlvbiIsICJnZXRQYWdlTmFtZSIsICJnZXRQYWdlVGV4dCIsICJzZXRQYWdlVGV4dCIsICJzZXRBcHBlbmRUZXh0IiwgInNldFByZXBlbmRUZXh0IiwgInNldE5ld1NlY3Rpb25UZXh0IiwgInNldE5ld1NlY3Rpb25UaXRsZSIsICJzZXRFZGl0U3VtbWFyeSIsICJzZXRDaGFuZ2VUYWdzIiwgInNldENyZWF0ZU9wdGlvbiIsICJzZXRNaW5vckVkaXQiLCAic2V0Qm90RWRpdCIsICJzZXRQYWdlU2VjdGlvbiIsICJzZXRNYXhDb25mbGljdFJldHJpZXMiLCAic2V0TWF4UmV0cmllcyIsICJzZXRXYXRjaGxpc3QiLCAic2V0V2F0Y2hsaXN0RXhwaXJ5IiwgInNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyIsICJzZXRGb2xsb3dSZWRpcmVjdCIsICJzZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAiZmxhZyIsICJzZXRNb3ZlRGVzdGluYXRpb24iLCAiZGVzdGluYXRpb24iLCAic2V0TW92ZVRhbGtQYWdlIiwgInNldE1vdmVTdWJwYWdlcyIsICJzZXRNb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJzZXRFZGl0UHJvdGVjdGlvbiIsICJzZXRNb3ZlUHJvdGVjdGlvbiIsICJzZXRDcmVhdGVQcm90ZWN0aW9uIiwgInNldENhc2NhZGluZ1Byb3RlY3Rpb24iLCAic2V0T2xkSUQiLCAib2xkSUQiLCAiZ2V0Q3VycmVudElEIiwgImdldFJldmlzaW9uVXNlciIsICJnZXRMYXN0RWRpdFRpbWUiLCAic2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImdldENhbGxiYWNrUGFyYW1ldGVycyIsICJleGlzdHMiLCAiZ2V0UGFnZUlEIiwgImdldENvbnRlbnRNb2RlbCIsICJnZXRXYXRjaGVkIiwgImdldExvYWRUaW1lIiwgImdldENyZWF0b3IiLCAiZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCAiY2FuRWRpdCIsICJsb29rdXBDcmVhdGlvbiIsICJydmRpciIsICJmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJyZXZlcnQiLCAibW92ZSIsICJmblByZWZsaWdodENoZWNrcyIsICJmblByb2Nlc3NNb3ZlIiwgImZuTmVlZFRva2VuSW5mb1F1ZXJ5IiwgInBhdHJvbCIsICJwYXRyb2xocmVmIiwgInJjaWQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJmblByb2Nlc3NQYXRyb2wiLCAicGF0cm9sUXVlcnkiLCAicmNwcm9wIiwgInJjdGl0bGUiLCAicmNsaW1pdCIsICJkZWxldGVQYWdlIiwgImZuUHJvY2Vzc0RlbGV0ZSIsICJ1bmRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzVW5kZWxldGUiLCAicHJvdGVjdCIsICJmblByb2Nlc3NQcm90ZWN0IiwgImdldFByZWZpeGVkVGV4dCIsICJlZGl0UmVzdHJpY3Rpb24iLCAicGFnZW9iaiIsICJmbkNoZWNrUGFnZU5hbWUiLCAicmV2IiwgIm1pc3NpbmciLCAicGFnZWlkIiwgImNvbnRlbnRtb2RlbCIsICJlZGl0UHJvdCIsICJwcm90ZWN0aW9uIiwgInByIiwgInBvcCIsICJsYXN0cmV2aWQiLCAidGVzdGFjdGlvbnMiLCAiYWN0aW9ucyIsICJfaTYiLCAiX09iamVjdCRrZXlzIiwgInJldmlkIiwgInVzZXJoaWRkZW4iLCAiaW52YWxpZCIsICJyZXNvbHZlZE5hbWUiLCAib3JpZ05zIiwgIm5hbWVzcGFjZSIsICJuZXdOcyIsICJuZXdFeHBpcnkiLCAicmVsIiwgImVkaXQiLCAibGluayIsICJjYXB0Y2hhIiwgInB1cmdlUXVlcnkiLCAicHVyZ2VBcGkiLCAic2xlZXAiLCAiZXJyb3JEYXRhIiwgImFidXNlZmlsdGVyIiwgImRlc2NyaXB0aW9uIiwgInNwYW0iLCAic3BhbWJsYWNrbGlzdCIsICJtYXRjaGVzIiwgImlzVGV4dFJlZGlyZWN0IiwgInNvbWUiLCAidGFnIiwgImZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgInJldnMiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiZm5Qcm9jZXNzQ2hlY2tzIiwgImFjdGlvbk1pc3NpbmciLCAicHJvdGVjdE1pc3NpbmciLCAic2FsdE1pc3NpbmciLCAiZWRpdHByb3QiLCAicGFnZVRpdGxlIiwgInRvIiwgIm1vdmV0YWxrIiwgIm1vdmVzdWJwYWdlcyIsICJub3JlZGlyZWN0IiwgInJlY2VudGNoYW5nZXMiLCAidW5wYXRyb2xsZWQiLCAicGF0cm9sU3RhdCIsICJmblByb2Nlc3NEZWxldGVFcnJvciIsICJmblByb2Nlc3NVbmRlbGV0ZUVycm9yIiwgInBycyIsICJtb3ZlcHJvdCIsICJjcmVhdGVwcm90IiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgInNvdXJjZSIsICJjYXNjYWRlIiwgInByb3RlY3Rpb25zIiwgImV4cGlyeXMiLCAibWlsbGlzZWNvbmRzIiwgImRlZmVycmVkIiwgInJlc29sdmUiLCAicHJldmlldyIsICJwcmV2aWV3Ym94IiwgImFkZENsYXNzIiwgImhpZGUiLCAiYmVnaW5SZW5kZXIiLCAic2VjdGlvblRpdGxlIiwgInNob3ciLCAic3RhdHVzc3BhbiIsICJpbml0IiwgInBzdCIsICJkaXNhYmxlbGltaXRyZXBvcnQiLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgInJlbmRlckFwaSIsICJmblJlbmRlclN1Y2Nlc3MiLCAiaW5uZXJIVE1MIiwgImxvYWRlciIsICJtb2R1bGVzdHlsZXMiLCAibW9kdWxlcyIsICJjbG9zZVByZXZpZXciLCAiZW1wdHkiLCAicGFyc2VUZW1wbGF0ZSIsICJjb3VudCIsICJ1bm5hbWVkIiwgImVxdWFscyIsICJwYXJhbWV0ZXJzIiwgImtleSIsICJmaW5kUGFyYW0iLCAiZmluYWwiLCAidGVzdDMiLCAidGVzdDIiLCAiY2hhckF0IiwgInJlbW92ZUxpbmsiLCAibGlua1RhcmdldCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm5hbWVzcGFjZUlEIiwgImdldE5hbWVzcGFjZUlkIiwgImdldE1haW5UZXh0IiwgImxpbmtSZWdleFN0cmluZyIsICJpc0ZpbGVPckNhdGVnb3J5IiwgImNvbG9uIiwgInNpbXBsZUxpbmtSZWdleCIsICJwaXBlZExpbmtSZWdleCIsICJjb21tZW50T3V0SW1hZ2UiLCAiaW1hZ2UiLCAiaW1hZ2VSZWdleFN0cmluZyIsICJsaW5rc1JlZ2V4IiwgImFsbExpbmtzIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAiYWxsTGluayIsICJnYWxsZXJ5SW1hZ2VSZWdleCIsICJmcmVlSW1hZ2VSZWdleCIsICJhZGRUb0ltYWdlQ29tbWVudCIsICJfaXRlcmF0b3IxMSIsICJfc3RlcDExIiwgImdhbGxlcnlSZWdleCIsICJuZXd0ZXh0IiwgInJlbW92ZVRlbXBsYXRlIiwgInRlbXBsYXRlIiwgInRlbXBsYXRlUmVnZXhTdHJpbmciLCAiYWxsVGVtcGxhdGVzIiwgIl9pdGVyYXRvcjEyIiwgIl9zdGVwMTIiLCAiYWxsVGVtcGxhdGUiLCAiaW5zZXJ0QWZ0ZXJUZW1wbGF0ZXMiLCAiZmxhZ3MiLCAicHJlUmVnZXgiLCAiZ2V0VGV4dCIsICJ1c2Vyc3BhY2VMb2dnZXIiLCAibG9nUGFnZU5hbWUiLCAiaW5pdGlhbFRleHQiLCAiaGVhZGVyTGV2ZWwiLCAibG9nVGV4dCIsICJzdW1tYXJ5VGV4dCIsICJkZWYiLCAicmVqZWN0IiwgInN0YXQiLCAidGV4dFJhdyIsICJnZW5lcmF0ZSIsICJ1cGRhdGUiLCAiRWxlbWVudCIsICJoYXNDaGlsZE5vZGVzIiwgImVycm9yRXZlbnQiLCAiaGFuZGxlciIsICJzdGF0UmF3IiwgImxpbmtlZCIsICJwcmludFVzZXJUZXh0IiwgImNvbW1lbnRzIiwgIm1lc3NhZ2UiLCAicCIsICJkaXYiLCAibWFyZ2luVG9wIiwgIndoaXRlU3BhY2UiLCAiaHRtbE5vZGUiLCAiY29sb3IiLCAialF1ZXJ5U2VsZWN0b3IiLCAialF1ZXJ5Q29udGV4dCIsICJsYXN0Q2hlY2tib3giLCAiY2xpY2tIYW5kbGVyIiwgImNsaWNrSGFuZGxlcjIiLCAidGhpc0NiIiwgInNoaWZ0S2V5IiwgImNicyIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAiZW5kU3RhdGUiLCAiZmluaXNoIiwgImNsaWNrIiwgIm9uIiwgImJhdGNoT3BlcmF0aW9uIiwgInBhZ2VMaXN0IiwgImNodW5rU2l6ZSIsICJwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyIsICJ3b3JrZXIiLCAicG9zdEZpbmlzaCIsICJjb3VudFN0YXJ0ZWQiLCAiY291bnRGaW5pc2hlZCIsICJjb3VudEZpbmlzaGVkU3VjY2VzcyIsICJjdXJyZW50Q2h1bmtJbmRleCIsICJwYWdlQ2h1bmtzIiwgInJ1bm5pbmciLCAic2V0UGFnZUxpc3QiLCAic2V0T3B0aW9uIiwgIm9wdGlvbk5hbWUiLCAib3B0aW9uVmFsdWUiLCAicnVuIiwgInRvdGFsIiwgImZuU3RhcnROZXdDaHVuayIsICJ3b3JrZXJTdWNjZXNzIiwgImFyZyIsICJmbkRvbmVPbmUiLCAid29ya2VyRmFpbHVyZSIsICJ0aGlzUHJveHkiLCAiX2l0ZXJhdG9yMTMiLCAiX3N0ZXAxMyIsICJwcm9ncmVzcyIsICJyb3VuZCIsICJmbG9vciIsICJzdGF0dXNTdHJpbmciLCAic2ltcGxlV2luZG93IiwgIndpZHRoIiwgImhlaWdodCIsICJkaWFsb2ciLCAiYXV0b09wZW4iLCAiYnV0dG9ucyIsICJQbGFjZWhvbGRlciBidXR0b24iLCAiZGlhbG9nQ2xhc3MiLCAiaW5uZXJXaWR0aCIsICJjbG9zZSIsICJyZXNpemVTdGFydCIsICJzY3JvbGxib3giLCAibWF4SGVpZ2h0IiwgInJlc2l6ZVN0b3AiLCAicmVzaXplIiwgIiR3aWRnZXQiLCAiZWFjaCIsICJidXR0b25zcGFuIiwgImxpbmtzc3BhbiIsICJyZXNpemFibGUiLCAiaGFzRm9vdGVyTGlua3MiLCAic2NyaXB0TmFtZSIsICJwcmV2ZW50RGVmYXVsdCIsICJkaXNwbGF5IiwgInNjcmlwdG5hbWVzcGFuIiwgInNldHVwVG9vbHRpcHMiLCAicGciLCAiZGlmZiIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJzZXRIZWlnaHQiLCAic2V0VGl0bGUiLCAic2V0U2NyaXB0TmFtZSIsICJzZXRXaWR0aCIsICJnZXRDb21wdXRlZFN0eWxlIiwgImlubmVySGVpZ2h0IiwgInNldENvbnRlbnQiLCAicHVyZ2VDb250ZW50IiwgImFkZENvbnRlbnQiLCAiYnV0dG9uIiwgImFkZEZvb3RlckxpbmsiLCAid2lraVBhZ2UiLCAicHJlcCIsICIkZm9vdGVybGlua3MiLCAiYnVsbGV0IiwgInNldE1vZGFsaXR5IiwgIm1vZGFsIiwgInNldEJ1dHRvbnNFbmFibGVkIiwgImVuYWJsZWQiLCAialF1ZXJ5Il0KfQo=
