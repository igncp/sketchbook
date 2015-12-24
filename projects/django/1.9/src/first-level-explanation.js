var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' first level explanation',
  body: [
    c("src", [
      d("__init__.py", "Entry point of the application"),
      d("__main__.py", "'Invokes django-admin when the django module is run as a script. Example: python -m django check'"),
      d("shortcuts.py", "'This module collects helper functions and classes that 'span' multiple levels of MVC. In other words, these functions/classes introduce controlled coupling for convenience's sake.'"),
      d("apps", "Contains the apps registry and the AppConfig class."),
      d("bin", "django-admin command entry point"),
      d("conf", "Settings and configuration for Django. Values will be read from the module specified by the DJANGO_SETTINGS_MODULE environment variable, and then from django.conf.global_settings; see the global settings file for a list of all possible variables."),
      d("contrib", "A lot of plugable modules. The list is: admin, admindocs, auth, contenttypes, flatpages, gis, humanize, messages, postgres, redirects, sessions, sitemaps, sites, staticfiles, syndication, webdesign,"),
      d("core", "Main functionalities for django."),
      d("db", "Contains the logic of the models, the migrantions, and the built-in backends (e.g. mysql)"),
      d("dispatch", "'Multi-consumer multi-producer dispatching mechanism. Originally based on pydispatch (BSD) http://pypi.python.org/pypi/PyDispatcher/2.0.1 . Heavily modified for Django's purposes.'"),
      d("forms", "'Django validation and HTML form handling.'"),
      d("http", "Contains the logic for cookies, multipartparser (for file uploads), requests and responses."),
      d("middleware", "Provides some security middleware (e.g. clickjacking) and other utilities"),
      d("template", "Contains two main sections.'1. Multiple Template Engines: support for pluggable template backends, built-in backends and backend-independent APIs. 2. Django Template Language: Django's own template engine, including its built-in loaders, context processors, tags and filters.'"),
      d("templatetags"),
      d("test", "'Django Unit Test and Doctest framework.'"),
      d("utils", "A lot of utilities used by the other modules of the application."),
      d("views", "Functions to use within the views"),
    ]),
  ]
});