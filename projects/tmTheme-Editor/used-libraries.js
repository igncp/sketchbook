var d = diagrams.box.generateDefinition,
    ds = function(lib) {
        return d(lib, s('libraries-' + lib));
    },
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: 'tmTheme-Editor libraries used',
    body: [
        c('npm', [
            c('dependencies', [
                'bower',
                'coffee-script',
                d('compression', "Node.js compression middleware"),
                'connect-assets',
                'cookie-parser',
                'express',
                'express-session',
                'less',
                d('method-override', "Override HTTP verbs. Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."),
                ds('mincer'),
                'ng-templatecache',
                'request',
                ds('sugar'),
                'uglify-js',
                d('body-parser', "Node.js body parsing middleware"),
                d('csswring', "Minify CSS file with source maps. That's it."),
                d('ect', "CoffeeScript template engine"),
                d('errorhandler', "Development-only error handler middleware for express.js"),
                d('morgan', "HTTP request logger middleware for node.js"),
            ]),
            c('dev-dependencies', [
                'gulp',
                'gulp-clean',
                'gulp-concat',
                d('gulp-ext-replace', "Small gulp plugin to change a file's extension"),
                d('gulp-initial-cleaning', "Remove folders before starting tasks"),
                'gulp-minify-css',
                'gulp-minify-html',
                'gulp-remote-src',
                'gulp-uglify',
                'gulp-mincer',
            ])
        ]),
        c('bower', [
            'angular',
            'angular-bootstrap',
            'angular-sanitize',
            'angular-ui-router',
            d('angular-ui-sortable', "AngularJS bindings for jQuery UI Sortable. This directive allows you to sort an array with drag & drop."),
            'bootstrap',
            'jquery',
            'jquery-ui',
            'spin.js',
            d('angular-strap', "AngularStrap is a set of native directives that enables seamless integration of Bootstrap 3.0+ into your AngularJS 1.2+ app."),
            d('FileSaver', "An HTML5 saveAs() FileSaver implementation"),
            d('jquery.cookie', "A simple, lightweight jQuery plugin for reading, writing and deleting cookies"),
            d('jquery.scrollintoview', "Query plugin to smoothly scroll elements into view."),
            ds('sugar'),
            d('tinycolor', "Fast, small color manipulation and conversion for JavaScript"),
        ])
    ]
});
