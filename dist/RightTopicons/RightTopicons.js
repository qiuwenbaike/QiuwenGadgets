/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/RightTopicons>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/RightTopicons>
 * @author 顶呱呱的阿杰 <https://youshou.wiki/wiki/User:顶呱呱的阿杰>
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JpZ2h0VG9waWNvbnMvbW9kdWxlcy9QZXJtaXNzaW9uRGF0YS50cyIsICJzcmMvUmlnaHRUb3BpY29ucy9SaWdodFRvcGljb25zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIExJQkRpY3Rpb25hcnlFbnRyeSA9IHtcblx0aWQ6IHN0cmluZztcblx0YWltZ3NyYzogc3RyaW5nO1xuXHRzcmM6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBMSUJkaWN0aW9uYXJ5OiBSZWNvcmQ8c3RyaW5nLCBMSUJEaWN0aW9uYXJ5RW50cnk+ID0ge1xuXHRzdGV3YXJkOiB7XG5cdFx0aWQ6ICcxJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvMi8yMS8lRTglQTMlODElRTUlODYlQjMlRTUlQTclOTQlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOlNURVdBUkQnLFxuXHR9LFxuXHRzeXNvcDoge1xuXHRcdGlkOiAnMicsXG5cdFx0YWltZ3NyYzpcblx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poLzMvM2UvJUU3JUFFJUExJUU3JTkwJTg2JUU1JTkxJTk4JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2ZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9RVzpTWVNPUCcsXG5cdH0sXG5cdHRlbXBsYXRlZWRpdG9yOiB7XG5cdFx0aWQ6ICczJyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvNC80Ny8lRTYlQTglQTElRTYlOUQlQkYlRTclQkMlOTYlRTglQkUlOTElRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOlRFJyxcblx0fSxcblx0J2ludGVyZmFjZS1hZG1pbic6IHtcblx0XHRpZDogJzQnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9lL2VhLyVFNyU5NSU4QyVFOSU5RCVBMiVFNyVBRSVBMSVFNyU5MCU4NiVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6SUEnLFxuXHR9LFxuXHRwYXRyb2xsZXI6IHtcblx0XHRpZDogJzUnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC82LzY3LyVFNSVCNyVBMSVFNiU5RiVBNSVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6UEFUUk9MTEVSJyxcblx0fSxcblx0c3VwcHJlc3M6IHtcblx0XHRpZDogJzYnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC8zLzNkLyVFNyU5QiU5MSVFNyU5RCVBMyVFNSU5MSU5OCVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6U1UnLFxuXHR9LFxuXHRhdXRvcmV2aWV3ZXI6IHtcblx0XHRpZDogJzgnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9hL2FjLyVFNSVCNyVBMSVFNiU5RiVBNSVFOCVCMSU4MSVFNSU4NSU4RCVFOCU4MCU4NSVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6QVVUT1JFVicsXG5cdH0sXG5cdCdtYXNzbWVzc2FnZS1zZW5kZXInOiB7XG5cdFx0aWQ6ICc5Jyxcblx0XHRhaW1nc3JjOlxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvMy8zNy8lRTUlQTQlQTclRTklODclOEYlRTQlQkYlQTElRTYlODElQUYlRTUlOEYlOTElRTklODAlODElRTglODAlODUlRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1FXOk1NUycsXG5cdH0sXG5cdHNlbmlvcmVkaXRvcjoge1xuXHRcdGlkOiAnMTAnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC81LzUyLyVFOCVCNSU4NCVFNiVCNyVCMSVFNyVCQyU5NiVFOCU4MCU4NSVFNiU5RCU4MyVFOSU5OSU5MCVFNiVBMCU4NyVFOCVBRiU4Ni5zdmcnLFxuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvUVc6U0UnLFxuXHR9LFxufTtcbiIsICJpbXBvcnQge0xJQmRpY3Rpb25hcnl9IGZyb20gJy4vbW9kdWxlcy9QZXJtaXNzaW9uRGF0YSc7XG4kKCgpID0+IHtcblx0Y29uc3QgV2lraVVSTE5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cdGNvbnN0IG1hdGNoUmVzdWx0ID0gL15cXC93aWtpXFwvVXNlcjpbXi9dKiQvLnRlc3QoV2lraVVSTE5hbWUpO1xuXHRpZiAoIW1hdGNoUmVzdWx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IFtfLCB1c2VyTmFtZU1hdGNoXSA9IFdpa2lVUkxOYW1lLm1hdGNoKC9Vc2VyOiguKikkLykgfHwgW107XG5cdGNvbnN0IFVzZXJNZXNzYWdlID0gYCR7bXcuY29uZmlnLmdldCgnd2dTZXJ2ZXInKX0vYXBpLnBocD9hY3Rpb249cXVlcnkmbGlzdD11c2VycyZ1c3Byb3A9Z3JvdXBzJmZvcm1hdD1qc29uJnVzdXNlcnM9JHt1c2VyTmFtZU1hdGNofWA7XG5cblx0dHlwZSBWaXJ0dWFsRE9NTm9kZSA9IHtcblx0XHR0YWc6IHN0cmluZztcblx0XHRwcm9wczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XG5cdFx0Y2hpbGRyZW4/OiBWaXJ0dWFsRE9NTm9kZVtdO1xuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZVZpcnR1YWxMaW5rSW1nID0gKGhyZWY6IHN0cmluZywgYWltZ3NyYzogc3RyaW5nKTogb2JqZWN0ID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFnOiAnYScsXG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHRocmVmLFxuXHRcdFx0XHRzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsnLFxuXHRcdFx0fSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YWc6ICdpbWcnLFxuXHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRzcmM6IGFpbWdzcmMsXG5cdFx0XHRcdFx0XHRzdHlsZTogJ3dpZHRoOiAzOXB4OyBtYXJnaW46IDAgM3B4OycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fTtcblxuXHRjb25zdCByZW5kZXJWaXJ0dWFsRE9NID0gKHZpcnR1YWxET006IFZpcnR1YWxET01Ob2RlW10sIGNvbnRhaW5lcjogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xuXHRcdGlmICghKGNvbnRhaW5lciBpbnN0YW5jZW9mIGpRdWVyeSkpIHtcblx0XHRcdGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblx0XHR9XG5cblx0XHRjb25zdCBjcmVhdGVSZWFsTm9kZSA9ICh2aXJ0dWFsTm9kZTogVmlydHVhbERPTU5vZGUpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0XHRcdGNvbnN0IHt0YWcsIHByb3BzLCBjaGlsZHJlbn0gPSB2aXJ0dWFsTm9kZTtcblx0XHRcdGNvbnN0IHJlYWxOb2RlID0gJChgPCR7dGFnfT5gKTtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMocHJvcHMpKSB7XG5cdFx0XHRcdHJlYWxOb2RlLmF0dHIocHJvcE5hbWUsIFN0cmluZyhwcm9wc1twcm9wTmFtZV0pKTtcblx0XHRcdH1cblx0XHRcdGlmIChjaGlsZHJlbikge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGNoaWxkVmlydHVhbE5vZGUgb2YgY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRjb25zdCBjaGlsZFJlYWxOb2RlID0gY3JlYXRlUmVhbE5vZGUoY2hpbGRWaXJ0dWFsTm9kZSk7XG5cdFx0XHRcdFx0cmVhbE5vZGUuYXBwZW5kKGNoaWxkUmVhbE5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVhbE5vZGU7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlYWxOb2RlcyA9IHZpcnR1YWxET00ubWFwKCh2aXJ0dWFsTm9kZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVhbE5vZGUgPSBjcmVhdGVSZWFsTm9kZSh2aXJ0dWFsTm9kZSk7XG5cdFx0XHRyZXR1cm4gcmVhbE5vZGU7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcmVhbE5vZGVzKSB7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kKG5vZGUpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQXJyYXlEYXRhU29ydCA9IDxEYXRhVHlwZSBleHRlbmRzIHtpZDogbnVtYmVyfT4oZGF0YUFycmF5OiBEYXRhVHlwZVtdKSA9PiB7XG5cdFx0ZGF0YUFycmF5LnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdHJldHVybiBhLmlkIC0gYi5pZDtcblx0XHR9KTtcblx0XHRpZiAoZGF0YUFycmF5Lmxlbmd0aCA+IDMpIHtcblx0XHRcdHJldHVybiBkYXRhQXJyYXkuc2xpY2UoMCwgMyk7XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhQXJyYXk7XG5cdH07XG5cblx0dHlwZSBVc2VyRGF0YSA9IHtcblx0XHRncm91cHM6IHN0cmluZ1tdO1xuXHR9O1xuXHRjb25zdCBmZXRjaFVzZXJEYXRhID0gKCk6IFByb21pc2U8VXNlckRhdGE+ID0+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0aWYgKCFVc2VyTWVzc2FnZSkge1xuXHRcdFx0XHRyZWplY3QobmV3IEVycm9yKCdVc2VyTWVzc2FnZSBpcyBub3QgZGVmaW5lZCcpKTtcblx0XHRcdH1cblx0XHRcdCQuZ2V0KFxuXHRcdFx0XHRVc2VyTWVzc2FnZSxcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRjb25zdCB1c2VyRGF0YTogVXNlckRhdGEgPSB7XG5cdFx0XHRcdFx0XHRncm91cHM6IGRhdGEucXVlcnkudXNlcnNbMF0uZ3JvdXBzIGFzIHN0cmluZ1tdLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codXNlckRhdGEpO1xuXHRcdFx0XHRcdHJlc29sdmUodXNlckRhdGEpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnanNvbidcblx0XHRcdClcblx0XHRcdFx0LnRoZW4oKCkgPT4ge30pXG5cdFx0XHRcdC5jYXRjaChyZWplY3QpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGZldGNoVXNlckRhdGEoKVxuXHRcdC50aGVuKCh1c2VyRGF0YTogVXNlckRhdGEpID0+IHtcblx0XHRcdGlmICghdXNlckRhdGEgfHwgIUFycmF5LmlzQXJyYXkodXNlckRhdGEuZ3JvdXBzKSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0XHRcdG5ldyBFcnJvcignSW52YWxpZCB1c2VyRGF0YS5ncm91cHM6IGV4cGVjdGVkIGFuIGFycmF5IGJ1dCByZWNlaXZlZCBub25lIG9yIGEgbm9uLWFycmF5LicpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbWF0Y2hlZEdyb3VwcyA9IHVzZXJEYXRhLmdyb3Vwc1xuXHRcdFx0XHQuZmlsdGVyKChncm91cCk6IGdyb3VwIGlzIHN0cmluZyA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBncm91cCA9PT0gJ3N0cmluZycgJiYgT2JqZWN0Lmhhc093bihMSUJkaWN0aW9uYXJ5LCBncm91cCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5tYXAoKGdyb3VwKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIExJQmRpY3Rpb25hcnlbZ3JvdXBdO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0aW50ZXJmYWNlIEltYWdlSXRlbSB7XG5cdFx0XHRcdHNyYzogc3RyaW5nO1xuXHRcdFx0XHRhaW1nc3JjOiBzdHJpbmc7XG5cdFx0XHRcdGlkOiBudW1iZXI7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmaXJzdFRocmVlSXRlbXMgPSBBcnJheURhdGFTb3J0KG1hdGNoZWRHcm91cHMgYXMgdW5rbm93biBhcyBJbWFnZUl0ZW1bXSk7XG5cdFx0XHRjb25zdCB2aXJ0dWFsRE9NID0gZmlyc3RUaHJlZUl0ZW1zLm1hcCgoaW1nRGF0YSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gaW1nRGF0YT8uc3JjICYmIGltZ0RhdGE/LmFpbWdzcmMgPyBjcmVhdGVWaXJ0dWFsTGlua0ltZyhpbWdEYXRhLnNyYywgaW1nRGF0YS5haW1nc3JjKSA6IG51bGw7XG5cdFx0XHR9KSBhcyBWaXJ0dWFsRE9NTm9kZVtdO1xuXHRcdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdFx0Y29uc3QgJGRvbW1vdW50cG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjb250ZW50IGhlYWRlci5tdy1ib2R5LWhlYWRlciAucGFnZS1oZWFkaW5nIC5tdy1pbmRpY2F0b3JzJyk7XG5cdFx0XHRyZW5kZXJWaXJ0dWFsRE9NKHZpcnR1YWxET00sICRkb21tb3VudHBvaW50KTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ+acgOe7iOivt+axguWksei0pe+8jOS4jeWGjemHjeivlTonLCBlcnJvcik7XG5cdFx0fSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTU8sSUFBTUEsZ0JBQW9EO0VBQ2hFQyxTQUFTO0lBQ1JDLElBQUk7SUFDSkMsU0FDQztJQUNEQyxLQUFLO0VBQ047RUFDQUMsT0FBTztJQUNOSCxJQUFJO0lBQ0pDLFNBQ0M7SUFDREMsS0FBSztFQUNOO0VBQ0FFLGdCQUFnQjtJQUNmSixJQUFJO0lBQ0pDLFNBQ0M7SUFDREMsS0FBSztFQUNOO0VBQ0EsbUJBQW1CO0lBQ2xCRixJQUFJO0lBQ0pDLFNBQ0M7SUFDREMsS0FBSztFQUNOO0VBQ0FHLFdBQVc7SUFDVkwsSUFBSTtJQUNKQyxTQUNDO0lBQ0RDLEtBQUs7RUFDTjtFQUNBSSxVQUFVO0lBQ1ROLElBQUk7SUFDSkMsU0FDQztJQUNEQyxLQUFLO0VBQ047RUFDQUssY0FBYztJQUNiUCxJQUFJO0lBQ0pDLFNBQ0M7SUFDREMsS0FBSztFQUNOO0VBQ0Esc0JBQXNCO0lBQ3JCRixJQUFJO0lBQ0pDLFNBQ0M7SUFDREMsS0FBSztFQUNOO0VBQ0FNLGNBQWM7SUFDYlIsSUFBSTtJQUNKQyxTQUNDO0lBQ0RDLEtBQUs7RUFDTjtBQUNEOztBQzVEQU8sRUFBRSxNQUFNO0FBQ1AsUUFBTUMsY0FBY0MsT0FBT0MsU0FBU0M7QUFDcEMsUUFBTUMsY0FBYyx1QkFBdUJDLEtBQUtMLFdBQVc7QUFDM0QsTUFBSSxDQUFDSSxhQUFhO0FBQ2pCO0VBQ0Q7QUFDQSxRQUFNLENBQUNFLEdBQUdDLGFBQWEsSUFBSVAsWUFBWVEsTUFBTSxZQUFZLEtBQUssQ0FBQTtBQUM5RCxRQUFNQyxjQUFBLEdBQUFDLE9BQWlCQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVUsR0FBQyxxRUFBQSxFQUFBSCxPQUFzRUgsYUFBYTtBQVFuSSxRQUFNTyx1QkFBdUJBLENBQUNDLE1BQWN4QixZQUE0QjtBQUN2RSxXQUFPO01BQ055QixLQUFLO01BQ0xDLE9BQU87UUFDTkY7UUFDQUcsT0FBTztNQUNSO01BQ0FDLFVBQVUsQ0FDVDtRQUNDSCxLQUFLO1FBQ0xDLE9BQU87VUFDTnpCLEtBQUtEO1VBQ0wyQixPQUFPO1FBQ1I7TUFDRCxDQUFBO0lBRUY7RUFDRDtBQUVBLFFBQU1FLG1CQUFtQkEsQ0FBQ0MsWUFBOEJDLGNBQW1DO0FBQzFGLFFBQUksRUFBRUEscUJBQXFCQyxTQUFTO0FBQ25DRCxrQkFBWXZCLEVBQUV1QixTQUFTO0lBQ3hCO0FBRUEsVUFBTUUsaUJBQWtCQyxpQkFBcUQ7QUFDNUUsWUFBTTtRQUFDVDtRQUFLQztRQUFPRTtNQUFRLElBQUlNO0FBQy9CLFlBQU1DLFdBQVczQixFQUFBLElBQUFXLE9BQU1NLEtBQUcsR0FBQSxDQUFHO0FBQzdCLGVBQUFXLEtBQUEsR0FBQUMsZUFBdUJDLE9BQU9DLEtBQUtiLEtBQUssR0FBQVUsS0FBQUMsYUFBQUcsUUFBQUosTUFBRztBQUEzQyxjQUFXSyxXQUFBSixhQUFBRCxFQUFBO0FBQ1ZELGlCQUFTTyxLQUFLRCxVQUFVRSxPQUFPakIsTUFBTWUsUUFBUSxDQUFDLENBQUM7TUFDaEQ7QUFDQSxVQUFJYixVQUFVO0FBQUEsWUFBQWdCLFlBQUFDLDJCQUNrQmpCLFFBQUEsR0FBQWtCO0FBQUEsWUFBQTtBQUEvQixlQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF5QztBQUFBLGtCQUE5QkMsbUJBQUFKLE1BQUFLO0FBQ1Ysa0JBQU1DLGdCQUFnQm5CLGVBQWVpQixnQkFBZ0I7QUFDckRmLHFCQUFTa0IsT0FBT0QsYUFBYTtVQUM5QjtRQUFBLFNBQUFFLEtBQUE7QUFBQVYsb0JBQUFXLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUFWLG9CQUFBWSxFQUFBO1FBQUE7TUFDRDtBQUNBLGFBQU9yQjtJQUNSO0FBRUEsVUFBTXNCLFlBQVkzQixXQUFXNEIsSUFBS3hCLGlCQUFnQjtBQUNqRCxZQUFNQyxXQUFXRixlQUFlQyxXQUFXO0FBQzNDLGFBQU9DO0lBQ1IsQ0FBQztBQUFBLFFBQUF3QixhQUFBZCwyQkFFa0JZLFNBQUEsR0FBQUc7QUFBQSxRQUFBO0FBQW5CLFdBQUFELFdBQUFaLEVBQUEsR0FBQSxFQUFBYSxTQUFBRCxXQUFBWCxFQUFBLEdBQUFDLFFBQThCO0FBQUEsY0FBbkJZLE9BQUFELE9BQUFUO0FBQ1ZwQixrQkFBVXNCLE9BQU9RLElBQUk7TUFDdEI7SUFBQSxTQUFBUCxLQUFBO0FBQUFLLGlCQUFBSixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBSyxpQkFBQUgsRUFBQTtJQUFBO0VBQ0Q7QUFDQSxRQUFNTSxnQkFBZ0RDLGVBQTBCO0FBQy9FQSxjQUFVQyxLQUFLLENBQUNDLEdBQUdDLE1BQU07QUFDeEIsYUFBT0QsRUFBRWxFLEtBQUttRSxFQUFFbkU7SUFDakIsQ0FBQztBQUNELFFBQUlnRSxVQUFVdkIsU0FBUyxHQUFHO0FBQ3pCLGFBQU91QixVQUFVSSxNQUFNLEdBQUcsQ0FBQztJQUM1QjtBQUNBLFdBQU9KO0VBQ1I7QUFLQSxRQUFNSyxnQkFBZ0JBLE1BQXlCO0FBQzlDLFdBQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxXQUFXO0FBQ3ZDLFVBQUksQ0FBQ3JELGFBQWE7QUFDakJxRCxlQUFPLElBQUlDLE1BQU0sNEJBQTRCLENBQUM7TUFDL0M7QUFDQWhFLFFBQUVjLElBQ0RKLGFBQ0N1RCxVQUFTO0FBQ1QsY0FBTUMsV0FBcUI7VUFDMUJDLFFBQVFGLEtBQUtHLE1BQU1DLE1BQU0sQ0FBQyxFQUFFRjtRQUM3QjtBQUNBRyxnQkFBUUMsSUFBSUwsUUFBUTtBQUNwQkosZ0JBQVFJLFFBQVE7TUFDakIsR0FDQSxNQUNELEVBQ0VNLEtBQUssTUFBTTtNQUFDLENBQUMsRUFDYkMsTUFBTVYsTUFBTTtJQUNmLENBQUM7RUFDRjtBQUVBSCxnQkFBYyxFQUNaWSxLQUFNTixjQUF1QjtBQUM3QixRQUFJLENBQUNBLFlBQVksQ0FBQ1EsTUFBTUMsUUFBUVQsU0FBU0MsTUFBTSxHQUFHO0FBQ2pERyxjQUFRTSxNQUNQLElBQUlaLE1BQU0sOEVBQThFLENBQ3pGO0FBQ0E7SUFDRDtBQUVBLFVBQU1hLGdCQUFnQlgsU0FBU0MsT0FDN0JXLE9BQVFDLFdBQTJCO0FBQ25DLGFBQU8sT0FBT0EsVUFBVSxZQUFZakQsT0FBT2tELE9BQU8zRixlQUFlMEYsS0FBSztJQUN2RSxDQUFDLEVBQ0E3QixJQUFLNkIsV0FBVTtBQUNmLGFBQU8xRixjQUFjMEYsS0FBSztJQUMzQixDQUFDO0FBT0YsVUFBTUUsa0JBQWtCM0IsY0FBY3VCLGFBQXVDO0FBQzdFLFVBQU12RCxhQUFhMkQsZ0JBQWdCL0IsSUFBS2dDLGFBQVk7QUFDbkQsYUFBT0EsWUFBQSxRQUFBQSxZQUFBLFVBQUFBLFFBQVN6RixPQUFPeUYsWUFBQSxRQUFBQSxZQUFBLFVBQUFBLFFBQVMxRixVQUFVdUIscUJBQXFCbUUsUUFBUXpGLEtBQUt5RixRQUFRMUYsT0FBTyxJQUFJO0lBQ2hHLENBQUM7QUFDRCxVQUFNMkYsUUFBaUNuRixFQUFFLE1BQU07QUFDL0MsVUFBTW9GLGlCQUF5QkQsTUFBTUUsS0FBSyw2REFBNkQ7QUFDdkdoRSxxQkFBaUJDLFlBQVk4RCxjQUFjO0VBQzVDLENBQUMsRUFDQVgsTUFBT0csV0FBVTtBQUNqQk4sWUFBUU0sTUFBTSxnQkFBZ0JBLEtBQUs7RUFDcEMsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbIkxJQmRpY3Rpb25hcnkiLCAic3Rld2FyZCIsICJpZCIsICJhaW1nc3JjIiwgInNyYyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJwYXRyb2xsZXIiLCAic3VwcHJlc3MiLCAiYXV0b3Jldmlld2VyIiwgInNlbmlvcmVkaXRvciIsICIkIiwgIldpa2lVUkxOYW1lIiwgIndpbmRvdyIsICJsb2NhdGlvbiIsICJwYXRobmFtZSIsICJtYXRjaFJlc3VsdCIsICJ0ZXN0IiwgIl8iLCAidXNlck5hbWVNYXRjaCIsICJtYXRjaCIsICJVc2VyTWVzc2FnZSIsICJjb25jYXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjcmVhdGVWaXJ0dWFsTGlua0ltZyIsICJocmVmIiwgInRhZyIsICJwcm9wcyIsICJzdHlsZSIsICJjaGlsZHJlbiIsICJyZW5kZXJWaXJ0dWFsRE9NIiwgInZpcnR1YWxET00iLCAiY29udGFpbmVyIiwgImpRdWVyeSIsICJjcmVhdGVSZWFsTm9kZSIsICJ2aXJ0dWFsTm9kZSIsICJyZWFsTm9kZSIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgInByb3BOYW1lIiwgImF0dHIiLCAiU3RyaW5nIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJjaGlsZFZpcnR1YWxOb2RlIiwgInZhbHVlIiwgImNoaWxkUmVhbE5vZGUiLCAiYXBwZW5kIiwgImVyciIsICJlIiwgImYiLCAicmVhbE5vZGVzIiwgIm1hcCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJub2RlIiwgIkFycmF5RGF0YVNvcnQiLCAiZGF0YUFycmF5IiwgInNvcnQiLCAiYSIsICJiIiwgInNsaWNlIiwgImZldGNoVXNlckRhdGEiLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInJlamVjdCIsICJFcnJvciIsICJkYXRhIiwgInVzZXJEYXRhIiwgImdyb3VwcyIsICJxdWVyeSIsICJ1c2VycyIsICJjb25zb2xlIiwgImxvZyIsICJ0aGVuIiwgImNhdGNoIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiZXJyb3IiLCAibWF0Y2hlZEdyb3VwcyIsICJmaWx0ZXIiLCAiZ3JvdXAiLCAiaGFzT3duIiwgImZpcnN0VGhyZWVJdGVtcyIsICJpbWdEYXRhIiwgIiRib2R5IiwgIiRkb21tb3VudHBvaW50IiwgImZpbmQiXQp9Cg==
