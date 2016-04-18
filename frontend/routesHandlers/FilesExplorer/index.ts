import "./style.css"

import { compose, forEach, sortBy, prop, filter, any } from "ramda"
import {
  RouteHandler, Route, Router, Renderer, Selection, LinkToRoute
} from "frontend"

const sortByType: (x: Array<any>) => Array<any> = sortBy(prop("type"))

function loopAddingLinks(
  content: Selection, linkToRoute: LinkToRoute,
  renderer: Renderer, isRootRoute: boolean, router: Router
): (x: any) => void {
  const currentPath: string = router.getCurrentPath()

  return forEach((childRoute: Route) => {
    const childPath: string = router.joinWithCurrentPath(currentPath, childRoute.name)
    const p: Selection = content.append("p")
    const name: string = router.getDisplayedNameOfPath(childPath, childRoute)
    const a: Selection = linkToRoute.create(name, childPath)

    if (childRoute.type === "directory" && !isRootRoute) {
      a.attr("class", "directory")
      a.text(`${a.text()}/`)
    } else if (childRoute.type === "file") a.attr("class", "file")

    renderer.appendSelectionInSelection(a, p)
  })
}

function isMoreThanShared(item: Route): boolean {
  if (item.type === "file" && item.name === "shared.js") return false

  if (item.type === "directory") {
    if (!item.children || item.children.length === 0) return false

    return any(isMoreThanShared, item.children)
  }

  return true
}

const filterOutShared: (x: any) => any = filter(isMoreThanShared)

function getContent(common: any, renderer: Renderer, route: Route, router: Router): Selection {
  const linkToRoute: LinkToRoute = common.factories.linkToRoute
  const content: Selection = renderer.create("div")
  const isRootRoute: boolean = route.path === "/"

  content.attr("id", "files-explorer").attr("class", "col-lg10 col-lgoffset-1")

  if (isRootRoute) {
    content.append("h2").attr("id", "projects-title").append("strong").text("Projects")
  }

  compose(
    loopAddingLinks(content, linkToRoute, renderer, isRootRoute, router),
    sortByType,
    filterOutShared
  )(route.children)

  return content
}

export default class FilesExplorer implements RouteHandler {
  constructor(private common: any, private app: any) { }

  shouldHandleRoute(route: Route): boolean {
    return route.type === "directory"
  }
  handleRoute(route: Route): void {
    const defaultLayout: any = this.common.layouts.defaultLayout
    const { renderer, router }: {renderer: Renderer, router: Router} = this.app

    defaultLayout.onRouteChange()
    renderer.setLayout(defaultLayout)

    const content: Selection = getContent(this.common, renderer, route, router)

    renderer.renderInLayout(content)
  }
}
