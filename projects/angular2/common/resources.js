var d = diagrams.box.generateDefinition,
    l = diagrams.box.generateLink,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' resources',
    body: [
        l('Repository', "https://github.com/angular/angular"),
        l('Website', "https://angular.io/"),
        l('Stack Overflow Questions', 'http://stackoverflow.com/questions/tagged/angular2'),
        l('API documentation', "https://angular.io/docs/js/latest/api/"),
        l('Official resources', "https://angular.io/docs/js/latest/resources.html"),
        l('TypeScript website', 'http://www.typescriptlang.org/'),
        l('Dart website', 'https://www.dartlang.org/'),
        l('Curated list of Angular2 resources', 'http://angular2.com/'),
    ]
});