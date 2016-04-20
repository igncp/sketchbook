/* global diagrams */

import {event as d3Event, select} from "d3"
import {forEach} from "ramda"
import {Selection, Event} from "frontend"

import { diagramsWrapperId } from "./constants"

const getClickHandlerFn: any = (diagram) => () => {
  const screenChangeEventList: string = "webkitfullscreenchange mozfullscreenchange "
    + "fullscreenchange MSFullscreenChange"
  const SCREEN_CHANGE_EVENTS: Array<string> = screenChangeEventList.split(" ")

  const event: Event = <Event><any>d3Event
  event.preventDefault()

  const wrapper: any = document.getElementById(diagramsWrapperId)

  if (wrapper.requestFullscreen) {
    wrapper.requestFullscreen()
  } else if (wrapper.webkitRequestFullscreen) {
    wrapper.webkitRequestFullscreen()
  } else if (wrapper.mozRequestFullScreen) {
    wrapper.mozRequestFullScreen()
  } else if (wrapper.msRequestFullscreen) {
    wrapper.msRequestFullscreen()
  }

  diagram.reRender()
  wrapper.style.height = `${screen.height}px`

  const fullScreenOutListener: any = function(): void {
    if ((<any>window).diagrams.svg.fullscreenElement() === null) {
      wrapper.style.height = null
      diagram.reRender()
      forEach((screenEvent: any) => {
        document.removeEventListener(screenEvent, fullScreenOutListener)
      })(SCREEN_CHANGE_EVENTS)
    }
  }

  forEach((screenEvent: any) => {
    document.addEventListener(screenEvent, fullScreenOutListener)
  })(SCREEN_CHANGE_EVENTS)
}

class FullScreen {
  trigger(diagram: any): void {
    const trigger: Selection = select("#diagram-fullscreen-trigger")

    if (document.fullscreenEnabled || document.webkitFullscreenEnabled
      || (<any>document).mozFullScreenEnabled || (<any>document).msFullscreenEnabled) {

      trigger.on("click", getClickHandlerFn(diagram))
    } else trigger.remove()
  }
}

export default FullScreen
