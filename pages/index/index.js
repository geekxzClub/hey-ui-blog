// index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigate: [{
      url: "/pages/category/category",
      type: "switchTab",
      text: "Category"
    }, {
      url: "/pages/about/about",
      type: "switchTab",
      text: "HBlog"
    }],
    copyright: " Copyright © 2021-2050 Hey UI.",
    cardCur: 0,
    isPlay: true,
    current: 0,//banner当前的index
    swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner1.jpg'
      }, {
        id: 1,
          type: 'image',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner2.jpg',
      }, {
        id: 2,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner3.jpg'
      }, {
        id: 3,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner4.jpg'
      }, {
        id: 4,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner5.jpg'
      }, {
        id: 5,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner6.jpg'
      }, {
        id: 6,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner1.jpg'
    }],
  },

  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})