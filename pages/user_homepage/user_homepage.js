// pages/user_homepage/user_homepage.js
import * as echarts from '../../ec-canvas/echarts';
let chartLine;
let chartLine1;
let chartLine2;

function getOption(data) {
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            show: false
        },
        color: ['#447ACE', '#FFC000'],
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '90%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: data || [{
                    value: 100,
                    name: '总场次'
                },
                {
                    value: 0,
                    name: '直接访问'
                },
            ]
        }]
    };
    return option;
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ecLine: {
            onInit: function (canvas, width, height) {
                //初始化echarts元素，绑定到全局变量，方便更改数据
                chartLine = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(chartLine);

                //可以先不setOption，等数据加载好后赋值，
                //不过那样没setOption前，echats元素是一片空白，体验不好，所有我先set。
                var data = [{
                        value: 20,
                        name: '总场次'
                    },
                    {
                        value: 80,
                        name: '直接访问'
                    }
                ]
                var option = getOption(data);
                chartLine.setOption(option);
            }
        },
        ecLine1: {
            onInit: function (canvas, width, height) {
                //初始化echarts元素，绑定到全局变量，方便更改数据
                chartLine1 = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(chartLine1);

                //可以先不setOption，等数据加载好后赋值，
                //不过那样没setOption前，echats元素是一片空白，体验不好，所有我先set。
                var data = [{
                        value: 50,
                        name: '总场次'
                    },
                    {
                        value: 50,
                        name: '直接访问'
                    }
                ]
                var option = getOption(data);
                chartLine1.setOption(option);
            }
        },
        ecLine2: {
            onInit: function (canvas, width, height) {
                //初始化echarts元素，绑定到全局变量，方便更改数据
                chartLine2 = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(chartLine2);

                //可以先不setOption，等数据加载好后赋值，
                //不过那样没setOption前，echats元素是一片空白，体验不好，所有我先set。
                var data = [{
                        value: 60,
                        name: '总场次'
                    },
                    {
                        value: 40,
                        name: '直接访问'
                    }
                ]
                var option = getOption(data);
                chartLine2.setOption(option);
            }
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var data = [{
            value: 90,
            name: '总场次'
        }, {
            value: 10,
            name: '直接访问'
        }]
        // // 方法一：
        setTimeout(() => {
            var option = getOption(data);
            chartLine.setOption(option);
        }, 2000)
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