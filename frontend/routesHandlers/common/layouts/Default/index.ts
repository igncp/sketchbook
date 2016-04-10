import "./style.css"

import Header from "./Header"
import Breadcrumb from "./Breadcrumb"

import {Renderer, LayoutSelection, Selection, Router} from "frontend"

export default class DefaultLayout implements LayoutSelection {
  private header: Header
  private breadcrumb: Breadcrumb
  public element: Selection

  constructor(factories, private renderer: Renderer, router: Router) {
    this.header = new Header(renderer, router, factories)
    this.breadcrumb = new Breadcrumb(factories, renderer, router)
    this.element = this.createElement()
  }

  onRouteChange(): void {
    this.updateBreadcrumb()
  }

  updateBreadcrumb(): void {
    this.breadcrumb.update()
  }

  createElement(): Selection {
    const root = this.renderer.create("div")
    root.attr("id", "layout-default")
    this.renderer.appendSelectionInSelection(this.header.element, root)
    this.renderer.appendSelectionInSelection(this.breadcrumb.element, root)
    root.append("div").attr("id", "main")

    return root
  }

  selectSection(sectionName: string): Selection {
    return this.element.select(`#${sectionName}`)
  }
}