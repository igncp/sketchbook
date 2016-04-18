import {Selection} from "frontend"

import { select } from "d3"
import { isNil } from "ramda"

import { diagramsWrapperSelector } from "../constants"

class Tooltip {
  constructor() {}

  show(elementAbove: any, initialContent: any): void {
    this.tooltip("show", elementAbove, initialContent)
  }

  hide(elementAbove: any, initialContent: any): void {
    this.tooltip("hide", elementAbove, initialContent)
  }

  private getBodyHeight(): number {
    const { body, documentElement }: { body: any, documentElement: any } = document
    const height: number = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      documentElement.clientHeight,
      documentElement.scrollHeight,
      documentElement.offsetHeight
    )

    return (<any>window).diagrams.svg.selectScreenHeightOrHeight(height)
  }

  private highlightCodeIfAny(content: string): string {
    return (<any>window).diagrams.utils.formatTextFragment(content)
  }

  private formatAndAddContent(tooltipEl: Selection, content: string): void {
    const finalContent: string = this.highlightCodeIfAny(content)
    tooltipEl.html(finalContent)
  }

  private tooltip(display: string, elementAbove: any, initialContent: any): void {
    const tooltipId: string = "diagrams-tooltip"
    let tooltipEl: Selection = select(`#${tooltipId}`)
    let wrapper: any

    if (tooltipEl[0][0] === null) {
      wrapper = select(diagramsWrapperSelector)
      tooltipEl = wrapper.insert("div", "svg").attr({
        id: tooltipId,
      })
    }

    tooltipEl.attr("style", this.getTooltipStyle(display, elementAbove, tooltipEl, initialContent))
  }

  private getTooltipStyle(
    display: string, elementAbove: any, tooltipEl: Selection, content: string
  ): string {
    if (display === "show" && isNil(content) === false) {
      return this.positionAndDisplay(elementAbove, tooltipEl, content)
    }

    return "display: none; "
  }

  private positionAndDisplay(elementAbove: any, tooltipEl: Selection, content: string): string {
    const bodyHeight: number = this.getBodyHeight()
    const initialStyle: string = "display: inline-block; "
    let tooltipTop: number

    this.formatAndAddContent(tooltipEl, content)

    if (typeof (elementAbove) === "string") {
      elementAbove = document.getElementById(elementAbove)
    } else if (elementAbove[0][0].id) {
      elementAbove = document.getElementById(elementAbove[0][0].id)
    } else {
      elementAbove = elementAbove[0][0]
    }

    const otherElementDims: any = elementAbove.getBoundingClientRect()

    tooltipEl.attr("style", `${initialStyle}; opacity: 0`)
    const tooltipHeight: number = (<any>tooltipEl.node()).getBoundingClientRect().height

    tooltipTop = otherElementDims.top + otherElementDims.height + document.body.scrollTop + 20

    if (tooltipTop + tooltipHeight > bodyHeight) {
      tooltipTop = otherElementDims.top + document.body.scrollTop - 20 - tooltipHeight

      if (tooltipTop < 0) {
        tooltipTop = otherElementDims.top + otherElementDims.height
          + document.body.scrollTop - tooltipHeight
      }
    }
    return `${initialStyle}top:${tooltipTop}px; `
  }
}

export default Tooltip
