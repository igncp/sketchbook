declare module "frontend" {
  import d3 = require("d3")
  import when = require("when")

  export type Selection = d3.Selection<any>
  export type Promise = when.Promise

  export interface Node extends EventTarget {
    firstChild: this
    appendChild(child: this)
    removeChild(child: this)
  }

  export interface Event {
    preventDefault(): void
    bind(obj: any): this
  }

  export interface File {
    load(): Promise
    loadScript(): Promise
  }

  export interface LinkToRoute {
    create(text: string, path: string): Selection
  }

  export interface Router {
    routes: any
    pathResolver: any
    bootstrap(): void
    getCurrentPath(): string
    getDisplayedNameOfPath(path: string, route?)
    goTo(path: string): void
    joinWithCurrentPath(...args): string
    pushRoutesHandlers(routesHandlers): void
  }

  export interface Renderer {
    setLayout(layout): void
    renderInLayout(contentSelection, sectionName?): void
    appendSelectionInSelection(child: Selection, parent: Selection): void
    create(tag: string): Selection
    createTrigger(fn): Selection
    select(...args): Selection
  }

  export interface LayoutSelection {
    element: Selection
  }

  export interface Route {
    type: string
    name: string
  }

  export interface RouteHandler {
    handleRoute(route: Route): void
    shouldHandleRoute(route: Route): boolean
  }
}