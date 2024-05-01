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
//! src/RightTopicons/modules/PermissionData.ts
var LIBdictionary = {
  steward: {
    id: "1",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/2/21/%E8%A3%81%E5%86%B3%E5%A7%94%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E8%A3%81%E5%86%B3%E5%A7%94%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:STEWARD"
  },
  sysop: {
    id: "2",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/3/3e/%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:SYSOP"
  },
  templateeditor: {
    id: "3",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/4/47/%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%BE%91%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%BE%91%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:TE"
  },
  "interface-admin": {
    id: "4",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/e/ea/%E7%95%8C%E9%9D%A2%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E7%95%8C%E9%9D%A2%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:IA"
  },
  patroller: {
    id: "5",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/6/67/%E5%B7%A1%E6%9F%A5%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E5%B7%A1%E6%9F%A5%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:PATROLLER"
  },
  suppress: {
    id: "6",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/3/3d/%E7%9B%91%E7%9D%A3%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E7%9B%91%E7%9D%A3%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:SU"
  },
  autoreviewer: {
    id: "8",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/a/ac/%E5%B7%A1%E6%9F%A5%E8%B1%81%E5%85%8D%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E5%B7%A1%E6%9F%A5%E8%B1%81%E5%85%8D%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:AUTOREV"
  },
  "massmessage-sender": {
    id: "9",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/3/37/%E5%A4%A7%E9%87%8F%E4%BF%A1%E6%81%AF%E5%8F%91%E9%80%81%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E5%A4%A7%E9%87%8F%E4%BF%A1%E6%81%AF%E5%8F%91%E9%80%81%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:MMS"
  },
  senioreditor: {
    id: "10",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/5/52/%E8%B5%84%E6%B7%B1%E7%BC%96%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E8%B5%84%E6%B7%B1%E7%BC%96%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
    src: "https://www.qiuwenbaike.cn/wiki/QW:SE"
  },
  transwiki: {
    id: "11",
    aimgsrc: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/4/45/%E5%AF%BC%E5%85%A5%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg/24px-%E5%AF%BC%E5%85%A5%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg.png",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JpZ2h0VG9waWNvbnMvbW9kdWxlcy9QZXJtaXNzaW9uRGF0YS50cyIsICJzcmMvUmlnaHRUb3BpY29ucy9SaWdodFRvcGljb25zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIExJQkRpY3Rpb25hcnlFbnRyeSA9IHtcblx0aWQ6IHN0cmluZztcblx0YWltZ3NyYzogc3RyaW5nO1xuXHRzcmM6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBMSUJkaWN0aW9uYXJ5OiBSZWNvcmQ8c3RyaW5nLCBMSUJEaWN0aW9uYXJ5RW50cnk+ID0ge1xuXHRzdGV3YXJkOiB7XG5cdFx0aWQ6ICcxJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvMi8yMS8lRTglQTMlODElRTUlODYlQjMlRTUlQTclOTQlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnLzI0cHgtJUU4JUEzJTgxJUU1JTg2JUIzJUU1JUE3JTk0JUU1JTkxJTk4JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2Zy5wbmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6U1RFV0FSRCcsXG5cdH0sXG5cdHN5c29wOiB7XG5cdFx0aWQ6ICcyJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvMy8zZS8lRTclQUUlQTElRTclOTAlODYlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnLzI0cHgtJUU3JUFFJUExJUU3JTkwJTg2JUU1JTkxJTk4JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2Zy5wbmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6U1lTT1AnLFxuXHR9LFxuXHR0ZW1wbGF0ZWVkaXRvcjoge1xuXHRcdGlkOiAnMycsXG5cdFx0YWltZ3NyYzpcblx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzQvNDcvJUU2JUE4JUExJUU2JTlEJUJGJUU3JUJDJTk2JUU4JUJFJTkxJUU1JTkxJTk4JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2Zy8yNHB4LSVFNiVBOCVBMSVFNiU5RCVCRiVFNyVCQyU5NiVFOCVCRSU5MSVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcucG5nJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOlRFJyxcblx0fSxcblx0J2ludGVyZmFjZS1hZG1pbic6IHtcblx0XHRpZDogJzQnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi9lL2VhLyVFNyU5NSU4QyVFOSU5RCVBMiVFNyVBRSVBMSVFNyU5MCU4NiVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcvMjRweC0lRTclOTUlOEMlRTklOUQlQTIlRTclQUUlQTElRTclOTAlODYlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnLnBuZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9RVzpJQScsXG5cdH0sXG5cdHBhdHJvbGxlcjoge1xuXHRcdGlkOiAnNScsXG5cdFx0YWltZ3NyYzpcblx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzYvNjcvJUU1JUI3JUExJUU2JTlGJUE1JUU1JTkxJTk4JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2Zy8yNHB4LSVFNSVCNyVBMSVFNiU5RiVBNSVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcucG5nJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOlBBVFJPTExFUicsXG5cdH0sXG5cdHN1cHByZXNzOiB7XG5cdFx0aWQ6ICc2Jyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvMy8zZC8lRTclOUIlOTElRTclOUQlQTMlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnLzI0cHgtJUU3JTlCJTkxJUU3JTlEJUEzJUU1JTkxJTk4JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2Zy5wbmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6U1UnLFxuXHR9LFxuXHRhdXRvcmV2aWV3ZXI6IHtcblx0XHRpZDogJzgnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi9hL2FjLyVFNSVCNyVBMSVFNiU5RiVBNSVFOCVCMSU4MSVFNSU4NSU4RCVFOCU4MCU4NSVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcvMjRweC0lRTUlQjclQTElRTYlOUYlQTUlRTglQjElODElRTUlODUlOEQlRTglODAlODUlRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnLnBuZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9RVzpBVVRPUkVWJyxcblx0fSxcblx0J21hc3NtZXNzYWdlLXNlbmRlcic6IHtcblx0XHRpZDogJzknLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi8zLzM3LyVFNSVBNCVBNyVFOSU4NyU4RiVFNCVCRiVBMSVFNiU4MSVBRiVFNSU4RiU5MSVFOSU4MCU4MSVFOCU4MCU4NSVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcvMjRweC0lRTUlQTQlQTclRTklODclOEYlRTQlQkYlQTElRTYlODElQUYlRTUlOEYlOTElRTklODAlODElRTglODAlODUlRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnLnBuZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9RVzpNTVMnLFxuXHR9LFxuXHRzZW5pb3JlZGl0b3I6IHtcblx0XHRpZDogJzEwJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvNS81Mi8lRTglQjUlODQlRTYlQjclQjElRTclQkMlOTYlRTglODAlODUlRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnLzI0cHgtJUU4JUI1JTg0JUU2JUI3JUIxJUU3JUJDJTk2JUU4JTgwJTg1JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2Zy5wbmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6U0UnLFxuXHR9LFxuXHR0cmFuc3dpa2k6IHtcblx0XHRpZDogJzExJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvNC80NS8lRTUlQUYlQkMlRTUlODUlQTUlRTglODAlODUlRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnLzI0cHgtJUU1JUFGJUJDJUU1JTg1JUE1JUU4JTgwJTg1JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2Zy5wbmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6SU1QT1JUJyxcblx0fSxcbn07XG4iLCAiaW1wb3J0IHtMSUJkaWN0aW9uYXJ5fSBmcm9tICcuL21vZHVsZXMvUGVybWlzc2lvbkRhdGEnO1xuJCgoKSA9PiB7XG5cdGNvbnN0IFdpa2lVUkxOYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXHRjb25zdCBtYXRjaFJlc3VsdCA9IC9eXFwvd2lraVxcL1VzZXI6W14vXSokLy50ZXN0KFdpa2lVUkxOYW1lKTtcblx0aWYgKCFtYXRjaFJlc3VsdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBbXywgdXNlck5hbWVNYXRjaF0gPSBXaWtpVVJMTmFtZS5tYXRjaCgvVXNlcjooLiopJC8pIHx8IFtdO1xuXHRjb25zdCBVc2VyTWVzc2FnZSA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2VydmVyJyl9L2FwaS5waHA/YWN0aW9uPXF1ZXJ5Jmxpc3Q9dXNlcnMmdXNwcm9wPWdyb3VwcyZmb3JtYXQ9anNvbiZ1c3VzZXJzPSR7dXNlck5hbWVNYXRjaH1gO1xuXG5cdHR5cGUgVmlydHVhbERPTU5vZGUgPSB7XG5cdFx0dGFnOiBzdHJpbmc7XG5cdFx0cHJvcHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xuXHRcdGNoaWxkcmVuPzogVmlydHVhbERPTU5vZGVbXTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGVWaXJ0dWFsTGlua0ltZyA9IChocmVmOiBzdHJpbmcsIGFpbWdzcmM6IHN0cmluZyk6IG9iamVjdCA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhZzogJ2EnLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0aHJlZixcblx0XHRcdFx0c3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Jyxcblx0XHRcdH0sXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFnOiAnaW1nJyxcblx0XHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdFx0c3JjOiBhaW1nc3JjLFxuXHRcdFx0XHRcdFx0c3R5bGU6ICd3aWR0aDogMzlweDsgbWFyZ2luOiAwIDNweDsnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyVmlydHVhbERPTSA9ICh2aXJ0dWFsRE9NOiBWaXJ0dWFsRE9NTm9kZVtdLCBjb250YWluZXI6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcblx0XHRpZiAoIShjb250YWluZXIgaW5zdGFuY2VvZiBqUXVlcnkpKSB7XG5cdFx0XHRjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY3JlYXRlUmVhbE5vZGUgPSAodmlydHVhbE5vZGU6IFZpcnR1YWxET01Ob2RlKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdFx0XHRjb25zdCB7dGFnLCBwcm9wcywgY2hpbGRyZW59ID0gdmlydHVhbE5vZGU7XG5cdFx0XHRjb25zdCByZWFsTm9kZSA9ICQoYDwke3RhZ30+YCk7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKHByb3BzKSkge1xuXHRcdFx0XHRyZWFsTm9kZS5hdHRyKHByb3BOYW1lLCBTdHJpbmcocHJvcHNbcHJvcE5hbWVdKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hpbGRyZW4pIHtcblx0XHRcdFx0Zm9yIChjb25zdCBjaGlsZFZpcnR1YWxOb2RlIG9mIGNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2hpbGRSZWFsTm9kZSA9IGNyZWF0ZVJlYWxOb2RlKGNoaWxkVmlydHVhbE5vZGUpO1xuXHRcdFx0XHRcdHJlYWxOb2RlLmFwcGVuZChjaGlsZFJlYWxOb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlYWxOb2RlO1xuXHRcdH07XG5cblx0XHRjb25zdCByZWFsTm9kZXMgPSB2aXJ0dWFsRE9NLm1hcCgodmlydHVhbE5vZGUpID0+IHtcblx0XHRcdGNvbnN0IHJlYWxOb2RlID0gY3JlYXRlUmVhbE5vZGUodmlydHVhbE5vZGUpO1xuXHRcdFx0cmV0dXJuIHJlYWxOb2RlO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHJlYWxOb2Rlcykge1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZChub2RlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFycmF5RGF0YVNvcnQgPSA8RGF0YVR5cGUgZXh0ZW5kcyB7aWQ6IG51bWJlcn0+KGRhdGFBcnJheTogRGF0YVR5cGVbXSkgPT4ge1xuXHRcdGRhdGFBcnJheS5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRyZXR1cm4gYS5pZCAtIGIuaWQ7XG5cdFx0fSk7XG5cdFx0aWYgKGRhdGFBcnJheS5sZW5ndGggPiAzKSB7XG5cdFx0XHRyZXR1cm4gZGF0YUFycmF5LnNsaWNlKDAsIDMpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YUFycmF5O1xuXHR9O1xuXG5cdHR5cGUgVXNlckRhdGEgPSB7XG5cdFx0Z3JvdXBzOiBzdHJpbmdbXTtcblx0fTtcblx0Y29uc3QgZmV0Y2hVc2VyRGF0YSA9ICgpOiBQcm9taXNlPFVzZXJEYXRhPiA9PiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGlmICghVXNlck1lc3NhZ2UpIHtcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcignVXNlck1lc3NhZ2UgaXMgbm90IGRlZmluZWQnKSk7XG5cdFx0XHR9XG5cdFx0XHQkLmdldChcblx0XHRcdFx0VXNlck1lc3NhZ2UsXG5cdFx0XHRcdChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdXNlckRhdGE6IFVzZXJEYXRhID0ge1xuXHRcdFx0XHRcdFx0Z3JvdXBzOiBkYXRhLnF1ZXJ5LnVzZXJzWzBdLmdyb3VwcyBhcyBzdHJpbmdbXSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblx0XHRcdFx0XHRyZXNvbHZlKHVzZXJEYXRhKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0J2pzb24nXG5cdFx0XHQpXG5cdFx0XHRcdC50aGVuKCgpID0+IHt9KVxuXHRcdFx0XHQuY2F0Y2gocmVqZWN0KTtcblx0XHR9KTtcblx0fTtcblxuXHRmZXRjaFVzZXJEYXRhKClcblx0XHQudGhlbigodXNlckRhdGE6IFVzZXJEYXRhKSA9PiB7XG5cdFx0XHRpZiAoIXVzZXJEYXRhIHx8ICFBcnJheS5pc0FycmF5KHVzZXJEYXRhLmdyb3VwcykpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdFx0XHRuZXcgRXJyb3IoJ0ludmFsaWQgdXNlckRhdGEuZ3JvdXBzOiBleHBlY3RlZCBhbiBhcnJheSBidXQgcmVjZWl2ZWQgbm9uZSBvciBhIG5vbi1hcnJheS4nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1hdGNoZWRHcm91cHMgPSB1c2VyRGF0YS5ncm91cHNcblx0XHRcdFx0LmZpbHRlcigoZ3JvdXApOiBncm91cCBpcyBzdHJpbmcgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgZ3JvdXAgPT09ICdzdHJpbmcnICYmIE9iamVjdC5oYXNPd24oTElCZGljdGlvbmFyeSwgZ3JvdXApO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQubWFwKChncm91cCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBMSUJkaWN0aW9uYXJ5W2dyb3VwXTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdGludGVyZmFjZSBJbWFnZUl0ZW0ge1xuXHRcdFx0XHRzcmM6IHN0cmluZztcblx0XHRcdFx0YWltZ3NyYzogc3RyaW5nO1xuXHRcdFx0XHRpZDogbnVtYmVyO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZmlyc3RUaHJlZUl0ZW1zID0gQXJyYXlEYXRhU29ydChtYXRjaGVkR3JvdXBzIGFzIHVua25vd24gYXMgSW1hZ2VJdGVtW10pO1xuXHRcdFx0Y29uc3QgdmlydHVhbERPTSA9IGZpcnN0VGhyZWVJdGVtcy5tYXAoKGltZ0RhdGEpID0+IHtcblx0XHRcdFx0cmV0dXJuIGltZ0RhdGE/LnNyYyAmJiBpbWdEYXRhPy5haW1nc3JjID8gY3JlYXRlVmlydHVhbExpbmtJbWcoaW1nRGF0YS5zcmMsIGltZ0RhdGEuYWltZ3NyYykgOiBudWxsO1xuXHRcdFx0fSkgYXMgVmlydHVhbERPTU5vZGVbXTtcblx0XHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0XHRcdGNvbnN0ICRkb21tb3VudHBvaW50OiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY29udGVudCBoZWFkZXIubXctYm9keS1oZWFkZXIgLnBhZ2UtaGVhZGluZyAubXctaW5kaWNhdG9ycycpO1xuXHRcdFx0cmVuZGVyVmlydHVhbERPTSh2aXJ0dWFsRE9NLCAkZG9tbW91bnRwb2ludCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCfmnIDnu4jor7fmsYLlpLHotKXvvIzkuI3lho3ph43or5U6JywgZXJyb3IpO1xuXHRcdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1PLElBQU1BLGdCQUFvRDtFQUNoRUMsU0FBUztJQUNSQyxJQUFJO0lBQ0pDLFNBQ0M7SUFDREMsS0FBSztFQUNOO0VBQ0FDLE9BQU87SUFDTkgsSUFBSTtJQUNKQyxTQUNDO0lBQ0RDLEtBQUs7RUFDTjtFQUNBRSxnQkFBZ0I7SUFDZkosSUFBSTtJQUNKQyxTQUNDO0lBQ0RDLEtBQUs7RUFDTjtFQUNBLG1CQUFtQjtJQUNsQkYsSUFBSTtJQUNKQyxTQUNDO0lBQ0RDLEtBQUs7RUFDTjtFQUNBRyxXQUFXO0lBQ1ZMLElBQUk7SUFDSkMs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QUFBLFFBQUFBLFlBQUEsVUFBQUEsUUFBUzNGLFVBQVV3QixxQkFBcUJtRSxRQUFRMUYsS0FBSzBGLFFBQVEzRixPQUFPLElBQUk7SUFDaEcsQ0FBQztBQUNELFVBQU00RixRQUFpQ25GLEVBQUUsTUFBTTtBQUMvQyxVQUFNb0YsaUJBQXlCRCxNQUFNRSxLQUFLLDZEQUE2RDtBQUN2R2hFLHFCQUFpQkMsWUFBWThELGNBQWM7RUFDNUMsQ0FBQyxFQUNBWCxNQUFPRyxXQUFVO0FBQ2pCTixZQUFRTSxNQUFNLGdCQUFnQkEsS0FBSztFQUNwQyxDQUFDO0FBQ0gsQ0FBQzsiLAogICJuYW1lcyI6IFsiTElCZGljdGlvbmFyeSIsICJzdGV3YXJkIiwgImlkIiwgImFpbWdzcmMiLCAic3JjIiwgInN5c29wIiwgInRlbXBsYXRlZWRpdG9yIiwgInBhdHJvbGxlciIsICJzdXBwcmVzcyIsICJhdXRvcmV2aWV3ZXIiLCAic2VuaW9yZWRpdG9yIiwgInRyYW5zd2lraSIsICIkIiwgIldpa2lVUkxOYW1lIiwgIndpbmRvdyIsICJsb2NhdGlvbiIsICJwYXRobmFtZSIsICJtYXRjaFJlc3VsdCIsICJ0ZXN0IiwgIl8iLCAidXNlck5hbWVNYXRjaCIsICJtYXRjaCIsICJVc2VyTWVzc2FnZSIsICJjb25jYXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjcmVhdGVWaXJ0dWFsTGlua0ltZyIsICJocmVmIiwgInRhZyIsICJwcm9wcyIsICJzdHlsZSIsICJjaGlsZHJlbiIsICJyZW5kZXJWaXJ0dWFsRE9NIiwgInZpcnR1YWxET00iLCAiY29udGFpbmVyIiwgImpRdWVyeSIsICJjcmVhdGVSZWFsTm9kZSIsICJ2aXJ0dWFsTm9kZSIsICJyZWFsTm9kZSIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgInByb3BOYW1lIiwgImF0dHIiLCAiU3RyaW5nIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJjaGlsZFZpcnR1YWxOb2RlIiwgInZhbHVlIiwgImNoaWxkUmVhbE5vZGUiLCAiYXBwZW5kIiwgImVyciIsICJlIiwgImYiLCAicmVhbE5vZGVzIiwgIm1hcCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJub2RlIiwgIkFycmF5RGF0YVNvcnQiLCAiZGF0YUFycmF5IiwgInNvcnQiLCAiYSIsICJiIiwgInNsaWNlIiwgImZldGNoVXNlckRhdGEiLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInJlamVjdCIsICJFcnJvciIsICJkYXRhIiwgInVzZXJEYXRhIiwgImdyb3VwcyIsICJxdWVyeSIsICJ1c2VycyIsICJjb25zb2xlIiwgImxvZyIsICJ0aGVuIiwgImNhdGNoIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiZXJyb3IiLCAibWF0Y2hlZEdyb3VwcyIsICJmaWx0ZXIiLCAiZ3JvdXAiLCAiaGFzT3duIiwgImZpcnN0VGhyZWVJdGVtcyIsICJpbWdEYXRhIiwgIiRib2R5IiwgIiRkb21tb3VudHBvaW50IiwgImZpbmQiXQp9Cg==
