import "./chunk-CEQRFMJQ.js";

// node_modules/houriprotocol/dist/index_es.js
var e = function() {
  let e2 = { authSource: "3", projectId: "", sceneCode: "", authContext: location.origin, userId: navigator.userAgent };
  return { init: (t = {}) => (e2.projectId = t == null ? void 0 : t.projectId, e2.sceneCode = t == null ? void 0 : t.sceneCode, e2.userId = t == null ? void 0 : t.userId, (t == null ? void 0 : t.debug) && (e2.authContext = t == null ? void 0 : t.authContext), function(e3, t2 = {}) {
    let o = "";
    return new Promise((s, n) => {
      let r = new XMLHttpRequest();
      r.responseType = "json", r.addEventListener("load", () => {
        var _a, _b;
        200 === (r == null ? void 0 : r.status) && (200 === ((_a = r == null ? void 0 : r.response) == null ? void 0 : _a.status) ? s((_b = r == null ? void 0 : r.response) == null ? void 0 : _b.data) : n(r == null ? void 0 : r.response));
      }), r.addEventListener("error", () => {
        n(r == null ? void 0 : r.response);
      }), o = location.origin.indexOf("mapfarm.com") > -1 ? "/less/api/auth/common" : "/less/api/less/api/auth/common", r.open("post", o), r.setRequestHeader("Access-Control-Allow-Origin", "*"), r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      let a = { apiCode: e3, queryParam: t2 || {} };
      r.send(JSON.stringify(a));
    });
  }("privacy_auth_list_with_auth", { authSource: e2.authSource, projectId: e2.projectId, authContext: e2.authContext, sceneCode: e2.sceneCode, userId: e2.userId })) };
}();
export {
  e as default
};
//# sourceMappingURL=houriprotocol.js.map
