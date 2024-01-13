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
//! src/Wikicache/modules/messages.js
var messages = {
  "no-reminder": "不再提醒",
  more: wgULS("更多信息", "更多資訊"),
  ok: wgULS("确定", "確認"),
  load: wgULS("载入", "載入"),
  ignore: wgULS("忽略", "忽略"),
  "bracket-left": "（",
  "bracket-right": "）",
  "notice-init": wgULS("自动保存已启用。", "自動存檔已啟用。"),
  "notice-more": wgULS("配置", "設定"),
  "notice-load": wgULS("载入上次存档", "載入上次存檔"),
  "notice-autosave-success": wgULS("自动保存成功。", "自動存檔成功。"),
  "notice-autosave-failed": wgULS("自动保存失败，可能是由于已超出浏览器所允许空间上限。", "自動存檔失敗，可能是由於已超過瀏覽器所許可空間上限。"),
  "notice-autosave-failed-clear": wgULS("清理", "清理"),
  "notice-load-available": wgULS("发现自动保存结果，是否载入？", "發現自動存檔，是否載入？"),
  "notice-load-available-confirm": wgULS("载入", "載入"),
  "notice-load-available-ignore": wgULS("忽略", "忽略"),
  "settings-title": wgULS("WikiCache配置", "WikiCache設定"),
  "settings-autosave-interval": wgULS("自动保存间隔：", "自動保存間隔："),
  "settings-autosave-interval-suffix": wgULS("秒", "秒"),
  "settings-autosave-interval-too-small": wgULS("错误：“自动保存间隔”所设间隔过小（<10秒），请重新设置", "錯誤：「自動保存間隔」所設間隔過小（<10秒），請重新設定"),
  "settings-autosave-interval-invalid": wgULS("错误：请在“自动保存间隔”输入框中输入数字", "錯誤：請在「自動保存間隔」輸入框輸入數字")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9tb2R1bGVzL21lc3NhZ2VzLmpzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0ge1xuXHQnbm8tcmVtaW5kZXInOiAn5LiN5YaN5o+Q6YaSJyxcblx0bW9yZTogd2dVTFMoJ+abtOWkmuS/oeaBrycsICfmm7TlpJros4foqIonKSxcblx0b2s6IHdnVUxTKCfnoa7lrponLCAn56K66KqNJyksXG5cdGxvYWQ6IHdnVUxTKCfovb3lhaUnLCAn6LyJ5YWlJyksXG5cdGlnbm9yZTogd2dVTFMoJ+W/veeVpScsICflv73nlaUnKSxcblx0J2JyYWNrZXQtbGVmdCc6ICfvvIgnLFxuXHQnYnJhY2tldC1yaWdodCc6ICfvvIknLFxuXHQnbm90aWNlLWluaXQnOiB3Z1VMUygn6Ieq5Yqo5L+d5a2Y5bey5ZCv55So44CCJywgJ+iHquWLleWtmOaqlOW3suWVn+eUqOOAgicpLFxuXHQnbm90aWNlLW1vcmUnOiB3Z1VMUygn6YWN572uJywgJ+ioreWumicpLFxuXHQnbm90aWNlLWxvYWQnOiB3Z1VMUygn6L295YWl5LiK5qyh5a2Y5qGjJywgJ+i8ieWFpeS4iuasoeWtmOaqlCcpLFxuXHQnbm90aWNlLWF1dG9zYXZlLXN1Y2Nlc3MnOiB3Z1VMUygn6Ieq5Yqo5L+d5a2Y5oiQ5Yqf44CCJywgJ+iHquWLleWtmOaqlOaIkOWKn+OAgicpLFxuXHQnbm90aWNlLWF1dG9zYXZlLWZhaWxlZCc6IHdnVUxTKFxuXHRcdCfoh6rliqjkv53lrZjlpLHotKXvvIzlj6/og73mmK/nlLHkuo7lt7LotoXlh7rmtY/op4jlmajmiYDlhYHorrjnqbrpl7TkuIrpmZDjgIInLFxuXHRcdCfoh6rli5XlrZjmqpTlpLHmlZfvvIzlj6/og73mmK/nlLHmlrzlt7LotoXpgY7ngI/opr3lmajmiYDoqLHlj6/nqbrplpPkuIrpmZDjgIInXG5cdCksXG5cdCdub3RpY2UtYXV0b3NhdmUtZmFpbGVkLWNsZWFyJzogd2dVTFMoJ+a4heeQhicsICfmuIXnkIYnKSxcblx0J25vdGljZS1sb2FkLWF2YWlsYWJsZSc6IHdnVUxTKCflj5HnjrDoh6rliqjkv53lrZjnu5PmnpzvvIzmmK/lkKbovb3lhaXvvJ8nLCAn55m854++6Ieq5YuV5a2Y5qqU77yM5piv5ZCm6LyJ5YWl77yfJyksXG5cdCdub3RpY2UtbG9hZC1hdmFpbGFibGUtY29uZmlybSc6IHdnVUxTKCfovb3lhaUnLCAn6LyJ5YWlJyksXG5cdCdub3RpY2UtbG9hZC1hdmFpbGFibGUtaWdub3JlJzogd2dVTFMoJ+W/veeVpScsICflv73nlaUnKSxcblx0J3NldHRpbmdzLXRpdGxlJzogd2dVTFMoJ1dpa2lDYWNoZemFjee9ricsICdXaWtpQ2FjaGXoqK3lrponKSxcblx0J3NldHRpbmdzLWF1dG9zYXZlLWludGVydmFsJzogd2dVTFMoJ+iHquWKqOS/neWtmOmXtOmalO+8micsICfoh6rli5Xkv53lrZjplpPpmpTvvJonKSxcblx0J3NldHRpbmdzLWF1dG9zYXZlLWludGVydmFsLXN1ZmZpeCc6IHdnVUxTKCfnp5InLCAn56eSJyksXG5cdCdzZXR0aW5ncy1hdXRvc2F2ZS1pbnRlcnZhbC10b28tc21hbGwnOiB3Z1VMUyhcblx0XHQn6ZSZ6K+v77ya4oCc6Ieq5Yqo5L+d5a2Y6Ze06ZqU4oCd5omA6K6+6Ze06ZqU6L+H5bCP77yIPDEw56eS77yJ77yM6K+36YeN5paw6K6+572uJyxcblx0XHQn6Yyv6Kqk77ya44CM6Ieq5YuV5L+d5a2Y6ZaT6ZqU44CN5omA6Kit6ZaT6ZqU6YGO5bCP77yIPDEw56eS77yJ77yM6KuL6YeN5paw6Kit5a6aJ1xuXHQpLFxuXHQnc2V0dGluZ3MtYXV0b3NhdmUtaW50ZXJ2YWwtaW52YWxpZCc6IHdnVUxTKFxuXHRcdCfplJnor6/vvJror7flnKjigJzoh6rliqjkv53lrZjpl7TpmpTigJ3ovpPlhaXmoYbkuK3ovpPlhaXmlbDlrZcnLFxuXHRcdCfpjK/oqqTvvJroq4vlnKjjgIzoh6rli5Xkv53lrZjplpPpmpTjgI3ovLjlhaXmoYbovLjlhaXmlbjlrZcnXG5cdCksXG59O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcblxubGV0IGF1dG9TYXZlSWQgPSBudWxsO1xuXG5sZXQgc2V0dGluZ3MgPSB7XG5cdCdhdXRvc2F2ZS1pbnRlcnZhbCc6IDYwLFxufTtcblxuY29uc3QgYXV0b1NhdmVBcmVhID0ge1xuXHQnI3dwVGV4dGJveDEnOiAoZWwsIHZhbCkgPT4ge1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdGVsLnZhbCh2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWwudmFsKCk7XG5cdFx0fVxuXHR9LFxuXHQnI3dwU3VtbWFyeSc6IChlbCwgdmFsKSA9PiB7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0ZWwudmFsKHZhbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBlbC52YWwoKTtcblx0XHR9XG5cdH0sXG59O1xuXG5jb25zdCBpbml0VmlldyA9ICgpID0+IHtcblx0bG9hZFNldHRpbmdzKCk7XG59O1xuXG5jb25zdCBpbml0RWRpdCA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdCRib2R5LmZpbmQoJyNlZGl0Zm9ybScpLm9uKCd3aWtpQ2FjaGVTZXR0aW5nc1VwZGF0ZScsIGF1dG9TYXZlKS5vbignc3VibWl0Jywgb25TdWJtaXQpO1xuXHRsb2FkU2V0dGluZ3MoKTtcblx0ZGVmYXVsdE5vdGljZSgpO1xuXHRpZiAobG9jYXRpb24uaGFzaC5pbmNsdWRlcygnd2lraWNhY2hlPWF1dG9sb2FkJykpIHtcblx0XHRsb2FkKCk7XG5cdH0gZWxzZSB7XG5cdFx0aW5pdExvYWQoKTtcblx0fVxufTtcblxuY29uc3QgbG9hZFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBfc2V0dGluZ3MgPSBtdy5zdG9yYWdlLmdldE9iamVjdCgnd2lraWNhY2hlLXNldHRpbmdzJyk7XG5cdGlmIChfc2V0dGluZ3MgaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRzZXR0aW5ncyA9IHtcblx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0Li4uX3NldHRpbmdzLFxuXHRcdH07XG5cdH1cblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdCRib2R5LmZpbmQoJyNlZGl0Zm9ybScpLnRyaWdnZXIoJ3dpa2lDYWNoZVNldHRpbmdzVXBkYXRlJyk7XG59O1xuXG5jb25zdCBzYXZlU2V0dGluZ3MgPSAoKSA9PiB7XG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KCd3aWtpY2FjaGUtc2V0dGluZ3MnLCBzZXR0aW5ncyk7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHQkYm9keS5maW5kKCcjZWRpdGZvcm0nKS50cmlnZ2VyKCd3aWtpQ2FjaGVTZXR0aW5nc1VwZGF0ZScpO1xufTtcblxuY29uc3QgZGVmYXVsdE5vdGljZSA9ICgpID0+IHtcblx0Y29uc3QgbW9yZSA9IHt9O1xuXHRtb3JlW21lc3NhZ2VzWydub3RpY2UtbW9yZSddXSA9IHNldHRpbmdzRGlhbG9nO1xuXHRtb3JlW21lc3NhZ2VzWydub3RpY2UtbG9hZCddXSA9ICgpID0+IHtcblx0XHRsb2FkKCk7XG5cdH07XG5cdG5vdGljZShtZXNzYWdlc1snbm90aWNlLWluaXQnXSwgbW9yZSk7XG59O1xuXG5jb25zdCBub3RpY2UgPSAobXNnLCBtb3JlKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRsZXQgX25vdGljZSA9ICRib2R5LmZpbmQoJyNnYWRnZXQtd2lraWNhY2hlX19ub3RpY2UnKTtcblx0aWYgKF9ub3RpY2UubGVuZ3RoID09PSAwKSB7XG5cdFx0X25vdGljZSA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygndWktd2lkZ2V0LWNvbnRlbnQgZ2FkZ2V0LXdpa2ljYWNoZV9fbm90aWNlJylcblx0XHRcdC5hdHRyKCdpZCcsICdnYWRnZXQtd2lraWNhY2hlX19ub3RpY2UnKTtcblx0fVxuXHRfbm90aWNlLmVtcHR5KCkub2ZmKCdtb3VzZWVudGVyJykub2ZmKCdtb3VzZWxlYXZlJykuYXBwZW5kKG1zZykuYXBwZW5kVG8oJCgnYm9keScpKS5mYWRlSW4oKTtcblx0aWYgKG1vcmUgaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRfbm90aWNlXG5cdFx0XHQub24oJ21vdXNlZW50ZXInLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSAkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZ2FkZ2V0LXdpa2ljYWNoZV9fbW9yZScpXG5cdFx0XHRcdFx0LmFwcGVuZFRvKF9ub3RpY2UpXG5cdFx0XHRcdFx0LmFwcGVuZChtZXNzYWdlc1snYnJhY2tldC1sZWZ0J10pO1xuXHRcdFx0XHRsZXQgZmlyc3QgPSB0cnVlO1xuXHRcdFx0XHRlbGVtZW50LmFwcGVuZFRvKF9ub3RpY2UpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1lc3NhZ2UgaW4gbW9yZSkge1xuXHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihtb3JlLCBtZXNzYWdlKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChmaXJzdCkge1xuXHRcdFx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5hcHBlbmQoJyZuYnNwO3wmbmJzcDsnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbWVudC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICcjJykuaHRtbChtZXNzYWdlKS5vbignY2xpY2snLCBtb3JlW21lc3NhZ2VdKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbWVudC5hcHBlbmQobWVzc2FnZXNbJ2JyYWNrZXQtcmlnaHQnXSk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKCcuZ2FkZ2V0LXdpa2ljYWNoZV9fbW9yZScsIHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IHNldHRpbmdzRGlhbG9nID0gKCkgPT4ge1xuXHRjb25zdCBidXR0b25zID0ge307XG5cdGJ1dHRvbnNbbWVzc2FnZXNbJ29rJ11dID0gZnVuY3Rpb24gKCkge1xuXHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHR9O1xuXHRjb25zdCBkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdnYWRnZXQtd2lraWNhY2hlX19kaWFsb2cnKVxuXHRcdC5hdHRyKCd0aXRsZScsIG1lc3NhZ2VzWydzZXR0aW5ncy10aXRsZSddKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQkKCc8cD4nKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnYXV0b3NhdmUtaW50ZXJ2YWwnKS5odG1sKG1lc3NhZ2VzWydzZXR0aW5ncy1hdXRvc2F2ZS1pbnRlcnZhbCddKSlcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8aW5wdXQ+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0aWQ6ICdhdXRvc2F2ZS1pbnRlcnZhbCcsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRcdFx0c2l6ZTogNSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudmFsKHNldHRpbmdzWydhdXRvc2F2ZS1pbnRlcnZhbCddKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQoYCZuYnNwOyR7bWVzc2FnZXNbJ3NldHRpbmdzLWF1dG9zYXZlLWludGVydmFsLXN1ZmZpeCddfWApXG5cdFx0KTtcblx0ZGlhbG9nLmFwcGVuZFRvKCQoJ2JvZHknKSkuZGlhbG9nKHtcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdG1vZGFsOiB0cnVlLFxuXHRcdHdpZHRoOiA0MDAsXG5cdFx0YmVmb3JlQ2xvc2UoKSB7XG5cdFx0XHRsZXQgaW50ZXJ2YWwgPSAkKCcjYXV0b3NhdmUtaW50ZXJ2YWwnLCBkaWFsb2cpLnZhbCgpO1xuXHRcdFx0aWYgKE51bWJlci5pc05hTihpbnRlcnZhbCkpIHtcblx0XHRcdFx0bXcubm90aWZ5KG1lc3NhZ2VzWydzZXR0aW5ncy1hdXRvc2F2ZS1pbnRlcnZhbC1pbnZhbGlkJ10sIHt0YWc6ICd3aWtpQ2FjaGUnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGludGVydmFsLCAxMCk7XG5cdFx0XHRpZiAoaW50ZXJ2YWwgPCAxMCkge1xuXHRcdFx0XHRtdy5ub3RpZnkobWVzc2FnZXNbJ3NldHRpbmdzLWF1dG9zYXZlLWludGVydmFsLXRvby1zbWFsbCddLCB7dGFnOiAnd2lraUNhY2hlJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRzZXR0aW5nc1snYXV0b3NhdmUtaW50ZXJ2YWwnXSA9IGludGVydmFsO1xuXHRcdFx0c2F2ZVNldHRpbmdzKCk7XG5cdFx0fSxcblx0XHRidXR0b25zLFxuXHR9KTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgYXV0b1NhdmUgPSAoKSA9PiB7XG5cdGNsZWFyVGltZW91dChhdXRvU2F2ZUlkKTtcblx0YXV0b1NhdmVJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHNhdmUoKTtcblx0XHRhdXRvU2F2ZSgpO1xuXHR9LCBzZXR0aW5nc1snYXV0b3NhdmUtaW50ZXJ2YWwnXSAqIDEwMDApO1xufTtcblxuY29uc3Qgc2F2ZSA9ICgpID0+IHtcblx0Y29uc3QgYXNhcmVhID0gYXV0b1NhdmVBcmVhO1xuXHRjb25zdCBhdXRvc2F2ZSA9IHtcblx0XHRfcGF0aDogbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gsXG5cdFx0X2RhdGU6IG5ldyBEYXRlKCksXG5cdH07XG5cdGZvciAoY29uc3Qgc2VsZSBpbiBhc2FyZWEpIHtcblx0XHRpZiAoIU9iamVjdC5oYXNPd24oYXNhcmVhLCBzZWxlKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGF1dG9zYXZlW3NlbGVdID0gYXNhcmVhW3NlbGVdKCQoc2VsZSkpO1xuXHR9XG5cdGxldCB0aGVrZXkgPSBgd2lraWNhY2hlLWF1dG9zYXZlLSR7bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpfWA7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXTpmaXJzdCcpLnZhbCgpO1xuXHRpZiAoc2VjdGlvbikge1xuXHRcdHRoZWtleSArPSBgXyR7c2VjdGlvbn1gO1xuXHR9XG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KHRoZWtleSwgYXV0b3NhdmUsIDI1OTJlMyk7IC8vIDMwIGRheXNcblx0c2V0VGltZW91dChkZWZhdWx0Tm90aWNlLCAxMDAwKTtcbn07XG5cbmNvbnN0IGluaXRMb2FkID0gKCkgPT4ge1xuXHRsZXQgdGhla2V5ID0gYHdpa2ljYWNoZS1hdXRvc2F2ZS0ke213LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKX1gO1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3Qgc2VjdGlvbiA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl06Zmlyc3QnKS52YWwoKTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHR0aGVrZXkgKz0gYF8ke3NlY3Rpb259YDtcblx0fVxuXHRjb25zdCBhdXRvc2F2ZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KHRoZWtleSk7XG5cdGlmIChhdXRvc2F2ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuXHRcdGNvbnN0IG1vcmUgPSB7fTtcblx0XHRtb3JlW21lc3NhZ2VzWydub3RpY2UtbG9hZC1hdmFpbGFibGUtY29uZmlybSddXSA9ICgpID0+IHtcblx0XHRcdGxvYWQoYXV0b3NhdmUpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0bW9yZVttZXNzYWdlc1snbm90aWNlLWxvYWQtYXZhaWxhYmxlLWlnbm9yZSddXSA9ICgpID0+IHtcblx0XHRcdGRlZmF1bHROb3RpY2UoKTtcblx0XHRcdGF1dG9TYXZlKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRub3RpY2UobWVzc2FnZXNbJ25vdGljZS1sb2FkLWF2YWlsYWJsZSddLCBtb3JlKTtcblx0XHRjbGVhclRpbWVvdXQoYXV0b1NhdmVJZCk7XG5cdH1cbn07XG5cbmNvbnN0IGxvYWQgPSAoYXV0b3NhdmUpID0+IHtcblx0bGV0IF9hdXRvc2F2ZTtcblx0aWYgKGF1dG9zYXZlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG5cdFx0X2F1dG9zYXZlID0gYXV0b3NhdmU7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IHRoZWtleSA9IGB3aWtpY2FjaGUtYXV0b3NhdmUtJHttdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyl9YDtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXTpmaXJzdCcpLnZhbCgpO1xuXHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHR0aGVrZXkgKz0gYF8ke3NlY3Rpb259YDtcblx0XHR9XG5cdFx0X2F1dG9zYXZlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QodGhla2V5KTtcblx0fVxuXHRjb25zdCBhc2FyZWEgPSBhdXRvU2F2ZUFyZWE7XG5cdGZvciAoY29uc3Qgc2VsZSBpbiBhc2FyZWEpIHtcblx0XHRpZiAoIU9iamVjdC5oYXNPd24oYXNhcmVhLCBzZWxlKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGFzYXJlYVtzZWxlXSgkKHNlbGUpLCBfYXV0b3NhdmVbc2VsZV0pO1xuXHR9XG5cdGRlZmF1bHROb3RpY2UoKTtcblx0YXV0b1NhdmUoKTtcbn07XG5cbmNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuXHRzYXZlKCk7XG5cdGxldCB0aGVrZXkgPSBgd2lraWNhY2hlLWF1dG9zYXZlLSR7bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpfWA7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXTpmaXJzdCcpLnZhbCgpO1xuXHRpZiAoc2VjdGlvbikge1xuXHRcdHRoZWtleSArPSBgXyR7c2VjdGlvbn1gO1xuXHR9XG5cdG13LnN0b3JhZ2UucmVtb3ZlKHRoZWtleSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdCA9ICgpID0+IHtcblx0Y29uc3QgYWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhhY3Rpb24pKSB7XG5cdFx0aW5pdEVkaXQoKTtcblx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICd2aWV3Jykge1xuXHRcdGluaXRWaWV3KCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtpbml0fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmICh3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG5cdCQoaW5pdCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBRU8sSUFBTUEsV0FBVztFQUN2QixlQUFlO0VBQ2ZDLE1BQU1DLE1BQU0sUUFBUSxNQUFNO0VBQzFCQyxJQUFJRCxNQUFNLE1BQU0sSUFBSTtFQUNwQkUsTUFBTUYsTUFBTSxNQUFNLElBQUk7RUFDdEJHLFFBQVFILE1BQU0sTUFBTSxJQUFJO0VBQ3hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIs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O0FBQ3ZDLE1BQUksQ0FBQyxRQUFRLFFBQVEsRUFBRXpELFNBQVM2RCxNQUFNLEdBQUc7QUFDeEN2RSxhQUFTO0VBQ1YsV0FBV3VFLFdBQVcsUUFBUTtBQUM3QnpFLGFBQVM7RUFDVjtBQUNEOztBQ3RQQSxJQUFJMEUsT0FBT0MsY0FBYztBQUN4QnZFLElBQUVvRSxJQUFJO0FBQ1A7IiwKICAibmFtZXMiOiBbIm1lc3NhZ2VzIiwgIm1vcmUiLCAid2dVTFMiLCAib2siLCAibG9hZCIsICJpZ25vcmUiLCAiYXV0b1NhdmVJZCIsICJzZXR0aW5ncyIsICJhdXRvU2F2ZUFyZWEiLCAiI3dwVGV4dGJveDEiLCAiZWwiLCAidmFsIiwgIiN3cFN1bW1hcnkiLCAiaW5pdFZpZXciLCAibG9hZFNldHRpbmdzIiwgImluaXRFZGl0IiwgIiRib2R5IiwgIiQiLCAiZmluZCIsICJvbiIsICJhdXRvU2F2ZSIsICJvblN1Ym1pdCIsICJkZWZhdWx0Tm90aWNlIiwgImxvY2F0aW9uIiwgImhhc2giLCAiaW5jbHVkZXMiLCAiaW5pdExvYWQiLCAiX3NldHRpbmdzIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgIk9iamVjdCIsICJ0cmlnZ2VyIiwgInNhdmVTZXR0aW5ncyIsICJzZXRPYmplY3QiLCAic2V0dGluZ3NEaWFsb2ciLCAibm90aWNlIiwgIm1zZyIsICJfbm90aWNlIiwgImxlbmd0aCIsICJhZGRDbGFzcyIsICJhdHRyIiwgImVtcHR5IiwgIm9mZiIsICJhcHBlbmQiLCAiYXBwZW5kVG8iLCAiZmFkZUluIiwgImVsZW1lbnQiLCAiZmlyc3QiLCAibWVzc2FnZSIsICJoYXNPd24iLCAiaHRtbCIsICJyZW1vdmUiLCAiYnV0dG9ucyIsICJkaWFsb2ciLCAiaWQiLCAidHlwZSIsICJzaXplIiwgImNvbmNhdCIsICJkcmFnZ2FibGUiLCAibW9kYWwiLCAid2lkdGgiLCAiYmVmb3JlQ2xvc2UiLCAiaW50ZXJ2YWwiLCAiTnVtYmVyIiwgImlzTmFOIiwgIm5vdGlmeSIsICJ0YWciLCAicGFyc2VJbnQiLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAic2F2ZSIsICJhc2FyZWEiLCAiYXV0b3NhdmUiLCAiX3BhdGgiLCAicGF0aG5hbWUiLCAic2VhcmNoIiwgIl9kYXRlIiwgIkRhdGUiLCAic2VsZSIsICJ0aGVrZXkiLCAiY29uZmlnIiwgImdldCIsICJzZWN0aW9uIiwgIl9hdXRvc2F2ZSIsICJpbml0IiwgImFjdGlvbiIsICJ3aW5kb3ciLCAibG9jYWxTdG9yYWdlIl0KfQo=

})();

/* </nowiki> */
