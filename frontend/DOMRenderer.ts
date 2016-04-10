import {select, event as d3Event} from "d3"

import f = require("frontend")

const renderNodeInNode = (parent: f.Node, child: f.Node): void => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
  parent.appendChild(child)
}

const renderSelectionInSelection = (parent: f.Selection, child: f.Selection): void => {
  const parentNode = <f.Node>parent.node()
  const childNode = <f.Node>child.node()

  renderNodeInNode(parentNode, childNode)
}

export default class DOMRenderer implements f.Renderer {
  private layout: any
  setLayout(layout): void {
    this.layout = layout
    renderNodeInNode(document.body, layout.element.node())
  }
  renderInLayout(contentSelection, sectionName = "main"): void {
    const sectionSelection = this.layout.selectSection(sectionName)

    renderSelectionInSelection(sectionSelection, contentSelection)
  }
  appendSelectionInSelection(childNode, parentNode): void {
    parentNode.node().appendChild(childNode.node())
  }
  create(tag: string): f.Selection {
    return select(document.createElement(tag))
  }
  createTrigger(fn: () => void): f.Selection {
    const a = this.create("a")

    a.attr("href", "#")
    a.on("click", () => {
      const event = <f.Event><any>d3Event
      event.preventDefault()
      fn()
    })
    return a
  }
  select(selector: any): f.Selection {
    return select(selector)
  }
}
