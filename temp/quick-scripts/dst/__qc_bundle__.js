
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Utils/ColliderListener');
require('./assets/script/Utils/PlatformMotion');
require('./assets/script/Utils/SimpleMotion');
require('./assets/script/Utils/Wall');
require('./assets/script/follow');
require('./assets/script/heroControl');
require('./assets/script/hitSet');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hitSet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96c9c4THkdJtoUZ1jeBanxb', 'hitSet');
// script/hitSet.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    collider: {
      "default": null,
      type: cc.PolygonCollider
    },
    title: {
      "default": null,
      type: cc.Label
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true; // cc.director.getCollisionManager().enabledDrawBoundingBox = true;

    this.title.string = 'normal'; // this.touchingNumber = 0;

    this.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
      var touchLoc = touch.getLocation();

      if (cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points)) {
        this.title.string = 'Hit';
      } else {
        this.title.string = 'Not hit';
      }
    }, this);
    console.log(this.collider.world);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvaGl0U2V0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29sbGlkZXIiLCJ0eXBlIiwiUG9seWdvbkNvbGxpZGVyIiwidGl0bGUiLCJMYWJlbCIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJlbmFibGVkRGVidWdEcmF3Iiwic3RyaW5nIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2giLCJldmVudCIsInRvdWNoTG9jIiwiZ2V0TG9jYXRpb24iLCJJbnRlcnNlY3Rpb24iLCJwb2ludEluUG9seWdvbiIsIndvcmxkIiwicG9pbnRzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERjtBQU1SQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZOO0FBTkMsR0FIUDtBQWNMO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQlQsSUFBQUEsRUFBRSxDQUFDVSxRQUFILENBQVlDLG1CQUFaLEdBQWtDQyxPQUFsQyxHQUE0QyxJQUE1QztBQUNBWixJQUFBQSxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NFLGdCQUFsQyxHQUFxRCxJQUFyRCxDQUhnQixDQUloQjs7QUFDQSxTQUFLTixLQUFMLENBQVdPLE1BQVgsR0FBb0IsUUFBcEIsQ0FMZ0IsQ0FNaEI7O0FBRUEsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFoQixFQUFFLENBQUNpQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ2hFLFVBQUlDLFFBQVEsR0FBR0YsS0FBSyxDQUFDRyxXQUFOLEVBQWY7O0FBQ0EsVUFBSXZCLEVBQUUsQ0FBQ3dCLFlBQUgsQ0FBZ0JDLGNBQWhCLENBQStCSCxRQUEvQixFQUF5QyxLQUFLbEIsUUFBTCxDQUFjc0IsS0FBZCxDQUFvQkMsTUFBN0QsQ0FBSixFQUEwRTtBQUN0RSxhQUFLcEIsS0FBTCxDQUFXTyxNQUFYLEdBQW9CLEtBQXBCO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBS1AsS0FBTCxDQUFXTyxNQUFYLEdBQW9CLFNBQXBCO0FBQ0g7QUFDSixLQVJELEVBUUcsSUFSSDtBQVdBYyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxLQUFLekIsUUFBTCxDQUFjc0IsS0FBM0I7QUFDSDtBQW5DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb2xsaWRlcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlBvbHlnb25Db2xsaWRlclxuICAgICAgICB9LFxuXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSAnbm9ybWFsJztcbiAgICAgICAgLy8gdGhpcy50b3VjaGluZ051bWJlciA9IDA7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAodG91Y2gsIGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hMb2MgPSB0b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbih0b3VjaExvYywgdGhpcy5jb2xsaWRlci53b3JsZC5wb2ludHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSAnSGl0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gJ05vdCBoaXQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmNvbGxpZGVyLndvcmxkKVxuICAgIH1cbn0pO1xuXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Utils/Wall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a279oXNoxFFI516fswAbVo', 'Wall');
// script/Utils/Wall.js

"use strict";

