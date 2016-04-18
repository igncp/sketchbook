import {Router, Renderer, LinkToRoute as fLinkToRoute, Selection} from "frontend"

export default class LinkToRoute implements fLinkToRoute {
  constructor(private renderer: Renderer, private router: Router) { }

  create(text: string, path: string): Selection {
    const trigger: Selection = this.renderer.createTrigger(() => {
      this.router.goTo(path)
    })

    trigger.text(text)
    return trigger
  }
}
