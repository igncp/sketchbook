import { compose, replace } from "ramda"

const handleRoot = path => path === "" ? "/" : path

export default class History {
  constructor() {
    this.isDev = /dev\.html/.exec(location.href)
    this.root = this.isDev ? "/dev.html#" : "#"
  }
  getCurrentPath() {
    const { location } = window
    const fullUrl = location.href
    const removed = `${location.origin}`
    return compose(
      handleRoot,
      replace("#", ""),
      replace(removed, ""),
      replace("/dev.html", "")
    )(fullUrl)
  }
  pushState(path) {
    const newPath = path === "/" ? this.root : `${this.root}${path}`
    window.history.pushState(null, null, newPath)
  }
}
