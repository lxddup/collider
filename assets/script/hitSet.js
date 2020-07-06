cc.Class({
    extends: cc.Component,

    properties: {
        collider: {
            default: null,
            type: cc.PolygonCollider
        },

        title: {
            default: null,
            type: cc.Label
        }
    },
    // use this for initialization
    onLoad: function () {

        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        this.title.string = 'normal';
        // this.touchingNumber = 0;

        this.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
            var touchLoc = touch.getLocation();
            if (cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points)) {
                this.title.string = 'Hit';
            }
            else {
                this.title.string = 'Not hit';
            }
        }, this);


        console.log( this.collider.world)
    }
});

