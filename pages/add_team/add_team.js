// pages/add_team/add_team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Option: [
      {
        id: '5',
        name: '5'
       },
       {
        id: '6',
        name: '6'
       },
       {
        id: '7',
        name: '7'
       },
       {
        id: '8',
        name: '8'
       },
       {
        id: '9',
        name: '9'
       },
       {
        id: '10',
        name: '10'
       },
    ],
   isShow: false,
   current: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      current:that.data.Option[0],
    })
  },
  optionTap(e) {
    console.log(e)
   let dataset = e.target.dataset
   this.setData({
    current: dataset,
    isShow: false
   });
  },
  openClose() {
   this.setData({
    isShow: !this.data.isShow
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