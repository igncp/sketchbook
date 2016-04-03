import d3, { select } from "d3"
import { forEach } from "ramda"

import { diagramsWrapperId } from "./constants"

const getClickHandlerFn = (diagram) => () => {
  const SCREEN_CHANGE_EVENTS = (`webkitfullscreenchange mozfullscreenchange `
    + `fullscreenchange MSFullscreenChange`).split(` `)
  let fullScreenOutListener

  d3.event.preventDefault()

  const wrapper = document.getElementById(diagramsWrapperId)

  if (wrapper.requestFullscreen) wrapper.requestFullscreen()
  else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen()
  else if (wrapper.mozRequestFullScreen) wrapper.mozRequestFullScreen()
  else if (wrapper.msRequestFullscreen) wrapper.msRequestFullscreen()

  diagram.reRender()
  wrapper.style.height = `${screen.height}px`

  fullScreenOutListener = function() {
    if (diagrams.svg.fullscreenElement() === null) {
      wrapper.style.height = null
      diagram.reRender()
      forEach((screenEvent) => {
        document.removeEventListener(screenEvent, fullScreenOutListener)
      })(SCREEN_CHANGE_EVENTS)
    }
  }

  forEach((screenEvent) => {
    document.addEventListener(screenEvent, fullScreenOutListener)
  })(SCREEN_CHANGE_EVENTS)
}

const fullScreen = (diagram) => {
  const trigger = select("#diagram-fullscreen-trigger")

  if (document.fullscreenEnabled || document.webkitFullscreenEnabled
    || document.mozFullScreenEnabled || document.msFullscreenEnabled) {

    trigger.on("click", getClickHandlerFn(diagram))
  } else trigger.remove()
}

export default fullScreen
