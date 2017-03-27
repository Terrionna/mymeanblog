(function() {
  angular.module('mymeanblog')
         .controller('PostController', PostController);

PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockpost = {
      _id: "d5dsd12s420sx0sd2sd",
      title: "The Greatest Thing EVAAA",
      body: 'Lots of crappy craptopn crappity stiffy stuffy things that Stuff it',
      created: new Date(),
      updated: new Date()
    };
    function edit(post){
      console.log('editing the post');
    }
    function create(post){
      PostService.create(post);
    }
  }
}());
