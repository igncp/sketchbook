import { url } from "../common/helpers"

export default {
  "Box basic"(client) {
    client
      .url(`${url}/`)
      .waitForElementVisible("body", 1000)

    client.end()
  },
}
