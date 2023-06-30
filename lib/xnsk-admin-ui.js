var R = Object.defineProperty;
var S = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var v = (e, o, t) => o in e ? R(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, x = (e, o) => {
  for (var t in o || (o = {}))
    I.call(o, t) && v(e, t, o[t]);
  if (S)
    for (var t of S(o))
      j.call(o, t) && v(e, t, o[t]);
  return e;
};
import { NAlert as q, NAvatar as z, NBackTop as G, NBadge as K, NBreadcrumb as M, NBreadcrumbItem as U, NButton as N, NCard as X, NCheckbox as F, NCheckboxGroup as Y, NCol as H, NConfigProvider as Z, NDataTable as E, NDatePicker as W, NDescriptions as V, NDescriptionsItem as Q, NDialogProvider as $, NDivider as ee, NDrawer as te, NDrawerContent as oe, NDropdown as le, NElement as ae, NForm as se, NFormItem as ne, NGrid as ie, NGridItem as re, NIcon as ce, NInput as de, NInputGroup as ue, NInputNumber as fe, NLayout as ge, NLayoutContent as pe, NLayoutFooter as Ne, NLayoutHeader as me, NLayoutSider as ye, NList as he, NListItem as ke, NLoadingBarProvider as Ae, NMenu as be, NMessageProvider as Be, NModal as C, NNotificationProvider as we, NPagination as _e, NPopover as Se, NProgress as ve, NRadio as xe, NRadioGroup as Ce, NResult as Te, NRow as De, NSelect as Oe, NSkeleton as Pe, NSpace as Je, NSpin as Le, NStep as Re, NSteps as Ie, NSwitch as je, NTabPane as qe, NTable as ze, NTabs as Ge, NTag as Ke, NThing as Me, NTimePicker as Ue, NTooltip as Xe, NTree as Fe, NUpload as Ye } from "naive-ui";
import { useMessage as Nt } from "naive-ui";
import { computed as B, openBlock as i, createElementBlock as h, createElementVNode as c, createCommentVNode as p, normalizeStyle as T, toDisplayString as m, renderSlot as k, useAttrs as He, useSlots as D, createBlock as u, unref as r, isRef as O, withCtx as s, createTextVNode as A, createVNode as Ze } from "vue";
const y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NAlert: q,
  NAvatar: z,
  NBackTop: G,
  NBadge: K,
  NBreadcrumb: M,
  NBreadcrumbItem: U,
  NButton: N,
  NCard: X,
  NCheckbox: F,
  NCheckboxGroup: Y,
  NCol: H,
  NConfigProvider: Z,
  NDataTable: E,
  NDatePicker: W,
  NDescriptions: V,
  NDescriptionsItem: Q,
  NDialogProvider: $,
  NDivider: ee,
  NDrawer: te,
  NDrawerContent: oe,
  NDropdown: le,
  NElement: ae,
  NForm: se,
  NFormItem: ne,
  NGrid: ie,
  NGridItem: re,
  NIcon: ce,
  NInput: de,
  NInputGroup: ue,
  NInputNumber: fe,
  NLayout: ge,
  NLayoutContent: pe,
  NLayoutFooter: Ne,
  NLayoutHeader: me,
  NLayoutSider: ye,
  NList: he,
  NListItem: ke,
  NLoadingBarProvider: Ae,
  NMenu: be,
  NMessageProvider: Be,
  NModal: C,
  NNotificationProvider: we,
  NPagination: _e,
  NPopover: Se,
  NProgress: ve,
  NRadio: xe,
  NRadioGroup: Ce,
  NResult: Te,
  NRow: De,
  NSelect: Oe,
  NSkeleton: Pe,
  NSpace: Je,
  NSpin: Le,
  NStep: Re,
  NSteps: Ie,
  NSwitch: je,
  NTabPane: qe,
  NTable: ze,
  NTabs: Ge,
  NTag: Ke,
  NThing: Me,
  NTimePicker: Ue,
  NTooltip: Xe,
  NTree: Fe,
  NUpload: Ye
}, Symbol.toStringTag, { value: "Module" }));
const P = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of o)
    t[a] = l;
  return t;
}, Ee = { class: "flex justify-between items-center" }, We = { class: "flex justify-start items-center gap-3" }, Ve = {
  key: 0,
  class: "blue-bar",
  style: { width: "3px", height: "16px", "border-radius": "2px" }
}, Qe = { class: "flex justify-center items-center" }, $e = {
  __name: "BlueTitle",
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
  setup(e) {
    const o = e, t = B(() => {
      switch (o.size) {
        case "small":
          return "14px";
        case "big":
          return "18px";
        default:
          return o.size;
      }
    });
    return (a, l) => (i(), h("div", Ee, [
      c("div", We, [
        e.showTitleBar ? (i(), h("div", Ve)) : p("", !0),
        c("b", {
          style: T({ fontSize: t.value })
        }, m(e.title), 5)
      ]),
      c("div", Qe, [
        k(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, J = /* @__PURE__ */ P($e, [["__scopeId", "data-v-6feaaa1d"]]);
const et = {
  key: 1,
  class: "dialog-templete-btns"
}, tt = {
  __name: "DefaultDialog",
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
  setup(e, { emit: o }) {
    const t = e, a = He(), l = D();
    let n = B({
      get() {
        return t.show;
      },
      set(g) {
        g || d();
      }
    });
    function f() {
      t.callback[0] && t.callback[0]();
    }
    function d() {
      a.onBeforeClose ? o("beforeClose", () => {
        t.callback[1] && (o("update:show", !1), t.callback[1] && t.callback[1]());
      }) : (o("update:show", !1), t.callback[1] && t.callback[1]());
    }
    return (g, w) => (i(), u(r(C), {
      show: r(n),
      "onUpdate:show": w[0] || (w[0] = (_) => O(n) ? n.value = _ : n = _),
      "trap-focus": !1,
      preset: "card",
      "close-on-esc": !e.lock,
      "mask-closable": !e.lock,
      class: "dialog-templete",
      style: T({
        width: e.width + "px",
        height: e.height + "px"
      })
    }, {
      header: s(() => [
        e.title ? (i(), u(J, {
          key: 0,
          title: e.title
        }, null, 8, ["title"])) : p("", !0)
      ]),
      default: s(() => [
        k(g.$slots, "default", {}, void 0, !0)
      ]),
      footer: s(() => [
        r(l).footBtn ? k(g.$slots, "footBtn", { key: 0 }, void 0, !0) : (i(), h("div", et, [
          e.footBtns.length > 0 ? (i(), u(r(N), {
            key: 0,
            type: "info",
            onClick: f
          }, {
            default: s(() => [
              A(m(e.footBtns[0]), 1)
            ]),
            _: 1
          })) : p("", !0),
          e.footBtns.length > 1 ? (i(), u(r(N), {
            key: 1,
            type: "info",
            ghost: "",
            onClick: d
          }, {
            default: s(() => [
              A(m(e.footBtns[1]), 1)
            ]),
            _: 1
          })) : p("", !0)
        ]))
      ]),
      _: 3
    }, 8, ["show", "close-on-esc", "mask-closable", "style"]));
  }
}, L = /* @__PURE__ */ P(tt, [["__scopeId", "data-v-a8a04d2e"]]), ot = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACPklEQVRYR+2XT4hPURTHP19/M9GMlFK2NlZqkiz8WymKUqRJZJIiTRYWylZKoRBlxcbWikgkRUnIhtmQ8qekjBFFSl+d6b3p9fJ+v3ffm9+Uclav+84953POvffcc0UXsb0LOAgMAnO66Zf+G3gHXAOOS/pcnq9OBm1fAfYkOq1SfwlskPSpqFAJYHs/cGmKnOdmXgDripnoBHAHWN8QIOzOqJh7QdKh/F/HJWjoHNvhfG22d7aX7PwClkl6G+M9ASg6tD0CnC1BnJZ0ZBLA9lzgJLADWNI08mzeG+A2cFTSeIzZvg5sLth9IGnNBECWrrst1ruK9zWwKjac7U3AjYLiN6BfkgPgAHCxZdRV0y9LGrbdD4yVNmafpB8BcK8H0edAEelCSb9tx/f8AukkQFSqpT3KQJhdJGnsP0CTDETBSJGqiyp5CR4CQ3mlqktgewA4D8TtWZRkgJWSntR1XKp6fcBXYFZhPBkgisfjhgBxzL60BYjoh4FXiRCLgTPAtrZLkOi3q3ryEnS1mKjw7wJ8T4w0TsDfuqDkDNwHdkr6mAJgO07AOWBv2004KOlZivNc1/a8rA7MblMHVkt61BBgQVYHZrYBeA7sA6KjiYdFXYk6cArYUmMJRiUtD71oSKa7H/gJbJUUfeO0AsTL6ClwQtJonqXIwC1gY908J+rFUR6IlqxqXgAMAVcTDddVvykpOuJKmXiY2I6uOLrjqZS4FeNIxzuhM0AGsRs4DKxo+WL6AMQ745ik990i+gN2mEgw/3nqggAAAABJRU5ErkJggg==";
function lt(e) {
  let o = "";
  return Object.prototype.toString.call(e) === "[object String]" ? o = JSON.stringify(e) : o = e, new Promise((t, a) => {
    if (navigator.clipboard)
      navigator.clipboard.writeText(o);
    else {
      let l = document.createElement("textarea");
      document.body.appendChild(l), l.style.position = "fixed", l.style.clip = "rect(0 0 0 0)", l.style.top = "10px", l.value = o, l.select(), document.execCommand("copy", !0), document.body.removeChild(l);
    }
    t();
  });
}
const at = { class: "break-all" }, st = { class: "text-center" }, nt = /* @__PURE__ */ c("img", {
  class: "mt-px",
  src: ot,
  style: { width: "16px", height: "16px" }
}, null, -1), it = {
  __name: "LogDialog",
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
  setup(e, { emit: o }) {
    const t = e;
    D();
    let a = B({
      get() {
        return t.show;
      },
      set(n) {
        n || o("update:show", !1);
      }
    });
    function l() {
      lt(t.data).then(() => {
        try {
          $message.success("复制成功");
        } catch (n) {
          console.log("$message未定义"), o("success");
        }
      });
    }
    return (n, f) => (i(), u(L, {
      title: e.title,
      show: r(a),
      "onUpdate:show": f[0] || (f[0] = (d) => O(a) ? a.value = d : a = d),
      width: "800",
      callback: []
    }, {
      footBtn: s(() => [
        c("div", st, [
          Ze(r(N), {
            type: "primary",
            onClick: l
          }, {
            icon: s(() => [
              nt
            ]),
            default: s(() => [
              A("复制日志 ")
            ]),
            _: 1
          })
        ])
      ]),
      default: s(() => [
        c("div", at, m(e.data), 1)
      ]),
      _: 1
    }, 8, ["title", "show"]));
  }
}, b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  XnskBlueTitle: J,
  XnskDialog: L,
  XnskDialogMsg: it
}, Symbol.toStringTag, { value: "Module" }));
const rt = function(e, o = {}) {
  for (let t in y) {
    const a = "Xnsk" + y[t].name;
    e.component(a, y[t]);
  }
  for (let t in b)
    e.component(t, b[t]);
}, ft = x({ install: rt }, b);
export {
  ft as default,
  Nt as useMessage
};
//# sourceMappingURL=xnsk-admin-ui.js.map
