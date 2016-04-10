import { assoc, map, curry } from "ramda"

import File from "./File"

const parseRoutes = curry((parent, routes) => {
  const usedRoutes = assoc("parent", parent, routes)

  return (routes.children)
    ? assoc("children", map(parseRoutes(usedRoutes), usedRoutes.children), usedRoutes)
    : usedRoutes
})

export default class RoutesFile {
  constructor({ path }) {
    this.path = path
    this.file = new File(path)
  }
  load() {
    return this.file.load().then(parseRoutes(null))
  }
}
