import DiagramFile from "./DiagramFile"

export default class Diagram {
  constructor({ common, app }) {
    this.common = common
    this.app = app
  }
  shouldHandleRoute(route) {
    if (route.type === "file") {
      return true
    }
  }
  handleRoute() {
    const { defaultLayout } = this.common.layouts
    const { renderer, router } = this.app
    const currentPath = router.getCurrentPath()
    const file = new DiagramFile({ path: currentPath })

    renderer.setLayout(defaultLayout)
    defaultLayout.onRouteChange()
    renderer.renderInLayout(renderer.create("div"))
    file.load()
  }
}
