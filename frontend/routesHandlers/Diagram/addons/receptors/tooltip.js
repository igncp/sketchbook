import { select } from "d3"
import { isNil, partial } from "ramda"

import { diagramsWrapperSelector } from "../constants"

let tooltipStyle, content

const highlightCodeIfAny = () => {
  content = diagrams.utils.formatTextFragment(content)
}

const formatAndAddContent = ({ tooltipEl }) => {
  highlightCodeIfAny()
  tooltipEl.html(content)
}

const getBodyHeight = () => {
  const { body, documentElement } = document
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    documentElement.clientHeight,
    documentElement.scrollHeight,
    documentElement.offsetHeight
  )

  return diagrams.svg.selectScreenHeightOrHeight(height)
}

const showTooltip = ({ elementAbove, tooltipEl }) => {
  const bodyHeight = getBodyHeight()
  let tooltipTop

  tooltipStyle += "display: inline-block; "
  formatAndAddContent({ tooltipEl })

  if (typeof(elementAbove) === "string") elementAbove = document.getElementById(elementAbove)
  else if (elementAbove[0][0].id) elementAbove = document.getElementById(elementAbove[0][0].id)
  else elementAbove = elementAbove[0][0]

  const otherElementDims = elementAbove.getBoundingClientRect()

  tooltipEl.attr("style", `${tooltipStyle}; opacity: 0`)
  const tooltipHeight = tooltipEl.node().getBoundingClientRect().height

  tooltipTop = otherElementDims.top + otherElementDims.height + document.body.scrollTop + 20

  if (tooltipTop + tooltipHeight > bodyHeight) {
    tooltipTop = otherElementDims.top + document.body.scrollTop - 20 - tooltipHeight

    if (tooltipTop < 0) {
      tooltipTop = otherElementDims.top + otherElementDims.height
        + document.body.scrollTop - tooltipHeight
    }
  }
  tooltipStyle += `top:${tooltipTop}px; `
}

const tooltip = function(display, elementAbove, initialContent) {
  const tooltipId = "diagrams-tooltip"
  let tooltipEl = select(`#${tooltipId}`)
  let wrapper

  tooltipStyle = ""
  content = initialContent

  if (content !== false) {
    if (tooltipEl[0][0] === null) {
      wrapper = select(diagramsWrapperSelector)
      tooltipEl = wrapper.insert("div", "svg").attr({
        id: tooltipId,
      })
    }

    if (display === "show" && isNil(content) === false) {
      showTooltip({ elementAbove, tooltipEl })
    } else if (display === "hide" || isNil(content) === true) {
      tooltipStyle += "display: none; "
    }

    tooltipEl.attr("style", tooltipStyle)
  }
}

const tooltipPartial = partial(tooltip)

tooltip.onMouseEnterListenerFn = tooltipPartial(["show"])
tooltip.onMouseLeaveListenerFn = tooltipPartial(["hide"])

export default tooltip
