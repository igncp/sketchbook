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
    <link href='//fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap-theme.min.css">

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

