import { adjust, compose, replace, prepend, join } from "ramda"

const prependSlash = compose(join(""), prepend("/"))

export default class PathResolver {
  constructor({ pathRetriever }) {
    this.pathRetriever = pathRetriever
    const fullPath = pathRetriever.retrieve()

    this.isDev = /dev\.html/.exec(fullPath)
    this.prefix = this.isDev ? "dev.html" : ""
    this.root = this.isDev ? "" : "/sketchbook"
  }
  isAbsolutePath(path) {
    return path.substr(0, 1) === "/"
  }
  resolve(pathStr, withPrefix = false) {
    const isAbsolutePath = this.isAbsolutePath(pathStr)

    return isAbsolutePath
      ? this.buildResolvedPath(withPrefix, pathStr)
      : this.resolveRelativePath(this.unresolveCurrentPath(), pathStr, withPrefix)
  }
  joinWithCurrentPath(currentPath, path) {
    const currentPathUsed = currentPath === "/" ? "" : currentPath

    return `${currentPathUsed}/${path}`
  }
  resolveRelativePath(currentPath, path, withPrefix = false) {
    const fullPath = this.joinWithCurrentPath(currentPath, path)

    return this.buildResolvedPath(withPrefix, fullPath)
  }
  buildResolvedPath(withPrefix, path) {
    const prefix = withPrefix ? `${this.prefix}#` : ""
    const root = this.root

    return `${root}${prefix}${path}`
  }
  resolveDirPath(...args) {
    return this.resolve(...adjust(prependSlash, 0, args))
  }
  unresolveCurrentPath() {
    return compose(
      replace("#", ""),
      replace("#/", ""),
      replace(`${this.root}${this.prefix}`, "")
    )(this.pathRetriever.retrieve())
  }
}
