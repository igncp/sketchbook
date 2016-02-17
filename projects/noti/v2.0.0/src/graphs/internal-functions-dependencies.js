var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Internal functions dependencies"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("noti#main", [0, 1, 2, 3, 4, 5], "/noti.go"),
  n("noti#runUtility", [1], "/noti.go"),
  n("notifiers_[linuxfreebsd|osx]#bannerNotify", [2], "/notifiers_[linuxfreebsd|osx].go"),
  n("notifiers_[linuxfreebsd|osx]#speechNotify", [3], "/notifiers_[linuxfreebsd|osx].go"),
  n("notifiers#pushbulletNotify", [4], "/notifiers.go"),
  n("notifiers#slackNotify", [5], "/notifiers.go"),
], config);
