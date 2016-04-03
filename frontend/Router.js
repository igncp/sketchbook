import { assoc, map, omit, find } from "ramda"

import History from "./History"

export const omitChildren = omit("children")
export const returnJustFirstChildren
  = obj => assoc("children", map(omitChildren, obj.children), obj)

const getPathRecursively = (remainingSegments, routes) => {
  const segment = remainingSegments[0]
  const matchingChildren = find((routeChildren) => {
    return routeChildren.name === segment
  }, routes.children)

  if (remainingSegments.length === 1) {
    return matchingChildren
  } else {
    return getPathRecursively(remainingSegments.slice(1), matchingChildren)
  }
}

export function getPathMatch(path, routes) {
  const segments = path.split("/").slice(1)

  if (segments.length === 1 && segments[0] === "") {
    return assoc("path", path, returnJustFirstChildren(routes))
  } else {
    return getPathRecursively(segments, routes)
  }
}

export default class Router {
  constructor({ routes, renderer }) {
    this.routes = routes
    this.renderer = renderer
    this.routesHandlers = []
    this.history = new History()
  }
  goTo(path) {
    const pathMatch = getPathMatch(path, this.routes)

    for (let i = 0; i < this.routesHandlers.length; i++) {
      const shouldHandleRoute = this.routesHandlers[i].shouldHandleRoute(pathMatch)

      if (shouldHandleRoute) {
        this.history.pushState(path)
        this.routesHandlers[i].handleRoute(pathMatch, this.renderer)
        break
      }
    }
  }
  getCurrentPath() {
    return this.history.getCurrentPath()
  }
  goToRelative(relativePath) {
    const currentPath = this.getCurrentPath()
    const newPath = currentPath === "/" ? `/${relativePath}` : `${currentPath}/${relativePath}`

    this.goTo(newPath)

  }
  pushRoutesHandlers(routesHandlers) {
    this.routesHandlers = this.routesHandlers.concat(routesHandlers)
  }
  bootstrap() {
    const currentPath = this.getCurrentPath()

    this.goTo(currentPath)
  }
}
