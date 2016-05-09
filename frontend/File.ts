import {get, ajax} from "zepto"
import {promise} from "when"

import {Promise, File as fFile} from "frontend"

function validatePath(path: string): void {
  if (!path) throw new Error("File must have a path to load")
}

export default class File implements fFile {
  constructor(private path: string) {}

  load(): Promise {
    validatePath(this.path)
    return <any>promise(resolve => get(this.path, resolve))
  }

  loadScript(): Promise {
    validatePath(this.path)
    return <any>promise((resolve) => {
      const script: any = document.createElement("script")

      script.async = true
      script.src = this.path
      script.onload = resolve
      document.getElementsByTagName("head")[0].appendChild(script)
    })
  }
}
