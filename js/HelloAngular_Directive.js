/**
 * Created by Administrator on 2017/2/7.
 */
var myModule = angular.module("MyModule",[]);
//调用directive方法（标签名称，函数）
myModule.directive("hello",function () {
    return {
        restrict:'E',
        //"hello"被替换为模板template
        template:'<div>Hi everyone!</div>',
        replace:true
    }
});