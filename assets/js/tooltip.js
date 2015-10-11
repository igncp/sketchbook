define('tooltip', [], function() {
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

      if (display === 'show' && _.isUndefined(content) === false) {
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

      } else if (display === 'hide' || _.isUndefined(content) === true) tooltipStyle += 'display: none; ';

      tooltip.attr('style', tooltipStyle);
    }
  };

  tooltip.onMouseEnterListenerFn = _.partial(tooltip, 'show');
  tooltip.onMouseLeaveListenerFn = _.partial(tooltip, 'hide');

  return tooltip;
});
