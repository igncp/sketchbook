var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' src general list',
  body: [
    c('Built-in synthetic events', [
      d('Clipboard'),
      d('Composition', "'Composition Events provide a means for inputing text in a supplementary or alternate manner than by Keyboard Events, in order to allow the use of characters that might not be commonly available on keyboard.'"),
      d('Drag'),
      d('Focus'),
      d('Input'),
      d('Keyboard'),
      d('Mouse'),
      d('Touch'),
      d('UI'),
      d('Wheel'),
    ]),
    c('Built-in event plugins', [
      d('AnalyticsFactory'),
      d('BeforeInput'),
      d('Change'),
      d('EnterLeave'),
      d('MobileSafariClick'),
      d('Select'),
      d('Simple'),
      d('Tap'),
    ])
  ]
});
