var d = diagrams.box.generateDefinition,
  js = diagrams.utils.codeBlockOfLanguageFn('typescript', '//'),
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' bindings types',
  body: [
    d('toValue', "'Binds a key to a value.'" + js("var injector = Injector.resolveAndCreate([\n  bind(String).toValue('Hello')\n]);\nexpect(injector.get(String)).toEqual('Hello');")),
    d('toFactory', "'Binds a key to a function which computes the value.' " + js("var injector = Injector.resolveAndCreate([\n  bind(Number).toFactory(() => { return 1+2; }),\n  bind(String).toFactory((v) => { return \"Value: \" + v; }, [Number])\n]);\nexpect(injector.get(Number)).toEqual(3);\nexpect(injector.get(String)).toEqual('Value: 3');")),
    d('toAlias', "'Binds a key to the alias for an existing key.. An alias means that we will return the same instance as if the alias token was used. (This is in contrast to `toClass` where a separet instance of `toClass` will be returned.)'"),
    d('toClass', "'Binds an interface to an implementation / subclass. `toAlias` and `toClass` are often confused.'"),
  ]
});