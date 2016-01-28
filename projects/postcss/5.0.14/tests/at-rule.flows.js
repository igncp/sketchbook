var nlc = diagrams.layer.newLayerConnectedToNext,
  nlcc = diagrams.layer.newLayerConnectedToNextWithCode('javascript'),
  nlcpc = diagrams.layer.newLayerConnectedToNextWithParagraphAndCode('javascript'),
  jsc = diagrams.utils.codeBlockOfLanguageFn('javascript', '//');
  nl = diagrams.layer.newLayer;

diagrams.layer(nlc("test/at-rule.js", 'sna', [
  nlcc("let rule = new AtRule({ name: 'encoding', params: '\"utf-8\"' })", [
    nlcc("super(defaults); // AtRule -> Container -> Node", [
      nlcc("for ( let name in defaults ) { this[name] = defaults[name]; }"),
    ])
  ]),
  nlcc("rule.toString() // Node#toString", [
    nlcc([
      "if ( stringifier.stringify /* undefined */) stringifier = stringifier.stringify;",
      "let result  = '';",
    ]),
    nlcc([
      "/* stringify = */stringifier(this, i => result += i ); /*stringify(node, builder)*/",
    ], [
      nlcc([
        "let str = new Stringifier(builder);",
        "str.stringify(node);",
      ])
    ]),
    nlcc([
      "return result;",
    ]),
  ])
]));
