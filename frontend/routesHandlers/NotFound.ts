import {Selection, RouteHandler, Route, Router, Renderer} from "frontend"

function createContent(renderer: Renderer, route: Route): Selection {
  const content: Selection = renderer.create("div")

  content.append("p").text("Ouch, this page was not found! :_(")

  return content
}

export default class NotFound implements RouteHandler {
  constructor(private common: any, private app: any) { }

  handleRoute(route: Route): void {
    const { defaultLayout }: { defaultLayout: any } = this.common.layouts
    const { renderer }: { renderer: Renderer, router: Router } = this.app

    defaultLayout.onRouteChange()
    renderer.setLayout(defaultLayout)

    const content: Selection = createContent(renderer, route)

    renderer.renderInLayout(content)
  }

  shouldHandleRoute(route: Route): boolean {
    return route.type === "unknown"
  }
}
