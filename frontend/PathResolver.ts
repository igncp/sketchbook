import { ifElse, compose, replace, prepend, join, equals, head, identity, split } from "ramda"

const prependSlash = compose(join(""), prepend("/"), split(""))
const firstIsSlash = compose(equals("/"), head)

export default class PathResolver {
  isDev: boolean
  prefix: string
  root: string
  constructor(private pathRetriever) {
    const fullPath = pathRetriever.retrieve()

    this.isDev = !!/dev\.html/.exec(fullPath)
    this.prefix = this.isDev ? "dev.html" : ""
    this.root = this.isDev ? "" : "/sketchbook"
  }
  isAbsolutePath(path: string) {
    return path.substr(0, 1) === "/"
  }
  resolve(pathStr: string, opts) {
    const { withPrefix, withRoot }: {withPrefix: boolean, withRoot: boolean} = (opts || {})
    const isAbsolutePath = this.isAbsolutePath(pathStr)

    return isAbsolutePath
      ? this.buildResolvedPath(pathStr, { withPrefix, withRoot })
      : this.resolveRelativePath(this.unresolveCurrentPath(), pathStr, { withPrefix, withRoot })
  }
  joinWithCurrentPath(currentPath, path) {
    const currentPathUsed = currentPath === "/" ? "" : currentPath

    return `${currentPathUsed}/${path}`
  }
  resolveRelativePath(currentPath, path, opts) {
    const { withPrefix, withRoot }: { withPrefix: boolean, withRoot: boolean } = (opts || {})
    const fullPath = this.joinWithCurrentPath(currentPath, path)

    return this.buildResolvedPath(fullPath, { withPrefix, withRoot })
  }
  buildResolvedPath(path, opts) {
    const { withPrefix, withRoot }: { withPrefix: boolean, withRoot: boolean } = (opts || {})
    const prefix = withPrefix ? `${this.prefix}#` : ""
    const root = withRoot ? this.root : ""

    return `${root}${prefix}${path}`
  }
  resolveDirPath(pathStr: string, opts) {
    const newPathStr = prependSlash(pathStr)
    return this.resolve(newPathStr, opts)
  }
  unresolveCurrentPath() {
    return compose(
      ifElse(firstIsSlash, identity, prependSlash),
      replace("#", ""),
      replace("#/", ""),
      replace(`${this.root}${this.prefix}`, "")
    )(this.pathRetriever.retrieve())
  }
}
