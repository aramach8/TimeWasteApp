(function(){
    angular.module('TimeWaste')
    .controller('EditProfileController', ['Upload', '$scope', '$state', '$http', function(Upload, $scope, $state, $http){
        
        //$scope.user = JSON.parse(localStorage['User-Data']) || undefined;
        $scope.user = JSON.parse(localStorage.getItem('User-Data')) || undefined;
        
        $scope.$watch(function(){
            return $scope.file;
        }, function(){
            $scope.upload($scope.file);
        });
        
        $scope.upload = function(file){
            if(file){
                Upload.upload({
                    url: 'api/profile/editPhoto',
                    method: 'POST',
                    data: {userId: $scope.user._id},
                    file: file
                }).progress(function(evt){
                    console.log("firing");
                }).success(function(data){
                    console.log("complete");
                }).error(function(err){
                    console.log(err);
                })
            }
        };
        
        $scope.updateUserName = function() {
            var request = {
                userId: $scope.user._id,
                username: $scope.user.username
            };
            $http.post('api/profile/editUserName', request).then(function(response){
                console.log("username Success");
            }).catch(function(error){
                 console.log("username Error");
            });
        };
        
        $scope.updateBio = function() {
            var request = {
                userId: $scope.user._id,
                bio: $scope.user.bio
            };
            $http.post('api/profile/editBio', request).then(function(response){
                 console.log("bio Success");
            }).catch(function(error){
                console.log("bio Error");
            });
        }
    }]);
}());