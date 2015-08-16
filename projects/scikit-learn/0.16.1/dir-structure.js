var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' dir structure',
  body: [
    c("doc", [
      d("developers"),
      d("images"),
      c("modules", [
        d("glm_data"),
      ]),
      d("templates"),
      d("datasets"),
      c("themes", [
        c("scikit-learn", [
          c("static", [
            d("js"),
            d("css"),
            d("img"),
          ]),
        ]),
      ]),
      c("sphinxext", [
        d("numpy_ext"),
      ]),
      c("tutorial", [
        d("basic"),
        d("common_includes"),
        d("statistical_inference"),
        d("machine_learning_map"),
        c("text_analytics", [
          d("solutions"),
          d("skeletons"),
          c("data", [
            d("languages"),
            d("movie_reviews"),
            d("twenty_newsgroups"),
          ]),
        ]),
      ]),
      c("testimonials", [
        d("images"),
      ]),
      d("logos"),
      d("includes"),
    ]),
    c("sklearn", [
      c("gaussian_process", [
        d("tests"),
      ]),
      c("preprocessing", [
        d("tests"),
      ]),
      d("tests"),
      c("manifold", [
        d("tests"),
      ]),
      c("mixture", [
        d("tests"),
      ]),
      c("decomposition", [
        d("tests"),
      ]),
      c("covariance", [
        d("tests"),
      ]),
      c("semi_supervised", [
        d("tests"),
      ]),
      c("cross_decomposition", [
        d("tests"),
      ]),
      c("neural_network", [
        d("tests"),
      ]),
      c("utils", [
        d("tests"),
        c("sparsetools", [
          d("tests"),
        ]),
        d("src"),
      ]),
      c("linear_model", [
        d("tests"),
      ]),
      c("feature_extraction", [
        d("tests"),
      ]),
      c("cluster", [
        d("tests"),
      ]),
      c("tree", [
        d("tests"),
      ]),
      c("metrics", [
        d("tests"),
        c("cluster", [
          d("tests"),
        ]),
      ]),
      c("datasets", [
        d("images"),
        c("tests", [
          d("data"),
        ]),
        d("descr"),
        d("data"),
      ]),
      c("svm", [
        d("tests"),
        c("src", [
          d("libsvm"),
          d("liblinear"),
        ]),
      ]),
      c("ensemble", [
        d("tests"),
      ]),
      c("feature_selection", [
        d("tests"),
      ]),
      c("src", [
        d("cblas"),
      ]),
      c("neighbors", [
        d("tests"),
      ]),
      d("__check_build"),
      c("externals", [
        d("joblib"),
      ]),
    ]),
    c("continuous_integration", [
      d("appveyor"),
      d("windows"),
    ]),
    d("benchmarks"),
    c("examples", [
      d("gaussian_process"),
      d("text"),
      d("bicluster"),
      d("preprocessing"),
      d("exercises"),
      d("classification"),
      d("manifold"),
      d("neural_networks"),
      d("mixture"),
      d("decomposition"),
      d("model_selection"),
      d("covariance"),
      d("semi_supervised"),
      d("cross_decomposition"),
      d("calibration"),
      d("linear_model"),
      d("cluster"),
      d("tree"),
      d("datasets"),
      d("svm"),
      d("ensemble"),
      d("feature_selection"),
      d("applications"),
      d("neighbors"),
    ]),
  ]
});
