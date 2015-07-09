(function() {
  var fillBannerWithText = function(content) {
    var bannerId = 'diagrams-banner',
      previousBanner = d3.select('#' + bannerId),
      body = d3.select('body'),
      bannerEl, bannerHtml;

    if (previousBanner) previousBanner.remove();

    bannerHtml = '<div class="diagrams-banner-cross">&#x2715;</div>';
    bannerHtml += diagrams.utils.formatTextFragment(content);

    bannerEl = body.insert('div', 'svg').attr({
      id: bannerId
    }).html(bannerHtml);
    bannerEl.on('click', function() {
      bannerEl.remove();
    });
  };

  var tooltip = function(display, elementAbove, content) {
    var tooltipId = 'diagrams-tooltip',
      tooltip = d3.select('#' + tooltipId),
      tooltipStyle = '',
      bodyHeight = (function() {
        var body = document.body,
          html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      })(),
      highlightCodeIfAny = function() {
        content = diagrams.utils.formatTextFragment(content);
      },
      formatAndAddContent = function() {
        highlightCodeIfAny();
        tooltip.html(content);
      },
      tooltipHeight, tooltipTop, body, otherElementDims;

    if (content !== false) {
      if (tooltip[0][0] === null) {
        body = d3.select('body');
        tooltip = body.insert('div', 'svg').attr({
          id: tooltipId
        });
      }

      if (display === 'show') {
        tooltipStyle += 'display: inline-block; ';
        formatAndAddContent();

        if (typeof(elementAbove) === 'string') elementAbove = document.getElementById(elementAbove);
        else if (elementAbove[0][0].id) elementAbove = document.getElementById(elementAbove[0][0].id);
        else elementAbove = elementAbove[0][0];

        otherElementDims = elementAbove.getBoundingClientRect();

        tooltip.attr('style', tooltipStyle + '; opacity: 0');
        tooltipHeight = tooltip.node().getBoundingClientRect().height;

        tooltipTop = otherElementDims.top + otherElementDims.height + document.body.scrollTop + 20;
        if (tooltipTop + tooltipHeight > bodyHeight) {
          tooltipTop = otherElementDims.top + document.body.scrollTop - 20 - tooltipHeight;
          if (tooltipTop < 0) {
            tooltipTop = otherElementDims.top + otherElementDims.height + document.body.scrollTop - tooltipHeight;
          }
        }
        tooltipStyle += 'top: ' + tooltipTop + 'px; ';

      } else if (display === 'hide') tooltipStyle += 'display: none; ';

      tooltip.attr('style', tooltipStyle);
    }
  };

  tooltip.onMouseEnterListenerFn = _.partial(tooltip, 'show');
  tooltip.onMouseLeaveListenerFn = _.partial(tooltip, 'hide');

  var setupConfigurationPanel = function(diagram) {
    var panel = d3.select('#diagram-configuration-panel'),
      trigger = d3.select('#diagram-configuration-trigger'),
      hidePanel = function() {
        trigger.html('Show configuration &#x2193;');
        panel.style('display', 'none');
      },
      showPanel = function() {
        trigger.html('Hide configuration &#x2191;');
        panel.style('display', 'block');
      },
      buildPanel = function() {
        var buildFormItem = function(configKey) {
            var optionEl = formEl.append('div').attr('class', 'col-lg-6'),
              configValue = diagram.config(configKey),
              elId = configKey.replace(/ /g, '-').toLowerCase(),
              inputEl;

            if (_.isBoolean(configValue)) {
              optionEl.append('label').attr({
                'for': elId,
                'class': 'checkbox-label'
              }).text(configKey);
              inputEl = optionEl.append('input').attr({
                type: 'checkbox',
                id: elId
              }).property('checked', configValue);
              inputEl.on('change', function() {
                diagram.config(configKey, inputEl.property('checked'));
              });
            }
          },
          formEl;

        formEl = panel.append('form');
        for (var configKey in diagram.config()) {
          buildFormItem(configKey);
        }
      },
      panelIsHidden;

    buildPanel();
    trigger.on('click', function() {
      d3.event.preventDefault();
      panelIsHidden = (panel.style('display') === 'none');
      if (panelIsHidden) showPanel();
      else hidePanel();
    });
    hidePanel();
  };

  var SHOW_BANNER = 'Show banner on click',
    MARK_RELATED = 'Mark related items',
    SHOW_TOOLTIP = 'Show tooltip';

  var setDefaultConfiguration = function(diagram) {
    diagram.configCheckingLocalStorage(SHOW_TOOLTIP, true);
    diagram.configCheckingLocalStorage(SHOW_BANNER, true);
    diagram.configCheckingLocalStorage(MARK_RELATED, true);
  };

  diagrams.events.listen('diagram-created', function(diagram) {
    setDefaultConfiguration(diagram);
    setupConfigurationPanel(diagram);
    diagram.listen('mouseenter', function(item) {
      if (diagram.config(SHOW_TOOLTIP)) tooltip.onMouseEnterListenerFn(item.el, item.data.fullText);
      if (diagram.config(MARK_RELATED)) diagram.markRelatedItems(item.data);
    });
    diagram.listen('mouseleave', function() {
      tooltip.onMouseLeaveListenerFn();
      if (diagram.unmarkAllItems && diagram.config(MARK_RELATED)) diagram.unmarkAllItems();
    });
    diagram.listen('itemclick', function(item) {
      if (diagram.config(SHOW_BANNER) === true) fillBannerWithText(item.data.fullText);
    });
  });
})();
