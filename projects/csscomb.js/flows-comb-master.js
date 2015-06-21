var nl = diagrams.layer.newLayer,
    nlc = function() {
        var args = arguments.length;

        return (args === 1) ? nl(arguments[0], 'cn') :
            nl(arguments[0], 'cn', arguments[1]);
    },
    e = diagrams.layer.extendOpts;

diagrams.layer(nl('csscomb.js master branch comb flows', [
    nl('csscomb FILE.css - Without options', [
        nlc('Creates the comb: var comb = new Comb();', [
            nl("Gets and requires all the options: options = fs.readdirSync(__dirname + '/options')...")
        ]),
        nlc('Sets the default config path: var configPath = ... || Comb.getCustomConfigPath();'),
        nlc("Measures the time spent: console.time('spent');"),
        nlc("Configures the comb: comb.configure(config);"),
        nl("Applies each command option with a promise: vow.all(program.args.map(comb.processPath.bind(comb))).then(...")
    ])
]));
