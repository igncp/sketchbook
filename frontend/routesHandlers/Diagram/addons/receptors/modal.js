/* global jQuery */
import { select } from "d3"

import { addListenersToContentElLinks, getFillHtmlOfItem } from "./helpers"

const MODAL_PREFIX = "modal"
const MODAL_SELECTOR = "#sketchbook-modal"

const fill = (item, diagram) => {
  const modalHtml = "<div class=\"diagrams-modal-receptor-wrapper\">"
    + `${getFillHtmlOfItem({ diagram, item, receptorPrefix: MODAL_PREFIX })}`
    + "</div>"
  const modalEl = select(MODAL_SELECTOR).select(".modal-body").html(modalHtml)

  jQuery(MODAL_SELECTOR).modal()

  addListenersToContentElLinks({
    contentEl: modalEl, diagram, fillFn: fill, item, receptorPrefix: MODAL_PREFIX,
  })
}

const modal = {
  fill,
}

export default modal
