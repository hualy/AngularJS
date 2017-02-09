/**
 * Created by Administrator on 2017/2/8.
 */
var userInfoModule = angular.module("UserInfoModule",[]);
userInfoModule.controller('UserInfoCtrl',function ($scope) {
    $scope.userInfo={
        email:"23454@qq.com",
        password:"123456",
        autoLogin:true
    };
    $scope.getFormData = function () {
        // console.log($scope.userInfo);
        alert($scope.userInfo.email+','+$scope.userInfo.password+','+$scope.userInfo.autoLogin);
    };
    $scope.setFormData = function () {
        $scope.userInfo = {
            email:'kdlsjflsd@126.com',
            password:'kdjfk',
            autoLogin:false
        }
    };
    $scope.restForm = function () {
        $scope.userInfo={
            email:"23454@qq.com",
            password:"123456",
            autoLogin:true
        }
    };
});