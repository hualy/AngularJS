/**
 * Created by Administrator on 2017/2/9.
 */
var ngShowModule = angular.module('NgShowModule',[]);
ngShowModule.controller('DeathrayMenuCtrl',function ($scope) {
    $scope.menuState = {hide:false};
    $scope.toggleMenu = function () {
        $scope.menuState.hide = !$scope.menuState.hide;
    }
});