'use strict';
angular.module("demoApp", ['threeStateCheckbox'])
    .controller('mainCtrl', [function() {
        var mc = this;
        mc.log = function () {
            console.log(attributes);
        };
        mc.model = false;
        mc.onChange = function(){
            mc.log("value changed => ", mc.model);
        };
        mc.getStringModel = function(){
            return JSON.stringify(mc.model);
        }
    }]);
