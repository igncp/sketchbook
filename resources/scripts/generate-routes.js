import fs from "fs"
import {
  ifElse, assoc, compose, map, omit, filter, isEmpty, curry,
  partial, flip, contains, not, identity, always, prop,
} from "ramda"
import { directoryTree } from "directory-tree"

const UNTRACKED_PROJECTS = ["private", "discontinued"]

const isProduction = process.env.NODE_ENV === "production"

const routesTree = directoryTree("./projects")
const isUntrackedProject = compose(flip(contains)(UNTRACKED_PROJECTS), prop("name"))

const getParsedRoutesTreeOfChildren = item => (item.children)
  ? assoc("children", map(getParsedRoutesTree, item.children), item)
  : item

const endsWith = curry((end, str) => str.substr(-end.length) === end)
const isJSFile = endsWith(".js")
const isJSONFile = endsWith(".json")
const isGraphMLFile = endsWith(".graphml")

const isOmitedFile = (fileName) => {
  if (isJSFile(fileName) || isJSONFile(fileName) || isGraphMLFile(fileName)) return false

  return true
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
  ifElse(always(isProduction), filterOutUntrackedProjectOfTree, identity)
)(routesTree)
