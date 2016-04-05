import fs from "fs"
import { assoc, compose, map, omit, filter, isEmpty, partial } from "ramda"
import { directoryTree } from "directory-tree"

const routesTree = directoryTree("./projects")
const filterOutNull = filter(item => item !== null)

const getParsedRoutesTreeOfChildren = item => (item.children)
  ? assoc("children", map(getParsedRoutesTree, item.children), item)
  : item

const isOmitedFile = (fileName) => {
  if (fileName.substr(-3) !== ".js") return true

  return false
}
const filterOutOmitedFiles = item => (item.type === "file" && isOmitedFile(item.name))
  ? null
  : item

const getParsedRoutesTree = (item) => {
  return compose(
    omit(["path"]),
    filterOutOmitedFiles,
    getParsedRoutesTreeOfChildren,
  )(item)
}

const getCleanedRoutesTree = (item) => {
  if (isEmpty(item)) return null

  if (item === null || item.type === "file") return item

  const newChildren = compose(
    filterOutNull,
    map(getCleanedRoutesTree)
  )(item.children)

  if (newChildren.length === 0) return null

  return assoc("children", newChildren, item)
}

compose(
  partial(fs.writeFileSync, [`${__dirname}/../../dist/routes.json`]),
  JSON.stringify,
  getCleanedRoutesTree,
  getParsedRoutesTree
)(routesTree)

