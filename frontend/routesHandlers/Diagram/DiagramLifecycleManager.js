import { forEach } from "ramda"

import configPanel from "./addons/config/panel"
import { getCurrentValueOfMultivalueConfig, setDefaultOfMultivalueConfig }
  from "./addons/config/helpers"
import { configs, diagramsWrapperSelector } from "./addons/constants"

import banner from "./addons/receptors/banner"
import modal from "./addons/receptors/modal"
import tooltip from "./addons/receptors/tooltip"
// import boxSearchBar from "./react-components/box-search-bar"
import fullScreen from "./addons/full-screen"

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
    if (item.data.fullText) {
      const currentValue = getCurrentValueOfMultivalueConfig(diagram, CLICK_HANDLER)
      let receptor

      if (currentValue === CLICK_HANDLER.BANNER && item.data.relationships) receptor = banner
      else if (currentValue === CLICK_HANDLER.MODAL) receptor = modal

      if (receptor) receptor.fill(item, diagram)
    }
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

export default class DiagramLifecycleManager {
  constructor({ diagramsLib }) {
    this.diagrams = diagramsLib
  }
  addListeners() {
    this.diagrams.events.listen("diagram-created", (diagram) => {
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

      // f (diagram.name === "box") boxSearchBar(diagram)
    })

    this.diagrams.events.listen("diagram-to-transform", (diagram) => {
      diagram.dispose()
    })
  }
  removeListeners() {
    this.diagrams.events.dispose()
  }
}
