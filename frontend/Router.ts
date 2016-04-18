import { assoc, find } from "ramda"

import {Router as fRouter, Route, RouteHandler} from "frontend"

function getRouteRecursively(remainingSegments: Array<string>, route: Route): Route {
  const segment: string = remainingSegments[0]
  const matchingChildren: Route = find(
    (routeChild: any) => routeChild.name === segment,
    route.children
  )
  const child: Route = matchingChildren || { type: "unknown", children: [], name: "unknown" }

  if (remainingSegments.length === 1) {
    return child
  } else {
    return getRouteRecursively(remainingSegments.slice(1), child)
  }
}

function getRouteOfPath(path: string, routes: Route): Route {
  const segments: Array<string> = path.split("/").slice(1)

  if (segments.length === 1 && segments[0] === "") {
    return assoc("path", path, routes)
  }

  return getRouteRecursively(segments, routes)
}

export default class Router implements fRouter {
  public routesHandlers: Array<RouteHandler> = []

  constructor(public routes: Route, public pathResolver: any) { }

  goTo(path: string): void {
    const usedPath: string = this.pathResolver.resolve(path)
    const routeOfPath: Route = getRouteOfPath(usedPath, this.routes)

    for (let i: number = 0; i < this.routesHandlers.length; i++) {
      const shouldHandleRoute: boolean = this.routesHandlers[i].shouldHandleRoute(routeOfPath)

      if (shouldHandleRoute) {
        const historyPath: string = this.pathResolver
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
    const segment: string = absolutePath.split("/").slice(-1)[0]

    if (segment.slice(-3) === ".js") {
      const routeOfPath: Route = route ? route : getRouteOfPath(absolutePath, this.routes)

      if (routeOfPath.type === "file") return segment.slice(0, -3)
    }

    return segment
  }
  bootstrap(): void {
    const currentPath: string = this.getCurrentPath()

    this.goTo(currentPath)
  }
}
