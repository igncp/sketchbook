var n = diagrams.graph.generateNode,
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  ctd = connectionFnFactory(ct, 'line', 'dotted');

diagrams.graph([
  n("class Compiler", [0, ctd([
    [1, '_reader'],
    [2, '_compilerCache'],
    [3, '_viewResolver'],
    [4, '_componentUrlMapper'],
    [5, '_urlResolver'],
    [6, '_render'],
    [7, '_protoViewFactory'],
    [8, '_protoViewsToBeMerged'],
  ])]),
  n('class DirectiveResolver', 1),
  n('class CompilerCache', 2),
  n('class ViewResolver', 3),
  n('class ComponentUrlMapper', 4),
  n('class UrlResolver', 5),
  n('renderApi.RenderCompiler', 6),
  n('ProtoViewFactory', 7),
  n('AppProtoView', 8),
]);
