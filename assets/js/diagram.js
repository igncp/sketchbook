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

  var setupConfigurationPanel = function() {
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
      panelIsHidden;

    trigger.on('click', function() {
      panelIsHidden = panel.style('display') === 'none';
      if (panelIsHidden) showPanel();
      else hidePanel();
    });

    hidePanel();
  };

  tooltip.onMouseEnterListenerFn = _.partial(tooltip, 'show');
  tooltip.onMouseLeaveListenerFn = _.partial(tooltip, 'hide');

  diagrams.events.listen('diagram-created', function(diagram) {
    setupConfigurationPanel();
    diagram.listen('mouseenter', function(item) {
      tooltip.onMouseEnterListenerFn(item.el, item.data.fullText);
      diagram.markRelatedItems(item.data);
    });
    diagram.listen('mouseleave', function() {
      tooltip.onMouseLeaveListenerFn();
      if (diagram.unmarkAllItems) diagram.unmarkAllItems();
    });
    diagram.listen('itemclick', function(item) {
      fillBannerWithText(item.data.fullText);
    });
  });
})();