var WallType = cc.Enum({
  Left: 0,
  Right: 1,
  Top: 2,
  Bottom: 3
});
cc.Class({
  "extends": cc.Component,
  properties: {
    type: {
      "default": WallType.Left,
      type: WallType
    },
    width: 5
  },
  // use this for initialization
  start: function start() {
    var collider = this.getComponent(cc.BoxCollider);

    if (!collider) {
      return;
    }

    var node = this.node;
    var type = this.type;
    var width = cc.winSize.width;
    var height = cc.winSize.height;
    var wallWidth = this.width;

    if (type === WallType.Left) {
      node.height = height;
      node.width = wallWidth;
      node.x = 0;
      node.y = height / 2;
    } else if (type === WallType.Right) {
      node.height = height;
      node.width = wallWidth;
      node.x = width;
      node.y = height / 2;
    } else if (type === WallType.Top) {
      node.width = width;
      node.height = wallWidth;
      node.x = width / 2;
      node.y = height;
    } else if (type === WallType.Bottom) {
      node.width = width;
      node.height = wallWidth;
      node.x = width / 2;
      node.y = 0;
    }

    collider.size = node.getContentSize();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVXRpbHMvV2FsbC5qcyJdLCJuYW1lcyI6WyJXYWxsVHlwZSIsImNjIiwiRW51bSIsIkxlZnQiLCJSaWdodCIsIlRvcCIsIkJvdHRvbSIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJ3aWR0aCIsInN0YXJ0IiwiY29sbGlkZXIiLCJnZXRDb21wb25lbnQiLCJCb3hDb2xsaWRlciIsIm5vZGUiLCJ3aW5TaXplIiwiaGVpZ2h0Iiwid2FsbFdpZHRoIiwieCIsInkiLCJzaXplIiwiZ2V0Q29udGVudFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNwQkMsRUFBQUEsSUFBSSxFQUFFLENBRGM7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxDQUZhO0FBR3BCQyxFQUFBQSxHQUFHLEVBQUUsQ0FIZTtBQUlwQkMsRUFBQUEsTUFBTSxFQUFFO0FBSlksQ0FBUixDQUFmO0FBT0FMLEVBQUUsQ0FBQ00sS0FBSCxDQUFTO0FBQ0wsYUFBU04sRUFBRSxDQUFDTyxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBU1YsUUFBUSxDQUFDRyxJQURoQjtBQUVGTyxNQUFBQSxJQUFJLEVBQUVWO0FBRkosS0FERTtBQU1SVyxJQUFBQSxLQUFLLEVBQUU7QUFOQyxHQUhQO0FBWUw7QUFDQUMsRUFBQUEsS0FBSyxFQUFFLGlCQUFZO0FBQ2YsUUFBSUMsUUFBUSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JiLEVBQUUsQ0FBQ2MsV0FBckIsQ0FBZjs7QUFDQSxRQUFJLENBQUNGLFFBQUwsRUFBZTtBQUNYO0FBQ0g7O0FBRUQsUUFBSUcsSUFBSSxHQUFHLEtBQUtBLElBQWhCO0FBQ0EsUUFBSU4sSUFBSSxHQUFHLEtBQUtBLElBQWhCO0FBRUEsUUFBSUMsS0FBSyxHQUFHVixFQUFFLENBQUNnQixPQUFILENBQVdOLEtBQXZCO0FBQ0EsUUFBSU8sTUFBTSxHQUFHakIsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXQyxNQUF4QjtBQUVBLFFBQUlDLFNBQVMsR0FBRyxLQUFLUixLQUFyQjs7QUFFQSxRQUFJRCxJQUFJLEtBQUtWLFFBQVEsQ0FBQ0csSUFBdEIsRUFBNEI7QUFDeEJhLE1BQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjQSxNQUFkO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0wsS0FBTCxHQUFhUSxTQUFiO0FBQ0FILE1BQUFBLElBQUksQ0FBQ0ksQ0FBTCxHQUFTLENBQVQ7QUFDQUosTUFBQUEsSUFBSSxDQUFDSyxDQUFMLEdBQVNILE1BQU0sR0FBQyxDQUFoQjtBQUNILEtBTEQsTUFNSyxJQUFJUixJQUFJLEtBQUtWLFFBQVEsQ0FBQ0ksS0FBdEIsRUFBNkI7QUFDOUJZLE1BQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjQSxNQUFkO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0wsS0FBTCxHQUFhUSxTQUFiO0FBQ0FILE1BQUFBLElBQUksQ0FBQ0ksQ0FBTCxHQUFTVCxLQUFUO0FBQ0FLLE1BQUFBLElBQUksQ0FBQ0ssQ0FBTCxHQUFTSCxNQUFNLEdBQUMsQ0FBaEI7QUFDSCxLQUxJLE1BTUEsSUFBSVIsSUFBSSxLQUFLVixRQUFRLENBQUNLLEdBQXRCLEVBQTJCO0FBQzVCVyxNQUFBQSxJQUFJLENBQUNMLEtBQUwsR0FBYUEsS0FBYjtBQUNBSyxNQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBY0MsU0FBZDtBQUNBSCxNQUFBQSxJQUFJLENBQUNJLENBQUwsR0FBU1QsS0FBSyxHQUFDLENBQWY7QUFDQUssTUFBQUEsSUFBSSxDQUFDSyxDQUFMLEdBQVNILE1BQVQ7QUFDSCxLQUxJLE1BTUEsSUFBSVIsSUFBSSxLQUFLVixRQUFRLENBQUNNLE1BQXRCLEVBQThCO0FBQy9CVSxNQUFBQSxJQUFJLENBQUNMLEtBQUwsR0FBYUEsS0FBYjtBQUNBSyxNQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBY0MsU0FBZDtBQUNBSCxNQUFBQSxJQUFJLENBQUNJLENBQUwsR0FBU1QsS0FBSyxHQUFDLENBQWY7QUFDQUssTUFBQUEsSUFBSSxDQUFDSyxDQUFMLEdBQVMsQ0FBVDtBQUNIOztBQUVEUixJQUFBQSxRQUFRLENBQUNTLElBQVQsR0FBZ0JOLElBQUksQ0FBQ08sY0FBTCxFQUFoQjtBQUNIO0FBckRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBXYWxsVHlwZSA9IGNjLkVudW0oe1xuICAgTGVmdDogMCxcbiAgIFJpZ2h0OiAxLFxuICAgVG9wOiAyLFxuICAgQm90dG9tOiAzXG59KTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgZGVmYXVsdDogV2FsbFR5cGUuTGVmdCxcbiAgICAgICAgICAgIHR5cGU6IFdhbGxUeXBlXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICB3aWR0aDogNVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgIGlmICghY29sbGlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XG4gICAgICAgIHZhciB0eXBlID0gdGhpcy50eXBlO1xuICAgICAgICBcbiAgICAgICAgdmFyIHdpZHRoID0gY2Mud2luU2l6ZS53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgdmFyIHdhbGxXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZSA9PT0gV2FsbFR5cGUuTGVmdCkge1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gd2FsbFdpZHRoO1xuICAgICAgICAgICAgbm9kZS54ID0gMDtcbiAgICAgICAgICAgIG5vZGUueSA9IGhlaWdodC8yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFdhbGxUeXBlLlJpZ2h0KSB7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSB3YWxsV2lkdGg7XG4gICAgICAgICAgICBub2RlLnggPSB3aWR0aDtcbiAgICAgICAgICAgIG5vZGUueSA9IGhlaWdodC8yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFdhbGxUeXBlLlRvcCkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSB3YWxsV2lkdGg7XG4gICAgICAgICAgICBub2RlLnggPSB3aWR0aC8yO1xuICAgICAgICAgICAgbm9kZS55ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFdhbGxUeXBlLkJvdHRvbSkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSB3YWxsV2lkdGg7XG4gICAgICAgICAgICBub2RlLnggPSB3aWR0aC8yO1xuICAgICAgICAgICAgbm9kZS55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29sbGlkZXIuc2l6ZSA9IG5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/follow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b32bd3OnnFAGLz+qHe6j/Tj', 'follow');
// script/follow.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    //只能在PC环境下使用 （键盘操作）
    this.node.active = !cc.sys.isMobile;

    if (!this.target) {
      return;
    }

    var folllow = cc.follow(this.target, cc.rect(0, 0, 2000, 2000));
    this.node.runAction(folllow);
    console.log();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZm9sbG93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwidHlwZSIsIk5vZGUiLCJvbkxvYWQiLCJub2RlIiwiYWN0aXZlIiwic3lzIiwiaXNNb2JpbGUiLCJmb2xsbG93IiwiZm9sbG93IiwicmVjdCIsInJ1bkFjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBQztBQUNQQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZMO0FBREQsR0FITjtBQVVMQyxFQUFBQSxNQVZLLG9CQVVLO0FBQ047QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsQ0FBQ1QsRUFBRSxDQUFDVSxHQUFILENBQU9DLFFBQTNCOztBQUVBLFFBQUcsQ0FBQyxLQUFLUCxNQUFULEVBQWdCO0FBQ1o7QUFDSDs7QUFFRCxRQUFJUSxPQUFPLEdBQUdaLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVLEtBQUtULE1BQWYsRUFBd0JKLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksSUFBWixFQUFpQixJQUFqQixDQUF4QixDQUFkO0FBQ0EsU0FBS04sSUFBTCxDQUFVTyxTQUFWLENBQW9CSCxPQUFwQjtBQUNBSSxJQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDSDtBQXJCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczp7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvL+WPquiDveWcqFBD546v5aKD5LiL5L2/55SoIO+8iOmUruebmOaTjeS9nO+8iVxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gIWNjLnN5cy5pc01vYmlsZTtcblxuICAgICAgICBpZighdGhpcy50YXJnZXQpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm9sbGxvdyA9IGNjLmZvbGxvdyh0aGlzLnRhcmdldCwgIGNjLnJlY3QoMCwwLDIwMDAsMjAwMCkpXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oZm9sbGxvdyk7XG4gICAgICAgIGNvbnNvbGUubG9nKClcbiAgICB9XG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Utils/ColliderListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d521lufetMT5vQ3TgCTnb5', 'ColliderListener');
// script/ColliderListener.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true; // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    // this.touchingNumber = 0;
  },
  onCollisionEnter: function onCollisionEnter(other) {
    console.log("onCollisionEnter");
    this.node.color = cc.Color.RED; // this.touchingNumber ++;
  },
  onCollisionStay: function onCollisionStay(other) {
    console.log("onCollisionStay"); // console.log('on collision stay');
  },
  onCollisionExit: function onCollisionExit() {
    console.log("onCollisionExit");
    this.touchingNumber--; // if (this.touchingNumber === 0) {

    this.node.color = cc.Color.WHITE; // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQ29sbGlkZXJMaXN0ZW5lci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJjb25zb2xlIiwibG9nIiwibm9kZSIsImNvbG9yIiwiQ29sb3IiLCJSRUQiLCJvbkNvbGxpc2lvblN0YXkiLCJvbkNvbGxpc2lvbkV4aXQiLCJ0b3VjaGluZ051bWJlciIsIldISVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQkgsSUFBQUEsRUFBRSxDQUFDSSxRQUFILENBQVlDLG1CQUFaLEdBQWtDQyxPQUFsQyxHQUE0QyxJQUE1QztBQUNBTixJQUFBQSxFQUFFLENBQUNJLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NFLGdCQUFsQyxHQUFxRCxJQUFyRCxDQUhnQixDQUloQjtBQUVBO0FBQ0gsR0FYSTtBQWFMQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQjtBQUMvQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0JiLEVBQUUsQ0FBQ2MsS0FBSCxDQUFTQyxHQUEzQixDQUYrQixDQUcvQjtBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxlQUFlLEVBQUUseUJBQVVQLEtBQVYsRUFBaUI7QUFDOUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBRDhCLENBRTlCO0FBQ0gsR0F0Qkk7QUF3QkxNLEVBQUFBLGVBQWUsRUFBRSwyQkFBWTtBQUN6QlAsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQSxTQUFLTyxjQUFMLEdBRnlCLENBR3pCOztBQUNJLFNBQUtOLElBQUwsQ0FBVUMsS0FBVixHQUFrQmIsRUFBRSxDQUFDYyxLQUFILENBQVNLLEtBQTNCLENBSnFCLENBS3pCO0FBQ0g7QUE5QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhpcy50b3VjaGluZ051bWJlciA9IDA7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ29sbGlzaW9uRW50ZXJcIilcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xuICAgICAgICAvLyB0aGlzLnRvdWNoaW5nTnVtYmVyICsrO1xuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvblN0YXk6IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ29sbGlzaW9uU3RheVwiKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb24gY29sbGlzaW9uIHN0YXknKTtcbiAgICB9LFxuXG4gICAgb25Db2xsaXNpb25FeGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Db2xsaXNpb25FeGl0XCIpXG4gICAgICAgIHRoaXMudG91Y2hpbmdOdW1iZXIgLS07XG4gICAgICAgIC8vIGlmICh0aGlzLnRvdWNoaW5nTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn0pO1xuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/heroControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '346f4hKDgJNH5/fOZzX8NZz', 'heroControl');
// script/heroControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: cc.v2(0, 0),
    maxSpeed: cc.v2(2000, 2000),
    gravity: -1000,
    drag: 1000,
    direction: 0,
    jumpSpeed: 300,
    _lastSpeedY: 0
  },
  // use this for initialization
  onLoad: function onLoad() {
    //add keyboard input listener to call turnLeft and turnRight
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    this.collisionX = 0;
    this.collisionY = 0;
    this.jumping = true;
    this.prePosition = cc.v2();
    this.preStep = cc.v2();
    this.touchingNumber = 0;
  },
  onEnable: function onEnable() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true;
  },
  onDisable: function onDisable() {
    cc.director.getCollisionManager().enabled = false;
    cc.director.getCollisionManager().enabledDebugDraw = false;
  },
  onKeyPressed: function onKeyPressed(event) {
    var keyCode = event.keyCode;

    switch (keyCode) {
      case cc.macro.KEY.a:
      case cc.macro.KEY.left:
        this.direction = -1;
        break;

      case cc.macro.KEY.d:
      case cc.macro.KEY.right:
        this.direction = 1;
        break;

      case cc.macro.KEY.w:
      case cc.macro.KEY.up:
        if (!this.jumping) {
          this.jumping = true;
          this.speed.y = this.jumpSpeed > this.maxSpeed.y ? this.maxSpeed.y : this.jumpSpeed;
          this._lastSpeedY = this.jumpSpeed > this.maxSpeed.y ? this.maxSpeed.y : this.jumpSpeed;
        }

        break;
    }
  },
  onKeyReleased: function onKeyReleased(event) {
    var keyCode = event.keyCode;

    switch (keyCode) {
      case cc.macro.KEY.a:
      case cc.macro.KEY.left:
      case cc.macro.KEY.d:
      case cc.macro.KEY.right:
        this.direction = 0;
        break;
    }
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.node.color = cc.Color.RED;
    this.touchingNumber++; // 1st step 
    // get pre aabb, go back before collision

    var otherAabb = other.world.aabb;
    var otherPreAabb = other.world.preAabb.clone();
    var selfAabb = self.world.aabb;
    var selfPreAabb = self.world.preAabb.clone(); // 2nd step
    // forward x-axis, check whether collision on x-axis

    selfPreAabb.x = selfAabb.x;
    otherPreAabb.x = otherAabb.x;

    if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
      if (this.speed.x < 0 && selfPreAabb.xMax > otherPreAabb.xMax) {
        this.node.x = otherPreAabb.xMax - this.node.parent.x;
        this.collisionX = -1;
      } else if (this.speed.x > 0 && selfPreAabb.xMin < otherPreAabb.xMin) {
        this.node.x = otherPreAabb.xMin - selfPreAabb.width - this.node.parent.x;
        this.collisionX = 1;
      }

      this.speed.x = 0;
      other.touchingX = true;
      return;
    } // 3rd step
    // forward y-axis, check whether collision on y-axis


    selfPreAabb.y = selfAabb.y;
    otherPreAabb.y = otherAabb.y;

    if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
      if (this.speed.y < 0 && selfPreAabb.yMax > otherPreAabb.yMax) {
        this.node.y = otherPreAabb.yMax - this.node.parent.y;
        this.jumping = false;
        this.collisionY = -1;
      } else if (this.speed.y > 0 && selfPreAabb.yMin < otherPreAabb.yMin) {
        this.node.y = otherPreAabb.yMin - selfPreAabb.height - this.node.parent.y;
        this.collisionY = 1;
      }

      this.speed.y = 0;
      this._lastSpeedY = 0;
      other.touchingY = true;
    }
  },
  onCollisionStay: function onCollisionStay(other, self) {
    if (this.collisionY === -1) {
      if (other.node.group === 'Platform') {
        var motion = other.node.getComponent('PlatformMotion');

        if (motion) {
          this.node.x += motion._movedDiff;
        }
      } // this.node.y = other.world.aabb.yMax;
      // var offset = cc.v2(other.world.aabb.x - other.world.preAabb.x, 0);
      // var temp = cc.affineTransformClone(self.world.transform);
      // temp.tx = temp.ty = 0;
      // offset = cc.pointApplyAffineTransform(offset, temp);
      // this.node.x += offset.x;

    }
  },
  onCollisionExit: function onCollisionExit(other) {
    this.touchingNumber--;

    if (this.touchingNumber === 0) {
      this.node.color = cc.Color.WHITE;
    }

    if (other.touchingX) {
      this.collisionX = 0;
      other.touchingX = false;
    } else if (other.touchingY) {
      other.touchingY = false;
      this.collisionY = 0;
      this.jumping = true;
    }
  },
  update: function update(dt) {
    if (this.jumping) {
      this.speed.y += this.gravity * dt;

      if (Math.abs(this.speed.y) > this.maxSpeed.y) {
        this.speed.y = this.speed.y > 0 ? this.maxSpeed.y : -this.maxSpeed.y;
      }
    }

    if (this.direction === 0) {
      if (this.speed.x > 0) {
        this.speed.x -= this.drag * dt;
        if (this.speed.x <= 0) this.speed.x = 0;
      } else if (this.speed.x < 0) {
        this.speed.x += this.drag * dt;
        if (this.speed.x >= 0) this.speed.x = 0;
      }
    } else {
      this.speed.x += (this.direction > 0 ? 1 : -1) * this.drag * dt;

      if (Math.abs(this.speed.x) > this.maxSpeed.x) {
        this.speed.x = this.speed.x > 0 ? this.maxSpeed.x : -this.maxSpeed.x;
      }
    }

    if (this.speed.x * this.collisionX > 0) {
      this.speed.x = 0;
    }

    this.prePosition.x = this.node.x;
    this.prePosition.y = this.node.y;
    this.preStep.x = this.speed.x * dt;
    this.preStep.y = this.speed.y * dt;
    this.node.x += this.speed.x * dt;

    if (this._lastSpeedY === 0 || this.speed.y === 0 || this._lastSpeedY / Math.abs(this._lastSpeedY) === this.speed.y / Math.abs(this.speed.y)) {
      this.node.y += (this._lastSpeedY + this.speed.y) * dt / 2;
    } else {
      this.node.y += -this._lastSpeedY / this.gravity / 2 * this._lastSpeedY + this.speed.y / this.gravity / 2 * this.speed.y;
    }

    this._lastSpeedY = this.speed.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvaGVyb0NvbnRyb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInYyIiwibWF4U3BlZWQiLCJncmF2aXR5IiwiZHJhZyIsImRpcmVjdGlvbiIsImp1bXBTcGVlZCIsIl9sYXN0U3BlZWRZIiwib25Mb2FkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleVByZXNzZWQiLCJLRVlfVVAiLCJvbktleVJlbGVhc2VkIiwiY29sbGlzaW9uWCIsImNvbGxpc2lvblkiLCJqdW1waW5nIiwicHJlUG9zaXRpb24iLCJwcmVTdGVwIiwidG91Y2hpbmdOdW1iZXIiLCJvbkVuYWJsZSIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJlbmFibGVkRGVidWdEcmF3Iiwib25EaXNhYmxlIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwibGVmdCIsImQiLCJyaWdodCIsInciLCJ1cCIsInkiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwibm9kZSIsImNvbG9yIiwiQ29sb3IiLCJSRUQiLCJvdGhlckFhYmIiLCJ3b3JsZCIsImFhYmIiLCJvdGhlclByZUFhYmIiLCJwcmVBYWJiIiwiY2xvbmUiLCJzZWxmQWFiYiIsInNlbGZQcmVBYWJiIiwieCIsIkludGVyc2VjdGlvbiIsInJlY3RSZWN0IiwieE1heCIsInBhcmVudCIsInhNaW4iLCJ3aWR0aCIsInRvdWNoaW5nWCIsInlNYXgiLCJ5TWluIiwiaGVpZ2h0IiwidG91Y2hpbmdZIiwib25Db2xsaXNpb25TdGF5IiwiZ3JvdXAiLCJtb3Rpb24iLCJnZXRDb21wb25lbnQiLCJfbW92ZWREaWZmIiwib25Db2xsaXNpb25FeGl0IiwiV0hJVEUiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3Mi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TUFHSztBQUNELFdBQUtoQyxJQUFMLENBQVVKLENBQVYsSUFBZ0IsQ0FBRSxLQUFLaEMsV0FBUCxHQUFxQixLQUFLSixPQUExQixHQUFvQyxDQUFwQyxHQUF3QyxLQUFLSSxXQUE3QyxHQUEyRCxLQUFLUCxLQUFMLENBQVd1QyxDQUFYLEdBQWUsS0FBS3BDLE9BQXBCLEdBQThCLENBQTlCLEdBQWtDLEtBQUtILEtBQUwsQ0FBV3VDLENBQXhIO0FBQ0g7O0FBRUQsU0FBS2hDLFdBQUwsR0FBbUIsS0FBS1AsS0FBTCxDQUFXdUMsQ0FBOUI7QUFDSDtBQW5OSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwZWVkOiBjYy52MigwLCAwKSxcbiAgICAgICAgbWF4U3BlZWQ6IGNjLnYyKDIwMDAsIDIwMDApLFxuICAgICAgICBncmF2aXR5OiAtMTAwMCxcbiAgICAgICAgZHJhZzogMTAwMCxcbiAgICAgICAgZGlyZWN0aW9uOiAwLFxuICAgICAgICBqdW1wU3BlZWQ6IDMwMCxcbiAgICAgICAgX2xhc3RTcGVlZFk6IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vYWRkIGtleWJvYXJkIGlucHV0IGxpc3RlbmVyIHRvIGNhbGwgdHVybkxlZnQgYW5kIHR1cm5SaWdodFxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlQcmVzc2VkLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVJlbGVhc2VkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSAwO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSAwO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucHJlUG9zaXRpb24gPSBjYy52MigpO1xuICAgICAgICB0aGlzLnByZVN0ZXAgPSBjYy52MigpO1xuXG4gICAgICAgIHRoaXMudG91Y2hpbmdOdW1iZXIgPSAwO1xuICAgIH0sXG5cbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uS2V5UHJlc3NlZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgc3dpdGNoKGtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQueSA9IHRoaXMuanVtcFNwZWVkID4gdGhpcy5tYXhTcGVlZC55ID8gdGhpcy5tYXhTcGVlZC55IDogdGhpcy5qdW1wU3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RTcGVlZFkgPSB0aGlzLmp1bXBTcGVlZCA+IHRoaXMubWF4U3BlZWQueSA/IHRoaXMubWF4U3BlZWQueSA6IHRoaXMuanVtcFNwZWVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbktleVJlbGVhc2VkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgICAgICBzd2l0Y2goa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG5cbiAgICAgICAgdGhpcy50b3VjaGluZ051bWJlciArKztcblxuICAgICAgICAvLyAxc3Qgc3RlcCBcbiAgICAgICAgLy8gZ2V0IHByZSBhYWJiLCBnbyBiYWNrIGJlZm9yZSBjb2xsaXNpb25cbiAgICAgICAgdmFyIG90aGVyQWFiYiA9IG90aGVyLndvcmxkLmFhYmI7XG4gICAgICAgIHZhciBvdGhlclByZUFhYmIgPSBvdGhlci53b3JsZC5wcmVBYWJiLmNsb25lKCk7XG5cbiAgICAgICAgdmFyIHNlbGZBYWJiID0gc2VsZi53b3JsZC5hYWJiO1xuICAgICAgICB2YXIgc2VsZlByZUFhYmIgPSBzZWxmLndvcmxkLnByZUFhYmIuY2xvbmUoKTtcblxuICAgICAgICAvLyAybmQgc3RlcFxuICAgICAgICAvLyBmb3J3YXJkIHgtYXhpcywgY2hlY2sgd2hldGhlciBjb2xsaXNpb24gb24geC1heGlzXG4gICAgICAgIHNlbGZQcmVBYWJiLnggPSBzZWxmQWFiYi54O1xuICAgICAgICBvdGhlclByZUFhYmIueCA9IG90aGVyQWFiYi54O1xuXG4gICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucmVjdFJlY3Qoc2VsZlByZUFhYmIsIG90aGVyUHJlQWFiYikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkLnggPCAwICYmIChzZWxmUHJlQWFiYi54TWF4ID4gb3RoZXJQcmVBYWJiLnhNYXgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBvdGhlclByZUFhYmIueE1heCAtIHRoaXMubm9kZS5wYXJlbnQueDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc3BlZWQueCA+IDAgJiYgKHNlbGZQcmVBYWJiLnhNaW4gPCBvdGhlclByZUFhYmIueE1pbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IG90aGVyUHJlQWFiYi54TWluIC0gc2VsZlByZUFhYmIud2lkdGggLSB0aGlzLm5vZGUucGFyZW50Lng7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zcGVlZC54ID0gMDtcbiAgICAgICAgICAgIG90aGVyLnRvdWNoaW5nWCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyAzcmQgc3RlcFxuICAgICAgICAvLyBmb3J3YXJkIHktYXhpcywgY2hlY2sgd2hldGhlciBjb2xsaXNpb24gb24geS1heGlzXG4gICAgICAgIHNlbGZQcmVBYWJiLnkgPSBzZWxmQWFiYi55O1xuICAgICAgICBvdGhlclByZUFhYmIueSA9IG90aGVyQWFiYi55O1xuXG4gICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucmVjdFJlY3Qoc2VsZlByZUFhYmIsIG90aGVyUHJlQWFiYikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkLnkgPCAwICYmIChzZWxmUHJlQWFiYi55TWF4ID4gb3RoZXJQcmVBYWJiLnlNYXgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBvdGhlclByZUFhYmIueU1heCAtIHRoaXMubm9kZS5wYXJlbnQueTtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc3BlZWQueSA+IDAgJiYgKHNlbGZQcmVBYWJiLnlNaW4gPCBvdGhlclByZUFhYmIueU1pbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IG90aGVyUHJlQWFiYi55TWluIC0gc2VsZlByZUFhYmIuaGVpZ2h0IC0gdGhpcy5ub2RlLnBhcmVudC55O1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3BlZWQueSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9sYXN0U3BlZWRZID0gMDtcbiAgICAgICAgICAgIG90aGVyLnRvdWNoaW5nWSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvblN0YXk6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSAtMSkge1xuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09ICdQbGF0Zm9ybScpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW90aW9uID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoJ1BsYXRmb3JtTW90aW9uJyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSBtb3Rpb24uX21vdmVkRGlmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS55ID0gb3RoZXIud29ybGQuYWFiYi55TWF4O1xuXG4gICAgICAgICAgICAvLyB2YXIgb2Zmc2V0ID0gY2MudjIob3RoZXIud29ybGQuYWFiYi54IC0gb3RoZXIud29ybGQucHJlQWFiYi54LCAwKTtcblxuICAgICAgICAgICAgLy8gdmFyIHRlbXAgPSBjYy5hZmZpbmVUcmFuc2Zvcm1DbG9uZShzZWxmLndvcmxkLnRyYW5zZm9ybSk7XG4gICAgICAgICAgICAvLyB0ZW1wLnR4ID0gdGVtcC50eSA9IDA7XG5cbiAgICAgICAgICAgIC8vIG9mZnNldCA9IGNjLnBvaW50QXBwbHlBZmZpbmVUcmFuc2Zvcm0ob2Zmc2V0LCB0ZW1wKTtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS54ICs9IG9mZnNldC54O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHRoaXMudG91Y2hpbmdOdW1iZXIgLS07XG4gICAgICAgIGlmICh0aGlzLnRvdWNoaW5nTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlci50b3VjaGluZ1gpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IDA7XG4gICAgICAgICAgICBvdGhlci50b3VjaGluZ1ggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvdGhlci50b3VjaGluZ1kpIHtcbiAgICAgICAgICAgIG90aGVyLnRvdWNoaW5nWSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gMDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy5zcGVlZC55ICs9IHRoaXMuZ3Jhdml0eSAqIGR0O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc3BlZWQueSkgPiB0aGlzLm1heFNwZWVkLnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkLnkgPSB0aGlzLnNwZWVkLnkgPiAwID8gdGhpcy5tYXhTcGVlZC55IDogLXRoaXMubWF4U3BlZWQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQueCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkLnggLT0gdGhpcy5kcmFnICogZHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQueCA8PSAwKSB0aGlzLnNwZWVkLnggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zcGVlZC54IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQueCArPSB0aGlzLmRyYWcgKiBkdDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZC54ID49IDApIHRoaXMuc3BlZWQueCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkLnggKz0gKHRoaXMuZGlyZWN0aW9uID4gMCA/IDEgOiAtMSkgKiB0aGlzLmRyYWcgKiBkdDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNwZWVkLngpID4gdGhpcy5tYXhTcGVlZC54KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZC54ID0gdGhpcy5zcGVlZC54ID4gMCA/IHRoaXMubWF4U3BlZWQueCA6IC10aGlzLm1heFNwZWVkLng7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zcGVlZC54ICogdGhpcy5jb2xsaXNpb25YID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZC54ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJlUG9zaXRpb24ueCA9IHRoaXMubm9kZS54O1xuICAgICAgICB0aGlzLnByZVBvc2l0aW9uLnkgPSB0aGlzLm5vZGUueTtcblxuICAgICAgICB0aGlzLnByZVN0ZXAueCA9IHRoaXMuc3BlZWQueCAqIGR0O1xuICAgICAgICB0aGlzLnByZVN0ZXAueSA9IHRoaXMuc3BlZWQueSAqIGR0O1xuXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQueCAqIGR0O1xuICAgICAgICBpZiAodGhpcy5fbGFzdFNwZWVkWSA9PT0gMCB8fCB0aGlzLnNwZWVkLnkgPT09IDAgfHwgdGhpcy5fbGFzdFNwZWVkWSAvIE1hdGguYWJzKHRoaXMuX2xhc3RTcGVlZFkpID09PSB0aGlzLnNwZWVkLnkgLyBNYXRoLmFicyh0aGlzLnNwZWVkLnkpKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSArPSAodGhpcy5fbGFzdFNwZWVkWSArIHRoaXMuc3BlZWQueSkgKiBkdCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSArPSAgLSB0aGlzLl9sYXN0U3BlZWRZIC8gdGhpcy5ncmF2aXR5IC8gMiAqIHRoaXMuX2xhc3RTcGVlZFkgKyB0aGlzLnNwZWVkLnkgLyB0aGlzLmdyYXZpdHkgLyAyICogdGhpcy5zcGVlZC55O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdFNwZWVkWSA9IHRoaXMuc3BlZWQueTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
