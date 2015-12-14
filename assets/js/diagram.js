require(['banner', 'tooltip', 'config-panel', 'components/box-search-bar', 'full-screen', 'constants'],
  function(banner, tooltip, configPanel, boxSearchBar, fullScreen, constants) {
    var SHOW_BANNER = 'Show banner on click',
      MR = { // Mark Related
        KEY: 'Mark related items',
        NONE: "Don't mark any related items",
        ALL: 'Mark all related items',
        DEPENDANTS: 'Mark just the dependants',
        DEPENDENCIES: 'Mark just the dependencies'
      },
      SHOW_TOOLTIP = 'Show tooltip';

    MR.DEFAULT = {
      value: 0,
      type: Number,
      possibleValues: [MR.NONE, MR.ALL, MR.DEPENDANTS, MR.DEPENDENCIES]
    };

    var setDefaultConfiguration = function(diagram) {
      diagram.configCheckingLocalStorage(SHOW_TOOLTIP, true);
      diagram.configCheckingLocalStorage(SHOW_BANNER, true);
      diagram.configCheckingLocalStorage(MR.KEY, MR.DEFAULT);
    };

    var handleMarkRelatedItems = function(diagram, item) {
      var indexValue = diagram.config(MR.KEY).value,
        textValue = MR.DEFAULT.possibleValues[indexValue],
        opts;

      if (textValue !== MR.NONE) {
        opts = {};
        if (textValue === MR.DEPENDANTS) opts.filter = 'dependants';
        else if (textValue === MR.DEPENDENCIES) opts.filter = 'dependencies';
        diagram.markRelatedItems(item.data, opts);
      }
    };

    diagrams.events.listen('diagram-created', function(diagram) {
      setDefaultConfiguration(diagram);
      configPanel(diagram);
      fullScreen(diagram);
      diagram.listen('mouseenter', function(item) {
        if (diagram.config(SHOW_TOOLTIP)) tooltip.onMouseEnterListenerFn(item.el, item.data.fullText);
        handleMarkRelatedItems(diagram, item);
      });
      diagram.listen('mouseleave', function() {
        tooltip.onMouseLeaveListenerFn();
        if (diagram.unmarkAllItems && diagram.config(MR.KEY)) diagram.unmarkAllItems();
      });
      diagram.listen('itemclick', function(item) {
        if (diagram.config(SHOW_BANNER) === true && item.data.relationships) banner.fillBanner(item, diagram);
      });
      diagram.listen('items-rendered', function() {
        banner.runFnMaintainingScrollDueBanner(function() {
          banner.removePreviousBanner();
        });
      });

      if (diagram.name === 'box') boxSearchBar(diagram);
    });

    diagrams.events.listen('diagram-to-transform', function(diagram) {
      diagram.dispose();
    });

    diagrams.diagramsWrapperSelector = constants.diagramsWrapperSelector;

    var requireDiagram = function() {
      require([sketchbook.diagramPath]);
    };
    if (sketchbook.sharedPath) {
      require([sketchbook.sharedPath], requireDiagram)
    } else requireDiagram();
  });
