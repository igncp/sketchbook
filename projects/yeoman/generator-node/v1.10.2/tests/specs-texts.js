var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' spec texts',
  body: [
    c("running on new project", [
      "creates files",
      "creates package.json",
      "creates and fill contents in README.md",
    ]),
    c("running on existing project", [
      "extends package.json keys with missing ones",
      "does not overwrite previous README.md",
    ]),
    c("--no-travis", [
      "skip .travis.yml",
    ]),
    c("--no-babel", [
      "skip .bablerc",
      "include the raw files",
    ]),
    c("--projectRoot", [
      "include the raw files",
    ]),

    c("node:boilerplate", [
      "creates boilerplate files",
    ]),

    c("node:boilerplate", [
      "creates boilerplate files in ES2015",
    ]),

    c("node:boilerplate", [
      "creates boilerplate files using another path",
    ]),

    c("node:cli", [
      "creates cli.js",
      "Extends package.json",
      c("--no-babel", [
        "does not use any ES2015 syntax",
      ]),
    ]),

    c("node:cli", [
      "creates cli.js with path option",
      "Extends package.json",
      c("--no-babel and --generate-into", [
        "does not use any ES2015 syntax",
      ]),
    ]),

    c("node:editorconfig", [
      "creates .editorconfig",
    ]),

    c("node:editorconfig", [
      "creates .editorconfig with generate-into option",
    ]),

    c("node:eslint", [
      "fill package.json",
      c("--es2015", [
        "fill package.json for ES2015",
      ]),
      c("--generate-into", [
        "fill env .eslintrc with generate-into option",
      ]),
    ]),

    c("node:git", [
      "creates .gitignore",
      "creates .gitattributes",
      "initialize git repository",
    ]),

    c("node:git", [
      "creates .gitignore with generate-into option",
      "creates .gitattributes with generate-into option",
      "initialize git repository with generate-into option",
    ]),

    c("node:gulp", [
      c("including coveralls", [
        "creates files and configuration",
        "does not include babel configurations",
      ]),
      c("excluding coveralls", [
        "does not include coveralls configurations",
      ]),
      c("--no-coveralls", [
        "does not include coveralls configurations",
      ]),
      c("--babel", [
        "includes babel configuration",
      ]),
      c("--projectRoot", [
        "define a custom root",
      ]),
    ]),

    c("node:gulp", [
      c("including coveralls with generate-into option", [
        "creates files and configuration",
        "does not include babel configurations",
      ]),
      c("excluding coveralls with generate-into option", [
        "does not include coveralls configurations",
      ]),
      c("--no-coveralls and --generate-into", [
        "does not include coveralls configurations",
      ]),
      c("--babel and --generate-into", [
        "includes babel configuration",
      ]),
      c("--projectRoot and --generate-into", [
        "define a custom root",
      ]),
    ]),

    c("node:readme", [
      "creates and fill contents in README.md",
    ]),

    c("node:readme --content", [
      "fill custom contents in README.md",
    ]),

    c("node:readme --no-coveralls", [
      "does not include coveralls badge README.md",
    ]),

    c("node:readme --generate-into", [
      "creates and fill contents in README.md",
    ]),

    c("node:readme --content and --generate-into", [
      "fill custom contents in README.md",
    ]),

    c("node:readme --no-coveralls and --generate-into", [
      "does not include coveralls badge README.md",
    ]),
  ],
});