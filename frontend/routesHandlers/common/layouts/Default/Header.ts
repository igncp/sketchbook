import {Renderer, Router, LinkToRoute, Selection, LayoutSelection} from "frontend"

const createHeader = (renderer: Renderer, router: Router, linkToRoute: LinkToRoute): Selection => {
  const header: Selection = renderer.create("div")

  header.attr({
    id: "layout-default-header",
    class: "page-header col-lg10 col-lgoffset-1"
  })
  const h1 = header.append("h1")
  const a = linkToRoute.create("Sketchbook", "/")

  header.append("small")
    .text("this app is being ported to gh-pages, and it is work in progress")

  renderer.appendSelectionInSelection(a, h1)
  h1.append("small")
    .append("a").attr({
      href: "https://github.com/igncp/sketchbook",
      target: "_blank",
    }).text("source")

  return header
}

export default class Header implements LayoutSelection {
  public element: Selection
  constructor(renderer: Renderer, router: Router, factories: any) {
    const { linkToRoute } = factories

    this.element = createHeader(renderer, router, linkToRoute)
  }
}
