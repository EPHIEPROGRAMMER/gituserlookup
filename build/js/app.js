(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "66a7791e0feec4280014c3c51256543b08334879"

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

// to show the time when the user has searched for the repositories

$(document).ready(function() {
  $('#time').text(moment());
});

},{"./../js/github.js":2}]},{},[3]);
