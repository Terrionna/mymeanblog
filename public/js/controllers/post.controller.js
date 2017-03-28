(function() {
  angular.module('mymeanblog')
          .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService', '$routeParams'];

  function PostController($scope, PostService, $routeParams){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: '121d2s1d2c02sd12gfdsd0s2',
      title: 'The Greatest Thing That EVA Was',
      body: 'All the stuff of the things that will ever stuff a stiff thing because of stuff',
      created: new Date(),
      updated: new Date()
    };

    var id = $routeParams.postId;
    PostService.getone(id)
                .then(function(){
                  console.log('Success');
                })
                .catch(function(){
                  console.log(error);
                })
    function edit(post){
    PostService.getone(post);
   }
    function create(post){
    PostService.create(post);
   }
  }
}());
