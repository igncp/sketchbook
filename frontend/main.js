import "./css/style.css"

import App from "./App"
import RoutesFile from "./RoutesFile"
import PathResolver from "./PathResolver"
import WebPathRetriever from "./WebPathRetriever"

const pathRetriever = new WebPathRetriever()
const pathResolver = new PathResolver({ pathRetriever })
const path = pathResolver.resolve("/dist/routes.json", { withRoot: true })
const routesFile = new RoutesFile(path)

routesFile.load().then((routes) => {
  const app = new App(routes, pathResolver)

  app.bootstrap()
})

