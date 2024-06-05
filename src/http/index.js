import useMiniHttp from "@xnsk/mini-http";
import axios from "axios";
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

/* 添加一个get请求，仅返回成功的内容，失败直接抛出异常，外层用catch接收，catch返回内容为从网络层开始的异常信息 */
export const get = async function (url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      if (res?.status === 200) {
        if (res?.data.status === 200) {
          resolve(res.data?.data ?? {});
        } else {
          reject(res);
        }
      } else {
        reject(res);
      }
    });
  });
};
export default http;
