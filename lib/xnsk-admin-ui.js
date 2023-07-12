var qe = Object.defineProperty, He = Object.defineProperties;
var Ke = Object.getOwnPropertyDescriptors;
var Ie = Object.getOwnPropertySymbols;
var We = Object.prototype.hasOwnProperty, Je = Object.prototype.propertyIsEnumerable;
var ze = (t, l, a) => l in t ? qe(t, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[l] = a, H = (t, l) => {
  for (var a in l || (l = {}))
    We.call(l, a) && ze(t, a, l[a]);
  if (Ie)
    for (var a of Ie(l))
      Je.call(l, a) && ze(t, a, l[a]);
  return t;
}, xe = (t, l) => He(t, Ke(l));
var ke = (t, l, a) => new Promise((e, n) => {
  var v = (w) => {
    try {
      s(a.next(w));
    } catch (i) {
      n(i);
    }
  }, k = (w) => {
    try {
      s(a.throw(w));
    } catch (i) {
      n(i);
    }
  }, s = (w) => w.done ? e(w.value) : Promise.resolve(w.value).then(v, k);
  s((a = a.apply(t, l)).next());
});
import { useAttrs as de, useSlots as Ce, computed as ne, openBlock as d, createBlock as $, unref as o, isRef as Re, normalizeStyle as he, withCtx as C, createCommentVNode as A, renderSlot as W, createElementBlock as O, createTextVNode as X, toDisplayString as J, createElementVNode as K, createVNode as U, onMounted as Ee, mergeProps as Te, defineComponent as De, ref as V, watchEffect as Oe, normalizeClass as je, Fragment as le, renderList as ce, withKeys as Xe, h as ge, resolveComponent as Ge, resolveDirective as Ye, withDirectives as Ae, vShow as Ze, watch as Qe } from "vue";
import { NModal as et, NButton as ae, NDrawer as tt, NDrawerContent as lt, useDialog as at, NGrid as Ue, NGi as Se, NInput as Be, NSelect as Fe, NIcon as we, NDataTable as nt, NPagination as ot, NForm as st, NFormItem as ut, NRadioGroup as it, NRadio as rt, NCheckboxGroup as ct, NCheckbox as Pe, NSpace as dt, NSpin as ft, NEmpty as pt, NTree as gt, NUpload as ht } from "naive-ui";
import yt from "markdown-it";
import vt from "houriprotocol";
import _t from "axios";
const oe = (t, l) => {
  const a = t.__vccOpts || t;
  for (const [e, n] of l)
    a[e] = n;
  return a;
}, bt = {
  key: 1,
  class: "dialog-templete-btns"
}, kt = {
  __name: "index",
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: "600"
    },
    height: {
      type: [Number, String],
      default: "auto"
    },
    footBtns: {
      type: Array,
      default: ["确定", "取消"]
    },
    loading: {
      type: Boolean,
      default: !1
    },
    callback: {
      type: Array,
      default: []
    },
    //是否锁定
    lock: {
      type: Boolean,
      defualt: !1
    }
  },
  emits: ["update:show"],
  setup(t, { emit: l }) {
    const a = t, e = de(), n = Ce();
    let v = ne({
      get() {
        return a.show;
      },
      set(w) {
        w || s();
      }
    });
    function k() {
      a.callback[0] && a.callback[0]();
    }
    function s() {
      e.onBeforeClose ? l("beforeClose", () => {
        a.callback[1] && (l("update:show", !1), a.callback[1] && a.callback[1]());
      }) : (l("update:show", !1), a.callback[1] && a.callback[1]());
    }
    return (w, i) => (d(), $(o(et), {
      show: o(v),
      "onUpdate:show": i[0] || (i[0] = (h) => Re(v) ? v.value = h : v = h),
      "trap-focus": !1,
      preset: "card",
      "close-on-esc": !t.lock,
      "mask-closable": !t.lock,
      class: "dialog-templete",
      style: he({
        width: t.width + "px",
        height: t.height + "px"
      })
    }, {
      header: C(() => [
        t.title ? (d(), $(o($e), {
          key: 0,
          title: t.title
        }, null, 8, ["title"])) : A("", !0)
      ]),
      default: C(() => [
        W(w.$slots, "default", {}, void 0, !0)
      ]),
      footer: C(() => [
        o(n).footBtn ? W(w.$slots, "footBtn", { key: 0 }, void 0, !0) : (d(), O("div", bt, [
          t.footBtns.length > 0 ? (d(), $(o(ae), {
            key: 0,
            type: "info",
            onClick: k
          }, {
            default: C(() => [
              X(J(t.footBtns[0]), 1)
            ]),
            _: 1
          })) : A("", !0),
          t.footBtns.length > 1 ? (d(), $(o(ae), {
            key: 1,
            type: "info",
            ghost: "",
            onClick: s
          }, {
            default: C(() => [
              X(J(t.footBtns[1]), 1)
            ]),
            _: 1
          })) : A("", !0)
        ]))
      ]),
      _: 3
    }, 8, ["show", "close-on-esc", "mask-closable", "style"]));
  }
}, Ve = /* @__PURE__ */ oe(kt, [["__scopeId", "data-v-3d1e23e0"]]), mt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACPklEQVRYR+2XT4hPURTHP19/M9GMlFK2NlZqkiz8WymKUqRJZJIiTRYWylZKoRBlxcbWikgkRUnIhtmQ8qekjBFFSl+d6b3p9fJ+v3ffm9+Uclav+84953POvffcc0UXsb0LOAgMAnO66Zf+G3gHXAOOS/pcnq9OBm1fAfYkOq1SfwlskPSpqFAJYHs/cGmKnOdmXgDripnoBHAHWN8QIOzOqJh7QdKh/F/HJWjoHNvhfG22d7aX7PwClkl6G+M9ASg6tD0CnC1BnJZ0ZBLA9lzgJLADWNI08mzeG+A2cFTSeIzZvg5sLth9IGnNBECWrrst1ruK9zWwKjac7U3AjYLiN6BfkgPgAHCxZdRV0y9LGrbdD4yVNmafpB8BcK8H0edAEelCSb9tx/f8AukkQFSqpT3KQJhdJGnsP0CTDETBSJGqiyp5CR4CQ3mlqktgewA4D8TtWZRkgJWSntR1XKp6fcBXYFZhPBkgisfjhgBxzL60BYjoh4FXiRCLgTPAtrZLkOi3q3ryEnS1mKjw7wJ8T4w0TsDfuqDkDNwHdkr6mAJgO07AOWBv2004KOlZivNc1/a8rA7MblMHVkt61BBgQVYHZrYBeA7sA6KjiYdFXYk6cArYUmMJRiUtD71oSKa7H/gJbJUUfeO0AsTL6ClwQtJonqXIwC1gY908J+rFUR6IlqxqXgAMAVcTDddVvykpOuJKmXiY2I6uOLrjqZS4FeNIxzuhM0AGsRs4DKxo+WL6AMQ745ik990i+gN2mEgw/3nqggAAAABJRU5ErkJggg==";
function xt(t) {
  let l = "";
  return Object.prototype.toString.call(t) === "[object String]" ? l = JSON.stringify(t) : l = t, new Promise((a, e) => {
    if (navigator.clipboard)
      navigator.clipboard.writeText(l);
    else {
      let n = document.createElement("textarea");
      document.body.appendChild(n), n.style.position = "fixed", n.style.clip = "rect(0 0 0 0)", n.style.top = "10px", n.value = l, n.select(), document.execCommand("copy", !0), document.body.removeChild(n);
    }
    a();
  });
}
Object.defineProperty(Object.prototype, "xnsk_admin_ui_realType", {
  get() {
    let t = Object.prototype.toString.call(this);
    return t.slice(8, t.length - 1).toLowerCase();
  }
});
Object.defineProperty(Object.prototype, "xnsk_admin_ui_realValue", {
  get() {
    return Object.prototype.toString.call(this) === "[object Function]" ? this() : this;
  }
});
function ye(t = 20, l = !0) {
  let a = "";
  l && (a = (/* @__PURE__ */ new Date()).getTime() + "");
  const e = t - a.length;
  for (let n = 0; n < e; n++)
    a += Me(1);
  return a.substr(0, t);
}
function Me(t = 10) {
  let l = "";
  const a = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let e = 0; e < t; e++)
    l += a.substr(Math.floor(Math.random() * a.length), 1);
  return l;
}
const wt = (t = [], l = "children") => {
  let a = t;
  function e(n) {
    var v;
    ((v = n == null ? void 0 : n[l]) == null ? void 0 : v.length) === 0 ? n[l] = null : n != null && n[l] && n[l].forEach((k) => e(k));
  }
  return (a || []).forEach((n) => e(n)), e(a), a;
}, Nt = (t = [], l = "children") => {
  let a = t;
  function e(n) {
    var v;
    ((v = n == null ? void 0 : n[l]) == null ? void 0 : v.length) === 0 || (n == null ? void 0 : n[l]) === null ? (delete n[l], n.randomId = ye()) : n != null && n[l] && (n.randomId = ye(), n[l].forEach((k) => e(k)));
  }
  return (a || []).forEach((n) => e(n)), e(a), a;
};
function St(t) {
  return new Promise((l, a) => {
    let e;
    window.XMLHttpRequest ? e = new XMLHttpRequest() : e = new ActiveXObject("Microsoft.XMLHttp"), e.onreadystatechange = () => {
      e.readyState == 4 && e.status == 200 && l(e.responseText);
    }, e.onerror = () => {
      a(!1);
    }, e.open("GET", t, !0), e.send();
  });
}
function Bt(t = "", l = "") {
  return l + t.slice(t.lastIndexOf(".") + 1);
}
const Ct = { class: "break-all" }, Tt = { class: "text-center" }, $t = /* @__PURE__ */ K("img", {
  class: "mt-px",
  src: mt,
  style: { width: "16px", height: "16px" }
}, null, -1), At = {
  __name: "index",
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: "日志"
    },
    data: {
      type: String,
      default: ""
    }
  },
  emits: ["update:show"],
  setup(t, { emit: l }) {
    const a = t;
    Ce();
    let e = ne({
      get() {
        return a.show;
      },
      set(v) {
        v || l("update:show", !1);
      }
    });
    function n() {
      xt(a.data).then(() => {
        try {
          $message.success("复制成功"), l("success");
        } catch (v) {
          console.log("$message未定义"), l("success");
        }
      });
    }
    return (v, k) => (d(), $(o(Ve), {
      title: t.title,
      show: o(e),
      "onUpdate:show": k[0] || (k[0] = (s) => Re(e) ? e.value = s : e = s),
      width: "800",
      callback: []
    }, {
      footBtn: C(() => [
        K("div", Tt, [
          U(o(ae), {
            type: "primary",
            onClick: n
          }, {
            icon: C(() => [
              $t
            ]),
            default: C(() => [
              X("复制日志 ")
            ]),
            _: 1
          })
        ])
      ]),
      default: C(() => [
        K("div", Ct, J(t.data), 1)
      ]),
      _: 1
    }, 8, ["title", "show"]));
  }
};
const Ot = { class: "flex justify-between items-center" }, jt = { class: "flex justify-start items-center gap-3" }, Ut = { class: "flex justify-center items-center" }, It = {
  __name: "index",
  props: {
    title: String,
    size: {
      type: String,
      default: "small"
    },
    showTitleBar: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const l = t, a = ne(() => {
      switch (l.size) {
        case "small":
          return "14px";
        case "big":
          return "18px";
        default:
          return l.size;
      }
    });
    return (e, n) => (d(), O("div", Ot, [
      K("div", jt, [
        t.showTitleBar ? (d(), O("div", {
          key: 0,
          class: "blue-bar",
          style: he([{ width: "3px", "border-radius": "2px" }, { height: a.value }])
        }, null, 4)) : A("", !0),
        K("b", {
          style: he({ fontSize: a.value })
        }, J(t.title), 5)
      ]),
      K("div", Ut, [
        W(e.$slots, "default", {}, void 0, !0)
      ]),
      X("   ")
    ]));
  }
}, $e = /* @__PURE__ */ oe(It, [["__scopeId", "data-v-f4694431"]]), zt = {
  __name: "index",
  props: {
    outClosable: {
      type: Boolean,
      default: () => !1
    }
  },
  setup(t) {
    const l = de();
    return Ee(() => {
    }), (a, e) => (d(), $(o(tt), Te({
      "close-on-esc": t.outClosable,
      "mask-closable": t.outClosable,
      "auto-focus": !1
    }, o(l)), {
      default: C(() => [
        U(o(lt), {
          title: o(l).title,
          closable: ""
        }, {
          default: C(() => [
            W(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["title"])
      ]),
      _: 3
    }, 16, ["close-on-esc", "mask-closable"]));
  }
}, Lt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, Rt = /* @__PURE__ */ U(
  "path",
  {
    d: "M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), Et = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M338.29 338.29L448 448"
  },
  null,
  -1
  /* HOISTED */
), Dt = De({
  name: "SearchOutline",
  render: function(l, a) {
    return d(), $("svg", Lt, [Rt, Et]);
  }
}), Ft = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, Pt = /* @__PURE__ */ U(
  "path",
  {
    d: "M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), Vt = /* @__PURE__ */ U(
  "path",
  {
    d: "M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Mt = De({
  name: "ReloadOutline",
  render: function(l, a) {
    return d(), $("svg", Ft, [Pt, Vt]);
  }
});
const qt = { class: "list-page-content" }, Ht = {
  key: 0,
  class: "list-page-search marB20"
}, Kt = { class: "flex-1 justify-end flex" }, Wt = {
  key: 1,
  class: "overflow-hidden flex items-center justify-between",
  style: { "margin-bottom": "24px" }
}, Jt = { style: { display: "flex" } }, Xt = { class: "list-page-table" }, Gt = {
  __name: "index",
  props: {
    config: {
      type: [Object, Function],
      default: () => {
      }
    }
  },
  emits: [
    "search",
    "success",
    "finally",
    "rowLoad",
    "rowExpand",
    "onUpdateChecked"
  ],
  setup(t, { expose: l, emit: a }) {
    const e = t, n = V(!1), v = Ce(), k = de(), s = at(), w = ne(() => {
      var u, g, b, j, I;
      return ((b = (g = (u = e == null ? void 0 : e.config) == null ? void 0 : u.params) == null ? void 0 : g.columns) == null ? void 0 : b.length) > 0 ? (I = (j = e == null ? void 0 : e.config) == null ? void 0 : j.params) == null ? void 0 : I.columns : [];
    }), i = ne(() => {
      var g, b;
      let u = ((b = (g = e == null ? void 0 : e.config) == null ? void 0 : g.table) == null ? void 0 : b.title) || "";
      return Object.prototype.toString.call(u) === "[object Function]" ? u() : u;
    }), h = V({}), x = V([]);
    let m = V(0);
    const y = V({
      page: 1,
      pageSize: 10,
      pageSizeOptions: [1, 5, 10, 20, 50],
      itemCount: 0,
      isDel: 0
    });
    function S(u) {
      y.value.pageSize = u, f();
    }
    function G(u) {
      y.value.page = u, f();
    }
    function F(u) {
      var g, b, j;
      (j = (b = (g = e == null ? void 0 : e.config) == null ? void 0 : g.params) == null ? void 0 : b.change) == null || j.call(b, h.value, u);
    }
    let D = V([]), q = V({});
    function Q() {
      w.value.length && w.value.forEach((u) => {
        var g, b;
        u.type === "input" ? h.value[u.propName] = ((g = u == null ? void 0 : u.defaultValue) == null ? void 0 : g.xnsk_admin_ui_realValue) || "" : u.type === "select" && (h.value[u.propName] = u.defaultValue === "" || u.defaultValue === void 0 ? null : (b = u.defaultValue) == null ? void 0 : b.xnsk_admin_ui_realValue);
      });
    }
    function fe() {
      var g, b, j, I;
      let u = ((b = (g = e == null ? void 0 : e.config) == null ? void 0 : g.table) == null ? void 0 : b.columns) || [];
      x.value = u.map((z, L) => {
        var Y;
        let M = {
          ellipsis: z.unEllipsis ? !1 : {
            tooltip: !0
          },
          align: (Y = e == null ? void 0 : e.config) != null && Y.isTree && L === 0 ? "left" : z.align || "center",
          titleAlign: "center",
          resizable: !1
          /* ...item, */
        };
        return z.customValue ? M.render = (R) => z.customValue(R) : z.slot ? M.render = (R) => ge(v[z.slot], R) : M.render = (R) => R[z.key] === null || R[z.key] === void 0 || R[z.key] === "" ? "—" : R[z.key], z.key === "actions" && (M.fixed = "right", M.render = (R) => {
          var ie, ve, _e;
          let se = [];
          return ((_e = (ve = (ie = e == null ? void 0 : e.config) == null ? void 0 : ie.table) == null ? void 0 : ve.actions) == null ? void 0 : _e.length) > 0 && e.config.table.actions.forEach((E) => {
            var te, Z, be;
            let re, pe;
            ((te = E.show) == null ? void 0 : te.xnsk_admin_ui_realType) === "function" ? re = E.show(R) : re = E.show, ((Z = E.disabled) == null ? void 0 : Z.xnsk_admin_ui_realType) === "function" ? pe = E.disabled(R) : pe = (be = E.disabled) != null ? be : !1;
            let ue, N = Object.prototype.toString.call(E.icon);
            N === "[object String]" ? ue = ge(
              "img",
              {
                src: E.icon
              },
              { default: () => "" }
            ) : N === "[object Object]" && (ue = E.icon), (re || re === void 0) && se.push(
              ge(
                ae,
                {
                  size: "small",
                  /* loading: _loading, */
                  quaternary: !0,
                  type: E.type || "primary",
                  disabled: pe,
                  onClick: () => {
                    E != null && E.autoWarn ? s.warning({
                      title: `确定${E.label}`,
                      content: "",
                      positiveText: "确定",
                      negativeText: "取消",
                      onPositiveClick: () => {
                        E.click(R);
                      },
                      onNegativeClick: () => {
                      }
                    }) : E.click(R);
                  },
                  style: "--n-opacity-disabled: 0;"
                },
                {
                  default: () => [
                    ue && ge(we, {
                      component: ue
                    }),
                    ge(
                      "div",
                      {
                        style: `margin-left:${ue ? 5 : 0}px;`
                      },
                      {
                        default: () => E.label
                      }
                    )
                  ]
                }
              )
            );
          }), ge(
            "div",
            {
              class: "flex"
            },
            {
              default: () => [...se]
            }
          );
        }), H(H({}, M), z);
      }), (j = e == null ? void 0 : e.config) != null && j.expand && x.value.unshift({
        type: "expand",
        align: "right",
        expandable: (z) => !0,
        renderExpand: (I = e == null ? void 0 : e.config) == null ? void 0 : I.expand
      });
    }
    function p(u = []) {
      let g = Object.prototype.toString.call(u);
      if (g === "[object Array]")
        return u;
      if (g === "[object Object]")
        return Object.keys(u).map((I) => ({
          label: u[I],
          value: I
        }));
    }
    function f(u = {}, g = null) {
      var b, j, I, z;
      if (h.value = H(H({}, h.value), u), ((I = (j = (b = e == null ? void 0 : e.config) == null ? void 0 : b.data) == null ? void 0 : j.xnsk_admin_ui_realValue) == null ? void 0 : I.length) > 0) {
        if ((z = e == null ? void 0 : e.config) != null && z.isTree) {
          let L = e.config.data.xnsk_admin_ui_realValue.map((M) => xe(H({}, M), { randomId: ye() }));
          D.value = Nt(L);
        } else
          D.value = e.config.data.xnsk_admin_ui_realValue;
        y.value.itemCount = e.config.data.xnsk_admin_ui_realValue.length;
        return;
      }
      e.config.apiName && (n.value = !0, e.config.apiName(xe(H({}, h.value), {
        pageNum: y.value.page,
        pageSize: y.value.pageSize
      })).then((L) => {
        var M, Y, R;
        if (g && g(L), L.status === 200) {
          let se = (L == null ? void 0 : L.list) || ((M = L == null ? void 0 : L.data) == null ? void 0 : M.list) || [];
          (Y = e == null ? void 0 : e.config) != null && Y.isTree ? D.value = se.map((ie) => xe(H({}, ie), { getRandomId: ye() })) : D.value = se, q.value = L || {}, y.value.itemCount = L.total || L.data.total, y.value.page = L.pageNum || L.data.pageNum, a("success", q.value);
        } else
          (R = e == null ? void 0 : e.config) != null && R.showErrMsg && $message.error(L.message);
      }).finally(() => {
        n.value = !1, a("finally");
      }));
    }
    function B(u) {
      return new Promise((g, b) => {
        a("rowLoad", u, (j = []) => {
          u.children = j.map((I) => H({}, I)), g();
        });
      });
    }
    const _ = ne(() => {
      var u, g, b, j, I, z, L, M, Y, R;
      return ((u = e == null ? void 0 : e.config) == null ? void 0 : u.expandedIndex) !== void 0 ? (R = (Y = (z = (b = D.value[(g = e.config) == null ? void 0 : g.expandedIndex]) == null ? void 0 : b.did) != null ? z : (I = D.value[(j = e.config) == null ? void 0 : j.expandedIndex]) == null ? void 0 : I.id) != null ? Y : (M = D.value[(L = e.config) == null ? void 0 : L.expandedIndex]) == null ? void 0 : M.randomId) != null ? R : "" : null;
    });
    function c() {
      y.value.page = 1, f(), a("search");
    }
    function P() {
      return ke(this, null, function* () {
        for (let u in h.value)
          h.value[u] = null;
        c(), a("search");
      });
    }
    function r(u) {
      var g;
      return u != null && u.show ? ((g = u.show) == null ? void 0 : g.xnsk_admin_ui_realType) === "function" ? o(u.show()) : o(u.show) : !0;
    }
    function ee(u) {
      var g;
      return u != null && u.disabled ? ((g = u.disabled) == null ? void 0 : g.xnsk_admin_ui_realType) === "function" ? o(u.disabled()) : o(u.disabled) : !1;
    }
    function T(u) {
      return (u == null ? void 0 : u.xnsk_admin_ui_realType) === "function" ? o(u()) : o(u);
    }
    function me(u) {
      var g, b;
      ((b = (g = e.config) == null ? void 0 : g.onUpdateChecked) == null ? void 0 : b.xnsk_admin_ui_realType) === "function" ? e.config.onUpdateChecked(u) : a("onUpdateChecked", u);
    }
    return Ee(() => {
      var u;
      Q(), fe(), !((u = e.config) != null && u.unLoad) && f(), m.value = x.value.reduce((g, b) => g + (b.minWidth || b.width || 0), 0);
    }), Oe(() => {
      var u, g, b, j, I;
      ((g = (u = e.config) == null ? void 0 : u.data) == null ? void 0 : g.xnsk_admin_ui_realType) === "asyncfunction" ? (j = (b = e.config) == null ? void 0 : b.data) == null || j.call(b).then((z) => {
        D.value = z;
      }) : ((I = e.config) == null ? void 0 : I.data) !== void 0 && f();
    }), l({
      getTableData: f,
      refresh: f,
      pageData: q,
      loading: n,
      params: h
    }), (u, g) => {
      var b, j, I, z, L, M, Y, R, se, ie, ve, _e, E, re, pe, ue;
      return d(), O("div", {
        class: je(["list-page", { noPadding: (b = e == null ? void 0 : e.config) == null ? void 0 : b.noPadding }]),
        style: he({ height: (I = (j = e == null ? void 0 : e.config) == null ? void 0 : j.height) != null ? I : "100%" })
      }, [
        K("div", qt, [
          W(u.$slots, "top", {
            dataList: o(D),
            loading: n.value
          }, void 0, !0),
          w.value.length > 0 && !t.config.params.hidden ? (d(), O("div", Ht, [
            U(o(Ue), {
              "x-gap": "12",
              cols: "3 s:3 m:4 l:5 xl:6",
              responsive: "screen"
            }, {
              default: C(() => [
                (d(!0), O(le, null, ce(w.value, (N, te) => (d(), O(le, null, [
                  N.hidden ? A("", !0) : (d(), $(o(Se), {
                    key: (N == null ? void 0 : N.did) || te
                  }, {
                    default: C(() => [
                      N.type === "input" ? (d(), $(o(Be), {
                        key: 0,
                        value: h.value[N.propName],
                        "onUpdate:value": [(Z) => h.value[N.propName] = Z, (Z) => F(N)],
                        placeholder: N.placeholder || "请输入" + N.label,
                        clearable: "",
                        disabled: N.disabled === !0 || !1,
                        maxlength: N.maxlength || 20,
                        onKeyup: Xe(c, ["enter"])
                      }, null, 8, ["value", "onUpdate:value", "placeholder", "disabled", "maxlength", "onKeyup"])) : A("", !0),
                      N.type === "select" ? (d(), $(o(Fe), {
                        key: 1,
                        value: h.value[N.propName],
                        "onUpdate:value": [(Z) => h.value[N.propName] = Z, (Z) => F(N)],
                        options: p(N.selection),
                        placeholder: N.placeholder || "请选择" + N.label,
                        clearable: "",
                        disabled: N.disabled === !0 || !1
                      }, null, 8, ["value", "onUpdate:value", "options", "placeholder", "disabled"])) : A("", !0)
                    ]),
                    _: 2
                  }, 1024))
                ], 64))), 256)),
                U(o(Se), { suffix: !0 }, {
                  default: C(() => [
                    K("div", Kt, [
                      U(o(ae), {
                        type: "primary",
                        onClick: c
                      }, {
                        icon: C(() => [
                          U(o(we), null, {
                            default: C(() => [
                              U(o(Dt))
                            ]),
                            _: 1
                          })
                        ]),
                        default: C(() => [
                          X(" 查询")
                        ]),
                        _: 1
                      }),
                      U(o(ae), {
                        class: "ml-3",
                        onClick: P
                      }, {
                        icon: C(() => [
                          U(o(we), null, {
                            default: C(() => [
                              U(o(Mt))
                            ]),
                            _: 1
                          })
                        ]),
                        default: C(() => [
                          X("重置")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : A("", !0),
          W(u.$slots, "center", {
            dataList: o(D),
            loading: n.value
          }, void 0, !0),
          (L = (z = e == null ? void 0 : e.config) == null ? void 0 : z.table) != null && L.title || (Y = (M = e == null ? void 0 : e.config) == null ? void 0 : M.table) != null && Y.headBtns ? (d(), O("div", Wt, [
            (se = (R = e == null ? void 0 : e.config) == null ? void 0 : R.table) != null && se.title ? (d(), $(o($e), {
              key: 0,
              size: "16px",
              title: i.value
            }, null, 8, ["title"])) : A("", !0),
            K("p", Jt, [
              (d(!0), O(le, null, ce(((ve = (ie = e == null ? void 0 : e.config) == null ? void 0 : ie.table) == null ? void 0 : ve.headBtns) || [], (N, te) => (d(), O(le, null, [
                r(N) ? (d(), $(o(ae), {
                  type: N.type || "primary",
                  class: "marL15",
                  key: te,
                  loading: T(N.loading),
                  disabled: ee(N),
                  onClick: N.click
                }, {
                  default: C(() => [
                    N.icon ? (d(), $(o(we), {
                      key: 0,
                      component: N.icon,
                      style: { "margin-right": "8px" }
                    }, null, 8, ["component"])) : A("", !0),
                    K("span", null, J(N.label), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "loading", "disabled", "onClick"])) : A("", !0)
              ], 64))), 256))
            ])
          ])) : A("", !0),
          W(u.$slots, "tableHeader", {
            dataList: o(D),
            loading: n.value
          }, void 0, !0),
          K("div", Xt, [
            U(o(nt), Te({
              columns: x.value,
              data: o(D),
              "scroll-x": o(m),
              striped: "",
              loading: n.value,
              "row-key": (N) => {
                var te, Z, be;
                return (be = (Z = (te = N.did) != null ? te : N.id) != null ? Z : N.randomId) != null ? be : "";
              },
              pagination: ((_e = e == null ? void 0 : e.config) == null ? void 0 : _e.data) && !((E = e == null ? void 0 : e.config) != null && E.unPagination) && {
                page: y.value.page,
                pageSize: y.value.pageSize,
                showSizePicker: !0,
                pageSizes: y.value.pageSizeOptions,
                itemCount: y.value.itemCount,
                showQuickJumper: !0
              },
              "on-update:page-size": S,
              "on-update:page": G,
              "on-update:checked-row-keys": me,
              "children-key": (re = e == null ? void 0 : e.config) != null && re.isTree ? ((pe = e == null ? void 0 : e.config) == null ? void 0 : pe.childrenKey) || "children" : null,
              "default-expanded-row-keys": [_.value],
              onLoad: B
            }, o(k)), null, 16, ["columns", "data", "scroll-x", "loading", "row-key", "pagination", "children-key", "default-expanded-row-keys"])
          ]),
          W(u.$slots, "footer", {
            dataList: o(D),
            loading: n.value
          }, void 0, !0)
        ]),
        (ue = e == null ? void 0 : e.config) != null && ue.data ? A("", !0) : (d(), $(o(ot), {
          key: 0,
          class: "list-page-table-pagination",
          page: y.value.page,
          "onUpdate:page": g[0] || (g[0] = (N) => y.value.page = N),
          "page-size": y.value.pageSize,
          "onUpdate:pageSize": g[1] || (g[1] = (N) => y.value.pageSize = N),
          "page-sizes": y.value.pageSizeOptions,
          "item-count": y.value.itemCount,
          "on-update:page-size": S,
          "on-update:page": G,
          "show-size-picker": "",
          "show-quick-jumper": ""
        }, null, 8, ["page", "page-size", "page-sizes", "item-count"]))
      ], 6);
    };
  }
}, Yt = /* @__PURE__ */ oe(Gt, [["__scopeId", "data-v-3b6ff612"]]);
const Zt = {
  key: 0,
  class: "form-btns"
}, Qt = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: {}
    },
    defaultValue: {
      type: Object,
      default: {}
    }
  },
  emits: ["submit", "cancel", "change"],
  setup(t, { expose: l, emit: a }) {
    const e = t, n = {
      input: "请输入",
      textarea: "请输入",
      select: "请选择",
      radio: "请选择",
      checkbox: "请选择",
      slot: "缺少"
    }, v = V("from_" + ye()), k = Ce();
    de();
    const s = V({}), w = V({}), i = ne(() => {
      var p, f, B;
      return (f = (p = e.config) == null ? void 0 : p.submitBtn) != null && f.loading ? ((B = e.config.submitBtn.loading) == null ? void 0 : B.xnsk_admin_ui_realType) === "function" ? o(e.config.submitBtn.loading()) : o(e.config.submitBtn.loading) : !1;
    }), h = ne(() => {
      var f, B;
      let p = [];
      if (((B = (f = e.config) == null ? void 0 : f.columns) == null ? void 0 : B.length) > 0)
        return e.config.columns.forEach((_) => {
          var ee, T, me, u;
          let c = {};
          c.label = _.label, c.type = _.type, c.useFormItem = _.useFormItem || !1, c.propName = _.propName, c.required = _.required, c.maxlength = _.maxlength, c.rows = _.rows || 9, c.validator = _.validator || null, c.trigger = _.trigger || ((ee = e.config) == null ? void 0 : ee.trigger) || "blur", c.selection = _.selection || [], c.span = _.span || 24, c.offset = _.offset || 0, c.onInput = _.onInput || null, c.text = _.text || "", c.style = _.style || "";
          let P = {
            required: c == null ? void 0 : c.required,
            trigger: c.trigger,
            key: c == null ? void 0 : c.propName,
            validator(g, b) {
              var j, I;
              if (((j = c == null ? void 0 : c.validator) == null ? void 0 : j.xnsk_admin_ui_realType) === "function")
                return c == null ? void 0 : c.validator(b);
              if (((I = c == null ? void 0 : c.validator) == null ? void 0 : I.xnsk_admin_ui_realType) === void 0)
                return c != null && c.required && [null, void 0, ""].includes(b) ? new Error(`${n[c.type]}${c.label}`) : (b == null ? void 0 : b.xnsk_admin_ui_realType) === "array" && b.length === 0 ? new Error(`${n[c.type]}${c.label}`) : !0;
            }
          };
          w.value[c.propName] = P, _.disabled !== void 0 && (((T = _.disabled) == null ? void 0 : T.xnsk_admin_ui_realType) === "function" ? _.disabled() : _.disabled) && (c.disabled = !0), _.readonly !== void 0 && (((me = _.readonly) == null ? void 0 : me.xnsk_admin_ui_realType) === "function" ? _.readonly() : _.readonly) && (c.readonly = !0), (_.show === void 0 || (((u = _.show) == null ? void 0 : u.xnsk_admin_ui_realType) === "function" ? _.show(s.value) : _.show)) && p.push(c);
        }), p;
    });
    x(), Oe(() => {
      Object.keys(e.defaultValue).forEach((f) => {
        var _;
        let B = (_ = e.config) == null ? void 0 : _.columns.find((c) => c.propName === f);
        B && (s.value[f] = S(B));
      });
    });
    function x() {
      var f;
      (((f = e.config) == null ? void 0 : f.columns) || []).forEach((B) => {
        switch (B.type) {
          case "input":
          case "textarea":
            B.propName && (s.value[B.propName] = "");
            break;
          case "select":
            B.propName && (s.value[B.propName] = null);
            break;
        }
      });
    }
    function m(p) {
      return p.placeholder ? p.placeholder : p.type === "select" ? `请选择${p.label}` : `请输入${p.label}`;
    }
    function y(p) {
      var B;
      let f = ((B = p.selection) == null ? void 0 : B.xnsk_admin_ui_realType) === "function" ? o(p.selection()) : o(p.selection);
      return f.xnsk_admin_ui_realType === "array" ? f : Object.keys(f).map((c) => ({
        label: f[c],
        value: c
      }));
    }
    function S(p) {
      var f, B;
      return (B = (f = e.defaultValue) == null ? void 0 : f[p.propName]) != null ? B : p.type === "select" ? null : "";
    }
    function G() {
      var p, f;
      (f = (p = e == null ? void 0 : e.config) == null ? void 0 : p.cancelBtn) != null && f.click ? e.config.cancelBtn.click() : a("cancel");
    }
    function F(p, f) {
      var B, _, c, P;
      if (((B = f == null ? void 0 : f.onInput) == null ? void 0 : B.xnsk_admin_ui_realType) === "function") {
        let r = (_ = f == null ? void 0 : f.onInput) == null ? void 0 : _.call(f, p);
        r !== void 0 && (s.value[f.propName] = r);
      }
      (c = e.config) != null && c.change ? (P = e.config) == null || P.change(o(s.value), f, p) : a("change", o(s.value), f, p);
    }
    function D() {
      var p;
      (p = v.value) == null || p.validate((f) => {
        var B, _;
        f || ((_ = (B = e.config) == null ? void 0 : B.submitBtn) != null && _.click ? $dialog.warning({
          title: "确定提交？",
          content: "",
          positiveText: "确定",
          negativeText: "取消",
          onPositiveClick: () => {
            var c, P;
            (P = (c = e.config) == null ? void 0 : c.submitBtn) == null || P.click(o(s.value));
          },
          onNegativeClick: () => {
          }
        }) : $dialog.warning({
          title: "确定提交？",
          content: "",
          positiveText: "确定",
          negativeText: "取消",
          onPositiveClick: () => {
            a("submit", o(s.value));
          },
          onNegativeClick: () => {
          }
        }));
      });
    }
    function q(p, f) {
      var B, _;
      if ((f == null ? void 0 : f.xnsk_admin_ui_realType) === void 0)
        (B = v.value) == null || B.validate((c) => p && p(c));
      else {
        let c = f.xnsk_admin_ui_realType === "string" ? [f] : f;
        (_ = v.value) == null || _.validate(
          (P) => {
            p && p(P);
          },
          (P) => c.includes(P == null ? void 0 : P.key)
        );
      }
    }
    function Q() {
      return s.value;
    }
    function fe(p = {}) {
      Object.keys(p).forEach((B) => {
        s.value[B] = p[B];
      });
    }
    return l({
      validate: q,
      getValue: Q,
      setValue: fe
    }), (p, f) => {
      var c, P;
      const B = Ge("n-space"), _ = Ye("trim");
      return d(), O("div", null, [
        U(o(st), {
          model: s.value,
          rules: w.value,
          ref: (r) => {
            v.value = r;
          },
          "label-placement": "left",
          "label-width": t.config.labelWidth || "auto",
          "require-mark-placement": "right"
        }, {
          default: C(() => [
            U(o(Ue), {
              "x-gap": "12",
              cols: 24
            }, {
              default: C(() => [
                (d(!0), O(le, null, ce(h.value, (r) => (d(), $(o(Se), {
                  class: je({ "is-slot": r.type === "slot" && !r.useFormItem }),
                  key: r.propName,
                  span: r.span,
                  offset: r.offset
                }, {
                  default: C(() => [
                    U(o(ut), {
                      label: r.type === "slot" && !r.useFormItem ? null : r.label,
                      path: r.propName
                    }, {
                      default: C(() => {
                        var ee;
                        return [
                          r.type === "input" ? Ae((d(), $(o(Be), {
                            key: 0,
                            value: s.value[r.propName],
                            "onUpdate:value": [(T) => s.value[r.propName] = T, (T) => F(T, r)],
                            placeholder: m(r),
                            maxlength: r.maxlength || 20,
                            disabled: r.disabled,
                            readonly: r.readonly
                          }, null, 8, ["value", "onUpdate:value", "placeholder", "maxlength", "disabled", "readonly"])), [
                            [_]
                          ]) : A("", !0),
                          r.type === "textarea" ? Ae((d(), $(o(Be), {
                            key: 1,
                            value: s.value[r.propName],
                            "onUpdate:value": [(T) => s.value[r.propName] = T, (T) => F(T, r)],
                            type: "textarea",
                            placeholder: m(r),
                            maxlength: r.maxlength || 200,
                            rows: r.rows || 9,
                            "show-count": "",
                            disabled: r.disabled,
                            readonly: r.readonly
                          }, null, 8, ["value", "onUpdate:value", "placeholder", "maxlength", "rows", "disabled", "readonly"])), [
                            [_]
                          ]) : A("", !0),
                          r.type === "select" ? (d(), $(o(Fe), {
                            key: 2,
                            value: s.value[r.propName],
                            "onUpdate:value": [(T) => s.value[r.propName] = T, (T) => F(T, r)],
                            options: y(r),
                            placeholder: m(r),
                            disabled: r.disabled,
                            readonly: r.readonly
                          }, null, 8, ["value", "onUpdate:value", "options", "placeholder", "disabled", "readonly"])) : A("", !0),
                          r.type === "radio" ? (d(), $(o(it), {
                            key: 3,
                            value: s.value[r.propName],
                            "onUpdate:value": [(T) => s.value[r.propName] = T, (T) => F(T, r)],
                            name: r.propName,
                            disabled: r.disabled,
                            readonly: r.readonly
                          }, {
                            default: C(() => [
                              U(B, null, {
                                default: C(() => [
                                  (d(!0), O(le, null, ce(y(r), (T) => (d(), $(o(rt), {
                                    key: T.value,
                                    value: T.value
                                  }, {
                                    default: C(() => [
                                      X(J(T.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "onUpdate:value", "name", "disabled", "readonly"])) : A("", !0),
                          r.type === "checkbox" ? (d(), $(o(ct), {
                            key: 4,
                            value: s.value[r.propName],
                            "onUpdate:value": (T) => s.value[r.propName] = T
                          }, {
                            default: C(() => [
                              X(J(s.value[r.propName]) + " ", 1),
                              U(B, { "item-style": "display: flex;" }, {
                                default: C(() => [
                                  (d(!0), O(le, null, ce(y(r), (T) => (d(), $(o(Pe), {
                                    key: T.value,
                                    value: T.value,
                                    label: T.label
                                  }, null, 8, ["value", "label"]))), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "onUpdate:value"])) : A("", !0),
                          r.type === "text" ? (d(), O("span", {
                            key: 5,
                            style: he(r.style)
                          }, J(((ee = r.text) == null ? void 0 : ee.xnsk_admin_ui_realType) === "function" ? r.text() : r.text), 5)) : A("", !0),
                          r.type === "slot" ? W(p.$slots, r.propName, {
                            key: 6,
                            data: s.value,
                            item: r
                          }, void 0, !0) : A("", !0)
                        ];
                      }),
                      _: 2
                    }, 1032, ["label", "path"])
                  ]),
                  _: 2
                }, 1032, ["class", "span", "offset"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["model", "rules", "label-width"]),
        o(k).btns ? A("", !0) : (d(), O("div", Zt, [
          (c = t.config) != null && c.submitBtn ? (d(), $(o(ae), {
            key: 0,
            class: "btn",
            type: "primary",
            loading: i.value,
            onClick: D
          }, {
            default: C(() => {
              var r, ee;
              return [
                X(J(((ee = (r = t.config) == null ? void 0 : r.submitBtn) == null ? void 0 : ee.label) || "确定"), 1)
              ];
            }),
            _: 1
          }, 8, ["loading"])) : A("", !0),
          (P = t.config) != null && P.submitBtn ? (d(), $(o(ae), {
            key: 1,
            onClick: G
          }, {
            default: C(() => [
              X(" 取消 ")
            ]),
            _: 1
          })) : A("", !0)
        ])),
        o(k).btns ? W(p.$slots, "btns", { key: 1 }, void 0, !0) : A("", !0)
      ]);
    };
  }
}, el = /* @__PURE__ */ oe(Qt, [["__scopeId", "data-v-517828f9"]]);
const tl = {
  class: "form-btns flex justify-center sticky marB20 relative",
  style: { bottom: "0", padding: "20px", "background-color": "#fff", "z-index": "103" }
}, ll = {
  __name: "index",
  setup(t) {
    return (l, a) => (d(), O("div", tl, [
      U(o(dt), { size: [40, 20] }, {
        default: C(() => [
          W(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]));
  }
}, al = /* @__PURE__ */ oe(ll, [["__scopeId", "data-v-d8c9c3a7"]]);
const nl = {
  class: "info-page-value inline-block marL5 padR10 break-all",
  else: ""
}, ol = {
  __name: "index",
  props: {
    config: {
      type: Object,
      defualt: () => {
      }
    },
    data: {
      type: Object,
      defualt: () => {
      }
    }
  },
  setup(t) {
    const l = t;
    de();
    function a(e) {
      var n;
      return typeof e == "string" ? l.data ? (l == null ? void 0 : l.data[e]) || "-" : ((n = l.config) == null ? void 0 : n.data[e]) || "-" : Object.prototype.toString.call(e) === "[object Function]" ? e() : "";
    }
    return (e, n) => {
      var v;
      return d(), O("div", null, [
        t.config.title ? (d(), $(o($e), {
          key: 0,
          class: "marT5 marB15",
          title: t.config.title || ""
        }, null, 8, ["title"])) : A("", !0),
        U(o(Ue), {
          class: je({ "has-border": (v = t.config) == null ? void 0 : v.border })
        }, {
          default: C(() => {
            var k;
            return [
              (d(!0), O(le, null, ce(((k = t.config) == null ? void 0 : k.column) || [], (s, w) => {
                var i;
                return d(), $(o(Se), {
                  class: "info-page-item flex items-baseline",
                  key: (s == null ? void 0 : s.did) || w,
                  span: (i = s.span) != null ? i : 8
                }, {
                  default: C(() => {
                    var h, x;
                    return [
                      s.labelSlot ? W(e.$slots, s.labelSlot, { key: 0 }, void 0, !0) : A("", !0),
                      K("span", {
                        class: "info-page-label inline-block padT10 padB10 padR10",
                        else: "",
                        style: he({
                          minWidth: t.config.labelWidth ? t.config.labelWidth + "px" : "auto",
                          "text-align": (h = t.config.labelAlign) != null ? h : "left"
                        })
                      }, J(s.label) + J((x = t.config) != null && x.useColon ? ":" : ""), 5),
                      s.slot ? W(e.$slots, s.slot, { key: 1 }, void 0, !0) : A("", !0),
                      K("span", nl, J(a(s.value)), 1)
                    ];
                  }),
                  _: 2
                }, 1032, ["span"]);
              }), 128))
            ];
          }),
          _: 3
        }, 8, ["class"])
      ]);
    };
  }
}, sl = /* @__PURE__ */ oe(ol, [["__scopeId", "data-v-de364537"]]);
const ul = { class: "markdown-view overflow-hidden html-default-css" }, il = ["innerHTML"], rl = {
  name: "XnskMdPreview"
}, cl = /* @__PURE__ */ Object.assign(rl, {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "url"
    }
  },
  setup(t) {
    const l = t, a = new yt();
    let e = V(!0), n = V("");
    function v() {
      return ke(this, null, function* () {
        e.value = !1, n.value = "";
        let k = yield St(l.value);
        k && (n.value = a.render(k)), e.value = !0;
      });
    }
    return Oe(() => {
      l.value ? l.type === "url" ? v() : n.value = a.render(l.value) : n.value = "";
    }), (k, s) => (d(), O("div", ul, [
      Ae(U(o(ft), {
        class: "loading",
        size: "large"
      }, null, 512), [
        [Ze, !o(e)]
      ]),
      t.value ? (d(), O("div", {
        key: 0,
        innerHTML: o(n),
        style: { padding: "20px", "border-radius": "6px" }
      }, null, 8, il)) : (d(), $(o(pt), {
        key: 1,
        description: "无数据",
        style: { "margin-top": "60px" }
      }))
    ]));
  }
}), dl = /* @__PURE__ */ oe(cl, [["__scopeId", "data-v-cd3c3a52"]]), fl = ["onClick"], pl = {
  __name: "index",
  props: {
    checked: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:checked"],
  setup(t, { emit: l }) {
    const a = V([]);
    function e() {
      vt.init({
        projectId: "20230704143829127",
        sceneCode: "scdl",
        debug: !0,
        authContext: "https://xnsk.mapfarm.com",
        userId: ""
      }).then((k) => {
        var s;
        a.value = (s = k == null ? void 0 : k.agreementList) != null ? s : [];
      }).catch((k) => {
        console.log(k.message || k.msg || "系统异常"), $message.error(k.message || k.msg || "系统异常");
      });
    }
    e();
    function n(k) {
      k && window.open(k);
    }
    function v(k) {
      l("update:checked", k);
    }
    return (k, s) => (d(), O("div", null, [
      U(o(Pe), {
        "default-checked": t.checked,
        "onUpdate:checked": v
      }, null, 8, ["default-checked"]),
      X(" 请阅读 "),
      (d(!0), O(le, null, ce(a.value, (w, i) => (d(), O("span", {
        class: "cursor-pointer",
        style: { color: "#2d8cf0" },
        key: w.did || i,
        onClick: (h) => n(w.agreementUrl)
      }, " 《" + J(w.agreementName) + "》 ", 9, fl))), 128)),
      X("，并同意 ")
    ]));
  }
};
const gl = {
  __name: "index",
  props: {
    value: {
      type: Array,
      default: []
    },
    treeData: {
      type: Array,
      default: []
    },
    dataKey: {
      type: String,
      default: "did"
    },
    label: {
      type: String,
      default: "name"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    checkable: {
      type: Boolean,
      default: !1
    },
    search: {
      type: Boolean,
      default: !1
    },
    cancelable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click", "update:value", "select"],
  setup(t, { emit: l }) {
    const a = t, e = V("tree_" + ye()), n = de(), v = V(""), k = ne(
      () => wt(a.treeData, a.childrenKey || "children")
    );
    function s(m, y, S) {
      l("update:value", i());
    }
    function w(m, y, S) {
      l("update:value", i());
    }
    function i() {
      var F, D, q;
      let m = (D = (F = e.value.getCheckedData()) == null ? void 0 : F.keys) != null ? D : [], y = (q = e.value.getIndeterminateData().keys) != null ? q : [], S = m.map((Q) => [Q, 1]), G = y.map((Q) => [Q, 0]);
      return [...S, ...G];
    }
    function h(m, y, S) {
      l("select", m, y, S);
    }
    function x({ option: m }) {
      return {
        onClick() {
          l("click", m);
        }
      };
    }
    return (m, y) => (d(), O("div", null, [
      t.search ? (d(), $(o(Be), {
        key: 0,
        class: "marB10",
        value: v.value,
        "onUpdate:value": y[0] || (y[0] = (S) => v.value = S),
        placeholder: "搜索",
        clearable: ""
      }, null, 8, ["value"])) : A("", !0),
      U(o(gt), Te({
        ref: (S) => {
          e.value = S;
        },
        "block-line": "",
        data: k.value,
        "default-checked-keys": (t.value || []).filter((S) => S[1] === 1).map((S) => S[0]),
        "indeterminate-keys": (t.value || []).filter((S) => S[1] === 0).map((S) => S[0]),
        "key-field": t.dataKey,
        "label-field": t.label,
        "children-field": t.childrenKey,
        pattern: v.value,
        checkable: t.checkable,
        "node-props": x,
        cancelable: t.cancelable,
        cascade: "",
        selectable: "",
        "show-irrelevant-nodes": !1
      }, o(n), {
        "onUpdate:checkedKeys": s,
        "onUpdate:indeterminateKeys": w,
        "onUpdate:selectedKeys": h
      }), null, 16, ["data", "default-checked-keys", "indeterminate-keys", "key-field", "label-field", "children-field", "pattern", "checkable", "cancelable"])
    ]));
  }
}, hl = /* @__PURE__ */ oe(gl, [["__scopeId", "data-v-7cebb098"]]), Le = (t, l, a = "", e = {}, n = {}) => (t.interceptors.request.use((v) => (l.beforeRequest && l.beforeRequest(v, n != null ? n : {}), v)), new Promise((v, k) => {
  t.post(a, e).then((s) => {
    var w, i;
    ((w = s.data) == null ? void 0 : w.status) !== 200 && ((i = l == null ? void 0 : l.onError) == null || i.call(l, s.data, n != null ? n : {})), v(s.data);
  }).catch((s) => {
    var w, i, h, x;
    (i = l == null ? void 0 : l.onNetWorkError) == null || i.call(
      l,
      (w = s == null ? void 0 : s.response) != null ? w : {
        data: {
          status: 500,
          data: null,
          message: (s == null ? void 0 : s.message) || "系统异常"
        }
      },
      n != null ? n : {}
    ), v(
      (x = (h = s == null ? void 0 : s.response) == null ? void 0 : h.data) != null ? x : {
        status: 500,
        data: null,
        message: s.message
      }
    );
  }).finally(() => {
  });
}));
function yl(t = null) {
  let l = null;
  const a = {
    beforeRequest: null,
    onNetWorkError: null,
    onError: null
  }, e = (i, h) => {
    i.config.globalProperties.$miniHttp = n(h);
  }, n = (i = {}) => {
    a.beforeRequest = (i == null ? void 0 : i.beforeRequest) || null, a.onNetWorkError = (i == null ? void 0 : i.onNetWorkError) || null, a.onError = (i == null ? void 0 : i.onError) || null;
    const h = {
      baseURL: (i == null ? void 0 : i.baseURL) || "",
      timeout: (i == null ? void 0 : i.timeout) || 6e4,
      headers: (() => {
        let x = {}, m = Object.prototype.toString.call(i == null ? void 0 : i.headers);
        return m === "[object Object]" ? x = i.headers : m === "[object Function]" && (x = i.headers()), x;
      })()
    };
    return l = _t.create(h), v.bind(this);
  }, v = (i = {}, h = null) => {
    let x = Object.prototype.toString.call(i);
    if (x === "[object Object]")
      return k(i);
    if (x === "[object String]")
      return i.includes("/") ? s(i, h) : w(i, h);
  }, k = (i = {}) => {
    let h = {};
    return Object.keys(i).forEach((x) => {
      var y, S;
      let m = Object.prototype.toString.call(i[x]);
      m === "[object String]" ? i[x].includes("/") ? h[x] = s(i[x]) : h[x] = w(i[x]) : m === "[object Array]" && (i[x][0].includes("/") ? h[x] = s(i[x][0], (y = i[x]) == null ? void 0 : y[1]) : h[x] = w(i[x][0], (S = i[x]) == null ? void 0 : S[1]));
    }), h;
  }, s = (i = "", h) => (x, m = {}) => Le(l, a, i, x, H(H({}, h || {}), m || {})), w = (i = "", h = {}) => (x = {}, m = {}) => Le(
    l,
    a,
    "/less/api/auth/common",
    {
      apiCode: i,
      queryParam: x
    },
    H(H({}, h || {}), m || {})
  );
  return t ? n(t) : { install: e, create: n };
}
const vl = {
  baseURL: "",
  beforeRequest: (t, l) => {
    var n;
    console.log("[ extendsConfig ] >", l);
    const { token: a = "" } = l;
    t.headers.Authorization = a, t.headers.appcode = "xnsk_admin_ui";
    const e = (n = l == null ? void 0 : l["Content-Type"]) != null ? n : "application/json;charset=UTF-8";
    t.headers["Content-Type"] = e;
  },
  /* 网络异常 */
  onNetWorkError: (t, l) => {
    console.log(" 异常 >", t, l);
  },
  /* 业务异常  */
  onError: (t, l) => {
    console.log(" 异常 >", t, l);
  }
}, _l = yl(vl);
const bl = { style: { width: "100%" } }, kl = { class: "inline-block uploadBtn" }, ml = {
  key: 0,
  style: { "font-size": "40px", "line-height": "20px" }
}, xl = {
  __name: "index",
  props: {
    value: {
      type: String,
      default: ""
    },
    /* 是否显示文件列表 */
    showFileList: {
      type: Boolean,
      default: () => !0
    },
    /* 选中文件是否直接上传 */
    autoUpload: {
      type: Boolean,
      default: () => !0
    },
    // 是否上传多个
    multipleUpload: {
      type: Boolean,
      default: () => !1
    },
    // obs 桶
    bucket: {
      type: String,
      default: "xnsk-base"
    },
    // 存储路径
    path: {
      type: String,
      default: "base/permission"
    },
    url: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    },
    token: {
      type: String,
      default: ""
    }
  },
  emits: [
    "change",
    "fileChange",
    "update:value",
    "update:fileList"
  ],
  setup(t, { expose: l, emit: a }) {
    const e = t, n = de(), v = V(
      "ref" + (/* @__PURE__ */ new Date()).getTime() + parseInt(Math.random() * 1e4)
    );
    let k = V(!1);
    const s = V([]);
    Qe(
      () => e.value,
      (m) => {
        if ([null, void 0].includes(m)) {
          s.value.splice(0);
          return;
        }
        m._split(",").forEach((S) => {
          s.value.find((F) => F.url === S) || s.value.push({
            url: S,
            status: "finished"
          });
        });
      },
      { deep: !0, immediate: !0 }
    );
    const w = (G) => ke(this, [G], function* ({ file: m, onFinish: y, onError: S }) {
      var Q, fe;
      let F = new FormData();
      F.append("file", m.file), F.append("bucket", e.bucket), F.append("pathPrefix", e.path), Object.keys(e.params).forEach((p) => {
        F.append(p, e.params[p]);
      });
      let q = yield _l(e.url, {
        "Content-Type": "multipart/form-data;charset=UTF-8",
        token: e.token
      })(F);
      if ((q == null ? void 0 : q.status) === 200) {
        const p = Me(10);
        m.url = (fe = (Q = q == null ? void 0 : q.data) == null ? void 0 : Q.url) != null ? fe : "", m.name = p, y();
      } else
        S();
    });
    function i(m) {
    }
    function h(m) {
      return ke(this, null, function* () {
        var y;
        return ((y = n == null ? void 0 : n.accept) == null ? void 0 : y.indexOf(Bt(m.file.name, "."))) === -1 ? ($message.error("格式不正确"), !1) : m.file.size / 1024 > e.maxSize ? ($message.error("文件大小超出限制"), !1) : !0;
      });
    }
    function x({ file: m, fileList: y }) {
      let S = (y || []).filter((G) => G.url).map((G) => G.url);
      a("update:value", S.join(",")), a("update:fileList", y);
    }
    return l({
      submitFile: () => {
        var m;
        (m = v.value) == null || m.submit();
      }
    }), (m, y) => (d(), O("div", bl, [
      U(o(ht), Te({
        ref: (S) => {
          v.value = S;
        },
        "file-list": s.value,
        "onUpdate:fileList": y[0] || (y[0] = (S) => s.value = S),
        onRemove: i,
        multiple: t.multipleUpload,
        "default-upload": t.autoUpload,
        "custom-request": w,
        onBeforeUpload: h,
        onChange: x
      }, o(n)), {
        default: C(() => {
          var S;
          return [
            K("span", kl, [
              ((S = o(n)) == null ? void 0 : S["list-type"]) === "image-card" ? (d(), O("span", ml, "+")) : W(m.$slots, "uploadBtn", {
                key: 1,
                loading: o(k)
              }, void 0, !0)
            ])
          ];
        }),
        _: 3
      }, 16, ["file-list", "multiple", "default-upload"])
    ]));
  }
}, wl = /* @__PURE__ */ oe(xl, [["__scopeId", "data-v-742f8af6"]]), Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlueTitle: $e,
  Dialog: Ve,
  DialogMsg: At,
  Drawer: zt,
  Form: el,
  FormBtns: al,
  Info: sl,
  ListPage: Yt,
  LoginAgreement: pl,
  MarkDown: dl,
  TreeSync: hl,
  UploadFileList: wl
}, Symbol.toStringTag, { value: "Module" }));
const Nl = function(t, l = {}) {
  for (let a in Ne)
    a.startsWith("Xnsk") ? t.component(a, Ne[a]) : t.component("Xnsk" + a, Ne[a]);
}, Ol = H({ install: Nl }, Ne);
export {
  Ol as default
};
//# sourceMappingURL=xnsk-admin-ui.js.map
