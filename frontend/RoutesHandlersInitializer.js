import Common from "./routesHandlers/common/Common"

import FilesExplorer from "./routesHandlers/FilesExplorer"
import Diagram from "./routesHandlers/Diagram"
import NotFound from "./routesHandlers/NotFound"

export default class RoutesHandlersInitializer {
  constructor({ app }) {
    const { renderer, router } = app
    const common = new Common({ renderer, router })

    const filesExplorer = new FilesExplorer(common, app)
    const diagram = new Diagram(common, app)
    const notFound = new NotFound(common, app)

    this.routesHandlers = [notFound, filesExplorer, diagram]
  }

  getAll() {
    return this.routesHandlers
  }
}
