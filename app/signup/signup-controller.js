(function(){
    angular.module('TimeWaste')
        .controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http){
            $scope.createUser = function(){
                $http.post('api/user/signup', $scope.newUser).then(function(response){
                    
                }).catch(function(error){
                    console.log(error);
                })
            }
        }]);
}());