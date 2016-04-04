import File from "../../File"

export default class DiagramFile {
  constructor({ path }) {
    this.path = `/projects${path}`
    this.file = new File({ path: this.path })
  }
  load() {
    return this.file.loadScript()
  }
}
