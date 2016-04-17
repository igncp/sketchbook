import { ifElse, compose, replace, prepend, join, equals, head, identity, split } from "ramda"

import {PathResolver as fPathResolver} from "frontend"

const prependSlash = compose(join(""), prepend("/"), split(""))
const firstIsSlash = compose(equals("/"), head)

export default class PathResolver implements fPathResolver {
  private isDev: boolean
  private prefix: string
  private root: string

  constructor(private pathRetriever: any) {
    const fullPath = pathRetriever.retrieve()

    this.isDev = !!/dev\.html/.exec(fullPath)
    this.prefix = this.isDev ? "dev.html" : ""
    this.root = this.isDev ? "" : "/sketchbook"
  }

  isAbsolutePath(path: string): boolean {
    return path.substr(0, 1) === "/"
  }

  resolve(pathStr: string, opts: any): string {
    const { withPrefix, withRoot }: {withPrefix: boolean, withRoot: boolean} = (opts || {})
    const isAbsolutePath = this.isAbsolutePath(pathStr)

    return isAbsolutePath
      ? this.buildResolvedPath(pathStr, { withPrefix, withRoot })
      : this.resolveRelativePath(this.unresolveCurrentPath(), pathStr, { withPrefix, withRoot })
  }

  joinWithCurrentPath(currentPath: string, path: string): string {
    const currentPathUsed = currentPath === "/" ? "" : currentPath

    return `${currentPathUsed}/${path}`
  }

  resolveRelativePath(currentPath: string, path: string, opts: any): string {
    const { withPrefix, withRoot }: { withPrefix: boolean, withRoot: boolean } = (opts || {})
    const fullPath = this.joinWithCurrentPath(currentPath, path)

    return this.buildResolvedPath(fullPath, { withPrefix, withRoot })
  }

  buildResolvedPath(path: string, opts: any): string {
    const { withPrefix, withRoot }: { withPrefix: boolean, withRoot: boolean } = (opts || {})
    const prefix = withPrefix ? `${this.prefix}#` : ""
    const root = withRoot ? this.root : ""

    return `${root}${prefix}${path}`
  }

  resolveDirPath(pathStr: string, opts: any): string {
    const newPathStr = prependSlash(pathStr)
    return this.resolve(newPathStr, opts)
  }

  unresolveCurrentPath(): string {
    return compose(
      ifElse(firstIsSlash, identity, prependSlash),
      replace("#", ""),
      replace("#/", ""),
      replace(`${this.root}${this.prefix}`, "")
    )(this.pathRetriever.retrieve())
  }
}
