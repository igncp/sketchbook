import {select, event as d3Event} from "d3"

import {Selection, Node, Event, Renderer} from "frontend"

const renderNodeInNode = (parent: Node, child: Node): void => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
  parent.appendChild(child)
}

const renderSelectionInSelection = (parent: Selection, child: Selection): void => {
  const parentNode = <Node>parent.node()
  const childNode = <Node>child.node()

  renderNodeInNode(parentNode, childNode)
}

export default class DOMRenderer implements Renderer {
  private layout: any
  setLayout(layout: any): void {
    this.layout = layout
    renderNodeInNode(document.body, layout.element.node())
  }
  renderInLayout(contentSelection: Selection, sectionName: string = "main"): void {
    const sectionSelection = this.layout.selectSection(sectionName)

    renderSelectionInSelection(sectionSelection, contentSelection)
  }
  appendSelectionInSelection(childNode: any, parentNode: any): void {
    parentNode.node().appendChild(childNode.node())
  }
  create(tag: string): Selection {
    return select(document.createElement(tag))
  }
  createTrigger(fn: () => void): Selection {
    const a = this.create("a")

    a.attr("href", "#")
    a.on("click", () => {
      const event = <Event><any>d3Event
      event.preventDefault()
      fn()
    })
    return a
  }
  select(selector: any): Selection {
    return select(selector)
  }
}
