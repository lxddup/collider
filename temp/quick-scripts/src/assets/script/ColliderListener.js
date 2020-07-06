"use strict";
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