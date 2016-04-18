import { addIndex, forEach, reduce } from "ramda"

import {Selection, Router, Renderer, LinkToRoute} from "frontend"

const each: (x: any, y: any) => any = addIndex(forEach)

function getBreadcrumb(renderer: Renderer): Selection {
  const breadcrumb: Selection = renderer.create("div")

  breadcrumb.attr({
    class: "row",
    id: "layout-default-breadcrumb"
  })
  breadcrumb.append("div").attr("class", "col-lg-10").append("p").text("")
  return breadcrumb
}

function builPathForSegment(segments: Array<string>, segmentIndex: number): string {
  const usedSegments: Array<string> = segments.slice(1, segmentIndex + 1)

  return reduce((acc, segment) => `${acc}/${segment}`, "", usedSegments)
}

export default class Breadcrumb {
  public element: Selection

  constructor(private factories: any, private renderer: Renderer, private router: Router) {
    this.element = getBreadcrumb(renderer)
  }

  update(): void {
    const currentPath: string = this.router.getCurrentPath()
    const segments: Array<string> = currentPath.split("/")
    const p: Selection = this.element.select("p")
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
            const link: Selection = linkToRoute.create(segmentName, segmentPath)
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
