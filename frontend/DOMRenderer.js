import { select, event } from "d3"

const renderNodeInNode = (parentNode, childNode) => {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild)
  }
  parentNode.appendChild(childNode)
}

const renderSelectionInSelection = (parentSelection, childSelection) => {
  const parentNode = parentSelection.node()
  const childNode = childSelection.node()
  renderNodeInNode(parentNode, childNode)
}

export default class DOMRenderer {
  setLayout(layout) {
    this.layout = layout
    renderNodeInNode(document.body, layout.element.node())
  }
  renderInLayout(contentSelection, sectionName = "main") {
    const sectionSelection = this.layout.selectSection(sectionName)
    renderSelectionInSelection(sectionSelection, contentSelection)
  }
  appendSelectionInSelection(childNode, parentNode) {
    parentNode.node().appendChild(childNode.node())
  }
  create(tag) {
    return select(document.createElement(tag))
  }
  createTrigger(fn) {
    const a = this.create("a")
    a.attr("href", "#")
    a.on("click", () => {
      event.preventDefault()
      fn()
    })
    return a
  }
  select(...args) {
    return select(...args)
  }
}
