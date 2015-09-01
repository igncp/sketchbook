var l = diagrams.box.generateLink,
c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' resources',
    body: [
        l('Repository', "https://github.com/facebook/react"),
        l('Website', "https://facebook.github.io/react/"),
        l('Guides', "https://facebook.github.io/react/docs/getting-started.html"),
        l('Fiddle', "https://jsfiddle.net/reactjs/69z2wepo/"),
        l('Useful gists', "https://gist.github.com/sebmarkbage"),
        c('posts', [
          l('Component vs Element', 'https://quickleft.com/blog/understanding-the-difference-between-react-elements-and-components/')
        ])
    ]
});