import "./css/style.css"

import DiagramFile from "./DiagramFile"
import DiagramLifecycleManager from "./DiagramLifecycleManager"

const createContent = function(renderer, pathResolver) {
  const content = renderer.create("div")
  const configurations = content.append("h3")

  configurations.append("a").attr({
    id: "diagram-configuration-trigger",
    href: "#",
  })
  const fullscreenTrigger = configurations.append("a").attr({
    href: "#",
    id: "diagram-fullscreen-trigger",
    class: "svg-image",
    title: "Enter fullscreen",
  })

  const iconPath = pathResolver
    .resolveDirPath(`${__dirname}/icons/fullscreen-free.svg`, { withRoot: true })

  fullscreenTrigger.append("img").attr("src", iconPath)

  content.append("div").attr({
    class: "row",
    id: "diagram-configuration-panel",
  })
  content.append("div").attr("id", "diagram-wrapper")

  return content
}

export default class Diagram {
  constructor(common, app) {
    this.common = common
    this.app = app
    this.diagramLifecycleManager = new DiagramLifecycleManager({ diagramsLib: window.diagrams })
  }
  shouldHandleRoute(route) {
    if (route.type === "file") {
      return true
    }
  }
  handleRoute(route) {
    const { defaultLayout } = this.common.layouts
    const { renderer, router, pathResolver } = this.app
    const currentPath = router.getCurrentPath()
    const file = new DiagramFile({ path: currentPath, route, pathResolver })

    renderer.setLayout(defaultLayout)
    defaultLayout.onRouteChange()
    const content = createContent(renderer, pathResolver)

    renderer.renderInLayout(content)
    this.diagramLifecycleManager.addListeners()
    file.load()
  }
}
