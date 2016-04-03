import { forEach } from "ramda"

import "./style.css"

const createContent = ({ common, renderer, route }) => {
  const { linkToRoute } = common.factories
  const content = renderer.create("div")

  content.attr("id", "files-explorer")

  forEach((childRoute) => {
    const p = content.append("p")
    const a = linkToRoute.create(childRoute.name, childRoute.name)

    if (childRoute.type === "directory") a.attr("class", "directory")
    else a.attr("class", "file")

    renderer.appendSelectionInSelection(a, p)
  }, route.children)

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
