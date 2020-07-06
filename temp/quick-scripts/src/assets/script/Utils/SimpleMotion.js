"use strict";
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