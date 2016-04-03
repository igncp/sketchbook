import { select } from "d3"

import { bannerId } from "../constants"
import { addListenersToContentElLinks, getFillHtmlOfItem } from "./helpers"

const BANNER_PREFIX = "banner"

const runFnMaintainingScrollDueBanner = function(fn) {
  const previousBanner = select(`#${bannerId}`)
  let currentBanner, previousBannerHeight, currentBannerHeight, currentScroll

  currentScroll = (window.pageYOffset || document.documentElement.scrollTop)
    - (document.documentElement.clientTop || 0)

  if (previousBanner[0][0]) {
    previousBannerHeight = previousBanner[0][0].getBoundingClientRect().height
  } else previousBannerHeight = 0
  fn()
  currentBanner = select(`#${bannerId}`)
  if (currentBanner[0][0]) {
    currentBannerHeight = currentBanner[0][0].getBoundingClientRect().height
  } else currentBannerHeight = 0

  window.scrollTo(0, currentScroll - (previousBannerHeight - currentBannerHeight + 10))
}

const removePreviousBanner = () => {
  const previousBanner = select(`#${bannerId}`)

  if (previousBanner[0][0]) previousBanner.remove()
}

const fill = (item, diagram) => {
  let bannerEl

  runFnMaintainingScrollDueBanner(() => {
    removePreviousBanner()

    const bannerHtml = `<div id="diagrams-banner-cross">&#x2715;</div>`
      + `${getFillHtmlOfItem({ diagram, item, receptorPrefix: BANNER_PREFIX })}`

    bannerEl = diagrams.svg.insertInBodyBeforeSvg(`div`).attr({
      id: bannerId,
    }).html(bannerHtml)
  })
  addListenersToContentElLinks({
    contentEl: bannerEl, diagram, fillFn: fill, item, receptorPrefix: BANNER_PREFIX,
  })
  bannerEl.select("#diagrams-banner-cross").on(`click`, () => bannerEl.remove())
}

const banner = {
  fill,
  removePreviousBanner,
  runFnMaintainingScrollDueBanner,
}

export default banner
