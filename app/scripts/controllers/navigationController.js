/**
 * Created by pvty on 4/4/14.
 */
app.controller('navigationController', function($scope, $location){
    $scope.isActived = function(currentPath){
        return $location.path()==currentPath;
    }
})