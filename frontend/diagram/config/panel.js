import { is, isArrayLike } from "ramda"
import d3, { select } from "d3"

import { each } from "../utils"

const isBoolean = is(Boolean)
const isObject = is(Object)

const hidePanel = (trigger, panel) => {
  trigger.html(`Show configuration &#x2193;`)
  panel.style(`display`, `none`)
}

const buildPanel = ({ diagram, panel }) => {
  const buildFormItem = function(configKey) {
    const optionEl = formEl.append(`div`).attr(`class`, `col-lg-6 text-center`)
    const configValue = diagram.config(configKey)
    const elId = configKey.replace(/ /g, `-`).toLowerCase()
    let inputEl, labelEl, subInputEl

    if (isBoolean(configValue)) {
      labelEl = optionEl.append(`div`).attr({
        class: `btn-group`,
        "data-toggle": `buttons`,
      }).append(`label`).attr({
        class: `checkbox-label btn btn-default`,
        for: elId,
      })

      inputEl = labelEl.append(`input`).attr({
        autocomplete: `off`,
        id: elId,
        type: `checkbox`,
      })
      labelEl.append(`span`).text(configKey)

      if (configValue === true) {
        inputEl.property(`checked`, configValue)
        labelEl.classed(`active`, configValue)
      }

      inputEl.on(`change`, () => {
        const checked = inputEl.property("checked")

        diagram.config(configKey, checked)
        labelEl.classed("active", checked)
      })
    } else if (isObject(configValue) && configValue[`private`] !== true) {
      if (isArrayLike(configValue.possibleValues)) {
        inputEl = optionEl.append(`select`).attr({
          id: elId,
        })
        each((possibleValue, index) => {
          subInputEl = inputEl.append("option").text(possibleValue)
          if (index === configValue.value) subInputEl.property(`selected`, true)
        })(configValue.possibleValues)

        inputEl.on(`change`, () => {
          configValue.value = configValue.possibleValues.indexOf(inputEl.node().value)
          diagram.config(configKey, configValue)
        })
      }
    }

  }
  let formEl

  panel.text(``)
  formEl = panel.append(`form`)
  for (const configKey in diagram.config()) {
    buildFormItem(configKey)
  }
}

const configPanel = function(diagram) {
  const panel = select(`#diagram-configuration-panel`)
  const trigger = select(`#diagram-configuration-trigger`)
  const showPanel = function() {
    trigger.html(`Hide configuration &#x2191;`)
    panel.style(`display`, `block`)
  }
  let panelIsHidden

  buildPanel({ diagram, panel })
  trigger.on("click", () => {
    d3.event.preventDefault()
    panelIsHidden = (panel.style(`display`) === `none`)
    if (panelIsHidden) showPanel()
    else hidePanel(trigger, panel)
  })
  hidePanel(trigger, panel)
}

export default configPanel
