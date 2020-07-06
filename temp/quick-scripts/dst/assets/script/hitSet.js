
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