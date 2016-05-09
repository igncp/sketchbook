import {ajax} from "zepto"
import {promise} from "when"

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

  loadXML(): Promise {
    return <any>promise(resolve => ajax({
      url: this.path,
      dataType: "xml",
      success: (data): any => {
        console.log('data', data)
        resolve(data)
      },
      error: (err) => {
        console.log('1', 1)
      }
    }))
  }

  loadScript(): Promise {
    return this.file.loadScript()
  }
}
