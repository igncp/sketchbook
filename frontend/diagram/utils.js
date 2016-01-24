import { addIndex, forEach, head } from "ramda"

export const each = addIndex(forEach)

const _loadScriptOfUrl = (url, success = () => null) => {
  jQuery.ajax({
    async: true,
    dataType: "script",
    success,
    url,
  }).fail((jqXHR, textStatus, errorThrown) => {
    console.warn(errorThrown)
  })
}

export const loadScriptsInSeries = (paths) => {
  if (paths.length === 0) _loadScriptOfUrl(sketchbook.diagramPath)
  else {
    _loadScriptOfUrl(head(paths), () => {
      loadScriptsInSeries(paths.slice(1, paths.length))
    })
  }
}

export default {
  loadScriptsInSeries,
}
