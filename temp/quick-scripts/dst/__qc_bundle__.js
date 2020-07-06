
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
require('./assets/script/ColliderListener');
require('./assets/script/Utils/PlatformMotion');
require('./assets/script/Utils/SimpleMotion');
require('./assets/script/Utils/Wall');

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
                    var __filename = 'preview-scripts/assets/script/ColliderListener.js';
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
