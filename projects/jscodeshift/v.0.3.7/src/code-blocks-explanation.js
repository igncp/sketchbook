var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' higher-level code blocks explanation',
  body: [
    c('Collection.js', "This module is all about the creation of the Collection class and its factories, which provide a way to operate with node paths in a hierarchical way with information about their node types", [
      'Requires dependency packages and defines some references to some of their properties (e.g. NodePath, Node)',
      c('Defines the Collection class, which is only used internally', [
        d('at', "'Returns a new collection containing only the element at position index. In case of a negative index, the element is taken from the end: at(0)  - first element; .at(-1) - last element'"),
        d('constructor', 'Saves the paths, the parent and tries to infer the types if they come empty, then it saves the types'),
        d('filter', "'Returns a new collection containing the nodes for which the callback returns true.'"),
        d('forEach', "'Executes callback for each node/path in the collection.'"),
        d('get', "'Proxies to NodePath#get of the **first** path.'"),
        d('getAST', "Return the paths from the root parent of the collection (or the collection's if there are no parents)"),
        d('getTypes', "'Returns the type(s) of the collection. This is only used for unit tests, I don't think other consumers would need it.'"),
        d('isOfType', "'Returns true if this collection has the type 'type'.' It has to have the type at least once."),
        d('map', "'Executes the callback for every path in the collection and returns a new collection from the return values (which must be paths). The callback can return null to indicate to exclude the element from the new collection. If an array is returned, the array will be flattened into the result collection.'"),
        d('nodes', "'Returns an array of AST nodes in this collection.'"),
        d('paths', "Returns the paths of the current collection."),
        d('size', "'Returns the number of elements in this collection.'"),
        d('toSource', "Returns an array with the source code of the paths. If there is only one path, it returns it directly"),
      ]),
      c('Defines private functions', [
        "PF: 'Given a set of paths, this infers the common types of all paths.'",
        "PF: Given value(s) it gets an array of the types names (retrieved by recast's `getSupertypeNames`)"
      ]),
      d('Defines fromPaths', "'Creates a new collection from an array of node paths. If type is passed, it will create a typed collection if such a collection exists. The nodes or path values must be of the same type. Otherwise it will try to infer the type from the path list. If every element has the same type, a typed collection is created (if it exists), otherwise, a generic collection will be created.'"),
      d('Defines fromNodes', "'Creates a new collection from an array of nodes. This is a convenience method which converts the nodes to node paths first and calls'"),
      d('Defines registerMethods', "'This function adds the provided methods to the prototype of the corresponding typed collection. If no type is passed, the methods are added to Collection.prototype and are available for all collections.'"),
      d('Defines setDefaultCollectionType', "'Sets the default collection type. In case a collection is created form an empty set of paths and no type is specified, we return a collection of this type.'"),
      d('Exposes the four methods: fromPaths, fromNodes, registerMethods, setDefaultCollectionType'),
    ]),
    c('Runner.js', "Processes a path files. The logic just focus on getting the list of files and running the Workers in an asynchronous and parallel way, using promises and separate cpus. It also displays statistics but it is not involved in creating the output of the files.", [
      'Packages requirements',
      'Gets the available cpus',
      'Defines the used logger',
      'Defines the inner functions (explained later if necessary)',
      c('Defines the exposed `run` function', [
        'Defines the defaults for the used cpus, files extensions and extra information',
        'Gets all the used files (after filtering) paths as a list',
        'Divides the files in `chunks` of files, one per used cpu',
        'Processes each chunk with a child process, using the ./Worker file.',
        'Once finished, it shows statistics about the transformed files'
      ]),
    ]),
    c('Worker.js', "This file doesn't expose any code, it is intended to be called from a child process. It has the responsibility to apply the transformation to each file and update the status to be displayed in the stats, handle the errors and write the result to a file.", [
      'Packages requirements, including the core',
      'Defines the inner functions (explained later if necessary)',
      c('Loops through each file send to the worker', [
        'Reads and transforms to string the file content',
        'Applies the selected transformer file passing some arguments',
        "Once it has finished the transformation, if the result is equal or empty it emits the status to the root process",
        "If required by the options, it prints the output and it writes the output to a file",
        "If it gets to this point, everything went ok, it emits the ok status to the root process",
      ])
    ]),
    c('core.js', 'This module organizes all the ui exposed for the user. It defines a few utility helpers and the main entry point to convert the source, which requires Collection', [
      'Requires Collection, collections, matchNode, template and external module dependencies',
      "'Register all built-in collections', which are: Node, JSXElement and VariableDeclarator",
      c("Defines the exposed function, named core. 'Main entry point to the tool. The function accepts multiple different kinds of arguments as a convenience. In particular the function accepts either - a string containing source code The string is parsed with Recast - a single AST node - a single node path - an array of nodes - an array of node paths.'", [
        "It returns a collection (list of node paths). It generates it from the Collection module. The two ways of getting them are from paths and from ast nodes, depending of the source."
      ]),
      "Extends core with recast's namedTypes, builders and types",
      "Exposes the Collection registerMethods",
      "Exposes the match (' Utility function to match a node against a pattern.', which returns a boolean) and template ('./template.js') functions",
      "Adds two maps to core, one of collections' filters and other of collections' mappings"
    ]),
    c('template.js', [
      "Requires babel",
      c("Defines the `getPlugin` function, which returns a Plugin factory", [
        "To create the Plugin, and object is passed with this structure: visitor > Identifier > exit [Function]"
      ])
    ], 'not-completed'),
  ]
});
