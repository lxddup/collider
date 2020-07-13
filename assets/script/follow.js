cc.Class({
    extends: cc.Component,

    properties:{
        target: {
            default: null,
            type: cc.Node
        }
    },

    onLoad () {
        //只能在PC环境下使用 （键盘操作）
        this.node.active = !cc.sys.isMobile;

        if(!this.target){
            return
        }

        let folllow = cc.follow(this.target,  cc.rect(0,0,2000,2000))
        this.node.runAction(folllow);
        console.log()
    }
});