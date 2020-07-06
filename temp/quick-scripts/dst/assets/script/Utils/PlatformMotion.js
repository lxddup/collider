
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Utils/PlatformMotion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f761EZmKhNLKJpUXTrb4fF', 'PlatformMotion');
// script/Utils/PlatformMotion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 10,
    distance: 200
  },
  // use this for initialization
  onLoad: function onLoad() {
    this._movedDistance = this.distance / 2;
    this._direction = 1;
    this._movedDiff = 0;
  },
  update: function update(dt) {
    var d = this.speed * this._direction * dt;
    this._movedDistance += Math.abs(d);

    if (this._movedDistance > this.distance) {
      d = this.distance - this._movedDistance;
      this._movedDistance = 0;
      this._direction *= -1;
    }

    this.node.x += d;
    this._movedDiff = d;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVXRpbHMvUGxhdGZvcm1Nb3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsImRpc3RhbmNlIiwib25Mb2FkIiwiX21vdmVkRGlzdGFuY2UiLCJfZGlyZWN0aW9uIiwiX21vdmVkRGlmZiIsInVwZGF0ZSIsImR0IiwiZCIsIk1hdGgiLCJhYnMiLCJub2RlIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRSxFQURDO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUZGLEdBSFA7QUFRTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsY0FBTCxHQUFzQixLQUFLRixRQUFMLEdBQWdCLENBQXRDO0FBQ0EsU0FBS0csVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSCxHQWJJO0FBZUxDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCLFFBQUlDLENBQUMsR0FBRyxLQUFLUixLQUFMLEdBQWEsS0FBS0ksVUFBbEIsR0FBK0JHLEVBQXZDO0FBRUEsU0FBS0osY0FBTCxJQUF1Qk0sSUFBSSxDQUFDQyxHQUFMLENBQVNGLENBQVQsQ0FBdkI7O0FBQ0EsUUFBSSxLQUFLTCxjQUFMLEdBQXNCLEtBQUtGLFFBQS9CLEVBQXlDO0FBQ3JDTyxNQUFBQSxDQUFDLEdBQUcsS0FBS1AsUUFBTCxHQUFnQixLQUFLRSxjQUF6QjtBQUNBLFdBQUtBLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxXQUFLQyxVQUFMLElBQW1CLENBQUMsQ0FBcEI7QUFDSDs7QUFFRCxTQUFLTyxJQUFMLENBQVVDLENBQVYsSUFBZUosQ0FBZjtBQUNBLFNBQUtILFVBQUwsR0FBa0JHLENBQWxCO0FBQ0g7QUEzQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BlZWQ6IDEwLFxuICAgICAgICBkaXN0YW5jZTogMjAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9tb3ZlZERpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAvIDI7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuX21vdmVkRGlmZiA9IDA7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIHZhciBkID0gdGhpcy5zcGVlZCAqIHRoaXMuX2RpcmVjdGlvbiAqIGR0O1xuXG4gICAgICAgIHRoaXMuX21vdmVkRGlzdGFuY2UgKz0gTWF0aC5hYnMoZCk7XG4gICAgICAgIGlmICh0aGlzLl9tb3ZlZERpc3RhbmNlID4gdGhpcy5kaXN0YW5jZSkge1xuICAgICAgICAgICAgZCA9IHRoaXMuZGlzdGFuY2UgLSB0aGlzLl9tb3ZlZERpc3RhbmNlO1xuICAgICAgICAgICAgdGhpcy5fbW92ZWREaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUueCArPSBkO1xuICAgICAgICB0aGlzLl9tb3ZlZERpZmYgPSBkO1xuICAgIH0sXG59KTtcbiJdfQ==