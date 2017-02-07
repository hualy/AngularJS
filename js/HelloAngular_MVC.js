/**
 * Created by Administrator on 2017/2/7.
 */

// angular.module('helloAngularText',[])
//     .controller('HelloAngular',function ($scope) {
//         $scope.greeting = {
//             text:'hello'
//         };
//     });


//定义一个模块
var myModule = angular.module("helloAngularText",[]);
// 在模块上定义一个控制器（控制器名字,[注入参数，函数]）
myModule.controller("HelloAngular",['$scope',
    function HelloAngular($scope) {
        $scope.greeting = {
            text:'hello'
        };
    }
]);