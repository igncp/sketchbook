import LinkToRoute from "./factories/LinkToRoute"
import DefaultLayout from "./layouts/Default"

export default class Common {
  constructor({ renderer, router }) {
    const factories = this.factories = {}

    factories.linkToRoute = new LinkToRoute({ renderer, router, factories })
    this.layouts = {
      defaultLayout: new DefaultLayout({ factories, renderer, router }),
    }
  }
}
