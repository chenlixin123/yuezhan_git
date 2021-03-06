// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //跳转个人资料
  user_details(){
    wx.navigateTo({
      url: '/pages/user_details/user_details',
    })
  },
  //跳转个人主页
  user_homepage(){
    wx.navigateTo({
      url: '/pages/user_homepage/user_homepage',
    })
  },
  //跳转我的钱包
  my_wallet(){
    wx.navigateTo({
      url: '/pages/my_wallet/my_wallet',
    })
  },
  //跳转我的挑战
  my_challenge(){
    wx.navigateTo({
      url: '/pages/my_challenge/my_challenge',
    })
  },
  //跳转我的比赛
  my_match(){
    wx.navigateTo({
      url: '/pages/my_match/my_match',
    })
  },
  //跳转兑换记录
  exchange(){
    wx.navigateTo({
      url: '/pages/exchange/exchange',
    })
  },
  //跳转会员中心
  member(){
    wx.navigateTo({
      url: '/pages/member/member',
    })
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