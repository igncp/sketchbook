import {Route, PathResolver, Promise, File as fFile} from "frontend"

import File from "./File"

export default class ProjectsFile implements fFile {
  public file: File
  constructor(protected path: string, protected route: Route, pathResolver: PathResolver) {
    this.path = pathResolver.resolve(`/projects${path}`, { withRoot: true })
    this.file = new File(this.path)
  }
  load(): Promise {
    return this.file.load()
  }

  loadScript(): Promise {
    return this.file.loadScript()
  }
}
