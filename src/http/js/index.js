import axios from "axios";
const post = (axios_, config_, url = "", data = {}, extendsConfig = {}) => {
  // axios_.interceptors.request.clear();
  axios_.interceptors.request.use((request) => {
    if (config_.beforeRequest) {
      config_.beforeRequest(request, extendsConfig ?? {});
    }
    return request;
  });
  return new Promise((resolve, reject) => {
    axios_
      .post(url, data)
      .then((request) => {
        if (request.data?.status !== 200) {
          config_?.onError?.(request.data, extendsConfig ?? {});
        }
        resolve(request.data);
      })
      .catch((err) => {
        config_?.onNetWorkError?.(
          err?.response ?? {
            data: {
              status: 500,
              data: null,
              message: err?.message || "系统异常",
            },
          },
          extendsConfig ?? {},
        );
        resolve(
          err?.response?.data ?? {
            status: 500,
            data: null,
            message: err.message,
          },
        );
      })
      .finally(() => {});
  });
};
function useMiniHttp(args = null) {
  let instance = null;
  //配置项
  const config = {
    beforeRequest: null,
    onNetWorkError: null,
    onError: null,
  };
  const install = (app, config) => {
    app.config.globalProperties.$miniHttp = create(config);
  };
  const create = (args = {}) => {
    config.beforeRequest = args?.beforeRequest || null;
    config.onNetWorkError = args?.onNetWorkError || null;
    config.onError = args?.onError || null;
    const config_ = {
      baseURL: args?.baseURL || "",
      timeout: args?.timeout || 60000,
      headers: (() => {
        let res = {};
        let type_ = Object.prototype.toString.call(args?.headers);
        if (type_ === "[object Object]") {
          res = args.headers;
        } else if (type_ === "[object Function]") {
          res = args.headers();
        }
        return res;
      })(),
    };
    instance = axios.create(config_);
    /* 去掉统一配置，改为单个处理 */
    /*  instance.interceptors.request.use((request) => {
      if (config.beforeRequest) {
        config.beforeRequest(request);
      }
      return request;
    }); */
    return miniHttp.bind(this);
  };
  // 核心部分
  const miniHttp = (args = {}, extendsConfig = null) => {
    let type = Object.prototype.toString.call(args);
    if (type === "[object Object]") {
      return useObject(args);
    } else if (type === "[object String]") {
      if (args.includes("/")) {
        return useString(args, extendsConfig);
      } else {
        return useApiCode(args, extendsConfig);
      }
    }
  };
  /* 传入对象，多个接口配置 */
  const useObject = (args = {}) => {
    let res = {};
    Object.keys(args).forEach((key) => {
      let type_ = Object.prototype.toString.call(args[key]);
      if (type_ === "[object String]") {
        if (args[key].includes("/")) {
          res[key] = useString(args[key]);
        } else {
          res[key] = useApiCode(args[key]);
        }
      } else if (type_ === "[object Array]") {
        if (args[key][0].includes("/")) {
          res[key] = useString(args[key][0], args[key]?.[1]);
        } else {
          res[key] = useApiCode(args[key][0], args[key]?.[1]);
        }
      }
    });
    return res;
  };

  /* 处理单个URL请求 */
  const useString = (url = "", extendsConfig) => {
    return (data, EC = {}) => {
      return post(instance, config, url, data, {
        ...(extendsConfig || {}),
        ...(EC || {}),
      });
    };
  };

  /* 新版请求方式 */
  const useApiCode = (code = "", extendsConfig = {}) => {
    return (data = {}, EC = {}) => {
      return post(
        instance,
        config,
        "/less/api/auth/common",
        {
          apiCode: code,
          queryParam: data,
        },
        {
          ...(extendsConfig || {}),
          ...(EC || {}),
        },
      );
    };
  };

  const createApiCode = () => {};
  if (args) {
    return create(args);
  } else {
    return { install, create };
  }
}
export default useMiniHttp;
