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
        title: '轻博客小程序源码',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner-01.png'
      }, {
        id: 1,
        type: 'image',
        title: 'swoole+layui即时通信',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner-02.png',
      }, {
        id: 2,
        type: 'image',
        title: '基于TP5的高可用的内容管理系统',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner-03.png'
      }, {
        id: 3,
        type: 'image',
        title: '微信小程序云开发常见问题汇总',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner-04.png'
      }, {
        id: 4,
        type: 'image',
        title: '全能建站系统',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner-05.png'
      }, {
        id: 5,
        type: 'image',
        title: '建站首选',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner-06.png'
      }],
  },

  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })   
  },
  goToDetail(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id
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