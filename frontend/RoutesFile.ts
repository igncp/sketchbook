import { assoc, map, curry } from "ramda"
import {Promise, Route} from "frontend"

import File from "./File"

const parseRoutes: (x: any) => any = curry((parent, routes: any) => {
  const usedRoutes: Route = assoc("parent", parent, routes)

  return (routes.children)
    ? assoc("children", map(parseRoutes(usedRoutes), usedRoutes.children), usedRoutes)
    : usedRoutes
})

export default class RoutesFile {
  private file: File

  constructor(path: string) {
    this.file = new File(path)
  }
  load(): Promise {
    return this.file.load()
      .then(parseRoutes(null))
  }
}
