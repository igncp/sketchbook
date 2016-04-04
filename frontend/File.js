import { get } from "zepto"
import { promise } from "when"

const validatePath = (path) => {
  if (!path) throw new Error("File must have a path to load")
}

export default class File {
  constructor({ path }) {
    if (path) this.path = path
  }
  load() {
    validatePath(this.path)
    return promise((resolve) => {
      get(this.path, resolve)
    })
  }
  loadScript() {
    validatePath(this.path)
    return promise((resolve) => {
      const script = document.createElement("script")

      script.async = "async"
      script.src = this.path
      script.onload = resolve
      document.getElementsByTagName("head")[0].appendChild(script)
    })
  }
}
