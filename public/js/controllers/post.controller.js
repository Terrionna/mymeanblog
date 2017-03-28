(function() {
  angular.module('mymeanblog')
         .controller('PostController', PostController);

PostController.$inject = ['$scope', 'PostService', '$routeParams'];

  function PostController($scope, PostService, $routeParams){
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
      PostService.create(post);
    }
    function edit(post){
      PostService.edit(post);
    }
  }
}());
