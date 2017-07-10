(function(){
    angular.module('TimeWaste')
    .controller('NavigationController', ['$scope', '$http', '$state', function($scope, $http, $state){
        $scope.logUserIn = function(){
            $http.post('api/user/login', $scope.login).then(function(response){
                localStorage.setItem('User-Data', JSON.stringify(response));
            }).catch(function(error){
                console.log(error);
            });
        };
    }]);
}());