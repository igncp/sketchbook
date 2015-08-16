var d = diagrams.box.generateDefinition,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    d('@@functional/placeholder', "If set to true, this argument is not counted when currying"),
    d('@@transducer/init', "One of the three expected properties of a transformer"),
    d('@@transducer/result', "One of the three expected properties of a transformer"),
    d('@@transducer/step', "Truly only required property in _isTransformer"),
    d('arity', "the arity of a function or operation is the number of arguments or operands the function or operation accepts. The arity of a relation (or predicate) is the dimension of the domain in the corresponding Cartesian product. (A function of arity n thus has arity n+1 considered as a relation.) The term springs from words like unary, binary, ternary, etc. Unary functions or predicates may be also called 'monadic'; similarly, binary functions may be called 'dyadic'."),
    d('functor', 'A function passed in the array argument (the last) with [methodname] (depending on the function it is passed as argument to), it will execute that  function'),
    d('pick function', 'all / any'),
    d('_stepCat'),
    d('transformer',"A transformer is an an object that provides a 2-arity reducing iterator function, step, 0-arity initial value function, init, and 1-arity result extraction function, result."),
    d('transducer'),
    d('xf', 'refers to a transducer function. A transducer is a function that accepts a transformer and returns a transformer and can be composed directly.'),
  ]
});