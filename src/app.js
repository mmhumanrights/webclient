var humanright_app = angular.module('humanright_app', ['ngRoute','articleServices']);

humanright_app.factory('Page', function(){
  var title = 'default';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});