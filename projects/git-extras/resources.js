var d = diagrams.generateBoxDefinition,
    l = diagrams.generateBoxLink;

diagrams.box({
    name: 'git-extras resources',
    body: [
        l('Repo', "https://github.com/tj/git-extras"),
        l('Commands explanation', "https://github.com/tj/git-extras/blob/master/Commands.md"),
        l('colrm', "http://man7.org/linux/man-pages/man1/colrm.1.html"),
    ]
});