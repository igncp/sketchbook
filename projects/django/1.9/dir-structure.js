var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure (without locale related)',
  body: [
    c("django", [
      d(".tx"),
      c("django", [
        d("apps"),
        d("bin"),
        c("conf", [
          c("app_template", [
            d("migrations"),
          ]),
          d("locale", 'DELETED BECAUSE LOCALE'),
          c("project_template", [
            d("project_name"),
          ]),
          d("urls"),
        ]),
        c("contrib", [
          c("admin", [
            d("bin"),
            d("locale", 'DELETED BECAUSE LOCALE'),
            d("migrations"),
            c("static", [
              c("admin", [
                d("css"),
                d("fonts"),
                c("img", [
                  d("gis"),
                ]),
                c("js", [
                  d("admin"),
                  c("vendor", [
                    d("jquery"),
                    d("xregexp"),
                  ]),
                ]),
              ]),
            ]),
            c("templates", [
              c("admin", [
                c("auth", [
                  d("user"),
                ]),
                d("edit_inline"),
                d("includes"),
              ]),
              d("registration"),
            ]),
            d("templatetags"),
            d("views"),
          ]),
          c("admindocs", [
            d("locale", 'DELETED BECAUSE LOCALE'),
            c("templates", [
              d("admin_doc"),
            ]),
            d("tests"),
          ]),
          c("auth", [
            d("handlers"),
            d("locale", 'DELETED BECAUSE LOCALE'),
            c("management", [
              d("commands"),
            ]),
            d("migrations"),
            c("templates", [
              d("registration"),
            ]),
            d("tests"),
          ]),
          c("contenttypes", [
            c("locale", 'DELETED BECAUSE LOCALE'),
            d("migrations"),
          ]),
          c("flatpages", [
            c("locale", 'DELETED BECAUSE LOCALE'),
            d("migrations"),
            d("templatetags"),
          ]),
          c("gis", [
            d("admin"),
            c("db", [
              c("backends", [
                d("base"),
                d("mysql"),
                d("oracle"),
                d("postgis"),
                d("spatialite"),
              ]),
              c("models", [
                d("sql"),
              ]),
            ]),
            d("forms"),
            c("gdal", [
              d("prototypes"),
              d("raster"),
            ]),
            d("geoip"),
            d("geoip2"),
            c("geometry", [
              d("backend"),
            ]),
            c("geos", [
              d("prototypes"),
            ]),
            c("locale", 'DELETED BECAUSE LOCALE'),
            c("management", [
              d("commands"),
            ]),
            c("maps", [
              d("google"),
              d("openlayers"),
            ]),
            d("serializers"),
            d("sitemaps"),
            c("static", [
              c("gis", [
                d("js"),
              ]),
            ]),
            c("templates", [
              c("gis", [
                d("admin"),
                d("google"),
                d("kml"),
              ]),
            ]),
            d("utils"),
          ]),
          c("humanize", [
            c("locale", 'DELETED BECAUSE LOCALE'),
            d("templatetags"),
          ]),
          c("messages", [
            d("storage"),
          ]),
          c("postgres", [
            d("aggregates"),
            d("fields"),
            d("forms"),
            c("locale", 'DELETED BECAUSE LOCALE'),
          ]),
          c("redirects", [
            c("locale", 'DELETED BECAUSE LOCALE'),
            d("migrations"),
          ]),
          c("sessions", [
            d("backends"),
            c("locale", 'DELETED BECAUSE LOCALE'),
            c("management", [
              d("commands"),
            ]),
            d("migrations"),
          ]),
          c("sitemaps", [
            c("management", [
              d("commands"),
            ]),
            d("templates"),
          ]),
          c("sites", [
            c("locale", 'DELETED BECAUSE LOCALE'),
            d("migrations"),
          ]),
          c("staticfiles", [
            c("management", [
              d("commands"),
            ]),
            d("templatetags"),
          ]),
          d("syndication"),
          c("webdesign", [
            d("templatetags"),
          ]),
        ]),
        c("core", [
          c("cache", [
            d("backends"),
          ]),
          c("checks", [
            d("compatibility"),
            d("security"),
          ]),
          d("files"),
          d("handlers"),
          c("mail", [
            d("backends"),
          ]),
          c("management", [
            d("commands"),
          ]),
          d("serializers"),
          d("servers"),
        ]),
        c("db", [
          c("backends", [
            d("base"),
            d("dummy"),
            d("mysql"),
            d("oracle"),
            d("postgresql"),
            d("postgresql_psycopg2"),
            d("sqlite3"),
          ]),
          c("migrations", [
            d("operations"),
          ]),
          c("models", [
            d("fields"),
            d("sql"),
          ]),
        ]),
        d("dispatch"),
        c("forms", [
          d("extras"),
        ]),
        d("http"),
        d("middleware"),
        c("template", [
          d("backends"),
          d("loaders"),
        ]),
        d("templatetags"),
        d("test"),
        c("utils", [
          d("translation"),
        ]),
        c("views", [
          d("decorators"),
          d("generic"),
        ]),
      ]),
      c("docs", [
        d("_ext"),
        c("_theme", [
          c("djangodocs", [
            d("static"),
          ]),
          c("djangodocs-epub", [
            d("static"),
          ]),
        ]),
        d("faq"),
        c("howto", [
          c("deployment", [
            d("wsgi"),
          ]),
          d("static-files"),
        ]),
        c("internals", [
          d("_images"),
          c("contributing", [
            d("writing-code"),
          ]),
        ]),
        c("intro", [
          d("_images"),
        ]),
        d("man"),
        d("misc"),
        c("ref", [
          d("class-based-views"),
          c("contrib", [
            c("admin", [
              d("_images"),
            ]),
            c("gis", [
              d("install"),
            ]),
            d("postgres"),
          ]),
          d("files"),
          d("forms"),
          d("models"),
          d("templates"),
        ]),
        d("releases"),
        c("topics", [
          d("_images"),
          d("auth"),
          d("class-based-views"),
          c("db", [
            d("examples"),
          ]),
          d("forms"),
          c("http", [
            d("_images"),
          ]),
          d("i18n"),
          c("testing", [
            d("_images"),
          ]),
        ]),
      ]),
      d("extras"),
      c("js_tests", [
        d("admin"),
        d("qunit"),
      ]),
      d("scripts"),
      c("tests", [
        d("absolute_url_overrides"),
        d("admin_autodiscover"),
        d("admin_changelist"),
        d("admin_checks"),
        d("admin_custom_urls"),
        d("admin_docs"),
        d("admin_filters"),
        d("admin_inlines"),
        d("admin_ordering"),
        d("admin_registration"),
        c("admin_scripts", [
          d("app_raising_messages"),
          d("app_raising_warning"),
          d("app_with_import"),
          d("broken_app"),
          c("complex_app", [
            d("admin"),
            c("management", [
              d("commands"),
            ]),
            d("models"),
          ]),
          c("custom_templates", [
            d("app_template"),
            c("project_template", [
              d("additional_dir"),
              d("project_name"),
            ]),
          ]),
          c("management", [
            d("commands"),
          ]),
          c("simple_app", [
            c("management", [
              d("commands"),
            ]),
          ]),
        ]),
        d("admin_utils"),
        c("admin_views", [
          c("templates", [
            d("admin"),
          ]),
        ]),
        d("admin_widgets"),
        d("aggregation"),
        d("aggregation_regress"),
        d("annotations"),
        c("app_loading", [
          d("eggs"),
          d("not_installed"),
        ]),
        c("apps", [
          d("default_config_app"),
          c("namespace_package_base", [
            d("nsapp"),
          ]),
          c("namespace_package_other_base", [
            d("nsapp"),
          ]),
        ]),
        c("auth_tests", [
          d("fixtures"),
          d("models"),
          c("templates", [
            d("context_processors"),
            d("registration"),
          ]),
        ]),
        d("backends"),
        d("base"),
        c("bash_completion", [
          c("management", [
            d("commands"),
          ]),
        ]),
        d("basic"),
        d("builtin_server"),
        d("bulk_create"),
        d("cache"),
        c("check_framework", [
          d("urls"),
        ]),
        d("choices"),
        d("conditional_processing"),
        d("contenttypes_tests"),
        c("context_processors", [
          c("templates", [
            d("context_processors"),
          ]),
        ]),
        d("createsuperuser"),
        d("csrf_tests"),
        d("custom_columns"),
        d("custom_lookups"),
        d("custom_managers"),
        d("custom_methods"),
        d("custom_migration_operations"),
        d("custom_pk"),
        d("datatypes"),
        d("dates"),
        d("datetimes"),
        d("db_functions"),
        d("db_typecasts"),
        d("dbshell"),
        d("decorators"),
        d("defer"),
        d("defer_regress"),
        d("delete"),
        d("delete_regress"),
        d("deprecation"),
        d("dispatch"),
        d("distinct_on_fields"),
        c("empty", [
          d("no_models"),
        ]),
        d("expressions"),
        d("expressions_case"),
        d("extra_regress"),
        d("field_deconstruction"),
        d("field_defaults"),
        d("field_subclassing"),
        d("file_storage"),
        d("file_uploads"),
        d("files"),
        c("fixtures", [
          d("fixtures"),
        ]),
        c("fixtures_model_package", [
          d("fixtures"),
          d("models"),
        ]),
        c("fixtures_regress", [
          d("fixtures"),
          c("fixtures_1", [
            d("inner"),
          ]),
          d("fixtures_2"),
        ]),
        c("flatpages_tests", [
          c("templates", [
            d("flatpages"),
            d("registration"),
          ]),
        ]),
        d("force_insert_update"),
        c("foreign_object", [
          d("models"),
        ]),
        c("forms_tests", [
          d("field_tests"),
          c("templates", [
            d("forms_tests"),
          ]),
          c("tests", [
            c("filepath_test_files", [
              d("directory"),
            ]),
          ]),
          d("widget_tests"),
        ]),
        d("from_db_value"),
        d("generic_inline_admin"),
        d("generic_relations"),
        d("generic_relations_regress"),
        c("generic_views", [
          c("jinja2", [
            d("generic_views"),
          ]),
          c("templates", [
            d("generic_views"),
            d("registration"),
          ]),
        ]),
        d("get_earliest_or_latest"),
        d("get_object_or_404"),
        d("get_or_create"),
        c("gis_tests", [
          c("data", [
            d("ch-city"),
            d("cities"),
            d("counties"),
            d("gas_lines"),
            d("interstates"),
            d("invalid"),
            d("rasters"),
            d("test_point"),
            d("test_poly"),
            d("test_vrt"),
          ]),
          c("distapp", [
            d("fixtures"),
          ]),
          d("gdal_tests"),
          d("geo3d"),
          d("geoadmin"),
          c("geoapp", [
            d("fixtures"),
          ]),
          c("geogapp", [
            d("fixtures"),
          ]),
          d("geos_tests"),
          c("gis_migrations", [
            d("migrations"),
          ]),
          d("inspectapp"),
          d("layermap"),
          d("maps"),
          d("rasterapp"),
          c("relatedapp", [
            d("fixtures"),
          ]),
        ]),
        c("handlers", [
          d("templates"),
        ]),
        d("http_utils"),
        d("httpwrappers"),
        d("humanize_tests"),
        c("i18n", [
          c("commands", [
            c("app_with_locale", 'DELETED BECAUSE LOCALE'),
            d("ignore_dir"),
            c("locale", 'DELETED BECAUSE LOCALE'),
            d("media_root"),
            c("someapp", [
              d("static"),
            ]),
            d("static"),
            c("templates", [
              d("subdir"),
            ]),
          ]),
          c("contenttypes", [
            c("locale", 'DELETED BECAUSE LOCALE'),
          ]),
          c("exclude", [
            c("canned_locale", 'DELETED BECAUSE LOCALE'),
          ]),
          c("other", [
            c("locale", 'DELETED BECAUSE LOCALE'),
          ]),
          c("other2", [
            c("locale", 'DELETED BECAUSE LOCALE'),
          ]),
          c("patterns", [
            c("locale", 'DELETED BECAUSE LOCALE'),
            d("templates"),
            d("urls"),
          ]),
          c("project_dir", 'DELETED BECAUSE LOCALE'),
          c("resolution", [
            c("locale", 'DELETED BECAUSE LOCALE'),
          ]),
          c("sampleproject", [
            c("locale", 'DELETED BECAUSE LOCALE'),
            d("sampleproject"),
            d("templates"),
          ]),
        ]),
        d("import_error_package"),
        d("indexes"),
        d("inline_formsets"),
        d("inspectdb"),
        d("introspection"),
        d("invalid_models_tests"),
        d("known_related_objects"),
        d("logging_tests"),
        d("lookup"),
        d("m2m_and_m2o"),
        d("m2m_intermediary"),
        d("m2m_multiple"),
        d("m2m_recursive"),
        d("m2m_regress"),
        d("m2m_signals"),
        d("m2m_through"),
        c("m2m_through_regress", [
          d("fixtures"),
        ]),
        d("m2o_recursive"),
        c("mail", [
          d("attachments"),
        ]),
        d("managers_regress"),
        d("many_to_many"),
        d("many_to_one"),
        d("many_to_one_null"),
        d("max_lengths"),
        d("messages_tests"),
        d("middleware"),
        d("middleware_exceptions"),
        c("migrate_signals", [
          d("custom_migrations"),
        ]),
        c("migration_test_data_persistence", [
          d("migrations"),
        ]),
        c("migrations", [
          d("deprecated_field_migrations"),
          c("faulty_migrations", [
            c("namespace", [
              d("foo"),
            ]),
          ]),
          c("migrations_test_apps", [
            c("alter_fk", [
              c("author_app", [
                d("migrations"),
              ]),
              c("book_app", [
                d("migrations"),
              ]),
            ]),
            c("conflicting_app_with_dependencies", [
              d("migrations"),
            ]),
            c("lookuperror_a", [
              d("migrations"),
            ]),
            c("lookuperror_b", [
              d("migrations"),
            ]),
            c("lookuperror_c", [
              d("migrations"),
            ]),
            c("migrated_app", [
              d("migrations"),
            ]),
            c("migrated_unapplied_app", [
              d("migrations"),
            ]),
            d("normal"),
            d("unmigrated_app"),
            c("unspecified_app_with_conflict", [
              d("migrations"),
            ]),
            c("with_package_model", [
              d("models"),
            ]),
            c("without_init_file", [
              d("migrations"),
            ]),
          ]),
          d("related_models_app"),
          d("test_migrations"),
          d("test_migrations_backwards_deps_1"),
          d("test_migrations_conflict"),
          d("test_migrations_custom_user"),
          d("test_migrations_empty"),
          d("test_migrations_fake_split_initial"),
          d("test_migrations_first"),
          d("test_migrations_initial_false"),
          d("test_migrations_no_ancestor"),
          d("test_migrations_no_changes"),
          d("test_migrations_no_default"),
          d("test_migrations_order"),
          d("test_migrations_run_before"),
          d("test_migrations_squashed"),
          d("test_migrations_squashed_complex"),
          c("test_migrations_squashed_complex_multi_apps", [
            d("app1"),
            d("app2"),
          ]),
          d("test_migrations_squashed_erroneous"),
          d("test_migrations_unmigdep"),
        ]),
        c("migrations2", [
          d("test_migrations_2"),
          d("test_migrations_2_first"),
          d("test_migrations_2_no_deps"),
        ]),
        d("model_fields"),
        d("model_forms"),
        d("model_formsets"),
        d("model_formsets_regress"),
        c("model_inheritance", [
          d("same_model_name"),
        ]),
        d("model_inheritance_regress"),
        d("model_meta"),
        c("model_options", [
          d("models"),
        ]),
        c("model_package", [
          d("models"),
        ]),
        d("model_permalink"),
        d("model_regress"),
        d("model_validation"),
        d("modeladmin"),
        c("multiple_database", [
          d("fixtures"),
        ]),
        d("mutually_referential"),
        d("nested_foreign_keys"),
        d("no_models"),
        d("null_fk"),
        d("null_fk_ordering"),
        d("null_queries"),
        d("one_to_one"),
        d("or_lookups"),
        d("order_with_respect_to"),
        d("ordering"),
        d("pagination"),
        c("postgres_tests", [
          d("array_default_migrations"),
          d("array_index_migrations"),
          d("migrations"),
        ]),
        d("prefetch_related"),
        d("project_template"),
        d("properties"),
        c("proxy_model_inheritance", [
          d("app1"),
          d("app2"),
        ]),
        c("proxy_models", [
          d("fixtures"),
        ]),
        d("queries"),
        d("queryset_pickle"),
        d("raw_query"),
        d("redirects_tests"),
        d("requests"),
        d("requirements"),
        d("reserved_names"),
        d("resolve_url"),
        d("responses"),
        d("reverse_lookup"),
        d("save_delete_hooks"),
        d("schema"),
        d("select_for_update"),
        d("select_related"),
        d("select_related_onetoone"),
        d("select_related_regress"),
        c("serializers", [
          d("models"),
        ]),
        c("servers", [
          c("another_app", [
            c("static", [
              d("another_app"),
            ]),
          ]),
          d("fixtures"),
          d("media"),
          d("static"),
        ]),
        d("sessions_tests"),
        d("settings_tests"),
        c("shortcuts", [
          c("jinja2", [
            d("shortcuts"),
          ]),
          d("other_templates"),
          c("templates", [
            d("shortcuts"),
          ]),
        ]),
        d("signals"),
        d("signed_cookies_tests"),
        d("signing"),
        c("sitemaps_tests", [
          d("templates"),
          d("urls"),
        ]),
        c("sites_framework", [
          d("migrations"),
        ]),
        d("sites_tests"),
        c("staticfiles_tests", [
          c("apps", [
            c("no_label", [
              d("static"),
            ]),
            c("test", [
              d("otherdir"),
              c("static", [
                d("test"),
              ]),
            ]),
          ]),
          c("project", [
            c("documents", [
              c("cached", [
                c("css", [
                  d("fonts"),
                  d("img"),
                ]),
                d("img"),
              ]),
              d("subdir"),
              d("test"),
            ]),
            d("faulty"),
            d("prefixed"),
            c("site_media", [
              d("media"),
              d("static"),
            ]),
          ]),
          d("urls"),
        ]),
        d("str"),
        d("string_lookup"),
        d("swappable_models"),
        c("syndication_tests", [
          c("templates", [
            d("syndication"),
          ]),
        ]),
        c("template_backends", [
          c("apps", [
            c("good", [
              c("templatetags", [
                d("subpackage"),
              ]),
            ]),
            c("importerror", [
              d("templatetags"),
            ]),
          ]),
          c("forbidden", [
            d("template_backends"),
          ]),
          c("jinja2", [
            d("template_backends"),
          ]),
          c("template_strings", [
            d("template_backends"),
          ]),
          c("templates", [
            d("template_backends"),
          ]),
        ]),
        c("template_loader", [
          c("template_strings", [
            d("template_loader"),
          ]),
          c("templates", [
            d("template_loader"),
          ]),
        ]),
        c("template_tests", [
          d("eggs"),
          d("filter_tests"),
          c("jinja2", [
            d("template_tests"),
          ]),
          c("other_templates", [
            d("priority"),
          ]),
          c("recursive_templates", [
            d("fs"),
            d("fs2"),
            d("fs3"),
          ]),
          d("syntax_tests"),
          c("templates", [
            d("first"),
            d("priority"),
            d("second"),
            d("template_tests"),
          ]),
          c("templatetags", [
            d("subpackage"),
          ]),
        ]),
        c("templates", [
          d("comments"),
          d("custom_admin"),
          d("views"),
        ]),
        d("test_client"),
        c("test_client_regress", [
          d("bad_templates"),
          d("templates"),
        ]),
        c("test_discovery_sample", [
          d("tests"),
        ]),
        d("test_discovery_sample2"),
        d("test_exceptions"),
        d("test_runner"),
        d("test_runner_deprecation_app"),
        c("test_utils", [
          d("fixtures"),
          c("templates", [
            d("template_used"),
          ]),
        ]),
        d("timezones"),
        d("transaction_hooks"),
        d("transactions"),
        d("unmanaged_models"),
        d("update"),
        d("update_only_fields"),
        d("urlpatterns_reverse"),
        c("user_commands", [
          d("eggs"),
          c("management", [
            d("commands"),
          ]),
        ]),
        c("utils_tests", [
          d("archives"),
          d("eggs"),
          d("files"),
          c("locale", 'DELETED BECAUSE LOCALE'),
          d("test_module"),
        ]),
        d("validation"),
        d("validators"),
        d("version"),
        c("view_tests", 'DELETED BECAUSE LOCALE'),
        d("webdesign_tests"),
        d("wsgi"),
      ]),
    ]),
  ]
});
