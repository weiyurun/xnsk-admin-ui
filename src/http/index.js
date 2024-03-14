import useMiniHttp from "@xnsk/mini-http";
const config = {
  baseURL: "",
  beforeRequest: (request, extendsConfig) => {
    const { token = null } = extendsConfig;
    request.headers.Authorization =
      token ?? localStorage.getItem("ACCESS-TOKEN");
    request.headers.appcode = "xnsk_admin_ui";
  },
  /* 网络异常 */
  onNetWorkError: (response, extendsConfig) => {
    console.log(" 异常 >", response, extendsConfig);
    switch (response?.status) {
      case 404:
        $message.error("资源不存在");
        break;
      case 413:
        $message.error("请求体过大");
        break;
      default:
        $message.error(
          response?.data?.message || response?.data?.msg || "系统异常"
        );
        break;
    }
  },
  /* 业务异常  */
  onError: (res, extendsConfig) => {
    console.log(" 异常 >", res, extendsConfig);
    switch (res?.status) {
      case 413:
        $message.error(res?.message || res?.msg || "请求体过大");
        break;
      default:
        $message.error(
          response?.data?.message || response?.data?.msg || "系统异常"
        );
        break;
    }
  },
};
const http = useMiniHttp(config);
export default http;
