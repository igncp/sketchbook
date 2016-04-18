import {Renderer, Router} from "frontend"

import LinkToRoute from "./factories/LinkToRoute"
import DefaultLayout from "./layouts/Default"

interface CommonFactories {
  linkToRoute: any
}

interface CommonLayouts {
  defaultLayout: any
}

export default class Common {
  public factories: CommonFactories
  public layouts: CommonLayouts

  constructor(renderer: Renderer, router: Router) {
    const factories: CommonFactories = this.factories = <CommonFactories>{}

    factories.linkToRoute = new LinkToRoute(renderer, router)
    this.layouts = <CommonLayouts>{
      defaultLayout: new DefaultLayout(factories, renderer, router),
    }
  }
}
