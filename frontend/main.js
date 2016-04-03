import App from "./App"
import File from "./File"

const routesFile = new File({ path: "/dist/routes.json" })

routesFile.load().then((routes) => {
  const app = new App({ routes })
  app.bootstrap()
})

