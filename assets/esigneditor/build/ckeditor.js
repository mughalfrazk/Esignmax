/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(function(t) { t["en"] = Object.assign(t["en"] || {}, { a: "Image toolbar", b: "Media toolbar", c: "Table toolbar", d: "Saving changes", e: "Align left", f: "Align right", g: "Align center", h: "Justify", i: "Text alignment", j: "Text alignment toolbar", k: "Block quote", l: "Choose heading", m: "Heading", n: "Yellow marker", o: "Green marker", p: "Pink marker", q: "Blue marker", r: "Red pen", s: "Green pen", t: "Remove highlight", u: "Highlight", v: "Text highlight toolbar", w: "Increase indent", x: "Decrease indent", y: "Link", z: "Numbered List", aa: "Bulleted List", ab: "media widget", ac: "Bold", ad: "Italic", ae: "Strikethrough", af: "Underline", ag: "Code", ah: "Font Family", ai: "Default", aj: "Font Size", ak: "Tiny", al: "Small", am: "Big", an: "Huge", ao: "image widget", ap: "Enter image caption", aq: "Full size image", ar: "Side image", as: "Left aligned image", at: "Centered image", au: "Right aligned image", av: "Insert image", aw: "Upload failed", ax: "Widget toolbar", ay: "To-do List", az: "Insert image or file", ba: "Remove Format", bb: "Page break", bc: "Horizontal line", bd: "Insert code block", be: "Change image text alternative", bf: "Cannot upload file:", bg: "Upload in progress", bh: "Editor toolbar", bi: "Show more items", bj: "%0 of %1", bk: "Previous", bl: "Next", bm: "Could not obtain resized image URL.", bn: "Selecting resized image failed", bo: "Could not insert image at the current position.", bp: "Inserting image failed", bq: "Plain text", br: "Dropdown toolbar", bs: "Undo", bt: "Redo", bu: "Save", bv: "Cancel", bw: "Text alternative", bx: "Black", by: "Dim grey", bz: "Grey", ca: "Light grey", cb: "White", cc: "Red", cd: "Orange", ce: "Yellow", cf: "Light green", cg: "Green", ch: "Aquamarine", ci: "Turquoise", cj: "Light blue", ck: "Blue", cl: "Purple", cm: "Unlink", cn: "Edit link", co: "Open link in new tab", cp: "This link has no URL", cq: "Link URL", cr: "Open in a new tab", cs: "Downloadable", ct: "Rich Text Editor, %0", cu: "Paragraph", cv: "Heading 1", cw: "Heading 2", cx: "Heading 3", cy: "Heading 4", cz: "Heading 5", da: "Heading 6", db: "Insert table", dc: "Header column", dd: "Insert column left", de: "Insert column right", df: "Delete column", dg: "Column", dh: "Header row", di: "Insert row below", dj: "Insert row above", dk: "Delete row", dl: "Row", dm: "Merge cell up", dn: "Merge cell right", do: "Merge cell down", dp: "Merge cell left", dq: "Split cell vertically", dr: "Split cell horizontally", ds: "Merge cells", dt: "Insert media", du: "The URL must not be empty.", dv: "This media URL is not supported.", dw: "Paste the media URL in the input.", dx: "Tip: Paste the URL into the content to embed faster.", dy: "Media URL" }) })(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
(function t(e, n) {
    if (typeof exports === "object" && typeof module === "object") module.exports = n();
    else if (typeof define === "function" && define.amd) define([], n);
    else if (typeof exports === "object") exports["DecoupledDocumentEditor"] = n();
    else e["DecoupledDocumentEditor"] = n()
})(window, (function() {
            return function(t) {
                    var e = {};

                    function n(i) {
                        if (e[i]) { return e[i].exports }
                        var o = e[i] = { i: i, l: false, exports: {} };
                        t[i].call(o.exports, o, o.exports, n);
                        o.l = true;
                        return o.exports
                    }
                    n.m = t;
                    n.c = e;
                    n.d = function(t, e, i) { if (!n.o(t, e)) { Object.defineProperty(t, e, { enumerable: true, get: i }) } };
                    n.r = function(t) {
                        if (typeof Symbol !== "undefined" && Symbol.toStringTag) { Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }) }
                        Object.defineProperty(t, "__esModule", { value: true })
                    };
                    n.t = function(t, e) {
                        if (e & 1) t = n(t);
                        if (e & 8) return t;
                        if (e & 4 && typeof t === "object" && t && t.__esModule) return t;
                        var i = Object.create(null);
                        n.r(i);
                        Object.defineProperty(i, "default", { enumerable: true, value: t });
                        if (e & 2 && typeof t != "string")
                            for (var o in t) n.d(i, o, function(e) { return t[e] }.bind(null, o));
                        return i
                    };
                    n.n = function(t) {
                        var e = t && t.__esModule ? function e() { return t["default"] } : function e() { return t };
                        n.d(e, "a", e);
                        return e
                    };
                    n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) };
                    n.p = "";
                    return n(n.s = 114)
                }([function(t, e, n) {
                            "use strict";
                            n.d(e, "b", (function() { return o }));
                            n.d(e, "a", (function() { return s }));
                            const i = "https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";
                            class o extends Error {
                                constructor(t, e, n) {
                                    t = s(t);
                                    if (n) { t += " " + JSON.stringify(n) }
                                    super(t);
                                    this.name = "CKEditorError";
                                    this.context = e;
                                    this.data = n
                                }
                                is(t) { return t === "CKEditorError" }
                                static rethrowUnexpectedError(t, e) {
                                    if (t.is && t.is("CKEditorError")) { throw t }
                                    const n = new o(t.message, e);
                                    n.stack = t.stack;
                                    throw n
                                }
                            }

                            function s(t) { const e = t.match(/^([^:]+):/); if (!e) { return t } return t + ` Read more: ${i}#error-${e[1]}\n` }
                        }, function(t, e, n) {
                            "use strict";
                            var i = function t() { var e; return function t() { if (typeof e === "undefined") { e = Boolean(window && document && document.all && !window.atob) } return e } }();
                            var o = function t() {
                                var e = {};
                                return function t(n) {
                                    if (typeof e[n] === "undefined") {
                                        var i = document.querySelector(n);
                                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) { try { i = i.contentDocument.head } catch (t) { i = null } }
                                        e[n] = i
                                    }
                                    return e[n]
                                }
                            }();
                            var s = {};

                            function r(t, e, n) { for (var i = 0; i < e.length; i++) { var o = { css: e[i][1], media: e[i][2], sourceMap: e[i][3] }; if (s[t][i]) { s[t][i](o) } else { s[t].push(g(o, n)) } } }

                            function a(t) {
                                var e = document.createElement("style");
                                var i = t.attributes || {};
                                if (typeof i.nonce === "undefined") { var s = true ? n.nc : undefined; if (s) { i.nonce = s } }
                                Object.keys(i).forEach((function(t) { e.setAttribute(t, i[t]) }));
                                if (typeof t.insert === "function") { t.insert(e) } else {
                                    var r = o(t.insert || "head");
                                    if (!r) { throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.") }
                                    r.appendChild(e)
                                }
                                return e
                            }

                            function c(t) {
                                if (t.parentNode === null) { return false }
                                t.parentNode.removeChild(t)
                            }
                            var l = function t() { var e = []; return function t(n, i) { e[n] = i; return e.filter(Boolean).join("\n") } }();

                            function d(t, e, n, i) { var o = n ? "" : i.css; if (t.styleSheet) { t.styleSheet.cssText = l(e, o) } else { var s = document.createTextNode(o); var r = t.childNodes; if (r[e]) { t.removeChild(r[e]) } if (r.length) { t.insertBefore(s, r[e]) } else { t.appendChild(s) } } }

                            function u(t, e, n) {
                                var i = n.css;
                                var o = n.media;
                                var s = n.sourceMap;
                                if (o) { t.setAttribute("media", o) } else { t.removeAttribute("media") }
                                if (s && btoa) { i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */") }
                                if (t.styleSheet) { t.styleSheet.cssText = i } else {
                                    while (t.firstChild) { t.removeChild(t.firstChild) }
                                    t.appendChild(document.createTextNode(i))
                                }
                            }
                            var h = null;
                            var f = 0;

                            function g(t, e) {
                                var n;
                                var i;
                                var o;
                                if (e.singleton) {
                                    var s = f++;
                                    n = h || (h = a(e));
                                    i = d.bind(null, n, s, false);
                                    o = d.bind(null, n, s, true)
                                } else {
                                    n = a(e);
                                    i = u.bind(null, n, e);
                                    o = function t() { c(n) }
                                }
                                i(t);
                                return function e(n) {
                                    if (n) {
                                        if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) { return }
                                        i(t = n)
                                    } else { o() }
                                }
                            }
                            t.exports = function(t, e, n) {
                                n = n || {};
                                if (!n.singleton && typeof n.singleton !== "boolean") { n.singleton = i() }
                                t = n.base ? t + n.base : t;
                                e = e || [];
                                if (!s[t]) { s[t] = [] }
                                r(t, e, n);
                                return function e(i) {
                                    i = i || [];
                                    if (Object.prototype.toString.call(i) !== "[object Array]") { return }
                                    if (!s[t]) { s[t] = [] }
                                    r(t, i, n);
                                    for (var o = i.length; o < s[t].length; o++) { s[t][o]() }
                                    s[t].length = i.length;
                                    if (s[t].length === 0) { delete s[t] }
                                }
                            }
                        }, , function(t, e, n) {
                            "use strict";
                            var i = n(7);
                            var o = typeof self == "object" && self && self.Object === Object && self;
                            var s = i["a"] || o || Function("return this")();
                            e["a"] = s
                        }, function(t, e, n) {
                            "use strict";
                            (function(t) {
                                var i = n(7);
                                var o = typeof exports == "object" && exports && !exports.nodeType && exports;
                                var s = o && typeof t == "object" && t && !t.nodeType && t;
                                var r = s && s.exports === o;
                                var a = r && i["a"].process;
                                var c = function() { try { var t = s && s.require && s.require("util").types; if (t) { return t } return a && a.binding && a.binding("util") } catch (t) {} }();
                                e["a"] = c
                            }).call(this, n(8)(t))
                        }, function(t, e, n) {
                            "use strict";
                            (function(t) {
                                var i = n(3);
                                var o = n(12);
                                var s = typeof exports == "object" && exports && !exports.nodeType && exports;
                                var r = s && typeof t == "object" && t && !t.nodeType && t;
                                var a = r && r.exports === s;
                                var c = a ? i["a"].Buffer : undefined;
                                var l = c ? c.isBuffer : undefined;
                                var d = l || o["a"];
                                e["a"] = d
                            }).call(this, n(8)(t))
                        }, function(t, e, n) {
                            "use strict";
                            (function(t) { var e = n(0); const i = "16.0.0"; const o = typeof window === "object" ? window : t; if (o.CKEDITOR_VERSION) { throw new e["b"]("ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated.", null) } else { o.CKEDITOR_VERSION = i } }).call(this, n(9))
                        }, function(t, e, n) {
                            "use strict";
                            (function(t) {
                                var n = typeof t == "object" && t && t.Object === Object && t;
                                e["a"] = n
                            }).call(this, n(9))
                        }, function(t, e) {
                            t.exports = function(t) {
                                if (!t.webpackPolyfill) {
                                    var e = Object.create(t);
                                    if (!e.children) e.children = [];
                                    Object.defineProperty(e, "loaded", { enumerable: true, get: function() { return e.l } });
                                    Object.defineProperty(e, "id", { enumerable: true, get: function() { return e.i } });
                                    Object.defineProperty(e, "exports", { enumerable: true });
                                    e.webpackPolyfill = 1
                                }
                                return e
                            }
                        }, function(t, e) {
                            var n;
                            n = function() { return this }();
                            try { n = n || new Function("return this")() } catch (t) { if (typeof window === "object") n = window }
                            t.exports = n
                        }, function(t, e, n) {
                            var i = n(1);
                            var o = n(48);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e, n) {
                            var i = n(1);
                            var o = n(99);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e, n) {
                            "use strict";

                            function i() { return false }
                            e["a"] = i
                        }, function(t, e, n) {
                            "use strict";
                            (function(t) {
                                var i = n(3);
                                var o = typeof exports == "object" && exports && !exports.nodeType && exports;
                                var s = o && typeof t == "object" && t && !t.nodeType && t;
                                var r = s && s.exports === o;
                                var a = r ? i["a"].Buffer : undefined,
                                    c = a ? a.allocUnsafe : undefined;

                                function l(t, e) {
                                    if (e) { return t.slice() }
                                    var n = t.length,
                                        i = c ? c(n) : new t.constructor(n);
                                    t.copy(i);
                                    return i
                                }
                                e["a"] = l
                            }).call(this, n(8)(t))
                        }, function(t, e, n) {
                            var i = n(1);
                            var o = n(15);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(17);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border:#1f89e5;--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(19);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(21);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{top:100%;bottom:auto}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(23);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(25);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = '.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s;border-style:solid;left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}' }, function(t, e, n) {
                            var i = n(1);
                            var o = n(27);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(-1*var(--ck-spacing-small));margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(29);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(31);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:1.3846153847em}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(-1*var(--ck-switch-button-translation)))}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(33);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-toolbar-dropdown .ck.ck-toolbar .ck.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(35);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(37);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>.ck-toolbar__items>*{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>.ck-toolbar__items>*,.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__grouped-dropdown,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{padding-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__items>*,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__items>*{margin-left:var(--ck-spacing-small);margin-right:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__items>:last-child,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__items>:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__grouped-dropdown,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{padding-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__items>:last-child,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__items>:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{margin-right:var(--ck-spacing-small)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(39);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(41);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{width:var(--ck-color-grid-tile-size);height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;border:0}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{display:none;color:var(--ck-color-color-grid-check-icon)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(43);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(45);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck .ck-button.ck-color-table__remove-color{display:flex;align-items:center;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(47);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".text-tiny{font-size:.7em}.text-small{font-size:.85em}.text-big{font-size:1.4em}.text-huge{font-size:1.8em}" }, function(t, e) { t.exports = ".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(50);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-radius:0}.ck-rounded-corners [dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow,[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-left-color:var(--ck-color-split-button-hover-border)}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-right-color:var(--ck-color-split-button-hover-border)}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(52);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ":root{--ck-highlight-marker-yellow:#fdfd77;--ck-highlight-marker-green:#63f963;--ck-highlight-marker-pink:#fc7999;--ck-highlight-marker-blue:#72cdfd;--ck-highlight-pen-red:#e91313;--ck-highlight-pen-green:#180}.ck-content .marker-yellow{background-color:var(--ck-highlight-marker-yellow)}.ck-content .marker-green{background-color:var(--ck-highlight-marker-green)}.ck-content .marker-pink{background-color:var(--ck-highlight-marker-pink)}.ck-content .marker-blue{background-color:var(--ck-highlight-marker-blue)}.ck-content .pen-red{color:var(--ck-highlight-pen-red);background-color:transparent}.ck-content .pen-green{color:var(--ck-highlight-pen-green);background-color:transparent}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(54);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-resizer-size:10px;--ck-resizer-border-width:1px;--ck-resizer-border-radius:2px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-tooltip-offset:10px;--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2}.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle .ck-widget__selection-handle:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-read-only .ck-widget{--ck-widget-outline-thickness:0}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(56);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-labeled-input .ck-labeled-input__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-input .ck-labeled-input__status_error{color:var(--ck-color-base-error)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(58);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition:box-shadow .2s ease-in-out,border .2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(60);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-input{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}[dir=ltr] .ck.ck-text-alternative-form>:not(:first-child),[dir=rtl] .ck.ck-text-alternative-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-text-alternative-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(62);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}' }, function(t, e, n) {
                            var i = n(1);
                            var o = n(64);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(66);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(68);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(70);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(72);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(74);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(76);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = '.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}' }, function(t, e, n) {
                            var i = n(1);
                            var o = n(78);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = '.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}' }, function(t, e, n) {
                            var i = n(1);
                            var o = n(80);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(82);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-input{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}[dir=ltr] .ck.ck-link-form>:not(:first-child),[dir=rtl] .ck.ck-link-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin-left:0}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(84);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):last-of-type{border-right:1px solid var(--ck-color-base-border)}}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(86);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = '.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c8,#b900b4,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}' }, function(t, e, n) {
                            var i = n(1);
                            var o = n(88);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-input{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-input{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}[dir=ltr] .ck.ck-media-form>:not(:first-child),[dir=rtl] .ck.ck-media-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-input .ck-labeled-input__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-media-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-media-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-media-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(90);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(92);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ":root{--ck-color-table-focused-cell-background:#f5fafe}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(94);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-color-base-border);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-color-focus-border);background:var(--ck-color-focus-outer-shadow)}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(96);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border-color:#d9d9d9}.ck-content .table table th{font-weight:700;background:#fafafa}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(98);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;display:inline-block;position:relative;width:var(--ck-todo-list-checkmark-size);height:var(--ck-todo-list-checkmark-size);vertical-align:middle;border:0;left:-25px;margin-right:-15px;right:0;margin-left:0}.ck-content .todo-list .todo-list__label>input:before{display:block;position:absolute;box-sizing:border-box;content:"";width:100%;height:100%;border:1px solid #333;border-radius:2px;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out}.ck-content .todo-list .todo-list__label>input:after{display:block;position:absolute;box-sizing:content-box;pointer-events:none;content:"";left:calc(var(--ck-todo-list-checkmark-size)/3);top:calc(var(--ck-todo-list-checkmark-size)/5.3);width:calc(var(--ck-todo-list-checkmark-size)/5.3);height:calc(var(--ck-todo-list-checkmark-size)/2.6);border-left:0 solid transparent;border-bottom:calc(var(--ck-todo-list-checkmark-size)/8) solid transparent;border-right:calc(var(--ck-todo-list-checkmark-size)/8) solid transparent;border-top:0 solid transparent;transform:rotate(45deg)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-right:0;right:-25px;margin-left:-15px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}' }, function(t, e) { t.exports = ".ck-content code{background-color:hsla(0,0%,78%,.3);padding:.15em;border-radius:2px}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(101);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-content pre{padding:1em;color:#353535;background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;text-align:left;direction:ltr;tab-size:4;white-space:pre-wrap;font-style:normal;min-width:200px}.ck-content pre code{background:unset;padding:0;border-radius:0}.ck.ck-editor__editable pre{position:relative}.ck.ck-editor__editable pre[data-language]:after{content:attr(data-language);position:absolute}:root{--ck-color-code-block-label-background:#757575}.ck.ck-editor__editable pre[data-language]:after{top:-1px;right:10px;background:var(--ck-color-code-block-label-background);font-size:10px;font-family:var(--ck-font-face);line-height:16px;padding:var(--ck-spacing-tiny) var(--ck-spacing-medium);color:#fff;white-space:nowrap}.ck.ck-code-block-dropdown .ck-dropdown__panel{max-height:250px;overflow-y:auto;overflow-x:hidden}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(103);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-editor__editable .ck-horizontal-line{overflow:hidden}.ck-content hr{border:solid #5e5e5e;border-width:1px 0 0;margin:0}.ck-editor__editable .ck-horizontal-line{padding:5px 0}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(105);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0;outline:1px solid var(--ck-color-resizer)}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all;width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset);cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset);cursor:nesw-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset);cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset);cursor:nesw-resize}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(107);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ".ck-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(109);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = '.ck-content .page-break{position:relative;clear:both;padding:5px 0;display:flex;align-items:center;justify-content:center}.ck-content .page-break:after{content:"";position:absolute;border-bottom:2px dashed #c4c4c4;width:100%}.ck-content .page-break__label{position:relative;z-index:1;padding:.3em .6em;display:block;text-transform:uppercase;border:1px solid #c4c4c4;border-radius:2px;font-family:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;font-size:.75em;font-weight:700;color:#333;background:#fff;box-shadow:2px 2px 1px rgba(0,0,0,.15);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media print{.ck-content .page-break{padding:0}.ck-content .page-break:after{display:none}}' }, function(t, e, n) {
                            var i = n(1);
                            var o = n(111);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ":root{--ck-mention-list-max-height:300px}.ck.ck-mentions{max-height:var(--ck-mention-list-max-height);overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain}.ck.ck-mentions>.ck-list__item{overflow:hidden;flex-shrink:0}" }, function(t, e, n) {
                            var i = n(1);
                            var o = n(113);
                            o = o.__esModule ? o.default : o;
                            if (typeof o === "string") {
                                o = [
                                    [t.i, o, ""]
                                ]
                            }
                            var s = { injectType: "singletonStyleTag" };
                            s.insert = "head";
                            s.singleton = true;
                            var r = i(t.i, o, s);
                            var a = o.locals ? o.locals : {};
                            t.exports = a
                        }, function(t, e) { t.exports = ":root{--ck-color-mention-background:rgba(153,0,48,0.1);--ck-color-mention-text:#990030}.ck-content .mention{background:var(--ck-color-mention-background);color:var(--ck-color-mention-text)}" }, function(t, e, n) {
                            "use strict";
                            n.r(e);
                            var i = n(3);
                            var o = i["a"].Symbol;
                            var s = o;
                            var r = Object.prototype;
                            var a = r.hasOwnProperty;
                            var c = r.toString;
                            var l = s ? s.toStringTag : undefined;

                            function d(t) {
                                var e = a.call(t, l),
                                    n = t[l];
                                try { t[l] = undefined; var i = true } catch (t) {}
                                var o = c.call(t);
                                if (i) { if (e) { t[l] = n } else { delete t[l] } }
                                return o
                            }
                            var u = d;
                            var h = Object.prototype;
                            var f = h.toString;

                            function g(t) { return f.call(t) }
                            var m = g;
                            var p = "[object Null]",
                                b = "[object Undefined]";
                            var w = s ? s.toStringTag : undefined;

                            function k(t) { if (t == null) { return t === undefined ? b : p } return w && w in Object(t) ? u(t) : m(t) }
                            var _ = k;

                            function v(t, e) { return function(n) { return t(e(n)) } }
                            var y = v;
                            var x = y(Object.getPrototypeOf, Object);
                            var A = x;

                            function C(t) { return t != null && typeof t == "object" }
                            var T = C;
                            var P = "[object Object]";
                            var S = Function.prototype,
                                M = Object.prototype;
                            var E = S.toString;
                            var I = M.hasOwnProperty;
                            var N = E.call(Object);

                            function O(t) { if (!T(t) || _(t) != P) { return false } var e = A(t); if (e === null) { return true } var n = I.call(e, "constructor") && e.constructor; return typeof n == "function" && n instanceof n && E.call(n) == N }
                            var R = O;

                            function L() {
                                this.__data__ = [];
                                this.size = 0
                            }
                            var D = L;

                            function z(t, e) { return t === e || t !== t && e !== e }
                            var V = z;

                            function j(t, e) { var n = t.length; while (n--) { if (V(t[n][0], e)) { return n } } return -1 }
                            var B = j;
                            var F = Array.prototype;
                            var H = F.splice;

                            function U(t) {
                                var e = this.__data__,
                                    n = B(e, t);
                                if (n < 0) { return false }
                                var i = e.length - 1;
                                if (n == i) { e.pop() } else { H.call(e, n, 1) }--this.size;
                                return true
                            }
                            var q = U;

                            function W(t) {
                                var e = this.__data__,
                                    n = B(e, t);
                                return n < 0 ? undefined : e[n][1]
                            }
                            var $ = W;

                            function Y(t) { return B(this.__data__, t) > -1 }
                            var G = Y;

                            function Q(t, e) {
                                var n = this.__data__,
                                    i = B(n, t);
                                if (i < 0) {
                                    ++this.size;
                                    n.push([t, e])
                                } else { n[i][1] = e }
                                return this
                            }
                            var K = Q;

                            function J(t) {
                                var e = -1,
                                    n = t == null ? 0 : t.length;
                                this.clear();
                                while (++e < n) {
                                    var i = t[e];
                                    this.set(i[0], i[1])
                                }
                            }
                            J.prototype.clear = D;
                            J.prototype["delete"] = q;
                            J.prototype.get = $;
                            J.prototype.has = G;
                            J.prototype.set = K;
                            var Z = J;

                            function X() {
                                this.__data__ = new Z;
                                this.size = 0
                            }
                            var tt = X;

                            function et(t) {
                                var e = this.__data__,
                                    n = e["delete"](t);
                                this.size = e.size;
                                return n
                            }
                            var nt = et;

                            function it(t) { return this.__data__.get(t) }
                            var ot = it;

                            function st(t) { return this.__data__.has(t) }
                            var rt = st;

                            function at(t) { var e = typeof t; return t != null && (e == "object" || e == "function") }
                            var ct = at;
                            var lt = "[object AsyncFunction]",
                                dt = "[object Function]",
                                ut = "[object GeneratorFunction]",
                                ht = "[object Proxy]";

                            function ft(t) { if (!ct(t)) { return false } var e = _(t); return e == dt || e == ut || e == lt || e == ht }
                            var gt = ft;
                            var mt = i["a"]["__core-js_shared__"];
                            var pt = mt;
                            var bt = function() { var t = /[^.]+$/.exec(pt && pt.keys && pt.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }();

                            function wt(t) { return !!bt && bt in t }
                            var kt = wt;
                            var _t = Function.prototype;
                            var vt = _t.toString;

                            function yt(t) { if (t != null) { try { return vt.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }
                            var xt = yt;
                            var At = /[\\^$.*+?()[\]{}|]/g;
                            var Ct = /^\[object .+?Constructor\]$/;
                            var Tt = Function.prototype,
                                Pt = Object.prototype;
                            var St = Tt.toString;
                            var Mt = Pt.hasOwnProperty;
                            var Et = RegExp("^" + St.call(Mt).replace(At, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

                            function It(t) { if (!ct(t) || kt(t)) { return false } var e = gt(t) ? Et : Ct; return e.test(xt(t)) }
                            var Nt = It;

                            function Ot(t, e) { return t == null ? undefined : t[e] }
                            var Rt = Ot;

                            function Lt(t, e) { var n = Rt(t, e); return Nt(n) ? n : undefined }
                            var Dt = Lt;
                            var zt = Dt(i["a"], "Map");
                            var Vt = zt;
                            var jt = Dt(Object, "create");
                            var Bt = jt;

                            function Ft() {
                                this.__data__ = Bt ? Bt(null) : {};
                                this.size = 0
                            }
                            var Ht = Ft;

                            function Ut(t) {
                                var e = this.has(t) && delete this.__data__[t];
                                this.size -= e ? 1 : 0;
                                return e
                            }
                            var qt = Ut;
                            var Wt = "__lodash_hash_undefined__";
                            var $t = Object.prototype;
                            var Yt = $t.hasOwnProperty;

                            function Gt(t) { var e = this.__data__; if (Bt) { var n = e[t]; return n === Wt ? undefined : n } return Yt.call(e, t) ? e[t] : undefined }
                            var Qt = Gt;
                            var Kt = Object.prototype;
                            var Jt = Kt.hasOwnProperty;

                            function Zt(t) { var e = this.__data__; return Bt ? e[t] !== undefined : Jt.call(e, t) }
                            var Xt = Zt;
                            var te = "__lodash_hash_undefined__";

                            function ee(t, e) {
                                var n = this.__data__;
                                this.size += this.has(t) ? 0 : 1;
                                n[t] = Bt && e === undefined ? te : e;
                                return this
                            }
                            var ne = ee;

                            function ie(t) {
                                var e = -1,
                                    n = t == null ? 0 : t.length;
                                this.clear();
                                while (++e < n) {
                                    var i = t[e];
                                    this.set(i[0], i[1])
                                }
                            }
                            ie.prototype.clear = Ht;
                            ie.prototype["delete"] = qt;
                            ie.prototype.get = Qt;
                            ie.prototype.has = Xt;
                            ie.prototype.set = ne;
                            var oe = ie;

                            function se() {
                                this.size = 0;
                                this.__data__ = { hash: new oe, map: new(Vt || Z), string: new oe }
                            }
                            var re = se;

                            function ae(t) { var e = typeof t; return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null }
                            var ce = ae;

                            function le(t, e) { var n = t.__data__; return ce(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map }
                            var de = le;

                            function ue(t) {
                                var e = de(this, t)["delete"](t);
                                this.size -= e ? 1 : 0;
                                return e
                            }
                            var he = ue;

                            function fe(t) { return de(this, t).get(t) }
                            var ge = fe;

                            function me(t) { return de(this, t).has(t) }
                            var pe = me;

                            function be(t, e) {
                                var n = de(this, t),
                                    i = n.size;
                                n.set(t, e);
                                this.size += n.size == i ? 0 : 1;
                                return this
                            }
                            var we = be;

                            function ke(t) {
                                var e = -1,
                                    n = t == null ? 0 : t.length;
                                this.clear();
                                while (++e < n) {
                                    var i = t[e];
                                    this.set(i[0], i[1])
                                }
                            }
                            ke.prototype.clear = re;
                            ke.prototype["delete"] = he;
                            ke.prototype.get = ge;
                            ke.prototype.has = pe;
                            ke.prototype.set = we;
                            var _e = ke;
                            var ve = 200;

                            function ye(t, e) {
                                var n = this.__data__;
                                if (n instanceof Z) {
                                    var i = n.__data__;
                                    if (!Vt || i.length < ve - 1) {
                                        i.push([t, e]);
                                        this.size = ++n.size;
                                        return this
                                    }
                                    n = this.__data__ = new _e(i)
                                }
                                n.set(t, e);
                                this.size = n.size;
                                return this
                            }
                            var xe = ye;

                            function Ae(t) {
                                var e = this.__data__ = new Z(t);
                                this.size = e.size
                            }
                            Ae.prototype.clear = tt;
                            Ae.prototype["delete"] = nt;
                            Ae.prototype.get = ot;
                            Ae.prototype.has = rt;
                            Ae.prototype.set = xe;
                            var Ce = Ae;

                            function Te(t, e) {
                                var n = -1,
                                    i = t == null ? 0 : t.length;
                                while (++n < i) { if (e(t[n], n, t) === false) { break } }
                                return t
                            }
                            var Pe = Te;
                            var Se = function() {
                                try {
                                    var t = Dt(Object, "defineProperty");
                                    t({}, "", {});
                                    return t
                                } catch (t) {}
                            }();
                            var Me = Se;

                            function Ee(t, e, n) { if (e == "__proto__" && Me) { Me(t, e, { configurable: true, enumerable: true, value: n, writable: true }) } else { t[e] = n } }
                            var Ie = Ee;
                            var Ne = Object.prototype;
                            var Oe = Ne.hasOwnProperty;

                            function Re(t, e, n) { var i = t[e]; if (!(Oe.call(t, e) && V(i, n)) || n === undefined && !(e in t)) { Ie(t, e, n) } }
                            var Le = Re;

                            function De(t, e, n, i) {
                                var o = !n;
                                n || (n = {});
                                var s = -1,
                                    r = e.length;
                                while (++s < r) { var a = e[s]; var c = i ? i(n[a], t[a], a, n, t) : undefined; if (c === undefined) { c = t[a] } if (o) { Ie(n, a, c) } else { Le(n, a, c) } }
                                return n
                            }
                            var ze = De;

                            function Ve(t, e) {
                                var n = -1,
                                    i = Array(t);
                                while (++n < t) { i[n] = e(n) }
                                return i
                            }
                            var je = Ve;
                            var Be = "[object Arguments]";

                            function Fe(t) { return T(t) && _(t) == Be }
                            var He = Fe;
                            var Ue = Object.prototype;
                            var qe = Ue.hasOwnProperty;
                            var We = Ue.propertyIsEnumerable;
                            var $e = He(function() { return arguments }()) ? He : function(t) { return T(t) && qe.call(t, "callee") && !We.call(t, "callee") };
                            var Ye = $e;
                            var Ge = Array.isArray;
                            var Qe = Ge;
                            var Ke = n(5);
                            var Je = 9007199254740991;
                            var Ze = /^(?:0|[1-9]\d*)$/;

                            function Xe(t, e) {
                                var n = typeof t;
                                e = e == null ? Je : e;
                                return !!e && (n == "number" || n != "symbol" && Ze.test(t)) && (t > -1 && t % 1 == 0 && t < e)
                            }
                            var tn = Xe;
                            var en = 9007199254740991;

                            function nn(t) { return typeof t == "number" && t > -1 && t % 1 == 0 && t <= en }
                            var on = nn;
                            var sn = "[object Arguments]",
                                rn = "[object Array]",
                                an = "[object Boolean]",
                                cn = "[object Date]",
                                ln = "[object Error]",
                                dn = "[object Function]",
                                un = "[object Map]",
                                hn = "[object Number]",
                                fn = "[object Object]",
                                gn = "[object RegExp]",
                                mn = "[object Set]",
                                pn = "[object String]",
                                bn = "[object WeakMap]";
                            var wn = "[object ArrayBuffer]",
                                kn = "[object DataView]",
                                _n = "[object Float32Array]",
                                vn = "[object Float64Array]",
                                yn = "[object Int8Array]",
                                xn = "[object Int16Array]",
                                An = "[object Int32Array]",
                                Cn = "[object Uint8Array]",
                                Tn = "[object Uint8ClampedArray]",
                                Pn = "[object Uint16Array]",
                                Sn = "[object Uint32Array]";
                            var Mn = {};
                            Mn[_n] = Mn[vn] = Mn[yn] = Mn[xn] = Mn[An] = Mn[Cn] = Mn[Tn] = Mn[Pn] = Mn[Sn] = true;
                            Mn[sn] = Mn[rn] = Mn[wn] = Mn[an] = Mn[kn] = Mn[cn] = Mn[ln] = Mn[dn] = Mn[un] = Mn[hn] = Mn[fn] = Mn[gn] = Mn[mn] = Mn[pn] = Mn[bn] = false;

                            function En(t) { return T(t) && on(t.length) && !!Mn[_(t)] }
                            var In = En;

                            function Nn(t) { return function(e) { return t(e) } }
                            var On = Nn;
                            var Rn = n(4);
                            var Ln = Rn["a"] && Rn["a"].isTypedArray;
                            var Dn = Ln ? On(Ln) : In;
                            var zn = Dn;
                            var Vn = Object.prototype;
                            var jn = Vn.hasOwnProperty;

                            function Bn(t, e) {
                                var n = Qe(t),
                                    i = !n && Ye(t),
                                    o = !n && !i && Object(Ke["a"])(t),
                                    s = !n && !i && !o && zn(t),
                                    r = n || i || o || s,
                                    a = r ? je(t.length, String) : [],
                                    c = a.length;
                                for (var l in t) { if ((e || jn.call(t, l)) && !(r && (l == "length" || o && (l == "offset" || l == "parent") || s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || tn(l, c)))) { a.push(l) } }
                                return a
                            }
                            var Fn = Bn;
                            var Hn = Object.prototype;

                            function Un(t) {
                                var e = t && t.constructor,
                                    n = typeof e == "function" && e.prototype || Hn;
                                return t === n
                            }
                            var qn = Un;
                            var Wn = y(Object.keys, Object);
                            var $n = Wn;
                            var Yn = Object.prototype;
                            var Gn = Yn.hasOwnProperty;

                            function Qn(t) { if (!qn(t)) { return $n(t) } var e = []; for (var n in Object(t)) { if (Gn.call(t, n) && n != "constructor") { e.push(n) } } return e }
                            var Kn = Qn;

                            function Jn(t) { return t != null && on(t.length) && !gt(t) }
                            var Zn = Jn;

                            function Xn(t) { return Zn(t) ? Fn(t) : Kn(t) }
                            var ti = Xn;

                            function ei(t, e) { return t && ze(e, ti(e), t) }
                            var ni = ei;

                            function ii(t) { var e = []; if (t != null) { for (var n in Object(t)) { e.push(n) } } return e }
                            var oi = ii;
                            var si = Object.prototype;
                            var ri = si.hasOwnProperty;

                            function ai(t) {
                                if (!ct(t)) { return oi(t) }
                                var e = qn(t),
                                    n = [];
                                for (var i in t) { if (!(i == "constructor" && (e || !ri.call(t, i)))) { n.push(i) } }
                                return n
                            }
                            var ci = ai;

                            function li(t) { return Zn(t) ? Fn(t, true) : ci(t) }
                            var di = li;

                            function ui(t, e) { return t && ze(e, di(e), t) }
                            var hi = ui;
                            var fi = n(13);

                            function gi(t, e) {
                                var n = -1,
                                    i = t.length;
                                e || (e = Array(i));
                                while (++n < i) { e[n] = t[n] }
                                return e
                            }
                            var mi = gi;

                            function pi(t, e) {
                                var n = -1,
                                    i = t == null ? 0 : t.length,
                                    o = 0,
                                    s = [];
                                while (++n < i) { var r = t[n]; if (e(r, n, t)) { s[o++] = r } }
                                return s
                            }
                            var bi = pi;

                            function wi() { return [] }
                            var ki = wi;
                            var _i = Object.prototype;
                            var vi = _i.propertyIsEnumerable;
                            var yi = Object.getOwnPropertySymbols;
                            var xi = !yi ? ki : function(t) {
                                if (t == null) { return [] }
                                t = Object(t);
                                return bi(yi(t), (function(e) { return vi.call(t, e) }))
                            };
                            var Ai = xi;

                            function Ci(t, e) { return ze(t, Ai(t), e) }
                            var Ti = Ci;

                            function Pi(t, e) {
                                var n = -1,
                                    i = e.length,
                                    o = t.length;
                                while (++n < i) { t[o + n] = e[n] }
                                return t
                            }
                            var Si = Pi;
                            var Mi = Object.getOwnPropertySymbols;
                            var Ei = !Mi ? ki : function(t) {
                                var e = [];
                                while (t) {
                                    Si(e, Ai(t));
                                    t = A(t)
                                }
                                return e
                            };
                            var Ii = Ei;

                            function Ni(t, e) { return ze(t, Ii(t), e) }
                            var Oi = Ni;

                            function Ri(t, e, n) { var i = e(t); return Qe(t) ? i : Si(i, n(t)) }
                            var Li = Ri;

                            function Di(t) { return Li(t, ti, Ai) }
                            var zi = Di;

                            function Vi(t) { return Li(t, di, Ii) }
                            var ji = Vi;
                            var Bi = Dt(i["a"], "DataView");
                            var Fi = Bi;
                            var Hi = Dt(i["a"], "Promise");
                            var Ui = Hi;
                            var qi = Dt(i["a"], "Set");
                            var Wi = qi;
                            var $i = Dt(i["a"], "WeakMap");
                            var Yi = $i;
                            var Gi = "[object Map]",
                                Qi = "[object Object]",
                                Ki = "[object Promise]",
                                Ji = "[object Set]",
                                Zi = "[object WeakMap]";
                            var Xi = "[object DataView]";
                            var to = xt(Fi),
                                eo = xt(Vt),
                                no = xt(Ui),
                                io = xt(Wi),
                                oo = xt(Yi);
                            var so = _;
                            if (Fi && so(new Fi(new ArrayBuffer(1))) != Xi || Vt && so(new Vt) != Gi || Ui && so(Ui.resolve()) != Ki || Wi && so(new Wi) != Ji || Yi && so(new Yi) != Zi) {
                                so = function(t) {
                                    var e = _(t),
                                        n = e == Qi ? t.constructor : undefined,
                                        i = n ? xt(n) : "";
                                    if (i) {
                                        switch (i) {
                                            case to:
                                                return Xi;
                                            case eo:
                                                return Gi;
                                            case no:
                                                return Ki;
                                            case io:
                                                return Ji;
                                            case oo:
                                                return Zi
                                        }
                                    }
                                    return e
                                }
                            }
                            var ro = so;
                            var ao = Object.prototype;
                            var co = ao.hasOwnProperty;

                            function lo(t) {
                                var e = t.length,
                                    n = new t.constructor(e);
                                if (e && typeof t[0] == "string" && co.call(t, "index")) {
                                    n.index = t.index;
                                    n.input = t.input
                                }
                                return n
                            }
                            var uo = lo;
                            var ho = i["a"].Uint8Array;
                            var fo = ho;

                            function go(t) {
                                var e = new t.constructor(t.byteLength);
                                new fo(e).set(new fo(t));
                                return e
                            }
                            var mo = go;

                            function po(t, e) { var n = e ? mo(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.byteLength) }
                            var bo = po;
                            var wo = /\w*$/;

                            function ko(t) {
                                var e = new t.constructor(t.source, wo.exec(t));
                                e.lastIndex = t.lastIndex;
                                return e
                            }
                            var _o = ko;
                            var vo = s ? s.prototype : undefined,
                                yo = vo ? vo.valueOf : undefined;

                            function xo(t) { return yo ? Object(yo.call(t)) : {} }
                            var Ao = xo;

                            function Co(t, e) { var n = e ? mo(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.length) }
                            var To = Co;
                            var Po = "[object Boolean]",
                                So = "[object Date]",
                                Mo = "[object Map]",
                                Eo = "[object Number]",
                                Io = "[object RegExp]",
                                No = "[object Set]",
                                Oo = "[object String]",
                                Ro = "[object Symbol]";
                            var Lo = "[object ArrayBuffer]",
                                Do = "[object DataView]",
                                zo = "[object Float32Array]",
                                Vo = "[object Float64Array]",
                                jo = "[object Int8Array]",
                                Bo = "[object Int16Array]",
                                Fo = "[object Int32Array]",
                                Ho = "[object Uint8Array]",
                                Uo = "[object Uint8ClampedArray]",
                                qo = "[object Uint16Array]",
                                Wo = "[object Uint32Array]";

                            function $o(t, e, n) {
                                var i = t.constructor;
                                switch (e) {
                                    case Lo:
                                        return mo(t);
                                    case Po:
                                    case So:
                                        return new i(+t);
                                    case Do:
                                        return bo(t, n);
                                    case zo:
                                    case Vo:
                                    case jo:
                                    case Bo:
                                    case Fo:
                                    case Ho:
                                    case Uo:
                                    case qo:
                                    case Wo:
                                        return To(t, n);
                                    case Mo:
                                        return new i;
                                    case Eo:
                                    case Oo:
                                        return new i(t);
                                    case Io:
                                        return _o(t);
                                    case No:
                                        return new i;
                                    case Ro:
                                        return Ao(t)
                                }
                            }
                            var Yo = $o;
                            var Go = Object.create;
                            var Qo = function() {
                                function t() {}
                                return function(e) {
                                    if (!ct(e)) { return {} }
                                    if (Go) { return Go(e) }
                                    t.prototype = e;
                                    var n = new t;
                                    t.prototype = undefined;
                                    return n
                                }
                            }();
                            var Ko = Qo;

                            function Jo(t) { return typeof t.constructor == "function" && !qn(t) ? Ko(A(t)) : {} }
                            var Zo = Jo;
                            var Xo = "[object Map]";

                            function ts(t) { return T(t) && ro(t) == Xo }
                            var es = ts;
                            var ns = Rn["a"] && Rn["a"].isMap;
                            var is = ns ? On(ns) : es;
                            var os = is;
                            var ss = "[object Set]";

                            function rs(t) { return T(t) && ro(t) == ss }
                            var as = rs;
                            var cs = Rn["a"] && Rn["a"].isSet;
                            var ls = cs ? On(cs) : as;
                            var ds = ls;
                            var us = 1,
                                hs = 2,
                                fs = 4;
                            var gs = "[object Arguments]",
                                ms = "[object Array]",
                                ps = "[object Boolean]",
                                bs = "[object Date]",
                                ws = "[object Error]",
                                ks = "[object Function]",
                                _s = "[object GeneratorFunction]",
                                vs = "[object Map]",
                                ys = "[object Number]",
                                xs = "[object Object]",
                                As = "[object RegExp]",
                                Cs = "[object Set]",
                                Ts = "[object String]",
                                Ps = "[object Symbol]",
                                Ss = "[object WeakMap]";
                            var Ms = "[object ArrayBuffer]",
                                Es = "[object DataView]",
                                Is = "[object Float32Array]",
                                Ns = "[object Float64Array]",
                                Os = "[object Int8Array]",
                                Rs = "[object Int16Array]",
                                Ls = "[object Int32Array]",
                                Ds = "[object Uint8Array]",
                                zs = "[object Uint8ClampedArray]",
                                Vs = "[object Uint16Array]",
                                js = "[object Uint32Array]";
                            var Bs = {};
                            Bs[gs] = Bs[ms] = Bs[Ms] = Bs[Es] = Bs[ps] = Bs[bs] = Bs[Is] = Bs[Ns] = Bs[Os] = Bs[Rs] = Bs[Ls] = Bs[vs] = Bs[ys] = Bs[xs] = Bs[As] = Bs[Cs] = Bs[Ts] = Bs[Ps] = Bs[Ds] = Bs[zs] = Bs[Vs] = Bs[js] = true;
                            Bs[ws] = Bs[ks] = Bs[Ss] = false;

                            function Fs(t, e, n, i, o, s) {
                                var r, a = e & us,
                                    c = e & hs,
                                    l = e & fs;
                                if (n) { r = o ? n(t, i, o, s) : n(t) }
                                if (r !== undefined) { return r }
                                if (!ct(t)) { return t }
                                var d = Qe(t);
                                if (d) { r = uo(t); if (!a) { return mi(t, r) } } else {
                                    var u = ro(t),
                                        h = u == ks || u == _s;
                                    if (Object(Ke["a"])(t)) { return Object(fi["a"])(t, a) }
                                    if (u == xs || u == gs || h && !o) { r = c || h ? {} : Zo(t); if (!a) { return c ? Oi(t, hi(r, t)) : Ti(t, ni(r, t)) } } else {
                                        if (!Bs[u]) { return o ? t : {} }
                                        r = Yo(t, u, a)
                                    }
                                }
                                s || (s = new Ce);
                                var f = s.get(t);
                                if (f) { return f }
                                s.set(t, r);
                                if (ds(t)) { t.forEach((function(i) { r.add(Fs(i, e, n, i, t, s)) })) } else if (os(t)) { t.forEach((function(i, o) { r.set(o, Fs(i, e, n, o, t, s)) })) }
                                var g = l ? c ? ji : zi : c ? keysIn : ti;
                                var m = d ? undefined : g(t);
                                Pe(m || t, (function(i, o) {
                                    if (m) {
                                        o = i;
                                        i = t[o]
                                    }
                                    Le(r, o, Fs(i, e, n, o, t, s))
                                }));
                                return r
                            }
                            var Hs = Fs;
                            var Us = 1,
                                qs = 4;

                            function Ws(t, e) { e = typeof e == "function" ? e : undefined; return Hs(t, Us | qs, e) }
                            var $s = Ws;

                            function Ys(t) { return T(t) && t.nodeType === 1 && !R(t) }
                            var Gs = Ys;
                            class Qs {
                                constructor(t, e) { this._config = {}; if (e) { this.define(e) } if (t) { this._setObjectToTarget(this._config, t) } }
                                set(t, e) { this._setToTarget(this._config, t, e) }
                                define(t, e) {
                                    const n = true;
                                    this._setToTarget(this._config, t, e, n)
                                }
                                get(t) { return this._getFromSource(this._config, t) }
                                _setToTarget(t, e, n, i = false) {
                                    if (R(e)) { this._setObjectToTarget(t, e, i); return }
                                    const o = e.split(".");
                                    e = o.pop();
                                    for (const e of o) {
                                        if (!R(t[e])) { t[e] = {} }
                                        t = t[e]
                                    }
                                    if (R(n)) {
                                        if (!R(t[e])) { t[e] = {} }
                                        t = t[e];
                                        this._setObjectToTarget(t, n, i);
                                        return
                                    }
                                    if (i && typeof t[e] != "undefined") { return }
                                    t[e] = n
                                }
                                _getFromSource(t, e) {
                                    const n = e.split(".");
                                    e = n.pop();
                                    for (const e of n) {
                                        if (!R(t[e])) { t = null; break }
                                        t = t[e]
                                    }
                                    return t ? Ks(t[e]) : undefined
                                }
                                _setObjectToTarget(t, e, n) { Object.keys(e).forEach(i => { this._setToTarget(t, i, e[i], n) }) }
                            }

                            function Ks(t) { return $s(t, Js) }

                            function Js(t) { return Gs(t) ? t : undefined }
                            var Zs = n(0);

                            function Xs() { return function t() { t.called = true } }
                            var tr = Xs;
                            class er {
                                constructor(t, e) {
                                    this.source = t;
                                    this.name = e;
                                    this.path = [];
                                    this.stop = tr();
                                    this.off = tr()
                                }
                            }

                            function nr() { let t = "e"; for (let e = 0; e < 8; e++) { t += Math.floor((1 + Math.random()) * 65536).toString(16).substring(1) } return t }
                            const ir = {get(t) { if (typeof t != "number") { return this[t] || this.normal } else { return t } }, highest: 1e5, high: 1e3, normal: 0, low: -1e3, lowest: -1e5 };
                            var or = ir;
                            var sr = n(6);
                            const rr = Symbol("listeningTo");
                            const ar = Symbol("emitterId");
                            const cr = {
                                on(t, e, n = {}) { this.listenTo(this, t, e, n) },
                                once(t, e, n) {
                                    let i = false;
                                    const o = function(t, ...n) {
                                        if (!i) {
                                            i = true;
                                            t.off();
                                            e.call(this, t, ...n)
                                        }
                                    };
                                    this.listenTo(this, t, o, n)
                                },
                                off(t, e) { this.stopListening(this, t, e) },
                                listenTo(t, e, n, i = {}) {
                                    let o, s;
                                    if (!this[rr]) { this[rr] = {} }
                                    const r = this[rr];
                                    if (!hr(t)) { ur(t) }
                                    const a = hr(t);
                                    if (!(o = r[a])) { o = r[a] = { emitter: t, callbacks: {} } }
                                    if (!(s = o.callbacks[e])) { s = o.callbacks[e] = [] }
                                    s.push(n);
                                    mr(t, e);
                                    const c = pr(t, e);
                                    const l = or.get(i.priority);
                                    const d = { callback: n, priority: l };
                                    for (const t of c) {
                                        let e = false;
                                        for (let n = 0; n < t.length; n++) {
                                            if (t[n].priority < l) {
                                                t.splice(n, 0, d);
                                                e = true;
                                                break
                                            }
                                        }
                                        if (!e) { t.push(d) }
                                    }
                                },
                                stopListening(t, e, n) {
                                    const i = this[rr];
                                    let o = t && hr(t);
                                    const s = i && o && i[o];
                                    const r = s && e && s.callbacks[e];
                                    if (!i || t && !s || e && !r) { return }
                                    if (n) { kr(t, e, n) } else if (r) {
                                        while (n = r.pop()) { kr(t, e, n) }
                                        delete s.callbacks[e]
                                    } else if (s) {
                                        for (e in s.callbacks) { this.stopListening(t, e) }
                                        delete i[o]
                                    } else {
                                        for (o in i) { this.stopListening(i[o].emitter) }
                                        delete this[rr]
                                    }
                                },
                                fire(t, ...e) {
                                    try {
                                        const n = t instanceof er ? t : new er(this, t);
                                        const i = n.name;
                                        let o = br(this, i);
                                        n.path.push(this);
                                        if (o) {
                                            const t = [n, ...e];
                                            o = Array.from(o);
                                            for (let e = 0; e < o.length; e++) {
                                                o[e].callback.apply(this, t);
                                                if (n.off.called) {
                                                    delete n.off.called;
                                                    kr(this, i, o[e].callback)
                                                }
                                                if (n.stop.called) { break }
                                            }
                                        }
                                        if (this._delegations) { const t = this._delegations.get(i); const o = this._delegations.get("*"); if (t) { wr(t, n, e) } if (o) { wr(o, n, e) } }
                                        return n.return
                                    } catch (t) { Zs["b"].rethrowUnexpectedError(t, this) }
                                },
                                delegate(...t) {
                                    return {
                                        to: (e, n) => {
                                            if (!this._delegations) { this._delegations = new Map }
                                            t.forEach(t => {
                                                const i = this._delegations.get(t);
                                                if (!i) {
                                                    this._delegations.set(t, new Map([
                                                        [e, n]
                                                    ]))
                                                } else { i.set(e, n) }
                                            })
                                        }
                                    }
                                },
                                stopDelegating(t, e) { if (!this._delegations) { return } if (!t) { this._delegations.clear() } else if (!e) { this._delegations.delete(t) } else { const n = this._delegations.get(t); if (n) { n.delete(e) } } }
                            };
                            var lr = cr;

                            function dr(t, e) { if (t[rr] && t[rr][e]) { return t[rr][e].emitter } return null }

                            function ur(t, e) { if (!t[ar]) { t[ar] = e || nr() } }

                            function hr(t) { return t[ar] }

                            function fr(t) { if (!t._events) { Object.defineProperty(t, "_events", { value: {} }) } return t._events }

                            function gr() { return { callbacks: [], childEvents: [] } }

                            function mr(t, e) {
                                const n = fr(t);
                                if (n[e]) { return }
                                let i = e;
                                let o = null;
                                const s = [];
                                while (i !== "") {
                                    if (n[i]) { break }
                                    n[i] = gr();
                                    s.push(n[i]);
                                    if (o) { n[i].childEvents.push(o) }
                                    o = i;
                                    i = i.substr(0, i.lastIndexOf(":"))
                                }
                                if (i !== "") {
                                    for (const t of s) { t.callbacks = n[i].callbacks.slice() }
                                    n[i].childEvents.push(o)
                                }
                            }

                            function pr(t, e) {
                                const n = fr(t)[e];
                                if (!n) { return [] }
                                let i = [n.callbacks];
                                for (let e = 0; e < n.childEvents.length; e++) {
                                    const o = pr(t, n.childEvents[e]);
                                    i = i.concat(o)
                                }
                                return i
                            }

                            function br(t, e) { let n; if (!t._events || !(n = t._events[e]) || !n.callbacks.length) { if (e.indexOf(":") > -1) { return br(t, e.substr(0, e.lastIndexOf(":"))) } else { return null } } return n.callbacks }

                            function wr(t, e, n) {
                                for (let [i, o] of t) {
                                    if (!o) { o = e.name } else if (typeof o == "function") { o = o(e.name) }
                                    const t = new er(e.source, o);
                                    t.path = [...e.path];
                                    i.fire(t, ...n)
                                }
                            }

                            function kr(t, e, n) {
                                const i = pr(t, e);
                                for (const t of i) {
                                    for (let e = 0; e < t.length; e++) {
                                        if (t[e].callback == n) {
                                            t.splice(e, 1);
                                            e--
                                        }
                                    }
                                }
                            }

                            function _r(t, ...e) {
                                e.forEach(e => {
                                    Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n => {
                                        if (n in t.prototype) { return }
                                        const i = Object.getOwnPropertyDescriptor(e, n);
                                        i.enumerable = false;
                                        Object.defineProperty(t.prototype, n, i)
                                    })
                                })
                            }

                            function vr(t, e) { const n = Math.min(t.length, e.length); for (let i = 0; i < n; i++) { if (t[i] != e[i]) { return i } } if (t.length == e.length) { return "same" } else if (t.length < e.length) { return "prefix" } else { return "extension" } }
                            var yr = 4;

                            function xr(t) { return Hs(t, yr) }
                            var Ar = xr;
                            class Cr {
                                constructor() { this.parent = null }
                                get index() { let t; if (!this.parent) { return null } if ((t = this.parent.getChildIndex(this)) == -1) { throw new Zs["b"]("view-node-not-found-in-parent: The node's parent does not contain this node.", this) } return t }
                                get nextSibling() { const t = this.index; return t !== null && this.parent.getChild(t + 1) || null }
                                get previousSibling() { const t = this.index; return t !== null && this.parent.getChild(t - 1) || null }
                                get root() { let t = this; while (t.parent) { t = t.parent } return t }
                                get document() { if (this.parent instanceof Cr) { return this.parent.document } else { return null } }
                                getPath() {
                                    const t = [];
                                    let e = this;
                                    while (e.parent) {
                                        t.unshift(e.index);
                                        e = e.parent
                                    }
                                    return t
                                }
                                getAncestors(t = { includeSelf: false, parentFirst: false }) {
                                    const e = [];
                                    let n = t.includeSelf ? this : this.parent;
                                    while (n) {
                                        e[t.parentFirst ? "push" : "unshift"](n);
                                        n = n.parent
                                    }
                                    return e
                                }
                                getCommonAncestor(t, e = {}) { const n = this.getAncestors(e); const i = t.getAncestors(e); let o = 0; while (n[o] == i[o] && n[o]) { o++ } return o === 0 ? null : n[o - 1] }
                                isBefore(t) {
                                    if (this == t) { return false }
                                    if (this.root !== t.root) { return false }
                                    const e = this.getPath();
                                    const n = t.getPath();
                                    const i = vr(e, n);
                                    switch (i) {
                                        case "prefix":
                                            return true;
                                        case "extension":
                                            return false;
                                        default:
                                            return e[i] < n[i]
                                    }
                                }
                                isAfter(t) { if (this == t) { return false } if (this.root !== t.root) { return false } return !this.isBefore(t) }
                                _remove() { this.parent._removeChildren(this.index) }
                                _fireChange(t, e) { this.fire("change:" + t, e); if (this.parent) { this.parent._fireChange(t, e) } }
                                toJSON() {
                                    const t = Ar(this);
                                    delete t.parent;
                                    return t
                                }
                                is(t) { return t == "node" || t == "view:node" }
                            }
                            _r(Cr, lr);
                            class Tr extends Cr {
                                constructor(t) {
                                    super();
                                    this._textData = t
                                }
                                is(t) { return t == "text" || t == "view:text" || super.is(t) }
                                get data() { return this._textData }
                                get _data() { return this.data }
                                set _data(t) {
                                    this._fireChange("text", this);
                                    this._textData = t
                                }
                                isSimilar(t) { if (!(t instanceof Tr)) { return false } return this === t || this.data === t.data }
                                _clone() { return new Tr(this.data) }
                            }
                            class Pr {
                                constructor(t, e, n) {
                                    this.textNode = t;
                                    if (e < 0 || e > t.data.length) { throw new Zs["b"]("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.", this) }
                                    if (n < 0 || e + n > t.data.length) { throw new Zs["b"]("view-textproxy-wrong-length: Given length value is incorrect.", this) }
                                    this.data = t.data.substring(e, e + n);
                                    this.offsetInText = e
                                }
                                get offsetSize() { return this.data.length }
                                get isPartial() { return this.data.length !== this.textNode.data.length }
                                get parent() { return this.textNode.parent }
                                get root() { return this.textNode.root }
                                get document() { return this.textNode.document }
                                is(t) { return t == "textProxy" || t == "view:textProxy" }
                                getAncestors(t = { includeSelf: false, parentFirst: false }) {
                                    const e = [];
                                    let n = t.includeSelf ? this.textNode : this.parent;
                                    while (n !== null) {
                                        e[t.parentFirst ? "push" : "unshift"](n);
                                        n = n.parent
                                    }
                                    return e
                                }
                            }

                            function Sr(t) { const e = new Map; for (const n in t) { e.set(n, t[n]) } return e }

                            function Mr(t) { return !!(t && t[Symbol.iterator]) }
                            class Er {
                                constructor(...t) {
                                    this._patterns = [];
                                    this.add(...t)
                                }
                                add(...t) {
                                    for (let e of t) {
                                        if (typeof e == "string" || e instanceof RegExp) { e = { name: e } }
                                        if (e.classes && (typeof e.classes == "string" || e.classes instanceof RegExp)) { e.classes = [e.classes] }
                                        this._patterns.push(e)
                                    }
                                }
                                match(...t) { for (const e of t) { for (const t of this._patterns) { const n = Ir(e, t); if (n) { return { element: e, pattern: t, match: n } } } } return null }
                                matchAll(...t) { const e = []; for (const n of t) { for (const t of this._patterns) { const i = Ir(n, t); if (i) { e.push({ element: n, pattern: t, match: i }) } } } return e.length > 0 ? e : null }
                                getElementName() { if (this._patterns.length !== 1) { return null } const t = this._patterns[0]; const e = t.name; return typeof t != "function" && e && !(e instanceof RegExp) ? e : null }
                            }

                            function Ir(t, e) { if (typeof e == "function") { return e(t) } const n = {}; if (e.name) { n.name = Nr(e.name, t.name); if (!n.name) { return null } } if (e.attributes) { n.attributes = Or(e.attributes, t); if (!n.attributes) { return null } } if (e.classes) { n.classes = Rr(e.classes, t); if (!n.classes) { return false } } if (e.styles) { n.styles = Lr(e.styles, t); if (!n.styles) { return false } } return n }

                            function Nr(t, e) { if (t instanceof RegExp) { return t.test(e) } return t === e }

                            function Or(t, e) { const n = []; for (const i in t) { const o = t[i]; if (e.hasAttribute(i)) { const t = e.getAttribute(i); if (o === true) { n.push(i) } else if (o instanceof RegExp) { if (o.test(t)) { n.push(i) } else { return null } } else if (t === o) { n.push(i) } else { return null } } else { return null } } return n }

                            function Rr(t, e) { const n = []; for (const i of t) { if (i instanceof RegExp) { const t = e.getClassNames(); for (const e of t) { if (i.test(e)) { n.push(e) } } if (n.length === 0) { return null } } else if (e.hasClass(i)) { n.push(i) } else { return null } } return n }

                            function Lr(t, e) { const n = []; for (const i in t) { const o = t[i]; if (e.hasStyle(i)) { const t = e.getStyle(i); if (o instanceof RegExp) { if (o.test(t)) { n.push(i) } else { return null } } else if (t === o) { n.push(i) } else { return null } } else { return null } } return n }
                            class Dr extends Cr {
                                constructor(t, e, n) {
                                    super();
                                    this.name = t;
                                    this._attrs = zr(e);
                                    this._children = [];
                                    if (n) { this._insertChild(0, n) }
                                    this._classes = new Set;
                                    if (this._attrs.has("class")) {
                                        const t = this._attrs.get("class");
                                        jr(this._classes, t);
                                        this._attrs.delete("class")
                                    }
                                    this._styles = new Map;
                                    if (this._attrs.has("style")) {
                                        Vr(this._styles, this._attrs.get("style"));
                                        this._attrs.delete("style")
                                    }
                                    this._customProperties = new Map
                                }
                                get childCount() { return this._children.length }
                                get isEmpty() { return this._children.length === 0 }
                                is(t, e = null) { const n = t.replace(/^view:/, ""); if (!e) { return n == "element" || n == this.name || super.is(t) } else { return n == "element" && e == this.name } }
                                getChild(t) { return this._children[t] }
                                getChildIndex(t) { return this._children.indexOf(t) }
                                getChildren() { return this._children[Symbol.iterator]() } * getAttributeKeys() {
                                    if (this._classes.size > 0) { yield "class" }
                                    if (this._styles.size > 0) { yield "style" }
                                    yield* this._attrs.keys()
                                } * getAttributes() { yield* this._attrs.entries(); if (this._classes.size > 0) { yield ["class", this.getAttribute("class")] } if (this._styles.size > 0) { yield ["style", this.getAttribute("style")] } }
                                getAttribute(t) { if (t == "class") { if (this._classes.size > 0) { return [...this._classes].join(" ") } return undefined } if (t == "style") { if (this._styles.size > 0) { let t = ""; for (const [e, n] of this._styles) { t += `${e}:${n};` } return t } return undefined } return this._attrs.get(t) }
                                hasAttribute(t) { if (t == "class") { return this._classes.size > 0 } if (t == "style") { return this._styles.size > 0 } return this._attrs.has(t) }
                                isSimilar(t) { if (!(t instanceof Dr)) { return false } if (this === t) { return true } if (this.name != t.name) { return false } if (this._attrs.size !== t._attrs.size || this._classes.size !== t._classes.size || this._styles.size !== t._styles.size) { return false } for (const [e, n] of this._attrs) { if (!t._attrs.has(e) || t._attrs.get(e) !== n) { return false } } for (const e of this._classes) { if (!t._classes.has(e)) { return false } } for (const [e, n] of this._styles) { if (!t._styles.has(e) || t._styles.get(e) !== n) { return false } } return true }
                                hasClass(...t) { for (const e of t) { if (!this._classes.has(e)) { return false } } return true }
                                getClassNames() { return this._classes.keys() }
                                getStyle(t) { return this._styles.get(t) }
                                getStyleNames() { return this._styles.keys() }
                                hasStyle(...t) { for (const e of t) { if (!this._styles.has(e)) { return false } } return true }
                                findAncestor(...t) {
                                    const e = new Er(...t);
                                    let n = this.parent;
                                    while (n) {
                                        if (e.match(n)) { return n }
                                        n = n.parent
                                    }
                                    return null
                                }
                                getCustomProperty(t) { return this._customProperties.get(t) } * getCustomProperties() { yield* this._customProperties.entries() }
                                getIdentity() { const t = Array.from(this._classes).sort().join(","); const e = Array.from(this._styles).map(t => `${t[0]}:${t[1]}`).sort().join(";"); const n = Array.from(this._attrs).map(t => `${t[0]}="${t[1]}"`).sort().join(" "); return this.name + (t == "" ? "" : ` class="${t}"`) + (e == "" ? "" : ` style="${e}"`) + (n == "" ? "" : ` ${n}`) }
                                _clone(t = false) {
                                    const e = [];
                                    if (t) { for (const n of this.getChildren()) { e.push(n._clone(t)) } }
                                    const n = new this.constructor(this.name, this._attrs, e);
                                    n._classes = new Set(this._classes);
                                    n._styles = new Map(this._styles);
                                    n._customProperties = new Map(this._customProperties);
                                    n.getFillerOffset = this.getFillerOffset;
                                    return n
                                }
                                _appendChild(t) { return this._insertChild(this.childCount, t) }
                                _insertChild(t, e) {
                                    this._fireChange("children", this);
                                    let n = 0;
                                    const i = Br(e);
                                    for (const e of i) {
                                        if (e.parent !== null) { e._remove() }
                                        e.parent = this;
                                        this._children.splice(t, 0, e);
                                        t++;
                                        n++
                                    }
                                    return n
                                }
                                _removeChildren(t, e = 1) { this._fireChange("children", this); for (let n = t; n < t + e; n++) { this._children[n].parent = null } return this._children.splice(t, e) }
                                _setAttribute(t, e) {
                                    e = String(e);
                                    this._fireChange("attributes", this);
                                    if (t == "class") { jr(this._classes, e) } else if (t == "style") { Vr(this._styles, e) } else { this._attrs.set(t, e) }
                                }
                                _removeAttribute(t) { this._fireChange("attributes", this); if (t == "class") { if (this._classes.size > 0) { this._classes.clear(); return true } return false } if (t == "style") { if (this._styles.size > 0) { this._styles.clear(); return true } return false } return this._attrs.delete(t) }
                                _addClass(t) {
                                    this._fireChange("attributes", this);
                                    t = Array.isArray(t) ? t : [t];
                                    t.forEach(t => this._classes.add(t))
                                }
                                _removeClass(t) {
                                    this._fireChange("attributes", this);
                                    t = Array.isArray(t) ? t : [t];
                                    t.forEach(t => this._classes.delete(t))
                                }
                                _setStyle(t, e) { this._fireChange("attributes", this); if (R(t)) { const e = Object.keys(t); for (const n of e) { this._styles.set(n, t[n]) } } else { this._styles.set(t, e) } }
                                _removeStyle(t) {
                                    this._fireChange("attributes", this);
                                    t = Array.isArray(t) ? t : [t];
                                    t.forEach(t => this._styles.delete(t))
                                }
                                _setCustomProperty(t, e) { this._customProperties.set(t, e) }
                                _removeCustomProperty(t) { return this._customProperties.delete(t) }
                            }

                            function zr(t) { if (R(t)) { t = Sr(t) } else { t = new Map(t) } for (const [e, n] of t) { if (n === null) { t.delete(e) } else if (typeof n != "string") { t.set(e, String(n)) } } return t }

                            function Vr(t, e) {
                                let n = null;
                                let i = 0;
                                let o = 0;
                                let s = null;
                                t.clear();
                                if (e === "") { return }
                                if (e.charAt(e.length - 1) != ";") { e = e + ";" }
                                for (let r = 0; r < e.length; r++) {
                                    const a = e.charAt(r);
                                    if (n === null) {
                                        switch (a) {
                                            case ":":
                                                if (!s) {
                                                    s = e.substr(i, r - i);
                                                    o = r + 1
                                                }
                                                break;
                                            case '"':
                                            case "'":
                                                n = a;
                                                break;
                                            case ";":
                                                {
                                                    const n = e.substr(o, r - o);
                                                    if (s) { t.set(s.trim(), n.trim()) }
                                                    s = null;i = r + 1;
                                                    break
                                                }
                                        }
                                    } else if (a === n) { n = null }
                                }
                            }

                            function jr(t, e) {
                                const n = e.split(/\s+/);
                                t.clear();
                                n.forEach(e => t.add(e))
                            }

                            function Br(t) { if (typeof t == "string") { return [new Tr(t)] } if (!Mr(t)) { t = [t] } return Array.from(t).map(t => { if (typeof t == "string") { return new Tr(t) } if (t instanceof Pr) { return new Tr(t.data) } return t }) }
                            class Fr extends Dr {
                                constructor(t, e, n) {
                                    super(t, e, n);
                                    this.getFillerOffset = Hr
                                }
                                is(t, e = null) { const n = t && t.replace(/^view:/, ""); if (!e) { return n == "containerElement" || super.is(t) } else { return n == "containerElement" && e == this.name || super.is(t, e) } }
                            }

                            function Hr() { const t = [...this.getChildren()]; const e = t[this.childCount - 1]; if (e && e.is("element", "br")) { return this.childCount } for (const e of t) { if (!e.is("uiElement")) { return null } } return this.childCount }

                            function Ur(t) { return t }
                            var qr = Ur;

                            function Wr(t, e, n) {
                                switch (n.length) {
                                    case 0:
                                        return t.call(e);
                                    case 1:
                                        return t.call(e, n[0]);
                                    case 2:
                                        return t.call(e, n[0], n[1]);
                                    case 3:
                                        return t.call(e, n[0], n[1], n[2])
                                }
                                return t.apply(e, n)
                            }
                            var $r = Wr;
                            var Yr = Math.max;

                            function Gr(t, e, n) {
                                e = Yr(e === undefined ? t.length - 1 : e, 0);
                                return function() {
                                    var i = arguments,
                                        o = -1,
                                        s = Yr(i.length - e, 0),
                                        r = Array(s);
                                    while (++o < s) { r[o] = i[e + o] }
                                    o = -1;
                                    var a = Array(e + 1);
                                    while (++o < e) { a[o] = i[o] }
                                    a[e] = n(r);
                                    return $r(t, this, a)
                                }
                            }
                            var Qr = Gr;

                            function Kr(t) { return function() { return t } }
                            var Jr = Kr;
                            var Zr = !Me ? qr : function(t, e) { return Me(t, "toString", { configurable: true, enumerable: false, value: Jr(e), writable: true }) };
                            var Xr = Zr;
                            var ta = 800,
                                ea = 16;
                            var na = Date.now;

                            function ia(t) {
                                var e = 0,
                                    n = 0;
                                return function() {
                                    var i = na(),
                                        o = ea - (i - n);
                                    n = i;
                                    if (o > 0) { if (++e >= ta) { return arguments[0] } } else { e = 0 }
                                    return t.apply(undefined, arguments)
                                }
                            }
                            var oa = ia;
                            var sa = oa(Xr);
                            var ra = sa;

                            function aa(t, e) { return ra(Qr(t, e, qr), t + "") }
                            var ca = aa;

                            function la(t, e, n) { if (!ct(n)) { return false } var i = typeof e; if (i == "number" ? Zn(n) && tn(e, n.length) : i == "string" && e in n) { return V(n[e], t) } return false }
                            var da = la;

                            function ua(t) {
                                return ca((function(e, n) {
                                    var i = -1,
                                        o = n.length,
                                        s = o > 1 ? n[o - 1] : undefined,
                                        r = o > 2 ? n[2] : undefined;
                                    s = t.length > 3 && typeof s == "function" ? (o--, s) : undefined;
                                    if (r && da(n[0], n[1], r)) {
                                        s = o < 3 ? undefined : s;
                                        o = 1
                                    }
                                    e = Object(e);
                                    while (++i < o) { var a = n[i]; if (a) { t(e, a, i, s) } }
                                    return e
                                }))
                            }
                            var ha = ua;
                            var fa = ha((function(t, e) { ze(e, di(e), t) }));
                            var ga = fa;
                            const ma = Symbol("observableProperties");
                            const pa = Symbol("boundObservables");
                            const ba = Symbol("boundProperties");
                            const wa = {set(t, e) {
                                    if (ct(t)) { Object.keys(t).forEach(e => { this.set(e, t[e]) }, this); return }
                                    _a(this);
                                    const n = this[ma];
                                    if (t in this && !n.has(t)) { throw new Zs["b"]("observable-set-cannot-override: Cannot override an existing property.", this) }
                                    Object.defineProperty(this, t, {
                                        enumerable: true,
                                        configurable: true,
                                        get() { return n.get(t) },
                                        set(e) {
                                            const i = n.get(t);
                                            let o = this.fire("set:" + t, t, e, i);
                                            if (o === undefined) { o = e }
                                            if (i !== o || !n.has(t)) {
                                                n.set(t, o);
                                                this.fire("change:" + t, t, o, i)
                                            }
                                        }
                                    });
                                    this[t] = e
                                },
                                bind(...t) {
                                    if (!t.length || !Aa(t)) { throw new Zs["b"]("observable-bind-wrong-properties: All properties must be strings.", this) }
                                    if (new Set(t).size !== t.length) { throw new Zs["b"]("observable-bind-duplicate-properties: Properties must be unique.", this) }
                                    _a(this);
                                    const e = this[ba];
                                    t.forEach(t => { if (e.has(t)) { throw new Zs["b"]("observable-bind-rebind: Cannot bind the same property more than once.", this) } });
                                    const n = new Map;
                                    t.forEach(t => {
                                        const i = { property: t, to: [] };
                                        e.set(t, i);
                                        n.set(t, i)
                                    });
                                    return { to: va, toMany: ya, _observable: this, _bindProperties: t, _to: [], _bindings: n }
                                },
                                unbind(...t) {
                                    if (!(ma in this)) { return }
                                    const e = this[ba];
                                    const n = this[pa];
                                    if (t.length) {
                                        if (!Aa(t)) { throw new Zs["b"]("observable-unbind-wrong-properties: Properties must be strings.", this) }
                                        t.forEach(t => {
                                            const i = e.get(t);
                                            if (!i) { return }
                                            let o, s, r, a;
                                            i.to.forEach(t => {
                                                o = t[0];
                                                s = t[1];
                                                r = n.get(o);
                                                a = r[s];
                                                a.delete(i);
                                                if (!a.size) { delete r[s] }
                                                if (!Object.keys(r).length) {
                                                    n.delete(o);
                                                    this.stopListening(o, "change")
                                                }
                                            });
                                            e.delete(t)
                                        })
                                    } else {
                                        n.forEach((t, e) => { this.stopListening(e, "change") });
                                        n.clear();
                                        e.clear()
                                    }
                                },
                                decorate(t) {
                                    const e = this[t];
                                    if (!e) { throw new Zs["b"]("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.", this, { object: this, methodName: t }) }
                                    this.on(t, (t, n) => { t.return = e.apply(this, n) });
                                    this[t] = function(...e) { return this.fire(t, e) }
                                }
                            };
                            ga(wa, lr);
                            var ka = wa;

                            function _a(t) {
                                if (ma in t) { return }
                                Object.defineProperty(t, ma, { value: new Map });
                                Object.defineProperty(t, pa, { value: new Map });
                                Object.defineProperty(t, ba, { value: new Map })
                            }

                            function va(...t) {
                                const e = Ca(...t);
                                const n = Array.from(this._bindings.keys());
                                const i = n.length;
                                if (!e.callback && e.to.length > 1) { throw new Zs["b"]("observable-bind-to-no-callback: Binding multiple observables only possible with callback.", this) }
                                if (i > 1 && e.callback) { throw new Zs["b"]("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.", this) }
                                e.to.forEach(t => { if (t.properties.length && t.properties.length !== i) { throw new Zs["b"]("observable-bind-to-properties-length: The number of properties must match.", this) } if (!t.properties.length) { t.properties = this._bindProperties } });
                                this._to = e.to;
                                if (e.callback) { this._bindings.get(n[0]).callback = e.callback }
                                Ma(this._observable, this._to);
                                Pa(this);
                                this._bindProperties.forEach(t => { Sa(this._observable, t) })
                            }

                            function ya(t, e, n) {
                                if (this._bindings.size > 1) { throw new Zs["b"]("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().", this) }
                                this.to(...xa(t, e), n)
                            }

                            function xa(t, e) { const n = t.map(t => [t, e]); return Array.prototype.concat.apply([], n) }

                            function Aa(t) { return t.every(t => typeof t == "string") }

                            function Ca(...t) {
                                if (!t.length) { throw new Zs["b"]("observable-bind-to-parse-error: Invalid argument syntax in `to()`.", null) }
                                const e = { to: [] };
                                let n;
                                if (typeof t[t.length - 1] == "function") { e.callback = t.pop() }
                                t.forEach(t => {
                                    if (typeof t == "string") { n.properties.push(t) } else if (typeof t == "object") {
                                        n = { observable: t, properties: [] };
                                        e.to.push(n)
                                    } else { throw new Zs["b"]("observable-bind-to-parse-error: Invalid argument syntax in `to()`.", null) }
                                });
                                return e
                            }

                            function Ta(t, e, n, i) {
                                const o = t[pa];
                                const s = o.get(n);
                                const r = s || {};
                                if (!r[i]) { r[i] = new Set }
                                r[i].add(e);
                                if (!s) { o.set(n, r) }
                            }

                            function Pa(t) {
                                let e;
                                t._bindings.forEach((n, i) => {
                                    t._to.forEach(o => {
                                        e = o.properties[n.callback ? 0 : t._bindProperties.indexOf(i)];
                                        n.to.push([o.observable, e]);
                                        Ta(t._observable, n, o.observable, e)
                                    })
                                })
                            }

                            function Sa(t, e) {
                                const n = t[ba];
                                const i = n.get(e);
                                let o;
                                if (i.callback) { o = i.callback.apply(t, i.to.map(t => t[0][t[1]])) } else {
                                    o = i.to[0];
                                    o = o[0][o[1]]
                                }
                                if (t.hasOwnProperty(e)) { t[e] = o } else { t.set(e, o) }
                            }

                            function Ma(t, e) { e.forEach(e => { const n = t[pa]; let i; if (!n.get(e.observable)) { t.listenTo(e.observable, "change", (o, s) => { i = n.get(e.observable)[s]; if (i) { i.forEach(e => { Sa(t, e.property) }) } }) } }) }
                            const Ea = Symbol("document");
                            class Ia extends Fr {
                                constructor(t, e, n) {
                                    super(t, e, n);
                                    this.set("isReadOnly", false);
                                    this.set("isFocused", false)
                                }
                                is(t, e = null) { const n = t && t.replace(/^view:/, ""); if (!e) { return n == "editableElement" || super.is(t) } else { return n == "editableElement" && e == this.name || super.is(t, e) } }
                                destroy() { this.stopListening() }
                                get document() { return this.getCustomProperty(Ea) }
                                set _document(t) {
                                    if (this.getCustomProperty(Ea)) { throw new Zs["b"]("view-editableelement-document-already-set: View document is already set.", this) }
                                    this._setCustomProperty(Ea, t);
                                    this.bind("isReadOnly").to(t);
                                    this.bind("isFocused").to(t, "isFocused", e => e && t.selection.editableElement == this);
                                    this.listenTo(t.selection, "change", () => { this.isFocused = t.isFocused && t.selection.editableElement == this })
                                }
                            }
                            _r(Ia, ka);
                            const Na = Symbol("rootName");
                            class Oa extends Ia {
                                constructor(t) {
                                    super(t);
                                    this.rootName = "main"
                                }
                                is(t, e = null) { const n = t.replace(/^view:/, ""); if (!e) { return n == "rootElement" || super.is(t) } else { return n == "rootElement" && e == this.name || super.is(t, e) } }
                                get rootName() { return this.getCustomProperty(Na) }
                                set rootName(t) { this._setCustomProperty(Na, t) }
                                set _name(t) { this.name = t }
                            }
                            class Ra {
                                constructor(t = {}) {
                                    if (!t.boundaries && !t.startPosition) { throw new Zs["b"]("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.", null) }
                                    if (t.direction && t.direction != "forward" && t.direction != "backward") { throw new Zs["b"]("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", t.startPosition, { direction: t.direction }) }
                                    this.boundaries = t.boundaries || null;
                                    if (t.startPosition) { this.position = La._createAt(t.startPosition) } else { this.position = La._createAt(t.boundaries[t.direction == "backward" ? "end" : "start"]) }
                                    this.direction = t.direction || "forward";
                                    this.singleCharacters = !!t.singleCharacters;
                                    this.shallow = !!t.shallow;
                                    this.ignoreElementEnd = !!t.ignoreElementEnd;
                                    this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null;
                                    this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null
                                }[Symbol.iterator]() { return this }
                                skip(t) {
                                    let e, n, i;
                                    do {
                                        i = this.position;
                                        ({ done: e, value: n } = this.next())
                                    } while (!e && t(n));
                                    if (!e) { this.position = i }
                                }
                                next() { if (this.direction == "forward") { return this._next() } else { return this._previous() } }
                                _next() {
                                    let t = this.position.clone();
                                    const e = this.position;
                                    const n = t.parent;
                                    if (n.parent === null && t.offset === n.childCount) { return { done: true } }
                                    if (n === this._boundaryEndParent && t.offset == this.boundaries.end.offset) { return { done: true } }
                                    let i;
                                    if (n instanceof Tr) {
                                        if (t.isAtEnd) { this.position = La._createAfter(n); return this._next() }
                                        i = n.data[t.offset]
                                    } else { i = n.getChild(t.offset) }
                                    if (i instanceof Dr) {
                                        if (!this.shallow) { t = new La(i, 0) } else { t.offset++ }
                                        this.position = t;
                                        return this._formatReturnValue("elementStart", i, e, t, 1)
                                    } else if (i instanceof Tr) {
                                        if (this.singleCharacters) {
                                            t = new La(i, 0);
                                            this.position = t;
                                            return this._next()
                                        } else {
                                            let n = i.data.length;
                                            let o;
                                            if (i == this._boundaryEndParent) {
                                                n = this.boundaries.end.offset;
                                                o = new Pr(i, 0, n);
                                                t = La._createAfter(o)
                                            } else {
                                                o = new Pr(i, 0, i.data.length);
                                                t.offset++
                                            }
                                            this.position = t;
                                            return this._formatReturnValue("text", o, e, t, n)
                                        }
                                    } else if (typeof i == "string") {
                                        let i;
                                        if (this.singleCharacters) { i = 1 } else {
                                            const e = n === this._boundaryEndParent ? this.boundaries.end.offset : n.data.length;
                                            i = e - t.offset
                                        }
                                        const o = new Pr(n, t.offset, i);
                                        t.offset += i;
                                        this.position = t;
                                        return this._formatReturnValue("text", o, e, t, i)
                                    } else {
                                        t = La._createAfter(n);
                                        this.position = t;
                                        if (this.ignoreElementEnd) { return this._next() } else { return this._formatReturnValue("elementEnd", n, e, t) }
                                    }
                                }
                                _previous() {
                                    let t = this.position.clone();
                                    const e = this.position;
                                    const n = t.parent;
                                    if (n.parent === null && t.offset === 0) { return { done: true } }
                                    if (n == this._boundaryStartParent && t.offset == this.boundaries.start.offset) { return { done: true } }
                                    let i;
                                    if (n instanceof Tr) {
                                        if (t.isAtStart) { this.position = La._createBefore(n); return this._previous() }
                                        i = n.data[t.offset - 1]
                                    } else { i = n.getChild(t.offset - 1) }
                                    if (i instanceof Dr) {
                                        if (!this.shallow) {
                                            t = new La(i, i.childCount);
                                            this.position = t;
                                            if (this.ignoreElementEnd) { return this._previous() } else { return this._formatReturnValue("elementEnd", i, e, t) }
                                        } else {
                                            t.offset--;
                                            this.position = t;
                                            return this._formatReturnValue("elementStart", i, e, t, 1)
                                        }
                                    } else if (i instanceof Tr) {
                                        if (this.singleCharacters) {
                                            t = new La(i, i.data.length);
                                            this.position = t;
                                            return this._previous()
                                        } else {
                                            let n = i.data.length;
                                            let o;
                                            if (i == this._boundaryStartParent) {
                                                const e = this.boundaries.start.offset;
                                                o = new Pr(i, e, i.data.length - e);
                                                n = o.data.length;
                                                t = La._createBefore(o)
                                            } else {
                                                o = new Pr(i, 0, i.data.length);
                                                t.offset--
                                            }
                                            this.position = t;
                                            return this._formatReturnValue("text", o, e, t, n)
                                        }
                                    } else if (typeof i == "string") {
                                        let i;
                                        if (!this.singleCharacters) {
                                            const e = n === this._boundaryStartParent ? this.boundaries.start.offset : 0;
                                            i = t.offset - e
                                        } else { i = 1 }
                                        t.offset -= i;
                                        const o = new Pr(n, t.offset, i);
                                        this.position = t;
                                        return this._formatReturnValue("text", o, e, t, i)
                                    } else {
                                        t = La._createBefore(n);
                                        this.position = t;
                                        return this._formatReturnValue("elementStart", n, e, t, 1)
                                    }
                                }
                                _formatReturnValue(t, e, n, i, o) {
                                    if (e instanceof Pr) {
                                        if (e.offsetInText + e.data.length == e.textNode.data.length) {
                                            if (this.direction == "forward" && !(this.boundaries && this.boundaries.end.isEqual(this.position))) {
                                                i = La._createAfter(e.textNode);
                                                this.position = i
                                            } else { n = La._createAfter(e.textNode) }
                                        }
                                        if (e.offsetInText === 0) {
                                            if (this.direction == "backward" && !(this.boundaries && this.boundaries.start.isEqual(this.position))) {
                                                i = La._createBefore(e.textNode);
                                                this.position = i
                                            } else { n = La._createBefore(e.textNode) }
                                        }
                                    }
                                    return { done: false, value: { type: t, item: e, previousPosition: n, nextPosition: i, length: o } }
                                }
                            }
                            class La {
                                constructor(t, e) {
                                    this.parent = t;
                                    this.offset = e
                                }
                                get nodeAfter() { if (this.parent.is("text")) { return null } return this.parent.getChild(this.offset) || null }
                                get nodeBefore() { if (this.parent.is("text")) { return null } return this.parent.getChild(this.offset - 1) || null }
                                get isAtStart() { return this.offset === 0 }
                                get isAtEnd() { const t = this.parent.is("text") ? this.parent.data.length : this.parent.childCount; return this.offset === t }
                                get root() { return this.parent.root }
                                get editableElement() { let t = this.parent; while (!(t instanceof Ia)) { if (t.parent) { t = t.parent } else { return null } } return t }
                                getShiftedBy(t) {
                                    const e = La._createAt(this);
                                    const n = e.offset + t;
                                    e.offset = n < 0 ? 0 : n;
                                    return e
                                }
                                getLastMatchingPosition(t, e = {}) {
                                    e.startPosition = this;
                                    const n = new Ra(e);
                                    n.skip(t);
                                    return n.position
                                }
                                getAncestors() { if (this.parent.is("documentFragment")) { return [this.parent] } else { return this.parent.getAncestors({ includeSelf: true }) } }
                                getCommonAncestor(t) { const e = this.getAncestors(); const n = t.getAncestors(); let i = 0; while (e[i] == n[i] && e[i]) { i++ } return i === 0 ? null : e[i - 1] }
                                is(t) { return t == "position" || t == "view:position" }
                                isEqual(t) { return this.parent == t.parent && this.offset == t.offset }
                                isBefore(t) { return this.compareWith(t) == "before" }
                                isAfter(t) { return this.compareWith(t) == "after" }
                                compareWith(t) {
                                    if (this.root !== t.root) { return "different" }
                                    if (this.isEqual(t)) { return "same" }
                                    const e = this.parent.is("node") ? this.parent.getPath() : [];
                                    const n = t.parent.is("node") ? t.parent.getPath() : [];
                                    e.push(this.offset);
                                    n.push(t.offset);
                                    const i = vr(e, n);
                                    switch (i) {
                                        case "prefix":
                                            return "before";
                                        case "extension":
                                            return "after";
                                        default:
                                            return e[i] < n[i] ? "before" : "after"
                                    }
                                }
                                getWalker(t = {}) { t.startPosition = this; return new Ra(t) }
                                clone() { return new La(this.parent, this.offset) }
                                static _createAt(t, e) { if (t instanceof La) { return new this(t.parent, t.offset) } else { const n = t; if (e == "end") { e = n.is("text") ? n.data.length : n.childCount } else if (e == "before") { return this._createBefore(n) } else if (e == "after") { return this._createAfter(n) } else if (e !== 0 && !e) { throw new Zs["b"]("view-createPositionAt-offset-required: " + "View#createPositionAt() requires the offset when the first parameter is a view item.", n) } return new La(n, e) } }
                                static _createAfter(t) { if (t.is("textProxy")) { return new La(t.textNode, t.offsetInText + t.data.length) } if (!t.parent) { throw new Zs["b"]("view-position-after-root: You can not make position after root.", t, { root: t }) } return new La(t.parent, t.index + 1) }
                                static _createBefore(t) { if (t.is("textProxy")) { return new La(t.textNode, t.offsetInText) } if (!t.parent) { throw new Zs["b"]("view-position-before-root: You can not make position before root.", t, { root: t }) } return new La(t.parent, t.index) }
                            }
                            class Da {
                                constructor(t, e = null) {
                                    this.start = t.clone();
                                    this.end = e ? e.clone() : t.clone()
                                } * [Symbol.iterator]() { yield* new Ra({ boundaries: this, ignoreElementEnd: true }) }
                                get isCollapsed() { return this.start.isEqual(this.end) }
                                get isFlat() { return this.start.parent === this.end.parent }
                                get root() { return this.start.root }
                                getEnlarged() { let t = this.start.getLastMatchingPosition(za, { direction: "backward" }); let e = this.end.getLastMatchingPosition(za); if (t.parent.is("text") && t.isAtStart) { t = La._createBefore(t.parent) } if (e.parent.is("text") && e.isAtEnd) { e = La._createAfter(e.parent) } return new Da(t, e) }
                                getTrimmed() { let t = this.start.getLastMatchingPosition(za); if (t.isAfter(this.end) || t.isEqual(this.end)) { return new Da(t, t) } let e = this.end.getLastMatchingPosition(za, { direction: "backward" }); const n = t.nodeAfter; const i = e.nodeBefore; if (n && n.is("text")) { t = new La(n, 0) } if (i && i.is("text")) { e = new La(i, i.data.length) } return new Da(t, e) }
                                isEqual(t) { return this == t || this.start.isEqual(t.start) && this.end.isEqual(t.end) }
                                containsPosition(t) { return t.isAfter(this.start) && t.isBefore(this.end) }
                                containsRange(t, e = false) { if (t.isCollapsed) { e = false } const n = this.containsPosition(t.start) || e && this.start.isEqual(t.start); const i = this.containsPosition(t.end) || e && this.end.isEqual(t.end); return n && i }
                                getDifference(t) { const e = []; if (this.isIntersecting(t)) { if (this.containsPosition(t.start)) { e.push(new Da(this.start, t.start)) } if (this.containsPosition(t.end)) { e.push(new Da(t.end, this.end)) } } else { e.push(this.clone()) } return e }
                                getIntersection(t) { if (this.isIntersecting(t)) { let e = this.start; let n = this.end; if (this.containsPosition(t.start)) { e = t.start } if (this.containsPosition(t.end)) { n = t.end } return new Da(e, n) } return null }
                                getWalker(t = {}) { t.boundaries = this; return new Ra(t) }
                                getCommonAncestor() { return this.start.getCommonAncestor(this.end) }
                                clone() { return new Da(this.start, this.end) } * getItems(t = {}) {
                                    t.boundaries = this;
                                    t.ignoreElementEnd = true;
                                    const e = new Ra(t);
                                    for (const t of e) { yield t.item }
                                } * getPositions(t = {}) {
                                    t.boundaries = this;
                                    const e = new Ra(t);
                                    yield e.position;
                                    for (const t of e) { yield t.nextPosition }
                                }
                                is(t) { return t == "range" || t == "view:range" }
                                isIntersecting(t) { return this.start.isBefore(t.end) && this.end.isAfter(t.start) }
                                static _createFromParentsAndOffsets(t, e, n, i) { return new this(new La(t, e), new La(n, i)) }
                                static _createFromPositionAndShift(t, e) { const n = t; const i = t.getShiftedBy(e); return e > 0 ? new this(n, i) : new this(i, n) }
                                static _createIn(t) { return this._createFromParentsAndOffsets(t, 0, t, t.childCount) }
                                static _createOn(t) { const e = t.is("textProxy") ? t.offsetSize : 1; return this._createFromPositionAndShift(La._createBefore(t), e) }
                            }

                            function za(t) { if (t.item.is("attributeElement") || t.item.is("uiElement")) { return true } return false }

                            function Va(t) { let e = 0; for (const n of t) { e++ } return e }
                            class ja {
                                constructor(t = null, e, n) {
                                    this._ranges = [];
                                    this._lastRangeBackward = false;
                                    this._isFake = false;
                                    this._fakeSelectionLabel = "";
                                    this.setTo(t, e, n)
                                }
                                get isFake() { return this._isFake }
                                get fakeSelectionLabel() { return this._fakeSelectionLabel }
                                get anchor() { if (!this._ranges.length) { return null } const t = this._ranges[this._ranges.length - 1]; const e = this._lastRangeBackward ? t.end : t.start; return e.clone() }
                                get focus() { if (!this._ranges.length) { return null } const t = this._ranges[this._ranges.length - 1]; const e = this._lastRangeBackward ? t.start : t.end; return e.clone() }
                                get isCollapsed() { return this.rangeCount === 1 && this._ranges[0].isCollapsed }
                                get rangeCount() { return this._ranges.length }
                                get isBackward() { return !this.isCollapsed && this._lastRangeBackward }
                                get editableElement() { if (this.anchor) { return this.anchor.editableElement } return null } * getRanges() { for (const t of this._ranges) { yield t.clone() } }
                                getFirstRange() { let t = null; for (const e of this._ranges) { if (!t || e.start.isBefore(t.start)) { t = e } } return t ? t.clone() : null }
                                getLastRange() { let t = null; for (const e of this._ranges) { if (!t || e.end.isAfter(t.end)) { t = e } } return t ? t.clone() : null }
                                getFirstPosition() { const t = this.getFirstRange(); return t ? t.start.clone() : null }
                                getLastPosition() { const t = this.getLastRange(); return t ? t.end.clone() : null }
                                isEqual(t) { if (this.isFake != t.isFake) { return false } if (this.isFake && this.fakeSelectionLabel != t.fakeSelectionLabel) { return false } if (this.rangeCount != t.rangeCount) { return false } else if (this.rangeCount === 0) { return true } if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) { return false } for (const e of this._ranges) { let n = false; for (const i of t._ranges) { if (e.isEqual(i)) { n = true; break } } if (!n) { return false } } return true }
                                isSimilar(t) { if (this.isBackward != t.isBackward) { return false } const e = Va(this.getRanges()); const n = Va(t.getRanges()); if (e != n) { return false } if (e == 0) { return true } for (let e of this.getRanges()) { e = e.getTrimmed(); let n = false; for (let i of t.getRanges()) { i = i.getTrimmed(); if (e.start.isEqual(i.start) && e.end.isEqual(i.end)) { n = true; break } } if (!n) { return false } } return true }
                                getSelectedElement() { if (this.rangeCount !== 1) { return null } const t = this.getFirstRange(); let e = t.start.nodeAfter; let n = t.end.nodeBefore; if (t.start.parent.is("text") && t.start.isAtEnd && t.start.parent.nextSibling) { e = t.start.parent.nextSibling } if (t.end.parent.is("text") && t.end.isAtStart && t.end.parent.previousSibling) { n = t.end.parent.previousSibling } return e instanceof Dr && e == n ? e : null }
                                setTo(t, e, n) {
                                    if (t === null) {
                                        this._setRanges([]);
                                        this._setFakeOptions(e)
                                    } else if (t instanceof ja || t instanceof Ba) {
                                        this._setRanges(t.getRanges(), t.isBackward);
                                        this._setFakeOptions({ fake: t.isFake, label: t.fakeSelectionLabel })
                                    } else if (t instanceof Da) {
                                        this._setRanges([t], e && e.backward);
                                        this._setFakeOptions(e)
                                    } else if (t instanceof La) {
                                        this._setRanges([new Da(t)]);
                                        this._setFakeOptions(e)
                                    } else if (t instanceof Cr) {
                                        const i = !!n && !!n.backward;
                                        let o;
                                        if (e === undefined) { throw new Zs["b"]("view-selection-setTo-required-second-parameter: " + "selection.setTo requires the second parameter when the first parameter is a node.", this) } else if (e == "in") { o = Da._createIn(t) } else if (e == "on") { o = Da._createOn(t) } else { o = new Da(La._createAt(t, e)) }
                                        this._setRanges([o], i);
                                        this._setFakeOptions(n)
                                    } else if (Mr(t)) {
                                        this._setRanges(t, e && e.backward);
                                        this._setFakeOptions(e)
                                    } else { throw new Zs["b"]("view-selection-setTo-not-selectable: Cannot set selection to given place.", this) }
                                    this.fire("change")
                                }
                                setFocus(t, e) {
                                    if (this.anchor === null) { throw new Zs["b"]("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.", this) }
                                    const n = La._createAt(t, e);
                                    if (n.compareWith(this.focus) == "same") { return }
                                    const i = this.anchor;
                                    this._ranges.pop();
                                    if (n.compareWith(i) == "before") { this._addRange(new Da(n, i), true) } else { this._addRange(new Da(i, n)) }
                                    this.fire("change")
                                }
                                is(t) { return t == "selection" || t == "view:selection" }
                                _setRanges(t, e = false) {
                                    t = Array.from(t);
                                    this._ranges = [];
                                    for (const e of t) { this._addRange(e) }
                                    this._lastRangeBackward = !!e
                                }
                                _setFakeOptions(t = {}) {
                                    this._isFake = !!t.fake;
                                    this._fakeSelectionLabel = t.fake ? t.label || "" : ""
                                }
                                _addRange(t, e = false) {
                                    if (!(t instanceof Da)) { throw new Zs["b"]("view-selection-add-range-not-range: " + "Selection range set to an object that is not an instance of view.Range", this) }
                                    this._pushRange(t);
                                    this._lastRangeBackward = !!e
                                }
                                _pushRange(t) {
                                    for (const e of this._ranges) { if (t.isIntersecting(e)) { throw new Zs["b"]("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.", this, { addedRange: t, intersectingRange: e }) } }
                                    this._ranges.push(new Da(t.start, t.end))
                                }
                            }
                            _r(ja, lr);
                            class Ba {
                                constructor(t = null, e, n) {
                                    this._selection = new ja;
                                    this._selection.delegate("change").to(this);
                                    this._selection.setTo(t, e, n)
                                }
                                get isFake() { return this._selection.isFake }
                                get fakeSelectionLabel() { return this._selection.fakeSelectionLabel }
                                get anchor() { return this._selection.anchor }
                                get focus() { return this._selection.focus }
                                get isCollapsed() { return this._selection.isCollapsed }
                                get rangeCount() { return this._selection.rangeCount }
                                get isBackward() { return this._selection.isBackward }
                                get editableElement() { return this._selection.editableElement }
                                get _ranges() { return this._selection._ranges } * getRanges() { yield* this._selection.getRanges() }
                                getFirstRange() { return this._selection.getFirstRange() }
                                getLastRange() { return this._selection.getLastRange() }
                                getFirstPosition() { return this._selection.getFirstPosition() }
                                getLastPosition() { return this._selection.getLastPosition() }
                                getSelectedElement() { return this._selection.getSelectedElement() }
                                isEqual(t) { return this._selection.isEqual(t) }
                                isSimilar(t) { return this._selection.isSimilar(t) }
                                is(t) { return t == "selection" || t == "documentSelection" || t == "view:selection" || t == "view:documentSelection" }
                                _setTo(t, e, n) { this._selection.setTo(t, e, n) }
                                _setFocus(t, e) { this._selection.setFocus(t, e) }
                            }
                            _r(Ba, lr);
                            class Fa {
                                constructor(t = {}) {
                                    this._items = [];
                                    this._itemMap = new Map;
                                    this._idProperty = t.idProperty || "id";
                                    this._bindToExternalToInternalMap = new WeakMap;
                                    this._bindToInternalToExternalMap = new WeakMap;
                                    this._skippedIndexesFromExternal = []
                                }
                                get length() { return this._items.length }
                                get first() { return this._items[0] || null }
                                get last() { return this._items[this.length - 1] || null }
                                add(t, e) {
                                    let n;
                                    const i = this._idProperty;
                                    if (i in t) { n = t[i]; if (typeof n != "string") { throw new Zs["b"]("collection-add-invalid-id", this) } if (this.get(n)) { throw new Zs["b"]("collection-add-item-already-exists", this) } } else { t[i] = n = nr() }
                                    if (e === undefined) { e = this._items.length } else if (e > this._items.length || e < 0) { throw new Zs["b"]("collection-add-item-invalid-index", this) }
                                    this._items.splice(e, 0, t);
                                    this._itemMap.set(n, t);
                                    this.fire("add", t, e);
                                    return this
                                }
                                get(t) { let e; if (typeof t == "string") { e = this._itemMap.get(t) } else if (typeof t == "number") { e = this._items[t] } else { throw new Zs["b"]("collection-get-invalid-arg: Index or id must be given.", this) } return e || null }
                                has(t) { if (typeof t == "string") { return this._itemMap.has(t) } else { const e = this._idProperty; const n = t[e]; return this._itemMap.has(n) } }
                                getIndex(t) { let e; if (typeof t == "string") { e = this._itemMap.get(t) } else { e = t } return this._items.indexOf(e) }
                                remove(t) {
                                    let e, n, i;
                                    let o = false;
                                    const s = this._idProperty;
                                    if (typeof t == "string") {
                                        n = t;
                                        i = this._itemMap.get(n);
                                        o = !i;
                                        if (i) { e = this._items.indexOf(i) }
                                    } else if (typeof t == "number") {
                                        e = t;
                                        i = this._items[e];
                                        o = !i;
                                        if (i) { n = i[s] }
                                    } else {
                                        i = t;
                                        n = i[s];
                                        e = this._items.indexOf(i);
                                        o = e == -1 || !this._itemMap.get(n)
                                    }
                                    if (o) { throw new Zs["b"]("collection-remove-404: Item not found.", this) }
                                    this._items.splice(e, 1);
                                    this._itemMap.delete(n);
                                    const r = this._bindToInternalToExternalMap.get(i);
                                    this._bindToInternalToExternalMap.delete(i);
                                    this._bindToExternalToInternalMap.delete(r);
                                    this.fire("remove", i, e);
                                    return i
                                }
                                map(t, e) { return this._items.map(t, e) }
                                find(t, e) { return this._items.find(t, e) }
                                filter(t, e) { return this._items.filter(t, e) }
                                clear() {
                                    if (this._bindToCollection) {
                                        this.stopListening(this._bindToCollection);
                                        this._bindToCollection = null
                                    }
                                    while (this.length) { this.remove(0) }
                                }
                                bindTo(t) {
                                    if (this._bindToCollection) { throw new Zs["b"]("collection-bind-to-rebind: The collection cannot be bound more than once.", this) }
                                    this._bindToCollection = t;
                                    return { as: t => { this._setUpBindToBinding(e => new t(e)) }, using: t => { if (typeof t == "function") { this._setUpBindToBinding(e => t(e)) } else { this._setUpBindToBinding(e => e[t]) } } }
                                }
                                _setUpBindToBinding(t) {
                                    const e = this._bindToCollection;
                                    const n = (n, i, o) => {
                                        const s = e._bindToCollection == this;
                                        const r = e._bindToInternalToExternalMap.get(i);
                                        if (s && r) {
                                            this._bindToExternalToInternalMap.set(i, r);
                                            this._bindToInternalToExternalMap.set(r, i)
                                        } else {
                                            const n = t(i);
                                            if (!n) { this._skippedIndexesFromExternal.push(o); return }
                                            let s = o;
                                            for (const t of this._skippedIndexesFromExternal) { if (o > t) { s-- } }
                                            for (const t of e._skippedIndexesFromExternal) { if (s >= t) { s++ } }
                                            this._bindToExternalToInternalMap.set(i, n);
                                            this._bindToInternalToExternalMap.set(n, i);
                                            this.add(n, s);
                                            for (let t = 0; t < e._skippedIndexesFromExternal.length; t++) { if (s <= e._skippedIndexesFromExternal[t]) { e._skippedIndexesFromExternal[t]++ } }
                                        }
                                    };
                                    for (const t of e) { n(null, t, e.getIndex(t)) }
                                    this.listenTo(e, "add", n);
                                    this.listenTo(e, "remove", (t, e, n) => {
                                        const i = this._bindToExternalToInternalMap.get(e);
                                        if (i) { this.remove(i) }
                                        this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce((t, e) => { if (n < e) { t.push(e - 1) } if (n > e) { t.push(e) } return t }, [])
                                    })
                                }[Symbol.iterator]() { return this._items[Symbol.iterator]() }
                            }
                            _r(Fa, lr);
                            class Ha {
                                constructor() {
                                    this.selection = new Ba;
                                    this.roots = new Fa({ idProperty: "rootName" });
                                    this.set("isReadOnly", false);
                                    this.set("isFocused", false);
                                    this.set("isComposing", false);
                                    this._postFixers = new Set
                                }
                                getRoot(t = "main") { return this.roots.get(t) }
                                registerPostFixer(t) { this._postFixers.add(t) }
                                destroy() {
                                    this.roots.map(t => t.destroy());
                                    this.stopListening()
                                }
                                _callPostFixers(t) {
                                    let e = false;
                                    do { for (const n of this._postFixers) { e = n(t); if (e) { break } } } while (e)
                                }
                            }
                            _r(Ha, ka);
                            const Ua = 10;
                            class qa extends Dr {
                                constructor(t, e, n) {
                                    super(t, e, n);
                                    this.getFillerOffset = Wa;
                                    this._priority = Ua;
                                    this._id = null;
                                    this._clonesGroup = null
                                }
                                get priority() { return this._priority }
                                get id() { return this._id }
                                getElementsWithSameId() { if (this.id === null) { throw new Zs["b"]("attribute-element-get-elements-with-same-id-no-id: " + "Cannot get elements with the same id for an attribute element without id.", this) } return new Set(this._clonesGroup) }
                                is(t, e = null) { const n = t && t.replace(/^view:/, ""); if (!e) { return n == "attributeElement" || super.is(t) } else { return n == "attributeElement" && e == this.name || super.is(t, e) } }
                                isSimilar(t) { if (this.id !== null || t.id !== null) { return this.id === t.id } return super.isSimilar(t) && this.priority == t.priority }
                                _clone(t) {
                                    const e = super._clone(t);
                                    e._priority = this._priority;
                                    e._id = this._id;
                                    return e
                                }
                            }
                            qa.DEFAULT_PRIORITY = Ua;

                            function Wa() {
                                if ($a(this)) { return null }
                                let t = this.parent;
                                while (t && t.is("attributeElement")) {
                                    if ($a(t) > 1) { return null }
                                    t = t.parent
                                }
                                if (!t || $a(t) > 1) { return null }
                                return this.childCount
                            }

                            function $a(t) { return Array.from(t.getChildren()).filter(t => !t.is("uiElement")).length }
                            class Ya extends Dr {
                                constructor(t, e, n) {
                                    super(t, e, n);
                                    this.getFillerOffset = Ga
                                }
                                is(t, e = null) { const n = t.replace(/^view:/, ""); if (!e) { return n == "emptyElement" || super.is(t) } else { return n == "emptyElement" && e == this.name || super.is(t, e) } }
                                _insertChild(t, e) { if (e && (e instanceof Cr || Array.from(e).length > 0)) { throw new Zs["b"]("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.", [this, e]) } }
                            }

                            function Ga() { return null }
                            const Qa = navigator.userAgent.toLowerCase();
                            const Ka = { isMac: Za(Qa), isEdge: Xa(Qa), isGecko: tc(Qa), isSafari: ec(Qa), isAndroid: nc(Qa), features: { isRegExpUnicodePropertySupported: ic() } };
                            var Ja = Ka;

                            function Za(t) { return t.indexOf("macintosh") > -1 }

                            function Xa(t) { return !!t.match(/edge\/(\d+.?\d*)/) }

                            function tc(t) { return !!t.match(/gecko\/\d+/) }

                            function ec(t) { return t.indexOf(" applewebkit/") > -1 && t.indexOf("chrome") === -1 }

                            function nc(t) { return t.indexOf("android") > -1 }

                            function ic() { let t = false; try { t = "ć".search(new RegExp("[\\p{L}]", "u")) === 0 } catch (t) {} return t }
                            const oc = { "⌘": "ctrl", "⇧": "shift", "⌥": "alt" };
                            const sc = { ctrl: "⌘", shift: "⇧", alt: "⌥" };
                            const rc = dc();

                            function ac(t) { let e; if (typeof t == "string") { e = rc[t.toLowerCase()]; if (!e) { throw new Zs["b"]("keyboard-unknown-key: Unknown key name.", null, { key: t }) } } else { e = t.keyCode + (t.altKey ? rc.alt : 0) + (t.ctrlKey ? rc.ctrl : 0) + (t.shiftKey ? rc.shift : 0) } return e }

                            function cc(t) { if (typeof t == "string") { t = uc(t) } return t.map(t => typeof t == "string" ? ac(t) : t).reduce((t, e) => e + t, 0) }

                            function lc(t) { if (!Ja.isMac) { return t } return uc(t).map(t => sc[t.toLowerCase()] || t).reduce((t, e) => { if (t.slice(-1) in oc) { return t + e } else { return t + "+" + e } }) }

                            function dc() {
                                const t = { arrowleft: 37, arrowup: 38, arrowright: 39, arrowdown: 40, backspace: 8, delete: 46, enter: 13, space: 32, esc: 27, tab: 9, ctrl: 1114112, cmd: 1114112, shift: 2228224, alt: 4456448 };
                                for (let e = 65; e <= 90; e++) {
                                    const n = String.fromCharCode(e);
                                    t[n.toLowerCase()] = e
                                }
                                for (let e = 48; e <= 57; e++) { t[e - 48] = e }
                                for (let e = 112; e <= 123; e++) { t["f" + (e - 111)] = e }
                                return t
                            }

                            function uc(t) { return t.split(/\s*\+\s*/) }
                            class hc extends Dr {
                                constructor(t, e, n) {
                                    super(t, e, n);
                                    this.getFillerOffset = gc
                                }
                                is(t, e = null) { const n = t.replace(/^view:/, ""); if (!e) { return n == "uiElement" || super.is(t) } else { return n == "uiElement" && e == this.name || super.is(t, e) } }
                                _insertChild(t, e) { if (e && (e instanceof Cr || Array.from(e).length > 0)) { throw new Zs["b"]("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.", this) } }
                                render(t) { return this.toDomElement(t) }
                                toDomElement(t) { const e = t.createElement(this.name); for (const t of this.getAttributeKeys()) { e.setAttribute(t, this.getAttribute(t)) } return e }
                            }

                            function fc(t) { t.document.on("keydown", (e, n) => mc(e, n, t.domConverter)) }

                            function gc() { return null }

                            function mc(t, e, n) { if (e.keyCode == rc.arrowright) { const t = e.domTarget.ownerDocument.defaultView.getSelection(); const i = t.rangeCount == 1 && t.getRangeAt(0).collapsed; if (i || e.shiftKey) { const e = t.focusNode; const o = t.focusOffset; const s = n.domPositionToView(e, o); if (s === null) { return } let r = false; const a = s.getLastMatchingPosition(t => { if (t.item.is("uiElement")) { r = true } if (t.item.is("uiElement") || t.item.is("attributeElement")) { return true } return false }); if (r) { const e = n.viewPositionToDom(a); if (i) { t.collapse(e.parent, e.offset) } else { t.extend(e.parent, e.offset) } } } } }
                            class pc {
                                constructor(t) { this._children = []; if (t) { this._insertChild(0, t) } }[Symbol.iterator]() { return this._children[Symbol.iterator]() }
                                get childCount() { return this._children.length }
                                get isEmpty() { return this.childCount === 0 }
                                get root() { return this }
                                get parent() { return null }
                                is(t) { return t == "documentFragment" || t == "view:documentFragment" }
                                _appendChild(t) { return this._insertChild(this.childCount, t) }
                                getChild(t) { return this._children[t] }
                                getChildIndex(t) { return this._children.indexOf(t) }
                                getChildren() { return this._children[Symbol.iterator]() }
                                _insertChild(t, e) {
                                    this._fireChange("children", this);
                                    let n = 0;
                                    const i = bc(e);
                                    for (const e of i) {
                                        if (e.parent !== null) { e._remove() }
                                        e.parent = this;
                                        this._children.splice(t, 0, e);
                                        t++;
                                        n++
                                    }
                                    return n
                                }
                                _removeChildren(t, e = 1) { this._fireChange("children", this); for (let n = t; n < t + e; n++) { this._children[n].parent = null } return this._children.splice(t, e) }
                                _fireChange(t, e) { this.fire("change:" + t, e) }
                            }
                            _r(pc, lr);

                            function bc(t) { if (typeof t == "string") { return [new Tr(t)] } if (!Mr(t)) { t = [t] } return Array.from(t).map(t => { if (typeof t == "string") { return new Tr(t) } if (t instanceof Pr) { return new Tr(t.data) } return t }) }
                            class wc {
                                constructor(t) {
                                    this.document = t;
                                    this._cloneGroups = new Map
                                }
                                setSelection(t, e, n) { this.document.selection._setTo(t, e, n) }
                                setSelectionFocus(t, e) { this.document.selection._setFocus(t, e) }
                                createText(t) { return new Tr(t) }
                                createAttributeElement(t, e, n = {}) { const i = new qa(t, e); if (n.priority) { i._priority = n.priority } if (n.id) { i._id = n.id } return i }
                                createContainerElement(t, e) { return new Fr(t, e) }
                                createEditableElement(t, e) {
                                    const n = new Ia(t, e);
                                    n._document = this.document;
                                    return n
                                }
                                createEmptyElement(t, e) { return new Ya(t, e) }
                                createUIElement(t, e, n) { const i = new hc(t, e); if (n) { i.render = n } return i }
                                setAttribute(t, e, n) { n._setAttribute(t, e) }
                                removeAttribute(t, e) { e._removeAttribute(t) }
                                addClass(t, e) { e._addClass(t) }
                                removeClass(t, e) { e._removeClass(t) }
                                setStyle(t, e, n) {
                                    if (R(t) && n === undefined) { n = e }
                                    n._setStyle(t, e)
                                }
                                removeStyle(t, e) { e._removeStyle(t) }
                                setCustomProperty(t, e, n) { n._setCustomProperty(t, e) }
                                removeCustomProperty(t, e) { return e._removeCustomProperty(t) }
                                breakAttributes(t) { if (t instanceof La) { return this._breakAttributes(t) } else { return this._breakAttributesRange(t) } }
                                breakContainer(t) {
                                    const e = t.parent;
                                    if (!e.is("containerElement")) { throw new Zs["b"]("view-writer-break-non-container-element: Trying to break an element which is not a container element.", this.document) }
                                    if (!e.parent) { throw new Zs["b"]("view-writer-break-root: Trying to break root element.", this.document) }
                                    if (t.isAtStart) { return La._createBefore(e) } else if (!t.isAtEnd) {
                                        const n = e._clone(false);
                                        this.insert(La._createAfter(e), n);
                                        const i = new Da(t, La._createAt(e, "end"));
                                        const o = new La(n, 0);
                                        this.move(i, o)
                                    }
                                    return La._createAfter(e)
                                }
                                mergeAttributes(t) {
                                    const e = t.offset;
                                    const n = t.parent;
                                    if (n.is("text")) { return t }
                                    if (n.is("attributeElement") && n.childCount === 0) {
                                        const t = n.parent;
                                        const e = n.index;
                                        n._remove();
                                        this._removeFromClonedElementsGroup(n);
                                        return this.mergeAttributes(new La(t, e))
                                    }
                                    const i = n.getChild(e - 1);
                                    const o = n.getChild(e);
                                    if (!i || !o) { return t }
                                    if (i.is("text") && o.is("text")) { return Ac(i, o) } else if (i.is("attributeElement") && o.is("attributeElement") && i.isSimilar(o)) {
                                        const t = i.childCount;
                                        i._appendChild(o.getChildren());
                                        o._remove();
                                        this._removeFromClonedElementsGroup(o);
                                        return this.mergeAttributes(new La(i, t))
                                    }
                                    return t
                                }
                                mergeContainers(t) {
                                    const e = t.nodeBefore;
                                    const n = t.nodeAfter;
                                    if (!e || !n || !e.is("containerElement") || !n.is("containerElement")) { throw new Zs["b"]("view-writer-merge-containers-invalid-position: " + "Element before and after given position cannot be merged.", this.document) }
                                    const i = e.getChild(e.childCount - 1);
                                    const o = i instanceof Tr ? La._createAt(i, "end") : La._createAt(e, "end");
                                    this.move(Da._createIn(n), La._createAt(e, "end"));
                                    this.remove(Da._createOn(n));
                                    return o
                                }
                                insert(t, e) {
                                    e = Mr(e) ? [...e] : [e];
                                    Cc(e, this.document);
                                    const n = _c(t);
                                    if (!n) { throw new Zs["b"]("view-writer-invalid-position-container", this.document) }
                                    const i = this._breakAttributes(t, true);
                                    const o = n._insertChild(i.offset, e);
                                    for (const t of e) { this._addToClonedElementsGroup(t) }
                                    const s = i.getShiftedBy(o);
                                    const r = this.mergeAttributes(i);
                                    if (o === 0) { return new Da(r, r) } else { if (!r.isEqual(i)) { s.offset-- } const t = this.mergeAttributes(s); return new Da(r, t) }
                                }
                                remove(t) {
                                    const e = t instanceof Da ? t : Da._createOn(t);
                                    Sc(e, this.document);
                                    if (e.isCollapsed) { return new pc }
                                    const { start: n, end: i } = this._breakAttributesRange(e, true);
                                    const o = n.parent;
                                    const s = i.offset - n.offset;
                                    const r = o._removeChildren(n.offset, s);
                                    for (const t of r) { this._removeFromClonedElementsGroup(t) }
                                    const a = this.mergeAttributes(n);
                                    e.start = a;
                                    e.end = a.clone();
                                    return new pc(r)
                                }
                                clear(t, e) {
                                    Sc(t, this.document);
                                    const n = t.getWalker({ direction: "backward", ignoreElementEnd: true });
                                    for (const i of n) {
                                        const n = i.item;
                                        let o;
                                        if (n.is("element") && e.isSimilar(n)) { o = Da._createOn(n) } else if (!i.nextPosition.isAfter(t.start) && n.is("textProxy")) { const t = n.getAncestors().find(t => t.is("element") && e.isSimilar(t)); if (t) { o = Da._createIn(t) } }
                                        if (o) {
                                            if (o.end.isAfter(t.end)) { o.end = t.end }
                                            if (o.start.isBefore(t.start)) { o.start = t.start }
                                            this.remove(o)
                                        }
                                    }
                                }
                                move(t, e) {
                                    let n;
                                    if (e.isAfter(t.end)) {
                                        e = this._breakAttributes(e, true);
                                        const i = e.parent;
                                        const o = i.childCount;
                                        t = this._breakAttributesRange(t, true);
                                        n = this.remove(t);
                                        e.offset += i.childCount - o
                                    } else { n = this.remove(t) }
                                    return this.insert(e, n)
                                }
                                wrap(t, e) {
                                    if (!(e instanceof qa)) { throw new Zs["b"]("view-writer-wrap-invalid-attribute", this.document) }
                                    Sc(t, this.document);
                                    if (!t.isCollapsed) { return this._wrapRange(t, e) } else {
                                        let n = t.start;
                                        if (n.parent.is("element") && !kc(n.parent)) { n = n.getLastMatchingPosition(t => t.item.is("uiElement")) }
                                        n = this._wrapPosition(n, e);
                                        const i = this.document.selection;
                                        if (i.isCollapsed && i.getFirstPosition().isEqual(t.start)) { this.setSelection(n) }
                                        return new Da(n)
                                    }
                                }
                                unwrap(t, e) {
                                    if (!(e instanceof qa)) { throw new Zs["b"]("view-writer-unwrap-invalid-attribute", this.document) }
                                    Sc(t, this.document);
                                    if (t.isCollapsed) { return t }
                                    const { start: n, end: i } = this._breakAttributesRange(t, true);
                                    const o = n.parent;
                                    const s = this._unwrapChildren(o, n.offset, i.offset, e);
                                    const r = this.mergeAttributes(s.start);
                                    if (!r.isEqual(s.start)) { s.end.offset-- }
                                    const a = this.mergeAttributes(s.end);
                                    return new Da(r, a)
                                }
                                rename(t, e) {
                                    const n = new Fr(t, e.getAttributes());
                                    this.insert(La._createAfter(e), n);
                                    this.move(Da._createIn(e), La._createAt(n, 0));
                                    this.remove(Da._createOn(e));
                                    return n
                                }
                                clearClonedElementsGroup(t) { this._cloneGroups.delete(t) }
                                createPositionAt(t, e) { return La._createAt(t, e) }
                                createPositionAfter(t) { return La._createAfter(t) }
                                createPositionBefore(t) { return La._createBefore(t) }
                                createRange(t, e) { return new Da(t, e) }
                                createRangeOn(t) { return Da._createOn(t) }
                                createRangeIn(t) { return Da._createIn(t) }
                                createSelection(t, e, n) { return new ja(t, e, n) }
                                _wrapChildren(t, e, n, i) {
                                    let o = e;
                                    const s = [];
                                    while (o < n) {
                                        const e = t.getChild(o);
                                        const n = e.is("text");
                                        const r = e.is("attributeElement");
                                        const a = e.is("emptyElement");
                                        const c = e.is("uiElement");
                                        if (r && this._wrapAttributeElement(i, e)) { s.push(new La(t, o)) } else if (n || a || c || r && vc(i, e)) {
                                            const n = i._clone();
                                            e._remove();
                                            n._appendChild(e);
                                            t._insertChild(o, n);
                                            this._addToClonedElementsGroup(n);
                                            s.push(new La(t, o))
                                        } else if (r) { this._wrapChildren(e, 0, e.childCount, i) }
                                        o++
                                    }
                                    let r = 0;
                                    for (const t of s) {
                                        t.offset -= r;
                                        if (t.offset == e) { continue }
                                        const i = this.mergeAttributes(t);
                                        if (!i.isEqual(t)) {
                                            r++;
                                            n--
                                        }
                                    }
                                    return Da._createFromParentsAndOffsets(t, e, t, n)
                                }
                                _unwrapChildren(t, e, n, i) {
                                    let o = e;
                                    const s = [];
                                    while (o < n) {
                                        const e = t.getChild(o);
                                        if (!e.is("attributeElement")) { o++; continue }
                                        if (e.isSimilar(i)) {
                                            const i = e.getChildren();
                                            const r = e.childCount;
                                            e._remove();
                                            t._insertChild(o, i);
                                            this._removeFromClonedElementsGroup(e);
                                            s.push(new La(t, o), new La(t, o + r));
                                            o += r;
                                            n += r - 1;
                                            continue
                                        }
                                        if (this._unwrapAttributeElement(i, e)) {
                                            s.push(new La(t, o), new La(t, o + 1));
                                            o++;
                                            continue
                                        }
                                        this._unwrapChildren(e, 0, e.childCount, i);
                                        o++
                                    }
                                    let r = 0;
                                    for (const t of s) {
                                        t.offset -= r;
                                        if (t.offset == e || t.offset == n) { continue }
                                        const i = this.mergeAttributes(t);
                                        if (!i.isEqual(t)) {
                                            r++;
                                            n--
                                        }
                                    }
                                    return Da._createFromParentsAndOffsets(t, e, t, n)
                                }
                                _wrapRange(t, e) { const { start: n, end: i } = this._breakAttributesRange(t, true); const o = n.parent; const s = this._wrapChildren(o, n.offset, i.offset, e); const r = this.mergeAttributes(s.start); if (!r.isEqual(s.start)) { s.end.offset-- } const a = this.mergeAttributes(s.end); return new Da(r, a) }
                                _wrapPosition(t, e) {
                                    if (e.isSimilar(t.parent)) { return yc(t.clone()) }
                                    if (t.parent.is("text")) { t = xc(t) }
                                    const n = this.createAttributeElement();
                                    n._priority = Number.POSITIVE_INFINITY;
                                    n.isSimilar = () => false;
                                    t.parent._insertChild(t.offset, n);
                                    const i = new Da(t, t.getShiftedBy(1));
                                    this.wrap(i, e);
                                    const o = new La(n.parent, n.index);
                                    n._remove();
                                    const s = o.nodeBefore;
                                    const r = o.nodeAfter;
                                    if (s instanceof Tr && r instanceof Tr) { return Ac(s, r) }
                                    return yc(o)
                                }
                                _wrapAttributeElement(t, e) { if (!Mc(t, e)) { return false } if (t.name !== e.name || t.priority !== e.priority) { return false } for (const n of t.getAttributeKeys()) { if (n === "class" || n === "style") { continue } if (e.hasAttribute(n) && e.getAttribute(n) !== t.getAttribute(n)) { return false } } for (const n of t.getStyleNames()) { if (e.hasStyle(n) && e.getStyle(n) !== t.getStyle(n)) { return false } } for (const n of t.getAttributeKeys()) { if (n === "class" || n === "style") { continue } if (!e.hasAttribute(n)) { this.setAttribute(n, t.getAttribute(n), e) } } for (const n of t.getStyleNames()) { if (!e.hasStyle(n)) { this.setStyle(n, t.getStyle(n), e) } } for (const n of t.getClassNames()) { if (!e.hasClass(n)) { this.addClass(n, e) } } return true }
                                _unwrapAttributeElement(t, e) {
                                    if (!Mc(t, e)) { return false }
                                    if (t.name !== e.name || t.priority !== e.priority) { return false }
                                    for (const n of t.getAttributeKeys()) { if (n === "class" || n === "style") { continue } if (!e.hasAttribute(n) || e.getAttribute(n) !== t.getAttribute(n)) { return false } }
                                    if (!e.hasClass(...t.getClassNames())) { return false }
                                    for (const n of t.getStyleNames()) { if (!e.hasStyle(n) || e.getStyle(n) !== t.getStyle(n)) { return false } }
                                    for (const n of t.getAttributeKeys()) {
                                        if (n === "class" || n === "style") { continue }
                                        this.removeAttribute(n, e)
                                    }
                                    this.removeClass(Array.from(t.getClassNames()), e);
                                    this.removeStyle(Array.from(t.getStyleNames()), e);
                                    return true
                                }
                                _breakAttributesRange(t, e = false) {
                                    const n = t.start;
                                    const i = t.end;
                                    Sc(t, this.document);
                                    if (t.isCollapsed) { const n = this._breakAttributes(t.start, e); return new Da(n, n) }
                                    const o = this._breakAttributes(i, e);
                                    const s = o.parent.childCount;
                                    const r = this._breakAttributes(n, e);
                                    o.offset += o.parent.childCount - s;
                                    return new Da(r, o)
                                }
                                _breakAttributes(t, e = false) {
                                    const n = t.offset;
                                    const i = t.parent;
                                    if (t.parent.is("emptyElement")) { throw new Zs["b"]("view-writer-cannot-break-empty-element", this.document) }
                                    if (t.parent.is("uiElement")) { throw new Zs["b"]("view-writer-cannot-break-ui-element", this.document) }
                                    if (!e && i.is("text") && Pc(i.parent)) { return t.clone() }
                                    if (Pc(i)) { return t.clone() }
                                    if (i.is("text")) { return this._breakAttributes(xc(t), e) }
                                    const o = i.childCount;
                                    if (n == o) { const t = new La(i.parent, i.index + 1); return this._breakAttributes(t, e) } else {
                                        if (n === 0) { const t = new La(i.parent, i.index); return this._breakAttributes(t, e) } else {
                                            const t = i.index + 1;
                                            const o = i._clone();
                                            i.parent._insertChild(t, o);
                                            this._addToClonedElementsGroup(o);
                                            const s = i.childCount - n;
                                            const r = i._removeChildren(n, s);
                                            o._appendChild(r);
                                            const a = new La(i.parent, t);
                                            return this._breakAttributes(a, e)
                                        }
                                    }
                                }
                                _addToClonedElementsGroup(t) {
                                    if (!t.root.is("rootElement")) { return }
                                    if (t.is("element")) { for (const e of t.getChildren()) { this._addToClonedElementsGroup(e) } }
                                    const e = t.id;
                                    if (!e) { return }
                                    let n = this._cloneGroups.get(e);
                                    if (!n) {
                                        n = new Set;
                                        this._cloneGroups.set(e, n)
                                    }
                                    n.add(t);
                                    t._clonesGroup = n
                                }
                                _removeFromClonedElementsGroup(t) {
                                    if (t.is("element")) { for (const e of t.getChildren()) { this._removeFromClonedElementsGroup(e) } }
                                    const e = t.id;
                                    if (!e) { return }
                                    const n = this._cloneGroups.get(e);
                                    if (!n) { return }
                                    n.delete(t)
                                }
                            }

                            function kc(t) { return Array.from(t.getChildren()).some(t => !t.is("uiElement")) }

                            function _c(t) {
                                let e = t.parent;
                                while (!Pc(e)) {
                                    if (!e) { return undefined }
                                    e = e.parent
                                }
                                return e
                            }

                            function vc(t, e) { if (t.priority < e.priority) { return true } else if (t.priority > e.priority) { return false } return t.getIdentity() < e.getIdentity() }

                            function yc(t) { const e = t.nodeBefore; if (e && e.is("text")) { return new La(e, e.data.length) } const n = t.nodeAfter; if (n && n.is("text")) { return new La(n, 0) } return t }

                            function xc(t) {
                                if (t.offset == t.parent.data.length) { return new La(t.parent.parent, t.parent.index + 1) }
                                if (t.offset === 0) { return new La(t.parent.parent, t.parent.index) }
                                const e = t.parent.data.slice(t.offset);
                                t.parent._data = t.parent.data.slice(0, t.offset);
                                t.parent.parent._insertChild(t.parent.index + 1, new Tr(e));
                                return new La(t.parent.parent, t.parent.index + 1)
                            }

                            function Ac(t, e) {
                                const n = t.data.length;
                                t._data += e.data;
                                e._remove();
                                return new La(t, n)
                            }

                            function Cc(t, e) { for (const n of t) { if (!Tc.some(t => n instanceof t)) { throw new Zs["b"]("view-writer-insert-invalid-node", e) } if (!n.is("text")) { Cc(n.getChildren(), e) } } }
                            const Tc = [Tr, qa, Fr, Ya, hc];

                            function Pc(t) { return t && (t.is("containerElement") || t.is("documentFragment")) }

                            function Sc(t, e) { const n = _c(t.start); const i = _c(t.end); if (!n || !i || n !== i) { throw new Zs["b"]("view-writer-invalid-range-container", e) } }

                            function Mc(t, e) { return t.id === null && e.id === null }

                            function Ec(t) { return Object.prototype.toString.call(t) == "[object Text]" }
                            const Ic = t => t.createTextNode(" ");
                            const Nc = t => {
                                const e = t.createElement("br");
                                e.dataset.ckeFiller = true;
                                return e
                            };
                            const Oc = 7;
                            const Rc = (() => { let t = ""; for (let e = 0; e < Oc; e++) { t += "​" } return t })();

                            function Lc(t) { return Ec(t) && t.data.substr(0, Oc) === Rc }

                            function Dc(t) { return t.data.length == Oc && Lc(t) }

                            function zc(t) { if (Lc(t)) { return t.data.slice(Oc) } else { return t.data } }

                            function Vc(t) { t.document.on("keydown", jc) }

                            function jc(t, e) { if (e.keyCode == rc.arrowleft) { const t = e.domTarget.ownerDocument.defaultView.getSelection(); if (t.rangeCount == 1 && t.getRangeAt(0).collapsed) { const e = t.getRangeAt(0).startContainer; const n = t.getRangeAt(0).startOffset; if (Lc(e) && n <= Oc) { t.collapse(e, 0) } } } }

                            function Bc(t, e, n, i = false) { n = n || function(t, e) { return t === e }; if (!Array.isArray(t)) { t = Array.from(t) } if (!Array.isArray(e)) { e = Array.from(e) } const o = Fc(t, e, n); return i ? Wc(o, e.length) : qc(e, o) }

                            function Fc(t, e, n) { const i = Hc(t, e, n); if (i === -1) { return { firstIndex: -1, lastIndexOld: -1, lastIndexNew: -1 } } const o = Uc(t, i); const s = Uc(e, i); const r = Hc(o, s, n); const a = t.length - r; const c = e.length - r; return { firstIndex: i, lastIndexOld: a, lastIndexNew: c } }

                            function Hc(t, e, n) { for (let i = 0; i < Math.max(t.length, e.length); i++) { if (t[i] === undefined || e[i] === undefined || !n(t[i], e[i])) { return i } } return -1 }

                            function Uc(t, e) { return t.slice(e).reverse() }

                            function qc(t, e) { const n = []; const { firstIndex: i, lastIndexOld: o, lastIndexNew: s } = e; if (s - i > 0) { n.push({ index: i, type: "insert", values: t.slice(i, s) }) } if (o - i > 0) { n.push({ index: i + (s - i), type: "delete", howMany: o - i }) } return n }

                            function Wc(t, e) { const { firstIndex: n, lastIndexOld: i, lastIndexNew: o } = t; if (n === -1) { return Array(e).fill("equal") } let s = []; if (n > 0) { s = s.concat(Array(n).fill("equal")) } if (o - n > 0) { s = s.concat(Array(o - n).fill("insert")) } if (i - n > 0) { s = s.concat(Array(i - n).fill("delete")) } if (o < e) { s = s.concat(Array(e - o).fill("equal")) } return s }

                            function $c(t, e, n) {
                                n = n || function(t, e) { return t === e };
                                const i = t.length;
                                const o = e.length;
                                if (i > 200 || o > 200 || i + o > 300) { return $c.fastDiff(t, e, n, true) }
                                let s, r;
                                if (o < i) {
                                    const n = t;
                                    t = e;
                                    e = n;
                                    s = "delete";
                                    r = "insert"
                                } else {
                                    s = "insert";
                                    r = "delete"
                                }
                                const a = t.length;
                                const c = e.length;
                                const l = c - a;
                                const d = {};
                                const u = {};

                                function h(i) {
                                    const o = (u[i - 1] !== undefined ? u[i - 1] : -1) + 1;
                                    const l = u[i + 1] !== undefined ? u[i + 1] : -1;
                                    const h = o > l ? -1 : 1;
                                    if (d[i + h]) { d[i] = d[i + h].slice(0) }
                                    if (!d[i]) { d[i] = [] }
                                    d[i].push(o > l ? s : r);
                                    let f = Math.max(o, l);
                                    let g = f - i;
                                    while (g < a && f < c && n(t[g], e[f])) {
                                        g++;
                                        f++;
                                        d[i].push("equal")
                                    }
                                    return f
                                }
                                let f = 0;
                                let g;
                                do {
                                    for (g = -f; g < l; g++) { u[g] = h(g) }
                                    for (g = l + f; g > l; g--) { u[g] = h(g) }
                                    u[l] = h(l);
                                    f++
                                } while (u[l] !== c);
                                return d[l].slice(1)
                            }
                            $c.fastDiff = Bc;

                            function Yc(t, e, n) { t.insertBefore(n, t.childNodes[e] || null) }

                            function Gc(t) { const e = t.parentNode; if (e) { e.removeChild(t) } }

                            function Qc(t) { if (t) { if (t.defaultView) { return t instanceof t.defaultView.Document } else if (t.ownerDocument && t.ownerDocument.defaultView) { return t instanceof t.ownerDocument.defaultView.Node } } return false }
                            class Kc {
                                constructor(t, e) {
                                    this.domDocuments = new Set;
                                    this.domConverter = t;
                                    this.markedAttributes = new Set;
                                    this.markedChildren = new Set;
                                    this.markedTexts = new Set;
                                    this.selection = e;
                                    this.isFocused = false;
                                    this._inlineFiller = null;
                                    this._fakeSelectionContainer = null
                                }
                                markToSync(t, e) { if (t === "text") { if (this.domConverter.mapViewToDom(e.parent)) { this.markedTexts.add(e) } } else { if (!this.domConverter.mapViewToDom(e)) { return } if (t === "attributes") { this.markedAttributes.add(e) } else if (t === "children") { this.markedChildren.add(e) } else { throw new Zs["b"]("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.", this) } } }
                                render() {
                                    let t;
                                    for (const t of this.markedChildren) { this._updateChildrenMappings(t) }
                                    if (this._inlineFiller && !this._isSelectionInInlineFiller()) { this._removeInlineFiller() }
                                    if (this._inlineFiller) { t = this._getInlineFillerPosition() } else if (this._needsInlineFillerAtSelection()) {
                                        t = this.selection.getFirstPosition();
                                        this.markedChildren.add(t.parent)
                                    }
                                    for (const t of this.markedAttributes) { this._updateAttrs(t) }
                                    for (const e of this.markedChildren) { this._updateChildren(e, { inlineFillerPosition: t }) }
                                    for (const e of this.markedTexts) { if (!this.markedChildren.has(e.parent) && this.domConverter.mapViewToDom(e.parent)) { this._updateText(e, { inlineFillerPosition: t }) } }
                                    if (t) { const e = this.domConverter.viewPositionToDom(t); const n = e.parent.ownerDocument; if (!Lc(e.parent)) { this._inlineFiller = Zc(n, e.parent, e.offset) } else { this._inlineFiller = e.parent } } else { this._inlineFiller = null }
                                    this._updateSelection();
                                    this._updateFocus();
                                    this.markedTexts.clear();
                                    this.markedAttributes.clear();
                                    this.markedChildren.clear()
                                }
                                _updateChildrenMappings(t) {
                                    const e = this.domConverter.mapViewToDom(t);
                                    if (!e) { return }
                                    const n = this.domConverter.mapViewToDom(t).childNodes;
                                    const i = Array.from(this.domConverter.viewChildrenToDom(t, e.ownerDocument, { withChildren: false }));
                                    const o = this._diffNodeLists(n, i);
                                    const s = this._findReplaceActions(o, n, i);
                                    if (s.indexOf("replace") !== -1) {
                                        const e = { equal: 0, insert: 0, delete: 0 };
                                        for (const o of s) {
                                            if (o === "replace") {
                                                const o = e.equal + e.insert;
                                                const s = e.equal + e.delete;
                                                const r = t.getChild(o);
                                                if (r && !r.is("uiElement")) { this._updateElementMappings(r, n[s]) }
                                                Gc(i[o]);
                                                e.equal++
                                            } else { e[o]++ }
                                        }
                                    }
                                }
                                _updateElementMappings(t, e) {
                                    this.domConverter.unbindDomElement(e);
                                    this.domConverter.bindElements(e, t);
                                    this.markedChildren.add(t);
                                    this.markedAttributes.add(t)
                                }
                                _getInlineFillerPosition() { const t = this.selection.getFirstPosition(); if (t.parent.is("text")) { return La._createBefore(this.selection.getFirstPosition().parent) } else { return t } }
                                _isSelectionInInlineFiller() { if (this.selection.rangeCount != 1 || !this.selection.isCollapsed) { return false } const t = this.selection.getFirstPosition(); const e = this.domConverter.viewPositionToDom(t); if (e && Ec(e.parent) && Lc(e.parent)) { return true } return false }
                                _removeInlineFiller() {
                                    const t = this._inlineFiller;
                                    if (!Lc(t)) { throw new Zs["b"]("view-renderer-filler-was-lost: The inline filler node was lost.", this) }
                                    if (Dc(t)) { t.parentNode.removeChild(t) } else { t.data = t.data.substr(Oc) }
                                    this._inlineFiller = null
                                }
                                _needsInlineFillerAtSelection() { if (this.selection.rangeCount != 1 || !this.selection.isCollapsed) { return false } const t = this.selection.getFirstPosition(); const e = t.parent; const n = t.offset; if (!this.domConverter.mapViewToDom(e.root)) { return false } if (!e.is("element")) { return false } if (!Jc(e)) { return false } if (n === e.getFillerOffset()) { return false } const i = t.nodeBefore; const o = t.nodeAfter; if (i instanceof Tr || o instanceof Tr) { return false } return true }
                                _updateText(t, e) { const n = this.domConverter.findCorrespondingDomText(t); const i = this.domConverter.viewToDom(t, n.ownerDocument); const o = n.data; let s = i.data; const r = e.inlineFillerPosition; if (r && r.parent == t.parent && r.offset == t.index) { s = Rc + s } if (o != s) { const t = Bc(o, s); for (const e of t) { if (e.type === "insert") { n.insertData(e.index, e.values.join("")) } else { n.deleteData(e.index, e.howMany) } } } }
                                _updateAttrs(t) { const e = this.domConverter.mapViewToDom(t); if (!e) { return } const n = Array.from(e.attributes).map(t => t.name); const i = t.getAttributeKeys(); for (const n of i) { e.setAttribute(n, t.getAttribute(n)) } for (const i of n) { if (!t.hasAttribute(i)) { e.removeAttribute(i) } } }
                                _updateChildren(t, e) {
                                    const n = this.domConverter.mapViewToDom(t);
                                    if (!n) { return }
                                    const i = e.inlineFillerPosition;
                                    const o = this.domConverter.mapViewToDom(t).childNodes;
                                    const s = Array.from(this.domConverter.viewChildrenToDom(t, n.ownerDocument, { bind: true, inlineFillerPosition: i }));
                                    if (i && i.parent === t) { Zc(n.ownerDocument, s, i.offset) }
                                    const r = this._diffNodeLists(o, s);
                                    let a = 0;
                                    const c = new Set;
                                    for (const t of r) {
                                        if (t === "insert") {
                                            Yc(n, a, s[a]);
                                            a++
                                        } else if (t === "delete") {
                                            c.add(o[a]);
                                            Gc(o[a])
                                        } else {
                                            this._markDescendantTextToSync(this.domConverter.domToView(s[a]));
                                            a++
                                        }
                                    }
                                    for (const t of c) { if (!t.parentNode) { this.domConverter.unbindDomElement(t) } }
                                }
                                _diffNodeLists(t, e) { t = nl(t, this._fakeSelectionContainer); return $c(t, e, tl.bind(null, this.domConverter)) }
                                _findReplaceActions(t, e, n) {
                                    if (t.indexOf("insert") === -1 || t.indexOf("delete") === -1) { return t }
                                    let i = [];
                                    let o = [];
                                    let s = [];
                                    const r = { equal: 0, insert: 0, delete: 0 };
                                    for (const a of t) {
                                        if (a === "insert") { s.push(n[r.equal + r.insert]) } else if (a === "delete") { o.push(e[r.equal + r.delete]) } else {
                                            i = i.concat($c(o, s, Xc).map(t => t === "equal" ? "replace" : t));
                                            i.push("equal");
                                            o = [];
                                            s = []
                                        }
                                        r[a]++
                                    }
                                    return i.concat($c(o, s, Xc).map(t => t === "equal" ? "replace" : t))
                                }
                                _markDescendantTextToSync(t) { if (!t) { return } if (t.is("text")) { this.markedTexts.add(t) } else if (t.is("element")) { for (const e of t.getChildren()) { this._markDescendantTextToSync(e) } } }
                                _updateSelection() {
                                    if (this.selection.rangeCount === 0) {
                                        this._removeDomSelection();
                                        this._removeFakeSelection();
                                        return
                                    }
                                    const t = this.domConverter.mapViewToDom(this.selection.editableElement);
                                    if (!this.isFocused || !t) { return }
                                    if (this.selection.isFake) { this._updateFakeSelection(t) } else {
                                        this._removeFakeSelection();
                                        this._updateDomSelection(t)
                                    }
                                }
                                _updateFakeSelection(t) {
                                    const e = t.ownerDocument;
                                    if (!this._fakeSelectionContainer) { this._fakeSelectionContainer = il(e) }
                                    const n = this._fakeSelectionContainer;
                                    this.domConverter.bindFakeSelection(n, this.selection);
                                    if (!this._fakeSelectionNeedsUpdate(t)) { return }
                                    if (!n.parentElement || n.parentElement != t) { t.appendChild(n) }
                                    n.textContent = this.selection.fakeSelectionLabel || " ";
                                    const i = e.getSelection();
                                    const o = e.createRange();
                                    i.removeAllRanges();
                                    o.selectNodeContents(n);
                                    i.addRange(o)
                                }
                                _updateDomSelection(t) {
                                    const e = t.ownerDocument.defaultView.getSelection();
                                    if (!this._domSelectionNeedsUpdate(e)) { return }
                                    const n = this.domConverter.viewPositionToDom(this.selection.anchor);
                                    const i = this.domConverter.viewPositionToDom(this.selection.focus);
                                    t.focus();
                                    e.collapse(n.parent, n.offset);
                                    e.extend(i.parent, i.offset);
                                    if (Ja.isGecko) { el(i, e) }
                                }
                                _domSelectionNeedsUpdate(t) { if (!this.domConverter.isDomSelectionCorrect(t)) { return true } const e = t && this.domConverter.domSelectionToView(t); if (e && this.selection.isEqual(e)) { return false } if (!this.selection.isCollapsed && this.selection.isSimilar(e)) { return false } return true }
                                _fakeSelectionNeedsUpdate(t) { const e = this._fakeSelectionContainer; const n = t.ownerDocument.getSelection(); if (!e || e.parentElement !== t) { return true } if (n.anchorNode !== e && !e.contains(n.anchorNode)) { return true } return e.textContent !== this.selection.fakeSelectionLabel }
                                _removeDomSelection() { for (const t of this.domDocuments) { const e = t.getSelection(); if (e.rangeCount) { const e = t.activeElement; const n = this.domConverter.mapDomToView(e); if (e && n) { t.getSelection().removeAllRanges() } } } }
                                _removeFakeSelection() { const t = this._fakeSelectionContainer; if (t) { t.remove() } }
                                _updateFocus() { if (this.isFocused) { const t = this.selection.editableElement; if (t) { this.domConverter.focus(t) } } }
                            }
                            _r(Kc, ka);

                            function Jc(t) { if (t.getAttribute("contenteditable") == "false") { return false } const e = t.findAncestor(t => t.hasAttribute("contenteditable")); return !e || e.getAttribute("contenteditable") == "true" }

                            function Zc(t, e, n) { const i = e instanceof Array ? e : e.childNodes; const o = i[n]; if (Ec(o)) { o.data = Rc + o.data; return o } else { const o = t.createTextNode(Rc); if (Array.isArray(e)) { i.splice(n, 0, o) } else { Yc(e, n, o) } return o } }

                            function Xc(t, e) { return Qc(t) && Qc(e) && !Ec(t) && !Ec(e) && t.tagName.toLowerCase() === e.tagName.toLowerCase() }

                            function tl(t, e, n) { if (e === n) { return true } else if (Ec(e) && Ec(n)) { return e.data === n.data } else if (t.isBlockFiller(e) && t.isBlockFiller(n)) { return true } return false }

                            function el(t, e) { const n = t.parent; if (n.nodeType != Node.ELEMENT_NODE || t.offset != n.childNodes.length - 1) { return } const i = n.childNodes[t.offset]; if (i && i.tagName == "BR") { e.addRange(e.getRangeAt(0)) } }

                            function nl(t, e) { const n = Array.from(t); if (n.length == 0 || !e) { return n } const i = n[n.length - 1]; if (i == e) { n.pop() } return n }

                            function il(t) {
                                const e = t.createElement("div");
                                Object.assign(e.style, { position: "fixed", top: 0, left: "-9999px", width: "42px" });
                                e.textContent = " ";
                                return e
                            }
                            var ol = { window: window, document: document };

                            function sl(t) {
                                let e = 0;
                                while (t.previousSibling) {
                                    t = t.previousSibling;
                                    e++
                                }
                                return e
                            }

                            function rl(t) {
                                const e = [];
                                while (t && t.nodeType != Node.DOCUMENT_NODE) {
                                    e.unshift(t);
                                    t = t.parentNode
                                }
                                return e
                            }

                            function al(t, e) { const n = rl(t); const i = rl(e); let o = 0; while (n[o] == i[o] && n[o]) { o++ } return o === 0 ? null : n[o - 1] }
                            const cl = Nc(document);
                            class ll {
                                constructor(t = {}) {
                                    this.blockFillerMode = t.blockFillerMode || "br";
                                    this.preElements = ["pre"];
                                    this.blockElements = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "dd", "dt", "figcaption"];
                                    this._blockFiller = this.blockFillerMode == "br" ? Nc : Ic;
                                    this._domToViewMapping = new WeakMap;
                                    this._viewToDomMapping = new WeakMap;
                                    this._fakeSelectionMapping = new WeakMap
                                }
                                bindFakeSelection(t, e) { this._fakeSelectionMapping.set(t, new ja(e)) }
                                fakeSelectionToView(t) { return this._fakeSelectionMapping.get(t) }
                                bindElements(t, e) {
                                    this._domToViewMapping.set(t, e);
                                    this._viewToDomMapping.set(e, t)
                                }
                                unbindDomElement(t) {
                                    const e = this._domToViewMapping.get(t);
                                    if (e) {
                                        this._domToViewMapping.delete(t);
                                        this._viewToDomMapping.delete(e);
                                        for (const e of Array.from(t.childNodes)) { this.unbindDomElement(e) }
                                    }
                                }
                                bindDocumentFragments(t, e) {
                                    this._domToViewMapping.set(t, e);
                                    this._viewToDomMapping.set(e, t)
                                }
                                viewToDom(t, e, n = {}) { if (t.is("text")) { const n = this._processDataFromViewText(t); return e.createTextNode(n) } else { if (this.mapViewToDom(t)) { return this.mapViewToDom(t) } let i; if (t.is("documentFragment")) { i = e.createDocumentFragment(); if (n.bind) { this.bindDocumentFragments(i, t) } } else if (t.is("uiElement")) { i = t.render(e); if (n.bind) { this.bindElements(i, t) } return i } else { if (t.hasAttribute("xmlns")) { i = e.createElementNS(t.getAttribute("xmlns"), t.name) } else { i = e.createElement(t.name) } if (n.bind) { this.bindElements(i, t) } for (const e of t.getAttributeKeys()) { i.setAttribute(e, t.getAttribute(e)) } } if (n.withChildren || n.withChildren === undefined) { for (const o of this.viewChildrenToDom(t, e, n)) { i.appendChild(o) } } return i } } * viewChildrenToDom(t, e, n = {}) {
                                    const i = t.getFillerOffset && t.getFillerOffset();
                                    let o = 0;
                                    for (const s of t.getChildren()) {
                                        if (i === o) { yield this._blockFiller(e) }
                                        yield this.viewToDom(s, e, n);
                                        o++
                                    }
                                    if (i === o) { yield this._blockFiller(e) }
                                }
                                viewRangeToDom(t) {
                                    const e = this.viewPositionToDom(t.start);
                                    const n = this.viewPositionToDom(t.end);
                                    const i = document.createRange();
                                    i.setStart(e.parent, e.offset);
                                    i.setEnd(n.parent, n.offset);
                                    return i
                                }
                                viewPositionToDom(t) {
                                    const e = t.parent;
                                    if (e.is("text")) { const n = this.findCorrespondingDomText(e); if (!n) { return null } let i = t.offset; if (Lc(n)) { i += Oc } return { parent: n, offset: i } } else {
                                        let n, i, o;
                                        if (t.offset === 0) {
                                            n = this.mapViewToDom(e);
                                            if (!n) { return null }
                                            o = n.childNodes[0]
                                        } else {
                                            const e = t.nodeBefore;
                                            i = e.is("text") ? this.findCorrespondingDomText(e) : this.mapViewToDom(t.nodeBefore);
                                            if (!i) { return null }
                                            n = i.parentNode;
                                            o = i.nextSibling
                                        }
                                        if (Ec(o) && Lc(o)) { return { parent: o, offset: Oc } }
                                        const s = i ? sl(i) + 1 : 0;
                                        return { parent: n, offset: s }
                                    }
                                }
                                domToView(t, e = {}) {
                                    if (this.isBlockFiller(t, this.blockFillerMode)) { return null }
                                    const n = this.getParentUIElement(t, this._domToViewMapping);
                                    if (n) { return n }
                                    if (Ec(t)) { if (Dc(t)) { return null } else { const e = this._processDataFromDomText(t); return e === "" ? null : new Tr(e) } } else if (this.isComment(t)) { return null } else {
                                        if (this.mapDomToView(t)) { return this.mapDomToView(t) }
                                        let n;
                                        if (this.isDocumentFragment(t)) { n = new pc; if (e.bind) { this.bindDocumentFragments(t, n) } } else {
                                            const i = e.keepOriginalCase ? t.tagName : t.tagName.toLowerCase();
                                            n = new Dr(i);
                                            if (e.bind) { this.bindElements(t, n) }
                                            const o = t.attributes;
                                            for (let t = o.length - 1; t >= 0; t--) { n._setAttribute(o[t].name, o[t].value) }
                                        }
                                        if (e.withChildren || e.withChildren === undefined) { for (const i of this.domChildrenToView(t, e)) { n._appendChild(i) } }
                                        return n
                                    }
                                } * domChildrenToView(t, e = {}) { for (let n = 0; n < t.childNodes.length; n++) { const i = t.childNodes[n]; const o = this.domToView(i, e); if (o !== null) { yield o } } }
                                domSelectionToView(t) { if (t.rangeCount === 1) { let e = t.getRangeAt(0).startContainer; if (Ec(e)) { e = e.parentNode } const n = this.fakeSelectionToView(e); if (n) { return n } } const e = this.isDomSelectionBackward(t); const n = []; for (let e = 0; e < t.rangeCount; e++) { const i = t.getRangeAt(e); const o = this.domRangeToView(i); if (o) { n.push(o) } } return new ja(n, { backward: e }) }
                                domRangeToView(t) { const e = this.domPositionToView(t.startContainer, t.startOffset); const n = this.domPositionToView(t.endContainer, t.endOffset); if (e && n) { return new Da(e, n) } return null }
                                domPositionToView(t, e) {
                                    if (this.isBlockFiller(t, this.blockFillerMode)) { return this.domPositionToView(t.parentNode, sl(t)) }
                                    const n = this.mapDomToView(t);
                                    if (n && n.is("uiElement")) { return La._createBefore(n) }
                                    if (Ec(t)) {
                                        if (Dc(t)) { return this.domPositionToView(t.parentNode, sl(t)) }
                                        const n = this.findCorrespondingViewText(t);
                                        let i = e;
                                        if (!n) { return null }
                                        if (Lc(t)) {
                                            i -= Oc;
                                            i = i < 0 ? 0 : i
                                        }
                                        return new La(n, i)
                                    } else { if (e === 0) { const e = this.mapDomToView(t); if (e) { return new La(e, 0) } } else { const n = t.childNodes[e - 1]; const i = Ec(n) ? this.findCorrespondingViewText(n) : this.mapDomToView(n); if (i && i.parent) { return new La(i.parent, i.index + 1) } } return null }
                                }
                                mapDomToView(t) { return this.getParentUIElement(t) || this._domToViewMapping.get(t) }
                                findCorrespondingViewText(t) { if (Dc(t)) { return null } const e = this.getParentUIElement(t); if (e) { return e } const n = t.previousSibling; if (n) { if (!this.isElement(n)) { return null } const t = this.mapDomToView(n); if (t) { const e = t.nextSibling; if (e instanceof Tr) { return t.nextSibling } else { return null } } } else { const e = this.mapDomToView(t.parentNode); if (e) { const t = e.getChild(0); if (t instanceof Tr) { return t } else { return null } } } return null }
                                mapViewToDom(t) { return this._viewToDomMapping.get(t) }
                                findCorrespondingDomText(t) { const e = t.previousSibling; if (e && this.mapViewToDom(e)) { return this.mapViewToDom(e).nextSibling } if (!e && t.parent && this.mapViewToDom(t.parent)) { return this.mapViewToDom(t.parent).childNodes[0] } return null }
                                focus(t) {
                                    const e = this.mapViewToDom(t);
                                    if (e && e.ownerDocument.activeElement !== e) {
                                        const { scrollX: t, scrollY: n } = ol.window;
                                        const i = [];
                                        ul(e, t => {
                                            const { scrollLeft: e, scrollTop: n } = t;
                                            i.push([e, n])
                                        });
                                        e.focus();
                                        ul(e, t => {
                                            const [e, n] = i.shift();
                                            t.scrollLeft = e;
                                            t.scrollTop = n
                                        });
                                        ol.window.scrollTo(t, n)
                                    }
                                }
                                isElement(t) { return t && t.nodeType == Node.ELEMENT_NODE }
                                isDocumentFragment(t) { return t && t.nodeType == Node.DOCUMENT_FRAGMENT_NODE }
                                isComment(t) { return t && t.nodeType == Node.COMMENT_NODE }
                                isBlockFiller(t) { if (this.blockFillerMode == "br") { return t.isEqualNode(cl) } if (t.tagName === "BR" && fl(t, this.blockElements) && t.parentNode.childNodes.length === 1) { return true } return hl(t, this.blockElements) }
                                isDomSelectionBackward(t) {
                                    if (t.isCollapsed) { return false }
                                    const e = document.createRange();
                                    e.setStart(t.anchorNode, t.anchorOffset);
                                    e.setEnd(t.focusNode, t.focusOffset);
                                    const n = e.collapsed;
                                    e.detach();
                                    return n
                                }
                                getParentUIElement(t) {
                                    const e = rl(t);
                                    e.pop();
                                    while (e.length) { const t = e.pop(); const n = this._domToViewMapping.get(t); if (n && n.is("uiElement")) { return n } }
                                    return null
                                }
                                isDomSelectionCorrect(t) { return this._isDomSelectionPositionCorrect(t.anchorNode, t.anchorOffset) && this._isDomSelectionPositionCorrect(t.focusNode, t.focusOffset) }
                                _isDomSelectionPositionCorrect(t, e) { if (Ec(t) && Lc(t) && e < Oc) { return false } if (this.isElement(t) && Lc(t.childNodes[e])) { return false } const n = this.mapDomToView(t); if (n && n.is("uiElement")) { return false } return true }
                                _processDataFromViewText(t) { let e = t.data; if (t.getAncestors().some(t => this.preElements.includes(t.name))) { return e } if (e.charAt(0) == " ") { const n = this._getTouchingViewTextNode(t, false); const i = n && this._nodeEndsWithSpace(n); if (i || !n) { e = " " + e.substr(1) } } if (e.charAt(e.length - 1) == " ") { const n = this._getTouchingViewTextNode(t, true); if (e.charAt(e.length - 2) == " " || !n || n.data.charAt(0) == " ") { e = e.substr(0, e.length - 1) + " " } } return e.replace(/ {2}/g, "  ") }
                                _nodeEndsWithSpace(t) { if (t.getAncestors().some(t => this.preElements.includes(t.name))) { return false } const e = this._processDataFromViewText(t); return e.charAt(e.length - 1) == " " }
                                _processDataFromDomText(t) {
                                    let e = t.data;
                                    if (dl(t, this.preElements)) { return zc(t) }
                                    e = e.replace(/[ \n\t\r]{1,}/g, " ");
                                    const n = this._getTouchingInlineDomNode(t, false);
                                    const i = this._getTouchingInlineDomNode(t, true);
                                    const o = this._checkShouldLeftTrimDomText(n);
                                    const s = this._checkShouldRightTrimDomText(t, i);
                                    if (o) { e = e.replace(/^ /, "") }
                                    if (s) { e = e.replace(/ $/, "") }
                                    e = zc(new Text(e));
                                    e = e.replace(/ \u00A0/g, "  ");
                                    if (/( |\u00A0)\u00A0$/.test(e) || !i || i.data && i.data.charAt(0) == " ") { e = e.replace(/\u00A0$/, " ") }
                                    if (o) { e = e.replace(/^\u00A0/, " ") }
                                    return e
                                }
                                _checkShouldLeftTrimDomText(t) { if (!t) { return true } if (Gs(t)) { return true } return /[^\S\u00A0]/.test(t.data.charAt(t.data.length - 1)) }
                                _checkShouldRightTrimDomText(t, e) { if (e) { return false } return !Lc(t) }
                                _getTouchingViewTextNode(t, e) { const n = new Ra({ startPosition: e ? La._createAfter(t) : La._createBefore(t), direction: e ? "forward" : "backward" }); for (const t of n) { if (t.item.is("containerElement")) { return null } else if (t.item.is("br")) { return null } else if (t.item.is("textProxy")) { return t.item } } return null }
                                _getTouchingInlineDomNode(t, e) {
                                    if (!t.parentNode) { return null }
                                    const n = e ? "nextNode" : "previousNode";
                                    const i = t.ownerDocument;
                                    const o = rl(t)[0];
                                    const s = i.createTreeWalker(o, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, { acceptNode(t) { if (Ec(t)) { return NodeFilter.FILTER_ACCEPT } if (t.tagName == "BR") { return NodeFilter.FILTER_ACCEPT } return NodeFilter.FILTER_SKIP } });
                                    s.currentNode = t;
                                    const r = s[n]();
                                    if (r !== null) { const e = al(t, r); if (e && !dl(t, this.blockElements, e) && !dl(r, this.blockElements, e)) { return r } }
                                    return null
                                }
                            }

                            function dl(t, e, n) { let i = rl(t); if (n) { i = i.slice(i.indexOf(n) + 1) } return i.some(t => t.tagName && e.includes(t.tagName.toLowerCase())) }

                            function ul(t, e) {
                                while (t && t != ol.document) {
                                    e(t);
                                    t = t.parentNode
                                }
                            }

                            function hl(t, e) { const n = Ec(t) && t.data == " "; return n && fl(t, e) && t.parentNode.childNodes.length === 1 }

                            function fl(t, e) { const n = t.parentNode; return n && n.tagName && e.includes(n.tagName.toLowerCase()) }

                            function gl(t) { const e = Object.prototype.toString.apply(t); if (e == "[object Window]") { return true } if (e == "[object global]") { return true } return false }
                            const ml = ga({}, lr, {
                                listenTo(t, ...e) {
                                    if (Qc(t) || gl(t)) {
                                        const n = this._getProxyEmitter(t) || new bl(t);
                                        n.attach(...e);
                                        t = n
                                    }
                                    lr.listenTo.call(this, t, ...e)
                                },
                                stopListening(t, e, n) {
                                    if (Qc(t) || gl(t)) {
                                        const e = this._getProxyEmitter(t);
                                        if (!e) { return }
                                        t = e
                                    }
                                    lr.stopListening.call(this, t, e, n);
                                    if (t instanceof bl) { t.detach(e) }
                                },
                                _getProxyEmitter(t) { return dr(this, wl(t)) }
                            });
                            var pl = ml;
                            class bl {
                                constructor(t) {
                                    ur(this, wl(t));
                                    this._domNode = t
                                }
                            }
                            ga(bl.prototype, lr, {
                                attach(t, e, n = {}) {
                                    if (this._domListeners && this._domListeners[t]) { return }
                                    const i = this._createDomListener(t, !!n.useCapture);
                                    this._domNode.addEventListener(t, i, !!n.useCapture);
                                    if (!this._domListeners) { this._domListeners = {} }
                                    this._domListeners[t] = i
                                },
                                detach(t) { let e; if (this._domListeners[t] && (!(e = this._events[t]) || !e.callbacks.length)) { this._domListeners[t].removeListener() } },
                                _createDomListener(t, e) {
                                    const n = e => { this.fire(t, e) };
                                    n.removeListener = () => {
                                        this._domNode.removeEventListener(t, n, e);
                                        delete this._domListeners[t]
                                    };
                                    return n
                                }
                            });

                            function wl(t) { return t["data-ck-expando"] || (t["data-ck-expando"] = nr()) }
                            class kl {
                                constructor(t) {
                                    this.view = t;
                                    this.document = t.document;
                                    this.isEnabled = false
                                }
                                enable() { this.isEnabled = true }
                                disable() { this.isEnabled = false }
                                destroy() {
                                    this.disable();
                                    this.stopListening()
                                }
                            }
                            _r(kl, pl);
                            var _l = "__lodash_hash_undefined__";

                            function vl(t) { this.__data__.set(t, _l); return this }
                            var yl = vl;

                            function xl(t) { return this.__data__.has(t) }
                            var Al = xl;

                            function Cl(t) {
                                var e = -1,
                                    n = t == null ? 0 : t.length;
                                this.__data__ = new _e;
                                while (++e < n) { this.add(t[e]) }
                            }
                            Cl.prototype.add = Cl.prototype.push = yl;
                            Cl.prototype.has = Al;
                            var Tl = Cl;

                            function Pl(t, e) {
                                var n = -1,
                                    i = t == null ? 0 : t.length;
                                while (++n < i) { if (e(t[n], n, t)) { return true } }
                                return false
                            }
                            var Sl = Pl;

                            function Ml(t, e) { return t.has(e) }
                            var El = Ml;
                            var Il = 1,
                                Nl = 2;

                            function Ol(t, e, n, i, o, s) {
                                var r = n & Il,
                                    a = t.length,
                                    c = e.length;
                                if (a != c && !(r && c > a)) { return false }
                                var l = s.get(t);
                                if (l && s.get(e)) { return l == e }
                                var d = -1,
                                    u = true,
                                    h = n & Nl ? new Tl : undefined;
                                s.set(t, e);
                                s.set(e, t);
                                while (++d < a) {
                                    var f = t[d],
                                        g = e[d];
                                    if (i) { var m = r ? i(g, f, d, e, t, s) : i(f, g, d, t, e, s) }
                                    if (m !== undefined) {
                                        if (m) { continue }
                                        u = false;
                                        break
                                    }
                                    if (h) { if (!Sl(e, (function(t, e) { if (!El(h, e) && (f === t || o(f, t, n, i, s))) { return h.push(e) } }))) { u = false; break } } else if (!(f === g || o(f, g, n, i, s))) { u = false; break }
                                }
                                s["delete"](t);
                                s["delete"](e);
                                return u
                            }
                            var Rl = Ol;

                            function Ll(t) {
                                var e = -1,
                                    n = Array(t.size);
                                t.forEach((function(t, i) { n[++e] = [i, t] }));
                                return n
                            }
                            var Dl = Ll;

                            function zl(t) {
                                var e = -1,
                                    n = Array(t.size);
                                t.forEach((function(t) { n[++e] = t }));
                                return n
                            }
                            var Vl = zl;
                            var jl = 1,
                                Bl = 2;
                            var Fl = "[object Boolean]",
                                Hl = "[object Date]",
                                Ul = "[object Error]",
                                ql = "[object Map]",
                                Wl = "[object Number]",
                                $l = "[object RegExp]",
                                Yl = "[object Set]",
                                Gl = "[object String]",
                                Ql = "[object Symbol]";
                            var Kl = "[object ArrayBuffer]",
                                Jl = "[object DataView]";
                            var Zl = s ? s.prototype : undefined,
                                Xl = Zl ? Zl.valueOf : undefined;

                            function td(t, e, n, i, o, s, r) {
                                switch (n) {
                                    case Jl:
                                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) { return false }
                                        t = t.buffer;
                                        e = e.buffer;
                                    case Kl:
                                        if (t.byteLength != e.byteLength || !s(new fo(t), new fo(e))) { return false }
                                        return true;
                                    case Fl:
                                    case Hl:
                                    case Wl:
                                        return V(+t, +e);
                                    case Ul:
                                        return t.name == e.name && t.message == e.message;
                                    case $l:
                                    case Gl:
                                        return t == e + "";
                                    case ql:
                                        var a = Dl;
                                    case Yl:
                                        var c = i & jl;
                                        a || (a = Vl);
                                        if (t.size != e.size && !c) { return false }
                                        var l = r.get(t);
                                        if (l) { return l == e }
                                        i |= Bl;
                                        r.set(t, e);
                                        var d = Rl(a(t), a(e), i, o, s, r);
                                        r["delete"](t);
                                        return d;
                                    case Ql:
                                        if (Xl) { return Xl.call(t) == Xl.call(e) }
                                }
                                return false
                            }
                            var ed = td;
                            var nd = 1;
                            var id = Object.prototype;
                            var od = id.hasOwnProperty;

                            function sd(t, e, n, i, o, s) {
                                var r = n & nd,
                                    a = zi(t),
                                    c = a.length,
                                    l = zi(e),
                                    d = l.length;
                                if (c != d && !r) { return false }
                                var u = c;
                                while (u--) { var h = a[u]; if (!(r ? h in e : od.call(e, h))) { return false } }
                                var f = s.get(t);
                                if (f && s.get(e)) { return f == e }
                                var g = true;
                                s.set(t, e);
                                s.set(e, t);
                                var m = r;
                                while (++u < c) {
                                    h = a[u];
                                    var p = t[h],
                                        b = e[h];
                                    if (i) { var w = r ? i(b, p, h, e, t, s) : i(p, b, h, t, e, s) }
                                    if (!(w === undefined ? p === b || o(p, b, n, i, s) : w)) { g = false; break }
                                    m || (m = h == "constructor")
                                }
                                if (g && !m) {
                                    var k = t.constructor,
                                        _ = e.constructor;
                                    if (k != _ && ("constructor" in t && "constructor" in e) && !(typeof k == "function" && k instanceof k && typeof _ == "function" && _ instanceof _)) { g = false }
                                }
                                s["delete"](t);
                                s["delete"](e);
                                return g
                            }
                            var rd = sd;
                            var ad = 1;
                            var cd = "[object Arguments]",
                                ld = "[object Array]",
                                dd = "[object Object]";
                            var ud = Object.prototype;
                            var hd = ud.hasOwnProperty;

                            function fd(t, e, n, i, o, s) {
                                var r = Qe(t),
                                    a = Qe(e),
                                    c = r ? ld : ro(t),
                                    l = a ? ld : ro(e);
                                c = c == cd ? dd : c;
                                l = l == cd ? dd : l;
                                var d = c == dd,
                                    u = l == dd,
                                    h = c == l;
                                if (h && Object(Ke["a"])(t)) {
                                    if (!Object(Ke["a"])(e)) { return false }
                                    r = true;
                                    d = false
                                }
                                if (h && !d) { s || (s = new Ce); return r || zn(t) ? Rl(t, e, n, i, o, s) : ed(t, e, c, n, i, o, s) }
                                if (!(n & ad)) {
                                    var f = d && hd.call(t, "__wrapped__"),
                                        g = u && hd.call(e, "__wrapped__");
                                    if (f || g) {
                                        var m = f ? t.value() : t,
                                            p = g ? e.value() : e;
                                        s || (s = new Ce);
                                        return o(m, p, n, i, s)
                                    }
                                }
                                if (!h) { return false }
                                s || (s = new Ce);
                                return rd(t, e, n, i, o, s)
                            }
                            var gd = fd;

                            function md(t, e, n, i, o) { if (t === e) { return true } if (t == null || e == null || !T(t) && !T(e)) { return t !== t && e !== e } return gd(t, e, n, i, md, o) }
                            var pd = md;

                            function bd(t, e, n) { n = typeof n == "function" ? n : undefined; var i = n ? n(t, e) : undefined; return i === undefined ? pd(t, e, undefined, n) : !!i }
                            var wd = bd;
                            class kd extends kl {
                                constructor(t) {
                                    super(t);
                                    this._config = { childList: true, characterData: true, characterDataOldValue: true, subtree: true };
                                    this.domConverter = t.domConverter;
                                    this.renderer = t._renderer;
                                    this._domElements = [];
                                    this._mutationObserver = new window.MutationObserver(this._onMutations.bind(this))
                                }
                                flush() { this._onMutations(this._mutationObserver.takeRecords()) }
                                observe(t) { this._domElements.push(t); if (this.isEnabled) { this._mutationObserver.observe(t, this._config) } }
                                enable() { super.enable(); for (const t of this._domElements) { this._mutationObserver.observe(t, this._config) } }
                                disable() {
                                    super.disable();
                                    this._mutationObserver.disconnect()
                                }
                                destroy() {
                                    super.destroy();
                                    this._mutationObserver.disconnect()
                                }
                                _onMutations(t) {
                                    if (t.length === 0) { return }
                                    const e = this.domConverter;
                                    const n = new Map;
                                    const i = new Set;
                                    for (const n of t) { if (n.type === "childList") { const t = e.mapDomToView(n.target); if (t && t.is("uiElement")) { continue } if (t && !this._isBogusBrMutation(n)) { i.add(t) } } }
                                    for (const o of t) { const t = e.mapDomToView(o.target); if (t && t.is("uiElement")) { continue } if (o.type === "characterData") { const t = e.findCorrespondingViewText(o.target); if (t && !i.has(t.parent)) { n.set(t, { type: "text", oldText: t.data, newText: zc(o.target), node: t }) } else if (!t && Lc(o.target)) { i.add(e.mapDomToView(o.target.parentNode)) } } }
                                    const o = [];
                                    for (const t of n.values()) {
                                        this.renderer.markToSync("text", t.node);
                                        o.push(t)
                                    }
                                    for (const t of i) {
                                        const n = e.mapViewToDom(t);
                                        const i = Array.from(t.getChildren());
                                        const s = Array.from(e.domChildrenToView(n, { withChildren: false }));
                                        if (!wd(i, s, a)) {
                                            this.renderer.markToSync("children", t);
                                            o.push({ type: "children", oldChildren: i, newChildren: s, node: t })
                                        }
                                    }
                                    const s = t[0].target.ownerDocument.getSelection();
                                    let r = null;
                                    if (s && s.anchorNode) {
                                        const t = e.domPositionToView(s.anchorNode, s.anchorOffset);
                                        const n = e.domPositionToView(s.focusNode, s.focusOffset);
                                        if (t && n) {
                                            r = new ja(t);
                                            r.setFocus(n)
                                        }
                                    }
                                    this.document.fire("mutations", o, r);
                                    this.view.forceRender();

                                    function a(t, e) { if (Array.isArray(t)) { return } if (t === e) { return true } else if (t.is("text") && e.is("text")) { return t.data === e.data } return false }
                                }
                                _isBogusBrMutation(t) { let e = null; if (t.nextSibling === null && t.removedNodes.length === 0 && t.addedNodes.length == 1) { e = this.domConverter.domToView(t.addedNodes[0], { withChildren: false }) } return e && e.is("element", "br") }
                            }
                            class _d {
                                constructor(t, e, n) {
                                    this.view = t;
                                    this.document = t.document;
                                    this.domEvent = e;
                                    this.domTarget = e.target;
                                    ga(this, n)
                                }
                                get target() { return this.view.domConverter.mapDomToView(this.domTarget) }
                                preventDefault() { this.domEvent.preventDefault() }
                                stopPropagation() { this.domEvent.stopPropagation() }
                            }
                            class vd extends kl {
                                constructor(t) {
                                    super(t);
                                    this.useCapture = false
                                }
                                observe(t) {
                                    const e = typeof this.domEventType == "string" ? [this.domEventType] : this.domEventType;
                                    e.forEach(e => { this.listenTo(t, e, (t, e) => { if (this.isEnabled) { this.onDomEvent(e) } }, { useCapture: this.useCapture }) })
                                }
                                fire(t, e, n) { if (this.isEnabled) { this.document.fire(t, new _d(this.view, e, n)) } }
                            }
                            class yd extends vd {
                                constructor(t) {
                                    super(t);
                                    this.domEventType = ["keydown", "keyup"]
                                }
                                onDomEvent(t) { this.fire(t.type, t, { keyCode: t.keyCode, altKey: t.altKey, ctrlKey: t.ctrlKey || t.metaKey, shiftKey: t.shiftKey, get keystroke() { return ac(this) } }) }
                            }
                            var xd = function() { return i["a"].Date.now() };
                            var Ad = xd;
                            var Cd = "[object Symbol]";

                            function Td(t) { return typeof t == "symbol" || T(t) && _(t) == Cd }
                            var Pd = Td;
                            var Sd = 0 / 0;
                            var Md = /^\s+|\s+$/g;
                            var Ed = /^[-+]0x[0-9a-f]+$/i;
                            var Id = /^0b[01]+$/i;
                            var Nd = /^0o[0-7]+$/i;
                            var Od = parseInt;

                            function Rd(t) {
                                if (typeof t == "number") { return t }
                                if (Pd(t)) { return Sd }
                                if (ct(t)) {
                                    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
                                    t = ct(e) ? e + "" : e
                                }
                                if (typeof t != "string") { return t === 0 ? t : +t }
                                t = t.replace(Md, "");
                                var n = Id.test(t);
                                return n || Nd.test(t) ? Od(t.slice(2), n ? 2 : 8) : Ed.test(t) ? Sd : +t
                            }
                            var Ld = Rd;
                            var Dd = "Expected a function";
                            var zd = Math.max,
                                Vd = Math.min;

                            function jd(t, e, n) {
                                var i, o, s, r, a, c, l = 0,
                                    d = false,
                                    u = false,
                                    h = true;
                                if (typeof t != "function") { throw new TypeError(Dd) }
                                e = Ld(e) || 0;
                                if (ct(n)) {
                                    d = !!n.leading;
                                    u = "maxWait" in n;
                                    s = u ? zd(Ld(n.maxWait) || 0, e) : s;
                                    h = "trailing" in n ? !!n.trailing : h
                                }

                                function f(e) {
                                    var n = i,
                                        s = o;
                                    i = o = undefined;
                                    l = e;
                                    r = t.apply(s, n);
                                    return r
                                }

                                function g(t) {
                                    l = t;
                                    a = setTimeout(b, e);
                                    return d ? f(t) : r
                                }

                                function m(t) {
                                    var n = t - c,
                                        i = t - l,
                                        o = e - n;
                                    return u ? Vd(o, s - i) : o
                                }

                                function p(t) {
                                    var n = t - c,
                                        i = t - l;
                                    return c === undefined || n >= e || n < 0 || u && i >= s
                                }

                                function b() {
                                    var t = Ad();
                                    if (p(t)) { return w(t) }
                                    a = setTimeout(b, m(t))
                                }

                                function w(t) {
                                    a = undefined;
                                    if (h && i) { return f(t) }
                                    i = o = undefined;
                                    return r
                                }

                                function k() {
                                    if (a !== undefined) { clearTimeout(a) }
                                    l = 0;
                                    i = c = o = a = undefined
                                }

                                function _() { return a === undefined ? r : w(Ad()) }

                                function v() {
                                    var t = Ad(),
                                        n = p(t);
                                    i = arguments;
                                    o = this;
                                    c = t;
                                    if (n) {
                                        if (a === undefined) { return g(c) }
                                        if (u) {
                                            clearTimeout(a);
                                            a = setTimeout(b, e);
                                            return f(c)
                                        }
                                    }
                                    if (a === undefined) { a = setTimeout(b, e) }
                                    return r
                                }
                                v.cancel = k;
                                v.flush = _;
                                return v
                            }
                            var Bd = jd;
                            class Fd extends kl {
                                constructor(t) {
                                    super(t);
                                    this._fireSelectionChangeDoneDebounced = Bd(t => this.document.fire("selectionChangeDone", t), 200)
                                }
                                observe() {
                                    const t = this.document;
                                    t.on("keydown", (e, n) => {
                                        const i = t.selection;
                                        if (i.isFake && Hd(n.keyCode) && this.isEnabled) {
                                            n.preventDefault();
                                            this._handleSelectionMove(n.keyCode)
                                        }
                                    }, { priority: "lowest" })
                                }
                                destroy() {
                                    super.destroy();
                                    this._fireSelectionChangeDoneDebounced.cancel()
                                }
                                _handleSelectionMove(t) {
                                    const e = this.document.selection;
                                    const n = new ja(e.getRanges(), { backward: e.isBackward, fake: false });
                                    if (t == rc.arrowleft || t == rc.arrowup) { n.setTo(n.getFirstPosition()) }
                                    if (t == rc.arrowright || t == rc.arrowdown) { n.setTo(n.getLastPosition()) }
                                    const i = { oldSelection: e, newSelection: n, domSelection: null };
                                    this.document.fire("selectionChange", i);
                                    this._fireSelectionChangeDoneDebounced(i)
                                }
                            }

                            function Hd(t) { return t == rc.arrowright || t == rc.arrowleft || t == rc.arrowup || t == rc.arrowdown }
                            class Ud extends kl {
                                constructor(t) {
                                    super(t);
                                    this.mutationObserver = t.getObserver(kd);
                                    this.selection = this.document.selection;
                                    this.domConverter = t.domConverter;
                                    this._documents = new WeakSet;
                                    this._fireSelectionChangeDoneDebounced = Bd(t => this.document.fire("selectionChangeDone", t), 200);
                                    this._clearInfiniteLoopInterval = setInterval(() => this._clearInfiniteLoop(), 1e3);
                                    this._loopbackCounter = 0
                                }
                                observe(t) {
                                    const e = t.ownerDocument;
                                    if (this._documents.has(e)) { return }
                                    this.listenTo(e, "selectionchange", () => { this._handleSelectionChange(e) });
                                    this._documents.add(e)
                                }
                                destroy() {
                                    super.destroy();
                                    clearInterval(this._clearInfiniteLoopInterval);
                                    this._fireSelectionChangeDoneDebounced.cancel()
                                }
                                _handleSelectionChange(t) {
                                    if (!this.isEnabled || !this.document.isFocused && !this.document.isReadOnly) { return }
                                    this.mutationObserver.flush();
                                    const e = t.defaultView.getSelection();
                                    const n = this.domConverter.domSelectionToView(e);
                                    if (this.selection.isEqual(n) && this.domConverter.isDomSelectionCorrect(e)) { return }
                                    if (++this._loopbackCounter > 60) { return }
                                    if (this.selection.isSimilar(n)) { this.view.forceRender() } else {
                                        const t = { oldSelection: this.selection, newSelection: n, domSelection: e };
                                        this.document.fire("selectionChange", t);
                                        this._fireSelectionChangeDoneDebounced(t)
                                    }
                                }
                                _clearInfiniteLoop() { this._loopbackCounter = 0 }
                            }
                            class qd extends vd {
                                constructor(t) {
                                    super(t);
                                    this.domEventType = ["focus", "blur"];
                                    this.useCapture = true;
                                    const e = this.document;
                                    e.on("focus", () => {
                                        e.isFocused = true;
                                        this._renderTimeoutId = setTimeout(() => t.forceRender(), 50)
                                    });
                                    e.on("blur", (n, i) => {
                                        const o = e.selection.editableElement;
                                        if (o === null || o === i.target) {
                                            e.isFocused = false;
                                            t.forceRender()
                                        }
                                    })
                                }
                                onDomEvent(t) { this.fire(t.type, t) }
                                destroy() {
                                    if (this._renderTimeoutId) { clearTimeout(this._renderTimeoutId) }
                                    super.destroy()
                                }
                            }
                            class Wd extends vd {
                                constructor(t) {
                                    super(t);
                                    this.domEventType = ["compositionstart", "compositionupdate", "compositionend"];
                                    const e = this.document;
                                    e.on("compositionstart", () => { e.isComposing = true });
                                    e.on("compositionend", () => { e.isComposing = false })
                                }
                                onDomEvent(t) { this.fire(t.type, t) }
                            }
                            class $d extends vd {
                                constructor(t) {
                                    super(t);
                                    this.domEventType = ["beforeinput"]
                                }
                                onDomEvent(t) { this.fire(t.type, t) }
                            }

                            function Yd(t) { return Object.prototype.toString.apply(t) == "[object Range]" }

                            function Gd(t) { const e = t.ownerDocument.defaultView.getComputedStyle(t); return { top: parseInt(e.borderTopWidth, 10), right: parseInt(e.borderRightWidth, 10), bottom: parseInt(e.borderBottomWidth, 10), left: parseInt(e.borderLeftWidth, 10) } }
                            const Qd = ["top", "right", "bottom", "left", "width", "height"];
                            class Kd {
                                constructor(t) {
                                    const e = Yd(t);
                                    Object.defineProperty(this, "_source", { value: t._source || t, writable: true, enumerable: false });
                                    if (Gs(t) || e) { if (e) { Jd(this, Kd.getDomRangeRects(t)[0]) } else { Jd(this, t.getBoundingClientRect()) } } else if (gl(t)) {
                                        const { innerWidth: e, innerHeight: n } = t;
                                        Jd(this, { top: 0, right: e, bottom: n, left: 0, width: e, height: n })
                                    } else { Jd(this, t) }
                                }
                                clone() { return new Kd(this) }
                                moveTo(t, e) {
                                    this.top = e;
                                    this.right = t + this.width;
                                    this.bottom = e + this.height;
                                    this.left = t;
                                    return this
                                }
                                moveBy(t, e) {
                                    this.top += e;
                                    this.right += t;
                                    this.left += t;
                                    this.bottom += e;
                                    return this
                                }
                                getIntersection(t) {
                                    const e = { top: Math.max(this.top, t.top), right: Math.min(this.right, t.right), bottom: Math.min(this.bottom, t.bottom), left: Math.max(this.left, t.left) };
                                    e.width = e.right - e.left;
                                    e.height = e.bottom - e.top;
                                    if (e.width < 0 || e.height < 0) { return null } else { return new Kd(e) }
                                }
                                getIntersectionArea(t) { const e = this.getIntersection(t); if (e) { return e.getArea() } else { return 0 } }
                                getArea() { return this.width * this.height }
                                getVisible() {
                                    const t = this._source;
                                    let e = this.clone();
                                    if (!Zd(t)) {
                                        let n = t.parentNode || t.commonAncestorContainer;
                                        while (n && !Zd(n)) {
                                            const t = new Kd(n);
                                            const i = e.getIntersection(t);
                                            if (i) { if (i.getArea() < e.getArea()) { e = i } } else { return null }
                                            n = n.parentNode
                                        }
                                    }
                                    return e
                                }
                                isEqual(t) { for (const e of Qd) { if (this[e] !== t[e]) { return false } } return true }
                                contains(t) { const e = this.getIntersection(t); return !!(e && e.isEqual(t)) }
                                excludeScrollbarsAndBorders() {
                                    const t = this._source;
                                    let e, n, i;
                                    if (gl(t)) {
                                        e = t.innerWidth - t.document.documentElement.clientWidth;
                                        n = t.innerHeight - t.document.documentElement.clientHeight;
                                        i = t.getComputedStyle(t.document.documentElement).direction
                                    } else {
                                        const o = Gd(this._source);
                                        e = t.offsetWidth - t.clientWidth - o.left - o.right;
                                        n = t.offsetHeight - t.clientHeight - o.top - o.bottom;
                                        i = t.ownerDocument.defaultView.getComputedStyle(t).direction;
                                        this.left += o.left;
                                        this.top += o.top;
                                        this.right -= o.right;
                                        this.bottom -= o.bottom;
                                        this.width = this.right - this.left;
                                        this.height = this.bottom - this.top
                                    }
                                    this.width -= e;
                                    if (i === "ltr") { this.right -= e } else { this.left += e }
                                    this.height -= n;
                                    this.bottom -= n;
                                    return this
                                }
                                static getDomRangeRects(t) {
                                    const e = [];
                                    const n = Array.from(t.getClientRects());
                                    if (n.length) { for (const t of n) { e.push(new Kd(t)) } } else {
                                        let n = t.startContainer;
                                        if (Ec(n)) { n = n.parentNode }
                                        const i = new Kd(n.getBoundingClientRect());
                                        i.right = i.left;
                                        i.width = 0;
                                        e.push(i)
                                    }
                                    return e
                                }
                            }

                            function Jd(t, e) { for (const n of Qd) { t[n] = e[n] } }

                            function Zd(t) { if (!Gs(t)) { return false } return t === t.ownerDocument.body }
                            const Xd = {};

                            function tu({ target: t, viewportOffset: e = 0 }) {
                                const n = cu(t);
                                let i = n;
                                let o = null;
                                while (i) {
                                    let s;
                                    if (i == n) { s = lu(t) } else { s = lu(o) }
                                    iu(s, () => du(t, i));
                                    const r = du(t, i);
                                    nu(i, r, e);
                                    if (i.parent != i) {
                                        o = i.frameElement;
                                        i = i.parent;
                                        if (!o) { return }
                                    } else { i = null }
                                }
                            }

                            function eu(t) {
                                const e = lu(t);
                                iu(e, () => new Kd(t))
                            }
                            Object.assign(Xd, { scrollViewportToShowTarget: tu, scrollAncestorsToShowTarget: eu });

                            function nu(t, e, n) {
                                const i = e.clone().moveBy(0, n);
                                const o = e.clone().moveBy(0, -n);
                                const s = new Kd(t).excludeScrollbarsAndBorders();
                                const r = [o, i];
                                if (!r.every(t => s.contains(t))) {
                                    let { scrollX: r, scrollY: a } = t;
                                    if (su(o, s)) { a -= s.top - e.top + n } else if (ou(i, s)) { a += e.bottom - s.bottom + n }
                                    if (ru(e, s)) { r -= s.left - e.left + n } else if (au(e, s)) { r += e.right - s.right + n }
                                    t.scrollTo(r, a)
                                }
                            }

                            function iu(t, e) {
                                const n = cu(t);
                                let i, o;
                                while (t != n.document.body) {
                                    o = e();
                                    i = new Kd(t).excludeScrollbarsAndBorders();
                                    if (!i.contains(o)) { if (su(o, i)) { t.scrollTop -= i.top - o.top } else if (ou(o, i)) { t.scrollTop += o.bottom - i.bottom } if (ru(o, i)) { t.scrollLeft -= i.left - o.left } else if (au(o, i)) { t.scrollLeft += o.right - i.right } }
                                    t = t.parentNode
                                }
                            }

                            function ou(t, e) { return t.bottom > e.bottom }

                            function su(t, e) { return t.top < e.top }

                            function ru(t, e) { return t.left < e.left }

                            function au(t, e) { return t.right > e.right }

                            function cu(t) { if (Yd(t)) { return t.startContainer.ownerDocument.defaultView } else { return t.ownerDocument.defaultView } }

                            function lu(t) { if (Yd(t)) { let e = t.commonAncestorContainer; if (Ec(e)) { e = e.parentNode } return e } else { return t.parentNode } }

                            function du(t, e) {
                                const n = cu(t);
                                const i = new Kd(t);
                                if (n === e) { return i } else {
                                    let t = n;
                                    while (t != e) {
                                        const e = t.frameElement;
                                        const n = new Kd(e).excludeScrollbarsAndBorders();
                                        i.moveBy(n.left, n.top);
                                        t = t.parent
                                    }
                                }
                                return i
                            }
                            class uu {
                                constructor() {
                                    this.document = new Ha;
                                    this.domConverter = new ll;
                                    this.domRoots = new Map;
                                    this.set("isRenderingInProgress", false);
                                    this._renderer = new Kc(this.domConverter, this.document.selection);
                                    this._renderer.bind("isFocused").to(this.document);
                                    this._initialDomRootAttributes = new WeakMap;
                                    this._observers = new Map;
                                    this._ongoingChange = false;
                                    this._postFixersInProgress = false;
                                    this._renderingDisabled = false;
                                    this._hasChangedSinceTheLastRendering = false;
                                    this._writer = new wc(this.document);
                                    this.addObserver(kd);
                                    this.addObserver(Ud);
                                    this.addObserver(qd);
                                    this.addObserver(yd);
                                    this.addObserver(Fd);
                                    this.addObserver(Wd);
                                    if (Ja.isAndroid) { this.addObserver($d) }
                                    Vc(this);
                                    fc(this);
                                    this.on("render", () => {
                                        this._render();
                                        this.document.fire("layoutChanged");
                                        this._hasChangedSinceTheLastRendering = false
                                    });
                                    this.listenTo(this.document.selection, "change", () => { this._hasChangedSinceTheLastRendering = true })
                                }
                                attachDomRoot(t, e = "main") {
                                    const n = this.document.getRoot(e);
                                    n._name = t.tagName.toLowerCase();
                                    const i = {};
                                    for (const { name: e, value: o }
                                        of Array.from(t.attributes)) { i[e] = o; if (e === "class") { this._writer.addClass(o.split(" "), n) } else { this._writer.setAttribute(e, o, n) } }
                                    this._initialDomRootAttributes.set(t, i);
                                    const o = () => { this._writer.setAttribute("contenteditable", !n.isReadOnly, n); if (n.isReadOnly) { this._writer.addClass("ck-read-only", n) } else { this._writer.removeClass("ck-read-only", n) } };
                                    o();
                                    this.domRoots.set(e, t);
                                    this.domConverter.bindElements(t, n);
                                    this._renderer.markToSync("children", n);
                                    this._renderer.markToSync("attributes", n);
                                    this._renderer.domDocuments.add(t.ownerDocument);
                                    n.on("change:children", (t, e) => this._renderer.markToSync("children", e));
                                    n.on("change:attributes", (t, e) => this._renderer.markToSync("attributes", e));
                                    n.on("change:text", (t, e) => this._renderer.markToSync("text", e));
                                    n.on("change:isReadOnly", () => this.change(o));
                                    n.on("change", () => { this._hasChangedSinceTheLastRendering = true });
                                    for (const n of this._observers.values()) { n.observe(t, e) }
                                }
                                detachDomRoot(t) {
                                    const e = this.domRoots.get(t);
                                    Array.from(e.attributes).forEach(({ name: t }) => e.removeAttribute(t));
                                    const n = this._initialDomRootAttributes.get(e);
                                    for (const t in n) { e.setAttribute(t, n[t]) }
                                    this.domRoots.delete(t);
                                    this.domConverter.unbindDomElement(e)
                                }
                                getDomRoot(t = "main") { return this.domRoots.get(t) }
                                addObserver(t) {
                                    let e = this._observers.get(t);
                                    if (e) { return e }
                                    e = new t(this);
                                    this._observers.set(t, e);
                                    for (const [t, n] of this.domRoots) { e.observe(n, t) }
                                    e.enable();
                                    return e
                                }
                                getObserver(t) { return this._observers.get(t) }
                                disableObservers() { for (const t of this._observers.values()) { t.disable() } }
                                enableObservers() { for (const t of this._observers.values()) { t.enable() } }
                                scrollToTheSelection() { const t = this.document.selection.getFirstRange(); if (t) { tu({ target: this.domConverter.viewRangeToDom(t), viewportOffset: 20 }) } }
                                focus() {
                                    if (!this.document.isFocused) {
                                        const t = this.document.selection.editableElement;
                                        if (t) {
                                            this.domConverter.focus(t);
                                            this.forceRender()
                                        } else {}
                                    }
                                }
                                change(t) {
                                    if (this.isRenderingInProgress || this._postFixersInProgress) { throw new Zs["b"]("cannot-change-view-tree: " + "Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. " + "This may cause some unexpected behavior and inconsistency between the DOM and the view.", this) }
                                    try {
                                        if (this._ongoingChange) { return t(this._writer) }
                                        this._ongoingChange = true;
                                        const e = t(this._writer);
                                        this._ongoingChange = false;
                                        if (!this._renderingDisabled && this._hasChangedSinceTheLastRendering) {
                                            this._postFixersInProgress = true;
                                            this.document._callPostFixers(this._writer);
                                            this._postFixersInProgress = false;
                                            this.fire("render")
                                        }
                                        return e
                                    } catch (t) { Zs["b"].rethrowUnexpectedError(t, this) }
                                }
                                forceRender() {
                                    this._hasChangedSinceTheLastRendering = true;
                                    this.change(() => {})
                                }
                                destroy() {
                                    for (const t of this._observers.values()) { t.destroy() }
                                    this.document.destroy();
                                    this.stopListening()
                                }
                                createPositionAt(t, e) { return La._createAt(t, e) }
                                createPositionAfter(t) { return La._createAfter(t) }
                                createPositionBefore(t) { return La._createBefore(t) }
                                createRange(t, e) { return new Da(t, e) }
                                createRangeOn(t) { return Da._createOn(t) }
                                createRangeIn(t) { return Da._createIn(t) }
                                createSelection(t, e, n) { return new ja(t, e, n) }
                                _disableRendering(t) { this._renderingDisabled = t; if (t == false) { this.change(() => {}) } }
                                _render() {
                                    this.isRenderingInProgress = true;
                                    this.disableObservers();
                                    this._renderer.render();
                                    this.enableObservers();
                                    this.isRenderingInProgress = false
                                }
                            }
                            _r(uu, ka);

                            function hu(t) { if (R(t)) { return Sr(t) } else { return new Map(t) } }
                            class fu {
                                constructor(t) {
                                    this.parent = null;
                                    this._attrs = hu(t)
                                }
                                get index() { let t; if (!this.parent) { return null } if ((t = this.parent.getChildIndex(this)) === null) { throw new Zs["b"]("model-node-not-found-in-parent: The node's parent does not contain this node.", this) } return t }
                                get startOffset() { let t; if (!this.parent) { return null } if ((t = this.parent.getChildStartOffset(this)) === null) { throw new Zs["b"]("model-node-not-found-in-parent: The node's parent does not contain this node.", this) } return t }
                                get offsetSize() { return 1 }
                                get endOffset() { if (!this.parent) { return null } return this.startOffset + this.offsetSize }
                                get nextSibling() { const t = this.index; return t !== null && this.parent.getChild(t + 1) || null }
                                get previousSibling() { const t = this.index; return t !== null && this.parent.getChild(t - 1) || null }
                                get root() { let t = this; while (t.parent) { t = t.parent } return t }
                                get document() { if (this.root == this) { return null } return this.root.document || null }
                                getPath() {
                                    const t = [];
                                    let e = this;
                                    while (e.parent) {
                                        t.unshift(e.startOffset);
                                        e = e.parent
                                    }
                                    return t
                                }
                                getAncestors(t = { includeSelf: false, parentFirst: false }) {
                                    const e = [];
                                    let n = t.includeSelf ? this : this.parent;
                                    while (n) {
                                        e[t.parentFirst ? "push" : "unshift"](n);
                                        n = n.parent
                                    }
                                    return e
                                }
                                getCommonAncestor(t, e = {}) { const n = this.getAncestors(e); const i = t.getAncestors(e); let o = 0; while (n[o] == i[o] && n[o]) { o++ } return o === 0 ? null : n[o - 1] }
                                isBefore(t) {
                                    if (this == t) { return false }
                                    if (this.root !== t.root) { return false }
                                    const e = this.getPath();
                                    const n = t.getPath();
                                    const i = vr(e, n);
                                    switch (i) {
                                        case "prefix":
                                            return true;
                                        case "extension":
                                            return false;
                                        default:
                                            return e[i] < n[i]
                                    }
                                }
                                isAfter(t) { if (this == t) { return false } if (this.root !== t.root) { return false } return !this.isBefore(t) }
                                hasAttribute(t) { return this._attrs.has(t) }
                                getAttribute(t) { return this._attrs.get(t) }
                                getAttributes() { return this._attrs.entries() }
                                getAttributeKeys() { return this._attrs.keys() }
                                toJSON() { const t = {}; if (this._attrs.size) { t.attributes = Array.from(this._attrs).reduce((t, e) => { t[e[0]] = e[1]; return t }, {}) } return t }
                                is(t) { return t == "node" || t == "model:node" }
                                _clone() { return new fu(this._attrs) }
                                _remove() { this.parent._removeChildren(this.index) }
                                _setAttribute(t, e) { this._attrs.set(t, e) }
                                _setAttributesTo(t) { this._attrs = hu(t) }
                                _removeAttribute(t) { return this._attrs.delete(t) }
                                _clearAttributes() { this._attrs.clear() }
                            }
                            class gu extends fu {
                                constructor(t, e) {
                                    super(e);
                                    this._data = t || ""
                                }
                                get offsetSize() { return this.data.length }
                                get data() { return this._data }
                                is(t) { return t == "text" || t == "model:text" || super.is(t) }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.data = this.data;
                                    return t
                                }
                                _clone() { return new gu(this.data, this.getAttributes()) }
                                static fromJSON(t) { return new gu(t.data, t.attributes) }
                            }
                            class mu {
                                constructor(t, e, n) {
                                    this.textNode = t;
                                    if (e < 0 || e > t.offsetSize) { throw new Zs["b"]("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.", this) }
                                    if (n < 0 || e + n > t.offsetSize) { throw new Zs["b"]("model-textproxy-wrong-length: Given length value is incorrect.", this) }
                                    this.data = t.data.substring(e, e + n);
                                    this.offsetInText = e
                                }
                                get startOffset() { return this.textNode.startOffset !== null ? this.textNode.startOffset + this.offsetInText : null }
                                get offsetSize() { return this.data.length }
                                get endOffset() { return this.startOffset !== null ? this.startOffset + this.offsetSize : null }
                                get isPartial() { return this.offsetSize !== this.textNode.offsetSize }
                                get parent() { return this.textNode.parent }
                                get root() { return this.textNode.root }
                                get document() { return this.textNode.document }
                                is(t) { return t == "textProxy" || t == "model:textProxy" }
                                getPath() { const t = this.textNode.getPath(); if (t.length > 0) { t[t.length - 1] += this.offsetInText } return t }
                                getAncestors(t = { includeSelf: false, parentFirst: false }) {
                                    const e = [];
                                    let n = t.includeSelf ? this : this.parent;
                                    while (n) {
                                        e[t.parentFirst ? "push" : "unshift"](n);
                                        n = n.parent
                                    }
                                    return e
                                }
                                hasAttribute(t) { return this.textNode.hasAttribute(t) }
                                getAttribute(t) { return this.textNode.getAttribute(t) }
                                getAttributes() { return this.textNode.getAttributes() }
                                getAttributeKeys() { return this.textNode.getAttributeKeys() }
                            }
                            class pu {
                                constructor(t) { this._nodes = []; if (t) { this._insertNodes(0, t) } }[Symbol.iterator]() { return this._nodes[Symbol.iterator]() }
                                get length() { return this._nodes.length }
                                get maxOffset() { return this._nodes.reduce((t, e) => t + e.offsetSize, 0) }
                                getNode(t) { return this._nodes[t] || null }
                                getNodeIndex(t) { const e = this._nodes.indexOf(t); return e == -1 ? null : e }
                                getNodeStartOffset(t) { const e = this.getNodeIndex(t); return e === null ? null : this._nodes.slice(0, e).reduce((t, e) => t + e.offsetSize, 0) }
                                indexToOffset(t) { if (t == this._nodes.length) { return this.maxOffset } const e = this._nodes[t]; if (!e) { throw new Zs["b"]("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.", this) } return this.getNodeStartOffset(e) }
                                offsetToIndex(t) {
                                    let e = 0;
                                    for (const n of this._nodes) {
                                        if (t >= e && t < e + n.offsetSize) { return this.getNodeIndex(n) }
                                        e += n.offsetSize
                                    }
                                    if (e != t) { throw new Zs["b"]("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.", this, { offset: t, nodeList: this }) }
                                    return this.length
                                }
                                _insertNodes(t, e) {
                                    for (const t of e) { if (!(t instanceof fu)) { throw new Zs["b"]("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.", this) } }
                                    this._nodes.splice(t, 0, ...e)
                                }
                                _removeNodes(t, e = 1) { return this._nodes.splice(t, e) }
                                toJSON() { return this._nodes.map(t => t.toJSON()) }
                            }
                            class bu extends fu {
                                constructor(t, e, n) {
                                    super(e);
                                    this.name = t;
                                    this._children = new pu;
                                    if (n) { this._insertChild(0, n) }
                                }
                                get childCount() { return this._children.length }
                                get maxOffset() { return this._children.maxOffset }
                                get isEmpty() { return this.childCount === 0 }
                                is(t, e = null) { const n = t.replace(/^model:/, ""); if (!e) { return n == "element" || n == this.name || super.is(t) } else { return n == "element" && e == this.name } }
                                getChild(t) { return this._children.getNode(t) }
                                getChildren() { return this._children[Symbol.iterator]() }
                                getChildIndex(t) { return this._children.getNodeIndex(t) }
                                getChildStartOffset(t) { return this._children.getNodeStartOffset(t) }
                                offsetToIndex(t) { return this._children.offsetToIndex(t) }
                                getNodeByPath(t) { let e = this; for (const n of t) { e = e.getChild(e.offsetToIndex(n)) } return e }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.name = this.name;
                                    if (this._children.length > 0) { t.children = []; for (const e of this._children) { t.children.push(e.toJSON()) } }
                                    return t
                                }
                                _clone(t = false) { const e = t ? Array.from(this._children).map(t => t._clone(true)) : null; return new bu(this.name, this.getAttributes(), e) }
                                _appendChild(t) { this._insertChild(this.childCount, t) }
                                _insertChild(t, e) {
                                    const n = wu(e);
                                    for (const t of n) {
                                        if (t.parent !== null) { t._remove() }
                                        t.parent = this
                                    }
                                    this._children._insertNodes(t, n)
                                }
                                _removeChildren(t, e = 1) { const n = this._children._removeNodes(t, e); for (const t of n) { t.parent = null } return n }
                                static fromJSON(t) { let e = null; if (t.children) { e = []; for (const n of t.children) { if (n.name) { e.push(bu.fromJSON(n)) } else { e.push(gu.fromJSON(n)) } } } return new bu(t.name, t.attributes, e) }
                            }

                            function wu(t) { if (typeof t == "string") { return [new gu(t)] } if (!Mr(t)) { t = [t] } return Array.from(t).map(t => { if (typeof t == "string") { return new gu(t) } if (t instanceof mu) { return new gu(t.data, t.getAttributes()) } return t }) }
                            class ku {
                                constructor(t = {}) {
                                    if (!t.boundaries && !t.startPosition) { throw new Zs["b"]("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.", null) }
                                    const e = t.direction || "forward";
                                    if (e != "forward" && e != "backward") { throw new Zs["b"]("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", t, { direction: e }) }
                                    this.direction = e;
                                    this.boundaries = t.boundaries || null;
                                    if (t.startPosition) { this.position = t.startPosition.clone() } else { this.position = xu._createAt(this.boundaries[this.direction == "backward" ? "end" : "start"]) }
                                    this.position.stickiness = "toNone";
                                    this.singleCharacters = !!t.singleCharacters;
                                    this.shallow = !!t.shallow;
                                    this.ignoreElementEnd = !!t.ignoreElementEnd;
                                    this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null;
                                    this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null;
                                    this._visitedParent = this.position.parent
                                }[Symbol.iterator]() { return this }
                                skip(t) {
                                    let e, n, i, o;
                                    do {
                                        i = this.position;
                                        o = this._visitedParent;
                                        ({ done: e, value: n } = this.next())
                                    } while (!e && t(n));
                                    if (!e) {
                                        this.position = i;
                                        this._visitedParent = o
                                    }
                                }
                                next() { if (this.direction == "forward") { return this._next() } else { return this._previous() } }
                                _next() {
                                    const t = this.position;
                                    const e = this.position.clone();
                                    const n = this._visitedParent;
                                    if (n.parent === null && e.offset === n.maxOffset) { return { done: true } }
                                    if (n === this._boundaryEndParent && e.offset == this.boundaries.end.offset) { return { done: true } }
                                    const i = e.textNode ? e.textNode : e.nodeAfter;
                                    if (i instanceof bu) {
                                        if (!this.shallow) {
                                            e.path.push(0);
                                            this._visitedParent = i
                                        } else { e.offset++ }
                                        this.position = e;
                                        return _u("elementStart", i, t, e, 1)
                                    } else if (i instanceof gu) {
                                        let o;
                                        if (this.singleCharacters) { o = 1 } else {
                                            let t = i.endOffset;
                                            if (this._boundaryEndParent == n && this.boundaries.end.offset < t) { t = this.boundaries.end.offset }
                                            o = t - e.offset
                                        }
                                        const s = e.offset - i.startOffset;
                                        const r = new mu(i, s, o);
                                        e.offset += o;
                                        this.position = e;
                                        return _u("text", r, t, e, o)
                                    } else {
                                        e.path.pop();
                                        e.offset++;
                                        this.position = e;
                                        this._visitedParent = n.parent;
                                        if (this.ignoreElementEnd) { return this._next() } else { return _u("elementEnd", n, t, e) }
                                    }
                                }
                                _previous() {
                                    const t = this.position;
                                    const e = this.position.clone();
                                    const n = this._visitedParent;
                                    if (n.parent === null && e.offset === 0) { return { done: true } }
                                    if (n == this._boundaryStartParent && e.offset == this.boundaries.start.offset) { return { done: true } }
                                    const i = e.textNode ? e.textNode : e.nodeBefore;
                                    if (i instanceof bu) {
                                        e.offset--;
                                        if (!this.shallow) {
                                            e.path.push(i.maxOffset);
                                            this.position = e;
                                            this._visitedParent = i;
                                            if (this.ignoreElementEnd) { return this._previous() } else { return _u("elementEnd", i, t, e) }
                                        } else { this.position = e; return _u("elementStart", i, t, e, 1) }
                                    } else if (i instanceof gu) {
                                        let o;
                                        if (this.singleCharacters) { o = 1 } else {
                                            let t = i.startOffset;
                                            if (this._boundaryStartParent == n && this.boundaries.start.offset > t) { t = this.boundaries.start.offset }
                                            o = e.offset - t
                                        }
                                        const s = e.offset - i.startOffset;
                                        const r = new mu(i, s - o, o);
                                        e.offset -= o;
                                        this.position = e;
                                        return _u("text", r, t, e, o)
                                    } else {
                                        e.path.pop();
                                        this.position = e;
                                        this._visitedParent = n.parent;
                                        return _u("elementStart", n, t, e, 1)
                                    }
                                }
                            }

                            function _u(t, e, n, i, o) { return { done: false, value: { type: t, item: e, previousPosition: n, nextPosition: i, length: o } } }

                            function vu(t) { var e = t == null ? 0 : t.length; return e ? t[e - 1] : undefined }
                            var yu = vu;
                            class xu {
                                constructor(t, e, n = "toNone") {
                                    if (!t.is("element") && !t.is("documentFragment")) { throw new Zs["b"]("model-position-root-invalid: Position root invalid.", t) }
                                    if (!(e instanceof Array) || e.length === 0) { throw new Zs["b"]("model-position-path-incorrect-format: Position path must be an array with at least one item.", t, { path: e }) }
                                    e = t.getPath().concat(e);
                                    t = t.root;
                                    this.root = t;
                                    this.path = e;
                                    this.stickiness = n
                                }
                                get offset() { return yu(this.path) }
                                set offset(t) { this.path[this.path.length - 1] = t }
                                get parent() { let t = this.root; for (let e = 0; e < this.path.length - 1; e++) { t = t.getChild(t.offsetToIndex(this.path[e])); if (!t) { throw new Zs["b"]("model-position-path-incorrect: The position's path is incorrect.", this, { position: this }) } } if (t.is("text")) { throw new Zs["b"]("model-position-path-incorrect: The position's path is incorrect.", this, { position: this }) } return t }
                                get index() { return this.parent.offsetToIndex(this.offset) }
                                get textNode() { const t = this.parent.getChild(this.index); return t instanceof gu && t.startOffset < this.offset ? t : null }
                                get nodeAfter() { return this.textNode === null ? this.parent.getChild(this.index) : null }
                                get nodeBefore() { return this.textNode === null ? this.parent.getChild(this.index - 1) : null }
                                get isAtStart() { return this.offset === 0 }
                                get isAtEnd() { return this.offset == this.parent.maxOffset }
                                compareWith(t) {
                                    if (this.root != t.root) { return "different" }
                                    const e = vr(this.path, t.path);
                                    switch (e) {
                                        case "same":
                                            return "same";
                                        case "prefix":
                                            return "before";
                                        case "extension":
                                            return "after";
                                        default:
                                            return this.path[e] < t.path[e] ? "before" : "after"
                                    }
                                }
                                getLastMatchingPosition(t, e = {}) {
                                    e.startPosition = this;
                                    const n = new ku(e);
                                    n.skip(t);
                                    return n.position
                                }
                                getParentPath() { return this.path.slice(0, -1) }
                                getAncestors() { if (this.parent.is("documentFragment")) { return [this.parent] } else { return this.parent.getAncestors({ includeSelf: true }) } }
                                getCommonPath(t) { if (this.root != t.root) { return [] } const e = vr(this.path, t.path); const n = typeof e == "string" ? Math.min(this.path.length, t.path.length) : e; return this.path.slice(0, n) }
                                getCommonAncestor(t) { const e = this.getAncestors(); const n = t.getAncestors(); let i = 0; while (e[i] == n[i] && e[i]) { i++ } return i === 0 ? null : e[i - 1] }
                                getShiftedBy(t) {
                                    const e = this.clone();
                                    const n = e.offset + t;
                                    e.offset = n < 0 ? 0 : n;
                                    return e
                                }
                                isAfter(t) { return this.compareWith(t) == "after" }
                                isBefore(t) { return this.compareWith(t) == "before" }
                                isEqual(t) { return this.compareWith(t) == "same" }
                                isTouching(t) {
                                    let e = null;
                                    let n = null;
                                    const i = this.compareWith(t);
                                    switch (i) {
                                        case "same":
                                            return true;
                                        case "before":
                                            e = xu._createAt(this);
                                            n = xu._createAt(t);
                                            break;
                                        case "after":
                                            e = xu._createAt(t);
                                            n = xu._createAt(this);
                                            break;
                                        default:
                                            return false
                                    }
                                    let o = e.parent;
                                    while (e.path.length + n.path.length) {
                                        if (e.isEqual(n)) { return true }
                                        if (e.path.length > n.path.length) {
                                            if (e.offset !== o.maxOffset) { return false }
                                            e.path = e.path.slice(0, -1);
                                            o = o.parent;
                                            e.offset++
                                        } else {
                                            if (n.offset !== 0) { return false }
                                            n.path = n.path.slice(0, -1)
                                        }
                                    }
                                }
                                is(t) { return t == "position" || t == "model:position" }
                                hasSameParentAs(t) { if (this.root !== t.root) { return false } const e = this.getParentPath(); const n = t.getParentPath(); return vr(e, n) == "same" }
                                getTransformedByOperation(t) {
                                    let e;
                                    switch (t.type) {
                                        case "insert":
                                            e = this._getTransformedByInsertOperation(t);
                                            break;
                                        case "move":
                                        case "remove":
                                        case "reinsert":
                                            e = this._getTransformedByMoveOperation(t);
                                            break;
                                        case "split":
                                            e = this._getTransformedBySplitOperation(t);
                                            break;
                                        case "merge":
                                            e = this._getTransformedByMergeOperation(t);
                                            break;
                                        default:
                                            e = xu._createAt(this);
                                            break
                                    }
                                    return e
                                }
                                _getTransformedByInsertOperation(t) { return this._getTransformedByInsertion(t.position, t.howMany) }
                                _getTransformedByMoveOperation(t) { return this._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany) }
                                _getTransformedBySplitOperation(t) { const e = t.movedRange; const n = e.containsPosition(this) || e.start.isEqual(this) && this.stickiness == "toNext"; if (n) { return this._getCombined(t.splitPosition, t.moveTargetPosition) } else { if (t.graveyardPosition) { return this._getTransformedByMove(t.graveyardPosition, t.insertionPosition, 1) } else { return this._getTransformedByInsertion(t.insertionPosition, 1) } } }
                                _getTransformedByMergeOperation(t) { const e = t.movedRange; const n = e.containsPosition(this) || e.start.isEqual(this); let i; if (n) { i = this._getCombined(t.sourcePosition, t.targetPosition); if (t.sourcePosition.isBefore(t.targetPosition)) { i = i._getTransformedByDeletion(t.deletionPosition, 1) } } else if (this.isEqual(t.deletionPosition)) { i = xu._createAt(t.deletionPosition) } else { i = this._getTransformedByMove(t.deletionPosition, t.graveyardPosition, 1) } return i }
                                _getTransformedByDeletion(t, e) { const n = xu._createAt(this); if (this.root != t.root) { return n } if (vr(t.getParentPath(), this.getParentPath()) == "same") { if (t.offset < this.offset) { if (t.offset + e > this.offset) { return null } else { n.offset -= e } } } else if (vr(t.getParentPath(), this.getParentPath()) == "prefix") { const i = t.path.length - 1; if (t.offset <= this.path[i]) { if (t.offset + e > this.path[i]) { return null } else { n.path[i] -= e } } } return n }
                                _getTransformedByInsertion(t, e) { const n = xu._createAt(this); if (this.root != t.root) { return n } if (vr(t.getParentPath(), this.getParentPath()) == "same") { if (t.offset < this.offset || t.offset == this.offset && this.stickiness != "toPrevious") { n.offset += e } } else if (vr(t.getParentPath(), this.getParentPath()) == "prefix") { const i = t.path.length - 1; if (t.offset <= this.path[i]) { n.path[i] += e } } return n }
                                _getTransformedByMove(t, e, n) { e = e._getTransformedByDeletion(t, n); if (t.isEqual(e)) { return xu._createAt(this) } const i = this._getTransformedByDeletion(t, n); const o = i === null || t.isEqual(this) && this.stickiness == "toNext" || t.getShiftedBy(n).isEqual(this) && this.stickiness == "toPrevious"; if (o) { return this._getCombined(t, e) } else { return i._getTransformedByInsertion(e, n) } }
                                _getCombined(t, e) {
                                    const n = t.path.length - 1;
                                    const i = xu._createAt(e);
                                    i.stickiness = this.stickiness;
                                    i.offset = i.offset + this.path[n] - t.offset;
                                    i.path = i.path.concat(this.path.slice(n + 1));
                                    return i
                                }
                                toJSON() { return { root: this.root.toJSON(), path: Array.from(this.path), stickiness: this.stickiness } }
                                clone() { return new this.constructor(this.root, this.path, this.stickiness) }
                                static _createAt(t, e, n = "toNone") {
                                    if (t instanceof xu) { return new xu(t.root, t.path, t.stickiness) } else {
                                        const i = t;
                                        if (e == "end") { e = i.maxOffset } else if (e == "before") { return this._createBefore(i, n) } else if (e == "after") { return this._createAfter(i, n) } else if (e !== 0 && !e) { throw new Zs["b"]("model-createPositionAt-offset-required: " + "Model#createPositionAt() requires the offset when the first parameter is a model item.", [this, t]) }
                                        if (!i.is("element") && !i.is("documentFragment")) { throw new Zs["b"]("model-position-parent-incorrect: Position parent have to be a element or document fragment.", [this, t]) }
                                        const o = i.getPath();
                                        o.push(e);
                                        return new this(i.root, o, n)
                                    }
                                }
                                static _createAfter(t, e) { if (!t.parent) { throw new Zs["b"]("model-position-after-root: You cannot make a position after root.", [this, t], { root: t }) } return this._createAt(t.parent, t.endOffset, e) }
                                static _createBefore(t, e) { if (!t.parent) { throw new Zs["b"]("model-position-before-root: You cannot make a position before root.", t, { root: t }) } return this._createAt(t.parent, t.startOffset, e) }
                                static fromJSON(t, e) {
                                    if (t.root === "$graveyard") {
                                        const n = new xu(e.graveyard, t.path);
                                        n.stickiness = t.stickiness;
                                        return n
                                    }
                                    if (!e.getRoot(t.root)) { throw new Zs["b"]("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.", e, { rootName: t.root }) }
                                    return new xu(e.getRoot(t.root), t.path, t.stickiness)
                                }
                            }
                            class Au {
                                constructor(t, e = null) {
                                    this.start = xu._createAt(t);
                                    this.end = e ? xu._createAt(e) : xu._createAt(t);
                                    this.start.stickiness = this.isCollapsed ? "toNone" : "toNext";
                                    this.end.stickiness = this.isCollapsed ? "toNone" : "toPrevious"
                                } * [Symbol.iterator]() { yield* new ku({ boundaries: this, ignoreElementEnd: true }) }
                                get isCollapsed() { return this.start.isEqual(this.end) }
                                get isFlat() { const t = this.start.getParentPath(); const e = this.end.getParentPath(); return vr(t, e) == "same" }
                                get root() { return this.start.root }
                                containsPosition(t) { return t.isAfter(this.start) && t.isBefore(this.end) }
                                containsRange(t, e = false) { if (t.isCollapsed) { e = false } const n = this.containsPosition(t.start) || e && this.start.isEqual(t.start); const i = this.containsPosition(t.end) || e && this.end.isEqual(t.end); return n && i }
                                containsItem(t) { const e = xu._createBefore(t); return this.containsPosition(e) || this.start.isEqual(e) }
                                is(t) { return t == "range" || t == "model:range" }
                                isEqual(t) { return this.start.isEqual(t.start) && this.end.isEqual(t.end) }
                                isIntersecting(t) { return this.start.isBefore(t.end) && this.end.isAfter(t.start) }
                                getDifference(t) { const e = []; if (this.isIntersecting(t)) { if (this.containsPosition(t.start)) { e.push(new Au(this.start, t.start)) } if (this.containsPosition(t.end)) { e.push(new Au(t.end, this.end)) } } else { e.push(new Au(this.start, this.end)) } return e }
                                getIntersection(t) { if (this.isIntersecting(t)) { let e = this.start; let n = this.end; if (this.containsPosition(t.start)) { e = t.start } if (this.containsPosition(t.end)) { n = t.end } return new Au(e, n) } return null }
                                getMinimalFlatRanges() {
                                    const t = [];
                                    const e = this.start.getCommonPath(this.end).length;
                                    const n = xu._createAt(this.start);
                                    let i = n.parent;
                                    while (n.path.length > e + 1) {
                                        const e = i.maxOffset - n.offset;
                                        if (e !== 0) { t.push(new Au(n, n.getShiftedBy(e))) }
                                        n.path = n.path.slice(0, -1);
                                        n.offset++;
                                        i = i.parent
                                    }
                                    while (n.path.length <= this.end.path.length) {
                                        const e = this.end.path[n.path.length - 1];
                                        const i = e - n.offset;
                                        if (i !== 0) { t.push(new Au(n, n.getShiftedBy(i))) }
                                        n.offset = e;
                                        n.path.push(0)
                                    }
                                    return t
                                }
                                getWalker(t = {}) { t.boundaries = this; return new ku(t) } * getItems(t = {}) {
                                    t.boundaries = this;
                                    t.ignoreElementEnd = true;
                                    const e = new ku(t);
                                    for (const t of e) { yield t.item }
                                } * getPositions(t = {}) {
                                    t.boundaries = this;
                                    const e = new ku(t);
                                    yield e.position;
                                    for (const t of e) { yield t.nextPosition }
                                }
                                getTransformedByOperation(t) {
                                    switch (t.type) {
                                        case "insert":
                                            return this._getTransformedByInsertOperation(t);
                                        case "move":
                                        case "remove":
                                        case "reinsert":
                                            return this._getTransformedByMoveOperation(t);
                                        case "split":
                                            return [this._getTransformedBySplitOperation(t)];
                                        case "merge":
                                            return [this._getTransformedByMergeOperation(t)]
                                    }
                                    return [new Au(this.start, this.end)]
                                }
                                getTransformedByOperations(t) {
                                    const e = [new Au(this.start, this.end)];
                                    for (const n of t) {
                                        for (let t = 0; t < e.length; t++) {
                                            const i = e[t].getTransformedByOperation(n);
                                            e.splice(t, 1, ...i);
                                            t += i.length - 1
                                        }
                                    }
                                    for (let t = 0; t < e.length; t++) { const n = e[t]; for (let i = t + 1; i < e.length; i++) { const t = e[i]; if (n.containsRange(t) || t.containsRange(n) || n.isEqual(t)) { e.splice(i, 1) } } }
                                    return e
                                }
                                getCommonAncestor() { return this.start.getCommonAncestor(this.end) }
                                toJSON() { return { start: this.start.toJSON(), end: this.end.toJSON() } }
                                clone() { return new this.constructor(this.start, this.end) }
                                _getTransformedByInsertOperation(t, e = false) { return this._getTransformedByInsertion(t.position, t.howMany, e) }
                                _getTransformedByMoveOperation(t, e = false) { const n = t.sourcePosition; const i = t.howMany; const o = t.targetPosition; return this._getTransformedByMove(n, o, i, e) }
                                _getTransformedBySplitOperation(t) { const e = this.start._getTransformedBySplitOperation(t); let n = this.end._getTransformedBySplitOperation(t); if (this.end.isEqual(t.insertionPosition)) { n = this.end.getShiftedBy(1) } if (e.root != n.root) { n = this.end.getShiftedBy(-1) } return new Au(e, n) }
                                _getTransformedByMergeOperation(t) {
                                    if (this.start.isEqual(t.targetPosition) && this.end.isEqual(t.deletionPosition)) { return new Au(this.start) }
                                    let e = this.start._getTransformedByMergeOperation(t);
                                    let n = this.end._getTransformedByMergeOperation(t);
                                    if (e.root != n.root) { n = this.end.getShiftedBy(-1) }
                                    if (e.isAfter(n)) {
                                        if (t.sourcePosition.isBefore(t.targetPosition)) {
                                            e = xu._createAt(n);
                                            e.offset = 0
                                        } else {
                                            if (!t.deletionPosition.isEqual(e)) { n = t.deletionPosition }
                                            e = t.targetPosition
                                        }
                                        return new Au(e, n)
                                    }
                                    return new Au(e, n)
                                }
                                _getTransformedByInsertion(t, e, n = false) {
                                    if (n && this.containsPosition(t)) { return [new Au(this.start, t), new Au(t.getShiftedBy(e), this.end._getTransformedByInsertion(t, e))] } else {
                                        const n = new Au(this.start, this.end);
                                        n.start = n.start._getTransformedByInsertion(t, e);
                                        n.end = n.end._getTransformedByInsertion(t, e);
                                        return [n]
                                    }
                                }
                                _getTransformedByMove(t, e, n, i = false) { if (this.isCollapsed) { const i = this.start._getTransformedByMove(t, e, n); return [new Au(i)] } const o = Au._createFromPositionAndShift(t, n); const s = e._getTransformedByDeletion(t, n); if (this.containsPosition(e) && !i) { if (o.containsPosition(this.start) || o.containsPosition(this.end)) { const i = this.start._getTransformedByMove(t, e, n); const o = this.end._getTransformedByMove(t, e, n); return [new Au(i, o)] } } let r; const a = this.getDifference(o); let c = null; const l = this.getIntersection(o); if (a.length == 1) { c = new Au(a[0].start._getTransformedByDeletion(t, n), a[0].end._getTransformedByDeletion(t, n)) } else if (a.length == 2) { c = new Au(this.start, this.end._getTransformedByDeletion(t, n)) } if (c) { r = c._getTransformedByInsertion(s, n, l !== null || i) } else { r = [] } if (l) { const t = new Au(l.start._getCombined(o.start, s), l.end._getCombined(o.start, s)); if (r.length == 2) { r.splice(1, 0, t) } else { r.push(t) } } return r }
                                _getTransformedByDeletion(t, e) { let n = this.start._getTransformedByDeletion(t, e); let i = this.end._getTransformedByDeletion(t, e); if (n == null && i == null) { return null } if (n == null) { n = t } if (i == null) { i = t } return new Au(n, i) }
                                static _createFromPositionAndShift(t, e) { const n = t; const i = t.getShiftedBy(e); return e > 0 ? new this(n, i) : new this(i, n) }
                                static _createIn(t) { return new this(xu._createAt(t, 0), xu._createAt(t, t.maxOffset)) }
                                static _createOn(t) { return this._createFromPositionAndShift(xu._createBefore(t), t.offsetSize) }
                                static _createFromRanges(t) {
                                    if (t.length === 0) { throw new Zs["b"]("range-create-from-ranges-empty-array: At least one range has to be passed.", null) } else if (t.length == 1) { return t[0].clone() }
                                    const e = t[0];
                                    t.sort((t, e) => t.start.isAfter(e.start) ? 1 : -1);
                                    const n = t.indexOf(e);
                                    const i = new this(e.start, e.end);
                                    if (n > 0) { for (let e = n - 1; true; e++) { if (t[e].end.isEqual(i.start)) { i.start = xu._createAt(t[e].start) } else { break } } }
                                    for (let e = n + 1; e < t.length; e++) { if (t[e].start.isEqual(i.end)) { i.end = xu._createAt(t[e].end) } else { break } }
                                    return i
                                }
                                static fromJSON(t, e) { return new this(xu.fromJSON(t.start, e), xu.fromJSON(t.end, e)) }
                            }
                            class Cu {
                                constructor() {
                                    this._modelToViewMapping = new WeakMap;
                                    this._viewToModelMapping = new WeakMap;
                                    this._viewToModelLengthCallbacks = new Map;
                                    this._markerNameToElements = new Map;
                                    this._elementToMarkerNames = new Map;
                                    this._unboundMarkerNames = new Set;
                                    this.on("modelToViewPosition", (t, e) => {
                                        if (e.viewPosition) { return }
                                        const n = this._modelToViewMapping.get(e.modelPosition.parent);
                                        e.viewPosition = this._findPositionIn(n, e.modelPosition.offset)
                                    }, { priority: "low" });
                                    this.on("viewToModelPosition", (t, e) => {
                                        if (e.modelPosition) { return }
                                        const n = this.findMappedViewAncestor(e.viewPosition);
                                        const i = this._viewToModelMapping.get(n);
                                        const o = this._toModelOffset(e.viewPosition.parent, e.viewPosition.offset, n);
                                        e.modelPosition = xu._createAt(i, o)
                                    }, { priority: "low" })
                                }
                                bindElements(t, e) {
                                    this._modelToViewMapping.set(t, e);
                                    this._viewToModelMapping.set(e, t)
                                }
                                unbindViewElement(t) {
                                    const e = this.toModelElement(t);
                                    this._viewToModelMapping.delete(t);
                                    if (this._elementToMarkerNames.has(t)) { for (const e of this._elementToMarkerNames.get(t)) { this._unboundMarkerNames.add(e) } }
                                    if (this._modelToViewMapping.get(e) == t) { this._modelToViewMapping.delete(e) }
                                }
                                unbindModelElement(t) {
                                    const e = this.toViewElement(t);
                                    this._modelToViewMapping.delete(t);
                                    if (this._viewToModelMapping.get(e) == t) { this._viewToModelMapping.delete(e) }
                                }
                                bindElementToMarker(t, e) {
                                    const n = this._markerNameToElements.get(e) || new Set;
                                    n.add(t);
                                    const i = this._elementToMarkerNames.get(t) || new Set;
                                    i.add(e);
                                    this._markerNameToElements.set(e, n);
                                    this._elementToMarkerNames.set(t, i)
                                }
                                unbindElementFromMarkerName(t, e) { const n = this._markerNameToElements.get(e); if (n) { n.delete(t); if (n.size == 0) { this._markerNameToElements.delete(e) } } const i = this._elementToMarkerNames.get(t); if (i) { i.delete(e); if (i.size == 0) { this._elementToMarkerNames.delete(t) } } }
                                flushUnboundMarkerNames() {
                                    const t = Array.from(this._unboundMarkerNames);
                                    this._unboundMarkerNames.clear();
                                    return t
                                }
                                clearBindings() {
                                    this._modelToViewMapping = new WeakMap;
                                    this._viewToModelMapping = new WeakMap;
                                    this._markerNameToElements = new Map;
                                    this._elementToMarkerNames = new Map;
                                    this._unboundMarkerNames = new Set
                                }
                                toModelElement(t) { return this._viewToModelMapping.get(t) }
                                toViewElement(t) { return this._modelToViewMapping.get(t) }
                                toModelRange(t) { return new Au(this.toModelPosition(t.start), this.toModelPosition(t.end)) }
                                toViewRange(t) { return new Da(this.toViewPosition(t.start), this.toViewPosition(t.end)) }
                                toModelPosition(t) {
                                    const e = { viewPosition: t, mapper: this };
                                    this.fire("viewToModelPosition", e);
                                    return e.modelPosition
                                }
                                toViewPosition(t, e = { isPhantom: false }) {
                                    const n = { modelPosition: t, mapper: this, isPhantom: e.isPhantom };
                                    this.fire("modelToViewPosition", n);
                                    return n.viewPosition
                                }
                                markerNameToElements(t) { const e = this._markerNameToElements.get(t); if (!e) { return null } const n = new Set; for (const t of e) { if (t.is("attributeElement")) { for (const e of t.getElementsWithSameId()) { n.add(e) } } else { n.add(t) } } return n }
                                registerViewToModelLength(t, e) { this._viewToModelLengthCallbacks.set(t, e) }
                                findMappedViewAncestor(t) { let e = t.parent; while (!this._viewToModelMapping.has(e)) { e = e.parent } return e }
                                _toModelOffset(t, e, n) { if (n != t) { const i = this._toModelOffset(t.parent, t.index, n); const o = this._toModelOffset(t, e, t); return i + o } if (t.is("text")) { return e } let i = 0; for (let n = 0; n < e; n++) { i += this.getModelLength(t.getChild(n)) } return i }
                                getModelLength(t) { if (this._viewToModelLengthCallbacks.get(t.name)) { const e = this._viewToModelLengthCallbacks.get(t.name); return e(t) } else if (this._viewToModelMapping.has(t)) { return 1 } else if (t.is("text")) { return t.data.length } else if (t.is("uiElement")) { return 0 } else { let e = 0; for (const n of t.getChildren()) { e += this.getModelLength(n) } return e } }
                                _findPositionIn(t, e) {
                                    let n;
                                    let i = 0;
                                    let o = 0;
                                    let s = 0;
                                    if (t.is("text")) { return new La(t, e) }
                                    while (o < e) {
                                        n = t.getChild(s);
                                        i = this.getModelLength(n);
                                        o += i;
                                        s++
                                    }
                                    if (o == e) { return this._moveViewPositionToTextNode(new La(t, s)) } else { return this._findPositionIn(n, e - (o - i)) }
                                }
                                _moveViewPositionToTextNode(t) { const e = t.nodeBefore; const n = t.nodeAfter; if (e instanceof Tr) { return new La(e, e.data.length) } else if (n instanceof Tr) { return new La(n, 0) } return t }
                            }
                            _r(Cu, lr);
                            class Tu {
                                constructor() {
                                    this._consumable = new Map;
                                    this._textProxyRegistry = new Map
                                }
                                add(t, e) {
                                    e = Pu(e);
                                    if (t instanceof mu) { t = this._getSymbolForTextProxy(t) }
                                    if (!this._consumable.has(t)) { this._consumable.set(t, new Map) }
                                    this._consumable.get(t).set(e, true)
                                }
                                consume(t, e) { e = Pu(e); if (t instanceof mu) { t = this._getSymbolForTextProxy(t) } if (this.test(t, e)) { this._consumable.get(t).set(e, false); return true } else { return false } }
                                test(t, e) { e = Pu(e); if (t instanceof mu) { t = this._getSymbolForTextProxy(t) } const n = this._consumable.get(t); if (n === undefined) { return null } const i = n.get(e); if (i === undefined) { return null } return i }
                                revert(t, e) { e = Pu(e); if (t instanceof mu) { t = this._getSymbolForTextProxy(t) } const n = this.test(t, e); if (n === false) { this._consumable.get(t).set(e, true); return true } else if (n === true) { return false } return null }
                                _getSymbolForTextProxy(t) { let e = null; const n = this._textProxyRegistry.get(t.startOffset); if (n) { const i = n.get(t.endOffset); if (i) { e = i.get(t.parent) } } if (!e) { e = this._addSymbolForTextProxy(t.startOffset, t.endOffset, t.parent) } return e }
                                _addSymbolForTextProxy(t, e, n) {
                                    const i = Symbol("textProxySymbol");
                                    let o, s;
                                    o = this._textProxyRegistry.get(t);
                                    if (!o) {
                                        o = new Map;
                                        this._textProxyRegistry.set(t, o)
                                    }
                                    s = o.get(e);
                                    if (!s) {
                                        s = new Map;
                                        o.set(e, s)
                                    }
                                    s.set(n, i);
                                    return i
                                }
                            }

                            function Pu(t) { const e = t.split(":"); return e.length > 1 ? e[0] + ":" + e[1] : e[0] }
                            class Su {
                                constructor(t) { this.conversionApi = ga({ dispatcher: this }, t) }
                                convertChanges(t, e, n) {
                                    for (const e of t.getMarkersToRemove()) { this.convertMarkerRemove(e.name, e.range, n) }
                                    for (const e of t.getChanges()) { if (e.type == "insert") { this.convertInsert(Au._createFromPositionAndShift(e.position, e.length), n) } else if (e.type == "remove") { this.convertRemove(e.position, e.length, e.name, n) } else { this.convertAttribute(e.range, e.attributeKey, e.attributeOldValue, e.attributeNewValue, n) } }
                                    for (const t of this.conversionApi.mapper.flushUnboundMarkerNames()) {
                                        const i = e.get(t).getRange();
                                        this.convertMarkerRemove(t, i, n);
                                        this.convertMarkerAdd(t, i, n)
                                    }
                                    for (const e of t.getMarkersToAdd()) { this.convertMarkerAdd(e.name, e.range, n) }
                                }
                                convertInsert(t, e) {
                                    this.conversionApi.writer = e;
                                    this.conversionApi.consumable = this._createInsertConsumable(t);
                                    for (const e of t) {
                                        const t = e.item;
                                        const n = Au._createFromPositionAndShift(e.previousPosition, e.length);
                                        const i = { item: t, range: n };
                                        this._testAndFire("insert", i);
                                        for (const e of t.getAttributeKeys()) {
                                            i.attributeKey = e;
                                            i.attributeOldValue = null;
                                            i.attributeNewValue = t.getAttribute(e);
                                            this._testAndFire(`attribute:${e}`, i)
                                        }
                                    }
                                    this._clearConversionApi()
                                }
                                convertRemove(t, e, n, i) {
                                    this.conversionApi.writer = i;
                                    this.fire("remove:" + n, { position: t, length: e }, this.conversionApi);
                                    this._clearConversionApi()
                                }
                                convertAttribute(t, e, n, i, o) {
                                    this.conversionApi.writer = o;
                                    this.conversionApi.consumable = this._createConsumableForRange(t, `attribute:${e}`);
                                    for (const o of t) {
                                        const t = o.item;
                                        const s = Au._createFromPositionAndShift(o.previousPosition, o.length);
                                        const r = { item: t, range: s, attributeKey: e, attributeOldValue: n, attributeNewValue: i };
                                        this._testAndFire(`attribute:${e}`, r)
                                    }
                                    this._clearConversionApi()
                                }
                                convertSelection(t, e, n) {
                                    const i = Array.from(e.getMarkersAtPosition(t.getFirstPosition()));
                                    this.conversionApi.writer = n;
                                    this.conversionApi.consumable = this._createSelectionConsumable(t, i);
                                    this.fire("selection", { selection: t }, this.conversionApi);
                                    if (!t.isCollapsed) { return }
                                    for (const e of i) { const n = e.getRange(); if (!Mu(t.getFirstPosition(), e, this.conversionApi.mapper)) { continue } const i = { item: t, markerName: e.name, markerRange: n }; if (this.conversionApi.consumable.test(t, "addMarker:" + e.name)) { this.fire("addMarker:" + e.name, i, this.conversionApi) } }
                                    for (const e of t.getAttributeKeys()) { const n = { item: t, range: t.getFirstRange(), attributeKey: e, attributeOldValue: null, attributeNewValue: t.getAttribute(e) }; if (this.conversionApi.consumable.test(t, "attribute:" + n.attributeKey)) { this.fire("attribute:" + n.attributeKey + ":$text", n, this.conversionApi) } }
                                    this._clearConversionApi()
                                }
                                convertMarkerAdd(t, e, n) {
                                    if (!e.root.document || e.root.rootName == "$graveyard") { return }
                                    this.conversionApi.writer = n;
                                    const i = "addMarker:" + t;
                                    const o = new Tu;
                                    o.add(e, i);
                                    this.conversionApi.consumable = o;
                                    this.fire(i, { markerName: t, markerRange: e }, this.conversionApi);
                                    if (!o.test(e, i)) { return }
                                    this.conversionApi.consumable = this._createConsumableForRange(e, i);
                                    for (const n of e.getItems()) {
                                        if (!this.conversionApi.consumable.test(n, i)) { continue }
                                        const o = { item: n, range: Au._createOn(n), markerName: t, markerRange: e };
                                        this.fire(i, o, this.conversionApi)
                                    }
                                    this._clearConversionApi()
                                }
                                convertMarkerRemove(t, e, n) {
                                    if (!e.root.document || e.root.rootName == "$graveyard") { return }
                                    this.conversionApi.writer = n;
                                    this.fire("removeMarker:" + t, { markerName: t, markerRange: e }, this.conversionApi);
                                    this._clearConversionApi()
                                }
                                _createInsertConsumable(t) {
                                    const e = new Tu;
                                    for (const n of t) {
                                        const t = n.item;
                                        e.add(t, "insert");
                                        for (const n of t.getAttributeKeys()) { e.add(t, "attribute:" + n) }
                                    }
                                    return e
                                }
                                _createConsumableForRange(t, e) { const n = new Tu; for (const i of t.getItems()) { n.add(i, e) } return n }
                                _createSelectionConsumable(t, e) {
                                    const n = new Tu;
                                    n.add(t, "selection");
                                    for (const i of e) { n.add(t, "addMarker:" + i.name) }
                                    for (const e of t.getAttributeKeys()) { n.add(t, "attribute:" + e) }
                                    return n
                                }
                                _testAndFire(t, e) {
                                    if (!this.conversionApi.consumable.test(e.item, t)) { return }
                                    const n = e.item.name || "$text";
                                    this.fire(t + ":" + n, e, this.conversionApi)
                                }
                                _clearConversionApi() {
                                    delete this.conversionApi.writer;
                                    delete this.conversionApi.consumable
                                }
                            }
                            _r(Su, lr);

                            function Mu(t, e, n) {
                                const i = e.getRange();
                                const o = Array.from(t.getAncestors());
                                o.shift();
                                o.reverse();
                                const s = o.some(t => { if (i.containsItem(t)) { const e = n.toViewElement(t); return !!e.getCustomProperty("addHighlight") } });
                                return !s
                            }
                            class Eu {
                                constructor(t, e, n) {
                                    this._lastRangeBackward = false;
                                    this._ranges = [];
                                    this._attrs = new Map;
                                    if (t) { this.setTo(t, e, n) }
                                }
                                get anchor() { if (this._ranges.length > 0) { const t = this._ranges[this._ranges.length - 1]; return this._lastRangeBackward ? t.end : t.start } return null }
                                get focus() { if (this._ranges.length > 0) { const t = this._ranges[this._ranges.length - 1]; return this._lastRangeBackward ? t.start : t.end } return null }
                                get isCollapsed() { const t = this._ranges.length; if (t === 1) { return this._ranges[0].isCollapsed } else { return false } }
                                get rangeCount() { return this._ranges.length }
                                get isBackward() { return !this.isCollapsed && this._lastRangeBackward }
                                isEqual(t) { if (this.rangeCount != t.rangeCount) { return false } else if (this.rangeCount === 0) { return true } if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) { return false } for (const e of this._ranges) { let n = false; for (const i of t._ranges) { if (e.isEqual(i)) { n = true; break } } if (!n) { return false } } return true } * getRanges() { for (const t of this._ranges) { yield new Au(t.start, t.end) } }
                                getFirstRange() { let t = null; for (const e of this._ranges) { if (!t || e.start.isBefore(t.start)) { t = e } } return t ? new Au(t.start, t.end) : null }
                                getLastRange() { let t = null; for (const e of this._ranges) { if (!t || e.end.isAfter(t.end)) { t = e } } return t ? new Au(t.start, t.end) : null }
                                getFirstPosition() { const t = this.getFirstRange(); return t ? t.start.clone() : null }
                                getLastPosition() { const t = this.getLastRange(); return t ? t.end.clone() : null }
                                setTo(t, e, n) {
                                    if (t === null) { this._setRanges([]) } else if (t instanceof Eu) { this._setRanges(t.getRanges(), t.isBackward) } else if (t && typeof t.getRanges == "function") { this._setRanges(t.getRanges(), t.isBackward) } else if (t instanceof Au) { this._setRanges([t], !!e && !!e.backward) } else if (t instanceof xu) { this._setRanges([new Au(t)]) } else if (t instanceof fu) {
                                        const i = !!n && !!n.backward;
                                        let o;
                                        if (e == "in") { o = Au._createIn(t) } else if (e == "on") { o = Au._createOn(t) } else if (e !== undefined) { o = new Au(xu._createAt(t, e)) } else { throw new Zs["b"]("model-selection-setTo-required-second-parameter: " + "selection.setTo requires the second parameter when the first parameter is a node.", [this, t]) }
                                        this._setRanges([o], i)
                                    } else if (Mr(t)) { this._setRanges(t, e && !!e.backward) } else { throw new Zs["b"]("model-selection-setTo-not-selectable: Cannot set the selection to the given place.", [this, t]) }
                                }
                                _setRanges(t, e = false) {
                                    t = Array.from(t);
                                    const n = t.some(e => { if (!(e instanceof Au)) { throw new Zs["b"]("model-selection-set-ranges-not-range: " + "Selection range set to an object that is not an instance of model.Range.", [this, t]) } return this._ranges.every(t => !t.isEqual(e)) });
                                    if (t.length === this._ranges.length && !n) { return }
                                    this._removeAllRanges();
                                    for (const e of t) { this._pushRange(e) }
                                    this._lastRangeBackward = !!e;
                                    this.fire("change:range", { directChange: true })
                                }
                                setFocus(t, e) {
                                    if (this.anchor === null) { throw new Zs["b"]("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.", [this, t]) }
                                    const n = xu._createAt(t, e);
                                    if (n.compareWith(this.focus) == "same") { return }
                                    const i = this.anchor;
                                    if (this._ranges.length) { this._popRange() }
                                    if (n.compareWith(i) == "before") {
                                        this._pushRange(new Au(n, i));
                                        this._lastRangeBackward = true
                                    } else {
                                        this._pushRange(new Au(i, n));
                                        this._lastRangeBackward = false
                                    }
                                    this.fire("change:range", { directChange: true })
                                }
                                getAttribute(t) { return this._attrs.get(t) }
                                getAttributes() { return this._attrs.entries() }
                                getAttributeKeys() { return this._attrs.keys() }
                                hasAttribute(t) { return this._attrs.has(t) }
                                removeAttribute(t) {
                                    if (this.hasAttribute(t)) {
                                        this._attrs.delete(t);
                                        this.fire("change:attribute", { attributeKeys: [t], directChange: true })
                                    }
                                }
                                setAttribute(t, e) {
                                    if (this.getAttribute(t) !== e) {
                                        this._attrs.set(t, e);
                                        this.fire("change:attribute", { attributeKeys: [t], directChange: true })
                                    }
                                }
                                getSelectedElement() { if (this.rangeCount !== 1) { return null } const t = this.getFirstRange(); const e = t.start.nodeAfter; const n = t.end.nodeBefore; return e instanceof bu && e == n ? e : null }
                                is(t) { return t == "selection" || t == "model:selection" } * getSelectedBlocks() { const t = new WeakSet; for (const e of this.getRanges()) { const n = Ou(e.start, t); if (n && Ru(n, e)) { yield n } for (const n of e.getWalker()) { const i = n.item; if (n.type == "elementEnd" && Nu(i, t, e)) { yield i } } const i = Ou(e.end, t); if (i && !e.end.isTouching(xu._createAt(i, 0)) && Ru(i, e)) { yield i } } }
                                containsEntireContent(t = this.anchor.root) { const e = xu._createAt(t, 0); const n = xu._createAt(t, "end"); return e.isTouching(this.getFirstPosition()) && n.isTouching(this.getLastPosition()) }
                                _pushRange(t) {
                                    this._checkRange(t);
                                    this._ranges.push(new Au(t.start, t.end))
                                }
                                _checkRange(t) { for (let e = 0; e < this._ranges.length; e++) { if (t.isIntersecting(this._ranges[e])) { throw new Zs["b"]("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.", [this, t], { addedRange: t, intersectingRange: this._ranges[e] }) } } }
                                _removeAllRanges() { while (this._ranges.length > 0) { this._popRange() } }
                                _popRange() { this._ranges.pop() }
                            }
                            _r(Eu, lr);

                            function Iu(t, e) {
                                if (e.has(t)) { return false }
                                e.add(t);
                                return t.document.model.schema.isBlock(t) && t.parent
                            }

                            function Nu(t, e, n) { return Iu(t, e) && Ru(t, n) }

                            function Ou(t, e) {
                                const n = t.parent.document.model.schema;
                                const i = t.parent.getAncestors({ parentFirst: true, includeSelf: true });
                                let o = false;
                                const s = i.find(t => {
                                    if (o) { return false }
                                    o = n.isLimit(t);
                                    return !o && Iu(t, e)
                                });
                                i.forEach(t => e.add(t));
                                return s
                            }

                            function Ru(t, e) { const n = Lu(t); if (!n) { return true } const i = e.containsRange(Au._createOn(n), true); return !i }

                            function Lu(t) {
                                const e = t.document.model.schema;
                                let n = t.parent;
                                while (n) {
                                    if (e.isBlock(n)) { return n }
                                    n = n.parent
                                }
                            }
                            class Du extends Au {
                                constructor(t, e) {
                                    super(t, e);
                                    zu.call(this)
                                }
                                detach() { this.stopListening() }
                                is(t) { return t == "liveRange" || t == "model:liveRange" || super.is(t) }
                                toRange() { return new Au(this.start, this.end) }
                                static fromRange(t) { return new Du(t.start, t.end) }
                            }

                            function zu() {
                                this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
                                    const n = e[0];
                                    if (!n.isDocumentOperation) { return }
                                    Vu.call(this, n)
                                }, { priority: "low" })
                            }

                            function Vu(t) {
                                const e = this.getTransformedByOperation(t);
                                const n = Au._createFromRanges(e);
                                const i = !n.isEqual(this);
                                const o = ju(this, t);
                                let s = null;
                                if (i) {
                                    if (n.root.rootName == "$graveyard") { if (t.type == "remove") { s = t.sourcePosition } else { s = t.deletionPosition } }
                                    const e = this.toRange();
                                    this.start = n.start;
                                    this.end = n.end;
                                    this.fire("change:range", e, { deletionPosition: s })
                                } else if (o) { this.fire("change:content", this.toRange(), { deletionPosition: s }) }
                            }

                            function ju(t, e) {
                                switch (e.type) {
                                    case "insert":
                                        return t.containsPosition(e.position);
                                    case "move":
                                    case "remove":
                                    case "reinsert":
                                    case "merge":
                                        return t.containsPosition(e.sourcePosition) || t.start.isEqual(e.sourcePosition) || t.containsPosition(e.targetPosition);
                                    case "split":
                                        return t.containsPosition(e.splitPosition) || t.containsPosition(e.insertionPosition)
                                }
                                return false
                            }
                            _r(Du, lr);
                            const Bu = "selection:";
                            class Fu {
                                constructor(t) {
                                    this._selection = new Hu(t);
                                    this._selection.delegate("change:range").to(this);
                                    this._selection.delegate("change:attribute").to(this)
                                }
                                get isCollapsed() { return this._selection.isCollapsed }
                                get anchor() { return this._selection.anchor }
                                get focus() { return this._selection.focus }
                                get rangeCount() { return this._selection.rangeCount }
                                get hasOwnRange() { return this._selection.hasOwnRange }
                                get isBackward() { return this._selection.isBackward }
                                get isGravityOverridden() { return this._selection.isGravityOverridden }
                                get markers() { return this._selection.markers }
                                get _ranges() { return this._selection._ranges }
                                getRanges() { return this._selection.getRanges() }
                                getFirstPosition() { return this._selection.getFirstPosition() }
                                getLastPosition() { return this._selection.getLastPosition() }
                                getFirstRange() { return this._selection.getFirstRange() }
                                getLastRange() { return this._selection.getLastRange() }
                                getSelectedBlocks() { return this._selection.getSelectedBlocks() }
                                getSelectedElement() { return this._selection.getSelectedElement() }
                                containsEntireContent(t) { return this._selection.containsEntireContent(t) }
                                destroy() { this._selection.destroy() }
                                getAttributeKeys() { return this._selection.getAttributeKeys() }
                                getAttributes() { return this._selection.getAttributes() }
                                getAttribute(t) { return this._selection.getAttribute(t) }
                                hasAttribute(t) { return this._selection.hasAttribute(t) }
                                refresh() {
                                    this._selection._updateMarkers();
                                    this._selection._updateAttributes(false)
                                }
                                is(t) { return t == "selection" || t == "model:selection" || t == "documentSelection" || t == "model:documentSelection" }
                                _setFocus(t, e) { this._selection.setFocus(t, e) }
                                _setTo(t, e, n) { this._selection.setTo(t, e, n) }
                                _setAttribute(t, e) { this._selection.setAttribute(t, e) }
                                _removeAttribute(t) { this._selection.removeAttribute(t) }
                                _getStoredAttributes() { return this._selection._getStoredAttributes() }
                                _overrideGravity() { return this._selection.overrideGravity() }
                                _restoreGravity(t) { this._selection.restoreGravity(t) }
                                static _getStoreAttributeKey(t) { return Bu + t }
                                static _isStoreAttributeKey(t) { return t.startsWith(Bu) }
                            }
                            _r(Fu, lr);
                            class Hu extends Eu {
                                constructor(t) {
                                    super();
                                    this.markers = new Fa({ idProperty: "name" });
                                    this._model = t.model;
                                    this._document = t;
                                    this._attributePriority = new Map;
                                    this._fixGraveyardRangesData = [];
                                    this._hasChangedRange = false;
                                    this._overriddenGravityRegister = new Set;
                                    this.listenTo(this._model, "applyOperation", (t, e) => {
                                        const n = e[0];
                                        if (!n.isDocumentOperation || n.type == "marker" || n.type == "rename" || n.type == "noop") { return }
                                        while (this._fixGraveyardRangesData.length) {
                                            const { liveRange: t, sourcePosition: e } = this._fixGraveyardRangesData.shift();
                                            this._fixGraveyardSelection(t, e)
                                        }
                                        if (this._hasChangedRange) {
                                            this._hasChangedRange = false;
                                            this.fire("change:range", { directChange: false })
                                        }
                                    }, { priority: "lowest" });
                                    this.on("change:range", () => { for (const t of this.getRanges()) { if (!this._document._validateSelectionRange(t)) { throw new Zs["b"]("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.", this, { range: t }) } } });
                                    this.listenTo(this._model.markers, "update", () => this._updateMarkers());
                                    this.listenTo(this._document, "change", (t, e) => { qu(this._model, e) })
                                }
                                get isCollapsed() { const t = this._ranges.length; return t === 0 ? this._document._getDefaultRange().isCollapsed : super.isCollapsed }
                                get anchor() { return super.anchor || this._document._getDefaultRange().start }
                                get focus() { return super.focus || this._document._getDefaultRange().end }
                                get rangeCount() { return this._ranges.length ? this._ranges.length : 1 }
                                get hasOwnRange() { return this._ranges.length > 0 }
                                get isGravityOverridden() { return !!this._overriddenGravityRegister.size }
                                destroy() {
                                    for (let t = 0; t < this._ranges.length; t++) { this._ranges[t].detach() }
                                    this.stopListening()
                                } * getRanges() { if (this._ranges.length) { yield* super.getRanges() } else { yield this._document._getDefaultRange() } }
                                getFirstRange() { return super.getFirstRange() || this._document._getDefaultRange() }
                                getLastRange() { return super.getLastRange() || this._document._getDefaultRange() }
                                setTo(t, e, n) {
                                    super.setTo(t, e, n);
                                    this._updateAttributes(true)
                                }
                                setFocus(t, e) {
                                    super.setFocus(t, e);
                                    this._updateAttributes(true)
                                }
                                setAttribute(t, e) {
                                    if (this._setAttribute(t, e)) {
                                        const e = [t];
                                        this.fire("change:attribute", { attributeKeys: e, directChange: true })
                                    }
                                }
                                removeAttribute(t) {
                                    if (this._removeAttribute(t)) {
                                        const e = [t];
                                        this.fire("change:attribute", { attributeKeys: e, directChange: true })
                                    }
                                }
                                overrideGravity() {
                                    const t = nr();
                                    this._overriddenGravityRegister.add(t);
                                    if (this._overriddenGravityRegister.size === 1) { this._updateAttributes(true) }
                                    return t
                                }
                                restoreGravity(t) {
                                    if (!this._overriddenGravityRegister.has(t)) { throw new Zs["b"]("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.", this, { uid: t }) }
                                    this._overriddenGravityRegister.delete(t);
                                    if (!this.isGravityOverridden) { this._updateAttributes(true) }
                                }
                                _popRange() { this._ranges.pop().detach() }
                                _pushRange(t) { const e = this._prepareRange(t); if (e) { this._ranges.push(e) } }
                                _prepareRange(t) {
                                    this._checkRange(t);
                                    if (t.root == this._document.graveyard) { return }
                                    const e = Du.fromRange(t);
                                    e.on("change:range", (t, n, i) => { this._hasChangedRange = true; if (e.root == this._document.graveyard) { this._fixGraveyardRangesData.push({ liveRange: e, sourcePosition: i.deletionPosition }) } });
                                    return e
                                }
                                _updateMarkers() { const t = []; for (const e of this._model.markers) { const n = e.getRange(); for (const i of this.getRanges()) { if (n.containsRange(i, !i.isCollapsed)) { t.push(e) } } } for (const e of t) { if (!this.markers.has(e)) { this.markers.add(e) } } for (const e of Array.from(this.markers)) { if (!t.includes(e)) { this.markers.remove(e) } } }
                                _updateAttributes(t) {
                                    const e = hu(this._getSurroundingAttributes());
                                    const n = hu(this.getAttributes());
                                    if (t) {
                                        this._attributePriority = new Map;
                                        this._attrs = new Map
                                    } else {
                                        for (const [t, e] of this._attributePriority) {
                                            if (e == "low") {
                                                this._attrs.delete(t);
                                                this._attributePriority.delete(t)
                                            }
                                        }
                                    }
                                    this._setAttributesTo(e);
                                    const i = [];
                                    for (const [t, e] of this.getAttributes()) { if (!n.has(t) || n.get(t) !== e) { i.push(t) } }
                                    for (const [t] of n) { if (!this.hasAttribute(t)) { i.push(t) } }
                                    if (i.length > 0) { this.fire("change:attribute", { attributeKeys: i, directChange: false }) }
                                }
                                _setAttribute(t, e, n = true) {
                                    const i = n ? "normal" : "low";
                                    if (i == "low" && this._attributePriority.get(t) == "normal") { return false }
                                    const o = super.getAttribute(t);
                                    if (o === e) { return false }
                                    this._attrs.set(t, e);
                                    this._attributePriority.set(t, i);
                                    return true
                                }
                                _removeAttribute(t, e = true) {
                                    const n = e ? "normal" : "low";
                                    if (n == "low" && this._attributePriority.get(t) == "normal") { return false }
                                    this._attributePriority.set(t, n);
                                    if (!super.hasAttribute(t)) { return false }
                                    this._attrs.delete(t);
                                    return true
                                }
                                _setAttributesTo(t) {
                                    const e = new Set;
                                    for (const [e, n] of this.getAttributes()) {
                                        if (t.get(e) === n) { continue }
                                        this._removeAttribute(e, false)
                                    }
                                    for (const [n, i] of t) { const t = this._setAttribute(n, i, false); if (t) { e.add(n) } }
                                    return e
                                } * _getStoredAttributes() {
                                    const t = this.getFirstPosition().parent;
                                    if (this.isCollapsed && t.isEmpty) {
                                        for (const e of t.getAttributeKeys()) {
                                            if (e.startsWith(Bu)) {
                                                const n = e.substr(Bu.length);
                                                yield [n, t.getAttribute(e)]
                                            }
                                        }
                                    }
                                }
                                _getSurroundingAttributes() {
                                    const t = this.getFirstPosition();
                                    const e = this._model.schema;
                                    let n = null;
                                    if (!this.isCollapsed) { const t = this.getFirstRange(); for (const i of t) { if (i.item.is("element") && e.isObject(i.item)) { break } if (i.type == "text") { n = i.item.getAttributes(); break } } } else {
                                        const e = t.textNode ? t.textNode : t.nodeBefore;
                                        const i = t.textNode ? t.textNode : t.nodeAfter;
                                        if (!this.isGravityOverridden) { n = Uu(e) }
                                        if (!n) { n = Uu(i) }
                                        if (!this.isGravityOverridden && !n) {
                                            let t = e;
                                            while (t && !n) {
                                                t = t.previousSibling;
                                                n = Uu(t)
                                            }
                                        }
                                        if (!n) {
                                            let t = i;
                                            while (t && !n) {
                                                t = t.nextSibling;
                                                n = Uu(t)
                                            }
                                        }
                                        if (!n) { n = this._getStoredAttributes() }
                                    }
                                    return n
                                }
                                _fixGraveyardSelection(t, e) {
                                    const n = e.clone();
                                    const i = this._model.schema.getNearestSelectionRange(n);
                                    const o = this._ranges.indexOf(t);
                                    this._ranges.splice(o, 1);
                                    t.detach();
                                    if (i) {
                                        const t = this._prepareRange(i);
                                        this._ranges.splice(o, 0, t)
                                    }
                                }
                            }

                            function Uu(t) { if (t instanceof mu || t instanceof gu) { return t.getAttributes() } return null }

                            function qu(t, e) { const n = t.document.differ; for (const i of n.getChanges()) { if (i.type != "insert") { continue } const n = i.position.parent; const o = i.length === n.maxOffset; if (o) { t.enqueueChange(e, t => { const e = Array.from(n.getAttributeKeys()).filter(t => t.startsWith(Bu)); for (const i of e) { t.removeAttribute(i, n) } }) } } }
                            class Wu {
                                constructor(t) { this._dispatchers = t }
                                add(t) { for (const e of this._dispatchers) { t(e) } return this }
                            }
                            var $u = 1,
                                Yu = 4;

                            function Gu(t) { return Hs(t, $u | Yu) }
                            var Qu = Gu;
                            class Ku extends Wu {
                                elementToElement(t) { return this.add(uh(t)) }
                                attributeToElement(t) { return this.add(hh(t)) }
                                attributeToAttribute(t) { return this.add(fh(t)) }
                                markerToElement(t) { return this.add(gh(t)) }
                                markerToHighlight(t) { return this.add(mh(t)) }
                            }

                            function Ju() {
                                return (t, e, n) => {
                                    if (!n.consumable.consume(e.item, "insert")) { return }
                                    const i = n.writer;
                                    const o = n.mapper.toViewPosition(e.range.start);
                                    const s = i.createText(e.item.data);
                                    i.insert(o, s)
                                }
                            }

                            function Zu() { return (t, e, n) => { const i = n.mapper.toViewPosition(e.position); const o = e.position.getShiftedBy(e.length); const s = n.mapper.toViewPosition(o, { isPhantom: true }); const r = n.writer.createRange(i, s); const a = n.writer.remove(r.getTrimmed()); for (const t of n.writer.createRangeIn(a).getItems()) { n.mapper.unbindViewElement(t) } } }

                            function Xu(t) {
                                const e = new qa("span", t.attributes);
                                if (t.classes) { e._addClass(t.classes) }
                                if (t.priority) { e._priority = t.priority }
                                e._id = t.id;
                                return e
                            }

                            function th() {
                                return (t, e, n) => {
                                    const i = e.selection;
                                    if (i.isCollapsed) { return }
                                    if (!n.consumable.consume(i, "selection")) { return }
                                    const o = [];
                                    for (const t of i.getRanges()) {
                                        const e = n.mapper.toViewRange(t);
                                        o.push(e)
                                    }
                                    n.writer.setSelection(o, { backward: i.isBackward })
                                }
                            }

                            function eh() {
                                return (t, e, n) => {
                                    const i = e.selection;
                                    if (!i.isCollapsed) { return }
                                    if (!n.consumable.consume(i, "selection")) { return }
                                    const o = n.writer;
                                    const s = i.getFirstPosition();
                                    const r = n.mapper.toViewPosition(s);
                                    const a = o.breakAttributes(r);
                                    o.setSelection(a)
                                }
                            }

                            function nh() {
                                return (t, e, n) => {
                                    const i = n.writer;
                                    const o = i.document.selection;
                                    for (const t of o.getRanges()) { if (t.isCollapsed) { if (t.end.parent.document) { n.writer.mergeAttributes(t.start) } } }
                                    i.setSelection(null)
                                }
                            }

                            function ih(t) { return (e, n, i) => { const o = t(n.attributeOldValue, i.writer); const s = t(n.attributeNewValue, i.writer); if (!o && !s) { return } if (!i.consumable.consume(n.item, e.name)) { return } const r = i.writer; const a = r.document.selection; if (n.item instanceof Eu || n.item instanceof Fu) { r.wrap(a.getFirstRange(), s) } else { let t = i.mapper.toViewRange(n.range); if (n.attributeOldValue !== null && o) { t = r.unwrap(t, o) } if (n.attributeNewValue !== null && s) { r.wrap(t, s) } } } }

                            function oh(t) {
                                return (e, n, i) => {
                                    const o = t(n.item, i.writer);
                                    if (!o) { return }
                                    if (!i.consumable.consume(n.item, "insert")) { return }
                                    const s = i.mapper.toViewPosition(n.range.start);
                                    i.mapper.bindElements(n.item, o);
                                    i.writer.insert(s, o)
                                }
                            }

                            function sh(t) {
                                return (e, n, i) => {
                                    n.isOpening = true;
                                    const o = t(n, i.writer);
                                    n.isOpening = false;
                                    const s = t(n, i.writer);
                                    if (!o || !s) { return }
                                    const r = n.markerRange;
                                    if (r.isCollapsed && !i.consumable.consume(r, e.name)) { return }
                                    for (const t of r) { if (!i.consumable.consume(t.item, e.name)) { return } }
                                    const a = i.mapper;
                                    const c = i.writer;
                                    c.insert(a.toViewPosition(r.start), o);
                                    i.mapper.bindElementToMarker(o, n.markerName);
                                    if (!r.isCollapsed) {
                                        c.insert(a.toViewPosition(r.end), s);
                                        i.mapper.bindElementToMarker(s, n.markerName)
                                    }
                                    e.stop()
                                }
                            }

                            function rh() {
                                return (t, e, n) => {
                                    const i = n.mapper.markerNameToElements(e.markerName);
                                    if (!i) { return }
                                    for (const t of i) {
                                        n.mapper.unbindElementFromMarkerName(t, e.markerName);
                                        n.writer.clear(n.writer.createRangeOn(t), t)
                                    }
                                    n.writer.clearClonedElementsGroup(e.markerName);
                                    t.stop()
                                }
                            }

                            function ah(t) { return (e, n, i) => { const o = t(n.attributeOldValue, n); const s = t(n.attributeNewValue, n); if (!o && !s) { return } if (!i.consumable.consume(n.item, e.name)) { return } const r = i.mapper.toViewElement(n.item); const a = i.writer; if (!r) { throw new Zs["b"]("conversion-attribute-to-attribute-on-text: " + "Trying to convert text node's attribute with attribute-to-attribute converter.", [n, i]) } if (n.attributeOldValue !== null && o) { if (o.key == "class") { const t = Array.isArray(o.value) ? o.value : [o.value]; for (const e of t) { a.removeClass(e, r) } } else if (o.key == "style") { const t = Object.keys(o.value); for (const e of t) { a.removeStyle(e, r) } } else { a.removeAttribute(o.key, r) } } if (n.attributeNewValue !== null && s) { if (s.key == "class") { const t = Array.isArray(s.value) ? s.value : [s.value]; for (const e of t) { a.addClass(e, r) } } else if (s.key == "style") { const t = Object.keys(s.value); for (const e of t) { a.setStyle(e, s.value[e], r) } } else { a.setAttribute(s.key, s.value, r) } } } }

                            function ch(t) { return (e, n, i) => { if (!n.item) { return } if (!(n.item instanceof Eu || n.item instanceof Fu) && !n.item.is("textProxy")) { return } const o = _h(t, n, i); if (!o) { return } if (!i.consumable.consume(n.item, e.name)) { return } const s = Xu(o); const r = i.writer; const a = r.document.selection; if (n.item instanceof Eu || n.item instanceof Fu) { r.wrap(a.getFirstRange(), s, a) } else { const t = i.mapper.toViewRange(n.range); const e = r.wrap(t, s); for (const t of e.getItems()) { if (t.is("attributeElement") && t.isSimilar(s)) { i.mapper.bindElementToMarker(t, n.markerName); break } } } } }

                            function lh(t) {
                                return (e, n, i) => {
                                    if (!n.item) { return }
                                    if (!(n.item instanceof bu)) { return }
                                    const o = _h(t, n, i);
                                    if (!o) { return }
                                    if (!i.consumable.test(n.item, e.name)) { return }
                                    const s = i.mapper.toViewElement(n.item);
                                    if (s && s.getCustomProperty("addHighlight")) {
                                        i.consumable.consume(n.item, e.name);
                                        for (const t of Au._createIn(n.item)) { i.consumable.consume(t.item, e.name) }
                                        s.getCustomProperty("addHighlight")(s, o, i.writer);
                                        i.mapper.bindElementToMarker(s, n.markerName)
                                    }
                                }
                            }

                            function dh(t) {
                                return (e, n, i) => {
                                    if (n.markerRange.isCollapsed) { return }
                                    const o = _h(t, n, i);
                                    if (!o) { return }
                                    const s = Xu(o);
                                    const r = i.mapper.markerNameToElements(n.markerName);
                                    if (!r) { return }
                                    for (const t of r) { i.mapper.unbindElementFromMarkerName(t, n.markerName); if (t.is("attributeElement")) { i.writer.unwrap(i.writer.createRangeOn(t), s) } else { t.getCustomProperty("removeHighlight")(t, o.id, i.writer) } }
                                    i.writer.clearClonedElementsGroup(n.markerName);
                                    e.stop()
                                }
                            }

                            function uh(t) {
                                t = Qu(t);
                                t.view = ph(t.view, "container");
                                return e => { e.on("insert:" + t.model, oh(t.view), { priority: t.converterPriority || "normal" }) }
                            }

                            function hh(t) { t = Qu(t); const e = t.model.key ? t.model.key : t.model; let n = "attribute:" + e; if (t.model.name) { n += ":" + t.model.name } if (t.model.values) { for (const e of t.model.values) { t.view[e] = ph(t.view[e], "attribute") } } else { t.view = ph(t.view, "attribute") } const i = wh(t); return e => { e.on(n, ih(i), { priority: t.converterPriority || "normal" }) } }

                            function fh(t) { t = Qu(t); const e = t.model.key ? t.model.key : t.model; let n = "attribute:" + e; if (t.model.name) { n += ":" + t.model.name } if (t.model.values) { for (const e of t.model.values) { t.view[e] = kh(t.view[e]) } } else { t.view = kh(t.view) } const i = wh(t); return e => { e.on(n, ah(i), { priority: t.converterPriority || "normal" }) } }

                            function gh(t) {
                                t = Qu(t);
                                t.view = ph(t.view, "ui");
                                return e => {
                                    e.on("addMarker:" + t.model, sh(t.view), { priority: t.converterPriority || "normal" });
                                    e.on("removeMarker:" + t.model, rh(t.view), { priority: t.converterPriority || "normal" })
                                }
                            }

                            function mh(t) {
                                return e => {
                                    e.on("addMarker:" + t.model, ch(t.view), { priority: t.converterPriority || "normal" });
                                    e.on("addMarker:" + t.model, lh(t.view), { priority: t.converterPriority || "normal" });
                                    e.on("removeMarker:" + t.model, dh(t.view), { priority: t.converterPriority || "normal" })
                                }
                            }

                            function ph(t, e) { if (typeof t == "function") { return t } return (n, i) => bh(t, i, e) }

                            function bh(t, e, n) {
                                if (typeof t == "string") { t = { name: t } }
                                let i;
                                const o = Object.assign({}, t.attributes);
                                if (n == "container") { i = e.createContainerElement(t.name, o) } else if (n == "attribute") {
                                    const n = { priority: t.priority || qa.DEFAULT_PRIORITY };
                                    i = e.createAttributeElement(t.name, o, n)
                                } else { i = e.createUIElement(t.name, o) }
                                if (t.styles) { const n = Object.keys(t.styles); for (const o of n) { e.setStyle(o, t.styles[o], i) } }
                                if (t.classes) { const n = t.classes; if (typeof n == "string") { e.addClass(n, i) } else { for (const t of n) { e.addClass(t, i) } } }
                                return i
                            }

                            function wh(t) { if (t.model.values) { return (e, n) => { const i = t.view[e]; if (i) { return i(e, n) } return null } } else { return t.view } }

                            function kh(t) { if (typeof t == "string") { return e => ({ key: t, value: e }) } else if (typeof t == "object") { if (t.value) { return () => t } else { return e => ({ key: t.key, value: e }) } } else { return t } }

                            function _h(t, e, n) { const i = typeof t == "function" ? t(e, n) : t; if (!i) { return null } if (!i.priority) { i.priority = 10 } if (!i.id) { i.id = e.markerName } return i }
                            class vh extends Wu {
                                elementToElement(t) { return this.add(Ch(t)) }
                                elementToAttribute(t) { return this.add(Th(t)) }
                                attributeToAttribute(t) { return this.add(Ph(t)) }
                                elementToMarker(t) { return this.add(Sh(t)) }
                            }

                            function yh() {
                                return (t, e, n) => {
                                    if (!e.modelRange && n.consumable.consume(e.viewItem, { name: true })) {
                                        const { modelRange: t, modelCursor: i } = n.convertChildren(e.viewItem, e.modelCursor);
                                        e.modelRange = t;
                                        e.modelCursor = i
                                    }
                                }
                            }

                            function xh() {
                                return (t, e, n) => {
                                    if (n.schema.checkChild(e.modelCursor, "$text")) {
                                        if (n.consumable.consume(e.viewItem)) {
                                            const t = n.writer.createText(e.viewItem.data);
                                            n.writer.insert(t, e.modelCursor);
                                            e.modelRange = Au._createFromPositionAndShift(e.modelCursor, t.offsetSize);
                                            e.modelCursor = e.modelRange.end
                                        }
                                    }
                                }
                            }

                            function Ah(t, e) {
                                return (n, i) => {
                                    const o = i.newSelection;
                                    const s = new Eu;
                                    const r = [];
                                    for (const t of o.getRanges()) { r.push(e.toModelRange(t)) }
                                    s.setTo(r, { backward: o.isBackward });
                                    if (!s.isEqual(t.document.selection)) { t.change(t => { t.setSelection(s) }) }
                                }
                            }

                            function Ch(t) { t = Qu(t); const e = Eh(t); const n = Mh(t.view); const i = n ? "element:" + n : "element"; return n => { n.on(i, e, { priority: t.converterPriority || "normal" }) } }

                            function Th(t) {
                                t = Qu(t);
                                Oh(t);
                                const e = Rh(t, false);
                                const n = Mh(t.view);
                                const i = n ? "element:" + n : "element";
                                return n => { n.on(i, e, { priority: t.converterPriority || "low" }) }
                            }

                            function Ph(t) {
                                t = Qu(t);
                                let e = null;
                                if (typeof t.view == "string" || t.view.key) { e = Nh(t) }
                                Oh(t, e);
                                const n = Rh(t, true);
                                return e => { e.on("element", n, { priority: t.converterPriority || "low" }) }
                            }

                            function Sh(t) {
                                t = Qu(t);
                                zh(t);
                                return Ch(t)
                            }

                            function Mh(t) { if (typeof t == "string") { return t } if (typeof t == "object" && typeof t.name == "string") { return t.name } return null }

                            function Eh(t) {
                                const e = t.view ? new Er(t.view) : null;
                                return (n, i, o) => {
                                    let s = {};
                                    if (e) {
                                        const t = e.match(i.viewItem);
                                        if (!t) { return }
                                        s = t.match
                                    }
                                    s.name = true;
                                    const r = Ih(t.model, i.viewItem, o.writer);
                                    if (!r) { return }
                                    if (!o.consumable.test(i.viewItem, s)) { return }
                                    const a = o.splitToAllowedParent(r, i.modelCursor);
                                    if (!a) { return }
                                    o.writer.insert(r, a.position);
                                    o.convertChildren(i.viewItem, o.writer.createPositionAt(r, 0));
                                    o.consumable.consume(i.viewItem, s);
                                    const c = o.getSplitParts(r);
                                    i.modelRange = new Au(o.writer.createPositionBefore(r), o.writer.createPositionAfter(c[c.length - 1]));
                                    if (a.cursorParent) { i.modelCursor = o.writer.createPositionAt(a.cursorParent, 0) } else { i.modelCursor = i.modelRange.end }
                                }
                            }

                            function Ih(t, e, n) { if (t instanceof Function) { return t(e, n) } else { return n.createElement(t) } }

                            function Nh(t) {
                                if (typeof t.view == "string") { t.view = { key: t.view } }
                                const e = t.view.key;
                                let n;
                                if (e == "class" || e == "style") {
                                    const i = e == "class" ? "classes" : "styles";
                                    n = {
                                        [i]: t.view.value
                                    }
                                } else {
                                    const i = typeof t.view.value == "undefined" ? /[\s\S]*/ : t.view.value;
                                    n = {
                                        attributes: {
                                            [e]: i
                                        }
                                    }
                                }
                                if (t.view.name) { n.name = t.view.name }
                                t.view = n;
                                return e
                            }

                            function Oh(t, e = null) {
                                const n = e === null ? true : t => t.getAttribute(e);
                                const i = typeof t.model != "object" ? t.model : t.model.key;
                                const o = typeof t.model != "object" || typeof t.model.value == "undefined" ? n : t.model.value;
                                t.model = { key: i, value: o }
                            }

                            function Rh(t, e) { const n = new Er(t.view); return (i, o, s) => { const r = n.match(o.viewItem); if (!r) { return } const a = t.model.key; const c = typeof t.model.value == "function" ? t.model.value(o.viewItem) : t.model.value; if (c === null) { return } if (Lh(t.view, o.viewItem)) { r.match.name = true } else { delete r.match.name } if (!s.consumable.test(o.viewItem, r.match)) { return } if (!o.modelRange) { o = Object.assign(o, s.convertChildren(o.viewItem, o.modelCursor)) } const l = Dh(o.modelRange, { key: a, value: c }, e, s); if (l) { s.consumable.consume(o.viewItem, r.match) } } }

                            function Lh(t, e) { const n = typeof t == "function" ? t(e) : t; if (typeof n == "object" && !Mh(n)) { return false } return !n.classes && !n.attributes && !n.styles }

                            function Dh(t, e, n, i) {
                                let o = false;
                                for (const s of Array.from(t.getItems({ shallow: n }))) {
                                    if (i.schema.checkAttribute(s, e.key)) {
                                        i.writer.setAttribute(e.key, e.value, s);
                                        o = true
                                    }
                                }
                                return o
                            }

                            function zh(t) {
                                const e = t.model;
                                t.model = (t, n) => { const i = typeof e == "string" ? e : e(t); return n.createElement("$marker", { "data-name": i }) }
                            }
                            class Vh {
                                constructor(t) {
                                    this.model = t;
                                    this.view = new uu;
                                    this.mapper = new Cu;
                                    this.downcastDispatcher = new Su({ mapper: this.mapper });
                                    const e = this.model.document;
                                    const n = e.selection;
                                    const i = this.model.markers;
                                    this.listenTo(this.model, "_beforeChanges", () => { this.view._disableRendering(true) }, { priority: "highest" });
                                    this.listenTo(this.model, "_afterChanges", () => { this.view._disableRendering(false) }, { priority: "lowest" });
                                    this.listenTo(e, "change", () => {
                                        this.view.change(t => {
                                            this.downcastDispatcher.convertChanges(e.differ, i, t);
                                            this.downcastDispatcher.convertSelection(n, i, t)
                                        })
                                    }, { priority: "low" });
                                    this.listenTo(this.view.document, "selectionChange", Ah(this.model, this.mapper));
                                    this.downcastDispatcher.on("insert:$text", Ju(), { priority: "lowest" });
                                    this.downcastDispatcher.on("remove", Zu(), { priority: "low" });
                                    this.downcastDispatcher.on("selection", nh(), { priority: "low" });
                                    this.downcastDispatcher.on("selection", th(), { priority: "low" });
                                    this.downcastDispatcher.on("selection", eh(), { priority: "low" });
                                    this.view.document.roots.bindTo(this.model.document.roots).using(t => {
                                        if (t.rootName == "$graveyard") { return null }
                                        const e = new Oa(t.name);
                                        e.rootName = t.rootName;
                                        e._document = this.view.document;
                                        this.mapper.bindElements(t, e);
                                        return e
                                    })
                                }
                                destroy() {
                                    this.view.destroy();
                                    this.stopListening()
                                }
                            }
                            _r(Vh, ka);
                            class jh {
                                constructor(t, e = []) {
                                    this._editor = t;
                                    this._availablePlugins = new Map;
                                    this._plugins = new Map;
                                    for (const t of e) { this._availablePlugins.set(t, t); if (t.pluginName) { this._availablePlugins.set(t.pluginName, t) } }
                                } * [Symbol.iterator]() { for (const t of this._plugins) { if (typeof t[0] == "function") { yield t } } }
                                get(t) { const e = this._plugins.get(t); if (!e) { const e = "plugincollection-plugin-not-loaded: The requested plugin is not loaded."; let n = t; if (typeof t == "function") { n = t.pluginName || t.name } throw new Zs["b"](e, this._editor, { plugin: n }) } return e }
                                has(t) { return this._plugins.has(t) }
                                init(t, e = []) {
                                    const n = this;
                                    const i = this._editor;
                                    const o = new Set;
                                    const s = [];
                                    const r = g(t);
                                    const a = g(e);
                                    const c = f(t);
                                    if (c) {
                                        const t = "plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";
                                        console.error(Object(Zs["a"])(t), { plugins: c });
                                        return Promise.reject(new Zs["b"](t, this._editor, { plugins: c }))
                                    }
                                    return Promise.all(r.map(l)).then(() => d(s, "init")).then(() => d(s, "afterInit")).then(() => s);

                                    function l(t) { if (a.includes(t)) { return } if (n._plugins.has(t) || o.has(t)) { return } return u(t).catch(e => { console.error(Object(Zs["a"])("plugincollection-load: It was not possible to load the plugin."), { plugin: t }); throw e }) }

                                    function d(t, e) { return t.reduce((t, n) => { if (!n[e]) { return t } return t.then(n[e].bind(n)) }, Promise.resolve()) }

                                    function u(t) {
                                        return new Promise(r => {
                                            o.add(t);
                                            if (t.requires) {
                                                t.requires.forEach(n => {
                                                    const o = h(n);
                                                    if (e.includes(o)) { throw new Zs["b"]("plugincollection-required: Cannot load a plugin because one of its dependencies is listed in" + "the `removePlugins` option.", i, { plugin: o, requiredBy: t }) }
                                                    l(o)
                                                })
                                            }
                                            const a = new t(i);
                                            n._add(t, a);
                                            s.push(a);
                                            r()
                                        })
                                    }

                                    function h(t) { if (typeof t == "function") { return t } return n._availablePlugins.get(t) }

                                    function f(t) { const e = []; for (const n of t) { if (!h(n)) { e.push(n) } } return e.length ? e : null }

                                    function g(t) { return t.map(t => h(t)).filter(t => !!t) }
                                }
                                destroy() { const t = Array.from(this).map(([, t]) => t).filter(t => typeof t.destroy == "function").map(t => t.destroy()); return Promise.all(t) }
                                _add(t, e) {
                                    this._plugins.set(t, e);
                                    const n = t.pluginName;
                                    if (!n) { return }
                                    if (this._plugins.has(n)) { throw new Zs["b"]("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.", null, { pluginName: n, plugin1: this._plugins.get(n).constructor, plugin2: t }) }
                                    this._plugins.set(n, e)
                                }
                            }
                            _r(jh, lr);
                            class Bh {
                                constructor() { this._commands = new Map }
                                add(t, e) { this._commands.set(t, e) }
                                get(t) { return this._commands.get(t) }
                                execute(t, ...e) {
                                    const n = this.get(t);
                                    if (!n) { throw new Zs["b"]("commandcollection-command-not-found: Command does not exist.", this, { commandName: t }) }
                                    n.execute(...e)
                                } * names() { yield* this._commands.keys() } * commands() { yield* this._commands.values() }[Symbol.iterator]() { return this._commands[Symbol.iterator]() }
                                destroy() { for (const t of this.commands()) { t.destroy() } }
                            }
                            if (!window.CKEDITOR_TRANSLATIONS) { window.CKEDITOR_TRANSLATIONS = {} }

                            function Fh(t, e) {
                                const n = window.CKEDITOR_TRANSLATIONS[t] || (window.CKEDITOR_TRANSLATIONS[t] = {});
                                Object.assign(n, e)
                            }

                            function Hh(t, e) { const n = Wh(); if (n === 1) { t = Object.keys(window.CKEDITOR_TRANSLATIONS)[0] } if (n === 0 || !qh(t, e)) { return e.replace(/ \[context: [^\]]+\]$/, "") } const i = window.CKEDITOR_TRANSLATIONS[t]; return i[e].replace(/ \[context: [^\]]+\]$/, "") }

                            function Uh() { window.CKEDITOR_TRANSLATIONS = {} }

                            function qh(t, e) { return t in window.CKEDITOR_TRANSLATIONS && e in window.CKEDITOR_TRANSLATIONS[t] }

                            function Wh() { return Object.keys(window.CKEDITOR_TRANSLATIONS).length }
                            const $h = ["ar", "fa", "he", "ku", "ug"];
                            class Yh {
                                constructor(t = {}) {
                                    this.uiLanguage = t.uiLanguage || "en";
                                    this.contentLanguage = t.contentLanguage || this.uiLanguage;
                                    this.uiLanguageDirection = Gh(this.uiLanguage);
                                    this.contentLanguageDirection = Gh(this.contentLanguage);
                                    this.t = (...t) => this._t(...t)
                                }
                                get language() { console.warn("locale-deprecated-language-property: " + "The Locale#language property has been deprecated and will be removed in the near future. " + "Please use #uiLanguage and #contentLanguage properties instead."); return this.uiLanguage }
                                _t(t, e) { let n = Hh(this.uiLanguage, t); if (e) { n = n.replace(/%(\d+)/g, (t, n) => n < e.length ? e[n] : t) } return n }
                            }

                            function Gh(t) { return $h.includes(t) ? "rtl" : "ltr" }
                            class Qh {
                                constructor() { this._consumables = new Map }
                                add(t, e) {
                                    let n;
                                    if (t.is("text") || t.is("documentFragment")) { this._consumables.set(t, true); return }
                                    if (!this._consumables.has(t)) {
                                        n = new Kh;
                                        this._consumables.set(t, n)
                                    } else { n = this._consumables.get(t) }
                                    n.add(e)
                                }
                                test(t, e) { const n = this._consumables.get(t); if (n === undefined) { return null } if (t.is("text") || t.is("documentFragment")) { return n } return n.test(e) }
                                consume(t, e) { if (this.test(t, e)) { if (t.is("text") || t.is("documentFragment")) { this._consumables.set(t, false) } else { this._consumables.get(t).consume(e) } return true } return false }
                                revert(t, e) { const n = this._consumables.get(t); if (n !== undefined) { if (t.is("text") || t.is("documentFragment")) { this._consumables.set(t, true) } else { n.revert(e) } } }
                                static consumablesFromElement(t) {
                                    const e = { name: true, attributes: [], classes: [], styles: [] };
                                    const n = t.getAttributeKeys();
                                    for (const t of n) {
                                        if (t == "style" || t == "class") { continue }
                                        e.attributes.push(t)
                                    }
                                    const i = t.getClassNames();
                                    for (const t of i) { e.classes.push(t) }
                                    const o = t.getStyleNames();
                                    for (const t of o) { e.styles.push(t) }
                                    return e
                                }
                                static createFrom(t, e) { if (!e) { e = new Qh } if (t.is("text")) { e.add(t); return e } if (t.is("element")) { e.add(t, Qh.consumablesFromElement(t)) } if (t.is("documentFragment")) { e.add(t) } for (const n of t.getChildren()) { e = Qh.createFrom(n, e) } return e }
                            }
                            class Kh {
                                constructor() {
                                    this._canConsumeName = null;
                                    this._consumables = { attributes: new Map, styles: new Map, classes: new Map }
                                }
                                add(t) { if (t.name) { this._canConsumeName = true } for (const e in this._consumables) { if (e in t) { this._add(e, t[e]) } } }
                                test(t) { if (t.name && !this._canConsumeName) { return this._canConsumeName } for (const e in this._consumables) { if (e in t) { const n = this._test(e, t[e]); if (n !== true) { return n } } } return true }
                                consume(t) { if (t.name) { this._canConsumeName = false } for (const e in this._consumables) { if (e in t) { this._consume(e, t[e]) } } }
                                revert(t) { if (t.name) { this._canConsumeName = true } for (const e in this._consumables) { if (e in t) { this._revert(e, t[e]) } } }
                                _add(t, e) {
                                    const n = Qe(e) ? e : [e];
                                    const i = this._consumables[t];
                                    for (const e of n) {
                                        if (t === "attributes" && (e === "class" || e === "style")) { throw new Zs["b"]("viewconsumable-invalid-attribute: Classes and styles should be handled separately.", this) }
                                        i.set(e, true)
                                    }
                                }
                                _test(t, e) { const n = Qe(e) ? e : [e]; const i = this._consumables[t]; for (const e of n) { if (t === "attributes" && (e === "class" || e === "style")) { const t = e == "class" ? "classes" : "styles"; const n = this._test(t, [...this._consumables[t].keys()]); if (n !== true) { return n } } else { const t = i.get(e); if (t === undefined) { return null } if (!t) { return false } } } return true }
                                _consume(t, e) {
                                    const n = Qe(e) ? e : [e];
                                    const i = this._consumables[t];
                                    for (const e of n) {
                                        if (t === "attributes" && (e === "class" || e === "style")) {
                                            const t = e == "class" ? "classes" : "styles";
                                            this._consume(t, [...this._consumables[t].keys()])
                                        } else { i.set(e, false) }
                                    }
                                }
                                _revert(t, e) {
                                    const n = Qe(e) ? e : [e];
                                    const i = this._consumables[t];
                                    for (const e of n) {
                                        if (t === "attributes" && (e === "class" || e === "style")) {
                                            const t = e == "class" ? "classes" : "styles";
                                            this._revert(t, [...this._consumables[t].keys()])
                                        } else { const t = i.get(e); if (t === false) { i.set(e, true) } }
                                    }
                                }
                            }
                            class Jh {
                                constructor() {
                                    this._sourceDefinitions = {};
                                    this._attributeProperties = {};
                                    this.decorate("checkChild");
                                    this.decorate("checkAttribute");
                                    this.on("checkAttribute", (t, e) => { e[0] = new Zh(e[0]) }, { priority: "highest" });
                                    this.on("checkChild", (t, e) => {
                                        e[0] = new Zh(e[0]);
                                        e[1] = this.getDefinition(e[1])
                                    }, { priority: "highest" })
                                }
                                register(t, e) {
                                    if (this._sourceDefinitions[t]) { throw new Zs["b"]("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.", this, { itemName: t }) }
                                    this._sourceDefinitions[t] = [Object.assign({}, e)];
                                    this._clearCache()
                                }
                                extend(t, e) {
                                    if (!this._sourceDefinitions[t]) { throw new Zs["b"]("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.", this, { itemName: t }) }
                                    this._sourceDefinitions[t].push(Object.assign({}, e));
                                    this._clearCache()
                                }
                                getDefinitions() { if (!this._compiledDefinitions) { this._compile() } return this._compiledDefinitions }
                                getDefinition(t) { let e; if (typeof t == "string") { e = t } else if (t.is && (t.is("text") || t.is("textProxy"))) { e = "$text" } else { e = t.name } return this.getDefinitions()[e] }
                                isRegistered(t) { return !!this.getDefinition(t) }
                                isBlock(t) { const e = this.getDefinition(t); return !!(e && e.isBlock) }
                                isLimit(t) { const e = this.getDefinition(t); if (!e) { return false } return !!(e.isLimit || e.isObject) }
                                isObject(t) { const e = this.getDefinition(t); return !!(e && e.isObject) }
                                isInline(t) { const e = this.getDefinition(t); return !!(e && e.isInline) }
                                checkChild(t, e) { if (!e) { return false } return this._checkContextMatch(e, t) }
                                checkAttribute(t, e) { const n = this.getDefinition(t.last); if (!n) { return false } return n.allowAttributes.includes(e) }
                                checkMerge(t, e = null) { if (t instanceof xu) { const e = t.nodeBefore; const n = t.nodeAfter; if (!(e instanceof bu)) { throw new Zs["b"]("schema-check-merge-no-element-before: The node before the merge position must be an element.", this) } if (!(n instanceof bu)) { throw new Zs["b"]("schema-check-merge-no-element-after: The node after the merge position must be an element.", this) } return this.checkMerge(e, n) } for (const n of e.getChildren()) { if (!this.checkChild(t, n)) { return false } } return true }
                                addChildCheck(t) {
                                    this.on("checkChild", (e, [n, i]) => {
                                        if (!i) { return }
                                        const o = t(n, i);
                                        if (typeof o == "boolean") {
                                            e.stop();
                                            e.return = o
                                        }
                                    }, { priority: "high" })
                                }
                                addAttributeCheck(t) {
                                    this.on("checkAttribute", (e, [n, i]) => {
                                        const o = t(n, i);
                                        if (typeof o == "boolean") {
                                            e.stop();
                                            e.return = o
                                        }
                                    }, { priority: "high" })
                                }
                                setAttributeProperties(t, e) { this._attributeProperties[t] = Object.assign(this.getAttributeProperties(t), e) }
                                getAttributeProperties(t) { return this._attributeProperties[t] || {} }
                                getLimitElement(t) {
                                    let e;
                                    if (t instanceof xu) { e = t.parent } else {
                                        const n = t instanceof Au ? [t] : Array.from(t.getRanges());
                                        e = n.reduce((t, e) => { const n = e.getCommonAncestor(); if (!t) { return n } return t.getCommonAncestor(n, { includeSelf: true }) }, null)
                                    }
                                    while (!this.isLimit(e)) { if (e.parent) { e = e.parent } else { break } }
                                    return e
                                }
                                checkAttributeInSelection(t, e) { if (t.isCollapsed) { const n = t.getFirstPosition(); const i = [...n.getAncestors(), new gu("", t.getAttributes())]; return this.checkAttribute(i, e) } else { const n = t.getRanges(); for (const t of n) { for (const n of t) { if (this.checkAttribute(n.item, e)) { return true } } } } return false } * getValidRanges(t, e) { t = gf(t); for (const n of t) { yield* this._getValidRangesForRange(n, e) } }
                                getNearestSelectionRange(t, e = "both") { if (this.checkChild(t, "$text")) { return new Au(t) } let n, i; if (e == "both" || e == "backward") { n = new ku({ startPosition: t, direction: "backward" }) } if (e == "both" || e == "forward") { i = new ku({ startPosition: t }) } for (const t of ff(n, i)) { const e = t.walker == n ? "elementEnd" : "elementStart"; const i = t.value; if (i.type == e && this.isObject(i.item)) { return Au._createOn(i.item) } if (this.checkChild(i.nextPosition, "$text")) { return new Au(i.nextPosition) } } return null }
                                findAllowedParent(t, e) {
                                    let n = t.parent;
                                    while (n) {
                                        if (this.checkChild(n, e)) { return n }
                                        if (this.isLimit(n)) { return null }
                                        n = n.parent
                                    }
                                    return null
                                }
                                removeDisallowedAttributes(t, e) {
                                    for (const n of t) {
                                        if (n.is("text")) { mf(this, n, e) } else {
                                            const t = Au._createIn(n);
                                            const i = t.getPositions();
                                            for (const t of i) {
                                                const n = t.nodeBefore || t.parent;
                                                mf(this, n, e)
                                            }
                                        }
                                    }
                                }
                                createContext(t) { return new Zh(t) }
                                _clearCache() { this._compiledDefinitions = null }
                                _compile() {
                                    const t = {};
                                    const e = this._sourceDefinitions;
                                    const n = Object.keys(e);
                                    for (const i of n) { t[i] = Xh(e[i], i) }
                                    for (const e of n) { tf(t, e) }
                                    for (const e of n) { ef(t, e) }
                                    for (const e of n) {
                                        nf(t, e);
                                        of(t, e)
                                    }
                                    for (const e of n) {
                                        sf(t, e);
                                        rf(t, e)
                                    }
                                    this._compiledDefinitions = t
                                }
                                _checkContextMatch(t, e, n = e.length - 1) { const i = e.getItem(n); if (t.allowIn.includes(i.name)) { if (n == 0) { return true } else { const t = this.getDefinition(i); return this._checkContextMatch(t, e, n - 1) } } else { return false } } * _getValidRangesForRange(t, e) {
                                    let n = t.start;
                                    let i = t.start;
                                    for (const o of t.getItems({ shallow: true })) {
                                        if (o.is("element")) { yield* this._getValidRangesForRange(Au._createIn(o), e) }
                                        if (!this.checkAttribute(o, e)) {
                                            if (!n.isEqual(i)) { yield new Au(n, i) }
                                            n = xu._createAfter(o)
                                        }
                                        i = xu._createAfter(o)
                                    }
                                    if (!n.isEqual(i)) { yield new Au(n, i) }
                                }
                            }
                            _r(Jh, ka);
                            class Zh {
                                constructor(t) {
                                    if (t instanceof Zh) { return t }
                                    if (typeof t == "string") { t = [t] } else if (!Array.isArray(t)) { t = t.getAncestors({ includeSelf: true }) }
                                    if (t[0] && typeof t[0] != "string" && t[0].is("documentFragment")) { t.shift() }
                                    this._items = t.map(hf)
                                }
                                get length() { return this._items.length }
                                get last() { return this._items[this._items.length - 1] }[Symbol.iterator]() { return this._items[Symbol.iterator]() }
                                push(t) {
                                    const e = new Zh([t]);
                                    e._items = [...this._items, ...e._items];
                                    return e
                                }
                                getItem(t) { return this._items[t] } * getNames() { yield* this._items.map(t => t.name) }
                                endsWith(t) { return Array.from(this.getNames()).join(" ").endsWith(t) }
                            }

                            function Xh(t, e) {
                                const n = { name: e, allowIn: [], allowContentOf: [], allowWhere: [], allowAttributes: [], allowAttributesOf: [], inheritTypesFrom: [] };
                                af(t, n);
                                cf(t, n, "allowIn");
                                cf(t, n, "allowContentOf");
                                cf(t, n, "allowWhere");
                                cf(t, n, "allowAttributes");
                                cf(t, n, "allowAttributesOf");
                                cf(t, n, "inheritTypesFrom");
                                lf(t, n);
                                return n
                            }

                            function tf(t, e) {
                                for (const n of t[e].allowContentOf) {
                                    if (t[n]) {
                                        const i = df(t, n);
                                        i.forEach(t => { t.allowIn.push(e) })
                                    }
                                }
                                delete t[e].allowContentOf
                            }

                            function ef(t, e) {
                                for (const n of t[e].allowWhere) {
                                    const i = t[n];
                                    if (i) {
                                        const n = i.allowIn;
                                        t[e].allowIn.push(...n)
                                    }
                                }
                                delete t[e].allowWhere
                            }

                            function nf(t, e) {
                                for (const n of t[e].allowAttributesOf) {
                                    const i = t[n];
                                    if (i) {
                                        const n = i.allowAttributes;
                                        t[e].allowAttributes.push(...n)
                                    }
                                }
                                delete t[e].allowAttributesOf
                            }

                            function of(t, e) {
                                const n = t[e];
                                for (const e of n.inheritTypesFrom) { const i = t[e]; if (i) { const t = Object.keys(i).filter(t => t.startsWith("is")); for (const e of t) { if (!(e in n)) { n[e] = i[e] } } } }
                                delete n.inheritTypesFrom
                            }

                            function sf(t, e) {
                                const n = t[e];
                                const i = n.allowIn.filter(e => t[e]);
                                n.allowIn = Array.from(new Set(i))
                            }

                            function rf(t, e) {
                                const n = t[e];
                                n.allowAttributes = Array.from(new Set(n.allowAttributes))
                            }

                            function af(t, e) { for (const n of t) { const t = Object.keys(n).filter(t => t.startsWith("is")); for (const i of t) { e[i] = n[i] } } }

                            function cf(t, e, n) { for (const i of t) { if (typeof i[n] == "string") { e[n].push(i[n]) } else if (Array.isArray(i[n])) { e[n].push(...i[n]) } } }

                            function lf(t, e) {
                                for (const n of t) {
                                    const t = n.inheritAllFrom;
                                    if (t) {
                                        e.allowContentOf.push(t);
                                        e.allowWhere.push(t);
                                        e.allowAttributesOf.push(t);
                                        e.inheritTypesFrom.push(t)
                                    }
                                }
                            }

                            function df(t, e) { const n = t[e]; return uf(t).filter(t => t.allowIn.includes(n.name)) }

                            function uf(t) { return Object.keys(t).map(e => t[e]) }

                            function hf(t) { if (typeof t == "string") { return { name: t, * getAttributeKeys() {}, getAttribute() {} } } else { return { name: t.is("element") ? t.name : "$text", * getAttributeKeys() { yield* t.getAttributeKeys() }, getAttribute(e) { return t.getAttribute(e) } } } }

                            function* ff(t, e) {
                                let n = false;
                                while (!n) {
                                    n = true;
                                    if (t) {
                                        const e = t.next();
                                        if (!e.done) {
                                            n = false;
                                            yield { walker: t, value: e.value }
                                        }
                                    }
                                    if (e) {
                                        const t = e.next();
                                        if (!t.done) {
                                            n = false;
                                            yield { walker: e, value: t.value }
                                        }
                                    }
                                }
                            }

                            function* gf(t) { for (const e of t) { yield* e.getMinimalFlatRanges() } }

                            function mf(t, e, n) { for (const i of e.getAttributeKeys()) { if (!t.checkAttribute(e, i)) { n.removeAttribute(i, e) } } }
                            class pf {
                                constructor(t = {}) {
                                    this._splitParts = new Map;
                                    this._modelCursor = null;
                                    this.conversionApi = Object.assign({}, t);
                                    this.conversionApi.convertItem = this._convertItem.bind(this);
                                    this.conversionApi.convertChildren = this._convertChildren.bind(this);
                                    this.conversionApi.splitToAllowedParent = this._splitToAllowedParent.bind(this);
                                    this.conversionApi.getSplitParts = this._getSplitParts.bind(this)
                                }
                                convert(t, e, n = ["$root"]) {
                                    this.fire("viewCleanup", t);
                                    this._modelCursor = wf(n, e);
                                    this.conversionApi.writer = e;
                                    this.conversionApi.consumable = Qh.createFrom(t);
                                    this.conversionApi.store = {};
                                    const { modelRange: i } = this._convertItem(t, this._modelCursor);
                                    const o = e.createDocumentFragment();
                                    if (i) {
                                        this._removeEmptyElements();
                                        for (const t of Array.from(this._modelCursor.parent.getChildren())) { e.append(t, o) }
                                        o.markers = bf(o, e)
                                    }
                                    this._modelCursor = null;
                                    this._splitParts.clear();
                                    this.conversionApi.writer = null;
                                    this.conversionApi.store = null;
                                    return o
                                }
                                _convertItem(t, e) { const n = Object.assign({ viewItem: t, modelCursor: e, modelRange: null }); if (t.is("element")) { this.fire("element:" + t.name, n, this.conversionApi) } else if (t.is("text")) { this.fire("text", n, this.conversionApi) } else { this.fire("documentFragment", n, this.conversionApi) } if (n.modelRange && !(n.modelRange instanceof Au)) { throw new Zs["b"]("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.", this) } return { modelRange: n.modelRange, modelCursor: n.modelCursor } }
                                _convertChildren(t, e) {
                                    const n = new Au(e);
                                    let i = e;
                                    for (const e of Array.from(t.getChildren())) {
                                        const t = this._convertItem(e, i);
                                        if (t.modelRange instanceof Au) {
                                            n.end = t.modelRange.end;
                                            i = t.modelCursor
                                        }
                                    }
                                    return { modelRange: n, modelCursor: i }
                                }
                                _splitToAllowedParent(t, e) {
                                    const n = this.conversionApi.schema.findAllowedParent(e, t);
                                    if (!n) { return null }
                                    if (n === e.parent) { return { position: e } }
                                    if (this._modelCursor.parent.getAncestors().includes(n)) { return null }
                                    const i = this.conversionApi.writer.split(e, n);
                                    const o = [];
                                    for (const t of i.range.getWalker()) {
                                        if (t.type == "elementEnd") { o.push(t.item) } else {
                                            const e = o.pop();
                                            const n = t.item;
                                            this._registerSplitPair(e, n)
                                        }
                                    }
                                    return { position: i.position, cursorParent: i.range.end.parent }
                                }
                                _registerSplitPair(t, e) {
                                    if (!this._splitParts.has(t)) { this._splitParts.set(t, [t]) }
                                    const n = this._splitParts.get(t);
                                    this._splitParts.set(e, n);
                                    n.push(e)
                                }
                                _getSplitParts(t) { let e; if (!this._splitParts.has(t)) { e = [t] } else { e = this._splitParts.get(t) } return e }
                                _removeEmptyElements() {
                                    let t = false;
                                    for (const e of this._splitParts.keys()) {
                                        if (e.isEmpty) {
                                            this.conversionApi.writer.remove(e);
                                            this._splitParts.delete(e);
                                            t = true
                                        }
                                    }
                                    if (t) { this._removeEmptyElements() }
                                }
                            }
                            _r(pf, lr);

                            function bf(t, e) {
                                const n = new Set;
                                const i = new Map;
                                const o = Au._createIn(t).getItems();
                                for (const t of o) { if (t.name == "$marker") { n.add(t) } }
                                for (const t of n) {
                                    const n = t.getAttribute("data-name");
                                    const o = e.createPositionBefore(t);
                                    if (!i.has(n)) { i.set(n, new Au(o.clone())) } else { i.get(n).end = o.clone() }
                                    e.remove(t)
                                }
                                return i
                            }

                            function wf(t, e) {
                                let n;
                                for (const i of new Zh(t)) {
                                    const t = {};
                                    for (const e of i.getAttributeKeys()) { t[e] = i.getAttribute(e) }
                                    const o = e.createElement(i.name, t);
                                    if (n) { e.append(o, n) }
                                    n = xu._createAt(o, 0)
                                }
                                return n
                            }
                            class kf {
                                constructor(t, e) {
                                    this.model = t;
                                    this.processor = e;
                                    this.mapper = new Cu;
                                    this.downcastDispatcher = new Su({ mapper: this.mapper });
                                    this.downcastDispatcher.on("insert:$text", Ju(), { priority: "lowest" });
                                    this.upcastDispatcher = new pf({ schema: t.schema });
                                    this.upcastDispatcher.on("text", xh(), { priority: "lowest" });
                                    this.upcastDispatcher.on("element", yh(), { priority: "lowest" });
                                    this.upcastDispatcher.on("documentFragment", yh(), { priority: "lowest" });
                                    this.decorate("init");
                                    this.on("init", () => { this.fire("ready") }, { priority: "lowest" })
                                }
                                get(t) { const { rootName: e = "main", trim: n = "empty" } = t || {}; if (!this._checkIfRootsExists([e])) { throw new Zs["b"]("datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.", this) } const i = this.model.document.getRoot(e); if (n === "empty" && !this.model.hasContent(i, { ignoreWhitespaces: true })) { return "" } return this.stringify(i) }
                                stringify(t) { const e = this.toView(t); return this.processor.toData(e) }
                                toView(t) {
                                    this.mapper.clearBindings();
                                    const e = Au._createIn(t);
                                    const n = new pc;
                                    const i = new wc(new Ha);
                                    this.mapper.bindElements(t, n);
                                    this.downcastDispatcher.convertInsert(e, i);
                                    if (!t.is("documentFragment")) { const e = _f(t); for (const [t, n] of e) { this.downcastDispatcher.convertMarkerAdd(t, n, i) } }
                                    return n
                                }
                                init(t) {
                                    if (this.model.document.version) { throw new Zs["b"]("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.", this) }
                                    let e = {};
                                    if (typeof t === "string") { e.main = t } else { e = t }
                                    if (!this._checkIfRootsExists(Object.keys(e))) { throw new Zs["b"]("datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.", this) }
                                    this.model.enqueueChange("transparent", t => {
                                        for (const n of Object.keys(e)) {
                                            const i = this.model.document.getRoot(n);
                                            t.insert(this.parse(e[n], i), i, 0)
                                        }
                                    });
                                    return Promise.resolve()
                                }
                                set(t) {
                                    let e = {};
                                    if (typeof t === "string") { e.main = t } else { e = t }
                                    if (!this._checkIfRootsExists(Object.keys(e))) { throw new Zs["b"]("datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.", this) }
                                    this.model.enqueueChange("transparent", t => {
                                        t.setSelection(null);
                                        t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());
                                        for (const n of Object.keys(e)) {
                                            const i = this.model.document.getRoot(n);
                                            t.remove(t.createRangeIn(i));
                                            t.insert(this.parse(e[n], i), i, 0)
                                        }
                                    })
                                }
                                parse(t, e = "$root") { const n = this.processor.toView(t); return this.toModel(n, e) }
                                toModel(t, e = "$root") { return this.model.change(n => this.upcastDispatcher.convert(t, n, e)) }
                                destroy() { this.stopListening() }
                                _checkIfRootsExists(t) { for (const e of t) { if (!this.model.document.getRootNames().includes(e)) { return false } } return true }
                            }
                            _r(kf, ka);

                            function _f(t) { const e = []; const n = t.root.document; if (!n) { return [] } const i = Au._createIn(t); for (const t of n.model.markers) { const n = i.getIntersection(t.getRange()); if (n) { e.push([t.name, n]) } } return e }
                            class vf {
                                constructor(t, e) {
                                    this._helpers = new Map;
                                    this._downcast = Array.isArray(t) ? t : [t];
                                    this._createConversionHelpers({ name: "downcast", dispatchers: this._downcast, isDowncast: true });
                                    this._upcast = Array.isArray(e) ? e : [e];
                                    this._createConversionHelpers({ name: "upcast", dispatchers: this._upcast, isDowncast: false })
                                }
                                addAlias(t, e) {
                                    const n = this._downcast.includes(e);
                                    const i = this._upcast.includes(e);
                                    if (!i && !n) { throw new Zs["b"]("conversion-add-alias-dispatcher-not-registered: " + "Trying to register and alias for a dispatcher that nas not been registered.", this) }
                                    this._createConversionHelpers({ name: t, dispatchers: [e], isDowncast: n })
                                }
                                for (t) { if (!this._helpers.has(t)) { throw new Zs["b"]("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.", this) } return this._helpers.get(t) }
                                elementToElement(t) {
                                    this.for("downcast").elementToElement(t);
                                    for (const { model: e, view: n }
                                        of yf(t)) { this.for("upcast").elementToElement({ model: e, view: n, converterPriority: t.converterPriority }) }
                                }
                                attributeToElement(t) {
                                    this.for("downcast").attributeToElement(t);
                                    for (const { model: e, view: n }
                                        of yf(t)) { this.for("upcast").elementToAttribute({ view: n, model: e, converterPriority: t.converterPriority }) }
                                }
                                attributeToAttribute(t) {
                                    this.for("downcast").attributeToAttribute(t);
                                    for (const { model: e, view: n }
                                        of yf(t)) { this.for("upcast").attributeToAttribute({ view: n, model: e }) }
                                }
                                _createConversionHelpers({ name: t, dispatchers: e, isDowncast: n }) {
                                    if (this._helpers.has(t)) { throw new Zs["b"]("conversion-group-exists: Trying to register a group name that has already been registered.", this) }
                                    const i = n ? new Ku(e) : new vh(e);
                                    this._helpers.set(t, i)
                                }
                            }

                            function* yf(t) {
                                if (t.model.values) {
                                    for (const e of t.model.values) {
                                        const n = { key: t.model.key, value: e };
                                        const i = t.view[e];
                                        const o = t.upcastAlso ? t.upcastAlso[e] : undefined;
                                        yield* xf(n, i, o)
                                    }
                                } else { yield* xf(t.model, t.view, t.upcastAlso) }
                            }

                            function* xf(t, e, n) { yield { model: t, view: e }; if (n) { n = Array.isArray(n) ? n : [n]; for (const e of n) { yield { model: t, view: e } } } }
                            class Af {
                                constructor(t = "default") {
                                    this.operations = [];
                                    this.type = t
                                }
                                get baseVersion() { for (const t of this.operations) { if (t.baseVersion !== null) { return t.baseVersion } } return null }
                                addOperation(t) {
                                    t.batch = this;
                                    this.operations.push(t);
                                    return t
                                }
                            }
                            class Cf {
                                constructor(t) {
                                    this.baseVersion = t;
                                    this.isDocumentOperation = this.baseVersion !== null;
                                    this.batch = null
                                }
                                _validate() {}
                                toJSON() {
                                    const t = Object.assign({}, this);
                                    t.__className = this.constructor.className;
                                    delete t.batch;
                                    delete t.isDocumentOperation;
                                    return t
                                }
                                static get className() { return "Operation" }
                                static fromJSON(t) { return new this(t.baseVersion) }
                            }
                            class Tf {
                                constructor(t) {
                                    this.markers = new Map;
                                    this._children = new pu;
                                    if (t) { this._insertChild(0, t) }
                                }[Symbol.iterator]() { return this.getChildren() }
                                get childCount() { return this._children.length }
                                get maxOffset() { return this._children.maxOffset }
                                get isEmpty() { return this.childCount === 0 }
                                get root() { return this }
                                get parent() { return null }
                                is(t) { return t == "documentFragment" || t == "model:documentFragment" }
                                getChild(t) { return this._children.getNode(t) }
                                getChildren() { return this._children[Symbol.iterator]() }
                                getChildIndex(t) { return this._children.getNodeIndex(t) }
                                getChildStartOffset(t) { return this._children.getNodeStartOffset(t) }
                                getPath() { return [] }
                                getNodeByPath(t) { let e = this; for (const n of t) { e = e.getChild(e.offsetToIndex(n)) } return e }
                                offsetToIndex(t) { return this._children.offsetToIndex(t) }
                                toJSON() { const t = []; for (const e of this._children) { t.push(e.toJSON()) } return t }
                                static fromJSON(t) { const e = []; for (const n of t) { if (n.name) { e.push(bu.fromJSON(n)) } else { e.push(gu.fromJSON(n)) } } return new Tf(e) }
                                _appendChild(t) { this._insertChild(this.childCount, t) }
                                _insertChild(t, e) {
                                    const n = Pf(e);
                                    for (const t of n) {
                                        if (t.parent !== null) { t._remove() }
                                        t.parent = this
                                    }
                                    this._children._insertNodes(t, n)
                                }
                                _removeChildren(t, e = 1) { const n = this._children._removeNodes(t, e); for (const t of n) { t.parent = null } return n }
                            }

                            function Pf(t) { if (typeof t == "string") { return [new gu(t)] } if (!Mr(t)) { t = [t] } return Array.from(t).map(t => { if (typeof t == "string") { return new gu(t) } if (t instanceof mu) { return new gu(t.data, t.getAttributes()) } return t }) }

                            function Sf(t, e) {
                                e = Nf(e);
                                const n = e.reduce((t, e) => t + e.offsetSize, 0);
                                const i = t.parent;
                                Rf(t);
                                const o = t.index;
                                i._insertChild(o, e);
                                Of(i, o + e.length);
                                Of(i, o);
                                return new Au(t, t.getShiftedBy(n))
                            }

                            function Mf(t) {
                                if (!t.isFlat) { throw new Zs["b"]("operation-utils-remove-range-not-flat: " + "Trying to remove a range which starts and ends in different element.", this) }
                                const e = t.start.parent;
                                Rf(t.start);
                                Rf(t.end);
                                const n = e._removeChildren(t.start.index, t.end.index - t.start.index);
                                Of(e, t.start.index);
                                return n
                            }

                            function Ef(t, e) {
                                if (!t.isFlat) { throw new Zs["b"]("operation-utils-move-range-not-flat: " + "Trying to move a range which starts and ends in different element.", this) }
                                const n = Mf(t);
                                e = e._getTransformedByDeletion(t.start, t.end.offset - t.start.offset);
                                return Sf(e, n)
                            }

                            function If(t, e, n) {
                                Rf(t.start);
                                Rf(t.end);
                                for (const i of t.getItems({ shallow: true })) {
                                    const t = i.is("textProxy") ? i.textNode : i;
                                    if (n !== null) { t._setAttribute(e, n) } else { t._removeAttribute(e) }
                                    Of(t.parent, t.index)
                                }
                                Of(t.end.parent, t.end.index)
                            }

                            function Nf(t) {
                                const e = [];
                                if (!(t instanceof Array)) { t = [t] }
                                for (let n = 0; n < t.length; n++) { if (typeof t[n] == "string") { e.push(new gu(t[n])) } else if (t[n] instanceof mu) { e.push(new gu(t[n].data, t[n].getAttributes())) } else if (t[n] instanceof Tf || t[n] instanceof pu) { for (const i of t[n]) { e.push(i) } } else if (t[n] instanceof fu) { e.push(t[n]) } }
                                for (let t = 1; t < e.length; t++) {
                                    const n = e[t];
                                    const i = e[t - 1];
                                    if (n instanceof gu && i instanceof gu && Lf(n, i)) {
                                        e.splice(t - 1, 2, new gu(i.data + n.data, i.getAttributes()));
                                        t--
                                    }
                                }
                                return e
                            }

                            function Of(t, e) {
                                const n = t.getChild(e - 1);
                                const i = t.getChild(e);
                                if (n && i && n.is("text") && i.is("text") && Lf(n, i)) {
                                    const o = new gu(n.data + i.data, n.getAttributes());
                                    t._removeChildren(e - 1, 2);
                                    t._insertChild(e - 1, o)
                                }
                            }

                            function Rf(t) {
                                const e = t.textNode;
                                const n = t.parent;
                                if (e) {
                                    const i = t.offset - e.startOffset;
                                    const o = e.index;
                                    n._removeChildren(o, 1);
                                    const s = new gu(e.data.substr(0, i), e.getAttributes());
                                    const r = new gu(e.data.substr(i), e.getAttributes());
                                    n._insertChild(o, [s, r])
                                }
                            }

                            function Lf(t, e) {
                                const n = t.getAttributes();
                                const i = e.getAttributes();
                                for (const t of n) {
                                    if (t[1] !== e.getAttribute(t[0])) { return false }
                                    i.next()
                                }
                                return i.next().done
                            }

                            function Df(t, e) { return pd(t, e) }
                            var zf = Df;
                            class Vf extends Cf {
                                constructor(t, e, n, i, o) {
                                    super(o);
                                    this.range = t.clone();
                                    this.key = e;
                                    this.oldValue = n === undefined ? null : n;
                                    this.newValue = i === undefined ? null : i
                                }
                                get type() { if (this.oldValue === null) { return "addAttribute" } else if (this.newValue === null) { return "removeAttribute" } else { return "changeAttribute" } }
                                clone() { return new Vf(this.range, this.key, this.oldValue, this.newValue, this.baseVersion) }
                                getReversed() { return new Vf(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1) }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.range = this.range.toJSON();
                                    return t
                                }
                                _validate() { if (!this.range.isFlat) { throw new Zs["b"]("attribute-operation-range-not-flat: The range to change is not flat.", this) } for (const t of this.range.getItems({ shallow: true })) { if (this.oldValue !== null && !zf(t.getAttribute(this.key), this.oldValue)) { throw new Zs["b"]("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's " + "old attribute value.", this, { item: t, key: this.key, value: this.oldValue }) } if (this.oldValue === null && this.newValue !== null && t.hasAttribute(this.key)) { throw new Zs["b"]("attribute-operation-attribute-exists: The attribute with given key already exists.", this, { node: t, key: this.key }) } } }
                                _execute() { if (!zf(this.oldValue, this.newValue)) { If(this.range, this.key, this.newValue) } }
                                static get className() { return "AttributeOperation" }
                                static fromJSON(t, e) { return new Vf(Au.fromJSON(t.range, e), t.key, t.oldValue, t.newValue, t.baseVersion) }
                            }
                            class jf extends Cf {
                                constructor(t, e) {
                                    super(null);
                                    this.sourcePosition = t.clone();
                                    this.howMany = e
                                }
                                get type() { return "detach" }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.sourcePosition = this.sourcePosition.toJSON();
                                    return t
                                }
                                _validate() { if (this.sourcePosition.root.document) { throw new Zs["b"]("detach-operation-on-document-node: Cannot detach document node.", this) } }
                                _execute() { Mf(Au._createFromPositionAndShift(this.sourcePosition, this.howMany)) }
                                static get className() { return "DetachOperation" }
                            }
                            class Bf extends Cf {
                                constructor(t, e, n, i) {
                                    super(i);
                                    this.sourcePosition = t.clone();
                                    this.sourcePosition.stickiness = "toNext";
                                    this.howMany = e;
                                    this.targetPosition = n.clone();
                                    this.targetPosition.stickiness = "toNone"
                                }
                                get type() { if (this.targetPosition.root.rootName == "$graveyard") { return "remove" } else if (this.sourcePosition.root.rootName == "$graveyard") { return "reinsert" } return "move" }
                                clone() { return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion) }
                                getMovedRangeStart() { return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany) }
                                getReversed() { const t = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany); return new this.constructor(this.getMovedRangeStart(), this.howMany, t, this.baseVersion + 1) }
                                _validate() { const t = this.sourcePosition.parent; const e = this.targetPosition.parent; const n = this.sourcePosition.offset; const i = this.targetPosition.offset; if (n + this.howMany > t.maxOffset) { throw new Zs["b"]("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.", this) } else if (t === e && n < i && i < n + this.howMany) { throw new Zs["b"]("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.", this) } else if (this.sourcePosition.root == this.targetPosition.root) { if (vr(this.sourcePosition.getParentPath(), this.targetPosition.getParentPath()) == "prefix") { const t = this.sourcePosition.path.length - 1; if (this.targetPosition.path[t] >= n && this.targetPosition.path[t] < n + this.howMany) { throw new Zs["b"]("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.", this) } } } }
                                _execute() { Ef(Au._createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition) }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.sourcePosition = this.sourcePosition.toJSON();
                                    t.targetPosition = this.targetPosition.toJSON();
                                    return t
                                }
                                static get className() { return "MoveOperation" }
                                static fromJSON(t, e) { const n = xu.fromJSON(t.sourcePosition, e); const i = xu.fromJSON(t.targetPosition, e); return new this(n, t.howMany, i, t.baseVersion) }
                            }
                            class Ff extends Cf {
                                constructor(t, e, n) {
                                    super(n);
                                    this.position = t.clone();
                                    this.position.stickiness = "toNone";
                                    this.nodes = new pu(Nf(e));
                                    this.shouldReceiveAttributes = false
                                }
                                get type() { return "insert" }
                                get howMany() { return this.nodes.maxOffset }
                                clone() {
                                    const t = new pu([...this.nodes].map(t => t._clone(true)));
                                    const e = new Ff(this.position, t, this.baseVersion);
                                    e.shouldReceiveAttributes = this.shouldReceiveAttributes;
                                    return e
                                }
                                getReversed() { const t = this.position.root.document.graveyard; const e = new xu(t, [0]); return new Bf(this.position, this.nodes.maxOffset, e, this.baseVersion + 1) }
                                _validate() { const t = this.position.parent; if (!t || t.maxOffset < this.position.offset) { throw new Zs["b"]("insert-operation-position-invalid: Insertion position is invalid.", this) } }
                                _execute() {
                                    const t = this.nodes;
                                    this.nodes = new pu([...t].map(t => t._clone(true)));
                                    Sf(this.position, t)
                                }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.position = this.position.toJSON();
                                    t.nodes = this.nodes.toJSON();
                                    return t
                                }
                                static get className() { return "InsertOperation" }
                                static fromJSON(t, e) {
                                    const n = [];
                                    for (const e of t.nodes) { if (e.name) { n.push(bu.fromJSON(e)) } else { n.push(gu.fromJSON(e)) } }
                                    const i = new Ff(xu.fromJSON(t.position, e), n, t.baseVersion);
                                    i.shouldReceiveAttributes = t.shouldReceiveAttributes;
                                    return i
                                }
                            }
                            class Hf extends Cf {
                                constructor(t, e, n, i, o, s) {
                                    super(s);
                                    this.name = t;
                                    this.oldRange = e ? e.clone() : null;
                                    this.newRange = n ? n.clone() : null;
                                    this.affectsData = o;
                                    this._markers = i
                                }
                                get type() { return "marker" }
                                clone() { return new Hf(this.name, this.oldRange, this.newRange, this._markers, this.affectsData, this.baseVersion) }
                                getReversed() { return new Hf(this.name, this.newRange, this.oldRange, this._markers, this.affectsData, this.baseVersion + 1) }
                                _execute() {
                                    const t = this.newRange ? "_set" : "_remove";
                                    this._markers[t](this.name, this.newRange, true, this.affectsData)
                                }
                                toJSON() {
                                    const t = super.toJSON();
                                    if (this.oldRange) { t.oldRange = this.oldRange.toJSON() }
                                    if (this.newRange) { t.newRange = this.newRange.toJSON() }
                                    delete t._markers;
                                    return t
                                }
                                static get className() { return "MarkerOperation" }
                                static fromJSON(t, e) { return new Hf(t.name, t.oldRange ? Au.fromJSON(t.oldRange, e) : null, t.newRange ? Au.fromJSON(t.newRange, e) : null, e.model.markers, t.affectsData, t.baseVersion) }
                            }
                            class Uf extends Cf {
                                constructor(t, e, n, i) {
                                    super(i);
                                    this.position = t;
                                    this.position.stickiness = "toNext";
                                    this.oldName = e;
                                    this.newName = n
                                }
                                get type() { return "rename" }
                                clone() { return new Uf(this.position.clone(), this.oldName, this.newName, this.baseVersion) }
                                getReversed() { return new Uf(this.position.clone(), this.newName, this.oldName, this.baseVersion + 1) }
                                _validate() { const t = this.position.nodeAfter; if (!(t instanceof bu)) { throw new Zs["b"]("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.", this) } else if (t.name !== this.oldName) { throw new Zs["b"]("rename-operation-wrong-name: Element to change has different name than operation's old name.", this) } }
                                _execute() {
                                    const t = this.position.nodeAfter;
                                    t.name = this.newName
                                }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.position = this.position.toJSON();
                                    return t
                                }
                                static get className() { return "RenameOperation" }
                                static fromJSON(t, e) { return new Uf(xu.fromJSON(t.position, e), t.oldName, t.newName, t.baseVersion) }
                            }
                            class qf extends Cf {
                                constructor(t, e, n, i, o) {
                                    super(o);
                                    this.root = t;
                                    this.key = e;
                                    this.oldValue = n;
                                    this.newValue = i
                                }
                                get type() { if (this.oldValue === null) { return "addRootAttribute" } else if (this.newValue === null) { return "removeRootAttribute" } else { return "changeRootAttribute" } }
                                clone() { return new qf(this.root, this.key, this.oldValue, this.newValue, this.baseVersion) }
                                getReversed() { return new qf(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1) }
                                _validate() { if (this.root != this.root.root || this.root.is("documentFragment")) { throw new Zs["b"]("rootattribute-operation-not-a-root: The element to change is not a root element.", this, { root: this.root, key: this.key }) } if (this.oldValue !== null && this.root.getAttribute(this.key) !== this.oldValue) { throw new Zs["b"]("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's " + "old attribute value.", this, { root: this.root, key: this.key }) } if (this.oldValue === null && this.newValue !== null && this.root.hasAttribute(this.key)) { throw new Zs["b"]("rootattribute-operation-attribute-exists: The attribute with given key already exists.", this, { root: this.root, key: this.key }) } }
                                _execute() { if (this.newValue !== null) { this.root._setAttribute(this.key, this.newValue) } else { this.root._removeAttribute(this.key) } }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.root = this.root.toJSON();
                                    return t
                                }
                                static get className() { return "RootAttributeOperation" }
                                static fromJSON(t, e) { if (!e.getRoot(t.root)) { throw new Zs["b"]("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.", this, { rootName: t.root }) } return new qf(e.getRoot(t.root), t.key, t.oldValue, t.newValue, t.baseVersion) }
                            }
                            class Wf extends Cf {
                                constructor(t, e, n, i, o) {
                                    super(o);
                                    this.sourcePosition = t.clone();
                                    this.sourcePosition.stickiness = "toPrevious";
                                    this.howMany = e;
                                    this.targetPosition = n.clone();
                                    this.targetPosition.stickiness = "toNext";
                                    this.graveyardPosition = i.clone()
                                }
                                get type() { return "merge" }
                                get deletionPosition() { return new xu(this.sourcePosition.root, this.sourcePosition.path.slice(0, -1)) }
                                get movedRange() { const t = this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY); return new Au(this.sourcePosition, t) }
                                clone() { return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.graveyardPosition, this.baseVersion) }
                                getReversed() {
                                    const t = this.targetPosition._getTransformedByMergeOperation(this);
                                    const e = this.sourcePosition.path.slice(0, -1);
                                    const n = new xu(this.sourcePosition.root, e)._getTransformedByMergeOperation(this);
                                    const i = new $f(t, this.howMany, this.graveyardPosition, this.baseVersion + 1);
                                    i.insertionPosition = n;
                                    return i
                                }
                                _validate() { const t = this.sourcePosition.parent; const e = this.targetPosition.parent; if (!t.parent) { throw new Zs["b"]("merge-operation-source-position-invalid: Merge source position is invalid.", this) } else if (!e.parent) { throw new Zs["b"]("merge-operation-target-position-invalid: Merge target position is invalid.", this) } else if (this.howMany != t.maxOffset) { throw new Zs["b"]("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.", this) } }
                                _execute() {
                                    const t = this.sourcePosition.parent;
                                    const e = Au._createIn(t);
                                    Ef(e, this.targetPosition);
                                    Ef(Au._createOn(t), this.graveyardPosition)
                                }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.sourcePosition = t.sourcePosition.toJSON();
                                    t.targetPosition = t.targetPosition.toJSON();
                                    t.graveyardPosition = t.graveyardPosition.toJSON();
                                    return t
                                }
                                static get className() { return "MergeOperation" }
                                static fromJSON(t, e) { const n = xu.fromJSON(t.sourcePosition, e); const i = xu.fromJSON(t.targetPosition, e); const o = xu.fromJSON(t.graveyardPosition, e); return new this(n, t.howMany, i, o, t.baseVersion) }
                            }
                            class $f extends Cf {
                                constructor(t, e, n, i) {
                                    super(i);
                                    this.splitPosition = t.clone();
                                    this.splitPosition.stickiness = "toNext";
                                    this.howMany = e;
                                    this.insertionPosition = $f.getInsertionPosition(t);
                                    this.insertionPosition.stickiness = "toNone";
                                    this.graveyardPosition = n ? n.clone() : null;
                                    if (this.graveyardPosition) { this.graveyardPosition.stickiness = "toNext" }
                                }
                                get type() { return "split" }
                                get moveTargetPosition() {
                                    const t = this.insertionPosition.path.slice();
                                    t.push(0);
                                    return new xu(this.insertionPosition.root, t)
                                }
                                get movedRange() { const t = this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY); return new Au(this.splitPosition, t) }
                                clone() {
                                    const t = new this.constructor(this.splitPosition, this.howMany, this.graveyardPosition, this.baseVersion);
                                    t.insertionPosition = this.insertionPosition;
                                    return t
                                }
                                getReversed() { const t = this.splitPosition.root.document.graveyard; const e = new xu(t, [0]); return new Wf(this.moveTargetPosition, this.howMany, this.splitPosition, e, this.baseVersion + 1) }
                                _validate() { const t = this.splitPosition.parent; const e = this.splitPosition.offset; if (!t || t.maxOffset < e) { throw new Zs["b"]("split-operation-position-invalid: Split position is invalid.", this) } else if (!t.parent) { throw new Zs["b"]("split-operation-split-in-root: Cannot split root element.", this) } else if (this.howMany != t.maxOffset - this.splitPosition.offset) { throw new Zs["b"]("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.", this) } else if (this.graveyardPosition && !this.graveyardPosition.nodeAfter) { throw new Zs["b"]("split-operation-graveyard-position-invalid: Graveyard position invalid.", this) } }
                                _execute() {
                                    const t = this.splitPosition.parent;
                                    if (this.graveyardPosition) { Ef(Au._createFromPositionAndShift(this.graveyardPosition, 1), this.insertionPosition) } else {
                                        const e = t._clone();
                                        Sf(this.insertionPosition, e)
                                    }
                                    const e = new Au(xu._createAt(t, this.splitPosition.offset), xu._createAt(t, t.maxOffset));
                                    Ef(e, this.moveTargetPosition)
                                }
                                toJSON() {
                                    const t = super.toJSON();
                                    t.splitPosition = this.splitPosition.toJSON();
                                    t.insertionPosition = this.insertionPosition.toJSON();
                                    if (this.graveyardPosition) { t.graveyardPosition = this.graveyardPosition.toJSON() }
                                    return t
                                }
                                static get className() { return "SplitOperation" }
                                static getInsertionPosition(t) {
                                    const e = t.path.slice(0, -1);
                                    e[e.length - 1]++;
                                    return new xu(t.root, e)
                                }
                                static fromJSON(t, e) {
                                    const n = xu.fromJSON(t.splitPosition, e);
                                    const i = xu.fromJSON(t.insertionPosition, e);
                                    const o = t.graveyardPosition ? xu.fromJSON(t.graveyardPosition, e) : null;
                                    const s = new this(n, t.howMany, o, t.baseVersion);
                                    s.insertionPosition = i;
                                    return s
                                }
                            }
                            class Yf extends bu {
                                constructor(t, e, n = "main") {
                                    super(e);
                                    this._doc = t;
                                    this.rootName = n
                                }
                                get document() { return this._doc }
                                is(t, e) { const n = t.replace("model:", ""); if (!e) { return n == "rootElement" || super.is(t) } else { return n == "rootElement" && e == this.name || super.is(t, e) } }
                                toJSON() { return this.rootName }
                            }
                            class Gf {
                                constructor(t, e) {
                                    this.model = t;
                                    this.batch = e
                                }
                                createText(t, e) { return new gu(t, e) }
                                createElement(t, e) { return new bu(t, e) }
                                createDocumentFragment() { return new Tf }
                                insert(t, e, n = 0) {
                                    this._assertWriterUsedCorrectly();
                                    if (t instanceof gu && t.data == "") { return }
                                    const i = xu._createAt(e, n);
                                    if (t.parent) { if (Xf(t.root, i.root)) { this.move(Au._createOn(t), i); return } else { if (t.root.document) { throw new Zs["b"]("model-writer-insert-forbidden-move: " + "Cannot move a node from a document to a different tree. " + "It is forbidden to move a node that was already in a document outside of it.", this) } else { this.remove(t) } } }
                                    const o = i.root.document ? i.root.document.version : null;
                                    const s = new Ff(i, t, o);
                                    if (t instanceof gu) { s.shouldReceiveAttributes = true }
                                    this.batch.addOperation(s);
                                    this.model.applyOperation(s);
                                    if (t instanceof Tf) { for (const [e, n] of t.markers) { const t = xu._createAt(n.root, 0); const o = new Au(n.start._getCombined(t, i), n.end._getCombined(t, i)); const s = { range: o, usingOperation: true, affectsData: true }; if (this.model.markers.has(e)) { this.updateMarker(e, s) } else { this.addMarker(e, s) } } }
                                }
                                insertText(t, e, n, i) { if (e instanceof Tf || e instanceof bu || e instanceof xu) { this.insert(this.createText(t), e, n) } else { this.insert(this.createText(t, e), n, i) } }
                                insertElement(t, e, n, i) { if (e instanceof Tf || e instanceof bu || e instanceof xu) { this.insert(this.createElement(t), e, n) } else { this.insert(this.createElement(t, e), n, i) } }
                                append(t, e) { this.insert(t, e, "end") }
                                appendText(t, e, n) { if (e instanceof Tf || e instanceof bu) { this.insert(this.createText(t), e, "end") } else { this.insert(this.createText(t, e), n, "end") } }
                                appendElement(t, e, n) { if (e instanceof Tf || e instanceof bu) { this.insert(this.createElement(t), e, "end") } else { this.insert(this.createElement(t, e), n, "end") } }
                                setAttribute(t, e, n) { this._assertWriterUsedCorrectly(); if (n instanceof Au) { const i = n.getMinimalFlatRanges(); for (const n of i) { Qf(this, t, e, n) } } else { Kf(this, t, e, n) } }
                                setAttributes(t, e) { for (const [n, i] of hu(t)) { this.setAttribute(n, i, e) } }
                                removeAttribute(t, e) { this._assertWriterUsedCorrectly(); if (e instanceof Au) { const n = e.getMinimalFlatRanges(); for (const e of n) { Qf(this, t, null, e) } } else { Kf(this, t, null, e) } }
                                clearAttributes(t) { this._assertWriterUsedCorrectly(); const e = t => { for (const e of t.getAttributeKeys()) { this.removeAttribute(e, t) } }; if (!(t instanceof Au)) { e(t) } else { for (const n of t.getItems()) { e(n) } } }
                                move(t, e, n) {
                                    this._assertWriterUsedCorrectly();
                                    if (!(t instanceof Au)) { throw new Zs["b"]("writer-move-invalid-range: Invalid range to move.", this) }
                                    if (!t.isFlat) { throw new Zs["b"]("writer-move-range-not-flat: Range to move is not flat.", this) }
                                    const i = xu._createAt(e, n);
                                    if (i.isEqual(t.start)) { return }
                                    this._addOperationForAffectedMarkers("move", t);
                                    if (!Xf(t.root, i.root)) { throw new Zs["b"]("writer-move-different-document: Range is going to be moved between different documents.", this) }
                                    const o = t.root.document ? t.root.document.version : null;
                                    const s = new Bf(t.start, t.end.offset - t.start.offset, i, o);
                                    this.batch.addOperation(s);
                                    this.model.applyOperation(s)
                                }
                                remove(t) {
                                    this._assertWriterUsedCorrectly();
                                    const e = t instanceof Au ? t : Au._createOn(t);
                                    const n = e.getMinimalFlatRanges().reverse();
                                    for (const t of n) {
                                        this._addOperationForAffectedMarkers("move", t);
                                        Zf(t.start, t.end.offset - t.start.offset, this.batch, this.model)
                                    }
                                }
                                merge(t) {
                                    this._assertWriterUsedCorrectly();
                                    const e = t.nodeBefore;
                                    const n = t.nodeAfter;
                                    this._addOperationForAffectedMarkers("merge", t);
                                    if (!(e instanceof bu)) { throw new Zs["b"]("writer-merge-no-element-before: Node before merge position must be an element.", this) }
                                    if (!(n instanceof bu)) { throw new Zs["b"]("writer-merge-no-element-after: Node after merge position must be an element.", this) }
                                    if (!t.root.document) { this._mergeDetached(t) } else { this._merge(t) }
                                }
                                createPositionFromPath(t, e, n) { return this.model.createPositionFromPath(t, e, n) }
                                createPositionAt(t, e) { return this.model.createPositionAt(t, e) }
                                createPositionAfter(t) { return this.model.createPositionAfter(t) }
                                createPositionBefore(t) { return this.model.createPositionBefore(t) }
                                createRange(t, e) { return this.model.createRange(t, e) }
                                createRangeIn(t) { return this.model.createRangeIn(t) }
                                createRangeOn(t) { return this.model.createRangeOn(t) }
                                createSelection(t, e, n) { return this.model.createSelection(t, e, n) }
                                _mergeDetached(t) {
                                    const e = t.nodeBefore;
                                    const n = t.nodeAfter;
                                    this.move(Au._createIn(n), xu._createAt(e, "end"));
                                    this.remove(n)
                                }
                                _merge(t) {
                                    const e = xu._createAt(t.nodeBefore, "end");
                                    const n = xu._createAt(t.nodeAfter, 0);
                                    const i = t.root.document.graveyard;
                                    const o = new xu(i, [0]);
                                    const s = t.root.document.version;
                                    const r = new Wf(n, t.nodeAfter.maxOffset, e, o, s);
                                    this.batch.addOperation(r);
                                    this.model.applyOperation(r)
                                }
                                rename(t, e) {
                                    this._assertWriterUsedCorrectly();
                                    if (!(t instanceof bu)) { throw new Zs["b"]("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.", this) }
                                    const n = t.root.document ? t.root.document.version : null;
                                    const i = new Uf(xu._createBefore(t), t.name, e, n);
                                    this.batch.addOperation(i);
                                    this.model.applyOperation(i)
                                }
                                split(t, e) {
                                    this._assertWriterUsedCorrectly();
                                    let n = t.parent;
                                    if (!n.parent) { throw new Zs["b"]("writer-split-element-no-parent: Element with no parent can not be split.", this) }
                                    if (!e) { e = n.parent }
                                    if (!t.parent.getAncestors({ includeSelf: true }).includes(e)) { throw new Zs["b"]("writer-split-invalid-limit-element: Limit element is not a position ancestor.", this) }
                                    let i, o;
                                    do {
                                        const e = n.root.document ? n.root.document.version : null;
                                        const s = n.maxOffset - t.offset;
                                        const r = new $f(t, s, null, e);
                                        this.batch.addOperation(r);
                                        this.model.applyOperation(r);
                                        if (!i && !o) {
                                            i = n;
                                            o = t.parent.nextSibling
                                        }
                                        t = this.createPositionAfter(t.parent);
                                        n = t.parent
                                    } while (n !== e);
                                    return { position: t, range: new Au(xu._createAt(i, "end"), xu._createAt(o, 0)) }
                                }
                                wrap(t, e) {
                                    this._assertWriterUsedCorrectly();
                                    if (!t.isFlat) { throw new Zs["b"]("writer-wrap-range-not-flat: Range to wrap is not flat.", this) }
                                    const n = e instanceof bu ? e : new bu(e);
                                    if (n.childCount > 0) { throw new Zs["b"]("writer-wrap-element-not-empty: Element to wrap with is not empty.", this) }
                                    if (n.parent !== null) { throw new Zs["b"]("writer-wrap-element-attached: Element to wrap with is already attached to tree model.", this) }
                                    this.insert(n, t.start);
                                    const i = new Au(t.start.getShiftedBy(1), t.end.getShiftedBy(1));
                                    this.move(i, xu._createAt(n, 0))
                                }
                                unwrap(t) {
                                    this._assertWriterUsedCorrectly();
                                    if (t.parent === null) { throw new Zs["b"]("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.", this) }
                                    this.move(Au._createIn(t), this.createPositionAfter(t));
                                    this.remove(t)
                                }
                                addMarker(t, e) {
                                    this._assertWriterUsedCorrectly();
                                    if (!e || typeof e.usingOperation != "boolean") { throw new Zs["b"]("writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.", this) }
                                    const n = e.usingOperation;
                                    const i = e.range;
                                    const o = e.affectsData === undefined ? false : e.affectsData;
                                    if (this.model.markers.has(t)) { throw new Zs["b"]("writer-addMarker-marker-exists: Marker with provided name already exists.", this) }
                                    if (!i) { throw new Zs["b"]("writer-addMarker-no-range: Range parameter is required when adding a new marker.", this) }
                                    if (!n) { return this.model.markers._set(t, i, n, o) }
                                    Jf(this, t, null, i, o);
                                    return this.model.markers.get(t)
                                }
                                updateMarker(t, e) {
                                    this._assertWriterUsedCorrectly();
                                    const n = typeof t == "string" ? t : t.name;
                                    const i = this.model.markers.get(n);
                                    if (!i) { throw new Zs["b"]("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.", this) }
                                    if (!e) { this.model.markers._refresh(i); return }
                                    const o = typeof e.usingOperation == "boolean";
                                    const s = typeof e.affectsData == "boolean";
                                    const r = s ? e.affectsData : i.affectsData;
                                    if (!o && !e.range && !s) { throw new Zs["b"]("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.", this) }
                                    const a = i.getRange();
                                    const c = e.range ? e.range : a;
                                    if (o && e.usingOperation !== i.managedUsingOperations) {
                                        if (e.usingOperation) { Jf(this, n, null, c, r) } else {
                                            Jf(this, n, a, null, r);
                                            this.model.markers._set(n, c, undefined, r)
                                        }
                                        return
                                    }
                                    if (i.managedUsingOperations) { Jf(this, n, a, c, r) } else { this.model.markers._set(n, c, undefined, r) }
                                }
                                removeMarker(t) {
                                    this._assertWriterUsedCorrectly();
                                    const e = typeof t == "string" ? t : t.name;
                                    if (!this.model.markers.has(e)) { throw new Zs["b"]("writer-removeMarker-no-marker: Trying to remove marker which does not exist.", this) }
                                    const n = this.model.markers.get(e);
                                    if (!n.managedUsingOperations) { this.model.markers._remove(e); return }
                                    const i = n.getRange();
                                    Jf(this, e, i, null, n.affectsData)
                                }
                                setSelection(t, e, n) {
                                    this._assertWriterUsedCorrectly();
                                    this.model.document.selection._setTo(t, e, n)
                                }
                                setSelectionFocus(t, e) {
                                    this._assertWriterUsedCorrectly();
                                    this.model.document.selection._setFocus(t, e)
                                }
                                setSelectionAttribute(t, e) { this._assertWriterUsedCorrectly(); if (typeof t === "string") { this._setSelectionAttribute(t, e) } else { for (const [e, n] of hu(t)) { this._setSelectionAttribute(e, n) } } }
                                removeSelectionAttribute(t) { this._assertWriterUsedCorrectly(); if (typeof t === "string") { this._removeSelectionAttribute(t) } else { for (const e of t) { this._removeSelectionAttribute(e) } } }
                                overrideSelectionGravity() { return this.model.document.selection._overrideGravity() }
                                restoreSelectionGravity(t) { this.model.document.selection._restoreGravity(t) }
                                _setSelectionAttribute(t, e) {
                                    const n = this.model.document.selection;
                                    if (n.isCollapsed && n.anchor.parent.isEmpty) {
                                        const i = Fu._getStoreAttributeKey(t);
                                        this.setAttribute(i, e, n.anchor.parent)
                                    }
                                    n._setAttribute(t, e)
                                }
                                _removeSelectionAttribute(t) {
                                    const e = this.model.document.selection;
                                    if (e.isCollapsed && e.anchor.parent.isEmpty) {
                                        const n = Fu._getStoreAttributeKey(t);
                                        this.removeAttribute(n, e.anchor.parent)
                                    }
                                    e._removeAttribute(t)
                                }
                                _assertWriterUsedCorrectly() { if (this.model._currentWriter !== this) { throw new Zs["b"]("writer-incorrect-use: Trying to use a writer outside the change() block.", this) } }
                                _addOperationForAffectedMarkers(t, e) {
                                    for (const n of this.model.markers) {
                                        if (!n.managedUsingOperations) { continue }
                                        const i = n.getRange();
                                        let o = false;
                                        if (t == "move") { o = e.containsPosition(i.start) || e.start.isEqual(i.start) || e.containsPosition(i.end) || e.end.isEqual(i.end) } else {
                                            const t = e.nodeBefore;
                                            const n = e.nodeAfter;
                                            const s = i.start.parent == t && i.start.isAtEnd;
                                            const r = i.end.parent == n && i.end.offset == 0;
                                            const a = i.end.nodeAfter == n;
                                            const c = i.start.nodeAfter == n;
                                            o = s || r || a || c
                                        }
                                        if (o) { this.updateMarker(n.name, { range: i }) }
                                    }
                                }
                            }

                            function Qf(t, e, n, i) {
                                const o = t.model;
                                const s = o.document;
                                let r = i.start;
                                let a;
                                let c;
                                let l;
                                for (const t of i.getWalker({ shallow: true })) {
                                    l = t.item.getAttribute(e);
                                    if (a && c != l) {
                                        if (c != n) { d() }
                                        r = a
                                    }
                                    a = t.nextPosition;
                                    c = l
                                }
                                if (a instanceof xu && a != r && c != n) { d() }

                                function d() {
                                    const i = new Au(r, a);
                                    const l = i.root.document ? s.version : null;
                                    const d = new Vf(i, e, c, n, l);
                                    t.batch.addOperation(d);
                                    o.applyOperation(d)
                                }
                            }

                            function Kf(t, e, n, i) {
                                const o = t.model;
                                const s = o.document;
                                const r = i.getAttribute(e);
                                let a, c;
                                if (r != n) {
                                    const l = i.root === i;
                                    if (l) {
                                        const t = i.document ? s.version : null;
                                        c = new qf(i, e, r, n, t)
                                    } else {
                                        a = new Au(xu._createBefore(i), t.createPositionAfter(i));
                                        const o = a.root.document ? s.version : null;
                                        c = new Vf(a, e, r, n, o)
                                    }
                                    t.batch.addOperation(c);
                                    o.applyOperation(c)
                                }
                            }

                            function Jf(t, e, n, i, o) {
                                const s = t.model;
                                const r = s.document;
                                const a = new Hf(e, n, i, s.markers, o, r.version);
                                t.batch.addOperation(a);
                                s.applyOperation(a)
                            }

                            function Zf(t, e, n, i) {
                                let o;
                                if (t.root.document) {
                                    const n = i.document;
                                    const s = new xu(n.graveyard, [0]);
                                    o = new Bf(t, e, s, n.version)
                                } else { o = new jf(t, e) }
                                n.addOperation(o);
                                i.applyOperation(o)
                            }

                            function Xf(t, e) { if (t === e) { return true } if (t instanceof Yf && e instanceof Yf) { return true } return false }
                            class tg {
                                constructor(t) {
                                    this._markerCollection = t;
                                    this._changesInElement = new Map;
                                    this._elementSnapshots = new Map;
                                    this._changedMarkers = new Map;
                                    this._changeCount = 0;
                                    this._cachedChanges = null;
                                    this._cachedChangesWithGraveyard = null
                                }
                                get isEmpty() { return this._changesInElement.size == 0 && this._changedMarkers.size == 0 }
                                refreshItem(t) {
                                    if (this._isInInsertedElement(t.parent)) { return }
                                    this._markRemove(t.parent, t.startOffset, t.offsetSize);
                                    this._markInsert(t.parent, t.startOffset, t.offsetSize);
                                    const e = Au._createOn(t);
                                    for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
                                        const e = t.getRange();
                                        this.bufferMarkerChange(t.name, e, e, t.affectsData)
                                    }
                                    this._cachedChanges = null
                                }
                                bufferOperation(t) {
                                    switch (t.type) {
                                        case "insert":
                                            {
                                                if (this._isInInsertedElement(t.position.parent)) { return }
                                                this._markInsert(t.position.parent, t.position.offset, t.nodes.maxOffset);
                                                break
                                            }
                                        case "addAttribute":
                                        case "removeAttribute":
                                        case "changeAttribute":
                                            {
                                                for (const e of t.range.getItems({ shallow: true })) {
                                                    if (this._isInInsertedElement(e.parent)) { continue }
                                                    this._markAttribute(e)
                                                }
                                                break
                                            }
                                        case "remove":
                                        case "move":
                                        case "reinsert":
                                            { if (t.sourcePosition.isEqual(t.targetPosition) || t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition)) { return } const e = this._isInInsertedElement(t.sourcePosition.parent); const n = this._isInInsertedElement(t.targetPosition.parent); if (!e) { this._markRemove(t.sourcePosition.parent, t.sourcePosition.offset, t.howMany) } if (!n) { this._markInsert(t.targetPosition.parent, t.getMovedRangeStart().offset, t.howMany) } break }
                                        case "rename":
                                            {
                                                if (this._isInInsertedElement(t.position.parent)) { return }
                                                this._markRemove(t.position.parent, t.position.offset, 1);this._markInsert(t.position.parent, t.position.offset, 1);
                                                const e = Au._createFromPositionAndShift(t.position, 1);
                                                for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
                                                    const e = t.getRange();
                                                    this.bufferMarkerChange(t.name, e, e, t.affectsData)
                                                }
                                                break
                                            }
                                        case "split":
                                            { const e = t.splitPosition.parent; if (!this._isInInsertedElement(e)) { this._markRemove(e, t.splitPosition.offset, t.howMany) } if (!this._isInInsertedElement(t.insertionPosition.parent)) { this._markInsert(t.insertionPosition.parent, t.insertionPosition.offset, 1) } if (t.graveyardPosition) { this._markRemove(t.graveyardPosition.parent, t.graveyardPosition.offset, 1) } break }
                                        case "merge":
                                            { const e = t.sourcePosition.parent; if (!this._isInInsertedElement(e.parent)) { this._markRemove(e.parent, e.startOffset, 1) } const n = t.graveyardPosition.parent;this._markInsert(n, t.graveyardPosition.offset, 1); const i = t.targetPosition.parent; if (!this._isInInsertedElement(i)) { this._markInsert(i, t.targetPosition.offset, e.maxOffset) } break }
                                    }
                                    this._cachedChanges = null
                                }
                                bufferMarkerChange(t, e, n, i) {
                                    const o = this._changedMarkers.get(t);
                                    if (!o) { this._changedMarkers.set(t, { oldRange: e, newRange: n, affectsData: i }) } else {
                                        o.newRange = n;
                                        o.affectsData = i;
                                        if (o.oldRange == null && o.newRange == null) { this._changedMarkers.delete(t) }
                                    }
                                }
                                getMarkersToRemove() { const t = []; for (const [e, n] of this._changedMarkers) { if (n.oldRange != null) { t.push({ name: e, range: n.oldRange }) } } return t }
                                getMarkersToAdd() { const t = []; for (const [e, n] of this._changedMarkers) { if (n.newRange != null) { t.push({ name: e, range: n.newRange }) } } return t }
                                getChangedMarkers() { return Array.from(this._changedMarkers).map(t => ({ name: t[0], data: { oldRange: t[1].oldRange, newRange: t[1].newRange } })) }
                                hasDataChanges() { for (const [, t] of this._changedMarkers) { if (t.affectsData) { return true } } return this._changesInElement.size > 0 }
                                getChanges(t = { includeChangesInGraveyard: false }) {
                                    if (this._cachedChanges) { if (t.includeChangesInGraveyard) { return this._cachedChangesWithGraveyard.slice() } else { return this._cachedChanges.slice() } }
                                    const e = [];
                                    for (const t of this._changesInElement.keys()) {
                                        const n = this._changesInElement.get(t).sort((t, e) => { if (t.offset === e.offset) { if (t.type != e.type) { return t.type == "remove" ? -1 : 1 } return 0 } return t.offset < e.offset ? -1 : 1 });
                                        const i = this._elementSnapshots.get(t);
                                        const o = eg(t.getChildren());
                                        const s = ng(i.length, n);
                                        let r = 0;
                                        let a = 0;
                                        for (const n of s) {
                                            if (n === "i") {
                                                e.push(this._getInsertDiff(t, r, o[r].name));
                                                r++
                                            } else if (n === "r") {
                                                e.push(this._getRemoveDiff(t, r, i[a].name));
                                                a++
                                            } else if (n === "a") {
                                                const n = o[r].attributes;
                                                const s = i[a].attributes;
                                                let c;
                                                if (o[r].name == "$text") { c = new Au(xu._createAt(t, r), xu._createAt(t, r + 1)) } else {
                                                    const e = t.offsetToIndex(r);
                                                    c = new Au(xu._createAt(t, r), xu._createAt(t.getChild(e), 0))
                                                }
                                                e.push(...this._getAttributesDiff(c, s, n));
                                                r++;
                                                a++
                                            } else {
                                                r++;
                                                a++
                                            }
                                        }
                                    }
                                    e.sort((t, e) => { if (t.position.root != e.position.root) { return t.position.root.rootName < e.position.root.rootName ? -1 : 1 } if (t.position.isEqual(e.position)) { return t.changeCount - e.changeCount } return t.position.isBefore(e.position) ? -1 : 1 });
                                    for (let t = 1; t < e.length; t++) {
                                        const n = e[t - 1];
                                        const i = e[t];
                                        const o = n.type == "remove" && i.type == "remove" && n.name == "$text" && i.name == "$text" && n.position.isEqual(i.position);
                                        const s = n.type == "insert" && i.type == "insert" && n.name == "$text" && i.name == "$text" && n.position.parent == i.position.parent && n.position.offset + n.length == i.position.offset;
                                        const r = n.type == "attribute" && i.type == "attribute" && n.position.parent == i.position.parent && n.range.isFlat && i.range.isFlat && n.position.offset + n.length == i.position.offset && n.attributeKey == i.attributeKey && n.attributeOldValue == i.attributeOldValue && n.attributeNewValue == i.attributeNewValue;
                                        if (o || s || r) {
                                            e[t - 1].length++;
                                            if (r) { e[t - 1].range.end = e[t - 1].range.end.getShiftedBy(1) }
                                            e.splice(t, 1);
                                            t--
                                        }
                                    }
                                    for (const t of e) {
                                        delete t.changeCount;
                                        if (t.type == "attribute") {
                                            delete t.position;
                                            delete t.length
                                        }
                                    }
                                    this._changeCount = 0;
                                    this._cachedChangesWithGraveyard = e.slice();
                                    this._cachedChanges = e.slice().filter(ig);
                                    if (t.includeChangesInGraveyard) { return this._cachedChangesWithGraveyard } else { return this._cachedChanges }
                                }
                                reset() {
                                    this._changesInElement.clear();
                                    this._elementSnapshots.clear();
                                    this._changedMarkers.clear();
                                    this._cachedChanges = null
                                }
                                _markInsert(t, e, n) {
                                    const i = { type: "insert", offset: e, howMany: n, count: this._changeCount++ };
                                    this._markChange(t, i)
                                }
                                _markRemove(t, e, n) {
                                    const i = { type: "remove", offset: e, howMany: n, count: this._changeCount++ };
                                    this._markChange(t, i);
                                    this._removeAllNestedChanges(t, e, n)
                                }
                                _markAttribute(t) {
                                    const e = { type: "attribute", offset: t.startOffset, howMany: t.offsetSize, count: this._changeCount++ };
                                    this._markChange(t.parent, e)
                                }
                                _markChange(t, e) {
                                    this._makeSnapshot(t);
                                    const n = this._getChangesForElement(t);
                                    this._handleChange(e, n);
                                    n.push(e);
                                    for (let t = 0; t < n.length; t++) {
                                        if (n[t].howMany < 1) {
                                            n.splice(t, 1);
                                            t--
                                        }
                                    }
                                }
                                _getChangesForElement(t) {
                                    let e;
                                    if (this._changesInElement.has(t)) { e = this._changesInElement.get(t) } else {
                                        e = [];
                                        this._changesInElement.set(t, e)
                                    }
                                    return e
                                }
                                _makeSnapshot(t) { if (!this._elementSnapshots.has(t)) { this._elementSnapshots.set(t, eg(t.getChildren())) } }
                                _handleChange(t, e) {
                                    t.nodesToHandle = t.howMany;
                                    for (const n of e) {
                                        const i = t.offset + t.howMany;
                                        const o = n.offset + n.howMany;
                                        if (t.type == "insert") {
                                            if (n.type == "insert") {
                                                if (t.offset <= n.offset) { n.offset += t.howMany } else if (t.offset < o) {
                                                    n.howMany += t.nodesToHandle;
                                                    t.nodesToHandle = 0
                                                }
                                            }
                                            if (n.type == "remove") { if (t.offset < n.offset) { n.offset += t.howMany } }
                                            if (n.type == "attribute") {
                                                if (t.offset <= n.offset) { n.offset += t.howMany } else if (t.offset < o) {
                                                    const o = n.howMany;
                                                    n.howMany = t.offset - n.offset;
                                                    e.unshift({ type: "attribute", offset: i, howMany: o - n.howMany, count: this._changeCount++ })
                                                }
                                            }
                                        }
                                        if (t.type == "remove") {
                                            if (n.type == "insert") {
                                                if (i <= n.offset) { n.offset -= t.howMany } else if (i <= o) {
                                                    if (t.offset < n.offset) {
                                                        const e = i - n.offset;
                                                        n.offset = t.offset;
                                                        n.howMany -= e;
                                                        t.nodesToHandle -= e
                                                    } else {
                                                        n.howMany -= t.nodesToHandle;
                                                        t.nodesToHandle = 0
                                                    }
                                                } else {
                                                    if (t.offset <= n.offset) {
                                                        t.nodesToHandle -= n.howMany;
                                                        n.howMany = 0
                                                    } else if (t.offset < o) {
                                                        const e = o - t.offset;
                                                        n.howMany -= e;
                                                        t.nodesToHandle -= e
                                                    }
                                                }
                                            }
                                            if (n.type == "remove") {
                                                if (i <= n.offset) { n.offset -= t.howMany } else if (t.offset < n.offset) {
                                                    t.nodesToHandle += n.howMany;
                                                    n.howMany = 0
                                                }
                                            }
                                            if (n.type == "attribute") {
                                                if (i <= n.offset) { n.offset -= t.howMany } else if (t.offset < n.offset) {
                                                    const e = i - n.offset;
                                                    n.offset = t.offset;
                                                    n.howMany -= e
                                                } else if (t.offset < o) {
                                                    if (i <= o) {
                                                        const i = n.howMany;
                                                        n.howMany = t.offset - n.offset;
                                                        const o = i - n.howMany - t.nodesToHandle;
                                                        e.unshift({ type: "attribute", offset: t.offset, howMany: o, count: this._changeCount++ })
                                                    } else { n.howMany -= o - t.offset }
                                                }
                                            }
                                        }
                                        if (t.type == "attribute") {
                                            if (n.type == "insert") {
                                                if (t.offset < n.offset && i > n.offset) {
                                                    if (i > o) {
                                                        const t = { type: "attribute", offset: o, howMany: i - o, count: this._changeCount++ };
                                                        this._handleChange(t, e);
                                                        e.push(t)
                                                    }
                                                    t.nodesToHandle = n.offset - t.offset;
                                                    t.howMany = t.nodesToHandle
                                                } else if (t.offset >= n.offset && t.offset < o) {
                                                    if (i > o) {
                                                        t.nodesToHandle = i - o;
                                                        t.offset = o
                                                    } else { t.nodesToHandle = 0 }
                                                }
                                            }
                                            if (n.type == "remove") {
                                                if (t.offset < n.offset && i > n.offset) {
                                                    const o = { type: "attribute", offset: n.offset, howMany: i - n.offset, count: this._changeCount++ };
                                                    this._handleChange(o, e);
                                                    e.push(o);
                                                    t.nodesToHandle = n.offset - t.offset;
                                                    t.howMany = t.nodesToHandle
                                                }
                                            }
                                            if (n.type == "attribute") {
                                                if (t.offset >= n.offset && i <= o) {
                                                    t.nodesToHandle = 0;
                                                    t.howMany = 0;
                                                    t.offset = 0
                                                } else if (t.offset <= n.offset && i >= o) { n.howMany = 0 }
                                            }
                                        }
                                    }
                                    t.howMany = t.nodesToHandle;
                                    delete t.nodesToHandle
                                }
                                _getInsertDiff(t, e, n) { return { type: "insert", position: xu._createAt(t, e), name: n, length: 1, changeCount: this._changeCount++ } }
                                _getRemoveDiff(t, e, n) { return { type: "remove", position: xu._createAt(t, e), name: n, length: 1, changeCount: this._changeCount++ } }
                                _getAttributesDiff(t, e, n) {
                                    const i = [];
                                    n = new Map(n);
                                    for (const [o, s] of e) {
                                        const e = n.has(o) ? n.get(o) : null;
                                        if (e !== s) { i.push({ type: "attribute", position: t.start, range: t.clone(), length: 1, attributeKey: o, attributeOldValue: s, attributeNewValue: e, changeCount: this._changeCount++ }) }
                                        n.delete(o)
                                    }
                                    for (const [e, o] of n) { i.push({ type: "attribute", position: t.start, range: t.clone(), length: 1, attributeKey: e, attributeOldValue: null, attributeNewValue: o, changeCount: this._changeCount++ }) }
                                    return i
                                }
                                _isInInsertedElement(t) { const e = t.parent; if (!e) { return false } const n = this._changesInElement.get(e); const i = t.startOffset; if (n) { for (const t of n) { if (t.type == "insert" && i >= t.offset && i < t.offset + t.howMany) { return true } } } return this._isInInsertedElement(e) }
                                _removeAllNestedChanges(t, e, n) {
                                    const i = new Au(xu._createAt(t, e), xu._createAt(t, e + n));
                                    for (const t of i.getItems({ shallow: true })) {
                                        if (t.is("element")) {
                                            this._elementSnapshots.delete(t);
                                            this._changesInElement.delete(t);
                                            this._removeAllNestedChanges(t, 0, t.maxOffset)
                                        }
                                    }
                                }
                            }

                            function eg(t) { const e = []; for (const n of t) { if (n.is("text")) { for (let t = 0; t < n.data.length; t++) { e.push({ name: "$text", attributes: new Map(n.getAttributes()) }) } } else { e.push({ name: n.name, attributes: new Map(n.getAttributes()) }) } } return e }

                            function ng(t, e) {
                                const n = [];
                                let i = 0;
                                let o = 0;
                                for (const t of e) {
                                    if (t.offset > i) {
                                        for (let e = 0; e < t.offset - i; e++) { n.push("e") }
                                        o += t.offset - i
                                    }
                                    if (t.type == "insert") {
                                        for (let e = 0; e < t.howMany; e++) { n.push("i") }
                                        i = t.offset + t.howMany
                                    } else if (t.type == "remove") {
                                        for (let e = 0; e < t.howMany; e++) { n.push("r") }
                                        i = t.offset;
                                        o += t.howMany
                                    } else {
                                        n.push(...
                                            "a".repeat(t.howMany).split(""));
                                        i = t.offset + t.howMany;
                                        o += t.howMany
                                    }
                                }
                                if (o < t) { for (let e = 0; e < t - o - i; e++) { n.push("e") } }
                                return n
                            }

                            function ig(t) { const e = t.position && t.position.root.rootName == "$graveyard"; const n = t.range && t.range.root.rootName == "$graveyard"; return !e && !n }
                            class og {
                                constructor() {
                                    this._operations = [];
                                    this._undoPairs = new Map;
                                    this._undoneOperations = new Set
                                }
                                addOperation(t) {
                                    if (this._operations.includes(t)) { return }
                                    this._operations.push(t)
                                }
                                getOperations(t = 0, e = Number.POSITIVE_INFINITY) { if (t < 0) { return [] } return this._operations.slice(t, e) }
                                getOperation(t) { return this._operations[t] }
                                setOperationAsUndone(t, e) {
                                    this._undoPairs.set(e, t);
                                    this._undoneOperations.add(t)
                                }
                                isUndoingOperation(t) { return this._undoPairs.has(t) }
                                isUndoneOperation(t) { return this._undoneOperations.has(t) }
                                getUndoneOperation(t) { return this._undoPairs.get(t) }
                            }

                            function sg(t) { return !!t && t.length == 1 && /[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t) }

                            function rg(t) { return !!t && t.length == 1 && /[\ud800-\udbff]/.test(t) }

                            function ag(t) { return !!t && t.length == 1 && /[\udc00-\udfff]/.test(t) }

                            function cg(t, e) { return rg(t.charAt(e - 1)) && ag(t.charAt(e)) }

                            function lg(t, e) { return sg(t.charAt(e)) }
                            const dg = "$graveyard";
                            class ug {
                                constructor(t) {
                                    this.model = t;
                                    this.version = 0;
                                    this.history = new og(this);
                                    this.selection = new Fu(this);
                                    this.roots = new Fa({ idProperty: "rootName" });
                                    this.differ = new tg(t.markers);
                                    this._postFixers = new Set;
                                    this._hasSelectionChangedFromTheLastChangeBlock = false;
                                    this.createRoot("$root", dg);
                                    this.listenTo(t, "applyOperation", (t, e) => { const n = e[0]; if (n.isDocumentOperation && n.baseVersion !== this.version) { throw new Zs["b"]("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.", this, { operation: n }) } }, { priority: "highest" });
                                    this.listenTo(t, "applyOperation", (t, e) => { const n = e[0]; if (n.isDocumentOperation) { this.differ.bufferOperation(n) } }, { priority: "high" });
                                    this.listenTo(t, "applyOperation", (t, e) => {
                                        const n = e[0];
                                        if (n.isDocumentOperation) {
                                            this.version++;
                                            this.history.addOperation(n)
                                        }
                                    }, { priority: "low" });
                                    this.listenTo(this.selection, "change", () => { this._hasSelectionChangedFromTheLastChangeBlock = true });
                                    this.listenTo(t.markers, "update", (t, e, n, i) => { this.differ.bufferMarkerChange(e.name, n, i, e.affectsData); if (n === null) { e.on("change", (t, n) => { this.differ.bufferMarkerChange(e.name, n, e.getRange(), e.affectsData) }) } })
                                }
                                get graveyard() { return this.getRoot(dg) }
                                createRoot(t = "$root", e = "main") {
                                    if (this.roots.get(e)) { throw new Zs["b"]("model-document-createRoot-name-exists: Root with specified name already exists.", this, { name: e }) }
                                    const n = new Yf(this, t, e);
                                    this.roots.add(n);
                                    return n
                                }
                                destroy() {
                                    this.selection.destroy();
                                    this.stopListening()
                                }
                                getRoot(t = "main") { return this.roots.get(t) }
                                getRootNames() { return Array.from(this.roots, t => t.rootName).filter(t => t != dg) }
                                registerPostFixer(t) { this._postFixers.add(t) }
                                toJSON() {
                                    const t = Ar(this);
                                    t.selection = "[engine.model.DocumentSelection]";
                                    t.model = "[engine.model.Model]";
                                    return t
                                }
                                _handleChangeBlock(t) {
                                    if (this._hasDocumentChangedFromTheLastChangeBlock()) {
                                        this._callPostFixers(t);
                                        this.selection.refresh();
                                        if (this.differ.hasDataChanges()) { this.fire("change:data", t.batch) } else { this.fire("change", t.batch) }
                                        this.selection.refresh();
                                        this.differ.reset()
                                    }
                                    this._hasSelectionChangedFromTheLastChangeBlock = false
                                }
                                _hasDocumentChangedFromTheLastChangeBlock() { return !this.differ.isEmpty || this._hasSelectionChangedFromTheLastChangeBlock }
                                _getDefaultRoot() { for (const t of this.roots) { if (t !== this.graveyard) { return t } } return this.graveyard }
                                _getDefaultRange() { const t = this._getDefaultRoot(); const e = this.model; const n = e.schema; const i = e.createPositionFromPath(t, [0]); const o = n.getNearestSelectionRange(i); return o || e.createRange(i) }
                                _validateSelectionRange(t) { return hg(t.start) && hg(t.end) }
                                _callPostFixers(t) {
                                    let e = false;
                                    do {
                                        for (const n of this._postFixers) {
                                            this.selection.refresh();
                                            e = n(t);
                                            if (e) { break }
                                        }
                                    } while (e)
                                }
                            }
                            _r(ug, lr);

                            function hg(t) { const e = t.textNode; if (e) { const n = e.data; const i = t.offset - e.startOffset; return !cg(n, i) && !lg(n, i) } return true }
                            class fg {
                                constructor() { this._markers = new Map }[Symbol.iterator]() { return this._markers.values() }
                                has(t) { return this._markers.has(t) }
                                get(t) { return this._markers.get(t) || null }
                                _set(t, e, n = false, i = false) {
                                    const o = t instanceof gg ? t.name : t;
                                    const s = this._markers.get(o);
                                    if (s) {
                                        const t = s.getRange();
                                        let r = false;
                                        if (!t.isEqual(e)) {
                                            s._attachLiveRange(Du.fromRange(e));
                                            r = true
                                        }
                                        if (n != s.managedUsingOperations) {
                                            s._managedUsingOperations = n;
                                            r = true
                                        }
                                        if (typeof i === "boolean" && i != s.affectsData) {
                                            s._affectsData = i;
                                            r = true
                                        }
                                        if (r) { this.fire("update:" + o, s, t, e) }
                                        return s
                                    }
                                    const r = Du.fromRange(e);
                                    const a = new gg(o, r, n, i);
                                    this._markers.set(o, a);
                                    this.fire("update:" + o, a, null, e);
                                    return a
                                }
                                _remove(t) {
                                    const e = t instanceof gg ? t.name : t;
                                    const n = this._markers.get(e);
                                    if (n) {
                                        this._markers.delete(e);
                                        this.fire("update:" + e, n, n.getRange(), null);
                                        this._destroyMarker(n);
                                        return true
                                    }
                                    return false
                                }
                                _refresh(t) {
                                    const e = t instanceof gg ? t.name : t;
                                    const n = this._markers.get(e);
                                    if (!n) { throw new Zs["b"]("markercollection-refresh-marker-not-exists: Marker with provided name does not exists.", this) }
                                    const i = n.getRange();
                                    this.fire("update:" + e, n, i, i, n.managedUsingOperations, n.affectsData)
                                } * getMarkersAtPosition(t) { for (const e of this) { if (e.getRange().containsPosition(t)) { yield e } } } * getMarkersIntersectingRange(t) { for (const e of this) { if (e.getRange().getIntersection(t) !== null) { yield e } } }
                                destroy() {
                                    for (const t of this._markers.values()) { this._destroyMarker(t) }
                                    this._markers = null;
                                    this.stopListening()
                                } * getMarkersGroup(t) { for (const e of this._markers.values()) { if (e.name.startsWith(t + ":")) { yield e } } }
                                _destroyMarker(t) {
                                    t.stopListening();
                                    t._detachLiveRange()
                                }
                            }
                            _r(fg, lr);
                            class gg {
                                constructor(t, e, n, i) {
                                    this.name = t;
                                    this._liveRange = this._attachLiveRange(e);
                                    this._managedUsingOperations = n;
                                    this._affectsData = i
                                }
                                get managedUsingOperations() { if (!this._liveRange) { throw new Zs["b"]("marker-destroyed: Cannot use a destroyed marker instance.", this) } return this._managedUsingOperations }
                                get affectsData() { if (!this._liveRange) { throw new Zs["b"]("marker-destroyed: Cannot use a destroyed marker instance.", this) } return this._affectsData }
                                getStart() { if (!this._liveRange) { throw new Zs["b"]("marker-destroyed: Cannot use a destroyed marker instance.", this) } return this._liveRange.start.clone() }
                                getEnd() { if (!this._liveRange) { throw new Zs["b"]("marker-destroyed: Cannot use a destroyed marker instance.", this) } return this._liveRange.end.clone() }
                                getRange() { if (!this._liveRange) { throw new Zs["b"]("marker-destroyed: Cannot use a destroyed marker instance.", this) } return this._liveRange.toRange() }
                                is(t) { return t == "marker" || t == "model:marker" }
                                _attachLiveRange(t) {
                                    if (this._liveRange) { this._detachLiveRange() }
                                    t.delegate("change:range").to(this);
                                    t.delegate("change:content").to(this);
                                    this._liveRange = t;
                                    return t
                                }
                                _detachLiveRange() {
                                    this._liveRange.stopDelegating("change:range", this);
                                    this._liveRange.stopDelegating("change:content", this);
                                    this._liveRange.detach();
                                    this._liveRange = null
                                }
                            }
                            _r(gg, lr);
                            class mg extends xu {
                                constructor(t, e, n = "toNone") {
                                    super(t, e, n);
                                    if (!this.root.is("rootElement")) { throw new Zs["b"]("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.", t) }
                                    pg.call(this)
                                }
                                detach() { this.stopListening() }
                                is(t) { return t == "livePosition" || t == "model:livePosition" || super.is(t) }
                                toPosition() { return new xu(this.root, this.path.slice(), this.stickiness) }
                                static fromPosition(t, e) { return new this(t.root, t.path.slice(), e ? e : t.stickiness) }
                            }

                            function pg() {
                                this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
                                    const n = e[0];
                                    if (!n.isDocumentOperation) { return }
                                    bg.call(this, n)
                                }, { priority: "low" })
                            }

                            function bg(t) {
                                const e = this.getTransformedByOperation(t);
                                if (!this.isEqual(e)) {
                                    const t = this.toPosition();
                                    this.path = e.path;
                                    this.root = e.root;
                                    this.fire("change", t)
                                }
                            }
                            _r(mg, lr);

                            function wg(t, e, n, i) {
                                return t.change(o => {
                                    let s;
                                    if (!n) { s = t.document.selection } else if (n instanceof Eu || n instanceof Fu) { s = n } else { s = o.createSelection(n, i) }
                                    const r = s.getFirstPosition();
                                    if (!s.isCollapsed) { t.deleteContent(s, { doNotAutoparagraph: true }) }
                                    const a = new kg(t, o, r);
                                    let c;
                                    if (e.is("documentFragment")) { c = e.getChildren() } else { c = [e] }
                                    a.handleNodes(c, { isFirst: true, isLast: true });
                                    const l = a.getSelectionRange();
                                    if (l) { if (s instanceof Fu) { o.setSelection(l) } else { s.setTo(l) } } else {}
                                    const d = a.getAffectedRange() || t.createRange(r);
                                    a.destroy();
                                    return d
                                })
                            }
                            class kg {
                                constructor(t, e, n) {
                                    this.model = t;
                                    this.writer = e;
                                    this.position = n;
                                    this.canMergeWith = new Set([this.position.parent]);
                                    this.schema = t.schema;
                                    this._filterAttributesOf = [];
                                    this._affectedStart = null;
                                    this._affectedEnd = null
                                }
                                handleNodes(t, e) {
                                    t = Array.from(t);
                                    for (let n = 0; n < t.length; n++) {
                                        const i = t[n];
                                        this._handleNode(i, { isFirst: n === 0 && e.isFirst, isLast: n === t.length - 1 && e.isLast })
                                    }
                                    this.schema.removeDisallowedAttributes(this._filterAttributesOf, this.writer);
                                    this._filterAttributesOf = []
                                }
                                getSelectionRange() { if (this.nodeToSelect) { return Au._createOn(this.nodeToSelect) } return this.model.schema.getNearestSelectionRange(this.position) }
                                getAffectedRange() { if (!this._affectedStart) { return null } return new Au(this._affectedStart, this._affectedEnd) }
                                destroy() { if (this._affectedStart) { this._affectedStart.detach() } if (this._affectedEnd) { this._affectedEnd.detach() } }
                                _handleNode(t, e) {
                                    if (this.schema.isObject(t)) { this._handleObject(t, e); return }
                                    const n = this._checkAndSplitToAllowedPosition(t, e);
                                    if (!n) { this._handleDisallowedNode(t, e); return }
                                    this._insert(t);
                                    this._mergeSiblingsOf(t, e)
                                }
                                _handleObject(t, e) { if (this._checkAndSplitToAllowedPosition(t)) { this._insert(t) } else { this._tryAutoparagraphing(t, e) } }
                                _handleDisallowedNode(t, e) { if (t.is("element")) { this.handleNodes(t.getChildren(), e) } else { this._tryAutoparagraphing(t, e) } }
                                _insert(t) {
                                    if (!this.schema.checkChild(this.position, t)) { throw new Zs["b"]("insertcontent-wrong-position: Given node cannot be inserted on the given position.", this, { node: t, position: this.position }) }
                                    const e = mg.fromPosition(this.position, "toNext");
                                    this._setAffectedBoundaries(this.position);
                                    this.writer.insert(t, this.position);
                                    this.position = e.toPosition();
                                    e.detach();
                                    if (this.schema.isObject(t) && !this.schema.checkChild(this.position, "$text")) { this.nodeToSelect = t } else { this.nodeToSelect = null }
                                    this._filterAttributesOf.push(t)
                                }
                                _setAffectedBoundaries(t) {
                                    if (!this._affectedStart) { this._affectedStart = mg.fromPosition(t, "toPrevious") }
                                    if (!this._affectedEnd || this._affectedEnd.isBefore(t)) {
                                        if (this._affectedEnd) { this._affectedEnd.detach() }
                                        this._affectedEnd = mg.fromPosition(t, "toNext")
                                    }
                                }
                                _mergeSiblingsOf(t, e) {
                                    if (!(t instanceof bu)) { return }
                                    const n = this._canMergeLeft(t, e);
                                    const i = this._canMergeRight(t, e);
                                    const o = mg._createBefore(t);
                                    o.stickiness = "toNext";
                                    const s = mg._createAfter(t);
                                    s.stickiness = "toNext";
                                    if (n) {
                                        const t = mg.fromPosition(this.position);
                                        t.stickiness = "toNext";
                                        if (this._affectedStart.isEqual(o)) {
                                            this._affectedStart.detach();
                                            this._affectedStart = mg._createAt(o.nodeBefore, "end", "toPrevious")
                                        }
                                        this.writer.merge(o);
                                        if (o.isEqual(this._affectedEnd) && e.isLast) {
                                            this._affectedEnd.detach();
                                            this._affectedEnd = mg._createAt(o.nodeBefore, "end", "toNext")
                                        }
                                        this.position = t.toPosition();
                                        t.detach()
                                    }
                                    if (i) {
                                        if (!this.position.isEqual(s)) { throw new Zs["b"]("insertcontent-invalid-insertion-position", this) }
                                        this.position = xu._createAt(s.nodeBefore, "end");
                                        const t = mg.fromPosition(this.position, "toPrevious");
                                        if (this._affectedEnd.isEqual(s)) {
                                            this._affectedEnd.detach();
                                            this._affectedEnd = mg._createAt(s.nodeBefore, "end", "toNext")
                                        }
                                        this.writer.merge(s);
                                        if (s.getShiftedBy(-1).isEqual(this._affectedStart) && e.isFirst) {
                                            this._affectedStart.detach();
                                            this._affectedStart = mg._createAt(s.nodeBefore, 0, "toPrevious")
                                        }
                                        this.position = t.toPosition();
                                        t.detach()
                                    }
                                    if (n || i) { this._filterAttributesOf.push(this.position.parent) }
                                    o.detach();
                                    s.detach()
                                }
                                _canMergeLeft(t, e) { const n = t.previousSibling; return e.isFirst && n instanceof bu && this.canMergeWith.has(n) && this.model.schema.checkMerge(n, t) }
                                _canMergeRight(t, e) { const n = t.nextSibling; return e.isLast && n instanceof bu && this.canMergeWith.has(n) && this.model.schema.checkMerge(t, n) }
                                _tryAutoparagraphing(t, e) {
                                    const n = this.writer.createElement("paragraph");
                                    if (this._getAllowedIn(n, this.position.parent) && this.schema.checkChild(n, t)) {
                                        n._appendChild(t);
                                        this._handleNode(n, e)
                                    }
                                }
                                _checkAndSplitToAllowedPosition(t) {
                                    const e = this._getAllowedIn(t, this.position.parent);
                                    if (!e) { return false }
                                    while (e != this.position.parent) {
                                        if (this.schema.isLimit(this.position.parent)) { return false }
                                        if (this.position.isAtStart) {
                                            const t = this.position.parent;
                                            this.position = this.writer.createPositionBefore(t);
                                            if (t.isEmpty && t.parent === e) { this.writer.remove(t) }
                                        } else if (this.position.isAtEnd) { this.position = this.writer.createPositionAfter(this.position.parent) } else {
                                            const t = this.writer.createPositionAfter(this.position.parent);
                                            this._setAffectedBoundaries(this.position);
                                            this.writer.split(this.position);
                                            this.position = t;
                                            this.canMergeWith.add(this.position.nodeAfter)
                                        }
                                    }
                                    return true
                                }
                                _getAllowedIn(t, e) { if (this.schema.checkChild(e, t)) { return e } if (e.parent) { return this._getAllowedIn(t, e.parent) } return null }
                            }

                            function _g(t, e, n = {}) {
                                if (e.isCollapsed) { return }
                                const i = e.getFirstRange();
                                if (i.root.rootName == "$graveyard") { return }
                                const o = t.schema;
                                t.change(t => {
                                    if (!n.doNotResetEntireContent && Tg(o, e)) { Cg(t, e, o); return }
                                    const s = i.start;
                                    const r = mg.fromPosition(i.end, "toNext");
                                    if (!i.start.isTouching(i.end)) { t.remove(i) }
                                    if (!n.leaveUnmerged) {
                                        vg(t, s, r);
                                        o.removeDisallowedAttributes(s.parent.getChildren(), t)
                                    }
                                    Pg(t, e, s);
                                    if (yg(o, s)) { const i = o.getNearestSelectionRange(s); if (n.doNotAutoparagraph && i) { Pg(t, e, i) } else { Ag(t, s, e) } }
                                    r.detach()
                                })
                            }

                            function vg(t, e, n) {
                                const i = e.parent;
                                const o = n.parent;
                                if (i == o) { return }
                                if (t.model.schema.isLimit(i) || t.model.schema.isLimit(o)) { return }
                                if (!xg(e, n, t.model.schema)) { return }
                                e = t.createPositionAfter(i);
                                n = t.createPositionBefore(o);
                                if (!n.isEqual(e)) { t.insert(o, e) }
                                t.merge(e);
                                while (n.parent.isEmpty) {
                                    const e = n.parent;
                                    n = t.createPositionBefore(e);
                                    t.remove(e)
                                }
                                vg(t, e, n)
                            }

                            function yg(t, e) { const n = t.checkChild(e, "$text"); const i = t.checkChild(e, "paragraph"); return !n && i }

                            function xg(t, e, n) { const i = new Au(t, e); for (const t of i.getWalker()) { if (n.isLimit(t.item)) { return false } } return true }

                            function Ag(t, e, n) {
                                const i = t.createElement("paragraph");
                                t.insert(i, e);
                                Pg(t, n, t.createPositionAt(i, 0))
                            }

                            function Cg(t, e) {
                                const n = t.model.schema.getLimitElement(e);
                                t.remove(t.createRangeIn(n));
                                Ag(t, t.createPositionAt(n, 0), e)
                            }

                            function Tg(t, e) { const n = t.getLimitElement(e); if (!e.containsEntireContent(n)) { return false } const i = e.getFirstRange(); if (i.start.parent == i.end.parent) { return false } return t.checkChild(n, "paragraph") }

                            function Pg(t, e, n) { if (e instanceof Fu) { t.setSelection(n) } else { e.setTo(n) } }
                            const Sg = ' ,.?!:;"-()';

                            function Mg(t, e, n = {}) { const i = t.schema; const o = n.direction != "backward"; const s = n.unit ? n.unit : "character"; const r = e.focus; const a = new ku({ boundaries: Og(r, o), singleCharacters: true, direction: o ? "forward" : "backward" }); const c = { walker: a, schema: i, isForward: o, unit: s }; let l; while (l = a.next()) { if (l.done) { return } const n = Eg(c, l.value); if (n) { if (e instanceof Fu) { t.change(t => { t.setSelectionFocus(n) }) } else { e.setFocus(n) } return } } }

                            function Eg(t, e) { if (e.type == "text") { if (t.unit === "word") { return Ng(t.walker, t.isForward) } return Ig(t.walker, t.unit, t.isForward) } if (e.type == (t.isForward ? "elementStart" : "elementEnd")) { if (t.schema.isObject(e.item)) { return xu._createAt(e.item, t.isForward ? "after" : "before") } if (t.schema.checkChild(e.nextPosition, "$text")) { return e.nextPosition } } else { if (t.schema.isLimit(e.item)) { t.walker.skip(() => true); return } if (t.schema.checkChild(e.nextPosition, "$text")) { return e.nextPosition } } }

                            function Ig(t, e) {
                                const n = t.position.textNode;
                                if (n) {
                                    const i = n.data;
                                    let o = t.position.offset - n.startOffset;
                                    while (cg(i, o) || e == "character" && lg(i, o)) {
                                        t.next();
                                        o = t.position.offset - n.startOffset
                                    }
                                }
                                return t.position
                            }

                            function Ng(t, e) {
                                let n = t.position.textNode;
                                if (n) {
                                    let i = t.position.offset - n.startOffset;
                                    while (!Rg(n.data, i, e) && !Lg(n, i, e)) {
                                        t.next();
                                        const o = e ? t.position.nodeAfter : t.position.nodeBefore;
                                        if (o && o.is("text")) {
                                            const i = o.data.charAt(e ? 0 : o.data.length - 1);
                                            if (!Sg.includes(i)) {
                                                t.next();
                                                n = t.position.textNode
                                            }
                                        }
                                        i = t.position.offset - n.startOffset
                                    }
                                }
                                return t.position
                            }

                            function Og(t, e) { const n = t.root; const i = xu._createAt(n, e ? "end" : 0); if (e) { return new Au(t, i) } else { return new Au(i, t) } }

                            function Rg(t, e, n) { const i = e + (n ? 0 : -1); return Sg.includes(t.charAt(i)) }

                            function Lg(t, e, n) { return e === (n ? t.endOffset : 0) }

                            function Dg(t, e) {
                                return t.change(t => {
                                    const n = t.createDocumentFragment();
                                    const i = e.getFirstRange();
                                    if (!i || i.isCollapsed) { return n }
                                    const o = i.start.root;
                                    const s = i.start.getCommonPath(i.end);
                                    const r = o.getNodeByPath(s);
                                    let a;
                                    if (i.start.parent == i.end.parent) { a = i } else { a = t.createRange(t.createPositionAt(r, i.start.path[s.length]), t.createPositionAt(r, i.end.path[s.length] + 1)) }
                                    const c = a.end.offset - a.start.offset;
                                    for (const e of a.getItems({ shallow: true })) { if (e.is("textProxy")) { t.appendText(e.data, e.getAttributes(), n) } else { t.append(e._clone(true), n) } }
                                    if (a != i) {
                                        const e = i._getTransformedByMove(a.start, t.createPositionAt(n, 0), c)[0];
                                        const o = t.createRange(t.createPositionAt(n, 0), e.start);
                                        const s = t.createRange(e.end, t.createPositionAt(n, "end"));
                                        zg(s, t);
                                        zg(o, t)
                                    }
                                    return n
                                })
                            }

                            function zg(t, e) {
                                const n = [];
                                Array.from(t.getItems({ direction: "backward" })).map(t => e.createRangeOn(t)).filter(e => { const n = (e.start.isAfter(t.start) || e.start.isEqual(t.start)) && (e.end.isBefore(t.end) || e.end.isEqual(t.end)); return n }).forEach(t => {
                                    n.push(t.start.parent);
                                    e.remove(t)
                                });
                                n.forEach(t => {
                                    let n = t;
                                    while (n.parent && n.isEmpty) {
                                        const t = e.createRangeOn(n);
                                        n = n.parent;
                                        e.remove(t)
                                    }
                                })
                            }

                            function Vg(t) { t.document.registerPostFixer(e => jg(e, t)) }

                            function jg(t, e) {
                                const n = e.document.selection;
                                const i = e.schema;
                                const o = [];
                                let s = false;
                                for (const t of n.getRanges()) {
                                    const e = Bg(t, i);
                                    if (e) {
                                        o.push(e);
                                        s = true
                                    } else { o.push(t) }
                                }
                                if (s) {
                                    let e = o;
                                    if (o.length > 1) {
                                        const t = o[0].start;
                                        const n = o[o.length - 1].end;
                                        e = [new Au(t, n)]
                                    }
                                    t.setSelection(e, { backward: n.isBackward })
                                }
                            }

                            function Bg(t, e) { if (t.isCollapsed) { return Fg(t, e) } return Hg(t, e) }

                            function Fg(t, e) { const n = t.start; const i = e.getNearestSelectionRange(n); if (!i) { return null } const o = i.start; if (n.isEqual(o)) { return null } if (o.nodeAfter && e.isLimit(o.nodeAfter)) { return new Au(o, xu._createAfter(o.nodeAfter)) } return new Au(o) }

                            function Hg(t, e) { const n = t.start; const i = t.end; const o = e.checkChild(n, "$text"); const s = e.checkChild(i, "$text"); const r = e.getLimitElement(n); const a = e.getLimitElement(i); if (r === a) { if (o && s) { return null } if (qg(n, i, e)) { const t = n.nodeAfter && e.isObject(n.nodeAfter); const o = t ? null : e.getNearestSelectionRange(n, "forward"); const s = i.nodeBefore && e.isObject(i.nodeBefore); const r = s ? null : e.getNearestSelectionRange(i, "backward"); const a = o ? o.start : n; const c = r ? r.start : i; return new Au(a, c) } } const c = r && !r.is("rootElement"); const l = a && !a.is("rootElement"); if (c || l) { const t = n.nodeAfter && i.nodeBefore && n.nodeAfter.parent === i.nodeBefore.parent; const o = c && (!t || !Wg(n.nodeAfter, e)); const s = l && (!t || !Wg(i.nodeBefore, e)); let d = n; let u = i; if (o) { d = xu._createBefore(Ug(r, e)) } if (s) { u = xu._createAfter(Ug(a, e)) } return new Au(d, u) } return null }

                            function Ug(t, e) {
                                let n = t;
                                let i = n;
                                while (e.isLimit(i) && i.parent) {
                                    n = i;
                                    i = i.parent
                                }
                                return n
                            }

                            function qg(t, e, n) { const i = t.nodeAfter && !n.isLimit(t.nodeAfter) || n.checkChild(t, "$text"); const o = e.nodeBefore && !n.isLimit(e.nodeBefore) || n.checkChild(e, "$text"); return i || o }

                            function Wg(t, e) { return t && e.isObject(t) }
                            class $g {
                                constructor() {
                                    this.markers = new fg;
                                    this.document = new ug(this);
                                    this.schema = new Jh;
                                    this._pendingChanges = [];
                                    this._currentWriter = null;
                                    ["insertContent", "deleteContent", "modifySelection", "getSelectedContent", "applyOperation"].forEach(t => this.decorate(t));
                                    this.on("applyOperation", (t, e) => {
                                        const n = e[0];
                                        n._validate()
                                    }, { priority: "highest" });
                                    this.schema.register("$root", { isLimit: true });
                                    this.schema.register("$block", { allowIn: "$root", isBlock: true });
                                    this.schema.register("$text", { allowIn: "$block", isInline: true });
                                    this.schema.register("$clipboardHolder", { allowContentOf: "$root", isLimit: true });
                                    this.schema.extend("$text", { allowIn: "$clipboardHolder" });
                                    this.schema.register("$marker");
                                    this.schema.addChildCheck((t, e) => { if (e.name === "$marker") { return true } });
                                    Vg(this)
                                }
                                change(t) { try { if (this._pendingChanges.length === 0) { this._pendingChanges.push({ batch: new Af, callback: t }); return this._runPendingChanges()[0] } else { return t(this._currentWriter) } } catch (t) { Zs["b"].rethrowUnexpectedError(t, this) } }
                                enqueueChange(t, e) {
                                    try {
                                        if (typeof t === "string") { t = new Af(t) } else if (typeof t == "function") {
                                            e = t;
                                            t = new Af
                                        }
                                        this._pendingChanges.push({ batch: t, callback: e });
                                        if (this._pendingChanges.length == 1) { this._runPendingChanges() }
                                    } catch (t) { Zs["b"].rethrowUnexpectedError(t, this) }
                                }
                                applyOperation(t) { t._execute() }
                                insertContent(t, e, n) { return wg(this, t, e, n) }
                                deleteContent(t, e) { _g(this, t, e) }
                                modifySelection(t, e) { Mg(this, t, e) }
                                getSelectedContent(t) { return Dg(this, t) }
                                hasContent(t, e) { const n = t instanceof bu ? Au._createIn(t) : t; if (n.isCollapsed) { return false } for (const t of this.markers.getMarkersIntersectingRange(n)) { if (t.affectsData) { return true } } const { ignoreWhitespaces: i = false } = e || {}; for (const t of n.getItems()) { if (t.is("textProxy")) { if (!i) { return true } else if (t.data.search(/\S/) !== -1) { return true } } else if (this.schema.isObject(t)) { return true } } return false }
                                createPositionFromPath(t, e, n) { return new xu(t, e, n) }
                                createPositionAt(t, e) { return xu._createAt(t, e) }
                                createPositionAfter(t) { return xu._createAfter(t) }
                                createPositionBefore(t) { return xu._createBefore(t) }
                                createRange(t, e) { return new Au(t, e) }
                                createRangeIn(t) { return Au._createIn(t) }
                                createRangeOn(t) { return Au._createOn(t) }
                                createSelection(t, e, n) { return new Eu(t, e, n) }
                                createBatch(t) { return new Af(t) }
                                destroy() {
                                    this.document.destroy();
                                    this.stopListening()
                                }
                                _runPendingChanges() {
                                    const t = [];
                                    this.fire("_beforeChanges");
                                    while (this._pendingChanges.length) {
                                        const e = this._pendingChanges[0].batch;
                                        this._currentWriter = new Gf(this, e);
                                        const n = this._pendingChanges[0].callback(this._currentWriter);
                                        t.push(n);
                                        this.document._handleChangeBlock(this._currentWriter);
                                        this._pendingChanges.shift();
                                        this._currentWriter = null
                                    }
                                    this.fire("_afterChanges");
                                    return t
                                }
                            }
                            _r($g, ka);
                            class Yg {
                                constructor() { this._listener = Object.create(pl) }
                                listenTo(t) { this._listener.listenTo(t, "keydown", (t, e) => { this._listener.fire("_keydown:" + ac(e), e) }) }
                                set(t, e, n = {}) {
                                    const i = cc(t);
                                    const o = n.priority;
                                    this._listener.listenTo(this._listener, "_keydown:" + i, (t, n) => {
                                        e(n, () => {
                                            n.preventDefault();
                                            n.stopPropagation();
                                            t.stop()
                                        });
                                        t.return = true
                                    }, { priority: o })
                                }
                                press(t) { return !!this._listener.fire("_keydown:" + ac(t), t) }
                                destroy() { this._listener.stopListening() }
                            }
                            class Gg extends Yg {
                                constructor(t) {
                                    super();
                                    this.editor = t
                                }
                                set(t, e, n = {}) {
                                    if (typeof e == "string") {
                                        const t = e;
                                        e = (e, n) => {
                                            this.editor.execute(t);
                                            n()
                                        }
                                    }
                                    super.set(t, e, n)
                                }
                            }
                            class Qg {
                                constructor(t) {
                                    const e = this.constructor.builtinPlugins;
                                    this.config = new Qs(t, this.constructor.defaultConfig);
                                    this.config.define("plugins", e);
                                    this.plugins = new jh(this, e);
                                    this.commands = new Bh;
                                    const n = this.config.get("language") || {};
                                    this.locale = new Yh({ uiLanguage: typeof n === "string" ? n : n.ui, contentLanguage: this.config.get("language.content") });
                                    this.t = this.locale.t;
                                    this.set("state", "initializing");
                                    this.once("ready", () => this.state = "ready", { priority: "high" });
                                    this.once("destroy", () => this.state = "destroyed", { priority: "high" });
                                    this.set("isReadOnly", false);
                                    this.model = new $g;
                                    this.data = new kf(this.model);
                                    this.editing = new Vh(this.model);
                                    this.editing.view.document.bind("isReadOnly").to(this);
                                    this.conversion = new vf([this.editing.downcastDispatcher, this.data.downcastDispatcher], this.data.upcastDispatcher);
                                    this.conversion.addAlias("dataDowncast", this.data.downcastDispatcher);
                                    this.conversion.addAlias("editingDowncast", this.editing.downcastDispatcher);
                                    this.keystrokes = new Gg(this);
                                    this.keystrokes.listenTo(this.editing.view.document)
                                }
                                initPlugins() { const t = this.config; const e = t.get("plugins") || []; const n = t.get("removePlugins") || []; const i = t.get("extraPlugins") || []; return this.plugins.init(e.concat(i), n) }
                                destroy() {
                                    let t = Promise.resolve();
                                    if (this.state == "initializing") { t = new Promise(t => this.once("ready", t)) }
                                    return t.then(() => {
                                        this.fire("destroy");
                                        this.stopListening();
                                        this.commands.destroy()
                                    }).then(() => this.plugins.destroy()).then(() => {
                                        this.model.destroy();
                                        this.data.destroy();
                                        this.editing.destroy();
                                        this.keystrokes.destroy()
                                    })
                                }
                                execute(...t) { try { this.commands.execute(...t) } catch (t) { Zs["b"].rethrowUnexpectedError(t, this) } }
                            }
                            _r(Qg, ka);
                            const Kg = { setData(t) { this.data.set(t) }, getData(t) { return this.data.get(t) } };
                            var Jg = Kg;
                            class Zg {
                                getHtml(t) {
                                    const e = document.implementation.createHTMLDocument("");
                                    const n = e.createElement("div");
                                    n.appendChild(t);
                                    return n.innerHTML
                                }
                            }
                            class Xg {
                                constructor() {
                                    this._domParser = new DOMParser;
                                    this._domConverter = new ll({ blockFillerMode: "nbsp" });
                                    this._htmlWriter = new Zg
                                }
                                toData(t) { const e = this._domConverter.viewToDom(t, document); return this._htmlWriter.getHtml(e) }
                                toView(t) { const e = this._toDom(t); return this._domConverter.domToView(e) }
                                _toDom(t) { const e = this._domParser.parseFromString(t, "text/html"); const n = e.createDocumentFragment(); const i = e.body.childNodes; while (i.length > 0) { n.appendChild(i[0]) } return n }
                            }
                            class tm {
                                constructor(t) {
                                    this.editor = t;
                                    this._components = new Map
                                } * names() { for (const t of this._components.values()) { yield t.originalName } }
                                add(t, e) {
                                    if (this.has(t)) { throw new Zs["b"]("componentfactory-item-exists: The item already exists in the component factory.", this, { name: t }) }
                                    this._components.set(em(t), { callback: e, originalName: t })
                                }
                                create(t) { if (!this.has(t)) { throw new Zs["b"]("componentfactory-item-missing: The required component is not registered in the factory.", this, { name: t }) } return this._components.get(em(t)).callback(this.editor.locale) }
                                has(t) { return this._components.has(em(t)) }
                            }

                            function em(t) { return String(t).toLowerCase() }
                            class nm {
                                constructor() {
                                    this.set("isFocused", false);
                                    this.set("focusedElement", null);
                                    this._elements = new Set;
                                    this._nextEventLoopTimeout = null
                                }
                                add(t) {
                                    if (this._elements.has(t)) { throw new Zs["b"]("focusTracker-add-element-already-exist", this) }
                                    this.listenTo(t, "focus", () => this._focus(t), { useCapture: true });
                                    this.listenTo(t, "blur", () => this._blur(), { useCapture: true });
                                    this._elements.add(t)
                                }
                                remove(t) {
                                    if (t === this.focusedElement) { this._blur(t) }
                                    if (this._elements.has(t)) {
                                        this.stopListening(t);
                                        this._elements.delete(t)
                                    }
                                }
                                destroy() { this.stopListening() }
                                _focus(t) {
                                    clearTimeout(this._nextEventLoopTimeout);
                                    this.focusedElement = t;
                                    this.isFocused = true
                                }
                                _blur() {
                                    clearTimeout(this._nextEventLoopTimeout);
                                    this._nextEventLoopTimeout = setTimeout(() => {
                                        this.focusedElement = null;
                                        this.isFocused = false
                                    }, 0)
                                }
                            }
                            _r(nm, pl);
                            _r(nm, ka);
                            class im {
                                constructor(t) {
                                    this.editor = t;
                                    this.componentFactory = new tm(t);
                                    this.focusTracker = new nm;
                                    this._editableElementsMap = new Map;
                                    this.listenTo(t.editing.view.document, "layoutChanged", () => this.update())
                                }
                                get element() { return null }
                                update() { this.fire("update") }
                                destroy() {
                                    this.stopListening();
                                    this.focusTracker.destroy();
                                    for (const t of this._editableElementsMap.values()) { t.ckeditorInstance = null }
                                    this._editableElementsMap = new Map
                                }
                                setEditableElement(t, e) { this._editableElementsMap.set(t, e); if (!e.ckeditorInstance) { e.ckeditorInstance = this.editor } }
                                getEditableElement(t = "main") { return this._editableElementsMap.get(t) }
                                getEditableElementsNames() { return this._editableElementsMap.keys() }
                                get _editableElements() { console.warn("editor-ui-deprecated-editable-elements: " + "The EditorUI#_editableElements property has been deprecated and will be removed in the near future.", { editorUI: this }); return this._editableElementsMap }
                            }
                            _r(im, lr);

                            function om({ origin: t, originKeystrokeHandler: e, originFocusTracker: n, toolbar: i, beforeFocus: o, afterBlur: s }) {
                                n.add(i.element);
                                e.set("Alt+F10", (t, e) => {
                                    if (n.isFocused && !i.focusTracker.isFocused) {
                                        if (o) { o() }
                                        i.focus();
                                        e()
                                    }
                                });
                                i.keystrokes.set("Esc", (e, n) => {
                                    if (i.focusTracker.isFocused) {
                                        t.focus();
                                        if (s) { s() }
                                        n()
                                    }
                                })
                            }

                            function sm(t) { if (Array.isArray(t)) { return { items: t } } if (!t) { return { items: [] } } return Object.assign({ items: [] }, t) }
                            var rm = n(14);
                            const am = new WeakMap;

                            function cm(t) {
                                const { view: e, element: n, text: i, isDirectHost: o = true } = t;
                                const s = e.document;
                                if (!am.has(s)) {
                                    am.set(s, new Map);
                                    s.registerPostFixer(t => fm(s, t))
                                }
                                am.get(s).set(n, { text: i, isDirectHost: o });
                                e.change(t => fm(s, t))
                            }

                            function lm(t, e) {
                                const n = e.document;
                                t.change(t => {
                                    if (!am.has(n)) { return }
                                    const i = am.get(n);
                                    const o = i.get(e);
                                    t.removeAttribute("data-placeholder", o.hostElement);
                                    um(t, o.hostElement);
                                    i.delete(e)
                                })
                            }

                            function dm(t, e) { if (!e.hasClass("ck-placeholder")) { t.addClass("ck-placeholder", e); return true } return false }

                            function um(t, e) { if (e.hasClass("ck-placeholder")) { t.removeClass("ck-placeholder", e); return true } return false }

                            function hm(t) { const e = t.document; if (!e) { return false } const n = !Array.from(t.getChildren()).some(t => !t.is("uiElement")); if (!e.isFocused && n) { return true } const i = e.selection; const o = i.anchor; if (n && o && o.parent !== t) { return true } return false }

                            function fm(t, e) { const n = am.get(t); let i = false; for (const [t, o] of n) { if (gm(e, t, o)) { i = true } } return i }

                            function gm(t, e, n) {
                                const { text: i, isDirectHost: o } = n;
                                const s = o ? e : mm(e);
                                let r = false;
                                if (!s) { return false }
                                n.hostElement = s;
                                if (s.getAttribute("data-placeholder") !== i) {
                                    t.setAttribute("data-placeholder", i, s);
                                    r = true
                                }
                                if (hm(s)) { if (dm(t, s)) { r = true } } else if (um(t, s)) { r = true }
                                return r
                            }

                            function mm(t) { if (t.childCount === 1) { const e = t.getChild(0); if (e.is("element") && !e.is("uiElement")) { return e } } return null }
                            class pm extends im {
                                constructor(t, e) {
                                    super(t);
                                    this.view = e;
                                    this._toolbarConfig = sm(t.config.get("toolbar"))
                                }
                                init() {
                                    const t = this.editor;
                                    const e = this.view;
                                    const n = t.editing.view;
                                    const i = e.editable;
                                    const o = n.document.getRoot();
                                    e.editable.name = o.rootName;
                                    e.render();
                                    const s = i.element;
                                    this.setEditableElement(i.name, s);
                                    this.focusTracker.add(s);
                                    e.editable.bind("isFocused").to(this.focusTracker);
                                    n.attachDomRoot(s);
                                    this._initPlaceholder();
                                    this._initToolbar();
                                    this.fire("ready")
                                }
                                destroy() {
                                    const t = this.view;
                                    const e = this.editor.editing.view;
                                    e.detachDomRoot(t.editable.name);
                                    t.destroy();
                                    super.destroy()
                                }
                                _initToolbar() {
                                    const t = this.editor;
                                    const e = this.view;
                                    const n = e.toolbar;
                                    n.fillFromConfig(this._toolbarConfig.items, this.componentFactory);
                                    om({ origin: t.editing.view, originFocusTracker: this.focusTracker, originKeystrokeHandler: t.keystrokes, toolbar: n })
                                }
                                _initPlaceholder() { const t = this.editor; const e = t.editing.view; const n = e.document.getRoot(); const i = t.sourceElement; const o = t.config.get("placeholder") || i && i.tagName.toLowerCase() === "textarea" && i.getAttribute("placeholder"); if (o) { cm({ view: e, element: n, text: o, isDirectHost: false }) } }
                            }
                            class bm extends Fa {
                                constructor(t) {
                                    super({ idProperty: "viewUid" });
                                    this.on("add", (t, e, n) => { if (!e.isRendered) { e.render() } if (e.element && this._parentElement) { this._parentElement.insertBefore(e.element, this._parentElement.children[n]) } });
                                    this.on("remove", (t, e) => { if (e.element && this._parentElement) { e.element.remove() } });
                                    this.locale = t;
                                    this._parentElement = null
                                }
                                destroy() { this.map(t => t.destroy()) }
                                setParent(t) { this._parentElement = t }
                                delegate(...t) {
                                    if (!t.length || !wm(t)) { throw new Zs["b"]("ui-viewcollection-delegate-wrong-events: All event names must be strings.", this) }
                                    return {
                                        to: e => {
                                            for (const n of this) { for (const i of t) { n.delegate(i).to(e) } }
                                            this.on("add", (n, i) => { for (const n of t) { i.delegate(n).to(e) } });
                                            this.on("remove", (n, i) => { for (const n of t) { i.stopDelegating(n, e) } })
                                        }
                                    }
                                }
                            }

                            function wm(t) { return t.every(t => typeof t == "string") }
                            const km = "http://www.w3.org/1999/xhtml";
                            class _m {
                                constructor(t) {
                                    Object.assign(this, Im(Em(t)));
                                    this._isRendered = false;
                                    this._revertData = null
                                }
                                render() {
                                    const t = this._renderNode({ intoFragment: true });
                                    this._isRendered = true;
                                    return t
                                }
                                apply(t) {
                                    this._revertData = qm();
                                    this._renderNode({ node: t, isApplying: true, revertData: this._revertData });
                                    return t
                                }
                                revert(t) {
                                    if (!this._revertData) { throw new Zs["b"]("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.", [this, t]) }
                                    this._revertTemplateFromNode(t, this._revertData)
                                } * getViews() {
                                    function* t(e) { if (e.children) { for (const n of e.children) { if (Fm(n)) { yield n } else if (Hm(n)) { yield* t(n) } } } }
                                    yield* t(this)
                                }
                                static bind(t, e) { return { to(n, i) { return new ym({ eventNameOrFunction: n, attribute: n, observable: t, emitter: e, callback: i }) }, if (n, i, o) { return new xm({ observable: t, emitter: e, attribute: n, valueIfTrue: i, callback: o }) } } }
                                static extend(t, e) {
                                    if (t._isRendered) { throw new Zs["b"]("template-extend-render: Attempting to extend a template which has already been rendered.", [this, t]) }
                                    jm(t, Im(Em(e)))
                                }
                                _renderNode(t) { let e; if (t.node) { e = this.tag && this.text } else { e = this.tag ? this.text : !this.text } if (e) { throw new Zs["b"]('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.', this) } if (this.text) { return this._renderText(t) } else { return this._renderElement(t) } }
                                _renderElement(t) {
                                    let e = t.node;
                                    if (!e) { e = t.node = document.createElementNS(this.ns || km, this.tag) }
                                    this._renderAttributes(t);
                                    this._renderElementChildren(t);
                                    this._setUpListeners(t);
                                    return e
                                }
                                _renderText(t) { let e = t.node; if (e) { t.revertData.text = e.textContent } else { e = t.node = document.createTextNode("") } if (Am(this.text)) { this._bindToObservable({ schema: this.text, updater: Pm(e), data: t }) } else { e.textContent = this.text.join("") } return e }
                                _renderAttributes(t) {
                                    let e, n, i, o;
                                    if (!this.attributes) { return }
                                    const s = t.node;
                                    const r = t.revertData;
                                    for (e in this.attributes) {
                                        i = s.getAttribute(e);
                                        n = this.attributes[e];
                                        if (r) { r.attributes[e] = i }
                                        o = ct(n[0]) && n[0].ns ? n[0].ns : null;
                                        if (Am(n)) {
                                            const a = o ? n[0].value : n;
                                            if (r && Wm(e)) { a.unshift(i) }
                                            this._bindToObservable({ schema: a, updater: Sm(s, e, o), data: t })
                                        } else if (e == "style" && typeof n[0] !== "string") { this._renderStyleAttribute(n[0], t) } else {
                                            if (r && i && Wm(e)) { n.unshift(i) }
                                            n = n.map(t => t ? t.value || t : t).reduce((t, e) => t.concat(e), []).reduce(zm, "");
                                            if (!Bm(n)) { s.setAttributeNS(o, e, n) }
                                        }
                                    }
                                }
                                _renderStyleAttribute(t, e) { const n = e.node; for (const i in t) { const o = t[i]; if (Am(o)) { this._bindToObservable({ schema: [o], updater: Mm(n, i), data: e }) } else { n.style[i] = o } } }
                                _renderElementChildren(t) {
                                    const e = t.node;
                                    const n = t.intoFragment ? document.createDocumentFragment() : e;
                                    const i = t.isApplying;
                                    let o = 0;
                                    for (const s of this.children) {
                                        if (Um(s)) { if (!i) { s.setParent(e); for (const t of s) { n.appendChild(t.element) } } } else if (Fm(s)) {
                                            if (!i) {
                                                if (!s.isRendered) { s.render() }
                                                n.appendChild(s.element)
                                            }
                                        } else if (Qc(s)) { n.appendChild(s) } else {
                                            if (i) {
                                                const e = t.revertData;
                                                const i = qm();
                                                e.children.push(i);
                                                s._renderNode({ node: n.childNodes[o++], isApplying: true, revertData: i })
                                            } else { n.appendChild(s.render()) }
                                        }
                                    }
                                    if (t.intoFragment) { e.appendChild(n) }
                                }
                                _setUpListeners(t) { if (!this.eventListeners) { return } for (const e in this.eventListeners) { const n = this.eventListeners[e].map(n => { const [i, o] = e.split("@"); return n.activateDomEventListener(i, o, t) }); if (t.revertData) { t.revertData.bindings.push(n) } } }
                                _bindToObservable({ schema: t, updater: e, data: n }) {
                                    const i = n.revertData;
                                    Tm(t, e, n);
                                    const o = t.filter(t => !Bm(t)).filter(t => t.observable).map(i => i.activateAttributeListener(t, e, n));
                                    if (i) { i.bindings.push(o) }
                                }
                                _revertTemplateFromNode(t, e) { for (const t of e.bindings) { for (const e of t) { e() } } if (e.text) { t.textContent = e.text; return } for (const n in e.attributes) { const i = e.attributes[n]; if (i === null) { t.removeAttribute(n) } else { t.setAttribute(n, i) } } for (let n = 0; n < e.children.length; ++n) { this._revertTemplateFromNode(t.childNodes[n], e.children[n]) } }
                            }
                            _r(_m, lr);
                            class vm {
                                constructor(t) { Object.assign(this, t) }
                                getValue(t) { const e = this.observable[this.attribute]; return this.callback ? this.callback(e, t) : e }
                                activateAttributeListener(t, e, n) {
                                    const i = () => Tm(t, e, n);
                                    this.emitter.listenTo(this.observable, "change:" + this.attribute, i);
                                    return () => { this.emitter.stopListening(this.observable, "change:" + this.attribute, i) }
                                }
                            }
                            class ym extends vm {
                                activateDomEventListener(t, e, n) {
                                    const i = (t, n) => { if (!e || n.target.matches(e)) { if (typeof this.eventNameOrFunction == "function") { this.eventNameOrFunction(n) } else { this.observable.fire(this.eventNameOrFunction, n) } } };
                                    this.emitter.listenTo(n.node, t, i);
                                    return () => { this.emitter.stopListening(n.node, t, i) }
                                }
                            }
                            class xm extends vm { getValue(t) { const e = super.getValue(t); return Bm(e) ? false : this.valueIfTrue || true } }

                            function Am(t) { if (!t) { return false } if (t.value) { t = t.value } if (Array.isArray(t)) { return t.some(Am) } else if (t instanceof vm) { return true } return false }

                            function Cm(t, e) { return t.map(t => { if (t instanceof vm) { return t.getValue(e) } return t }) }

                            function Tm(t, e, { node: n }) { let i = Cm(t, n); if (t.length == 1 && t[0] instanceof xm) { i = i[0] } else { i = i.reduce(zm, "") } if (Bm(i)) { e.remove() } else { e.set(i) } }

                            function Pm(t) { return {set(e) { t.textContent = e }, remove() { t.textContent = "" } } }

                            function Sm(t, e, n) { return {set(i) { t.setAttributeNS(n, e, i) }, remove() { t.removeAttributeNS(n, e) } } }

                            function Mm(t, e) { return {set(n) { t.style[e] = n }, remove() { t.style[e] = null } } }

                            function Em(t) { const e = $s(t, t => { if (t && (t instanceof vm || Hm(t) || Fm(t) || Um(t))) { return t } }); return e }

                            function Im(t) {
                                if (typeof t == "string") { t = Rm(t) } else if (t.text) { Lm(t) }
                                if (t.on) {
                                    t.eventListeners = Om(t.on);
                                    delete t.on
                                }
                                if (!t.text) {
                                    if (t.attributes) { Nm(t.attributes) }
                                    const e = [];
                                    if (t.children) { if (Um(t.children)) { e.push(t.children) } else { for (const n of t.children) { if (Hm(n) || Fm(n) || Qc(n)) { e.push(n) } else { e.push(new _m(n)) } } } }
                                    t.children = e
                                }
                                return t
                            }

                            function Nm(t) {
                                for (const e in t) {
                                    if (t[e].value) { t[e].value = [].concat(t[e].value) }
                                    Dm(t, e)
                                }
                            }

                            function Om(t) { for (const e in t) { Dm(t, e) } return t }

                            function Rm(t) { return { text: [t] } }

                            function Lm(t) { if (!Array.isArray(t.text)) { t.text = [t.text] } }

                            function Dm(t, e) { if (!Array.isArray(t[e])) { t[e] = [t[e]] } }

                            function zm(t, e) { if (Bm(e)) { return t } else if (Bm(t)) { return e } else { return `${t} ${e}` } }

                            function Vm(t, e) { for (const n in e) { if (t[n]) { t[n].push(...e[n]) } else { t[n] = e[n] } } }

                            function jm(t, e) {
                                if (e.attributes) {
                                    if (!t.attributes) { t.attributes = {} }
                                    Vm(t.attributes, e.attributes)
                                }
                                if (e.eventListeners) {
                                    if (!t.eventListeners) { t.eventListeners = {} }
                                    Vm(t.eventListeners, e.eventListeners)
                                }
                                if (e.text) { t.text.push(...e.text) }
                                if (e.children && e.children.length) { if (t.children.length != e.children.length) { throw new Zs["b"]("ui-template-extend-children-mismatch: The number of children in extended definition does not match.", t) } let n = 0; for (const i of e.children) { jm(t.children[n++], i) } }
                            }

                            function Bm(t) { return !t && t !== 0 }

                            function Fm(t) { return t instanceof Ym }

                            function Hm(t) { return t instanceof _m }

                            function Um(t) { return t instanceof bm }

                            function qm() { return { children: [], bindings: [], attributes: {} } }

                            function Wm(t) { return t == "class" || t == "style" }
                            var $m = n(16);
                            class Ym {
                                constructor(t) {
                                    this.element = null;
                                    this.isRendered = false;
                                    this.locale = t;
                                    this.t = t && t.t;
                                    this._viewCollections = new Fa;
                                    this._unboundChildren = this.createCollection();
                                    this._viewCollections.on("add", (e, n) => { n.locale = t });
                                    this.decorate("render")
                                }
                                get bindTemplate() { if (this._bindTemplate) { return this._bindTemplate } return this._bindTemplate = _m.bind(this, this) }
                                createCollection() {
                                    const t = new bm;
                                    this._viewCollections.add(t);
                                    return t
                                }
                                registerChild(t) { if (!Mr(t)) { t = [t] } for (const e of t) { this._unboundChildren.add(e) } }
                                deregisterChild(t) { if (!Mr(t)) { t = [t] } for (const e of t) { this._unboundChildren.remove(e) } }
                                setTemplate(t) { this.template = new _m(t) }
                                extendTemplate(t) { _m.extend(this.template, t) }
                                render() {
                                    if (this.isRendered) { throw new Zs["b"]("ui-view-render-already-rendered: This View has already been rendered.", this) }
                                    if (this.template) {
                                        this.element = this.template.render();
                                        this.registerChild(this.template.getViews())
                                    }
                                    this.isRendered = true
                                }
                                destroy() {
                                    this.stopListening();
                                    this._viewCollections.map(t => t.destroy());
                                    if (this.template && this.template._revertData) { this.template.revert(this.element) }
                                }
                            }
                            _r(Ym, pl);
                            _r(Ym, ka);
                            var Gm = n(18);
                            class Qm extends Ym {
                                constructor(t) {
                                    super(t);
                                    this.body = this.createCollection()
                                }
                                render() {
                                    super.render();
                                    this._renderBodyCollection()
                                }
                                destroy() { this._bodyCollectionContainer.remove(); return super.destroy() }
                                _renderBodyCollection() {
                                    const t = this.locale;
                                    const e = this._bodyCollectionContainer = new _m({ tag: "div", attributes: { class: ["ck", "ck-reset_all", "ck-body", "ck-rounded-corners"], dir: t.uiLanguageDirection }, children: this.body }).render();
                                    document.body.appendChild(e)
                                }
                            }
                            class Km extends Ym {
                                constructor(t, e, n) {
                                    super(t);
                                    this.setTemplate({ tag: "div", attributes: { class: ["ck", "ck-content", "ck-editor__editable", "ck-rounded-corners"], lang: t.contentLanguage, dir: t.contentLanguageDirection } });
                                    this.name = null;
                                    this.set("isFocused", false);
                                    this._editableElement = n;
                                    this._hasExternalElement = !!this._editableElement;
                                    this._editingView = e
                                }
                                render() {
                                    super.render();
                                    if (this._hasExternalElement) { this.template.apply(this.element = this._editableElement) } else { this._editableElement = this.element }
                                    this.on("change:isFocused", () => this._updateIsFocusedClasses());
                                    this._updateIsFocusedClasses()
                                }
                                destroy() {
                                    if (this._hasExternalElement) { this.template.revert(this._editableElement) }
                                    super.destroy()
                                }
                                _updateIsFocusedClasses() {
                                    const t = this._editingView;
                                    if (t.isRenderingInProgress) { n(this) } else { e(this) }

                                    function e(e) {
                                        t.change(n => {
                                            const i = t.document.getRoot(e.name);
                                            n.addClass(e.isFocused ? "ck-focused" : "ck-blurred", i);
                                            n.removeClass(e.isFocused ? "ck-blurred" : "ck-focused", i)
                                        })
                                    }

                                    function n(i) { t.once("change:isRenderingInProgress", (t, o, s) => { if (!s) { e(i) } else { n(i) } }) }
                                }
                            }
                            class Jm extends Km {
                                constructor(t, e, n) {
                                    super(t, e, n);
                                    this.extendTemplate({ attributes: { role: "textbox", class: "ck-editor__editable_inline" } })
                                }
                                render() {
                                    super.render();
                                    const t = this._editingView;
                                    const e = this.t;
                                    t.change(n => {
                                        const i = t.document.getRoot(this.name);
                                        n.setAttribute("aria-label", e("ct", [this.name]), i)
                                    })
                                }
                            }
                            class Zm {
                                constructor(t) {
                                    Object.assign(this, t);
                                    if (t.actions && t.keystrokeHandler) {
                                        for (const e in t.actions) {
                                            let n = t.actions[e];
                                            if (typeof n == "string") { n = [n] }
                                            for (const i of n) {
                                                t.keystrokeHandler.set(i, (t, n) => {
                                                    this[e]();
                                                    n()
                                                })
                                            }
                                        }
                                    }
                                }
                                get first() { return this.focusables.find(Xm) || null }
                                get last() { return this.focusables.filter(Xm).slice(-1)[0] || null }
                                get next() { return this._getFocusableItem(1) }
                                get previous() { return this._getFocusableItem(-1) }
                                get current() {
                                    let t = null;
                                    if (this.focusTracker.focusedElement === null) { return null }
                                    this.focusables.find((e, n) => { const i = e.element === this.focusTracker.focusedElement; if (i) { t = n } return i });
                                    return t
                                }
                                focusFirst() { this._focus(this.first) }
                                focusLast() { this._focus(this.last) }
                                focusNext() { this._focus(this.next) }
                                focusPrevious() { this._focus(this.previous) }
                                _focus(t) { if (t) { t.focus() } }
                                _getFocusableItem(t) {
                                    const e = this.current;
                                    const n = this.focusables.length;
                                    if (!n) { return null }
                                    if (e === null) { return this[t === 1 ? "first" : "last"] }
                                    let i = (e + n + t) % n;
                                    do {
                                        const e = this.focusables.get(i);
                                        if (Xm(e)) { return e }
                                        i = (i + n + t) % n
                                    } while (i !== e);
                                    return null
                                }
                            }

                            function Xm(t) { return !!(t.focus && ol.window.getComputedStyle(t.element).display != "none") }
                            class tp extends Ym {
                                constructor(t) {
                                    super(t);
                                    this.setTemplate({ tag: "span", attributes: { class: ["ck", "ck-toolbar__separator"] } })
                                }
                            }
                            const ep = 100;

                            function np(t) { if (typeof ol.window.ResizeObserver === "function") { return new ol.window.ResizeObserver(t) } else { return new ip(t) } }
                            class ip {
                                constructor(t) {
                                    this._callback = t;
                                    this._elements = new Set;
                                    this._previousRects = new Map;
                                    this._periodicCheckTimeout = null
                                }
                                observe(t) { this._elements.add(t); if (this._elements.size === 1) { this._startPeriodicCheck() } }
                                unobserve(t) {
                                    this._elements.delete(t);
                                    this._previousRects.delete(t);
                                    if (!this._elements.size) { this._stopPeriodicCheck() }
                                }
                                disconnect() { this._elements.forEach(t => this.unobserve(t)) }
                                _startPeriodicCheck() {
                                    const t = () => {
                                        this._checkElementRectsAndExecuteCallback();
                                        this._periodicCheckTimeout = setTimeout(t, ep)
                                    };
                                    this.listenTo(ol.window, "resize", () => { this._checkElementRectsAndExecuteCallback() });
                                    t()
                                }
                                _stopPeriodicCheck() {
                                    clearTimeout(this._periodicCheckTimeout);
                                    this.stopListening();
                                    this._previousRects.clear()
                                }
                                _checkElementRectsAndExecuteCallback() { const t = []; for (const e of this._elements) { if (this._hasRectChanged(e)) { t.push({ target: e, contentRect: this._previousRects.get(e) }) } } if (t.length) { this._callback(t) } }
                                _hasRectChanged(t) {
                                    if (!t.ownerDocument.body.contains(t)) { return false }
                                    const e = new Kd(t);
                                    const n = this._previousRects.get(t);
                                    const i = !n || !n.isEqual(e);
                                    this._previousRects.set(t, e);
                                    return i
                                }
                            }
                            _r(ip, pl);

                            function op(t) { return t.bindTemplate.to(e => { if (e.target === t.element) { e.preventDefault() } }) }
                            class sp extends Ym {
                                constructor(t) {
                                    super(t);
                                    const e = this.bindTemplate;
                                    this.set("isVisible", false);
                                    this.set("position", "se");
                                    this.children = this.createCollection();
                                    this.setTemplate({ tag: "div", attributes: { class: ["ck", "ck-reset", "ck-dropdown__panel", e.to("position", t => `ck-dropdown__panel_${t}`), e.if("isVisible", "ck-dropdown__panel-visible")] }, children: this.children, on: { selectstart: e.to(t => t.preventDefault()) } })
                                }
                                focus() { if (this.children.length) { this.children.first.focus() } }
                                focusLast() { if (this.children.length) { const t = this.children.last; if (typeof t.focusLast === "function") { t.focusLast() } else { t.focus() } } }
                            }
                            var rp = n(20);

                            function ap(t) {
                                while (t && t.tagName.toLowerCase() != "html") {
                                    if (ol.window.getComputedStyle(t).position != "static") { return t }
                                    t = t.parentElement
                                }
                                return null
                            }

                            function cp({ element: t, target: e, positions: n, limiter: i, fitInViewport: o }) {
                                if (gt(e)) { e = e() }
                                if (gt(i)) { i = i() }
                                const s = ap(t.parentElement);
                                const r = new Kd(t);
                                const a = new Kd(e);
                                let c;
                                let l;
                                if (!i && !o) {
                                    [l, c] = lp(n[0], a, r)
                                } else {
                                    const t = i && new Kd(i).getVisible();
                                    const e = o && new Kd(ol.window);
                                    [l, c] = dp(n, a, r, t, e) || lp(n[0], a, r)
                                }
                                let { left: d, top: u } = up(c);
                                if (s) {
                                    const t = up(new Kd(s));
                                    const e = Gd(s);
                                    d -= t.left;
                                    u -= t.top;
                                    d += s.scrollLeft;
                                    u += s.scrollTop;
                                    d -= e.left;
                                    u -= e.top
                                }
                                return { left: d, top: u, name: l }
                            }

                            function lp(t, e, n) { const { left: i, top: o, name: s } = t(e, n); return [s, n.clone().moveTo(i, o)] }

                            function dp(t, e, n, i, o) {
                                let s = 0;
                                let r = 0;
                                let a;
                                let c;
                                const l = n.getArea();
                                t.some(t => {
                                    const [d, u] = lp(t, e, n);
                                    let h;
                                    let f;
                                    if (i) { if (o) { const t = i.getIntersection(o); if (t) { h = t.getIntersectionArea(u) } else { h = 0 } } else { h = i.getIntersectionArea(u) } }
                                    if (o) { f = o.getIntersectionArea(u) }
                                    if (o && !i) { if (f > r) { g() } } else if (!o && i) { if (h > s) { g() } } else { if (f > r && h >= s) { g() } else if (f >= r && h > s) { g() } }

                                    function g() {
                                        r = f;
                                        s = h;
                                        a = u;
                                        c = d
                                    }
                                    return h === l
                                });
                                return a ? [c, a] : null
                            }

                            function up({ left: t, top: e }) { const { scrollX: n, scrollY: i } = ol.window; return { left: t + n, top: e + i } }
                            class hp extends Ym {
                                constructor(t, e, n) {
                                    super(t);
                                    const i = this.bindTemplate;
                                    this.buttonView = e;
                                    this.panelView = n;
                                    this.set("isOpen", false);
                                    this.set("isEnabled", true);
                                    this.set("class");
                                    this.set("panelPosition", "auto");
                                    this.focusTracker = new nm;
                                    this.keystrokes = new Yg;
                                    this.setTemplate({ tag: "div", attributes: { class: ["ck", "ck-dropdown", i.to("class"), i.if("isEnabled", "ck-disabled", t => !t)] }, children: [e, n] });
                                    e.extendTemplate({ attributes: { class: ["ck-dropdown__button"] } })
                                }
                                render() {
                                    super.render();
                                    this.listenTo(this.buttonView, "open", () => { this.isOpen = !this.isOpen });
                                    this.panelView.bind("isVisible").to(this, "isOpen");
                                    this.on("change:isOpen", () => { if (!this.isOpen) { return } if (this.panelPosition === "auto") { this.panelView.position = hp._getOptimalPosition({ element: this.panelView.element, target: this.buttonView.element, fitInViewport: true, positions: this._panelPositions }).name } else { this.panelView.position = this.panelPosition } });
                                    this.keystrokes.listenTo(this.element);
                                    this.focusTracker.add(this.element);
                                    const t = (t, e) => {
                                        if (this.isOpen) {
                                            this.buttonView.focus();
                                            this.isOpen = false;
                                            e()
                                        }
                                    };
                                    this.keystrokes.set("arrowdown", (t, e) => {
                                        if (this.buttonView.isEnabled && !this.isOpen) {
                                            this.isOpen = true;
                                            e()
                                        }
                                    });
                                    this.keystrokes.set("arrowright", (t, e) => { if (this.isOpen) { e() } });
                                    this.keystrokes.set("arrowleft", t);
                                    this.keystrokes.set("esc", t)
                                }
                                focus() { this.buttonView.focus() }
                                get _panelPositions() { const { southEast: t, southWest: e, northEast: n, northWest: i } = hp.defaultPanelPositions; if (this.locale.uiLanguageDirection === "ltr") { return [t, e, n, i] } else { return [e, t, i, n] } }
                            }
                            hp.defaultPanelPositions = { southEast: t => ({ top: t.bottom, left: t.left, name: "se" }), southWest: (t, e) => ({ top: t.bottom, left: t.left - e.width + t.width, name: "sw" }), northEast: (t, e) => ({ top: t.top - e.height, left: t.left, name: "ne" }), northWest: (t, e) => ({ top: t.bottom - e.height, left: t.left - e.width + t.width, name: "nw" }) };
                            hp._getOptimalPosition = cp;
                            var fp = n(22);
                            class gp extends Ym {
                                constructor() {
                                    super();
                                    const t = this.bindTemplate;
                                    this.set("content", "");
                                    this.set("viewBox", "0 0 20 20");
                                    this.set("fillColor", "");
                                    this.setTemplate({ tag: "svg", ns: "http://www.w3.org/2000/svg", attributes: { class: ["ck", "ck-icon"], viewBox: t.to("viewBox") } })
                                }
                                render() {
                                    super.render();
                                    this._updateXMLContent();
                                    this._colorFillPaths();
                                    this.on("change:content", () => {
                                        this._updateXMLContent();
                                        this._colorFillPaths()
                                    });
                                    this.on("change:fillColor", () => { this._colorFillPaths() })
                                }
                                _updateXMLContent() {
                                    if (this.content) {
                                        const t = (new DOMParser).parseFromString(this.content.trim(), "image/svg+xml");
                                        const e = t.querySelector("svg");
                                        const n = e.getAttribute("viewBox");
                                        if (n) { this.viewBox = n }
                                        this.element.innerHTML = "";
                                        while (e.childNodes.length > 0) { this.element.appendChild(e.childNodes[0]) }
                                    }
                                }
                                _colorFillPaths() { if (this.fillColor) { this.element.querySelectorAll(".ck-icon__fill").forEach(t => { t.style.fill = this.fillColor }) } }
                            }
                            var mp = n(24);
                            class pp extends Ym {
                                constructor(t) {
                                    super(t);
                                    this.set("text", "");
                                    this.set("position", "s");
                                    const e = this.bindTemplate;
                                    this.setTemplate({ tag: "span", attributes: { class: ["ck", "ck-tooltip", e.to("position", t => "ck-tooltip_" + t), e.if("text", "ck-hidden", t => !t.trim())] }, children: [{ tag: "span", attributes: { class: ["ck", "ck-tooltip__text"] }, children: [{ text: e.to("text") }] }] })
                                }
                            }
                            var bp = n(26);
                            class wp extends Ym {
                                constructor(t) {
                                    super(t);
                                    const e = this.bindTemplate;
                                    const n = nr();
                                    this.set("class");
                                    this.set("labelStyle");
                                    this.set("icon");
                                    this.set("isEnabled", true);
                                    this.set("isOn", false);
                                    this.set("isVisible", true);
                                    this.set("isToggleable", false);
                                    this.set("keystroke");
                                    this.set("label");
                                    this.set("tabindex", -1);
                                    this.set("tooltip");
                                    this.set("tooltipPosition", "s");
                                    this.set("type", "button");
                                    this.set("withText", false);
                                    this.set("withKeystroke", false);
                                    this.children = this.createCollection();
                                    this.tooltipView = this._createTooltipView();
                                    this.labelView = this._createLabelView(n);
                                    this.iconView = new gp;
                                    this.iconView.extendTemplate({ attributes: { class: "ck-button__icon" } });
                                    this.keystrokeView = this._createKeystrokeView();
                                    this.bind("_tooltipString").to(this, "tooltip", this, "label", this, "keystroke", this._getTooltipString.bind(this));
                                    this.setTemplate({ tag: "button", attributes: { class: ["ck", "ck-button", e.to("class"), e.if("isEnabled", "ck-disabled", t => !t), e.if("isVisible", "ck-hidden", t => !t), e.to("isOn", t => t ? "ck-on" : "ck-off"), e.if("withText", "ck-button_with-text"), e.if("withKeystroke", "ck-button_with-keystroke")], type: e.to("type", t => t ? t : "button"), tabindex: e.to("tabindex"), "aria-labelledby": `ck-editor__aria-label_${n}`, "aria-disabled": e.if("isEnabled", true, t => !t), "aria-pressed": e.to("isOn", t => this.isToggleable ? String(t) : false) }, children: this.children, on: { mousedown: e.to(t => { t.preventDefault() }), click: e.to(t => { if (this.isEnabled) { this.fire("execute") } else { t.preventDefault() } }) } })
                                }
                                render() {
                                    super.render();
                                    if (this.icon) {
                                        this.iconView.bind("content").to(this, "icon");
                                        this.children.add(this.iconView)
                                    }
                                    this.children.add(this.tooltipView);
                                    this.children.add(this.labelView);
                                    if (this.withKeystroke) { this.children.add(this.keystrokeView) }
                                }
                                focus() { this.element.focus() }
                                _createTooltipView() {
                                    const t = new pp;
                                    t.bind("text").to(this, "_tooltipString");
                                    t.bind("position").to(this, "tooltipPosition");
                                    return t
                                }
                                _createLabelView(t) {
                                    const e = new Ym;
                                    const n = this.bindTemplate;
                                    e.setTemplate({ tag: "span", attributes: { class: ["ck", "ck-button__label"], style: n.to("labelStyle"), id: `ck-editor__aria-label_${t}` }, children: [{ text: this.bindTemplate.to("label") }] });
                                    return e
                                }
                                _createKeystrokeView() {
                                    const t = new Ym;
                                    t.setTemplate({ tag: "span", attributes: { class: ["ck", "ck-button__keystroke"] }, children: [{ text: this.bindTemplate.to("keystroke", t => lc(t)) }] });
                                    return t
                                }
//# sourceMappingURL=ckeditor.js.map