'use strict';
angular.module("demoApp", ['threeStateCheckbox'])
    .controller('mainCtrl', [function() {
        var mc = this;
        mc.log = function () {
            console.log(attributes);
        };
        mc.model = false;
        mc.onChange = function(){
            console.log("a");
        };
        mc.getStringModel = function(){
            return JSON.stringify(mc.model);
        }
    }]);