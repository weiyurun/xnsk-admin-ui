var qe = Object.defineProperty, He = Object.defineProperties;
var Ke = Object.getOwnPropertyDescriptors;
var ze = Object.getOwnPropertySymbols;
var We = Object.prototype.hasOwnProperty, Je = Object.prototype.propertyIsEnumerable;
var Le = (t, l, a) => l in t ? qe(t, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[l] = a, H = (t, l) => {
  for (var a in l || (l = {}))
    We.call(l, a) && Le(t, a, l[a]);
  if (ze)
    for (var a of ze(l))
      Je.call(l, a) && Le(t, a, l[a]);
  return t;
}, me = (t, l) => He(t, Ke(l));
var ke = (t, l, a) => new Promise((e, n) => {
  var b = (m) => {
    try {
      o(a.next(m));
    } catch (r) {
      n(r);
    }
  }, k = (m) => {
    try {
      o(a.throw(m));
    } catch (r) {
      n(r);
    }
  }, o = (m) => m.done ? e(m.value) : Promise.resolve(m.value).then(b, k);
  o((a = a.apply(t, l)).next());
});
import { useAttrs as de, useSlots as Ce, computed as ne, openBlock as d, createBlock as A, unref as u, isRef as Ee, normalizeStyle as he, withCtx as C, createCommentVNode as j, renderSlot as W, createElementBlock as I, createTextVNode as X, toDisplayString as J, createElementVNode as K, createVNode as L, onMounted as De, mergeProps as Te, defineComponent as Fe, ref as P, watchEffect as je, normalizeClass as Ue, Fragment as le, renderList as ce, withKeys as Xe, h as ge, resolveComponent as Ge, resolveDirective as Ye, withDirectives as Ae, vShow as Ze, watch as Qe } from "vue";
import { NModal as et, NButton as ae, NDrawer as tt, NDrawerContent as lt, useDialog as at, NGrid as Ie, NGi as Se, NInput as Be, NSelect as Oe, NIcon as we, NDataTable as nt, NPagination as ot, NForm as ut, NFormItem as st, NRadioGroup as it, NRadio as rt, NCheckboxGroup as ct, NCheckbox as Ve, NSpace as dt, NSpin as ft, NEmpty as pt, NTree as gt, NUpload as ht } from "naive-ui";
import yt from "markdown-it";
import vt from "houriprotocol";
import bt from "axios";
const oe = (t, l) => {
  const a = t.__vccOpts || t;
  for (const [e, n] of l)
    a[e] = n;
  return a;
}, _t = {
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
    let b = ne({
      get() {
        return a.show;
      },
      set(m) {
        m || o();
      }
    });
    function k() {
      a.callback[0] && a.callback[0]();
    }
    function o() {
      e.onBeforeClose ? l("beforeClose", () => {
        a.callback[1] && (l("update:show", !1), a.callback[1] && a.callback[1]());
      }) : (l("update:show", !1), a.callback[1] && a.callback[1]());
    }
    return (m, r) => (d(), A(u(et), {
      show: u(b),
      "onUpdate:show": r[0] || (r[0] = (v) => Ee(b) ? b.value = v : b = v),
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
        t.title ? (d(), A(u($e), {
          key: 0,
          title: t.title
        }, null, 8, ["title"])) : j("", !0)
      ]),
      default: C(() => [
        W(m.$slots, "default", {}, void 0, !0)
      ]),
      footer: C(() => [
        u(n).footBtn ? W(m.$slots, "footBtn", { key: 0 }, void 0, !0) : (d(), I("div", _t, [
          t.footBtns.length > 0 ? (d(), A(u(ae), {
            key: 0,
            type: "info",
            onClick: k
          }, {
            default: C(() => [
              X(J(t.footBtns[0]), 1)
            ]),
            _: 1
          })) : j("", !0),
          t.footBtns.length > 1 ? (d(), A(u(ae), {
            key: 1,
            type: "info",
            ghost: "",
            onClick: o
          }, {
            default: C(() => [
              X(J(t.footBtns[1]), 1)
            ]),
            _: 1
          })) : j("", !0)
        ]))
      ]),
      _: 3
    }, 8, ["show", "close-on-esc", "mask-closable", "style"]));
  }
}, Pe = /* @__PURE__ */ oe(kt, [["__scopeId", "data-v-3d1e23e0"]]), xt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACPklEQVRYR+2XT4hPURTHP19/M9GMlFK2NlZqkiz8WymKUqRJZJIiTRYWylZKoRBlxcbWikgkRUnIhtmQ8qekjBFFSl+d6b3p9fJ+v3ffm9+Uclav+84953POvffcc0UXsb0LOAgMAnO66Zf+G3gHXAOOS/pcnq9OBm1fAfYkOq1SfwlskPSpqFAJYHs/cGmKnOdmXgDripnoBHAHWN8QIOzOqJh7QdKh/F/HJWjoHNvhfG22d7aX7PwClkl6G+M9ASg6tD0CnC1BnJZ0ZBLA9lzgJLADWNI08mzeG+A2cFTSeIzZvg5sLth9IGnNBECWrrst1ruK9zWwKjac7U3AjYLiN6BfkgPgAHCxZdRV0y9LGrbdD4yVNmafpB8BcK8H0edAEelCSb9tx/f8AukkQFSqpT3KQJhdJGnsP0CTDETBSJGqiyp5CR4CQ3mlqktgewA4D8TtWZRkgJWSntR1XKp6fcBXYFZhPBkgisfjhgBxzL60BYjoh4FXiRCLgTPAtrZLkOi3q3ryEnS1mKjw7wJ8T4w0TsDfuqDkDNwHdkr6mAJgO07AOWBv2004KOlZivNc1/a8rA7MblMHVkt61BBgQVYHZrYBeA7sA6KjiYdFXYk6cArYUmMJRiUtD71oSKa7H/gJbJUUfeO0AsTL6ClwQtJonqXIwC1gY908J+rFUR6IlqxqXgAMAVcTDddVvykpOuJKmXiY2I6uOLrjqZS4FeNIxzuhM0AGsRs4DKxo+WL6AMQ745ik990i+gN2mEgw/3nqggAAAABJRU5ErkJggg==";
function mt(t) {
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
    var b;
    ((b = n == null ? void 0 : n[l]) == null ? void 0 : b.length) === 0 ? n[l] = null : n != null && n[l] && n[l].forEach((k) => e(k));
  }
  return (a || []).forEach((n) => e(n)), e(a), a;
}, Nt = (t = [], l = "children") => {
  let a = t;
  function e(n) {
    var b;
    ((b = n == null ? void 0 : n[l]) == null ? void 0 : b.length) === 0 || (n == null ? void 0 : n[l]) === null ? (delete n[l], n.randomId = ye()) : n != null && n[l] && (n.randomId = ye(), n[l].forEach((k) => e(k)));
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
  src: xt,
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
      set(b) {
        b || l("update:show", !1);
      }
    });
    function n() {
      mt(a.data).then(() => {
        try {
          $message.success("复制成功"), l("success");
        } catch (b) {
          console.log("$message未定义"), l("success");
        }
      });
    }
    return (b, k) => (d(), A(u(Pe), {
      title: t.title,
      show: u(e),
      "onUpdate:show": k[0] || (k[0] = (o) => Ee(e) ? e.value = o : e = o),
      width: "800",
      callback: []
    }, {
      footBtn: C(() => [
        K("div", Tt, [
          L(u(ae), {
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
    return (e, n) => (d(), I("div", Ot, [
      K("div", jt, [
        t.showTitleBar ? (d(), I("div", {
          key: 0,
          class: "blue-bar",
          style: he([{ width: "3px", "border-radius": "2px" }, { height: a.value }])
        }, null, 4)) : j("", !0),
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
    return De(() => {
    }), (a, e) => (d(), A(u(tt), Te({
      "close-on-esc": t.outClosable,
      "mask-closable": t.outClosable,
      "auto-focus": !1
    }, u(l)), {
      default: C(() => [
        L(u(lt), {
          title: u(l).title,
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
}, Rt = /* @__PURE__ */ L(
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
), Et = /* @__PURE__ */ L(
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
), Dt = Fe({
  name: "SearchOutline",
  render: function(l, a) {
    return d(), A("svg", Lt, [Rt, Et]);
  }
}), Ft = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, Vt = /* @__PURE__ */ L(
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
), Pt = /* @__PURE__ */ L(
  "path",
  {
    d: "M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Mt = Fe({
  name: "ReloadOutline",
  render: function(l, a) {
    return d(), A("svg", Ft, [Vt, Pt]);
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
    const e = t, n = P(!1), b = Ce(), k = de(), o = at(), m = ne(() => {
      var s, p, h, O, U;
      return ((h = (p = (s = e == null ? void 0 : e.config) == null ? void 0 : s.params) == null ? void 0 : p.columns) == null ? void 0 : h.length) > 0 ? (U = (O = e == null ? void 0 : e.config) == null ? void 0 : O.params) == null ? void 0 : U.columns : [];
    }), r = ne(() => {
      var p, h;
      let s = ((h = (p = e == null ? void 0 : e.config) == null ? void 0 : p.table) == null ? void 0 : h.title) || "";
      return Object.prototype.toString.call(s) === "[object Function]" ? s() : s;
    }), v = P({}), w = P([]);
    let x = P(0);
    const y = P({
      page: 1,
      pageSize: 10,
      pageSizeOptions: [1, 5, 10, 20, 50],
      itemCount: 0,
      isDel: 0
    });
    function S(s) {
      y.value.pageSize = s, f();
    }
    function G(s) {
      y.value.page = s, f();
    }
    function F(s) {
      var p, h, O;
      (O = (h = (p = e == null ? void 0 : e.config) == null ? void 0 : p.params) == null ? void 0 : h.change) == null || O.call(h, v.value, s);
    }
    let D = P([]), q = P({});
    function Q() {
      m.value.length && m.value.forEach((s) => {
        var p, h;
        s.type === "input" ? v.value[s.propName] = ((p = s == null ? void 0 : s.defaultValue) == null ? void 0 : p.xnsk_admin_ui_realValue) || "" : s.type === "select" && (v.value[s.propName] = s.defaultValue === "" || s.defaultValue === void 0 ? null : (h = s.defaultValue) == null ? void 0 : h.xnsk_admin_ui_realValue);
      });
    }
    function fe() {
      var p, h, O, U;
      let s = ((h = (p = e == null ? void 0 : e.config) == null ? void 0 : p.table) == null ? void 0 : h.columns) || [];
      w.value = s.map((T, z) => {
        var Y;
        let M = {
          ellipsis: T.unEllipsis ? !1 : {
            tooltip: !0
          },
          align: (Y = e == null ? void 0 : e.config) != null && Y.isTree && z === 0 ? "left" : T.align || "center",
          titleAlign: "center",
          resizable: !1
          /* ...item, */
        };
        return T.customValue ? M.render = (R) => T.customValue(R) : T.slot ? M.render = (R) => ge(b[T.slot], R) : M.render = (R) => R[T.key] === null || R[T.key] === void 0 || R[T.key] === "" ? "—" : R[T.key], T.key === "actions" && (M.fixed = "right", M.render = (R) => {
          var ie, ve, be;
          let ue = [];
          return ((be = (ve = (ie = e == null ? void 0 : e.config) == null ? void 0 : ie.table) == null ? void 0 : ve.actions) == null ? void 0 : be.length) > 0 && e.config.table.actions.forEach((E) => {
            var te, Z, _e;
            let re, pe;
            ((te = E.show) == null ? void 0 : te.xnsk_admin_ui_realType) === "function" ? re = E.show(R) : re = E.show, ((Z = E.disabled) == null ? void 0 : Z.xnsk_admin_ui_realType) === "function" ? pe = E.disabled(R) : pe = (_e = E.disabled) != null ? _e : !1;
            let se, N = Object.prototype.toString.call(E.icon);
            N === "[object String]" ? se = ge(
              "img",
              {
                src: E.icon
              },
              { default: () => "" }
            ) : N === "[object Object]" && (se = E.icon), (re || re === void 0) && ue.push(
              ge(
                ae,
                {
                  size: "small",
                  /* loading: _loading, */
                  quaternary: !0,
                  type: E.type || "primary",
                  disabled: pe,
                  onClick: () => {
                    E != null && E.autoWarn ? o.warning({
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
                    se && ge(we, {
                      component: se
                    }),
                    ge(
                      "div",
                      {
                        style: `margin-left:${se ? 5 : 0}px;`
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
              default: () => [...ue]
            }
          );
        }), H(H({}, M), T);
      }), (O = e == null ? void 0 : e.config) != null && O.expand && w.value.unshift({
        type: "expand",
        align: "right",
        expandable: (T) => !0,
        renderExpand: (U = e == null ? void 0 : e.config) == null ? void 0 : U.expand
      });
    }
    function g(s = []) {
      let p = Object.prototype.toString.call(s);
      if (p === "[object Array]")
        return s;
      if (p === "[object Object]")
        return Object.keys(s).map((U) => ({
          label: s[U],
          value: U
        }));
    }
    function f(s = {}, p = null) {
      var h, O, U, T;
      if (v.value = H(H({}, v.value), s), ((U = (O = (h = e == null ? void 0 : e.config) == null ? void 0 : h.data) == null ? void 0 : O.xnsk_admin_ui_realValue) == null ? void 0 : U.length) > 0) {
        if ((T = e == null ? void 0 : e.config) != null && T.isTree) {
          let z = e.config.data.xnsk_admin_ui_realValue.map((M) => me(H({}, M), { randomId: ye() }));
          D.value = Nt(z);
        } else
          D.value = e.config.data.xnsk_admin_ui_realValue;
        y.value.itemCount = e.config.data.xnsk_admin_ui_realValue.length;
        return;
      }
      e.config.apiName && (n.value = !0, e.config.apiName(me(H({}, v.value), {
        pageNum: y.value.page,
        pageSize: y.value.pageSize
      })).then((z) => {
        var M, Y, R;
        if (p && p(z), z.status === 200) {
          let ue = (z == null ? void 0 : z.list) || ((M = z == null ? void 0 : z.data) == null ? void 0 : M.list) || [];
          (Y = e == null ? void 0 : e.config) != null && Y.isTree ? D.value = ue.map((ie) => me(H({}, ie), { getRandomId: ye() })) : D.value = ue, q.value = z || {}, y.value.itemCount = z.total || z.data.total, y.value.page = z.pageNum || z.data.pageNum, a("success", q.value);
        } else
          (R = e == null ? void 0 : e.config) != null && R.showErrMsg && $message.error(z.message);
      }).finally(() => {
        n.value = !1, a("finally");
      }));
    }
    function B(s) {
      return new Promise((p, h) => {
        a("rowLoad", s, (O = []) => {
          s.children = O.map((U) => H({}, U)), p();
        });
      });
    }
    const _ = ne(() => {
      var s, p, h, O, U, T, z, M, Y, R;
      return ((s = e == null ? void 0 : e.config) == null ? void 0 : s.expandedIndex) !== void 0 ? (R = (Y = (T = (h = D.value[(p = e.config) == null ? void 0 : p.expandedIndex]) == null ? void 0 : h.did) != null ? T : (U = D.value[(O = e.config) == null ? void 0 : O.expandedIndex]) == null ? void 0 : U.id) != null ? Y : (M = D.value[(z = e.config) == null ? void 0 : z.expandedIndex]) == null ? void 0 : M.randomId) != null ? R : "" : null;
    });
    function c() {
      y.value.page = 1, f(), a("search");
    }
    function V() {
      return ke(this, null, function* () {
        var s, p, h, O;
        for (let U in v.value) {
          let T = m.value.find((z) => z.propName === U);
          T && !((s = T == null ? void 0 : T.readOnly) != null && s.realValue) && !((p = T == null ? void 0 : T.hidden) != null && p.realValue) && (v.value[U] = (O = (h = T == null ? void 0 : T.defaultValue) == null ? void 0 : h.realValue) != null ? O : null);
        }
        c(), a("search");
      });
    }
    function i(s) {
      var p;
      return s != null && s.show ? ((p = s.show) == null ? void 0 : p.xnsk_admin_ui_realType) === "function" ? u(s.show()) : u(s.show) : !0;
    }
    function ee(s) {
      var p;
      return s != null && s.disabled ? ((p = s.disabled) == null ? void 0 : p.xnsk_admin_ui_realType) === "function" ? u(s.disabled()) : u(s.disabled) : !1;
    }
    function $(s) {
      return (s == null ? void 0 : s.xnsk_admin_ui_realType) === "function" ? u(s()) : u(s);
    }
    function xe(s) {
      var p, h;
      ((h = (p = e.config) == null ? void 0 : p.onUpdateChecked) == null ? void 0 : h.xnsk_admin_ui_realType) === "function" ? e.config.onUpdateChecked(s) : a("onUpdateChecked", s);
    }
    return De(() => {
      var s;
      Q(), fe(), !((s = e.config) != null && s.unLoad) && f(), x.value = w.value.reduce((p, h) => p + (h.minWidth || h.width || 0), 0);
    }), je(() => {
      var s, p, h, O, U;
      ((p = (s = e.config) == null ? void 0 : s.data) == null ? void 0 : p.xnsk_admin_ui_realType) === "asyncfunction" ? (O = (h = e.config) == null ? void 0 : h.data) == null || O.call(h).then((T) => {
        D.value = T;
      }) : ((U = e.config) == null ? void 0 : U.data) !== void 0 && f();
    }), l({
      getTableData: f,
      refresh: f,
      pageData: q,
      loading: n,
      params: v
    }), (s, p) => {
      var h, O, U, T, z, M, Y, R, ue, ie, ve, be, E, re, pe, se;
      return d(), I("div", {
        class: Ue(["list-page", { noPadding: (h = e == null ? void 0 : e.config) == null ? void 0 : h.noPadding }]),
        style: he({ height: (U = (O = e == null ? void 0 : e.config) == null ? void 0 : O.height) != null ? U : "100%" })
      }, [
        K("div", qt, [
          W(s.$slots, "top", {
            dataList: u(D),
            loading: n.value
          }, void 0, !0),
          m.value.length > 0 && !t.config.params.hidden ? (d(), I("div", Ht, [
            L(u(Ie), {
              "x-gap": "12",
              cols: "3 s:3 m:4 l:5 xl:6",
              responsive: "screen"
            }, {
              default: C(() => [
                (d(!0), I(le, null, ce(m.value, (N, te) => (d(), I(le, null, [
                  N.hidden ? j("", !0) : (d(), A(u(Se), {
                    key: (N == null ? void 0 : N.did) || te
                  }, {
                    default: C(() => [
                      N.type === "input" ? (d(), A(u(Be), {
                        key: 0,
                        value: v.value[N.propName],
                        "onUpdate:value": [(Z) => v.value[N.propName] = Z, (Z) => F(N)],
                        placeholder: N.placeholder || "请输入" + N.label,
                        clearable: "",
                        disabled: N.disabled === !0 || !1,
                        maxlength: N.maxlength || 20,
                        onKeyup: Xe(c, ["enter"])
                      }, null, 8, ["value", "onUpdate:value", "placeholder", "disabled", "maxlength", "onKeyup"])) : j("", !0),
                      N.type === "select" ? (d(), A(u(Oe), {
                        key: 1,
                        value: v.value[N.propName],
                        "onUpdate:value": [(Z) => v.value[N.propName] = Z, (Z) => F(N)],
                        options: g(N.selection),
                        placeholder: N.placeholder || "请选择" + N.label,
                        clearable: "",
                        disabled: N.disabled === !0 || !1
                      }, null, 8, ["value", "onUpdate:value", "options", "placeholder", "disabled"])) : j("", !0)
                    ]),
                    _: 2
                  }, 1024))
                ], 64))), 256)),
                L(u(Se), { suffix: !0 }, {
                  default: C(() => [
                    K("div", Kt, [
                      L(u(ae), {
                        type: "primary",
                        onClick: c
                      }, {
                        icon: C(() => [
                          L(u(we), null, {
                            default: C(() => [
                              L(u(Dt))
                            ]),
                            _: 1
                          })
                        ]),
                        default: C(() => [
                          X(" 查询")
                        ]),
                        _: 1
                      }),
                      L(u(ae), {
                        class: "ml-3",
                        onClick: V
                      }, {
                        icon: C(() => [
                          L(u(we), null, {
                            default: C(() => [
                              L(u(Mt))
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
          ])) : j("", !0),
          W(s.$slots, "center", {
            dataList: u(D),
            loading: n.value
          }, void 0, !0),
          (z = (T = e == null ? void 0 : e.config) == null ? void 0 : T.table) != null && z.title || (Y = (M = e == null ? void 0 : e.config) == null ? void 0 : M.table) != null && Y.headBtns ? (d(), I("div", Wt, [
            (ue = (R = e == null ? void 0 : e.config) == null ? void 0 : R.table) != null && ue.title ? (d(), A(u($e), {
              key: 0,
              size: "16px",
              title: r.value
            }, null, 8, ["title"])) : j("", !0),
            K("p", Jt, [
              (d(!0), I(le, null, ce(((ve = (ie = e == null ? void 0 : e.config) == null ? void 0 : ie.table) == null ? void 0 : ve.headBtns) || [], (N, te) => (d(), I(le, null, [
                i(N) ? (d(), A(u(ae), {
                  type: N.type || "primary",
                  class: "marL15",
                  key: te,
                  loading: $(N.loading),
                  disabled: ee(N),
                  onClick: N.click
                }, {
                  default: C(() => [
                    N.icon ? (d(), A(u(we), {
                      key: 0,
                      component: N.icon,
                      style: { "margin-right": "8px" }
                    }, null, 8, ["component"])) : j("", !0),
                    K("span", null, J(N.label), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "loading", "disabled", "onClick"])) : j("", !0)
              ], 64))), 256))
            ])
          ])) : j("", !0),
          W(s.$slots, "tableHeader", {
            dataList: u(D),
            loading: n.value
          }, void 0, !0),
          K("div", Xt, [
            L(u(nt), Te({
              columns: w.value,
              data: u(D),
              "scroll-x": u(x),
              striped: "",
              loading: n.value,
              "row-key": (N) => {
                var te, Z, _e;
                return (_e = (Z = (te = N.did) != null ? te : N.id) != null ? Z : N.randomId) != null ? _e : "";
              },
              pagination: ((be = e == null ? void 0 : e.config) == null ? void 0 : be.data) && !((E = e == null ? void 0 : e.config) != null && E.unPagination) && {
                page: y.value.page,
                pageSize: y.value.pageSize,
                showSizePicker: !0,
                pageSizes: y.value.pageSizeOptions,
                itemCount: y.value.itemCount,
                showQuickJumper: !0
              },
              "on-update:page-size": S,
              "on-update:page": G,
              "on-update:checked-row-keys": xe,
              "children-key": (re = e == null ? void 0 : e.config) != null && re.isTree ? ((pe = e == null ? void 0 : e.config) == null ? void 0 : pe.childrenKey) || "children" : null,
              "default-expanded-row-keys": [_.value],
              onLoad: B
            }, u(k)), null, 16, ["columns", "data", "scroll-x", "loading", "row-key", "pagination", "children-key", "default-expanded-row-keys"])
          ]),
          W(s.$slots, "footer", {
            dataList: u(D),
            loading: n.value
          }, void 0, !0)
        ]),
        (se = e == null ? void 0 : e.config) != null && se.data ? j("", !0) : (d(), A(u(ot), {
          key: 0,
          class: "list-page-table-pagination",
          page: y.value.page,
          "onUpdate:page": p[0] || (p[0] = (N) => y.value.page = N),
          "page-size": y.value.pageSize,
          "onUpdate:pageSize": p[1] || (p[1] = (N) => y.value.pageSize = N),
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
}, Yt = /* @__PURE__ */ oe(Gt, [["__scopeId", "data-v-c04b668b"]]);
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
      "input-select": "请输入",
      input: "请输入",
      textarea: "请输入",
      select: "请选择",
      radio: "请选择",
      checkbox: "请选择",
      slot: "缺少"
    }, b = P("from_" + ye()), k = Ce();
    de();
    const o = P({}), m = P({}), r = ne(() => {
      var g, f, B;
      return (f = (g = e.config) == null ? void 0 : g.submitBtn) != null && f.loading ? ((B = e.config.submitBtn.loading) == null ? void 0 : B.xnsk_admin_ui_realType) === "function" ? u(e.config.submitBtn.loading()) : u(e.config.submitBtn.loading) : !1;
    }), v = ne(() => {
      var f, B;
      let g = [];
      if (((B = (f = e.config) == null ? void 0 : f.columns) == null ? void 0 : B.length) > 0)
        return e.config.columns.forEach((_) => {
          var ee, $, xe, s;
          let c = {};
          c.label = _.label, c.type = _.type, c.useFormItem = _.useFormItem || !1, c.propName = _.propName, c.required = _.required, c.maxlength = _.maxlength, c.rows = _.rows || 9, c.validator = _.validator || null, c.trigger = _.trigger || ((ee = e.config) == null ? void 0 : ee.trigger) || "blur", c.selection = _.selection || [], c.span = _.span || 24, c.offset = _.offset || 0, c.onInput = _.onInput || null, c.text = _.text || "", c.style = _.style || "";
          let V = {
            required: c == null ? void 0 : c.required,
            trigger: c.trigger,
            key: c == null ? void 0 : c.propName,
            validator(p, h) {
              var O, U;
              if (((O = c == null ? void 0 : c.validator) == null ? void 0 : O.xnsk_admin_ui_realType) === "function")
                return c == null ? void 0 : c.validator(h);
              if (((U = c == null ? void 0 : c.validator) == null ? void 0 : U.xnsk_admin_ui_realType) === void 0)
                return c != null && c.required && [null, void 0, ""].includes(h) ? new Error(`${n[c.type]}${c.label}`) : (h == null ? void 0 : h.xnsk_admin_ui_realType) === "array" && h.length === 0 ? new Error(`${n[c.type]}${c.label}`) : !0;
            }
          };
          m.value[c.propName] = V, _.disabled !== void 0 && ((($ = _.disabled) == null ? void 0 : $.xnsk_admin_ui_realType) === "function" ? _.disabled() : _.disabled) && (c.disabled = !0), _.readonly !== void 0 && (((xe = _.readonly) == null ? void 0 : xe.xnsk_admin_ui_realType) === "function" ? _.readonly() : _.readonly) && (c.readonly = !0), (_.show === void 0 || (((s = _.show) == null ? void 0 : s.xnsk_admin_ui_realType) === "function" ? _.show(o.value) : _.show)) && g.push(c);
        }), g;
    });
    w(), je(() => {
      Object.keys(e.defaultValue).forEach((f) => {
        var _;
        let B = (_ = e.config) == null ? void 0 : _.columns.find((c) => c.propName === f);
        B && (o.value[f] = S(B));
      });
    });
    function w() {
      var f;
      (((f = e.config) == null ? void 0 : f.columns) || []).forEach((B) => {
        switch (B.type) {
          case "input":
          case "textarea":
            B.propName && (o.value[B.propName] = "");
            break;
          case "select":
            B.propName && (o.value[B.propName] = null);
            break;
        }
      });
    }
    function x(g) {
      return g.placeholder ? g.placeholder : g.type === "select" ? `请选择${g.label}` : `请输入${g.label}`;
    }
    function y(g) {
      var B;
      let f = ((B = g.selection) == null ? void 0 : B.xnsk_admin_ui_realType) === "function" ? u(g.selection()) : u(g.selection);
      return f.xnsk_admin_ui_realType === "array" ? f : Object.keys(f).map((c) => ({
        label: f[c],
        value: c
      }));
    }
    function S(g) {
      var f, B;
      return (B = (f = e.defaultValue) == null ? void 0 : f[g.propName]) != null ? B : g.type === "select" ? null : "";
    }
    function G() {
      var g, f;
      (f = (g = e == null ? void 0 : e.config) == null ? void 0 : g.cancelBtn) != null && f.click ? e.config.cancelBtn.click() : a("cancel");
    }
    function F(g, f) {
      var B, _, c, V;
      if (((B = f == null ? void 0 : f.onInput) == null ? void 0 : B.xnsk_admin_ui_realType) === "function") {
        let i = (_ = f == null ? void 0 : f.onInput) == null ? void 0 : _.call(f, g);
        i !== void 0 && (o.value[f.propName] = i);
      }
      (c = e.config) != null && c.change ? (V = e.config) == null || V.change(u(o.value), f, g) : a("change", u(o.value), f, g);
    }
    function D() {
      var g;
      (g = b.value) == null || g.validate((f) => {
        var B, _;
        f || ((_ = (B = e.config) == null ? void 0 : B.submitBtn) != null && _.click ? $dialog.warning({
          title: "确定提交？",
          content: "",
          positiveText: "确定",
          negativeText: "取消",
          onPositiveClick: () => {
            var c, V;
            (V = (c = e.config) == null ? void 0 : c.submitBtn) == null || V.click(u(o.value));
          },
          onNegativeClick: () => {
          }
        }) : $dialog.warning({
          title: "确定提交？",
          content: "",
          positiveText: "确定",
          negativeText: "取消",
          onPositiveClick: () => {
            a("submit", u(o.value));
          },
          onNegativeClick: () => {
          }
        }));
      });
    }
    function q(g, f) {
      var B, _;
      if ((f == null ? void 0 : f.xnsk_admin_ui_realType) === void 0)
        (B = b.value) == null || B.validate((c) => g && g(c));
      else {
        let c = f.xnsk_admin_ui_realType === "string" ? [f] : f;
        (_ = b.value) == null || _.validate(
          (V) => {
            g && g(V);
          },
          (V) => c.includes(V == null ? void 0 : V.key)
        );
      }
    }
    function Q() {
      return o.value;
    }
    function fe(g = {}) {
      Object.keys(g).forEach((B) => {
        o.value[B] = g[B];
      });
    }
    return l({
      validate: q,
      getValue: Q,
      setValue: fe
    }), (g, f) => {
      var c, V;
      const B = Ge("n-space"), _ = Ye("trim");
      return d(), I("div", null, [
        L(u(ut), {
          model: o.value,
          rules: m.value,
          ref: (i) => {
            b.value = i;
          },
          "label-placement": "left",
          "label-width": t.config.labelWidth || "auto",
          "require-mark-placement": "right"
        }, {
          default: C(() => [
            L(u(Ie), {
              "x-gap": "12",
              cols: 24
            }, {
              default: C(() => [
                (d(!0), I(le, null, ce(v.value, (i) => (d(), A(u(Se), {
                  class: Ue({ "is-slot": i.type === "slot" && !i.useFormItem }),
                  key: i.propName,
                  span: i.span,
                  offset: i.offset
                }, {
                  default: C(() => [
                    L(u(st), {
                      label: i.type === "slot" && !i.useFormItem ? null : i.label,
                      path: i.propName
                    }, {
                      default: C(() => {
                        var ee;
                        return [
                          i.type === "input" ? Ae((d(), A(u(Be), {
                            key: 0,
                            value: o.value[i.propName],
                            "onUpdate:value": [($) => o.value[i.propName] = $, ($) => F($, i)],
                            placeholder: x(i),
                            maxlength: i.maxlength || 20,
                            disabled: i.disabled,
                            readonly: i.readonly
                          }, null, 8, ["value", "onUpdate:value", "placeholder", "maxlength", "disabled", "readonly"])), [
                            [_]
                          ]) : j("", !0),
                          i.type === "input-select" ? (d(), A(u(Oe), {
                            key: 1,
                            class: "input-select-select",
                            value: o.value[i.propName],
                            options: y(i),
                            placeholder: x(i),
                            disabled: i.disabled,
                            readonly: i.readonly,
                            "show-on-focus": "",
                            filterable: "",
                            tag: "",
                            "ignore-composition": !1,
                            onInput: ($) => {
                              o.value[i.propName] = $.target.value;
                            },
                            "onUpdate:value": ($) => {
                              o.value[i.propName] = $;
                            }
                          }, null, 8, ["value", "options", "placeholder", "disabled", "readonly", "onInput", "onUpdate:value"])) : j("", !0),
                          i.type === "textarea" ? Ae((d(), A(u(Be), {
                            key: 2,
                            value: o.value[i.propName],
                            "onUpdate:value": [($) => o.value[i.propName] = $, ($) => F($, i)],
                            type: "textarea",
                            placeholder: x(i),
                            maxlength: i.maxlength || 200,
                            rows: i.rows || 9,
                            "show-count": "",
                            disabled: i.disabled,
                            readonly: i.readonly
                          }, null, 8, ["value", "onUpdate:value", "placeholder", "maxlength", "rows", "disabled", "readonly"])), [
                            [_]
                          ]) : j("", !0),
                          i.type === "select" ? (d(), A(u(Oe), {
                            key: 3,
                            value: o.value[i.propName],
                            "onUpdate:value": [($) => o.value[i.propName] = $, ($) => F($, i)],
                            options: y(i),
                            placeholder: x(i),
                            disabled: i.disabled,
                            readonly: i.readonly
                          }, null, 8, ["value", "onUpdate:value", "options", "placeholder", "disabled", "readonly"])) : j("", !0),
                          i.type === "radio" ? (d(), A(u(it), {
                            key: 4,
                            value: o.value[i.propName],
                            "onUpdate:value": [($) => o.value[i.propName] = $, ($) => F($, i)],
                            name: i.propName,
                            disabled: i.disabled,
                            readonly: i.readonly
                          }, {
                            default: C(() => [
                              L(B, null, {
                                default: C(() => [
                                  (d(!0), I(le, null, ce(y(i), ($) => (d(), A(u(rt), {
                                    key: $.value,
                                    value: $.value
                                  }, {
                                    default: C(() => [
                                      X(J($.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "onUpdate:value", "name", "disabled", "readonly"])) : j("", !0),
                          i.type === "checkbox" ? (d(), A(u(ct), {
                            key: 5,
                            value: o.value[i.propName],
                            "onUpdate:value": ($) => o.value[i.propName] = $
                          }, {
                            default: C(() => [
                              X(J(o.value[i.propName]) + " ", 1),
                              L(B, { "item-style": "display: flex;" }, {
                                default: C(() => [
                                  (d(!0), I(le, null, ce(y(i), ($) => (d(), A(u(Ve), {
                                    key: $.value,
                                    value: $.value,
                                    label: $.label
                                  }, null, 8, ["value", "label"]))), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "onUpdate:value"])) : j("", !0),
                          i.type === "text" ? (d(), I("span", {
                            key: 6,
                            style: he(i.style)
                          }, J(((ee = i.text) == null ? void 0 : ee.xnsk_admin_ui_realType) === "function" ? i.text() : i.text), 5)) : j("", !0),
                          i.type === "slot" ? W(g.$slots, i.propName, {
                            key: 7,
                            data: o.value,
                            item: i
                          }, void 0, !0) : j("", !0)
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
        u(k).btns ? j("", !0) : (d(), I("div", Zt, [
          (c = t.config) != null && c.submitBtn ? (d(), A(u(ae), {
            key: 0,
            class: "btn",
            type: "primary",
            loading: r.value,
            onClick: D
          }, {
            default: C(() => {
              var i, ee;
              return [
                X(J(((ee = (i = t.config) == null ? void 0 : i.submitBtn) == null ? void 0 : ee.label) || "确定"), 1)
              ];
            }),
            _: 1
          }, 8, ["loading"])) : j("", !0),
          (V = t.config) != null && V.submitBtn ? (d(), A(u(ae), {
            key: 1,
            onClick: G
          }, {
            default: C(() => [
              X(" 取消 ")
            ]),
            _: 1
          })) : j("", !0)
        ])),
        u(k).btns ? W(g.$slots, "btns", { key: 1 }, void 0, !0) : j("", !0)
      ]);
    };
  }
}, el = /* @__PURE__ */ oe(Qt, [["__scopeId", "data-v-c14b9bcf"]]);
const tl = {
  class: "form-btns flex justify-center sticky marB20 relative",
  style: { bottom: "0", padding: "20px", "background-color": "#fff", "z-index": "103" }
}, ll = {
  __name: "index",
  setup(t) {
    return (l, a) => (d(), I("div", tl, [
      L(u(dt), { size: [40, 20] }, {
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
      var b;
      return d(), I("div", null, [
        t.config.title ? (d(), A(u($e), {
          key: 0,
          class: "marT5 marB15",
          title: t.config.title || ""
        }, null, 8, ["title"])) : j("", !0),
        L(u(Ie), {
          class: Ue({ "has-border": (b = t.config) == null ? void 0 : b.border })
        }, {
          default: C(() => {
            var k;
            return [
              (d(!0), I(le, null, ce(((k = t.config) == null ? void 0 : k.column) || [], (o, m) => {
                var r;
                return d(), A(u(Se), {
                  class: "info-page-item flex items-baseline",
                  key: (o == null ? void 0 : o.did) || m,
                  span: (r = o.span) != null ? r : 8
                }, {
                  default: C(() => {
                    var v, w;
                    return [
                      o.labelSlot ? W(e.$slots, o.labelSlot, { key: 0 }, void 0, !0) : j("", !0),
                      K("span", {
                        class: "info-page-label inline-block padT10 padB10 padR10",
                        else: "",
                        style: he({
                          minWidth: t.config.labelWidth ? t.config.labelWidth + "px" : "auto",
                          "text-align": (v = t.config.labelAlign) != null ? v : "left"
                        })
                      }, J(o.label) + J((w = t.config) != null && w.useColon ? ":" : ""), 5),
                      o.slot ? W(e.$slots, o.slot, { key: 1 }, void 0, !0) : j("", !0),
                      K("span", nl, J(a(o.value)), 1)
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
}, ul = /* @__PURE__ */ oe(ol, [["__scopeId", "data-v-de364537"]]);
const sl = { class: "markdown-view overflow-hidden html-default-css" }, il = ["innerHTML"], rl = {
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
    let e = P(!0), n = P("");
    function b() {
      return ke(this, null, function* () {
        e.value = !1, n.value = "";
        let k = yield St(l.value);
        k && (n.value = a.render(k)), e.value = !0;
      });
    }
    return je(() => {
      l.value ? l.type === "url" ? b() : n.value = a.render(l.value) : n.value = "";
    }), (k, o) => (d(), I("div", sl, [
      Ae(L(u(ft), {
        class: "loading",
        size: "large"
      }, null, 512), [
        [Ze, !u(e)]
      ]),
      t.value ? (d(), I("div", {
        key: 0,
        innerHTML: u(n),
        style: { padding: "20px", "border-radius": "6px" }
      }, null, 8, il)) : (d(), A(u(pt), {
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
    const a = P([]);
    function e() {
      vt.init({
        projectId: "20230704143829127",
        sceneCode: "scdl",
        debug: !0,
        authContext: "https://xnsk.mapfarm.com",
        userId: ""
      }).then((k) => {
        var o;
        a.value = (o = k == null ? void 0 : k.agreementList) != null ? o : [];
      }).catch((k) => {
        console.log(k.message || k.msg || "系统异常"), $message.error(k.message || k.msg || "系统异常");
      });
    }
    e();
    function n(k) {
      k && window.open(k);
    }
    function b(k) {
      l("update:checked", k);
    }
    return (k, o) => (d(), I("div", null, [
      L(u(Ve), {
        "default-checked": t.checked,
        "onUpdate:checked": b
      }, null, 8, ["default-checked"]),
      X(" 请阅读 "),
      (d(!0), I(le, null, ce(a.value, (m, r) => (d(), I("span", {
        class: "cursor-pointer",
        style: { color: "#2d8cf0" },
        key: m.did || r,
        onClick: (v) => n(m.agreementUrl)
      }, " 《" + J(m.agreementName) + "》 ", 9, fl))), 128)),
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
    const a = t, e = P("tree_" + ye()), n = de(), b = P(""), k = ne(
      () => wt(a.treeData, a.childrenKey || "children")
    );
    function o(x, y, S) {
      l("update:value", r());
    }
    function m(x, y, S) {
      l("update:value", r());
    }
    function r() {
      var F, D, q;
      let x = (D = (F = e.value.getCheckedData()) == null ? void 0 : F.keys) != null ? D : [], y = (q = e.value.getIndeterminateData().keys) != null ? q : [], S = x.map((Q) => [Q, 1]), G = y.map((Q) => [Q, 0]);
      return [...S, ...G];
    }
    function v(x, y, S) {
      l("select", x, y, S);
    }
    function w({ option: x }) {
      return {
        onClick() {
          l("click", x);
        }
      };
    }
    return (x, y) => (d(), I("div", null, [
      t.search ? (d(), A(u(Be), {
        key: 0,
        class: "marB10",
        value: b.value,
        "onUpdate:value": y[0] || (y[0] = (S) => b.value = S),
        placeholder: "搜索",
        clearable: ""
      }, null, 8, ["value"])) : j("", !0),
      L(u(gt), Te({
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
        pattern: b.value,
        checkable: t.checkable,
        "node-props": w,
        cancelable: t.cancelable,
        cascade: "",
        selectable: "",
        "show-irrelevant-nodes": !1
      }, u(n), {
        "onUpdate:checkedKeys": o,
        "onUpdate:indeterminateKeys": m,
        "onUpdate:selectedKeys": v
      }), null, 16, ["data", "default-checked-keys", "indeterminate-keys", "key-field", "label-field", "children-field", "pattern", "checkable", "cancelable"])
    ]));
  }
}, hl = /* @__PURE__ */ oe(gl, [["__scopeId", "data-v-7cebb098"]]), Re = (t, l, a = "", e = {}, n = {}) => (t.interceptors.request.use((b) => (l.beforeRequest && l.beforeRequest(b, n != null ? n : {}), b)), new Promise((b, k) => {
  t.post(a, e).then((o) => {
    var m, r;
    ((m = o.data) == null ? void 0 : m.status) !== 200 && ((r = l == null ? void 0 : l.onError) == null || r.call(l, o.data, n != null ? n : {})), b(o.data);
  }).catch((o) => {
    var m, r, v, w;
    (r = l == null ? void 0 : l.onNetWorkError) == null || r.call(
      l,
      (m = o == null ? void 0 : o.response) != null ? m : {
        data: {
          status: 500,
          data: null,
          message: (o == null ? void 0 : o.message) || "系统异常"
        }
      },
      n != null ? n : {}
    ), b(
      (w = (v = o == null ? void 0 : o.response) == null ? void 0 : v.data) != null ? w : {
        status: 500,
        data: null,
        message: o.message
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
  }, e = (r, v) => {
    r.config.globalProperties.$miniHttp = n(v);
  }, n = (r = {}) => {
    a.beforeRequest = (r == null ? void 0 : r.beforeRequest) || null, a.onNetWorkError = (r == null ? void 0 : r.onNetWorkError) || null, a.onError = (r == null ? void 0 : r.onError) || null;
    const v = {
      baseURL: (r == null ? void 0 : r.baseURL) || "",
      timeout: (r == null ? void 0 : r.timeout) || 6e4,
      headers: (() => {
        let w = {}, x = Object.prototype.toString.call(r == null ? void 0 : r.headers);
        return x === "[object Object]" ? w = r.headers : x === "[object Function]" && (w = r.headers()), w;
      })()
    };
    return l = bt.create(v), b.bind(this);
  }, b = (r = {}, v = null) => {
    let w = Object.prototype.toString.call(r);
    if (w === "[object Object]")
      return k(r);
    if (w === "[object String]")
      return r.includes("/") ? o(r, v) : m(r, v);
  }, k = (r = {}) => {
    let v = {};
    return Object.keys(r).forEach((w) => {
      var y, S;
      let x = Object.prototype.toString.call(r[w]);
      x === "[object String]" ? r[w].includes("/") ? v[w] = o(r[w]) : v[w] = m(r[w]) : x === "[object Array]" && (r[w][0].includes("/") ? v[w] = o(r[w][0], (y = r[w]) == null ? void 0 : y[1]) : v[w] = m(r[w][0], (S = r[w]) == null ? void 0 : S[1]));
    }), v;
  }, o = (r = "", v) => (w, x = {}) => Re(l, a, r, w, H(H({}, v || {}), x || {})), m = (r = "", v = {}) => (w = {}, x = {}) => Re(
    l,
    a,
    "/less/api/auth/common",
    {
      apiCode: r,
      queryParam: w
    },
    H(H({}, v || {}), x || {})
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
}, bl = yl(vl);
const _l = { style: { width: "100%" } }, kl = { class: "inline-block uploadBtn" }, xl = {
  key: 0,
  style: { "font-size": "40px", "line-height": "20px" }
}, ml = {
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
    const e = t, n = de(), b = P(
      "ref" + (/* @__PURE__ */ new Date()).getTime() + parseInt(Math.random() * 1e4)
    );
    let k = P(!1);
    const o = P([]);
    Qe(
      () => e.value,
      (x) => {
        if ([null, void 0].includes(x)) {
          o.value.splice(0);
          return;
        }
        x._split(",").forEach((S) => {
          o.value.find((F) => F.url === S) || o.value.push({
            url: S,
            status: "finished"
          });
        });
      },
      { deep: !0, immediate: !0 }
    );
    const m = (G) => ke(this, [G], function* ({ file: x, onFinish: y, onError: S }) {
      var Q, fe;
      let F = new FormData();
      F.append("file", x.file), F.append("bucket", e.bucket), F.append("pathPrefix", e.path), Object.keys(e.params).forEach((g) => {
        F.append(g, e.params[g]);
      });
      let q = yield bl(e.url, {
        "Content-Type": "multipart/form-data;charset=UTF-8",
        token: e.token
      })(F);
      if ((q == null ? void 0 : q.status) === 200) {
        const g = Me(10);
        x.url = (fe = (Q = q == null ? void 0 : q.data) == null ? void 0 : Q.url) != null ? fe : "", x.name = g, y();
      } else
        S();
    });
    function r(x) {
    }
    function v(x) {
      return ke(this, null, function* () {
        var y;
        return ((y = n == null ? void 0 : n.accept) == null ? void 0 : y.indexOf(Bt(x.file.name, "."))) === -1 ? ($message.error("格式不正确"), !1) : x.file.size / 1024 > e.maxSize ? ($message.error("文件大小超出限制"), !1) : !0;
      });
    }
    function w({ file: x, fileList: y }) {
      let S = (y || []).filter((G) => G.url).map((G) => G.url);
      a("update:value", S.join(",")), a("update:fileList", y);
    }
    return l({
      submitFile: () => {
        var x;
        (x = b.value) == null || x.submit();
      }
    }), (x, y) => (d(), I("div", _l, [
      L(u(ht), Te({
        ref: (S) => {
          b.value = S;
        },
        "file-list": o.value,
        "onUpdate:fileList": y[0] || (y[0] = (S) => o.value = S),
        onRemove: r,
        multiple: t.multipleUpload,
        "default-upload": t.autoUpload,
        "custom-request": m,
        onBeforeUpload: v,
        onChange: w
      }, u(n)), {
        default: C(() => {
          var S;
          return [
            K("span", kl, [
              ((S = u(n)) == null ? void 0 : S["list-type"]) === "image-card" ? (d(), I("span", xl, "+")) : W(x.$slots, "uploadBtn", {
                key: 1,
                loading: u(k)
              }, void 0, !0)
            ])
          ];
        }),
        _: 3
      }, 16, ["file-list", "multiple", "default-upload"])
    ]));
  }
}, wl = /* @__PURE__ */ oe(ml, [["__scopeId", "data-v-742f8af6"]]), Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlueTitle: $e,
  Dialog: Pe,
  DialogMsg: At,
  Drawer: zt,
  Form: el,
  FormBtns: al,
  Info: ul,
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
