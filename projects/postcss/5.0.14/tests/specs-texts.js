var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' spec texts',
  body: [
    c("AtRule", [
    "initializes with properties",
    c("each()", [
      "does not fall on childless at-rule",
    ]),
    c("prepend()", [
      "creates nodes property",
    ]),
    c("append()", [
      "creates nodes property",
    ]),
    c("toString()", [
      "inserts default spaces",
      "clone spaces from another at-rule",
    ]),
  ]),

  c("Comment", [
    c("toString()", [
      "inserts default spaces",
      "clones spaces from another comment",
    ]),
  ]),

  c("Container", [
    c("errors", [
      "throws error on declaration without value",
      "throws error on unknown node type",
    ]),
    c("push()", [
      "adds child without checks",
    ]),
    c("each()", [
      "iterates",
      "iterates with prepend",
      "iterates with prepend insertBefore",
      "iterates with append insertBefore",
      "iterates with prepend insertAfter",
      "iterates with append insertAfter",
      "iterates with remove",
      "breaks iteration",
      "allows to change children",
    ]),
    c("walk()", [
      "iterates",
      "breaks iteration",
    ]),
    c("walkDecls()", [
      "iterates",
      "iterates with changes",
      "breaks iteration",
      "filters declarations by property name",
      "breaks declarations filter by name",
      "filters declarations by property regexp",
      "breaks declarations filters by regexp",
    ]),
    c("walkComments()", [
      "iterates",
      "iterates with changes",
      "breaks iteration",
    ]),
    c("walkRules()", [
      "iterates",
      "iterates with changes",
      "breaks iteration",
      "filters by selector",
      "breaks selector filters",
      "filters by regexp",
      "breaks selector regexp",
    ]),
    c("walkAtRules()", [
      "iterates",
      "iterates with changes",
      "breaks iteration",
      "filters at-rules by name",
      "breaks name filter",
      "filters at-rules by name regexp",
      "breaks regexp filter",
    ]),
    c("append()", [
      "appends child",
      "appends multiple children",
      "has declaration shortcut",
      "has rule shortcut",
      "has at-rule shortcut",
      "has comment shortcut",
      "receives root",
      "reveives string",
      "receives array",
      "clones node on insert",
    ]),
    c("prepend()", [
      "prepends child",
      "prepends multiple children",
      "receive hash instead of declaration",
      "receives root",
      "receives root",
      "receives array",
      "works on empty container",
    ]),
    c("insertBefore()", [
      "inserts child",
      "works with nodes too",
      "receive hash instead of declaration",
      "receives array",
    ]),
    c("insertAfter()", [
      "inserts child",
      "works with nodes too",
      "receive hash instead of declaration",
      "receives array",
    ]),
    c("removeChild()", [
      "removes by index",
      "removes by node",
      "cleans parent in removed node",
    ]),
    c("removeAll()", [
      "removes all children",
    ]),
    c("replaceValues()", [
      "replaces strings",
      "replaces regpexp",
      "filters properties",
      "uses fast check",
    ]),
    c("any()", [
      "return true if all children return true",
    ]),
    c("some()", [
      "return true if all children return true",
    ]),
    c("index()", [
      "returns child index",
      "returns argument if it(is number",
    ]),
    c("first", [
      "returns first child",
    ]),
    c("last", [
      "returns last child",
    ]),
    c("normalize()", [
      "does not normalize new children with exists before",
    ]),
  ]),

  c("CssSyntaxError", [
    "saves source",
    "has stack trace",
    "highlights broken line",
    "highlights without colors on request",
    "prints with highlight",
    "misses highlights without source content",
    "misses position without source",
    "uses source map",
    "shows origin source",
    "does not uses wrong source map",
    "set source plugin",
    "set source plugin automatically",
    "set plugin automatically in async",
  ]),

  c("Declaration", [
    "initializes with properties",
    c("important", [
      "returns boolean",
    ]),
    c("toString()", [
      "inserts default spaces",
      "clones spaces from another declaration",
    ]),
  ]),

  c("LazyResult", [
    c("root", [
      "contains AST",
    ]),
    c("css", [
      "will be stringified",
      "stringifies",
    ]),
    c("content", [
      "is alias for css",
    ]),
    c("map", [
      "exists only if necessary",
    ]),
    c("opts", [
      "contains AST",
    ]),
    c("warnings()", [
      "contains warnings",
    ]),
    c("messages", [
      "contains messages",
    ]),
  ]),

  c("list", [
    c(".space()", [
      "splits list by spaces",
      "trims values",
      "checks quotes",
      "checks functions",
      "works from variable",
    ]),
    c(".comma()", [
      "splits list by spaces",
      "adds last empty",
      "checks quotes",
      "checks functions",
      "works from variable",
    ]),
  ]),

  c("source maps", [
    "adds map field only on request",
    "return map generator",
    "generate right source map",
    "changes previous source map",
    "adds source map annotation",
    "misses source map annotation, if user ask",
    "misses source map annotation, if previous map missed it",
    "uses user path in annotation, relative to options.to",
    "generates inline map",
    "generates inline map by default",
    "generates separated map if previous map was not inlined",
    "generates separated map on annotation option",
    "allows change map type",
    "misses check files on requires",
    "works in subdirs",
    "uses map from subdir",
    "uses map from subdir if it inlined",
    "uses map from subdir if it written as a file",
    "works with different types of maps",
    "sets source content by default",
    "misses source content on request",
    "misses source content if previous not have",
    "misses source content on request",
    "detects input file name from map",
    "works without file names",
    "supports UTF-8",
    "generates map for node created manually",
    "uses input file name as output file name",
    "uses to.css as default output name",
    "supports annotation comment in any place",
    "does not update annotation on request",
    "clears source map",
    "uses Windows line separation too",
  ]),

  c("Node", [
    c("error()", [
      "generates custom error",
      "generates custom error for nodes without source",
      "highlights index",
      "highlights word",
      "highlights word in multiline string",
    ]),
    c("warn()", [
      "attaches a warning to the result object",
    ]),
    c("remove()", [
      "removes node from parent",
    ]),
    c("replaceWith()", [
      "inserts new node",
      "inserts new root",
      "replaces node",
    ]),
    c("toString", [
      "accepts custom stringifier",
      "accepts custom syntax",
    ]),
    c("clone()", [
      "clones nodes",
      "overrides properties",
      "cleans code style",
    ]),
    c("cloneBefore()", [
      "clones and insert before current node",
    ]),
    c("cloneAfter()", [
      "clones and insert after current node",
    ]),
    c("next()", [
      "returns next node",
    ]),
    c("prev()", [
      "returns previous node",
    ]),
    c("moveTo()", [
      "moves node between roots",
      "moves node inside one root",
    ]),
    c("moveBefore()", [
      "moves node between roots",
      "moves node inside one root",
    ]),
    c("moveAfter()", [
      "moves node between roots",
      "moves node inside one root",
    ]),
    c("toJSON()", [
      "cleans parents inside",
      "converts custom properties",
    ]),
    c("raw()", [
      "has shortcut to stringifier",
    ]),
    c("root()", [
      "returns root",
      "returns parent of parents",
      "returns self on root",
    ]),
    c("cleanRaws()", [
      "cleans style recursivelly",
      "keeps between on request",
    ]),
    c("positionInside()", [
      "returns correct position when node starts mid-line",
      "returns correct position when node.before contains newline",
      "returns correct position when node contains newlines",
    ]),
  ]),

  c("postcss.parse()", [
    "works with file reads",
    "parses atrule-decls.css",
    "parses atrule-empty.css",
    "parses atrule-no-params.css",
    "parses atrule-no-semicolon.css",
    "parses atrule-no-space.css",
    "parses atrule-params.css",
    "parses atrule-rules.css",
    "parses bom.css",
    "parses colon-selector.css",
    "parses comments.css",
    "parses decls.css",
    "parses empty.css",
    "parses escape.css",
    "parses extends.css",
    "parses function.css",
    "parses ie-progid.css",
    "parses important.css",
    "parses inside.css",
    "parses no-selector.css",
    "parses prop.css",
    "parses quotes.css",
    "parses raw-decl.css",
    "parses rule-at.css",
    "parses rule-no-semicolon.css",
    "parses selector.css",
    "parses semicolons.css",
    "parses spaces.css",
    "parses tab.css",
    "saves source file",
    "saves source file on previous map",
    "sets unique ID for file without name",
    "sets parent node",
    "ignores wrong close bracket",
    "ignores symbols before declaration",
    c("errors", [
      "throws on unclosed blocks",
      "throws on unnecessary block close",
      "throws on unclosed comment",
      "throws on unclosed quote",
      "throws on unclosed bracket",
      "throws on property without value",
      "throws on nameless at-rule",
      "throws on property without semicolon",
      "throws on double colon",
    ]),
  ]),

  c("postcss()", [
    "creates plugins list",
    "saves plugins list",
    "saves plugins list as array",
    "takes plugin from other processor",
    "supports injecting additional processors at runtime",
    c(".plugin()", [
      "creates plugin",
      "creates a shortcut to process css",
    ]),
    c(".parse()", [
      "contains parser",
    ]),
    c(".stringify()", [
      "contains stringifier",
    ]),
    c(".root()", [
      "allows to build own CSS",
    ]),
    c(".vendor", [
      "contains vendor module",
    ]),
    c(".list", [
      "contains list module",
    ]),
  ]),

  c("PreviousMap", [
    "misses property if no map",
    "creates property if map present",
    "returns consumer",
    "sets annotation property",
    "checks previous sources content",
    "decodes base64 maps",
    "decodes base64 UTF-8 maps",
    "decodes URI maps",
    "removes map on request",
    "raises on unknown inline encoding",
    "raises on unknown map format",
    "reads map from annotation",
    "sets uniq name for inline map",
    "should accept an empty mappings string",
  ]),

  c("Processor", [
    c("use()", [
      "adds new plugins",
      "adds new plugin by object",
      "adds new plugin by object-function",
      "adds new processors of another postcss instance",
      "adds new processors from object",
      "returns itself",
      "throws on wrong format",
    ]),
    c("process()", [
      "processes CSS",
      "processes parsed AST",
      "processes previous result",
      "takes maps from previous result",
      "inlines maps from previous result",
      "throws with file name",
      "allows to replace Root",
      "returns LazyResult object",
      "calls all plugins once",
      "parses, converts and stringifies CSS",
      "send result to plugins",
      "accepts source map from PostCSS",
      "supports async plugins",
      "works async without plugins",
      "runs async plugin only once",
      "supports async errors",
      "supports sync errors in async mode",
      "throws parse error in async",
      "throws error on sync method to async plugin",
      "throws a sync call in async running",
      "checks plugin compatibility",
      "sets last plugin to result",
      "uses custom parsers",
      "uses custom parsers from object",
      "uses custom stringifier",
      "uses custom stringifier from object",
      "uses custom stringifier with source maps",
      "uses custom syntax",
    ]),
    c("version", [
      "contains PostCSS version",
    ]),
  ]),

  c("Result", [
    c("toString()", [
      "stringifies",
    ]),
    c("warn()", [
      "adds warning",
      "allows to override plugin",
      "allows Root",
    ]),
    c("warnings()", [
      "returns only warnings",
    ]),
  ]),

  c("Root", [
    c("prepend()", [
      "fixes spaces on insert before first",
      "fixes spaces on multiple inserts before first",
      "uses default spaces on only first",
    ]),
    c("append()", [
      "sets new line between rules in multiline files",
      "sets new line between rules on last newline",
      "saves compressed style",
      "saves compressed style with multiple nodes",
    ]),
    c("insertAfter()", [
      "does not use before of first rule",
    ]),
    c("remove()", [
      "fixes spaces on removing first rule",
    ]),
    c("toResult()", [
      "generates result with map",
    ]),
  ]),

  c("Rule", [
    "initializes with properties",
    c("selectors", [
      "returns array",
      "trims selectors",
      "is smart about commas",
      "receive array",
      "saves separator",
      "uses between to detect separator",
      "uses space in separator be default",
      "works in constructor",
    ]),
    c("toString()", [
      "inserts default spaces",
      "clones spaces from another rule",
      "uses different spaces for empty rules",
    ]),
  ]),

  c("stringifier", [
    c("rawValue()", [
      "creates trimmed/raw property",
      "works without magic",
    ]),
    c("raw()", [
      "uses node raw",
      "hacks before for nodes without parent",
      "hacks before for first node",
      "hacks before for first decl",
      "detects after raw",
      "uses defaults without parent",
      "uses defaults for unique node",
      "clones raw from first node",
      "indents by default",
      "clones style",
      "clones indent",
      "clones declaration before for comment",
      "clones indent by types",
      "clones indent by before and after",
      "clones semicolon only from rules with children",
      "clones only spaces in before",
      "clones only spaces in between",
    ]),
  ]),

  c("stringify", [
    "stringifies atrule-decls.css",
    "stringifies atrule-empty.css",
    "stringifies atrule-no-params.css",
    "stringifies atrule-no-semicolon.css",
    "stringifies atrule-no-space.css",
    "stringifies atrule-params.css",
    "stringifies atrule-rules.css",
    "stringifies colon-selector.css",
    "stringifies comments.css",
    "stringifies decls.css",
    "stringifies empty.css",
    "stringifies escape.css",
    "stringifies extends.css",
    "stringifies function.css",
    "stringifies ie-progid.css",
    "stringifies important.css",
    "stringifies inside.css",
    "stringifies no-selector.css",
    "stringifies prop.css",
    "stringifies quotes.css",
    "stringifies raw-decl.css",
    "stringifies rule-at.css",
    "stringifies rule-no-semicolon.css",
    "stringifies selector.css",
    "stringifies semicolons.css",
    "stringifies spaces.css",
    "stringifies tab.css",
  ]),

  c("tokenize", [
    "tokenizes empty file",
    "tokenizes space",
    "tokenizes word",
    "splits word by !",
    "changes lines in spaces",
    "tokenizes control chars",
    "escapes control symbols",
    "escapes backslash",
    "tokenizes simple brackets",
    "tokenizes complicated brackets",
    "tokenizes string",
    "tokenizes escaped string",
    "tokenizes at-word",
    "tokenizes at-word end",
    "tokenizes urls",
    "tokenizes quoted urls",
    "tokenizes at-symbol",
    "tokenizes comment",
    "changes lines in comments",
    "tokenizes CSS",
    "throws error on unclosed string",
    "throws error on unclosed comment",
    "throws error on unclosed url",
  ]),

  c("vendor", [
    c(".prefix()", [
      "returns prefix",
    ]),
    c(".unprefixed()", [
      "returns unprefixed version",
    ]),
  ]),

  c("Warning", [
    c("toString()", [
      "outputs simple warning",
      "outputs warning with plugin",
      "outputs warning with position",
      "outputs warning with plugin and node",
      "outputs warning with index",
      "outputs warning with word",
      "generates warning without source",
    ]),
    c("line, column", [
      "is undefined by default",
      "gets position from node",
      "gets position from word",
      "gets position from index",
    ]),
  ]),
  ],
});
