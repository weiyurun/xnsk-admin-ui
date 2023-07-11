//写入内容到剪切板中
export function writeToClipBoard (content) {
  let writeStr = ""
  if (Object.prototype.toString.call(content) === "[object String]") {
    writeStr = JSON.stringify(content)
  } else {
    writeStr = content
  }
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      // clipboard api 复制
      navigator.clipboard.writeText(writeStr)
    } else {
      let textarea = document.createElement("textarea")
      document.body.appendChild(textarea)
      textarea.style.position = "fixed"
      textarea.style.clip = "rect(0 0 0 0)"
      textarea.style.top = "10px"
      textarea.value = writeStr
      textarea.select()
      document.execCommand("copy", true)
      document.body.removeChild(textarea)
    }
    resolve()
  })
}

//获取真实类型
export function realType (val) {
  let _type = Object.prototype.toString.call(val)
  return _type.slice(8, _type.length - 1).toLowerCase()
}

//获取真实值
export function realValue (val) {
  return Object.prototype.toString.call(val) === "[object Function]"
    ? val()
    : val
}
//原型加方法 
Object.defineProperty(Object.prototype, "xnsk_admin_ui_realType", {
  get () {
    let _type = Object.prototype.toString.call(this)
    return _type.slice(8, _type.length - 1).toLowerCase()
  },
})
Object.defineProperty(Object.prototype, "xnsk_admin_ui_realValue", {
  get () {
    return Object.prototype.toString.call(this) === "[object Function]"
      ? this()
      : this
  },
})

//随机数
export function getRandomId (len = 20, bTime = true) {
  let strId = ""
  if (bTime) strId = new Date().getTime() + ""
  const iLen = len - strId.length
  for (let i = 0; i < iLen; i++) {
    strId += getRandomKeys(1)
  }
  return strId.substr(0, len)
}
export function getRandomKeys (iLen = 10) {
  let strRandomKeys = ""
  const str = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let i = 0; i < iLen; i++) {
    strRandomKeys += str.substr(Math.floor(Math.random() * str.length), 1)
  }
  return strRandomKeys
}
export const childrenEmptyToNull = (arr = [], childrenKey = "children") => {
  let data = arr
  function setNullForEmptyChildren (node) {
    if (node?.[childrenKey]?.length === 0) {
      node[childrenKey] = null
    } else if (node?.[childrenKey]) {
      node[childrenKey].forEach((child) => setNullForEmptyChildren(child))
    }
  }
  (data || []).forEach((i) => setNullForEmptyChildren(i))
  setNullForEmptyChildren(data)
  return data
}

export const deleteEmptyChildren = (arr = [], childrenKey = "children") => {
  let data = arr
  function setNullForEmptyChildren (node) {
    if (node?.[childrenKey]?.length === 0 || node?.[childrenKey] === null) {
      delete node[childrenKey]
      node.isLeaf = true
    } else if (node?.[childrenKey]) {
      node[childrenKey].forEach((child) => setNullForEmptyChildren(child))
    }
  }
  (data || []).forEach((i) => setNullForEmptyChildren(i))
  setNullForEmptyChildren(data)
  return data
}
//给数据添加一个随机ID
export const addRandomID = (arr = [], childrenKey = "children") => {
  let data = arr
  function setNullForEmptyChildren (node) {
    if (node?.[childrenKey]?.length === 0 || node?.[childrenKey] === null) {
      delete node[childrenKey]
      node.randomId = getRandomId()
    } else if (node?.[childrenKey]) {
      node.randomId = getRandomId()
      node[childrenKey].forEach((child) => setNullForEmptyChildren(child))
    }
  }
  (data || []).forEach((i) => setNullForEmptyChildren(i))
  setNullForEmptyChildren(data)
  return data
}

/**
 * 根据文件地址获取文件内容
 * @param {String} url 文件地址
 */
export function getFileContentByUrl (url) {
  return new Promise((resolve, reject) => {
    let xmlhttp
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest()
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHttp")
    }
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        resolve(xmlhttp.responseText)
      }
    }
    xmlhttp.onerror = () => {
      reject(false)
    }
    // 向服务器发送请求
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
  })
}

/* 根据地址获取文件名 */
export function getFileNameByUrl (_url = "") {
  return decodeURIComponent(_url).substring(
    decodeURIComponent(_url).lastIndexOf("/") + 1
  )
}
/**
 * 根据name获取文件后缀名
 * @param {*} _name
 * @param {*} _mark 标记  默认返回不带.，如果需要，第二个参数可以传入点
 * @returns
 */
export function getSuffixName (_name = "", _mark = "") {
  return _mark + _name.slice(_name.lastIndexOf(".") + 1)
}