import { indexOf, omit, values } from "ramda"

export const setDefaultOfMultivalueConfig = (multivalueConfiguration, defaultValue) => {
  const valuesArr = values(omit(["KEY"], multivalueConfiguration))

  multivalueConfiguration.DEFAULT = {
    possibleValues: valuesArr,
    type: Number,
    value: valuesArr ? indexOf(defaultValue)(valuesArr) : 0,
  }
}

export const getCurrentValueOfMultivalueConfig = (diagram, multivalueConfig) => {
  const indexValue = diagram.config(multivalueConfig.KEY).value

  return multivalueConfig.DEFAULT.possibleValues[indexValue]
}
