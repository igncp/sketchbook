import { compose, replace } from "ramda"

const handleRoot = path => path === "" ? "/" : path

export default class History {
  constructor() {
    this.isDev = /dev\.html/.exec(location.href)
    this.root = this.isDev ? "/dev.html" : "/sketchbook"
  }
  getCurrentPath() {
    const { location } = window
    const fullUrl = location.href
    const removed = `${location.origin}`

    return compose(
      handleRoot,
      replace("#", ""),
      replace(this.root, ""),
      replace(removed, "")
    )(fullUrl)
  }
  pushState(path) {
    const prefix = `${this.root}#`
    const newPath = path === "/" ? prefix : `${prefix}${path}`

    window.history.pushState(null, null, newPath)
  }
}
