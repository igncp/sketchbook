var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' src api overview',
  body: [c('core', [
      d("abstractobserver.js"),
      d("anonymousobservable.js"),
      d("anonymousobserver.js"),
      d("autodetachobserver.js"),
      c('backpressure', [
        d("controlled.js"),
        d("pausablebuffered.js"),
        d("pausable.js"),
        d("pauser.js"),
        d("stopandwait.js"),
        d("windowed.js"),
      ]),
      d("checkedobserver.js"),
      c('concurrency', [
        d("catchscheduler.js"),
        d("currentthreadscheduler.js"),
        d("defaultscheduler.js"),
        d("historicalscheduler.js"),
        d("immediatescheduler.js"),
        d("scheduleditem.js"),
        d("scheduleperiodicrecursive.js"),
        d("scheduler.js"),
        d("scheduler.periodic.js"),
        d("scheduler.recursive.js"),
        d("scheduler.wrappers.js"),
        d("virtualtimescheduler.js"),
      ]),
      c('disposables', [
        d("booleandisposable.js"),
        d("compositedisposable.js"),
        d("disposable.js"),
        d("refcountdisposable.js"),
        d("scheduleddisposable.js"),
      ]),
      d("enumerable.js"),
      c('expressions', [
        d("compiler.ts"),
      ]),
      c('headers', [
        d("aggregatesheader.js"),
        d("asyncheader.js"),
        d("asyncintro.js"),
        d("backpressureheader.js"),
        d("basicheader-compat.js"),
        d("basicheader.js"),
        d("bindingheader.js"),
        d("coincidenceheader.js"),
        d("core-bindingheader.js"),
        d("coreheader.js"),
        d("core-intro.js"),
        d("core-testheader.js"),
        d("enumeratorheader.js"),
        d("experimentalheader.js"),
        d("exports.js"),
        d("intro.js"),
        d("joinpatternsheader.js"),
        d("license.js"),
        d("liteextrasheader.js"),
        d("liteheader-compat.js"),
        d("liteheader.js"),
        d("liteintro-compat.js"),
        d("liteintro.js"),
        d("litetestintro-compat.js"),
        d("litetestintro.js"),
        d("outro.js"),
        d("sortingheader.js"),
        d("subintro.js"),
        d("suboutro.js"),
        d("testheader.js"),
        d("testintro.js"),
        d("timeheader.js"),
        d("virtualtimeheader.js"),
      ]),
      c('internal', [
        d("bindcallback.js"),
        d("deprecate.js"),
        d("dictionary.js"),
        d("dontenums.js"),
        d("errors.js"),
        d("isequal.js"),
        d("map.js"),
        d("polyfills.js"),
        d("priorityqueue.js"),
        d("trycatch.js"),
        d("util.js"),
      ]),
      c('joins', [
        d("activeplan.js"),
        d("joinobserver.js"),
        d("pattern.js"),
        d("plan.js"),
      ]),
      c('linq', [
        d("connectableobservable.js"),
        c('enumerable', [
          d("while.js"),
        ]),
        d("groupedobservable.js"),
        c('observable', [
          d("aggregate.js"),
          d("amb.js"),
          d("ambproto.js"),
          d("and.js"),
          d("asobservable.js"),
          d("average.js"),
          d("buffer.js"),
          d("bufferwithcount.js"),
          d("bufferwithtime.js"),
          d("bufferwithtimeorcount.js"),
          d("case.js"),
          d("catch.js"),
          d("catchproto.js"),
          d("combinedsynchronized.js"),
          d("combinelatest.js"),
          d("combinelatestproto.js"),
          d("concatall.js"),
          d("concat.js"),
          d("concatmap.js"),
          d("concatmapobserver.js"),
          d("concatproto.js"),
          d("count.js"),
          d("create.js"),
          d("debounce.js"),
          d("debouncewithselector.js"),
          d("defaultifempty.js"),
          d("defer.js"),
          d("delay.js"),
          d("delaysubscription.js"),
          d("delaywithselector.js"),
          d("dematerialize.js"),
          d("distinct.js"),
          d("distinctuntilchanged.js"),
          d("do.js"),
          d("dowhile.js"),
          d("elementat.js"),
          d("empty.js"),
          d("every.js"),
          d("expand.js"),
          d("_extremaby.js"),
          d("finally.js"),
          d("findindex.js"),
          d("find.js"),
          d("_findvalue.js"),
          d("first.js"),
          d("_firstonly.js"),
          d("flatmapfirst.js"),
          d("flatmaplatest.js"),
          d("flatmapwithmaxconcurrent.js"),
          d("for.js"),
          d("forkjoin.js"),
          d("forkjoinproto.js"),
          d("fromarray.js"),
          d("fromcallback.js"),
          d("fromevent.compat.js"),
          d("fromevent.js"),
          d("fromeventpattern.js"),
          d("from.js"),
          d("fromnodecallback.js"),
          d("frompromise.js"),
          d("generate.js"),
          d("generatewithabsolutetime.js"),
          d("generatewithrelativetime.js"),
          d("groupby.js"),
          d("groupbyuntil.js"),
          d("groupjoin.js"),
          d("if.js"),
          d("ignoreelements.js"),
          d("includes.js"),
          d("indexof.js"),
          d("interval.js"),
          d("isempty.js"),
          d("join.js"),
          d("jortsort.js"),
          d("jortsortuntil.js"),
          d("last.js"),
          d("let.js"),
          d("manyselect.js"),
          d("materialize.js"),
          d("maxby.js"),
          d("max.js"),
          d("mergeall.js"),
          d("mergedelayerror.js"),
          d("merge.js"),
          d("mergeproto.js"),
          d("minby.js"),
          d("min.js"),
          d("multicast.js"),
          d("never.js"),
          d("_observabletimerdateandperiod.js"),
          d("_observabletimerdate.js"),
          d("_observabletimertimespanandperiod.js"),
          d("_observabletimertimespan.js"),
          d("observeon.js"),
          d("ofarraychanges.js"),
          d("of.js"),
          d("ofobjectchanges.js"),
          d("onerrorresumenext.js"),
          d("onerrorresumenextproto.js"),
          d("pairs.js"),
          d("pairwise.js"),
          d("partition.js"),
          d("pipe.js"),
          d("pluck.js"),
          d("publish.js"),
          d("publishlast.js"),
          d("publishvalue.js"),
          d("range.js"),
          d("reduce.js"),
          d("repeat.js"),
          d("repeatproto.js"),
          d("replay.js"),
          d("retry.js"),
          d("retrywhen.js"),
          d("return.js"),
          d("sample.js"),
          d("scan.js"),
          d("select.js"),
          d("selectmany.js"),
          d("selectmanyobserver.js"),
          d("sequenceequal.js"),
          d("share.js"),
          d("sharereplay.js"),
          d("sharevalue.js"),
          d("singleinstance.js"),
          d("single.js"),
          d("skip.js"),
          d("skiplast.js"),
          d("skiplastwithtime.js"),
          d("skipuntil.js"),
          d("skipuntilwithtime.js"),
          d("skipwhile.js"),
          d("skipwithtime.js"),
          d("some.js"),
          d("spawn.js"),
          d("startasync.js"),
          d("start.js"),
          d("startwith.js"),
          d("subscribeon.js"),
          d("sum.js"),
          d("switchfirst.js"),
          d("switch.js"),
          d("take.js"),
          d("takelastbuffer.js"),
          d("takelastbufferwithtime.js"),
          d("takelast.js"),
          d("takelastwithtime.js"),
          d("takeuntil.js"),
          d("takeuntilwithtime.js"),
          d("takewhile.js"),
          d("takewithtime.js"),
          d("thendo.js"),
          d("throttlefirst.js"),
          d("throw.js"),
          d("timeinterval.js"),
          d("timeout.js"),
          d("timeoutwithselector.js"),
          d("timer.js"),
          d("timestamp.js"),
          d("toarray.js"),
          d("toasync.js"),
          d("tomap.js"),
          d("topromise.js"),
          d("toset.js"),
          d("transduce.js"),
          d("using.js"),
          d("when.js"),
          d("where.js"),
          d("while.js"),
          d("window.js"),
          d("windowwithcount.js"),
          d("windowwithtime.js"),
          d("windowwithtimeorcount.js"),
          d("withlatestfrom.js"),
          d("ziparray.js"),
          d("zip.js"),
          d("zipproto.js"),
        ]),
      ]),
      c('longstacktraces', [
        d("longstackbegin.js"),
        d("longstackend.js"),
        d("longstacktraces.js"),
      ]),
      d("notification.js"),
      d("observable.js"),
      d("observeonobserver.js"),
      d("observer-extras.js"),
      d("observer.js"),
      d("observer-lite.js"),
      c('perf', [
        d("observablebase.js"),
        d("observerbase.js"),
        c('operators', [
          d("combinelatest.js"),
          d("concat.js"),
          d("concatmap.js"),
          d("distinctuntilchanged.js"),
          d("empty.js"),
          d("filter.js"),
          d("finally.js"),
          d("flatmapbase.js"),
          d("flatmapfirst.js"),
          d("flatmap.js"),
          d("flatmaplatest.js"),
          d("flatmapwithmaxconcurrent.js"),
          d("fromarray.js"),
          d("fromarrayobservable.js"),
          d("fromcallback.js"),
          d("from.js"),
          d("fromnodecallback.js"),
          d("frompromise.js"),
          d("ignoreelements.js"),
          d("just.js"),
          d("map.js"),
          d("mergeall.js"),
          d("mergeproto.js"),
          d("never.js"),
          d("of.js"),
          d("pairs.js"),
          d("range.js"),
          d("reduce.js"),
          d("repeat.js"),
          d("scan.js"),
          d("skip.js"),
          d("switch.js"),
          d("take.js"),
          d("takeuntil.js"),
          d("tap.js"),
          d("throw.js"),
          d("toarray.js"),
          d("zip.js"),
        ]),
      ]),
      d("scheduledobserver.js"),
      c('subjects', [
        d("anonymoussubject.js"),
        d("asyncsubject.js"),
        d("behaviorsubject.js"),
        d("innersubscription.js"),
        d("replaysubject.js"),
        d("subject.js"),
      ]),
      c('testing', [
        d("coldobservable.js"),
        d("hotobservable.js"),
        d("mockdisposable.js"),
        d("mockobserver.js"),
        d("mockpromise.js"),
        d("reactivetest.js"),
        d("recorded.js"),
        d("subscription.js"),
        d("testscheduler.js"),
      ]),
    ]),
    c('modular', [
      c('compat', [
        d("observable.js"),
        d("package.json"),
      ]),
      c('modern', [
        c('internal', [
          d("abstractobserver.js"),
          d("anonymousobservable.js"),
          d("autodetachobserver.js"),
        ]),
        c('observable', [
          d("amb.js"),
          d("ambproto.js"),
          d("case.js"),
          d("catch.js"),
          d("combinelatest.js"),
          d("create.js"),
          d("flatmap.js"),
          c('internal', [
            d("anonymousobservable.js"),
            d("flatmapcore.js"),
          ]),
        ]),
        d("observable.js"),
        d("package.json"),
      ]),
    ]),
  ]
});