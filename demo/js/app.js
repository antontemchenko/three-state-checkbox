'use strict';
angular.module("demoApp", ['threeStateCheckbox'])
    .controller('mainCtrl', [function() {
        var mc = this;
        mc.model = false;
        mc.onChange = () => {
            console.log("value changed => ", mc.model);
        };
        mc.getStringModel = () => {
            return JSON.stringify(mc.model);
        }
    }]);
