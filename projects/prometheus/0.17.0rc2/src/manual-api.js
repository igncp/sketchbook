var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: 'prometheus manual-api',
  body: [
    c("cmd", [
      c("prometheus", [
        d("Main() int", "'Main manages the startup and shutdown lifecycle of the entire Prometheus server.'"),
        c("Reloadable interface", "'Reloadable things can change their internal state to match a new config and handle failure gracefully.'", [
          "ApplyConfig(*config.Config) bool",
        ]),
      ]),
      c("promtool", [
        d("CheckConfigCmd(t cli.Term, args ...string) int", "'CheckConfigCmd validates configuration files.'"),
        d("CheckRulesCmd(t cli.Term, args ...string) int", "'CheckRulesCmd validates rule files.'"),
        d("VersionCmd(t cli.Term, _ ...string) int", "'VersionCmd prints the binaries version information.'"),
      ]),
    ]),
    d("config"),
    d("notification"),
    d("promql"),
    d("retrieval"),
    c("retrieval", [
      d("discovery"),
      c("discovery", [
        d("marathon"),
        d("kubernetes"),
      ]),
    ]),
    c("rules", [
      c("type AlertState int", "AlertState denotes the state of an active alert.", [
        "(s AlertState) String() string",
      ]),

      c("const", [
        d("StateInactive AlertState = iota", "StateInactive is the state of an alert that is neither firing nor pending."),
        d("StatePending", "StatePending is the state of an alert that has been active for less than the configured threshold duration."),
        d("StateFiring", "StateFiring is the state of an alert that has been active for longer than the configured threshold duration."),
      ]),


      c("type Alert struct", "Alert is the user-level representation of a single instance of an alerting rule.", [
        "State  AlertState",
        "Labels model.LabelSet",
        d("Value model.SampleValue", "The value at the last evaluation of the alerting expression."),
        d("ActiveAt, ResolvedAt model.Time", "The interval during which the condition of this alert held true. ResolvedAt will be 0 to indicate a still active alert."),
      ]),

      c("type AlertingRule struct", "An AlertingRule generates alerts from its vector expression.", [
        d("name string", "The name of the alert."),
        d("vector promql.Expr", "The vector expression from which to generate alerts."),
        d("holdDuration time.Duration", "The duration for which a labelset needs to persist in the expression output vector before an alert transitions from Pending to Firing state."),
        d("annotations model.LabelSet", "Extra labels to attach to the resulting alert sample vectors. labels model.LabelSet Non-identifying key/value pairs."),
        d("mtx sync.Mutex", "Protects the below."),
        d("active map[model.Fingerprint]*Alert", "A map of alerts which are currently active (Pending or Firing), keyed by the fingerprint of the labelset they correspond to."),
        d("(rule *AlertingRule) Name() string", "Name returns the name of the alert."),
        "(r *AlertingRule) sample(alert *Alert, ts model.Time, set bool) *model.Sample",
        d("(r *AlertingRule) eval(ts model.Time, engine *promql.Engine) (model.Vector, error)", "eval evaluates the rule expression and then creates pending alerts and fires or removes previously pending alerts accordingly."),
        d("(r *AlertingRule) State() AlertState", "State returns the maximum state of alert instances for this rule. StateFiring > StatePending > StateInactive"),
        d("(r *AlertingRule) ActiveAlerts() []*Alert", "ActiveAlerts returns a slice of active alerts."),
        d("(r *AlertingRule) currentAlerts() []*Alert", "currentAlerts returns all instances of alerts for this rule. This may include inactive alerts that were previously firing."),
        "(rule *AlertingRule) String() string",
        d("(rule *AlertingRule) HTMLSnippet(pathPrefix string) template.HTML", "HTMLSnippet returns an HTML snippet representing this alerting rule. The resulting snippet is expected to be presented in a <pre> element, so that line breaks and other returned whitespace is respected."),
      ]),
      d("NewAlertingRule(name string, vec promql.Expr, hold time.Duration, lbls, anns model.LabelSet) *AlertingRule", "NewAlertingRule constructs a new AlertingRule."),

      c("type Rule interface", "A Rule encapsulates a vector expression which is evaluated at a specified interval and acted upon (currently either recorded or used for alerting).", [
        "Name() string",
        d("eval(model.Time, *promql.Engine) (model.Vector, error)", "eval evaluates the rule, including any associated recording or alerting actions."),
        d("String() string", "String returns a human-readable string representation of the rule."),
        d("HTMLSnippet(pathPrefix string) html_template.HTML", "HTMLSnippet returns a human-readable string representation of the rule, decorated with HTML elements for use the web frontend."),
      ]),

      c("type Group struct", "Group is a set of rules that have a logical relation.", [
        "name     string",
        "interval time.Duration",
        "rules    []Rule",
        "opts     *ManagerOptions",
        "done       chan struct{}",
        "terminated chan struct{}",
        "(g *Group) run()",
        "(g *Group) stop()",
        "(g *Group) fingerprint() model.Fingerprint",
        d("(g *Group) offset() time.Duration", "offset returns until the next consistently slotted evaluation interval."),
        d("(g *Group) copyState(from *Group)", "copyState copies the alerting rule state from the given group."),
        d("(g *Group) eval()", "eval runs a single evaluation cycle in which all rules are evaluated in parallel. In the future a single group will be evaluated sequentially to properly handle rule dependency."),
        d("(g *Group) sendAlerts(rule *AlertingRule, timestamp model.Time) error", "sendAlerts sends alert notifications for the given rule."),
      ]),
      "newGroup(name string, opts *ManagerOptions) *Group",
      c("type Manager struct", "The Manager manages recording and alerting rules.", [
        "opts   *ManagerOptions",
        "groups map[string]*Group",
        "mtx    sync.RWMutex",
        "block  chan struct{}",
        d("(m *Manager) Run()", "Run starts processing of the rule manager."),
        d("(m *Manager) Stop()", "Stop the rule manager's rule evaluation cycles."),
        d("(m *Manager) ApplyConfig(conf *config.Config) bool", "ApplyConfig updates the rule manager's state as the config requires. If loading the new rules failed the old rule set is restored. Returns true on success."),
        d("(m *Manager) loadGroups(filenames ...string) (map[string]*Group, error)", "loadGroups reads groups from a list of files. As there's currently no group syntax a single group named \"default\" containing all rules will be returned."),
        d("(m *Manager) Rules() []Rule", "Rules returns the list of the manager's rules."),
        d("(m *Manager) AlertingRules() []*AlertingRule", "AlertingRules returns the list of the manager's alerting rules."),
      ]),
      c("type ManagerOptions struct", "ManagerOptions bundles options for the Manager.", [
        "ExternalURL         *url.URL",
        "QueryEngine         *promql.Engine",
        "NotificationHandler *notification.Handler",
        "SampleAppender      storage.SampleAppender",
      ]),
      d("NewManager(o *ManagerOptions) *Manager", "NewManager returns an implementation of Manager, ready to be started by calling the Run method."),

      c("type RecordingRule struct", "A RecordingRule records its vector expression into new timeseries.", [
        "name   string",
        "vector promql.Expr",
        "labels model.LabelSet",
        d("(rule RecordingRule) Name() string", "Name returns the rule name."),
        d("(rule RecordingRule) eval(timestamp model.Time, engine *promql.Engine) (model.Vector, error)", "eval evaluates the rule and then overrides the metric names and labels accordingly."),
        "(rule RecordingRule) String() string",
        d("(rule RecordingRule) HTMLSnippet(pathPrefix string) template.HTML", "HTMLSnippet returns an HTML snippet representing this rule."),
      ]),
      d("NewRecordingRule(name string, vector promql.Expr, labels model.LabelSet) *RecordingRule", "NewRecordingRule returns a new recording rule."),
    ]),
    c("storage", [
      c("type SampleAppender interface", "SampleAppender is the interface to append samples to both, local and remote storage. All methods are goroutine-safe.", [
        d("Append(*model.Sample) error", "Append appends a sample to the underlying storage. Depending on the storage implementation, there are different guarantees for the fate of the sample after Append has returned. Remote storage implementation will simply drop samples if they cannot keep up with sending samples. Local storage implementations will only drop metrics upon unrecoverable errors."),
        d("NeedsThrottling() bool", "NeedsThrottling returns true if the underlying storage wishes to not receive any more samples. Append will still work but might lead to undue resource usage. It is recommended to call NeedsThrottling once before an upcoming batch of Append calls (e.g. a full scrape of a target or the evaluation of a rule group) and only proceed with the batch if NeedsThrottling returns false. In that way, the result of a scrape or of an evaluation of a rule group will always be appended completely or not at all, and the work of scraping or evaluation will not be performed in vain. Also, a call of NeedsThrottling is potentially expensive, so limiting the number of calls is reasonable.  Only SampleAppenders for which it is considered critical to receive each and every sample should ever return true. SampleAppenders that tolerate not receiving all samples should always return false and instead drop samples as they see fit to avoid overload."),
      ]),

      c("type Fanout []SampleAppend", "Fanout is a SampleAppender that appends every sample to each SampleAppender in its list.", [
        d("(f Fanout) Append(s *model.Sample) error", "Append implements SampleAppender. It appends the provided sample to all SampleAppenders in the Fanout slice and waits for each append to complete before proceeding with the next. If any of the SampleAppenders returns an error, the first one is returned at the end."),
        d("(f Fanout) NeedsThrottling() bool", "NeedsThrottling returns true if at least one of the SampleAppenders in the Fanout slice is throttled."),
      ]),
    ]),
    c("storage", [
      d("local"),
      c("local", [
        d("codable"),
        d("index"),
      ]),
      d("metric"),
      d("remote"),
      c("remote", [
        d("graphite"),
        d("influxdb"),
        d("opentsdb"),
      ]),
    ]),
    c("template", [
      c("type Expander struct", "Expander executes templates in text or HTML mode with a common set of Prometheus template functions.", [
        "text    string",
        "name    string",
        "data    interface{}",
        "funcMap text_template.FuncMap",
        d("(te Expander) Funcs(fm text_template.FuncMap)", "Funcs adds the functions in fm to the Expander's function map. Existing functions will be overwritten in case of conflict."),
        d("(te Expander) Expand() (result string, resultErr error)", "Expand expands a template in text (non-HTML) mode."),
        d("(te Expander) ExpandHTML(templateFiles []string) (result string, resultErr error)", "ExpandHTML expands a template with HTML escaping, with templates read from the given files."),
      ]),
      d("NewTemplateExpander(text string, name string, data interface{}, timestamp model.Time, queryEngine *promql.Engine, pathPrefix string) *Expander", "NewTemplateExpander returns a template expander ready to use."),
    ]),
    c("util", [
      c("cli", [
        c("type Command struct", "Command represents a single command within an application.", [
          "Desc string",
          "Run  func(t Term, args ...string) int",
        ]),
        c("type Term interface", "Term handles an application's output.", [
          "Infof(format string, v ...interface{})",
          "Errorf(format string, v ...interface{})",
          "Out(format string)",
        ]),
        c("type App struct", "App represents an application that may consist of multiple commands.", [
          "Name string",
          "Help func() string",
          "commands map[string]*Command",
          d("(app *App) Register(name string, cmd *Command)", "'Register adds a new command to the application.'"),
          d("(app *App) Run(t Term, args ...string) int", "'Run the application with the given arguments. Output is sent to t.'"),
        ]),
        d("BasicHelp(app *App, ts string) func() string", "'BasicHelp returns a function that creates a basic help text for the application with its commands.'"),
        d("BasicTerm(out, err io.Writer) Term", "'BasicTerm returns a Term writing Infof and Errorf to err and Out to out.'"),
        d("NewApp(name string) *App", "'NewApp creates a new application with a pre-registered help command.'"),
      ]),
      d("flock"),
      c("httputil", [
        d("NewClient(rt http.RoundTripper) *http.Client", "NewClient returns a http.Client using the specified http.RoundTripper."),
        d("NewDeadlineClient(timeout time.Duration, proxyURL *url.URL) *http.Client", "NewDeadlineClient returns a new http.Client which will time out long running requests."),
        d("NewDeadlineRoundTripper(timeout time.Duration, proxyURL *url.URL) http.RoundTripper", "NewDeadlineRoundTripper returns a new http.RoundTripper which will time out long running requests."),
        d("NewBearerAuthRoundTripper(bearer string, rt http.RoundTripper) http.RoundTripper", "NewBearerAuthRoundTripper adds the provided bearer token to a request unless the authorization header has already been set."),
        d("NewBasicAuthRoundTripper(username, password string, rt http.RoundTripper) http.RoundTripper", "NewBasicAuthRoundTripper will apply a BASIC auth authorization header to a request unless it has already been set."),
        c("type TLSOptions struct", [
          "InsecureSkipVerify bool",
          "CAFile             string",
          "CertFile           string",
          "KeyFile            string",
        ]),
        "NewTLSConfig(opts TLSOptions) (*tls.Config, error)",
        c("type CompressionHandler struct", "CompressionHandler is a wrapper around http.Handler which adds suitable response compression based on the client's Accept-Encoding headers.", [
          "Handler http.Handler",
          d("(c CompressionHandler) ServeHTTP(writer http.ResponseWriter, req *http.Request)", "ServeHTTP adds compression to the original http.Handler's ServeHTTP() method."),
        ]),
      ]),
      c("stats", [
        c("type Timer struct", "A Timer that can be started and stopped and accumulates the total time it was running (the time between Start() and Stop()).", [
          "name     fmt.Stringer",
          "created  time.Time",
          "start    time.Time",
          "duration time.Duration",
          d("(t *Timer) Start() *Timer", "'Start the timer.'"),
          d("(t *Timer) Stop()", "'Stop the timer.'"),
          d("(t *Timer) ElapsedTime() time.Duration", "'ElapsedTime returns the time that passed since starting the timer.'"),
          d("(t *Timer) String() string", "'Return a string representation of the Timer.'"),
        ]),
        c("type TimerGroup struct", "A TimerGroup represents a group of timers relevant to a single query.", [
          "timers map[fmt.Stringer]*Timer",
          "child  *TimerGroup",
          d("(t *TimerGroup) GetTimer(name fmt.Stringer) *Timer", "'GetTimer gets (and creates, if necessary) the Timer for a given code section.'"),
        ]),
        d("NewTimerGroup() *TimerGroup", "'NewTimerGroup constructs a new TimerGroup.'"),
        c("type Timers []*Timer", "Timers is a slice of Timer pointers that implements Len and Swap from sort.Interface.", [
          d("(t Timers) Len() int", "'Len implements sort.Interface.'"),
          d("(t Timers) Swap(i, j int)", "'Swap implements sort.Interface.'"),
          d("(t *TimerGroup) String() string", "'Return a string representation of a TimerGroup.'"),
        ]),
        c("type QueryTiming int", "QueryTiming identifies the code area or functionality in which time is spent during a query.", [
          d("(s QueryTiming) String() string", "'Return a string represenation of a QueryTiming identifier.'"),
        ]),
        c("const", "Query timings.", [
          "ExecQueueTime",
          "GetBoundaryValuesTime",
          "GetRangeValuesTime",
          "GetValueAtTimeTime",
          "InnerEvalTime",
          "InnerViewBuildingTime",
          "JSONEncodeTime",
          "PreloadTime",
          "QueryAnalysisTime",
          "ResultAppendTime",
          "ResultSortTime",
          "TotalEvalTime QueryTiming = iota",
          "TotalQueryPreparationTime",
          "ViewDataExtractionTime",
          "ViewDiskExtractionTime",
          "ViewDiskPreparationTime",
        ]),
      ]),
      c("strutil", [
        d("var ErrSyntax = errors.New(\"invalid syntax\")", "ErrSyntax indicates that a value does not have the right syntax for the target type."),
        d("Unquote(s string) (t string, err error)", "Unquote interprets s as a single-quoted, double-quoted, or backquoted Prometheus query language string literal, returning the string value that s quotes. NOTE: This function as well as the necessary helper functions below (unquoteChar, contains, unhex) and associated tests have been adapted from the corresponding functions in the \"strconv\" package of the Go standard library to work for Prometheus-style strings. Go's special-casing for single quotes was removed and single quoted strings are now treated the same as double quoted ones."),
        d("TableLinkForExpression(expr string) string", "TableLinkForExpression creates an escaped relative link to the table view of the provided expression."),
        d("GraphLinkForExpression(expr string) string", "GraphLinkForExpression creates an escaped relative link to the graph view of the provided expression."),
        d("SanitizeLabelName(name string) string", "SanitizeLabelName replaces anything that doesn't match client_label.LabelNameRE with an underscore."),
      ]),
      c("testutil", [
        c("const", [
          d("NilCloser = nilCloser(true)", "NilCloser is a no-op Closer."),
        ]),
        c("type", [
          c("Closer interface", "Closer is the interface that wraps the Close method.", [
            d("Close()", "Close reaps the underlying directory and its children.  The directory could be deleted by its users already."),
          ]),
          c("TemporaryDirectory interface", "TemporaryDirectory models a closeable path for transient POSIX disk activities.", [
            "Closer",
            d("Path() string", "Path returns the underlying path for access."),
          ]),
          c("T interface", "T implements the needed methods of testing.TB so that we do not need to actually import testing (which has the side effect of adding all the test flags, which we do not want in non-test binaries even if they make use of these utilities for some reason).", [
            "Fatal(args ...interface{})",
            "Fatalf(format string, args ...interface{})",
          ]),
        ]),
        d("NewCallbackCloser(fn func()) Closer", "NewCallbackCloser returns a Closer that calls the provided function upon closing."),
        d("NewTemporaryDirectory(name string, t T) (handler TemporaryDirectory)", "NewTemporaryDirectory creates a new temporary directory for transient POSIX activities."),
        d("ErrorEqual(left, right error) bool", "ErrorEqual compares Go errors for equality."),

      ]),
      c("treecache", [
        c("type ZookeeperLogger struct", [
          d("(zl ZookeeperLogger) Printf(s string, i ...interface{})", "Implements zk.Logger"),
        ]),
        c("type ZookeeperTreeCache struct", [
          "conn     *zk.Conn",
          "prefix   string",
          "events   chan ZookeeperTreeCacheEvent",
          "zkEvents chan zk.Event",
          "stop     chan struct{}",
          "head     *zookeeperTreeCacheNode",
        ]),
        c("type ZookeeperTreeCacheEvent struct", [
          "Path string",
          "Data *[]byte",
          "(tc *ZookeeperTreeCache) Stop()",
          "(tc *ZookeeperTreeCache) loop(failureMode bool)",
          "(tc *ZookeeperTreeCache) recursiveNodeUpdate(path string, node *zookeeperTreeCacheNode) error",
          "(tc *ZookeeperTreeCache) recursiveDelete(path string, node *zookeeperTreeCacheNode)",
        ]),
        "NewZookeeperTreeCache(conn *zk.Conn, path string, events chan ZookeeperTreeCacheEvent) *ZookeeperTreeCache",
      ]),
    ]),
    c("version", [
      c("var", "Build information. Populated at build-time.", [
        "Version   string",
        "Revision  string",
        "Branch    string",
        "BuildUser string",
        "BuildDate string",
        "GoVersion string",
      ]),
      c("var Map = map[string]string", "Map provides the iterable version information.", [
        '"version":   Version',
        '"revision":  Revision',
        '"branch":    Branch',
        '"buildUser": BuildUser',
        '"buildDate": BuildDate',
        '"goVersion": GoVersion',
      ]),
    ]),
    d("web"),
    c("web", [
      c("api", [
        d("legacy"),
        d("v1"),
      ]),
      d("ui"),
    ]),
  ]
});
