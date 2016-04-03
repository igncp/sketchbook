const createHeader = (renderer, router, linkToRoute) => {
  const header = renderer.create("div")

  header.attr("id", "header")
  const h1 = header.append("h1")
  const a = linkToRoute.create("Sketchbook", "/")

  renderer.appendSelectionInSelection(a, h1)
  return header
}

export default class Header {
  constructor({ renderer, router, factories }) {
    const { linkToRoute } = factories

    this.element = createHeader(renderer, router, linkToRoute)
  }
}
