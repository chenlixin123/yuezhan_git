// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_data:[{
      id:1,
      path:'../../assets/image/image1.jpg'
    },{
      id:2,
      path:'../../assets/image/image2.jpg'
    },{
      id:3,
      path:'../../assets/image/image3.jpg'
    },{
      id:4,
      path:'../../assets/image/image4.jpg'
    }]
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
  //查看详情
  watch(){
    console.log('查看详情')
  },
  //挑战TA
  challenge(){
    console.log('挑战TA')
  },
//发起挑战
add(){
    console.log('发起挑战')
},
//跳转对战列表
fight(){
  wx.navigateTo({
    url: '/pages/fight/fight',
  })
},
//跳转比赛中心
match(){
  wx.navigateTo({
    url: '/pages/match/match',
  })
},
//跳转排行榜
ranking(){
  wx.navigateTo({
    url: '/pages/ranking_list/ranking_list',
  })
},
//跳转战队列表
team(){
  wx.navigateTo({
    url: '/pages/Team/Team',
  })
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
