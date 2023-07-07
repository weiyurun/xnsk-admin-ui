var q = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty, G = Object.prototype.propertyIsEnumerable;
var x = (e, o, t) => o in e ? q(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, C = (e, o) => {
  for (var t in o || (o = {}))
    z.call(o, t) && x(e, t, o[t]);
  if (v)
    for (var t of v(o))
      G.call(o, t) && x(e, t, o[t]);
  return e;
};
import { NAlert as K, NAvatar as U, NBackTop as X, NBadge as F, NBreadcrumb as Y, NBreadcrumbItem as H, NButton as N, NCard as Z, NCheckbox as E, NCheckboxGroup as W, NCol as V, NConfigProvider as $, NDataTable as Q, NDatePicker as ee, NDescriptions as te, NDescriptionsItem as oe, NDialogProvider as le, NDivider as ae, NDrawer as D, NDrawerContent as T, NDropdown as se, NElement as ne, NForm as ie, NFormItem as re, NGrid as ce, NGridItem as ue, NIcon as de, NInput as fe, NInputGroup as ge, NInputNumber as pe, NLayout as Ne, NLayoutContent as me, NLayoutFooter as ye, NLayoutHeader as he, NLayoutSider as ke, NList as be, NListItem as Ae, NLoadingBarProvider as Be, NMenu as we, NMessageProvider as _e, NModal as O, NNotificationProvider as Se, NPagination as ve, NPopover as xe, NProgress as Ce, NRadio as De, NRadioGroup as Te, NResult as Oe, NRow as Pe, NSelect as Je, NSkeleton as Le, NSpace as Re, NSpin as Ie, NStep as je, NSteps as Me, NSwitch as qe, NTabPane as ze, NTable as Ge, NTabs as Ke, NTag as Ue, NThing as Xe, NTimePicker as Fe, NTooltip as Ye, NTree as He, NUpload as Ze } from "naive-ui";
import { useMessage as yt } from "naive-ui";
import { computed as w, openBlock as i, createElementBlock as b, createElementVNode as u, normalizeStyle as A, createCommentVNode as p, toDisplayString as m, renderSlot as y, createTextVNode as h, useAttrs as P, useSlots as J, createBlock as c, unref as s, isRef as L, withCtx as n, createVNode as R, onMounted as Ee, mergeProps as We } from "vue";
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NAlert: K,
  NAvatar: U,
  NBackTop: X,
  NBadge: F,
  NBreadcrumb: Y,
  NBreadcrumbItem: H,
  NButton: N,
  NCard: Z,
  NCheckbox: E,
  NCheckboxGroup: W,
  NCol: V,
  NConfigProvider: $,
  NDataTable: Q,
  NDatePicker: ee,
  NDescriptions: te,
  NDescriptionsItem: oe,
  NDialogProvider: le,
  NDivider: ae,
  NDrawer: D,
  NDrawerContent: T,
  NDropdown: se,
  NElement: ne,
  NForm: ie,
  NFormItem: re,
  NGrid: ce,
  NGridItem: ue,
  NIcon: de,
  NInput: fe,
  NInputGroup: ge,
  NInputNumber: pe,
  NLayout: Ne,
  NLayoutContent: me,
  NLayoutFooter: ye,
  NLayoutHeader: he,
  NLayoutSider: ke,
  NList: be,
  NListItem: Ae,
  NLoadingBarProvider: Be,
  NMenu: we,
  NMessageProvider: _e,
  NModal: O,
  NNotificationProvider: Se,
  NPagination: ve,
  NPopover: xe,
  NProgress: Ce,
  NRadio: De,
  NRadioGroup: Te,
  NResult: Oe,
  NRow: Pe,
  NSelect: Je,
  NSkeleton: Le,
  NSpace: Re,
  NSpin: Ie,
  NStep: je,
  NSteps: Me,
  NSwitch: qe,
  NTabPane: ze,
  NTable: Ge,
  NTabs: Ke,
  NTag: Ue,
  NThing: Xe,
  NTimePicker: Fe,
  NTooltip: Ye,
  NTree: He,
  NUpload: Ze
}, Symbol.toStringTag, { value: "Module" }));
const I = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of o)
    t[l] = a;
  return t;
}, Ve = { class: "flex justify-between items-center" }, $e = { class: "flex justify-start items-center gap-3" }, Qe = { class: "flex justify-center items-center" }, et = {
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
    const o = e, t = w(() => {
      switch (o.size) {
        case "small":
          return "14px";
        case "big":
          return "18px";
        default:
          return o.size;
      }
    });
    return (l, a) => (i(), b("div", Ve, [
      u("div", $e, [
        e.showTitleBar ? (i(), b("div", {
          key: 0,
          class: "blue-bar",
          style: A([{ width: "3px", "border-radius": "2px" }, { height: t.value }])
        }, null, 4)) : p("", !0),
        u("b", {
          style: A({ fontSize: t.value })
        }, m(e.title), 5)
      ]),
      u("div", Qe, [
        y(l.$slots, "default", {}, void 0, !0)
      ]),
      h("   ")
    ]));
  }
}, j = /* @__PURE__ */ I(et, [["__scopeId", "data-v-fd18104a"]]);
const tt = {
  key: 1,
  class: "dialog-templete-btns"
}, ot = {
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
    const t = e, l = P(), a = J();
    let r = w({
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
      l.onBeforeClose ? o("beforeClose", () => {
        t.callback[1] && (o("update:show", !1), t.callback[1] && t.callback[1]());
      }) : (o("update:show", !1), t.callback[1] && t.callback[1]());
    }
    return (g, _) => (i(), c(s(O), {
      show: s(r),
      "onUpdate:show": _[0] || (_[0] = (S) => L(r) ? r.value = S : r = S),
      "trap-focus": !1,
      preset: "card",
      "close-on-esc": !e.lock,
      "mask-closable": !e.lock,
      class: "dialog-templete",
      style: A({
        width: e.width + "px",
        height: e.height + "px"
      })
    }, {
      header: n(() => [
        e.title ? (i(), c(j, {
          key: 0,
          title: e.title
        }, null, 8, ["title"])) : p("", !0)
      ]),
      default: n(() => [
        y(g.$slots, "default", {}, void 0, !0)
      ]),
      footer: n(() => [
        s(a).footBtn ? y(g.$slots, "footBtn", { key: 0 }, void 0, !0) : (i(), b("div", tt, [
          e.footBtns.length > 0 ? (i(), c(s(N), {
            key: 0,
            type: "info",
            onClick: f
          }, {
            default: n(() => [
              h(m(e.footBtns[0]), 1)
            ]),
            _: 1
          })) : p("", !0),
          e.footBtns.length > 1 ? (i(), c(s(N), {
            key: 1,
            type: "info",
            ghost: "",
            onClick: d
          }, {
            default: n(() => [
              h(m(e.footBtns[1]), 1)
            ]),
            _: 1
          })) : p("", !0)
        ]))
      ]),
      _: 3
    }, 8, ["show", "close-on-esc", "mask-closable", "style"]));
  }
}, M = /* @__PURE__ */ I(ot, [["__scopeId", "data-v-3ef46ef3"]]), lt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACPklEQVRYR+2XT4hPURTHP19/M9GMlFK2NlZqkiz8WymKUqRJZJIiTRYWylZKoRBlxcbWikgkRUnIhtmQ8qekjBFFSl+d6b3p9fJ+v3ffm9+Uclav+84953POvffcc0UXsb0LOAgMAnO66Zf+G3gHXAOOS/pcnq9OBm1fAfYkOq1SfwlskPSpqFAJYHs/cGmKnOdmXgDripnoBHAHWN8QIOzOqJh7QdKh/F/HJWjoHNvhfG22d7aX7PwClkl6G+M9ASg6tD0CnC1BnJZ0ZBLA9lzgJLADWNI08mzeG+A2cFTSeIzZvg5sLth9IGnNBECWrrst1ruK9zWwKjac7U3AjYLiN6BfkgPgAHCxZdRV0y9LGrbdD4yVNmafpB8BcK8H0edAEelCSb9tx/f8AukkQFSqpT3KQJhdJGnsP0CTDETBSJGqiyp5CR4CQ3mlqktgewA4D8TtWZRkgJWSntR1XKp6fcBXYFZhPBkgisfjhgBxzL60BYjoh4FXiRCLgTPAtrZLkOi3q3ryEnS1mKjw7wJ8T4w0TsDfuqDkDNwHdkr6mAJgO07AOWBv2004KOlZivNc1/a8rA7MblMHVkt61BBgQVYHZrYBeA7sA6KjiYdFXYk6cArYUmMJRiUtD71oSKa7H/gJbJUUfeO0AsTL6ClwQtJonqXIwC1gY908J+rFUR6IlqxqXgAMAVcTDddVvykpOuJKmXiY2I6uOLrjqZS4FeNIxzuhM0AGsRs4DKxo+WL6AMQ745ik990i+gN2mEgw/3nqggAAAABJRU5ErkJggg==";
function at(e) {
  let o = "";
  return Object.prototype.toString.call(e) === "[object String]" ? o = JSON.stringify(e) : o = e, new Promise((t, l) => {
    if (navigator.clipboard)
      navigator.clipboard.writeText(o);
    else {
      let a = document.createElement("textarea");
      document.body.appendChild(a), a.style.position = "fixed", a.style.clip = "rect(0 0 0 0)", a.style.top = "10px", a.value = o, a.select(), document.execCommand("copy", !0), document.body.removeChild(a);
    }
    t();
  });
}
const st = { class: "break-all" }, nt = { class: "text-center" }, it = /* @__PURE__ */ u("img", {
  class: "mt-px",
  src: lt,
  style: { width: "16px", height: "16px" }
}, null, -1), rt = {
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
    J();
    let l = w({
      get() {
        return t.show;
      },
      set(r) {
        r || o("update:show", !1);
      }
    });
    function a() {
      at(t.data).then(() => {
        try {
          $message.success("复制成功"), o("success");
        } catch (r) {
          console.log("$message未定义"), o("success");
        }
      });
    }
    return (r, f) => (i(), c(M, {
      title: e.title,
      show: s(l),
      "onUpdate:show": f[0] || (f[0] = (d) => L(l) ? l.value = d : l = d),
      width: "800",
      callback: []
    }, {
      footBtn: n(() => [
        u("div", nt, [
          R(s(N), {
            type: "primary",
            onClick: a
          }, {
            icon: n(() => [
              it
            ]),
            default: n(() => [
              h("复制日志 ")
            ]),
            _: 1
          })
        ])
      ]),
      default: n(() => [
        u("div", st, m(e.data), 1)
      ]),
      _: 1
    }, 8, ["title", "show"]));
  }
}, ct = {
  __name: "drawer",
  props: {
    outClosable: {
      type: Boolean,
      default: () => !1
    }
  },
  setup(e) {
    const o = P();
    return Ee(() => {
    }), (t, l) => (i(), c(s(D), We({
      "close-on-esc": e.outClosable,
      "mask-closable": e.outClosable,
      "auto-focus": !1
    }, s(o)), {
      default: n(() => [
        R(s(T), {
          title: s(o).title,
          closable: ""
        }, {
          default: n(() => [
            y(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["title"])
      ]),
      _: 3
    }, 16, ["close-on-esc", "mask-closable"]));
  }
}, B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  XnskBlueTitle: j,
  XnskDialog: M,
  XnskDialogMsg: rt,
  XnskDrawer: ct
}, Symbol.toStringTag, { value: "Module" }));
const ut = function(e, o = {}) {
  for (let t in k) {
    const l = "Xnsk" + k[t].name;
    e.component(l, k[t]);
  }
  for (let t in B)
    e.component(t, B[t]);
}, pt = C({ install: ut }, B);
export {
  pt as default,
  yt as useMessage
};
//# sourceMappingURL=xnsk-admin-ui.js.map
