/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/w/index.php?oldid=65190708}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikicache}
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

// dist/Wikicache/Wikicache.js
//! src/Wikicache/modules/messages.ts
var messages = {
  "no-reminder": "不再提醒",
  more: window.wgULS("更多信息", "更多資訊"),
  ok: window.wgULS("确定", "確認"),
  load: window.wgULS("载入", "載入"),
  ignore: window.wgULS("忽略", "忽略"),
  "bracket-left": "（",
  "bracket-right": "）",
  "notice-init": window.wgULS("自动保存已启用。", "自動存檔已啟用。"),
  "notice-more": window.wgULS("配置", "設定"),
  "notice-load": window.wgULS("载入上次存档", "載入上次存檔"),
  "notice-autosave-success": window.wgULS("自动保存成功。", "自動存檔成功。"),
  "notice-autosave-failed": window.wgULS("自动保存失败，可能是由于已超出浏览器所允许空间上限。", "自動存檔失敗，可能是由於已超過瀏覽器所許可空間上限。"),
  "notice-autosave-failed-clear": window.wgULS("清理", "清理"),
  "notice-load-available": window.wgULS("发现自动保存结果，是否载入？", "發現自動存檔，是否載入？"),
  "notice-load-available-confirm": window.wgULS("载入", "載入"),
  "notice-load-available-ignore": window.wgULS("忽略", "忽略"),
  "settings-title": window.wgULS("WikiCache配置", "WikiCache設定"),
  "settings-autosave-interval": window.wgULS("自动保存间隔：", "自動保存間隔："),
  "settings-autosave-interval-suffix": window.wgULS("秒", "秒"),
  "settings-autosave-interval-too-small": window.wgULS("错误：“自动保存间隔”所设间隔过小（<10秒），请重新设置", "錯誤：「自動保存間隔」所設間隔過小（<10秒），請重新設定"),
  "settings-autosave-interval-invalid": window.wgULS("错误：请在“自动保存间隔”输入框中输入数字", "錯誤：請在「自動保存間隔」輸入框輸入數字")
};
//! src/Wikicache/modules/core.js
var autoSaveId = null;
var settings = {
  "autosave-interval": 60
};
var autoSaveArea = {
  "#wpTextbox1": (el, val) => {
    if (val) {
      el.val(val);
    } else {
      return el.val();
    }
  },
  "#wpSummary": (el, val) => {
    if (val) {
      el.val(val);
    } else {
      return el.val();
    }
  }
};
var initView = () => {
  loadSettings();
};
var initEdit = () => {
  const $body = $("body");
  $body.find("#editform").on("wikiCacheSettingsUpdate", autoSave).on("submit", onSubmit);
  loadSettings();
  defaultNotice();
  if (location.hash.includes("wikicache=autoload")) {
    load();
  } else {
    initLoad();
  }
};
var loadSettings = () => {
  const _settings = mw.storage.getObject("wikicache-settings");
  if (_settings instanceof Object) {
    settings = {
      ...settings,
      ..._settings
    };
  }
  const $body = $("body");
  $body.find("#editform").trigger("wikiCacheSettingsUpdate");
};
var saveSettings = () => {
  mw.storage.setObject("wikicache-settings", settings);
  const $body = $("body");
  $body.find("#editform").trigger("wikiCacheSettingsUpdate");
};
var defaultNotice = () => {
  const more = {};
  more[messages["notice-more"]] = settingsDialog;
  more[messages["notice-load"]] = () => {
    load();
  };
  notice(messages["notice-init"], more);
};
var notice = (msg, more) => {
  const $body = $("body");
  let _notice = $body.find("#gadget-wikicache__notice");
  if (_notice.length === 0) {
    _notice = $("<div>").addClass("ui-widget-content gadget-wikicache__notice").attr("id", "gadget-wikicache__notice");
  }
  _notice.empty().off("mouseenter").off("mouseleave").append(msg).appendTo($("body")).fadeIn();
  if (more instanceof Object) {
    _notice.on("mouseenter", () => {
      const element = $("<span>").addClass("gadget-wikicache__more").appendTo(_notice).append(messages["bracket-left"]);
      let first = true;
      element.appendTo(_notice);
      for (const message in more) {
        if (!Object.hasOwn(more, message)) {
          continue;
        }
        if (first) {
          first = false;
        } else {
          element.append("&nbsp;|&nbsp;");
        }
        element.append($("<a>").attr("href", "#").html(message).on("click", more[message]));
      }
      element.append(messages["bracket-right"]);
    }).on("mouseleave", function() {
      $(".gadget-wikicache__more", this).remove();
    });
  }
};
var settingsDialog = () => {
  const buttons = {};
  buttons[messages["ok"]] = function() {
    $(this).dialog("close");
  };
  const dialog = $("<div>").addClass("gadget-wikicache__dialog").attr("title", messages["settings-title"]).append($("<p>").append($("<label>").attr("for", "autosave-interval").html(messages["settings-autosave-interval"])).append($("<input>").attr({
    id: "autosave-interval",
    type: "text",
    size: 5
  }).val(settings["autosave-interval"])).append("&nbsp;".concat(messages["settings-autosave-interval-suffix"])));
  dialog.appendTo($("body")).dialog({
    draggable: false,
    modal: true,
    width: 400,
    beforeClose() {
      let interval = $("#autosave-interval", dialog).val();
      if (Number.isNaN(interval)) {
        mw.notify(messages["settings-autosave-interval-invalid"], {
          tag: "wikiCache",
          type: "error"
        });
        return false;
      }
      interval = Number.parseInt(interval, 10);
      if (interval < 10) {
        mw.notify(messages["settings-autosave-interval-too-small"], {
          tag: "wikiCache",
          type: "error"
        });
        return false;
      }
      settings["autosave-interval"] = interval;
      saveSettings();
    },
    buttons
  });
  return false;
};
var autoSave = () => {
  clearTimeout(autoSaveId);
  autoSaveId = setTimeout(() => {
    save();
    autoSave();
  }, settings["autosave-interval"] * 1e3);
};
var save = () => {
  const asarea = autoSaveArea;
  const autosave = {
    _path: location.pathname + location.search,
    _date: /* @__PURE__ */ new Date()
  };
  for (const sele in asarea) {
    if (!Object.hasOwn(asarea, sele)) {
      continue;
    }
    autosave[sele] = asarea[sele]($(sele));
  }
  let thekey = "wikicache-autosave-".concat(mw.config.get("wgPageName"));
  const $body = $("body");
  const section = $body.find('input[name="wpSection"]:first').val();
  if (section) {
    thekey += "_".concat(section);
  }
  mw.storage.setObject(thekey, autosave, 2592e3);
  setTimeout(defaultNotice, 1e3);
};
var initLoad = () => {
  let thekey = "wikicache-autosave-".concat(mw.config.get("wgPageName"));
  const $body = $("body");
  const section = $body.find('input[name="wpSection"]:first').val();
  if (section) {
    thekey += "_".concat(section);
  }
  const autosave = mw.storage.getObject(thekey);
  if (autosave instanceof Object) {
    const more = {};
    more[messages["notice-load-available-confirm"]] = () => {
      load(autosave);
      return false;
    };
    more[messages["notice-load-available-ignore"]] = () => {
      defaultNotice();
      autoSave();
      return false;
    };
    notice(messages["notice-load-available"], more);
    clearTimeout(autoSaveId);
  }
};
var load = (autosave) => {
  let _autosave;
  if (autosave instanceof Object) {
    _autosave = autosave;
  } else {
    let thekey = "wikicache-autosave-".concat(mw.config.get("wgPageName"));
    const $body = $("body");
    const section = $body.find('input[name="wpSection"]:first').val();
    if (section) {
      thekey += "_".concat(section);
    }
    _autosave = mw.storage.getObject(thekey);
  }
  const asarea = autoSaveArea;
  for (const sele in asarea) {
    if (!Object.hasOwn(asarea, sele)) {
      continue;
    }
    asarea[sele]($(sele), _autosave[sele]);
  }
  defaultNotice();
  autoSave();
};
var onSubmit = () => {
  save();
  let thekey = "wikicache-autosave-".concat(mw.config.get("wgPageName"));
  const $body = $("body");
  const section = $body.find('input[name="wpSection"]:first').val();
  if (section) {
    thekey += "_".concat(section);
  }
  mw.storage.remove(thekey);
};
var init = () => {
  const action = mw.config.get("wgAction");
  if (["edit", "submit"].includes(action)) {
    initEdit();
  } else if (action === "view") {
    initView();
  }
};
//! src/Wikicache/Wikicache.js
if (window.localStorage) {
  $(init);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBtZXNzYWdlczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdCduby1yZW1pbmRlcic6ICfkuI3lho3mj5DphpInLFxuXHRtb3JlOiB3aW5kb3cud2dVTFMoJ+abtOWkmuS/oeaBrycsICfmm7TlpJros4foqIonKSxcblx0b2s6IHdpbmRvdy53Z1VMUygn56Gu5a6aJywgJ+eiuuiqjScpLFxuXHRsb2FkOiB3aW5kb3cud2dVTFMoJ+i9veWFpScsICfovInlhaUnKSxcblx0aWdub3JlOiB3aW5kb3cud2dVTFMoJ+W/veeVpScsICflv73nlaUnKSxcblx0J2JyYWNrZXQtbGVmdCc6ICfvvIgnLFxuXHQnYnJhY2tldC1yaWdodCc6ICfvvIknLFxuXHQnbm90aWNlLWluaXQnOiB3aW5kb3cud2dVTFMoJ+iHquWKqOS/neWtmOW3suWQr+eUqOOAgicsICfoh6rli5XlrZjmqpTlt7LllZ/nlKjjgIInKSxcblx0J25vdGljZS1tb3JlJzogd2luZG93LndnVUxTKCfphY3nva4nLCAn6Kit5a6aJyksXG5cdCdub3RpY2UtbG9hZCc6IHdpbmRvdy53Z1VMUygn6L295YWl5LiK5qyh5a2Y5qGjJywgJ+i8ieWFpeS4iuasoeWtmOaqlCcpLFxuXHQnbm90aWNlLWF1dG9zYXZlLXN1Y2Nlc3MnOiB3aW5kb3cud2dVTFMoJ+iHquWKqOS/neWtmOaIkOWKn+OAgicsICfoh6rli5XlrZjmqpTmiJDlip/jgIInKSxcblx0J25vdGljZS1hdXRvc2F2ZS1mYWlsZWQnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+iHquWKqOS/neWtmOWksei0pe+8jOWPr+iDveaYr+eUseS6juW3sui2heWHuua1j+iniOWZqOaJgOWFgeiuuOepuumXtOS4iumZkOOAgicsXG5cdFx0J+iHquWLleWtmOaqlOWkseaVl++8jOWPr+iDveaYr+eUseaWvOW3sui2hemBjueAj+imveWZqOaJgOioseWPr+epuumWk+S4iumZkOOAgidcblx0KSxcblx0J25vdGljZS1hdXRvc2F2ZS1mYWlsZWQtY2xlYXInOiB3aW5kb3cud2dVTFMoJ+a4heeQhicsICfmuIXnkIYnKSxcblx0J25vdGljZS1sb2FkLWF2YWlsYWJsZSc6IHdpbmRvdy53Z1VMUygn5Y+R546w6Ieq5Yqo5L+d5a2Y57uT5p6c77yM5piv5ZCm6L295YWl77yfJywgJ+eZvOePvuiHquWLleWtmOaqlO+8jOaYr+WQpui8ieWFpe+8nycpLFxuXHQnbm90aWNlLWxvYWQtYXZhaWxhYmxlLWNvbmZpcm0nOiB3aW5kb3cud2dVTFMoJ+i9veWFpScsICfovInlhaUnKSxcblx0J25vdGljZS1sb2FkLWF2YWlsYWJsZS1pZ25vcmUnOiB3aW5kb3cud2dVTFMoJ+W/veeVpScsICflv73nlaUnKSxcblx0J3NldHRpbmdzLXRpdGxlJzogd2luZG93LndnVUxTKCdXaWtpQ2FjaGXphY3nva4nLCAnV2lraUNhY2hl6Kit5a6aJyksXG5cdCdzZXR0aW5ncy1hdXRvc2F2ZS1pbnRlcnZhbCc6IHdpbmRvdy53Z1VMUygn6Ieq5Yqo5L+d5a2Y6Ze06ZqU77yaJywgJ+iHquWLleS/neWtmOmWk+malO+8micpLFxuXHQnc2V0dGluZ3MtYXV0b3NhdmUtaW50ZXJ2YWwtc3VmZml4Jzogd2luZG93LndnVUxTKCfnp5InLCAn56eSJyksXG5cdCdzZXR0aW5ncy1hdXRvc2F2ZS1pbnRlcnZhbC10b28tc21hbGwnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+mUmeivr++8muKAnOiHquWKqOS/neWtmOmXtOmalOKAneaJgOiuvumXtOmalOi/h+Wwj++8iDwxMOenku+8ie+8jOivt+mHjeaWsOiuvue9ricsXG5cdFx0J+mMr+iqpO+8muOAjOiHquWLleS/neWtmOmWk+malOOAjeaJgOioremWk+malOmBjuWwj++8iDwxMOenku+8ie+8jOiri+mHjeaWsOioreWumidcblx0KSxcblx0J3NldHRpbmdzLWF1dG9zYXZlLWludGVydmFsLWludmFsaWQnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+mUmeivr++8muivt+WcqOKAnOiHquWKqOS/neWtmOmXtOmalOKAnei+k+WFpeahhuS4rei+k+WFpeaVsOWtlycsXG5cdFx0J+mMr+iqpO+8muiri+WcqOOAjOiHquWLleS/neWtmOmWk+malOOAjei8uOWFpeahhui8uOWFpeaVuOWtlydcblx0KSxcbn07XG5cbmV4cG9ydCB7bWVzc2FnZXN9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcblxubGV0IGF1dG9TYXZlSWQgPSBudWxsO1xuXG5sZXQgc2V0dGluZ3MgPSB7XG5cdCdhdXRvc2F2ZS1pbnRlcnZhbCc6IDYwLFxufTtcblxuY29uc3QgYXV0b1NhdmVBcmVhID0ge1xuXHQnI3dwVGV4dGJveDEnOiAoZWwsIHZhbCkgPT4ge1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdGVsLnZhbCh2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWwudmFsKCk7XG5cdFx0fVxuXHR9LFxuXHQnI3dwU3VtbWFyeSc6IChlbCwgdmFsKSA9PiB7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0ZWwudmFsKHZhbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBlbC52YWwoKTtcblx0XHR9XG5cdH0sXG59O1xuXG5jb25zdCBpbml0VmlldyA9ICgpID0+IHtcblx0bG9hZFNldHRpbmdzKCk7XG59O1xuXG5jb25zdCBpbml0RWRpdCA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdCRib2R5LmZpbmQoJyNlZGl0Zm9ybScpLm9uKCd3aWtpQ2FjaGVTZXR0aW5nc1VwZGF0ZScsIGF1dG9TYXZlKS5vbignc3VibWl0Jywgb25TdWJtaXQpO1xuXHRsb2FkU2V0dGluZ3MoKTtcblx0ZGVmYXVsdE5vdGljZSgpO1xuXHRpZiAobG9jYXRpb24uaGFzaC5pbmNsdWRlcygnd2lraWNhY2hlPWF1dG9sb2FkJykpIHtcblx0XHRsb2FkKCk7XG5cdH0gZWxzZSB7XG5cdFx0aW5pdExvYWQoKTtcblx0fVxufTtcblxuY29uc3QgbG9hZFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBfc2V0dGluZ3MgPSBtdy5zdG9yYWdlLmdldE9iamVjdCgnd2lraWNhY2hlLXNldHRpbmdzJyk7XG5cdGlmIChfc2V0dGluZ3MgaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRzZXR0aW5ncyA9IHtcblx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0Li4uX3NldHRpbmdzLFxuXHRcdH07XG5cdH1cblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdCRib2R5LmZpbmQoJyNlZGl0Zm9ybScpLnRyaWdnZXIoJ3dpa2lDYWNoZVNldHRpbmdzVXBkYXRlJyk7XG59O1xuXG5jb25zdCBzYXZlU2V0dGluZ3MgPSAoKSA9PiB7XG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KCd3aWtpY2FjaGUtc2V0dGluZ3MnLCBzZXR0aW5ncyk7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHQkYm9keS5maW5kKCcjZWRpdGZvcm0nKS50cmlnZ2VyKCd3aWtpQ2FjaGVTZXR0aW5nc1VwZGF0ZScpO1xufTtcblxuY29uc3QgZGVmYXVsdE5vdGljZSA9ICgpID0+IHtcblx0Y29uc3QgbW9yZSA9IHt9O1xuXHRtb3JlW21lc3NhZ2VzWydub3RpY2UtbW9yZSddXSA9IHNldHRpbmdzRGlhbG9nO1xuXHRtb3JlW21lc3NhZ2VzWydub3RpY2UtbG9hZCddXSA9ICgpID0+IHtcblx0XHRsb2FkKCk7XG5cdH07XG5cdG5vdGljZShtZXNzYWdlc1snbm90aWNlLWluaXQnXSwgbW9yZSk7XG59O1xuXG5jb25zdCBub3RpY2UgPSAobXNnLCBtb3JlKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRsZXQgX25vdGljZSA9ICRib2R5LmZpbmQoJyNnYWRnZXQtd2lraWNhY2hlX19ub3RpY2UnKTtcblx0aWYgKF9ub3RpY2UubGVuZ3RoID09PSAwKSB7XG5cdFx0X25vdGljZSA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygndWktd2lkZ2V0LWNvbnRlbnQgZ2FkZ2V0LXdpa2ljYWNoZV9fbm90aWNlJylcblx0XHRcdC5hdHRyKCdpZCcsICdnYWRnZXQtd2lraWNhY2hlX19ub3RpY2UnKTtcblx0fVxuXHRfbm90aWNlLmVtcHR5KCkub2ZmKCdtb3VzZWVudGVyJykub2ZmKCdtb3VzZWxlYXZlJykuYXBwZW5kKG1zZykuYXBwZW5kVG8oJCgnYm9keScpKS5mYWRlSW4oKTtcblx0aWYgKG1vcmUgaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRfbm90aWNlXG5cdFx0XHQub24oJ21vdXNlZW50ZXInLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSAkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZ2FkZ2V0LXdpa2ljYWNoZV9fbW9yZScpXG5cdFx0XHRcdFx0LmFwcGVuZFRvKF9ub3RpY2UpXG5cdFx0XHRcdFx0LmFwcGVuZChtZXNzYWdlc1snYnJhY2tldC1sZWZ0J10pO1xuXHRcdFx0XHRsZXQgZmlyc3QgPSB0cnVlO1xuXHRcdFx0XHRlbGVtZW50LmFwcGVuZFRvKF9ub3RpY2UpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1lc3NhZ2UgaW4gbW9yZSkge1xuXHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihtb3JlLCBtZXNzYWdlKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChmaXJzdCkge1xuXHRcdFx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5hcHBlbmQoJyZuYnNwO3wmbmJzcDsnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbWVudC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICcjJykuaHRtbChtZXNzYWdlKS5vbignY2xpY2snLCBtb3JlW21lc3NhZ2VdKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbWVudC5hcHBlbmQobWVzc2FnZXNbJ2JyYWNrZXQtcmlnaHQnXSk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKCcuZ2FkZ2V0LXdpa2ljYWNoZV9fbW9yZScsIHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IHNldHRpbmdzRGlhbG9nID0gKCkgPT4ge1xuXHRjb25zdCBidXR0b25zID0ge307XG5cdGJ1dHRvbnNbbWVzc2FnZXNbJ29rJ11dID0gZnVuY3Rpb24gKCkge1xuXHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHR9O1xuXHRjb25zdCBkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdnYWRnZXQtd2lraWNhY2hlX19kaWFsb2cnKVxuXHRcdC5hdHRyKCd0aXRsZScsIG1lc3NhZ2VzWydzZXR0aW5ncy10aXRsZSddKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQkKCc8cD4nKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnYXV0b3NhdmUtaW50ZXJ2YWwnKS5odG1sKG1lc3NhZ2VzWydzZXR0aW5ncy1hdXRvc2F2ZS1pbnRlcnZhbCddKSlcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8aW5wdXQ+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0aWQ6ICdhdXRvc2F2ZS1pbnRlcnZhbCcsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRcdFx0c2l6ZTogNSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudmFsKHNldHRpbmdzWydhdXRvc2F2ZS1pbnRlcnZhbCddKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQoYCZuYnNwOyR7bWVzc2FnZXNbJ3NldHRpbmdzLWF1dG9zYXZlLWludGVydmFsLXN1ZmZpeCddfWApXG5cdFx0KTtcblx0ZGlhbG9nLmFwcGVuZFRvKCQoJ2JvZHknKSkuZGlhbG9nKHtcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdG1vZGFsOiB0cnVlLFxuXHRcdHdpZHRoOiA0MDAsXG5cdFx0YmVmb3JlQ2xvc2UoKSB7XG5cdFx0XHRsZXQgaW50ZXJ2YWwgPSAkKCcjYXV0b3NhdmUtaW50ZXJ2YWwnLCBkaWFsb2cpLnZhbCgpO1xuXHRcdFx0aWYgKE51bWJlci5pc05hTihpbnRlcnZhbCkpIHtcblx0XHRcdFx0bXcubm90aWZ5KG1lc3NhZ2VzWydzZXR0aW5ncy1hdXRvc2F2ZS1pbnRlcnZhbC1pbnZhbGlkJ10sIHt0YWc6ICd3aWtpQ2FjaGUnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGludGVydmFsLCAxMCk7XG5cdFx0XHRpZiAoaW50ZXJ2YWwgPCAxMCkge1xuXHRcdFx0XHRtdy5ub3RpZnkobWVzc2FnZXNbJ3NldHRpbmdzLWF1dG9zYXZlLWludGVydmFsLXRvby1zbWFsbCddLCB7dGFnOiAnd2lraUNhY2hlJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRzZXR0aW5nc1snYXV0b3NhdmUtaW50ZXJ2YWwnXSA9IGludGVydmFsO1xuXHRcdFx0c2F2ZVNldHRpbmdzKCk7XG5cdFx0fSxcblx0XHRidXR0b25zLFxuXHR9KTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgYXV0b1NhdmUgPSAoKSA9PiB7XG5cdGNsZWFyVGltZW91dChhdXRvU2F2ZUlkKTtcblx0YXV0b1NhdmVJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHNhdmUoKTtcblx0XHRhdXRvU2F2ZSgpO1xuXHR9LCBzZXR0aW5nc1snYXV0b3NhdmUtaW50ZXJ2YWwnXSAqIDEwMDApO1xufTtcblxuY29uc3Qgc2F2ZSA9ICgpID0+IHtcblx0Y29uc3QgYXNhcmVhID0gYXV0b1NhdmVBcmVhO1xuXHRjb25zdCBhdXRvc2F2ZSA9IHtcblx0XHRfcGF0aDogbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gsXG5cdFx0X2RhdGU6IG5ldyBEYXRlKCksXG5cdH07XG5cdGZvciAoY29uc3Qgc2VsZSBpbiBhc2FyZWEpIHtcblx0XHRpZiAoIU9iamVjdC5oYXNPd24oYXNhcmVhLCBzZWxlKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGF1dG9zYXZlW3NlbGVdID0gYXNhcmVhW3NlbGVdKCQoc2VsZSkpO1xuXHR9XG5cdGxldCB0aGVrZXkgPSBgd2lraWNhY2hlLWF1dG9zYXZlLSR7bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpfWA7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXTpmaXJzdCcpLnZhbCgpO1xuXHRpZiAoc2VjdGlvbikge1xuXHRcdHRoZWtleSArPSBgXyR7c2VjdGlvbn1gO1xuXHR9XG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KHRoZWtleSwgYXV0b3NhdmUsIDI1OTJlMyk7IC8vIDMwIGRheXNcblx0c2V0VGltZW91dChkZWZhdWx0Tm90aWNlLCAxMDAwKTtcbn07XG5cbmNvbnN0IGluaXRMb2FkID0gKCkgPT4ge1xuXHRsZXQgdGhla2V5ID0gYHdpa2ljYWNoZS1hdXRvc2F2ZS0ke213LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKX1gO1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3Qgc2VjdGlvbiA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl06Zmlyc3QnKS52YWwoKTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHR0aGVrZXkgKz0gYF8ke3NlY3Rpb259YDtcblx0fVxuXHRjb25zdCBhdXRvc2F2ZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KHRoZWtleSk7XG5cdGlmIChhdXRvc2F2ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuXHRcdGNvbnN0IG1vcmUgPSB7fTtcblx0XHRtb3JlW21lc3NhZ2VzWydub3RpY2UtbG9hZC1hdmFpbGFibGUtY29uZmlybSddXSA9ICgpID0+IHtcblx0XHRcdGxvYWQoYXV0b3NhdmUpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0bW9yZVttZXNzYWdlc1snbm90aWNlLWxvYWQtYXZhaWxhYmxlLWlnbm9yZSddXSA9ICgpID0+IHtcblx0XHRcdGRlZmF1bHROb3RpY2UoKTtcblx0XHRcdGF1dG9TYXZlKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRub3RpY2UobWVzc2FnZXNbJ25vdGljZS1sb2FkLWF2YWlsYWJsZSddLCBtb3JlKTtcblx0XHRjbGVhclRpbWVvdXQoYXV0b1NhdmVJZCk7XG5cdH1cbn07XG5cbmNvbnN0IGxvYWQgPSAoYXV0b3NhdmUpID0+IHtcblx0bGV0IF9hdXRvc2F2ZTtcblx0aWYgKGF1dG9zYXZlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG5cdFx0X2F1dG9zYXZlID0gYXV0b3NhdmU7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IHRoZWtleSA9IGB3aWtpY2FjaGUtYXV0b3NhdmUtJHttdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyl9YDtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXTpmaXJzdCcpLnZhbCgpO1xuXHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHR0aGVrZXkgKz0gYF8ke3NlY3Rpb259YDtcblx0XHR9XG5cdFx0X2F1dG9zYXZlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QodGhla2V5KTtcblx0fVxuXHRjb25zdCBhc2FyZWEgPSBhdXRvU2F2ZUFyZWE7XG5cdGZvciAoY29uc3Qgc2VsZSBpbiBhc2FyZWEpIHtcblx0XHRpZiAoIU9iamVjdC5oYXNPd24oYXNhcmVhLCBzZWxlKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGFzYXJlYVtzZWxlXSgkKHNlbGUpLCBfYXV0b3NhdmVbc2VsZV0pO1xuXHR9XG5cdGRlZmF1bHROb3RpY2UoKTtcblx0YXV0b1NhdmUoKTtcbn07XG5cbmNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuXHRzYXZlKCk7XG5cdGxldCB0aGVrZXkgPSBgd2lraWNhY2hlLWF1dG9zYXZlLSR7bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpfWA7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXTpmaXJzdCcpLnZhbCgpO1xuXHRpZiAoc2VjdGlvbikge1xuXHRcdHRoZWtleSArPSBgXyR7c2VjdGlvbn1gO1xuXHR9XG5cdG13LnN0b3JhZ2UucmVtb3ZlKHRoZWtleSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdCA9ICgpID0+IHtcblx0Y29uc3QgYWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhhY3Rpb24pKSB7XG5cdFx0aW5pdEVkaXQoKTtcblx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICd2aWV3Jykge1xuXHRcdGluaXRWaWV3KCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtpbml0fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmICh3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG5cdCQoaW5pdCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBQUEsSUFBTUEsV0FBb0M7RUFDekMsZUFBZTtFQUNmQyxNQUFNQyxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUNqQ0MsSUFBSUYsT0FBT0MsTUFB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QUFNa0UsVUFBVW5FLE1BQU1FLEtBQUssK0JBQStCLEVBQUVQLElBQUk7QUFDaEUsTUFBSXdFLFNBQVM7QUFDWkgsY0FBQSxJQUFBdEIsT0FBY3lCLE9BQU87RUFDdEI7QUFDQXZELEtBQUdDLFFBQVF1QixPQUFPNEIsTUFBTTtBQUN6QjtBQUVPLElBQU1LLE9BQU9BLE1BQU07QUFDekIsUUFBTUMsU0FBUzFELEdBQUdxRCxPQUFPQyxJQUFJLFVBQVU7QUFDdkMsTUFBSSxDQUFDLFFBQVEsUUFBUSxFQUFFekQsU0FBUzZELE1BQU0sR0FBRztBQUN4Q3ZFLGFBQVM7RUFDVixXQUFXdUUsV0FBVyxRQUFRO0FBQzdCekUsYUFBUztFQUNWO0FBQ0Q7O0FDdFBBLElBQUlaLE9BQU9zRixjQUFjO0FBQ3hCdEUsSUFBRW9FLElBQUk7QUFDUDsiLAogICJuYW1lcyI6IFsibWVzc2FnZXMiLCAibW9yZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAib2siLCAibG9hZCIsICJpZ25vcmUiLCAiYXV0b1NhdmVJZCIsICJzZXR0aW5ncyIsICJhdXRvU2F2ZUFyZWEiLCAiI3dwVGV4dGJveDEiLCAiZWwiLCAidmFsIiwgIiN3cFN1bW1hcnkiLCAiaW5pdFZpZXciLCAibG9hZFNldHRpbmdzIiwgImluaXRFZGl0IiwgIiRib2R5IiwgIiQiLCAiZmluZCIsICJvbiIsICJhdXRvU2F2ZSIsICJvblN1Ym1pdCIsICJkZWZhdWx0Tm90aWNlIiwgImxvY2F0aW9uIiwgImhhc2giLCAiaW5jbHVkZXMiLCAiaW5pdExvYWQiLCAiX3NldHRpbmdzIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgIk9iamVjdCIsICJ0cmlnZ2VyIiwgInNhdmVTZXR0aW5ncyIsICJzZXRPYmplY3QiLCAic2V0dGluZ3NEaWFsb2ciLCAibm90aWNlIiwgIm1zZyIsICJfbm90aWNlIiwgImxlbmd0aCIsICJhZGRDbGFzcyIsICJhdHRyIiwgImVtcHR5IiwgIm9mZiIsICJhcHBlbmQiLCAiYXBwZW5kVG8iLCAiZmFkZUluIiwgImVsZW1lbnQiLCAiZmlyc3QiLCAibWVzc2FnZSIsICJoYXNPd24iLCAiaHRtbCIsICJyZW1vdmUiLCAiYnV0dG9ucyIsICJkaWFsb2ciLCAiaWQiLCAidHlwZSIsICJzaXplIiwgImNvbmNhdCIsICJkcmFnZ2FibGUiLCAibW9kYWwiLCAid2lkdGgiLCAiYmVmb3JlQ2xvc2UiLCAiaW50ZXJ2YWwiLCAiTnVtYmVyIiwgImlzTmFOIiwgIm5vdGlmeSIsICJ0YWciLCAicGFyc2VJbnQiLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAic2F2ZSIsICJhc2FyZWEiLCAiYXV0b3NhdmUiLCAiX3BhdGgiLCAicGF0aG5hbWUiLCAic2VhcmNoIiwgIl9kYXRlIiwgIkRhdGUiLCAic2VsZSIsICJ0aGVrZXkiLCAiY29uZmlnIiwgImdldCIsICJzZWN0aW9uIiwgIl9hdXRvc2F2ZSIsICJpbml0IiwgImFjdGlvbiIsICJsb2NhbFN0b3JhZ2UiXQp9Cg==

})();

/* </nowiki> */
