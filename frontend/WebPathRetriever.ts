import { replace } from "ramda"
import {WebPathRetriever as dWebPathRetriever} from "frontend"

export default class WebPathRetriever implements dWebPathRetriever {
  retrieve(): string {
    return replace(window.location.origin, "", window.location.href)
  }
}
