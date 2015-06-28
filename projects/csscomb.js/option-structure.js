var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: 'csscomb.js option structure',
    body: [
        d("name", "Name of the option. e.g.: name: 'block-indent'"),
        d("runBefore", "Run before other option, e.g.: runBefore: 'sort-order',"),
        d("syntax", "Syntax where applied, e.g.: syntax: ['css', 'less', 'sass', 'scss']"),
        d("accepts", "Object containing types or regexes of values for the option, e.g.: accepts: {number: true}"),
        d("process", "Function called to process the AST: process: function process(ast) {"),
        d("detect", "Function called if requested by argument to generate a config file based on a template file"),
        d("lint", "Function called if requested to show errors"),
        d("CUSTOM_FUNCTION1", "Function callable with this.CUSTOM_FUNCTION from standard functions like process"),
    ]
});
