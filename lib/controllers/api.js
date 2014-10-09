'use strict';

/**
 * Get some descriptions about technologies.
 */
exports.technologies = function(req, res) {
  res.json([
    {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.'
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.'
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.'
    }
  ]);
};

exports.developers = function(req, res) {
    res.json([
        {ci: 1, name: 'Roberto', age: 18, language: 'Java'},
        {ci: 2, name: 'Juan', age: 19, language: 'PHP'},
        {ci: 3, name: 'Maria', age: 20, language: 'Javascript'}
    ]);
};
