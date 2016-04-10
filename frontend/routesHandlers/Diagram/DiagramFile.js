import { any, append } from "ramda"

import File from "../../File"
import FileCollection from "../../FileCollection"

const isSharedFile = item => item.type === "file" && item.name === "shared.js"

const getSharedPaths = (sharedPaths, route, currentPath) => {
  if (route.parent) {
    const parentPath = currentPath.split("/").slice(0, -1).join("/")
    const newSharedPaths = any(isSharedFile, route.parent.children)
      ? append(`${parentPath}/shared.js`, sharedPaths)
      : sharedPaths

    return getSharedPaths(newSharedPaths, route.parent, parentPath)
  }

  return sharedPaths
}

export default class DiagramFile {
  constructor({ path, route }) {
    this.path = `/projects${path}`
    this.file = new File(this.path)
    this.route = route
  }
  load() {
    const sharedPaths = getSharedPaths([], this.route, this.path)
    const fileCollection = new FileCollection(sharedPaths)

    return fileCollection.loadScriptsInSeries().then(() => {
      return this.file.loadScript()
    })
  }
}
