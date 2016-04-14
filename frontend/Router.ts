import { assoc, find } from "ramda"

import {Router as fRouter, Route, RouteHandler} from "frontend"

const getPathRecursively = (remainingSegments, routes) => {
  const segment = remainingSegments[0]
  const matchingChildren = find(
    (routeChild: any) => routeChild.name === segment,
    routes.children
  )
  const child = matchingChildren || { type: "unknown", children: [] }

  if (remainingSegments.length === 1) {
    return child
  } else {
    return getPathRecursively(remainingSegments.slice(1), child)
  }
}

function getRouteOfPath(path: string, routes: Array<Route>): Route {
  const segments = path.split("/").slice(1)

  if (segments.length === 1 && segments[0] === "") {
    return assoc("path", path, routes)
  } else {
    return getPathRecursively(segments, routes)
  }
}

export default class Router implements fRouter {
  public routesHandlers: Array<RouteHandler> = []

  constructor(public routes: Array<Route>, public  pathResolver: any) { }

  goTo(path: string): void {
    const usedPath = this.pathResolver.resolve(path)
    const routeOfPath = getRouteOfPath(usedPath, this.routes)

    for (let i = 0; i < this.routesHandlers.length; i++) {
      const shouldHandleRoute = this.routesHandlers[i].shouldHandleRoute(routeOfPath)

      if (shouldHandleRoute) {
        const historyPath = this.pathResolver
          .resolve(usedPath, { withPrefix: true, withRoot: true })

        window.history.pushState(null, null, historyPath)
        this.routesHandlers[i].handleRoute(routeOfPath)
        break
      }
    }
  }
  pushRoutesHandlers(routesHandlers: Array<RouteHandler>): void {
    this.routesHandlers = this.routesHandlers.concat(routesHandlers)
  }
  getCurrentPath(): string {
    return this.pathResolver.unresolveCurrentPath()
  }
  joinWithCurrentPath(...args: any[]): string {
    return this.pathResolver.joinWithCurrentPath(...args)
  }
  getDisplayedNameOfPath(absolutePath: string, route: Route = null): string {
    const segment = absolutePath.split("/").slice(-1)[0]

    if (segment.slice(-3) === ".js") {
      const routeOfPath = route ? route : getRouteOfPath(absolutePath, this.routes)

      if (routeOfPath.type === "file") return segment.slice(0, -3)
    }

    return segment
  }
  bootstrap(): void {
    const currentPath = this.getCurrentPath()

    this.goTo(currentPath)
  }
}
