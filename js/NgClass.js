/**
 * Created by Administrator on 2017/2/9.
 */
var myCSSModule = angular.module('MyCSSModule',[]);
myCSSModule.controller('HeaderController',function ($scope) {
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.messageText = 'i am text';
    $scope.showError = function () {
        $scope.messageText = 'This is an error';
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning = function () {
        $scope.messageText = 'This is a warning';
        $scope.isError = false;
        $scope.isWarning = true;
    }
});