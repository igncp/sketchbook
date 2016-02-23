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
    d("rules"),
    d("storage"),
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
    d("template"),
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