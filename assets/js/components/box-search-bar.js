define('components/box-search-bar', [], function() {
  var rce = React.createElement,
    searchBarFactory = function(diagram) {
      var body = d3.select('body'),
        searchBarContainer = body.insert('div', 'svg').attr({
          id: 'box-search-bar-container'
        })[0][0],
        searchBar = React.createClass({
          render: function() {
            var bar = this,
              onChangeFnFactory = function(stateProp, eventTargetAttr) {
                return function(event) {
                  _.defer(function() { // Wait till the event loop finishes
                    var newState = {};
                    newState[stateProp] = event.target[eventTargetAttr];
                    bar.setState(newState);
                    diagram.filterByString(bar.state, diagram.diagramId);
                  });
                };
              },
              input = rce('input', {
                type: 'text',
                onChange: onChangeFnFactory('str', 'value')
              }),
              showChildrenCheck = rce('input', {
                type: 'checkbox',
                onChange: onChangeFnFactory('showChildren', 'checked')
              }),
              checks = rce('span', null, ' Show children of matches:', showChildrenCheck);

            return rce('div', null, rce('p', null, 'Filter by regex'), input, checks);
          },
          getInitialState: function() {
            return {
              str: '',
              showChildren: false
            };
          }
        });

      ReactDOM.render(rce(searchBar), searchBarContainer);
    };

  return searchBarFactory;
});
