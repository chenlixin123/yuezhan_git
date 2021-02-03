Page({

  /**
   * 页面的初始数据
   */
  data: {
    Option: [
      {
        id: '0',
        name: '全部'
       },
       {
        id: '1',
        name: 'LOL'
       },
       {
        id: '2',
        name: '英雄联盟'
       },
    ],
   isShow: false,
   current: {},
   Option1: [
    {
      id: '0',
      name: '比赛时间'
     },
     {
      id: '1',
      name: '由近到远'
     },
     {
      id: '2',
      name: '由远到近'
     },
  ],
   isShow1: false,
   current1: {},
   Option2: [
    {
      id: '0',
      name: '比赛热度'
     },
     {
      id: '1',
      name: '由高到低'
     },
     {
      id: '2',
      name: '由低到高'
     },
  ],
   isShow2: false,
   current2: {},
   Option3: [
    {
      id: '0',
      name: '比赛方式'
     },
     {
      id: '1',
      name: '线上'
     },
     {
      id: '2',
      name: '线下'
     },
  ],
   isShow3: false,
   current3: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      current:that.data.Option[0],
      current1:that.data.Option1[0],
      current2:that.data.Option2[0],
      current3:that.data.Option3[0]
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
  optionTap2(e) {
    console.log(e)
   let dataset = e.target.dataset
   this.setData({
    current2: dataset,
    isShow2: false
   });
  },
  openClose2() {
   this.setData({
    isShow2: !this.data.isShow2
   })
  },
  optionTap3(e) {
   let dataset = e.target.dataset
   this.setData({
    current3: dataset,
    isShow3: false
   });
  },
  openClose3() {
   this.setData({
    isShow3: !this.data.isShow3
   })
  },
  //发起挑战
  challenge(){
    console.log('发起挑战')
  },
  //对战详情
  details(){
    wx.navigateTo({
      url: '/pages/match_details/match_details',
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