import fs from "fs"
import { assoc, compose, map, omit, filter, isEmpty, partial, flip, contains, not } from "ramda"
import { directoryTree } from "directory-tree"

const UNTRACKED_PROJECTS = ["private", "discontinued"]

const routesTree = directoryTree("./projects")
const isUntrackedProject = flip(contains)(UNTRACKED_PROJECTS)

const getParsedRoutesTreeOfChildren = item => (item.children)
  ? assoc("children", map(getParsedRoutesTree, item.children), item)
  : item

const isOmitedFile = (fileName) => {
  if (fileName.substr(-3) !== ".js") return true

  return false
}
const nullifyOmitedFiles = item => (item.type === "file" && isOmitedFile(item.name))
  ? null: item

const filterOutNull = filter(item => item !== null)
const filterOutUntrackedProjects = filter(compose(not, isUntrackedProject))

const filterOutUntrackedProjectOfTree = (tree) => {
  return assoc("children", filterOutUntrackedProjects(tree.children), tree)
}

const getParsedRoutesTree = (item) => {
  return compose(
    omit(["path"]),
    nullifyOmitedFiles,
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
  getParsedRoutesTree,
  filterOutUntrackedProjectOfTree
)(routesTree)

