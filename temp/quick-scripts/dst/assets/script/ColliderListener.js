
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