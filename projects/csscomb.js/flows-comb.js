var nl = diagrams.layer.newLayer,
    nlc = diagrams.layer.newLayerConnectedToNext;

diagrams.layer(nl('csscomb.js dev branch comb flows', 'sna', [
    nl('csscomb FILE.css - Without any options', [
        nlc('Creates the comb: var comb = new Comb();', [
            nl("Gets and requires all the options: options = fs.readdirSync(__dirname + '/options')...")
        ]),
        nlc('Gets the passed options using minimist: var options = getOptions();'),
        nlc('Gets the configuration: var config = getConfig(options);', [
            nlc('Gets the default config path: var configPath = ... || Comb.getCustomConfigPath();'),
            nl('Applies the template to the config if it is present in the config: applyTemplate(config);')
        ]),
        nlc("Configures the comb: comb.configure(config);"),
        nl("Processes the combed files: processFiles(options._, config);", [
            nl("Uses vow to process the files: vow.all(files.map(comb.processPath.bind(comb))).then(..")
        ])
    ])
]));
