## Three-state checkbox

AngularJS directive of three state checkbox. 

Useful for sorting. 

Default template: 'Material design'

___

## [DEMO](http://antontemchenko.github.io/three-state-checkbox/)

[![three-state-checkbox](https://camo.githubusercontent.com/d37cde77fd546f62119ccb00dfe3015f6a465768/687474703a2f2f626c6f676a732e6769746875622e696f2f7075626c69632f74687265652d73746174652d636865636b626f782e706e67)](http://antontemchenko.github.io/three-state-checkbox/)

___

## Getting Started

Installing package via **NPM**<br/>
![npm logo](http://blogjs.github.io/public/npm-logo.png)<br/>
`npm i angular-three-state-checkbox --save`

___

Installing package via **Bower** <br/><br/>
![bower logo](http://blogjs.github.io/public/bower-logo.svg)<br/><br/>
`bower install three-state-checkbox --save`

___

## How to use

* Include `three-state-checkbox.js` and `three-state-checkbox.css` to your _index.html_
* Add `threeStateCheckbox` as dependency to your angular module
* Use directive by adding `three-state-checkbox` as **attribute** to your element _(`<span>`)_
* `ng-model` **is required**
* You can use `ng-change` directive either

<!-- Pass your options as Object through options attribute-->
___

## Example 

    angular.module("myApp", ["threeStateCheckbox"])
        .controller("myCtrl",[function(){
            this.checkboxModel = null;
            this.onChange = function(){
                console.log("changed");
            }
        }]);
<!-- -->

    <body ng-app="myApp" ng-controller="myCtrl as mc">
        <span three-state-checkbox ng-model="mc.checkboxModel" ng-change="mc.onChange()"></span>
    </body>
    
___

## License

[MIT](/LICENSE)
