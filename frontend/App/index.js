import "./style.css"

import Router from "../Router"
import DOMRenderer from "../DOMRenderer"
import RoutesHandlersInitializer from "../RoutesHandlersInitializer"

export default class App {
  constructor({ routes }) {
    this.renderer = new DOMRenderer()
    this.router = new Router({ routes })
  }
  bootstrap() {
    const routesHandlersInitializer =
      new RoutesHandlersInitializer({ app: this })

    this.router.pushRoutesHandlers(routesHandlersInitializer.getAll())
    this.router.bootstrap()
  }
}
