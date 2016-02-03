var nlc = diagrams.layer.newLayerConnectedToNext,
  nl = diagrams.layer.newLayer;

diagrams.layer(nlc("parse and stringify functions overview", [
  nl("parse", 'sn',[
    nlc("Validation of the params"),
    nlc("Instantiates an input using the params"),
    nlc("Instantiates a parser using the input"),
    nlc("Invokes tokenize() of parser to generate an array of the tokens (parser.tokens)"),
    nlc("Invokes loop() of parser to build the tree from the parser tokens"),
    nlc("Returns the root of the tree"),
  ]),
  nl("stringify", 'sn',[
    nlc("Instantiates a stringifier using the builder function from the params"),
    nlc("Invokes stringify() of the stringifier providing the node from the params", [
      nl("Walks the node branch, invoking the corresponding stringifier method with the node type, and using the builder function")
    ]),
  ])
]));
