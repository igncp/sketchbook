import { compose, forEach, sortBy, prop, filter, any } from "ramda"

import "./style.css"

const sortByType = sortBy(prop("type"))

const loopAddingLinks = ({ content, linkToRoute, renderer }) => forEach((childRoute) => {
  const p = content.append("p")
  const a = linkToRoute.create(childRoute.name, childRoute.name)

  if (childRoute.type === "directory") a.attr("class", "directory")
  else a.attr("class", "file")

  renderer.appendSelectionInSelection(a, p)
})

const isMoreThanShared = (item) => {
  if (item.type === "file" && item.name === "shared.js") return false

  if (item.type === "directory") {
    if (!item.children || item.children.length === 0) return false

    return any(isMoreThanShared, item.children)
  }

  return true
}

const filterOutShared = filter(isMoreThanShared)

const createContent = ({ common, renderer, route }) => {
  const { linkToRoute } = common.factories
  const content = renderer.create("div")

  content.attr("id", "files-explorer")

  compose(
    loopAddingLinks({ content, linkToRoute, renderer }),
    sortByType,
    filterOutShared,
  )(route.children)

  return content
}

export default class FilesExplorer {
  constructor({ common, app }) {
    this.common = common
    this.app = app
  }
  shouldHandleRoute(route) {
    if (route.type === "directory") {
      return true
    }
  }
  handleRoute(route) {
    const { defaultLayout } = this.common.layouts
    const { renderer } = this.app

    defaultLayout.onRouteChange()
    renderer.setLayout(defaultLayout)

    const content = createContent({ renderer, route, common: this.common })

    renderer.renderInLayout(content)
  }
}
