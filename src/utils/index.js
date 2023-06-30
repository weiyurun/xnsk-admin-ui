//写入内容到剪切板中
export function writeToClipBoard(content) {
  let writeStr = "";
  if (Object.prototype.toString.call(content) === "[object String]") {
    writeStr = JSON.stringify(content);
  } else {
    writeStr = content;
  }
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      // clipboard api 复制
      navigator.clipboard.writeText(writeStr);
    } else {
      let textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      textarea.style.position = "fixed";
      textarea.style.clip = "rect(0 0 0 0)";
      textarea.style.top = "10px";
      textarea.value = writeStr;
      textarea.select();
      document.execCommand("copy", true);
      document.body.removeChild(textarea);
    }
    resolve();
  });
}
