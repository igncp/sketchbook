import fs from "fs"
import { exec } from "child_process"
import { append } from "ramda"
import { promise } from "when"

const execute = (command) => {
  return promise((resolve) => {
    exec(command, (error, stdout) => resolve(stdout))
  })
}

execute("find frontend -name *.ts")
  .then((stdout) => {
    const someFiles = stdout.split("\n").slice(0, -1)
    const files = append("typings/main.d.ts", someFiles)
    const config = { files }

    fs.writeFileSync(`${__dirname}/../../tsconfig.json`, JSON.stringify(config, null, 2))
  })
