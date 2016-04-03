import Header from "./Header"
import Breadcrumb from "./Breadcrumb"
import Footer from "./Footer"

import "./style.css"

const appendMain = (root) => {
  root.append("div").attr("id", "main")
}

export default class DefaultLayout {
  constructor({ factories, renderer, router }) {
    this.renderer = renderer
    this.header = new Header({ renderer, router, factories })
    this.footer = new Footer({ renderer })
    this.breadcrumb = new Breadcrumb({ renderer, router, factories })
    this.element = this.createElement()
  }
  onRouteChange() {
    this.updateBreadcrumb()
  }
  updateBreadcrumb() {
    this.breadcrumb.update()
  }
  createElement() {
    const root = this.renderer.create("div")

    this.renderer.appendSelectionInSelection(this.header.element, root)
    this.renderer.appendSelectionInSelection(this.breadcrumb.element, root)
    appendMain(root)
    this.renderer.appendSelectionInSelection(this.footer.element, root)
    return root
  }
  selectSection(sectionName) {
    return this.element.select(`#${sectionName}`)
  }
}
