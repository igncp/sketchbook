const createFooter = (renderer) => {
  const footer = renderer.create("div")

  footer.attr("id", "footer")
  footer.append("p").text("2016")
  return footer
}

export default class Footer {
  constructor({ renderer }) {
    this.element = createFooter(renderer)
  }
}
