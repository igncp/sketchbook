define('config-panel', [], function() {
  var configPanel = function(diagram) {
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
            var optionEl = formEl.append('div').attr('class', 'col-lg-6 text-center'),
              configValue = diagram.config(configKey),
              elId = configKey.replace(/ /g, '-').toLowerCase(),
              inputEl, labelEl, subInputEl;

            if (_.isBoolean(configValue)) {
              labelEl = optionEl.append('div').attr({
                'class': 'btn-group',
                'data-toggle': 'buttons'
              }).append('label').attr({
                'for': elId,
                'class': 'checkbox-label btn btn-default'
              });

              inputEl = labelEl.append('input').attr({
                autocomplete: 'off',
                type: 'checkbox',
                id: elId
              });
              labelEl.append('span').text(configKey);

              if (configValue === true) {
                inputEl.property('checked', configValue);
                labelEl.classed('active', configValue);
              }

              inputEl.on('change', function() {
                diagram.config(configKey, inputEl.property('checked'));
                labelEl.classed('active', inputEl.property('checked'));
              });
            } else if (_.isObject(configValue) && configValue['private'] !== true) {
              if (_.isArray(configValue.possibleValues)) {
                inputEl = optionEl.append('select').attr({
                  id: elId
                });
                _.each(configValue.possibleValues, function(possibleValue, index) {
                  subInputEl = inputEl.append('option').text(possibleValue);
                  if (index === configValue.value) subInputEl.property('selected', true);
                });

                inputEl.on('change', function() {
                  configValue.value = configValue.possibleValues.indexOf(inputEl.node().value);
                  diagram.config(configKey, configValue);
                });
              }
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

  return configPanel;
});
