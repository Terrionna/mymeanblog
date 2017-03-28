(function() {
  angular.module('mymeanblog')
          .controller('SignupController', SignupController);
  SignupController.$inject = ['$scope', 'UserService'];

  function SignupController($scope, UserService){
    $scope.newUser = {};
    $scope.signup = signup;

    function signup(user){
      UserService.signup(user)
                  .then(function(err){
                    console.log(err);
                    $scope.newUser.password = '';
                  });
    }
  }
}());
