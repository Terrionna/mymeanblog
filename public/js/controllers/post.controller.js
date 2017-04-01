(function() {
  angular.module('mymeanblog')
         .controller('PostController', PostController);

PostController.$inject = ['$scope', 'PostService', '$routeParams', 'UserService', '$location'];

  function PostController($scope, PostService, $routeParams, UserService, $location){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockpost = {
      _id: "d5dsd12s420sx0sd2sd",
      title: "The Greatest Thing EVAAA",
      body: 'Lots of crappy craptopn crappity stiffy stuffy things that Stuff it',
      created: new Date(),
      updated: new Date()
    };
    var id = $routeParams.postId
    PostService.getOne(id)
               .then(function(){
                 console.log('Success');
               })
               .catch(function(){
                 console.log('error');
               });
    function create(post){
     var userId = UserService.currentUser()._id;
     console.log(userId);
     post.author = userId;
     PostService.create(post)
                .then(function(){
                  $location.path('/dashboard');
                })
                .catch(function(err){
                  console.log(err)
                })
    }
    function edit(post){
      PostService.edit(post);
    }
  }
}());
