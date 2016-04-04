/* eslint max-len:0 */

import fs from "fs"
import { exec } from "child_process"
import { promise } from "when"

const execute = (command) => {
  return promise((resolve) => {
    exec(command, (error, stdout) => resolve(stdout))
  })
}

const getHtml = (scriptSrc, linkHref, indexFile) => `
<!-- THIS FILE IS GENERATED AUTOMATICALLY -->
<html>
<head>
    <meta charset="UTF-8">
    <title>Sketchbook</title>
    <script src="${scriptSrc}"></script>
    <link rel="stylesheet" href="${linkHref}">
</head>
<body>
    <script src="dist/${indexFile}"></script>
</body>
</html>
`

const getDevHtml = () => {
  return getHtml(
    "/dist/diagrams-collection/dist/diagrams.min.js",
    "/dist/diagrams-collection/dist/diagrams.css",
    "index.js"
  )
}

const getIndexHtml = (sha) => {
  return getHtml(
    `https://bowercdn.net/c/diagrams-collection-${sha}/dist/diagrams.min.js`,
    `https://bowercdn.net/c/diagrams-collection-${sha}/dist/diagrams.css`,
    "index.min.js"
  )
}

execute("cd ../diagrams-collection/ && git rev-parse HEAD")
  .then((stdout) => {
    const sha = stdout.trim()

    fs.writeFileSync(`${__dirname}/../../index.html`, getIndexHtml(sha))
    fs.writeFileSync(`${__dirname}/../../dev.html`, getDevHtml())
  })

