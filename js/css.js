/**
 * Created by Administrator on 2017/2/9.
 */
var myCSSModule = angular.module('MyCSSModule',[]);
myCSSModule.controller('CSSCtrl',function ($scope) {
    $scope.color = "red";
    $scope.setGreen = function () {
        $scope.color = "green";
    };
    $scope.setRed = function () {
        $scope.color = "red";
    }
});