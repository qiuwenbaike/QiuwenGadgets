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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL21vcmViaXRzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuLyohIFR3aW5rbGUuanMgLSBtb3JlYml0cy5qcyAqL1xuXG4vKipcbiAqIEEgbGlicmFyeSBmdWxsIG9mIGxvdHMgb2YgZ29vZG5lc3MgZm9yIHVzZXIgc2NyaXB0cyBvbiBNZWRpYVdpa2kgd2lraXMuXG4gKlxuICogVGhlIGhpZ2hsaWdodHMgaW5jbHVkZTpcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSAtIG1ha2UgY2FsbHMgdG8gdGhlIE1lZGlhV2lraSBBUElcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gLSBtb2RpZnkgcGFnZXMgb24gdGhlIHdpa2kgKGVkaXQsIHJldmVydCwgZGVsZXRlLCBldGMuKVxuICogLSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gLSBlbmhhbmNlZCBkYXRlIG9iamVjdCBwcm9jZXNzaW5nLCBzb3J0IG9mIGEgbGlnaHQgbW9tZW50LmpzXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IC0gZ2VuZXJhdGUgcXVpY2sgSFRNTCBmb3JtcyBvbiB0aGUgZmx5XG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IC0gYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkgRGlhbG9nIHdpdGggYSBjdXN0b20gbG9vayBhbmQgZXh0cmEgZmVhdHVyZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gLSBhIHJvdWdoLWFuZC1yZWFkeSBzdGF0dXMgbWVzc2FnZSBkaXNwbGF5ZXIsIHVzZWQgYnkgdGhlIE1vcmViaXRzLndpa2kgY2xhc3Nlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHR9IC0gdXRpbGl0aWVzIGZvciBkZWFsaW5nIHdpdGggd2lraXRleHRcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0cmluZ30gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzXG4gKiAtIHtAbGluayBNb3JlYml0cy5hcnJheX0gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBhcnJheXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmlwfSAtIHV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogLSBUaGUgd2hvbGUgdGhpbmcgcmVsaWVzIG9uIGpRdWVyeS4gIEJ1dCBtb3N0IHdpa2lzIHNob3VsZCBwcm92aWRlIHRoaXMgYnkgZGVmYXVsdC5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0sIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9LCBhbmQge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gcmVseSBvbiB0aGUgXCJtb3JlYml0cy5jc3NcIiBmaWxlIGZvciB0aGVpciBzdHlsaW5nLlxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmQge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gdG9vbHRpcHMgcmVseSBvbiBqUXVlcnkgVUkgRGlhbG9nIChmcm9tIFJlc291cmNlTG9hZGVyIG1vZHVsZSBuYW1lICdqcXVlcnkudWknKS5cbiAqIC0gVG8gY3JlYXRlIGEgZ2FkZ2V0IGJhc2VkIG9uIG1vcmViaXRzLmpzLCB1c2UgdGhpcyBzeW50YXggaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqR2FkZ2V0TmFtZVtSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aV18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzfEdhZGdldE5hbWUuanNgXG4gKiAtIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gY29uZmlndXJlIG1vcmViaXRzLmpzIGFzIGEgaGlkZGVuIGdhZGdldCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCptb3JlYml0c1tSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aXxoaWRkZW5dfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc2BcbiAqICAgICBhbmQgdGhlbiBsb2FkIGV4dC5nYWRnZXQubW9yZWJpdHMgYXMgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBuZXcgZ2FkZ2V0LlxuICpcbiAqIEFsbCB0aGUgc3R1ZmYgaGVyZSB3b3JrcyBvbiBhbGwgYnJvd3NlcnMgZm9yIHdoaWNoIE1lZGlhV2lraSBwcm92aWRlcyBKYXZhU2NyaXB0IHN1cHBvcnQuXG4gKlxuICogVGhpcyBsaWJyYXJ5IGlzIG1haW50YWluZWQgYnkgdGhlIG1haW50YWluZXJzIG9mIFR3aW5rbGUuXG4gKiBGb3IgcXVlcmllcywgc3VnZ2VzdGlvbnMsIGhlbHAsIGV0Yy4sIGhlYWQgdG8gW0hlbHA6VHdpbmtsZV0oaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9IOlRXKS5cbiAqIFRoZSBsYXRlc3QgZGV2ZWxvcG1lbnQgc291cmNlIGlzIGF2YWlsYWJsZSBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL3R3aW5rbGUvYmxvYi9tYXN0ZXIvbW9yZWJpdHMuanN8R2l0SHVifS5cbiAqXG4gKiBAcGFyYW0ge0pRdWVyeX0gJFxuICogQG5hbWVzcGFjZSBNb3JlYml0c1xuICovXG5pbXBvcnQgJy4vbW9yZWJpdHMubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBtb3JlYml0cygkKSB7XG5cdC8vIFdyYXAgZW50aXJlIGZpbGUgd2l0aCBhbm9ueW1vdXMgZnVuY3Rpb25cblx0LyoqIEBsZW5kcyBNb3JlYml0cyAqL1xuXHRjb25zdCBNb3JlYml0cyA9IHt9O1xuXHR3aW5kb3cuTW9yZWJpdHMgPSBNb3JlYml0czsgLy8gYWxsb3cgZ2xvYmFsIGFjY2Vzc1xuXHQvLyBObyBNb3JlYml0cy5pMThuIGF0IHRoaXMgdGltZVxuXHQvKipcblx0ICogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmwxMG4gPSB7XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgYWxpYXNlcyBmb3IgXCJyZWRpcmVjdFwiIG1hZ2ljIHdvcmQuXG5cdFx0ICogQ2hlY2sgdXNpbmcgYXBpLnBocD9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mbWV0YT1zaXRlaW5mbyZmb3JtYXR2ZXJzaW9uPTImc2lwcm9wPW1hZ2ljd29yZHNcblx0XHQgKi9cblx0XHRyZWRpcmVjdFRhZ0FsaWFzZXM6IFsnI1JFRElSRUNUJywgJyPph43lrprlkJEnXSxcblx0XHQvKipcblx0XHQgKiBUYWtlcyBhIHN0cmluZyBhcyBhcmd1bWVudCBhbmQgY2hlY2tzIGlmIGl0IGlzIGEgdGltZXN0YW1wIG9yIG5vdFxuXHRcdCAqIElmIG5vdCwgaXQgcmV0dXJucyBudWxsLiBJZiB5ZXMsIGl0IHJldHVybnMgYW4gYXJyYXkgb2YgaW50ZWdlcnNcblx0XHQgKiBpbiB0aGUgZm9ybWF0IFt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmRdXG5cdFx0ICogd2hpY2ggY2FuIGJlIHBhc3NlZCB0byBEYXRlLlVUQygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge251bWJlcltdIHwgbnVsbH1cblx0XHQgKi9cblx0XHRzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQ6IChzdHIpID0+IHtcblx0XHRcdGNvbnN0IHJneFVUQyA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoVVRDXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChVVEMpXG5cdFx0XHRjb25zdCByZ3hDU1QgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKENTVFxcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoQ1NUKVxuXHRcdFx0Y29uc3QgbWF0Y2ggPSByZ3hVVEMuZXhlYyhzdHIpIHx8IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRjb25zdCBtYXRjaENTVCA9IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbW9udGggPSBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzLmluZGV4T2YobWF0Y2hbNF0pO1xuXHRcdFx0aWYgKG1vbnRoID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIC4uLi4uIHllYXIgLi4uLiBtb250aCAuLi4gZGF0ZSAuLi4uIGhvdXIgLi4uIG1pbnV0ZVxuXHRcdFx0cmV0dXJuIG1hdGNoQ1NUXG5cdFx0XHRcdD8gW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSAtIDgsIG1hdGNoWzVdXVxuXHRcdFx0XHQ6IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0sIG1hdGNoWzVdXTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwIC0gZS5nLiBgc3lzb3BgLCBgYXV0b2NvbmZpcm1lZGAsIGV0Yy5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNJbkdyb3VwID0gKGdyb3VwKSA9PiB7XG5cdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpLmluY2x1ZGVzKGdyb3VwKSB8fCBtdy5jb25maWcuZ2V0KCd3Z0dsb2JhbEdyb3VwcycpLmluY2x1ZGVzKGdyb3VwKTtcblx0fTtcblx0LyoqXG5cdCAqIEhhcmRjb2RlcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgc3lzb3AsIHVzZWQgYSBsb3QuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzU3lzb3AgPVxuXHRcdE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N5c29wJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3FpdXdlbicpO1xuXHQvKipcblx0ICogRGVwcmVjYXRlZCBhcyBvZiBGZWJydWFyeSAyMDIxLCB1c2Uge0BsaW5rIE1vcmViaXRzLmlwLnNhbml0aXplSVB2Nn0uXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnNhbml0aXplSVB2NiA9IChhZGRyZXNzKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMuc2FuaXRpemVJUHY2IHdhcyByZW5hbWVkIHRvIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NiBpbiBGZWJydWFyeSAyMDIxLCBwbGVhc2UgdXNlIHRoYXQgaW5zdGVhZCdcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGFnZSBpcyBhIHJlZGlyZWN0IG9yIHNvZnQgcmVkaXJlY3QuIEZhaWxzXG5cdCAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG5cdCAqIGRldGVjdCBNb2R1bGU6UmZELCB3aXRoIHRoZSBzYW1lIGZhaWx1cmUgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdHJldHVybiAhIShcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnSXNSZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHJlZGlyZWN0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtUmZEJykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtUmVkaXJlY3RfY2F0ZWdvcnlfc2hlbGwnKVxuXHRcdCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTdG9yZXMgYSBub3JtYWxpemVkICh1bmRlcnNjb3JlcyBjb252ZXJ0ZWQgdG8gc3BhY2VzKSB2ZXJzaW9uIG9mIHRoZVxuXHQgKiBgd2dQYWdlTmFtZWAgdmFyaWFibGUuXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5wYWdlTmFtZU5vcm0gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHQvKipcblx0ICogQ3JlYXRlIGEgc3RyaW5nIGZvciB1c2UgaW4gcmVnZXggbWF0Y2hpbmcgYSBwYWdlIG5hbWUuICBBY2NvdW50cyBmb3Jcblx0ICogbGVhZGluZyBjaGFyYWN0ZXIncyBjYXBpdGFsaXphdGlvbiwgdW5kZXJzY29yZXMgYXMgc3BhY2VzLCBhbmQgc3BlY2lhbFxuXHQgKiBjaGFyYWN0ZXJzIGJlaW5nIGVzY2FwZWQuICBTZWUgYWxzbyB7QGxpbmsgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBQYWdlIG5hbWUgd2l0aG91dCBuYW1lc3BhY2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRm9yIGEgcGFnZSBuYW1lIGBGb28gYmFyYCwgcmV0dXJucyB0aGUgc3RyaW5nIGBbRmZdb29bXyBdYmFyYC5cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lUmVnZXggPSAocGFnZU5hbWUpID0+IHtcblx0XHRpZiAocGFnZU5hbWUgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGNvbnN0IFtmaXJzdENoYXJdID0gcGFnZU5hbWU7XG5cdFx0Y29uc3QgcmVtYWluZGVyID0gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChwYWdlTmFtZS5zbGljZSgxKSk7XG5cdFx0aWYgKG13LlRpdGxlLnBocENoYXJUb1VwcGVyKGZpcnN0Q2hhcikgIT09IGZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRyZXR1cm4gYFske213LlRpdGxlLnBocENoYXJUb1VwcGVyKGZpcnN0Q2hhcil9JHtmaXJzdENoYXIudG9Mb3dlckNhc2UoKX1dJHtyZW1haW5kZXJ9YDtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnN0cmluZy5lc2NhcGVSZWdFeHAoZmlyc3RDaGFyKSArIHJlbWFpbmRlcjtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHN0cmluZyBvciBhcnJheSBvZiBET00gbm9kZXMgaW50byBhbiBIVE1MIGZyYWdtZW50LlxuXHQgKiBXaWtpbGluayBzeW50YXggKGBbWy4uLl1dYCkgaXMgdHJhbnNmb3JtZWQgaW50byBIVE1MIGFuY2hvci5cblx0ICogVXNlZCBpbiBNb3JlYml0cy5xdWlja0Zvcm0gYW5kIE1vcmViaXRzLnN0YXR1c1xuXHQgKlxuXHQgKiBAaW50ZXJuYWxcblx0ICogQHBhcmFtIHtzdHJpbmd8Tm9kZXwoc3RyaW5nfE5vZGUpW119IGlucHV0XG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuY3JlYXRlSHRtbCA9IChpbnB1dCkgPT4ge1xuXHRcdGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGlmICghaW5wdXQpIHtcblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9XG5cdFx0aW5wdXQgPSBnZW5lcmF0ZUFycmF5KGlucHV0KTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaW5wdXQpIHtcblx0XHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiAkLnBhcnNlSFRNTChNb3JlYml0cy5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyhlbGVtZW50KSkpIHtcblx0XHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZnJhZ21lbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB3aWtpbGlua3MgdG8gSFRNTCBhbmNob3IgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHRleHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3QgdWIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIodGV4dCk7XG5cdFx0Ly8gRG9uJ3QgY29udmVydCB3aWtpbGlua3Mgd2l0aGluIGNvZGUgdGFncyBhcyB0aGV5J3JlIHVzZWQgZm9yIGRpc3BsYXlpbmcgd2lraS1jb2RlXG5cdFx0dWIudW5iaW5kKCc8Y29kZT4nLCAnPC9jb2RlPicpO1xuXHRcdHViLmNvbnRlbnQgPSB1Yi5jb250ZW50LnJlcGxhY2UoL1xcW1xcWzo/KD86KFtefFxcXV0rPylcXHwpPyhbXlxcXXxdKz8pXFxdXFxdL2csIChfLCB0YXJnZXQsIHRleHRfKSA9PiB7XG5cdFx0XHRpZiAoIXRhcmdldCkge1xuXHRcdFx0XHR0YXJnZXQgPSB0ZXh0Xztcblx0XHRcdH1cblx0XHRcdHJldHVybiBgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHttdy51dGlsLmdldFVybCh0YXJnZXQpfVwiIHRpdGxlPVwiJHt0YXJnZXQucmVwbGFjZShcblx0XHRcdFx0L1wiL2csXG5cdFx0XHRcdCcmIzM0Oydcblx0XHRcdCl9XCI+JHt0ZXh0X308L2E+YDtcblx0XHR9KTtcblx0XHRyZXR1cm4gdWIucmViaW5kKCk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhbGwgbmFtZXNwYWNlIGFsaWFzZXMsIHJlZ2FyZGxlc3Ncblx0ICogb2YgdGhlIGNhcGl0YWxpemF0aW9uIGFuZCB1bmRlcnNjb3Jlcy9zcGFjZXMuICBEb2Vzbid0IGluY2x1ZGUgdGhlIG9wdGlvbmFsXG5cdCAqIGxlYWRpbmcgYDpgLCBidXQgaWYgdGhlcmUncyBtb3JlIHRoYW4gb25lIGl0ZW0sIHdyYXBzIHRoZSBsaXN0IGluIGFcblx0ICogbm9uLWNhcHR1cmluZyBncm91cC4gIFRoaXMgbWVhbnMgeW91IGNhbiBkbyBgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzRdKSArXG5cdCAqICc6JyArIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoJ1R3aW5rbGUnKWAgdG8gbWF0Y2ggYSBmdWxsIHBhZ2UuICBVc2VzXG5cdCAqIHtAbGluayBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4fS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJbXX0gbmFtZXNwYWNlcyAtIEFycmF5IG9mIG5hbWVzcGFjZSBudW1iZXJzLiAgVW51c2VkL2ludmFsaWRcblx0ICogbmFtZXNwYWNlIG51bWJlcnMgYXJlIHNpbGVudGx5IGRpc2NhcmRlZC5cblx0ICogQGV4YW1wbGVcblx0ICogLy8gcmV0dXJucyAnKD86W0ZmXVtJaV1bTGxdW0VlXXxbSWldW01tXVtBYV1bR2ddW0VlXSknXG5cdCAqIE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KFs2XSlcblx0ICogQHJldHVybnMge3N0cmluZ30gLSBSZWdleC1zdWl0YWJsZSBzdHJpbmcgb2YgYWxsIG5hbWVzcGFjZSBhbGlhc2VzLlxuXHQgKi9cblx0TW9yZWJpdHMubmFtZXNwYWNlUmVnZXggPSAobmFtZXNwYWNlcykgPT4ge1xuXHRcdG5hbWVzcGFjZXMgPSBnZW5lcmF0ZUFycmF5KG5hbWVzcGFjZXMpO1xuXHRcdGNvbnN0IGFsaWFzZXMgPSBbXTtcblx0XHRsZXQgcmVnZXg7XG5cdFx0Zm9yIChjb25zdCBbbmFtZSwgbnVtYmVyXSBvZiBPYmplY3QuZW50cmllcyhtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpKSkge1xuXHRcdFx0aWYgKG5hbWVzcGFjZXMuaW5jbHVkZXMobnVtYmVyKSkge1xuXHRcdFx0XHQvLyBOYW1lc3BhY2VzIGFyZSBjb21wbGV0ZWx5IGFnbm9zdGljIGFzIHRvIGNhc2UsXG5cdFx0XHRcdC8vIGFuZCBhIHJlZ2V4IHN0cmluZyBpcyBtb3JlIHVzZWZ1bC9jb21wYXRpYmxlIHRoYW4gYSBSZWdFeHAgb2JqZWN0LFxuXHRcdFx0XHQvLyBzbyB3ZSBhY2NlcHQgYW55IGNhc2luZyBmb3IgYW55IGxldHRlci5cblx0XHRcdFx0YWxpYXNlc1thbGlhc2VzLmxlbmd0aF0gPSBbLi4ubmFtZV1cblx0XHRcdFx0XHQubWFwKChjaGFyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gTW9yZWJpdHMucGFnZU5hbWVSZWdleChjaGFyKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5qb2luKCcnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3dpdGNoIChhbGlhc2VzLmxlbmd0aCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZWdleCA9ICcnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0W3JlZ2V4XSA9IGFsaWFzZXM7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmVnZXggPSBgKD86JHthbGlhc2VzLmpvaW4oJ3wnKX0pYDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiByZWdleDtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5xdWlja0Zvcm0gKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRpb24gb2Ygc2ltcGxlIGFuZCBzdGFuZGFyZCBmb3JtcyB3aXRob3V0IG11Y2ggc3BlY2lmaWMgY29kaW5nLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZvcm0gaXMgc3VibWl0dGVkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50VHlwZT1zdWJtaXRdIC0gVHlwZSBvZiB0aGUgZXZlbnQuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0gPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50VHlwZSkge1xuXHRcdHRoaXMucm9vdCA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdFx0XHR0eXBlOiAnZm9ybScsXG5cdFx0XHRldmVudCxcblx0XHRcdGV2ZW50VHlwZSxcblx0XHR9KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IG9mIHRoZSBxdWlja0Zvcm0uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgcmV0ID0gdGhpcy5yb290LnJlbmRlcigpO1xuXHRcdHJldC5uYW1lcyA9IHt9O1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBcHBlbmQgZWxlbWVudCB0byB0aGUgZm9ybS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhvYmplY3R8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBkYXRhIC0gQSBxdWlja2Zvcm0gZWxlbWVudCwgb3IgdGhlIG9iamVjdCB3aXRoIHdoaWNoXG5cdCAqIGEgcXVpY2tmb3JtIGVsZW1lbnQgaXMgY29uc3RydWN0ZWQuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gLSBTYW1lIGFzIHdoYXQgaXMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290LmFwcGVuZChkYXRhKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBlbGVtZW50IGZvciB0aGUgdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEluZGV4IHRvIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50IHR5cGVzOlxuXHQgKiAtIEdsb2JhbCBhdHRyaWJ1dGVzOiBpZCwgY2xhc3NOYW1lLCBzdHlsZSwgdG9vbHRpcCwgZXh0cmEsICRkYXRhLCBhZG1pbm9ubHlcblx0ICogLSBgc2VsZWN0YDogQSBjb21ibyBib3ggKGFrYSBkcm9wLWRvd24pLlxuXHQgKiAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbXVsdGlwbGUsIHNpemUsIGxpc3QsIGV2ZW50LCBkaXNhYmxlZFxuXHQgKiAgLSBgb3B0aW9uYDogQW4gZWxlbWVudCBmb3IgYSBjb21ibyBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiB2YWx1ZSwgbGFiZWwsIHNlbGVjdGVkLCBkaXNhYmxlZFxuXHQgKiAgLSBgb3B0Z3JvdXBgOiBBIGdyb3VwIG9mIFwib3B0aW9uXCJzLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbGFiZWwsIGxpc3Rcblx0ICogIC0gYGZpZWxkYDogQSBmaWVsZHNldCAoYWthIGdyb3VwIGJveCkuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWRcblx0ICogIC0gYGNoZWNrYm94YDogQSBjaGVja2JveC4gTXVzdCB1c2UgXCJsaXN0XCIgcGFyYW1ldGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcblx0ICogICAgICAtIEF0dHJpYnV0ZXMgKHdpdGhpbiBsaXN0KTogbmFtZSwgbGFiZWwsIHZhbHVlLCBjaGVja2VkLCBkaXNhYmxlZCwgZXZlbnQsIHN1Ymdyb3VwXG5cdCAqICAtIGByYWRpb2A6IEEgcmFkaW8gYnV0dG9uLiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuXHQgKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcblx0ICogIC0gYGlucHV0YDogQSB0ZXh0IGlucHV0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgc2l6ZSwgcGxhY2Vob2xkZXIsIG1heGxlbmd0aCwgZGlzYWJsZWQsIHJlcXVpcmVkLCByZWFkb25seSwgZXZlbnRcblx0ICogIC0gYG51bWJlcmA6IEEgbnVtYmVyIGlucHV0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IEV2ZXJ5dGhpbmcgdGhlIHRleHQgYGlucHV0YCBoYXMsIGFzIHdlbGwgYXM6IG1pbiwgbWF4LCBzdGVwLCBsaXN0XG5cdCAqICAtIGBkeW5pbnB1dGA6IEEgc2V0IG9mIHRleHQgYm94ZXMgd2l0aCBcIlJlbW92ZVwiIGJ1dHRvbnMgYW5kIGFuIFwiQWRkXCIgYnV0dG9uLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIG1pbiwgbWF4LCBzdWJsYWJlbCwgdmFsdWUsIHNpemUsIG1heGxlbmd0aCwgZXZlbnRcblx0ICogIC0gYGhpZGRlbmA6IEFuIGludmlzaWJsZSBmb3JtIGZpZWxkLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgdmFsdWVcblx0ICogIC0gYGhlYWRlcmA6IEEgbGV2ZWwgNSBoZWFkZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbFxuXHQgKiAgLSBgZGl2YDogQSBnZW5lcmljIHBsYWNlaG9sZGVyIGVsZW1lbnQgb3IgbGFiZWwuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbFxuXHQgKiAgLSBgc3VibWl0YDogQSBzdWJtaXQgYnV0dG9uLiBNb3JlYml0cy5zaW1wbGVXaW5kb3cgbW92ZXMgdGhlc2UgdG8gdGhlIGZvb3RlciBvZiB0aGUgZGlhbG9nLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG5cdCAqICAtIGBidXR0b25gOiBBIGdlbmVyaWMgYnV0dG9uLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkLCBldmVudFxuXHQgKiAgLSBgdGV4dGFyZWFgOiBBIGJpZywgbXVsdGktbGluZSB0ZXh0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY29scywgcm93cywgZGlzYWJsZWQsIHJlcXVpcmVkLCByZWFkb25seVxuXHQgKiAgLSBgZnJhZ21lbnRgOiBBIERvY3VtZW50RnJhZ21lbnQgb2JqZWN0LlxuXHQgKiAgICAgIC0gTm8gYXR0cmlidXRlcywgYW5kIG5vIGdsb2JhbCBhdHRyaWJ1dGVzIGV4Y2VwdCBhZG1pbm9ubHkuXG5cdCAqIFRoZXJlIGlzIHNvbWUgZGlmZmVyZW5jZSBvbiBob3cgdHlwZXMgaGFuZGxlIHRoZSBgbGFiZWxgIGF0dHJpYnV0ZTpcblx0ICogLSBgZGl2YCwgYHNlbGVjdGAsIGBmaWVsZGAsIGBjaGVja2JveGAvYHJhZGlvYCwgYGlucHV0YCwgYHRleHRhcmVhYCwgYGhlYWRlcmAsIGFuZCBgZHluaW5wdXRgIGNhbiBhY2NlcHQgYW4gYXJyYXkgb2YgaXRlbXMsXG5cdCAqIGFuZCB0aGUgbGFiZWwgaXRlbShzKSBjYW4gYmUgYEVsZW1lbnRgcy5cblx0ICogLSBgb3B0aW9uYCwgYG9wdGdyb3VwYCwgYF9keW5pbnB1dF9lbGVtZW50YCwgYHN1Ym1pdGAsIGFuZCBgYnV0dG9uYCBhY2NlcHQgb25seSBhIHNpbmdsZSBzdHJpbmcuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcXVpY2tmb3JtIGVsZW1lbnQuIFNob3VsZFxuXHQgKiBzcGVjaWZ5IG9uZSBvZiB0aGUgYXZhaWxhYmxlIHR5cGVzIGZyb20gdGhlIGluZGV4IGFib3ZlLCBhcyB3ZWxsIGFzIGFueVxuXHQgKiByZWxldmFudCBhbmQgYXZhaWxhYmxlIGF0dHJpYnV0ZXMuXG5cdCAqIEBleGFtcGxlIG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdCAqICAgICBuYW1lOiAndGFyZ2V0Jyxcblx0ICogICAgIHR5cGU6ICdpbnB1dCcsXG5cdCAqICAgICBsYWJlbDogJ1lvdXIgdGFyZ2V0OicsXG5cdCAqICAgICB0b29sdGlwOiAnRW50ZXIgeW91ciB0YXJnZXQuIFJlcXVpcmVkLicsXG5cdCAqICAgICByZXF1aXJlZDogdHJ1ZVxuXHQgKiB9KTtcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuY2hpbGRzID0gW107XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkID0gMDtcblx0LyoqXG5cdCAqIEFwcGVuZHMgYW4gZWxlbWVudCB0byBjdXJyZW50IGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAcGFyYW0ge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSBkYXRhIC0gQSBxdWlja0Zvcm0gZWxlbWVudCBvciB0aGUgb2JqZWN0IHJlcXVpcmVkIHRvXG5cdCAqIGNyZWF0ZSB0aGUgcXVpY2tGb3JtIGVsZW1lbnQuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gVGhlIHNhbWUgZWxlbWVudCBwYXNzZWQgaW4uXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRsZXQgY2hpbGQ7XG5cdFx0aWYgKGRhdGEgaW5zdGFuY2VvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCkge1xuXHRcdFx0Y2hpbGQgPSBkYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZCA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChkYXRhKTtcblx0XHR9XG5cdFx0dGhpcy5jaGlsZHNbdGhpcy5jaGlsZHMubGVuZ3RoXSA9IGNoaWxkO1xuXHRcdHJldHVybiBjaGlsZDtcblx0fTtcblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IGZvciB0aGUgcXVpY2tGb3JtIGVsZW1lbnQuICBUaGlzIHNob3VsZCBiZSBjYWxsZWRcblx0ICogd2l0aG91dCBwYXJhbWV0ZXJzOiBgZm9ybS5yZW5kZXIoKWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbFN1Ymdyb3VwSWRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoaW50ZXJuYWxTdWJncm91cElkKSB7XG5cdFx0Y29uc3QgY3VycmVudE5vZGUgPSB0aGlzLmNvbXB1dGUodGhpcy5kYXRhLCBpbnRlcm5hbFN1Ymdyb3VwSWQpO1xuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHMpIHtcblx0XHRcdC8vIGRvIG5vdCBwYXNzIGludGVybmFsX3N1Ymdyb3VwX2lkIHRvIHJlY3Vyc2l2ZSBjYWxsc1xuXHRcdFx0Y3VycmVudE5vZGVbMV0uYXBwZW5kQ2hpbGQoY2hpbGQucmVuZGVyKCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gY3VycmVudE5vZGVbMF07XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0geyp9IGRhdGFcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluSWRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChkYXRhLCBpbklkKSB7XG5cdFx0bGV0IG5vZGU7XG5cdFx0bGV0IGNoaWxkQ29udGFpbmVyID0gbnVsbDtcblx0XHRsZXQgbGFiZWw7XG5cdFx0Y29uc3QgaWQgPSBgJHtpbklkID8gYCR7aW5JZH1fYCA6ICcnfW5vZGVfJHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5pZCsrfWA7XG5cdFx0aWYgKGRhdGEuYWRtaW5vbmx5ICYmICFNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0Ly8gaGVsbCBoYWNrIGFscGhhXG5cdFx0XHRkYXRhLnR5cGUgPSAnaGlkZGVuJztcblx0XHR9XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGN1cnJlbnQ7XG5cdFx0bGV0IHN1Ym5vZGU7XG5cdFx0c3dpdGNoIChkYXRhLnR5cGUpIHtcblx0XHRcdGNhc2UgJ2Zvcm0nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXHRcdFx0XHRub2RlLmNsYXNzTmFtZSA9ICdxdWlja2Zvcm0nO1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2NyaXB0LXVybFxuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZGF0YS5ldmVudFR5cGUgfHwgJ3N1Ym1pdCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZyYWdtZW50Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcdFx0Ly8gZnJhZ21lbnRzIGNhbid0IGhhdmUgYW55IGF0dHJpYnV0ZXMsIHNvIGp1c3QgcmV0dXJuIGl0IHN0cmFpZ2h0IGF3YXlcblx0XHRcdFx0cmV0dXJuIFtub2RlLCBub2RlXTtcblx0XHRcdGNhc2UgJ3NlbGVjdCc6IHtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc2VsZWN0ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSk7XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tdWx0aXBsZSkge1xuXHRcdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLnNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5saXN0KSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRncm91cCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc2VsZWN0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ29wdGlvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0aWYgKGRhdGEuc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdG5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcHRncm91cCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJzsgLy8gbXVzdCBiZSBvcHRpb25zIGhlcmVcblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHN1Ym5vZGVbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZpZWxkJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKSk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRpZiAoZGF0YS5uYW1lKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cklkID0gYCR7aWR9XyR7aX1gO1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGxldCBjdXJEaXY7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50eXBlID09PSAnaGVhZGVyJykge1xuXHRcdFx0XHRcdFx0XHQvLyBpbmxpbmUgaGFja1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JykpO1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdFx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGN1ckRpdiwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjdXJEaXYgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuaGlkZGVuKSB7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSBjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnZhbHVlcyA9IGN1cnJlbnQudmFsdWU7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50LnZhbHVlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGN1cklkKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgY3VycmVudC5uYW1lIHx8IGRhdGEubmFtZSk7XG5cdFx0XHRcdFx0XHQvLyBJZiBuYW1lIGlzIHByb3ZpZGVkIG9uIHRoZSBpbmRpdmlkdWFsIGNoZWNrYm94LCBhZGQgYSBkYXRhLXNpbmdsZVxuXHRcdFx0XHRcdFx0Ly8gYXR0cmlidXRlIHdoaWNoIGluZGljYXRlcyBpdCBpc24ndCBwYXJ0IG9mIGEgbGlzdCBvZiBjaGVja2JveGVzIHdpdGhcblx0XHRcdFx0XHRcdC8vIHNhbWUgbmFtZS4gVXNlZCBpbiBnZXRJbnB1dERhdGEoKVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zaW5nbGUnLCAnZGF0YS1zaW5nbGUnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGFiZWwgPSBjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGN1cnJlbnQubGFiZWwpKTtcblx0XHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwsIGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gc3R5bGVzIGdvIG9uIHRoZSBsYWJlbCwgZG9lc24ndCBtYWtlIHNlbnNlIHRvIHN0eWxlIGEgY2hlY2tib3gvcmFkaW9cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnN0eWxlKSB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjdXJyZW50LnN0eWxlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxldCBldmVudDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnN1Ymdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdGxldCB0bXBncm91cCA9IGN1cnJlbnQuc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHRtcGdyb3VwID0gZ2VuZXJhdGVBcnJheSh0bXBncm91cCk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ymdyb3VwUmF3ID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHRpZDogYCR7aWR9XyR7aX1fc3ViZ3JvdXBgLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbCBvZiB0bXBncm91cCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IG5ld0VsID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4uZWwsXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIW5ld0VsLnR5cGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5ld0VsLnR5cGUgPSBkYXRhLnR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdG5ld0VsLm5hbWUgPSBgJHtjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lfS4ke25ld0VsLm5hbWV9YDtcblx0XHRcdFx0XHRcdFx0XHRzdWJncm91cFJhdy5hcHBlbmQobmV3RWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ymdyb3VwID0gc3ViZ3JvdXBSYXcucmVuZGVyKGN1cklkKTtcblx0XHRcdFx0XHRcdFx0c3ViZ3JvdXAuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybVN1Ymdyb3VwJztcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zdWJncm91cCA9IHN1Ymdyb3VwO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNob3duID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGV2ZW50ID0gKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlLnRhcmdldC5zdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3JhZGlvJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlLnRhcmdldC5zdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHN1Ym5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50ID0gKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge25hbWV9ID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGUgZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gYWRkIHVzZXJzJyBldmVudCBsYXN0LCBzbyBpdCBjYW4gaW50ZXJhY3Qgd2l0aCB0aGUgc3ViZ3JvdXBcblx0XHRcdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjdXJyZW50LmV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY3VycmVudC5ldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnNoaWZ0Q2xpY2tTdXBwb3J0ICYmIGRhdGEudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdE1vcmViaXRzLmNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQoTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRzKG5vZGUsIGRhdGEubmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly8gaW5wdXQgaXMgYWN0dWFsbHkgYSB0ZXh0LXR5cGUsIHNvIG51bWJlciBoZXJlIGluaGVyaXRzIHRoZSBzYW1lIHN0dWZmXG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHQvLyBBZGQgdmFsdWUgYW5kIHBsYWNlaG9sZGVyIGF0dHJzXG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBkYXRhLnBsYWNlaG9sZGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLnR5cGUgPT09ICdpbnB1dCcpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWydtaW4nLCAnbWF4JywgJ3N0ZXAnLCAnbGlzdCddKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgZGF0YVthdHRdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWyd2YWx1ZScsICdzaXplJywgJ3BsYWNlaG9sZGVyJywgJ21heGxlbmd0aCddKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ2Rpc2FibGVkJywgJ3JlcXVpcmVkJywgJ3JlYWRvbmx5J10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGF0dCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHN1Ym5vZGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZHluaW5wdXQnOiB7XG5cdFx0XHRcdGNvbnN0IG1pbiA9IGRhdGEubWluIHx8IDE7XG5cdFx0XHRcdGNvbnN0IG1heCA9IGRhdGEubWF4IHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRjb25zdCBsaXN0Tm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRjb25zdCBtb3JlID0gdGhpcy5jb21wdXRlKHtcblx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRsYWJlbDogJ+abtOWkmicsXG5cdFx0XHRcdFx0ZGlzYWJsZWQ6IG1pbiA+PSBtYXgsXG5cdFx0XHRcdFx0ZXZlbnQ6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdOb2RlID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KGUudGFyZ2V0LnN1Ymxpc3QpO1xuXHRcdFx0XHRcdFx0ZS50YXJnZXQuYXJlYS5hcHBlbmRDaGlsZChuZXdOb2RlLnJlbmRlcigpKTtcblx0XHRcdFx0XHRcdGlmICgrK2UudGFyZ2V0LmNvdW50ZXIgPj0gZS50YXJnZXQubWF4KSB7XG5cdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQobW9yZVswXSk7XG5cdFx0XHRcdGNvbnN0IFssIG1vcmVCdXR0b25dID0gbW9yZTtcblx0XHRcdFx0Y29uc3Qgc3VibGlzdCA9IHtcblx0XHRcdFx0XHR0eXBlOiAnX2R5bmlucHV0X2VsZW1lbnQnLFxuXHRcdFx0XHRcdGxhYmVsOiBkYXRhLnN1YmxhYmVsIHx8IGRhdGEubGFiZWwsXG5cdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0XHRcdHZhbHVlOiBkYXRhLnZhbHVlLFxuXHRcdFx0XHRcdHNpemU6IGRhdGEuc2l6ZSxcblx0XHRcdFx0XHRyZW1vdmU6IGZhbHNlLFxuXHRcdFx0XHRcdG1heGxlbmd0aDogZGF0YS5tYXhsZW5ndGgsXG5cdFx0XHRcdFx0ZXZlbnQ6IGRhdGEuZXZlbnQsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtaW47ICsraSkge1xuXHRcdFx0XHRcdGNvbnN0IGVsZW0gPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoc3VibGlzdCk7XG5cdFx0XHRcdFx0bGlzdE5vZGUuYXBwZW5kQ2hpbGQoZWxlbS5yZW5kZXIoKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3VibGlzdC5yZW1vdmUgPSB0cnVlO1xuXHRcdFx0XHRzdWJsaXN0Lm1vcmVidXR0b24gPSBtb3JlQnV0dG9uO1xuXHRcdFx0XHRzdWJsaXN0Lmxpc3Rub2RlID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24uc3VibGlzdCA9IHN1Ymxpc3Q7XG5cdFx0XHRcdG1vcmVCdXR0b24uYXJlYSA9IGxpc3ROb2RlO1xuXHRcdFx0XHRtb3JlQnV0dG9uLm1heCA9IG1heCAtIG1pbjtcblx0XHRcdFx0bW9yZUJ1dHRvbi5jb3VudGVyID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdfZHluaW5wdXRfZWxlbWVudCc6XG5cdFx0XHRcdC8vIFByaXZhdGUsIHNpbWlsYXIgdG8gbm9ybWFsIGlucHV0XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLnNpemUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubWF4bGVuZ3RoKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIGRhdGEubWF4bGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVtb3ZlKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlID0gdGhpcy5jb21wdXRlKHtcblx0XHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0bGFiZWw6ICfnp7vpmaQnLFxuXHRcdFx0XHRcdFx0ZXZlbnQ6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBlLnRhcmdldC5saXN0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgbm9kZV8gPSBlLnRhcmdldC5pbnB1dG5vZGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1vcmUgPSBlLnRhcmdldC5tb3JlYnV0dG9uO1xuXHRcdFx0XHRcdFx0XHRsaXN0LnJlbW92ZUNoaWxkKG5vZGVfKTtcblx0XHRcdFx0XHRcdFx0LS1tb3JlLmNvdW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1vcmUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHJlbW92ZVswXSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgcmVtb3ZlQnV0dG9uXSA9IHJlbW92ZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24uaW5wdXRub2RlID0gbm9kZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24ubGlzdG5vZGUgPSBkYXRhLmxpc3Rub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5tb3JlYnV0dG9uID0gZGF0YS5tb3JlYnV0dG9uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlkZGVuJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGVhZGVyJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZGl2Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5uYW1lKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRcdHJlc3VsdC5jbGFzc05hbWUgPSAncXVpY2tmb3JtRGVzY3JpcHRpb24nO1xuXHRcdFx0XHRcdHJlc3VsdC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lIHx8ICdzdWJtaXQnKTtcblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdidXR0b24nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JykpO1xuXHRcdFx0XHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEuY29scykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdjb2xzJywgZGF0YS5jb2xzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yb3dzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCBkYXRhLnJvd3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVxdWlyZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZWFkb25seSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS52YWx1ZSA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIHBsYWNlaG9sZGVyIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRzdWJub2RlLnBsYWNlaG9sZGVyID0gZGF0YS5wbGFjZWhvbGRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHN1Ym5vZGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNb3JlYml0cy5xdWlja0Zvcm06IHVua25vd24gZWxlbWVudCB0eXBlICR7ZGF0YS50eXBlLnRvU3RyaW5nKCl9YCk7XG5cdFx0fVxuXHRcdGlmICghY2hpbGRDb250YWluZXIpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZTtcblx0XHR9XG5cdFx0aWYgKGRhdGEudG9vbHRpcCkge1xuXHRcdFx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGxhYmVsIHx8IG5vZGUsIGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5leHRyYSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuZXh0cmEgPSBkYXRhLmV4dHJhO1xuXHRcdH1cblx0XHRpZiAoZGF0YS4kZGF0YSkge1xuXHRcdFx0JChjaGlsZENvbnRhaW5lcikuZGF0YShkYXRhLiRkYXRhKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuc3R5bGUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBkYXRhLnN0eWxlKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuY2xhc3NOYW1lKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5jbGFzc05hbWUgPSBjaGlsZENvbnRhaW5lci5jbGFzc05hbWVcblx0XHRcdFx0PyBgJHtjaGlsZENvbnRhaW5lci5jbGFzc05hbWV9ICR7ZGF0YS5jbGFzc05hbWV9YFxuXHRcdFx0XHQ6IGRhdGEuY2xhc3NOYW1lO1xuXHRcdH1cblx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0cmV0dXJuIFtub2RlLCBjaGlsZENvbnRhaW5lcl07XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBqUXVlcnkgVUktYmFzZWQgdG9vbHRpcC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEByZXF1aXJlcyBqcXVlcnkudWlcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFRoZSBIVE1MIGVsZW1lbnQgYmVzaWRlIHdoaWNoIGEgdG9vbHRpcCBpcyB0byBiZSBnZW5lcmF0ZWQuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVG9vbHRpcC1yZWxhdGVkIGNvbmZpZ3VyYXRpb24gZGF0YS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcCA9IChub2RlLCBkYXRhKSA9PiB7XG5cdFx0Y29uc3QgdG9vbHRpcEJ1dHRvbiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHR0b29sdGlwQnV0dG9uLmNsYXNzTmFtZSA9ICdtb3JlYml0cy10b29sdGlwQnV0dG9uJztcblx0XHR0b29sdGlwQnV0dG9uLnRpdGxlID0gZGF0YS50b29sdGlwOyAvLyBQcm92aWRlcyB0aGUgY29udGVudCBmb3IgalF1ZXJ5IFVJXG5cdFx0dG9vbHRpcEJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnPycpKTtcblx0XHQkKHRvb2x0aXBCdXR0b24pLnRvb2x0aXAoe1xuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0bXk6ICdsZWZ0IHRvcCcsXG5cdFx0XHRcdGF0OiAnY2VudGVyIGJvdHRvbScsXG5cdFx0XHRcdGNvbGxpc2lvbjogJ2ZsaXBmaXQnLFxuXHRcdFx0fSxcblx0XHRcdC8vIERlcHJlY2F0ZWQgaW4gVUkgMS4xMiwgYnV0IE1XIHN0dWNrIG9uIDEuOS4yIGluZGVmaW5pdGVseTsgc2VlICMzOTggYW5kIFQ3MTM4NlxuXHRcdFx0dG9vbHRpcENsYXNzOiAnbW9yZWJpdHMtdWktdG9vbHRpcCcsXG5cdFx0fSk7XG5cdH07XG5cdC8vIFNvbWUgdXRpbGl0eSBtZXRob2RzIGZvciBtYW5pcHVsYXRpbmcgcXVpY2tGb3JtcyBhZnRlciB0aGVpciBjcmVhdGlvbjpcblx0Ly8gKE5vbmUgb2YgdGhlc2Ugd29yayBmb3IgXCJkeW5pbnB1dFwiIHR5cGUgZmllbGRzIGF0IHByZXNlbnQpXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBmaWxsZWQgZm9ybSBkYXRhIGVudGVyZWQgYnkgdGhlIHVzZXIsIHdpdGggdGhlIG9iamVjdFxuXHQgKiBrZXlzIGJlaW5nIHRoZSBmb3JtIGVsZW1lbnQgbmFtZXMuIERpc2FibGVkIGZpZWxkcyB3aWxsIGJlIGlnbm9yZWQsIGJ1dCBub3QgaGlkZGVuIGZpZWxkcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBXaXRoIGZpZWxkIG5hbWVzIGFzIGtleXMsIGlucHV0IGRhdGEgYXMgdmFsdWVzLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldElucHV0RGF0YSA9IChmb3JtKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0ge307XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmVsZW1lbnRzKSB7XG5cdFx0XHRpZiAoZmllbGQuZGlzYWJsZWQgfHwgIWZpZWxkLm5hbWUgfHwgIWZpZWxkLnR5cGUgfHwgZmllbGQudHlwZSA9PT0gJ3N1Ym1pdCcgfHwgZmllbGQudHlwZSA9PT0gJ2J1dHRvbicpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBGb3IgZWxlbWVudHMgaW4gc3ViZ3JvdXBzLCBxdWlja2Zvcm0gcHJlcGVuZHMgZWxlbWVudCBuYW1lcyB3aXRoXG5cdFx0XHQvLyBuYW1lIG9mIHRoZSBwYXJlbnQgZ3JvdXAgZm9sbG93ZWQgYnkgYSBwZXJpb2QsIGdldCByaWQgb2YgdGhhdC5cblx0XHRcdGNvbnN0IGZpZWxkTmFtZU5vcm0gPSBmaWVsZC5uYW1lLnNsaWNlKGZpZWxkLm5hbWUuaW5kZXhPZignLicpICsgMSk7XG5cdFx0XHRzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcblx0XHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdFx0XHRpZiAoZmllbGQuZGF0YXNldC5zaW5nbGUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLmNoZWNrZWQ7IC8vIGJvb2xlYW5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dIHx8PSBbXTtcblx0XHRcdFx0XHRcdGlmIChmaWVsZC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXVtyZXN1bHRbZmllbGROYW1lTm9ybV0ubGVuZ3RoXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSAkKGZpZWxkKS52YWwoKTsgLy8gZmllbGQudmFsdWUgZG9lc24ndCB3b3JrXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RleHQnOiAvLyBmYWxscyB0aHJvdWdoXG5cdFx0XHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZS50cmltKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gY291bGQgYmUgc2VsZWN0LW9uZSwgZGF0ZSwgbnVtYmVyLCBlbWFpbCwgZXRjXG5cdFx0XHRcdFx0aWYgKGZpZWxkLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFsbCBmb3JtIGVsZW1lbnRzIHdpdGggYSBnaXZlbiBmaWVsZCBuYW1lIG9yIElELlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgLSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgZmllbGRzLlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX0gLSBBcnJheSBvZiBtYXRjaGluZyBmb3JtIGVsZW1lbnRzLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRzID0gKGZvcm0sIGZpZWxkTmFtZSkgPT4ge1xuXHRcdGNvbnN0ICRmb3JtID0gJChmb3JtKTtcblx0XHRmaWVsZE5hbWUgPSAkLmVzY2FwZVNlbGVjdG9yKGZpZWxkTmFtZSk7IC8vIHNhbml0aXplIGlucHV0XG5cdFx0bGV0ICRlbGVtZW50cyA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYCk7XG5cdFx0aWYgKCRlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW1lbnRzLnRvQXJyYXkoKTtcblx0XHR9XG5cdFx0JGVsZW1lbnRzID0gJGZvcm0uZmluZChgIyR7ZmllbGROYW1lfWApO1xuXHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHR9O1xuXHQvKipcblx0ICogU2VhcmNoZXMgdGhlIGFycmF5IG9mIGVsZW1lbnRzIGZvciBhIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbiB3aXRoIGEgY2VydGFpblxuXHQgKiBgdmFsdWVgIGF0dHJpYnV0ZSwgYW5kIHJldHVybnMgdGhlIGZpcnN0IHN1Y2ggZWxlbWVudC4gUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnRbXX0gZWxlbWVudEFycmF5IC0gQXJyYXkgb2YgY2hlY2tib3ggb3IgcmFkaW8gZWxlbWVudHMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbHVlIHRvIHNlYXJjaCBmb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldENoZWNrYm94T3JSYWRpbyA9IChlbGVtZW50QXJyYXksIHZhbHVlKSA9PiB7XG5cdFx0Y29uc3QgZm91bmQgPSBlbGVtZW50QXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC52YWx1ZSA9PT0gdmFsdWU7XG5cdFx0fSk7XG5cdFx0aWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmb3VuZFswXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSAmbHQ7ZGl2PiBjb250YWluaW5nIHRoZSBmb3JtIGVsZW1lbnQsIG9yIHRoZSBmb3JtIGVsZW1lbnQgaXRzZWxmXG5cdCAqIE1heSBub3Qgd29yayBhcyBleHBlY3RlZCBvbiBjaGVja2JveGVzIG9yIHJhZGlvcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyID0gKGVsZW1lbnQpID0+IHtcblx0XHQvLyBmb3IgZGl2cywgaGVhZGluZ3MgYW5kIGZpZWxkc2V0cywgdGhlIGNvbnRhaW5lciBpcyB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywganVzdCByZXR1cm4gdGhlIHBhcmVudCBub2RlXG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIEhUTUwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBsYWJlbCBvZiB0aGUgZ2l2ZW4gZm9ybSBlbGVtZW50XG5cdCAqIChtYWlubHkgZm9yIGludGVybmFsIHVzZSkuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBidXR0b25zLCBkaXZzIGFuZCBoZWFkZXJzLCB0aGUgbGFiZWwgaXMgb24gdGhlIGVsZW1lbnQgaXRzZWxmXG5cdFx0aWYgKFxuXHRcdFx0ZWxlbWVudC50eXBlID09PSAnYnV0dG9uJyB8fFxuXHRcdFx0ZWxlbWVudC50eXBlID09PSAnc3VibWl0JyB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdC8vIGZvciBmaWVsZHNldHMsIHRoZSBsYWJlbCBpcyB0aGUgY2hpbGQgPGxlZ2VuZD4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGaWVsZFNldEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xlZ2VuZCcpO1xuXHRcdFx0Ly8gZm9yIHRleHRhcmVhcywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxoNT4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaDUnKTtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxsYWJlbD4gZWxlbWVudFxuXHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIGxhYmVsIHRleHQgb2YgdGhlIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuXHR9O1xuXHQvKipcblx0ICogU2V0cyB0aGUgbGFiZWwgb2YgdGhlIGVsZW1lbnQgdG8gdGhlIGdpdmVuIHRleHQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFRleHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc3VjY2VlZGVkLCBmYWxzZSBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCwgbGFiZWxUZXh0KSA9PiB7XG5cdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdChlbGVtZW50KTtcblx0XHRpZiAoIWxhYmVsRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRsYWJlbEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyB0aGUgZWxlbWVudCdzIGN1cnJlbnQgbGFiZWwsIGFuZCB0ZW1wb3JhcmlseSBzZXRzIHRoZSBsYWJlbCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBvcmFyeUxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHN1Y2NlZWRlZCwgYGZhbHNlYCBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5vdmVycmlkZUVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCB0ZW1wb3JhcnlMYWJlbFRleHQpID0+IHtcblx0XHRpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJywgTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbChlbGVtZW50KSk7XG5cdFx0fVxuXHRcdHJldHVybiBNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCk7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXN0b3JlcyB0aGUgbGFiZWwgc3RvcmVkIGJ5IG92ZXJyaWRlRWxlbWVudExhYmVsLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnJlc2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQpID0+IHtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHQvKipcblx0ICogU2hvd3Mgb3IgaGlkZXMgYSBmb3JtIGVsZW1lbnQgcGx1cyBpdHMgbGFiZWwgYW5kIHRvb2x0aXAuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8alF1ZXJ5fHN0cmluZyl9IGVsZW1lbnQgLSBIVE1ML2pRdWVyeSBlbGVtZW50LCBvciBqUXVlcnkgc2VsZWN0b3Igc3RyaW5nLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt2aXNpYmlsaXR5XSAtIFNraXAgdGhpcyB0byB0b2dnbGUgdmlzaWJpbGl0eS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50VmlzaWJpbGl0eSA9IChlbGVtZW50LCB2aXNpYmlsaXR5KSA9PiB7XG5cdFx0JChlbGVtZW50KS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyB0aGUgcXVlc3Rpb24gbWFyayBpY29uICh3aGljaCBkaXNwbGF5cyB0aGUgdG9vbHRpcCkgbmV4dCB0byBhIGZvcm0gZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnkpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRUb29sdGlwVmlzaWJpbGl0eSA9IChlbGVtZW50LCB2aXNpYmlsaXR5KSA9PiB7XG5cdFx0JChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudENvbnRhaW5lcihlbGVtZW50KSkuZmluZCgnLm1vcmViaXRzLXRvb2x0aXBCdXR0b24nKS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cdC8qKlxuXHQgKiBAZXh0ZXJuYWwgSFRNTEZvcm1FbGVtZW50XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IGNoZWNrZWQgaXRlbXMgaW4gdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEBmdW5jdGlvbiBleHRlcm5hbDpIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRDaGVja2VkID0gZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcblx0XHRjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHNbbmFtZV07XG5cdFx0aWYgKCFlbGVtZW50cykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBlbGVtZW50cztcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudHMuY2hlY2tlZCkge1xuXHRcdFx0XHRyZXR1cm4gW2VsZW1lbnRzLnZhbHVlXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50c1tpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHNbaV0udHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbGVtZW50c1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50c1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50c1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9O1xuXHQvKipcblx0ICogRG9lcyB0aGUgc2FtZSBhcyB7QGxpbmsgSFRNTEZvcm1FbGVtZW50LmdldENoZWNrZWR8Z2V0Q2hlY2tlZH0sIGJ1dCB3aXRoIHVuY2hlY2tlZCBlbGVtZW50cy5cblx0ICpcblx0ICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRVbmNoZWNrZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaW5kIGNoZWNrZWQgcHJvcGVydHkgb2YgZWxlbWVudHMgKGkuZS4gYSBjaGVja2JveFxuXHQgKiBvciBhIHJhZGlvYnV0dG9uKSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBvciBzZWxlY3Qgb3B0aW9ucyB0aGF0IGhhdmUgc2VsZWN0ZWRcblx0ICogc2V0IHRvIHRydWUgKGRvbid0IHRyeSB0byBtaXggc2VsZWN0cyB3aXRoIHJhZGlvL2NoZWNrYm94ZXMpLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIC0gT3B0aW9uYWxseSBzcGVjaWZ5IGVpdGhlciByYWRpbyBvciBjaGVja2JveCAoZm9yXG5cdCAqIHRoZSBldmVudCB0aGF0IGJvdGggY2hlY2tib3hlcyBhbmQgcmFkaW9idXR0b25zIGhhdmUgdGhlIHNhbWUgbmFtZSkuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmdbXX0gLSBDb250YWlucyB0aGUgdmFsdWVzIG9mIGVsZW1lbnRzIHdpdGggdGhlIGdpdmVuIG5hbWVcblx0ICogY2hlY2tlZCBwcm9wZXJ0eSBzZXQgdG8gdHJ1ZS5cblx0ICovXG5cdEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuZ2V0VW5jaGVja2VkID0gZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcblx0XHRjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHNbbmFtZV07XG5cdFx0aWYgKCFlbGVtZW50cykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBlbGVtZW50cztcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmICghb3B0aW9uc1tpXS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdGlmIChvcHRpb25zW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2UgaWYgKCFlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFlbGVtZW50c1tpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHNbaV0udHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbGVtZW50c1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50c1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBlbGVtZW50c1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9O1xuXHQvKipcblx0ICogVXRpbGl0aWVzIHRvIGhlbHAgcHJvY2VzcyBJUCBhZGRyZXNzZXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuaXBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5pcCA9IHtcblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhbiBJUHY2IGFkZHJlc3MgdG8gdGhlIGNhbm9uaWNhbCBmb3JtIHN0b3JlZCBhbmQgdXNlZCBieSBNZWRpYVdpa2kuXG5cdFx0ICogSmF2YVNjcmlwdCB0cmFuc2xhdGlvbiBvZiB0aGUge0BsaW5rIGh0dHBzOi8vZ2Vycml0Lndpa2ltZWRpYS5vcmcvci9wbHVnaW5zL2dpdGlsZXMvbWVkaWF3aWtpL2NvcmUvKy84ZWI2YWMzZTg0ZWEzMzEyZDM5MWNhOTZjMTJjNDllM2FkMDc1M2JiL2luY2x1ZGVzL3V0aWxzL0lQLnBocCMxMzF8YElQOjpzYW5pdGl6ZUlQKClgfVxuXHRcdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHRcdCAqIG5vcm1hbGl6ZWQsIGFuZCBleHBhbmRlZCB0byA4IHdvcmRzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHNhbml0aXplSVB2NjogKGFkZHJlc3MpID0+IHtcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRyaW0oKTtcblx0XHRcdGlmIChhZGRyZXNzID09PSAnJykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjZBZGRyZXNzKGFkZHJlc3MsIHRydWUpKSB7XG5cdFx0XHRcdHJldHVybiBhZGRyZXNzOyAvLyBub3RoaW5nIGVsc2UgdG8gZG8gZm9yIElQdjQgYWRkcmVzc2VzIG9yIGludmFsaWQgb25lc1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIGFueSB3aGl0ZXNwYWNlcywgY29udmVydCB0byB1cHBlciBjYXNlXG5cdFx0XHRhZGRyZXNzID0gYWRkcmVzcy50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0Ly8gRXhwYW5kIHplcm8gYWJicmV2aWF0aW9uc1xuXHRcdFx0Y29uc3QgYWJicmV2UG9zID0gYWRkcmVzcy5pbmRleE9mKCc6OicpO1xuXHRcdFx0aWYgKGFiYnJldlBvcyA+IC0xKSB7XG5cdFx0XHRcdC8vIFdlIGtub3cgdGhpcyBpcyB2YWxpZCBJUHY2LiBGaW5kIHRoZSBsYXN0IGluZGV4IG9mIHRoZVxuXHRcdFx0XHQvLyBhZGRyZXNzIGJlZm9yZSBhbnkgQ0lEUiBudW1iZXIgKGUuZy4gXCJhOmI6Yzo6LzI0XCIpLlxuXHRcdFx0XHRjb25zdCBDSURSU3RhcnQgPSBhZGRyZXNzLmluZGV4T2YoJy8nKTtcblx0XHRcdFx0Y29uc3QgYWRkcmVzc0VuZCA9IENJRFJTdGFydCA9PT0gLTEgPyBhZGRyZXNzLmxlbmd0aCAtIDEgOiBDSURSU3RhcnQgLSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgYmVnaW5uaW5nLi4uXG5cdFx0XHRcdGxldCByZXBlYXQ7XG5cdFx0XHRcdGxldCBleHRyYTtcblx0XHRcdFx0bGV0IHBhZDtcblx0XHRcdFx0aWYgKGFiYnJldlBvcyA9PT0gMCkge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICcwOic7XG5cdFx0XHRcdFx0ZXh0cmEgPSBhZGRyZXNzID09PSAnOjonID8gJzAnIDogJyc7IC8vIGZvciB0aGUgYWRkcmVzcyAnOjonXG5cdFx0XHRcdFx0cGFkID0gOTsgLy8gNysyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgZW5kLi4uXG5cdFx0XHRcdH0gZWxzZSBpZiAoYWJicmV2UG9zID09PSBhZGRyZXNzRW5kIC0gMSkge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnJztcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGluIHRoZSBtaWRkbGUuLi5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRcdGV4dHJhID0gJzonO1xuXHRcdFx0XHRcdHBhZCA9IDg7IC8vIDYrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgcmVwbGFjZW1lbnQgPSByZXBlYXQ7XG5cdFx0XHRcdHBhZCAtPSBhZGRyZXNzLnNwbGl0KCc6JykubGVuZ3RoIC0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYWQ7IGkrKykge1xuXHRcdFx0XHRcdHJlcGxhY2VtZW50ICs9IHJlcGVhdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXBsYWNlbWVudCArPSBleHRyYTtcblx0XHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MucmVwbGFjZSgnOjonLCByZXBsYWNlbWVudCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgbGVhZGluZyB6ZXJvcyBmcm9tIGVhY2ggYmxvYyBhcyBuZWVkZWRcblx0XHRcdHJldHVybiBhZGRyZXNzLnJlcGxhY2UoLyhefDopMCsoWzAtOUEtRmEtZl17MSw0fSkvZywgJyQxJDInKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSBpZiB0aGUgZ2l2ZW4gSVAgYWRkcmVzcyBpcyBhIHJhbmdlLiAgSnVzdCBjb25qb2luc1xuXHRcdCAqIGBtdy51dGlsLmlzSVBBZGRyZXNzYCB3aXRoIGFuZCB3aXRob3V0IHRoZSBgYWxsb3dCbG9ja2Agb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBpZiBnaXZlbiBhIHZhbGlkIElQIGFkZHJlc3MgcmFuZ2UsIGZhbHNlIG90aGVyd2lzZS5cblx0XHQgKi9cblx0XHRpc1JhbmdlOiAoaXApID0+IHtcblx0XHRcdHJldHVybiBtdy51dGlsLmlzSVBBZGRyZXNzKGlwLCB0cnVlKSAmJiAhbXcudXRpbC5pc0lQQWRkcmVzcyhpcCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDaGVjayB0aGF0IGFuIElQIHJhbmdlIGlzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMuICBNb3N0IGxpa2VseSB0byBiZSB1c2VmdWxcblx0XHQgKiBpbiBjb25qdW5jdGlvbiB3aXRoIGB3Z1JlbGV2YW50VXNlck5hbWVgLiAgQ0lEUiBsaW1pdHMgYXJlIGhhcmRjb2RlZCBhcyAvMTZcblx0XHQgKiBmb3IgSVB2NCBhbmQgLzMyIGZvciBJUHY2LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBmb3IgdmFsaWQgcmFuZ2VzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMsXG5cdFx0ICogb3RoZXJ3aXNlIGZhbHNlIChyYW5nZXMgb3V0c2lkZSB0aGUgbGltaXQsIHNpbmdsZSBJUHMsIG5vbi1JUHMpLlxuXHRcdCAqL1xuXHRcdHZhbGlkQ0lEUjogKGlwKSA9PiB7XG5cdFx0XHRpZiAoTW9yZWJpdHMuaXAuaXNSYW5nZShpcCkpIHtcblx0XHRcdFx0Y29uc3Qgc3VibmV0ID0gTnVtYmVyLnBhcnNlSW50KGlwLm1hdGNoKC9cXC8oXFxkezEsM30pJC8pWzFdLCAxMCk7XG5cdFx0XHRcdGlmIChzdWJuZXQpIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgYmUgcmVkdW5kYW50XG5cdFx0XHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRcdGlmIChzdWJuZXQgPj0gMzIpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdWJuZXQgPj0gMTYpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSAvNjQgc3VibmV0IGZvciBhbiBJUHY2IGFkZHJlc3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXB2NiAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBhIHN1Ym5ldC5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd9IC0gRmFsc2UgaWYgbm90IElQdjYgb3IgYmlnZ2VyIHRoYW4gYSA2NCxcblx0XHQgKiBvdGhlcndpc2UgdGhlIChzYW5pdGl6ZWQpIC82NCBhZGRyZXNzLlxuXHRcdCAqL1xuXHRcdGdldDY0OiAoaXB2NikgPT4ge1xuXHRcdFx0aWYgKCFpcHY2IHx8ICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoaXB2NiwgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3VibmV0TWF0Y2ggPSBpcHY2Lm1hdGNoKC9cXC8oXFxkezEsM30pJC8pO1xuXHRcdFx0aWYgKHN1Ym5ldE1hdGNoICYmIE51bWJlci5wYXJzZUludChzdWJuZXRNYXRjaFsxXSwgMTApIDwgNjQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aXB2NiA9IE1vcmViaXRzLmlwLnNhbml0aXplSVB2NihpcHY2KTtcblx0XHRcdGNvbnN0IGlwUmVnZXggPSAvXigoPzpbMC05QS1GXXsxLDR9Oil7NH0pKD86WzAtOUEtRl17MSw0fTopezN9WzAtOUEtRl17MSw0fSg/OlxcL1xcZHsxLDN9KT8kLztcblx0XHRcdHJldHVybiBpcHY2LnJlcGxhY2UoaXBSZWdleCwgJyQxJy5jb25jYXQoJzA6MDowOjAvNjQnKSk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBzdHJpbmdzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLnN0cmluZ1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLnN0cmluZyA9IHtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHR0b1VwcGVyQ2FzZUZpcnN0Q2hhcjogKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHR0b0xvd2VyQ2FzZUZpcnN0Q2hhcjogKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHaXZlcyBhbiBhcnJheSBvZiBzdWJzdHJpbmdzIG9mIGBzdHJgIC0gc3RhcnRpbmcgd2l0aCBgc3RhcnRgIGFuZFxuXHRcdCAqIGVuZGluZyB3aXRoIGBlbmRgIC0gd2hpY2ggaXMgbm90IGluIGBza2lwbGlzdGAuICBJbnRlbmRlZCBmb3IgdXNlXG5cdFx0ICogb24gd2lraXRleHQgd2l0aCB0ZW1wbGF0ZXMgb3IgbGlua3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGVuZFxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ1tdfHN0cmluZyl9IFtza2lwbGlzdF1cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nW119XG5cdFx0ICogQHRocm93cyBJZiB0aGUgYHN0YXJ0YCBhbmQgYGVuZGAgc3RyaW5ncyBhcmVuJ3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLlxuXHRcdCAqIEB0aHJvd3MgSWYgYHNraXBsaXN0YCBpc24ndCBhbiBhcnJheSBvciBzdHJpbmdcblx0XHQgKi9cblx0XHRzcGxpdFdlaWdodGVkQnlLZXlzOiAoc3RyLCBzdGFydCwgZW5kLCBza2lwbGlzdCkgPT4ge1xuXHRcdFx0aWYgKHN0YXJ0Lmxlbmd0aCAhPT0gZW5kLmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3N0YXJ0IG1hcmtlciBhbmQgZW5kIG1hcmtlciBtdXN0IGJlIG9mIHRoZSBzYW1lIGxlbmd0aCcpO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGxldmVsID0gMDtcblx0XHRcdGxldCBpbml0aWFsID0gbnVsbDtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHNraXBsaXN0KSkge1xuXHRcdFx0XHRpZiAoc2tpcGxpc3QgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHNraXBsaXN0ID0gW107XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNraXBsaXN0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHNraXBsaXN0ID0gW3NraXBsaXN0XTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub24tYXBwbGljYWJsZSBza2lwbGlzdCBwYXJhbWV0ZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHNraXBsaXN0KSB7XG5cdFx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgZWxlbWVudC5sZW5ndGgpID09PSBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRpICs9IGVsZW1lbnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBzdGFydC5sZW5ndGgpID09PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChpbml0aWFsID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpbml0aWFsID0gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KytsZXZlbDtcblx0XHRcdFx0XHRpICs9IHN0YXJ0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyLnNsaWNlKGksIGkgKyBlbmQubGVuZ3RoKSA9PT0gZW5kKSB7XG5cdFx0XHRcdFx0LS1sZXZlbDtcblx0XHRcdFx0XHRpICs9IGVuZC5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghbGV2ZWwgJiYgaW5pdGlhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHN0ci5zbGljZShpbml0aWFsLCBpICsgMSk7XG5cdFx0XHRcdFx0aW5pdGlhbCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBGb3JtYXRzIGZyZWVmb3JtIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGRlbGV0aW9uL290aGVyXG5cdFx0ICogdGVtcGxhdGVzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHN1YnN0aXR1dGVkLCAoZS5nLiBQUk9ELCBYRkQsIFJQUCkuXG5cdFx0ICogSGFuZGxlcyBgfGAgb3V0c2lkZSBhIG5vd2lraSB0YWcuXG5cdFx0ICogT3B0aW9uYWxseSwgYWxzbyBhZGRzIGEgc2lnbmF0dXJlIGlmIG5vdCBwcmVzZW50IGFscmVhZHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYWRkU2lnXVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0UmVhc29uVGV4dDogKHN0ciwgYWRkU2lnKSA9PiB7XG5cdFx0XHRsZXQgcmVhc29uID0gKHN0ciB8fCAnJykudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihyZWFzb24pO1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8bm8nLmNvbmNhdCgnd2lraScsICc+JyksICc8L25vJy5jb25jYXQoJ3dpa2knLCAnPicpKTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoL1xcfC9nLCAne3snLmNvbmNhdCgnc3Vic3Q6JywgJyF9fScpKTtcblx0XHRcdHJlYXNvbiA9IHVuYmluZGVyLnJlYmluZCgpO1xuXHRcdFx0aWYgKGFkZFNpZykge1xuXHRcdFx0XHRjb25zdCBzaWcgPSAnfn4nLmNvbmNhdCgnfn4nKTtcblx0XHRcdFx0Y29uc3Qgc2lnSW5kZXggPSByZWFzb24ubGFzdEluZGV4T2Yoc2lnKTtcblx0XHRcdFx0aWYgKHNpZ0luZGV4ID09PSAtMSB8fCBzaWdJbmRleCAhPT0gcmVhc29uLmxlbmd0aCAtIHNpZy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZWFzb24gKz0gYCAke3NpZ31gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVhc29uLnRyaW0oKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgYSBcInJlYXNvblwiIChmcm9tIGEgdGV4dGFyZWEpIGZvciBpbmNsdXNpb24gaW4gYSB1c2Vyc3BhY2Vcblx0XHQgKiBsb2cuICBSZXBsYWNlcyBuZXdsaW5lcyB3aXRoIHt7UGJ9fSwgYW5kIGFkZHMgYW4gZXh0cmEgYCNgIGJlZm9yZVxuXHRcdCAqIGxpc3QgaXRlbXMgZm9yIHByb3BlciBmb3JtYXR0aW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0UmVhc29uRm9yTG9nOiAoc3RyKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdHJcblx0XHRcdFx0XHQvLyBoYW5kbGUgbGluZSBicmVha3MsIHdoaWNoIG90aGVyd2lzZSBicmVhayBudW1iZXJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxuKy9nLCAne3twYn19Jylcblx0XHRcdFx0XHQvLyBwdXQgYW4gZXh0cmEgIyBpbiBmcm9udCBiZWZvcmUgYnVsbGV0ZWQgb3IgbnVtYmVyZWQgbGlzdCBpdGVtc1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9eKCMrKS9nbSwgJyMkMScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oXFwqKykvZ20sICcjJDEnKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIExpa2UgYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSgpYCwgYnV0IGVzY2FwZXMgYW55IGRvbGxhciBzaWducyBpblxuXHRcdCAqIHRoZSByZXBsYWNlbWVudCBzdHJpbmcuICBVc2VmdWwgd2hlbiB0aGUgdGhlIHJlcGxhY2VtZW50IHN0cmluZyBpc1xuXHRcdCAqIGFyYml0cmFyeSwgc3VjaCBhcyBhIHVzZXJuYW1lIG9yIGZyZWVmb3JtIHVzZXIgaW5wdXQsIGFuZCBjb3VsZFxuXHRcdCAqIGNvbnRhaW4gZG9sbGFyIHNpZ25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRleHQgaW4gd2hpY2ggdG8gcmVwbGFjZS5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlbWVudFxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0c2FmZVJlcGxhY2U6IChzdHJpbmcsIHBhdHRlcm4sIHJlcGxhY2VtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQucmVwbGFjZSgvXFwkL2csICckJCQkJykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSB1c2VyLXByb3ZpZGVkIGV4cGlyYXRpb24gd2lsbCBiZSBjb25zaWRlcmVkIGFuXG5cdFx0ICogaW5maW5pdGUtbGVuZ3RoIGJ5IE1XLlxuXHRcdCAqXG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL1Q2ODY0Nn1cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBleHBpcnlcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRpc0luZmluaXR5OiAoZXhwaXJ5KSA9PiB7XG5cdFx0XHRyZXR1cm4gWydpbmRlZmluaXRlJywgJ2luZmluaXR5JywgJ2luZmluaXRlJywgJ25ldmVyJ10uaW5jbHVkZXMoZXhwaXJ5KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEVzY2FwZXMgYSBzdHJpbmcgdG8gYmUgdXNlZCBpbiBhIFJlZ0V4cCwgcmVwbGFjaW5nIHNwYWNlcyBhbmRcblx0XHQgKiB1bmRlcnNjb3JlcyB3aXRoIGBbXyBdYCBhcyB0aGV5IGFyZSBvZnRlbiBlcXVpdmFsZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBTdHJpbmcgdG8gYmUgZXNjYXBlZC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBlc2NhcGVkIHRleHQuXG5cdFx0ICovXG5cdFx0ZXNjYXBlUmVnRXhwOiAodGV4dCkgPT4ge1xuXHRcdFx0cmV0dXJuIG13LnV0aWwuZXNjYXBlUmVnRXhwKHRleHQpLnJlcGxhY2UoLyB8Xy9nLCAnW18gXScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogZm9ybWF0VGltZVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSB0aW1lIFRoZSBzdHJpbmcgdG8gZm9yYW10XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRUaW1lOiAodGltZSkgPT4ge1xuXHRcdFx0bGV0IG07XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypzZWMob25kKT9zP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeenkmA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyptaW4odXRlKT9zP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWIhmA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypob3Vycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqZGF5cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lpKlgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqd2Vla3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3aW5kb3cud2dVTFMoJ+WRqCcsICfpgLEnKTtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1vbnRocz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5Liq5pyIJywgJ+WAi+aciCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqeWVhcnM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195bm0YDtcblx0XHRcdH1cblx0XHRcdGlmIChNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eSh0aW1lLnRyaW0oKSkpIHtcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy53Z1VMUygn5peg6ZmQ5pyfJywgJ+eEoemZkOacnycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBcHBlbmQgcHVuY3R1YXRpb24gdG8gYSBzdHJpbmcgd2hlbiBpdCdzIG1pc3Npbmdcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHVuY3R1YXRpb25cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGFwcGVuZFB1bmN0dWF0aW9uOiAoc3RyLCBwdW5jdHVhdGlvbikgPT4ge1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cHVuY3R1YXRpb24gPSAn44CCJztcblx0XHRcdH1cblx0XHRcdGlmIChzdHIuc2VhcmNoKC9bLj8hO+OAgu+8n++8ge+8m10kLykgPT09IC0xKSB7XG5cdFx0XHRcdHN0ciArPSBwdW5jdHVhdGlvbjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBhcnJheXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuYXJyYXlcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5hcnJheSA9IHtcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggZHVwbGljYXRlcyByZW1vdmVkLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHR1bmlxOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LnVuaXEnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pID09PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBub24tZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggdGhlIGZpcnN0IGluc3RhbmNlIG9mIGVhY2ggdmFsdWVcblx0XHQgKiByZW1vdmVkOyBzdWJzZXF1ZW50IGluc3RhbmNlcyBvZiB0aG9zZSB2YWx1ZXMgKGR1cGxpY2F0ZXMpIHJlbWFpbi5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0ZHVwczogKGFycikgPT4ge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS5kdXBzJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSAhPT0gaWR4O1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBCcmVhayB1cCBhbiBhcnJheSBpbnRvIHNtYWxsZXIgYXJyYXlzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSBTaXplIG9mIGVhY2ggY2h1bmsgKGV4Y2VwdCB0aGUgbGFzdCwgd2hpY2ggY291bGQgYmUgZGlmZmVyZW50KS5cblx0XHQgKiBAcmV0dXJucyB7QXJyYXlbXX0gQW4gYXJyYXkgY29udGFpbmluZyB0aGUgc21hbGxlciwgY2h1bmtlZCBhcnJheXMuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdGNodW5rOiAoYXJyLCBzaXplKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmNodW5rJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInIHx8IHNpemUgPD0gMCkge1xuXHRcdFx0XHQvLyBwcmV0dHkgaW1wb3NzaWJsZSB0byBkbyBhbnl0aGluZyA6KVxuXHRcdFx0XHRyZXR1cm4gW2Fycl07IC8vIHdlIHJldHVybiBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHRoaXMgYXJyYXkuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG51bUNodW5rcyA9IE1hdGguY2VpbChhcnIubGVuZ3RoIC8gc2l6ZSk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHtcblx0XHRcdFx0bGVuZ3RoOiBudW1DaHVua3MsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2h1bmtzOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gYXJyLnNsaWNlKGkgKiBzaXplLCAoaSArIDEpICogc2l6ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gZW5oYW5jZSBzZWxlY3QyIG1lbnVzLiBTZWUgdHdpbmtsZXdhcm4sIHR3aW5rbGVibG9ja1xuXHQgKiBmb3Igc2FtcGxlIHVzYWdlcy5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zZWxlY3QyLm9yZy99XG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc2VsZWN0MlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQHJlcXVpcmVzIGpxdWVyeS5zZWxlY3QyXG5cdCAqL1xuXHRNb3JlYml0cy5zZWxlY3QyID0ge1xuXHRcdG1hdGNoZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIGluIHdoaWNoIGlmIHRoZSBvcHRncm91cCBuYW1lIG1hdGNoZXMsIGFsbCBvcHRpb25zIGluIHRoYXRcblx0XHRcdCAqIGdyb3VwIGFyZSBzaG93biwgbGlrZSBpbiBqcXVlcnkuY2hvc2VuLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0b3B0Z3JvdXBGdWxsOiAocGFyYW1zLCBkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsTWF0Y2hlciA9ICQuZm4uc2VsZWN0Mi5kZWZhdWx0cy5kZWZhdWx0cy5tYXRjaGVyO1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE1hdGNoZXIocGFyYW1zLCBkYXRhKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiBwYXJhbXMudGVybSAmJiBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhwYXJhbXMudGVybS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0XHRcdHJlc3VsdC5jaGlsZHJlbiA9IGRhdGEuY2hpbGRyZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIHRoYXQgbWF0Y2hlcyBmcm9tIHRoZSBiZWdpbm5pbmcgb2Ygd29yZHMgb25seS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHRcdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0XHQgKi9cblx0XHRcdHdvcmRCZWdpbm5pbmc6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IXBhcmFtcy50ZXJtIHx8XG5cdFx0XHRcdFx0KHJlc3VsdCAmJiBuZXcgUmVnRXhwKGBcXFxcYiR7bXcudXRpbC5lc2NhcGVSZWdFeHAocGFyYW1zLnRlcm0pfWAsICdpJykudGVzdChyZXN1bHQudGV4dCkpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVW5kZXJsaW5lIG1hdGNoZWQgcGFydCBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0U2VhcmNoTWF0Y2hlczogKGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHNlYXJjaFRlcm0gPSBNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnk7XG5cdFx0XHRpZiAoIXNlYXJjaFRlcm0gfHwgZGF0YS5sb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpZHggPSBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSk7XG5cdFx0XHRpZiAoaWR4IDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS50ZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKDAsIGlkeCksXG5cdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0LmNzcygndGV4dC1kZWNvcmF0aW9uJywgJ3VuZGVybGluZScpXG5cdFx0XHRcdFx0LnRleHQoZGF0YS50ZXh0LnNsaWNlKGlkeCwgaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpKSxcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKGlkeCArIHNlYXJjaFRlcm0ubGVuZ3RoKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEludGVyY2VwdCBxdWVyeSBhcyBpdCBpcyBoYXBwZW5pbmcsIGZvciB1c2UgaW4gaGlnaGxpZ2h0U2VhcmNoTWF0Y2hlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0ICovXG5cdFx0cXVlcnlJbnRlcmNlcHRvcjogKHBhcmFtcykgPT4ge1xuXHRcdFx0TW9yZWJpdHMuc2VsZWN0MlNlYXJjaFF1ZXJ5ID0gcGFyYW1zICYmIHBhcmFtcy50ZXJtO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogT3BlbiBkcm9wZG93biBhbmQgYmVnaW4gc2VhcmNoIHdoZW4gdGhlIGAuc2VsZWN0Mi1zZWxlY3Rpb25gIGhhc1xuXHRcdCAqIGZvY3VzIGFuZCBhIGtleSBpcyBwcmVzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldlxuXHRcdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzMyNzkjaXNzdWVjb21tZW50LTQ0MjUyNDE0N31cblx0XHQgKi9cblx0XHRhdXRvU3RhcnQ6IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LndoaWNoIDwgNDgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHRhcmdldCA9ICQoZXYudGFyZ2V0KS5jbG9zZXN0KCcuc2VsZWN0Mi1jb250YWluZXInKTtcblx0XHRcdGlmICghdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucHJldigpO1xuXHRcdFx0dGFyZ2V0LnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdGNvbnN0IHNlYXJjaCA9IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuZHJvcGRvd24uJHNlYXJjaCB8fCB0YXJnZXQuZGF0YSgnc2VsZWN0MicpLnNlbGVjdGlvbi4kc2VhcmNoO1xuXHRcdFx0Ly8gVXNlIERPTSAuZm9jdXMoKSB0byB3b3JrIGFyb3VuZCBhIGpRdWVyeSAzLjYuMCByZWdyZXNzaW9uIChodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2lzc3Vlcy81OTkzKVxuXHRcdFx0c2VhcmNoWzBdLmZvY3VzKCk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFRlbXBvcmFyaWx5IGhpZGUgYSBwYXJ0IG9mIGEgc3RyaW5nIHdoaWxlIHByb2Nlc3NpbmcgdGhlIHJlc3Qgb2YgaXQuXG5cdCAqIFVzZWQgYnkge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UjY29tbWVudE91dEltYWdlfE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UuY29tbWVudE91dEltYWdlfS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIGluaXRpYWwgdGV4dCB0byBwcm9jZXNzLlxuXHQgKiBAZXhhbXBsZSBjb25zdCB1ID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKCdIZWxsbyB3b3JsZCA8IS0tIHdvcmxkIC0tPiB3b3JsZCcpO1xuXHQgKiB1LnVuYmluZCgnPCEtLScsICctLT4nKTsgLy8gdGV4dCBpbnNpZGUgY29tbWVudCByZW1haW5zIGludGFjdFxuXHQgKiB1LmNvbnRlbnQgPSB1LmNvbnRlbnQucmVwbGFjZSgvd29ybGQvZywgJ2VhcnRoJyk7XG5cdCAqIHUucmViaW5kKCk7IC8vIGdpdmVzICdIZWxsbyBlYXJ0aCA8IS0tIHdvcmxkIC0tPiBlYXJ0aCdcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdC8qKiBUaGUgdGV4dCBiZWluZyBwcm9jZXNzZWQuICovXG5cdFx0dGhpcy5jb250ZW50ID0gc3RyaW5nO1xuXHRcdHRoaXMuY291bnRlciA9IDA7XG5cdFx0dGhpcy5oaXN0b3J5ID0ge307XG5cdFx0dGhpcy5wcmVmaXggPSBgJVVOSVE6OiR7TWF0aC5yYW5kb20oKX06OmA7XG5cdFx0dGhpcy5wb3N0Zml4ID0gJzo6VU5JUSUnO1xuXHR9O1xuXHRNb3JlYml0cy51bmJpbmRlci5wcm90b3R5cGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogSGlkZSB0aGUgcmVnaW9uIGVuY2Fwc3VsYXRlZCBieSB0aGUgYHByZWZpeGAgYW5kIGBwb3N0Zml4YCBmcm9tXG5cdFx0ICogc3RyaW5nIHByb2Nlc3NpbmcuICBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIHdpbGwgYmUgdXNlZCBpbiBhXG5cdFx0ICogUmVnRXhwLCBzbyBpdGVtcyB0aGF0IG5lZWQgZXNjYXBpbmcgc2hvdWxkIGJlIHVzZSBgXFxcXGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHBvc3RmaXhcblx0XHQgKiBAdGhyb3dzIElmIGVpdGhlciBgcHJlZml4YCBvciBgcG9zdGZpeGAgaXMgbWlzc2luZy5cblx0XHQgKi9cblx0XHR1bmJpbmQocHJlZml4LCBwb3N0Zml4KSB7XG5cdFx0XHRpZiAoIXByZWZpeCB8fCAhcG9zdGZpeCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0JvdGggcHJlZml4IGFuZCBwb3N0Zml4IG11c3QgYmUgcHJvdmlkZWQnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgJHtwcmVmaXh9KFtcXFxcc1xcXFxTXSo/KSR7cG9zdGZpeH1gLCAnZycpO1xuXHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnJlcGxhY2UocmUsIE1vcmViaXRzLnVuYmluZGVyLmdldENhbGxiYWNrKHRoaXMpKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlc3RvcmUgdGhlIGhpZGRlbiBwb3J0aW9uIG9mIHRoZSBgY29udGVudGAgc3RyaW5nLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHByb2Nlc3NlZCBvdXRwdXQuXG5cdFx0ICovXG5cdFx0cmViaW5kKCkge1xuXHRcdFx0bGV0IHtjb250ZW50fSA9IHRoaXM7XG5cdFx0XHRmb3IgKGNvbnN0IGN1cnJlbnQgaW4gdGhpcy5oaXN0b3J5KSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bih0aGlzLmhpc3RvcnksIGN1cnJlbnQpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShjdXJyZW50LCB0aGlzLmhpc3RvcnlbY3VycmVudF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fSxcblx0XHRwcmVmaXg6IG51bGwsXG5cdFx0Ly8gJVVOSVE6OjAuNTk1NTk4MTY0NDkzODMyNDo6XG5cdFx0cG9zdGZpeDogbnVsbCxcblx0XHQvLyA6OlVOSVElXG5cdFx0Y29udGVudDogbnVsbCxcblx0XHQvLyBzdHJpbmdcblx0XHRjb3VudGVyOiBudWxsLFxuXHRcdC8vIDArK1xuXHRcdGhpc3Rvcnk6IG51bGwsIC8vIHt9XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMudW5iaW5kZXJcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyLmdldENhbGxiYWNrID0gKHNlbGYpID0+IHtcblx0XHRyZXR1cm4gKG1hdGNoKSA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gc2VsZi5wcmVmaXggKyBzZWxmLmNvdW50ZXIgKyBzZWxmLnBvc3RmaXg7XG5cdFx0XHRzZWxmLmhpc3RvcnlbY3VycmVudF0gPSBtYXRjaDtcblx0XHRcdCsrc2VsZi5jb3VudGVyO1xuXHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5kYXRlICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGRhdGUgb2JqZWN0IHdpdGggZW5oYW5jZWQgcHJvY2Vzc2luZyBjYXBhYmlsaXRpZXMsIGEgbGFcblx0ICoge0BsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL3xtb21lbnQuanN9LiBNZWRpYVdpa2kgdGltZXN0YW1wIGZvcm1hdCBpcyBhbHNvXG5cdCAqIGFjY2VwdGFibGUsIGluIGFkZGl0aW9uIHRvIGV2ZXJ5dGhpbmcgdGhhdCBKUyBEYXRlKCkgYWNjZXB0cy5cblx0ICpcblx0ICogQHBhcmFtIHsuLi5hbnl9IGFyZ3Ncblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Ly8gQ2hlY2sgTWVkaWFXaWtpIGZvcm1hdHNcblx0XHQvLyBNdXN0IGJlIGZpcnN0IHNpbmNlIGZpcmVmb3ggZXJyb25lb3VzbHkgYWNjZXB0cyB0aGUgdGltZXN0YW1wXG5cdFx0Ly8gZm9ybWF0LCBzYW5zIHRpbWV6b25lIChTZWUgYWxzbzogIzkyMSwgIzkzNiwgIzExNzQsICMxMTg3KSwgYW5kIHRoZVxuXHRcdC8vIDE0LWRpZ2l0IHN0cmluZyB3aWxsIGJlIGludGVycHJldGVkIGRpZmZlcmVudGx5LlxuXHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y29uc3QgW3BhcmFtXSA9IGFyZ3M7XG5cdFx0XHRpZiAoL15cXGR7MTR9JC8udGVzdChwYXJhbSkpIHtcblx0XHRcdFx0Ly8gWVlZWU1NRERISG1tc3Ncblx0XHRcdFx0Y29uc3QgZGlnaXRNYXRjaCA9IC8oXFxkezR9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLmV4ZWMocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGlnaXRNYXRjaCkge1xuXHRcdFx0XHRcdC8vIC4uLi4uIHllYXIgLi4uIG1vbnRoIC4uIGRhdGUgLi4uIGhvdXIgLi4uLiBtaW51dGUgLi4uLi4gc2Vjb25kXG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKFxuXHRcdFx0XHRcdFx0UmVmbGVjdC5hcHBseShEYXRlLlVUQywgbnVsbCwgW1xuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzFdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzJdIC0gMSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFszXSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs0XSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs1XSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs2XSxcblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIFdpa2l0ZXh0IHNpZ25hdHVyZSB0aW1lc3RhbXBcblx0XHRcdFx0Y29uc3QgZGF0ZVBhcnRzID0gTW9yZWJpdHMubDEwbi5zaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGF0ZVBhcnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGRhdGVQYXJ0cykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghdGhpcy5fZCkge1xuXHRcdFx0Ly8gVHJ5IHN0YW5kYXJkIGRhdGVcblx0XHRcdHRoaXMuX2QgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KERhdGUsIFtEYXRlLCAuLi5nZW5lcmF0ZUFycmF5KGFyZ3MpXSkpKCk7XG5cdFx0fVxuXHRcdC8vIFN0aWxsIG5vP1xuXHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdG13LmxvZy53YXJuKCdJbnZhbGlkIE1vcmViaXRzLmRhdGUgaW5pdGlhbGlzYXRpb246JywgYXJncyk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogTG9jYWxpemVkIHN0cmluZ3MgZm9yIGRhdGUgcHJvY2Vzc2luZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLmRhdGVcblx0ICogQHR5cGUge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbW9udGhzU2hvcnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzU2hvcnRcblx0ICogQHByb3BlcnR5IHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn0gcmVsYXRpdmVUaW1lc1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhID0ge1xuXHRcdC8vIG1lc3NhZ2UgbmFtZXMgaGVyZSBjb3JyZXNwb25kIHRvIE1lZGlhV2lraSBtZXNzYWdlIG5hbWVzXG5cdFx0Ly8gTm8gaTE4biBhdCB0aGlzIHRpbWVcblx0XHRtb250aHM6IFsnMeaciCcsICcy5pyIJywgJzPmnIgnLCAnNOaciCcsICc15pyIJywgJzbmnIgnLCAnN+aciCcsICc45pyIJywgJznmnIgnLCAnMTDmnIgnLCAnMTHmnIgnLCAnMTLmnIgnXSxcblx0XHRtb250aHNTaG9ydDogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdGRheXM6IFsn5pif5pyf5pelJywgJ+aYn+acn+S4gCcsICfmmJ/mnJ/kuownLCAn5pif5pyf5LiJJywgJ+aYn+acn+WbmycsICfmmJ/mnJ/kupQnLCAn5pif5pyf5YWtJ10sXG5cdFx0ZGF5c1Nob3J0OiBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddLFxuXHRcdHJlbGF0aXZlVGltZXM6IHtcblx0XHRcdHRoaXNEYXk6ICdb5LuK5aSpXUEgaGg6bW0nLFxuXHRcdFx0cHJldkRheTogJ1vmmKjlpKldQSBoaDptbScsXG5cdFx0XHRuZXh0RGF5OiAnW+aYjuWkqV1BIGhoOm1tJyxcblx0XHRcdHRoaXNXZWVrOiAnZGRkZEEgaGg6bW0nLFxuXHRcdFx0cGFzdFdlZWs6ICdb5LiKXWRkZGRBIGhoOm1tJyxcblx0XHRcdG90aGVyOiAnWVlZWS1NTS1ERCcsXG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIE1hcCB1bml0cyB3aXRoIGdldHRlci9zZXR0ZXIgZnVuY3Rpb24gbmFtZXMsIGZvciBgYWRkYCBhbmQgYHN1YnRyYWN0YFxuXHQgKiBtZXRob2RzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWNvbmRzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtaW51dGVzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob3Vyc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gd2Vla3Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30geWVhcnNcblx0ICovXG5cdE1vcmViaXRzLmRhdGUudW5pdE1hcCA9IHtcblx0XHRzZWNvbmRzOiAnU2Vjb25kcycsXG5cdFx0bWludXRlczogJ01pbnV0ZXMnLFxuXHRcdGhvdXJzOiAnSG91cnMnLFxuXHRcdGRheXM6ICdEYXRlJyxcblx0XHR3ZWVrczogJ1dlZWsnLFxuXHRcdC8vIE5vdCBhIGZ1bmN0aW9uIGJ1dCBoYW5kbGVkIGluIGBhZGRgIHRocm91Z2ggY3VubmluZyB1c2Ugb2YgbXVsdGlwbGljYXRpb25cblx0XHRtb250aHM6ICdNb250aCcsXG5cdFx0eWVhcnM6ICdGdWxsWWVhcicsXG5cdH07XG5cdE1vcmViaXRzLmRhdGUucHJvdG90eXBlID0ge1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cblx0XHRpc1ZhbGlkKCkge1xuXHRcdFx0cmV0dXJuICFOdW1iZXIuaXNOYU4odGhpcy5nZXRUaW1lKCkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzQmVmb3JlKGRhdGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRpbWUoKSA8IGRhdGUuZ2V0VGltZSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzQWZ0ZXIoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldFVUQ01vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDTW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldFVUQ01vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNbdGhpcy5nZXRNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldE1vbnRoTmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzU2hvcnRbdGhpcy5nZXRNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXRVVENEYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENEYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXRVVENEYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzW3RoaXMuZ2V0RGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0RGF5TmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1Nob3J0W3RoaXMuZ2V0RGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdGFkZChudW1iZXIsIHVuaXQpIHtcblx0XHRcdGxldCBudW0gPSBOdW1iZXIucGFyc2VJbnQobnVtYmVyLCAxMCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0aWYgKE51bWJlci5pc05hTihudW0pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgbnVtYmVyIFwiJHtudW1iZXJ9XCIgcHJvdmlkZWQuYCk7XG5cdFx0XHR9XG5cdFx0XHR1bml0ID0gdW5pdC50b0xvd2VyQ2FzZSgpOyAvLyBub3JtYWxpemVcblx0XHRcdGNvbnN0IHt1bml0TWFwfSA9IE1vcmViaXRzLmRhdGU7XG5cdFx0XHRsZXQgdW5pdE5vcm0gPSB1bml0TWFwW3VuaXRdIHx8IHVuaXRNYXBbYCR7dW5pdH1zYF07IC8vIHNvIHRoYXQgYm90aCBzaW5ndWxhciBhbmQgIHBsdXJhbCBmb3JtcyB3b3JrXG5cdFx0XHRpZiAodW5pdE5vcm0pIHtcblx0XHRcdFx0Ly8gTm8gYnVpbHQtaW4gd2VlayBmdW5jdGlvbnMsIHNvIHJhdGhlciB0aGFuIGJ1aWxkIG91dCBJU08ncyBnZXRXZWVrL3NldFdlZWssIGp1c3QgbXVsdGlwbHlcblx0XHRcdFx0Ly8gUHJvYmFibHkgY2FuJ3QgYmUgdXNlZCBmb3IgSnVsaWFuLT5HcmVnb3JpYW4gY2hhbmdlb3ZlcnMsIGV0Yy5cblx0XHRcdFx0aWYgKHVuaXROb3JtID09PSAnV2VlaycpIHtcblx0XHRcdFx0XHR1bml0Tm9ybSA9ICdEYXRlJztcblx0XHRcdFx0XHRudW0gKj0gNztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzW2BzZXQke3VuaXROb3JtfWBdKHRoaXNbYGdldCR7dW5pdE5vcm19YF0oKSArIG51bSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgXCIke3VuaXR9XCI6IE9ubHkgJHtPYmplY3Qua2V5cyh1bml0TWFwKS5qb2luKCcsICcpfSBhcmUgYWxsb3dlZC5gKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFN1YnRyYWN0cyBhIGdpdmVuIG51bWJlciBvZiBtaW51dGVzLCBob3VycywgZGF5cywgd2Vla3MsIG1vbnRocywgb3IgeWVhcnMgdG8gdGhlIGRhdGUuXG5cdFx0ICogVGhpcyBpcyBkb25lIGluLXBsYWNlLiBUaGUgbW9kaWZpZWQgZGF0ZSBvYmplY3QgaXMgYWxzbyByZXR1cm5lZCwgYWxsb3dpbmcgY2hhaW5pbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gU2hvdWxkIGJlIGFuIGludGVnZXIuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXRcblx0XHQgKiBAdGhyb3dzIElmIGludmFsaWQgb3IgdW5zdXBwb3J0ZWQgdW5pdCBpcyBnaXZlbi5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuZGF0ZX1cblx0XHQgKi9cblx0XHRzdWJ0cmFjdChudW1iZXIsIHVuaXQpIHtcblx0XHRcdHJldHVybiB0aGlzLmFkZCgtbnVtYmVyLCB1bml0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdCB0aGUgZGF0ZSBpbnRvIGEgc3RyaW5nIHBlciB0aGUgZ2l2ZW4gZm9ybWF0IHN0cmluZy5cblx0XHQgKiBSZXBsYWNlbWVudCBzeW50YXggaXMgYSBzdWJzZXQgb2YgdGhhdCBpbiBtb21lbnQuanM6XG5cdFx0ICpcblx0XHQgKiB8IFN5bnRheCB8IE91dHB1dCB8XG5cdFx0ICogfC0tLS0tLS0tfC0tLS0tLS0tfFxuXHRcdCAqIHwgSCB8IEhvdXJzICgyNC1ob3VyKSB8XG5cdFx0ICogfCBISCB8IEhvdXJzICgyNC1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IGggfCBIb3VycyAoMTItaG91cikgfFxuXHRcdCAqIHwgaGggfCBIb3VycyAoMTItaG91ciwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBBIHwgQU0gb3IgUE0gfFxuXHRcdCAqIHwgbSB8IE1pbnV0ZXMgfFxuXHRcdCAqIHwgbW0gfCBNaW51dGVzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IHMgfCBTZWNvbmRzIHxcblx0XHQgKiB8IHNzIHwgU2Vjb25kcyAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBTU1MgfCBNaWxsaXNlY29uZHMgZnJhZ21lbnQsIDMgZGlnaXRzIHxcblx0XHQgKiB8IGQgfCBEYXkgbnVtYmVyIG9mIHRoZSB3ZWVrIChTdW49MCkgfFxuXHRcdCAqIHwgZGRkIHwgQWJicmV2aWF0ZWQgZGF5IG5hbWUgfFxuXHRcdCAqIHwgZGRkZCB8IEZ1bGwgZGF5IG5hbWUgfFxuXHRcdCAqIHwgRCB8IERhdGUgfFxuXHRcdCAqIHwgREQgfCBEYXRlIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCkgfFxuXHRcdCAqIHwgTU0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBNTU0gfCBBYmJyZXZpYXRlZCBtb250aCBuYW1lIHxcblx0XHQgKiB8IE1NTU0gfCBGdWxsIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgWSB8IFllYXIgfFxuXHRcdCAqIHwgWVkgfCBGaW5hbCB0d28gZGlnaXRzIG9mIHllYXIgKDIwIGZvciAyMDIwLCA0MiBmb3IgMTk0MikgfFxuXHRcdCAqIHwgWVlZWSB8IFllYXIgKHNhbWUgYXMgYFlgKSB8XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0c3RyIC0gRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcsIHVzaW5nXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN5bnRheC4gIFVzZSBgW2AgYW5kIGBdYCB0byBlc2NhcGUgaXRlbXMuICBJZiBub3Rcblx0XHQgKiBwcm92aWRlZCwgd2lsbCByZXR1cm4gdGhlIElTTy04NjAxLWZvcm1hdHRlZCBzdHJpbmcuXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSBgc3lzdGVtYCAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHRcdCAqIGB1dGNgLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHJlbGF0aXZlIHRvIFVUQy5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdChmb3JtYXRzdHIsIHpvbmUpIHtcblx0XHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0cmV0dXJuICdJbnZhbGlkIGRhdGUnOyAvLyBQdXQgdGhlIHRydXRoIG91dCwgcHJlZmVyYWJsZSB0byBcIk5hTk5hTk5hbiBOYU46TmFOXCIgb3Igd2hhdGV2ZXJcblx0XHRcdH1cblxuXHRcdFx0bGV0IHVkYXRlID0gdGhpcztcblx0XHRcdC8vIGNyZWF0ZSBhIG5ldyBkYXRlIG9iamVjdCB0aGF0IHdpbGwgY29udGFpbiB0aGUgZGF0ZSB0byBkaXNwbGF5IGFzIHN5c3RlbSB0aW1lXG5cdFx0XHRpZiAoem9uZSA9PT0gJ3V0YycpIHtcblx0XHRcdFx0dWRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmdldFRpbWUoKSkuYWRkKHRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHpvbmUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdC8vIGNvbnZlcnQgdG8gdXRjLCB0aGVuIGFkZCB0aGUgdXRjIG9mZnNldCBnaXZlblxuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpICsgem9uZSwgJ21pbnV0ZXMnKTtcblx0XHRcdH1cblx0XHRcdC8vIGRlZmF1bHQgdG8gSVNPU3RyaW5nXG5cdFx0XHRpZiAoIWZvcm1hdHN0cikge1xuXHRcdFx0XHRyZXR1cm4gdWRhdGUudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZCA9IChudW0sIGxlbikgPT4ge1xuXHRcdFx0XHRsZW4gfHw9IDI7IC8vIFVwIHRvIGxlbmd0aCBvZiAwMCArIDFcblx0XHRcdFx0cmV0dXJuIGAwMCR7bnVtfWAudG9TdHJpbmcoKS5zbGljZSgwIC0gbGVuKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBoMjQgPSB1ZGF0ZS5nZXRIb3VycygpO1xuXHRcdFx0Y29uc3QgbSA9IHVkYXRlLmdldE1pbnV0ZXMoKTtcblx0XHRcdGNvbnN0IHMgPSB1ZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBtcyA9IHVkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXHRcdFx0Y29uc3QgRCA9IHVkYXRlLmdldERhdGUoKTtcblx0XHRcdGNvbnN0IE0gPSB1ZGF0ZS5nZXRNb250aCgpICsgMTtcblx0XHRcdGNvbnN0IFkgPSB1ZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0Y29uc3QgaDEyID0gaDI0ICUgMTIgfHwgMTI7XG5cdFx0XHRjb25zdCBhbU9yUG0gPSBoMjQgPj0gMTIgPyAn5LiL5Y2IJyA6ICfkuIrljYgnO1xuXHRcdFx0Y29uc3QgcmVwbGFjZW1lbnRNYXAgPSB7XG5cdFx0XHRcdEhIOiBwYWQoaDI0KSxcblx0XHRcdFx0SDogaDI0LFxuXHRcdFx0XHRoaDogcGFkKGgxMiksXG5cdFx0XHRcdGg6IGgxMixcblx0XHRcdFx0QTogYW1PclBtLFxuXHRcdFx0XHRtbTogcGFkKG0pLFxuXHRcdFx0XHRtLFxuXHRcdFx0XHRzczogcGFkKHMpLFxuXHRcdFx0XHRzLFxuXHRcdFx0XHRTU1M6IHBhZChtcywgMyksXG5cdFx0XHRcdGRkZGQ6IHVkYXRlLmdldERheU5hbWUoKSxcblx0XHRcdFx0ZGRkOiB1ZGF0ZS5nZXREYXlOYW1lQWJicmV2KCksXG5cdFx0XHRcdGQ6IHVkYXRlLmdldERheSgpLFxuXHRcdFx0XHRERDogcGFkKEQpLFxuXHRcdFx0XHRELFxuXHRcdFx0XHRNTU1NOiB1ZGF0ZS5nZXRNb250aE5hbWUoKSxcblx0XHRcdFx0TU1NOiB1ZGF0ZS5nZXRNb250aE5hbWVBYmJyZXYoKSxcblx0XHRcdFx0TU06IHBhZChNKSxcblx0XHRcdFx0TSxcblx0XHRcdFx0WVlZWTogWSxcblx0XHRcdFx0WVk6IHBhZChZICUgMTAwKSxcblx0XHRcdFx0WSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihmb3JtYXRzdHIpOyAvLyBlc2NhcGUgc3R1ZmYgYmV0d2VlbiBbLi4uXVxuXHRcdFx0dW5iaW5kZXIudW5iaW5kKFN0cmluZy5yYXdgXFxbYCwgU3RyaW5nLnJhd2BcXF1gKTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdC8qIFJlZ2V4IG5vdGVzOlxuXHRcdFx0XHQgKiBkKGR7MiwzfSk/IG1hdGNoZXMgZXhhY3RseSAxLCAzIG9yIDQgb2NjdXJyZW5jZXMgb2YgJ2QnICgnZGQnIGlzIHRyZWF0ZWQgYXMgYSBkb3VibGUgbWF0Y2ggb2YgJ2QnKVxuXHRcdFx0XHQgKiBZezEsMn0oWXsyfSk/IG1hdGNoZXMgZXhhY3RseSAxLCAyIG9yIDQgb2NjdXJyZW5jZXMgb2YgJ1knXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHQvSHsxLDJ9fGh7MSwyfXxtezEsMn18c3sxLDJ9fFNTU3xkKGR7MiwzfSk/fER7MSwyfXxNezEsNH18WXsxLDJ9KFl7Mn0pP3xBL2csXG5cdFx0XHRcdChtYXRjaCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlbWVudE1hcFttYXRjaF07XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdW5iaW5kZXIucmViaW5kKCkucmVwbGFjZSgvXFxbKC4qPylcXF0vZywgJyQxJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHaXZlcyBhIHJlYWRhYmxlIHJlbGF0aXZlIHRpbWUgc3RyaW5nIHN1Y2ggYXMgXCJZZXN0ZXJkYXkgYXQgNjo0MyBQTVwiIG9yIFwiTGFzdCBUaHVyc2RheSBhdCAxMTo0NSBBTVwiLlxuXHRcdCAqIFNpbWlsYXIgdG8gYGNhbGVuZGFyYCBpbiBtb21lbnQuanMsIGJ1dCB3aXRoIHRpbWUgem9uZSBzdXBwb3J0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSAnc3lzdGVtJyAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHRcdCAqICd1dGMnIChmb3IgVVRDKSwgb3Igc3BlY2lmeSBhIHRpbWUgem9uZSBhcyBudW1iZXIgb2YgbWludXRlcyBwYXN0IFVUQy5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGNhbGVuZGFyKHpvbmUpIHtcblx0XHRcdC8vIFplcm8gb3V0IHRoZSBob3VycywgbWludXRlcywgc2Vjb25kcyBhbmQgbWlsbGlzZWNvbmRzIC0ga2VlcGluZyBvbmx5IHRoZSBkYXRlO1xuXHRcdFx0Ly8gZmluZCB0aGUgZGlmZmVyZW5jZS4gTm90ZSB0aGF0IHNldEhvdXJzKCkgcmV0dXJucyB0aGUgc2FtZSB0aGluZyBhcyBnZXRUaW1lKCkuXG5cdFx0XHRjb25zdCBkYXRlRGlmZiA9IChuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApIC0gbmV3IERhdGUodGhpcykuc2V0SG91cnMoMCwgMCwgMCwgMCkpIC8gOC42NGU3O1xuXHRcdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IDA6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNEYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAxOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5wcmV2RGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA+IDAgJiYgZGF0ZURpZmYgPCA3OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5wYXN0V2Vlaywgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IC0xOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5uZXh0RGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA8IDAgJiYgZGF0ZURpZmYgPiAtNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMudGhpc1dlZWssIHpvbmUpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5vdGhlciwgem9uZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgYSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIHdpa2l0ZXh0IHNlY3Rpb24gdGl0bGVzLCBzdWNoXG5cdFx0ICogYXMgYD09RGVjZW1iZXIgMjAxOT09YCBvciBgPT09IEphbiAyMDE4ID09PWAuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7UmVnRXhwfVxuXHRcdCAqL1xuXHRcdG1vbnRoSGVhZGVyUmVnZXgoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YF4oPT0rKVxcXFxzKiR7dGhpcy5nZXRVVENGdWxsWWVhcigpfeW5tCg/OiR7dGhpcy5nZXRVVENNb250aE5hbWUoKX18JHt0aGlzLmdldFVUQ01vbnRoTmFtZUFiYnJldigpfSlcXFxccypcXFxcMWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgd2lraXRleHQgc2VjdGlvbiBoZWFkZXIgd2l0aCB0aGUgbW9udGggYW5kIHllYXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW2xldmVsPTJdIC0gSGVhZGVyIGxldmVsLiAgUGFzcyAwIGZvciBqdXN0IHRoZSB0ZXh0XG5cdFx0ICogd2l0aCBubyB3aWtpdGV4dCBtYXJrZXJzICg9PSkuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRtb250aEhlYWRlcihsZXZlbCkge1xuXHRcdFx0Ly8gRGVmYXVsdCB0byAyLCBidXQgYWxsb3cgZm9yIDAgb3Igc3RyaW5neSBudW1iZXJzXG5cdFx0XHRsZXZlbCA9IE51bWJlci5wYXJzZUludChsZXZlbCwgMTApO1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIuaXNOYU4obGV2ZWwpID8gMiA6IGxldmVsO1xuXHRcdFx0Y29uc3QgaGVhZGVyID0gJz0nLnJlcGVhdChsZXZlbCk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYCR7dGhpcy5nZXRVVENGdWxsWWVhcigpfeW5tCR7dGhpcy5nZXRVVENNb250aE5hbWUoKX1gO1xuXHRcdFx0aWYgKGhlYWRlci5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gd2lraXRleHQtZm9ybWF0dGVkIGhlYWRlclxuXHRcdFx0XHRyZXR1cm4gYCR7aGVhZGVyfSAke3RleHR9ICR7aGVhZGVyfWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGV4dDsgLy8gSnVzdCB0aGUgc3RyaW5nXG5cdFx0fSxcblx0fTtcblx0Ly8gQWxsb3cgbmF0aXZlIERhdGUucHJvdG90eXBlIG1ldGhvZHMgdG8gYmUgdXNlZCBvbiBNb3JlYml0cy5kYXRlIG9iamVjdHNcblx0Zm9yIChjb25zdCBmdW5jIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKERhdGUucHJvdG90eXBlKSkge1xuXHRcdC8vIEV4Y2x1ZGUgbWV0aG9kcyB0aGF0IGNvbGxpZGUgd2l0aCBQYWdlVHJpYWdlJ3MgRGF0ZS5qcyBleHRlcm5hbCwgd2hpY2ggY2xvYmJlcnMgbmF0aXZlIERhdGVcblx0XHRpZiAoIVsnYWRkJywgJ2dldERheU5hbWUnLCAnZ2V0TW9udGhOYW1lJ10uaW5jbHVkZXMoZnVuYykpIHtcblx0XHRcdE1vcmViaXRzLmRhdGUucHJvdG90eXBlW2Z1bmNdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2RbZnVuY10oLi4uYXJncyk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVmFyaW91cyBvYmplY3RzIGZvciB3aWtpIGVkaXRpbmcgYW5kIEFQSSBhY2Nlc3MsIGluY2x1ZGluZ1xuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfS5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy53aWtpXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMud2lraSA9IHt9O1xuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgYXMgb2YgTm92ZW1iZXIgMjAyMFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgPSAoKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMud2lraS5pc1BhZ2VSZWRpcmVjdCBoYXMgYmVlbiBkZXByZWNhdGVkLCB1c2UgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgaW5zdGVhZC4nXG5cdFx0KTtcblx0XHRyZXR1cm4gTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QoKTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0ID0gMDtcblx0LyoqXG5cdCAqIERpc3BsYXkgbWVzc2FnZSBhbmQvb3IgcmVkaXJlY3QgdG8gcGFnZSB1cG9uIGNvbXBsZXRpb24gb2YgdGFza3MuXG5cdCAqXG5cdCAqIEV2ZXJ5IGNhbGwgdG8gTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHJlc3VsdHMgaW4gdGhlIGRpc3BhdGNoIG9mIGFuXG5cdCAqIGFzeW5jaHJvbm91cyBjYWxsYmFjay4gRWFjaCBjYWxsYmFjayBjYW4gaW4gdHVybiBtYWtlIGFuIGFkZGl0aW9uYWwgY2FsbCB0b1xuXHQgKiBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgdG8gY29udGludWUgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLiBBdCB0aGVcblx0ICogY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2sgb2YgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLCBpdCBpcyBub3Rcblx0ICogcG9zc2libGUgdG8gc2ltcGx5IHJldHVybiB0byB0aGUgb3JpZ2luYWwgY2FsbGVyIGJlY2F1c2UgdGhlcmUgaXMgbm8gY2FsbFxuXHQgKiBzdGFjayBsZWFkaW5nIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQuIEluc3RlYWQsXG5cdCAqIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXMgY2FsbGVkIHRvIGRpc3BsYXkgdGhlIHJlc3VsdCB0b1xuXHQgKiB0aGUgdXNlciBhbmQgdG8gcGVyZm9ybSBhbiBvcHRpb25hbCBwYWdlIHJlZGlyZWN0LlxuXHQgKlxuXHQgKiBUaGUgZGV0ZXJtaW5hdGlvbiBvZiB3aGVuIHRvIGNhbGwgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSBpc1xuXHQgKiBtYW5hZ2VkIHRocm91Z2ggdGhlIGdsb2JhbHMgTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGFuZFxuXHQgKiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0LiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgaXNcblx0ICogaW5jcmVtZW50ZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IE1vcmViaXRzLndpa2kuYXBpIGNhbGwgYW5kIGRlY3JlbWVudGVkXG5cdCAqIGFmdGVyIHRoZSBjb21wbGV0aW9uIG9mIGEgY2FsbGJhY2sgZnVuY3Rpb24uIElmIGEgY2FsbGJhY2sgZnVuY3Rpb24gZG9lc1xuXHQgKiBub3QgY3JlYXRlIGEgbmV3IE1vcmViaXRzLndpa2kuYXBpIG9iamVjdCBiZWZvcmUgZXhpdGluZywgaXQgaXMgdGhlIGZpbmFsXG5cdCAqIHN0ZXAgaW4gdGhlIHByb2Nlc3NpbmcgY2hhaW4gYW5kIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgd2lsbFxuXHQgKiB0aGVuIGJlIGNhbGxlZC5cblx0ICpcblx0ICogT3B0aW9uYWxseSwgY2FsbGVycyBtYXkgdXNlIE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpIHRvIGluZGljYXRlIHRoYXRcblx0ICogcHJvY2Vzc2luZyBpcyBub3QgY29tcGxldGUgdXBvbiB0aGUgY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2tcblx0ICogZnVuY3Rpb24uICBUaGlzIGlzIHVzZWQgZm9yIGJhdGNoIG9wZXJhdGlvbnMuIFRoZSBlbmQgb2YgYSBiYXRjaCBpc1xuXHQgKiBzaWduYWxlZCBieSBjYWxsaW5nIE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgPSAoc2VsZikgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA8PSAwICYmIE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoc2VsZik7XG5cdFx0fVxuXHR9O1xuXHQvLyBDaGFuZ2UgcGVyIGFjdGlvbiB3YW50ZWRcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50ID0gKCkgPT4ge1xuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKTtcblx0XHR9XG5cdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSB7XG5cdFx0XHQvLyBpZiBpdCBpc24ndCBhIFVSTCwgbWFrZSBpdCBvbmUuIFRPRE86IFRoaXMgYnJlYWtzIG9uIHRoZSBhcnRpY2xlcyAnaHR0cDovLycsICdmdHA6Ly8nLCBhbmQgc2ltaWxhciBvbmVzLlxuXHRcdFx0aWYgKCEvXlxcdys6XFwvXFwvLy50ZXN0KE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSkge1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCA9IG13LnV0aWwuZ2V0VXJsKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KTtcblx0XHRcdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmZvbGxvd1JlZGlyZWN0ID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ICs9ICc/cmVkaXJlY3Q9bm8nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bG9jYXRpb24gPSBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdDtcblx0XHRcdH0sIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQpO1xuXHRcdH1cblx0fTtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQgPVxuXHRcdHdpbmRvdy53cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQgPT09IHVuZGVmaW5lZCA/IDUwMDAgOiB3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBudWxsO1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCA9ICgpID0+IHtcblx0XHQrK01vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQ7XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0aWYgKC0tTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA8PSAwICYmIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA8PSAwKSB7XG5cdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpO1xuXHRcdH1cblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFwaSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBBbiBlYXN5IHdheSB0byB0YWxrIHRvIHRoZSBNZWRpYVdpa2kgQVBJLiAgQWNjZXB0cyBlaXRoZXIganNvbiBvciB4bWxcblx0ICogKGRlZmF1bHQpIGZvcm1hdHM7IGlmIGpzb24gaXMgc2VsZWN0ZWQsIHdpbGwgZGVmYXVsdCB0byBgZm9ybWF0dmVyc2lvbj0yYFxuXHQgKiB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC4gIFNpbWlsYXJseSwgZW5mb3JjZXMgbmV3ZXIgYGVycm9yZm9ybWF0YHMsXG5cdCAqIGRlZmF1bHRpbmcgdG8gYGh0bWxgIGlmIHVuc3BlY2lmaWVkLiAgYHVzZWxhbmdgIGVuZm9yY2VkIHRvIHRoZSB3aWtpJ3Ncblx0ICogY29udGVudCBsYW5ndWFnZS5cblx0ICpcblx0ICogSW4gbmV3IGNvZGUsIHRoZSB1c2Ugb2YgdGhlIGxhc3QgMyBwYXJhbWV0ZXJzIHNob3VsZCBiZSBhdm9pZGVkLCBpbnN0ZWFkXG5cdCAqIHVzZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGkjc2V0U3RhdHVzRWxlbWVudHxzZXRTdGF0dXNFbGVtZW50KCl9IHRvIGJpbmRcblx0ICogdGhlIHN0YXR1cyBlbGVtZW50IChpZiBuZWVkZWQpIGFuZCB1c2UgYC50aGVuKClgIG9yIGAuY2F0Y2goKWAgb24gdGhlXG5cdCAqIHByb21pc2UgcmV0dXJuZWQgYnkgYHBvc3QoKWAsIHJhdGhlciB0aGFuIHNwZWNpZnkgdGhlIGBvblN1Y2Nlc3NgIG9yXG5cdCAqIGBvbkZhaWx1cmVgIGNhbGxiYWNrcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50QWN0aW9uIC0gVGhlIGN1cnJlbnQgYWN0aW9uIChyZXF1aXJlZCkuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeSAtIFRoZSBxdWVyeSAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVxdWVzdCBpcyBzdWNjZXNzZnVsLlxuXHQgKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gW3N0YXR1c0VsZW1lbnRdIC0gQSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0IHRvIHVzZSBmb3Igc3RhdHVzIG1lc3NhZ2VzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25FcnJvcl0gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBpZiBhbiBlcnJvciBvY2N1cnMuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaSA9IGZ1bmN0aW9uIChjdXJyZW50QWN0aW9uLCBxdWVyeSwgb25TdWNjZXNzLCBzdGF0dXNFbGVtZW50LCBvbkVycm9yKSB7XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gY3VycmVudEFjdGlvbjtcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XG5cdFx0dGhpcy5xdWVyeS5hc3NlcnQgPSAndXNlcic7XG5cdFx0Ly8gRW5mb3JjZSBuZXdlciBlcnJvciBmb3JtYXRzLCBwcmVmZXJyaW5nIGh0bWxcblx0XHRpZiAoIXF1ZXJ5LmVycm9yZm9ybWF0IHx8ICFbJ3dpa2l0ZXh0JywgJ3BsYWludGV4dCddLmluY2x1ZGVzKHF1ZXJ5LmVycm9yZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9ICdodG1sJztcblx0XHR9XG5cdFx0Ly8gRXhwbGljaXRseSB1c2UgdGhlIHdpa2kncyBjb250ZW50IGxhbmd1YWdlIHRvIG1pbmltaXplIGNvbmZ1c2lvbixcblx0XHQvLyBzZWUgIzExNzkgZm9yIGRpc2N1c3Npb25cblx0XHR0aGlzLnF1ZXJ5LnVzZWxhbmcgfHw9ICdjb250ZW50JzsgLy8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0dGhpcy5xdWVyeS5lcnJvcmxhbmcgPSAndXNlbGFuZyc7XG5cdFx0dGhpcy5xdWVyeS5lcnJvcnN1c2Vsb2NhbCA9IDE7XG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0dGhpcy5vbkVycm9yID0gb25FcnJvcjtcblx0XHRpZiAoc3RhdHVzRWxlbWVudCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gbmV3IE1vcmViaXRzLnN0YXR1cyhjdXJyZW50QWN0aW9uKTtcblx0XHR9XG5cdFx0Ly8gSlNPTiBpcyB1c2VkIHRocm91Z2hvdXQgTW9yZWJpdHMvVHdpbmtsZSwgYnV0IHhtbCByZW1haW5zIHRoZSBkZWZhdWx0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdGlmICghcXVlcnkuZm9ybWF0KSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdCA9ICd4bWwnO1xuXHRcdH0gZWxzZSBpZiAocXVlcnkuZm9ybWF0ID09PSAnanNvbicgJiYgIXF1ZXJ5LmZvcm1hdHZlcnNpb24pIHtcblx0XHRcdHRoaXMucXVlcnkuZm9ybWF0dmVyc2lvbiA9ICcyJztcblx0XHR9IGVsc2UgaWYgKCFbJ3htbCcsICdqc29uJ10uaW5jbHVkZXMocXVlcnkuZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5lcnJvcignSW52YWxpZCBBUEkgZm9ybWF0OiBvbmx5IHhtbCBhbmQganNvbiBhcmUgc3VwcG9ydGVkLicpO1xuXHRcdH1cblx0XHQvLyBJZ25vcmUgdGFncyBmb3IgcXVlcmllcyBhbmQgbW9zdCBjb21tb24gdW5zdXBwb3J0ZWQgYWN0aW9ucywgcHJvZHVjZXMgd2FybmluZ3Ncblx0XHRpZiAocXVlcnkuYWN0aW9uICYmIFsncXVlcnknLCAnd2F0Y2gnXS5pbmNsdWRlcyhxdWVyeS5hY3Rpb24pKSB7XG5cdFx0XHRkZWxldGUgcXVlcnkudGFncztcblx0XHR9IGVsc2UgaWYgKCFxdWVyeS50YWdzICYmIG1vcmViaXRzV2lraUNoYW5nZVRhZykge1xuXHRcdFx0cXVlcnkudGFncyA9IG1vcmViaXRzV2lraUNoYW5nZVRhZztcblx0XHR9XG5cdH07XG5cdE1vcmViaXRzLndpa2kuYXBpLnByb3RvdHlwZSA9IHtcblx0XHRjdXJyZW50QWN0aW9uOiAnJyxcblx0XHRvblN1Y2Nlc3M6IG51bGwsXG5cdFx0b25FcnJvcjogbnVsbCxcblx0XHRwYXJlbnQ6IHdpbmRvdyxcblx0XHQvLyB1c2UgZ2xvYmFsIGNvbnRleHQgaWYgdGhlcmUgaXMgbm8gcGFyZW50IG9iamVjdFxuXHRcdHF1ZXJ5OiBudWxsLFxuXHRcdHJlc3BvbnNlOiBudWxsLFxuXHRcdHJlc3BvbnNlWE1MOiBudWxsLFxuXHRcdC8vIHVzZSBgcmVzcG9uc2VgIGluc3RlYWQ7IHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdHN0YXRlbGVtOiBudWxsLFxuXHRcdC8vIHRoaXMgbm9uLXN0YW5kYXJkIG5hbWUga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0dXNUZXh0OiBudWxsLFxuXHRcdC8vIHJlc3VsdCByZWNlaXZlZCBmcm9tIHRoZSBBUEksIG5vcm1hbGx5IFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuXHRcdGVycm9yQ29kZTogbnVsbCxcblx0XHQvLyBzaG9ydCB0ZXh0IGVycm9yIGNvZGUsIGlmIGFueSwgYXMgZG9jdW1lbnRlZCBpbiB0aGUgTWVkaWFXaWtpIEFQSVxuXHRcdGVycm9yVGV4dDogbnVsbCxcblx0XHQvLyBmdWxsIGVycm9yIGRlc2NyaXB0aW9uLCBpZiBhbnlcblx0XHRiYWR0b2tlblJldHJ5OiBmYWxzZSxcblx0XHQvLyBzZXQgdG8gdHJ1ZSBpZiB0aGlzIG9uIGEgcmV0cnkgYXR0ZW1wdGVkIGFmdGVyIGEgYmFkdG9rZW4gZXJyb3Jcblx0XHQvKipcblx0XHQgKiBLZWVwIHRyYWNrIG9mIHBhcmVudCBvYmplY3QgZm9yIGNhbGxiYWNrcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyZW50XG5cdFx0ICovXG5cdFx0c2V0UGFyZW50KHBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0fSxcblx0XHQvKiogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnQgKi9cblx0XHRzZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0gPSBzdGF0dXNFbGVtZW50O1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5zdGF0dXModGhpcy5jdXJyZW50QWN0aW9uKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENhcnJ5IG91dCB0aGUgcmVxdWVzdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsZXJBamF4UGFyYW1ldGVycyAtIERvIG5vdCBzcGVjaWZ5IGEgcGFyYW1ldGVyIHVubGVzcyB5b3UgcmVhbGx5XG5cdFx0ICogcmVhbGx5IHdhbnQgdG8gZ2l2ZSBqUXVlcnkgc29tZSBleHRyYSBwYXJhbWV0ZXJzLlxuXHRcdCAqIEByZXR1cm5zIHtwcm9taXNlfSAtIEEgalF1ZXJ5IHByb21pc2Ugb2JqZWN0IHRoYXQgaXMgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgd2l0aCB0aGUgYXBpIG9iamVjdC5cblx0XHQgKi9cblx0XHRwb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKSB7XG5cdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nQXJyID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IFtpLCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucXVlcnkpKSB7XG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0XHRxdWVyeVN0cmluZ0FycltxdWVyeVN0cmluZ0Fyci5sZW5ndGhdID1cblx0XHRcdFx0XHRcdGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHt2YWwubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignfCcpfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRxdWVyeVN0cmluZ0FycltxdWVyeVN0cmluZ0Fyci5sZW5ndGhdID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWwpfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdBcnIuam9pbignJicpLnJlcGxhY2UoL14oLio/KShcXGJ0b2tlbj1bXiZdKikmKC4qKS8sICckMSQzJiQyJyk7XG5cdFx0XHQvLyB0b2tlbiBzaG91bGQgYWx3YXlzIGJlIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIHF1ZXJ5IHN0cmluZyAoYnVnIFRXLUItMDAxMylcblx0XHRcdGNvbnN0IGFqYXhwYXJhbXMgPSB7XG5cdFx0XHRcdGNvbnRleHQ6IHRoaXMsXG5cdFx0XHRcdHR5cGU6IHRoaXMucXVlcnkuYWN0aW9uID09PSAncXVlcnknID8gJ0dFVCcgOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogbXcudXRpbC53aWtpU2NyaXB0KCdhcGknKSxcblx0XHRcdFx0ZGF0YTogcXVlcnlTdHJpbmcsXG5cdFx0XHRcdGRhdGFUeXBlOiB0aGlzLnF1ZXJ5LmZvcm1hdCxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uY2FsbGVyQWpheFBhcmFtZXRlcnMsXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuICQuYWpheChhamF4cGFyYW1zKS50aGVuKFxuXHRcdFx0XHRmdW5jdGlvbiBvbkFQSXN1Y2Nlc3MocmVzcG9uc2UsIHN0YXR1c1RleHQpIHtcblx0XHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlWE1MID0gcmVzcG9uc2U7XG5cdFx0XHRcdFx0Ly8gTGltaXQgdG8gZmlyc3QgZXJyb3Jcblx0XHRcdFx0XHRpZiAodGhpcy5xdWVyeS5mb3JtYXQgPT09ICdqc29uJykge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvckNvZGUgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLmNvZGU7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ2h0bWwnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS5odG1sO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnd2lraXRleHQnIHx8IHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdwbGFpbnRleHQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS50ZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9ICQocmVzcG9uc2UpLmZpbmQoJ2Vycm9ycyBlcnJvcicpLmVxKDApLmF0dHIoJ2NvZGUnKTtcblx0XHRcdFx0XHRcdC8vIFN1ZmZpY2llbnQgZm9yIGh0bWwsIHdpa2l0ZXh0LCBvciBwbGFpbnRleHQgZXJyb3Jmb3JtYXRzXG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9ICQocmVzcG9uc2UpLmZpbmQoJ2Vycm9ycyBlcnJvcicpLmVxKDApLnRleHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLmVycm9yQ29kZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdC8vIHRoZSBBUEkgZGlkbid0IGxpa2Ugd2hhdCB3ZSB0b2xkIGl0LCBlLmcuLCBiYWQgZWRpdCB0b2tlbiBvciBhbiBlcnJvciBjcmVhdGluZyBhIHBhZ2Vcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gaW52b2tlIHN1Y2Nlc3MgY2FsbGJhY2sgaWYgb25lIHdhcyBzdXBwbGllZFxuXHRcdFx0XHRcdGlmICh0aGlzLm9uU3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdFx0XHQvLyBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIChmb3IgbGVnYWN5IGNvZGUpXG5cdFx0XHRcdFx0XHR0aGlzLm9uU3VjY2Vzcy5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZWxlbS5pbmZvKCflrozmiJAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQoKTtcblx0XHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmVXaXRoKHRoaXMucGFyZW50LCBbdGhpc10pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBvbmx5IG5ldHdvcmsgYW5kIHNlcnZlciBlcnJvcnMgcmVhY2ggaGVyZSAtIGNvbXBsYWludHMgZnJvbSB0aGUgQVBJIGl0c2VsZiBhcmUgY2F1Z2h0IGluIHN1Y2Nlc3MoKVxuXHRcdFx0XHRmdW5jdGlvbiBvbkFQSWZhaWx1cmUoZXJyb3IsIHN0YXR1c1RleHQsIGVycm9yVGhyb3duKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR0aGlzLmVycm9yVGhyb3duID0gZXJyb3JUaHJvd247IC8vIGZyZXF1ZW50bHkgdW5kZWZpbmVkXG5cdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPVxuXHRcdFx0XHRcdFx0c3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WcqOiwg+eUqEFQSeaXtuWPkeeUn+S6humUmeivr+KAnCcsICflnKjlkbzlj6tBUEnmmYLnmbznlJ/kuobpjK/oqqTjgIwnKSArXG5cdFx0XHRcdFx0XHRlcnJvci5zdGF0dXNUZXh0ICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd44CCJywgJ+OAjeOAgicpO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSxcblx0XHRyZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0aWYgKHRoaXMuZXJyb3JDb2RlID09PSAnYmFkdG9rZW4nICYmICF0aGlzLmJhZHRva2VuUmV0cnkpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZWxlbS53YXJuKHdpbmRvdy53Z1VMUygn5peg5pWI5Luk54mM77yM6I635Y+W5paw55qE5Luk54mM5bm26YeN6K+V4oCm4oCmJywgJ+eEoeaViOasiuadlu+8jOWPluW+l+aWsOeahOasiuadluS4pumHjeippuKApuKApicpKTtcblx0XHRcdFx0dGhpcy5iYWR0b2tlblJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gR2V0IGEgbmV3IENTUkYgdG9rZW4gYW5kIHJldHJ5LiBJZiB0aGUgb3JpZ2luYWwgYWN0aW9uIG5lZWRzIGEgZGlmZmVyZW50XG5cdFx0XHRcdC8vIHR5cGUgb2YgYWN0aW9uIHRoYW4gQ1NSRiwgd2UgZG8gb25lIHBvaW50bGVzcyByZXRyeSBiZWZvcmUgYmFpbGluZyBvdXRcblx0XHRcdFx0cmV0dXJuIE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuKCkudGhlbigodG9rZW4pID0+IHtcblx0XHRcdFx0XHR0aGlzLnF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucG9zdChjYWxsZXJBamF4UGFyYW1ldGVycyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZWxlbS5lcnJvcihgJHt0aGlzLmVycm9yVGV4dH3vvIgke3RoaXMuZXJyb3JDb2Rlfe+8iWApO1xuXHRcdFx0Ly8gaW52b2tlIGZhaWx1cmUgY2FsbGJhY2sgaWYgb25lIHdhcyBzdXBwbGllZFxuXHRcdFx0aWYgKHRoaXMub25FcnJvcikge1xuXHRcdFx0XHQvLyBzZXQgdGhlIGNhbGxiYWNrIGNvbnRleHQgdG8gdGhpcy5wYXJlbnQgZm9yIG5ldyBjb2RlIGFuZCBzdXBwbHkgdGhlIEFQSSBvYmplY3Rcblx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayBmb3IgbGVnYWN5IGNvZGVcblx0XHRcdFx0dGhpcy5vbkVycm9yLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZG9uJ3QgY29tcGxldGUgdGhlIGFjdGlvbiBzbyB0aGF0IHRoZSBlcnJvciByZW1haW5zIGRpc3BsYXllZFxuXHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3RXaXRoKHRoaXMucGFyZW50LCBbdGhpc10pO1xuXHRcdH0sXG5cdFx0Z2V0U3RhdHVzRWxlbWVudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlbGVtO1xuXHRcdH0sXG5cdFx0Z2V0RXJyb3JDb2RlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JDb2RlO1xuXHRcdH0sXG5cdFx0Z2V0RXJyb3JUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JUZXh0O1xuXHRcdH0sXG5cdFx0Z2V0WE1MKCkge1xuXHRcdFx0Ly8gcmV0YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB1c2UgZ2V0UmVzcG9uc2UoKSBpbnN0ZWFkXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZVhNTDtcblx0XHR9LFxuXHRcdGdldFJlc3BvbnNlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVzcG9uc2U7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFJldHJpZXZlcyB3aWtpdGV4dCBmcm9tIGEgcGFnZS4gQ2FjaGluZyBlbmFibGVkLCBkdXJhdGlvbiAxIGRheS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmdldENhY2hlZEpzb24gPSAodGl0bGUpID0+IHtcblx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy53aWtpLmFwaSgnJywgcXVlcnkpLnBvc3QoKS50aGVuKChhcGlvYmopID0+IHtcblx0XHRcdGFwaW9iai5nZXRTdGF0dXNFbGVtZW50KCkudW5saW5rKCk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Y29uc3Qgd2lraXRleHQgPSByZXNwb25zZS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2lraXRleHQpO1xuXHRcdH0pO1xuXHR9O1xuXHRsZXQgbW9yZWJpdHNXaWtpQXBpVXNlckFnZW50ID0gJ1FpdXdlbi8xLjEgKG1vcmViaXRzLmpzKSc7XG5cdC8qKlxuXHQgKiBTZXQgdGhlIGN1c3RvbSB1c2VyIGFnZW50IGhlYWRlciwgd2hpY2ggaXMgdXNlZCBmb3Igc2VydmVyLXNpZGUgbG9nZ2luZy5cblx0ICogTm90ZSB0aGF0IGRvaW5nIHNvIHdpbGwgc2V0IHRoZSB1c2VyYWdlbnQgZm9yIGV2ZXJ5IGBNb3JlYml0cy53aWtpLmFwaWBcblx0ICogcHJvY2VzcyBwZXJmb3JtZWQgdGhlcmVhZnRlci5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9saXN0cy53aWtpbWVkaWEub3JnL3BpcGVybWFpbC9tZWRpYXdpa2ktYXBpLWFubm91bmNlLzIwMTQtTm92ZW1iZXIvMDAwMDc1Lmh0bWx9XG5cdCAqIGZvciBvcmlnaW5hbCBhbm5vdW5jZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3VhPVFpdXdlbi8xLjEgKG1vcmViaXRzLmpzKV0gLSBVc2VyIGFnZW50LiAgVGhlIGRlZmF1bHRcblx0ICogdmFsdWUgb2YgYG1vcmViaXRzLmpzYCB3aWxsIGJlIGFwcGVuZGVkIHRvIGFueSBwcm92aWRlZFxuXHQgKiB2YWx1ZS5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpLnNldEFwaVVzZXJBZ2VudCA9ICh1YSkgPT4ge1xuXHRcdG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9IGBRaXV3ZW4vMS4xIChtb3JlYml0cy5qcyR7dWEgPyBgOyAke3VhfWAgOiAnJ30pYDtcblx0fTtcblx0LyoqXG5cdCAqIENoYW5nZS9yZXZpc2lvbiB0YWcgYXBwbGllZCB0byBNb3JlYml0cyBhY3Rpb25zIHdoZW4gbm8gb3RoZXIgdGFncyBhcmUgc3BlY2lmaWVkLlxuXHQgKiBVbnVzZWQgYnkgZGVmYXVsdC5cblx0ICpcblx0ICogQGNvbnN0YW50XG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Y29uc3QgbW9yZWJpdHNXaWtpQ2hhbmdlVGFnID0gJyc7XG5cdC8qKlxuXHQgKiBHZXQgYSBuZXcgQ1NSRiB0b2tlbiBvbiBlbmNvdW50ZXJpbmcgdG9rZW4gZXJyb3JzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHJldHVybnMge3N0cmluZ30gTWVkaWFXaWtpIENTUkYgdG9rZW4uXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaS5nZXRUb2tlbiA9ICgpID0+IHtcblx0XHRjb25zdCB0b2tlbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaSh3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjCcsICflj5blvpfmrIrmnZYnKSwge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gdG9rZW5BcGkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0cmV0dXJuIGFwaW9iai5yZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdH0pO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kucGFnZSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBVc2UgdGhlIE1lZGlhV2lraSBBUEkgdG8gbG9hZCBhIHBhZ2UgYW5kIG9wdGlvbmFsbHkgZWRpdCBpdCwgbW92ZSBpdCwgZXRjLlxuXHQgKlxuXHQgKiBDYWxsZXJzIGFyZSBub3QgcGVybWl0dGVkIHRvIGRpcmVjdGx5IGFjY2VzcyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIGNsYXNzIVxuXHQgKiBBbGwgcHJvcGVydHkgYWNjZXNzIGlzIHRocm91Z2ggdGhlIGFwcHJvcHJpYXRlIGdldF9fXygpIG9yIHNldF9fXygpIG1ldGhvZC5cblx0ICpcblx0ICogQ2FsbGVycyBzaG91bGQgc2V0IHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2V9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3R9XG5cdCAqIGJlZm9yZSB0aGUgZmlyc3QgY2FsbCB0byB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlLmxvYWQoKX0uXG5cdCAqXG5cdCAqIEVhY2ggb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBhXG5cdCAqIHJlZmVyZW5jZSB0byB0aGUgTW9yZWJpdHMud2lraS5wYWdlIG9iamVjdCB0aGF0IHJlZ2lzdGVyZWQgdGhlIGNhbGxiYWNrLlxuXHQgKiBDYWxsYmFjayBmdW5jdGlvbnMgbWF5IGludm9rZSBhbnkgTW9yZWJpdHMud2lraS5wYWdlIHByb3RvdHlwZSBtZXRob2QgdXNpbmcgdGhpcyByZWZlcmVuY2UuXG5cdCAqXG5cdCAqXG5cdCAqIENhbGwgc2VxdWVuY2UgZm9yIGNvbW1vbiBvcGVyYXRpb25zIChvcHRpb25hbCBmaW5hbCB1c2VyIGNhbGxiYWNrcyBub3Qgc2hvd24pOlxuXHQgKlxuXHQgKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKG5vIGVkaXQgY29uZmxpY3QpOlxuXHQgKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cblx0ICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlICh3aXRoIGVkaXQgY29uZmxpY3QpOlxuXHQgKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cblx0ICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuU2F2ZUVycm9yKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPiAuc2F2ZSgpIC0+XG5cdCAqIGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiAtIEFwcGVuZCB0byBhIHBhZ2UgKHNpbWlsYXIgZm9yIHByZXBlbmQgYW5kIG5ld1NlY3Rpb24pOlxuXHQgKiBgLmFwcGVuZCgpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IGN0eC5mbkF1dG9TYXZlKCkgLT4gLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogTm90ZXM6XG5cdCAqIDEuIEFsbCBmdW5jdGlvbnMgZm9sbG93aW5nIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSBhcmUgaW52b2tlZCBhc3luY2hyb25vdXNseSBmcm9tIHRoZSBqUXVlcnkgQUpBWCBsaWJyYXJ5LlxuXHQgKiAyLiBUaGUgc2VxdWVuY2UgZm9yIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24gY291bGQgYmUgc2xpZ2h0bHkgc2hvcnRlbmVkLFxuXHQgKiBidXQgaXQgd291bGQgcmVxdWlyZSBzaWduaWZpY2FudCBkdXBsaWNhdGlvbiBvZiBjb2RlIGZvciBsaXR0bGUgYmVuZWZpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwYWdlLCBwcmVmaXhlZCBieSB0aGUgbmFtZXNwYWNlIChpZiBhbnkpLlxuXHQgKiBGb3IgdGhlIGN1cnJlbnQgcGFnZSwgdXNlIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNdIC0gQSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgYWN0aW9uIGFib3V0IHRvIGJlIHVuZGVydGFrZW4sXG5cdCAqIG9yIGEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdFxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5wYWdlID0gZnVuY3Rpb24gKHBhZ2VOYW1lLCBzdGF0dXMpIHtcblx0XHRpZiAoIXN0YXR1cykge1xuXHRcdFx0c3RhdHVzID0gd2luZG93LndnVUxTKCfmiZPlvIDpobXpnaLigJwnLCAn5omT6ZaL6aCB6Z2i44CMJykgKyBwYWdlTmFtZSArIHdpbmRvdy53Z1VMUygn4oCdJywgJ+OAjScpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBQcml2YXRlIGNvbnRleHQgdmFyaWFibGVzLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBjb250ZXh0IGlzIG5vdCB2aXNpYmxlIHRvIHRoZSBvdXRzaWRlLCB0aHVzIGFsbCB0aGUgZGF0YSBoZXJlXG5cdFx0ICogbXVzdCBiZSBhY2Nlc3NlZCB2aWEgZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRjb25zdCBjdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VOYW1lLFxuXHRcdFx0cGFnZUV4aXN0czogZmFsc2UsXG5cdFx0XHRlZGl0U3VtbWFyeTogbnVsbCxcblx0XHRcdGNoYW5nZVRhZ3M6IG51bGwsXG5cdFx0XHR0ZXN0QWN0aW9uczogbnVsbCxcblx0XHRcdC8vIGFycmF5IGlmIGFueSB2YWxpZCBhY3Rpb25zXG5cdFx0XHRjYWxsYmFja1BhcmFtZXRlcnM6IG51bGwsXG5cdFx0XHRzdGF0dXNFbGVtZW50OiBzdGF0dXMgaW5zdGFuY2VvZiBNb3JlYml0cy5zdGF0dXMgPyBzdGF0dXMgOiBuZXcgTW9yZWJpdHMuc3RhdHVzKHN0YXR1cyksXG5cdFx0XHQvLyAtIGVkaXRcblx0XHRcdHBhZ2VUZXh0OiBudWxsLFxuXHRcdFx0ZWRpdE1vZGU6ICdhbGwnLFxuXHRcdFx0Ly8gc2F2ZSgpIHJlcGxhY2VzIGVudGlyZSBjb250ZW50cyBvZiB0aGUgcGFnZSBieSBkZWZhdWx0XG5cdFx0XHRhcHBlbmRUZXh0OiBudWxsLFxuXHRcdFx0Ly8gY2FuJ3QgcmV1c2UgcGFnZVRleHQgZm9yIHRoaXMgYmVjYXVzZSBwYWdlVGV4dCBpcyBuZWVkZWQgdG8gZm9sbG93IGEgcmVkaXJlY3Rcblx0XHRcdHByZXBlbmRUZXh0OiBudWxsLFxuXHRcdFx0Ly8gY2FuJ3QgcmV1c2UgcGFnZVRleHQgZm9yIHRoaXMgYmVjYXVzZSBwYWdlVGV4dCBpcyBuZWVkZWQgdG8gZm9sbG93IGEgcmVkaXJlY3Rcblx0XHRcdG5ld1NlY3Rpb25UZXh0OiBudWxsLFxuXHRcdFx0bmV3U2VjdGlvblRpdGxlOiBudWxsLFxuXHRcdFx0Y3JlYXRlT3B0aW9uOiBudWxsLFxuXHRcdFx0bWlub3JFZGl0OiBmYWxzZSxcblx0XHRcdGJvdEVkaXQ6IGZhbHNlLFxuXHRcdFx0cGFnZVNlY3Rpb246IG51bGwsXG5cdFx0XHRtYXhDb25mbGljdFJldHJpZXM6IDIsXG5cdFx0XHRtYXhSZXRyaWVzOiAyLFxuXHRcdFx0Zm9sbG93UmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0Zm9sbG93Q3Jvc3NOc1JlZGlyZWN0OiB0cnVlLFxuXHRcdFx0d2F0Y2hsaXN0T3B0aW9uOiAnbm9jaGFuZ2UnLFxuXHRcdFx0d2F0Y2hsaXN0RXhwaXJ5OiBudWxsLFxuXHRcdFx0Y3JlYXRvcjogbnVsbCxcblx0XHRcdHRpbWVzdGFtcDogbnVsbCxcblx0XHRcdC8vIC0gcmV2ZXJ0XG5cdFx0XHRyZXZlcnRPbGRJRDogbnVsbCxcblx0XHRcdC8vIC0gbW92ZVxuXHRcdFx0bW92ZURlc3RpbmF0aW9uOiBudWxsLFxuXHRcdFx0bW92ZVRhbGtQYWdlOiBmYWxzZSxcblx0XHRcdG1vdmVTdWJwYWdlczogZmFsc2UsXG5cdFx0XHRtb3ZlU3VwcHJlc3NSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHQvLyAtIHByb3RlY3Rcblx0XHRcdHByb3RlY3RFZGl0OiBudWxsLFxuXHRcdFx0cHJvdGVjdE1vdmU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q3JlYXRlOiBudWxsLFxuXHRcdFx0cHJvdGVjdENhc2NhZGU6IG51bGwsXG5cdFx0XHQvLyAtIGNyZWF0aW9uIGxvb2t1cFxuXHRcdFx0bG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yOiBmYWxzZSxcblx0XHRcdC8vIGludGVybmFsIHN0YXR1c1xuXHRcdFx0cGFnZUxvYWRlZDogZmFsc2UsXG5cdFx0XHRjc3JmVG9rZW46IG51bGwsXG5cdFx0XHRsb2FkVGltZTogbnVsbCxcblx0XHRcdGxhc3RFZGl0VGltZTogbnVsbCxcblx0XHRcdHBhZ2VJRDogbnVsbCxcblx0XHRcdGNvbnRlbnRNb2RlbDogbnVsbCxcblx0XHRcdHJldmVydEN1cklEOiBudWxsLFxuXHRcdFx0cmV2ZXJ0VXNlcjogbnVsbCxcblx0XHRcdHdhdGNoZWQ6IGZhbHNlLFxuXHRcdFx0ZnVsbHlQcm90ZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0c3VwcHJlc3NQcm90ZWN0V2FybmluZzogZmFsc2UsXG5cdFx0XHRjb25mbGljdFJldHJpZXM6IDAsXG5cdFx0XHRyZXRyaWVzOiAwLFxuXHRcdFx0Ly8gY2FsbGJhY2tzXG5cdFx0XHRvbkxvYWRTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Mb2FkRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uU2F2ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblNhdmVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Mb29rdXBDcmVhdGlvblN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uTW92ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbk1vdmVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25EZWxldGVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25EZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25VbmRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uUHJvdGVjdFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblByb3RlY3RGYWlsdXJlOiBudWxsLFxuXHRcdFx0Ly8gaW50ZXJuYWwgb2JqZWN0c1xuXHRcdFx0bG9hZFF1ZXJ5OiBudWxsLFxuXHRcdFx0bG9hZEFwaTogbnVsbCxcblx0XHRcdHNhdmVBcGk6IG51bGwsXG5cdFx0XHRsb29rdXBDcmVhdGlvbkFwaTogbnVsbCxcblx0XHRcdG1vdmVBcGk6IG51bGwsXG5cdFx0XHRtb3ZlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHBhdHJvbEFwaTogbnVsbCxcblx0XHRcdHBhdHJvbFByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRkZWxldGVBcGk6IG51bGwsXG5cdFx0XHRkZWxldGVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0dW5kZWxldGVBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0QXBpOiBudWxsLFxuXHRcdFx0cHJvdGVjdFByb2Nlc3NBcGk6IG51bGwsXG5cdFx0fTtcblx0XHRjb25zdCBlbXB0eUZ1bmN0aW9uID0gKCkgPT4ge307XG5cdFx0LyoqXG5cdFx0ICogTG9hZHMgdGhlIHRleHQgZm9yIHRoZSBwYWdlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gb25TdWNjZXNzIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBsb2FkIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMubG9hZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTG9hZFN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Mb2FkRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGRvIHNvbWV0aGluZyBhZnRlciB0aGUgcGFnZSBsb2Fkc1xuXHRcdFx0aWYgKCFvblN1Y2Nlc3MpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBubyBvblN1Y2Nlc3MgY2FsbGJhY2sgcHJvdmlkZWQgdG8gbG9hZCgpIScpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRRdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAnaW5mb3xyZXZpc2lvbnMnLFxuXHRcdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdFx0aW50ZXN0YWN0aW9uczogJ2VkaXQnLFxuXHRcdFx0XHQvLyBjYW4gYmUgZXhwYW5kZWRcblx0XHRcdFx0Y3VydGltZXN0YW1wOiAnJyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHQvLyBkb24ndCBuZWVkIHJ2bGltaXQ9MSBiZWNhdXNlIHdlIGRvbid0IG5lZWQgcnZzdGFydGlkIGhlcmUgYW5kIG9ubHkgb25lIGFjdHVhbCByZXYgaXMgcmV0dXJuZWQgYnkgZGVmYXVsdFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ2FsbCcpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnByb3AgPSAnY29udGVudHx0aW1lc3RhbXAnOyAvLyBnZXQgdGhlIHBhZ2UgY29udGVudCBhdCB0aGUgc2FtZSB0aW1lLCBpZiBuZWVkZWRcblx0XHRcdH0gZWxzZSBpZiAoY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICd0aW1lc3RhbXAnO1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2bGltaXQgPSAxO1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2c3RhcnRpZCA9IGN0eC5yZXZlcnRPbGRJRDtcblx0XHRcdH1cblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBjdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZzZWN0aW9uID0gY3R4LnBhZ2VTZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkuaW5wcm9wICs9ICd8cHJvdGVjdGlvbic7XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfmipPlj5bpobXpnaLigKbigKYnLCAn5oqT5Y+W6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdGN0eC5sb2FkUXVlcnksXG5cdFx0XHRcdGZuTG9hZFN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5sb2FkQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5sb2FkQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNhdmVzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZSB0byBXaWtpcGVkaWEuXG5cdFx0ICogTXVzdCBiZSBwcmVjZWRlZCBieSBzdWNjZXNzZnVsbHkgY2FsbGluZyBgbG9hZCgpYC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6IENhbGxpbmcgYHNhdmUoKWAgY2FuIHJlc3VsdCBpbiBhZGRpdGlvbmFsIGNhbGxzIHRvIHRoZVxuXHRcdCAqIHByZXZpb3VzIGBsb2FkKClgIGNhbGxiYWNrcyB0byByZWNvdmVyIGZyb20gZWRpdCBjb25mbGljdHMhIEluIHRoaXNcblx0XHQgKiBjYXNlLCBjYWxsZXJzIG11c3QgbWFrZSB0aGUgc2FtZSBlZGl0IHRvIHRoZSBuZXcgcGFnZVRleHQgYW5kXG5cdFx0ICogcmUtaW52b2tlIGBzYXZlKClgLiAgVGhpcyBiZWhhdmlvciBjYW4gYmUgZGlzYWJsZWQgd2l0aFxuXHRcdCAqIGBzZXRNYXhDb25mbGljdFJldHJpZXMoMClgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5zYXZlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBhcmUgd2UgZ2V0dGluZyBvdXIgZWRpdGluZyB0b2tlbiBmcm9tIG13LnVzZXIudG9rZW5zP1xuXHRcdFx0Y29uc3QgY2FuVXNlTXdVc2VyVG9rZW4gPSBmbkNhblVzZU13VXNlclRva2VuKCdlZGl0Jyk7XG5cdFx0XHRpZiAoIWN0eC5wYWdlTG9hZGVkICYmICFjYW5Vc2VNd1VzZXJUb2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGF0dGVtcHQgdG8gc2F2ZSBhIHBhZ2UgdGhhdCBoYXMgbm90IGJlZW4gbG9hZGVkIScpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdFx0Ly8gbmV3IHNlY3Rpb24gbW9kZSBhbGxvd3MgKG5heSwgZW5jb3VyYWdlcykgdXNpbmcgdGhlXG5cdFx0XHRcdC8vIHRpdGxlIGFzIHRoZSBlZGl0IHN1bW1hcnksIGJ1dCB0aGUgcXVlcnkgbmVlZHNcblx0XHRcdFx0Ly8gZWRpdFN1bW1hcnkgdG8gYmUgdW5kZWZpbmVkIG9yICcnLCBub3QgbnVsbFxuXHRcdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnbmV3JyAmJiBjdHgubmV3U2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gJyc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBlZGl0IHN1bW1hcnkgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHNob3VsZG4ndCBoYXBwZW4gaWYgY2FuVXNlTXdVc2VyVG9rZW4gPT09IHRydWVcblx0XHRcdGlmIChcblx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkICYmXG5cdFx0XHRcdCFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHRcdD8gd2luZG93LndnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0J+KAne+8iOaXoOmZkOacn++8ieOAglxcblxcbuWNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdFx0XHQn44CN77yI54Sh6ZmQ5pyf77yJ44CCXFxuXFxu6bue5pOK56K65a6a5Lul56K65a6a77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdDogYCR7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3vvIjliLDmnJ/vvJonLCAn44CN77yI5Yiw5pyf77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGN0eC5mdWxseVByb3RlY3RlZCkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdH0gKFVUQynvvInjgIJcXG5cXG4ke3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn6bue5pOK56K65a6a5Lul56K65a6a77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0XHQpfWBcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE57yW6L6R44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOe3qOi8r+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5yZXRyaWVzID0gMDtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0c3VtbWFyeTogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR0b2tlbjogY2FuVXNlTXdVc2VyVG9rZW4gPyBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpIDogY3R4LmNzcmZUb2tlbixcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBjdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXQgbWlub3IgZWRpdCBhdHRyaWJ1dGUuIElmIHRoZXNlIHBhcmFtZXRlcnMgYXJlIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRcdGlmIChjdHgubWlub3JFZGl0KSB7XG5cdFx0XHRcdHF1ZXJ5Lm1pbm9yID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHF1ZXJ5Lm5vdG1pbm9yID0gdHJ1ZTsgLy8gZm9yY2UgVHdpbmtsZSBjb25maWcgdG8gb3ZlcnJpZGUgdXNlciBwcmVmZXJlbmNlIHNldHRpbmcgZm9yIFwiYWxsIGVkaXRzIGFyZSBtaW5vclwiXG5cdFx0XHR9XG5cdFx0XHQvLyBTZXQgYm90IGVkaXQgYXR0cmlidXRlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBwcmVzZW50IHdpdGggYW55IHZhbHVlLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0cnVlXG5cdFx0XHRpZiAoY3R4LmJvdEVkaXQpIHtcblx0XHRcdFx0cXVlcnkuYm90ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAoY3R4LmVkaXRNb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FwcGVuZCc6XG5cdFx0XHRcdFx0aWYgKGN0eC5hcHBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGFwcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkuYXBwZW5kdGV4dCA9IGN0eC5hcHBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBhcHBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3ByZXBlbmQnOlxuXHRcdFx0XHRcdGlmIChjdHgucHJlcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcHJlcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkucHJlcGVuZHRleHQgPSBjdHgucHJlcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIHByZXBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ldyc6XG5cdFx0XHRcdFx0aWYgKCFjdHgubmV3U2VjdGlvblRleHQpIHtcblx0XHRcdFx0XHRcdC8vIEFQSSBkb2Vzbid0IGFsbG93IGVtcHR5IG5ldyBzZWN0aW9uIHRleHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbmV3IHNlY3Rpb24gdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSAnbmV3Jztcblx0XHRcdFx0XHRxdWVyeS50ZXh0ID0gY3R4Lm5ld1NlY3Rpb25UZXh0OyAvLyBhZGQgYSBuZXcgc2VjdGlvbiB0byBjdXJyZW50IHBhZ2Vcblx0XHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBjdHgubmV3U2VjdGlvblRpdGxlIHx8IGN0eC5lZGl0U3VtbWFyeTsgLy8gZG9uZSBieSB0aGUgQVBJLCBidXQgbm9uLScnIHZhbHVlcyB3b3VsZCBnZXQgdHJlYXRlZCBhcyB0ZXh0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdFx0cXVlcnkudW5kbyA9IGN0eC5yZXZlcnRDdXJJRDtcblx0XHRcdFx0XHRxdWVyeS51bmRvYWZ0ZXIgPSBjdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHRcdFx0aWYgKGN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSBjdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRxdWVyeS5zdGFydHRpbWVzdGFtcCA9IGN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vICdhbGwnXG5cdFx0XHRcdFx0cXVlcnkudGV4dCA9IGN0eC5wYWdlVGV4dDsgLy8gcmVwbGFjZSBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2Vcblx0XHRcdFx0XHRpZiAoY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdFx0cXVlcnkuYmFzZXRpbWVzdGFtcCA9IGN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gY3R4LmxvYWRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZGVsZXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkIChkb24ndCByZWNyZWF0ZSBiYWQgc3R1ZmYpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoWydyZWNyZWF0ZScsICdjcmVhdGVvbmx5JywgJ25vY3JlYXRlJ10uaW5jbHVkZXMoY3R4LmNyZWF0ZU9wdGlvbikpIHtcblx0XHRcdFx0cXVlcnlbY3R4LmNyZWF0ZU9wdGlvbl0gPSAnJztcblx0XHRcdH1cblx0XHRcdGlmIChjYW5Vc2VNd1VzZXJUb2tlbiAmJiBjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnNhdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+d5a2Y6aG16Z2i4oCm4oCmJywgJ+WEsuWtmOmggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5TYXZlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuU2F2ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnNhdmVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldEFwcGVuZFRleHQoKWAgdG8gdGhlIGVuZCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLmFwcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRQcmVwZW5kVGV4dCgpYCB0byB0aGUgc3RhcnQgb2YgdGhlXG5cdFx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdFx0ICogZXhwaXJ5IGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLnByZXBlbmQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIG5ldyBzZWN0aW9uIHdpdGggdGhlIHRleHQgcHJvdmlkZWQgYnkgYHNldE5ld1NlY3Rpb25UZXh0KClgXG5cdFx0ICogYW5kIHNlY3Rpb24gdGl0bGUgZnJvbSBgc2V0TmV3U2VjdGlvblRpdGxlKClgLlxuXHRcdCAqIElmIGBlZGl0U3VtbWFyeWAgaXMgcHJvdmlkZWQsIHRoYXQgd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlXG5cdFx0ICogYXV0b2dlbmVyYXRlZCBcIi0+VGl0bGUgKG5ldyBzZWN0aW9uXCIgZWRpdCBzdW1tYXJ5LlxuXHRcdCAqIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0IGV4cGlyeVxuXHRcdCAqIGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLm5ld1NlY3Rpb24gPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGxvYWRlZCBwYWdlLCBpbmNsdWRpbmcgdGhlIG5hbWVzcGFjZSAqL1xuXHRcdHRoaXMuZ2V0UGFnZU5hbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VOYW1lO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0ZXh0IG9mIHRoZSBwYWdlIGFmdGVyIGEgc3VjY2Vzc2Z1bCBsb2FkKCkgKi9cblx0XHR0aGlzLmdldFBhZ2VUZXh0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gcGFnZVRleHQgLSBVcGRhdGVkIHBhZ2UgdGV4dCB0aGF0IHdpbGwgYmUgc2F2ZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldFBhZ2VUZXh0ID0gKHBhZ2VUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJztcblx0XHRcdGN0eC5wYWdlVGV4dCA9IHBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBhcHBlbmRUZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgYXBwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0QXBwZW5kVGV4dCA9IChhcHBlbmRUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGN0eC5hcHBlbmRUZXh0ID0gYXBwZW5kVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gcHJlcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBwcmVwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgcHJlcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldFByZXBlbmRUZXh0ID0gKHByZXBlbmRUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0XHRjdHgucHJlcGVuZFRleHQgPSBwcmVwZW5kVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gbmV3U2VjdGlvblRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhZGRlZCBpbiBhIG5ldyBzZWN0aW9uIG9uIHRoZSBwYWdlIHdoZW4gYG5ld1NlY3Rpb24oKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGV4dCA9IChuZXdTZWN0aW9uVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRjdHgubmV3U2VjdGlvblRleHQgPSBuZXdTZWN0aW9uVGV4dDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGl0bGUgLSBUaXRsZSBmb3IgdGhlIG5ldyBzZWN0aW9uIGNyZWF0ZWQgd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWRcblx0XHQgKiBJZiBtaXNzaW5nLCBgY3R4LmVkaXRTdW1tYXJ5YCB3aWxsIGJlIHVzZWQuIElzc3VlcyBtYXkgb2NjdXIgaWYgYSBzdWJzdGl0dXRlZCB0ZW1wbGF0ZSBpcyB1c2VkLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TmV3U2VjdGlvblRpdGxlID0gKG5ld1NlY3Rpb25UaXRsZSkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRjdHgubmV3U2VjdGlvblRpdGxlID0gbmV3U2VjdGlvblRpdGxlO1xuXHRcdH07XG5cdFx0Ly8gRWRpdC1yZWxhdGVkIHNldHRlciBtZXRob2RzOlxuXHRcdC8qKlxuXHRcdCAqIFNldCB0aGUgZWRpdCBzdW1tYXJ5IHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkLlxuXHRcdCAqIFVubmVjZXNzYXJ5IGlmIGVkaXRNb2RlIGlzICduZXcnIGFuZCBuZXdTZWN0aW9uVGl0bGUgaXMgcHJvdmlkZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFN1bW1hcnkgPSAoc3VtbWFyeSkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gc3VtbWFyeTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCBhbnkgY3VzdG9tIHRhZyhzKSB0byBiZSBhcHBsaWVkIHRvIHRoZSBBUEkgYWN0aW9uLlxuXHRcdCAqIEEgbnVtYmVyIG9mIGFjdGlvbnMgZG9uJ3Qgc3VwcG9ydCBpdCwgbW9zdCBub3RhYmx5IHdhdGNoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3MgLSBTdHJpbmcgb3IgYXJyYXkgb2YgdGFnKHMpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q2hhbmdlVGFncyA9ICh0YWdzKSA9PiB7XG5cdFx0XHRjdHguY2hhbmdlVGFncyA9IHRhZ3M7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2NyZWF0ZU9wdGlvbj1udWxsXSAtIENhbiB0YWtlIHRoZSBmb2xsb3dpbmcgZm91ciB2YWx1ZXM6XG5cdFx0ICogLSByZWNyZWF0ZTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBvciBlZGl0IGl0IGlmIGl0IGV4aXN0cy5cblx0XHQgKiAtIGNyZWF0ZW9ubHk6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgYnV0IHJldHVybiBhblxuXHRcdCAqIGVycm9yIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHRcdCAqIC0gbm9jcmVhdGU6IGRvbid0IGNyZWF0ZSB0aGUgcGFnZSwgb25seSBlZGl0IGl0IGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHRcdCAqIC0gYG51bGxgOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIHVubGVzcyBpdCB3YXMgZGVsZXRlZFxuXHRcdCAqIGluIHRoZSBtb21lbnQgYmV0d2VlbiBsb2FkaW5nIHRoZSBwYWdlIGFuZCBzYXZpbmcgdGhlIGVkaXQgKGRlZmF1bHQpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q3JlYXRlT3B0aW9uID0gKGNyZWF0ZU9wdGlvbikgPT4ge1xuXHRcdFx0Y3R4LmNyZWF0ZU9wdGlvbiA9IGNyZWF0ZU9wdGlvbjtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IG1pbm9yRWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBtaW5vciBlZGl0LiAqL1xuXHRcdHRoaXMuc2V0TWlub3JFZGl0ID0gKG1pbm9yRWRpdCkgPT4ge1xuXHRcdFx0Y3R4Lm1pbm9yRWRpdCA9IG1pbm9yRWRpdDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGJvdEVkaXQgLSBTZXQgdHJ1ZSB0byBtYXJrIHRoZSBlZGl0IGFzIGEgYm90IGVkaXQgKi9cblx0XHR0aGlzLnNldEJvdEVkaXQgPSAoYm90RWRpdCkgPT4ge1xuXHRcdFx0Y3R4LmJvdEVkaXQgPSBib3RFZGl0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTZWN0aW9uIC0gSW50ZWdlciBzcGVjaWZ5aW5nIHRoZSBzZWN0aW9uIG51bWJlciB0byBsb2FkIG9yIHNhdmUuXG5cdFx0ICogSWYgc3BlY2lmaWVkIGFzIGBudWxsYCwgdGhlIGVudGlyZSBwYWdlIHdpbGwgYmUgcmV0cmlldmVkLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0UGFnZVNlY3Rpb24gPSAocGFnZVNlY3Rpb24pID0+IHtcblx0XHRcdGN0eC5wYWdlU2VjdGlvbiA9IHBhZ2VTZWN0aW9uO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1heENvbmZsaWN0UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBpbnZvbHZpbmcgYW4gZWRpdCBjb25mbGljdCBvclxuXHRcdCAqIGxvc3Mgb2YgdG9rZW4uIERlZmF1bHQ6IDIuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRNYXhDb25mbGljdFJldHJpZXMgPSAobWF4Q29uZmxpY3RSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4Q29uZmxpY3RSZXRyaWVzID0gbWF4Q29uZmxpY3RSZXRyaWVzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgbm90IGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heFJldHJpZXMgPSAobWF4UmV0cmllcykgPT4ge1xuXHRcdFx0Y3R4Lm1heFJldHJpZXMgPSBtYXhSZXRyaWVzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IHdoZXRoZXIgYW5kIGhvdyB0byB3YXRjaCB0aGUgcGFnZSwgaW5jbHVkaW5nIHNldHRpbmcgYW4gZXhwaXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufHN0cmluZ3xNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0XHQgKiBCYXNpY2FsbHkgYSBtaXggb2YgTVcgQVBJIGFuZCBUd2lua2xleSBvcHRpb25zIGF2YWlsYWJsZSBwcmUtZXhwaXJ5OlxuXHRcdCAqIC0gYHRydWVgfGAneWVzJ2B8YCd3YXRjaCdgOiBwYWdlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHVzZXInc1xuXHRcdCAqIHdhdGNobGlzdCB3aGVuIHRoZSBhY3Rpb24gaXMgY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlXG5cdFx0ICogd2F0Y2ggdW5sZXNzIGB3YXRjaGxpc3RFeHBpcnlgIGlzIHByb3ZpZGVkLlxuXHRcdCAqIC0gYGZhbHNlYHxgJ25vJ2B8YCdub2NoYW5nZSdgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIChpbmNsdWRpbmcgZXhwaXJ5KSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHRcdCAqIC0gYCdkZWZhdWx0J2B8YCdwcmVmZXJlbmNlcydgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgYmVcblx0XHQgKiBzZXQgYmFzZWQgb24gdGhlIHVzZXIncyBwcmVmZXJlbmNlIHNldHRpbmdzIHdoZW4gdGhlIGFjdGlvbiBpc1xuXHRcdCAqIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZSB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXNcblx0XHQgKiBwcm92aWRlZC5cblx0XHQgKiAtIGAndW53YXRjaCdgOiBleHBsaWNpdGx5IHVud2F0Y2ggdGhlIHBhZ2UuXG5cdFx0ICogLSBBbnkgb3RoZXIgYHN0cmluZ2Agb3IgYG51bWJlcmAsIG9yIGEgYE1vcmViaXRzLmRhdGVgIG9yIGBEYXRlYFxuXHRcdCAqIG9iamVjdDogd2F0Y2ggcGFnZSB1bnRpbCB0aGUgc3BlY2lmaWVkIHRpbWUsIGRlZmVycmluZyB0b1xuXHRcdCAqIGB3YXRjaGxpc3RFeHBpcnlgIGlmIHByb3ZpZGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0XHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHRcdCAqIGNhbiBiZSByZWxhdGl2ZSAoMiB3ZWVrcykgb3Igb3RoZXIgc2ltaWxhcmx5IGRhdGUtbGlrZSAoaS5lLiBOT1QgXCJwb3RhdG9cIik6XG5cdFx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdFx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHRcdCAqIFVOSVg6IDIxNDc0ODM2NDdcblx0XHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0XHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHRcdCAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL3NvdXJjZS9tZWRpYXdpa2ktbGlicy1UaW1lc3RhbXAvYnJvd3NlL21hc3Rlci9zcmMvQ29udmVydGlibGVUaW1lc3RhbXAucGhwOzRlNTNiODU5YTk1ODBjNTU5NTgwNzhmNDZkZDRmM2E0NGQwZmNhYTAkNTctMTA5P2FzPXNvdXJjZSZibGFtZT1vZmZ9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3QgPSAod2F0Y2hsaXN0T3B0aW9uLCB3YXRjaGxpc3RFeHBpcnkpID0+IHtcblx0XHRcdGlmICh3YXRjaGxpc3RPcHRpb24gaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0T3B0aW9uID0gd2F0Y2hsaXN0T3B0aW9uLnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gJ2luZmluaXR5Jztcblx0XHRcdH0gZWxzZSBpZiAod2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh3YXRjaGxpc3RPcHRpb24pIHtcblx0XHRcdFx0Y2FzZSAnbm9jaGFuZ2UnOlxuXHRcdFx0XHRjYXNlICdubyc6XG5cdFx0XHRcdGNhc2UgZmFsc2U6XG5cdFx0XHRcdGNhc2UgdW5kZWZpbmVkOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0XHRcdC8vIFRoZSBNVyBBUEkgYWxsb3dzIGZvciBjaGFuZ2luZyBleHBpcnkgd2l0aCBub2NoYW5nZSAoYXMgXCJub2NoYW5nZVwiIHJlZmVycyB0byB0aGUgYmluYXJ5IHN0YXR1cyksXG5cdFx0XHRcdFx0Ly8gYnV0IGJ5IGtlZXBpbmcgdGhpcyBudWxsIGl0IHdpbGwgZGVmYXVsdCB0byBhbnkgZXhpc3RpbmcgZXhwaXJ5LCBlbnN1cmUgdGhlcmUgaXMgYWN0dWFsbHkgXCJubyBjaGFuZ2UuXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gbnVsbDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndW53YXRjaCc6XG5cdFx0XHRcdFx0Ly8gZXhwaXJ5IHVuaW1wb3J0YW50XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd1bndhdGNoJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncHJlZmVyZW5jZXMnOlxuXHRcdFx0XHRjYXNlICdkZWZhdWx0Jzpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdFx0XHQvLyBUaGUgQVBJIGFsbG93cyBhbiBleHBpcnkgaGVyZSwgYnV0IHRoZXJlIGlzIGFzIG9mIHlldCAoVDI2NTcxNilcblx0XHRcdFx0XHQvLyBubyBleHBpcnkgcHJlZmVyZW5jZSBvcHRpb24sIHNvIGl0J3MgYSBiaXQgZGV2b2lkIG9mIGNvbnRleHQuXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0XHRjYXNlIHRydWU6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd3YXRjaCc7XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBOb3QgcmVhbGx5IGEgXCJkZWZhdWx0XCIgcGVyIHNlIGJ1dCBjYXRjaGVzIFwiYW55IG90aGVyIHN0cmluZ1wiXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd3YXRjaCc7XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdE9wdGlvbjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCBhIHdhdGNobGlzdCBleHBpcnkuIHNldFdhdGNobGlzdCBjYW4gbW9zdGx5IGhhbmRsZSB0aGlzIGJ5XG5cdFx0ICogaXRzZWxmLCBzbyB0aGlzIGlzIGhlcmUgbGFyZ2VseSBmb3IgY29tcGxldGVuZXNzIGFuZCBjb21wYXRpYmlsaXR5XG5cdFx0ICogd2l0aCB0aGUgZnVsbCBzdWl0ZSBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEV4cGlyeSA9ICh3YXRjaGxpc3RFeHBpcnkpID0+IHtcblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQGRlcHJlY2F0ZWQgQXMgb2YgRGVjZW1iZXIgMjAyMCwgdXNlIHNldFdhdGNobGlzdC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0XHQgKiAtIGBUcnVlYDogcGFnZSB3YXRjaGxpc3Qgc3RhdHVzIHdpbGwgYmUgc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3Ncblx0XHQgKiBwcmVmZXJlbmNlIHNldHRpbmdzIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkLlxuXHRcdCAqIC0gYEZhbHNlYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHRcdCAqXG5cdFx0ICogV2F0Y2hsaXN0IG5vdGVzOlxuXHRcdCAqIDEuIFRoZSBNZWRpYVdpa2kgQVBJIHZhbHVlIG9mICd1bndhdGNoJywgd2hpY2ggZXhwbGljaXRseSByZW1vdmVzXG5cdFx0ICogdGhlIHBhZ2UgZnJvbSB0aGUgdXNlcidzIHdhdGNobGlzdCwgaXMgbm90IHVzZWQuXG5cdFx0ICogMi4gSWYgYm90aCBgc2V0V2F0Y2hsaXN0KClgIGFuZCBgc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKClgIGFyZVxuXHRcdCAqIGNhbGxlZCwgdGhlIGxhc3QgY2FsbCB0YWtlcyBwcmlvcml0eS5cblx0XHQgKiAzLiBUd2lua2xlIG1vZHVsZXMgc2hvdWxkIHVzZSB0aGUgYXBwcm9wcmlhdGUgcHJlZmVyZW5jZSB0byBzZXQgdGhlIHdhdGNobGlzdCBvcHRpb25zLlxuXHRcdCAqIDQuIE1vc3QgVHdpbmtsZSBtb2R1bGVzIHVzZSBgc2V0V2F0Y2hsaXN0KClgLiBgc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKClgXG5cdFx0ICogaXMgb25seSBuZWVkZWQgZm9yIHRoZSBmZXcgVHdpbmtsZSB3YXRjaGxpc3QgcHJlZmVyZW5jZXMgdGhhdFxuXHRcdCAqIGFjY2VwdCBhIHN0cmluZyB2YWx1ZSBvZiBgZGVmYXVsdGAuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgPSAod2F0Y2hsaXN0T3B0aW9uKSA9PiB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kucGFnZS5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgd2FzIGRlcHJlY2F0ZWQgRGVjZW1iZXIgMjAyMCwgcGxlYXNlIHVzZSBzZXRXYXRjaGxpc3QnXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93UmVkaXJlY3Q9ZmFsc2VdIC1cblx0XHQgKiAtIGB0cnVlYDogYSBtYXhpbXVtIG9mIG9uZSByZWRpcmVjdCB3aWxsIGJlIGZvbGxvd2VkLiBJbiB0aGUgZXZlbnRcblx0XHQgKiBvZiBhIHJlZGlyZWN0LCBhIG1lc3NhZ2UgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGFuZCB0aGUgcmVkaXJlY3Rcblx0XHQgKiB0YXJnZXQgY2FuIGJlIHJldHJpZXZlZCB3aXRoIGdldFBhZ2VOYW1lKCkuXG5cdFx0ICogLSBgZmFsc2VgOiAoZGVmYXVsdCkgdGhlIHJlcXVlc3RlZCBwYWdlTmFtZSB3aWxsIGJlIHVzZWQgd2l0aG91dCByZWdhcmQgdG8gYW55IHJlZGlyZWN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd0Nyb3NzTnNSZWRpcmVjdD10cnVlXSAtIE5vdCBhcHBsaWNhYmxlIGlmIGBmb2xsb3dSZWRpcmVjdGAgaXMgbm90IHNldCB0cnVlLlxuXHRcdCAqIC0gYHRydWVgOiAoZGVmYXVsdCkgZm9sbG93IHJlZGlyZWN0IGV2ZW4gaWYgaXQgaXMgYSBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Rcblx0XHQgKiAtIGBmYWxzZWA6IGRvbid0IGZvbGxvdyByZWRpcmVjdCBpZiBpdCBpcyBjcm9zcy1uYW1lc3BhY2UsIGVkaXQgdGhlIHJlZGlyZWN0IGl0c2VsZi5cblx0XHQgKi9cblx0XHR0aGlzLnNldEZvbGxvd1JlZGlyZWN0ID0gKGZvbGxvd1JlZGlyZWN0LCBmb2xsb3dDcm9zc05zUmVkaXJlY3QpID0+IHtcblx0XHRcdGlmIChjdHgucGFnZUxvYWRlZCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IGNhbm5vdCBjaGFuZ2UgcmVkaXJlY3Qgc2V0dGluZyBhZnRlciB0aGUgcGFnZSBoYXMgYmVlbiBsb2FkZWQhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZm9sbG93UmVkaXJlY3QgPSBmb2xsb3dSZWRpcmVjdDtcblx0XHRcdGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgPVxuXHRcdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3QgPT09IHVuZGVmaW5lZCA/IGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgOiBmb2xsb3dDcm9zc05zUmVkaXJlY3Q7XG5cdFx0fTtcblx0XHQvLyBsb29rdXAtY3JlYXRpb24gc2V0dGVyIGZ1bmN0aW9uXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBmbGFnIC0gSWYgc2V0IHRydWUsIHRoZSBhdXRob3IgYW5kIHRpbWVzdGFtcCBvZlxuXHRcdCAqIHRoZSBmaXJzdCBub24tcmVkaXJlY3QgdmVyc2lvbiBvZiB0aGUgcGFnZSBpcyByZXRyaWV2ZWQuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOlxuXHRcdCAqIDEuIElmIHRoZXJlIGFyZSBubyByZXZpc2lvbnMgYW1vbmcgdGhlIGZpcnN0IDUwIHRoYXQgYXJlXG5cdFx0ICogbm9uLXJlZGlyZWN0cywgb3IgaWYgdGhlcmUgYXJlIGxlc3MgNTAgcmV2aXNpb25zIGFuZCBhbGwgYXJlXG5cdFx0ICogcmVkaXJlY3RzLCB0aGUgb3JpZ2luYWwgY3JlYXRpb24gaXMgcmV0cmlldmVkLlxuXHRcdCAqIDIuIFJldmlzaW9ucyB0aGF0IHRoZSB1c2VyIGlzIG5vdCBwcml2aWxlZ2VkIHRvIGFjY2Vzc1xuXHRcdCAqIChyZXZkZWxlZC9zdXBwcmVzc2VkKSB3aWxsIGJlIHRyZWF0ZWQgYXMgbm9uLXJlZGlyZWN0cy5cblx0XHQgKiAzLiBNdXN0IG5vdCBiZSB1c2VkIHdoZW4gdGhlIHBhZ2UgaGFzIGEgbm9uLXdpa2l0ZXh0IGNvbnRlbnRtb2RlbFxuXHRcdCAqIHN1Y2ggYXMgTW9kdWxlc3BhY2UgTHVhIG9yIHVzZXIgSmF2YVNjcmlwdC9DU1MuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZsYWc7XG5cdFx0fTtcblx0XHQvLyBNb3ZlLXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gZGVzdGluYXRpb24gKi9cblx0XHR0aGlzLnNldE1vdmVEZXN0aW5hdGlvbiA9IChkZXN0aW5hdGlvbikgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVRhbGtQYWdlID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlVGFsa1BhZ2UgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlU3VicGFnZXMgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdWJwYWdlcyA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8vIFByb3RlY3QtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIC0gVGhlIHJpZ2h0IHJlcXVpcmVkIGZvciB0aGUgc3BlY2lmaWMgYWN0aW9uXG5cdFx0ICogZS5nLiBzeXNvcCwgdGVtcGxhdGVlZGl0b3IsIGF1dG9jb25maXJtZWRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGlyeT1pbmZpbml0eV1cblx0XHQgKi9cblx0XHR0aGlzLnNldEVkaXRQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRNb3ZlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0Q3JlYXRlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDYXNjYWRpbmdQcm90ZWN0aW9uID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdHRoaXMuc3VwcHJlc3NQcm90ZWN0V2FybmluZyA9ICgpID0+IHtcblx0XHRcdGN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gdHJ1ZTtcblx0XHR9O1xuXHRcdC8vIFJldmVydC1yZWxhdGVkIGdldHRlcnMvc2V0dGVyczpcblx0XHR0aGlzLnNldE9sZElEID0gKG9sZElEKSA9PiB7XG5cdFx0XHRjdHgucmV2ZXJ0T2xkSUQgPSBvbGRJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY3VycmVudCByZXZpc2lvbiBJRCBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0Q3VycmVudElEID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRDdXJJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBMYXN0IGVkaXRvciBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0UmV2aXNpb25Vc2VyID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRVc2VyO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBlZGl0ZWQuICovXG5cdFx0dGhpcy5nZXRMYXN0RWRpdFRpbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4Lmxhc3RFZGl0VGltZTtcblx0XHR9O1xuXHRcdC8vIE1pc2NlbGxhbmVvdXMgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdC8qKlxuXHRcdCAqIERlZmluZSBhbiBvYmplY3QgZm9yIHVzZSBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogYGNhbGxiYWNrUGFyYW1ldGVyc2AgaXMgZm9yIHVzZSBieSB0aGUgY2FsbGVyIG9ubHkuIFRoZSBwYXJhbWV0ZXJzXG5cdFx0ICogYWxsb3cgYSBjYWxsZXIgdG8gcGFzcyB0aGUgcHJvcGVyIGNvbnRleHQgaW50byBpdHMgY2FsbGJhY2tcblx0XHQgKiBmdW5jdGlvbi4gIENhbGxlcnMgbXVzdCBlbnN1cmUgdGhhdCBhbnkgY2hhbmdlcyB0byB0aGVcblx0XHQgKiBjYWxsYmFja1BhcmFtZXRlcnMgb2JqZWN0IHdpdGhpbiBhIGBsb2FkKClgIGNhbGxiYWNrIHN0aWxsIHBlcm1pdCBhXG5cdFx0ICogcHJvcGVyIHJlLWVudHJ5IGludG8gdGhlIGBsb2FkKClgIGNhbGxiYWNrIGlmIGFuIGVkaXQgY29uZmxpY3QgaXNcblx0XHQgKiBkZXRlY3RlZCB1cG9uIGNhbGxpbmcgYHNhdmUoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2tQYXJhbWV0ZXJzXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoY2FsbGJhY2tQYXJhbWV0ZXJzKSA9PiB7XG5cdFx0XHRjdHguY2FsbGJhY2tQYXJhbWV0ZXJzID0gY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gLSBUaGUgb2JqZWN0IHByZXZpb3VzbHkgc2V0IGJ5IGBzZXRDYWxsYmFja1BhcmFtZXRlcnMoKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNhbGxiYWNrUGFyYW1ldGVycztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50ID0gKHN0YXR1c0VsZW1lbnQpID0+IHtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IFN0YXR1cyBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYWdlIGV4aXN0ZWQgb24gdGhlIHdpa2kgd2hlbiBpdCB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5leGlzdHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VFeGlzdHM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBQYWdlIElEIG9mIHRoZSBwYWdlIGxvYWRlZC4gMCBpZiB0aGUgcGFnZSBkb2Vzbid0XG5cdFx0ICogZXhpc3QuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRQYWdlSUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VJRDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udGVudCBtb2RlbCBvZiB0aGUgcGFnZS4gIFBvc3NpYmxlIHZhbHVlc1xuXHRcdCAqIGluY2x1ZGUgKGJ1dCBtYXkgbm90IGJlIGxpbWl0ZWQgdG8pOiBgd2lraXRleHRgLCBgamF2YXNjcmlwdGAsXG5cdFx0ICogYGNzc2AsIGBqc29uYCwgYFNjcmlidW50b2AsIGBzYW5pdGl6ZWQtY3NzYCwgYE1hc3NNZXNzYWdlTGlzdENvbnRlbnRgLlxuXHRcdCAqIEFsc28gZ2V0dGFibGUgdmlhIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDb250ZW50TW9kZWwgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNvbnRlbnRNb2RlbDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBXYXRjaGVkIHN0YXR1cyBvZiB0aGUgcGFnZS4gQm9vbGVhblxuXHRcdCAqIHVubGVzcyBpdCdzIGJlaW5nIHdhdGNoZWQgdGVtcG9yYXJpbHksIGluIHdoaWNoIGNhc2UgcmV0dXJucyB0aGVcblx0XHQgKiBleHBpcnkgc3RyaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0V2F0Y2hlZCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgud2F0Y2hlZDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRMb2FkVGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubG9hZFRpbWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRvciA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY3JlYXRvcjtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBJU09TdHJpbmcgdGltZXN0YW1wIG9mIHBhZ2UgY3JlYXRpb24gZm9sbG93aW5nIGBsb29rdXBDcmVhdGlvbigpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENyZWF0aW9uVGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC50aW1lc3RhbXA7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgb3Igbm90IHlvdSBjYW4gZWRpdCB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuY2FuRWRpdCA9ICgpID0+IHtcblx0XHRcdHJldHVybiAhIWN0eC50ZXN0QWN0aW9ucyAmJiBjdHgudGVzdEFjdGlvbnMuaW5jbHVkZXMoJ2VkaXQnKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldHJpZXZlcyB0aGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIHBhZ2UgYXMgd2VsbCBhc1xuXHRcdCAqIHRoZSB0aW1lc3RhbXAgb2YgY3JlYXRpb24uICBUaGUgdXNlcm5hbWUgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0XHQgKiBgZ2V0Q3JlYXRvcigpYCBmdW5jdGlvbjsgdGhlIHRpbWVzdGFtcCBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdGlvblRpbWVzdGFtcCgpYCBmdW5jdGlvbi5cblx0XHQgKiBQcmlvciB0byBKdW5lIDIwMTkga25vd24gYXMgYGxvb2t1cENyZWF0b3IoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSB1c2VybmFtZSBhbmQgdGltZXN0YW1wIGFyZSBmb3VuZCB3aXRoaW4gdGhlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5cblx0XHQgKiB0aGUgbG9va3VwIGZhaWxzXG5cdFx0ICovXG5cdFx0dGhpcy5sb29rdXBDcmVhdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb29rdXBDcmVhdGlvbigpIScpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZwcm9wOiAndXNlcnx0aW1lc3RhbXAnLFxuXHRcdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSB0aGUgd2lraXRleHQgY29udGVudCBtb2RlbCBjYW4gcmVsaWFibHkgaGFuZGxlXG5cdFx0XHQvLyBydnNlY3Rpb24sIG90aGVycyByZXR1cm4gYW4gZXJyb3Igd2hlbiBwYWlyZWQgd2l0aCB0aGVcblx0XHRcdC8vIGNvbnRlbnQgcnZwcm9wLiBSZWxhdGVkbHksIG5vbi13aWtpdGV4dCBtb2RlbHMgZG9uJ3Rcblx0XHRcdC8vIHVuZGVyc3RhbmQgdGhlICNSRURJUkVDVCBjb25jZXB0LCBzbyB3ZSBzaG91bGRuJ3QgYXR0ZW1wdFxuXHRcdFx0Ly8gdGhlIHJlZGlyZWN0IHJlc29sdXRpb24gaW4gZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3Ncblx0XHRcdGlmIChjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yKSB7XG5cdFx0XHRcdHF1ZXJ5LnJ2c2VjdGlvbiA9IDA7XG5cdFx0XHRcdHF1ZXJ5LnJ2cHJvcCArPSAnfGNvbnRlbnQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouWIm+W7uuiAheS/oeaBrycsICfmipPlj5bpoIHpnaLlu7rnq4vogIXos4foqIonKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSZXZlcnRzIGEgcGFnZSB0byBgcmV2ZXJ0T2xkSURgIHNldCBieSBgc2V0T2xkSURgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMucmV2ZXJ0ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWN0eC5yZXZlcnRPbGRJRCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHJldmlzaW9uIElEIHRvIHJldmVydCB0byB3YXMgbm90IHNldCBiZWZvcmUgcmV2ZXJ0IScpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3JldmVydCc7XG5cdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogTW92ZXMgYSBwYWdlIHRvIGFub3RoZXIgdGl0bGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5tb3ZlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Nb3ZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ21vdmUnLCBjdHgub25Nb3ZlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN0eC5tb3ZlRGVzdGluYXRpb24pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBkZXN0aW5hdGlvbiBwYWdlIG5hbWUgd2FzIG5vdCBzZXQgYmVmb3JlIG1vdmUhJyk7XG5cdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc01vdmUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ21vdmUnKTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzTW92ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgubW92ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE1hcmtzIHRoZSBwYWdlIGFzIHBhdHJvbGxlZCwgdXNpbmcgYHJjaWRgIChpZiBhdmFpbGFibGUpIG9yIGByZXZpZGAuXG5cdFx0ICpcblx0XHQgKiBQYXRyb2xsaW5nIGFzIHN1Y2ggZG9lc24ndCBuZWVkIHRvIHJlbHkgb24gbG9hZGluZyB0aGUgcGFnZSBpblxuXHRcdCAqIHF1ZXN0aW9uOyBzaW1wbHkgcGFzc2luZyBhIHJldmlkIHRvIHRoZSBBUEkgaXMgc3VmZmljaWVudCwgc28gaW5cblx0XHQgKiB0aG9zZSBjYXNlcyBqdXN0IHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gaXMgcHJvYmFibHkgcHJlZmVyYWJsZS5cblx0XHQgKlxuXHRcdCAqIE5vIGVycm9yIGhhbmRsaW5nIHNpbmNlIHdlIGRvbid0IGFjdHVhbGx5IGNhcmUgYWJvdXQgdGhlIGVycm9ycy5cblx0XHQgKi9cblx0XHR0aGlzLnBhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIU1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0Ly8gSWYgYSBsaW5rIGlzIHByZXNlbnQsIGRvbid0IG5lZWQgdG8gY2hlY2sgaWYgaXQncyBwYXRyb2xsZWRcblx0XHRcdGlmICgkYm9keS5maW5kKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xocmVmID0gJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsgYScpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0Y3R4LnJjaWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JjaWQnLCBwYXRyb2xocmVmKTtcblx0XHRcdFx0Zm5Qcm9jZXNzUGF0cm9sKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcGF0cm9sUXVlcnkgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0XHQvLyBhcyBsb25nIGFzIHdlJ3JlIHF1ZXJ5aW5nLCBtaWdodCBhcyB3ZWxsIGdldCBhIHRva2VuXG5cdFx0XHRcdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBwYWdlIGlzIHVucGF0cm9sbGVkXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNwcm9wOiAncGF0cm9sbGVkJyxcblx0XHRcdFx0XHRyY3RpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNsaW1pdDogMSxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRwYXRyb2xRdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NQYXRyb2xcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Ly8gfGRlbGV0ZXwgaXMgYSByZXNlcnZlZCB3b3JkIGluIHNvbWUgZmxhdm91cnMgb2YgSlNcblx0XHQvKipcblx0XHQgKiBEZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLmRlbGV0ZVBhZ2UgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25EZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVW5kZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnVuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3VuZGVsZXRlJywgY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCd1bmRlbGV0ZScpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBQcm90ZWN0cyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5wcm90ZWN0ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Qcm90ZWN0U3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3Byb3RlY3QnLCBjdHgub25Qcm90ZWN0RmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0RWRpdCAmJiAhY3R4LnByb3RlY3RNb3ZlICYmICFjdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IHlvdSBtdXN0IHNldCBlZGl0IGFuZC9vciBtb3ZlIGFuZC9vciBjcmVhdGUgcHJvdGVjdGlvbiBiZWZvcmUgY2FsbGluZyBwcm90ZWN0KCkhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYmVjYXVzZSBvZiB0aGUgd2F5IE1XIEFQSSBpbnRlcnByZXRzIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0XHQvLyAoYWJzb2x1dGUsIG5vdCBkaWZmZXJlbnRpYWwpLCB3ZSBhbHdheXMgbmVlZCB0byByZXF1ZXN0XG5cdFx0XHQvLyBwcm90ZWN0aW9uIGxldmVscyBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3Byb3RlY3QnKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUHJvY2Vzc1Byb3RlY3QsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qXG5cdFx0ICogUHJpdmF0ZSBtZW1iZXIgZnVuY3Rpb25zXG5cdFx0ICogVGhlc2UgYXJlIG5vdCBleHBvc2VkIG91dHNpZGVcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgd2UgY2FuIHNhdmUgYW4gQVBJIGNhbGwgYnkgdXNpbmcgdGhlIGNzcmYgdG9rZW5cblx0XHQgKiBzZW50IHdpdGggdGhlIHBhZ2UgSFRNTCwgb3Igd2hldGhlciB3ZSBuZWVkIHRvIGFzayB0aGUgc2VydmVyIGZvclxuXHRcdCAqIG1vcmUgaW5mbyAoZS5nLiBwcm90ZWN0aW9uIG9yIHdhdGNobGlzdCBleHBpcnkpLlxuXHRcdCAqXG5cdFx0ICogQ3VycmVudGx5IHVzZWQgZm9yIGBhcHBlbmRgLCBgcHJlcGVuZGAsIGBuZXdTZWN0aW9uYCwgYG1vdmVgLFxuXHRcdCAqIGBkZWxldGVQYWdlYCwgYW5kIGB1bmRlbGV0ZVBhZ2VgLiBOb3QgdXNlZCBmb3IgYHByb3RlY3RgXG5cdFx0ICogc2luY2UgaXQgYWx3YXlzIG5lZWRzIHRvIHJlcXVlc3QgcHJvdGVjdGlvbiBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2FjdGlvbj1lZGl0XSAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLlxuXHRcdCAqIFwiZWRpdFwiIG9yIFwiZGVsZXRlXCIuIEluIHByYWN0aWNlLCBvbmx5IFwiZWRpdFwiIG9yIFwibm90ZWRpdFwiIG1hdHRlcnMuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5DYW5Vc2VNd1VzZXJUb2tlbiA9IChhY3Rpb24pID0+IHtcblx0XHRcdGFjdGlvbiB8fD0gJ2VkaXQnO1xuXHRcdFx0Ly8gSWYgYSB3YXRjaGxpc3QgZXhwaXJ5IGlzIHNldCwgd2UgbXVzdCBhbHdheXMgbG9hZCB0aGUgcGFnZVxuXHRcdFx0Ly8gdG8gYXZvaWQgb3ZlcndyaXRpbmcgaW5kZWZpbml0ZSBwcm90ZWN0aW9uLiAgT2YgY291cnNlLCBub3Rcblx0XHRcdC8vIG5lZWRlZCBpZiBzZXR0aW5nIGluZGVmaW5pdGUgd2F0Y2hpbmchXG5cdFx0XHRpZiAoY3R4LndhdGNobGlzdEV4cGlyeSAmJiAhTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQVBJLWJhc2VkIHJlZGlyZWN0IHJlc29sdXRpb24gb25seSB3b3JrcyBmb3IgYWN0aW9uPXF1ZXJ5IGFuZFxuXHRcdFx0Ly8gYWN0aW9uPWVkaXQgaW4gYXBwZW5kL3ByZXBlbmQvbmV3IG1vZGVzXG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGlmICghY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gbXVzdCBsb2FkIHRoZSBwYWdlIHRvIGNoZWNrIGZvciBjcm9zcyBuYW1lc3BhY2UgcmVkaXJlY3RzXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWN0aW9uICE9PSAnZWRpdCcgfHwgY3R4LmVkaXRNb2RlID09PSAnYWxsJyB8fCBjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBkbyB3ZSBuZWVkIHRvIGZldGNoIHRoZSBlZGl0IHByb3RlY3Rpb24gZXhwaXJ5P1xuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wICYmICFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKE1vcmViaXRzLnBhZ2VOYW1lTm9ybSkuZ2V0UHJlZml4ZWRUZXh0KCkgIT09XG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHdnUmVzdHJpY3Rpb25FZGl0IGlzIG51bGwgb24gbm9uLWV4aXN0ZW50IHBhZ2VzLFxuXHRcdFx0XHQvLyBzbyB0aGlzIG5lYXRseSBoYW5kbGVzIG5vbmV4aXN0ZW50IHBhZ2VzXG5cdFx0XHRcdGNvbnN0IGVkaXRSZXN0cmljdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnUmVzdHJpY3Rpb25FZGl0Jyk7XG5cdFx0XHRcdGlmICghZWRpdFJlc3RyaWN0aW9uIHx8IGVkaXRSZXN0cmljdGlvbi5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICEhbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdoZW4gZnVuY3Rpb25zIGNhbid0IHVzZVxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V+Zm5DYW5Vc2VNd1VzZXJUb2tlbnxmbkNhblVzZU13VXNlclRva2VufVxuXHRcdCAqIG9yIHJlcXVpcmUgY2hlY2tpbmcgcHJvdGVjdGlvbiBvciB3YXRjaGVkIHN0YXR1cywgbWFpbnRhaW4gdGhlIHF1ZXJ5XG5cdFx0ICogaW4gb25lIHBsYWNlLiBVc2VkIGZvciB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2RlbGV0ZVBhZ2V8ZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI3VuZGVsZXRlUGFnZXx1bmRlbGV0ZX0sXG5cdFx0ICoge0BsaW5rKiBNb3JlYml0cy53aWtpLnBhZ2UjcHJvdGVjdHxwcm90ZWN0fSxcblx0XHQgKiBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNtb3ZlfG1vdmV9XG5cdFx0ICogKGJhc2ljYWxseSwganVzdCBub3Qge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNsb2FkfGxvYWR9KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy4gXCJlZGl0XCIgb3Jcblx0XHQgKiBcImRlbGV0ZVwiLlxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IEFwcHJvcHJpYXRlIHF1ZXJ5LlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuTmVlZFRva2VuSW5mb1F1ZXJ5ID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIFByb3RlY3Rpb24gbm90IGNoZWNrZWQgZm9yIG5vbi1zeXNvcCBtb3Zlc1xuXHRcdFx0aWYgKGFjdGlvbiAhPT0gJ21vdmUnIHx8IE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdHF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCAmJiBhY3Rpb24gIT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBxdWVyeTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZFN1Y2Nlc3MoKSBmb3IgYXBwZW5kKCksIHByZXBlbmQoKSwgYW5kIG5ld1NlY3Rpb24oKSB0aHJlYWRzXG5cdFx0Y29uc3QgZm5BdXRvU2F2ZSA9IChwYWdlb2JqKSA9PiB7XG5cdFx0XHRwYWdlb2JqLnNhdmUoY3R4Lm9uU2F2ZVN1Y2Nlc3MsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZEFwaS5wb3N0KClcblx0XHRjb25zdCBmbkxvYWRTdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIGN0eC5vbkxvYWRGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0bGV0IHJldjtcblx0XHRcdGN0eC5wYWdlRXhpc3RzID0gIXBhZ2UubWlzc2luZztcblx0XHRcdGlmIChjdHgucGFnZUV4aXN0cykge1xuXHRcdFx0XHRbcmV2XSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0XHRjdHgubGFzdEVkaXRUaW1lID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcmV2LmNvbnRlbnQ7XG5cdFx0XHRcdGN0eC5wYWdlSUQgPSBwYWdlLnBhZ2VpZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5wYWdlVGV4dCA9ICcnOyAvLyBhbGxvdyBmb3IgY29uY2F0ZW5hdGlvbiwgZXRjLlxuXHRcdFx0XHRjdHgucGFnZUlEID0gMDsgLy8gbm9uZXhpc3RlbnQgaW4gcmVzcG9uc2UsIG1hdGNoZXMgd2dBcnRpY2xlSWRcblx0XHRcdH1cblxuXHRcdFx0Y3R4LmNzcmZUb2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRpZiAoIWN0eC5jc3JmVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5bnvJbovpHku6TniYzjgIInLCAn5pyq6IO95Y+W5b6X57eo6Lyv5qyK5p2W44CCJykpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRUaW1lID0gY3R4LmxvYWRBcGkuZ2V0UmVzcG9uc2UoKS5jdXJ0aW1lc3RhbXA7XG5cdFx0XHRpZiAoIWN0eC5sb2FkVGltZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluW9k+WJjeaXtumXtOaIs+OAgicsICfmnKrog73lj5blvpfnlbbliY3mmYLplpPmiLPjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguY29udGVudE1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvLCB0byBhbGVydCBhZG1pbnMgd2hlbiB0aGV5IGFyZSBhYm91dCB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2Vcblx0XHRcdC8vIEluY2x1ZGVzIGNhc2NhZGluZyBwcm90ZWN0aW9uXG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y29uc3QgZWRpdFByb3QgPSBwYWdlLnByb3RlY3Rpb25cblx0XHRcdFx0XHQuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdlZGl0JyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5wb3AoKTtcblx0XHRcdFx0aWYgKGVkaXRQcm90KSB7XG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID0gZWRpdFByb3QuZXhwaXJ5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjdHgucmV2ZXJ0Q3VySUQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdGNvbnN0IHRlc3RhY3Rpb25zID0gcGFnZS5hY3Rpb25zO1xuXHRcdFx0Y3R4LnRlc3RBY3Rpb25zID0gW107IC8vIHdhcyBudWxsXG5cdFx0XHRmb3IgKGNvbnN0IGFjdGlvbiBvZiBPYmplY3Qua2V5cyh0ZXN0YWN0aW9ucykpIHtcblx0XHRcdFx0aWYgKHRlc3RhY3Rpb25zW2FjdGlvbl0pIHtcblx0XHRcdFx0XHRjdHgudGVzdEFjdGlvbnNbY3R4LnRlc3RBY3Rpb25zLmxlbmd0aF0gPSBhY3Rpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHJldiAmJiByZXYucmV2aWQ7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydEN1cklEKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5blvZPliY3kv67orqLniYjmnKxJROOAgicsICfmnKrog73lj5blvpfnm67liY3kv67oqILniYjmnKxJROOAgicpKTtcblx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnJldmVydFVzZXIgPSByZXYgJiYgcmV2LnVzZXI7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydFVzZXIpIHtcblx0XHRcdFx0XHRpZiAocmV2ICYmIHJldi51c2VyaGlkZGVuKSB7XG5cdFx0XHRcdFx0XHQvLyB1c2VybmFtZSB3YXMgUmV2RGVsJ2Qgb3Igb3ZlcnNpZ2h0ZWRcblx0XHRcdFx0XHRcdGN0eC5yZXZlcnRVc2VyID0gd2luZG93LndnVUxTKCc855So5oi35ZCN5bey6ZqQ6JePPicsICc85L2/55So6ICF5ZCN56ix5bey6Zqx6JePPicpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmnKrog73ojrflj5bmraTkv67orqLniYjmnKznmoTnvJbovpHogIXjgIInLCAn5pyq6IO95Y+W5b6X5q2k5L+u6KiC54mI5pys55qE57eo6Lyv6ICF44CCJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gc2V0IHJldmVydCBlZGl0IHN1bW1hcnlcblx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gYFtbUVc6VU5ET3zmkqTplIBdXeeUsSAke2N0eC5yZXZlcnRVc2VyfSDmiYDlgZrlh7rnmoQke3dpbmRvdy53Z1VMUygn5L+u6K6iICcsICfkv67oqIIgJyl9JHtcblx0XHRcdFx0XHRjdHgucmV2ZXJ0T2xkSURcblx0XHRcdFx0fe+8miR7Y3R4LmVkaXRTdW1tYXJ5fWA7XG5cdFx0XHR9XG5cdFx0XHRjdHgucGFnZUxvYWRlZCA9IHRydWU7XG5cdFx0XHQvLyBtdy5ub3RpZnkoXCJHZW5lcmF0ZSBlZGl0IGNvbmZsaWN0IG5vd1wiLCB7dHlwZTogJ3dhcm4nLCB0YWc6ICdtb3JlYml0cyd9KTsgIC8vIGZvciB0ZXN0aW5nIGVkaXQgY29uZmxpY3QgcmVjb3ZlcnkgbG9naWNcblx0XHRcdGN0eC5vbkxvYWRTdWNjZXNzKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHR9O1xuXHRcdC8vIGhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSB0aGUgcGFnZSBuYW1lIHJldHVybmVkIGZyb20gdGhlIEFQSVxuXHRcdGNvbnN0IGZuQ2hlY2tQYWdlTmFtZSA9IGZ1bmN0aW9uIChyZXNwb25zZSwgb25GYWlsdXJlKSB7XG5cdFx0XHRpZiAoIW9uRmFpbHVyZSkge1xuXHRcdFx0XHRvbkZhaWx1cmUgPSBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZSA9IHJlc3BvbnNlLnBhZ2VzICYmIHJlc3BvbnNlLnBhZ2VzWzBdO1xuXHRcdFx0aWYgKHBhZ2UpIHtcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIGludmFsaWQgdGl0bGVzXG5cdFx0XHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+agh+mimOS4jeWQiOazle+8micsIGDmqJnpoYzkuI3lkIjms5XvvJoke2N0eC5wYWdlTmFtZX1gKSk7XG5cdFx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyByZXRyaWV2ZSBhY3R1YWwgdGl0bGUgb2YgdGhlIHBhZ2UgYWZ0ZXIgbm9ybWFsaXphdGlvbiBhbmQgcmVkaXJlY3RzXG5cdFx0XHRcdGNvbnN0IHJlc29sdmVkTmFtZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHQvLyBjaGVjayBmb3IgY3Jvc3MtbmFtZXNwYWNlIHJlZGlyZWN0OlxuXHRcdFx0XHRcdGNvbnN0IG9yaWdOcyA9IG5ldyBtdy5UaXRsZShjdHgucGFnZU5hbWUpLm5hbWVzcGFjZTtcblx0XHRcdFx0XHRjb25zdCBuZXdOcyA9IG5ldyBtdy5UaXRsZShyZXNvbHZlZE5hbWUpLm5hbWVzcGFjZTtcblx0XHRcdFx0XHRpZiAob3JpZ05zICE9PSBuZXdOcyAmJiAhY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmmK/ot6jlkb3lkI3nqbrpl7Tph43lrprlkJHliLAnLCAn5piv6Leo5ZG95ZCN56m66ZaT6YeN5paw5bCO5ZCR5YiwJykgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfvvIznlaXov4cnLCAn77yM55Wl6YGOJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIG9ubHkgbm90aWZ5IHVzZXIgZm9yIHJlZGlyZWN0cywgbm90IG5vcm1hbGl6YXRpb25cblx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkv6Hmga8nLCAn6LOH6KiKJyksXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S7jiAnLCAn5b6eICcpICtcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg6YeN5a6a5ZCR5YiwICcsICcg6YeN5paw5bCO5ZCR5YiwICcpICtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZWROYW1lXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucGFnZU5hbWUgPSByZXNvbHZlZE5hbWU7IC8vIHVwZGF0ZSB0byByZWRpcmVjdCB0YXJnZXQgb3Igbm9ybWFsaXplZCBuYW1lXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjb3VsZCBiZSBhIGNpcmN1bGFyIHJlZGlyZWN0IG9yIG90aGVyIHByb2JsZW1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73op6PmnpDpobXpnaLnmoTph43lrprlkJHvvJonLCAn5LiN6IO96Kej5p6Q6aCB6Z2i55qE6YeN5paw5bCO5ZCR77yaJykgKyBjdHgucGFnZU5hbWVcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHByb3ZpZGUgYSB3YXRjaGxpc3QgZXhwaXJ5LiAgV2lsbCBub3Rcblx0XHQgKiBkbyBzbyBpZiB0aGUgcGFnZSBpcyBjdXJyZW50bHkgcGVybWFuZW50bHkgd2F0Y2hlZCwgb3IgdGhlIGN1cnJlbnRcblx0XHQgKiBleHBpcnkgaXMgKmFmdGVyKiB0aGUgbmV3LCBwcm92aWRlZCBleHBpcnkuICBPbmx5IGhhbmRsZXMgc3RyaW5nc1xuXHRcdCAqIHJlY29nbml6ZWQgYnkge0BsaW5rIE1vcmViaXRzLmRhdGV9IG9yIHJlbGF0aXZlIHRpbWVmcmFtZXMgd2l0aFxuXHRcdCAqIHVuaXQgaXQgY2FuIHByb2Nlc3MuICBSZWxpZXMgb24gdGhlIGZhY3QgdGhhdCBmbkNhblVzZU13VXNlclRva2VuXG5cdFx0ICogcmVxdWlyZXMgcGFnZSBsb2FkaW5nIGlmIGEgd2F0Y2hsaXN0ZXhwaXJ5IGlzIHByb3ZpZGVkLCBzbyB3ZSBhcmVcblx0XHQgKiBlbnN1cmVkIG9mIGtub3dpbmcgdGhlIHdhdGNoIHN0YXR1cyBieSB0aGUgdXNlIG9mIHRoaXMuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5ID0gKCkgPT4ge1xuXHRcdFx0aWYgKGN0eC53YXRjaGxpc3RFeHBpcnkpIHtcblx0XHRcdFx0aWYgKCFjdHgud2F0Y2hlZCB8fCBNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShjdHgud2F0Y2hsaXN0RXhwaXJ5KSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjdHgud2F0Y2hlZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRsZXQgbmV3RXhwaXJ5O1xuXHRcdFx0XHRcdC8vIEF0dGVtcHQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBuZXcgZXhwaXJ5IGlzIGFcblx0XHRcdFx0XHQvLyByZWxhdGl2ZSAoZS5nLiBgMSBtb250aGApIG9yIGFic29sdXRlIGRhdGV0aW1lXG5cdFx0XHRcdFx0Y29uc3QgcmVsID0gY3R4LndhdGNobGlzdEV4cGlyeS5zcGxpdCgnICcpO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZSgpLmFkZChyZWxbMF0sIHJlbFsxXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZShjdHgud2F0Y2hsaXN0RXhwaXJ5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGRhdGUgaXMgdmFsaWQsIG9ubHkgdXNlIGl0IGlmIGl0IGV4dGVuZHMgdGhlIGN1cnJlbnQgZXhwaXJ5XG5cdFx0XHRcdFx0aWYgKG5ld0V4cGlyeS5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNBZnRlcihuZXcgTW9yZWJpdHMuZGF0ZShjdHgud2F0Y2hlZCkpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBJZiBpdCdzIHN0aWxsIG5vdCB2YWxpZCwgaG9wZSBpdCdzIGEgdmFsaWQgTVcgZXhwaXJ5IGZvcm1hdCB0aGF0XG5cdFx0XHRcdFx0XHQvLyBNb3JlYml0cy5kYXRlIGRvZXNuJ3QgcmVjb2duaXplLCBzbyBqdXN0IGRlZmF1bHQgdG8gdXNpbmcgaXQuXG5cdFx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgYWxzbyBpbmNsdWRlIG1pbm9yIHR5cG9zLlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5TYXZlU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnNhdmVBcGkuZ2V0UmVzcG9uc2UoKTtcblx0XHRcdC8vIHNlZSBpZiB0aGUgQVBJIHRoaW5rcyB3ZSB3ZXJlIHN1Y2Nlc3NmdWxcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdC8vIHJlYWwgc3VjY2Vzc1xuXHRcdFx0XHQvLyBkZWZhdWx0IG9uIHN1Y2Nlc3MgYWN0aW9uIC0gZGlzcGxheSBsaW5rIGZvciBlZGl0ZWQgcGFnZVxuXHRcdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKGN0eC5wYWdlTmFtZSkpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN0eC5wYWdlTmFtZSkpO1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKFsn5a6M5oiQ77yIJywgbGluaywgJ++8iSddKTtcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVTdWNjZXNzKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZXJyb3JzIGhlcmUgYXJlIG9ubHkgZ2VuZXJhdGVkIGJ5IGV4dGVuc2lvbnMgd2hpY2ggaG9vayBBUElFZGl0QmVmb3JlU2F2ZSB3aXRoaW4gTWVkaWFXaWtpLFxuXHRcdFx0Ly8gd2hpY2ggYXMgb2YgMS4zNC4wLXdtZi4yMyAoU2VwdCAyMDE5KSBzaG91bGQgb25seSBlbmNvbXBhc3MgY2FwdGNoYSBtZXNzYWdlc1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY2FwdGNoYSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboOacjeWKoeWZqOimgeaxguaCqOi+k+WFpemqjOivgeeggeOAgicsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6DkvLrmnI3lmajopoHmsYLmgqjovLjlhaXpqZforYnnorzjgIInKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkv53lrZjpobXpnaLml7bnlLFBUEnlvpfliLDmnKrnn6XplJnor68nLCAn5YSy5a2Y6aCB6Z2i5pmC55SxQVBJ5b6X5Yiw5pyq55+l6Yyv6KqkJykpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuU2F2ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LnNhdmVBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgZWRpdCBjb25mbGljdFxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2VkaXRjb25mbGljdCcgJiYgY3R4LmNvbmZsaWN0UmV0cmllcysrIDwgY3R4Lm1heENvbmZsaWN0UmV0cmllcykge1xuXHRcdFx0XHQvLyBlZGl0IGNvbmZsaWN0cyBjYW4gb2NjdXIgd2hlbiB0aGUgcGFnZSBuZWVkcyB0byBiZSBwdXJnZWQgZnJvbSB0aGUgc2VydmVyIGNhY2hlXG5cdFx0XHRcdGNvbnN0IHB1cmdlUXVlcnkgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLCAvLyByZWRpcmVjdHMgYXJlIGFscmVhZHkgcmVzb2x2ZWRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCBwdXJnZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOato+WcqOabtOaWsOacjeWKoeWZqOe8k+WtmCcsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzmraPlnKjmm7TmlrDkvLrmnI3lmajlv6vlj5YnKSxcblx0XHRcdFx0XHRwdXJnZVF1ZXJ5LFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzph43or5Xkv67mlLknLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM6YeN6Kmm5L+u5pS5JykpO1xuXHRcdFx0XHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHRcdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7IC8vIG5lY2Vzc2FyaWx5IGFwcGVuZCwgcHJlcGVuZCwgb3IgbmV3U2VjdGlvbiwgc28gdGhpcyBzaG91bGQgd29yayBhcyBkZXNpcmVkXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdHgubG9hZEFwaS5wb3N0KCk7IC8vIHJlbG9hZCB0aGUgcGFnZSBhbmQgcmVhcHBseSB0aGUgZWRpdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnRcblx0XHRcdFx0KTtcblx0XHRcdFx0cHVyZ2VBcGkucG9zdCgpO1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgbmV0d29yayBvciBzZXJ2ZXIgZXJyb3Jcblx0XHRcdH0gZWxzZSBpZiAoKGVycm9yQ29kZSA9PT0gbnVsbCB8fCBlcnJvckNvZGUgPT09IHVuZGVmaW5lZCkgJiYgY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdC8vIHRoZSBlcnJvciBtaWdodCBiZSB0cmFuc2llbnQsIHNvIHRyeSBhZ2FpblxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5L+d5a2Y5aSx6LSl77yM5ZyoMuenkuWQjumHjeivleKApuKApicsICflhLLlrZjlpLHmlZfvvIzlnKgy56eS5b6M6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdC8vIHdhaXQgZm9yIHNvbWV0aW1lIGZvciBjbGllbnQgdG8gcmVnYWluIGNvbm5lY3Rpdml0eVxuXHRcdFx0XHRzbGVlcCgyMDAwKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnNhdmVBcGkuZ2V0UmVzcG9uc2UoKTtcblx0XHRcdFx0Y29uc3QgZXJyb3JEYXRhID1cblx0XHRcdFx0XHRyZXNwb25zZS5lcnJvciB8fFxuXHRcdFx0XHRcdC8vIGJjIGVycm9yIGZvcm1hdFxuXHRcdFx0XHRcdHJlc3BvbnNlLmVycm9yc1swXS5kYXRhOyAvLyBodG1sL3dpa2l0ZXh0L3BsYWludGV4dCBlcnJvciBmb3JtYXRcblx0XHRcdFx0c3dpdGNoIChlcnJvckNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdwcm90ZWN0ZWRwYWdlJzpcblx0XHRcdFx0XHRcdC8vIG5vbi1hZG1pbiBhdHRlbXB0aW5nIHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZSAtIHRoaXMgZ2l2ZXMgYSBmcmllbmRsaWVyIG1lc3NhZ2UgdGhhbiB0aGUgZGVmYXVsdFxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJrpobXpnaLooqvkv53miqQnLCAn5LiN6IO95YSy5a2Y5L+u5pS577ya6aCB6Z2i6KKr5L+d6K23JykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnYWJ1c2VmaWx0ZXItZGlzYWxsb3dlZCc6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yRGF0YS5hYnVzZWZpbHRlci5kZXNjcmlwdGlvbiArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0J+KAnemYu+atouOAguiLpeaCqOiupOS4uuaCqOeahOivpeasoee8lui+keaYr+acieaEj+S5ieeahO+8jOivt+iHsyBXaWtpcGVkaWE66Ziy5rul55So6L+H5ruk5ZmoL+mUmeivr+aKpeWRiiDmj5DmiqXjgIInLFxuXHRcdFx0XHRcdFx0XHRcdFx0J+OAjemYu+atouOAguiLpeaCqOiqjeeCuuaCqOeahOipsuasoee3qOi8r+aYr+acieaEj+e+qeeahO+8jOiri+iHsyBXaWtpcGVkaWE66Ziy5r+r55So6YGO5r++5ZmoL+mMr+iqpOWgseWRiiDmj5DloLHjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLXdhcm5pbmcnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoW1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSxcblx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+KAneitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuivpee8lui+ke+8jOivt+WwneivlemHjeaWsOaPkOS6pO+8jOagueaNrui/h+a7pOWZqOeahOiuvue9ruaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe8lui+keOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+OAjeitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuipsue3qOi8r++8jOiri+WYl+ippumHjeaWsOaPkOS6pO+8jOagueaTmumBjua/vuWZqOeahOioreWumuaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe3qOi8r+OAgidcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBhIHdheSB0byBhdXRvbWF0aWNhbGx5IHJldHJ5IHRoZSBhY3Rpb24gaWYgdGhleSBzbyBjaG9vc2UgLVxuXHRcdFx0XHRcdFx0Ly8gSSBjYW4ndCBzZWUgaG93IHRvIGRvIHRoaXMgd2l0aG91dCBjcmVhdGluZyBhIFVJIGRlcGVuZGVuY3kgb24gTW9yZWJpdHMud2lraS5wYWdlIHRob3VnaCAtLSBUVE9cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3NwYW1ibGFja2xpc3QnOiB7XG5cdFx0XHRcdFx0XHQvLyBJZiBtdWx0aXBsZSBpdGVtcyBhcmUgYmxhY2tsaXN0ZWQsIHdlIG9ubHkgcmV0dXJuIHRoZSBmaXJzdFxuXHRcdFx0XHRcdFx0Y29uc3QgW3NwYW1dID0gZXJyb3JEYXRhLnNwYW1ibGFja2xpc3QubWF0Y2hlcztcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboFVSTCAnLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5ZugVVJMICcpICtcblx0XHRcdFx0XHRcdFx0XHRzcGFtICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlnKjlnoPlnL7pk77mjqXpu5HlkI3ljZXkuK3jgIInLCAnIOWcqOWeg+WcvumAo+e1kOm7keWQjeWWruS4reOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJonLCAn5LiN6IO95YSy5a2Y5L+u5pS577yaJykgKyBjdHguc2F2ZUFwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRcdGlmIChjdHgub25TYXZlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBpc1RleHRSZWRpcmVjdCA9ICh0ZXh0KSA9PiB7XG5cdFx0XHRpZiAoIXRleHQpIHtcblx0XHRcdFx0Ly8gbm8gdGV4dCAtIGNvbnRlbnQgZW1wdHkgb3IgaW5hY2Nlc3NpYmxlIChyZXZkZWxsZWQgb3Igc3VwcHJlc3NlZClcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmwxMG4ucmVkaXJlY3RUYWdBbGlhc2VzLnNvbWUoKHRhZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxzKiR7dGFnfVxcXFxXYCwgJ2knKS50ZXN0KHRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJldiA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucyAmJiByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRpZiAoIXJldikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleaJvuWIsCcsICfnhKHms5Xmib7liLAnKSArXG5cdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnmoTku7vkvZXkv67orqLniYjmnKwnLCAn55qE5Lu75L2V5L+u6KiC54mI5pysJylcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IgfHwgIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRjdHguY3JlYXRvciA9IHJldi51c2VyO1xuXHRcdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu65pe26Ze0JywgJ+eEoeazleWPluW+l+mggemdouW7uueri+aZgumWkycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCflt7Lojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5bey5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJykpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3ModGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnkucnZsaW1pdCA9IDUwOyAvLyBtb2RpZnkgcHJldmlvdXMgcXVlcnkgdG8gZmV0Y2ggbW9yZSByZXZpc2lvbnNcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnRpdGxlcyA9IGN0eC5wYWdlTmFtZTsgLy8gdXBkYXRlIHBhZ2VOYW1lIGlmIHJlZGlyZWN0IHJlc29sdXRpb24gdG9vayBwbGFjZSBpbiBlYXJsaWVyIHF1ZXJ5XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSxcblx0XHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnksXG5cdFx0XHRcdFx0Zm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRjb25zdCByZXZzID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zO1xuXHRcdFx0Zm9yIChjb25zdCByZXYgb2YgcmV2cykge1xuXHRcdFx0XHRpZiAoIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0Ly8gZmFsbGJhY2sgdG8gZ2l2ZSBmaXJzdCByZXZpc2lvbiBhdXRob3IgaWYgbm8gbm9uLXJlZGlyZWN0IHZlcnNpb24gaW4gdGhlIGZpcnN0IDUwXG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2c1swXS51c2VyO1xuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2c1swXS50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgudGltZXN0YW1wKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu65pe26Ze0JywgJ+eEoeazleWPluW+l+mggemdouW7uueri+aZgumWkycpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGFjdGlvbiBtZXRob2RzLiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLFxuXHRcdCAqIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJlZmxpZ2h0Q2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlKSB7XG5cdFx0XHQvLyBpZiBhIG5vbi1hZG1pbiB0cmllcyB0byBkbyB0aGlzLCBkb24ndCBib3RoZXJcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgYWN0aW9uICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2c77ya5Y+q5pyJ566h55CG5ZGY5Y+v5Lul6L+b6KGM5q2k5pON5L2cJywgJ+OAjeaTjeS9nO+8muWPquacieeuoeeQhuWToeWPr+S7pemAsuihjOatpOaTjeS9nCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoYEludGVybmFsIGVycm9yOiAke2FjdGlvbn0gcmVhc29uIG5vdCBzZXQgKHVzZSBzZXRFZGl0U3VtbWFyeSBmdW5jdGlvbikhYCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ29tbW9uIGNoZWNrcyBmb3IgZm5Qcm9jZXNzIGZ1bmN0aW9ucyAoYGZuUHJvY2Vzc0RlbGV0ZWAsIGBmblByb2Nlc3NNb3ZlYCwgZXRjLlxuXHRcdCAqIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZSAtIFRoZSByZXNwb25zZSBkb2N1bWVudCBmcm9tIHRoZSBBUEkgY2FsbC5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmblByb2Nlc3NDaGVja3MgPSBmdW5jdGlvbiAoYWN0aW9uLCBvbkZhaWx1cmUsIHJlc3BvbnNlKSB7XG5cdFx0XHRjb25zdCBbe21pc3Npbmd9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0Ly8gTm8gdW5kZWxldGUgYXMgYW4gZXhpc3RpbmcgcGFnZSBjb3VsZCBoYXZlIGRlbGV0ZWQgcmV2aXNpb25zXG5cdFx0XHRjb25zdCBhY3Rpb25NaXNzaW5nID0gbWlzc2luZyAmJiBbJ2RlbGV0ZScsICdtb3ZlJ10uaW5jbHVkZXMoYWN0aW9uKTtcblx0XHRcdGNvbnN0IHByb3RlY3RNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgbWlzc2luZyAmJiAoY3R4LnByb3RlY3RFZGl0IHx8IGN0eC5wcm90ZWN0TW92ZSk7XG5cdFx0XHRjb25zdCBzYWx0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmICFtaXNzaW5nICYmIGN0eC5wcm90ZWN0Q3JlYXRlO1xuXHRcdFx0aWYgKGFjdGlvbk1pc3NpbmcgfHwgcHJvdGVjdE1pc3NpbmcgfHwgc2FsdE1pc3NpbmcpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0YCR7XG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvIzlm6DkuLrpobXpnaInLCAn44CN5pON5L2c77yM5Zug54K66aCB6Z2iJykgK1xuXHRcdFx0XHRcdFx0KG1pc3NpbmcgPyAn5bey5LiNJyA6IHdpbmRvdy53Z1VMUygn5bey57uPJywgJ+W3sue2kycpKVxuXHRcdFx0XHRcdH3lrZjlnKhgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVsZXRlLCB1bmRlbGV0ZSwgbW92ZVxuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm9cblx0XHRcdGxldCBlZGl0cHJvdDtcblx0XHRcdGlmIChhY3Rpb24gPT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uXG5cdFx0XHRcdFx0LmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnY3JlYXRlJyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5wb3AoKTtcblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAnZGVsZXRlJyB8fCBhY3Rpb24gPT09ICdtb3ZlJykge1xuXHRcdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb25cblx0XHRcdFx0XHQuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdlZGl0JyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5wb3AoKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0ZWRpdHByb3QgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG5a+55YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+WwjeWFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHQoZWRpdHByb3QuZXhwaXJ5ID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHRcdD8gd2luZG93LndnVUxTKCfigJ3vvIjmsLjkuYXvvIknLCAn44CN77yI5rC45LmF77yJJylcblx0XHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGVkaXRwcm90LmV4cGlyeSkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8iWApICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd6L+b6KGM4oCcJywgJ+OAjemAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nCcsICfjgI3mk43kvZwnKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnu6fnu63mk43kvZzvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu6bue5pOK56K65a6a5Lul57m857qM5pON5L2c77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTmk43kvZzjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE5pON5L2c44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPluS7pOeJjOOAgicsICfnhKHms5Xlj5blvpfmrIrmnZbjgIInKSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NNb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5tb3ZlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdtb3ZlJywgY3R4Lm9uTW92ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ21vdmUnLFxuXHRcdFx0XHRmcm9tOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRvOiBjdHgubW92ZURlc3RpbmF0aW9uLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVRhbGtQYWdlKSB7XG5cdFx0XHRcdHF1ZXJ5Lm1vdmV0YWxrID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlU3VicGFnZXMpIHtcblx0XHRcdFx0cXVlcnkubW92ZXN1YnBhZ2VzID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5ub3JlZGlyZWN0ID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+enu+WKqOmhtemdouKApuKApicsICfnp7vli5XpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc1BhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXRyb2wnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBEaWRuJ3QgbmVlZCB0byBsb2FkIHRoZSBwYWdlXG5cdFx0XHRpZiAoY3R4LnJjaWQpIHtcblx0XHRcdFx0cXVlcnkucmNpZCA9IGN0eC5yY2lkO1xuXHRcdFx0XHRxdWVyeS50b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgncGF0cm9sVG9rZW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnBhdHJvbEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHQvLyBEb24ndCBwYXRyb2wgaWYgbm90IHVucGF0cm9sbGVkXG5cdFx0XHRcdGlmICghcmVzcG9uc2UucmVjZW50Y2hhbmdlc1swXS51bnBhdHJvbGxlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBbe2xhc3RyZXZpZH1dID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdGlmICghbGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnJldmlkID0gbGFzdHJldmlkO1xuXHRcdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGlmICghdG9rZW4pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdH1cblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXRyb2xTdGF0ID0gbmV3IE1vcmViaXRzLnN0YXR1cyh3aW5kb3cud2dVTFMoJ+agh+iusOmhtemdouS4uuW3suW3oeafpScsICfmqJnoqJjpoIHpnaLngrrlt7Llt6Hmn6UnKSk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCflt6Hmn6XpobXpnaLigKbigKYnLCAn5beh5p+l6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRwYXRyb2xTdGF0XG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdkZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LmRlbGV0ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygnZGVsZXRlJywgY3R4Lm9uRGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZGVsZXRlJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfliKDpmaTpobXpnaLigKbigKYnLCAn5Yiq6Zmk6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25EZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJyAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yQ29kZSA9PT0gJ21pc3Npbmd0aXRsZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkuI3og73liKDpmaTpobXpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnLCAn5LiN6IO95Yiq6Zmk6aCB6Z2i77yM5Zug5YW25bey5LiN5a2Y5ZyoJykpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uRGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHguZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5Yig6Zmk6aG16Z2i77yaJywgJ+eEoeazleWIqumZpOmggemdou+8micpICsgY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbigndW5kZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnVuZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCd1bmRlbGV0ZScsIGN0eC5vblVuZGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAndW5kZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6L+Y5Y6f6aG16Z2i4oCm4oCmJywgJ+mChOWOn+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KClcblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJykge1xuXHRcdFx0XHRpZiAoY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfmjIHnu63nmoTmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43mlrDliqDovb3pobXpnaLlubbph43or5UnLFxuXHRcdFx0XHRcdFx0XHQn5oyB57qM55qE6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN5paw6LyJ5YWl6aCB6Z2i5Lim6YeN6KmmJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvckNvZGUgPT09ICdjYW50dW5kZWxldGUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdCfml6Dms5Xov5jljp/liKDpmaTpobXpnaLvvIzlm6DmsqHmnInniYjmnKzkvpvov5jljp/miJblt7Looqvov5jljp8nLFxuXHRcdFx0XHRcdFx0J+eEoeazlemChOWOn+WIqumZpOmggemdou+8jOWboOaykuacieeJiOacrOS+m+mChOWOn+aIluW3suiiq+mChOWOnydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xov5jljp/pobXpnaLvvJonLCAn54Sh5rOV6YKE5Y6f6aCB6Z2i77yaJykgKyBjdHgudW5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzUHJvdGVjdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnByb3RlY3RBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdwcm90ZWN0JywgY3R4Lm9uUHJvdGVjdEZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0Y29uc3QgcGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gRmV0Y2ggZXhpc3RpbmcgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdGNvbnN0IHBycyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb247XG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRsZXQgbW92ZXByb3Q7XG5cdFx0XHRsZXQgY3JlYXRlcHJvdDtcblx0XHRcdGZvciAoY29uc3QgcHIgb2YgcHJzKSB7XG5cdFx0XHRcdC8vIEZpbHRlciBvdXQgcHJvdGVjdGlvbiBmcm9tIGNhc2NhZGluZ1xuXHRcdFx0XHRpZiAocHIudHlwZSA9PT0gJ2VkaXQnICYmICFwci5zb3VyY2UpIHtcblx0XHRcdFx0XHRlZGl0cHJvdCA9IHByO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdtb3ZlJykge1xuXHRcdFx0XHRcdG1vdmVwcm90ID0gcHI7XG5cdFx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ2NyZWF0ZScpIHtcblx0XHRcdFx0XHRjcmVhdGVwcm90ID0gcHI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEZhbGwgYmFjayB0byBjdXJyZW50IGxldmVscyBpZiBub3QgZXhwbGljaXRseSBzZXRcblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmIGVkaXRwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0XHRsZXZlbDogZWRpdHByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBlZGl0cHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0TW92ZSAmJiBtb3ZlcHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IG1vdmVwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogbW92ZXByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdENyZWF0ZSAmJiBjcmVhdGVwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRcdGxldmVsOiBjcmVhdGVwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogY3JlYXRlcHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBEZWZhdWx0IHRvIHByZS1leGlzdGluZyBjYXNjYWRpbmcgcHJvdGVjdGlvbiBpZiB1bmNoYW5nZWQgKHNpbWlsYXIgdG8gYWJvdmUpXG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlID09PSBudWxsKSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhcHJzLmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIuY2FzY2FkZTtcblx0XHRcdFx0fSkubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gV2FybiBpZiBjYXNjYWRpbmcgcHJvdGVjdGlvbiBiZWluZyBhcHBsaWVkIHdpdGggYW4gaW52YWxpZCBwcm90ZWN0aW9uIGxldmVsLFxuXHRcdFx0Ly8gd2hpY2ggZm9yIGVkaXQgcHJvdGVjdGlvbiB3aWxsIGNhdXNlIGNhc2NhZGluZyB0byBiZSBzaWxlbnRseSBzdHJpcHBlZFxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSkge1xuXHRcdFx0XHQvLyBPbiBtb3ZlIHByb3RlY3Rpb24sIHRoaXMgaXMgdGVjaG5pY2FsbHkgc3RyaWN0ZXIgdGhhbiB0aGUgTVcgQVBJLFxuXHRcdFx0XHQvLyBidXQgc2VlbXMgcmVhc29uYWJsZSB0byBhdm9pZCBkdW1iIHZhbHVlcyBhbmQgbWlzbGVhZGluZyBsb2cgZW50cmllcyAoVDI2NTYyNilcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCghY3R4LnByb3RlY3RFZGl0IHx8XG5cdFx0XHRcdFx0XHRjdHgucHJvdGVjdEVkaXQubGV2ZWwgIT09ICdzeXNvcCcgfHxcblx0XHRcdFx0XHRcdCFjdHgucHJvdGVjdE1vdmUgfHxcblx0XHRcdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCAhPT0gJ3N5c29wJykgJiZcblx0XHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5bey5a+54oCcJywgJ+aCqOW3suWwjeOAjCcpICtcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3lkK/nlKjkuobov57plIHkv53miqQnLCAn44CN5ZWf55So5LqG6YCj6Y6W5L+d6K23JykgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J++8jOS9huayoeacieiuvue9ruS7heeuoeeQhuWRmOeahOS/neaKpOe6p+WIq+OAglxcblxcbicsXG5cdFx0XHRcdFx0XHRcdFx0J++8jOS9huaykuacieioreWumuWDheeuoeeQhuWToeeahOS/neitt+e0muWIpeOAglxcblxcbidcblx0XHRcdFx0XHRcdFx0KSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn5Y2V5Ye756Gu6K6k5Lul6Ieq5Yqo6LCD5pW05bm257un57ut6L+e6ZSB5YWo5L+d5oqk77yM5Y2V5Ye75Y+W5raI5Lul6Lez6L+H5q2k5pON5L2cJyxcblx0XHRcdFx0XHRcdFx0XHQn6bue5pOK56K66KqN5Lul6Ieq5YuV6Kq/5pW05Lim57m857qM6YCj6Y6W5YWo5L+d6K2377yM6bue5pOK5Y+W5raI5Lul6Lez6YGO5q2k5pON5L2cJ1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+i/numUgeS/neaKpOW3suWPlua2iOOAgicsICfpgKPpjpbkv53orbflt7Llj5bmtojjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHR9XG5cdFx0XHQvLyBCdWlsZCBwcm90ZWN0aW9uIGxldmVscyBhbmQgZXhwaXJ5cyAoZXhwaXJpZXM/KSBmb3IgcXVlcnlcblx0XHRcdGNvbnN0IHByb3RlY3Rpb25zID0gW107XG5cdFx0XHRjb25zdCBleHBpcnlzID0gW107XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RFZGl0KSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgZWRpdD0ke2N0eC5wcm90ZWN0RWRpdC5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0RWRpdC5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RNb3ZlKSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgbW92ZT0ke2N0eC5wcm90ZWN0TW92ZS5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0TW92ZS5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDcmVhdGUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBjcmVhdGU9JHtjdHgucHJvdGVjdENyZWF0ZS5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0Q3JlYXRlLmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHByb3RlY3Rpb25zOiBwcm90ZWN0aW9ucy5qb2luKCd8JyksXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5cy5qb2luKCd8JyksXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIE9ubHkgc2hvd3MgdXAgaW4gbG9ncywgbm90IHBhZ2UgaGlzdG9yeVxuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0cXVlcnkuY2FzY2FkZSA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfkv53miqTpobXpnaLigKbigKYnLCAn5L+d6K236aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0U3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBzbGVlcCA9IChtaWxsaXNlY29uZHMpID0+IHtcblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0c2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlLCBtaWxsaXNlY29uZHMpO1xuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH07XG5cdH07IC8vIGVuZCBNb3JlYml0cy53aWtpLnBhZ2Vcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnByZXZpZXcgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVXNlIHRoZSBBUEkgdG8gcGFyc2UgYSBmcmFnbWVudCBvZiB3aWtpdGV4dCBhbmQgcmVuZGVyIGl0IGFzIEhUTUwuXG5cdCAqXG5cdCAqIFRoZSBzdWdnZXN0ZWQgaW1wbGVtZW50YXRpb24gcGF0dGVybiAoaW4ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gYW5kXG5cdCAqIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHNpdHVhdGlvbnMpIGlzIHRvIGNvbnN0cnVjdCBhXG5cdCAqIGBNb3JlYml0cy53aWtpLnByZXZpZXdgIG9iamVjdCBhZnRlciByZW5kZXJpbmcgYSBgTW9yZWJpdHMucXVpY2tGb3JtYCwgYW5kXG5cdCAqIGJpbmQgdGhlIG9iamVjdCB0byBhbiBhcmJpdHJhcnkgcHJvcGVydHkgb2YgdGhlIGZvcm0gKGUuZy4gfHByZXZpZXdlcnwpLlxuXHQgKiBGb3IgYW4gZXhhbXBsZSwgc2VlIHR3aW5rbGV3YXJuLmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld2JveCAtIFRoZSBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSByZW5kZXJlZCBIVE1MLFxuXHQgKiB1c3VhbGx5IGEgPGRpdj4gZWxlbWVudC5cblx0ICovXG5cdE1vcmViaXRzLndpa2kucHJldmlldyA9IGZ1bmN0aW9uIChwcmV2aWV3Ym94KSB7XG5cdFx0dGhpcy5wcmV2aWV3Ym94ID0gcHJldmlld2JveDtcblx0XHQkKHByZXZpZXdib3gpLmFkZENsYXNzKCdtb3JlYml0cy1wcmV2aWV3Ym94JykuaGlkZSgpO1xuXHRcdC8qKlxuXHRcdCAqIERpc3BsYXlzIHRoZSBwcmV2aWV3IGJveCwgYW5kIGJlZ2lucyBhbiBhc3luY2hyb25vdXMgYXR0ZW1wdFxuXHRcdCAqIHRvIHJlbmRlciB0aGUgc3BlY2lmaWVkIHdpa2l0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IC0gV2lraXRleHQgdG8gcmVuZGVyOyBtb3N0IHRoaW5ncyBzaG91bGQgd29yaywgaW5jbHVkaW5nIGBzdWJzdDpgIGFuZCBgfn5+fmAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtwYWdlVGl0bGVdIC0gT3B0aW9uYWwgcGFyYW1ldGVyIGZvciB0aGUgcGFnZSB0aGlzIHNob3VsZCBiZSByZW5kZXJlZCBhcyBiZWluZyBvbiwgaWYgb21pdHRlZCBpdCBpcyB0YWtlbiBhcyB0aGUgY3VycmVudCBwYWdlLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbc2VjdGlvblRpdGxlXSAtIElmIHByb3ZpZGVkLCByZW5kZXIgdGhlIHRleHQgYXMgYSBuZXcgc2VjdGlvbiB1c2luZyB0aGlzIGFzIHRoZSB0aXRsZS5cblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9XG5cdFx0ICovXG5cdFx0dGhpcy5iZWdpblJlbmRlciA9ICh3aWtpdGV4dCwgcGFnZVRpdGxlLCBzZWN0aW9uVGl0bGUpID0+IHtcblx0XHRcdCQocHJldmlld2JveCkuc2hvdygpO1xuXHRcdFx0Y29uc3Qgc3RhdHVzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHByZXZpZXdib3guYXBwZW5kQ2hpbGQoc3RhdHVzc3Bhbik7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuaW5pdChzdGF0dXNzcGFuKTtcblx0XHRcdC8vIOiLpemhtemdouS4jeaYr3dpa2l0ZXh077yI5L6L5aaCSlPjgIFDU1PnrYnvvInvvIzpgqPkuYjmib7kuIDkuKp3aWtpdGV4dOmhtemdouadpemihOiniOOAglxuXHRcdFx0bGV0IHBhZ2VOYW1lID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpICE9PSAnd2lraXRleHQnKSB7XG5cdFx0XHRcdHBhZ2VOYW1lID0gYERyYWZ0OiR7cGFnZU5hbWV9YDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6IFsndGV4dCcsICdtb2R1bGVzJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0Ly8gUFNUID0gcHJlLXNhdmUgdHJhbnNmb3JtOyB0aGlzIG1ha2VzIHN1YnN0aXR1dGlvbiB3b3JrIHByb3Blcmx5XG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlIHx8IHBhZ2VOYW1lLFxuXHRcdFx0XHRkaXNhYmxlbGltaXRyZXBvcnQ6IHRydWUsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0dXNlbGFuZzogbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKSxcblx0XHRcdFx0Ly8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBzZWN0aW9uVGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZW5kZXJBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5Yqg6L295Lit4oCm4oCmJywgJ+i8ieWFpeS4reKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5SZW5kZXJTdWNjZXNzLFxuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn6aKE6KeIJywgJ+mgkOimvScpKVxuXHRcdFx0KTtcblx0XHRcdHJlbmRlckFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblJlbmRlclN1Y2Nlc3MgPSAoYXBpb2JqKSA9PiB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IHJlc3BvbnNlLnBhcnNlLnRleHQ7XG5cdFx0XHRpZiAoIWh0bWwpIHtcblx0XHRcdFx0YXBpb2JqLnN0YXRlbGVtLmVycm9yKHdpbmRvdy53Z1VMUygn5Yqg6L296aKE6KeI5aSx6LSl77yM5oiW5qih5p2/5Li656m6JywgJ+i8ieWFpemgkOimveWkseaVl++8jOaIluaooeadv+eCuuepuicpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cHJldmlld2JveC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQocmVzcG9uc2UucGFyc2UubW9kdWxlc3R5bGVzKTtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXMpO1xuXHRcdFx0Ly8gdGhpcyBtYWtlcyBsaW5rcyBvcGVuIGluIG5ldyB0YWJcblx0XHRcdCQocHJldmlld2JveCkuZmluZCgnYScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKS5hdHRyKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXHRcdH07XG5cdFx0LyoqIEhpZGVzIHRoZSBwcmV2aWV3IGJveCBhbmQgY2xlYXJzIGl0LiAqL1xuXHRcdHRoaXMuY2xvc2VQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5lbXB0eSgpLmhpZGUoKTtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2l0ZXh0ICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFdpa2l0ZXh0IG1hbmlwdWxhdGlvbi5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0ID0ge307XG5cdC8qKlxuXHQgKiBHZXQgdGhlIHZhbHVlIG9mIGV2ZXJ5IHBhcmFtZXRlciBmb3VuZCBpbiB0aGUgd2lraXRleHQgb2YgYSBnaXZlbiB0ZW1wbGF0ZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgY29udGFpbmluZyBhIHRlbXBsYXRlLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIC0gSW5kZXggbm90aW5nIHdoZXJlIGluIHRoZSB0ZXh0IHRoZSB0ZW1wbGF0ZSBiZWdpbnMuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IGB7bmFtZTogdGVtcGxhdGVOYW1lLCBwYXJhbWV0ZXJzOiB7a2V5OiB2YWx1ZX19YC5cblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhcnNlVGVtcGxhdGUgPSAodGV4dCwgc3RhcnQpID0+IHtcblx0XHRzdGFydCB8fD0gMDtcblx0XHRjb25zdCBsZXZlbCA9IFtdOyAvLyBUcmFjayBvZiBob3cgZGVlcCB3ZSBhcmUgKHt7LCB7e3ssIG9yIFtbKVxuXHRcdGxldCBjb3VudCA9IC0xOyAvLyBOdW1iZXIgb2YgcGFyYW1ldGVycyBmb3VuZFxuXHRcdGxldCB1bm5hbWVkID0gMDsgLy8gS2VlcCB0cmFjayBvZiB3aGF0IG51bWJlciBhbiB1bm5hbWVkIHBhcmFtZXRlciBzaG91bGQgcmVjZWl2ZVxuXHRcdGxldCBlcXVhbHMgPSAtMTsgLy8gQWZ0ZXIgZmluZGluZyBcIj1cIiBiZWZvcmUgYSBwYXJhbWV0ZXIsIHRoZSBpbmRleDsgb3RoZXJ3aXNlLCAtMVxuXHRcdGxldCBjdXJyZW50ID0gJyc7XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRwYXJhbWV0ZXJzOiB7fSxcblx0XHR9O1xuXHRcdGxldCBrZXk7XG5cdFx0bGV0IHZhbHVlO1xuXHRcdC8qKlxuXHRcdCAqIEZ1bmN0aW9uIHRvIGhhbmRsZSBmaW5kaW5nIHBhcmFtZXRlciB2YWx1ZXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5hbD1mYWxzZV0gLSBXaGV0aGVyIHRoaXMgaXMgdGhlIGZpbmFsXG5cdFx0ICogcGFyYW1ldGVyIGFuZCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgdHJhaWxpbmcgYH19YC5cblx0XHQgKi9cblx0XHRjb25zdCBmaW5kUGFyYW0gPSAoZmluYWwpID0+IHtcblx0XHRcdC8vIE5vdGhpbmcgZm91bmQgeWV0LCB0aGlzIG11c3QgYmUgdGhlIHRlbXBsYXRlIG5hbWVcblx0XHRcdGlmIChjb3VudCA9PT0gLTEpIHtcblx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBjdXJyZW50LnNsaWNlKDIpLnRyaW0oKTtcblx0XHRcdFx0Kytjb3VudDtcblx0XHRcdH0gZWxzZSBpZiAoZXF1YWxzID09PSAtMSkge1xuXHRcdFx0XHQvLyBJbiBhIHBhcmFtZXRlclxuXHRcdFx0XHQvLyBObyBlcXVhbHMsIHNvIGl0IG11c3QgYmUgdW5uYW1lZDsgbm8gdHJpbSBzaW5jZSB3aGl0ZXNwYWNlIGFsbG93ZWRcblx0XHRcdFx0Y29uc3QgcGFyYW0gPSBmaW5hbCA/IGN1cnJlbnQuc2xpY2UoZXF1YWxzICsgMSwgLTIpIDogY3VycmVudDtcblx0XHRcdFx0aWYgKHBhcmFtKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNbKyt1bm5hbWVkXSA9IHBhcmFtO1xuXHRcdFx0XHRcdCsrY291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFdlIGZvdW5kIGFuIGVxdWFscywgc28gc2F2ZSB0aGUgcGFyYW1ldGVyIGFzIGtleTogdmFsdWVcblx0XHRcdFx0a2V5ID0gY3VycmVudC5zbGljZSgwLCBNYXRoLm1heCgwLCBlcXVhbHMpKS50cmltKCk7XG5cdFx0XHRcdHZhbHVlID0gZmluYWwgPyBjdXJyZW50LnNsaWNlKGVxdWFscyArIDEsIC0yKS50cmltKCkgOiBjdXJyZW50LnNsaWNlKE1hdGgubWF4KDAsIGVxdWFscyArIDEpKS50cmltKCk7XG5cdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0ZXF1YWxzID0gLTE7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCB0ZXN0MyA9IHRleHQuc2xpY2UoaSwgaSArIDMpO1xuXHRcdFx0aWYgKHRlc3QzID09PSAne3t7JyB8fCAodGVzdDMgPT09ICd9fX0nICYmIGxldmVsLmF0KC0xKSA9PT0gMykpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mztcblx0XHRcdFx0aSArPSAyO1xuXHRcdFx0XHRpZiAodGVzdDMgPT09ICd7e3snKSB7XG5cdFx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9IDM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0ZXN0MiA9IHRleHQuc2xpY2UoaSwgaSArIDIpO1xuXHRcdFx0Ly8gRW50ZXJpbmcgYSB0ZW1wbGF0ZSAob3IgbGluaylcblx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7JyB8fCB0ZXN0MiA9PT0gJ1tbJykge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7Jykge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAnd2wnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRWl0aGVyIGxlYXZpbmcgYSBsaW5rIG9yIHRlbXBsYXRlL3BhcnNlciBmdW5jdGlvblxuXHRcdFx0aWYgKCh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5hdCgtMSkgPT09IDIpIHx8ICh0ZXN0MiA9PT0gJ11dJyAmJiBsZXZlbC5hdCgtMSkgPT09ICd3bCcpKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDI7XG5cdFx0XHRcdCsraTtcblx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGZpbmFsIHBhcmFtZXRlciBpZiB0aGlzIHJlYWxseSBpcyB0aGUgZW5kXG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRmaW5kUGFyYW0odHJ1ZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dC5jaGFyQXQoaSkgPT09ICd8JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gQW5vdGhlciBwaXBlIGZvdW5kLCB0b3BsZXZlbCwgc28gcGFyYW1ldGVyIGNvbWluZyB1cCFcblx0XHRcdFx0ZmluZFBhcmFtKCk7XG5cdFx0XHRcdGN1cnJlbnQgPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoZXF1YWxzID09PSAtMSAmJiB0ZXh0LmNoYXJBdChpKSA9PT0gJz0nICYmIGxldmVsLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBFcXVhbHMgZm91bmQsIHRvcGxldmVsXG5cdFx0XHRcdGVxdWFscyA9IGN1cnJlbnQubGVuZ3RoO1xuXHRcdFx0XHRjdXJyZW50ICs9IHRleHQuY2hhckF0KGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSnVzdCBhZHZhbmNlIHRoZSBwb3NpdGlvblxuXHRcdFx0XHRjdXJyZW50ICs9IHRleHQuY2hhckF0KGkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHQvKipcblx0ICogQWRqdXN0IGFuZCBtYW5pcHVsYXRlIHRoZSB3aWtpdGV4dCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBjbGFzc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBXaWtpdGV4dCB0byBiZSBtYW5pcHVsYXRlZC5cblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UgPSBmdW5jdGlvbiAodGV4dCkge1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdH07XG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UucHJvdG90eXBlID0ge1xuXHRcdHRleHQ6ICcnLFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgbGlua3MgdG8gYGxpbmtfdGFyZ2V0YCBmcm9tIHRoZSBwYWdlIHRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGlua1RhcmdldFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdHJlbW92ZUxpbmsobGlua1RhcmdldCkge1xuXHRcdFx0Y29uc3QgbXdUaXRsZSA9IG13LlRpdGxlLm5ld0Zyb21UZXh0KGxpbmtUYXJnZXQpO1xuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSUQgPSBtd1RpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdFx0XHRjb25zdCB0aXRsZSA9IG13VGl0bGUuZ2V0TWFpblRleHQoKTtcblx0XHRcdGxldCBsaW5rUmVnZXhTdHJpbmcgPSAnJztcblx0XHRcdGlmIChuYW1lc3BhY2VJRCAhPT0gMCkge1xuXHRcdFx0XHRsaW5rUmVnZXhTdHJpbmcgPSBgJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleChuYW1lc3BhY2VJRCl9OmA7XG5cdFx0XHR9XG5cdFx0XHRsaW5rUmVnZXhTdHJpbmcgKz0gTW9yZWJpdHMucGFnZU5hbWVSZWdleCh0aXRsZSk7XG5cdFx0XHQvLyBGb3IgbW9zdCBuYW1lc3BhY2VzLCB1bmxpbmsgYm90aCBbW1VzZXI6VGVzdF1dIGFuZCBbWzpVc2VyOlRlc3RdXVxuXHRcdFx0Ly8gRm9yIGZpbGVzIGFuZCBjYXRlZ29yaWVzLCBvbmx5IHVubGluayBbWzpDYXRlZ29yeTpUZXN0XV0uIERvIG5vdCB1bmxpbmsgW1tDYXRlZ29yeTpUZXN0XV1cblx0XHRcdGNvbnN0IGlzRmlsZU9yQ2F0ZWdvcnkgPSBbNiwgMTRdLmluY2x1ZGVzKG5hbWVzcGFjZUlEKTtcblx0XHRcdGNvbnN0IGNvbG9uID0gaXNGaWxlT3JDYXRlZ29yeSA/ICc6JyA6ICc6Pyc7XG5cdFx0XHRjb25zdCBzaW1wbGVMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0oJHtsaW5rUmVnZXhTdHJpbmd9KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdFx0Y29uc3QgcGlwZWRMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0ke2xpbmtSZWdleFN0cmluZ31cXFxcfCguKz8pXFxcXF1cXFxcXWAsICdnJyk7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShzaW1wbGVMaW5rUmVnZXgsICckMScpLnJlcGxhY2UocGlwZWRMaW5rUmVnZXgsICckMScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb21tZW50cyBvdXQgaW1hZ2VzIGZyb20gcGFnZSB0ZXh0OyBpZiB1c2VkIGluIGEgZ2FsbGVyeSwgZGVsZXRlcyB0aGUgd2hvbGUgbGluZS5cblx0XHQgKiBJZiB1c2VkIGFzIGEgdGVtcGxhdGUgYXJndW1lbnQgKG5vdCBuZWNlc3NhcmlseSB3aXRoIGBGaWxlOmAgcHJlZml4KSwgdGhlIHRlbXBsYXRlIHBhcmFtZXRlciBpcyBjb21tZW50ZWQgb3V0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgbmFtZSB3aXRob3V0IGBGaWxlOmAgcHJlZml4LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSAtIFJlYXNvbiB0byBiZSBpbmNsdWRlZCBpbiBjb21tZW50LCBhbG9uZ3NpZGUgdGhlIGNvbW1lbnRlZC1vdXQgaW1hZ2UuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0Y29tbWVudE91dEltYWdlKGltYWdlLCByZWFzb24pIHtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHRoaXMudGV4dCk7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHRyZWFzb24gPSByZWFzb24gPyBgJHtyZWFzb259OiBgIDogJyc7XG5cdFx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0XHQvLyBDaGVjayBmb3Igbm9ybWFsIGltYWdlIGxpbmtzLCBpLmUuIFtbRmlsZTpGb29iYXIucG5nfC4uLl1dXG5cdFx0XHQvLyBXaWxsIGVhdCB0aGUgd2hvbGUgbGlua1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFxdXFxcXF0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxMaW5rcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHVuYmluZGVyLmNvbnRlbnQsICdbWycsICddXScpO1xuXHRcdFx0Zm9yIChjb25zdCBhbGxMaW5rIG9mIGFsbExpbmtzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsTGluaykpIHtcblx0XHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IGA8IS0tICR7cmVhc29ufSR7YWxsTGlua30gLS0+YDtcblx0XHRcdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGFsbExpbmssIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIENoZWNrIGZvciBnYWxsZXJ5IGltYWdlcywgaS5lLiBpbnN0YW5jZXMgdGhhdCBtdXN0IHN0YXJ0IG9uIGEgbmV3IGxpbmUsXG5cdFx0XHQvLyBldmVudHVhbGx5IHByZWNlZGVkIHdpdGggc29tZSBzcGFjZSwgYW5kIG11c3QgaW5jbHVkZSBGaWxlOiBwcmVmaXhcblx0XHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5lLlxuXHRcdFx0Y29uc3QgZ2FsbGVyeUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgKF5cXFxccyoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqKD86XFxcXHwuKj8kfCQpKWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGdhbGxlcnlJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0Ly8gQ2hlY2sgZnJlZSBpbWFnZSB1c2FnZXMsIGZvciBleGFtcGxlIGFzIHRlbXBsYXRlIGFyZ3VtZW50cywgbWlnaHQgaGF2ZSB0aGUgRmlsZTogcHJlZml4IGV4Y2x1ZGVkLCBidXQgbXVzdCBiZSBwcmVjZWRlZCBieSBhbiB8XG5cdFx0XHQvLyBXaWxsIG9ubHkgZWF0IHRoZSBpbWFnZSBuYW1lIGFuZCB0aGUgcHJlY2VkaW5nIGJhciBhbmQgYW4gZXZlbnR1YWwgbmFtZWQgcGFyYW1ldGVyXG5cdFx0XHRjb25zdCBmcmVlSW1hZ2VSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGAoXFxcXHxcXFxccyooPzpbXFxcXHdcXFxcc10rXFxcXD0pP1xcXFxzKig/OiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKik/JHtpbWFnZVJlZ2V4U3RyaW5nfSlgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShmcmVlSW1hZ2VSZWdleCwgYDwhLS0gJHtyZWFzb259JDEgLS0+YCk7XG5cdFx0XHQvLyBSZWJpbmQgdGhlIGNvbnRlbnQgbm93LCB3ZSBhcmUgZG9uZSFcblx0XHRcdHRoaXMudGV4dCA9IHVuYmluZGVyLnJlYmluZCgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyB1c2VzIG9mIFtbRmlsZTpgaW1hZ2VgXV0gdG8gW1tGaWxlOmBpbWFnZWB8YGRhdGFgXV0uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSBuYW1lIHdpdGhvdXQgRmlsZTogcHJlZml4LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIC0gVGhlIGRpc3BsYXkgb3B0aW9ucy5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRhZGRUb0ltYWdlQ29tbWVudChpbWFnZSwgZGF0YSkge1xuXHRcdFx0Y29uc3QgaW1hZ2VSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoaW1hZ2UpO1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFxdXFxcXF0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxMaW5rcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHRoaXMudGV4dCwgJ1tbJywgJ11dJyk7XG5cdFx0XHRmb3IgKGxldCByZXBsYWNlbWVudCBvZiBhbGxMaW5rcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KHJlcGxhY2VtZW50KSkge1xuXHRcdFx0XHRcdC8vIGp1c3QgcHV0IGl0IGF0IHRoZSBlbmQ/XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudC5yZXBsYWNlKC9cXF1cXF0kLywgYHwke2RhdGF9XV1gKTtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShyZXBsYWNlbWVudCwgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBnYWxsZXJ5UmVnZXggPSBuZXcgUmVnRXhwKGBeKFxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ30uKj8pXFxcXHw/KC4qPykkYCwgJ21nJyk7XG5cdFx0XHRjb25zdCBuZXd0ZXh0ID0gYCQxfCQyICR7ZGF0YX1gO1xuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoZ2FsbGVyeVJlZ2V4LCBuZXd0ZXh0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFsbCB0cmFuc2NsdXNpb25zIG9mIGEgdGVtcGxhdGUgZnJvbSBwYWdlIHRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBQYWdlIG5hbWUgd2hvc2UgdHJhbnNjbHVzaW9ucyBhcmUgdG8gYmUgcmVtb3ZlZCxcblx0XHQgKiBpbmNsdWRlIG5hbWVzcGFjZSBwcmVmaXggb25seSBpZiBub3QgaW4gdGVtcGxhdGUgbmFtZXNwYWNlLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdHJlbW92ZVRlbXBsYXRlKHRlbXBsYXRlKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleCh0ZW1wbGF0ZSk7XG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFx7XFxcXHsoPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDEwKX06KT9cXFxccyoke3RlbXBsYXRlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXH1cXFxcfSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbFRlbXBsYXRlcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHRoaXMudGV4dCwgJ3t7JywgJ319JywgWyd7e3snLCAnfX19J10pO1xuXHRcdFx0Zm9yIChjb25zdCBhbGxUZW1wbGF0ZSBvZiBhbGxUZW1wbGF0ZXMpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChhbGxUZW1wbGF0ZSkpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShhbGxUZW1wbGF0ZSwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNtYXJ0bHkgaW5zZXJ0IGEgdGFnIGF0b3AgcGFnZSB0ZXh0IGJ1dCBhZnRlciBzcGVjaWZpZWQgdGVtcGxhdGVzLFxuXHRcdCAqIHN1Y2ggYXMgaGF0bm90ZXMsIHNob3J0IGRlc2NyaXB0aW9uLCBvciBkZWxldGlvbiBhbmQgcHJvdGVjdGlvbiB0ZW1wbGF0ZXMuXG5cdFx0ICogTm90YWJseSwgZG9lcyAqbm90KiBpbnNlcnQgYSBuZXdsaW5lIGFmdGVyIHRoZSB0YWcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIHRhZyB0byBiZSBpbnNlcnRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcmVnZXggLSBUZW1wbGF0ZXMgYWZ0ZXIgd2hpY2ggdG8gaW5zZXJ0IHRhZyxcblx0XHQgKiBnaXZlbiBhcyBlaXRoZXIgYXMgYSAocmVnZXgtdmFsaWQpIHN0cmluZyBvciBhbiBhcnJheSB0byBiZSBqb2luZWQgYnkgcGlwZXMuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtmbGFncz1pXSAtIFJlZ2V4IGZsYWdzIHRvIGFwcGx5LiAgYCcnYCB0byBwcm92aWRlIG5vIGZsYWdzO1xuXHRcdCAqIG90aGVyIGZhbHNleSB2YWx1ZXMgd2lsbCBkZWZhdWx0IHRvIGBpYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3ByZVJlZ2V4XSAtIE9wdGlvbmFsIHJlZ2V4IHN0cmluZyBvciBhcnJheSB0byBtYXRjaFxuXHRcdCAqIGJlZm9yZSBhbnkgdGVtcGxhdGUgbWF0Y2hlcyAoaS5lLiBiZWZvcmUgYHt7YCksIHN1Y2ggYXMgaHRtbCBjb21tZW50cy5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRpbnNlcnRBZnRlclRlbXBsYXRlcyh0YWcsIHJlZ2V4LCBmbGFncywgcHJlUmVnZXgpIHtcblx0XHRcdGlmICh0YWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyB0YWcgcHJvdmlkZWQnKTtcblx0XHRcdH1cblx0XHRcdC8vIC5sZW5ndGggaXMgb25seSBhIHByb3BlcnR5IG9mIHN0cmluZ3MgYW5kIGFycmF5cyBzbyB3ZVxuXHRcdFx0Ly8gc2hvdWxkbid0IG5lZWQgdG8gY2hlY2sgdHlwZVxuXHRcdFx0aWYgKHJlZ2V4ID09PSB1bmRlZmluZWQgfHwgIXJlZ2V4Lmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJlZ2V4IHByb3ZpZGVkJyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVnZXgpKSB7XG5cdFx0XHRcdHJlZ2V4ID0gcmVnZXguam9pbignfCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBmbGFncyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZmxhZ3MgPSAnaSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXByZVJlZ2V4IHx8ICFwcmVSZWdleC5sZW5ndGgpIHtcblx0XHRcdFx0cHJlUmVnZXggPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcmVSZWdleCkpIHtcblx0XHRcdFx0cHJlUmVnZXggPSBwcmVSZWdleC5qb2luKCd8Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZWdleCBpcyBleHRyYSBjb21wbGljYXRlZCB0byBhbGxvdyBmb3IgdGVtcGxhdGVzIHdpdGhcblx0XHRcdC8vIHBhcmFtZXRlcnMgYW5kIHRvIGhhbmRsZSB3aGl0ZXNwYWNlIHByb3Blcmx5XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShcblx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHQvLyBsZWFkaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBjYXB0dXJlIHRlbXBsYXRlKHMpXG5cdFx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHRcdC8vIGJlZ2luIHRlbXBsYXRlIGZvcm1hdFxuXHRcdFx0XHRcdC8vIFRlbXBsYXRlIHJlZ2V4XG5cdFx0XHRcdFx0Ly8gZW5kIG1haW4gdGVtcGxhdGUgbmFtZSwgb3B0aW9uYWxseSB3aXRoIGEgbnVtYmVyXG5cdFx0XHRcdFx0Ly8gUHJvYmFibHkgcmVtb3ZlIHRoZSAoPzopIHRob3VnaFxuXHRcdFx0XHRcdC8vIHRlbXBsYXRlIHBhcmFtZXRlcnNcblx0XHRcdFx0XHQvLyBlbmQgdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdFx0Ly8gZW5kIGNhcHR1cmVcblx0XHRcdFx0XHQvLyB0cmFpbGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0YF5cXFxccyooPzooKD86XFxcXHMqJHtcblx0XHRcdFx0XHRcdC8vIFByZS10ZW1wbGF0ZSByZWdleCwgc3VjaCBhcyBsZWFkaW5nIGh0bWwgY29tbWVudHNcblx0XHRcdFx0XHRcdHByZVJlZ2V4XG5cdFx0XHRcdFx0fXxcXFxce1xcXFx7XFxcXHMqKD86JHtcblx0XHRcdFx0XHRcdC8vIFRlbXBsYXRlIHJlZ2V4XG5cdFx0XHRcdFx0XHRyZWdleFxuXHRcdFx0XHRcdH0pXFxcXGQqXFxcXHMqKFxcXFx8KD86XFxcXHtcXFxce1tee31dKlxcXFx9XFxcXH18W157fV0pKik/XFxcXH1cXFxcfSkrKD86XFxcXHMqXFxcXG4pPylcXFxccyopP2AsXG5cdFx0XHRcdFx0ZmxhZ3Ncblx0XHRcdFx0KSxcblx0XHRcdFx0YCQxJHt0YWd9YFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSBtYW5pcHVsYXRlZCB3aWtpdGV4dC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Z2V0VGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRleHQ7XG5cdFx0fSxcblx0fTtcblx0LyogKioqKioqKioqKiogTW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyICoqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSGFuZGxlcyBsb2dnaW5nIGFjdGlvbnMgdG8gYSB1c2Vyc3BhY2UgbG9nLlxuXHQgKiBVc2VkIGluIENTRCwgUFJPRCwgYW5kIFhGRC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nUGFnZU5hbWUgLSBUaXRsZSBvZiB0aGUgc3VicGFnZSBvZiB0aGUgY3VycmVudCB1c2VyJ3MgbG9nLlxuXHQgKi9cblx0TW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyID0gZnVuY3Rpb24gKGxvZ1BhZ2VOYW1lKSB7XG5cdFx0aWYgKCFsb2dQYWdlTmFtZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdubyBsb2cgcGFnZSBuYW1lIHNwZWNpZmllZCcpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBUaGUgdGV4dCB0byBwcmVmaXggdGhlIGxvZyB3aXRoIHVwb24gY3JlYXRpb24sIGRlZmF1bHRzIHRvIGVtcHR5LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmluaXRpYWxUZXh0ID0gJyc7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGhlYWRlciBsZXZlbCB0byB1c2UgZm9yIG1vbnRocywgZGVmYXVsdHMgdG8gMyAoYD09PWApLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLmhlYWRlckxldmVsID0gMztcblx0XHR0aGlzLmNoYW5nZVRhZ3MgPSAnJztcblx0XHQvKipcblx0XHQgKiBMb2cgdGhlIGVudHJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1RleHQgLSBEb2Vzbid0IGluY2x1ZGUgbGVhZGluZyBgI2Agb3IgYCpgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5VGV4dCAtIEVkaXQgc3VtbWFyeS5cblx0XHQgKiBAcmV0dXJucyB7SlF1ZXJ5LlByb21pc2V9XG5cdFx0ICovXG5cdFx0dGhpcy5sb2cgPSBmdW5jdGlvbiAobG9nVGV4dCwgc3VtbWFyeVRleHQpIHtcblx0XHRcdGNvbnN0IGRlZiA9ICQuRGVmZXJyZWQoKTtcblx0XHRcdGlmICghbG9nVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gZGVmLnJlamVjdCgpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZSA9IG5ldyBNb3JlYml0cy53aWtpLnBhZ2UoXG5cdFx0XHRcdGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS8ke2xvZ1BhZ2VOYW1lfWAsXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5bCG6aG555uu5Yqg5YWl5Yiw55So5oi356m66Ze05pel5b+XJywgJ+Wwh+mgheebruWKoOWFpeWIsOS9v+eUqOiAheepuumWk+aXpeiqjCcpXG5cdFx0XHQpOyAvLyBtYWtlIHRoaXMgJy4uLiB0byAnICsgbG9nUGFnZU5hbWUgP1xuXHRcdFx0cGFnZS5sb2FkKChwYWdlb2JqKSA9PiB7XG5cdFx0XHRcdC8vIGFkZCBibHVyYiBpZiBsb2cgcGFnZSBkb2Vzbid0IGV4aXN0IG9yIGlzIGJsYW5rXG5cdFx0XHRcdGxldCB0ZXh0ID0gcGFnZW9iai5nZXRQYWdlVGV4dCgpIHx8IHRoaXMuaW5pdGlhbFRleHQ7XG5cdFx0XHRcdC8vIGNyZWF0ZSBtb250aGx5IGhlYWRlciBpZiBpdCBkb2Vzbid0IGV4aXN0IGFscmVhZHlcblx0XHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHBhZ2VvYmouZ2V0TG9hZFRpbWUoKSk7XG5cdFx0XHRcdGlmICghZGF0ZS5tb250aEhlYWRlclJlZ2V4KCkuZXhlYyh0ZXh0KSkge1xuXHRcdFx0XHRcdHRleHQgKz0gYFxcblxcbiR7ZGF0ZS5tb250aEhlYWRlcih0aGlzLmhlYWRlckxldmVsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhZ2VvYmouc2V0UGFnZVRleHQoYCR7dGV4dH1cXG4ke2xvZ1RleHR9YCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0RWRpdFN1bW1hcnkoc3VtbWFyeVRleHQpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENoYW5nZVRhZ3ModGhpcy5jaGFuZ2VUYWdzKTtcblx0XHRcdFx0cGFnZW9iai5zZXRDcmVhdGVPcHRpb24oJ3JlY3JlYXRlJyk7XG5cdFx0XHRcdHBhZ2VvYmouc2F2ZShkZWYucmVzb2x2ZSwgZGVmLnJlamVjdCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5zdGF0dXMgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBzaG93IHN0YXR1cyBtZXNzYWdlcyBvZiB2YXJ5aW5nIHVyZ2VuY3kuXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdHxNb3JlYml0cy5zdGF0dXMuaW5pdCgpfSBtdXN0IGJlIGNhbGxlZCBiZWZvcmVcblx0ICogYW55IHN0YXR1cyBvYmplY3QgaXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRob3NlIHN0YXR1c2VzIHdvbid0IGJlIHZpc2libGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGJlZm9yZSB0aGUgdGhlIGNvbG9uIGA6YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXQgLSBUZXh0IGFmdGVyIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1zdGF0dXNdIC0gRGV0ZXJtaW5lIHRoZSBmb250IGNvbG9yIG9mIHRoZSBzdGF0dXNcblx0ICogbGluZSwgYWxsb3dhYmxlIHZhbHVlcyBhcmU6IGBzdGF0dXNgIChibHVlKSwgYGluZm9gIChncmVlbiksIGB3YXJuYCAocmVkKSxcblx0ICogb3IgYGVycm9yYCAoYm9sZCByZWQpLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzID0gZnVuY3Rpb24gKHRleHQsIHN0YXQsIHR5cGUpIHtcblx0XHR0aGlzLnRleHRSYXcgPSB0ZXh0O1xuXHRcdHRoaXMudGV4dCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwodGV4dCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZSB8fCAnc3RhdHVzJztcblx0XHR0aGlzLmdlbmVyYXRlKCk7XG5cdFx0aWYgKHN0YXQpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXQsIHR5cGUpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIFNwZWNpZnkgYW4gYXJlYSBmb3Igc3RhdHVzIG1lc3NhZ2UgZWxlbWVudHMgdG8gYmUgYWRkZWQgdG8uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIFVzdWFsbHkgYSBkaXYgZWxlbWVudC5cblx0ICogQHRocm93cyBJZiBgcm9vdGAgaXMgbm90IGFuIGBIVE1MRWxlbWVudGAuXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuaW5pdCA9IChyb290KSA9PiB7XG5cdFx0aWYgKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdvYmplY3Qgbm90IGFuIGluc3RhbmNlIG9mIEVsZW1lbnQnKTtcblx0XHR9XG5cdFx0d2hpbGUgKHJvb3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRyb290LnJlbW92ZUNoaWxkKHJvb3QuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290ID0gcm9vdDtcblx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IG51bGw7XG5cdH07XG5cdE1vcmViaXRzLnN0YXR1cy5yb290ID0gbnVsbDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gZXJyb3IuXG5cdCAqIEB0aHJvd3MgV2hlbiBgaGFuZGxlcmAgaXMgbm90IGEgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMub25FcnJvciA9IChoYW5kbGVyKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IGhhbmRsZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ01vcmViaXRzLnN0YXR1cy5vbkVycm9yOiBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucHJvdG90eXBlID0ge1xuXHRcdHN0YXQ6IG51bGwsXG5cdFx0c3RhdFJhdzogbnVsbCxcblx0XHR0ZXh0OiBudWxsLFxuXHRcdHRleHRSYXc6IG51bGwsXG5cdFx0dHlwZTogJ3N0YXR1cycsXG5cdFx0dGFyZ2V0OiBudWxsLFxuXHRcdG5vZGU6IG51bGwsXG5cdFx0bGlua2VkOiBmYWxzZSxcblx0XHQvKiogQWRkIHRoZSBzdGF0dXMgZWxlbWVudCBub2RlIHRvIHRoZSBET00uICovXG5cdFx0bGluaygpIHtcblx0XHRcdGlmICghdGhpcy5saW5rZWQgJiYgTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5saW5rZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqIFJlbW92ZSB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSBmcm9tIHRoZSBET00uICovXG5cdFx0dW5saW5rKCkge1xuXHRcdFx0aWYgKHRoaXMubGlua2VkKSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBQYXJ0IG9mIHN0YXR1cyBtZXNzYWdlIGFmdGVyIGNvbG9uLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gJ3N0YXR1cycgKGJsdWUpLCAnaW5mbycgKGdyZWVuKSwgJ3dhcm4nXG5cdFx0ICogKHJlZCksIG9yICdlcnJvcicgKGJvbGQgcmVkKS5cblx0XHQgKi9cblx0XHR1cGRhdGUoc3RhdHVzLCB0eXBlKSB7XG5cdFx0XHR0aGlzLnN0YXRSYXcgPSBzdGF0dXM7XG5cdFx0XHR0aGlzLnN0YXQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHN0YXR1cyk7XG5cdFx0XHRpZiAodHlwZSkge1xuXHRcdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuXHRcdFx0XHRcdC8vIGhhY2sgdG8gZm9yY2UgdGhlIHBhZ2Ugbm90IHRvIHJlbG9hZCB3aGVuIGFuIGVycm9yIGlzIG91dHB1dCAtIHNlZSBhbHNvIE1vcmViaXRzLnN0YXR1cygpIGFib3ZlXG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMTAwMDtcblx0XHRcdFx0XHQvLyBjYWxsIGVycm9yIGNhbGxiYWNrXG5cdFx0XHRcdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KSB7XG5cdFx0XHRcdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhbHNvIGxvZyBlcnJvciBtZXNzYWdlcyBpbiB0aGUgYnJvd3NlciBjb25zb2xlXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgW01vcmViaXRzXSAke3RoaXMudGV4dFJhd306ICR7dGhpcy5zdGF0UmF3fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdH0sXG5cdFx0LyoqIFByb2R1Y2UgdGhlIGh0bWwgZm9yIGZpcnN0IHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRcdGdlbmVyYXRlKCkge1xuXHRcdFx0dGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzogJykpO1xuXHRcdFx0dGhpcy50YXJnZXQgPSB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7IC8vIGR1bW15IG5vZGVcblx0XHR9LFxuXG5cdFx0LyoqIENvbXBsZXRlIHRoZSBodG1sLCBmb3IgdGhlIHNlY29uZCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRyZW5kZXIoKSB7XG5cdFx0XHR0aGlzLm5vZGUuY2xhc3NOYW1lID0gYG1vcmViaXRzX3N0YXR1c18ke3RoaXMudHlwZX1gO1xuXHRcdFx0d2hpbGUgKHRoaXMudGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldC5yZW1vdmVDaGlsZCh0aGlzLnRhcmdldC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuc3RhdCk7XG5cdFx0XHR0aGlzLmxpbmsoKTtcblx0XHR9LFxuXHRcdHN0YXR1cyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3N0YXR1cycpO1xuXHRcdH0sXG5cdFx0aW5mbyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2luZm8nKTtcblx0XHR9LFxuXHRcdHdhcm4oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICd3YXJuJyk7XG5cdFx0fSxcblx0XHRlcnJvcihzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2Vycm9yJyk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHN0YXR1c2AtdHlwZSAoYmx1ZSlcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5zdGF0dXMgPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGluZm9gLXR5cGUgKGdyZWVuKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluZm8gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnaW5mbycpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgd2FybmAtdHlwZSAocmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLndhcm4gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnd2FybicpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgZXJyb3JgLXR5cGUgKGJvbGQgcmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmVycm9yID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2Vycm9yJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBGb3IgdGhlIGFjdGlvbiBjb21wbGV0ZSBtZXNzYWdlIGF0IHRoZSBlbmQsIGNyZWF0ZSBhIHN0YXR1cyBsaW5lIHdpdGhvdXRcblx0ICogYSBjb2xvbiBzZXBhcmF0b3IuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQgPSAodGV4dCkgPT4ge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gJ21vcmViaXRzX3N0YXR1c19pbmZvIG1vcmViaXRzX2FjdGlvbl9jb21wbGV0ZSc7XG5cdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRoZSB1c2VyJ3MgcmF0aW9uYWxlLCBjb21tZW50cywgZXRjLiBCYWNrIHRvIHRoZW0gYWZ0ZXIgYSBmYWlsdXJlLFxuXHQgKiBzbyB0aGF0IHRoZXkgbWF5IHJlLXVzZSBpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudHNcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5wcmludFVzZXJUZXh0ID0gKGNvbW1lbnRzLCBtZXNzYWdlKSA9PiB7XG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRwLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTmFtZSA9ICdtb3JlYml0cy11c2VydGV4dCc7XG5cdFx0ZGl2LnN0eWxlLm1hcmdpblRvcCA9ICcwJztcblx0XHRkaXYuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XG5cdFx0ZGl2LnRleHRDb250ZW50ID0gY29tbWVudHM7XG5cdFx0cC5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHApO1xuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzaW1wbGUgbm9kZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUeXBlIG9mIEhUTUwgZWxlbWVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBUZXh0IGNvbnRlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3JdIC0gRm9udCBjb2xvci5cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuaHRtbE5vZGUgPSAodHlwZSwgY29udGVudCwgY29sb3IpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0XHRpZiAoY29sb3IpIHtcblx0XHRcdG5vZGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHR9XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSk7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGQgc2hpZnQtY2xpY2sgc3VwcG9ydCBmb3IgY2hlY2tib3hlcy4gVGhlIHdpa2liaXRzIHZlcnNpb25cblx0ICogKGB3aW5kb3cuYWRkQ2hlY2tib3hDbGlja0hhbmRsZXJzYCkgaGFzIHNvbWUgcmVzdHJpY3Rpb25zLCBhbmQgZG9lc24ndCB3b3JrXG5cdCAqIHdpdGggY2hlY2tib3hlcyBpbnNpZGUgYSBzb3J0YWJsZSB0YWJsZSwgc28gbGV0J3MgYnVpbGQgb3VyIG93bi5cblx0ICpcblx0ICogQHBhcmFtIGpRdWVyeVNlbGVjdG9yXG5cdCAqIEBwYXJhbSBqUXVlcnlDb250ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0ID0gKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KSA9PiB7XG5cdFx0bGV0IGxhc3RDaGVja2JveCA9IG51bGw7XG5cdFx0Y29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG5cdFx0XHRjb25zdCB0aGlzQ2IgPSB0aGlzO1xuXHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGxhc3RDaGVja2JveCAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBjYnMgPSAkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KTsgLy8gY2FuJ3QgY2FjaGUgdGhlbSwgb2J2aW91c2x5LCBpZiB3ZSB3YW50IHRvIHN1cHBvcnQgcmVzb3J0aW5nXG5cdFx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgbGFzdEluZGV4ID0gLTE7XG5cdFx0XHRcdGxldCBpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNic1tpXSA9PT0gdGhpc0NiKSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAobGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IGxhc3RDaGVja2JveCkge1xuXHRcdFx0XHRcdFx0bGFzdEluZGV4ID0gaTtcblx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSAmJiBsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdC8vIGluc3BpcmVkIGJ5IHdpa2liaXRzXG5cdFx0XHRcdFx0Y29uc3QgZW5kU3RhdGUgPSB0aGlzQ2IuY2hlY2tlZDtcblx0XHRcdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRcdFx0bGV0IGZpbmlzaDtcblx0XHRcdFx0XHRpZiAoaW5kZXggPCBsYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRcdHN0YXJ0ID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdFx0ZmluaXNoID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGluZGV4IC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChpID0gc3RhcnQ7IGkgPD0gZmluaXNoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChjYnNbaV0uY2hlY2tlZCAhPT0gZW5kU3RhdGUpIHtcblx0XHRcdFx0XHRcdFx0Y2JzW2ldLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsYXN0Q2hlY2tib3ggPSB0aGlzQ2I7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdCQoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSXRlcmF0ZXMgb3ZlciBhIGdyb3VwIG9mIHBhZ2VzIChvciBhcmJpdHJhcnkgb2JqZWN0cykgYW5kIGV4ZWN1dGVzIGEgd29ya2VyIGZ1bmN0aW9uXG5cdCAqIGZvciBlYWNoLlxuXHQgKlxuXHQgKiBgc2V0UGFnZUxpc3QocGFnZUxpc3QpYDogU2V0cyB0aGUgbGlzdCBvZiBwYWdlcyB0byB3b3JrIG9uLiBJdCBzaG91bGQgYmUgYW5cblx0ICogYXJyYXkgb2YgcGFnZSBuYW1lcyBzdHJpbmdzLlxuXHQgKlxuXHQgKiBgc2V0T3B0aW9uKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKWA6IFNldHMgYSBrbm93biBvcHRpb246XG5cdCAqIC0gYGNodW5rU2l6ZWAgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG8gKGRlZmF1bHRcblx0ICogNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0ICogLSBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXMgZWxlbWVudFxuXHQgKiB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlPyBTZWUgbm90ZSBiZWxvdy5cblx0ICpcblx0ICogYHJ1bih3b3JrZXIsIHBvc3RGaW5pc2gpYDogUnVucyB0aGUgY2FsbGJhY2sgYHdvcmtlcmAgZm9yIGVhY2ggcGFnZSBpbiB0aGVcblx0ICogbGlzdC4gIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgYHdvcmtlclN1Y2Nlc3NgIHdoZW4gc3VjY2VlZGluZywgb3Jcblx0ICogYHdvcmtlckZhaWx1cmVgIHdoZW4gZmFpbGluZy4gIElmIHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb3Jcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0sIHRoaXMgaXMgZWFzaWx5IGRvbmUgYnkgcGFzc2luZyB0aGVzZSB0d29cblx0ICogZnVuY3Rpb25zIGFzIHBhcmFtZXRlcnMgdG8gdGhlIG1ldGhvZHMgb24gdGhvc2Ugb2JqZWN0czogZm9yIGluc3RhbmNlLFxuXHQgKiBgcGFnZS5zYXZlKGJhdGNoT3Aud29ya2VyU3VjY2VzcywgYmF0Y2hPcC53b3JrZXJGYWlsdXJlKWAuICBNYWtlIHN1cmUgdGhlXG5cdCAqIG1ldGhvZHMgYXJlIGNhbGxlZCBkaXJlY3RseSBpZiBzcGVjaWFsIHN1Y2Nlc3MvZmFpbHVyZSBjYXNlcyBhcmlzZS4gIElmIHlvdVxuXHQgKiBvbWl0IHRvIGNhbGwgdGhlc2UgbWV0aG9kcywgdGhlIGJhdGNoIG9wZXJhdGlvbiB3aWxsIHN0YWxsIGFmdGVyIHRoZSBmaXJzdFxuXHQgKiBjaHVuayEgIEFsc28gZW5zdXJlIHRoYXQgZWl0aGVyIHdvcmtlclN1Y2Nlc3Mgb3Igd29ya2VyRmFpbHVyZSBpcyBjYWxsZWQgbm9cblx0ICogbW9yZSB0aGFuIG9uY2UuICBUaGUgc2Vjb25kIGNhbGxiYWNrIGBwb3N0RmluaXNoYCBpcyBleGVjdXRlZCB3aGVuIHRoZVxuXHQgKiBlbnRpcmUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHQgKlxuXHQgKiBJZiB1c2luZyBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgLCB5b3Ugc2hvdWxkIHRyeSB0byBlbnN1cmUgdGhhdCB0aGVcblx0ICogYHdvcmtlclN1Y2Nlc3NgIGNhbGxiYWNrIGhhcyBhY2Nlc3MgdG8gdGhlIHBhZ2UgdGl0bGUuICBUaGlzIGlzIG5vIHByb2JsZW0gZm9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IG9iamVjdHMuICBCdXQgd2hlbiB1c2luZyB0aGUgQVBJLCBwbGVhc2Ugc2V0IHRoZVxuXHQgKiB8cGFnZU5hbWV8IHByb3BlcnR5IG9uIHRoZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9iamVjdC5cblx0ICpcblx0ICogVGhlcmUgYXJlIHNhbXBsZSBiYXRjaE9wZXJhdGlvbiBpbXBsZW1lbnRhdGlvbnMgdXNpbmcgTW9yZWJpdHMud2lraS5wYWdlIGluXG5cdCAqIHR3aW5rbGViYXRjaGRlbGV0ZS5qcywgdHdpbmtsZWJhdGNodW5kZWxldGUuanMsIGFuZCB0d2lua2xlYmF0Y2hwcm90ZWN0LmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3VycmVudEFjdGlvbl1cblx0ICovXG5cdE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uID0gZnVuY3Rpb24gKGN1cnJlbnRBY3Rpb24pIHtcblx0XHRjb25zdCBjdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VMaXN0OiBudWxsLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRjaHVua1NpemU6IDUwLFxuXHRcdFx0XHRwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lczogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gaW50ZXJuYWwgY291bnRlcnMsIGV0Yy5cblx0XHRcdHN0YXR1c0VsZW1lbnQ6IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbiB8fCB3aW5kb3cud2dVTFMoJ+aJp+ihjOaJuemHj+aTjeS9nCcsICfln7fooYzmibnmrKHmk43kvZwnKSksXG5cdFx0XHR3b3JrZXI6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGZvciBlYWNoIGl0ZW0gaW4gcGFnZUxpc3Rcblx0XHRcdHBvc3RGaW5pc2g6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZFxuXHRcdFx0Y291bnRTdGFydGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWRTdWNjZXNzOiAwLFxuXHRcdFx0Y3VycmVudENodW5rSW5kZXg6IC0xLFxuXHRcdFx0cGFnZUNodW5rczogW10sXG5cdFx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHR9O1xuXHRcdC8vIHNob3VsZG4ndCBiZSBuZWVkZWQgYnkgZXh0ZXJuYWwgdXNlcnMsIGJ1dCBwcm92aWRlZCBhbnl3YXkgZm9yIG1heGltdW0gZmxleGliaWxpdHlcblx0XHR0aGlzLmdldFN0YXR1c0VsZW1lbnQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwYWdlTGlzdCAtIEFycmF5IG9mIG9iamVjdHMgb3ZlciB3aGljaCB5b3Ugd2lzaCB0byBleGVjdXRlIHRoZSB3b3JrZXIgZnVuY3Rpb25cblx0XHQgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGxpc3Qgb2YgcGFnZSBuYW1lcyAoc3RyaW5ncykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlTGlzdCA9IChwYWdlTGlzdCkgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VMaXN0ID0gcGFnZUxpc3Q7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIGEga25vd24gb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgLSBOYW1lIG9mIHRoZSBvcHRpb246XG5cdFx0ICogLSBjaHVua1NpemUgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG9cblx0XHQgKiAoZGVmYXVsdCA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHRcdCAqIC0gcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1c1xuXHRcdCAqIGVsZW1lbnQgdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT9cblx0XHQgKiBAcGFyYW0ge251bWJlcnxib29sZWFufSBvcHRpb25WYWx1ZSAtIFZhbHVlIHRvIHdoaWNoIHRoZSBvcHRpb24gaXNcblx0XHQgKiB0byBiZSBzZXQuIFNob3VsZCBiZSBhbiBpbnRlZ2VyIGZvciBjaHVua1NpemUgYW5kIGEgYm9vbGVhbiBmb3Jcblx0XHQgKiBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcy5cblx0XHQgKi9cblx0XHR0aGlzLnNldE9wdGlvbiA9IChvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSkgPT4ge1xuXHRcdFx0Y3R4Lm9wdGlvbnNbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWx1ZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgdGhlIGZpcnN0IGNhbGxiYWNrIGZvciBlYWNoIHBhZ2UgaW4gdGhlIGxpc3QuXG5cdFx0ICogVGhlIGNhbGxiYWNrIG11c3QgY2FsbCB3b3JrZXJTdWNjZXNzIHdoZW4gc3VjY2VlZGluZywgb3Igd29ya2VyRmFpbHVyZSB3aGVuIGZhaWxpbmcuXG5cdFx0ICogUnVucyB0aGUgb3B0aW9uYWwgc2Vjb25kIGNhbGxiYWNrIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IHdvcmtlclxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtwb3N0RmluaXNoXVxuXHRcdCAqL1xuXHRcdHRoaXMucnVuID0gKHdvcmtlciwgcG9zdEZpbmlzaCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5ydW5uaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5om56YeP5pON5L2c5bey5Zyo6L+Q6KGMJywgJ+aJueasoeaTjeS9nOW3suWcqOWft+ihjCcpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0Y3R4LndvcmtlciA9IHdvcmtlcjtcblx0XHRcdGN0eC5wb3N0RmluaXNoID0gcG9zdEZpbmlzaDtcblx0XHRcdGN0eC5jb3VudFN0YXJ0ZWQgPSAwO1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQgPSAwO1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzID0gMDtcblx0XHRcdGN0eC5jdXJyZW50Q2h1bmtJbmRleCA9IC0xO1xuXHRcdFx0Y3R4LnBhZ2VDaHVua3MgPSBbXTtcblx0XHRcdGNvbnN0IHRvdGFsID0gY3R4LnBhZ2VMaXN0Lmxlbmd0aDtcblx0XHRcdGlmICghdG90YWwpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+ayoeacieaMh+WumumhtemdoicsICfmspLmnInmjIflrprpoIHpnaInKSk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2h1bmsgcGFnZSBsaXN0IGludG8gbW9yZSBtYW5hZ2VhYmxlIHVuaXRzXG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IE1vcmViaXRzLmFycmF5LmNodW5rKGN0eC5wYWdlTGlzdCwgY3R4Lm9wdGlvbnMuY2h1bmtTaXplKTtcblx0XHRcdC8vIHN0YXJ0IHRoZSBwcm9jZXNzXG5cdFx0XHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKTtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cygnMCUnKTtcblx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVG8gYmUgY2FsbGVkIGJ5IHdvcmtlciBiZWZvcmUgaXQgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhNb3JlYml0cy53aWtpLnBhZ2V8TW9yZWJpdHMud2lraS5hcGl8c3RyaW5nKX0gYXJnIC1cblx0XHQgKiBUaGlzIHNob3VsZCBiZSB0aGUgYE1vcmViaXRzLndpa2kucGFnZWAgb3IgYE1vcmViaXRzLndpa2kuYXBpYCBvYmplY3QgdXNlZCBieSB3b3JrZXJcblx0XHQgKiAoZm9yIHRoZSBhZGp1c3RtZW50IG9mIHN0YXR1cyBsaW5lcyBlbWl0dGVkIGJ5IHRoZW0pLlxuXHRcdCAqIElmIG5vIE1vcmViaXRzLndpa2kuKiBvYmplY3QgaXMgdXNlZCAoZS5nLiB5b3UncmUgdXNpbmcgYG13LkFwaSgpYCBvciBzb21ldGhpbmcgZWxzZSksIGFuZFxuXHRcdCAqIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2Agb3B0aW9uIGlzIG9uLCBnaXZlIHRoZSBwYWdlIG5hbWUgKHN0cmluZykgYXMgYXJndW1lbnQuXG5cdFx0ICovXG5cdFx0dGhpcy53b3JrZXJTdWNjZXNzID0gKGFyZykgPT4ge1xuXHRcdFx0aWYgKGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kuYXBpIHx8IGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kucGFnZSkge1xuXHRcdFx0XHQvLyB1cGRhdGUgb3IgcmVtb3ZlIHN0YXR1cyBsaW5lXG5cdFx0XHRcdGNvbnN0IHN0YXRlbGVtID0gYXJnLmdldFN0YXR1c0VsZW1lbnQoKTtcblx0XHRcdFx0aWYgKGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5nZXRQYWdlTmFtZSB8fCBhcmcucGFnZU5hbWUgfHwgKGFyZy5xdWVyeSAmJiBhcmcucXVlcnkudGl0bGUpKSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBrbm93IHRoZSBwYWdlIHRpdGxlIC0gZGlzcGxheSBhIHJlbGV2YW50IG1lc3NhZ2Vcblx0XHRcdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gYXJnLmdldFBhZ2VOYW1lID8gYXJnLmdldFBhZ2VOYW1lKCkgOiBhcmcucGFnZU5hbWUgfHwgYXJnLnF1ZXJ5LnRpdGxlO1xuXHRcdFx0XHRcdFx0c3RhdGVsZW0uaW5mbyhg5a6M5oiQ77yIW1ske3BhZ2VOYW1lfV1d77yJYCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHdlIGRvbid0IGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBqdXN0IGRpc3BsYXkgYSBnZW5lcmljIG1lc3NhZ2Vcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIHN0YXR1cyBsaW5lIGF1dG9tYXRpY2FsbHkgcHJvZHVjZWQgYnkgTW9yZWJpdHMud2lraS4qXG5cdFx0XHRcdFx0c3RhdGVsZW0udW5saW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhhcmcsIGDlrozmiJDvvIhbWyR7YXJnfV1d77yJYCk7XG5cdFx0XHR9XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MrKztcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0dGhpcy53b3JrZXJGYWlsdXJlID0gKCkgPT4ge1xuXHRcdFx0Zm5Eb25lT25lKCk7XG5cdFx0fTtcblx0XHQvLyBwcml2YXRlIGZ1bmN0aW9uc1xuXHRcdGNvbnN0IHRoaXNQcm94eSA9IHRoaXM7XG5cdFx0Y29uc3QgZm5TdGFydE5ld0NodW5rID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2h1bmsgPSBjdHgucGFnZUNodW5rc1srK2N0eC5jdXJyZW50Q2h1bmtJbmRleF07XG5cdFx0XHRpZiAoIWNodW5rKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gZG9uZSEgeWF5XG5cdFx0XHR9XG5cdFx0XHQvLyBzdGFydCB3b3JrZXJzIGZvciB0aGUgY3VycmVudCBjaHVua1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgY2h1bmspIHtcblx0XHRcdFx0Y3R4LndvcmtlcihwYWdlLCB0aGlzUHJveHkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZm5Eb25lT25lID0gKCkgPT4ge1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQrKztcblx0XHRcdC8vIHVwZGF0ZSBvdmVyYWxsIHN0YXR1cyBsaW5lXG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWQgPCB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBwcm9ncmVzcyA9IE1hdGgucm91bmQoKDEwMCAqIGN0eC5jb3VudEZpbmlzaGVkKSAvIHRvdGFsKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKGAke3Byb2dyZXNzfSVgKTtcblx0XHRcdFx0Ly8gc3RhcnQgYSBuZXcgY2h1bmsgaWYgd2UncmUgY2xvc2UgZW5vdWdoIHRvIHRoZSBlbmQgb2YgdGhlIHByZXZpb3VzIGNodW5rLCBhbmRcblx0XHRcdFx0Ly8gd2UgaGF2ZW4ndCBhbHJlYWR5IHN0YXJ0ZWQgdGhlIG5leHQgb25lXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjdHguY291bnRGaW5pc2hlZCA+PSBjdHguY291bnRTdGFydGVkIC0gTWF0aC5tYXgoY3R4Lm9wdGlvbnMuY2h1bmtTaXplIC8gMTAsIDIpICYmXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihjdHguY291bnRGaW5pc2hlZCAvIGN0eC5vcHRpb25zLmNodW5rU2l6ZSkgPiBjdHguY3VycmVudENodW5rSW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zm5TdGFydE5ld0NodW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY3R4LmNvdW50RmluaXNoZWQgPT09IHRvdGFsKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXR1c1N0cmluZyA9IGDlrozmiJDvvIgke2N0eC5jb3VudEZpbmlzaGVkU3VjY2Vzc30vJHtjdHguY291bnRGaW5pc2hlZH3mk43kvZzmiJDlip/lrozmiJDvvIlgO1xuXHRcdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWRTdWNjZXNzIDwgY3R4LmNvdW50RmluaXNoZWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKHN0YXR1c1N0cmluZyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjdHguY291bnRGaW5pc2hlZCA+IHRvdGFsXG5cdFx0XHRcdC8vIGp1c3QgZm9yIGdpZ2dsZXMhICh3ZWxsLCBzZXJpb3VzIGRlYnVnZ2luZywgYWN0dWFsbHkpXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50Lndhcm4oXG5cdFx0XHRcdFx0YCR7d2luZG93LndnVUxTKCflrozmiJDvvIjlpJrmiafooYzkuoYnLCAn5a6M5oiQ77yI5aSa5Z+36KGM5LqGJykgKyAoY3R4LmNvdW50RmluaXNoZWQgLSB0b3RhbCl95qyh77yJYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHQvKipcblx0ICogQSBzaW1wbGUgZHJhZ2dhYmxlIHdpbmRvdywgbm93IGEgd3JhcHBlciBmb3IgalF1ZXJ5IFVJJ3MgZGlhbG9nIGZlYXR1cmUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aS5kaWFsb2dcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgbWF4aW11bSBhbGxvd2FibGUgaGVpZ2h0IGZvciB0aGUgY29udGVudCBhcmVhLlxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcblx0XHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHRjb250ZW50LmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctY29udGVudCc7XG5cdFx0Y29udGVudC5pZCA9IGBtb3JlYml0cy1kaWFsb2ctY29udGVudC0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTUpfWA7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZyh7XG5cdFx0XHRhdXRvT3BlbjogZmFsc2UsXG5cdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdCdQbGFjZWhvbGRlciBidXR0b24nOiAoKSA9PiB7fSxcblx0XHRcdH0sXG5cdFx0XHRkaWFsb2dDbGFzczogJ21vcmViaXRzLWRpYWxvZycsXG5cdFx0XHR3aWR0aDogTWF0aC5taW4oTnVtYmVyLnBhcnNlSW50KHdpbmRvdy5pbm5lcldpZHRoLCAxMCksIE51bWJlci5wYXJzZUludCh3aWR0aCB8fCA4MDAsIDEwKSksXG5cdFx0XHQvLyBnaXZlIGpRdWVyeSB0aGUgZ2l2ZW4gaGVpZ2h0IHZhbHVlICh3aGljaCByZXByZXNlbnRzIHRoZSBhbnRpY2lwYXRlZCBoZWlnaHQgb2YgdGhlIGRpYWxvZykgaGVyZSwgc29cblx0XHRcdC8vIGl0IGNhbiBwb3NpdGlvbiB0aGUgZGlhbG9nIGFwcHJvcHJpYXRlbHlcblx0XHRcdC8vIHRoZSAyMCBwaXhlbHMgcmVwcmVzZW50cyBhZGp1c3RtZW50IGZvciB0aGUgZXh0cmEgaGVpZ2h0IG9mIHRoZSBqUXVlcnkgZGlhbG9nIFwiY2hyb21lXCIsIGNvbXBhcmVkXG5cdFx0XHQvLyB0byB0aGF0IG9mIHRoZSBvbGQgU2ltcGxlV2luZG93XG5cdFx0XHRoZWlnaHQ6IGhlaWdodCArIDIwLFxuXHRcdFx0Y2xvc2U6IChldmVudCkgPT4ge1xuXHRcdFx0XHQvLyBkaWFsb2dzIGFuZCB0aGVpciBjb250ZW50IGNhbiBiZSBkZXN0cm95ZWQgb25jZSBjbG9zZWRcblx0XHRcdFx0JChldmVudC50YXJnZXQpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0YXJ0KCkge1xuXHRcdFx0XHRbdGhpcy5zY3JvbGxib3hdID0gJCh0aGlzKS5maW5kKCcubW9yZWJpdHMtc2Nyb2xsYm94Jyk7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLm1heEhlaWdodCA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0b3AoKSB7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsYm94ID0gbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRyZXNpemUoKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLndpZHRoID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpO1xuXHRcdC8vIGRlbGV0ZSB0aGUgcGxhY2Vob2xkZXIgYnV0dG9uIChpdCdzIG9ubHkgdGhlcmUgc28gdGhlIGJ1dHRvbnBhbmUgZ2V0cyBjcmVhdGVkKVxuXHRcdCR3aWRnZXQuZmluZCgnYnV0dG9uJykuZWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0dmFsdWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0Ly8gYWRkIGNvbnRhaW5lciBmb3IgdGhlIGJ1dHRvbnMgd2UgYWRkLCBhbmQgdGhlIGZvb3RlciBsaW5rcyAoaWYgYW55KVxuXHRcdGNvbnN0IGJ1dHRvbnNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0YnV0dG9uc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnO1xuXHRcdGNvbnN0IGxpbmtzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5rc3NwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcyc7XG5cdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUnKS5hcHBlbmQoYnV0dG9uc3BhbiwgbGlua3NzcGFuKTtcblx0XHQvLyByZXNpemUgdGhlIHNjcm9sbGJveCB3aXRoIHRoZSBkaWFsb2csIGlmIG9uZSBpcyBwcmVzZW50XG5cdFx0JHdpZGdldC5yZXNpemFibGUoJ29wdGlvbicsICdhbHNvUmVzaXplJywgYCMke3RoaXMuY29udGVudC5pZH0gLm1vcmViaXRzLXNjcm9sbGJveCwgIyR7dGhpcy5jb250ZW50LmlkfWApO1xuXHR9O1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cucHJvdG90eXBlID0ge1xuXHRcdGJ1dHRvbnM6IFtdLFxuXHRcdGhlaWdodDogNjAwLFxuXHRcdGhhc0Zvb3RlckxpbmtzOiBmYWxzZSxcblx0XHRzY3JpcHROYW1lOiBudWxsLFxuXHRcdC8qKlxuXHRcdCAqIEZvY3VzZXMgdGhlIGRpYWxvZy4gVGhpcyBtaWdodCB3b3JrLCBvciBvbiB0aGUgY29udHJhcnksIGl0IG1pZ2h0IG5vdC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0Zm9jdXMoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdtb3ZlVG9Ub3AnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2xvc2VzIHRoZSBkaWFsb2cuIElmIHRoaXMgaXMgc2V0IGFzIGFuIGV2ZW50IGhhbmRsZXIsIGl0IHdpbGwgc3RvcCB0aGUgZXZlbnRcblx0XHQgKiBmcm9tIGRvaW5nIGFueXRoaW5nIG1vcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2V2ZW50fSBbZXZlbnRdXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRjbG9zZShldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgZGlhbG9nLiBDYWxsaW5nIGRpc3BsYXkoKSBvbiBhIGRpYWxvZyB0aGF0IGhhcyBwcmV2aW91c2x5IGJlZW4gY2xvc2VkXG5cdFx0ICogbWlnaHQgd29yaywgYnV0IGl0IGlzIG5vdCBndWFyYW50ZWVkLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRkaXNwbGF5KCkge1xuXHRcdFx0aWYgKHRoaXMuc2NyaXB0TmFtZSkge1xuXHRcdFx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNjcmlwdG5hbWVzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi50ZXh0Q29udGVudCA9IGAke3RoaXMuc2NyaXB0TmFtZX0gXFx1MDBCNyBgOyAvLyBVKzAwQjcgTUlERExFIERPVCA9ICZtaWRkb3Q7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLnVpLWRpYWxvZy10aXRsZScpLnByZXBlbmQoc2NyaXB0bmFtZXNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZGlhbG9nID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3BlbicpO1xuXHRcdFx0aWYgKHdpbmRvdy5zZXR1cFRvb2x0aXBzICYmIHdpbmRvdy5wZyAmJiB3aW5kb3cucGcucmUgJiYgd2luZG93LnBnLnJlLmRpZmYpIHtcblx0XHRcdFx0Ly8gdGllIGluIHdpdGggTkFWUE9QXG5cdFx0XHRcdGRpYWxvZy5wYXJlbnQoKVswXS5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdFx0XHR3aW5kb3cuc2V0dXBUb29sdGlwcyhkaWFsb2cucGFyZW50KClbMF0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRIZWlnaHQodGhpcy5oZWlnaHQpOyAvLyBpbml0IGhlaWdodCBhbGdvcml0aG1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHRpdGxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRUaXRsZSh0aXRsZSkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgdGl0bGUpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzY3JpcHQgbmFtZSwgYXBwZWFyaW5nIGFzIGEgcHJlZml4IHRvIHRoZSB0aXRsZSB0byBoZWxwIHVzZXJzIGRldGVybWluZSB3aGljaFxuXHRcdCAqIHVzZXIgc2NyaXB0IGlzIHByb2R1Y2luZyB3aGljaCBkaWFsb2cuIEZvciBpbnN0YW5jZSwgVHdpbmtsZSBtb2R1bGVzIHNldCB0aGlzIHRvIFwiVHdpbmtsZVwiLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFNjcmlwdE5hbWUobmFtZSkge1xuXHRcdFx0dGhpcy5zY3JpcHROYW1lID0gbmFtZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHdpZHRoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRXaWR0aCh3aWR0aCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3dpZHRoJywgd2lkdGgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cncyBtYXhpbXVtIGhlaWdodC4gVGhlIGRpYWxvZyB3aWxsIGF1dG8tc2l6ZSB0byBmaXQgaXRzIGNvbnRlbnRzLFxuXHRcdCAqIGJ1dCB0aGUgY29udGVudCBhcmVhIHdpbGwgZ3JvdyBubyBsYXJnZXIgdGhhbiB0aGUgaGVpZ2h0IGdpdmVuIGhlcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRIZWlnaHQoaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRcdC8vIGZyb20gZGlzcGxheSB0aW1lIG9ud2FyZHMsIGxldCB0aGUgYnJvd3NlciBkZXRlcm1pbmUgdGhlIG9wdGltdW0gaGVpZ2h0LFxuXHRcdFx0Ly8gYW5kIGluc3RlYWQgbGltaXQgdGhlIGhlaWdodCBhdCB0aGUgZ2l2ZW4gdmFsdWVcblx0XHRcdC8vIG5vdGUgdGhhdCB0aGUgZ2l2ZW4gaGVpZ2h0IHdpbGwgZXhjbHVkZSB0aGUgYXBwcm94LiAyMHB4IHRoYXQgdGhlIGpRdWVyeSBVSVxuXHRcdFx0Ly8gY2hyb21lIGhhcyBpbiBoZWlnaHQgaW4gYWRkaXRpb24gdG8gdGhlIGhlaWdodCBvZiBhbiBlcXVpdmFsZW50IFwiY2xhc3NpY1wiXG5cdFx0XHQvLyBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0XHRcdGlmIChcblx0XHRcdFx0TnVtYmVyLnBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JylbMF0sIG51bGwpLmhlaWdodCwgMTApID5cblx0XHRcdFx0d2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHQpIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCAtIDIpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ3Bvc2l0aW9uJywgJ3RvcCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsICdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnKVswXS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdHRoaXMuaGVpZ2h0IC0gMzAsXG5cdFx0XHRcdDEwXG5cdFx0XHQpfXB4YDtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUsIHVzdWFsbHkgZnJvbSByZW5kZXJpbmdcblx0XHQgKiBhIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LlxuXHRcdCAqIFJlLWVudW1lcmF0ZXMgdGhlIGZvb3RlciBidXR0b25zLCBidXQgbGVhdmVzIHRoZSBmb290ZXIgbGlua3MgYXMgdGhleSBhcmUuXG5cdFx0ICogQmUgc3VyZSB0byBjYWxsIHRoaXMgYXQgbGVhc3Qgb25jZSBiZWZvcmUgdGhlIGRpYWxvZyBpcyBkaXNwbGF5ZWQuLi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5wdXJnZUNvbnRlbnQoKTtcblx0XHRcdHRoaXMuYWRkQ29udGVudChjb250ZW50KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlIHRvIHRoZSBkaWFsb2cgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXHRcdFx0Ly8gbG9vayBmb3Igc3VibWl0IGJ1dHRvbnMgaW4gdGhlIGNvbnRlbnQsIGhpZGUgdGhlbSwgYW5kIGFkZCBhIHByb3h5IGJ1dHRvbiB0byB0aGUgYnV0dG9uIHBhbmVcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpXG5cdFx0XHRcdC5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdFx0XHRpZiAodmFsdWUuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS50ZXh0Q29udGVudCkge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9ICfmj5DkuqQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24uY2xhc3NOYW1lID0gdmFsdWUuY2xhc3NOYW1lIHx8ICdzdWJtaXRCdXR0b25Qcm94eSc7XG5cdFx0XHRcdFx0Ly8gaGVyZSBpcyBhbiBpbnN0YW5jZSBvZiBjaGVhcCBjb2RpbmcsIHByb2JhYmx5IGEgbWVtb3J5LXVzYWdlIGhpdCBpbiB1c2luZyBhIGNsb3N1cmUgaGVyZVxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsdWUuY2xpY2soKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c2VsZi5idXR0b25zW3NlbGYuYnV0dG9ucy5sZW5ndGhdID0gYnV0dG9uO1xuXHRcdFx0XHR9KTtcblx0XHRcdC8vIHJlbW92ZSBhbGwgYnV0dG9ucyBmcm9tIHRoZSBidXR0b24gcGFuZSBhbmQgcmUtYWRkIHRoZW1cblx0XHRcdGlmICh0aGlzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmJ1dHRvbnMpWzBdXG5cdFx0XHRcdFx0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnd2lkZ2V0Jylcblx0XHRcdFx0XHQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJylbMF1cblx0XHRcdFx0XHQuc2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5JywgJ2RhdGEtZW1wdHknKTsgLy8gdXNlZCBieSBDU1Ncblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGFsbCBjb250ZW50cyBmcm9tIHRoZSBkaWFsb2csIGJhcnJpbmcgYW55IGZvb3RlciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0cHVyZ2VDb250ZW50KCkge1xuXHRcdFx0dGhpcy5idXR0b25zID0gW107XG5cdFx0XHQvLyBkZWxldGUgYWxsIGJ1dHRvbnMgaW4gdGhlIGJ1dHRvbnBhbmVcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpLmVtcHR5KCk7XG5cdFx0XHR3aGlsZSAodGhpcy5jb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250ZW50LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIGEgbGluayBpbiB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgZGlhbG9nLlxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBoZWxwIG9yIHBvbGljeSBsaW5rcy5cblx0XHQgKiBGb3IgZXhhbXBsZSwgVHdpbmtsZSdzIENTRCBtb2R1bGUgYWRkcyBhIGxpbmsgdG8gdGhlIENTRCBwb2xpY3kgcGFnZSxcblx0XHQgKiBhcyB3ZWxsIGFzIGEgbGluayB0byBUd2lua2xlJ3MgZG9jdW1lbnRhdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gRGlzcGxheSB0ZXh0LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpUGFnZSAtIExpbmsgdGFyZ2V0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXA9ZmFsc2VdIC0gU2V0IHRydWUgdG8gcHJlcGVuZCByYXRoZXIgdGhhbiBhcHBlbmQuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRhZGRGb290ZXJMaW5rKHRleHQsIHdpa2lQYWdlLCBwcmVwKSB7XG5cdFx0XHRjb25zdCAkZm9vdGVybGlua3MgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJyk7XG5cdFx0XHRpZiAodGhpcy5oYXNGb290ZXJMaW5rcykge1xuXHRcdFx0XHRjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGJ1bGxldC50ZXh0Q29udGVudCA9ICcgXFx1MjAyMiAnOyAvLyBVKzIwMjIgQlVMTEVUXG5cdFx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGJ1bGxldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKHdpa2lQYWdlKSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB3aWtpUGFnZSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0XHRsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdCRmb290ZXJsaW5rcy5wcmVwZW5kKGxpbmspO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFzRm9vdGVyTGlua3MgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHdoZXRoZXIgdGhlIHdpbmRvdyBzaG91bGQgYmUgbW9kYWwgb3Igbm90LiBNb2RhbCBkaWFsb2dzIGNyZWF0ZVxuXHRcdCAqIGFuIG92ZXJsYXkgYmVsb3cgdGhlIGRpYWxvZyBidXQgYWJvdmUgb3RoZXIgcGFnZSBlbGVtZW50cy4gVGhpc1xuXHRcdCAqIG11c3QgYmUgdXNlZCAoaWYgbmVjZXNzYXJ5KSBiZWZvcmUgY2FsbGluZyBkaXNwbGF5KCkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFttb2RhbD1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSwgb3RoZXIgaXRlbXMgb24gdGhlXG5cdFx0ICogcGFnZSB3aWxsIGJlIGRpc2FibGVkLCBpLmUuLCBjYW5ub3QgYmUgaW50ZXJhY3RlZCB3aXRoLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0TW9kYWxpdHkobW9kYWwpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIG1vZGFsKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBFbmFibGVzIG9yIGRpc2FibGVzIGFsbCBmb290ZXIgYnV0dG9ucyBvbiBhbGwge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd31zIGluIHRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIGBmYWxzZWAgd2hlbiB0aGUgYnV0dG9uKHMpIGJlY29tZSBpcnJlbGV2YW50IChlLmcuIGp1c3QgYmVmb3JlXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdH0gaXMgY2FsbGVkKS5cblx0ICogVGhpcyBpcyBub3QgYW4gaW5zdGFuY2UgbWV0aG9kIHNvIHRoYXQgY29uc3VtZXJzIGRvbid0IGhhdmUgdG8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGVcblx0ICogb3JpZ2luYWwgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb2JqZWN0IHNpdHRpbmcgYXJvdW5kIHNvbWV3aGVyZS4gQW55d2F5LCBtb3N0IG9mIHRoZSB0aW1lXG5cdCAqIHRoZXJlIHdpbGwgb25seSBiZSBvbmUgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb3Blbiwgc28gdGhpcyBzaG91bGRuJ3QgbWF0dGVyLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93LnNldEJ1dHRvbnNFbmFibGVkID0gKGVuYWJsZWQpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMgYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlZCk7XG5cdH07XG59KShqUXVlcnkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBLElBQUFBLG9CQUE0QkMsUUFBQSxpQkFBQTtBQXJDNUI7Q0F1Q0MsU0FBU0MsU0FBU0MsR0FBRztBQUdyQixRQUFNQyxXQUFXLENBQUM7QUFDbEJDLFNBQU9ELFdBQVdBO0FBS2xCQSxXQUFTRSxPQUFPOzs7OztJQUtmQyxvQkFBb0IsQ0FBQyxhQUFhLE1BQU07Ozs7Ozs7Ozs7SUFVeENDLDBCQUEyQkMsU0FBUTtBQUNsQyxZQUFNQyxTQUFTO0FBQ2YsWUFBTUMsU0FBUztBQUNmLFlBQU1DLFFBQVFGLE9BQU9HLEtBQUtKLEdBQUcsS0FBS0UsT0FBT0UsS0FBS0osR0FBRztBQUNqRCxZQUFNSyxXQUFXSCxPQUFPRSxLQUFLSixHQUFHO0FBQ2hDLFVBQUksQ0FBQ0csT0FBTztBQUNYLGVBQU87TUFDUjtBQUNBLFlBQU1HLFFBQVFYLFNBQVNZLEtBQUtDLFdBQVdDLE9BQU9DLFFBQVFQLE1BQU0sQ0FBQyxDQUFDO0FBQzlELFVBQUlHLFVBQVUsSUFBSTtBQUNqQixlQUFPO01BQ1I7QUFFQSxhQUFPRCxXQUNKLENBQUNGLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsSUFBSSxHQUFHQSxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLElBQUksR0FBR0EsTUFBTSxDQUFDLENBQUMsSUFDekQsQ0FBQ0EsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxJQUFJLEdBQUdBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENB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UUFBUXNVLE1BQU07UUFDNUIsT0FBTztBQUNORCx1QkFBYS8yQixPQUFPZzNCLE1BQU07UUFDM0I7TUFDRDtBQUNBLFlBQU1wTyxPQUFPcHRCLFNBQVN5RixjQUFjLEdBQUc7QUFDdkMybkIsV0FBS3puQixhQUFhLFFBQVF0RyxHQUFHeUQsS0FBS0MsT0FBT3M0QixRQUFRLENBQUM7QUFDbERqTyxXQUFLem5CLGFBQWEsU0FBUzAxQixRQUFRO0FBQ25Dak8sV0FBS3puQixhQUFhLFVBQVUsUUFBUTtBQUNwQ3luQixXQUFLem5CLGFBQWEsT0FBTyxxQkFBcUI7QUFDOUN5bkIsV0FBSy9nQixjQUFjL0o7QUFDbkIsVUFBSWc1QixNQUFNO0FBQ1RDLHFCQUFhclUsUUFBUWtHLElBQUk7TUFDMUIsT0FBTztBQUNObU8scUJBQWEvMkIsT0FBTzRvQixJQUFJO01BQ3pCO0FBQ0EsV0FBSzZNLGlCQUFpQjtBQUN0QixhQUFPO0lBQ1I7Ozs7Ozs7Ozs7SUFVQXdCLFlBQVlDLE9BQU87QUFDbEJ4OUIsUUFBRSxLQUFLd0UsT0FBTyxFQUFFczJCLE9BQU8sVUFBVSxTQUFTMEMsS0FBSztBQUMvQyxhQUFPO0lBQ1I7RUFDRDtBQVlBdjlCLFdBQVMwNkIsYUFBYThDLG9CQUFxQkMsYUFBWTtBQUN0RCxVQUFNbFIsUUFBUXhzQixFQUFFLE1BQU07QUFDdEJ3c0IsVUFBTW5mLEtBQUssaUNBQWlDLEVBQUV5VCxLQUFLLFlBQVksQ0FBQzRjLE9BQU87RUFDeEU7QUFDRCxHQUFHQyxNQUFNOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm1vcmViaXRzIiwgIiQiLCAiTW9yZWJpdHMiLCAid2luZG93IiwgImwxMG4iLCAicmVkaXJlY3RUYWdBbGlhc2VzIiwgInNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdCIsICJzdHIiLCAicmd4VVRDIiwgInJneENTVCIsICJtYXRjaCIsICJleGVjIiwgIm1hdGNoQ1NUIiwgIm1vbnRoIiwgImRhdGUiLCAibG9jYWxlRGF0YSIsICJtb250aHMiLCAiaW5kZXhPZiIsICJ1c2VySXNJbkdyb3VwIiwgImdyb3VwIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidXNlcklzU3lzb3AiLCAic2FuaXRpemVJUHY2IiwgImFkZHJlc3MiLCAiY29uc29sZSIsICJ3YXJuIiwgImlwIiwgImlzUGFnZVJlZGlyZWN0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicGFnZU5hbWVOb3JtIiwgInJlcGxhY2UiLCAicGFnZU5hbWVSZWdleCIsICJwYWdlTmFtZSIsICJmaXJzdENoYXIiLCAicmVtYWluZGVyIiwgInN0cmluZyIsICJlc2NhcGVSZWdFeHAiLCAic2xpY2UiLCAiVGl0bGUiLCAicGhwQ2hhclRvVXBwZXIiLCAidG9Mb3dlckNhc2UiLCAiY29uY2F0IiwgImNyZWF0ZUh0bWwiLCAiaW5wdXQiLCAiZnJhZ21lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJnZW5lcmF0ZUFycmF5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIk5vZGUiLCAiYXBwZW5kQ2hpbGQiLCAiX2l0ZXJhdG9yMiIsICJwYXJzZUhUTUwiLCAicmVuZGVyV2lraWxpbmtzIiwgIl9zdGVwMiIsICJub2RlIiwgImVyciIsICJlIiwgImYiLCAidGV4dCIsICJ1YiIsICJ1bmJpbmRlciIsICJ1bmJpbmQiLCAiY29udGVudCIsICJfIiwgInRhcmdldCIsICJ0ZXh0XyIsICJ1dGlsIiwgImdldFVybCIsICJyZWJpbmQiLCAibmFtZXNwYWNlUmVnZXgiLCAibmFtZXNwYWNlcyIsICJhbGlhc2VzIiwgInJlZ2V4IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZSIsICJudW1iZXIiLCAibWFwIiwgImNoYXIiLCAiam9pbiIsICJxdWlja0Zvcm0iLCAiZXZlbnQiLCAiZXZlbnRUeXBlIiwgInJvb3QiLCAidHlwZSIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgInJldCIsICJuYW1lcyIsICJhcHBlbmQiLCAiZGF0YSIsICJjaGlsZHMiLCAiaWQiLCAiY2hpbGQiLCAiaW50ZXJuYWxTdWJncm91cElkIiwgImN1cnJlbnROb2RlIiwgImNvbXB1dGUiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiaW5JZCIsICJjaGlsZENvbnRhaW5lciIsICJsYWJlbCIsICJhZG1pbm9ubHkiLCAiaSIsICJjdXJyZW50IiwgInN1Ym5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic2V0QXR0cmlidXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic2VsZWN0IiwgIm11bHRpcGxlIiwgInNpemUiLCAiZGlzYWJsZWQiLCAibGlzdCIsICJ2YWx1ZXMiLCAic2VsZWN0ZWQiLCAiaGlkZGVuIiwgImNyZWF0ZVRleHROb2RlIiwgImN1cklkIiwgImN1ckRpdiIsICJ0b29sdGlwIiwgImdlbmVyYXRlVG9vbHRpcCIsICJjaGVja2VkIiwgInN0eWxlIiwgInN1Ymdyb3VwIiwgInRtcGdyb3VwIiwgInN1Ymdyb3VwUmF3IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsIiwgIm5ld0VsIiwgInNob3duIiwgInBhcmVudE5vZGUiLCAiZm9ybSIsICJyZW1vdmVDaGlsZCIsICJzaGlmdENsaWNrU3VwcG9ydCIsICJjaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0IiwgImdldEVsZW1lbnRzIiwgInBsYWNlaG9sZGVyIiwgIl9pMiIsICJfYXJyIiwgImF0dCIsICJfaTMiLCAiX2FycjIiLCAiX2k0IiwgIl9hcnIzIiwgIm1pbiIsICJtYXgiLCAiTnVtYmVyIiwgIlBPU0lUSVZFX0lORklOSVRZIiwgImxpc3ROb2RlIiwgIm1vcmUiLCAibmV3Tm9kZSIsICJzdWJsaXN0IiwgImFyZWEiLCAiY291bnRlciIsICJzdG9wUHJvcGFnYXRpb24iLCAibW9yZUJ1dHRvbiIsICJzdWJsYWJlbCIsICJyZW1vdmUiLCAibWF4bGVuZ3RoIiwgImVsZW0iLCAibW9yZWJ1dHRvbiIsICJsaXN0bm9kZSIsICJub2RlXyIsICJpbnB1dG5vZGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInJlbW92ZUJ1dHRvbiIsICJyZXN1bHQiLCAibGFiZWxFbGVtZW50IiwgImNvbHMiLCAicm93cyIsICJyZXF1aXJlZCIsICJyZWFkb25seSIsICJFcnJvciIsICJ0b1N0cmluZyIsICJleHRyYSIsICIkZGF0YSIsICJ0b29sdGlwQnV0dG9uIiwgInRpdGxlIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgImNvbGxpc2lvbiIsICJ0b29sdGlwQ2xhc3MiLCAiZ2V0SW5wdXREYXRhIiwgIl9pdGVyYXRvcjUiLCAiZWxlbWVudHMiLCAiX3N0ZXA1IiwgImZpZWxkIiwgImZpZWxkTmFtZU5vcm0iLCAiZGF0YXNldCIsICJzaW5nbGUiLCAidmFsIiwgInRyaW0iLCAiZmllbGROYW1lIiwgIiRmb3JtIiwgImVzY2FwZVNlbGVjdG9yIiwgIiRlbGVtZW50cyIsICJmaW5kIiwgInRvQXJyYXkiLCAiZ2V0Q2hlY2tib3hPclJhZGlvIiwgImVsZW1lbnRBcnJheSIsICJmb3VuZCIsICJmaWx0ZXIiLCAiZ2V0RWxlbWVudENvbnRhaW5lciIsICJIVE1MRmllbGRTZXRFbGVtZW50IiwgIkhUTUxEaXZFbGVtZW50IiwgIkhUTUxIZWFkaW5nRWxlbWVudCIsICJnZXRFbGVtZW50TGFiZWxPYmplY3QiLCAiSFRNTFRleHRBcmVhRWxlbWVudCIsICJnZXRFbGVtZW50TGFiZWwiLCAiZmlyc3RDaGlsZCIsICJ0ZXh0Q29udGVudCIsICJzZXRFbGVtZW50TGFiZWwiLCAibGFiZWxUZXh0IiwgIm92ZXJyaWRlRWxlbWVudExhYmVsIiwgInRlbXBvcmFyeUxhYmVsVGV4dCIsICJoYXNBdHRyaWJ1dGUiLCAicmVzZXRFbGVtZW50TGFiZWwiLCAiZ2V0QXR0cmlidXRlIiwgInNldEVsZW1lbnRWaXNpYmlsaXR5IiwgInZpc2liaWxpdHkiLCAidG9nZ2xlIiwgInNldEVsZW1lbnRUb29sdGlwVmlzaWJpbGl0eSIsICJIVE1MRm9ybUVsZW1lbnQiLCAiZ2V0Q2hlY2tlZCIsICJyZXR1cm5BcnJheSIsICJIVE1MU2VsZWN0RWxlbWVudCIsICJvcHRpb25zIiwgIkhUTUxJbnB1dEVsZW1lbnQiLCAiZ2V0VW5jaGVja2VkIiwgImlzSVB2NkFkZHJlc3MiLCAidG9VcHBlckNhc2UiLCAiYWJicmV2UG9zIiwgIkNJRFJTdGFydCIsICJhZGRyZXNzRW5kIiwgInJlcGVhdCIsICJwYWQiLCAicmVwbGFjZW1lbnQiLCAic3BsaXQiLCAiaXNSYW5nZSIsICJpc0lQQWRkcmVzcyIsICJ2YWxpZENJRFIiLCAic3VibmV0IiwgInBhcnNlSW50IiwgImdldDY0IiwgImlwdjYiLCAic3VibmV0TWF0Y2giLCAiaXBSZWdleCIsICJ0b1VwcGVyQ2FzZUZpcnN0Q2hhciIsICJ0b0xvd2VyQ2FzZUZpcnN0Q2hhciIsICJzcGxpdFdlaWdodGVkQnlLZXlzIiwgInN0YXJ0IiwgImVuZCIsICJza2lwbGlzdCIsICJsZXZlbCIsICJpbml0aWFsIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiVHlwZUVycm9yIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImZvcm1hdFJlYXNvblRleHQiLCAiYWRkU2lnIiwgInJlYXNvbiIsICJzaWciLCAic2lnSW5kZXgiLCAibGFzdEluZGV4T2YiLCAiZm9ybWF0UmVhc29uRm9yTG9nIiwgInNhZmVSZXBsYWNlIiwgInBhdHRlcm4iLCAiaXNJbmZpbml0eSIsICJleHBpcnkiLCAiZm9ybWF0VGltZSIsICJ0aW1lIiwgIm0iLCAid2dVTFMiLCAiYXBwZW5kUHVuY3R1YXRpb24iLCAicHVuY3R1YXRpb24iLCAic2VhcmNoIiwgImFycmF5IiwgInVuaXEiLCAiYXJyIiwgIml0ZW0iLCAiaWR4IiwgImR1cHMiLCAiY2h1bmsiLCAibnVtQ2h1bmtzIiwgIk1hdGgiLCAiY2VpbCIsICJmcm9tIiwgInNlbGVjdDIiLCAibWF0Y2hlcnMiLCAib3B0Z3JvdXBGdWxsIiwgInBhcmFtcyIsICJvcmlnaW5hbE1hdGNoZXIiLCAiZm4iLCAiZGVmYXVsdHMiLCAibWF0Y2hlciIsICJ0ZXJtIiwgImNoaWxkcmVuIiwgIndvcmRCZWdpbm5pbmciLCAiUmVnRXhwIiwgInRlc3QiLCAiaGlnaGxpZ2h0U2VhcmNoTWF0Y2hlcyIsICJzZWFyY2hUZXJtIiwgInNlbGVjdDJTZWFyY2hRdWVyeSIsICJsb2FkaW5nIiwgImNzcyIsICJxdWVyeUludGVyY2VwdG9yIiwgImF1dG9TdGFydCIsICJldiIsICJ3aGljaCIsICJjbG9zZXN0IiwgInByZXYiLCAiZHJvcGRvd24iLCAiJHNlYXJjaCIsICJzZWxlY3Rpb24iLCAiZm9jdXMiLCAiaGlzdG9yeSIsICJwcmVmaXgiLCAicmFuZG9tIiwgInBvc3RmaXgiLCAicmUiLCAiZ2V0Q2FsbGJhY2siLCAiaGFzT3duIiwgInNlbGYiLCAiYXJncyIsICJwYXJhbSIsICJkaWdpdE1hdGNoIiwgIl9kIiwgIkRhdGUiLCAiUmVmbGVjdCIsICJhcHBseSIsICJVVEMiLCAiZGF0ZVBhcnRzIiwgIkZ1bmN0aW9uIiwgImJpbmQiLCAiaXNWYWxpZCIsICJsb2ciLCAibW9udGhzU2hvcnQiLCAiZGF5cyIsICJkYXlzU2hvcnQiLCAicmVsYXRpdmVUaW1lcyIsICJ0aGlzRGF5IiwgInByZXZEYXkiLCAibmV4dERheSIsICJ0aGlzV2VlayIsICJwYXN0V2VlayIsICJvdGhlciIsICJ1bml0TWFwIiwgInNlY29uZHMiLCAibWludXRlcyIsICJob3VycyIsICJ3ZWVrcyIsICJ5ZWFycyIsICJpc05hTiIsICJnZXRUaW1lIiwgImlzQmVmb3JlIiwgImlzQWZ0ZXIiLCAiZ2V0VVRDTW9udGhOYW1lIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ01vbnRoTmFtZUFiYnJldiIsICJnZXRNb250aE5hbWUiLCAiZ2V0TW9udGgiLCAiZ2V0TW9udGhOYW1lQWJicmV2IiwgImdldFVUQ0RheU5hbWUiLCAiZ2V0VVRDRGF5IiwgImdldFVUQ0RheU5hbWVBYmJyZXYiLCAiZ2V0RGF5TmFtZSIsICJnZXREYXkiLCAiZ2V0RGF5TmFtZUFiYnJldiIsICJhZGQiLCAidW5pdCIsICJudW0iLCAidW5pdE5vcm0iLCAia2V5cyIsICJzdWJ0cmFjdCIsICJmb3JtYXQiLCAiZm9ybWF0c3RyIiwgInpvbmUiLCAidWRhdGUiLCAiZ2V0VGltZXpvbmVPZmZzZXQiLCAidG9JU09TdHJpbmciLCAibGVuIiwgImgyNCIsICJnZXRIb3VycyIsICJnZXRNaW51dGVzIiwgImdldFNlY29uZHMiLCAibXMiLCAiZ2V0TWlsbGlzZWNvbmRzIiwgIkQiLCAiZ2V0RGF0ZSIsICJNIiwgIlkiLCAiZ2V0RnVsbFllYXIiLCAiaDEyIiwgImFtT3JQbSIsICJyZXBsYWNlbWVudE1hcCIsICJISCIsICJIIiwgImhoIiwgImgiLCAiQSIsICJtbSIsICJzcyIsICJTU1MiLCAiZGRkZCIsICJkZGQiLCAiZCIsICJERCIsICJNTU1NIiwgIk1NTSIsICJNTSIsICJZWVlZIiwgIllZIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJjYWxlbmRhciIsICJkYXRlRGlmZiIsICJzZXRIb3VycyIsICJtb250aEhlYWRlclJlZ2V4IiwgImdldFVUQ0Z1bGxZZWFyIiwgIm1vbnRoSGVhZGVyIiwgImhlYWRlciIsICJfaXRlcmF0b3I3IiwgImdldE93blByb3BlcnR5TmFtZXMiLCAiX3N0ZXA3IiwgImZ1bmMiLCAid2lraSIsICJudW1iZXJPZkFjdGlvbnNMZWZ0IiwgIm5ick9mQ2hlY2twb2ludHNMZWZ0IiwgImFjdGlvbkNvbXBsZXRlZCIsICJub3RpY2UiLCAic3RhdHVzIiwgInJlZGlyZWN0IiwgImZvbGxvd1JlZGlyZWN0IiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAidGltZU91dCIsICJ3cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQiLCAiYWRkQ2hlY2twb2ludCIsICJyZW1vdmVDaGVja3BvaW50IiwgImFwaSIsICJjdXJyZW50QWN0aW9uIiwgInF1ZXJ5IiwgIm9uU3VjY2VzcyIsICJzdGF0dXNFbGVtZW50IiwgIm9uRXJyb3IiLCAiX3RoaXMkcXVlcnkiLCAiYXNzZXJ0IiwgImVycm9yZm9ybWF0IiwgInVzZWxhbmciLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgInNldFN0YXR1c0VsZW1lbnQiLCAic3RhdGVsZW0iLCAiZm9ybWF0dmVyc2lvbiIsICJlcnJvciIsICJhY3Rpb24iLCAidGFncyIsICJtb3JlYml0c1dpa2lDaGFuZ2VUYWciLCAicGFyZW50IiwgInJlc3BvbnNlIiwgInJlc3BvbnNlWE1MIiwgInN0YXR1c1RleHQiLCAiZXJyb3JDb2RlIiwgImVycm9yVGV4dCIsICJiYWR0b2tlblJldHJ5IiwgInNldFBhcmVudCIsICJwb3N0IiwgImNhbGxlckFqYXhQYXJhbWV0ZXJzIiwgInF1ZXJ5U3RyaW5nQXJyIiwgIl9pNSIsICJfT2JqZWN0JGVudHJpZXMyIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJxdWVyeVN0cmluZyIsICJhamF4cGFyYW1zIiwgImNvbnRleHQiLCAidXJsIiwgIndpa2lTY3JpcHQiLCAiZGF0YVR5cGUiLCAiaGVhZGVycyIsICJtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQiLCAiYWpheCIsICJ0aGVuIiwgIm9uQVBJc3VjY2VzcyIsICJlcnJvcnMiLCAiY29kZSIsICJodG1sIiwgImVxIiwgImF0dHIiLCAicmV0dXJuRXJyb3IiLCAiY2FsbCIsICJpbmZvIiwgIkRlZmVycmVkIiwgInJlc29sdmVXaXRoIiwgIm9uQVBJZmFpbHVyZSIsICJlcnJvclRocm93biIsICJnZXRUb2tlbiIsICJ0b2tlbiIsICJyZWplY3RXaXRoIiwgImdldFN0YXR1c0VsZW1lbnQiLCAiZ2V0RXJyb3JDb2RlIiwgImdldEVycm9yVGV4dCIsICJnZXRYTUwiLCAiZ2V0UmVzcG9uc2UiLCAiZ2V0Q2FjaGVkSnNvbiIsICJwcm9wIiwgInRpdGxlcyIsICJydnNsb3RzIiwgInJ2cHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJhcGlvYmoiLCAidW5saW5rIiwgIndpa2l0ZXh0IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgIkpTT04iLCAicGFyc2UiLCAic2V0QXBpVXNlckFnZW50IiwgInVhIiwgInRva2VuQXBpIiwgIm1ldGEiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlIiwgImN0eCIsICJwYWdlRXhpc3RzIiwgImVkaXRTdW1tYXJ5IiwgImNoYW5nZVRhZ3MiLCAidGVzdEFjdGlvbnMiLCAiY2FsbGJhY2tQYXJhbWV0ZXJzIiwgInBhZ2VUZXh0IiwgImVkaXRNb2RlIiwgImFwcGVuZFRleHQiLCAicHJlcGVuZFRleHQiLCAibmV3U2VjdGlvblRleHQiLCAibmV3U2VjdGlvblRpdGxlIiwgImNyZWF0ZU9wdGlvbiIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJwYWdlU2VjdGlvbiIsICJtYXhDb25mbGljdFJldHJpZXMiLCAibWF4UmV0cmllcyIsICJmb2xsb3dDcm9zc05zUmVkaXJlY3QiLCAid2F0Y2hsaXN0T3B0aW9uIiwgIndhdGNobGlzdEV4cGlyeSIsICJjcmVhdG9yIiwgInRpbWVzdGFtcCIsICJyZXZlcnRPbGRJRCIsICJtb3ZlRGVzdGluYXRpb24iLCAibW92ZVRhbGtQYWdlIiwgIm1vdmVTdWJwYWdlcyIsICJtb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJwcm90ZWN0RWRpdCIsICJwcm90ZWN0TW92ZSIsICJwcm90ZWN0Q3JlYXRlIiwgInByb3RlY3RDYXNjYWRlIiwgImxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJwYWdlTG9hZGVkIiwgImNzcmZUb2tlbiIsICJsb2FkVGltZSIsICJsYXN0RWRpdFRpbWUiLCAicGFnZUlEIiwgImNvbnRlbnRNb2RlbCIsICJyZXZlcnRDdXJJRCIsICJyZXZlcnRVc2VyIiwgIndhdGNoZWQiLCAiZnVsbHlQcm90ZWN0ZWQiLCAic3VwcHJlc3NQcm90ZWN0V2FybmluZyIsICJjb25mbGljdFJldHJpZXMiLCAicmV0cmllcyIsICJvbkxvYWRTdWNjZXNzIiwgIm9uTG9hZEZhaWx1cmUiLCAib25TYXZlU3VjY2VzcyIsICJvblNhdmVGYWlsdXJlIiwgIm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgIm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIiwgIm9uTW92ZVN1Y2Nlc3MiLCAib25Nb3ZlRmFpbHVyZSIsICJvbkRlbGV0ZVN1Y2Nlc3MiLCAib25EZWxldGVGYWlsdXJlIiwgIm9uVW5kZWxldGVTdWNjZXNzIiwgIm9uVW5kZWxldGVGYWlsdXJlIiwgIm9uUHJvdGVjdFN1Y2Nlc3MiLCAib25Qcm90ZWN0RmFpbHVyZSIsICJsb2FkUXVlcnkiLCAibG9hZEFwaSIsICJzYXZlQXBpIiwgImxvb2t1cENyZWF0aW9uQXBpIiwgIm1vdmVBcGkiLCAibW92ZVByb2Nlc3NBcGkiLCAicGF0cm9sQXBpIiwgInBhdHJvbFByb2Nlc3NBcGkiLCAiZGVsZXRlQXBpIiwgImRlbGV0ZVByb2Nlc3NBcGkiLCAidW5kZWxldGVBcGkiLCAidW5kZWxldGVQcm9jZXNzQXBpIiwgInByb3RlY3RBcGkiLCAicHJvdGVjdFByb2Nlc3NBcGkiLCAiZW1wdHlGdW5jdGlvbiIsICJsb2FkIiwgIm9uRmFpbHVyZSIsICJpbnByb3AiLCAiaW50ZXN0YWN0aW9ucyIsICJjdXJ0aW1lc3RhbXAiLCAicnZsaW1pdCIsICJydnN0YXJ0aWQiLCAicmVkaXJlY3RzIiwgInJ2c2VjdGlvbiIsICJmbkxvYWRTdWNjZXNzIiwgInNhdmUiLCAiY2FuVXNlTXdVc2VyVG9rZW4iLCAiZm5DYW5Vc2VNd1VzZXJUb2tlbiIsICJjb25maXJtIiwgInN1bW1hcnkiLCAidXNlciIsICJ3YXRjaGxpc3QiLCAiZm5BcHBseVdhdGNobGlzdEV4cGlyeSIsICJ3YXRjaGxpc3RleHBpcnkiLCAic2VjdGlvbiIsICJtaW5vciIsICJub3RtaW5vciIsICJib3QiLCAiYXBwZW5kdGV4dCIsICJwcmVwZW5kdGV4dCIsICJzZWN0aW9udGl0bGUiLCAidW5kbyIsICJ1bmRvYWZ0ZXIiLCAiYmFzZXRpbWVzdGFtcCIsICJzdGFydHRpbWVzdGFtcCIsICJmblNhdmVTdWNjZXNzIiwgImZuU2F2ZUVycm9yIiwgImZuQXV0b1NhdmUiLCAicHJlcGVuZCIsICJuZXdTZWN0aW9uIiwgImdldFBhZ2VOYW1lIiwgImdldFBhZ2VUZXh0IiwgInNldFBhZ2VUZXh0IiwgInNldEFwcGVuZFRleHQiLCAic2V0UHJlcGVuZFRleHQiLCAic2V0TmV3U2VjdGlvblRleHQiLCAic2V0TmV3U2VjdGlvblRpdGxlIiwgInNldEVkaXRTdW1tYXJ5IiwgInNldENoYW5nZVRhZ3MiLCAic2V0Q3JlYXRlT3B0aW9uIiwgInNldE1pbm9yRWRpdCIsICJzZXRCb3RFZGl0IiwgInNldFBhZ2VTZWN0aW9uIiwgInNldE1heENvbmZsaWN0UmV0cmllcyIsICJzZXRNYXhSZXRyaWVzIiwgInNldFdhdGNobGlzdCIsICJzZXRXYXRjaGxpc3RFeHBpcnkiLCAic2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzIiwgInNldEZvbGxvd1JlZGlyZWN0IiwgInNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJmbGFnIiwgInNldE1vdmVEZXN0aW5hdGlvbiIsICJkZXN0aW5hdGlvbiIsICJzZXRNb3ZlVGFsa1BhZ2UiLCAic2V0TW92ZVN1YnBhZ2VzIiwgInNldE1vdmVTdXBwcmVzc1JlZGlyZWN0IiwgInNldEVkaXRQcm90ZWN0aW9uIiwgInNldE1vdmVQcm90ZWN0aW9uIiwgInNldENyZWF0ZVByb3RlY3Rpb24iLCAic2V0Q2FzY2FkaW5nUHJvdGVjdGlvbiIsICJzZXRPbGRJRCIsICJvbGRJRCIsICJnZXRDdXJyZW50SUQiLCAiZ2V0UmV2aXNpb25Vc2VyIiwgImdldExhc3RFZGl0VGltZSIsICJzZXRDYWxsYmFja1BhcmFtZXRlcnMiLCAiZ2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImV4aXN0cyIsICJnZXRQYWdlSUQiLCAiZ2V0Q29udGVudE1vZGVsIiwgImdldFdhdGNoZWQiLCAiZ2V0TG9hZFRpbWUiLCAiZ2V0Q3JlYXRvciIsICJnZXRDcmVhdGlvblRpbWVzdGFtcCIsICJjYW5FZGl0IiwgImxvb2t1cENyZWF0aW9uIiwgInJ2ZGlyIiwgImZuTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgInJldmVydCIsICJtb3ZlIiwgImZuUHJlZmxpZ2h0Q2hlY2tzIiwgImZuUHJvY2Vzc01vdmUiLCAiZm5OZWVkVG9rZW5JbmZvUXVlcnkiLCAicGF0cm9sIiwgIiRib2R5IiwgInBhdHJvbGhyZWYiLCAicmNpZCIsICJnZXRQYXJhbVZhbHVlIiwgImZuUHJvY2Vzc1BhdHJvbCIsICJwYXRyb2xRdWVyeSIsICJyY3Byb3AiLCAicmN0aXRsZSIsICJyY2xpbWl0IiwgImRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzRGVsZXRlIiwgInVuZGVsZXRlUGFnZSIsICJmblByb2Nlc3NVbmRlbGV0ZSIsICJwcm90ZWN0IiwgImZuUHJvY2Vzc1Byb3RlY3QiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgImVkaXRSZXN0cmljdGlvbiIsICJwYWdlb2JqIiwgImZuQ2hlY2tQYWdlTmFtZSIsICJyZXYiLCAibWlzc2luZyIsICJwYWdlaWQiLCAiY29udGVudG1vZGVsIiwgImVkaXRQcm90IiwgInByb3RlY3Rpb24iLCAicHIiLCAicG9wIiwgImxhc3RyZXZpZCIsICJ0ZXN0YWN0aW9ucyIsICJhY3Rpb25zIiwgIl9pNiIsICJfT2JqZWN0JGtleXMiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJpbnZhbGlkIiwgInJlc29sdmVkTmFtZSIsICJvcmlnTnMiLCAibmFtZXNwYWNlIiwgIm5ld05zIiwgIm5ld0V4cGlyeSIsICJyZWwiLCAiZWRpdCIsICJsaW5rIiwgImNhcHRjaGEiLCAicHVyZ2VRdWVyeSIsICJwdXJnZUFwaSIsICJzbGVlcCIsICJlcnJvckRhdGEiLCAiYWJ1c2VmaWx0ZXIiLCAiZGVzY3JpcHRpb24iLCAic3BhbSIsICJzcGFtYmxhY2tsaXN0IiwgIm1hdGNoZXMiLCAiaXNUZXh0UmVkaXJlY3QiLCAic29tZSIsICJ0YWciLCAiZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicmV2cyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJmblByb2Nlc3NDaGVja3MiLCAiYWN0aW9uTWlzc2luZyIsICJwcm90ZWN0TWlzc2luZyIsICJzYWx0TWlzc2luZyIsICJlZGl0cHJvdCIsICJwYWdlVGl0bGUiLCAidG8iLCAibW92ZXRhbGsiLCAibW92ZXN1YnBhZ2VzIiwgIm5vcmVkaXJlY3QiLCAicmVjZW50Y2hhbmdlcyIsICJ1bnBhdHJvbGxlZCIsICJwYXRyb2xTdGF0IiwgImZuUHJvY2Vzc0RlbGV0ZUVycm9yIiwgImZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IiLCAicHJzIiwgIm1vdmVwcm90IiwgImNyZWF0ZXByb3QiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAic291cmNlIiwgImNhc2NhZGUiLCAicHJvdGVjdGlvbnMiLCAiZXhwaXJ5cyIsICJtaWxsaXNlY29uZHMiLCAiZGVmZXJyZWQiLCAicmVzb2x2ZSIsICJwcmV2aWV3IiwgInByZXZpZXdib3giLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJiZWdpblJlbmRlciIsICJzZWN0aW9uVGl0bGUiLCAic2hvdyIsICJzdGF0dXNzcGFuIiwgImluaXQiLCAicHN0IiwgImRpc2FibGVsaW1pdHJlcG9ydCIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAicmVuZGVyQXBpIiwgImZuUmVuZGVyU3VjY2VzcyIsICJpbm5lckhUTUwiLCAibG9hZGVyIiwgIm1vZHVsZXN0eWxlcyIsICJtb2R1bGVzIiwgImNsb3NlUHJldmlldyIsICJlbXB0eSIsICJwYXJzZVRlbXBsYXRlIiwgImNvdW50IiwgInVubmFtZWQiLCAiZXF1YWxzIiwgInBhcmFtZXRlcnMiLCAia2V5IiwgImZpbmRQYXJhbSIsICJmaW5hbCIsICJ0ZXN0MyIsICJ0ZXN0MiIsICJjaGFyQXQiLCAicmVtb3ZlTGluayIsICJsaW5rVGFyZ2V0IiwgIm13VGl0bGUiLCAibmV3RnJvbVRleHQiLCAibmFtZXNwYWNlSUQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiZ2V0TWFpblRleHQiLCAibGlua1JlZ2V4U3RyaW5nIiwgImlzRmlsZU9yQ2F0ZWdvcnkiLCAiY29sb24iLCAic2ltcGxlTGlua1JlZ2V4IiwgInBpcGVkTGlua1JlZ2V4IiwgImNvbW1lbnRPdXRJbWFnZSIsICJpbWFnZSIsICJpbWFnZVJlZ2V4U3RyaW5nIiwgImxpbmtzUmVnZXgiLCAiYWxsTGlua3MiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJhbGxMaW5rIiwgImdhbGxlcnlJbWFnZVJlZ2V4IiwgImZyZWVJbWFnZVJlZ2V4IiwgImFkZFRvSW1hZ2VDb21tZW50IiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAiZ2FsbGVyeVJlZ2V4IiwgIm5ld3RleHQiLCAicmVtb3ZlVGVtcGxhdGUiLCAidGVtcGxhdGUiLCAidGVtcGxhdGVSZWdleFN0cmluZyIsICJhbGxUZW1wbGF0ZXMiLCAiX2l0ZXJhdG9yMTIiLCAiX3N0ZXAxMiIsICJhbGxUZW1wbGF0ZSIsICJpbnNlcnRBZnRlclRlbXBsYXRlcyIsICJmbGFncyIsICJwcmVSZWdleCIsICJnZXRUZXh0IiwgInVzZXJzcGFjZUxvZ2dlciIsICJsb2dQYWdlTmFtZSIsICJpbml0aWFsVGV4dCIsICJoZWFkZXJMZXZlbCIsICJsb2dUZXh0IiwgInN1bW1hcnlUZXh0IiwgImRlZiIsICJyZWplY3QiLCAic3RhdCIsICJ0ZXh0UmF3IiwgImdlbmVyYXRlIiwgInVwZGF0ZSIsICJFbGVtZW50IiwgImhhc0NoaWxkTm9kZXMiLCAiZXJyb3JFdmVudCIsICJoYW5kbGVyIiwgInN0YXRSYXciLCAibGlua2VkIiwgInByaW50VXNlclRleHQiLCAiY29tbWVudHMiLCAibWVzc2FnZSIsICJwIiwgImRpdiIsICJtYXJnaW5Ub3AiLCAid2hpdGVTcGFjZSIsICJodG1sTm9kZSIsICJjb2xvciIsICJqUXVlcnlTZWxlY3RvciIsICJqUXVlcnlDb250ZXh0IiwgImxhc3RDaGVja2JveCIsICJjbGlja0hhbmRsZXIiLCAiY2xpY2tIYW5kbGVyMiIsICJ0aGlzQ2IiLCAic2hpZnRLZXkiLCAiY2JzIiwgImluZGV4IiwgImxhc3RJbmRleCIsICJlbmRTdGF0ZSIsICJmaW5pc2giLCAiY2xpY2siLCAib24iLCAiYmF0Y2hPcGVyYXRpb24iLCAicGFnZUxpc3QiLCAiY2h1bmtTaXplIiwgInByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIiwgIndvcmtlciIsICJwb3N0RmluaXNoIiwgImNvdW50U3RhcnRlZCIsICJjb3VudEZpbmlzaGVkIiwgImNvdW50RmluaXNoZWRTdWNjZXNzIiwgImN1cnJlbnRDaHVua0luZGV4IiwgInBhZ2VDaHVua3MiLCAicnVubmluZyIsICJzZXRQYWdlTGlzdCIsICJzZXRPcHRpb24iLCAib3B0aW9uTmFtZSIsICJvcHRpb25WYWx1ZSIsICJydW4iLCAidG90YWwiLCAiZm5TdGFydE5ld0NodW5rIiwgIndvcmtlclN1Y2Nlc3MiLCAiYXJnIiwgImZuRG9uZU9uZSIsICJ3b3JrZXJGYWlsdXJlIiwgInRoaXNQcm94eSIsICJfaXRlcmF0b3IxMyIsICJfc3RlcDEzIiwgInByb2dyZXNzIiwgInJvdW5kIiwgImZsb29yIiwgInN0YXR1c1N0cmluZyIsICJzaW1wbGVXaW5kb3ciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRpYWxvZyIsICJhdXRvT3BlbiIsICJidXR0b25zIiwgIlBsYWNlaG9sZGVyIGJ1dHRvbiIsICJkaWFsb2dDbGFzcyIsICJpbm5lcldpZHRoIiwgImNsb3NlIiwgInJlc2l6ZVN0YXJ0IiwgInNjcm9sbGJveCIsICJtYXhIZWlnaHQiLCAicmVzaXplU3RvcCIsICJyZXNpemUiLCAiJHdpZGdldCIsICJlYWNoIiwgImJ1dHRvbnNwYW4iLCAibGlua3NzcGFuIiwgInJlc2l6YWJsZSIsICJoYXNGb290ZXJMaW5rcyIsICJzY3JpcHROYW1lIiwgInByZXZlbnREZWZhdWx0IiwgImRpc3BsYXkiLCAic2NyaXB0bmFtZXNwYW4iLCAic2V0dXBUb29sdGlwcyIsICJwZyIsICJkaWZmIiwgInJhblNldHVwVG9vbHRpcHNBbHJlYWR5IiwgInNldEhlaWdodCIsICJzZXRUaXRsZSIsICJzZXRTY3JpcHROYW1lIiwgInNldFdpZHRoIiwgImdldENvbXB1dGVkU3R5bGUiLCAiaW5uZXJIZWlnaHQiLCAic2V0Q29udGVudCIsICJwdXJnZUNvbnRlbnQiLCAiYWRkQ29udGVudCIsICJidXR0b24iLCAiYWRkRm9vdGVyTGluayIsICJ3aWtpUGFnZSIsICJwcmVwIiwgIiRmb290ZXJsaW5rcyIsICJidWxsZXQiLCAic2V0TW9kYWxpdHkiLCAibW9kYWwiLCAic2V0QnV0dG9uc0VuYWJsZWQiLCAiZW5hYmxlZCIsICJqUXVlcnkiXQp9Cg==
