import pipeline = require("when/pipeline")
import {map} from "ramda"

import {Promise} from "frontend"

import File from "./File"

export default class FileCollection {
  constructor(private paths: Array<string>) { }
  loadScriptsInSeries(): Promise {
    const loadScriptArr: Array<Promise> = map((path) => {
      const file = new File(path)
      return file.loadScript.bind(file)
    }, this.paths)

    return pipeline(loadScriptArr)
  }
}
