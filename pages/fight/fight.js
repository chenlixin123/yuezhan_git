Page({

  /**
   * 页面的初始数据
   */
  data: {
    Option: [
      {
        id: '1',
        name: '全部'
       },
       {
        id: '2',
        name: 'LOL'
       },
       {
        id: '3',
        name: '英雄联盟'
       },
    ],
   isShow: false,
   current: {},
   Option1: [
    {
      id: '1',
      name: '全部'
     },
     {
      id: '2',
      name: '个人'
     },
     {
      id: '3',
      name: '战队'
     },
  ],
   isShow1: false,
   current1: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      current:that.data.Option[0],
      current1:that.data.Option1[0]
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

  optionTap1(e) {
    console.log(e)
   let dataset = e.target.dataset
   this.setData({
    current1: dataset,
    isShow1: false
   });
  },
  openClose1() {
   this.setData({
    isShow1: !this.data.isShow1
   })
  },
  //发起挑战
  challenge(){
    console.log('发起挑战')
  },
  //对战详情
  details(){
    wx.navigateTo({
      url: '/pages/fight_details/fight_details',
    })
  },
  //胜率点击
  win(){
    console.log('胜率')
  },
  //信用值点击
  credit(){
    console.log('信用值点击')
  },
  //游戏币点击
  currency(){
    console.log('游戏币点击')
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