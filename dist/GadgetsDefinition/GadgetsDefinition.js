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
//! src/GadgetsDefinition/modules/util/generateGadgetId.ts
var generateGadgetId = (gadgetName) => {
  return `Gadget-${gadgetName}`;
};
//! src/GadgetsDefinition/GadgetsDefinition.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/GadgetsDefinition/modules/constant.ts
var REXEX_GADGET_NAME = /^(\s*)([\w_-]+)\s*/;
//! src/GadgetsDefinition/modules/util/matchGadgetName.ts
var matchGadgetName = (innerHTML) => {
  const regExpExecArray = REXEX_GADGET_NAME.exec(innerHTML);
  return (regExpExecArray ? regExpExecArray[2] : null) ?? "";
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
  return makeWikilink(`MediaWiki:Gadget-${sourcePage}`, sourcePage);
};
var linkGadgetAnchor = (gadgetName, text) => {
  return makeLink(`#${generateGadgetId(gadgetName)}`, text || gadgetName);
};
var processGadgetDefinition = (innerHTML) => {
  return innerHTML.replace(REXEX_GADGET_NAME, (_wholeMatch, whitespace, gadgetName) => {
    return `${whitespace + linkGadgetSource(gadgetName)} `;
  }).replace(/([\w_\-.]+\.(?:css|js(?:on)?))/g, linkGadgetSource).replace(/\s*\|\s*/g, " | ").replace(/([a-z]+)\s*=\s*(.+?)(?=\s*[|\]])/g, (_wholeMatch, key, value) => {
    let splitValue = value.split(/\s*,\s*/g);
    switch (key) {
      case "dependencies":
        splitValue = splitValue.map((dependency) => {
          const gadgetName = /^ext\.gadget\.(.+)$/.exec(dependency);
          if (gadgetName) {
            const _gadgetName = gadgetName[1] ?? "";
            return linkGadgetAnchor(_gadgetName, dependency);
          }
          return makeWikilink(`Special:GoToInterwiki/mw:ResourceLoader/Core_modules#${dependency}`, dependency);
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
    return `${key} = ${splitValue.join(", ")}`;
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
  for (const element of $parserOutput.find("li")) {
    const gadgetName = matchGadgetName(element.innerHTML);
    if (gadgetName) {
      element.id = generateGadgetId(gadgetName);
    }
    element.innerHTML = processGadgetDefinition(element.innerHTML);
  }
  for (const element of $parserOutput.find("pre")) {
    element.innerHTML = element.innerHTML.replace(/[^\n]+/g, processGadgetDefinition);
  }
});

})();

/* </nowiki> */

