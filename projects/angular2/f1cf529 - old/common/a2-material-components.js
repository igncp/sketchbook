var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' material components',
    body: [
        d('button'),
        d('checkbox'),
        d('dialog'),
        d('grid_list'),
        d('input'),
        d('progress-circular'),
        d('progress-linear'),
        d('radio'),
        d('switcher'),
    ]
});
