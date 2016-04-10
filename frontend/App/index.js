import "./style.css"

import Router from "../Router"
import DOMRenderer from "../DOMRenderer"
import RoutesHandlersInitializer from "../RoutesHandlersInitializer"

export default class App {
  constructor(routes, pathResolver) {
    this.renderer = new DOMRenderer()
    this.pathResolver = pathResolver
    this.router = new Router(routes, pathResolver)
  }
  bootstrap() {
    const routesHandlersInitializer
      = new RoutesHandlersInitializer({ app: this })

    this.router.pushRoutesHandlers(routesHandlersInitializer.getAll())
    this.router.bootstrap()
  }
}
