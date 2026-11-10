/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vector.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-vector}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 *
 * @source {@link https://www.qiuwenbaike.cn/wiki/File:Chinese_conversion_black.svg}
 * @author Chiefwei
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-3.0
 *
 * @source {@link https://www.qiuwenbaike.cn/index.php?title=File:Toolbaricon_bolditalic_A.png}
 * @author Inductiveload
 * @license CC-BY-3.0 {@link https://creativecommons.org/licenses/by/3.0/deed.zh}
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

// dist/Edittools-vector/Edittools-vector.js
//! src/Edittools-vector/images/Toolbaricon_bolditalic_A.png
var Toolbaricon_bolditalic_A_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9oJCAQlOp4jfv4AAAINSURBVDjL7ZW9a1NhFMZ/703uh/eGSCAk9N4ktIWWECyEdigUiTR/QAfBJUsmcXFzcOgkgqCjq5NL/wUnK0QrXRQMVITi5VpKpZFgAvlouC/3dbFQJdUY0anPdjjv+XHe5xkOXOhPtba29u/guVzufq1WU/V6Xbmu++lXb7VJoZ7nJfL5/N1Op6OklEgptb8Cl0olAEzTfOr7vt5sNmm321iW5QBianAqlWJmZuZKNpu93m63N4HPSilisVjCMIzpwTs7O6TT6S3f96WU8kEYhj0pJYAupUxODc7n83XTNJeOj4/vAIRh+DWKIuLxOFEUXZ0a7HnewyAIPgKPT8EAjuMArJ83F//Ntk90Xc+6rvu2Wq3eA2g2m55hGCQSCUzTrIxGo7GzY81XSpFMJrXl5eXh/v6+YZomURShlCKKIhzHUbOzs2J3d1d1u11t4o2FECwsLGy3Wi3j6OioDLw7067Oz88/tywLy7JEt9u1gcFEHhcKhaW5ublrQRBs/wQFeD8YDFBKYds2wOVKpTJZeJlM5pWmaQghbgOsrq6ebX8RQiCEwLZtUqmU12g0WFxc/IERO1vour65sbHxYjgcXur3+5TL5VsnJyeZvb29Z4BWLBaDlZWVR/1+Xzs4OCAMQ4rF4s1erycPDw9fnhueEGJdKeWe+qyUAngDfPj+uxtjchHAa8C/uAH/V98AGqO9LSroGQYAAAAASUVORK5CYII=";
//! src/Edittools-vector/images/Chinese_conversion.png
var Chinese_conversion_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAEFklEQVRIia2VXYhUZRjHf887p3XWVdcKStu0zTaji2xNWUi9METrQjDIkazds+OZ/UroRgi8ylkiVCzCPlTW3XFmFiXSUCpQFCWJMFj3I5IiCDPxQszvtWHdOfM+XcyZj/Vj26L/1fue53n////7P4fnQIDm5tjiaDQa5n+GADSua11krJ5EuCzK5kzmxmfhqupVBnn9nwickO3o6em5et86gFH9CMEBZqiwvbKq+k0RjqlqZDxyhb3jkRcFwhVmxcio3QhsACoE+kBGQMfnD+mWwsaNxjxU1gIIdlsqlTiaX5ehyfMWijWd4QoTuXbt2u3KKdOPodqg8HNvsrvhXiputOVjYBFQA8wItM+BXBHVTQLged7URCIxfNfh5th3iCwBrOacmb29uy6NqbutczH6C2DuJS5Ks3Hdttm+DV1woy2HXK9tydgOOR6sjDH+K3cxGLtElLdEaUf0cKmgOxRdk3X0pIOxO4FpwCqsXeU2txxARzvS6fQVgxyy6CYANfoakC6576gBf6cKFXnOUtqK6etN7t4PYETtduCHkmueDYfDNwGSyd1DwK8BwUrXbZ1bcplrAAZKpPQJsl+Q/SH0XPGSqVTiaDrZ/aKoNKJcxpiOrq6ubCklTRV6MWzIu3cfxuhmYE7JF7UWXWDRBTnocaMtx/OHAqRSu/fmplU+5eCfLY9Zc9kuIJPf6OK8VMXbwCNAVVnrZIEHBWoF5oDOGiMAEBrOrPatOdUYi9UVnqXT6SsqdAcuP4msXz8FaAfZivJVWfCHQbYC18s5iwJNTU1VIO8Bs02OY0vjcaeY9u0H4ihnRPx0ZSbbBswA3YKwtsgkrAbdAjxULlAkkdCkd4DH8m7k8LfxuF+oZbPhETPJbz//RK0/6/cLN0RkYxDZ80UR5QAip4sXUm5FIpGQAESjHbUW/wxQhXLLiP90Mpm8CNAYi9WZnHzqGBvJ5swaCeKaCAz+TJMX97sovDDhw2QyebGtra26eV1rp8nJkKr2JRKJYYSXJkpeTKYpGosI8kWwv+QYW5e18qogOwPRTEhytapOjYWXxxxGlyksDyLqRuS38rrCH06I3NcWZx/wBkhnIpEY9jzvkJ+TdxHqVOjes2fPn260NRK8xHKCcrWWO6evwInQ0NCQ/+PQwMF59S9cr6wwu/r7++3g4OBoff38syAZ36HzzMDAX/PmL5iMMIrQD1jJT8+C0BGBKUAVqt+rkSMI/YKcGjOux0Oj5z1jVJajshJYQWHUK9+okQ9E9QSlz/4n4HODsy80UYH65xY2ACmEuQH5KLDt/JOPt0+/enOqIrdFqAGqgUeBZaienvANANxoy/soaxD9EhvakU53nb+jRVzXW4qY9QhT08nuu0f8eIjH4/f8sdwH/8r8f8bfh7GPCR5C3YgAAAAASUVORK5CYII=";
//! src/Edittools-vector/Edittools-vector.ts
var import_ext_gadget = require("ext.gadget.Edittools-customizeToolbar");
(0, import_ext_gadget.customizeToolbar)(function() {
  const self = this;
  self.wikiEditor("addToToolbar", {
    section: "main",
    group: "insert",
    tools: {
      category: {
        label: "分类",
        type: "button",
        oouiIcon: "tag",
        action: {
          type: "encapsulate",
          options: {
            pre: "[[Category:",
            post: "]]"
          }
        }
      }
    }
  });
  self.wikiEditor("addToToolbar", {
    section: "advanced",
    group: "format",
    tools: {
      bolditalic: {
        label: "粗斜体",
        type: "button",
        icon: Toolbaricon_bolditalic_A_default,
        action: {
          type: "encapsulate",
          options: {
            pre: "'''''",
            periMsg: "粗斜体文字",
            post: "'''''"
          }
        }
      },
      strikethrough: {
        label: "删除线",
        type: "button",
        oouiIcon: "strikethrough",
        action: {
          type: "encapsulate",
          options: {
            pre: "<s>",
            post: "</s>"
          }
        }
      },
      underline: {
        label: "下划线",
        type: "button",
        oouiIcon: "underline",
        action: {
          type: "encapsulate",
          options: {
            pre: "<u>",
            post: "</u>"
          }
        }
      },
      quote: {
        label: "块引用",
        type: "button",
        oouiIcon: "quotes",
        action: {
          type: "encapsulate",
          options: {
            pre: "<block".concat("quote>"),
            post: "</block".concat("quote>")
          }
        }
      },
      "justify-left": {
        label: "左对齐",
        type: "button",
        oouiIcon: "alignLeft",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align:left">',
            post: "</div>"
          }
        }
      },
      "justify-center": {
        label: "居中",
        type: "button",
        oouiIcon: "alignCenter",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align: center;">',
            post: "</div>"
          }
        }
      },
      "justify-right": {
        label: "右对齐",
        type: "button",
        oouiIcon: "alignRight",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align: right;">',
            post: "</div>"
          }
        }
      },
      source: {
        label: "源代码",
        type: "button",
        oouiIcon: "markup",
        action: {
          type: "encapsulate",
          options: {
            pre: '<syntaxhighlight lang="text">',
            post: "</syntaxhighlight>"
          }
        }
      }
    }
  });
  self.wikiEditor("addToToolbar", {
    section: "advanced",
    group: "insert",
    tools: {
      math: {
        label: "数学公式",
        type: "button",
        oouiIcon: "mathematics",
        action: {
          type: "encapsulate",
          options: {
            pre: "<math>",
            periMsg: "插入数学公式",
            post: "</math>"
          }
        }
      },
      hidden: {
        label: "注释或隐藏文字",
        type: "button",
        oouiIcon: "notice",
        action: {
          type: "encapsulate",
          options: {
            pre: "<!-- ",
            post: " -->"
          }
        }
      },
      hline: {
        label: "水平线",
        type: "button",
        oouiIcon: "subtract",
        action: {
          type: "encapsulate",
          options: {
            pre: "----",
            ownline: true
          }
        }
      },
      "hans-hant": {
        label: "繁简转换",
        type: "button",
        icon: Chinese_conversion_default,
        action: {
          type: "encapsulate",
          options: {
            pre: "-{",
            periMsg: "转换文字",
            post: "}-"
          }
        }
      },
      references: {
        label: "参考文献区",
        type: "button",
        oouiIcon: "references",
        action: {
          type: "encapsulate",
          options: {
            pre: "\n== 参考文献 ==\n{{reflist}}\n"
          }
        }
      }
    }
  });
});

})();

/* </nowiki> */

