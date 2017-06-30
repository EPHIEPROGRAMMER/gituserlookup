// this is for export//
var Repos = require('./../js/github.js').reposModule;

//this is a code used to display user within the website//
var displayUser = function(user) {
  // users.forEach(function(user) {
  $('ul#userPic').empty();
  $('ul#userPic').append("<li>" + user.name + "</li > ");
  // });
};

//this is a code used to display repos within the website//
var displayData = function(repos) {
  $('ul#repoLink').empty();
  repos.forEach(function(repo) {
    $('ul#repoLink').append("<li><a href='" + repo.html_url + "'>" + repo.name + "</a>: " + repo.description + "; created on " + repo.created_at + "</li > ");
  });
};

// front-end part for getting users and repos details//
$(document).ready(function() {
  var searchUsers = new Repos();
  $('#searchUser').click(function() {
    //get input value
    var name = $('#userName').val();
    // $('#userPic').val("");
    console.log(name);
    searchUsers.getUser(name, displayUser);
    searchUsers.getRepos(name, displayData);
  });
});
              // EPHIE PROGRAMMER
