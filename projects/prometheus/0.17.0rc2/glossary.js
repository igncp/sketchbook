var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
    ]),
    c('General', [
      d("FNV-1A 64-bits", "'Fowler-Noll-Vo is a non-cryptographic hash function [...] One of FNV's key advantages is that it is very simple to implement.'"),
      d("model.Fingerprint", "'Fingerprint provides a hash-capable representation of a Metric. For our purposes, FNV-1A 64-bit is used.'"),
      d("model.LabelSet", "map[LabelName]LabelValue 'A LabelSet is a collection of LabelName and LabelValue pairs. The LabelSet may be fully-qualified down to the point where it may resolve to a single Metric in the data store or not. All operations that occur within the realm of a LabelSet can emit a vector of Metric entities to which the LabelSet may match.'"),
      d("model.Metric", "'A Metric is similar to a LabelSet, but the key difference is that a Metric is a singleton and refers to one and only one stream of samples.'"),
      d("model.Sample", "'pair associated with a metric.'"),
      d("model.SampleValue", "type SampleValue float64 'A SampleValue is a representation of a value for a given sample at a given time.'"),
      d("model.Vector", "'Vector is basically only an alias for Samples, but the contract is that in a Vector, all Samples have the same timestamp.'"),
    ]),
    c('Structured', [
    ]),
  ],
});
