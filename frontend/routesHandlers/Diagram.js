const createContent = ({ renderer }) => {
  const content = renderer.create("p")

  content.text("diagram")
  return content
}

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
  handleRoute(route) {
    const { defaultLayout } = this.common.layouts
    const { common } = this
    const { renderer } = this.app

    renderer.setLayout(defaultLayout)
    defaultLayout.onRouteChange()

    const content = createContent({ renderer, route, common })

    renderer.renderInLayout(content)
  }
}
