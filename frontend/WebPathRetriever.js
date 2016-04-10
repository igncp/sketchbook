import { replace } from "ramda"

export default class WebPathRetriever {
  retrieve() {
    return replace(window.location.origin, "", window.location.href)
  }
}
