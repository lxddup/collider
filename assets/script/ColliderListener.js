cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {

        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;

        // this.touchingNumber = 0;
    },

    onCollisionEnter: function (other) {
        console.log("onCollisionEnter")
        this.node.color = cc.Color.RED;
        // this.touchingNumber ++;
    },

    onCollisionStay: function (other) {
        console.log("onCollisionStay")
        // console.log('on collision stay');
    },

    onCollisionExit: function () {
        console.log("onCollisionExit")
        this.touchingNumber --;
        // if (this.touchingNumber === 0) {
            this.node.color = cc.Color.WHITE;
        // }
    }
});

