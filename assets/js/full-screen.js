define('full-screen', ['constants'], function(constants) {
  return function(diagram) {
    var trigger = d3.select('#diagram-fullscreen-trigger');

    if (document.fullscreenEnabled || document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled || document.msFullscreenEnabled) {

      trigger.on('click', function() {
        var SCREEN_CHANGE_EVENTS = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange".split(' ');
        var fullScreenOutListener;

        d3.event.preventDefault();

        var wrapper = document.getElementById(constants.diagramsWrapperId);

        if (wrapper.requestFullscreen) wrapper.requestFullscreen();
        else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
        else if (wrapper.mozRequestFullScreen) wrapper.mozRequestFullScreen();
        else if (wrapper.msRequestFullscreen) wrapper.msRequestFullscreen();

        diagram.reRender();
        wrapper.style.height = screen.height + 'px';

        fullScreenOutListener = function() {
          if (diagrams.svg.fullscreenElement() === null) {
            wrapper.style.height = null;
            diagram.reRender();
            _.each(SCREEN_CHANGE_EVENTS, function(event) {
              document.removeEventListener(event, fullScreenOutListener);
            });
          }
        };

        _.each(SCREEN_CHANGE_EVENTS, function(event) {
          document.addEventListener(event, fullScreenOutListener);
        });
      });
    } else trigger.remove();
  };
});
