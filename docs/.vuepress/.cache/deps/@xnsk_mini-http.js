import {
  require_axios
} from "./chunk-N56FRCBQ.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@xnsk/mini-http/lib/index_es.js
var import_axios = __toESM(require_axios());
var e = function() {
  return e = Object.assign || function(o2) {
    for (var e2, r2 = 1, t = arguments.length; r2 < t; r2++)
      for (var n in e2 = arguments[r2])
        Object.prototype.hasOwnProperty.call(e2, n) && (o2[n] = e2[n]);
    return o2;
  }, e.apply(this, arguments);
};
function r(r2) {
  var t = this;
  void 0 === r2 && (r2 = null);
  var n = null, i = {}, u = function(e2) {
    void 0 === e2 && (e2 = {}), i.beforeRequest = e2.beforeRequest, i.onNetWorkError = e2.onNetWorkError, i.onError = e2.onError;
    var r3, u2, a2 = { baseURL: e2.baseURL || "", timeout: e2.timeout || 6e4, headers: (r3 = {}, u2 = Object.prototype.toString.call(e2.headers), "[object Object]" === u2 ? r3 = e2.headers : "[object Function]" === u2 && (r3 = (null == e2 ? void 0 : e2.headers)()), r3) };
    return n = import_axios.default.create(a2), l.bind(t);
  }, l = function(o2, e2) {
    void 0 === e2 && (e2 = {});
    var r3 = Object.prototype.toString.call(o2);
    return "[object Object]" === r3 ? a(o2) : "[object String]" === r3 ? o2.includes("/") ? c(o2, e2) : d(o2, e2) : void 0;
  }, a = function(o2) {
    void 0 === o2 && (o2 = {});
    var e2 = {};
    return Object.keys(o2).forEach(function(r3) {
      var t2, n2, i2 = Object.prototype.toString.call(o2[r3]);
      "[object String]" === i2 ? o2[r3].includes("/") ? e2[r3] = c(o2[r3]) : e2[r3] = d(o2[r3]) : "[object Array]" === i2 && (o2[r3][0].includes("/") ? e2[r3] = c(o2[r3][0], null === (t2 = o2[r3]) || void 0 === t2 ? void 0 : t2[1]) : e2[r3] = d(o2[r3][0], null === (n2 = o2[r3]) || void 0 === n2 ? void 0 : n2[1]));
    }), e2;
  }, c = function(o2, r3) {
    return void 0 === o2 && (o2 = ""), function(t2, u2) {
      return void 0 === t2 && (t2 = {}), void 0 === u2 && (u2 = {}), s(n, i, o2, t2, e(e({}, r3 || {}), u2 || {}));
    };
  }, d = function(o2, r3) {
    return void 0 === o2 && (o2 = ""), void 0 === r3 && (r3 = {}), function(t2, u2) {
      return void 0 === t2 && (t2 = {}), void 0 === u2 && (u2 = {}), s(n, i, "/less/api/auth/common", { apiCode: o2, queryParam: t2 }, e(e({}, r3 || {}), u2 || {}));
    };
  }, s = function(o2, e2, r3, t2, n2) {
    var i2 = o2.interceptors.request.use(function(o3) {
      return e2.beforeRequest && e2.beforeRequest(o3, null != n2 ? n2 : {}), o3;
    });
    return new Promise(function(u2) {
      var l2, a2;
      o2.post(r3, t2).then(function(o3) {
        var r4, t3;
        200 !== (null === (r4 = o3.data) || void 0 === r4 ? void 0 : r4.status) && (null === (t3 = null == e2 ? void 0 : e2.onError) || void 0 === t3 || t3.call(e2, o3.data, null != n2 ? n2 : {})), u2(o3.data);
      }).catch(function(o3) {
        var r4, t3, i3, l3;
        null === (r4 = null == e2 ? void 0 : e2.onNetWorkError) || void 0 === r4 || r4.call(e2, null !== (t3 = null == o3 ? void 0 : o3.response) && void 0 !== t3 ? t3 : { data: { status: 500, data: null, message: (null == o3 ? void 0 : o3.message) || "系统异常" } }, null != n2 ? n2 : {}), u2(null !== (l3 = null === (i3 = null == o3 ? void 0 : o3.response) || void 0 === i3 ? void 0 : i3.data) && void 0 !== l3 ? l3 : { status: 500, data: null, message: o3.message });
      }).finally(function() {
      }), null === (a2 = null === (l2 = o2.interceptors.request) || void 0 === l2 ? void 0 : l2.eject) || void 0 === a2 || a2.call(l2, i2);
    });
  };
  return r2 ? u(r2) : { create: u };
}
export {
  r as default,
  r as useMiniHttp
};
//# sourceMappingURL=@xnsk_mini-http.js.map
