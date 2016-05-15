import { any, append, curry, keys, find } from "ramda"

import {Route, Promise} from "frontend"

import ProjectsFile from "../../ProjectsFile"
import FileCollection from "../../FileCollection"

const endsWith = curry((end, str: string) => str.substr(-end.length) === end)
const isGraphMLFile = endsWith("graphml")
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

const isDataOfKey = curry((key: string, nodeDataItem: any): boolean => {
  return nodeDataItem && nodeDataItem["@attributes"]
    && nodeDataItem["@attributes"].key === key
})

function getValueOfKey(key: string, nodeData: any): any {
  const isDataOfKeyPredicate = isDataOfKey(key)
  let valueOfKey

  if (nodeData) {
    if (nodeData.length) {
      valueOfKey = find(isDataOfKeyPredicate, nodeData)
    } else {
      valueOfKey = isDataOfKeyPredicate(nodeData) ? nodeData : null
    }
  }

  return valueOfKey ? valueOfKey["#text"] : ""
}

function generateDiagramData(originalData: any): any {
  const n = (<any>window).diagrams.graph.generateNode
  const ct = (<any>window).diagrams.graph.generateConnectionWithText

  const nodes = {}
  const links = {}

  const parseNode = (node, nodeIdx) => {
    nodes[node["@attributes"].id] = {
      id: nodeIdx,
      title: getValueOfKey("title", node.data),
      description: getValueOfKey("description", node.data)
    }
  }

  const parseLink = (edge) => {
    const {source} = edge["@attributes"]
    const link = {
      target: edge["@attributes"].target,
      text: edge["@attributes"].label || undefined
    }
    if (links[source]) {
      links[source].push(link)
    } else {
      links[source] = [link]
    }
  }

  if (originalData.node && originalData.node.length) {
    originalData.node.forEach(parseNode)
  } else if (originalData.node) {
    parseNode(originalData.node, 0)
  }
  if (originalData.edge && originalData.edge.length) {
    originalData.edge.forEach(parseLink)
  } else if (originalData.edge) {
    parseLink(originalData.edge)
  }

  const diagramData = keys(nodes).map((nodeName) => {
    const node = nodes[nodeName]
    const arr = [node.id]
    if (links[nodeName]) {
      links[nodeName].forEach((r) => {
        const targetId = nodes[r.target].id
        return arr.push(ct(targetId, r.text))
      })
    }
    return n(node.title, arr, node.description)
  })

  return diagramData
}

function generateGraphML(data: any): any {
  const diagramData = generateDiagramData(data.graphml.graph)

  setTimeout(() => {
    (<any>window).diagrams.graph(diagramData)
  }, 1000)
}

export default class DiagramFile extends ProjectsFile {
  load(): Promise {
    const sharedPaths: Array<string> = getSharedPaths([], this.route, this.path)
    const fileCollection: FileCollection = new FileCollection(sharedPaths)

    return fileCollection.loadScriptsInSeries().then(() => {
      if (isGraphMLFile(this.path)) {
        return super.loadXML().then(generateGraphML)
      } else {
        return super.loadScript()
      }
    })
  }
}
