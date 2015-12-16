var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer;

diagrams.box({
  name: 'react-dnd-html5-backend structure',
  body: [
    c("src", [
      d("BrowserDetector.js"),
      d("EnterLeaveCounter.js"),
      d("HTML5Backend.js"),
      d("MonotonicInterpolant.js"),
      d("NativeDragSources.js"),
      d("NativeTypes.js"),
      d("OffsetUtils.js"),
      d("getEmptyImage.js"),
      d("index.js"),
      d("shallowEqual.js"),
    ]),
  ]
});
