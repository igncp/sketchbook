export default class LinkToRoute {
  constructor({ renderer, router }) {
    this.renderer = renderer
    this.router = router
  }
  create(text, path) {
    const trigger = this.renderer.createTrigger(() => {
      const isRelative = path.substr(0, 1) !== "/"

      if (isRelative) this.router.goToRelative(path)
      else this.router.goTo(path)
    })

    trigger.text(text)
    return trigger
  }
}
