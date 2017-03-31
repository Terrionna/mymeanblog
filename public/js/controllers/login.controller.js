(function() {
  angular.module('mymeanblog')
         .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'UserService', '$location'];

  function LoginController($scope, UserService, $locaation){
      $scope.user = {};
      $scope.login = login;

      function login(user){
        UserService.login(user)
                    .then(function(response){
                    $location.path('/dashboard');
                    })
                    .catch(function(err){
                      console.log(err);
                      $scope.user.password = '';
                    });
      }
  }
}());
