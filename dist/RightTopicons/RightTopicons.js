/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/RightTopicons>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/RightTopicons>
 * @author AwAjie <139576615+ajdgg@users.noreply.github.com>
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

// dist/RightTopicons/RightTopicons.js
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
//! src/RightTopicons/modules/PermissionData.ts
var LIBdictionary = {
  steward: {
    id: "1",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/2/21/%E8%A3%81%E5%86%B3%E5%A7%94%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:STEWARD"
  },
  sysop: {
    id: "2",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/3/3e/%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:SYSOP"
  },
  templateeditor: {
    id: "3",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/4/47/%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%BE%91%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:TE"
  },
  "interface-admin": {
    id: "4",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/e/ea/%E7%95%8C%E9%9D%A2%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:IA"
  },
  patroller: {
    id: "5",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/6/67/%E5%B7%A1%E6%9F%A5%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:PATROLLER"
  },
  suppress: {
    id: "6",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/3/3d/%E7%9B%91%E7%9D%A3%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:SU"
  },
  autoreviewer: {
    id: "8",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/a/ac/%E5%B7%A1%E6%9F%A5%E8%B1%81%E5%85%8D%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:AUTOREV"
  },
  "massmessage-sender": {
    id: "9",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/3/37/%E5%A4%A7%E9%87%8F%E4%BF%A1%E6%81%AF%E5%8F%91%E9%80%81%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:MMS"
  },
  senioreditor: {
    id: "10",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/5/52/%E8%B5%84%E6%B7%B1%E7%BC%96%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:SE"
  },
  transwiki: {
    id: "11",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/4/45/%E5%AF%BC%E5%85%A5%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://www.qiuwenbaike.cn/wiki/QW:IMPORT"
  }
};
//! src/RightTopicons/RightTopicons.ts
$(() => {
  const WikiURLName = window.location.pathname;
  const matchResult = /^\/wiki\/User:[^/]*$/.test(WikiURLName);
  if (!matchResult) {
    return;
  }
  const [_, userNameMatch] = WikiURLName.match(/User:(.*)$/) || [];
  const UserMessage = "".concat(mw.config.get("wgServer"), "/api.php?action=query&list=users&usprop=groups&format=json&ususers=").concat(userNameMatch);
  const createVirtualLinkImg = (href, aimgsrc) => {
    return {
      tag: "a",
      props: {
        href,
        style: "display: inline-block;"
      },
      children: [{
        tag: "img",
        props: {
          src: aimgsrc,
          width: "42",
          height: "42",
          style: "width: 39px; margin: 0 3px;"
        }
      }]
    };
  };
  const renderVirtualDOM = (virtualDOM, container) => {
    if (!(container instanceof jQuery)) {
      container = $(container);
    }
    const createRealNode = (virtualNode) => {
      const {
        tag,
        props,
        children
      } = virtualNode;
      const realNode = $("<".concat(tag, ">"));
      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        const propName = _Object$keys[_i];
        realNode.attr(propName, String(props[propName]));
      }
      if (children) {
        var _iterator = _createForOfIteratorHelper(children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const childVirtualNode = _step.value;
            const childRealNode = createRealNode(childVirtualNode);
            realNode.append(childRealNode);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return realNode;
    };
    const realNodes = virtualDOM.map((virtualNode) => {
      const realNode = createRealNode(virtualNode);
      return realNode;
    });
    var _iterator2 = _createForOfIteratorHelper(realNodes), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const node = _step2.value;
        container.append(node);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  const ArrayDataSort = (dataArray) => {
    dataArray.sort((a, b) => {
      return a.id - b.id;
    });
    if (dataArray.length > 3) {
      return dataArray.slice(0, 3);
    }
    return dataArray;
  };
  const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      if (!UserMessage) {
        reject(new Error("UserMessage is not defined"));
      }
      $.get(UserMessage, (data) => {
        const userData = {
          groups: data.query.users[0].groups
        };
        console.log(userData);
        resolve(userData);
      }, "json").then(() => {
      }).catch(reject);
    });
  };
  fetchUserData().then((userData) => {
    if (!userData || !Array.isArray(userData.groups)) {
      console.error(new Error("Invalid userData.groups: expected an array but received none or a non-array."));
      return;
    }
    const matchedGroups = userData.groups.filter((group) => {
      return typeof group === "string" && Object.hasOwn(LIBdictionary, group);
    }).map((group) => {
      return LIBdictionary[group];
    });
    const firstThreeItems = ArrayDataSort(matchedGroups);
    const virtualDOM = firstThreeItems.map((imgData) => {
      return imgData !== null && imgData !== void 0 && imgData.src && imgData !== null && imgData !== void 0 && imgData.aimgsrc ? createVirtualLinkImg(imgData.src, imgData.aimgsrc) : null;
    });
    const $body = $("body");
    const $dommountpoint = $body.find("#content header.mw-body-header .page-heading .mw-indicators");
    renderVirtualDOM(virtualDOM, $dommountpoint);
  }).catch((error) => {
    console.error("最终请求失败，不再重试:", error);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JpZ2h0VG9waWNvbnMvbW9kdWxlcy9QZXJtaXNzaW9uRGF0YS50cyIsICJzcmMvUmlnaHRUb3BpY29ucy9SaWdodFRvcGljb25zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIExJQkRpY3Rpb25hcnlFbnRyeSA9IHtcblx0aWQ6IHN0cmluZztcblx0YWltZ3NyYzogc3RyaW5nO1xuXHRzcmM6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBMSUJkaWN0aW9uYXJ5OiBSZWNvcmQ8c3RyaW5nLCBMSUJEaWN0aW9uYXJ5RW50cnk+ID0ge1xuXHRzdGV3YXJkOiB7XG5cdFx0aWQ6ICcxJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvMi8yMS8lRTglQTMlODElRTUlODYlQjMlRTUlQTclOTQlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOlNURVdBUkQnLFxuXHR9LFxuXHRzeXNvcDoge1xuXHRcdGlkOiAnMicsXG5cdFx0YWltZ3NyYzpcblx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poLzMvM2UvJUU3JUFFJUExJUU3JTkwJTg2JUU1JTkxJTk4JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2ZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9RVzpTWVNPUCcsXG5cdH0sXG5cdHRlbXBsYXRlZWRpdG9yOiB7XG5cdFx0aWQ6ICczJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvNC80Ny8lRTYlQTglQTElRTYlOUQlQkYlRTclQkMlOTYlRTglQkUlOTElRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOlRFJyxcblx0fSxcblx0J2ludGVyZmFjZS1hZG1pbic6IHtcblx0XHRpZDogJzQnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9lL2VhLyVFNyU5NSU4QyVFOSU5RCVBMiVFNyVBRSVBMSVFNyU5MCU4NiVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6SUEnLFxuXHR9LFxuXHRwYXRyb2xsZXI6IHtcblx0XHRpZDogJzUnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC82LzY3LyVFNSVCNyVBMSVFNiU5RiVBNSVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6UEFUUk9MTEVSJyxcblx0fSxcblx0c3VwcHJlc3M6IHtcblx0XHRpZDogJzYnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC8zLzNkLyVFNyU5QiU5MSVFNyU5RCVBMyVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6U1UnLFxuXHR9LFxuXHRhdXRvcmV2aWV3ZXI6IHtcblx0XHRpZDogJzgnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9hL2FjLyVFNSVCNyVBMSVFNiU5RiVBNSVFOCVCMSU4MSVFNSU4NSU4RCVFOCU4MCU4NSVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6QVVUT1JFVicsXG5cdH0sXG5cdCdtYXNzbWVzc2FnZS1zZW5kZXInOiB7XG5cdFx0aWQ6ICc5Jyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvMy8zNy8lRTUlQTQlQTclRTklODclOEYlRTQlQkYlQTElRTYlODElQUYlRTUlOEYlOTElRTklODAlODElRTglODAlODUlRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOk1NUycsXG5cdH0sXG5cdHNlbmlvcmVkaXRvcjoge1xuXHRcdGlkOiAnMTAnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC81LzUyLyVFOCVCNSU4NCVFNiVCNyVCMSVFNyVCQyU5NiVFOCU4MCU4NSVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6U0UnLFxuXHR9LFxuXHR0cmFuc3dpa2k6IHtcblx0XHRpZDogJzExJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvNC80NS8lRTUlQUYlQkMlRTUlODUlQTUlRTglODAlODUlRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOklNUE9SVCcsXG5cdH0sXG59O1xuIiwgImltcG9ydCB7TElCZGljdGlvbmFyeX0gZnJvbSAnLi9tb2R1bGVzL1Blcm1pc3Npb25EYXRhJztcblxuJCgoKSA9PiB7XG5cdGNvbnN0IFdpa2lVUkxOYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXHRjb25zdCBtYXRjaFJlc3VsdCA9IC9eXFwvd2lraVxcL1VzZXI6W14vXSokLy50ZXN0KFdpa2lVUkxOYW1lKTtcblx0aWYgKCFtYXRjaFJlc3VsdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBbXywgdXNlck5hbWVNYXRjaF0gPSBXaWtpVVJMTmFtZS5tYXRjaCgvVXNlcjooLiopJC8pIHx8IFtdO1xuXHRjb25zdCBVc2VyTWVzc2FnZSA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2VydmVyJyl9L2FwaS5waHA/YWN0aW9uPXF1ZXJ5Jmxpc3Q9dXNlcnMmdXNwcm9wPWdyb3VwcyZmb3JtYXQ9anNvbiZ1c3VzZXJzPSR7dXNlck5hbWVNYXRjaH1gO1xuXG5cdHR5cGUgVmlydHVhbERPTU5vZGUgPSB7XG5cdFx0dGFnOiBzdHJpbmc7XG5cdFx0cHJvcHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xuXHRcdGNoaWxkcmVuPzogVmlydHVhbERPTU5vZGVbXTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGVWaXJ0dWFsTGlua0ltZyA9IChocmVmOiBzdHJpbmcsIGFpbWdzcmM6IHN0cmluZyk6IG9iamVjdCA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhZzogJ2EnLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0aHJlZixcblx0XHRcdFx0c3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Jyxcblx0XHRcdH0sXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFnOiAnaW1nJyxcblx0XHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdFx0c3JjOiBhaW1nc3JjLFxuXHRcdFx0XHRcdFx0d2lkdGg6ICc0MicsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc0MicsXG5cdFx0XHRcdFx0XHRzdHlsZTogJ3dpZHRoOiAzOXB4OyBtYXJnaW46IDAgM3B4OycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fTtcblxuXHRjb25zdCByZW5kZXJWaXJ0dWFsRE9NID0gKHZpcnR1YWxET006IFZpcnR1YWxET01Ob2RlW10sIGNvbnRhaW5lcjogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xuXHRcdGlmICghKGNvbnRhaW5lciBpbnN0YW5jZW9mIGpRdWVyeSkpIHtcblx0XHRcdGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblx0XHR9XG5cblx0XHRjb25zdCBjcmVhdGVSZWFsTm9kZSA9ICh2aXJ0dWFsTm9kZTogVmlydHVhbERPTU5vZGUpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0XHRcdGNvbnN0IHt0YWcsIHByb3BzLCBjaGlsZHJlbn0gPSB2aXJ0dWFsTm9kZTtcblx0XHRcdGNvbnN0IHJlYWxOb2RlID0gJChgPCR7dGFnfT5gKTtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMocHJvcHMpKSB7XG5cdFx0XHRcdHJlYWxOb2RlLmF0dHIocHJvcE5hbWUsIFN0cmluZyhwcm9wc1twcm9wTmFtZV0pKTtcblx0XHRcdH1cblx0XHRcdGlmIChjaGlsZHJlbikge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGNoaWxkVmlydHVhbE5vZGUgb2YgY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRjb25zdCBjaGlsZFJlYWxOb2RlID0gY3JlYXRlUmVhbE5vZGUoY2hpbGRWaXJ0dWFsTm9kZSk7XG5cdFx0XHRcdFx0cmVhbE5vZGUuYXBwZW5kKGNoaWxkUmVhbE5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVhbE5vZGU7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlYWxOb2RlcyA9IHZpcnR1YWxET00ubWFwKCh2aXJ0dWFsTm9kZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVhbE5vZGUgPSBjcmVhdGVSZWFsTm9kZSh2aXJ0dWFsTm9kZSk7XG5cdFx0XHRyZXR1cm4gcmVhbE5vZGU7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcmVhbE5vZGVzKSB7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kKG5vZGUpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQXJyYXlEYXRhU29ydCA9IDxEYXRhVHlwZSBleHRlbmRzIHtpZDogbnVtYmVyfT4oZGF0YUFycmF5OiBEYXRhVHlwZVtdKSA9PiB7XG5cdFx0ZGF0YUFycmF5LnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdHJldHVybiBhLmlkIC0gYi5pZDtcblx0XHR9KTtcblx0XHRpZiAoZGF0YUFycmF5Lmxlbmd0aCA+IDMpIHtcblx0XHRcdHJldHVybiBkYXRhQXJyYXkuc2xpY2UoMCwgMyk7XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhQXJyYXk7XG5cdH07XG5cblx0dHlwZSBVc2VyRGF0YSA9IHtcblx0XHRncm91cHM6IHN0cmluZ1tdO1xuXHR9O1xuXHRjb25zdCBmZXRjaFVzZXJEYXRhID0gKCk6IFByb21pc2U8VXNlckRhdGE+ID0+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0aWYgKCFVc2VyTWVzc2FnZSkge1xuXHRcdFx0XHRyZWplY3QobmV3IEVycm9yKCdVc2VyTWVzc2FnZSBpcyBub3QgZGVmaW5lZCcpKTtcblx0XHRcdH1cblx0XHRcdCQuZ2V0KFxuXHRcdFx0XHRVc2VyTWVzc2FnZSxcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRjb25zdCB1c2VyRGF0YTogVXNlckRhdGEgPSB7XG5cdFx0XHRcdFx0XHRncm91cHM6IGRhdGEucXVlcnkudXNlcnNbMF0uZ3JvdXBzIGFzIHN0cmluZ1tdLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codXNlckRhdGEpO1xuXHRcdFx0XHRcdHJlc29sdmUodXNlckRhdGEpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnanNvbidcblx0XHRcdClcblx0XHRcdFx0LnRoZW4oKCkgPT4ge30pXG5cdFx0XHRcdC5jYXRjaChyZWplY3QpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGZldGNoVXNlckRhdGEoKVxuXHRcdC50aGVuKCh1c2VyRGF0YTogVXNlckRhdGEpID0+IHtcblx0XHRcdGlmICghdXNlckRhdGEgfHwgIUFycmF5LmlzQXJyYXkodXNlckRhdGEuZ3JvdXBzKSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0XHRcdG5ldyBFcnJvcignSW52YWxpZCB1c2VyRGF0YS5ncm91cHM6IGV4cGVjdGVkIGFuIGFycmF5IGJ1dCByZWNlaXZlZCBub25lIG9yIGEgbm9uLWFycmF5LicpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbWF0Y2hlZEdyb3VwcyA9IHVzZXJEYXRhLmdyb3Vwc1xuXHRcdFx0XHQuZmlsdGVyKChncm91cCk6IGdyb3VwIGlzIHN0cmluZyA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBncm91cCA9PT0gJ3N0cmluZycgJiYgT2JqZWN0Lmhhc093bihMSUJkaWN0aW9uYXJ5LCBncm91cCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5tYXAoKGdyb3VwKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIExJQmRpY3Rpb25hcnlbZ3JvdXBdO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0aW50ZXJmYWNlIEltYWdlSXRlbSB7XG5cdFx0XHRcdHNyYzogc3RyaW5nO1xuXHRcdFx0XHRhaW1nc3JjOiBzdHJpbmc7XG5cdFx0XHRcdGlkOiBudW1iZXI7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmaXJzdFRocmVlSXRlbXMgPSBBcnJheURhdGFTb3J0KG1hdGNoZWRHcm91cHMgYXMgdW5rbm93biBhcyBJbWFnZUl0ZW1bXSk7XG5cdFx0XHRjb25zdCB2aXJ0dWFsRE9NID0gZmlyc3RUaHJlZUl0ZW1zLm1hcCgoaW1nRGF0YSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gaW1nRGF0YT8uc3JjICYmIGltZ0RhdGE/LmFpbWdzcmMgPyBjcmVhdGVWaXJ0dWFsTGlua0ltZyhpbWdEYXRhLnNyYywgaW1nRGF0YS5haW1nc3JjKSA6IG51bGw7XG5cdFx0XHR9KSBhcyBWaXJ0dWFsRE9NTm9kZVtdO1xuXHRcdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdFx0Y29uc3QgJGRvbW1vdW50cG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjb250ZW50IGhlYWRlci5tdy1ib2R5LWhlYWRlciAucGFnZS1oZWFkaW5nIC5tdy1pbmRpY2F0b3JzJyk7XG5cdFx0XHRyZW5kZXJWaXJ0dWFsRE9NKHZpcnR1YWxET00sICRkb21tb3VudHBvaW50KTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ+acgOe7iOivt+axguWksei0pe+8jOS4jeWGjemHjeivlTonLCBlcnJvcik7XG5cdFx0fSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNTyxJQUFNQSxnQkFBb0Q7RUFDaEVDLFNBQVM7SUFDUkMsSUFBSTtJQUNKQyxTQUNDO0lBQ0RDLEtBQUs7RUFDTjtFQUNBQyxPQUFPO0lBQ05ILElBQUk7SUFDSkMsU0FDQztJQUNEQyxLQUFLO0VBQ047RUFDQUUsZ0JBQWdCO0lBQ2ZKLElBQUk7SUFDSkMsU0FDQztJQUNEQyxLQUFLO0VBQ047RUFDQSxtQkFBbUI7SUFDbEJGLElBQUk7SUFDSkMsU0FDQztJQUNEQyxLQUFLO0VBQ047RUFDQUcsV0FBVztJQUNWTCxJQUFJO0lBQ0pD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QUEsVUFBQUEsUUFBUzVGLE9BQU80RixZQUFBLFFBQUFBLFlBQUEsVUFBQUEsUUFBUzdGLFVBQVV3QixxQkFBcUJxRSxRQUFRNUYsS0FBSzRGLFFBQVE3RixPQUFPLElBQUk7SUFDaEcsQ0FBQztBQUNELFVBQU04RixRQUFpQ3JGLEVBQUUsTUFBTTtBQUMvQyxVQUFNc0YsaUJBQXlCRCxNQUFNRSxLQUFLLDZEQUE2RDtBQUN2R2hFLHFCQUFpQkMsWUFBWThELGNBQWM7RUFDNUMsQ0FBQyxFQUNBWCxNQUFPRyxXQUFVO0FBQ2pCTixZQUFRTSxNQUFNLGdCQUFnQkEsS0FBSztFQUNwQyxDQUFDO0FBQ0gsQ0FBQzsiLAogICJuYW1lcyI6IFsiTElCZGljdGlvbmFyeSIsICJzdGV3YXJkIiwgImlkIiwgImFpbWdzcmMiLCAic3JjIiwgInN5c29wIiwgInRlbXBsYXRlZWRpdG9yIiwgInBhdHJvbGxlciIsICJzdXBwcmVzcyIsICJhdXRvcmV2aWV3ZXIiLCAic2VuaW9yZWRpdG9yIiwgInRyYW5zd2lraSIsICIkIiwgIldpa2lVUkxOYW1lIiwgIndpbmRvdyIsICJsb2NhdGlvbiIsICJwYXRobmFtZSIsICJtYXRjaFJlc3VsdCIsICJ0ZXN0IiwgIl8iLCAidXNlck5hbWVNYXRjaCIsICJtYXRjaCIsICJVc2VyTWVzc2FnZSIsICJjb25jYXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjcmVhdGVWaXJ0dWFsTGlua0ltZyIsICJocmVmIiwgInRhZyIsICJwcm9wcyIsICJzdHlsZSIsICJjaGlsZHJlbiIsICJ3aWR0aCIsICJoZWlnaHQiLCAicmVuZGVyVmlydHVhbERPTSIsICJ2aXJ0dWFsRE9NIiwgImNvbnRhaW5lciIsICJqUXVlcnkiLCAiY3JlYXRlUmVhbE5vZGUiLCAidmlydHVhbE5vZGUiLCAicmVhbE5vZGUiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJwcm9wTmFtZSIsICJhdHRyIiwgIlN0cmluZyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiY2hpbGRWaXJ0dWFsTm9kZSIsICJ2YWx1ZSIsICJjaGlsZFJlYWxOb2RlIiwgImFwcGVuZCIsICJlcnIiLCAiZSIsICJmIiwgInJlYWxOb2RlcyIsICJtYXAiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAibm9kZSIsICJBcnJheURhdGFTb3J0IiwgImRhdGFBcnJheSIsICJzb3J0IiwgImEiLCAiYiIsICJzbGljZSIsICJmZXRjaFVzZXJEYXRhIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAiRXJyb3IiLCAiZGF0YSIsICJ1c2VyRGF0YSIsICJncm91cHMiLCAicXVlcnkiLCAidXNlcnMiLCAiY29uc29sZSIsICJsb2ciLCAidGhlbiIsICJjYXRjaCIsICJBcnJheSIsICJpc0FycmF5IiwgImVycm9yIiwgIm1hdGNoZWRHcm91cHMiLCAiZmlsdGVyIiwgImdyb3VwIiwgImhhc093biIsICJmaXJzdFRocmVlSXRlbXMiLCAiaW1nRGF0YSIsICIkYm9keSIsICIkZG9tbW91bnRwb2ludCIsICJmaW5kIl0KfQo=
