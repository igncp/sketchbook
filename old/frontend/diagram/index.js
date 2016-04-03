import { loadScriptsInSeries } from "./utils"
import setupDiagrams from "./setup-diagrams"

require("scss/diagram/style.scss")

export const bootstrap = () => {
  setupDiagrams()

  // Loads the shared files in series from left to right,
  // till it finishes, and then loads the current diagram
  loadScriptsInSeries(sketchbook.sharedFilesPaths)
}
