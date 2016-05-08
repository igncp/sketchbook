var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure',
  body: [
    c("spring-framework", [
      c(".settings", [
        d("gradle"),
      ]),
      c("buildSrc", [
        c("src", [
          c("main", [
            c("groovy", [
              c("org", [
                c("springframework", [
                  c("build", [
                    d("gradle"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("META-INF", [
                d("gradle-plugins"),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("gradle", [
        d("jdiff"),
        d("wrapper"),
      ]),
      c("spring-aop", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("aopalliance", [
                  d("aop"),
                  d("intercept"),
                ]),
                c("springframework", [
                  c("aop", [
                    c("aspectj", [
                      d("annotation"),
                      d("autoproxy"),
                    ]),
                    d("config"),
                    c("framework", [
                      d("adapter"),
                      c("autoproxy", [
                        d("target"),
                      ]),
                    ]),
                    d("interceptor"),
                    d("scope"),
                    c("support", [
                      d("annotation"),
                    ]),
                    c("target", [
                      d("dynamic"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("aop", [
                    d("config"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("aop", [
                    c("aspectj", [
                      d("annotation"),
                      d("autoproxy"),
                    ]),
                    d("config"),
                    c("framework", [
                      d("adapter"),
                    ]),
                    d("interceptor"),
                    d("scope"),
                    d("support"),
                    c("target", [
                      d("dynamic"),
                    ]),
                  ]),
                  c("tests", [
                    c("aop", [
                      d("advice"),
                      d("interceptor"),
                    ]),
                    c("sample", [
                      c("beans", [
                        d("subpkg"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              c("test", [
                c("annotation", [
                  d("transaction"),
                ]),
                d("aop"),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("aop", [
                    d("config"),
                    d("framework"),
                    d("interceptor"),
                    d("scope"),
                    d("support"),
                    d("target"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-aspects", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("beans", [
                    c("factory", [
                      d("aspectj"),
                    ]),
                  ]),
                  c("cache", [
                    d("aspectj"),
                  ]),
                  c("context", [
                    c("annotation", [
                      d("aspectj"),
                    ]),
                  ]),
                  c("mock", [
                    d("staticmock"),
                  ]),
                  c("orm", [
                    c("jpa", [
                      d("aspectj"),
                    ]),
                  ]),
                  c("scheduling", [
                    d("aspectj"),
                  ]),
                  c("transaction", [
                    d("aspectj"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("aop", [
                    c("aspectj", [
                      d("autoproxy"),
                    ]),
                  ]),
                  c("beans", [
                    c("factory", [
                      d("aspectj"),
                    ]),
                  ]),
                  c("cache", [
                    d("aspectj"),
                    d("config"),
                  ]),
                  c("context", [
                    c("annotation", [
                      d("aspectj"),
                    ]),
                  ]),
                  c("mock", [
                    d("staticmock"),
                  ]),
                  c("scheduling", [
                    d("aspectj"),
                  ]),
                  c("transaction", [
                    d("aspectj"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("aop", [
                    c("aspectj", [
                      d("autoproxy"),
                    ]),
                  ]),
                  c("beans", [
                    c("factory", [
                      d("aspectj"),
                    ]),
                  ]),
                  c("cache", [
                    d("config"),
                  ]),
                  c("scheduling", [
                    d("aspectj"),
                  ]),
                  c("transaction", [
                    d("aspectj"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-beans", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("beans", [
                    d("annotation"),
                    c("factory", [
                      c("access", [
                        d("el"),
                      ]),
                      d("annotation"),
                      d("config"),
                      d("parsing"),
                      d("serviceloader"),
                      d("support"),
                      d("wiring"),
                      d("xml"),
                    ]),
                    d("propertyeditors"),
                    d("support"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("beans", [
                    c("factory", [
                      d("xml"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("beans", [
                    c("factory", [
                      d("access"),
                      d("annotation"),
                      d("config"),
                      d("parsing"),
                      d("serviceloader"),
                      c("support", [
                        c("security", [
                          d("support"),
                        ]),
                      ]),
                      d("wiring"),
                      c("xml", [
                        d("support"),
                      ]),
                    ]),
                    d("propertyeditors"),
                    d("support"),
                  ]),
                  c("tests", [
                    d("beans"),
                    c("sample", [
                      c("beans", [
                        d("factory"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("beans", [
                    c("factory", [
                      d("access"),
                      d("annotation"),
                      d("config"),
                      d("parsing"),
                      c("support", [
                        d("security"),
                      ]),
                      d("xml"),
                    ]),
                    d("propertyeditors"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-beans-groovy", [
        c("src", [
          c("main", [
            c("groovy", [
              c("org", [
                c("springframework", [
                  c("beans", [
                    c("factory", [
                      d("groovy"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("java", [
              c("org", [
                c("springframework", [
                  c("beans", [
                    c("factory", [
                      d("groovy"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-context", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("cache", [
                    d("annotation"),
                    d("concurrent"),
                    d("config"),
                    d("interceptor"),
                    d("support"),
                  ]),
                  c("context", [
                    d("access"),
                    d("annotation"),
                    d("config"),
                    d("event"),
                    d("expression"),
                    d("i18n"),
                    d("support"),
                    d("weaving"),
                  ]),
                  c("ejb", [
                    d("access"),
                    d("config"),
                    d("interceptor"),
                  ]),
                  c("format", [
                    d("annotation"),
                    c("datetime", [
                      d("joda"),
                      d("standard"),
                    ]),
                    c("number", [
                      d("money"),
                    ]),
                    d("support"),
                  ]),
                  c("instrument", [
                    c("classloading", [
                      d("glassfish"),
                      d("jboss"),
                      d("tomcat"),
                      d("weblogic"),
                      d("websphere"),
                    ]),
                  ]),
                  c("jmx", [
                    d("access"),
                    c("export", [
                      d("annotation"),
                      d("assembler"),
                      d("metadata"),
                      d("naming"),
                      d("notification"),
                    ]),
                    d("support"),
                  ]),
                  c("jndi", [
                    d("support"),
                  ]),
                  c("remoting", [
                    d("rmi"),
                    d("soap"),
                    d("support"),
                  ]),
                  c("scheduling", [
                    d("annotation"),
                    d("concurrent"),
                    d("config"),
                    d("support"),
                  ]),
                  c("scripting", [
                    d("bsh"),
                    d("config"),
                    d("groovy"),
                    d("jruby"),
                    d("support"),
                  ]),
                  d("stereotype"),
                  c("ui", [
                    c("context", [
                      d("support"),
                    ]),
                  ]),
                  c("validation", [
                    d("annotation"),
                    d("beanvalidation"),
                    d("support"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("cache", [
                    d("config"),
                  ]),
                  c("context", [
                    d("config"),
                  ]),
                  c("ejb", [
                    d("config"),
                  ]),
                  c("remoting", [
                    d("rmi"),
                  ]),
                  c("scheduling", [
                    d("config"),
                  ]),
                  c("scripting", [
                    d("config"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("groovy", [
              c("org", [
                c("springframework", [
                  c("context", [
                    d("groovy"),
                  ]),
                ]),
              ]),
            ]),
            c("java", [
              c("example", [
                d("profilescan"),
                d("scannable"),
                d("scannable_implicitbasepackage"),
                d("scannable_scoped"),
              ]),
              c("org", [
                c("springframework", [
                  c("aop", [
                    c("aspectj", [
                      c("autoproxy", [
                        d("benchmark"),
                        d("spr3064"),
                      ]),
                      d("generic"),
                    ]),
                    d("config"),
                    c("framework", [
                      d("adapter"),
                      d("autoproxy"),
                    ]),
                    d("scope"),
                    d("target"),
                  ]),
                  c("beans", [
                    c("factory", [
                      d("annotation"),
                      d("support"),
                      c("xml", [
                        d("support"),
                      ]),
                    ]),
                  ]),
                  c("cache", [
                    d("annotation"),
                    d("concurrent"),
                    d("config"),
                    d("interceptor"),
                  ]),
                  c("context", [
                    d("access"),
                    c("annotation", [
                      c("componentscan", [
                        c("cycle", [
                          d("left"),
                          d("right"),
                        ]),
                        d("importing"),
                        d("level1"),
                        d("level2"),
                        d("level3"),
                        d("simple"),
                      ]),
                      c("configuration", [
                        d("a"),
                        d("spr8955"),
                        c("spr9031", [
                          d("scanpackage"),
                        ]),
                      ]),
                      d("jsr330"),
                      d("role"),
                      c("spr10546", [
                        d("scanpackage"),
                      ]),
                      d("spr12111"),
                      d("spr12233"),
                      d("spr12334"),
                      d("spr8761"),
                      d("spr8808"),
                    ]),
                    d("annotation2"),
                    d("annotation3"),
                    d("annotation4"),
                    d("annotation5"),
                    d("annotation6"),
                    d("config"),
                    d("conversionservice"),
                    c("event", [
                      d("test"),
                    ]),
                    d("expression"),
                    d("groovy"),
                    d("i18n"),
                    d("support"),
                  ]),
                  c("core", [
                    d("task"),
                  ]),
                  c("ejb", [
                    d("access"),
                    d("config"),
                  ]),
                  c("format", [
                    c("datetime", [
                      d("joda"),
                      d("standard"),
                    ]),
                    c("number", [
                      d("money"),
                    ]),
                    d("support"),
                  ]),
                  c("instrument", [
                    d("classloading"),
                  ]),
                  c("jmx", [
                    d("access"),
                    c("export", [
                      d("annotation"),
                      d("assembler"),
                      d("naming"),
                      d("notification"),
                    ]),
                    d("support"),
                  ]),
                  d("jndi"),
                  c("mock", [
                    d("env"),
                  ]),
                  c("remoting", [
                    d("rmi"),
                    d("support"),
                  ]),
                  c("scheduling", [
                    d("annotation"),
                    d("concurrent"),
                    d("config"),
                    d("support"),
                  ]),
                  c("scripting", [
                    d("bsh"),
                    d("config"),
                    d("groovy"),
                    d("jruby"),
                    d("support"),
                  ]),
                  c("tests", [
                    d("context"),
                    c("mock", [
                      d("jndi"),
                    ]),
                    c("sample", [
                      d("beans"),
                    ]),
                  ]),
                  d("ui"),
                  d("util"),
                  c("validation", [
                    d("beanvalidation"),
                  ]),
                ]),
              ]),
              c("test", [
                d("aspect"),
                d("mixin"),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("aop", [
                    c("aspectj", [
                      c("autoproxy", [
                        d("benchmark"),
                        d("spr3064"),
                      ]),
                      d("generic"),
                    ]),
                    d("config"),
                    c("framework", [
                      d("adapter"),
                      d("autoproxy"),
                    ]),
                    d("scope"),
                    d("target"),
                  ]),
                  c("beans", [
                    c("factory", [
                      c("xml", [
                        d("support"),
                      ]),
                    ]),
                  ]),
                  c("cache", [
                    d("config"),
                  ]),
                  c("context", [
                    d("access"),
                    c("annotation", [
                      d("configuration"),
                      d("spr10546"),
                    ]),
                    d("config"),
                    d("conversionservice"),
                    d("event"),
                    d("groovy"),
                    c("support", [
                      c("test", [
                        d("subtest"),
                      ]),
                    ]),
                  ]),
                  c("ejb", [
                    d("config"),
                  ]),
                  c("instrument", [
                    d("classloading"),
                  ]),
                  c("jmx", [
                    c("export", [
                      d("annotation"),
                      d("assembler"),
                      d("naming"),
                    ]),
                  ]),
                  c("scheduling", [
                    d("annotation"),
                    d("config"),
                  ]),
                  c("scripting", [
                    d("bsh"),
                    d("config"),
                    d("groovy"),
                    d("jruby"),
                    d("support"),
                  ]),
                  d("validation"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-context-support", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("cache", [
                    d("caffeine"),
                    d("ehcache"),
                    d("guava"),
                    c("jcache", [
                      d("config"),
                      d("interceptor"),
                    ]),
                    d("transaction"),
                  ]),
                  c("mail", [
                    d("javamail"),
                  ]),
                  c("scheduling", [
                    d("commonj"),
                    d("quartz"),
                  ]),
                  c("ui", [
                    d("freemarker"),
                    d("jasperreports"),
                    d("velocity"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("mail", [
                    d("javamail"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("cache", [
                    d("caffeine"),
                    d("ehcache"),
                    d("guava"),
                    c("jcache", [
                      d("config"),
                      d("interceptor"),
                      d("support"),
                    ]),
                    d("transaction"),
                  ]),
                  c("mail", [
                    d("javamail"),
                  ]),
                  c("scheduling", [
                    d("quartz"),
                  ]),
                  c("ui", [
                    d("jasperreports"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("cache", [
                    d("ehcache"),
                    c("jcache", [
                      d("config"),
                    ]),
                  ]),
                  c("mail", [
                    d("javamail"),
                  ]),
                  c("scheduling", [
                    d("quartz"),
                  ]),
                  c("ui", [
                    d("jasperreports"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-core", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  d("asm"),
                  c("cglib", [
                    d("core"),
                  ]),
                  c("core", [
                    d("annotation"),
                    c("convert", [
                      d("converter"),
                      d("support"),
                    ]),
                    d("env"),
                    c("io", [
                      d("support"),
                    ]),
                    c("serializer", [
                      d("support"),
                    ]),
                    d("style"),
                    c("task", [
                      d("support"),
                    ]),
                    c("type", [
                      d("classreading"),
                      d("filter"),
                    ]),
                  ]),
                  d("lang"),
                  d("objenesis"),
                  c("util", [
                    d("backoff"),
                    d("comparator"),
                    d("concurrent"),
                    d("xml"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("core", [
                    c("annotation", [
                      d("subpackage"),
                    ]),
                    c("convert", [
                      d("converter"),
                      d("support"),
                    ]),
                    d("env"),
                    c("io", [
                      d("support"),
                    ]),
                    d("serializer"),
                    d("style"),
                    d("task"),
                    c("type", [
                      d("classreading"),
                    ]),
                  ]),
                  c("mock", [
                    d("env"),
                  ]),
                  d("stereotype"),
                  c("tests", [
                    c("sample", [
                      d("objects"),
                    ]),
                  ]),
                  c("util", [
                    d("comparator"),
                    d("concurrent"),
                    d("xml"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("core", [
                    d("io"),
                  ]),
                  c("util", [
                    d("xml"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-expression", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("expression", [
                    d("common"),
                    c("spel", [
                      d("ast"),
                      d("standard"),
                      d("support"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("expression", [
                    c("spel", [
                      d("generated"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("expression", [
                    c("spel", [
                      d("ast"),
                      c("spr10210", [
                        d("comp"),
                        d("infra"),
                      ]),
                      d("standard"),
                      d("support"),
                      d("testdata"),
                      c("testresources", [
                        c("le", [
                          c("div", [
                            c("mod", [
                              d("reserved"),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            d("resources"),
          ]),
        ]),
      ]),
      d("spring-framework-bom"),
      c("spring-instrument", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  d("instrument"),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            d("java"),
            d("resources"),
          ]),
        ]),
      ]),
      c("spring-instrument-tomcat", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("apache", [
                  c("catalina", [
                    d("loader"),
                  ]),
                ]),
                c("springframework", [
                  c("instrument", [
                    c("classloading", [
                      d("tomcat"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            d("java"),
            d("resources"),
          ]),
        ]),
      ]),
      c("spring-jdbc", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("jdbc", [
                    d("config"),
                    c("core", [
                      d("metadata"),
                      d("namedparam"),
                      d("simple"),
                      d("support"),
                    ]),
                    c("datasource", [
                      d("embedded"),
                      d("init"),
                      d("lookup"),
                    ]),
                    d("object"),
                    c("support", [
                      d("incrementer"),
                      d("lob"),
                      d("nativejdbc"),
                      d("rowset"),
                      d("xml"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("jdbc", [
                    d("config"),
                    d("support"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("jdbc", [
                    d("config"),
                    c("core", [
                      d("namedparam"),
                      d("simple"),
                      d("support"),
                      d("test"),
                    ]),
                    c("datasource", [
                      d("embedded"),
                      d("init"),
                      d("lookup"),
                    ]),
                    d("object"),
                    c("support", [
                      d("rowset"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("jdbc", [
                    d("config"),
                    c("datasource", [
                      d("embedded"),
                      d("init"),
                    ]),
                    d("object"),
                    d("support"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-jms", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("jms", [
                    d("annotation"),
                    d("config"),
                    d("connection"),
                    c("core", [
                      d("support"),
                    ]),
                    c("listener", [
                      d("adapter"),
                      d("endpoint"),
                    ]),
                    d("remoting"),
                    c("support", [
                      d("converter"),
                      d("destination"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("jms", [
                    d("config"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("core", [
                    d("task"),
                  ]),
                  d("jca"),
                  c("jms", [
                    d("annotation"),
                    d("config"),
                    d("connection"),
                    c("core", [
                      d("support"),
                    ]),
                    c("listener", [
                      d("adapter"),
                      d("endpoint"),
                    ]),
                    d("remoting"),
                    c("support", [
                      d("converter"),
                      d("destination"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("jms", [
                    d("annotation"),
                    d("config"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-messaging", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("messaging", [
                    d("converter"),
                    d("core"),
                    c("handler", [
                      c("annotation", [
                        d("support"),
                      ]),
                      d("invocation"),
                    ]),
                    c("simp", [
                      c("annotation", [
                        d("support"),
                      ]),
                      d("broker"),
                      d("config"),
                      d("stomp"),
                      d("user"),
                    ]),
                    d("support"),
                    c("tcp", [
                      d("reactor"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("messaging", [
                    d("converter"),
                    d("core"),
                    c("handler", [
                      c("annotation", [
                        d("support"),
                      ]),
                      d("invocation"),
                    ]),
                    c("simp", [
                      c("annotation", [
                        d("support"),
                      ]),
                      d("broker"),
                      d("config"),
                      d("stomp"),
                      d("user"),
                    ]),
                    d("support"),
                  ]),
                ]),
              ]),
            ]),
            d("resources"),
          ]),
        ]),
      ]),
      c("spring-orm", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("orm", [
                    c("hibernate3", [
                      d("annotation"),
                      d("support"),
                    ]),
                    c("jdo", [
                      d("support"),
                    ]),
                    c("jpa", [
                      d("persistenceunit"),
                      d("support"),
                      d("vendor"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("orm", [
                    c("hibernate3", [
                      d("support"),
                    ]),
                    c("jdo", [
                      d("support"),
                    ]),
                    c("jpa", [
                      d("domain"),
                      d("eclipselink"),
                      d("hibernate"),
                      d("openjpa"),
                      d("persistenceunit"),
                      d("support"),
                    ]),
                  ]),
                  c("test", [
                    d("jpa"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("beans", [
                    c("factory", [
                      d("xml"),
                    ]),
                  ]),
                  c("orm", [
                    d("hibernate3"),
                    d("jdo"),
                    c("jpa", [
                      d("META-INF"),
                      d("domain"),
                      d("eclipselink"),
                      d("hibernate"),
                      d("openjpa"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-orm-hibernate4", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("orm", [
                    c("hibernate4", [
                      d("support"),
                    ]),
                    c("jpa", [
                      d("vendor"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("orm", [
                    d("hibernate4"),
                    c("jpa", [
                      d("jpa21"),
                    ]),
                  ]),
                  c("validation", [
                    d("hibernatevalidator5"),
                  ]),
                ]),
              ]),
            ]),
            d("resources"),
          ]),
        ]),
      ]),
      c("spring-orm-hibernate5", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("orm", [
                    c("hibernate5", [
                      d("support"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-oxm", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("oxm", [
                    d("castor"),
                    d("config"),
                    d("jaxb"),
                    d("jibx"),
                    d("mime"),
                    d("support"),
                    d("xmlbeans"),
                    d("xstream"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("oxm", [
                    d("config"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            d("castor"),
            c("java", [
              c("org", [
                c("springframework", [
                  c("oxm", [
                    d("castor"),
                    d("config"),
                    d("jaxb"),
                    d("jibx"),
                    d("xmlbeans"),
                    d("xstream"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("oxm", [
                    d("castor"),
                    d("config"),
                    d("jaxb"),
                    d("jibx"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-test", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("mock", [
                    d("env"),
                    c("http", [
                      d("client"),
                    ]),
                    d("jndi"),
                    c("web", [
                      d("portlet"),
                    ]),
                  ]),
                  c("test", [
                    d("annotation"),
                    c("context", [
                      d("cache"),
                      d("jdbc"),
                      c("junit4", [
                        d("rules"),
                        d("statements"),
                      ]),
                      d("support"),
                      d("testng"),
                      d("transaction"),
                      d("util"),
                      d("web"),
                    ]),
                    d("jdbc"),
                    d("util"),
                    c("web", [
                      c("client", [
                        d("match"),
                        d("response"),
                      ]),
                      c("servlet", [
                        c("htmlunit", [
                          d("webdriver"),
                        ]),
                        d("request"),
                        d("result"),
                        d("setup"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("cache", [
                    d("jcache"),
                  ]),
                  c("mock", [
                    d("web"),
                  ]),
                  c("test", [
                    d("annotation"),
                    c("context", [
                      d("cache"),
                      d("configuration"),
                      c("env", [
                        d("subpackage"),
                      ]),
                      d("expression"),
                      d("groovy"),
                      c("hierarchies", [
                        d("meta"),
                        d("standard"),
                        d("web"),
                      ]),
                      d("jdbc"),
                      c("junit4", [
                        c("aci", [
                          d("annotation"),
                          d("xml"),
                        ]),
                        c("annotation", [
                          d("meta"),
                        ]),
                        d("hybrid"),
                        c("orm", [
                          d("domain"),
                          c("repository", [
                            d("hibernate"),
                          ]),
                          c("service", [
                            d("impl"),
                          ]),
                        ]),
                        c("profile", [
                          d("annotation"),
                          d("importresource"),
                          d("resolver"),
                          d("xml"),
                        ]),
                        d("rules"),
                        d("spr3896"),
                        d("spr4868"),
                        d("spr6128"),
                        d("spr8849"),
                        d("spr9051"),
                        d("spr9604"),
                        d("spr9645"),
                        d("spr9799"),
                      ]),
                      d("support"),
                      c("testng", [
                        c("transaction", [
                          d("ejb"),
                          d("programmatic"),
                        ]),
                        d("web"),
                      ]),
                      c("transaction", [
                        c("ejb", [
                          d("dao"),
                          d("model"),
                        ]),
                        d("programmatic"),
                      ]),
                      d("web"),
                    ]),
                    d("jdbc"),
                    d("transaction"),
                    c("util", [
                      d("subpackage"),
                    ]),
                    c("web", [
                      c("client", [
                        d("match"),
                        d("response"),
                        c("samples", [
                          d("matchers"),
                        ]),
                      ]),
                      c("servlet", [
                        c("htmlunit", [
                          d("webdriver"),
                        ]),
                        d("request"),
                        d("result"),
                        c("samples", [
                          d("context"),
                          d("spr"),
                          c("standalone", [
                            d("resulthandlers"),
                            d("resultmatchers"),
                          ]),
                        ]),
                        d("setup"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("META-INF", [
                c("web-resources", [
                  c("WEB-INF", [
                    d("layouts"),
                    d("views"),
                  ]),
                  d("resources"),
                ]),
              ]),
              c("org", [
                c("springframework", [
                  c("test", [
                    c("context", [
                      d("configuration"),
                      d("env"),
                      d("expression"),
                      d("groovy"),
                      c("hierarchies", [
                        d("standard"),
                        d("web"),
                      ]),
                      d("jdbc"),
                      c("junit4", [
                        c("aci", [
                          d("xml"),
                        ]),
                        d("hybrid"),
                        c("orm", [
                          d("domain"),
                        ]),
                        c("profile", [
                          d("importresource"),
                          d("xml"),
                        ]),
                        d("spr3896"),
                        d("spr6128"),
                        d("spr8849"),
                        d("spr9799"),
                      ]),
                      d("support"),
                      c("testng", [
                        c("transaction", [
                          d("ejb"),
                        ]),
                      ]),
                      c("transaction", [
                        d("ejb"),
                      ]),
                      d("web"),
                    ]),
                    d("jdbc"),
                    c("web", [
                      c("client", [
                        d("samples"),
                      ]),
                      c("servlet", [
                        c("samples", [
                          d("context"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("webapp", [
              c("WEB-INF", [
                d("layouts"),
                d("views"),
              ]),
              d("resources"),
            ]),
          ]),
        ]),
      ]),
      c("spring-tx", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("dao", [
                    d("annotation"),
                    d("support"),
                  ]),
                  c("jca", [
                    c("cci", [
                      d("connection"),
                      c("core", [
                        d("support"),
                      ]),
                      d("object"),
                    ]),
                    d("context"),
                    d("endpoint"),
                    d("support"),
                    c("work", [
                      d("glassfish"),
                      d("jboss"),
                    ]),
                  ]),
                  c("transaction", [
                    d("annotation"),
                    d("config"),
                    d("event"),
                    d("interceptor"),
                    d("jta"),
                    d("support"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("jca", [
                    d("context"),
                  ]),
                  c("transaction", [
                    d("config"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("dao", [
                    d("annotation"),
                    d("support"),
                  ]),
                  c("jca", [
                    d("cci"),
                    d("support"),
                  ]),
                  c("tests", [
                    d("transaction"),
                  ]),
                  c("transaction", [
                    d("annotation"),
                    d("config"),
                    d("event"),
                    d("interceptor"),
                    d("jta"),
                    d("support"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("transaction", [
                    d("annotation"),
                    d("config"),
                    d("interceptor"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-web", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("http", [
                    c("client", [
                      d("support"),
                    ]),
                    c("converter", [
                      d("feed"),
                      d("json"),
                      d("protobuf"),
                      d("support"),
                      d("xml"),
                    ]),
                    d("server"),
                  ]),
                  c("remoting", [
                    d("caucho"),
                    d("httpinvoker"),
                    d("jaxws"),
                  ]),
                  c("web", [
                    d("accept"),
                    c("bind", [
                      c("annotation", [
                        d("support"),
                      ]),
                      d("support"),
                    ]),
                    c("client", [
                      d("support"),
                    ]),
                    c("context", [
                      d("annotation"),
                      c("request", [
                        d("async"),
                      ]),
                      d("support"),
                    ]),
                    d("cors"),
                    d("filter"),
                    c("jsf", [
                      d("el"),
                    ]),
                    c("method", [
                      d("annotation"),
                      d("support"),
                    ]),
                    c("multipart", [
                      d("commons"),
                      d("support"),
                    ]),
                    d("util"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("META-INF", [
                d("services"),
              ]),
              c("org", [
                c("springframework", [
                  c("web", [
                    d("context"),
                    d("util"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("core", [
                    d("task"),
                  ]),
                  c("http", [
                    c("client", [
                      d("support"),
                    ]),
                    c("converter", [
                      d("feed"),
                      d("json"),
                      d("protobuf"),
                      d("xml"),
                    ]),
                    d("server"),
                  ]),
                  c("mock", [
                    c("web", [
                      d("test"),
                    ]),
                  ]),
                  d("protobuf"),
                  c("remoting", [
                    d("caucho"),
                    d("httpinvoker"),
                    d("jaxws"),
                  ]),
                  c("web", [
                    d("accept"),
                    c("bind", [
                      d("support"),
                    ]),
                    d("client"),
                    c("context", [
                      c("request", [
                        d("async"),
                      ]),
                      d("support"),
                    ]),
                    d("cors"),
                    d("filter"),
                    d("jsf"),
                    c("method", [
                      d("annotation"),
                      d("support"),
                    ]),
                    c("multipart", [
                      d("commons"),
                      d("support"),
                    ]),
                    d("util"),
                  ]),
                ]),
              ]),
            ]),
            d("proto"),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("http", [
                    c("converter", [
                      d("feed"),
                      d("xml"),
                    ]),
                  ]),
                  c("web", [
                    c("context", [
                      d("request"),
                    ]),
                    d("util"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-webmvc", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("servlet", [
                      c("config", [
                        d("annotation"),
                      ]),
                      d("handler"),
                      d("i18n"),
                      c("mvc", [
                        d("annotation"),
                        d("condition"),
                        c("method", [
                          d("annotation"),
                        ]),
                        d("multiaction"),
                        d("support"),
                      ]),
                      d("resource"),
                      d("support"),
                      c("tags", [
                        d("form"),
                      ]),
                      d("theme"),
                      c("view", [
                        d("document"),
                        d("feed"),
                        d("freemarker"),
                        d("groovy"),
                        d("jasperreports"),
                        d("json"),
                        d("script"),
                        d("tiles3"),
                        d("velocity"),
                        d("xml"),
                        d("xslt"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("web", [
                    c("servlet", [
                      d("config"),
                      c("view", [
                        d("freemarker"),
                        d("velocity"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("beans", [
                    c("factory", [
                      d("access"),
                    ]),
                  ]),
                  d("context"),
                  c("web", [
                    c("context", [
                      d("support"),
                    ]),
                    c("servlet", [
                      c("config", [
                        d("annotation"),
                      ]),
                      d("handler"),
                      d("i18n"),
                      c("mvc", [
                        d("annotation"),
                        d("condition"),
                        d("mapping"),
                        c("method", [
                          d("annotation"),
                        ]),
                        d("multiaction"),
                        d("support"),
                      ]),
                      d("resource"),
                      d("support"),
                      c("tags", [
                        d("form"),
                      ]),
                      d("theme"),
                      c("view", [
                        d("document"),
                        d("feed"),
                        d("freemarker"),
                        d("groovy"),
                        d("jasperreports"),
                        d("json"),
                        d("script"),
                        d("tiles3"),
                        d("velocity"),
                        d("xml"),
                        d("xslt"),
                      ]),
                    ]),
                    d("util"),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("ui", [
                    d("jasperreports"),
                  ]),
                  c("web", [
                    c("context", [
                      c("WEB-INF", [
                        d("resources"),
                      ]),
                    ]),
                    c("servlet", [
                      c("config", [
                        c("annotation", [
                          d("WEB-INF"),
                        ]),
                      ]),
                      d("handler"),
                      c("mvc", [
                        d("annotation"),
                        d("mapping"),
                        c("method", [
                          d("annotation"),
                        ]),
                      ]),
                      c("resource", [
                        c("META-INF", [
                          c("resources", [
                            c("webjars", [
                              c("foo", [
                                d("2.3"),
                              ]),
                            ]),
                          ]),
                        ]),
                        c("test", [
                          d("foo-bar"),
                          d("images"),
                          d("js"),
                        ]),
                        c("testalternatepath", [
                          d("js"),
                        ]),
                        d("testsecret"),
                        d("tiles"),
                      ]),
                      c("view", [
                        d("document"),
                        d("freemarker"),
                        c("groovy", [
                          d("includes"),
                        ]),
                        d("jasperreports"),
                        c("script", [
                          d("jruby"),
                          d("jython"),
                          d("nashorn"),
                        ]),
                        d("tiles3"),
                        d("velocity"),
                        d("xslt"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-webmvc-portlet", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("portlet", [
                      c("bind", [
                        d("annotation"),
                      ]),
                      d("context"),
                      d("handler"),
                      d("multipart"),
                      c("mvc", [
                        d("annotation"),
                      ]),
                      d("util"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("web", [
                    d("portlet"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  d("context"),
                  c("mock", [
                    c("web", [
                      d("portlet"),
                    ]),
                  ]),
                  c("web", [
                    c("portlet", [
                      d("bind"),
                      d("context"),
                      d("handler"),
                      c("mvc", [
                        d("annotation"),
                      ]),
                      d("util"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("portlet", [
                      c("context", [
                        c("WEB-INF", [
                          d("resources"),
                        ]),
                      ]),
                      d("handler"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-webmvc-tiles2", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("servlet", [
                      c("view", [
                        d("tiles2"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("servlet", [
                      c("view", [
                        d("tiles2"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("servlet", [
                      c("view", [
                        d("tiles2"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("spring-websocket", [
        c("src", [
          c("main", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("socket", [
                      c("adapter", [
                        d("jetty"),
                        d("standard"),
                      ]),
                      c("client", [
                        d("jetty"),
                        d("standard"),
                      ]),
                      c("config", [
                        d("annotation"),
                      ]),
                      d("handler"),
                      d("messaging"),
                      c("server", [
                        d("jetty"),
                        d("standard"),
                        d("support"),
                      ]),
                      c("sockjs", [
                        d("client"),
                        d("frame"),
                        d("support"),
                        c("transport", [
                          d("handler"),
                          d("session"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              d("META-INF"),
              c("org", [
                c("springframework", [
                  c("web", [
                    c("socket", [
                      d("config"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          c("test", [
            c("java", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("socket", [
                      c("adapter", [
                        d("jetty"),
                        d("standard"),
                      ]),
                      c("client", [
                        d("jetty"),
                        d("standard"),
                      ]),
                      c("config", [
                        d("annotation"),
                      ]),
                      d("handler"),
                      d("messaging"),
                      c("server", [
                        d("standard"),
                        d("support"),
                      ]),
                      c("sockjs", [
                        d("client"),
                        d("frame"),
                        d("support"),
                        c("transport", [
                          d("handler"),
                          d("session"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            c("resources", [
              c("org", [
                c("springframework", [
                  c("web", [
                    c("socket", [
                      d("config"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      c("src", [
        d("api"),
        c("asciidoc", [
          d("images"),
        ]),
        d("dist"),
        d("eclipse"),
        d("idea"),
        c("test", [
          c("java", [
            c("com", [
              d("foo"),
            ]),
            c("org", [
              c("springframework", [
                c("aop", [
                  d("config"),
                  c("framework", [
                    d("autoproxy"),
                  ]),
                ]),
                c("cache", [
                  d("annotation"),
                ]),
                c("context", [
                  c("annotation", [
                    d("jsr330"),
                    d("ltw"),
                    d("scope"),
                  ]),
                ]),
                c("core", [
                  c("env", [
                    d("scan1"),
                    d("scan2"),
                  ]),
                ]),
                c("expression", [
                  c("spel", [
                    d("support"),
                  ]),
                ]),
                c("scheduling", [
                  d("annotation"),
                ]),
                c("transaction", [
                  d("annotation"),
                ]),
              ]),
            ]),
          ]),
          c("resources", [
            d("META-INF"),
            c("com", [
              d("foo"),
            ]),
            c("org", [
              c("springframework", [
                c("aop", [
                  d("config"),
                  c("framework", [
                    d("autoproxy"),
                  ]),
                ]),
                c("context", [
                  c("annotation", [
                    d("ltw"),
                  ]),
                ]),
                c("core", [
                  d("env"),
                ]),
                c("transaction", [
                  d("annotation"),
                ]),
                d("util"),
                c("web", [
                  d("util"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]
});
