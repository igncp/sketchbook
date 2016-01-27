var nlc = diagrams.layer.newLayerConnectedToNext,
  nl = diagrams.layer.newLayer;

diagrams.layer(nlc("New syntax basic components", 'sna', [
  nl("Parser", [
    nlc("input"),
    nlc("parse"),
    nlc("node tree"),
  ]),
  nl("Stringifier", [
    nlc("node tree"),
    nlc("stringifier"),
    nlc("output"),
  ]),
]));
