import "./style.css"

import { compose, forEach, sortBy, prop, filter, any } from "ramda"
import {
  RouteHandler, Route, Router, Renderer, Selection
} from "frontend"

const sortByType = sortBy(prop("type"))

const loopAddingLinks = ({ content, linkToRoute, renderer, isRootRoute, router }) => {
  const currentPath: string = router.getCurrentPath()

  return forEach((childRoute: Route) => {
    const childPath = router.joinWithCurrentPath(currentPath, childRoute.name)
    const p = content.append("p")
    const name = router.getDisplayedNameOfPath(childPath, childRoute)
    const a = linkToRoute.create(name, childPath)

    if (childRoute.type === "directory" && !isRootRoute) {
      a.attr("class", "directory")
      a.text(`${a.text()}/`)
    } else if (childRoute.type === "file") a.attr("class", "file")

    renderer.appendSelectionInSelection(a, p)
  })
}

const isMoreThanShared = (item) => {
  if (item.type === "file" && item.name === "shared.js") return false

  if (item.type === "directory") {
    if (!item.children || item.children.length === 0) return false

    return any(isMoreThanShared, item.children)
  }

  return true
}

const filterOutShared = filter(isMoreThanShared)

const createContent = ({ common, renderer, route, router }) => {
  const { linkToRoute } = common.factories
  const content = renderer.create("div")
  const isRootRoute = route.path === "/"

  content.attr("id", "files-explorer").attr("class", "col-lg10 col-lgoffset-1")

  if (isRootRoute) {
    content.append("h2").attr("id", "projects-title").append("strong").text("Projects")
  }

  compose(
    loopAddingLinks({ content, linkToRoute, renderer, isRootRoute, router }),
    sortByType,
    filterOutShared
  )(route.children)

  return content
}

export default class FilesExplorer implements RouteHandler {
  constructor(private common, private app) {}
  shouldHandleRoute(route: Route): boolean {
    return route.type === "directory"
  }
  handleRoute(route: Route) {
    const { defaultLayout } = this.common.layouts
    const { renderer, router }: {renderer: Renderer, router: Router} = this.app

    defaultLayout.onRouteChange()
    renderer.setLayout(defaultLayout)

    const content: Selection = createContent({ renderer, route, common: this.common, router })

    renderer.renderInLayout(content)
  }
}
