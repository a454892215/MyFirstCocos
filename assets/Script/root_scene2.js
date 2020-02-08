cc.Class({
    extends: cc.Component,

    properties: {
     
    },


     onLoad () {
         cc.log("======onLoad======")
     },

    start () {
        cc.log("======start======")
    },

    onClick: function (event, customEventData) {
        cc.log("======click======:" + customEventData)
        var node = event.target;
        var button = node.getComponent(cc.Button);
        cc.log("======click======customEventData:" + customEventData)
        cc.director.loadScene("Scene2");
    }

    // update (dt) {},
});
