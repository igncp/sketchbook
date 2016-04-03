import Common from "./routesHandlers/common/Common"
import FilesExplorer from "./routesHandlers/FilesExplorer"
import Diagram from "./routesHandlers/Diagram"

export default class RoutesHandlersInitializer {
  constructor({ app }) {
    const { renderer, router } = app
    const common = new Common({ renderer, router })

    const filesExplorer = new FilesExplorer({ app, common })
    const diagram = new Diagram({ app, common })

    this.routesHandlers = [filesExplorer, diagram]
  }

  getAll() {
    return this.routesHandlers
  }
}
