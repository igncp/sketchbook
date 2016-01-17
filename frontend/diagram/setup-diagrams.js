import { forEach } from "ramda"

import configPanel from "./config/panel"
import { getCurrentValueOfMultivalueConfig, setDefaultOfMultivalueConfig } from "./config/helpers"
import { configs, diagramsWrapperSelector } from "./constants"

import banner from "./receptors/banner"
import modal from "./receptors/modal"
import tooltip from "./receptors/tooltip"
import boxSearchBar from "./react-components/box-search-bar"
import fullScreen from "./full-screen"

const { CLICK_HANDLER, MR, SHOW_TOOLTIP } = configs

const handleMarkRelatedItems = (diagram, item) => {
  const currentValue = getCurrentValueOfMultivalueConfig(diagram, MR)
  let opts

  if (currentValue !== MR.NONE) {
    opts = {}

    if (currentValue === MR.DEPENDANTS) opts.filter = "dependants"
    else if (currentValue === MR.DEPENDENCIES) opts.filter = "dependencies"
    diagram.markRelatedItems(item.data, opts)
  }
}

const setDefaultConfiguration = (diagram) => {
  diagram.configCheckingLocalStorage(SHOW_TOOLTIP, true)

  setDefaultOfMultivalueConfig(MR, MR.NONE)
  setDefaultOfMultivalueConfig(CLICK_HANDLER, CLICK_HANDLER.MODAL)

  forEach((multivalueConfiguration) => {
    diagram.configCheckingLocalStorage(
      multivalueConfiguration.KEY,
      multivalueConfiguration.DEFAULT
    )
  })([MR, CLICK_HANDLER])
}

const diagramsCallbacks = {
  itemclick: (diagram) => (item) => {
    const currentValue = getCurrentValueOfMultivalueConfig(diagram, CLICK_HANDLER)
    let receptor

    if (currentValue === CLICK_HANDLER.BANNER && item.data.relationships) receptor = banner
    else if (currentValue === CLICK_HANDLER.MODAL) receptor = modal

    if (receptor) receptor.fill(item, diagram)
  },
  "items-rendered": () => () => {
    banner.runFnMaintainingScrollDueBanner(() => {
      banner.removePreviousBanner()
    })
  },
  mouseenter: (diagram) => (item) => {
    if (diagram.config(SHOW_TOOLTIP)) tooltip.onMouseEnterListenerFn(item.el, item.data.fullText)
    handleMarkRelatedItems(diagram, item)
  },
  mouseleave: (diagram) => () => {
    tooltip.onMouseLeaveListenerFn()
    if (diagram.unmarkAllItems && diagram.config(MR.KEY)) diagram.unmarkAllItems()
  },
}

const setupDiagrams = () => {
  diagrams.events.listen("diagram-created", (diagram) => {
    setDefaultConfiguration(diagram)
    configPanel(diagram)
    fullScreen(diagram)

    forEach((diagramEvent) => {
      return diagram.listen(diagramEvent, diagramsCallbacks[diagramEvent](diagram))
    }, [
      "mouseenter",
      "mouseleave",
      "itemclick",
      "items-rendered",
    ])

    if (diagram.name === "box") boxSearchBar(diagram)
  })

  diagrams.events.listen("diagram-to-transform", (diagram) => {
    diagram.dispose()
  })

  diagrams.diagramsWrapperSelector = diagramsWrapperSelector
}

export default setupDiagrams
