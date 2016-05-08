import Common from "./routesHandlers/common/Common"

import FilesExplorer from "./routesHandlers/FilesExplorer"
import Diagram from "./routesHandlers/Diagram"
import Neo4jGraph from "./routesHandlers/Neo4jGraph"
import NotFound from "./routesHandlers/NotFound"

export default class RoutesHandlersInitializer {
  constructor({ app }) {
    const { renderer, router } = app
    const common = new Common(renderer, router)

    const filesExplorer = new FilesExplorer(common, app)
    const diagram = new Diagram(common, app)
    const notFound = new NotFound(common, app)
    const neo4jGraph = new Neo4jGraph(common, app)

    this.routesHandlers = [notFound, filesExplorer, neo4jGraph, diagram]
  }

  getAll() {
    return this.routesHandlers
  }
}
