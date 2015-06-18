var express = require('express');
var fs = require('fs');
var app = express();
var _ = require('lodash'); // jshint ignore:line

app.set('view engine', 'ejs');
app.use(express['static']('.'));

var REJECTED_PROJECT_NAMES = ['discontinued', 'private'];

var projectsDirs, projects, files;

var setProjects = function() {
    projectsDirs = _.chain(fs.readdirSync('projects')).filter(function(project) {
        return fs.statSync('projects/' + project).isDirectory() &&
            REJECTED_PROJECT_NAMES.indexOf(project) < 0;
    }).value();
    projects = [];
    projectsDirs.forEach(function(projectsDir) {
        var sharedExists = false;
        files = fs.readdirSync('projects/' + projectsDir);

        files = _.chain(files).filter(function(file) {
            if (file === 'shared.js') sharedExists = true;
            return file.substr(-3) !== 'txt' && (file !== 'shared.js');
        }).map(function(file) {
            return file.substr(0, file.length - 3);
        }).value();

        projects.push({
            name: projectsDir,
            files: files,
            sharedExists: sharedExists
        });
    });
};
setProjects();

app.get('/', function(req, res) {
    setProjects();
    res.render('index', {
        projects: projects
    });
});

app.get('/:dir/:file', function(req, res) {
    var dir = req.params.dir,
        file = req.params.file,
        project = _.where(projects, {
            name: dir
        })[0];

    res.render('diagram', {
        dir: dir,
        file: file,
        sharedExists: project.sharedExists
    });
});

app.get('/:dir', function(req, res) {
    var dir = req.params.dir,
        originalDir = req.originalUrl.substr(1, req.originalUrl.length - 1),
        dirProject;

    if (projectsDirs.indexOf(originalDir) > -1) {
        setProjects();
        projects.forEach(function(project) {
            if (project.name === dir) dirProject = project;
        });

        res.render('project', {
            project: dirProject
        });
    }
});

app.listen(process.env.PORT || 8080);
