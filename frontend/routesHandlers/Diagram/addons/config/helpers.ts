import { indexOf, omit, values } from "ramda"

export function setDefaultOfMultivalueConfig(
  multivalueConfiguration: any, defaultValue: any
): void {
  const valuesArr: Array<any> = values(omit(["KEY"], multivalueConfiguration))

  multivalueConfiguration.DEFAULT = {
    possibleValues: valuesArr,
    type: Number,
    value: valuesArr ? indexOf(defaultValue)(valuesArr) : 0,
  }
}

export function getCurrentValueOfMultivalueConfig(diagram: any, multivalueConfig: any): any {
  const indexValue: any = diagram.config(multivalueConfig.KEY).value

  return multivalueConfig.DEFAULT.possibleValues[indexValue]
}
