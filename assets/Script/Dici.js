var tmpPlayer = require("Player");
cc.Class({
    extends: cc.Component,

    properties: {
        dieAudio: {
            default: null,
            type: cc.AudioClip
        }
    },


    onLoad: function () {
        // var self= this;
        // var listener = {
        //     event: cc.EventListener.TOUCH_ONE_BY_ONE,
        //     onTouchBegan: function (touches, event) {
        //         var goAction= cc.moveBy(0.2,cc.v2(0,140));
        //         self.node.runAction(goAction);
        //         return true; //这里必须要写 return true
        //     },
        //     onTouchMoved: function (touches, event) {

        //     },
        //     onTouchEnded: function (touches, event) {

        //     },
        //     onTouchCancelled: function (touches, event) {
        //     }
        // }
        // cc.eventManager.addListener(listener, this.node);

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);

    },

    onTouchBegan: function () {
        var goAction = cc.moveBy(0.2, cc.v2(0, 140));
        this.node.runAction(goAction);
        return true; //这里必须要写 return true
    },

    onTouchMoved: function () {

    },

    onTouchEnded: function () {

    },

    onTouchCancelled: function () {

    },

    noteBox: function () {
        return this.node.getBoundingBoxToWorld();
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var player = cc.find("Canvas/normal").getComponent(tmpPlayer);

        if (player.node.getBoundingBoxToWorld().intersects(this.noteBox())) {

            cc.audioEngine.playEffect(this.dieAudio, false);
            cc.director.loadScene('OverScene');
            //cc.log('碰撞');
        }

    },

    onDestroy: function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
    }
});
