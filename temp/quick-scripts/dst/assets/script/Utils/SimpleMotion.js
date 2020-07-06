
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Utils/SimpleMotion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fde33rWt81MvZWO7QQ3jv3j', 'SimpleMotion');
// script/Utils/SimpleMotion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    moveSpeed: 0,
    rotationSpeed: 0
  },
  // use this for initialization
  onLoad: function onLoad() {},
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    this.node.x += dt * this.moveSpeed;
    this.node.angle += dt * this.rotationSpeed;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVXRpbHMvU2ltcGxlTW90aW9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW92ZVNwZWVkIiwicm90YXRpb25TcGVlZCIsIm9uTG9hZCIsInVwZGF0ZSIsImR0Iiwibm9kZSIsIngiLCJhbmdsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRSxDQURIO0FBRVJDLElBQUFBLGFBQWEsRUFBRTtBQUZQLEdBSFA7QUFRTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFbkIsQ0FYSTtBQWFMO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCLFNBQUtDLElBQUwsQ0FBVUMsQ0FBVixJQUFlRixFQUFFLEdBQUcsS0FBS0osU0FBekI7QUFDQSxTQUFLSyxJQUFMLENBQVVFLEtBQVYsSUFBbUJILEVBQUUsR0FBRyxLQUFLSCxhQUE3QjtBQUNIO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1vdmVTcGVlZDogMCxcbiAgICAgICAgcm90YXRpb25TcGVlZDogMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIHRoaXMubm9kZS54ICs9IGR0ICogdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSArPSBkdCAqIHRoaXMucm90YXRpb25TcGVlZDtcbiAgICB9LFxufSk7XG4iXX0=