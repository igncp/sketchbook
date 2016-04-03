import { addIndex, forEach, reduce } from "ramda"

const each = addIndex(forEach)

const createBreadcrumb = (renderer) => {
  const breadcrumb = renderer.create("div")

  breadcrumb.attr("id", "breadcrumb")
  breadcrumb.append("p").text("")
  return breadcrumb
}

const builPathForSegment = (segments, segmentIndex) => {
  const usedSegments = segments.slice(1, segmentIndex + 1)

  return reduce((acc, segment) => {
    return `${acc}/${segment}`
  }, "", usedSegments)
}

export default class Breadcrumb {
  constructor({ factories, renderer, router }) {
    this.renderer = renderer
    this.router = router
    this.factories = factories
    this.element = createBreadcrumb(renderer, router)
  }
  update() {
    const currentPath = this.router.getCurrentPath()
    const segments = currentPath.split("/")
    const p = this.element.select("p")
    const { linkToRoute } = this.factories

    p.text("")
    each((segment, segmentIndex) => {
      const path = builPathForSegment(segments, segmentIndex)
      const link = linkToRoute.create(segment, path)

      this.renderer.appendSelectionInSelection(link, p)
    }, segments)
  }
}
