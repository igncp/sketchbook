var express = require('express');
var fs = require('fs');
var app = express();
var _ = require('lodash'); // jshint ignore:line

app.set('view engine', 'ejs');
app.use(express['static']('.'));

var REJECTED_PROJECT_NAMES = ['discontinued', 'private'];

var getProjects = function() {
    var projects;

    projects = _.chain(fs.readdirSync('projects')).filter(function(project) {
        return fs.statSync('projects/' + project).isDirectory() &&
            REJECTED_PROJECT_NAMES.indexOf(project) < 0;
    }).value();

    return projects;
};

var getPathItems = function(projectName, pathRelativeToProject) {
    var items, isDiagram;

    if (pathRelativeToProject) pathRelativeToProject = pathRelativeToProject.replace(/^\//, '');

    items = fs.readdirSync('projects/' + projectName + '/' + pathRelativeToProject);

    return _.chain(items).filter(function(item) {
        return item.substr(-3) !== 'txt' && (item !== 'shared.js');
    }).map(function(item) {
        isDiagram = (item.substr(-3) === '.js') ? true : false;
        return {
            isDiagram: isDiagram,
            name: (isDiagram) ? item.substr(0, item.length - 3) : item
        };
    }).value();
};

var sharedOfProjectExists = function(projectName, cb) {
    fs.stat('projects/' + projectName + '/shared.js', function(err) {
        cb(!err);
    });
};

app.get('/', function(req, res) {
    var projects = getProjects();

    res.render('index', {
        projects: projects
    });
});

app.get('/:urlPath*', function(req, res) {
    var urlPath = req.originalUrl.replace(/^\//, ''),
        urlSegments = urlPath.split('/'),
        projectName = urlSegments[0],
        projects = getProjects(),
        pathRelativeToProject = urlPath.replace(projectName, ''),
        env = process.env.NODE_ENV,
        isDiagram;

    if (projects.indexOf(projectName) > -1) {
        fs.stat('projects/' + urlPath + '.js', function(err) {
            isDiagram = (err) ? false : true;

            if (isDiagram) {
                sharedOfProjectExists(projectName, function(sharedExistsResult) {
                    res.render('diagram', {
                        projectName: projectName,
                        currentPath: pathRelativeToProject,
                        diagramName: _.last(urlSegments),
                        sharedExists: sharedExistsResult,
                        diagramsFile: (env === 'production') ? 'diagrams.min' : 'diagrams'
                    });
                });
            } else {
                res.render('project', {
                    projectName: projectName,
                    currentPath: pathRelativeToProject,
                    items: getPathItems(projectName, pathRelativeToProject)
                });
            }
        });


    } else res.send('not found');
});

app.listen(process.env.PORT || 8080);
