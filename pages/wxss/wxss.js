// pages/wxss/wxss.js
Page({
    data: {
        inputShowed: false,
        inputVal: "",
        isActive: false,
        movies:['狩猎','食梦者','星际穿越'],
        nums:[
            ['火影忍者','鸣人','佐助'],
            ['海贼王','路飞','索隆'],
            ['死神','黑崎一护','露琪亚']
        ]
    },
    btn1(){
            this.setData({
            nums:[
                ['火影忍者','鸣人','佐助'],
                ['名侦探柯南','柯南','平次'],
                ['海贼王','路飞','索隆'],
                ['死神','黑崎一护','露琪亚']
            ]
        })
    },
    btnChange() {
        this.setData({
            isActive: !this.data.isActive
        })
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    }
})