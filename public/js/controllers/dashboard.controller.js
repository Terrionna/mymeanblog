(function() {
  angular.module('mymeanblog')
          .controller('DashboardController'. DashboardController);

DashboardController.$inject = ['$scope'];

function DashboardController($scope){
  $scope.edit = edit;
  $scope.delete = deletePost
  $scope.posts = [
    {
      _id:'525d2c5de2d1c5de2123d5',
      title: 'Some Title',
      body: 'Crappity crap craperson crappola stuffy crap',
      created: new Date(),
      updated: new Date()
    },
    {
      _id:'525d2c5de2d1c5de2123d5',
      title: 'Some Title',
      body: 'Crappity crap craperson crappola stuffy crap',
      created: new Date(),
      updated: new Date()
    },
  ]
  function edit(post){
    console.log('moving to the edit page')
  }
  function deletePost(post){
    console.log('Deleting the Post with _id of' + post._id)
  }
}
}());
