import ramda = require("ramda")

import {Selection, Router, Renderer, LinkToRoute} from "frontend"

const { addIndex, forEach, reduce } = ramda
const each = addIndex(forEach)

const createBreadcrumb = (renderer): Selection => {
  const breadcrumb = renderer.create("div")

  breadcrumb.attr({
    class: "row",
    id: "layout-default-breadcrumb"
  })
  breadcrumb.append("div").attr("class", "col-lg-10").append("p").text("")
  return breadcrumb
}

const builPathForSegment = (segments: Array<string>, segmentIndex: number) => {
  const usedSegments = segments.slice(1, segmentIndex + 1)

  return reduce((acc, segment) => `${acc}/${segment}`, "", usedSegments)
}

export default class Breadcrumb {
  public element: Selection

  constructor(private factories: any, private renderer: Renderer, private router: Router) {
    this.element = createBreadcrumb(renderer)
  }

  update(): void {
    const currentPath = this.router.getCurrentPath()
    const segments = currentPath.split("/")
    const p = this.element.select("p")
    const { linkToRoute }: { linkToRoute: LinkToRoute } = this.factories

    p.text("")
    each(
      (segment, segmentIndex) => {
        const isLastSegment: boolean = segmentIndex === (segments.length - 1)
        const isRootSegment: boolean = segmentIndex === 0

        if (!isRootSegment) {
          const segmentPath: string = builPathForSegment(segments, segmentIndex)
          const segmentName: string = this.router.getDisplayedNameOfPath(segmentPath)

          if (isLastSegment) {
            const lastSegment: Selection = this.renderer.create("span").text(segmentName)
            this.renderer.appendSelectionInSelection(lastSegment, p)
          } else {
            const link = linkToRoute.create(segmentName, segmentPath)
            this.renderer.appendSelectionInSelection(link, p)

            const separator: Selection = this.renderer
              .create("span").attr("class", "separator").text("/")
            this.renderer.appendSelectionInSelection(separator, p)
          }
        }
      },
      segments
    )
  }
}
