//used to access the apiKey
var apiKey = require('./../.env').apiKey;


// This is a function created to enhance repo access to the prototype//
Repos = function() {

};
// This is a prototype to enable user access/
Repos.prototype.getUser = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(users) {
    displayFunction(users);
  }).fail(function(error) {
    $('.showUser').text("<h2> " + name + "</h2>" + " is " + error.responseJSON.message + "." +
      "ENTER A VALID USERNAME");
  });
};
// This is a prototype to enable the repository access //
Repos.prototype.getRepos = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(repos) {
    displayFunction(repos);
  }).fail(function(error) {
    $('.showUser').text("NO REPOSITORY FOUND FOR" + name + " is " + error.responseJSON.message + "." +
      "ENTER A VALID USERNAME");
  });
};

//used for exports.getRepos = Repos;
exports.reposModule = Repos;

       // EPHIE PROGRAMMER
