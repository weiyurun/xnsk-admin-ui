import useMiniHttp from "./js/index";
const config = {
  baseURL: "",
  beforeRequest: (request, extendsConfig) => {
    const { token = "" } = extendsConfig;
    request.headers.Authorization = token;
    request.headers.appcode = "xnsk_admin_ui";
  },
  /* 网络异常 */
  onNetWorkError: (response, extendsConfig) => {
    console.log(" 异常 >", response, extendsConfig);
  },
  /* 业务异常  */
  onError: (res, extendsConfig) => {
    console.log(" 异常 >", res, extendsConfig);
  },
};
const http = useMiniHttp(config);
export default http;
