var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: 'tmTheme-Editor dev-commands',
    body: [
        d("postinstall", "`npm bin`/bower install"),
        d("start", "`npm bin`/coffee app/back/app.coffee"),
        d("prod", "NODE_ENV=production PORT=9090 `npm bin`/coffee app/back/app.coffee"),
        d("build", "`npm bin`/gulp"),
    ]
});
