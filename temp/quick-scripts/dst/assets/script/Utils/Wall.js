
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