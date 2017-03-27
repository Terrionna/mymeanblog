(function(){
  angular.module('mymeanblog')
          .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    scope.edit = edit;
    scope.delete = deletePost;
    scope.posts = [
      {
        _id: 'dhgds55d22s5d2c5s5d2ds'
        title: 'Some Title',
        body: 'thingdds and stuff and things and stuff and crap',
        created: new Date(),
        updated: new Date()

      }
    ]

    function edit(post){
      console.log('moving to the edit page');

    }
    funtion deletePost(post){
      console.log('deleting the post with _id of ' + post._id);
    }

  }
}());
