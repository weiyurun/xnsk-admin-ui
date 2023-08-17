//通用编码（英文大小写、数字、下划线）
export const codeReg = /^[A-Za-z0-9_]+$/;
export const clearByCodeReg = (str = "") => {
  return str.replace(/[^A-Za-z0-9_]/g, "");
};
