var humanright_app = angular.module('humanright_app', ['ngRoute','articleServices']);

humanright_app.factory('Page', function(){
  var title = 'default';
  var metatitle='default';
  var metadescription='description';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; },

    metatitle:function(){ return metatitle;},
    setMetaTitle:function(meta_title){metatitle=meta_title;},

    metadescription:function(){return metadescription;},
    setMetaDescription:function(meta_desc){metadescription=meta_desc;}


  };
});