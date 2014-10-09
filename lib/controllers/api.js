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