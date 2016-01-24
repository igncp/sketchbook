var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' typescript td.',
  body: [
    c("lib", [
      c("at-rule.es6", [
        "_params: string",
        "afterName: string",
        "append(...children: any[]): Container",
        "prepend(...children: any[]): Container",
        "toJSON(): postcss.JsonAtRule",
        d("clone(overrides?: Object): AtRule", "@param overrides New properties to override in the clone. @returns A clone of this node. The node and its (cloned) children will have a clean parent and code style properties."),
        d("constructor(defaults?: postcss.AtRuleNewProps)", "Represents an at-rule. If it's followed in the CSS by a {} block, this node will have a nodes property representing its children."),
        d("name: string", "The identifier that immediately follows the @."),
        d("params: string", "These are the values that follow the at-rule's name, but precede any {} block. The spec refers to this area as the at-rule's \"prelude\"."),
        d("raws: postcss.AtRuleRaws", "Contains information to generate byte-to-byte equal node string as itwas in origin input."),
        d("type: string", "Returns a string representing the node's type. Possible values are root, atrule, rule, decl or comment."),
      ]),
      c("comment.es6", [
        "left: string",
        "right: string",
        "toJSON(): postcss.JsonComment",
        d("clone(overrides?: Object): any", "@param overrides New properties to override in the clone. @returns A clone of this node. The node and its (cloned) children will have a clean parent and code style properties."),
        d("constructor(defaults?: postcss.CommentNewProps)", "Represents a comment between declarations or statements (rule and at-rules). Comments inside selectors, at-rule parameters, or declaration values will be stored in the Node#raws properties."),
        d("text: string", "The comment's text."),
        d("type: string", "Returns a string representing the node's type. Possible values are root, atrule, rule, decl or comment."),
      ]),
      c("container.es6", [
        "private indexes",
        d("nodes: Node[]", "Contains the container's children."),
        d("clone(overrides?: Object): any", "@param overrides New properties to override in the clone. @returns A clone of this node. The node and its (cloned) children will have a clean parent and code style properties."),
        "toJSON(): postcss.JsonContainer",
        "push(child: any): Container",
        d("each(callback: (node: Node, index: number) => any): boolean | void", "Iterates through the container's immediate children, calling the callback function for each child. If you need to recursively iterate through all the container's descendant nodes, use container.walk(). Unlike the for {} -cycle or Array#forEach() this iterator is safe if you are mutating the array of child nodes during iteration. @param callback Iterator. Returning false will break iteration. Safe if you are mutating the array of child nodes during iteration. PostCSS will adjust the current index to match the mutations."),
        d("walk(callback: (node: Node, index: number) => any): boolean | void", "Traverses the container's descendant nodes, calling `callback` for each node. Like container.each(), this method is safe to use if you are mutating arrays during iteration. If you only need to iterate through the container's immediate children, use container.each(). @param callback Iterator."),
        d("walkDecls(propFilter: string | RegExp, callback?: (decl: postcss.Declaration, index: number) => any): boolean | void", "Traverses the container's descendant nodes, calling `callback` for each declaration. Like container.each(), this method is safe to use if you are mutating arrays during iteration. @param propFilter Filters declarations by property name. Only those declarations whose property matches propFilter will be iterated over. @param callback Called for each declaration node within the container."),
        "walkDecls(callback: (decl: postcss.Declaration, index: number) => any): boolean | void",
        d("walkRules(selectorFilter: string | RegExp, callback: (atRule: Rule, index: number) => any): boolean | void", "Traverses the container's descendant nodes, calling `callback` for each rule. Like container.each(), this method is safe to use if you are mutating arrays during iteration. @param selectorFilter Filters rules by selector. If provided, iteration will only happen over rules that have matching names. @param callback Iterator called for each rule node within the container."),
        "walkRules(callback: (atRule: Rule, index: number) => any): boolean | void",
        d("walkAtRules(nameFilter: string | RegExp, callback: (atRule: AtRule, index: number) => any): boolean | void", "Traverses the container's descendant nodes, calling `callback` for each at-rule. Like container.each(), this method is safe to use if you are mutating arrays during iteration. @param nameFilter Filters at-rules by name. If provided, iteration will only happen over at-rules that have matching names. @param callback Iterator called for each at-rule node within the container."),
        "walkAtRules(callback: (atRule: AtRule, index: number) => any): boolean | void",
        d("walkComments(callback: (comment: Comment, indexed: number) => any): void | boolean", "Traverses the container's descendant nodes, calling `callback` for each commennt. Like container.each(), this method is safe to use if you are mutating arrays during iteration. @param callback Iterator called for each comment node within the container."),
        d("append(...nodes: (Node | Object | string)[]): Container", "Inserts new nodes to the end of the container. Because each node class is identifiable by unique properties, use the following shortcuts to create nodes in insert methods:     root.append({ name: '@charset', params: '\"UTF-8\"' }); // at-rule     root.append({ selector: 'a' });                       // rule     rule.append({ prop: 'color', value: 'black' });       // declaration     rule.append({ text: 'Comment' })                      // comment A string containing the CSS of the new element can also be used. This approach is slower than the above shortcuts.     root.append('a {}');     root.first.append('color: black; z-index: 1'); @param nodes New nodes. @returns This container for chaining."),
        d("prepend(...nodes: (Node | Object | string)[]): Container", "Inserts new nodes to the beginning of the container. Because each node class is identifiable by unique properties, use the following shortcuts to create nodes in insert methods:     root.prepend({ name: '@charset', params: '\"UTF-8\"' }); // at-rule     root.prepend({ selector: 'a' });                       // rule     rule.prepend({ prop: 'color', value: 'black' });       // declaration     rule.prepend({ text: 'Comment' })                      // comment A string containing the CSS of the new element can also be used. This approach is slower than the above shortcuts.     root.prepend('a {}');     root.first.prepend('color: black; z-index: 1'); @param nodes New nodes. @returns This container for chaining."),
        "cleanRaws(keepBetween?: boolean): void",
        d("insertBefore(oldNode: Node | number, newNode: Node | Object | string): Container", "Insert newNode before oldNode within the container. @param oldNode Child or child's index. @returns This container for chaining."),
        d("insertAfter(oldNode: Node | number, newNode: Node | Object | string): Container", "Insert newNode after oldNode within the container. @param oldNode Child or child's index. @returns This container for chaining."),
        d("remove(): any", "Removes the container from its parent and cleans the parent property in the container and its children. @returns This container for chaining."),
        d("removeChild(child: Node | number): Container", "Removes child from the container and clean the parent properties from the node and its children. @param child Child or child's index. @returns This container for chaining."),
        d("removeAll(): Container", "Removes all children from the container and cleans their parent properties. @returns This container for chaining."),
        c("replaceValues(pattern: string | RegExp, options: ", "Passes all declaration values within the container that match pattern through the callback, replacing those values with the returned result of callback. This method is useful if you are using a custom unit or function and need to iterate through all values. @param pattern Pattern that we need to replace. @param options Options to speed up the search. @param callbackOrReplaceValue String to replace pattern or callback that will return a new value. The callback will receive the same arguments as those passed to a function parameter of String#replace.", [
          d("props?: string[]", "Property names. The method will only search for values that match regexp  within declarations of listed properties."),
          d("fast?: string", "Used to narrow down values and speed up the regexp search. Searching every single value with a regexp can be slow. If you pass a fast string, PostCSS will first check whether the value contains the fast string; and only if it does will PostCSS check that value against regexp. For example, instead of just checking for /\d+rem/ on all values, set fast: 'rem' to first check whether a value has the rem unit, and only if it does perform the regexp check."),
          "}, callbackOrReplaceValue: string | (substring: string, ...args: any[]): string  }): Container",
        ]),
        "replaceValues(pattern: string | RegExp, callbackOrReplaceValue: string | { (substring: string, ...args: any[]): string }): Container",
        d("every(callback: (node: Node, index: number, nodes: Node[]) => any, thisArg?: any): boolean", "Determines whether the specified callback returns true for any child node. @param callback A function that accepts up to three arguments. The some method calls the callback for each node until the callback returns true, or until the end of the array. @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value, Determines whether all child nodes satisfy the specified test. @param callback A function that accepts up to three arguments. The every method calls the callback function for each node until the callback returns false, or until the end of the array. @returns True if the callback returns true for all of the container's children."),
        d("some(callback: (node: Node, index: number, nodes: Node[]) => boolean, thisArg?: any): boolean", "@returns True if callback returns true for (at least) one of the container's children."),
        d("index(child: Node | number): number", "@param child Child of the current container. @returns The child's index within the container's \"nodes\" array."),
        d("first: Node", "@returns The container's first child."),
        d("last: Node", "@returns The container's last child."),
        "protected normalize(node: Node | string, sample?: Node, type?: string | boolean): Node[]",
        "protected normalize(props: postcss.AtRuleNewProps | postcss.RuleNewProps | postcss.DeclarationNewProps | postcss.CommentNewProps, sample?: Node, type?: string | boolean): Node[]",
        "rebuild(node: Node, parent?: Container): any",
        "eachInside(callback: any): any",
        "eachDecl(propFilter: any, callback?: any): any",
        "eachRule(selectorFilter: any, callback?: any): any",
        "eachAtRule(nameFilter: any, callback?: any): any",
        "eachComment(selectorFilter: any, callback?: any): any",
        "semicolon: boolean",
        "after: string",
      ]),
      c("css-syntax-error.es6", [

      ]),
      c("declaration.es6", [
        "_important: string",
        "_value: string",
        "toJSON(): postcss.JsonDeclaration",
        d("clone(overrides?: Object): any", "@param overrides New properties to override in the clone. @returns A clone of this node. The node and its (cloned) children will have a clean parent and code style properties."),
        d("constructor(defaults?: postcss.DeclarationNewProps)", "Represents a CSS declaration."),
        d("important: boolean", "True if the declaration has an !important annotation."),
        d("prop: string", "The declaration's property name."),
        d("raws: postcss.DeclarationRaws", "Contains information to generate byte-to-byte equal node string as it was in origin input."),
        d("type: string", "Returns a string representing the node's type. Possible values are root, atrule, rule, decl or comment."),
        d("value: string", "The declaration's value. This value will be cleaned of comments. If the source value contained comments, those comments will be available in the _value.raws property. If you have not changed the value, the result of decl.toString() will include the original raws value (comments and all)."),
      ]),
      c("input.es6", [

      ]),
      c("lazy-result.es6", [

      ]),
      c("list.es6", [
        d("function comma(str: string): string[]", "Safely splits comma-separated values (such as those for transition-* and background  properties)."),
        d("function space(str: string): string[]", "Safely splits space-separated values (such as those for background, border-radius and other shorthand properties)."),
      ]),
      c("map-generator.es6", [

      ]),
      c("node.es6", [

      ]),
      c("parse.es6", [

      ]),
      c("parser.es6", [
        "atrule(token: any): void",
        "checkMissedSemicolon(tokens: any): void",
        "colon(tokens: any): number | boolean",
        "comment(token: any): void",
        "constructor(input: Input)",
        "decl(tokens: any): void",
        "doubleColon(token: any): void",
        "emptyRule(token: any): void",
        "end(token: any): void",
        "endFile(): void",
        "init(node: Node, line?: number, column?: number): void",
        "input: Input",
        "loop(): void",
        "pos: number",
        "precheckMissedSemicolon(tokens: any): void",
        "private current",
        "private tokens",
        "raw(node: any, prop: any, tokens: any): void",
        "root: Root",
        "rule(tokens: any): void",
        "semicolon: boolean",
        "spaces: string",
        "spacesFromEnd(tokens: any): string",
        "spacesFromStart(tokens: any): string",
        "stringFrom(tokens: any, from: any): string",
        "tokenize(): void",
        "unclosedBlock(): void",
        "unclosedBracket(bracket: any): void",
        "unexpectedClose(token: any): void",
        "unknownWord(start: any): void",
        "unnamedAtrule(node: any, token: any): void",
        "word(): void",
      ]),
      c("postcss.es6", [

      ]),
      c("previous-map.es6", [
        "annotation: string",
        "constructor(css: any, opts: any)",
        "consumer(): any",
        "decodeInline(text: any): any",
        "file: string",
        "loadAnnotation(css: any): void",
        "loadMap(file: any, prev: any): any",
        "private consumerCache",
        "private inline",
        "root: string",
        "startWith(string: any, start: any): boolean",
        "text: string",
        "withContent(): boolean",
      ]),
      c("processor.es6", [

      ]),
      c("result.es6", [

      ]),
      c("root.es6", [

      ]),
      c("rule.es6", [
        "_selector: string",
        "toJSON(): postcss.JsonRule",
        d("clone(overrides?: Object): Rule", "@param overrides New properties to override in the clone. @returns A clone of this node. The node and its (cloned) children will have a clean parent and code style properties."),
        d("constructor(defaults?: postcss.RuleNewProps)", "Represents a CSS rule: a selector followed by a declaration block."),
        d("raws: postcss.RuleRaws", "Contains information to generate byte-to-byte equal node string as it was in origin input."),
        d("selector: string", "The rule's full selector. If there are multiple comma-separated selectors, the entire group will be included."),
        d("selectors: string[]", "@returns An array containing the rule's individual selectors. Groups of selectors are split at commas."),
        d("type: string", "Returns a string representing the node's type. Possible values are root, atrule, rule, decl or comment."),
      ]),
      c("stringifier.es6", [
        "atrule(node: any, semicolon: any): void",
        "beforeAfter(node: any, detect: any): any",
        "block(node: any, start: any): void",
        "body(node: any): void",
        "builder: Stringifier.Builder",
        "comment(node: any): void",
        "constructor(builder?: Stringifier.Builder)",
        "decl(node: any, semicolon: any): void",
        "raw(node: Node, own: string, detect?: string): any",
        "rawBeforeClose(root: any): any",
        "rawBeforeComment(root: any, node: any): any",
        "rawBeforeDecl(root: any, node: any): any",
        "rawBeforeOpen(root: any): any",
        "rawBeforeRule(root: any): any",
        "rawColon(root: any): any",
        "rawEmptyBody(root: any): any",
        "rawIndent(root: any): any",
        "rawSemicolon(root: any): any",
        "rawValue(node: any, prop: any): any",
        "root(node: any): void",
        "rule(node: any): void",
        "stringify(node: Node, semicolon?: boolean): void",
      ]),
      c("stringify.es6", [

      ]),
      c("tokenize.es6", [

      ]),
      c("vendor.es6", [
        d("function prefix(prop: string): string", "@returns The vendor prefix extracted from the input string."),
        d("function unprefixed(prop: string): string", "@returns The input string stripped of its vendor prefix."),
      ]),
      c("warn-once.es6", [

      ]),
      c("warning.es6", [

      ]),
    ], {notCompleted: true}),
  ]
});
