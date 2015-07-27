(function() {
  var bannerId = 'diagrams-banner';

  var runFnMaintainingScrollDueBanner = function(fn) {
    var previousBanner = d3.select('#' + bannerId),
      currentBanner, previousBannerHeight, currentBannerHeight, currentScroll;

    currentScroll = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    if (previousBanner[0][0]) {
      previousBannerHeight = previousBanner[0][0].getBoundingClientRect().height;
    } else previousBannerHeight = 0;
    fn();
    currentBanner = d3.select('#' + bannerId);
    if (currentBanner[0][0]) {
      currentBannerHeight = currentBanner[0][0].getBoundingClientRect().height;
    } else currentBannerHeight = 0;

    window.scrollTo(0, currentScroll - (previousBannerHeight - currentBannerHeight + 10));
  };

  var removePreviousBanner = function() {
    var previousBanner = d3.select('#' + bannerId);
    if (previousBanner[0][0]) {
      previousBanner.remove();
    }
  };

  var fillBanner = function(item, diagram, scroll) {
    var body = d3.select('body'),
      content = item.data.fullText,
      relatedItems = diagram.getAllRelatedItemsOfItem(item.data),
      generateBreadcrumb = function() {
        var finalHtml = '',
          suffix;
        _.each(relatedItems.dependencies.reverse(), function(dependency, index) {
          suffix = (index !== relatedItems.dependencies.length - 1) ? ' &nbsp;<strong class="banner-breadcrumb-level-separator">&gt;&gt;&gt;</strong>&nbsp; ' : '';
          finalHtml += ' <strong class="banner-breadcrumb-level-number">[' + String(index + 1) + ']</strong> ' + (dependency.data.name || dependency.data.text) + suffix;
        });
        return finalHtml;
      },
      fillSiblingsVars = function() {
        if (item.data.relationships.dependencies.length > 0) {
          siblings = [];
          _.each(item.data.relationships.dependencies, function(dependency) {
            siblings = siblings.concat(dependency.data.relationships.dependants);
          });
          if (siblings.length === 1) siblings = null;
          else {
            var siblingDatas = _.pluck(siblings, 'data'),
              siblingsFullTexts = _.pluck(siblingDatas, 'fullText'),
              itemInSiblings = siblingsFullTexts.indexOf(item.data.fullText); // indexOf of the object is not detecting it

            if (itemInSiblings < (siblings.length - 1)) nextSibling = siblings[itemInSiblings + 1];
            else nextSibling = siblings[0];
          }
        }
      },
      getNextSiblingIntro = function() {
        return getIntro(nextSibling.data.fullText);
      },
      getFirstDependantIntro = function() {
        return getIntro(item.data.relationships.dependants[0].data.fullText);
      },
      getIntro = function(fullText) {
        var removeTags = function(text, tag) {
            var replaceText = function(regexp) {
              text = text.replace(new RegExp(regexp, 'ig'), '');
            };
            if (_.isArray(tag)) _.each(tag, function(tagItem) {
              text = removeTags(text, tagItem);
            });
            else {
              replaceText('<' + tag + '>');
              replaceText('</' + tag + '>');
            }
            return text;
          },
          intro = '<i>' + removeTags(fullText, ['strong', 'p', 'br']) + '</i>';
        return (intro.length > 20) ? intro.substr(0, 20) + '...' : intro;
      },
      bannerEl, bannerHtml, scrollElTop, currentScroll, siblings, nextSibling;

    fillSiblingsVars();
    runFnMaintainingScrollDueBanner(function() {
      removePreviousBanner();

      bannerHtml = '<div class="diagrams-banner-cross">&#x2715;</div>';
      bannerHtml += '<div class="diagrams-banner-breadcrumb">' + generateBreadcrumb() + '</div>';
      bannerHtml += diagrams.utils.formatTextFragment(content);
      bannerHtml += '<div class="diagrams-banner-footer">';
      bannerHtml += '<strong class="banner-footer-scroll">Scroll</strong> ';
      if (siblings) bannerHtml += '| <strong class="banner-footer-siblings">Show next sibling (of a total of ' + String(siblings.length) + '): ' + getNextSiblingIntro() + '</strong> ';
      if (item.data.relationships.dependants.length > 0) bannerHtml += '| <strong class="banner-footer-dependants">Show first child (of a total of' + String(item.data.relationships.dependants.length) + '): ' + getFirstDependantIntro() + '</strong> ';
      bannerHtml += '</div>';

      bannerEl = body.insert('div', 'svg').attr({
        id: bannerId
      }).html(bannerHtml);
    });
    bannerEl.select('.diagrams-banner-cross').on('click', function() {
      bannerEl.remove();
    });
    bannerEl.select('.banner-footer-siblings').on('click', function() {
      fillBanner(nextSibling, diagram);
    });
    bannerEl.select('.banner-footer-dependants').on('click', function() {
      fillBanner(item.data.relationships.dependants[0], diagram);
    });

    if (scrollElTop !== 0) {
      bannerEl.select('.banner-footer-scroll').on('click', function() {
        currentScroll = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        d3.event.stopPropagation();
        scrollElTop = item.el[0][0].getBoundingClientRect().top;
        window.scrollTo(0, scrollElTop + currentScroll);
      });
    }
    _.each(bannerEl.selectAll('.banner-breadcrumb-level-number')[0], function(el, index) {
      var levelNumberEl = d3.select(el);
      levelNumberEl.on('click', function() {
        fillBanner(relatedItems.dependencies[index], diagram);
      });
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

        panel.text('');
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
      if (diagram.config(SHOW_BANNER) === true) fillBanner(item, diagram);
    });
    diagram.listen('items-rendered', function() {
      runFnMaintainingScrollDueBanner(function() {
        removePreviousBanner();
      });
    });
  });
  diagrams.events.listen('diagram-to-transform', function(diagram) {
    diagram.dispose();
  });
})();
