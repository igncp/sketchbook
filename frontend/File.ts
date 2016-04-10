import {get} from "zepto"
import {promise} from "when"

import {Promise, File as fFile} from "frontend"

const validatePath = (path: string) => {
  if (!path) throw new Error("File must have a path to load")
}

export default class File implements fFile {
  constructor(private path: string) {}
  load(): Promise {
    validatePath(this.path)
    return promise(resolve => get(this.path, resolve))
  }
  loadScript(): Promise {
    validatePath(this.path)
    return promise((resolve) => {
      const script = document.createElement("script")
      script.async = true
      script.src = this.path
      script.onload = resolve
      document.getElementsByTagName("head")[0].appendChild(script)
    })
  }
}
