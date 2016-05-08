import { any, append, keys } from "ramda"

import {Route, Promise} from "frontend"

import ProjectsFile from "../../ProjectsFile"
import FileCollection from "../../FileCollection"

const isJsonFile = (name: String) => name.substr(-4) === "json"
const isSharedFile: (x: Route) => boolean
  = route => route.type === "file" && route.name === "shared.js"

function getSharedPaths(
  sharedPaths: Array<string>, route: Route, currentPath: string
): Array<string> {
  if (route.parent) {
    const parentPath: string = currentPath.split("/").slice(0, -1).join("/")
    const newSharedPaths: Array<string> = any(isSharedFile, route.parent.children)
      ? append(`${parentPath}/shared.js`, sharedPaths)
      : sharedPaths

    return getSharedPaths(newSharedPaths, route.parent, parentPath)
  }

  return sharedPaths
}

function getIdIndex(a: any, id: any): any {
  for (let i = 0; i < a.length; i++) {
     if (a[i].id === id) return i
  }

  return null
}

function transformData(data: any): any {
  let nodes = []
  let links = {}

  data.forEach((row) => {
    row.graph.nodes.forEach((n) => {
      if (getIdIndex(nodes, n.id) == null) {
        nodes.push({
          id: n.id,
          label: n.labels[0],
          title: n.properties.name
        })
      }
    })

    row.graph.relationships.forEach((r) => {
      const sourceId = r.startNode
      const linkObj = { source: r.startNode, target: r.endNode, type: r.type, value: 1 }
      if (links[sourceId]) {
        links[sourceId].push(linkObj)
      } else links[sourceId] = [linkObj]
    })
  })

  // The links come repeated, so it splits it in half
  keys(links).forEach((linksKey) => {
    links[linksKey] = links[linksKey].slice(0, links[linksKey].length / 2)
  })

  return { nodes, links }
}

function generateGraph(data: any): any {
  const transformedData = transformData(data)
  const n = (<any>window).diagrams.graph.generateNode
  const ct = (<any>window).diagrams.graph.generateConnectionWithText
  const graphData = transformedData.nodes.map((node) => {
    const arr = [Number(node.id)]
    if (transformedData.links[node.id]) {
      transformedData.links[node.id].forEach((r) => {
        return arr.push(ct(Number(r.target), r.type))
      })
    }
    return n(node.title, arr)
  })
  console.log('transformedData', transformedData)
  setTimeout(function (argument) {
    (<any>window).diagrams.graph(graphData)
  }, 1000)
}

export default class DiagramFile extends ProjectsFile {
  load(): Promise {
    const sharedPaths: Array<string> = getSharedPaths([], this.route, this.path)
    const fileCollection: FileCollection = new FileCollection(sharedPaths)

    return fileCollection.loadScriptsInSeries().then(() => {
      if (isJsonFile(this.path)) {
        return super.load().then((result) => {
          generateGraph(result.data)
        })
      } else {
        return super.loadScript()
      }
    })
  }
}
