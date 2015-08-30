var l = diagrams.box.generateLink,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' resources',
    body: [
        l('Repository', "https://github.com/facebook/react"),
        l('Website', "https://facebook.github.io/react/"),
        l('Guides', "https://facebook.github.io/react/docs/getting-started.html"),
        l('Fiddle', "https://jsfiddle.net/reactjs/69z2wepo/"),
    ]
});