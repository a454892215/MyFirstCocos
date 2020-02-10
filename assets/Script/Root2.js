cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad() {

        let button = cc.find("Canvas/Root/Button1");
        button.on('click', button => {
            cc.log("======click======:" + button.name);
            cc.director.loadScene("Scene1");
        }, button);
    },

    start() {
        cc.log("======start======")
    },
    // update (dt) {},
});






