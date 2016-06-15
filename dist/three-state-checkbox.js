'use strict';
angular.module("threeStateCheckbox", [])
    .directive("threeStateCheckbox", ['$compile', function($compile){
        var dirObj = {
            restrict: "A",
            transclude: true,
            require: ['ngModel'],
            scope: {
                'options': "@options",
                'ngChange': "&ngChange",
                'ngModel': "=ngModel"
            },
            template:'<span class="tsc-b tsc-b-t"></span>'+
                    '<span class="tsc-b tsc-b-l"></span>'+
                    '<span class="tsc-b tsc-b-r"></span>'+
                    '<span class="tsc-b tsc-b-b"></span>',
            link: function(scope, element, attr){
                config.set(scope.options);
                var states = [true, false, null];
                var classNames = ["checked", "unchecked", "clear"];
                scope.click = function(){
                    var st;
                    states.map(function(val, i){
                        if(scope.ngModel === val){
                            st = states[(i+1)%3];
                        }
                    });
                    scope.ngModel = st;
                    scope.ngChange();
                };
                scope.tscClassName = function(){
                    var className;
                    states.map(function(val, i){
                        if(scope.ngModel === val){
                            className = classNames[i];
                        }
                    });
                    return className;
                };
                element.attr("class", "tri-sta-che " + config.opts.size);
                element.attr("ng-click", "click()");
                element.attr("ng-class", "tscClassName()");
                element.removeAttr("three-state-checkbox");
                element.removeAttr("options");
                $compile(element)(scope);
            }
        };
        var config = {
            opts: {
                size: 'md'
            },
            set: function(options){
                if(options){
                    for(var key in options){
                        this.opts[key] = options[key];
                    }
                }
            }
        };
        return dirObj;
    }]);