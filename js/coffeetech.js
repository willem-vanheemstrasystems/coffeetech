//var GitHub = require('/github.js'); 

var mod = angular.module( 'coffeetech', []);

mod.controller( 'GithubCtrl', function( $scope ) {
  
  // token auth
  var gh = new GitHub({
    token: 'MY_OAUTH_TOKEN'
  });

  //var gh = new GitHub({});

  var yahoo = gh.getOrganization('yahoo');
    yahoo.getRepos(function(err, repos) {
     // look at all the repos!
     $scope.repo = repos;
     $scope.$apply();
  });
  
  //var github = new GitHub({});
  //var github = new GitHub({ token:'MY_OAUTH_TOKEN' });
//  var repo = github.getRepo( "gollum", "gollum" );
  
//  console.log("+++++++++++++++++++ repo:");
//  console.log(repo);
  
//  repo.show(function(err, repo) {
//    $scope.repo = repo;
//    $scope.$apply();
//  });
})
