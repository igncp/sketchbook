var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' small snippets examples',
    body: [
        d('Set the class of an item dynamically', '<i *ng-for="#icon of icons" [class]="icon"></i> (where `icons` is an array of classes strings)')
    ]
});
