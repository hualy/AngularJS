/**
 * Created by Administrator on 2017/2/8.
 */
//定义一个模块
var myModule = angular.module("ScopeTest",[]);
// 在模块上定义一个控制器（控制器名字,[注入参数，函数]）
myModule.controller("GreetCtrl",function ($scope,$rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'Angular';
});
myModule.controller('ListCtrl',function ($scope) {
    $scope.names = ['hualy','misko','vojta'];
});