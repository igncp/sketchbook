var n = diagrams.graph.generateNode,
  nl = diagrams.graph.generateNodeWithTextAsTargetLink('./api-overview'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');

diagrams.graph([
  nl("learning_curve", [1, ct(1024, 'X, y = indexable(X, y)')], "/learning_curve.py<br>learning_curve(estimator, X, y, train_sizes, cv, scoring, exploit_incremental_learning, n_jobs, pre_dispatch, verbose)"),
  nl("_translate_train_sizes", [2], "/learning_curve.py<br>_translate_train_sizes(train_sizes, n_max_training_samples)"),
  nl("_incremental_fit_estimator", [3], "/learning_curve.py<br>_incremental_fit_estimator(estimator, X, y, classes, train, test, train_sizes, scorer, verbose)"),
  nl("validation_curve", [4], "/learning_curve.py<br>validation_curve(estimator, X, y, param_name, param_range, cv, scoring, n_jobs, pre_dispatch, verbose)"),
  nl("check_cv", [36, cti(1, 'check_cv(cv, X, y, classifier=is_classifier(estimator))')], "/cross_validation.py<br>check_cv(cv, X, y, classifier)"),
  nl("indexable", [1024], "/utils/validation.py<br>indexable()"),
  nl("check_scoring", [1943, cti(1, 'scorer = check_scoring(estimator, scoring=scoring)')], "/metrics/scorer.py<br>check_scoring(estimator, scoring, allow_none)"),
]);
