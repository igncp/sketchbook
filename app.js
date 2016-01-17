var express = require('express');
var fs = require('fs');
var app = express();
var _ = require('lodash'); // jshint ignore:line

app.set('view engine', 'ejs');
app.use(express['static']('.'));

var REJECTED_PROJECT_NAMES = ['discontinued'];

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

  try {
    items = fs.readdirSync('projects/' + projectName + '/' + pathRelativeToProject);
  } catch (e) {
    items = [];
  }

  return _.chain(items).filter(function(item) {
    return item.substr(-3) !== 'txt' && (item !== 'shared.js');
  }).map(function(item) {
    isDiagram = (item.substr(-3) === '.js') ? true : false;
    return {
      isDiagram: isDiagram,
      name: (isDiagram) ? item.substr(0, item.length - 3) : item
    };
  }).sort(function(itemA, itemB) {
    if (itemA.isDiagram !== itemB.isDiagram) return itemA.isDiagram;
    return itemA.name > itemB.name;
  }).value();
};

var getSharedFilesPaths = function(urlSegments, cb) {
  var sharedFilesPaths = [];
  var checksFinished = 0;
  var totalChecks = 0;
  var finishIfTotalChecksFinished = function() {
    checksFinished++;
    if (checksFinished === totalChecks) {
      cb(sharedFilesPaths);
    }
  };

  urlSegments.forEach(function(urlSegment, urlSegmentIndex) {
    var path = 'projects/' + urlSegments.slice(0, urlSegmentIndex + 1).join('/') + '/shared.js';
    totalChecks++;
    fs.stat(path, function(err) {
      var fileExists = !err;
      if (fileExists) sharedFilesPaths.push('/' + path);
      finishIfTotalChecksFinished();
    });
  });
  finishIfTotalChecksFinished();
};

app.get('/', function(req, res) {
  res.render('index', {
    projects: getProjects()
  });
});

app.get('/:urlPath*', function(req, res) {
  var urlPath = req.originalUrl.replace(/^\//, '').split('?')[0],
    urlSegments = urlPath.split('/'),
    projectName = urlSegments[0],
    projects = getProjects(),
    pathRelativeToProject = urlPath.replace(projectName, ''),
    isDiagram;

  if (projects.indexOf(projectName) > -1) {
    fs.stat('projects/' + urlPath + '.js', function(err) {
      isDiagram = (err) ? false : true;

      if (isDiagram) {
        getSharedFilesPaths(urlSegments, function(sharedFilesPaths) {
          res.render('diagram', {
            projectName: projectName,
            currentPath: pathRelativeToProject,
            diagramName: _.last(urlSegments),
            sharedFilesPaths: sharedFilesPaths.join(','),
            diagramsFile: (process.env.NODE_ENV === 'production') ? 'diagrams.min' : 'diagrams'
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

app.listen(process.env.PORT || 8081);
