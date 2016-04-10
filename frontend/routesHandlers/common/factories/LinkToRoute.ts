import d3 = require("d3")
import f = require("frontend")

export default class LinkToRoute implements f.LinkToRoute {
  constructor(private renderer: any, private router: f.Router) { }

  create(text: string, path: string) {
    const trigger = this.renderer.createTrigger(() => {
      this.router.goTo(path)
    })

    trigger.text(text)
    return trigger
  }
}
