define('banner', [], function() {
  var banner = {};

  banner.BANNER_ID = 'diagrams-banner';

  banner.runFnMaintainingScrollDueBanner = function(fn) {
    var previousBanner = d3.select('#' + banner.BANNER_ID),
      currentBanner, previousBannerHeight, currentBannerHeight, currentScroll;

    currentScroll = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    if (previousBanner[0][0]) {
      previousBannerHeight = previousBanner[0][0].getBoundingClientRect().height;
    } else previousBannerHeight = 0;
    fn();
    currentBanner = d3.select('#' + banner.BANNER_ID);
    if (currentBanner[0][0]) {
      currentBannerHeight = currentBanner[0][0].getBoundingClientRect().height;
    } else currentBannerHeight = 0;

    window.scrollTo(0, currentScroll - (previousBannerHeight - currentBannerHeight + 10));
  };

  banner.removePreviousBanner = function() {
    var previousBanner = d3.select('#' + banner.BANNER_ID);
    if (previousBanner[0][0]) {
      previousBanner.remove();
    }
  };

  banner.fillBanner = function(item, diagram) {
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
            siblings = dependency.data.relationships ? siblings.concat(dependency.data.relationships.dependants) : siblings;
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
    banner.runFnMaintainingScrollDueBanner(function() {
      banner.removePreviousBanner();

      bannerHtml = '<div class="diagrams-banner-cross">&#x2715;</div>';
      bannerHtml += '<div class="diagrams-banner-breadcrumb">' + generateBreadcrumb() + '</div>';
      bannerHtml += diagrams.utils.formatTextFragment(content);
      bannerHtml += '<div class="diagrams-banner-footer">';
      bannerHtml += '<strong class="banner-footer-scroll">Scroll</strong> ';
      if (siblings) bannerHtml += '| <strong class="banner-footer-siblings">Show next sibling (of a total of ' + String(siblings.length) + '): ' + getNextSiblingIntro() + '</strong> ';
      if (item.data.relationships.dependants.length > 0) bannerHtml += '| <strong class="banner-footer-dependants">Show first child (of a total of' + String(item.data.relationships.dependants.length) + '): ' + getFirstDependantIntro() + '</strong> ';
      bannerHtml += '</div>';

      bannerEl = diagrams.svg.insertInBodyBeforeSvg('div').attr({
        id: banner.BANNER_ID
      }).html(bannerHtml);
    });
    bannerEl.select('.diagrams-banner-cross').on('click', function() {
      bannerEl.remove();
    });
    bannerEl.select('.banner-footer-siblings').on('click', function() {
      banner.fillBanner(nextSibling, diagram);
    });
    bannerEl.select('.banner-footer-dependants').on('click', function() {
      banner.fillBanner(item.data.relationships.dependants[0], diagram);
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
        banner.fillBanner(relatedItems.dependencies[index], diagram);
      });
    });
  };

  return banner;
});
