import { any, append } from "ramda"

import {Route, PathResolver, Promise, File as fFile} from "frontend"

import File from "../../File"
import FileCollection from "../../FileCollection"

const isSharedFile: (x: Route) => boolean
  = route => route.type === "file" && route.name === "shared.js"

function getSharedPaths(
  sharedPaths: Array<string>, route: Route, currentPath: string
): Array<string> {
  if (route.parent) {
    const parentPath: string = currentPath.split("/").slice(0, -1).join("/")
    const newSharedPaths: Array<string> = any(isSharedFile, route.parent.children)
      ? append(`${parentPath}/shared.js`, sharedPaths)
      : sharedPaths

    return getSharedPaths(newSharedPaths, route.parent, parentPath)
  }

  return sharedPaths
}

export default class DiagramFile implements fFile {
  public file: File
  constructor(private path: string, private route: Route, pathResolver: PathResolver) {
    this.path = pathResolver.resolve(`/projects${path}`, { withRoot: true })
    this.file = new File(this.path)
  }
  load(): Promise {
    const sharedPaths: Array<string> = getSharedPaths([], this.route, this.path)
    const fileCollection: FileCollection = new FileCollection(sharedPaths)

    return fileCollection.loadScriptsInSeries().then(() => {
      return this.file.loadScript()
    })
  }
  loadScript(): Promise {
    return this.file.loadScript()
  }
}
