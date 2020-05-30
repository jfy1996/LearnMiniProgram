// pages/wxs/wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: 25.6666,
    time: 1560598160,
    titles: ['首页', '分类', '详情']
  },
  handleItemClick(event) {
    console.log(event)
    console.log(event.currentTarget.dataset.index)
    console.log(event.currentTarget.dataset.item)
  },
  //事件冒泡和捕获
  handleCaptrueView1() {
    console.log('handleCaptrueView1')
  },
  handleCaptrueView2() {
    console.log('handleCaptrueView2')
  },
  handleCaptrueView3() {
    console.log('handleCaptrueView3')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }
})