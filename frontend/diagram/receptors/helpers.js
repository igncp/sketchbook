import d3, { select } from "d3"
import { forEach, isArrayLike, pluck } from "ramda"

import { each } from "../utils"

const getSelectorPrefix = (receptorPrefix) => `diagrams-${receptorPrefix}`
const getGeneralAndReceptorClasses = (prefix, suffix) => {
  const generalPrefix = getSelectorPrefix("general-receptor")

  return `${generalPrefix}-${suffix} ${prefix}-${suffix}`
}
const gGARC = getGeneralAndReceptorClasses

const getBreadcrumbHtml = ({ prefix, relatedItems }) => {
  let breadcrumbHtml = ``

  if (relatedItems.dependencies) each((dependency, index) => {
    const suffix = (index !== relatedItems.dependencies.length - 1)
      ? ` &nbsp;<strong class="${gGARC(prefix, "breadcrumb-level-separator")}">`
        + `&gt;&gt;&gt;</strong>&nbsp; ` : ``

    breadcrumbHtml += ` <strong class="${gGARC(prefix, "breadcrumb-level-number")}">`
      + `[${index + 1}]</strong> ${dependency.data.name || dependency.data.text}${suffix}`
  })(relatedItems.dependencies.reverse())

  return breadcrumbHtml
}

const getNextSiblingIntro = (nextSibling) => getIntro(nextSibling.data.fullText)

const getFirstDependantIntro = (item) => {
  return getIntro(item.data.relationships.dependants[0].data.fullText)
}

const getIntro = function(fullText) {
  const removeTags = function(text, tag) {
    const replaceText = function(regexp) {
      text = text.replace(new RegExp(regexp, `ig`), ``)
    }

    if (isArrayLike(tag)) forEach((tagItem) => {
      text = removeTags(text, tagItem)
    })(tag)
    else {
      replaceText(`<${tag}>`)
      replaceText(`</${tag}>`)
    }

    return text
  }
  const intro = `<i>${removeTags(fullText, [`strong`, `p`, `br`])}</i>`

  return (intro.length > 20) ? `${intro.substr(0, 20)}...` : intro
}

const getSiblingsAndNextSibling = function(item) {
  const rv = {}

  if (item.data.relationships && item.data.relationships.dependencies.length > 0) {
    rv.siblings = []

    forEach((dependency) => {
      rv.siblings = dependency.data.relationships
        ? rv.siblings.concat(dependency.data.relationships.dependants) : rv.siblings
    })(item.data.relationships.dependencies)

    if (rv.siblings.length === 1) rv.siblings = null
    else {
      const siblingDatas = pluck("data")(rv.siblings)
      const siblingsFullTexts = pluck("fullText")(siblingDatas)
      // indexOf of the object is not detecting it
      const itemInSiblings = siblingsFullTexts.indexOf(item.data.fullText)

      if (itemInSiblings < (rv.siblings.length - 1)) {
        rv.nextSibling = rv.siblings[itemInSiblings + 1]
      } else rv.nextSibling = rv.siblings[0]
    }
  }

  return rv
}

const getRelatedItems = ({ diagram, item }) => {
  return item.data.relationships ? diagram.getAllRelatedItemsOfItem(item.data) : []
}

const DIAGRAMS_WITHOUT_BREADCRUMB = ["graph"]

export const getFillHtmlOfItem = ({ diagram, item, receptorPrefix }) => {
  const content = item.data.fullText
  const prefix = getSelectorPrefix(receptorPrefix)
  const relatedItems = getRelatedItems({ diagram, item })
  const { nextSibling, siblings } = getSiblingsAndNextSibling(item)
  let fillHtml = ""

  if (DIAGRAMS_WITHOUT_BREADCRUMB.indexOf(diagram.name) < 0) {
    fillHtml += `<div class="${gGARC(prefix, "breadcrumb")}">`
    fillHtml += `${getBreadcrumbHtml({ prefix, relatedItems })}</div>`
  }
  fillHtml += diagrams.utils.formatTextFragment(content)
  fillHtml += `<div class="${gGARC(prefix, "footer")}">`
  fillHtml += `<strong class="${gGARC(prefix, "footer-scroll")}">Scroll</strong> `

  if (siblings) {
    fillHtml += `| <strong class="${gGARC(prefix, "footer-siblings")}">`
      + `Show next sibling (of a total of `
      + `${siblings.length}): ${getNextSiblingIntro(nextSibling)}</strong> `
  }

  if (item.data.relationships && item.data.relationships.dependants.length > 0) {
    fillHtml += `| <strong class="${gGARC(prefix, "footer-dependants")}">`
      + `Show first child (of a total of `
      + `${item.data.relationships.dependants.length}): ${getFirstDependantIntro(item)}</strong> `
  }
  fillHtml += `</div>`

  return fillHtml
}

export const addListenersToContentElLinks = ({
  contentEl, diagram, fillFn, item, receptorPrefix,
}) => {
  const prefix = getSelectorPrefix(receptorPrefix)
  const relatedItems = getRelatedItems({ diagram, item })
  let scrollElTop, currentScroll

  contentEl.select(`.${prefix}-footer-siblings`).on(`click`, () => {
    const { nextSibling } = getSiblingsAndNextSibling(item)

    fillFn(nextSibling, diagram)
  })
  contentEl.select(`.${prefix}-footer-dependants`).on(`click`, () => {
    fillFn(item.data.relationships.dependants[0], diagram)
  })
  if (scrollElTop !== 0) {
    contentEl.select(`.${prefix}-footer-scroll`).on(`click`, () => {
      currentScroll = (window.pageYOffset || document.documentElement.scrollTop)
        - (document.documentElement.clientTop || 0)

      if (d3.event) d3.event.stopPropagation()
      scrollElTop = item.el[0][0].getBoundingClientRect().top
      window.scrollTo(0, scrollElTop + currentScroll)
    })
  }
  each((el, index) => {
    const levelNumberEl = select(el)

    levelNumberEl.on("click", () => {
      fillFn(relatedItems.dependencies[index], diagram)
    })
  })(contentEl.selectAll(`.${prefix}-breadcrumb-level-number`)[0])
}
