declare module "frontend" {
  import d3 = require("d3")

  export type Selection = d3.Selection<any>
  export interface Promise {
    (...args: any[]): this
    then(...args: any[]): this
    catch(...args: any[]): this
  }

  export interface Node extends EventTarget {
    firstChild: this
    appendChild(child: this): void
    removeChild(child: this): void
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
    getDisplayedNameOfPath(path: string, route?: Route): string
    goTo(path: string): void
    joinWithCurrentPath(...args: any[]): string
    pushRoutesHandlers(routesHandlers: Array<any>): void
  }

  export interface Renderer {
    setLayout(layout: any): void
    renderInLayout(contentSelection: Selection, sectionName?: string): void
    appendSelectionInSelection(child: Selection, parent: Selection): void
    create(tag: string): Selection
    createTrigger(fn: any): Selection
    select(...args: Array<any>): Selection
  }

  export interface LayoutSelection {
    element: Selection
  }

  export interface Route {
    type: string
    name: string
    parent: this
    children: Array<this>
  }

  export interface RouteHandler {
    handleRoute(route: Route): void
    shouldHandleRoute(route: Route): boolean
  }

  export interface WebPathRetriever {
    retrieve(): string
  }

  export interface PathResolver {
    isAbsolutePath(path: string): boolean
    resolve(pathStr: string, opts: any): string
    joinWithCurrentPath(currentPath: string, path: string): string
    resolveRelativePath(currentPath: string, path: string, opts: any): string
    buildResolvedPath(path: string, opts: any): string
    resolveDirPath(pathStr: string, opts: any): string
    unresolveCurrentPath(): string
  }
}
