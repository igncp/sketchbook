import { get } from "zepto"
import { promise } from "when"

export default class File {
  constructor({ path }) {
    if (path) this.path = path
  }
  load() {
    if (!this.path) throw new Error("File must have a path to load")
    return promise((resolve) => {
      get(this.path, resolve)
    })
  }
}
